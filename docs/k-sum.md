# k-SUM 문제

# 개요

**k-SUM 문제(k-SUM problem)** 는 정수 $n$ 개의 집합에서 합이 $0$ 인 $k$ 개를 고를 수 있는지 판정하는 문제다. $k=3$ 이면 [3SUM 문제](3sum.md)다. 짝수 $k$ 는 $O(n^{k/2}\log n)$, 홀수 $k$ 는 $O(n^{(k+1)/2})$ 시간에 풀린다. 지수가 $k$ 에 비례하지 않는 알고리즘, 곧 모든 $k$ 에서 $n^{o(k)}$ 시간에 푸는 알고리즘이 있으면 [지수 시간 가설](exponential-time-hypothesis.md)(exponential time hypothesis, ETH)이 거짓이다.

# 직관

수 $-5,-1,2,3,4,6$ 에서 합이 $0$ 인 넷을 찾는다. 넷을 모두 고르면 $\binom 64=15$ 가지이고, 일반적으로 $n^4$ 꼴이다.

두 수의 합을 모두 구해 정렬하면 $\binom 62=15$ 개다. 넷의 합이 $0$ 인 것은 두 쌍의 합이 서로 부호만 다른 것이다. 정렬한 쌍의 합에서 3SUM 의 두 포인터처럼 왼쪽 끝과 오른쪽 끝을 더해 $0$ 보다 작으면 왼쪽을, 크면 오른쪽을 옮긴다. 쌍 $(-5,-1)$ 의 합 $-6$ 과 쌍 $(2,4)$ 의 합 $6$ 이 만나 $-5-1+2+4=0$ 을 찾는다.

쌍의 합이 $n^2$ 개이므로 정렬에 $O(n^2\log n)$, 포인터 이동에 $O(n^2)$ 가 든다. 두 쌍이 같은 수를 쓰는 경우는 따로 걸러야 한다. $k$ 개를 $k/2$ 개씩 둘로 나누면 같은 방법으로 $n^{k/2}$ 개의 합을 다룬다.

# 정의

정수 $n$ 개의 집합 $S$ 와 고정된 정수 $k\ge 2$ 가 주어질 때, 서로 다른 $a_1,\dots,a_k\in S$ 로 $a_1+\dots+a_k=0$ 이 되는지 판정하는 문제가 k-SUM 문제다. 집합 $k$ 개에서 하나씩 고르는 판본과, 목표값이 $0$ 이 아닌 정수 $t$ 인 판본은 선형 시간 변환으로 서로 옮겨진다.

$k$ 가 입력의 일부이면 부분합 문제와 비슷해진다. [부분합 문제](subset-sum.md)는 개수를 정하지 않고 합이 목표값인 부분집합을 찾는다.

# 성질

## 중간에서 만나기

정리. k-SUM 은 $k$ 가 짝수이면 $O(n^{k/2}\log n)$, 홀수이면 $O(n^{(k+1)/2})$ 시간에 풀린다.

증명의 요지. 짝수 $k$ 에서는 $k/2$ 개의 합 $n^{k/2}$ 개를 정렬하고, 직관 절의 두 포인터로 서로 부호만 다른 두 합을 찾는다. 홀수 $k$ 에서는 수 하나를 고정하고 나머지 $k-1$ 개를 $(k-1)/2$ 개씩 둘로 나눈다. 두 쪽의 합을 각각 정렬해 두면 고정한 수마다 두 포인터가 $O(n^{(k-1)/2})$ 시간에 끝나고, 고정할 수가 $n$ 개이므로 $O(n^{(k+1)/2})$ 다.

부분합 문제의 Horowitz–Sahni 알고리즘도 수를 둘로 나누어 양쪽의 부분합을 정렬하는 같은 방법이다.

## 지수 시간 가설과의 관계

정리(Pătraşcu–Williams). 모든 $k$ 에 대해 k-SUM 을 $n^{o(k)}$ 시간에 푸는 알고리즘이 있으면 3-SAT(3-satisfiability)이 $2^{o(N)}$ 시간에 풀려 지수 시간 가설이 거짓이다. 여기서 $N$ 은 변수의 수다[^1].

증명의 요지. 희소화 보조정리(sparsification lemma)로 절의 수를 변수의 수에 비례하게 줄인 뒤 변수를 $k$ 묶음으로 나누고, 각 묶음의 부분 할당 $2^{N/k}$ 개를 정수로 바꾼다. 정수의 자리마다 절 하나를 두어 그 할당이 그 절을 만족하는지를 적고, 합이 목표값과 같은 것이 모든 절이 만족되는 것과 같게 한다. $n=2^{N/k}$ 이므로 $n^{o(k)}=2^{o(N)}$ 이다. 크기 $k$ 의 [클릭 문제](clique-problem.md)가 지수 시간 가설 아래 $n^{o(k)}$ 시간에 풀리지 않는 것과 같은 꼴의 하한이다.

## 선형 결정 나무

**선형 결정 나무(linear decision tree)** 는 입력 수의 일차식의 부호를 묻는 질문만으로 답을 정하는 계산 모형이다. 질문 하나가 입력 수 $k$ 개 이하만 쓰는 나무를 $k$-선형 결정 나무라 한다.

정리(Erickson). $k$-선형 결정 나무로 k-SUM 을 풀려면 깊이가 $\Omega(n^{\lceil k/2\rceil})$ 이어야 한다[^2].

정리(Kane–Lovett–Moran). 질문 하나가 입력 수 $2k$ 개 이하를 쓰고 계수가 $\lbrace -1,0,1\rbrace$ 인 선형 결정 나무로 k-SUM 을 깊이 $O(kn\log^2n)$ 에 푼다[^3].

두 정리를 함께 보면, 질문에 쓰는 수의 개수를 $k$ 에서 $2k$ 로 늘리면 깊이가 $n^{\lceil k/2\rceil}$ 에서 $n$ 의 거의 일차로 떨어진다.

# 활용

- 세분 복잡도의 하한. 3SUM 가설의 일반형으로 "k-SUM 은 $n^{\lceil k/2\rceil-\varepsilon}$ 시간에 풀리지 않는다" 는 가설을 두고, 계산 기하와 문자열 문제의 하한을 이 가설에서 환원으로 얻는다.

[^1]: M. Pătraşcu, R. Williams, "On the possibility of faster SAT algorithms", Proceedings of the 21st ACM–SIAM Symposium on Discrete Algorithms (2010), 1065–1075.
[^2]: J. Erickson, "Bounds for linear satisfiability problems", Chicago Journal of Theoretical Computer Science (1999), Article 8.
[^3]: D. M. Kane, S. Lovett, S. Moran, "Near-optimal linear decision trees for k-SUM and related problems", Journal of the ACM 66 (2019), Article 16.

# 연관 문서

## 선수지식

- [3SUM 문제](3sum.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #algorithms
