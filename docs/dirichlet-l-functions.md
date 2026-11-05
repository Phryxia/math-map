# Dirichlet L 함수

# 개요

**Dirichlet L 함수(Dirichlet L-function)** 는 Dirichlet 지표 $\chi$ 를 계수로 단 급수 $L(s,\chi)=\sum\_{n\ge 1}\chi(n)n^{-s}$ 다. $5, 13, 17, 29,\dots$ 처럼 $4$ 로 나눈 나머지가 $1$ 인 소수와 $3, 7, 11, 19,\dots$ 처럼 나머지가 $3$ 인 소수가 각각 무한히 많은지 물으면, 소수 전체를 똑같이 다루는 zeta 함수로는 두 부류가 구별되지 않는다. Dirichlet L 함수는 나머지에 따라 부호를 바꾼 계수를 붙여 한 부류만 골라내고, $s=1$ 근처의 값으로 각 부류에 소수가 무한히 많음을 증명한다.

# 직관

$4$ 로 나눈 나머지가 $1$ 인 소수가 무한히 많은지 묻는다. Euler 는 [소수 정리](prime-number-theorem.md)보다 앞서 $\zeta(s)=\prod_p(1-p^{-s})^{-1}$ 에서 $\log\zeta(s)=\sum_p p^{-s}+O(1)$ 을 얻고, $s\to1^+$ 에서 좌변이 발산하므로 $\sum_p 1/p$ 가 발산함을 보였다. 같은 계산을 $p\equiv1\pmod4$ 인 소수만으로 하려면 그 소수에서 $1$, 나머지 소수에서 $0$ 인 계수를 붙여야 한다.

홀수 $n$ 에서 $n\equiv1$ 이면 $1$, $n\equiv3$ 이면 $-1$, 짝수에서 $0$ 인 함수를 $\chi_{-4}$ 라 하자. $\chi_{-4}(mn)=\chi_{-4}(m)\chi_{-4}(n)$ 이고, 홀수 소수 $p$ 에서 $(1+\chi_{-4}(p))/2$ 는 $p\equiv1$ 이면 $1$, $p\equiv3$ 이면 $0$ 이다. 곱셈적이므로 $\zeta$ 와 같은 곱 공식이 $\sum_n\chi_{-4}(n)n^{-s}=1-3^{-s}+5^{-s}-7^{-s}+\cdots$ 에도 성립하고, 두 로그를 더해 반으로 나누면

$$
\sum_{p\equiv1\thinspace(4)}\frac1{p^s}=\frac12\Bigl(\log\zeta(s)+\log\sum_{n}\frac{\chi_{-4}(n)}{n^s}\Bigr)+O(1)
$$

이다. $s\to1^+$ 에서 둘째 급수는 $1-\frac13+\frac15-\cdots=\pi/4$ 로 가므로 그 로그는 유계이고, 첫째 로그가 발산한다. 그래서 $p\equiv1\pmod4$ 인 소수는 무한히 많다. 둘째 급수의 $s=1$ 값이 $0$ 이었다면 그 로그가 $-\infty$ 로 가서 첫째 로그의 발산과 상쇄될 수 있었으므로, $s=1$ 에서의 값이 $0$ 이 아니라는 것이 증명의 요점이다.

# 정의

## Dirichlet 지표

법 $q$ 의 **Dirichlet 지표(Dirichlet character)** 는 다음을 만족하는 함수 $\chi:\mathbb Z\to\mathbb C$ 다.

- $\chi(n+q)=\chi(n)$
- $\chi(mn)=\chi(m)\chi(n)$
- $\gcd(n,q)\gt 1$ 이면 $\chi(n)=0$ 이고, 그렇지 않으면 $\chi(n)\ne0$

직관 절의 $\chi_{-4}$ 는 법 $4$ 의 지표다. 모든 단원에서 $1$ 인 지표를 주지표(principal character) $\chi_0$ 라 한다. 법 $5$ 에서는 $2$ 가 단원군을 생성하므로 지표가 $\chi(2)\in\lbrace1,i,-1,-i\rbrace$ 로 정해져 네 개이고, $\chi(2)=-1$ 인 것이 Legendre 기호 $\left(\frac n5\right)$ 다.

## 도체와 원시 지표

$\chi$ 가 법 $q$ 의 지표이고 $d\mid q$ 인 어떤 $d$ 와 법 $d$ 의 지표 $\chi'$ 가 있어 $\gcd(n,q)=1$ 일 때 $\chi(n)=\chi'(n)$ 이면 $\chi$ 는 $\chi'$ 에서 유도되었다고 한다. 이런 $d$ 중 최소를 $\chi$ 의 **도체(conductor)** 라 하고, 도체가 $q$ 와 같은 지표를 **원시 지표(primitive character)** 라 한다. 홀수 $n$ 에서 $\chi_{-4}(n)$ 과 같은 값을 갖는 법 $8$ 의 지표는 도체가 $4$ 이므로 원시 지표가 아니고, $\chi_{-4}$ 는 원시 지표다.

## Dirichlet L 함수

지표 $\chi$ 의 Dirichlet L 함수는 다음 급수다.

$$
L(s,\chi)=\sum_{n=1}^\infty\frac{\chi(n)}{n^s}
$$

직관 절의 둘째 급수가 $L(s,\chi_{-4})$ 이다. $\chi=\chi_0$ 이면 $L(s,\chi_0)=\zeta(s)\prod_{p\mid q}(1-p^{-s})$ 다.

## 일반화 Riemann 가설

모든 Dirichlet 지표 $\chi$ 에 대해 $L(s,\chi)$ 의 비자명한 영점이 전부 $\mathrm{Re}\thinspace s=1/2$ 위에 있다는 주장을 **일반화 Riemann 가설(generalized Riemann hypothesis, GRH)** 이라 한다. 법 $1$ 의 지표에서는 [Riemann 가설](riemann-hypothesis.md)이다.

# 성질

## 지표의 개수와 직교 관계

Dirichlet 지표는 군 준동형 $(\mathbb Z/q\mathbb Z)^\times\to\mathbb C^\times$ 를 $\mathbb Z$ 로 끌어올린 뒤 단원이 아닌 곳에서 $0$ 으로 확장한 것과 같다. 이것은 유한 아벨군의 1 차원 [군의 표현](group-representations.md)이다. 유한 아벨군과 그 지표군이 동형이므로 법 $q$ 의 지표는 정확히 $\varphi(q)$ 개이고, $\chi(n)$ 은 $1$ 의 $\varphi(q)$ 제곱근이다.

$$
\sum_{n \bmod q}\chi(n)\overline{\psi(n)}=
\begin{cases}\varphi(q)&\chi=\psi\cr 0&\text{그 외}\end{cases}
\qquad
\sum_{\chi \bmod q}\chi(n)\overline{\chi(a)}=
\begin{cases}\varphi(q)&n\equiv a\cr 0&\text{그 외}\end{cases}
$$

왼쪽이 지표의 직교성, 오른쪽이 그 쌍대다. 오른쪽은 유한 아벨군 위의 [Fourier 급수](fourier-series.md)로 한 점에서만 $1$ 인 함수를 적은 것이다. 둘 다 비자명한 $\chi$ 에 대한 $\sum_n\chi(n)=0$ 에서 유도된다[^1]. 직관 절의 $(1+\chi_{-4})/2$ 는 오른쪽 식의 $q=4$, $a=1$ 경우다.

## 수렴

$\mathrm{Re}\thinspace s\gt 1$ 에서 $L(s,\chi)$ 는 절대수렴한다. $\chi$ 가 주지표가 아니면 한 주기의 합 $\sum_{n=1}^q\chi(n)=0$ 이라 부분합이 유계이고, 급수가 $\mathrm{Re}\thinspace s\gt 0$ 에서 조건수렴한다.

## Euler 곱과 Dirichlet 정리

$\chi$ 가 완전 곱셈적이므로 유일분해에서

$$
L(s,\chi)=\prod_p\Big(1-\frac{\chi(p)}{p^s}\Big)^{-1},\qquad \log L(s,\chi)=\sum_p\frac{\chi(p)}{p^s}+O(1)\qquad(\mathrm{Re}\thinspace s\gt 1)
$$

이다. 직교 관계를 적용하면 잉여류 하나만 남는다.

$$
\sum_{p\equiv a\thinspace(q)}\frac1{p^s}=\frac1{\varphi(q)}\sum_\chi\overline{\chi(a)}\log L(s,\chi)+O(1)
$$

$s\to1^+$ 에서 우변의 $\chi_0$ 항은 $\frac1{\varphi(q)}\log\frac1{s-1}\to\infty$ 로 발산하고, 나머지는 $L(1,\chi)\ne0$ 이므로 유계다. 그래서 $\gcd(a,q)=1$ 이면 $a\bmod q$ 인 소수가 무한히 많다. 이것이 Dirichlet 이 1837 년에 증명한 등차수열의 소수 정리(Dirichlet's theorem on arithmetic progressions)다.

## L(1,χ)≠0

$F(s)=\prod_{\chi\bmod q}L(s,\chi)$ 의 로그는 $\sum_\chi\sum_p\sum_m\chi(p^m)/(mp^{ms})$ 이고, 직교 관계로 $p^m\equiv1\pmod q$ 인 항만 $\varphi(q)$ 배로 남으므로 계수가 음이 아니다. 그래서 실수 $s\gt1$ 에서 $F(s)\ge1$ 이다.

복소 지표 $\chi\ne\bar\chi$ 에서 $L(1,\chi)=0$ 이면 $L(1,\bar\chi)=0$ 이기도 하다. 그러면 $F$ 에서 영점 두 개가 $L(s,\chi_0)$ 의 단순극 하나를 넘어서 $F(s)\to0$ 이 되어 $F(s)\ge1$ 과 모순이다.

값이 $0,\pm1$ 인 실수 지표에서는 영점이 하나뿐이라 이 계산으로 모순이 나오지 않는다. 이 경우에는 실수 원시 지표에 대응하는 이차체의 류수 공식 $L(1,\chi)\gt0$ 을 쓴다. 실수 지표의 $L$ 함수가 $s=1$ 바로 왼쪽에 영점을 가질 수 있는지가 [Siegel 영점](siegel-zeros.md)의 문제다.

## 해석적 연속과 함수방정식

도체 $q$ 인 원시 지표 $\chi$ 에 대해 $L(s,\chi)$ 는 복소평면 전체로 정칙 연속되고, 완비화한 함수

$$
\Lambda(s,\chi)=\Big(\frac q\pi\Big)^{(s+\epsilon)/2}\Gamma\negthinspace\Big(\frac{s+\epsilon}2\Big)L(s,\chi),
\qquad \epsilon=\frac{1-\chi(-1)}2
$$

가 $\Lambda(s,\chi)=\frac{\tau(\chi)}{i^\epsilon\sqrt q}\thinspace\Lambda(1-s,\bar\chi)$ 를 만족한다. $\epsilon$ 은 $\chi$ 의 짝홀을 나타내고 $\tau(\chi)=\sum_{n \bmod q}\chi(n)e^{2\pi in/q}$ 는 [Gauss 합](gauss-sums.md)이다. 원시 지표에서 $\vert\tau(\chi)\vert=\sqrt q$ 이므로 함수방정식의 상수가 절댓값 $1$ 이다. 원시 지표가 아니면 $p\mid q$ 인 유한 개의 Euler 인자만큼 보정이 들어간다.

$\zeta$ 와 달리 $s\mapsto1-s$ 가 $\chi$ 를 $\bar\chi$ 로 바꾸고, [실수](real-numbers.md) 값 지표에서만 같은 함수가 나온다.

## 산술수열의 소수 정리

$\gcd(a,q)=1$ 일 때

$$
\pi(x;q,a)\sim\frac1{\varphi(q)}\cdot\frac x{\ln x}
$$

이고 소수가 $\varphi(q)$ 개의 잉여류에 고르게 나뉜다. 증명의 요지는 $\mathrm{Re}\thinspace s=1$ 위에 $L$ 함수의 영점이 없다는 것이다.

오차항을 $q$ 에 대해 고르게 잡는 것은 어렵다. [Siegel–Walfisz 정리](siegel-walfisz.md)가 $q\le(\ln x)^A$ 범위에서 이를 주지만 상수가 비유효적이고, 원인은 실수 지표의 Siegel 영점을 배제하지 못하는 것이다. $q\le x^{1/2-\epsilon}$ 범위의 평균에 대해서는 Bombieri–Vinogradov 정리(Bombieri–Vinogradov theorem)가 GRH 에서 나오는 것과 같은 크기의 오차를 가정 없이 준다. 증명은 [큰 체](large-sieve.md)를 쓴다.

## 함수체의 경우

$\mathbb F_q$ 위의 [다항식환](polynomial-rings.md) $\mathbb F_q\lbrack t\rbrack$ 는 [유클리드 정역](euclidean-domains.md)이고, 소수 대신 기약다항식이 있으며 대응하는 zeta 함수와 지표와 $L$ 함수가 있다. 이때 $L$ 함수는 $T=q^{-s}$ 의 다항식이라 영점이 유한 개다. Weil 이 1948 년에 곡선에 대해 영점이 $\vert T\vert=q^{-1/2}$ 위에 있음을 증명했고, [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)이 일반 다양체로 확장했다. 영점은 [유한체](finite-fields.md) 위 곡선의 [코호몰로지](cohomology.md)에 작용하는 Frobenius 의 고윳값으로 나타난다.

## Chebyshev 편향

$4k+1$ 꼴 소수와 $4k+3$ 꼴 소수의 개수의 비는 $1$ 로 수렴하지만, $x$ 이하의 개수를 비교하면 대개 $4k+3$ 쪽이 많다. 이것을 Chebyshev 편향(Chebyshev's bias)이라 한다.

명시 공식에서 그 원인이 나온다. 제곱수도 세는 $\psi(x;q,a)$ 에서는 홀수 $p$ 에 대해 $p^2\equiv1\pmod4$ 이므로 제곱 항이 $1 \bmod 4$ 쪽에만 $\sqrt x$ 크기로 더해지고, 소수만 세는 함수로 바꾸면 그만큼 $1 \bmod 4$ 쪽 개수가 작다. 부호는 무한히 자주 바뀐다. Rubinstein–Sarnak 은 GRH 와 영점의 선형독립성을 가정하고, 로그밀도로 약 99.6% 의 $x$ 에서 $3 \bmod 4$ 쪽이 많음을 증명했다[^2].

[^1]: $\chi(b)\ne1$ 인 $b$ 를 잡으면 $n\mapsto bn$ 이 잉여류의 치환이므로 $S=\sum_n\chi(n)$ 에 대해 $S=\chi(b)S$ 이고, 따라서 $S=0$ 이다.
[^2]: M. Rubinstein, P. Sarnak, "Chebyshev's bias", *Experimental Mathematics* **3** (1994), 173–197.

# 활용

- 실수 원시 지표는 이차체 $\mathbb Q(\sqrt d)$ 와 일대일로 대응하고 그 지표가 Kronecker 기호(Kronecker symbol)다. $d\lt 0$ 에서 $L(1,\chi_d)=\frac{2\pi h(d)}{w\sqrt{\vert d\vert}}$ 이고, $h(d)$ 는 류수, $w$ 는 단위근의 개수다. 류수가 양의 정수이므로 $L(1,\chi_d)\gt 0$ 이고, 이것으로 실수 지표의 경우가 증명된다. 해석적 값과 대수적 불변량을 잇는 같은 꼴의 등식이 [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)에 나타난다.
- $p\equiv3\pmod4$ 인 소수에서는 제곱근이 $a^{(p+1)/4}$ 한 번으로 계산되어, Rabin 암호(Rabin cryptosystem)의 복호와 [타원곡선](elliptic-curves.md) 점 압축에 사용한다. $p\equiv1\pmod{2^k}$ 인 소수는 $2^k$ 차 단위근을 가져 [고속 Fourier 변환](fft.md)을 유한체에서 수행하는 수론 변환의 법이 된다. 산술수열의 소수 정리가 밀도를 $1/\varphi(q)$ 로 보장하므로 등차수열에서 후보를 무작위로 뽑아 소수 판정을 반복하면 평균 $\varphi(q)\ln x/q$ 번 남짓에 성공한다.
- 아벨이 아닌 Galois 군의 표현으로 같은 구성을 하면 [Artin L 함수](artin-l-functions.md)가 되고, 타원곡선의 점 개수로 하면 Hasse–Weil L 함수(Hasse–Weil L-function)가 된다. [Langlands 강령](langlands-program.md)은 이 $L$ 함수들이 자기동형 표현의 $L$ 함수와 같다고 예측한다. Wiles 의 증명은 반안정 타원곡선의 $L$ 함수가 [모듈러 형식](modular-forms.md)의 $L$ 함수와 같음을 보인 것이다.

# 연관 문서

## 선수지식

- [소수 정리](prime-number-theorem.md)
- [군의 표현](group-representations.md)
- [이차 상호법칙](quadratic-reciprocity.md)

## 더 알아보기

- [Siegel–Walfisz 정리](siegel-walfisz.md)
- [Chebotarev 밀도 정리](chebotarev.md)
- [큰 체](large-sieve.md)
- [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)
- [Gauss 합](gauss-sums.md)

#number_theory #complex_analysis #group_theory
