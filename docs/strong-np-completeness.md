# 강한 NP-완전성

# 개요

**강한 NP-완전성(strong NP-completeness)** 은 입력에 든 수들이 작아도, 곧 수의 크기가 입력 길이의 다항식 이하로 묶여도 [NP(nondeterministic polynomial time)-완전](np-completeness.md)으로 남는 성질이다. [부분합 문제](subset-sum.md)는 수가 $1000$ 이하인 정수 $100$ 개라면 합이 $10^5$ 이하라 표로 금방 풀리지만, [외판원 문제](traveling-salesman-problem.md)는 거리가 $1$ 과 $2$ 뿐이어도 어렵다. 이 구분은 수가 작을 때 풀리는 표 계산과 오차를 원하는 만큼 줄이는 근사 기법이 어느 문제에 있을 수 있는지를 정한다.

# 직관

부분합 문제는 정수 $n$ 개와 목표값 $K$ 가 주어질 때 합이 $K$ 인 부분집합이 있는지 묻는다. 합의 표를 채우면 $nK$ 번 정도의 계산이 든다. 수를 십진법으로 적으면 $K$ 의 자릿수만큼만 입력이 길어지므로, $K$ 가 $n$ 자리 수이면 표의 크기 $nK$ 는 입력 길이에 대해 지수적이다. 수가 작을 때만 이 표가 빠르다.

외판원 문제에서는 같은 일이 생기지 않는다. 그래프의 [Hamilton 순환](hamiltonian-cycles.md) 판정 문제에서 변이 있는 쌍의 거리를 $1$, 없는 쌍의 거리를 $2$ 로 두면, 길이가 정점 수와 같은 순회가 있는 것과 Hamilton 순환이 있는 것이 동치다. 거리가 $1$ 과 $2$ 뿐인데도 Hamilton 순환 판정만큼 어렵다.

# 정의

## 수의 크기와 의사다항 시간

입력 $I$ 의 길이를 $\lvert I\rvert$, $I$ 에 든 정수의 절댓값 가운데 가장 큰 것을 $\mathrm{max}(I)$ 로 쓴다. 실행 시간이 $\lvert I\rvert$ 와 $\mathrm{max}(I)$ 의 다항식으로 묶이는 알고리즘을 **의사다항 시간(pseudo-polynomial time)** 알고리즘이라 한다. 부분합 문제의 $O(nK)$ 표가 그 예다.

## 강한 NP-완전

판정 문제 $\Pi$ 와 다항식 $q$ 에 대해, $\mathrm{max}(I)\le q(\lvert I\rvert)$ 인 입력만 남긴 문제를 $\Pi\_q$ 라 하자. 어떤 $q$ 에 대해 $\Pi\_q$ 가 NP-완전이면 $\Pi$ 를 **강한 NP-완전** 이라 한다. 같은 조건에서 NP-어려우면 **강한 NP-어려움(strongly NP-hard)** 이라 한다. 수를 일진법으로 적어도 NP-완전인 것과 같은 뜻이다.

NP-완전이지만 의사다항 시간 알고리즘이 있는 문제를 **약한 NP-완전(weakly NP-complete)** 이라 한다. 부분합 문제, [배낭 문제](knapsack-problem.md), [분할 문제](partition-problem.md)가 약한 NP-완전이고, 직관 절의 외판원 문제는 $q(n)=2$ 로 강한 NP-완전이다.

# 성질

## 의사다항 시간 알고리즘의 부재

$\mathrm P\ne\mathrm{NP}$ 이면 강한 NP-완전 문제에는 의사다항 시간 알고리즘이 없다. 그런 알고리즘이 있으면 $\Pi\_q$ 의 입력에서는 $\mathrm{max}(I)\le q(\lvert I\rvert)$ 이므로 실행 시간이 $\lvert I\rvert$ 의 다항식이 되어 NP-완전인 $\Pi\_q$ 를 다항 시간에 푼다.

## 수가 없는 문제

입력에 수가 없거나 수가 입력 길이 이하인 NP-완전 문제는 그대로 강한 NP-완전이다. 충족 가능성 문제, Hamilton 순환, [클릭 문제](clique-problem.md)가 그렇다. 강한 NP-완전성이 따로 의미를 갖는 것은 수를 입력으로 받는 문제다.

## 완전 다항 시간 근사 기법의 부재

M. R. Garey 와 D. S. Johnson 의 정리는 다음이다[^1]. 정수 값을 갖는 최적화 문제가 강한 NP-어렵고, 최적값이 $\lvert I\rvert$ 와 $\mathrm{max}(I)$ 의 다항식 $p$ 이하이면, $\mathrm P\ne\mathrm{NP}$ 일 때 이 문제에는 완전 다항 시간 근사 기법(fully polynomial-time approximation scheme)이 없다.

증명의 요지. 근사 기법을 $\varepsilon=1/(p+1)$ 로 돌리면 오차가 $1$ 보다 작아 정수 최적값이 정확히 나오고, 실행 시간은 $\lvert I\rvert$ 와 $1/\varepsilon$ 의 다항식이므로 의사다항 시간이다. 앞 절에 따라 이것은 $\mathrm P=\mathrm{NP}$ 를 함의한다.

## 대표적인 강한 NP-완전 문제

- [3-분할 문제](three-partition-problem.md). 수를 받는 문제의 강한 NP-어려움을 보일 때 가장 많이 쓰는 출발 문제다.
- [상자 채우기 문제](bin-packing.md)와 기계 수가 입력인 [동일 병렬 기계 일정 문제](identical-machine-scheduling.md). 3-분할에서 수를 그대로 옮겨 환원한다.
- 기계가 셋인 [흐름 작업장 일정 문제](flow-shop-scheduling.md).

# 활용

- 근사 기법의 존재 판정. 배낭 문제처럼 약한 NP-완전인 문제에는 가치를 반올림하는 완전 다항 시간 근사 기법이 있고, 상자 채우기처럼 강한 NP-어려운 문제에는 그런 기법이 없다.
- 일정 이론의 분류. 기계 수가 고정된 일정 문제는 약한 NP-어렵고 의사다항 시간 표로 풀리며, 기계 수가 입력이면 강한 NP-어렵다는 구분이 일정 문제의 복잡도 표를 이룬다.

[^1]: M. R. Garey, D. S. Johnson, "Strong NP-completeness results: motivation, examples, and implications", Journal of the ACM 25 (1978), 499–508.

# 연관 문서

## 선수지식

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)

## 더 알아보기

- [3-분할 문제](three-partition-problem.md)

#complexity #computation #algorithms
