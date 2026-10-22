# Fermat 마지막 정리

# 개요

**Fermat 마지막 정리(Fermat's Last Theorem)** 는 $n\ge3$ 이면 $x^n+y^n=z^n$ 을 만족하는 양의 정수 $x,y,z$ 가 없다는 정리다. Fermat 이 1637 년 무렵 Diophantus 의 *Arithmetica* 여백에 증명 없이 적었고, Wiles 가 1995 년에 Taylor 와 함께 증명을 완성했다.[^1][^2]

증명은 두 방법으로 나뉜다. 19 세기의 Kummer 는 좌변을 [원분체](cyclotomic-fields.md)에서 인수분해해 지수가 정칙 소수인 경우를 증명했다. 20 세기의 증명은 반례 하나에서 [타원곡선](elliptic-curves.md)을 만들고, 그 곡선의 mod $p$ [Galois 표현](galois-representations.md)이 레벨 $2$ 무게 $2$ 의 고유형식에서 와야 하는데 그런 형식이 없다는 모순을 이끈다.

# 직관

$n=2$ 이면 해가 무한히 많다. $3^2+4^2=5^2$, $5^2+12^2=13^2$ 이고, 서로소인 해는 모두 $(m^2-k^2,\thinspace 2mk,\thinspace m^2+k^2)$ 꼴이다. $n=3$ 에서 같은 일을 하려면 $x^3+y^3=z^3$ 의 좌변을 인수분해해야 한다. 정수 안에서는 $x^3+y^3=(x+y)(x^2-xy+y^2)$ 에서 멈추고, 둘째 인수는 더 쪼개지지 않는다.

$1$ 의 세제곱근 $\omega$ 를 붙이면 $x^2-xy+y^2=(x+\omega y)(x+\omega^2y)$ 로 끝까지 쪼개진다. 일반 소수 $p$ 에서도 $\zeta=e^{2\pi i/p}$ 로

$$
x^p+y^p=(x+y)(x+\zeta y)(x+\zeta^2y)\cdots(x+\zeta^{p-1}y)=z^p
$$

이다. 정수에서 서로소인 수들의 곱이 $p$ 제곱이면 각각이 $p$ 제곱이다. $\mathbb Z\lbrack\zeta\rbrack$ 에서도 그렇다면 $x+\zeta y$ 가 단원 곱하기 $p$ 제곱이 되고, 이 식을 비교해 모순을 얻는다. 1847 년 Lamé 가 이 논법을 발표했다.

$\mathbb Z\lbrack\zeta_{23}\rbrack$ 에서는 한 수가 기약원의 곱으로 두 가지 이상 쓰이므로 "각 인수가 $p$ 제곱" 이라는 단계가 성립하지 않는다. Kummer 는 수 대신 아이디얼을 쪼갰다. 아이디얼로는 $(x+\zeta y)=\mathfrak a^p$ 가 언제나 성립하고, $\mathfrak a$ 가 주 아이디얼인지가 남는다. $\mathfrak a^p$ 가 주 아이디얼이고 류군의 위수 곧 류수(class number)가 $p$ 로 나누어지지 않으면 $\mathfrak a$ 도 주 아이디얼이다. 그래서 $p$ 가 $\mathbb Q(\zeta_p)$ 의 류수를 나누지 않는 소수에서는 Lamé 의 논법이 다시 성립한다.

# 정의

## 진술

**정리.** $n\ge3$ 이면 $x^n+y^n=z^n$ 을 만족하는 정수 가운데 $xyz\ne0$ 인 것은 없다.

$n$ 이 홀수 소수 $p$ 로 나누어지면 해 $(x,y,z)$ 에서 $(x^{n/p},y^{n/p},z^{n/p})$ 가 지수 $p$ 의 해가 된다. $p$ 로 나누어지지 않는 $n\ge3$ 은 $4$ 의 배수다. 그러므로 $n=4$ 와 홀수 소수 $n=p$ 만 증명하면 된다.

## Frey 곡선

$p\ge5$ 를 소수로 하고 $a^p+b^p=c^p$, $abc\ne0$, $\gcd(a,b,c)=1$ 이라 한다. 부호와 순서를 바꾸어 $a\equiv-1\pmod4$, $b$ 가 짝수가 되게 한다. 그러면

$$
E\colon\ y^2=x(x-a^p)(x+b^p)
$$

를 그 해의 **Frey 곡선(Frey curve)** 이라 한다.[^3] 세 근 $0,\thinspace a^p,\thinspace -b^p$ 의 차가 $a^p,\thinspace b^p,\thinspace c^p$ 이므로 판별식은 $16(abc)^{2p}$ 이다. 최소 판별식은 $2^{-8}(abc)^{2p}$ 이고 $E$ 는 반안정(semistable)이며, 도체(conductor)는 $abc$ 를 나누는 소수의 곱 $N=\prod_{\ell\mid abc}\ell$ 이다.

## 모듈러성

$\mathbb Q$ 위의 타원곡선 $E$ 가 **모듈러(modular)** 라는 것은 도체가 $N$ 인 $E$ 에 대해 $S_2(\Gamma_0(N))$ 의 새형식(newform) $f=\sum a_nq^n$ 이 있어 $N$ 을 나누지 않는 모든 소수 $\ell$ 에서

$$
a_\ell(f)=\ell+1-\char35{}E(\mathbb F_\ell)
$$

가 성립하는 것이다. 이때 $E$ 의 mod $p$ 표현 $\bar\rho_{E,p}$ 는 $f$ 의 mod $p$ 표현과 동형이다.

# 성질

## 지수 4

**정리(Fermat).** $x^4+y^4=z^2$ 은 $xyz\ne0$ 인 정수해가 없다. $z^4=(z^2)^2$ 이므로 $n=4$ 의 경우가 따라온다.

증명은 무한 강하법(infinite descent)이다. $z$ 가 가장 작은 양의 해를 잡으면 $(x^2,y^2,z)$ 가 서로소인 Pythagoras 세 쌍(Pythagorean triple)이므로 위 매개화를 두 번 적용할 수 있고, 그 결과로 $z$ 보다 작은 새 해가 나온다. 가장 작은 해라는 가정과 모순이다.

## Kummer 정리

**정리(Kummer, 1850).** 홀수 소수 $p$ 가 $\mathbb Q(\zeta_p)$ 의 류수를 나누지 않으면 $x^p+y^p=z^p$ 은 $xyz\ne0$ 인 정수해가 없다.[^4]

$p\nmid xyz$ 인 경우의 증명의 요지는 직관 절과 같다. 아이디얼 $(x+\zeta^iy)$ 들이 서로소이므로 $(x+\zeta y)=\mathfrak a^p$ 이고, $p$ 가 류수를 나누지 않으므로 $x+\zeta y=u\alpha^p$ 인 단원 $u$ 와 $\alpha\in\mathbb Z\lbrack\zeta\rbrack$ 가 있다. 실단원에 대한 Kummer 보조정리(Kummer's lemma)로 $u$ 를 정리하고 양변을 $p$ 를 법으로 비교하면 $p\mid xy$ 가 나와 가정과 어긋난다. $p\mid xyz$ 인 경우는 $1-\zeta$ 의 지수를 따라 내려가는 강하법이 필요하다.

$\mathbb Q(\zeta_p)$ 의 류수를 나누지 않는 홀수 소수 $p$ 를 정칙 소수(regular prime)라 한다. Kummer 는 $p$ 가 정칙인 것이 $p$ 가 [Bernoulli 수](bernoulli-numbers.md) $B_2,B_4,\dots,B\_{p-3}$ 의 분자를 나누지 않는 것과 동치임을 보였고, 이 판정으로 $100$ 이하의 소수 가운데 $37,59,67$ 을 뺀 모든 지수를 해결했다. 정칙 소수가 무한히 많은지는 증명되지 않았다.[^4]

## Ribet 의 레벨 낮추기

**정리(Ribet, 1990).** $\bar\rho$ 를 $S_2(\Gamma_0(N))$ 의 새형식에서 오는 기약 mod $p$ 표현이라 하고, $\ell\ne p$ 가 $N$ 을 정확히 한 번 나눈다고 하자. $\bar\rho$ 가 $\ell$ 에서 비분기이면 $\bar\rho$ 는 $S_2(\Gamma_0(N/\ell))$ 의 새형식에서도 온다. $\ell=p$ 일 때는 비분기 대신 $p$ 에서 유한평탄(finite flat)이라는 조건을 쓴다.[^5]

이 정리를 Serre 가 $\varepsilon$ 추측으로 제시했다. [Serre 추측](serre-conjecture.md)의 약한 형태와 강한 형태가 동치라는 것이 이 정리의 일반형이다.

Frey 곡선에서 홀수 소수 $\ell\mid abc$ 의 최소 판별식 지수는 $2p\thinspace\mathrm{ord}\_\ell(abc)$ 로 $p$ 의 배수다. [Tate 곡선](tate-curve.md)의 매개화로 보면 이것은 $\bar\rho_{E,p}$ 가 $\ell\ne p$ 에서 비분기이고 $p$ 에서 유한평탄이라는 뜻이다. $\ell=2$ 에서는 지수 $2p\thinspace\mathrm{ord}\_2(b)-8$ 이 $p$ 의 배수가 아니어서 분기가 남는다. 또 Mazur 가 [Eisenstein 아이디얼](eisenstein-ideal.md)로 증명한 소수 차수 동종사상의 분류에서, 반안정 곡선의 $\bar\rho_{E,p}$ 는 $p\ge5$ 에서 기약이다. 그러므로 $E$ 가 모듈러이면 $N$ 에서 $2$ 가 아닌 소수를 하나씩 지워 $\bar\rho_{E,p}$ 가 $S_2(\Gamma_0(2))$ 의 새형식에서 와야 한다.

## 모듈러성 정리

**정리(Wiles, Taylor–Wiles, 1995).** $\mathbb Q$ 위의 반안정 타원곡선은 모듈러다.[^2]

증명은 [Galois 표현의 변형환](deformation-rings.md) $R$ 과 [Hecke 작용소](hecke-operators.md)가 생성하는 Hecke 대수 $\mathbb T$ 가 동형이라는 $R=\mathbb T$ 정리다. 출발점은 $\bar\rho_{E,3}$ 다. $\mathrm{GL}\_2(\mathbb F_3)$ 이 [가해군](solvable-groups.md)이므로 [Langlands–Tunnell 정리](langlands-tunnell.md)로 $\bar\rho_{E,3}$ 이 모듈러이고, $R=\mathbb T$ 가 이것을 $E$ 의 $3$ 진 표현 전체로 올린다. $\bar\rho_{E,3}$ 이 가약인 곡선은 $\bar\rho_{E,5}$ 에서 출발한다. Breuil, Conrad, Diamond, Taylor 가 2001 년에 반안정 조건을 뗐다.

## 모순

[모듈러 곡선](modular-curves.md) $X_0(2)$ 의 종수는 $0$ 이므로 $S_2(\Gamma_0(2))=0$ 이다. Frey 곡선은 반안정이므로 모듈러성 정리에서 모듈러이고, Ribet 의 정리에서 $\bar\rho_{E,p}$ 가 $S_2(\Gamma_0(2))$ 의 새형식에서 와야 한다. 그런 새형식이 없으므로 $a^p+b^p=c^p$ 의 해가 없다. $p=3$ 은 Euler 가 증명했다.

# 활용

- 아이디얼의 도입: Kummer 가 $\mathbb Z\lbrack\zeta_p\rbrack$ 의 유일분해 실패를 다루려고 만든 이상수(ideal number)가 [대수적 수체](algebraic-number-fields.md)의 아이디얼 분해와 류군의 출발이다. [Dedekind 정역](dedekind-domains.md)의 정의가 이 분해를 공리로 옮긴 것이다.
- 정칙 소수와 류군: 비정칙 소수에서 류군의 어느 고유공간이 $0$ 이 아닌지를 [Herbrand–Ribet 정리](herbrand-ribet.md)가 Bernoulli 수의 합동으로 정한다.
- 모듈러성: 모듈러성 정리는 [Langlands 강령](langlands-program.md)의 $\mathrm{GL}\_2$ 경우이고, 그 증명의 $R=\mathbb T$ 논법이 Serre 추측의 Khare–Wintenberger 증명에 쓰인다.
- 일반화된 Fermat 방정식: $x^p+y^p=2z^p$, $x^p+y^p=z^2$ 같은 방정식도 Frey 곡선, 레벨 낮추기, 모듈러성의 세 단계로 다룬다. 레벨이 낮아진 공간이 $0$ 이 아니면 남은 새형식을 하나씩 배제한다.

[^1]: A. Weil, *Number Theory: An Approach through History from Hammurapi to Legendre*, Birkhäuser, 1984, 2 장. Fermat 의 여백 메모와 $n=4$ 의 강하법이 여기 있다.
[^2]: A. Wiles, *Modular elliptic curves and Fermat's Last Theorem*, Ann. of Math. **141** (1995), 443–551. R. Taylor, A. Wiles, *Ring-theoretic properties of certain Hecke algebras*, 같은 권 553–572.
[^3]: G. Frey, *Links between stable elliptic curves and certain diophantine equations*, Ann. Univ. Sarav. **1** (1986), 1–40. 판별식과 도체의 계산은 F. Diamond, J. Shurman, *A First Course in Modular Forms*, GTM 228, Springer, 2005, 9.6 절.
[^4]: L. C. Washington, *Introduction to Cyclotomic Fields*, 2nd ed., GTM 83, Springer, 1997, 1 장과 5 장. 정칙 소수가 무한히 많은지가 열려 있다는 것과 비정칙 소수가 무한히 많다는 Jensen 의 정리도 여기 있다.
[^5]: K. Ribet, *On modular representations of Gal(Q̄/Q) arising from modular forms*, Invent. Math. **100** (1990), 431–476.

# 연관 문서

## 선수지식

- [원분체](cyclotomic-fields.md)
- [Serre 추측과 Khare–Wintenberger 정리](serre-conjecture.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #field_theory #theorem
