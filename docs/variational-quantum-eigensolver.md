# 변분 양자 고유값 풀이

# 개요

**변분 양자 고유값 풀이(variational quantum eigensolver)** 는 매개변수가 달린 얕은 양자 회로로 상태를 만들고, 그 상태에서 측정한 에너지를 고전 컴퓨터가 매개변수에 대해 최소화해 에르미트 행렬의 가장 작은 고윳값을 어림하는 방법이다. 큐비트 하나의 행렬 $X+Z$ 의 가장 작은 고윳값은 $-\sqrt 2$ 인데, 큐비트가 많아지면 행렬의 크기가 $2^n$ 이라 고윳값을 고전적으로 직접 구하기 어렵다. 이 방법은 각도 $\theta$ 로 돌린 상태의 에너지 $\sin\theta+\cos\theta$ 를 측정으로 어림하고 $\theta$ 를 바꿔 가며 최솟값 $-\sqrt 2$ 를 찾는 일을 큰 행렬에서 한다.

# 직관

Pauli 행렬 $X=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$, $Z=\begin{pmatrix}1&0\cr 0&-1\end{pmatrix}$ 의 합 $H=X+Z$ 의 가장 작은 고윳값을 구한다. 상태 $\vert\psi(\theta)\rangle=\cos\tfrac\theta2\vert 0\rangle+\sin\tfrac\theta2\vert 1\rangle$ 에서 $Z$ 의 기댓값은 $\cos^2\tfrac\theta2-\sin^2\tfrac\theta2=\cos\theta$, $X$ 의 기댓값은 $2\cos\tfrac\theta2\sin\tfrac\theta2=\sin\theta$ 다. 따라서 에너지는

$$
E(\theta)=\langle\psi(\theta)\vert H\vert\psi(\theta)\rangle=\sin\theta+\cos\theta=\sqrt 2\sin\big(\theta+\tfrac\pi4\big)
$$

이고 $\theta=5\pi/4$ 에서 최솟값 $-\sqrt 2$ 가 된다.

양자 컴퓨터는 $E(\theta)$ 를 측정으로 어림한다. $\vert\psi(\theta)\rangle$ 을 만들어 계산 기저로 측정하면 $0$ 이 나오는 비율에서 $\cos\theta$ 가, Hadamard 게이트를 한 번 더 걸고 측정하면 $\sin\theta$ 가 나온다. 고전 컴퓨터는 이 어림값을 받아 $\theta$ 를 고치고, 이 과정을 되풀이한다.

# 정의

## 변분 원리

에르미트 행렬 $H$ 의 가장 작은 고윳값을 $E\_0$ 이라 하면 모든 단위벡터 $\vert\psi\rangle$ 에 대해

$$
\langle\psi\vert H\vert\psi\rangle\ge E_0
$$

이고, 등호는 $\vert\psi\rangle$ 이 $E\_0$ 의 고유벡터일 때 성립한다. 이것은 [Rayleigh 몫](rayleigh-quotient.md)의 최솟값이 가장 작은 고윳값이라는 사실이다. 직관 절의 $E(\theta)\ge-\sqrt 2$ 가 이 부등식이다.

## 매개변수 회로와 측정

매개변수 $\boldsymbol\theta\in\mathbb R^m$ 에 따라 유니터리 $U(\boldsymbol\theta)$ 를 주는 [양자 회로](quantum-circuits.md)를 **매개변수 회로(parameterized circuit, ansatz)** 라 한다. $H$ 를 Pauli 행렬의 텐서곱 $P\_j$ 들의 실계수 합 $H=\sum_jc\_jP\_j$ 로 쓰면, 각 $\langle P\_j\rangle$ 은 큐비트마다 기저를 바꾸고 계산 기저로 측정해 어림한다. 직관 절은 $m=1$, $U(\theta)=\begin{pmatrix}\cos\frac\theta2&-\sin\frac\theta2\cr \sin\frac\theta2&\cos\frac\theta2\end{pmatrix}$, $H=1\cdot X+1\cdot Z$ 인 경우다.

## 절차

1. 매개변수 $\boldsymbol\theta$ 를 정한다.
2. 각 $j$ 마다 $U(\boldsymbol\theta)\vert 0\cdots 0\rangle$ 을 여러 번 만들어 $P\_j$ 에 맞는 기저로 측정하고, $E(\boldsymbol\theta)=\sum_jc\_j\langle P\_j\rangle$ 를 어림한다.
3. 고전 최적화 방법으로 $\boldsymbol\theta$ 를 고치고 2단계로 돌아간다.
4. 멈췄을 때의 $E(\boldsymbol\theta)$ 를 $E\_0$ 의 어림값으로 낸다.

이 절차를 **변분 양자 고유값 풀이** 라 한다[^1].

# 성질

## 매개변수 이동 규칙

$U(\boldsymbol\theta)$ 의 각 매개변수가 $e^{-i\theta\_kP/2}$ ($P$ 는 Pauli 행렬의 텐서곱) 꼴의 게이트에만 들어 있으면

$$
\frac{\partial E}{\partial\theta_k}=\frac12\Big(E\big(\boldsymbol\theta+\tfrac\pi2\boldsymbol e_k\big)-E\big(\boldsymbol\theta-\tfrac\pi2\boldsymbol e_k\big)\Big)
$$

다[^2]. 미분을 같은 회로의 두 측정값으로 얻으므로 [경사하강법](gradient-descent.md)을 그대로 쓴다. 직관 절에서는 $E'(\theta)=\cos\theta-\sin\theta$ 이고, 우변도 $\tfrac12\big((\cos\theta-\sin\theta)-(-\cos\theta+\sin\theta)\big)=\cos\theta-\sin\theta$ 다.

## 측정 횟수

$\langle P\_j\rangle$ 을 오차 $\varepsilon$ 안으로 어림하려면 측정이 $O(1/\varepsilon^2)$ 번 든다. [양자 위상 추정](quantum-phase-estimation.md)은 같은 오차의 고윳값을 $U$ 의 사용 $O(1/\varepsilon)$ 번으로 얻지만 조건부 유니터리를 길게 이어야 한다. 변분 방법은 회로를 얕게 두는 대신 측정을 많이 한다.

## 보장의 부재

결과는 매개변수 회로가 만들 수 있는 상태 가운데 최솟값의 위쪽 어림이다. 회로가 바닥 상태를 만들지 못하면 $E\_0$ 에 닿지 않고, 고전 최적화가 국소 최솟값에서 멈출 수도 있다. 무작위로 고른 깊은 회로에서는 기울기의 분산이 큐비트 수에 대해 지수적으로 작아져 최적화가 진행되지 않는다(barren plateau)[^3].

# 활용

- 분자의 바닥 에너지. 분자의 전자 해밀토니언을 Pauli 행렬의 합으로 옮겨 수소 분자 같은 작은 분자의 바닥 에너지를 어림한다[^1].
- 조합 최적화. 최적화할 비용 함수를 대각 해밀토니언으로 쓰고 같은 구조의 회로를 쓰는 방법이 양자 근사 최적화 알고리즘(quantum approximate optimization algorithm)이다[^4].
- 오류정정 없는 하드웨어. 회로가 얕아 오류가 쌓이기 전에 측정이 끝나므로, [양자 오류정정부호](quantum-error-correction.md)를 쓰기 전 단계의 하드웨어에서 시험하는 방법으로 쓰인다.

[^1]: A. Peruzzo et al., A variational eigenvalue solver on a photonic quantum processor, *Nature Communications* 5 (2014), 4213.
[^2]: K. Mitarai, M. Negoro, M. Kitagawa, K. Fujii, Quantum circuit learning, *Physical Review A* 98 (2018), 032309; M. Schuld, V. Bergholm, C. Gogolin, J. Izaac, N. Killoran, Evaluating analytic gradients on quantum hardware, *Physical Review A* 99 (2019), 032331.
[^3]: J. R. McClean, S. Boixo, V. N. Smelyanskiy, R. Babbush, H. Neven, Barren plateaus in quantum neural network training landscapes, *Nature Communications* 9 (2018), 4812.
[^4]: E. Farhi, J. Goldstone, S. Gutmann, A quantum approximate optimization algorithm, arXiv:1411.4028 (2014).

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)
- [Rayleigh 몫](rayleigh-quotient.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #optimization #linear_algebra
