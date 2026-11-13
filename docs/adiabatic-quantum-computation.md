# 단열 양자 계산

# 개요

**단열 양자 계산(adiabatic quantum computation)** 은 바닥 상태를 알기 쉬운 해밀토니언에서 출발해 답을 바닥 상태로 갖는 해밀토니언으로 천천히 바꾸면서, 계가 바닥 상태에 머무르게 해 답을 얻는 계산 모형이다. 비트열 $z$ 의 비용 $f(z)$ 를 최소화하는 문제는 대각 행렬 $\sum\_zf(z)\vert z\rangle\langle z\vert$ 의 바닥 상태를 찾는 문제이지만, 이 상태를 바로 만드는 방법은 알려져 있지 않다. 단열 양자 계산은 모든 비트열의 균등한 중첩에서 출발해 해밀토니언을 바꾸는 속도를 고윳값 사이의 간격으로 정하고, 끝에서 측정해 최소 비용의 비트열을 얻는다.

# 직관

큐비트 하나에서 답이 $0$ 인 문제를 $H\_1=-Z$ 로 적는다. $H\_1$ 의 바닥 상태가 $\vert 0\rangle$ 이다. 출발점은 $H\_0=-X$ 로 잡고, 바닥 상태는 $\vert +\rangle=\tfrac1{\sqrt2}(\vert 0\rangle+\vert 1\rangle)$ 이다. 시간 $T$ 동안 해밀토니언을 다음과 같이 바꾼다.

$$
H(t/T)=-(1-s)X-sZ,\qquad s=t/T
$$

$T$ 가 $0$ 에 가까우면 상태가 바뀔 시간이 없어 끝에서도 $\vert +\rangle$ 이고, 측정하면 $0$ 이 확률 $1/2$ 로 나온다. Schrödinger 방정식을 풀어 끝에서 $0$ 이 나올 확률을 구하면 다음과 같다.

| T      | 0 이 나올 확률 |
| ------ | -------------- |
| 0      | 0.500          |
| 1      | 0.578          |
| 2      | 0.752          |
| 10     | 0.997          |
| 30     | 0.9999         |

$T$ 가 커지면 확률이 $1$ 로 간다. 이 경우 $T$ 가 몇이면 충분한지는 $H(s)$ 의 두 고윳값 $\pm\sqrt{(1-s)^2+s^2}$ 의 간격이 정한다. 간격은 $s=1/2$ 에서 가장 작은 $\sqrt2$ 이고, 간격이 작은 자리를 지날 때 바닥 상태에서 들뜬 상태로 넘어가는 진폭이 생긴다. 큐비트가 많아지면 이 최소 간격이 문제마다 다르고, 필요한 시간이 최소 간격의 제곱에 반비례해 늘어난다.

# 정의

## 바닥 상태와 간격

에르미트 행렬 $H$ 의 가장 작은 고윳값의 고유벡터를 **바닥 상태(ground state)** 라 한다. 가장 작은 두 고윳값의 차를 **간격(spectral gap)** 이라 한다. 직관 절의 $H(s)$ 는 간격이 $2\sqrt{(1-s)^2+s^2}$ 이다.

## 단열 계산

큐비트 $n$ 개의 해밀토니언 $H\_0$, $H\_1$ 과 시간 $T$ 에 대해, $H\_0$ 의 바닥 상태에서 출발해 다음 해밀토니언의 Schrödinger 방정식 $i\frac{d}{dt}\vert\psi(t)\rangle=H(t/T)\vert\psi(t)\rangle$ 에 따라 시간 $T$ 동안 발전시키고 계산 기저로 측정하는 절차를 **단열 양자 계산** 이라 한다[^1].

$$
H(s)=(1-s)H_0+sH_1,\qquad 0\le s\le 1
$$

$H\_0=-\sum\_jX\_j$ 로 두면 바닥 상태는 모든 비트열의 균등한 중첩이다. $H\_1=\sum\_zf(z)\vert z\rangle\langle z\vert$ 로 두면 바닥 상태는 $f$ 를 최소화하는 비트열이다. 직관 절은 $n=1$, $f(0)=-1$, $f(1)=1$ 인 경우다. $H(s)$ 의 경로는 선형이 아니어도 되며, $s$ 를 시간의 함수 $s(t)$ 로 바꾼 것을 **스케줄(schedule)** 이라 한다.

# 성질

## 단열 정리

정리. $H(s)$ 의 간격이 모든 $s$ 에서 $g\_{\min}$ 이상이면, 다음 조건 아래 끝 상태가 $H\_1$ 의 바닥 상태에 가깝다.

$$
T\gg\frac{\max\_s\Vert H'(s)\Vert}{g_{\min}^2}
$$

이 조건은 단열 정리(adiabatic theorem)의 표준 판본이다. 엄밀한 판본은 오차 $\varepsilon$ 에 대해 $T$ 를 $\Vert H'\Vert^2/(\varepsilon g\_{\min}^3)$ 과 $\Vert H''\Vert/(\varepsilon g\_{\min}^2)$ 의 상수배 이상으로 잡으면 충분하다는 것이다[^2]. 직관 절에서는 $\Vert H'(s)\Vert=\Vert X-Z\Vert=\sqrt2$, $g\_{\min}=\sqrt2$ 이므로 $T$ 가 $1$ 보다 충분히 크면 된다. 표에서 $T=10$ 의 실패 확률은 $0.003$ 이다.

## 구조 없는 탐색

$N=2^n$ 개의 비트열 가운데 표시된 하나 $m$ 을 찾는다. $\vert u\rangle$ 을 균등한 중첩이라 하고 $H\_0=I-\vert u\rangle\langle u\vert$, $H\_1=I-\vert m\rangle\langle m\vert$ 로 둔다. $H(s)$ 는 $\vert u\rangle$ 과 $\vert m\rangle$ 이 펼치는 평면에서만 움직이고, 그 평면의 간격은 다음과 같다.

$$
g(s)=\sqrt{1-4\Big(1-\frac1N\Big)s(1-s)}
$$

최솟값은 $s=1/2$ 에서 $1/\sqrt N$ 이다. 선형 스케줄은 단열 조건에서 $T=O(N)$ 이 필요해 고전 탐색과 다르지 않다. 간격이 작은 자리에서만 천천히 가도록 $ds/dt$ 를 $g(s)^2$ 에 비례하게 잡으면 $T=O(\sqrt N)$ 이고, [Grover 알고리즘](grover-algorithm.md)과 같은 질의 수가 나온다[^3].

## 회로 모형과의 동치

정리. 다항식 크기의 [양자 회로](quantum-circuits.md)는 간격이 다항식 분의 일 이상인 국소 해밀토니언의 단열 계산으로 다항식 시간의 비용 증가 안에서 시뮬레이션되고, 반대 방향도 성립한다[^4].

반대 방향은 단열 발전을 짧은 토막으로 잘라 [해밀토니언 시뮬레이션](hamiltonian-simulation.md)으로 회로를 만드는 것이다. 정방향은 회로의 각 단계 상태를 시계 레지스터와 함께 중첩한 이력 상태(history state)를 바닥 상태로 갖는 해밀토니언을 만들고, 그 간격이 회로 크기의 다항식 분의 일 이상임을 보인다.

## 작은 간격

최적화 문제의 $H\_1$ 이 대각 행렬이고 $H\_0=-\sum\_jX\_j$ 인 경우, 최소 간격이 $n$ 에 대해 지수적으로 작아져 단열 계산이 지수 시간을 쓰는 사례가 있다. van Dam, Mosca, Vazirani 는 비용 함수가 좁고 깊은 최솟값을 가진 문제에서 이런 사례를 만들었다[^5].

# 활용

- 양자 담금질(quantum annealing). 비용 함수를 [Ising 모형](ising-model.md) 꼴의 대각 해밀토니언으로 적고 단열 경로를 빠르게 지나가며 측정해 낮은 비용의 비트열을 얻는 장치가 있다. 단열 조건을 만족하는지는 보장하지 않는다.
- 조합 최적화. 충족 가능성 문제(satisfiability problem)와 정확 덮개 문제(exact cover problem)를 비용 함수로 적어 단열 알고리즘을 시험한 것이 이 모형의 출발이다[^1].
- 회로의 이산화. 단열 경로를 $p$ 토막으로 잘라 $H\_0$ 과 $H\_1$ 의 발전을 번갈아 적용한 회로가 양자 근사 최적화 알고리즘(quantum approximate optimization algorithm)이고, $p\to\infty$ 에서 단열 계산을 근사한다.

[^1]: E. Farhi, J. Goldstone, S. Gutmann, M. Sipser, Quantum computation by adiabatic evolution, arXiv:quant-ph/0001106 (2000).
[^2]: S. Jansen, M.-B. Ruskai, R. Seiler, Bounds for the adiabatic approximation with applications to quantum computation, *Journal of Mathematical Physics* 48 (2007), 102111.
[^3]: J. Roland, N. J. Cerf, Quantum search by local adiabatic evolution, *Physical Review A* 65 (2002), 042308.
[^4]: D. Aharonov, W. van Dam, J. Kempe, Z. Landau, S. Lloyd, O. Regev, Adiabatic quantum computation is equivalent to standard quantum computation, *SIAM Journal on Computing* 37 (2007), 166–194.
[^5]: W. van Dam, M. Mosca, U. Vazirani, How powerful is adiabatic quantum computation?, *Proceedings of FOCS 2001*, 279–287.

# 연관 문서

## 선수지식

- [해밀토니언 시뮬레이션](hamiltonian-simulation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #optimization #linear_algebra
