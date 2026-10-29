# 최초 통과 침투

# 개요

**최초 통과 침투(first-passage percolation)** 는 격자의 변마다 무작위 통과 시간을 주고, 두 점 사이의 가장 빠른 경로가 얼마나 걸리는지 보는 모형이다. 바둑판 모양 도로의 구간마다 동전을 던져 $1$ 분이나 $2$ 분을 정하면, 원점에서 동쪽으로 $n$ 칸 떨어진 곳까지 가장 빠른 길은 $n$ 분 이상 $2n$ 분 이하가 걸리고 그 사이 어느 값인지는 동전에 따라 다르다. 이 모형은 가장 빠른 시간이 앞 구간과 뒤 구간의 시간 합 이하라는 부등식으로 $n$ 으로 나눈 시간이 상수로 수렴함을 보이고, 그 상수와 그 둘레의 흔들림을 연구한다.

# 직관

최초 통과 침투는 격자의 각 변에 독립이고 같은 분포를 따르는 음이 아닌 통과 시간을 주고, 두 점 사이를 가는 데 걸리는 최소 시간을 연구하는 모형이다. Hammersley 와 Welsh 가 1965 년에 도입했다.[^1]

[침투](percolation.md)가 변을 열거나 닫는 두 값만 주는 데 비해 이 모형은 변마다 시간을 준다. 거리 $n$ 만큼 가는 시간이 $n$ 에 비례해 자란다는 것은 [Kingman 부분가법 에르고딕 정리](kingman-subadditive-ergodic.md)로 증명된다.

정수 격자 $\mathbb Z^2$ 의 원점에서 감염이 시작된다고 한다. 감염된 점은 이웃한 점에게 변마다 무작위로 걸리는 시간 뒤에 감염을 옮긴다. 시각 $t$ 까지 감염된 점의 집합이 어떤 모양으로 얼마나 빨리 커지는지 알고 싶다. 점 $x$ 가 감염되는 시각은 원점에서 $x$ 로 가는 경로들 가운데 변의 시간 합이 가장 작은 것의 시간 합이다.

원점에서 $(m+n,0)$ 까지 가는 가장 빠른 길은 $(m,0)$ 을 지나는 길보다 느리지 않다. 따라서 $(m+n,0)$ 까지의 시간은 $(m,0)$ 까지의 시간과 $(m,0)$ 에서 $(m+n,0)$ 까지의 시간의 합 이하다. 둘째 시간은 출발점만 옮긴 것이라 $(n,0)$ 까지의 시간과 분포가 같고, 이 부등식이 Kingman 정리의 조건이다. 그러면 거리 $n$ 까지의 시간을 $n$ 으로 나눈 값이 거의 확실히 상수로 수렴하고, 감염 영역은 시간에 비례하는 속도로 커진다.

# 정의

## 통과 시간

$\mathbb Z^d$ 의 이웃한 두 점을 잇는 변 $e$ 마다 음이 아닌 확률변수 $\tau_e$ 를 독립하게 분포 $F$ 로 준다. 경로 $\gamma$ 의 통과 시간은 $\sum_{e\in\gamma}\tau_e$ 이고, 두 점 사이의 **통과 시간(passage time)** 은

$$
T(x,y)=\inf\Bigl\lbrace\sum_{e\in\gamma}\tau_e : \gamma \text{ 는 } x \text{ 와 } y \text{ 를 잇는 경로}\Bigr\rbrace
$$

이다. $T$ 는 삼각부등식 $T(x,z)\le T(x,y)+T(y,z)$ 를 만족하는 무작위 거리다.

## 시간 상수

$x\in\mathbb Z^d$ 에 대해 극한

$$
\mu(x)=\lim_{n\to\infty}\frac{T(0,nx)}{n}
$$

을 **시간 상수(time constant)** 라 한다. 시각 $t$ 까지 도달하는 점의 집합 $B(t)=\lbrace x : T(0,x)\le t\rbrace$ 를 **도달 집합**이라 한다.

# 성질

## 시간 상수의 존재

> **정리.** $\mathbb E\tau_e\lt\infty$ 이면 모든 $x\in\mathbb Z^d$ 에서 $T(0,nx)/n$ 이 거의 확실히, 그리고 $L^1$ 에서 상수 $\mu(x)$ 로 수렴한다.

직관 절의 부등식 $T(0,(m+n)x)\le T(0,mx)+T(mx,(m+n)x)$ 로 $g_n=T(0,nx)$ 가 격자 평행이동 $y\mapsto y+x$ 위의 부분가법 과정이고, 이 평행이동은 에르고딕이다. $\mu$ 는 $\mu(kx)=k\mu(x)$ 와 $\mu(x+y)\le\mu(x)+\mu(y)$ 를 만족하고, $\mathbb R^d$ 위의 연속인 반노름으로 확장된다.

## 시간 상수가 양수일 조건

> **정리 (Kesten).** $\mu$ 가 노름인 것과 $F(0)\lt p_c(d)$ 인 것은 동치다. 여기서 $p_c(d)$ 는 $\mathbb Z^d$ 의 변 침투의 임계 확률이다.[^2]

$F(0)=P(\tau_e=0)$ 은 시간이 $0$ 인 변의 비율이다. 이 비율이 $p_c$ 이상이면 시간 $0$ 인 변만으로 무한히 멀리 가는 성분이 생기고 $\mu=0$ 이다.

## 모양 정리

> **정리 (Cox–Durrett 1981, Kesten 1986).** $\tau_1,\dots,\tau_{2d}$ 가 독립이고 분포가 $F$ 일 때 $\mathbb E\min(\tau_1,\dots,\tau_{2d})^d\lt\infty$ 이고 $F(0)\lt p_c(d)$ 라 한다. $B_\mu=\lbrace x\in\mathbb R^d:\mu(x)\le 1\rbrace$ 로 두면 모든 $\varepsilon\gt 0$ 에 대해 거의 확실히, 충분히 큰 $t$ 에서
> $$
> (1-\varepsilon)B_\mu\subseteq\frac{\tilde B(t)}{t}\subseteq(1+\varepsilon)B_\mu
> $$
> 이다. $\tilde B(t)$ 는 $B(t)$ 의 각 점에 단위 정육면체를 붙인 집합이다.[^3]

Cox 와 Durrett 가 $d=2$ 에서, Kesten 이 일반 $d$ 에서 증명했다.

$B_\mu$ 를 **극한 모양(limit shape)** 이라 한다. $B_\mu$ 는 볼록하고 좌표축 반사와 좌표 치환에 대해 대칭인 콤팩트 집합이다.

# 활용

- **확률적 성장 모형.** $\tau_e$ 가 [지수분포](exponential-distribution.md)이면 지수분포의 무기억성으로 도달 집합이 연속시간 Markov 과정이 되고, 감염되지 않은 점이 감염된 이웃의 수에 비례하는 비율로 감염되는 Richardson 성장 모형과 같다. 모양 정리가 이 모형의 극한 모양을 준다.
- **부분가법 과정.** Hammersley 와 Welsh 가 이 모형의 시간 상수를 다루려고 부분가법 과정을 정의했고, Kingman 정리는 그 문제의 답으로 증명되었다.

[^1]: J. M. Hammersley, D. J. A. Welsh, "First-passage percolation, subadditive processes, stochastic networks, and generalized renewal theory", *Bernoulli–Bayes–Laplace Anniversary Volume*, Springer (1965), 61–110. 개관은 A. Auffinger, M. Damron, J. Hanson, *50 Years of First-Passage Percolation*, AMS University Lecture Series 68 (2017).

[^2]: H. Kesten, "Aspects of first passage percolation", *École d'Été de Probabilités de Saint-Flour XIV*, Lecture Notes in Mathematics 1180, Springer (1986), 125–264.

[^3]: J. T. Cox, R. Durrett, "Some limit theorems for percolation processes with necessary and sufficient conditions", *Annals of Probability* 9 (1981), 583–603.

# 연관 문서

## 선수지식

- [Kingman 부분가법 에르고딕 정리](kingman-subadditive-ergodic.md)
- [침투](percolation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #measure_theory
