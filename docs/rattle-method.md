# RATTLE 방법

# 개요

**RATTLE 방법(RATTLE algorithm)** 은 막대 길이나 원자 사이의 결합 길이처럼 고정된 거리를 지키며 움직이는 계를, Störmer–Verlet 걸음에 두 번의 보정 힘을 더해 푸는 방법이다. 길이 $1$ 인 막대 끝의 점이 원 위를 속력 $1$ 로 도는데, Störmer–Verlet 방법으로 걸음 $0.5$ 를 가면 점이 $(1,0.5)$ 에 떨어져 중심에서 $1.118$ 만큼 멀어진다. RATTLE 방법은 막대 방향의 힘 하나로 위치를 원 위의 $(0.866,0.5)$ 로 돌려놓고, 같은 방향의 힘 하나로 속도를 원에 접하는 $(-0.5,0.866)$ 으로 맞춘다.

# 직관

질량 $1$ 인 점이 원점에 묶인 길이 $1$ 의 막대 끝에 달려 있고, 다른 힘은 없다. 처음 위치는 $q=(1,0)$, 운동량은 $p=(0,1)$ 이라 점은 원 위를 속력 $1$ 로 돈다. [분할 Runge–Kutta 방법](partitioned-runge-kutta-methods.md)의 Störmer–Verlet 방법은 힘이 없으면 $q\_1=q+hp$ 이고, $h=0.5$ 에서 $q\_1=(1,0.5)$ 다. 이 점은 중심에서 $\sqrt{1.25}\approx 1.118$ 떨어져 있어 막대 길이를 어긴다.

막대는 점을 막대 방향, 곧 $q$ 방향으로 당긴다. 그 힘의 크기를 모르는 수 $\lambda$ 로 두고 첫 반 걸음에 넣으면 다음이 나온다.

$$
p_{1/2}=(0,1)-0.25\lambda(1,0)=(-0.25\lambda,1),\qquad q_1=(1-0.125\lambda,\thinspace 0.5)
$$

$q\_1$ 이 원 위에 있으려면 $(1-0.125\lambda)^2+0.25=1$ 이어야 하고, 여기서 $\lambda\approx 1.072$ 와 $q\_1=(0.866,0.5)$ 가 나온다. 이 점은 원 위에서 각도 $30^\circ$ 인 점이다.

위치는 원 위에 있지만 $p\_{1/2}=(-0.268,1)$ 은 $q\_1$ 과의 내적이 $0.268$ 이라 원에 접하지 않는다. 이 속도로 계속 가면 점이 원 밖으로 나가려 한다. 둘째 반 걸음에도 $q\_1$ 방향의 힘 $\mu$ 를 넣어 $p\_1=p\_{1/2}-0.25\mu\thinspace q\_1$ 로 두고, $q\_1\cdot p\_1=0$ 이 되게 고르면 $\mu\approx 1.072$ 와 $p\_1=(-0.5,0.866)$ 이 나온다.

$p\_1$ 은 $q\_1$ 에 수직이고 크기가 $1$ 이라, 처음 운동 에너지 $\tfrac12$ 가 그대로다. 위치를 맞추는 첫 보정은 SHAKE 방법이고, 속도를 맞추는 둘째 보정을 더한 것이 RATTLE 방법이다.

# 정의

## 제약이 있는 Hamilton 계

위치 $q\in\mathbb R^d$ 가 제약 $g(q)=0$, $g:\mathbb R^d\to\mathbb R^m$ 을 지키고, Hamilton 함수가 $H(q,p)=\tfrac12p^{\mathsf T}M^{-1}p+V(q)$ 인 계를 생각한다. $G(q)=g'(q)$ 는 $g$ 의 Jacobi 행렬이다. 운동방정식은 다음과 같다.

$$
\begin{aligned}
q'&=M^{-1}p\cr
p'&=-\nabla V(q)-G(q)^{\mathsf T}\lambda\cr
0&=g(q)
\end{aligned}
$$

$\lambda\in\mathbb R^m$ 은 [Lagrange 승수법](lagrange-multipliers.md)의 승수이고, $-G(q)^{\mathsf T}\lambda$ 가 제약이 주는 힘이다. 이 계를 **제약이 있는 Hamilton 계(constrained Hamiltonian system)** 라 한다. $g(q)=0$ 을 시간으로 미분하면 숨은 제약 $G(q)M^{-1}p=0$ 이 나온다. 직관 절에서는 $g(q)=\tfrac12(\vert q\vert^2-1)$, $G(q)=q^{\mathsf T}$, $V=0$, $M=I$ 이고, 숨은 제약은 $q\cdot p=0$ 이다.

## SHAKE 방법

걸음 $h$ 의 다음 갱신을 **SHAKE 방법(SHAKE algorithm)** 이라 한다.[^1]

$$
\begin{aligned}
p_{n+1/2}&=p_n-\frac h2\Bigl(\nabla V(q_n)+G(q_n)^{\mathsf T}\lambda_n\Bigr)\cr
q_{n+1}&=q_n+hM^{-1}p_{n+1/2}\cr
0&=g(q_{n+1})
\end{aligned}
$$

셋째 줄이 $\lambda_n$ 을 정한다. 원래 논문은 속도를 쓰지 않는 다음 위치 꼴로 적었고, 위 갱신과 같은 위치열을 준다.

$$
q_{n+1}-2q_n+q_{n-1}=-h^2M^{-1}\Bigl(\nabla V(q_n)+G(q_n)^{\mathsf T}\lambda_n\Bigr)
$$

직관 절의 $\lambda\approx 1.072$ 와 $q\_1=(0.866,0.5)$ 가 이 세 줄의 결과다.

## RATTLE 방법

SHAKE 방법의 세 줄에 다음 두 줄을 더한 것을 **RATTLE 방법** 이라 한다.[^2]

$$
\begin{aligned}
p_{n+1}&=p_{n+1/2}-\frac h2\Bigl(\nabla V(q_{n+1})+G(q_{n+1})^{\mathsf T}\mu_n\Bigr)\cr
0&=G(q_{n+1})M^{-1}p_{n+1}
\end{aligned}
$$

둘째 줄이 $\mu_n$ 을 정한다. $\mu_n$ 이 들어간 식이 $\mu_n$ 에 대해 일차라서, $\mu_n$ 은 $m\times m$ 행렬 $G(q_{n+1})M^{-1}G(q_{n+1})^{\mathsf T}$ 의 일차방정식 하나로 구해진다. 직관 절의 $p\_1=(-0.5,0.866)$ 이 이 두 줄의 결과다.

# 성질

## 제약의 보존

RATTLE 방법의 결과는 걸음마다 $g(q_{n+1})=0$ 과 $G(q_{n+1})M^{-1}p_{n+1}=0$ 을 정확히 만족한다. 정의의 셋째 줄과 다섯째 줄이 이 두 식이다. SHAKE 방법은 위치 제약만 지키므로, 거기서 얻은 운동량 $p_{n+1/2}$ 는 숨은 제약을 어긴다. 직관 절의 $q\_1\cdot p\_{1/2}=0.268$ 이 그 예다.

## 심플렉틱성과 대칭

위치와 운동량이 두 제약을 만족하는 점들의 집합을 $\mathcal M$ 이라 한다. RATTLE 방법의 한 걸음은 $\mathcal M$ 에서 $\mathcal M$ 으로 가는 사상이고, $\mathcal M$ 위에 $\sum_i dq_i\wedge dp_i$ 를 제한한 2형식을 보존한다.[^3] 또 $h$ 를 $-h$ 로 바꾼 걸음이 역사상이라 시간에 대해 대칭이고, 차수는 $2$ 다. 제약이 없으면 Störmer–Verlet 방법과 같다.

## Lobatto IIIA–IIIB 쌍

RATTLE 방법은 Lobatto IIIA–IIIB 2 단 쌍을 제약이 있는 Hamilton 계에 쓴 방법과 같다. $s$ 단 Lobatto IIIA–IIIB 쌍을 같은 방식으로 쓰면 위치와 운동량의 차수가 $2s-2$ 인 심플렉틱 방법이 나온다.[^4]

## 승수의 계산

$\lambda_n$ 을 정하는 식 $g(q_{n+1})=0$ 은 $\lambda_n$ 에 대해 비선형이다. 직관 절에서는 이차방정식이었다. 결합이 많은 분자에서는 제약을 하나씩 돌아가며 그 제약 하나만 만족시키도록 해당 승수를 고치는 반복을 수렴할 때까지 되풀이하고, 이 반복이 Ryckaert 등의 원래 SHAKE 반복이다.[^1] Newton 방법으로 풀면 걸음마다 $m\times m$ 일차방정식을 몇 번 푼다.

## 에너지

RATTLE 방법은 심플렉틱이라 수치해가 [수정 방정식](modified-equations.md)의 Hamilton 판, 곧 수정 Hamilton 함수의 흐름에 가깝다. 그래서 에너지 오차가 $O(h^2)$ 크기에서 진동할 뿐 긴 시간 동안 쌓이지 않는다.[^5]

# 활용

- 분자 동역학. 수소 원자와의 결합처럼 가장 빨리 떠는 결합의 길이를 고정하면 그 진동이 걸음 크기를 묶지 않아, 걸음을 키워 계산할 수 있다. 결합 길이와 결합 각을 제약으로 두고 SHAKE 방법이나 RATTLE 방법으로 적분한다.[^1]
- 강체 동역학. 회전 행렬 $Q$ 의 직교 조건 $Q^{\mathsf T}Q=I$ 를 제약으로 두고 RATTLE 방법으로 적분하면, 걸음마다 행렬이 직교로 남는 심플렉틱 방법이 된다.[^5]
- 제약이 있는 표본 추출. [Hamiltonian Monte Carlo](hamiltonian-monte-carlo.md)를 곡면 위의 분포에 쓸 때, 궤적을 RATTLE 방법으로 계산해 곡면을 벗어나지 않게 한다.
- [미분대수방정식](differential-algebraic-equations.md). 제약이 있는 Hamilton 계는 지표(index) 3 의 미분대수방정식이고, RATTLE 방법은 위치 제약과 숨은 제약을 걸음마다 직접 만족시켜 이 계를 푼다.

[^1]: J.-P. Ryckaert, G. Ciccotti, H. J. C. Berendsen, "Numerical integration of the cartesian equations of motion of a system with constraints: molecular dynamics of n-alkanes", *Journal of Computational Physics* 23 (1977), 327–341.

[^2]: H. C. Andersen, "Rattle: a velocity version of the Shake algorithm for molecular dynamics calculations", *Journal of Computational Physics* 52 (1983), 24–34.

[^3]: B. J. Leimkuhler, R. D. Skeel, "Symplectic numerical integrators in constrained Hamiltonian systems", *Journal of Computational Physics* 112 (1994), 117–125.

[^4]: L. Jay, "Symplectic partitioned Runge–Kutta methods for constrained Hamiltonian systems", *SIAM Journal on Numerical Analysis* 33 (1996), 368–387.

[^5]: E. Hairer, C. Lubich, G. Wanner, *Geometric Numerical Integration*, 2nd ed., Springer (2006), VII.1 절.

# 연관 문서

## 선수지식

- [분할 Runge–Kutta 방법](partitioned-runge-kutta-methods.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #computation
