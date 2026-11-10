# 얽힘의 일부일처성

# 개요

**얽힘의 일부일처성(monogamy of entanglement)** 은 한 큐비트가 다른 큐비트와 얽힌 정도가 클수록 셋째 큐비트와는 덜 얽힐 수밖에 없다는 성질이다. 앨리스의 큐비트가 밥의 큐비트와 $\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 을 이루고 있으면, 찰리가 어떤 큐비트를 가져와도 앨리스와 찰리 사이에는 얽힘이 없다. 이 성질은 두 큐비트 사이의 얽힘을 공존도라는 수로 재고, 세 쌍의 공존도 사이의 부등식 하나로 적힌다.

# 직관

앨리스와 밥이 $\vert\Phi^+\rangle$ 에 있으면 두 사람의 상태는 순수 상태다. 순수 상태는 다른 계와 곱으로만 합쳐지므로 셋의 상태는 $\vert\Phi^+\rangle\_{AB}\otimes\vert\gamma\rangle\_C$ 이고, 앨리스와 찰리의 상태는 $\tfrac12 I\otimes\vert\gamma\rangle\langle\gamma\vert$ 라 분리 가능하다.

[다자간 얽힘](multipartite-entanglement.md)의 W 상태에서는 앨리스가 밥과도 찰리와도 얽혀 있다. 대신 각 쌍의 얽힘은 $\vert\Phi^+\rangle$ 보다 약하다. 앨리스와 밥의 상태는 $\tfrac13\vert 00\rangle\langle 00\vert+\tfrac23\vert\Psi^+\rangle\langle\Psi^+\vert$ 로, 섞인 $\vert 00\rangle$ 때문에 완전한 얽힌 쌍이 아니다. 앨리스가 나눠 줄 수 있는 얽힘의 총량이 정해져 있고 쌍마다 그것을 나눠 쓴다.

# 정의

## 공존도

두 큐비트 [밀도 행렬](density-matrix.md) $\rho$ 에 대해 $\tilde\rho=(Y\otimes Y)\thinspace\overline\rho\thinspace(Y\otimes Y)$ 로 두고, $\rho\tilde\rho$ 의 [고윳값](eigenvalues.md)의 제곱근을 큰 순서로 $\lambda\_1\ge\lambda\_2\ge\lambda\_3\ge\lambda\_4$ 라 하면

$$
C(\rho)=\max(0,\thinspace\lambda_1-\lambda_2-\lambda_3-\lambda_4)
$$

를 $\rho$ 의 **공존도(concurrence)** 라 한다[^1]. $\overline\rho$ 는 계산 기저에서 성분마다 켤레복소수를 취한 행렬이다. 순수 상태 $\vert\psi\rangle$ 에서는 진폭 행렬 $M$ 으로 $C=2\vert\det M\vert$ 이다. $\vert\Phi^+\rangle$ 은 $C=1$, 곱 상태는 $C=0$ 이다.

계산 기저에서 $\vert 00\rangle\langle 11\vert$, $\vert 01\rangle\langle 10\vert$ 자리와 대각 성분만 $0$ 이 아닌 상태는

$$
C=2\max\big(0,\thinspace\vert\rho_{01,10}\vert-\sqrt{\rho_{00,00}\rho_{11,11}},\thinspace\vert\rho_{00,11}\vert-\sqrt{\rho_{01,01}\rho_{10,10}}\big)
$$

이다. 직관 절의 W 상태의 두 큐비트는 $\rho\_{01,10}=\tfrac13$, $\rho\_{11,11}=0$ 이라 $C=\tfrac23$ 이다.

## 한 큐비트와 나머지의 공존도

세 큐비트의 순수 상태에서 $A$ 와 $BC$ 를 두 계로 보고 $C\_{A(BC)}^2=4\det\rho\_A$ 로 둔다. $\rho\_A$ 의 고윳값이 $\mu$, $1-\mu$ 이면 $4\mu(1-\mu)$ 이고, $A$ 가 나머지와 곱이면 $0$, $\rho\_A=\tfrac12 I$ 이면 $1$ 이다.

# 성질

## CKW 부등식

세 큐비트의 순수 상태에서

$$
C_{AB}^2+C_{AC}^2\le C_{A(BC)}^2
$$

이다(CKW 부등식, Coffman–Kundu–Wootters inequality)[^2]. $C\_{AB}$ 는 $\rho\_{AB}=\mathrm{tr}\_C\vert\psi\rangle\langle\psi\vert$ 의 공존도다. W 상태는 $C\_{AB}^2=C\_{AC}^2=\tfrac49$, $\rho\_A=\mathrm{diag}(\tfrac23,\tfrac13)$ 이라 $C\_{A(BC)}^2=\tfrac89$ 로 등호가 성립한다. GHZ(Greenberger–Horne–Zeilinger) 상태는 $C\_{AB}=C\_{AC}=0$, $C\_{A(BC)}^2=1$ 이다.

## 3 얽힘량

CKW 부등식의 두 변의 차

$$
\tau=C_{A(BC)}^2-C_{AB}^2-C_{AC}^2
$$

는 Cayley 초행렬식으로 정한 3 얽힘량(three-tangle) $4\vert\mathrm{Det}(a)\vert$ 와 같다[^2]. 이 값은 $A$, $B$, $C$ 의 순서를 바꿔도 같고, 쌍의 얽힘으로 설명되지 않는 세 큐비트 전체의 얽힘을 잰다. W 상태는 $\tau=0$ 으로 얽힘이 전부 쌍에 있고, GHZ 상태는 $\tau=1$ 로 전부 셋 전체에 있다.

## 큐비트 여러 개

큐비트 $n$ 개의 순수 상태에서도 $\sum_{j\ne 1}C\_{1j}^2\le C\_{1(2\cdots n)}^2$ 이다[^3]. 한 큐비트가 나머지와 얽힌 양을 각 큐비트와의 쌍 얽힘이 나눠 가진다.

# 활용

- 양자 키 분배의 안전성. 앨리스와 밥의 쌍이 $\vert\Phi^+\rangle$ 에 가까우면 일부일처성에 따라 도청자의 큐비트와는 거의 얽혀 있지 않다. [양자 키 분배](quantum-key-distribution.md)의 얽힘 기반 안전성 증명이 이 사실을 쓴다.
- Bell 부등식. [Bell 부등식](bell-inequality.md)의 CHSH(Clauser–Horne–Shimony–Holt) 값에도 같은 꼴의 제약이 있어, $A$ 가 $B$ 와 $2$ 를 넘는 값을 내면 $C$ 와는 $2$ 를 넘지 못한다.
- 얽힘 정제. [얽힘 정제](entanglement-distillation.md)로 깨끗한 쌍을 얻으면 그 쌍은 환경과 얽혀 있지 않으므로, 정제는 환경과의 상관을 끊는 절차이기도 하다.

[^1]: W. K. Wootters, Entanglement of formation of an arbitrary state of two qubits, *Physical Review Letters* 80 (1998), 2245–2248.
[^2]: V. Coffman, J. Kundu, W. K. Wootters, Distributed entanglement, *Physical Review A* 61 (2000), 052306.
[^3]: T. J. Osborne, F. Verstraete, General monogamy inequality for bipartite qubit entanglement, *Physical Review Letters* 96 (2006), 220503.

# 연관 문서

## 선수지식

- [다자간 얽힘](multipartite-entanglement.md)

## 더 알아보기

- [얽힘 형성량](entanglement-of-formation.md)

#computation #information_theory #linear_algebra
