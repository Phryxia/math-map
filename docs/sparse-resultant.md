# 희소 종결식

# 개요

**희소 종결식(sparse resultant)** 은 지지집합이 정해진 여러 다항식이 공통근을 가질 조건을 계수의 다항식 하나로 적은 것이다. [종결식](resultant.md)은 두 다항식의 차수만 보고 계수를 늘어놓는데, 단항식 몇 개만 든 다항식에서는 그 행렬식이 항등적으로 $0$ 이 되어 쓸모가 없다. 희소 종결식은 실제로 나타나는 단항식만 보고 조건을 세우므로, 단항식이 적은 연립방정식에서 공통근 판정의 차수가 훨씬 낮다.

# 직관

평면의 세 곡선 $f_0,f_1,f_2$ 가 한 점에서 만나는지 묻는다. 세 곡선이 모두 상수항, $x$, $y$ 항만 가지면 다음과 같다.

$$
f_i=c\_{i0}+c\_{i1}x+c\_{i2}y\qquad(i=0,1,2)
$$

세 일차식이 공통근을 가질 조건은 계수 행렬의 행렬식이 $0$ 이라는 것이다.

$$
\det\begin{pmatrix}c\_{00}&c\_{01}&c\_{02}\cr c\_{10}&c\_{11}&c\_{12}\cr c\_{20}&c\_{21}&c\_{22}\end{pmatrix}=0
$$

이 행렬식이 세 다항식의 희소 종결식이다. 계수에 대한 차수가 $3$ 으로, 세 다항식 각각의 계수에 1차다.

차수로만 보면 세 다항식이 모두 1차이므로 [Bézout 정리](intersection-theory.md)의 수는 $1\cdot 1\cdot 1$ 에서 두 개를 소거해 얻는 값이 되어 더 큰 종결식을 만든다. 실제로 든 단항식이 $1,x,y$ 셋뿐이므로 조건은 $3\times 3$ 행렬식 하나로 끝난다.

# 정의

$A_0,\dots,A_n$ 을 $\mathbb Z^n$ 의 유한 부분집합이라 하고, $f_i=\sum\_{a\in A_i}c\_{i,a}x^a$ 를 지지집합이 $A_i$ 인 Laurent 다항식이라 한다. 계수 $c\_{i,a}$ 를 미지수로 본다.

연립방정식 $f_0=\dots=f_n=0$ 이 $(\mathbb C^\ast)^n$ 에서 해를 갖는 계수 $(c\_{i,a})$ 의 집합을 생각한다. 이 집합의 Zariski 폐포가 여차원 $1$ 이면, 그것을 정하는 기약다항식을 $A_0,\dots,A_n$ 의 **희소 종결식(sparse resultant)** 이라 하고 $\mathrm{Res}\_{A_0,\dots,A_n}$ 으로 쓴다. 상수배를 빼면 유일하다.[^1]

직관 절의 $A_i=\lbrace(0,0),(1,0),(0,1)\rbrace$ 에서 희소 종결식은 $3\times 3$ 행렬식이다.

모든 $A_i$ 가 같은 $A$ 이면 $A$-종결식($A$-resultant)이라 한다.

# 성질

## 차수와 혼합부피

정리. 희소 종결식을 $f_i$ 의 계수들에 대한 다항식으로 보면, 그 차수는 나머지 다항식들의 Newton 다면체의 혼합부피다.[^1]

$$
\deg\_{f_i}\mathrm{Res}=n!\thinspace V(P_0,\dots,\widehat{P_i},\dots,P_n)
$$

$P_j=\mathrm{conv}(A_j)$ 이고 $\widehat{P_i}$ 는 $P_i$ 를 뺀다는 표시다. 이 수가 $f_i$ 를 뺀 나머지 $n$ 개의 연립방정식이 $(\mathbb C^\ast)^n$ 에서 갖는 해의 개수이고, [Bernstein–Kushnirenko 정리](bernstein-kushnirenko.md)가 주는 값이다. 직관 절에서는 $P_j$ 가 모두 넓이 $1/2$ 인 삼각형이고 $2V=1$ 이므로 각 $f_i$ 에 1차다.

## 소거의 결과

$f_0,\dots,f_n$ 의 공통근 $\xi$ 가 있으면 희소 종결식이 $0$ 이다. 거꾸로 희소 종결식이 소거하는 변수의 값을 준다. $f_0$ 을 뺀 $n$ 개의 방정식의 해 $\xi_1,\dots,\xi_N$ 에서 $f_0$ 의 값을 곱한 것이 희소 종결식이다.[^2]

$$
\mathrm{Res}=\mathrm{const}\cdot\prod\_{k=1}^N f_0(\xi_k)
$$

종결식의 근의 곱 공식 $\mathrm{Res}(f,g)=a_m^n\prod_i g(r_i)$ 가 $n=1$ 의 경우다.

## Newton 다면체

정리. $A$-종결식의 Newton 다면체는 $A$ 에서 얻는 2차 Minkowski 합으로 적히는 다면체이고, 그 꼭짓점은 $A$ 의 혼합 세분(mixed subdivision)에 대응한다.[^2] 이것을 Newton 다면체라 하고, 희소 종결식을 전개하지 않고 어떤 항이 나타나는지 알려 준다.

## 행렬식 꼴

희소 종결식은 Sylvester 행렬의 일반화인 Macaulay 꼴의 행렬식들의 비로 얻거나, Canny 와 Emiris 의 혼합 세분으로 만든 정사각행렬의 행렬식으로 얻는다.[^2] 직관 절처럼 종결식이 하나의 행렬식으로 바로 나오는 것은 특수한 경우다.

# 활용

- 변수 소거. 연립방정식에서 변수 하나를 없앤 조건을 희소 종결식으로 적어, 차수가 낮은 한 변수 방정식으로 바꾼다.
- [호모토피 연속법](homotopy-continuation.md)의 경로 수. 다면체 호모토피가 따라가는 경로의 수가 혼합부피이고, 희소 종결식의 차수와 같은 양이다.
- 기구학과 기하. 평면 기구의 위치 방정식처럼 단항식이 적은 연립방정식의 해 조건을 작은 행렬식으로 얻는다.[^2]

[^1]: Israel M. Gelfand, Mikhail M. Kapranov and Andrei V. Zelevinsky, *Discriminants, Resultants, and Multidimensional Determinants*, Birkhäuser, 1994, ch. 8.
[^2]: David A. Cox, John Little and Donal O'Shea, *Using Algebraic Geometry*, 2nd ed., Springer, 2005, ch. 7.

# 연관 문서

## 선수지식

- [종결식](resultant.md)
- [Bernstein–Kushnirenko 정리](bernstein-kushnirenko.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #combinatorics #computation
