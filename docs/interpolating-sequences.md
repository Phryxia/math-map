# 보간 수열

# 개요

**보간 수열(interpolating sequence)** 은 원판 안의 점들의 수열 가운데, 각 점에 아무 유계인 값을 정해도 그 값을 갖는 유계 정칙함수가 있는 수열이다. 점 $1/2, 3/4, 7/8,\dots$ 에서 값을 차례로 $1, 0, 1, 0,\dots$ 으로 정했을 때 원판에서 유계인 정칙함수가 이 값을 모두 가질 수 있는지가 물음이다. 이 문제는 점들이 원판의 쌍곡 거리로 서로 충분히 떨어져 있는지 하나로 판정된다.

# 직관

$\vert f\vert\le M$ 인 정칙함수가 점 $z_j$ 에서 $1$, 점 $z_k$ 에서 $0$ 이라 하자. $f/M$ 은 원판을 원판 안으로 보내므로 [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)에서 다음이 나온다.

$$
\frac1M=\rho\left(\frac{f(z_j)}{M},\frac{f(z_k)}{M}\right)\le\rho(z_j,z_k)
$$

그래서 값을 $1$ 과 $0$ 으로 번갈아 정하려면 이웃한 점들의 의사쌍곡 거리 $\rho$ 가 $1/M$ 이상이어야 한다. 점이 경계로 다가가며 쌍곡 거리로 뭉치면 $M$ 이 무한대가 되어야 하고, 그런 함수는 없다.

$z_k=1-2^{-k}$ 에서 $a_k=2^{-k}$ 로 두면 $j\lt k$ 일 때 다음과 같다.

$$
\rho(z_j,z_k)=\frac{a_j-a_k}{a_j+a_k-a_ja_k}\ge\frac{1-2^{j-k}}{1+2^{j-k}}
$$

한 점에서 다른 모든 점까지의 $\rho$ 를 곱해도 $\prod_{m\ge 1}\bigl((1-2^{-m})/(1+2^{-m})\bigr)^2$ 보다 작아지지 않고, 이 곱은 양수다. 개요의 물음에서 $1/2, 3/4, 7/8,\dots$ 이 이 수열이고, 아래 Carleson 정리에서 값 $1,0,1,0,\dots$ 을 갖는 유계 정칙함수가 있다.

# 정의

[Hardy 공간](hardy-spaces.md)의 $H^\infty$ 는 원판에서 유계인 정칙함수의 집합이다. 원판의 서로 다른 점들의 수열 $(z_k)$ 가 다음을 만족하면 **보간 수열** 이라 한다. 모든 유계 복소수열 $(w_k)$ 에 대해 $f(z_k)=w_k$ 인 $f\in H^\infty$ 가 있다.

수열 $(z_k)$ 가 어떤 $\delta\gt 0$ 에 대해 다음을 만족하면 **고르게 떨어져 있다(uniformly separated)** 고 한다.

$$
\prod_{j\ne k}\rho(z_j,z_k)\ge\delta\qquad(k=1,2,\dots)
$$

여기서 $\rho$ 는 의사쌍곡 거리다. 왼쪽 곱은 $z_k$ 를 뺀 나머지 점을 영점으로 갖는 [Blaschke 곱](blaschke-products.md)의 $z_k$ 에서의 절댓값이다. 직관 절의 $z_k=1-2^{-k}$ 는 고르게 떨어져 있다.

# 성질

## Carleson 보간 정리

원판의 수열이 보간 수열인 것은 고르게 떨어져 있는 것과 동치다.[^1] 이것이 **Carleson 보간 정리(Carleson interpolation theorem)** 다. 고르게 떨어진 수열에서는 $\sup_k\vert w_k\vert\le 1$ 인 값을 갖는 $f$ 를 $\Vert f\Vert\_\infty\le C(\delta)$ 로 고를 수 있고, $C(\delta)$ 는 $\delta$ 만으로 정해진다.

필요 방향은 직관 절의 계산을 넓힌 것이다. 보간 수열이면 [열린 사상 정리](open-mapping-theorem.md)로 $\sup_k\vert w_k\vert\le 1$ 인 값마다 노름이 $M$ 이하인 보간 함수가 있는 상수 $M$ 이 정해진다. $z_k$ 에서 $1$, 나머지 점에서 $0$ 인 $f$ 를 $z_k$ 를 뺀 점들의 Blaschke 곱 $B_k$ 로 나누면 몫이 다시 유계 정칙함수이고, $1=\vert f(z_k)\vert\le\Vert f\Vert\_\infty\vert B_k(z_k)\vert$ 가 되어 $\vert B_k(z_k)\vert\ge 1/M$ 이다.

## Carleson 측도

$(z_k)$ 가 고르게 떨어져 있으면, 측도 $\mu=\sum_k(1-\vert z_k\vert^2)\delta_{z_k}$ 는 경계의 길이 $h$ 인 호 위에 놓인 원판의 상자 모양 영역에 $Ch$ 이하의 질량을 준다. 이런 측도를 **Carleson 측도(Carleson measure)** 라 한다. Carleson 측도는 $H^2$ 의 함수 $f$ 에 대해 $\int\vert f\vert^2\thinspace d\mu\le C'\Vert f\Vert\_{H^2}^2$ 을 만족하는 측도와 같고, 충분 방향의 증명에 쓰인다.

## 쌍곡 거리로 본 조건

고르게 떨어진 수열은 두 조건으로 나뉜다. 서로 다른 두 점의 $\rho$ 가 양의 하한을 갖고, 위의 $\mu$ 가 Carleson 측도다. 직관 절의 Schwarz–Pick 논증은 첫째 조건만 준다. 경계의 한 호 근처에 서로 떨어진 점이 너무 많이 몰리면 둘째 조건이 깨지고 수열은 보간 수열이 아니다.

# 활용

- [Corona 정리](corona-theorem.md). Carleson 은 보간 정리와 Carleson 측도를 써서 corona 정리를 증명했다.
- [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md)과의 관계. 유한개의 점에서는 Pick 행렬이 노름 $1$ 이하의 보간 함수가 있는지 정한다. 보간 수열은 무한히 많은 점에서 노름에 상한만 두고 모든 값이 가능한지를 묻는 문제다.
- 표본화. 보간 수열은 $H^\infty$ 의 함수를 그 점들의 값으로 자유롭게 정할 수 있는 점 집합이고, 그 반대편인 표본 수열(sampling sequence)은 점들의 값이 함수의 노름을 정하는 점 집합이다. 대역 제한 함수의 Paley–Wiener 공간에서도 같은 두 문제가 [표본화 정리](sampling-theorem.md)의 일반화로 연구된다.

[^1]: L. Carleson, "An interpolation problem for bounded analytic functions", American Journal of Mathematics 80 (1958).

# 연관 문서

## 선수지식

- [Blaschke 곱](blaschke-products.md)
- [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #functional_analysis #analysis
