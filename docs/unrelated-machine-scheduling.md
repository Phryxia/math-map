# 비관련 기계 일정 문제

# 개요

**비관련 기계 일정 문제(unrelated parallel machine scheduling)** 는 같은 일이라도 기계마다 걸리는 시간이 다를 때, 일들을 기계에 나눠 맡겨 마지막 일이 끝나는 시각을 가장 이르게 하는 문제다. 번역은 갑이 빠르고 그림은 을이 빠른 두 사람에게 일 세 건을 나눠 맡기는 일이 이 꼴이다. 일을 쪼개서 맡겨도 되는 선형계획을 먼저 풀고, 쪼개진 일을 한 기계에 하나씩 붙이면 최적값의 두 배 안에 드는 일정이 나온다.

# 직관

기계 $M\_1,M\_2$ 와 일 셋의 처리 시간이 다음과 같다.

| 일 | M1 | M2 |
| -- | -- | -- |
| 1  | 1  | 4  |
| 2  | 3  | 1  |
| 3  | 2  | 2  |

일 $1$ 은 $M\_1$, 일 $2$ 는 $M\_2$ 에 맡기는 것이 빠르다. 일 $3$ 을 어느 쪽에 맡겨도 그 기계의 부하가 $3$ 이 되고, 일 $1$ 이나 $2$ 를 느린 기계로 보내면 부하가 $4$ 이상이므로 최솟값은 $3$ 이다.

일을 쪼개도 된다면 일 $3$ 을 반씩 나눠 $M\_1$ 과 $M\_2$ 의 부하를 모두 $1+1=2$ 로 만든다. 쪼갠 일정의 값 $2$ 는 최솟값 $3$ 의 하한이다. 쪼개진 일은 일 $3$ 하나뿐이므로 그것을 한 기계에 통째로 붙이면 부하가 $2+2=4$ 를 넘지 않는다.

# 정의

## 비관련 기계

기계 $m$ 대와 일 $n$ 개가 있고, 일 $j$ 를 기계 $i$ 에서 처리하는 시간이 $p\_{ij}$ 다. 일마다 기계 하나를 정하는 일정의 완료 시각은 기계 부하의 최댓값이고, 이것을 최소화하는 문제를 **비관련 기계 일정 문제** 라 한다. 최솟값을 $\mathrm{OPT}$ 로 쓴다.

$p\_{ij}=p\_j$ 이면 [동일 병렬 기계 일정 문제](identical-machine-scheduling.md)이고, 기계마다 속도 $s\_i$ 가 있어 $p\_{ij}=p\_j/s\_i$ 이면 **균일 기계(uniform machines)** 일정 문제다. 직관 절의 표는 어느 쪽도 아니다.

## 선형계획 완화

목표 시각 $T$ 에 대해, $p\_{ij}\le T$ 인 쌍 $(i,j)$ 에만 변수 $x\_{ij}\ge 0$ 을 두고 다음을 만족하는 $x$ 가 있는지 묻는 선형계획을 $\mathrm{LP}(T)$ 라 한다.

$$
\sum_i x_{ij}=1\quad(\text{모든 } j),\qquad \sum_j p_{ij}x_{ij}\le T\quad(\text{모든 } i)
$$

$x\_{ij}$ 는 일 $j$ 가운데 기계 $i$ 에 맡긴 몫이다. 직관 절에서 $T=2$ 이면 $x\_{11}=x\_{22}=1$, $x\_{13}=x\_{23}=1/2$ 가 해다.

# 성질

## 하한

$\mathrm{OPT}\le T$ 이면 최적 일정이 $\mathrm{LP}(T)$ 의 해다. 그래서 $\mathrm{LP}(T)$ 가 해를 갖는 가장 작은 $T^\ast$ 가 $\mathrm{OPT}$ 의 하한이고, $T^\ast$ 는 이분 탐색으로 구한다. 직관 절에서 $T^\ast=2$ 이다.

## Lenstra–Shmoys–Tardos 정리

J. K. Lenstra, D. B. Shmoys, É. Tardos 는 완료 시각이 $2\thinspace\mathrm{OPT}$ 이하인 일정을 다항 시간에 찾는 알고리즘을 주었다[^1].

증명의 요지. $\mathrm{LP}(T^\ast)$ 의 꼭짓점 해는 등식과 부등식이 $n+m$ 개이므로 $0$ 이 아닌 변수가 $n+m$ 개 이하다. 그래서 쪼개진 일들과 기계들을 잇는 이분 그래프의 각 연결성분은 변이 정점 수 이하이고, 쪼개진 일마다 서로 다른 기계를 짝지을 수 있다. 짝지은 기계에 일을 통째로 붙이면 각 기계의 부하는 정수 몫의 부하 $T^\ast$ 이하에 일 하나의 시간 $T^\ast$ 이하를 더한 값을 넘지 않는다. 이 계산은 [LP 반올림](lp-rounding.md)의 한 예다.

## 근사 하한

같은 논문은 $\mathrm P\ne\mathrm{NP}$ 이면 완료 시각을 $\frac32\mathrm{OPT}$ 미만으로 보장하는 다항 시간 알고리즘이 없음을 보였다[^1]. 처리 시간이 $1,2,\infty$ 인 입력에서 완료 시각이 $2$ 인 일정의 존재를 판정하는 것이 NP(nondeterministic polynomial time)-완전이다. 그런 일정이 없으면 완료 시각이 $3$ 이상이므로, $3/2$ 미만의 비를 보장하는 알고리즘이 있으면 그 결과로 이 판정을 다항 시간에 한다.

## 균일 기계

균일 기계에서는 D. S. Hochbaum 과 D. B. Shmoys 가 모든 $\varepsilon\gt 0$ 에 대해 완료 시각이 $(1+\varepsilon)\mathrm{OPT}$ 이하인 일정을 다항 시간에 찾는 근사 기법을 주었다[^2]. 비관련 기계에서는 $3/2$ 의 하한이 있어 그런 기법이 없다.

# 활용

- 성능이 다른 처리기에 작업 배치. 처리기마다 작업의 실행 시간이 다른 이종 계산 환경에서 작업을 배치한다.
- 일반화 할당 문제(generalized assignment problem). 일을 기계에 맡기는 비용 $c\_{ij}$ 를 더해, 각 기계의 부하를 $T$ 이하로 두고 비용 합을 최소화하는 문제에도 같은 반올림이 쓰인다. D. B. Shmoys 와 É. Tardos 가 비용을 넘지 않고 부하를 $2T$ 이하로 하는 일정을 주었다[^3].

[^1]: J. K. Lenstra, D. B. Shmoys, É. Tardos, "Approximation algorithms for scheduling unrelated parallel machines", Mathematical Programming 46 (1990), 259–271.
[^2]: D. S. Hochbaum, D. B. Shmoys, "A polynomial approximation scheme for scheduling on uniform processors: using the dual approximation approach", SIAM Journal on Computing 17 (1988), 539–551.
[^3]: D. B. Shmoys, É. Tardos, "An approximation algorithm for the generalized assignment problem", Mathematical Programming 62 (1993), 461–474.

# 연관 문서

## 선수지식

- [동일 병렬 기계 일정 문제](identical-machine-scheduling.md)
- [LP 반올림](lp-rounding.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #optimization #complexity
