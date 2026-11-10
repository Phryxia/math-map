# 양자 채널

# 개요

**양자 채널(quantum channel)** 은 [밀도 행렬](density-matrix.md)을 밀도 행렬로 보내는 변환 가운데, 다른 계와 함께 놓아도 밀도 행렬을 밀도 행렬로 보내는 선형 사상이다. 큐비트를 메모리에 두었더니 확률 $p$ 로 $\vert 0\rangle$ 과 $\vert 1\rangle$ 이 뒤바뀐다면, 이 변화는 유니터리 하나로 적히지 않는다. 양자 채널은 이런 잡음을 $\rho\mapsto(1-p)\rho+pX\rho X$ 처럼 행렬 몇 개의 합으로 적고, 남는 상태와 잃는 정보를 그 식으로 계산한다.

# 직관

메모리의 큐비트 상태가 $\rho$ 이고 확률 $p$ 로 $X=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 가 걸린다. 걸리지 않으면 $\rho$ 그대로, 걸리면 $X\rho X$ 이므로 꺼낸 큐비트의 밀도 행렬은

$$
\Phi(\rho)=(1-p)\rho+pX\rho X
$$

다. $\rho=\vert 0\rangle\langle 0\vert$ 이면 $\Phi(\rho)=(1-p)\vert 0\rangle\langle 0\vert+p\vert 1\rangle\langle 1\vert$ 이 되어 측정에서 $1$ 이 확률 $p$ 로 나온다. $\rho=\vert +\rangle\langle +\vert$ 이면 $X\vert +\rangle=\vert +\rangle$ 이라 $\Phi(\rho)=\rho$ 이고, 이 상태는 잡음의 영향을 받지 않는다.

$\Phi$ 는 $\rho$ 에 대해 선형이고, [고윳값](eigenvalues.md)이 $0$ 이상인 대각합 $1$ 의 행렬을 같은 꼴로 보낸다. 큐비트가 다른 큐비트와 얽혀 있어도, 메모리 쪽 큐비트에만 $\Phi$ 가 걸린 결과 $(\Phi\otimes\mathrm{id})(\rho\_{AB})$ 가 밀도 행렬이어야 한다.

# 정의

## 완전 양성 대각합 보존 사상

$d\times d$ 복소 행렬의 공간 $M\_d$ 에서 $M\_{d'}$ 로 가는 선형 사상 $\Phi$ 가 고윳값이 $0$ 이상인 에르미트 행렬을 같은 꼴로 보내면 **양성(positive)** 이라 한다. 모든 $k$ 에 대해 $\Phi\otimes\mathrm{id}\_k$ 가 양성이면 **완전 양성(completely positive)** 이라 한다. 완전 양성이고 대각합을 보존하는 사상을 **양자 채널** 이라 한다. 직관 절의 $\Phi$ 는 양자 채널이다.

전치 $T(\rho)=\rho^{\mathsf T}$ 는 양성이고 대각합을 보존하지만 완전 양성은 아니다. $\vert\Phi^+\rangle=\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 에서 $(T\otimes\mathrm{id})(\vert\Phi^+\rangle\langle\Phi^+\vert)$ 는 두 큐비트를 맞바꾸는 행렬의 $\tfrac12$ 배이고, 고윳값 $-\tfrac12$ 를 가진다.

## Kraus 표현

행렬 $E\_k\in M\_{d'\times d}$ 들이 $\sum_kE\_k^\dagger E\_k=I$ 를 만족할 때

$$
\Phi(\rho)=\sum_kE_k\rho E_k^\dagger
$$

를 $\Phi$ 의 **Kraus 표현(Kraus representation)** 이라 하고 $E\_k$ 를 **Kraus 연산자(Kraus operators)** 라 한다. 직관 절의 채널은 $E\_0=\sqrt{1-p}\thinspace I$, $E\_1=\sqrt p\thinspace X$ 다. 큐비트에서 $\Phi\_{\mathrm{dep}}(\rho)=(1-p)\rho+p\cdot\tfrac12 I$ 를 **탈분극 채널(depolarizing channel)** 이라 한다.

## Choi 행렬

다음 $J(\Phi)$ 를 $\Phi$ 의 **Choi 행렬(Choi matrix)** 이라 한다.

$$
J(\Phi)=\sum_{i,j}\vert i\rangle\langle j\vert\otimes\Phi(\vert i\rangle\langle j\vert)
$$

이 행렬은 $\vert\Phi^+\rangle\langle\Phi^+\vert$ 의 둘째 큐비트에 $\Phi$ 를 건 결과의 $2$ 배이고, 직관 절의 채널에서는 다음과 같다.

$$
J(\Phi)=2(1-p)\vert\Phi^+\rangle\langle\Phi^+\vert+2p\vert\Psi^+\rangle\langle\Psi^+\vert
$$

여기서 $\vert\Psi^+\rangle=\tfrac1{\sqrt 2}(\vert 01\rangle+\vert 10\rangle)$ 이다.

# 성질

## Choi 정리

선형 사상 $\Phi$ 가 완전 양성인 것은 $J(\Phi)$ 의 고윳값이 모두 $0$ 이상인 것과 동치다[^1]. $J(\Phi)=\sum_k\vert v\_k\rangle\langle v\_k\vert$ 로 분해하고 각 $\vert v\_k\rangle$ 을 $d'\times d$ 행렬로 다시 배열하면 Kraus 연산자가 나온다. 그래서 완전 양성 사상은 모두 Kraus 표현을 가지고, Kraus 연산자는 $dd'$ 개 이하로 충분하다. 직관 절의 Choi 행렬은 고윳값이 $2(1-p)$ 와 $2p$ 라 $0$ 이상이다.

## Stinespring 확장

양자 채널 $\Phi$ 마다 보조계 $E$ 와 등거리 사상 $V:\mathbb C^d\to\mathbb C^{d'}\otimes\mathbb C^{d\_E}$ 가 있어

$$
\Phi(\rho)=\mathrm{tr}\_E\thinspace(V\rho V^\dagger)
$$

다(Stinespring 확장, Stinespring dilation)[^2]. Kraus 연산자로는 $V\vert\psi\rangle=\sum_kE\_k\vert\psi\rangle\otimes\vert k\rangle$ 이다. 직관 절의 채널은 보조 큐비트를 $\sqrt{1-p}\vert 0\rangle+\sqrt p\vert 1\rangle$ 로 두고 그 큐비트를 제어로 CNOT(controlled-NOT)을 건 뒤 보조 큐비트를 버린 것과 같다. 모든 잡음은 큰 계의 유니터리에서 일부를 버린 것이다.

## Bloch 공 위의 작용

큐비트의 밀도 행렬을 Bloch 벡터 $(x,y,z)$ 로 쓰면, 직관 절의 채널은 $(x,y,z)\mapsto(x,(1-2p)y,(1-2p)z)$ 이고 탈분극 채널은 $(x,y,z)\mapsto(1-p)(x,y,z)$ 다. 큐비트 채널은 Bloch 공을 그 안의 타원체로 보내는 아핀 사상이다. $\vert +\rangle$ 의 Bloch 벡터 $(1,0,0)$ 이 직관 절의 채널에서 움직이지 않는다.

## 정보의 단조성

채널은 구별 가능성을 늘리지 않는다. 두 밀도 행렬의 대각합 거리 $\tfrac12\Vert\rho-\sigma\Vert\_1$ 은 채널을 거치면 줄거나 같고, 앙상블의 Holevo 정보량도 채널을 거치면 줄거나 같다. [Holevo 한계](holevo-bound.md)의 증명이 이 단조성을 쓴다.

# 활용

- 오류정정. [양자 오류정정부호](quantum-error-correction.md)의 Knill–Laflamme 조건은 Kraus 연산자 $E\_k$ 에 대해 $PE\_k^\dagger E\_lP=c\_{kl}P$ 꼴로 쓰이고, 이를 만족하는 채널은 복원 채널로 되짚을 수 있다.
- 통신 용량. 채널 $\Phi$ 로 고전 정보를 보내는 용량은 $\Phi^{\otimes n}$ 출력의 Holevo 정보량 최댓값을 $n$ 으로 나눈 극한이다. 한 번 쓸 때의 값을 더해서는 얻어지지 않는 채널이 있다[^3].
- 양자 키 분배. [양자 키 분배](quantum-key-distribution.md)의 도청은 앨리스에게서 밥으로 가는 채널의 Stinespring 확장에서 보조계를 도청자가 가진 것으로 적힌다.

[^1]: M.-D. Choi, Completely positive linear maps on complex matrices, *Linear Algebra and its Applications* 10 (1975), 285–290.
[^2]: W. F. Stinespring, Positive functions on C\*-algebras, *Proceedings of the American Mathematical Society* 6 (1955), 211–216.
[^3]: M. B. Hastings, Superadditivity of communication capacity using entangled inputs, *Nature Physics* 5 (2009), 255–257.

# 연관 문서

## 선수지식

- [밀도 행렬](density-matrix.md)

## 더 알아보기

- [무작위 벤치마킹](randomized-benchmarking.md)

#computation #linear_algebra #information_theory
