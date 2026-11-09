# Deutsch–Jozsa 알고리즘

# 개요

**Deutsch–Jozsa 알고리즘(Deutsch–Jozsa algorithm)** 은 함수가 모든 입력에서 같은 값을 내는지, 입력의 절반에서 $0$ 이고 절반에서 $1$ 을 내는지를 함수값 한 번의 계산으로 가르는 양자 알고리즘이다. 길이 $2$ 인 비트열 $00,01,10,11$ 에서 $0$ 이나 $1$ 을 내는 함수가 둘 가운데 하나라는 것만 알 때, 함수값을 하나씩 물어서 확실히 가르려면 세 번을 물어야 한다. 처음 두 값이 같으면 셋째 값을 보기 전에는 어느 쪽인지 정해지지 않는다. Deutsch–Jozsa 알고리즘은 네 입력을 겹쳐 놓고 함수값을 진폭의 부호로 한 번에 받은 뒤, 부호들이 서로 지워지는지를 측정으로 확인한다.

# 직관

입력이 $0$ 과 $1$ 둘뿐인 함수 $f$ 에서 $f(0)=f(1)$ 인지 묻는다. 고전적으로는 $f(0)$ 과 $f(1)$ 을 둘 다 계산해야 한다.

[양자 회로](quantum-circuits.md)에서는 큐비트를 $\tfrac1{\sqrt 2}(\vert 0\rangle+\vert 1\rangle)$ 로 두고, $\vert x\rangle$ 에 $(-1)^{f(x)}$ 를 곱하는 연산을 한 번 건다. 상태는 다음이 된다.

$$
\tfrac1{\sqrt 2}\big((-1)^{f(0)}\vert 0\rangle+(-1)^{f(1)}\vert 1\rangle\big)
$$

여기에 $H$ 를 걸면 $\vert 0\rangle$ 의 진폭은 $\tfrac12\big((-1)^{f(0)}+(-1)^{f(1)}\big)$ 이다. $f(0)=f(1)$ 이면 이 값이 $\pm 1$ 이라 측정값이 확률 $1$ 로 $0$ 이고, $f(0)\ne f(1)$ 이면 두 부호가 지워져 측정값이 확률 $1$ 로 $1$ 이다.

함수값 두 개를 따로 알아낸 것은 아니다. 두 값이 같은지 하나만 측정으로 나왔고, 그것을 알아내는 데 $f$ 를 한 번 계산했다.

# 정의

## Deutsch–Jozsa 문제

$f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 가 다음 둘 가운데 하나라는 것이 약속되어 있다.

- **상수(constant)**: 모든 $x$ 에서 $f(x)$ 가 같다.
- **균형(balanced)**: $f(x)=0$ 인 $x$ 가 정확히 $2^{n-1}$ 개다.

$f$ 에 질의만 할 수 있을 때 어느 쪽인지 가리는 문제를 **Deutsch–Jozsa 문제(Deutsch–Jozsa problem)** 라 한다. 직관 절은 $n=1$ 이고, $n=1$ 에서는 $f(0)\ne f(1)$ 이 균형이다. $n=2$ 에서 $f(x\_1x\_2)=x\_1$ 은 $00,01$ 에서 $0$, $10,11$ 에서 $1$ 이므로 균형이다.

## 질의

질의는 $\vert x\rangle\vert b\rangle\mapsto\vert x\rangle\vert b\oplus f(x)\rangle$ 를 한 번 거는 것이다. 둘째 큐비트를 $\vert -\rangle=\tfrac1{\sqrt 2}(\vert 0\rangle-\vert 1\rangle)$ 로 두면 $f(x)=1$ 일 때 $\vert 0\rangle$ 과 $\vert 1\rangle$ 이 맞바뀌어 $\vert -\rangle$ 에 $-1$ 이 곱해지므로

$$
\vert x\rangle\vert -\rangle\mapsto(-1)^{f(x)}\vert x\rangle\vert -\rangle
$$

이다. 둘째 큐비트는 그대로이고 첫 레지스터에 부호만 남는다. 이 연산을 **위상 질의(phase query)** 라 한다. 직관 절에서 $(-1)^{f(x)}$ 를 곱한 연산이 이것이다.

## 회로

1. 큐비트 $n$ 개에 $H^{\otimes n}$ 을 걸어 $2^{-n/2}\sum_x\vert x\rangle$ 을 만든다.
2. 위상 질의를 한 번 걸어 $2^{-n/2}\sum_x(-1)^{f(x)}\vert x\rangle$ 을 만든다.
3. $H^{\otimes n}$ 을 걸고 측정한다. 측정값이 $0\cdots 0$ 이면 상수, 그 밖이면 균형이라 답한다.

$H^{\otimes n}\vert x\rangle=2^{-n/2}\sum_y(-1)^{x\cdot y}\vert y\rangle$ 이므로 3단계 측정 직전의 $\vert 0\cdots 0\rangle$ 의 진폭은

$$
\frac1{2^n}\sum_{x\in\lbrace 0,1\rbrace^n}(-1)^{f(x)}
$$

이다. 상수 함수에서는 $\pm 1$ 이고, 균형 함수에서는 $+1$ 과 $-1$ 이 $2^{n-1}$ 개씩이라 $0$ 이다. $n=2$, $f(x\_1x\_2)=x\_1$ 이면 2단계의 상태는 다음과 같다.

$$
\tfrac12(\vert 00\rangle+\vert 01\rangle-\vert 10\rangle-\vert 11\rangle)=\vert -\rangle\otimes\vert +\rangle
$$

그리고 3단계 뒤 $\vert 10\rangle$ 이 되어 측정값 $10$ 이 나온다. $f\equiv 0$ 이면 2단계에서 상태가 바뀌지 않고 3단계 뒤 $\vert 00\rangle$ 으로 돌아온다.

# 성질

## 결정적 고전 질의 하한

결정적 고전 알고리즘은 최악의 경우 $2^{n-1}+1$ 번 질의해야 한다. 처음 $2^{n-1}$ 번의 질의에 모두 $0$ 을 답하면, 남은 입력에 모두 $0$ 을 주는 상수 함수와 모두 $1$ 을 주는 균형 함수가 둘 다 지금까지의 답과 맞는다. 한 번 더 물으면 갈린다. 개요의 $n=2$ 에서 세 번이 이것이다.

## 무작위 고전 알고리즘

입력을 독립으로 고르게 $k$ 번 뽑아 값이 모두 같으면 상수라 답하는 알고리즘은 상수 함수에서 틀리지 않는다. 균형 함수에서 $k$ 개의 값이 모두 같을 확률은 $2\cdot 2^{-k}=2^{1-k}$ 이므로, $k=2$ 이면 오류 확률이 $1/2$, $k=11$ 이면 $1/1024$ 미만이다. 오류를 조금 허용하면 고전 질의 수가 $n$ 과 무관한 상수로 충분하다.

양자 질의 한 번과 고전 질의 지수 번의 차이는 오류 없이 답하라고 요구할 때만 생긴다. 오류를 허용해도 지수 차이가 남는 첫 예가 [Simon 알고리즘](simon-algorithm.md)이다.

## 측정값의 분포

3단계에서 $y$ 가 나올 진폭은 $2^{-n}\sum_x(-1)^{f(x)+x\cdot y}$ 다. $F(x)=(-1)^{f(x)}$ 로 두면 이것은 [부울 함수의 Fourier 해석](boolean-fourier.md)의 Fourier 계수 $\hat F(y)$ 이고, $y$ 가 확률 $\hat F(y)^2$ 로 나온다. Parseval 등식 $\sum_y\hat F(y)^2=1$ 이 확률의 합이 $1$ 인 것과 같다. 상수 함수는 Fourier 무게가 모두 $y=0\cdots 0$ 에 있고, 균형 함수는 그 자리의 무게가 $0$ 이다.

## Bernstein–Vazirani 문제

$f(x)=a\cdot x\bmod 2$ 인 숨은 비트열 $a$ 를 찾는 문제를 **Bernstein–Vazirani 문제(Bernstein–Vazirani problem)** 라 한다[^1]. 같은 회로에서 2단계의 상태가 $H^{\otimes n}\vert a\rangle$ 이므로 3단계 뒤 측정값이 확률 $1$ 로 $a$ 다. 고전 질의 한 번은 $a$ 에 대한 일차식 하나의 값을 주므로 고전적으로는 질의가 $n$ 번 든다. 정의 절의 $f(x\_1x\_2)=x\_1$ 은 $a=10$ 인 경우이고, 측정값 $10$ 이 $a$ 다.

# 활용

- 복잡도 분리. 오류 없는 양자 다항 시간(EQP, exact quantum polynomial time)과 결정적 고전 계산 사이에 질의 함수(oracle)를 기준으로 지수 차이가 있는 첫 예로 쓰인다[^2].
- 위상 질의. 보조 큐비트를 $\vert -\rangle$ 로 두어 함수값을 진폭의 부호로 옮기는 방법을 [Grover 알고리즘](grover-algorithm.md)의 정답 표시가 그대로 쓴다.
- 고윳값의 위상 읽기. $\vert 0\rangle$ 과 $\vert 1\rangle$ 을 맞바꾸는 게이트를 $X$ 라 하면, 직관 절의 회로는 전체 위상을 빼고 고유벡터 $\vert -\rangle$ 과 $U=X^{f(0)\oplus f(1)}$ 에 대한 정밀도 비트 하나의 [양자 위상 추정](quantum-phase-estimation.md)이다. 위상이 $0$ 이나 $1/2$ 이고, 측정값이 그 이진 전개의 첫 자리다.

[^1]: E. Bernstein, U. Vazirani, Quantum complexity theory, *SIAM Journal on Computing* 26 (1997), 1411–1473.
[^2]: D. Deutsch, R. Jozsa, Rapid solution of problems by quantum computation, *Proceedings of the Royal Society of London A* 439 (1992), 553–558. 질의를 한 번으로 줄인 판본은 R. Cleve, A. Ekert, C. Macchiavello, M. Mosca, Quantum algorithms revisited, *Proceedings of the Royal Society A* 454 (1998), 339–354.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #complexity
