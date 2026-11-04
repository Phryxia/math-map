# Matroid

# 개요

**Matroid(matroid, 매트로이드)** 는 유한 집합의 부분집합 가운데 어느 것이 "독립" 인지를 정해 둔 구조로, 벡터의 일차독립과 [그래프](graphs.md)에서 순환을 만들지 않는 간선 집합이 함께 만족하는 세 공리를 따른다. 도시 사이에 놓을 수 있는 도로마다 공사비가 있을 때, 싼 도로부터 차례로 고르되 고리를 만드는 도로만 건너뛰면 모든 도시를 잇는 가장 싼 도로망이 나온다. Matroid 는 이런 탐욕적 선택이 최적해를 주는 문제를 독립집합의 공리로 적고, 그 공리만으로 기저와 계수를 정의한다.

# 직관

도시 $a,b,c,d$ 사이에 놓을 수 있는 도로가 다섯 개 있고, 공사비는 $ab$ 가 $1$, $bc$ 가 $2$, $ac$ 가 $3$, $cd$ 가 $4$, $bd$ 가 $5$ 다. 싼 도로부터 차례로 보며, 이미 고른 도로와 고리를 만드는 도로만 건너뛴다. $ab$ 와 $bc$ 를 고르고, $ac$ 는 고리 $a,b,c$ 를 만드니 건너뛰고, $cd$ 를 고르면 공사비 $7$ 의 도로망이 나온다. 도로 세 개로 네 도시를 잇는 방법 가운데 이것이 가장 싸다. 이 문제가 [최소 신장트리](minimum-spanning-tree.md)이고, 이 방법이 Kruskal 알고리즘(Kruskal's algorithm)이다.

같은 방법이 통하지 않는 문제도 있다. 한 길에 늘어선 집 $v_1,v_2,v_3$ 에 가게를 내는데 이웃한 두 집에는 함께 낼 수 없고, 수익이 차례로 $2,3,2$ 다. 수익이 큰 것부터 고르면 $v_2$ 를 고른 뒤 $v_1$ 도 $v_3$ 도 더할 수 없어 $3$ 에서 멈춘다. $v_1,v_3$ 을 고르면 $4$ 다.

두 문제는 작은 선택을 큰 선택 쪽으로 키울 수 있는지에서 갈린다. 도로 문제에서 고리 없는 도로 집합 $\lbrace ab,bc\rbrace$ 와 $\lbrace ac,cd,bd\rbrace$ 를 보면, 큰 쪽의 $cd$ 를 작은 쪽에 더해도 고리가 생기지 않는다. 가게 문제에서 $\lbrace v_2\rbrace$ 와 $\lbrace v_1,v_3\rbrace$ 은 둘 다 허용되는 선택인데, $\lbrace v_2\rbrace$ 에는 큰 쪽의 어느 집도 더할 수 없다.

[벡터 공간](vector-spaces.md)에서 일차독립인 벡터 집합도 같은 성질을 갖는다. 작은 일차독립 집합에는 큰 일차독립 집합의 벡터 가운데 하나를 더해 일차독립을 유지할 수 있다. 허용되는 선택이 늘 이렇게 커질 수 있다는 성질을 공리로 삼은 구조가 matroid 다.

# 정의

## 독립성 공리

$E$ 를 유한 집합, $\mathcal I$ 를 $E$ 의 부분집합들의 모임이라 하자. 다음 셋을 만족하면 $(E,\mathcal I)$ 가 **matroid** 이고 $\mathcal I$ 의 원소가 **독립집합(independent set)** 이다.

- $\emptyset\in\mathcal I$
- $A\in\mathcal I$ 이고 $B\subseteq A$ 이면 $B\in\mathcal I$
- 교환 공리(exchange axiom). $A,B\in\mathcal I$ 이고 $\lvert A\rvert\lt \lvert B\rvert$ 이면 $A\cup\lbrace e\rbrace\in\mathcal I$ 인 $e\in B\setminus A$ 가 존재한다.

앞의 두 공리만 만족하는 $(E,\mathcal I)$ 를 **독립성 체계(independence system)** 라 한다. 직관 절의 가게 문제에서 이웃하지 않는 집들의 집합족은 독립성 체계이지만, $\lbrace v_2\rbrace$ 와 $\lbrace v_1,v_3\rbrace$ 에서 교환 공리가 깨지므로 matroid 가 아니다.

독립이 아닌 집합이 **종속집합(dependent set)** 이고, 극소 종속집합이 **회로(circuit)** 다.

## 그래프 matroid

그래프 $G$ 의 간선 집합을 $E$ 로 두고 순환이 없는 간선 집합을 독립집합으로 삼은 matroid 가 **그래프 matroid(graphic matroid)** 다. 직관 절의 도로망에서 $E=\lbrace ab,bc,ac,cd,bd\rbrace$ 이고, 회로는 순환 $\lbrace ab,bc,ac\rbrace$, $\lbrace bc,cd,bd\rbrace$, $\lbrace ab,ac,cd,bd\rbrace$ 셋이다.

## 기저와 계수

극대 독립집합이 **기저(basis)** 다. 부분집합 $S\subseteq E$ 의 **계수(rank)** $r(S)$ 는 $S$ 에 포함된 독립집합의 최대 크기이고, $r(E)$ 를 matroid 의 계수라 한다.

도로망의 그래프 matroid 에서 기저는 네 도시를 잇는 도로 세 개짜리 집합, 곧 신장트리다. $r(\lbrace ab,bc,ac\rbrace)=2$ 이고 $r(E)=3$ 이다.

## 다른 예

| 이름 | 바탕 집합 | 독립집합 |
|---|---|---|
| 선형 matroid(linear matroid) | 벡터 목록의 번호 | 일차독립인 벡터의 번호 집합 |
| 균등 matroid(uniform matroid) $U_{k,n}$ | 원소 $n$ 개의 집합 | 크기가 $k$ 이하인 부분집합 |
| 분할 matroid(partition matroid) | 여러 부류로 나뉜 집합 | 부류마다 정해진 개수 이하를 고른 집합 |
| 횡단 matroid(transversal matroid) | 이분 그래프의 한쪽 정점 | [매칭](matchings.md)으로 덮이는 부분집합 |

벡터 $u_1=(1,0)$, $u_2=(0,1)$, $u_3=(1,1)$ 의 선형 matroid 에서는 두 개 이하의 번호 집합이 모두 독립이고 $\lbrace 1,2,3\rbrace$ 만 종속이다. 이것은 $U_{2,3}$ 과 같다.

## 쌍대와 마이너

$M=(E,\mathcal I)$ 의 기저들의 여집합을 기저로 하는 matroid 를 **쌍대 matroid(dual matroid)** $M^\ast$ 라 한다. 원소 $e$ 의 **삭제(deletion)** $M\setminus e$ 는 $E\setminus\lbrace e\rbrace$ 위에서 $e$ 를 포함하지 않는 독립집합들로 이루어진 matroid 이고, 독립집합 $\lbrace e\rbrace$ 의 **축약(contraction)** $M/e$ 는 $I\cup\lbrace e\rbrace\in\mathcal I$ 인 $I\subseteq E\setminus\lbrace e\rbrace$ 들로 이루어진 matroid 다. 삭제와 축약을 되풀이해 얻는 matroid 를 $M$ 의 **마이너(minor)** 라 한다.

도로망의 그래프 matroid 에서 $cd$ 를 축약하면 도시 $c$ 와 $d$ 를 한 점으로 합친 그래프의 그래프 matroid 가 나오고, $bc$ 와 $bd$ 는 평행한 두 간선이 되어 $\lbrace bc,bd\rbrace$ 가 회로가 된다.

# 성질

## 기저의 크기

모든 기저의 크기가 같다. 크기가 다른 두 기저 $A,B$ 가 있으면 교환 공리로 작은 쪽에 원소를 더해 독립을 유지할 수 있어 극대성에 모순이다. 선형 matroid 에서 이것은 벡터 공간의 차원이 기저의 선택에 따르지 않는다는 정리다.

## 계수 함수

계수 함수는 다음을 만족한다.

$$
r(\emptyset)=0,\qquad r(S)\le r(S\cup\lbrace e\rbrace)\le r(S)+1
$$

$$
r(S\cup T)+r(S\cap T)\le r(S)+r(T)
$$

거꾸로 이 세 조건을 만족하는 함수 $r$ 이 주어지면 $r(S)=\lvert S\rvert$ 인 $S$ 들이 matroid 의 독립집합족이 된다. 둘째 줄의 부등식이 부분모듈성(submodularity)이고, 계수 함수는 단조인 [부분모듈 함수](submodular-functions.md)다.

## 탐욕 정리

각 원소에 가중치 $w(e)\ge 0$ 을 주고 독립집합 가운데 가중치 합이 최대인 것을 찾는다. 무거운 원소부터 훑으며 독립을 유지하면 넣는 탐욕 알고리즘(greedy algorithm)은 matroid 에서 항상 최적해를 준다.[^1]

증명의 요지. 탐욕 알고리즘이 고른 $g_1,\dots,g_k$ 와 최적 기저 $b_1,\dots,b_k$ 를 각각 무거운 순으로 놓는다. $w(b_i)\gt w(g_i)$ 인 첫 $i$ 가 있으면, 교환 공리로 $\lbrace g_1,\dots,g_{i-1}\rbrace$ 에 $\lbrace b_1,\dots,b_i\rbrace$ 의 원소 $b_j$ 하나를 더해 독립을 유지할 수 있다. $w(b_j)\ge w(b_i)\gt w(g_i)$ 이므로 탐욕 알고리즘은 $g_i$ 보다 $b_j$ 를 먼저 골랐어야 한다.

역도 성립한다. 독립성 체계에서 모든 가중치에 대해 탐욕 알고리즘이 최적해를 주면 그 체계는 matroid 다. 직관 절의 가게 문제는 교환 공리가 깨지는 독립성 체계이고, 가중치 $2,3,2$ 에서 탐욕 알고리즘은 $3$ 을, 최적해는 $4$ 를 준다.

## 쌍대의 성질

$M^\ast$ 의 계수는 $r^\ast(S)=\lvert S\rvert-r(E)+r(E\setminus S)$ 이고 $(M^\ast)^\ast=M$ 이다. 연결된 [평면 그래프](planar-graphs.md)의 그래프 matroid 의 쌍대는 그 쌍대 그래프의 그래프 matroid 와 같다. Whitney 는 그래프 matroid 의 쌍대가 다시 그래프 matroid 인 것과 그래프가 평면 그래프인 것이 동치임을 증명했다.

## 금지된 마이너

그래프 matroid 의 마이너는 그래프 matroid 이고, 체 $\mathbb F_2$ 위의 선형 matroid 의 마이너도 $\mathbb F_2$ 위의 선형 matroid 다. Tutte 는 matroid 가 $\mathbb F_2$ 위의 선형 matroid 인 것과 $U_{2,4}$ 를 마이너로 갖지 않는 것이 동치이고, 그래프 matroid 인 것은 정해진 다섯 matroid 를 마이너로 갖지 않는 것과 동치임을 증명했다.[^2]

## 여러 matroid 의 독립집합

같은 집합 위의 두 matroid 에서 양쪽 모두에 독립인 집합의 최대 크기는 [Matroid 교집합 정리](matroid-intersection.md)의 최소최대 공식으로 주어지고 다항시간에 구해진다. 이분 그래프의 매칭과 [유향 신장트리](arborescences.md)가 이 문제의 특수한 경우다. 세 matroid 에서 같은 문제는 NP(nondeterministic polynomial time)-난해다.

같은 집합 위의 matroid 여러 개에서 독립집합을 하나씩 골라 합친 집합들은 다시 matroid 를 이루고, 그 계수는 [Matroid 합 정리](matroid-union.md)가 준다.

# 활용

- 탐욕법의 판정. 최소 신장트리의 Kruskal 알고리즘, 처리 시간이 모두 같고 마감시간이 있는 작업들 가운데 기한 안에 끝낼 수 있는 작업 집합의 선택이 matroid 위의 탐욕 정리로 증명된다.
- Hall 결혼 정리(Hall's marriage theorem)의 일반화. 집합족이 matroid 의 독립집합인 대표계를 갖는 조건이 Rado 의 1942 년 정리로 주어지고, 이 정리는 Matroid 교집합 정리에서 유도된다.
- [Tutte 다항식](tutte-polynomial.md)은 계수 함수만으로 정의되므로 모든 matroid 에 정의된다.
- 부분모듈 최대화. 단조 부분모듈 함수를 matroid 의 독립집합 위에서 최대화하는 문제에는 $1-1/e$ [근사 알고리즘](approximation-algorithms.md)이 있다.[^3] 균등 matroid 를 제약으로 둔 경우가 센서 배치와 요약문 선택이다.

[^1]: Michel X. Goemans, *Lecture notes on matroid optimization*. 독립성 공리, 그래프와 선형 matroid 예시, 탐욕 정리. https://math.mit.edu/~goemans/18433S09/matroid-notes.pdf
[^2]: W. T. Tutte, "A homotopy theorem for matroids, I, II", Trans. Amer. Math. Soc. 88 (1958), 144–174.
[^3]: G. Calinescu, C. Chekuri, M. Pál, J. Vondrák, "Maximizing a monotone submodular function subject to a matroid constraint", SIAM J. Comput. 40 (2011), 1740–1766.

# 연관 문서

## 선수지식

- [그래프](graphs.md)
- [벡터 공간](vector-spaces.md)
- [조합론 개관](combinatorics-overview.md)

## 더 알아보기

- [Tutte 다항식](tutte-polynomial.md)
- [최소 신장트리](minimum-spanning-tree.md)
- [Matroid 합 정리](matroid-union.md)
- [부분모듈 함수](submodular-functions.md)

#combinatorics #graph_theory #linear_algebra
