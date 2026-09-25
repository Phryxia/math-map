# Krull 차원

# 개요

벡터 공간의 차원은 기저의 개수다. 다항식환에는 기저가 없고, $k[x,y]$ 는 $k$ 위에서 무한 차원이지만 이 환이 좌표환인 평면은 $2$ 차원이다.

**Krull 차원**은 [소 아이디얼](prime-ideals.md)의 포함 사슬이 얼마나 길어지는지로 환의 차원을 잰다. [Noether 환](noetherian-rings.md)에서는 이 값이 극대 아이디얼을 정의하는 원소의 최소 개수와 같고, 방정식 하나가 차원을 얼마나 떨어뜨리는지도 정해진다.

# 직관

평면 안의 기약 닫힌 집합을 포함 순서로 늘어놓는다. 한 점, 그 점을 지나는 기약 곡선, 평면 전체가 차례로 커지는 세 단계다. 단계 사이의 화살표가 둘이므로 이 수를 평면의 차원으로 삼는다.

같은 사슬을 좌표환 $k[x,y]$ 로 옮기면 포함이 뒤집혀

$$
(0)\subsetneq(f)\subsetneq(x-a,\thinspace y-b)
$$

가 된다. $f$ 는 그 기약 곡선의 방정식이고 세 아이디얼이 모두 소 아이디얼이다. 소 아이디얼의 사슬에서 화살표의 개수를 세면 $2$ 다.

정의는 이것으로 되지만 계산이 막힌다. $\mathbb A^3$ 안의 곡면 $V(g)$ 의 차원이 $2$ 임을 이 정의로 보려면 $k[x,y,z]/(g)$ 의 소 아이디얼 사슬을 전부 훑어 길이 $2$ 를 넘는 것이 없음을 확인해야 하는데, 소 아이디얼은 무한히 많고 목록이 없다.

물음을 바꿔 방정식 하나가 차원을 얼마나 떨어뜨리는지 묻는다. 답은 많아야 $1$ 이다. 이 상한을 알면 $\mathbb A^3$ 에서 $g$ 하나를 잘라 얻은 것의 차원이 $2$ 이상임이 나오고, 다항식환의 차원이 변수 개수와 같다는 사실을 함께 쓰면 $2$ 로 정해진다. 사슬을 훑는 대신 자르는 횟수를 세는 것이 차원 이론의 계산 방법이다.

# 정의

## 사슬과 차원

환 $R$ 의 소 아이디얼 사슬

$$
\mathfrak p_0\subsetneq\mathfrak p_1\subsetneq\cdots\subsetneq\mathfrak p_n
$$

의 길이는 $n$ 이다. 사슬 길이의 상한이 $R$ 의 **Krull 차원** $\dim R$ 이다.

체는 $0$ 이고, $\mathbb Z$ 와 $k[x]$ 는 $1$ 이다. 영환의 차원은 $-1$ 로 둔다.

## 높이

소 아이디얼 $\mathfrak p$ 로 끝나는 사슬 길이의 상한이 $\mathfrak p$ 의 **높이** $\mathrm{ht}(\mathfrak p)$ 다. 국소화로 옮기면

$$
\mathrm{ht}(\mathfrak p)=\dim R_\mathfrak p
$$

이고, $\dim R$ 은 극대 아이디얼들의 높이의 상한이다.

## 정의 계열

Noether 국소환 $(R,\mathfrak m)$ 에서 원소 $x_1,\dots,x_d$ 가 생성하는 아이디얼의 근기가 $\mathfrak m$ 이면 이 원소들을 **정의 계열**이라 한다. $\mathfrak m$ 자신이 유한 생성이므로 정의 계열은 늘 있다.

# 성질

## 차원 정리

**정리.** Noether 국소환 $(R,\mathfrak m)$ 에서 다음 세 값이 같다.[^1]

- Krull 차원 $\dim R$
- 정의 계열의 최소 길이
- $\ell(R/\mathfrak m^{n+1})$ 이 큰 $n$ 에서 일치하는 다항식의 차수

$\ell$ 은 가군의 길이다. 셋을 순환 부등식으로 잇는다. 정의 계열의 길이가 $d$ 이면 Hilbert 다항식의 차수가 $d$ 이하이고, 그 차수가 $e$ 이면 $\dim R\le e$ 이며, $\dim R=d'$ 이면 길이 $d'$ 인 정의 계열을 소 아이디얼을 피해 가며 원소를 하나씩 고르는 방법으로 만든다. ∎

이 정리로 차원이 유한임이 따라 나온다. Noether 국소환의 차원은 $\mathfrak m$ 의 생성원 개수를 넘지 않는다.

## Krull 높이 정리

**정리.** $R$ 이 Noether 이고 $\mathfrak p$ 가 $(f)$ 의 극소 소인자이면 $\mathrm{ht}(\mathfrak p)\le1$ 이다. 원소 $n$ 개가 생성하는 아이디얼의 극소 소인자이면 높이가 $n$ 이하다.[^1]

$R\_\mathfrak p$ 로 옮기면 $f$ 하나가 정의 계열이므로 차원 정리가 곧바로 상한을 준다. ∎

방정식 하나를 더할 때 차원이 $1$ 보다 많이 떨어지지 않는다는 것은 이 정리의 역 부등식이고, 극소 소인자를 잡아 같은 논법을 적용해 얻는다.

## 유한생성 대수

**정리.** $R$ 이 체 $k$ 위의 유한생성 정역이면

$$
\dim R=\mathrm{trdeg}\_k\thinspace\mathrm{Frac}(R)
$$

이고 $R$ 의 모든 극대 사슬의 길이가 같다.[^2]

Noether 정규화로 $R$ 을 다항식환 $k\lbrack y_1,\dots,y_d\rbrack$ 위의 유한 가군으로 만든다. 유한 확대는 소 아이디얼 사슬을 보존하므로 차원이 옮겨 가고, 다항식환 쪽에서 $d$ 가 초월차수다. ∎

**따름정리.** $\dim k\lbrack x_1,\dots,x_n\rbrack=n$ 이다.

## 다항식환과 변수 추가

$R$ 이 Noether 이면 $\dim R\lbrack x\rbrack=\dim R+1$ 이다. Noether 조건을 빼면 이 등식이 깨져서, 차원 $1$ 인 환 $R$ 로 $\dim R\lbrack x\rbrack=3$ 을 만들 수 있다.[^2]

## 정칙 국소환

Noether 국소환 $(R,\mathfrak m)$ 과 잉여체 $\kappa=R/\mathfrak m$ 에 대해

$$
\dim R\le\dim_\kappa\mathfrak m/\mathfrak m^2
$$

이다. 오른쪽이 $\mathfrak m$ 의 최소 생성원 개수이고 정의 계열이 될 수 있으므로 차원 정리가 부등식을 준다. 등호가 성립하면 $R$ 을 **정칙 국소환**이라 한다. [Nakayama 보조정리](nakayama-lemma.md)가 오른쪽 값을 생성원 개수로 읽는 자리다.

# 활용

- **대수다양체의 차원.** 기약 [대수다양체](algebraic-varieties.md)의 차원을 좌표환의 Krull 차원으로 정의한다. 유한생성 대수 정리로 이 값이 유리함수체의 초월차수와 같고, 극대 사슬의 길이가 일정하므로 차원이 국소적으로 변하지 않는다.
- **특이점 판정.** 다양체의 점에서 국소환이 정칙이면 매끄러운 점, 아니면 특이점이다. $\dim_\kappa\mathfrak m/\mathfrak m^2$ 는 접공간의 차원이므로 판정은 접공간이 다양체보다 큰지를 보는 것이다.
- **Dedekind 정역.** 차원 $1$ 인 Noether 정칙 정역이 [Dedekind 정역](dedekind-domains.md)이다. 높이 정리로 $0$ 이 아닌 소 아이디얼이 모두 극대가 되고, 아이디얼이 소 아이디얼의 곱으로 분해된다.
- **Morley 위수와의 일치.** 대수적으로 닫힌 체에서 정의 가능 집합의 Morley 위수가 Zariski 닫음의 차원과 같다. [안정 이론](stable-theories.md)의 성질 절이 이 일치를 든다.
- **Iwasawa 대수.** $\Lambda=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 가 $2$ 차원 정칙 국소환이고, 유한생성 가군의 구조 정리가 높이 $1$ 소 아이디얼마다의 조각으로 분해한다. [Iwasawa 주 추측](iwasawa-main-conjecture.md)의 정식화가 이 분해 위에 놓인다.

[^1]: D. Eisenbud, *Commutative Algebra with a View Toward Algebraic Geometry* (1995), 10–11장. 차원 정리와 Krull 높이 정리가 이 두 장에 있다.
[^2]: H. Matsumura, *Commutative Ring Theory* (1986), 5장과 14장. 다항식환의 차원이 Noether 조건 없이 깨지는 예가 부록에 있다.

# 연관 문서

## 선수지식

- [소 아이디얼](prime-ideals.md)
- [Noether 환](noetherian-rings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #topology
