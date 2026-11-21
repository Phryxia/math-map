# 행렬 함수의 Krylov 근사

# 개요

**행렬 함수의 Krylov 근사(Krylov approximation of matrix functions)** 는 큰 행렬 $A$ 와 벡터 $b$ 에 대해 $e^Ab$ 같은 값을, $A$ 를 작은 행렬 하나로 줄여 그 작은 행렬의 함수로 계산하는 방법이다. 막대 위 세 점의 온도가 $u'=Au$ 를 따를 때, 첫 점에만 열을 준 뒤 한 시간 뒤의 온도는 $e^Ab$ 다. 격자점이 백만 개이면 $e^A$ 는 성분이 $10^{12}$ 개인 꽉 찬 행렬이라 만들 수 없다. Krylov 근사는 $b,Ab,\dots,A^{m-1}b$ 가 펼치는 공간에서 $A$ 를 $m\times m$ 행렬 $H_m$ 으로 줄이고, $e^{H_m}$ 만 계산해 $e^Ab$ 를 어림한다.

# 직관

길이가 같은 세 칸의 막대에서 이웃 칸과 온도 차이만큼 열을 주고받고, 양 끝은 온도 $0$ 인 벽에 닿아 있다. 온도 $u=(u_1,u_2,u_3)$ 는 $u'=Au$ 를 따르고, $b=(1,0,0)$ 이다.

$$
A=\begin{pmatrix}-2&1&0\cr 1&-2&1\cr 0&1&-2\end{pmatrix}
$$

시각 $1$ 의 온도는 [행렬 지수](matrix-exponential.md)로 $e^Ab\approx(0.2151,\thinspace 0.1852,\thinspace 0.0797)$ 이다. $A$ 와 벡터의 곱만 쓸 수 있다고 하자. 지수의 Taylor 전개를 일차에서 자르면 $b+Ab=(-1,1,0)$ 이고, 이차까지 가면 $(1.5,-1,0.5)$ 라 온도가 음수가 된다. $A$ 의 고윳값이 $-3.41$ 까지 내려가 전개의 앞 몇 항이 답과 멀다.

같은 두 벡터 $b$, $Ab$ 를 쓰되 일차결합을 다르게 고른다. [Krylov 부분공간 방법](krylov-subspace-methods.md)의 [Lanczos 반복](lanczos-iteration.md)으로 $b$, $Ab$ 에서 정규직교기저를 만들면 $q_1=(1,0,0)$, $q_2=(0,1,0)$ 이다. 이 기저에서 $A$ 를 잰 $2\times 2$ 행렬은 다음이다.

$$
H_2=Q_2^{\mathsf T}AQ_2=\begin{pmatrix}-2&1\cr 1&-2\end{pmatrix}
$$

$e^{H_2}$ 의 첫 열은 $e^{-2}(\cosh 1,\sinh 1)=(0.2088,0.1590)$ 이고, 이것을 기저로 되돌리면 $(0.2088,\thinspace 0.1590,\thinspace 0)$ 이다. 참값과의 거리는 $0.084$ 이고, Taylor 일차의 거리 $1.47$ 보다 훨씬 작다. 셋째 벡터 $A^2b$ 까지 쓰면 $H_3=A$ 라 참값이 그대로 나온다.

# 정의

$A$ 는 $n\times n$ 행렬, $b\ne 0$ 이고, $f$ 는 $A$ 의 고윳값 근처에서 정의된 함수다. $b$ 에서 시작한 Arnoldi 반복 $m$ 걸음으로 $\mathcal K_m(A,b)$ 의 정규직교기저 $Q_m$ 과 $H_m=Q_m^{\mathsf T}AQ_m$ 을 얻는다. $e_1$ 을 $\mathbb R^m$ 의 첫 표준기저 벡터라 할 때 다음을 $f(A)b$ 의 $m$ 차 **Krylov 근사** 라 한다.[^1]

$$
f(A)b\approx\Vert b\Vert\thinspace Q_mf(H_m)e_1
$$

$A$ 가 대칭이면 Arnoldi 반복이 Lanczos 반복이 되고 $H_m$ 이 삼중대각이다. 직관 절은 $f(x)=e^x$, $\Vert b\Vert=1$, $m=2$ 인 경우다.

# 성질

## 다항식에서의 정확성

$f$ 가 차수 $m-1$ 이하의 다항식이면 Krylov 근사는 $f(A)b$ 와 같다.[^1] $k\le m-1$ 이면 $A^kb$ 가 $\mathcal K_m(A,b)$ 안에 있고, 귀납법으로 $A^kb=\Vert b\Vert\thinspace Q_mH_m^ke_1$ 이 성립한다. $A^mb$ 부터는 $\mathcal K_m$ 밖의 성분이 생겨 같지 않다.

## 보간 다항식

$H_m$ 의 고윳값을 Ritz 값(Ritz value)이라 한다. Krylov 근사는 $f$ 를 Ritz 값들에서 보간하는 차수 $m-1$ 이하의 다항식 $p$ 에 대한 $p(A)b$ 와 같다.[^1] 같은 Ritz 값이 겹치면 도함수까지 맞추는 보간으로 바꾼다.

직관 절의 $H_2$ 의 Ritz 값은 $-1$ 과 $-3$ 이다. $e^x$ 를 이 두 점에서 보간하는 일차식은 다음이다.

$$
p(x)=e^{-1}+\frac{e^{-1}-e^{-3}}{2}(x+1)
$$

$(e^{-1}-e^{-3})/2\approx 0.1590$ 이고 $(A+I)b=(-1,1,0)$ 이므로 다음이 나온다. 이것은 직관 절의 근사와 같다.

$$
p(A)b=e^{-1}b+0.1590\thinspace(A+I)b=(0.2088,\thinspace 0.1590,\thinspace 0)
$$

Taylor 전개는 $e^x$ 를 $0$ 에서만 맞추고, Krylov 근사는 $A$ 의 고윳값이 있는 자리에서 맞춘다.

## 유한 종료

$\mathcal K_m(A,b)$ 의 차원이 더 늘지 않는 첫 $m$ 에서 $\mathcal K_m$ 은 $A$ 에 대해 불변이고, Krylov 근사가 $f(A)b$ 와 같다. 직관 절에서는 $m=3$ 이다. $m$ 은 $b$ 에 대한 $A$ 의 최소다항식의 차수이고 $n$ 이하다.

## 지수 함수의 오차

$A$ 가 대칭이고 고윳값이 $\lbrack -4\rho,0\rbrack$ 에 있으면 $f(x)=e^x$, $\Vert b\Vert=1$ 에서 다음이 성립한다.[^2]

$$
\bigl\Vert e^Ab-Q_me^{H_m}e_1\bigr\Vert\le 10\thinspace e^{-m^2/(5\rho)},\qquad\sqrt{4\rho}\le m\le 2\rho
$$

오차는 $m$ 이 $\sqrt{\Vert A\Vert}$ 정도를 넘으면 $m^2$ 의 지수로 준다. Taylor 전개가 $m\gtrsim\Vert A\Vert$ 에서야 줄기 시작하는 것과 비교하면, 필요한 행렬-벡터 곱의 수가 $\Vert A\Vert$ 에서 $\sqrt{\Vert A\Vert}$ 로 준다.

## 사후 오차 추정

Arnoldi 반복은 다음 기저 벡터의 길이 $h_{m+1,m}$ 을 준다. $h_{m+1,m}\thinspace\vert e_m^{\mathsf T}e^{H_m}e_1\vert$ 를 오차의 추정으로 쓰고, 이 값이 허용 오차보다 크면 $m$ 을 늘리거나 시간 걸음을 줄인다.[^1][^3]

# 활용

- [지수 적분기](exponential-integrators.md). 걸음마다 $e^{hL}v$ 와 $\varphi_k(hL)v$ 를 Krylov 근사로 계산한다.[^3]
- 시간에 따른 [Schrödinger 방정식](schrodinger-equation.md). Hermite 행렬 $H$ 에 대해 $e^{-iHt}\psi$ 를 짧은 시간 걸음마다 Lanczos 반복으로 계산한다.
- [연속시간 Markov 연쇄](continuous-time-markov-chains.md). 생성 행렬 $Q$ 에서 시각 $t$ 의 분포 $p_0^{\mathsf T}e^{tQ}$ 를 $e^{tQ^{\mathsf T}}p_0$ 의 Krylov 근사로 얻는다.[^3]
- Gauss 표본. 공분산 $C$ 의 표본 $C^{1/2}z$ 를 [행렬 제곱근](matrix-square-root.md)을 만들지 않고 $f(x)=\sqrt x$ 의 Krylov 근사로 계산한다.[^4]

[^1]: Y. Saad, "Analysis of some Krylov subspace approximations to the matrix exponential operator", *SIAM Journal on Numerical Analysis* 29 (1992), 209–228.

[^2]: M. Hochbruck, C. Lubich, "On Krylov subspace approximations to the matrix exponential operator", *SIAM Journal on Numerical Analysis* 34 (1997), 1911–1925.

[^3]: R. B. Sidje, "Expokit: a software package for computing matrix exponentials", *ACM Transactions on Mathematical Software* 24 (1998), 130–156.

[^4]: N. J. Higham, *Functions of Matrices: Theory and Computation*, SIAM (2008), 13 장.

# 연관 문서

## 선수지식

- [Krylov 부분공간 방법](krylov-subspace-methods.md)
- [행렬 지수](matrix-exponential.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #analysis #algorithms
