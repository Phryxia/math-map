# 쉬운 증거 보조정리

# 개요

**쉬운 증거 보조정리(easy witness lemma)** 는 NEXP(nondeterministic exponential time)의 모든 언어가 다항 크기 회로로 계산되면, NEXP 의 모든 검증기에서 받아들여지는 입력마다 작은 회로의 진리표로 쓰이는 증거가 있다는 정리다. R. Impagliazzo, V. Kabanets, A. Wigderson 이 2002 년에 증명했다[^1].

길이가 지수인 증거를 다항 크기 회로 하나로 줄여 쓸 수 있으므로, 증거를 추측하는 비용이 지수에서 다항으로 줄어든다. [Williams 정리](williams-theorem.md)의 증명에서 이 축소가 [시간 계층 정리](time-hierarchy-theorem.md)와 모순을 만드는 단계다.

# 직관

NEXP 의 언어 $L$ 은 검증기 $V$ 로 정해진다. $x\in L$ 이면 길이 $2^{\lvert x\rvert^c}$ 의 증거 $y$ 가 있어서 $V(x,y)$ 가 받아들이고, $x\notin L$ 이면 어떤 $y$ 도 받아들여지지 않는다. 길이가 $2^m$ 인 비트열 $y$ 는 $m$ 비트 입력의 함수의 진리표이므로, $y$ 를 계산하는 [불 회로](boolean-circuits.md)가 작으면 증거를 그 회로로 적을 수 있다.

어떤 입력에서 받아들여지는 증거가 모두 큰 회로를 요구한다면, 그 증거는 작은 회로가 계산하지 못하는 함수의 진리표다. 이런 어려운 함수를 추측해 [Nisan–Wigderson 생성기](nisan-wigderson-generator.md)에 넣으면 무작위 알고리즘을 비결정적 알고리즘으로 바꿀 수 있다. 보조정리의 증명은 이 탈무작위화가 NEXP 가 작은 회로를 가진다는 가정과 함께 비결정적 시간 계층 정리에 모순됨을 보인다.

# 정의

- 언어 $L$ 의 **NEXP 검증기(NEXP verifier)** 는 시간 $2^{n^{O(1)}}$ 의 결정적 기계 $V$ 와 상수 $c$ 로, $x\in L$ 과 "$V(x,y)=1$ 인 $y\in\lbrace 0,1\rbrace^{2^{\lvert x\rvert^c}}$ 가 존재한다" 가 동치인 것이다.
- 검증기 $V$ 가 **쉬운 증거(easy witness)** 를 갖는다는 것은 다항식 $q$ 가 있어서 모든 $x\in L$ 에 대해 받아들여지는 증거 $y$ 가운데 크기 $q(\lvert x\rvert)$ 의 회로의 진리표인 것이 있는 것이다.
- **MA**(Merlin–Arthur)는 $x\in L$ 이면 확률 $2/3$ 이상으로 받아들여지게 하는 다항 길이의 증명이 있고, $x\notin L$ 이면 모든 증명이 확률 $1/3$ 이하로만 받아들여지는 다항시간 무작위 검증기가 있는 언어의 부류다.

# 성질

## 쉬운 증거 보조정리

정리(Impagliazzo–Kabanets–Wigderson). $\mathrm{NEXP}\subseteq\mathrm{P/poly}$ 이면 NEXP 의 모든 검증기가 쉬운 증거를 갖는다[^1].

증명의 요지. 쉬운 증거를 갖지 않는 검증기 $V$ 가 있다고 둔다. 그러면 무한히 많은 $x$ 에서 받아들여지는 증거가 모두 어려운 함수의 진리표이고, 그런 증거를 비결정적으로 추측해 Nisan–Wigderson 생성기에 넣으면 MA 의 무작위 검증기의 동전을 대신할 수 있다. 이로부터 MA 가 무한히 많은 길이에서 비결정적 시간 $2^{n^{c}}$ 에 짧은 조언과 함께 판정된다. 한편 $\mathrm{NEXP}\subseteq\mathrm{P/poly}$ 이면 L. Babai, L. Fortnow, C. Lund 의 [MIP = NEXP 정리](mip-nexp.md)로 $\mathrm{NEXP}=\mathrm{MA}$ 다. 두 결론을 합치면 NEXP 전체가 고정된 지수 시간의 비결정적 계산으로 판정되어 비결정적 시간 계층 정리와 모순이다.

## 동치 판본

따름정리. $\mathrm{NEXP}\subseteq\mathrm{P/poly}$ 와 $\mathrm{NEXP}=\mathrm{MA}$ 는 동치다[^1].

앞에서 뒤로 가는 쪽은 Babai–Fortnow–Lund 의 결과이고, 뒤에서 앞으로 가는 쪽은 쉬운 증거 보조정리의 증명과 같은 탈무작위화 논증으로 증명된다.

## 준다항 시간 판본

C. Murray 와 R. Williams 는 NQP(nondeterministic quasi-polynomial time)가 작은 회로로 계산될 때 NQP 의 검증기가 쉬운 증거를 갖는다는 판본을 증명했고, 이것으로 NQP 가 $\mathrm{ACC}^0$ 에 들지 않음을 얻었다[^2].

# 활용

- [Williams 정리](williams-theorem.md). $\mathrm{NEXP}\subseteq\mathrm{ACC}^0$ 을 가정하면 이 보조정리로 증거가 작은 회로로 쓰이고, 빠른 충족 가능성 알고리즘으로 그 회로를 검사해 시간 계층 정리와 모순을 만든다.

[^1]: R. Impagliazzo, V. Kabanets, A. Wigderson, "In search of an easy witness: exponential time vs. probabilistic polynomial time", Journal of Computer and System Sciences 65(4) (2002), 672–694.
[^2]: C. Murray, R. Williams, "Circuit lower bounds for nondeterministic quasi-polytime: an easy witness lemma for NP and NQP", Proceedings of the 50th ACM Symposium on Theory of Computing (2018), 890–901.

# 연관 문서

## 선수지식

- [Nisan–Wigderson 생성기](nisan-wigderson-generator.md)
- [시간 계층 정리](time-hierarchy-theorem.md)

## 더 알아보기

- [Williams 정리](williams-theorem.md)

#complexity #computation
