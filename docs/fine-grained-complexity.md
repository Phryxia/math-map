# 세분 복잡도

# 개요

**세분 복잡도(fine-grained complexity)** 는 다항시간에 풀리는 문제들 사이에서 실행 시간의 지수를 비교하는 복잡도 이론이다. 정수 $n$ 개 가운데 합이 $0$ 인 셋을 찾는 [3SUM 문제](3sum.md)와 평면의 점 $n$ 개 가운데 한 직선 위의 세 점을 찾는 문제는 둘 다 $O(n^2)$ 알고리즘이 있다. 세분 복잡도는 한 문제를 다른 문제로 지수를 보존하며 바꾸는 환원을 만들어, 한쪽의 지수가 줄면 다른 쪽의 지수도 준다는 관계를 증명한다.

# 직관

세분 복잡도는 다항시간에 풀리는 문제의 시간 지수를, 몇 가지 기본 가설과 지수를 보존하는 환원으로 정하는 복잡도 이론이다. 쓰이는 가설은 셋이다. 강한 [지수 시간 가설](exponential-time-hypothesis.md)(strong exponential time hypothesis, SETH)에서 나오는 직교 벡터 가설, 3SUM 가설, 모든 쌍 [최단경로](shortest-paths.md) 가설이다. 각 가설은 $n^2$ 이나 $n^3$ 의 알고리즘이 지수에서 더 줄지 않는다고 말하고, 환원으로 같은 하한이 여러 문제에 옮겨진다.

정수 $n$ 개 가운데 합이 $0$ 인 셋이 있는지 묻는 문제를 3SUM 이라 한다. 수를 정렬한 뒤 첫째 수를 고정하고 나머지 둘을 양 끝에서 좁혀 오면 $O(n^2)$ 시간에 풀린다. 이보다 지수가 작은 알고리즘은 알려지지 않았다.

평면의 점 $n$ 개 가운데 한 직선 위의 세 점이 있는지 묻는 문제도 같은 $O(n^2)$ 에 머문다. 두 문제는 이어져 있다. 정수 $a$ 를 점 $(a,a^3)$ 으로 옮기면, 서로 다른 $a,b,c$ 에서 세 점의 기울기가 같다는 식은

$$
\frac{b^3-a^3}{b-a}=\frac{c^3-a^3}{c-a}\iff (b-c)(a+b+c)=0
$$

이 되어 $a+b+c=0$ 과 동치다. 그래서 세 점 판정이 $n^{2-\varepsilon}$ 시간에 풀리면 3SUM 도 그렇다. 이런 환원을 쌓아 "3SUM 이 $n^{2-\varepsilon}$ 에 풀리지 않으면 세 점 판정도 풀리지 않는다" 꼴의 하한을 모은 것이 이 이론이다.

# 정의

문제 $A$ 와 $B$ 의 알려진 시간이 각각 $a(n)$, $b(n)$ 일 때, 모든 $\varepsilon\gt 0$ 에 대해 $\delta\gt 0$ 이 있어 $B$ 의 $b(n)^{1-\varepsilon}$ 시간 알고리즘에서 $A$ 의 $a(n)^{1-\delta}$ 시간 알고리즘이 나오면 $(A,a)$ 에서 $(B,b)$ 로의 **세분 환원(fine-grained reduction)** 이 있다고 한다. 정수 하나가 $O(\log n)$ 비트인 word RAM(random access machine) 모형을 쓴다.

- **3SUM 가설(3SUM hypothesis).** 크기가 $n^{O(1)}$ 이하인 정수 $n$ 개의 3SUM 을 $n^{2-\varepsilon}$ 시간에 푸는 알고리즘이 없다.
- **모든 쌍 최단경로 가설(APSP hypothesis, all-pairs shortest paths).** 간선 가중치가 $n^{O(1)}$ 이하인 정수인 정점 $n$ 개 그래프의 모든 쌍 최단경로를 $n^{3-\varepsilon}$ 시간에 구하는 알고리즘이 없다.
- **직교 벡터 가설(orthogonal vectors hypothesis).** $\lbrace 0,1\rbrace^{c\log n}$ 의 벡터 $n$ 개 두 묶음에서 내적이 $0$ 인 쌍을 찾는 문제를 모든 $c$ 에 대해 $n^{2-\varepsilon}$ 시간에 풀 수 없다. SETH 가 이 가설을 함의한다.

로그 인자를 줄이는 개선은 가설과 어긋나지 않는다. 3SUM 은 $n^2/(\log n/\log\log n)^{2/3}$ 시간에(Grønlund–Pettie)[^1], 모든 쌍 최단경로는 $n^3/2^{\Omega(\sqrt{\log n})}$ 시간에 풀린다(Williams)[^2].

# 성질

## 3SUM 어려운 문제

정리(Gajentaan–Overmars). 평면의 세 점 공선 판정, 선분 장애물 사이에서 선분 하나를 옮기는 운동 계획, 삼각형들의 합집합이 주어진 삼각형을 덮는지의 판정은 3SUM 에서 세분 환원을 받는다[^3].

M. Pătraşcu 는 3SUM 에서 그래프의 삼각형 나열로 가는 환원을 만들고, 이를 거쳐 동적 그래프 문제의 갱신 시간과 질의 시간에 다항식 하한을 주었다[^4].

## 모든 쌍 최단경로의 3제곱 아래 동치

정리(Vassilevska Williams–Williams). 다음 문제들은 서로 세분 환원으로 이어져, 하나가 $n^{3-\varepsilon}$ 시간에 풀리면 모두 $n^{3-\delta}$ 시간에 풀린다[^5].

- 모든 쌍 최단경로.
- 최소-합 [행렬](matrices.md)곱 $(A\star B)\_{ij}=\min_k(A_{ik}+B_{kj})$.
- 가중치 합이 음수인 삼각형의 존재 판정.
- 두 정점 사이의 두 번째 최단 단순 경로, 거리 행렬이 삼각부등식을 만족하는지의 판정.

증명의 요지. 최단경로는 최소-합 행렬곱을 $O(\log n)$ 번 되풀이한 것이다. 최소-합 행렬곱은 행렬을 작은 덩어리로 나누고 각 덩어리 안에서 음수 삼각형 판정을 되풀이해 성분을 하나씩 찾는 방식으로 음수 삼각형 판정으로 환원된다.

## 직교 벡터 어려운 문제

[편집 거리](edit-distance.md), 최장 공통 부분 수열, 이산 Fréchet 거리는 $O(n^2)$ 에 풀리고, 직교 벡터 가설 아래에서 $n^{2-\varepsilon}$ 시간에 풀리지 않는다. 증명은 벡터 하나를 문자열 조각 하나로 바꾸어, 내적이 $0$ 인 쌍이 있을 때만 편집 거리가 한 단계 작아지게 만든다.

## 행렬곱과의 대비

가중치가 없는 그래프의 삼각형 판정은 인접 행렬의 곱으로 $O(n^\omega)$ 시간에 풀린다. 여기서 $\omega\lt 2.372$ 는 [Strassen 알고리즘](strassen-algorithm.md)에서 시작한 행렬곱 지수다. 최소-합 곱에는 뺄셈이 없어 이런 대수적 방법이 통하지 않고, 그래서 가중치가 붙은 판본이 모든 쌍 최단경로 가설의 영역에 남는다.

# 활용

- 알고리즘 설계의 한계 판정. [동적 계획법](dynamic-programming.md)으로 $O(n^2)$ 에 푸는 문자열 문제와 기하 문제들이 지수에서 개선되지 않는다는 근거가 이 하한들이다.
- 동적 자료구조. 간선이 더해지고 지워지는 그래프에서 도달 가능성과 최단경로를 유지하는 비용의 하한이 3SUM 과 행렬곱 가설에서 나온다.
- 근사와의 교환. 하한이 막는 정확한 계산 대신 $1+\varepsilon$ 근사를 거의 선형 시간에 하는 알고리즘이 편집 거리와 지름에서 연구된다.

[^1]: A. Grønlund, S. Pettie, "Threesomes, degenerates, and love triangles", Journal of the ACM 65 (2018), Article 22.
[^2]: R. Williams, "Faster all-pairs shortest paths via circuit complexity", SIAM Journal on Computing 47 (2018), 1965–1985.
[^3]: A. Gajentaan, M. H. Overmars, "On a class of O(n²) problems in computational geometry", Computational Geometry 5 (1995), 165–185.
[^4]: M. Pătraşcu, "Towards polynomial lower bounds for dynamic problems", Proceedings of the 42nd ACM Symposium on Theory of Computing (2010), 603–610.
[^5]: V. Vassilevska Williams, R. Williams, "Subcubic equivalences between path, matrix, and triangle problems", Journal of the ACM 65 (2018), Article 27.

# 연관 문서

## 선수지식

- [지수 시간 가설](exponential-time-hypothesis.md)
- [최단경로](shortest-paths.md)

## 더 알아보기

- [3SUM 문제](3sum.md)
- [OMv 가설](omv-hypothesis.md)

#complexity #algorithms
