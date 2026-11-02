# Teichmüller 공간

# 개요

**Teichmüller 공간(Teichmüller space)** $\mathcal T_g$ 는 구멍이 $g\ge 2$ 개인 닫힌 곡면에 줄 수 있는, [곡률](curvature.md)이 어디서나 $-1$ 인 모양들을 모은 공간이다. 예로 구멍이 둘인 곡면은 위상적으로 하나뿐이지만, 곡률을 $-1$ 로 고정해도 곡면을 자르는 세 고리의 길이와 비틀림을 바꿔 서로 등거리가 아닌 모양을 연속적으로 만들 수 있다. Teichmüller 공간은 이 모양들을 $6g-6$ 개의 [실수](real-numbers.md) 좌표로 적어 곡면의 모양을 공간의 점으로 다룬다.

# 직관

[곡면의 분류](classification-of-surfaces.md)에서 닫힌 유향 곡면은 종수 $g$ 하나로 결정된다. 같은 곡면에 [Riemann 계량](riemannian-metrics.md)을 주면 종수는 같지만 모양이 다른 곡면이 연속적으로 많다. 곡률을 $-1$ 로 고정했을 때 모양이 몇 개의 수로 정해지는지를 종수 $2$ 곡면으로 센다.

종수 $2$ 곡면을 서로 만나지 않는 고리 세 개 $c_1,c_2,c_3$ 을 따라 자르면, 경계원이 세 개인 구멍 뚫린 구 두 조각이 남는다. [Euler 지표](euler-characteristic.md)로 확인된다. 곡면 전체가 $2-2\cdot 2=-2$ 이고 한 조각이 $-1$ 이므로 조각은 둘이다. 곡률이 $-1$ 인 이 조각은 세 경계의 길이만 정하면 모양이 하나로 정해진다.

두 조각을 다시 붙일 때 고리마다 고를 것이 둘 있다.

- 고리의 길이 $\ell_i\gt 0$. 두 조각의 경계 길이가 같아야 붙는다.
- 붙이기 전에 한쪽을 고리 방향으로 밀어 두는 거리 $\tau_i\in\mathbb R$.

고리가 셋이므로 수가 $2\cdot 3=6$ 개다. $\tau_i$ 를 고리 한 바퀴 길이 $\ell_i$ 만큼 늘리면 곡면 자체는 원래와 등거리이지만, 고리 $c_i$ 를 가로지르던 곡선은 한 바퀴 감긴 곡선으로 옮겨진다. $\tau_i$ 를 실수 전체에서 움직이려면 곡면과 함께 곡선들이 어디로 갔는지를 기억해야 한다. 이렇게 기억하는 곡면을 표시된 곡면이라 하고, 그 모양들의 공간이 Teichmüller 공간이다.

# 정의

## 쌍곡 곡면

**쌍곡 곡면(hyperbolic surface)** 은 Gauss 곡률이 어디서나 $-1$ 인 Riemann 계량을 준 곡면이다. 이 계량을 **쌍곡 계량(hyperbolic metric)** 이라 한다.

- 쌍곡평면에서 내각이 모두 $\pi/4$ 인 정팔각형을 잡고 변을 $a_1b_1a_1^{-1}b_1^{-1}a_2b_2a_2^{-1}b_2^{-1}$ 순서로 붙이면 종수 $2$ 의 쌍곡 곡면이 된다. 꼭짓점 여덟 개가 한 점으로 모이고 내각의 합이 $8\cdot\pi/4=2\pi$ 이므로 그 점에서도 곡률이 $-1$ 이다.

## 바지 분해

**바지(pair of pants)** 는 구에서 서로 만나지 않는 닫힌 원판 세 개를 뺀 곡면이다. 곡면 $S$ 를 서로 만나지 않는 단순 닫힌 곡선들 $\mathcal C=\lbrace c_1,\dots,c_k\rbrace$ 를 따라 잘랐을 때 모든 조각이 바지이면 $\mathcal C$ 를 **바지 분해(pants decomposition)** 라 한다.

- 직관의 세 고리 $c_1,c_2,c_3$ 은 종수 $2$ 곡면의 바지 분해이고, 조각은 바지 두 개다.

## 표시된 쌍곡 구조와 Teichmüller 공간

$S=S_g$ 를 종수 $g\ge2$ 의 닫힌 유향 곡면이라 한다. **표시된 쌍곡 곡면(marked hyperbolic surface)** 은 쌍곡 곡면 $X$ 와 향을 보존하는 미분동형 $f\colon S\to X$ 의 쌍 $(X,f)$ 다. 두 쌍 $(X_1,f_1)$ 과 $(X_2,f_2)$ 는 등거리 $h\colon X_1\to X_2$ 가 있어 $h\circ f_1$ 이 $f_2$ 와 호모토픽할 때 같다고 본다.

$$
\mathcal T_g=\lbrace(X,f)\rbrace/\sim
$$

를 **Teichmüller 공간**이라 한다.

- $X$ 가 정팔각형으로 만든 곡면이고 $T_c$ 가 $S$ 의 곡선 $c$ 를 따른 Dehn 비틀림(Dehn twist)이면, $(X,f)$ 와 $(X,f\circ T_c)$ 는 곡면은 같고 표시만 다르다. $X$ 의 등거리 $h$ 로 $h\circ f\simeq f\circ T_c$ 가 되지 않는 한 두 쌍은 $\mathcal T_2$ 의 다른 점이다.

## Fenchel–Nielsen 좌표

바지 분해 $\mathcal C=\lbrace c_1,\dots,c_{3g-3}\rbrace$ 를 고정한다. 표시된 곡면 $(X,f)$ 에서 $\ell_i$ 는 $f(c_i)$ 와 호모토픽한 유일한 닫힌 [측지선](geodesics.md)의 길이이고, $\tau_i$ 는 그 측지선을 따라 두 바지를 밀어 붙인 거리다. 사상

$$
\mathrm{FN}\_{\mathcal C}\colon\mathcal T_g\to(\mathbb R_{\gt 0})^{3g-3}\times\mathbb R^{3g-3},\qquad
(X,f)\mapsto(\ell_1,\dots,\ell_{3g-3},\tau_1,\dots,\tau_{3g-3})
$$

을 **Fenchel–Nielsen 좌표(Fenchel–Nielsen coordinates)** 라 한다.

- 종수 $2$ 에서는 $3g-3=3$ 이므로 좌표가 $(\ell_1,\ell_2,\ell_3,\tau_1,\tau_2,\tau_3)$ 여섯 개다. 직관에서 고리마다 고른 두 수가 이것이다.

## 사상류군과 모듈라이 공간

[사상류군](mapping-class-group.md) $\mathrm{Mod}(S_g)=\mathrm{Diff}^+(S_g)/\mathrm{Diff}\_0(S_g)$ 는 표시를 바꾸어 $\mathcal T_g$ 에 작용한다.

$$
\lbrack\varphi\rbrack\cdot(X,f)=(X,f\circ\varphi^{-1})
$$

몫

$$
\mathcal M_g=\mathcal T_g/\mathrm{Mod}(S_g)
$$

을 종수 $g$ 곡면의 [모듈라이 공간](moduli-space.md)이라 한다. 점 하나가 쌍곡 곡면의 등거리류 하나다.

- 정의의 예에서 $(X,f)$ 와 $(X,f\circ T_c)$ 는 $\mathcal T_2$ 의 두 점이지만 $\mathcal M_2$ 에서는 같은 점 $X$ 다.

# 성질

## 바지 분해의 개수

종수 $g$ 곡면의 바지 분해는 곡선이 $3g-3$ 개, 바지가 $2g-2$ 개다. 바지 하나의 Euler 지표가 $-1$ 이고 곡면이 $2-2g$ 이므로 바지가 $2g-2$ 개다. 바지 하나에 경계원이 셋이고 각 곡선이 경계원 둘이 되므로 곡선은 $3(2g-2)/2=3g-3$ 개다.

쌍곡 바지는 세 경계 길이로 등거리를 빼고 하나로 결정된다. 세 양수 $(\ell_1,\ell_2,\ell_3)$ 을 아무렇게나 주면 그 길이를 경계 측지선으로 갖는 쌍곡 바지가 정확히 하나 있다.

## Fenchel–Nielsen 정리

$\mathrm{FN}\_{\mathcal C}$ 는 전단사이고 실해석적이다. 따라서

$$
\dim_{\mathbb R}\mathcal T_g=6g-6,\qquad \mathcal T_g\cong\mathbb R^{6g-6}
$$

이다. $\tau_i$ 가 $\mathbb R$ 전체를 움직이므로 좌표가 전역적이다. 표시를 버리면 $\tau_i$ 와 $\tau_i+\ell_i$ 가 같은 곡면을 주어 이 전역성이 깨진다.

## 표현에 의한 기술

$\mathcal T_g$ 는 [기본군](fundamental-group.md) $\pi_1(S)$ 에서 $\mathrm{PSL}\_2(\mathbb R)$ 로 가는 이산 충실 표현을 켤레로 나눈 공간과 같다.

$$
\mathcal T_g\cong\lbrace\rho\colon\pi_1(S)\to\mathrm{PSL}\_2(\mathbb R)\mid\rho\ \text{이산 충실}\rbrace/\mathrm{PSL}\_2(\mathbb R)
$$

쌍곡 곡면 $X$ 는 상반평면을 **Fuchs 군(Fuchsian group)** $\rho(\pi_1(S))$ 로 나눈 것이고, 표시 $f$ 가 $\pi_1(S)$ 의 생성원을 어디로 보낼지 정한다. 이 기술에서 $\mathcal T_g$ 는 표현 다양체(representation variety)의 한 [연결성분](connectedness.md)이다.

## 차원과 위상

| 대상 | 종수 1 | 종수 2 이상 |
| --- | --- | --- |
| 실차원 | 2 | $6g-6$ |
| Teichmüller 공간 | $\mathbb H$ | $\mathbb R^{6g-6}$ 과 위상동형 |
| 사상류군 | $\mathrm{SL}\_2(\mathbb Z)$ | 유한생성, 무한 |
| 모듈라이 공간 | [모듈러 곡선](modular-curves.md) $\mathbb H/\mathrm{SL}\_2(\mathbb Z)$ | 복소차원 $3g-3$ 오비폴드 |

종수 $1$ 에서는 곡률 $-1$ 대신 넓이 $1$ 인 평탄 계량을 센다. 이때 모듈라이 공간의 점은 $j$ 불변량으로 정해지고, $\mathbb H$ 위의 $\mathrm{SL}\_2(\mathbb Z)$ 작용에 대해 변환 규칙을 만족하는 함수가 [모듈러 형식](modular-forms.md)이다.

경계나 첨점이 $n$ 개 있으면 실차원은 $6g-6+2n$ 이다. $(g,n)=(0,3)$ 에서 $0$ 이 되어, 세 경계 길이를 고정한 바지가 강직하다는 앞의 사실과 맞는다.

## 두 계량

- **Teichmüller 계량(Teichmüller metric)** 은 $d\big((X,f),(Y,g)\big)=\tfrac12\log K$ 로 정의되고, $K$ 는 $g\circ f^{-1}$ 과 호모토픽한 [준등각 사상](quasiconformal-maps.md)의 최소 팽창률이다. [완비](completeness.md)인 Finsler 계량이고, [Teichmüller 정리](teichmuller-theorem.md)로 측지선이 이차미분(quadratic differential)으로 기술된다.
- **Weil–Petersson 계량(Weil–Petersson metric)** 은 여이차미분의 $L^2$ 내적에서 오는 [Kähler 다양체](kahler-manifolds.md)의 계량이다. 완비가 아니고 단면곡률이 음이며, 이 계량에 대한 $\mathcal M_g$ 의 부피가 유한하다.

곡선 하나의 길이를 $0$ 으로 보내는 경로가 Weil–Petersson 거리로는 유한하므로 Weil–Petersson 계량은 완비가 아니다. 그 극한은 마디(node)가 생긴 곡면이고, 이런 곡면을 극한점으로 붙인 것이 Deligne–Mumford 콤팩트화(Deligne–Mumford compactification) $\overline{\mathcal M}\_g$ 다.

## 작용과 특이점

$\mathrm{Mod}(S_g)$ 의 작용은 진성 불연속(properly discontinuous)이지만 자유롭지 않다. $(X,f)$ 의 안정자는 $X$ 의 향 보존 등거리군과 동형이다. 종수 $g$ 곡면의 이 군은 Hurwitz 경계(Hurwitz bound) $84(g-1)$ 이하의 유한군이고, 안정자가 자명하지 않은 점이 $\mathcal M_g$ 의 오비폴드(orbifold) 특이점이 된다.

$\mathcal T_g$ 가 수축가능이므로 유리계수 [코호몰로지](cohomology.md)에서 $H^\ast(\mathcal M_g;\mathbb Q)\cong H^\ast(\mathrm{Mod}(S_g);\mathbb Q)$ 이다.

## 2 차원과 3 차원의 비교

| | 2 차원 곡면 | 3 다양체 |
| --- | --- | --- |
| 쌍곡 구조의 개수 | $6g-6$ 차원 족 | 유한부피이면 유일 |
| 부피 | $2\pi(2g-2)$ | 위상 불변량, 다양체마다 다름 |
| 모듈라이 공간 | $\mathcal M_g$ | 점 |
| 표현 | 변형된다 | 강직하고 수체 위로 켤레된다 |

3 차원 열은 Mostow 강직성 정리(Mostow rigidity theorem)에서 나온다. 유한부피 [쌍곡 3 다양체](hyperbolic-3-manifolds.md) 둘의 기본군이 동형이면 두 다양체는 등거리다. 따라서 쌍곡 부피가 위상 불변량이 된다. 2 차원 열의 부피는 [Gauss–Bonnet 정리](gauss-bonnet.md)로 Euler 지표에서 정해진다.

# 활용

## 기하화

Thurston 은 Haken 다양체(Haken manifold)의 쌍곡화를 증명할 때 Teichmüller 공간 위의 skinning 사상(skinning map)의 고정점을 썼다. 다양체를 조각으로 자르고 각 조각에 쌍곡 구조를 준 뒤, 경계에서 구조가 맞도록 $\mathcal T_g$ 안에서 조정한다. 이 반복의 수렴이 [기하화 정리](geometrization.md)의 증명 단계 가운데 하나다.

## 사상류군의 분류

$\mathcal T_g$ 위의 작용으로 사상류군의 원소는 유한 위수, 어떤 곡선족을 보존하는 가약, 그리고 **유사 Anosov(pseudo-Anosov)** 셋 가운데 하나로 갈린다(Nielsen–Thurston 분류, Nielsen–Thurston classification). 유사 Anosov 사상은 늘이는 방향과 줄이는 방향의 엽층 두 장을 갖고, 그 팽창률은 대수적 정수다. Thurston 의 정리로 사상류 $\varphi$ 의 사상원환면(mapping torus)이 쌍곡 3 다양체인 것과 $\varphi$ 가 유사 Anosov 인 것은 동치다.

## 모듈라이 공간의 교차수

$\overline{\mathcal M}\_g$ 위의 교차수를 세는 문제가 Witten 추측(Witten conjecture)이고, Kontsevich 가 [행렬](matrices.md) 적분으로 이를 증명했다. Mirzakhani 는 경계 길이를 변수로 한 Weil–Petersson 부피의 재귀식을 세워 같은 결과를 다시 증명했고, 쌍곡 곡면 위 단순 닫힌 측지선 개수의 점근식도 얻었다.[^1]

## 복소해석에서의 기술

$\mathcal T_g$ 는 $\mathbb C^{3g-3}$ 안의 유계영역으로 실현된다(Bers 매장, Bers embedding). 바탕은 균일화 정리(uniformization theorem)로, 종수 $g\ge 2$ 곡면에서 쌍곡 계량을 고르는 것과 [Riemann 곡면](riemann-surfaces.md)의 복소구조를 고르는 것이 같다. 이 동일시는 준등각 사상과 Beltrami 미분(Beltrami differential)으로 기술된다.[^2]

[^1]: M. Mirzakhani, *Simple geodesics and Weil–Petersson volumes of moduli spaces of bordered Riemann surfaces*, Invent. Math. **167** (2007), 179–222.

[^2]: B. Farb, D. Margalit, *A Primer on Mapping Class Groups*, Princeton Univ. Press (2012); Y. Imayoshi, M. Taniguchi, *An Introduction to Teichmüller Spaces*, Springer (1992).

# 연관 문서

## 선수지식

- [곡면의 분류](classification-of-surfaces.md)
- [Riemann 계량](riemannian-metrics.md)
- [Riemann 곡면](riemann-surfaces.md)

## 더 알아보기

- [Teichmüller 정리](teichmuller-theorem.md)
- [곡선의 모듈라이 공간](moduli-of-curves.md)

#topology #differential_geometry #complex_analysis
