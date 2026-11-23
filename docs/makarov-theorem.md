# Makarov 정리

# 개요

**Makarov 정리(Makarov's theorem)** 는 평면의 단순연결 영역 안에서 출발한 무작위 입자가 경계에 처음 닿는 자리가, 경계가 아무리 복잡해도 차원이 $1$ 인 부분에 몰린다는 정리다. 눈송이 모양의 von Koch 곡선으로 둘러싸인 영역의 가운데에서 입자를 놓으면, 경계 곡선의 차원은 $\log 4/\log 3\approx 1.26$ 이지만 입자가 닿는 자리는 차원 $1$ 인 부분 집합에 거의 확실하게 들어 있다.

이 정리는 [조화 측도](harmonic-measure.md)를 [Hausdorff 차원](hausdorff-dimension.md)으로 재어, 입자가 닿는 경계 부분이 얼마나 큰지를 경계의 모양과 상관없는 하나의 수로 답한다.

# 직관

원판의 가운데에서 출발한 입자는 원 위의 모든 점에 고르게 닿는다. 닿는 자리의 분포는 원의 길이를 $2\pi$ 로 나눈 것이고, 닿는 자리가 퍼진 집합은 원 전체라 차원이 $1$ 이다.

경계에 폭 $w$, 깊이 $d$ 인 좁은 만이 파여 있으면 입자가 만의 바닥까지 들어갈 확률은 $e^{-\pi d/w}$ 정도로 작아진다. 이 추정은 [극값 길이](extremal-length.md)로 증명되는 [Ahlfors 왜곡 정리](ahlfors-distortion-theorem.md)의 결과다. 만의 안쪽 경계는 길이가 있어도 입자를 거의 받지 못한다.

von Koch 곡선은 각 변의 가운데 셋째 토막을 바깥으로 솟은 삼각형으로 바꾸는 일을 끝없이 되풀이해 만든다. 단계마다 곡선의 길이는 $4/3$ 배가 되지만, 새로 생긴 오목한 자리마다 좁은 만이 생겨 입자가 덜 들어간다. 길이가 늘어난 만큼 입자가 퍼지지 않으므로, 입자가 닿는 자리는 곡선 전체보다 작은 차원의 집합에 몰린다. Makarov 정리는 그 차원이 언제나 정확히 $1$ 이라는 것이다.

# 정의

$\mu$ 가 평면의 Borel 확률 측도일 때 **측도의 Hausdorff 차원(Hausdorff dimension of a measure)** 은 다음 값이다.

$$
\dim\mu=\inf\lbrace \dim\_H E : \mu(E)=1\rbrace
$$

하한은 $\mu(E)=1$ 인 Borel 집합 $E$ 전체에 대해 취한다. $\mu$ 가 몰려 있는 집합 가운데 가장 작은 차원이다. 원의 차원이 $1$ 이고 차원이 $1$ 보다 작은 집합은 길이가 $0$ 이므로, 단위원 위의 균등 측도는 차원이 $1$ 이다.

$\Omega$ 가 단순연결이고 경계가 두 점 이상인 영역, $z\_0\in\Omega$ 이면 $\omega=\omega(z\_0,\cdot,\Omega)$ 는 $z\_0$ 에서 본 조화 측도다. **Makarov 정리** 는 다음 두 진술이다.[^1]

1. $\dim\_H E\lt 1$ 인 Borel 집합 $E\subseteq\partial\Omega$ 는 $\omega(E)=0$ 이다.
2. $\omega(F)=1$ 이고 $\dim\_H F=1$ 인 Borel 집합 $F\subseteq\partial\Omega$ 가 존재한다.

두 진술을 합치면 $\dim\omega=1$ 이다. 직관 절의 von Koch 영역에서 $F$ 는 곡선의 부분 집합이고, 곡선 전체의 차원 $1.26$ 보다 작다.

# 성질

## 증명의 요지

[Riemann 사상정리](riemann-mapping-theorem.md)로 $\varphi:\mathbb D\to\Omega$, $\varphi(0)=z\_0$ 인 [등각사상](conformal-mapping.md)을 잡는다. 조화 측도는 등각사상으로 옮겨지므로, $\omega$ 는 단위원의 정규화된 길이를 $\varphi$ 의 경계값으로 옮긴 측도다.

단위원의 점 $\zeta$ 근처 길이 $h$ 인 호는 $\varphi$ 로 지름이 대략 $\vert\varphi'((1-h)\zeta)\vert\thinspace h$ 인 경계 조각이 된다. 그러므로 $\varphi(\zeta)$ 근처에서 반지름 $\delta$ 인 원판이 받는 조화 측도는 $\delta/\vert\varphi'\vert$ 정도다. $\vert\varphi'\vert$ 가 $\delta$ 의 거듭제곱보다 느리게 변하면 이 값은 $\delta^{1+o(1)}$ 이고, 그러면 $\omega$ 의 차원이 $1$ 이다.

남은 것은 $\log\varphi'$ 의 크기다. 단순연결 영역의 등각사상에서 $\log\varphi'$ 는 [Bloch 함수](bloch-functions.md)이고, Makarov 는 Bloch 함수가 반지름을 따라 [반복로그 법칙](law-of-iterated-logarithm.md)과 같은 꼴의 증가 한계를 거의 모든 $\zeta$ 에서 만족함을 보였다.[^1] 그 한계는 다음과 같다.

$$
\limsup\_{r\to 1}\frac{\vert\log\varphi'(r\zeta)\vert}{\sqrt{\log\frac{1}{1-r}\thinspace\log\log\log\frac{1}{1-r}}}\le C
$$

이 한계는 $\log(1/(1-r))$ 보다 느리게 자라므로 $\vert\varphi'\vert$ 가 $\delta$ 의 어떤 거듭제곱보다도 느리게 변한다.

## 정밀한 형태

위의 반복로그 한계에서 다음 차원 함수가 나온다.

$$
h\_C(t)=t\exp\Bigl(C\sqrt{\log\tfrac1t\thinspace\log\log\log\tfrac1t}\Bigr)
$$

큰 상수 $C$ 에 대해 $\omega$ 는 $h\_C$ 로 잰 Hausdorff 측도에 대해 절대연속이다.[^1] $h\_C(t)$ 는 $t$ 보다 크지만 $t^{1-\varepsilon}$ 보다는 작으므로, 이 진술은 진술 1 보다 강하다.

## 일반 영역

단순연결이 아닌 평면 영역에서도 조화 측도가 정의되면 $\dim\omega\le 1$ 이다. 이것이 Jones–Wolff 정리(Jones–Wolff theorem)다.[^2] 경계가 [Cantor 집합](cantor-set.md)인 영역처럼 $\dim\omega\lt 1$ 인 경우도 있으므로 진술 1 은 일반 영역으로 넓어지지 않는다.

$3$ 차원 이상의 공간에서는 차원이 $d$ 인 공간의 영역에 대해 $\dim\omega\le d-\varepsilon\_d$ 인 양수 $\varepsilon\_d$ 가 존재한다.[^3] $\mathbb R^3$ 에는 $\dim\omega\gt 2$ 인 영역이 있어서 평면의 상한 $1$ 에 해당하는 $d-1$ 은 상한이 아니다.[^4]

# 활용

- [Julia 집합](julia-set.md). 다항식의 Julia 집합 $J$ 가 연결이면 $J$ 의 바깥 영역은 리만 구면에서 단순연결이고, $\infty$ 에서 본 조화 측도는 Brolin 측도(Brolin measure)와 같다. Makarov 정리로 이 측도의 차원은 $1$ 이다. $J$ 의 차원이 $1$ 보다 큰 다항식에서는 Brolin 측도가 $J$ 의 작은 부분에 몰린다.
- 확산 제한 응집(diffusion-limited aggregation). 덩어리에 다음 입자가 붙을 확률이 바깥 영역의 조화 측도이므로, 입자가 붙는 자리는 차원 $1$ 인 집합에 몰린다. 덩어리의 차원이 $1$ 보다 커도 자라는 자리는 바깥으로 튀어나온 끝 부분이다.
- 경계 대응의 왜곡. 등각사상의 경계값은 단위원에서 길이가 양수인 집합을 차원 $1$ 이상인 집합으로 보내고, 차원 $1$ 보다 작은 경계 집합의 역상은 길이가 $0$ 이다.

[^1]: N. G. Makarov, "On the distortion of boundary sets under conformal mappings", *Proceedings of the London Mathematical Society* (3) 51 (1985), 369–384; J. B. Garnett, D. E. Marshall, *Harmonic Measure*, Cambridge University Press, 2005, 8장.
[^2]: P. W. Jones, T. H. Wolff, "Hausdorff dimension of harmonic measures in the plane", *Acta Mathematica* 161 (1988), 131–144.
[^3]: J. Bourgain, "On the Hausdorff dimension of harmonic measure in higher dimension", *Inventiones Mathematicae* 87 (1987), 477–483.
[^4]: T. H. Wolff, "Counterexamples with harmonic gradients in R³", in *Essays on Fourier Analysis in Honor of Elias M. Stein*, Princeton University Press, 1995, 321–384.

# 연관 문서

## 선수지식

- [조화 측도](harmonic-measure.md)
- [Hausdorff 차원](hausdorff-dimension.md)

## 더 알아보기

- [Bloch 함수](bloch-functions.md)

#complex_analysis #measure_theory #probability
