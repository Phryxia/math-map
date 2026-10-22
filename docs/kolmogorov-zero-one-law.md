# Kolmogorov 0-1 법칙

# 개요

**Kolmogorov 0-1 법칙(Kolmogorov's zero-one law)** 은 독립 [확률변수](random-variables.md)열에서 앞의 유한 개 항을 바꿔도 일어나는지 여부가 변하지 않는 사건의 확률이 $0$ 이거나 $1$ 이라는 정리다. 그런 사건을 꼬리사건이라 한다.

무작위 급수가 수렴하는지, 표본평균이 수렴하는지, 어떤 사건이 무한히 자주 일어나는지가 꼬리사건이다. 정리는 확률이 $0$ 과 $1$ 가운데 하나라는 것만 말하고 어느 쪽인지는 말하지 않는다.

# 직관

동전을 끝없이 던지고 사건 $A$ 를 "앞면이 무한히 자주 나온다" 로 둔다. 처음 $100$ 번의 결과를 바꿔도 앞면이 무한히 자주 나오는지는 그대로다. 그래서 $A$ 가 일어나는지는 $101$ 번째 이후의 던지기만 보고 정할 수 있다. $100$ 대신 어떤 $n$ 을 써도 같다.

던지기가 독립이므로 $n+1$ 번째 이후만으로 정해지는 사건은 처음 $n$ 번의 결과와 독립이다. $A$ 가 그런 사건이므로 $A$ 는 처음 $n$ 번의 결과와 독립이고, 이것이 모든 $n$ 에서 성립한다. 그러면 $A$ 는 모든 던지기의 결과로 정해지는 사건 전부와 독립이다.

$A$ 자신도 모든 던지기의 결과로 정해지는 사건이므로 $A$ 는 $A$ 와 독립이다. 곧 $P(A)=P(A\cap A)=P(A)^2$ 이고, 이 식을 만족하는 수는 $0$ 과 $1$ 뿐이다.

# 정의

## 꼬리 σ 대수

확률변수열 $X_1,X_2,\dots$ 에 대해

$$
\mathcal T=\bigcap_{n=1}^\infty\sigma(X_n,X_{n+1},\dots)
$$

를 **꼬리 σ 대수(tail σ-algebra)** 라 하고, $\mathcal T$ 에 속하는 사건을 **꼬리사건(tail event)** 이라 한다. $\sigma(X_n,X_{n+1},\dots)$ 는 $X_n,X_{n+1},\dots$ 를 모두 가측으로 만드는 가장 작은 $\sigma$ 대수다.

예. $\lbrace X_n\gt 0\thickspace\text{무한히 자주}\rbrace$, $\lbrace\sum_n X_n\thickspace\text{수렴}\rbrace$, $\lbrace\lim_n\frac1n\sum_{k\le n}X_k\thickspace\text{존재}\rbrace$ 는 꼬리사건이다. $\lbrace\sum_n X_n\gt 0\rbrace$ 은 $X_1$ 의 값에 따라 달라지므로 일반적으로 꼬리사건이 아니다.

## 정리

$X_1,X_2,\dots$ 가 독립이면 모든 $A\in\mathcal T$ 에서 $P(A)\in\lbrace 0,1\rbrace$ 이다.

# 성질

## 증명

$\mathcal F_n=\sigma(X_1,\dots,X_n)$ 으로 둔다. 독립성에 따라 $\mathcal F_n$ 과 $\sigma(X_{n+1},X_{n+2},\dots)$ 는 독립이고, $\mathcal T$ 가 뒤의 것에 포함되므로 $\mathcal F_n$ 과 $\mathcal T$ 는 독립이다.

$\bigcup_n\mathcal F_n$ 은 교집합에 닫혀 있으므로 $\pi$ 계이고, 그 원소마다 $\mathcal T$ 의 원소와 독립이다. [Dynkin 계](dynkin-system.md)의 독립성 판정에 따라 $\sigma\bigl(\bigcup_n\mathcal F_n\bigr)=\sigma(X_1,X_2,\dots)$ 가 $\mathcal T$ 와 독립이다. $\mathcal T\subseteq\sigma(X_1,X_2,\dots)$ 이므로 $\mathcal T$ 는 자기 자신과 독립이고, $A\in\mathcal T$ 에서 $P(A)=P(A)^2$ 이다.

## 꼬리 가측 확률변수

$\mathcal T$ 가측인 확률변수 $Y$ 는 거의 확실히 상수다. 모든 $c$ 에서 $P(Y\le c)\in\lbrace 0,1\rbrace$ 이고 이 값은 $c$ 에 대해 증가하므로, $c_0=\inf\lbrace c:P(Y\le c)=1\rbrace$ 에서 $P(Y=c_0)=1$ 이다. $c_0$ 은 $\pm\infty$ 일 수 있다.

$\limsup_n X_n$, $\liminf_n X_n$, $\limsup_n\frac1n\sum_{k\le n}X_k$ 가 그런 확률변수다. 독립 확률변수 $X_n$ 을 계수로 갖는 멱급수 $\sum_n X_nz^n$ 의 수렴반지름도 꼬리 가측이므로 거의 확실히 상수다.

## 독립성 조건

독립이 아니면 성립하지 않는다. $X_1$ 이 $P(X_1=0)=P(X_1=1)=\tfrac12$ 인 확률변수이고 모든 $n$ 에서 $X_n=X_1$ 이면, 꼬리사건 $\lbrace X_n=1\thickspace\text{무한히 자주}\rbrace$ 가 $\lbrace X_1=1\rbrace$ 과 같아 확률이 $\tfrac12$ 다.

## 확률의 결정

정리는 꼬리사건의 확률이 $0$ 인지 $1$ 인지 정하지 않는다. 독립 사건열의 상극한에 대해서는 [Borel–Cantelli 보조정리](borel-cantelli.md)가 이를 정한다. 확률의 합이 유한하면 $0$ 이고 무한하면 $1$ 이다.

## Hewitt–Savage 0-1 법칙

독립 동일분포열에서는 유한 개 좌표의 치환으로 바뀌지 않는 사건도 확률이 $0$ 이나 $1$ 이다. 이를 Hewitt–Savage 0-1 법칙(Hewitt–Savage zero-one law)이라 하고, 이 모임은 꼬리 σ 대수보다 크다. $\lbrace\sum_{k\le n}X_k\gt 0\thickspace\text{무한히 자주}\rbrace$ 은 꼬리사건이 아니지만 치환에 불변이므로 확률이 $0$ 이나 $1$ 이다. 증명과 교환가능성과의 관계는 [de Finetti 정리](de-finetti-theorem.md)에 있다.

# 활용

- [큰 수의 법칙](law-of-large-numbers.md)에서 표본평균의 극한은 꼬리 가측이다. 독립이면 극한이 존재하는 사건의 확률이 $0$ 이나 $1$ 이고, 존재할 때 극한값은 상수다.
- 독립 무작위 부호 $\varepsilon_n$ 을 붙인 급수 $\sum_n\varepsilon_na_n$ 은 확률 $1$ 로 수렴하거나 확률 $1$ 로 발산한다. 수렴하는 쪽인 조건은 $\sum_n a_n^2\lt\infty$ 이고, [Kolmogorov 세 급수 정리](kolmogorov-three-series.md)로 증명된다.
- [침투](percolation.md)에서 무한 성분이 존재하는 사건은 유한 개 변의 상태를 바꿔도 변하지 않으므로 꼬리사건이고, 확률이 $0$ 이나 $1$ 이다. 임계 확률 $p_c$ 는 이 확률이 $0$ 에서 $1$ 로 바뀌는 경계다.
- [무작위 걷기](random-walks.md)가 원점으로 무한히 자주 돌아오는 사건은 Hewitt–Savage 0-1 법칙으로 확률이 $0$ 이나 $1$ 이고, 재귀와 비재귀의 이분법이 여기서 나온다.

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [Dynkin 계](dynkin-system.md)

## 더 알아보기

- [Kolmogorov 세 급수 정리](kolmogorov-three-series.md)

#probability #measure_theory #theorem
