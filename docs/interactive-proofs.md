# 대화형 증명

# 개요

**대화형 증명(interactive proof)** 은 계산 능력에 제한이 없는 증명자와 무작위성을 쓰는 다항시간 검증자가 메시지를 주고받아, 검증자가 입력이 언어에 속한다는 것을 높은 확률로 확신하게 하는 절차다. 이런 절차가 있는 언어 전체의 복잡도 류를 $\mathrm{IP}$ 라 한다.

[NP-완전성](np-completeness.md)의 $\mathrm{NP}$ 는 증명자가 증거를 한 번 보내고 검증자가 결정적으로 검사하는 경우다. 대화와 무작위성을 허락하면 검증할 수 있는 언어가 다항 공간에서 판정되는 언어 전체, 곧 [공간 복잡도](space-complexity.md)의 부류 $\mathrm{PSPACE}$ 로 넓어진다. 이것이 Shamir 정리 $\mathrm{IP}=\mathrm{PSPACE}$ 다.

# 직관

두 그래프 $G\_0$, $G\_1$ 이 동형임은 대응 하나로 증명되고, 검증자는 그 대응을 정점쌍마다 검사한다. 동형이 아님을 보이는 짧은 증거는 알려져 있지 않다. 대응 $n!$ 개를 모두 시도해 실패를 보여 주면 증거의 길이가 지수적이다.

검증자가 질문을 하면 길이 문제가 사라진다. 검증자는 몰래 $b\in\lbrace 0,1\rbrace$ 과 정점 순열 $\sigma$ 를 골라 $H=\sigma(G\_b)$ 를 보내고, 증명자에게 $H$ 가 어느 그래프에서 왔는지 묻는다. 두 그래프가 동형이 아니면 $H$ 는 둘 가운데 정확히 하나와 동형이므로 증명자는 항상 맞힌다.

두 그래프가 동형이면 $H$ 는 $b=0$ 일 때와 $b=1$ 일 때 같은 분포를 따른다. 증명자가 아무리 계산해도 $H$ 에서 $b$ 를 알 수 없으므로 맞힐 확률이 $1/2$ 이다. $k$ 번 되풀이해 모두 맞히면 검증자는 받아들이고, 동형인데 속을 확률은 $2^{-k}$ 다. 증거 대신 검증자의 비밀 동전과 증명자의 답으로 비동형이 확인된다.

# 정의

## 대화형 증명 체계

언어 $L$ 의 대화형 증명 체계는 함수 $P$ 와 확률적 다항시간 알고리즘 $V$ 의 쌍 $(P,V)$ 이다. 입력 $x$ 를 공유한 두 기계가 $\lvert x\rvert$ 의 다항식만큼 메시지를 번갈아 보내고, 마지막에 $V$ 가 받아들이거나 거절한다. $P$ 를 **증명자(prover)**, $V$ 를 **검증자(verifier)** 라 한다.

- **완전성(completeness).** $x\in L$ 이면 $V$ 가 $P$ 와의 대화 끝에 받아들일 확률이 $2/3$ 이상이다.
- **건전성(soundness).** $x\notin L$ 이면 모든 증명자 $P^\ast$ 에 대해 $V$ 가 받아들일 확률이 $1/3$ 이하다.

$\mathrm{IP}$ 는 대화형 증명 체계가 존재하는 언어 전체의 류다. 독립 반복과 다수결로 오류 확률을 $2^{-k}$ 까지 줄일 수 있으므로 $2/3$ 과 $1/3$ 은 다른 상수로 바꿔도 류가 같다. 정의는 Goldwasser, Micali, Rackoff 가 했다[^1].

## 공개 동전과 Arthur–Merlin

검증자가 자기 동전의 결과를 모두 증명자에게 보내는 체계를 **공개 동전(public coin)** 체계라 한다. Babai 는 이를 **Arthur–Merlin 게임(Arthur–Merlin game)** 으로 정의했고, 라운드 수가 상수인 공개 동전 체계가 있는 언어의 류를 $\mathrm{AM}$ 이라 한다[^2]. 직관 절의 비동형 프로토콜은 동전을 숨기는 비공개 동전 체계다.

**Goldwasser–Sipser 정리(Goldwasser–Sipser theorem).** $k$ 라운드 비공개 동전 체계가 있는 언어는 $k+2$ 라운드 공개 동전 체계도 있다[^3]. 그래서 그래프 비동형은 $\mathrm{AM}$ 에 속한다.

# 성질

## 포함관계

$\mathrm{NP}\subseteq\mathrm{IP}$ 다. 증명자가 증거를 보내고 검증자가 검사하는 것이 한 라운드 대화형 증명이다.

$\mathrm{IP}\subseteq\mathrm{PSPACE}$ 다. 입력 $x$ 가 주어지면 검증자를 받아들이게 할 최대 확률은 대화 나무를 깊이 우선으로 훑어, 증명자 차례에서는 최댓값을, 검증자 차례에서는 평균을 취해 계산된다. 나무의 깊이가 다항식이므로 이 재귀는 다항 공간에서 끝난다.

## 합 검사 프로토콜

유한체 $\mathbb F$ 위의 $n$ 변수 다항식 $g$ 가 각 변수에 대해 차수 $d$ 이하이고, 검증자는 $g$ 의 값을 임의의 점에서 계산할 수 있다. **합 검사 프로토콜(sum-check protocol)** 은 다음 등식을 확인한다[^4].

$$
\sum\_{x\_1\in\lbrace 0,1\rbrace}\cdots\sum\_{x\_n\in\lbrace 0,1\rbrace}g(x\_1,\dots,x\_n)=K
$$

1. 증명자가 일변수 다항식 $g\_1(X)=\sum\_{x\_2,\dots,x\_n}g(X,x\_2,\dots,x\_n)$ 을 보낸다.
2. 검증자는 $g\_1(0)+g\_1(1)=K$ 인지 보고, $r\_1\in\mathbb F$ 를 무작위로 골라 보낸다.
3. 남은 주장은 $\sum\_{x\_2,\dots,x\_n}g(r\_1,x\_2,\dots,x\_n)=g\_1(r\_1)$ 이고, 변수가 하나 줄었다. 같은 단계를 되풀이한다.
4. $n$ 단계 뒤에 검증자는 $g(r\_1,\dots,r\_n)$ 을 직접 계산해 마지막 주장과 비교한다.

증명자가 어느 단계에서 틀린 $g\_i$ 를 보내면, 차수 $d$ 이하의 서로 다른 두 일변수 다항식은 많아야 $d$ 개의 점에서 같으므로([Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)의 일변수 경우) 무작위 $r\_i$ 에서 들킬 확률이 $1-d/\lvert\mathbb F\rvert$ 이상이다. 전체 건전성 오류는 $nd/\lvert\mathbb F\rvert$ 이하다.

## Shamir 정리

**Shamir 정리(Shamir's theorem).** $\mathrm{IP}=\mathrm{PSPACE}$ 다[^5].

증명의 요지. $\mathrm{PSPACE}$-완전 문제인 한정 불 논리식의 참 판정(true quantified Boolean formula, TQBF)에 대화형 증명을 준다. 논리식을 다항식으로 바꾸는 **산술화(arithmetization)** 로 $x\wedge y$ 를 $xy$ 로, $\neg x$ 를 $1-x$ 로 쓰면, $\forall x$ 는 $x=0$ 과 $x=1$ 의 값의 곱이 되고 $\exists x$ 는 $1-(1-\cdot)(1-\cdot)$ 이 된다. 그 위에서 합 검사 프로토콜의 단계를 곱과 합에 맞게 고쳐 돌린다. 곱을 거듭하면 차수가 지수적으로 커지므로, 한정사 사이마다 각 변수의 차수를 $1$ 로 낮추는 선형화 연산을 넣어 증명자가 보내는 다항식을 낮은 차수로 유지한다. 선형화는 $\lbrace 0,1\rbrace$ 위의 값을 바꾸지 않는다.

같은 방법이 먼저 $\mathrm{coNP}$ 와 $\char35{}\mathrm P$ 의 문제에 대화형 증명을 주었다. 3-CNF(conjunctive normal form) 논리식의 충족 배정 개수는 산술화한 다항식의 $\lbrace 0,1\rbrace^n$ 위의 합이고, 합 검사 프로토콜이 그대로 적용된다[^4].

# 활용

- [영지식 증명](zero-knowledge-proofs.md)은 대화형 증명에 검증자가 진술의 참 말고는 아무것도 배우지 않는다는 조건을 더한 것이다.
- [그래프 동형](graph-isomorphism.md)의 복잡도. 그래프 비동형이 $\mathrm{AM}$ 에 속하므로, 그래프 동형이 NP-완전이면 다항 계층이 두 번째 단계로 붕괴한다.
- 여러 증명자. 서로 통신하지 못하는 두 증명자를 허락한 류 $\mathrm{MIP}$ 는 비결정적 지수 시간 $\mathrm{NEXP}$ 와 같다([MIP = NEXP 정리](mip-nexp.md))[^6]. 이 결과의 규모를 줄인 것이 [PCP 정리](pcp-theorem.md)의 출발점이다.
- 계산 위임. 약한 검증자가 강한 서버에 계산을 맡기고 결과가 맞는지 확인할 때, 회로를 층마다 합 검사 프로토콜로 검사하는 [Goldwasser–Kalai–Rothblum 프로토콜](gkr-protocol.md)을 쓴다[^7].

[^1]: S. Goldwasser, S. Micali, C. Rackoff, "The knowledge complexity of interactive proof systems", SIAM Journal on Computing 18 (1989), 186–208. 학회판은 STOC 1985.
[^2]: L. Babai, "Trading group theory for randomness", STOC 1985, 421–429.
[^3]: S. Goldwasser, M. Sipser, "Private coins versus public coins in interactive proof systems", STOC 1986, 59–68.
[^4]: C. Lund, L. Fortnow, H. Karloff, N. Nisan, "Algebraic methods for interactive proof systems", Journal of the ACM 39 (1992), 859–868.
[^5]: A. Shamir, "IP = PSPACE", Journal of the ACM 39 (1992), 869–877.
[^6]: L. Babai, L. Fortnow, C. Lund, "Non-deterministic exponential time has two-prover interactive protocols", Computational Complexity 1 (1991), 3–40.
[^7]: S. Goldwasser, Y. T. Kalai, G. N. Rothblum, "Delegating computation: interactive proofs for muggles", Journal of the ACM 62 (2015), Article 27.

# 연관 문서

## 선수지식

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)
- [그래프 동형](graph-isomorphism.md)
- [공간 복잡도](space-complexity.md)

## 더 알아보기

- [영지식 증명](zero-knowledge-proofs.md)
- [Goldwasser–Kalai–Rothblum 프로토콜](gkr-protocol.md)
- [MIP = NEXP 정리](mip-nexp.md)

#complexity #computation #algorithms
