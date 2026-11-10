# 연관 체계

# 개요

**연관 체계(association scheme)** 는 유한집합의 원소 쌍을 몇 가지 관계로 나누되, 두 원소를 잇는 중간 원소의 수가 두 원소의 관계로만 정해지게 한 구조다. 세 비트 문자열 여덟 개의 쌍을 다른 비트의 수 $0,1,2,3$ 으로 나누면, 거리 $2$ 인 두 문자열 사이에 양쪽과 거리 $1$ 인 문자열은 언제나 $2$ 개다. 이런 셈이 일정하면 관계마다 행렬 하나를 두었을 때 그 행렬들의 곱이 다시 그 행렬들의 일차결합이 되고, 부호와 설계의 셈 문제를 이 행렬들의 고윳값 계산으로 바꿀 수 있다.

# 직관

정육면체의 꼭짓점인 세 비트 문자열에서 거리 $i$ 인 쌍이면 $1$, 아니면 $0$ 인 $8\times 8$ [행렬](matrices.md)을 $A_i$ 라 한다. $A_0=I$ 이고, $A_0,\dots,A_3$ 을 모두 더하면 성분이 모두 $1$ 인 행렬 $J$ 다.

$A_1^2$ 의 $(x,y)$ 성분은 $x$ 와 $y$ 에 모두 거리 $1$ 인 $z$ 의 수다. $x=y$ 이면 $3$, 거리 $2$ 이면 $2$, 거리 $1$ 이나 $3$ 이면 $0$ 이다. 그래서 다음이 성립한다.

$$
A_1^2=3A_0+2A_2
$$

$A_1A_2$, $A_2^2$ 같은 다른 곱도 같은 방식으로 $A_0,\dots,A_3$ 의 일차결합이 된다. 네 행렬이 펼치는 공간은 곱에 닫혀 있고, 여기서 계산하면 $8\times 8$ 행렬 대신 $4\times 4$ 의 표만 다루면 된다.

# 정의

## 연관 체계

유한집합 $X$ 위의 $d$ 류 대칭 연관 체계는 $X\times X$ 를 겹치지 않게 나눈 관계 $R_0,R_1,\dots,R_d$ 로, 다음 세 조건을 만족하는 것이다[^1].

- $R_0=\lbrace(x,x):x\in X\rbrace$ 다.
- 각 $R_i$ 는 대칭이다. 곧 $(x,y)\in R_i$ 이면 $(y,x)\in R_i$ 다.
- $(x,y)\in R_k$ 일 때 $(x,z)\in R_i$, $(z,y)\in R_j$ 인 $z$ 의 수 $p^k_{ij}$ 는 $(x,y)$ 에 관계없이 $i,j,k$ 로만 정해진다.

$p^k_{ij}$ 를 교차수(intersection number)라 한다. 직관 절의 정육면체에서 $p^2_{11}=2$, $p^1_{11}=0$, $p^0_{11}=3$ 이다.

관계 $R_i$ 의 인접행렬을 $A_i$ 라 하면 세 조건은 $A_0=I$, $\sum_iA_i=J$, $A_i^\top=A_i$, 그리고 다음 식과 같다.

$$
A_iA_j=\sum_{k=0}^{d}p^k_{ij}A_k
$$

## Bose–Mesner 대수

$A_0,\dots,A_d$ 가 펼치는 실수 행렬 공간을 **Bose–Mesner 대수(Bose–Mesner algebra)** $\mathcal A$ 라 한다[^2]. 위 식에서 $\mathcal A$ 는 행렬 곱에 닫혀 있고, 대칭행렬의 곱 $A_iA_j$ 가 대칭이므로 $A_iA_j=(A_iA_j)^\top=A_jA_i$ 가 되어 가환이다. 직관 절의 네 행렬이 펼치는 4 차원 공간이 정육면체의 Bose–Mesner 대수다.

## 고윳값 행렬

$\mathcal A$ 의 행렬들은 대칭이고 서로 가환이므로 동시에 대각화된다. 공통 고유공간으로의 직교사영 $E_0=J/\vert X\vert,E_1,\dots,E_d$ 는 $\mathcal A$ 의 또 다른 기저다. 두 기저 사이의 변환을 다음처럼 쓴다.

$$
A_j=\sum_{i=0}^{d}P_{ij}E_i,\qquad E_j=\frac1{\vert X\vert}\sum_{i=0}^{d}Q_{ij}A_i
$$

$P_{ij}$ 는 $A_j$ 의 $i$ 번째 고유공간에서의 고윳값이다. $P$ 를 첫째 고윳값 행렬, $Q$ 를 둘째 고윳값 행렬이라 한다. 정육면체에서 $P$ 는 다음과 같다.

$$
P=\begin{pmatrix}1&3&3&1\cr 1&1&-1&-1\cr 1&-1&-1&1\cr 1&-3&3&-1\end{pmatrix}
$$

$P$ 의 둘째 열이 인접행렬 $A_1$ 의 고윳값 $3,1,-1,-3$ 이고, $j$ 번째 열은 [Krawtchouk 다항식](krawtchouk-polynomials.md) $K_j$ 를 $0,1,2,3$ 에서 계산한 값이다.

# 성질

## 거리 정칙 그래프

[거리 정칙 그래프](distance-regular-graphs.md)에서 거리 $i$ 인 쌍을 $R_i$ 로 두면 연관 체계가 된다. 거리 행렬의 점화식에서 $A_i$ 가 $A_1$ 의 $i$ 차 다항식이므로, $A_iA_j$ 가 $A_0,\dots,A_d$ 의 일차결합이다. 이처럼 $A_i$ 가 $A_1$ 의 $i$ 차 다항식 $v_i$ 로 $A_i=v_i(A_1)$ 이 되는 연관 체계를 P-다항식 체계(P-polynomial scheme)라 하고, P-다항식 체계는 거리 정칙 그래프의 거리 관계와 같다[^3].

$d=1$ 인 체계는 완전 그래프 하나뿐이고, $d=2$ 인 체계의 $R_1$ 은 [강정칙 그래프](strongly-regular-graphs.md)다.

## 내부 분포와 Delsarte 부등식

공집합이 아닌 부분집합 $C\subseteq X$ 의 내부 분포(inner distribution)를 다음으로 정한다.

$$
a_i=\frac{\vert(C\times C)\cap R_i\vert}{\vert C\vert}
$$

$a=(a_0,\dots,a_d)$ 는 모든 $j$ 에서 $(aQ)\_j\ge 0$ 을 만족한다[^3]. 증명의 요지. $C$ 의 지시벡터를 $\chi$ 라 하면 $(aQ)\_j=\frac{\vert X\vert}{\vert C\vert}\chi^\top E_j\chi$ 이고, $E_j$ 는 직교사영이므로 이 값이 음이 아니다.

정육면체의 $C=\lbrace 000,011,101,110\rbrace$ 는 서로 거리가 모두 $2$ 이므로 $a=(1,0,3,0)$ 이다. $Q$ 의 첫 열은 모두 $1$ 이고, 이 체계에서 $Q=P$ 이므로 $aQ=(4,0,0,4)$ 다.

## Hamming 체계와 Johnson 체계

길이 $n$ 의 $q$ 진 문자열에서 다른 자리의 수로 관계를 나눈 것이 Hamming 체계(Hamming scheme) $H(n,q)$ 이고, $P_{ij}$ 는 Krawtchouk 다항식의 값이다. $n$ 원소 집합의 $k$ 원소 부분집합에서 교집합의 크기로 관계를 나눈 것이 Johnson 체계(Johnson scheme) $J(n,k)$ 이고, $P_{ij}$ 는 Eberlein 다항식(Eberlein polynomial), $Q_{ij}$ 는 Hahn 다항식(Hahn polynomial)의 값이다[^3]. 두 체계는 모두 P-다항식 체계이고, $E_j$ 도 $E_1$ 의 성분별 곱의 다항식인 Q-다항식 체계(Q-polynomial scheme)다.

# 활용

- 부호의 크기. Hamming 체계에서 부호 $C$ 의 최소 거리가 $\delta$ 이면 $a_1=\cdots=a_{\delta-1}=0$ 이다. 내부 분포의 합 $\sum_ia_i=\vert C\vert$ 를 $aQ\ge 0$ 아래에서 최대화하는 [선형계획](linear-programming.md)이 [Delsarte 선형계획 상한](delsarte-lp-bound.md)이다.
- 설계. Johnson 체계에서 $k$ 원소 블록의 모임이 $t$-설계인 것은 내부 분포의 $(aQ)\_j$ 가 $j=1,\dots,t$ 에서 $0$ 인 것과 동치다[^3]. [조합적 설계](block-designs.md)와 부호가 같은 틀에서 쌍대 관계로 다뤄진다.
- [Lovász theta 함수](lovasz-theta.md). 연관 체계의 관계로 만든 그래프에서 theta 함수의 변형 $\vartheta'$ 의 반정부호 계획은 Bose–Mesner 대수 안에서 풀리고, 그 결과가 Delsarte 의 선형계획과 같다.

[^1]: E. Bannai, T. Ito, *Algebraic Combinatorics I: Association Schemes*, Benjamin/Cummings (1984), 2 장.
[^2]: R. C. Bose, D. M. Mesner, On linear associative algebras corresponding to association schemes of partially balanced designs, *Ann. Math. Statist.* **30** (1959), 21–38.
[^3]: P. Delsarte, An algebraic approach to the association schemes of coding theory, *Philips Res. Rep. Suppl.* **10** (1973).

# 연관 문서

## 선수지식

- [거리 정칙 그래프](distance-regular-graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #linear_algebra
