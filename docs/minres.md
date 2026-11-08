# MINRES

# 개요

**MINRES(minimal residual method)** 는 대칭 [행렬](matrices.md)의 연립방정식 $Ax=b$ 에서, 행렬-벡터 곱으로 얻은 벡터들의 일차결합 가운데 잔차의 길이가 가장 작은 것을 짧은 점화식으로 계산하는 반복법이다. 제약 조건이 있는 최적화나 압력과 속도를 함께 푸는 유체 문제의 계수행렬은 대칭이지만 음의 고윳값과 양의 고윳값을 함께 가져, [공액기울기법](conjugate-gradient.md)이 $0$ 으로 나누거나 잔차를 키운다. MINRES 는 [GMRES](gmres.md)와 같은 최소화를 하면서 대칭성 덕분에 벡터 몇 개만 저장하고 걸음마다 일정한 계산만 쓴다.

# 직관

$A=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$, $b=(1,0)$ 이다. 고윳값은 $1$ 과 $-1$ 이다. 공액기울기법은 첫 걸음의 보폭을 $r_0^{\mathsf T}r_0/r_0^{\mathsf T}Ar_0$ 로 정하는데, $Ar_0=(0,1)$ 이 $r_0=(1,0)$ 과 직교해 분모가 $0$ 이다. 첫 걸음에서 계산이 멈춘다.

보폭을 분모로 정하지 않고 잔차의 길이를 직접 최소화한다. $x_1=\alpha b$ 이면 잔차 $b-\alpha Ab=(1,-\alpha)$ 의 길이는 $\alpha=0$ 에서 가장 작아 $x_1=0$ 이다. 둘째 걸음은 $b$ 와 $Ab$ 가 펼치는 평면 전체에서 고르므로 정확한 해 $x=(0,1)$ 에 닿는다. 잔차의 길이는 $1$, $1$, $0$ 으로 늘지 않는다.

GMRES 도 같은 계산을 하지만 걸음마다 앞의 기저 전체에 직교화하고 기저를 모두 저장한다. 대칭 행렬에서는 [Lanczos 반복](lanczos-iteration.md)의 세 항 점화식이 같은 기저를 만들므로, 직교화는 바로 앞 두 벡터에만 걸린다.

# 정의

$x_0$ 을 초기 추측, $r_0=b-Ax_0$, $\beta=\Vert r_0\Vert$ 라 하자. $A$ 가 대칭이면 Lanczos 반복은 $AQ_m=Q_{m+1}\tilde T_m$ 을 준다. 여기서 $\tilde T_m$ 은 위 $m\times m$ 부분이 대칭 삼중대각이고 마지막 행이 $(0,\dots,0,\beta_{m+1})$ 인 $(m+1)\times m$ 행렬이다. MINRES 의 $m$ 번째 근사해는 다음이다[^1].

$$
x_m=x_0+Q_my_m,\qquad y_m=\mathop{\mathrm{argmin}}\_{y\in\mathbb R^m}\Vert\beta e_1-\tilde T_my\Vert
$$

곧 $x_m$ 은 $x_0+\mathcal K_m(A,r_0)$ 에서 $\Vert b-Ax\Vert$ 를 최소화한다. 직관 절은 $x_0=0$, $q_1=(1,0)$, $Aq_1=(0,1)$ 에서 $\alpha_1=0$, $\beta_2=1$, $q_2=(0,1)$ 이고 $\tilde T_1=(0,1)^{\mathsf T}$ 다. $\Vert e_1-\tilde T_1y\Vert^2=1+y^2$ 이 $y=0$ 에서 최소다.

$\tilde T_m$ 의 QR 분해는 [Givens 회전](givens-rotation.md)을 걸음마다 하나씩 더해 갱신하고, $R$ 이 대각과 그 위 두 줄에만 성분을 가지므로 $x_m$ 을 탐색 방향 세 개의 점화식으로 갱신한다. 그래서 $Q_m$ 전체를 저장하지 않는다.

# 성질

## 잔차의 단조 감소와 다항식 꼴

GMRES 와 같이 $\Vert r_m\Vert=\min_{p\in\mathcal P_m}\Vert p(A)r_0\Vert$ 이고 $\Vert r_m\Vert$ 는 단조 감소한다. $\mathcal P_m$ 은 차수 $m$ 이하, $p(0)=1$ 인 다항식의 집합이다. $A$ 가 대칭이라 직교 고유기저가 있으므로 다음이 성립한다.

$$
\frac{\Vert r_m\Vert}{\Vert r_0\Vert}\le\min_{p\in\mathcal P_m}\max_{\lambda\in\sigma(A)}\vert p(\lambda)\vert
$$

## 부정부호 행렬의 수렴률

고윳값이 $\lbrack -d,-c\rbrack\cup\lbrack c,d\rbrack$ ($0\lt c\lt d$) 에 있으면 다음이 성립한다[^2].

$$
\frac{\Vert r_m\Vert}{\Vert r_0\Vert}\le 2\Bigl(\frac{d-c}{d+c}\Bigr)^{\lfloor m/2\rfloor}
$$

$z^2$ 의 다항식을 쓰면 두 구간이 $\lbrack c^2,d^2\rbrack$ 하나로 접히고, 조건수 $d^2/c^2$ 인 양정부호 행렬의 Chebyshev 상한을 $\lfloor m/2\rfloor$ 차에서 쓴 것이다.

## 전처리의 조건

MINRES 의 점화식은 $A$ 의 대칭성에 기대므로 전처리 행렬 $M$ 도 대칭 양정부호여야 한다. $M=LL^{\mathsf T}$ 로 $L^{-1}AL^{-\mathsf T}$ 에 MINRES 를 쓰는 것과 같고, 이때 최소화하는 것은 $M^{-1}$ 노름의 잔차 $\Vert r\Vert\_{M^{-1}}$ 이다.

## SYMMLQ 와 특이 행렬

같은 Lanczos 기저에서 Galerkin 조건 $r_m\perp\mathcal K_m$ 을 LQ 분해로 안정하게 푸는 방법이 SYMMLQ(symmetric LQ method)이고, 직관 절처럼 공액기울기법이 멈추는 자리를 넘어간다[^1]. $A$ 가 특이이고 $b$ 가 상공간에 없으면 MINRES 는 최소제곱해 가운데 하나에 가지만 노름이 최소인 해라는 보장이 없고, MINRES-QLP 가 최소노름해를 준다[^3].

# 활용

- 안장점 계. 등식 제약 이차계획의 Karush–Kuhn–Tucker 계와 [혼합 유한요소법](mixed-finite-element-method.md)의 이산화는 $\begin{pmatrix}A&B^{\mathsf T}\cr B&0\end{pmatrix}$ 꼴의 대칭 부정부호 행렬이고, 블록 대각 양정부호 전처리와 MINRES 로 푼다[^4]. 고윳값이 원점 양쪽의 두 구간에 모이므로 위의 수렴률이 쓰인다.
- 이동된 고윳값 문제. $A-\mu I$ 는 $\mu$ 가 고윳값 사이에 있으면 부정부호이고, 역반복과 [Rayleigh 몫](rayleigh-quotient.md) 반복의 걸음마다 이 계를 MINRES 로 근사해 푼다.
- 대칭 Hessian 의 Newton 걸음. 볼록이 아닌 함수의 [Hessian 행렬](hessian.md)은 부정부호일 수 있어, Newton 계를 Hessian-벡터 곱만으로 푸는 데 MINRES 를 쓴다.

[^1]: C. C. Paige and M. A. Saunders, "Solution of sparse indefinite systems of linear equations", *SIAM Journal on Numerical Analysis* 12 (1975), 617–629.
[^2]: A. Greenbaum, *Iterative Methods for Solving Linear Systems*, SIAM (1997), 3 장.
[^3]: S.-C. T. Choi, C. C. Paige, M. A. Saunders, "MINRES-QLP: A Krylov subspace method for indefinite or singular symmetric systems", *SIAM Journal on Scientific Computing* 33 (2011), 1810–1836.
[^4]: H. C. Elman, D. J. Silvester, A. J. Wathen, *Finite Elements and Fast Iterative Solvers*, 2nd ed., Oxford University Press (2014), 4 장.

# 연관 문서

## 선수지식

- [GMRES](gmres.md)
- [Lanczos 반복](lanczos-iteration.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation #optimization
