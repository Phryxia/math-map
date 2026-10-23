# Siegel–Walfisz 정리

# 개요

**Siegel–Walfisz 정리(Siegel–Walfisz theorem)** 는 법 $q$ 가 $(\log x)^A$ 이하인 범위에서, $x$ 이하의 소수가 $q$ 와 서로소인 잉여류에 고르게 나뉘고 그 오차가 $x\exp(-C\sqrt{\log x})$ 꼴로 $q$ 에 무관하게 잡힌다는 정리다. Walfisz 가 1936 년에 Siegel 의 정리(Siegel's theorem)에서 유도했다.[^1][^2]

[Dirichlet L 함수](dirichlet-l-functions.md)로 증명되는 산술수열의 소수 정리는 $q$ 를 고정한 점근식이다. 이 정리는 $q$ 가 $x$ 와 함께 커지는 범위로 그 점근식을 넓히고, 대가로 상수 $C$ 를 계산할 수 없다.

# 직관

$q$ 를 고정하면 $x$ 이하의 소수 가운데 $p\equiv a\pmod q$ 인 것은 전체의 $1/\varphi(q)$ 에 가깝다. 이제 $q$ 를 $x$ 와 함께 키우면서, 예컨대 $q\approx\log x$ 로 두고도 같은 비율이 나오는지 묻는다. [원법](circle-method.md)으로 소수의 합을 다룰 때 이런 $q$ 가 필요하다.

잉여류마다 소수를 세는 식은 지표 $\chi$ 마다 $L(s,\chi)$ 의 영점에서 나오는 항의 합이다. 실수 지표 $\chi_1$ 의 $L(s,\chi_1)$ 에 $1$ 에 매우 가까운 실영점 $\beta$ 가 있으면 그 항은 $x^\beta$ 이고, $\chi_1(a)=1$ 인 잉여류에서는 소수가 비율 $x^{\beta-1}$ 만큼 덜 세어지고 $\chi_1(a)=-1$ 인 잉여류에서는 그만큼 더 세어진다. $\beta$ 가 $1$ 에 가까울수록 $x^{\beta-1}$ 은 $x$ 가 아주 커질 때까지 $1$ 에 가깝게 남는다.

그래서 고른 분포를 보이려면 $\beta$ 가 $1$ 에 얼마나 가까울 수 있는지 $q$ 로 막아야 한다. Siegel 의 정리가 그 한계를 주고, 그 한계에서 $q\le(\log x)^A$ 범위의 고른 분포가 나온다.

# 정의

## 잉여류의 소수 계량 함수

$\Lambda$ 를 von Mangoldt 함수라 하고, $\gcd(a,q)=1$ 에 대해

$$
\psi(x;q,a)=\sum_{n\le x,\thinspace n\equiv a\thinspace(\mathrm{mod}\thinspace q)}\Lambda(n)
$$

로 둔다. 소수 개수 $\pi(x;q,a)$ 와 $\psi(x;q,a)$ 는 부분합으로 서로 옮겨지고, 점근식 $\psi(x;q,a)\sim x/\varphi(q)$ 가 산술수열의 소수 정리다.

## 예외 영점

법 $q$ 의 지표에 대한 $L$ 함수들은 $c$ 를 절대상수로 두고

$$
\sigma\ge 1-\frac{c}{\log\big(q(\vert t\vert+2)\big)}
$$

에서 영점을 갖지 않는다. 단 하나의 실수 지표 $\chi_1$ 의 $L(s,\chi_1)$ 이 이 영역 안에 단순 실영점 $\beta_1$ 을 하나 가질 수 있다. 이 $\beta_1$ 을 **예외 영점(exceptional zero)** 또는 **Siegel 영점(Siegel zero)** 이라 한다.[^3]

# 성질

## 예외 영점을 포함한 점근식

$q\le\exp(c_1\sqrt{\log x})$ 이면

$$
\psi(x;q,a)=\frac{x}{\varphi(q)}-\frac{\chi_1(a)}{\varphi(q)}\cdot\frac{x^{\beta_1}}{\beta_1}+O\big(x\exp(-c_2\sqrt{\log x})\big)
$$

이고, 예외 영점이 없으면 가운데 항이 없다. $c_1,c_2$ 는 계산할 수 있는 절대상수다.[^3]

## Siegel 정리

**정리(Siegel, 1935).** 모든 $\varepsilon\gt 0$ 에 대해 $c(\varepsilon)\gt 0$ 이 존재해, 법 $q$ 의 원시 실수 지표 $\chi$ 마다

$$
L(1,\chi)\gt c(\varepsilon)\thinspace q^{-\varepsilon}
$$

이다. 같은 $\varepsilon$ 에 대해 $L(s,\chi)$ 의 실영점 $\beta$ 는 $\beta\lt 1-c'(\varepsilon)\thinspace q^{-\varepsilon}$ 을 만족한다.[^1]

증명의 요지. 서로 다른 원시 실수 지표 $\chi_1,\chi_2$ 에 대해 $\zeta(s)L(s,\chi_1)L(s,\chi_2)L(s,\chi_1\chi_2)$ 는 계수가 음이 아닌 [Dirichlet 급수](dirichlet-series.md)이고, 이 사실로 $L(1,\chi_2)$ 의 하한을 $\chi_1$ 의 영점 위치로 적는다. $1-\varepsilon$ 과 $1$ 사이에 실영점을 갖는 $\chi_1$ 이 있으면 그것을 쓰고, 없으면 결론이 바로 성립한다. 어느 경우인지 알 수 없으므로 $c(\varepsilon)$ 은 계산되지 않는다.

## Siegel–Walfisz 정리

**정리(Walfisz, 1936).** 모든 $A\gt 0$ 에 대해 $C_A\gt 0$ 이 존재해, $q\le(\log x)^A$ 이고 $\gcd(a,q)=1$ 이면

$$
\psi(x;q,a)=\frac{x}{\varphi(q)}+O\big(x\exp(-C_A\sqrt{\log x})\big)
$$

이다. $O$ 의 상수는 $A$ 에만 의존한다.[^2]

증명. 앞의 점근식에서 가운데 항만 처리하면 된다. Siegel 정리를 $\varepsilon=1/(2A)$ 로 쓰면 $q^{-\varepsilon}\ge(\log x)^{-1/2}$ 이므로

$$
x^{\beta_1-1}\le\exp\big(-c'(\varepsilon)\thinspace q^{-\varepsilon}\log x\big)\le\exp\big(-c'(\varepsilon)\sqrt{\log x}\big)
$$

이고 가운데 항이 오차항에 들어간다.

## 비유효성

$C_A$ 는 존재만 증명되고 증명에서 값이 나오지 않는다.[^3] 따라서 이 정리로 얻은 결론에서 "충분히 큰 $x$" 의 문턱을 수로 적을 수 없다. 예외 영점이 없다는 것이 증명되면 Siegel 정리를 쓰지 않고 앞의 점근식에서 바로 유효한 상수가 나온다.

## 류수의 하한

허이차체 $\mathbb Q(\sqrt D)$ 의 류수는 Dirichlet 의 류수 공식(class number formula)으로 $h(D)=\frac{w\sqrt{\vert D\vert}}{2\pi}L(1,\chi_D)$ 이므로, Siegel 정리에서 모든 $\varepsilon\gt 0$ 에 대해 $h(D)\gt c(\varepsilon)\vert D\vert^{1/2-\varepsilon}$ 이 나온다. 상수가 비유효적이라 이 하한으로는 [류수 1 문제](class-number-one.md)의 판별식 목록을 확정할 수 없다.

# 활용

- 원법의 주 호에서 소수에 대한 지수합을 계산할 때, 법이 $\log$ 의 거듭제곱 이하인 등차수열의 소수 분포로 이 정리를 쓴다.
- [Waring 문제](waring-problem.md)의 변수를 소수로 제한한 Waring–Goldbach 문제의 주 호도 같은 방식으로 이 정리를 쓴다.
- [큰 체](large-sieve.md)의 Bombieri–Vinogradov 정리(Bombieri–Vinogradov theorem)는 증명에서 작은 법을 이 정리로 처리하고, 큰 법을 큰 체 부등식으로 처리한다.

[^1]: C. L. Siegel, *Über die Classenzahl quadratischer Zahlkörper*, Acta Arith. **1** (1935), 83–86.
[^2]: A. Walfisz, *Zur additiven Zahlentheorie. II*, Math. Z. **40** (1936), 592–607.
[^3]: H. Davenport, *Multiplicative Number Theory*, 3rd ed., GTM 74, Springer, 2000, 14 장, 20 장–22 장.

# 연관 문서

## 선수지식

- [Dirichlet L 함수](dirichlet-l-functions.md)

## 더 알아보기

- [Siegel 영점](siegel-zeros.md)

#number_theory #complex_analysis
