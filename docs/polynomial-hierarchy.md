# 다항 계층

# 개요

**다항 계층(polynomial hierarchy, PH)** 은 다항 길이의 증거에 대한 존재 한정사와 전칭 한정사를 정해진 횟수만큼 번갈아 쓴 다항시간 술어로 정의되는 언어 부류들의 층이다. 첫 층의 $\Sigma_1^{\mathrm p}$ 는 NP(nondeterministic polynomial time), $\Pi_1^{\mathrm p}$ 는 coNP 이고, 층을 모두 합친 것이 PH 다. A. R. Meyer 와 L. J. Stockmeyer 가 1972 년에 도입했다[^1].

[NP-완전성과 Cook–Levin 정리](np-completeness.md)의 충족가능성 문제(satisfiability, SAT)가 한정사 하나짜리 문제라면, 한정사를 $k$ 번 번갈아 쓴 논리식의 참 판정이 $k$ 번째 층의 완전 문제다. 계산 가능성 이론의 [산술적 계층](arithmetical-hierarchy.md)에서 결정 가능한 술어를 다항시간 술어로, 무한한 한정사를 다항 길이의 한정사로 바꾼 꼴이다.

# 직관

논리식 $\varphi$ 와 수 $s$ 가 주어졌을 때, $\varphi$ 와 모든 할당에서 값이 같고 길이가 $s$ 이하인 논리식 $\psi$ 가 있는지 묻는다. $\psi$ 를 받아도 검증자는 $\psi$ 와 $\varphi$ 가 모든 할당에서 같은지 확인해야 하고, 할당이 $2^n$ 개라 하나씩 확인할 수 없다. 이 확인은 "같지 않은 할당이 있다" 의 부정이므로 coNP 의 일이다.

그래서 이 문제는 "길이 $s$ 이하인 $\psi$ 가 있어서, 모든 할당 $x$ 에 대해 $\psi(x)=\varphi(x)$ 다" 로 쓰인다. 짧은 대상에 대한 존재 한정사 다음에 전칭 한정사가 오고, 마지막의 $\psi(x)=\varphi(x)$ 는 다항시간에 계산된다. NP 는 존재 한정사 하나로 쓰이는 문제의 부류이고, 이렇게 한정사를 두 번 번갈아 쓰는 문제의 부류가 $\Sigma_2^{\mathrm p}$ 다.

# 정의

## 한정사 정의

$k\ge 0$ 이라 한다. 언어 $L$ 이 $\Sigma_k^{\mathrm p}$ 에 든다는 것은 다항식 $q$ 와 다항시간 술어 $V$ 가 있어서

$$
x\in L\iff\exists y_1\thinspace\forall y_2\thinspace\exists y_3\cdots Q_ky_k\ \ V(x,y_1,\dots,y_k)=1
$$

인 것이다. 각 $y_i$ 는 길이가 $q(\lvert x\rvert)$ 이하인 비트열이고, $Q_k$ 는 $k$ 가 홀수이면 $\exists$, 짝수이면 $\forall$ 다. 첫 한정사를 $\forall$ 로 바꾼 것이 $\Pi_k^{\mathrm p}$ 다. $\Sigma_0^{\mathrm p}=\Pi_0^{\mathrm p}=\mathrm P$ 이고

$$
\mathrm{PH}=\bigcup_{k\ge 0}\Sigma_k^{\mathrm p}
$$

이다.

## 신탁 정의

신탁 부류 $\mathcal C$ 에 대해 $\mathrm{NP}^{\mathcal C}$ 를 $\mathcal C$ 의 언어 하나를 신탁(oracle)으로 쓰는 비결정적 다항시간 기계가 판정하는 언어의 부류라 한다. 그러면 $\Sigma_{k+1}^{\mathrm p}=\mathrm{NP}^{\Sigma_k^{\mathrm p}}$, $\Pi_{k+1}^{\mathrm p}=\mathrm{coNP}^{\Sigma_k^{\mathrm p}}$ 이고, $\Delta_{k+1}^{\mathrm p}=\mathrm P^{\Sigma_k^{\mathrm p}}$ 로 둔다. 두 정의가 같은 부류를 준다는 것은 L. J. Stockmeyer 와 C. Wrathall 이 증명했다[^2].

# 성질

## 포함 관계

- $\Pi_k^{\mathrm p}$ 는 $\Sigma_k^{\mathrm p}$ 의 언어들의 여집합 전체다.
- $\Sigma_k^{\mathrm p}\cup\Pi_k^{\mathrm p}\subseteq\Delta_{k+1}^{\mathrm p}\subseteq\Sigma_{k+1}^{\mathrm p}\cap\Pi_{k+1}^{\mathrm p}$ 이다. 쓰지 않는 한정사를 앞이나 뒤에 더하면 된다.
- $\mathrm{PH}\subseteq\mathrm{PSPACE}$ 다. PSPACE 는 다항 공간(polynomial space)으로 판정되는 언어의 부류이고([공간 복잡도](space-complexity.md)), 한정사를 하나씩 재귀로 풀면 각 층이 다항 공간에 판정된다.

## 완전 문제

정리. 한정 불 논리식 $\exists x_1\forall x_2\cdots Q_kx_k\ \varphi(x_1,\dots,x_k)$ 의 참 판정 문제 $\Sigma_k\mathrm{SAT}$ 은 $\Sigma_k^{\mathrm p}$-완전이다. $x_i$ 는 변수의 묶음이다[^2].

증명의 요지. 한정사 정의의 $V$ 에 Cook–Levin 정리의 부호화를 적용하면 $V(x,y_1,\dots,y_k)=1$ 이 $y_i$ 와 보조 변수에 대한 논리식이 된다. 보조 변수는 마지막 한정사가 $\exists$ 이면 그 묶음에 넣고, $\forall$ 이면 $V$ 의 부정에 같은 부호화를 적용해 넣는다.

## 붕괴

정리. 어떤 $k\ge 1$ 에 대해 $\Sigma_k^{\mathrm p}=\Pi_k^{\mathrm p}$ 이면 $\mathrm{PH}=\Sigma_k^{\mathrm p}$ 다. 특히 $\mathrm P=\mathrm{NP}$ 이면 $\mathrm{PH}=\mathrm P$ 다.

증명의 요지. $\Sigma_{k+1}^{\mathrm p}$ 의 술어 $\exists y_1\thinspace R(x,y_1)$ 에서 $R$ 은 $\Pi_k^{\mathrm p}$ 술어이고, 가정으로 $\Sigma_k^{\mathrm p}$ 술어로 바뀐다. 그러면 앞의 $\exists y_1$ 과 $R$ 의 첫 $\exists$ 가 하나로 합쳐져 $\Sigma_k^{\mathrm p}$ 술어가 된다. $k$ 에 대한 귀납법으로 위의 모든 층이 $\Sigma_k^{\mathrm p}$ 와 같다.

## Karp–Lipton 정리

정리. NP 의 모든 언어가 다항 크기 [불 회로](boolean-circuits.md)의 족으로 판정되면 $\mathrm{PH}=\Sigma_2^{\mathrm p}$ 다. R. M. Karp 와 R. J. Lipton 이 증명했다[^3].

대우로, PH 가 둘째 층에서 붕괴하지 않으면 다항 크기 회로로 판정되지 않는 NP 의 언어가 있다.

# 활용

- 무작위 계산. [무작위 복잡도 부류](randomized-complexity-classes.md)의 BPP(bounded-error probabilistic polynomial time)는 $\Sigma_2^{\mathrm p}\cap\Pi_2^{\mathrm p}$ 에 든다(Sipser–Gács–Lautemann 정리).
- 해의 수 세기. [Valiant–Vazirani 정리](valiant-vazirani.md)의 환원을 층마다 적용하면 PH 전체가 해의 수를 세는 신탁을 쓰는 다항시간 부류에 든다는 [Toda 정리](toda-theorem.md)가 나온다.
- [그래프 동형](graph-isomorphism.md). 그래프 동형이 NP-완전이면 PH 가 둘째 층에서 붕괴한다. 그래프 비동형에 짧은 대화형 증명이 있다는 것에서 나온다.
- 회로 최소화와 두 사람 놀이. 직관 절의 최소 논리식 문제는 $\Sigma_2^{\mathrm p}$ 에 든다. 두 사람이 다항 길이의 수를 $k$ 번 번갈아 두고 승패가 다항시간에 판정되는 놀이에서 선수의 필승 판정은 $\Sigma_k^{\mathrm p}$ 에 든다.

[^1]: A. R. Meyer, L. J. Stockmeyer, "The equivalence problem for regular expressions with squaring requires exponential space", Proceedings of the 13th IEEE Symposium on Switching and Automata Theory (1972), 125–129.
[^2]: L. J. Stockmeyer, "The polynomial-time hierarchy", Theoretical Computer Science 3(1) (1976), 1–22. C. Wrathall, "Complete sets and the polynomial-time hierarchy", Theoretical Computer Science 3(1) (1976), 23–33.
[^3]: R. M. Karp, R. J. Lipton, "Some connections between nonuniform and uniform complexity classes", Proceedings of the 12th ACM Symposium on Theory of Computing (1980), 302–309.

# 연관 문서

## 선수지식

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)

## 더 알아보기

- [Toda 정리](toda-theorem.md)

#complexity #logic
