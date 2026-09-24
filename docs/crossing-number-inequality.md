# 교차수 부등식

# 개요

[평면 그래프](planar-graphs.md)가 아닌 그래프를 평면에 그리면 변이 교차한다. 그림을 아무리 잘 잡아도 남는 교차의 최소 개수가 교차수다.

교차수 부등식은 변이 정점에 비해 많을 때 교차수의 하한을 준다. 하한이 변 개수의 세제곱에 비례하므로, Euler 공식에서 곧바로 나오는 선형 하한보다 훨씬 강하다.

# 직관

Euler 공식은 평면 그래프에서 $\vert E\vert\le3\vert V\vert-6$ 을 준다. 변이 이보다 많으면 그 그래프는 평면에 그려지지 않으므로 어느 그림에나 교차가 있다.

교차가 몇 개인지는 변을 지워 보면 나온다. 교차가 $c$ 개인 그림에서 교차하는 변을 하나씩 지우면 $c$ 번 안에 교차가 없는 그림이 된다. 남은 그래프가 평면 그래프이므로

$$
\vert E\vert-c\le3\vert V\vert-6,\qquad c\ge\vert E\vert-3\vert V\vert+6
$$

이다. 이 하한은 변의 개수에 대해 선형이다. $\vert E\vert=4\vert V\vert$ 이면 교차가 $\vert V\vert$ 개쯤이라고 말한다.

실제 교차수는 이보다 크다. 선형 하한이 약한 이유는 그래프 전체에 한 번만 적용했기 때문이다. 정점을 무작위로 골라 만든 부분그래프마다 같은 부등식을 적용하고 기댓값을 취하면 하한이 올라간다.

각 정점을 확률 $p$ 로 독립으로 남긴다. 남은 부분그래프의 정점은 기댓값 $p\vert V\vert$ 개, 변은 두 끝점이 모두 남아야 하므로 $p^2\vert E\vert$ 개, 원래 그림에서 물려받은 교차는 네 끝점이 모두 남아야 하므로 $p^4c$ 개다. 선형 하한을 부분그래프에 쓰고 기댓값을 비교하면

$$
p^4c\ge p^2\vert E\vert-3p\vert V\vert
$$

가 된다. $p=4\vert V\vert/\vert E\vert$ 로 잡으면 우변이 $\vert E\vert^3/(32\vert V\vert^2)$ 규모로 남고, 하한이 세제곱으로 커진다.

# 정의

그래프 $G$ 의 **그림**은 정점을 평면의 서로 다른 점에 놓고 각 변을 두 끝점을 잇는 곡선으로 그린 것이다. 곡선은 다른 정점을 지나지 않고, 두 곡선은 유한 개의 점에서만 만난다.

그림의 **교차**는 두 변의 내부가 만나는 점이다. $G$ 의 **교차수** $\mathrm{cr}(G)$ 는 $G$ 의 모든 그림에서 교차 개수의 최솟값이다.

$\mathrm{cr}(G)=0$ 인 것과 $G$ 가 평면 그래프인 것이 같다.

# 성질

## 부등식

> **정리.** $\vert E\vert\ge4\vert V\vert$ 이면 $\mathrm{cr}(G)\ge\dfrac{\vert E\vert^3}{64\thinspace\vert V\vert^2}$ 이다.[^1]

증명은 직관 절의 계산이다. 상수를 $1/64$ 로 두면 $p$ 를 잡을 때 생기는 오차를 흡수한다. 같은 논증을 다듬어 상수를 $1/29$ 까지 올릴 수 있다.[^2]

가정 $\vert E\vert\ge4\vert V\vert$ 는 $p\le1$ 이 되도록 하는 조건이다. 변이 이보다 적으면 부등식의 우변이 선형 하한보다 작아 얻는 것이 없다.

## 지수의 최적성

$\vert V\vert$ 개의 정점과 $\vert E\vert$ 개의 변을 갖고 교차수가 $\vert E\vert^3/\vert V\vert^2$ 규모인 그래프가 있다.[^1] 정점을 격자에 놓고 이웃 범위를 넓혀 변의 개수를 조절하면 그런 예가 나온다. 그러므로 지수 $3$ 과 $-2$ 는 내려가거나 올라가지 않는다.

## 확률적 논증의 자리

증명은 [확률론적 방법](probabilistic-method.md)의 전형이다. 약한 부등식을 무작위 부분구조에 반복 적용해 강한 부등식을 얻고, 어느 단계에서도 좋은 그림을 명시적으로 만들지 않는다. 결론은 모든 그림에 대한 하한이므로 존재 증명이 아니라 보편 진술이다.

# 활용

- **점과 직선의 접촉수.** [Szemerédi–Trotter 정리](szemeredi-trotter.md)의 증명이 접촉 구조를 그래프로 옮긴 뒤 이 부등식을 쓴다. 교차수가 직선 쌍의 개수로 유계라는 관찰과 맞물려 접촉수의 상한이 나온다.
- **격자 위 그래프의 그림.** 변의 개수가 정점의 개수에 비례하는 상수를 넘으면 교차를 피할 수 없고, 그 개수의 하한이 그림의 면적이나 배선 길이의 하한으로 옮겨진다.
- **이분 금지 문제의 기하적 제약.** 조합적으로 허용되는 간선 수가 평면에 그려지는 배치에서는 줄어든다. 이 감소량을 정량으로 재는 도구가 이 부등식이다.

[^1]: F. T. Leighton, *Complexity Issues in VLSI* (1983), 3장과 M. Ajtai, V. Chvátal, M. Newborn, E. Szemerédi, *Crossing-free subgraphs*, Annals of Discrete Mathematics **12** (1982), 9–12. 두 곳에서 독립으로 얻었다. 지수의 최적성 예는 J. Matoušek, *Lectures on Discrete Geometry* (2002), 4.3 절.

[^2]: E. Ackerman, *On topological graphs with at most four crossings per edge*, Computational Geometry **85** (2019), 101574. 상수 개선의 현재 값과 그 논증.

# 연관 문서

## 선수지식

- [평면 그래프](planar-graphs.md)

## 더 알아보기

- [Szemerédi–Trotter 정리](szemeredi-trotter.md)

#graph_theory #combinatorics #probability
