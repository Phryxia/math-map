# Steiner 비

# 개요

**Steiner 비(Steiner ratio)** 는 점 집합을 잇는 가장 짧은 Steiner 나무의 길이와 [최소 신장트리](minimum-spanning-tree.md)의 길이의 비를 모든 점 집합에 걸쳐 가장 작게 만든 값이다. 평면의 Euclid 거리에서 정삼각형의 비가 $\sqrt3/2$ 이고, 이 값이 Steiner 비라는 것이 Gilbert–Pollak 추측(Gilbert–Pollak conjecture)이다. 증명된 하한은 $0.824$ 이다. Steiner 비의 역수는 최소 신장트리로 [Steiner 나무 문제](steiner-tree-problem.md)를 근사할 때의 근사비다.

# 직관

한 변의 길이가 $1$ 인 정삼각형의 세 꼭짓점을 잇는다. 꼭짓점끼리만 이으면 변 둘을 써서 길이가 $2$ 다. 삼각형의 중심에 점 하나를 더해 세 꼭짓점을 그 점에 이으면, 중심에서 꼭짓점까지의 거리가 $1/\sqrt3$ 이므로 길이가 $3/\sqrt3=\sqrt3\approx 1.732$ 다. 점을 더해서 길이가 $2$ 에서 $\sqrt3$ 으로 줄었고, 비는 $\sqrt3/2\approx 0.866$ 이다.

점을 더하는 방법을 아무리 잘 골라도 길이가 꼭짓점끼리만 이은 길이의 몇 배 아래로는 내려가지 않는지 묻는다. 정삼각형에서는 중심이 가장 좋은 점이므로 이 배수가 $\sqrt3/2$ 이다. 점이 많아지면 더할 점의 선택이 많아지지만, 정삼각형보다 비가 작은 점 집합은 알려져 있지 않다[^5].

# 정의

거리 공간 $(X,d)$ 의 유한집합 $P$ 에 대해 $\mathrm{SMT}(P)$ 를 $P$ 를 잇는 가장 짧은 Steiner 나무의 길이, $\mathrm{MST}(P)$ 를 $P$ 의 최소 신장트리의 길이라 한다. 앞의 것은 **최소 Steiner 나무(Steiner minimal tree)** 의 길이이고 $X$ 의 어느 점이든 Steiner 점으로 쓸 수 있다. Steiner 비는 다음 값이다.

$$
\rho(X)=\inf_{P\subseteq X,\thinspace 2\le\lvert P\rvert\lt\infty}\frac{\mathrm{SMT}(P)}{\mathrm{MST}(P)}
$$

Steiner 나무가 신장트리 하나이기도 하므로 $\rho(X)\le 1$ 이다.

# 성질

## 일반 거리 공간의 하한

정리. 모든 거리 공간에서 $\rho\ge 1/2$ 이다.

증명의 요지. 최소 Steiner 나무를 한 바퀴 도는 길은 길이가 $2\thinspace\mathrm{SMT}(P)$ 이고 $P$ 의 점을 모두 지난다. 그 길에서 $P$ 의 점을 처음 만나는 순서로 이으면 삼각부등식으로 길이가 $2\thinspace\mathrm{SMT}(P)$ 이하인 $P$ 의 신장 경로가 나온다. 따라서 $\mathrm{MST}(P)\le 2\thinspace\mathrm{SMT}(P)$ 이다. Steiner 나무 문제의 거리 폐포 2-근사가 이 부등식이다.

그래프의 최단경로 거리에서는 이 값이 최선이다. 별 모양 그래프에서 가운데 정점에서 단말 $k$ 개로 비용 $1$ 인 간선을 두면 $\mathrm{SMT}=k$, $\mathrm{MST}=2(k-1)$ 이고 비가 $1/2$ 로 간다.

## 직교 거리

정리(Hwang). 평면의 직교 거리 $d(x,y)=\lvert x_1-y_1\rvert+\lvert x_2-y_2\rvert$ 에서 $\rho=2/3$ 이다[^1].

네 점 $(\pm1,0)$, $(0,\pm1)$ 에서 최소 신장트리는 길이 $2$ 인 변 셋으로 $6$ 이고, 원점을 Steiner 점으로 쓰면 $4$ 이므로 비가 $2/3$ 이다.

## Euclid 평면

Euclid 평면에서 최소 Steiner 나무의 Steiner 점은 차수가 $3$ 이고 세 선분이 $120^\circ$ 로 만난다. 점이 $k$ 개이면 Steiner 점은 $k-2$ 개 이하다[^2].

정리(Chung–Graham). Euclid 평면에서 $\rho\ge 0.824$ 이다[^3].

E. N. Gilbert 와 H. O. Pollak 은 Euclid 평면의 Steiner 비가 정삼각형의 값 $\sqrt3/2$ 라고 추측했다[^2]. D.-Z. Du 와 F. K. Hwang 이 1990 년에 증명을 발표했으나[^4], A. O. Ivanov 와 A. A. Tuzhilin 은 그 증명에 빈틈이 있어 추측이 열려 있다고 지적했다[^5].

## 고차원

Gilbert 와 Pollak 은 $\mathbb R^n$ 에서도 정단체가 가장 작은 비를 준다고 추측했으나, Du 와 Smith 가 $n\ge 3$ 에서 정단체보다 비가 작은 점 집합을 찾아 이 고차원 판본을 반증했다[^6].

# 활용

- 근사비. 최소 신장트리는 다항시간에 구하므로, 이것을 Steiner 나무의 근사로 쓰면 근사비가 $1/\rho$ 다. Euclid 평면에서 $1/0.824\approx 1.214$ 이하가 증명되어 있다.
- 회로 배선. 집적회로의 배선은 가로와 세로 선분으로만 이으므로 직교 거리의 Steiner 나무 문제이고, 신장트리로 근사할 때 Hwang 의 정리에 따라 손실이 $3/2$ 배 이하다.

[^1]: F. K. Hwang, "On Steiner minimal trees with rectilinear distance", SIAM Journal on Applied Mathematics 30 (1976), 104–114.
[^2]: E. N. Gilbert, H. O. Pollak, "Steiner minimal trees", SIAM Journal on Applied Mathematics 16 (1968), 1–29.
[^3]: F. R. K. Chung, R. L. Graham, "A new bound for Euclidean Steiner minimal trees", Annals of the New York Academy of Sciences 440 (1985), 328–346.
[^4]: D.-Z. Du, F. K. Hwang, "A proof of the Gilbert–Pollak conjecture on the Steiner ratio", Algorithmica 7 (1992), 121–135.
[^5]: A. O. Ivanov, A. A. Tuzhilin, "The Steiner ratio Gilbert–Pollak conjecture is still open", Algorithmica 62 (2012), 630–632.
[^6]: D.-Z. Du, W. D. Smith, "Disproofs of generalized Gilbert–Pollak conjecture on the Steiner ratio in three or more dimensions", Journal of Combinatorial Theory, Series A 74 (1996), 115–130.

# 연관 문서

## 선수지식

- [Steiner 나무 문제](steiner-tree-problem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #optimization #combinatorics
