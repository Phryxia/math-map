# Künneth 공식

# 개요

**Künneth 공식(Künneth formula)** 은 두 공간의 곱공간의 호몰로지를 각 공간의 호몰로지로 계산하는 공식이다. 원환면은 원 두 개의 곱이고, 원의 호몰로지가 차수 $0$ 과 $1$ 에서 $\mathbb Z$ 이므로 원환면의 차수 $1$ 에는 두 원의 $1$ 차 순환이 하나씩 들어와 $\mathbb Z^2$ 가 된다. 꼬임이 있는 공간끼리 곱하면 이렇게 짝을 지어 세는 것만으로는 모자라고, 차수가 하나 올라간 자리에 새 꼬임이 생긴다. Künneth 공식은 그 새 꼬임까지 두 공간의 호몰로지군만으로 정한다.

# 직관

[실사영공간](real-projective-space.md) $\mathbb{RP}^2$ 두 개의 곱 $\mathbb{RP}^2\times\mathbb{RP}^2$ 의 호몰로지를 구한다. $\mathbb{RP}^2$ 는 차원 $0,1,2$ 의 세포 $e_0,e_1,e_2$ 하나씩으로 되어 있고, [CW 복합체](cw-complexes.md)(closure-finite weak topology)의 세포 사슬에서 경계는 $\partial e_2=2e_1$, $\partial e_1=0$ 이다. 호몰로지는 $H_0=\mathbb Z$, $H_1=\mathbb Z/2$, $H_2=0$ 이다.

곱공간의 세포는 세포 둘의 곱 $e_i\times e_j$ 이고 차원은 $i+j$ 다. 아홉 개의 세포를 $e_i\otimes e_j$ 로 적고, 경계는 곱의 미분처럼 앞 성분을 미분한 항과 뒤 성분을 미분한 항을 더해 정한다. 뒤 항에는 앞 성분의 차원만큼 부호 $(-1)^i$ 가 붙는다.

차수 $3$ 의 세포는 $e_2\otimes e_1$ 과 $e_1\otimes e_2$ 다. 경계를 계산하면 다음과 같다.

$$
\partial(e_2\otimes e_1)=2\thinspace e_1\otimes e_1,\qquad \partial(e_1\otimes e_2)=-2\thinspace e_1\otimes e_1
$$

$a(e_2\otimes e_1)+b(e_1\otimes e_2)$ 의 경계가 $0$ 인 것은 $a=b$ 일 때뿐이므로 차수 $3$ 의 순환은 $u=e_2\otimes e_1+e_1\otimes e_2$ 의 배수다. 차수 $4$ 의 세포 하나의 경계는 $\partial(e_2\otimes e_2)=2u$ 다. 그러므로 $H_3=\mathbb Z/2$ 다.

같은 계산으로 $H_0=\mathbb Z$, $H_1=(\mathbb Z/2)^2$, $H_2=\mathbb Z/2$, $H_4=0$ 이 나온다. $H_1$ 은 두 인자의 $H_1$ 이 하나씩 들어온 것이고, $H_2$ 는 두 $H_1$ 의 짝 $e_1\otimes e_1$ 이 만든다. 그런데 $H_3$ 에는 $i+j=3$ 인 짝 가운데 $0$ 이 아닌 것이 없다.

이 $\mathbb Z/2$ 는 두 인자의 $H_1$ 이 둘 다 $2$ 배 하면 경계가 되는 꼬임이어서 생긴다. $\partial e_2=2e_1$ 이 두 인자에서 함께 쓰여 순환 $u$ 가 생기고, $u$ 의 $2$ 배는 경계지만 $u$ 자신은 경계가 아니다.

# 정의

## 사슬 복합체의 텐서곱

두 [사슬 복합체](chain-complexes.md) $C$ 와 $D$ 의 **텐서곱(tensor product of chain complexes)** $C\otimes D$ 는 다음 사슬 복합체다.

$$
(C\otimes D)\_n=\bigoplus_{i+j=n}C_i\otimes D_j,\qquad \partial(c\otimes d)=\partial c\otimes d+(-1)^ic\otimes\partial d
$$

$c\in C_i$ 다. 부호 때문에 $\partial\partial=0$ 이 성립한다. 직관 절의 경계 계산이 $\mathbb{RP}^2$ 의 세포 사슬 복합체를 자기 자신과 텐서곱한 것이다.

## 교차곱

순환 $a\in C_i$ 와 $b\in D_j$ 에 대해 $a\otimes b$ 는 순환이고, 한쪽이 경계이면 $a\otimes b$ 도 경계다. 그래서 다음 사상이 정의된다.

$$
H_i(C)\otimes H_j(D)\to H_{i+j}(C\otimes D),\qquad \lbrack a\rbrack\otimes\lbrack b\rbrack\mapsto\lbrack a\otimes b\rbrack
$$

공간 $X,Y$ 에 대해 이것을 특이 사슬로 옮긴 사상 $H_i(X)\otimes H_j(Y)\to H_{i+j}(X\times Y)$ 을 **교차곱(cross product)** 이라 하고 $a\times b$ 로 쓴다. 직관 절에서 $H_2$ 의 생성원 $e_1\otimes e_1$ 이 $H_1$ 의 생성원 둘의 교차곱이다.

## Künneth 공식

$R$ 가 주아이디얼정역(principal ideal domain)이고 $X,Y$ 가 공간일 때, 각 $n$ 에 대해 다음 [완전열](exact-sequences.md)이 있고 분해한다[^1].

$$
0\to\bigoplus_{i+j=n}H_i(X;R)\otimes_RH_j(Y;R)\xrightarrow{\times}H_n(X\times Y;R)\to\bigoplus_{i+j=n-1}\mathrm{Tor}^R_1(H_i(X;R),H_j(Y;R))\to0
$$

$\mathrm{Tor}$ 는 [유도 함자](derived-functors.md)의 그것이다. 직관 절의 $H_3=\mathbb Z/2$ 는 $i=j=1$ 의 항 $\mathrm{Tor}^{\mathbb Z}\_1(\mathbb Z/2,\mathbb Z/2)=\mathbb Z/2$ 다.

# 성질

## Eilenberg–Zilber 정리

Eilenberg–Zilber 정리(Eilenberg–Zilber theorem)는 곱공간의 특이 사슬 복합체 $C(X\times Y)$ 가 $C(X)\otimes C(Y)$ 와 사슬 호모토피 동치라는 정리다[^1]. 두 방향의 사상은 단체의 곱을 단체로 쪼개는 shuffle 사상과 Alexander–Whitney 사상이다. 이 정리로 공간의 Künneth 공식이 사슬 복합체의 Künneth 공식으로 바뀐다. $X,Y$ 가 CW 복합체이면 직관 절처럼 세포의 곱으로 계산해도 같은 결과가 나온다.

## 사슬 복합체의 Künneth 정리

$R$ 가 주아이디얼정역이고 $C$ 가 자유 가군으로 된 사슬 복합체이면 임의의 $D$ 에 대해 다음 완전열이 있고 분해한다.

$$
0\to\bigoplus_{i+j=n}H_i(C)\otimes H_j(D)\to H_n(C\otimes D)\to\bigoplus_{i+j=n-1}\mathrm{Tor}\_1(H_i(C),H_j(D))\to0
$$

증명의 요지. 순환 $Z_i$ 와 경계 $B_i$ 는 자유 가군의 부분가군이므로 자유다. 짧은 완전열 $0\to Z\to C\to B\lbrack -1\rbrack\to0$ 에 $D$ 를 텐서곱해도 완전하고, 그 긴 완전열의 연결 사상이 $B_i\otimes H_j(D)\to Z_i\otimes H_j(D)$ 다. $0\to B_i\to Z_i\to H_i(C)\to0$ 이 $H_i(C)$ 의 자유 분해이므로 이 사상의 여핵이 $H_i(C)\otimes H_j(D)$, 핵이 $\mathrm{Tor}\_1(H_i(C),H_j(D))$ 다.

분해는 자연스럽지 않다. 연속사상이 유도하는 사상은 완전열의 두 끝을 보존하지만 분해 사상을 보존하지 않는다.

## 체 계수

$R$ 가 체 $k$ 이면 $\mathrm{Tor}$ 항이 사라진다.

$$
H_n(X\times Y;k)\cong\bigoplus_{i+j=n}H_i(X;k)\otimes_kH_j(Y;k)
$$

Betti 수를 계수로 하는 다항식 $P_X(t)=\sum_i\dim H_i(X;k)\thinspace t^i$ 에 대해 $P_{X\times Y}=P_XP_Y$ 다. $t=-1$ 을 넣으면 [Euler 지표](euler-characteristic.md)의 곱셈성 $\chi(X\times Y)=\chi(X)\chi(Y)$ 가 나온다. $\mathbb{RP}^2$ 는 $\mathbb Z/2$ 계수에서 $P=1+t+t^2$ 이고, 곱은 다음과 같다.

$$
P_{\mathbb{RP}^2\times\mathbb{RP}^2}(t)=1+2t+3t^2+2t^3+t^4
$$

정수 계수의 $H_1=(\mathbb Z/2)^2$, $H_2=\mathbb Z/2$, $H_3=\mathbb Z/2$ 를 $\mathbb Z/2$ 계수로 옮기면 호몰로지의 보편계수 정리(universal coefficient theorem)의 $\mathrm{Tor}$ 항까지 더해 차수 $1,2,3$ 에서 $2,3,2$ 가 되어 맞는다.

## 코호몰로지환

[코호몰로지](cohomology.md)의 교차곱은 사영 $p_1,p_2$ 와 컵곱으로 $a\times b=p_1^\ast a\cup p_2^\ast b$ 다. $X,Y$ 가 CW 복합체이고 체 $k$ 계수이며 $Y$ 의 각 $H^j(Y;k)$ 가 유한차원이면 교차곱이 등급환의 동형을 준다[^1].

$$
H^\ast(X\times Y;k)\cong H^\ast(X;k)\otimes_kH^\ast(Y;k)
$$

우변의 곱은 $(a\otimes b)(a'\otimes b')=(-1)^{\deg b\deg a'}aa'\otimes bb'$ 다. 정수 계수에서도 $H^\ast(Y;\mathbb Z)$ 가 각 차수에서 유한생성 자유 가군이면 같은 동형이 성립한다. 원 $S^1$ 의 코호몰로지환은 $\mathbb Z\lbrack a\rbrack/(a^2)$ 이므로 $n$ 차원 원환면 $T^n$ 의 코호몰로지환은 $1$ 차 생성원 $n$ 개의 외대수(exterior algebra)이고, $H^k(T^n)$ 의 계수는 $\binom nk$ 다.

# 활용

- [스펙트럼 수열](spectral-sequences.md). 올다발 $F\to E\to B$ 의 Serre 스펙트럼 수열은 $E_2$ 항이 $H^p(B;H^q(F))$ 이고, 자명한 다발 $E=B\times F$ 에서는 체 계수일 때 Künneth 공식과 같은 답을 낸다. Leray–Hirsch 정리(Leray–Hirsch theorem)는 올의 코호몰로지류가 전체공간의 류로 늘어나면 자명하지 않은 다발에서도 가군으로서 Künneth 꼴의 동형이 성립한다는 정리다.
- [Lefschetz 고정점 정리](lefschetz-fixed-point.md). 사상의 그래프와 대각선의 교차수를 곱공간 $X\times X$ 의 코호몰로지에서 계산할 때 대각선의 류를 Künneth 분해로 쓰고, 그 계수에서 대각합이 나온다.
- [de Rham 코호몰로지](de-rham-cohomology.md). 매끄러운 다양체의 곱에서 미분형식의 쐐기곱 $p_1^\ast\omega\wedge p_2^\ast\eta$ 가 교차곱이고, 유한차원일 때 같은 동형이 성립한다.
- [에탈 코호몰로지](etale-cohomology.md). 유한체 위 다양체의 곱에 대한 Künneth 공식이 Lefschetz 대각합 공식과 함께 Weil 추측(Weil conjectures)의 zeta 함수 계산에 쓰인다([Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)).

[^1]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002. 3.B 절이 호몰로지의 Künneth 공식과 Eilenberg–Zilber 정리, 정리 3.15 와 3.16 이 코호몰로지환의 Künneth 공식이다.

# 연관 문서

## 선수지식

- [CW 복합체](cw-complexes.md)
- [코호몰로지](cohomology.md)
- [유도 함자](derived-functors.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #algebra
