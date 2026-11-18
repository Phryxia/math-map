# Hoffman 순환 정리

# 개요

**Hoffman 순환 정리(Hoffman's circulation theorem)** 는 간선마다 흘려야 하는 양의 하한과 상한이 정해진 유향 그래프에서, 모든 정점에서 들어오는 양과 나가는 양이 같은 흐름이 존재할 조건을 주는 정리다. 도시 사이의 버스 노선마다 하루 운행 횟수의 최소와 최대가 정해져 있고 버스가 매일 밤 출발한 도시로 돌아와야 할 때, 그런 운행표를 짤 수 있는지가 이 꼴이다. 정리는 운행표가 없으면 반드시 어떤 도시 묶음에 들어와야 하는 횟수가 거기서 나갈 수 있는 횟수보다 크다고 답하고, 그런 묶음이 없으면 운행표가 있다고 답한다.

# 직관

아래 그림의 실선 세 개가 도시 $a,b,c$ 사이의 노선이고, 괄호 안의 두 수가 하루 운행 횟수의 최소와 최대다. 노선 $a\to b$ 는 하루 $2$ 번 이상 다녀야 하고, $b\to c$ 는 $1$ 번 이하, $c\to a$ 는 $5$ 번 이하다. 점선 $b\to a$ 는 나중에 더하는 노선이다.

![도시 a, b, c 와 노선 a→b [2, 4], b→c [0, 1], c→a [0, 5] 를 실선으로, 새 노선 b→a [0, 3] 을 점선으로 그린 그래프](figures/hoffman-circulation-theorem-routes.svg)

실선 노선만으로는 운행표를 짤 수 없다. $b$ 로는 $a\to b$ 로 하루 $2$ 대 이상이 들어오는데, $b$ 에서 나가는 노선은 $b\to c$ 하나이고 많아야 $1$ 대가 나간다. 도시 $b$ 에 들어와야 하는 횟수 $2$ 가 나갈 수 있는 횟수 $1$ 보다 크다.

점선 노선 $b\to a$ 를 더하면 $b$ 에서 나갈 수 있는 횟수가 $1+3=4$ 가 된다. $a\to b$ 를 $2$ 번, $b\to c$ 와 $c\to a$ 와 $b\to a$ 를 $1$ 번씩 다니게 하면 세 도시 모두 들어오는 버스와 나가는 버스가 $2,2,1$ 대로 같다.

막힌 이유는 도시 하나에 들어와야 하는 양이 나갈 수 있는 양보다 컸다는 것이었다. 도시 하나 대신 도시의 묶음 $S$ 마다 같은 비교를 하면, 모든 묶음에서 들어와야 하는 양이 나갈 수 있는 양 이하일 때 운행표가 있다는 것이 이 정리다.

# 정의

## 하한과 상한이 있는 순환

유향 [그래프](graphs.md) $G=(V,E)$ 와 두 함수 $l,u:E\to\mathbb R$ 가 모든 간선에서 $l(e)\le u(e)$ 를 만족한다. $l$ 을 **하한(lower bound)**, $u$ 를 **상한(upper bound)** 이라 한다.

다음 두 조건을 만족하는 $f:E\to\mathbb R$ 를 **순환(circulation)** 이라 한다. $\delta^{+}(v)$ 와 $\delta^{-}(v)$ 는 $v$ 에서 나가는 간선과 $v$ 로 들어오는 간선의 집합이다.

$$
l(e)\le f(e)\le u(e)\quad(\forall e\in E),\qquad \sum_{e\in\delta^{+}(v)}f(e)=\sum_{e\in\delta^{-}(v)}f(e)\quad(\forall v\in V)
$$

직관 절에서 점선을 더한 그래프의 운행표 $f(a\to b)=2$, $f(b\to c)=f(c\to a)=f(b\to a)=1$ 이 순환이다.

## 묶음의 경계

정점 집합 $S\subseteq V$ 에 대해 $\delta^{-}(S)$ 는 $S$ 밖에서 $S$ 안으로 들어오는 간선, $\delta^{+}(S)$ 는 $S$ 안에서 밖으로 나가는 간선의 집합이다. 간선 집합 $F$ 에 대해 $l(F)=\sum\_{e\in F}l(e)$, $u(F)=\sum\_{e\in F}u(e)$ 로 쓴다.

직관 절의 실선 그래프에서 $S=\lbrace b\rbrace$ 이면 $\delta^{-}(S)=\lbrace a\to b\rbrace$, $\delta^{+}(S)=\lbrace b\to c\rbrace$ 이고 $l(\delta^{-}(S))=2$, $u(\delta^{+}(S))=1$ 이다.

# 성질

## Hoffman 순환 정리

정리. 순환이 존재하는 것은 모든 $S\subseteq V$ 에서 다음 부등식이 성립하는 것과 동치다[^1].

$$
l(\delta^{-}(S))\le u(\delta^{+}(S))
$$

$l$ 과 $u$ 가 정수이면 값이 모두 정수인 순환이 존재한다.

필요성. 흐름 보존식을 $S$ 의 정점마다 더하면 $S$ 안의 간선은 지워지고, $S$ 로 들어오는 흐름의 합과 나가는 흐름의 합이 같다. 들어오는 쪽은 $l(\delta^{-}(S))$ 이상이고 나가는 쪽은 $u(\delta^{+}(S))$ 이하다.

## 최대 흐름으로 하는 증명

충분성은 [네트워크 흐름](network-flow.md)의 최대유량 최소절단 정리로 증명된다. $f=l+g$ 로 놓으면 $g$ 는 $0\le g\le u-l$ 을 만족하고, 정점 $v$ 에서 $g$ 의 유출에서 유입을 뺀 값이 다음 $e(v)$ 와 같아야 한다.

$$
e(v)=l(\delta^{-}(v))-l(\delta^{+}(v))
$$

새 정점 $s^\ast$, $t^\ast$ 를 더하고 $e(v)\gt 0$ 이면 용량 $e(v)$ 인 간선 $s^\ast\to v$, $e(v)\lt 0$ 이면 용량 $-e(v)$ 인 간선 $v\to t^\ast$ 를 둔다. 순환이 존재하는 것은 최대 흐름이 $D=\sum\_{e(v)\gt 0}e(v)$ 인 것, 곧 $s^\ast$ 에서 나가는 간선이 모두 차는 것과 동치다.

절단 $\lbrace s^\ast\rbrace\cup S$ 의 용량이 $D$ 이상이라는 부등식을 정리하면 $\sum\_{v\in S}e(v)\le(u-l)(\delta^{+}(S))$ 이다. 좌변은 $l(\delta^{-}(S))-l(\delta^{+}(S))$ 이므로 이것은 정리의 부등식과 같다. 모든 절단이 $D$ 이상이면 최대 흐름이 $D$ 이고, 용량이 정수이면 정수 최대 흐름이 있다. ∎

직관 절의 점선을 더한 그래프에서 $e(a)=-2$, $e(b)=2$, $e(c)=0$ 이다. $s^\ast\to b$ 와 $a\to t^\ast$ 가 용량 $2$ 이고, $b\to a$ 로 $1$, $b\to c\to a$ 로 $1$ 을 흘리면 최대 흐름 $2=D$ 가 나온다. 여기에 $l$ 을 더한 것이 직관 절의 운행표다.

## 공급과 수요가 있는 흐름

따름정리. 합이 $0$ 인 공급량 $\beta:V\to\mathbb R$ 와 상한 $u\ge 0$ 에 대해, $0\le f\le u$ 이고 모든 정점에서 유출에서 유입을 뺀 값이 $\beta(v)$ 인 흐름이 존재하는 것은 모든 $S\subseteq V$ 에서 $\sum\_{v\in S}\beta(v)\le u(\delta^{+}(S))$ 인 것과 동치다. 이것을 Gale 정리(Gale's theorem)라 한다[^2].

증명의 요지. 새 정점 $z$ 를 더하고, $\beta(v)\gt 0$ 이면 하한과 상한이 모두 $\beta(v)$ 인 간선 $z\to v$, $\beta(v)\lt 0$ 이면 하한과 상한이 모두 $-\beta(v)$ 인 간선 $v\to z$ 를 둔 그래프에 Hoffman 순환 정리를 쓴다. ∎

# 활용

- 하한이 있는 최대 흐름과 [최소 비용 흐름](min-cost-flow.md). 하한이 있는 문제는 먼저 이 정리의 구성으로 허용 흐름을 하나 찾고, 그 흐름에서 잔여 그래프를 만들어 원래 알고리즘을 쓴다.
- 행렬 반올림(matrix rounding). 실수 행렬의 각 성분을 내림이나 올림으로 바꾸면서 행의 합과 열의 합도 원래 합의 내림이나 올림이 되게 할 수 있다. 행과 열을 정점으로 두고 성분마다 하한이 내림, 상한이 올림인 간선을 둔 순환에 정리의 정수성 부분을 쓴다[^3].
- 운행 계획. 노선마다 최소 운행 횟수가 있는 버스나 항공기 계획이 가능한지 이 정리로 판정하고, 불가능하면 정리의 부등식을 어기는 도시 묶음 $S$ 가 원인이 된다.
- 이분 그래프의 차수 조건. 정점마다 차수의 하한과 상한을 둔 부분그래프가 있는지는 이 정리로 판정되고, 한쪽 정점의 차수를 정확히 $1$, 다른 쪽 정점의 차수를 $1$ 이하로 둔 경우가 [매칭](matchings.md)의 Hall 결혼 정리(Hall's marriage theorem)다.

[^1]: A. J. Hoffman, "Some recent applications of the theory of linear inequalities to extremal combinatorial analysis", *Proceedings of Symposia in Applied Mathematics* **10** (1960), 113–127.
[^2]: David Gale, "A theorem on flows in networks", *Pacific Journal of Mathematics* **7** (1957), 1073–1082.
[^3]: Michael Bacharach, "Matrix rounding problems", *Management Science* **12** (1966), 732–742.

# 연관 문서

## 선수지식

- [네트워크 흐름](network-flow.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #combinatorics #optimization
