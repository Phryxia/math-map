# K-안정성

# 개요

**K-안정성(K-stability)** 은 [Fano 다양체](fano-varieties.md)를 한 방향으로 퇴화시킬 때마다 붙는 수의 부호로 [Kähler–Einstein 계량](kahler-einstein-metrics.md)이 있는지를 가르는 대수 조건이다. 사영평면에 대응하는 삼각형은 무게중심이 원점이고, 사영평면을 한 점에서 부풀린 곡면에 대응하는 사각형은 무게중심이 $(-1/6,1/12)$ 이다.

앞의 곡면에는 Kähler–Einstein 계량이 있고 뒤의 곡면에는 없다. K-안정성은 이 구별을 계량의 편미분방정식을 풀지 않고 다각형의 넓이, 경계의 길이, 무게중심 같은 셈으로 내린다.

# 직관

Kähler–Einstein 계량 문서의 Futaki 불변량은 정칙 벡터장마다 수를 주고, 그 수가 $0$ 이 아니면 계량이 없다. [토릭 다양체](toric-varieties.md)에서는 이 수를 다각형으로 셀 수 있다.

Fano 다양체 $X$ 가 곡면이고 토릭이면 $-K_X$ 에 격자 다각형 $P$ 가 대응하고, $-K_X$ 의 $k$ 제곱의 단면은 $kP$ 안의 격자점 $m$ 마다 하나씩 있다. 격자 벡터 $\xi$ 가 정하는 $\mathbb C^\ast$ 작용은 $m$ 의 단면에 무게 $\langle m,\xi\rangle$ 로 작용한다. 단면의 개수와 무게의 합을 $k$ 로 전개해 아래 정의 절의 식에 넣으면, 이 작용의 Futaki 불변량은 $P$ 의 무게중심 $c$ 로 $-\langle c,\xi\rangle/2$ 다.

사영평면의 $P$ 는 꼭짓점이 $(-1,-1)$, $(2,-1)$, $(-1,2)$ 인 삼각형이고 무게중심이 원점이다. 한 점에서 부풀린 사영평면의 $P$ 는 이 삼각형에서 꼭짓점 $(2,-1)$ 을 직선 $x=1$ 로 잘라 낸 사각형 $(-1,-1)$, $(1,-1)$, $(1,0)$, $(-1,2)$ 다. 넓이가 $4$ 이고 무게중심이 $(-1/6,1/12)$ 이므로, $\xi=(-1,0)$ 의 Futaki 불변량이 $-1/12$ 로 음이다.

벡터장이 없는 Fano 다양체에서는 이 방법으로 아무것도 잴 수 없다. 그래서 $X$ 자신의 벡터장 대신, $X$ 를 $\mathbb C^\ast$ 작용이 있는 다른 다양체로 퇴화시키고 그 퇴화된 다양체의 벡터장에서 같은 수를 잰다. 이 퇴화들 전부에서 수가 $0$ 이상인 것이 K-안정성이다.

# 정의

$X$ 를 $n$ 차원 Fano 다양체, $L=-K_X$ 라 한다. **시험 배치(test configuration)** 는 다음 자료다.

- 평탄 사상 $\pi:\mathcal X\to\mathbb C$ 와 $\pi$ 의 올마다 풍부한 선다발 $\mathcal L$.
- $\mathcal X$ 와 $\mathcal L$ 위의 $\mathbb C^\ast$ 작용으로, $\mathbb C$ 의 곱셈 작용을 덮는 것.
- $t\ne 0$ 인 올 $(\mathcal X_t,\mathcal L_t)$ 가 어떤 $r\ge 1$ 에 대해 $(X,L^r)$ 과 동형이다.

$t=0$ 의 올 $\mathcal X_0$ 은 $\mathbb C^\ast$ 작용을 갖는다. $H^0(\mathcal X_0,\mathcal L_0^k)$ 의 차원 $d_k$ 와 그 위의 작용의 무게의 합 $w_k$ 는 $k$ 가 크면 다항식이고 다음과 같이 전개된다.

$$
\begin{aligned}
d_k&=a_0k^n+a_1k^{n-1}+O(k^{n-2})\cr
w_k&=b_0k^{n+1}+b_1k^n+O(k^{n-1})
\end{aligned}
$$

**Donaldson–Futaki 불변량(Donaldson–Futaki invariant)** 은 다음 수다.

$$
\mathrm{DF}(\mathcal X,\mathcal L)=\frac{b_0a_1-b_1a_0}{a_0^2}
$$

$X$ 위의 $\mathbb C^\ast$ 작용 $\lambda$ 로 $X\times\mathbb C$ 에 대각 작용을 준 것을 **곱 배치(product configuration)** 라 하고, $\lambda$ 가 자명하면 **자명한 배치(trivial configuration)** 라 한다. 곱 배치의 Donaldson–Futaki 불변량은 $\lambda$ 를 낳는 벡터장의 Futaki 불변량의 상수배다.

직관 절의 계산은 곱 배치의 경우다. 사영직선은 $P=\lbrack -1,1\rbrack$ 이고 $d_k=2k+1$, $w_k=\sum_{m=-k}^{k}m=0$ 이므로 $a_0=2$, $a_1=1$, $b_0=b_1=0$ 이고 $\mathrm{DF}=0$ 이다.

모든 시험 배치에서 $\mathrm{DF}\ge 0$ 이면 $X$ 를 **K-반안정(K-semistable)** 이라 한다. 여기에 더해 $\mathrm{DF}=0$ 인 것이 곱 배치뿐이면 **K-다안정(K-polystable)**, 자명한 배치뿐이면 **K-안정(K-stable)** 이라 한다.

# 성질

## 토릭 Fano 다양체의 무게중심

$P$ 가 반사 다각형(reflexive polytope), 곧 원점만 내부 격자점으로 갖고 모든 면이 원점에서 격자 거리 $1$ 인 다면체이면 다음이 성립한다. 격자점의 개수에서 $a_0=\mathrm{vol}(P)$, $a_1=n\thinspace\mathrm{vol}(P)/2$ 이고, 무게의 합에서 $b_0=\mathrm{vol}(P)\langle c,\xi\rangle$, $b_1=(n+1)\mathrm{vol}(P)\langle c,\xi\rangle/2$ 이다. $b_1$ 은 경계 위의 적분을 [발산 정리](divergence-theorem.md)로 $P$ 위의 적분으로 바꿔 얻는다. 그러므로 다음이 나온다.

$$
\mathrm{DF}(\xi)=-\frac{\langle c,\xi\rangle}{2}
$$

$\xi$ 와 $-\xi$ 가 모두 곱 배치를 주므로 $c\ne 0$ 이면 어느 한쪽이 음이고 $X$ 는 K-반안정이 아니다.

정리(Wang–Zhu). 토릭 Fano 다양체에 Kähler–Einstein 계량이 있는 것은 $P$ 의 무게중심이 원점인 것과 동치다[^1].

토릭 del Pezzo 곡면 다섯 가운데 사영평면, 사영직선 둘의 곱, 세 점에서 부풀린 사영평면은 다각형의 무게중심이 원점이고, 한 점과 두 점에서 부풀린 사영평면은 그렇지 않다. 이것은 [del Pezzo 곡면](del-pezzo-surfaces.md)에 대한 Tian 의 결과와 같다.

## Chen–Donaldson–Sun 정리

정리(Chen–Donaldson–Sun). Fano 다양체에 Kähler–Einstein 계량이 있는 것은 K-다안정인 것과 동치다[^2].

계량에서 안정성으로 가는 방향은 Berman 이 증명했다[^3]. 거꾸로의 방향은 원뿔 각을 가진 Kähler–Einstein 계량의 연속족을 만들고, 각이 $2\pi$ 로 갈 때의 극한을 Gromov–Hausdorff 수렴으로 다룬다.

## 값매김 판정법

$X$ 의 쌍유리 모형 위의 소인자 $E$ 마다 다음 수를 둔다. $A_X(E)$ 는 $E$ 를 따라 잰 로그 불일치(log discrepancy)이고, $\mathrm{vol}$ 은 선다발의 부피다.

$$
\beta_X(E)=A_X(E)\thinspace\mathrm{vol}(-K_X)-\int_0^\infty\mathrm{vol}(-K_X-tE)\thinspace dt
$$

정리(Fujita–Li). $X$ 가 K-반안정인 것은 모든 소인자 $E$ 에서 $\beta_X(E)\ge 0$ 인 것과 동치다[^4][^5].

한 점에서 부풀린 사영평면에서 예외 곡선 $E$ 를 잡으면 $A_X(E)=1$, $\mathrm{vol}(-K_X)=8$ 이다. $-K_X-tE=3H-(1+t)E$ 는 $0\le t\le 2$ 에서 nef 이고 부피가 $9-(1+t)^2$ 이며, $t\gt 2$ 이면 nef 류 $H-E$ 와 음으로 만나 유효가 아니다. 그러므로 다음이 나오고, 직관 절의 무게중심과 같은 결론이다.

$$
\beta_X(E)=8-\int_0^2\bigl(9-(1+t)^2\bigr)\thinspace dt=8-\frac{28}{3}=-\frac{4}{3}
$$

사영평면의 직선 $L$ 에서는 $\mathrm{vol}(-K-tL)=(3-t)^2$ 이므로 $\beta=9-9=0$ 이다.

## 모듈라이

K-다안정 Fano 다양체는 사영 대수다양체인 모듈라이 공간(K-moduli space)을 이룬다[^6]. 차원과 부피를 고정한 K-반안정 Fano 다양체는 유계 족을 이루고, K-반안정성은 족 안에서 열린 조건이다.

# 활용

- Kähler–Einstein 계량의 존재 판정. 매끄러운 삼차곡면처럼 자기동형군이 유한한 Fano 다양체에서는 Futaki 불변량이 아무것도 말하지 않고, 시험 배치나 $\beta$ 로 판정한다.
- [Kähler–Ricci 솔리톤](kahler-ricci-solitons.md). Futaki 불변량이 $0$ 이 아닌 Fano 다양체에서는 벡터장으로 꼰 K-안정성이 솔리톤의 존재를 판정한다. 한 점에서 부풀린 사영평면에는 솔리톤이 있다.
- [Kähler–Ricci 흐름](kahler-ricci-flow.md). Kähler–Einstein 계량이 있으면 정규화한 흐름이 그 계량으로 수렴하므로, Chen–Donaldson–Sun 정리와 함께 K-다안정성이 흐름의 수렴을 판정한다.
- 상수 스칼라 곡률 계량. $-K_X$ 대신 임의의 풍부한 선다발을 쓴 K-안정성이 그 류의 상수 스칼라 곡률 Kähler 계량의 존재와 동치라는 진술이 Yau–Tian–Donaldson 추측(Yau–Tian–Donaldson conjecture)의 일반형이다.

[^1]: X.-J. Wang, X. Zhu, "Kähler–Ricci solitons on toric manifolds with positive first Chern class", *Advances in Mathematics* 188 (2004), 87–103.

[^2]: X. Chen, S. Donaldson, S. Sun, "Kähler–Einstein metrics on Fano manifolds. I, II, III", *Journal of the American Mathematical Society* 28 (2015), 183–197, 199–234, 235–278.

[^3]: R. J. Berman, "K-polystability of Q-Fano varieties admitting Kähler–Einstein metrics", *Inventiones Mathematicae* 203 (2016), 973–1025.

[^4]: K. Fujita, "A valuative criterion for uniform K-stability of Q-Fano varieties", *Journal für die reine und angewandte Mathematik* 751 (2019), 309–338.

[^5]: C. Li, "K-semistability is equivariant volume minimization", *Duke Mathematical Journal* 166 (2017), 3147–3218.

[^6]: Y. Liu, C. Xu, Z. Zhuang, "Finite generation for valuations computing stability thresholds and applications to K-stability", *Annals of Mathematics* 196 (2022), 507–566.

# 연관 문서

## 선수지식

- [Fano 다양체](fano-varieties.md)
- [Kähler–Einstein 계량](kahler-einstein-metrics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #algebra #complex_analysis
