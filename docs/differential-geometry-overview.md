# 미분기하 개관

# 개요

미분기하는 미적분이 되는 공간 위에서 휘어짐을 재고, 그 국소량의 적분이 위상 불변량이 되는 현상을 다룬다. 물음은 "국소적으로 잰 곡률이 공간 전체에 대해 무엇을 결정하는가" 이고, 답의 원형은 Gauss–Bonnet 정리다. 곡면의 곡률을 적분하면 [Euler 지표](euler-characteristic.md)가 나온다.

미분기하의 갈래는 네 줄기다. 미분이 정의되는 공간인 다양체와 그 위의 미분형식, 계량과 곡률, Hodge 이론에서 지표 정리로 가는 해석적 갈래, 그리고 Lie 군 위의 게이지 이론이다. 위상 불변량 쪽은 [위상수학 개관](topology-overview.md)에, 대수 쪽 기반은 [Lie 대수](lie-algebras.md)에 있다.

시작은 [다양체](manifolds.md)와 [곡률](curvature.md)이다. 둘이 [Riemann 계량](riemannian-metrics.md)에서 만나 거리를 가진 다양체가 되고, 거기서 [Gauss–Bonnet 정리](gauss-bonnet.md)와 [Hodge 이론](hodge-theory.md)으로 갈라진 뒤 [지표 정리](index-theorem.md)에서 다시 만난다.

# 지도

```mermaid
graph TD
  DV["미분"] --> MF["다양체"]
  TP["위상 공간"] --> MF
  DV --> CV["곡률"]
  IP["내적 공간"] --> CV
  MF --> DF["미분형식"]
  MF --> RM["Riemann 계량"]
  CV --> RM
  DF --> DR["de Rham 코호몰로지"]
  DR --> HT["Hodge 이론"]
  RM --> HT
  EC["Euler 지표"] --> GB["Gauss–Bonnet 정리"]
  RM --> GB
  GB --> PH["Poincaré–Hopf 정리"]
  GB --> IX["지표 정리"]
  HT --> IX
  HT --> KM["Kähler 다양체"]
  IX --> RR["Riemann–Roch 정리"]
  RM --> H3["쌍곡 3 다양체"]
  LA["Lie 대수"] --> LG["Lie 군"]
  CS2["덮개공간"] --> LG
  LG --> CS["Chern–Simons 이론"]
  DR --> CS
  CS --> WZ["Wess–Zumino–Witten 모형"]
```

# 갈래

## 다양체와 미분형식

- [다양체](manifolds.md): 국소적으로 유클리드 공간인 위상공간과 매끄러운 구조
- [단위분할](partitions-of-unity.md): 국소에서 정의한 대상을 전역으로 붙이는 매끄러운 무게 함수족
- [Whitney 매장 정리](whitney-embedding.md): $n$ 차원 다양체가 $\mathbb R^{2n}$ 에 매장된다는 정리, 좌표 사상을 단위분할로 묶는 구성
- [벡터다발](vector-bundles.md): 점마다 붙인 벡터 공간, 전이함수와 접속, 곡률
- [접다발](tangent-bundle.md): 접공간을 모은 다발, 좌표변환의 야코비가 전이함수, 평행화 가능성
- [특성류](characteristic-classes.md): 곡률의 불변 다항식이 주는 코호몰로지류, Chern–Weil 이론
- [벡터장](vector-fields.md): 접다발의 단면, 흐름과 Lie 괄호, 영점의 지수
- [Lie 미분](lie-derivative.md): 흐름으로 끌어온 텐서장의 미분, Cartan 공식과 불변성 판정
- [미분형식](differential-forms.md): 좌표에 의존하지 않는 적분과 외미분
- [Morse 이론](morse-theory.md): 매끄러운 함수의 임계점이 주는 세포 구조와 Betti 수의 하한
- [심플렉틱 다양체](symplectic-manifolds.md): 닫힌 비퇴화 2 형식, Hamilton 벡터장과 Darboux 정리
- [여접다발](cotangent-bundle.md): 좌표 없이 정의되는 표준 1 형식과 그 외미분이 주는 심플렉틱 구조, 정준변환
- [Hamilton 역학](hamiltonian-mechanics.md): 속도를 운동량으로 바꾼 1차 방정식계, 에너지 보존과 흐름의 심플렉틱 성질

## 계량과 곡률

- [곡률](curvature.md): 곡선과 곡면의 휘어짐, Gauss 곡률과 평균 곡률
- [Riemann 계량](riemannian-metrics.md): 접공간의 내적, Levi-Civita 접속, 측지선 방정식
- [측지선](geodesics.md): 가속도의 접성분이 0 인 곡선, 지수사상과 Hopf–Rinow 정리, 켤레점
- [측지선의 비교정리](geodesic-comparison-theorems.md): 곡률의 상한과 하한으로 Jacobi 장을 상수곡률 모형과 견준다, Rauch 와 Cartan-Hadamard 와 Bonnet-Myers
- [Killing 벡터장](killing-vector-fields.md): 계량을 보존하는 흐름, 측지선을 따르는 보존량과 차원 상한
- [Gauss–Bonnet 정리](gauss-bonnet.md): 곡률 적분이 Euler 지표를 준다
- [Ricci 흐름](ricci-flow.md): 계량을 Ricci 곡률로 변형하는 열방정식 꼴 흐름, 특이점과 수술
- [Ricci 솔리톤](ricci-solitons.md): 확대에 변하지 않는 자기상사해, 특이점의 모형
- [Poincaré–Hopf 정리](poincare-hopf.md): 벡터장의 특이점 지수의 합도 Euler 지표다
- [쌍곡 3 다양체](hyperbolic-3-manifolds.md): 3 차원에서 쌍곡 계량이 위상으로 결정된다

## Hodge 이론과 지표 정리

- [Hodge 이론](hodge-theory.md): 코호몰로지류마다 조화형식 대표원이 하나
- [Kähler 다양체](kahler-manifolds.md): 복소구조와 계량이 양립할 때의 분해
- [지표 정리](index-theorem.md): 타원작용소의 해석적 지표가 위상적 지표와 같다
- [Riemann–Roch 정리](riemann-roch.md): 곡선 위 선다발의 단면 차원을 세는 공식

## Lie 군과 게이지 이론

- [Lie 군](lie-groups.md): 군 구조와 매끄러운 구조를 함께 가진 공간
- [Chern–Simons 이론](chern-simons.md): 3 차원 다양체 위의 위상적 게이지 이론
- [Wess–Zumino–Witten 모형](wess-zumino-witten.md): 경계의 공형장론과의 대응

# 연관 문서

## 선수지식

- [집합](sets.md)

## 더 알아보기

- [다양체](manifolds.md)
- [곡률](curvature.md)
- [Lie 군](lie-groups.md)

#differential_geometry #topology #overview
