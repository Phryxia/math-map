# FKG 부등식

# 개요

**FKG 부등식(Fortuin–Kasteleyn–Ginibre inequality)** 은 서로 영향을 주는 동전들이라도 같은 면으로 맞춰지려는 경향만 있으면, 앞면이 늘수록 일어나기 쉬운 두 사건이 서로 일어날 확률을 낮추지 않는다는 부등식이다. 격자에 자석을 늘어놓고 이웃한 자석이 같은 쪽을 가리키기 쉽게 만든 모형에서 "왼쪽 위 자석이 위를 가리킨다" 와 "오른쪽 아래 자석이 위를 가리킨다" 가 함께 일어날 확률이 각 확률의 곱 이상인지가 이런 물음이다. 자석들이 독립이 아니어서 [Harris 부등식](harris-inequality.md)은 쓸 수 없다. 이 부등식은 두 배정의 자리별 최댓값과 최솟값에 대한 부등식 하나를 확률분포가 만족하는지만 확인하게 해 이 물음에 답한다.

# 직관

동전 두 개 $X_1, X_2$ 를 던지는데 두 동전이 독립이 아니다. 앞면을 $1$ 로 적고, 네 결과의 확률을 두 가지로 정한다. $\mu$ 는 두 동전이 같은 면을 보이기 쉬운 분포이고 $\nu$ 는 다른 면을 보이기 쉬운 분포다.

| 결과       | 00  | 01  | 10  | 11  |
| ---------- | --- | --- | --- | --- |
| 분포 $\mu$ | 3/8 | 1/8 | 1/8 | 3/8 |
| 분포 $\nu$ | 1/8 | 3/8 | 3/8 | 1/8 |

$A$ 는 "$X_1 = 1$", $B$ 는 "$X_2 = 1$" 인 사건이고 둘 다 증가 사건이다. 두 분포 모두에서 $P(A) = P(B) = 1/2$ 이고 곱은 $1/4$ 이다. $\mu$ 에서는 $P(A \cap B) = 3/8$ 로 곱보다 크고, $\nu$ 에서는 $1/8$ 로 작다. 동전이 독립이 아니면 증가 사건 둘의 상관이 음수일 수 있다.

두 분포를 가르는 것은 같은 면이 나오는 결과와 다른 면이 나오는 결과의 확률이다. $\mu$ 는 $\mu(11)\mu(00) = 9/64$ 가 $\mu(10)\mu(01) = 1/64$ 이상이고, $\nu$ 는 반대다. 네 확률의 합이 $1$ 이라는 것을 쓰면 다음이 나온다.

$$
P(A \cap B) - P(A)P(B) = \mu(11)\mu(00) - \mu(10)\mu(01)
$$

동전 두 개에서는 $\mu(11)\mu(00) \ge \mu(10)\mu(01)$ 과 양의 상관이 같은 조건이다.

$10$ 과 $01$ 에서 자리마다 큰 값을 고르면 $11$, 작은 값을 고르면 $00$ 이 된다. 동전이 $n$ 개일 때도 모든 두 결과에 대해 "자리별 최댓값의 확률과 자리별 최솟값의 확률의 곱이 두 결과의 확률의 곱 이상" 을 요구한다. FKG 부등식은 이 조건 하나에서 모든 증가 사건 둘의 양의 상관이 따라 나온다는 정리다.

# 정의

## FKG 격자 조건

$\lbrace 0,1\rbrace^n$ 의 두 점 $x, y$ 에 대해 $x \vee y$ 는 자리마다 큰 값을, $x \wedge y$ 는 자리마다 작은 값을 고른 점이다. $\lbrace 0,1\rbrace^n$ 위의 확률측도 $\mu$ 가 모든 $x, y$ 에 대해 다음을 만족하면 $\mu$ 가 **FKG 격자 조건(FKG lattice condition)** 을 만족한다고 한다.

$$
\mu(x \vee y)\thinspace\mu(x \wedge y) \ge \mu(x)\thinspace\mu(y)
$$

$x \le y$ 이면 $x \vee y = y$, $x \wedge y = x$ 라서 등식이다. 직관 절의 $\mu$ 에서 비교할 수 없는 쌍은 $10$ 과 $01$ 뿐이고 $9/64 \ge 1/64$ 이므로 조건을 만족한다. $\nu$ 는 $1/64 \lt 9/64$ 라서 만족하지 않는다. 모든 점에서 양수인 $\mu$ 에 대해서는 $\log\mu$ 가 초모듈러(supermodular)라는 조건과 같아서 로그 초모듈러 조건이라고도 한다.

## 양의 연관

$\mu$ 에 대한 기댓값을 $\mu(f) = \sum_x f(x)\mu(x)$ 로 적는다. 모든 증가 함수 $f, g$ 에 대해 $\mu(fg) \ge \mu(f)\mu(g)$ 이면 $\mu$ 가 **양의 연관(positive association)** 을 갖는다고 한다. 직관 절의 $\nu$ 는 $f$ 와 $g$ 를 $A$ 와 $B$ 의 지시함수로 두면 이 부등식이 깨지므로 양의 연관을 갖지 않는다.

## 확률적 지배

같은 $\lbrace 0,1\rbrace^n$ 위의 확률측도 $\mu_1, \mu_2$ 가 모든 증가 함수 $f$ 에 대해 $\mu_1(f) \ge \mu_2(f)$ 를 만족하면 $\mu_1$ 이 $\mu_2$ 를 **확률적으로 지배한다(stochastically dominates)** 고 한다. 직관 절의 $\mu$ 에서 $X_2 = 1$ 로 조건화하면 $X_1 = 1$ 일 확률이 $3/4$ 이고, $X_2 = 0$ 으로 조건화하면 $1/4$ 다. 앞의 조건부 분포가 뒤의 것을 확률적으로 지배한다.

# 성질

## Holley 부등식

모든 점에서 양수인 $\mu_1, \mu_2$ 가 모든 $x, y$ 에 대해 다음을 만족하면 $\mu_1$ 이 $\mu_2$ 를 확률적으로 지배한다[^2]. 이것을 Holley 부등식(Holley inequality)이라 한다.

$$
\mu_1(x \vee y)\thinspace\mu_2(x \wedge y) \ge \mu_1(x)\thinspace\mu_2(y)
$$

증명의 요지. 자리 하나를 무작위로 골라 그 자리의 값을 나머지 자리로 조건화한 확률로 다시 뽑는 [Markov 연쇄](markov-chains.md)를 $\mu_1$ 과 $\mu_2$ 에 하나씩 만든다. $x \ge y$ 이고 $i$ 번째 자리를 고쳐 뽑을 때, 가정을 $i$ 번째 자리만 $0$ 으로 바꾼 $x$ 와 $1$ 로 바꾼 $y$ 에 쓰면 $x$ 쪽에서 $1$ 을 뽑을 조건부 확률이 $y$ 쪽 이상이다. 그래서 같은 균등 난수로 두 연쇄를 함께 움직이면 $X_t \ge Y_t$ 가 유지된다. 두 연쇄는 각각 $\mu_1$ 과 $\mu_2$ 로 수렴하므로 증가 함수의 기댓값은 $\mu_1$ 쪽이 크다.

## FKG 정리

모든 점에서 양수이고 FKG 격자 조건을 만족하는 $\mu$ 는 양의 연관을 갖는다[^1]. 증가 함수 $f, g$ 에 대해 다음이 성립한다.

$$
\mu(fg) \ge \mu(f)\thinspace\mu(g)
$$

증명의 요지. $n$ 에 대한 귀납법을 쓴다. $X_n = s$ 로 조건화한 앞 $n-1$ 자리의 분포를 $\mu_s$ 로 적으면 $\mu_0, \mu_1$ 도 격자 조건을 만족하므로, 귀납 가정으로 $\mu(fg \mid X_n) \ge \mu(f \mid X_n)\thinspace\mu(g \mid X_n)$ 이다.

앞 $n-1$ 자리가 $x^\prime$ 이고 마지막 자리가 $1$ 인 점과, 앞이 $y^\prime$ 이고 마지막이 $0$ 인 점의 자리별 최댓값은 $(x^\prime \vee y^\prime, 1)$, 최솟값은 $(x^\prime \wedge y^\prime, 0)$ 이다. 그래서 $\mu_1, \mu_0$ 은 Holley 부등식의 가정을 만족하고, $\mu(f \mid X_n)$ 과 $\mu(g \mid X_n)$ 은 $X_n$ 의 증가 함수다. 남은 것은 동전 하나에서의 Harris 부등식이다.

## 곱 측도와 Harris 부등식

좌표가 독립이고 $P(X_i = 1) = p_i$ 인 곱 측도는 다음과 같다.

$$
\mu(x) = \prod_{i=1}^n p_i^{x_i}(1-p_i)^{1-x_i}
$$

자리마다 두 값 $x_i \vee y_i$, $x_i \wedge y_i$ 는 두 값 $x_i$, $y_i$ 를 순서만 바꾼 것이므로 격자 조건이 등식으로 성립한다. Harris 부등식은 FKG 정리에서 $\mu$ 를 곱 측도로 둔 경우다.

## Ising 측도

그래프 $G = (V, E)$ 의 정점마다 스핀 $\sigma_v \in \lbrace -1, +1\rbrace$ 을 두고, $+1$ 을 $1$ 로, $-1$ 을 $0$ 으로 읽는다. $\beta \ge 0$ 인 Ising 측도는 다음과 같다.

$$
\mu(\sigma) \propto \exp\Big(\beta\sum_{uv \in E}\sigma_u\sigma_v + h\sum_{v \in V}\sigma_v\Big)
$$

$\log\mu(\sigma \vee \tau) + \log\mu(\sigma \wedge \tau) - \log\mu(\sigma) - \log\mu(\tau)$ 에서 $h$ 의 항은 지워지고, 변 $uv$ 마다 두 자리만 보면 되는 항이 남는다. 그 항은 두 자리에서 $\sigma$ 와 $\tau$ 가 비교되면 $0$ 이고, 비교되지 않으면 $(+,+)$ 와 $(-,-)$ 의 값의 합 $2\beta$ 에서 $(+,-)$ 와 $(-,+)$ 의 값의 합 $-2\beta$ 를 뺀 $4\beta$ 다. 그래서 Ising 측도는 격자 조건을 만족하고, 두 스핀은 $\mu(\sigma_u\sigma_v) \ge \mu(\sigma_u)\mu(\sigma_v)$ 를 만족한다.

## Ahlswede–Daykin 네 함수 정리

$\lbrace 0,1\rbrace^n$ 위의 음이 아닌 함수 $\alpha, \beta, \gamma, \delta$ 가 모든 $x, y$ 에 대해 $\alpha(x)\beta(y) \le \gamma(x \vee y)\delta(x \wedge y)$ 를 만족하면, 모든 부분집합 $\mathcal A, \mathcal B$ 에 대해 다음이 성립한다[^3]. 이것을 Ahlswede–Daykin 네 함수 정리(Ahlswede–Daykin four functions theorem)라 한다.

$$
\alpha(\mathcal A)\thinspace\beta(\mathcal B) \le \gamma(\mathcal A \vee \mathcal B)\thinspace\delta(\mathcal A \wedge \mathcal B)
$$

여기서 $\alpha(\mathcal A)$ 는 $\mathcal A$ 위의 $\alpha$ 값의 합이고, $\mathcal A \vee \mathcal B$ 는 $a \in \mathcal A$, $b \in \mathcal B$ 로 만든 $a \vee b$ 전체다. 네 함수를 모두 $\mu$ 로 두고 $\mathcal A, \mathcal B$ 를 증가 사건으로 잡으면 $\mathcal A \vee \mathcal B$ 는 $\mathcal A \cap \mathcal B$ 에 포함되고 $\mu(\mathcal A \wedge \mathcal B) \le 1$ 이므로 사건에 대한 FKG 부등식이 나온다.

## 분배격자

$\lbrace 0,1\rbrace^n$ 대신 [순서론의 격자](order-lattices.md) 가운데 유한 분배격자에서 같은 격자 조건을 두어도 FKG 정리가 성립한다. Fortuin, Kasteleyn, Ginibre 의 원래 진술이 이 꼴이다[^1].

# 활용

- [Ising 모형](ising-model.md). 강자성 Ising 측도가 격자 조건을 만족하므로 증가 함수 둘이 양의 상관을 갖는다. 바깥 스핀을 $+1$ 로 고정한 상자를 키울 때 원점 스핀의 기댓값이 줄어드는 것이 이것으로 증명된다.
- [Potts 모형](potts-model.md)의 무작위 클러스터 표현. $q \ge 1$ 이면 간선 배정 위의 무작위 클러스터 측도가 격자 조건을 만족한다[^4]. 그래서 [침투](percolation.md)에서 Harris 부등식으로 하던 횡단 사건의 결합을 간선이 독립이 아닌 이 측도에서도 한다.
- [XYZ 부등식](xyz-inequality.md). 유한 [부분순서](partial-orders.md)의 선형 확장을 고르게 뽑을 때 사건 "$x \lt y$" 와 "$x \lt z$" 가 양의 상관을 갖는다는 부등식이고, Shepp 이 FKG 부등식으로 증명했다[^5].

[^1]: C. M. Fortuin, P. W. Kasteleyn, J. Ginibre, "Correlation inequalities on some partially ordered sets", Communications in Mathematical Physics 22 (1971), 89–103.
[^2]: R. Holley, "Remarks on the FKG inequalities", Communications in Mathematical Physics 36 (1974), 227–231.
[^3]: R. Ahlswede, D. E. Daykin, "An inequality for the weights of two families of sets, their unions and intersections", Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete 43 (1978), 183–185.
[^4]: G. Grimmett, The Random-Cluster Model, Springer, 2006, 3장.
[^5]: L. A. Shepp, "The XYZ conjecture and the FKG inequality", The Annals of Probability 10 (1982), 824–827.

# 연관 문서

## 선수지식

- [Harris 부등식](harris-inequality.md)

## 더 알아보기

- [XYZ 부등식](xyz-inequality.md)

#combinatorics #probability #order_theory
