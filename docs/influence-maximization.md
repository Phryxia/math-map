# 영향력 최대화

# 개요

**영향력 최대화(influence maximization)** 는 확률적으로 퍼지는 확산 모형이 주어진 유향 그래프에서, 처음 퍼뜨리기 시작할 정점 $k$ 개를 골라 최종적으로 퍼진 정점 수의 기댓값을 최대로 하는 문제다. D. Kempe, J. Kleinberg, É. Tardos 가 2003 년에 독립 연쇄 모형과 선형 문턱 모형에서 이 기댓값이 단조 [부분모듈 함수](submodular-functions.md)임을 증명했다[^1].

그래서 탐욕법이 최적값의 $1-1/e$ 배 이상을 준다. 문제 자체는 NP(nondeterministic polynomial time)-난해이고, 기댓값을 정확히 계산하는 것도 어렵다.

# 직관

정점 $u,v,w,x$ 가 있고 화살표 $u\to v$ 와 $u\to w$ 는 각각 확률 $1/2$ 로, $x\to w$ 는 확률 $1$ 로 소식을 전한다. 처음에 $u$ 만 소식을 알면 $v$ 와 $w$ 가 각각 확률 $1/2$ 로 알게 되어, 아는 정점 수의 기댓값은 $1+1/2+1/2=2$ 다. $x$ 만 알면 $x$ 와 $w$ 가 알아 $2$ 다.

$u$ 와 $x$ 가 함께 알면 $w$ 는 $x$ 에게서 반드시 듣는다. 기댓값은 $1+1+1/2+1=3.5$ 이다. $x$ 를 고른 뒤 $u$ 를 더하면 $1.5$ 만 늘고, $u$ 를 혼자 골랐을 때의 $2$ 보다 적다. $w$ 가 이미 소식을 듣기 때문에 생기는 이 감소가 부분모듈성이다.

동전을 미리 다 던져 두면 계산이 단순해진다. 화살표마다 확률대로 "통한다" 와 "막힌다" 를 정해 두면, 처음 고른 정점에서 통하는 화살표로 갈 수 있는 정점이 소식을 듣는 정점이다. 동전의 결과마다 이 정점 수는 덮기 함수이고, 덮기 함수의 평균도 부분모듈 함수다.

# 정의

$G=(V,E)$ 는 유한 유향 그래프다. 정점 집합 $S\subseteq V$ 에서 시작해 정점이 차례로 활성화되고, 활성화된 정점은 비활성으로 돌아가지 않는다.

- 독립 연쇄 모형(independent cascade model). 간선마다 확률 $p_{uv}\in\lbrack 0,1\rbrack$ 이 있다. 정점 $u$ 가 시각 $t$ 에 활성화되면 시각 $t+1$ 에 아직 비활성인 이웃 $v$ 를 확률 $p_{uv}$ 로 한 번만 활성화하려 한다. 시도들은 서로 독립이다.
- 선형 문턱 모형(linear threshold model). 간선마다 무게 $b_{uv}\ge 0$ 이 있고 정점마다 $\sum_u b_{uv}\le 1$ 이다. 정점마다 문턱 $\theta_v$ 를 $\lbrack 0,1\rbrack$ 에서 고르게 뽑고, 활성화된 이웃의 무게 합이 $\theta_v$ 이상이 되면 $v$ 가 활성화된다.

최종 활성 정점 수의 기댓값을 $\sigma(S)$ 라 한다. 영향력 최대화는 $\max_{\lvert S\rvert\le k}\sigma(S)$ 를 구하는 문제다.

# 성질

## 부분모듈성

두 모형에서 $\sigma$ 는 단조 부분모듈 함수다[^1].

증명의 요지. 독립 연쇄 모형에서는 간선 $uv$ 를 확률 $p_{uv}$ 로 독립하게 남겨 무작위 부분그래프 $L$ 을 만든다. 최종 활성 집합의 분포는 $L$ 에서 $S$ 로부터 닿는 정점 집합 $R_L(S)$ 의 분포와 같다. $L$ 을 고정하면 $\lvert R_L(S)\rvert=\lvert\bigcup_{s\in S}R_L(\lbrace s\rbrace)\rvert$ 는 덮기 함수이므로 단조 부분모듈이고, $\sigma(S)=\mathbb E_L\lvert R_L(S)\rvert$ 는 그 평균이다. 선형 문턱 모형에서는 정점 $v$ 마다 들어오는 간선 가운데 많아야 하나를 확률 $b_{uv}$ 로 남기는 무작위 부분그래프가 같은 분포를 준다.

## 근사와 난해성

$\sigma$ 를 정확히 알면 탐욕법이 $1-1/e$ 배를 보장한다. $\sigma$ 는 무작위 부분그래프를 여러 번 뽑아 평균으로 추정하고, 추정 오차를 $\varepsilon$ 이하로 두면 $1-1/e-\varepsilon$ 배가 보장된다[^1].

- 독립 연쇄 모형의 영향력 최대화는 최대 덮기 문제를 특수한 경우로 포함하므로 NP-난해이고, $1-1/e$ 보다 큰 비율의 근사도 NP-난해다[^1].
- 독립 연쇄 모형에서 주어진 $S$ 의 $\sigma(S)$ 를 계산하는 문제는 #P-난해다[^2].

## 역방향 도달 집합

정점 $v$ 를 고르게 하나 뽑고, 무작위 부분그래프에서 $v$ 로 닿는 정점 집합 $R$ 을 만든다. $S$ 가 $R$ 과 만날 확률에 $\lvert V\rvert$ 를 곱하면 $\sigma(S)$ 다. 이런 $R$ 을 많이 뽑은 뒤 그 집합들을 가장 많이 만나는 $k$ 개를 탐욕법으로 고르면, 그래프 크기에 거의 선형인 시간에 $1-1/e-\varepsilon$ 배가 나온다[^3].

# 활용

- 바이럴 마케팅. 무료 견본을 줄 사람 $k$ 명을 고르는 문제가 이 모형이다.
- 감염 감시. 같은 확산 모형에서 감염을 가장 일찍 감지하도록 감시점을 고르는 문제도 단조 부분모듈 함수의 최대화가 되어 탐욕법이 쓰인다.

[^1]: D. Kempe, J. Kleinberg, É. Tardos, "Maximizing the spread of influence through a social network", Proceedings of the 9th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (2003), 137–146.
[^2]: W. Chen, C. Wang, Y. Wang, "Scalable influence maximization for prevalent viral marketing in large-scale social networks", Proceedings of the 16th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (2010), 1029–1038.
[^3]: C. Borgs, M. Brautbar, J. Chayes, B. Lucier, "Maximizing social influence in nearly optimal time", Proceedings of the 25th ACM-SIAM Symposium on Discrete Algorithms (2014), 946–957.

# 연관 문서

## 선수지식

- [부분모듈 함수](submodular-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #graph_theory #probability #machine_learning
