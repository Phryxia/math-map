# 해밀토니언 시뮬레이션

# 개요

**해밀토니언 시뮬레이션(Hamiltonian simulation)** 은 큐비트 계의 시간 발전 $e^{-iHt}$ 를 작은 게이트를 이어 붙인 양자 회로로 근사하는 문제다. 큐비트 $n$ 개가 한 줄로 놓이고 이웃한 두 큐비트끼리만 상호작용하는 계에서 $H$ 의 항 하나하나는 큐비트 한두 개에만 작용하지만, $H$ 전체는 $2^n\times 2^n$ 행렬이라 $e^{-iHt}$ 를 고전 컴퓨터로 직접 계산하기 어렵다. 해밀토니언 시뮬레이션은 시간을 짧은 토막으로 잘라 토막마다 항 하나씩의 발전을 차례로 적용해 이 행렬을 근사한다.

# 직관

큐비트 하나에서 $X$ 축 회전 $e^{-iXs}$ 와 $Z$ 축 회전 $e^{-iZs}$ 만 게이트로 쓸 수 있다고 한다. 여기서 $X=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$, $Z=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}$ 이다. 목표는 $H=X+Z$ 에 대한 $e^{-iHt}$ 를 $t=1$ 에서 $\vert 0\rangle$ 에 적용한 상태다.

$H^2=2I$ 이므로 [행렬 지수](matrix-exponential.md)의 급수가 $\cos$ 와 $\sin$ 으로 모인다.

$$
e^{-iHt}=\cos(\sqrt2 t)\thinspace I-\frac{i\sin(\sqrt2 t)}{\sqrt2}H
$$

$\vert 0\rangle$ 에 적용하고 측정하면 $0$ 이 나올 확률은 $1-\tfrac12\sin^2(\sqrt2 t)$ 이고, $t=1$ 에서 $0.512$ 다.

$X$ 회전과 $Z$ 회전을 한 번씩 적용한 $e^{-iXt}e^{-iZt}\vert 0\rangle$ 을 계산한다. $Z$ 회전은 $\vert 0\rangle$ 에 위상 $e^{-it}$ 만 곱하고, $X$ 회전이 그 결과를 $\cos t\vert 0\rangle-i\sin t\vert 1\rangle$ 로 보낸다. $0$ 이 나올 확률은 $\cos^2 1=0.292$ 로 $0.512$ 와 다르다. $XZ\ne ZX$ 이므로 $e^{-i(X+Z)t}$ 와 $e^{-iXt}e^{-iZt}$ 가 같지 않다.

두 회전을 한 번에 $t$ 만큼 하지 않고 $t/r$ 씩 번갈아 $r$ 번 한다. 다음 표는 $(e^{-iXt/r}e^{-iZt/r})^r\vert 0\rangle$ 에서 $0$ 이 나올 확률과, 행렬 $(e^{-iXt/r}e^{-iZt/r})^r$ 와 $e^{-iHt}$ 의 차이를 작용소 노름으로 잰 값이다.

| r   | 0 이 나올 확률 | 행렬의 차이 |
| --- | -------------- | ----------- |
| 1   | 0.292          | 0.799       |
| 2   | 0.455          | 0.362       |
| 4   | 0.498          | 0.176       |
| 10  | 0.510          | 0.070       |
| 100 | 0.512          | 0.007       |

토막 수 $r$ 을 열 배로 늘리면 차이가 열 배로 준다. 이 계산은 [Lie–Trotter 곱 공식](lie-trotter-formula.md)이고, 게이트 $2r$ 개로 된 [양자 회로](quantum-circuits.md)다. 큐비트가 $n$ 개이고 $H$ 가 큐비트 한두 개에 작용하는 항들의 합이어도 같은 방법으로 항마다 게이트 하나씩을 번갈아 적용한다.

# 정의

## 해밀토니언과 시간 발전

큐비트 $n$ 개의 **해밀토니언(Hamiltonian)** 은 $2^n\times 2^n$ 에르미트 행렬(Hermitian matrix) $H$ 이고, 시간 $t$ 의 **시간 발전(time evolution)** 은 유니터리 행렬 $e^{-iHt}$ 다. 상태 $\vert\psi(t)\rangle=e^{-iHt}\vert\psi(0)\rangle$ 는 Schrödinger 방정식(Schrödinger equation) $i\frac{d}{dt}\vert\psi(t)\rangle=H\vert\psi(t)\rangle$ 의 해다. 직관 절에서는 $n=1$, $H=X+Z$ 다.

## 국소 해밀토니언

다음 꼴의 해밀토니언을 **$k$-국소 해밀토니언($k$-local Hamiltonian)** 이라 한다.

$$
H=\sum_{j=1}^{L}H_j,\qquad \Vert H_j\Vert\le 1
$$

각 $H\_j$ 는 큐비트 $k$ 개 이하에만 작용하는 에르미트 행렬과 나머지 큐비트의 항등행렬의 [텐서곱](tensor-products.md)이다. 직관 절의 $H$ 는 $k=1$, $L=2$, $H\_1=X$, $H\_2=Z$ 다. 큐비트 $n$ 개를 한 줄로 놓은 다음 해밀토니언은 $k=2$, $L=2n-1$ 이다. 여기서 $Z\_j$, $X\_j$ 는 $j$ 번째 큐비트에만 $Z$, $X$ 를 적용하는 행렬이다.

$$
H=\sum_{j=1}^{n-1}Z_jZ_{j+1}+\sum_{j=1}^{n}X_j
$$

이것을 횡자기장 [Ising 모형](ising-model.md)(transverse-field Ising model)이라 한다.

## 시뮬레이션 문제

해밀토니언 $H$, 시간 $t$, 허용 오차 $\varepsilon$ 이 주어졌을 때 $\Vert V-e^{-iHt}\Vert\le\varepsilon$ 인 양자 회로 $V$ 를 만드는 문제를 **해밀토니언 시뮬레이션** 이라 한다. 노름은 작용소 노름(operator norm)이다. 직관 절의 표에서 $\varepsilon=0.1$ 이면 $r=10$ 인 회로가 답이다.

## 곱 공식

$H=\sum\_jH\_j$ 에 대해 다음 회로를 **1차 곱 공식(first-order product formula)** 또는 Trotter 회로라 한다.

$$
V_1(t/r)^r,\qquad V_1(s)=e^{-iH_1s}e^{-iH_2s}\cdots e^{-iH_Ls}
$$

순서를 대칭으로 둔 다음 회로를 **2차 곱 공식(second-order product formula)** 이라 한다.

$$
V_2(s)=e^{-iH_1s/2}\cdots e^{-iH_{L-1}s/2}\thinspace e^{-iH_Ls}\thinspace e^{-iH_{L-1}s/2}\cdots e^{-iH_1s/2}
$$

$H\_j$ 하나가 큐비트 $k$ 개에만 작용하면 $e^{-iH\_js}$ 는 크기가 $k$ 에만 의존하는 회로로 만들 수 있으므로, 곱 공식의 게이트 수는 지수의 개수 $Lr$ 에 비례한다.

# 성질

## 1차 곱 공식의 오차

정리. $H=\sum\_jH\_j$ 에 대해 다음이 성립한다[^1]. 여기서 $\lbrack A,B\rbrack=AB-BA$ 는 교환자(commutator)다.

$$
\big\Vert e^{-iHt}-V_1(t/r)^r\big\Vert\le\frac{t^2}{2r}\sum_{j\lt k}\big\Vert\lbrack H_j,H_k\rbrack\big\Vert
$$

증명의 요지. 한 토막의 오차 $\Vert e^{-iHs}-V\_1(s)\Vert$ 는 두 지수의 Taylor 전개가 $s^2$ 항의 교환자에서 처음 갈리므로 $\frac{s^2}2\sum\_{j\lt k}\Vert\lbrack H\_j,H\_k\rbrack\Vert$ 이하다. 유니터리끼리의 곱에서 토막마다의 오차는 더해지기만 하므로 $r$ 토막의 오차는 그 $r$ 배이고, $s=t/r$ 을 넣으면 위 식이 나온다.

직관 절에서는 $\lbrack X,Z\rbrack=-2iY$ 이고 $\Vert\lbrack X,Z\rbrack\Vert=2$ 이므로 상한이 $t^2/r$ 이다. $t=1$, $r=10$ 에서 상한 $0.1$ 은 표의 $0.070$ 이상이다.

## 게이트 수

$\Vert H\_j\Vert\le 1$ 이면 $\Vert\lbrack H\_j,H\_k\rbrack\Vert\le 2$ 이고, 오차를 $\varepsilon$ 이하로 두는 토막 수는 $r=O(L^2t^2/\varepsilon)$ 이다. 따라서 1차 곱 공식의 게이트 수는 $O(L^3t^2/\varepsilon)$ 이고, $n$, $t$, $1/\varepsilon$ 의 다항식이다[^2].

교환하는 항의 쌍은 상한에 들어가지 않는다. 횡자기장 Ising 모형에서 $Z\_jZ\_{j+1}$ 은 $X\_j$, $X\_{j+1}$ 하고만 교환하지 않으므로 교환자의 합이 $O(n)$ 이고, 게이트 수가 $O(n^2t^2/\varepsilon)$ 로 준다.

## 고차 곱 공식

2차 곱 공식은 한 토막의 오차가 $O(s^3)$ 이므로 $r$ 토막의 오차가 $O(t^3/r^2)$ 이다. 직관 절의 예에서 $(e^{-iZt/2r}e^{-iXt/r}e^{-iZt/2r})^r$ 의 차이는 $r=4$ 에서 $0.0173$, $r=10$ 에서 $0.0027$ 이고, $r$ 을 $2.5$ 배로 늘리면 차이가 $2.5^2$ 배쯤 준다.

Suzuki 는 2차 공식을 다음 점화식으로 이어 차수 $2k$ 의 공식을 만들었다[^3].

$$
V_{2k}(s)=V_{2k-2}(p_ks)^2\thinspace V_{2k-2}\big((1-4p_k)s\big)\thinspace V_{2k-2}(p_ks)^2,\qquad p_k=\frac1{4-4^{1/(2k-1)}}
$$

$V\_{2k}$ 의 한 토막은 지수 $O(5^kL)$ 개로 되고 $r$ 토막의 오차가 $O\big((Lt)^{2k+1}/r^{2k}\big)$ 이므로, 게이트 수가 $O\big(5^kL(Lt)^{1+1/(2k)}\varepsilon^{-1/(2k)}\big)$ 이다[^4]. $k$ 를 키우면 $t$ 에 대한 지수가 $1$ 에 다가간다.

## 빨리 감기 불가능성

정리. 성긴 해밀토니언(sparse Hamiltonian)의 원소를 질의(query)로만 읽는 모형에서, 모든 성긴 해밀토니언에 대해 $e^{-iHt}$ 를 질의 $o(t)$ 번으로 만드는 일반적인 방법은 없다(no-fast-forwarding theorem)[^4].

증명의 요지. $N$ 비트의 패리티(parity)를 시간 $t=\Theta(N)$ 의 발전으로 계산하는 해밀토니언을 만든다. 패리티는 질의 $\Omega(N)$ 번이 필요하므로 시뮬레이션도 질의 $\Omega(t)$ 번이 필요하다.

## 곱 공식 밖의 방법

해밀토니언을 유니터리의 선형결합으로 쓰고 $e^{-iHt}$ 의 Taylor 급수를 자른 방법은 오차에 대한 의존을 $\log(1/\varepsilon)$ 로 줄였다[^5]. [양자 신호 처리](quantum-signal-processing.md)는 왼쪽 위 블록이 $H/\alpha$ 인 유니터리를 질의로 받아 다음 질의 수로 $e^{-iHt}$ 를 만든다[^6]. 이 수는 빨리 감기 불가능성의 하한 $\Omega(\alpha t)$ 와 오차에 대한 하한을 함께 만족한다.

$$
O\Big(\alpha t+\frac{\log(1/\varepsilon)}{\log\log(1/\varepsilon)}\Big)
$$

## BQP 완전성

국소 해밀토니언의 시뮬레이션은 다항식 크기의 곱 공식 회로로 되므로 BQP(bounded-error quantum polynomial time)에 속한다[^2]. 반대로 Feynman 은 게이트 $m$ 개짜리 회로를 시계 큐비트를 덧붙인 국소 해밀토니언의 시간 발전으로 바꾸었다[^7]. 따라서 국소 해밀토니언의 시간 발전을 시뮬레이션하고 큐비트 하나를 측정하는 문제는 BQP 완전(BQP-complete)이다.

# 활용

- 바닥 에너지. [양자 위상 추정](quantum-phase-estimation.md)에 조건부 $e^{-iH\tau}$, $e^{-2iH\tau}$, $\dots$ 가 필요하고, 이것을 곱 공식이나 양자 신호 처리로 만든다. 분자와 물질의 해밀토니언에서 가장 작은 [고윳값](eigenvalues.md)을 어림하는 양자 화학 계산에 이 두 방법을 함께 쓴다.
- 물리계의 동역학. Feynman 은 양자계를 고전 컴퓨터로 시뮬레이션하는 비용이 큐비트 수에 대해 지수적으로 늘어나는 문제를 들어 양자계로 양자계를 시뮬레이션하자고 제안했다[^8]. Lloyd 의 곱 공식 회로가 국소 해밀토니언에서 이 제안을 다항식 비용으로 실현한다[^2].
- 선형 연립방정식. [Harrow–Hassidim–Lloyd 알고리즘](harrow-hassidim-lloyd.md)은 $e^{-iAt}$ 를 양자 위상 추정에 넣어 $A$ 의 고윳값을 얻고 $A^{-1}\vert b\rangle$ 에 비례하는 상태를 만든다[^9].
- 연속 시간 [양자 걸음](quantum-walks.md). 그래프의 인접행렬 $A$ 에 대한 $e^{-iAt}$ 가 연속 시간 양자 걸음이고, 성긴 해밀토니언의 시뮬레이션으로 회로가 된다.

[^1]: A. M. Childs, Y. Su, M. C. Tran, N. Wiebe, S. Zhu, Theory of Trotter error with commutator scaling, *Physical Review X* 11 (2021), 011020.
[^2]: S. Lloyd, Universal quantum simulators, *Science* 273 (1996), 1073–1078.
[^3]: M. Suzuki, General theory of fractal path integrals with applications to many-body theories and statistical physics, *Journal of Mathematical Physics* 32 (1991), 400–407.
[^4]: D. W. Berry, G. Ahokas, R. Cleve, B. C. Sanders, Efficient quantum algorithms for simulating sparse Hamiltonians, *Communications in Mathematical Physics* 270 (2007), 359–371.
[^5]: D. W. Berry, A. M. Childs, R. Cleve, R. Kothari, R. D. Somma, Simulating Hamiltonian dynamics with a truncated Taylor series, *Physical Review Letters* 114 (2015), 090502.
[^6]: G. H. Low, I. L. Chuang, Optimal Hamiltonian simulation by quantum signal processing, *Physical Review Letters* 118 (2017), 010501; G. H. Low, I. L. Chuang, Hamiltonian simulation by qubitization, *Quantum* 3 (2019), 163.
[^7]: R. P. Feynman, Quantum mechanical computers, *Optics News* 11 (1985), 11–20.
[^8]: R. P. Feynman, Simulating physics with computers, *International Journal of Theoretical Physics* 21 (1982), 467–488.
[^9]: A. W. Harrow, A. Hassidim, S. Lloyd, Quantum algorithm for linear systems of equations, *Physical Review Letters* 103 (2009), 150502.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)
- [Lie–Trotter 곱 공식](lie-trotter-formula.md)

## 더 알아보기

- [Harrow–Hassidim–Lloyd 알고리즘](harrow-hassidim-lloyd.md)
- [양자 신호 처리](quantum-signal-processing.md)
- [단열 양자 계산](adiabatic-quantum-computation.md)

#computation #linear_algebra #complexity
