# 불변 부분공간의 섭동

# 개요

**불변 부분공간의 섭동(perturbation of invariant subspaces)** 은 행렬을 조금 바꾸었을 때 그 행렬이 제자리로 보내는 부분공간이 얼마나 기우는지를 다루는 이론이다. 대각 성분이 $1$, $0$ 이고 오른쪽 위 성분이 $1$ 인 $2\times 2$ 위삼각행렬은 첫 좌표축을 첫 좌표축으로 보내는데, 왼쪽 아래 성분을 $0$ 에서 $0.01$ 로 바꾸면 그런 직선이 첫 좌표축에서 조금 벗어난다. 이 이론은 그 직선을 다시 계산하지 않고, 바꾼 성분의 크기, 오른쪽 위 성분의 크기, 대각 성분의 차 세 수만으로 기운 각의 상한을 준다.

# 직관

[QR 알고리즘](qr-algorithm.md)은 행렬을 위삼각 꼴에 가깝게 몰아 가고, 대각 아래 성분이 충분히 작아지면 그 성분을 $0$ 으로 버려 행렬을 둘로 나눈다. 버린 뒤의 행렬에서는 첫 좌표축이 제자리로 가는 직선이다. 다음 $A$ 에서 $0.01$ 을 버린다고 하자.

$$
A=\begin{pmatrix}1&1\cr 0.01&0\end{pmatrix}
$$

$A$ 가 제자리로 보내는 직선을 $(1,p)$ 방향으로 놓는다. $A(1,p)^{\mathsf T}=(1+p,\thinspace 0.01)^{\mathsf T}$ 가 어떤 $\lambda$ 에 대해 $\lambda(1,p)^{\mathsf T}$ 이려면 $\lambda=1+p$ 이고 $\lambda p=0.01$ 이어야 한다. 두 식에서 $p^2+p=0.01$ 이고 작은 근은 $p\approx 0.00990$ 이다. 직선은 첫 좌표축에서 약 $0.0099$ 라디안 기울어 있다.

대각 성분이 $a$, $d$, 오른쪽 위가 $b$, 왼쪽 아래가 $\varepsilon$ 인 행렬에서 같은 계산을 하면 $bp^2+(a-d)p-\varepsilon=0$ 이 나온다. $\varepsilon$ 이 작으면 $p\approx\varepsilon/(a-d)$ 이다. 그런데 이 이차방정식은 $(a-d)^2+4b\varepsilon\ge 0$ 일 때만 실근을 갖는다. $a-d=1$, $b=100$, $\varepsilon=-0.003$ 이면 $1-1.2\lt 0$ 이라 실근이 없고, 행렬의 고윳값은 $0.5\pm 0.224i$ 가 되어 제자리로 가는 실직선이 아예 없다.

왼쪽 아래 성분은 앞의 예보다 작은데 직선이 사라졌다. 기울기를 정하는 것은 버린 성분의 크기 하나가 아니라 버린 성분의 크기, 오른쪽 위 성분의 크기, 두 대각 성분의 차이고, 버려도 되는지는 앞의 두 수의 곱의 네 배가 차의 제곱보다 작은지로 갈린다. 블록 행렬에서 대각 성분의 차 자리에 [Sylvester 방정식](sylvester-equation.md)의 분리도가 온다.

# 정의

## 불변 부분공간

$n\times n$ 복소행렬 $A$ 에 대해 $A\mathcal X\subseteq\mathcal X$ 인 부분공간 $\mathcal X\subseteq\mathbb C^n$ 을 $A$ 의 **불변 부분공간(invariant subspace)** 이라 한다. $\mathcal X$ 의 기저를 열로 쓴 $n\times k$ 행렬 $X$ 로는 어떤 $k\times k$ 행렬 $L$ 이 있어 $AX=XL$ 인 것과 같다. 직관 절에서 $b=1$, $\varepsilon=0$ 인 위삼각행렬의 첫 좌표축은 $X=(1,0)^{\mathsf T}$, $L=(1)$ 인 불변 부분공간이다.

## 블록 분할

$\mathbb C^n$ 의 정규직교기저를 앞의 $k$ 개와 뒤의 $n-k$ 개로 나누어 다음과 같이 쓴다.

$$
\begin{pmatrix}X_1^\ast\cr X_2^\ast\end{pmatrix}A\begin{pmatrix}X_1&X_2\end{pmatrix}=\begin{pmatrix}A_{11}&A_{12}\cr A_{21}&A_{22}\end{pmatrix}
$$

$X_1$ 의 열공간이 불변 부분공간인 것은 $A_{21}=0$ 인 것과 같다. 직관 절의 $A$ 를 표준기저로 나누면 $A_{11}=(1)$, $A_{12}=(1)$, $A_{21}=(0.01)$, $A_{22}=(0)$ 이다.

## 그래프 부분공간

$(n-k)\times k$ 행렬 $P$ 에 대해 다음 행렬의 열공간을 $P$ 의 **그래프 부분공간(graph subspace)** 이라 한다.

$$
\begin{pmatrix}I\cr P\end{pmatrix}
$$

$P=0$ 이면 첫 $k$ 개 좌표축이 펼치는 부분공간이다. 직관 절의 직선 $(1,p)$ 는 $P=(p)$ 의 그래프 부분공간이다.

# 성질

## 불변성의 Riccati 방정식

그래프 부분공간이 $A$ 의 불변 부분공간인 것은 $P$ 가 다음을 만족하는 것과 동치다.

$$
PA_{11}-A_{22}P=A_{21}-PA_{12}P
$$

증명의 요지. 그래프 부분공간을 정의한 $I$ 와 $P$ 를 쌓은 행렬을 $Y$ 로 두면 불변성은 어떤 $L$ 에 대해 $AY=YL$ 인 것이다. 그 첫 블록 행이 $L=A_{11}+A_{12}P$ 를 주고, 둘째 블록 행 $A_{21}+A_{22}P=PL$ 에 이것을 넣으면 위 식이다. 직관 절에서는 $p-0\cdot p=0.01-p^2$ 이다. 이 식을 비대칭 [대수 Riccati 방정식](algebraic-riccati-equation.md)(nonsymmetric algebraic Riccati equation)이라 한다.

$P$ 가 이 식을 만족하면 다음 닮음 변환이 $A$ 를 블록 위삼각 꼴로 바꾼다.

$$
\begin{pmatrix}I&0\cr -P&I\end{pmatrix}\begin{pmatrix}A_{11}&A_{12}\cr A_{21}&A_{22}\end{pmatrix}\begin{pmatrix}I&0\cr P&I\end{pmatrix}=\begin{pmatrix}A_{11}+A_{12}P&A_{12}\cr 0&A_{22}-PA_{12}\end{pmatrix}
$$

왼쪽 아래 블록은 $A_{21}+A_{22}P-PA_{11}-PA_{12}P$ 이고 위 식으로 $0$ 이다. 그래서 $A$ 의 [고윳값](eigenvalues.md)은 $A_{11}+A_{12}P$ 와 $A_{22}-PA_{12}$ 의 고윳값을 모은 것이다. 직관 절에서 $1+p\approx 1.0099$ 가 $A$ 의 큰 고윳값이다.

## 그래프 부분공간과 주각

$P$ 의 [특이값](singular-value-decomposition.md)을 $\sigma_1\ge\cdots\ge\sigma_k$ 라 하면, $P$ 의 그래프 부분공간과 첫 $k$ 개 좌표축의 부분공간 사이의 주각 $\theta_i$ 는 $\tan\theta_i=\sigma_i$ 를 만족한다. 그래서 가장 큰 주각은 $\tan\theta_{\max}=\Vert P\Vert\_2$ 다.

증명의 요지. 앞 절의 $Y$ 에 대해 $Y(I+P^\ast P)^{-1/2}$ 는 열이 정규직교인 기저다. 첫 블록 $(I+P^\ast P)^{-1/2}$ 의 특이값이 $1/\sqrt{1+\sigma_i^2}$ 이고, [Davis–Kahan sin θ 정리](davis-kahan-theorem.md)의 주각 정의에 따라 이것이 $\cos\theta_i$ 다.

## Stewart 정리

블록 분할에서 다음 세 수를 둔다.

$$
\gamma=\Vert A_{21}\Vert\_F,\qquad \eta=\Vert A_{12}\Vert\_F,\qquad \delta=\mathrm{sep}(A_{22},A_{11})=\min_{P\ne 0}\frac{\Vert A_{22}P-PA_{11}\Vert\_F}{\Vert P\Vert\_F}
$$

**Stewart 정리(Stewart's theorem)** 는 $4\gamma\eta\lt\delta^2$ 이면 Riccati 방정식의 해 $P$ 가 다음 범위에 하나만 있다는 정리다[^1].

$$
\Vert P\Vert\_F\le\frac{2\gamma}{\delta+\sqrt{\delta^2-4\gamma\eta}}\lt\frac{2\gamma}{\delta}
$$

그래서 $A$ 는 첫 $k$ 개 좌표축의 부분공간에서 가장 큰 주각이 $\arctan(2\gamma/\delta)$ 미만인 불변 부분공간을 갖는다. 직관 절의 $A$ 에서는 $\gamma=0.01$, $\eta=1$, $\delta=1$ 이고 상한은 $0.02/(1+\sqrt{0.96})\approx 0.01010$ 이며 실제 값은 $0.00990$ 이다.

증명의 요지. $\mathcal T(P)=PA_{11}-A_{22}P$ 로 두면 $\delta\gt 0$ 이므로 $\mathcal T$ 는 가역이고 $\Vert\mathcal T^{-1}\Vert\le 1/\delta$ 다. Riccati 방정식은 고정점 문제 $P=\Phi(P)$ 다.

$$
\Phi(P)=\mathcal T^{-1}\bigl(A_{21}-PA_{12}P\bigr)
$$

$\rho$ 를 $\eta\rho^2-\delta\rho+\gamma=0$ 의 작은 근으로 두면, $\Vert P\Vert\_F\le\rho$ 에서 $\Vert\Phi(P)\Vert\_F\le(\gamma+\eta\rho^2)/\delta=\rho$ 다. 같은 공의 $P$, $Q$ 에 대해 다음 등식이 성립한다.

$$
PA_{12}P-QA_{12}Q=(P-Q)A_{12}P+QA_{12}(P-Q)
$$

그래서 $\Vert\Phi(P)-\Phi(Q)\Vert\_F\le(2\eta\rho/\delta)\Vert P-Q\Vert\_F$ 이고, $\rho\lt\delta/(2\eta)$ 라 $\Phi$ 는 축약사상이다. [축약사상 고정점 정리](banach-fixed-point.md)가 해의 존재와 유일성을 준다.

## 2×2 행렬에서의 정확성

직관 절의 꼴에서 $\delta=\vert a-d\vert$, $\gamma=\vert\varepsilon\vert$, $\eta=\vert b\vert$ 이고 Riccati 방정식은 $bp^2+(a-d)p-\varepsilon=0$ 이다. $b\varepsilon\lt 0$ 이면 실근이 있을 조건이 정확히 $4\gamma\eta\le\delta^2$ 이고, 작은 근의 절댓값이 Stewart 정리의 상한과 같다.

$a=1$, $b=1$, $d=0$, $\varepsilon=-0.01$ 이면 $p=(-1+\sqrt{0.96})/2\approx -0.01010$ 이다. $\varepsilon=-1/4$ 에서 두 고윳값이 $1/2$ 로 겹치고, $\varepsilon\lt -1/4$ 이면 실불변 직선이 없다. 그래서 조건 $4\gamma\eta\lt\delta^2$ 과 상수 $2$ 는 더 줄일 수 없다.

## 이미 있는 불변 부분공간의 섭동

$X_1$ 의 열공간이 $A$ 의 불변 부분공간이고, 같은 기저로 나눈 섭동 $E$ 의 블록을 $E_{ij}$ 라 하자. $A+E$ 의 블록은 $A_{11}+E_{11}$, $A_{12}+E_{12}$, $E_{21}$, $A_{22}+E_{22}$ 다. 분리도는 블록을 바꾼 만큼만 줄어든다.

$$
\mathrm{sep}(A_{22}+E_{22},A_{11}+E_{11})\ge\mathrm{sep}(A_{22},A_{11})-\Vert E_{11}\Vert\_F-\Vert E_{22}\Vert\_F
$$

오른쪽을 $\hat\delta$ 라 두고 $4\Vert E_{21}\Vert\_F\Vert A_{12}+E_{12}\Vert\_F\lt\hat\delta^2$ 이면, Stewart 정리에 따라 $A+E$ 는 원래 부분공간에서 가장 큰 주각의 탄젠트가 $2\Vert E_{21}\Vert\_F/\hat\delta$ 미만인 불변 부분공간을 갖는다[^2].

## 에르미트 행렬

$A$ 가 에르미트 행렬이면 $A_{12}=A_{21}^\ast$ 이고, $A_{11}$, $A_{22}$ 도 에르미트라 분리도가 두 블록의 고윳값 사이의 가장 짧은 거리다. 이때는 Davis–Kahan sin θ 정리가 조건 $4\gamma\eta\lt\delta^2$ 없이 주각의 사인에 대한 상한을 준다. 정규행렬이 아니면 분리도가 고윳값 사이의 거리보다 훨씬 작을 수 있고, 그때 같은 $\gamma$ 로도 부분공간이 크게 기운다.

# 활용

- QR 알고리즘의 수축(deflation). 대각 아래 블록 $A_{21}$ 을 $0$ 으로 버리면 계산한 불변 부분공간의 주각 오차가 $2\Vert A_{21}\Vert\_F/\delta$ 미만이고, 고윳값은 $A_{11}$ 과 $A_{11}+A_{12}P$ 의 차만큼 움직인다.
- 계산한 불변 부분공간의 사후 오차. 정규직교 $X_1$ 과 $L=X_1^\ast AX_1$ 의 잔차 $R=AX_1-X_1L$ 에 대해 $A_{21}=X_2^\ast R$ 이므로 $\gamma\le\Vert R\Vert\_F$ 이고, Stewart 정리가 참 불변 부분공간까지의 각을 잔차로 누른다.
- [스펙트럼 분할정복](spectral-divide-and-conquer.md). 부호 함수로 얻은 부분공간에서 행렬을 블록 위삼각 꼴로 나눌 때 남은 왼쪽 아래 블록의 크기를 이 정리로 평가한다.
- [고윳값 조건수](eigenvalue-condition-number.md). $k=1$ 이고 $A_{11}$ 이 단순 고윳값 하나이면 Riccati 해의 1 차 항 $\mathcal T^{-1}(A_{21})$ 이 고유벡터의 섭동이고, 고윳값의 섭동은 1 차 근사로 $A_{12}\mathcal T^{-1}(A_{21})$ 이다.
- [Schur–Parlett 방법](schur-parlett-method.md). 고윳값을 블록으로 묶을 때 블록 사이의 분리도가 작으면 블록 사이 Sylvester 방정식의 해가 커지고 불변 부분공간도 섭동에 민감하다.

[^1]: G. W. Stewart, "Error and perturbation bounds for subspaces associated with certain eigenvalue problems", *SIAM Review* 15 (1973), 727–764.
[^2]: G. W. Stewart, J.-G. Sun, *Matrix Perturbation Theory*, Academic Press, 1990. V 장 2 절.

# 연관 문서

## 선수지식

- [Sylvester 방정식](sylvester-equation.md)
- [Davis–Kahan sin θ 정리](davis-kahan-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #analysis
