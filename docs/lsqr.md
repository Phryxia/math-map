# LSQR

# 개요

**LSQR(least squares QR)** 는 행렬과 벡터의 곱만 써서 최소제곱 문제 $\min_x\Vert Ax-b\Vert$ 를 푸는 반복법이다. 측정 백만 개로 미지수 십만 개를 맞추는 문제에서 $A$ 는 대부분의 성분이 $0$ 이라 저장은 되지만, $A^{\mathsf T}A$ 를 만들어 분해하면 $0$ 이 채워지고 조건수도 제곱된다. LSQR 은 [Golub–Kahan 이중대각화](golub-kahan-bidiagonalization.md)의 Lanczos 판본으로 작은 이중대각 최소제곱 문제를 한 단계씩 키우며 풀고, 그 해로 원래 문제의 근사해를 갱신한다.

# 직관

$A=\begin{pmatrix}1&0\cr 0&1\cr 1&1\end{pmatrix}$, $b=(1,1,0)$ 에서 $\Vert Ax-b\Vert$ 를 최소화한다. 정규방정식 $A^{\mathsf T}Ax=A^{\mathsf T}b$ 는 $\begin{pmatrix}2&1\cr 1&2\end{pmatrix}x=(1,1)$ 이고 해는 $x=(1/3,1/3)$ 이다. 이 계산을 $A^{\mathsf T}A$ 를 만들지 않고 $A$ 와 $A^{\mathsf T}$ 의 곱만으로 한다.

$b$ 를 길이 $\beta_1=\sqrt2$ 로 나눈 $u_1=(1,1,0)/\sqrt2$ 에서 $A^{\mathsf T}u_1=(1,1)/\sqrt2$ 이므로 $\alpha_1=1$, $v_1=(1,1)/\sqrt2$ 다. $Av_1-\alpha_1u_1=(0,0,\sqrt2)$ 이므로 $\beta_2=\sqrt2$, $u_2=(0,0,1)$ 이다. 해를 $x=yv_1$ 꼴에서 찾으면 $Ax=y(\alpha_1u_1+\beta_2u_2)$ 이고 $b=\beta_1u_1$ 이므로, 문제는 $\Vert(\sqrt2,0)-y(1,\sqrt2)\Vert$ 의 최소화가 된다. 답은 $y=\sqrt2/3$ 이고 $x=yv_1=(1/3,1/3)$ 이다.

다음 단계의 $A^{\mathsf T}u_2-\beta_2v_1$ 은 $0$ 이어서 반복이 한 단계로 끝났다. 일반적으로는 단계마다 이중대각 행렬에 행과 열이 하나씩 붙고, 그 작은 문제를 [Givens 회전](givens-rotation.md) 하나로 갱신한다.

# 정의

$\beta_1u_1=b$, $\alpha_1v_1=A^{\mathsf T}u_1$ 에서 시작해 $k=1,2,\dots$ 에 대해

$$
\beta_{k+1}u_{k+1}=Av_k-\alpha_ku_k,\qquad \alpha_{k+1}v_{k+1}=A^{\mathsf T}u_{k+1}-\beta_{k+1}v_k
$$

로 정한다. $\alpha$, $\beta$ 는 각 벡터의 길이를 $1$ 로 만드는 양수다. $U_{k+1}=(u_1,\dots,u_{k+1})$, $V_k=(v_1,\dots,v_k)$ 와 대각이 $\alpha_1,\dots,\alpha_k$, 바로 아래 대각이 $\beta_2,\dots,\beta_{k+1}$ 인 $(k+1)\times k$ 아래 이중대각행렬 $B_k$ 에서 $AV_k=U_{k+1}B_k$ 다. LSQR 의 $k$ 번째 근사해는

$$
x_k=V_ky_k,\qquad y_k=\mathop{\mathrm{arg\thinspace min}}\_{y}\Vert\beta_1e_1-B_ky\Vert
$$

다[^1]. 직관 절은 $B_1=(1,\sqrt2)^{\mathsf T}$, $y_1=\sqrt2/3$ 인 경우다.

# 성질

## 짧은 점화식

$B_k$ 의 QR 분해는 $B_{k-1}$ 의 것에 Givens 회전 하나를 더해 얻는다. 그래서 $x_k$ 는 $x_{k-1}$ 에 벡터 하나를 더한 꼴로 갱신되고, $V_k$ 전체를 저장하지 않는다. 단계마다 $A$ 와 $A^{\mathsf T}$ 의 곱이 한 번씩 들고 저장하는 벡터는 몇 개뿐이다.

## Krylov 부분공간에서의 최소화

$v_1,\dots,v_k$ 는 $A^{\mathsf T}A$ 와 $A^{\mathsf T}b$ 의 [Krylov 부분공간](krylov-subspace-methods.md) $\mathcal K_k$ 의 정규직교기저다. $\Vert b-AV_ky\Vert=\Vert\beta_1e_1-B_ky\Vert$ 이므로 $x_k$ 는 $\mathcal K_k$ 에서 잔차 $\Vert b-Ax\Vert$ 를 최소화한다. 잔차는 $k$ 에 대해 단조감소하고, 정확한 산술에서 $x_k$ 는 정규방정식에 [공액기울기법](conjugate-gradient.md)을 쓴 근사해와 같다.

## 수렴

정규방정식의 공액기울기법과 같으므로 $A$ 의 조건수 $\kappa$ 에 대해 오차가 대략 $\bigl((\kappa-1)/(\kappa+1)\bigr)^k$ 로 줄어든다. 정규방정식의 조건수는 $\kappa^2$ 이지만, 공액기울기법의 수렴은 그 제곱근에 따르므로 $\kappa$ 가 정한다. 같은 근사해를 정규방정식의 공액기울기법 점화식으로 계산하면 반올림 오차가 $\kappa^2$ 규모로 쌓이고, LSQR 은 직교 변환으로 이를 피한다[^1].

## 정지 판정

$\Vert r_k\Vert$ 와 $\Vert A^{\mathsf T}r_k\Vert$ 는 $B_k$ 의 QR 분해에서 곱셈 없이 나온다. $\Vert A^{\mathsf T}r_k\Vert$ 가 $\Vert A\Vert\Vert r_k\Vert$ 에 비해 작으면 $x_k$ 는 최소제곱 해에 가깝다. $Ax=b$ 가 해를 가지면 $\Vert r_k\Vert$ 가 $0$ 으로 가고, 해가 없으면 $\Vert r_k\Vert$ 는 최소 잔차로 가며 $\Vert A^{\mathsf T}r_k\Vert$ 가 $0$ 으로 간다.

## 감쇠 판본

$\lambda\gt 0$ 에 대해 $\min_x\Vert Ax-b\Vert^2+\lambda^2\Vert x\Vert^2$ 는 $A$ 아래에 $\lambda I$ 를 붙인 최소제곱 문제다. 같은 이중대각화에 $\lambda$ 를 반영하는 회전을 단계마다 하나 더해 풀며, Tikhonov [정칙화](regularization.md)의 큰 문제에 쓴다.

# 활용

- 큰 희소 최소제곱 문제. 단층촬영 영상 재구성, 측지 측량망 조정, 지진파 단층 해석처럼 $A$ 가 희소하고 $A^{\mathsf T}A$ 를 만들 수 없는 문제에 쓴다.
- 정칙화. 반복 횟수 $k$ 를 작게 멈추면 큰 특이값 방향만 맞춘 근사해가 나오고, 이것은 절단 특이값 분해와 비슷한 정칙화 효과를 준다.
- 비대칭 연립방정식. 정사각 $A$ 의 $Ax=b$ 에 그대로 쓸 수 있다. $A$ 가 대칭이 아니고 전처리가 어려울 때 GMRES(generalized minimal residual)의 대안이다.

[^1]: Christopher C. Paige and Michael A. Saunders, "LSQR: an algorithm for sparse linear equations and sparse least squares", *ACM Transactions on Mathematical Software* 8 (1982), 43–71.

# 연관 문서

## 선수지식

- [Golub–Kahan 이중대각화](golub-kahan-bidiagonalization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #optimization
