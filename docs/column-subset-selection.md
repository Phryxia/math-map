# 열 부분집합 선택

# 개요

**열 부분집합 선택(column subset selection)** 은 행렬의 열 가운데 정해진 개수를 골라, 나머지 열을 고른 열들의 선형결합으로 가장 잘 근사하는 문제다. 고객 천 명의 구매 기록을 열로 둔 표에서 대표 고객 열 명을 골라 나머지 고객을 그 열 명의 섞음으로 설명하려면, 특이값 분해가 주는 최적의 방향들은 실제 고객이 아니어서 쓸 수 없다. 열 부분집합 선택은 실제 열만 쓰면서 오차를 특이값 분해의 최적 오차의 상수배 안에 두는 방법을 준다.

# 직관

행렬의 세 열 $a_1=(1,0)$, $a_2=(1,1)$, $a_3=(0,1)$ 가운데 하나를 골라 나머지 둘을 그 열의 상수배로 근사한다. 열 $a$ 를 고르면 각 열 $b$ 의 오차는 $b$ 에서 $a$ 방향 성분을 뺀 길이의 제곱이다.

| 고른 열 | a₁ 의 오차 | a₂ 의 오차 | a₃ 의 오차 | 합 |
| --- | --- | --- | --- | --- |
| $a_1$ | $0$ | $1$ | $1$ | $2$ |
| $a_2$ | $1/2$ | $0$ | $1/2$ | $1$ |
| $a_3$ | $1$ | $1$ | $0$ | $2$ |

열에 구애받지 않고 아무 방향 하나로 근사하면 [특이값 분해](singular-value-decomposition.md)가 최적이다. 이 행렬에서 $AA^{\mathsf T}=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}$ 의 고윳값이 $3,1$ 이므로 최적 오차는 작은 쪽 $1$ 이다. 가운데 열을 고르면 그 최적에 닿고, 끝의 열을 고르면 두 배가 된다.

열이 많으면 모든 부분집합을 시험할 수 없다. 길이가 긴 열일수록 다른 열을 많이 설명하므로, 열을 길이의 제곱에 비례하는 확률 $1/4,1/2,1/4$ 로 뽑는다. 오차의 기댓값은 $2/4+1/2+2/4=3/2$ 이고 최적 오차의 두 배 안에 있다.

# 정의

$A$ 를 $m\times n$ 실행렬, 열을 $a_1,\dots,a_n$ 이라 한다. 원소 $k$ 개인 $S\subseteq\lbrace 1,\dots,n\rbrace$ 마다 $A_S$ 는 $S$ 의 열만 남긴 행렬이고, $P_S$ 는 $A_S$ 의 열공간으로의 정사영이다. $S$ 의 오차는 다음과 같다.

$$
\mathrm{err}(S)=\Vert A-P_SA\Vert_F^2=\sum_{j=1}^{n}\vert a_j-P_Sa_j\vert^2
$$

$\Vert\cdot\Vert_F$ 는 성분의 제곱의 합의 제곱근이다. 직관 절의 표의 합이 $k=1$ 인 $\mathrm{err}(S)$ 다. 계수가 $k$ 이하인 행렬 가운데 $A$ 에 가장 가까운 것을 $A_k$ 라 하면, Eckart–Young–Mirsky 정리에 따라 $\Vert A-A_k\Vert_F^2=\sum_{i\gt k}\sigma_i^2$ 이고 $\sigma_i$ 는 $A$ 의 특이값이다.

**체적 표본추출(volume sampling)** 은 $S$ 를 다음 확률로 뽑는 것이다.

$$
\Pr\lbrack S\rbrack=\frac{\det(A_S^{\mathsf T}A_S)}{\sum_{\vert T\vert=k}\det(A_T^{\mathsf T}A_T)}
$$

$\det(A_S^{\mathsf T}A_S)$ 는 고른 열들이 만드는 평행체의 부피의 제곱이다. $k=1$ 이면 열의 길이의 제곱이고, 직관 절의 확률 $1/4,1/2,1/4$ 가 이것이다.

# 성질

## 체적 표본추출의 오차

$e_k$ 를 $\sigma_1^2,\dots,\sigma_n^2$ 의 $k$ 차 기본대칭다항식이라 하면 체적 표본추출의 기대 오차는 다음과 같다.[^1]

$$
\mathbb E\thinspace\mathrm{err}(S)=(k+1)\frac{e_{k+1}(\sigma^2)}{e_k(\sigma^2)}\le(k+1)\Vert A-A_k\Vert_F^2
$$

직관 절에서 $\sigma^2=(3,1)$, $k=1$ 이므로 $e_1=4$, $e_2=3$ 이고 좌변은 $2\cdot 3/4=3/2$ 로 직관 절의 계산과 같다.

증명의 요지. 밑면의 부피에 높이를 곱하면 부피이므로, 원소 $k$ 개인 $S$ 와 $j\notin S$ 에서 다음이 성립한다.

$$
\det(A_S^{\mathsf T}A_S)\thinspace\vert a_j-P_Sa_j\vert^2=\det(A_{S\cup j}^{\mathsf T}A_{S\cup j})
$$

$j$ 와 $S$ 에 걸쳐 더하면 원소 $k+1$ 개인 집합 하나가 $k+1$ 번 세어진다. [Cauchy–Binet 공식](cauchy-binet-formula.md)으로 $\sum_{\vert S\vert=k}\det(A_S^{\mathsf T}A_S)$ 는 $A^{\mathsf T}A$ 의 $k$ 차 주소행렬식의 합, 곧 $e_k(\sigma^2)$ 이다. 부등식은 $e_{k+1}(\sigma^2)\le e_k(\sigma^2)\sum_{i\gt k}\sigma_i^2$ 에서 나온다.

## 상수의 최적성

$(k+1)$ 은 줄일 수 없다. 어느 $\varepsilon\gt 0$ 에서도 열 $k$ 개의 모든 선택이 $(k+1-\varepsilon)\Vert A-A_k\Vert_F^2$ 보다 큰 오차를 내는 행렬이 있다.[^1]

# 활용

- 저계수 근사의 해석 가능성. [무작위 특이값 분해](randomized-svd.md)가 주는 방향은 열들의 섞음이지만, 열 부분집합은 원래 자료의 열 자체여서 고른 열이 무엇을 뜻하는지 읽을 수 있다. 열과 행을 함께 고르는 CUR 분해(CUR decomposition)가 같은 틀이다.
- [Bourgain–Tzafriri 제한 가역성 정리](restricted-invertibility.md). 오차 대신 고른 열의 가장 작은 특이값을 아래로 누르는 쪽의 선택 문제이고, 두 문제 모두 부피와 퍼텐셜을 쓰는 탐욕적 선택으로 다룬다.
- [결정점과정](determinantal-point-process.md). 체적 표본추출은 $A^{\mathsf T}A$ 를 핵으로 하는 결정점과정을 크기 $k$ 로 제한한 것이다.

[^1]: A. Deshpande, L. Rademacher, S. Vempala, G. Wang, "Matrix approximation and projective clustering via volume sampling", *Theory of Computing* **2** (2006), 225–247.

# 연관 문서

## 선수지식

- [특이값 분해](singular-value-decomposition.md)
- [Cauchy–Binet 공식](cauchy-binet-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #statistics
