# Harrow–Hassidim–Lloyd 알고리즘

# 개요

**Harrow–Hassidim–Lloyd 알고리즘(Harrow–Hassidim–Lloyd algorithm, HHL)** 은 연립일차방정식 $Ax=b$ 의 해 $x$ 를 양자 상태의 진폭으로 만드는 양자 알고리즘이다. 미지수가 $2$ 개인 방정식 $\tfrac32x\_1+\tfrac12x\_2=1$, $\tfrac12x\_1+\tfrac32x\_2=0$ 의 해는 $(3/4,-1/4)$ 인데, 미지수가 $N$ 개이면 해를 고전적으로 구하는 데 적어도 $N$ 에 비례하는 시간이 든다. 이 알고리즘은 큐비트 $\log\_2N$ 개의 상태로 해의 비 $3:-1$ 을 진폭으로 담고, 행렬의 [고윳값](eigenvalues.md)으로 나누는 일을 고윳값을 읽어 회전하는 회로로 한다.

# 직관

개요의 방정식은 다음과 같다.

$$
A=\begin{pmatrix}3/2&1/2\cr 1/2&3/2\end{pmatrix},\qquad b=\begin{pmatrix}1\cr 0\end{pmatrix}
$$

$A$ 는 $\vert +\rangle=\tfrac1{\sqrt2}(1,1)$ 을 $2$ 배하고 $\vert -\rangle=\tfrac1{\sqrt2}(1,-1)$ 을 $1$ 배한다. $b=\vert 0\rangle$ 을 이 두 방향으로 나누면 $\vert 0\rangle=\tfrac1{\sqrt2}\vert +\rangle+\tfrac1{\sqrt2}\vert -\rangle$ 이다. $A^{-1}$ 은 각 방향의 성분을 그 방향의 배율로 나누므로 다음이 나온다.

$$
A^{-1}\vert 0\rangle=\frac1{2\sqrt2}\vert +\rangle+\frac1{\sqrt2}\vert -\rangle=\frac14\begin{pmatrix}3\cr -1\end{pmatrix}
$$

양자 회로는 이 나눗셈을 세 단계로 한다. 첫째, [양자 위상 추정](quantum-phase-estimation.md)으로 $\vert +\rangle$ 성분 옆의 레지스터에 $2$, $\vert -\rangle$ 성분 옆의 레지스터에 $1$ 을 적는다. 둘째, 보조 큐비트 하나를 레지스터 값 $\lambda$ 에 따라 돌려 $\vert 1\rangle$ 의 진폭을 $1/\lambda$ 로 만든다. 셋째, 위상 추정을 거꾸로 실행해 레지스터를 지우고 보조 큐비트를 측정한다.

$1$ 이 나오면 남은 상태는 $\tfrac1{\sqrt2}\big(\tfrac12\vert +\rangle+1\cdot\vert -\rangle\big)$ 에 비례하고, 이것이 $A^{-1}\vert 0\rangle$ 의 방향이다. $1$ 이 나올 확률은 $\tfrac12\big(\tfrac14+1\big)=\tfrac58$ 이다. 측정으로 얻는 것은 정규화한 상태 $\tfrac1{\sqrt{10}}(3\vert 0\rangle-\vert 1\rangle)$ 이고, 해의 성분 $3/4$, $-1/4$ 의 숫자를 얻으려면 이 상태를 여러 번 만들어 측정해야 한다.

# 정의

## 양자 선형계 문제

$N=2^n$ 이라 한다. 에르미트 행렬 $A\in\mathbb C^{N\times N}$ 의 고윳값의 절댓값이 모두 $\lbrack 1/\kappa,1\rbrack$ 안에 있을 때 $\kappa$ 를 $A$ 의 **조건수(condition number)** 라 한다. 행마다 $0$ 이 아닌 원소가 $s$ 개 이하이면 $A$ 를 **$s$-성긴 행렬($s$-sparse matrix)** 이라 한다.

$A$, 상태 $\vert b\rangle$, 허용 오차 $\varepsilon$ 이 주어졌을 때 다음 상태에서 거리 $\varepsilon$ 안의 상태를 만드는 문제를 **양자 선형계 문제(quantum linear systems problem)** 라 한다.

$$
\vert x\rangle=\frac{A^{-1}\vert b\rangle}{\Vert A^{-1}\vert b\rangle\Vert}
$$

직관 절의 $A$ 를 $2$ 로 나누면 고윳값이 $1$, $1/2$ 이므로 $\kappa=2$ 이고, $\vert x\rangle=\tfrac1{\sqrt{10}}(3\vert 0\rangle-\vert 1\rangle)$ 이다.

## 알고리즘

$A$ 의 고유벡터를 $\vert u\_j\rangle$, 고윳값을 $\lambda\_j$ 라 하고 $\vert b\rangle=\sum\_j\beta\_j\vert u\_j\rangle$ 로 쓴다. 상수 $C\le\min\_j\vert\lambda\_j\vert$ 를 잡는다.

1. $U=e^{iAt\_0}$ 에 대해 양자 위상 추정을 한다. 조건부 $U^{2^k}$ 는 [해밀토니언 시뮬레이션](hamiltonian-simulation.md)으로 만든다. 결과는 $\sum\_j\beta\_j\vert\tilde\lambda\_j\rangle\vert u\_j\rangle$ 이고, $\tilde\lambda\_j$ 는 $\lambda\_j$ 의 근삿값이다.
2. 보조 큐비트를 레지스터 값에 따라 돌린다.

$$
\vert\tilde\lambda\rangle\vert 0\rangle\mapsto\vert\tilde\lambda\rangle\Big(\sqrt{1-C^2/\tilde\lambda^2}\thinspace\vert 0\rangle+\frac{C}{\tilde\lambda}\vert 1\rangle\Big)
$$

3. 1 단계를 거꾸로 실행해 레지스터를 $\vert 0\cdots 0\rangle$ 으로 돌린다.
4. 보조 큐비트를 측정한다. $1$ 이 나오면 남은 상태는 $\sum\_j\beta\_j\lambda\_j^{-1}\vert u\_j\rangle$ 에 비례하고, $0$ 이 나오면 1 단계부터 다시 한다.

이 절차를 **Harrow–Hassidim–Lloyd 알고리즘** 이라 한다[^1].

직관 절에서는 $t\_0=\pi/2$ 로 잡는다. 고윳값 $1$, $2$ 의 위상 $\lambda t\_0/2\pi$ 가 $1/4$, $1/2$ 이므로 정밀도 비트 $2$ 개의 레지스터에 $01$, $10$ 이 정확히 적힌다. $C=1$ 로 두면 2 단계에서 $\lambda=1$ 쪽은 보조 큐비트가 $\vert 1\rangle$ 이 되고, $\lambda=2$ 쪽은 $\tfrac{\sqrt3}2\vert 0\rangle+\tfrac12\vert 1\rangle$ 이 된다.

# 성질

## 성공 확률과 조건수

4 단계에서 $1$ 이 나올 확률은 $\sum\_j\vert\beta\_j\vert^2C^2/\lambda\_j^2$ 이다. $C=1/\kappa$ 로 두면 이 확률은 $1/\kappa^2$ 이상이다. [Grover 알고리즘](grover-algorithm.md)의 진폭 증폭(amplitude amplification)을 쓰면 1 단계부터 3 단계까지를 $O(\kappa)$ 번 되풀이해 성공 확률을 상수로 올린다.

## 실행 시간

정리. $A$ 가 $s$-성긴 행렬이고 원소를 질의로 읽을 수 있으며 $\vert b\rangle$ 을 시간 $T\_b$ 에 만들 수 있으면, 양자 선형계 문제를 다음 시간에 푼다[^1].

$$
\tilde O\big(\log(N)\thinspace s^2\kappa^2/\varepsilon+\kappa T_b\big)
$$

증명의 요지. 고윳값을 상대 오차 $\varepsilon/\kappa$ 로 읽으려면 위상 추정의 발전 시간이 $t\_0=O(\kappa/\varepsilon)$ 이고, 성긴 해밀토니언 시뮬레이션이 그 발전을 $\tilde O(\log(N)s^2t\_0)$ 시간에 만든다. 진폭 증폭이 여기에 $\kappa$ 배를 곱한다.

$N$ 에 대한 의존이 $\log N$ 이므로, $\kappa$ 와 $s$ 가 $\log N$ 의 다항식이면 [Gauss 소거법](gaussian-elimination.md)의 $O(N^3)$ 나 [공액기울기법](conjugate-gradient.md)의 $O(Ns\sqrt\kappa\log(1/\varepsilon))$ 보다 지수적으로 빠르다. 비교 대상은 해의 성분 전체가 아니라 $\vert x\rangle$ 한 개다.

## 개선된 판본

Ambainis 는 고윳값마다 위상 추정의 정밀도를 다르게 두는 변수 시간 진폭 증폭(variable-time amplitude amplification)으로 $\kappa$ 에 대한 의존을 $\kappa\log^3\kappa$ 로 줄였다[^2]. Childs, Kothari, Somma 는 위상 추정 대신 $1/x$ 를 [Chebyshev 다항식](chebyshev-polynomials.md)과 [Fourier 급수](fourier-series.md)로 근사해 $\varepsilon$ 에 대한 의존을 $\mathrm{polylog}(1/\varepsilon)$ 로 줄였다[^3].

## 하한과 BQP 완전성

Harrow, Hassidim, Lloyd 는 다항식 크기의 양자 회로를 조건수가 회로 크기의 다항식인 행렬의 역행렬 문제로 바꾸었다. 따라서 이 문제는 BQP(bounded-error quantum polynomial time) 완전이다. 같은 구성에서, $\kappa$ 에 대한 의존을 $\kappa^{1-\delta}$ 로 줄이면서 $\log N$ 의 다항식 시간을 유지하는 알고리즘이 있으면 BQP 와 PSPACE(polynomial space)가 같다[^1].

## 출력의 제약

결과는 상태 $\vert x\rangle$ 이고 성분의 목록이 아니다. 성분 $N$ 개를 측정으로 어림하려면 상태를 $N$ 에 비례하는 횟수만큼 만들어야 하므로 지수적 속도 향상이 사라진다. 지수적 차이가 남는 경우는 $\langle x\vert M\vert x\rangle$ 처럼 $\vert x\rangle$ 에 대한 기댓값 하나를 원할 때다. 또 $\vert b\rangle$ 을 빠르게 만드는 회로와 $A$ 의 원소를 읽는 질의가 있다는 가정이 필요하다[^4].

# 활용

- 최소제곱 문제. 정규방정식 $A^\dagger Ax=A^\dagger b$ 나 $\begin{pmatrix}0&A\cr A^\dagger&0\end{pmatrix}$ 꼴의 에르미트 행렬로 바꾸어 같은 알고리즘을 쓴다.
- 선형 미분방정식. $\dot x=Mx+f$ 를 시간 간격으로 이산화한 큰 연립방정식을 풀어 해의 시각별 값을 하나의 상태로 만든다[^5].
- 양자 기계학습. 추천 시스템과 주성분 분석 같은 선형대수 기반 학습을 이 알고리즘으로 가속하는 제안이 있었다. Tang 은 행렬의 계수가 낮고 성분 크기에 비례해 표본을 뽑는 고전적 접근이 주어지면 추천 시스템 문제를 $N$ 의 다항로그 시간에 푸는 고전 알고리즘을 만들었다[^6]. 이 가정 아래에서는 지수적 속도 향상이 사라진다.

[^1]: A. W. Harrow, A. Hassidim, S. Lloyd, Quantum algorithm for linear systems of equations, *Physical Review Letters* 103 (2009), 150502.
[^2]: A. Ambainis, Variable time amplitude amplification and quantum algorithms for linear algebra problems, *STACS 2012*, LIPIcs 14 (2012), 636–647.
[^3]: A. M. Childs, R. Kothari, R. D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision, *SIAM Journal on Computing* 46 (2017), 1920–1950.
[^4]: S. Aaronson, Read the fine print, *Nature Physics* 11 (2015), 291–293.
[^5]: D. W. Berry, High-order quantum algorithm for solving linear differential equations, *Journal of Physics A* 47 (2014), 105301.
[^6]: E. Tang, A quantum-inspired classical algorithm for recommendation systems, *Proceedings of STOC 2019*, 217–228.

# 연관 문서

## 선수지식

- [양자 위상 추정](quantum-phase-estimation.md)
- [해밀토니언 시뮬레이션](hamiltonian-simulation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #linear_algebra #complexity
