# 셈 복잡도

# 개요

**셈 복잡도(counting complexity)** 는 문제의 해가 몇 개인지 세는 데 드는 계산 비용을 다루는 이론이다. 이분 그래프에서 모든 정점을 둘씩 짝짓는 방법이 있는지는 다항시간에 판정되지만, 그런 방법의 수를 세는 문제는 해의 수를 세는 문제 가운데 가장 어려운 것과 같은 정도로 어렵다는 것이 증명되어 있다. 셈 복잡도는 세는 문제들을 이런 어려움의 정도로 나누어, 판정과 세기의 비용 차이를 비교한다.

# 직관

셈 복잡도는 해가 있는지가 아니라 해가 몇 개인지를 계산하는 데 드는 비용을 다루는 복잡도 이론이다. 중심 부류는 L. G. Valiant 가 1979 년에 도입한 #P(sharp P)로, [NP-완전성과 Cook–Levin 정리](np-completeness.md)의 검증기가 받아들이는 증거의 수를 세는 함수의 부류다[^1].

판정이 다항시간에 되는 문제도 그 해의 수를 세는 것은 #P-완전일 수 있다. 이분 그래프의 완전 매칭이 그 예이고, 세는 문제는 [영구식](permanent.md)의 계산과 같다. 거꾸로 #P 함수 하나를 신탁으로 쓰면 [다항 계층](polynomial-hierarchy.md) 전체가 판정된다는 것이 [Toda 정리](toda-theorem.md)다.

논리식 $\varphi$ 의 충족 할당이 있는지 묻는 충족가능성 문제(satisfiability, SAT)는 NP-완전이다. 충족 할당이 몇 개인지 묻는 문제를 #SAT(sharp satisfiability)라 한다. #SAT 를 풀면 개수가 $0$ 인지 보아 충족가능성이 판정되므로, #SAT 는 SAT 보다 쉽지 않다.

판정이 쉬운 문제에서 세기를 본다. 이분 그래프에 완전 매칭이 있는지는 증가 경로를 찾는 알고리즘으로 다항시간에 판정된다. 그런데 이 알고리즘은 매칭 하나를 찾고 멈추고, 매칭의 수는 정점이 $2n$ 개일 때 $n!$ 개까지 될 수 있어 하나씩 셀 수 없다. 완전 매칭의 수는 이분 인접 행렬의 영구식이고, 영구식은 [행렬식](determinants.md)에서 순열의 부호를 뺀 것이다. 부호가 있으면 소거법으로 $O(n^3)$ 에 계산되지만, 부호를 빼면 소거법이 값을 보존하지 않는다. Valiant 는 이 계산이 #SAT 만큼 어렵다는 것을 증명했다.

# 정의

## #P

함수 $f:\lbrace 0,1\rbrace^\ast\to\mathbb N$ 이 **#P** 에 든다는 것은 다항시간 검증기 $V$ 와 다항식 $q$ 가 있어서

$$
f(x)=\big\lvert\lbrace y:\lvert y\rvert\le q(\lvert x\rvert),\ V(x,y)=1\rbrace\big\rvert
$$

인 것이다. 비결정적 다항시간 기계의 받아들이는 계산 갈래의 수로 정의해도 같은 부류다.

## 환원과 완전성

함수 $f$ 를 계산하는 다항시간 기계가 $g$ 의 값을 한 단계에 답하는 신탁을 쓸 수 있으면 $f$ 가 $g$ 로 다항시간 Turing 환원된다고 한다. 모든 #P 함수가 $g$ 로 환원되면 $g$ 는 **#P-난해**이고, $g$ 자신이 #P 에 들면 **#P-완전**이다.

해의 수를 그대로 보존하는 환원, 곧 모든 $x$ 에서 $f(x)=g(h(x))$ 인 다항시간 함수 $h$ 를 **해 보존 환원(parsimonious reduction)** 이라 한다.

# 성질

## #SAT 의 완전성

정리. #SAT 는 #P-완전이다[^1].

증명의 요지. Cook–Levin 정리의 환원은 검증기의 계산 표를 논리식으로 쓴다. 증거 $y$ 하나마다 계산 표가 하나로 정해지고, 보조 변수의 값도 표로 정해지므로 충족 할당은 증거와 일대일로 대응한다. 그래서 이 환원은 해 보존 환원이다. 3SAT 로의 환원과 Karp 의 고전적 환원 가운데 다수도 해 보존 환원이고, 그 문제들의 셈 판본이 모두 #P-완전이다.

## 판정이 쉬운 문제의 세기

정리(Valiant). 성분이 $0$ 과 $1$ 인 행렬의 영구식, 곧 이분 그래프의 완전 매칭의 수는 #P-완전이다[^1].

이 환원은 해 보존 환원이 아니다. 해 보존 환원이면 판정 문제인 완전 매칭의 존재가 NP-완전이 되어 $\mathrm P=\mathrm{NP}$ 가 따라 나온다. 같은 꼴로 판정은 다항시간인데 세기가 #P-완전인 문제로 DNF(disjunctive normal form) 논리식의 충족 할당의 수, 그래프의 신장 부분 숲의 수, 부분 순서의 선형 확장의 수가 있다[^2].

평면 그래프에서는 완전 매칭의 수가 다항시간에 계산된다. [Kasteleyn 정리](kasteleyn-theorem.md)가 평면 그래프의 간선에 부호를 붙여 영구식을 행렬식의 꼴로 바꾼다.

## 다항 계층과의 관계

정리(Toda). $\mathrm{PH}\subseteq\mathrm P^{\char35{}\mathrm P}$ 이다[^3].

다항 계층의 어느 층이든 #P 함수 하나를 신탁으로 쓰는 다항시간 기계로 판정된다. 증명은 [Valiant–Vazirani 정리](valiant-vazirani.md)로 해를 하나로 줄이는 무작위 환원을 거듭 쓰고, 그 무작위성을 해의 수의 홀짝으로 바꾼다.

## 근사 세기

- L. J. Stockmeyer 는 #P 함수의 값을 $1+\varepsilon$ 배 안으로 근사하는 것이 NP 신탁을 쓰는 무작위 다항시간 기계로 된다는 것을 보였다. 해시 함수로 해 집합을 무작위로 잘라 남는 해가 있는지를 NP 신탁에 묻는다[^4].
- 성분이 음이 아닌 행렬의 영구식은 M. Jerrum, A. Sinclair, E. Vigoda 의 [Markov 연쇄](markov-chains.md) 표집으로 다항시간 무작위 근사가 된다[^5]. 정확한 값은 #P-완전이지만 근사는 쉽다.

# 활용

- [영구식](permanent.md)은 이분 그래프의 완전 매칭의 수이고, 이 수의 계산이 #P-완전이라는 것이 판정과 세기가 갈리는 표준 예다.
- [부분순서](partial-orders.md)의 선형 확장의 수는 #P-완전이다. 그래서 선형 확장의 수를 쓰는 정렬 하한과 표본 추출은 근사 세기에 기댄다.
- [매듭 불변량](knot-invariants.md)의 Jones 다항식을 임의의 점에서 계산하는 것은 #P-난해다.
- [Littlewood–Richardson 규칙](littlewood-richardson.md)의 계수 계산은 #P-완전이다. 계수가 $0$ 이 아닌지의 판정은 다항시간에 된다.

[^1]: L. G. Valiant, "The complexity of computing the permanent", Theoretical Computer Science 8 (1979), 189–201. #P 의 정의와 #SAT 의 완전성은 L. G. Valiant, "The complexity of enumeration and reliability problems", SIAM Journal on Computing 8 (1979), 410–421.
[^2]: G. Brightwell, P. Winkler, "Counting linear extensions", Order 8 (1991), 225–242.
[^3]: S. Toda, "PP is as hard as the polynomial-time hierarchy", SIAM Journal on Computing 20(5) (1991), 865–877.
[^4]: L. J. Stockmeyer, "The complexity of approximate counting", Proceedings of the 15th ACM Symposium on Theory of Computing (1983), 118–126.
[^5]: M. Jerrum, A. Sinclair, E. Vigoda, "A polynomial-time approximation algorithm for the permanent of a matrix with nonnegative entries", Journal of the ACM 51 (2004), 671–697.

# 연관 문서

## 선수지식

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)

## 더 알아보기

- [영구식](permanent.md)
- [Toda 정리](toda-theorem.md)

#complexity #computation #combinatorics
