# 다모듈 다면체

# 개요

**다모듈 다면체(polymatroid)** 는 $f(\varnothing)=0$ 인 단조 [부분모듈 함수](submodular-functions.md) $f$ 에 대해 $P_f=\lbrace x\in\mathbb R^E_{\ge 0} : \sum_{e\in S}x_e\le f(S)\ \text{for all}\ S\subseteq E\rbrace$ 로 정의되는 다면체다. J. Edmonds 가 1970 년에 도입했다[^1]. $f$ 가 [matroid](matroids.md) 의 계수 함수이면 $P_f$ 는 독립집합의 지시벡터들의 볼록 껍질이다.

[Matroid 교집합 정리](matroid-intersection.md)와 탐욕법의 최적성은 이 다면체 위의 [선형계획법](linear-programming.md)으로 다시 증명된다. 탐욕법이 다면체의 꼭짓점을 주고, 두 다모듈 다면체의 교집합에서도 정수 꼭짓점이 유지된다.

# 직관

$E=\lbrace a,b,c\rbrace$ 에서 크기 $2$ 이하인 부분집합을 독립으로 하는 matroid 의 계수는 $r(S)=\min(2,\lvert S\rvert)$ 다. 무게 $w_a=3$, $w_b=2$, $w_c=1$ 에서 무게 합이 가장 큰 독립집합은 탐욕법으로 $\lbrace a,b\rbrace$ 이고 값은 $5$ 다.

독립집합을 지시벡터로 쓰면 $\lbrace a,b\rbrace$ 는 $(1,1,0)$ 이다. 이 벡터들의 볼록 껍질은 $0\le x_e\le 1$ 과 $x_a+x_b+x_c\le 2$ 로 적히고, 이 부등식들은 $\sum_{e\in S}x_e\le r(S)$ 꼴이다. 탐욕법이 고른 점은 무게 순서로 $x_a=r(\lbrace a\rbrace)-r(\varnothing)=1$, $x_b=r(\lbrace a,b\rbrace)-r(\lbrace a\rbrace)=1$, $x_c=r(E)-r(\lbrace a,b\rbrace)=0$ 이다.

이 계산은 $r$ 의 값의 차만 쓴다. 그래서 $r$ 자리에 다른 단조 부분모듈 함수 $f$ 를 넣어도 같은 부등식으로 다면체가 정의되고, 같은 차로 점이 나온다. 이 점이 그 다면체에서 무게 합을 최대로 하는 것이 다모듈 다면체의 탐욕 정리다.

# 정의

$f:2^E\to\mathbb R$ 은 $f(\varnothing)=0$ 인 단조 부분모듈 함수이고, $x\in\mathbb R^E$ 와 $S\subseteq E$ 에 대해 $x(S)=\sum_{e\in S}x_e$ 로 쓴다.

$$
P_f=\lbrace x\in\mathbb R^E : x\ge 0,\ x(S)\le f(S)\ (S\subseteq E)\rbrace
$$

를 $f$ 의 다모듈 다면체라 하고, $B_f=\lbrace x\in P_f : x(E)=f(E)\rbrace$ 를 기저 다면체(base polytope)라 한다. $f$ 가 matroid 의 계수 함수이면 $P_f$ 를 matroid 다면체(matroid polytope)라 한다.

# 성질

## 탐욕 정리

$w\in\mathbb R^E$ 의 성분을 $w_{\sigma(1)}\ge\cdots\ge w_{\sigma(n)}$ 으로 늘어놓고 $S_i=\lbrace\sigma(1),\dots,\sigma(i)\rbrace$ 라 하자. $w_{\sigma(i)}\gt 0$ 인 $i$ 에서 $x_{\sigma(i)}=f(S_i)-f(S_{i-1})$, 나머지에서 $x_{\sigma(i)}=0$ 으로 둔 $x$ 는 $P_f$ 에서 $w\cdot x$ 를 최대로 한다[^1].

증명의 요지. 부분모듈성에서 $x\in P_f$ 이다. 쌍대 선형계획에서 $w_{\sigma(i)}-w_{\sigma(i+1)}\ge 0$ 을 사슬 $S_i$ 의 변수에 놓으면 쌍대 가능해가 되고, 목적값이 $\sum_i(w_{\sigma(i)}-w_{\sigma(i+1)})f(S_i)=w\cdot x$ 로 같다. 쌍대정리에서 $x$ 가 최적이다.

$w\ge 0$ 이면 이 최댓값은 $f$ 의 Lovász 확장 $\hat f(w)$ 다. 기저 다면체 $B_f$ 의 꼭짓점은 순열 $\sigma$ 마다 위 식으로 나오는 점들이다.

## matroid 다면체

$f=r$ 이 matroid 의 계수 함수이면 탐욕 정리의 점은 $\lbrace 0,1\rbrace$ 값을 가지며 독립집합 $\lbrace\sigma(i) : r(S_i)\gt r(S_{i-1}),\ w_{\sigma(i)}\gt 0\rbrace$ 의 지시벡터다. 그래서 $P_r$ 의 꼭짓점은 독립집합의 지시벡터이고, $P_r$ 은 그 지시벡터들의 볼록 껍질이다.

## 다모듈 다면체 교집합 정리

$f_1,f_2$ 가 $f(\varnothing)=0$ 인 단조 부분모듈 함수이면

$$
\max\lbrace x(E) : x\in P_{f_1}\cap P_{f_2}\rbrace=\min_{A\subseteq E}\bigl(f_1(A)+f_2(E\setminus A)\bigr)
$$

이다. $f_1,f_2$ 가 정수값이면 $P_{f_1}\cap P_{f_2}$ 의 꼭짓점이 모두 정수다[^1].

증명의 요지. 두 다면체의 부등식을 합친 계가 [전체 쌍대 정수성](total-dual-integrality.md)을 가진다. 쌍대 최적해의 지지집합에서 교차하는 두 집합 $S,T$ 를 $S\cup T$ 와 $S\cap T$ 로 바꾸어도 부분모듈성으로 목적값이 늘지 않으므로, 각 함수의 지지집합이 사슬인 쌍대 최적해가 있다. 두 사슬의 제약행렬은 완전 단일모듈이다. $f_1,f_2$ 가 matroid 의 계수 함수이면 이 식이 matroid 교집합 정리이고, 두 matroid 의 공통 독립집합 다면체가 $P_{r_1}\cap P_{r_2}$ 라는 것도 함께 나온다.

# 활용

- 가중 matroid 교집합. 공통 독립집합 다면체가 $P_{r_1}\cap P_{r_2}$ 이므로 무게 합이 가장 큰 공통 독립집합을 선형계획법으로 구한다. 이분 그래프의 최대 무게 매칭이 그 특수한 경우다.
- 부분모듈 함수의 최소화. 기저 다면체 $B_f$ 위에서 음수 부분의 합을 최대로 하는 문제의 쌍대가 $\min_S f(S)$ 이고, 조합적 최소화 알고리즘은 $B_f$ 의 꼭짓점을 탐욕 정리로 만들며 진행한다.
- 다중 접속 채널. 입력이 서로 독립인 다중 접속 채널의 용량 영역은 입력 분포를 고정하면 $S\mapsto I(X_S;Y\mid X_{E\setminus S})$ 의 다모듈 다면체다.

[^1]: J. Edmonds, "Submodular functions, matroids, and certain polyhedra", in Combinatorial Structures and Their Applications, Gordon and Breach (1970), 69–87.

# 연관 문서

## 선수지식

- [부분모듈 함수](submodular-functions.md)
- [Matroid 교집합 정리](matroid-intersection.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #combinatorics
