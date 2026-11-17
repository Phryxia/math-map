# Kahn–Zhao 정리

# 개요

**Kahn–Zhao 정리(Kahn–Zhao theorem)** 는 모든 정점의 차수가 $d$ 인 그래프에서 [독립집합](independent-set.md)의 수가 가장 많아지는 것은 그래프가 완전 이분 그래프 $K_{d,d}$ 의 서로소 합일 때라는 정리다. 정점 $12$ 개가 둥글게 이어진 순환과 정사각형 셋을 따로 놓은 그래프는 모두 차수가 $2$ 다. 서로 이웃하지 않는 정점을 고르는 방법은 어느 쪽이 더 많은지 묻는다.

Kahn–Zhao 정리는 이 수를 정점 하나당 몫으로 비교하고, 그 몫이 $K_{d,d}$ 에서 가장 크다는 것을 엔트로피로 증명한다.

# 직관

정사각형 $C_4$ 의 정점을 $1,2,3,4$ 로 차례로 둔다. 독립집합은 공집합, 정점 하나짜리 넷, 마주 보는 두 정점 $\lbrace 1,3\rbrace$ 과 $\lbrace 2,4\rbrace$ 로 모두 $7$ 개다. 정사각형 셋을 따로 놓으면 각자 고르므로 $7^3=343$ 개다.

정점 $12$ 개의 순환 $C_{12}$ 에서는 독립집합이 $322$ 개다. 순환 $C_n$ 의 독립집합 수는 $n=4,5,6,\dots$ 에서 $7,11,18,29,\dots$ 처럼 앞의 두 수를 더해 가고, $n=12$ 에서 $322$ 가 된다.

정점 수가 다른 그래프끼리 비교하려고 독립집합 수의 $n$ 제곱근을 본다. $C_4$ 는 $7^{1/4}\approx 1.627$, $C_{12}$ 는 $322^{1/12}\approx 1.618$ 이다. 정사각형 쪽이 정점 하나당 선택의 여지가 더 크다.

정사각형은 $K_{2,2}$ 다. 두 쪽 $\lbrace 1,3\rbrace$ 과 $\lbrace 2,4\rbrace$ 가운데 한쪽을 비워 두면 다른 쪽은 아무렇게나 고를 수 있어, 이웃 관계가 독립집합을 가장 적게 제한한다.

# 정의

## 독립집합의 수

그래프 $G$ 의 독립집합 전체의 수를 $i(G)$ 로 쓴다. 공집합도 센다. 직관 절에서 $i(C_4)=7$, $i(C_{12})=322$ 다.

## 정칙 그래프

모든 정점의 차수가 같은 그래프를 **정칙 그래프(regular graph)** 라 하고, 그 차수가 $d$ 이면 $d$ 정칙이라 한다. 순환은 $2$ 정칙이고, 완전 이분 그래프 $K_{d,d}$ 는 $d$ 정칙이다. $i(K_{d,d})=2^{d+1}-1$ 이다. 한쪽에서 공집합이 아닌 집합을 고르면 다른 쪽은 비어야 하므로 $2(2^d-1)+1$ 개다.

# 성질

## Kahn–Zhao 정리

정리. 정점이 $n$ 개인 $d$ 정칙 그래프 $G$ 에서 다음이 성립한다.

$$
i(G)\le\bigl(2^{d+1}-1\bigr)^{n/(2d)}
$$

등호는 $G$ 가 $K_{d,d}$ 의 서로소 합일 때 성립한다. N. Alon 이 추측했고[^1], J. Kahn 이 이분 그래프에서[^2], Y. Zhao 가 모든 그래프에서 증명했다[^3]. $d=2$, $n=12$ 이면 우변은 $7^3=343$ 이고 $i(C_{12})=322$ 다.

## 이분 그래프의 증명

$G$ 가 두 쪽 $A,B$ 로 나뉜 $d$ 정칙 이분 그래프이면 $\lvert A\rvert=\lvert B\rvert=n/2$ 다. 독립집합 하나를 고르게 뽑아 그 지시 벡터를 $X$ 라 하면 $H(X)=\log_2 i(G)$ 다. 연쇄법칙으로 다음이 나온다.

$$
H(X)\le H(X_A)+\sum_{v\in B}H(X_v\mid X_{N(v)})
$$

$B$ 의 정점들의 이웃 $N(v)$ 는 $A$ 의 각 정점을 정확히 $d$ 번 덮는다. [Shearer 보조정리](shearer-lemma.md)로 $H(X_A)\le\frac1d\sum_{v\in B}H(X_{N(v)})$ 이므로, $B$ 의 정점 $v$ 마다 하나씩 항이 남는다.

$p=P(X_{N(v)}=0)$ 이라 하면, $X_v=1$ 은 이웃이 모두 $0$ 일 때만 가능하므로 $H(X_v\mid X_{N(v)})\le p$ 다. 또 $X_{N(v)}$ 는 $0$ 이거나 나머지 $2^d-1$ 가지 가운데 하나이므로 $H(X_{N(v)})\le h(p)+(1-p)\log_2(2^d-1)$ 이다. $h$ 는 두 값 엔트로피다.

$v$ 마다 남는 항은 $\frac1d\bigl(h(p)+(1-p)\log_2(2^d-1)+dp\bigr)$ 이하다. 괄호 안의 최댓값은 $\log_2\bigl(2^d+(2^d-1)\bigr)=\log_2(2^{d+1}-1)$ 이고, $v$ 가 $n/2$ 개이므로 정리가 나온다.

## 일반 그래프로의 확장

Zhao 는 $d$ 정칙 그래프 $G$ 에 대해 $i(G)^2\le i(G\times K_2)$ 를 보였다. $G\times K_2$ 는 정점마다 두 사본을 두고 $G$ 의 간선 $uv$ 마다 서로 다른 사본끼리 이은 이분 그래프로, 정점이 $2n$ 개인 $d$ 정칙 이분 그래프다. 여기에 이분 그래프의 결과를 쓰면 $i(G)^2\le(2^{d+1}-1)^{2n/(2d)}$ 이다.

# 활용

- 단단한 알갱이 모형. 독립집합마다 크기 $k$ 에 대해 $\lambda^k$ 의 무게를 준 합 $Z_G(\lambda)$ 는 통계역학의 [단단한 알갱이 모형](hard-core-model.md)의 분배함수다. 같은 엔트로피 논법으로 $Z_G(\lambda)^{1/n}\le Z_{K_{d,d}}(\lambda)^{1/(2d)}$ 가 증명된다[^2].
- 그래프 준동형의 수. 독립집합은 고리 하나가 달린 간선으로의 준동형이다. D. Galvin 과 P. Tetali 는 정칙 이분 그래프에서 모든 목표 그래프로의 준동형 수에 같은 꼴의 상한을 증명했다.
- 합이 없는 집합. Alon 의 원래 동기는 유한 Abel 군에서 두 원소의 합이 다시 들어가지 않는 부분집합을 세는 문제였다[^1].

[^1]: N. Alon, "Independent sets in regular graphs and sum-free subsets of finite groups", Israel Journal of Mathematics 73 (1991), 247–256.
[^2]: J. Kahn, "An entropy approach to the hard-core model on bipartite graphs", Combinatorics, Probability and Computing 10 (2001), 219–237.
[^3]: Y. Zhao, "The number of independent sets in a regular graph", Combinatorics, Probability and Computing 19 (2010), 315–320.

# 연관 문서

## 선수지식

- [Shearer 보조정리](shearer-lemma.md)
- [독립집합 문제](independent-set.md)

## 더 알아보기

- [Galvin–Tetali 정리](galvin-tetali-theorem.md)

#combinatorics #graph_theory #information_theory
