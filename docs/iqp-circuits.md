# IQP 회로

# 개요

**IQP 회로(instantaneous quantum polynomial-time circuit)** 는 모든 큐비트에 Hadamard 게이트를 걸고, 계산 기저에서 대각인 게이트들을 건 뒤, 다시 모든 큐비트에 Hadamard 게이트를 걸고 측정하는 [양자 회로](quantum-circuits.md)다. 가운데 게이트들은 서로 가환이라 순서를 정할 필요가 없고, 한꺼번에 걸 수 있어 만들기 쉽다. 이렇게 단순한 회로도 출력 확률이 논리식의 해의 수의 차로 적혀, [후선택 양자 계산](postselected-quantum-computation.md)의 논증으로 그 출력 분포를 고전 컴퓨터가 흉내 내기 어렵다는 것이 증명된다.

# 직관

큐비트 셋에 $H$ 를 걸고, 세 큐비트가 모두 $1$ 일 때만 부호를 뒤집는 게이트 $\mathrm{CCZ}$ 를 건 뒤 다시 $H$ 를 걸어 측정한다. 처음 $H$ 들은 $\vert 000\rangle$ 을 여덟 기저 상태의 균등한 합으로 만들고, $\mathrm{CCZ}$ 는 $\vert 111\rangle$ 의 부호만 뒤집는다.

마지막 $H$ 들을 지난 뒤 $\vert 000\rangle$ 의 진폭은 여덟 부호의 평균이다. 부호가 $+1$ 인 기저 상태가 일곱, $-1$ 인 것이 하나이므로 진폭은 $(7-1)/8=3/4$ 이고, $000$ 이 나올 확률은 $9/16$ 이다.

진폭은 다항식 $x\_1x\_2x\_3$ 이 $0$ 인 점의 수에서 $1$ 인 점의 수를 빼고 $2^3$ 으로 나눈 값이다. 가운데 게이트를 바꾸면 이 다항식이 바뀌고, 변수가 많은 삼차 다항식에서 이 차를 세는 일은 [셈 복잡도](counting-complexity.md)의 어려운 문제다.

# 정의

## IQP 회로

$n$ 큐비트 **IQP 회로** 는 계산 기저에서 대각인 유니터리 $D$ 로

$$
H^{\otimes n}DH^{\otimes n}
$$

꼴로 쓰이는 회로이고, $\vert 0\cdots 0\rangle$ 에 건 뒤 모든 큐비트를 계산 기저로 측정한다[^1]. $D$ 는 $Z$, $\mathrm{CZ}$, $\mathrm{CCZ}$, 위상 게이트 $\mathrm{diag}(1,e^{i\theta})$ 처럼 대각인 게이트 다항 개의 곱이다. 직관 절의 회로는 $n=3$, $D=\mathrm{CCZ}$ 다.

## 위상 다항식

$D$ 가 $Z$, $\mathrm{CZ}$, $\mathrm{CCZ}$ 의 곱이면 $D\vert x\rangle=(-1)^{f(x)}\vert x\rangle$ 인 $\mathbb F\_2$ 위의 차수 $3$ 이하 다항식 $f$ 가 있다. $Z\_i$ 는 항 $x\_i$, $\mathrm{CZ}\_{ij}$ 는 $x\_ix\_j$, $\mathrm{CCZ}\_{ijk}$ 는 $x\_ix\_jx\_k$ 를 더한다. 출력 $y$ 의 진폭은 다음과 같다.

$$
\langle y\vert H^{\otimes n}DH^{\otimes n}\vert 0\rangle=\frac1{2^n}\sum\_{x\in\lbrace 0,1\rbrace^n}(-1)^{f(x)+x\cdot y}
$$

직관 절에서 $f(x)=x\_1x\_2x\_3$ 이고 $y=000$ 이면 이 합이 $3/4$ 이다.

# 성질

## 진폭 계산의 어려움

$\mathbb F\_2$ 위의 삼차 다항식 $f$ 에 대해 $\sum\_x(-1)^{f(x)}$ 를 계산하는 일은 #P-난해다[^2]. 그래서 IQP 회로의 한 출력 확률을 정확히 계산하는 일도 #P-난해다. 차수가 $2$ 이하이면 이 합은 이차형식의 계수로 다항시간에 계산되고, 이 경우의 회로는 Clifford 회로다.

## 후선택과 다항 계층

IQP 회로에 후선택을 허락한 부류는 PP(probabilistic polynomial time)와 같다[^1]. 후선택한 IQP 회로로 임의의 양자 회로를 흉내 낼 수 있어, $\mathrm{PostIQP}=\mathrm{PostBQP}=\mathrm{PP}$ 가 된다. 흉내는 게이트 순간이동으로 한다. 순서가 있는 게이트 열을 대각 게이트와 $H$ 로 쓰고, 가운데 $H$ 를 보조 큐비트와 $\mathrm{CZ}$, 후선택으로 바꾼다.

그러므로 IQP 회로의 출력 분포를 각 확률의 $\sqrt 2$ 보다 작은 상수배 안으로 흉내 내는 고전 다항시간 알고리즘이 있으면, 후선택 양자 계산의 논증과 같이 [다항 계층](polynomial-hierarchy.md)이 셋째 층으로 무너진다[^1].

## 근사 표본추출

총변동 거리 안의 근사 표본추출에 대해서는 두 가정 아래 같은 결론이 나온다[^3]. 하나는 무작위로 고른 삼차 위상 다항식에서 진폭을 상수배 안으로 어림하는 일이 평균적으로도 #P-난해라는 추측이고, 다른 하나는 출력 확률이 대부분 $2^{-n}$ 규모라는 반집중(anti-concentration)이다. 무작위 IQP 회로에서는 반집중이 증명되어 있다[^3].

# 활용

- 양자 우위 제안. 게이트 순서가 없어 오류가 적은 장치로 실험할 수 있는 표본추출 문제로 제안되었다[^3].
- Ising 모형의 분배함수. 위상 다항식이 이차인 항과 일차인 항으로 된 회로의 진폭은 허수 온도의 [Ising 모형](ising-model.md) 분배함수와 같은 꼴이어서, 회로의 어려움이 분배함수 계산의 어려움으로 옮겨진다[^3].
- 확인 가능한 시험. 출력 비트열이 숨겨진 부호와 짝이 맞는지를 보는 시험으로, 장치가 실제로 IQP 회로를 돌렸는지 고전 검증자가 확인하는 규약이 있다[^4].

[^1]: M. J. Bremner, R. Jozsa, D. J. Shepherd, Classical simulation of commuting quantum computations implies collapse of the polynomial hierarchy, *Proceedings of the Royal Society A* 467 (2011), 459–472.
[^2]: A. Ehrenfeucht, M. Karpinski, The computational complexity of (XOR, AND)-counting problems, Technical Report TR-90-033, International Computer Science Institute, Berkeley (1990).
[^3]: M. J. Bremner, A. Montanaro, D. J. Shepherd, Average-case complexity versus approximate simulation of commuting quantum computations, *Physical Review Letters* 117 (2016), 080501.
[^4]: D. Shepherd, M. J. Bremner, Temporally unstructured quantum computation, *Proceedings of the Royal Society A* 465 (2009), 1413–1439.

# 연관 문서

## 선수지식

- [후선택 양자 계산](postselected-quantum-computation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #complexity
