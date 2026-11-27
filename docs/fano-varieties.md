# Fano 다양체

# 개요

**Fano 다양체(Fano variety)** 는 표준다발의 역이 풍부한 매끄러운 사영 다양체다. 사영공간 안의 곡면을 방정식의 차수로 견주면, 이차곡면은 모든 점을 지나는 직선이 두 개 있고 삼차곡면은 모든 점을 지나는 유리곡선이 있지만, 사차곡면의 일반적인 점을 지나는 접평면의 단면은 유리곡선이 아니다.

이 차이는 [딸림 공식](adjunction-formula.md)이 주는 표준다발의 부호로 갈린다. 표준다발이 음인 쪽, 곧 Fano 다양체는 유리곡선으로 덮이고, 차원마다 유한 개의 족으로 분류된다.

# 직관

사영공간 $\mathbb P^3$ 안의 차수 $d$ 인 매끄러운 곡면 $X$ 와 그 위의 점 $p$ 를 잡는다. $p$ 에서 $X$ 의 접평면 $T$ 로 $X$ 를 자르면 $T\cap X$ 는 평면 안의 차수 $d$ 곡선이고, $p$ 에서 특이하다.

$d=2$ 이면 $X$ 를 $xw=yz$, $p=(0:0:0:1)$ 로 둘 수 있다. $xw-yz$ 의 기울기가 $p$ 에서 $(1,0,0,0)$ 이므로 접평면은 $x=0$ 이고, 단면은 $yz=0$, 곧 두 직선 $x=y=0$ 과 $x=z=0$ 이다. 이차곡면의 모든 점을 직선 두 개가 지난다.

$d=3$ 이면 일반적인 점의 단면은 $p$ 에 마디가 하나 있는 평면 삼차곡선이다. 딸림 공식 문서의 마디 삼차곡선처럼 이 곡선은 마디를 지나는 직선의 기울기로 매개화되므로 종수 $0$ 인 유리곡선이다. $d=4$ 이면 단면은 마디가 하나인 평면 사차곡선이고, 매끄러운 사차곡선의 종수 $3$ 에서 마디 하나만큼 줄어 종수가 $2$ 다. 이 곡선은 매개화되지 않는다.

딸림 공식에서 $K_X=\mathcal O(d-4)\vert\_X$ 이므로 $d\le 3$ 이면 $K_X$ 의 역이 양이고, $d=4$ 이면 $K_X$ 가 자명하다. 유리곡선이 모든 점을 지나는 쪽은 표준다발의 역이 양인 쪽이다.

# 정의

$X$ 를 매끄러운 복소 사영 다양체, $K_X$ 를 표준다발이라 한다. $K_X$ 의 역 $-K_X=\det T_X$ 를 **반표준다발(anticanonical bundle)** 이라 한다. $-K_X$ 가 [Kodaira 매장 정리](kodaira-embedding-theorem.md)의 뜻으로 풍부하면 $X$ 를 **Fano 다양체** 라 한다.

Kodaira 매장 정리로 이 조건은 $c_1(X)$ 가 양의 $(1,1)$ 형식으로 대표된다는 것과 동치다. [Kähler–Einstein 계량](kahler-einstein-metrics.md) 문서가 쓰는 $c_1\gt 0$ 인 콤팩트 복소 다양체가 이것이다.

$-K_X=rH$ 인 선다발 $H$ 가 있는 가장 큰 양의 정수 $r$ 을 $X$ 의 **지수(index)** 라 한다. 직관 절의 곡면에서 $-K_X=\mathcal O(4-d)\vert\_X$ 이므로 이차곡면의 지수는 $2$, 삼차곡면의 지수는 $1$ 이다.

예는 다음과 같다.

- 사영공간 $\mathbb P^n$ 은 $-K=\mathcal O(n+1)$ 이므로 지수 $n+1$ 인 Fano 다양체다.
- $\mathbb P^{n+1}$ 안의 차수 $d$ 인 매끄러운 초곡면은 $-K=\mathcal O(n+2-d)\vert\_X$ 이므로 $d\le n+1$ 일 때 Fano 이고 지수는 $n+2-d$ 다.
- 차원 $2$ 의 Fano 다양체는 [del Pezzo 곡면](del-pezzo-surfaces.md)이다.
- [Grassmann 다양체](grassmannian.md) $G(k,N)$ 은 $-K=\mathcal O(N)$ 이므로 지수 $N$ 인 Fano 다양체다.
- Fano 다양체 둘의 곱은 Fano 다양체다. $\mathbb P^1\times\mathbb P^1$ 은 $-K=\mathcal O(2,2)$ 다.

# 성질

## 코호몰로지의 소멸

$i\gt 0$ 이면 $H^i(X,\mathcal O_X)=0$ 이다. $\mathcal O_X=K_X\otimes(-K_X)$ 이고 $-K_X$ 가 양이므로 [Kodaira 소멸 정리](kodaira-vanishing-theorem.md)가 바로 적용된다. 그래서 $\chi(\mathcal O_X)=1$ 이다.

$H^1(X,\mathcal O_X)=H^2(X,\mathcal O_X)=0$ 이므로 지수 완전열에서 다음이 나온다.

$$
\mathrm{Pic}(X)\cong H^2(X,\mathbb Z)
$$

선다발은 위상으로 정해지고, [Picard 군](picard-group.md)은 유한 생성이다.

## 단일 연결성

정리(Kobayashi). Fano 다양체는 [단일 연결](fundamental-group.md)이다[^1].

증명의 요지. [Calabi 추측](calabi-conjecture.md)에서 $c_1(X)$ 를 대표하는 양의 형식을 Ricci 형식으로 갖는 Kähler 계량이 있다. Ricci 곡률이 양이므로 [측지선의 비교정리](geodesic-comparison-theorems.md)의 Bonnet–Myers 정리로 기본군이 유한하다. 범피복 $Y\to X$ 가 $m$ 겹이면 $Y$ 도 Fano 이므로 $1=\chi(\mathcal O_Y)=m\thinspace\chi(\mathcal O_X)=m$ 이다.

## 유리곡선

정리(Mori). Fano 다양체 $X$ 의 모든 점 $p$ 를 지나는 유리곡선 $C$ 가 있고, $0\lt -K_X\cdot C\le\dim X+1$ 이다[^2].

증명은 표수 $p$ 로 내려가 Frobenius 사상으로 곡선을 늘린 뒤, 고정한 점을 지키며 곡선을 변형하면 유리곡선이 갈라져 나온다는 구부리고 깨뜨리기(bend and break)로 한다. 직관 절의 삼차곡면에서는 $-K_X$ 가 평면 단면의 류이므로 접평면 단면 $C$ 에 대해 $-K_X\cdot C$ 가 $C$ 의 차수 $3$ 이고, 이것이 $\dim X+1$ 과 같다.

정리(Campana, Kollár–Miyaoka–Mori). Fano 다양체는 **유리 연결(rationally connected)** 이다. 곧 두 일반적인 점을 유리곡선 하나가 잇는다[^3].

## 지수의 상한

정리(Kobayashi–Ochiai 정리, Kobayashi–Ochiai theorem). $n$ 차원 Fano 다양체의 지수는 $n+1$ 이하다. 지수가 $n+1$ 인 것은 $\mathbb P^n$ 뿐이고, 지수가 $n$ 인 것은 $\mathbb P^{n+1}$ 안의 매끄러운 이차 초곡면뿐이다[^4].

초곡면의 예에서 $d=1$ 이면 $\mathbb P^n$, $d=2$ 이면 이차 초곡면이므로 두 등호 경우가 차수 $1$ 과 $2$ 다.

## 분류

차원별 변형 족의 개수는 다음과 같다.

| 차원 | 족의 수 | 목록 |
| --- | --- | --- |
| 1 | 1 | 사영직선 |
| 2 | 10 | 사영평면, 사영직선 둘의 곱, 일반 위치의 r 점에서 부풀린 사영평면 (r = 1, …, 8) |
| 3 | 105 | Picard 수 1 인 17 족(Iskovskikh), Picard 수 2 이상인 88 족(Mori–Mukai) |

Picard 수 $1$ 인 [삼차원 Fano 다양체](fano-threefolds.md) 가운데 $\mathbb P^4$ 의 초곡면은 차수 $1,2,3,4$ 인 넷이고, 지수가 각각 $4,3,2,1$ 이다[^5]. 삼차원에서는 $(-K_X)^3\le 64$ 이고 $\mathbb P^3$ 이 $64$ 다.

## 유계성

정리(Kollár–Miyaoka–Mori). 차원 $n$ 을 고정하면 $n$ 차원 Fano 다양체의 변형 족은 유한 개다[^3].

증명은 유리 연결성에서 $(-K_X)^n$ 의 상한을 얻고, 이 상한으로 $-K_X$ 의 고정된 거듭제곱이 정하는 매장의 차수를 묶는다. 표의 $1$, $10$, $105$ 가 유한한 것이 이 정리의 처음 세 경우다.

## Kähler–Einstein 계량

Fano 다양체에는 Kähler–Einstein 계량이 있을 수도 없을 수도 있다. del Pezzo 곡면 가운데 한 점이나 두 점에서 부풀린 사영평면은 정칙 벡터장의 [Lie 대수](lie-algebras.md)가 환원 가능이 아니라서 Matsushima 정리로 Kähler–Einstein 계량이 없고, 나머지 여덟 족에는 있다[^6]. 일반 차원의 판정은 Kähler–Einstein 계량 문서의 Chen–Donaldson–Sun 정리로, [K-안정성](k-stability.md)의 한 형태인 K-다안정성(K-polystability)과 동치다.

# 활용

- 극소 모형 프로그램. 유리곡선으로 덮이는(uniruled) 매끄러운 사영 다양체는 [극소 모형 프로그램](minimal-model-program.md)을 돌리면 일반 올이 Fano 다양체인 Mori 올뭉치(Mori fiber space)와 쌍유리 동치가 된다[^7]. [Kodaira 차원](kodaira-dimension.md)이 $-\infty$ 인 곡면의 끝 모형이 del Pezzo 곡면과 원뿔곡선 다발인 것이 차원 $2$ 의 경우다.
- 유한체 위의 점. $\mathbb P^{n+1}$ 의 초곡면이 Fano 라는 조건 $d\le n+1$ 은 동차다항식의 차수가 변수의 개수 $n+2$ 보다 작다는 것이고, 이것이 Chevalley–Warning 정리(Chevalley–Warning theorem)가 유한체 위의 해를 보장하는 조건이다. 유한체 위의 매끄러운 Fano 다양체는 언제나 유리점을 갖는다(Esnault 정리)[^8].
- Kähler–Einstein 계량의 존재 문제. $c_1\gt 0$ 인 경우가 Fano 다양체이고, [Kähler–Ricci 흐름](kahler-ricci-flow.md)의 Perelman 추정과 [Kähler–Ricci 솔리톤](kahler-ricci-solitons.md)은 Kähler–Einstein 계량이 없는 Fano 다양체에서 대신 쓰는 계량을 다룬다.
- 원환 Fano 다양체. 매끄러운 [토릭 다양체](toric-varieties.md)가 Fano 인 것은 부채의 생성 벡터들이 볼록 다면체의 꼭짓점이고 부채가 그 다면체의 면 위의 뿔들로 이루어지는 것과 동치이고, 이런 다양체는 차원 $2$ 에서 $5$ 개, 차원 $3$ 에서 $18$ 개다.

[^1]: S. Kobayashi, "On compact Kähler manifolds with positive definite Ricci tensor", *Annals of Mathematics* 74 (1961), 570–574.

[^2]: S. Mori, "Projective manifolds with ample tangent bundles", *Annals of Mathematics* 110 (1979), 593–606.

[^3]: J. Kollár, Y. Miyaoka, S. Mori, "Rational connectedness and boundedness of Fano manifolds", *Journal of Differential Geometry* 36 (1992), 765–779.

[^4]: S. Kobayashi, T. Ochiai, "Characterizations of complex projective spaces and hyperquadrics", *Journal of Mathematics of Kyoto University* 13 (1973), 31–47.

[^5]: V. A. Iskovskikh, Yu. G. Prokhorov, "Fano varieties", *Algebraic Geometry V*, Encyclopaedia of Mathematical Sciences 47, Springer, 1999.

[^6]: G. Tian, "On Calabi's conjecture for complex surfaces with positive first Chern class", *Inventiones Mathematicae* 101 (1990), 101–172.

[^7]: C. Birkar, P. Cascini, C. D. Hacon, J. McKernan, "Existence of minimal models for varieties of log general type", *Journal of the American Mathematical Society* 23 (2010), 405–468.

[^8]: H. Esnault, "Varieties over a finite field with trivial Chow group of 0-cycles have a rational point", *Inventiones Mathematicae* 151 (2003), 187–191.

# 연관 문서

## 선수지식

- [딸림 공식](adjunction-formula.md)
- [del Pezzo 곡면](del-pezzo-surfaces.md)
- [Kodaira 매장 정리](kodaira-embedding-theorem.md)

## 더 알아보기

- [삼차원 Fano 다양체](fano-threefolds.md)
- [극소 모형 프로그램](minimal-model-program.md)
- [K-안정성](k-stability.md)

#algebra #complex_analysis #differential_geometry
