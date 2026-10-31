# 변분 추론

# 개요

**변분 추론(variational inference)** 은 정확히 계산할 수 없는 사후분포를 다루기 쉬운 분포로 근사하는 방법이다. 숨은 변수 $100$ 개가 각각 $0$ 이나 $1$ 이면 사후분포의 분모가 $2^{100}$ 개 항의 합이라 계산할 수 없다. 변분 추론은 계산할 수 있는 분포들의 모임을 정해 두고, 그 가운데 사후분포와의 차이가 가장 작은 것을 최적화로 찾는다.

# 직관

숨은 변수 $z_1,\dots,z_n$ 이 각각 $0$ 과 $1$ 을 갖고, 관측 $x$ 와의 결합분포 $p(x,z)$ 를 식으로 안다. 관측을 보고 숨은 변수의 분포를 알려면 $p(z\mid x)=p(x,z)/p(x)$ 가 필요하고, 분모는 $p(x)=\sum_z p(x,z)$ 다. 이 합은 $z$ 가 갖는 값마다 항이 하나씩 붙어 $2^n$ 개다. $n=100$ 이면 항이 $2^{100}$ 개다.

모형의 그래프가 나무이면 믿음 전파(belief propagation)가 분배법칙으로 이 합을 변수 개수에 선형인 비용으로 줄인다. 그래프에 순환이 있으면 메시지가 수렴해도 그 값이 주변분포가 아니다. 합을 그대로 줄이는 길이 막힌다.

정확한 $p(z\mid x)$ 를 포기하고, 좌표마다 따로 적히는 분포 $q$ 가운데 $p(z\mid x)$ 에 가장 가까운 것을 고른다. 가까움은 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)로 재서 $\mathrm{KL}\bigl(q(z)\thinspace\Vert\thinspace p(z\mid x)\bigr)$ 를 작게 한다. 그런데 이 양의 식에 $\log p(z\mid x)$ 가 들어 있고 그 안에 $p(x)$ 가 있다.

$\log p(z\mid x)=\log p(x,z)-\log p(x)$ 로 쪼개면 $\log p(x)$ 는 $z$ 에 무관한 수라 기댓값 밖으로 나온다.

$$
\mathrm{KL}\bigl(q(z)\thinspace\Vert\thinspace p(z\mid x)\bigr)=\log p(x)-\Bigl(\mathbb E_q\lbrack\log p(x,z)\rbrack-\mathbb E_q\lbrack\log q(z)\rbrack\Bigr)
$$

앞 항은 $q$ 와 무관하므로, KL 을 가장 작게 하는 $q$ 는 괄호 안을 가장 크게 하는 $q$ 다. 괄호 안에는 결합분포와 $q$ 만 들어가니 $2^n$ 항의 합 없이 계산된다.

$q$ 를 좌표별 곱 $q_1(z_1)\cdots q_n(z_n)$ 으로 두면 $q_j$ 하나만 두고 나머지를 고정한 최대화가 풀린다. 최적 $q_j$ 는 $\log p(x,z)$ 를 나머지 좌표에 대해 평균한 것의 지수에 비례하고, 좌표를 돌아가며 갱신하면 괄호 안의 값이 단조 증가한다.

# 정의

## 변분족과 ELBO

변분 추론은 사후분포 $p(z\mid x)$ 를 분포족 $\mathcal Q$ 의 원소로 바꾸는 방법이다. $\mathcal Q$ 를 **변분족(variational family)** 이라 하고, $\mathrm{KL}\bigl(q\thinspace\Vert\thinspace p(\cdot\mid x)\bigr)$ 를 $q\in\mathcal Q$ 에서 최소화한 $q^\star$ 를 근사로 쓴다.

숨은 변수가 둘이고 사후분포가 $p(0,0\mid x)=p(1,1\mid x)=0.4$, $p(0,1\mid x)=p(1,0\mid x)=0.1$ 인 경우를 예로 든다. 변분족을 두 좌표가 독립인 Bernoulli 곱으로 잡으면, 그 가운데 균등분포 $q$ 의 KL divergence 는 $0.5\log\frac{0.25}{0.4}+0.5\log\frac{0.25}{0.1}\approx 0.223$ 이다.

**ELBO(evidence lower bound)** 는 다음 양이다.

$$
\mathcal L(q)=\mathbb E_q\lbrack\log p(x,z)\rbrack-\mathbb E_q\lbrack\log q(z)\rbrack
$$

$\mathbb E_q$ 는 $z\sim q$ 에 대한 기댓값이다. 이름의 증거는 $p(x)$ 를 가리킨다. 직관 절의 분해로 $\mathcal L(q)=\log p(x)-\mathrm{KL}(q\Vert p(\cdot\mid x))$ 이므로, 위의 균등분포 $q$ 에서 $\mathcal L(q)=\log p(x)-0.223$ 이다.

## 평균장 근사

$z$ 를 블록 $z_1,\dots,z_m$ 으로 나누고 변분족을 블록별 곱으로 잡은 것을 **평균장 근사(mean-field approximation)** 라 한다.

$$
q(z)=\prod_{j=1}^m q_j(z_j)
$$

각 $q_j$ 에는 분포라는 것 말고 제약을 두지 않는다. $z_{-j}$ 는 $j$ 번째 블록을 뺀 나머지를 가리키고, $p(z_j\mid z_{-j},x)$ 를 $j$ 번째 블록의 **완전 조건부(complete conditional)** 라 한다. 위의 예는 블록이 둘인 평균장 근사이고, $z_1$ 의 완전 조건부는 $p(z_1=0\mid z_2=0,x)=0.4/(0.4+0.1)=0.8$ 이다. 곱 꼴의 $q$ 는 두 좌표가 같은 값을 갖는 경향을 담지 못한다.

# 성질

## ELBO 와 KL 의 분해

**정리.** 임의의 $q$ 에 대해 다음이 성립한다.

$$
\log p(x)=\mathcal L(q)+\mathrm{KL}\bigl(q(z)\thinspace\Vert\thinspace p(z\mid x)\bigr)
$$

$\log p(z\mid x)=\log p(x,z)-\log p(x)$ 를 KL 의 정의에 넣고 $\log p(x)$ 를 기댓값 밖으로 빼면 나온다. KL 이 음이 아니므로 $\mathcal L(q)\le\log p(x)$ 이고, $\log p(x)$ 가 $q$ 와 무관하므로 KL 최소화와 ELBO 최대화가 같은 문제다. ∎

## 좌표상승 갱신식

**정리.** 평균장 족에서 $j$ 번째를 뺀 블록들을 고정하고 $\mathcal L$ 을 $q_j$ 에 대해 최대화한 해는 다음과 같다.

$$
q_j^\star(z_j)\propto\exp\bigl(\mathbb E_{-j}\lbrack\log p(x,z)\rbrack\bigr)
$$

$\mathbb E_{-j}$ 는 $\prod_{k\ne j}q_k$ 에 대한 기댓값이다.

$\mathcal L$ 에서 $q_j$ 에 의존하는 부분만 남기면

$$
\mathcal L(q_j)=\mathbb E_{q_j}\bigl\lbrack\mathbb E_{-j}\lbrack\log p(x,z)\rbrack\bigr\rbrack-\mathbb E_{q_j}\lbrack\log q_j\rbrack+c
$$

이고, 이것은 $\tilde p(z_j)\propto\exp\bigl(\mathbb E_{-j}\lbrack\log p(x,z)\rbrack\bigr)$ 에 대한 $-\mathrm{KL}\bigl(q_j\thinspace\Vert\thinspace\tilde p\bigr)$ 와 상수 차이다. KL 이 $q_j=\tilde p$ 에서만 $0$ 이므로 그것이 최대다. ∎

CAVI(coordinate ascent variational inference)는 $j=1,\dots,m$ 을 돌며 이 갱신을 되풀이하는 절차다.

```javascript
function cavi(logJoint, blocks, q, tol) {
  let prev = -Infinity
  for (;;) {
    for (const j of blocks) {
      // 나머지 블록에 대한 기댓값을 지수에 넣고 정규화한다
      q[j] = normalize(zj => Math.exp(expectExcept(logJoint, q, j, zj)))
    }
    const elbo = evidenceLowerBound(logJoint, q)
    if (elbo - prev < tol) return q
    prev = elbo
  }
}
```

매 갱신이 $\mathcal L$ 을 줄이지 않고 $\mathcal L$ 이 $\log p(x)$ 로 위에서 막혀 있으므로 값이 수렴한다. $\mathcal L$ 은 $q$ 전체에 대해 오목하지 않아 도달한 고정점이 국소 최대점이다[^1].

## 지수족에서의 갱신식

완전 조건부가 [지수족](exponential-families.md)

$$
p(z_j\mid z_{-j},x)=h(z_j)\exp\bigl(\eta_j(z_{-j},x)^\top t(z_j)-a(\eta_j)\bigr)
$$

이면 최적 $q_j$ 는 같은 지수족에 속하고, 그 자연모수는 $\mathbb E_{-j}\lbrack\eta_j(z_{-j},x)\rbrack$ 다.

$\log p(x,z)=\log p(z_j\mid z_{-j},x)+\log p(z_{-j},x)$ 이고 둘째 항은 $z_j$ 에 무관하다. 앞 정리의 지수에 첫 항만 남으므로 $\log q_j^\star(z_j)=\log h(z_j)+\mathbb E_{-j}\lbrack\eta_j\rbrack^\top t(z_j)+c$ 다. ∎

켤레 사전분포로 세운 모형이 이 조건을 만족하고, 그때 CAVI 의 한 갱신이 충분통계량의 기댓값 계산으로 끝난다.

## 평균장 근사의 분산 과소추정

**정리.** 사후분포가 평균 $0$, [공분산](covariance.md) $\begin{pmatrix}1&\rho\cr\rho&1\end{pmatrix}$ 인 2차원 Gauss 분포이고 $\vert\rho\vert\lt 1$ 이면, 평균장 근사의 고정점은 각 좌표의 분산이 $1-\rho^2$ 인 Gauss 분포의 곱이다.

정밀도행렬은 $\Lambda=(1-\rho^2)^{-1}\begin{pmatrix}1&-\rho\cr-\rho&1\end{pmatrix}$ 이고

$$
\log p(z)=-\frac{1}{2}\bigl(\Lambda_{11}z_1^2+2\Lambda_{12}z_1z_2+\Lambda_{22}z_2^2\bigr)+c
$$

다. 갱신식에서 $z_2$ 에 대한 기댓값을 취하면 $z_2^2$ 항이 상수로 빠지고

$$
\log q_1(z_1)=-\frac{1}{2}\Lambda_{11}z_1^2-\Lambda_{12}z_1\mathbb E_{q_2}\lbrack z_2\rbrack+c'
$$

이 남는다. 따라서 $q_1$ 은 분산 $1/\Lambda_{11}=1-\rho^2$ 인 Gauss 분포이고 $q_2$ 도 같다. ∎

참 주변분산은 $1$ 이다. $\vert\rho\vert$ 가 $1$ 에 가까울수록 근사의 분산이 작아진다.

## 역방향 KL 의 모드 추구

$\mathrm{KL}\bigl(q\thinspace\Vert\thinspace p\bigr)$ 의 피적분함수는 $p(z)$ 가 작고 $q(z)$ 가 양인 곳에서 커진다. 그래서 최적 $q$ 는 $p$ 의 질량이 없는 영역을 피하고, $p$ 가 여러 모드를 가지면 한 모드를 덮는 데 그친다. 방향을 바꾼 $\mathrm{KL}\bigl(p\thinspace\Vert\thinspace q\bigr)$ 는 $p$ 가 양인 곳을 $q$ 가 전부 덮게 해 모드 사이를 메우고, 기댓값 전파가 이쪽을 블록마다 근사한다[^2].

## 확률적 변분추론

데이터가 $N$ 개이고 각 데이터에 국소 잠재변수 $z_i$ 가, 전체에 전역 모수 $\beta$ 가 붙으면 $\beta$ 의 갱신식에 $N$ 개 항의 합이 들어간다. 데이터 하나를 뽑아 그 항을 $N$ 배 한 것을 기울기 추정량으로 쓰면 자연기울기 방향의 [확률적 경사하강법](stochastic-gradient-descent.md)이 되고, 이것을 SVI(stochastic variational inference)라 한다. 단계크기 $\rho_t$ 가 $\sum_t\rho_t=\infty$ 와 $\sum_t\rho_t^2\lt\infty$ 를 만족하면 국소 최대점에 수렴한다[^3].

# 활용

- [변분 오토인코더](variational-autoencoder.md)(variational autoencoder, VAE)는 변분족을 신경망이 출력하는 Gauss 분포로 잡고 ELBO 를 재매개화 기법으로 최대화한다. 평균장 좌표상승 대신 전역 경사상승을 쓰는 갈래다.
- [Bayes 추론](bayesian-inference.md)에서 사후분포의 정규화상수가 닫힌 형태로 없을 때 [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)(Markov chain Monte Carlo, MCMC)와 함께 쓰는 두 표준 도구의 하나다. MCMC 가 표본으로 참 분포에 접근하는 대신, 변분 추론은 최적화 문제를 풀어 분포족 안의 한 점을 준다.
- [기댓값 최대화 알고리즘](em-algorithm.md)(expectation–maximization, EM)의 E 단계는 변분족에 제약이 없어 $q=p(z\mid x,\theta)$ 를 그대로 쓸 수 있는 경우다. 그 분포를 계산할 수 없을 때 $q$ 를 평균장 족으로 제한한 것이 변분 EM 이다.
- [확률 그래프 모형](graphical-models.md)의 순환 그래프에서 믿음 전파가 주변분포를 주지 않을 때 평균장 갱신을 쓴다. 이웃의 기댓값만 받으므로 좌표 사이의 상관은 버린다.
- 지수족의 자연모수와 충분통계량이 갱신식의 형태를 정한다. 완전 조건부가 지수족인 모형에서만 CAVI 가 닫힌 형태로 적힌다.

[^1]: Michael I. Jordan, Zoubin Ghahramani, Tommi S. Jaakkola, Lawrence K. Saul, "An Introduction to Variational Methods for Graphical Models", Machine Learning 37 (1999), 183–233.

[^2]: Martin J. Wainwright, Michael I. Jordan, "Graphical Models, Exponential Families, and Variational Inference", Foundations and Trends in Machine Learning 1 (2008), 1–305.

[^3]: Matthew D. Hoffman, David M. Blei, Chong Wang, John Paisley, "Stochastic Variational Inference", Journal of Machine Learning Research 14 (2013), 1303–1347.

# 연관 문서

## 선수지식

- [KL divergence](kl-divergence.md)
- [확률 그래프 모형](graphical-models.md)

## 더 알아보기

- [변분 오토인코더](variational-autoencoder.md)

#machine_learning #statistics #probability #information_theory
