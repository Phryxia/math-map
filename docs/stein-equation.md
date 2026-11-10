# Stein 방정식

# 개요

**Stein 방정식(Stein equation)** 은 정사각[행렬](matrices.md) $A$ 와 $C$ 가 주어졌을 때 미지의 행렬 $X$ 에 대한 방정식 $X-AXA^\ast=C$ 다. 이산 Lyapunov 방정식(discrete Lyapunov equation)이라고도 한다. 점화식 $x\_{k+1}=Ax_k$ 에서 $x_0=(0,1)$ 이 $(2,0)$ 이 되었다가 $0$ 이 되듯, 결국 $0$ 으로 가는 수열도 도중에 길이가 늘 수 있다. Stein 방정식의 해로 무게를 준 길이 $x^\ast Px$ 를 쓰면 이 길이는 매 단계 줄고, 그 해가 양의 정부호인지로 모든 수열이 $0$ 으로 가는지 판정한다.

# 직관

$A=\begin{pmatrix}0&2\cr 0&0\end{pmatrix}$ 이고 $x\_{k+1}=Ax_k$ 라 하자. $x_0=(0,1)$ 이면 $x_1=(2,0)$, $x_2=0$ 이다. Euclid 길이는 $1$ 에서 $2$ 로 늘었다가 $0$ 이 된다. 모든 $x$ 에서 한 단계마다 줄어드는 길이를 찾고 싶다.

대칭행렬 $P$ 로 $V(x)=x^{\mathsf T}Px$ 를 두고, 한 단계에 정확히 $\vert x\vert^2$ 만큼 줄기를 요구한다. $V(Ax)=V(x)-\vert x\vert^2$ 가 모든 $x$ 에서 성립하는 것은

$$
P-A^{\mathsf T}PA=I
$$

와 같다. 이 식을 $P=I+A^{\mathsf T}PA$ 로 보고 되풀이해 대입하면 다음이 나오고, $A^2=0$ 이므로 셋째 항부터 사라진다.

$$
P=I+A^{\mathsf T}A+(A^{\mathsf T})^2A^2+\cdots=I+A^{\mathsf T}A=\begin{pmatrix}1&0\cr 0&5\end{pmatrix}
$$

$V(0,1)=5$, $V(2,0)=4$, $V(0)=0$ 이다. 첫 단계에 $\vert(0,1)\vert^2=1$ 만큼, 둘째 단계에 $\vert(2,0)\vert^2=4$ 만큼 준다. Euclid 길이는 늘었지만 $P$ 로 잰 길이는 매 단계 줄었다.

# 정의

$n\times n$ 복소행렬 $A$, $C$ 에 대해 $n\times n$ 행렬 $X$ 에 대한 방정식

$$
X-AXA^\ast=C
$$

를 **Stein 방정식** 이라 한다. 직관 절의 식은 $A$ 대신 $A^{\mathsf T}$ 를 넣고 $C=I$ 로 둔 것이다.

$A$ 의 [고윳값](eigenvalues.md)의 절댓값 가운데 가장 큰 것을 $A$ 의 스펙트럼 반지름(spectral radius) $\rho(A)$ 라 한다. 직관 절의 $A$ 는 고윳값이 $0$ 뿐이라 $\rho(A)=0$ 이다.

# 성질

## 해의 유일성

Stein 방정식이 모든 $C$ 에 대해 해를 하나만 갖는 것은 $A$ 의 어느 두 고윳값 $\lambda_i$, $\lambda_j$ 에서도 $\lambda_i\overline{\lambda_j}\ne 1$ 인 것과 동치다.

증명의 요지. [Kronecker 곱](kronecker-product.md)의 행렬 곱 벡터화로 $\mathrm{vec}(AXA^\ast)=(\overline A\otimes A)\mathrm{vec}(X)$ 이므로 방정식은 $(I-\overline A\otimes A)\mathrm{vec}(X)=\mathrm{vec}(C)$ 다. $\overline A\otimes A$ 의 고윳값은 $\overline{\lambda_j}\lambda_i$ 전부이므로 계수행렬의 고윳값은 $1-\lambda_i\overline{\lambda_j}$ 다. $A$ 가 가역이면 양변에 왼쪽에서 $A^{-1}$ 을 곱해 $A^{-1}X-XA^\ast=A^{-1}C$ 라는 [Sylvester 방정식](sylvester-equation.md)이 된다.

## 급수 해

$\rho(A)\lt 1$ 이면 해는

$$
X=\sum_{k=0}^{\infty}A^kC(A^\ast)^k
$$

하나뿐이다. $\rho(A)\lt 1$ 이면 $\Vert A^k\Vert$ 가 지수적으로 줄어 급수가 수렴하고, $X-AXA^\ast$ 를 계산하면 $k\ge 1$ 인 항이 모두 지워져 $C$ 가 남는다. $C$ 가 양의 정부호이면 첫 항 $C$ 때문에 $X$ 도 양의 정부호다.

## 안정성 판정

다음 셋은 동치다.

- $\rho(A)\lt 1$, 곧 모든 초깃값에서 $x\_{k+1}=Ax_k$ 가 $0$ 으로 수렴한다.
- 모든 양의 정부호 $Q$ 에 대해 $P-A^\ast PA=Q$ 의 해 $P$ 가 양의 정부호다.
- 어떤 양의 정부호 $Q$ 에 대해 $P-A^\ast PA=Q$ 가 양의 정부호 해 $P$ 를 갖는다.

증명의 요지. 첫째에서 둘째는 급수 해를 $A^\ast$ 에 쓴 것이다. 셋째에서 첫째를 보이려면 $Av=\lambda v$, $v\ne 0$ 을 잡고 식의 양변을 $v^\ast$ 와 $v$ 로 감싼다. $(1-\vert\lambda\vert^2)v^\ast Pv=v^\ast Qv\gt 0$ 이고 $v^\ast Pv\gt 0$ 이므로 $\vert\lambda\vert\lt 1$ 이다. 연속 시간에서 같은 역할을 하는 것이 [Lyapunov 안정성](lyapunov-stability.md)의 Lyapunov 방정식 $A^{\mathsf T}P+PA=-Q$ 다.

## Smith 반복

$X_0=C$, $A_0=A$ 에서 시작해

$$
X\_{k+1}=X_k+A_kX_kA_k^\ast,\qquad A\_{k+1}=A_k^2
$$

로 두면 $X_k=\sum_{j=0}^{2^k-1}A^jC(A^\ast)^j$ 이다. 반복 $k$ 번이 급수의 항 $2^k$ 개를 더하므로, 급수를 한 항씩 더하는 것보다 반복 횟수가 지수적으로 적다[^1]. 직관 절의 행렬을 $A^{\mathsf T}$ 자리에 넣으면 $A_1=0$ 이라 $X_1=I+A^{\mathsf T}A$ 에서 멈춘다.

# 활용

- 정상 [공분산](covariance.md). $w_k$ 가 서로 독립이고 공분산이 $Q$ 인 잡음일 때 $x\_{k+1}=Ax_k+w_k$ 의 공분산 $\Sigma_k$ 는 $\Sigma\_{k+1}=A\Sigma_kA^{\mathsf T}+Q$ 를 따른다. $\rho(A)\lt 1$ 이면 $\Sigma_k$ 는 Stein 방정식 $\Sigma-A\Sigma A^{\mathsf T}=Q$ 의 해로 수렴한다. [Kalman 필터](kalman-filter.md)에서 관측이 없을 때의 예측 공분산이 이 극한으로 간다.
- 가제어성 Gram 행렬. $\rho(A)\lt 1$ 이면 무한 시간 [가제어성](controllability.md) Gram 행렬 $W=\sum_{j\ge 0}A^jBB^{\mathsf T}(A^{\mathsf T})^j$ 는 $W-AWA^{\mathsf T}=BB^{\mathsf T}$ 의 해다. $W$ 가 양의 정부호인 것과 계가 가제어인 것이 동치다.
- 이산 시간 계의 안정성 판정. 해 $P$ 가 양의 정부호인지 확인하는 것으로 고윳값을 구하지 않고 $\rho(A)\lt 1$ 을 판정하고, $V(x)=x^\ast Px$ 를 Lyapunov 함수로 쓴다.

[^1]: R. A. Smith, "Matrix equation XA + BX = C", *SIAM Journal on Applied Mathematics* 16 (1968), 198–201.

# 연관 문서

## 선수지식

- [Sylvester 방정식](sylvester-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #probability
