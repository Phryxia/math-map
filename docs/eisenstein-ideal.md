# Eisenstein 아이디얼과 Mazur 의 비틀림점 정리

# 개요

$\mathbb Q$ 위 [타원곡선](elliptic-curves.md)의 비틀림 부분군으로 무엇이 가능한지는 1977 년 Mazur 의 정리 전까지 유한성조차 증명되지 않았다[^1].

**정리(Mazur).** $E/\mathbb Q$ 의 비틀림군은 다음 15 개 중 하나다.

$$
\mathbb Z/n\ (1\le n\le10,\ n=12),\qquad
\mathbb Z/2\times\mathbb Z/2m\ (1\le m\le4)
$$

증명은 곡선 하나에 대한 물음을 모듈러 곡선의 유리점 문제로 바꾼다. $E$ 가 위수 $N$ 의 유리점을 가지면 $X_1(N)$ 의 유리점이 생기므로 그런 점이 없음을 보이면 된다. [모듈러 곡선](modular-curves.md) $X_0(N)$ 은 $N$ 이 클 때 종수가 크고 Faltings 이전에는 유리점 유한성도 없었다.

Mazur 가 쓴 도구가 **Eisenstein 아이디얼**이다. Hecke 대수 $\mathbb T$ 안에서

$$
I=\big(T_\ell-1-\ell\ :\ \ell\nmid N\big)\subset\mathbb T
$$

가 [Eisenstein 급수](eisenstein-series.md)의 고유값을 자른다. $J_0(N)$ 의 $I$ 소멸 부분 $J_0(N)[I]$ 는 첨점의 차이가 생성하는 유한 순환군과 밀접하고, 그 구조를 계산하면 유리점의 존재가 모순으로 이어진다. [Herbrand–Ribet](herbrand-ribet.md) 의 Eisenstein 합동이 표현을 가약으로 만드는 원리가 여기서는 Jacobian 의 산술을 통제한다.

# 직관

## 모듈러 곡선으로의 번역

$(E,P)$ 를 타원곡선과 위수 $N$ 인 점의 쌍이라 하면 그 동형류가 $Y_1(N)$ 의 점이므로

$$
\exists\thinspace E/\mathbb Q\ \text{with}\ P\in E(\mathbb Q)\ \text{of order}\ N
\iff
Y_1(N)(\mathbb Q)\ne\emptyset
$$

이다. 무한히 많은 곡선에 대한 문제가 한 곡선의 유리점 문제가 된다.

남는 것은 유리점이 없음을 증명하는 일이다. 종수 0 이나 1 이면 고전적으로 처리되지만 $N$ 이 커지면 종수도 커진다. Mazur 는 곡선 대신 Jacobian 을 본다.

## Jacobian 의 몫

$X$ 를 종수 $g\ge1$ 인 곡선, $J$ 를 그 Jacobian 이라 하자. 유리점 $x$ 와 기준점 $\infty$ 에 대해 $x-\infty\in J(\mathbb Q)$ 다. $J(\mathbb Q)$ 가 유한이고 그 유한군을 어떤 소수 $p$ 에서의 환원으로 파악할 수 있으면 $x$ 의 후보가 유한 개로 줄어든다.

첫 조건은 Mordell–Weil 계수 0 을 요구하며 일반적으로 확인하기 어렵다. 대신

$$
J_0(N)\ \longrightarrow\ J_0(N)/IJ_0(N)=:\ \text{Eisenstein 몫}
$$

으로 내려보내면 이 몫이 유한한 순환군이고 그 위수가 첨점의 차수 차이로 계산된다. 계수가 0 인 몫으로 옮기는 것이다.

## 첨점이 만드는 유한 순환군

$N=p$ 가 소수이면 $X_0(p)$ 의 첨점은 $0$ 과 $\infty$ 둘이고 그 차이가 $J_0(p)$ 안에서 유한 위수를 갖는다. 위수는

$$
n=\mathrm{num}\negthinspace\left(\frac{p-1}{12}\right)
$$

이며 이 군이 **첨점군**이다. 분자의 $p-1$ 은 Eisenstein 급수 $E_2$ 의 상수항에서, $12$ 는 판별식 $\Delta$ 의 무게에서 온다. Mazur 의 정리는 $J_0(p)[I]$ 가 정확히 이 첨점군이라는 것, 곧 Eisenstein 부분에는 첨점밖에 없다는 것이다.

그러면 유리점 $x$ 가 주는 $x-\infty$ 의 상이 첨점군 안에 놓이고 그 위수가 작으므로 $x$ 가 첨점이거나 특별한 점임이 강제된다. 특별한 점들은 CM(complex multiplication) 곡선에 대응하고 손으로 검사할 수 있다.

## Herbrand–Ribet 과의 대비

[Herbrand–Ribet](herbrand-ribet.md) 에서는 Eisenstein 합동으로 류군의 원소를 만들고, 여기서는 같은 합동으로 Jacobian 의 유리점을 없앤다. 둘 다 Eisenstein 아이디얼 근처에서 Hecke 대수가 얼마나 큰지를 묻는다. Mazur 는 $\mathbb T/I\cong\mathbb Z/n$ 임을 보였고 그 계산이 두 응용의 바탕이다.

# 정의

## Hecke 대수와 Eisenstein 아이디얼

$\mathbb T=\mathbb Z[T_\ell:\ell\nmid N]\subset\mathrm{End}\big(J_0(N)\big)$ 를 무게 2, 레벨 $N$ 의 Hecke 대수라 하자.

$$
I=\big(T_\ell-1-\ell\ :\ \ell\nmid N\big)+\big(U_q-1\ :\ q\mid N\big)
$$

가 **Eisenstein 아이디얼**이다. 생성원은 $E_2$ 형 Eisenstein 급수의 고유값 $1+\ell$ 을 빼는 원소다. 극대 아이디얼 $\mathfrak m\supset I$ 를 Eisenstein 극대 아이디얼이라 한다.

## 첨점군

$N=p$ 가 소수일 때 $C=\langle(0)-(\infty)\rangle\subset J_0(p)(\mathbb Q)$ 가 **첨점군**이고

$$
\char35{}C=n=\mathrm{num}\negthinspace\left(\frac{p-1}{12}\right)
$$

이다. $I$ 가 $C$ 를 소멸시킨다.

## Mazur 의 정리들

**정리 A.** $J_0(p)[I]=C$ 이고 $\mathbb T/I\cong\mathbb Z/n$ 이다.

**정리 B.** Eisenstein 몫 $\tilde J=J_0(p)/IJ_0(p)$ 는 $\mathbb Q$ 위 계수 0 이다.

**정리 C.** 개요의 15 개 목록이 $\mathbb Q$ 위 타원곡선 비틀림군의 전부다.

정리 B 가 핵심이다. Eisenstein 몫의 $L$ 함수가 $s=1$ 에서 소멸하지 않음을 보이는 대신 $\tilde J$ 의 $\mathbb Q$ 유리점을 직접 통제한다.

# 성질

## 계수 0 의 증명

$\tilde J$ 위의 유리점은 $I$ 를 소멸시키는 [Galois 표현](galois-representations.md)을 준다. 그런 표현은 가약이고 반단순화가 $1\oplus\chi_{\mathrm{cyc}}$ 다. 계수가 양수라면 $\mathbb Q$ 위에 $\mathbb Z$ 만큼의 점이 있어야 하고, 하강을 Eisenstein 방향으로 수행하면 그 점들이 순환체의 불분기 확대를 만든다. 첨점군의 위수가 작다는 계산이 그런 확대의 존재를 막는다.

정리 A 의 계산이 정리 B 의 유한성으로 번역되는 구조이며, 순환체의 류군이 작다는 사실이 Jacobian 의 계수를 0 으로 강제한다. 여기서 [Bernoulli 수](bernoulli-numbers.md)와 $\frac{p-1}{12}$ 의 분자가 다시 등장한다.

## 유리점의 제거

$x\in X_0(p)(\mathbb Q)$ 가 첨점이 아니라 하자. $\tilde J$ 로 내려보내고 좋은 환원을 갖는 소수 $\ell$ 에서 환원하면

$$
\tilde J(\mathbb Q)\ \hookrightarrow\ \tilde J(\mathbb F_\ell)
$$

가 단사다. 오른쪽은 유한군이고 위수가 계산된다. $x-\infty$ 의 상이 첨점군에 놓이므로 $x$ 의 $\bmod\ \ell$ 환원이 첨점의 환원과 같아야 하고, 여러 $\ell$ 에 이 조건을 걸면 남는 가능성이 없다.

$p$ 가 작을 때는 실제로 유리점이 있다. $X_0(p)$ 가 유리점을 갖는 소수는

$$
p=2,3,5,7,11,13,17,19,37,43,67,163
$$

이고 마지막 여섯은 CM 점에 대응한다. $163$ 이 여기 나타나는 것과 $e^{\pi\sqrt{163}}$ 이 거의 정수인 것은 같은 사실에서 나온다.

## $\mathbb T$ 의 구조

Mazur 의 계산은 Eisenstein 극대 아이디얼에서의 완비화 $\mathbb T_{\mathfrak m}$ 이 Gorenstein 이고 $\mathbb Z_p$ 위 유한평탄임까지 준다. 이 성질이 Wiles 의 $R=T$ 논법, Ribet 의 레벨 낮추기, Skinner–Urban 의 Eisenstein 합동에서 반복해 쓰인다. Hecke 대수의 국소 구조를 정확히 아는 방식이 이 논문에서 시작되었다.

## 일반화와 한계

| 물음 | 상태 |
|---|---|
| $\mathbb Q$ 위 비틀림 | 해결 (Mazur) |
| 이차체 위 비틀림 | 해결 (Kamienny, Kenku–Momose) |
| 차수 $d$ 수체 위 일양 유계성 | 해결 ([Merel](merel-theorem.md)) |
| $d\ge3$ 의 명시적 목록 | 부분적으로만 |

Merel 의 정리는 목록이 아니라 유계를 준다. 명시적 목록은 $d=3$ 정도까지 알려져 있다.

# 활용

- 비틀림군이 15 개뿐이라는 사실이 타원곡선 데이터베이스의 구조를 정한다. 주어진 곡선의 비틀림군은 Nagell–Lutz 나 좋은 환원에서의 위수 계산으로 확정되고 Mazur 의 목록이 후보를 자른다. [BSD](birch-swinnerton-dyer.md)(Birch–Swinnerton-Dyer) 공식에서 비틀림 항이 분모에 들어가므로 순위 계산의 전처리이기도 하다.
- Frey 곡선의 $\bmod\ p$ 표현이 기약임을 보이는 단계에서 이 정리가 쓰인다. 표현이 가약이면 Eisenstein 상황이 되고 위 목록이 그 가능성을 배제한다.
- $\mathbb T/I$ 의 크기를 $L$ 값으로 계산하는 방식이 이후 합동으로 Selmer 원소를 만드는 논법의 틀이 되었다. [Iwasawa 주추측](iwasawa-main-conjecture.md)의 Mazur–Wiles 증명이 직접적인 후속이다.

[^1]: B. Mazur, *Modular curves and the Eisenstein ideal*, Publ. Math. IHES **47** (1977), 33–186. 비틀림 정리는 같은 논문과 *Rational isogenies of prime degree*, Invent. Math. **44** (1978). 일양 유계성은 L. Merel, Invent. Math. **124** (1996). 해설로는 J. Silverman, *Advanced Topics in the Arithmetic of Elliptic Curves* 와 Darmon–Diamond–Taylor 의 FLT 해설이 있다.

# 연관 문서

## 선수지식

- [Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)
- [모듈러 곡선](modular-curves.md)

## 더 알아보기

- [Merel 의 일양 유계성 정리](merel-theorem.md)

#number_theory #theorem #algebraic_topology
