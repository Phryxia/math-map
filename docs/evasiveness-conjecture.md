# Aanderaa–Karp–Rosenberg 추측

# 개요

**Aanderaa–Karp–Rosenberg 추측(Aanderaa–Karp–Rosenberg conjecture)** 은 그래프가 어떤 성질을 갖는지 간선의 유무를 하나씩 물어 판정할 때, 그 성질이 간선을 더해도 유지되고 자명하지 않으면 최악의 경우 모든 쌍을 다 물어야 한다는 추측이다. 그래프에 간선이 하나라도 있는지 판정할 때 답하는 쪽이 계속 "없다" 고 답하면, 마지막 한 쌍을 묻기 전에는 간선이 없는 그래프와 마지막 쌍만 간선인 그래프가 구별되지 않는다. 이 추측은 간선을 더해도 깨지지 않는 성질이면 이런 답하기 전략이 언제나 있는지를 묻고, 부분 결과의 증명들은 성질이 꼭짓점 번호를 바꿔도 변하지 않는다는 대칭으로 답하기 전략의 존재를 보인다.

# 직관

꼭짓점이 $n$ 개인 [그래프](graphs.md)에 간선이 하나라도 있는지를, 꼭짓점 쌍마다 간선이 있는지 하나씩 물어 판정한다. 묻는 쪽이 어떤 순서로 묻든 답하는 쪽은 "없다" 고 답한다. 마지막 한 쌍을 묻기 전에는 그래프가 간선이 없을 수도 있고 마지막 쌍 하나만 간선일 수도 있으므로 판정이 나지 않는다. 그래서 $\binom n2$ 번을 모두 물어야 한다. 연결성도 비슷한 답하기 전략으로 모든 쌍을 물어야 함이 증명된다.

반면 단조가 아닌 성질 가운데에는 $O(n)$ 번만 물어도 판정되는 것이 있다. 차수 $1$ 인 꼭짓점이 차수 $2$ 인 꼭짓점에 이어지고, 그 꼭짓점이 차수 $n-2$ 인 꼭짓점에 이어진 꼴을 포함하는 "전갈 그래프" 성질이 그 예다[^3]. 간선이 하나라도 있다는 성질과 연결성은 간선을 더해도 깨지지 않고, 전갈 그래프 성질은 간선을 더하면 깨질 수 있다. 간선을 더해도 깨지지 않는 성질이면 언제나 모든 쌍을 물어야 하는지가 이 추측의 물음이다.

# 정의

- 변수 $N$ 개의 불 함수 $f$ 의 **결정 나무 복잡도(decision tree complexity)** $D(f)$ 는 변수를 하나씩 물어 $f$ 의 값을 정하는 결정적 알고리즘이 최악의 경우에 묻는 변수 수의 최솟값이다. $D(f)=N$ 이면 $f$ 를 **회피적(evasive)** 이라 한다. 직관의 "간선이 하나라도 있다" 는 변수 $\binom n2$ 개의 논리합이고, 답하는 쪽이 계속 "없다" 고 답하면 모든 변수를 물어야 하므로 회피적이다. 함수 $f(x_1,x_2,x_3)=x_1$ 은 $x_1$ 하나만 물으면 값이 정해지므로 $D(f)=1$ 이고 회피적이 아니다.
- 꼭짓점 집합 $\lbrace 1,\dots,n\rbrace$ 위의 **그래프 성질(graph property)** 은 $\binom n2$ 개의 간선 변수의 불 함수 가운데 꼭짓점의 치환으로 그래프를 바꾸어도 값이 같은 것이다. $n=3$ 에서 "간선이 하나라도 있다" 는 꼭짓점 번호를 바꿔도 값이 같으므로 그래프 성질이다. "간선 $\lbrace 1,2\rbrace$ 가 있다" 는 꼭짓점 $2$ 와 $3$ 을 바꾸면 간선 $\lbrace 1,2\rbrace$ 만 있는 그래프에서 값이 $1$ 에서 $0$ 으로 바뀌므로 그래프 성질이 아니다.
- 그래프 성질이 **단조(monotone)** 라는 것은 간선을 더해도 값이 $1$ 에서 $0$ 으로 바뀌지 않는 것이다. 빈 그래프에서 $0$ 이고 완전 그래프에서 $1$ 이면 **자명하지 않다(nontrivial)** 고 한다. "간선이 하나라도 있다" 와 연결성은 자명하지 않은 단조 성질이다. "간선이 정확히 하나 있다" 는 간선 하나인 그래프에 간선을 더하면 값이 $0$ 이 되므로 단조가 아니다.

Aanderaa–Karp–Rosenberg 추측은 자명하지 않은 모든 단조 그래프 성질 $P$ 에 대해 $D(P)=\binom n2$ 라는 진술이다. 질의 수가 $\Omega(n^2)$ 이라는 약한 판본은 Aanderaa–Rosenberg 추측(Aanderaa–Rosenberg conjecture)이라 불렸고 R. Rivest 와 J. Vuillemin 이 질의 수가 $n^2/16$ 이상임을 보여 증명했다[^1].

# 성질

## 짝홀 균형

보조정리. $f$ 가 회피적이 아니면 $\displaystyle\sum_{x:\thinspace f(x)=1}(-1)^{\lvert x\rvert}=0$ 이다. 여기서 $\lvert x\rvert$ 는 $x$ 의 $1$ 의 개수다.

증명의 요지. 깊이가 $N$ 보다 작은 결정 나무가 $f$ 를 계산한다. 출력이 $1$ 인 잎마다 그 경로에서 묻지 않은 변수가 하나 이상 있으므로, 그 잎에 도달하는 입력은 묻지 않은 변수를 자유롭게 바꾼 부분 입방체이고 짝수 개와 홀수 개가 같다.

논리합 $x_1\lor x_2\lor x_3$ 에서는 $1$ 이 하나인 입력 셋, 둘인 입력 셋, 셋인 입력 하나가 값 $1$ 을 가지므로 합이 $-3+3-1=-1\ne 0$ 이므로, 보조정리의 대우로 이 함수는 회피적이다.

## Rivest–Vuillemin 정리

정리(Rivest–Vuillemin). $N=p^k$ 이 소수의 거듭제곱이고 $f$ 가 변수에 추이적으로 작용하는 치환군 $G$ 의 작용에 대해 불변이며 $f(0,\dots,0)\ne f(1,\dots,1)$ 이면 $f$ 는 회피적이다[^1].

증명의 요지. [Sylow 정리](sylow-theorems.md)로 존재하는 $G$ 의 Sylow $p$-부분군 $H$ 도 $p^k$ 개의 변수에 추이적으로 작용한다. [군 작용](group-actions.md)에서 입력 $x$ 의 $H$-궤도의 크기는 $p$ 의 거듭제곱이고, 궤도가 한 점이면 $x$ 는 모든 변수에서 같은 값을 가지므로 $0\cdots 0$ 이나 $1\cdots 1$ 이다. 같은 궤도의 입력은 $1$ 의 개수가 같고 $f$ 의 값도 같다. 따라서 짝홀 균형의 합은 $p$ 를 법으로 $0\cdots 0$ 과 $1\cdots 1$ 가운데 $f$ 가 $1$ 인 하나의 항 $\pm 1$ 과 합동이고, $0$ 이 될 수 없다.

그래프 성질의 변수 수 $\binom n2$ 는 대개 소수의 거듭제곱이 아니다. Rivest–Vuillemin 은 일부 꼭짓점과 간선을 고정해 크기가 $2$ 의 거듭제곱인 부분 문제로 줄이고 이 정리를 적용해 $n^2/16$ 의 하한을 얻었다.

## Kahn–Saks–Sturtevant 정리

정리(Kahn–Saks–Sturtevant). $n$ 이 소수의 거듭제곱이면 자명하지 않은 모든 단조 그래프 성질은 회피적이다. J. Kahn, M. Saks, D. Sturtevant 가 1984 년에 증명했다[^2]. 모든 $n$ 에서 $D(P)\ge n^2/4-o(n^2)$ 이다.

증명의 요지. 성질을 갖지 않는 그래프들의 간선 집합은 부분집합에 대해 닫혀 있으므로 단체 복합체(simplicial complex)를 이룬다. 회피적이 아니면 이 복합체가 축약 가능(collapsible)하여 [Euler 지표](euler-characteristic.md)가 $1$ 이다. $n=q$ 가 소수의 거듭제곱이면 유한체 $\mathbb F_q$ 위의 아핀 사상 $x\mapsto ax+b$ 의 군이 꼭짓점에 작용하고, [Oliver 고정점 정리](oliver-fixed-point-theorem.md)로 고정된 부분복합체의 Euler 지표도 $1$ 이어서 비어 있지 않다. 이 군은 간선에 추이적이므로 고정된 면은 완전 그래프뿐이고, 완전 그래프는 성질을 가지므로 모순이다.

## 무작위 판본

A. C.-C. Yao 는 이분그래프의 자명하지 않은 단조 성질이 회피적임을 증명했다[^4]. 무작위 결정 나무에 대해서는 자명하지 않은 단조 그래프 성질의 기대 질의 수가 $\Omega(n^2)$ 이라는 것이 Yao 추측(Yao's conjecture)이다. 이 판본의 하한 증명은 [Yao 최소최대 원리](yao-minimax-principle.md)로 입력 분포를 정해 결정적 나무의 평균 질의 수를 센다.

# 활용

- 대칭이 있는 불 함수의 결정 나무 하한. 짝홀 균형 보조정리와 Sylow 부분군의 궤도 세기는 변수에 추이적으로 작용하는 군이 있는 함수에 그대로 쓰인다.
- 위상 조합론. Kahn–Saks–Sturtevant 의 증명은 결정 나무를 단체 복합체의 축약으로 바꾸고 군 작용의 고정점 정리를 쓴다.

[^1]: R. L. Rivest, J. Vuillemin, "On recognizing graph properties from adjacency matrices", Theoretical Computer Science 3 (1976), 371–384.
[^2]: J. Kahn, M. Saks, D. Sturtevant, "A topological approach to evasiveness", Combinatorica 4 (1984), 297–306.
[^3]: M. R. Best, P. van Emde Boas, H. W. Lenstra, "A sharpened version of the Aanderaa–Rosenberg conjecture", Report ZW 30/74, Mathematisch Centrum Amsterdam (1974).
[^4]: A. C.-C. Yao, "Monotone bipartite graph properties are evasive", SIAM Journal on Computing 17 (1988), 517–520.

# 연관 문서

## 선수지식

- [그래프](graphs.md)
- [Sylow 정리](sylow-theorems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #graph_theory #group_theory #combinatorics
