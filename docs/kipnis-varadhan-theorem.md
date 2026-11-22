# Kipnis–Varadhan 정리

# 개요

**Kipnis–Varadhan 정리(Kipnis–Varadhan theorem)** 는 [가역 Markov 연쇄](reversible-markov-chains.md)를 따라 함숫값을 더한 합이 정규분포에 가까워진다는 정리다. 두 방을 오가는 사람이 방 0 에 있으면 $1$ 점, 방 1 에 있으면 $-1$ 점을 받는다면, 오래 지난 뒤 총점이 얼마나 퍼지는지가 이 정리의 물음이다.

이 정리는 합을 [Martingale](martingales.md)과 작은 나머지로 나누고, 나누는 데 필요한 방정식을 가역성으로 근사해 푼다.

# 직관

두 방 $0, 1$ 을 오가는 가역 Markov 연쇄를 둔다. 매 걸음 확률 $p$ 로 다른 방으로 옮기고 $1-p$ 로 머문다. 정상분포는 $(1/2,1/2)$ 이고 점수는 $f(0)=1$, $f(1)=-1$ 이다.

정상 상태에서 출발한 $S_n=f(X_0)+\dots+f(X_{n-1})$ 의 분산을 구한다. 걸음마다의 점수가 서로 독립이 아니므로 독립 합의 [중심극한정리](central-limit-theorem.md)를 그대로 쓸 수 없다.

전이행렬을 $P$ 라 하면 $Pf=(1-2p)f$ 이므로 $k$ 걸음 떨어진 두 점수의 공분산은 $(1-2p)^k$ 다. 공분산을 모두 더하면 $S_n$ 의 분산은 $n$ 에 대략 비례하고 비례 상수는 다음과 같다.

$$
\sigma^2=1+2\sum_{k=1}^{\infty}(1-2p)^k=\frac{1-p}{p}
$$

$p=1/2$ 이면 점수가 독립이어서 $\sigma^2=1$ 이다. $p=1/4$ 이면 한 방에 오래 머물러 같은 점수가 이어지므로 $\sigma^2=3$ 이다. 이 분산을 갖는 정규분포로 $S_n/\sqrt n$ 이 수렴하는지가 남은 물음이다.

방정식 $g-Pg=f$ 를 풀면 $g=f/(2p)$ 다. $f=g-Pg$ 를 합에 넣으면 다음이 나온다.

$$
S_n=\sum_{k=0}^{n-1}\bigl(g(X_{k+1})-Pg(X_k)\bigr)+g(X_0)-g(X_n)
$$

첫째 합은 증분의 조건부 기댓값이 $0$ 인 martingale 이고, 나머지 두 항은 $1/(2p)$ 이하다. 증분의 분산은 $E\lbrack g^2\rbrack-E\lbrack(Pg)^2\rbrack=(1-p)/p$ 이므로 martingale 의 중심극한정리로 $S_n/\sqrt n$ 이 분산 $\sigma^2$ 인 정규분포로 간다.

# 정의

$(X_k)$ 는 상태공간 $E$ 위에서 정상분포 $\pi$ 로 출발한 가역이고 에르고딕한 [Markov 연쇄](markov-chains.md)이고, $P$ 는 그 전이 작용소다. 가역성은 $P$ 가 $L^2(\pi)$ 에서 자기수반이라는 것과 같다. $f\in L^2(\pi)$ 는 $\int f\thinspace d\pi=0$ 인 함수다.

$P$ 가 자기수반이므로 [스펙트럼 정리](spectral-theorem.md)로 $f$ 에 대한 **스펙트럼 측도(spectral measure)** $\mu\_f$ 가 $\lbrack -1,1\rbrack$ 위에 정해지고, 모든 $k$ 에서 $\langle f,P^kf\rangle\_\pi=\int\lambda^k\mu\_f(d\lambda)$ 이다. 직관 절의 예에서 $f$ 는 고윳값 $1-2p$ 의 고유벡터이므로 $\mu\_f$ 는 $1-2p$ 에 놓인 질량 $1$ 의 점측도다.

$f$ 의 **점근 분산(asymptotic variance)** 은 다음 값이다.

$$
\sigma^2(f)=\int_{\lbrack -1,1\rbrack}\frac{1+\lambda}{1-\lambda}\thinspace\mu\_f(d\lambda)
$$

직관 절의 예에서는 $\lambda=1-2p$ 를 넣어 $(2-2p)/(2p)=(1-p)/p$ 다. 공분산이 절대수렴하면 이 값은 다음과 같다.

$$
\sigma^2(f)=\mathrm{Var}\thinspace f(X_0)+2\sum_{k\ge 1}\mathrm{Cov}\bigl(f(X_0),f(X_k)\bigr)
$$

# 성질

## Kipnis–Varadhan 정리

$\sigma^2(f)\lt\infty$ 이면 $S_n/\sqrt n$ 은 평균 $0$, 분산 $\sigma^2(f)$ 인 정규분포로 분포수렴한다[^1]. 경로 $t\mapsto S\_{\lfloor nt\rfloor}/\sqrt n$ 은 분산 $\sigma^2(f)$ 인 [Brown 운동](brownian-motion.md)으로 분포수렴한다.

증명의 요지. $\lambda\gt 0$ 마다 $(1+\lambda)g\_\lambda-Pg\_\lambda=f$ 의 해 $g\_\lambda$ 는 $L^2(\pi)$ 에 있다. 직관 절처럼 $S_n$ 을 $g\_\lambda$ 로 만든 martingale 과 나머지로 나눈다. 스펙트럼 측도로 계산하면 $\sigma^2(f)\lt\infty$ 일 때 $\lambda\Vert g\_\lambda\Vert^2\to 0$ 이고 martingale 증분이 $L^2$ 에서 수렴한다. 나머지가 $o(\sqrt n)$ 이 되도록 $\lambda=1/n$ 으로 잡는다.

## 조건의 뜻

$\sigma^2(f)\lt\infty$ 는 $\langle f,(I-P)^{-1}f\rangle\_\pi\lt\infty$ 와 동치다. 방정식 $g-Pg=f$ 의 해가 $L^2(\pi)$ 에 없어도 이 조건은 성립할 수 있고, 정리는 그 경우까지 다룬다.

## 연속시간

연속시간 가역 Markov 과정에서도 같은 정리가 성립한다. 생성작용소 $L$ 에 대해 조건은 $\langle f,(-L)^{-1}f\rangle\_\pi\lt\infty$ 이고, $\int_0^t f(X_s)ds/\sqrt t$ 의 극한 분산은 그 값의 두 배다[^1].

# 활용

- 표본 평균의 오차. [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)의 표본 평균은 $\sigma^2(f)/n$ 의 분산으로 참값 둘레에 퍼진다. $\sigma^2(f)/\mathrm{Var}\_\pi f$ 를 적분 자기상관 시간(integrated autocorrelation time)이라 하고, 독립 표본 몇 개에 해당하는지를 이것으로 계산한다. Metropolis–Hastings 연쇄는 가역이므로 이 정리를 쓴다.
- 배타 과정의 표지 입자. Kipnis 와 Varadhan 은 대칭 단순 배타 과정(symmetric simple exclusion process)에서 한 입자의 위치가 Brown 운동으로 수렴함을 이 정리로 증명했다[^1].
- 무작위 환경의 무작위 걷기. 입자에서 본 환경의 과정이 가역이므로, [확률적 균질화](stochastic-homogenization.md)의 무작위 전도도 걷기가 Brown 운동으로 수렴하는 증명에 이 정리를 쓴다[^2].

[^1]: C. Kipnis, S. R. S. Varadhan, "Central limit theorem for additive functionals of reversible Markov processes and applications to simple exclusions", *Communications in Mathematical Physics* **104** (1986), 1–19.

[^2]: A. De Masi, P. A. Ferrari, S. Goldstein, W. D. Wick, "An invariance principle for reversible Markov processes. Applications to random motions in random environments", *Journal of Statistical Physics* **55** (1989), 787–855.

# 연관 문서

## 선수지식

- [가역 Markov 연쇄](reversible-markov-chains.md)
- [Martingale](martingales.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #functional_analysis
