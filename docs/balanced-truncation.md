# 균형 절단

# 개요

**균형 절단(balanced truncation)** 은 상태가 많은 선형계에서 입력으로 움직이기도 어렵고 출력에도 잘 보이지 않는 상태 방향을 골라 버려, 입출력이 거의 같은 작은 계를 만드는 방법이다. 상태 둘인 계에서 한 상태를 그냥 지우면 출력이 크게 달라질 수 있는데, 상태를 더하고 뺀 두 조합으로 좌표를 바꾼 뒤 한쪽을 지우면 출력이 거의 그대로다. 균형 절단은 이런 좌표를 두 Gram 행렬로 찾고, 버린 방향의 크기로 출력 오차의 상한을 준다.

# 직관

상태 $x_k=(x_1,x_2)$ 가 입력 $u_k$ 와 함께 다음을 따르고 출력이 $y_k=x_1+x_2$ 인 계를 둔다.

$$
x\_{k+1}=\begin{pmatrix}1/2&0\cr 0&-1/2\end{pmatrix}x_k+\begin{pmatrix}1\cr 1\end{pmatrix}u_k
$$

$x_0=0$ 에서 $u_0=1$ 을 넣고 그 뒤로는 $0$ 을 넣으면 출력 $y_1,y_2,y_3,\dots$ 는 $2,0,1/2,0,1/8,\dots$ 이다. 상태를 하나로 줄이려고 $x_2$ 를 지우고 $y_k=x_1$ 로 두면 출력은 $1,1/2,1/4,1/8,\dots$ 이고, 두 출력의 차는 $1,-1/2,1/4,-1/8,\dots$ 이다. 차의 제곱을 더하면 $4/3$ 이다. $x_1$ 을 지워도 대칭이라 같다.

좌표를 $s=(x_1+x_2)/\sqrt2$, $d=(x_1-x_2)/\sqrt2$ 로 바꾸면 같은 계가 다음과 같이 적힌다.

$$
s\_{k+1}=\tfrac12 d_k+\sqrt2\thinspace u_k,\qquad d\_{k+1}=\tfrac12 s_k,\qquad y_k=\sqrt2\thinspace s_k
$$

입력은 $s$ 에만 들어가고 출력은 $s$ 만 읽는다. $d$ 는 $s$ 를 거쳐 한 걸음 늦게, $1/2$ 이 두 번 곱해져 출력에 닿는다. $d$ 를 지우면 출력은 $2,0,0,0,\dots$ 이고 원래 출력과의 차는 $0,0,1/2,0,1/8,\dots$ 이다. 차의 제곱의 합은 $4/15$ 로, $x_2$ 를 지울 때의 $5$ 분의 $1$ 이다.

어느 상태를 지우는지보다 어느 좌표에서 지우는지가 오차를 정했다. 버릴 방향은 입력으로 채우기 어렵고 출력으로 읽기도 어려운 방향이어야 하고, 두 가지를 같은 좌표에서 함께 재는 것이 가제어성 Gram 행렬과 가관측성 Gram 행렬이다.

# 정의

## 이산시간 상태공간계

$A$ 는 $n\times n$, $B$ 는 $n\times p$, $C$ 는 $q\times n$ 실행렬이고 다음 계가 $A$ 의 스펙트럼 반지름(spectral radius) $\rho(A)\lt 1$ 을 만족한다고 하자.

$$
x\_{k+1}=Ax_k+Bu_k,\qquad y_k=Cx_k
$$

$x_0=0$ 에서 $k=0$ 에만 단위 입력을 넣은 출력 $h_k=CA^{k-1}B$ $(k\ge 1)$ 를 **임펄스 응답(impulse response)** 이라 하고, 그 [z 변환](z-transform.md) $G(z)=\sum_{k\ge 1}h_kz^{-k}=C(zI-A)^{-1}B$ 를 **전달함수(transfer function)** 라 한다. 직관 절의 계에서 $h_k$ 는 $2,0,1/2,0,\dots$ 이고 $G(z)=1/(z-1/2)+1/(z+1/2)$ 이다.

$G$ 의 **H∞ 노름(H-infinity norm)** 은 단위원 위에서 $G$ 의 가장 큰 특이값의 최댓값이다.

$$
\Vert G\Vert\_\infty=\max_{\theta\in\lbrack 0,2\pi\rbrack}\sigma\_{\max}\bigl(G(e^{i\theta})\bigr)
$$

이 값은 출력 에너지 $\sum\vert y_k\vert^2$ 와 입력 에너지 $\sum\vert u_k\vert^2$ 의 비의 제곱근의 상한이다.

## 두 Gram 행렬

다음 두 행렬을 각각 **가제어성 Gram 행렬(controllability Gramian)** 과 **가관측성 Gram 행렬(observability Gramian)** 이라 한다.

$$
P=\sum_{j\ge 0}A^jBB^{\mathsf T}(A^{\mathsf T})^j,\qquad Q=\sum_{j\ge 0}(A^{\mathsf T})^jC^{\mathsf T}CA^j
$$

[Stein 방정식](stein-equation.md)의 급수 해에 따라 $P$ 는 $P-APA^{\mathsf T}=BB^{\mathsf T}$, $Q$ 는 $Q-A^{\mathsf T}QA=C^{\mathsf T}C$ 의 해다. 직관 절의 계에서 $A$ 가 대각이므로 $P_{ij}=b_ib_j/(1-a_ia_j)$ 이고, $C^{\mathsf T}=B$ 라 두 행렬이 같다.

$$
P=Q=\begin{pmatrix}4/3&4/5\cr 4/5&4/3\end{pmatrix}
$$

## Hankel 특이값과 균형 실현

$PQ$ 의 고윳값의 제곱근 $\sigma_1\ge\cdots\ge\sigma_n\ge 0$ 을 **Hankel 특이값(Hankel singular values)** 이라 한다. 직관 절의 계에서는 $P=Q$ 의 고윳값 $4/3\pm 4/5$, 곧 $\sigma_1=32/15$, $\sigma_2=8/15$ 다.

가역행렬 $T$ 로 좌표를 $\tilde x=Tx$ 로 바꾸면 계는 $(TAT^{-1},TB,CT^{-1})$ 이 되고 두 Gram 행렬은 $TPT^{\mathsf T}$ 와 $T^{-\mathsf T}QT^{-1}$ 이 된다. 두 행렬이 같은 대각행렬 $\Sigma=\mathrm{diag}(\sigma_1,\dots,\sigma_n)$ 이 되는 좌표의 계를 **균형 실현(balanced realization)** 이라 한다. 직관 절의 좌표 $(s,d)$ 가 균형 실현이고, 그 좌표에서 $P=Q=\mathrm{diag}(32/15,8/15)$ 이다.

## 균형 절단

균형 실현을 앞의 $r$ 개 좌표와 뒤의 $n-r$ 개 좌표로 나누어 다음과 같이 쓴다.

$$
A=\begin{pmatrix}A_{11}&A_{12}\cr A_{21}&A_{22}\end{pmatrix},\qquad B=\begin{pmatrix}B_1\cr B_2\end{pmatrix},\qquad C=\begin{pmatrix}C_1&C_2\end{pmatrix}
$$

$r$ 차 계 $(A_{11},B_1,C_1)$ 을 균형 절단으로 얻은 계라 하고 그 전달함수를 $G_r$ 로 쓴다. 직관 절에서 $r=1$ 이면 $A_{11}=0$, $B_1=\sqrt2$, $C_1=\sqrt2$ 이고 $G_1(z)=2/z$ 다.

# 성질

## 좌표에 따르지 않는 Hankel 특이값

좌표를 $T$ 로 바꾸면 두 Gram 행렬의 곱이 $TPT^{\mathsf T}\cdot T^{-\mathsf T}QT^{-1}=T(PQ)T^{-1}$ 이 되어 $PQ$ 와 닮음이다. 그래서 Hankel 특이값은 좌표를 바꾸어도 같다.

## 균형 실현의 존재

$(A,B)$ 가 가제어이고 $(A,C)$ 가 가관측이면 $P$ 와 $Q$ 가 양의 정부호이고 균형 실현이 존재한다.

증명의 요지. [가제어성](controllability.md)의 Kalman 계수 조건으로 $P$ 가 양의 정부호이고, 쌍대성으로 $Q$ 도 그렇다. $P=LL^{\mathsf T}$ 로 Cholesky 분해(Cholesky decomposition)를 하고 대칭 양의 정부호 $L^{\mathsf T}QL$ 을 $U\Sigma^2U^{\mathsf T}$ 로 대각화한다. $T=\Sigma^{1/2}U^{\mathsf T}L^{-1}$ 로 두면 $TPT^{\mathsf T}=\Sigma$ 이고 다음이 성립한다.

$$
T^{-\mathsf T}QT^{-1}=\Sigma^{-1/2}U^{\mathsf T}L^{\mathsf T}QLU\Sigma^{-1/2}=\Sigma^{-1/2}\Sigma^2\Sigma^{-1/2}=\Sigma
$$

이 계산법을 제곱근 알고리즘(square root algorithm)이라 한다.

## 에너지로 본 Hankel 특이값

$P$ 가 양의 정부호이면, 먼 과거에 $0$ 이던 상태를 시각 $0$ 에 $x$ 로 옮기는 입력 가운데 에너지 $\sum_{k\lt 0}\vert u_k\vert^2$ 가 가장 작은 것의 에너지는 $x^{\mathsf T}P^{-1}x$ 다. 입력 없이 $x_0=x$ 에서 출발한 출력의 에너지 $\sum_{k\ge 0}\vert y_k\vert^2$ 는 $x^{\mathsf T}Qx$ 다. 균형 실현의 $i$ 번째 단위 좌표는 옮기는 데 에너지 $1/\sigma_i$ 가 들고 출력 에너지 $\sigma_i$ 를 낸다. 직관 절의 $d$ 방향은 $15/8$ 이 들고 $8/15$ 를 낸다.

증명의 요지. 출력 쪽은 $y_k=CA^kx$ 를 제곱해 더한 것이 $Q$ 의 정의다. 입력 쪽은 $x=\mathcal R u$ 꼴의 제약 아래 $\Vert u\Vert^2$ 를 최소화하는 문제이고, $\mathcal R=(B,AB,A^2B,\dots)$ 에서 $\mathcal R\mathcal R^{\mathsf T}=P$ 이므로 최소 노름 해 $u=\mathcal R^{\mathsf T}P^{-1}x$ 의 에너지가 $x^{\mathsf T}P^{-1}x$ 다.

## Hankel 행렬

$(i,j)$ 성분이 $h_{i+j-1}$ 인 무한 행렬 $H$ 를 계의 **Hankel 행렬(Hankel matrix)** 이라 한다. 직관 절의 계에서 첫 행은 $2,0,1/2,0,\dots$, 둘째 행은 $0,1/2,0,1/8,\dots$ 이다. $H$ 는 과거 입력을 미래 출력으로 보내는 행렬이다.

$C,CA,CA^2,\dots$ 를 위에서 아래로 쌓은 가관측성 행렬 $\mathcal O$ 로 $H=\mathcal O\mathcal R$ 이고 $\mathcal O^{\mathsf T}\mathcal O=Q$ 다. 그래서 $H^{\mathsf T}H=\mathcal R^{\mathsf T}Q\mathcal R$ 의 $0$ 아닌 고윳값은 $Q\mathcal R\mathcal R^{\mathsf T}=QP$ 의 고윳값과 같고, Hankel 특이값은 $H$ 의 [특이값](singular-value-decomposition.md)이다.

## 오차의 하한과 상한

$\sigma_r\gt\sigma_{r+1}$ 이면 균형 절단으로 얻은 계는 $\rho(A_{11})\lt 1$ 이고 다음을 만족한다[^1][^2].

$$
\sigma_{r+1}\le\Vert G-G_r\Vert\_\infty\le 2\sum_{i=r+1}^{n}\sigma_i
$$

오른쪽 합에서 같은 값의 Hankel 특이값은 한 번만 센다. 직관 절에서 $G-G_1=(1/2)/\bigl(z(z^2-1/4)\bigr)$ 이고, 단위원 위에서 $\vert z^2-1/4\vert$ 가 가장 작은 $z=\pm 1$ 에서 $\Vert G-G_1\Vert\_\infty=2/3$ 이다. 하한 $8/15$ 와 상한 $16/15$ 사이에 있다. $x_2$ 를 그냥 지운 계는 오차가 $1/(z+1/2)$ 라 H∞ 노름이 $2$ 다.

하한의 증명의 요지. 차수가 $r$ 인 어느 계든 Hankel 행렬의 계수가 $r$ 이하다. 특이값 분해의 Eckart–Young–Mirsky 정리(Eckart–Young–Mirsky theorem)에 따라 계수 $r$ 이하의 행렬과 $H$ 의 거리는 $\sigma_{r+1}$ 이상이다. $H$ 는 전체 입출력 사상의 일부를 떼어 낸 것이라 그 노름이 $\Vert G\Vert\_\infty$ 이하이고, 이것을 $G-G_r$ 에 쓰면 하한이 나온다[^3]. 그래서 차수 $r$ 인 어떤 계도 오차를 $\sigma_{r+1}$ 아래로 줄이지 못한다.

# 활용

- 모형 축소(model reduction). 유한요소나 회로망에서 나온 상태 수천 개의 계를 Hankel 특이값이 급히 줄어드는 자리에서 잘라 수십 개로 줄이고, 버린 특이값의 합의 두 배로 오차를 미리 보장한다. 줄인 계의 오차는 [유계 실수 보조정리](bounded-real-lemma.md)로 다시 확인한다.
- 제어기 차수 줄이기. [H∞ 제어](h-infinity-control.md)로 설계한 제어기와 관측기를 붙인 [선형 이차 조절기](linear-quadratic-regulator.md)는 제어 대상 모형과 같은 차수라, 설계한 제어기를 균형 절단으로 줄여 구현한다.
- 큰 계의 Gram 행렬. 상태 수가 크면 Stein 방정식이나 연속시간 Lyapunov 방정식을 저계수 인수 $P\approx ZZ^{\mathsf T}$ 로 풀고, 제곱근 알고리즘의 Cholesky 인수 자리에 $Z$ 를 쓴다.
- 신호 모형. 차수가 높은 [ARMA 모형](arma-models.md)(autoregressive moving average)의 상태공간 실현을 균형 절단해 낮은 차수의 근사 모형을 얻는다.

[^1]: L. Pernebo, L. M. Silverman, "Model reduction via balanced state space representations", *IEEE Transactions on Automatic Control* 27 (1982), 382–387.
[^2]: U. M. Al-Saggaf, G. F. Franklin, "An error bound for a discrete reduced order model of a linear multivariable system", *IEEE Transactions on Automatic Control* 32 (1987), 815–819.
[^3]: K. Glover, "All optimal Hankel-norm approximations of linear multivariable systems and their L∞-error bounds", *International Journal of Control* 39 (1984), 1115–1193.

# 연관 문서

## 선수지식

- [가제어성](controllability.md)
- [Stein 방정식](stein-equation.md)

## 더 알아보기

- [Nehari 정리](nehari-theorem.md)

#linear_algebra #signal_processing #optimization
