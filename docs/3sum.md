# 3SUM 문제

# 개요

**3SUM 문제(3SUM problem)** 는 정수 $n$ 개의 집합 $S$ 에서 $a+b+c=0$ 인 $a,b,c\in S$ 가 있는지 판정하는 문제다. 정렬과 두 포인터로 $O(n^2)$ 시간에 풀리고, 지수가 $2$ 보다 작은 알고리즘은 알려져 있지 않다. 3SUM 이 $n^{2-\varepsilon}$ 시간에 풀리지 않는다는 3SUM 가설은 [세분 복잡도](fine-grained-complexity.md)의 세 기본 가설 가운데 하나이고, 계산 기하 문제들의 $n^2$ 하한이 이 가설에서 환원으로 나온다.

# 직관

수 $-5,-1,2,3,4,6$ 에서 합이 $0$ 인 셋을 찾는다. 셋을 모두 고르면 $\binom 63=20$ 가지이고, 일반적으로 $n^3$ 꼴이다.

정렬된 목록에서 첫 수를 $-5$ 로 고정하면 나머지 둘의 합이 $5$ 여야 한다. 왼쪽 끝 $-1$ 과 오른쪽 끝 $6$ 의 합은 $5$ 라 바로 찾는다. 합이 $5$ 보다 작았다면 왼쪽을 한 칸 오른쪽으로, 크면 오른쪽을 한 칸 왼쪽으로 옮긴다. 옮길 때마다 후보가 하나씩 줄어 첫 수 하나에 $O(n)$ 걸리므로 전체가 $O(n^2)$ 이다. 이 $n^2$ 에서 지수를 줄이는 방법이 알려져 있지 않다.

# 정의

정수 $n$ 개의 집합 $S$ 가 주어질 때 $a+b+c=0$ 인 $a,b,c\in S$ 의 존재를 판정하는 문제가 3SUM 이다. 세 수가 서로 달라야 한다는 조건이나, 세 집합 $A,B,C$ 에서 하나씩 고르는 판본은 선형 시간 변환으로 서로 옮겨진다.

정수 하나가 $O(\log n)$ 비트인 word RAM(random access machine) 모형에서 **3SUM 가설(3SUM hypothesis)** 은 어떤 $\varepsilon\gt 0$ 에 대해서도 3SUM 을 $n^{2-\varepsilon}$ 시간에 푸는 알고리즘이 없다는 가설이다.

**3SUM 어려운 문제(3SUM-hard problem)** 는 $n^{2-\varepsilon}$ 시간 알고리즘이 있으면 3SUM 도 어떤 $\delta\gt 0$ 에 대해 $n^{2-\delta}$ 시간에 풀리는 문제다.

# 성질

## 작은 정수의 경우

$S\subseteq\lbrack -N,N\rbrack$ 이면 다항식 $p(x)=\sum_{a\in S}x^{a+N}$ 을 세제곱해 $x^{3N}$ 의 계수를 본다. 계수가 $0$ 이 아니면 합이 $0$ 인 셋이 있다. [고속 Fourier 변환](fft.md)으로 다항식 곱을 하면 시간은 $O(n+N\log N)$ 이다. 정수가 $n^{2-\varepsilon}$ 보다 작으면 3SUM 이 가설보다 빨리 풀리므로, 가설은 수가 $n^{O(1)}$ 크기까지 클 수 있는 경우를 말한다.

## 로그 인자의 개선

A. Grønlund 와 S. Pettie 는 3SUM 을 $O(n^2/(\log n/\log\log n)^{2/3})$ 시간에 푸는 알고리즘과, 깊이 $O(n^{3/2}\sqrt{\log n})$ 의 4-선형 결정 나무를 만들었다[^1]. D. M. Kane, S. Lovett, S. Moran 은 깊이 $O(n\log^2n)$ 의 선형 결정 나무를 만들었다[^2]. 결정 나무의 깊이는 비교 횟수만 세므로, 이 결과들은 알고리즘의 $n^2$ 하한을 결정 나무 모형으로 증명할 수 없음을 보인다.

반면 J. Erickson 은 각 질의가 세 수의 일차 결합의 부호만 보는 3-선형 결정 나무에서는 깊이가 $\Omega(n^2)$ 임을 증명했다[^3].

## 3SUM 어려운 기하 문제

A. Gajentaan 과 M. H. Overmars 는 다음 문제들이 3SUM 어려움을 증명했다[^4].

- 평면의 점 $n$ 개 가운데 한 직선 위의 세 점 판정. 정수 $a$ 를 점 $(a,a^3)$ 으로 옮기면 세 점이 한 직선 위에 있는 것과 $a+b+c=0$ 이 동치다.
- 직선 $n$ 개 가운데 한 점을 지나는 세 직선 판정. 위 문제의 쌍대다.
- 선분 장애물 사이에서 선분 하나를 옮기는 운동 계획.

## 그래프와 자료구조 문제

M. Pătraşcu 는 3SUM 을 합성곱 판본으로 바꾸고 해시로 수를 작은 범위에 나누어, 간선이 $m$ 개인 그래프의 삼각형 나열로 환원했다[^5]. 이 환원으로 3SUM 가설 아래에서 삼각형 $m$ 개를 나열하는 데 $m^{4/3-o(1)}$ 시간이 들고, 동적 그래프의 도달 가능성 같은 문제의 갱신 시간과 질의 시간에 다항식 하한이 생긴다.

# 활용

- 계산 기하의 하한. 점과 직선의 퇴화 배치 판정, 다각형의 덮기 판정, 가시성 문제의 $n^2$ 알고리즘이 최적이라는 근거가 3SUM 가설이다.
- 동적 자료구조의 하한. 간선을 더하고 지우는 그래프에서 질의에 답하는 비용의 하한이 3SUM 가설에서 나온다.
- [부분합 문제](subset-sum.md)와의 대비. 부분합은 고를 수의 개수가 정해지지 않은 NP-완전(nondeterministic polynomial time) 문제이고, 3SUM 은 개수를 $3$ 으로 고정한 다항시간 판본이다. 개수를 $k$ 로 고정하면 $O(n^{\lceil k/2\rceil})$ 알고리즘이 있다.

[^1]: A. Grønlund, S. Pettie, "Threesomes, degenerates, and love triangles", Journal of the ACM 65 (2018), Article 22.
[^2]: D. M. Kane, S. Lovett, S. Moran, "Near-optimal linear decision trees for k-SUM and related problems", Journal of the ACM 66 (2019), Article 16.
[^3]: J. Erickson, "Lower bounds for linear satisfiability problems", Chicago Journal of Theoretical Computer Science 1999 (1999), Article 8.
[^4]: A. Gajentaan, M. H. Overmars, "On a class of O(n²) problems in computational geometry", Computational Geometry 5 (1995), 165–185.
[^5]: M. Pătraşcu, "Towards polynomial lower bounds for dynamic problems", Proceedings of the 42nd ACM Symposium on Theory of Computing (2010), 603–610.

# 연관 문서

## 선수지식

- [세분 복잡도](fine-grained-complexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #algorithms
