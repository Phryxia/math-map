# 쌍곡 3 다양체

# 개요

**쌍곡 3 다양체(hyperbolic 3-manifold)** 는 상수 단면[곡률](curvature.md) $-1$ 인 완비 계량을 갖는 3 차원 다양체다. 종수 2 인 닫힌 곡면에는 곡률 $-1$ 인 계량이 6 차원 가족만큼 있어서, 계량에서 잰 측지선의 길이가 곡면의 위상만으로 정해지지 않는다. 3 차원에서는 유한 부피 쌍곡 계량이 있으면 하나뿐이다. 그래서 8 자매듭 여집합의 부피 $2.029883\ldots$ 처럼 계량에서 잰 양이 다양체의 위상 불변량이 된다.

# 직관

곡면에서는 위상과 기하가 분리된다. 종수 2 인 닫힌 곡면에 곡률 $-1$ 인 계량을 줄 수 있고 그런 계량은 6 차원 가족을 이룬다. 곡면을 바지 모양 조각 넷으로 자르고 경계 곡선의 길이와 다시 붙이는 비틀림 각을 바꾸면 서로 다른 쌍곡 곡면이 계속 나온다. 넓이는 [Gauss–Bonnet 정리](gauss-bonnet.md)로 $2\pi\vert\chi\vert$ 로 고정되지만 측지선의 길이는 계량마다 다르다.

3 차원에서는 유한 부피 완비 쌍곡 구조가 있으면 등거리사상을 빼고 하나뿐이다. 한 다양체에 쌍곡 계량이 들어가면 그 계량은 위상이 결정한 것이고, 계량에서 읽는 부피, 최단 측지선의 길이, 등거리군의 위수가 전부 위상 불변량이 된다. 8 자매듭 여집합의 부피 $2.029883\ldots$ 는 계량을 고른 결과가 아니라 8 자매듭 자체의 성질이다.

# 정의

## 쌍곡 공간과 등거리군

**상반공간 모형(upper half-space model)** 은 $\mathbb H^3=\lbrace(x_1,x_2,x_3):x_3\gt 0\rbrace$ 에 [Riemann 계량](riemannian-metrics.md) $ds^2=(dx_1^2+dx_2^2+dx_3^2)/x_3^2$ 을 준 것이다. 단면곡률이 상수 $-1$ 이고 완비이며, 이 성질을 갖는 단순연결 3 차원 다양체는 등거리사상을 빼고 이것뿐이다. 수직선 $x_1=x_2=0$ 은 측지선이고, 그 위의 두 점 $(0,0,1)$ 과 $(0,0,e)$ 사이의 거리는 $\int_1^e dx_3/x_3=1$ 이다.

무한원 경계 $\partial\mathbb H^3=\widehat{\mathbb C}$ 위에서 등거리사상은 Möbius 변환(Möbius transformation)으로 작용하고

$$
\mathrm{Isom}^+(\mathbb H^3)\cong \mathrm{PSL}\_2(\mathbb C),\qquad
\begin{pmatrix}a&b\cr c&d\end{pmatrix}\cdot w=\frac{aw+b}{cw+d}
$$

이다. 항등이 아닌 원소는 대각합으로 분류된다. $\mathrm{tr}^2\in\lbrack 0,4)$ 이면 **타원형(elliptic)** 으로 고정점이 내부에 있어 회전이고, $\mathrm{tr}^2=4$ 이면 **포물형(parabolic)** 으로 경계에 고정점 하나를 가지며, 그 밖이면 **꼬인형(loxodromic)** 으로 축 하나를 따라 이동하고 이동거리가 $2\thinspace\mathrm{arccosh}\vert\mathrm{tr}/2\vert$ 다.

$\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 은 $w\mapsto w+1$ 이고 $\mathrm{tr}^2=4$ 인 포물형이다. $\begin{pmatrix}2&0\cr 0&1/2\end{pmatrix}$ 은 $w\mapsto 4w$ 이고 $\mathrm{tr}=5/2$ 이므로 꼬인형이며, 이동거리 $2\thinspace\mathrm{arccosh}(5/4)=2\log 2$ 는 수직선 위에서 $x_3$ 을 $4$ 배 하는 거리 $\log 4$ 와 같다.

## 쌍곡 다양체와 Kleinian 군

$\Gamma\le\mathrm{PSL}\_2(\mathbb C)$ 가 이산이고 비틀림이 없으면 **Kleinian 군(Kleinian group)** 이라 하고, $M=\mathbb H^3/\Gamma$ 를 **완비 쌍곡 3 다양체(complete hyperbolic 3-manifold)** 라 한다. $\mathrm{Vol}(M)\lt\infty$ 이면 유한 부피다.

비틀림이 없다는 조건이 타원형 원소를 배제하므로 작용이 자유롭고 몫이 다양체가 된다. 유한 부피이면 $M$ 은 콤팩트한 부분과 유한개의 **cusp** 로 나뉜다. cusp 는 원환면 $\times\lbrack 0,\infty)$ 꼴의 끝이고, 포물형 원소들이 만든다. $w\mapsto w+1$ 과 $w\mapsto w+i$ 가 생성하는 군은 이런 포물형 원소의 예이고, 그 몫은 원환면 $\times(0,\infty)$ 다.

## 홀로노미 표현

완비 쌍곡 계량을 가진 $M$ 을 보편[덮개공간](covering-spaces.md)으로 올리면 $\mathbb H^3$ 이고 데크 변환은 등거리사상이므로, 계량 하나가 충실이고 상이 이산인 표현 하나를 준다. 이것을 **홀로노미 표현(holonomy representation)** 이라 한다.

$$
\rho\colon\pi_1(M)\longrightarrow \mathrm{PSL}\_2(\mathbb C),\qquad M\cong \mathbb H^3/\rho(\pi_1 M)
$$

거꾸로 이산 충실 표현이 있으면 몫이 쌍곡 다양체다. 쌍곡 구조를 찾는 문제가 표현을 찾는 대수 문제가 된다.

## 이상 사면체와 모양 매개변수

매듭 여집합 $S^3\setminus K$ 는 콤팩트하지 않지만 부피가 유한할 수 있고, 무한으로 가는 끝은 원환면 하나 곱하기 반직선 꼴이다. 이런 다양체는 꼭짓점이 전부 무한원점에 놓인 **이상 사면체(ideal tetrahedron)** 로 유한 분할된다.

사면체 하나는 [복소수](complex-numbers.md) 하나로 결정된다. 무한원 경계에서 네 꼭짓점 중 셋을 $0,1,\infty$ 로 보내면 남은 하나가 $z\in\mathbb C\setminus\lbrace 0,1\rbrace$ 이고, 이 **모양 매개변수(shape parameter)** 가 사면체를 정한다. 세 이면각은

$$
z,\qquad z'=\frac1{1-z},\qquad z''=1-\frac1z
$$

의 편각이고 곱이 $zz'z''=-1$ 이다. $z=e^{i\pi/3}$ 이면 $1-z=e^{-i\pi/3}$ 이므로 $z'=z''=e^{i\pi/3}$ 이고 세 이면각이 모두 $\pi/3$ 이다. 이것이 **정이면체 이상 사면체(regular ideal tetrahedron)** 다.

## 붙임 방정식

이상 사면체 $\Delta_1,\dots,\Delta_n$ 을 붙여 $M$ 을 만들 때, 모양 매개변수 $z_1,\dots,z_n$ 이 완비 쌍곡 구조를 주려면 다음 두 조건이 필요하다. 이것을 **붙임 방정식(gluing equations)** 이라 한다.

모서리 조건(edge equation)은 각 모서리를 둘러싼 사면체들의 이면각의 합이 $2\pi$ 이고 둘레를 돈 회전이 항등이라는 조건이다. 모서리 $e$ 마다 다음이 성립해야 한다.

$$
\prod_{i}z_i^{\thinspace a_{e,i}}(z_i')^{\thinspace b_{e,i}}(z_i'')^{\thinspace c_{e,i}}=1,\qquad \sum_i\big(a_{e,i}\arg z_i+b_{e,i}\arg z_i'+c_{e,i}\arg z_i''\big)=2\pi
$$

cusp 조건(cusp equation)은 완비성 조건이다. 각 cusp 원환면의 자오선 $m$ 과 경선 $\ell$ 에 대해 사면체 모양의 곱으로 주어지는 홀로노미 $H$ 가 $H(m)=H(\ell)=1$ 을 만족해야 한다.

이 조건을 만족하는 해 가운데 모든 $z_i$ 의 허수부가 양인 것이 기하적 해다. 부피는

$$
\mathrm{Vol}(M)=\sum_{i=1}^n D(z_i),\qquad
D(z)=\mathrm{Im}\thinspace\mathrm{Li}\_2(z)+\arg(1-z)\log\vert z\vert
$$

인 **Bloch–Wigner 이중로그(Bloch–Wigner dilogarithm)** 로 주어진다. 이상 사면체의 세 이면각이 $\alpha,\beta,\gamma$ 이면 $D(z)=\Lambda(\alpha)+\Lambda(\beta)+\Lambda(\gamma)$ 이고 $\Lambda$ 는 [Lobachevsky 함수](lobachevsky-function.md)다. 정이면체 이상 사면체의 부피는 $V_3=3\Lambda(\pi/3)=1.0149416\ldots$ 다.

# 성질

## Mostow–Prasad 강직성

$n\ge3$ 이고 $M_1,M_2$ 가 유한 부피 완비 쌍곡 $n$ 다양체이며 $\pi_1(M_1)\cong\pi_1(M_2)$ 이면, 그 동형을 실현하는 등거리사상 $M_1\to M_2$ 가 존재한다. 이것이 Mostow–Prasad 강직성 정리(Mostow–Prasad rigidity theorem)다.

Mostow 가 1968 년에 닫힌 경우를, Prasad 가 1973 년에 cusp 가 있는 유한 부피 경우를 증명했다. 홀로노미 표현으로는 그 표현이 $\mathrm{PSL}\_2(\mathbb C)$ 켤레를 빼고 하나뿐이라는 진술이다. $n=2$ 에서는 종수 $g$ 곡면의 [Teichmüller 공간](teichmuller-space.md)이 $6g-6$ 차원이므로 성립하지 않는다.

증명의 요지는 다음과 같다.

1. [기본군](fundamental-group.md)의 동형이 준등거리사상 $\mathbb H^n\to\mathbb H^n$ 을 유도한다.
2. 준등거리사상(quasi-isometry)은 무한원 경계 $S^{n-1}$ 위의 [준등각 사상](quasiconformal-maps.md)으로 확장된다(Efremovič–Tihomirova, Mostow).
3. [군 작용](group-actions.md)이 극한집합 $S^{n-1}$ 위에서 에르고딕이므로 그 준등각 사상의 미분이 거의 어디서나 등각이다.
4. 등각 자기사상은 Möbius 변환이고 $\mathbb H^n$ 의 등거리사상에서 온다.

3 단계가 $n\ge3$ 을 쓴다. $n=2$ 에서 경계 $S^1$ 위의 준대칭 사상은 무한 차원 공간을 이루고 등각으로 강제되지 않는다.

따름정리는 다음과 같다.

- 부피가 위상 불변량이다. $\mathrm{Vol}(M)$ 을 매듭 표에 적을 수 있고 두 매듭의 부피가 다르면 두 매듭은 다르다.
- $\mathrm{Isom}(M)$ 이 유한이고 $\mathrm{Out}(\pi_1 M)$ 과 같다.
- 길이 스펙트럼, cusp 모양, 그리고 $\rho(\gamma)$ 의 대각합들이 생성하는 불변 대각합체(invariant trace field)가 전부 불변량이다. 불변 대각합체는 [대수적 수체](algebraic-number-fields.md)이고, 부피와 이 수체의 관계가 [Bloch 군](bloch-group.md)과 Borel 조절자로 이어진다.

## 두꺼운–얇은 분해

차원 $n$ 마다 상수 $\varepsilon_n\gt 0$ 이 있어, 임의의 쌍곡 $n$ 다양체에서 단사반지름이 $\varepsilon_n$ 미만인 부분 $M_{\lt\varepsilon}$ 은 cusp 이웃과 짧은 측지선 주변의 Margulis 관(Margulis tube)들의 합집합이다. 이것이 Margulis 보조정리(Margulis lemma)다.

쌍곡 다양체는 기하가 유계인 콤팩트 조각인 두꺼운 부분과 표준 꼴인 얇은 부분으로 나뉜다. 이것을 두꺼운–얇은 분해(thick–thin decomposition)라 한다. 부피가 유계이면 두꺼운 부분의 꼴이 유한 가지뿐이고, 아래 Jørgensen–Thurston 정리의 증명에 이 [콤팩트성](compactness.md)을 쓴다.

## 부피의 집합

쌍곡 3 다양체 부피의 집합 $\mathcal V\subset\mathbb R_{\gt 0}$ 은 정렬집합이고 순서형이 $\omega^\omega$ 다. 각 부피값을 갖는 다양체는 유한개다. 이것이 Jørgensen–Thurston 정리(Jørgensen–Thurston theorem)다.

작은 쪽 끝이 확인되어 있다.

| 종류 | 최소 부피 | 다양체 |
|---|---|---|
| cusp 1 개 | $2.029883\ldots=2V_3$ | 8 자매듭과 그 자매 여집합 |
| 닫힌 것 | $0.942707\ldots$ | Weeks 다양체 |

8 자매듭 여집합은 부피 $V_3$ 인 정이면체 이상 사면체 두 개로 만들어진다.

$\omega^\omega$ 라는 순서형은 극한점의 층이 무한히 쌓인다는 뜻이고, 그 층을 만드는 것이 다음 정리다.

## 쌍곡 Dehn 수술

$M$ 이 cusp 를 가진 유한 부피 쌍곡 다양체이면, 유한개의 예외 기울기를 뺀 모든 기울기 $(p,q)$ 에 대해 Dehn 채움(Dehn filling) $M_{p,q}$ 도 쌍곡이다. 그리고


$$
\mathrm{Vol}(M_{p,q})\lt\mathrm{Vol}(M),\qquad \mathrm{Vol}(M_{p,q})\longrightarrow\mathrm{Vol}(M)\quad(p^2+q^2\to\infty)
$$

이것이 Thurston 의 쌍곡 Dehn 수술 정리(hyperbolic Dehn surgery theorem)다.

cusp 를 메우면 부피가 줄고, 복잡하게 메울수록 원래 부피에 아래에서 수렴한다. $\mathcal V$ 안의 각 부피값이 그보다 큰 부피값들의 극한이 되고, 이 과정을 겹쳐 $\omega^\omega$ 가 나온다. 수술로 만드는 3 다양체 가운데 쌍곡이 아닌 것은 유한개의 예외뿐이다.

강직성은 고정된 위상형에서 계량이 유일하다는 진술이고 [Dehn 수술](dehn-surgery.md)은 위상형 자체를 바꾸므로 둘은 어긋나지 않는다. 붙임 방정식으로 적으면, cusp 조건을 뺀 해의 족이 불완비 구조들의 1 복소차원 가족을 이루고 그 가운데 홀로노미가 $(p,q)$ 조건을 만족하는 이산점들이 채워진 다양체의 완비 구조다.

## 기하화 정리 안에서의 위치

모든 닫힌 방향 가능 3 다양체는 소수 분해와 원환면 분해를 거쳐 8 개 모형 기하 중 하나를 갖는 조각으로 잘린다. 이것이 Thurston 이 추측하고 Perelman 이 증명한 [기하화 정리](geometrization.md)다.

8 개는 $\mathbb H^3$, $\mathbb E^3$, $S^3$, $S^2\times\mathbb R$, $\mathbb H^2\times\mathbb R$, $\widetilde{\mathrm{SL}\_2\mathbb R}$, $\mathrm{Nil}$, $\mathrm{Sol}$ 이다. $\mathbb H^3$ 을 뺀 일곱 기하의 조각은 Seifert 올뭉치(Seifert fibered space)이거나 원환면 다발로 분류되어 있다. 강직성으로 쌍곡 조각은 그 기본군으로 정해지므로, 쌍곡 조각의 분류가 Kleinian 군의 분류와 같다.

# 활용

## 8 자매듭 여집합

8 자매듭 $4_1$ 의 여집합은 이상 사면체 두 개를 붙여 만든다. 두 사면체의 모양을 $z,w$ 라 하면 모서리 조건이

$$
z(1-z)\thinspace w(1-w)=1
$$

한 방정식으로 줄고, 완비성 조건까지 넣으면 정이면체 사면체 $z=w=e^{i\pi/3}$ 이 나온다. 부피는

$$
\mathrm{Vol}=2D\big(e^{i\pi/3}\big)=2\cdot3\Lambda(\pi/3)=6\times0.3383138\ldots=2.0298832\ldots
$$

이고, [볼륨 추측](volume-conjecture.md)이 색 Jones 다항식의 증가율로 재현한다고 주장하는 값이 이것이다. 조합 쪽 합의 안장점 조건이 여기 모서리 조건과 같은 식이 된다.

## 이중로그를 쓴 부피 계산

붙임 방정식의 해가 주어지면 부피 계산은 Bloch–Wigner 함수의 수치 계산이다.

$\vert z\vert=1$ 인 정이면체 해에서는 $\log\vert z\vert=0$ 이라 둘째 항이 사라지고 $D(e^{i\theta})=\mathrm{Im}\thinspace\mathrm{Li}\_2(e^{i\theta})=2\Lambda(\theta/2)$ 가 된다.[^1] $\theta=\pi/3$ 에서 $2\Lambda(\pi/6)=3\Lambda(\pi/3)=V_3$ 이다.

## 매듭 구별

SnapPy 같은 프로그램은 매듭 도식에서 이상 사면체 분할을 자동으로 만들고 붙임 방정식을 [Newton 법](newton-method.md)으로 푼다. 얻은 부피, cusp 모양, 대각합체가 위상 불변량이므로 매듭표에서 항목을 가르는 1 차 기준이 된다. [Alexander 다항식](alexander-polynomial.md)이나 Jones 다항식이 같은 값을 주는 매듭 쌍도 부피가 다르면 갈린다.

붙임 방정식의 근사해 근처에 참 해가 있음을 구간 산술(interval arithmetic)로 검증하면 그 다양체가 쌍곡이라는 것이 증명된다.

## 산술 다양체, Chern–Simons 이론, K 이론

- 산술 쌍곡 다양체(arithmetic hyperbolic 3-manifold)에서는 $\Gamma$ 가 [사원수 대수](quaternion-algebras.md)의 정수원에서 오면 Bianchi 군 $\mathrm{PSL}\_2(\mathcal O_d)$ 류가 되고 부피가 [Dedekind zeta 함수](dedekind-zeta.md)의 값으로 계산된다. [Selberg 대각합 공식](selberg-trace-formula.md)이 길이 스펙트럼과 Laplace 스펙트럼을 잇는다.
- 쌍곡 구조는 $\mathrm{SL}\_2(\mathbb C)$ 평탄 접속이므로 [Chern–Simons](chern-simons.md) 불변량이 정의되고 $\mathrm{CS}+i\thinspace\mathrm{Vol}/2\pi$ 라는 복소수 하나로 묶인다. [Witten 점근](witten-asymptotics.md)과 볼륨 추측이 이 복소수의 실수부와 허수부를 본다.
- 사면체 모양들이 정하는 Bloch 군의 원소가 있고 그 Borel 조절자가 부피다. [대수적 K 이론](algebraic-k-theory.md)이 3 다양체의 부피와 이렇게 이어진다.

[^1]: $\mathrm{Im}\thinspace\mathrm{Li}\_2(e^{i\theta})=\sum_n\sin(n\theta)/n^2$ 이고 $\Lambda(\theta)=\tfrac12\sum_n\sin(2n\theta)/n^2$ 이므로 $\mathrm{Im}\thinspace\mathrm{Li}\_2(e^{i\theta})=2\Lambda(\theta/2)$ 다.

# 연관 문서

## 선수지식

- [Riemann 계량](riemannian-metrics.md)
- [덮개공간](covering-spaces.md)
- [Lobachevsky 함수](lobachevsky-function.md)

## 더 알아보기

- [Bloch 군](bloch-group.md)
- [볼륨 추측](volume-conjecture.md)
- [기하화 정리](geometrization.md)

#differential_geometry #topology #algebraic_topology #group_theory #theorem
