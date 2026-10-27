# Ruzsa–Szemerédi 문제

# 개요

**Ruzsa–Szemerédi 문제(Ruzsa–Szemerédi problem)** 는 모든 간선이 정확히 하나의 삼각형에 들어가는 그래프가 간선을 얼마나 많이 가질 수 있는지 묻는 문제다. 삼각형 $k$ 개를 정점이 겹치지 않게 놓으면 정점 $3k$ 개에 간선 $3k$ 개이고, 간선을 정점 수의 제곱에 가깝게 늘리려면 한 정점이 많은 삼각형에 들어가면서도 다른 삼각형이 생기지 않아야 한다. Ruzsa 와 Szemerédi 는 간선 수가 $n^2$ 보다 느리게 자란다는 것을 삼각형 제거 보조정리로, $n^{2-\varepsilon}$ 보다는 많을 수 있다는 것을 등차수열이 없는 큰 정수 집합으로 보였다.

# 직관

Ruzsa–Szemerédi 문제는 모든 간선이 정확히 하나의 삼각형에 들어가는 $n$ 정점 그래프가 간선을 얼마나 많이 가질 수 있는지 묻는 문제다. I. Z. Ruzsa 와 E. Szemerédi 는 1978 년에 간선 수가 $o(n^2)$ 이고 $n^{2-\varepsilon}$ 보다는 많을 수 있음을 증명했다[^1].

상한은 [Szemerédi 정규성 보조정리](szemeredi-regularity-lemma.md)의 삼각형 제거 보조정리에서 나오고, 하한은 [등차수열의 Roth 정리](roth-theorem-arithmetic-progressions.md)의 Behrend 구성에서 나온다. 상한에서 Roth 정리가 따름정리로 나오므로, 이 문제는 그래프의 삼각형과 정수의 등차수열을 서로 옮기는 자리다.

간선마다 삼각형이 하나뿐인 그래프를 만들려 한다. 삼각형 $k$ 개를 정점이 겹치지 않게 놓으면 정점 $3k$ 개에 간선 $3k$ 개라서 간선이 정점 수에 비례한다. 간선을 $n^2$ 에 가깝게 늘리려면 한 정점이 많은 삼각형에 들어가야 하고, 그러면 서로 다른 삼각형의 간선이 새 삼각형을 만들기 쉽다.

정수로 만들면 이 충돌을 셀 수 있다. 정점을 세 벌의 정수로 두고 삼각형을 $(x,\thinspace x+b,\thinspace x+2b)$ 꼴로 심는다. 심지 않은 삼각형이 생기면 세 변의 차가 $b_1+b_2=2b_3$ 을 만족하고, 이것은 $b_1,b_3,b_2$ 가 등차수열을 이룬다는 뜻이다. 그래서 $b$ 를 등차수열이 없는 집합에서 고르면 심은 삼각형만 남고, 간선 수는 그 집합의 크기로 정해진다.

# 정의

그래프 $G$ 의 모든 간선이 정확히 하나의 삼각형에 들어갈 때 $G$ 를 **Ruzsa–Szemerédi 그래프(Ruzsa–Szemerédi graph)** 라 한다. $n$ 정점 Ruzsa–Szemerédi 그래프의 최대 간선 수를 $\mathrm{RS}(n)$ 으로 쓴다.

같은 문제를 초그래프로 쓴 것이 $(6,3)$ 문제다. $3$ 균등 초그래프에서 어느 정점 $6$ 개도 초간선 $3$ 개를 포함하지 않으면 초간선 수가 $o(n^2)$ 이라는 진술을 **$(6,3)$ 정리((6,3) theorem)** 라 한다.

# 성질

## 상한

정리(Ruzsa–Szemerédi). $\mathrm{RS}(n)=o(n^2)$ 이다[^1].

증명의 요지. 간선 수가 $e$ 이면 삼각형은 $e/3$ 개이고 $e/3\le n^2$ 이므로 삼각형 수는 $o(n^3)$ 이다. 삼각형 제거 보조정리로 간선 $\varepsilon n^2$ 개를 지워 삼각형을 모두 없앨 수 있다. 간선 하나를 지우면 삼각형이 하나만 사라지므로 $e/3\le\varepsilon n^2$ 이다. $\varepsilon$ 은 임의이므로 $e=o(n^2)$ 이다.

## Behrend 구성에 의한 하한

정리. $\mathrm{RS}(n)\ge n^2\exp\big(-c\sqrt{\log n}\big)$ 이다[^1].

증명의 요지. $B\subseteq\lbrace 1,\dots,m\rbrace$ 를 길이 $3$ 의 등차수열이 없고 $\lvert B\rvert\ge m\exp(-c\sqrt{\log m})$ 인 Behrend 집합으로 잡는다. 정점 집합을 $X=\lbrace 1,\dots,m\rbrace$, $Y=\lbrace 1,\dots,2m\rbrace$, $Z=\lbrace 1,\dots,3m\rbrace$ 의 서로소 합으로 두고, $x\in X$ 와 $b\in B$ 마다 삼각형 $(x,\thinspace x+b,\thinspace x+2b)\in X\times Y\times Z$ 의 세 간선을 넣는다. 간선 $xy$ 에서는 $b=y-x$, 간선 $yz$ 에서는 $b=z-y$, 간선 $xz$ 에서는 $b=(z-x)/2$ 로 $b$ 와 $x$ 가 정해지므로 간선마다 심은 삼각형은 하나다. 아무 삼각형 $(x,y,z)$ 는 $y-x$, $(z-x)/2$, $z-y$ 가 $B$ 의 등차수열이므로 셋이 같고 심은 삼각형이다. 정점은 $6m$ 개, 간선은 $3m\lvert B\rvert$ 개다.

## Roth 정리의 유도

정리. $\mathrm{RS}(n)=o(n^2)$ 이면 $r_3(N)=o(N)$ 이다.

증명의 요지. 위 구성을 등차수열이 없는 임의의 $A\subseteq\lbrace 1,\dots,N\rbrace$ 로 하면 정점 $6N$ 개에 간선 $3N\lvert A\rvert$ 개인 Ruzsa–Szemerédi 그래프가 나온다. $3N\lvert A\rvert=o(N^2)$ 이므로 $\lvert A\rvert=o(N)$ 이다.

## 유도 매칭으로 쓴 꼴

그래프의 매칭 $M$ 이 **유도 매칭(induced matching)** 이라는 것은 $M$ 의 정점들 사이의 간선이 $M$ 의 간선뿐이라는 것이다. 양쪽에 정점이 $n$ 개씩인 이분그래프 $H$ 의 간선 집합이 유도 매칭 $n$ 개로 나뉘면 $H$ 의 간선 수는 $o(n^2)$ 이다. 매칭 $M_i$ 마다 새 정점 $w_i$ 를 더하고 $w_i$ 를 $M_i$ 의 모든 정점과 이으면, 각 매칭 간선이 $w_i$ 와 만드는 삼각형 하나에만 들어가는 그래프가 되고, 그래프는 Ruzsa–Szemerédi 그래프가 되어 상한이 옮겨 온다. Behrend 구성의 그래프도 이 꼴로 바꿀 수 있어 이분그래프 쪽에서도 하한 $n^2\exp(-c\sqrt{\log n})$ 이 성립한다.

## 상한과 하한의 거리

상한 $o(n^2)$ 의 정량적 형태는 삼각형 제거 보조정리의 $\delta(\varepsilon)$ 에 달려 있다. J. Fox 는 $1/\delta$ 를 높이 $O(\log(1/\varepsilon))$ 인 2 의 거듭제곱 탑으로 잡을 수 있음을 증명했다[^2]. 그래서 상한은 $n^2/\exp(c\log^\ast n)$ 꼴이고, 하한 $n^2\exp(-c\sqrt{\log n})$ 과 차이가 크다.

# 활용

- 성질 검사. 삼각형이 없는지 아니면 간선 $\varepsilon n^2$ 개를 지워야 하는지를 정점 몇 개를 뽑아 가르는 검사에서, 뽑는 개수는 $1/\varepsilon$ 의 다항식으로 줄일 수 없다. Behrend 그래프는 삼각형이 간선 수의 $1/3$ 개뿐이라 정점 몇 개를 뽑아서는 삼각형이 거의 걸리지 않고, 삼각형을 없애려면 간선의 $1/3$ 을 지워야 한다. N. Alon 은 이 하한이 이분그래프가 아닌 모든 부분그래프에서 성립함을 증명했다[^3].
- 정규성 방법의 한계. 삼각형 제거 보조정리의 $\delta$ 가 $\varepsilon$ 의 다항식이 될 수 없음이 같은 그래프에서 나온다.
- [Szemerédi 정리](szemeredi-theorem.md)의 초그래프 증명은 $(6,3)$ 정리에서 Roth 정리를 얻는 이 문서의 논법을 $k$ 균등 초그래프로 넓힌다.

[^1]: I. Z. Ruzsa, E. Szemerédi, "Triple systems with no six points carrying three triangles", Combinatorics (Keszthely, 1976), Colloquia Mathematica Societatis János Bolyai 18, North-Holland (1978), 939–945.
[^2]: J. Fox, "A new proof of the graph removal lemma", Annals of Mathematics 174 (2011), 561–579.
[^3]: N. Alon, "Testing subgraphs in large graphs", Random Structures & Algorithms 21 (2002), 359–370.

# 연관 문서

## 선수지식

- [등차수열의 Roth 정리](roth-theorem-arithmetic-progressions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #number_theory #computation
