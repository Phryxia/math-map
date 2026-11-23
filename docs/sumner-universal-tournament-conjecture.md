# Sumner 보편 토너먼트 추측

# 개요

**Sumner 보편 토너먼트 추측(Sumner's universal tournament conjecture)** 은 팀이 $2n-2$ 개인 리그의 경기 결과 안에서, 정점 $n$ 개의 나무에 화살표 방향을 정한 모든 꼴을 찾을 수 있다는 추측이다. 네 팀이 서로 한 번씩 겨룬 리그에서 "두 팀을 이긴 팀", "두 팀에게 진 팀", "한 팀을 이기고 그 팀이 다른 팀을 이긴 줄" 은 경기 결과가 어떻든 늘 찾아진다. 세 팀만 있는 리그에서는 서로 물고 물려 모두 한 번씩 이기면 두 팀을 이긴 팀이 없다.

추측은 팀 수를 $2n-2$ 로 늘리면 정점 $n$ 개의 어느 방향 나무든 경기 결과 안에 들어 있다고 말한다. 큰 $n$ 에서는 증명되었다.

# 직관

정점 $3$ 개의 나무에 방향을 정하는 방법은 세 가지다. 가운데 정점이 양 끝을 이기는 꼴, 가운데 정점이 양 끝에게 지는 꼴, $x\to y\to z$ 로 이어지는 꼴이다.

[토너먼트](tournaments.md)의 네 팀 리그에서 승수의 합은 경기 수 $6$ 이다. 평균 승수가 $1.5$ 이므로 두 팀 이상을 이긴 팀이 있고, 그 팀이 첫째 꼴의 가운데다. 같은 셈으로 두 팀 이상에게 진 팀이 있고, 그 팀이 둘째 꼴의 가운데다. 셋째 꼴은 모든 토너먼트에 있는 Hamilton 경로의 앞 세 팀이다.

세 팀 리그 $a\to b\to c\to a$ 에서는 모든 팀이 한 번만 이기므로 첫째 꼴이 없다.

정점 $n$ 개에서도 같은 일이 생긴다. 가운데 정점이 나머지 $n-1$ 개를 모두 이기는 꼴을 찾으려면 $n-1$ 팀 이상을 이긴 팀이 있어야 한다. 팀이 $2n-3$ 개이고 모든 팀이 $n-2$ 번씩 이기는 리그에는 그런 팀이 없다. 팀이 $2n-2$ 개이면 평균 승수가 $n-\tfrac32$ 라서 그런 팀이 반드시 있다.

# 정의

[그래프](graphs.md)로서 나무인 그래프의 간선마다 방향을 하나 정한 것을 **방향 나무(oriented tree)** 라 한다. 직관 절의 세 꼴이 정점 $3$ 개의 방향 나무 전부다.

토너먼트 $T$ 의 정점으로 가는 단사함수 $f$ 가 방향 나무 $A$ 의 간선 $x\to y$ 마다 $T$ 에서 $f(x)\to f(y)$ 이면 $T$ 가 $A$ 를 **포함한다(contains)** 고 한다. 정점 $m$ 개의 모든 토너먼트가 포함하는 방향 그래프를 **$m$-회피 불가능(unavoidable)** 하다고 한다. 직관 절에서 정점 $3$ 개의 세 방향 나무는 모두 $4$-회피 불가능하고, 첫째 꼴은 $3$-회피 불가능하지 않다.

**Sumner 보편 토너먼트 추측** 은 $n\ge 2$ 일 때 정점 $n$ 개의 모든 방향 나무가 $(2n-2)$-회피 불가능하다는 진술이다[^1].

# 성질

## 2n-2 의 최적성

정점이 $2n-3$ 개이고 모든 정점의 점수가 $n-2$ 인 토너먼트가 있다. 정점을 $0,1,\dots,2n-4$ 로 놓고 $i$ 가 $i+1,\dots,i+n-2$ 를 $2n-3$ 으로 나눈 나머지에서 이기게 하면 된다. 이 토너먼트는 가운데 정점이 나머지를 모두 이기는 정점 $n$ 개의 방향 나무를 포함하지 않으므로 추측의 $2n-2$ 는 줄일 수 없다.

## 일차 상한

정점 $n$ 개의 모든 방향 나무가 $cn$-회피 불가능한 상수 $c$ 가 있다. Häggkvist 와 Thomason 이 처음으로 이런 일차 상한을 증명했다[^2]. El Sahili 는 [Seymour 두 번째 이웃 추측](seymour-second-neighborhood-conjecture.md) 문서의 중앙 순서를 써서 $3n-3$ 을 얻었다[^3]. Dross 와 Havet 는 상한을 $\tfrac{21}{8}n-\tfrac{47}{16}$ 으로 줄였다[^4].

## 큰 n 에서의 증명

Kühn, Mycroft, Osthus 는 충분히 큰 모든 $n$ 에서 추측이 성립함을 증명했다[^5].

## 방향 경로

잎이 둘인 방향 나무가 방향 경로다. Havet 와 Thomassé 는 정점 $n$ 개의 토너먼트가 정점 $n$ 개의 모든 방향 경로를 포함함을 증명했다[^6]. 이 진술이 [Rosenfeld 추측](rosenfeld-conjecture.md)이다. 예외는 세 토너먼트이고, 셋 다 간선의 방향이 번갈아 바뀌는 경로를 포함하지 않는다. 직관 절의 세 팀 리그가 그 가운데 하나다. 정점 $3$ 개에서 방향이 번갈아 바뀌는 경로는 가운데 정점이 양 끝에게 지는 꼴이고, 세 팀 리그에서는 모든 팀이 한 번만 진다.

# 활용

- 방향 그래프의 색칠 수. Burr 는 색칠 수가 $2n-2$ 이상인 모든 방향 그래프가 정점 $n$ 개의 모든 방향 나무를 포함한다고 추측했다[^7]. 토너먼트의 색칠 수는 정점 수와 같으므로 Sumner 추측은 이 추측의 특수 사례다. [그래프 색칠](graph-coloring.md)의 색칠 수를 방향 그래프의 부분구조와 잇는 문제다.
- 방향 그래프의 Ramsey 수. 어느 토너먼트에도 반드시 들어 있는 부분구조를 찾는 문제는 [Ramsey 이론](ramsey-theory.md)의 방향 판본이다. 추이적 토너먼트 대신 방향 나무를 찾을 때 필요한 정점 수가 이 추측의 대상이다.

[^1]: D. P. Sumner 가 1971 년에 제기했다. N. C. Wormald, "Subtrees of large tournaments", *Combinatorial Mathematics X*, Lecture Notes in Mathematics 1036 (1983), 417–419 에 실려 있다.
[^2]: R. Häggkvist, A. Thomason, "Trees in tournaments", *Combinatorica* 11 (1991), 123–130.
[^3]: A. El Sahili, "Trees in tournaments", *Journal of Combinatorial Theory, Series B* 92 (2004), 183–187.
[^4]: F. Dross, F. Havet, "On the unavoidability of oriented trees", *Journal of Combinatorial Theory, Series B* 151 (2021), 83–110.
[^5]: D. Kühn, R. Mycroft, D. Osthus, "A proof of Sumner's universal tournament conjecture for large tournaments", *Proceedings of the London Mathematical Society* 102 (2011), 731–766.
[^6]: F. Havet, S. Thomassé, "Oriented Hamiltonian paths in tournaments: a proof of Rosenfeld's conjecture", *Journal of Combinatorial Theory, Series B* 78 (2000), 243–273.
[^7]: S. A. Burr, "Subtrees of directed graphs and hypergraphs", *Congressus Numerantium* 28 (1980), 227–239.

# 연관 문서

## 선수지식

- [토너먼트](tournaments.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #combinatorics
