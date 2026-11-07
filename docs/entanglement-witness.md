# 얽힘 증인

# 개요

**얽힘 증인(entanglement witness)** 은 기댓값이 음수로 나오면 상태가 얽혀 있다고 결론 내릴 수 있는 관측량이다. 실험에서 두 큐비트를 $\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 에 만들었다고 할 때, 그 상태가 정말 얽혀 있는지 보려고 밀도 행렬을 통째로 재면 기댓값 $15$ 개가 필요하고 큐비트가 늘면 그 수가 지수적으로 는다. 얽힘 증인은 측정 몇 가지의 기댓값을 더한 값 하나의 부호로 얽힘을 확인한다.

# 직관

곱 상태 $\vert a\rangle\otimes\vert b\rangle$ 가 $\vert\Phi^+\rangle=\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 과 얼마나 겹칠 수 있는지 잰다. $\vert a\rangle=a\_0\vert 0\rangle+a\_1\vert 1\rangle$, $\vert b\rangle=b\_0\vert 0\rangle+b\_1\vert 1\rangle$ 이면

$$
\vert\langle\Phi^+\vert a\otimes b\rangle\vert^2=\tfrac12\vert a_0b_0+a_1b_1\vert^2\le\tfrac12(\vert a_0\vert^2+\vert a_1\vert^2)(\vert b_0\vert^2+\vert b_1\vert^2)=\tfrac12
$$

이다. 부등호는 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)이다. 곱 상태를 확률로 섞은 상태도 겹침이 평균이므로 $\tfrac12$ 을 넘지 못한다.

그래서 행렬 $W=\tfrac12 I-\vert\Phi^+\rangle\langle\Phi^+\vert$ 의 기댓값 $\mathrm{tr}(W\rho)=\tfrac12-\langle\Phi^+\vert\rho\vert\Phi^+\rangle$ 은 분리 가능한 상태에서 $0$ 이상이고 $\vert\Phi^+\rangle$ 에서 $-\tfrac12$ 이다. Pauli 행렬로 $\vert\Phi^+\rangle\langle\Phi^+\vert=\tfrac14(I\otimes I+X\otimes X-Y\otimes Y+Z\otimes Z)$ 이므로

$$
\mathrm{tr}(W\rho)=\tfrac14\big(1-\langle X\otimes X\rangle+\langle Y\otimes Y\rangle-\langle Z\otimes Z\rangle\big)
$$

이다. 두 큐비트를 같은 축으로 재는 측정 세 가지의 결과만으로 값이 나오고, 이 값이 음수이면 [양자 얽힘](quantum-entanglement.md)이 있다.

# 정의

## 얽힘 증인

$\mathbb C^{d\_A}\otimes\mathbb C^{d\_B}$ 위의 에르미트 행렬 $W$ 가 모든 분리 가능한 밀도 행렬 $\sigma$ 에서 $\mathrm{tr}(W\sigma)\ge 0$ 이고 어떤 밀도 행렬 $\rho$ 에서 $\mathrm{tr}(W\rho)\lt 0$ 이면 $W$ 를 **얽힘 증인** 이라 하고, $W$ 가 $\rho$ 를 **검출한다(detects)** 고 한다. 직관 절의 $W=\tfrac12 I-\vert\Phi^+\rangle\langle\Phi^+\vert$ 는 $\vert\Phi^+\rangle$ 을 검출하는 얽힘 증인이다. 이 $W$ 는 $\vert\Phi^+\rangle$ 과의 겹침이 $\tfrac12$ 을 넘는 상태를 모두 검출하므로, 등방 상태 $p\vert\Phi^+\rangle\langle\Phi^+\vert+(1-p)\tfrac14 I$ 는 겹침 $\tfrac{1+3p}4$ 가 $\tfrac12$ 을 넘는 $p\gt 1/3$ 에서 검출된다.

## 분해 가능한 증인

양의 준정부호 행렬 $P$, $Q$ 로 $W=P+Q^{T\_B}$ 라 쓰이는 증인을 **분해 가능(decomposable)** 하다고 한다. $T\_B$ 는 $B$ 쪽만 전치하는 부분 전치다. $\rho^{T\_B}$ 가 음의 고윳값을 가지고 그 고유벡터가 $\vert v\rangle$ 이면 $W=(\vert v\rangle\langle v\vert)^{T\_B}$ 는 $\rho$ 를 검출하는 분해 가능한 증인이다. $\vert\Phi^+\rangle$ 에서는 $\vert v\rangle=\tfrac1{\sqrt 2}(\vert 01\rangle-\vert 10\rangle)$ 이고,

$$
(\vert v\rangle\langle v\vert)^{T_B}=\tfrac12\big(\vert 01\rangle\langle 01\vert+\vert 10\rangle\langle 10\vert-\vert 00\rangle\langle 11\vert-\vert 11\rangle\langle 00\vert\big)=\tfrac12 I-\vert\Phi^+\rangle\langle\Phi^+\vert
$$

로 직관 절의 증인과 같다.

## 속박 얽힘

얽혀 있으면서 부분 전치의 고윳값이 모두 $0$ 이상인 상태를 **PPT 얽힌 상태**(positive partial transpose)라 한다. 이런 상태는 $\mathbb C^2\otimes\mathbb C^2$ 와 $\mathbb C^2\otimes\mathbb C^3$ 에는 없고, $\mathbb C^3\otimes\mathbb C^3$ 과 $\mathbb C^2\otimes\mathbb C^4$ 에는 있다[^1]. PPT 얽힌 상태의 사본을 아무리 많이 모아도 국소 연산과 고전 통신으로 $\vert\Phi^+\rangle$ 을 얻을 수 없어서, 이 얽힘을 **속박 얽힘(bound entanglement)** 이라 한다[^2].

# 성질

## 존재 정리

밀도 행렬 $\rho$ 가 얽혀 있는 것은 $\rho$ 를 검출하는 얽힘 증인이 있는 것과 동치다[^3]. 에르미트 행렬 전체는 내적 $\langle A,B\rangle=\mathrm{tr}(AB)$ 를 갖는 실벡터 공간이고, 분리 가능한 밀도 행렬 전체는 그 안의 닫힌 [볼록](convexity.md) 집합이다. 이 집합 밖의 점 $\rho$ 는 [Hahn–Banach 정리](hahn-banach-theorem.md)의 분리 정리로 초평면 하나에 의해 집합과 갈린다. 초평면을 $\mathrm{tr}(W\cdot)=0$ 으로 적으면 $W$ 가 증인이다.

## 양성 사상 판정법

$\rho$ 가 분리 가능한 것은 [양자 채널](quantum-channels.md)의 정의에 나오는 모든 양성 사상 $\Lambda$ 에 대해 $(\mathrm{id}\otimes\Lambda)(\rho)$ 의 고윳값이 모두 $0$ 이상인 것과 동치다[^3]. 분리 가능한 상태에서는 $\Lambda$ 가 각 $\rho\_k^B$ 를 양의 준정부호 행렬로 보내므로 한 방향이 바로 나온다. $\Lambda$ 를 전치로 잡은 것이 부분 전치 판정법이다. 양성이지만 완전 양성이 아닌 사상 가운데 전치와 완전 양성 사상의 합으로 쓰이지 않는 것을 쓰면 분해 가능하지 않은 증인이 나오고, 이 증인만이 PPT 얽힌 상태를 검출한다.

## 분해 가능한 증인의 한계

분해 가능한 증인 $W=P+Q^{T\_B}$ 와 PPT 상태 $\rho$ 에서 $\rho$ 와 $\rho^{T\_B}$ 가 양의 준정부호이므로

$$
\mathrm{tr}(W\rho)=\mathrm{tr}(P\rho)+\mathrm{tr}(Q\rho^{T_B})\ge 0
$$

이다. 양의 준정부호 행렬 두 개의 곱의 대각합은 $0$ 이상이다. 그래서 분해 가능한 증인은 부분 전치 판정법이 잡는 상태만 검출한다.

## 증인의 최적화

주어진 $\rho$ 에 대해 $\mathrm{tr}(W\rho)$ 를 가장 작게 하는 분해 가능한 증인을 $\mathrm{tr}\thinspace W=1$ 아래에서 찾는 문제는, 조건이 $P\succeq 0$, $Q\succeq 0$ 인 [반정부호 계획법](semidefinite-programming.md)이다. 분해 가능하지 않은 증인을 포함하는 최적화는 분리 가능성 판정 자체이고 분리 가능성 판정의 계산 복잡도 결과에 따라 NP(nondeterministic polynomial time)-어려움이다.

# 활용

- 실험의 얽힘 확인. 직관 절처럼 증인을 국소 측정의 합으로 분해하면, 큐비트 수에 대해 지수 개가 아니라 소수의 측정 설정으로 얽힘을 확인한다. 다자간 상태에서는 GHZ(Greenberger–Horne–Zeilinger) 상태와의 겹침으로 만든 증인 $\tfrac12 I-\vert\mathrm{GHZ}\rangle\langle\mathrm{GHZ}\vert$ 가 [다자간 얽힘](multipartite-entanglement.md)의 완전히 얽힌 상태를 확인하는 데 쓰인다.
- 양자 키 분배. [양자 키 분배](quantum-key-distribution.md)에서 두 사람이 나눠 가진 상태가 분리 가능하면 비밀 키를 만들 수 없다. 측정 결과의 상관으로 증인의 기댓값이 음수임을 보이는 것이 안전성의 필요조건이다.
- Bell 부등식. [Bell 부등식](bell-inequality.md)의 CHSH(Clauser–Horne–Shimony–Holt) 연산자 $B$ 에서 $2I-B$ 는 기댓값이 국소 숨은 변수 모형에서 $0$ 이상인 관측량이고, 측정 장치를 믿지 않아도 쓰이는 증인이다. 장치를 믿으면 같은 측정으로 더 넓은 범위의 얽힌 상태를 검출하는 증인이 있다.

[^1]: P. Horodecki, Separability criterion and inseparable mixed states with positive partial transposition, *Physics Letters A* 232 (1997), 333–339.
[^2]: M. Horodecki, P. Horodecki, R. Horodecki, Mixed-state entanglement and distillation: is there a "bound" entanglement in nature?, *Physical Review Letters* 80 (1998), 5239–5242.
[^3]: M. Horodecki, P. Horodecki, R. Horodecki, Separability of mixed states: necessary and sufficient conditions, *Physics Letters A* 223 (1996), 1–8.

# 연관 문서

## 선수지식

- [양자 얽힘](quantum-entanglement.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #linear_algebra #information_theory
