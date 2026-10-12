# 비선형 최소제곱

# 개요

비선형 최소제곱은 모수에 비선형으로 의존하는 잔차의 제곱합을 최소화하는 문제다. [선형회귀](linear-regression.md)의 정규방정식에 대응하는 닫힌 해가 없으므로 반복법으로 푼다. 잔차의 Jacobian 으로 Hessian 을 근사하는 Gauss–Newton 법과, 그 근사에 감쇠항을 더해 [신뢰영역 방법](trust-region.md)과 같은 걸음을 내는 Levenberg–Marquardt 법이 표준 해법이다.

# 직관

측정점 $(t_i,y_i)$ 에 지수함수 $y=ae^{bt}$ 를 맞춘다. 잔차 $r_i=ae^{bt_i}-y_i$ 의 제곱합을 $a$ 와 $b$ 에 대해 최소화하는 문제이고, $b$ 가 지수 안에 있어 잔차가 $b$ 의 선형함수가 아니다. 그래서 선형회귀처럼 정규방정식을 세워 한 번의 행렬 풀이로 끝낼 수 없다.

잔차를 현재 추정값 $x_k=(a_k,b_k)$ 에서 1차로 펼치면 $r(x_k+p)\approx r(x_k)+J_kp$ 이고, $J_k$ 는 잔차의 Jacobian 이다. 이 근사식의 제곱합 $\Vert r_k+J_kp\Vert^2$ 는 $p$ 의 2차식이므로 선형 최소제곱 문제이고, 정규방정식 $J_k^{\mathsf T}J_kp=-J_k^{\mathsf T}r_k$ 로 한 번에 풀린다. 그 해를 밟고 다시 펼치는 것을 되풀이한다.

$J_k$ 의 열이 거의 종속이면 $J_k^{\mathsf T}J_k$ 가 특이에 가깝고 걸음이 아주 커진다. 지수 맞춤에서 $b$ 를 조금 바꾼 효과와 $a$ 를 조금 바꾼 효과가 비슷해지는 경우가 그렇다. 그러면 1차 근사가 맞는 범위를 벗어나므로, 밟은 뒤의 제곱합이 오히려 커진다.

걸음의 크기를 묶는 방법은 정규방정식의 좌변에 $\lambda I$ 를 더하는 것이다. $(J_k^{\mathsf T}J_k+\lambda I)p=-J_k^{\mathsf T}r_k$ 의 해는 $\lambda$ 가 커질수록 짧아지고 방향이 $-J_k^{\mathsf T}r_k$, 곧 제곱합의 기울기 반대 방향에 가까워진다. $\lambda$ 를 걸음이 실제로 제곱합을 줄이는 값까지 키우면 반복이 안정된다.

# 정의

비선형 최소제곱 문제는 $r:\mathbb R^n\to\mathbb R^m$ ($m\ge n$) 에 대해

$$
\min\_{x\in\mathbb R^n} f(x), \qquad f(x)=\tfrac12\Vert r(x)\Vert^2=\tfrac12\sum\_{i=1}^m r_i(x)^2
$$

를 푸는 것이다. $r_i$ 를 잔차라 하고, 모형 $\varphi(t;x)$ 를 자료 $(t_i,y_i)$ 에 맞추는 경우 $r_i(x)=\varphi(t_i;x)-y_i$ 다.

$J(x)\in\mathbb R^{m\times n}$ 을 $r$ 의 Jacobian 이라 하면

$$
\nabla f(x)=J(x)^{\mathsf T}r(x), \qquad \nabla^2 f(x)=J(x)^{\mathsf T}J(x)+\sum\_{i=1}^m r_i(x)\nabla^2 r_i(x)
$$

이다. 기울기가 Jacobian 과 잔차의 곱만으로 계산되는 점이 일반 최적화 문제와 다르다.

## Gauss–Newton 법

Gauss–Newton 법은 Hessian 의 둘째 항을 버린

$$
J_k^{\mathsf T}J_k\thinspace p_k = -J_k^{\mathsf T}r_k
$$

를 풀어 $x_{k+1}=x_k+p_k$ 로 가는 반복이다. $J_k$ 가 full rank 이면 $J_k^{\mathsf T}J_k$ 가 양정부호여서 $p_k$ 가 하강방향이다. 이 식은 선형화한 잔차의 제곱합 $\tfrac12\Vert r_k+J_kp\Vert^2$ 를 최소화하는 정규방정식과 같고, 실제로는 $J_k$ 의 QR 분해나 특이값 분해로 푼다.

## Levenberg–Marquardt 법

Levenberg–Marquardt 법은 감쇠 모수 $\lambda_k\ge 0$ 을 두고

$$
(J_k^{\mathsf T}J_k+\lambda_k D_k)\thinspace p_k = -J_k^{\mathsf T}r_k
$$

를 푸는 반복이다. $D_k$ 는 양정부호 대각행렬로 $I$ 거나 $J_k^{\mathsf T}J_k$ 의 대각성분을 모은 것이다. $\lambda_k$ 는 걸음을 받아들일 때 줄이고 거부할 때 키운다. $\lambda_k\to 0$ 에서 걸음이 Gauss–Newton 걸음이 되고, $\lambda_k\to\infty$ 에서 $-J_k^{\mathsf T}r_k/\lambda_k$ 로 [경사하강법](gradient-descent.md)의 걸음에 비례한다.

# 성질

## 신뢰영역 부분문제와의 동등성

**정리.** $D_k=I$ 일 때, Levenberg–Marquardt 걸음 $p_k$ 가 $\lambda_k\gt 0$ 에서 정의되면 $p_k$ 는 $\Delta_k=\Vert p_k\Vert$ 로 둔 신뢰영역 부분문제

$$
\min\_{\Vert p\Vert\le\Delta_k} \tfrac12\Vert r_k+J_kp\Vert^2
$$

의 전역해다.

신뢰영역 부분문제의 전역해의 특성은 어떤 $\lambda\ge 0$ 에서 $(B+\lambda I)p=-g$, 상보성, $B+\lambda I\succeq 0$ 이 성립하는 것이다. $B=J_k^{\mathsf T}J_k$ 는 준양정부호이므로 셋째 조건이 모든 $\lambda\ge 0$ 에서 성립하고, 첫 조건이 Levenberg–Marquardt 방정식이며, $\Delta_k$ 를 $\Vert p_k\Vert$ 로 잡았으므로 상보성도 성립한다. ∎

그래서 $\lambda_k$ 의 갱신은 신뢰영역 반경의 갱신과 같은 일을 한다. 구현에서 $\lambda$ 를 직접 키우고 줄이는 것과 반경 $\Delta$ 를 정하고 그에 맞는 $\lambda$ 를 찾는 것 두 방식이 모두 쓰인다.

## 국소 수렴률

**정리.** $x^\ast$ 가 극소점이고 $J(x^\ast)$ 가 full rank 이면 Gauss–Newton 법은 $x^\ast$ 근방에서 선형 수렴하고, 수렴 인자는 버린 Hessian 항 $S(x^\ast)=\sum_ir_i(x^\ast)\nabla^2r_i(x^\ast)$ 의 크기로 정해진다.[^1]

$$
\Vert x_{k+1}-x^\ast\Vert \le \Vert (J^{\mathsf T}J)^{-1}S\Vert\thinspace\Vert x_k-x^\ast\Vert + O(\Vert x_k-x^\ast\Vert^2)
$$

이므로 $\Vert (J^{\mathsf T}J)^{-1}S\Vert\lt 1$ 에서 수렴한다. $r(x^\ast)=0$ 인 영잔차 문제에서는 $S(x^\ast)=0$ 이므로 2차 수렴이다. 잔차가 작은 문제에서 Gauss–Newton 이 [Newton 법](newton-method.md)에 가까운 속도를 내고 Hessian 을 계산하지 않는 것이 이 때문이다.

잔차가 큰 문제에서는 $S$ 가 커서 수렴이 느리거나 발산한다. 그 경우 버린 항을 secant 조건으로 근사하는 [준Newton 법](quasi-newton-methods.md)의 갱신을 $J^{\mathsf T}J$ 에 더한다.

## 전역 수렴

Levenberg–Marquardt 법은 신뢰영역 방법의 특수 경우이므로 그 전역 수렴 정리를 물려받는다. $r$ 이 연속미분가능하고 $J$ 가 유계인 영역에서 $\lim\_{k\to\infty}\Vert J_k^{\mathsf T}r_k\Vert=0$ 이고, 초깃값에 조건이 없다. Gauss–Newton 법 자체는 이 보장이 없고, 걸음이 1차 근사가 맞는 범위를 넘으면 제곱합이 커진다.

## 모수의 식별 가능성

$J(x^\ast)$ 의 rank 가 $n$ 보다 작으면 극소점이 점이 아니라 다양체이고, 잔차를 같게 두는 모수의 방향이 있다. 지수합 $\sum_j a_je^{b_jt}$ 를 맞출 때 두 지수 $b_1$ 과 $b_2$ 가 가까워지면 Jacobian 의 해당 두 열이 종속에 가까워지는 것이 그 예다. 이때 Gauss–Newton 걸음은 정의되지 않거나 아주 길고, Levenberg–Marquardt 의 $\lambda D_k$ 항이 유일한 걸음을 준다.

# 활용

- **곡선 맞춤.** 반응이 모수에 비선형으로 의존하는 모형(지수 감쇠, Michaelis–Menten 식, Gauss 봉우리의 합)의 계수 추정이 비선형 최소제곱 문제다. 잔차가 독립 등분산 정규분포를 따르면 이 해가 [최대가능도 추정](maximum-likelihood.md)의 해다.
- **번들 조정.** 여러 시점의 영상에서 카메라의 자세와 점의 3차원 좌표를 함께 추정할 때, 영상 좌표의 재투영 오차가 잔차다. Jacobian 이 희소하므로 $J^{\mathsf T}J$ 의 블록 구조를 써서 Schur 보수로 변수를 소거한다.
- **신경망의 2차 방법.** 제곱오차를 쓰는 회귀 신경망에서 $J^{\mathsf T}J$ 는 Gauss–Newton 행렬이고 준양정부호다. 전체 Hessian 과 달리 안장점에서도 준양정부호여서, 이 근사 위에서 자연기울기 방법과 K-FAC(Kronecker-factored approximate curvature)이 구성된다.
- **역문제의 정칙화.** 관측에서 계수를 복원하는 문제에서 $\lambda$ 를 수렴 보조 수단이 아니라 정칙화 모수로 둔다. 감쇠항 $\lambda\Vert p\Vert^2$ 가 Tikhonov 정칙화와 같은 형태이고, $\lambda$ 를 관측 잡음 수준으로 고정하면 해가 잡음에 안정해진다.

[^1]: Nocedal and Wright, *Numerical Optimization*, 2nd ed., Springer, 2006, ch. 10.

# 연관 문서

## 선수지식

- [선형회귀](linear-regression.md)
- [신뢰영역 방법](trust-region.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #statistics #linear_algebra
