# Schramm–Loewner 진화

# 개요

**Schramm–Loewner 진화(Schramm–Loewner evolution, SLE)** 는 평면 영역의 두 경계점을 잇는 무작위 곡선을 Brown 운동 하나로 만드는 방법이다. 육각형 칸을 동전을 던져 검게 또는 희게 칠하고, 왼쪽 경계는 검게 오른쪽 경계는 희게 고정한 뒤 검은 칸과 흰 칸 사이의 경계선을 아래에서 위로 따라가면 구불구불한 곡선 하나가 생긴다. 칸을 작게 할 때 이 곡선이 어떤 모양에 다가가는지가 물음이고, SLE 는 그 극한을 매개변수 $\kappa$ 하나로 정해지는 곡선들 가운데 하나로 준다.

# 직관

상반평면 $\mathbb H=\lbrace\mathrm{Im}\thinspace z\gt 0\rbrace$ 에서 원점부터 자라는 곡선 $\gamma$ 를 생각한다. 시각 $t$ 까지 그린 부분을 뺀 영역 $\mathbb H\setminus\gamma\lbrack 0,t\rbrack$ 은 단순연결이므로 [Riemann 사상정리](riemann-mapping-theorem.md)에 따라 $\mathbb H$ 로 옮기는 전단사 정칙함수 $g_t$ 가 있다. 무한대 근처에서 $g_t(z)=z+2t/z+\cdots$ 가 되게 고르고, 곡선의 끝점이 옮겨 가는 실수를 $W_t$ 라 한다.

곡선이 허수축을 따라 곧게 자라 $\gamma(t)=2i\sqrt t$ 이면 다음 함수가 그 사상이다.

$$
g_t(z)=\sqrt{z^2+4t}
$$

끝점 $2i\sqrt t$ 는 $0$ 으로 가므로 $W_t=0$ 이다. 시간으로 미분하면 $\partial_tg_t(z)=2/g_t(z)$ 다.

곡선이 휘면 $W_t$ 가 움직인다. Löwner 는 곡선과 $W_t$ 가 서로를 정하고, 그 관계가 다음 미분방정식이라는 것을 보였다.

$$
\partial_tg_t(z)=\frac{2}{g_t(z)-W_t},\qquad g_0(z)=z
$$

곧게 자란 곡선은 $W_t=0$ 인 경우다. 그래서 무작위 곡선을 만들려면 실수 값 무작위 함수 $W_t$ 를 고르면 된다. Schramm 은 격자 모형의 극한이 가져야 할 두 성질에서 $W_t$ 가 [Brown 운동](brownian-motion.md)의 상수배여야 한다는 것을 끌어냈다.[^1]

# 정의

실수 값 연속함수 $W_t$ 가 주어지면, $z\in\mathbb H$ 마다 다음 [상미분방정식](ordinary-differential-equations.md)의 해 $g_t(z)$ 는 $g_t(z)-W_t$ 가 $0$ 이 되기 전까지 정의된다.

$$
\partial_tg_t(z)=\frac{2}{g_t(z)-W_t},\qquad g_0(z)=z
$$

이것을 **Löwner 방정식(Löwner equation)** 이라 하고 $W_t$ 를 **구동 함수(driving function)** 라 한다. 해가 시각 $t$ 까지 정의되지 않는 점 전체를 $K_t$ 라 하면 $g_t$ 는 $\mathbb H\setminus K_t$ 를 $\mathbb H$ 로 옮기는 전단사 정칙함수다. 직관 절의 곧은 곡선에서 $W_t=0$, $K_t$ 는 선분 $\lbrack 0,2i\sqrt t\rbrack$ 이다.

$\kappa\ge 0$ 이고 $B_t$ 가 표준 Brown 운동일 때 구동 함수를 $W_t=\sqrt\kappa B_t$ 로 둔 것을 **SLE** 라 하고, 매개변수를 붙여 $\mathrm{SLE}\_\kappa$ 로 쓴다. $\kappa=0$ 이면 직관 절의 곧은 곡선이다. Rohde 와 Schramm 은 모든 $\kappa\ne 8$ 에서 $K_t$ 가 원점에서 무한대로 가는 연속 곡선 $\gamma$ 로 그려진다는 것을 보였고[^2], $\kappa=8$ 은 [균등 신장트리](uniform-spanning-tree.md)의 극한으로 같은 결론이 나온다.

다른 단순연결 영역 $D$ 의 두 경계점 $a,b$ 를 잇는 SLE 는, $D$ 를 $\mathbb H$ 로 옮기며 $a$ 를 $0$ 으로, $b$ 를 무한대로 보내는 등각사상으로 $\mathbb H$ 의 SLE 를 옮겨 정의한다.

# 성질

## Schramm 의 특징짓기

$D$ 에서 $a$ 와 $b$ 를 잇는 무작위 곡선의 분포가 좌우 대칭이고 다음 두 성질을 가지면 그 곡선은 어떤 $\kappa$ 의 SLE 다.[^1]

- 등각 불변성(conformal invariance). 등각사상 $\phi:D\to D'$ 으로 옮긴 곡선의 분포는 $D'$ 에서 $\phi(a)$ 와 $\phi(b)$ 를 잇는 곡선의 분포와 같다.
- 영역 Markov 성질(domain Markov property). 곡선의 처음 일부를 알 때 나머지의 조건부 분포는, 그 일부를 뺀 영역에서 끝점과 $b$ 를 잇는 곡선의 분포와 같다.

두 성질에서 구동 함수 $W_t$ 의 증분이 독립이고 정상적이며, 좌우 대칭과 축척 불변성에서 $W_t$ 가 Brown 운동의 상수배라는 것이 나온다. 직관 절의 육각형 칸 모형은 칸이 작아질 때 이 두 성질을 근사적으로 갖는다.

## 곡선의 세 상

곡선의 모양은 $\kappa$ 로 세 가지로 갈린다.[^2]

| κ 의 범위 | 곡선의 모양 |
| --- | --- |
| 0 ≤ κ ≤ 4 | 자기 자신과 만나지 않는 단순곡선 |
| 4 < κ < 8 | 자기 자신과 닿고 영역을 감싸지만 평면을 채우지 않는 곡선 |
| κ ≥ 8 | 상반평면의 모든 점을 지나는 곡선 |

곡선의 [Hausdorff 차원](hausdorff-dimension.md)은 $\min(1+\kappa/8,2)$ 다.[^3]

## 특별한 매개변수

- $\kappa=6$ 은 국소성(locality)을 갖는다. 곡선이 경계의 한 부분에 닿기 전까지는 그 부분을 바꾸어도 곡선의 분포가 변하지 않는다. 칸 색이 서로 독립인 육각형 칸 모형의 극한이 국소성을 가져야 하므로 그 극한이 $\mathrm{SLE}\_6$ 이다.
- $\kappa=8/3$ 은 제한성(restriction property)을 갖는다. 곡선이 영역의 한 부분을 피한다는 조건 아래의 분포가, 그 부분을 뺀 영역의 $\mathrm{SLE}\_{8/3}$ 과 같다.

# 활용

- 격자 모형의 축척 극한. 임계 [침투](percolation.md)의 경계는 $\mathrm{SLE}\_6$ 으로 수렴한다.[^4] 고리 지운 무작위 걷기는 $\mathrm{SLE}\_2$ 로, 균등 신장트리를 감싸는 곡선은 $\mathrm{SLE}\_8$ 로 수렴한다.[^5] 임계 온도의 [Ising 모형](ising-model.md)에서 위아래 스핀 영역의 경계는 $\mathrm{SLE}\_3$ 으로 수렴한다.
- 침투의 교차 확률. 육각형 칸 모형에서 직사각형의 왼쪽과 오른쪽을 검은 칸으로 잇는 확률의 극한을 [Cardy 공식](cardy-formula.md)이 주고, 그 등각 불변성이 $\mathrm{SLE}\_6$ 수렴의 증명에 쓰인다.
- 평면 Brown 운동의 바깥 경계. $\mathrm{SLE}\_6$ 과 $\mathrm{SLE}\_{8/3}$ 의 계산으로 평면 Brown 운동이 지나간 자리의 바깥 경계의 Hausdorff 차원이 $4/3$ 이라는 것이 증명되었다.
- de Branges 정리. 구동 함수가 결정적인 Löwner 방정식은 [de Branges 정리](de-branges-theorem.md)의 증명에서 단엽 함수의 족을 만드는 데 쓰인다.

[^1]: O. Schramm, "Scaling limits of loop-erased random walks and uniform spanning trees", Israel Journal of Mathematics 118 (2000).
[^2]: S. Rohde, O. Schramm, "Basic properties of SLE", Annals of Mathematics 161 (2005).
[^3]: V. Beffara, "The dimension of the SLE curves", Annals of Probability 36 (2008).
[^4]: S. Smirnov, "Critical percolation in the plane: conformal invariance, Cardy's formula, scaling limits", Comptes Rendus de l'Académie des Sciences 333 (2001).
[^5]: G. F. Lawler, O. Schramm, W. Werner, "Conformal invariance of planar loop-erased random walks and uniform spanning trees", Annals of Probability 32 (2004).

# 연관 문서

## 선수지식

- [Riemann 사상정리](riemann-mapping-theorem.md)
- [Brown 운동](brownian-motion.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #complex_analysis #analysis
