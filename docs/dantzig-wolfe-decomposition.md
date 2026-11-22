# Dantzig–Wolfe 분해

# 개요

**Dantzig–Wolfe 분해(Dantzig–Wolfe decomposition)** 는 따로 풀 수 있는 몇 개의 작은 문제가 공통 제약 몇 개로만 묶인 선형계획 문제를, 작은 문제마다의 해들을 섞는 비율을 변수로 하는 문제로 바꾸어 푸는 방법이다. 공장 두 곳이 각자의 생산 한도 안에서 생산량을 정하되 함께 쓰는 전력이 $4$ 단위로 묶여 있으면, 공장마다의 결정은 쉬운데 전력 제약이 두 결정을 엮는다. Dantzig–Wolfe 분해는 전력에 값을 매겨 공장마다 따로 생산 계획을 내게 하고, 그 계획들을 섞는 비율을 [열 생성](column-generation.md)으로 정한다.

# 직관

공장 1 은 $x\_1$ 단위를 만들고 $0\le x\_1\le 3$, 단위당 이익은 $2$ 다. 공장 2 는 $x\_2$ 단위를 만들고 $0\le x\_2\le 2$, 단위당 이익은 $1$ 이다. 한 단위를 만들 때 전력 한 단위가 들고 전력은 모두 $4$ 단위다. 그러면 문제는 $x\_1+x\_2\le 4$ 아래에서 $2x\_1+x\_2$ 를 최대로 하는 것이다.

공장 1 의 계획은 $0$ 과 $3$ 사이의 어떤 값이든 두 끝 계획 $0$ 과 $3$ 을 섞어 $x\_1=3\lambda$ 로 적힌다. $\lambda$ 는 계획 $3$ 의 비율이다. 공장 2 의 계획도 $x\_2=2\mu$ 로 적힌다. 그러면 문제는 $0\le\lambda\le 1$, $0\le\mu\le 1$, $3\lambda+2\mu\le 4$ 아래에서 $6\lambda+2\mu$ 를 최대로 하는 것이다.

처음에는 두 공장 모두 계획 $0$ 만 안다. 이 문제의 값은 $0$ 이고 전력의 값도 $0$ 이다. 전력값이 $0$ 이면 공장 1 은 계획 $3$ 으로 이익 $6$ 을, 공장 2 는 계획 $2$ 로 이익 $2$ 를 낸다. 두 계획을 더한 문제를 풀면 $\lambda=1$, $\mu=\tfrac12$ 이고 이익은 $7$ 이다.

공장 2 가 전력 한 단위를 덜 받으면 이익이 $1$ 줄므로 이 해에서 전력 한 단위의 값은 $1$ 이다. 전력값 $1$ 을 빼면 공장 1 의 단위 이익은 $1$, 공장 2 의 단위 이익은 $0$ 이다. 공장 1 이 낼 수 있는 가장 좋은 계획은 여전히 $3$ 이고, 공장 2 에는 이익이 나는 새 계획이 없다.

그러므로 더할 계획이 없고 $x\_1=3$, $x\_2=2\cdot\tfrac12=1$ 이 최적이다. 공장 2 의 최적 생산량 $1$ 은 공장 2 의 끝 계획이 아니라 끝 계획 $0$ 과 $2$ 를 반씩 섞은 것이다.

# 정의

## 블록 각형 선형계획

다음 꼴의 선형계획을 **블록 각형(block-angular)** 이라 한다.

$$
\max\thinspace\sum\_{i=1}^{k}c\_i^{\mathsf T}x\_i\quad\text{subject to}\quad\sum\_{i=1}^{k}A\_ix\_i\le b,\quad x\_i\in X\_i\thinspace(i=1,\dots,k)
$$

$X\_i=\lbrace x\_i:D\_ix\_i\le e\_i\rbrace$ 는 블록 $i$ 의 제약이 정하는 유계 다면체이고, $\sum\_iA\_ix\_i\le b$ 는 블록들을 묶는 **연결 제약(linking constraint)** 이다. 직관 절에서 $k=2$, $X\_1=\lbrack 0,3\rbrack$, $X\_2=\lbrack 0,2\rbrack$ 이고 연결 제약은 $x\_1+x\_2\le 4$ 다.

## 주 문제

[볼록 다면체](convex-polytopes.md)의 Minkowski–Weyl 정리로 $X\_i$ 는 꼭짓점 집합 $V\_i$ 의 볼록 껍질이다. $x\_i=\sum\_{v\in V\_i}\lambda\_{i,v}v$ 로 바꾸어 적은 다음 문제를 **Dantzig–Wolfe 주 문제(Dantzig–Wolfe master problem)** 라 한다.

$$
\begin{aligned}
\max\thinspace&\sum\_{i}\sum\_{v\in V\_i}(c\_i^{\mathsf T}v)\lambda\_{i,v}\cr
\text{subject to}\thinspace&\sum\_{i}\sum\_{v\in V\_i}(A\_iv)\lambda\_{i,v}\le b,\cr
&\sum\_{v\in V\_i}\lambda\_{i,v}=1\thinspace(i=1,\dots,k),\quad\lambda\ge 0
\end{aligned}
$$

둘째 줄의 제약 $k$ 개를 **볼록 제약(convexity constraint)** 이라 한다. 직관 절에서 $V\_1=\lbrace 0,3\rbrace$, $V\_2=\lbrace 0,2\rbrace$ 이고 $\lambda=\lambda\_{1,3}$, $\mu=\lambda\_{2,2}$ 다.

## 블록별 가격 결정

제한 주 문제의 쌍대해에서 연결 제약의 쌍대 변수를 $\pi\ge 0$, 블록 $i$ 의 볼록 제약의 쌍대 변수를 $\sigma\_i$ 로 둔다. 꼭짓점 $v\in V\_i$ 의 열의 축소 비용은 $(c\_i-A\_i^{\mathsf T}\pi)^{\mathsf T}v-\sigma\_i$ 이므로, 블록 $i$ 의 가격 결정 부분문제는 다음 선형계획이다.

$$
\max\_{x\_i\in X\_i}\thinspace(c\_i-A\_i^{\mathsf T}\pi)^{\mathsf T}x\_i-\sigma\_i
$$

값이 양수인 블록이 있으면 그 최적 꼭짓점을 열로 더한다. 모든 블록에서 $0$ 이하이면 멈춘다. 직관 절의 둘째 단계에서 $\pi=1$, $\sigma\_1=3$, $\sigma\_2=0$ 이고, 두 부분문제의 값은 $\max\_{0\le x\_1\le 3}x\_1-3=0$ 과 $\max\_{0\le x\_2\le 2}0\cdot x\_2-0=0$ 이다.

# 성질

## 원 문제와의 동치

정리. 주 문제의 최적값은 원래 블록 각형 문제의 최적값과 같고, 주 문제의 최적해 $\lambda$ 에서 $x\_i=\sum\_v\lambda\_{i,v}v$ 가 원 문제의 최적해다.

증명의 요지. 볼록 제약을 만족하는 $\lambda$ 와 $x\_i\in X\_i$ 는 Minkowski–Weyl 정리로 서로 옮겨지고, 목적함수와 연결 제약은 일차식이라 이 대응에서 값이 그대로 옮겨진다.

주 문제의 제약은 연결 제약 수에 블록 수 $k$ 를 더한 것뿐이다. 블록의 제약 $D\_ix\_i\le e\_i$ 는 열 안으로 들어가고, 꼭짓점이 지수 개이므로 주 문제는 열 생성으로 푼다. $X\_i$ 가 유계가 아니면 꼭짓점과 함께 꼭짓점 밖으로 뻗는 방향(extreme ray)도 열로 두고, 방향의 열에는 볼록 제약의 계수를 $0$ 으로 둔다.

## Lagrange 상한

정리. 제한 주 문제의 값이 $z'$ 이고 블록 $i$ 의 가격 결정 값이 $\delta\_i$ 이면 원 문제의 최적값 $z^\ast$ 는 다음을 만족한다.

$$
z'\le z^\ast\le z'+\sum\_{i=1}^{k}\max(\delta\_i,0)
$$

증명의 요지. 연결 제약을 $\pi$ 로 목적함수에 옮긴 [Lagrange 쌍대성](lagrange-duality.md)의 쌍대함수는 다음과 같다.

$$
L(\pi)=\pi^{\mathsf T}b+\sum\_i\max\_{x\_i\in X\_i}(c\_i-A\_i^{\mathsf T}\pi)^{\mathsf T}x\_i
$$

$\pi\ge 0$ 이면 $L(\pi)\ge z^\ast$ 다. 제한 주 문제의 강쌍대성으로 $z'=\pi^{\mathsf T}b+\sum\_i\sigma\_i$ 이므로 $L(\pi)=z'+\sum\_i\delta\_i$ 다.

직관 절의 첫 단계에서 $z'=0$, $\delta\_1=6$, $\delta\_2=2$ 이므로 $0\le z^\ast\le 8$ 이다. 둘째 단계에서는 $z'=7$, $\delta\_1=\delta\_2=0$ 이므로 $z^\ast=7$ 이다. 반복마다 두 값 사이가 줄어들면 정해 둔 간격 안에서 멈출 수 있다.

## 정수 문제의 완화

블록 $i$ 의 정수점 집합 $X\_i\cap\mathbb Z^{n\_i}$ 의 볼록 껍질로 주 문제를 만들면, 그 선형계획 값은 연결 제약을 옮긴 Lagrange 완화의 쌍대 최적값과 같다. 이 값은 정수 조건을 버린 선형계획 완화의 값 이하이고, 블록의 다면체 $X\_i$ 의 꼭짓점이 모두 정수이면 같다[^1].

# 활용

- 다지역 생산과 수송 계획. 공장이나 기간마다의 제약이 블록이고, 공유 자원이나 총수요가 연결 제약이다. Dantzig 와 Wolfe 의 원 논문이 이 구조를 대상으로 했다[^2].
- 다품종 흐름(multicommodity flow). 품종마다의 흐름 보존이 블록이고 간선 용량이 연결 제약이다. 블록의 꼭짓점이 경로이므로 가격 결정이 품종마다의 최단 경로 문제가 된다.
- 분기 가격법(branch-and-price). [정수계획법](integer-programming.md)에서 블록의 정수점 볼록 껍질로 만든 주 문제가 선형계획 완화보다 작거나 같은 상한을 준다. [차량 경로 문제](vehicle-routing-problem.md)의 집합 분할 정식화는 차량마다의 경로 집합을 블록으로 본 Dantzig–Wolfe 주 문제다.
- 병렬 계산. 블록별 가격 결정이 서로 독립이므로 블록마다 다른 처리기에서 푼다.

[^1]: A. M. Geoffrion, "Lagrangean relaxation for integer programming", *Mathematical Programming Study* 2 (1974), 82–114.
[^2]: G. B. Dantzig, P. Wolfe, "Decomposition principle for linear programs", *Operations Research* 8 (1960), 101–111.

# 연관 문서

## 선수지식

- [열 생성](column-generation.md)
- [볼록 다면체](convex-polytopes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #algorithms #linear_algebra
