# 양자 위상 추정

# 개요

**양자 위상 추정(quantum phase estimation)** 은 유니터리 행렬의 고유벡터가 주어졌을 때 그 고윳값 $e^{2\pi i\varphi}$ 의 $\varphi$ 를 이진수 몇 자리로 읽어 내는 양자 알고리즘이다. 게이트 $T=\mathrm{diag}(1,e^{i\pi/4})$ 는 $\vert 1\rangle$ 에 $e^{2\pi i/8}$ 을 곱하지만, $T\vert 1\rangle$ 을 측정하면 $\vert 1\rangle$ 을 측정한 것과 똑같이 $1$ 이 나와서 곱해진 수가 보이지 않는다. 양자 위상 추정은 그 수를 보조 큐비트의 상대 위상으로 옮기고, 역 양자 Fourier 변환으로 그 위상을 비트열 $001$, 곧 $\varphi=1/8$ 로 바꾸어 측정한다.

# 직관

$U\vert\psi\rangle=e^{2\pi i\varphi}\vert\psi\rangle$ 이면 $U$ 를 걸어도 $\vert\psi\rangle$ 의 모든 진폭에 같은 수가 곱해질 뿐이라, 측정에서 나오는 확률이 그대로다. 보조 큐비트 하나를 $\tfrac1{\sqrt 2}(\vert 0\rangle+\vert 1\rangle)$ 로 두고, 보조 큐비트가 $1$ 일 때만 $U$ 를 건다. 그러면 $\vert 1\rangle$ 쪽에만 $e^{2\pi i\varphi}$ 가 곱해져

$$
\tfrac1{\sqrt 2}\big(\vert 0\rangle+e^{2\pi i\varphi}\vert 1\rangle\big)\otimes\vert\psi\rangle
$$

이 된다. 이제 $e^{2\pi i\varphi}$ 는 보조 큐비트의 두 진폭 사이의 차이다. 보조 큐비트에 $H$ 를 걸면 진폭이 $\tfrac12(1+e^{2\pi i\varphi})$ 와 $\tfrac12(1-e^{2\pi i\varphi})$ 가 되고, $\varphi=0$ 이면 확률 $1$ 로 $0$, $\varphi=1/2$ 이면 확률 $1$ 로 $1$ 이 나온다.

큐비트 하나로는 $\varphi$ 의 이진 전개 $0.\varphi\_1\varphi\_2\varphi\_3\cdots$ 의 한 자리만 가려진다. 개요의 $T$ 와 $\vert 1\rangle$ 에서는 $\varphi=1/8=0.001\_{(2)}$ 이다. 보조 큐비트를 셋 두고 각각 $T^4$, $T^2$, $T$ 를 조건부로 걸면 세 큐비트가 위상 $e^{2\pi i\cdot 4/8}$, $e^{2\pi i\cdot 2/8}$, $e^{2\pi i/8}$ 을 받는다. 세 큐비트를 비트열 $y$ 로 읽으면 이 상태는 $\tfrac1{\sqrt 8}\sum_{y=0}^{7}e^{2\pi iy/8}\vert y\rangle$ 이고, 길이 $8$ 인 배열 $(e^{2\pi iy/8})\_y$ 는 한 성분만 $1$ 인 배열 $\vert 1\rangle$ 의 [이산 Fourier 변환](fourier.md)이다. 역변환을 걸면 $\vert 001\rangle$ 이 되어 측정값이 확률 $1$ 로 $1$ 이고, $1/8$ 이 $\varphi$ 다.

# 정의

## 양자 Fourier 변환

$Q=2^t$ 에서 **양자 Fourier 변환(quantum Fourier transform)** 은

$$
F_Q\vert x\rangle=\frac1{\sqrt Q}\sum_{y=0}^{Q-1}e^{2\pi ixy/Q}\vert y\rangle
$$

로 정의되는 유니터리 사상이다. [Shor 알고리즘](shor-algorithm.md)이 쓰는 변환과 같고, Hadamard 게이트 $t$ 개와 제어 위상 게이트 $t(t-1)/2$ 개의 [양자 회로](quantum-circuits.md)로 구현된다. 직관 절의 세 큐비트 상태는 $F_8\vert 1\rangle$ 이다.

## 위상 추정 문제

**위상 추정 문제(phase estimation problem)** 는 유니터리 $U$ 를 조건부로 거는 회로와 고유벡터 $\vert\psi\rangle$ 이 주어질 때, $U\vert\psi\rangle=e^{2\pi i\varphi}\vert\psi\rangle$, $0\le\varphi\lt 1$ 인 $\varphi$ 를 구하는 문제다. 조건부 $U$ 는 $\vert c\rangle\vert\phi\rangle\mapsto\vert c\rangle U^c\vert\phi\rangle$, $c\in\lbrace 0,1\rbrace$ 이다. 개요의 예는 $U=T$, $\vert\psi\rangle=\vert 1\rangle$, $\varphi=1/8$ 이다.

## 회로

보조 큐비트 $t$ 개의 레지스터를 둔다. $t$ 를 **정밀도 비트 수(number of precision bits)** 라 한다.

1. 보조 레지스터에 $H^{\otimes t}$ 를 걸어 $Q^{-1/2}\sum_y\vert y\rangle\vert\psi\rangle$ 을 만든다.
2. $j=0,\dots,t-1$ 마다 $y$ 의 $2^j$ 자리 큐비트를 조건으로 $U^{2^j}$ 를 건다. $\vert y\rangle$ 에는 $U^y$ 가 걸리므로 상태는 $Q^{-1/2}\sum_y e^{2\pi i\varphi y}\vert y\rangle\vert\psi\rangle$ 이다.
3. 보조 레지스터에 $F_Q^{-1}$ 를 걸고 측정해 $x$ 를 얻는다. $x/Q$ 가 $\varphi$ 의 추정값이다.

$\varphi=x\_0/Q$ 로 정확히 $t$ 자리에 적히면 2단계의 상태는 $F_Q\vert x\_0\rangle\vert\psi\rangle$ 이고, 3단계의 측정값은 확률 $1$ 로 $x\_0$ 다. 직관 절의 계산이 $t=3$, $x\_0=1$ 인 경우다.

$\varphi$ 가 $t$ 자리로 적히지 않으면 측정값이 하나로 정해지지 않는다. $U=\mathrm{diag}(1,e^{2\pi i/3})$, $\vert\psi\rangle=\vert 1\rangle$, $t=2$ 이면 $\varphi=1/3$ 이다. 측정값이 $1$ 일 진폭은

$$
\frac14\sum_{y=0}^{3}e^{2\pi iy(1/3-1/4)}=\frac14\sum_{y=0}^{3}e^{2\pi iy/12}
$$

이고 확률은 $(6+3\sqrt 3)/16\approx 0.70$ 이다. 이때 추정값 $1/4$ 은 $1/3$ 에 가장 가까운 $2$ 자리 이진 분수다.

# 성질

## 성공 확률

$\varphi$ 에 가장 가까운 $x/Q$ 를 택하고 $\delta=\varphi-x/Q$, $\vert\delta\vert\le 1/(2Q)$ 라 한다. 측정값이 $x$ 일 진폭은 등비급수의 합

$$
\frac1Q\sum_{y=0}^{Q-1}e^{2\pi i\delta y}=\frac1Q\cdot\frac{1-e^{2\pi iQ\delta}}{1-e^{2\pi i\delta}}
$$

이다. $\vert 1-e^{i\theta}\vert=2\vert\sin(\theta/2)\vert$ 와 $\vert\theta\vert\le\pi/2$ 에서의 $\vert\sin\theta\vert\ge 2\vert\theta\vert/\pi$ 를 쓰면 분자는 $4Q\vert\delta\vert$ 이상, 분모는 $2\pi\vert\delta\vert$ 이하다. 따라서 진폭의 절댓값은 $2/\pi$ 이상이고, 가장 가까운 $t$ 자리 근사가 확률 $4/\pi^2\approx 0.405$ 이상으로 나온다[^1]. 정의 절의 $\varphi=1/3$ 에서 나온 $0.70$ 이 이 하한을 넘는다.

## 정밀도와 비용

$\varphi$ 를 $n$ 자리까지 확률 $1-\varepsilon$ 이상으로 맞히려면

$$
t=n+\left\lceil\log_2\left(2+\frac1{2\varepsilon}\right)\right\rceil
$$

개의 보조 큐비트로 충분하다[^1]. 2단계는 조건부 $U$ 를 모두 $1+2+\cdots+2^{t-1}=2^t-1$ 번 쓰므로, 오차 $2^{-n}$ 을 얻는 데 $U$ 를 $O(2^n)$ 번 쓴다. 직관 절의 큐비트 하나짜리 회로를 되풀이해 측정 빈도로 $\cos 2\pi\varphi$ 를 어림하면 오차 $\varepsilon$ 에 반복이 $O(1/\varepsilon^2)$ 번 든다. 위상 추정은 같은 오차를 $U$ 의 사용 $O(1/\varepsilon)$ 번으로 얻는다.

## 고유벡터가 아닌 입력

$U$ 의 고유벡터 $\vert\psi_k\rangle$ 와 [고윳값](eigenvalues.md) $e^{2\pi i\varphi_k}$ 에 대해 입력이 $\sum_k c_k\vert\psi_k\rangle$ 이면, 2단계와 3단계는 $k$ 마다 따로 일어나 측정 결과가 확률 $\vert c_k\vert^2$ 로 $\varphi_k$ 의 추정값이 된다. 측정 뒤 둘째 레지스터는 $\varphi_k$ 의 고유공간으로 사영된다. 그래서 고유벡터를 모르고도 고윳값을 무작위로 하나 뽑고 그 고유벡터를 준비할 수 있다.

## 반복형 위상 추정

Kitaev 의 원래 방법(Kitaev's phase estimation)은 보조 큐비트 하나를 되풀이해 쓴다[^2]. $U^{2^{t-1}}$ 로 가장 낮은 자리 $\varphi_t$ 를 먼저 읽고, $U^{2^{j-1}}$ 로 $\varphi_j$ 를 읽을 때 이미 읽은 낮은 자리의 위상을 회전 게이트로 빼 준다. 역 양자 Fourier 변환을 측정과 고전 제어로 바꾼 것과 같은 결과를 내고, 보조 큐비트가 하나로 줄어든다.

# 활용

- 위수 찾기. Shor 알고리즘의 $U\vert z\rangle=\vert az\bmod N\rangle$ 은 고윳값이 $e^{2\pi ik/r}$ ($k=0,\dots,r-1$) 이고, $\vert 1\rangle$ 은 그 고유벡터들의 균등한 합이다. $\vert 1\rangle$ 에서 위상 추정을 하면 무작위 $k$ 에 대해 $k/r$ 의 근사가 나오고, [연분수](continued-fractions.md) 전개로 $r$ 을 얻는다. 조건부 $U^{2^j}$ 는 $a^{2^j}\bmod N$ 을 반복 제곱으로 미리 계산해 곱셈 하나로 건다. $N=15$, $a=7$ 이면 $r=4$ 라 $t=8$ 에서 추정값이 $0,1/4,1/2,3/4$ 가운데 하나로 정확히 나온다[^3].
- 해의 개수 세기. [Grover 알고리즘](grover-algorithm.md)의 반복 $G$ 는 두 축이 이루는 평면에서 각 $2\theta$ 의 회전이고, 그 평면에서 고윳값이 $e^{\pm 2i\theta}$ 다. 초기 상태에서 $G$ 의 위상 추정을 하면 $\theta$ 가 나오고 $M=N\sin^2\theta$ 로 정답의 개수를 얻는다. 이것을 양자 개수 세기(quantum counting)라 한다[^4]. $N=4$, $M=1$ 이면 $\theta=\pi/6$ 이고 위상은 $1/6$ 이나 $5/6$ 이다.
- 진폭 추정. 성공 확률 $p$ 인 알고리즘에 진폭 증폭의 반복을 만들어 위상 추정을 걸면 $p$ 를 오차 $\varepsilon$ 로 어림하는 데 알고리즘을 $O(1/\varepsilon)$ 번 쓴다. 이것을 진폭 추정(amplitude estimation)이라 한다[^4].
- 해밀토니언의 바닥 에너지. 해밀토니언 $H$ 에 대해 $U=e^{-iH\tau}$ 의 위상을 추정하면 $H$ 의 고윳값이 나오고, 바닥 상태에 가까운 입력에서 가장 작은 고윳값이 높은 확률로 나온다.

[^1]: R. Cleve, A. Ekert, C. Macchiavello, M. Mosca, Quantum algorithms revisited, *Proceedings of the Royal Society A* 454 (1998), 339–354. M. A. Nielsen, I. L. Chuang, *Quantum Computation and Quantum Information*, Cambridge University Press (2000), §5.2.
[^2]: A. Yu. Kitaev, Quantum measurements and the Abelian stabilizer problem, arXiv:quant-ph/9511026 (1995).
[^3]: P. W. Shor, Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer, *SIAM Journal on Computing* 26 (1997), 1484–1509.
[^4]: G. Brassard, P. Høyer, M. Mosca, A. Tapp, Quantum amplitude amplification and estimation, *Contemporary Mathematics* 305 (2002), 53–74.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)
- [이산 Fourier 변환](fourier.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #linear_algebra #number_theory
