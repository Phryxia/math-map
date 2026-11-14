# 후선택 양자 계산

# 개요

**후선택 양자 계산(postselected quantum computation)** 은 양자 회로를 돌린 뒤 정해 둔 큐비트를 측정해 원하는 값이 나온 실행만 남기고, 남은 실행의 출력으로 답을 정하는 계산 모형이다. 성공 확률이 $2^{-100}$ 인 검사를 통과한 실행만 보려면 실제로는 회로를 $2^{100}$ 번쯤 돌려야 하므로 이 모형은 만들 수 있는 기계가 아니다. 그래도 이 모형이 푸는 문제의 부류가 해의 과반을 묻는 고전 부류 [PP](probabilistic-polynomial-time.md)(probabilistic polynomial time)와 정확히 같다는 정리가 있고, 그 정리로 양자 회로의 출력 분포를 고전 컴퓨터가 흉내 내기 어렵다는 것을 증명한다.

# 직관

함수 $f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 에서 값이 $1$ 인 입력의 수를 $s$ 라 하고, $s$ 가 $2^{n-1}$ 보다 큰지 묻는다. [양자 회로](quantum-circuits.md)로 $2^{-n/2}\sum\_x\vert x\rangle\vert f(x)\rangle$ 를 만들고 앞의 $n$ 큐비트에 $H$ 를 건 뒤 앞의 $n$ 큐비트를 측정한다.

결과가 $0\cdots 0$ 이면 마지막 큐비트는 $(2^n-s)\vert 0\rangle+s\vert 1\rangle$ 에 비례하는 상태다. $n=2$ 이고 $f$ 가 $11$ 에서만 $1$ 이면 $s=1$ 이고, 상태는 $(3\vert 0\rangle+\vert 1\rangle)/\sqrt{10}$ 이다. 이 큐비트에서 $1$ 이 나올 확률 $s^2/((2^n-s)^2+s^2)$ 은 $s\gt 2^{n-1}$ 일 때만 $1/2$ 보다 크다.

$s=2^{n-1}+1$ 이면 이 확률은 $1/2$ 보다 $2^{-n}$ 규모만큼만 크다. 그 차이를 측정 결과의 빈도로 가려내려면 회로를 $4^n$ 번 규모로 돌려야 한다. 실행 가운데 일부만 남기는 일을 허락하면, 이 작은 차이를 남은 실행에서 큰 차이로 바꿀 수 있다.

# 정의

## PostBQP

언어 $L$ 이 **PostBQP**(postselected bounded-error quantum polynomial time) 에 속한다는 것은 다음을 만족하는 다항 크기 양자 회로 족이 있는 것이다. 회로는 후선택 큐비트 $P$ 와 출력 큐비트 $Q$ 를 갖는다.

1. 모든 입력에서 $\Pr\lbrack P=1\rbrack\gt 0$ 이다.
2. $x\in L$ 이면 $\Pr\lbrack Q=1\mid P=1\rbrack\ge 2/3$ 이다.
3. $x\notin L$ 이면 $\Pr\lbrack Q=1\mid P=1\rbrack\le 1/3$ 이다.

조건부 확률은 $P=1$ 인 실행만 남기고 센 비율이다. $\Pr\lbrack P=1\rbrack$ 이 지수적으로 작아도 된다는 것이 BQP(bounded-error quantum polynomial time)와의 차이다.

# 성질

## Aaronson 정리

$\mathrm{PostBQP}=\mathrm{PP}$ 다[^1]. 이것이 Aaronson 정리(Aaronson's theorem)다.

$\mathrm{PostBQP}\subseteq\mathrm{PP}$ 의 요지. 회로의 진폭은 경로 합이고, $\Pr\lbrack Q=1,P=1\rbrack$ 과 $\Pr\lbrack P=1\rbrack$ 은 둘 다 정수 값 #P 함수 둘의 차를 같은 $2$ 의 거듭제곱으로 나눈 꼴로 적힌다. 그래서 $\Pr\lbrack Q=1,P=1\rbrack\ge\tfrac23\Pr\lbrack P=1\rbrack$ 인지는 #P 함수 몇 개의 차가 양수인지를 묻는 것이고, 이것은 PP 에 든다.

$\mathrm{PP}\subseteq\mathrm{PostBQP}$ 의 요지. 직관 절의 큐비트 $(2^n-s)\vert 0\rangle+s\vert 1\rangle$ 에 $H$ 를 걸면 $\vert 1\rangle$ 의 진폭이 $2^n-2s$ 에 비례하고, 그 부호가 답이다. 이 큐비트와 보조 큐비트를 여러 비율 $\alpha:\beta$ 로 섞은 상태를 만들고 보조 큐비트가 $1$ 인 실행만 남기면, 남은 큐비트가 $\vert +\rangle$ 쪽인지 $\vert -\rangle$ 쪽인지로 $2^n-2s$ 의 부호가 상수 확률 차이로 드러난다. 비율을 $2^{-n}$ 부터 $2^n$ 까지 바꿔 가며 되풀이하면 그중 하나가 $s$ 에 맞는다.

## 닫힘 성질

오류를 줄인 두 회로를 나란히 돌리고 두 후선택 큐비트가 모두 $1$ 인 실행만 남기면 두 언어의 교집합이 판정되므로, PostBQP 는 교집합에 닫혀 있다. Aaronson 정리로 PP 도 교집합에 닫혀 있다. 이것은 R. Beigel, N. Reingold, D. Spielman 이 유리함수 근사로 처음 증명한 [Beigel–Reingold–Spielman 정리](beigel-reingold-spielman-theorem.md)이고[^2], 후선택으로 쓰면 증명이 몇 줄이다.

## 표본추출의 고전적 어려움

후선택을 고전 무작위 알고리즘에 허락한 부류 PostBPP 는 $\mathrm{BPP}^{\mathrm{NP}}$ 에 포함되고, 따라서 [다항 계층](polynomial-hierarchy.md)의 셋째 층에 든다. BPP 는 bounded-error probabilistic polynomial time 이고, NP 는 nondeterministic polynomial time 이다.

양자 회로의 출력 분포를 각 확률의 $\sqrt 2$ 보다 작은 상수배 안으로 흉내 내는 고전 알고리즘이 있다고 하자. 그러면 후선택한 양자 회로도 후선택한 고전 알고리즘으로 흉내 내지므로 $\mathrm{PP}=\mathrm{PostBQP}\subseteq\mathrm{PostBPP}$ 다. [Toda 정리](toda-theorem.md)로 다항 계층 전체가 $\mathrm P^{\mathrm{PP}}$ 에 들므로 다항 계층이 셋째 층으로 무너진다[^3]. 이 논증은 서로 가환인 게이트만 쓰는 [IQP 회로](iqp-circuits.md)에도 그대로 통한다[^3].

# 활용

- 양자 우위의 근거. [무작위 회로 표본추출](random-circuit-sampling.md)과 [보손 표본추출](boson-sampling.md)의 정확한 판본이 고전적으로 어렵다는 증명이 이 정리의 꼴을 따른다.
- 고전 복잡도의 증명. PP 의 교집합 닫힘처럼 고전 부류의 성질을 양자 부류의 성질로 바꿔 증명한다[^1].
- 양자 계산 모형의 비교. 측정 뒤 결과를 골라 남기는 다른 모형도 후선택을 허락하면 같은 부류가 되는지를 물어, 모형의 고전적 흉내 가능성을 판정한다.

[^1]: S. Aaronson, Quantum computing, postselection, and probabilistic polynomial-time, *Proceedings of the Royal Society A* 461 (2005), 3473–3482.
[^2]: R. Beigel, N. Reingold, D. Spielman, PP is closed under intersection, *Journal of Computer and System Sciences* 50 (1995), 191–202.
[^3]: M. J. Bremner, R. Jozsa, D. J. Shepherd, Classical simulation of commuting quantum computations implies collapse of the polynomial hierarchy, *Proceedings of the Royal Society A* 467 (2011), 459–472.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)
- [셈 복잡도](counting-complexity.md)
- [PP](probabilistic-polynomial-time.md)

## 더 알아보기

- [IQP 회로](iqp-circuits.md)
- [무작위 회로 표본추출](random-circuit-sampling.md)

#complexity #computation
