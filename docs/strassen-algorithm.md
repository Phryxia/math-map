# Strassen 알고리즘

# 개요

**Strassen 알고리즘(Strassen algorithm)** 은 $n\times n$ 행렬 두 개를 $2\times 2$ 블록으로 나눠 $n/2$ 크기 블록의 곱 일곱 번과 덧셈, 뺄셈 열여덟 번으로 곱을 구하는 분할 정복(divide and conquer) 알고리즘이다. 실행 시간은 $\Theta(n^{\log_2 7})$ 이고 $\log_2 7\approx 2.807$ 이다. V. Strassen 이 1969 년에 발표했다[^1].

행렬의 곱은 [선형사상](linear-maps.md)의 합성이고, 실행 시간은 [마스터 정리](master-theorem.md)의 첫째 경우로 나온다.

# 직관

$n\times n$ 행렬 $A$, $B$ 의 곱 $C=AB$ 를 정의대로 구하면 성분 $n^2$ 개마다 곱 $n$ 번을 더하므로 곱이 $n^3$ 번이다. 행렬을 $n/2$ 크기 블록 넷으로 나누면 $C\_{11}=A\_{11}B\_{11}+A\_{12}B\_{21}$ 처럼 블록 $C\_{ij}$ 마다 블록 곱 두 번이 들어 블록 곱이 모두 여덟 번이다. 실행 시간은 $T(n)=8T(n/2)+\Theta(n^2)$ 이고 $p=\log_2 8=3$ 이므로 $\Theta(n^3)$ 이다. 나누기만으로는 빨라지지 않는다.

[Karatsuba 곱셈](karatsuba-multiplication.md)은 곱 네 개 가운데 두 개가 합으로만 쓰이는 것을 써서 곱을 세 개로 줄였다. 행렬에서도 블록 곱 여덟 개를 블록들의 합과 차의 곱 일곱 개로 바꿀 수 있으면 $T(n)=7T(n/2)+\Theta(n^2)$ 이 되어 지수가 $\log_2 7$ 로 내려간다. Strassen 의 공식이 그 일곱 개다.

# 정의

## 블록 곱의 공식

$A$, $B$ 를 크기가 같은 $2\times 2$ 블록으로 나눈다.

$$
A=\begin{pmatrix}A_{11}&A_{12}\cr A_{21}&A_{22}\end{pmatrix},\qquad B=\begin{pmatrix}B_{11}&B_{12}\cr B_{21}&B_{22}\end{pmatrix}
$$

블록 곱 일곱 개를 구한다.

$$
\begin{aligned}
M_1&=(A_{11}+A_{22})(B_{11}+B_{22}), & M_2&=(A_{21}+A_{22})B_{11},\cr
M_3&=A_{11}(B_{12}-B_{22}), & M_4&=A_{22}(B_{21}-B_{11}),\cr
M_5&=(A_{11}+A_{12})B_{22}, & M_6&=(A_{21}-A_{11})(B_{11}+B_{12}),\cr
M_7&=(A_{12}-A_{22})(B_{21}+B_{22}) & &
\end{aligned}
$$

곱의 블록은 다음과 같다.

$$
\begin{aligned}
C_{11}&=M_1+M_4-M_5+M_7, & C_{12}&=M_3+M_5,\cr
C_{21}&=M_2+M_4, & C_{22}&=M_1-M_2+M_3+M_6
\end{aligned}
$$

$C\_{11}$ 을 전개하면 $M_1$ 의 $A\_{11}B\_{22}$, $A\_{22}B\_{11}$, $A\_{22}B\_{22}$ 가 $M_4$, $M_5$, $M_7$ 의 항과 지워지고 $A\_{11}B\_{11}+A\_{12}B\_{21}$ 이 남는다. 나머지 세 블록도 같은 전개로 확인된다.

블록 곱 일곱 번은 같은 알고리즘을 재귀로 써서 구하고, 블록이 정해진 크기보다 작아지면 정의대로 곱한다. $n$ 이 $2$ 의 거듭제곱이 아니면 다음 거듭제곱까지 $0$ 으로 채운다.

## 행렬 곱셈 지수

**행렬 곱셈 지수(exponent of matrix multiplication)** $\omega$ 는 체 위의 $n\times n$ 행렬 두 개를 $O(n^\tau)$ 번의 산술 연산으로 곱할 수 있는 실수 $\tau$ 의 하한이다. 곱의 성분 $n^2$ 개를 모두 써야 하므로 $\omega\ge 2$ 이고, Strassen 알고리즘에서 $\omega\le\log_2 7$ 이다.

# 성질

## 실행 시간

정리. Strassen 알고리즘은 $n\times n$ 행렬 두 개를 $O(n^{\log_2 7})$ 번의 산술 연산으로 곱한다[^1].

증명의 요지. 블록의 덧셈과 뺄셈 열여덟 번은 $\Theta(n^2)$ 이므로 $T(n)=7T(n/2)+\Theta(n^2)$ 이다. $p=\log_2 7\gt 2$ 이므로 마스터 정리의 첫째 경우에서 $T(n)=\Theta(n^{\log_2 7})$ 이다. $0$ 으로 채우면 크기가 두 배 이하로 늘어 상수만 바뀐다.

## 교환법칙을 쓰지 않는 공식

위 공식은 교환법칙(commutativity)을 쓰지 않는다. 곱의 순서를 바꾸지 않는다는 뜻이다. $M_i$ 마다 $A$ 의 블록들의 합이 왼쪽, $B$ 의 블록들의 합이 오른쪽에 있다. 그래서 블록이 행렬이어도 공식이 성립하고, 재귀가 가능하다. [Karatsuba 곱셈](karatsuba-multiplication.md)의 $(x_1+x_0)(y_1+y_0)-x_1y_1-x_0y_0=x_1y_0+x_0y_1$ 은 $x_0y_1=y_1x_0$ 을 쓰지 않으므로 같은 성질을 갖는다. 공식은 성분이 어느 환에 있어도 성립한다.

## 일곱 번의 최소성

$2\times 2$ 행렬의 곱을 구하는, 교환법칙을 쓰지 않는 공식은 곱이 일곱 번 이상이다. Winograd 와 Hopcroft–Kerr 가 1971 년에 증명했다[^2][^3]. $2\times 2$ 블록 분할로는 지수를 $\log_2 7$ 보다 낮출 수 없다.

## 텐서 계수와 지수

$n\times n$ 행렬의 곱은 쌍선형사상(bilinear map) $\mathbb F^{n\times n}\times\mathbb F^{n\times n}\to\mathbb F^{n\times n}$ 이고, [텐서곱](tensor-products.md) $(\mathbb F^{n\times n})^\ast\otimes(\mathbb F^{n\times n})^\ast\otimes\mathbb F^{n\times n}$ 의 원소 하나로 나타난다. 이 원소를 계수 $1$ 인 텐서 $r$ 개의 합으로 쓰는 것과, 곱 $r$ 번을 쓰는 교환법칙 없는 공식은 같은 것이다. 그런 $r$ 의 최솟값을 **텐서 계수(tensor rank)** 라 한다. Strassen 의 공식은 $2\times 2$ 의 텐서 계수가 $7$ 이하라는 뜻이다.

정리. $n\times n$ 행렬 곱의 텐서 계수가 $r$ 이하이면 $\omega\le\log_n r$ 이다[^4].

증명의 요지. 크기 $N=n^k$ 인 행렬을 $n\times n$ 블록으로 나눠 그 공식을 재귀로 쓰면 $T(N)=rT(N/n)+O(N^2)$ 이다. 마스터 정리에서 $T(N)=O(N^{\log_n r})$ 이다.

알려진 상한은 Strassen 이후 계속 내려갔다. Coppersmith–Winograd 의 방법을 다듬은 2024 년의 결과가 $\omega\lt 2.371552$ 다[^5].

## 수치 안정성

부동소수점에서 Strassen 알고리즘의 오차는 정의대로의 곱보다 크다. 정의대로의 곱은 성분마다 $\vert c\_{ij}-\hat c\_{ij}\vert\le n u\sum_k\vert a\_{ik}\vert\vert b\_{kj}\vert+O(u^2)$ 꼴의 한계를 갖지만, Strassen 알고리즘은 행렬 전체의 노름으로만 비슷한 한계를 갖는다. 여기서 $u$ 는 단위 반올림 오차(unit roundoff)다. 성분의 크기가 크게 다른 행렬에서는 작은 성분의 상대 오차가 커진다[^6].

# 활용

- 역행렬, [행렬식](determinants.md), 연립방정식의 해는 행렬 곱과 같은 차수 $O(n^\omega)$ 로 구한다. Strassen 의 논문 제목 "Gaussian elimination is not optimal" 이 이 결과를 가리킨다. 블록 LU(lower–upper) 분해가 곱 몇 번과 크기가 반인 같은 문제 두 개로 나뉘므로 마스터 정리에서 같은 지수가 나온다[^1].
- [그래프](graphs.md)의 삼각형 찾기. 인접행렬 $A$ 에 대해 $\mathrm{tr}(A^3)/6$ 이 삼각형의 수이므로 $O(n^\omega)$ 시간에 센다.

[^1]: V. Strassen, "Gaussian elimination is not optimal", Numerische Mathematik 13 (1969), 354–356.
[^2]: S. Winograd, "On multiplication of 2 × 2 matrices", Linear Algebra and its Applications 4 (1971), 381–388.
[^3]: J. E. Hopcroft, L. R. Kerr, "On minimizing the number of multiplications necessary for matrix multiplication", SIAM Journal on Applied Mathematics 20 (1971), 30–36.
[^4]: P. Bürgisser, M. Clausen, M. A. Shokrollahi, *Algebraic Complexity Theory*, Springer, 1997, 15 장.
[^5]: V. Vassilevska Williams, Y. Xu, Z. Xu, R. Zhou, "New bounds for matrix multiplication: from alpha to omega", Proceedings of the 2024 ACM-SIAM Symposium on Discrete Algorithms (SODA), 3792–3835.
[^6]: N. J. Higham, *Accuracy and Stability of Numerical Algorithms*, 2nd ed., SIAM, 2002, 23 장.

# 연관 문서

## 선수지식

- [선형사상](linear-maps.md)
- [마스터 정리](master-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #linear_algebra #complexity
