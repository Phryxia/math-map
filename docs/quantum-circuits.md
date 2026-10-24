# 양자 회로

# 개요

**양자 회로(quantum circuit)** 는 큐비트 $n$ 개의 상태 벡터에 몇 개의 큐비트에만 작용하는 유니터리 행렬을 차례로 곱하고 마지막에 측정하는 계산 모형이다. 상태 공간은 $\mathbb C^2$ 의 $n$ 겹 [텐서곱](tensor-products.md)이고, 측정 결과는 진폭의 절댓값 제곱을 확률로 갖는다. 다항 크기의 회로로 오류 확률 $1/3$ 이하로 판정되는 문제의 부류가 BQP(bounded-error quantum polynomial time)이고, 고전 계산의 [P 대 NP 문제](p-np.md)(nondeterministic polynomial time)와 같은 꼴의 질문이 이 부류에 대해 생긴다.

# 직관

동전을 공정하게 던지는 연산을 두 번 하면 앞면과 뒷면이 각각 확률 $1/2$ 이다. 확률 벡터 $(1,0)$ 에 행렬 $\tfrac12\begin{pmatrix}1&1\cr 1&1\end{pmatrix}$ 을 두 번 곱한 결과가 $(1/2,1/2)$ 이다.

확률 대신 부호가 있는 진폭을 쓰고 행렬 $H=\tfrac1{\sqrt 2}\begin{pmatrix}1&1\cr 1&-1\end{pmatrix}$ 을 곱한다. $(1,0)$ 에 한 번 곱하면 $(1/\sqrt 2,1/\sqrt 2)$ 이고 진폭의 제곱이 각각 $1/2$ 이라 동전과 같아 보인다. 한 번 더 곱하면 둘째 성분이 $\tfrac12-\tfrac12=0$ 이 되어 $(1,0)$ 으로 돌아온다. 확률은 더해지기만 하지만 진폭은 서로 지워질 수 있고, 양자 알고리즘은 틀린 답의 진폭을 지우고 맞는 답의 진폭을 키우도록 회로를 짠다.

# 정의

## 큐비트와 상태

**큐비트(qubit)** 의 상태는 $\mathbb C^2$ 의 단위벡터 $\alpha\vert 0\rangle+\beta\vert 1\rangle$ 이다. 큐비트 $n$ 개의 상태는 $(\mathbb C^2)^{\otimes n}\cong\mathbb C^{2^n}$ 의 단위벡터

$$
\vert\psi\rangle=\sum_{b\in\lbrace 0,1\rbrace^n}\alpha_b\vert b\rangle,\qquad\sum_b\vert\alpha_b\vert^2=1
$$

이고, 전체 위상 $e^{i\theta}$ 배는 같은 상태로 본다.

## 게이트와 회로

**게이트(gate)** 는 큐비트 한두 개에 작용하는 유니터리 행렬을 나머지 큐비트의 항등행렬과 텐서곱한 것이다. 자주 쓰는 게이트는 다음과 같다.

$$
H=\frac1{\sqrt 2}\begin{pmatrix}1&1\cr 1&-1\end{pmatrix},\quad S=\begin{pmatrix}1&0\cr 0&i\end{pmatrix},\quad T=\begin{pmatrix}1&0\cr 0&e^{i\pi/4}\end{pmatrix},\quad \mathrm{CNOT}\vert a,b\rangle=\vert a,a\oplus b\rangle
$$

$\mathrm{CNOT}$ 은 제어 NOT 게이트(controlled-NOT gate)로, 첫 큐비트가 $1$ 일 때 둘째 큐비트를 뒤집는다. 크기 $m$ 인 회로는 게이트 $G_1,\dots,G_m$ 의 열이고 입력 $\vert 0\cdots 0\rangle$ 에서 $G_m\cdots G_1\vert 0\cdots 0\rangle$ 을 계산한다.

## 측정

상태 $\vert\psi\rangle$ 를 계산 기저로 측정하면 $b$ 가 확률 $\vert\alpha_b\vert^2$ 로 나온다(Born 규칙, Born rule). 회로의 출력은 첫 큐비트를 측정한 비트다.

## BQP

언어 $L$ 이 BQP 에 속한다는 것은 입력 길이 $\vert x\vert$ 의 다항식 크기인 회로를 $x$ 에서 다항 시간에 만드는 고전 알고리즘이 있고, 그 회로의 출력이 $x\in L$ 이면 확률 $2/3$ 이상으로 $1$, $x\notin L$ 이면 확률 $2/3$ 이상으로 $0$ 인 것이다.

# 성질

## 보편성

단일 큐비트 유니터리 전체와 $\mathrm{CNOT}$ 으로 $\mathrm U(2^n)$ 의 모든 원소를 정확히 만들 수 있다[^1]. 유한 집합으로는 정확히 만들 수 없지만 $\lbrace H,T,\mathrm{CNOT}\rbrace$ 는 조밀한 부분군을 생성하는 **보편 게이트 집합(universal gate set)** 이다. 위상을 빼면 $H$ 와 $T$ 가 $\mathrm{SU}(2)$ 의 조밀한 부분군을 생성한다.

[Solovay–Kitaev 정리](solovay-kitaev.md)에 따르면 이 집합의 게이트 $O(\log^c(1/\varepsilon))$ 개로 단일 큐비트 유니터리를 오차 $\varepsilon$ 안에 근사할 수 있다. 다른 보편 게이트 집합으로 짠 회로를 옮길 때 크기가 다항 로그 배로만 늘므로 BQP 는 보편 게이트 집합의 선택에 의존하지 않는다.

## 고전 계산의 포함

Toffoli 게이트 $\vert a,b,c\rangle\mapsto\vert a,b,c\oplus(a\wedge b)\rangle$ 는 순열행렬이므로 유니터리이고, 보조 비트를 두면 AND 와 NOT 을 만든다. 따라서 고전 회로는 같은 크기 규모의 양자 회로로 옮겨지고 P 가 BQP 에 포함된다. 무작위 비트는 $H\vert 0\rangle$ 을 측정해 얻으므로 BPP(bounded-error probabilistic polynomial time)도 BQP 에 포함된다.

## BQP 의 상계

$\mathrm{BQP}\subseteq\mathrm{PSPACE}$ 다[^2]. PSPACE(polynomial space)는 다항 공간으로 판정되는 문제의 부류다([공간 복잡도](space-complexity.md)). 출력이 $1$ 일 확률은 진폭 $\langle b\vert G_m\cdots G_1\vert 0\cdots 0\rangle$ 의 제곱의 합이고, 각 진폭은 중간 기저 상태 $m-1$ 개에 걸친 경로 합이다. 경로를 하나씩 돌며 더하면 시간은 지수지만 공간은 다항으로 충분하다.

## Clifford 회로

$H$, $S$, $\mathrm{CNOT}$ 이 생성하는 군을 **Clifford 군(Clifford group)** 이라 한다. 계산 기저 상태에서 시작해 Clifford 게이트만 쓰고 계산 기저로 측정하는 회로는 고전 컴퓨터로 다항 시간에 시뮬레이션된다(Gottesman–Knill 정리, Gottesman–Knill theorem)[^3]. 증명은 Clifford 게이트가 Pauli 행렬(Pauli matrices)을 켤레로 Pauli 행렬에 보낸다는 것을 써서 상태를 $n$ 개의 Pauli 행렬 생성원으로 추적한다. Clifford 군에 $T$ 를 더하면 보편 게이트 집합이 된다.

# 활용

- 소인수분해. [Shor 알고리즘](shor-algorithm.md)은 정수 $N$ 의 소인수분해를 $\log N$ 의 다항 크기 회로로 풀고, 그래서 [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 안전성 가정이 양자 회로 앞에서 무너진다. 이 위험에 대비한 체계가 [양자 내성 암호](post-quantum-cryptography.md)다.
- 회로 컴파일. 하드웨어가 제공하는 보편 게이트 집합으로 알고리즘의 유니터리를 근사할 때 Solovay–Kitaev 정리의 근사 길이를 쓴다.
- 오류정정. 양자 오류정정부호는 Clifford 회로로 부호화와 증후 측정을 하고, Gottesman–Knill 정리로 그 부분을 고전 시뮬레이션해 검증한다.

[^1]: A. Barenco et al., Elementary gates for quantum computation, *Physical Review A* 52 (1995), 3457–3467.
[^2]: E. Bernstein, U. Vazirani, Quantum complexity theory, *SIAM Journal on Computing* 26 (1997), 1411–1473.
[^3]: D. Gottesman, The Heisenberg representation of quantum computers, arXiv:quant-ph/9807006 (1998).

# 연관 문서

## 선수지식

- [텐서곱](tensor-products.md)
- [P 대 NP 문제](p-np.md)

## 더 알아보기

- [Shor 알고리즘](shor-algorithm.md)

#computation #linear_algebra #group_theory
