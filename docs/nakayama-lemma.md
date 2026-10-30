# Nakayama 보조정리

# 개요

**Nakayama 보조정리(Nakayama's lemma)** 는 유한생성 [가군](modules.md)의 생성원을 몫 하나에서 셀 수 있게 하는 보조정리다. 분모가 $p$ 로 나누어지지 않는 분수 전체의 환 위의 유한생성 가군 $M$ 에서, $M/pM$ 은 원소가 $p$ 개인 체 위의 [벡터 공간](vector-spaces.md)이라 생성원 개수가 차원으로 바로 나온다. Nakayama 보조정리는 $M/pM$ 의 기저를 $M$ 으로 들어 올리면 그대로 $M$ 의 생성원이 됨을 보여, 국소환 위 가군의 생성원 문제를 선형대수로 푼다.

# 직관

분모가 $p$ 로 나누어지지 않는 분수 전체의 환 $R=\mathbb Z\_{(p)}$ 는 [국소환](localization-rings.md)이고, 가역이 아닌 원소는 $p$ 의 배수뿐이다. $M=R^2$ 에서 $u=(1,p)$ 와 $v=(p,1)$ 이 $M$ 을 생성하는지 본다. 직접 풀면 $u-pv=(1-p^2,0)$ 이고 $1-p^2$ 는 $p$ 로 나누어지지 않아 $R$ 에서 가역이므로 $(1,0)$ 이 $u,v$ 로 쓰이고, 같은 계산으로 $(0,1)$ 도 쓰인다.

계산에서 쓴 것은 $1-p^2$ 가 가역이라는 것뿐이다. $p$ 로 나눈 나머지만 보면 $u,v$ 는 $(1,0),(0,1)$ 이 되어 $M/pM$ 의 기저이고, 나머지에서 생성하면 $M$ 에서도 생성한다는 것이 Nakayama 보조정리다. 이때 유한생성 조건이 있어야 한다. $M=\mathbb Q$ 를 잡으면 $pM=M$ 이어서 $M/pM=0$ 은 빈 집합이 생성하지만 $M\ne 0$ 이다.

# 정의

$R$ 를 가환환이라 하자. $R$ 의 **Jacobson 근기(Jacobson radical)** $\mathrm{rad}(R)$ 는 모든 극대 [아이디얼](ideals-quotient-rings.md)의 교집합이다.

$$
\mathrm{rad}(R)=\bigcap_{\mathfrak m \text{ 극대}} \mathfrak m
$$

$\mathbb Z$ 의 극대 아이디얼은 소수 $q$ 의 $q\mathbb Z$ 이고 모든 소수로 나누어지는 정수는 $0$ 뿐이므로 $\mathrm{rad}(\mathbb Z)=0$ 이다. 국소환에서는 극대 아이디얼이 하나이므로 $\mathrm{rad}(R)=\mathfrak m$ 이고, 직관 절의 $\mathbb Z\_{(p)}$ 에서는 $p\mathbb Z\_{(p)}$ 다.

# 성질

## Jacobson 근기의 판정

$a\in\mathrm{rad}(R)$ 인 것과 모든 $x\in R$ 에 대해 $1-ax$ 가 가역인 것이 동치다. $1-ax$ 가 가역이 아니면 어떤 극대 아이디얼 $\mathfrak m$ 에 들어가고, $a\in\mathfrak m$ 이면 $1\in\mathfrak m$ 이 되어 모순이다. 역으로 $a\notin\mathfrak m$ 이면 $\mathfrak m+(a)=R$ 에서 $1=y+ax$ 꼴이 나와 $1-ax\in\mathfrak m$ 이 가역이 아니다.

## 유한생성 가군의 소멸

$M$ 이 유한생성 $R$ 가군이고 $I\subseteq\mathrm{rad}(R)$ 인 아이디얼에 대해 $IM=M$ 이면 $M=0$ 이다[^1].

증명. $M\ne 0$ 이라 하고 생성원의 최소 개수를 $n\ge 1$ 이라 하자. $M=\langle x_1,\dots,x_n\rangle$ 에서 $x_n\in M=IM$ 이므로 다음처럼 쓸 수 있다.

$$
x_n=\sum_{i=1}^{n} a_i x_i,\qquad a_i\in I
$$

옮기면 $(1-a_n)x_n=\sum_{i\lt n}a_ix_i$ 다. $a_n\in\mathrm{rad}(R)$ 이므로 $1-a_n$ 이 가역이고, 따라서 $x_n$ 이 앞의 $n-1$ 개로 생성된다. 최소성에 어긋난다.

## 생성원의 올림

$(R,\mathfrak m)$ 이 국소환이고 $k=R/\mathfrak m$ 라 하자. 유한생성 가군 $M$ 의 원소 $x_1,\dots,x_n$ 에 대해 다음이 동치다.

- $x_1,\dots,x_n$ 이 $M$ 을 생성한다.
- 상 $\bar x_1,\dots,\bar x_n$ 이 $k$ 벡터 공간 $M/\mathfrak mM$ 을 생성한다.

증명. 한 방향은 자명하다. 역방향은 $N=\langle x_1,\dots,x_n\rangle$ 로 두면 $M=N+\mathfrak mM$ 이므로 $\mathfrak m(M/N)=M/N$ 이고, $M/N$ 이 유한생성이므로 보조정리로 $M/N=0$ 이다.

따라서 $M$ 의 최소 생성원 개수는 $\dim_k M/\mathfrak mM$ 과 같고, $M/\mathfrak mM$ 의 기저를 들어 올린 것이 최소 생성계다.

## 사영가군과 자유가군

국소환 위의 유한생성 사영가군은 자유가군이다. $\dim_k M/\mathfrak mM=n$ 인 기저를 들어 올려 전사사상 $R^n\to M$ 을 만들면, 사영성으로 이 사상이 분해되어 $R^n\cong M\oplus K$ 가 되고, 잉여체로 내리면 $K/\mathfrak mK=0$ 이므로 보조정리가 $K=0$ 을 준다.

## 행렬식 꼴

$M$ 이 $n$ 개로 생성되고 $\varphi\colon M\to M$ 이 $\varphi(M)\subseteq IM$ 인 $R$ 준동형이면, $\varphi$ 는 다음 꼴의 관계를 만족한다.

$$
\varphi^n+c_1\varphi^{n-1}+\cdots+c_n=0,\qquad c_j\in I^j
$$

생성원에 대한 [행렬](matrices.md) 표현에 Cayley–Hamilton 을 적용해 얻는다. $\varphi=\mathrm{id}$ 를 넣으면 $1+c_1+\cdots+c_n$ 이 $M$ 을 소멸시키므로, $IM=M$ 일 때 $M$ 을 소멸시키는 $1+a\ (a\in I)$ 꼴의 원소가 존재한다는 형태가 나온다. 이 진술은 $I\subseteq\mathrm{rad}(R)$ 가정 없이도 성립한다.

# 활용

## 국소환의 접공간

$(R,\mathfrak m)$ 이 Noether 국소환일 때 $\mathfrak m/\mathfrak m^2$ 는 잉여체 위의 유한차원 벡터 공간이고, 그 차원이 $\mathfrak m$ 의 최소 생성원 개수다. 대수기하에서 이 공간의 쌍대가 점에서의 접공간이고, 차원이 [Krull 차원](krull-dimension.md)과 같은 점을 정칙점이라 한다.

## 가군의 최소 자유 분해

최소 생성계를 올리는 절차를 핵에 대해 반복하면 각 단계의 계수가 $\dim_k$ 로 결정되는 자유 분해를 얻는다. 이 최소성이 있어 Betti 수가 가군의 불변량이 된다.

## 정수적 확대

$R\subseteq S$ 가 환의 확대이고 $S$ 가 $R$ 가군으로 유한생성이면, 위 [행렬식](determinants.md) 꼴이 $S$ 의 원소가 $R$ 계수 일계수 다항식을 만족함을 준다. 정수적 확대의 기본 성질을 이 논증으로 얻는다. [Dedekind 정역](dedekind-domains.md)의 정수적 폐포 조건도 같은 행렬식 꼴로 다룬다.

[^1]: M. Atiyah and I. Macdonald, *Introduction to Commutative Algebra*, Proposition 2.6 과 Corollary 2.7. Nakayama 보조정리와 생성원의 올림. 행렬식 꼴은 Proposition 2.4.

# 연관 문서

## 선수지식

- [가군](modules.md)
- [환의 국소화](localization-rings.md)

## 더 알아보기

- [정칙 국소환](regular-local-rings.md)
- [사영가군](projective-modules.md)

#ring_theory #algebra #linear_algebra
