# 상미분방정식

# 개요

상미분방정식(ordinary differential equation, ODE)은 한 개의 독립변수에 대한 미지함수와 그 도함수들 사이의 관계식이다. 해를 구하는 문제는 보통 한 시점의 값을 지정한 초기값 문제(initial value problem)로 주어지며, 이때 가장 기본적인 질문은 "해가 존재하는가, 유일한가, 얼마나 오래 존재하는가"다. Picard–Lindelöf 정리는 우변이 연속이고 상태변수에 대해 Lipschitz이면 국소적으로 유일한 해가 존재함을 보장하고, 그 증명은 적분방정식을 [축약사상 고정점 정리](banach-fixed-point.md)로 푸는 것이다. 대부분의 방정식은 닫힌 형태의 해를 갖지 않으므로, 실제 관심은 해의 정성적 거동(평형점, 안정성)과 수치적 근사에 있다.

# 직관

ODE는 "각 점에서 진행 방향을 지정한 벡터장"이고, 해는 그 지시를 따라 흐르는 궤적이다. 초기점을 정하면 어느 방향으로 출발할지 정해지고, 방향이 위치에 따라 급격히 변하지 않으면(Lipschitz) 궤적이 갈라지지 않는다.

Picard 반복은 이 그림의 알고리즘판이다. 상수함수에서 출발해 "현재 추측을 벡터장에 넣어 적분해 다음 추측을 만드는" 연산을 반복하면, 짧은 시간 구간에서는 이 연산이 함수공간 위의 축약사상이므로 반복이 유일한 고정점으로 수렴한다.

방향이 급변하면 유일성이 깨진다. 어떤 점에서 기울기가 무한히 커지는 벡터장은 그 점에서 여러 궤적이 동시에 출발할 수 있다.

```mermaid
graph LR
  I["초기값 문제"] --> A["동치인 적분방정식"]
  A --> B["Picard 작용소가 연속함수공간에서 축약사상<br/>(시간 구간을 충분히 짧게)"]
  B --> C["유일한 고정점 = 유일한 해"]
```

# 정의

구간 J 위의 미지함수 x(t)가 n차원 벡터값일 때, 1차 연립 ODE의 초기값 문제는 다음과 같다.

$$
x'(t)=f\bigl(t,x(t)\bigr),\qquad x(t_0)=x_0
$$

고차 방정식은 도함수를 새 변수로 두어 이 형태로 환원한다. f가 t에 명시적으로 의존하지 않으면 autonomous라 한다.

f가 x에 대해 Lipschitz라는 것은 다음을 만족하는 상수 K가 있다는 뜻이다.

$$
\left\lVert f(t,x)-f(t,y)\right\rVert\le K\left\lVert x-y\right\rVert
$$

미분방정식과 적분방정식은 동치다. f가 연속이면, x가 위 초기값 문제의 해인 것과 x가 다음 적분방정식을 만족하는 연속함수인 것은 같다([미적분학의 기본 정리](fundamental-calculus.md)).

$$
x(t)=x_0+\int_{t_0}^{t}f\bigl(s,x(s)\bigr)\,ds
$$

우변을 연속함수공간 위의 작용소로 보면 Picard 작용소가 된다.

$$
(Tx)(t)=x_0+\int_{t_0}^{t}f\bigl(s,x(s)\bigr)\,ds
$$

autonomous 방정식에서 f를 0으로 만드는 점을 평형점(equilibrium)이라 한다. 평형점이 Lyapunov 안정이라는 것은 초기값을 충분히 가깝게 두면 궤적이 영원히 가까이 머무는 것, 점근 안정이라는 것은 여기에 더해 궤적이 평형점으로 수렴하는 것이다.

# 성질

## Picard–Lindelöf 정리

f가 초기점의 근방에서 연속이고 x에 대해 Lipschitz이면, 어떤 양수 ε에 대해 구간 [t_0−ε, t_0+ε]에서 초기값 문제의 해가 존재하고 유일하다[^1].

증명 개요: M을 근방에서 f의 노름 상한, K를 Lipschitz 상수라 하자. 초기값 중심 폐구 안에 머무는 연속함수들의 집합은 sup 노름에서 [완비](completeness.md)이며, ε을 충분히 작게 잡으면 T가 이 집합을 자기 자신으로 보낸다(적분의 크기가 Mε 이하이기 때문). 두 함수 x, y에 대해 Lipschitz 조건을 적분에 넣으면 다음을 얻는다.

$$
\left\lVert Tx-Ty\right\rVert_{\infty}\le K\varepsilon\,\left\lVert x-y\right\rVert_{\infty}
$$

따라서 ε을 추가로 1/K보다 작게 잡으면 T는 축약사상이고, 완비 [거리 공간](metric-spaces.md) 위의 축약사상은 유일한 고정점을 가진다[^2]. 그 고정점이 적분방정식의 해, 즉 초기값 문제의 유일한 해다. (Lipschitz 상수와 무관한 구간을 얻으려면 지수 가중 노름을 쓰거나 Gronwall 부등식을 이용한다.)

f가 연속이지만 Lipschitz가 아니면 Peano 정리에 의해 존재성은 남지만 유일성은 잃는다. 예를 들어 다음 문제는 해가 여러 개다.

$$
x'=3x^{2/3},\quad x(0)=0\ \Longrightarrow\ x(t)\equiv 0,\quad x(t)=t^3,\ \dots
$$

## 해의 최대 존재구간

정리는 국소적일 뿐이다. f가 전역적으로 매끄러워도 해가 유한 시간에 발산할 수 있다.

$$
x'=x^2,\quad x(0)=1\ \Longrightarrow\ x(t)=\frac{1}{1-t}\quad(t<1)
$$

f가 x에 대해 전역 Lipschitz(특히 선형)이면 해는 모든 시간으로 확장된다.

## 선형 방정식

상수계수 선형 연립방정식의 해는 행렬 지수로 주어진다.

$$
x'=Ax,\quad x(0)=x_0\ \Longrightarrow\ x(t)=e^{tA}x_0,\qquad e^{tA}=\sum_{k=0}^{\infty}\frac{t^k A^k}{k!}
$$

A가 대각화 가능하면 [eigenvalue](eigenvalues.md)와 eigenvector로 해를 분해할 수 있다. 고윳값 λ와 대응하는 eigenvector v에 대해 다음이 해다.

$$
x(t)=e^{\lambda t}v
$$

일반적인 A에서는 Jordan 형에 따라 다항식 계수 항이 붙는다. 비동차 방정식의 해는 Duhamel 공식으로 쓴다.

$$
x'=Ax+g(t)\ \Longrightarrow\ x(t)=e^{tA}x_0+\int_0^{t}e^{(t-s)A}g(s)\,ds
$$

## 평형점의 안정성

선형계 x'=Ax에서 원점은 A의 모든 고윳값의 실수부가 음수이면 점근 안정이고, 어떤 고윳값의 실수부가 양수이면 불안정하다.

비선형 autonomous 계의 평형점에서 Jacobian을 보자.

$$
A=Df(x^\star),\qquad f(x^\star)=0
$$

A의 모든 고윳값의 실수부가 음수(hyperbolic sink)이면 평형점은 점근 안정이고, 어떤 고윳값의 실수부가 양수이면 불안정하다. 실수부가 0인 고윳값이 있으면 선형화만으로는 판정할 수 없고, Lyapunov 함수(평형점에서 최소이며 궤적을 따라 감소하는 함수)를 찾는 방법이 필요하다.

# 활용

## 예제

로지스틱 방정식은 변수분리로 풀린다.

$$
x'=r\,x\,(1-x),\qquad r>0
$$

평형점은 x=0과 x=1이다. 우변을 미분한 r(1−2x)를 평가하면 x=0에서 r>0이므로 불안정, x=1에서 −r<0이므로 점근 안정이다. 초기값이 0과 1 사이면 해는 다음과 같다.

$$
x(t)=\frac{x_0e^{rt}}{1-x_0+x_0e^{rt}}
$$

## 수치해법

Euler 방법은 적분방정식의 피적분함수를 왼끝점 값으로 근사한다.

$$
x_{k+1}=x_k+h\,f(t_k,x_k),\qquad t_{k+1}=t_k+h
$$

f가 Lipschitz이고 해가 두 번 미분가능한 구간에서 전역 오차는 h에 비례한다(1차 정확도). 국소 절단오차는 h의 제곱 규모이지만 단계 수가 1/h 규모라서 한 차수 손실이 생긴다. 실무에서는 4차 Runge–Kutta나, 강성(stiff) 문제에서 안정성이 좋은 음함수 방법(implicit Euler, BDF)을 쓴다.

```python
def euler(f, t0, x0, h, steps):
    t, x = t0, x0
    out = [(t, x)]
    for _ in range(steps):
        x = x + h * f(t, x)
        t = t + h
        out.append((t, x))
    return out

# 로지스틱 방정식 r = 1, x(0) = 0.1
print(euler(lambda t, x: x * (1 - x), 0.0, 0.1, 0.01, 500)[-1])
```

## 쓰임

역학(Newton 방정식), 회로, 화학반응 속도론, 개체군 동역학, 전염병 모형(SIR), 제어이론이 모두 ODE로 표현된다. 해의 장기 거동을 궤적 집합의 기하로 연구하는 분야가 동역학계 이론이고, 무작위 요동을 더하면 확률미분방정식으로, 상태공간이 이산이면 [Markov 연쇄](markov-chains.md)로 이어진다. 편미분방정식은 독립변수가 둘 이상인 경우로 방법론이 크게 달라진다.

[^1]: Picard–Lindelöf theorem, Wikipedia (정리 진술과 Banach 고정점 증명). https://en.wikipedia.org/wiki/Picard%E2%80%93Lindel%C3%B6f_theorem
[^2]: A. Seeger, An existence and uniqueness theorem (Math 522 강의노트), University of Wisconsin–Madison. https://people.math.wisc.edu/~aseeger/522/picard.pdf

# 연관 문서

## 선수지식

- [미분](derivative.md)
- [축약사상 고정점 정리](banach-fixed-point.md)
- [미적분학의 기본 정리](fundamental-calculus.md)

## 더 알아보기

아직 연결한 문서가 없다.
