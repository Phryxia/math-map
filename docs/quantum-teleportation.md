# 양자 순간이동

# 개요

**양자 순간이동(quantum teleportation)** 은 얽힌 큐비트 쌍을 미리 나눠 가진 두 사람이 고전 비트 두 개만 보내서 큐비트 하나의 상태를 옮기는 규약이다. 앨리스가 가진 큐비트의 상태가 $\tfrac35\vert 0\rangle+\tfrac45\vert 1\rangle$ 이라 해도, 측정하면 $0$ 이나 $1$ 하나만 나오고 상태는 그 결과로 바뀌므로 앨리스는 $\tfrac35$ 과 $\tfrac45$ 를 알아내 전화로 불러 줄 수 없다. 양자 순간이동에서는 앨리스가 자기 큐비트와 쌍의 한쪽을 함께 측정해 나온 두 비트를 보내고, 밥이 그 비트에 따라 자기 쪽 큐비트에 게이트를 걸면 밥의 큐비트가 처음 상태가 된다.

# 직관

앨리스의 큐비트를 $\vert\psi\rangle=\alpha\vert 0\rangle+\beta\vert 1\rangle$ 이라 한다. 이 큐비트 하나를 측정하면 $0$ 이 확률 $\vert\alpha\vert^2$ 로 나오고, 측정 뒤의 상태는 $\vert 0\rangle$ 이다. 같은 상태가 여러 개 있으면 측정을 되풀이해 $\vert\alpha\vert^2$ 를 어림할 수 있지만, 하나뿐이면 측정 한 번으로 끝나고 $\alpha,\beta$ 는 알 수 없다.

앨리스와 밥이 [양자 회로](quantum-circuits.md)의 두 큐비트 상태 $\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 을 하나씩 나눠 가졌다고 하자. 큐비트를 앨리스의 $\vert\psi\rangle$, 앨리스 쪽 반쪽, 밥 쪽 반쪽 순서로 적으면 세 큐비트의 상태는

$$
\tfrac1{\sqrt 2}\big(\alpha\vert 000\rangle+\alpha\vert 011\rangle+\beta\vert 100\rangle+\beta\vert 111\rangle\big)
$$

이다. 앨리스가 첫 큐비트를 제어로 둘째 큐비트에 CNOT(controlled-NOT) 게이트를 걸고 첫 큐비트에 $H$ 를 건 뒤 앞의 두 큐비트로 묶어 다시 적으면

$$
\tfrac12\Big(\vert 00\rangle(\alpha\vert 0\rangle+\beta\vert 1\rangle)+\vert 01\rangle(\alpha\vert 1\rangle+\beta\vert 0\rangle)+\vert 10\rangle(\alpha\vert 0\rangle-\beta\vert 1\rangle)+\vert 11\rangle(\alpha\vert 1\rangle-\beta\vert 0\rangle)\Big)
$$

이 된다. 앨리스가 앞의 두 큐비트를 측정하면 네 결과가 각각 확률 $1/4$ 로 나오고, 밥의 큐비트는 그 결과에 붙은 상태가 된다. 결과가 $00$ 이면 밥은 이미 $\vert\psi\rangle$ 을 가졌고, $01$ 이면 $\vert 0\rangle$ 과 $\vert 1\rangle$ 을 맞바꾸면, $10$ 이면 $\vert 1\rangle$ 의 부호를 뒤집으면, $11$ 이면 둘 다 하면 $\vert\psi\rangle$ 이 된다. 밥은 앨리스가 보낸 두 비트로 이 넷 가운데 무엇을 할지 정한다.

# 정의

## Pauli 게이트

$X=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 는 $\vert 0\rangle$ 과 $\vert 1\rangle$ 을 맞바꾸고, $Z=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}$ 는 $\vert 1\rangle$ 의 부호를 뒤집는다. 직관 절에서 밥이 받는 네 상태는

$$
\vert\psi\rangle,\quad X\vert\psi\rangle,\quad Z\vert\psi\rangle,\quad XZ\vert\psi\rangle
$$

이다.

## Bell 기저

두 큐비트의 정규직교기저

$$
\vert\Phi^\pm\rangle=\tfrac1{\sqrt 2}(\vert 00\rangle\pm\vert 11\rangle),\qquad\vert\Psi^\pm\rangle=\tfrac1{\sqrt 2}(\vert 01\rangle\pm\vert 10\rangle)
$$

를 **Bell 기저(Bell basis)** 라 한다. 첫 큐비트를 제어로 CNOT 을 걸고 첫 큐비트에 $H$ 를 걸면 $\vert\Phi^+\rangle,\vert\Psi^+\rangle,\vert\Phi^-\rangle,\vert\Psi^-\rangle$ 이 차례로 $\vert 00\rangle,\vert 01\rangle,\vert 10\rangle,\vert 11\rangle$ 로 간다. 이 회로 뒤에 계산 기저로 측정하는 것을 **Bell 측정(Bell measurement)** 이라 한다. 직관 절에서 앨리스가 한 일이 첫 두 큐비트의 Bell 측정이다.

## 규약

앨리스와 밥이 $\vert\Phi^+\rangle$ 을 나눠 가지고, 앨리스에게 상태 $\vert\psi\rangle$ 인 큐비트가 있다. 규약은 다음 세 단계다[^1].

1. 앨리스가 $\vert\psi\rangle$ 의 큐비트와 자기 쪽 반쪽을 Bell 측정해 비트 $m\_1m\_2$ 를 얻는다.
2. 앨리스가 $m\_1m\_2$ 를 고전 통신으로 밥에게 보낸다.
3. 밥이 자기 큐비트에 $X^{m\_2}$ 를 걸고 이어서 $Z^{m\_1}$ 을 건다.

1단계 뒤 밥의 큐비트는 $X^{m\_2}Z^{m\_1}\vert\psi\rangle$ 이므로 3단계 뒤 $Z^{m\_1}X^{m\_2}X^{m\_2}Z^{m\_1}\vert\psi\rangle=\vert\psi\rangle$ 이다. 개요의 $\tfrac35\vert 0\rangle+\tfrac45\vert 1\rangle$ 에서 $m\_1m\_2=11$ 이 나오면 밥의 큐비트는 $\tfrac35\vert 1\rangle-\tfrac45\vert 0\rangle$ 이고, $X$ 를 걸면 $\tfrac35\vert 0\rangle-\tfrac45\vert 1\rangle$, $Z$ 를 걸면 $\tfrac35\vert 0\rangle+\tfrac45\vert 1\rangle$ 이다.

# 성질

## 측정 결과의 분포

네 측정 결과의 확률은 $\alpha,\beta$ 와 무관하게 $1/4$ 씩이다. 앨리스가 보내는 두 비트에는 $\vert\psi\rangle$ 에 대한 정보가 없고, 그 비트를 엿본 사람도 $\alpha,\beta$ 를 알 수 없다. 측정 뒤 앨리스의 두 큐비트는 $\vert m\_1m\_2\rangle$ 이라 앨리스 쪽에서 $\vert\psi\rangle$ 은 사라진다.

## 복제 불가능 정리

모든 $\vert\psi\rangle$ 에 대해 $U(\vert\psi\rangle\otimes\vert 0\rangle)=\vert\psi\rangle\otimes\vert\psi\rangle$ 인 유니터리 $U$ 는 없다. 이것을 **복제 불가능 정리(no-cloning theorem)** 라 한다[^2]. 그런 $U$ 가 있으면 두 상태 $\vert\psi\rangle,\vert\phi\rangle$ 의 내적이 $U$ 로 보존되어 $\langle\psi\vert\phi\rangle=\langle\psi\vert\phi\rangle^2$ 이고, 내적이 $0$ 이나 $1$ 인 상태들만 복제된다. 순간이동 뒤 앨리스 쪽의 $\vert\psi\rangle$ 이 사라지는 것은 이 정리와 맞는다. 상태는 옮겨질 뿐 늘어나지 않는다.

## 고전 통신의 역할

2단계의 비트를 받기 전 밥의 큐비트는 네 상태 $X^{m\_2}Z^{m\_1}\vert\psi\rangle$ 이 확률 $1/4$ 씩 섞인 것이다. 단위벡터 $\vert u\rangle$ 마다

$$
\frac14\sum_{m\_1,m\_2}\big\vert\langle u\vert X^{m\_2}Z^{m\_1}\vert\psi\rangle\big\vert^2=\frac12
$$

이므로 밥이 어느 기저로 측정해도 결과가 반반이고, $\vert\psi\rangle$ 이 무엇이든 밥이 보는 분포가 같다. 그래서 고전 통신 없이는 아무것도 전해지지 않고, 이것은 [Bell 부등식](bell-inequality.md)의 신호 불가능성과 같은 사실이다. 고전 비트를 하나만 보내면 밥은 네 가능성 가운데 둘을 구별하지 못한다.

## 초고밀도 부호화

**초고밀도 부호화(superdense coding)** 는 $\vert\Phi^+\rangle$ 을 나눠 가진 두 사람이 큐비트 하나를 보내 고전 비트 두 개를 전하는 규약이다[^3]. 앨리스가 자기 반쪽에 $Z^{m\_1}X^{m\_2}$ 를 걸어 밥에게 보내면, 두 큐비트는 Bell 기저의 네 원소 가운데 하나가 되고 밥이 Bell 측정으로 $m\_1m\_2$ 를 읽는다.

# 활용

- 얽힘 교환. 두 쌍 $\vert\Phi^+\rangle$ 가운데 한 쌍의 반쪽을 다른 쌍의 반쪽으로 순간이동하면, 서로 만난 적이 없는 두 큐비트가 얽힌 쌍이 된다(entanglement swapping). 먼 거리의 얽힘을 짧은 구간의 쌍을 이어 만드는 양자 중계기가 이것을 쓴다.
- 게이트 순간이동. 게이트 $T$ 를 직접 걸기 어려울 때, 미리 만든 상태 $T\vert +\rangle$ 와 Clifford 게이트, 측정만으로 $T$ 를 거는 것과 같은 결과를 얻는다[^4]. 여기서 $\vert +\rangle=\tfrac1{\sqrt 2}(\vert 0\rangle+\vert 1\rangle)$ 이다. [양자 오류정정부호](quantum-error-correction.md) 위의 계산은 Clifford 게이트를 부호 위에서 직접 걸고, $T$ 는 이 방법으로 건다.

[^1]: C. H. Bennett, G. Brassard, C. Crépeau, R. Jozsa, A. Peres, W. K. Wootters, Teleporting an unknown quantum state via dual classical and Einstein–Podolsky–Rosen channels, *Physical Review Letters* 70 (1993), 1895–1899.
[^2]: W. K. Wootters, W. H. Zurek, A single quantum cannot be cloned, *Nature* 299 (1982), 802–803.
[^3]: C. H. Bennett, S. J. Wiesner, Communication via one- and two-particle operators on Einstein–Podolsky–Rosen states, *Physical Review Letters* 69 (1992), 2881–2884.
[^4]: D. Gottesman, I. L. Chuang, Demonstrating the viability of universal quantum computation using teleportation and single-qubit operations, *Nature* 402 (1999), 390–393.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)

## 더 알아보기

- [마법 상태 증류](magic-state-distillation.md)
- [측정 기반 양자 계산](measurement-based-quantum-computation.md)

#computation #linear_algebra
