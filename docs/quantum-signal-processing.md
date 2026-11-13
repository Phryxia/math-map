# 양자 신호 처리

# 개요

**양자 신호 처리(quantum signal processing, QSP)** 는 수 $x$ 를 행렬 원소로 담은 회전을 여러 번 쓰고 그 사이에 위상 회전을 끼워, 회로의 행렬 원소를 $x$ 의 원하는 다항식으로 만드는 방법이다. 해밀토니언의 고윳값 $x$ 가 행렬 원소로 들어 있는 회로가 있을 때, [해밀토니언 시뮬레이션](hamiltonian-simulation.md)은 $e^{-ixt}$ 를, 연립방정식 풀이는 $1/x$ 를 원한다. 양자 신호 처리는 이 함수들을 [Chebyshev 다항식](chebyshev-polynomials.md)과 그 조합으로 근사하고, 근사 다항식마다 위상 회전의 각도를 정해 회로로 만든다.

# 직관

$x\in\lbrack -1,1\rbrack$ 에 대해 큐비트 하나의 다음 회전을 쓸 수 있다고 한다.

$$
W(x)=\begin{pmatrix}x&i\sqrt{1-x^2}\cr i\sqrt{1-x^2}&x\end{pmatrix}
$$

$W(x)$ 의 왼쪽 위 원소 $\langle 0\vert W(x)\vert 0\rangle$ 이 $x$ 다. $W(x)$ 를 두 번 곱하면 왼쪽 위 원소는 $x\cdot x+(i\sqrt{1-x^2})^2=2x^2-1$ 이다. $x=\cos\theta$ 로 두면 $W(x)$ 는 $X$ 축으로 각 $\theta$ 만큼의 회전 $e^{i\theta X}$ 이므로, $d$ 번 곱하면 각 $d\theta$ 의 회전이고 왼쪽 위 원소는 $\cos d\theta$, 곧 Chebyshev 다항식 $T\_d(x)$ 다. $W(x)$ 만 되풀이하면 얻는 다항식은 $T\_d$ 뿐이다.

두 $W(x)$ 사이에 $Z$ 축 회전 $e^{i\varphi Z}=\mathrm{diag}(e^{i\varphi},e^{-i\varphi})$ 를 끼운다. $\vert 0\rangle$ 에서 $\vert 0\rangle$ 으로 가는 길은 $0\to 0\to 0$ 과 $0\to 1\to 0$ 둘이고, 가운데 회전이 두 길에 $e^{i\varphi}$ 와 $e^{-i\varphi}$ 를 곱한다.

$$
\langle 0\vert W(x)e^{i\varphi Z}W(x)\vert 0\rangle=x^2e^{i\varphi}-(1-x^2)e^{-i\varphi}
$$

$\varphi=0$ 이면 $2x^2-1$ 이고, $\varphi=\pi/2$ 이면 $ix^2+i(1-x^2)=i$ 로 $x$ 에 의존하지 않는다. $W(x)$ 를 쓰는 횟수는 같고 끼운 각도만 다른데 왼쪽 위 원소가 다른 다항식이 된다. 회전을 $d$ 번 쓰고 각도 $d+1$ 개를 고르면 어떤 다항식을 만들 수 있는지가 양자 신호 처리의 물음이다.

# 정의

## 신호 회전과 위상 열

$x\in\lbrack -1,1\rbrack$ 에 대해 직관 절의 $W(x)$ 를 **신호 회전(signal rotation)** 이라 한다. 실수 열 $\Phi=(\varphi\_0,\varphi\_1,\dots,\varphi\_d)$ 를 **위상 열(phase sequence)** 이라 하고, 다음 행렬을 $\Phi$ 의 **양자 신호 처리 회로** 라 한다.

$$
U_\Phi(x)=e^{i\varphi_0Z}\prod_{k=1}^{d}\Big(W(x)\thinspace e^{i\varphi_kZ}\Big)
$$

$d$ 를 회로의 차수라 한다. 직관 절은 $d=2$, $\Phi=(0,\varphi,0)$ 이다. 모든 각도가 $0$ 이면 $\langle 0\vert U\_\Phi(x)\vert 0\rangle=T\_d(x)$ 다.

## 블록 인코딩

$a$ 큐비트를 덧붙인 유니터리 $U$ 와 $\alpha\gt 0$ 에 대해 다음이 성립하면 $U$ 를 행렬 $A$ 의 **블록 인코딩(block encoding)** 이라 한다.

$$
\big(\langle 0\vert^{\otimes a}\otimes I\big)\thinspace U\thinspace\big(\vert 0\rangle^{\otimes a}\otimes I\big)=A/\alpha
$$

$U$ 를 행렬로 쓰면 왼쪽 위 블록이 $A/\alpha$ 다. $a=1$, $A=x$ 인 $1\times 1$ 행렬, $\alpha=1$ 이면 $W(x)$ 가 블록 인코딩이다.

# 성질

## 도달 가능한 다항식

정리. 복소계수 다항식 $P$ 에 대해 $\langle 0\vert U\_\Phi(x)\vert 0\rangle=P(x)$ 인 차수 $d$ 의 위상 열 $\Phi$ 가 있을 필요충분조건은, 다음을 만족하는 다항식 $Q$ 가 있는 것이다[^1].

1. $\deg P\le d$, $\deg Q\le d-1$.
2. $P$ 의 홀짝성은 $d$ 의 홀짝성과 같고, $Q$ 의 홀짝성은 $d-1$ 의 홀짝성과 같다.
3. $x\in\lbrack -1,1\rbrack$ 에서 $\vert P(x)\vert^2+(1-x^2)\vert Q(x)\vert^2=1$ 이다.

이때 $U\_\Phi(x)$ 의 첫 행은 $\big(P(x),\thinspace iQ(x)\sqrt{1-x^2}\big)$ 다.

증명의 요지. 조건이 필요한 것은 $d$ 에 대한 귀납법으로 $W(x)e^{i\varphi Z}$ 를 하나 곱할 때 차수가 하나씩 오르고 홀짝성이 바뀌며, 유니터리성이 3 을 준다는 데서 나온다. 충분성은 $d$ 차의 $(P,Q)$ 에서 3 의 항등식의 최고차 계수를 비교해 $\varphi\_d$ 를 정하고, $e^{-i\varphi\_dZ}W(x)^{-1}$ 을 곱해 $d-1$ 차로 내리는 귀납법이다.

직관 절의 $\varphi=\pi/2$ 에서는 $ZW(x)=W(x)^{-1}Z$ 이므로 $U\_\Phi(x)=iZ$ 이고, $P=i$, $Q=0$ 이 세 조건을 만족한다.

## 실수부의 지정

정리. 실계수 다항식 $f$ 의 차수가 $d$ 이하이고 홀짝성이 $d$ 와 같으며 $\lbrack -1,1\rbrack$ 에서 $\vert f\vert\le 1$ 이면, $\mathrm{Re}\thinspace\langle 0\vert U\_\Phi(x)\vert 0\rangle=f(x)$ 인 위상 열이 있다[^2].

$f$ 만 정하면 나머지 허수부와 $Q$ 는 3 의 항등식을 만족하도록 보충된다. 실수부만 남기는 것은 양자 신호 처리 회로 두 개의 평균을 블록 인코딩으로 만들어 얻는다. 위상 열은 고전 컴퓨터로 계산하고, 차수가 수천인 다항식에서도 수치적으로 안정된 계산법이 있다[^3].

## 고윳값 변환

정리. 에르미트 행렬 $A$ 의 블록 인코딩 $U$ 가 있으면, 위 정리의 조건을 만족하는 차수 $d$ 의 다항식 $P$ 에 대해 $P(A/\alpha)$ 의 블록 인코딩을 $U$ 와 $U^\dagger$ 를 합쳐 $d$ 번 쓰고 보조 큐비트 하나를 더해 만든다[^2][^4].

$A/\alpha$ 의 고유벡터마다 $U$ 가 그 고윳값 $x$ 를 원소로 갖는 $2\times 2$ 회전처럼 작용하므로, 큐비트 하나의 $W(x)$ 에서 성립한 것이 모든 고윳값에서 동시에 성립한다. 이 구성을 **qubitization** 이라 한다. 에르미트가 아닌 행렬에서는 같은 구성이 특이값에 다항식을 적용하고, 이것을 양자 특이값 변환(quantum singular value transformation)이라 한다[^2].

# 활용

- 해밀토니언 시뮬레이션. Jacobi–Anger 전개(Jacobi–Anger expansion)로 $\cos(tx)$ 와 $\sin(tx)$ 를 차수 $O\big(t+\log(1/\varepsilon)/\log\log(1/\varepsilon)\big)$ 의 짝다항식과 홀다항식으로 근사하고 둘을 합쳐 $e^{-iHt}$ 의 블록 인코딩을 만든다. 질의 수 $O\big(\alpha t+\log(1/\varepsilon)/\log\log(1/\varepsilon)\big)$ 는 알려진 하한과 맞는다[^4].
- 선형 연립방정식. $\lbrack 1/\kappa,1\rbrack$ 에서 $1/(\kappa x)$ 를 차수 $O(\kappa\log(\kappa/\varepsilon))$ 의 홀다항식으로 근사해 $A^{-1}$ 의 블록 인코딩을 만든다. [Harrow–Hassidim–Lloyd 알고리즘](harrow-hassidim-lloyd.md)의 위상 추정과 회전 단계를 이 다항식 하나로 바꾼다[^2].
- 탐색. [Grover 알고리즘](grover-algorithm.md)의 반복은 각도를 고정한 양자 신호 처리 회로이고, 각도를 고르면 성공 확률을 $1$ 에 가깝게 고정하는 고정점 탐색이 나온다[^2].
- 위상 추정. 고윳값이 기준값보다 큰지 작은지를 가르는 계단 함수를 다항식으로 근사하면 [양자 위상 추정](quantum-phase-estimation.md)의 역 양자 Fourier 변환 없이 고윳값의 비트를 하나씩 읽는다[^5].

[^1]: G. H. Low, T. J. Yoder, I. L. Chuang, Methodology of resonant equiangular composite quantum gates, *Physical Review X* 6 (2016), 041067.
[^2]: A. Gilyén, Y. Su, G. H. Low, N. Wiebe, Quantum singular value transformation and beyond: exponential improvements for quantum matrix arithmetics, *Proceedings of STOC 2019*, 193–204.
[^3]: J. Haah, Product decomposition of periodic functions in quantum signal processing, *Quantum* 3 (2019), 190.
[^4]: G. H. Low, I. L. Chuang, Optimal Hamiltonian simulation by quantum signal processing, *Physical Review Letters* 118 (2017), 010501; G. H. Low, I. L. Chuang, Hamiltonian simulation by qubitization, *Quantum* 3 (2019), 163.
[^5]: J. M. Martyn, Z. M. Rossi, A. K. Tan, I. L. Chuang, Grand unification of quantum algorithms, *PRX Quantum* 2 (2021), 040203.

# 연관 문서

## 선수지식

- [해밀토니언 시뮬레이션](hamiltonian-simulation.md)
- [Chebyshev 다항식](chebyshev-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #linear_algebra #analysis
