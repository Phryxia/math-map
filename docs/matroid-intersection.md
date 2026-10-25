# Matroid 교집합 정리

# 개요

**Matroid 교집합 정리(matroid intersection theorem)** 는 같은 집합 $E$ 위의 두 matroid $M_1,M_2$ 에서 양쪽 모두에 독립인 집합의 최대 크기가 $\min_{A\subseteq E}\bigl(r_1(A)+r_2(E\setminus A)\bigr)$ 라는 정리다. J. Edmonds 가 1970 년에 증명했다[^1].

이분 그래프의 [매칭](matchings.md)은 "한쪽 정점마다 간선 하나 이하" 와 "다른 쪽 정점마다 간선 하나 이하" 라는 두 matroid 의 공통 독립집합이고, 이 정리를 거기에 쓰면 König 정리가 나온다. 증명은 [Matroid 합 정리](matroid-union.md)의 계수 공식에 쌍대 matroid 를 넣어 얻는다.

# 직관

일꾼 $a,b$ 와 일 $1,2$ 가 있고, $a$ 는 $1$ 과 $2$ 를, $b$ 는 $1$ 만 할 수 있다. 간선은 $a1,a2,b1$ 이다. 일꾼마다 일 하나, 일마다 일꾼 하나로 짝을 짓는 매칭을 가장 크게 잡으려 한다.

조건을 둘로 나눈다. "일꾼마다 간선 하나 이하" 만 지키는 간선 집합들은, 간선을 일꾼별로 묶었을 때 묶음마다 하나 이하를 고르는 집합들이다. 이 집합들은 교환 공리를 만족한다. "일마다 간선 하나 이하" 도 같다. 매칭은 두 조건을 함께 지키는 간선 집합이다.

$a2,b1$ 은 두 조건을 다 지키므로 크기 $2$ 의 매칭이다. 더 클 수 없다는 것은 집합 $A=\lbrace a1,a2\rbrace$ 로 보인다. $A$ 안에서 첫째 조건을 지키면 일꾼 $a$ 의 간선 하나만 남아 많아야 $1$ 개이고, $A$ 밖의 $b1$ 은 하나뿐이다. 그래서 어떤 매칭도 $1+1=2$ 개를 넘지 못한다. 최대 크기와 같은 값을 주는 $A$ 가 늘 존재한다는 것이 이 정리다.

# 정의

$M_1=(E,\mathcal I_1)$ 과 $M_2=(E,\mathcal I_2)$ 는 같은 유한 집합 위의 [matroid](matroids.md)이고 계수 함수가 $r_1,r_2$ 다. $\mathcal I_1\cap\mathcal I_2$ 의 원소를 공통 독립집합(common independent set)이라 한다. 공통 독립집합은 일반적으로 matroid 를 이루지 않는다.

$E$ 가 서로 만나지 않는 묶음 $E_1,\dots,E_m$ 으로 나뉘어 있을 때, 묶음마다 원소를 하나 이하 고른 집합들은 matroid 를 이룬다. 이것을 분할 matroid(partition matroid)라 한다. 직관의 두 조건이 둘 다 분할 matroid 다.

$M$ 의 쌍대 $M^\ast$ 는 기저의 여집합들을 기저로 하는 matroid 이고 계수는 $r^\ast(Y)=\lvert Y\rvert-r(E)+r(E\setminus Y)$ 다.

# 성질

## 최소최대 공식

$$
\max_{I\in\mathcal I_1\cap\mathcal I_2}\lvert I\rvert=\min_{A\subseteq E}\bigl(r_1(A)+r_2(E\setminus A)\bigr)
$$

왼쪽이 오른쪽 이하인 것은 $\lvert I\rvert=\lvert I\cap A\rvert+\lvert I\setminus A\rvert\le r_1(A)+r_2(E\setminus A)$ 에서 나온다.

등호의 요지. 공통 독립집합 $I$ 는 $M_2$ 의 어떤 기저 $B_2$ 에 들어 있고, $E\setminus B_2$ 는 $M_2^\ast$ 의 기저다. 그래서 $I\cup(E\setminus B_2)$ 는 $M_1\vee M_2^\ast$ 의 독립집합이고, 거꾸로 $M_1\vee M_2^\ast$ 의 최대 독립집합에서 공통 독립집합이 나온다. 이로부터 공통 독립집합의 최대 크기는 $r(M_1\vee M_2^\ast)-r(M_2^\ast)$ 이다. 합의 계수 공식에 $r_2^\ast$ 를 넣으면

$$
r(M_1\vee M_2^\ast)=\min_{Y\subseteq E}\bigl(\lvert E\setminus Y\rvert+r_1(Y)+\lvert Y\rvert-r_2(E)+r_2(E\setminus Y)\bigr)
$$

이고, $r(M_2^\ast)=\lvert E\rvert-r_2(E)$ 를 빼면 오른쪽의 최솟값이 남는다.

## 증가 경로 알고리즘

공통 독립집합 $I$ 에서 교환 그래프를 만든다. $y\in I$, $x\notin I$ 에 대해 $I-y+x\in\mathcal I_1$ 이면 $y\to x$ 를, $I-y+x\in\mathcal I_2$ 이면 $x\to y$ 를 긋는다. $I+x\in\mathcal I_1$ 인 $x$ 에서 $I+x\in\mathcal I_2$ 인 $x$ 로 가는 가장 짧은 경로를 따라 원소를 바꾸면 $I$ 가 하나 커진다. 경로가 없으면 끝점 쪽에서 거꾸로 닿는 원소의 집합이 최소최대 공식의 $A$ 를 준다. 독립성 신탁 아래 다항시간이고, 원소에 무게를 준 판본도 다항시간에 풀린다.

## 세 matroid

matroid 셋의 공통 독립집합의 최대 크기를 구하는 문제는 NP(nondeterministic polynomial time)-난해다. 유향 그래프의 Hamilton 경로는 그래프 matroid, 들어오는 간선이 정점마다 하나 이하인 분할 matroid, 나가는 간선이 정점마다 하나 이하인 분할 matroid 의 공통 독립집합으로 쓰인다.

# 활용

- König 정리. 이분 그래프 $(X\cup Y,E)$ 에서 $M_1$ 을 $X$ 쪽 끝점으로 묶은 분할 matroid, $M_2$ 를 $Y$ 쪽 끝점으로 묶은 분할 matroid 로 두면 공통 독립집합이 매칭이다. $r_1(A)$ 는 $A$ 가 닿는 $X$ 의 정점 수이고 $r_2(E\setminus A)$ 는 $E\setminus A$ 가 닿는 $Y$ 의 정점 수이므로, 오른쪽 최솟값이 최소 정점 덮개의 크기다.
- 무지개 신장트리. 간선에 색이 칠해진 그래프에서 색이 모두 다른 신장트리는 그래프 matroid 와 색으로 묶은 분할 matroid 의 공통 기저다.
- 뿌리 있는 유향 신장트리. 뿌리에서 모든 정점으로 가는 유향 신장트리는, 방향을 무시한 그래프 matroid 와 뿌리 아닌 정점마다 들어오는 간선 하나 이하인 분할 matroid 의 공통 기저다.

[^1]: J. Edmonds, "Submodular functions, matroids, and certain polyhedra", in Combinatorial Structures and Their Applications, Gordon and Breach (1970), 69–87.

# 연관 문서

## 선수지식

- [매칭](matchings.md)
- [Matroid 합 정리](matroid-union.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #optimization #graph_theory
