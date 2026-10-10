# Rademacher 복잡도

# 개요

Rademacher 복잡도는 함수족이 표본 위에서 무작위 부호열과 맞출 수 있는 상관의 크기다. 표본점마다 $\pm 1$ 을 동전으로 붙이고, 그 부호열과 상관이 가장 큰 함수를 족에서 골라 상관값을 재고 동전에 대해 평균한다.

이 양이 경험 오차와 실제 오차의 최대 차이를 위에서 막는다. 유한 가설류에서는 가설 개수의 로그가 그 역할을 하고, 무한 가설류에서는 개수를 셀 수 없으므로 표본 위에서 함수족이 실제로 만드는 값만 재는 양이 필요하다.

# 직관

분류기 하나를 훈련 자료 $n$ 개에서 골랐고 그 자료에서 틀린 비율이 $0$ 이다. 이 분류기가 새 자료에서 틀릴 확률은 얼마인가.

가설이 유한 개면 답이 나온다. 가설 하나를 고정하면 각 자료점에서 틀렸는지가 값 $0$ 또는 $1$ 인 독립 확률변수이고, [집중부등식](concentration-inequalities.md)의 Hoeffding 부등식이 틀린 비율과 틀릴 확률의 차이가 $\varepsilon$ 을 넘을 확률을 $2e^{-2n\varepsilon^2}$ 으로 막는다. 가설 $\vert H\vert$ 개 전부에 합집합 경계를 쓰면 확률 $1-\delta$ 로 그 차이의 최대값이 $\sqrt{\log(2\vert H\vert/\delta)/(2n)}$ 이하다. 그런데 실수 $t$ 마다 $h_t(x)=1\lbrack x\ge t\rbrack$ 를 두는 문턱 분류기족은 가설이 무한히 많아 $\log\vert H\vert$ 가 무한이고, 이 식은 수를 내놓지 않는다.

합집합 경계는 가설마다 사건을 하나씩 세는데, 표본의 모든 점에서 같은 값을 주는 가설은 틀린 비율도 같다. 표본점이 $x_1\lt x_2\lt \dots\lt x_n$ 일 때 문턱이 $x_3$ 과 $x_4$ 사이 어디에 있든 모든 표본점에서 같은 값이 나오므로, 그 가설들이 세는 사건은 하나다. 서로 다른 값 패턴은 문턱이 어느 두 점 사이에 오는지로 정해져 $n+1$ 개다.

$\vert H\vert$ 자리에 $n+1$ 을 넣으면 차이의 최대값이 $\sqrt{\log(2(n+1)/\delta)/(2n)}$ 이하이고, $n$ 이 커지면 $0$ 으로 간다. 값이 $0$ 과 $1$ 뿐인 족은 이렇게 패턴을 세면 되지만 값이 실수인 족에서는 패턴이 무한히 많다. 개수 대신 표본 위의 값 벡터가 얼마나 넓게 퍼지는지를 직접 재면 두 경우를 함께 다룬다. 표본점에 동전으로 $\pm 1$ 을 붙이고 그 부호열과 상관이 가장 큰 함수를 족에서 고르면, 족이 넓을 때는 어떤 부호열도 맞출 수 있어 상관이 $1$ 에 가깝고 좁을 때는 맞추지 못해 $0$ 에 가깝다.

# 정의

Rademacher 복잡도는 함수족과 무작위 부호열의 상관의 기댓값이다. $\sigma_1,\dots,\sigma_n$ 이 독립이고 각각 $+1$ 과 $-1$ 을 확률 $1/2$ 로 갖는 Rademacher 변수, $S=(x_1,\dots,x_n)$ 이 고정된 표본, $\mathcal F$ 가 집합 $\mathcal X$ 에서 실수로 가는 함수족일 때

$$\hat{\mathfrak R}\_S(\mathcal F) = E\_\sigma\lbrack\sup\_{f\in\mathcal F}\frac{1}{n}\sum\_{i=1}^{n}\sigma\_i f(x\_i)\rbrack$$

를 $S$ 에서의 **경험적 Rademacher 복잡도**라 한다. 표본을 분포 $P$ 에서 독립으로 뽑고 기댓값을 취한

$$\mathfrak R\_n(\mathcal F) = E\_S\lbrack\hat{\mathfrak R}\_S(\mathcal F)\rbrack$$

이 **Rademacher 복잡도**다. 첫 번째 양은 표본이 주어지면 계산되고 두 번째 양은 분포에 딸린 수다.

함수족에 상수를 더해도 두 양은 변하지 않는다. $f+c$ 의 상관은 $\frac1n\sum_i\sigma_i f(x_i)$ 에 $\frac{c}{n}\sum_i\sigma_i$ 를 더한 것이고, 둘째 항은 $f$ 에 무관해 상한 밖으로 나오며 기댓값이 $0$ 이다.

## 손실류

학습에서 재는 족은 가설족이 아니라 손실족이다. 가설족 $\mathcal H$ 와 손실 $\ell$ 에 대해

$$\mathcal L = \lbrace (x,y)\mapsto\ell(h(x),y) : h\in\mathcal H\rbrace$$

의 복잡도가 일반화 경계에 들어간다. 값이 $\pm 1$ 인 분류에서 $0$-$1$ 손실은 $\ell(h(x),y)=\frac{1-yh(x)}{2}$ 이고, $y_i\sigma_i$ 가 $\sigma_i$ 와 같은 분포이므로 $\hat{\mathfrak R}\_S(\mathcal L)=\frac12\hat{\mathfrak R}\_S(\mathcal H)$ 다.

# 성질

## 대칭화

**정리.** 값이 유계인 족 $\mathcal F$ 에 대해

$$E\_S\lbrack\sup\_{f\in\mathcal F}(E\lbrack f\rbrack-\hat E\_S\lbrack f\rbrack)\rbrack\le 2\thinspace\mathfrak R\_n(\mathcal F)$$

여기서 $\hat E\_S\lbrack f\rbrack=\frac1n\sum_{i=1}^n f(x_i)$ 이고 $E\lbrack f\rbrack$ 은 분포 $P$ 에 대한 기댓값이다.

증명의 요지. $E\lbrack f\rbrack$ 을 같은 분포에서 독립으로 뽑은 복제 표본 $S'$ 의 평균의 기댓값으로 바꾸고 Jensen 부등식으로 기댓값을 상한 안으로 넣으면 좌변이 $E\_{S,S'}\lbrack\sup_f(\hat E\_{S'}\lbrack f\rbrack-\hat E\_S\lbrack f\rbrack)\rbrack$ 이하다. 두 표본의 $i$ 번째 점을 맞바꾸어도 결합분포가 같으므로 $i$ 번째 차이에 $\sigma_i$ 를 곱한 것과 분포가 같다. 상한을 두 조각으로 가르면 각각이 $\mathfrak R\_n(\mathcal F)$ 다.

## 일반화 경계

**정리.** $\mathcal F$ 의 값이 $\lbrack 0,1\rbrack$ 에 들어가면 확률 $1-\delta$ 로 모든 $f\in\mathcal F$ 에 대해

$$E\lbrack f\rbrack\le\hat E\_S\lbrack f\rbrack+2\thinspace\hat{\mathfrak R}\_S(\mathcal F)+3\sqrt{\frac{\log(2/\delta)}{2n}}$$

증명의 요지. $\Phi(S)=\sup_f(E\lbrack f\rbrack-\hat E\_S\lbrack f\rbrack)$ 는 표본의 한 점을 바꿀 때 $1/n$ 이하로 변하므로 McDiarmid 부등식이 $\Phi(S)\le E\_S\lbrack\Phi\rbrack+\sqrt{\log(2/\delta)/(2n)}$ 를 준다. 첫 항에 대칭화를 쓴다. $\hat{\mathfrak R}\_S(\mathcal F)$ 도 한 점을 바꿀 때 $1/n$ 이하로 변하므로 McDiarmid 를 한 번 더 써서 $\mathfrak R\_n$ 을 $\hat{\mathfrak R}\_S$ 로 바꾼다.

우변의 세 항은 모두 표본에서 계산된다. 분포를 몰라도 부호열을 여러 번 뽑아 $\hat{\mathfrak R}\_S(\mathcal F)$ 를 추정한다.

## Massart 유한류 보조정리

유한 집합 $A\subset\mathbb R^n$ 에 대해

$$E\_\sigma\lbrack\max\_{a\in A}\frac1n\sum_{i=1}^n\sigma_i a_i\rbrack\le\frac{\max\_{a\in A}\Vert a\Vert\_2\sqrt{2\log\vert A\vert}}{n}$$

증명의 요지는 Chernoff 기법이다. $\sum_i\sigma_i a_i$ 가 매개변수 $\Vert a\Vert\_2$ 의 sub-Gaussian 이므로 최대값의 적률생성함수를 합집합 경계로 막고 $\lambda=\sqrt{2\log\vert A\vert}/\max\_{a\in A}\Vert a\Vert\_2$ 에서 최적화한다.

문턱 분류기족에 적용한다. 표본 위의 값 벡터는 성분이 $0$ 또는 $1$ 이라 노름이 $\sqrt n$ 이하이고 개수가 $n+1$ 이므로

$$\hat{\mathfrak R}\_S(\mathcal H)\le\sqrt{\frac{2\log(n+1)}{n}}$$

## VC 차원과의 관계

값이 두 개인 가설족에서 표본 크기 $n$ 의 값 패턴 개수의 최대값을 성장함수 $\Pi\_{\mathcal H}(n)$ 이라 하고, $\Pi\_{\mathcal H}(n)=2^n$ 인 가장 큰 $n$ 을 VC(Vapnik–Chervonenkis) 차원 $d$ 라 한다. Sauer–Shelah 보조정리가 $\Pi\_{\mathcal H}(n)\le(en/d)^d$ 를 주고, Massart 보조정리를 쓰면

$$\mathfrak R\_n(\mathcal H)\le\sqrt{\frac{2d\log(en/d)}{n}}$$

VC 차원은 표본과 분포에 의존하지 않으므로 이 경계도 분포를 쓰지 않는다. $\hat{\mathfrak R}\_S$ 는 표본이 실제로 놓인 자리를 쓰므로 같은 가설족에서 더 작은 값이 나온다.

## 수축 보조정리

$\varphi\colon\mathbb R\to\mathbb R$ 가 [Lipschitz 상수](lipschitz-maps.md) $L$ 을 가지면

$$\hat{\mathfrak R}\_S(\varphi\circ\mathcal F)\le L\thinspace\hat{\mathfrak R}\_S(\mathcal F)$$

증명은 좌표 하나씩 간다. $\sigma_n$ 에 대한 기댓값을 두 부호의 평균으로 쓰고 $\varphi$ 의 Lipschitz 조건을 적용하면 $n$ 번째 좌표에서 $\varphi$ 가 벗겨지고 $L$ 이 남는다. 이것을 $n$ 번 되풀이한다.

## 선형류의 복잡도

$\mathcal F=\lbrace x\mapsto\langle w,x\rangle:\Vert w\Vert\_2\le B\rbrace$ 이고 모든 표본점이 $\Vert x_i\Vert\_2\le R$ 이면

$$\hat{\mathfrak R}\_S(\mathcal F)\le\frac{BR}{\sqrt n}$$

증명. Cauchy–Schwarz 부등식으로 상한이 $\frac{B}{n}\Vert\sum_i\sigma_i x_i\Vert\_2$ 와 같다. Jensen 부등식으로 기댓값을 제곱근 안으로 넣고 $E\_\sigma\Vert\sum_i\sigma_i x_i\Vert\_2^2=\sum_i\Vert x_i\Vert\_2^2\le nR^2$ 를 쓴다.

경계에 차원이 없다. 가중벡터의 노름과 자료의 노름만 들어가므로 좌표의 개수가 표본 수보다 커도 같은 수가 나온다.

# 활용

## 마진 기반 분류

마진 손실 $\varphi\_\rho(u)=\min(1,\max(0,1-u/\rho))$ 는 $0$-$1$ 손실을 위에서 막고 Lipschitz 상수가 $1/\rho$ 다. 수축 보조정리와 선형류의 복잡도를 이어 쓰면 노름이 $B$ 이하인 선형 분류기의 일반화 경계에 $\frac{BR}{\rho\sqrt n}$ 이 들어간다. 마진 $\rho$ 를 크게 잡는 분류기를 고르는 방법이 이 경계를 작게 만든다.

## 신경망의 노름 경계

층마다 활성함수의 Lipschitz 상수가 $1$ 이면 수축 보조정리를 층 수만큼 되풀이해 전체 복잡도를 층별 가중행렬 노름의 곱으로 막는다. 경계가 매개변수 개수 대신 가중치의 크기에 딸린다.

## 모형 선택

중첩된 족 $\mathcal F_1\subset\mathcal F_2\subset\dots$ 에서 경험 오차와 $\hat{\mathfrak R}\_S(\mathcal F_k)$ 의 합을 최소화하는 $k$ 를 고른다. [교차검증](cross-validation.md)은 자료를 나눠 오차를 직접 재고, 이 방법은 한 표본에서 족 전체의 최대 편차를 막는다. [편향-분산 분해](bias-variance-decomposition.md)가 추정량 하나의 평균 오차를 두 항으로 가르는 것과 달리, 여기서 재는 것은 족 안의 모든 함수에 동시에 성립하는 상한이다.

## 경험 과정의 상한

함수족에 대한 표본평균과 기댓값의 차이를 함수족 전체에서 본 상한이 경험 과정의 상한이다. 대칭화는 이 상한을 부호열에 대한 상한으로 바꾸고, Massart 보조정리와 chaining 이 그 값을 센다. 함수족이 유계가 아닐 때는 [Martingale](martingales.md) 증분에 대한 부등식으로 같은 논증을 옮긴다.

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)

## 더 알아보기

- [VC 차원](vc-dimension.md)

#machine_learning #probability #statistics
