# 부분관측 Markov 결정 과정

# 개요

**부분관측 Markov 결정 과정(partially observable Markov decision process, POMDP)** 은 지금 상태를 직접 보지 못하고 상태에 따라 달라지는 단서만 보면서 행동을 고르는 결정 문제다. 두 방 가운데 한쪽에 보상이, 다른 쪽에 벌점이 있고 어느 쪽인지 모를 때, 문을 바로 열지 비용을 내고 소리를 더 들을지는 지금 보상이 왼쪽에 있을 확률에 달려 있다. POMDP 는 상태에 대한 이런 확률분포, 곧 믿음 상태를 관측마다 갱신해 새 상태로 삼고, 믿음 상태 위에서 정책을 구한다.

# 직관

부분관측 Markov 결정 과정은 상태를 직접 보지 못하고 상태에 따라 분포가 달라지는 관측만 보면서 행동을 고르는 결정 문제다. [Markov 결정 과정](markov-decision-process.md)(Markov decision process, MDP)은 매 시각 상태를 알고 정책을 상태의 함수로 쓰지만, 관측만 있으면 그럴 수 없다.

상태 위의 사후분포를 상태로 삼으면 문제가 다시 MDP 가 된다. 그 사후분포를 믿음 상태라 하고, 갱신식은 [은닉 Markov 모형](hidden-markov-model.md)의 전향 재귀와 같은 꼴이다. 값함수는 믿음에 대해 조각마다 선형이고 볼록하다.

두 방 가운데 한쪽에 보상이 있고 다른 쪽에는 벌점이 있다. 행동은 셋이다. 왼쪽 문을 열면 보상이 그쪽에 있을 때 $10$, 없을 때 $-100$ 이고 오른쪽도 같다. 소리를 듣는 행동은 비용 $1$ 이고 보상이 있는 쪽을 확률 $0.85$ 로 알려 준다. 어느 쪽인지는 처음에 확률 $1/2$ 씩이다.

한 번 듣고 들린 쪽을 여는 정책의 기댓값을 계산한다. 들린 쪽이 맞을 확률이 $0.85$ 이므로 $0.85\cdot 10+0.15\cdot(-100)-1=-7.5$ 다. 음수이므로 이 정책은 아무것도 열지 않는 것보다 나쁘다. 두 번 듣고 두 번 같은 쪽이 들렸을 때만 여는 정책을 계산한다. 두 관측이 독립이므로 그 쪽이 맞을 확률은 $0.85^2/(0.85^2+0.15^2)=0.970$ 이고 기댓값은 $0.970\cdot 10+0.030\cdot(-100)-2=4.7$ 이다. 양수다.

같은 관측이 들렸는데 한 번은 열지 않고 한 번은 여는 것이 최적이므로, 행동은 마지막 관측이 아니라 관측 전체가 정하는 확률에 달렸다. 관측의 이력은 시각이 지나면 길어지지만 그 확률은 수 하나다. 행동과 관측이 하나 늘 때 이 수를 갱신하는 식만 있으면 이력을 저장하지 않아도 같은 결정을 내린다.

# 정의

## 모형

POMDP 는 일곱 쌍 $(S,A,O,T,Z,r,\gamma)$ 다. $S$, $A$, $O$ 는 상태, 행동, 관측의 유한집합이고 나머지는 다음과 같다.

- $T(s'\mid s,a)$ 는 상태 $s$ 에서 행동 $a$ 를 했을 때 $s'$ 로 가는 확률이다.
- $Z(o\mid s',a)$ 는 전이 후 상태가 $s'$ 일 때 관측 $o$ 가 나올 확률이다.
- $r(s,a)$ 는 즉시 보상이고 $\gamma\in(0,1)$ 은 할인율이다.

$O$ 가 한 점이면 관측에 정보가 없고, $Z(o\mid s',a)$ 가 $s'$ 를 결정하면 MDP 다.

## 믿음 상태

**믿음 상태**는 상태 위의 확률분포 $b\in\Delta(S)$ 다. 믿음 $b$ 에서 행동 $a$ 를 하고 관측 $o$ 를 받으면 믿음은

$$b'(s')=\frac{Z(o\mid s',a)\sum_{s\in S}T(s'\mid s,a)\thinspace b(s)}{\Pr(o\mid b,a)},\qquad \Pr(o\mid b,a)=\sum_{s'\in S}Z(o\mid s',a)\sum_{s\in S}T(s'\mid s,a)\thinspace b(s)$$

로 갱신된다. 이 갱신을 $b'=\tau(b,a,o)$ 로 쓴다. 분자는 전이와 관측의 결합확률이고 분모는 그 정규화 상수다.

## 믿음 MDP

믿음 상태를 상태로 삼고 보상을 $\rho(b,a)=\sum_{s\in S}b(s)\thinspace r(s,a)$ 로 두면, 전이가 $\tau$ 와 $\Pr(o\mid b,a)$ 로 적히는 MDP 가 된다. 상태공간은 단체 $\Delta(S)$ 이므로 연속이고, 유한 MDP 의 값 반복을 표로 돌릴 수 없다.

# 성질

## 믿음의 충분성

*정리.* 초기 믿음 $b_0$ 와 이력 $h_t=(a_0,o_1,\dots,a_{t-1},o_t)$ 에 대해 $\Pr(s_t=s\mid h_t,b_0)=b_t(s)$ 이고, $b_t$ 는 $b_t=\tau(b_{t-1},a_{t-1},o_t)$ 로 얻어진다[^1]. 따라서 이력에 의존하는 정책 가운데 최적인 것이 $b_t$ 만의 함수인 정책 가운데 있다.

*증명의 요지.* $t$ 에 대한 귀납이다. $\Pr(s_t,o_t\mid h_{t-1},a_{t-1},b_0)$ 를 $s_{t-1}$ 에 대해 더하면 $\tau$ 의 분자가 나오고, $o_t$ 로 조건을 걸면 분모가 정규화 상수가 된다. 미래 보상의 분포가 $s_t$ 의 분포와 앞으로의 행동에만 달렸으므로 $b_t$ 보다 이력을 더 알아도 기댓값이 달라지지 않는다.

믿음 갱신식은 은닉 Markov 모형의 전향 변수를 매 단계 정규화한 것과 같다. 차이는 전이핵을 행동이 고른다는 것뿐이다.

## Bellman 방정식

최적 가치함수는 $\Delta(S)$ 에서

$$V^\ast(b)=\max_{a\in A}\Big\lbrack \rho(b,a)+\gamma\sum_{o\in O}\Pr(o\mid b,a)\thinspace V^\ast(\tau(b,a,o))\Big\rbrack$$

를 만족한다. 우변의 연산자는 상한 노름에 대해 계수 $\gamma$ 의 축약사상이므로, 유계인 가치함수의 공간에서 고정점이 유일하고 값 반복이 그 고정점으로 수렴한다.

## 조각마다 선형성과 볼록성

*정리.* 지평 $n$ 의 최적 가치함수는 유한집합 $\Gamma_n\subset\mathbb R^{\vert S\vert}$ 가 있어

$$V_n^\ast(b)=\max_{\alpha\in\Gamma_n}\sum_{s\in S}\alpha(s)\thinspace b(s)$$

로 적힌다[^2]. 선형함수의 유한 최댓값이므로 $V_n^\ast$ 는 $b$ 에 대해 조각마다 선형이고 볼록하다.

*증명의 요지.* $n$ 에 대한 귀납이다. $\Gamma_0=\lbrace 0\rbrace$ 이다. Bellman 연산자를 가정에 넣으면 $\gamma\sum_o\Pr(o\mid b,a)\max_\alpha\sum_s\alpha(s)\thinspace\tau(b,a,o)(s)$ 꼴이 나오고, $\tau$ 의 분모가 $\Pr(o\mid b,a)$ 와 약분되어 각 항이 $b$ 의 선형함수가 된다. 행동과 관측마다 어느 $\alpha$ 를 쓸지 고르는 선택지가 유한하므로 결과도 유한개 선형함수의 최댓값이다.

$\Gamma_n$ 의 원소 하나는 조건부 계획, 곧 관측에 따라 다음 행동을 정하는 깊이 $n$ 의 나무 하나에 대응한다. $\alpha(s)$ 는 초기 상태가 $s$ 일 때 그 계획이 주는 기대 할인보상이다.

볼록성은 정보의 값이 음이 아니라는 것과 같은 진술이다. 두 믿음의 평균에서 얻는 최적값은 각 믿음에서 얻는 최적값의 평균보다 크지 않다.

## 계산 복잡도

$\Gamma_n$ 을 귀납식 그대로 만들면 크기가 $\vert A\vert\thinspace\vert\Gamma_{n-1}\vert^{\vert O\vert}$ 로 늘어난다. 어떤 $\alpha$ 가 모든 $b$ 에서 다른 것에 지배되는지는 선형계획으로 판정할 수 있고, 지배되는 것을 버리면 집합이 줄지만 최악의 경우 크기가 지평에 대해 지수적이다.

유한 지평 POMDP 에서 기대 보상이 주어진 값 이상인 정책이 있는지 판정하는 문제는 $\mathrm{PSPACE}$ 난해다[^3]. 무한 지평에서 할인 없는 기준으로 주어진 값 이상인 정책이 있는지 판정하는 문제는 결정 불가능하다[^4].

# 활용

- [다중 슬롯머신](multi-armed-bandits.md): 각 팔의 보수 분포를 모르는 문제는 그 분포의 모수 위의 사후분포를 믿음으로 하는 POMDP 다. 팔마다 믿음이 따로 갱신되는 구조에서 [Gittins 지표](gittins-index.md)가 문제를 팔 하나짜리 문제로 분해한다.
- [최적 정지](optimal-stopping.md): 관측을 더 받을지 멈출지 고르는 문제는 행동이 둘인 POMDP 다. [순차확률비 검정](sequential-probability-ratio-test.md)의 두 문턱이 믿음 구간을 세 조각으로 나눈 최적 정책이다.
- [Kalman 필터](kalman-filter.md): 상태와 관측이 선형이고 잡음이 Gauss 이면 믿음이 평균과 [공분산](covariance.md)으로 적히고, 갱신식이 Kalman 재귀가 된다. 이차 보상에서는 최적 제어가 평균에만 의존한다.
- [Q 학습](q-learning.md): 모형을 모르는 상태에서 관측 이력을 그대로 상태로 쓰면 수렴 보장이 깨진다. 믿음의 근사를 상태로 두는 것이 그 자리의 대응이다.

[^1]: K. J. Åström, "Optimal control of Markov processes with incomplete state information", *Journal of Mathematical Analysis and Applications* 10 (1965), 174–205.
[^2]: E. J. Sondik, *The Optimal Control of Partially Observable Markov Processes*, Ph.D. thesis, Stanford University, 1971.
[^3]: C. H. Papadimitriou and J. N. Tsitsiklis, "The complexity of Markov decision processes", *Mathematics of Operations Research* 12 (1987), 441–450.
[^4]: O. Madani, S. Hanks, A. Condon, "On the undecidability of probabilistic planning and related stochastic optimization problems", *Artificial Intelligence* 147 (2003), 5–34.

# 연관 문서

## 선수지식

- [Markov 결정 과정](markov-decision-process.md)
- [은닉 Markov 모형](hidden-markov-model.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #machine_learning #computation #optimization
