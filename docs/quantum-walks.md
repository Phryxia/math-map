# 양자 걸음

# 개요

**양자 걸음(quantum walk)** 은 [무작위 걷기](random-walks.md)에서 동전 던지기를 큐비트의 유니터리로, 확률을 진폭으로 바꾼 과정이다. 직선 위에서 동전을 던져 왼쪽이나 오른쪽으로 한 칸씩 가면 $t$ 걸음 뒤 출발점에서 떨어진 거리가 $\sqrt t$ 규모다. 양자 걸음에서는 여러 경로의 진폭이 서로 지워지거나 보태져 거리가 $t$ 규모로 늘고, 이 차이를 그래프 탐색과 원소 구별 같은 문제에서 질의 수를 줄이는 데 쓴다.

# 직관

정수 직선 위의 위치 $x$ 와 동전 큐비트 $c\in\lbrace L,R\rbrace$ 를 함께 둔다. 한 걸음은 동전에 $H$ 를 걸어 $\vert L\rangle\mapsto\tfrac1{\sqrt 2}(\vert L\rangle+\vert R\rangle)$, $\vert R\rangle\mapsto\tfrac1{\sqrt 2}(\vert L\rangle-\vert R\rangle)$ 로 바꾸고, 동전이 $L$ 이면 왼쪽, $R$ 이면 오른쪽으로 한 칸 옮기는 것이다. $\vert 0,L\rangle$ 에서 시작하면

$$
\tfrac1{\sqrt 2}\big(\vert -1,L\rangle+\vert 1,R\rangle\big),\qquad\tfrac12\big(\vert -2,L\rangle+\vert 0,L\rangle+\vert 0,R\rangle-\vert 2,R\rangle\big)
$$

이 한 걸음과 두 걸음 뒤의 상태다. 두 걸음까지는 위치의 확률이 $\tfrac14,\tfrac12,\tfrac14$ 로 동전 던지기와 같다.

셋째 걸음에서 위치 $1$ 로 가는 경로는 $\vert 0,L\rangle$ 에서 오는 것과 $\vert 0,R\rangle$ 에서 오는 것 둘이다. 동전 $H$ 를 거친 $\vert R\rangle$ 성분은 앞의 것이 $+\tfrac1{2\sqrt 2}$, 뒤의 것이 $-\tfrac1{2\sqrt 2}$ 라 지워진다. 결과는

$$
\tfrac1{2\sqrt 2}\big(\vert -3,L\rangle+2\vert -1,L\rangle+\vert -1,R\rangle-\vert 1,L\rangle+\vert 3,R\rangle\big)
$$

이고, 위치 $-3,-1,1,3$ 의 확률이 $\tfrac18,\tfrac58,\tfrac18,\tfrac18$ 이다. 동전 던지기의 $\tfrac18,\tfrac38,\tfrac38,\tfrac18$ 과 달리 가운데 두 자리의 확률이 고르지 않다. 걸음이 늘면 이런 상쇄가 가운데의 확률을 줄이고 양 끝 쪽의 확률을 키운다.

# 정의

## 이산 시간 양자 걸음

그래프 $G=(V,E)$ 위의 **이산 시간 양자 걸음(discrete-time quantum walk)** 은 공간 $\mathbb C^V\otimes\mathbb C^{C}$ 위의 유니터리 $W=S(I\otimes K)$ 의 반복이다. $C$ 는 동전의 상태 집합, $K$ 는 동전에 거는 유니터리, $S$ 는 동전 상태에 따라 정점을 이웃으로 옮기는 치환이다. 직관 절은 $V=\mathbb Z$, $C=\lbrace L,R\rbrace$, $K=H$ 인 경우이고, 이것을 **Hadamard 걸음(Hadamard walk)** 이라 한다. $t$ 걸음 뒤 위치를 측정해 얻는 분포를 그 걸음의 분포라 한다.

## 연속 시간 양자 걸음

그래프의 인접 행렬 $A$ 에 대해 $\mathbb C^V$ 위의 유니터리 $e^{-iAt}$ 로 상태를 바꾸는 과정을 **연속 시간 양자 걸음(continuous-time quantum walk)** 이라 한다. 동전이 없고, [Markov 연쇄](markov-chains.md)의 연속 시간 걷기 $e^{(A-D)t}$ 에서 지수의 실수 계수를 허수로 바꾼 꼴이다. $D$ 는 차수 대각행렬이다.

# 성질

## 직선 위의 퍼짐

Hadamard 걸음을 $t$ 걸음 하면 위치 분포가 대부분 구간 $\lbrack -t/\sqrt 2,\thinspace t/\sqrt 2\rbrack$ 에 놓이고 표준편차가 $t$ 에 비례한다[^1]. 동전 던지기 걷기의 표준편차는 $\sqrt t$ 다. 직관 절의 셋째 걸음에서 본 비대칭은 시작 동전 $\vert L\rangle$ 에서 나오고, 시작 동전을 $\tfrac1{\sqrt 2}(\vert L\rangle+i\vert R\rangle)$ 로 두면 분포가 좌우 대칭이 된다.

## 혼합과 도달

양자 걸음은 유니터리의 반복이어서 분포가 하나의 극한으로 수렴하지 않는다. 그래서 시간 $0$ 에서 $T$ 까지 고르게 뽑은 시각의 분포를 보고 $T\to\infty$ 의 극한을 쓴다. 반면 출발점에서 표시된 정점에 도달하는 시간은 줄어든다. 가역 Markov 연쇄 $P$ 마다 Szegedy 의 양자 걸음은 표시된 정점을 찾는 시간을 고전 도달 시간의 제곱근 규모로 줄인다[^2].

## 접착된 나무

깊이 $n$ 인 두 이진 나무의 잎을 무작위 순환으로 이어 붙인 그래프에서, 한 뿌리에서 다른 뿌리로 가는 문제는 연속 시간 양자 걸음으로 $n$ 의 다항 시간에 풀리고, 이웃만 물을 수 있는 고전 알고리즘은 $2^{n/6}$ 규모의 질의가 든다[^3]. 양자 걸음은 대칭으로 묶인 깊이별 상태 위에서 직선 위의 걸음처럼 움직여 반대편 뿌리에 도달한다.

# 활용

- 원소 구별. 길이 $N$ 의 목록에 같은 값이 두 번 나오는지 묻는 문제를 [Johnson 그래프](johnson-graphs.md) 위의 양자 걸음으로 $O(N^{2/3})$ 번의 질의에 푼다[^4]. [양자 질의 복잡도](quantum-query-complexity.md)의 충돌 문제와 같은 다항식 방법으로 $\Omega(N^{2/3})$ 하한이 증명되어 있으므로 최적이다.
- 공간 탐색. 격자 위에서 표시된 정점을 찾는 문제는 [Grover 알고리즘](grover-algorithm.md)을 그대로 쓰면 이웃으로만 움직이는 제약 때문에 이득이 줄고, 양자 걸음으로 $2$ 차원 격자 $N$ 개 정점에서 $O(\sqrt N\log N)$ 규모로 찾는다.
- 보편성. 연속 시간 양자 걸음은 그래프를 알맞게 고르면 [양자 회로](quantum-circuits.md)의 계산을 모두 흉내 낼 수 있다.

[^1]: A. Ambainis, E. Bach, A. Nayak, A. Vishwanath, J. Watrous, One-dimensional quantum walks, *Proceedings of the 33rd ACM Symposium on Theory of Computing* (2001), 37–49.
[^2]: M. Szegedy, Quantum speed-up of Markov chain based algorithms, *Proceedings of the 45th IEEE Symposium on Foundations of Computer Science* (2004), 32–41.
[^3]: A. M. Childs, R. Cleve, E. Deotto, E. Farhi, S. Gutmann, D. A. Spielman, Exponential algorithmic speedup by a quantum walk, *Proceedings of the 35th ACM Symposium on Theory of Computing* (2003), 59–68.
[^4]: A. Ambainis, Quantum walk algorithm for element distinctness, *SIAM Journal on Computing* 37 (2007), 210–239.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)
- [무작위 걷기](random-walks.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #probability #graph_theory
