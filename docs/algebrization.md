# 대수화

# 개요

**대수화(algebrization)** 는 계산 모형에 신탁을 붙이고 그 신탁의 다항식 확장까지 주어도 그대로 성립하는 복잡도 증명의 성질이다. $\mathrm P$ 와 $\mathrm{NP}$ 가 다른지 증명하려는 시도 가운데 대각선 논법은 아무 신탁을 붙여도 성립하는 증명이라 $\mathrm P$ 와 $\mathrm{NP}$ 를 가르지 못하는데, [대화형 증명](interactive-proofs.md)의 정리 $\mathrm{IP}=\mathrm{PSPACE}$ 는 이런 증명이 아니어서 그 한계를 넘는다. 대수화는 $\mathrm{IP}=\mathrm{PSPACE}$ 처럼 문제를 다항식으로 바꾸는 증명까지 포함하는 성질을 정의하고, 이 성질을 가진 증명도 $\mathrm P$ 와 $\mathrm{NP}$ 를 가르지 못함을 보인다.

# 직관

대수화는 신탁 $A$ 를 쓰는 기계 쪽에 $A$ 의 낮은 차수 다항식 확장 $\tilde A$ 를 주어도 그대로 성립하는 복잡도 증명의 성질이다. S. Aaronson 과 A. Wigderson 이 2008 년에 정의했다[^1].

[시간 계층 정리](time-hierarchy-theorem.md)의 대각선 논법처럼 상대화되는 증명은 Baker–Gill–Solovay 정리에 막혀 $\mathrm P$ 와 $\mathrm{NP}$ 를 가르지 못한다. 대화형 증명의 $\mathrm{IP}=\mathrm{PSPACE}$ 는 상대화되지 않지만 대수화된다. Aaronson 과 Wigderson 은 대수화되는 증명도 $\mathrm P$ 와 $\mathrm{NP}$ 를 어느 쪽으로도 결정하지 못함을 보였다.

$\mathrm{IP}=\mathrm{PSPACE}$ 의 증명은 한정 불 논리식을 유한체 $\mathbb F$ 위의 다항식으로 바꾸고 합 검사 프로토콜을 돌린다. 프로토콜의 마지막 단계에서 검증자는 무작위 점 $r\in\mathbb F^n$ 에서 다항식의 값을 직접 계산한다. $r$ 의 좌표는 대개 $0$ 도 $1$ 도 아니다.

논리식이 신탁 $A$ 에 묻는 게이트를 포함하면 그 게이트도 다항식으로 바꾸어야 한다. 신탁은 $\lbrace 0,1\rbrace^n$ 의 점에서만 답하므로 검증자는 $r$ 에서의 값을 계산할 수 없고, 증명이 막힌다. 실제로 $\mathrm{IP}^C\ne\mathrm{PSPACE}^C$ 인 신탁 $C$ 가 존재한다.

검증자에게 $A$ 를 $\mathbb F^n$ 으로 늘린 다항식 $\tilde A$ 를 신탁으로 주면 마지막 단계의 값이 계산되고 증명이 다시 성립한다. 그래서 $\mathrm{PSPACE}$ 쪽은 $A$ 를, $\mathrm{IP}$ 쪽은 $\tilde A$ 를 쓰는 포함 $\mathrm{PSPACE}^A\subseteq\mathrm{IP}^{\tilde A}$ 가 모든 $A$ 에서 성립한다. 이렇게 한쪽에만 확장을 주는 판본이 대수화다.

# 정의

신탁 $A$ 는 함수들 $A_n:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 의 모임이다. $A$ 의 **확장(extension)** $\tilde A$ 는 유한체 $\mathbb F$ 와 $n$ 마다 주어진 다항식 $\tilde A_{n,\mathbb F}:\mathbb F^n\to\mathbb F$ 의 모임으로, $\lbrace 0,1\rbrace^n$ 위에서 $A_n$ 과 같고 차수가 상수 이하인 것이다. 대표적인 확장은 다중선형 확장

$$
\tilde A_n(z)=\sum_{b\in\lbrace 0,1\rbrace^n}A_n(b)\prod_{i=1}^n\bigl(z_ib_i+(1-z_i)(1-b_i)\bigr)
$$

이다.

- 포함 $\mathcal C\subseteq\mathcal D$ 는 모든 신탁 $A$ 와 그 모든 확장 $\tilde A$ 에 대해 $\mathcal C^A\subseteq\mathcal D^{\tilde A}$ 이면 **대수화된다** 고 한다.
- 분리 $\mathcal C\not\subseteq\mathcal D$ 는 모든 $A$ 와 $\tilde A$ 에 대해 $\mathcal C^{\tilde A}\not\subseteq\mathcal D^A$ 이면 대수화된다고 한다.

두 정의 모두 증명하려는 쪽이 아니라 반대쪽 부류에 확장을 준다. 상대화되는 결과는 대수화된다. $\tilde A$ 를 쓰는 기계는 $\lbrace 0,1\rbrace^n$ 의 점을 물어 $A$ 를 흉내 낼 수 있기 때문이다.

# 성질

## 대수화되는 결과

정리(Aaronson–Wigderson). 모든 $A$ 와 $\tilde A$ 에 대해 $\mathrm{PSPACE}^A\subseteq\mathrm{IP}^{\tilde A}$ 이고 $\mathrm{NEXP}^A\subseteq\mathrm{MIP}^{\tilde A}$ 이다[^1].

증명의 요지. 직관 절대로 산술화한 다항식의 신탁 게이트 자리에 $\tilde A$ 를 넣는다. 합 검사의 마지막 단계에서 검증자가 계산하는 값은 $\tilde A$ 의 값 하나를 물어 얻는다. [MIP = NEXP 정리](mip-nexp.md)(multi-prover interactive proofs, nondeterministic exponential time)의 증명도 같은 자리에 $\tilde A$ 를 넣어 성립한다.

## P 대 NP 의 장벽

정리(Aaronson–Wigderson). 신탁 $A$ 와 확장 $\tilde A$ 가 있어서 $\mathrm{NP}^{\tilde A}\subseteq\mathrm P^A$ 이다. 또 신탁 $B$ 와 확장 $\tilde B$ 가 있어서 $\mathrm{NP}^B\not\subseteq\mathrm P^{\tilde B}$ 이다[^1].

증명의 요지. 첫째는 $A$ 를 PSPACE(polynomial space)-완전 언어로, $\tilde A$ 를 그 다중선형 확장으로 잡는다. 정의 절의 식은 $2^n$ 개 항의 합이고 항마다 다항식 공간에서 계산되므로 $\tilde A$ 는 PSPACE 에서 계산된다. 그러면 $\mathrm{NP}^{\tilde A}\subseteq\mathrm{PSPACE}\subseteq\mathrm P^A$ 다. 둘째는 Baker–Gill–Solovay 정리의 $B$ 와 같은 언어 $L_B=\lbrace 1^n : B_n\ne 0\rbrace$ 를 쓴다. 다항시간 기계가 $\tilde B$ 의 다항식 개 점에서 값을 물어도, 그 값과 맞으면서 $B_n=0$ 인 확장과 $B_n\ne 0$ 인 확장이 함께 남도록 다항식 보간으로 $B$ 와 $\tilde B$ 를 정한다.

따라서 대수화되는 증명은 $\mathrm P\ne\mathrm{NP}$ 도 $\mathrm P=\mathrm{NP}$ 도 증명하지 못한다. Aaronson 과 Wigderson 은 같은 방법으로 $\mathrm{NEXP}\not\subseteq\mathrm{P/poly}$ 와 $\mathrm{NP}\not\subseteq\mathrm{BPP}$ 의 증명도 대수화되지 않아야 함을 보였다[^1].

## 통신 복잡도와의 연결

$\mathrm{NP}^B\not\subseteq\mathrm{BPP}^{\tilde B}$ 꼴의 분리는 무작위 기계에 대한 것이라 보간 논법만으로는 부족하다. Aaronson 과 Wigderson 은 이것을 [통신 복잡도](communication-complexity.md)의 하한으로 바꾸었다. $B_n$ 을 두 사람이 나누어 가진 입력으로 보면, $\tilde B$ 의 값 하나는 두 사람이 각자 가진 부분의 항을 더한 두 값의 합이라 체의 원소 하나를 보내면 얻어진다. 그래서 $\tilde B$ 를 적게 묻는 알고리즘은 비용이 작은 통신 규칙이 되고, 서로소 함수의 무작위 통신 하한 $\Omega(n)$ 이 질의 수의 하한으로 옮겨진다[^1].

# 활용

- [P 대 NP 문제](p-np.md)의 증명 장벽. 상대화와 [자연 증명](natural-proofs.md)에 이어 세 번째로 알려진 장벽이고, 산술화를 쓰는 증명이 $\mathrm P$ 와 $\mathrm{NP}$ 를 가르려면 확장 $\tilde A$ 를 흉내 낼 수 없는 단계가 들어 있어야 한다.
- 회로 하한. 대수화되는 증명으로는 $\mathrm{NEXP}\not\subseteq\mathrm{P/poly}$ 를 얻을 수 없다[^1]. [Williams 정리](williams-theorem.md)는 이보다 약한 $\mathrm{NEXP}\not\subseteq\mathrm{ACC}^0$ 을 증명한다.

[^1]: S. Aaronson, A. Wigderson, "Algebrization: a new barrier in complexity theory", ACM Transactions on Computation Theory 1 (2009), Article 2. 학회 판은 Proceedings of the 40th ACM Symposium on Theory of Computing (2008).

# 연관 문서

## 선수지식

- [시간 계층 정리](time-hierarchy-theorem.md)
- [대화형 증명](interactive-proofs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #logic
