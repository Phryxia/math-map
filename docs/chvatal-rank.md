# Chvátal 계수

# 개요

다면체 $P$ 에 Chvátal–Gomory 절단을 더해 얻는 다면체를 $P'$ 라 한다. 유계 유리 다면체에서 이 연산을 반복하면 유한 번에 정수 껍질 $P_I$ 에 닿고, 그 최소 횟수를 $P$ 의 **Chvátal 계수**라 한다.[^1]

계수는 절단평면 방법이 완화를 얼마나 깊이 조여야 하는지를 재는 값이다. 계수가 $0$ 인 것은 $P$ 가 이미 정수 다면체인 것과 같다.

# 직관

[정수계획법](integer-programming.md)의 삼각형 예에서는 절단이 한 번으로 끝났다. 변마다 $x_i+x_j\le1$ 을 둔 완화에 세 부등식을 $u=(1/2,1/2,1/2)$ 로 묶어 내림하면 $x_1+x_2+x_3\le1$ 이 나오고, 이 부등식과 $x\ge0$ 이 정수 껍질을 기술한다.

정점이 $n$ 개인 완전그래프에서 같은 것을 해 본다. 완화는 $x\ge0$ 과 모든 쌍에 대한 $x_i+x_j\le1$ 이고, 정수점은 한 좌표만 $1$ 인 점과 원점이므로 정수 껍질은 $\sum_i x_i\le1$ 로 기술된다. 변 부등식 $\binom n2$ 개에 각각 $u=1/(n-1)$ 을 주면 정점 하나가 변 $n-1$ 개에 속하므로 왼쪽 계수가 모두 $1$ 이 되고, 오른쪽은 $\binom n2/(n-1)=n/2$ 다. 내림하면 다음을 얻는다.

$$
\sum_{i=1}^{n}x_i\le\Big\lfloor\frac n2\Big\rfloor
$$

$n\ge4$ 이면 이 부등식은 $\sum_i x_i\le1$ 이 아니다. 한 번의 절단으로는 정수 껍질에 닿지 않는다.

절단으로 얻은 부등식을 완화에 넣고 같은 연산을 다시 적용하면 오른쪽 값이 더 내려간다. 이 반복을 몇 번 해야 정수 껍질이 되는지가 다면체마다 정해지고, 그 횟수가 Chvátal 계수다.

# 정의

$P=\lbrace x\in\mathbb R^n:Ax\le b\rbrace$ 를 유리 다면체라 한다.

## 기본 닫힘

$u\ge0$ 이고 $u^{T}A$ 가 정수 벡터일 때 $u^{T}Ax\le\lfloor u^{T}b\rfloor$ 는 $P\cap\mathbb Z^n$ 에서 성립한다. 이런 부등식을 모두 더해 얻는 다면체

$$
P'=\lbrace x\in P:u^{T}Ax\le\lfloor u^{T}b\rfloor\ \text{for all}\ u\ge0\ \text{with}\ u^{T}A\in\mathbb Z^n\rbrace
$$

를 $P$ 의 **기본 닫힘**이라 한다. $P_I\subseteq P'\subseteq P$ 다.

## 계수

$P^{(0)}=P$, $P^{(k+1)}=(P^{(k)})'$ 로 둔다. **Chvátal 계수**는 다음이다.

$$
\mathrm{rank}(P)=\min\lbrace k\ge0:P^{(k)}=P_I\rbrace
$$

유효 부등식 $\alpha^{T}x\le\beta$ 에 대해서는 $P^{(k)}$ 에서 그 부등식이 성립하는 최소 $k$ 를 그 부등식의 계수라 한다.

# 성질

## 유한 종료

**정리.** $P$ 가 유계인 유리 다면체이면 $\mathrm{rank}(P)$ 가 유한하다.[^1]

증명의 요지. $P$ 의 각 유효 부등식의 계수가 유한함을 보이면 된다. $P\cap\mathbb Z^n=\emptyset$ 인 경우로 먼저 줄인다. 그 경우 격자 방향 하나를 잡아 $P$ 를 그 방향의 정수 초평면들로 자르면 각 조각이 차원이 낮아지므로 차원에 대한 귀납이 돌아가고, 유한 번의 닫힘 뒤 $P^{(k)}=\emptyset$ 이 된다. 일반적인 경우는 유효 부등식 $\alpha^{T}x\le\beta$ 에 대해 $P\cap\lbrace\alpha^{T}x\ge\beta+1\rbrace$ 에 정수점이 없다는 데에 앞의 결과를 쓴다.

유계 조건은 뺄 수 없다. 무리 기울기를 갖는 무계 다면체는 닫힘을 아무리 반복해도 정수 껍질에 닿지 않는 예가 있다.[^2]

## 단위 입방체 안의 다면체

$P\subseteq\lbrack 0,1\rbrack^n$ 일 때 계수의 크기는 차원으로 묶인다. $\mathrm{rank}(P)$ 는 $O(n^3\log n)$ 이고, 계수가 $n$ 을 넘는 $P$ 가 있다.[^3]

## 계수 0 과 정수 다면체

$\mathrm{rank}(P)=0$ 인 것과 $P=P_I$ 인 것이 같다. [완전 단일모듈 행렬](totally-unimodular-matrices.md) $A$ 와 정수 벡터 $b$ 로 적힌 $P$ 가 그런 예이고, 그 경우 절단평면이 아무것도 자르지 않는다.

## 홀수 사이클 부등식

그래프 $G$ 의 안정집합 완화 $\lbrace x\ge0:x_i+x_j\le1\ (ij\in E)\rbrace$ 에서, 길이 $2k+1$ 인 사이클 $C$ 의 변 부등식에 $u=1/2$ 씩 주고 내림하면 다음을 얻는다.

$$
\sum_{i\in C}x_i\le k
$$

이 부등식의 계수는 $1$ 이다. 완화 전체의 계수는 $1$ 이 아니고, 완전그래프 쪽 부등식이 반복을 요구한다.

# 활용

- [정수계획법](integer-programming.md)의 절단평면 종료. 그 문서는 절단평면 방법이 유한 번에 끝난다고 서술하고 횟수를 다루지 않는다. 그 횟수가 Chvátal 계수다.
- 완전 단일모듈 행렬의 정수성. 그 문서가 주는 다면체는 계수가 $0$ 이고, 계수는 그 정수성이 깨진 완화가 정수 껍질에서 얼마나 떨어져 있는지를 재는 값이 된다.
- 완화의 질 비교. 같은 조합 문제의 두 선형 완화를 계수로 견준다. 위 홀수 사이클 부등식은 계수 $1$ 이므로 그것을 미리 넣은 완화는 계수가 하나 작다.

[^1]: Schrijver, *Theory of Linear and Integer Programming*, §23.1–23.4 — 기본 닫힘의 정의, 유계 유리 다면체에서 계수의 유한성, 차원 귀납 증명.
[^2]: Schrijver, 같은 책 §23.4 — 유계 조건을 뺀 반례.
[^3]: Eisenbrand and Schulz, *Bounds on the Chvátal Rank of Polytopes in the 0/1-Cube*, Combinatorica 23 (2003), 245–261.

# 연관 문서

## 선수지식

- [정수계획법](integer-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #combinatorics #algorithms
