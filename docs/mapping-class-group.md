# 사상류군

# 개요

**사상류군(mapping class group)** 은 곡면의 방향 보존 자기 미분동형을 동위 관계로 나눈 군이다. 종수 $g$ 의 닫힌 곡면에서 이 군은 단순 닫힌 곡선을 따른 Dehn 비틀림 유한 개로 생성되고, 기본군의 외부 자기동형군과 동형이다. Teichmüller 공간에 고유 불연속으로 작용하며 그 몫이 곡선의 모듈라이 공간이다.

# 직관

[곡면](classification-of-surfaces.md)을 자기 자신으로 보내는 미분동형은 무한히 많고 연속적으로 움직일 수 있다. 연속으로 이어지는 것을 같은 것으로 세면 몇 개가 남는지 토러스 $T=\mathbb R^2/\mathbb Z^2$ 에서 계산할 수 있다.

미분동형 $f\colon T\to T$ 는 기본군 $\pi_1(T)=\mathbb Z^2$ 에 자기동형을 준다. 기저 $(1,0)$ 과 $(0,1)$ 의 상을 적으면 정수 성분의 가역행렬 하나, 곧 $\mathrm{GL}\_2(\mathbb Z)$ 의 원소다. $f$ 를 연속으로 움직이면 이 행렬의 성분은 정수인 채로 연속으로 변해야 하므로 변하지 않는다. 거꾸로 $\mathrm{GL}\_2(\mathbb Z)$ 의 각 행렬은 $\mathbb R^2$ 의 선형 사상으로 $T$ 의 미분동형을 주고, 행렬이 다르면 기본군에 주는 자기동형이 달라 연속으로 이어지지 않는다. 방향을 보존하는 것으로 제한하면 행렬식이 $1$ 이다. 따라서 남는 것은 $\mathrm{SL}\_2(\mathbb Z)$ 다.

종수 $2$ 이상에서는 기본군이 아벨이 아니므로 기저의 상을 행렬로 적을 수 없고, 자기동형군 자체를 봐야 한다. 이때 내부 자기동형은 기점을 옮기는 것에서 나와 미분동형의 동위류를 바꾸지 않으므로 몫을 취한다. 남는 군이 외부 자기동형군이고, 토러스에서 $\mathrm{SL}\_2(\mathbb Z)$ 가 나온 계산이 이 군의 특수한 경우다.

# 정의

$S$ 를 방향을 준 닫힌 곡면이라 하자. **사상류군**은 방향 보존 미분동형군의 동위류 집합이다.

$$\mathrm{Mod}(S)=\pi_0(\mathrm{Diff}^+(S))=\mathrm{Diff}^+(S)/\mathrm{Diff}\_0(S)$$

$\mathrm{Diff}\_0(S)$ 는 항등사상과 동위인 미분동형들이고 정규부분군이다. 합성이 군 연산이다. 종수 $g$ 의 닫힌 곡면을 $S_g$ 로 적는다.

## Dehn 비틀림

$c$ 를 $S$ 의 단순 닫힌 곡선이라 하자. $c$ 의 고리모양 근방을 $S^1\times\lbrack 0,1\rbrack$ 로 보고 그 위에서 $(\theta,t)\mapsto(\theta+2\pi t,t)$ 로 보내고 근방 밖에서 항등인 미분동형이 $c$ 를 따른 **Dehn 비틀림** $T_c$ 다. 근방 밖이 항등이므로 $T_c$ 는 $c$ 와 만나지 않는 곡선을 움직이지 않는다.

$T_c$ 의 동위류는 $c$ 의 동위류로만 정해진다. $c$ 가 한 점으로 줄어들면 $T_c$ 가 항등류다.

# 성질

## Dehn–Nielsen–Baer 정리

$g\ge 1$ 에서 $\mathrm{Mod}(S_g)$ 는 기본군의 외부 자기동형군의 지표 $2$ 부분군과 동형이다.[^1]

$$\mathrm{Mod}(S_g)\cong\mathrm{Out}^+(\pi_1(S_g))$$

증명의 요지. 미분동형에 기본군의 자기동형을 대응시키면 준동형이 나오고, 기점의 선택이 내부 자기동형만큼의 차이를 주므로 외부 자기동형군으로 간다. 단사성은 기본군에 항등을 주는 미분동형이 보편덮개에서 항등과 동위임을 보여서 얻는다. 전사성은 $\pi_1(S_g)$ 의 자기동형이 보편덮개의 경계인 원에 동형사상을 주고, 그 동형사상을 안으로 확장하면 미분동형이 된다는 것이다. 지표 $2$ 는 방향을 뒤집는 것을 뺀 몫이다.

## 생성원

$g\ge 2$ 에서 $\mathrm{Mod}(S_g)$ 는 Dehn 비틀림 $3g-1$ 개로 생성된다.[^2] 생성원으로 잡는 곡선은 종수마다 손잡이를 지나는 곡선과 손잡이를 묶는 곡선이다. 사상류군은 유한 생성이지만 $g\ge 2$ 에서 무한군이다.

## Nielsen–Thurston 분류

$\mathrm{Mod}(S_g)$ 의 각 원소는 다음 셋 중 하나다.[^3]

- **주기적.** 어떤 멱이 항등류다.
- **환원 가능.** 서로 만나지 않는 단순 닫힌 곡선들의 모임을 보존한다.
- **의사 Anosov.** 두 횡단 측도엽층을 보존하고 한쪽을 $\lambda\gt 1$ 배, 다른 쪽을 $1/\lambda$ 배 늘인다.

$\lambda$ 는 대수적 정수이고 그 원소의 늘임률이다. 토러스에서 이 세 경우가 $\mathrm{SL}\_2(\mathbb Z)$ 원소의 대각합이 절댓값 $2$ 보다 작은 경우, 같은 경우, 큰 경우에 각각 대응한다.

## Teichmüller 공간 위의 작용

$\mathrm{Mod}(S_g)$ 는 [Teichmüller 공간](teichmuller-space.md) $\mathcal T_g$ 에 표시를 바꾸는 것으로 작용하고, 이 작용은 고유 불연속이다. 유한 위수 원소가 고정점을 가질 수 있으므로 작용은 자유롭지 않다. Bers 는 이 작용에서 원소가 점을 옮기는 거리의 하한을 [Teichmüller 정리](teichmuller-theorem.md)로 계산해 Nielsen–Thurston 분류를 증명했다.

# 활용

- **모듈라이 공간.** $\mathcal T_g$ 를 이 작용으로 나눈 몫이 [곡선의 모듈라이 공간](moduli-of-curves.md)이고, 고정점을 갖는 유한 위수 원소가 몫의 오비폴드 특이점을 준다.
- **곡면다발.** 원 위의 곡면다발은 $\mathrm{Mod}(S_g)$ 의 원소 하나로 분류되고, 그 원소가 의사 Anosov 일 때 다발의 전체공간이 쌍곡 $3$ 차원 다양체다.
- **곡선 복합체.** 단순 닫힌 곡선을 정점으로 하고 만나지 않는 것을 변으로 하는 복합체에 $\mathrm{Mod}(S_g)$ 가 작용하며, 이 작용으로 군의 유한 표시와 코호몰로지 차원을 얻는다.

[^1]: M. Dehn, "Die Gruppe der Abbildungsklassen", Acta Mathematica **69** (1938), 135–206. Nielsen 의 증명은 J. Nielsen, "Untersuchungen zur Topologie der geschlossenen zweiseitigen Flächen", Acta Mathematica **50** (1927), 189–358.

[^2]: W. B. R. Lickorish, "A Finite Set of Generators for the Homeotopy Group of a 2-Manifold", Proceedings of the Cambridge Philosophical Society **60** (1964), 769–778. 생성원 수를 $3g-1$ 로 줄인 것은 S. Humphries, "Generators for the Mapping Class Group", in Topology of Low-Dimensional Manifolds, Lecture Notes in Mathematics **722** (1979), 44–47.

[^3]: W. P. Thurston, "On the Geometry and Dynamics of Diffeomorphisms of Surfaces", Bulletin of the American Mathematical Society **19** (1988), 417–431.

# 연관 문서

## 선수지식

- [곡면의 분류](classification-of-surfaces.md)

## 더 알아보기

- [곡선의 모듈라이 공간](moduli-of-curves.md)

#topology #group_theory #complex_analysis #differential_geometry
