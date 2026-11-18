# LSMR

# 개요

**LSMR(least squares minimal residual)** 은 행렬과 벡터의 곱만 써서 최소제곱 문제 $\min_x\Vert Ax-b\Vert$ 를 푸는 반복법으로, 단계마다 $\Vert A^{\mathsf T}(b-Ax)\Vert$ 를 최소화한다. 측정 백만 개로 미지수 십만 개를 맞추는 문제는 보통 해가 없어서 잔차 $b-Ax$ 가 $0$ 이 되지 않고, 반복을 멈출 때는 최소제곱 해의 조건 $A^{\mathsf T}(b-Ax)=0$ 이 얼마나 맞는지를 본다. [LSQR](lsqr.md)(least squares QR)은 잔차의 길이를 줄이므로 이 판정값이 반복 중에 오르내릴 수 있다.

LSMR 은 LSQR 과 같은 부분공간에서 판정값 자체를 최소화하므로, 판정값이 단조 감소하고 정한 값 아래로 처음 내려간 단계에서 멈출 수 있다.

# 직관

다음 $A$ 와 $b$ 에서 해는 $x=(3,1/3)$ 이다.

$$
A=\begin{pmatrix}1&0\cr 0&3\end{pmatrix},\qquad b=(3,1)
$$

첫 단계의 근사해는 $A^{\mathsf T}b=(3,3)$ 방향, 곧 $x=y(1,1)$ 꼴에서 고른다. 이때 잔차는 $r=(3-y,1-3y)$ 이고 $A^{\mathsf T}r=(3-y,3-9y)$ 다.

LSQR 은 $\Vert r\Vert^2=(3-y)^2+(1-3y)^2$ 을 최소화한다. 미분해서 $0$ 으로 두면 $y=0.6$ 이고, $\Vert r\Vert=2.530$, $\Vert A^{\mathsf T}r\Vert=3.394$ 다.

LSMR 은 $\Vert A^{\mathsf T}r\Vert^2=(3-y)^2+(3-9y)^2$ 을 최소화한다. $y=15/41\approx 0.366$ 이고, $\Vert r\Vert=2.636$, $\Vert A^{\mathsf T}r\Vert=2.650$ 이다.

같은 직선 위에서 LSQR 은 잔차가 짧은 점을, LSMR 은 $A^{\mathsf T}r$ 이 짧은 점을 골랐다. 최소제곱 해에서는 $A^{\mathsf T}r=0$ 이므로 둘째 값이 해에 얼마나 가까운지의 판정값이고, LSMR 은 그 판정값을 단계마다 가장 작게 만든다.

# 정의

[Golub–Kahan 이중대각화](golub-kahan-bidiagonalization.md)의 Lanczos 판본으로 LSQR 과 같은 벡터 $u_k$, $v_k$ 와 $(k+1)\times k$ 아래 이중대각행렬 $B_k$ 를 만든다. 다음 두 식이 성립한다.

$$
AV_k=U_{k+1}B_k,\qquad A^{\mathsf T}U_{k+1}=V_{k+1}L_{k+1}^{\mathsf T}
$$

여기서 $L_{k+1}$ 은 $B_k$ 오른쪽에 열 $\alpha_{k+1}e_{k+1}$ 을 붙인 정사각 아래 이중대각행렬이다. 두 식에서 다음이 나온다.

$$
A^{\mathsf T}AV_k=V_{k+1}\begin{pmatrix}B_k^{\mathsf T}B_k\cr \alpha_{k+1}\beta_{k+1}e_k^{\mathsf T}\end{pmatrix},\qquad A^{\mathsf T}b=\alpha_1\beta_1v_1
$$

LSMR 의 $k$ 번째 근사해는 다음이다[^1].

$$
x_k=V_ky_k,\qquad y_k=\mathop{\mathrm{arg\thinspace min}}\_{y}\left\Vert\alpha_1\beta_1e_1-\begin{pmatrix}B_k^{\mathsf T}B_k\cr \alpha_{k+1}\beta_{k+1}e_k^{\mathsf T}\end{pmatrix}y\right\Vert
$$

$V_{k+1}$ 의 열이 정규직교이므로 괄호 안의 길이가 $\Vert A^{\mathsf T}(b-Ax)\Vert$ 와 같다. 직관 절의 첫 단계에서 $v_1=(1,1)/\sqrt2$ 이고 $y_1v_1=(15/41)(1,1)$ 이다.

# 성질

## 정규방정식의 MINRES

$v_1,\dots,v_k$ 는 $A^{\mathsf T}A$ 와 $A^{\mathsf T}b$ 의 Krylov 부분공간 $\mathcal K_k$ 의 정규직교기저이고, $A^{\mathsf T}(b-Ax)$ 는 정규방정식 $A^{\mathsf T}Ax=A^{\mathsf T}b$ 의 잔차다. 따라서 $x_k$ 는 대칭행렬 $A^{\mathsf T}A$ 의 계에 [MINRES](minres.md)(minimal residual method)를 쓴 근사해와 정확한 산술에서 같다. 같은 방식으로 LSQR 의 근사해는 정규방정식에 [공액기울기법](conjugate-gradient.md)을 쓴 근사해와 같다.

정규방정식을 직접 만들지 않고 이중대각화로 계산하므로, 반올림 오차가 $A$ 의 조건수의 제곱으로 쌓이는 것을 피한다.

## 두 잔차의 단조 감소

$\mathcal K_k$ 가 $k$ 에 대해 커지므로 $\Vert A^{\mathsf T}r_k\Vert$ 는 단조 감소한다. Fong 과 Saunders 는 $\Vert r_k\Vert$ 도 단조 감소함을 보였다[^1]. LSQR 에서는 $\Vert r_k\Vert$ 만 단조 감소하고 $\Vert A^{\mathsf T}r_k\Vert$ 는 오르내릴 수 있다.

## LSQR 과의 비교

같은 단계 $k$ 에서 두 방법의 근사해는 같은 부분공간에 있고 각자의 양을 최소화하므로 다음이 성립한다.

$$
\Vert r_k^{\mathrm{LSQR}}\Vert\le\Vert r_k^{\mathrm{LSMR}}\Vert,\qquad \Vert A^{\mathsf T}r_k^{\mathrm{LSMR}}\Vert\le\Vert A^{\mathsf T}r_k^{\mathrm{LSQR}}\Vert
$$

직관 절에서 $2.530\le 2.636$, $2.650\le 3.394$ 다. 판정값을 $\Vert A^{\mathsf T}r_k\Vert\le\varepsilon\Vert A\Vert\Vert r_k\Vert$ 로 두면 LSMR 이 같거나 더 이른 단계에서 멈추는 일이 많다[^1].

## 짧은 점화식

$B_k^{\mathsf T}B_k$ 를 직접 만들지 않고 $B_k$ 의 QR 분해(orthogonal-triangular decomposition)와 그 결과의 두 번째 QR 분해를 [Givens 회전](givens-rotation.md)으로 단계마다 갱신한다. 그래서 $x_k$ 는 $x_{k-1}$ 에 벡터 하나를 더한 꼴로 갱신되고, 단계마다 $A$ 와 $A^{\mathsf T}$ 의 곱이 한 번씩 들며 저장하는 벡터는 몇 개뿐이다. LSQR 보다 벡터 연산이 조금 더 든다.

# 활용

- 큰 희소 최소제곱 문제. LSQR 이 쓰이는 단층촬영, 측량망 조정 같은 문제에서 정지 판정을 $\Vert A^{\mathsf T}r_k\Vert$ 로 할 때 쓴다.
- 감쇠 최소제곱. $\min_x\Vert Ax-b\Vert^2+\lambda^2\Vert x\Vert^2$ 를 LSQR 의 감쇠 판본과 같은 방법으로 $\lambda$ 를 넣어 푼다. Tikhonov [정칙화](regularization.md)에 쓴다.
- [후방 오차 분석](backward-error-analysis.md). $\Vert A^{\mathsf T}r_k\Vert/\Vert r_k\Vert$ 는 $x_k$ 가 정확한 최소제곱 해가 되도록 $A$ 를 바꾸는 변화 하나의 크기이고, 정지 판정에 이 값을 쓴다[^1].

[^1]: D. C.-L. Fong and M. A. Saunders, "LSMR: An iterative algorithm for sparse least-squares problems", *SIAM Journal on Scientific Computing* 33 (2011), 2950–2971.

# 연관 문서

## 선수지식

- [LSQR](lsqr.md)
- [MINRES](minres.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #optimization
