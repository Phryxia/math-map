# 일반화 지리 게임

# 개요

**일반화 지리 게임(generalized geography)** 은 유향 [그래프](graphs.md) 위에서 두 사람이 번갈아 말을 아직 지나지 않은 이웃 정점으로 옮기고, 옮길 수 없는 사람이 지는 게임이다. 앞 사람이 말한 낱말의 끝 글자로 시작하고 이미 나온 적 없는 낱말을 말하는 끝말잇기가 이 꼴이다. 낱말이 늘면 먼저 하는 사람이 이기는지 판정하려고 따질 진행이 지수적으로 늘어난다. 이 게임은 승리 판정이 다항 크기의 기억 공간으로 풀리는 문제 가운데 가장 어려운 것임이 증명되어, 다른 게임의 판정이 어렵다는 증명이 이 게임에서 출발한다.

# 직관

일반화 지리 게임은 유향 그래프의 시작 정점에 놓인 말을 두 사람이 번갈아 아직 지나지 않은 이웃 정점으로 옮기고, 옮길 수 없는 사람이 지는 게임이다. 먼저 두는 사람이 이기는 전략이 있는지 판정하는 문제는 PSPACE(polynomial space)-완전이다. T. J. Schaefer 가 1978 년에 증명했다[^1].

[교대 Turing 기계](alternating-turing-machines.md)로 보면 다항 걸음 안에 끝나는 두 사람 게임의 승패 판정은 $\mathrm{AP}=\mathrm{PSPACE}$ 에 든다. 일반화 지리 게임은 그 판정이 PSPACE 에서 가장 어려운 문제가 되는 게임이고, 바둑 같은 게임의 난해성 증명이 이 게임에서 환원을 시작한다.

끝말잇기에서 앞 사람이 말한 낱말의 끝 글자로 시작하는 낱말을 말하고, 이미 나온 낱말은 다시 쓰지 못한다. 낱말을 정점으로, "$u$ 의 끝 글자가 $v$ 의 첫 글자" 를 간선 $u\to v$ 로 두면, 말을 이미 지난 정점으로 옮길 수 없는 그래프 위의 게임이 된다. 일반화 지리 게임은 이 그래프를 아무 유향 그래프로 바꾼 것이다.

먼저 두는 사람이 이기는지 판정하려면 "내 수 $v_1$ 이 있어서, 상대의 모든 수 $v_2$ 에 대해, 내 수 $v_3$ 이 있어서, …" 를 따져야 한다. 정점을 한 번씩만 지나므로 게임은 정점 수만큼의 걸음 안에 끝나고, 이 따짐은 한정사가 정점 수만큼 번갈아 나오는 [공간 복잡도](space-complexity.md)의 한정 불 논리식과 같은 꼴이다. 거꾸로 한정 불 논리식 하나를 그래프로 옮겨, 논리식이 참인 것과 먼저 두는 사람이 이기는 것을 같게 만들 수 있다.

# 정의

유향 그래프 $G=(V,E)$ 와 시작 정점 $s\in V$ 가 주어진다. 처음에 말은 $s$ 에 있고 $s$ 는 지난 정점이다. 두 사람이 번갈아, 말이 있는 정점 $v$ 에서 간선 $v\to w$ 를 따라 아직 지나지 않은 $w$ 로 말을 옮기고 $w$ 를 지난 정점에 더한다. 옮길 수 없는 사람이 진다. 먼저 두는 사람을 1 번, 다른 사람을 2 번이라 한다.

$$
\mathrm{GG}=\lbrace (G,s) : 1\ \text{번이 이기는 전략이 있다}\rbrace
$$

간선을 한 번씩만 쓰게 한 판본을 간선 지리 게임(edge geography)이라 하고, 무향 그래프 위의 판본을 무향 지리 게임이라 한다.

# 성질

## PSPACE 소속

게임은 $\lvert V\rvert-1$ 걸음 안에 끝난다. 1 번의 수를 존재 상태로, 2 번의 수를 전칭 상태로 고르는 교대 기계는 다항시간에 승패를 판정하므로 $\mathrm{GG}\in\mathrm{AP}=\mathrm{PSPACE}$ 다. 게임 나무를 깊이 우선으로 훑어도 깊이마다 정점 하나만 기억하면 되므로 같은 결론이 나온다.

## PSPACE-완전성

정리(Schaefer). $\mathrm{GG}$ 는 PSPACE-완전이다[^1].

증명의 요지. TQBF(true quantified Boolean formula)에서 환원한다. 논리식은 $\exists x_1\forall x_2\exists x_3\cdots\exists x_n\ \varphi$ 꼴이고 $\varphi$ 는 절 $C_1,\dots,C_m$ 의 논리곱이라 해도 된다($n$ 은 홀수).

- 변수 $x_i$ 마다 정점 넷 $t_i,\ell_i,r_i,b_i$ 와 간선 $t_i\to\ell_i$, $t_i\to r_i$, $\ell_i\to b_i$, $r_i\to b_i$, $b_i\to t_{i+1}$ 을 둔다. 말이 $\ell_i$ 를 지나면 $x_i$ 를 참으로, $r_i$ 를 지나면 거짓으로 정한 것이다.
- $s=t_1$ 로 둔다. 한 변수에 세 걸음이 들고 $t_i$ 에서 고르는 사람이 번갈아 바뀌므로, 홀수 번째 변수는 1 번이, 짝수 번째 변수는 2 번이 정한다.
- $b_n$ 에서 정점 $c$ 로, $c$ 에서 절마다 정점 $C_j$ 로 간선을 둔다. 2 번이 $c$ 에서 절 하나를 고른다.
- $x_i$ 가 $C_j$ 에 그대로 들어 있으면 $C_j\to r_i$ 를, 부정으로 들어 있으면 $C_j\to\ell_i$ 를 둔다.

2 번이 고른 절 $C_j$ 에서 1 번은 참인 문자로 간다. $x_i$ 가 참이면 $r_i$ 는 지나지 않은 정점이고, $r_i$ 에서 나가는 간선은 이미 지난 $b_i$ 로만 가므로 2 번이 옮길 수 없어 진다. 참인 문자가 없는 절에서는 1 번이 옮길 곳이 없다. 따라서 논리식이 참인 것과 1 번이 이기는 것이 동치다.

## 무향 지리 게임

무향 그래프에서 정점을 한 번씩만 지나는 판본은 다항시간에 판정된다.

정리. 무향 지리 게임에서 1 번이 이기는 것은 그래프의 모든 최대 [매칭](matchings.md)이 $s$ 를 덮는 것과 동치다[^2].

증명의 요지. $s$ 를 덮지 않는 최대 매칭 $M$ 이 있으면 2 번은 1 번이 옮긴 정점 $w$ 에서 $M$ 으로 짝지어진 정점으로 옮긴다. $w$ 가 $M$ 에 덮이지 않으면 지나온 길이 $s$ 에서 $w$ 로 가는 증가 경로가 되어 $M$ 이 최대라는 데 어긋난다. 그래서 2 번은 늘 옮길 곳이 있다. 모든 최대 매칭이 $s$ 를 덮으면 1 번이 최대 매칭 하나에서 $s$ 의 짝으로 옮기며 같은 논법을 쓴다.

## 다른 게임의 복잡도

- [Hex 게임](hex-game.md)은 일반 판에서 PSPACE-완전이다[^3].
- 바둑은 $n\times n$ 판의 주어진 국면에서 승패를 판정하는 문제가 PSPACE-난해하다. D. Lichtenstein 과 M. Sipser 가 평면 그래프 위의 일반화 지리 게임에서 환원했다[^4]. 패를 일본 규칙으로 두면 판정이 EXPTIME(exponential time)-완전이다[^5].
- $n\times n$ 판의 체스는 EXPTIME-완전이다[^6].

일반화 지리 게임과 Hex 는 걸음 수가 판의 크기로 묶여 PSPACE 에 들고, 바둑과 체스는 같은 국면이 되풀이되며 걸음 수가 지수까지 갈 수 있어 교대 기계의 $\mathrm{APSPACE}=\mathrm{EXPTIME}$ 에 든다.

# 활용

- 공간 복잡도의 PSPACE-난해성 증명. 게임과 퍼즐의 난해성은 TQBF 대신 일반화 지리 게임에서 환원하는 경우가 많다. 바둑의 PSPACE-난해성이 그 예다.
- 교대 Turing 기계의 $\mathrm{AP}=\mathrm{PSPACE}$ 의 예. 교대 기계의 계산 나무는 존재 상태와 전칭 상태가 두는 게임이고, 일반화 지리 게임은 그 게임을 그래프로 직접 쓴 것이다.

[^1]: T. J. Schaefer, "On the complexity of some two-person perfect-information games", Journal of Computer and System Sciences 16 (1978), 185–225.
[^2]: A. S. Fraenkel, E. R. Scheinerman, D. Ullman, "Undirected edge geography", Theoretical Computer Science 112 (1993), 371–381.
[^3]: S. Reisch, "Hex ist PSPACE-vollständig", Acta Informatica 15 (1981), 167–191.
[^4]: D. Lichtenstein, M. Sipser, "Go is polynomial-space hard", Journal of the ACM 27 (1980), 393–401.
[^5]: J. M. Robson, "The complexity of Go", Information Processing 83, Proceedings of the IFIP 9th World Computer Congress (1983), 413–417.
[^6]: A. S. Fraenkel, D. Lichtenstein, "Computing a perfect strategy for n×n chess requires time exponential in n", Journal of Combinatorial Theory, Series A 31 (1981), 199–214.

# 연관 문서

## 선수지식

- [교대 Turing 기계](alternating-turing-machines.md)

## 더 알아보기

- [전략 훔치기 논법](strategy-stealing.md)
- [Sprague–Grundy 정리](sprague-grundy-theorem.md)

#complexity #computation #graph_theory #combinatorics
