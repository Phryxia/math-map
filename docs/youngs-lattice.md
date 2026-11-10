# Young 격자

# 개요

**Young 격자(Young's lattice)** 는 모든 분할의 Young 도형을 한 도형이 다른 도형에 들어가는 관계로 늘어놓은 순서다. 빈 도형에서 칸을 하나씩 붙여 매번 도형이 되게 하면서 $(2,1)$ 을 만드는 방법은 $(1)$, $(2)$ 를 거치는 것과 $(1)$, $(1,1)$ 을 거치는 것의 둘이다. 이 경로의 수가 표준 Young 대각표의 수이므로, 대각표에 관한 등식을 격자 위의 경로를 세는 계산으로 증명한다.

# 직관

빈 도형에서 $(2,1)$ 까지 가는 두 경로에서 $k$ 번째로 붙인 칸에 $k$ 를 적는다. $(1)$, $(2)$ 를 거치면 첫 행이 $1,2$ 이고 둘째 행이 $3$ 이다. $(1)$, $(1,1)$ 을 거치면 첫 행이 $1,3$ 이고 둘째 행이 $2$ 다. 매 단계에 도형이 되므로 행과 열이 커지고, 두 표가 모양 $(2,1)$ 의 표준 대각표 전부다.

경로를 올라가는 것과 내려오는 것을 함께 세면 [Robinson–Schensted–Knuth 대응](robinson-schensted-knuth.md) 없이 $\sum(f^\lambda)^2=n!$ 이 나온다. 계산에 쓰는 것은 도형마다 붙일 수 있는 칸이 뗄 수 있는 칸보다 하나 많다는 셈이다. $(2,1)$ 은 칸을 붙일 자리가 첫 행 끝, 둘째 행 끝, 셋째 행 처음의 셋이고 뗄 칸은 두 모서리다.

# 정의

## 순서와 격자 연산

[순서론의 격자](order-lattices.md) 문서의 뜻으로 **Young 격자** $Y$ 는 모든 분할의 집합에 $\lambda_i\le\mu_i$ 가 모든 $i$ 에서 성립할 때 $\lambda\le\mu$ 로 둔 부분순서다. 도형으로는 $\lambda$ 의 칸이 모두 $\mu$ 의 칸이라는 뜻이다. 만남과 이음은 성분별 최소와 최대이고, 도형의 교집합과 합집합이다.

$$
\lambda\wedge\mu=(\min(\lambda_i,\mu_i))\_i,\qquad \lambda\vee\mu=(\max(\lambda_i,\mu_i))\_i
$$

$(3)\wedge(1,1)=(1)$ 이고 $(2,1)\vee(1,1,1)=(2,1,1)$ 이다.

## 덮개와 계수

$\mu$ 가 $\lambda$ 에 칸 하나를 붙인 도형이면 $\mu$ 가 $\lambda$ 를 덮는다(cover)고 하고 $\lambda\lessdot\mu$ 로 쓴다. $\lambda$ 의 계수(rank)는 칸 수 $\vert\lambda\vert$ 이다. 빈 도형 $\varnothing$ 이 가장 작은 원소다. $(2,1)$ 을 덮는 도형은 $(3,1)$, $(2,2)$, $(2,1,1)$ 이고 $(2,1)$ 이 덮는 도형은 $(2)$, $(1,1)$ 이다.

# 성질

## 분배 격자

만남과 이음이 칸 집합의 교집합과 합집합이므로 $Y$ 는 분배 격자(distributive lattice)다. 집합의 교집합과 합집합이 분배법칙을 만족하는 것에서 바로 나온다.

## 경로와 표준 대각표

$\varnothing$ 에서 $\lambda$ 까지 덮개 관계로 한 칸씩 올라가는 경로의 수는 $f^\lambda$ 다. 직관 절처럼 $k$ 번째 칸에 $k$ 를 적으면 경로와 표준 대각표가 일대일로 대응한다. $f^\lambda$ 는 [갈고리 길이 공식](hook-length-formula.md)으로 계산된다.

## 올림 연산자와 내림 연산자

분할들을 기저로 하는 벡터 공간 $\mathbb Q Y$ 에서 다음 두 선형사상을 정의한다.

$$
U\lambda=\sum_{\mu\gtrdot\lambda}\mu,\qquad D\lambda=\sum_{\nu\lessdot\lambda}\nu
$$

모든 $\lambda$ 에서 붙일 칸이 뗄 칸보다 하나 많으므로 다음이 성립한다[^1].

$$
DU-UD=I
$$

증명의 요지. $DU\lambda$ 와 $UD\lambda$ 에서 $\lambda$ 가 아닌 항은 서로 다른 두 칸을 하나는 붙이고 하나는 떼는 경우이고, 두 순서가 한 번씩 세어 같다. $\lambda$ 의 계수는 $DU$ 에서 붙일 칸 수, $UD$ 에서 뗄 칸 수다. $(2,1)$ 이면 $3-2=1$ 이다. 이 등식을 만족하는 계수 순서를 Stanley 는 미분 순서집합(differential poset)이라 불렀다.

## 제곱합과 성장 등식

$DU^n=U^nD+nU^{n-1}$ 이 $DU-UD=I$ 에서 귀납법으로 나온다. $D\varnothing=0$ 이므로 $D^nU^n\varnothing=n!\thinspace\varnothing$ 이다. $U^n\varnothing=\sum_{\lambda\vdash n}f^\lambda\lambda$ 이고 $D^n\lambda=f^\lambda\varnothing$ 이므로 다음이 나온다.

$$
\sum_{\lambda\vdash n}\big(f^\lambda\big)^2=n!
$$

같은 계산을 $DU^{n+1}\varnothing$ 의 $\lambda$ 계수에 쓰면 $\lambda\vdash n$ 에 대해 $\sum_{\mu\gtrdot\lambda}f^\mu=(n+1)f^\lambda$ 다. $(2,1)$ 이면 $3+2+3=8=4\cdot2$ 다.

# 활용

- [Plancherel 측도](plancherel-measure.md). 성장 과정의 전이확률 $f^\mu/((n+1)f^\lambda)$ 의 합이 $1$ 인 것이 성장 등식이다.
- [Specht 가군](specht-modules.md). $S_n$ 의 표현을 $S_{n-1}$ 로 제한하는 것이 $D$, $S_{n+1}$ 로 유도하는 것이 $U$ 에 대응한다. 분기 규칙은 $S^\lambda$ 에 $D$ 를 적용한 꼴이고, $DU-UD=I$ 는 제한과 유도의 교환 관계다.

[^1]: R. Stanley, Differential posets, *J. Amer. Math. Soc.* **1** (1988), 919–961.

# 연관 문서

## 선수지식

- [순서론의 격자](order-lattices.md)
- [갈고리 길이 공식](hook-length-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #order_theory #algebra
