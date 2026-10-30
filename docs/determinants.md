# 행렬식

# 개요

**행렬식(determinant)** 은 정사각행렬에 스칼라 하나를 대응시키는 함수다. 평면에서 두 벡터 $(a,c)$ 와 $(b,d)$ 가 만드는 평행사변형의 넓이는 $\vert ad-bc\vert$ 이고, 이 값이 $0$ 이면 두 벡터가 한 직선 위에 있어 그 [행렬](matrices.md)로 정한 연립방정식의 해가 하나로 정해지지 않는다. 행렬식은 이 넓이를 $n$ 차원의 부호 있는 부피로 넓혀, 행렬이 가역인지와 부피를 몇 배로 늘리는지를 수 하나로 판정한다.

# 직관

두 열 $(2,0)$ 과 $(1,3)$ 으로 된 행렬 $\begin{pmatrix}2&1\cr 0&3\end{pmatrix}$ 를 본다. 두 열이 만드는 평행사변형은 밑변이 $2$, 높이가 $3$ 이므로 넓이가 $6$ 이다. 첫째 열을 $(4,0)$ 으로 두 배 늘리면 밑변이 $4$ 가 되어 넓이가 $12$ 다.

둘째 열에 첫째 열의 두 배를 더해 $(5,3)$ 으로 바꾸면 꼭짓점이 밑변과 나란히 밀릴 뿐 높이가 $3$ 그대로이므로 넓이는 $6$ 이다. 둘째 열을 첫째 열과 나란한 $(4,0)$ 으로 바꾸면 평행사변형이 선분이 되어 넓이가 $0$ 이다. 이때 연립방정식 $2x+4y=b_1$, $0=b_2$ 는 $b_2\ne0$ 이면 해가 없고 $b_2=0$ 이면 해가 무수히 많다.

두 열의 순서를 바꾸면 같은 평행사변형을 반대 방향으로 돈다. 방향을 부호로 기록해 $-6$ 으로 적으면, 넓이는 열마다 상수배와 덧셈을 그대로 따르고, 같은 두 열에서 $0$ 이며, 표준기저 $(1,0)$, $(0,1)$ 에서 $1$ 이다. 이 세 규칙만으로 넓이가 계산된다.

# 정의

$F$ 를 체, $A$ 를 $F$ 성분의 $n$ 차 정사각행렬, $a_1$ 부터 $a_n$ 을 $A$ 의 열벡터라 하자. **행렬식(determinant)** $\det A$ 는 열들의 함수로서 다음 세 조건을 만족하는 유일한 함수다. 존재와 유일성은 성질 절에서 증명한다. 첫째는 각 열에 대한 선형성이다.

$$
\det(\dots,\ \alpha u+\beta v,\ \dots)
=\alpha\det(\dots,u,\dots)+\beta\det(\dots,v,\dots)
$$

둘째와 셋째는 **교대성(alternating property)** 과 정규화다.

$$
a_i=a_j\ (i\neq j)\ \Longrightarrow\ \det A=0,
\qquad \det I_n=1
$$

직관 절의 세 규칙이 이 세 조건이다. $(2,0)=2(1,0)$, $(1,3)=(1,0)+3(0,1)$ 로 열을 쪼개 선형성을 쓰면 $\det\begin{pmatrix}2&1\cr 0&3\end{pmatrix}=2\cdot1\cdot\det(e_1,e_1)+2\cdot3\cdot\det(e_1,e_2)=0+6=6$ 이다. 여기서 $e_1=(1,0)$, $e_2=(0,1)$ 이다.

**소행렬(minor)** $A_{ij}$ 는 $A$ 에서 $i$ 행과 $j$ 열을 지운 $(n-1)$ 차 행렬이다. $\begin{pmatrix}2&1\cr 0&3\end{pmatrix}$ 의 $A_{11}$ 은 $1\times1$ 행렬 $(3)$ 이고 $A_{12}$ 는 $(0)$ 이다.

[선형사상](linear-maps.md) $T:V\to V$ 의 행렬식은 기저를 하나 골라 얻은 표현행렬의 행렬식이다. 평면을 $x$ 축 방향으로 $2$ 배, $y$ 축 방향으로 $3$ 배 늘리는 사상의 행렬식은 $6$ 이다. 이 값이 기저 선택과 무관하다는 것은 성질 절의 곱셈성에서 나온다.

# 성질

## 유일성과 Leibniz 공식

세 조건을 만족하는 함수는 존재하며 유일하고[^1], **Leibniz 공식(Leibniz formula)** 으로 주어진다. $S_n$ 은 $n$ 차 [대칭군](symmetric-groups.md), $\mathrm{sgn}$ 은 순열의 부호(짝순열이면 $1$ , 홀순열이면 $-1$ )다.

$$
\det A=\sum_{\sigma\in S_n}\mathrm{sgn}(\sigma)\prod_{i=1}^{n}a_{i\thinspace\sigma(i)}
$$

각 열을 표준기저로 전개하면 다중선형성으로 $n^n$ 개의 항이 생기고, 교대성이 인덱스가 중복된 항을 모두 $0$ 으로 만들어 인덱스가 순열인 항만 남는다. 순열을 인접 교환의 합성으로 분해하면 각 항의 부호가 $\mathrm{sgn}(\sigma)$ 가 되어 Leibniz 공식이 나온다. 같은 논증은 조금 더 강한 사실을 준다: 열들에 대한 임의의 교대 다중선형 함수 $D$ 는 $D(I)$ 배의 행렬식과 같다[^1].

## 여인수 전개

고정한 행 $i$ 에 대해 **여인수 전개(cofactor expansion, Laplace 전개)** 가 성립한다[^2].

$$
\det A=\sum_{j=1}^{n}(-1)^{i+j}a_{ij}\det A_{ij}
$$

$n=2$ 에서 첫 행으로 전개하면 $\det\begin{pmatrix}2&1\cr 0&3\end{pmatrix}=2\cdot3-1\cdot0=6$ 이다.

## 곱셈성

$A$ 를 고정하면 $AB$ 의 열은 $Ab_j$ 이므로, $B$ 에 대응시키는 함수 $\det(AB)$ 는 $B$ 의 열에 대해 교대 다중선형이다. 위 유일성 논증을 적용하면 이 함수는 그 값이 항등행렬에서 $\det A$ 인 $\det$ 의 상수배다.

$$
\det(AB)=\det A\cdot\det B
$$

따라서 $A$ 가 가역이면 $\det(A^{-1})$ 는 $\det A$ 의 역수다. Leibniz 공식에서 $\sigma$ 를 $\sigma^{-1}$ 로 바꾸어 합하면 전치에 대한 불변성도 나오므로, 행에 대한 모든 성질은 열에 대한 성질과 그대로 대응된다.

$$
\det(A^{\mathsf T})=\det A
$$

## 가역성 판정

행렬식이 $0$ 이 아닌 것, 열들이 선형독립인 것, $A$ 가 가역인 것은 서로 동치다. 열이 종속이면 한 열이 나머지의 선형결합이고 다중선형성과 교대성으로 행렬식이 $0$ 이 된다. 반대 방향은 adjugate 가 역행렬을 직접 만들어 준다.

$$
A^{-1}=\frac{1}{\det A}\mathrm{adj}(A),
\qquad (\mathrm{adj}A)\_{ij}=(-1)^{i+j}\det A_{ji}
$$

같은 공식에서 Cramer 공식이 나온다. $A^{(i)}$ 를 $A$ 의 $i$ 번째 열을 $b$ 로 교체한 행렬이라 하면 $Ax=b$ 의 해는 다음과 같다.

$$
x_i=\frac{\det A^{(i)}}{\det A}
$$

## 부피와 방향

실행렬 $A$ 에 대해 단위입방체의 상은 부피가 $\lvert\det A\rvert$ 인 평행육면체이고, 더 일반적으로 Lebesgue [측도](measure.md)는 선형사상 $A$ 아래에서 $\lvert\det A\rvert$ 배로 변한다. $\det A$ 가 양수면 방향을 보존한다. $m\le n$ 인 벡터 $m$ 개가 만드는 $m$ 차원 부피는 Gram 행렬의 행렬식으로 주어지며, 여기서 괄호는 [내적](inner-product-spaces.md)이다.

$$
\mathrm{vol}\_m(a_1,\dots,a_m)=\sqrt{\det G},
\qquad G_{ij}=\langle a_i,a_j\rangle
$$

## 흔한 오해

다중선형성은 열 단위이지 행렬 단위가 아니다. 일반적으로 $\det(A+B)$ 는 $\det A+\det B$ 와 다르고, 스칼라배는 차원만큼 곱해져 $\det(cA)=c^n\det A$ 다. 또 Leibniz 공식은 항이 $n!$ 개이므로 정의로는 쓰되 계산에는 쓰지 않는다.

# 활용

## 특성다항식

행렬식은 고윳값 문제를 다항식 문제로 바꾼다.

$$
\chi_A(\lambda)=\det(\lambda I-A)
$$

의 근이 [고윳값](eigenvalues.md)이다. 전개하면 $\lambda^{n-1}$ 의 계수가 대각합의 부호 반대이고 상수항이 $(-1)^n\det A$ 이므로, 대각합과 행렬식은 고윳값의 합과 곱이다.

## 계산

실제 계산은 [Gauss 소거](gaussian-elimination.md)(LU 분해, lower–upper decomposition)로 $O(n^3)$ 에 한다. 한 행에 다른 행의 배수를 더하는 연산은 행렬식을 보존하고 행 교환은 부호만 뒤집으므로, 소거 후 얻은 삼각행렬의 대각 성분 곱에 교환 횟수의 부호를 붙이면 된다.

## 그래프와 조합론

Kirchhoff 의 matrix-tree 정리로 연결 [그래프](graphs.md)의 신장트리 개수는 [그래프 Laplacian](graph-laplacian.md)에서 한 행과 한 열을 지운 소행렬의 행렬식(부호를 맞춘 값)과 같다[^3]. 이 공식에서 [유효저항](effective-resistance.md)이 두 행렬식의 비로 표현되고, [최소 신장트리](minimum-spanning-tree.md)를 세는 문제도 선형대수로 환원된다.

## 다변수 미적분

변수변환 공식에 등장하는 Jacobian 행렬식은 국소 부피 배율이다. [미분](derivative.md)이 국소 선형근사를 주므로, 좌표변환이 부피를 얼마나 왜곡하는지는 도함수 행렬의 행렬식이 측정한다.

[^1]: John Greene, Math 5327 — Determinants: Uniqueness and more Uniqueness, University of Minnesota Duluth. https://www.d.umn.edu/~jgreene/Math_5327_Linear/Determinants_2.pdf
[^2]: Larry Rolen, Linear Algebra Notes — Determinants / Laplace expansion and adjoint matrices, Vanderbilt University. https://math.vanderbilt.edu/rolenl/LinearAlgebraNotesDeterminants.pdf
[^3]: David P. Williamson, ORIE 6334 Lecture 8 — The Matrix-Tree Theorem, Cornell University. https://people.orie.cornell.edu/dpw/orie6334/lecture8.pdf

# 연관 문서

## 선수지식

- [행렬](matrices.md)
- [대칭군](symmetric-groups.md)

## 더 알아보기

### 행렬과 조합

- [고윳값](eigenvalues.md)
- [격자](lattices.md)
- [완전 단일모듈 행렬](totally-unimodular-matrices.md)
- [영구식](permanent.md)

### 해석과 위상

- [Fredholm 행렬식](fredholm-determinant.md)
- [Reidemeister 비틀림](reidemeister-torsion.md)

#linear_algebra #combinatorics #graph_theory
