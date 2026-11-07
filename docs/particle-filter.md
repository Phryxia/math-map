# 입자 필터

# 개요

**입자 필터(particle filter)** 는 상태의 분포를 많은 표본점과 그 무게로 나타내고, 측정이 올 때마다 점을 옮기고 무게를 고쳐 상태를 추정하는 방법이다. 직선 도로 위의 차에서 도로 밖 기지국까지의 거리만 재면, 기지국 맞은편의 왼쪽과 오른쪽 두 위치가 같은 거리를 주어 차가 어느 쪽에 있는지 측정만으로는 가를 수 없다. 평균과 분산 하나로 분포를 나타내는 [Kalman 필터](kalman-filter.md)는 두 후보를 한 덩어리로 뭉치지만, 입자 필터는 두 쪽의 점을 함께 들고 다니며 나중 측정이 한쪽의 무게를 $0$ 에 가깝게 만들 때까지 둘을 모두 남긴다.

# 직관

차의 위치 $x$ 에 대한 지금의 추정에서 다섯 위치 $-1,0,1,2,3$ 을 뽑았다고 한다. 각 점의 무게는 처음에 $1/5$ 씩이다. 기지국은 위치 $0$ 의 맞은편, 도로에서 거리 $1$ 인 곳에 있고, 측정은 거리 $\sqrt{x^2+1}$ 에 분산 $1/2$ 인 Gauss 오차를 더한 값이다. 측정값이 $2$ 로 나왔다.

각 점에서 측정값 $2$ 가 나올 가능도를 무게에 곱한다. 오차의 밀도가 $\exp\bigl(-(2-\sqrt{x^2+1})^2\bigr)$ 에 비례하므로, 다섯 점의 새 무게는 합이 $1$ 이 되게 나누면 약 $0.237$, $0.123$, $0.237$, $0.316$, $0.087$ 이다. 위치 $-1$ 과 $1$ 은 기지국까지의 거리가 같아서 같은 무게를 받는다.

무게를 준 점들의 평균 약 $0.89$ 가 위치의 추정이다. 다음 측정 전에는 각 점을 차의 운동대로 옮기고, 무게가 작은 점은 버리고 무게가 큰 점은 복제해 다시 같은 무게로 만든다.

# 정의

## 필터링 재귀

상태 $x_k$ 와 관측 $z_k$ 가 전이밀도 $p(x_k\mid x\_{k-1})$ 와 관측밀도 $p(z_k\mid x_k)$ 로 주어지는 상태공간 모형에서, 필터링 분포 $p(x_k\mid z\_{1:k})$ 는 다음 재귀를 만족한다.

$$
p(x_k\mid z\_{1:k})\propto p(z_k\mid x_k)\int p(x_k\mid x\_{k-1})\thinspace p(x\_{k-1}\mid z\_{1:k-1})\thinspace dx\_{k-1}
$$

적분은 예측이고 $p(z_k\mid x_k)$ 를 곱하는 것은 갱신이다. 전이와 관측이 선형 Gauss 이면 두 분포가 Gauss 로 남아 [Kalman 필터](kalman-filter.md)의 공식이 되고, 그렇지 않으면 이 적분이 닫힌 꼴로 계산되지 않는다.

## 부트스트랩 입자 필터

**입자(particle)** 는 표본점 $x_k^{(i)}$ 와 무게 $w_k^{(i)}\ge 0$ 의 쌍이고 $\sum_iw_k^{(i)}=1$ 이다. **부트스트랩 입자 필터(bootstrap particle filter)** 는 입자 $N$ 개로 시점마다 다음 세 단계를 돌린다.[^1]

1. 예측. 각 $i$ 마다 $x_k^{(i)}$ 를 $p(x_k\mid x\_{k-1}^{(i)})$ 에서 뽑는다.
2. 무게. $\tilde w_k^{(i)}=p(z_k\mid x_k^{(i)})$ 로 두고 $w_k^{(i)}=\tilde w_k^{(i)}/\sum_j\tilde w_k^{(j)}$ 로 나눈다.
3. 재표집. $x_k^{(1)},\dots,x_k^{(N)}$ 에서 확률 $w_k^{(i)}$ 로 $N$ 번 뽑아 새 입자로 두고 무게를 모두 $1/N$ 로 둔다.

2 단계는 전이분포를 제안분포로 쓴 [중요도 표집](importance-sampling.md)이고, 관측밀도가 중요도 무게다. 함수 $\varphi$ 의 조건부 기댓값은 2 단계 뒤의 가중평균으로 근사한다.

$$
E\lbrack\varphi(x_k)\mid z\_{1:k}\rbrack\approx\sum_{i=1}^Nw_k^{(i)}\varphi(x_k^{(i)})
$$

직관 절의 계산은 $N=5$ 인 2 단계이고, $\varphi(x)=x$ 로 둔 가중평균이 약 $0.89$ 다.

```javascript
// 한 시점의 부트스트랩 입자 필터. sampleTransition(x)는 p(x_k | x_{k-1}=x)에서 한 점을 뽑고,
// likelihood(z, x)는 p(z | x)를 계산한다.
function particleStep(particles, z, sampleTransition, likelihood) {
  const moved = particles.map(sampleTransition);
  const raw = moved.map((x) => likelihood(z, x));
  const total = raw.reduce((a, b) => a + b, 0);
  const weights = raw.map((w) => w / total);
  const estimate = moved.reduce((s, x, i) => s + weights[i] * x, 0);
  const resampled = moved.map(() => moved[drawIndex(weights)]);
  return { estimate, particles: resampled };
}

function drawIndex(weights) {
  let u = Math.random();
  for (let i = 0; i < weights.length; i++) {
    u -= weights[i];
    if (u <= 0) return i;
  }
  return weights.length - 1;
}
```

# 성질

## 수렴

$\varphi$ 가 유계이고 관측밀도가 유계이며 양수이면, 고정된 시점 $k$ 에서 가중평균은 $N\to\infty$ 일 때 $E\lbrack\varphi(x_k)\mid z\_{1:k}\rbrack$ 로 수렴하고 평균제곱오차는 $C_k/N$ 이하다.[^2] 상수 $C_k$ 는 $k$ 와 모형에 따라 정해진다. 증명의 요지는 $N$ 개 표본의 평균이 기댓값으로 수렴한다는 [큰 수의 법칙](law-of-large-numbers.md)을 시점마다 차례로 쓰는 것이다. 무게를 나누고 재표집하는 단계가 입자 사이에 의존성을 만들어 시점마다 오차의 상수가 커지고, 그 누적이 $C_k$ 다.

## 무게의 퇴화와 유효 표본 크기

3 단계 없이 무게를 곱해 나가면 몇 시점 만에 무게가 입자 하나에 거의 다 몰린다. 남은 입자들은 계산만 하고 추정에 쓰이지 않는다. 무게가 얼마나 몰렸는지는 **유효 표본 크기(effective sample size)**

$$
N\_{\mathrm{eff}}=\Bigl(\sum_{i=1}^N\bigl(w^{(i)}\bigr)^2\Bigr)^{-1}
$$

로 잰다. 무게가 고르면 $N\_{\mathrm{eff}}=N$, 한 입자에 다 몰리면 $1$ 이다. 직관 절의 다섯 무게에서는 약 $4.25$ 다. $N\_{\mathrm{eff}}$ 가 $N/2$ 같은 문턱 아래로 내려갈 때만 재표집하는 방식도 쓴다.

## 차원

상태의 차원이 커지면 무게 하나가 거의 $1$ 이 되지 않게 하는 데 필요한 입자 수가 차원에 대해 지수적으로 늘어난다.[^3] 그래서 기상 예보처럼 상태가 수백만 차원인 문제에서는 입자 필터 대신 앙상블 Kalman 필터(ensemble Kalman filter)를 쓴다.

# 활용

- 로봇의 위치 추정. 지도 위 여러 곳이 같은 센서 값을 주어 위치 분포가 여러 봉우리를 가질 때 입자로 그 봉우리들을 함께 유지한다. 이것을 Monte Carlo 위치 추정(Monte Carlo localization)이라 한다.
- 비선형 상태공간 모형의 가능도 계산. 2 단계에서 나누기 전 무게의 평균 $\frac1N\sum_i\tilde w_k^{(i)}$ 가 $p(z_k\mid z\_{1:k-1})$ 의 불편 추정량을 주고, 그 곱을 [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)의 수용 확률에 넣어 모수를 추정한다.
- [은닉 Markov 모형](hidden-markov-model.md)처럼 상태가 유한집합이면 재귀의 적분이 합이 되어 정확히 계산되므로 입자 필터가 필요 없다. 입자 필터는 상태가 연속이고 모형이 선형 Gauss 가 아닌 경우를 위한 방법이다.

[^1]: N. J. Gordon, D. J. Salmond, and A. F. M. Smith, "Novel approach to nonlinear/non-Gaussian Bayesian state estimation", *IEE Proceedings F* 140 (1993), 107–113.
[^2]: Dan Crisan and Arnaud Doucet, "A survey of convergence results on particle filtering methods for practitioners", *IEEE Transactions on Signal Processing* 50 (2002), 736–746.
[^3]: Chris Snyder, Thomas Bengtsson, Peter Bickel, and Jeff Anderson, "Obstacles to high-dimensional particle filtering", *Monthly Weather Review* 136 (2008), 4629–4640.

# 연관 문서

## 선수지식

- [Kalman 필터](kalman-filter.md)
- [중요도 표집](importance-sampling.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #signal_processing
