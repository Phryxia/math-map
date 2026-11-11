# Hausdorff 적률 문제

# 개요

**Hausdorff 적률 문제(Hausdorff moment problem)** 는 구간 $\lbrack 0,1\rbrack$ 위의 확률분포를 적률 $m_n=\mathbb E\lbrack p^n\rbrack$ 의 수열만으로 되찾는 문제다. 앞면이 나올 확률 $p$ 자체가 무작위로 정해지는 동전을 $n$ 번 던지면, 모두 앞면일 확률은 $m_n$ 이다. 모든 $n$ 에 대해 이 확률을 알면 $p$ 의 분포를 알 수 있는가, 그리고 어떤 수열이 이런 확률로 나올 수 있는가가 이 문제다.

Hausdorff 정리는 두 물음에 답한다. 적률 수열은 분포를 하나로 정하고, 수열이 적률 수열인 것은 동전 던지기의 모든 결과 확률이 음이 아닌 것과 동치다.

# 직관

동전의 앞면 확률 $p$ 가 $\lbrack 0,1\rbrack$ 위의 분포 $\mu$ 를 따른다고 하자. $p$ 가 정해진 뒤 동전을 던진다. 처음 $n$ 번이 모두 앞면일 확률은 $\mathbb E\lbrack p^n\rbrack=m_n$ 이다.

앞면 다음 뒷면이 나올 확률은 $\mathbb E\lbrack p(1-p)\rbrack=m_1-m_2$ 이다. 정해진 순서로 앞면 $k$ 번과 뒷면 $j$ 번이 나올 확률은 $(1-p)^j$ 를 전개해 적률로 적는다.

$$
\mathbb E\lbrack p^k(1-p)^j\rbrack=\sum_{i=0}^{j}(-1)^i\binom{j}{i}m_{k+i}
$$

이 값은 확률이므로 음이 아니다. 그러므로 아무 수열이나 적률 수열이 되지는 못한다. 수열 $1, 1/2, 3/5, \dots$ 은 $m_1-m_2=-1/10$ 이어서 "앞면 다음 뒷면" 의 확률이 음수가 되므로 적률 수열이 아니다. $p^2\le p$ 이므로 $\mathbb E\lbrack p^2\rbrack\le\mathbb E\lbrack p\rbrack$ 여야 한다.

$p$ 가 균등분포를 따르면 $m_n=1/(n+1)$ 이다. 이때 위 합은 $k!\thinspace j!/(k+j+1)!$ 이 되어 언제나 양수다. Hausdorff 정리는 이 조건, 곧 모든 결과 확률이 음이 아니라는 조건이 적률 수열이 되는 데 충분하고, 그때의 분포는 하나뿐이라고 말한다.

# 정의

$\lbrack 0,1\rbrack$ 위의 확률측도 $\mu$ 의 **$n$ 차 적률($n$-th moment)** 은 다음 값이다.

$$
m_n=\int_{\lbrack 0,1\rbrack}t^n\thinspace d\mu(t)\qquad(n=0,1,2,\dots)
$$

$m_0=1$ 이다. 직관 절의 균등분포에서 $m_n=1/(n+1)$ 이다.

수열 $(m_n)$ 의 **차분(difference)** 은 $(\Delta m)\_n=m_{n+1}-m_n$ 이다. 모든 $j,k\ge 0$ 에 대해 다음이 성립하면 수열을 **완전 단조(completely monotone)** 라 한다.

$$
(-1)^j(\Delta^j m)\_k=\sum_{i=0}^{j}(-1)^i\binom{j}{i}m_{k+i}\ge 0
$$

좌변은 직관 절의 "앞면 $k$ 번, 뒷면 $j$ 번" 의 확률이다. $j=1$ 은 $m_k\ge m_{k+1}$, 곧 수열이 줄어든다는 조건이고, 수열 $1, 1/2, 3/5$ 는 $k=1$, $j=1$ 에서 이 조건을 어긴다.

# 성질

## 유일성

*정리.* $\lbrack 0,1\rbrack$ 위의 두 확률측도의 적률이 모든 $n$ 에서 같으면 두 측도는 같다.

*증명의 요지.* 적률이 같으면 모든 다항식 $P$ 에서 $\int P\thinspace d\mu=\int P\thinspace d\nu$ 다. [Stone–Weierstrass 정리](stone-weierstrass.md)로 다항식은 $C\lbrack 0,1\rbrack$ 에서 균등 조밀하므로 모든 연속함수 $f$ 에서 $\int f\thinspace d\mu=\int f\thinspace d\nu$ 다. [Riesz–Markov–Kakutani 표현 정리](riesz-markov-kakutani.md)의 유일성으로 $\mu=\nu$ 다. ∎

## Hausdorff 정리

*정리.* $m_0=1$ 인 수열 $(m_n)$ 이 $\lbrack 0,1\rbrack$ 위의 어떤 확률측도의 적률 수열인 것은 $(m_n)$ 이 완전 단조인 것과 동치다[^1].

*증명의 요지.* 필요조건은 직관 절의 계산이다. 충분조건은 다항식 위의 선형범함수 $L(t^n)=m_n$ 을 연속함수로 넓혀 얻는다. $f\in C\lbrack 0,1\rbrack$ 의 Bernstein 다항식 $B_nf$ 에 $L$ 을 적용하면 다음이 나온다.

$$
L(B_nf)=\sum_{k=0}^{n}f\left(\frac kn\right)\binom nk(-1)^{n-k}(\Delta^{n-k}m)\_k
$$

완전 단조성으로 가중치가 음이 아니고, $f=1$ 을 넣으면 가중치의 합이 $m_0=1$ 이다. 그러므로 $f\ge 0$ 이면 $L(B_nf)\ge 0$ 이고 $\vert L(B_nf)\vert\le\max\vert f\vert$ 다. $B_nf\to f$ 이므로 $L(f)=\lim L(B_nf)$ 가 $C\lbrack 0,1\rbrack$ 위의 양의 선형범함수가 되고, 표현 정리가 주는 측도의 적률이 $m_n$ 이다. ∎

## 유계가 아닌 구간의 적률 문제

$\lbrack 0,\infty)$ 위의 Stieltjes 적률 문제(Stieltjes moment problem)와 $\mathbb R$ 위의 [Hamburger 적률 문제](hamburger-moment-problem.md)에서는 유일성이 깨질 수 있다. [로그정규분포](lognormal-distribution.md)는 적률이 모두 같은 다른 분포를 갖는다. 다항식이 유계가 아닌 구간의 연속함수 공간에서 조밀하지 않으므로 유일성 증명의 첫 단계가 성립하지 않는다.

# 활용

- [de Finetti 정리](de-finetti-theorem.md)의 유일성. 교환가능한 $\lbrace 0,1\rbrace$ 무한열에서 $P(X_1=\dots=X_n=1)$ 이 혼합 측도 $\mu$ 의 $n$ 차 적률이므로, 유일성 정리로 $\mu$ 가 하나로 정해진다. 직관 절의 동전이 그 정리의 혼합이다.
- [Carlson 정리](carlson-theorem.md)는 $(0,1\rbrack$ 위의 측도에서 유일성을 다른 길로 준다. $\int t^z\thinspace d\mu$ 가 오른쪽 반평면에서 유계이므로 정수에서의 값, 곧 적률이 이 함수를 정한다.
- [완전 단조 함수](completely-monotone-functions.md)에 대한 Bernstein 정리(Bernstein's theorem on monotone functions)는 Hausdorff 정리의 연속 판이다. $(0,\infty)$ 위의 함수가 완전 단조인 것과 측도의 [Laplace 변환](laplace-transform.md)인 것이 동치다.

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. II, 2nd ed., Wiley, 1971, §VII.3 — Hausdorff 적률 문제와 완전 단조 수열.

# 연관 문서

## 선수지식

- [Stone–Weierstrass 정리](stone-weierstrass.md)
- [Riesz–Markov–Kakutani 표현 정리](riesz-markov-kakutani.md)

## 더 알아보기

- [Hamburger 적률 문제](hamburger-moment-problem.md)
- [완전 단조 함수](completely-monotone-functions.md)

#probability #measure_theory #analysis
