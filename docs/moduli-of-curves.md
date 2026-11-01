# 곡선의 모듈라이 공간

# 개요

**곡선의 모듈라이 공간(moduli space of curves)** 은 종수 $g$ 의 매끄러운 사영 복소곡선의 동형류를 점으로 갖는 공간이다. 종수 $2$ 의 곡면은 사영직선 위의 점 여섯 개로 정해지는데, 그 가운데 두 점을 서로 가까이 보내면 극한의 곡면은 한 점에서 자신과 만나 매끄럽지 않으므로 모음 밖으로 나간다. 이렇게 자신과 만나는 곡선 가운데 자기동형이 유한 개인 것을 모음에 더하면 극한이 모음 안에 남는다.

# 직관

종수 $2$ 의 콤팩트 [Riemann 곡면](riemann-surfaces.md)은 $y^2=f(x)$ 로 적을 수 있고 $f$ 는 중근 없는 $6$ 차 다항식이다. 이 곡면은 $f$ 의 근 여섯 개, 곧 $\mathbb P^1$ 위의 점 여섯 개로 정해진다. 점 여섯 개의 위치는 수 여섯 개지만 $\mathbb P^1$ 의 자기동형 $\mathrm{PGL}\_2(\mathbb C)$ 가 어느 세 점이든 $0,1,\infty$ 로 보내므로 자유도 $3$ 을 뺀다. 종수 $2$ 곡면 전체의 목록은 남은 세 점의 위치 $a,b,c$ 로 적히고, 수 셋으로 매개된다.

이제 $c$ 를 $b$ 로 보낸다. 극한에서 $f$ 는 중근 $b$ 를 갖고, $y^2=f(x)$ 는 $x=b$ 에서 $y^2=(x-b)^2\cdot(\text{상수})$ 꼴이 되어 두 가지가 엇갈리는 점을 갖는다. 이 곡선은 매끄럽지 않으므로 목록 안에 없다. 점 여섯 개를 움직이는 길은 목록 안에 머물다가 끝점에서 목록을 벗어난다.

극한에서 $f(x)=x(x-1)(x-a)(x-b)^2$ 이다. $w=y/(x-b)$ 로 두면 $w^2=x(x-1)(x-a)$ 가 되어 엇갈리는 점의 두 가지가 $x=b$ 위의 두 점 $w=\pm\sqrt{b(b-1)(b-a)}$ 로 떨어진다. $w^2=x(x-1)(x-a)$ 는 종수 $1$ 의 곡면이다.

극한의 곡선은 이 종수 $1$ 곡면의 두 점을 붙인 것이다. 이런 곡선을 목록에 함께 넣으면 끝점이 목록 안에 들어온다. 넣을 곡선을 가르는 조건은 자기 자신으로 가는 대칭이 유한 개라는 것이다.

# 정의

## 곡선의 모듈라이 공간

**곡선의 모듈라이 공간** 은 종수 $g\ge 2$ 의 매끄러운 연결 사영 복소곡선의 동형류 집합 $\mathcal M_g$ 다. 두 곡선은 쌍정칙 사상이 있을 때 같은 점이다.

직관 절의 셈에서 $\mathcal M_2$ 의 점은 서로 다른 여섯 점 $0,1,\infty,a,b,c\in\mathbb P^1$ 이 정하는 곡선 $y^2=x(x-1)(x-a)(x-b)(x-c)$ 다. $\infty$ 로 보낸 근은 식에서 빠지고 $5$ 차식이 남는다. 여섯 점을 다른 순서로 $0,1,\infty$ 에 보내면 다른 $(a,b,c)$ 가 나오지만 같은 곡선이므로 같은 점이다.

## 안정곡선

**노드(node)** 는 국소적으로 $xy=0$ 꼴인 곡선의 점이다. **안정곡선(stable curve)** 은 특이점이 노드뿐이고 자기동형군이 유한한 연결 사영 곡선이다. 종수는 **산술종수(arithmetic genus)** 로 센다. 성분들의 종수의 합에 노드 수를 더하고 성분 수를 빼고 $1$ 을 더한 값이다.

직관 절의 극한 곡선은 종수 $1$ 성분 하나와 노드 하나로 되어 있으므로 산술종수가 $1+1-1+1=2$ 다. 종수 $1$ 곡면의 자기동형 가운데 표시된 두 점을 지키는 것은 유한 개이므로 안정곡선이다. 반면 종수 $1$ 곡면 둘을 사영직선 하나의 두 점 $0,\infty$ 에 각각 붙인 곡선은 산술종수가 $1+1+0+2-3+1=2$ 이지만, 사영직선 성분 위의 $z\mapsto\lambda z$ 가 모두 자기동형이 되어 안정곡선이 아니다.

## Deligne–Mumford 콤팩트화

종수 $g$ 안정곡선의 동형류 집합 $\overline{\mathcal M}\_g$ 를 **Deligne–Mumford 콤팩트화(Deligne–Mumford compactification)** 라 한다. $\mathcal M_g$ 는 그 안에서 특이점이 없는 곡선들이 차지하는 부분이다. 직관 절의 길은 $\overline{\mathcal M}\_2$ 안에서 위의 노드 곡선으로 수렴한다.

# 성질

## 오비폴드 점

자기동형군이 자명하지 않은 곡선의 점에서 $\mathcal M_g$ 는 국소적으로 매끄러운 공간을 유한군으로 나눈 몫이고, 이런 점을 오비폴드 점(orbifold point)이라 한다. 종수 $2$ 의 모든 곡선은 $(x,y)\mapsto(x,-y)$ 인 초타원 대합(hyperelliptic involution)을 가지므로 $\mathcal M_2$ 의 모든 점이 오비폴드 점이다.

## 안정성의 성분별 조건

자기동형이 유한하다는 조건은 성분으로 다시 쓸 수 있다. 각 성분을 정규화(normalization)했을 때 노드 위에 놓이는 점을 특수점이라 하면, 종수 $0$ 인 성분은 특수점을 셋 이상, 종수 $1$ 인 성분은 하나 이상 가져야 한다. 정의 절의 불안정한 예에서 사영직선 성분의 특수점은 $0,\infty$ 둘뿐이다.

## 차원

$g\ge 2$ 에서 $\dim\mathcal M_g=3g-3$ 이다. $g=2$ 이면 직관 절의 매개변수 셋과 같다.

증명의 요지. 곡선 $C$ 를 변형하는 방향은 접다발(tangent bundle)의 첫 코호몰로지 $H^1(C,T_C)$ 가 센다. $T_C$ 는 표준다발(canonical bundle) $K_C$ 의 쌍대이고 $\deg K_C=2g-2$ 이므로 $\deg T_C=2-2g$ 다. [Riemann–Roch 정리](riemann-roch.md)를 $T_C$ 에 적용하면 $\dim H^0-\dim H^1=\deg T_C+1-g=3-3g$ 이고, $g\ge 2$ 에서 $\deg T_C\lt 0$ 이므로 $H^0(C,T_C)=0$ 이다. 따라서 $\dim H^1(C,T_C)=3g-3$ 이다.

## 콤팩트성과 사영성

$\overline{\mathcal M}\_g$ 는 기약이고 콤팩트하며 사영 대수다양체의 구조를 갖는다.[^1] 경계 $\overline{\mathcal M}\_g\setminus\mathcal M_g$ 는 여차원 $1$ 의 기약 성분 $\delta_0,\delta_1,\dots,\delta_{\lfloor g/2\rfloor}$ 의 합집합이다. $\delta_0$ 은 노드를 떼면 종수 $g-1$ 의 연결 곡선이 되는 것이고, $\delta_i$ 는 종수 $i$ 와 $g-i$ 의 두 성분이 한 점에서 만나는 것이다. 직관 절의 극한 곡선은 $\delta_0\subset\overline{\mathcal M}\_2$ 에 속한다.

## Torelli 사상

곡선에 그 [Jacobi 다양체](jacobian-variety.md)를 대응시키면 사상 $t\colon\mathcal M_g\to\mathcal A_g$ 가 나온다. $\mathcal A_g$ 는 주편극 아벨 다양체(principally polarized abelian variety)의 모듈라이 공간인 [Siegel 모듈라이 다양체](siegel-modular-variety.md)다. Torelli 정리(Torelli theorem)에 따르면 $t$ 는 단사다.[^2]

두 차원은 $3g-3$ 과 $g(g+1)/2$ 다. $g=2,3$ 에서 두 수가 같고 $g\ge 4$ 에서 앞이 작으므로 $t$ 의 상이 진부분다양체다. 어떤 주편극 아벨 다양체가 Jacobi 다양체인지를 방정식으로 가리는 것이 Schottky 문제(Schottky problem)다.

## Teichmüller 공간과의 관계

$\mathcal M_g$ 는 [Teichmüller 공간](teichmuller-space.md)을 [사상류군](mapping-class-group.md)으로 나눈 몫이다.

$$
\mathcal M_g=\mathcal T_g/\mathrm{Mod}(S_g)
$$

$\mathcal T_g$ 는 $\mathbb R^{6g-6}$ 과 위상동형이고 작용은 고유 불연속이다. 실차원 $6g-6$ 이 복소차원 $3g-3$ 과 맞고, 오비폴드 점은 고정점을 갖는 사상류에서 나온다.

# 활용

- 주편극 아벨 다양체의 분류. Torelli 사상의 상이 $\mathcal A_g$ 안에서 어느 자취인지 묻는 것이 Schottky 문제이고, $g=4$ 에서 theta 상수의 다항식 하나가 그 닫힘을 정의한다.
- 교차수. 표시점을 더한 $\overline{\mathcal M}\_{g,n}$ 위에서 표시점의 여접선(cotangent line)에서 나온 유군류 $\psi_i$ 의 교차수를 모은 생성함수가 KdV 위계(Korteweg–de Vries hierarchy)를 만족한다는 것이 Witten 추측(Witten conjecture)이고, Kontsevich 가 증명했다. [Gromov–Witten 불변량](gromov-witten-invariants.md)은 이 교차수를 목표 공간이 있는 경우로 넓힌 것이다.
- 사상류군의 코호몰로지. $\mathcal T_g$ 가 축약 가능하므로 $\mathcal M_g$ 와 사상류군의 분류공간은 유리 코호몰로지가 같고, $\mathcal M_g$ 의 코호몰로지 계산이 그 군의 코호몰로지를 준다.

[^1]: P. Deligne and D. Mumford, "The Irreducibility of the Space of Curves of Given Genus", Publications mathématiques de l'IHÉS 36 (1969), 75–109.

[^2]: 복소 해석적 증명은 A. Andreotti, "On a Theorem of Torelli", American Journal of Mathematics 80 (1958), 801–828.

# 연관 문서

## 선수지식

- [모듈라이 공간](moduli-space.md)
- [Teichmüller 공간](teichmuller-space.md)
- [사상류군](mapping-class-group.md)

## 더 알아보기

- [Gromov–Witten 불변량](gromov-witten-invariants.md)

#complex_analysis #algebra #number_theory #topology
