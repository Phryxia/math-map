# 선형계획법

# 개요

선형계획법은 선형 목적함수를 유한 개의 선형 부등식 제약 아래에서 최적화하는 문제다. 허용 영역은 볼록 다면체이고 목적함수는 아핀이므로, 최적값이 존재하면 다면체의 꼭짓점에서 달성된다. 이 성질로 무한한 점의 탐색이 유한한 꼭짓점의 탐색으로 바뀐다.

모든 선형계획 문제에는 쌍대 문제가 붙고, 둘 다 허용해를 가지면 두 최적값이 같다. 쌍대 허용해 하나가 원 문제 최적값의 상한을 주므로 최적성이 증명 가능하고, 조합최적화의 여러 min-max 정리가 이 쌍대성의 특수 사례다. [볼록성](convexity.md)의 분리초평면 정리와 [선형사상](linear-maps.md)의 행렬 표현으로 정의된다.

# 직관

2차원에서 목적함수의 등위선은 평행한 직선의 족이다. 등위선을 목적함수가 커지는 쪽으로 밀다가 다각형을 벗어나기 직전에 닿는 곳이 최적해다. 닿는 곳은 꼭짓점 하나이거나 등위선과 평행한 변 전체이고, 어느 경우든 꼭짓점 하나는 최적이다.

쌍대성은 제약의 선형결합으로 상한을 만든다. 각 제약에 음이 아닌 가중치를 곱해 더하면 목적함수를 위에서 누르는 부등식이 나오고, 그 우변이 최적값의 상한이다. 가장 작은 상한을 찾는 문제가 쌍대 문제다.

# 정의

## 원 문제와 쌍대 문제

$A$ 를 $m\times n$ 실행렬, $b\in\mathbb{R}^m$ , $c\in\mathbb{R}^n$ 이라 하고 벡터 부등식은 성분별로 읽는다. **원 문제**(primal)의 표준형은 다음이다.

$$
\max\ c^{\mathsf{T}}x\quad\text{subject to}\quad Ax\le b,\ \ x\ge 0
$$

**쌍대 문제**(dual)는 $m$ 차원 변수 $y$ 에 대한 문제다.

$$
\min\ b^{\mathsf{T}}y\quad\text{subject to}\quad A^{\mathsf{T}}y\ge c,\ \ y\ge 0
$$

제약을 만족하는 점을 **허용해**라 한다. 허용 영역은 유한 개의 반공간의 교집합인 다면체다.

$$
P=\lbrace x\in\mathbb{R}^n : Ax\le b,\ x\ge 0\rbrace
$$

## 꼭짓점

$P$ 의 **꼭짓점**은 $P$ 의 서로 다른 두 점 $u$ , $v$ 와 $0\lt t\lt 1$ 로 $(1-t)u+tv$ 라 쓸 수 없는 점이다. $v$ 가 꼭짓점인 것은 $v$ 에서 등식으로 성립하는 제약의 행들이 $\mathbb{R}^n$ 을 생성하는 것과 동치다.

부등식 제약에 여유 변수 $s\ge0$ 을 더해 $Ax+s=b$ 로 쓰면 등식형이 된다. 변수 가운데 적당한 개수를 $0$ 으로 고정하고 남은 정사각 부분행렬을 풀어 얻는 허용해를 **기저 허용해**라 하고, 기저 허용해와 꼭짓점은 일대일로 대응한다.

# 성질

## 꼭짓점 최적성

$P$ 가 공집합이 아니고 목적함수가 $P$ 위에서 유계이면 최적해가 존재하고 그중 하나는 꼭짓점이다.

*증명의 요지.* 최적해의 집합은 공집합이 아닌 다면체다. 다면체는 꼭짓점을 갖거나 직선을 포함하는데, $x\ge0$ 때문에 $P$ 는 직선을 포함하지 못한다. 최적해 집합의 꼭짓점은 $P$ 의 꼭짓점이기도 하다.

선형계획 문제의 결과는 허용해 없음, 비유계, 유한 최적값 달성의 셋뿐이다.

## 약쌍대성

$x$ 가 원 문제의 허용해이고 $y$ 가 쌍대 문제의 허용해이면 $c^{\mathsf{T}}x\le b^{\mathsf{T}}y$ 다.

$$
c^{\mathsf{T}}x\le(A^{\mathsf{T}}y)^{\mathsf{T}}x=y^{\mathsf{T}}(Ax)\le y^{\mathsf{T}}b
$$

첫 부등식은 $x\ge0$ 과 $A^{\mathsf{T}}y\ge c$ 에서, 둘째 부등식은 $y\ge0$ 과 $Ax\le b$ 에서 나온다.[^1] 원 문제가 비유계이면 쌍대 문제는 허용해가 없다.

## 강쌍대성

원 문제와 쌍대 문제가 모두 허용해를 가지면 두 최적값이 같고 둘 다 달성된다.[^1][^2]

$$
\max\lbrace c^{\mathsf{T}}x: Ax\le b,\ x\ge 0\rbrace=\min\lbrace b^{\mathsf{T}}y: A^{\mathsf{T}}y\ge c,\ y\ge 0\rbrace
$$

증명은 Farkas 보조정리를 쓴다. 선형 부등식계에 해가 없으면 그 사실을 증명하는 음이 아닌 선형결합이 존재한다는 정리다. 두 최적값이 다르다고 가정하면 해가 없는 부등식계가 나오고, Farkas 보조정리가 주는 선형결합의 계수가 차이를 없애는 쌍대 허용해가 된다. [볼록성](convexity.md)의 분리초평면 정리로도 같은 결론을 얻는다.

## 상보 여유

허용해 $x$ , $y$ 가 둘 다 최적인 것은 다음과 동치다.[^3]

$$
x_j\thinspace\bigl(A^{\mathsf{T}}y-c\bigr)\_j=0\ \ (\forall j),\qquad y_i\thinspace\bigl(b-Ax\bigr)\_i=0\ \ (\forall i)
$$

약쌍대성의 두 부등식이 등식이 되는 조건을 성분별로 쓴 것이고, 강쌍대성에 따라 등식은 최적성과 같다. 제약이 느슨하면 대응하는 쌍대 변수가 $0$ 이고, 쌍대 변수가 양수이면 대응하는 제약이 등식으로 성립한다.

## 알고리즘

- 단체법은 꼭짓점에서 출발해 목적함수가 개선되는 이웃 꼭짓점으로 옮겨 간다. 한 단계는 기저 변수 하나를 교체하는 피벗이다. Klee–Minty 큐브에서는 특정 피벗 규칙이 지수적으로 많은 꼭짓점을 방문하므로 단체법은 다항시간 알고리즘이 아니다.
- 타원체법은 선형계획 문제가 입력 비트 수에 대해 다항시간에 풀린다는 것을 처음 보였다. 내점법은 다항시간 보증과 실용 성능을 함께 갖는다.
- 변수에 정수 제약을 더한 정수계획법은 NP-hard 다. [P 대 NP 문제](p-np.md)와 이어진다.

# 활용

## 예제

$$
\max\ x_1+x_2\quad\text{subject to}\quad x_1+2x_2\le 4,\ \ 3x_1+2x_2\le 6,\ \ x\ge 0
$$

꼭짓점은 $(0,0)$ , $(2,0)$ , $(0,2)$ , $(1,3/2)$ 이고 목적값은 $0$ , $2$ , $2$ , $5/2$ 이므로 최적해는 $(1,3/2)$ 다. 쌍대 문제는 다음이다.

$$
\min\ 4y_1+6y_2\quad\text{subject to}\quad y_1+3y_2\ge 1,\ \ 2y_1+2y_2\ge 1,\ \ y\ge 0
$$

최적해에서 두 제약이 등식으로 성립하고 두 변수가 양수이므로, 상보 여유에 따라 두 쌍대 제약도 등식이다. 연립하면 $y=(1/4,1/4)$ 이고 쌍대 목적값은 $5/2$ 로 원 문제와 같다. 쌍대 변수 $y_i$ 는 자원 $b_i$ 를 한 단위 늘렸을 때 최적값의 증가율, 곧 그림자 가격이다.

## 조합최적화

- 최대유량과 최소절단의 동치, 이분 그래프의 최대 매칭과 최소 정점 덮개의 동치(König 정리)는 선형계획 쌍대성에 정수성이 더해진 결과다. [네트워크 흐름](network-flow.md)의 최대유량 최소절단 정리가 그 예다.
- [Matroid](matroids.md) 위의 최적화와 [최소 신장트리](minimum-spanning-tree.md)는 대응하는 다면체의 꼭짓점이 모두 정수라서 탐욕 알고리즘으로 풀린다.
- NP-hard 문제에서는 정수 제약을 구간으로 푼 완화 문제의 최적값을 하한으로 삼아 근사비를 증명한다. [LP 완화와 반올림](lp-rounding.md)(linear programming)의 주제다.
- 일반 볼록 문제로 넓히면 선형계획 쌍대성은 [Lagrange 쌍대성](lagrange-duality.md)의 특수 사례다.

[^1]: J. Sobel, Linear Programming Notes VI: Duality and Complementary Slackness, UCSD. https://econweb.ucsd.edu/~jsobel/172aw02/notes6.pdf
[^2]: J. V. Burke, Duality Theory (Math 407 강의노트), University of Washington. https://sites.math.washington.edu/~burke/crs/407/notes/section4.pdf
[^3]: N. Zeh, Complementary Slackness (Algorithms II 강의노트), Dalhousie University. https://web.cs.dal.ca/~nzeh/Teaching/4113/book/lp_duality/complementary_slackness.html

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [선형사상](linear-maps.md)

## 더 알아보기

- [네트워크 흐름과 최대유량 최소절단 정리](network-flow.md)
- [LP 완화와 반올림](lp-rounding.md)

#optimization #linear_algebra #combinatorics #algorithms
