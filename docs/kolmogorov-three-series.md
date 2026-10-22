# Kolmogorov 세 급수 정리

# 개요

**Kolmogorov 세 급수 정리(Kolmogorov's three-series theorem)** 는 독립 [확률변수](random-variables.md)의 급수 $\sum_n X_n$ 이 거의 확실히 수렴하는 조건을 세 개의 수치 급수의 수렴으로 주는 정리다. 수렴하는 사건은 꼬리사건이어서 [Kolmogorov 0-1 법칙](kolmogorov-zero-one-law.md)에 따라 확률이 $0$ 이나 $1$ 이고, 이 정리가 어느 쪽인지를 판정한다.

증명의 중심은 Kolmogorov 최대 부등식(Kolmogorov's maximal inequality)이다. 부분합의 최댓값이 커질 확률을 마지막 부분합의 분산으로 누른다.

# 직관

동전을 던져 앞면이면 $+1$, 뒷면이면 $-1$ 인 독립 부호 $\varepsilon_n$ 을 만들고 급수 $\sum_n\varepsilon_n/n$ 을 본다. 조화급수 $\sum_n 1/n$ 은 발산하지만 부호가 무작위로 바뀌면 항들이 서로 지워진다. 이 급수가 수렴하는지 묻는다.

부분합 $S_n=\sum_{k\le n}\varepsilon_k/k$ 의 분산은 독립성에 따라 $\sum_{k\le n}1/k^2$ 이고, $n\to\infty$ 에서 유한한 값 $\pi^2/6$ 으로 간다. $m\gt n$ 이면 $\mathbb E(S_m-S_n)^2=\sum_{n\lt k\le m}1/k^2$ 이 $0$ 으로 가므로 $S_n$ 은 제곱평균으로 Cauchy 열이고 확률수렴한다.

확률수렴만으로는 각 경로의 수렴이 나오지 않는다. 필요한 것은 $n$ 이후의 부분합 $S_m-S_n$ 이 $m$ 전체에 걸쳐 작다는 것, 곧 최댓값 $\max_{n\lt m\le N}\lvert S_m-S_n\rvert$ 의 크기다. Kolmogorov 최대 부등식은 이 최댓값이 $\varepsilon$ 을 넘을 확률이 $\varepsilon^{-2}\sum_{n\lt k\le N}1/k^2$ 이하라고 말한다. 우변이 $N$ 에 무관하게 $0$ 으로 가므로 거의 모든 경로에서 $S_n$ 이 Cauchy 열이고, 급수는 거의 확실히 수렴한다.

# 정의

## Kolmogorov 최대 부등식

$X_1,\dots,X_n$ 이 독립이고 평균이 $0$ 이며 분산이 유한하면, $S_k=X_1+\dots+X_k$ 와 $\lambda\gt 0$ 에 대해

$$
P\Bigl(\max_{1\le k\le n}\lvert S_k\rvert\ge\lambda\Bigr)\le\frac{\mathrm{Var}(S_n)}{\lambda^2}
$$

이다. 우변은 Chebyshev 부등식이 $\lvert S_n\rvert$ 하나에 주는 상한과 같다.

## 세 급수 정리

$X_1,X_2,\dots$ 가 독립이고 $A\gt 0$ 일 때 $Y_n=X_n\mathbf 1\_{\lbrace\lvert X_n\rvert\le A\rbrace}$ 로 둔다. $\sum_n X_n$ 이 거의 확실히 수렴하는 것은 다음 세 급수가 모두 수렴하는 것과 동치다.

$$
\sum_n P(\lvert X_n\rvert\gt A),\qquad \sum_n\mathbb E Y_n,\qquad \sum_n\mathrm{Var}(Y_n)
$$

세 급수 가운데 하나라도 발산하면 $\sum_n X_n$ 은 거의 확실히 발산한다. $A$ 를 어떻게 잡아도 결론이 같다.

# 성질

## 최대 부등식의 증명

$\lvert S_k\rvert\ge\lambda$ 가 처음 일어나는 $k$ 를 $\tau$ 로 둔다. 사건 $\lbrace\tau=k\rbrace$ 와 $S_k$ 는 $X_1,\dots,X_k$ 로 정해지고 $S_n-S_k$ 는 $X_{k+1},\dots,X_n$ 으로 정해지므로 둘은 독립이다. 그래서

$$
\mathbb E\bigl\lbrack S_n^2\mathbf 1\_{\lbrace\tau=k\rbrace}\bigr\rbrack\ge\mathbb E\bigl\lbrack S_k^2\mathbf 1\_{\lbrace\tau=k\rbrace}\bigr\rbrack+2\thinspace\mathbb E\bigl\lbrack S_k\mathbf 1\_{\lbrace\tau=k\rbrace}\bigr\rbrack\thinspace\mathbb E\lbrack S_n-S_k\rbrack\ge\lambda^2P(\tau=k)
$$

이다. 가운데 항은 $\mathbb E\lbrack S_n-S_k\rbrack=0$ 이어서 사라진다. $k$ 에 대해 더하면 좌변은 $\mathbb E S_n^2$ 이하이고 우변은 $\lambda^2P(\max_k\lvert S_k\rvert\ge\lambda)$ 다.

## 분산 판정

$X_n$ 이 독립이고 평균이 $0$ 이며 $\sum_n\mathrm{Var}(X_n)\lt\infty$ 이면 $\sum_n X_n$ 은 거의 확실히 수렴한다. 최대 부등식을 $X_{n+1},X_{n+2},\dots$ 에 적용하고 $N\to\infty$ 로 보내면

$$
P\Bigl(\sup_{m\gt n}\lvert S_m-S_n\rvert\ge\varepsilon\Bigr)\le\frac1{\varepsilon^2}\sum_{k\gt n}\mathrm{Var}(X_k)\to 0
$$

이므로 부분합이 거의 확실히 Cauchy 열이다. 직관 절의 급수가 이 경우다.

## 충분성

세 급수가 수렴한다고 둔다. 첫째 급수와 [Borel–Cantelli 보조정리](borel-cantelli.md)에 따라 거의 확실히 유한 개의 $n$ 을 빼고 $X_n=Y_n$ 이므로 $\sum X_n$ 과 $\sum Y_n$ 은 함께 수렴한다. $Y_n-\mathbb E Y_n$ 은 평균이 $0$ 이고 분산의 합이 셋째 급수이므로 분산 판정으로 $\sum(Y_n-\mathbb E Y_n)$ 이 수렴하고, 둘째 급수를 더하면 $\sum Y_n$ 이 수렴한다.

## 필요성

$\sum X_n$ 이 거의 확실히 수렴하면 $X_n\to 0$ 이므로 $\lvert X_n\rvert\gt A$ 는 유한 번만 일어난다. 사건들이 독립이므로 Borel–Cantelli 보조정리의 둘째 부분에 따라 첫째 급수가 수렴한다. 셋째 급수가 발산한다고 하자. $s_n^2=\sum_{k\le n}\mathrm{Var}(Y_k)\to\infty$ 이고 $\lvert Y_k\rvert\le A$ 이므로 Lindeberg 조건이 성립해 $s_n^{-1}\sum_{k\le n}(Y_k-\mathbb E Y_k)$ 가 표준정규분포로 분포수렴한다([중심극한정리](central-limit-theorem.md)). 한편 $\sum Y_k$ 가 수렴하므로 $s_n^{-1}\sum_{k\le n}Y_k\to 0$ 이고, Slutsky 정리에 따라 상수열 $-s_n^{-1}\sum_{k\le n}\mathbb E Y_k$ 가 표준정규분포로 분포수렴해야 하는데 이는 불가능하다. 그래서 셋째 급수가 수렴하고, 분산 판정으로 $\sum(Y_n-\mathbb E Y_n)$ 이 수렴하므로 $\sum Y_n$ 과의 차인 둘째 급수가 수렴한다.

## 무작위 부호 급수

$\varepsilon_n$ 이 독립 부호이고 $a_n$ 이 실수열이면 $\sum_n\varepsilon_na_n$ 이 거의 확실히 수렴하는 것은 $\sum_n a_n^2\lt\infty$ 와 동치다. $a_n\to 0$ 이 아니면 첫째 급수가 발산하고, $a_n\to 0$ 이면 $A=1$ 로 잡을 때 유한 개를 빼고 $Y_n=\varepsilon_na_n$ 이어서 둘째 급수는 $0$, 셋째 급수는 $\sum a_n^2$ 이다. 그래서 $\sum_n\varepsilon_n/n$ 은 수렴하고 $\sum_n\varepsilon_n/\sqrt n$ 은 발산한다.

# 활용

- [큰 수의 법칙](law-of-large-numbers.md)의 강한 법칙에 대한 Kolmogorov 의 증명은 $X_n$ 을 $n$ 에서 잘라 분산 판정으로 $\sum_n(X_n-\mu)/n$ 의 수렴을 얻고, Kronecker 보조정리(Kronecker's lemma)로 $\frac1n\sum_{k\le n}(X_k-\mu)\to 0$ 을 유도한다.
- 독립 합 $S_n$ 은 [Martingale](martingales.md)이고, 분산 판정은 $L^2$ 유계인 martingale 이 거의 확실히 수렴한다는 정리의 특수한 경우다. 최대 부등식은 Doob 최대 부등식(Doob's maximal inequality)의 특수한 경우다.
- [확률변수의 수렴](convergence-of-random-variables.md)에서 독립 합에 대해서는 확률수렴과 거의 확실한 수렴이 동치라는 Lévy 정리(Lévy's equivalence theorem)가 성립하고, 그 증명도 최대 부등식과 같은 꼴의 부등식을 쓴다.

# 연관 문서

## 선수지식

- [확률변수의 수렴](convergence-of-random-variables.md)
- [Kolmogorov 0-1 법칙](kolmogorov-zero-one-law.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory #analysis #theorem
