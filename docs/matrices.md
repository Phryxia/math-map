# 행렬

# 개요

**행렬(matrix)** 은 수를 가로줄과 세로줄로 늘어놓은 직사각형 표다. 평면의 점 $(s,t)$ 를 $(x,y)=(s-t,\ s+2t)$ 로 옮기고, 다시 $(u,v)=(2x+y,\ x+3y)$ 로 옮기면 $(u,v)$ 를 $(s,t)$ 로 적는 계수가 필요한데, 대입해 전개할 때마다 같은 꼴의 곱과 합이 되풀이된다. 행렬은 두 변환의 계수만 떼어 적고, 그 되풀이되는 계산을 행렬 곱셈 하나로 정한다.

# 직관

두 변환을 차례로 하면 다음이 나온다.

$$
u=2(s-t)+(s+2t)=3s+0t,\qquad v=(s-t)+3(s+2t)=4s+5t
$$

결과의 $s$ 계수 $3$ 은 $u$ 식의 계수 $2,1$ 과 $s$ 가 $x,y$ 에 들어간 계수 $1,1$ 을 짝지어 곱해 더한 $2\cdot 1+1\cdot 1$ 이다. 나머지 세 계수도 같은 규칙으로 나온다. 계수를 표로 적으면 다음과 같다.

$$
\begin{pmatrix}2&1\cr 1&3\end{pmatrix}\begin{pmatrix}1&-1\cr 1&2\end{pmatrix}=\begin{pmatrix}3&0\cr 4&5\end{pmatrix}
$$

결과의 $i$ 번째 줄 $k$ 번째 칸은 왼쪽 표의 $i$ 번째 가로줄과 오른쪽 표의 $k$ 번째 세로줄을 짝지어 곱해 더한 값이다. 두 변환의 순서를 바꾸면 같은 규칙으로 $\begin{pmatrix}1&-2\cr 4&7\end{pmatrix}$ 이 나오므로 결과가 달라진다.

# 정의

## 행렬과 연산

$F$ 를 [체](fields.md)라 하자. $F$ 의 원소 $a_{ij}$ ($1\le i\le m$, $1\le j\le n$) 를 $m$ 개의 **행(row)** 과 $n$ 개의 **열(column)** 로 늘어놓은 것을 $m\times n$ 행렬이라 하고 $A=(a_{ij})$ 로 쓴다. $m\times n$ 행렬 전체의 집합을 $M_{m\times n}(F)$, $m=n$ 이면 $M_n(F)$ 로 쓰고, $m=n$ 인 행렬을 **정사각행렬(square matrix)** 이라 한다. 직관 절의 세 표는 모두 $2\times2$ 정사각행렬이고, 개요의 변환 $(x,y)=(s-t,\thinspace s+2t)$ 에서 $x$ 식의 계수만 적은 $\begin{pmatrix}1&-1\end{pmatrix}$ 은 $1\times2$ 행렬이다.

같은 크기의 두 행렬의 합과 스칼라배는 성분끼리 정의한다. $m\times n$ 행렬 $A$ 와 $n\times p$ 행렬 $B$ 의 **행렬 곱(matrix product)** $AB$ 는 다음 성분을 갖는 $m\times p$ 행렬이다.

$$
(AB)\_{ik}=\sum_{j=1}^{n}a_{ij}b_{jk}
$$

$A$ 의 열의 수와 $B$ 의 행의 수가 다르면 곱은 정의되지 않는다. 직관 절의 계산이 $m=n=p=2$ 인 경우다. $2\times2$ 행렬과 $1\times2$ 행렬의 곱은 정의되지 않는다.

## 단위행렬과 역행렬

대각 성분이 $1$ 이고 나머지가 $0$ 인 $n\times n$ 행렬을 **단위행렬(identity matrix)** $I_n$ 이라 한다. $I_2$ 는 점 $(s,t)$ 를 그대로 두는 변환의 계수 표다. 정사각행렬 $A$ 에 대해 $AB=BA=I_n$ 인 $B$ 가 있으면 $A$ 를 **가역(invertible)** 이라 하고 $B$ 를 **역행렬(inverse matrix)** $A^{-1}$ 이라 한다. 직관 절의 오른쪽 행렬은 가역이다.

$$
\begin{pmatrix}1&-1\cr 1&2\end{pmatrix}\cdot\frac13\begin{pmatrix}2&1\cr -1&1\end{pmatrix}=\frac13\begin{pmatrix}3&0\cr 0&3\end{pmatrix}=I_2
$$

$\begin{pmatrix}1&1\cr 1&1\end{pmatrix}$ 은 $(1,-1)$ 과 $(0,0)$ 을 둘 다 $(0,0)$ 으로 보내므로 되돌리는 변환이 없고 가역이 아니다.

## 전치와 대각합

$A=(a_{ij})$ 의 행과 열을 바꾼 $n\times m$ 행렬 $(a_{ji})$ 를 **전치행렬(transpose)** $A^{\mathsf T}$ 라 한다. 정사각행렬의 대각 성분의 합 $\mathrm{tr}\thinspace A=\sum_i a_{ii}$ 를 **대각합(trace)** 이라 한다. $\begin{pmatrix}1&-1\cr 1&2\end{pmatrix}$ 의 전치행렬은 $\begin{pmatrix}1&1\cr -1&2\end{pmatrix}$ 이고 대각합은 $1+2=3$ 이다.

# 성질

## 선형사상의 합성

$n\times 1$ 행렬을 열벡터로 보면 $x\mapsto Ax$ 는 $F^n$ 에서 $F^m$ 으로 가는 [선형사상](linear-maps.md)이다. 모든 $m\times n$ 행렬 $A$ 에 대해 $I_mA=A=AI_n$ 이다.

**정리.** $A$ 가 나타내는 사상 $x\mapsto Ax$ 와 $B$ 가 나타내는 사상 $y\mapsto By$ 의 합성 $y\mapsto A(By)$ 는 $AB$ 가 나타내는 사상이다.

증명의 요지. $A(By)$ 의 $i$ 번째 성분은 $\sum_j a_{ij}\sum_k b_{jk}y_k=\sum_k\left(\sum_j a_{ij}b_{jk}\right)y_k$ 다. 직관 절의 대입 계산이 이 식의 $2\times 2$ 경우다.

## 결합법칙과 비가환성

행렬 곱은 결합법칙 $(AB)C=A(BC)$ 와 분배법칙 $A(B+C)=AB+AC$ 를 만족한다. 결합법칙은 양변이 같은 세 사상의 합성을 나타낸다는 위 정리에서 나온다. 교환법칙은 성립하지 않는다. 직관 절의 두 행렬이 반례다.

$M_n(F)$ 는 이 덧셈과 곱셈으로 [환](rings.md)이고, $n\ge 2$ 이면 가환이 아니다. $0$ 이 아닌 두 행렬의 곱이 $0$ 일 수도 있다.

$$
\begin{pmatrix}0&1\cr 0&0\end{pmatrix}\begin{pmatrix}0&1\cr 0&0\end{pmatrix}=\begin{pmatrix}0&0\cr 0&0\end{pmatrix}
$$

## 역행렬

역행렬이 있으면 하나뿐이다. $B$ 와 $C$ 가 둘 다 역행렬이면 $B=B(AC)=(BA)C=C$ 다. $A$ 와 $B$ 가 가역이면 $(AB)^{-1}=B^{-1}A^{-1}$ 이다. $2\times 2$ 행렬은 $ad-bc\ne 0$ 일 때 가역이고 역행렬은 다음이다.

$$
\begin{pmatrix}a&b\cr c&d\end{pmatrix}^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\cr -c&a\end{pmatrix}
$$

$ad-bc$ 를 $n\times n$ 으로 넓힌 것이 [행렬식](determinants.md)이고, 가역성은 행렬식이 $0$ 이 아닌 것과 동치다. 정사각행렬에서는 $AB=I_n$ 이 $BA=I_n$ 을 함의한다. $AB=I_n$ 이면 $x\mapsto Bx$ 가 단사이고, 차원 정리로 전사다.

## 전치와 대각합의 등식

$(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$ 다. 양변의 $(k,i)$ 성분이 모두 $\sum_j a_{ij}b_{jk}$ 다. 대각합은 $\mathrm{tr}(AB)=\mathrm{tr}(BA)$ 를 만족한다. 양변이 모두 $\sum_{i,j}a_{ij}b_{ji}$ 다. 그래서 $\mathrm{tr}(P^{-1}AP)=\mathrm{tr}(A)$ 이고, 대각합은 기저를 바꿔도 변하지 않는 선형사상의 값이다.

## 블록 곱셈

행과 열을 몇 묶음으로 나눠 행렬을 작은 행렬들의 표로 보면, 묶음의 크기가 맞을 때 곱은 작은 행렬들을 성분처럼 다뤄 계산된다.

$$
\begin{pmatrix}A_{11}&A_{12}\cr A_{21}&A_{22}\end{pmatrix}\begin{pmatrix}B_{11}&B_{12}\cr B_{21}&B_{22}\end{pmatrix}=\begin{pmatrix}A_{11}B_{11}+A_{12}B_{21}&A_{11}B_{12}+A_{12}B_{22}\cr A_{21}B_{11}+A_{22}B_{21}&A_{21}B_{12}+A_{22}B_{22}\end{pmatrix}
$$

곱의 순서는 바꾸지 않는다. 각 성분의 합 $\sum_j a_{ij}b_{jk}$ 를 $j$ 의 묶음별로 나눠 더한 것이다.[^1]

# 활용

- [Gauss 소거법](gaussian-elimination.md)의 기본 행 연산 하나는 가역행렬 하나를 왼쪽에 곱하는 것이고, 연립일차방정식은 $Ax=b$ 로 적힌다.
- [행렬식](determinants.md)과 [고윳값](eigenvalues.md)은 정사각행렬의 값이고, 둘 다 $P^{-1}AP$ 로 바꿔도 변하지 않는다.
- [Markov 연쇄](markov-chains.md)의 $n$ 단계 전이확률은 전이행렬의 $n$ 제곱의 성분이다.
- [그래프](graphs.md)의 인접행렬 $A$ 에서 $A^n$ 의 $(i,j)$ 성분은 $i$ 에서 $j$ 로 가는 길이 $n$ 인 보행의 개수다. 곱의 성분 $\sum_k a_{ik}a_{kj}$ 가 중간 정점 $k$ 를 거치는 경우를 센다.
- [Strassen 알고리즘](strassen-algorithm.md)은 블록 곱셈에서 $2\times 2$ 블록 곱 여덟 번을 일곱 번으로 줄여 $n\times n$ 행렬 곱을 $O(n^{\log_2 7})$ 번의 연산으로 한다.

[^1]: Kenneth Hoffman, Ray Kunze, *Linear Algebra*, 2nd ed., Chapter 1, §1.5–1.6 (행렬 곱셈과 가역행렬).

# 연관 문서

## 선수지식

- [선형사상](linear-maps.md)

## 더 알아보기

- [Gauss 소거법](gaussian-elimination.md)
- [행렬식](determinants.md)
- [Strassen 알고리즘](strassen-algorithm.md)

#linear_algebra #algebra #ring_theory
