# van der Waerden 부등식

# 개요

**van der Waerden 부등식(van der Waerden inequality)** 은 성분이 음이 아니고 행의 합과 열의 합이 모두 $1$ 인 $n\times n$ 행렬의 [영구식](permanent.md)이 $n!/n^n$ 이상이라는 부등식이다. 학생 세 명과 과제 세 개가 있고, 학생마다 할 수 있는 과제가 둘이고 과제마다 할 수 있는 학생이 둘이다. 학생마다 과제를 하나씩 겹치지 않게 맡기는 방법이 적어도 몇 가지인지 묻는다.

할 수 있으면 $1$, 없으면 $0$ 인 행렬을 $2$ 로 나누면 행과 열의 합이 $1$ 이 된다. 그 행렬의 영구식은 $3!/3^3=2/9$ 이상이고, 맡기는 방법의 수는 그 값에 $2^3$ 을 곱한 $16/9$ 이상이므로 $2$ 이상이다.

# 직관

학생 $a_1,a_2,a_3$ 과 과제 $b_1,b_2,b_3$ 이 있고, $a_1$ 은 $b_1,b_2$ 를, $a_2$ 는 $b_2,b_3$ 을, $a_3$ 은 $b_3,b_1$ 을 할 수 있다. $a_i$ 가 $b_j$ 를 할 수 있으면 $1$ 인 행렬은 다음과 같다.

$$
A=\begin{pmatrix}1&1&0\cr 0&1&1\cr 1&0&1\end{pmatrix}
$$

맡기는 방법은 $a_i$ 에게 $b_{\sigma(i)}$ 를 주는 순열 $\sigma$ 가운데 $A$ 의 $(i,\sigma(i))$ 성분이 모두 $1$ 인 것이다. $a_1\to b_1, a_2\to b_2, a_3\to b_3$ 과 $a_1\to b_2, a_2\to b_3, a_3\to b_1$ 의 두 가지뿐이므로 $\mathrm{perm}\thinspace A=2$ 다.

행마다 $1$ 이 둘이므로 $B=A/2$ 는 행과 열의 합이 모두 $1$ 이고, $\mathrm{perm}\thinspace B=2/2^3=1/4$ 이다. 모든 성분이 $1/3$ 인 행렬은 행과 열의 합이 $1$ 이고 영구식이 $3!/3^3=2/9$ 다. 행과 열의 합이 $1$ 인 $3\times 3$ 행렬의 영구식이 언제나 $2/9$ 이상이면 $\mathrm{perm}\thinspace A=8\thinspace\mathrm{perm}\thinspace B\ge 16/9$ 이고, 맡기는 방법의 수는 정수이므로 $2$ 이상이다.

$2\times 2$ 에서는 이 하한을 손으로 확인할 수 있다. 행과 열의 합이 $1$ 인 $2\times 2$ 행렬은 $0\le t\le 1$ 에 대해 다음 꼴뿐이다.

$$
\mathrm{perm}\begin{pmatrix}t&1-t\cr 1-t&t\end{pmatrix}=t^2+(1-t)^2=\frac12+2\Big(t-\frac12\Big)^2
$$

영구식은 $t=1/2$ 에서 가장 작고 그 값은 $2!/2^2=1/2$ 이다. 모든 성분이 같은 행렬에서 가장 작다는 것이 $n$ 이 커져도 성립한다는 것이 van der Waerden 부등식이다.

# 정의

## 이중 확률 행렬

**이중 확률 행렬(doubly stochastic matrix)** 은 성분이 모두 음이 아니고 각 행의 합과 각 열의 합이 모두 $1$ 인 정사각 [행렬](matrices.md)이다. 모든 성분이 $1$ 인 $n\times n$ 행렬을 $J_n$ 이라 하면 $J_n/n$ 은 이중 확률 행렬이다. 직관 절의 $B=A/2$ 와 순열행렬도 이중 확률 행렬이다.

## van der Waerden 부등식

$n\times n$ 이중 확률 행렬 $B$ 는 다음을 만족하고, 등호는 $B=J_n/n$ 일 때뿐이다.

$$
\mathrm{perm}\thinspace B\ge\frac{n!}{n^n}
$$

B. L. van der Waerden 이 1926 년에 추측으로 내놓았고, G. P. Egorychev 와 D. I. Falikman 이 1981 년에 각각 증명했다[^1]. $n=3$ 이면 우변은 $2/9$ 이고 직관 절의 $\mathrm{perm}\thinspace B=1/4$ 가 이를 만족한다.

## 용량

계수가 음이 아닌 $n$ 변수 다항식 $p$ 의 **용량(capacity)** 은 다음 값이다[^2].

$$
\mathrm{cap}(p)=\inf_{x_1,\dots,x_n\gt 0}\frac{p(x_1,\dots,x_n)}{x_1x_2\cdots x_n}
$$

행렬 $B=(b_{ij})$ 에 다음 다항식을 둔다.

$$
p_B(x_1,\dots,x_n)=\prod_{i=1}^n\Big(\sum_{j=1}^n b_{ij}x_j\Big)
$$

전개한 항은 행마다 열을 하나씩 고른 것이고, 고른 열이 모두 다른 항, 곧 순열의 항만 $x_1x_2\cdots x_n$ 이 된다. 그래서 $p_B$ 에서 $x_1x_2\cdots x_n$ 의 계수는 $\mathrm{perm}\thinspace B$ 다.

직관 절의 $B$ 에서는 다음과 같다.

$$
p_B=\frac{(x_1+x_2)(x_2+x_3)(x_3+x_1)}{8}
$$

$x_1x_2x_3$ 은 $x_1\cdot x_2\cdot x_3$ 과 $x_2\cdot x_3\cdot x_1$ 의 두 번 나오므로 계수는 $2/8=1/4$ 이다. 인수마다 산술평균이 기하평균 이상이므로 $p_B\ge x_1x_2x_3$ 이고, $x=(1,1,1)$ 에서 등호이므로 $\mathrm{cap}(p_B)=1$ 이다.

# 성질

## 이중 확률 행렬의 용량

$B$ 가 이중 확률 행렬이면 $\mathrm{cap}(p_B)=1$ 이다.

증명의 요지. 가중 산술-기하 평균 부등식(weighted inequality of arithmetic and geometric means)에 따라 $\sum_jb_{ij}x_j\ge\prod_jx_j^{b_{ij}}$ 이다. 이것을 $i$ 에 대해 곱하면 $x_j$ 의 지수가 $j$ 열의 합 $1$ 이 되어 $p_B(x)\ge x_1\cdots x_n$ 이다. $x=(1,\dots,1)$ 에서 행의 합이 $1$ 이므로 $p_B=1$ 이고 등호가 성립한다.

## Gurvits 정리

계수가 음이 아니고 모든 항의 차수가 $n$ 인 $n$ 변수 [실안정 다항식](real-stable-polynomials.md) $p$ 는 다음을 만족한다[^2]. 이것을 Gurvits 정리(Gurvits' theorem)라 한다.

$$
\frac{\partial^np}{\partial x_1\cdots\partial x_n}\ge\frac{n!}{n^n}\mathrm{cap}(p)
$$

좌변은 $p$ 에서 $x_1\cdots x_n$ 의 계수다. $p_B$ 의 인수 $\sum_jb_{ij}x_j$ 는 $x\in\mathbb H^n$ 에서 허수부가 양수이므로 $0$ 이 아니고, $p_B$ 는 실안정이다. $p=p_B$ 에 이 정리를 쓰면 좌변이 $\mathrm{perm}\thinspace B$, 우변이 $n!/n^n$ 이 되어 van der Waerden 부등식이 나온다.

보조정리. 근이 모두 실수이고 계수가 음이 아닌 차수 $k$ 이하의 일변수 다항식 $q$ 는 $q^\prime(0)\ge g(k)\thinspace\mathrm{cap}(q)$ 를 만족한다. 여기서 $\mathrm{cap}(q)=\inf_{t\gt 0}q(t)/t$ 이고 $g(1)=1$, $k\ge 2$ 이면 $g(k)=((k-1)/k)^{k-1}$ 이다.

보조정리의 증명의 요지. $q(0)=0$ 이면 $t\to 0$ 에서 $q(t)/t\to q^\prime(0)$ 이다. $q(0)\gt 0$ 이면 계수가 음이 아니어서 근이 모두 $0$ 이하이므로 $q(t)=q(0)\prod_{j=1}^k(1+c_jt)$, $c_j\ge 0$ 이다. $s=q^\prime(0)/(kq(0))$ 이라 하면 산술-기하 평균 부등식으로 $q(t)\le q(0)(1+st)^k$ 이고, $t=1/((k-1)s)$ 를 넣으면 $q(t)/t\le q^\prime(0)/g(k)$ 가 나온다.

정리의 증명의 요지. $q_n=p$ 로 두고 $q_{i-1}$ 을 $\partial q_i/\partial x_i$ 에 $x_i=0$ 을 넣은 다항식으로 정한다. 미분과 실수 대입이 실안정성을 유지하므로 $q_i$ 는 모두 실안정이고[^3], $q_0$ 이 좌변이다.

$q_i$ 의 항은 차수가 $i$ 이므로 $x_i$ 에 대한 차수가 $i$ 이하다. $x_1,\dots,x_{i-1}\gt 0$ 을 고정하고 $t\mapsto q_i(x_1,\dots,x_{i-1},t)$ 에 보조정리를 쓰면 $\mathrm{cap}(q_{i-1})\ge g(i)\thinspace\mathrm{cap}(q_i)$ 이다. 이것을 $i=n,\dots,1$ 에 대해 곱한다.

$$
\prod_{i=2}^n\Big(\frac{i-1}{i}\Big)^{i-1}=\frac{\prod_{m=1}^{n-1}m^m}{\prod_{i=2}^ni^{i-1}}=\frac{(n-1)!}{n^{n-1}}=\frac{n!}{n^n}
$$

## 등호 조건

Egorychev 는 Alexandrov–Fenchel 부등식(Alexandrov–Fenchel inequality)의 혼합 판별식(mixed discriminant) 판본으로 등호가 $J_n/n$ 에서만 성립함을 보였다[^1]. 이 부등식은 [혼합부피](mixed-volumes.md)의 부등식과 같은 꼴이다. Gurvits 의 증명에서는 보조정리의 등호가 $c_j$ 가 모두 같을 때뿐이라는 것으로부터 같은 결론이 유도된다[^2].

## 정칙 이분 그래프의 완전 매칭

두 쪽에 정점이 $n$ 개씩 있고 모든 정점의 차수가 $d$ 인 이분 그래프의 결합행렬 $A$ 는 $A/d$ 가 이중 확률 행렬이다. 그래서 완전 [매칭](matchings.md)의 수는 다음을 만족한다.

$$
\mathrm{perm}\thinspace A\ge\frac{d^nn!}{n^n}\ge\Big(\frac{d}{e}\Big)^n
$$

뒤 부등식은 $n!\ge(n/e)^n$ 에서 나온다. [Brègman 부등식](bregman-inequality.md)의 상한 $(d!)^{n/d}$ 과 합치면 정점 하나당 매칭 수의 $n$ 제곱근은 $d/e$ 와 $(d!)^{1/d}$ 사이에 있다.

Gurvits 정리의 증명에서 $q_i$ 의 $x_i$ 에 대한 차수는 $\min(i,d)$ 이하이므로 $g(i)$ 대신 $g(\min(i,d))$ 를 곱할 수 있다. 그러면 다음 하한이 나온다[^2].

$$
\mathrm{perm}\thinspace A\ge d^n\cdot\frac{d!}{d^d}\cdot\Big(\frac{d-1}{d}\Big)^{(d-1)(n-d)}
$$

직관 절의 $n=3$, $d=2$ 에서 이 값은 $8\cdot\frac{2}{4}\cdot\frac12=2$ 이고, 실제 매칭 수 $2$ 와 같다. 이 하한의 $n$ 제곱근은 $n\to\infty$ 에서 $(d-1)^{d-1}/d^{d-2}$ 로 가며, A. Schrijver 가 1998 년에 증명한 하한 $\big((d-1)^{d-1}/d^{d-2}\big)^n$ 과 밑이 같다[^4].

# 활용

- 영구식의 결정적 근사. 성분이 양수인 행렬 $A$ 는 [Sinkhorn 알고리즘](sinkhorn.md)으로 대각행렬 $D_1,D_2$ 를 찾아 $B=D_1AD_2$ 를 이중 확률 행렬로 만들 수 있다. $\mathrm{perm}\thinspace A=\mathrm{perm}\thinspace B/(\det D_1\det D_2)$ 이고 $n!/n^n\le\mathrm{perm}\thinspace B\le 1$ 이므로, $\mathrm{perm}\thinspace A$ 가 $e^n$ 배 안에서 결정적 다항시간에 추정된다[^5]. 상한은 $\mathrm{perm}\thinspace B\le p_B(1,\dots,1)=1$ 이다.
- [Latin 방진](latin-squares.md)의 수. $n\times n$ Latin 방진을 한 행씩 채우면 $k$ 행을 채운 뒤 남은 선택은 차수 $n-k$ 인 정칙 이분 그래프의 완전 매칭이다. 각 단계에 위의 하한을 쓰면 Latin 방진의 수는 $(n!)^{2n}/n^{n^2}$ 이상이다[^6].
- 실안정 다항식의 계수 하한. Gurvits 정리는 영구식뿐 아니라 실안정 다항식의 혼합 미분 전체에 하한을 주고, 혼합 판별식의 하한도 같은 논법으로 증명된다[^2].

[^1]: B. L. van der Waerden, "Aufgabe 45", Jahresbericht der Deutschen Mathematiker-Vereinigung 35 (1926), 117. G. P. Egorychev, "The solution of van der Waerden's problem for permanents", Advances in Mathematics 42 (1981), 299–305. D. I. Falikman, "Proof of the van der Waerden conjecture regarding the permanent of a doubly stochastic matrix", Mathematical Notes 29 (1981), 475–479.
[^2]: L. Gurvits, "Van der Waerden/Schrijver-Valiant like conjectures and stable (aka hyperbolic) homogeneous polynomials: one theorem for all", Electronic Journal of Combinatorics 15 (2008), #R66.
[^3]: D. G. Wagner, "Multivariate stable polynomials: theory and applications", Bulletin of the American Mathematical Society 48 (2011), 53–84.
[^4]: A. Schrijver, "Counting 1-factors in regular bipartite graphs", Journal of Combinatorial Theory, Series B 72 (1998), 122–135.
[^5]: N. Linial, A. Samorodnitsky, A. Wigderson, "A deterministic strongly polynomial algorithm for matrix scaling and approximate permanents", Combinatorica 20 (2000), 545–568.
[^6]: J. H. van Lint, R. M. Wilson, *A Course in Combinatorics*, 2nd ed., Cambridge University Press, 2001, Chapter 17.

# 연관 문서

## 선수지식

- [영구식](permanent.md)
- [실안정 다항식](real-stable-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #linear_algebra #algorithms #theorem
