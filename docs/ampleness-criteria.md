# 풍부한 선다발의 수치 판정법

# 개요

**풍부한 선다발의 수치 판정법(numerical criteria for ampleness)** 은 선다발이 사영공간으로의 매장을 주는지를 곡선과의 교차수로 판정하는 정리들이다. 사영평면을 한 점에서 부풀린 곡면 위의 선다발 $aH-bE$ 가운데 어느 것이 곡면을 사영공간에 넣는지 단면을 일일이 계산하지 않고 알고 싶다.

판정법은 이 물음을 곡선 두 개와의 교차수 $b$ 와 $a-b$ 가 양인지로 답한다.

# 직관

사영평면 $\mathbb P^2$ 를 점 $p$ 에서 [부풀림](blow-ups.md)한 곡면을 $X$ 라 하고, 직선의 류를 $H$, 예외 곡선을 $E$ 라 한다. $H^2=1$, $E^2=-1$, $H\cdot E=0$ 이고, $p$ 를 지나는 직선의 고유 변환 $F=H-E$ 는 $F^2=0$ 이다.

선다발 $H$ 의 단면은 직선의 방정식이고, 이것이 주는 사상은 $X\to\mathbb P^2$ 이다. 이 사상은 $E$ 전체를 점 $p$ 로 보낸다. $H\cdot E=0$ 이므로 $E$ 위에서 $H$ 의 단면이 상수이기 때문이다.

선다발 $2H-E$ 의 단면은 $p$ 를 지나는 원뿔곡선이고, $6-1=5$ 개의 계수가 사상 $X\to\mathbb P^4$ 를 준다. 이 사상은 매장이고 상은 차수 $(2H-E)^2=4-1=3$ 인 곡면이다. $E$ 와 $F$ 와의 교차수는 $(2H-E)\cdot E=1$, $(2H-E)\cdot F=1$ 로 둘 다 양이다.

$X$ 위의 곡선은 모두 $E$ 와 $F$ 의 음이 아닌 결합과 류가 같다. 그래서 $aH-bE$ 가 모든 곡선과 양으로 만나는 것은 $(aH-bE)\cdot E=b\gt 0$ 과 $(aH-bE)\cdot F=a-b\gt 0$ 인 것과 같다. 매장을 주는 선다발이 정확히 이 조건으로 갈린다는 것이 이 문서의 정리들이다.

# 정의

$X$ 를 매끄러운 사영 다양체라 한다. 선다발 $L$ 의 어떤 거듭제곱이 [Kodaira 매장 정리](kodaira-embedding-theorem.md)의 뜻으로 매장을 주면 $L$ 을 **풍부(ample)** 하다 한다. 모든 기약 곡선 $C$ 에 대해 $L\cdot C\ge 0$ 이면 $L$ 을 **nef** 라 한다.

$N^1(X)$ 를 선다발을 교차수가 같은 것끼리 묶어 실계수로 늘린 공간, $\overline{\mathrm{NE}}(X)$ 를 곡선의 류가 이루는 볼록 뿔의 닫힘이라 한다. 풍부한 류가 이루는 $N^1(X)$ 의 뿔을 **풍부 원뿔(ample cone)**, nef 류의 뿔을 **nef 원뿔(nef cone)** 이라 한다.

직관 절의 $X$ 에서 $N^1(X)$ 는 $H$, $E$ 를 기저로 하는 평면이고, $\overline{\mathrm{NE}}(X)$ 는 $E$ 와 $F$ 가 생성하는 뿔이다. nef 원뿔은 $a\ge b\ge 0$ 이고 풍부 원뿔은 $a\gt b\gt 0$ 이다. $H$ 는 경계 $b=0$ 위에 있어 nef 이지만 풍부하지 않다.

# 성질

## Nakai–Moishezon 판정법

정리(Nakai–Moishezon 판정법, Nakai–Moishezon criterion). $L$ 이 풍부한 것은 $X$ 의 모든 양의 차원 기약 부분다양체 $V$ 에 대해 $L^{\dim V}\cdot V\gt 0$ 인 것과 동치다[^1].

곡면에서는 조건이 $L^2\gt 0$ 과 모든 곡선 $C$ 에서 $L\cdot C\gt 0$ 이다. 직관 절의 $2H-E$ 는 $L^2=3$ 이고 $E$, $F$ 와 $1$ 로 만난다.

곡선과의 교차수가 모두 양이어도 $L^2\gt 0$ 이 빠지면 풍부하지 않을 수 있다. 종수 $2$ 이상인 곡선 위의 어떤 [선직곡면](ruled-surfaces.md)에는 모든 곡선과 양으로 만나지만 자기교차수가 $0$ 인 선다발이 있다(Mumford 의 예, Mumford's example)[^1].

## Kleiman 판정법

정리(Kleiman 판정법, Kleiman's criterion). $L$ 이 풍부한 것은 $\overline{\mathrm{NE}}(X)$ 의 $0$ 이 아닌 모든 원소 $z$ 에 대해 $L\cdot z\gt 0$ 인 것과 동치다. 풍부 원뿔은 nef 원뿔의 내부이고, nef 원뿔은 풍부 원뿔의 닫힘이다[^1].

Mumford 의 예는 곡선의 류는 모두 양으로 만나지만, 곡선의 류의 극한인 $\overline{\mathrm{NE}}(X)$ 의 경계 원소와는 $0$ 으로 만난다. Kleiman 판정법은 곡선 대신 그 닫힘을 보아 이 경우를 걸러 낸다.

직관 절에서는 $\overline{\mathrm{NE}}(X)$ 가 $E$ 와 $F$ 로 생성되는 닫힌 뿔이라 Kleiman 판정법이 $b\gt 0$, $a-b\gt 0$ 을 바로 준다. 사영직선 둘의 곱 $\mathbb P^1\times\mathbb P^1$ 에서는 두 방향의 올 $f_1$, $f_2$ 가 뿔을 생성하고, 이중차수 $(a,b)$ 인 선다발은 $a\gt 0$, $b\gt 0$ 일 때 풍부하다.

## Seshadri 판정법

정리(Seshadri 판정법, Seshadri's criterion). $L$ 이 풍부한 것은 양수 $\varepsilon$ 이 있어, 모든 점 $x$ 와 $x$ 를 지나는 모든 기약 곡선 $C$ 에 대해 $L\cdot C\ge\varepsilon\thinspace\mathrm{mult}\_xC$ 인 것과 동치다[^1].

$\mathrm{mult}\_xC$ 는 $x$ 에서 $C$ 의 중복도다. 이 조건에서 가장 큰 $\varepsilon$ 을 점마다 잰 것이 Seshadri 상수(Seshadri constant)다.

## 코호몰로지 판정법

정리(Cartan–Serre–Grothendieck). $L$ 이 풍부한 것은 모든 연접층 $\mathcal F$ 에 대해 충분히 큰 $m$ 에서 $H^i(X,\mathcal F\otimes L^m)=0$ $(i\gt 0)$ 인 것과 동치다[^2].

이 소멸은 [층 코호몰로지](sheaf-cohomology.md)의 Serre 소멸 정리(Serre vanishing theorem)이고, 풍부성을 교차수가 아닌 단면의 개수로 판정한다.

# 활용

- [Fano 다양체](fano-varieties.md)의 판정. 반표준다발이 풍부한지는 Kleiman 판정법으로 극선마다 $-K$ 의 교차수가 양인지로 본다. 직관 절의 $X$ 에서 $-K=3H-E$ 는 $E$ 와 $1$, $F$ 와 $2$ 로 만나므로 $X$ 는 Fano 다.
- [극소 모형 프로그램](minimal-model-program.md). 원뿔 정리의 극선과 nef 원뿔의 경계가 수축 사상을 정한다. 직관 절의 $H$ 는 nef 원뿔의 경계에서 $E$ 를 수축하는 사상을 준다.
- [Hodge 지표 정리](hodge-index-theorem.md). 곡면의 풍부한 류 $L$ 에 대해 $L$ 에 수직인 류는 자기교차수가 음이다. 직관 절에서 $2H-E$ 에 수직인 류 $H-2E$ 는 $(H-2E)^2=-3$ 이다.
- [K-안정성](k-stability.md)의 Fujita–Li 판정법. $-K-tE$ 가 nef 인 구간과 유효인 구간을 정하는 데 Kleiman 판정법을 쓴다.

[^1]: R. Lazarsfeld, *Positivity in Algebraic Geometry I*, Ergebnisse der Mathematik 48, Springer, 2004, Sections 1.2, 1.4, 1.5.

[^2]: R. Hartshorne, *Algebraic Geometry*, Graduate Texts in Mathematics 52, Springer, 1977, Chapter III, Proposition 5.3.

# 연관 문서

## 선수지식

- [Kodaira 매장 정리](kodaira-embedding-theorem.md)
- [Hodge 지표 정리](hodge-index-theorem.md)

## 더 알아보기

- [Zariski 분해](zariski-decomposition.md)

#algebra #complex_analysis
