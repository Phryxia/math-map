# 끼움 족

# 개요

**끼움 족(interlacing family, 교대 족)** 은 다항식 여러 개를 평균한 다항식의 가장 큰 근으로, 그 가운데 어느 하나의 가장 큰 근을 위에서 누를 수 있게 하는 다항식들의 모임이다. 삼각형의 세 변에 $+1$ 이나 $-1$ 을 하나씩 붙이는 방법은 여덟 가지이고, 붙인 수로 행렬을 만들면 행렬 여덟 개가 생긴다. 이 가운데 가장 큰 고윳값이 작은 행렬이 있는지를 행렬의 평균으로는 알 수 없다. 행렬마다 고윳값을 근으로 갖는 다항식을 만들어 그 다항식들을 평균하고, 다항식들이 끼움 족을 이루면 평균 다항식의 가장 큰 근 이하인 행렬이 존재한다.

# 직관

삼각형의 꼭짓점을 $1, 2, 3$ 이라 하고 변 $\lbrace i,j\rbrace$ 에 부호 $s_{ij} = \pm 1$ 을 붙인다. $(i,j)$ 성분과 $(j,i)$ 성분이 $s_{ij}$ 이고 대각성분이 $0$ 인 $3\times 3$ 대칭행렬을 $A_s$ 라 한다. [고윳값](eigenvalues.md)을 계산하면 세 부호의 곱이 $+1$ 인 네 행렬은 $2, -1, -1$ 이고, 곱이 $-1$ 인 네 행렬은 $1, 1, -2$ 다. 가장 큰 고윳값은 $2$ 이거나 $1$ 이다.

여덟 행렬을 평균하면 부호가 서로 지워져 영행렬이 되고, 가장 큰 고윳값은 $0$ 이다. 그런데 가장 큰 고윳값이 $0$ 이하인 $A_s$ 는 없다. 가장 큰 고윳값은 행렬에 대해 선형이 아니어서, 행렬의 평균은 어느 행렬이 작은지 알려 주지 않는다.

행렬 대신 고윳값을 근으로 갖는 특성다항식 $\det(xI - A_s)$ 를 평균한다. 전개하면 다음과 같다.

$$
\det(xI - A_s) = x^3 - 3x - 2s_{12}s_{23}s_{13}
$$

부호의 곱은 평균이 $0$ 이므로 평균 다항식은 $x^3 - 3x$ 이고 가장 큰 근은 $\sqrt3 \approx 1.73$ 이다. 실제로 가장 큰 고윳값이 $1 \le \sqrt 3$ 인 행렬이 있다.

두 특성다항식 $(x+1)^2(x-2)$ 와 $(x-1)^2(x+2)$ 의 근은 $-1$ 과 $1$ 을 사이에 두고 번갈아 놓인다. 두 다항식 모두 둘째로 큰 근이 $1$ 이하이고 가장 큰 근이 $1$ 이상이어서, $1$ 부터 가장 큰 근까지는 값이 $0$ 이하이고 그 뒤로는 양수다. 평균 다항식이 $\sqrt3$ 에서 $0$ 이면 두 다항식 가운데 하나는 $\sqrt3$ 에서 값이 $0$ 이상이고, 그 다항식의 가장 큰 근은 $\sqrt3$ 이하다.

# 정의

## 다항식의 끼움

근이 모두 실수인 $n$ 차 다항식 $f$ 의 근을 $\beta_1 \le \dots \le \beta_n$ 이라 하고, 실수 $\alpha_1 \le \dots \le \alpha_{n-1}$ 을 근으로 갖는 다항식을 $g$ 라 한다. 다음이 성립하면 $g$ 가 $f$ 에 **끼운다(interlace)** 고 한다.

$$
\beta_1 \le \alpha_1 \le \beta_2 \le \alpha_2 \le \dots \le \alpha_{n-1} \le \beta_n
$$

[Cauchy 끼움 정리](cauchy-interlacing.md)의 끼움을 행렬의 고윳값 대신 다항식의 근으로 적은 것이다. $(x+1)(x-1)$ 은 $(x+1)^2(x-2)$ 에 끼운다. 근이 $-1 \le -1 \le -1 \le 1 \le 2$ 로 번갈아 놓인다.

## 공통 끼움

차수가 같은 다항식 $f_1, \dots, f_m$ 모두에 끼우는 다항식 $g$ 가 있으면, $f_1, \dots, f_m$ 이 **공통 끼움(common interlacing)** 을 갖는다고 한다. 직관 절의 두 특성다항식 $(x+1)^2(x-2)$ 와 $(x-1)^2(x+2)$ 는 공통 끼움 $(x+1)(x-1)$ 을 갖는다.

## 끼움 족

유한집합 $S_1, \dots, S_m$ 과 각 $s \in S_1\times\dots\times S_m$ 에 대해 최고차계수가 양수이고 근이 모두 실수인 $n$ 차 다항식 $f_s$ 가 있다고 하자. 앞 $k$ 좌표 $t_1, \dots, t_k$ 를 고정하고 나머지 좌표에 대해 더한 다항식을 다음과 같이 둔다.

$$
f_{t_1, \dots, t_k} = \sum_{s_{k+1}\in S_{k+1}, \dots, s_m\in S_m} f_{t_1, \dots, t_k, s_{k+1}, \dots, s_m}
$$

모든 $k = 0, 1, \dots, m-1$ 과 모든 $t_1, \dots, t_k$ 에 대해 다항식들 $f_{t_1, \dots, t_k, t}$ $(t \in S_{k+1})$ 가 공통 끼움을 가지면, $\lbrace f_s\rbrace$ 를 **끼움 족** 이라 한다[^1]. 직관 절에서는 $S_1 = S_2 = S_3 = \lbrace +1, -1\rbrace$ 이 세 변의 부호이고 $f_s = \det(xI - A_s)$ 다.

# 성질

## 볼록결합의 가장 큰 근

근이 모두 실수인 다항식 $f$ 의 가장 큰 근을 $\mathrm{maxroot}(f)$ 로 적는다. $f_1, \dots, f_m$ 이 차수가 같고 최고차계수가 양수이며 공통 끼움을 가지면, 음이 아닌 가중치 $\lambda_i$ 의 합이 $1$ 인 볼록결합 $f = \sum \lambda_i f_i$ 에 대해 다음을 만족하는 $i$ 가 있다.

$$
\lambda_i \gt 0, \qquad \mathrm{maxroot}(f_i) \le \mathrm{maxroot}(f)
$$

증명의 요지. 공통 끼움의 가장 큰 근을 $a$ 라 하면 각 $f_i$ 는 둘째로 큰 근이 $a$ 이하이고 가장 큰 근이 $a$ 이상이므로, $a$ 부터 가장 큰 근까지 값이 $0$ 이하이고 그 뒤로는 양수다. $f$ 도 $f(a) \le 0$ 이고 최고차계수가 양수이므로 $a$ 이상에 가장 큰 근 $\beta$ 를 갖는다. $f(\beta) = 0$ 이므로 $\lambda_i \gt 0$ 인 어떤 $i$ 에서 $f_i(\beta) \ge 0$ 이고, 그 $f_i$ 의 가장 큰 근은 $\beta$ 이하다.

## 끼움 족 정리

$\lbrace f_s\rbrace$ 가 끼움 족이면 다음을 만족하는 $s$ 가 있다[^1].

$$
\mathrm{maxroot}(f_s) \le \mathrm{maxroot}\Big(\sum_{s'} f_{s'}\Big)
$$

증명의 요지. 앞 절의 결과를 $f_{t_1}$ $(t_1 \in S_1)$ 에 쓰면 가장 큰 근이 전체 합의 가장 큰 근 이하인 $t_1$ 이 있다. 그 $t_1$ 을 고정하고 $f_{t_1, t_2}$ 에 다시 쓰는 일을 $m$ 번 되풀이한다. 합에 양수를 곱해도 근은 그대로이므로 합 대신 평균을 써도 같다.

## 공통 끼움의 판정

$f_1, \dots, f_m$ 이 차수가 같고 최고차계수가 양수이며 근이 모두 실수이면, 다음 둘은 동치다[^2].

- $f_1, \dots, f_m$ 이 공통 끼움을 갖는다.
- $f_1, \dots, f_m$ 의 모든 볼록결합의 근이 모두 실수다.

이 판정 때문에 끼움 족을 보일 때는 다항식의 끼움을 직접 찾지 않고, 평균 다항식들이 실근만 갖는다는 것을 보인다.

## 공통 끼움이 없는 경우

$f = x^2 - 1$ 과 $g = (x-2)(x-3)$ 은 근이 $-1, 1$ 과 $2, 3$ 이다. 공통 끼움의 근은 $\lbrack -1, 1\rbrack$ 과 $\lbrack 2, 3\rbrack$ 에 동시에 있어야 하므로 공통 끼움이 없다. 평균은 다음과 같다.

$$
\frac{f + g}{2} = \frac{2x^2 - 5x + 5}{2}
$$

판별식이 $25 - 40 \lt 0$ 이어서 평균은 실근이 없고, 가장 큰 근으로 $f$ 나 $g$ 를 누르는 논법이 성립하지 않는다.

# 활용

- [Ramanujan 그래프의 명시적 구성](ramanujan-graphs.md). $d$ 정규 그래프의 각 변에 부호 $\pm 1$ 을 붙인 부호 인접행렬의 특성다항식들은 끼움 족이고, 그 평균은 그래프의 정합 다항식(matching polynomial) $\sum_k (-1)^k m_k x^{n-2k}$ 이다. 여기서 $m_k$ 는 변 $k$ 개로 된 정합의 개수다. 삼각형에서는 $m_1 = 3$ 이어서 직관 절의 $x^3 - 3x$ 가 나온다. Heilmann–Lieb 정리(Heilmann–Lieb theorem)로 정합 다항식의 근은 절댓값이 $2\sqrt{d-1}$ 이하이므로, 가장 큰 고윳값이 $2\sqrt{d-1}$ 이하인 부호가 존재한다. 이것으로 모든 $d \ge 3$ 에서 $d$ 정규 이분 Ramanujan 그래프의 무한 족이 존재함이 증명된다[^1].
- Kadison–Singer 문제(Kadison–Singer problem). 유한 개의 값을 갖는 독립 무작위 벡터 $v_1, \dots, v_m \in \mathbb C^d$ 가 $\sum E\lbrack v_i v_i^\ast\rbrack = I$ 와 $E\lbrack\Vert v_i\Vert^2\rbrack \le \varepsilon$ 을 만족하면, $\Vert\sum v_i v_i^\ast\Vert \le (1+\sqrt\varepsilon)^2$ 일 확률이 양수다. 증명은 $\sum v_i v_i^\ast$ 의 특성다항식들이 끼움 족임을 보이고, 평균인 혼합 특성다항식(mixed characteristic polynomial)의 가장 큰 근을 [실안정 다항식](real-stable-polynomials.md)의 성질로 누른다[^3].
- [Expander 그래프](expander-graphs.md). Ramanujan 그래프는 가장 좋은 스펙트럼 간격을 갖는 expander 이고, 끼움 족 논법은 그 존재를 차수마다 준다.

[^1]: A. W. Marcus, D. A. Spielman, N. Srivastava, "Interlacing families I: Bipartite Ramanujan graphs of all degrees", Annals of Mathematics 182 (2015), 307–325.
[^2]: M. Chudnovsky, P. Seymour, "The roots of the independence polynomial of a clawfree graph", Journal of Combinatorial Theory Series B 97 (2007), 350–357. 두 다항식의 경우는 J.-P. Dedieu, "Obreschkoff's theorem revisited", Journal of Pure and Applied Algebra 81 (1992), 269–278 와 H. J. Fell, "On the zeros of convex combinations of polynomials", Pacific Journal of Mathematics 89 (1980), 43–50.
[^3]: A. W. Marcus, D. A. Spielman, N. Srivastava, "Interlacing families II: Mixed characteristic polynomials and the Kadison–Singer problem", Annals of Mathematics 182 (2015), 327–350.

# 연관 문서

## 선수지식

- [Cauchy 끼움 정리](cauchy-interlacing.md)

## 더 알아보기

- [실안정 다항식](real-stable-polynomials.md)

#linear_algebra #graph_theory #combinatorics
