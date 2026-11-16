# 평활 분석

# 개요

**평활 분석(smoothed analysis)** 은 알고리즘의 실행 비용을, 가장 나쁜 입력에 작은 무작위 잡음을 더했을 때의 기댓값으로 재는 방법이다. [Klee–Minty 입방체](klee-minty-cube.md)에서 단체법은 피벗을 $2^n-1$ 번 하지만, 실제 선형계획 문제에서는 그렇게 오래 걸리는 일이 드물다. 최악의 경우 분석은 이 차이를 설명하지 못하고, 무작위 입력의 평균 분석은 실제 문제가 무작위가 아니라는 점에서 설명이 되지 못한다.

평활 분석은 입력을 마음대로 고르게 한 뒤 측정 오차 정도의 잡음을 섞는다. 그 기대 비용이 입력 크기와 잡음 크기의 역수에 대한 다항식이면, 나쁜 입력은 잡음 앞에서 유지되지 않는 드문 경우다.

# 직관

행렬 $\begin{pmatrix}1&1\cr1&1\end{pmatrix}$ 은 행렬식이 $0$ 이라 [Gauss 소거법](gaussian-elimination.md)의 둘째 피벗이 $0$ 이 된다. 성분마다 표준편차 $\sigma$ 인 Gauss 잡음 $\sigma g\_{ij}$ 를 더하면 행렬식은 다음과 같다.

$$
\begin{aligned}
\det&=(1+\sigma g\_{11})(1+\sigma g\_{22})-(1+\sigma g\_{12})(1+\sigma g\_{21})\cr
&=\sigma(g\_{11}+g\_{22}-g\_{12}-g\_{21})+O(\sigma^2)
\end{aligned}
$$

괄호 안은 분산 $4$ 인 정규분포다. 그래서 행렬식은 대략 표준편차 $2\sigma$ 인 정규분포이고, 그 절댓값이 $\varepsilon$ 이하일 확률은 $\varepsilon/\sigma$ 의 $0.4$ 배쯤이다. 행렬식이 정확히 $0$ 인 일은 확률 $0$ 이고, 피벗이 $\varepsilon$ 만큼 작아질 확률도 $\varepsilon/\sigma$ 에 비례한다.

나쁜 입력은 행렬식이 $0$ 인 곡면 위에 놓여 있었다. 잡음은 입력을 그 곡면에서 $\sigma$ 정도 떼어 놓으므로, 비용이 그 거리에 반비례하는 알고리즘은 기대 비용이 $1/\sigma$ 의 다항식으로 유계다.

# 정의

입력 공간이 $\mathbb R^d$ 이고 입력 $x$ 에서 알고리즘의 비용이 $C(x)$ 라 한다. $g$ 를 표준정규분포를 따르는 $\mathbb R^d$ 의 무작위 벡터라 할 때 다음을 **평활 복잡도(smoothed complexity)** 라 한다.

$$
S\_C(\sigma)=\max\_{\Vert\bar x\Vert\le1}E\_g\lbrack C(\bar x+\sigma g)\rbrack
$$

$\sigma\to0$ 이면 최악의 경우 복잡도가 되고, $\sigma$ 가 크면 잡음이 입력을 덮어 평균 복잡도에 가까워진다. 크기 $n$ 인 입력에서 $S\_C(\sigma)$ 가 $n$ 과 $1/\sigma$ 의 다항식으로 유계이면 알고리즘이 **평활 다항 시간(smoothed polynomial time)** 이라 한다.

직관 절의 예에서 비용을 둘째 피벗의 역수의 로그로 두면, 그 기댓값은 $\log(1/\sigma)$ 정도로 유계다.

# 성질

## 단체법

그림자 꼭짓점 규칙(shadow vertex rule)의 [단체법](simplex-method.md)은 평활 다항 시간이다(Spielman–Teng 2004)[^1]. 증명은 목적함수 방향과 시작 방향이 펼치는 평면으로 허용 다면체를 사영한 다각형, 곧 그림자의 꼭짓점 수를 센다. 잡음이 섞인 제약에서 그림자의 꼭짓점 수의 기댓값이 $n$, $d$, $1/\sigma$ 의 다항식이다. 피벗 규칙이 그림자의 경계를 따라가므로 피벗 수도 같은 상계를 갖는다.

## 최소 특이값

임의의 $n\times n$ 행렬 $\bar A$ 와 성분이 독립인 표준정규 행렬 $G$ 에 대해 다음이 성립한다(Sankar–Spielman–Teng 2006)[^2].

$$
\Pr\bigl\lbrack\sigma\_{\min}(\bar A+\sigma G)\le\varepsilon\bigr\rbrack\le2.35\thinspace\frac{\sqrt n\thinspace\varepsilon}{\sigma}
$$

$\sigma\_{\min}$ 은 최소 특이값이다. 그래서 조건수의 로그의 기댓값이 $O(\log(n/\sigma))$ 이고, 부분 피벗 없는 Gauss 소거법에 필요한 정밀도의 자릿수도 같은 크기로 유계다. 직관 절의 $2\times2$ 계산이 이 정리의 가장 작은 경우다.

## 의사다항 알고리즘과의 관계

목적함수의 계수에 잡음을 넣을 때, 이진 변수의 선형 최적화 문제가 평활 다항 시간 알고리즘을 갖는 것은 계수의 크기에 대해 다항인 의사다항(pseudo-polynomial) 알고리즘을 갖는 것과 동치다(Beier–Vöcking 2004)[^3]. [배낭 문제](knapsack-problem.md)는 동적 계획법으로 의사다항 시간에 풀리므로 평활 다항 시간에 풀린다.

# 활용

- [k 평균 군집화](k-means.md)의 Lloyd 알고리즘은 최악의 경우 반복 수가 지수지만, 점마다 잡음을 더하면 기대 반복 수가 다항식이다(Arthur–Manthey–Röglin 2009).
- 외판원 문제의 2-opt 국소 탐색, 정수계획의 분기 한정법처럼 실제로는 빠르지만 최악의 경우 느린 알고리즘의 동작을 설명하는 데 쓰인다.
- 수치 선형대수에서 조건수의 평활 분석이 무작위 전처리와 무작위 행렬 알고리즘의 정밀도 분석에 쓰인다.

[^1]: D. A. Spielman and S.-H. Teng, "Smoothed analysis of algorithms: Why the simplex algorithm usually takes polynomial time", *Journal of the ACM* 51 (2004), 385–463.
[^2]: A. Sankar, D. A. Spielman and S.-H. Teng, "Smoothed analysis of the condition numbers and growth factors of matrices", *SIAM Journal on Matrix Analysis and Applications* 28 (2006), 446–476.
[^3]: R. Beier and B. Vöcking, "Typical properties of winners and losers in discrete optimization", *Proceedings of STOC* 2004, 343–352.

# 연관 문서

## 선수지식

- [단체법](simplex-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #algorithms #probability
