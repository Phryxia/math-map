# 다색 Carathéodory 정리

# 개요

**다색 Carathéodory 정리(colorful Carathéodory theorem)** 는 $\mathbb R^d$ 의 유한집합 $C_1,\dots,C_{d+1}$ 이 모두 원점을 볼록 껍질에 포함하면, 집합마다 점을 하나씩 골라 그 $d+1$ 개의 볼록 껍질이 원점을 포함하게 할 수 있다는 정리다. Bárány 가 1982 년에 증명했다.[^1]

$C_1=\cdots=C_{d+1}$ 인 경우가 Carathéodory 정리(Carathéodory's theorem)이고, [Helly 정리](helly-theorem.md)에도 같은 꼴의 다색 판본이 있다.

# 직관

평면에서 빨간 점, 파란 점, 초록 점을 각각 몇 개씩 찍되, 색마다 그 색의 점들이 이루는 다각형이 원점을 둘러싸게 한다. 색마다 하나씩 골라 삼각형을 만들고 그 삼각형이 원점을 둘러싸게 하려 한다.

아무 삼각형이나 하나 잡는다. 원점이 삼각형 밖에 있으면 삼각형에서 원점에 가장 가까운 점 $z$ 는 어느 변 위에 있다. 그 변에 쓰이지 않은 꼭짓점의 색을 빨강이라 한다. 빨간 점들은 원점을 둘러싸므로, $z$ 에서 보아 원점 쪽 너머에 있는 빨간 점이 하나는 있다. 빨간 꼭짓점을 그 점으로 바꾸면 새 삼각형이 원점에 더 가까워진다.

삼각형의 개수는 유한하므로 이 바꾸기는 끝나고, 끝나는 자리의 삼각형은 원점을 둘러싼다.

# 정의

## 무지개 단체

$\mathbb R^d$ 의 집합 $C_1,\dots,C_{d+1}$ 에서 $c_i\in C_i$ 를 하나씩 골라 만든 볼록 껍질 $\mathrm{conv}\lbrace c_1,\dots,c_{d+1}\rbrace$ 을 **무지개 단체(rainbow simplex, colorful simplex)** 라 한다. 점들이 아핀 종속이면 차원이 $d$ 보다 낮을 수 있다.

## 다색 Carathéodory 정리

**정리(Bárány).** $C_1,\dots,C_{d+1}\subseteq\mathbb R^d$ 가 유한집합이고 모든 $i$ 에서 $0\in\mathrm{conv}(C_i)$ 이면, 원점을 포함하는 무지개 단체가 존재한다.

# 성질

## 증명

무지개 단체 $S=\mathrm{conv}\lbrace c_1,\dots,c_{d+1}\rbrace$ 가운데 원점까지의 거리가 가장 작은 것을 잡는다. 무지개 단체는 유한개이므로 이런 $S$ 가 존재한다. 거리가 $0$ 이 아니라고 하고, $S$ 에서 원점에 가장 가까운 점을 $z\ne 0$ 이라 한다.

$z$ 가 가장 가까운 점이므로 모든 $c_i$ 가 $\langle z,c_i\rangle\ge\vert z\vert^2$ 을 만족한다. $z$ 는 초평면 $\langle z,y\rangle=\vert z\vert^2$ 위에 있는 $c_i$ 들의 볼록 결합이고, 이 초평면은 $d-1$ 차원이므로 Carathéodory 정리로 $c_i$ 가운데 많아야 $d$ 개만 쓴다. 쓰이지 않는 첨자를 $k$ 라 한다.

$0\in\mathrm{conv}(C_k)$ 이므로 $\langle z,c'\rangle\le 0$ 인 $c'\in C_k$ 가 존재한다. $c_k$ 를 $c'$ 로 바꾼 무지개 단체 $S'$ 는 $z$ 와 $c'$ 를 포함하고, 선분 위의 점 $z+t(c'-z)$ 에서

$$
\frac{\mathrm d}{\mathrm dt}\Big\vert_{t=0}\vert z+t(c'-z)\vert^2=2\left(\langle z,c'\rangle-\vert z\vert^2\right)\lt 0
$$

이다. 작은 $t\gt 0$ 에서 $S'$ 의 점이 원점에 $z$ 보다 가까우므로 $S$ 의 선택에 모순이다.

## 다색 Helly 정리

**정리(Lovász).** $\mathbb R^d$ 의 볼록집합 유한 모임 $\mathcal F_1,\dots,\mathcal F_{d+1}$ 에서, $K_i\in\mathcal F_i$ 를 어떻게 골라도 $K_1\cap\cdots\cap K_{d+1}\ne\varnothing$ 이면, 어느 한 $\mathcal F_i$ 는 모든 원소의 교집합이 공집합이 아니다.[^1]

$\mathcal F_1=\cdots=\mathcal F_{d+1}$ 이면 Helly 정리다. Bárány 의 논문이 이 정리를 Lovász 의 것으로 소개하고 증명한다.

## 첫째 선택 보조정리

**정리(Bárány).** $d$ 에만 의존하는 상수 $c_d\gt 0$ 이 존재해, $\mathbb R^d$ 의 일반 위치(general position)의 점 $n$ 개가 만드는 단체 $\binom{n}{d+1}$ 개 가운데 $c_d\binom{n}{d+1}$ 개 이상에 공통으로 들어가는 점이 존재한다.[^1]

이 정리를 **첫째 선택 보조정리(first selection lemma)** 라 한다. Bárány 의 증명은 [Tverberg 정리](tverberg-theorem.md)로 점을 여러 부분으로 나누고, 부분들에서 다색 Carathéodory 정리로 Tverberg 점을 포함하는 무지개 단체를 고르는 방식이다.[^2]

# 활용

- [Tverberg 정리](tverberg-theorem.md)의 Sarkaria 증명은 $(d+1)(r-1)$ 차원에서 이 정리를 쓴다.
- 첫째 선택 보조정리는 약한 $\varepsilon$ 그물(weak $\varepsilon$-net)의 구성에 쓰인다.[^2]

[^1]: I. Bárány, *A generalization of Carathéodory's theorem*, Discrete Math. **40** (1982), 141–152.
[^2]: J. Matoušek, *Lectures on Discrete Geometry*, GTM 212, Springer, 2002, 8 장과 9 장.

# 연관 문서

## 선수지식

- [Helly 정리](helly-theorem.md)

## 더 알아보기

- [Tverberg 정리](tverberg-theorem.md)

#optimization #combinatorics
