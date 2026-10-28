# MIP = NEXP 정리

# 개요

**MIP = NEXP 정리(MIP = NEXP theorem)** 는 서로 연락하지 못하는 증명자 둘에게 질문하는 다항시간 무작위 검증자가 판정하는 언어의 부류 MIP(multi-prover interactive proofs)가 비결정적 지수 시간 NEXP(nondeterministic exponential time)와 같다는 정리다. 그래프의 정점을 세 색으로 칠하는 방법이 있다는 주장을 확인할 때, 검증자는 한 증명자에게 간선 하나의 두 끝 색을 묻고 다른 증명자에게 그 가운데 한 정점의 색을 따로 묻는다. 두 증명자가 서로 연락하지 못하므로 답이 계속 맞으려면 미리 정한 색칠 하나를 따라야 하고, 이 맞대어 보기 검사를 지수 크기의 증명에 적용해 NEXP 의 언어가 판정된다.

# 직관

MIP = NEXP 정리는 L. Babai, L. Fortnow, C. Lund 가 1991 년에 증명했다[^1].

증명자가 하나인 [대화형 증명](interactive-proofs.md)은 PSPACE(polynomial space)와 같다. 증명자를 둘로 늘리고 서로 말을 맞추지 못하게 하면, 검증자는 한 증명자의 답을 다른 증명자에게 다시 물어 확인할 수 있고, 판정 가능한 부류가 지수 시간 쪽으로 커진다.

증명자가 하나이면 증명자는 앞서 받은 질문을 보고 답을 바꿀 수 있다. 증명자가 둘이고 서로 통신하지 못하면, 검증자는 첫 증명자에게 여러 질문을 하고 그 가운데 하나를 둘째 증명자에게 따로 묻는다. 둘째 증명자는 다른 질문이 무엇이었는지 모르므로, 두 답이 일치하려면 증명자들이 질문마다 미리 정해 둔 답, 곧 고정된 함수 하나를 따라야 한다.

그러면 두 증명자는 길이가 지수인 표 하나를 들고 있는 것과 같다. 검증자는 그 표에서 다항식 개의 칸만 읽는다. 지수 길이의 증거를 다항식 개의 칸만 읽고 확인할 수 있으면, 시간 $2^{n^{O(1)}}$ 의 비결정적 계산을 검증할 수 있다. 증거를 다중선형 다항식의 값표로 쓰고 합 검사 프로토콜(sum-check protocol)로 확인하는 것이 그 방법이다.

# 정의

- **MIP** 는 다음을 만족하는 다항시간 무작위 검증자 $V$ 가 있는 언어 $L$ 의 부류다. $V$ 는 두 증명자 $P_1,P_2$ 와 다항 라운드의 메시지를 주고받고, 두 증명자는 서로의 메시지를 보지 못한다. $x\in L$ 이면 $V$ 가 확률 $2/3$ 이상으로 받아들이게 하는 $P_1,P_2$ 가 있고, $x\notin L$ 이면 어떤 $P_1,P_2$ 에 대해서도 받아들일 확률이 $1/3$ 이하다.
- **신탁 검증(oracle verification)** 은 증명자 대신 고정된 함수 $\pi$ 에 질문을 보내는 무작위 검증이다. Fortnow, Rompel, Sipser 는 언어가 MIP 에 드는 것과 다항시간 무작위 신탁 검증자가 있는 것이 동치임을 보였다[^2].

# 성질

## MIP = NEXP

정리(Babai–Fortnow–Lund). $\mathrm{MIP}=\mathrm{NEXP}$ 다[^1].

증명의 요지. $\mathrm{MIP}\subseteq\mathrm{NEXP}$ 는 신탁 판본에서 신탁 $\pi$ 를 비결정적으로 추측하고 검증자의 모든 동전에 대해 받아들일 확률을 지수 시간에 세면 나온다. 반대쪽은 NEXP-완전 문제에서 시작한다. 간결하게 주어진 3-SAT(satisfiability) 문제의 할당은 변수 $n^{O(1)}$ 개의 불 함수이고, 이것을 유한체 위의 다중선형 다항식 $A$ 로 확장한다. 검증자는 다음을 확인한다.

- 신탁이 다중선형 다항식에 가깝다는 것. 무작위 직선 위에서 값들이 낮은 차수 다항식을 이루는지 검사한다.
- 모든 절이 만족된다는 것. 절이 거짓이 되는 정도를 $A$ 의 값의 다항식으로 쓰고, 그 제곱의 모든 점에서의 합이 $0$ 인지를 합 검사 프로토콜로 확인한다. 합 검사의 마지막 단계에서 필요한 $A$ 의 값 몇 개를 신탁에서 읽는다.

## 따름정리

- $\mathrm{NEXP}\subseteq\mathrm{P/poly}$ 이면 $\mathrm{NEXP}=\mathrm{MA}$ 다. 정직한 신탁의 다중선형 확장이 NEXP 에서 계산되므로 다항 크기 회로로 쓰이고, MA(Merlin–Arthur)의 증명자가 그 회로를 보내면 검증자가 신탁 검증을 혼자 수행한다. 이 따름정리를 [쉬운 증거 보조정리](easy-witness-lemma.md)가 쓴다.
- [PCP 정리](pcp-theorem.md)(probabilistically checkable proof)는 같은 꼴의 검증을 NP 에 맞게 줄인 것이다. NP(nondeterministic polynomial time)의 증거를 무작위 비트 $O(\log n)$ 개로 상수 개의 칸만 읽고 검증한다.

## 얽힘을 허용한 증명자

두 증명자가 양자 얽힘을 공유하면 부류 $\mathrm{MIP}^\ast$ 가 된다. Z. Ji, A. Natarajan, T. Vidick, J. Wright, H. Yuen 은 $\mathrm{MIP}^\ast=\mathrm{RE}$ 를 증명했다[^3]. RE(recursively enumerable)는 정지 문제처럼 받아들이는 입력을 나열할 수 있는 언어의 부류다.

# 활용

- 근사 불가능성. MIP 의 검증을 NP 규모로 줄이는 연구가 PCP 정리로 이어졌고, PCP 정리로부터 최대 절 충족 같은 최적화 문제의 근사 하한이 유도된다.
- 쉬운 증거 보조정리와 [Williams 정리](williams-theorem.md). 위 따름정리가 NEXP 의 회로 하한을 MA 의 탈무작위화와 잇는다.

[^1]: L. Babai, L. Fortnow, C. Lund, "Non-deterministic exponential time has two-prover interactive protocols", Computational Complexity 1 (1991), 3–40.
[^2]: L. Fortnow, J. Rompel, M. Sipser, "On the power of multi-prover interactive protocols", Theoretical Computer Science 134 (1994), 545–557. 학회 판은 Structure in Complexity Theory 1988.
[^3]: Z. Ji, A. Natarajan, T. Vidick, J. Wright, H. Yuen, "MIP* = RE", arXiv:2001.04383 (2020).

# 연관 문서

## 선수지식

- [대화형 증명](interactive-proofs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation
