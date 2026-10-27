# 시간 계층 정리

# 개요

**시간 계층 정리(time hierarchy theorem)** 는 계산 시간을 충분히 더 주면 풀 수 있는 문제가 실제로 늘어난다는 정리다. 시간 $n^3$ 이면 풀리지만 시간 $n^2$ 으로는 풀리지 않는 문제가 있음을 보이려면, 시간 $n^2$ 안에 끝나는 모든 기계가 틀리는 문제를 하나 만들어야 한다. 이 정리는 입력으로 받은 기계를 정해진 시간 동안 흉내 내고 그 답을 뒤집는 대각선 논법으로 그런 문제를 만든다.

# 직관

시간 계층 정리는 Turing 기계에 시간을 충분히 더 주면 판정할 수 있는 언어가 실제로 늘어난다는 정리다. J. Hartmanis 와 R. E. Stearns 가 1965 년에 증명했다[^1]. [P 대 NP 문제](p-np.md)에 나오는 부류 사이의 진포함 $\mathrm P\subsetneq\mathrm{EXPTIME}$ 이 이 정리에서 나온다.

증명은 [정지 문제](halting-problem.md)의 대각선 논법을 시간 제한 안에서 다시 하는 것이다. 다른 기계를 흉내 내고 답을 뒤집기만 하므로 신탁(oracle)을 붙여도 그대로 성립한다. 그래서 대각선 논법만으로는 $\mathrm P$ 와 $\mathrm{NP}$ 를 가를 수 없다(Baker–Gill–Solovay 정리).

$\mathrm P\subseteq\mathrm{NP}\subseteq\mathrm{PSPACE}\subseteq\mathrm{EXPTIME}$ 의 포함이 진포함인지 보이려면, 한쪽 부류의 기계로는 판정되지 않는 언어를 하나 만들어야 한다. 시간 $n^2$ 안에 판정되지 않고 시간 $n^3$ 안에는 판정되는 언어를 만들어 본다.

입력 $w$ 를 기계의 부호 $\langle M\rangle$ 뒤에 $0$ 을 몇 개 붙인 것으로 읽는다. 언어 $D$ 는 $M$ 을 입력 $w$ 에서 $\lvert w\rvert^3$ 단계 동안 돌려서 그 안에 받아들이지 않으면 $w$ 를 넣고, 받아들이면 넣지 않는 것으로 정한다. $D$ 를 판정하려면 $M$ 을 $\lvert w\rvert^3$ 단계 동안 흉내 내면 된다.

시간 $c\thinspace n^2$ 에 도는 기계 $M$ 이 $D$ 를 판정한다고 하자. $0$ 을 충분히 많이 붙인 $w=\langle M\rangle 0^j$ 에서는 $c\lvert w\rvert^2\lt\lvert w\rvert^3$ 이므로 $M$ 은 흉내가 끝나기 전에 답을 낸다. $M$ 이 $w$ 를 받아들이면 $D$ 의 정의로 $w\notin D$ 이고, 거부하면 $w\in D$ 다. 어느 쪽이든 $M$ 의 답이 틀리므로 $D$ 는 시간 $O(n^2)$ 에 판정되지 않는다.

남은 것은 흉내의 비용이다. 다른 기계를 한 단계 흉내 내는 데 드는 추가 비용이 작아야 $D$ 가 시간 $n^3$ 근처에 판정된다. 다중 테이프 기계는 $t$ 단계를 $O(t\log t)$ 단계에 흉내 낼 수 있어서, $D$ 는 시간 $O(n^3\log n)$ 에 판정된다.

# 정의

## 시간 제한 부류

$\mathrm{TIME}(f(n))$ 은 길이 $n$ 인 입력에서 $O(f(n))$ 단계 안에 멈추는 결정적 다중 테이프 Turing 기계로 판정되는 언어의 부류다. 비결정적 기계로 바꾼 것이 $\mathrm{NTIME}(f(n))$ 이다. [계산 가능성](computability.md)의 Turing 기계와 계산 능력은 같고, 테이프 수는 시간을 다항식 배만큼 바꾼다.

## 시간 구성 가능

함수 $f$ 가 $f(n)\ge n\log n$ 을 만족하고, $1^n$ 을 받아 $f(n)$ 의 이진 표현을 $O(f(n))$ 단계 안에 써 내는 기계가 있으면 $f$ 는 **시간 구성 가능(time-constructible)** 하다고 한다. $n^k$, $2^n$, $n\log n$ 은 시간 구성 가능하다. 대각선 기계는 이 성질로 자기 시간 한도를 미리 재어 두고 그 안에서만 흉내를 낸다.

## 신탁 기계

언어 $A$ 를 **신탁** 으로 쓰는 기계는 계산 도중 "$q\in A$ 인가" 를 물어 한 단계에 답을 받는다. 신탁 $A$ 를 쓰는 다항시간 기계로 판정되는 부류를 $\mathrm P^A$, 비결정적 기계로 바꾼 것을 $\mathrm{NP}^A$ 로 쓴다.

# 성질

## 결정적 시간 계층 정리

정리. $f$ 가 시간 구성 가능하고 $g(n)\log g(n)=o(f(n))$ 이면

$$
\mathrm{TIME}(g(n))\subsetneq\mathrm{TIME}(f(n))
$$

이다[^1].

증명의 요지. 직관 절의 $D$ 에서 $n^3$ 을 $f(n)/\log f(n)$ 으로, $n^2$ 을 $g$ 로 바꾼다. 대각선 기계는 먼저 $f(\lvert w\rvert)$ 를 재고, 그 한도 안에서 $M$ 을 흉내 내며 받아들임을 뒤집는다. $t$ 단계를 $O(t\log t)$ 에 흉내 내는 F. C. Hennie 와 R. E. Stearns 의 두 테이프 흉내가 $\log$ 인자의 출처다[^2].

따름정리. 모든 $k\ge 1$ 에 대해 $\mathrm{TIME}(n^k)\subsetneq\mathrm{TIME}(n^{k+1})$ 이다. $\mathrm P\subseteq\mathrm{TIME}(2^n)\subsetneq\mathrm{TIME}(2^{2n})\subseteq\mathrm{EXPTIME}$ 이므로 $\mathrm P\subsetneq\mathrm{EXPTIME}$ 이다.

## 비결정적 시간 계층 정리

정리. $f$ 가 시간 구성 가능하고 $g(n+1)=o(f(n))$ 이면 $\mathrm{NTIME}(g(n))\subsetneq\mathrm{NTIME}(f(n))$ 이다[^3][^4]. 따라서 $\mathrm{NP}\subsetneq\mathrm{NEXPTIME}$ 이다.

증명의 요지. 비결정적 기계의 답을 뒤집으려면 모든 계산 갈래가 거부하는지 확인해야 하고, 이것은 짧은 시간에 되지 않는다. S. Žák 의 게으른 대각선 논법(lazy diagonalization)은 입력 $1^n$ 만 보고, 길이의 구간 $a\lt n\le b$ 마다 기계 $M$ 하나를 맡긴다. $a\lt n\lt b$ 이면 $M$ 의 $1^{n+1}$ 에서의 답을 비결정적으로 그대로 따라 하고, $n=b$ 이면 $M$ 의 $1^{a+1}$ 에서의 답을 결정적으로 모두 따져 뒤집는다. $b$ 를 $a$ 보다 지수적으로 크게 잡으면 끝에서의 결정적 흉내도 시간 한도 안에 들어간다. $M$ 이 이 언어를 판정한다면 답이 $1^{a+1}$ 에서 $1^b$ 까지 그대로 전해져 $1^b$ 에서의 뒤집기와 모순된다.

## 간격 정리

정리(Borodin gap theorem). 계산 가능한 전함수 $r$ 이 $r(x)\ge x$ 를 만족하면, 계산 가능한 함수 $g$ 가 있어서 $\mathrm{TIME}(g(n))=\mathrm{TIME}(r(g(n)))$ 이다[^5].

증명의 요지. 기계를 하나씩 늘려 가며, 길이 $n$ 의 입력에서 처음 $n$ 개의 기계 가운데 어느 것도 멈추는 시간이 구간 $(g(n), r(g(n))\rbrack$ 에 들지 않도록 $g(n)$ 을 고른다. 처음 $n$ 개 기계와 길이 $n$ 입력은 유한하므로 이런 $g(n)$ 이 존재하고 계산된다. 이 $g$ 는 시간 구성 가능하지 않으므로 계층 정리의 가정이 빠질 수 없음을 보인다.

## 상대화

시간 계층 정리의 증명은 다른 기계를 흉내 내고 답을 뒤집는 것뿐이어서, 모든 기계에 같은 신탁 $A$ 를 붙여도 그대로 성립한다. 예를 들어 모든 $A$ 에 대해 $\mathrm P^A\subsetneq\mathrm{EXPTIME}^A$ 이다. 이런 증명을 **상대화(relativization)** 되는 증명이라 한다.

정리(Baker–Gill–Solovay theorem). 신탁 $A$ 와 $B$ 가 있어서 $\mathrm P^A=\mathrm{NP}^A$ 이고 $\mathrm P^B\ne\mathrm{NP}^B$ 이다[^6].

증명의 요지. $A$ 는 [공간 복잡도](space-complexity.md)의 PSPACE(polynomial space)-완전 언어로 잡는다. 그러면 $\mathrm{NP}^A\subseteq\mathrm{PSPACE}\subseteq\mathrm P^A$ 다. $B$ 는 길이마다 원소를 많아야 하나 두도록 단계적으로 만들고, $L_B=\lbrace 1^n : B\ \text{에 길이}\ n\ \text{인 원소가 있다}\rbrace$ 로 둔다. $L_B\in\mathrm{NP}^B$ 이다. $i$ 번째 단계에서는 $i$ 번째 다항시간 신탁 기계가 묻지 않은 길이 $n$ 의 문자열로 $B$ 를 정해 그 기계가 $1^n$ 에서 틀리게 만든다. 질문은 $2^n$ 개보다 적으므로 묻지 않은 문자열이 남는다.

상대화되는 증명은 $\mathrm P^A=\mathrm{NP}^A$ 인 세계와 $\mathrm P^B\ne\mathrm{NP}^B$ 인 세계에서 모두 성립해야 하므로, $\mathrm P$ 와 $\mathrm{NP}$ 의 관계를 어느 쪽으로도 결정하지 못한다.

# 활용

- [P 대 NP 문제](p-np.md)의 포함 사슬 $\mathrm P\subseteq\mathrm{NP}\subseteq\mathrm{PSPACE}\subseteq\mathrm{EXPTIME}$ 에서 적어도 한 포함이 진포함이라는 것은 결정적 시간 계층 정리의 $\mathrm P\subsetneq\mathrm{EXPTIME}$ 에서 나온다.
- [공간 복잡도](space-complexity.md)의 공간 계층 정리는 같은 대각선 논법을 공간 한도에서 한 것이다. 공간은 흉내의 추가 비용이 상수 배여서 $\log$ 인자 없이 $s'=o(s)$ 만으로 성립한다.
- [대화형 증명](interactive-proofs.md)의 $\mathrm{IP}=\mathrm{PSPACE}$ 를 증명하는 산술화는 상대화되지 않는 기법이다. 신탁 $C$ 가 있어서 $\mathrm{IP}^C\ne\mathrm{PSPACE}^C$ 이므로[^7], 이 증명은 Baker–Gill–Solovay 정리가 정한 한계 밖에 있다.

[^1]: J. Hartmanis, R. E. Stearns, "On the computational complexity of algorithms", Transactions of the American Mathematical Society 117 (1965), 285–306.
[^2]: F. C. Hennie, R. E. Stearns, "Two-tape simulation of multitape Turing machines", Journal of the ACM 13 (1966), 533–546.
[^3]: S. A. Cook, "A hierarchy for nondeterministic time complexity", Journal of Computer and System Sciences 7 (1973), 343–353.
[^4]: S. Žák, "A Turing machine time hierarchy", Theoretical Computer Science 26 (1983), 327–333.
[^5]: A. Borodin, "Computational complexity and the existence of complexity gaps", Journal of the ACM 19 (1972), 158–174.
[^6]: T. Baker, J. Gill, R. Solovay, "Relativizations of the P =? NP question", SIAM Journal on Computing 4 (1975), 431–442.
[^7]: L. Fortnow, M. Sipser, "Are there interactive protocols for co-NP languages?", Information Processing Letters 28 (1988), 249–251.

# 연관 문서

## 선수지식

- [P 대 NP 문제](p-np.md)
- [정지 문제](halting-problem.md)

## 더 알아보기

- [Ladner 정리](ladner-theorem.md)
- [쉬운 증거 보조정리](easy-witness-lemma.md)
- [Williams 정리](williams-theorem.md)
- [대수화](algebrization.md)

#complexity #computation #logic #theorem
