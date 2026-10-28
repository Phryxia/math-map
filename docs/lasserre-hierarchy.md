# Lasserre 계층

# 개요

**Lasserre 계층(Lasserre hierarchy)** 은 변수가 $0$ 과 $1$ 만 갖는 최적화 문제를, 단계를 올릴수록 정확해지는 연속 최적화 문제의 열로 근사하는 방법이다. 완전그래프에서 서로 이웃하지 않는 정점을 고르면 정점 하나밖에 고를 수 없어 $\sum_ix_i\le 1$ 이지만, 쌍마다 $x_i+x_j\le 1$ 만 둔 완화는 모든 $x_i=1/2$ 를 허용해 답을 $n/2$ 로 크게 잡는다. 정수점에서 $(\sum_ix_i-a)^2\ge 0$ 같은 제곱식이 음수가 아니라는 조건을 [반정부호 계획법](semidefinite-programming.md)의 제약으로 더해 완화를 좁히고, 이 예에서는 $\sum_ix_i\le 1$ 을 얻는다.

# 직관

Lasserre 계층은 $0$-$1$ 정수계획의 완화를 단계적으로 좁히는 반정부호 계획법의 열이다. Sum-of-Squares 계층(Sum-of-Squares hierarchy)이라고도 한다. [Sherali–Adams 계층](sherali-adams-hierarchy.md)처럼 단항식마다 새 변수 $y_S$ 를 두고, 그 변수들로 만든 모멘트 행렬(moment matrix)이 반정부호라는 조건을 더한다. 같은 단계에서 Sherali–Adams 완화보다 좁고, 단계 $t$ 의 완화는 $n^{O(t)}$ 시간에 풀린다.

정점이 $n$ 개인 완전그래프의 안정집합을 고르는 정수계획에서 변 완화는 $x\ge 0$ 과 모든 쌍의 $x_i+x_j\le 1$ 이다. 정수 껍질은 $\sum_ix_i\le 1$ 로 기술되는데, Sherali–Adams 계층의 성질 절에 따르면 Lovász–Schrijver 연산은 이 부등식을 얻는 데 $n-2$ 단계가 걸린다. 곱셈을 하나씩 늘려서는 느리다.

정수점에서 성립하는 다른 성질을 쓴다. 정수점 $x$ 에서는 어떤 실수 $a$ 에 대해서도 $(\sum_ix_i-a)^2\ge 0$ 이다. 전개하면 $(\sum_ix_i)^2-2a\sum_ix_i+a^2\ge 0$ 이고, $x_i^2=x_i$ 와 $x_ix_j=0$ ($i\ne j$) 을 쓰면 $(\sum_ix_i)^2=\sum_ix_i$ 다. Sherali–Adams 계층의 직관 절처럼 곱 $x_ix_j$ 를 새 변수 $y_{ij}$ 로 두면 변 부등식에 곱셈을 한 번 해서 $y_{ij}=0$ 을 얻으므로, 선형화한 부등식은 $s=\sum_ix_i$ 로

$$
s-2as+a^2\ge 0
$$

이다. $a=s$ 로 두면 $s-s^2\ge 0$, 곧 $s\le 1$ 이다. 제곱이 음이 아니라는 조건 하나로 클릭 부등식이 한 단계에 나왔다.

$a$ 하나가 아니라 모든 다항식 $q$ 에 대해 $q(x)^2\ge 0$ 을 선형화해 요구하는 것은 무한히 많은 부등식이다. 차수가 $t+1$ 이하인 다항식 $q$ 의 계수 벡터를 $c$ 라 하면 $q^2$ 을 선형화한 값은 $c^TMc$ 꼴이고, $M$ 은 행과 열이 크기 $t+1$ 이하의 집합으로 번호 붙고 $(I,J)$ 성분이 $y_{I\cup J}$ 인 행렬이다. 모든 $c$ 에서 $c^TMc\ge 0$ 인 것은 $M$ 이 반정부호인 것이므로, 이 무한히 많은 부등식이 반정부호 조건 하나가 된다.

# 정의

$P=\lbrace x\in\lbrack 0,1\rbrack^n:g_l(x)\ge 0,\ l=1,\dots,m\rbrace$ 이고 $g_l(x)=\beta_l-a_l^Tx$ 이다. $\lbrack n\rbrack$ 의 크기 $k$ 이하인 부분집합 전체를 $\mathcal P_k$ 로 쓴다.

$y=(y_S)\_{S\in\mathcal P_{2t+2}}$ 에 대해 $(t+1)$ 차 **모멘트 행렬(moment matrix)** 은

$$
M_{t+1}(y)=\bigl(y_{I\cup J}\bigr)\_{I,J\in\mathcal P_{t+1}}
$$

이다. 부등식 $g_l\ge 0$ 의 **국소화 행렬(localizing matrix)** 은 $(g_l\ast y)\_S=\beta_ly_S-\sum_ia_{l,i}y_{S\cup\lbrace i\rbrace}$ 로 정한 벡터의 모멘트 행렬 $M_t(g_l\ast y)$ 다. 단계 $t$ 의 **Lasserre 완화(Lasserre relaxation)** 는

$$
\mathrm{Las}\_t(P)=\Bigl\lbrace(y_{\lbrace 1\rbrace},\dots,y_{\lbrace n\rbrace}):y_\emptyset=1,\ M_{t+1}(y)\succeq 0,\ M_t(g_l\ast y)\succeq 0\ (l=1,\dots,m)\Bigr\rbrace
$$

다.[^1][^2]

정수점 $x\in P\cap\lbrace 0,1\rbrace^n$ 에서 $y_S=\prod_{i\in S}x_i$ 로 두면 $M_{t+1}(y)=vv^T$ 이고 $v=(y_I)\_{I\in\mathcal P_{t+1}}$ 이므로 반정부호다. 국소화 행렬도 $g_l(x)vv^T$ 꼴이라 반정부호다. 그래서 $P_I\subseteq\mathrm{Las}\_t(P)$ 다.

# 성질

## Sherali–Adams 와의 비교

$$
P_I\subseteq\mathrm{Las}\_t(P)\subseteq\mathrm{SA}\_t(P)
$$

이다. 국소화 행렬의 대각 성분과 모멘트 행렬의 $2\times 2$ 소행렬이 반정부호라는 조건에서 Sherali–Adams 단계 $t$ 의 부등식이 모두 유도된다. 반정부호 판 Lovász–Schrijver 연산 $N_+$ 에 대해서도 $\mathrm{Las}\_t(P)\subseteq N_+^t(P)$ 다.[^2] Sherali–Adams 계층이 단계 $n$ 에서 $P_I$ 에 닿으므로 $\mathrm{Las}\_n(P)=P_I$ 다.

## 계산 비용

$M_{t+1}(y)$ 의 크기는 $\sum_{k\le t+1}\binom nk$ 이고 국소화 행렬은 $m$ 개다. $t$ 가 고정되면 반정부호 계획의 크기가 $n$ 의 다항식이고, 타원체법이나 내점법으로 $\mathrm{Las}\_t(P)$ 위의 선형 최적화를 오차 $\varepsilon$ 안에서 $n^{O(t)}\log(1/\varepsilon)$ 시간에 푼다.[^1]

## 세타 몸체

안정집합 다면체의 변 완화 $\mathrm{FRAC}(G)$ 에서 $\mathrm{Las}\_1(\mathrm{FRAC}(G))$ 는 [Lovász 세타 함수](lovasz-theta.md)의 세타 몸체 $\mathrm{TH}(G)$ 에 포함된다. 단계 $1$ 의 국소화 행렬에서 변 $ij$ 마다 $y_{ij}=0$ 이 나오고, 그러면 $M_1(y)$ 의 반정부호 조건이 세타 몸체를 정의하는 조건이 된다. 직관 절의 계산은 완전그래프에서 이 조건이 클릭 부등식을 함의한다는 것이다.[^2]

## 제곱합 증명서

$\mathrm{Las}\_t(P)$ 위의 최적화의 쌍대 문제는 제곱합 증명서를 찾는 문제다. 부등식 $c^Tx\le d$ 가

$$
d-c^Tx=\sigma_0(x)+\sum_l\sigma_l(x)g_l(x)+\sum_ir_i(x)(x_i^2-x_i)
$$

로 쓰이고 $\sigma_0$ 이 차수 $2t+2$ 이하, $\sigma_l$ 이 차수 $2t$ 이하의 다항식 제곱의 합이며 $r_i$ 가 임의의 다항식이면, $c^Tx\le d$ 는 $\mathrm{Las}\_t(P)$ 에서 성립한다. 직관 절의 $1-s=(s-1)^2+(s-s^2)$ 에서 $s-s^2$ 를 $x_i^2-x_i$ 와 $x_ix_j$ 의 배수로 정리한 것이 그런 증명서다. 이 증명 체계를 Positivstellensatz 증명(Positivstellensatz proof)이라 하고, 차수 $t$ 를 증명의 길이 대신 복잡도로 쓴다.[^1]

## 단계의 하한

변수 $n$ 개의 무작위 3-XOR(exclusive or) 연립방정식, 곧 세 변수의 합을 2 로 나눈 나머지를 정한 방정식들은 방정식 수가 $n$ 의 충분히 큰 상수배이면 높은 확률로 만족하는 해가 없는데도, $\Omega(n)$ 단계의 Lasserre 완화가 모든 방정식을 만족하는 점을 포함한다.[^3] Grigoriev 는 $\sum_ix_i=r$ 이 $0$-$1$ 해를 갖지 않는 정수 아닌 $r$ 에서도 이 사실을 증명하는 데 $\min(r,n-r)$ 에 비례하는 차수가 필요함을 보였다.[^4]

# 활용

- **반올림 알고리즘.** [근사 알고리즘](approximation-algorithms.md)에서 쓰는 예로, 변수를 $\pm 1$ 로 쓴 최대 절단 문제에서 Goemans–Williamson 알고리즘이 반올림하는 반정부호 완화는, 모멘트 행렬을 크기 $1$ 이하의 집합으로 자른 것이 반정부호라는 조건과 같다.
- **근사 불가능성의 증거.** 어떤 문제의 Lasserre 완화가 많은 단계에서도 정수 간격을 줄이지 못하면, 반정부호 계획에 기댄 다항시간 알고리즘의 한계가 된다. [유일게임 추측과 2-to-2 정리](unique-games.md)가 예측하는 근사 한계와 이 하한이 견주어진다.
- **다항식 최적화.** 정수 조건이 없는 다항식 최소화에서도 같은 모멘트 행렬과 제곱합 증명서로 전역 최솟값의 하한의 열을 만든다. 이 열은 기본 반대수 집합(basic semialgebraic set)이 아르키메데스 조건(Archimedean condition)을 만족하면 Putinar 의 Positivstellensatz(Putinar's Positivstellensatz)에 따라 최솟값으로 수렴한다.[^1]

[^1]: J. B. Lasserre, "Global optimization with polynomials and the problem of moments", SIAM Journal on Optimization 11 (2001), 796–817.
[^2]: M. Laurent, "A comparison of the Sherali–Adams, Lovász–Schrijver, and Lasserre relaxations for 0–1 programming", Mathematics of Operations Research 28 (2003), 470–496.
[^3]: G. Schoenebeck, "Linear level Lasserre lower bounds for certain k-CSPs", Proceedings of the 49th IEEE Symposium on Foundations of Computer Science (2008), 593–602.
[^4]: D. Grigoriev, "Complexity of Positivstellensatz proofs for the knapsack", Computational Complexity 10 (2001), 139–154.

# 연관 문서

## 선수지식

- [Sherali–Adams 계층](sherali-adams-hierarchy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #complexity #combinatorics
