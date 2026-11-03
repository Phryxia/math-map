# 다양체

# 개요

**다양체(manifold)** 는 국소적으로 Euclidean 공간과 구별할 수 없는 [위상 공간](topology.md)이다. 구면 위의 함수를 미분하려면 좌표가 필요한데, 구면은 평면 위에 한 장으로 펼 수 없어 전체를 덮는 좌표계 하나를 잡을 수 없다. 다양체는 작은 영역마다 좌표계를 붙이고 겹치는 부분에서 좌표 변환이 맞물리도록 요구해, 이런 대상에서도 미분을 정의한다.

# 직관

지구 표면의 한 점 근처는 평면과 구별되지 않는다. 지도책은 지구 전체를 여러 장의 평면 지도로 덮고, 겹치는 지역에서 한 지도의 좌표를 다른 지도의 좌표로 옮기는 규칙을 적어 둔다. 다양체를 다룰 때 쓰는 것도 이 둘, 곧 낱장의 지도와 겹치는 자리의 변환 규칙이다.

원 $x^2+y^2=1$ 전체를 하나의 좌표로 덮으려 하면 시작점과 끝점이 붙어 실패한다. 북극 $(0,1)$ 을 뺀 조각은 북극에서 쏜 직선이 $x$ 축과 만나는 점 $u=x/(1-y)$ 로 직선 전체에 펼쳐지고, 남극 $(0,-1)$ 을 뺀 조각은 $v=x/(1+y)$ 로 펼쳐진다. 두 조각이 겹치는 곳에서는 $uv=x^2/(1-y^2)=1$ 이므로 $v=1/u$ 다.

좌표를 바꾸는 규칙 $u\mapsto 1/u$ 는 $u\ne0$ 에서 정의된 실함수이므로 미분할 수 있는지를 다변수 미적분으로 판정한다. 원 위의 함수를 미분하는 일은 이 판정을 거쳐 좌표 위의 함수를 미분하는 일로 바뀐다.

# 정의

$M$ 을 위상공간, $n$ 을 음이 아닌 정수라 하자. $M$ 이 Hausdorff 이고 제2 가산(second countable)이며 국소적으로 Euclidean 이면 $M$ 을 $n$ 차원 **위상다양체(topological manifold)** 라 한다[^1]. 국소 Euclidean 조건은 다음이다.

$$
\forall p\in M\ \exists\thinspace U\subseteq M \text{ 열린집합},\ p\in U,\ \exists\thinspace \varphi:U\xrightarrow{\ \cong\ }\varphi(U)\subseteq\mathbb{R}^{n}
$$

화살표는 위상동형(homeomorphism)이고 상 집합은 $\mathbb{R}^n$ 의 열린집합이다. 쌍 $(U,\varphi)$ 를 **좌표근방(chart)** 이라 하고 $\varphi$ 를 국소좌표계라 한다. 직관 절의 원에서 북극을 뺀 조각과 $u=x/(1-y)$ 가 좌표근방이다.

$M$ 을 덮는 좌표근방들의 모음을 **지도책(atlas)** 이라 하고, 두 좌표근방이 겹칠 때 좌표를 바꾸는 함수를 **좌표변환(transition map)** 이라 한다.

$$
\varphi_\beta\circ\varphi_\alpha^{-1}:\ \varphi_\alpha(U_\alpha\cap U_\beta)\longrightarrow \varphi_\beta(U_\alpha\cap U_\beta)
$$

원의 두 좌표근방 $u$ 와 $v$ 는 원을 덮으므로 지도책이고, 좌표변환은 $\mathbb R\setminus\lbrace 0\rbrace$ 위의 함수 $u\mapsto 1/u$ 다.

## 매끄러운 구조

지도책의 모든 좌표변환이 무한히 미분가능하면 그 지도책을 **매끄러운 지도책(smooth atlas)** 이라 한다. 좌표변환은 Euclidean 공간의 열린집합 사이의 함수이므로 이 조건은 [미분](derivative.md)의 통상적 의미로 검사된다. 서로 합쳐도 매끄러운 지도책이 되는 것들을 동일시하면 각 류에 극대 매끄러운 지도책이 하나 있고, 이것을 **매끄러운 구조(smooth structure)** 라 한다. 위상다양체에 매끄러운 구조를 지정한 것을 **매끄러운 다양체(smooth manifold)** 라 한다. 원의 좌표변환 $1/u$ 는 $u\ne0$ 에서 무한히 미분가능하므로 두 좌표근방은 매끄러운 지도책이고, 원은 매끄러운 다양체다.

$M$, $N$ 을 매끄러운 다양체라 하자. 각 점에서 적절한 좌표근방으로 표현한 합성이 매끄러우면 $F:M\to N$ 을 **매끄러운 사상(smooth map)** 이라 한다.

$$
\psi\circ F\circ\varphi^{-1}\ \text{가 } C^{\infty}
$$

원을 평면에 넣는 포함사상은 좌표 $u$ 로 적으면 $u\mapsto\bigl(2u/(u^2+1),(u^2-1)/(u^2+1)\bigr)$ 이고, 좌표 $v$ 로도 같은 꼴이므로 매끄러운 사상이다.

## 접공간

점 $p$ 에서의 **접공간(tangent space)** $T_pM$ 은 매끄러운 함수에 수를 대응시키는 선형사상 가운데 곱에 대해 Leibniz 규칙을 만족하는 것, 곧 $p$ 에서의 derivation 전체다.

$$
T_pM=\bigl\lbrace\thinspace X:C^{\infty}(M)\to\mathbb{R}\ \big|\ X \text{ 는 선형},\ X(fg)=X(f)\thinspace g(p)+f(p)\thinspace X(g)\thinspace\bigr\rbrace
$$

오른쪽 조건이 Leibniz 규칙이다. 좌표근방의 좌표 $x^i$ 에 대해 $\left.\partial/\partial x^{i}\right|\_{p}$ 는 $f$ 를 좌표로 적은 함수 $f\circ\varphi^{-1}$ 의 $i$ 번째 편도함수의 $\varphi(p)$ 에서의 값으로 보내는 derivation 이다. 원의 남극 $p=(0,-1)$ 에서 좌표 $u$ 는 $u=0$ 이고, $f(x,y)=x$ 이면 $f$ 를 $u$ 로 적은 함수가 $2u/(u^2+1)$ 이므로 $\left.\partial/\partial u\right|\_{p}f=2$ 다.

# 성질

## 접공간의 차원

$T_pM$ 은 [벡터 공간](vector-spaces.md)이고 차원은 $n$ 이며, 좌표근방 $(U,\varphi)$ 의 좌표 $x$ 로부터 다음이 기저가 된다.

$$
\left.\frac{\partial}{\partial x^{1}}\right|\_{p},\ \dots,\ \left.\frac{\partial}{\partial x^{n}}\right|\_{p}
$$

## Hausdorff 조건과 제2 가산 조건

국소 Euclidean 만으로는 Hausdorff 가 따라오지 않는다. 실직선 두 벌을 $0$ 이 아닌 점끼리 붙이면 원점이 둘인 직선이 생기고, 모든 점의 근방이 구간과 위상동형이지만 두 원점은 서로소인 근방으로 분리되지 않는다. 이 공간에서는 수열의 극한이 하나로 정해지지 않는다. 제2 가산 조건이 있어야 [단위분할](partitions-of-unity.md)이 존재하고, 단위분할로 [Riemann 계량](riemannian-metrics.md)과 매장 같은 전역 구조를 만든다.

## 차원 불변성

비어 있지 않은 위상다양체가 $n$ 차원이면서 $m$ 차원일 수는 없다. Euclidean 공간의 열린집합 사이에 위상동형이 있으면 차원이 같다는 Brouwer 의 차원 불변성(invariance of dimension)이 근거이며, [단체 호몰로지](homology.md)로 증명된다. 미분가능성을 가정하면 미분사상이 선형동형이 되어 더 짧게 얻어진다.

## 정규값 정리

$F:M\to N$ 을 매끄러운 사상, $c\in N$ 이라 하자. $F$ 의 미분사상이 $F^{-1}(c)$ 의 모든 점에서 전사이면 $c$ 를 정규값(regular value)이라 하고, 역상은 $M$ 의 부분다양체이며 차원은 다음과 같다[^1].

$$
\dim F^{-1}(c)=\dim M-\dim N
$$

좌표의 제곱합을 취하는 함수에서 $1$ 은 정규값이므로

$$
S^{n}=\Bigl\lbrace\thinspace x\in\mathbb{R}^{n+1}\ \Big|\ \textstyle\sum_{i=1}^{n+1}x_i^{2}=1\thinspace\Bigr\rbrace
$$

는 $n$ 차원 매끄러운 다양체다. 같은 방식으로 직교행렬 전체와 [행렬식](determinants.md)이 1 인 [행렬](matrices.md) 전체가 다양체가 된다.

## 표준 예시

- 구면: 북극과 남극을 각각 제거하는 입체사영(stereographic projection) 두 개의 좌표근방으로 덮인다.
- 원환면: 원의 곱공간이며 2차원 콤팩트 다양체다.
- 실사영공간: $\mathbb{R}^{n+1}$ 에서 원점을 지나는 직선들의 집합으로 $n$ 차원 콤팩트 다양체다. 구면의 대칭점을 동일시한 몫공간이며 [동치관계](equivalence-relations.md)의 전형적 사용이다.
- 열린집합: Euclidean 공간의 임의의 열린집합은 그 자체로 다양체다.
- 반례: 두 직선을 한 점에서 교차시킨 집합은 교차점 근처가 직선과 위상동형이 아니므로 다양체가 아니다.

## 매끄러운 구조의 비유일성

차원 3 이하의 위상다양체에는 매끄러운 구조가 존재하고 미분동형을 빼고 유일하다. $\mathbb{R}^4$ 에는 서로 미분동형이 아닌 매끄러운 구조가 셀 수 없이 많고, 7차원 구면에는 표준 구조와 미분동형이 아닌 매끄러운 구조가 존재한다([이색 구면](exotic-spheres.md))[^2].

## 콤팩트 다양체

콤팩트 다양체는 유한 개의 좌표근방으로 덮인다. 2차원 콤팩트 연결 다양체는 [Euler 지표](euler-characteristic.md)와 방향성만으로 분류된다([곡면의 분류](classification-of-surfaces.md)).

# 활용

- 일반상대성이론(general relativity)은 시공간을 4차원 Lorentz 다양체(Lorentzian manifold)로 보고 [곡률](curvature.md)로 중력장을 기술한다.
- 직교성 제약이나 고정 계수(rank) 제약처럼 제약조건 집합이 다양체이면 좌표 없이 접공간 위에서 경사법을 돌린다. [경사하강법](gradient-descent.md)을 다양체 위로 옮긴 변형이다.
- [Lie 군](lie-groups.md)은 군 연산이 매끄러운 다양체다. [군](groups.md)의 구조와 다양체 구조가 양립하므로 [군 작용](group-actions.md)을 미분적으로 다룬다.
- 위상적 불변량은 다양체를 조각으로 분해해 계산한다. [기본군](fundamental-group.md)과 단체 호몰로지가 대표적이다.

[^1]: J. M. Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 1 (다양체·chart·atlas), Ch. 3 (접공간), Ch. 5 (정규값 정리와 부분다양체). 정의의 요약은 USTC 강의노트에서도 확인할 수 있다. http://staff.ustc.edu.cn/~wangzuoq/Courses/21F-Manifolds/Notes/Lec02.pdf
[^2]: J. Milnor, "On manifolds homeomorphic to the 7-sphere", *Annals of Mathematics* 64 (1956), 399–405. https://doi.org/10.2307/1969983

# 연관 문서

## 선수지식

- [위상 공간](topology.md)
- [미분](derivative.md)
- [미분기하 개관](differential-geometry-overview.md)

## 더 알아보기

### 다양체 위의 구조

- [단위분할](partitions-of-unity.md)
- [벡터장](vector-fields.md)
- [미분형식](differential-forms.md)
- [Riemann 계량](riemannian-metrics.md)
- [벡터다발](vector-bundles.md)

### 대칭과 분류

- [Poincaré 쌍대성](poincare-duality.md)
- [Sard 정리](sard-theorem.md)
- [Morse 이론](morse-theory.md)
- [Lie 대수](lie-algebras.md)
- [Grassmann 다양체](grassmannian.md)

#differential_geometry #topology
