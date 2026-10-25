# 지수 시간 가설

# 개요

**지수 시간 가설(exponential time hypothesis, ETH)** 은 변수 $n$ 개의 3-SAT(satisfiability) 를 $2^{o(n)}$ 시간에 푸는 알고리즘이 없다는 가설이다. **강한 지수 시간 가설(strong exponential time hypothesis, SETH)** 은 절의 길이 $k$ 를 키우면 $k$-SAT 의 최선 시간이 전수 탐색의 $2^n$ 에 한없이 가까워진다는 가설이다. R. Impagliazzo 와 R. Paturi 가 2001 년에 내놓았다[^1].

$\mathrm P\ne\mathrm{NP}$ 는 다항시간 알고리즘이 없다는 것만 말한다. 이 두 가설은 지수의 크기까지 정해, [매개변수 복잡도](parameterized-complexity.md)의 하한과 다항시간 문제의 세분된 하한을 증명하는 가정으로 쓰인다.

# 직관

변수 $n$ 개의 3-SAT 를 전수 탐색으로 풀면 할당 $2^n$ 개를 모두 본다. 무작위 할당에서 시작해 만족되지 않은 절의 변수 하나를 뒤집는 일을 되풀이하면 $(4/3)^n$ 꼴의 시간에 풀린다(Schöning)[^2]. 밑은 $2$ 에서 $4/3$ 으로 내려갔지만 여전히 지수다. ETH 는 밑을 $1$ 로 끝없이 내릴 수는 없다는 가설이다.

절이 길어지면 같은 방법의 밑이 $2$ 로 다가간다. $k$-SAT 의 알려진 알고리즘은 모두 $2^{(1-c/k)n}$ 꼴이어서 $k$ 가 커지면 전수 탐색과 거의 같다. SETH 는 이것이 피할 수 없다는 가설이다.

SETH 는 다항시간 문제에도 하한을 준다. 변수를 절반씩 둘로 나누면 각 쪽의 부분 할당이 $2^{n/2}$ 개다. 왼쪽 부분 할당 하나와 오른쪽 부분 할당 하나를 짝지어 모든 절이 만족되는 짝을 찾으면 된다. 짝을 찾는 문제가 $N=2^{n/2}$ 개 대상에서 $N^{2-\varepsilon}$ 시간에 풀리면 SAT 가 $2^{(1-\varepsilon/2)n}$ 시간에 풀려 SETH 에 어긋난다.

# 정의

$s_k$ 를 $k$-SAT 를 $O(2^{\delta n})$ 시간에 푸는 알고리즘이 존재하는 $\delta$ 의 하한이라 한다. 여기서 $n$ 은 변수의 수다.

- ETH 는 $s_3\gt 0$ 이라는 가설이다.
- SETH 는 $\lim_{k\to\infty}s_k=1$ 이라는 가설이다.

$s_k$ 는 $k$ 에 대해 증가하고 1 이하이므로 극한이 존재한다. $s_3=0$ 이면 희소화 보조정리와 환원으로 모든 $s_k$ 가 $0$ 이 되므로 SETH 는 ETH 를 함의한다[^3].

**직교 벡터 문제(orthogonal vectors problem)** 는 $\lbrace 0,1\rbrace^d$ 의 벡터 $N$ 개 두 묶음 $A,B$ 에서 $\langle a,b\rangle=0$ 인 $a\in A$, $b\in B$ 가 있는지 판정하는 문제다.

# 성질

## 희소화 보조정리

정리(Impagliazzo–Paturi–Zane). 모든 $\varepsilon\gt 0$ 에 대해, 변수 $n$ 개의 $k$-SAT 식을 $2^{\varepsilon n}$ 개 이하의 $k$-SAT 식의 논리합으로 $2^{\varepsilon n}n^{O(1)}$ 시간에 바꿀 수 있고, 각 식의 절 수는 $c(k,\varepsilon)n$ 이하다[^3].

이 정리로 ETH 는 절 수 $m$ 에 대해서도 $2^{o(m)}$ 시간 알고리즘이 없다는 진술과 동치가 된다. 크기를 일차로 늘리는 환원을 거치면 정점 $n$ 개 그래프의 3-색칠, 정점 덮개, [Hamilton 순환](hamiltonian-cycles.md)도 $2^{o(n)}$ 시간에 풀리지 않는다.

## 매개변수 하한

ETH 를 가정하면 크기 $k$ 의 클릭을 $f(k)n^{o(k)}$ 시간에 찾을 수 없다. 평면 그래프의 정점 덮개와 지배 집합은 $2^{O(\sqrt k)}n^{O(1)}$ 알고리즘이 있고, ETH 아래에서 지수의 $\sqrt k$ 를 더 줄일 수 없다.

## 직교 벡터와 SETH

정리(Williams). 어떤 $\varepsilon\gt 0$ 과 $d=c\log N$ 인 모든 $c$ 에 대해 직교 벡터 문제가 $N^{2-\varepsilon}$ 시간에 풀리면 SETH 는 거짓이다[^4].

증명의 요지. 희소화 보조정리로 절 수를 $O(n)$ 으로 줄인다. 변수를 절반씩 나누고, 부분 할당마다 길이 $m$ 의 벡터를 만들어 $i$ 번째 성분을 "이 부분 할당이 절 $i$ 를 만족하지 않으면 $1$" 로 둔다. 두 부분 할당이 모든 절을 만족하는 것은 두 벡터의 같은 자리가 함께 $1$ 이 아닌 것, 곧 내적이 $0$ 인 것과 같다. 벡터가 $N=2^{n/2}$ 개이고 차원이 $O(n)=O(\log N)$ 이므로 시간이 $2^{(1-\varepsilon/2)n}$ 이 된다.

## 세분 복잡도

직교 벡터 문제에서 출발하는 환원으로 여러 다항시간 문제의 지수가 SETH 아래에서 정해진다. 이 분야를 **세분 복잡도(fine-grained complexity)** 라 한다.

| 문제 | 알려진 알고리즘 | SETH 아래 하한 |
| --- | --- | --- |
| [편집 거리](edit-distance.md) | $O(n^2)$ | $n^{2-\varepsilon}$ 불가(Backurs–Indyk)[^5] |
| 최장 공통 부분 수열 | $O(n^2)$ | $n^{2-\varepsilon}$ 불가 |
| 이산 Fréchet 거리 | $O(n^2)$ | $n^{2-\varepsilon}$ 불가 |
| 희소 그래프의 지름 3/2 근사 | $O(m^{3/2})$ | $m^{2-\varepsilon}$ 시간의 $(3/2-\delta)$ 근사 불가 |

## k-SAT 의 상한

Paturi, Pudlák, Saks, Zane 의 알고리즘은 변수를 무작위 순서로 정하되 짧은 귀결로 값이 정해지는 변수는 따르는 방법으로 $s_k\le 1-c/k$ 를 준다[^6]. 알려진 상한이 모두 이 꼴이라 SETH 와 어긋나지 않는다.

# 활용

- 조건부 최적성. [동적 계획법](dynamic-programming.md)으로 $O(n^2)$ 에 푸는 문자열 문제들이 더 빨라지지 않는다는 근거가 SETH 다. 알고리즘 설계에서는 이 하한이 근사나 특수 입력으로 방향을 바꾸는 근거가 된다.
- [매개변수 복잡도](parameterized-complexity.md)의 하한. 나무폭 $w$ 에 대한 $2^{O(w)}$ 동적 계획법의 밑이 SETH 아래에서 최적임을 보이는 결과들이 있다.
- 회로 하한. R. Williams 는 SAT 알고리즘이 전수 탐색보다 조금만 빨라도 회로 하한이 나온다는 연결을 써서 $\mathrm{NEXP}\not\subseteq\mathrm{ACC}^0$ 을 증명했다.

[^1]: R. Impagliazzo, R. Paturi, "On the complexity of k-SAT", Journal of Computer and System Sciences 62 (2001), 367–375.
[^2]: U. Schöning, "A probabilistic algorithm for k-SAT and constraint satisfaction problems", Proceedings of the 40th IEEE Symposium on Foundations of Computer Science (1999), 410–414.
[^3]: R. Impagliazzo, R. Paturi, F. Zane, "Which problems have strongly exponential complexity?", Journal of Computer and System Sciences 63 (2001), 512–530.
[^4]: R. Williams, "A new algorithm for optimal 2-constraint satisfaction and its implications", Theoretical Computer Science 348 (2005), 357–365.
[^5]: A. Backurs, P. Indyk, "Edit distance cannot be computed in strongly subquadratic time (unless SETH is false)", Proceedings of the 47th ACM Symposium on Theory of Computing (2015), 51–58.
[^6]: R. Paturi, P. Pudlák, M. E. Saks, F. Zane, "An improved exponential-time algorithm for k-SAT", Journal of the ACM 52 (2005), 337–364.

# 연관 문서

## 선수지식

- [매개변수 복잡도](parameterized-complexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #algorithms
