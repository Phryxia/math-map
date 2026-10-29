# 지수분포

# 개요

**지수분포(exponential distribution)** 는 언제 일어날지 모르는 일이 처음 일어날 때까지 걸리는 시간의 분포다. 방사성 원자 하나가 붕괴할 때까지의 시간을 재면, 이미 한 시간을 버틴 원자가 다음 $10$ 분 안에 붕괴할 확률은 방금 생긴 원자가 처음 $10$ 분 안에 붕괴할 확률과 같다. 지수분포는 지난 시간이 앞으로의 확률을 바꾸지 않는 이런 대기시간을 $P(T\gt t)=e^{-\lambda t}$ 하나로 나타낸다.

# 직관

반감기가 한 시간인 원자가 $t$ 시간 뒤에도 붕괴하지 않았을 확률을 $G(t)$ 라 한다. 한 시간 뒤에 남아 있을 확률이 $G(1)=\frac12$ 이다. 한 시간을 버틴 원자가 다시 한 시간을 버틸 확률도 $\frac12$ 이므로 $G(2)=\frac12\cdot\frac12=\frac14$ 다.

같은 이유로 $G(t+s)=G(t)G(s)$ 가 모든 $t,s\ge 0$ 에서 성립한다. 반 시간을 두 번 버티면 한 시간을 버틴 것이므로 $G(\frac12)^2=\frac12$ 이고 $G(\frac12)=2^{-1/2}$ 이다. 이렇게 하면 모든 유리수 시각에서 $G(t)=2^{-t}$ 가 나온다.

$G$ 는 시간이 지날수록 줄어드므로 유리수 사이의 값도 정해지고, 모든 $t\ge 0$ 에서 $G(t)=2^{-t}=e^{-t\log 2}$ 다. 반감기가 아니라 다른 값에서 시작해도 같은 계산으로 $G(t)=e^{-\lambda t}$ 꼴이 나온다.

# 정의

$\lambda\gt 0$ 에 대해 [확률밀도](probability-density.md)가 다음과 같은 확률변수 $T$ 는 모수 $\lambda$ 인 지수분포를 따른다고 하고 $T\sim\mathrm{Exp}(\lambda)$ 로 쓴다.

$$
f(t)=\lambda e^{-\lambda t}\quad(t\ge 0),\qquad f(t)=0\quad(t\lt 0)
$$

밀도를 적분하면 $P(T\gt t)=e^{-\lambda t}$ 다. $\lambda$ 를 **비율(rate)** 이라 하고, 단위 시간에 사건이 일어나는 빈도를 나타낸다.

# 성질

## 평균과 분산

**정리.** $T\sim\mathrm{Exp}(\lambda)$ 이면 $\mathbb E\lbrack T\rbrack=1/\lambda$ 이고 $\mathrm{Var}(T)=1/\lambda^2$ 이다.

증명의 요지. 음이 아닌 확률변수에서 $\mathbb E\lbrack T\rbrack=\int_0^\infty P(T\gt t)\thinspace dt=\int_0^\infty e^{-\lambda t}\thinspace dt=1/\lambda$ 다. 부분적분으로 $\mathbb E\lbrack T^2\rbrack=2/\lambda^2$ 이고, 분산은 $2/\lambda^2-1/\lambda^2$ 이다.

## 무기억성

**정리.** $T\sim\mathrm{Exp}(\lambda)$ 이면 모든 $s,t\ge 0$ 에서 다음이 성립한다.

$$
P(T\gt s+t\mid T\gt s)=P(T\gt t)
$$

거꾸로 $\lbrack 0,\infty)$ 에 값을 갖고 $P(T\gt t)$ 가 모든 $t$ 에서 양수인 확률변수가 이 성질을 만족하면 $T$ 는 지수분포를 따른다.[^1]

증명의 요지. 앞 방향은 $e^{-\lambda(s+t)}/e^{-\lambda s}=e^{-\lambda t}$ 다. 뒤 방향은 $G(t)=P(T\gt t)$ 가 $G(s+t)=G(s)G(t)$ 를 만족하고 감소하므로, 직관 절의 계산대로 유리수에서 값을 정한 뒤 단조성으로 넓혀 $G(t)=G(1)^t$ 를 얻는다. $\lambda=-\log G(1)$ 로 두면 된다.

이 성질을 **무기억성(memoryless property)** 이라 한다. 정수값 확률변수 가운데서는 [기하분포](geometric-distribution.md)가 같은 성질을 만족한다.

## 최솟값

**정리.** $T_1,\dots,T_n$ 이 독립이고 $T_i\sim\mathrm{Exp}(\lambda_i)$ 이면 $\min_iT_i\sim\mathrm{Exp}(\lambda_1+\cdots+\lambda_n)$ 이고, 최솟값이 $T_i$ 일 확률은 $\lambda_i/(\lambda_1+\cdots+\lambda_n)$ 이다.[^1]

증명의 요지. 독립성으로 $P(\min_iT_i\gt t)=\prod_ie^{-\lambda_it}=e^{-(\sum_i\lambda_i)t}$ 다. 둘째 진술은 $n=2$ 에서 $P(T_1\lt T_2)=\int_0^\infty\lambda_1e^{-\lambda_1t}e^{-\lambda_2t}\thinspace dt=\lambda_1/(\lambda_1+\lambda_2)$ 이고, 나머지를 하나로 묶으면 일반의 경우가 된다.

## 합

**정리.** $T_1,\dots,T_n$ 이 독립이고 모두 $\mathrm{Exp}(\lambda)$ 를 따르면 합 $S_n=T_1+\cdots+T_n$ 의 밀도는 다음과 같다.

$$
f_{S_n}(t)=\frac{\lambda^nt^{n-1}}{(n-1)!}e^{-\lambda t}\qquad(t\ge 0)
$$

증명의 요지. $n$ 에 대한 귀납법으로 $f_{S_{n-1}}$ 과 $f$ 의 합성곱을 계산한다. $\int_0^t\frac{\lambda^{n-1}s^{n-2}}{(n-2)!}e^{-\lambda s}\lambda e^{-\lambda(t-s)}\thinspace ds$ 에서 지수 인수가 $e^{-\lambda t}$ 로 모이고 남는 적분이 $t^{n-1}/(n-1)$ 이다. 이 분포를 [감마분포](gamma-distribution.md) $\Gamma(n,\lambda)$ 라 하고, $n$ 을 양의 실수로 넓힐 때 $(n-1)!$ 자리에 [감마 함수](gamma-function.md) $\Gamma(n)$ 이 들어간다.

# 활용

- [Poisson 과정](poisson-process.md)에서 이웃한 사건 사이의 간격은 서로 독립이고 $\mathrm{Exp}(\lambda)$ 를 따른다. 무기억성 때문에 어느 시각에서 다시 기다려도 다음 사건까지의 시간이 같은 분포를 따른다.
- 연속시간 [Markov 연쇄](markov-chains.md)에서 한 상태에 머무는 시간은 지수분포를 따르고, 최솟값 정리가 다음에 어느 상태로 가는지의 확률을 준다.
- [Laplace 변환](laplace-transform.md)으로 쓰면 $\mathbb E\lbrack e^{-sT}\rbrack=\lambda/(\lambda+s)$ 이고, 독립 합의 변환은 이것의 곱이다.
- [지수족](exponential-families.md)에서 지수분포는 충분통계량이 $t$ 이고 자연모수가 $-\lambda$ 인 경우다.
- $\lbrack 0,\infty)$ 위에서 평균이 정해진 밀도 가운데 미분 엔트로피(differential entropy)가 가장 큰 것은 지수분포다.[^2]

[^1]: S. M. Ross, *Introduction to Probability Models*, 12th ed., Academic Press (2019), Chapter 5. 지수분포의 무기억성, 독립 지수분포의 최솟값, Poisson 과정의 간격.
[^2]: T. M. Cover, J. A. Thomas, *Elements of Information Theory*, 2nd ed., Wiley (2006), §12.2. 모멘트 제약 아래의 최대 엔트로피 분포.

# 연관 문서

## 선수지식

- [확률밀도](probability-density.md)
- [지수함수](exponential-function.md)

## 더 알아보기

- [Poisson 과정](poisson-process.md)
- [감마분포](gamma-distribution.md)

#probability #statistics #analysis
