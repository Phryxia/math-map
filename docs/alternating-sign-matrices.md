# 교대 부호 행렬

# 개요

**교대 부호 행렬(alternating sign matrix)** 은 성분이 $0$, $1$, $-1$ 이고, 행마다 열마다 $0$ 이 아닌 성분이 $1$ 과 $-1$ 을 번갈아 가며 $1$ 로 시작해 $1$ 로 끝나는 정사각행렬이다. 행렬식을 $2\times 2$ 행렬식만으로 계산하는 Dodgson 응축(Dodgson condensation)에서 뺄셈을 다른 연산으로 바꾸면, 결과의 항마다 지수로 이런 행렬이 하나씩 나온다.

순열 행렬은 모두 교대 부호 행렬이고, $3\times 3$ 에서는 순열 행렬 $6$ 개에 가운데 성분이 $-1$ 인 것 하나가 더해져 $7$ 개다. 크기 $n$ 인 교대 부호 행렬의 수는 $1,2,7,42,429,\dots$ 이고 이것을 하나의 곱 공식으로 주는 것이 교대 부호 행렬 정리다.

# 직관

$3\times 3$ 행렬 $M=\lbrack m\_{ij}\rbrack$ 의 행렬식을 $2\times 2$ 행렬식만으로 구한다. 먼저 이웃한 네 $2\times 2$ 블록의 행렬식을 구한다.

$$
\begin{aligned}A&=m\_{11}m\_{22}-m\_{12}m\_{21}, & B&=m\_{12}m\_{23}-m\_{13}m\_{22},\cr C&=m\_{21}m\_{32}-m\_{22}m\_{31}, & D&=m\_{22}m\_{33}-m\_{23}m\_{32}\end{aligned}
$$

이 넷을 다시 $2\times 2$ 행렬로 놓고 행렬식을 구해 가운데 성분으로 나누면 $\det M=(AD-BC)/m\_{22}$ 이다. 이것이 Dodgson 응축이다.

Robbins 와 Rumsey 는 $2\times 2$ 행렬식 $ad-bc$ 를 매번 $ad+\lambda bc$ 로 바꾸어 같은 계산을 했다. 그 결과를 전개하면 다음 일곱 항이 나온다.

$$
\begin{aligned}&m\_{11}m\_{22}m\_{33}+\lambda m\_{11}m\_{23}m\_{32}+\lambda m\_{12}m\_{21}m\_{33}+\lambda^2m\_{12}m\_{23}m\_{31}\cr &+\lambda^2m\_{13}m\_{21}m\_{32}+\lambda^3m\_{13}m\_{22}m\_{31}+(\lambda^2+\lambda)\frac{m\_{12}m\_{21}m\_{23}m\_{32}}{m\_{22}}\end{aligned}
$$

앞의 여섯 항은 순열 하나마다 하나다. 마지막 항은 $m\_{22}$ 가 분모에 있다. 각 항에서 $m\_{ij}$ 의 지수를 $(i,j)$ 성분으로 적으면, 마지막 항은 첫 행이 $0,1,0$, 둘째 행이 $1,-1,1$, 셋째 행이 $0,1,0$ 인 행렬이 된다. $\lambda=-1$ 이면 마지막 항의 계수가 $0$ 이 되어 보통의 행렬식이 남는다.

# 정의

## 교대 부호 행렬

$n\times n$ 행렬 $A$ 가 다음 세 조건을 만족하면 교대 부호 행렬이라 한다.

- 성분은 $0$, $1$, $-1$ 가운데 하나다.
- 각 행과 각 열의 성분의 합이 $1$ 이다.
- 각 행과 각 열에서 $0$ 이 아닌 성분이 $1$ 과 $-1$ 을 번갈아 나온다.

둘째와 셋째 조건을 합치면 $0$ 이 아닌 성분이 $1$ 로 시작하고 $1$ 로 끝난다. 직관 절의 마지막 항에서 얻은 행렬이 교대 부호 행렬이고, $-1$ 이 없는 교대 부호 행렬이 순열 행렬이다. 크기 $n$ 인 교대 부호 행렬의 수를 $A\_n$ 이라 쓴다.

## 역순과 음의 성분 수

교대 부호 행렬 $A$ 의 음의 성분 수를 $N(A)$, 역순 수를 다음으로 쓴다.

$$
\mathrm{inv}(A)=\sum\_{i\lt k,\thinspace j\gt l}A\_{ij}A\_{kl}
$$

순열 행렬에서는 $\mathrm{inv}$ 가 순열의 역순 수다. 직관 절의 행렬은 $N=1$ 이고, 성분 $(1,2)$ 와 $(2,1)$, 성분 $(2,3)$ 과 $(3,2)$ 의 두 쌍이 곱 $1$ 을 내어 $\mathrm{inv}=2$ 다.

## λ 행렬식

$2\times 2$ 행렬에 대해 $\det\_\lambda=ad+\lambda bc$ 로 두고, Dodgson 응축의 각 단계에서 $2\times 2$ 행렬식 대신 $\det\_\lambda$ 를 쓴 결과를 $M$ 의 **λ 행렬식(λ-determinant)** $\det\_\lambda M$ 이라 한다. $\det\_{-1}$ 은 보통의 행렬식이다.

# 성질

## Robbins–Rumsey 전개

λ 행렬식은 교대 부호 행렬에 대한 다음 합이다[^1].

$$
\det\_\lambda M=\sum\_{A}\lambda^{\mathrm{inv}(A)}(1+\lambda^{-1})^{N(A)}\prod\_{i,j}m\_{ij}^{A\_{ij}}
$$

직관 절의 마지막 항은 $\mathrm{inv}=2$, $N=1$ 이라 계수가 $\lambda^2(1+\lambda^{-1})=\lambda^2+\lambda$ 다. $\lambda=-1$ 이면 $N(A)\ge 1$ 인 항이 모두 사라져 행렬식의 Leibniz 전개가 된다.

## 교대 부호 행렬 정리

**정리(Zeilberger, Kuperberg).** 크기 $n$ 인 교대 부호 행렬의 수는 다음과 같다[^2][^3].

$$
A\_n=\prod\_{k=0}^{n-1}\frac{(3k+1)!}{(n+k)!}
$$

$n=3$ 이면 $\frac{1!}{3!}\cdot\frac{4!}{4!}\cdot\frac{7!}{5!}=\frac{42}{6}=7$ 이다. Mills, Robbins, Rumsey 가 이 공식을 추측했고, Zeilberger 가 단조 삼각형의 셈으로, Kuperberg 가 정사각 얼음 모형의 분배함수로 증명했다.

## 단조 삼각형

교대 부호 행렬의 각 열에서 위에서부터 $k$ 행까지의 성분을 더하면, $k$ 번째 행의 합이 $1$ 인 열의 번호 $k$ 개가 나온다. 이 번호들을 $k=1,\dots,n$ 에 대해 쌓은 삼각형은 각 줄이 증가하고 이웃한 줄이 서로 끼어 있다. 이런 삼각형을 단조 삼각형(monotone triangle)이라 하고, 교대 부호 행렬과 일대일로 대응한다. 직관 절의 행렬은 $\lbrace 2\rbrace$, $\lbrace 1,3\rbrace$, $\lbrace 1,2,3\rbrace$ 이다.

## 정사각 얼음 모형

격자의 꼭짓점마다 네 간선에 방향을 주되 들어오는 간선과 나가는 간선이 둘씩이 되게 하는 것을 정사각 얼음(square ice) 배치, 곧 여섯 꼭짓점 모형(six-vertex model)의 배치라 한다. 경계의 방향을 왼쪽과 오른쪽은 안으로, 위와 아래는 밖으로 고정하면 $n\times n$ 격자의 배치가 크기 $n$ 인 교대 부호 행렬과 일대일로 대응한다. 여섯 가지 꼭짓점 가운데 둘이 $1$ 과 $-1$, 나머지 넷이 $0$ 이다. Kuperberg 는 이 모형의 분배함수에 대한 Izergin–Korepin 행렬식 공식(Izergin–Korepin formula)에 특별한 값을 넣어 정리를 증명했다[^3].

## 2 가중 셈

음의 성분마다 가중치 $2$ 를 준 합은 다음이다[^1].

$$
\sum\_{A}2^{N(A)}=2^{n(n-1)/2}
$$

$n=3$ 이면 순열 행렬 $6$ 개와 가중치 $2$ 인 행렬 하나로 $8=2^3$ 이다. 이 값은 λ 행렬식에 $\lambda=1$ 과 모든 $m\_{ij}=1$ 을 넣은 것이다.

# 활용

- 평면 분할. $2n\times 2n\times 2n$ 상자에 들어가는 완전 대칭이고 자기 보완인 [평면 분할](plane-partitions.md)의 수와 내림 평면 분할(descending plane partition)의 수가 모두 $A\_n$ 과 같다.
- Aztec 다이아몬드의 쪽매. 크기 $n$ 인 Aztec 다이아몬드를 도미노로 채우는 방법의 수 $2^{n(n+1)/2}$ 는 크기 $n+1$ 인 교대 부호 행렬의 2 가중 셈과 같고, 두 셈은 같은 응축 점화식을 따른다.
- 통계역학. 정사각 얼음 모형의 경계 조건이 영역 벽 경계 조건(domain wall boundary condition)이고, 그 분배함수의 행렬식 공식과 대칭성이 Yang–Baxter 방정식에서 나온다.
- 응축 알고리즘. Dodgson 응축은 행렬식을 나눗셈 $n-2$ 단계로 계산하는 방법이며, 중간의 연속 소행렬식이 $0$ 이면 나눗셈을 할 수 없다.

[^1]: D. P. Robbins, H. Rumsey, "Determinants and alternating sign matrices", Advances in Mathematics 62 (1986), 169–184.
[^2]: D. Zeilberger, "Proof of the alternating sign matrix conjecture", Electronic Journal of Combinatorics 3(2) (1996), R13.
[^3]: G. Kuperberg, "Another proof of the alternating-sign matrix conjecture", International Mathematics Research Notices 1996 (1996), 139–150.

# 연관 문서

## 선수지식

- [행렬식](determinants.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #linear_algebra
