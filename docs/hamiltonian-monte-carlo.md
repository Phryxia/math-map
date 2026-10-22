# Hamiltonian Monte Carlo

# 개요

**Hamiltonian Monte Carlo(HMC)** 는 목표분포에 보조 운동량 변수를 더하고 [Hamilton 역학](hamiltonian-mechanics.md)의 흐름을 따라 움직이는 제안을 쓰는 [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)(Markov chain Monte Carlo, MCMC)다. 제안을 흐름으로 만들면 한 걸음이 궤적의 길이만큼 멀리 가고, 에너지가 보존되어 수락확률이 1 에 가깝다. 흐름의 수치 적분에는 가역이고 부피를 보존하는 leapfrog 적분기를 쓴다.

# 직관

목표분포가 $d$ 차원이고 성분들이 강하게 상관되어 좁고 긴 영역에 밀도가 몰려 있다. 무작위 걷기 제안으로 이 영역을 지나려면 보폭을 영역의 좁은 폭에 맞춰야 하고, 그보다 크게 잡으면 제안점이 영역을 벗어나 밀도가 작아져 거부된다. 보폭 $h$ 의 걸음은 방향이 매번 독립이므로 $t$ 걸음 뒤 출발점에서 떨어진 거리가 $h\sqrt t$ 에 비례한다. 긴 쪽의 길이 $L$ 을 지나는 데 걸음 수가 $(L/h)^2$ 만큼 든다.

방향이 매번 바뀌어서 느렸으니, 한 걸음 안에서 방향을 유지한다. $-\log\pi(x)$ 를 위치에너지로 보고 운동량 $p$ 를 하나 뽑아 에너지가 보존되는 운동을 시키면, 점이 밀도가 큰 영역을 따라 한 방향으로 흐른다. 운동이 전체 에너지를 보존하므로 출발점과 도착점의 확장된 밀도가 같고, 멀리 간 점도 거부되지 않는다. 운동량은 걸음마다 새로 뽑아 버리며, 그렇게 하면 위치만 떼어 본 분포가 $\pi$ 다.

# 정의

## 확장 분포

HMC 는 목표분포 $\pi(x)$ 에 운동량 $p\in\mathbb R^d$ 를 더해 만든 확장 분포

$$
\pi(x,p)\propto\exp\big({-}H(x,p)\big),\qquad H(x,p)=-\log\pi(x)+\tfrac12 p^{\mathsf T}M^{-1}p
$$

를 불변분포로 갖는 연쇄를 Hamilton 흐름으로 짓는 방법이다. $H$ 를 Hamiltonian, $M$ 을 양정의 질량행렬이라 한다. 둘째 항이 $p$ 만의 함수이므로 $\pi(x,p)$ 는 $\pi(x)$ 와 평균 $0$, [공분산](covariance.md) $M$ 인 Gauss 분포의 곱이고, $x$ 주변분포가 $\pi(x)$ 다.

## Hamilton 흐름

확장 분포의 Hamilton 방정식은 다음과 같다.

$$
\dot x=M^{-1}p,\qquad \dot p=\nabla\log\pi(x)
$$

이 흐름은 $H$ 를 보존하므로 $\pi(x,p)$ 의 등고선 위를 움직인다. 흐름을 시간 $T$ 만큼 따라간 점을 제안으로 쓰면 수락확률이 $1$ 이지만, 흐름을 닫힌 형태로 풀 수 있는 $\pi$ 는 Gauss 분포 정도다.

## Leapfrog 적분기

Leapfrog 적분기는 보폭 $\epsilon$ 으로 운동량의 반걸음, 위치의 한 걸음, 운동량의 반걸음을 차례로 밟는다.

$$
p^{+}=p+\tfrac{\epsilon}{2}\nabla\log\pi(x),\qquad x'=x+\epsilon M^{-1}p^{+},\qquad p'=p^{+}+\tfrac{\epsilon}{2}\nabla\log\pi(x')
$$

한 걸음은 세 전단사 사상의 합성이고, 각각 한쪽 변수만 다른 쪽의 함수만큼 옮기므로 Jacobian 행렬식이 $1$ 이다.

## 걸음

한 걸음은 운동량 추출, leapfrog $L$ 회, 수락 판정으로 이루어진다. 제안은 $L$ 회 뒤의 $(x\_L,-p\_L)$ 이고 수락확률은 확장 분포의 비다.

$$
\alpha=\min\lbrace 1,\thinspace \exp\big(H(x\_0,p\_0)-H(x\_L,p\_L)\big)\rbrace
$$

```javascript
// logPi(x) = log pi(x) + const, grad(x) = ∇ log pi(x)
function hmcStep(logPi, grad, x, eps, L) {
  let p = gaussian(x.length) // p ~ N(0, I), 질량행렬은 단위행렬
  const h0 = -logPi(x) + dot(p, p) / 2
  let y = x
  p = add(p, scale(grad(y), eps / 2))
  for (let i = 0; i < L; i++) {
    y = add(y, scale(p, eps))
    const half = i === L - 1 ? eps / 2 : eps
    p = add(p, scale(grad(y), half))
  }
  const h1 = -logPi(y) + dot(p, p) / 2
  return Math.log(uniform01()) <= h0 - h1 ? y : x
}
```

# 성질

## Leapfrog 사상의 가역성과 부피 보존

운동량의 부호를 뒤집고 leapfrog 한 걸음을 밟으면 출발점으로 돌아온다. 세 사상 각각이 부호 뒤집기와 교환하기 때문이다. 부피 보존은 각 사상의 Jacobian 행렬식이 $1$ 인 것에서 나온다.

## 세부균형

HMC 의 걸음은 확장 분포에 대해 세부균형을 만족한다. 부피 보존으로 제안의 Jacobian 행렬식이 $1$ 이고 가역성으로 제안이 대칭이므로, Metropolis–Hastings 수락확률에서 제안밀도의 비가 사라지고 확장 분포의 비만 남는다. 운동량을 새로 뽑는 단계는 $\pi(x,p)$ 의 $p$ 조건부분포에서 뽑는 것이라 확장 분포를 보존한다. 두 단계가 모두 $\pi(x,p)$ 를 보존하므로 $x$ 성분의 주변분포가 $\pi$ 다.

## 에너지 오차와 수락률

Leapfrog 는 [심플렉틱 적분기](symplectic-integrators.md)여서 $H$ 의 오차가 걸음 수에 비례해 쌓이지 않고 $O(\epsilon^2)$ 에 머문다. 그래서 수락률이 궤적의 길이 $L\epsilon$ 과 거의 무관하고 보폭 $\epsilon$ 으로만 정해진다. 목표가 $d$ 개의 독립 성분을 갖는 매끄러운 밀도이고 $d\to\infty$ 인 극한에서 점근적으로 최적인 수락률은 $0.651$ 이며 $\epsilon$ 은 $d^{-1/4}$ 에 비례해 줄여야 한다.[^1] 무작위 걷기 Metropolis 의 지수 $d^{-1/2}$ 와 견주면 차원에 따른 손실이 작다.

## U턴과 궤적 길이

$L$ 을 키우면 궤적이 멀리 가지만, Hamilton 흐름은 밀도가 큰 영역에서 주기적으로 돌아오므로 $L$ 이 궤적의 주기에 가까우면 도착점이 출발점 근처가 된다. No-U-Turn 표본추출(No-U-Turn sampler, NUTS)은 $L$ 을 고정하는 대신 궤적을 양쪽으로 배로 늘려 가며, 양 끝점의 위치 차와 끝점의 운동량이 이루는 내적이 음이 되면, 곧 궤적이 되돌아오기 시작하면 멈춘다.[^2]

# 활용

- [Bayes 추론](bayesian-inference.md)의 계층모형. 모수와 초모수가 강하게 상관된 사후분포에서 좌표별 Gibbs 표본추출이나 무작위 걷기 제안보다 유효표본수가 크다.
- [Langevin 동역학](langevin-dynamics.md). $L=1$ 인 HMC 가 Langevin 제안에 수락 판정을 붙인 것이고, 운동량을 매번 버리는 대신 일부만 갱신하면 과감쇠 극한에서 Langevin 동역학이 된다.
- [Hamilton 역학](hamiltonian-mechanics.md)의 수치 적분. symplectic 적분기의 부피 보존이 수락확률에서 제안밀도의 비를 없애는 데 쓰인다.
- 격자 게이지 이론의 장 배치 표본추출. 이 분야에서 알고리즘이 처음 쓰였고 당시 이름은 혼성 Monte Carlo 였다.[^3]

[^1]: A. Beskos, N. Pillai, G. Roberts, J.-M. Sanz-Serna, A. Stuart, "Optimal tuning of the hybrid Monte Carlo algorithm", Bernoulli 19 (2013), 1501–1534. 확산 극한에서 최적 수락률 0.651 과 보폭 지수 $d^{-1/4}$.
[^2]: M. D. Hoffman, A. Gelman, "The No-U-Turn sampler: adaptively setting path lengths in Hamiltonian Monte Carlo", Journal of Machine Learning Research 15 (2014), 1593–1623.
[^3]: S. Duane, A. D. Kennedy, B. J. Pendleton, D. Roweth, "Hybrid Monte Carlo", Physics Letters B 195 (1987), 216–222.

# 연관 문서

## 선수지식

- [Hamilton 역학](hamiltonian-mechanics.md)
- [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #computation #differential_geometry
