# 확률적 나무 매장

# 개요

**확률적 나무 매장(probabilistic tree embedding)** 은 거리 공간 하나를 여러 나무의 거리 가운데 무작위로 하나를 뽑는 것으로 바꾸되, 어느 두 점의 거리도 줄지 않고 평균으로는 $O(\log n)$ 배 넘게 늘지 않게 하는 방법이다. 고리 모양 도로망에서 나무 위에서만 쉽게 풀리는 문제를 풀려고 간선 하나를 지우면, 지운 간선의 두 끝은 고리를 거의 한 바퀴 돌아야 만난다. 지울 간선을 무작위로 고르면 어느 이웃한 두 점이든 그런 불운을 맞을 확률이 작아, 평균으로는 거리가 두 배 안에서 지켜진다.

# 직관

정점 $n$ 개가 고리를 이루고 간선 길이가 모두 $1$ 인 그래프에서 나무를 만들려면 간선 하나를 지운다. 지운 간선의 두 끝 사이 거리는 $1$ 에서 $n-1$ 로 늘어난다. 어느 간선을 지워도 그런 쌍이 하나 생기므로, 나무 하나로는 거리가 $n-1$ 배까지 늘어나는 것을 피할 수 없다.

지울 간선을 $n$ 개 가운데 고르게 무작위로 고른다. 이웃한 두 점의 거리는 확률 $\tfrac{n-1}{n}$ 로 $1$ 이고, 확률 $\tfrac1n$ 로 $n-1$ 이다. 평균은 다음과 같다.

$$
\frac{n-1}{n}\cdot 1+\frac1n\cdot(n-1)=\frac{2(n-1)}{n}\lt 2
$$

이웃하지 않은 두 점의 나무 거리는, 고리 위의 가장 짧은 경로가 지나는 이웃 쌍마다의 나무 거리를 더한 값 이하다. 그러므로 평균 거리가 원래 거리의 두 배 미만이다.

# 정의

## 지배하는 나무 거리

거리 공간 $(X,d)$ 에 대해, $X$ 를 잎이나 정점으로 담는 간선 길이 있는 나무 $T$ 의 경로 거리 $d\_T$ 가 모든 $x,y\in X$ 에서 $d\_T(x,y)\ge d(x,y)$ 이면 $T$ 가 $d$ 를 **지배한다(dominate)** 고 한다. 직관 절에서 간선 하나를 지운 경로는 고리의 거리를 지배한다.

## 확률적 근사

$X$ 를 지배하는 나무들 위의 확률분포 $\mathcal D$ 가 모든 $x,y$ 에서 다음을 만족할 때, $\mathcal D$ 를 $d$ 의 왜곡 $\alpha$ 의 **확률적 나무 매장** 이라 한다.

$$
\mathbb E\_{T\sim\mathcal D}\bigl\lbrack d\_T(x,y)\bigr\rbrack\le\alpha\thinspace d(x,y)
$$

직관 절의 고리는 간선을 하나씩 지운 경로 $n$ 개의 고른 분포로 왜곡이 $2$ 미만이다.

# 성질

## FRT 정리

정리(FRT 정리, Fakcharoenphol–Rao–Talwar theorem). 점이 $n$ 개인 거리 공간은 모두 왜곡 $O(\log n)$ 의 확률적 나무 매장을 갖고, 그 분포에서 나무 하나를 무작위 다항 시간에 뽑는다[^1].

구성. 거리를 조정해 가장 가까운 두 점의 거리가 $1$ 보다 크게 둔다. 점의 순서 $\pi$ 를 고르게 무작위로, 수 $\beta$ 를 $\lbrack 1,2\rbrack$ 에서 고르게 무작위로 뽑는다. 큰 규모에서 작은 규모로 내려가며 $i$ 번째 단계에서 각 점 $x$ 를, 순서 $\pi$ 에서 처음 나오는 점 가운데 $x$ 까지의 거리가 $\beta 2^{i-1}$ 이하인 점에 묶어 덩어리를 만들고, 앞 단계의 덩어리를 더 잘게 나눈다. 덩어리들이 이루는 포함 관계의 나무에서 $i$ 단계 덩어리와 그 아래 덩어리를 잇는 간선의 길이를 $2^i$ 로 둔다.

증명의 요지. $i$ 단계 덩어리의 지름이 $2^{i+1}$ 이하이므로 나무 거리가 원래 거리를 지배한다. 두 점 $x,y$ 가 $i$ 단계에서 처음 갈라지면 나무 거리는 $O(2^i)$ 다. 갈라지게 만드는 중심을 $x$ 에 가까운 순서로 $w\_1,w\_2,\dots$ 라 하면, $w\_s$ 가 갈라놓을 확률은 순서 $\pi$ 에서 $w\_s$ 가 $w\_1,\dots,w\_s$ 가운데 맨 앞일 확률 $\tfrac1s$ 와 반지름이 $d(x,w\_s)$ 와 $d(y,w\_s)$ 사이에 떨어질 확률 $O(d(x,y)/2^i)$ 의 곱 이하다. $s$ 에 대해 더하면 조화급수 $\sum\_s\tfrac1s=O(\log n)$ 이 나온다.

## 하한

정점 $n$ 개의 [Expander 그래프](expander-graphs.md)의 거리는 왜곡 $o(\log n)$ 의 확률적 나무 매장을 갖지 않는다[^2]. 그러므로 $O(\log n)$ 은 상수배를 빼면 더 줄일 수 없다.

## 나무 하나와의 차이

직관 절의 고리에서처럼, 나무 하나로는 왜곡이 $\Omega(n)$ 인 거리 공간이 있다. 확률적 매장은 각 쌍의 평균만 지키고 모든 쌍을 한 나무에서 동시에 지키지 않으므로 왜곡이 $O(\log n)$ 으로 준다. 비용이 거리의 일차식인 문제에서는 평균만 지켜도 근사비가 그대로 옮겨진다.

# 활용

- 거리 공간 위의 [근사 알고리즘](approximation-algorithms.md). 비용이 간선 길이의 합인 문제를 뽑은 나무 위에서 풀고 원래 공간으로 되돌리면 기대 근사비 $O(\log n)$ 이 나온다. 나무 위에서 쉬운 [k-중앙값 문제](k-median.md), 묶음 할인 망 설계(buy-at-bulk network design), 무리 [Steiner 나무 문제](steiner-tree-problem.md)(group Steiner tree problem)가 이 방법으로 처음 다항 로그 근사를 얻었다.
- 온라인 알고리즘. 요청이 하나씩 오는 거리 공간 문제를 나무 위의 문제로 바꾸어 경쟁비 $O(\log n)$ 배 안에서 푼다.
- 망각 경로 배정(oblivious routing). Räcke 는 그래프를 무작위 나무 분해의 볼록 결합으로 근사해, 수요를 모른 채 정한 경로가 혼잡을 최적의 $O(\log n)$ 배 안으로 지키게 했다[^3].
- [Bourgain 매장 정리](bourgain-embedding-theorem.md)와의 관계. 나무 거리는 $\ell\_1$ 에 거리를 그대로 두고 매장되므로, 확률적 나무 매장의 평균은 $\ell\_1$ 매장을 하나 준다. 그러나 나무 하나하나는 거리를 지배하므로 Bourgain 매장과 달리 어느 쌍도 줄어들지 않는다.

[^1]: J. Fakcharoenphol, S. Rao, K. Talwar, "A tight bound on approximating arbitrary metrics by tree metrics", *Journal of Computer and System Sciences* 69 (2004), 485–497.
[^2]: Y. Bartal, "Probabilistic approximation of metric spaces and its algorithmic applications", *Proceedings of the 37th IEEE Symposium on Foundations of Computer Science* (1996), 184–193.
[^3]: H. Räcke, "Optimal hierarchical decompositions for congestion minimization in networks", *Proceedings of the 40th ACM Symposium on Theory of Computing* (2008), 255–264.

# 연관 문서

## 선수지식

- [Bourgain 매장 정리](bourgain-embedding-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #combinatorics #graph_theory
