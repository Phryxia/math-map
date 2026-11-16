# Kakeya 극대함수

# 개요

**Kakeya 극대함수(Kakeya maximal function)** 는 함수가 주어졌을 때 방향마다 그 방향의 가늘고 긴 관 위에서 함수의 평균이 가장 큰 값을 재는 함수다. 평면에서 모든 방향의 길이 $1$ 선분을 하나씩 포함하는 집합은 넓이가 $0$ 일 수 있다. 그 선분들을 폭 $\delta$ 인 관으로 두껍게 하면 넓이가 양수가 되는데, $\delta$ 를 줄일 때 이 넓이가 얼마나 빨리 줄 수 있는지가 문제다.

Kakeya 극대함수의 부등식은 관들의 합집합의 부피를 아래에서 잡아, [Kakeya 바늘 문제](kakeya-needle-problem.md)의 Besicovitch 집합이 차원을 잃지 않는다는 것을 증명하는 방법이 된다.

# 직관

평면에서 방향을 $\delta$ 간격으로 고르면 방향이 대략 $1/\delta$ 개다. 방향마다 길이 $1$, 폭 $\delta$ 인 관을 하나씩 놓으면 관 하나의 넓이는 $\delta$ 이고, 넓이를 모두 더하면 $1$ 정도다. 관들이 많이 겹치면 합집합 $E$ 의 넓이는 $1$ 보다 훨씬 작다.

$E$ 의 지시함수 $1\_E$ 를 놓고 방향마다 그 방향의 관 위에서 $1\_E$ 의 평균을 낸다. 방향마다 관 하나가 통째로 $E$ 안에 있으므로 평균이 가장 큰 값은 모든 방향에서 $1$ 이다. 방향들 위에서 이 값을 적분해도 원의 둘레 정도인 상수다.

반면 $1\_E$ 의 $L^2$ 노름은 $\vert E\vert^{1/2}$ 이다. 방향별 최대 평균의 노름을 $1\_E$ 의 노름으로 위에서 잡는 부등식이 $\delta$ 에 거의 무관한 상수로 성립하면, $\vert E\vert$ 는 $\delta$ 의 어떤 거듭제곱보다도 느리게 줄어야 한다. 관의 넓이를 다 더한 $1$ 에 비해 $E$ 가 아주 작아질 수 없다는 것이다.

# 정의

$0\lt\delta\lt 1$, 단위벡터 $e\in S^{n-1}$, $a\in\mathbb R^n$ 에 대해 $T\_e^\delta(a)$ 는 중심이 $a$ 이고 방향이 $e$ 인 길이 $1$ 선분의 $\delta$ 근방이다. 이것을 **$\delta$ 관(δ-tube)** 이라 한다. 평면의 $\delta$ 관은 넓이가 대략 $\delta$ 인 가는 직사각형이다.

국소 적분가능한 $f$ 의 **Kakeya 극대함수** 는 $S^{n-1}$ 위의 다음 함수다.

$$
f\_\delta^\ast(e)=\sup\_{a\in\mathbb R^n}\frac{1}{\vert T\_e^\delta(a)\vert}\int\_{T\_e^\delta(a)}\vert f\vert
$$

직관 절의 $1\_E$ 는 모든 $e$ 에서 $(1\_E)\_\delta^\ast(e)=1$ 이다. [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md)가 점마다 공 위의 평균을 재는 것과 달리, 이 함수는 방향마다 관 위의 평균을 잰다.

**Kakeya 극대함수 추측(Kakeya maximal function conjecture)** 은 모든 $\varepsilon\gt 0$ 에 대해 다음을 만족하는 $C\_\varepsilon$ 가 존재한다는 진술이다.

$$
\Vert f\_\delta^\ast\Vert\_{L^n(S^{n-1})}\le C\_\varepsilon\thinspace\delta^{-\varepsilon}\Vert f\Vert\_{L^n(\mathbb R^n)}
$$

# 성질

## 자명한 한계

관의 부피가 대략 $\delta^{n-1}$ 이므로 $f\_\delta^\ast(e)\le C\delta^{-(n-1)}\Vert f\Vert\_{L^1}$ 이다. 평균은 함수의 최댓값을 넘지 않으므로 $\Vert f\_\delta^\ast\Vert\_{L^\infty}\le\Vert f\Vert\_{L^\infty}$ 이다. 두 한계를 보간하면 $L^p$ 한계가 나오지만 $\delta$ 의 거듭제곱 손실이 남는다.

## Kakeya 추측과의 관계

Kakeya 극대함수 추측이 $\mathbb R^n$ 에서 성립하면, $\mathbb R^n$ 의 모든 Besicovitch 집합의 [Hausdorff 차원](hausdorff-dimension.md)이 $n$ 이다.[^1]

증명의 요지. Besicovitch 집합 $B$ 를 반지름 $\delta$ 인 공들로 덮은 합집합을 $E$ 라 하면, 직관 절처럼 $(1\_E)\_\delta^\ast=1$ 이 모든 방향에서 성립한다. 추측의 부등식에 넣으면 $\vert E\vert\ge c\_\varepsilon\delta^{n\varepsilon}$ 이고, $E$ 를 덮는 공의 수가 $\delta^{-n+n\varepsilon}$ 이상이다. 같은 논법을 Hausdorff 차원의 덮개에 맞게 다듬으면 차원이 $n-n\varepsilon$ 이상이고, $\varepsilon$ 은 임의다.

## 평면의 Córdoba 정리

$n=2$ 이면 다음이 성립한다. 이것을 Córdoba 정리(Córdoba's theorem)라 한다.[^2]

$$
\Vert f\_\delta^\ast\Vert\_{L^2(S^1)}\le C\Bigl(\log\frac1\delta\Bigr)^{1/2}\Vert f\Vert\_{L^2(\mathbb R^2)}
$$

그러므로 평면에서는 추측이 성립하고, 평면의 Besicovitch 집합은 차원이 $2$ 다.

증명의 요지. 방향이 각 $\theta$ 만큼 다른 두 $\delta$ 관이 겹치는 넓이는 $\delta^2/\theta$ 이하다. 방향을 $\delta$ 간격으로 고른 관 $T\_1,\dots,T\_N$ 에 대해 $\Vert\sum\_j 1\_{T\_j}\Vert\_{L^2}^2=\sum\_{j,k}\vert T\_j\cap T\_k\vert$ 이고, $\vert j-k\vert$ 번째 이웃과의 겹침이 $\delta/\vert j-k\vert$ 이하이므로 합이 $\log(1/\delta)$ 에 비례한다. 쌍대성으로 이 겹침 한계가 극대함수의 $L^2$ 한계가 된다.

## 고차원의 부분 결과

$n\ge 3$ 에서 Wolff 는 $p=(n+2)/2$ 인 $L^p$ 에서 추측의 부등식을 증명했고, 그 결과로 $\mathbb R^n$ 의 Besicovitch 집합의 Hausdorff 차원이 $(n+2)/2$ 이상이다.[^3] 증명은 한 관과 만나는 관들을 모은 머리빗 꼴(hairbrush)의 배치를 센다. $\mathbb R^3$ 의 Kakeya 집합의 Hausdorff 차원이 $3$ 이라는 것은 Wang 과 Zahl 이 증명했다.[^4]

# 활용

- Fourier 제한 추측(restriction conjecture). 구면 위의 유계 함수 $g$ 에 대해, 구면 측도 $g\thinspace d\sigma$ 의 [Fourier 변환](fourier-transform.md) $\widehat{g\thinspace d\sigma}$ 가 $q\gt 2n/(n-1)$ 인 $L^q(\mathbb R^n)$ 에 속하고 노름이 $\Vert g\Vert\_{L^\infty}$ 로 잡힌다는 추측이다. 구면의 작은 조각에 실린 $g$ 의 Fourier 변환은 그 조각의 법선 방향의 관에 몰리므로, 제한 추측은 Kakeya 극대함수 추측을 함의한다.[^1]
- [Bochner–Riesz 평균](bochner-riesz-means.md)의 추측. 구 곱셈자를 매끄럽게 깎은 $(1-\vert\xi\vert^2)\_+^\lambda$ 꼴의 곱셈자가 $L^p$ 에서 유계가 되는 범위에 관한 추측이고, 이 추측은 제한 추측을 함의한다.[^5] 그러므로 Kakeya 극대함수의 한계는 두 추측의 필요조건이다.
- [유한체 Kakeya 집합](finite-field-kakeya-sets.md). 유한체 위에서 같은 질문을 하면 관 대신 직선을 세고, 다항식 방법으로 크기의 하한이 증명된다.

[^1]: J. Bourgain, "Besicovitch type maximal operators and applications to Fourier analysis", *Geometric and Functional Analysis* 1 (1991), 147–187.
[^2]: A. Córdoba, "The Kakeya maximal function and the spherical summation multipliers", *American Journal of Mathematics* 99 (1977), 1–22.
[^3]: T. Wolff, "An improved bound for Kakeya type maximal functions", *Revista Matemática Iberoamericana* 11 (1995), 651–674.
[^4]: H. Wang, J. Zahl, "Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions", arXiv:2502.17655 (2025).
[^5]: T. Tao, "The Bochner–Riesz conjecture implies the restriction conjecture", *Duke Mathematical Journal* 96 (1999), 363–375.

# 연관 문서

## 선수지식

- [Kakeya 바늘 문제](kakeya-needle-problem.md)
- [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md)

## 더 알아보기

- [Bochner–Riesz 평균](bochner-riesz-means.md)

#analysis #measure_theory #combinatorics
