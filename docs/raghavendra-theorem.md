# Raghavendra 정리

# 개요

**Raghavendra 정리(Raghavendra's theorem)** 는 모든 [제약 만족 문제](constraint-satisfaction-problems.md)에서 다항시간 근사 비율의 한계가 정해진 반정부호 완화 하나의 간극으로 결정된다는 결과다. 다섯 정점의 고리에서 간선을 가능한 한 많이 자르는 문제는 최댓값이 간선 다섯 가운데 넷이다. 정점을 평면의 단위벡터로 바꾸어 푸는 완화는 이 문제에 약 $4.52$ 개라는 값을 준다.

[근사 알고리즘](approximation-algorithms.md)은 이 두 값의 차이 때문에 완화의 값보다 나쁜 답을 낼 수밖에 없다. Raghavendra 는 한 복잡도 가설 아래에서 그 차이의 최악 비율이 곧 다항시간 근사의 한계임을 보였다.

# 직관

다섯 정점 $0,1,2,3,4$ 가 고리를 이루는 그래프 $C_5$ 에서 정점을 두 쪽으로 나누어 양쪽에 걸친 간선을 센다. 이 수를 가장 크게 하는 문제가 [최대 절단](max-cut.md)이다. 고리의 길이가 홀수이므로 모든 간선을 자를 수는 없고, 넷을 자르는 나눔은 있다. 최댓값은 $4$ 다.

정점 $v$ 마다 $\pm1$ 대신 평면의 단위벡터 $y_v$ 를 놓고, 간선 $uv$ 의 값을 $\frac12(1-y_u\cdot y_v)$ 로 센다. $y_v$ 가 $\pm1$ 이면 이 값은 간선이 잘릴 때 $1$, 아니면 $0$ 이다. 정점 $k$ 에 각도 $4\pi k/5$ 의 벡터를 놓으면 이웃한 두 벡터의 각이 $144^\circ$ 다.

$$
5\cdot\frac{1-\cos 144^\circ}{2}\approx 5\cdot 0.9045=4.52
$$

벡터로 넓힌 문제는 [반정부호 계획법](semidefinite-programming.md)으로 다항시간에 풀리지만, 그 값 $4.52$ 는 실제 최댓값 $4$ 보다 크다. 이 그래프에서 완화의 값에 대한 실제 최댓값의 비율은 $4/4.52\approx 0.884$ 다. 완화의 값만 보고 답을 내는 알고리즘은 이 비율보다 좋은 보장을 줄 수 없다.

# 정의

## 기본 반정부호 완화

제약 만족 문제 $\Lambda$ 의 인스턴스에서 만족한 제약의 비율을 값이라 하고, 최댓값을 $\mathrm{OPT}$ 로 쓴다. 변수마다 값 하나 대신 값마다 벡터 하나를 두고, 제약마다 그 제약의 변수들에 대한 국소 확률분포를 두어 두 쪽이 이차 모멘트에서 맞도록 묶은 반정부호 계획을 **기본 반정부호 완화(basic SDP relaxation)** 라 하고, 그 최댓값을 $\mathrm{SDP}$ 로 쓴다[^1]. 완화는 원래 문제를 포함하므로 $\mathrm{SDP}\ge\mathrm{OPT}$ 다.

최대 절단에서 이 완화는 직관 절의 벡터 문제와 같다. $C_5$ 에서 $\mathrm{OPT}=4/5$, $\mathrm{SDP}\approx 0.9045$ 다.

## 적분 간극 곡선

$c\in\lbrack 0,1\rbrack$ 에 대해 $\mathrm{SDP}\ge c$ 인 $\Lambda$ 의 인스턴스 전체에서 $\mathrm{OPT}$ 의 하한을 $S_\Lambda(c)$ 라 하고, 함수 $S_\Lambda$ 를 **적분 간극 곡선(integrality gap curve)** 이라 한다. $C_5$ 는 $S\_{\text{max-cut}}(0.9045)\le 0.8$ 임을 보인다.

# 성질

## 정리

$\Lambda$ 를 정의역이 유한하고 제약의 항수가 유계인 제약 만족 문제라 하고 $\varepsilon\gt 0$ 이라 한다. Raghavendra 는 다음 둘을 증명했다[^1].

- 난해성. [유일게임 추측](unique-games.md)이 참이면, $\mathrm{OPT}\ge c-\varepsilon$ 인 인스턴스와 $\mathrm{OPT}\le S_\Lambda(c)+\varepsilon$ 인 인스턴스를 다항시간에 가르는 것은 NP-난해(NP-hard, NP 는 nondeterministic polynomial time)다.
- 알고리즘. $\mathrm{SDP}=c$ 인 인스턴스에서 값이 $S_\Lambda(c-\varepsilon)-\varepsilon$ 이상인 할당을 찾는 다항시간 알고리즘이 있다.

두 진술을 합치면, 유일게임 추측 아래에서 기본 반정부호 완화를 반올림하는 알고리즘이 모든 제약 만족 문제에서 최적 근사 비율을 얻는다.

## 두 진술의 증명

난해성 쪽은 간극 인스턴스 하나를 검증자로 바꾸는 환원이다. 완화의 벡터 해를 Gauss 확률변수로 바꾸어 독재자 검사(dictator test)를 만들고, 영향력이 작은 함수가 이 검사를 통과할 확률을 불변 원리(invariance principle)로 간극 인스턴스의 $\mathrm{OPT}$ 에 묶는다. 이 검사를 유일게임과 합성하면 난해성이 나온다.

알고리즘 쪽은 같은 대응을 거꾸로 쓴다. 벡터 해를 무작위 사영해 차원을 줄인 뒤 작은 인스턴스에서 가장 좋은 반올림 함수를 찾고, 불변 원리가 그 성능이 $S_\Lambda$ 이상임을 보장한다.

## 비율의 계산

정리는 $S_\Lambda$ 가 무엇인지 알려 주지 않는다. Raghavendra 와 Steurer 는 $\varepsilon$ 에만 의존하는 시간에 근사 비율을 $\varepsilon$ 오차 안에서 계산하는 알고리즘을 주었다[^2].

최대 절단에서는 Goemans–Williamson 반올림의 비율이 간극과 같다. 무작위 초평면은 각 $\theta$ 인 두 벡터를 확률 $\theta/\pi$ 로 가르므로, 다음 최솟값이 비율이다.

$$
\alpha\_{\mathrm{GW}}=\min\_{0\lt\theta\le\pi}\frac{\theta/\pi}{(1-\cos\theta)/2}\approx 0.878
$$

$C_5$ 의 각 $144^\circ$ 에서 이 분수는 $0.8/0.9045\approx 0.884$ 로 직관 절의 비율이다. Feige 와 Schechtman 은 간극이 $\alpha\_{\mathrm{GW}}$ 에 얼마든지 가까운 그래프를 만들었다[^3].

# 활용

- 근사 알고리즘의 설계. 최대 절단, 최대 [2SAT](two-satisfiability.md), 최대 $k$ 색칠 같은 문제마다 따로 찾던 반올림을, 하나의 완화와 하나의 반올림 틀로 대신한다.
- 근사 난해성의 증명. 새 제약 만족 문제의 유일게임 난해성은 기본 완화의 간극 인스턴스 하나를 찾는 일로 바뀐다.
- 완화의 강화와의 비교. 기본 완화에 [Lasserre 위계](lasserre-hierarchy.md) 같은 제약을 더해도, 유일게임 추측이 참이면 다항시간 안에서는 근사 비율이 나아지지 않는다.

[^1]: P. Raghavendra, "Optimal algorithms and inapproximability results for every CSP?", *Proceedings of the 40th Annual ACM Symposium on Theory of Computing* (2008), 245–254.
[^2]: P. Raghavendra, D. Steurer, "How to round any CSP", *Proceedings of the 50th Annual IEEE Symposium on Foundations of Computer Science* (2009).
[^3]: U. Feige, G. Schechtman, "On the optimality of the random hyperplane rounding technique for MAX CUT", *Random Structures & Algorithms* 20 (2002), 403–440.

# 연관 문서

## 선수지식

- [유일게임 추측과 2-to-2 정리](unique-games.md)
- [제약 만족 문제](constraint-satisfaction-problems.md)
- [최대 절단](max-cut.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #optimization #combinatorics
