# 원법

# 개요

$n$ 을 정해진 모양의 수 $s$ 개의 합으로 쓰는 방법이 몇 가지인지 묻는 문제가 가법적 정수론의 기본 문제다. 세제곱수 $s$ 개의 합, 소수 세 개의 합, 양의 정수의 합(분할)이 그런 문제다.

원법은 그 개수를 지수합의 거듭제곱을 한 주기 적분한 값으로 적고, 적분 구간을 분모가 작은 유리수의 근방과 나머지로 갈라 계산한다. 앞쪽에서 주항이 나오고 뒤쪽은 오차로 묶인다.

Hardy 와 Ramanujan 이 1918 년 분할수의 점근식에서 썼고[^1], Hardy 와 Littlewood 가 Waring 문제와 Goldbach 문제로 넓혔다. Vinogradov 가 지수합 추정을 바꿔 삼소수 정리를 얻었다.

# 직관

$n$ 을 세제곱수 $s$ 개의 합으로 쓰는 방법이 몇 가지인지 세려 한다. 제곱수 두 개의 합이면 $n$ 의 약수를 세어 개수가 나오지만 세제곱수에는 그런 셈법이 없다.

하나씩 세는 대신 급수의 계수를 뽑는다. $N=n^{1/3}$ 이라 두고

$$
f(\alpha)=\sum_{1\le m\le N}e^{2\pi i\alpha m^3}
$$

을 만들면 $f(\alpha)^s$ 를 전개한 각 항이 $e^{2\pi i\alpha(m_1^3+\cdots+m_s^3)}$ 이다. 지수가 $n$ 인 항의 개수가 구하려는 수다. $\int_0^1 e^{2\pi i\alpha j}\thinspace d\alpha$ 는 정수 $j$ 가 $0$ 일 때 $1$ 이고 그 밖에는 $0$ 이므로

$$
r(n)=\int_0^1 f(\alpha)^s e^{-2\pi in\alpha}\thinspace d\alpha
$$

가 그 개수다.

이 적분은 그대로 계산되지 않는다. $\alpha=0$ 에서는 항이 모두 $1$ 이라 $f(0)=N$ 이고 $f(0)^s=N^s$ 로 크다. $\alpha$ 를 $0$ 에서 조금 옮기면 $m^3$ 이 빠르게 커지므로 항의 방향이 흩어지고 합이 $N$ 보다 훨씬 작아진다. $\alpha$ 가 분모 $q$ 인 기약분수 $a/q$ 이면 $m^3$ 을 $q$ 로 나눈 나머지가 주기 $q$ 로 되풀이되어 항의 방향이 $q$ 개로 몰리고 합이 다시 커진다. $q$ 가 작을수록 많이 커진다.

적분값의 대부분이 분모가 작은 유리수 근방에서 나오므로 구간을 그 근방들과 나머지로 가른다. 근방 안에서는 $f(\alpha)$ 가 유한합 하나와 적분 하나의 곱으로 바뀌어 기여가 계산되고, 나머지에서는 $f(\alpha)$ 가 작다는 것만 써서 기여를 위에서 묶는다. 앞을 주 호(major arc), 뒤를 부 호(minor arc)라 한다.

# 정의

## 생성함수와 주기 적분

$e(x)=e^{2\pi ix}$ 로 적는다. $\mathcal A\subseteq\mathbb N$ 과 $n$ 에 대해

$$
f(\alpha)=\sum_{a\in\mathcal A,\thinspace a\le n}e(a\alpha)
$$

로 두고, $a_1+\cdots+a_s=n$ 인 $(a_1,\dots,a_s)\in\mathcal A^s$ 의 개수를 $r_s(n)$ 이라 한다. 그러면

$$
r_s(n)=\int_0^1 f(\alpha)^s e(-n\alpha)\thinspace d\alpha
$$

다. $f$ 는 주기 $1$ 이므로 적분 구간은 길이 $1$ 인 아무 구간이어도 된다.

## 주 호와 부 호

매개변수 $P$ 를 고정한다. $1\le a\le q\le P$ 와 $\gcd(a,q)=1$ 인 쌍마다

$$
\mathfrak M(q,a)=\lbrace \alpha:\vert\alpha-a/q\vert\le P/n\rbrace
$$

를 **주 호**라 하고, 이들의 합집합을 $\mathfrak M$, 길이 $1$ 인 구간에서 $\mathfrak M$ 을 뺀 나머지를 **부 호** $\mathfrak m$ 이라 한다.

서로 다른 기약분수 $a/q$ 와 $a'/q'$ 의 차는 $1/(qq')\ge 1/P^2$ 이상이다. 따라서 $2P/n\lt 1/P^2$, 곧 $P^3\lt n/2$ 이면 주 호끼리 겹치지 않는다.

## 특이급수와 특이적분

$\mathcal A=\lbrace m^k:m\ge1\rbrace$ 인 Waring 문제에서 다음을 둔다. 완전 지수합은

$$
S(q,a)=\sum_{m=1}^{q}e\big(am^k/q\big)
$$

이고, $q$ 와 서로소인 $1\le a\le q$ 를 지나는 합

$$
A(q)=\sum_{a}\left(\frac{S(q,a)}{q}\right)^{s}e(-na/q)
$$

를 모은 $\mathfrak S(n)=\sum_{q\ge1}A(q)$ 가 **특이급수**다. **특이적분**은

$$
J(n)=\int_{-\infty}^{\infty}\left(\int_0^{n^{1/k}}e(\beta\gamma^k)\thinspace d\gamma\right)^{s}e(-n\beta)\thinspace d\beta
$$

다.

# 성질

## 주 호의 기여

$\alpha=a/q+\beta$ 가 주 호 위에 있으면 $m$ 을 $q$ 로 나눈 나머지로 묶고 각 묶음의 합을 적분으로 바꾸어

$$
f(\alpha)=\frac{S(q,a)}{q}\thinspace v(\beta)+O\big(q(1+n\vert\beta\vert)\big),\qquad
v(\beta)=\int_0^{n^{1/k}}e(\beta\gamma^k)\thinspace d\gamma
$$

를 얻는다. 이것을 $s$ 제곱해 모든 주 호에서 더하면

$$
\int_{\mathfrak M}f(\alpha)^se(-n\alpha)\thinspace d\alpha=\mathfrak S(n)J(n)+o\big(n^{s/k-1}\big)
$$

이고 특이적분은 닫힌 꼴로 계산된다.

$$
J(n)=\frac{\Gamma(1+1/k)^{s}}{\Gamma(s/k)}\thinspace n^{s/k-1}
$$

## 특이급수의 국소 밀도 분해

$A(q)$ 는 $q$ 에 대해 곱셈적이므로 특이급수가 소수마다의 인자로 쪼개진다.

$$
\mathfrak S(n)=\prod_p\sigma_p(n),\qquad
\sigma_p(n)=\lim_{h\to\infty}\frac{\char35{}\lbrace x\in(\mathbb Z/p^h\mathbb Z)^s:x_1^k+\cdots+x_s^k\equiv n\rbrace}{p^{h(s-1)}}
$$

$\sigma_p(n)$ 은 합동식 $x_1^k+\cdots+x_s^k\equiv n$ 의 $p$ 진 해의 밀도다. 모든 소수에서 해가 있고 $s$ 가 $k$ 에 비해 크면 $\mathfrak S(n)\gg1$ 이다. 실수 해의 존재는 특이적분이 맡으므로, 주항 $\mathfrak S(n)J(n)$ 이 양수라는 것은 국소 해가 전부 있다는 것과 같다.

## Weyl 의 부등식

$\vert\alpha-a/q\vert\le q^{-2}$ 이고 $\gcd(a,q)=1$ 이면 모든 $\varepsilon\gt 0$ 에 대해 다음이 성립한다[^2].

$$
\left\vert\sum_{m\le N}e(\alpha m^k)\right\vert\ll N^{1+\varepsilon}\left(\frac1q+\frac1N+\frac{q}{N^k}\right)^{2^{1-k}}
$$

증명은 합의 절댓값 제곱을 차분으로 바꾸는 조작을 $k-1$ 번 거듭해 지수의 차수를 $1$ 로 내리고, 남은 등비합을 분모 $q$ 로 묶는 것이다.

Dirichlet 근사 정리가 부 호의 $\alpha$ 마다 $q\gt P$ 인 근사 분수를 주므로, 부 호 위에서 $\sup\vert f\vert\ll N^{1-\rho}$ 인 $\rho\gt 0$ 이 있다.

## 부 호의 기여

부 호 전체의 적분은 최댓값과 평균으로 쪼갠다.

$$
\int_{\mathfrak m}\vert f\vert^{s}\thinspace d\alpha\le\left(\sup_{\mathfrak m}\vert f\vert\right)^{s-2^k}\int_0^1\vert f\vert^{2^k}\thinspace d\alpha
$$

둘째 인자는 Hua 의 보조정리가 $\ll N^{2^k-k+\varepsilon}$ 로 묶는다[^3]. $s$ 가 $k$ 에 비해 충분히 크면 우변이 주항 $n^{s/k-1}$ 보다 작다.

## Waring 문제의 점근식

충분히 큰 모든 정수가 $s$ 개의 $k$ 제곱수의 합이 되게 하는 가장 작은 $s$ 를 $G(k)$ 라 한다. 위 두 추정을 합치면 $s\gt 2^k$ 에서

$$
r_s(n)=\mathfrak S(n)\frac{\Gamma(1+1/k)^{s}}{\Gamma(s/k)}\thinspace n^{s/k-1}\big(1+o(1)\big)
$$

이고 $\mathfrak S(n)\gg1$ 이므로 $G(k)\le 2^k+1$ 이 나온다. 부 호 추정을 Weyl 의 부등식 대신 Vinogradov 의 평균값 정리로 바꾸면 $G(k)\ll k\log k$ 로 내려간다. 평균값 정리의 최적 지수는 Wooley 의 효율적 합동법과 Bourgain–Demeter–Guth 의 분해 정리로 증명됐다[^4].

## 삼소수 정리

$f(\alpha)=\sum_{p\le n}(\log p)\thinspace e(p\alpha)$ 로 두고 $s=3$ 을 쓴다. 주 호에서는 소수를 등차수열로 갈라 세어야 하므로 Siegel–Walfisz 정리가 들어가고, 부 호에서는 소수 계수 지수합을 약수 분해로 쌍선형합 두 종류로 바꾸는 Vinogradov 의 조작이 들어간다. 결과는 다음과 같다.

$$
R(n)=\mathfrak S(n)\frac{n^2}{2}+O\left(\frac{n^2}{(\log n)^{A}}\right),\qquad
\mathfrak S(n)=\prod_{p\mid n}\left(1-\frac1{(p-1)^2}\right)\prod_{p\nmid n}\left(1+\frac1{(p-1)^3}\right)
$$

$n$ 이 홀수면 $\mathfrak S(n)\gg1$ 이고, 짝수면 $p=2$ 의 인자가 $0$ 이라 $\mathfrak S(n)=0$ 이다. 따라서 충분히 큰 홀수는 세 소수의 합이다.

짝수를 두 소수의 합으로 쓰는 문제에는 같은 절차가 닿지 않는다. $s=2$ 이면 부 호를 묶을 때 쓸 수 있는 것이 Parseval 등식뿐인데 $\int_0^1\vert f\vert^2\thinspace d\alpha\asymp n\log n$ 이고, 이 값이 주항 $\mathfrak S(n)n$ 보다 $\log n$ 배 크다.

# 활용

- **분할수의 점근식.** $\mathcal A$ 를 양의 정수 전체로 잡으면 생성함수가 $\prod(1-q^k)^{-1}$ 이고 단위원 위의 모든 유리점이 특이점이다. 각 유리점에서 Dedekind eta 의 모듈러 변환이 거동을 정확히 주므로 오차항 없는 수렴급수까지 간다. 계산은 [분할수](partitions.md)에 있다.
- **Goldbach 약한 추측.** Vinogradov 의 결과에서 "충분히 큰" 의 하한을 계산 가능한 크기로 내리고 그 아래를 기계로 확인해, 모든 홀수 $n\ge7$ 이 세 소수의 합임이 증명됐다[^5].
- **비특이 꼴의 유리점.** 변수 개수가 차수에 비해 충분히 많은 비특이 동차형식의 정수해 개수에 Birch 가 같은 분해로 점근식을 주었다. 특이급수와 특이적분의 곱이 Hasse 원리의 정량적 꼴로 나타난다.
- **모듈러 형식의 Fourier 계수.** 첨점 형식의 계수 추정에서 주 호 계산에 Kloosterman 합이 나오고, 그 합의 Weil 상계가 오차항을 결정한다.

[^1]: G. H. Hardy, S. Ramanujan, "Asymptotic formulae in combinatory analysis", Proc. London Math. Soc. (2) 17 (1918), 75–115.
[^2]: H. Weyl, "Über die Gleichverteilung von Zahlen mod. Eins", Math. Ann. 77 (1916), 313–352.
[^3]: L.-K. Hua, "On Waring's problem", Quart. J. Math. Oxford 9 (1938), 199–202.
[^4]: T. D. Wooley, "The cubic case of the main conjecture in Vinogradov's mean value theorem", Adv. Math. 294 (2016), 532–561. J. Bourgain, C. Demeter, L. Guth, "Proof of the main conjecture in Vinogradov's mean value theorem for degrees higher than three", Ann. of Math. 184 (2016), 633–682.
[^5]: H. A. Helfgott, "The ternary Goldbach problem", arXiv:1501.05438 (2015).

# 연관 문서

## 선수지식

- [분할수](partitions.md)
- [소수 정리](prime-number-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #combinatorics
