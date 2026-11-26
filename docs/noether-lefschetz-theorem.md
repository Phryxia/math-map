# Noether–Lefschetz 정리

# 개요

**Noether–Lefschetz 정리(Noether–Lefschetz theorem)** 는 사영공간 $\mathbb P^3$ 안의 차수 $4$ 이상인 매우 일반적인 곡면 위의 곡선이 모두 평면 단면의 배수와 류가 같다는 정리다. 이차곡면에는 두 방향의 직선이 있고 삼차곡면에는 직선이 $27$ 개 있어 평면 단면과 류가 다른 곡선이 있는데, 사차곡면에서는 직선을 하나라도 갖는 곡면이 특별하다.

이 정리는 곡면의 [Picard 군](picard-group.md)이 언제 평면 단면 하나로 생성되는지를 계수의 일반성으로 판정하고, 예외가 되는 곡면들이 매개변수 공간에서 얼마나 작은 집합을 이루는지 센다.

# 직관

$\mathbb P^3$ 의 직선은 $4$ 개의 매개변수로 움직인다. 차수 $d$ 인 곡면 $F=0$ 이 주어진 직선을 포함하려면, $F$ 를 그 직선에 제한한 $d$ 차 이변수 동차식의 계수 $d+1$ 개가 모두 $0$ 이어야 한다. 조건이 $d+1$ 개이고 직선의 자유도가 $4$ 이므로, 직선을 하나라도 갖는 곡면은 곡면의 매개변수 공간에서 여차원 $d+1-4=d-3$ 인 집합을 이룬다.

$d=2,3$ 이면 이 수가 $0$ 이하이므로 모든 곡면이 직선을 갖는다. $d=4$ 이면 여차원이 $1$ 이고, 사차곡면 가운데 직선을 갖는 것은 한 방정식으로 잘리는 집합이다. 직선 $\ell$ 을 갖는 사차곡면에서 평면 단면 $H$ 와 $\ell$ 은 $H^2=4$, $H\cdot\ell=1$, $\ell^2=-2$ 이고, 교차행렬의 행렬식이 $-9\ne 0$ 이므로 $\ell$ 은 $H$ 의 배수와 류가 다르다.

# 정의

$S\subset\mathbb P^3$ 를 차수 $d$ 인 매끄러운 곡면, $H$ 를 평면 단면의 류라 한다. $S$ 의 매개변수 공간 $\mathbb P(H^0(\mathcal O(d)))$ 에서 셀 수 있는 개수의 진부분다양체의 합집합 밖에 있는 점을 **매우 일반적(very general)** 이라 한다.

**Noether–Lefschetz 정리** 는 $d\ge 4$ 이고 $S$ 가 매우 일반적이면 $\mathrm{Pic}(S)=\mathbb ZH$ 라는 진술이다[^1]. $\mathrm{Pic}(S)\ne\mathbb ZH$ 인 매끄러운 곡면들의 집합을 **Noether–Lefschetz 궤적(Noether–Lefschetz locus)** 이라 한다. 직관 절의 직선을 갖는 사차곡면들이 이 궤적의 한 성분이다.

# 성질

## Hodge 이론적 증명

[Lefschetz (1,1) 정리](lefschetz-1-1-theorem.md)로 $\mathrm{Pic}(S)$ 는 $H^2(S,\mathbb Z)$ 가운데 $H^{1,1}$ 에 들어가는 류다. [Lefschetz 초평면 정리](lefschetz-hyperplane-theorem.md)로 $H^1(S)=0$ 이어서 $\mathrm{Pic}(S)$ 가 이 격자와 같다.

$d\ge 4$ 이면 $h^{2,0}=\binom{d-1}{3}\gt 0$ 이므로, 곡면을 움직일 때 $H^2(S,\mathbb C)$ 안의 $H^{1,1}$ 이 움직인다. 정수류 $\gamma\ne mH$ 가 $H^{1,1}$ 에 남는 곡면은 진부분다양체를 이루고, 정수류는 셀 수 있으므로 그 합집합 밖의 곡면에서는 $H$ 의 배수만 남는다[^1]. Griffiths–Harris 는 $H^{1,1}$ 의 움직임을 Jacobi 환의 곱셈으로 적어 이 단계를 증명했다.

$d=4$ 에서 $h^{2,0}=1$ 이고, [K3 곡면](k3-surfaces.md) 문서의 $19$ 차원 사차곡면 족에서 Picard 수가 $\rho=1$ 인 것이 매우 일반적인 곡면이다.

## 궤적의 여차원

정리(Green, Voisin). $d\ge 4$ 이면 Noether–Lefschetz 궤적의 모든 성분은 여차원이 $d-3$ 이상이다. $d\ge 5$ 이면 여차원이 정확히 $d-3$ 인 성분은 직선을 갖는 곡면들의 성분뿐이다[^2].

직관 절의 셈이 이 하한을 주는 성분이다. 원뿔곡선을 갖는 곡면은 원뿔곡선의 자유도가 $8$ 이고 조건이 $2d+1$ 개이므로 여차원이 $2d-7$ 이고, $d\ge 5$ 이면 $d-3$ 보다 크다. $d=4$ 이면 이 값도 $1$ 이고, 사차곡면의 궤적은 모든 성분이 여차원 $1$ 이다.

## 차수 3 이하

$d\le 3$ 에서는 정리가 성립하지 않는다. 이차곡면은 $\mathrm{Pic}=\mathbb Z^2$ 이고 삼차곡면은 $\mathrm{Pic}=\mathbb Z^7$ 이다. 둘 다 $h^{2,0}=0$ 이라 $H^2$ 전체가 $H^{1,1}$ 이다.

# 활용

- Hodge 추측의 시험. 곡면의 대수적 류가 $H^{1,1}$ 의 정수류와 같다는 것은 Lefschetz (1,1) 정리이고, 고차원의 Hodge 류에 대한 같은 물음이 Hodge 추측(Hodge conjecture)이다. Noether–Lefschetz 궤적은 Hodge 류가 생기는 곳이 셀 수 있는 대수적 집합의 합집합이라는 Cattani–Deligne–Kaplan 정리의 곡면 판본이다.
- K3 곡면의 모듈라이. 편극 K3 곡면의 모듈라이에서 Picard 수가 $2$ 이상인 궤적은 Heegner 인자이고, 이 인자들의 생성함수가 모듈러 형식이 된다(Borcherds, Maulik–Pandharipande).
- 곡선의 셈. 사차곡면의 족에서 Noether–Lefschetz 궤적과 곡선의 [Gromov–Witten 불변량](gromov-witten-invariants.md)을 맞추는 계산이 K3 곡면의 곡선 셈에 쓰인다.

[^1]: P. Griffiths, J. Harris, "On the Noether–Lefschetz theorem and some remarks on codimension-two cycles", *Mathematische Annalen* 271 (1985), 31–51.

[^2]: C. Voisin, *Hodge Theory and Complex Algebraic Geometry II*, Cambridge Studies in Advanced Mathematics 77, Cambridge University Press, 2003, Chapter 5.

# 연관 문서

## 선수지식

- [Lefschetz 초평면 정리](lefschetz-hyperplane-theorem.md)
- [Lefschetz (1,1) 정리](lefschetz-1-1-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #complex_analysis
