# Bailey 보조정리

# 개요

**Bailey 보조정리(Bailey's lemma)** 는 급수와 무한곱이 같다는 항등식 하나에서 같은 꼴의 새 항등식을 만들어 내는 변환이다. [Rogers–Ramanujan 항등식](rogers-ramanujan-identities.md)은 차이가 $2$ 이상인 분할을 세는 급수가 무한곱과 같다는 등식이지만, 두 쪽을 직접 맞추기는 어렵다. 그런데 그 등식은 Euler 의 오각수 정리(pentagonal number theorem)와 계수열이 같고 지수만 다르다. 이 변환을 이미 아는 오각수 정리에 한 번 걸면 그 등식이 나오고, 다시 걸면 법 $7,9,\dots$ 의 항등식이 차례로 나온다.

# 직관

오각수 정리는 다음 등식이다. $(q;q)\_\infty=(1-q)(1-q^2)\cdots$ 다.

$$
(q;q)\_\infty=\sum_{n\in\mathbb Z}(-1)^nq^{n(3n-1)/2}
$$

$n$ 과 $-n$ 의 항을 묶는다. $-n$ 의 지수는 $n(3n+1)/2=n(3n-1)/2+n$ 이므로 두 항의 합은 $(-1)^nq^{n(3n-1)/2}(1+q^n)$ 이다. $n(3n-1)/2=n^2+n(n-1)/2$ 이므로 다음 수열을 두면 오각수 정리는 $\sum_{n\ge0}q^{n^2}\alpha_n=(q;q)\_\infty$ 가 된다.

$$
\alpha_0=1,\qquad \alpha_n=(-1)^nq^{n(n-1)/2}(1+q^n)\quad(n\ge1)
$$

Rogers–Ramanujan 항등식의 첫째 등식은 Jacobi 삼중곱으로 쓰면 $\sum_{j\in\mathbb Z}(-1)^jq^{j(5j+1)/2}$ 가 $(q;q)\_\infty\sum_nq^{n^2}/(q;q)\_n$ 과 같다는 것이다. 같은 방식으로 $n$ 과 $-n$ 을 묶으면 지수가 $2n^2+n(n-1)/2$ 이어서 좌변은 $\sum_{n\ge0}q^{2n^2}\alpha_n$ 이다. 두 등식을 나란히 놓는다.

$$
\sum_{n\ge0}q^{n^2}\alpha_n=(q;q)\_\infty\cdot1,\qquad \sum_{n\ge0}q^{n^2}\bigl(q^{n^2}\alpha_n\bigr)=(q;q)\_\infty\sum_{n\ge0}\frac{q^{n^2}}{(q;q)\_n}
$$

$\alpha_n$ 에 $q^{n^2}$ 를 곱하자 우변의 $1$ 이 $\sum q^{n^2}/(q;q)\_n$ 으로 바뀌었다. 이 바꿈이 언제나 성립하게 하는 규칙이 Bailey 보조정리다. 규칙이 정해지면 $\alpha_n$ 에 $q^{n^2}$ 를 한 번 더 곱해 지수 $7n^2/2$ 의 등식으로 갈 수 있다.

# 정의

## Bailey 쌍

수 $a$ 에 대해 두 수열 $(\alpha_n)$, $(\beta_n)$ 이 다음을 만족하면 $a$ 에 대한 **Bailey 쌍(Bailey pair)** 이라 한다[^1].

$$
\beta_n=\sum_{r=0}^{n}\frac{\alpha_r}{(q;q)\_{n-r}(aq;q)\_{n+r}}
$$

$(x;q)\_m=(1-x)(1-xq)\cdots(1-xq^{m-1})$ 이다. 직관 절의 $\alpha_n$ 은 $a=1$ 에서 $\beta_0=1$, $\beta_n=0$ $(n\ge1)$ 과 Bailey 쌍을 이룬다. 이 쌍을 **단위 Bailey 쌍(unit Bailey pair)** 이라 한다. $n=1$ 에서 확인하면 다음과 같다.

$$
\beta_1=\frac{1}{(1-q)^2}+\frac{-(1+q)}{(1-q)(1-q^2)}=0
$$

일반 $a$ 의 단위 Bailey 쌍은 $\beta_n=\delta_{n0}$ 과 다음 $\alpha_n$ 이다.

$$
\alpha_n=(-1)^nq^{n(n-1)/2}\frac{(1-aq^{2n})(a;q)\_n}{(1-a)(q;q)\_n}
$$

 $a=q$ 이면 다음과 같다.

$$
\alpha_n=(-1)^nq^{n(n-1)/2}\frac{1-q^{2n+1}}{1-q}
$$

## Bailey 보조정리

**Bailey 보조정리** 는 다음 정리다[^1]. $(\alpha_n,\beta_n)$ 이 $a$ 에 대한 Bailey 쌍이면 다음 $(\alpha'\_n,\beta'\_n)$ 도 $a$ 에 대한 Bailey 쌍이다.

$$
\alpha'\_n=a^nq^{n^2}\alpha_n,\qquad \beta'\_n=\sum_{k=0}^{n}\frac{a^kq^{k^2}}{(q;q)\_{n-k}}\beta_k
$$

이것은 매개변수 둘을 무한대로 보낸 판본이고, Bailey 의 원래 정리에는 매개변수 $\rho_1,\rho_2$ 가 있다. 단위 쌍에 적용하면 $\beta'\_n=1/(q;q)\_n$ 이다.

# 성질

## 극한 항등식

Bailey 쌍 $(\alpha_n,\beta_n)$ 에 대해 다음이 성립한다.

$$
\sum_{n\ge0}a^nq^{n^2}\beta_n=\frac1{(aq;q)\_\infty}\sum_{n\ge0}a^nq^{n^2}\alpha_n
$$

Bailey 보조정리의 $\beta'\_n$ 에서 $n\to\infty$ 로 보내면 $(q;q)\_{n-k}\to(q;q)\_\infty$ 이고, 정의식의 $(q;q)\_{n-r}(aq;q)\_{n+r}$ 도 $(q;q)\_\infty(aq;q)\_\infty$ 로 간다. 두 극한을 맞추면 이 식이 나온다. $a=1$ 의 단위 쌍에 적용하면 좌변이 $1$ 이고 우변이 오각수 정리다.

## Rogers–Ramanujan 항등식의 증명

$a=1$ 의 단위 쌍에 Bailey 보조정리를 한 번 적용하면 $\alpha'\_n=q^{n^2}\alpha_n$, $\beta'\_n=1/(q;q)\_n$ 이다. 이 쌍에 극한 항등식을 쓰면 다음이 나온다.

$$
\sum_{n\ge0}\frac{q^{n^2}}{(q;q)\_n}=\frac1{(q;q)\_\infty}\sum_{n\in\mathbb Z}(-1)^nq^{n(5n+1)/2}
$$

우변을 Jacobi 삼중곱으로 곱으로 바꾸면 첫째 Rogers–Ramanujan 항등식이다. $a=q$ 의 단위 쌍에서 같은 계산을 하면 좌변이 $\sum q^{n^2+n}/(q;q)\_n$ 이고, 우변의 $\alpha_n$ 에 있는 $1-q^{2n+1}$ 의 두 항이 $n\ge0$ 과 $n\lt 0$ 의 항이 되어 $\sum_{n\in\mathbb Z}(-1)^nq^{n(5n+3)/2}/(q;q)\_\infty$ 가 나온다. 이것이 둘째 항등식이다.

## Bailey 사슬

Bailey 보조정리의 결과는 다시 Bailey 쌍이므로 몇 번이든 되풀이할 수 있다. 이 되풀이를 **Bailey 사슬(Bailey chain)** 이라 한다[^2]. 단위 쌍에서 $k-1$ 번 되풀이한 뒤 극한 항등식을 쓰면 $\alpha_n$ 에 $q^{(k-1)n^2}$ 이 곱해져 지수가 $(2k+1)n^2/2$ 꼴이 되고, Jacobi 삼중곱으로 법 $2k+1$ 의 곱이 나온다. $N_j=n_j+\cdots+n_{k-1}$ 으로 두면 다음이 Andrews–Gordon 항등식(Andrews–Gordon identity)의 한 경우다.

$$
\sum_{n_1,\dots,n_{k-1}\ge0}\frac{q^{N_1^2+\cdots+N_{k-1}^2}}{(q;q)\_{n_1}\cdots(q;q)\_{n_{k-1}}}=\prod_{n\not\equiv 0,\pm k\thinspace(\mathrm{mod}\thinspace 2k+1)}\frac1{1-q^n}
$$

$k=2$ 이면 첫째 Rogers–Ramanujan 항등식이다. 좌변을 분할로 읽은 것이 Gordon 정리(Gordon's theorem)의 한쪽이다.

# 활용

- Rogers–Ramanujan 꼴의 항등식 목록. Slater 는 Bailey 쌍을 하나씩 찾아 극한 항등식에 넣는 방법으로 급수와 곱의 항등식 $130$ 개를 모았다[^3].
- [분할수](partitions.md)의 생성함수. Bailey 사슬이 내는 다중 급수는 분할의 연속 부분 사이의 차이나 횟수에 조건을 건 분할을 세고, 곱 쪽은 나머지 조건으로 부분을 고른 분할을 센다.
- 매개변수 $\rho_1,\rho_2$ 를 남긴 판본은 $q$ 초기하급수(basic hypergeometric series)의 변환 공식을 주고, 쌍을 주고받는 Bailey 격자(Bailey lattice)는 Gordon 정리의 모든 경우를 준다[^4].

[^1]: W. N. Bailey, "Identities of the Rogers–Ramanujan type", *Proc. London Math. Soc.* (2) 50 (1949); G. Andrews, *q-Series: Their Development and Application in Analysis, Number Theory, Combinatorics, Physics, and Computer Algebra*, Regional Conference Series in Mathematics 66, American Mathematical Society, 1986, 3장.
[^2]: G. Andrews, "Multiple series Rogers–Ramanujan type identities", *Pacific J. Math.* 114 (1984).
[^3]: L. J. Slater, "Further identities of the Rogers–Ramanujan type", *Proc. London Math. Soc.* (2) 54 (1952).
[^4]: A. K. Agarwal, G. Andrews, D. Bressoud, "The Bailey lattice", *J. Indian Math. Soc.* 51 (1987).

# 연관 문서

## 선수지식

- [Rogers–Ramanujan 항등식](rogers-ramanujan-identities.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #number_theory
