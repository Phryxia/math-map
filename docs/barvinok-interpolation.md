# Barvinok 보간법

# 개요

**Barvinok 보간법(Barvinok's interpolation method)** 은 분배함수처럼 계수가 양수인 다항식의 값을, 원점에서의 낮은 차수 계수 몇 개만으로 근사하는 방법이다. 그래프의 독립집합에 크기마다 무게 $\lambda$ 를 곱해 더한 값은 정점이 늘면 항을 모두 적을 수 없다. 그런데 크기가 작은 독립집합의 수는 셀 수 있다.

다항식의 로그를 원점에서 Taylor 전개해 앞의 몇 항만 남기면, 다항식의 영점이 멀리 있는 곳에서는 오차가 항의 수에 대해 지수적으로 줄어든다. 영점이 없는 영역이 증명되면 그 영역에서 [근사 알고리즘](approximation-algorithms.md)이 나온다.

# 직관

[단단한 알갱이 모형](hard-core-model.md)의 네 칸 고리 $C\_4$ 에서 분배함수는 다음이다.

$$
Z(\lambda)=1+4\lambda+2\lambda^2
$$

$\lambda=0.1$ 에서 $\log Z(0.1)=\log 1.42\approx 0.35066$ 이다. 이 값을 $\log Z$ 의 원점 전개로 구한다. 전개는 다음과 같다.

$$
\log Z(\lambda)=4\lambda-6\lambda^2+\tfrac{40}{3}\lambda^3-34\lambda^4+\cdots
$$

앞의 세 항을 $\lambda=0.1$ 에서 더하면 $0.35333$ 이고 오차는 $0.0027$ 이다. 네 항을 더하면 $0.34993$ 이고 오차는 $0.0007$ 이다. 항을 하나 더할 때마다 오차가 네 배 가까이 줄어든다.

오차가 줄어드는 빠르기는 $Z$ 의 영점에서 온다. $Z$ 의 영점은 $-1\pm\tfrac{\sqrt2}{2}$ 이고, 원점에 가까운 것은 $-0.293$ 이다. $\lambda=0.1$ 은 그 거리의 약 $1/2.93$ 배에 있어서, $k$ 차 항이 대략 $2.93^{-k}$ 의 비율로 작아진다.

# 정의

정점 $n$ 개의 그래프 $G$ 의 **독립 다항식(independence polynomial)** 은 크기가 $j$ 인 독립집합의 수 $i_j$ 로 적은 다음 다항식이다.

$$
Z\_G(\lambda)=\sum_{j\ge 0}i_j\lambda^j
$$

단단한 알갱이 모형의 분배함수가 이것이다. $C\_4$ 에서 $i_0=1$, $i_1=4$, $i_2=2$ 다.

차수 $N$ 인 다항식 $p$ 가 $p(0)=1$ 이면 $\log p$ 의 원점 전개를 $m$ 차에서 자른 다항식 $T_m$ 을 $p$ 의 $m$ 차 **절단 로그(truncated logarithm)** 라 한다. $T_m$ 의 계수는 $p$ 의 앞 $m$ 개 계수만으로 정해진다. 직관 절의 $T_3(\lambda)=4\lambda-6\lambda^2+\tfrac{40}{3}\lambda^3$ 이 $Z$ 의 $3$ 차 절단 로그다.

# 성질

## 절단 오차

$p$ 의 영점이 모두 원판 $\vert z\vert\lt\beta$ 밖에 있고 $\beta\gt 1$ 이면, $\vert z\vert\le 1$ 에서 다음이 성립한다[^1].

$$
\vert\log p(z)-T_m(z)\vert\le\frac{N}{(m+1)\beta^m(\beta-1)}
$$

$p(z)=\prod_i(1-z/\zeta_i)$ 로 쓰면 $\log p(z)=-\sum_i\sum_k (z/\zeta_i)^k/k$ 이다. 영점마다 $m$ 차 뒤의 꼬리는 $\sum_{k\gt m}\beta^{-k}/k$ 이하이고, 이것을 등비급수로 누르면 위 식이 나온다. 직관 절에서 $z=\lambda/0.1$ 로 놓으면 $\beta\approx 2.93$, $N=2$, $m=3$ 이고 상한은 $0.010$ 으로 실제 오차 $0.0027$ 보다 크다.

## 원판 밖으로 옮기기

근사하려는 점 $\lambda$ 가 가장 가까운 영점보다 멀면 원점 전개가 수렴하지 않는다. 이때는 $\phi(0)=0$, $\phi(1)=\lambda$ 이고 원판 $\vert z\vert\lt\beta$ 를 $Z$ 의 영점이 없는 영역 안으로 보내는 다항식 $\phi$ 를 골라 $Z\circ\phi$ 에 위 절단을 적용한다[^1]. $Z\circ\phi$ 의 앞 $m$ 개 계수도 $Z$ 의 앞 $m$ 개 계수로 정해진다. 그래서 $0$ 에서 $\lambda$ 까지 이어진 영점 없는 영역이 있으면 $\log Z(\lambda)$ 가 앞 계수 몇 개로 근사된다.

## 계수의 계산

$m=O(\log(n/\varepsilon))$ 개의 계수가 있으면 $\log Z$ 의 오차가 $\varepsilon$ 이하다. 크기 $m$ 이하의 독립집합을 모두 세면 $n^{O(m)}$ 시간이 들어 준다항 시간이다. Patel 과 Regts 는 최대 차수가 $\Delta$ 로 유계인 그래프에서 영점의 거듭제곱합을 연결된 작은 부분그래프의 수로 적어, 앞 $m$ 개 계수를 $n(e\Delta)^{O(m)}$ 시간에 구했다[^2]. 이것으로 결정론적 다항 시간 근사가 나온다.

## 영점 없는 영역

최대 차수가 $\Delta$ 인 모든 그래프의 독립 다항식은 원판 $\vert\lambda\vert\lt(\Delta-1)^{\Delta-1}/\Delta^\Delta$ 안에 영점이 없다[^3]. 이 반지름이 [국소 보조정리의 Shearer 경계](lll-shearer-bound.md)의 최대 차수 경계다. $C\_4$ 는 $\Delta=2$ 라서 반지름이 $1/4$ 이고, 실제 가장 가까운 영점 $0.293$ 은 그 밖에 있다. Peters 와 Regts 는 양의 실수 구간 $\lbrack 0,\lambda\_c(\Delta))$ 의 복소 근방에 영점이 없음을 보였다[^4]. $\lambda\_c(\Delta)$ 는 단단한 알갱이 모형 문서의 유일성 문턱이고, 그 아래에서 Barvinok 보간법이 [Weitz 알고리즘](weitz-algorithm.md)과 같은 범위의 근사를 준다.

# 활용

- 결정론적 근사 세기. 독립 다항식, 매칭 다항식, [Ising 모형](ising-model.md)과 [Potts 모형](potts-model.md)의 분배함수, 그래프 준동형의 수를 영점 없는 영역에서 다항 시간에 근사한다[^2].
- 복소수 활동도. Weitz 알고리즘의 나무 재귀는 양의 활동도에서 확률로 쓰이지만, 이 방법은 영점만 피하면 음수나 복소수 활동도에서도 값을 준다.
- 영구식(permanent) 근사. Barvinok 는 성분이 $1$ 에 가까운 복소 행렬의 영구식을 같은 방법으로 준다항 시간에 근사했다[^1].

[^1]: A. Barvinok, *Combinatorics and Complexity of Partition Functions*, Algorithms and Combinatorics 30, Springer (2016).
[^2]: V. Patel, G. Regts, "Deterministic polynomial-time approximation algorithms for partition functions and graph polynomials", *SIAM Journal on Computing* 46 (2017), 1893–1919.
[^3]: A. D. Scott, A. D. Sokal, "The repulsive lattice gas, the independent-set polynomial, and the Lovász local lemma", *Journal of Statistical Physics* 118 (2005), 1151–1261.
[^4]: H. Peters, G. Regts, "On a conjecture of Sokal concerning roots of the independence polynomial", *Michigan Mathematical Journal* 68 (2019), 33–55.

# 연관 문서

## 선수지식

- [단단한 알갱이 모형](hard-core-model.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #algorithms #complex_analysis #complexity
