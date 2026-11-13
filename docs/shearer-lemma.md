# Shearer 보조정리

# 개요

**Shearer 보조정리(Shearer's lemma)** 는 여러 좌표로 된 무작위 대상의 불확실성이, 좌표를 몇 개씩 묶어 본 부분들의 불확실성을 합한 값으로 위에서 눌린다는 부등식이다. 공간에 점을 몇 개 찍고 바닥, 앞면, 옆면에 비친 그림자에 각각 점이 몇 개 있는지만 알 때 점이 최대 몇 개일 수 있는지가 이런 물음이다. Shearer 보조정리는 점 하나를 고르게 뽑은 확률변수의 [Shannon 엔트로피](entropy.md)를 그림자 쪽 엔트로피로 누르고, 엔트로피가 경우의 수의 로그라는 것으로 이 물음에 답한다.

# 직관

공간의 격자점 몇 개로 된 유한집합 $S$ 를 세 좌표평면에 비춘 그림자를 $S_{xy}, S_{yz}, S_{xz}$ 라 한다. 한 변에 점이 두 개인 정육면체는 점이 $8$ 개이고 그림자가 모두 점 $4$ 개짜리 정사각형이다. $8^2 = 64 = 4 \cdot 4 \cdot 4$ 이다.

$S$ 에서 점 $(X, Y, Z)$ 를 고르게 뽑으면 $H(X, Y, Z) = \log\lvert S\rvert$ 이다. 그림자 $(X, Y)$ 는 $S_{xy}$ 의 점이므로 $H(X, Y) \le \log\lvert S_{xy}\rvert$ 이고, 다른 두 그림자도 같다. 그래서 다음 부등식만 있으면 $\lvert S\rvert^2 \le \lvert S_{xy}\rvert\lvert S_{yz}\rvert\lvert S_{xz}\rvert$ 이 나온다.

$$
2H(X, Y, Z) \le H(X, Y) + H(Y, Z) + H(X, Z)
$$

세 그림자는 각 좌표를 정확히 두 번씩 담는다. 그래서 왼쪽에 $2$ 가 붙는다. Shearer 보조정리는 좌표를 담는 횟수가 이렇게 고르지 않아도 되는 일반형이다.

# 정의

## 좌표 묶음의 덮개

$X = (X_1, \dots, X_n)$ 이 이산 확률변수들의 묶음이고 $F \subseteq \lbrack n\rbrack = \lbrace 1, \dots, n\rbrace$ 이면 $X_F = (X_i)\_{i \in F}$ 로 적는다. $\lbrack n\rbrack$ 의 부분집합들의 모임 $\mathcal F$ 가 각 $i$ 를 적어도 $k$ 개의 원소에 담으면 $\mathcal F$ 가 $\lbrack n\rbrack$ 을 **$k$ 번 덮는다($k$-cover)** 고 한다. 직관 절의 세 그림자는 $\mathcal F = \lbrace\lbrace 1,2\rbrace, \lbrace 2,3\rbrace, \lbrace 1,3\rbrace\rbrace$ 이고 $\lbrack 3\rbrack$ 을 $2$ 번 덮는다.

# 성질

## Shearer 보조정리

$\mathcal F$ 가 $\lbrack n\rbrack$ 을 $k$ 번 덮으면 다음이 성립한다[^1].

$$
k\thinspace H(X) \le \sum_{F \in \mathcal F}H(X_F)
$$

증명의 요지. $F = \lbrace i_1 \lt \dots \lt i_s\rbrace$ 이면 연쇄법칙으로 $H(X_F) = \sum_t H(X_{i_t} \mid X_{i_1}, \dots, X_{i_{t-1}})$ 이다. 조건을 늘리면 엔트로피가 줄어들므로 각 항은 $H(X_{i_t} \mid X_1, \dots, X_{i_t - 1})$ 이상이다. 이것을 $\mathcal F$ 의 모든 $F$ 에 대해 더하면 각 $i$ 의 항이 $k$ 번 이상 나오고, 연쇄법칙으로 $\sum_i H(X_i \mid X_1, \dots, X_{i-1}) = H(X)$ 이다.

## Loomis–Whitney 부등식

$\mathbb Z^n$ 의 유한집합 $S$ 와 $i$ 번째 좌표를 지운 사영 $S_i$ 에 대해 다음이 성립한다. 이것을 Loomis–Whitney 부등식(Loomis–Whitney inequality)이라 한다[^2].

$$
\lvert S\rvert^{n-1} \le \prod_{i=1}^n\lvert S_i\rvert
$$

$S$ 에서 고르게 뽑은 점에 Shearer 보조정리를 쓴다. 좌표 하나를 뺀 $n$ 개의 집합은 $\lbrack n\rbrack$ 을 $n-1$ 번 덮는다. 직관 절이 $n = 3$ 인 경우다.

## 집합족 판본

$\lbrack n\rbrack$ 의 부분집합들의 모임 $\mathcal A$ 와 $k$ 번 덮개 $\mathcal F$ 에 대해, $\mathcal A$ 의 원소를 $F$ 와 교집합한 것들의 모임을 $\mathcal A_F$ 라 하면 다음이 성립한다[^1].

$$
\lvert\mathcal A\rvert^k \le \prod_{F \in \mathcal F}\lvert\mathcal A_F\rvert
$$

$\mathcal A$ 의 원소를 고르게 뽑아 지시벡터 $X \in \lbrace 0,1\rbrace^n$ 으로 보면 $H(X) = \log\lvert\mathcal A\rvert$ 이고 $H(X_F) \le \log\lvert\mathcal A_F\rvert$ 이다.

# 활용

- 삼각형의 수. 변이 $m$ 개인 [그래프](graphs.md)의 삼각형은 $(2m)^{3/2}/6$ 개 이하다. 삼각형의 꼭짓점에 순서를 준 $(X, Y, Z)$ 를 고르게 뽑으면 $(X, Y)$, $(Y, Z)$, $(X, Z)$ 는 방향을 준 변이고 그런 변은 $2m$ 개다. Shearer 보조정리로 $2\log(6T) \le 3\log(2m)$ 이고, $T$ 는 삼각형의 수다.
- 교차하는 그래프족. Chung, Graham, Frankl, Shearer 는 정점 $n$ 개 위의 그래프들 가운데 어느 두 그래프의 공통 부분에도 삼각형이 있는 족이 전체의 $1/4$ 이하라는 것을 이 부등식으로 보였다[^1].

[^1]: F. R. K. Chung, R. L. Graham, P. Frankl, J. B. Shearer, "Some intersection theorems for ordered sets and graphs", Journal of Combinatorial Theory Series A 43 (1986), 23–37.
[^2]: L. H. Loomis, H. Whitney, "An inequality related to the isoperimetric inequality", Bulletin of the American Mathematical Society 55 (1949), 961–962.

# 연관 문서

## 선수지식

- [Shannon 엔트로피](entropy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #information_theory
