# 호모토피군

# 개요

**호모토피군(homotopy group)** 은 구면을 공간 안에 연속으로 그리는 방법들을 연속 변형으로 같게 보아 분류한 군이다. 원을 그리는 방법을 분류한 것이 [기본군](fundamental-group.md)이고, 구면 $S^2$ 를 $S^2$ 자신에 항등사상으로 그린 것은 차수 $1$ 을 가져 한 점으로 줄어들지 않는다. $n$ 차원 구면을 그리는 방법을 분류한 $\pi_n(X,x_0)$ 은 공간의 구멍을 차원마다 재고, $n\ge 2$ 에서는 가환군이다.

# 직관

원 $S^1$ 에서 공간으로 가는 고리를 변형으로 분류한 것이 기본군이다. 같은 일을 $S^2$ 로 하면 $S^2$ 에서 $S^2$ 로 가는 항등사상은 한 점으로 줄어들지 않는다. 구면에서 구면으로 가는 사상은 [Brouwer 차수](brouwer-degree.md)라는 정수를 가지고, 항등사상의 차수는 $1$, 상수사상의 차수는 $0$ 이며, 차수는 연속 변형으로 바뀌지 않는다. 그래서 $\pi_2(S^2)$ 에는 차수마다 다른 원소가 있다.

$S^3$ 에서 $S^2$ 로 가는 사상은 차원이 줄어드는 사상이라 차수가 정의되지 않는다. $S^3$ 을 $\mathbb C^2$ 의 단위구면으로 보고 $(z_1,z_2)$ 에 비 $z_1/z_2$ 를 대응시키면 $S^2$ 로 가는 사상이 되고, 한 점의 역상은 원이다. 서로 다른 두 점의 역상인 두 원은 $S^3$ 안에서 얽힘수(linking number) $1$ 로 얽혀 있다. 얽힘수는 정수이고 연속 변형으로 바뀌지 않으므로 이 사상은 상수사상으로 줄어들지 않고, $\pi_3(S^2)$ 이 자명하지 않다.

# 정의

## 호모토피군

$(X,x_0)$ 을 밑점 있는 위상공간으로 둔다. $n\ge1$ 에 대해 **$n$ 차 호모토피군($n$-th homotopy group)** $\pi_n(X,x_0)$ 은 밑점을 보존하는 연속사상 $f\colon(S^n,s_0)\to(X,x_0)$ 들의 밑점 보존 호모토피류의 집합이다. 연산은 $S^n$ 의 적도를 한 점으로 눌러 만든 쐐기합 $S^n\vee S^n$ 을 거쳐 정의한다.

$$
S^n\xrightarrow{\thinspace\text{압착}\thinspace}S^n\vee S^n\xrightarrow{\thinspace f\vee g\thinspace}X
$$

이 합성의 호모토피류가 $\lbrack f\rbrack+\lbrack g\rbrack$ 다. $n=1$ 이면 기본군의 연접과 같다. 직관 절의 항등사상 $S^2\to S^2$ 는 $\pi_2(S^2)$ 의 원소이고, 비 $z_1/z_2$ 로 정의한 Hopf 사상(Hopf map) $S^3\to S^2$ 는 $\pi_3(S^2)$ 의 원소다.

## 상대 호모토피군

부분공간 $A\subseteq X$ 와 $x_0\in A$ 에 대해 **상대 호모토피군(relative homotopy group)** $\pi_n(X,A,x_0)$ 은 $(D^n,S^{n-1},s_0)$ 에서 $(X,A,x_0)$ 으로 가는 사상들의 호모토피류의 집합이다. 항등사상 $(D^n,S^{n-1})\to(D^n,S^{n-1})$ 은 $\pi_n(D^n,S^{n-1})$ 의 원소다.

# 성질

## 가환성

$n\ge2$ 이면 $\pi_n(X,x_0)$ 은 가환군이다. 증명의 요지는 다음이다. $n\ge2$ 에서는 압착을 서로 다른 두 좌표 방향으로 할 수 있고 두 연산이 서로 교환한다. 같은 집합 위의 두 이항연산이 항등원을 공유하고 서로 교환하면 두 연산은 일치하고 가환이다. 이것을 Eckmann–Hilton 논법(Eckmann–Hilton argument)이라 한다. $n=1$ 에서는 방향이 하나뿐이라 이 논법이 쓰이지 않고, 기본군은 가환이 아닐 수 있다. 상대 호모토피군은 $n\ge 2$ 에서 군이고 $n\ge 3$ 에서 가환이다.

## 올다발의 긴 완전열

$F\to E\to B$ 가 올다발이면 다음 완전열이 있다. 더 넓은 조건인 [올화](fibrations.md)에서도 같은 열이 나온다.

$$
\cdots\to\pi_n(F)\to\pi_n(E)\to\pi_n(B)\to\pi_{n-1}(F)\to\cdots
$$

Hopf 올다발 $S^1\to S^3\to S^2$ 에 적용하면 $n\ge2$ 에서 $\pi_n(S^1)=0$ 이므로 $n\ge3$ 에서 $\pi_n(S^3)\cong\pi_n(S^2)$ 이다. 특히 다음을 얻는다.

$$
\pi_3(S^2)\cong\pi_3(S^3)\cong\mathbb Z
$$

## 구면의 호모토피군

$\pi_n(S^n)\cong\mathbb Z$ 이고 사상의 차수가 동형을 준다. $k\lt n$ 이면 $\pi_k(S^n)=0$ 이다.

$k\gt n$ 에서는 $\pi_4(S^2)=\mathbb Z/2$ , $\pi_4(S^3)=\mathbb Z/2$ , $\pi_6(S^3)=\mathbb Z/12$ 처럼 유한군이 나온다. Serre 는 $k\gt n$ 에서 $\pi_k(S^n)$ 이 유한군임을 보였다. 예외는 $n$ 이 짝수이고 $k=2n-1$ 인 경우이고, 이때 $\pi_k(S^n)$ 은 $\mathbb Z$ 와 유한군의 직합이다.[^1]

$\pi_{n+k}(S^n)$ 은 $n\gt k+1$ 에서 $n$ 에 무관하고([Freudenthal 매달기 정리](freudenthal-suspension.md)), 그 값을 $k$ 차 안정 호모토피군(stable homotopy group)이라 한다.

## Whitehead 정리

Whitehead 정리(Whitehead theorem)는 연결 [CW 복합체](cw-complexes.md)(CW complex, closure-finite weak topology) 사이의 연속사상 $f\colon X\to Y$ 가 모든 $n$ 에서 $\pi_n$ 의 동형을 유도하면 $f$ 가 호모토피 동치라는 것이다. 동형은 하나의 사상으로 유도되어야 한다. $\mathbb{RP}^2\times S^3$ 과 $S^2\times\mathbb{RP}^3$ 은 기본군이 $\mathbb Z/2$ 이고 보편덮개가 둘 다 $S^2\times S^3$ 이라 모든 호모토피군이 같지만, $H_2$ 가 각각 $0$ 과 $\mathbb Z$ 라 호모토피 동치가 아니다.

## 호몰로지와의 관계

[Hurewicz 정리](hurewicz-theorem.md)로 $X$ 가 $(n-1)$ 연결이고 $n\ge2$ 이면 $\pi_n(X)\to H_n(X)$ 가 동형이다. 그 위의 차수에서는 두 군이 다르다. 호몰로지는 절단 정리(excision theorem)를 만족하고 호모토피군은 만족하지 않으므로, 호모토피군은 공간을 조각으로 나눠 계산할 수 없다. $S^2$ 에서 $H_3=0$ 이지만 $\pi_3=\mathbb Z$ 다.

# 활용

- 올다발의 분류. 밑공간이 $S^n$ 이고 구조군이 연결인 올다발은 구조군의 $\pi_{n-1}$ 원소로 분류된다. $S^2$ 위의 원 다발은 $\pi_1(S^1)=\mathbb Z$ 로 분류되고 Hopf 올다발이 생성원에 대응한다.
- [장애 이론](obstruction-theory.md). 사상을 세포 하나씩 늘려 확장할 때 각 단계의 장애는 호모토피군에 값을 갖는 코호몰로지류다.
- 물리의 위상 결함. 3차원 매질에서 질서 매개변수 공간의 $\pi_1$ 은 선 결함을, $\pi_2$ 는 점 결함을 분류한다. 순간자는 $\pi_3(\mathrm{SU}(2))=\mathbb Z$ 의 원소로 분류된다([순간자 Floer 호몰로지](instanton-floer-homology.md)).

[^1]: J.-P. Serre, "Homologie singulière des espaces fibrés. Applications", Annals of Mathematics 54 (1951), https://doi.org/10.2307/1969485

# 연관 문서

## 선수지식

- [기본군](fundamental-group.md)

## 더 알아보기

### 공간의 구성

- [CW 복합체](cw-complexes.md)
- [올화](fibrations.md)
- [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md)

### 호모토피군의 계산

- [Hurewicz 정리](hurewicz-theorem.md)
- [Freudenthal 매달기 정리](freudenthal-suspension.md)

### 고차 범주

- [무한 범주](infinity-categories.md)

#algebraic_topology #topology #group_theory
