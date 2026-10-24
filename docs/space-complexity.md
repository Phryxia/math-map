# 공간 복잡도

# 개요

**공간 복잡도(space complexity)** 는 Turing 기계가 문제를 판정하는 동안 쓰는 작업 테이프 칸의 수를 입력 길이의 함수로 잰 비용이다. [P 대 NP 문제](p-np.md)는 계산 단계의 수, 곧 시간을 재고, 공간 복잡도는 같은 계산이 동시에 기억해야 하는 양을 잰다. 로그 공간(logarithmic space)의 L 과 NL(nondeterministic logarithmic space), 다항 공간의 PSPACE(polynomial space)가 주된 부류다.

시간과 달리 공간은 다시 쓸 수 있다. 그래서 비결정적 공간 $s$ 의 계산을 결정적 공간 $s^2$ 으로 흉내 낼 수 있다(Savitch 정리). [NP-완전성](np-completeness.md)의 환원과 완전성을 공간 부류에 옮기면 한정 불 논리식의 참 판정이 PSPACE 의 완전 문제가 된다.

# 직관

정점이 $n$ 개인 방향 [그래프](graphs.md)와 두 정점 $s$, $t$ 가 주어졌을 때 $s$ 에서 $t$ 로 가는 길이 있는지 묻는다. [그래프 탐색](graph-search.md)은 방문한 정점에 표시를 해 두고 표시가 없는 이웃으로 나아간다. 표시는 정점마다 한 비트이므로 메모리가 $n$ 비트 든다.

표시를 하지 않으면 같은 정점을 거듭 방문해 끝나지 않을 수 있다. 그래서 질문을 바꾼다. "$s$ 에서 $t$ 로 $2^k$ 걸음 이내에 갈 수 있는가" 는 "어떤 정점 $m$ 이 있어서 $s$ 에서 $m$ 으로, $m$ 에서 $t$ 로 각각 $2^{k-1}$ 걸음 이내에 갈 수 있는가" 와 같다. $m$ 을 $n$ 개 모두 차례로 넣어 보고, 두 물음은 같은 방법으로 반씩 줄여 푼다.

재귀는 $k=\lceil\log_2 n\rceil$ 에서 시작해 $k=0$ 에서 끝나므로 깊이가 $\log_2 n$ 정도다. 각 깊이에서 기억할 것은 정점 셋($s$, $t$, $m$)의 번호뿐이고, 번호 하나는 $\log_2 n$ 비트다. 첫 물음을 다 푼 뒤 그 메모리를 둘째 물음에 다시 쓰므로, 전체 메모리는 깊이와 한 깊이의 몫을 곱한 $O(\log^2 n)$ 비트다.

이 방법은 $m$ 을 고를 때마다 두 갈래로 다시 들어가므로 걸리는 시간이 $n^{O(\log n)}$ 이다. 시간은 탐색보다 훨씬 길지만 메모리는 $n$ 비트에서 $O(\log^2 n)$ 비트로 줄었다. 계산이 쓰는 메모리를 이렇게 따로 재는 것이 공간 복잡도다.

# 정의

## 공간 제한 기계

기계는 읽기만 하는 입력 테이프와 읽고 쓰는 작업 테이프를 갖는 [계산 가능성](computability.md)의 Turing 기계다. 입력 테이프를 세지 않으므로 입력보다 작은 공간도 뜻을 갖는다. 기계 $M$ 이 길이 $n$ 인 모든 입력에서 멈추고 작업 테이프 칸을 많아야 $s(n)$ 개 방문하면 $M$ 은 공간 $s(n)$ 에서 돈다고 한다. 비결정적 기계는 모든 계산 갈래가 이 제한을 지켜야 한다.

$$
\mathrm{SPACE}(s(n))=\lbrace L : L\ \text{을 공간}\ O(s(n))\ \text{에서 판정하는 결정적 기계가 있다}\rbrace
$$

이고, 비결정적 기계로 바꾼 것이 $\mathrm{NSPACE}(s(n))$ 다.

## 주된 부류

| 부류 | 정의 |
|---|---|
| L | $\mathrm{SPACE}(\log n)$ |
| NL | $\mathrm{NSPACE}(\log n)$ |
| PSPACE | $\bigcup_{k\ge 1}\mathrm{SPACE}(n^k)$ |
| NPSPACE | $\bigcup_{k\ge 1}\mathrm{NSPACE}(n^k)$ |

## 구성

기계의 **구성(configuration)** 은 상태, 두 헤드의 위치, 작업 테이프의 내용을 묶은 것이다. 공간 $s(n)\ge\log n$ 에서 도는 기계의 구성은 많아야 $2^{O(s(n))}$ 개다. 상태가 상수 개, 입력 헤드 위치가 $n$ 가지, 작업 헤드 위치가 $s(n)$ 가지, 테이프 내용이 $2^{O(s(n))}$ 가지이고, 이를 곱한 수가 $2^{O(s(n))}$ 이다. 구성을 정점으로, 한 걸음 전이를 간선으로 놓은 방향 그래프를 **구성 그래프(configuration graph)** 라 한다. 기계가 입력을 받아들이는 것은 이 그래프에서 시작 구성으로부터 받아들이는 구성에 도달할 수 있는 것과 동치다.

## 로그 공간 환원과 완전성

언어 $A$ 의 입력을 로그 공간에서 계산되는 함수 $f$ 로 바꾸어 $w\in A\iff f(w)\in B$ 이면 $A\le_{\log}B$ 로 쓴다. 부류 $\mathcal C$ 의 모든 언어가 $B$ 로 환원되고 $B\in\mathcal C$ 이면 $B$ 는 $\mathcal C$-완전이다. 로그 공간에서 도는 기계는 구성이 다항식 개이므로 멈추려면 다항시간에 멈추고, 따라서 로그 공간 환원은 다항시간 환원이기도 하다.

# 성질

## 시간과의 포함 관계

한 걸음에 작업 테이프 칸을 하나만 새로 방문하므로 $\mathrm{TIME}(t)\subseteq\mathrm{SPACE}(t)$ 다. 거꾸로 $\mathrm{NSPACE}(s)$ 의 기계는 구성 그래프의 도달 가능성으로 판정되고, 그래프 탐색이 정점 수 $2^{O(s)}$ 의 다항 시간에 끝나므로 $\mathrm{NSPACE}(s)\subseteq\mathrm{TIME}(2^{O(s)})$ 다. 두 포함을 합치면

$$
\mathrm L\subseteq\mathrm{NL}\subseteq\mathrm P\subseteq\mathrm{NP}\subseteq\mathrm{PSPACE}\subseteq\mathrm{EXPTIME}
$$

이다. NP 의 언어는 증명서 후보를 하나씩 같은 공간에 써 가며 검증기를 돌려 PSPACE 에서 판정된다.

## Savitch 정리

정리(Savitch's theorem). $s(n)\ge\log n$ 이면 $\mathrm{NSPACE}(s)\subseteq\mathrm{SPACE}(s^2)$ 이다[^1]. 특히 $\mathrm{PSPACE}=\mathrm{NPSPACE}$ 이고 $\mathrm{NL}\subseteq\mathrm{SPACE}(\log^2 n)$ 이다.

증명의 요지. 직관 절의 반 나누기를 구성 그래프에 적용한다. 구성 하나는 $O(s)$ 비트이고, 구성이 $2^{O(s)}$ 개이므로 재귀 깊이는 $O(s)$ 다. 깊이마다 구성 셋을 기억하므로 공간이 $O(s^2)$ 이다.

```javascript
// c1 에서 c2 로 2^k 걸음 이내에 갈 수 있는가
function reach(c1, c2, k) {
  if (k === 0) return c1 === c2 || step(c1, c2);
  for (const m of allConfigurations()) {
    if (reach(c1, m, k - 1) && reach(m, c2, k - 1)) return true;
  }
  return false;
}
```

`allConfigurations` 는 길이 $O(s)$ 의 비트열을 사전순으로 하나씩 만들 뿐 목록을 저장하지 않는다. 결정적 공간과 비결정적 공간의 간격이 제곱 이하로 묶이는 것과 달리, 시간에서 $\mathrm P$ 와 $\mathrm{NP}$ 의 간격은 알려져 있지 않다.

## 도달 가능성의 NL-완전성

방향 그래프와 두 정점 $s$, $t$ 에 대해 $s$ 에서 $t$ 로 가는 길이 있는지 묻는 문제는 NL-완전이다. 지금 있는 정점 하나와 걸음 수만 기억하며 다음 정점을 비결정적으로 고르면 로그 공간에서 판정되므로 NL 에 든다. NL 에 드는 언어는 모두 입력마다 구성 그래프를 로그 공간에서 써 내는 환원으로 이 문제에 환원된다.

## Immerman–Szelepcsényi 정리

정리(Immerman–Szelepcsényi theorem). $s(n)\ge\log n$ 이면 $\mathrm{NSPACE}(s)=\mathrm{coNSPACE}(s)$ 이다. 특히 $\mathrm{NL}=\mathrm{coNL}$ 이다[^2][^3].

증명의 요지. $t$ 에 도달할 수 없다는 것을 비결정적 로그 공간에서 확인하면 된다. $c_i$ 를 $s$ 에서 $i$ 걸음 이내에 닿는 정점의 수라 하면, $c_i$ 를 알 때 $c_{i+1}$ 을 센다. 정점 $v$ 마다 $i$ 걸음 이내에 닿는 정점을 $c_i$ 개 모두 비결정적으로 다시 찾으면서 그 가운데 $v$ 이거나 $v$ 로 간선이 있는 것이 있는지 본다. 찾은 개수가 $c_i$ 에 못 미치는 갈래는 거부한다. 마지막에 $c_n$ 개의 닿는 정점을 다시 모두 찾아 그 가운데 $t$ 가 없으면 받아들인다. 이 귀납적 셈(inductive counting)은 카운터와 정점 번호 몇 개만 기억한다.

## 공간 계층 정리

정리(space hierarchy theorem). $s$ 가 공간 구성 가능(space-constructible)하고 $s'(n)=o(s(n))$ 이면 $\mathrm{SPACE}(s')\subsetneq\mathrm{SPACE}(s)$ 이다[^4]. 공간 구성 가능하다는 것은 $1^n$ 에서 $s(n)$ 을 공간 $O(s(n))$ 에 계산할 수 있다는 뜻이다. 따라서 $\mathrm L\subsetneq\mathrm{PSPACE}$ 이고, Savitch 정리와 합치면 $\mathrm{NL}\subsetneq\mathrm{PSPACE}$ 이다.

증명의 요지. [정지 문제](halting-problem.md)의 대각선 논법을 공간에 맞춘다. 입력 $\langle M\rangle 0^j$ 에서 기계 $M$ 을 공간 $s(n)$ 안에서 흉내 내고, $M$ 이 그 안에서 받아들이면 거부하고 거부하면 받아들인다. 공간 $s'$ 에서 도는 $M$ 은 $n$ 이 클 때 흉내가 공간 $s(n)$ 안에 끝나므로, 이 언어를 판정하지 못한다.

## 한정 불 논리식의 PSPACE-완전성

정리. 모든 변수가 한정된 **한정 불 논리식(quantified Boolean formula)** $Q_1x_1\cdots Q_nx_n\ \varphi$ 의 참 판정 문제 TQBF(true quantified Boolean formula)는 PSPACE-완전이다. L. J. Stockmeyer 와 A. R. Meyer 가 증명했다[^5].

증명의 요지. 바깥 한정사부터 $x_1=0$ 과 $x_1=1$ 을 차례로 넣고 같은 공간에서 나머지를 재귀로 판정하면, 깊이마다 비트 몇 개만 기억하므로 PSPACE 에 든다. 완전성은 Savitch 정리의 재귀를 논리식으로 쓴다. 구성 $a$, $b$ 를 변수 묶음으로 두고

$$
\varphi_k(a,b)=\exists m\thinspace\forall(c,d)\in\lbrace(a,m),(m,b)\rbrace\ \ \varphi_{k-1}(c,d)
$$

로 정의한다. 전칭 한정사가 두 물음을 하나의 $\varphi_{k-1}$ 로 묶으므로 길이가 단계마다 $O(s)$ 씩만 늘고, $\varphi_{O(s)}$ 의 길이는 $O(s^2)$ 이다. $\varphi_0$ 은 Cook–Levin 정리의 부호화로 한 걸음 전이를 쓴 논리식이다. 한정사의 교대 횟수를 $k$ 로 고정한 것이 [다항 계층](polynomial-hierarchy.md)의 $\Sigma_k\mathrm{SAT}$ 이므로 $\mathrm{PH}\subseteq\mathrm{PSPACE}$ 다.

# 활용

- [대화형 증명](interactive-proofs.md)의 Shamir 정리는 무작위 검증자와 대화로 검증되는 언어가 정확히 PSPACE 라고 한다. 증명은 TQBF 를 산술화해 합 검사 프로토콜로 검증한다.
- [다항 계층](polynomial-hierarchy.md)의 각 층은 PSPACE 에 든다. 두 부류가 같으면 TQBF 가 어느 유한한 층에 들어 계층이 붕괴한다.
- [유한 오토마타](finite-automata.md)에서 비결정적 오토마타 두 개가 같은 언어를 받는지 판정하는 문제는 PSPACE-완전이다.
- [직관주의 논리의 Kripke 의미론](kripke-semantics.md)으로 증명되는 직관주의 명제논리의 정리 판정은 PSPACE-완전이다.
- [무작위 복잡도 부류](randomized-complexity-classes.md)의 BPP(bounded-error probabilistic polynomial time)와 [양자 회로](quantum-circuits.md)의 BQP(bounded-error quantum polynomial time)는 무작위 비트열이나 계산 경로를 하나씩 같은 공간에서 돌려 더하는 방법으로 PSPACE 에 든다.
- 두 사람이 번갈아 수를 두는 유한 게임에서 선수가 이기는 전략이 있는지는 "내 수가 있어서, 상대의 모든 수에 대해, 내 수가 있어서…" 꼴의 한정 불 논리식이다. 일반화한 지리 게임(generalized geography) 같은 많은 게임의 판정이 이 대응으로 PSPACE-완전이다.

[^1]: W. J. Savitch, "Relationships between nondeterministic and deterministic tape complexities", Journal of Computer and System Sciences 4 (1970), 177–192.
[^2]: N. Immerman, "Nondeterministic space is closed under complementation", SIAM Journal on Computing 17 (1988), 935–938.
[^3]: R. Szelepcsényi, "The method of forced enumeration for nondeterministic automata", Acta Informatica 26 (1988), 279–284.
[^4]: R. E. Stearns, J. Hartmanis, P. M. Lewis II, "Hierarchies of memory limited computations", 6th Annual Symposium on Switching Circuit Theory and Logical Design (1965), 179–190.
[^5]: L. J. Stockmeyer, A. R. Meyer, "Word problems requiring exponential time", Proceedings of the 5th ACM Symposium on Theory of Computing (1973), 1–9.

# 연관 문서

## 선수지식

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)

## 더 알아보기

- [대화형 증명](interactive-proofs.md)
- [교대 Turing 기계](alternating-turing-machines.md)
- [NC 계층](nc-hierarchy.md)
- [Reingold 정리](reingold-theorem.md)

#complexity #computation #logic
