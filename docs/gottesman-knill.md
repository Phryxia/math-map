# Gottesman–Knill 정리

# 개요

**Gottesman–Knill 정리(Gottesman–Knill theorem)** 는 게이트 $H$, $S$, $\mathrm{CNOT}$ 만 쓰는 양자 회로를 고전 컴퓨터가 다항 시간에 흉내 낼 수 있다는 정리다. 큐비트가 $100$ 개이면 상태를 적는 진폭이 $2^{100}$ 개라서 진폭을 하나씩 갱신하는 방법으로는 회로를 따라갈 수 없다. 이 회로들에서는 상태를 진폭 대신 그 상태를 바꾸지 않는 Pauli 행렬 $100$ 개로 적을 수 있고, 게이트마다 그 Pauli 행렬들만 고쳐 쓰면 회로 전체를 따라간다.

# 직관

[양자 회로](quantum-circuits.md)의 두 큐비트 회로 $\mathrm{CNOT}\cdot(H\otimes I)$ 를 $\vert 00\rangle$ 에 건다. $\vert 00\rangle$ 은 $Z\otimes I$ 를 곱해도 $I\otimes Z$ 를 곱해도 그대로이고, 두 큐비트 상태 가운데 이 두 조건을 만족하는 것은 $\vert 00\rangle$ 하나뿐이다. 그래서 진폭 네 개 대신 행렬 두 개 $Z\otimes I$, $I\otimes Z$ 로 상태를 적을 수 있다.

$g\vert\psi\rangle=\vert\psi\rangle$ 이면 $(UgU^\dagger)\thinspace U\vert\psi\rangle=U\vert\psi\rangle$ 이다. 게이트 $U$ 를 건 뒤의 상태는 $UgU^\dagger$ 를 곱해도 그대로이므로, 게이트마다 적어 둔 행렬 $g$ 를 $UgU^\dagger$ 로 바꾸면 된다. $HZH=X$ 이므로 $H\otimes I$ 뒤에는 $X\otimes I$, $I\otimes Z$ 가 되고, $\mathrm{CNOT}$ 은 $X\otimes I$ 를 $X\otimes X$ 로, $I\otimes Z$ 를 $Z\otimes Z$ 로 보내므로 회로가 끝나면 $X\otimes X$, $Z\otimes Z$ 가 남는다. $\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 이 이 두 행렬을 곱해도 그대로인 유일한 상태이고, 회로의 출력과 같다.

첫 큐비트를 계산 기저로 측정하는 것은 $Z\otimes I$ 의 고윳값 $\pm 1$ 을 재는 것이다. $Z\otimes I$ 는 $Z\otimes Z$ 와는 가환이고 $X\otimes X$ 와는 반가환이므로 결과는 반반으로 나온다. 결과가 $+1$ 이면 $X\otimes X$ 를 $Z\otimes I$ 로 바꿔 $Z\otimes I$, $Z\otimes Z$ 를 얻고, 이것은 $\vert 00\rangle$ 이다. 회로를 따라가는 동안 다룬 것은 언제나 행렬 두 개였다.

# 정의

## 안정자 상태

[양자 오류정정부호](quantum-error-correction.md)의 Pauli 군 $\mathcal P\_n$ 의 가환 부분군 $S$ 가 $-I$ 를 포함하지 않고 독립인 생성원 $n$ 개로 생성되면, 안정자 부호 $C(S)$ 는 $1$ 차원이다. 그 단위벡터를 **안정자 상태(stabilizer state)** 라 하고 $S$ 를 그 상태의 안정자라 한다. 직관 절의 $\vert 00\rangle$ 은 $S=\langle Z\otimes I,\thinspace I\otimes Z\rangle$, 회로의 출력은 $S=\langle X\otimes X,\thinspace Z\otimes Z\rangle$ 인 안정자 상태다.

## Clifford 군

$U\mathcal P\_nU^\dagger=\mathcal P\_n$ 인 유니터리 $U$ 전체를 **Clifford 군(Clifford group)** 이라 한다. 전체 위상을 무시하면 이 군은 $H$, $S$, $\mathrm{CNOT}$ 으로 생성된다. 세 게이트가 $X$ 와 $Z$ 를 보내는 곳은 다음과 같다. $\mathrm{CNOT}$ 은 첫 큐비트가 제어 큐비트다.

| 게이트 | 보내는 곳 |
| --- | --- |
| $H$ | $X\mapsto Z$, $Z\mapsto X$ |
| $S$ | $X\mapsto Y$, $Z\mapsto Z$ |
| $\mathrm{CNOT}$ | $X\otimes I\mapsto X\otimes X$, $I\otimes X\mapsto I\otimes X$, $Z\otimes I\mapsto Z\otimes I$, $I\otimes Z\mapsto Z\otimes Z$ |

$S=\mathrm{diag}(1,i)$ 로 계산하면 $SXS^\dagger=\begin{pmatrix}0&-i\cr i&0\end{pmatrix}=Y$ 다. Clifford 게이트와 계산 기저 측정만으로 된 회로를 **안정자 회로(stabilizer circuit)** 라 한다. 직관 절의 회로가 안정자 회로다.

## 이진 표현

전체 위상을 무시하면 Pauli 원소는 $X^{x\_1}Z^{z\_1}\otimes\cdots\otimes X^{x\_n}Z^{z\_n}$ 꼴이고, 벡터 $(x\vert z)\in\mathbb F\_2^{2n}$ 로 적힌다. 두 원소가 가환인 것은

$$
x\cdot z'+z\cdot x'\equiv 0\pmod 2
$$

인 것과 동치다. $X\otimes X=(1,1\vert 0,0)$ 과 $Z\otimes Z=(0,0\vert 1,1)$ 은 $1+1\equiv 0$ 이라 가환이고, $Z\otimes I=(0,0\vert 1,0)$ 과 $X\otimes X$ 는 $1$ 이라 반가환이다. 생성원 $n$ 개의 벡터를 행으로 쌓고 각 행에 부호 비트를 붙인 $n\times(2n+1)$ 비트 표를 **안정자 표(stabilizer tableau)** 라 한다.

# 성질

## 정리

$\vert 0\cdots 0\rangle$ 에서 시작해 $H$, $S$, $\mathrm{CNOT}$ 과 계산 기저 측정을 다항 개 쓰는 회로는, 측정 결과의 분포에서 표본을 뽑는 일과 각 결과의 확률을 계산하는 일을 고전 컴퓨터가 다항 시간에 한다[^1]. 측정 결과에 따라 다음 Clifford 게이트를 고르는 회로도 같다.

## 시뮬레이션 절차

상태를 안정자 표로 적는다. 게이트 하나는 표의 두 열에만 걸리므로 위의 표대로 행 $n$ 개를 고치는 데 $O(n)$ 이 든다. 큐비트 $j$ 의 측정은 $Z\_j$ 와 반가환인 생성원이 있는지로 갈린다.

있으면 결과가 확률 $\tfrac12$ 씩이고, 그 생성원을 $\pm Z\_j$ 로 바꾸고 나머지 반가환인 생성원에 그것을 곱한다. 없으면 $Z\_j$ 나 $-Z\_j$ 가 $S$ 에 들어 있어 결과가 정해지고, 어느 쪽인지는 생성원의 곱을 $\mathbb F\_2$ 위의 일차방정식으로 풀어 찾는다.

생성원마다 짝이 되는 행을 함께 적어 두면 측정 하나가 $O(n^2)$ 이다[^2].

## 측정 확률

안정자 상태의 큐비트를 하나씩 계산 기저로 측정하면 결과는 매번 정해져 있거나 반반이다. 그래서 나올 수 있는 결과들의 확률이 모두 같고 $2^{-k}$ 꼴이다. 직관 절의 출력은 $00$, $11$ 이 각각 $2^{-1}$ 이다.

## 계산 능력

안정자 회로의 출력을 판정하는 문제는 부류 $\oplus\mathrm L$ 에 대해 완전하다[^2]. $\oplus\mathrm L$ 은 로그 공간 비결정 기계의 받아들이는 경로 수가 홀수인지로 판정되는 문제의 부류이고 [공간 복잡도](space-complexity.md)의 부류 L 을 포함한다. 안정자 표의 갱신이 $\mathbb F\_2$ 위의 행렬 계산이라 이 부류에 들어간다.

안정자 상태는 [양자 얽힘](quantum-entanglement.md)을 가질 수 있다. 직관 절의 출력이 얽힌 상태이고, 큐비트 $n$ 개를 모두 얽은 $\tfrac1{\sqrt 2}(\vert 0\cdots 0\rangle+\vert 1\cdots 1\rangle)$ 도 안정자 상태다. 그래서 얽힘만으로는 고전 시뮬레이션이 어려워지지 않는다.

## T 게이트와 마법 상태

Clifford 군에 $T=\mathrm{diag}(1,e^{i\pi/4})$ 를 더하면 보편 게이트 집합이 된다. $T$ 는 $X$ 를 Pauli 원소가 아닌 $\tfrac1{\sqrt 2}(X+Y)$ 로 보내므로 Clifford 군에 들지 않는다. 상태 $T\vert +\rangle$ 를 **마법 상태(magic state)** 라 한다. 마법 상태 하나와 안정자 회로로 $T$ 게이트 하나를 만들 수 있고, 잡음 섞인 마법 상태 여러 개를 안정자 회로로 정제하는 절차를 [마법 상태 증류](magic-state-distillation.md)라 한다[^3]. Clifford 게이트와 $T$ 게이트 $t$ 개로 된 회로의 고전 시뮬레이션은 $n$ 에 대해 다항이고 $t$ 에 대해 지수인 시간에 된다[^4].

# 활용

- 오류정정의 검증. [양자 오류정정부호](quantum-error-correction.md)의 부호화와 증후 측정은 안정자 회로이므로, 큐비트 수천 개의 부호에서도 오류와 증후를 고전 컴퓨터로 시뮬레이션해 복호기를 시험한다.
- 양자 순간이동. [양자 순간이동](quantum-teleportation.md)의 Bell 측정과 Pauli 보정은 안정자 회로다. 옮기는 상태가 안정자 상태가 아니어도, 회로가 그 상태에 거는 연산은 Pauli 원소의 갱신으로 적힌다.
- 위상적 양자 계산. Ising 형의 [애니온](anyons.md)을 땋아 만드는 게이트는 Clifford 군에 들어 있어 이 정리로 고전 시뮬레이션된다. 보편 계산에는 마법 상태가 따로 있어야 한다.
- 무작위 벤치마킹. 무작위 Clifford 게이트열과 그 역을 걸어 처음 상태로 돌아오는 확률로 게이트의 평균 오류율을 잰다. 이상적인 출력을 안정자 표로 미리 계산한다.

[^1]: D. Gottesman, The Heisenberg representation of quantum computers, arXiv:quant-ph/9807006 (1998).
[^2]: S. Aaronson, D. Gottesman, Improved simulation of stabilizer circuits, *Physical Review A* 70 (2004), 052328.
[^3]: S. Bravyi, A. Kitaev, Universal quantum computation with ideal Clifford gates and noisy ancillas, *Physical Review A* 71 (2005), 022316.
[^4]: S. Bravyi, D. Gosset, Improved classical simulation of quantum circuits dominated by Clifford gates, *Physical Review Letters* 116 (2016), 250501.

# 연관 문서

## 선수지식

- [양자 오류정정부호](quantum-error-correction.md)

## 더 알아보기

- [마법 상태 증류](magic-state-distillation.md)

#computation #group_theory #linear_algebra
