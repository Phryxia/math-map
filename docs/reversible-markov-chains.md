# 가역 Markov 연쇄

# 개요

**가역 Markov 연쇄(reversible Markov chain)** 는 정상 상태에서 움직임을 거꾸로 돌려 보아도 확률 법칙이 같은 [Markov 연쇄](markov-chains.md)다. 세 방 A, B, C 가 원으로 이어져 있고, 사람이 매 걸음 확률 $2/3$ 로 시계 방향, $1/3$ 로 반시계 방향의 옆방으로 간다. 오래 지켜본 기록을 거꾸로 재생하면 사람은 주로 반시계 방향으로 돈다. 이 연쇄는 정상분포가 균등한데도 거꾸로 본 움직임이 원래와 다르다.

가역성은 이웃한 두 상태 사이의 흐름이 양방향으로 같은지를 묻는 식 하나로 이 차이를 판정하고, 상태들을 잇는 고리마다 확률의 곱을 비교하는 것으로 정상분포를 몰라도 판정한다.

# 직관

세 방의 연쇄에서 정상분포는 $(1/3,1/3,1/3)$ 이다. 각 방으로 들어오는 확률의 합이 $2/3+1/3=1$ 이므로 균등분포가 바뀌지 않는다.

정상 상태에서 한 걸음 동안 A 에서 B 로 가는 확률은 $\tfrac13\cdot\tfrac23=\tfrac29$ 이고, B 에서 A 로 가는 확률은 $\tfrac13\cdot\tfrac13=\tfrac19$ 이다. 두 방 사이의 흐름이 한쪽으로 치우쳐 있으므로, 기록을 거꾸로 돌리면 B 에서 A 로 가는 걸음이 더 많이 보인다.

정상분포를 모르는 채로도 이 치우침이 보인다. A, B, C 를 시계 방향으로 한 바퀴 도는 확률의 곱은 $(2/3)^3=8/27$ 이고, 반대 방향으로 도는 곱은 $(1/3)^3=1/27$ 이다. 두 곱이 다르면 어느 정상분포를 놓아도 고리를 도는 흐름이 생긴다.

# 정의

## 상세균형과 가역성

전이행렬 $P$ 와 확률분포 $\pi$ 가 모든 $i,j$ 에서 다음을 만족하면 $\pi$ 에 대해 **상세균형(detailed balance)** 이 성립한다고 하고, 이때 연쇄를 **가역(reversible)** 이라 한다.

$$
\pi_ip_{ij}=\pi_jp_{ji}
$$

이 $\pi$ 는 정상분포다. 세 방의 연쇄는 $\pi_Ap_{AB}=2/9$, $\pi_Bp_{BA}=1/9$ 이므로 가역이 아니다. 시계 방향과 반시계 방향 확률이 모두 $1/2$ 이면 가역이다.

## 시간 역전 연쇄

기약 연쇄의 정상분포가 $\pi$ 일 때 다음 행렬 $\hat P$ 를 **시간 역전 연쇄(time-reversed chain)** 의 전이행렬이라 한다.

$$
\hat p_{ij}=\frac{\pi_jp_{ji}}{\pi_i}
$$

정상 상태에서 출발한 $X_0,\dots,X_n$ 을 거꾸로 읽은 $X_n,\dots,X_0$ 은 $\hat P$ 를 전이행렬로 하는 Markov 연쇄다. 세 방의 연쇄에서 $\hat P$ 는 시계 방향 $1/3$, 반시계 방향 $2/3$ 이다. 연쇄가 가역인 것은 $\hat P=P$ 인 것과 동치다.

# 성질

## Kolmogorov 기준

정리. 기약 연쇄가 가역일 필요충분조건은 모든 상태열 $i_0,i_1,\dots,i_m=i_0$ 에서 다음이 성립하는 것이다. 이것을 **Kolmogorov 기준(Kolmogorov's criterion)** 이라 한다[^1].

$$
p_{i_0i_1}p_{i_1i_2}\cdots p_{i_{m-1}i_0}=p_{i_0i_{m-1}}\cdots p_{i_2i_1}p_{i_1i_0}
$$

증명의 요지. 가역이면 상세균형을 고리를 따라 곱해 $\pi$ 가 약분된다. 거꾸로, 상태 $o$ 를 고정하고 $o$ 에서 $i$ 로 가는 경로를 따라 $p_{kl}/p_{lk}$ 를 곱한 값을 $\pi_i$ 로 둔다. 기준이 성립하면 이 값이 경로에 의존하지 않고, 정규화한 $\pi$ 가 상세균형을 만족한다.

## 가중 그래프 위의 걷기

정리. 가역 연쇄는 가중 [그래프](graphs.md) 위의 무작위 걷기와 같다[^2]. 변 $\lbrace i,j\rbrace$ 의 가중치를 $c_{ij}=\pi_ip_{ij}$ 로 두면 상세균형에 의해 $c_{ij}=c_{ji}$ 이고, $p_{ij}=c_{ij}/\sum_kc_{ik}$ 다.

이 대응으로 [무작위 걷기](random-walks.md)의 재귀성과 도달 확률을 전기 회로의 저항으로 계산한다.

## 스펙트럼

$\pi$ 로 가중한 내적 $\langle f,g\rangle_\pi=\sum_i\pi_if(i)g(i)$ 에서 $P$ 는 자기수반 작용소다. 그래서 유한 상태의 가역 연쇄는 고윳값이 모두 실수이고, 이 내적에 대한 정규직교 고유기저를 갖는다[^2]. 세 방의 연쇄는 고윳값 $-\tfrac12\pm\tfrac{\sqrt3}{6}i$ 를 가져 가역이 아니라는 것이 여기서도 드러난다. [Markov 연쇄의 혼합시간](mixing-time.md)의 스펙트럼 간격 상한은 이 실수 고윳값으로 적힌다.

## 연속시간 연쇄

[연속시간 Markov 연쇄](continuous-time-markov-chains.md)에서는 전이율로 같은 조건 $\pi_iq_{ij}=\pi_jq_{ji}$ 를 쓴다. Kolmogorov 기준도 전이율의 곱으로 같은 꼴이다. [출생사망 과정](birth-death-process.md)은 상태가 한 줄로 이어져 고리가 없으므로 항상 가역이다.

# 활용

- [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md). Metropolis–Hastings 핵은 목표분포에 대해 상세균형을 만족하도록 수락확률을 정한다.
- 계통 추정의 치환 모형. [Jukes–Cantor 모형](jukes-cantor-model.md)처럼 가역인 치환 연쇄에서는 [Felsenstein 가지치기 알고리즘](felsenstein-pruning-algorithm.md)의 가능도가 뿌리 위치에 의존하지 않는다.
- 통계역학. 평형 상태의 물리계를 모형으로 하는 연쇄는 상세균형을 만족하도록 세우고, 고리를 도는 흐름이 있는 연쇄는 비평형 정상 상태의 모형이다.

[^1]: F. P. Kelly, *Reversibility and Stochastic Networks*, Wiley (1979), Chapter 1, Theorem 1.7.
[^2]: D. A. Levin, Y. Peres, *Markov Chains and Mixing Times*, 2nd ed., American Mathematical Society (2017), Chapter 9(가중 그래프와 전기 회로)와 Chapter 12(가역 연쇄의 스펙트럼 표현).

# 연관 문서

## 선수지식

- [Markov 연쇄](markov-chains.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #linear_algebra
