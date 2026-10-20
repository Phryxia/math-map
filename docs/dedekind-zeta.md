# Dedekind zeta 함수

# 개요

**Dedekind zeta 함수(Dedekind zeta function)** 는 수체 $K$ 의 정수환의 $0$ 아닌 아이디얼 $\mathfrak a$ 전체에 대한 급수 $\zeta_K(s)=\sum_{\mathfrak a}N(\mathfrak a)^{-s}$ 다. $K=\mathbb Q$ 이면 [Riemann zeta 함수](riemann-zeta.md)다.

$\zeta_K$ 는 소 아이디얼에 대한 Euler 곱을 갖고, 복소평면 전체로 유리형 연속되며 $s\mapsto1-s$ 의 함수방정식을 만족한다. $s=1$ 의 유일한 극에서의 유수가 류수, 조절자, 판별식으로 적히는 것이 해석적 류수 공식(analytic class number formula)이다.

# 직관

$\mathbb Z\lbrack i\rbrack$ 에서 노름이 $x$ 이하인 아이디얼의 개수를 센다. $\mathbb Z\lbrack i\rbrack$ 의 아이디얼은 모두 주 아이디얼 $(\alpha)$ 이고, $\alpha$ 는 단원 $\pm1,\pm i$ 네 개의 곱을 법으로 정해진다. $N(a+bi)=a^2+b^2$ 이므로 노름이 $x$ 이하인 $\alpha\ne0$ 는 반지름 $\sqrt x$ 인 원 안의 격자점이다.

원 안의 격자점은 대략 넓이 $\pi x$ 개이므로 아이디얼의 개수는 대략 $\pi x/4$ 다. 개수가 $\kappa x$ 꼴로 늘면 $\sum N(\mathfrak a)^{-s}$ 는 $s\to1$ 에서 $\kappa/(s-1)$ 처럼 커지므로, $(s-1)\zeta_{\mathbb Q(i)}(s)\to\pi/4$ 다.

$\pi/4$ 는 넓이 $\pi$ 를 단원의 개수 $4$ 로 나누고 격자 $\mathbb Z\lbrack i\rbrack$ 의 기본 영역의 넓이 $1$ 로 나눈 값이다. 류수가 $h$ 인 체에서는 아이디얼류 하나마다 같은 개수가 세어지므로 $h$ 배가 되고, 단원군이 무한인 체에서는 단원의 몫이 조절자로 들어간다.

# 정의

$K$ 를 차수 $n$ 의 수체, $\mathcal O_K$ 를 정수환, $N(\mathfrak a)=\char35{}(\mathcal O_K/\mathfrak a)$ 를 아이디얼의 노름이라 한다.

$$
\zeta_K(s)=\sum_{\mathfrak a\ne0}\frac{1}{N(\mathfrak a)^{s}}=\prod_{\mathfrak p}\frac{1}{1-N(\mathfrak p)^{-s}}\qquad(\mathrm{Re}\thinspace s\gt1)
$$

둘째 등식은 [대수적 수체](algebraic-number-fields.md)의 아이디얼 소인수분해가 유일한 것에서 나온다. $N(\mathfrak a)\le x$ 인 아이디얼이 $O(x)$ 개이므로 $\mathrm{Re}\thinspace s\gt1$ 에서 절대수렴한다.

$r_1$ 을 실수 매장의 수, $r_2$ 를 복소 매장의 쌍의 수, $d_K$ 를 판별식, $h_K$ 를 류수, $R_K$ 를 조절자, $w_K$ 를 $K$ 안의 $1$ 의 거듭제곱근의 개수라 한다.

# 성질

## 함수방정식

$\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$, $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$ 로 두고

$$
\Lambda_K(s)=\vert d_K\vert^{s/2}\thinspace\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}\thinspace\zeta_K(s)
$$

라 하면 $\Lambda_K$ 는 $s=0,1$ 에서만 단순극을 갖는 유리형 함수로 연속되고 $\Lambda_K(s)=\Lambda_K(1-s)$ 다.[^1] Hecke 의 증명은 아이디얼류마다 세타 함수를 만들고 [Poisson 합 공식](poisson-summation.md)을 쓴다. [Tate 의 zeta 적분](tate-zeta-integral.md)은 같은 결과를 아델 위의 적분으로 얻는다.

## 해석적 류수 공식

**정리.** $\zeta_K$ 는 $s=1$ 에서 단순극을 갖고

$$
\lim_{s\to1}(s-1)\zeta_K(s)=\frac{2^{r_1}(2\pi)^{r_2}h_KR_K}{w_K\sqrt{\vert d_K\vert}}
$$

이다.[^1]

*증명의 요지.* 아이디얼류 $C$ 하나를 고정하면 $C$ 의 아이디얼은 $C^{-1}$ 의 아이디얼 $\mathfrak b$ 하나와 $\mathfrak b$ 의 원소의 단원 궤도로 대응한다. 그 원소들을 $\mathbb R^{r_1}\times\mathbb C^{r_2}$ 의 격자점으로 보고 단원군의 작용에 대한 기본 영역 안에서 노름이 $x$ 이하인 것을 세면, 개수가 그 영역의 부피를 격자의 기본 영역의 부피로 나눈 값에 $x$ 를 곱한 것에 가깝고, 격자의 부피에서 $\sqrt{\vert d_K\vert}$ 가 나온다. 단원군의 기본 영역의 부피가 $R_K$ 와 $w_K$ 로 계산되고, $h_K$ 개의 류를 더하면 공식이 나온다.

같은 함수의 $s=0$ 에서의 값은 영점의 위수가 $r_1+r_2-1$ 이고 최고차 계수가 $-h_KR_K/w_K$ 다.

## 아벨 체의 분해

$K/\mathbb Q$ 가 아벨 확대이면 [원분체](cyclotomic-fields.md) $\mathbb Q(\zeta_m)$ 에 포함되고, $\mathrm{Gal}(K/\mathbb Q)$ 의 지표를 원시 Dirichlet 지표 $\chi$ 로 보면

$$
\zeta_K(s)=\prod_{\chi}L(s,\chi)
$$

다. 이차체 $K$ 에서는 $\zeta_K(s)=\zeta(s)L(s,\chi_{d_K})$ 이고, 류수 공식이 [Dirichlet L 함수](dirichlet-l-functions.md)의 $L(1,\chi\_{d_K})$ 를 류수로 준다. 허이차체에서 $L(1,\chi_d)=2\pi h/(w\sqrt{\vert d\vert})$ 이고, 직관 절의 $\mathbb Q(i)$ 에서는 $L(1,\chi\_{-4})=1-\frac13+\frac15-\cdots=\pi/4$ 다.

## Brauer–Siegel 정리

**Brauer–Siegel 정리(Brauer–Siegel theorem).** $\mathbb Q$ 위의 Galois 수체의 열에서 $n/\log\vert d_K\vert\to0$ 이면

$$
\log(h_KR_K)\sim\log\sqrt{\vert d_K\vert}
$$

이다.[^2] 허이차체에서는 $R_K=1$ 이므로 $h_K=\vert d_K\vert^{1/2+o(1)}$ 이 되고, 이 하한이 유효하지 않다는 것이 [류수 1 문제](class-number-one.md)를 어렵게 만든 원인이다.

# 활용

- [대수적 수체](algebraic-number-fields.md): 류수 공식으로 류수를 $\zeta_K$ 의 유수나 $L$ 값으로 계산한다.
- [Dirichlet 단수 정리](dirichlet-unit-theorem.md): 조절자가 류수 공식의 유수에 들어가므로 단원군의 크기와 류군의 크기가 하나의 해석적 양으로 묶인다.
- [Chebotarev 밀도 정리](chebotarev.md): 확대체와 중간체의 Dedekind zeta 함수의 비가 [Artin L 함수](artin-l-functions.md)의 곱이고, 그 $s=1$ 근방의 거동으로 Frobenius 의 밀도를 구한다.
- [류수 1 문제](class-number-one.md): 허이차체의 류수 공식 $h=w\sqrt{\vert d\vert}\thinspace L(1,\chi_d)/(2\pi)$ 가 문제를 $L(1,\chi_d)$ 의 하한 문제로 바꾼다.

[^1]: J. Neukirch, *Algebraic Number Theory*, Grundlehren 322, Springer, 1999, 7장 5절.
[^2]: S. Lang, *Algebraic Number Theory*, 2nd ed., Graduate Texts in Mathematics 110, Springer, 1994, 16장.

# 연관 문서

## 선수지식

- [대수적 수체](algebraic-number-fields.md)
- [Riemann zeta 함수](riemann-zeta.md)

## 더 알아보기

- [Artin L 함수](artin-l-functions.md)

#number_theory #complex_analysis #algebra
