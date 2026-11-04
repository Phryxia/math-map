# 큰 수의 법칙

# 개요

**큰 수의 법칙(law of large numbers)** 은 독립 확률변수들의 표본평균이 기댓값으로 수렴한다는 정리다. 동전을 여러 번 던지면 앞면 비율이 $1/2$ 근처에 머물지만, 던진 결과는 매번 달라서 이 비율이 $1/2$ 로 간다는 것은 따로 증명해야 한다. 이 정리는 표본평균이 기댓값에서 벗어날 확률이 던진 횟수가 커질수록 $0$ 으로 간다는 것을 보여, 상대빈도로 확률을 추정하는 근거가 된다.

# 직관

동전을 $n$ 번 던져 앞면이면 $1$, 뒷면이면 $0$ 을 적고 평균을 낸다. 한 번 던진 결과의 분산은 $1/4$ 이고, 서로 독립인 $n$ 개를 더하면 분산이 $n/4$, 평균을 내면 $1/(4n)$ 이다. $n=100$ 이면 표준편차가 $0.05$ 이고 $n=10000$ 이면 $0.005$ 다. 던질수록 앞면 비율의 분포가 $1/2$ 주위로 좁아진다.

좁아진 정도를 벗어날 확률로 바꾸는 데 [Chebyshev 부등식](concentration-inequalities.md)을 쓴다. 비율이 $1/2$ 에서 $0.1$ 이상 벗어날 확률은 분산을 $0.1^2$ 로 나눈 값 이하이므로, $n=100$ 에서 $0.25$ 이하, $n=10000$ 에서 $0.0025$ 이하다. 상한이 $1/(4n\cdot 0.01)$ 이므로 $n\to\infty$ 에서 $0$ 으로 간다.

이 계산은 $n$ 마다 지금 벗어나 있을 확률이 작다는 것만 말한다. 한 번 던지기 시작한 무한 수열을 끝까지 따라갈 때, 비율이 $1/2$ 에서 $0.1$ 이상 벗어나는 $n$ 이 무한히 많을 수도 있다. 그런 일이 확률 $0$ 이라는 것은 따로 증명해야 하고, 그 진술이 더 강하다.

# 정의

확률변수열 $X_1,X_2,\dots$ 가 서로 독립이고 같은 분포를 따르면 **독립 동일분포(independent and identically distributed, i.i.d.)** 라 한다. 표본평균을 다음으로 쓴다.

$$
\overline X_n=\frac1n\sum_{i=1}^n X_i
$$

직관 절의 동전에서 $X_i$ 는 $0$ 과 $1$ 을 확률 $1/2$ 씩 취하는 i.i.d. 열이고, $\overline X_n$ 은 처음 $n$ 번의 앞면 비율이다. 처음 네 번이 앞, 뒤, 앞, 앞이면 $\overline X_4=3/4$ 이다.

## 수렴 개념

확률변수열 $Y_n$ 과 확률변수 $Y$ 에 대해 세 가지 수렴을 구별한다([확률변수의 수렴](convergence-of-random-variables.md)).

**확률수렴(convergence in probability)**:

$$
\forall \varepsilon\gt 0:\quad \lim_{n\to\infty}P\big(\vert Y_n-Y\vert\gt\varepsilon\big)=0
$$

**거의 확실한 수렴(almost sure convergence)**:

$$
P\negthinspace\left(\left\lbrace\omega\in\Omega:\ \lim_{n\to\infty}Y_n(\omega)=Y(\omega)\right\rbrace\right)=1
$$

**제곱평균 수렴(convergence in mean square)**, 곧 $L^2$ 수렴:

$$
\lim_{n\to\infty}\mathbb E\big\lbrack\vert Y_n-Y\vert^2\big\rbrack=0
$$

동전에서 $Y_n=\overline X_n$, $Y=1/2$ 로 두면 $\mathbb E\lbrack\vert Y_n-1/2\vert^2\rbrack=1/(4n)\to 0$ 이므로 $L^2$ 수렴한다. 직관 절의 Chebyshev 계산이 확률수렴이고, 직관 절 마지막 문단의 진술이 거의 확실한 수렴이다.

# 성질

## 수렴 개념 사이의 관계

거의 확실한 수렴은 확률수렴을 함의하고, $L^2$ 수렴도 확률수렴을 함의한다. 반대 방향은 일반적으로 성립하지 않으며, 거의 확실한 수렴과 $L^2$ 수렴 사이에는 어느 쪽 함의도 없다.

## 약한 법칙과 강한 법칙

**약한 큰 수의 법칙(weak law of large numbers, WLLN)**: $X_i$ 가 i.i.d.이고 기댓값 $\mu$ 가 존재하면(절댓값의 기댓값이 유한하면) 표본평균이 $\mu$ 로 확률수렴한다.

$$
\overline X_n\ \xrightarrow{\ P\ }\ \mu
$$

**강한 큰 수의 법칙(strong law of large numbers, SLLN)**: 같은 조건에서 표본평균이 $\mu$ 로 거의 확실하게 수렴한다. Kolmogorov 가 증명했다[^1].

$$
P\negthinspace\left(\lim_{n\to\infty}\overline X_n=\mu\right)=1
$$

두 정리 모두 분산의 유한성을 요구하지 않는다. 분산 조건은 아래 Chebyshev 증명에서만 쓴다.

## 약한 법칙의 Chebyshev 증명

분산이 유한하다고 가정한다. 독립성에서 분산이 가법적이므로 표본평균의 분산이 $n$ 으로 나뉘고, 여기에 Chebyshev 부등식을 적용한다.

$$
P\big(\vert\overline X_n-\mu\vert\ge\varepsilon\big)
\le\frac{\mathrm{Var}(\overline X_n)}{\varepsilon^2}
=\frac{\sigma^2}{n\varepsilon^2}\ \xrightarrow[n\to\infty]{}\ 0
$$

이 부등식은 $L^2$ 수렴까지 준다. 독립성은 완전히 쓰이지 않고 쌍마다 상관이 없다는 조건이면 충분하다. 분산이 무한한 경우의 약한 법칙(Khinchin)은 절단 논법(truncation)을 쓴다. 절댓값이 상수 $c$ 를 넘는 부분을 잘라낸 변수에 위 논법을 적용하고, 잘라낸 꼬리의 기여가 적분 가능성으로 $c$ 를 키우면 $0$ 으로 간다.

## 강한 법칙의 증명

4 차 모멘트가 유한하다고 가정하면 증명이 짧다. 중심화한 합의 4 차 모멘트를 전개하면 독립성 때문에 남는 항의 개수가 $n$ 의 제곱 규모이므로 다음을 얻는다.

$$
\mathbb E\big[(\overline X_n-\mu)^4\big]=O\negthinspace\left(\frac1{n^2}\right),\qquad
\sum_{n\ge1}P\big(\vert\overline X_n-\mu\vert\gt\varepsilon\big)\le\sum_{n\ge1}\frac{O(n^{-2})}{\varepsilon^4}\lt\infty
$$

급수가 수렴하므로 [Borel–Cantelli 보조정리](borel-cantelli.md)로 편차 사건이 무한히 자주 일어날 확률이 $0$ 이고 거의 확실한 수렴을 얻는다. 절댓값의 기댓값만 유한한 일반적인 경우는 절단과 Kolmogorov 의 최대부등식, 또는 역 martingale 수렴 정리(reverse martingale convergence theorem)를 쓴다[^2].

## 조건의 필요성

절댓값의 기댓값이 무한하면 결론이 깨진다. [Cauchy 분포](cauchy-distribution.md)를 따르는 i.i.d. 표본의 표본평균은 다시 같은 Cauchy 분포를 따르므로 $n$ 이 커져도 집중하지 않는다. 절댓값의 기댓값이 무한한 i.i.d. 열에서는 표본평균의 절댓값의 상극한이 거의 확실하게 무한대다.

독립성도 필수는 아니지만 대체 조건이 필요하다. $X_i$ 가 모두 같은 변수 $X$ 이면 표본평균이 항상 $X$ 이고 상수로 수렴하지 않는다. [에르고딕 정리](ergodic-theorem.md)는 독립성을 정상성과 에르고딕성으로 바꾼 일반화이고, [Markov 연쇄](markov-chains.md)의 시간평균이 그 사례다.

## 수렴 속도

큰 수의 법칙으로는 수렴만 나오고 속도는 나오지 않는다. 편차의 크기는 [중심극한정리](central-limit-theorem.md)가 재고, 표본평균의 오차는 전형적으로 $n$ 의 제곱근의 역수 규모다.

# 활용

## Monte Carlo 적분

계산하려는 적분을 기댓값으로 바꾸고 표본평균으로 근사한다. 예를 들어 구간 $[0,1]$ 에서 함수 $g$ 의 적분은 [균등분포](uniform-distribution.md) $U$ 에 대한 $g(U)$ 의 기댓값이므로 다음과 같다.

$$
\int_0^1 g(t)\thinspace dt=\mathbb E[g(U)]\approx\frac1n\sum_{i=1}^n g(U_i)
$$

## 통계적 추정의 일치성

표본평균은 모평균의 일치추정량이다. 같은 논리를 함수에 적용하면 표본적률이 모적률로 수렴하고, 적률법과 [최대가능도 추정](maximum-likelihood.md)의 일치성 증명이 여기서 시작한다. 경험적 누적분포함수가 참 분포함수로 균등하게 수렴한다는 [Glivenko–Cantelli 정리](glivenko-cantelli.md)도 큰 수의 법칙을 각 점에서 적용한 뒤 단조성으로 균등화한 것이다.

## 빈도주의적 해석

[유한 확률 공간](probability.md)에서 확률을 같은 가능성을 가진 경우의 비율로 정의하면, 강한 법칙은 그 정의가 반복 시행의 극한 빈도와 일치한다는 진술이다. 확률 개념 자체를 빈도로 정의하려는 von Mises 의 시도는 순환에 빠지므로, Kolmogorov 공리에서 출발해 큰 수의 법칙을 정리로 얻는다.

[^1]: Manjunath Krishnapur, "Strong law of large numbers", Probability Theory lecture notes, IISc, §2.10 (i.i.d.와 절댓값 기댓값 유한 조건 아래 거의 확실한 수렴). https://math.iisc.ac.in/~manju/Old/ProbTheory/Notes/10-13%20SLLN%20to%20Hoeffding.pdf
[^2]: Terence Tao, "275A, Notes 3: The weak and strong law of large numbers". https://terrytao.wordpress.com/2015/10/23/275a-notes-3-the-weak-and-strong-law-of-large-numbers/

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [수열의 극한](limits.md)

## 더 알아보기

- [중심극한정리](central-limit-theorem.md)
- [집중부등식](concentration-inequalities.md)
- [에르고딕 정리](ergodic-theorem.md)

#probability #statistics #measure_theory #theorem
