# Cauchy–Binet 공식

# 개요

**Cauchy–Binet 공식(Cauchy–Binet formula)** 은 직사각행렬 두 개를 곱해 얻은 정사각행렬의 행렬식을, 두 행렬에서 같은 자리를 골라 만든 작은 정사각행렬의 행렬식들로 계산하는 공식이다. 3 차원 공간의 두 벡터가 만드는 평행사변형의 넓이를 구하려면, 두 벡터를 열로 둔 행렬이 $3\times 2$ 라 정사각이 아니어서 [행렬식](determinants.md)을 바로 쓸 수 없다. 이 공식은 그 넓이의 제곱이 평행사변형을 세 좌표평면에 수직으로 사영(projection)한 평행사변형 넓이의 제곱의 합이라는 것을 행렬식으로 보인다.

# 직관

두 벡터 $u=(1,0,1)$ 과 $v=(0,1,1)$ 이 만드는 평행사변형의 넓이를 구한다. 평면 위의 두 벡터라면 두 벡터를 열로 둔 $2\times 2$ 행렬의 행렬식이 넓이였다. 여기서는 벡터가 세 성분을 가지므로 그 방법을 쓸 수 없다.

평행사변형을 세 좌표평면에 수직으로 사영하면 평면 위의 평행사변형 세 개가 생긴다. 각 사영은 두 좌표만 남긴 벡터로 만들어지므로 $2\times 2$ 행렬식으로 넓이가 나온다.

| 남긴 좌표 | 두 벡터 | 행렬식 |
| --- | --- | --- |
| 1, 2 번째 | $(1,0)$, $(0,1)$ | $1$ |
| 1, 3 번째 | $(1,1)$, $(0,1)$ | $1$ |
| 2, 3 번째 | $(0,1)$, $(1,1)$ | $-1$ |

세 값을 제곱해 더하면 $3$ 이다. 한편 $u$ 와 $v$ 를 열로 둔 행렬을 $A$ 라 하면 $A^{\mathsf T}A$ 는 내적을 늘어놓은 $2\times 2$ 행렬이고 그 행렬식은 다음과 같다.

$$
\det A^{\mathsf T}A=\det\begin{pmatrix}2&1\cr 1&2\end{pmatrix}=3
$$

두 계산이 같은 $3$ 을 낸다. 평행사변형의 넓이는 $\sqrt 3$ 이고, 정사각이 아닌 행렬 $A$ 로 만든 $\det A^{\mathsf T}A$ 가 작은 행렬식의 제곱의 합으로 갈라진다.

# 정의

$A$ 를 $k\times m$ 행렬, $B$ 를 $m\times k$ 행렬이라 한다. $\lbrace 1,\dots,m\rbrace$ 의 원소 $k$ 개로 된 부분집합 $S$ 마다 다음 두 정사각행렬을 둔다.

- $A\_{\ast S}$ 는 $A$ 에서 $S$ 에 속한 번호의 열만 원래 순서대로 남긴 $k\times k$ 행렬이다.
- $B\_{S\ast}$ 는 $B$ 에서 $S$ 에 속한 번호의 행만 원래 순서대로 남긴 $k\times k$ 행렬이다.

이 행렬들의 행렬식을 $A$ 와 $B$ 의 **$k$ 차 소행렬식(minor of order $k$)** 이라 한다. 직관 절에서 $k=2$, $m=3$ 이고 $A^{\mathsf T}$ 와 $A$ 를 곱한다. $S=\lbrace 1,3\rbrace$ 이면 $(A^{\mathsf T})\_{\ast S}$ 는 $u,v$ 의 1, 3 번째 좌표로 된 행렬이고 그 행렬식이 표의 둘째 줄 $1$ 이다.

# 성질

## Cauchy–Binet 공식

$k\le m$ 이면 다음이 성립한다. Cauchy 와 Binet 이 1812 년에 따로 발표했다.[^1]

$$
\det(AB)=\sum_{S}\det A\_{\ast S}\thinspace\det B\_{S\ast}
$$

합은 원소 $k$ 개인 $S\subseteq\lbrace 1,\dots,m\rbrace$ 전체에 걸치고 항은 $\binom mk$ 개다. $k\gt m$ 이면 $AB$ 의 계수가 $m$ 이하이므로 $\det(AB)=0$ 이다. $k=m$ 이면 $S$ 가 하나뿐이어서 곱셈성 $\det(AB)=\det A\det B$ 다.

증명의 요지. $A$ 의 열을 $a_1,\dots,a_m$ 이라 하면 $AB$ 의 $j$ 번째 열은 $\sum_l b_{lj}a_l$ 이다. 행렬식을 열마다 전개하면 다음이 나온다.

$$
\det(AB)=\sum_{l_1,\dots,l_k}b_{l_1 1}\cdots b_{l_k k}\det(a_{l_1},\dots,a_{l_k})
$$

번호가 겹치는 항은 교대성으로 $0$ 이다. 남은 항을 번호의 집합 $S$ 와 그 번호를 늘어놓는 순열 $\sigma$ 로 묶으면 $\det(a_{l_1},\dots,a_{l_k})=\mathrm{sgn}(\sigma)\det A\_{\ast S}$ 이고, $\sigma$ 에 걸친 나머지 합이 Leibniz 공식에 따라 $\det B\_{S\ast}$ 다.

## Gram 행렬식

$n\times k$ 행렬 $A$ 의 열을 $a_1,\dots,a_k$ 라 하면 $A^{\mathsf T}A$ 는 $\langle a_i,a_j\rangle$ 를 늘어놓은 Gram 행렬이다. 공식을 $A^{\mathsf T}$ 와 $A$ 에 적용하면 다음이 나온다.

$$
\det A^{\mathsf T}A=\sum_{S}\bigl(\det A\_{S\ast}\bigr)^2
$$

$S$ 는 원소 $k$ 개인 좌표 번호의 집합이다. 좌변은 $a_1,\dots,a_k$ 가 만드는 평행체의 $k$ 차원 부피의 제곱이고, 우변의 각 항은 그 평행체를 $S$ 의 좌표축들이 펼치는 부분공간에 사영한 평행체의 부피의 제곱이다. 직관 절의 계산이 $n=3$, $k=2$ 인 경우다.

## Lagrange 항등식

$k=2$ 에서 $A$ 의 두 행을 $a=(a_1,\dots,a_m)$ 과 $b=(b_1,\dots,b_m)$ 으로 두고 $B=A^{\mathsf T}$ 로 놓는다. 그러면 Lagrange 항등식(Lagrange's identity)이 나온다.

$$
\Bigl(\sum_i a_i^2\Bigr)\Bigl(\sum_i b_i^2\Bigr)-\Bigl(\sum_i a_ib_i\Bigr)^2=\sum_{i\lt j}(a_ib_j-a_jb_i)^2
$$

우변이 $0$ 이상이므로 $\mathbb R^m$ 의 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)이 따라 나오고, 등호는 $a$ 와 $b$ 가 평행할 때다.

# 활용

- [행렬-트리 정리](matrix-tree-theorem.md). 축소 Laplacian 을 발생 행렬과 그 전치의 곱으로 쓰고 이 공식으로 전개하면, 간선 $n-1$ 개의 집합마다 하나씩 생긴 항이 그 집합이 신장트리일 때 $1$, 아닐 때 $0$ 이 된다.
- [행렬식](determinants.md)의 부피 공식. 벡터 $m$ 개가 만드는 $m$ 차원 부피를 Gram 행렬의 행렬식으로 쓰는 식이 위 Gram 행렬식 절에서 좌표평면에 사영한 부피의 제곱의 합으로 풀린다.
- [외대수](exterior-algebra.md). $k$ 차 소행렬식을 늘어놓은 행렬은 선형사상이 $k$ 차 외멱에 일으키는 사상의 행렬이고, Cauchy–Binet 공식은 이 대응이 행렬 곱을 보존한다는 진술과 같다.

[^1]: A.-L. Cauchy, "Mémoire sur les fonctions qui ne peuvent obtenir que deux valeurs égales et de signes contraires", *Journal de l'École Polytechnique* **10** (1815), 29–112. J. P. M. Binet, "Mémoire sur un système de formules analytiques, et leur application à des considérations géométriques", 같은 학술지 **9** (1813). 두 논문 모두 1812 년 11 월 30 일 프랑스 학사원에서 발표되었다. 현대적 증명은 R. A. Horn, C. R. Johnson, *Matrix Analysis*, 2판, Cambridge University Press, 2013, 0.8.7 절에 있다.

# 연관 문서

## 선수지식

- [행렬식](determinants.md)

## 더 알아보기

- [행렬-트리 정리](matrix-tree-theorem.md)

#linear_algebra #combinatorics
