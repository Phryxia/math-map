# Hamilton 순환

# 개요

Hamilton 순환은 그래프의 모든 정점을 정확히 한 번씩 지나 출발점으로 돌아오는 순환이다. 그런 순환을 갖는 그래프를 가려내는 문제는 NP(nondeterministic polynomial time)-완전이므로, 쓰이는 결과는 차수가 충분히 클 때 순환이 있다고 보장하는 충분조건이다.

Dirac 정리와 Ore 정리가 그 표준이고, 둘 다 전체를 지나는 경로를 잡아 양 끝을 중간에서 돌려 붙이는 계산에서 나온다. Bondy–Chvátal 의 닫힘은 두 정리를 같은 조작의 특수한 경우로 묶는다.

# 직관

정점이 $n$ 개인 그래프에서 모든 정점을 한 번씩 지나는 순환을 찾으려 한다. 정점을 늘어놓는 순서가 $(n-1)!/2$ 가지라 전부 훑는 것은 $n$ 이 조금만 커져도 불가능하다. 차수처럼 국소적인 양으로 가려지는지 본다.

차수만으로는 갈리지 않는다. 정육면체의 꼭짓점과 모서리로 만든 그래프는 정점이 $8$ 개이고 모든 정점의 차수가 $3$ 이며 Hamilton 순환을 갖는다. Petersen 그래프도 연결이고 모든 정점의 차수가 $3$ 인데 Hamilton 순환이 없다.[^1] 두 그래프의 차수 분포가 같으므로 차수를 읽는 것만으로는 판정이 되지 않는다.

차수를 크게 잡으면 사정이 달라진다. 모든 정점을 한 번씩 지나는 경로 $v_1,v_2,\dots,v_n$ 이 있고 양 끝 $v_1$ 과 $v_n$ 이 인접하지 않다고 하자. 어떤 $i$ 에 대해 $v_1$ 이 $v_{i+1}$ 과 인접하고 $v_i$ 가 $v_n$ 과 인접하면

$$
v_1,v_2,\dots,v_i,\thinspace v_n,v_{n-1},\dots,v_{i+1},\thinspace v_1
$$

이 순환이 되어 모든 정점을 한 번씩 지난다. 경로의 뒤쪽을 뒤집어 붙인 것이다.

그런 $i$ 가 있는지는 개수로 판정된다. $v_1$ 이 $v_{i+1}$ 과 인접한 $i$ 의 개수가 $v_1$ 의 차수이고, $v_i$ 가 $v_n$ 과 인접한 $i$ 의 개수가 $v_n$ 의 차수다. 두 종류의 $i$ 는 모두 $1$ 과 $n-1$ 사이에 있으므로 자리가 $n-1$ 개뿐이다. 차수의 합이 $n$ 이상이면 두 종류가 같은 $i$ 에서 겹칠 수밖에 없고, 그 $i$ 에서 순환이 만들어진다.

# 정의

## Hamilton 경로와 Hamilton 순환

그래프 $G=(V,E)$ 에서 모든 정점을 정확히 한 번씩 지나는 경로를 **Hamilton 경로**라 하고, 모든 정점을 정확히 한 번씩 지나 출발점으로 돌아오는 순환을 **Hamilton 순환**이라 한다. Hamilton 순환을 갖는 그래프를 **Hamilton 그래프**라 한다.

$\vert V\vert=n$ 일 때 Hamilton 순환은 간선 $n$ 개를 쓰고, 그 간선만 남긴 부분그래프는 모든 정점의 차수가 $2$ 인 연결 그래프다.

## 닫힘

$n\ge 3$ 인 그래프 $G$ 에서 인접하지 않은 두 정점 $u,v$ 가 $d(u)+d(v)\ge n$ 을 만족하면 간선 $uv$ 를 더한다. 더 더할 간선이 없을 때까지 반복해 얻은 그래프를 $G$ 의 **닫힘**이라 하고 $\mathrm{cl}(G)$ 로 쓴다. 간선을 더하는 순서를 바꿔도 결과가 같다.

# 성질

## Ore 정리

**정리(Ore).** $n\ge 3$ 이고 인접하지 않은 임의의 두 정점 $u,v$ 에 대해 $d(u)+d(v)\ge n$ 이면 $G$ 는 Hamilton 그래프다.[^2]

Hamilton 순환이 없는 반례 가운데 간선이 가장 많은 것을 $G$ 라 하자. $G$ 는 완전그래프가 아니므로 인접하지 않은 $u,v$ 가 있고, 간선 $uv$ 를 더하면 최대성에 의해 Hamilton 순환이 생긴다. 그 순환에서 $uv$ 를 빼면 $u=v_1,\dots,v_n=v$ 인 Hamilton 경로가 남는다.

$$
S=\lbrace i : v_1v_{i+1}\in E\rbrace,\qquad T=\lbrace i : v_iv_n\in E\rbrace
$$

로 두면 $\vert S\vert=d(v_1)$ 이고 $\vert T\vert=d(v_n)$ 이다. $S$ 와 $T$ 는 모두 $\lbrace 1,\dots,n-1\rbrace$ 의 부분집합이다. 어떤 $i$ 가 $S\cap T$ 에 있으면 직관 절의 뒤집어 붙이기로 Hamilton 순환이 생기므로 $S\cap T=\varnothing$ 이고

$$
n\thinspace\le\thinspace d(v_1)+d(v_n)=\vert S\vert+\vert T\vert=\vert S\cup T\vert\thinspace\le\thinspace n-1
$$

이 되어 모순이다. ∎

## Dirac 정리

**따름정리(Dirac).** $n\ge 3$ 이고 모든 정점의 차수가 $n/2$ 이상이면 $G$ 는 Hamilton 그래프다.[^3]

인접하지 않은 두 정점의 차수 합이 $n$ 이상이므로 Ore 정리를 적용한다. ∎

차수 $n/2$ 는 낮출 수 없다. $n$ 이 홀수일 때 크기가 $\lfloor n/2\rfloor$ 와 $\lceil n/2\rceil$ 인 두 쪽을 갖는 완전이분그래프는 모든 정점의 차수가 $\lfloor n/2\rfloor$ 이상이지만, 순환이 두 쪽을 번갈아 지나야 하는데 쪽의 크기가 달라 Hamilton 순환이 없다.

## Bondy–Chvátal 정리

**정리.** $G$ 가 Hamilton 그래프인 것과 $\mathrm{cl}(G)$ 가 Hamilton 그래프인 것은 동치다.[^4]

한 방향은 $G\subseteq\mathrm{cl}(G)$ 에서 자동으로 따라온다. 반대 방향은 간선을 하나 더하는 단계마다 보이면 된다. $d(u)+d(v)\ge n$ 인 비인접 쌍 $u,v$ 에 대해 $G+uv$ 가 Hamilton 이고 $G$ 가 아니라면 그 순환이 $uv$ 를 쓰므로 $u$ 에서 $v$ 로 가는 Hamilton 경로가 $G$ 에 있고, Ore 정리 증명의 세기 논법을 그대로 적용하면 $G$ 에 순환이 있다. ∎

$\mathrm{cl}(G)$ 가 완전그래프이면 $G$ 는 Hamilton 그래프다. Ore 조건과 Dirac 조건은 닫힘이 한 번에 완전그래프가 되는 경우다.

## 판정 문제의 복잡도

그래프가 Hamilton 순환을 갖는지 판정하는 문제는 NP-완전이다.[^5] 3-SAT(satisfiability)에서의 환원이 표준이고, 유향 판본과 Hamilton 경로 판본도 같다. 따라서 위의 충분조건들처럼 차수나 다른 구조를 가정하지 않으면 다항 시간 판정 절차를 기대할 수 없다. [NP-완전성](np-completeness.md) 문서가 환원의 틀을 다룬다.

# 활용

- **외판원 문제.** 간선에 가중치가 있는 완전그래프에서 가중치 합이 최소인 Hamilton 순환을 찾는 문제다. 가중치가 삼각부등식을 만족하면 [근사 알고리즘](approximation-algorithms.md)의 Christofides 절차가 최적의 $3/2$ 배 안에 드는 순환을 준다.
- **Gray 코드.** 길이 $n$ 인 이진 문자열을 정점으로 하고 한 자리만 다른 두 문자열을 간선으로 이으면 $n$ 차원 하이퍼큐브가 된다. 이 그래프의 Hamilton 순환이 연속한 두 문자열이 한 자리만 다른 나열이고, 반사 이진 코드가 그 예다.
- **기사 여행.** 체스판의 칸을 정점으로 하고 기사의 한 수로 오갈 수 있는 두 칸을 간선으로 이은 그래프에서 Hamilton 경로를 찾는 문제다. $8\times 8$ 판에서는 순환도 존재한다.

[^1]: Petersen 그래프가 Hamilton 그래프가 아니라는 사실과 그 증명은 J. A. Bondy, U. S. R. Murty, *Graph Theory* (Springer Graduate Texts in Mathematics 244, 2008) 1 장 연습문제에 있다.

[^2]: O. Ore, *Note on Hamilton circuits*, Amer. Math. Monthly **67** (1960), 55.

[^3]: G. A. Dirac, *Some theorems on abstract graphs*, Proc. London Math. Soc. **2** (1952), 69–81.

[^4]: J. A. Bondy, V. Chvátal, *A method in graph theory*, Discrete Math. **15** (1976), 111–135.

[^5]: R. M. Karp, *Reducibility among combinatorial problems*, in *Complexity of Computer Computations*, Plenum (1972), 85–103.

# 연관 문서

## 선수지식

- [그래프](graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #combinatorics #algorithms #complexity
