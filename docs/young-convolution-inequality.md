# Young 의 합성곱 부등식

# 개요

**Young 의 합성곱 부등식(Young's convolution inequality)** 은 두 함수의 [합성곱](convolution.md)이 얼마나 커질 수 있는지를 두 함수의 크기로 위에서 누르는 부등식이다. 측정값 $f$ 를 길이 $1$ 인 구간에서 평균 내어 매끄럽게 만들 때, $f$ 의 제곱 적분을 알면 평균 낸 결과의 제곱 적분이나 최댓값이 어디까지 커지는지 묻게 된다. 이 부등식은 세 지수가 한 등식을 만족하면 결과의 크기가 두 함수의 크기의 곱을 넘지 않는다고 답한다.

# 직관

길이 $\lambda$ 인 구간의 지시함수 $f=g=\mathbf 1\_{\lbrack 0,\lambda\rbrack}$ 의 합성곱을 구한다. 합성곱 문서의 직관 절과 같은 계산으로 $f\ast g$ 는 $\lbrack 0,2\lambda\rbrack$ 위에 놓이고 $x=\lambda$ 에서 높이 $\lambda$ 인 삼각형 함수다.

세 함수의 크기를 [Lᵖ 공간](lp-spaces.md)의 노름으로 잰다. $\Vert f\Vert\_p=\lambda^{1/p}$, $\Vert g\Vert\_q=\lambda^{1/q}$ 이다. 삼각형의 $r$ 제곱을 적분하면 $\lambda^r\cdot\lambda\cdot 2/(r+1)$ 이므로 다음이 나온다.

$$
\frac{\Vert f\ast g\Vert\_r}{\Vert f\Vert\_p\Vert g\Vert\_q}=\lambda^{1+\frac1r-\frac1p-\frac1q}\left(\frac{2}{r+1}\right)^{1/r}
$$

$\lambda$ 의 지수가 양수이면 $\lambda\to\infty$ 에서 이 비가 한없이 커지고, 음수이면 $\lambda\to 0$ 에서 한없이 커진다. 비가 모든 $\lambda$ 에서 유계이려면 지수가 $0$ 이어야 하고, 그때 비는 $(2/(r+1))^{1/r}\le 1$ 이다. 구간의 길이를 바꾸는 계산이 세 지수 사이의 등식을 정하고, 그 등식 아래에서 비가 $1$ 을 넘지 않는다는 것이 이 부등식의 내용이다.

# 정의

$1\le p,q,r\le\infty$ 인 세 수가

$$
1+\frac1r=\frac1p+\frac1q
$$

를 만족하면 $(p,q,r)$ 을 **Young 지수(Young exponents)** 라 부른다. $1/\infty=0$ 으로 센다. 직관 절의 계산에서 $\lambda$ 의 지수가 $0$ 인 조건이 이 등식이다.

- $(1,1,1)$ 은 Young 지수다.
- $(p,1,p)$ 는 모든 $p$ 에서 Young 지수다. 측정값 $f\in L^p$ 를 적분이 $1$ 인 평균 함수와 합성곱하는 경우다.
- $p$ 와 $q$ 가 [Hölder 부등식](holder-inequality.md)의 켤레 지수이면 $(p,q,\infty)$ 는 Young 지수다.
- $(4/3,4/3,2)$ 는 $3/4+3/4=1+1/2$ 이므로 Young 지수다.

등식에서 $1/p+1/q\ge 1$ 이고 $r\ge\max(p,q)$ 가 따라 나온다. 직관 절의 계산에 따라 $\mathbb R^n$ 에서는 이 등식을 만족하지 않는 지수로 같은 꼴의 부등식이 성립하지 않는다.

# 성질

## 부등식의 진술

$(p,q,r)$ 이 Young 지수이고 $f\in L^p(\mathbb R^n)$, $g\in L^q(\mathbb R^n)$ 이면 $f\ast g$ 가 거의 모든 점에서 정의되고 다음이 성립한다.

$$
\Vert f\ast g\Vert\_r\le\Vert f\Vert\_p\thinspace\Vert g\Vert\_q
$$

같은 부등식이 $\mathbb Z^n$ 위의 수열의 합성곱에서도 성립하고, 증명도 같다. $\mathbb Z^n$ 에서는 $f=g=\delta_0$ 가 등호를 주므로 상수 $1$ 을 줄일 수 없다.

## 증명의 요지

$r=\infty$ 이면 $p,q$ 가 켤레 지수이고, $(f\ast g)(x)=\int f(x-y)g(y)\thinspace dy$ 에 Hölder 부등식을 바로 쓴다. 평행이동은 $L^p$ 노름을 바꾸지 않으므로 $\vert f\ast g(x)\vert\le\Vert f\Vert\_p\Vert g\Vert\_q$ 다.

$r\lt\infty$ 이면 피적분함수를 세 인수로 쪼갠다.

$$
\vert f(x-y)g(y)\vert=\bigl(\vert f(x-y)\vert^p\vert g(y)\vert^q\bigr)^{1/r}\cdot\vert f(x-y)\vert^{1-p/r}\cdot\vert g(y)\vert^{1-q/r}
$$

세 인수에 지수 $r$, $pr/(r-p)$, $qr/(r-q)$ 의 Hölder 부등식을 쓴다. 역수의 합은 $1/r+(1/p-1/r)+(1/q-1/r)$ 이고 Young 지수의 등식으로 $1$ 이다. 그 결과는 다음과 같다.

$$
\vert f\ast g(x)\vert^r\le\int\vert f(x-y)\vert^p\vert g(y)\vert^q\thinspace dy\cdot\Vert f\Vert\_p^{r-p}\Vert g\Vert\_q^{r-q}
$$

$x$ 에 대해 적분하고 [Fubini–Tonelli 정리](fubini-tonelli.md)로 순서를 바꾸면 첫 인수의 적분이 $\Vert f\Vert\_p^p\Vert g\Vert\_q^q$ 가 된다. $r$ 제곱근을 취하면 부등식이 나온다.

## 끝점의 두 경우

$q=1$ 이면 $\Vert f\ast g\Vert\_p\le\Vert f\Vert\_p\Vert g\Vert\_1$ 이다. 합성곱 $f\ast g$ 는 평행이동한 $f$ 들을 $g$ 로 가중평균한 것이고, [Minkowski 적분 부등식](minkowski-integral-inequality.md)으로도 증명된다.

$r=\infty$ 이고 $1\lt p\lt\infty$ 이면 $f\ast g$ 는 균등연속이고 무한대에서 $0$ 으로 간다. 평행이동의 $L^p$ 연속성 $\Vert\tau_hf-f\Vert\_p\to 0$ 에 위의 Hölder 부등식을 쓰면 균등연속이 나오고, $f,g$ 를 콤팩트 받침 함수로 근사하면 무한대에서의 감소가 나온다.

## 최적 상수

$\mathbb R^n$ 에서 $1\lt p,q,r\lt\infty$ 이면 상수 $1$ 은 최적이 아니다. $r'$ 을 $r$ 의 켤레 지수로 두고 $A_m=\bigl(m^{1/m}/m'^{1/m'}\bigr)^{1/2}$ 이라 하면 최적 상수는 다음과 같다.

$$
\Vert f\ast g\Vert\_r\le\bigl(A_pA_qA_{r'}\bigr)^n\Vert f\Vert\_p\thinspace\Vert g\Vert\_q
$$

W. Beckner 가 1975 년에 증명했고[^1], H. J. Brascamp 와 E. H. Lieb 가 다른 방법으로 증명하며 등호가 Gauss 함수에서만 나온다는 것을 보였다[^2]. 직관 절의 비 $(2/(r+1))^{1/r}$ 도 $1$ 보다 작았다.

## 약한 꼴

$1\lt p,q,r\lt\infty$ 이면 $g$ 가 $L^q$ 에 들지 않고 $\lbrace\vert g\vert\gt t\rbrace$ 의 측도가 $t^{-q}$ 의 상수배 이하이기만 해도 같은 꼴의 부등식이 상수 $C$ 를 붙여 성립한다[^3]. $g(x)=\vert x\vert^{-n/q}$ 가 이 조건을 만족하고, 이 경우가 Hardy–Littlewood–Sobolev 부등식(Hardy–Littlewood–Sobolev inequality)이다. 증명은 [Marcinkiewicz 보간 정리](marcinkiewicz-interpolation.md)를 쓴다.

# 활용

- [Banach 대수](banach-algebras.md). Young 지수 $(1,1,1)$ 의 부등식 $\Vert f\ast g\Vert\_1\le\Vert f\Vert\_1\Vert g\Vert\_1$ 에 따라 $L^1(\mathbb R^n)$ 은 합성곱을 곱으로 하는 Banach 대수다.
- 근사 항등원. 합성곱 문서의 근사 항등원 절에서 $\Vert f\ast\varphi_\varepsilon\Vert\_p\le\Vert f\Vert\_p$ 를 쓴다. Young 지수 $(p,1,p)$ 의 경우다.
- [열방정식](heat-equation.md)의 감쇠. 해는 초기값 $u_0$ 와 열핵 $\Phi_t$ 의 합성곱이다. 지수 $(p,p',\infty)$ 의 부등식과 $\Vert\Phi_t\Vert\_{p'}=Ct^{-n/(2p)}$ 에서 $\Vert u(t)\Vert\_\infty\le Ct^{-n/(2p)}\Vert u_0\Vert\_p$ 가 나온다.
- [Riesz–Thorin 정리](riesz-thorin.md). $g$ 를 고정한 작용소 $f\mapsto f\ast g$ 는 $L^1\to L^q$ 와 $L^{q'}\to L^\infty$ 에서 노름 $\Vert g\Vert\_q$ 이하이고, 그 사이 지수를 보간하면 일반 지수의 부등식이 다시 나온다.
- [Brascamp–Lieb 부등식](brascamp-lieb-inequality.md). 쌍대 꼴 $\int\int f(x)g(x-y)h(y)\thinspace dx\thinspace dy$ 는 선형사상 셋을 쓴 Brascamp–Lieb 부등식의 특수한 경우이고, 최적 상수 절의 Gauss 함수 등호가 거기서 나온다.

[^1]: W. Beckner, "Inequalities in Fourier analysis", Annals of Mathematics 102 (1975), 159–182.
[^2]: H. J. Brascamp, E. H. Lieb, "Best constants in Young's inequality, its converse, and its generalization to more than three functions", Advances in Mathematics 20 (1976), 151–173.
[^3]: E. H. Lieb, M. Loss, Analysis, 2nd ed., American Mathematical Society (2001), Theorem 4.3.

# 연관 문서

## 선수지식

- [합성곱](convolution.md)
- [Hölder 부등식](holder-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #measure_theory
