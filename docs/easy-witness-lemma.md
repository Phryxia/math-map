# 쉬운 증거 보조정리

# 개요

**쉬운 증거 보조정리(easy witness lemma)** 는 긴 증거로 확인하는 문제들이 모두 작은 회로로 풀리면, 그 증거도 작은 회로로 짧게 적을 수 있다는 정리다. 비결정적 지수 시간(nondeterministic exponential time, NEXP)의 언어는 길이 $2^{\lvert x\rvert^c}$ 인 증거로 확인되는데, 이 증거를 추측하려면 지수 길이의 비트열을 다 적어야 한다. 이 보조정리는 길이 $2^m$ 인 증거를 $m$ 비트 입력 함수의 진리표로 보고 그 함수가 작은 회로로 계산됨을 보여, 증거를 추측하는 비용을 회로 하나를 추측하는 비용으로 줄인다.

# 직관

NEXP 의 언어 $L$ 은 검증기 $V$ 로 정해진다. $x\in L$ 이면 길이 $2^{\lvert x\rvert^c}$ 의 증거 $y$ 가 있어서 $V(x,y)$ 가 받아들이고, $x\notin L$ 이면 어떤 $y$ 도 받아들여지지 않는다. 증거를 추측하는 비결정적 계산은 $y$ 의 비트를 하나씩 다 적어야 하므로, 증거의 길이만큼 지수 시간이 든다.

길이가 $8=2^3$ 인 증거 $y=01010101$ 을 본다. 비트에 $0$ 부터 $7$ 까지 번호를 붙이고 번호를 세 비트 $abc$ 로 적으면, $y$ 의 $abc$ 번째 비트는 $c$ 와 같다. 곧 $y$ 는 함수 $f(a,b,c)=c$ 의 진리표이고, 이 함수는 입력 $c$ 를 그대로 내보내는 [불 회로](boolean-circuits.md)로 계산된다. 여덟 비트를 다 적는 대신 이 회로 하나를 적으면 $y$ 가 정해진다. 길이 $2^m$ 인 증거도 같은 방법으로 $m$ 비트 입력 함수의 진리표이고, 그 함수의 회로가 작으면 증거를 짧게 적을 수 있다.

어떤 입력에서 받아들여지는 증거가 모두 큰 회로를 요구한다면, 그 증거는 작은 회로가 계산하지 못하는 함수의 진리표다. 이런 어려운 함수를 추측해 [Nisan–Wigderson 생성기](nisan-wigderson-generator.md)에 넣으면 무작위 알고리즘의 동전 던지기를 비결정적 추측으로 바꿀 수 있다. 보조정리는 이 두 경우 가운데 뒤의 것이 NEXP 가 작은 회로를 가진다는 가정과 모순됨을 보인다.

# 정의

- 언어 $L$ 의 **NEXP 검증기(NEXP verifier)** 는 시간 $2^{n^{O(1)}}$ 의 결정적 기계 $V$ 와 상수 $c$ 로, $x\in L$ 과 "$V(x,y)=1$ 인 $y\in\lbrace 0,1\rbrace^{2^{\lvert x\rvert^c}}$ 가 존재한다" 가 동치인 것이다. 직관의 $y=01010101$ 은 $\lvert x\rvert^c=3$ 인 입력의 증거 길이다.
- 검증기 $V$ 가 **쉬운 증거(easy witness)** 를 갖는다는 것은 다항식 $q$ 가 있어서 모든 $x\in L$ 에 대해 받아들여지는 증거 $y$ 가운데 크기 $q(\lvert x\rvert)$ 의 회로의 진리표인 것이 있는 것이다. 직관의 $y=01010101$ 은 입력 $c$ 를 내보내는 회로의 진리표이므로, 이 증거가 받아들여지면 그 입력에는 쉬운 증거가 있다.
- **MA**(Merlin–Arthur)는 $x\in L$ 이면 확률 $2/3$ 이상으로 받아들여지게 하는 다항 길이의 증명이 있고, $x\notin L$ 이면 모든 증명이 확률 $1/3$ 이하로만 받아들여지는 다항시간 무작위 검증기가 있는 언어의 부류다. NP(nondeterministic polynomial time)의 언어는 동전을 쓰지 않는 검증기로 MA 에 든다.

# 성질

## 쉬운 증거 보조정리

정리(Impagliazzo–Kabanets–Wigderson). $\mathrm{NEXP}\subseteq\mathrm{P/poly}$ 이면 NEXP 의 모든 검증기가 쉬운 증거를 갖는다. R. Impagliazzo, V. Kabanets, A. Wigderson 이 2002 년에 증명했다[^1].

증명의 요지. $\mathrm{NEXP}\subseteq\mathrm{P/poly}$ 인데 쉬운 증거를 갖지 않는 검증기 $V$ 가 있다고 둔다.

1. 무한히 많은 $x$ 에서 받아들여지는 증거가 모두 어려운 함수의 진리표다. 그런 $x$ 를 조언으로 받고 증거를 비결정적으로 추측해 Nisan–Wigderson 생성기에 넣으면 MA 의 검증기의 동전을 대신할 수 있다. 이로부터 MA 의 언어가 무한히 많은 길이에서 고정된 지수 시간의 비결정적 계산과 짧은 조언으로 판정된다.
2. $\mathrm{NEXP}\subseteq\mathrm{P/poly}$ 이므로 1 의 비결정적 계산을 고정된 지수 $k$ 의 크기 $n^k$ 회로로 바꿀 수 있다. 또 결정적 지수 시간(exponential time, EXP)이 P/poly 에 들면 L. Babai, L. Fortnow, C. Lund 의 결과로 $\mathrm{EXP}=\mathrm{MA}$ 다. 이 결과는 [MIP = NEXP 정리](mip-nexp.md)를 증명한 논문에서 증명되었다.
3. 1 과 2 를 합치면 EXP 의 모든 언어가 무한히 많은 길이에서 크기 $n^k$ 회로로 계산된다. 그런데 길이 $n$ 마다 크기 $n^k$ 회로로 계산되지 않는 함수 가운데 사전순으로 첫 것을 찾는 언어는 EXP 에 들고 모든 길이에서 크기 $n^k$ 를 넘는 회로를 요구한다. 회로의 개수가 함수의 개수보다 적으므로 그런 함수가 있다. 이것이 모순이다.

## 동치 판본

따름정리. $\mathrm{NEXP}\subseteq\mathrm{P/poly}$ 와 $\mathrm{NEXP}=\mathrm{MA}$ 는 동치다[^1].

앞에서 뒤로 가는 쪽은 쉬운 증거 보조정리로 증명된다. 증거를 작은 회로로 추측해 결정적으로 모두 시도하면 $\mathrm{NEXP}=\mathrm{EXP}$ 이고, 그러면 $\mathrm{EXP}\subseteq\mathrm{P/poly}$ 에 Babai–Fortnow–Lund 의 결과를 써서 $\mathrm{NEXP}=\mathrm{MA}$ 다. 뒤에서 앞으로 가는 쪽은 NEXP 의 어려운 함수로 MA 를 탈무작위화하는 같은 꼴의 논증으로 증명된다.

## 준다항 시간 판본

C. Murray 와 R. Williams 는 NQP(nondeterministic quasi-polynomial time)가 작은 회로로 계산될 때 NQP 의 검증기가 쉬운 증거를 갖는다는 판본을 증명했고, 이것으로 NQP 가 $\mathrm{ACC}^0$ (나머지 게이트가 있는 상수 깊이 회로, alternating circuits with counting) 에 들지 않음을 얻었다[^2].

# 활용

- [Williams 정리](williams-theorem.md). $\mathrm{NEXP}\subseteq\mathrm{ACC}^0$ 을 가정하면 이 보조정리로 증거가 작은 회로로 쓰이고, 빠른 충족 가능성 알고리즘으로 그 회로를 검사해 비결정적 [시간 계층 정리](time-hierarchy-theorem.md)와 모순을 만든다.

[^1]: R. Impagliazzo, V. Kabanets, A. Wigderson, "In search of an easy witness: exponential time vs. probabilistic polynomial time", Journal of Computer and System Sciences 65(4) (2002), 672–694.
[^2]: C. Murray, R. Williams, "Circuit lower bounds for nondeterministic quasi-polytime: an easy witness lemma for NP and NQP", Proceedings of the 50th ACM Symposium on Theory of Computing (2018), 890–901.

# 연관 문서

## 선수지식

- [Nisan–Wigderson 생성기](nisan-wigderson-generator.md)
- [시간 계층 정리](time-hierarchy-theorem.md)

## 더 알아보기

- [Williams 정리](williams-theorem.md)

#complexity #computation
