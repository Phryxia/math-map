# Gauss 정수환

# 개요

**Gauss 정수환(Gaussian integers)** 은 $a+bi$ 꼴의 [복소수](complex-numbers.md) 가운데 $a,b$ 가 정수인 것 전체가 이루는 환이다. $5=1^2+2^2$ 과 $13=2^2+3^2$ 은 두 제곱수의 합이지만 $7$ 과 $11$ 은 그렇지 않은데, 정수만으로는 어느 소수가 두 제곱수의 합인지 가리기 어렵다. Gauss 정수환에서는 $5=(1+2i)(1-2i)$ 처럼 두 제곱수의 합이 곱으로 쪼개지므로, 소인수분해가 유일하다는 성질로 이 물음을 소수가 이 환에서 쪼개지는지의 문제로 바꿔 푼다.

# 직관

$5=1^2+2^2$ 과 $13=2^2+3^2$ 은 두 제곱수의 합이고 $7$ 과 $11$ 은 아니다. $a^2+b^2=(a+bi)(a-bi)$ 이므로 $5=(1+2i)(1-2i)$, $13=(2+3i)(2-3i)$ 로 쪼개진다. 두 제곱수의 합인 수는 $a+bi$ 꼴인 수의 곱이다.

곱 $65=5\cdot 13$ 은 인수를 짝짓는 방법에 따라 두 제곱수의 합으로 두 번 쓰인다. $(1+2i)(2+3i)=-4+7i$ 이므로 $65=4^2+7^2$ 이고, $(1+2i)(2-3i)=8+i$ 이므로 $65=8^2+1^2$ 이다. $a+bi$ 꼴인 수의 소인수분해가 정수처럼 하나로 정해지면, 두 제곱수의 합으로 쓰는 방법을 소수의 분해로 셀 수 있다.

$\mathbb Z[i]$ 는 복소평면의 정사각 [격자](lattices.md)다. 임의의 복소수는 가장 가까운 격자점에서 거리 $\tfrac{\sqrt2}{2}\lt 1$ 안에 있으므로, 나눗셈의 나머지를 크기가 작아지도록 항상 고를 수 있다. 이 사실에서 나눗셈 정리가 나오고, 정수에서처럼 소인수분해가 하나로 정해진다.

정수의 소수는 이 격자에서 셋 중 하나로 행동한다. $2$ 는 $-i(1+i)^2$ 으로 분기하고, $p\equiv 1 \pmod 4$ 는 서로 켤레인 두 소원(prime element)의 곱으로 쪼개지며, $p\equiv 3\pmod 4$ 는 그대로 소원으로 남는다.

$$
2=-i(1+i)^2,\qquad 5=(2+i)(2-i),\qquad 7 \text{ 은 } \mathbb Z[i] \text{ 에서 소원}
$$

# 정의

Gauss 정수환은 $\mathbb C$ 의 다음 부분환이다.

$$
\mathbb Z[i]=\lbrace a+bi : a,b\in\mathbb Z\rbrace
$$

$\alpha=a+bi$ 의 **노름(norm)** 은 $N(\alpha)=a^2+b^2=\alpha\bar\alpha$ 다. $N(1+2i)=5$, $N(2+3i)=13$ 이고 $N(-4+7i)=65=5\cdot 13$ 이다. 노름은 곱셈적이다. 곧 $N(\alpha\beta)=N(\alpha)N(\beta)$ 다.

곱셈의 역원이 $\mathbb Z[i]$ 안에 있는 원소를 **단위원(unit)** 이라 한다. $\alpha$ 가 단위원인 것과 $N(\alpha)=1$ 인 것이 동치이므로 단위원군은 다음 네 원소로 이루어진다. $1+2i$ 는 노름이 $5$ 이므로 단위원이 아니다.

$$
\mathbb Z[i]^{\times}=\lbrace 1,-1,i,-i\rbrace
$$

# 성질

## 나눗셈 정리

$\beta \ne 0$ 인 임의의 $\alpha,\beta$ 에 대해 $\alpha=\gamma\beta+\rho$ 이고 $N(\rho)\lt N(\beta)$ 인 $\gamma,\rho$ 가 존재한다.

증명. $\alpha/\beta = u+vi$ 를 복소수로 계산하고 $u,v$ 를 각각 가장 가까운 정수로 반올림해 $\gamma$ 를 잡는다. 그러면 $\lvert\alpha/\beta-\gamma\rvert^2 \le \tfrac14+\tfrac14=\tfrac12$ 이므로 $\rho=\alpha-\gamma\beta$ 는 $N(\rho)\le \tfrac12 N(\beta)\lt N(\beta)$ 를 만족한다.

따라서 $\mathbb Z[i]$ 는 [유클리드 정역](euclidean-domains.md)(Euclidean domain, ED)이다. ED 는 주아이디얼정역(principal ideal domain, PID)이고 PID 는 [유일분해정역](unique-factorization-domains.md)(unique factorization domain, UFD)이므로 $\mathbb Z[i]$ 는 UFD 다.

## 소원의 분류

$\mathbb Z[i]$ 의 소원은 단위원 배수를 무시하면 다음 셋뿐이다[^1].

| 유형 | 소원 | 노름 | 조건 |
| --- | --- | --- | --- |
| 분기 | $1+i$ | $2$ | $p=2$ |
| 분열 | $\pi,\thinspace\bar\pi$ (켤레쌍) | $p$ | $p\equiv 1 \pmod 4$ |
| 불활성 | $p$ | $p^2$ | $p\equiv 3 \pmod 4$ |

증명의 요지. 소원 $\pi$ 는 어떤 정수 소수 $p$ 를 나누므로 $N(\pi)\mid p^2$ 이고, 따라서 $N(\pi)$ 는 $p$ 이거나 $p^2$ 이다. $N(\pi)=p$ 인 것과 $p$ 가 두 제곱수의 합인 것이 동치이고, 그 판정이 아래 정리다.

## 두 제곱수의 합

홀수 소수 $p$ 가 $p=a^2+b^2$ 꼴로 쓰이는 것과 $p\equiv 1 \pmod 4$ 인 것이 동치다.

증명. $p\equiv 3\pmod 4$ 이면 제곱수가 법 $4$ 에서 $0$ 이나 $1$ 이므로 $a^2+b^2 \not\equiv 3$ 이다. 역방향은 $p\equiv 1\pmod 4$ 일 때 $-1$ 이 법 $p$ 의 이차잉여라는 [이차 상호법칙](quadratic-reciprocity.md)의 제1 보충 법칙에서 온다. $x^2\equiv -1 \pmod p$ 인 $x$ 를 잡으면 $p \mid x^2+1=(x+i)(x-i)$ 인데, $p$ 는 두 인수 어느 쪽도 나누지 않으므로 $\mathbb Z[i]$ 에서 소원이 아니다. 유일분해로 $p=\pi\bar\pi$ 이고 $N(\pi)=p$ 이므로 $\pi=a+bi$ 가 $p=a^2+b^2$ 을 준다.

## 제곱수 합 표현의 개수

$r_2(n)$ 을 $n=x^2+y^2$ 의 정수해 $(x,y)$ 의 개수라 하면 다음이 성립한다[^2].

$$
r_2(n)=4\bigl(d_1(n)-d_3(n)\bigr)
$$

여기서 $d_1(n)$ 과 $d_3(n)$ 은 각각 법 $4$ 에서 $1$ 과 $3$ 인 $n$ 의 약수의 개수다. $65$ 의 약수 $1,5,13,65$ 는 모두 법 $4$ 에서 $1$ 이므로 $r_2(65)=16$ 이고, 직관 절의 두 표현 $4^2+7^2$, $8^2+1^2$ 에 부호와 순서를 붙인 것이다. 계수 $4$ 는 단위원의 개수이고, 차 $d_1-d_3$ 은 분열 소수의 지수를 배분하는 경우의 수에서 나온다.

# 활용

## 이차 정수환과의 비교

$d$ 가 제곱인수 없는 정수일 때 $\mathbb Z[\sqrt d\thinspace]$ 나 그 정수적 폐포도 같은 방식으로 다룬다. 허수 이차체 $\mathbb Q(\sqrt{-d}\thinspace)$ 의 정수환이 UFD 인 것은 $d=1,2,3,7,11,19,43,67,163$ 아홉 경우뿐이다[^3]. $\mathbb Z[\sqrt{-5}\thinspace]$ 에서 $6$ 의 분해가 둘인 것이 UFD 가 아닌 첫 예이고, 이 실패를 [아이디얼](ideals-quotient-rings.md) 수준에서 복구한 것이 [Dedekind 정역](dedekind-domains.md)과 [대수적 수체](algebraic-number-fields.md)의 류수 이론이다.

## 정수론의 계산

두 Gauss 정수의 최대공약수는 [유클리드 알고리즘](euclidean-algorithm.md)을 노름에 대해 돌려 구한다. $p\equiv 1\pmod 4$ 인 $p$ 를 $a^2+b^2$ 으로 실제 분해할 때는 $x^2\equiv-1\pmod p$ 인 $x$ 를 구한 뒤 $\gcd(p,\thinspace x+i)$ 를 계산한다. $p=13$ 이면 $5^2=25\equiv-1$ 이고 $\gcd(13,5+i)=3-2i$ 이며 $13=3^2+2^2$ 이다.

## 분기와 유체론

소수가 $\mathbb Z[i]$ 에서 분기, 분열, 불활성 가운데 어느 쪽인지를 $p \bmod 4$ 가 결정한다는 사실은 [유체론](class-field-theory.md)이 다루는 현상의 가장 작은 예다. 일반적으로 아벨 확대에서 소수의 분해 유형은 도체(conductor)를 법으로 한 합동류로 결정되며, $\mathbb Q(i)/\mathbb Q$ 의 도체가 $4$ 다.

[^1]: K. Conrad, "The Gaussian integers" — 노름, 단위원, 소원의 분류와 두 제곱수의 합. https://kconrad.math.uconn.edu/blurbs/ugradnumthy/Zinotes.pdf
[^2]: G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers*, 6th ed., Theorem 278. $r_2(n)=4(d_1(n)-d_3(n))$ 의 진술과 증명.
[^3]: Stark–Heegner 정리. 허수 이차체의 류수 $1$ 인 판별식이 아홉 개뿐임. H. M. Stark, "A complete determination of the complex quadratic fields of class-number one", Michigan Mathematical Journal 14 (1967), 1–27.

# 연관 문서

## 선수지식

- [이차 상호법칙](quadratic-reciprocity.md)
- [유클리드 정역](euclidean-domains.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #ring_theory #algebra
