# 선형계획법

# 개요

선형계획법(linear programming, LP)은 선형 목적함수를 유한히 많은 선형 부등식 제약 아래에서 최적화하는 문제다. 실행가능영역은 볼록 다면체(polyhedron)이고 목적함수는 affine이므로, 최적값은 존재하면 다면체의 꼭짓점에서 달성된다. LP의 핵심 구조는 duality다. 모든 LP에는 쌍대 LP가 붙고, 두 문제의 최적값은 (둘 다 실행가능하면) 정확히 일치한다. 이 덕분에 "이 값이 최적이다"라는 증명서(certificate)를 제시할 수 있고, 조합최적화의 수많은 min-max 정리가 LP duality의 특수한 경우로 설명된다. 계산 측면에서도 LP는 다항시간에 풀리는 가장 표현력 높은 볼록 최적화 모델 중 하나다.

# 직관

2차원에서 LP는 "볼록 다각형 위에서 목적함수의 등위선을 평행이동하며 가장 멀리 밀어보기"다. 등위선이 다각형을 벗어나는 순간 접하는 곳이 최적해이고, 그 접점은 꼭짓점이거나 (등위선이 변과 평행하면) 한 변 전체다. 어느 경우든 꼭짓점 하나는 최적이다. 따라서 무한히 많은 점을 탐색하는 문제가 유한한 꼭짓점 탐색으로 바뀐다.

Duality의 직관은 "제약의 선형결합으로 상한을 만드는 일"이다. 제약 각각에 음이 아닌 가중치를 곱해 더하면 목적함수를 지배하는 부등식이 나오고, 그 우변이 최적값의 상한이 된다. 가장 좋은 상한을 찾는 문제가 곧 쌍대 문제다.

# 정의

A를 m×n 실행렬, b를 m차원 벡터, c를 n차원 벡터라 한다. 부등식은 성분별로 해석한다. 표준형 primal 문제는 다음과 같다.

$$
\max\ c^\top x \quad \text{subject to}\quad Ax\le b,\ \ x\ge 0
$$

이 문제의 dual은 m차원 변수 y에 대한 문제다.

$$
\min\ b^\top y \quad \text{subject to}\quad A^\top y\ge c,\ \ y\ge 0
$$

실행가능영역은 유한히 많은 반공간의 교집합, 즉 다면체다.

$$
P=\left\lbrace x\in\mathbb{R}^n : Ax\le b,\ x\ge 0 \right\rbrace
$$

P의 점 v가 꼭짓점(vertex, 또는 extreme point)이라는 것은 v를 P의 서로 다른 두 점의 진짜 볼록결합으로 쓸 수 없다는 뜻이다. 동등하게, v에서 등식으로 성립하는(tight) 제약들의 행이 n차원 공간을 span한다.

등식형(equality standard form)으로 바꾸려면 slack 변수를 도입한다.

$$
Ax\le b \iff Ax+s=b,\ s\ge 0
$$

이때 basic feasible solution은 변수 중 적당한 개수를 0으로 고정하고 남은 정사각 부분행렬을 풀어 얻은 실행가능해이며, 꼭짓점과 정확히 대응한다.

# 성질

## 최적해의 위치

P가 공집합이 아니고 목적함수가 P 위에서 유계이면 최적해가 존재하고, 적어도 하나의 꼭짓점이 최적이다. 증명 개요: 최적해 집합은 공집합이 아닌 다면체이고, 다면체는 꼭짓점을 가지거나 직선을 포함한다. x≥0 제약이 있으면 P는 직선을 포함할 수 없으므로 꼭짓점이 존재하며, 최적해 집합의 꼭짓점은 P의 꼭짓점이기도 하다.

LP의 결과는 세 가지뿐이다. 실행불가능(infeasible), 비유계(unbounded), 유한 최적값 달성. [볼록성](convexity.md)에서 보듯 국소 최적해는 곧 전역 최적해다.

## 약쌍대성

x가 primal 실행가능, y가 dual 실행가능이면 다음이 성립한다.

$$
c^\top x\ \le\ (A^\top y)^\top x\ =\ y^\top (Ax)\ \le\ y^\top b
$$

첫 부등식은 x≥0과 A^T y≥c에서, 마지막은 y≥0과 Ax≤b에서 나온다[^1]. 따라서 임의의 dual 실행가능해는 primal 최적값의 상한을 제공한다. 즉시 따르는 결과로, primal이 비유계이면 dual은 실행불가능하다.

## 강쌍대성

primal과 dual이 모두 실행가능하면 두 최적값은 같고 둘 다 달성된다[^1][^2].

$$
\max\left\lbrace c^\top x: Ax\le b,\ x\ge 0\right\rbrace=\min\left\lbrace b^\top y: A^\top y\ge c,\ y\ge 0\right\rbrace
$$

표준 증명은 Farkas 보조정리(선형 부등식계가 해를 갖지 않을 때 그 사실을 증명하는 음이 아닌 선형결합이 존재한다)나 분리 초평면 정리를 쓴다. 즉 gap이 0이 아니라고 가정하면 어떤 선형 부등식계가 해를 갖지 않고, Farkas가 주는 증명서가 곧 gap을 없애는 dual 해가 된다.

## 상보 여유

x와 y가 각각 실행가능할 때, 둘이 모두 최적인 것은 다음 조건과 동치다[^3].

$$
x_j\,\bigl(A^\top y-c\bigr)_j=0\ \ (\forall j),\qquad y_i\,\bigl(b-Ax\bigr)_i=0\ \ (\forall i)
$$

증명: 약쌍대성의 두 부등식이 등식이 되는 조건을 성분별로 쓴 것이 위 식이고, 등식이 성립하는 것은 gap이 0, 즉 강쌍대성에 의해 최적인 것과 같다. 해석하면 "제약이 느슨하면(slack이 양수) 대응하는 쌍대 변수는 0이고, 쌍대 변수가 양수면 대응하는 제약은 tight하다".

## 알고리즘

- 단체법(simplex method): 꼭짓점에서 출발해 목적함수를 개선하는 이웃 꼭짓점으로 이동한다. 각 단계는 basic 변수 하나를 교체하는 pivot이다. 실무에서 매우 빠르지만, Klee–Minty 큐브 같은 예에서 특정 pivot 규칙이 지수적으로 많은 꼭짓점을 방문한다. 즉 단체법 자체는 다항시간 알고리즘이 아니다.
- 타원체법(ellipsoid method)은 LP가 입력 비트 수에 대해 다항시간에 풀린다는 것을 처음 보였고, 내점법(interior point method)은 이론적 다항성과 실용 성능을 함께 갖는다.
- 변수에 정수 제약을 추가한 integer programming은 NP-hard이며, 이는 [P 대 NP 문제](p-np.md)와 연결된다.

# 활용

## 예제

다음 primal을 보자.

$$
\max\ x_1+x_2\quad\text{s.t.}\quad x_1+2x_2\le 4,\ \ 3x_1+2x_2\le 6,\ \ x\ge 0
$$

꼭짓점은 (0,0), (2,0), (0,2), (1,3/2)이고 목적값은 0, 2, 2, 5/2이므로 최적해는 (1,3/2), 최적값 5/2다. dual은 다음과 같다.

$$
\min\ 4y_1+6y_2\quad\text{s.t.}\quad y_1+3y_2\ge 1,\ \ 2y_1+2y_2\ge 1,\ \ y\ge 0
$$

최적 primal에서 두 제약이 모두 tight하고 두 변수가 모두 양수이므로, 상보 여유에 의해 두 dual 제약도 tight해야 한다. 연립하면 y=(1/4,1/4)이고 목적값은 4/4+6/4=5/2로 primal과 일치한다. 쌍대 변수는 자원 b_i를 한 단위 늘렸을 때 최적값의 증가율, 즉 shadow price로 읽는다.

## 모델링

LP는 흐름·배분·근사 문제의 공통 언어다. 최대유량과 최소절단의 동치, 이분 그래프의 최대 매칭과 최소 정점 덮개(König 정리) 같은 min-max 정리는 LP duality와 정수성(integrality)의 결합으로 설명된다. [Matroid](matroids.md) 위의 최적화나 [최소 신장트리](minimum-spanning-tree.md)는 대응하는 LP가 정수 꼭짓점만 가져서 탐욕 알고리즘이 통하는 구조다. NP-hard 문제에서는 정수 제약을 풀어 LP relaxation을 만들고, 그 최적값을 하한으로 삼아 근사비를 증명한다.

더 일반적인 볼록 문제로 넘어가면 LP duality는 [Lagrange 쌍대성과 KKT 조건](lagrange-duality.md)의 특수한 경우가 된다.

```python
from scipy.optimize import linprog

# scipy는 최소화 표준형을 쓰므로 목적함수 부호를 뒤집는다.
res = linprog(c=[-1, -1], A_ub=[[1, 2], [3, 2]], b_ub=[4, 6], bounds=[(0, None)] * 2)
print(res.x, -res.fun)  # [1. 1.5] 2.5
```

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

#optimization
