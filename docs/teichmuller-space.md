# Teichmüller 공간과 곡면의 모듈라이

# 개요

[곡면의 분류](classification-of-surfaces.md)는 닫힌 유향 곡면이 종수 $g$ 하나로 결정된다고 말한다. 위상만 보면 그것으로 끝이다. 그런데 같은 곡면에 [Riemann 계량](riemannian-metrics.md)을 주면 이야기가 다시 시작된다. **종수는 같지만 모양이 다른 곡면들이 연속적으로 많다.**

곡률을 $-1$ 로 고정해도 그렇다. $g\ge2$ 이면 종수 $g$ 곡면 위의 쌍곡 계량은 유일하지 않고, 등거리를 같은 것으로 세어도 $6g-6$ 개의 실수 매개변수가 남는다. 그 매개변수 공간이 **Teichmüller 공간** $\mathcal T_g$ 이고, 좌표를 잊고 곡면 자체만 세면 **모듈라이 공간** $\mathcal M_g$ 가 된다.

$$
\dim_{\mathbb R}\mathcal T_g=6g-6,\qquad \mathcal T_g\cong\mathbb R^{6g-6},\qquad \mathcal M_g=\mathcal T_g/\mathrm{Mod}(S_g)
$$

차원이 0 이 아니라는 사실 자체가 정리다. 한 차원 위로 올라가면 정반대가 되기 때문이다. [쌍곡 3 다양체](hyperbolic-3-manifolds.md)에서는 Mostow 강직성이 유한부피 쌍곡 구조를 **유일하게** 만든다. 모양을 고를 자유가 2 차원에는 있고 3 차원에는 없다. 이 대비가 두 차원의 기하를 전혀 다른 학문으로 갈라놓는다.

# 직관

## 바지로 자르기

종수 $g$ 곡면을 서로 만나지 않는 단순닫힌곡선을 따라 끝까지 자르면, 더 자를 수 없는 조각은 전부 **바지**(경계원 세 개짜리 구멍 뚫린 구)다. 몇 개가 나오는지는 [Euler 지표](euler-characteristic.md)가 답한다. 바지 하나의 지표가 $-1$ 이고 곡면 전체가 $2-2g$ 이므로 바지가 $2g-2$ 개, 자른 곡선이 $3g-3$ 개다.

여기서 결정적인 사실은 **쌍곡 바지가 세 경계 길이만으로 결정된다**는 것이다. 세 수 $(\ell_1,\ell_2,\ell_3)$ 을 아무렇게나 양수로 주면 그 길이를 경계 측지선으로 갖는 쌍곡 바지가 정확히 하나 있다. 바지 자체에는 모양의 자유도가 없다.

그러면 자유도는 붙이는 데서만 나온다. 곡선 하나를 따라 두 조각을 붙일 때 고를 것이 둘이다.

- **길이** $\ell_i>0$ 은 그 곡선이 얼마나 긴 측지선이 되는지를 정한다.
- **비틀림** $\tau_i\in\mathbb R$ 은 붙이기 전에 얼마나 돌려서 붙이는지를 정한다.

곡선이 $3g-3$ 개이므로 $2(3g-3)=6g-6$ 이다. **차원 공식이 바지를 세는 일에서 나온다.**

## 표시를 왜 기억하는가

비틀림 $\tau_i$ 를 $2\pi$ 만큼 돌리면 곡면 자체는 원래와 등거리가 된다. 그러나 곡면 위의 곡선들이 어디로 갔는지는 달라졌다. 이 차이를 버리면 좌표가 망가지고, 기억하면 매끄러운 좌표계가 된다.

그래서 Teichmüller 공간은 곡면이 아니라 **표시된 곡면**을 센다. 기준 곡면 $S$ 에서 대상 곡면으로 가는 미분동형 $f$ 를 함께 들고 다니는 것이다. 표시를 잊는 일은 나중에 사상류군으로 몫을 취해서 한다. $\mathcal T_g$ 가 $\mathbb R^{6g-6}$ 처럼 단순한 반면 $\mathcal M_g$ 가 오비폴드 특이점을 갖는 이유가 여기에 있다. **복잡함은 공간이 아니라 군 작용에 들어 있다.**

# 정의

## 표시된 쌍곡구조

$S=S_g$ 를 종수 $g\ge2$ 의 닫힌 유향 곡면이라 한다. 쌍 $(X,f)$ 를 생각한다. 여기서 $X$ 는 쌍곡 곡면이고 $f\colon S\to X$ 는 향을 보존하는 미분동형이다. 두 쌍 $(X_1,f_1)$ 과 $(X_2,f_2)$ 를 등거리 $h\colon X_1\to X_2$ 가 있어 $h\circ f_1$ 이 $f_2$ 와 호모토픽할 때 같다고 본다.

$$
\mathcal T_g=\{(X,f)\}/\sim
$$

를 **Teichmüller 공간**이라 한다.

## 표현으로 보는 같은 공간

곡면군 $\pi_1(S)$ 에서 $\mathrm{PSL}_2(\mathbb R)$ 로 가는 이산 충실 표현을 켤레로 나눈 것이 같은 공간을 준다.

$$
\mathcal T_g\cong\{\rho\colon\pi_1(S)\to\mathrm{PSL}_2(\mathbb R)\ \text{이산 충실}\}/\mathrm{PSL}_2(\mathbb R)
$$

쌍곡 곡면은 상반평면을 Fuchs 군 $\rho(\pi_1(S))$ 로 나눈 것이고, 표시는 곧 $\pi_1$ 의 생성원을 어디로 보낼지 정한 것이다. 이 그림에서 $\mathcal T_g$ 는 표현다양체의 한 연결성분으로 나타난다.

## Fenchel–Nielsen 좌표

바지 분해를 주는 곡선족 $\mathcal C=\{c_1,\dots,c_{3g-3}\}$ 을 고정하면

$$
\mathrm{FN}_{\mathcal C}\colon\mathcal T_g\ \xrightarrow{\ \sim\ }\ (\mathbb R_{>0})^{3g-3}\times\mathbb R^{3g-3},\qquad
X\mapsto(\ell_1,\dots,\ell_{3g-3},\tau_1,\dots,\tau_{3g-3})
$$

가 전단사이고 실해석적이다. $\ell_i$ 는 $c_i$ 의 호모토피류에 든 유일한 닫힌 측지선의 길이이고, $\tau_i$ 는 그 곡선을 따라 잰 비틀림이다. 비틀림이 $\mathbb R$ 전체를 도는 것이 표시를 기억한 대가이자 좌표가 전역적인 이유다.

## 사상류군과 모듈라이 공간

$$
\mathrm{Mod}(S_g)=\mathrm{Diff}^+(S_g)/\mathrm{Diff}_0(S_g)
$$

를 **사상류군**이라 하고, 표시를 바꾸는 방식으로 $\mathcal T_g$ 에 작용한다. 몫

$$
\mathcal M_g=\mathcal T_g/\mathrm{Mod}(S_g)
$$

가 **모듈라이 공간**이며, 점 하나가 등거리류 하나에 대응한다.

# 성질

## 차원과 위상

| 대상 | $g=1$ | $g\ge2$ |
| --- | --- | --- |
| $\dim\mathcal T_g$ | 2 | $6g-6$ |
| $\mathcal T_g$ | $\mathbb H$ | $\mathbb R^{6g-6}$ 과 위상동형 |
| $\mathrm{Mod}$ | $\mathrm{SL}_2(\mathbb Z)$ | 유한생성, 무한 |
| $\mathcal M_g$ | [모듈러 곡선](modular-curves.md) $\mathbb H/\mathrm{SL}_2(\mathbb Z)$ | 복소차원 $3g-3$ 오비폴드 |

$g=1$ 칸이 이 이론의 축소판이다. 원환면의 모듈라이가 곧 $j$ 불변량이고, 그 위의 $\mathrm{SL}_2(\mathbb Z)$ 작용이 모듈러 형식을 낳는다. 종수를 올린 것이 일반 이론이다.

경계나 첨점이 $n$ 개 있으면 차원이 $6g-6+2n$ 으로 늘어난다. $(g,n)=(0,3)$ 에서 $0$ 이 되는데, 세 구멍 뚫린 구 곧 바지가 강직하다는 앞의 사실이 이 계산이다.

## 두 계량

$\mathcal T_g$ 에는 성격이 다른 계량이 여럿 있다.

- **Teichmüller 계량.** $d(X,Y)=\tfrac12\log K$ 로 두고, $K$ 는 표시를 지키는 준등각 사상의 최소 팽창률이다. 완비이고 Finsler 이며, 측지선이 이차미분으로 기술된다.
- **Weil–Petersson 계량.** 여이차미분의 $L^2$ 내적에서 오는 Kähler 계량이다. 완비가 아니고 단면곡률이 음이며, 부피가 유한하다. Mirzakhani 의 부피 재귀가 이 계량에서 나온다.

완비성이 갈리는 이유는 곡선 하나의 길이를 $0$ 으로 보내는 경로가 Weil–Petersson 거리에서는 유한하기 때문이다. 그 극한은 마디가 생긴 곡면이고, 여기에 극한점을 붙인 것이 Deligne–Mumford 콤팩트화 $\overline{\mathcal M}_g$ 다.

## 작용과 특이점

$\mathrm{Mod}(S_g)$ 의 작용은 properly discontinuous 이지만 자유롭지 않다. 등거리를 갖는 곡면, 곧 자기동형이 있는 곡면에서 안정자가 유한군이 되고 그 점이 $\mathcal M_g$ 의 오비폴드 특이점이 된다. 종수 $g$ 곡면의 자기동형군이 Hurwitz 경계 $84(g-1)$ 로 유한하다는 사실이 여기에 맞물린다.

$\mathcal T_g$ 가 수축가능이므로 $\mathcal M_g$ 는 유리계수에서 $\mathrm{Mod}(S_g)$ 의 분류공간처럼 행동하고, 모듈라이 공간의 코호몰로지를 세는 일이 사상류군의 코호몰로지를 세는 일이 된다.

## 2 차원과 3 차원의 대비

| | 2 차원 곡면 | 3 다양체 |
| --- | --- | --- |
| 쌍곡 구조의 개수 | $6g-6$ 차원 족 | 유일 (Mostow) |
| 부피 | 위상량 $2\pi(2g-2)$ | 위상 불변량이지만 다양체마다 다름 |
| 모듈라이 | $\mathcal M_g$ | 점 |
| 대수적 반영 | 표현이 변형됨 | 표현이 강직, 수체 위에 정의됨 |

같은 상수곡률 $-1$ 인데 차원 하나 차이로 결론이 뒤집힌다. 이유는 등거리군의 크기에 있다. $\mathrm{PSL}_2(\mathbb R)$ 안의 Fuchs 군은 변형 가능한 반면 $\mathrm{PSL}_2(\mathbb C)$ 안의 격자는 부피가 유한하면 변형되지 않는다. 3 차원 쪽 강직성이 쌍곡 부피를 위상 불변량으로 만들고, 2 차원 쪽 유연성이 모듈라이라는 학문을 만든다.

# 활용

## 기하화의 도구

Thurston 이 Haken 다양체의 쌍곡화를 증명할 때 쓴 것이 Teichmüller 공간 위의 사상, 곧 skinning 사상의 고정점이다. 다양체를 조각으로 자르고 각 조각에 쌍곡 구조를 준 뒤, 경계에서 구조가 맞아떨어지도록 $\mathcal T_g$ 안에서 조정한다. [기하화 정리](geometrization.md)의 한 축이 이 되풀이의 수렴이다. 2 차원의 유연성이 3 차원 강직성을 증명하는 재료로 쓰이는 구조다.

## 사상류군의 분류

$\mathcal T_g$ 위의 작용을 보면 사상류군의 원소가 셋 중 하나로 갈린다. 유한위수(주기적), 어떤 곡선족을 보존(가약), 그리고 나머지가 **유사 Anosov** 다. 유사 Anosov 사상은 늘이는 방향과 줄이는 방향의 엽층 두 장을 가지며 그 팽창률이 대수적 정수다. 이 분류가 곡면 위의 동역학과 3 차원 위상수학을 잇는다. 유사 Anosov 사상으로 만든 사상원환면이 정확히 쌍곡 3 다양체가 되기 때문이다.

## 모듈라이 공간의 교차 이론

$\overline{\mathcal M}_g$ 위의 교차수를 세는 문제가 Witten 추측과 Kontsevich 정리이고, 그 뒤로 2 차원 중력 모형과 행렬 적분으로 이어졌다. Mirzakhani 는 경계 길이를 변수로 본 Weil–Petersson 부피의 재귀를 세워 같은 결론을 기하 쪽에서 얻었고, 그 과정에서 쌍곡 곡면 위 측지선 개수의 점근을 함께 얻었다. 모듈라이 공간이 조합과 적분과 기하가 만나는 자리가 된다.

## 복소해석 쪽의 얼굴

$\mathcal T_g$ 는 $\mathbb C^{3g-3}$ 안의 유계영역으로 실현되며(Bers 매장), 쌍곡 계량을 고르는 일과 복소구조를 고르는 일이 종수 $g$ 곡면에서 같은 일이라는 균일화 정리가 그 바탕이다. 준등각 사상과 Beltrami 미분이 이 동일시의 언어이고, Teichmüller 거리 자체가 준등각 팽창률로 정의된다.[^1]

[^1]: 표준 참고서는 B. Farb, D. Margalit, *A Primer on Mapping Class Groups*, Princeton Univ. Press (2012) 와 Y. Imayoshi, M. Taniguchi, *An Introduction to Teichmüller Spaces*, Springer (1992). Weil–Petersson 부피 재귀는 M. Mirzakhani, *Simple geodesics and Weil–Petersson volumes of moduli spaces of bordered Riemann surfaces*, Invent. Math. **167** (2007), 179–222. 본문의 수치 확인은 직접 한 것이다.

# 연관 문서

## 선수지식

- [곡면의 분류](classification-of-surfaces.md)
- [Riemann 계량과 측지선](riemannian-metrics.md)
- [Riemann 곡면과 균일화 정리](riemann-surfaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #differential_geometry #complex_analysis
