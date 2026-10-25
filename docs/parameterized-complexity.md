# 매개변수 복잡도

# 개요

**매개변수 복잡도(parameterized complexity)** 는 입력의 크기 $n$ 과 함께 매개변수 $k$ 를 보고, 실행 시간을 $f(k)\cdot n^{O(1)}$ 꼴로 막을 수 있는지에 따라 문제를 가르는 복잡도 이론이다. $f$ 는 아무 계산 가능한 함수여도 되므로 $k$ 가 작으면 [NP-완전성](np-completeness.md)(nondeterministic polynomial time)이 증명된 문제도 빠르게 풀린다. 크기 $k$ 의 정점 덮개는 $O(2^kn)$ 시간에 찾지만, 크기 $k$ 의 클릭은 $n^{o(k)}$ 시간 알고리즘이 없으리라 여겨진다. 이 차이를 가르는 것이 고정 매개변수 다루기 쉬움과 W 계층이다.

# 직관

그래프에서 모든 간선의 한 끝점 이상을 담는 정점 $k$ 개를 찾는다. 이런 정점 집합을 정점 덮개라 한다. 정점 $k$ 개를 모두 시도하면 $\binom nk\approx n^k$ 가지라서 $k=20$, $n=1000$ 이면 끝나지 않는다.

간선 하나 $uv$ 를 아무렇게나 고른다. 덮개는 $u$ 나 $v$ 를 반드시 담으므로 두 경우로 나눈다. $u$ 를 넣으면 $u$ 에 붙은 간선을 지우고 정점 $k-1$ 개로 나머지를 덮는 문제가 되고, $v$ 도 같다. 경우가 나뉠 때마다 $k$ 가 $1$ 씩 줄어 깊이 $k$ 의 이진 나무가 되므로 잎이 $2^k$ 개이고, 잎마다 $O(n)$ 시간이 든다. $k=20$ 이면 $2^{20}\approx 10^6$ 이라 $n$ 이 커도 풀린다.

크기 $k$ 의 클릭, 곧 서로 모두 이어진 정점 $k$ 개를 찾을 때는 이렇게 나눌 간선이 없다. 클릭에 들어가지 않는 정점이 대부분이라 한 정점을 고르는 갈래가 $n$ 가지이고, 시간이 $n^k$ 꼴로 남는다. 지수에서 $n$ 과 $k$ 가 섞이는지가 두 문제를 가른다.

# 정의

**매개변수 문제(parameterized problem)** 는 쌍 $(x,k)$ 의 집합 $L\subseteq\Sigma^\ast\times\mathbb N$ 이다. $k$ 를 매개변수라 하고 $n=\lvert x\rvert$ 로 쓴다.

- **고정 매개변수 다루기 쉬움(fixed-parameter tractable, FPT).** 계산 가능한 함수 $f$ 와 상수 $c$ 가 있어 $(x,k)\in L$ 을 $f(k)n^c$ 시간에 판정한다.
- **XP**(slice-wise polynomial)**.** 계산 가능한 함수 $f$ 가 있어 $n^{f(k)}$ 시간에 판정한다. 클릭의 $n^k$ 알고리즘이 이 부류에 든다.
- **커널(kernel).** $(x,k)$ 를 다항시간에 같은 답의 $(x',k')$ 로 바꾸되 $\lvert x'\rvert,k'\le g(k)$ 인 변환이다. $g$ 가 다항식이면 다항 커널이라 한다.
- **매개변수 환원(parameterized reduction).** $(x,k)$ 를 $f(k)n^c$ 시간에 같은 답의 $(x',k')$ 로 바꾸되 $k'\le g(k)$ 인 변환이다. FPT 는 이 환원에 대해 닫혀 있다.

**W 계층(W hierarchy)** $\mathrm{FPT}\subseteq\mathrm W\lbrack 1\rbrack\subseteq\mathrm W\lbrack 2\rbrack\subseteq\cdots\subseteq\mathrm{XP}$ 은 불 회로에서 참인 입력이 정확히 $k$ 개인 할당을 찾는 문제로 정의된다. $\mathrm W\lbrack t\rbrack$ 는 입력에서 출력까지의 경로에 팬인이 큰 게이트가 $t$ 개 이하인 회로에 대한 이 문제와 매개변수 환원으로 동치인 문제들이다[^1].

# 성질

## 커널과 FPT 의 동치

정리. 판정 가능한 매개변수 문제가 FPT 인 것은 커널이 있는 것과 동치다.

증명의 요지. 커널이 있으면 커널을 만든 뒤 크기 $g(k)$ 인 입력을 전수 탐색한다. 거꾸로 $f(k)n^c$ 알고리즘이 있으면, $n\ge f(k)$ 일 때는 시간 $n^{c+1}$ 안에 답을 구해 크기가 상수인 같은 답의 입력을 내놓고, $n\lt f(k)$ 이면 입력 자체가 크기 $f(k)$ 이하의 커널이다.

## 정점 덮개

- 유계 탐색 나무. 직관 절의 분기가 $O(2^kn)$ 이다. 차수가 작은 정점의 경우를 더 잘게 나누어 $O(1.2738^k+kn)$ 까지 줄었다(Chen–Kanj–Xia)[^2].
- Buss 커널. 차수가 $k$ 보다 큰 정점을 빼면 그 이웃 $k+1$ 개 이상을 모두 넣어야 하므로, 그런 정점은 덮개에 반드시 들어간다. 이런 정점을 모두 넣고 나면 남은 정점의 차수가 $k$ 이하이므로, 간선이 $k^2$ 개보다 많으면 답이 아니다. 간선 $O(k^2)$ 개의 다항 커널이 나온다[^3].
- 정점 $2k$ 개의 커널. [LP 반올림](lp-rounding.md)(linear programming)의 반정수성에서 값이 $1$ 인 정점은 덮개에 넣고 $0$ 인 정점은 지워도 되며, 남은 값 $1/2$ 인 정점이 $2k$ 개보다 많으면 답이 아니다(Nemhauser–Trotter).

## W[1]-완전성과 하한

크기 $k$ 의 클릭과 크기 $k$ 의 독립집합은 $\mathrm W\lbrack 1\rbrack$-완전이고, 크기 $k$ 의 지배 집합은 $\mathrm W\lbrack 2\rbrack$-완전이다[^1]. $\mathrm{FPT}\ne\mathrm W\lbrack 1\rbrack$ 를 가정하면 클릭은 FPT 가 아니다.

[지수 시간 가설](exponential-time-hypothesis.md)(exponential time hypothesis, ETH)은 변수 $n$ 개의 3-SAT(satisfiability) 를 $2^{o(n)}$ 시간에 푸는 알고리즘이 없다는 가설이다[^4]. ETH 를 가정하면 크기 $k$ 의 클릭을 $f(k)n^{o(k)}$ 시간에 푸는 알고리즘이 없다[^5]. 이 하한으로 $n^k$ 꼴의 전수 탐색이 지수의 차수까지 최적임이 정해진다.

## 색 입히기

**색 입히기(color coding)** 는 정점마다 $k$ 가지 색을 무작위로 칠하고 색이 모두 다른 구조만 [동적 계획법](dynamic-programming.md)으로 찾는 방법이다[^6]. 길이 $k$ 의 단순 경로가 있으면 그 $k$ 개 정점이 모두 다른 색을 받을 확률이 $k!/k^k\ge e^{-k}$ 이다. 색이 다른 경로는 쓴 색의 집합만 기억하면 되므로 $2^kn^{O(1)}$ 시간에 찾고, $e^k$ 번 되풀이하면 경로 문제가 $2^{O(k)}n^{O(1)}$ 시간에 풀린다.

## 구조 매개변수

매개변수가 답의 크기가 아니라 입력의 구조일 수 있다. [나무폭](treewidth.md)이 $w$ 인 그래프에서는 나무 분해를 따라 동적 계획법을 하여 여러 NP-완전 문제가 $2^{O(w)}n$ 시간에 풀린다. [Courcelle 정리](courcelle-theorem.md)는 단항 2차 논리로 쓸 수 있는 그래프 성질 전체가 나무폭에 대해 FPT 임을 준다.

# 활용

- 실제 입력의 분석. 데이터베이스 질의의 크기, 계통 발생의 변이 수, 칩 배선의 층 수처럼 입력은 크지만 매개변수는 작은 문제에서 FPT 알고리즘이 쓰인다.
- [근사 알고리즘](approximation-algorithms.md)과의 연결. 근사 계획(approximation scheme)이 $n^{O(1/\varepsilon)}$ 시간이면 $1/\varepsilon$ 을 매개변수로 볼 수 있고, 효율적 근사 계획(EPTAS, efficient polynomial-time approximation scheme)의 존재는 매개변수 판본의 FPT 와 연결된다.
- [그래프 마이너](graph-minors.md) 이론. "정점 덮개의 크기가 $k$ 이하" 처럼 $k$ 마다 마이너에 대해 닫힌 그래프 성질은 금지 마이너가 유한 개이므로, $k$ 마다 다항시간에 판정된다.

[^1]: R. G. Downey, M. R. Fellows, "Fixed-parameter tractability and completeness I: basic results", SIAM Journal on Computing 24 (1995), 873–921.
[^2]: J. Chen, I. A. Kanj, G. Xia, "Improved upper bounds for vertex cover", Theoretical Computer Science 411 (2010), 3736–3756.
[^3]: J. F. Buss, J. Goldsmith, "Nondeterminism within P", SIAM Journal on Computing 22 (1993), 560–572.
[^4]: R. Impagliazzo, R. Paturi, "On the complexity of k-SAT", Journal of Computer and System Sciences 62 (2001), 367–375.
[^5]: J. Chen, X. Huang, I. A. Kanj, G. Xia, "Strong computational lower bounds via parameterized complexity", Journal of Computer and System Sciences 72 (2006), 1346–1367.
[^6]: N. Alon, R. Yuster, U. Zwick, "Color-coding", Journal of the ACM 42 (1995), 844–856.

# 연관 문서

## 선수지식

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)

## 더 알아보기

- [지수 시간 가설](exponential-time-hypothesis.md)

#complexity #algorithms #graph_theory
