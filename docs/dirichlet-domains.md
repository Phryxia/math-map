# Dirichlet 영역

# 개요

**Dirichlet 영역(Dirichlet domain)** 은 [Fuchs 군](fuchsian-groups.md)의 한 궤도의 점들 가운데 정해진 점 $p$ 에 다른 어느 점보다 가까운 곳을 모은 영역이다. 군 $\langle z\mapsto 2z\rangle$ 의 궤도 $\dots,i/2,i,2i,\dots$ 에서 $i$ 에 가장 가까운 곳을 모으면 두 반원 $\lvert z\rvert=1/\sqrt2$ 와 $\lvert z\rvert=\sqrt2$ 사이의 띠가 나온다.

군이 생성원으로 주어지지 않고 이산 부분군이라는 것만 알려져 있으면, [Poincaré 다각형 정리](poincare-polygon-theorem.md)를 쓸 다각형부터 찾아야 한다. Dirichlet 영역은 모든 Fuchs 군에 대해 그런 다각형을 하나 만든다.

# 직관

$g(z)=2z$ 가 생성하는 군에서 $p=i$ 로 둔다. $i$ 와 $2i$ 에서 같은 거리에 있는 점들은 두 점을 맞바꾸는 반사의 고정점이다. $z\mapsto 2/\bar z$ 가 $i$ 와 $2i$ 를 맞바꾸고 쌍곡 거리를 지키므로, 그 고정점인 반원 $\lvert z\rvert=\sqrt2$ 가 두 점의 수직이등분선이다.

$\lvert z\rvert=\sqrt2$ 위의 점 $z=\sqrt2e^{i\theta}$ 에서 확인한다. [쌍곡평면](hyperbolic-plane.md)의 거리 공식의 오른쪽 항은 두 점에 대해 다음과 같다.

$$
\frac{\lvert z-i\rvert^2}{2\sqrt2\sin\theta}=\frac{3-2\sqrt2\sin\theta}{2\sqrt2\sin\theta},\qquad
\frac{\lvert z-2i\rvert^2}{4\sqrt2\sin\theta}=\frac{2(3-2\sqrt2\sin\theta)}{4\sqrt2\sin\theta}
$$

두 값이 같으므로 거리가 같다. $i/2$ 와의 이등분선은 같은 계산으로 $\lvert z\rvert=1/\sqrt2$ 다. 더 먼 $4i$, $i/4$ 의 이등분선은 이 두 반원 바깥에 있어 영역을 더 깎지 않는다.

그래서 $i$ 에 가장 가까운 곳은 $1/\sqrt2\le\lvert z\rvert\le\sqrt2$ 다. Fuchs 군 문서의 기본 영역 $1\le\lvert z\rvert\le2$ 를 $1/\sqrt2$ 배 한 것이고, 두 경계 반원은 $g$ 로 짝지어진다.

# 정의

## 수직이등분선

서로 다른 두 점 $p,q\in\mathbb H$ 에 대해 다음 두 집합을 정한다.

$$
L\_{p,q}=\lbrace z:d(z,p)=d(z,q)\rbrace,\qquad H\_{p,q}=\lbrace z:d(z,p)\le d(z,q)\rbrace
$$

$L\_{p,q}$ 는 측지선이고 이것을 $p$, $q$ 의 **수직이등분선(perpendicular bisector)** 이라 한다. $H\_{p,q}$ 는 그 측지선이 나누는 두 반평면 가운데 $p$ 쪽의 닫힌 반평면이다. 직관 절에서 $L\_{i,2i}$ 는 반원 $\lvert z\rvert=\sqrt2$ 다.

## Dirichlet 영역

$\Gamma$ 를 Fuchs 군, $p\in\mathbb H$ 를 항등이 아닌 어느 원소도 고정하지 않는 점이라 한다. 다음 집합을 $p$ 를 중심으로 한 **Dirichlet 영역** 이라 한다.

$$
D\_p(\Gamma)=\bigcap\_{g\in\Gamma,\thinspace g\ne1}H\_{p,gp}
$$

곧 궤도의 어느 점 $gp$ 보다도 $p$ 에 더 가깝거나 같은 거리에 있는 점들의 집합이다.

직관 절의 띠가 $D\_i(\langle g\rangle)$ 다.

# 성질

## 기본 영역

$D\_p(\Gamma)$ 는 볼록하고 $\Gamma$ 의 기본 영역이다[^1].

증명의 요지. 반평면의 교집합이므로 볼록하다. $z$ 의 궤도에서 $p$ 에 가장 가까운 점 $hz$ 를 잡으면 $hz\in D\_p$ 이므로 복사본들이 $\mathbb H$ 를 덮는다. 이산성에서 가장 가까운 점이 존재한다. 두 복사본 $D\_p$, $gD\_p$ 의 내부에 공통점 $z$ 가 있으면 $d(z,p)\lt d(z,gp)$ 와 $d(z,gp)\lt d(z,p)$ 가 함께 성립해야 하므로 모순이다.

## 국소 유한성과 변 짝짓기

콤팩트 집합은 복사본 $gD\_p$ 가운데 유한 개하고만 만난다. 그래서 $D\_p$ 의 경계는 측지선 조각들이고, 각 변 $s$ 위에서는 $D\_p\cap gD\_p=s$ 인 $g$ 가 하나 정해진다. $g^{-1}$ 은 $g^{-1}s$ 를 $D\_p$ 의 다른 변으로 만든다. 이 변 짝짓기 변환들이 $\Gamma$ 를 생성한다[^1].

변 짝짓기와 꼭짓점 순환의 각 합은 Poincaré 다각형 정리의 조건을 자동으로 만족한다. 정리가 이 짝짓기에서 $\Gamma$ 의 표시를 준다.

## 변의 개수

$\Gamma$ 의 공부피가 유한하면 $D\_p(\Gamma)$ 의 변은 유한 개다. 따라서 공부피가 유한한 Fuchs 군은 유한 생성이다[^1]. 공부피가 무한하면 변이 무한히 많은 Dirichlet 영역도 있다.

## Ford 영역

$\Gamma$ 의 원소 가운데 $\infty$ 를 고정하는 것이 $T(z)=z+1$ 의 거듭제곱뿐이라 한다. $\infty$ 를 고정하지 않는 원소 $z\mapsto(az+b)/(cz+d)$ 마다 원 $\lvert cz+d\rvert=1$ 을 **등거리원(isometric circle)** 이라 한다. 이 원 위에서 변환의 도함수의 절댓값이 $1$ 이다.

띠 $\lvert\mathrm{Re}\thinspace z\rvert\le\frac12$ 에서 모든 등거리원의 바깥을 모은 영역을 **Ford 영역(Ford domain)** 이라 하고, 이것도 기본 영역이다. Ford 영역은 중심을 $\infty$ 로 보낸 Dirichlet 영역의 극한이다.

[모듈러 군](modular-group.md)에서 $c=1$ 인 등거리원은 $\lvert z+d\rvert=1$ 이고, 띠 안에서 가장 높은 것은 $\lvert z\rvert=1$ 이다. 띠 안에서 $\lvert z\rvert\ge1$ 인 점은 모든 $c\ge1$ 과 $d$ 에 대해 $\lvert cz+d\rvert\ge1$ 을 만족한다. 그래서 Ford 영역은 기본 영역 $\lvert\mathrm{Re}\thinspace z\rvert\le\frac12$, $\lvert z\rvert\ge1$ 이다. $t\gt 1$ 이면 $p=ti$ 를 중심으로 한 Dirichlet 영역도 같은 영역이다.

# 활용

- [Poincaré 다각형 정리](poincare-polygon-theorem.md)를 쓸 기본 다각형을 만든다. 이산 부분군 하나가 주어지면 Dirichlet 영역의 변 짝짓기가 생성원을, 꼭짓점 순환이 관계를 준다.
- [Fuchs 군](fuchsian-groups.md)의 넓이 공식은 기본 다각형의 꼭짓점 순환과 이상 꼭짓점에서 종수, 타원형 고정점, 첨점을 읽어 증명된다. Dirichlet 영역이 그 다각형이다.
- [합동 부분군](congruence-subgroups.md)과 산술 Fuchs 군의 생성원 계산. 주어진 지수의 부분군에 대해 Ford 영역을 계산해 생성원과 첨점을 구하는 알고리즘이 있다.
- 3 차원 쌍곡공간의 Klein 군(Kleinian group)에서도 같은 정의로 Dirichlet 다면체와 Ford 영역이 정의되고, [쌍곡 3 다양체](hyperbolic-3-manifolds.md)의 계산에 쓰인다.

[^1]: S. Katok, *Fuchsian Groups*, University of Chicago Press, 1992, Ch. 3 과 Ch. 4.

# 연관 문서

## 선수지식

- [Poincaré 다각형 정리](poincare-polygon-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #group_theory #complex_analysis
