# Williams 정리

# 개요

**Williams 정리(Williams' theorem)** 는 어떤 수로 나눈 나머지를 세는 게이트를 갖춘 얕은 다항 크기 회로로 계산되지 않는 문제가, 비결정적 지수 시간에 판정되는 문제 가운데 있다는 정리다. 나머지를 세는 법이 소수 하나일 때는 [Razborov–Smolensky 정리](razborov-smolensky.md)가 그런 회로로 계산되지 않는 함수를 주지만, 법이 $6$ 처럼 합성수이면 그 증명이 통하지 않는다. Williams 정리는 이런 회로가 $1$ 을 내는 입력이 있는지를 $2^n$ 개의 입력을 모두 넣어 보는 것보다 조금 빨리 판정하는 알고리즘을 만들고, 그 알고리즘이 [시간 계층 정리](time-hierarchy-theorem.md)와 모순됨을 써서 하한을 얻는다.

# 직관

Williams 정리는 비결정적 지수 시간(nondeterministic exponential time, NEXP)에 판정되는 언어 가운데, 법 $m$ 게이트를 쓰는 상수 깊이 다항 크기 회로(alternating circuit with counters, ACC)로 계산되지 않는 것이 있다는 정리다. 곧 $\mathrm{NEXP}\not\subseteq\mathrm{ACC}^0$ 이다. R. Williams 가 2011 년에 증명했다[^1].

Razborov–Smolensky 정리는 법이 소수 하나일 때의 하한이고, 법이 $6$ 처럼 합성수이면 그 다항식 근사가 통하지 않는다. Williams 정리는 회로의 하한을 회로 충족 가능성 판정 알고리즘에서 얻는다. 판정을 전수 조사보다 조금이라도 빨리 하면, 시간 계층 정리의 비결정적 판본과 모순이 생긴다.

입력이 $n$ 개인 회로 $C$ 가 $1$ 을 내는 입력이 있는지 확인하려면 $2^n$ 개의 입력에 모두 넣어 보면 된다. 어떤 회로 부류 $\mathcal C$ 에 대해 이 일을 $2^n/n^{10}$ 시간에 하는 알고리즘이 있다고 둔다. 동시에 NEXP 의 모든 언어가 $\mathcal C$ 의 작은 회로로 계산된다고 둔다.

시간 $2^n$ 의 비결정적 기계가 받아들이는지는, 길이 $2^n$ 정도의 증거가 있는지로 정해진다. 둘째 가정을 쓰면 그 증거가 $\mathcal C$ 의 작은 회로의 진리표로 쓰인다. 그러면 증거 전체를 추측하는 대신 작은 회로를 추측하고, 그 회로가 증거로서 틀린 자리가 있는지를 $\mathcal C$ 회로의 충족 가능성 문제로 바꾸어 첫째 가정의 알고리즘으로 확인한다. 이렇게 시간 $2^n$ 의 비결정적 계산이 시간 $2^n/n^{10}$ 정도의 비결정적 계산으로 줄어드는데, 비결정적 시간 계층 정리가 이것을 막는다. 그래서 두 가정이 함께 성립할 수 없다.

# 정의

- **NEXP** 는 비결정적 Turing 기계가 시간 $2^{n^{O(1)}}$ 에 판정하는 언어의 부류다(nondeterministic exponential time).
- 정수 $m\ge 2$ 에 대해 $\mathrm{ACC}^0\lbrack m\rbrack$ 은 AND, OR, NOT 게이트와 법 $m$ 게이트로 된 상수 깊이, 다항 크기 회로 족이 계산하는 함수의 부류다. 법 $m$ 게이트는 입력의 $1$ 의 개수가 $m$ 의 배수가 아니면 $1$ 을 낸다. $\mathrm{ACC}^0$(alternating circuit with counters)은 모든 $m$ 에 대한 $\mathrm{ACC}^0\lbrack m\rbrack$ 의 합집합이다.
- 회로 부류 $\mathcal C$ 의 **충족 가능성 문제(satisfiability problem)** $\mathcal C$-SAT 은 $\mathcal C$ 의 회로를 받아 출력이 $1$ 인 입력이 있는지 판정하는 문제다.

# 성질

## 알고리즘에서 하한으로

정리(Williams). 입력 $n$ 개, 크기가 $n$ 의 다항식인 $\mathcal C$ 회로의 충족 가능성을 시간 $2^n/n^{\omega(1)}$ 에 판정하는 알고리즘이 있고 $\mathcal C$ 가 AND 와 OR 로 합성해도 닫혀 있으면 $\mathrm{NEXP}\not\subseteq\mathcal C$ 다[^1][^2].

증명의 요지. $\mathrm{NEXP}\subseteq\mathcal C$ 라 두면 R. Impagliazzo, V. Kabanets, A. Wigderson 의 [쉬운 증거 보조정리](easy-witness-lemma.md)로 NEXP 의 증거가 작은 회로의 진리표로 쓰인다[^3]. 시간 $2^n$ 의 비결정적 계산을 정해진 길이의 논리식 충족 문제로 바꾸는 간결한 환원도 $\mathcal C$ 회로로 쓰인다. 증거 회로를 추측한 뒤, 환원의 회로와 증거 회로를 이어 붙인 회로가 "어느 절이 거짓인가" 를 묻는 $\mathcal C$ 회로가 되고, 가정한 알고리즘이 이것을 $2^n/n^{\omega(1)}$ 시간에 판정한다. 비결정적 시간 계층 정리와 모순이다.

## ACC0 충족 가능성 알고리즘

정리(Williams). 각 깊이 $d$ 와 법 $m$ 에 대해 $\varepsilon\gt 0$ 이 있어서, 입력 $n$ 개, 크기 $2^{n^\varepsilon}$ 의 $\mathrm{ACC}^0\lbrack m\rbrack$ 회로의 충족 가능성이 시간 $2^{n-n^\varepsilon}$ 에 판정된다[^1].

증명의 요지는 세 단계다.

- 입력 $\ell=n^\varepsilon$ 개의 값을 모두 넣은 $2^\ell$ 개의 회로를 OR 로 묶어, 입력이 $n-\ell$ 개이고 크기가 $2^\ell$ 배인 회로 하나로 바꾼다.
- A. C.-C. Yao 와 R. Beigel, J. Tarui 의 구조 정리로 크기 $s$ 의 $\mathrm{ACC}^0$ 회로는 들어오는 변이 $(\log s)^{O(1)}$ 개인 AND 게이트 $2^{(\log s)^{O(1)}}$ 개의 값을 더한 수에 대칭 함수 하나를 적용한 꼴로 바뀐다[^4]. $\varepsilon$ 이 작으면 그 AND 게이트의 수가 $2^{0.1(n-\ell)}$ 보다 작다.
- AND 게이트들의 합은 다중선형 다항식이다. 항이 $2^{0.1(n-\ell)}$ 개 이하인 다중선형 다항식의 값은 $\lbrace 0,1\rbrace^{n-\ell}$ 의 모든 점에서 동적 계획법으로 시간 $2^{n-\ell}\cdot n^{O(1)}$ 에 함께 계산된다. 각 점에서 대칭 함수를 적용해 $1$ 이 나오는 점이 있는지 본다.

두 정리를 합치면 $\mathrm{NEXP}\not\subseteq\mathrm{ACC}^0$ 이 증명된다.

## 강화

C. Murray 와 R. Williams 는 같은 꼴의 논증으로 비결정적 준다항 시간 $\mathrm{NTIME}(n^{(\log n)^{O(1)}})$ 이 $\mathrm{ACC}^0$ 에 들지 않음을 증명했다[^5].

# 활용

- [자연 증명](natural-proofs.md). 이 증명은 무작위 함수가 갖는 넓은 성질을 쓰지 않고 충족 가능성 알고리즘을 쓰므로 Razborov–Rudich 정리의 장벽에 걸리지 않는다.
- [불 회로](boolean-circuits.md)의 하한 연구. 회로 부류마다 전수 조사보다 빠른 충족 가능성 알고리즘을 찾는 것이 하한을 증명하는 한 방법이 되었다.

[^1]: R. Williams, "Nonuniform ACC circuit lower bounds", Journal of the ACM 61(1) (2014), 2:1–2:32. 학회 판은 CCC 2011.
[^2]: R. Williams, "Improving exhaustive search implies superpolynomial lower bounds", SIAM Journal on Computing 42(3) (2013), 1218–1244.
[^3]: R. Impagliazzo, V. Kabanets, A. Wigderson, "In search of an easy witness: exponential time vs. probabilistic polynomial time", Journal of Computer and System Sciences 65(4) (2002), 672–694.
[^4]: R. Beigel, J. Tarui, "On ACC", Computational Complexity 4 (1994), 350–366.
[^5]: C. Murray, R. Williams, "Circuit lower bounds for nondeterministic quasi-polytime: an easy witness lemma for NP and NQP", Proceedings of the 50th ACM Symposium on Theory of Computing (2018), 890–901.

# 연관 문서

## 선수지식

- [Razborov–Smolensky 정리](razborov-smolensky.md)
- [시간 계층 정리](time-hierarchy-theorem.md)
- [쉬운 증거 보조정리](easy-witness-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation
