# 분할 Runge–Kutta 방법

# 개요

**분할 Runge–Kutta 방법(partitioned Runge–Kutta method)** 은 미지수를 위치 $q$ 와 운동량 $p$ 처럼 두 묶음으로 나누고, 묶음마다 다른 Runge–Kutta 계수로 적분하는 방법이다. [심플렉틱 Runge–Kutta 방법](symplectic-runge-kutta-methods.md)은 모두 음함수라, 용수철에 매단 추 하나를 계산할 때도 걸음마다 연립방정식을 풀어야 한다. 위치와 운동량에 서로 다른 계수를 쓰면 에너지가 운동 에너지와 위치 에너지로 나뉜 계에서 양함수이면서 심플렉틱인 방법이 나온다.

# 직관

[조화 진동자](harmonic-oscillator.md) $q'=p$, $p'=-q$ 를 걸음 $h=0.5$ 로 $(q,p)=(1,0)$ 에서 푼다. 음함수 중점 방법은 원 위의 점 $(0.8824,-0.4706)$ 을 주지만, 그 점을 얻으려고 $q\_1$, $p\_1$ 의 일차방정식 두 개를 함께 푼다.

$q$ 의 변화는 $p$ 로만, $p$ 의 변화는 $q$ 로만 정해지므로 둘을 번갈아 갱신한다. 반 걸음 동안 $p$ 를 지금 $q$ 로 바꾸고, 한 걸음 동안 $q$ 를 그 $p$ 로 바꾸고, 다시 반 걸음 동안 $p$ 를 새 $q$ 로 바꾼다.

$$
p\_{1/2}=0-0.25\cdot 1=-0.25,\qquad q\_1=1+0.5\cdot(-0.25)=0.875,\qquad p\_1=-0.25-0.25\cdot 0.875=-0.46875
$$

연립방정식 없이 차례로 계산된다. $q\_1^2+p\_1^2\approx 0.985$ 라 원 위에 있지는 않지만, $p^2+(1-h^2/4)q^2$ 는 처음과 나중이 모두 $0.9375$ 로 같다. 걸음마다 이 값이 정확히 보존되어, 점은 원에 가까운 타원 위를 돈다.

# 정의

$y=(q,p)$ 이고 방정식이 $q'=f(q,p)$, $p'=g(q,p)$ 일 때, 두 Runge–Kutta 계수 $(a\_{ij},b\_i)$ 와 $(\hat a\_{ij},\hat b\_i)$ 로 한 걸음을 다음처럼 계산하는 방법을 **분할 Runge–Kutta 방법** 이라 한다.[^1]

$$
\begin{aligned}
Q\_i&=q\_0+h\sum\_ja\_{ij}f(Q\_j,P\_j), & q\_1&=q\_0+h\sum\_ib\_if(Q\_i,P\_i)\cr
P\_i&=p\_0+h\sum\_j\hat a\_{ij}g(Q\_j,P\_j), & p\_1&=p\_0+h\sum\_i\hat b\_ig(Q\_i,P\_i)
\end{aligned}
$$

$q$ 에 Lobatto IIIA 방법, $p$ 에 Lobatto IIIB 방법의 2 단 계수를 쓴 것을 Lobatto IIIA–IIIB 쌍이라 한다.

$$
A=\begin{pmatrix}0&0\cr \frac12&\frac12\end{pmatrix},\qquad \hat A=\begin{pmatrix}\frac12&0\cr \frac12&0\end{pmatrix},\qquad b=\hat b=\Bigl(\frac12,\frac12\Bigr)
$$

$f$ 가 $p$ 에만, $g$ 가 $q$ 에만 달려 있으면 이 쌍에서 $Q\_1=q\_0$, $P\_1=P\_2=p\_0+\frac h2g(q\_0)$, $Q\_2=q\_1$ 이 되어 직관 절의 계산과 같다. 이 방법을 **Störmer–Verlet 방법(Störmer–Verlet method)** 이라 한다.

# 성질

## 심플렉틱 조건

분할 Runge–Kutta 방법은 다음을 만족하면 모든 Hamilton 계에서 심플렉틱이다.[^1]

$$
b\_i\hat a\_{ij}+\hat b\_ja\_{ji}=b\_i\hat b\_j,\qquad b\_i=\hat b\_i\qquad(1\le i,j\le s)
$$

Hamilton 함수가 $H=T(p)+V(q)$ 로 나뉘면 둘째 조건 $b\_i=\hat b\_i$ 가 없어도 첫째 조건만으로 심플렉틱이다. Lobatto IIIA–IIIB 쌍은 네 $(i,j)$ 에서 양변이 모두 $\frac14$ 라 조건을 만족한다.

## 양함수 심플렉틱 방법

$H=T(p)+V(q)$ 이면 $f=\nabla T(p)$, $g=-\nabla V(q)$ 다. 그러면 $Q\_i$ 는 $P\_j$ 들로만, $P\_i$ 는 $Q\_j$ 들로만 정해지므로, 계수의 $0$ 의 배치가 단들을 한 줄로 세워 앞의 것만 쓰게 하면 연립방정식 없이 계산한다.

Lobatto IIIA–IIIB 쌍은 $Q\_1,P\_1,P\_2,Q\_2$ 의 순서다. 이렇게 얻는 양함수 심플렉틱 방법이 [심플렉틱 적분기](symplectic-integrators.md)의 leapfrog 와 그 합성들이다. 한 묶음의 계수만 쓰는 [Runge–Kutta 방법](runge-kutta-methods.md)에서는 양함수 심플렉틱 방법이 없으므로, 분할이 양함수성을 얻는 방법이다.

## 차수

분할 Runge–Kutta 방법의 차수 조건은 두 색의 뿌리 나무로 센다. $s$ 단 Lobatto IIIA–IIIB 쌍은 차수 $2s-2$ 이고, $s=2$ 인 Störmer–Verlet 방법은 2 차다.[^1]

## 수정 Hamilton 함수

Störmer–Verlet 방법의 수치해는 수정 Hamilton 함수의 흐름 위에 있다. 직관 절의 조화 진동자에서 보존되는 $p^2+(1-h^2/4)q^2$ 가 그 수정 Hamilton 함수의 상수배다. [수정 방정식](modified-equations.md)의 Hamilton 판이다.

# 활용

- 분자 동역학. 원자 사이의 힘이 위치에만 달린 계를 Störmer–Verlet 방법으로 걸음마다 힘을 한 번만 계산해 적분한다.
- 천체 역학. 행성계의 궤도를 양함수 심플렉틱 방법과 그 고차 합성으로 긴 시간 적분한다.
- [Hamiltonian Monte Carlo](hamiltonian-monte-carlo.md). 제안을 만드는 궤적을 Störmer–Verlet 방법으로 계산한다. 이 방법이 부피를 보존하고 시간 대칭이라 수용 확률이 간단한 꼴이 된다.
- 제약이 있는 역학. Lobatto IIIA–IIIB 쌍을 제약 조건과 함께 쓴 RATTLE 방법(RATTLE algorithm)이 결합 길이를 고정한 분자의 운동을 계산한다.

[^1]: E. Hairer, C. Lubich, G. Wanner, *Geometric Numerical Integration*, 2nd ed., Springer (2006), II.2 절, III.2 절, VI.4 절.

# 연관 문서

## 선수지식

- [심플렉틱 Runge–Kutta 방법](symplectic-runge-kutta-methods.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #computation
