# 불 회로

# 개요

**불 회로(Boolean circuit)** 는 입력 변수 $x_1,\dots,x_n$ 과 AND, OR, NOT 게이트를 정점으로 하는 방향 비순환 그래프로, 각 게이트가 들어오는 변의 값에 논리 연산을 적용해 출력 정점에서 함수 $\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 를 계산하는 계산 모형이다. 게이트 수를 크기, 입력에서 출력까지 가장 긴 경로의 길이를 깊이라 한다.

입력 길이마다 회로 하나를 두는 회로 족은 [P 대 NP 문제](p-np.md)의 Turing 기계와 다른 계산 모형이다. 다항 크기 회로 족으로 판정되는 언어의 부류를 P/poly 라 하고, $\mathrm P\subseteq\mathrm{P/poly}$ 이므로 NP(nondeterministic polynomial time) 의 어떤 언어가 P/poly 밖에 있음을 보이면 $\mathrm P\ne\mathrm{NP}$ 가 나온다.

# 직관

변수 $n$ 개의 불 함수는 입력 $2^n$ 개마다 $0$ 이나 $1$ 을 정하므로 $2^{2^n}$ 개다. 모든 함수는 참이 되는 입력마다 AND 하나를 두고 그것들을 OR 로 묶어 크기 $O(n2^n)$ 의 회로로 계산된다.

반대로 게이트가 $s$ 개인 회로를 세면, 각 게이트는 연산 셋 가운데 하나와 입력 둘을 앞의 $s+n$ 개 정점에서 고르므로 회로의 수는 많아야 $\big(3(s+n)^2\big)^s$ 이다. $s=2^n/(10n)$ 이면 이 수가 $2^{2^n}$ 보다 훨씬 작다. 그래서 대부분의 함수는 크기가 $2^n/(10n)$ 보다 큰 회로가 있어야 계산된다. 이 논증은 그런 함수가 있다는 것만 보이고, 어느 함수인지는 정하지 않는다.

# 정의

## 회로

불 회로는 방향 비순환 그래프 $C$ 와 각 정점의 꼬리표로 이루어진다. 들어오는 변이 없는 정점은 입력 변수 $x_i$ 나 상수 $0,1$ 이고, 나머지 정점은 들어오는 변이 둘인 AND, OR 이나 하나인 NOT 이다. 출력 정점이 하나 정해져 있고, 입력 $x\in\lbrace 0,1\rbrace^n$ 에서 각 정점의 값을 위상순으로 계산한 출력 정점의 값을 $C(x)$ 로 쓴다.

**크기(size)** 는 입력이 아닌 정점의 수이고 **깊이(depth)** 는 입력에서 출력까지의 가장 긴 경로의 변 수다.

## 회로 족과 P/poly

회로 족 $(C_n)\_{n\ge 1}$ 은 입력 길이 $n$ 마다 회로 $C_n$ 을 하나씩 둔 것이고, $x\in L\iff C_{\lvert x\rvert}(x)=1$ 이면 $L$ 을 판정한다. 크기가 $n$ 의 다항식으로 묶인 회로 족으로 판정되는 언어의 부류를 **P/poly** 라 한다. P/poly 는 입력 길이에만 의존하는 다항 길이의 조언 문자열을 받는 다항시간 Turing 기계가 판정하는 언어의 부류와 같다.

# 성질

## 크기의 한계

정리. 변수 $n$ 개의 거의 모든 불 함수는 크기가 $\Omega(2^n/n)$ 인 회로가 있어야 계산된다(C. E. Shannon)[^1]. 모든 불 함수는 크기 $(1+o(1))2^n/n$ 의 회로로 계산된다(O. B. Lupanov)[^2].

증명의 요지. 하한은 직관 절의 세기다. 상한은 변수를 두 묶음으로 나누어, 앞 묶음의 모든 함수를 미리 계산해 두고 뒤 묶음의 값에 따라 골라 쓰는 구성이다.

## P 와 P/poly

- $\mathrm P\subseteq\mathrm{P/poly}$ 다. 다항시간 Turing 기계의 계산 표를 칸마다 작은 회로로 바꾸면 크기가 시간의 제곱 정도인 회로가 된다. 이 변환이 [NP-완전성과 Cook–Levin 정리](np-completeness.md)의 증명에서 쓰는 표와 같다.
- P/poly 에는 결정 불가능한 언어도 있다. 결정 불가능한 집합 $H\subseteq\mathbb N$ 에 대해 언어 $\lbrace 1^n:n\in H\rbrace$ 는 길이 $n$ 마다 입력이 $1^n$ 인지 보는 회로나 상수 $0$ 회로 하나로 판정되기 때문이다.
- [무작위 복잡도 부류](randomized-complexity-classes.md)의 BPP(bounded-error probabilistic polynomial time)는 P/poly 에 든다(Adleman 정리).
- NP 가 P/poly 에 들면 [다항 계층](polynomial-hierarchy.md)이 둘째 층으로 붕괴한다(Karp–Lipton 정리).

## 상수 깊이 회로의 하한

깊이가 상수이고 AND 와 OR 게이트의 들어오는 변 수에 제한이 없는 다항 크기 회로의 부류를 $\mathrm{AC}^0$ 이라 한다. 입력의 $1$ 의 개수의 홀짝을 계산하는 함수는 $\mathrm{AC}^0$ 에 들지 않는다. 깊이 $d$ 회로로 계산하려면 크기가 $2^{\Omega(n^{1/(d-1)})}$ 이어야 한다는 것을 J. Håstad 가 무작위 제한(random restriction)으로 증명했다[^3].

# 활용

- [대화형 증명](interactive-proofs.md)과 계산 위임. [Goldwasser–Kalai–Rothblum 프로토콜](gkr-protocol.md)은 층으로 나뉜 산술회로의 출력을 회로의 깊이에 비례하는 라운드로 검증한다.
- 암호. [뒤섞인 회로](garbled-circuits.md)는 함수를 불 회로로 쓰고 게이트마다 진리표를 암호화해 두 사람이 입력을 숨긴 채 함수값을 계산한다.
- 탈무작위화. [유사난수 생성기](pseudorandom-generators.md)의 비무작위화 정리는 지수 크기 회로가 필요한 함수의 존재를 가정으로 쓴다.
- 병렬 계산. 깊이가 $\log n$ 의 거듭제곱이고 크기가 다항인 회로 족의 부류 NC(Nick's class)가 병렬로 빠르게 풀리는 문제의 모형이다.

[^1]: C. E. Shannon, "The synthesis of two-terminal switching circuits", Bell System Technical Journal 28(1) (1949), 59–98.
[^2]: O. B. Lupanov, "A method of circuit synthesis", Izvestiya Vysshikh Uchebnykh Zavedenii, Radiofizika 1 (1958), 120–140.
[^3]: J. Håstad, "Almost optimal lower bounds for small depth circuits", Proceedings of the 18th ACM Symposium on Theory of Computing (1986), 6–20.

# 연관 문서

## 선수지식

- [P 대 NP 문제](p-np.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #logic #computation
