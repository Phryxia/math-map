# Riemann 가설

# 개요

Riemann 가설은 [Riemann zeta 함수](riemann-zeta.md)의 비자명한 영점이 전부 직선 $\mathrm{Re}\thinspace s=1/2$ 위에 있다는 추측이다.[^1] 영점의 실수부가 [소수 정리](prime-number-theorem.md)의 오차 크기를 정하므로, 이 추측은 소수 계량 함수의 오차가 $\sqrt x$ 규모라는 진술과 동치다. 여러 $L$ 함수로 일반화한 판본이 있고, 유한체 위 곡선에 대한 판본은 증명되었다.

# 직관

$x=10^4$ 에서 소수의 개수는 $\pi(x)=1229$ 이고 $\mathrm{Li}(x)=1246.1\ldots$ 이다. 차이는 $17$ 남짓이다. $x=10^8$ 에서는 $\pi(x)=5761455$ , $\mathrm{Li}(x)=5762209.4\ldots$ 로 차이가 $754$ 다. 소수 정리는 이 차이가 $x$ 에 비해 작다고만 말한다. 차이 자체가 얼마나 커질 수 있는지는 답하지 않는다.

명시 공식이 그 차이를 영점으로 적는다. Chebyshev 함수 $\psi(x)=\sum_{p^k\le x}\ln p$ 에 대해 다음이 성립한다.

$$
\psi(x)=x-\sum_\rho\frac{x^\rho}{\rho}-\ln(2\pi)-\tfrac12\ln\negthinspace\left(1-x^{-2}\right)
$$

합은 $\zeta$ 의 비자명한 영점 $\rho=\beta+i\gamma$ 전체를 훑는다. 항 하나의 크기는 $\vert x^\rho\vert=x^\beta$ 이므로, 오차의 크기는 $\beta$ 가 정한다.

비자명한 영점은 임계띠 $0\lt\beta\lt 1$ 안에 있으니 어떤 항도 $x$ 를 넘지 않는다. 그러나 $\beta$ 가 $1$ 에 가까운 영점이 하나라도 있으면 그 항 하나가 $x^\beta$ 만큼 오차를 키운다. 실수부의 상한이 곧 오차의 지수다.

함수방정식이 영점을 $\mathrm{Re}\thinspace s=1/2$ 에 대해 대칭으로 배치하므로 실수부의 상한은 $1/2$ 아래로 내려갈 수 없다. Riemann 가설은 그 상한이 정확히 $1/2$ , 곧 모든 $\beta$ 가 $1/2$ 이라는 주장이고, 그러면 오차는 $\sqrt x$ 규모가 된다.

# 정의

## Riemann 가설

$\zeta$ 의 임계띠 $0\lt\mathrm{Re}\thinspace s\lt 1$ 안의 모든 영점 $\rho$ 가 다음을 만족한다는 추측이다.[^1]

$$
\mathrm{Re}\thinspace\rho=\tfrac12
$$

자명한 영점 $s=-2,-4,-6,\dots$ 은 이 진술에서 제외한다.

## 영점 세기 함수

$0\lt\mathrm{Im}\thinspace\rho\le T$ 인 비자명한 영점의 개수를 $N(T)$ , 그 가운데 $\mathrm{Re}\thinspace\rho=1/2$ 인 것의 개수를 $N_0(T)$ 라 쓴다. Riemann–von Mangoldt 공식이 $N(T)$ 를 준다.[^2]

$$
N(T)=\frac{T}{2\pi}\ln\frac{T}{2\pi e}+O(\ln T)
$$

Riemann 가설은 $N_0(T)=N(T)$ 와 같은 말이다.

## 일반화된 Riemann 가설

**GRH**(generalized Riemann hypothesis)는 같은 진술을 [Dirichlet $L$ 함수](dirichlet-l-functions.md)로 넓힌 것이다. 모든 Dirichlet 지표 $\chi$ 에 대해 $L(s,\chi)$ 의 비자명한 영점이 $\mathrm{Re}\thinspace s=1/2$ 위에 있다는 주장이며, 주지표의 경우가 원래 Riemann 가설이다. 수체의 Dedekind zeta 함수로 넓힌 판본을 확장된 Riemann 가설이라 부른다.

# 성질

## 소수 계량 함수와의 동치

다음 세 진술은 서로 동치다.[^2]

- 모든 비자명한 영점이 $\mathrm{Re}\thinspace s=1/2$ 위에 있다.
- $\pi(x)=\mathrm{Li}(x)+O\big(\sqrt x\thinspace\ln x\big)$ .
- $\psi(x)=x+O\big(\sqrt x\thinspace\ln^2 x\big)$ .

증명의 요지는 명시 공식이다. 실수부의 상한을 $\theta$ 라 하면 합의 크기가 $x^\theta$ 규모이므로 오차 한계가 $x^{\theta+\varepsilon}$ 이 되고, 거꾸로 오차 한계 $x^{\theta+\varepsilon}$ 에서 $\zeta$ 의 Mellin 적분 표현을 $\mathrm{Re}\thinspace s\gt\theta$ 까지 이어 그 범위에 영점이 없음을 얻는다.

Möbius 함수의 합 $M(x)=\sum_{n\le x}\mu(n)$ 으로 쓴 판본도 동치다. 모든 $\varepsilon\gt 0$ 에 대해 $M(x)=O\big(x^{1/2+\varepsilon}\big)$ 인 것과 Riemann 가설이 같다. $1/\zeta(s)$ 가 $M$ 의 Mellin 변환이므로 두 진술이 옮겨진다.

## 임계선 위의 영점

Hardy 는 임계선 위에 영점이 무한히 많음을 보였다.[^3] 증명은 임계선 위에서 실숫값을 갖는 Hardy 함수 $Z(t)$ 를 만들고, 그 적분의 부호가 무한히 자주 바뀜을 보이는 것이다.

Selberg 는 $N_0(T)/N(T)$ 가 양의 하한을 가짐을 보였다. Levinson 의 방법은 이 비율을 $1/3$ 이상으로, Conrey 는 $2/5$ 이상으로 올렸다.[^4] 방법은 $\zeta$ 에 Dirichlet 다항식을 곱해 임계선 위 실수 영점을 세기 좋게 만드는 것이다.

## 무영점 영역

$\zeta(s)$ 는 $\mathrm{Re}\thinspace s=1$ 위에서 영점을 갖지 않고, 이 사실만으로 소수 정리가 나온다. de la Vallée Poussin 은 다음 영역에 영점이 없음을 보였고, Vinogradov 와 Korobov 가 이 영역을 넓혔다.[^2]

$$
\sigma\gt 1-\frac{c}{\ln(\vert t\vert+2)}
$$

무영점 영역의 너비가 소수 정리의 오차항을 정한다. Riemann 가설은 임계띠의 오른쪽 절반 전체가 무영점 영역이라는 진술이다.

## 유한체 판본

유한체 $\mathbb F_q$ 위의 종수 $g$ 인 곡선 $C$ 의 zeta 함수에 대해서는 대응하는 진술이 정리다. 영점이 $\vert\alpha\vert=\sqrt q$ 를 만족하고, 점의 개수에 대한 다음 한계가 따라온다.

$$
\left\vert\char35{}C(\mathbb F_q)-(q+1)\right\vert\le 2g\sqrt q
$$

Hasse 가 타원곡선에서, Weil 이 일반 곡선에서 증명했다. 고차원 다양체로 올린 진술이 [Weil 추측](deligne-weil-conjectures.md)의 마지막 항목이고 Deligne 가 증명했다.

# 활용

- **소수 판정.** Miller–Rabin 검사의 증인을 $2(\ln n)^2$ 이하에서 찾으면 충분하다는 것이 GRH 아래 성립하고, 이것으로 이 검사가 결정론적 다항시간 알고리즘이 된다.[^5]
- **Chebotarev 밀도 정리.** 주어진 Frobenius 켤레류를 갖는 최소 소수의 크기 한계가 GRH 아래 유효해진다. 무조건적 판본은 Siegel 영점 때문에 비유효적이다.
- **이차체의 유수.** 허수 이차체의 유수 문제에서 Siegel 영점을 배제하는 데 GRH 를 쓴다.
- **무작위 행렬 대응.** Montgomery 가 계산한 임계선 위 영점의 쌍 상관함수가 Gauss 유니터리 앙상블의 고윳값 쌍 상관함수와 같은 꼴이다. [Wigner 반원법칙](wigner-semicircle.md)이 주는 고윳값 통계를 $L$ 함수의 평균값 예측에 쓰는 근거가 이 관찰이다.

[^1]: Enrico Bombieri, *Problems of the Millennium: the Riemann Hypothesis*, Clay Mathematics Institute (2000). 문제의 공식 진술과 배경. 이 추측이 미해결이라는 것도 이 문서가 명시한다.

[^2]: E. C. Titchmarsh, *The Theory of the Riemann Zeta-Function*, 2nd ed. (revised by D. R. Heath-Brown), Oxford University Press (1986). 영점 세기 공식, 무영점 영역, 오차항과의 동치.

[^3]: G. H. Hardy, *Sur les zéros de la fonction $\zeta(s)$ de Riemann*, C. R. Acad. Sci. Paris **158** (1914), 1012–1014.

[^4]: J. B. Conrey, *More than two fifths of the zeros of the Riemann zeta function are on the critical line*, J. reine angew. Math. **399** (1989), 1–26.

[^5]: Eric Bach, *Explicit bounds for primality testing and related problems*, Math. Comp. **55** (1990), 355–380. GRH 아래의 증인 한계.

# 연관 문서

## 선수지식

- [Riemann zeta 함수](riemann-zeta.md)
- [소수 정리](prime-number-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #complex_analysis #analysis
