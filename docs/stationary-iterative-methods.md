# 정지 반복법

# 개요

**정지 반복법(stationary iterative method)** 은 연립일차방정식 $Ax=b$ 의 각 식을 자기 대각 미지수에 대해 풀어 놓고, 다른 미지수에 현재 값을 넣어 새 값을 구하는 일을 되풀이하는 반복법이다. $4x-y=3$, $-x+4y=3$ 을 $x=(3+y)/4$, $y=(3+x)/4$ 로 고쳐 쓰고 $0$ 에서 시작해 값을 넣어 가면, 해 $(1,1)$ 과의 차이가 한 번에 $1/4$ 배씩 줄어든다. 이 방법은 반복이 오차에 곱하는 행렬 하나로 기술되고, 그 행렬의 고윳값의 절댓값이 $1$ 보다 작은지로 수렴을 판정한다.

# 직관

$4x-y=3$, $-x+4y=3$ 의 해는 $(1,1)$ 이다. $x_{k+1}=(3+y_k)/4$, $y_{k+1}=(3+x_k)/4$ 로 $(0,0)$ 에서 시작하면 $(3/4,3/4)$, $(15/16,15/16)$, $(63/64,63/64)$ 가 나온다. 오차가 $1$, $1/4$, $1/16$, $1/64$ 로 매번 $1/4$ 배다.

오차 $e=(x-1,y-1)$ 만 따로 보면 $b$ 가 지워져 $e_{k+1}=Ge_k$, $G=\begin{pmatrix}0&1/4\cr 1/4&0\end{pmatrix}$ 이다. $G$ 의 [고윳값](eigenvalues.md)은 $\pm 1/4$ 이고, 오차는 고유벡터 방향마다 $1/4$ 배가 된다.

$y$ 를 새로 구할 때 방금 구한 $x_{k+1}$ 을 넣으면 $x_1=3/4$, $y_1=(3+3/4)/4=15/16$, $x_2=(3+15/16)/4=63/64$, $y_2=255/256$ 이다. 한 바퀴에 오차가 $1/16$ 배가 되어, 앞의 방법을 두 번 한 것과 같다. 새 값을 곧바로 쓰면 오차에 곱하는 행렬이 바뀌고 그 고윳값이 $0$ 과 $1/16$ 으로 작아진다.

# 정의

## 분할과 반복 행렬

$A$ 가 가역이고 $A=M-N$ 에서 $M$ 이 가역이며 $My=c$ 를 쉽게 풀 수 있다고 한다. 다음 반복을 분할 $A=M-N$ 에 대한 정지 반복법이라 한다.

$$
Mx_{k+1}=Nx_k+b
$$

이 식은 $x_{k+1}=x_k+M^{-1}(b-Ax_k)$ 와 같다.

해 $x^\ast$ 에 대해 오차 $e_k=x_k-x^\ast$ 는 $e_{k+1}=Ge_k$ 를 만족하고, $G=M^{-1}N=I-M^{-1}A$ 를 **반복 행렬(iteration matrix)** 이라 한다. "정지" 는 $G$ 가 $k$ 에 따라 바뀌지 않는다는 뜻이다.

## Jacobi, Gauss–Seidel, SOR

$A=D-E-F$ 로 쓴다. $D$ 는 대각, $-E$ 는 대각 아래, $-F$ 는 대각 위의 성분이다.

| 방법 | M | 반복 행렬 |
| --- | --- | --- |
| Jacobi 반복(Jacobi iteration) | $D$ | $D^{-1}(E+F)$ |
| Gauss–Seidel 반복(Gauss–Seidel iteration) | $D-E$ | $(D-E)^{-1}F$ |
| SOR(successive over-relaxation) | $\frac1\omega D-E$ | $(D-\omega E)^{-1}\bigl((1-\omega)D+\omega F\bigr)$ |

직관 절의 첫 반복이 Jacobi 반복이고 $G_J=\begin{pmatrix}0&1/4\cr 1/4&0\end{pmatrix}$ 이다. 둘째 반복이 Gauss–Seidel 반복이고, $(D-E)^{-1}=\begin{pmatrix}1/4&0\cr 1/16&1/4\end{pmatrix}$ 이므로 $G_{GS}=\begin{pmatrix}0&1/4\cr 0&1/16\end{pmatrix}$ 이다. SOR 은 Gauss–Seidel 의 새 값과 이전 값을 $\omega:(1-\omega)$ 로 섞으며, $\omega=1$ 이면 Gauss–Seidel 이다.

## 스펙트럼 반지름

정사각행렬 $G$ 의 **스펙트럼 반지름(spectral radius)** 은 고윳값의 절댓값 가운데 가장 큰 것 $\rho(G)=\max_i\vert\lambda_i(G)\vert$ 다. 직관 절에서 $\rho(G_J)=1/4$, $\rho(G_{GS})=1/16$ 이다.

# 성질

## 수렴 판정

모든 $x_0$ 에서 $x_k\to x^\ast$ 인 것은 $\rho(G)\lt 1$ 과 동치다[^1].

증명의 요지. $e_k=G^ke_0$ 이다. $\rho(G)\ge 1$ 이면 절댓값이 $1$ 이상인 고윳값의 고유벡터를 $e_0$ 으로 잡아 $\Vert e_k\Vert\not\to 0$ 이다. $\rho(G)\lt 1$ 이면 [Jordan 표준형](jordan-canonical-form.md)에서 각 블록의 거듭제곱이 $k^m\rho^k$ 규모로 $0$ 으로 가므로 $G^k\to 0$ 이다.

$\lim_k\Vert G^k\Vert^{1/k}=\rho(G)$ 이므로, 오차를 $\varepsilon$ 배로 줄이는 반복 수는 큰 $k$ 에서 약 $\log\varepsilon/\log\rho(G)$ 다.

## 대각 우세 행렬

$A$ 가 엄격 대각 우세이면 Jacobi 반복과 Gauss–Seidel 반복이 수렴한다. Jacobi 반복은 $G_J$ 의 대각이 $0$ 이고 $i$ 번째 행의 절댓값 합이 $\sum_{j\ne i}\vert a_{ij}\vert/\vert a_{ii}\vert\lt 1$ 이므로 [Gershgorin 원판 정리](gershgorin-circle-theorem.md)로 $\rho(G_J)\lt 1$ 이다. Gauss–Seidel 반복은 $\Vert G_{GS}\Vert_\infty\le\Vert G_J\Vert_\infty$ 로 보인다[^1].

## 대칭 양정부호 행렬

$A$ 가 대칭 양정부호이면 $0\lt\omega\lt 2$ 인 SOR, 특히 Gauss–Seidel 반복이 수렴한다. 이것이 **Ostrowski–Reich 정리(Ostrowski–Reich theorem)** 다[^1]. 거꾸로 어떤 행렬에서든 $\rho(G_\omega)\ge\vert\omega-1\vert$ 이므로 $\omega$ 가 $(0,2)$ 밖이면 SOR 은 수렴하지 않는다. $\det G_\omega=(1-\omega)^n$ 이고 고윳값의 곱이 이 값이기 때문이다.

Jacobi 반복은 대칭 양정부호만으로는 수렴하지 않는다. $\rho(G_J)\lt 1$ 은 $2D-A$ 도 양정부호일 때 성립한다.

## Young 의 관계식

$A$ 가 삼중대각이거나, 미지수를 두 무리로 나누어 같은 무리끼리는 $A$ 의 성분이 대각 밖에서 $0$ 이 되게 할 수 있으면 다음이 성립한다. 이 관계를 **Young 의 관계식(Young's relation)** 이라 한다[^2].

$$
\rho(G_{GS})=\rho(G_J)^2,\qquad
\omega_{\mathrm{opt}}=\frac{2}{1+\sqrt{1-\rho(G_J)^2}},\qquad
\rho(G_{\omega_{\mathrm{opt}}})=\omega_{\mathrm{opt}}-1
$$

$\rho(G_J)$ 가 실수이고 $1$ 보다 작다고 가정한다. 직관 절에서 $\rho(G_J)=1/4$ 이므로 $\rho(G_{GS})=1/16$ 이고, $\omega_{\mathrm{opt}}=2/(1+\sqrt{15}/4)\approx 1.016$, $\rho(G_{\omega_{\mathrm{opt}}})\approx 0.016$ 이다.

## 격자 문제에서의 반복 수

정사각형 위의 Poisson 방정식을 간격 $h$ 의 $5$ 점 차분으로 이산화하면 $\rho(G_J)=\cos\pi h\approx 1-\pi^2h^2/2$ 다. 오차를 일정한 배수로 줄이는 반복 수가 Jacobi 반복은 $O(h^{-2})$, Gauss–Seidel 반복은 그 절반, 최적 SOR 은 $\rho\approx 1-2\pi h$ 이므로 $O(h^{-1})$ 이다[^2]. 천천히 줄어드는 것은 영역 전체에 걸쳐 완만하게 변하는 오차 성분이고, 이웃 사이에서 진동하는 성분은 몇 번 만에 줄어든다.

# 활용

- [다중격자](multigrid.md)의 완화. 감쇠 Jacobi 반복과 Gauss–Seidel 반복은 진동하는 오차 성분을 빨리 줄이므로, 다중격자는 이것으로 진동 성분을 지우고 남은 매끄러운 성분을 성긴 격자에서 푼다. [선 완화](line-relaxation.md)는 대각 대신 한 줄의 삼중대각 블록을 $M$ 으로 쓰는 블록 판본이다.
- [전처리](preconditioning.md). Jacobi, Gauss–Seidel, SSOR(symmetric successive over-relaxation)의 $M$ 은 [Krylov 부분공간 방법](krylov-subspace-methods.md)의 전처리 행렬로 쓰인다.
- [Kaczmarz 방법](kaczmarz-method.md). 식을 하나씩 사영하는 Kaczmarz 방법은 $AA^{\mathsf T}y=b$ 에 Gauss–Seidel 반복을 쓰고 $x=A^{\mathsf T}y$ 로 둔 것과 같다.
- [축약사상 고정점 정리](banach-fixed-point.md). 어떤 노름에서 $\Vert G\Vert\lt 1$ 이면 $x\mapsto Gx+M^{-1}b$ 가 축약사상이라 이 정리로 수렴과 오차 상한이 나온다.

[^1]: Yousef Saad, *Iterative Methods for Sparse Linear Systems*, 2nd ed., SIAM, 2003, 4 장.
[^2]: David M. Young, *Iterative Solution of Large Linear Systems*, Academic Press, 1971. 일관 순서(consistent ordering) 행렬에서 Jacobi, Gauss–Seidel, SOR 의 스펙트럼 반지름 관계와 모형 문제의 값이 있다.

# 연관 문서

## 선수지식

- [고윳값](eigenvalues.md)

## 더 알아보기

- [다중격자](multigrid.md)

#linear_algebra #algorithms #computation #analysis
