# 선형계획법

# 개요

**선형계획법(linear programming, LP)** 은 일차 부등식 몇 개를 만족하는 점들 가운데 일차식의 값을 가장 크게 또는 작게 하는 점을 찾는 문제다. 빵과 과자를 만드는 데 밀가루와 설탕이 정해진 양만큼 들고 창고의 재고가 한정되어 있을 때, 이익이 가장 큰 생산량을 고르는 문제가 이 꼴이다. 허용되는 점들은 꼭짓점이 유한 개인 볼록 다면체를 이루고 최적값은 꼭짓점에서 나오므로, 선형계획법은 꼭짓점을 따라 이동하는 [단체법](simplex-method.md)이나 내부를 지나는 [내점법](interior-point-method.md)으로 최적해를 찾는다.

# 직관

다음 문제를 푼다. $x_1,x_2\ge 0$ 이고 $x_1+2x_2\le 4$, $3x_1+2x_2\le 6$ 일 때 $x_1+x_2$ 를 가장 크게 한다. 제약을 만족하는 점들은 꼭짓점이 $(0,0)$, $(2,0)$, $(1,3/2)$, $(0,2)$ 인 사각형을 이룬다. 직선 $x_1+x_2=k$ 를 $k$ 가 커지는 쪽으로 밀면 사각형을 벗어나기 직전에 꼭짓점 $(1,3/2)$ 에 닿고, 그때 $k=5/2$ 다. 닿는 곳은 꼭짓점 하나이거나 직선과 평행한 변 전체이므로, 어느 경우든 꼭짓점 하나는 최적이다.

$5/2$ 가 최댓값이라는 것은 제약을 더해서 확인한다. 첫 제약과 둘째 제약에 각각 $1/4$ 을 곱해 더하면 $\tfrac14(x_1+2x_2)+\tfrac14(3x_1+2x_2)=x_1+x_2$ 이고 우변은 $\tfrac14\cdot 4+\tfrac14\cdot 6=5/2$ 다. 그래서 사각형의 모든 점에서 $x_1+x_2\le 5/2$ 이고, $(1,3/2)$ 에서 등호가 성립한다. 제약에 곱할 음이 아닌 가중치를 골라 가장 작은 상한을 찾는 문제가 쌍대 문제다.

# 정의

## 원 문제와 쌍대 문제

$A$ 를 $m\times n$ 실[행렬](matrices.md), $b\in\mathbb{R}^m$ , $c\in\mathbb{R}^n$ 이라 하고 벡터 부등식은 성분별로 비교한다. $Ax$ 는 [선형사상](linear-maps.md) $x\mapsto Ax$ 의 값이다. **원 문제(primal problem)** 의 표준형은 다음이다.

$$
\max\thinspace c^{\mathsf{T}}x\quad\text{subject to}\quad Ax\le b,\quad x\ge 0
$$

**쌍대 문제(dual problem)** 는 $m$ 차원 변수 $y$ 에 대한 다음 문제다.

$$
\min\thinspace b^{\mathsf{T}}y\quad\text{subject to}\quad A^{\mathsf{T}}y\ge c,\quad y\ge 0
$$

직관 절의 문제는 $A=\begin{pmatrix}1&2\cr 3&2\end{pmatrix}$, $b=(4,6)$, $c=(1,1)$ 인 원 문제이고, 그 쌍대 문제는 $y_1+3y_2\ge 1$, $2y_1+2y_2\ge 1$, $y\ge 0$ 에서 $4y_1+6y_2$ 를 최소화하는 문제다. 직관 절의 가중치 $y=(1/4,1/4)$ 가 이 제약을 등호로 만족한다.

**허용해(feasible solution)** 는 제약을 만족하는 점이다. 원 문제의 허용 영역은 유한 개의 반공간의 교집합이고 [볼록](convexity.md) 다면체다.

$$
P=\lbrace x\in\mathbb{R}^n : Ax\le b,\thinspace x\ge 0\rbrace
$$

## 꼭짓점

$P$ 의 **꼭짓점(vertex)** 은 $P$ 의 서로 다른 두 점 $u$ , $v$ 와 $0\lt t\lt 1$ 로 $(1-t)u+tv$ 라 쓸 수 없는 점이다. 직관 절의 사각형에서 $(1,3/2)$ 는 꼭짓점이고, 변 위의 점 $(1,0)=\tfrac12(0,0)+\tfrac12(2,0)$ 은 꼭짓점이 아니다.

부등식 제약에 **여유 변수(slack variable)** $s\ge0$ 을 더해 $Ax+s=b$ 로 쓰면 등식형이 된다. **기저 허용해(basic feasible solution)** 는 변수 $(x,s)$ 가운데 $n$ 개를 $0$ 으로 고정하고 남은 $m$ 개 변수의 열로 된 정사각 부분행렬로 연립방정식을 풀어 얻는 허용해다. 직관 절의 문제에서 $s=(0,0)$ 으로 고정하면 $(x,s)=(1,3/2,0,0)$ 이고, $x_2=0$, $s_2=0$ 으로 고정하면 $(2,0,2,0)$ 이다.

# 성질

## 꼭짓점과 기저 허용해

$v$ 가 꼭짓점인 것은 $v$ 에서 등식으로 성립하는 제약의 행들이 $\mathbb{R}^n$ 을 생성하는 것과 동치다. 기저 허용해의 $x$ 부분이 꼭짓점이고, 이 대응은 일대일이다. 직관 절의 꼭짓점 $(1,3/2)$ 에서는 두 제약 $x_1+2x_2\le 4$, $3x_1+2x_2\le 6$ 이 등식이고 두 행 $(1,2)$, $(3,2)$ 가 $\mathbb{R}^2$ 를 생성한다.

## 꼭짓점 최적성

$P$ 가 공집합이 아니고 목적함수가 $P$ 위에서 유계이면 최적해가 존재하고 그중 하나는 꼭짓점이다.

증명의 요지. 최적해의 집합은 공집합이 아닌 다면체다. 다면체는 꼭짓점을 갖거나 직선을 포함하는데, $x\ge0$ 때문에 $P$ 는 직선을 포함하지 못한다. 최적해 집합의 꼭짓점은 $P$ 의 꼭짓점이기도 하다.

선형계획 문제의 결과는 허용해 없음, 비유계, 유한 최적값 달성의 셋뿐이다.

## 약쌍대성

$x$ 가 원 문제의 허용해이고 $y$ 가 쌍대 문제의 허용해이면 $c^{\mathsf{T}}x\le b^{\mathsf{T}}y$ 다.

$$
c^{\mathsf{T}}x\le(A^{\mathsf{T}}y)^{\mathsf{T}}x=y^{\mathsf{T}}(Ax)\le y^{\mathsf{T}}b
$$

첫 부등식은 $x\ge0$ 과 $A^{\mathsf{T}}y\ge c$ 에서, 둘째 부등식은 $y\ge0$ 과 $Ax\le b$ 에서 나온다[^1]. 원 문제가 비유계이면 쌍대 문제는 허용해가 없다.

## 강쌍대성

원 문제와 쌍대 문제가 모두 허용해를 가지면 두 최적값이 같고 둘 다 달성된다[^1][^2].

$$
\max\lbrace c^{\mathsf{T}}x: Ax\le b,\thinspace x\ge 0\rbrace=\min\lbrace b^{\mathsf{T}}y: A^{\mathsf{T}}y\ge c,\thinspace y\ge 0\rbrace
$$

증명은 [Farkas 보조정리](farkas-lemma.md)를 쓴다. 선형 부등식계에 해가 없으면 그 사실을 증명하는 음이 아닌 선형결합이 존재한다는 정리다. 두 최적값이 다르다고 가정하면 해가 없는 부등식계가 나오고, Farkas 보조정리가 주는 선형결합의 계수가 차이를 없애는 쌍대 허용해가 된다. 볼록성의 분리초평면 정리(separating hyperplane theorem)로도 같은 결론을 얻는다.

## 상보 여유

허용해 $x$ , $y$ 가 둘 다 최적인 것은 다음과 동치다[^3].

$$
x_j\thinspace\bigl(A^{\mathsf{T}}y-c\bigr)\_j=0\quad (\forall j),\qquad y_i\thinspace\bigl(b-Ax\bigr)\_i=0\quad (\forall i)
$$

약쌍대성의 두 부등식이 등식이 되는 조건을 성분별로 쓴 것이고, 강쌍대성에 따라 등식은 최적성과 같다. 제약이 느슨하면 대응하는 쌍대 변수가 $0$ 이고, 쌍대 변수가 양수이면 대응하는 제약이 등식으로 성립한다. 직관 절의 문제에서 $x=(1,3/2)$ 의 두 성분이 양수이므로 두 쌍대 제약이 등식이고, 연립하면 $y=(1/4,1/4)$ 다. 쌍대 변수 $y_i$ 는 자원 $b_i$ 를 한 단위 늘렸을 때 최적값의 증가율이고, 이를 그림자 가격(shadow price)이라 한다.

## 알고리즘

- 단체법은 꼭짓점에서 출발해 목적함수가 개선되는 이웃 꼭짓점으로 옮겨 간다. 한 단계는 기저 변수 하나를 교체하는 피벗이다. Klee–Minty 큐브(Klee–Minty cube)에서는 특정 피벗 규칙이 지수적으로 많은 꼭짓점을 방문하므로 단체법은 다항시간 알고리즘이 아니다.
- [타원체법](ellipsoid-method.md)은 선형계획 문제가 입력 비트 수에 대해 다항시간에 풀린다는 것을 처음 보였다. 내점법은 다항시간 보증과 실용 성능을 함께 갖는다.
- 변수에 정수 제약을 더한 [정수계획법](integer-programming.md)은 NP(nondeterministic polynomial time)-hard 다. [P 대 NP 문제](p-np.md)의 답이 $\mathrm P\ne\mathrm{NP}$ 이면 정수계획법에 다항시간 알고리즘이 없다.

# 활용

## 조합최적화

- 최대유량과 최소절단의 동치, 이분 [그래프](graphs.md)의 최대 매칭과 최소 정점 덮개의 동치(König 정리, König's theorem)는 선형계획 쌍대성에 정수성이 더해진 결과다. [네트워크 흐름](network-flow.md)의 최대유량 최소절단 정리가 그 예다.
- [Matroid](matroids.md) 위의 최적화와 [최소 신장트리](minimum-spanning-tree.md)는 대응하는 다면체의 꼭짓점이 모두 정수라서 탐욕 알고리즘으로 풀린다.
- NP-hard 문제에서는 정수 제약을 구간으로 푼 완화 문제의 최적값을 하한으로 삼아 근사비를 증명한다. [LP 반올림](lp-rounding.md)(linear programming)의 주제다.
- 일반 볼록 문제로 넓히면 선형계획 쌍대성은 [Lagrange 쌍대성](lagrange-duality.md)의 특수 사례다.

[^1]: J. Sobel, Linear Programming Notes VI: Duality and Complementary Slackness, UCSD. https://econweb.ucsd.edu/~jsobel/172aw02/notes6.pdf
[^2]: J. V. Burke, Duality Theory (Math 407 강의노트), University of Washington. https://sites.math.washington.edu/~burke/crs/407/notes/section4.pdf
[^3]: N. Zeh, Complementary Slackness (Algorithms II 강의노트), Dalhousie University. https://web.cs.dal.ca/~nzeh/Teaching/4113/book/lp_duality/complementary_slackness.html

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [선형사상](linear-maps.md)
- [Farkas 보조정리](farkas-lemma.md)

## 더 알아보기

### 풀이 알고리즘

- [단체법](simplex-method.md)
- [타원체법](ellipsoid-method.md)
- [내점법](interior-point-method.md)

### 확장과 응용

- [정수계획법](integer-programming.md)
- [네트워크 흐름](network-flow.md)
- [LP 반올림](lp-rounding.md)

#optimization #linear_algebra #combinatorics #algorithms
