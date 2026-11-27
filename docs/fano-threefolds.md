# 삼차원 Fano 다양체

# 개요

**삼차원 Fano 다양체(Fano threefold)** 는 차원이 $3$ 인 [Fano 다양체](fano-varieties.md)다. $\mathbb P^4$ 안의 차수 $d$ 인 매끄러운 초곡면은 $d\le 4$ 일 때 이런 다양체이고, $d=1,2$ 이면 유리함수로 $\mathbb P^3$ 과 맞바꿀 수 있지만 $d=3,4$ 이면 그럴 수 없다. 이차원에서는 Fano 곡면이 모두 이렇게 맞바꿀 수 있었으므로, 삼차원에서 처음으로 Fano 다양체의 분류와 유리성이 갈라진다. 105 개 변형 족(deformation family)의 목록과 각 족의 불변량이 어느 것이 $\mathbb P^3$ 과 맞바뀌는지를 가르는 데 쓰인다.

# 직관

$\mathbb P^4$ 안의 차수 $d$ 인 매끄러운 초곡면 $X$ 에서 [딸림 공식](adjunction-formula.md)은 $-K_X=\mathcal O(5-d)\vert\_X$ 를 준다. 그래서 $d=1,2,3,4$ 에서 지수가 $4,3,2,1$ 이고, 반표준 차수 $(-K_X)^3=(5-d)^3d$ 는 차례로 $64,54,24,4$ 다.

$d=2$ 이면 $X$ 위의 점 $p$ 를 지나는 일반적인 직선은 $X$ 와 한 점에서 더 만난다. 그 점을 직선의 방향으로 보내는 사영은 $X$ 에서 $\mathbb P^3$ 으로 가는 쌍유리 사상(birational map)이다. $d=3$ 이면 같은 직선이 $X$ 와 두 점에서 더 만나므로 같은 사영은 두 점을 한 점으로 보내고 쌍유리 사상이 되지 않는다.

$d=3$ 과 $d=4$ 에서는 어떤 유리함수를 골라도 $\mathbb P^3$ 과 맞바꿀 수 없다는 것이 1970 년대에 증명되었다. 곡면에서는 [Castelnuovo 유리성 판정법](castelnuovo-rationality-criterion.md)에 따라 [del Pezzo 곡면](del-pezzo-surfaces.md)이 모두 유리 곡면이므로, 이 현상은 삼차원에서 처음 나타난다.

# 정의

## 유리성

다양체 $X$ 와 $\mathbb P^3$ 사이에 쌍유리 사상이 있으면 $X$ 가 **유리(rational)** 라 한다. 유리 사상 $\mathbb P^3\dashrightarrow X$ 의 상이 조밀하면 **단유리(unirational)** 라 한다. 직관 절의 이차 초곡면은 유리이고, 삼차 초곡면은 유리가 아니지만 단유리다.

## 지수, 차수, 종수

삼차원 Fano 다양체 $X$ 의 Picard 수 $\rho(X)$ 는 [Picard 군](picard-group.md)의 계수다. $\rho(X)=1$ 이면 $\mathrm{Pic}(X)$ 는 풍부한 생성원 $H$ 하나로 생성되고, $-K_X=rH$ 인 $r$ 이 지수다. $H^3$ 을 $X$ 의 **차수(degree)** 라 하고, 지수가 $1$ 이면 $(-K_X)^3=2g-2$ 로 정해지는 $g$ 를 **종수(genus)** 라 한다.

직관 절의 삼차 초곡면은 지수 $2$, 차수 $3$ 이다. 사차 초곡면은 지수 $1$ 이고 $(-K_X)^3=4$ 이므로 종수가 $3$ 이다. 종수라는 이름은 $-K_X$ 의 두 단면이 자르는 곡선의 종수가 $g$ 라는 데서 왔다.

# 성질

## Iskovskikh 분류

**정리.** Picard 수가 $1$ 인 삼차원 Fano 다양체는 다음 17 족이다[^1].

| 지수 | 족 | 예 |
| --- | --- | --- |
| 4 | $\mathbb P^3$ | |
| 3 | $\mathbb P^4$ 의 이차 초곡면 | |
| 2 | 차수 $d=1,\dots,5$ 인 $V_d$, 5 족 | $V_3$ 은 삼차 초곡면, $V_4$ 는 $\mathbb P^5$ 의 두 이차 초곡면의 교집합, $V_5$ 는 $\mathrm{Gr}(2,5)$ 의 선형 단면 |
| 1 | 종수 $g=2,\dots,10,12$ 인 $V\_{2g-2}$, 10 족 | $g=3$ 은 사차 초곡면, $g=4$ 는 $\mathbb P^5$ 의 이차와 삼차 초곡면의 교집합, $g=5$ 는 $\mathbb P^6$ 의 세 이차 초곡면의 교집합 |

지수 $1$ 에서 종수 $11$ 인 것은 없다. 지수가 $3$ 이상인 두 줄은 Fano 다양체 문서의 Kobayashi–Ochiai 정리가 정한다.

## Mukai 의 표현

지수 $1$ 이고 종수가 $7,8,9,10$ 인 $V\_{2g-2}$ 는 각각 직교 Grassmann 다양체(orthogonal Grassmannian) $\mathrm{OG}(5,10)$, [Grassmann 다양체](grassmannian.md) $\mathrm{Gr}(2,6)$, Lagrange Grassmann 다양체(Lagrangian Grassmannian) $\mathrm{LG}(3,6)$, $G_2$ 의 등질공간을 사영공간의 선형 부분공간으로 자른 단면이다[^2]. $\mathrm{Gr}(2,6)$ 은 $\mathbb P^{14}$ 안의 $8$ 차원 다양체이므로 코차원 $5$ 인 선형 부분공간과 만나 $3$ 차원이 된다. 종수 $12$ 인 $V\_{22}$ 는 $\mathrm{Gr}(3,7)$ 위의 벡터다발의 단면이 사라지는 자리로 적힌다.

## Mori–Mukai 분류

**정리.** Picard 수가 $2$ 이상인 삼차원 Fano 다양체는 88 족이고, Picard 수별로 $2$ 에서 36 족, $3$ 에서 31 족, $4$ 에서 13 족, $5$ 에서 3 족이다[^3]. Picard 수가 $6$ 이상이면 $X$ 는 사영직선과 차수 $11-\rho(X)$ 인 del Pezzo 곡면의 곱이고, 그래서 $\rho(X)\le 10$ 이다.

증명은 [극소 모형 프로그램](minimal-model-program.md)의 원뿔 정리(cone theorem)가 주는 극선 수축(extremal contraction)을 쓴다. $\rho(X)\ge 2$ 이면 $X$ 에 극선 수축이 있고, Mori 는 삼차원에서 극선 수축이 곡선이나 점을 부풀린 사상의 역, 곡면 위의 원뿔다발(conic bundle), 직선 위의 del Pezzo 다발(del Pezzo fibration) 가운데 하나임을 보였다. 각 경우에 수축의 상이 더 작은 Picard 수의 Fano 다양체이거나 그에 가까운 것이므로, Picard 수에 대한 귀납으로 목록이 나온다.

## 삼차 초곡면의 비유리성

**정리(Clemens–Griffiths).** $\mathbb P^4$ 의 매끄러운 삼차 초곡면은 유리가 아니다[^4].

증명의 요지. $H^{3,0}(X)=0$ 인 삼차원 다양체 $X$ 의 중간 Jacobi 다양체(intermediate Jacobian) $J(X)=H^{1,2}(X)/H^3(X,\mathbb Z)$ 는 [Hodge 이론](hodge-theory.md)의 분해에서 나오는 주편극(principally polarized) [아벨 다양체](abelian-varieties.md)다. $X$ 가 유리이면 $J(X)$ 는 곡선들의 [Jacobi 다양체](jacobian-variety.md)의 곱이다. 삼차 초곡면의 $J(X)$ 는 $5$ 차원이고, 그 theta 인자(theta divisor)의 특이점을 계산하면 곡선의 Jacobi 다양체의 곱이 아니다. 이 계산에 $X$ 위의 직선들이 이루는 곡면을 쓴다.

## 사차 초곡면의 비유리성

**정리(Iskovskikh–Manin).** $\mathbb P^4$ 의 매끄러운 사차 초곡면 $X$ 에서 자기 자신으로 가는 쌍유리 사상은 모두 자기동형사상이고, 자기동형군은 유한하다. 그래서 $X$ 는 유리가 아니다[^5].

$\mathbb P^3$ 의 쌍유리 자기사상 전체는 무한 차원이므로 $X$ 와 $\mathbb P^3$ 은 쌍유리 동치가 아니다. 증명은 쌍유리 사상이 끌어당긴 선형계(linear system)의 중복도를 재는 Noether–Fano 방법(Noether–Fano method)을 쓴다. 이렇게 다른 Fano 다양체나 원뿔다발과 쌍유리 동치가 되지 않는 성질을 쌍유리 강성(birational rigidity)이라 한다.

## Lüroth 문제

단유리 다양체가 유리인지를 묻는 것을 Lüroth 문제(Lüroth problem)라 한다. 곡선과 곡면에서는 단유리 다양체가 유리다. 삼차 초곡면은 단유리이므로 Clemens–Griffiths 정리가 삼차원에서 이것의 반례를 준다[^4]. 같은 시기에 Artin–Mumford 는 비틀림 있는 $H^3(X,\mathbb Z)$ 를 불변량으로 써서 다른 반례를 주었다.

# 활용

- Kähler–Einstein 계량. 105 족 각각의 일반적인 원소가 [Kähler–Einstein 계량](kahler-einstein-metrics.md)을 갖는지, 곧 [K-안정성](k-stability.md)의 판정이 족마다 이루어졌다[^6]. 직관 절의 네 초곡면은 모두 계량을 갖는다.
- 거울 대칭. Coates, Corti, Galkin, Kasprzyk 는 105 족마다 양자 주기(quantum period)가 같은 Laurent 다항식을 찾아 목록을 거울 쪽에서 다시 얻었다.
- 쌍유리 기하. 극소 모형 프로그램에서 음의 표준다발을 가진 삼차원 다양체는 Fano 다양체, 원뿔다발, del Pezzo 다발로 끝나고, 사차 초곡면의 쌍유리 강성은 이 끝 대상들이 서로 쌍유리 동치인지를 묻는 Sarkisov 프로그램(Sarkisov program)의 첫 예다.

[^1]: V. A. Iskovskikh, Yu. G. Prokhorov, *Fano Varieties*, Algebraic Geometry V, Encyclopaedia of Mathematical Sciences 47, Springer, 1999, 12 장.
[^2]: S. Mukai, "Biregular classification of Fano 3-folds and Fano manifolds of coindex 3", Proceedings of the National Academy of Sciences USA 86 (1989), 3000–3002.
[^3]: S. Mori, S. Mukai, "Classification of Fano 3-folds with B₂ ≥ 2", Manuscripta Mathematica 36 (1981), 147–162.
[^4]: C. H. Clemens, P. A. Griffiths, "The intermediate Jacobian of the cubic threefold", Annals of Mathematics 95 (1972), 281–356.
[^5]: V. A. Iskovskikh, Yu. I. Manin, "Three-dimensional quartics and counterexamples to the Lüroth problem", Mathematics of the USSR-Sbornik 15 (1971), 141–166.
[^6]: C. Araujo, A.-M. Castravet, I. Cheltsov, K. Fujita, A.-S. Kaloghiros, J. Martinez-Garcia, C. Shramov, H. Süß, N. Viswanathan, *The Calabi Problem for Fano Threefolds*, London Mathematical Society Lecture Note Series 485, Cambridge University Press, 2023.

# 연관 문서

## 선수지식

- [Fano 다양체](fano-varieties.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #complex_analysis #differential_geometry
