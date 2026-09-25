# 정칙 국소환

# 개요

[Krull 차원](krull-dimension.md)은 Noether 국소환 $(R,\mathfrak m)$ 에서 $\dim R\le\dim_\kappa\mathfrak m/\mathfrak m^2$ 을 준다. 오른쪽은 $\mathfrak m$ 의 최소 생성원 개수이고, 기하에서는 접공간의 차원이다.

등호가 성립하는 환이 **정칙 국소환**이다. 대수다양체의 매끄러운 점에서 국소환이 이 조건을 만족한다. 정칙성은 잉여체의 자유분해 길이로도 읽히고, 그 형태에서 유일분해정역이라는 결론이 나온다.

# 직관

평면 곡선 $y^2=x^3$ 은 원점에서 뾰족하고 $y=x^2$ 은 그렇지 않다. 이 차이를 방정식에서 계산으로 가른다. 편미분을 쓰면 $f=y^2-x^3$ 의 두 편도함수가 원점에서 모두 $0$ 이고, $g=y-x^2$ 은 $\partial g/\partial y=1$ 이다. 그런데 이 계산은 곡선을 평면에 넣은 방정식에 달려 있어서, 곡선 자체의 값이 아니다.

곡선 위의 함수만으로 같은 판정을 한다. 좌표환 $A=k\lbrack x,y\rbrack/(y^2-x^3)$ 에서 원점의 극대 아이디얼은 $\mathfrak m=(x,y)$ 다. $\mathfrak m^2$ 은 $x^2,xy,y^2$ 이 생성한다. 관계식 $y^2=x^3$ 은 $x^3$ 이 이미 $\mathfrak m^2$ 에 있으므로 $\mathfrak m/\mathfrak m^2$ 에서 아무것도 지우지 못하고, $x$ 와 $y$ 의 상이 남아 $\dim_k\mathfrak m/\mathfrak m^2=2$ 다.

포물선에서 같은 계산을 한다. $B=k\lbrack x,y\rbrack/(y-x^2)$ 에서 관계식이 $y=x^2$ 이고 $x^2\in\mathfrak m^2$ 이므로 $y$ 의 상이 $\mathfrak m/\mathfrak m^2$ 에서 $0$ 이 된다. 남는 것은 $x$ 하나이고 $\dim_k\mathfrak m/\mathfrak m^2=1$ 이다.

두 곡선의 Krull 차원은 모두 $1$ 이다. 뾰족한 점에서만 $\mathfrak m/\mathfrak m^2$ 이 차원보다 크고, 그 크기가 접공간이 곡선보다 크다는 뜻이다. 두 값이 같은 경우를 정칙이라 부른다.

# 정의

## 정칙 국소환

Noether 국소환 $(R,\mathfrak m)$ 과 잉여체 $\kappa=R/\mathfrak m$ 에 대해

$$
\dim R=\dim_\kappa\mathfrak m/\mathfrak m^2
$$

이면 $R$ 을 **정칙 국소환**이라 한다.

[Nakayama 보조정리](nakayama-lemma.md)로 $\dim_\kappa\mathfrak m/\mathfrak m^2$ 은 $\mathfrak m$ 의 최소 생성원 개수와 같고, 차원 정리로 이 개수가 $\dim R$ 이상이다. 그러므로 정칙성은 $\mathfrak m$ 이 $\dim R$ 개의 원소로 생성된다는 조건이다.

## 정칙 매개변수계

$d=\dim R$ 일 때 $\mathfrak m=(x_1,\dots,x_d)$ 를 만족하는 열 $x_1,\dots,x_d$ 를 **정칙 매개변수계**라 한다. 정칙 국소환에서만 존재한다.

## 정칙환

Noether 환 $R$ 의 모든 소 아이디얼 $\mathfrak p$ 에서 국소화 $R_\mathfrak p$ 가 정칙 국소환이면 $R$ 을 **정칙환**이라 한다. 체 위의 다항식환과 $\mathbb Z$ 가 정칙환이다.

# 성질

## 정역

**정리.** 정칙 국소환은 정역이다.[^1]

증명의 요지. $d=\dim R$ 에 대한 귀납이다. $d=0$ 이면 $\mathfrak m=\mathfrak m^2$ 이고 Nakayama 보조정리로 $\mathfrak m=0$ 이므로 $R$ 이 체다. $d\ge1$ 이면 $R$ 의 극소 소 아이디얼들과 $\mathfrak m^2$ 을 모두 피하는 $x\in\mathfrak m$ 을 소 아이디얼 회피로 고른다. $R/(x)$ 는 차원 $d-1$ 인 정칙 국소환이므로 귀납 가정으로 정역이고, 따라서 $(x)$ 가 소 아이디얼이다. $(x)$ 에 포함된 극소 소 아이디얼 $\mathfrak p$ 를 잡으면 $\mathfrak p$ 의 원소가 $ax$ 꼴인데 $x\notin\mathfrak p$ 이므로 $a\in\mathfrak p$ 이고 $\mathfrak p=x\mathfrak p$ 다. Nakayama 보조정리가 $\mathfrak p=0$ 을 준다. ∎

## Serre 의 호몰로지 판정

**정리.** Noether 국소환 $(R,\mathfrak m)$ 이 정칙인 것은 $\kappa$ 의 사영차원이 유한한 것과 같다. 이때 $R$ 위 모든 가군의 사영차원이 $\dim R$ 이하이고 그 상한에 도달하는 가군이 있다.[^2]

증명의 요지. 정칙이면 정칙 매개변수계 $x_1,\dots,x_d$ 로 만든 Koszul 복합체가 $\kappa$ 의 자유분해이고 길이가 $d$ 다. 역방향은 $\mathrm{Tor}$ 의 소멸에서 최소 자유분해의 길이를 읽어 $\mathfrak m$ 의 최소 생성원 개수를 $d$ 로 내린다. ∎

**따름정리.** 정칙 국소환의 소 아이디얼에서의 국소화가 다시 정칙 국소환이다.

사영차원이 유한하다는 조건은 국소화에서 보존되고, 정칙성의 정의를 그대로 옮기는 방법으로는 이 결론이 나오지 않는다. 이 따름정리 때문에 정칙환을 모든 소 아이디얼에서의 조건으로 정의해도 극대 아이디얼만 보는 것과 같아진다.

## 유일분해

**정리(Auslander–Buchsbaum).** 정칙 국소환은 [유일분해정역](unique-factorization-domains.md)(unique factorization domain, UFD)이다.[^3]

증명의 요지. 차원에 대한 귀납이고 Nagata 판정을 쓴다. 판정은 소원소 $x$ 에 대해 $R_x$ 가 UFD 이면 $R$ 이 UFD 라는 것이다. 정칙 매개변수계의 원소 $x$ 를 잡으면 $R_x$ 의 국소화들은 차원이 낮은 정칙 국소환이므로 귀납 가정이 적용된다. 남는 단계는 높이 $1$ 인 소 아이디얼이 주 아이디얼임을 보이는 것이고, 사영차원이 유한하다는 조건에서 그 아이디얼의 유한 자유분해를 얻어 결론을 낸다. ∎

## 차원 $1$ 의 경우

차원 $1$ 인 정칙 국소환은 이산부값환이다. $\mathfrak m=(t)$ 가 주 아이디얼이고 $0$ 이 아닌 원소가 단원 $u$ 와 정수 $n\ge0$ 으로 $ut^n$ 꼴로 유일하게 적힌다. $n$ 이 부값이다.

# 활용

- **매끄러운 점의 판정.** [대수다양체](algebraic-varieties.md)의 점 $p$ 에서 국소환이 정칙이면 $p$ 를 매끄러운 점, 아니면 특이점이라 한다. 아핀 다양체에서는 정의 방정식의 야코비 행렬의 계수가 여차원과 같은지를 보는 것과 같다.
- **Dedekind 정역.** 차원 $1$ 인 정칙 Noether 정역이 [Dedekind 정역](dedekind-domains.md)이다. 각 극대 아이디얼에서의 국소화가 이산부값환이므로 아이디얼이 소 아이디얼의 곱으로 분해된다.
- **높이 $1$ 소 아이디얼의 주성.** 정칙환에서 여차원 $1$ 인 기약 닫힌집합이 함수 하나의 영점집합이다. 인자와 선다발을 다루는 계산이 이 성질 위에 놓인다.
- **교차중복도.** 정칙 국소환 $R$ 과 유한생성 가군 $M,N$ 에 대해 $\mathrm{Tor}$ 의 길이를 교대합으로 더한 값이 두 부분다양체의 교차중복도다. 정칙성이 이 합을 유한하게 만든다.[^4]
- **Iwasawa 대수.** $\Lambda=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 은 차원 $2$ 인 정칙 국소환이고, 유한생성 가군의 구조 정리가 높이 $1$ 소 아이디얼마다의 조각으로 분해한다. [Iwasawa 주추측](iwasawa-main-conjecture.md)의 정식화가 이 분해를 쓴다.

[^1]: D. Eisenbud, *Commutative Algebra with a View Toward Algebraic Geometry* (1995), 19장.
[^2]: J.-P. Serre, "Sur la dimension homologique des anneaux et des modules noethériens", *Proc. Int. Symp. Tokyo–Nikko* (1956). 교재 서술은 H. Matsumura, *Commutative Ring Theory* (1986), 19장.
[^3]: M. Auslander, D. Buchsbaum, "Unique factorization in regular local rings", *Proc. Nat. Acad. Sci. USA* **45** (1959), 733–734.
[^4]: J.-P. Serre, *Algèbre locale, multiplicités*, Lecture Notes in Math. **11**, Springer (1965), 4장.

# 연관 문서

## 선수지식

- [Nakayama 보조정리](nakayama-lemma.md)
- [Krull 차원](krull-dimension.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #topology
