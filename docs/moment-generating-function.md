# 적률생성함수

# 개요

**적률생성함수(moment generating function)** 는 확률변수 $X$ 에 대해 $t\mapsto\mathbb E\lbrack e^{tX}\rbrack$ 로 정한 함수다. 하루 평균 $2$ 건과 $3$ 건의 문의가 독립으로 들어오는 두 창구의 문의 수를 합쳤을 때 그 합의 분포를 구하려면, 두 분포를 경우마다 곱해 더하는 합성곱을 계산해야 한다. 적률생성함수는 독립인 확률변수의 합을 함수의 곱으로 바꾸어 이 계산을 곱셈 한 번으로 끝내고, 그 함수를 미분해 평균과 분산을 얻는다.

# 직관

두 창구의 문의 수 $X$, $Y$ 가 평균 $2$, $3$ 인 [Poisson 분포](poisson-distribution.md)를 따르고 독립이라 한다. 합이 $k$ 일 확률은 다음 합이다.

$$
P(X+Y=k)=\sum_{j=0}^{k}e^{-2}\frac{2^j}{j!}\cdot e^{-3}\frac{3^{k-j}}{(k-j)!}
$$

이 합을 닫힌 꼴로 만들려면 이항정리를 써서 $(2+3)^k$ 로 묶어야 하고, 분포가 바뀔 때마다 다른 묶는 방법을 찾아야 한다.

$e^{tX}$ 의 기댓값을 먼저 계산한다. 지수함수의 급수로 $\mathbb E\lbrack e^{tX}\rbrack=\sum_je^{-2}(2e^t)^j/j!=e^{2(e^t-1)}$ 이다. $X$ 와 $Y$ 가 독립이면 $e^{tX}$ 와 $e^{tY}$ 도 독립이므로 기댓값이 곱으로 갈라진다.

$$
\mathbb E\lbrack e^{t(X+Y)}\rbrack=e^{2(e^t-1)}\cdot e^{3(e^t-1)}=e^{5(e^t-1)}
$$

이것은 평균 $5$ 인 Poisson 분포의 같은 기댓값과 같다. 이 함수가 분포를 정한다는 것을 알면 $X+Y$ 가 평균 $5$ 인 Poisson 분포를 따른다는 결론이 나온다. $t=0$ 에서 미분하면 $5e^t\cdot e^{5(e^t-1)}$ 의 값 $5$ 가 평균이다.

# 정의

[확률변수](random-variables.md) $X$ 의 적률생성함수는 다음이다.

$$
M_X(t)=\mathbb E\lbrack e^{tX}\rbrack
$$

값은 $\lbrack 0,\infty\rbrack$ 에 있고 $M_X(0)=1$ 이다. $M_X(t)$ 가 유한한 $t$ 의 집합은 $0$ 을 포함하는 구간이다. $M_X(t)$ 가 유한한 곳에서 $K_X(t)=\log M_X(t)$ 를 **누적생성함수(cumulant generating function)** 라 한다.

표준적인 분포의 적률생성함수는 다음과 같다.

| 분포 | 적률생성함수 | 유한한 범위 |
| --- | --- | --- |
| [이항분포](binomial-distribution.md) $\mathrm B(n,p)$ | $(1-p+pe^t)^n$ | 모든 $t$ |
| Poisson 분포, 평균 $\lambda$ | $e^{\lambda(e^t-1)}$ | 모든 $t$ |
| [정규분포](normal-distribution.md) $N(\mu,\sigma^2)$ | $e^{\mu t+\sigma^2t^2/2}$ | 모든 $t$ |
| [지수분포](exponential-distribution.md), 비율 $\lambda$ | $\lambda/(\lambda-t)$ | $t\lt\lambda$ |
| [감마분포](gamma-distribution.md), 형태 $\alpha$, 비율 $\lambda$ | $\bigl(\lambda/(\lambda-t)\bigr)^\alpha$ | $t\lt\lambda$ |

# 성질

## 적률의 생성

**정리.** $M_X$ 가 어떤 $\delta\gt 0$ 에 대해 $(-\delta,\delta)$ 에서 유한하면 모든 $k$ 에서 $\mathbb E\lbrack\vert X\vert^k\rbrack$ 가 유한하고, $\vert t\vert\lt\delta$ 에서 다음이 성립한다.

$$
M_X(t)=\sum_{k=0}^{\infty}\frac{\mathbb E\lbrack X^k\rbrack}{k!}t^k,\qquad M_X^{(k)}(0)=\mathbb E\lbrack X^k\rbrack
$$

증명의 요지. $e^{\vert tx\vert}\le e^{tx}+e^{-tx}$ 이므로 $\mathbb E\lbrack e^{\vert tX\vert}\rbrack$ 가 유한하다. $e^{tX}$ 의 급수의 부분합이 $e^{\vert tX\vert}$ 로 눌리므로 [지배 수렴 정리](dominated-convergence.md)로 기댓값과 합의 순서를 바꾼다.

$k$ 번째 적률이 $t^k/k!$ 의 계수로 나오므로 이 함수를 적률생성함수라 부른다. 누적생성함수에서는 $K_X'(0)=\mathbb E\lbrack X\rbrack$, $K_X''(0)=\mathrm{Var}(X)$ 이다.

## 독립 합

**정리.** $X$ 와 $Y$ 가 독립이면 두 적률생성함수가 유한한 $t$ 에서 $M_{X+Y}(t)=M_X(t)M_Y(t)$ 이고, $K_{X+Y}=K_X+K_Y$ 다.

증명의 요지. $e^{tX}$ 와 $e^{tY}$ 가 독립이므로 곱의 기댓값이 기댓값의 곱이다.

## 유일성과 연속성

**정리.** $M_X$ 와 $M_Y$ 가 $0$ 을 포함하는 어떤 열린 구간에서 유한하고 같으면 $X$ 와 $Y$ 는 같은 분포를 따른다. $M_{X_n}$ 이 $0$ 을 포함하는 어떤 열린 구간에서 $M_X$ 로 각점 수렴하면 $X_n$ 은 $X$ 로 분포수렴한다.[^1]

증명의 요지. $(-\delta,\delta)$ 에서 유한한 $M_X$ 는 띠 $\lbrace z:\vert\mathrm{Re}\thinspace z\vert\lt\delta\rbrace$ 위의 정칙함수 $\mathbb E\lbrack e^{zX}\rbrack$ 로 늘어나고, 정칙함수는 실수 구간 위의 값으로 정해진다. 그러므로 허수축 위의 값, 곧 [특성함수](characteristic-functions.md)가 같고, 특성함수는 분포를 정한다.

## 볼록성

**정리.** $K_X$ 는 유한한 구간에서 볼록이다.

증명의 요지. $0\lt\lambda\lt 1$ 이면 [Hölder 부등식](holder-inequality.md)으로 $\mathbb E\lbrack e^{(\lambda s+(1-\lambda)t)X}\rbrack\le\mathbb E\lbrack e^{sX}\rbrack^\lambda\thinspace\mathbb E\lbrack e^{tX}\rbrack^{1-\lambda}$ 이고, 양변에 로그를 취한다.

## 적률생성함수가 없는 분포

[Cauchy 분포](cauchy-distribution.md)는 $t\ne 0$ 인 모든 $t$ 에서 $M_X(t)=\infty$ 다. [로그정규분포](lognormal-distribution.md)는 모든 적률이 유한하지만 $t\gt 0$ 인 모든 $t$ 에서 $M_X(t)=\infty$ 이고, 같은 적률을 갖는 다른 분포가 있다. 두 경우 모두 유일성 정리의 가정이 성립하지 않고, 분포는 특성함수로 다룬다.

# 활용

- [집중부등식](concentration-inequalities.md)의 Chernoff 한계(Chernoff bound)는 Markov 부등식을 $e^{tX}$ 에 적용한 $P(X\ge a)\le\inf_{t\gt 0}e^{-ta}M_X(t)$ 이다.
- [대편차 원리](large-deviations.md)의 Cramér 정리(Cramér's theorem)에서 표본평균의 비율함수는 누적생성함수의 [볼록 공액](convex-conjugate.md) $\sup_t\bigl(ta-K_X(t)\bigr)$ 이다.
- [지수족](exponential-families.md)의 로그분배함수 $A$ 에 대해 자연모수가 $\theta$ 일 때 [충분통계량](sufficient-statistics.md) $T$ 의 누적생성함수가 $A(\theta+t)-A(\theta)$ 이고, $A$ 의 미분이 $T$ 의 평균과 분산을 준다.
- [생성함수](generating-functions.md)에서 음이 아닌 정수값 확률변수의 확률생성함수 $\mathbb E\lbrack s^X\rbrack$ 에 $s=e^t$ 를 넣으면 적률생성함수가 된다.

[^1]: J. H. Curtiss, "A note on the theory of moment generating functions", *Annals of Mathematical Statistics* 13 (1942), 430–433.

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [생성함수](generating-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #analysis
