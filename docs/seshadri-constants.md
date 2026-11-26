# Seshadri 상수

# 개요

**Seshadri 상수(Seshadri constant)** 는 풍부한 선다발이 한 점에서 얼마나 양인지를, 그 점을 지나는 곡선과의 교차수를 곡선의 중복도로 나눈 값으로 재는 수다. 평면의 점 $p$ 를 지나는 곡선 가운데 차수에 비해 $p$ 에서 가장 많이 겹치는 곡선은 $p$ 를 지나는 직선인지, 다른 곡선이 있는지 묻는다.

Seshadri 상수는 이 물음을 하나의 수로 적고, 점을 여러 개로 늘리면 평면곡선이 일반적인 점들을 얼마나 높은 중복도로 지날 수 있는지에 대한 Nagata 추측이 된다.

# 직관

사영평면의 점 $p$ 와 $p$ 를 지나는 차수 $d$ 인 기약 곡선 $C$ 를 잡고, $p$ 에서의 중복도를 $m$ 이라 한다. $p$ 를 지나는 직선 $\ell$ 이 $C$ 의 성분이 아니면 [교차 이론](intersection-theory.md)의 Bézout 정리(Bézout's theorem)로 $d=\ell\cdot C\ge m$ 이다. 그래서 $d/m\ge 1$ 이고, 직선 자신이 $d/m=1$ 을 준다.

점을 둘로 늘려 $p_1$, $p_2$ 에서의 중복도의 합 $m_1+m_2$ 와 차수 $d$ 를 견준다. 두 점을 잇는 직선은 $d=1$, $m_1+m_2=2$ 이므로 $d/(m_1+m_2)=1/2$ 이다. 점이 $r$ 개이면 이 비가 얼마나 작아질 수 있는지가 물음이다.

점이 $9$ 개이면 일반적인 아홉 점을 지나는 삼차곡선이 있어 비가 $3/9=1/3=1/\sqrt 9$ 이다. 점이 $10$ 개 이상이면 비가 $1/\sqrt r$ 보다 작아질 수 없다는 것이 Nagata 의 추측이다.

# 정의

$X$ 를 매끄러운 사영 다양체, $L$ 을 nef 선다발, $x\in X$ 라 한다. 다음 수를 $x$ 에서 $L$ 의 **Seshadri 상수** 라 한다. 하한은 $x$ 를 지나는 기약 곡선 $C$ 전체에 대해 잡는다.

$$
\varepsilon(L;x)=\inf_{C\ni x}\frac{L\cdot C}{\mathrm{mult}\_xC}
$$

직관 절의 첫 계산에서 $\varepsilon(\mathcal O\_{\mathbb P^2}(1);p)=1$ 이다.

$x$ 에서 부풀림 $\pi:\widetilde X\to X$ 의 예외 인자를 $E$ 라 하면 $\varepsilon(L;x)$ 는 $\pi^\ast L-tE$ 가 nef 인 가장 큰 $t$ 와 같다. 점 $r$ 개 $x_1,\dots,x_r$ 에 대해서는 분모를 $\sum_i\mathrm{mult}\_{x_i}C$ 로 바꾼 것을 **다점 Seshadri 상수(multi-point Seshadri constant)** $\varepsilon(L;x_1,\dots,x_r)$ 라 한다.

# 성질

## Seshadri 판정법

[풍부한 선다발의 수치 판정법](ampleness-criteria.md)의 Seshadri 판정법은 $L$ 이 풍부한 것이 $\inf_x\varepsilon(L;x)\gt 0$ 인 것과 동치라는 정리다. 그래서 Seshadri 상수는 풍부성을 점마다 나눈 양이다.

## 상한

$n$ 차원 $X$ 에서 $\varepsilon(L;x)\le\sqrt[n]{L^n}$ 이다[^1]. $\pi^\ast L-tE$ 가 nef 이면 자기교차수가 $L^n-t^n\ge 0$ 이어야 하기 때문이다. 다점 판본은 $\varepsilon(L;x_1,\dots,x_r)\le\sqrt[n]{L^n/r}$ 이다.

곡면의 일반적인 점에서는 $\varepsilon(L;x)\ge 1$ 이다(Ein–Lazarsfeld 정리, Ein–Lazarsfeld theorem)[^1]. 특수한 점에서는 Seshadri 상수가 얼마든지 작은 양수일 수 있다.

## Nagata 추측

Nagata 추측(Nagata conjecture)은 $r\ge 10$ 이고 $p_1,\dots,p_r$ 이 사영평면의 매우 일반적인 점이면 $p_i$ 에서 중복도 $m_i$ 를 갖는 차수 $d$ 인 모든 곡선이 다음을 만족한다는 진술이다.

$$
d\gt\frac{1}{\sqrt r}\sum_{i=1}^rm_i
$$

다점 Seshadri 상수로는 $\varepsilon(\mathcal O(1);p_1,\dots,p_r)=1/\sqrt r$ 이라는 진술과 같다. Nagata 는 $r$ 이 $16$ 이상의 제곱수일 때 이것을 증명했다[^2]. $r\le 9$ 에서는 직관 절의 직선과 삼차곡선처럼 등호나 반대 부등식이 성립하는 곡선이 있다.

Nagata 는 이 결과로 Hilbert 의 제14문제에 대한 반례를 만들었다. 불변환이 유한 생성이 아닌 선형대수군 작용이다[^2].

# 활용

- 국소 양성의 측정. Seshadri 상수가 크면 $L^k$ 의 단면이 $x$ 에서 높은 차수의 젯을 가른다. 아벨 다양체의 Seshadri 상수는 편극의 주기 격자의 짧은 벡터의 길이와 연결된다.
- [Zariski 분해](zariski-decomposition.md)와 부피. $\pi^\ast L-tE$ 가 nef 가 아닌 $t$ 에서 부피는 Zariski 분해의 양의 부분의 자기교차수로 계산하고, nef 경계가 $t=\varepsilon(L;x)$ 다.
- [K-안정성](k-stability.md). Fujita–Li 판정법의 $\beta$ 를 점의 예외 인자로 계산할 때 $\int\mathrm{vol}(-K-tE)\thinspace dt$ 의 nef 구간이 Seshadri 상수로 정해진다.

[^1]: R. Lazarsfeld, *Positivity in Algebraic Geometry I*, Ergebnisse der Mathematik 48, Springer, 2004, Chapter 5.

[^2]: M. Nagata, "On the 14-th problem of Hilbert", *American Journal of Mathematics* 81 (1959), 766–772.

# 연관 문서

## 선수지식

- [풍부한 선다발의 수치 판정법](ampleness-criteria.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #complex_analysis
