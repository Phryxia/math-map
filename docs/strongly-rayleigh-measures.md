# 강한 Rayleigh 측도

# 개요

**강한 Rayleigh 측도(strongly Rayleigh measure)** 는 원소들의 부분집합을 무작위로 고르는 분포 가운데, 생성다항식이 [실안정 다항식](real-stable-polynomials.md)인 것이다. 삼각형의 신장트리 셋 가운데 하나를 고르게 뽑으면, 한 변이 트리에 들어 있다는 것을 알 때 다른 변이 들어 있을 확률이 줄어든다. 이런 음의 상관이 조건을 걸거나 무게를 바꾼 뒤에도 남는지가 물음이다. 강한 Rayleigh 측도는 생성다항식의 실안정성이 조건화와 무게 바꾸기에 대해 유지된다는 것으로 이 물음에 답한다.

# 직관

삼각형의 세 변을 $1, 2, 3$ 이라 한다. 신장트리는 변 두 개로 된 $\lbrace 1,2\rbrace$, $\lbrace 1,3\rbrace$, $\lbrace 2,3\rbrace$ 셋이고, 하나를 고르게 뽑는다. 변 하나가 트리에 들어 있을 확률은 $2/3$ 이고, 변 $1$ 과 $2$ 가 함께 들어 있을 확률은 $1/3$ 이다. $1/3$ 은 $2/3 \cdot 2/3 = 4/9$ 보다 작다.

트리의 변은 둘로 정해져 있으므로 변 $1$ 이 들어 있으면 나머지 자리 하나를 변 $2$ 와 $3$ 이 나눠 갖는다.

트리마다 변수의 곱을 적어 더하면 생성다항식 $p = z_1z_2 + z_1z_3 + z_2z_3$ 이 나온다. 모든 $z_i$ 에 $1$ 을 넣으면 트리의 수 $3$ 이고, $\partial_{z_1}p = z_2 + z_3$ 에 $1$ 을 넣으면 변 $1$ 을 포함하는 트리의 수 $2$, $\partial_{z_1}\partial_{z_2}p = 1$ 은 변 $1, 2$ 를 함께 포함하는 트리의 수다. 그래서 음의 상관 $1/3 \le (2/3)^2$ 은 $p\thinspace\partial_{z_1}\partial_{z_2}p \le \partial_{z_1}p\thinspace\partial_{z_2}p$ 를 $z = (1,1,1)$ 에서 확인한 것이다.

변 $3$ 에 무게 $\lambda \gt 0$ 을 주어 트리의 확률을 무게의 곱에 비례하게 바꾸면, 같은 계산을 $z = (1,1,\lambda)$ 에서 하게 된다. 다음을 계산하면 모든 실수 $z$ 에서 $0$ 이상이므로 무게를 어떻게 주어도 음의 상관이 남는다.

$$
\partial_{z_1}p\thinspace\partial_{z_2}p - p\thinspace\partial_{z_1}\partial_{z_2}p = (z_2 + z_3)(z_1 + z_3) - (z_1z_2 + z_1z_3 + z_2z_3) = z_3^2
$$

# 정의

## 생성다항식

$\lbrack n\rbrack = \lbrace 1, \dots, n\rbrace$ 의 부분집합 위의 확률측도 $\mu$ 의 **생성다항식(generating polynomial)** 은 다음이다.

$$
g_\mu(z) = \sum_{S \subseteq \lbrack n\rbrack}\mu(S)\prod_{i \in S}z_i
$$

각 변수의 차수가 $1$ 이하인 다항식이고, 이런 다항식을 다중 일차(multiaffine)라 한다. 직관 절의 측도는 $g_\mu = (z_1z_2 + z_1z_3 + z_2z_3)/3$ 이다.

## 강한 Rayleigh 측도

$g_\mu$ 가 실안정 다항식인 $\mu$ 를 강한 Rayleigh 측도라 한다[^1]. 다중 일차 다항식 $g$ 가 실안정인 것은 모든 $i, j$ 와 모든 $x \in \mathbb R^n$ 에서 다음이 성립하는 것과 동치다[^2].

$$
\partial_i g(x)\thinspace\partial_j g(x) \ge g(x)\thinspace\partial_i\partial_j g(x)
$$

직관 절의 계산이 $i = 1$, $j = 2$ 에서 이 부등식을 확인한 것이고, 대칭성으로 다른 쌍도 같다.

## 음의 연관

$F \subseteq \lbrack n\rbrack$ 의 원소에만 의존하는 증가 함수 $f$ 와 $F$ 와 겹치지 않는 집합의 원소에만 의존하는 증가 함수 $h$ 가 항상 $\mu(fh) \le \mu(f)\mu(h)$ 를 만족하면 $\mu$ 가 **음의 연관(negative association)** 을 갖는다고 한다. 직관 절에서 $f$ 와 $h$ 를 "변 $1$ 이 트리에 있다" 와 "변 $2$ 가 트리에 있다" 의 지시함수로 두면 $1/3 \le 4/9$ 다.

# 성질

## 음의 연관 정리

강한 Rayleigh 측도는 음의 연관을 갖는다[^1]. [FKG 부등식](fkg-inequality.md)(Fortuin–Kasteleyn–Ginibre inequality)이 격자 조건에서 양의 상관을 주는 것과 반대 방향이고, 서로 겹치는 좌표에 의존하는 함수에는 성립하지 않는다.

## 닫힘 성질

$\mu$ 가 강한 Rayleigh 측도이면 다음도 강한 Rayleigh 측도다[^1].

- 조건화. $i \in S$ 로 조건화한 측도의 생성다항식은 $\partial_i g_\mu$ 에 비례하고, $i \notin S$ 로 조건화한 것은 $z_i = 0$ 을 넣은 것에 비례한다.
- 무게 바꾸기. 양수 $\lambda_i$ 에 대해 $\mu(S)\prod_{i \in S}\lambda_i$ 에 비례하는 측도의 생성다항식은 $g_\mu(\lambda_1z_1, \dots, \lambda_nz_n)$ 에 비례한다.
- 주변분포. $T$ 에 대한 주변분포의 생성다항식은 $T$ 밖의 변수에 $1$ 을 넣은 것이다.

세 연산 모두 실안정 다항식에 미분, 실수 대입, 양수배를 한 것이므로 실안정성이 유지된다.

## 크기의 분포

강한 Rayleigh 측도에서 뽑은 집합의 크기 $\lvert S\rvert$ 는 독립인 Bernoulli 확률변수들의 합과 분포가 같다. 모든 변수에 $t$ 를 넣은 $g_\mu(t, \dots, t)$ 는 실안정이라 근이 모두 실수이고, 계수가 음이 아니므로 근은 $0$ 이하다. 그래서 $g_\mu(t, \dots, t) = \prod_k(1 - p_k + p_kt)$ 로 인수분해된다. 직관 절에서는 크기가 항상 $2$ 이고 $t^2 = (0 + 1\cdot t)^2$ 이다.

## 예

- 곱 측도. 생성다항식이 $\prod_i(1 - p_i + p_iz_i)$ 이고 실안정 다항식의 곱이다.
- 균등 신장트리. 생성다항식이 행렬-트리 정리(matrix-tree theorem)로 [그래프 Laplacian](graph-laplacian.md)의 소행렬식이 되고, 양의 준정부호 행렬의 행렬식이므로 실안정이다.
- [결정점과정](determinantal-point-process.md). 핵 $K$ 가 $0 \le K \le I$ 인 Hermite 행렬인 유한 행렬식 점과정은 강한 Rayleigh 측도다[^1].

# 활용

- [외판원 문제](traveling-salesman-problem.md). Karlin, Klein, Oveis Gharan 은 신장트리 위의 최대 엔트로피 분포가 강한 Rayleigh 측도라는 것을 써서, 거리 함수가 삼각부등식을 만족하는 외판원 문제의 근사비를 $3/2$ 보다 조금 작게 낮췄다[^3].
- [집중부등식](concentration-inequalities.md). 강한 Rayleigh 측도에서 원소 하나를 더하거나 빼면 $1$ 이하로 바뀌는 함수는 평균에서 벗어날 확률이 독립인 경우와 같은 꼴의 Gauss 꼬리 상한을 갖는다[^4]. 균등 신장트리와 결정점과정에 이 상한을 쓴다.

[^1]: J. Borcea, P. Brändén, T. M. Liggett, "Negative dependence and the geometry of polynomials", Journal of the American Mathematical Society 22 (2009), 521–567.
[^2]: P. Brändén, "Polynomials with the half-plane property and matroid theory", Advances in Mathematics 216 (2007), 302–320.
[^3]: A. R. Karlin, N. Klein, S. Oveis Gharan, "A (slightly) improved approximation algorithm for metric TSP", Proceedings of the 53rd ACM Symposium on Theory of Computing (2021), 32–45.
[^4]: R. Pemantle, Y. Peres, "Concentration of Lipschitz functionals of determinantal and other strong Rayleigh measures", Combinatorics, Probability and Computing 23 (2014), 140–160.

# 연관 문서

## 선수지식

- [실안정 다항식](real-stable-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #linear_algebra
