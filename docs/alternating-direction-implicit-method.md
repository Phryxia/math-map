# 교대 방향 음함수 방법

# 개요

**교대 방향 음함수 방법(alternating direction implicit method, ADI 방법)** 은 2 차원 열방정식을 시간 간격마다 풀 때, 한 걸음을 반으로 나누어 앞 반은 $x$ 방향만, 뒤 반은 $y$ 방향만 음함수로 처리하는 계산법이다. 정사각형 판의 온도를 격자 간격 $0.1$ 로 계산하면 미지수가 $81$ 개이고, [Crank–Nicolson 방법](crank-nicolson-method.md)을 그대로 쓰면 걸음마다 미지수 $81$ 개가 모두 얽힌 연립방정식을 푼다. ADI 방법은 이것을 한 줄에 미지수 $9$ 개인 삼중대각 연립방정식 여러 개로 바꾸고, 그러면서도 큰 시간 간격에서 안정하고 정확도도 Crank–Nicolson 방법과 같은 차수를 유지한다.

# 직관

판 $\lbrack 0,1\rbrack^2$ 의 가장자리 온도를 $0$ 으로 두고 [열방정식](heat-equation.md) $u_t=u\_{xx}+u\_{yy}$ 를 푼다. 처음 온도가 $\sin(\pi x)\sin(\pi y)$ 이면 참해는 $e^{-2\pi^2t}\sin(\pi x)\sin(\pi y)$ 이다. 격자 간격 $h=0.1$ 에서 안쪽 격자점은 $9\times 9=81$ 개다.

Crank–Nicolson 방법은 격자점마다 그 점과 상하좌우 네 점의 다음 시각 값이 함께 들어간 식을 세운다. 그래서 $81$ 개의 미지수가 한꺼번에 얽힌다. 막대에서는 이웃이 좌우뿐이라 [삼중대각계](tridiagonal-systems.md)가 나오지만, 판에서는 위아래 이웃 때문에 그 꼴이 깨진다.

얽힘이 두 방향의 이웃이 동시에 미지수라서 생겼으니, 한 번에 한 방향만 미지수로 둔다. 반 걸음 동안은 $x$ 방향 차분만 다음 값으로, $y$ 방향 차분은 지금 값으로 쓴다. 그러면 가로줄 하나마다 미지수 $9$ 개짜리 삼중대각계가 되고, 가로줄 $9$ 개를 따로 푼다. 다음 반 걸음은 역할을 바꾸어 세로줄 $9$ 개를 푼다.

시간 간격 $k=0.01$ 로 $t=0.1$ 까지 열 걸음 가면 진폭이 $0.14096$ 이다. 공간만 이산화하고 시간은 정확히 푼 값이 $0.14118$ 이고, Crank–Nicolson 방법은 $0.14029$, 뒤 Euler 차분은 $0.16731$ 이다.

# 정의

## Peaceman–Rachford 방법

격자점 $(x_i,y_j)=(ih,jh)$ 와 시각 $t_n=nk$ 에서 $u^n\_{ij}$ 로 근사하고, 방향별 이계 차분을 다음과 같이 쓴다.

$$
\delta_x^2u\_{ij}=u\_{i-1,j}-2u\_{ij}+u\_{i+1,j},\qquad \delta_y^2u\_{ij}=u\_{i,j-1}-2u\_{ij}+u\_{i,j+1}
$$

$r=k/h^2$ 로 두고 중간값 $u^\ast$ 를 거쳐 다음 두 식으로 한 걸음 가는 방법을 **Peaceman–Rachford 방법(Peaceman–Rachford method)** 이라 한다.[^1]

$$
\begin{aligned}
\Bigl(1-\frac r2\delta_x^2\Bigr)u^\ast\_{ij}&=\Bigl(1+\frac r2\delta_y^2\Bigr)u^n\_{ij}\cr
\Bigl(1-\frac r2\delta_y^2\Bigr)u^{n+1}\_{ij}&=\Bigl(1+\frac r2\delta_x^2\Bigr)u^\ast\_{ij}
\end{aligned}
$$

첫 식은 $j$ 를 고정할 때마다 $u^\ast\_{1j},\dots,u^\ast\_{9j}$ 에 대한 삼중대각계이고, 둘째 식은 $i$ 를 고정할 때마다 $u^{n+1}\_{i1},\dots,u^{n+1}\_{i9}$ 에 대한 삼중대각계다. 직관 절의 계산이 이 방법이다.

## 행렬 꼴

방향별 차분 행렬을 $A_x=\delta_x^2/h^2$, $A_y=\delta_y^2/h^2$ 로 쓰면 한 걸음은 다음 곱이다.

$$
U^{n+1}=\Bigl(I-\tfrac k2A_y\Bigr)^{-1}\Bigl(I+\tfrac k2A_x\Bigr)\Bigl(I-\tfrac k2A_x\Bigr)^{-1}\Bigl(I+\tfrac k2A_y\Bigr)U^n
$$

# 성질

## 무조건 안정성

$\sin(p\pi x)\sin(q\pi y)$ 꼴의 격자 모드에서 $-A_x$ 와 $-A_y$ 의 고윳값을 $\lambda_p=4\sin^2(p\pi h/2)/h^2$, $\lambda_q$ 로 쓰면, 한 걸음의 증폭 인자는 다음과 같다.

$$
g=\frac{1-\tfrac k2\lambda_p}{1+\tfrac k2\lambda_p}\cdot\frac{1-\tfrac k2\lambda_q}{1+\tfrac k2\lambda_q}
$$

두 인수가 모두 절댓값 $1$ 이하이므로 모든 $k$ 에서 $\vert g\vert\le 1$ 이다. 그래서 Peaceman–Rachford 방법은 시간 간격에 제한이 없이 안정하다.[^1] 직관 절의 모드는 $p=q=1$ 이고 $\lambda_1\approx 9.789$ 다.

## 차수

$A_x$ 와 $A_y$ 는 교환하므로 위 곱의 인수 순서를 바꿀 수 있고, 증폭 인자를 전개하면 $e^{-k(\lambda_p+\lambda_q)}$ 와 $k^2$ 항까지 맞는다. 그래서 시간에 대해 차수 $2$ 다. Crank–Nicolson 방법의 증폭 인자는 다음과 같고, 두 인자는 $k^3$ 항부터 다르다.

$$
\frac{1-\tfrac k2(\lambda_p+\lambda_q)}{1+\tfrac k2(\lambda_p+\lambda_q)}
$$

## 계산량

한 변에 안쪽 격자점이 $m$ 개이면 미지수는 $m^2$ 개다. Peaceman–Rachford 방법의 한 걸음은 크기 $m$ 인 삼중대각계 $2m$ 개를 푸는 것이고, 삼중대각계 하나는 $O(m)$ 에 풀리므로 한 걸음이 $O(m^2)$ 이다. 미지수 하나당 상수 번의 연산이다.

## 3 차원으로의 확장

같은 방식을 세 방향으로 그대로 넓히면 무조건 안정성이 성립하지 않는다. 3 차원에서는 첫 단계에서 모든 방향의 차분을 쓰고 이후 단계에서 한 방향씩 고쳐 나가는 Douglas 방법(Douglas method)을 쓴다.[^2]

# 활용

- 저류층과 확산 계산. 석유 저류층의 압력 방정식을 풀기 위해 Peaceman 과 Rachford 가 이 방법을 만들었다.[^1]
- 행렬 방정식. [Sylvester 방정식](sylvester-equation.md) $AX-XB=C$ 와 Lyapunov 방정식을 ADI 반복으로 풀고, 이동 매개변수를 고르는 문제가 유리함수 근사 문제가 된다.[^3]
- 볼록 최적화. 같은 두 단계 구조를 단조 작용소의 합에 쓴 것이 Peaceman–Rachford 분할과 [Douglas–Rachford 분할](douglas-rachford-splitting.md)이다.
- 연산자 분할. 두 방향의 흐름을 번갈아 적용하는 것은 [Lie–Trotter 곱 공식](lie-trotter-formula.md)의 분할과 같은 구조다. 두 차분 행렬이 교환하므로 두 방향의 정확한 흐름을 번갈아 곱해도 분할 오차가 생기지 않고, 남는 오차는 각 방향의 Crank–Nicolson 꼴 근사에서 온다.

[^1]: D. W. Peaceman, H. H. Rachford, "The numerical solution of parabolic and elliptic differential equations", *Journal of the Society for Industrial and Applied Mathematics* 3 (1955), 28–41.
[^2]: J. Douglas, H. H. Rachford, "On the numerical solution of heat conduction problems in two and three space variables", *Transactions of the American Mathematical Society* 82 (1956), 421–439.
[^3]: E. L. Wachspress, *The ADI Model Problem*, Springer (2013). ADI 반복의 이동 매개변수와 Sylvester, Lyapunov 방정식.

# 연관 문서

## 선수지식

- [Crank–Nicolson 방법](crank-nicolson-method.md)
- [삼중대각계](tridiagonal-systems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #algorithms
