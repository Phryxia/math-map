# P 대 NP 문제

# 개요

**P 대 NP 문제(P versus NP problem)** 는 답을 빨리 확인할 수 있는 문제가 모두 답을 빨리 찾을 수도 있는 문제인지 묻는 문제다. 스도쿠의 완성된 판은 가로줄, 세로줄, 칸마다 숫자가 겹치지 않는지 보면 바로 확인되지만, 빈칸이 많은 큰 판에서 답을 찾는 빠른 방법은 알려져 있지 않다. 이 문제는 입력 크기의 다항식만큼의 시간을 "빠르다" 로 정하고, 확인이 빠른 문제의 부류 NP(nondeterministic polynomial time)와 풀이가 빠른 문제의 부류 P 가 같은지로 이 물음을 적는다.

# 직관

논리식 $(x_1\vee x_2)\wedge(\neg x_1\vee x_3)\wedge(\neg x_2\vee\neg x_3)$ 을 참으로 만드는 변수 값을 찾는다. 누군가 $x_1=1$, $x_2=0$, $x_3=1$ 을 내밀면 세 괄호에 값을 넣어 모두 참인지 보면 되고, 괄호 수만큼의 일로 확인이 끝난다. 아무도 값을 주지 않으면 $2^3=8$ 가지를 차례로 넣어 본다. 변수가 $n$ 개이면 확인은 식의 길이만큼 걸리지만, 차례로 넣어 보기는 $2^n$ 가지를 본다.

$n=100$ 이면 $2^{100}$ 가지는 어떤 컴퓨터로도 다 볼 수 없다. 확인하는 일은 식의 길이의 일차, 찾는 일은 지수다. 찾는 일에 언제나 $2^n$ 가지를 피하는 방법이 있는지, 곧 찾기가 확인처럼 입력 길이의 다항식 시간에 끝날 수 있는지가 이 문제다.

"빠르다" 를 입력 길이의 다항식 시간으로 정한다. 다항식은 합과 합성에 닫혀 있으므로, 다항시간 알고리즘을 부품으로 쓰는 알고리즘도 다항시간이다. 계산 모형을 바꾸면 다항식의 차수가 달라질 뿐 다항시간이라는 성질은 남는다.

# 정의

## P 와 NP

입력은 유한 이진 문자열이고 길이를 $n$ 이라 한다. $\mathrm P$ 는 결정적 Turing 기계(Turing machine)가 $n$ 의 다항식으로 제한된 시간 안에 판정하는 결정 문제의 모임이다. "이진수로 주어진 수가 짝수인가" 는 마지막 비트만 보면 되므로 $\mathrm P$ 에 속한다.

$\mathrm{NP}$ 는 예인 입력에 대해 다항식 길이의 증명서가 존재하고 그것을 결정적 다항시간에 검증할 수 있는 문제의 모임이다. $L$ 을 문제에 해당하는 문자열 집합, $V$ 를 검증기, $p$ 를 다항식이라 하면

$$
x\in L\iff\exists y:\thinspace \lvert y\rvert\le p(\lvert x\rvert)\thinspace\text{이고}\thinspace V(x,y)=1
$$

이다. 아니오인 입력에는 검증기를 통과하는 증명서가 없어야 한다. 검증기의 실행 시간은 $\lvert x\rvert+\lvert y\rvert$ 의 다항식으로 제한한다. 직관의 논리식에서 $y$ 는 변수 값 $101$ 이고, $V$ 는 값을 넣어 괄호가 모두 참인지 보는 절차다. NP 는 nondeterministic polynomial time 의 약자이며 다항시간이 아니라는 뜻이 아니다.

## 환원과 NP-완전

문제 $A$ 의 입력을 다항시간에 문제 $B$ 의 입력으로 변환해 정답을 보존할 수 있으면 $A \le_p B$ 라 쓴다. 모든 NP 문제가 $B$ 로 환원되면 $B$ 는 NP-난해이고, $B$ 자신이 NP 에도 속하면 NP-완전이다.

## 주변 부류

| 부류 | 뜻 |
|---|---|
| coNP | 여집합이 NP. 아니오 쪽에 짧은 증거가 있음. 충족 불가능한 논리식의 모임이 예 |
| PSPACE(polynomial space) | 다항 크기 메모리로 판정 가능. [공간 복잡도](space-complexity.md)의 부류 |
| EXPTIME(exponential time) | 지수시간에 판정 가능 |
| BPP(bounded-error probabilistic polynomial time) | 무작위 다항시간, 오답 확률 유계. [무작위 복잡도 부류](randomized-complexity-classes.md)의 하나 |

알려진 포함 관계는 $\mathrm P\subseteq\mathrm{NP}\subseteq\mathrm{PSPACE}\subseteq\mathrm{EXPTIME}$ 이고, $\mathrm P\subsetneq\mathrm{EXPTIME}$ 은 [시간 계층 정리](time-hierarchy-theorem.md)로 증명되어 있다. 두 사실을 합치면 사슬의 세 포함 중 적어도 하나는 진포함이다. 어느 것인지는 판정되지 않았다[^1].

# 성질

## P 와 NP 의 포함 관계

$\mathrm P$ 의 문제는 증명서를 무시하고 직접 판정하면 되므로

$$
\mathrm{P}\subseteq\mathrm{NP}
$$

이다. 이 포함이 등호인지 진포함인지가 문제이고, 어느 쪽도 증명되어 있지 않다[^2]. Clay Mathematics Institute 가 내건 일곱 문제 가운데 하나다[^1]. 연구자 대상 설문에서는 $\mathrm P\ne\mathrm{NP}$ 를 예상하는 응답이 다수였다[^3].

NP 문제는 모두 어떤 대상의 존재를 묻는 꼴로 쓸 수 있다. 충족하는 변수 값, 모든 도시를 도는 짧은 경로, 정리의 짧은 증명이 그런 대상이다. $\mathrm P=\mathrm{NP}$ 이면 이런 대상을 찾는 일이 검증만큼 싸져, 길이가 정해진 정리의 증명이 다항시간에 찾아지고 대부분의 공개키 암호가 깨진다.

## NP-완전 문제의 역할

NP-완전 문제 하나에 다항시간 알고리즘이 있으면 $\mathrm P=\mathrm{NP}$ 다. 임의의 NP 문제의 입력을 그 문제로 변환한 뒤 풀면 된다. 거꾸로 NP-완전 문제 하나가 다항시간에 풀리지 않음을 보이면 $\mathrm P\ne\mathrm{NP}$ 다. 수천 개의 문제가 NP-완전으로 알려져 있고 서로 다항시간에 환원되므로, 하나가 다항시간에 풀리면 전부 풀린다.

불 충족가능성 문제(Boolean satisfiability problem, SAT)는 주어진 논리식을 참으로 만드는 변수 배정이 있는지 묻는다. 배정을 받으면 식을 평가해 빠르게 검증한다. 이 문제가 NP-완전이라는 것이 [Cook–Levin 정리](np-completeness.md)이고, 이후의 NP-완전성 증명은 대개 이 문제에서 오는 환원으로 한다.

찾기 쪽은 $2^n$ 번 반복하고 검증 쪽은 한 번 훑는다. $\mathrm P=\mathrm{NP}$ 는 두 비용의 차수가 같다는 주장이다.

## 증명의 장벽

증명을 막는 장벽 셋이 알려져 있다.

- 상대화(relativization). 신탁 $A$ 에 대해 $\mathrm P^A=\mathrm{NP}^A$ 이고 다른 신탁 $B$ 에 대해 $\mathrm P^B\ne\mathrm{NP}^B$ 인 예가 있다. 신탁을 붙여도 그대로 통하는 논증, 곧 대각선 논법류로는 해결할 수 없다.
- [자연 증명](natural-proofs.md). 회로 하한을 보이는 흔한 논증 방식은 충분히 강한 [유사난수 생성기](pseudorandom-generators.md)의 존재 가정과 충돌한다.
- [대수화](algebrization.md). 산술화 기법으로 상대화를 우회한 결과들도 같은 종류의 장벽에 걸린다.

세 장벽은 각각 한 종류의 논증만으로는 $\mathrm P$ 와 $\mathrm{NP}$ 를 분리할 수 없음을 보인다.

## 결정 가능성과의 구별

[계산 가능성](computability.md)은 알고리즘의 존재를 묻고, P 대 NP 문제는 존재하는 알고리즘의 비용을 묻는다. NP 문제는 모두 결정 가능하다. 증명서 후보가 유한하므로 전부 시도하면 유한 시간에 답이 나온다. [정지 문제](halting-problem.md)처럼 알고리즘이 없는 것이 아니라 알려진 알고리즘이 느린 것이다. 알고리즘의 부재는 증명된 사실이고, NP 문제의 어려움은 가설이다.

# 활용

- 근사. 정확성을 포기하면 [근사 알고리즘](approximation-algorithms.md)이 최적값의 일정 비율 안에 드는 답을 다항시간에 보장한다.
- 특수 입력 구조. 일반성을 포기하면 [평면 그래프](planar-graphs.md), 나무폭이 작은 그래프, 구간 그래프에서 다항시간 해법이 나온다.
- 휴리스틱(heuristic). 최악의 경우를 포기하면 SAT 풀이기와 정수계획 솔버가 수십만 변수의 산업 문제를 푼다.
- 암호의 전제. 공개키 암호는 계산의 비대칭에 기댄다. $\mathrm P=\mathrm{NP}$ 이면 비대칭이 무너진다. 다만 암호에는 최악의 경우가 아니라 평균적인 경우의 어려움이 필요하므로 $\mathrm P\ne\mathrm{NP}$ 만으로는 부족하다.

다항시간과 NP-완전의 경계에 있는 쌍이 있다. 2-SAT 은 다항시간이고 3-SAT 은 NP-완전이며, 이분 매칭은 다항시간이고 3차원 매칭은 NP-완전이다. 특정 탐색 방법이 지수시간이어도 하한은 나오지 않는다. 하한은 가능한 모든 알고리즘에 대한 논증을 요구한다.

[^1]: Stephen Cook, *The P versus NP Problem*, Clay Mathematics Institute 공식 문제 설명. 계산 모델, NP 의 정의와 NP-완전성, 그리고 알려진 포함 관계 가운데 어느 것이 진포함인지 판정되지 않았다는 서술. https://www.claymath.org/wp-content/uploads/2022/06/pvsnp.pdf
[^2]: Clay Mathematics Institute, Millennium Problems 의 P vs NP 항목. 2026-09-12 에 미해결로 분류되어 있음을 확인했다. https://www.claymath.org/millennium/p-vs-np/
[^3]: William Gasarch, "The P=?NP poll", SIGACT News 33 (2002), 34–47 과 2012, 2019 의 후속 설문.

# 연관 문서

## 선수지식

- [계산 가능성](computability.md)

## 더 알아보기

### 복잡도 부류와 계산 모형

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)
- [무작위 복잡도 부류](randomized-complexity-classes.md)
- [불 회로](boolean-circuits.md)
- [양자 회로](quantum-circuits.md)
- [시간 계층 정리](time-hierarchy-theorem.md)

### 증명서와 암호

- [Pratt 증명서](pratt-certificate.md)
- [일방향 함수](one-way-functions.md)

#complexity #computation #algorithms
