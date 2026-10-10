# 기댓값 최대화 알고리즘

# 개요

기댓값 최대화(expectation-maximization, EM) 알고리즘은 은닉변수가 있는 모형에서 [최대가능도 추정](maximum-likelihood.md)값을 반복으로 찾는 절차다. 한 반복은 은닉변수의 사후분포를 구하는 E 단계와 그 분포 아래 완전자료 로그가능도의 기댓값을 최대화하는 M 단계로 이루어진다. 반복마다 관측자료의 가능도가 줄지 않는다.

# 직관

두 정규분포를 섞어 만든 자료에서 두 평균을 추정한다. 분산은 둘 다 $1$ 이고 섞임 비율은 $1/2$ 로 알려져 있다. 표준정규 밀도를 $\varphi$ 라 하면 관측 $x_1,\dots,x_n$ 의 로그가능도는 다음과 같다.

$$
\ell(\mu_1,\mu_2)=\sum_{i=1}^{n}\log\Bigl(\tfrac12\varphi(x_i-\mu_1)+\tfrac12\varphi(x_i-\mu_2)\Bigr)
$$

$\varphi'(t)=-t\varphi(t)$ 이므로 $\mu_1$ 로 미분해 $0$ 으로 두면 가중합 하나가 나온다.

$$
\sum_{i=1}^{n}w_i\thinspace(x_i-\mu_1)=0,
\qquad
w_i=\frac{\varphi(x_i-\mu_1)}{\varphi(x_i-\mu_1)+\varphi(x_i-\mu_2)}
$$

$\mu_1$ 에 대해 풀면 $\mu_1=\sum_i w_ix_i\thinspace/\sum_i w_i$ 인데, 우변의 $w_i$ 가 $\mu_1$ 과 $\mu_2$ 를 품고 있어 이 식으로는 값이 나오지 않는다. 로그 안에 합이 들어 있어 미분이 분수를 남긴다.

막힌 까닭은 관측마다 두 분포 가운데 어디서 나왔는지 모르는 것이다. 알고 있다면 첫 분포에서 나온 관측만 모아 평균을 내면 $\mu_1$ 이 바로 나온다. 모르니 현재 추정값을 $w_i$ 에 넣는다. 그 값은 $x_i$ 가 첫 분포에서 나왔을 확률이고, 관측 하나를 그 확률만큼 두 분포에 쪼개 가중평균을 낸다.

$$
\mu_1^{\mathrm{new}}=\frac{\sum_i w_ix_i}{\sum_i w_i},
\qquad
\mu_2^{\mathrm{new}}=\frac{\sum_i(1-w_i)x_i}{\sum_i(1-w_i)}
$$

확률을 계산하는 걸음과 가중평균을 내는 걸음을 번갈아 반복한다. 반복이 멈춘 자리에서는 새 평균으로 $w_i$ 를 다시 계산해도 같은 값이 나오므로 위 미분 조건이 성립한다. 두 걸음을 E 단계와 M 단계라 한다.

# 정의

관측 $x$, 은닉변수 $z$, 모수 $\theta$ 에 대해 완전자료 밀도를 $p(x,z;\theta)$ 라 하면 관측자료의 가능도는 주변화한 것이다.

$$
p(x;\theta)=\sum_z p(x,z;\theta)
$$

$z$ 가 연속이면 합을 적분으로 읽는다.

## 증거 하한

$z$ 에 대한 임의의 분포 $q$ 에 대해 증거 하한(evidence lower bound, ELBO)을 다음으로 정의한다.

$$
F(q,\theta)=\mathbb E\_q\lbrack\log p(x,z;\theta)\rbrack-\mathbb E\_q\lbrack\log q(z)\rbrack
$$

로그가능도는 증거 하한과 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence) 항의 합이다.

$$
\log p(x;\theta)=F(q,\theta)+D\bigl(q\thinspace\Vert\thinspace p(\cdot\mid x;\theta)\bigr)
$$

$D$ 가 그 divergence 이고 음이 아니므로 $F(q,\theta)\le\log p(x;\theta)$ 이며, 등식은 $q$ 가 사후분포 $p(z\mid x;\theta)$ 일 때만 성립한다.

## 두 단계

$t$ 번째 반복은 두 걸음이다. E 단계는 현재 모수의 사후분포로 완전자료 로그가능도의 기댓값을 만든다.

$$
Q(\theta\mid\theta^{(t)})=\mathbb E\_{z\sim p(z\mid x;\theta^{(t)})}\lbrack\log p(x,z;\theta)\rbrack
$$

M 단계는 그 기댓값을 최대화한다.

$$
\theta^{(t+1)}=\mathop{\mathrm{arg\thinspace max}}\_{\theta}\thinspace Q(\theta\mid\theta^{(t)})
$$

두 걸음은 $F$ 를 $q$ 와 $\theta$ 에 대해 번갈아 최대화하는 것이다. E 단계는 $\theta^{(t)}$ 를 고정하고 $F$ 를 $q$ 에 대해 최대화해 $q^{(t)}=p(z\mid x;\theta^{(t)})$ 를 얻는다. $F(q^{(t)},\theta)$ 에서 $\theta$ 에 의존하는 부분이 $Q(\theta\mid\theta^{(t)})$ 이므로 M 단계는 $q^{(t)}$ 를 고정한 최대화다.

# 성질

## 가능도의 단조 증가

모든 $t$ 에 대해 $\log p(x;\theta^{(t+1)})\ge\log p(x;\theta^{(t)})$ 다. 증명은 세 관계를 잇는다. E 단계가 KL 항을 $0$ 으로 만들어 $\log p(x;\theta^{(t)})=F(q^{(t)},\theta^{(t)})$ 이고, M 단계가 $F(q^{(t)},\theta^{(t+1)})\ge F(q^{(t)},\theta^{(t)})$ 를 주고, KL 항이 음이 아니어서 $\log p(x;\theta^{(t+1)})\ge F(q^{(t)},\theta^{(t+1)})$ 이다.

증가량은 두 항으로 갈라진다.

$$
\log p(x;\theta')-\log p(x;\theta)=\bigl(Q(\theta'\mid\theta)-Q(\theta\mid\theta)\bigr)+D\bigl(p(\cdot\mid x;\theta)\thinspace\Vert\thinspace p(\cdot\mid x;\theta')\bigr)
$$

둘째 항이 음이 아니므로 $Q$ 를 늘리는 것만으로 가능도가 줄지 않는다.

## 일반화 EM

M 단계에서 최대점을 찾지 않고 $Q(\theta^{(t+1)}\mid\theta^{(t)})\ge Q(\theta^{(t)}\mid\theta^{(t)})$ 만 만족시키는 변형도 단조성을 유지한다. 위 항등식이 최대화를 쓰지 않기 때문이다. M 단계를 [경사하강법](gradient-descent.md)의 한 걸음으로 대신하는 구현이 여기 든다.

## 정류점

가능도값의 수열은 단조이고 위로 유계이면 수렴한다. 모수 수열의 수렴에는 조건이 더 필요하며, $Q(\theta\mid\theta')$ 가 두 변수에 대해 연속이면 극한점이 관측자료 가능도의 정류점이다[^2]. 전역 최대점이라는 보장은 없고 초기값이 도달하는 정류점을 정한다.

## 수렴 속도

정류점 $\theta^\ast$ 의 근방에서 한 반복은 선형 수렴이고 비율은 결측 정보의 비율이다[^1].

$$
\theta^{(t+1)}-\theta^\ast\approx I\_{\mathrm{mis}}(\theta^\ast)\thinspace I\_{\mathrm{com}}(\theta^\ast)^{-1}(\theta^{(t)}-\theta^\ast)
$$

$I\_{\mathrm{com}}$ 은 완전자료 [Fisher 정보](fisher-information.md)의 사후기댓값이고 $I\_{\mathrm{mis}}$ 는 그 가운데 은닉변수의 불확실이 차지하는 몫이다. 은닉변수가 관측으로 거의 정해지면 비율이 작아 반복 수가 적고, 성분들이 겹쳐 소속이 모호하면 수렴이 느리다.

## 지수족에서의 M 단계

완전자료 밀도가 충분통계량 $T(x,z)$ 를 갖는 [지수족](exponential-families.md)이면 M 단계의 1차 조건은 적률을 맞추는 식이다. E 단계는 $\mathbb E\lbrack T(x,z)\mid x;\theta^{(t)}\rbrack$ 를 계산하는 것으로 줄고, M 단계는 완전자료 최대가능도 공식에 그 값을 넣는 것이 된다.

# 활용

## 정규혼합모형

$K$ 개 정규분포의 혼합에서 모수는 섞임 비율 $\pi_k$, 평균 $\mu_k$, 분산 $\sigma_k^2$ 다. 밀도를 $\varphi(x;\mu,\sigma^2)$ 로 쓰면 E 단계는 책임도를 계산한다.

$$
r_{ik}=\frac{\pi_k\varphi(x_i;\mu_k,\sigma_k^2)}{\sum_{l=1}^{K}\pi_l\varphi(x_i;\mu_l,\sigma_l^2)}
$$

M 단계는 책임도를 가중치로 둔 표본적률이다.

$$
n_k=\sum_{i=1}^{n}r_{ik},
\qquad
\pi_k=\frac{n_k}{n},
\qquad
\mu_k=\frac{1}{n_k}\sum_{i=1}^{n}r_{ik}x_i,
\qquad
\sigma_k^2=\frac{1}{n_k}\sum_{i=1}^{n}r_{ik}(x_i-\mu_k)^2
$$

한 성분의 평균을 관측 하나에 맞추고 분산을 $0$ 으로 보내면 가능도가 발산하므로 분산에 하한을 두거나 벌점을 더한다.

```javascript
// 1차원 정규혼합의 한 반복. normalPdf 는 성분 밀도다.
function emStep(x, pi, mu, sigma2) {
  const n = x.length, K = pi.length
  const r = x.map((xi) => {
    const w = pi.map((pk, k) => pk * normalPdf(xi, mu[k], sigma2[k]))
    const s = w.reduce((a, b) => a + b, 0)
    return w.map((wk) => wk / s)
  })
  const nk = pi.map((pk, k) => r.reduce((a, ri) => a + ri[k], 0))
  return {
    pi: nk.map((v) => v / n),
    mu: nk.map((v, k) => x.reduce((a, xi, i) => a + r[i][k] * xi, 0) / v),
    sigma2: nk.map((v, k) => {
      const m = x.reduce((a, xi, i) => a + r[i][k] * xi, 0) / v
      return x.reduce((a, xi, i) => a + r[i][k] * (xi - m) ** 2, 0) / v
    }),
  }
}
```

## 다른 모형에서의 쓰임

- [은닉 Markov 모형](hidden-markov-model.md)의 Baum–Welch 갱신이 이 알고리즘이다. E 단계가 전향 후향 재귀로 상태와 전이의 사후확률을 계산하고, M 단계가 그 기대 빈도의 비로 전이행렬과 관측분포를 정한다.
- [확률적 PCA](probabilistic-pca.md)(principal component analysis)의 적합에서 E 단계가 잠재변수의 사후 적률을 구하고 M 단계가 적재행렬과 잡음 분산을 갱신한다. 고유분해를 거치지 않고 같은 해에 닿는다.
- 결측값을 은닉변수로 두면 관측자료 가능도가 위의 주변화 꼴이 되고, 결측 여부가 모수와 무관할 때 완전자료 공식을 그대로 쓸 수 있다.
- 사후분포 $p(z\mid x;\theta)$ 를 계산할 수 없으면 E 단계의 $q$ 를 다루기 쉬운 분포족으로 제한한다. 그러면 KL 항이 $0$ 이 되지 않아 $F$ 가 진짜 하한으로 남고, [변분 오토인코더](variational-autoencoder.md)는 그 하한을 경사법으로 올린다.

[^1]: A. P. Dempster, N. M. Laird, D. B. Rubin, "Maximum likelihood from incomplete data via the EM algorithm", Journal of the Royal Statistical Society Series B 39 (1977), 1–38.
[^2]: C. F. Jeff Wu, "On the convergence properties of the EM algorithm", Annals of Statistics 11 (1983), 95–103.

# 연관 문서

## 선수지식

- [최대가능도 추정](maximum-likelihood.md)
- [KL divergence](kl-divergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #machine_learning #optimization
