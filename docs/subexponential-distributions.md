# 부분지수 분포

# 개요

**부분지수 분포(subexponential distribution)** 는 독립인 값 여러 개의 합이 아주 크게 나올 때, 거의 언제나 그 가운데 한 값이 혼자 크게 나와서 그렇게 되는 분포다. 보험 청구 두 건의 합이 $10$ 을 넘을 확률을 구할 때, 청구액이 평균 $1$ 인 [지수분포](exponential-distribution.md)를 따르면 두 건이 함께 조금씩 커서 넘는 경우가 대부분이지만, 꼬리가 $x^{-2}$ 인 Pareto 분포를 따르면 한 건이 혼자 $10$ 을 넘는 경우가 대부분이다. 부분지수 분포에서는 값 $n$ 개의 합이 넘을 확률을 한 값이 넘을 확률의 $n$ 배로 계산한다.

# 직관

$X_1,X_2$ 가 독립이고 평균 $1$ 인 지수분포를 따르면 합은 [감마분포](gamma-distribution.md)를 따르고 다음이 나온다.

$$
P(X_1+X_2\gt x)=(1+x)e^{-x}
$$

$x=10$ 이면 한 값이 $10$ 을 넘을 확률은 $e^{-10}$ 이고 합이 넘을 확률은 그 $11$ 배다. 둘 중 하나가 넘을 확률은 약 $2e^{-10}$ 이므로, 합이 $10$ 을 넘는 경우의 대부분은 두 값이 모두 $10$ 아래인 경우다. $x$ 가 커지면 이 배율 $1+x$ 도 한없이 커진다.

$P(X\gt x)=x^{-2}$ ($x\ge 1$) 인 Pareto 분포에서는 사정이 다르다. 두 값이 모두 $x/2$ 를 넘을 확률은 $(x/2)^{-4}$ 로 $x^{-2}$ 보다 훨씬 작다. 그래서 합이 $x$ 를 넘으려면 거의 언제나 한 값이 $x$ 근처나 그 이상이어야 하고, 합이 넘을 확률은 둘 중 하나가 넘을 확률 $2x^{-2}$ 와 비가 $1$ 로 간다.

두 분포는 합과 한 값의 꼬리 비율로 갈린다. 지수분포는 이 비율이 무한대로 가고, Pareto 분포는 $2$ 로 간다.

# 정의

$\lbrack 0,\infty)$ 위의 분포 $F$ 가 모든 $x$ 에서 $\bar F(x)=1-F(x)\gt 0$ 이라 하자. $X_1,X_2$ 가 독립이고 분포가 $F$ 일 때 다음이 성립하면 $F$ 를 **부분지수 분포** 라 한다.[^1]

$$
\lim_{x\to\infty}\frac{P(X_1+X_2\gt x)}{P(X_1\gt x)}=2
$$

분포함수로는 [합성곱](convolution.md) $F^{\ast 2}$ 의 꼬리 $\overline{F^{\ast 2}}(x)$ 와 $\bar F(x)$ 의 비가 $2$ 로 가는 것이다. 직관 절의 Pareto 분포는 부분지수 분포이고 지수분포는 아니다.

# 성질

## n 개의 합

$F$ 가 부분지수 분포이면 모든 $n\ge 2$ 에서 다음이 성립한다. $S_n=X_1+\dots+X_n$, $M_n=\max_iX_i$ 다.[^1]

$$
P(S_n\gt x)\sim n\bar F(x)\sim P(M_n\gt x)
$$

$\sim$ 는 두 변의 비가 $1$ 로 간다는 뜻이다. 오른쪽 동치는 $P(M_n\gt x)=1-(1-\bar F(x))^n$ 에서 나온다. 합이 큰 사건과 최댓값이 큰 사건의 확률이 같아지는 것을 **단일 큰 도약 원리(single big jump principle)** 라 한다.

## 긴 꼬리

$F$ 가 부분지수 분포이면 모든 $y$ 에서 $\bar F(x-y)/\bar F(x)\to 1$ 이다.[^1] 꼬리를 $y$ 만큼 옮겨도 비가 $1$ 로 가는 분포를 **긴 꼬리 분포(long-tailed distribution)** 라 한다.

지수분포는 $\bar F(x-y)/\bar F(x)=e^y$ 라서 긴 꼬리가 아니다.

## 지수보다 무거운 꼬리

$F$ 가 부분지수 분포이면 모든 $\varepsilon\gt 0$ 에서 $e^{\varepsilon x}\bar F(x)\to\infty$ 다. 그래서 모든 $s\gt 0$ 에서 [적률생성함수](moment-generating-function.md) $\mathbb E\lbrack e^{sX}\rbrack$ 가 무한하다.

증명의 요지. 긴 꼬리이므로 $\bar F(n)/\bar F(n-1)\to 1$ 이고, 큰 $n$ 에서 이 비가 $e^{-\varepsilon/2}$ 보다 크다. 곱하면 $\bar F(n)$ 이 $e^{-\varepsilon n/2}$ 의 상수배보다 크다.

## 예

- 꼬리가 지수 $-\alpha$ 의 [정칙 변동](regular-variation.md) 함수인 분포는 부분지수 분포다. Pareto 분포와 [안정 분포](stable-distributions.md)의 양의 꼬리가 여기 든다.
- [로그정규분포](lognormal-distribution.md)는 부분지수 분포다. 모든 적률이 유한하지만 적률생성함수는 $s\gt 0$ 에서 무한하다.
- $0\lt\beta\lt 1$ 이면 $\bar F(x)=e^{-x^\beta}$ 인 Weibull 꼬리는 부분지수 분포다.
- 지수분포와 [감마분포](gamma-distribution.md)는 부분지수 분포가 아니다. 위 절에 따라 적률생성함수가 $0$ 근처에서 유한한 분포는 모두 부분지수 분포가 아니다.

## 무작위 개수의 합

$F$ 가 부분지수 분포이고, $N$ 이 $X_i$ 들과 독립인 자연수값 확률변수이며, 어떤 $\varepsilon\gt 0$ 에서 $\mathbb E\lbrack(1+\varepsilon)^N\rbrack\lt\infty$ 이면 다음이 성립한다.[^1]

$$
P(X_1+\dots+X_N\gt x)\sim\mathbb E\lbrack N\rbrack\thinspace\bar F(x)
$$

증명은 Kesten 부등식(Kesten's bound), 곧 모든 $\varepsilon\gt 0$ 에 대해 상수 $K$ 가 있어 모든 $n$, $x$ 에서 $\overline{F^{\ast n}}(x)\le K(1+\varepsilon)^n\bar F(x)$ 라는 것을 써서, 앞 절의 $n\bar F(x)$ 를 $N$ 의 분포로 평균한다.

# 활용

- [Cramér–Lundberg 모형](cramer-lundberg-model.md)의 파산 확률. 안전 부하가 $\theta$, 보험금의 평균이 $\mu$ 일 때, 보험금의 적분 꼬리 분포 $F_I(x)=\frac1\mu\int_0^x\bar F(y)\thinspace dy$ 가 부분지수 분포이면 다음이 성립한다.[^2]

$$
\psi(u)\sim\frac1{\theta\mu}\int_u^\infty\bar F(y)\thinspace dy
$$

파산 확률은 적분 꼬리 분포의 기하분포 개수 합의 꼬리로 쓰인다. 이 표현을 Pollaczek–Khinchine 공식(Pollaczek–Khinchine formula)이라 한다. 개수의 평균이 $1/\theta$ 이므로 무작위 개수의 합 절에서 이 식이 나온다. 파산은 거의 언제나 아주 큰 보험금 한 건으로 일어난다.

- [대기행렬](queues.md) M/G/1 에서 서비스 시간의 적분 꼬리 분포가 부분지수 분포이면, 대기 시간의 꼬리도 같은 꼴의 적분으로 줄어든다. 대기 시간이 Pollaczek–Khinchine 공식으로 같은 기하분포 개수의 합으로 쓰이기 때문이다.

[^1]: P. Embrechts, C. Klüppelberg, T. Mikosch, *Modelling Extremal Events for Insurance and Finance*, Springer (1997), §1.3 과 Appendix A3. 부분지수 분포의 정의, 긴 꼬리, Kesten 부등식, 무작위 개수의 합.
[^2]: P. Embrechts, N. Veraverbeke, "Estimates for the Probability of Ruin with Special Emphasis on the Possibility of Large Claims", *Insurance: Mathematics and Economics* 1 (1982), 55–72.

# 연관 문서

## 선수지식

- [정칙 변동](regular-variation.md)
- [Cramér–Lundberg 모형](cramer-lundberg-model.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
