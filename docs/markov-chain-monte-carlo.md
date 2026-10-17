# Markov 연쇄 Monte Carlo

# 개요

**Markov 연쇄 Monte Carlo(Markov chain Monte Carlo, MCMC)** 는 목표분포 $\pi$ 를 불변분포로 갖는 [Markov 연쇄](markov-chains.md)를 만들어 그 궤적을 $\pi$ 의 표본으로 쓰는 방법이다. 연쇄를 짓는 데 쓰는 것은 두 점의 밀도 비 $\pi(y)/\pi(x)$ 뿐이므로 정규화상수를 모르는 분포에서도 표본이 나온다. Metropolis–Hastings 알고리즘이 제안과 수락으로 그 연쇄를 구성하고, Gibbs 표본추출이 좌표별 조건부분포로 같은 일을 한다.

# 직관

모수 $\theta\in\mathbb R^{100}$ 의 사후밀도가 $\pi(\theta)=p(\theta)L(\theta)/Z$ 이고 $Z=\int p(\theta)L(\theta)\thinspace d\theta$ 다. 사후평균 $\int\theta\thinspace\pi(\theta)\thinspace d\theta$ 를 구하려면 분자와 분모 두 적분이 모두 필요하다. 적분을 격자로 근사하면 축마다 점 10 개씩만 잡아도 격자점이 $10^{100}$ 개이고, 한 점에서 $p$ 와 $L$ 을 한 번 계산하는 데 드는 시간이 아무리 짧아도 합이 끝나지 않는다.

$Z$ 를 몰라도 두 점의 비 $\pi(y)/\pi(x)=p(y)L(y)/\big(p(x)L(x)\big)$ 는 계산된다. 지금 있는 점 $x$ 에서 가까운 점 $y$ 를 하나 뽑아, 비가 $1$ 이상이면 $y$ 로 옮기고 $1$ 보다 작으면 그 비의 확률로 옮긴다. 이 걸음은 밀도가 큰 곳에 오래 머물고 작은 곳을 드물게 지나며, 오래 돌린 뒤 각 영역에 머문 시간의 비율이 그 영역의 $\pi$ 확률과 같아진다. 사후평균은 궤적 $\theta\_1,\dots,\theta\_n$ 의 표본평균으로 나온다.

# 정의

## 불변분포를 목표로 하는 연쇄

MCMC 는 목표분포 $\pi$ 를 불변분포로 갖는 전이핵 $K$ 를 짓고 그 연쇄의 궤적 $X\_0,X\_1,\dots$ 을 $\pi$ 의 표본으로 쓰는 방법이다. 불변성은 다음 등식이다.

$$
\int \pi(dx)\thinspace K(x,A)=\pi(A)
$$

$K(x,A)$ 는 $x$ 에서 한 걸음에 가측집합 $A$ 로 갈 확률이다. 목표분포가 주어지고 전이핵이 미지인 점이 Markov 연쇄의 통상적인 문제와 반대다.

## 세부균형

세부균형(detailed balance)은 밀도 $\pi$ 와 전이밀도 $K$ 가 모든 $x,y$ 에서 다음을 만족하는 것이다.

$$
\pi(x)K(x,y)=\pi(y)K(y,x)
$$

이를 만족하는 연쇄를 가역(reversible)이라 한다.

## Metropolis–Hastings 알고리즘

Metropolis–Hastings 알고리즘은 제안밀도 $q(x,y)$ 와 수락확률

$$
\alpha(x,y)=\min\lbrace 1,\thinspace \tfrac{\pi(y)q(y,x)}{\pi(x)q(x,y)}\rbrace
$$

로 전이핵을 짓는다. 현재 점 $x$ 에서 $y$ 를 $q(x,\cdot)$ 에서 뽑고, 확률 $\alpha(x,y)$ 로 $y$ 로 옮기고 나머지 확률로 $x$ 에 머문다. 비 $\pi(y)/\pi(x)$ 만 들어가므로 $\pi$ 의 정규화상수는 쓰이지 않는다.

```javascript
// logPi(x) = log pi(x) + const, logQ(x, y) = log q(x, y)
function metropolisHastings(logPi, propose, logQ, x0, n) {
  let x = x0
  const chain = [x]
  for (let t = 0; t < n; t++) {
    const y = propose(x) // y ~ q(x, ·)
    const logRatio =
      logPi(y) + logQ(y, x) - logPi(x) - logQ(x, y)
    if (Math.log(uniform01()) <= logRatio) {
      x = y
    }
    chain.push(x)
  }
  return chain
}
```

밀도 대신 로그밀도를 쓰는 것은 $p(\theta)L(\theta)$ 가 부동소수점 범위를 넘기 때문이다.

## Gibbs 표본추출

Gibbs 표본추출(Gibbs sampling)은 좌표 $i$ 를 골라 나머지 좌표를 고정한 조건부분포 $\pi(x_i\mid x_{-i})$ 에서 새 값을 뽑는 것이다. 제안밀도가 그 조건부분포이면 수락확률이 항상 $1$ 이 되므로 거부가 없다. 조건부분포가 닫힌 형태로 나오는 모형에서 쓴다.

# 성질

## 세부균형과 불변성

세부균형을 만족하면 $\pi$ 가 불변분포다. 증명은 양변을 $x$ 에 대해 적분하는 것이다. 왼쪽은 $\int\pi(x)K(x,y)\thinspace dx$ 이고 오른쪽은 $\pi(y)\int K(y,x)\thinspace dx=\pi(y)$ 다. 역은 성립하지 않아 가역이 아닌 MCMC 도 있다.

## Metropolis–Hastings 핵의 가역성

Metropolis–Hastings 핵은 세부균형을 만족한다. $x\ne y$ 에서 $K(x,y)=q(x,y)\alpha(x,y)$ 이고

$$
\pi(x)q(x,y)\alpha(x,y)=\min\lbrace \pi(x)q(x,y),\thinspace \pi(y)q(y,x)\rbrace
$$

인데 오른쪽은 $x$ 와 $y$ 를 맞바꾸어도 같다. 머무는 확률은 $x=y$ 인 자리에만 기여하므로 등식을 깨지 않는다.[^1]

## 에르고딕 정리

연쇄가 기약이고 $\pi$ 가 불변분포이면 모든 출발점에서 궤적의 표본평균이 수렴한다.

$$
\frac1n\sum_{t=1}^{n}f(X_t)\longrightarrow\int f\thinspace d\pi
$$

수렴은 $\pi$ 적분가능한 $f$ 에 대해 거의 확실하게 성립한다. [에르고딕 정리](ergodic-theorem.md)의 연속 상태공간 판이며, 기약성은 $\pi$ 가 양수인 곳끼리 유한 걸음으로 왕래함을 뜻한다. 비주기성을 더하면 분포 자체가 [전변동거리](total-variation-distance.md)로 $\pi$ 에 수렴한다.

## 점근분산과 유효표본수

궤적은 독립이 아니므로 표본평균의 분산이 같은 크기의 독립표본보다 크다. [중심극한정리](central-limit-theorem.md)가 성립하는 경우 $\sqrt n$ 배 한 오차의 점근분산은

$$
\sigma^2=\gamma_0+2\sum_{k=1}^{\infty}\gamma_k,\qquad \gamma_k=\mathrm{Cov}\big(f(X_0),f(X_k)\big)
$$

이다. 유효표본수(effective sample size)는 $n\gamma_0/\sigma^2$ 로, 같은 분산을 내는 독립표본의 개수다. 자기상관 $\gamma_k$ 가 느리게 줄면 유효표본수가 $n$ 보다 훨씬 작다.

## 수락률과 제안 분산

무작위 걷기 제안 $q(x,\cdot)=N(x,h^2I)$ 에서 $h$ 가 작으면 수락률이 $1$ 에 가깝지만 한 걸음의 이동이 작아 궤적이 좁은 영역을 맴돈다. $h$ 가 크면 밀도가 작은 점이 제안되어 거부가 많아진다. 목표가 $d$ 개의 독립 성분을 갖는 매끄러운 밀도이고 $d\to\infty$ 인 극한에서, 점근적으로 최적인 수락률은 $0.234$ 이고 이때 $h$ 는 $d^{-1/2}$ 에 비례해 줄여야 한다.[^2]

# 활용

- [Bayes 추론](bayesian-inference.md)의 사후분포 요약. 주변가능도의 적분이 닫힌 형태로 없을 때 사후평균과 신용구간을 궤적의 표본평균과 분위수로 낸다.
- [Langevin 동역학](langevin-dynamics.md)의 이산화 보정. 한 걸음을 제안으로 쓰고 수락확률을 곱한 것이 Metropolis 보정 Langevin 알고리즘이고, 이산화에서 생기는 불변분포의 편향이 사라진다.
- [Markov 연쇄의 혼합시간](mixing-time.md). 궤적 앞부분을 얼마나 버려야 표본이 $\pi$ 를 대표하는지가 혼합시간으로 정해진다.
- 격자 모형의 표본추출. Ising 모형에서 한 자리의 부호만 바꾸는 제안을 쓰면 Gibbs 표본추출이 Glauber 동역학이 된다.

[^1]: W. K. Hastings, "Monte Carlo sampling methods using Markov chains and their applications", Biometrika 57 (1970), 97–109. 일반 제안분포에 대한 수락확률과 세부균형 확인.
[^2]: G. O. Roberts, A. Gelman, W. R. Gilks, "Weak convergence and optimal scaling of random walk Metropolis algorithms", Annals of Applied Probability 7 (1997), 110–120. 곱형 목표분포의 확산 극한에서 최적 수락률 0.234.

# 연관 문서

## 선수지식

- [Markov 연쇄](markov-chains.md)
- [Bayes 추론](bayesian-inference.md)

## 더 알아보기

- [Hamiltonian Monte Carlo](hamiltonian-monte-carlo.md)

#probability #statistics #computation #algorithms
