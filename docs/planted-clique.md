# 숨긴 클릭 문제

# 개요

**숨긴 클릭 문제(planted clique problem)** 는 [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md) $G(n,1/2)$ 에서 정점 $k$ 개를 골라 그 사이를 모두 이은 그래프가 주어질 때, 고른 $k$ 개를 찾는 문제다. $k$ 가 $2\log_2n$ 보다 크면 그 클릭은 정보로는 유일하게 정해지지만, 다항시간 알고리즘은 $k\ge c\sqrt n$ 에서만 알려져 있다. 이 간격 때문에 숨긴 클릭 문제는 [클릭 문제](clique-problem.md)의 평균 판본이면서, 통계 문제의 계산 하한을 증명하는 출발점으로 쓰인다.

# 직관

정점 $n$ 개의 무작위 그래프에서 각 정점의 차수는 평균 $n/2$ 이고 표준편차가 $\sqrt n/2$ 쯤이다. 클릭에 든 정점은 클릭 안의 $k-1$ 개와 모두 이어지므로 차수가 평균보다 약 $k/2$ 크다. $k$ 가 $\sqrt{n\log n}$ 보다 충분히 크면 이 차이가 표준편차의 $\sqrt{\log n}$ 배를 넘어, 차수가 큰 정점 $k$ 개를 고르면 클릭이 나온다.

$k$ 가 $\sqrt n$ 정도이면 차수 차이 $k/2$ 가 표준편차와 같은 크기라 차수만으로는 가려지지 않는다. 그래도 클릭은 인접 행렬에 $k\times k$ 크기의 1 덩어리를 더하므로, 그 덩어리가 행렬의 고유벡터 하나를 클릭 쪽으로 기울게 한다. 무작위 부분의 고윳값은 $\sqrt n$ 크기이고 덩어리가 주는 고윳값은 $k/2$ 크기라서, $k$ 가 $\sqrt n$ 의 큰 상수배이면 고유벡터로 클릭을 찾는다. $k$ 가 $\sqrt n$ 보다 작아지면 이런 방법이 모두 멈춘다.

# 정의

$\mathcal G(n,1/2,k)$ 는 $G(n,1/2)$ 를 뽑은 뒤 크기 $k$ 의 정점 집합 $K$ 를 균등하게 골라 $K$ 의 모든 쌍을 잇는 분포다.

- **찾기 문제(recovery).** $\mathcal G(n,1/2,k)$ 의 그래프에서 $K$ 를 높은 확률로 출력한다.
- **판정 문제(detection).** 그래프가 $G(n,1/2)$ 에서 왔는지 $\mathcal G(n,1/2,k)$ 에서 왔는지 높은 확률로 맞힌다.

**숨긴 클릭 가설(planted clique hypothesis)** 은 어떤 $\varepsilon\gt 0$ 에 대해서도 $k\le n^{1/2-\varepsilon}$ 이면 판정 문제를 푸는 다항시간 알고리즘이 없다는 가설이다.

# 성질

## 정보 이론적 문턱

$G(n,1/2)$ 의 클릭수는 거의 확실하게 $(2-o(1))\log_2n$ 이다. $k\ge(2+\varepsilon)\log_2n$ 이면 크기 $k$ 의 클릭은 $K$ 하나뿐이어서, 크기 $k$ 의 정점 집합을 모두 시도하는 $n^{O(\log n)}$ 시간의 방법으로 $K$ 를 찾는다. 계산 시간을 따지지 않으면 문턱은 $2\log_2n$ 이다.

## 차수 방법

정리(Kučera). $k\ge c\sqrt{n\log n}$ 이면 차수가 가장 큰 정점 $k$ 개가 높은 확률로 $K$ 와 같다[^1].

증명의 요지는 직관 절의 계산이다. 클릭 밖 정점의 차수는 $\mathrm{Bin}(n-1,1/2)$ 이고, [집중 부등식](concentration-inequalities.md)과 합집합 한계로 모든 정점에서 평균과의 차이가 $\sqrt{n\log n}$ 의 상수배 이하다.

## 스펙트럼 방법

정리(Alon–Krivelevich–Sudakov). $k\ge c\sqrt n$ 이면 다항시간에 $K$ 를 높은 확률로 찾는다[^2].

증명의 요지. 인접 행렬에서 이웃이면 $1$, 아니면 $-1$ 로 둔 행렬 $A$ 를 $A=R+P$ 로 가른다. $R$ 은 무작위 부호 행렬이고, 그 고윳값은 [Wigner 반원 법칙](wigner-semicircle.md)에 따라 $\lbrack -2\sqrt n,2\sqrt n\rbrack$ 에 모이며 Füredi–Komlós 의 경계로 $\Vert R\Vert\le(2+o(1))\sqrt n$ 이다. $P$ 는 $K\times K$ 블록에서 $1$ 에 가까운 항을 더하는 행렬이라 고윳값 $k$ 근처를 준다. $k\gt c\sqrt n$ 이면 둘째 고유벡터의 큰 성분이 $K$ 의 대부분을 가리키고, 나머지는 이웃 수로 정리한다.

## 계산 하한의 증거

$k\le n^{1/2-\varepsilon}$ 에서 다음 알고리즘들이 판정에 실패한다는 것이 증명되어 있다.

- 제곱합 계층(sum-of-squares hierarchy)의 차수 $o(\log n)$ 판본(Barak 등)[^3].
- 통계적 질의(statistical query) 알고리즘(Feldman 등)[^4].
- 그래프의 작은 부분그래프 개수를 세는 저차 다항식 검정.

## 다른 문제로 가는 환원

Q. Berthet 와 P. Rigollet 는 숨긴 클릭 가설 아래에서 희소 [주성분 분석](principal-component-analysis.md)이 정보 이론적 표본 수보다 많은 표본을 써야 다항시간에 풀린다는 것을 환원으로 증명했다[^5]. 같은 꼴의 환원이 숨긴 밀집 부분그래프, 공동 군집, 텐서 주성분 분석의 계산 문턱을 준다.

# 활용

- 통계와 계산의 간격. 정보 이론적으로 가능한 추정과 다항시간으로 가능한 추정 사이의 간격을 보이는 표준 출발점이다.
- 암호. 숨긴 클릭 가설을 써서 일방향 함수와 공개키 암호를 만들려는 구성이 연구되었다.
- 근사 하한. 숨긴 클릭 가설은 밀집 $k$ 부분그래프 문제와 [Nash 균형](nash-equilibrium.md)의 근사에 대한 하한의 가정으로 쓰인다.

[^1]: L. Kučera, "Expected complexity of graph partitioning problems", Discrete Applied Mathematics 57 (1995), 193–212.
[^2]: N. Alon, M. Krivelevich, B. Sudakov, "Finding a large hidden clique in a random graph", Random Structures & Algorithms 13 (1998), 457–466.
[^3]: B. Barak, S. B. Hopkins, J. Kelner, P. K. Kothari, A. Moitra, A. Potechin, "A nearly tight sum-of-squares lower bound for the planted clique problem", SIAM Journal on Computing 48 (2019), 687–735.
[^4]: V. Feldman, E. Grigorescu, L. Reyzin, S. S. Vempala, Y. Xiao, "Statistical algorithms and a lower bound for detecting planted cliques", Journal of the ACM 64 (2017), Article 8.
[^5]: Q. Berthet, P. Rigollet, "Complexity theoretic lower bounds for sparse principal component detection", Proceedings of the 26th Conference on Learning Theory (2013), 1046–1066.

# 연관 문서

## 선수지식

- [클릭 문제](clique-problem.md)
- [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #probability #graph_theory #statistics
