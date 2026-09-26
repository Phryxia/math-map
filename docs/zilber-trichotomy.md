# Zilber 삼분법

# 개요

[Morley 범주성 정리](morley-categoricity.md)는 비가산 범주적 이론의 모형이 강최소 집합 위의 차원 하나로 정해진다고 말한다. 그 차원을 만드는 폐포 연산은 이론마다 다르고, 고전적인 예에서는 세 모양이 나온다. 상등만 갖춘 집합, 나눗셈환 위의 벡터공간, 대수적으로 닫힌 체다.

**Zilber 삼분법**은 강최소 집합의 기하가 이 셋 가운데 하나라는 진술이다. Zilber 가 추측으로 내놓았고 Hrushovski 가 반례를 구성했다. 기하에 위상 조건을 더한 Zariski 기하에서는 삼분법이 정리로 성립한다.

# 직관

강최소 집합 $D$ 의 차원은 대수적 폐포 $\mathrm{acl}$ 이 만든다. 세 이론에서 이 연산을 계산한다. 상등만 갖춘 무한집합에서 유한집합을 정의하는 논리식의 해는 매개변수로 쓴 원소뿐이므로 $\mathrm{acl}(A)=A$ 다. 체 $F$ 위의 무한차원 벡터공간에서 $\mathrm{acl}(A)$ 는 $A$ 가 생성하는 부분공간이다. 대수적으로 닫힌 체 $K$ 에서 $\mathrm{acl}(A)$ 는 $\mathbb Q(A)$ 의 대수적 폐포다. 차원은 차례로 원소 개수, 선형 차원, 초월차수다.

벡터공간에서 유한차원 부분공간 $U$ 와 $V$ 는 $\dim(U+V)+\dim(U\cap V)=\dim U+\dim V$ 를 만족한다. 같은 식을 체에서 확인한다. $a,b,t$ 를 대수적으로 독립인 원소로 잡고 $s=at+b$ 라 둔다. $X=\mathrm{acl}(a,b)$ 와 $Y=\mathrm{acl}(t,s)$ 는 차원이 각각 $2$ 이고, 두 집합을 합쳐 폐포를 취하면 $\mathrm{acl}(a,b,t)$ 이므로 차원이 $3$ 이다. 교집합은 $\mathrm{acl}(\emptyset)$ 이고 차원이 $0$ 이다. 좌변은 $3+0=3$ 이고 우변은 $2+2=4$ 다.

$X$ 는 직선 $y=ax+b$ 를 정하고 $Y$ 는 그 직선 위의 점 $(t,s)$ 를 정한다. 점 하나가 직선의 매개변수 두 개와 얽혀 합집합의 차원을 하나 깎는다. 상등만 갖춘 집합과 벡터공간에는 점과 곡선이 이렇게 얽히는 족이 없어 위 등식이 항상 성립한다. 등식이 성립하는 기하를 모듈러라 하고, 삼분법은 모듈러가 아닌 기하가 체에서만 나온다는 진술이다.

# 정의

## 프리기하

집합 $D$ 와 연산 $\mathrm{cl}:\mathcal P(D)\to\mathcal P(D)$ 가 다음 넷을 만족하면 $(D,\mathrm{cl})$ 을 **프리기하**라 한다.

- $A\subseteq\mathrm{cl}(A)$ 이고 $\mathrm{cl}(\mathrm{cl}(A))=\mathrm{cl}(A)$ 이다.
- $A\subseteq B$ 이면 $\mathrm{cl}(A)\subseteq\mathrm{cl}(B)$ 이다.
- $b\in\mathrm{cl}(A)$ 이면 유한한 $A_0\subseteq A$ 가 있어 $b\in\mathrm{cl}(A_0)$ 이다.
- $b\in\mathrm{cl}(A\cup\lbrace c\rbrace)\setminus\mathrm{cl}(A)$ 이면 $c\in\mathrm{cl}(A\cup\lbrace b\rbrace)$ 이다.

넷째가 교환법칙이고, 이것으로 극대 독립집합의 크기가 하나로 정해진다. 그 크기가 **차원** $\dim$ 이다. 강최소 집합에서는 $\mathrm{cl}=\mathrm{acl}$ 이 프리기하를 이룬다.

$\mathrm{cl}(\emptyset)=\emptyset$ 이고 모든 $a$ 에서 $\mathrm{cl}(\lbrace a\rbrace)=\lbrace a\rbrace$ 이면 **기하**라 한다. 프리기하는 $\mathrm{cl}(\emptyset)$ 을 버리고 폐포가 같은 점들을 한 점으로 묶어 기하로 바꾼다.

## 자명, 모듈러, 국소 모듈러

프리기하 $(D,\mathrm{cl})$ 에 세 조건을 둔다.

- 모든 $A$ 에서 $\mathrm{cl}(A)=\bigcup_{a\in A}\mathrm{cl}(\lbrace a\rbrace)$ 이면 **자명**하다.
- 유한차원 닫힌집합 $X,Y$ 마다 $\dim\mathrm{cl}(X\cup Y)+\dim(X\cap Y)=\dim X+\dim Y$ 이면 **모듈러**다.
- 어떤 $a\in D$ 에 대해 $\mathrm{cl}\_a(A)=\mathrm{cl}(A\cup\lbrace a\rbrace)$ 가 모듈러이면 **국소 모듈러**다.

자명한 기하는 모듈러이고, 모듈러 기하는 국소 모듈러다.

## 삼분법의 진술

강최소 집합 $D$ 의 기하에 대한 다음 진술이 **Zilber 삼분법**이다. $D$ 의 기하는 자명하거나, 어떤 나눗셈환 위 벡터공간의 부분공간 기하와 같거나, 대수적으로 닫힌 체 $K$ 위에서 $K$ 의 대수적 폐포가 주는 기하와 같다. 세 갈래는 차례로 국소 모듈러의 두 경우와 그 여집합에 해당한다.

# 성질

## 국소 모듈러 기하의 분류

**정리.** 강최소 집합의 기하가 국소 모듈러이면 자명하거나, 어떤 나눗셈환 $F$ 위 벡터공간에서 유도된 사영공간의 기하와 같다.[^1]

증명의 요지. 비자명한 국소 모듈러 기하에서는 차원 $2$ 인 닫힌집합 안에 차원 $1$ 짜리 부분들이 $1$ 차원 족을 이루고 놓인다. 이 족에 군 배치 정리를 적용해 정의 가능한 강최소 아벨군 $G$ 를 얻는다. $G$ 위의 정의 가능 자기준동형이 이루는 환 $F$ 는 나눗셈환이고, $G$ 를 $F$ 위 벡터공간으로 보면 원래 기하가 그 부분공간 기하와 같다. ∎

## Hrushovski 의 반례

**정리.** 자명하지도 국소 모듈러도 아니면서 무한 체를 해석하지 않는 강최소 집합이 있다.[^2]

구성의 요지. 언어를 삼항 관계 $R$ 하나로 두고 유한 구조 $A$ 에 사전차원

$$
\delta(A)=\vert A\vert-\vert R^A\vert
$$

을 준다. $R^A$ 는 $A$ 에서 성립하는 $R$ 관계의 개수다. 모든 부분구조에서 $\delta\ge 0$ 인 유한 구조만 모아 자기 매장에 닫힌 족을 만들고 Fraïssé 극한 $M$ 을 취한다. $M$ 에서

$$
d(A)=\min\lbrace\delta(B):A\subseteq B\subseteq M\text{ 이고 }B\text{ 는 유한}\rbrace
$$

이 프리기하의 차원이 되고, 족을 만들 때 $\delta$ 가 떨어지는 폭에 제한을 걸면 $d$ 가 유한한 값에 머물러 이론이 강최소가 된다.

이 기하는 모듈러가 아니다. $R$ 로 얽힌 점들에서 $\delta$ 가 떨어지므로 모듈러 등식의 좌변이 우변보다 작아진다. 동시에 $R$ 이 주는 얽힘이 약해 덧셈과 곱셈을 함께 해석할 족이 나오지 않는다.

## Zariski 기하 정리

**정리.** 강최소 집합이 Zariski 기하이면 삼분법이 성립한다. 국소 모듈러가 아니면 대수적으로 닫힌 체 $K$ 가 해석되고 그 기하는 $K$ 위 대수곡선의 기하와 같다.[^3]

Zariski 기하는 각 거듭제곱 $D^n$ 에 Noether 위상이 주어지고 다음 셋을 만족하는 강최소 집합이다. 좌표 사영과 대각집합이 닫혀 있다. 기약 닫힌집합의 사영은 닫힌집합에서 차원이 더 낮은 닫힌집합을 뺀 것을 포함한다. 기약 닫힌집합 $X,Y\subseteq D^n$ 의 성분마다 $\dim(X\cap Y)\ge\dim X+\dim Y-n$ 이 성립한다.

셋째 조건이 반례를 막는다. Hrushovski 구성의 사전차원은 얽힌 점들에서 교차의 차원을 이 부등식보다 낮게 떨어뜨린다.

# 활용

- **Mordell–Lang 추측의 함수체 경우.** 분리적으로 닫힌 체와 [미분적으로 닫힌 체](differentially-closed-fields.md)에서 삼분법 유형의 분류를 적용해 준아벨 다양체의 부분다양체와 유한생성 부분군의 교차를 결정한다.[^4]
- **Manin–Mumford 추측.** 차분체의 모형론에서 같은 방법이 아벨 다양체의 꼬임점과 곡선의 교차가 유한임을 준다.[^5]
- **미분적으로 닫힌 체.** 표수 $0$ 인 미분적으로 닫힌 체의 이론에서 강최소 집합의 삼분법이 성립한다. 자명한 갈래에 상수체 밖의 일반해가, 체의 갈래에 상수체가 놓인다.
- **o-최소 구조의 분류.** [o-최소성](o-minimality.md)을 만족하는 구조에서 대응하는 삼분법이 성립한다. 한 점 주변의 정의 가능 구조가 순서만 있는 경우, 순서 가군인 경우, 실폐체가 해석되는 경우로 갈린다.[^6]

[^1]: E. Hrushovski, "Locally modular regular types", *Classification Theory* (Chicago 1985), Lecture Notes in Math. **1292**, Springer (1987). 교재 서술은 A. Pillay, *Geometric Stability Theory*, Oxford (1996), 2장과 5장.
[^2]: E. Hrushovski, "A new strongly minimal set", *Ann. Pure Appl. Logic* **62** (1993), 147–166.
[^3]: E. Hrushovski, B. Zilber, "Zariski geometries", *J. Amer. Math. Soc.* **9** (1996), 1–56.
[^4]: E. Hrushovski, "The Mordell–Lang conjecture for function fields", *J. Amer. Math. Soc.* **9** (1996), 667–690.
[^5]: E. Hrushovski, "The Manin–Mumford conjecture and the model theory of difference fields", *Ann. Pure Appl. Logic* **112** (2001), 43–115.
[^6]: Y. Peterzil, S. Starchenko, "A trichotomy theorem for o-minimal structures", *Proc. London Math. Soc.* **77** (1998), 481–523.

# 연관 문서

## 선수지식

- [Morley 범주성 정리](morley-categoricity.md)

## 더 알아보기

- [미분적으로 닫힌 체](differentially-closed-fields.md)
- [Mordell–Lang 추측](mordell-lang.md)

#logic #foundations #algebra
