# Siegel 영점

# 개요

**Siegel 영점(Siegel zero)** 은 Dirichlet $L$ 함수가 $s=1$ 바로 왼쪽의 [실수](real-numbers.md)에서 갖는, 예외적으로 $1$ 에 가까운 영점이다. 법 $q$ 의 실수 지표 $\chi$ 에서 $L(s,\chi)$ 가 $1-c/\log q$ 와 $1$ 사이에 영점 $\beta_1$ 을 가지면, 산술수열의 소수 개수 공식에 항 $x^{\beta_1}/\varphi(q)$ 가 끼어들어 주항과 크기가 비슷해진다. 이런 영점은 법들을 통틀어 많아야 하나이므로, 남는 하나의 영향을 따로 떼어 다룬다.

# 직관

Siegel 영점은 법 $q$ 의 실수 지표 $\chi$ 에 대한 $L(s,\chi)$ 의 실영점 $\beta$ 가운데 $1-c/\log q$ 보다 $1$ 에 가까운 것이다. **예외 영점(exceptional zero)** 이라고도 한다. 이런 영점은 법마다 많아야 하나이고, 법들을 함께 보아도 많아야 하나라는 것이 Landau–Page 정리(Landau–Page theorem)다.

[Siegel–Walfisz 정리](siegel-walfisz.md)의 점근식에서 예외 영점 $\beta_1$ 은 항 $x^{\beta_1}/\varphi(q)$ 로 나타나고, 그 크기를 막는 데 쓰는 Siegel 정리(Siegel's theorem)의 상수가 계산되지 않는다.

지표 $\chi_1$ 과 $\chi_2$ 가 서로 다른 실수 지표라 한다. $F(s)=\zeta(s)L(s,\chi_1)L(s,\chi_2)L(s,\chi_1\chi_2)$ 의 로그를 [Dirichlet 급수](dirichlet-series.md)로 쓰면 계수가 모두 $0$ 이상이다. 그래서 실수 $\sigma\gt 1$ 에서 $-F'(\sigma)/F(\sigma)\ge 0$ 이다.

$\sigma=1+\delta$ 에서 이 값을 어림한다. $\zeta$ 의 극 $s=1$ 이 $1/\delta$ 를 더하고, $1$ 근처의 실영점 $\beta$ 마다 $1/(\sigma-\beta)$ 를 뺀다. 나머지 영점과 감마 인자는 $O(\log q)$ 다. 두 지표가 모두 $\beta_1,\beta_2\ge 1-\delta/4$ 인 영점을 가지면 빼는 양이 $2/(5\delta/4)=8/(5\delta)$ 이상이라 합이 $1/\delta-8/(5\delta)+O(\log q)$ 이고, $\delta$ 를 $1/\log q$ 의 작은 상수배로 잡으면 음수가 된다.

$0$ 이상이어야 할 값이 음수가 되었으므로 두 영점이 함께 $1$ 에 가까울 수는 없다. 영점이 하나뿐이면 빼는 양이 $4/(5\delta)$ 이고 합이 양수로 남는다.

# 정의

## 영점 없는 영역

정리. 절대상수 $c\gt 0$ 이 있어, 법 $q$ 의 지표 $\chi$ 에 대한 $L(s,\chi)$ 는 다음 영역에서 영점을 갖지 않는다. 단 $\chi$ 가 실수 지표이면 단순 실영점 $\beta_1$ 하나가 이 영역에 있을 수 있다[^1].

$$
\sigma\ge 1-\frac{c}{\log\big(q(\vert t\vert+2)\big)}
$$

## 예외 지표

위 영역에 실영점 $\beta_1$ 을 갖는 실수 지표 $\chi_1$ 을 **예외 지표(exceptional character)** 라 하고, $\beta_1$ 을 Siegel 영점이라 한다. 예외 지표는 원시 실수 지표에서 오고, 법 $q$ 의 원시 실수 지표는 판별식이 $q$ 또는 $-q$ 인 이차체의 Kronecker 기호(Kronecker symbol) $\chi_D$ 다.

# 성질

## Landau–Page 정리

정리. 절대상수 $c\gt 0$ 이 있어, 법이 $Q$ 이하인 원시 실수 지표들 가운데 $L(s,\chi)$ 가 $\sigma\gt 1-c/\log Q$ 에 실영점을 갖는 것은 많아야 하나다. 이것을 **Landau–Page 정리** 라 한다[^1][^2].

증명의 요지. 직관 절의 계산이다. $\chi_1\ne\chi_2$ 가 모두 그런 영점 $\beta_1,\beta_2$ 를 가지면 $F$ 의 로그 미분에 대한 부등식 $0\le\frac1{\sigma-1}-\frac1{\sigma-\beta_1}-\frac1{\sigma-\beta_2}+O(\log Q)$ 가 $\sigma=1+\delta$, $\delta\asymp 1/\log Q$ 에서 깨진다.

## 유효한 상계

예외 영점이 있어도 $1$ 에 얼마나 가까운지는 유효하게 막힌다. 절대상수 $c\gt 0$ 에 대해 다음이 성립한다[^1].

$$
\beta_1\lt 1-\frac{c}{q^{1/2}\log^2 q}
$$

류수 공식(class number formula) $L(1,\chi_D)=2\pi h(D)/(w\sqrt{\vert D\vert})$ 와 $h(D)\ge 1$ 에서 $L(1,\chi_D)\gg q^{-1/2}$ 가 나오고, $L(1,\chi)$ 와 $1-\beta_1$ 사이의 관계로 이 상계가 나온다. Siegel 정리는 $q^{-1/2}$ 를 $q^{-\varepsilon}$ 로 바꾸지만 상수를 계산할 수 없다.

## Deuring–Heilbronn 현상

예외 영점 $\beta_1$ 이 있으면 법 $q$ 의 다른 지표들의 영점은 $1$ 에서 밀려난다. 절대상수 $c\gt 0$ 에 대해, $\beta_1$ 이 아닌 영점 $\rho=\beta+i\gamma$ 는 $T=q(\vert\gamma\vert+2)$ 로 두고 다음을 만족한다[^3].

$$
\beta\lt 1-\frac{c}{\log T}\log\frac{c}{(1-\beta_1)\log T}
$$

$\beta_1$ 이 $1$ 에 가까울수록 오른쪽의 영점 없는 영역이 넓어진다. 이것을 **Deuring–Heilbronn 현상(Deuring–Heilbronn phenomenon)** 이라 한다.

## Riemann 가설과의 관계

일반화된 [Riemann 가설](riemann-hypothesis.md)이 성립하면 모든 영점의 실수부가 $1/2$ 이므로 예외 영점이 없다. 예외 영점이 없다는 것은 일반화된 Riemann 가설 없이는 증명되어 있지 않다[^4].

# 활용

- 류수의 하한. $L(1,\chi_D)$ 의 하한은 허이차체의 류수 $h(D)$ 의 하한과 같다. Siegel 정리는 $h(D)\gt c(\varepsilon)\vert D\vert^{1/2-\varepsilon}$ 을 비유효 상수로 준다. Goldfeld 는 해석적 계수가 $3$ 인 [타원곡선](elliptic-curves.md)의 $L$ 함수가 있으면 유효한 하한이 나온다는 것을 보였고, Gross–Zagier 정리(Gross–Zagier theorem)가 그런 곡선을 주어 유효한 하한 $h(D)\gg_\varepsilon(\log\vert D\vert)^{1-\varepsilon}$ 이 나왔다[^5]. [류수 1 문제](class-number-one.md)의 목록을 이 방법으로도 확정한다.
- 등차수열의 가장 작은 소수. $\gcd(a,q)=1$ 일 때 $p\equiv a\pmod q$ 인 가장 작은 소수가 절대상수 $C$, $L$ 에 대해 $Cq^L$ 이하라는 [Linnik 정리](linnik-theorem.md)는 예외 영점이 있는 경우를 Deuring–Heilbronn 현상으로 처리한다[^3].
- [Chebotarev 밀도 정리](chebotarev.md)의 유효한 판본. 무조건적인 오차항은 [Dedekind zeta 함수](dedekind-zeta.md)의 예외 영점 항을 따로 적는다.
- 쌍둥이 소수. Heath-Brown 은 예외 영점이 무한히 많은 법에서 존재하면 차가 $2$ 인 소수 쌍이 무한히 많다는 것을 증명했다[^6]. [소수 간격](prime-gaps.md)의 문제가 예외 영점의 존재 여부와 이렇게 연결된다.

[^1]: H. Davenport, *Multiplicative Number Theory*, 3rd ed., GTM 74, Springer, 2000, 14 장, 20 장.
[^2]: A. Page, "On the number of primes in an arithmetic progression", Proceedings of the London Mathematical Society (2) 39 (1935), 116–141.
[^3]: H. Iwaniec, E. Kowalski, *Analytic Number Theory*, AMS Colloquium Publications 53, 2004, §5.9, 18 장.
[^4]: H. Iwaniec, E. Kowalski, 같은 책, §5.9.
[^5]: D. Goldfeld, "Gauss's class number problem for imaginary quadratic fields", Bulletin of the AMS 13 (1985), 23–37.
[^6]: D. R. Heath-Brown, "Prime twins and Siegel zeros", Proceedings of the London Mathematical Society (3) 47 (1983), 193–224.

# 연관 문서

## 선수지식

- [Siegel–Walfisz 정리](siegel-walfisz.md)

## 더 알아보기

- [Linnik 정리](linnik-theorem.md)

#number_theory #complex_analysis
