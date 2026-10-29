# 극값 분포

# 개요

**극값 분포(extreme value distribution)** 는 서로 독립이고 같은 분포를 따르는 확률변수 여럿의 최댓값을 옮기고 늘렸을 때 나올 수 있는 극한분포다. 강의 해마다 최고 수위를 $100$ 년 동안 기록했을 때 앞으로 $100$ 년 안에 그 기록을 넘을 수위가 얼마인지 정하려면, 최댓값이 얼마나 멀리 나가는지를 알아야 한다. 최댓값의 분포는 한 해의 분포를 $100$ 번 곱한 것이고, 극값 분포는 그중 꼬리의 모양만 남겨 세 꼴 가운데 하나로 최댓값을 근사한다.

# 직관

$X_1,\dots,X_n$ 이 독립이고 분포함수가 $F$ 이면 최댓값 $M_n=\max_iX_i$ 는 $P(M_n\le x)=F(x)^n$ 이다. $n$ 이 커지면 $F(x)^n$ 은 $F(x)\lt 1$ 인 모든 $x$ 에서 $0$ 으로 가므로, 최댓값을 적당히 옮기고 늘려야 퇴화하지 않는 극한이 나온다. 그 방법은 $1-F(x)$ 가 줄어드는 모양으로 정해진다.

꼬리가 $1-F(x)=e^{-x}$ 처럼 지수적으로 줄면 $\log n$ 만큼 옮긴다. $P(M_n-\log n\le x)=(1-e^{-x}/n)^n$ 이 $\exp(-e^{-x})$ 로 간다.

꼬리가 $x\ge 1$ 에서 $1-F(x)=x^{-\alpha}$ 처럼 거듭제곱으로 줄면 $n^{1/\alpha}$ 로 나눈다. $P(M_n\le n^{1/\alpha}x)=(1-x^{-\alpha}/n)^n$ 이 $x\gt 0$ 에서 $\exp(-x^{-\alpha})$ 로 간다.

값이 $\lbrack 0,1\rbrack$ 의 [균등분포](uniform-distribution.md)처럼 위로 막혀 있으면 끝점 $1$ 과의 차이를 $n$ 배로 늘린다. $P\bigl(n(M_n-1)\le x\bigr)=(1+x/n)^n$ 이 $x\le 0$ 에서 $e^{x}$ 로 간다. 꼬리의 세 모양에서 세 가지 극한이 나왔다.

# 정의

다음 세 분포함수와 이들을 $x\mapsto ax+b$ ($a\gt 0$) 로 옮긴 것을 극값 분포라 한다. $\alpha\gt 0$ 이다.

- **Gumbel 분포(Gumbel distribution).** $\Lambda(x)=\exp(-e^{-x})$, $x\in\mathbb R$.
- **Fréchet 분포(Fréchet distribution).** $\Phi_\alpha(x)=\exp(-x^{-\alpha})$, $x\gt 0$. $x\le 0$ 에서는 $0$ 이다.
- **Weibull 분포(Weibull distribution).** $\Psi_\alpha(x)=\exp\bigl(-(-x)^{\alpha}\bigr)$, $x\le 0$. $x\gt 0$ 에서는 $1$ 이다.

세 꼴은 모수 $\xi\in\mathbb R$ 하나로 묶인다. $1+\xi x\gt 0$ 에서 정의한 **일반화 극값 분포(generalized extreme value distribution)** 는 다음이다.

$$
G_\xi(x)=\exp\bigl(-(1+\xi x)^{-1/\xi}\bigr)
$$

$\xi\gt 0$ 이면 Fréchet 꼴, $\xi\lt 0$ 이면 Weibull 꼴이고, $\xi\to 0$ 의 극한이 Gumbel 분포다.

수열 $a_n\gt 0$, $b_n$ 이 있어 $F(a_nx+b_n)^n\to G(x)$ 가 $G$ 의 모든 연속점에서 성립하면 $F$ 가 $G$ 의 **끌림 영역(domain of attraction)** 에 든다고 한다.

# 성질

## Fisher–Tippett–Gnedenko 정리

**정리(Fisher–Tippett–Gnedenko 정리, Fisher–Tippett–Gnedenko theorem).** $F(a_nx+b_n)^n$ 이 퇴화하지 않는 분포함수 $G$ 로 수렴하면 $G$ 는 극값 분포다.[^1][^2]

증명의 요지. 최댓값 $nk$ 개는 최댓값 $n$ 개짜리 묶음 $k$ 개의 최댓값이므로, 극한 $G$ 는 모든 자연수 $k$ 에 대해 $a\gt 0$, $b$ 가 있어 $G(ax+b)^k=G(x)$ 를 만족한다. 이 성질을 **최대 안정(max-stable)** 이라 하고, 이 함수방정식의 퇴화하지 않는 해가 세 꼴뿐임을 보인다.

Gumbel 분포는 $\Lambda(x+\log n)^n=\Lambda(x)$ 를 만족하고, Fréchet 분포는 $\Phi_\alpha(n^{1/\alpha}x)^n=\Phi_\alpha(x)$ 를 만족한다.

## Poisson 근사

**정리.** $0\le\tau\lt\infty$ 이고 $u_n$ 이 수열이면, $n\bigl(1-F(u_n)\bigr)\to\tau$ 와 $P(M_n\le u_n)\to e^{-\tau}$ 는 동치다.[^2]

증명의 요지. $P(M_n\le u_n)=\bigl(1-(1-F(u_n))\bigr)^n$ 이고, $p_n\to 0$ 일 때 $(1-p_n)^n\to e^{-\tau}$ 와 $np_n\to\tau$ 가 동치다.

$u_n$ 을 넘는 표본의 개수는 [이항분포](binomial-distribution.md) $\mathrm B\bigl(n,1-F(u_n)\bigr)$ 를 따르고, 그 평균이 $\tau$ 로 가면 개수가 평균 $\tau$ 인 [Poisson 분포](poisson-distribution.md)로 수렴한다. 최댓값이 $u_n$ 이하라는 것은 넘는 개수가 $0$ 이라는 것이다.

## 끌림 영역

**정리.** $F$ 가 $\Phi_\alpha$ 의 끌림 영역에 드는 것은 모든 $x\gt 0$ 에서 $\bigl(1-F(tx)\bigr)/\bigl(1-F(t)\bigr)\to x^{-\alpha}$ ($t\to\infty$) 인 것과 동치다.[^2]

꼬리가 거듭제곱으로 줄면 Fréchet 꼴, 값이 위로 막혀 있고 끝점 근처에서 거듭제곱으로 줄면 Weibull 꼴이다. [지수분포](exponential-distribution.md), [정규분포](normal-distribution.md), [감마분포](gamma-distribution.md), [로그정규분포](lognormal-distribution.md)처럼 꼬리가 어떤 거듭제곱보다 빨리 줄면 Gumbel 꼴이다. 표준정규분포에서는 $b_n=\sqrt{2\log n}$ 근처의 값과 $a_n=1/\sqrt{2\log n}$ 으로 $M_n$ 이 Gumbel 분포로 수렴한다.

# 활용

- 수문학에서 해마다의 최고 수위나 강수량에 일반화 극값 분포를 맞추고, $100$ 년에 한 번 넘을 수준을 그 분포의 $0.99$ 분위수로 정한다.
- [순서통계량](order-statistics.md)에서 최댓값 $X_{(n)}$ 의 극한분포가 이 문서의 극값 분포다.
- [쿠폰 수집가 문제](coupon-collector.md)에서 모두 모으는 데 걸리는 횟수를 $n\log n$ 만큼 옮기고 $n$ 으로 나누면 Gumbel 분포로 수렴한다.

[^1]: B. Gnedenko, "Sur la distribution limite du terme maximum d'une série aléatoire", *Annals of Mathematics* 44 (1943), 423–453.
[^2]: L. de Haan, A. Ferreira, *Extreme Value Theory: An Introduction*, Springer (2006), §1.1 과 §1.2. 극한분포의 세 꼴, Poisson 근사, 끌림 영역의 조건.

# 연관 문서

## 선수지식

- [순서통계량](order-statistics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
