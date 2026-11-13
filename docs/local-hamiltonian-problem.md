# 국소 해밀토니언 문제

# 개요

**국소 해밀토니언 문제(local Hamiltonian problem)** 는 큐비트 몇 개씩에만 작용하는 항들의 합으로 주어진 해밀토니언의 가장 작은 고윳값이 정해진 값보다 작은지 큰지를 판정하는 문제다. 고전적인 제약 충족 문제는 비트열 하나를 증명서로 내면 검사할 수 있지만, 큐비트 둘의 해밀토니언 $X\_1X\_2+Z\_1Z\_2$ 의 가장 작은 고윳값 $-2$ 는 얽힌 상태에서만 나오고 비트열이나 큐비트마다의 상태로는 $-1$ 아래로 내려가지 않는다. 이 문제는 증명서가 양자 상태인 판정 문제의 부류 QMA(quantum Merlin–Arthur)에서 가장 어려운 문제이고, 그 증명은 회로의 계산 과정을 바닥 상태로 갖는 해밀토니언을 만드는 것이다.

# 직관

비트 둘의 제약 "두 비트가 다르다" 는 비용 $Z\_1Z\_2$ 로 적힌다. $z\_1\ne z\_2$ 이면 $-1$, 같으면 $+1$ 이고, 가장 작은 값 $-1$ 은 비트열 $01$ 이 증명서다. 검사하는 쪽은 $01$ 을 넣어 비용을 계산하면 된다.

항 $X\_1X\_2$ 를 더해 $H=X\_1X\_2+Z\_1Z\_2$ 로 둔다. 두 항은 교환하므로 공통 고유벡터인 네 Bell 상태에서 고윳값을 읽는다.

| 상태                                         | X₁X₂ | Z₁Z₂ | H   |
| -------------------------------------------- | ---- | ---- | --- |
| (\|00⟩+\|11⟩)/√2                             | +1   | +1   | 2   |
| (\|00⟩−\|11⟩)/√2                             | −1   | +1   | 0   |
| (\|01⟩+\|10⟩)/√2                             | +1   | −1   | 0   |
| (\|01⟩−\|10⟩)/√2                             | −1   | −1   | −2  |

가장 작은 고윳값 $-2$ 의 고유벡터는 $\tfrac1{\sqrt2}(\vert 01\rangle-\vert 10\rangle)$ 로 얽힌 상태다. 큐비트마다의 상태의 곱 $\vert a\rangle\otimes\vert b\rangle$ 에서는 $\langle X\_1X\_2\rangle=x\_ax\_b$, $\langle Z\_1Z\_2\rangle=z\_az\_b$ 이고, 각 큐비트의 $(x,z)$ 가 길이 $1$ 이하인 벡터이므로 합이 $-1$ 이상이다. 가장 작은 고윳값을 보이는 증명서는 얽힌 양자 상태여야 하고, 검사하는 쪽은 그 상태에서 $H$ 의 에너지를 측정한다.

# 정의

## QMA

언어 $L$ 이 **QMA**(quantum Merlin–Arthur) 에 속한다는 것은 다항식 크기의 [양자 회로](quantum-circuits.md)로 된 검증자 $V$ 가 있어 다음이 성립하는 것이다.

- $x\in L$ 이면 큐비트 다항식 개의 상태 $\vert\xi\rangle$ 이 있어 $V$ 가 $(x,\vert\xi\rangle)$ 을 확률 $2/3$ 이상으로 받아들인다.
- $x\notin L$ 이면 모든 상태 $\vert\xi\rangle$ 에 대해 $V$ 가 확률 $1/3$ 이하로 받아들인다.

$\vert\xi\rangle$ 을 증명서(witness)라 한다. 증명서를 비트열로 제한하고 검증자를 확률적 고전 회로로 바꾸면 NP(nondeterministic polynomial time)를 포함하는 부류 MA(Merlin–Arthur)가 된다.

## 국소 해밀토니언 문제

$n$ 큐비트의 $k$-국소 해밀토니언 $H=\sum\_{j=1}^LH\_j$ 를 생각한다. 여기서 $L$ 은 $n$ 의 다항식이고 각 $H\_j$ 는 큐비트 $k$ 개 이하에 작용하며 $0\le H\_j\le I$ 이다. 실수 $a\lt b$ 가 $b-a\ge 1/\mathrm{poly}(n)$ 을 만족할 때, $H$ 의 가장 작은 고윳값 $\lambda\_0(H)$ 에 대해 다음 둘 가운데 어느 쪽인지 판정하는 문제를 **$k$-국소 해밀토니언 문제** 라 한다.

- $\lambda\_0(H)\le a$
- $\lambda\_0(H)\ge b$

둘 다 아닌 입력은 주어지지 않는다고 약속한다. 직관 절의 $H$ 는 $k=2$ 이고, 항을 $(I+X\_1X\_2)/2$ 와 $(I+Z\_1Z\_2)/2$ 로 옮기면 $0\le H\_j\le I$ 를 만족한다.

# 성질

## QMA 소속

$k$-국소 해밀토니언 문제는 QMA 에 속한다. 증명서로 바닥 상태를 받고, $j$ 를 무작위로 골라 $H\_j$ 의 고유기저로 측정해 그 항의 에너지를 확률로 어림한다. 받아들일 확률이 $1-\langle\xi\vert H\vert\xi\rangle/L$ 이므로 $a$ 와 $b$ 사이의 차가 확률의 차 $(b-a)/L$ 이 되고, 되풀이로 이 차를 키운다.

## Kitaev 정리

정리. $5$-국소 해밀토니언 문제는 QMA 완전(QMA-complete)이다[^1].

증명의 요지. QMA 검증 회로 $U\_T\cdots U\_1$ 에 대해 시계 레지스터를 덧붙여 다음 이력 상태(history state)를 만든다.

$$
\vert\eta\rangle=\frac1{\sqrt{T+1}}\sum_{t=0}^{T}U_t\cdots U_1\vert\xi,0\cdots 0\rangle\otimes\vert t\rangle
$$

해밀토니언은 네 항의 합이다. 입력 항은 시각 $0$ 에서 보조 큐비트가 $0$ 이 아니면 벌점을, 전파 항은 시각 $t$ 와 $t+1$ 의 성분이 $U\_{t+1}$ 로 이어지지 않으면 벌점을, 출력 항은 시각 $T$ 에서 거부하면 벌점을, 시계 항은 시계 레지스터가 올바른 꼴이 아니면 벌점을 준다.

받아들일 확률이 크면 $\vert\eta\rangle$ 의 에너지가 작다. 받아들일 확률이 작으면 전파 항의 간격 $\Omega(1/T^2)$ 를 써서 모든 상태의 에너지가 $\Omega(1/T^3)$ 이상임을 보인다. 이 구성은 Feynman 의 시계 구성에서 나왔다.

## 국소성의 축소

Kempe, Kitaev, Regev 는 섭동 이론(perturbation theory)으로 $2$-국소 해밀토니언 문제가 QMA 완전임을 보였다[^2]. $1$-국소 해밀토니언은 큐비트마다 독립인 항의 합이므로 각 항의 가장 작은 고윳값을 더하면 되고, 다항식 시간에 풀린다. 큐비트 대신 $12$ 개의 상태를 가진 입자를 한 줄로 놓은 최근접 상호작용의 해밀토니언에서도 문제가 QMA 완전이다[^3].

## 고전 문제의 포함

$H$ 의 항이 모두 대각 행렬이면 고유벡터가 계산 기저이고, 문제는 비용 함수의 최솟값을 판정하는 고전 제약 충족 문제가 된다. $2$-국소 해밀토니언 문제는 최대 2-충족 가능성 문제(MAX-2-SAT, maximum 2-satisfiability)를 포함한다. MAX-2-SAT 는 NP 난해하므로([NP-완전성과 Cook–Levin 정리](np-completeness.md)) $2$-국소 해밀토니언 문제도 NP 난해하다.

## 양자 PCP 추측

[PCP 정리](pcp-theorem.md)(probabilistically checkable proof)는 제약 충족 문제의 근사가 $b-a$ 를 항 수의 상수배로 둘 때에도 NP 난해하다는 정리다. 양자 PCP 추측(quantum PCP conjecture)은 $b-a\ge cL$ 인 국소 해밀토니언 문제가 상수 $c\gt 0$ 에서도 QMA 난해하다는 진술이다. 이 추측의 필요조건으로, 에너지가 $cL$ 이하인 모든 상태를 만드는 데 깊이가 커지는 회로가 필요한 해밀토니언의 족이 있다는 NLTS(no low-energy trivial states) 정리가 증명되었다[^4].

# 활용

- 바닥 에너지 계산의 한계. 분자와 물질의 바닥 에너지를 구하는 문제를 일반적인 경우에 효율적으로 푸는 양자 알고리즘이 있다면 QMA 가 BQP(bounded-error quantum polynomial time)에 들어간다. 따라서 [변분 양자 고유값 풀이](variational-quantum-eigensolver.md)와 [양자 위상 추정](quantum-phase-estimation.md)으로 바닥 에너지를 구할 때는 바닥 상태와 겹침이 큰 초기 상태를 가정한다.
- [단열 양자 계산](adiabatic-quantum-computation.md)과 회로 모형의 동치 증명은 같은 이력 상태 구성을 쓴다.
- 해밀토니언 복잡도. 국소 해밀토니언의 분류(교환하는 항, 확률적 해밀토니언)에 따라 문제가 NP, MA, QMA 가운데 어디에 완전한지를 정하는 연구가 이어졌다[^5].

[^1]: A. Yu. Kitaev, A. H. Shen, M. N. Vyalyi, *Classical and Quantum Computation*, Graduate Studies in Mathematics 47, American Mathematical Society, 2002, 14 장.
[^2]: J. Kempe, A. Kitaev, O. Regev, The complexity of the local Hamiltonian problem, *SIAM Journal on Computing* 35 (2006), 1070–1097.
[^3]: D. Aharonov, D. Gottesman, S. Irani, J. Kempe, The power of quantum systems on a line, *Communications in Mathematical Physics* 287 (2009), 41–65.
[^4]: A. Anshu, N. P. Breuckmann, C. Nirkhe, NLTS Hamiltonians from good quantum codes, *Proceedings of STOC 2023*, 1090–1096.
[^5]: T. Cubitt, A. Montanaro, Complexity classification of local Hamiltonian problems, *SIAM Journal on Computing* 45 (2016), 268–316.

# 연관 문서

## 선수지식

- [해밀토니언 시뮬레이션](hamiltonian-simulation.md)
- [NP-완전성과 Cook–Levin 정리](np-completeness.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #linear_algebra
