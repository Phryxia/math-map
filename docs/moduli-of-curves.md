# 곡선의 모듈라이 공간

# 개요

곡선의 모듈라이 공간은 종수 $g$ 의 매끄러운 사영 복소곡선의 동형류를 점으로 갖는 공간이다. $g\ge 2$ 에서 차원이 $3g-3$ 이고 콤팩트가 아니다. 노드를 허용한 안정곡선을 더하면 사영 공간이 되고, 그 콤팩트화가 Deligne–Mumford 콤팩트화다.

# 직관

종수 $2$ 의 콤팩트 [Riemann 곡면](riemann-surfaces.md)은 $y^2=f(x)$ 로 적을 수 있고 $f$ 는 중근 없는 $6$ 차 다항식이다. 이 곡면은 $f$ 의 근 여섯 개, 곧 $\mathbb P^1$ 위의 점 여섯 개로 정해진다. 점 여섯 개의 위치는 수 여섯 개지만 $\mathbb P^1$ 의 자기동형 $\mathrm{PGL}\_2(\mathbb C)$ 가 어느 세 점이든 $0,1,\infty$ 로 보내므로 자유도 $3$ 을 뺀다. 남는 것이 $3$ 이고 $3g-3$ 에 $g=2$ 를 넣은 값과 같다.

이 셈을 그대로 이어 점 둘을 서로 가까이 보내 보면 목록의 한 가지 성질이 드러난다. 두 근이 하나로 합쳐지는 극한에서 $f$ 는 중근을 갖고 $y^2=f(x)$ 는 그 근에서 매끄럽지 않다. 극한의 곡선은 매끄러운 곡선의 동형류가 아니므로 목록 안에 없다. 점 여섯 개를 움직이는 길은 목록 안에 머물다가 끝점에서 목록을 벗어난다.

극한에서 나온 곡선을 보면 무엇을 더해야 하는지 나온다. 두 근이 만나는 자리에서 곡면은 한 점에서 자신과 만나고, 그 점을 떼어 두 가지를 갈라 놓으면 종수가 하나 낮은 곡면에 점 두 개가 표시된 것이 남는다. 이런 곡선을 목록에 함께 넣으면 끝점이 목록 안에 들어온다. 넣을 곡선을 가르는 조건은 자기동형이 유한 개라는 것이고, 그 조건을 만족하는 곡선을 안정곡선이라 한다.

# 정의

**곡선의 모듈라이 공간**은 종수 $g\ge 2$ 의 매끄러운 연결 사영 복소곡선의 동형류 집합 $\mathcal M_g$ 다. 두 곡선은 쌍정칙 사상이 있을 때 같은 점이다.

$\mathcal M_g$ 는 매끄러운 다양체가 아니다. 자기동형군이 자명하지 않은 곡선에서 오비폴드 특이점이 생긴다. 종수 $2$ 의 모든 곡선은 초타원 대합을 가지므로 $\mathcal M_2$ 의 모든 점이 그런 점이다.

## 안정곡선

**안정곡선**은 연결 사영 곡선으로 특이점이 노드뿐이고 자기동형군이 유한한 것이다. 노드는 국소적으로 $xy=0$ 꼴의 점이다. 자기동형이 유한하다는 조건은 성분으로 다시 쓸 수 있다. 정규화한 성분 가운데 종수 $0$ 인 것은 다른 성분과 만나는 점을 셋 이상 담아야 하고, 종수 $1$ 인 것은 하나 이상 담아야 한다.

종수는 산술종수로 센다. 성분들의 종수의 합에 노드 수를 더하고 성분 수를 빼고 $1$ 을 더한 값이다.

## Deligne–Mumford 콤팩트화

$\overline{\mathcal M}\_g$ 는 종수 $g$ 안정곡선의 동형류 집합이다. $\mathcal M_g$ 는 그 안에서 특이점이 없는 곡선들이 차지하는 열린 부분이다.

# 성질

## 차원

$g\ge 2$ 에서 $\dim\mathcal M_g=3g-3$ 이다.

증명의 요지. 곡선 $C$ 를 변형하는 방향은 접다발의 첫 코호몰로지 $H^1(C,T_C)$ 가 센다. $T_C$ 는 표준다발 $K_C$ 의 쌍대이고 $\deg K_C=2g-2$ 이므로 $\deg T_C=2-2g$ 다. Riemann–Roch 를 $T_C$ 에 적용하면 $\dim H^0-\dim H^1=\deg T_C+1-g=3-3g$ 이고, $g\ge 2$ 에서 $\deg T_C\lt 0$ 이므로 $H^0(C,T_C)=0$ 이다. 따라서 $\dim H^1(C,T_C)=3g-3$ 이다.

## 콤팩트성과 사영성

$\overline{\mathcal M}\_g$ 는 기약이고 콤팩트하며 사영 대수다양체의 구조를 갖는다.[^1] 경계 $\overline{\mathcal M}\_g\setminus\mathcal M_g$ 는 여차원 $1$ 의 기약 성분 $\delta_0,\delta_1,\dots,\delta_{\lfloor g/2\rfloor}$ 의 합집합이다. $\delta_0$ 은 노드를 떼면 종수 $g-1$ 의 연결 곡선이 되는 것이고, $\delta_i$ 는 종수 $i$ 와 $g-i$ 의 두 성분이 한 점에서 만나는 것이다.

## Torelli 사상

곡선에 그 [Jacobi 다양체](jacobian-variety.md)를 대응시키면 사상 $t\colon\mathcal M_g\to\mathcal A_g$ 가 나온다. $\mathcal A_g$ 는 [Siegel 모듈라이 다양체](siegel-modular-variety.md)다. Torelli 정리에 따르면 $t$ 는 단사다.[^2]

두 차원은 $3g-3$ 과 $g(g+1)/2$ 다. $g=2,3$ 에서 두 수가 같고 $g\ge 4$ 에서 앞이 작으므로 $t$ 의 상이 진부분다양체다. 어떤 주편극 아벨 다양체가 Jacobi 다양체인지를 방정식으로 가리는 것이 Schottky 문제다.

## Teichmüller 공간과의 관계

$\mathcal M_g$ 는 [Teichmüller 공간](teichmuller-space.md)을 사상류군으로 나눈 몫이다.

$$\mathcal M_g=\mathcal T_g/\mathrm{Mod}(S_g)$$

$\mathcal T_g$ 는 $\mathbb R^{6g-6}$ 과 위상동형이고 작용은 고유 불연속이다. 실차원 $6g-6$ 이 복소차원 $3g-3$ 과 맞고, 오비폴드 특이점은 고정점을 갖는 사상류에서 나온다.

# 활용

- **주편극 아벨 다양체의 분류.** Torelli 사상의 상이 $\mathcal A_g$ 안에서 어느 자취인지 묻는 것이 Schottky 문제이고, $g=4$ 에서 theta 상수의 다항식 하나가 그 닫힘을 정의한다.
- **교차수.** $\overline{\mathcal M}\_g$ 와 표시점을 더한 $\overline{\mathcal M}\_{g,n}$ 위에서 표준다발에서 나온 유군류의 교차수를 계산하는 것이 Witten 추측이고, 그 수들이 만족하는 점화식이 Virasoro 조건이다.
- **사상류군의 코호몰로지.** $\mathcal M_g$ 가 사상류군의 분류공간과 유리 코호몰로지를 공유하므로, $\mathcal M_g$ 의 코호몰로지 계산이 그 군의 불변량을 준다.

[^1]: P. Deligne and D. Mumford, "The Irreducibility of the Space of Curves of Given Genus", Publications mathématiques de l'IHÉS **36** (1969), 75–109.

[^2]: 복소 해석적 증명은 A. Andreotti, "On a Theorem of Torelli", American Journal of Mathematics **80** (1958), 801–828.

# 연관 문서

## 선수지식

- [사영다양체](projective-varieties.md)
- [Teichmüller 공간](teichmuller-space.md)
- [사상류군](mapping-class-group.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra #number_theory #topology
