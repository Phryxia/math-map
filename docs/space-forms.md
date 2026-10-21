# 공간형

# 개요

**공간형(space form)** 은 단면곡률이 모든 점과 모든 $2$ 차원 방향에서 같은 상수 $\kappa$ 인 완비 연결 Riemann 다양체다. 단순연결인 공간형은 $\kappa$ 의 부호에 따라 구면, Euclid 공간, 쌍곡공간 셋뿐이고(Killing–Hopf 정리, Killing–Hopf theorem), 모든 공간형은 이 셋 가운데 하나를 등거리변환으로 이루어진 군으로 나눈 몫이다.

그래서 공간형을 분류하는 문제는 세 모형 공간의 [등거리변환군](isometry-groups.md)에서 고정점 없이 작용하는 이산 부분군을 찾는 문제가 된다. 곡률이라는 국소적 조건과 [기본군](fundamental-group.md)이라는 대역적 자료가 이 몫 구성에서 만난다.

# 직관

정사각형 $\lbrack 0,1\rbrack^2$ 의 마주 보는 변을 같은 방향으로 붙이면 원환면이 나온다. 정사각형 안에서는 평면의 거리를 그대로 쓰고, 변을 넘어가는 곡선은 맞은편 변에서 다시 들어온다고 보면 이 원환면의 모든 점 근처가 평면 조각과 같다. 곡률은 국소적인 양이므로 이 원환면의 Gauss 곡률은 어디서나 $0$ 이다.

이 원환면은 평면 $\mathbb R^2$ 에서 정수 성분만큼 평행이동한 점끼리 같은 점으로 본 몫 $\mathbb R^2/\mathbb Z^2$ 이다. 원환면 위의 측지선을 평면으로 펼치면 직선이고, 원환면의 한 점에서 출발한 측지선은 평면의 직선이 정수 격자점의 평행이동만큼 겹쳐진 것이다.

곡률이 $0$ 이 아닌 상수인 곡면도 같은 방식으로 얻는다. 곡률 $1$ 인 곡면은 국소적으로 단위구면과 같고, 곡률 $-1$ 인 곡면은 국소적으로 쌍곡평면과 같다. 그러면 곡률이 상수인 곡면은 평면, 구면, 쌍곡평면 가운데 하나를 등거리변환의 군으로 나눈 것인지가 질문이 되고, 완비성을 가정하면 답이 그렇다. 이런 다양체를 공간형이라 한다.

# 정의

## 모형 공간

$\kappa\in\mathbb R$ 마다 단순연결 완비 Riemann 다양체 $M^n\_\kappa$ 를 다음으로 둔다.

| 곡률 | 모형 | 계량 |
| --- | --- | --- |
| $\kappa\gt 0$ | 구면 | $\mathbb R^{n+1}$ 안의 반지름 $1/\sqrt\kappa$ 인 구면의 유도 계량 |
| $\kappa=0$ | Euclid 공간 | $\mathbb R^n$ 의 표준 계량 |
| $\kappa\lt 0$ | 쌍곡공간 | 상반공간 $\lbrace x\_n\gt 0\rbrace$ 위의 $\vert dx\vert^2/(-\kappa\thinspace x\_n^2)$ |

세 모형은 모든 점과 방향에서 단면곡률이 $\kappa$ 이고, 등거리변환군이 점과 그 점의 정규직교기저를 임의로 옮긴다. 쌍곡 반평면의 계량은 [Riemann 계량](riemannian-metrics.md) 문서의 $n=2$, $\kappa=-1$ 경우다.

## 공간형

완비 연결 Riemann 다양체 $M$ 의 단면곡률이 상수 $\kappa$ 이면 $M$ 을 **공간형** 이라 한다. $\kappa$ 의 부호에 따라 구면형(spherical), 평탄(flat), 쌍곡(hyperbolic) 공간형이라 부른다.

# 성질

## Killing–Hopf 정리

**정리.** $M$ 이 $n$ 차원 공간형이고 단면곡률이 $\kappa$ 이면, $M$ 의 보편덮개는 $M^n\_\kappa$ 와 등거리이고

$$
M\cong M^n\_\kappa/\Gamma
$$

이다. 여기서 $\Gamma\cong\pi\_1(M)$ 은 $M^n\_\kappa$ 의 등거리변환군의 부분군이고, $M^n\_\kappa$ 에 고정점 없이 진불연속으로 작용한다[^1].

증명의 요지. 보편덮개 $\widetilde M$ 에 덮개사상으로 계량을 당겨 오면 $\widetilde M$ 도 완비이고 단면곡률이 $\kappa$ 다. 단면곡률이 상수이면 [측지선](geodesics.md) 위의 Jacobi 장이 모형 함수로 정해지므로, 한 점의 지수사상으로 적은 계량이 $M^n\_\kappa$ 의 지수사상으로 적은 계량과 같다. 이것으로 국소 등거리 $\widetilde M\to M^n\_\kappa$ 가 생기고, 완비성과 단순연결성으로 전체 등거리가 된다. 덮개변환군이 $\Gamma$ 다.

거꾸로 등거리변환군의 부분군 $\Gamma$ 가 고정점 없이 진불연속으로 작용하면 몫 $M^n\_\kappa/\Gamma$ 는 공간형이다. [덮개공간](covering-spaces.md)의 몫 사상이 국소 등거리이기 때문이다.

## 구면형 공간형

$\kappa\gt 0$ 이면 $M$ 은 콤팩트이므로 $\Gamma$ 는 유한군이다.

- $n$ 이 짝수이면 $\Gamma$ 는 자명하거나 위수 $2$ 이고, $M$ 은 구면 $S^n$ 이나 실사영공간 $\mathbb{RP}^n$ 이다. $n+1$ 이 홀수이므로 행렬식이 $1$ 인 직교변환은 고윳값 $1$ 을 가져 구면 위에 고정점이 있다. 그래서 $\Gamma$ 의 항등원 아닌 원소는 행렬식이 $-1$ 이고, 그런 두 원소의 곱은 행렬식이 $1$ 이므로 항등원이다.
- $n=3$ 이면 $\Gamma$ 는 $\mathrm{SO}(4)$ 의 유한 부분군 가운데 $S^3$ 에 고정점 없이 작용하는 것이다. 순환군이 주는 몫이 [렌즈 공간](lens-spaces.md)이고, 이진 정이십면체군이 주는 몫이 Poincaré 호몰로지 구면이다.

## 평탄 공간형

$\kappa=0$ 이면 $\Gamma$ 는 $\mathbb R^n$ 의 등거리변환군 $\mathbb R^n\rtimes\mathrm O(n)$ 의 부분군이다. $M$ 이 콤팩트이면 Bieberbach 정리(Bieberbach theorems)에 따라 $\Gamma$ 의 평행이동 부분이 유한 지표의 [격자](lattices.md)이고, 차원마다 콤팩트 평탄 공간형은 아핀 동형을 빼고 유한 개다[^2]. $2$ 차원에서는 원환면과 Klein 병 둘이고, $3$ 차원에서는 $10$ 개이며 그 가운데 $6$ 개가 방향가능이다.

## 쌍곡 공간형과 곡면

$2$ 차원에서 닫힌 곡면 $\Sigma$ 의 상수곡률 계량의 부호는 [Gauss–Bonnet 정리](gauss-bonnet.md)

$$
\kappa\cdot\mathrm{area}(\Sigma)=2\pi\chi(\Sigma)
$$

가 정한다. 구면과 사영평면만 $\kappa\gt 0$, 원환면과 Klein 병만 $\kappa=0$ 이고, $\chi(\Sigma)\lt 0$ 인 나머지 곡면은 모두 쌍곡 공간형이다. 종수 $g\ge 2$ 인 방향가능 곡면은 쌍곡평면을 $\mathrm{PSL}\_2(\mathbb R)$ 의 이산 부분군으로 나눈 몫이고, 넓이는 $4\pi(g-1)$ 이다.

$n\ge 3$ 에서 닫힌 쌍곡 공간형은 기본군이 같으면 등거리다(Mostow 강성, Mostow rigidity)[^3]. [쌍곡 3 다양체](hyperbolic-3-manifolds.md)가 이 경우다.

# 활용

- **비교 기하의 기준.** [측지선의 비교정리](geodesic-comparison-theorems.md)는 단면곡률에 한계가 있는 다양체를 같은 한계의 모형 공간 $M^n\_\kappa$ 와 견준다.
- **3 차원 다양체의 기하화.** Thurston 의 여덟 기하 가운데 셋이 구면, Euclid, 쌍곡 공간형의 기하다. [Ricci 흐름](ricci-flow.md)은 양의 Ricci 곡률을 가진 닫힌 3 다양체를 구면형 공간형으로 변형한다.
- **결정학.** Bieberbach 정리는 결정의 대칭을 기술하는 공간군(crystallographic group) 전체에 대해 증명되었다. 공간군 가운데 고정점 없이 작용하는 것이 콤팩트 평탄 공간형의 기본군이다.

[^1]: J. A. Wolf, *Spaces of Constant Curvature*, 6판, American Mathematical Society, 2011, 2 장. Killing–Hopf 정리와 몫 구성.
[^2]: Wolf, 같은 책, 3 장. Bieberbach 정리와 3 차원 평탄 공간형 열 개의 목록.
[^3]: G. D. Mostow, *Strong Rigidity of Locally Symmetric Spaces*, Annals of Mathematics Studies 78, Princeton University Press, 1973.

# 연관 문서

## 선수지식

- [측지선](geodesics.md)
- [덮개공간](covering-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #topology #group_theory
