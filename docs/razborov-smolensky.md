# Razborov–Smolensky 정리

# 개요

**Razborov–Smolensky 정리(Razborov–Smolensky theorem)** 는 $p$ 와 $q$ 가 서로 다른 소수일 때, AND, OR, NOT 게이트에 법 $p$ 게이트를 더한 상수 깊이 다항 크기 회로가 법 $q$ 함수를 계산하지 못한다는 정리다. A. A. Razborov 가 1987 년에 $p=2$ 의 다수결 함수에 대해 증명했고[^1], 같은 해 R. Smolensky 가 일반 꼴로 증명했다[^2].

[불 회로](boolean-circuits.md)의 상수 깊이 하한은 [Håstad 스위칭 보조정리](switching-lemma.md)로 홀짝 함수에 대해 증명된다. 홀짝 게이트를 회로에 넣으면 그 논증이 통하지 않으므로, 이 정리는 회로를 [유한체](finite-fields.md) 위의 낮은 차수 다항식으로 근사하는 다른 논증을 쓴다.

# 직관

홀짝 게이트를 쓸 수 있는 회로에서는 변수를 무작위로 고정해도 홀짝 게이트가 남은 변수의 홀짝으로 남을 뿐 상수가 되지 않는다. 그래서 변수 고정 대신 회로를 $\mathbb F_3$ 위의 다항식으로 쓴다. $k$ 비트의 OR 를 정확히 쓰면 $1-(1-x_1)\cdots(1-x_k)$ 이고 차수가 $k$ 다. 깊이를 거듭하면 차수가 곱으로 늘어 금방 $n$ 에 닿는다.

차수를 줄이려고 계수 $c_1,\dots,c_k$ 를 $\mathbb F_3$ 에서 무작위로 골라 $g=(c_1x_1+\cdots+c_kx_k)^2$ 을 쓴다. 모든 $x_i$ 가 $0$ 이면 $g=0$ 이다. 어떤 $x_j$ 가 $1$ 이면 $c_j$ 가 고르게 뽑히므로 합이 $\mathbb F_3$ 에 고르게 퍼지고, 확률 $2/3$ 로 $g=1$ 이다. 이것을 $\ell$ 번 독립으로 만들어 $1-(1-g_1)\cdots(1-g_\ell)$ 로 묶으면 차수가 $2\ell$ 이고 틀릴 확률이 $3^{-\ell}$ 이하다. 차수가 $k$ 와 무관하므로 깊이 $d$ 회로 전체도 차수 $(2\ell)^d$ 의 다항식으로 거의 모든 입력에서 맞게 쓰인다.

반대쪽에서 입력을 $0,1$ 대신 $1,-1$ 로 쓰면 홀짝 함수는 곱 $y_1y_2\cdots y_n$ 이고 차수가 $n$ 이다. 차수 $\sqrt n$ 의 다항식은 이 곱과 입력 대부분에서 같을 수 없다. 두 계산을 맞대면 회로의 크기가 커야 한다는 결론이 나온다.

# 정의

## 법 게이트

정수 $m\ge 2$ 에 대해 **법 $m$ 함수(MOD-m function)** 는 다음이다.

$$
\mathrm{MOD}\_m(x_1,\dots,x_k)=\begin{cases}0 & x_1+\cdots+x_k\equiv 0 \pmod m\cr 1 & \text{그 밖}\end{cases}
$$

$\mathrm{MOD}\_2$ 는 홀짝 함수다. 법 $m$ 게이트는 들어오는 변의 수에 제한이 없고 이 함수를 계산하는 게이트다.

## AC0[p]

소수 $p$ 에 대해 $\mathrm{AC}^0\lbrack p\rbrack$ 는 AND, OR, NOT, 법 $p$ 게이트로 된 상수 깊이, 다항 크기 회로 족이 계산하는 함수의 부류다. AND 와 OR 와 법 $p$ 게이트의 들어오는 변의 수에는 제한이 없다. 법 게이트가 없는 부류가 $\mathrm{AC}^0$(alternating circuit)이다.

## 근사 다항식

$\mathbb F_p$ 위의 다항식 $P(x_1,\dots,x_n)$ 이 불 함수 $f$ 를 **$\varepsilon$-근사(ε-approximation)** 한다는 것은 $\lbrace 0,1\rbrace^n$ 의 점 가운데 $P(x)\ne f(x)$ 인 것의 비율이 $\varepsilon$ 이하라는 것이다.

# 성질

## Razborov–Smolensky 정리

정리. $p$ 가 소수이고 $q$ 가 $p$ 의 거듭제곱이 아니면, 깊이 $d$ 의 $\mathrm{AC}^0\lbrack p\rbrack$ 회로가 $\mathrm{MOD}\_q$ 를 계산하려면 크기가 $2^{\Omega(n^{1/(2d)})}$ 이상이어야 한다[^2]. 다수결 함수도 같은 하한을 만족한다[^1].

아래의 증명의 요지는 $p=3$, $q=2$ 의 경우다. 일반 경우는 $\mathbb F_p$ 를 1 의 원시 $q$ 제곱근을 포함하는 확대체로 바꾸어 같은 꼴로 간다.

## 근사 보조정리

보조정리. 깊이 $d$, 크기 $s$ 의 $\mathrm{AC}^0\lbrack 3\rbrack$ 회로가 계산하는 함수는 모든 $\ell\ge 1$ 에 대해 차수 $(2\ell)^d$ 이하의 $\mathbb F_3$ 다항식으로 $s\cdot 3^{-\ell}$-근사된다.

증명의 요지. 게이트마다 근사 다항식을 정한다. NOT 은 $1-x$ 이고 법 $3$ 게이트는 $(x_1+\cdots+x_k)^2$ 이며 둘 다 정확하다. OR 는 직관 절의 무작위 다항식이고 고정된 입력에서 틀릴 확률이 $3^{-\ell}$ 이하다. AND 는 [De Morgan 법칙](de-morgan-laws.md)으로 OR 와 NOT 으로 쓴다. 입력 쪽부터 차례로 대입하면 층마다 차수가 많아야 $2\ell$ 배가 되고, 고정된 입력에서 게이트 하나라도 틀릴 확률은 합집합 상한으로 $s\cdot 3^{-\ell}$ 이하다. 무작위 선택에 대해 틀리는 입력의 비율의 기댓값이 $s\cdot 3^{-\ell}$ 이하이므로 이 값 이하인 선택이 존재한다.

## 홀짝 함수의 근사 불가능

보조정리. 차수 $\sqrt n$ 이하의 $\mathbb F_3$ 다항식이 $n$ 비트 홀짝 함수와 같은 값을 갖는 입력은 $\frac{49}{50}\cdot 2^n$ 개 미만이다(충분히 큰 $n$).

증명의 요지. $y_i=1-2x_i$ 로 바꾸면 $y_i\in\lbrace 1,-1\rbrace$ 이고, 홀짝 함수 $h$ 는 $1-2h=y_1\cdots y_n$ 을 만족한다. 차수 $\sqrt n$ 의 $P$ 가 $h$ 와 같은 입력의 집합을 $G$ 라 하면 $G$ 위에서 $y_1\cdots y_n$ 이 차수 $\sqrt n$ 의 다항식 $Q=1-2P$ 와 같다. $G$ 위의 함수 $f:G\to\mathbb F_3$ 는 다중선형 다항식으로 쓰이고, 그 단항식 $\prod_{i\in I}y_i$ 의 차수가 $n/2$ 를 넘으면 $y_i^2=1$ 이므로 $\prod_{i\in I}y_i=Q\cdot\prod_{i\notin I}y_i$ 로 바꾸어 차수가 $n/2+\sqrt n$ 이하가 된다. 따라서 $3^{\lvert G\rvert}$ 개의 함수가 차수 $n/2+\sqrt n$ 이하의 다중선형 단항식들의 일차결합으로 모두 쓰이고, $\lvert G\rvert$ 는 그런 단항식의 수 $\sum_{i\le n/2+\sqrt n}\binom ni$ 이하다. 이항계수의 합을 정규분포로 근사하면 이 합은 $\frac{49}{50}\cdot 2^n$ 미만이다.

## 두 보조정리의 결합

깊이 $d$, 크기 $s$ 의 $\mathrm{AC}^0\lbrack 3\rbrack$ 회로가 홀짝 함수를 계산한다고 둔다. $(2\ell)^d=\sqrt n$, 곧 $\ell=n^{1/(2d)}/2$ 로 잡으면(정수가 되도록 내림한다) 근사 보조정리로 차수 $\sqrt n$ 의 다항식이 홀짝 함수와 비율 $1-s\cdot 3^{-\ell}$ 이상의 입력에서 같다. 근사 불가능 보조정리로 $1-s\cdot 3^{-\ell}\lt 49/50$ 이므로 $s\gt 3^{\ell}/50=2^{\Omega(n^{1/(2d)})}$ 이다.

# 활용

- [자연 증명](natural-proofs.md). Razborov–Smolensky 정리의 성질 "낮은 차수 다항식으로 근사되지 않는다" 는 구성적이고 넓으므로 자연 증명이다. 따라서 이 방법은 유사난수 함수가 있는 회로 부류의 하한에는 쓰이지 않는다.
- 법 $m$ 이 합성수인 회로. $m=6$ 처럼 서로 다른 소수 둘의 곱을 법으로 하는 게이트를 쓴 상수 깊이 회로에서는 이 논증이 통하지 않는다. NEXP(nondeterministic exponential time) 가 그런 다항 크기 회로 족, 곧 $\mathrm{ACC}^0$(alternating circuit with counters) 에 들지 않는다는 것을 R. Williams 가 2011 년에 다른 방법으로 증명했다([Williams 정리](williams-theorem.md))[^3].

[^1]: A. A. Razborov, "Lower bounds on the size of bounded depth networks over a complete basis with logical addition", Mathematical Notes of the Academy of Sciences of the USSR 41(4) (1987), 333–338.
[^2]: R. Smolensky, "Algebraic methods in the theory of lower bounds for Boolean circuit complexity", Proceedings of the 19th ACM Symposium on Theory of Computing (1987), 77–82.
[^3]: R. Williams, "Nonuniform ACC circuit lower bounds", Journal of the ACM 61(1) (2014), 2:1–2:32. 학회 판은 CCC 2011.

# 연관 문서

## 선수지식

- [불 회로](boolean-circuits.md)
- [유한체](finite-fields.md)

## 더 알아보기

- [Williams 정리](williams-theorem.md)

#complexity #computation #field_theory #combinatorics
