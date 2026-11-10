# 양자 상태 구별

# 개요

**양자 상태 구별(quantum state discrimination)** 은 알려진 상태 몇 개 가운데 어느 것이 주어졌는지를 측정 한 번으로 맞히는 문제다. 상대가 큐비트를 반반의 확률로 $\vert 0\rangle$ 이나 $\vert +\rangle$ 에 두어 건넬 때, 계산 기저로 재서 $1$ 이 나오면 $\vert +\rangle$ 이라고 확신할 수 있지만 $0$ 이 나오면 어느 쪽인지 알 수 없다. 두 상태가 직교하지 않으면 언제나 맞히는 측정은 없고, 이 문제는 맞힐 확률이 가장 큰 측정과 그 확률을 두 상태의 [밀도 행렬](density-matrix.md)의 차이로 정한다.

# 직관

개요의 두 상태를 계산 기저로 재고 $0$ 이면 $\vert 0\rangle$, $1$ 이면 $\vert +\rangle$ 이라 답한다. $\vert 0\rangle$ 이면 언제나 맞고, $\vert +\rangle$ 이면 $1$ 이 나올 확률 $\tfrac12$ 로만 맞으므로 맞힐 확률은 $\tfrac12\cdot 1+\tfrac12\cdot\tfrac12=\tfrac34$ 다.

이 측정은 $\vert 0\rangle$ 쪽으로 치우쳐 있다. 실수 평면에서 $\vert 0\rangle$ 과 $\vert +\rangle$ 은 각 $\pi/4$ 를 이루므로, 측정 기저를 두 상태의 이등분선에 대칭이 되게 $\pi/8$ 만큼 돌린다. 기저 $\vert v\_0\rangle=\cos\tfrac\pi8\vert 0\rangle-\sin\tfrac\pi8\vert 1\rangle$, $\vert v\_1\rangle=\sin\tfrac\pi8\vert 0\rangle+\cos\tfrac\pi8\vert 1\rangle$ 로 재면 $\vert\langle v\_0\vert 0\rangle\vert^2=\cos^2\tfrac\pi8$ 이고, $\vert +\rangle$ 에서는 다음과 같다.

$$
\vert\langle v\_1\vert +\rangle\vert^2=\tfrac12\Bigl(\sin\tfrac\pi8+\cos\tfrac\pi8\Bigr)^2=\cos^2\tfrac\pi8
$$

두 경우 모두 $\cos^2\tfrac\pi8=0.854$ 로 맞히고, 이것이 가장 좋은 값이다.

# 정의

## 측정과 성공 확률

양의 준정부호 행렬 $M\_1,\dots,M\_k$ 가 $\sum_iM\_i=I$ 를 만족하면 이 묶음을 **POVM**(positive operator-valued measure)이라 하고, 상태 $\rho$ 에서 결과 $i$ 가 확률 $\mathrm{tr}(M\_i\rho)$ 로 나온다. 정규직교기저 측정은 $M\_i=\vert u\_i\rangle\langle u\_i\vert$ 인 경우다. 상태 $\rho\_i$ 가 확률 $p\_i$ 로 주어지고 결과 $i$ 를 $\rho\_i$ 로 답할 때 **성공 확률(success probability)** 은

$$
P(M)=\sum_ip_i\thinspace\mathrm{tr}(M_i\rho_i)
$$

다. 직관 절의 두 측정은 $P=\tfrac34$ 와 $P=\cos^2\tfrac\pi8$ 이다.

## 대각합 거리

$\Vert A\Vert\_1$ 을 에르미트 행렬 $A$ 의 [고윳값](eigenvalues.md)의 절댓값의 합이라 할 때 $T(\rho,\sigma)=\tfrac12\Vert\rho-\sigma\Vert\_1$ 을 **대각합 거리(trace distance)** 라 한다. 개요의 두 상태의 차는 다음과 같다.

$$
\vert 0\rangle\langle 0\vert-\vert +\rangle\langle +\vert=\tfrac12\begin{pmatrix}1&-1\cr -1&-1\end{pmatrix}
$$

이 행렬의 고윳값이 $\pm\tfrac1{\sqrt 2}$ 이므로 $T=\tfrac1{\sqrt 2}$ 이다. 순수 상태 둘은 $T=\sqrt{1-\vert\langle\psi\vert\phi\rangle\vert^2}$ 이다.

## 오류 없는 구별

결과가 셋인 POVM 으로 "$\vert 0\rangle$", "$\vert +\rangle$", "모른다" 를 답하고 앞의 두 답은 결코 틀리지 않게 하는 문제를 **오류 없는 구별(unambiguous discrimination)** 이라 한다. 개요의 계산 기저 측정은 $1$ 이 나올 때만 "$\vert +\rangle$" 이라 답하면 오류가 없지만 $\vert 0\rangle$ 은 한 번도 확인하지 못한다.

# 성질

## Helstrom 한계

두 상태 $\rho$, $\sigma$ 가 확률 $p$, $1-p$ 로 주어질 때 최대 성공 확률은

$$
P_{\max}=\tfrac12\big(1+\Vert p\rho-(1-p)\sigma\Vert_1\big)
$$

이다(Helstrom 한계, Helstrom bound)[^1]. $p=\tfrac12$ 이면 $\tfrac12(1+T(\rho,\sigma))$ 이다. 최적 측정은 $p\rho-(1-p)\sigma$ 의 양의 고윳값의 고유공간으로의 사영과 그 여공간으로의 사영이다. 개요의 두 상태는 $\tfrac12(1+\tfrac1{\sqrt 2})=\cos^2\tfrac\pi8$ 이고, 고윳값 $\tfrac1{\sqrt 2}$ 의 고유벡터가 직관 절의 $\vert v\_0\rangle$ 이다.

$p\rho-(1-p)\sigma=A\_+-A\_-$ 를 양의 부분과 음의 부분으로 나누면 다음이 성립한다.

$$
P(M)=(1-p)+\mathrm{tr}\bigl(M\_1(p\rho-(1-p)\sigma)\bigr)\le(1-p)+\mathrm{tr}A\_+
$$

$M\_1$ 을 $A\_+$ 의 지지공간 위로의 사영으로 잡으면 등호가 성립한다. $\mathrm{tr}A\_+-\mathrm{tr}A\_-=2p-1$ 과 $\mathrm{tr}A\_++\mathrm{tr}A\_-=\Vert p\rho-(1-p)\sigma\Vert\_1$ 을 더하면 식이 나온다.

## 오류 없는 구별의 한계

같은 확률로 주어지는 순수 상태 $\vert\psi\rangle$, $\vert\phi\rangle$ 를 오류 없이 구별할 때 "모른다" 가 아닐 확률의 최댓값은 $1-\vert\langle\psi\vert\phi\rangle\vert$ 다(Ivanovic–Dieks–Peres 한계)[^2]. 개요의 두 상태는 $1-\tfrac1{\sqrt 2}=0.293$ 이다. 이 값을 얻는 측정은 기저 측정이 아닌 결과가 셋인 POVM 이다.

## 충실도와의 관계

순수 상태의 겹침을 넓힌 $F(\rho,\sigma)=\mathrm{tr}\sqrt{\sqrt\rho\thinspace\sigma\sqrt\rho}$ 를 **충실도(fidelity)** 라 하면([Uhlmann 정리](uhlmann-theorem.md)가 이 값을 정화의 겹침으로 준다)

$$
1-F(\rho,\sigma)\le T(\rho,\sigma)\le\sqrt{1-F(\rho,\sigma)^2}
$$

이다(Fuchs–van de Graaf 부등식, Fuchs–van de Graaf inequalities)[^3]. 순수 상태 둘은 $F=\vert\langle\psi\vert\phi\rangle\vert$ 이고 오른쪽 등호가 성립한다.

## 여러 상태

상태가 셋 이상이면 최적 측정의 닫힌 꼴은 일반적으로 없고, 최대 성공 확률은 $M\_i\succeq 0$, $\sum_iM\_i=I$ 아래 $P(M)$ 을 최대화하는 [반정부호 계획법](semidefinite-programming.md)의 값이다. $M\_i=p\_i\rho^{-1/2}\rho\_i\rho^{-1/2}$, $\rho=\sum_ip\_i\rho\_i$ 로 둔 측정을 **pretty good measurement** 라 하고, 그 성공 확률은 최적값의 제곱 이상이다[^4].

# 활용

- 양자 키 분배. [양자 키 분배](quantum-key-distribution.md)의 BB84(Bennett–Brassard 1984) 규약에서 도청자가 $\vert 0\rangle$ 과 $\vert +\rangle$ 류의 직교하지 않는 상태를 가려내는 확률은 Helstrom 한계 $\cos^2\tfrac\pi8$ 를 넘지 못한다.
- Holevo 한계. [Holevo 한계](holevo-bound.md)의 직관 절에서 $\vert 0\rangle$, $\vert +\rangle$ 앙상블로 꺼내는 정보 $0.40$ 비트를 주는 측정이 이 문서의 $\pi/8$ 기저 측정이다.
- 숨은 부분군 문제. [숨은 부분군 문제](hidden-subgroup-problem.md)의 이면체군 경우는 잉여류 상태들을 구별하는 문제이고, pretty good measurement 로 질의 수의 상한이 증명된다.
- 양자 상대 엔트로피. 사본 $n$ 개를 구별할 때 오류 확률이 줄어드는 지수가 [양자 상대 엔트로피](quantum-relative-entropy.md)와 그 대칭판인 [양자 Chernoff 한계](quantum-chernoff-bound.md)로 주어진다.

[^1]: C. W. Helstrom, *Quantum Detection and Estimation Theory*, Academic Press (1976).
[^2]: I. D. Ivanovic, How to differentiate between non-orthogonal states, *Physics Letters A* 123 (1987), 257–259.
[^3]: C. A. Fuchs, J. van de Graaf, Cryptographic distinguishability measures for quantum-mechanical states, *IEEE Transactions on Information Theory* 45 (1999), 1216–1227.
[^4]: H. Barnum, E. Knill, Reversing quantum dynamics with near-optimal quantum and classical fidelity, *Journal of Mathematical Physics* 43 (2002), 2097–2106.

# 연관 문서

## 선수지식

- [밀도 행렬](density-matrix.md)

## 더 알아보기

- [Uhlmann 정리](uhlmann-theorem.md)
- [양자 Chernoff 한계](quantum-chernoff-bound.md)

#computation #information_theory #linear_algebra
