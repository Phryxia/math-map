# Eisenstein 아이디얼과 Mazur 의 비틀림점 정리

# 개요

**Eisenstein 아이디얼(Eisenstein ideal)** 은 무게 2, 레벨 $N$ 의 Hecke 대수에서 $N$ 을 나누지 않는 소수 $\ell$ 마다 $T_\ell-1-\ell$ 을 모아 생성한 아이디얼이다. 유리수 계수 [타원곡선](elliptic-curves.md) 위에 위수 $11$ 인 유리점이 있을 수 있는지 묻는 문제는 곡선 하나를 보아서는 답할 수 없고, 그런 곡선 전체를 매개하는 모듈러 곡선의 유리점 문제가 된다. Mazur 는 Eisenstein 아이디얼로 모듈러 곡선의 Jacobi 다양체를 계산해 그런 유리점이 없음을 보이고, 가능한 비틀림군이 15 개뿐임을 증명했다.

# 직관

곡선 $y^2+y=x^3-x^2$ 위의 점 $P=(0,0)$ 을 거듭 더하면 $2P=(1,-1)$, $3P=(1,0)$, $4P=(0,-1)$, $5P=O$ 이므로 $P$ 는 위수 $5$ 인 유리점이다. 위수가 $11$ 인 유리점을 갖는 [타원곡선](elliptic-curves.md)이 있는지 물으면, 곡선을 하나씩 조사해서는 답이 나오지 않는다. 곡선이 무한히 많기 때문이다.

타원곡선 $E$ 와 위수 $N$ 인 점 $P$ 의 쌍 $(E,P)$ 의 동형류는 모듈러 곡선 $Y_1(N)$ 의 점이므로

$$
\exists\thinspace E/\mathbb Q\ \text{with}\ P\in E(\mathbb Q)\ \text{of order}\ N
\iff
Y_1(N)(\mathbb Q)\ne\emptyset
$$

이다. 무한히 많은 곡선에 대한 물음이 곡선 하나의 유리점 물음이 된다. $N=5$ 이면 $X_1(5)$ 의 종수가 $0$ 이라 유리점이 무한히 많고, 위의 곡선이 그 가운데 하나다. $N=11$ 이면 [모듈러 곡선](modular-curves.md) $X_1(11)$ 의 종수가 $1$ 이고, 이 곡선이 첫 문단의 $y^2+y=x^3-x^2$ 이다. 그 유리점은 $O,P,2P,3P,4P$ 다섯 개뿐이고 모두 첨점이므로, 위수 $11$ 인 유리점을 갖는 타원곡선은 없다. $N$ 이 커지면 종수도 커져 이런 직접 계산이 되지 않는다.

종수가 큰 곡선 $X$ 의 유리점은 [Jacobi 다양체](jacobian-variety.md) $J$ 로 옮겨 다룬다. 유리점 $x$ 와 기준점 $\infty$ 가 $x-\infty\in J(\mathbb Q)$ 를 주므로, $J(\mathbb Q)$ 가 유한이고 그 원소를 알면 $x$ 의 후보가 유한 개로 줄어든다. 그런데 $J(\mathbb Q)$ 가 유한인지 확인하는 일반적 방법이 없다. Mazur 는 $J$ 전체 대신 [Eisenstein 급수](eisenstein-series.md)와 합동인 부분을 잘라 낸 몫을 보고, 그 몫의 유리점이 유한임을 증명했다.

# 정의

## Hecke 대수와 Eisenstein 아이디얼

$\mathbb T=\mathbb Z\lbrack T_\ell:\ell\nmid N\rbrack\subset\mathrm{End}\big(J_0(N)\big)$ 를 무게 2, 수준 $N$ 의 Hecke 대수라 하자.

$$
I=\big(T_\ell-1-\ell\thinspace:\thinspace\ell\nmid N\big)+\big(U_q-1\thinspace:\thinspace q\mid N\big)
$$

를 Eisenstein 아이디얼이라 한다. 무게 2 의 Eisenstein 급수에서 $T_\ell$ 의 고윳값이 $1+\ell$ 이므로, $I$ 는 [Hecke 작용소](hecke-operators.md)에서 그 고윳값을 뺀 원소로 생성된다. $I$ 를 포함하는 극대 아이디얼 $\mathfrak m$ 을 **Eisenstein 극대 아이디얼(Eisenstein maximal ideal)** 이라 한다.

$N=11$ 이면 $J_0(11)$ 은 타원곡선이고 $T_\ell$ 은 $a_\ell$ 을 곱하는 사상이다. $a_2=-2$ 이므로 $T_2-3=-5$ 이고, $I$ 의 상은 $5\mathbb Z$ 를 포함한다. 그래서 $\mathbb T/I$ 는 $\mathbb Z/5$ 의 몫이다.

## 첨점군과 Eisenstein 몫

$N=p$ 가 소수일 때 두 첨점의 차가 생성하는 군 $C=\langle(0)-(\infty)\rangle\subset J_0(p)(\mathbb Q)$ 를 **첨점군(cuspidal subgroup)** 이라 한다. 그 위수는

$$
\char35{}C=n=\mathrm{num}\negthinspace\left(\frac{p-1}{12}\right)
$$

이다. $p=11$ 이면 $n=\mathrm{num}(10/12)=5$ 이다.

$\tilde J=J_0(p)/IJ_0(p)$ 처럼 $J_0(p)$ 를 Eisenstein 아이디얼 쪽으로 자른 몫을 **Eisenstein 몫(Eisenstein quotient)** 이라 한다.

# 성질

## Mazur 의 정리들

Mazur 는 1977 년에 다음을 증명했다[^1].

1. $\mathbb T/I\cong\mathbb Z/n$ 이고, $J_0(p)\lbrack I\rbrack$ 는 첨점군 $C$ 와 Shimura 부분군(Shimura subgroup) $\Sigma$ 로 생성된다. $C$ 와 $\Sigma$ 는 둘 다 위수 $n$ 인 순환군이고, Galois 가군으로 $C\cong\mathbb Z/n$, $\Sigma\cong\mu_n$ 이다.
2. Eisenstein 몫 $\tilde J$ 의 Mordell–Weil 군 $\tilde J(\mathbb Q)$ 는 유한이다.
3. Mazur 의 비틀림점 정리(Mazur's torsion theorem). $\mathbb Q$ 위 타원곡선의 비틀림 부분군은 다음 15 개 가운데 하나다.

$$
\mathbb Z/n\quad(1\le n\le10,\ n=12),\qquad
\mathbb Z/2\times\mathbb Z/2m\quad(1\le m\le4)
$$

$N=11$ 에서는 $J_0(11)$ 이 타원곡선이고 $C$ 가 위수 $5$ 인 유리점의 군이다.

## 유한성의 증명

$\ell\mid n$ 인 소수 $\ell$ 과 Eisenstein 극대 아이디얼 $\mathfrak m\ni\ell$ 에 대해 $\tilde J(\mathbb Q)/\mathfrak m$ 의 크기를 하강(descent)으로 Selmer 군으로 누른다. $J_0(p)\lbrack\mathfrak m\rbrack$ 의 성분이 $\mathbb Z/\ell$ 과 $\mu_\ell$ 이므로 그 Selmer 군은 $\mathbb Q$ 와 $\mathbb Q(\mu_\ell)$ 의 비분기 확대로 계산되고, 그런 확대가 충분히 적다는 것에서 $\tilde J(\mathbb Q)$ 가 유한이다. [Herbrand–Ribet](herbrand-ribet.md) 의 Eisenstein 합동이 원분체의 류군에 대해 쓰는 방법과 같은 꼴이다.

## 유리점의 제거

$x\in X_0(p)(\mathbb Q)$ 가 첨점이 아니라 하자. $\tilde J$ 로 내려보내고 좋은 환원을 갖는 소수 $\ell$ 에서 환원하면

$$
\tilde J(\mathbb Q)\thinspace\hookrightarrow\thinspace\tilde J(\mathbb F_\ell)
$$

가 단사다. 오른쪽은 유한군이고 위수가 계산된다. $x-\infty$ 의 상이 첨점의 상과 같아야 하므로 $x$ 의 $\bmod\thinspace\ell$ 환원이 첨점의 환원과 같아야 하고, 여러 $\ell$ 에 이 조건을 걸면 $p$ 가 크면 남는 가능성이 없다.

$X_0(p)$ 가 첨점이 아닌 유리점을 갖는 소수는

$$
p=2,3,5,7,11,13,17,19,37,43,67,163
$$

이다. $19,43,67,163$ 에서는 판별식 $-p$ 의 [복소 곱셈](complex-multiplication.md)을 갖는 곡선이 그 점이고, $11$ 에도 판별식 $-11$ 의 복소 곱셈 점이 있다. $17$ 과 $37$ 의 점은 복소 곱셈 점이 아니다. $163$ 이 이 목록에 나타나는 것과 $e^{\pi\sqrt{163}}$ 이 정수에 가까운 것은 판별식 $-163$ 의 류수가 $1$ 이라는 같은 사실에서 나온다.

## Hecke 대수의 국소 구조

Mazur 의 계산은 Eisenstein 극대 아이디얼에서의 완비화 $\mathbb T_{\mathfrak m}$ 이 [Gorenstein](gorenstein-rings.md) 환이라는 것까지 증명한다. 이 성질은 Wiles 의 $R=T$ 논법, Ribet 의 수준 내리기(level lowering), Skinner–Urban 의 Eisenstein 합동에서 사용된다.

## 다른 수체 위의 비틀림

- 이차체 위의 비틀림 부분군의 목록은 Kenku–Momose(1988)와 Kamienny(1992)가 정했다.
- 삼차체 위의 목록은 Derickx, Etropolski, van Hoeij, Morrow, Zureick-Brown 이 2021 년에 정했다[^2].
- [Merel 의 일양 유계성 정리](merel-theorem.md)는 차수 $d$ 수체 위 타원곡선의 비틀림 부분군의 위수가 $d$ 에만 의존하는 상수로 유계라는 정리다. 이 정리는 목록이 아니라 상계를 준다.

# 활용

- 주어진 곡선의 비틀림 부분군은 Nagell–Lutz 정리(Nagell–Lutz theorem)나 좋은 환원에서의 위수 계산으로 정하고, Mazur 의 목록이 후보를 15 개로 줄인다. [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)의 공식에는 비틀림 부분군의 위수가 분모에 들어간다.
- Fermat 의 마지막 정리의 증명에서 Frey 곡선의 $\bmod\thinspace p$ 표현이 기약임을 보이는 단계에 Mazur 의 정리가 사용된다. 표현이 가약이면 Frey 곡선이나 그와 동종인 곡선이 위수 $p$ 인 유리점이나 유리 $p$ 동종사상을 가져야 하고, Mazur 의 결과가 $p\ge5$ 에서 이것을 배제한다.
- $\mathbb T/I$ 의 크기를 $L$ 값으로 계산하고 합동으로 Selmer 원소를 만드는 방법은 [Iwasawa 주추측](iwasawa-main-conjecture.md)의 Mazur–Wiles 증명에서 사용된다.

[^1]: B. Mazur, *Modular curves and the Eisenstein ideal*, Publ. Math. IHES **47** (1977), 33–186. 비틀림 정리는 같은 논문과 *Rational isogenies of prime degree*, Invent. Math. **44** (1978). 일양 유계성은 L. Merel, Invent. Math. **124** (1996). 해설로는 J. Silverman, *Advanced Topics in the Arithmetic of Elliptic Curves* 와 Darmon–Diamond–Taylor 의 Fermat 의 마지막 정리 해설이 있다.
[^2]: M. Derickx, A. Etropolski, M. van Hoeij, J. S. Morrow, D. Zureick-Brown, "Sporadic cubic torsion", Algebra & Number Theory **15** (2021), 1837–1864.

# 연관 문서

## 선수지식

- [Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)
- [모듈러 곡선](modular-curves.md)

## 더 알아보기

- [Merel 의 일양 유계성 정리](merel-theorem.md)

#number_theory #theorem #algebraic_topology
