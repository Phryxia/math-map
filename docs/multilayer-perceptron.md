# 다층 퍼셉트론

# 개요

**다층 퍼셉트론(multilayer perceptron)** 은 직선 하나로 점들을 가르는 판정을 여러 개 만들고, 그 판정들의 결과를 다시 같은 방식으로 가르는 판정을 층층이 쌓은 함수다. 평면의 네 점 $(0,0)$, $(1,1)$ 에 $0$ 을, $(0,1)$, $(1,0)$ 에 $1$ 을 붙이면 어떤 직선도 두 부류를 가르지 못한다. 다층 퍼셉트론은 "적어도 하나가 $1$ 인가" 와 "둘 다 $1$ 인가" 를 각각 직선으로 판정한 뒤 첫째는 참이고 둘째는 거짓인 점을 골라 이 네 점을 가른다.

# 직관

$(0,0)$, $(1,1)$ 에 $0$, $(0,1)$, $(1,0)$ 에 $1$ 을 주는 함수를 배타적 논리합(exclusive or)이라 한다. [퍼셉트론](perceptron.md)은 $w_1x_1+w_2x_2+b\gt 0$ 인지로 판정한다. 이 판정이 네 점을 맞히려면 $b\le 0$, $w_1+b\gt 0$, $w_2+b\gt 0$, $w_1+w_2+b\le 0$ 이어야 한다. 가운데 두 식을 더하면 $w_1+w_2+b\gt -b\ge 0$ 이 되어 넷째 식과 어긋나므로, 이런 직선은 없다.

판정을 둘 만든다. $h_1$ 은 $x_1+x_2-0.5\gt 0$ 인지, $h_2$ 는 $x_1+x_2-1.5\gt 0$ 인지를 $1$, $0$ 으로 적는다. 네 점에서 $(h_1,h_2)$ 는 $(0,0)$, $(1,0)$, $(1,0)$, $(1,1)$ 이다. 이 새 좌표에서는 $h_1-h_2-0.5\gt 0$ 이 $(1,0)$ 만 골라내므로, 둘째 층의 직선 하나가 배타적 논리합을 계산한다.

가중치를 손으로 정하지 않고 자료에서 찾으려면 [경사하강법](gradient-descent.md)을 쓴다. 그런데 $1$, $0$ 으로 뛰는 판정은 기울기가 거의 모든 곳에서 $0$ 이라 경사하강법이 움직이지 않는다. 그래서 뛰는 판정을 $1/(1+e^{-t})$ 처럼 매끄럽게 올라가는 함수로 바꾸고, 층을 합성한 함수의 기울기를 연쇄법칙(chain rule)으로 계산한다.

# 정의

## 층과 활성함수

깊이 $L$ 의 다층 퍼셉트론은 행렬 $W^\ell$, 벡터 $b^\ell$ ($\ell=1,\dots,L$) 과 실함수 $\sigma$ 로 정한 함수 $f:\mathbb R^{n_0}\to\mathbb R^{n_L}$ 이다.

$$
h^0=x,\qquad z^\ell=W^\ell h^{\ell-1}+b^\ell,\qquad h^\ell=\sigma(z^\ell)\quad(\ell\lt L),\qquad f(x)=z^L
$$

$\sigma$ 는 성분마다 적용하고 **활성함수(activation function)** 라 한다. $h^\ell$ 의 성분을 은닉 단위(hidden unit), 그 개수 $n_\ell$ 을 $\ell$ 번째 층의 너비라 한다. 직관 절의 신경망은 $L=2$, $n_1=2$ 이고 활성함수가 계단함수이며 출력에 계단함수를 한 번 더 씌운 것이다.

자주 쓰는 활성함수는 로지스틱 함수(logistic function) $\sigma(t)=1/(1+e^{-t})$ 와 정류 선형 단위(rectified linear unit, ReLU) $\sigma(t)=\max(0,t)$ 다.

## 학습

자료 $(x_i,y_i)$ 와 손실 $\ell(f(x),y)$ 에 대해 모든 $W^\ell$, $b^\ell$ 를 모은 매개변수 $\theta$ 의 함수

$$
J(\theta)=\frac1m\sum\_{i=1}^m\ell(f_\theta(x_i),y_i)
$$

를 줄이는 것을 학습이라 한다. 보통 자료의 일부로 기울기를 추정하는 [확률적 경사하강법](stochastic-gradient-descent.md)을 쓴다.

## 역전파

**역전파(backpropagation)** 는 연쇄법칙으로 $J$ 의 기울기를 출력층부터 거꾸로 계산하는 절차다.[^4] 자료 하나에서 $\delta^\ell=\partial\ell/\partial z^\ell$ 로 두면

$$
\delta^\ell=\bigl((W^{\ell+1})^{\mathsf T}\delta^{\ell+1}\bigr)\odot\sigma'(z^\ell),\qquad\frac{\partial\ell}{\partial W^\ell}=\delta^\ell(h^{\ell-1})^{\mathsf T},\qquad\frac{\partial\ell}{\partial b^\ell}=\delta^\ell
$$

이고 $\odot$ 는 성분별 곱이다. 이 절차는 [자동미분](automatic-differentiation.md)의 역전 모드를 층별 계산 그래프에 쓴 것이다.

```javascript
// 앞으로 계산하며 z, h 를 저장하고, 거꾸로 delta 를 전한다
function backprop(W, b, sigma, dsigma, x, dLoss) {
  const L = W.length;
  const h = [x], z = [];
  for (let l = 0; l < L; l++) {
    z[l] = add(matVec(W[l], h[l]), b[l]);
    h[l + 1] = l < L - 1 ? z[l].map(sigma) : z[l];
  }
  let delta = dLoss(h[L]); // 출력에 대한 손실의 기울기
  const gW = [], gb = [];
  for (let l = L - 1; l >= 0; l--) {
    gW[l] = outer(delta, h[l]);
    gb[l] = delta;
    if (l > 0) {
      delta = hadamard(matVec(transpose(W[l]), delta), z[l - 1].map(dsigma));
    }
  }
  return { gW, gb };
}
```

곱셈 횟수는 앞으로 계산하는 데 드는 곱셈 횟수의 상수배다. 매개변수마다 따로 미분하면 매개변수 수만큼 앞으로 계산을 되풀이해야 한다.

# 성질

## 보편 근사 정리

정리(보편 근사 정리, universal approximation theorem). $\sigma$ 가 연속이고 다항식이 아니면, 은닉층 하나인 다층 퍼셉트론 $\sum_j a_j\sigma(\langle w_j,x\rangle+c_j)$ 의 집합은 콤팩트 집합 $K\subset\mathbb R^n$ 위의 연속함수 전체에서 균등 노름으로 조밀하다. 다항식이면 조밀하지 않다.[^1]

$\sigma$ 가 로지스틱 함수인 경우는 Cybenko 가 먼저 증명했다.[^2] $n=1$ 이고 $\sigma$ 가 ReLU 이면 손으로 확인할 수 있다. $\lbrack 0,1\rbrack$ 위의 연속함수 $g$ 를 점 $0,1/N,\dots,1$ 에서 이은 꺾은선은 $N$ 이 크면 $g$ 와 균등하게 가깝다. 꺾은선은 $g(0)+s_0x+\sum\_{k=1}^{N-1}(s_k-s\_{k-1})\max(0,x-k/N)$ 이고, 여기서 $s_k$ 는 $k$ 번째 조각의 기울기다. 이것은 ReLU 은닉 단위 $N$ 개로 된 다층 퍼셉트론이다.

$\sigma$ 가 차수 $d$ 의 다항식이면 은닉층 하나의 출력은 차수 $d$ 이하의 다항식이고, 이런 다항식은 닫힌 유한차원 공간을 이루므로 조밀하지 않다.

## 깊이와 조각 수

ReLU 다층 퍼셉트론은 연속인 조각별 일차함수다. $n_0=1$ 이고 은닉층이 하나이며 너비가 $N$ 이면 꺾이는 점이 $N$ 개 이하이므로 일차 조각이 $N+1$ 개 이하다.

천막 함수 $t(x)=2\max(0,x)-4\max(0,x-1/2)$ 는 $\lbrack 0,1\rbrack$ 을 $\lbrack 0,1\rbrack$ 로 보내고 일차 조각이 둘이다. $t$ 를 $k$ 번 합성한 함수는 조각이 $2^k$ 개이고, 너비 $2$ 인 층 $k$ 개로 계산된다. 같은 함수를 은닉층 하나로 계산하려면 너비가 $2^k-1$ 이상이어야 한다. 깊이를 늘리면 같은 수의 은닉 단위로 조각 수가 지수적으로 늘어난다.[^3]

## 손실의 비볼록성

은닉 단위 두 개의 들어오는 가중치와 나가는 가중치를 함께 맞바꾸면 같은 함수가 나온다. 따라서 $\theta^\ast$ 가 $J$ 의 최소점이고 두 단위의 가중치가 서로 다르면, 맞바꾼 $\theta^{\ast\ast}$ 도 최소점이다. 두 점의 중점에서는 두 단위가 같은 가중치를 갖고 은닉층이 한 단위만큼의 함수밖에 표현하지 못하므로, 그 점이 최소점이 아닌 자료가 있다. 그런 자료에서 $J$ 는 볼록이 아니고, 경사하강법의 수렴 정리는 전역 최소를 보장하지 않는다.

# 활용

- 학습 알고리즘. [적응적 경사 방법](adaptive-gradient-methods.md)은 층마다 기울기의 규모가 다른 문제를 성분별 보폭으로 다룬다. ReLU 는 $0$ 에서 미분가능하지 않고, 그 자리의 역전파는 [Clarke 준미분](clarke-subdifferential.md)의 원소 하나를 고르는 것으로 설명된다.
- 생성모형. [확산모형](diffusion-models.md)은 잡음을 예측하는 함수를, [흐름 정합](flow-matching.md)은 속도장을 다층 퍼셉트론이나 그 변형으로 매개화하고 역전파로 학습한다.
- 그래프 자료. 이웃의 표현을 모아 다층 퍼셉트론에 넣는 층을 쌓은 것이 그래프 신경망이고, 그 구별 능력은 [그래프 신경망의 표현력](gnn-expressivity.md)이 다룬다.
- 함수 근사. 편미분방정식의 해나 가치함수를 다층 퍼셉트론으로 매개화하고, 방정식의 잔차나 Bellman 방정식(Bellman equation)의 오차를 손실로 둔다.

[^1]: Moshe Leshno, Vladimir Ya. Lin, Allan Pinkus, Shimon Schocken, "Multilayer feedforward networks with a nonpolynomial activation function can approximate any function", *Neural Networks* **6** (1993), 861–867.
[^2]: George Cybenko, "Approximation by superpositions of a sigmoidal function", *Mathematics of Control, Signals, and Systems* **2** (1989), 303–314.
[^3]: Matus Telgarsky, "Benefits of depth in neural networks", *Proceedings of the 29th Conference on Learning Theory*, PMLR **49** (2016), 1517–1539.
[^4]: David E. Rumelhart, Geoffrey E. Hinton, Ronald J. Williams, "Learning representations by back-propagating errors", *Nature* **323** (1986), 533–536.

# 연관 문서

## 선수지식

- [퍼셉트론](perceptron.md)
- [경사하강법](gradient-descent.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #optimization #analysis
