# Baker–Gill–Solovay 정리

# 개요

**Baker–Gill–Solovay 정리(Baker–Gill–Solovay theorem)** 는 신탁을 붙였을 때 $\mathrm P=\mathrm{NP}$ 가 되는 경우와 $\mathrm P\ne\mathrm{NP}$ 가 되는 경우가 모두 있다는 정리다. [시간 계층 정리](time-hierarchy-theorem.md)는 기계를 흉내 내고 답을 뒤집어 $\mathrm P\ne\mathrm{EXPTIME}$ 을 증명한다. 같은 방법으로 $\mathrm P\ne\mathrm{NP}$ 를 증명하려 하면, 그 증명은 모든 기계에 같은 신탁을 붙여도 그대로 성립하므로 $\mathrm P^A=\mathrm{NP}^A$ 인 신탁 $A$ 에서 거짓이 된다. 이 정리는 그런 신탁을 직접 만들어, 흉내와 뒤집기만으로는 [P 대 NP 문제](p-np.md)를 풀 수 없음을 보인다.

# 직관

시간 계층 정리의 대각선 기계 $D$ 는 입력으로 받은 기계 $M$ 을 정해진 단계 동안 흉내 내고 답을 뒤집는다. $M$ 이 계산 도중 어떤 집합 $A$ 에 대해 "$q\in A$ 인가" 를 물을 수 있어도, $D$ 가 같은 질문을 $A$ 에 그대로 물으면 흉내는 바뀌지 않는다. 그래서 이 증명은 모든 $A$ 에 대해 $\mathrm P^A\ne\mathrm{EXPTIME}^A$ 를 준다.

$\mathrm P\ne\mathrm{NP}$ 를 같은 방법으로 증명했다면 모든 $A$ 에 대해 $\mathrm P^A\ne\mathrm{NP}^A$ 도 증명되었을 것이다. 그런데 $A$ 를 다항식 공간에서 풀리는 가장 어려운 문제로 잡으면, 다항시간 기계도 $A$ 에 물어 다항식 공간의 계산을 한 단계에 끝내므로 $\mathrm P^A$ 와 $\mathrm{NP}^A$ 가 모두 다항식 공간 계산 전체와 같아진다. 그러므로 그런 증명은 있을 수 없다.

# 정의

## 신탁 기계

언어 $A$ 를 **신탁(oracle)** 으로 쓰는 기계는 계산 도중 문자열 $q$ 를 질문 테이프에 쓰고 "$q\in A$ 인가" 의 답을 한 단계에 받는다. 신탁 $A$ 를 쓰는 결정적 다항시간 기계로 판정되는 언어의 부류를 $\mathrm P^A$, 비결정적 다항시간 기계로 바꾼 것을 $\mathrm{NP}^A$ 로 쓴다. $A$ 가 충족가능한 논리식의 집합이면, 논리식이 충족 불가능한지는 $A$ 에 한 번 묻고 답을 뒤집어 판정되므로 $\mathrm P^A$ 에 든다.

## 상대화되는 증명

두 복잡도 부류 사이의 관계에 대한 증명이, 모든 기계에 같은 신탁 $A$ 를 붙여도 그대로 성립하면 그 증명을 **상대화(relativization)** 되는 증명이라 한다. 직관 절의 시간 계층 정리의 증명이 그 예이고, 모든 $A$ 에 대해 $\mathrm P^A\subsetneq\mathrm{EXPTIME}^A$ 를 준다.

# 성질

## 두 신탁

신탁 $A$ 와 $B$ 가 있어서 $\mathrm P^A=\mathrm{NP}^A$ 이고 $\mathrm P^B\ne\mathrm{NP}^B$ 이다[^1].

$A$ 의 증명. $A$ 를 [공간 복잡도](space-complexity.md)의 PSPACE(polynomial space)-완전 언어, 예를 들어 참인 양화 불 논리식의 집합으로 잡는다. $\mathrm{NP}^A$ 의 기계는 다항식 개의 질문을 각각 다항식 공간에서 답하며 흉내 낼 수 있고, Savitch 정리(Savitch's theorem)로 비결정성을 없애도 공간이 다항식이다. 그래서 다음 포함이 성립한다.

$$
\mathrm{NP}^A\subseteq\mathrm{PSPACE}\subseteq\mathrm P^A\subseteq\mathrm{NP}^A
$$

$B$ 의 증명. $B$ 를 길이마다 원소를 많아야 하나 두도록 단계적으로 만들고, $B$ 에 길이 $n$ 인 원소가 있는 $1^n$ 들의 집합을 $L_B$ 라 한다. 길이 $n$ 인 문자열 하나를 비결정적으로 골라 $B$ 에 물으면 되므로 $L_B\in\mathrm{NP}^B$ 다. 신탁 다항시간 기계를 $M_1,M_2,\dots$ 로 늘어놓고, 단계 $i$ 에서 앞 단계들이 쓴 길이보다 길고 $M_i$ 의 실행 시간이 $2^n$ 보다 작은 $n$ 을 고른다.

$M_i^B$ 를 $1^n$ 에서 돌린다. 받아들이면 길이 $n$ 인 원소를 $B$ 에 넣지 않는다. 거부하면 $M_i$ 가 묻지 않은 길이 $n$ 인 문자열 하나를 $B$ 에 넣는다. 질문은 $2^n$ 개보다 적으므로 그런 문자열이 남고, 넣어도 $M_i$ 의 실행은 바뀌지 않는다.

어느 경우든 $M_i$ 는 $1^n$ 에서 $L_B$ 와 다르게 답하므로 $L_B\notin\mathrm P^B$ 다.

## 귀결

상대화되는 증명은 $A$ 를 붙인 경우와 $B$ 를 붙인 경우에 모두 성립해야 한다. 그러므로 상대화되는 증명으로는 $\mathrm P=\mathrm{NP}$ 도 $\mathrm P\ne\mathrm{NP}$ 도 증명되지 않는다.

## 무작위 신탁

신탁 $R$ 을 각 문자열이 확률 $\tfrac12$ 로 독립으로 들어가는 무작위 집합으로 잡으면, 확률 $1$ 로 $\mathrm P^R\ne\mathrm{NP}^R$ 이다[^2]. 증명에는 $B$ 의 증명에서 쓴 $L_B$ 와 같은 꼴의 언어를 쓴다.

# 활용

- [대화형 증명](interactive-proofs.md). $\mathrm{IP}=\mathrm{PSPACE}$ 의 증명은 논리식을 다항식으로 바꾸는 산술화를 쓰고, 신탁 $C$ 가 있어서 $\mathrm{IP}^C\ne\mathrm{PSPACE}^C$ 이다[^3]. 그래서 이 증명은 상대화되지 않는 증명의 예다.
- [대수화](algebrization.md). 산술화까지 포함하도록 신탁을 그 다중선형 확장으로 바꾼 장벽이다. $B$ 의 증명에서 쓴 언어 $L_B$ 를 다항식 보간과 함께 다시 써서, 대수화되는 증명도 P 대 NP 문제를 풀지 못함을 보인다.
- [자연 증명](natural-proofs.md). 상대화와 다른 성질로 회로 하한의 증명 방법을 제한하는 장벽이다. 시간 계층 정리의 대각선 논법은 상대화되어 이 정리에 막히고, 회로 하한의 조합적 논법은 자연 증명 장벽에 막힌다.

[^1]: T. Baker, J. Gill, R. Solovay, Relativizations of the P =? NP question, *SIAM Journal on Computing* 4 (1975), 431–442.
[^2]: C. H. Bennett, J. Gill, Relative to a random oracle A, P^A ≠ NP^A ≠ co-NP^A with probability 1, *SIAM Journal on Computing* 10 (1981), 96–113.
[^3]: L. Fortnow, M. Sipser, Are there interactive protocols for co-NP languages?, *Information Processing Letters* 28 (1988), 249–251.

# 연관 문서

## 선수지식

- [시간 계층 정리](time-hierarchy-theorem.md)
- [공간 복잡도](space-complexity.md)

## 더 알아보기

- [대수화](algebrization.md)

#complexity #computation #logic #theorem
