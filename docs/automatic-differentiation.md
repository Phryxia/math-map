# 자동미분

# 개요

**자동미분(automatic differentiation)** 은 함수를 계산하는 프로그램의 각 단계에 연쇄법칙을 적용해, 그 함수의 도함수값을 반올림 오차만 남기고 계산하는 방법이다. $f(x_1,x_2)=(x_1+x_2)x_2$ 의 $(1,2)$ 에서의 편미분을 구할 때, 차분 $(f(1+h,2)-f(1,2))/h$ 는 $h$ 를 너무 크게 잡아도 너무 작게 잡아도 오차가 생긴다. 자동미분은 $v_1=x_1+x_2$, $v_2=v_1x_2$ 라는 두 단계의 도함수를 하나씩 곱하고 더해 $\partial f/\partial x_1=2$, $\partial f/\partial x_2=5$ 를 정확히 낸다.

# 직관

$(x_1,x_2)=(1,2)$ 에서 $v_1=x_1+x_2=3$, $v_2=v_1x_2=6$ 이다. 값마다 "$x_1$ 을 조금 바꿀 때 이 값이 얼마나 바뀌는가" 를 함께 들고 간다.

$x_1$ 은 $1$, $x_2$ 는 $0$ 이다. $v_1$ 은 두 값을 더했으므로 $1+0=1$ 이다. $v_2$ 는 곱이므로 곱의 미분법으로 $1\cdot x_2+v_1\cdot 0=2$ 다. 그래서 $\partial f/\partial x_1=2$ 이다.

$x_2$ 에 대해서는 처음 두 값을 $0$, $1$ 로 바꿔 한 번 더 계산하고 $5$ 를 얻는다.

입력이 백만 개이면 이 계산을 백만 번 해야 한다. 그래서 거꾸로 간다.

이번에는 값마다 "이 값을 조금 바꿀 때 $f$ 가 얼마나 바뀌는가" 를 마지막 단계부터 적는다. $v_2$ 는 $1$ 이다. $v_2=v_1x_2$ 이므로 $v_1$ 에는 $x_2\cdot 1=2$ 를, $x_2$ 에는 $v_1\cdot 1=3$ 을 적는다. $v_1=x_1+x_2$ 이므로 $v_1$ 의 $2$ 를 $x_1$ 과 $x_2$ 에 더한다.

$x_1$ 은 $2$, $x_2$ 는 $3+2=5$ 다. 한 번 거꾸로 가서 두 편미분이 함께 나왔다.

# 정의

## 계산 그래프

입력 $x_1,\dots,x_n$ 에서 시작해 $v_i=\varphi_i(v\_{j}:j\in\mathrm{pa}(i))$ 를 차례로 계산하는 프로그램을 생각한다. $\varphi_i$ 는 덧셈, 곱셈, $\sin$, $\exp$ 처럼 도함수를 아는 기본 연산이고, $\mathrm{pa}(i)$ 는 $v_i$ 를 계산할 때 쓰는 앞선 값들의 첨자다. 값을 정점으로, $j\in\mathrm{pa}(i)$ 를 간선 $j\to i$ 로 두면 순환 없는 그래프가 되고, 이것을 **계산 그래프(computational graph)** 라 한다. 프로그램의 순서는 이 그래프의 [위상정렬](topological-sort.md)이다.

## 전진 모드

방향 $\dot x\in\mathbb R^n$ 을 정하고 각 값의 접선 $\dot v_i=\sum\_{j\in\mathrm{pa}(i)}\frac{\partial\varphi_i}{\partial v_j}\dot v_j$ 를 값과 함께 앞에서부터 계산하는 것을 **전진 모드(forward mode)** 라 한다. 출력의 접선이 Jacobi 행렬(Jacobian matrix)과 벡터의 곱 $J_f(x)\dot x$ 다. 직관 절의 첫 계산은 $\dot x=(1,0)$ 인 전진 모드다.

전진 모드는 이원수(dual number)의 산술과 같다. $\varepsilon^2=0$ 인 기호 $\varepsilon$ 을 두고 $a+b\varepsilon$ 꼴의 수를 더하고 곱하면 $(a+b\varepsilon)(c+d\varepsilon)=ac+(ad+bc)\varepsilon$ 이고, $\varepsilon$ 의 계수가 곱의 미분법을 따른다. 기본 함수는 $g(a+b\varepsilon)=g(a)+g'(a)b\varepsilon$ 으로 정한다.

## 역전 모드

출력 $y=v_N$ 에 대해 각 값의 수반값(adjoint) $\bar v_j=\partial y/\partial v_j$ 를 $\bar v_N=1$ 에서 시작해

$$
\bar v_j=\sum\_{i:\thinspace j\in\mathrm{pa}(i)}\bar v_i\frac{\partial\varphi_i}{\partial v_j}
$$

로 위상정렬의 역순으로 계산하는 것을 **역전 모드(reverse mode)** 라 한다. 입력의 수반값이 기울기 $\nabla f(x)$ 다. 출력이 여럿이면 $\bar y$ 를 정한 뒤 같은 계산으로 $J_f(x)^{\mathsf T}\bar y$ 를 얻는다.

```javascript
// tape: 앞으로 계산한 순서대로 { out, ins, partials } 를 적은 목록
function reverseSweep(tape, outputIndex, numValues) {
  const adj = new Array(numValues).fill(0);
  adj[outputIndex] = 1;
  for (let k = tape.length - 1; k >= 0; k--) {
    const { out, ins, partials } = tape[k];
    for (let m = 0; m < ins.length; m++) {
      adj[ins[m]] += adj[out] * partials[m];
    }
  }
  return adj; // 입력 첨자의 성분이 기울기다
}
```

# 성질

## 정확성

정리. 각 기본 연산이 그 점에서 미분가능하면, 전진 모드와 역전 모드는 합성함수의 도함수 $J_f(x)\dot x$ 와 $J_f(x)^{\mathsf T}\bar y$ 를 낸다.

증명의 요지. 접선과 수반값의 점화식은 [미분](derivative.md)의 연쇄법칙을 계산 그래프의 각 간선에서 쓴 것이다. 전진 모드는 Jacobi 행렬들의 곱을 오른쪽부터, 역전 모드는 왼쪽부터 벡터에 곱한다.

차분과 달리 절단 오차가 없고, 남는 오차는 기본 연산의 반올림뿐이다.

## 비용

정리(Baur–Strassen 정리, Baur–Strassen theorem). $f:\mathbb R^n\to\mathbb R$ 을 계산하는 프로그램의 연산 수가 $T$ 이면, 역전 모드는 $\nabla f(x)$ 의 $n$ 개 성분을 모두 $cT$ 이하의 연산으로 계산한다. 여기서 $c$ 는 $n$ 에 의존하지 않는 상수다.[^1]

전진 모드 한 번도 연산 수가 $T$ 의 상수배이지만 한 방향의 미분만 준다. 따라서 $f:\mathbb R^n\to\mathbb R^m$ 의 Jacobi 행렬 전체는 전진 모드로 $n$ 번, 역전 모드로 $m$ 번 계산한다. 입력이 많고 출력이 하나인 손실함수의 기울기에는 역전 모드를 쓴다.

## 기억 공간

역전 모드는 거꾸로 갈 때 앞에서 계산한 값과 편미분이 있어야 하므로, 프로그램 길이에 비례하는 기억 공간을 쓴다. 중간값의 일부만 저장하고 나머지는 거꾸로 가는 도중에 다시 계산하는 검사점(checkpointing)을 쓰면, 길이 $T$ 의 반복 계산에서 기억 공간을 $O(\log T)$ 개의 상태로 줄이고 연산 수는 $O(T\log T)$ 로 늘어난다.[^2]

## 프로그램과 함수의 차이

자동미분은 함수가 아니라 프로그램을 미분한다. `x == 1 ? 1 : x * x` 는 모든 $x$ 에서 $x^2$ 을 계산하지만, $x=1$ 에서 첫 갈래의 상수를 미분해 $0$ 을 내고 참값 $2$ 와 다르다. 갈래나 꺾인 점이 있는 프로그램에서는 기본 연산이 미분가능하지 않은 점에서 이런 차이가 생긴다. 이런 점이 측도 $0$ 인 집합에 모여 있으면 거의 모든 입력에서 결과가 맞다.

# 활용

- 신경망 학습. [다층 퍼셉트론](multilayer-perceptron.md)의 역전파는 손실함수에 역전 모드를 쓴 것이다. ReLU(rectified linear unit) 의 꺾인 점에서 나오는 값은 [Clarke 준미분](clarke-subdifferential.md)의 원소로 설명된다.
- Hessian 과 벡터의 곱. 기울기를 계산하는 역전 모드 프로그램에 다시 전진 모드를 쓰면 [Hessian 행렬](hessian.md)과 벡터의 곱이 기울기 계산의 상수배 비용으로 나온다.[^3] Hessian 을 만들지 않는 Newton 형 방법이 이 곱을 쓴다.
- 반복 알고리즘의 미분. [Sinkhorn 알고리즘](sinkhorn.md)처럼 반복으로 정의된 값을 매개변수로 미분할 때 반복 전체에 역전 모드를 쓰거나, 수렴점의 최적성 조건을 미분한다.
- 기하 계산. [Riemann 계량](riemannian-metrics.md)의 Christoffel 기호를 계량 성분의 도함수로 계산하는 데 쓴다.

[^1]: Walter Baur, Volker Strassen, "The complexity of partial derivatives", *Theoretical Computer Science* **22** (1983), 317–330.
[^2]: Andreas Griewank, Andrea Walther, *Evaluating Derivatives: Principles and Techniques of Algorithmic Differentiation*, 2판, SIAM, 2008, 3–4 장과 12 장.
[^3]: Barak A. Pearlmutter, "Fast exact multiplication by the Hessian", *Neural Computation* **6** (1994), 147–160.

# 연관 문서

## 선수지식

- [미분](derivative.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #machine_learning
