# 신뢰영역 방법

# 개요

신뢰영역 방법은 매 걸음에서 목적함수를 2차 모형으로 바꾸고, 그 모형을 믿을 반경 안에서만 최소화하는 최적화 절차다. 반경은 모형이 실제 감소를 얼마나 맞혔는지로 걸음마다 늘리거나 줄인다. Newton 법이 Hessian 이 양정부호가 아닌 점에서 엉뚱한 방향을 내놓는 문제를 반경 제약으로 막는다.

# 직관

$f(x)=x^4-4x^2$ 를 최소화하려고 $x_0=0.5$ 에서 [Newton 법](newton-method.md)을 돌린다. $f'(0.5)=-3.5$ 이고 $f''(0.5)=-5$ 이므로 걸음은 $-f'/f''=-0.7$ 이고 다음 점은 $x_1=-0.2$ 다. 기울기가 음수여서 $x$ 를 키워야 하는 자리인데 걸음은 $x$ 를 줄였고, 함숫값은 $f(0.5)=-0.9375$ 에서 $f(-0.2)=-0.158$ 로 커졌다.

$f''(0.5)$ 가 음수인 것이 원인이다. 2차 모형 $m(p)=f(x_0)+f'(x_0)p+\tfrac12 f''(x_0)p^2$ 는 $f''(x_0)\lt 0$ 이면 아래로 열린 포물선이다. 아래로 열린 포물선은 최소점이 없고 $-f'/f''$ 는 그 최대점이다. 모형을 최소화하는 계산이 모형의 최대점을 집었으니 걸음의 방향에도 크기에도 근거가 없다.

걸음의 크기를 $\vert p\vert\le 0.5$ 로 묶으면 아래로 열린 포물선에도 최소점이 생긴다. 구간의 양 끝에서 모형값은 $m(0.5)=-3.3125$ 와 $m(-0.5)=0.1875$ 이므로 $p=0.5$ 를 고르고 다음 점은 $x_1=1$ 이다. 기울기가 음수인 자리에서 $x$ 를 키우는 걸음이 나왔고 함숫값은 $f(1)=-3$ 으로 작아졌다.

다음 걸음의 크기 상한은 이번 걸음의 결과에서 정한다. 모형이 예측한 감소는 $m(0)-m(0.5)=2.375$ 이고 실제 감소는 $f(0.5)-f(1)=2.0625$ 로 둘의 비가 $0.87$ 이다. 이 반경에서 모형이 실제를 맞혔으므로 상한을 두 배로 키운다. 비가 작거나 음수면 모형을 너무 멀리까지 믿은 것이므로 상한을 반으로 줄이고 걸음을 되돌린다.

# 정의

신뢰영역 방법은 반복점 $x_k$, 반경 $\Delta_k\gt 0$, 2차 모형

$$
m_k(p) = f(x_k) + g_k^{\mathsf T}p + \tfrac12 p^{\mathsf T}B_k p
$$

에서 신뢰영역 부분문제

$$
p_k = \arg\min\_{\Vert p\Vert\le \Delta_k} m_k(p)
$$

를 풀고 $x_{k+1}$ 과 $\Delta_{k+1}$ 을 감소 비율로 정하는 반복이다. $g_k=\nabla f(x_k)$ 이고 $B_k$ 는 대칭행렬로 Hessian $\nabla^2 f(x_k)$ 거나 그 근사다. $B_k$ 에 양정부호를 요구하지 않는 점이 [선탐색](line-search.md)과 다르다.

## 감소 비율

$$
\rho_k = \frac{f(x_k)-f(x_k+p_k)}{m_k(0)-m_k(p_k)}
$$

를 감소 비율이라 한다. 분모는 모형이 예측한 감소이고 $p_k$ 가 부분문제의 해이면 양수다. 분자는 실제 감소다.

갱신은 상수 $0\lt \eta_1\lt \eta_2\lt 1$ 과 $\gamma\gt 1$ 로 정한다.

- $\rho_k\lt \eta_1$ 이면 걸음을 버리고($x_{k+1}=x_k$) $\Delta_{k+1}=\Delta_k/\gamma$ 로 줄인다.
- $\eta_1\le\rho_k$ 이면 걸음을 받아들이고($x_{k+1}=x_k+p_k$), $\rho_k\ge\eta_2$ 이고 $\Vert p_k\Vert=\Delta_k$ 일 때만 $\Delta_{k+1}=\gamma\Delta_k$ 로 키운다. 그 밖에는 $\Delta_{k+1}=\Delta_k$ 다.

$\eta_1=1/4$, $\eta_2=3/4$, $\gamma=2$ 가 표준 선택이다.[^1]

## Cauchy 점

$$
p_k^{\mathrm C} = -\tau_k\frac{\Delta_k}{\Vert g_k\Vert}g_k, \qquad \tau_k = \min\lbrace 1,\ \Vert g_k\Vert^3/(\Delta_k\thinspace g_k^{\mathsf T}B_k g_k)\rbrace
$$

를 Cauchy 점이라 한다. 기울기의 반대 방향으로 난 선분과 신뢰영역의 교차 위에서 $m_k$ 를 최소화한 점이고, $g_k^{\mathsf T}B_kg_k\le 0$ 이면 $\tau_k=1$ 로 읽어 경계점을 집는다. 닫힌 식으로 계산되고 모형 감소가 양수이므로, 부분문제를 근사로 풀더라도 Cauchy 점만큼의 감소를 보장하면 수렴 정리가 성립한다.

# 성질

## 부분문제 전역해의 특성

$p^\ast$ 가 $\min\_{\Vert p\Vert\le\Delta}m(p)$ 의 전역해인 것은 어떤 $\lambda\ge 0$ 이 존재해 다음 세 조건을 만족하는 것과 같다.[^2]

$$
(B+\lambda I)p^\ast = -g, \qquad \lambda(\Delta-\Vert p^\ast\Vert)=0, \qquad B+\lambda I \succeq 0
$$

첫 조건은 $\lambda$ 를 제약의 [Lagrange 쌍대성](lagrange-duality.md)의 승수로 본 정류 조건이고, 둘째는 상보성(반경이 묶이지 않으면 $\lambda=0$)이다. 셋째가 일반적인 2차 제약 최적화에는 없는 조건이고, 이것 때문에 $B$ 가 부정부호인 경우에도 전역해를 다항시간에 찾는다.

증명의 요지는 $\lambda$ 를 고정했을 때 $m(p)+\tfrac{\lambda}{2}(\Vert p\Vert^2-\Delta^2)$ 가 $B+\lambda I\succeq 0$ 아래 볼록이므로 그 정류점이 전역최소라는 것이다. 이 함수는 $\Vert p\Vert\le\Delta$ 에서 $m(p)$ 이하이고 $p^\ast$ 에서 값이 같으므로 $p^\ast$ 가 원 문제의 전역해다.

$B$ 의 최소 [고윳값](eigenvalues.md)을 $\lambda\_{\min}$ 이라 하면 셋째 조건은 $\lambda\ge-\lambda\_{\min}$ 이다. $\lambda\gt-\lambda\_{\min}$ 에서 $\Vert(B+\lambda I)^{-1}g\Vert$ 가 $\lambda$ 의 감소함수이므로, 이 값이 $\Delta$ 와 같아지는 $\lambda$ 를 일차원 Newton 법으로 찾는다. $\lambda=-\lambda\_{\min}$ 에서도 노름이 $\Delta$ 에 못 미치는 경우가 hard case 이고, 그때는 $\lambda=-\lambda\_{\min}$ 으로 두고 $\lambda\_{\min}$ 의 고유벡터를 더해 경계에 맞춘다.

## 전역 수렴

$f$ 가 아래로 유계이고 $\nabla f$ 가 Lipschitz 연속이며 $\Vert B_k\Vert$ 가 유계이고, 매 걸음의 모형 감소가 Cauchy 점의 모형 감소의 상수배 이상이면

$$
\lim\_{k\to\infty}\Vert \nabla f(x_k)\Vert = 0
$$

이다.[^1] 초깃값에 조건을 두지 않는다.

증명의 요지는 Cauchy 점의 모형 감소가 $c\thinspace\Vert g_k\Vert\min\lbrace \Delta_k,\ \Vert g_k\Vert/\Vert B_k\Vert\rbrace$ 이상이라는 하한이다. 기울기가 $\varepsilon$ 이상인 점이 무한히 많다고 하면, 그 걸음들에서 $\Delta_k$ 가 $\varepsilon$ 에 비례하는 값 아래로 내려가지 못함을 모형 오차의 2차 상한으로 보인다. 그러면 받아들여진 걸음마다 $f$ 가 상수 이상 감소해 아래로 유계라는 가정에 어긋난다.

## 2차 수렴

$B_k=\nabla^2 f(x_k)$ 이고 극한점 $x^\ast$ 에서 Hessian 이 양정부호이면 $\Delta_k$ 가 유계 아래로 머물지 않고, 어느 단계 이후로는 반경 제약이 묶이지 않아 $p_k$ 가 Newton 걸음과 같아진다. 그 뒤의 수렴은 Newton 법의 2차 수렴이다.

## 선탐색과의 차이

선탐색은 방향을 먼저 정하고 그 방향 위에서 보폭을 고른다. 그래서 모형 Hessian 이 양정부호가 아니면 하강방향을 따로 만들어야 한다. 신뢰영역은 반경을 먼저 정하고 방향과 크기를 부분문제에서 함께 얻으므로, $B_k$ 가 부정부호일 때 음의 곡률 방향을 그대로 쓴다. 안장점에서 기울기가 $0$ 이어도 부분문제의 해가 $0$ 이 아닌 것이 이 때문이고, 음의 곡률 방향을 따라 안장점을 벗어난다.

# 활용

- **[Newton 법](newton-method.md)의 전역화.** Hessian 이 특이하거나 부정부호인 점에서 Newton 걸음이 정의되지 않거나 모형의 최대점을 집는 것을 반경 제약이 막는다. 해 근방에서는 제약이 묶이지 않아 2차 수렴이 회복된다.
- **[준Newton 법](quasi-newton-methods.md).** $B_k$ 에 양정부호를 요구하지 않으므로 secant 조건만 만족하는 갱신을 쓸 수 있다. BFGS(Broyden–Fletcher–Goldfarb–Shanno)의 양정부호 유지를 위한 곡률 조건이 필요하지 않다.
- **최소제곱.** 잔차 $r(x)$ 의 제곱합을 최소화할 때 $B_k=J_k^{\mathsf T}J_k$ 로 두면 부분문제의 정류 조건이 $(J^{\mathsf T}J+\lambda I)p=-J^{\mathsf T}r$ 이다. Levenberg–Marquardt 법의 감쇠 모수 $\lambda$ 가 신뢰영역 반경의 역할을 한다.
- **대규모 문제의 절단 반복.** 부분문제를 정확히 풀려면 $\lambda$ 를 찾는 반복마다 행렬 분해가 필요하다. Steihaug 절단 공액기울기법은 [Krylov 부분공간 방법](krylov-subspace-methods.md)의 공액기울기 반복을 신뢰영역 경계에 닿거나 음의 곡률 방향을 만나면 멈추는 것으로 바꾸어 행렬-벡터 곱만으로 Cauchy 점 이상의 감소를 얻는다.
- **2차원 부분공간 방법.** $g_k$ 와 $B_k^{-1}g_k$ 가 생성하는 2차원 부분공간으로 부분문제를 제한하면, $2\times 2$ 문제의 정확해를 닫힌 식으로 구한다. $B_k$ 가 부정부호일 때는 최소 고윳값의 고유벡터를 부분공간에 더한다.

[^1]: Nocedal and Wright, *Numerical Optimization*, 2nd ed., Springer, 2006, ch. 4.
[^2]: Wikipedia, "Trust region", https://en.wikipedia.org/wiki/Trust_region

# 연관 문서

## 선수지식

- [Newton 법](newton-method.md)

## 더 알아보기

- [비선형 최소제곱](nonlinear-least-squares.md)

#optimization #analysis #linear_algebra
