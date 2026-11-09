# 의사스펙트럼

# 개요

**의사스펙트럼(pseudospectrum)** 은 [행렬](matrices.md)의 성분을 크기 $\varepsilon$ 보다 작게 흔들었을 때 [고윳값](eigenvalues.md)이 될 수 있는 복소수 전체의 집합이다. 첫 행 $(0,1)$, 둘째 행 $(0,0)$ 인 행렬은 고윳값이 $0$ 뿐인데, 왼쪽 아래 성분에 $10^{-4}$ 을 더하면 고윳값이 $\pm 0.01$ 로 옮겨 간다. 반올림 오차가 있는 계산이 내놓는 고윳값, 행렬의 거듭제곱이 한동안 커지는 현상은 고윳값만으로 설명되지 않고, 의사스펙트럼이 그 범위를 복소평면의 영역으로 보인다.

# 직관

$A=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 의 고윳값은 $0$ 하나다. 왼쪽 아래에 $\delta\gt 0$ 을 더한 $\begin{pmatrix}0&1\cr \delta&0\end{pmatrix}$ 의 특성다항식은 $z^2-\delta$ 이고 고윳값은 $\pm\sqrt\delta$ 다. 성분 하나를 $\delta$ 만큼 바꾸었는데 고윳값은 $\sqrt\delta$ 만큼 움직였다. 배정밀도 계산의 반올림 오차 $\delta=10^{-16}$ 이면 고윳값은 $10^{-8}$ 만큼 틀린다.

더하는 값을 $\delta e^{i\varphi}$ 로 바꾸면 고윳값은 $\pm\sqrt\delta\thinspace e^{i\varphi/2}$ 이고, $\varphi$ 를 돌리면 반지름 $\sqrt\delta$ 인 원 위의 모든 점이 고윳값이 된다. 그래서 "크기가 $\varepsilon$ 보다 작은 흔들기로 고윳값이 될 수 있는 점" 을 모으면 점 $0$ 이 아니라 반지름이 $\sqrt\varepsilon$ 쯤 되는 원판이 나온다. 대각행렬 $\mathrm{diag}(0,1)$ 은 같은 흔들기로 고윳값이 $\varepsilon$ 보다 많이 움직이지 않는다.

# 정의

$A$ 를 $n\times n$ 복소행렬, $\Vert\cdot\Vert$ 를 2 노름, $\varepsilon\gt 0$ 이라 하자. $A$ 의 고윳값 전체를 $\sigma(A)$ 로 쓴다. $A$ 의 $\varepsilon$ 의사스펙트럼은 다음 집합이다[^1].

$$
\Lambda_\varepsilon(A)=\lbrace z\in\mathbb C: \Vert E\Vert\lt\varepsilon \text{ 인 어떤 } E \text{ 에 대해 } z\in\sigma(A+E)\rbrace
$$

직관 절의 $A$ 에서 $z$ 를 아무 복소수로 잡고 $E=\begin{pmatrix}0&0\cr z^2&0\end{pmatrix}$ 로 두면 $A+E$ 의 고윳값이 $\pm z$ 이고 $\Vert E\Vert=\vert z\vert^2$ 이다. 그래서 $\vert z\vert\lt\sqrt\varepsilon$ 인 $z$ 는 모두 $\Lambda_\varepsilon(A)$ 에 든다.

$\varepsilon$ 의사스펙트럼에 든 점의 절댓값의 상한을 **의사스펙트럼 반지름(pseudospectral radius)** $\rho_\varepsilon(A)$ 라 한다.

# 성질

## 세 가지 동치인 기술

$z\notin\sigma(A)$ 이면 다음 셋이 동치다[^1]. $\sigma_{\min}$ 은 [특이값 분해](singular-value-decomposition.md)의 가장 작은 특이값이다.

$$
z\in\Lambda_\varepsilon(A)\iff\Vert(zI-A)^{-1}\Vert\gt\frac1\varepsilon\iff\sigma_{\min}(zI-A)\lt\varepsilon
$$

$(A+E)v=zv$ 이고 $\Vert v\Vert=1$ 이면 $(zI-A)v=Ev$ 이므로 $\sigma_{\min}(zI-A)\le\Vert E\Vert\lt\varepsilon$ 이다. 거꾸로 $s=\sigma_{\min}(zI-A)$ 의 특이벡터 $u$, $v$ 로 $(zI-A)v=su$ 이면 $E=suv^\ast$ 는 $\Vert E\Vert=s$ 이고 $(zI-A-E)v=0$ 이다. 가운데 식은 $\Vert(zI-A)^{-1}\Vert=1/\sigma_{\min}(zI-A)$ 에서 나온다.

## Jordan 블록의 의사스펙트럼

직관 절의 $A$ 에서 $zI-A=\begin{pmatrix}z&-1\cr 0&z\end{pmatrix}$ 의 두 특이값은 곱이 $\vert z\vert^2$, 제곱의 합이 $2\vert z\vert^2+1$ 이다. $\sigma_{\min}=\varepsilon$ 을 넣으면 $\vert z\vert^4-2\varepsilon^2\vert z\vert^2+\varepsilon^4-\varepsilon^2=0$ 이므로 다음이 나온다.

$$
\Lambda_\varepsilon(A)=\lbrace z:\vert z\vert\lt\sqrt{\varepsilon+\varepsilon^2}\rbrace
$$

$\varepsilon=10^{-4}$ 이면 반지름은 약 $0.0100005$ 다. 정의 절의 $E$ 가 준 원판 $\vert z\vert\lt\sqrt\varepsilon$ 보다 조금 크다.

## 정규행렬과 Bauer–Fike 정리

$A$ 가 정규행렬이면 [Schur 분해](schur-decomposition.md)의 $A=QDQ^\ast$ 에서 $D$ 가 대각이고 $\Vert(zI-A)^{-1}\Vert=\max_i 1/\vert z-\lambda_i\vert$ 이다. 그래서 $\Lambda_\varepsilon(A)$ 는 고윳값마다 반지름 $\varepsilon$ 인 열린 원판의 합집합이다.

**Bauer–Fike 정리(Bauer–Fike theorem)** 는 대각화 가능한 $A=V\Lambda V^{-1}$ 에서 다음을 준다[^1]. $\kappa(V)=\Vert V\Vert\thinspace\Vert V^{-1}\Vert$ 다.

$$
\Lambda_\varepsilon(A)\subseteq\bigcup_i\lbrace z:\vert z-\lambda_i\vert\lt\varepsilon\thinspace\kappa(V)\rbrace
$$

$(zI-A)^{-1}=V(zI-\Lambda)^{-1}V^{-1}$ 의 노름이 $\kappa(V)\max_i 1/\vert z-\lambda_i\vert$ 이하인 것에서 나온다. 직관 절의 $A$ 는 대각화되지 않으므로 이 상한이 없고, 반지름이 $\varepsilon$ 이 아니라 $\sqrt\varepsilon$ 의 차수로 커진다. 단순 고윳값 근처에서 작은 $\varepsilon$ 의 반지름을 정하는 배율은 [고윳값 조건수](eigenvalue-condition-number.md)다.

## 거듭제곱의 과도 증가

다음 행렬과 그 거듭제곱을 본다.

$$
A=\begin{pmatrix}1/2&4\cr 0&1/2\end{pmatrix},\qquad A^k=2^{-k}\begin{pmatrix}1&8k\cr 0&1\end{pmatrix}
$$

고윳값 $1/2$ 로는 $A^k$ 가 걸음마다 반으로 줄어야 하지만 오른쪽 위 성분은 $4,4,3,2,\dots$ 이고, $\Vert A^2\Vert$ 는 $1/4$ 이 아니라 $4$ 보다 크다.

**Kreiss 행렬 정리(Kreiss matrix theorem).** $K(A)=\sup_{\varepsilon\gt 0}(\rho_\varepsilon(A)-1)/\varepsilon$ 이라 하면 다음이 성립한다[^1].

$$
K(A)\le\sup_{k\ge 0}\Vert A^k\Vert\le e\thinspace n\thinspace K(A)
$$

왼쪽 부등식에서 $\rho_\varepsilon(A)$ 가 $1+\varepsilon$ 보다 훨씬 크면 어떤 $k$ 에서 $\Vert A^k\Vert$ 가 $(\rho_\varepsilon(A)-1)/\varepsilon$ 이상이다. 오른쪽 상수 $en$ 은 Spijker 가 얻었다[^2].

## 계산

복소평면의 격자점 $z$ 마다 $\sigma_{\min}(zI-A)$ 를 계산하고 등고선 $\sigma_{\min}=\varepsilon$ 을 그린다. 먼저 $A$ 를 Schur 형 $T$ 로 바꾸면 $\sigma_{\min}(zI-T)=\sigma_{\min}(zI-A)$ 이고, 삼각행렬 $zI-T$ 의 가장 작은 특이값은 삼각계 풀이를 쓰는 역반복으로 격자점마다 $O(n^2)$ 번에 계산된다[^1].

# 활용

- 계산한 고윳값의 신뢰 범위. [QR 알고리즘](qr-algorithm.md)은 후방 안정이라 계산한 고윳값이 $\Vert E\Vert\le Cu\Vert A\Vert$ 인 $A+E$ 의 정확한 고윳값이다. 그래서 계산한 고윳값은 $\Lambda_{Cu\Vert A\Vert}(A)$ 안에 있고, 그 영역이 넓으면 고윳값의 자릿수를 믿을 수 없다. $u$ 는 기계 정밀도다.
- [GMRES](gmres.md)의 수렴. $\Lambda_\varepsilon(A)$ 의 경계 $\Gamma_\varepsilon$ 의 길이를 $L_\varepsilon$ 이라 하면, Cauchy 적분으로 $p(A)$ 를 쓴 상한 $\Vert r_m\Vert/\Vert r_0\Vert\le\frac{L_\varepsilon}{2\pi\varepsilon}\min_{p}\max_{z\in\Gamma_\varepsilon}\vert p(z)\vert$ 가 나온다[^1]. 고윳값에 의한 상한의 $\kappa(V)$ 가 크거나 정의되지 않는 행렬에서 이 상한을 쓴다.
- 유체의 선형 안정성. 평면 Couette 흐름과 Poiseuille 흐름을 선형화한 작용소는 고윳값이 모두 안정한 쪽에 있는데도 작은 교란이 수천 배까지 커진다. 작용소의 의사스펙트럼이 안정한 반평면 밖으로 크게 나가는 것으로 이 과도 증가가 설명된다[^3].

[^1]: L. N. Trefethen and M. Embree, *Spectra and Pseudospectra: The Behavior of Nonnormal Matrices and Operators*, Princeton University Press (2005). 세 정의의 동치는 Theorem 2.1 이다.
[^2]: M. N. Spijker, "On a conjecture by LeVeque and Trefethen related to the Kreiss matrix theorem", *BIT* 31 (1991), 551–555.
[^3]: L. N. Trefethen, A. E. Trefethen, S. C. Reddy, T. A. Driscoll, "Hydrodynamic stability without eigenvalues", *Science* 261 (1993), 578–584.

# 연관 문서

## 선수지식

- [Schur 분해](schur-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation #functional_analysis
