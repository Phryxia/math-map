# 다양체

# 개요

다양체(manifold)는 국소적으로 Euclidean 공간과 구별할 수 없는 위상 공간이다. 전역 좌표계 하나를 요구하지 않고, 작은 영역마다 좌표계를 붙인 뒤 겹치는 부분에서 좌표 변환이 잘 맞물리도록 요구한다. 이렇게 하면 구면이나 원환면처럼 평면 위에 한 장으로 펼 수 없는 대상에서도 미분을 말할 수 있다. 좌표 변환이 매끄러우면 smooth manifold가 되고 접공간, 벡터장, 미분형식이 따라 정의된다. 미분기하학, 일반상대성이론, 제약조건이 있는 최적화가 모두 이 언어를 쓴다.

# 직관

지구 표면 위의 한 점 근처만 보면 평면과 구별할 수 없다. 지도책은 지구 전체를 한 장에 담는 대신 여러 장의 평면 지도로 덮고, 두 지도가 겹치는 지역에서는 한 지도의 좌표를 다른 지도의 좌표로 바꾸는 규칙을 제공한다. 다양체의 정의는 이 지도책을 그대로 공리화한 것이다: 덮개 역할을 하는 chart들과, 그 사이를 오가는 transition map들.

```mermaid
flowchart LR
  M["다양체 M 의 겹치는 영역 U1 ∩ U2"]
  A["R^n 의 열린집합 (chart 1 좌표)"]
  B["R^n 의 열린집합 (chart 2 좌표)"]
  M -->|"phi_1 (위상동형)"| A
  M -->|"phi_2 (위상동형)"| B
  A -->|"transition map phi_2 ∘ phi_1^-1"| B
```

핵심은 transition map이 Euclidean 공간 사이의 함수라는 점이다. 따라서 "매끄럽다"는 성질을 이미 알고 있는 다변수 미적분으로 판정할 수 있고, 그 판정을 다양체 위의 구조로 옮겨 심는다.

원의 예를 보자. 원 전체를 하나의 좌표로 덮으려 하면 시작점과 끝점이 붙어 버려 실패한다. 하지만 위쪽 반원과 아래쪽 반원, 또는 북극과 남극을 각각 뺀 두 조각으로 덮으면 각 조각은 열린 구간과 위상동형이다.

# 정의

M을 위상공간, n을 음이 아닌 정수라 하자. M이 n차원 위상다양체(topological manifold)라는 것은 M이 Hausdorff이고 second countable이며 국소적으로 Euclidean이라는 뜻이다[^1]. 국소 Euclidean 조건은 다음과 같다.

$$
\forall p\in M\ \exists\, U\subseteq M \text{ 열린집합},\ p\in U,\ \exists\, \varphi:U\xrightarrow{\ \cong\ }\varphi(U)\subseteq\mathbb{R}^{n}
$$

여기서 화살표는 위상동형(homeomorphism)이고 상 집합은 R의 n차 곱공간의 열린집합이다. 쌍 (U, φ)를 chart, φ를 국소좌표계라 부른다. Hausdorff 조건은 점들을 분리할 수 있게 하고 second countable 조건은 공간이 지나치게 커지는 것을 막는다. 두 조건을 빼면 국소 Euclidean만으로는 원하는 정리가 성립하지 않는다.

M을 덮는 chart들의 모음을 atlas라 한다. 두 chart가 겹칠 때 좌표를 바꾸는 함수가 transition map이다.

$$
\varphi_\beta\circ\varphi_\alpha^{-1}:\ \varphi_\alpha(U_\alpha\cap U_\beta)\longrightarrow \varphi_\beta(U_\alpha\cap U_\beta)
$$

## 매끄러운 구조

atlas의 모든 transition map이 무한히 미분가능한 함수일 때 그 atlas를 smooth atlas라 한다. transition map은 Euclidean 공간의 열린집합 사이의 함수이므로 이 조건은 [미분](derivative.md)의 통상적 의미로 검사된다. 서로 합쳐도 여전히 smooth atlas가 되는 atlas들을 동일시하면 각 동일시 류에 극대 smooth atlas가 하나 있고, 이를 매끄러운 구조(smooth structure)라 한다. 위상다양체에 매끄러운 구조를 지정한 것이 smooth manifold다.

M, N을 smooth manifold라 하자. 함수 F를 M에서 N으로 가는 매끄러운 사상이라 하는 것은 각 점에서 적절한 chart를 잡아 좌표로 표현한 합성이 매끄럽다는 뜻이다.

$$
\psi\circ F\circ\varphi^{-1}\ \text{가 } C^{\infty}
$$

## 접공간

접공간은 곡선의 속도벡터를 좌표에 의존하지 않게 정의한 것이다. 여러 동등한 정의가 있는데, 대수적으로 가장 짧은 것은 derivation을 쓰는 방식이다. M 위의 매끄러운 실함수 전체의 집합을 아래처럼 쓰면 p에서의 접공간은

$$
T_pM=\bigl\{\,X:C^{\infty}(M)\to\mathbb{R}\ \big|\ X \text{ 는 선형},\ X(fg)=X(f)\,g(p)+f(p)\,X(g)\,\bigr\}
$$

이다. 오른쪽 조건이 Leibniz 규칙이다. 이는 [벡터 공간](vector-spaces.md)이고 차원은 n이며, chart (U, φ)의 좌표 x로부터 다음이 기저가 된다.

$$
\left.\frac{\partial}{\partial x^{1}}\right|_{p},\ \dots,\ \left.\frac{\partial}{\partial x^{n}}\right|_{p}
$$

# 성질

## 차원은 잘 정의된다

같은 비어 있지 않은 위상다양체가 n차원이면서 m차원일 수는 없다. Euclidean 공간의 열린집합 사이에 위상동형이 있으면 차원이 같다는 사실(Brouwer의 차원 불변성)이 근거이며, 이는 [단체 호몰로지](homology.md)로 증명된다. 미분가능성을 가정하면 미분사상이 선형동형이 되어 훨씬 쉽게 얻어진다.

## 정규값 정리

F를 M에서 N으로 가는 매끄러운 사상, c를 N의 점이라 하자. F의 미분사상이 F의 역상의 모든 점에서 전사이면 c를 regular value라 하고, 이때 역상은 M의 부분다양체이며 차원은 다음과 같다[^1].

$$
\dim F^{-1}(c)=\dim M-\dim N
$$

이 정리가 예시를 대량으로 공급한다. 예를 들어 좌표의 제곱합을 취하는 함수에서 1은 regular value이므로

$$
S^{n}=\Bigl\{\,x\in\mathbb{R}^{n+1}\ \Big|\ \textstyle\sum_{i=1}^{n+1}x_i^{2}=1\,\Bigr\}
$$

는 n차원 smooth manifold다. 같은 방식으로 직교행렬 전체, 행렬식이 1인 행렬 전체 등이 다양체가 된다.

## 표준 예시

- 구면: 두 개의 chart로 덮을 수 있다(북극과 남극을 각각 제거하는 stereographic projection).
- 원환면: 원의 곱공간이며 2차원 compact 다양체다.
- 실사영공간: R의 n+1차 곱공간에서 원점을 지나는 직선들의 집합으로, n차원 compact 다양체다. 구면의 대칭점을 동일시한 몫공간으로도 얻어지며 [동치관계와 동치류](relations.md)의 전형적 사용이다.
- 열린집합: Euclidean 공간의 임의의 열린집합은 그 자체로 다양체다.
- 반례: 두 직선을 한 점에서 교차시킨 집합은 교차점 근처가 직선과 위상동형이 아니므로 다양체가 아니다.

## 매끄러운 구조는 유일하지 않을 수 있다

차원 4 이하의 위상다양체에서는 매끄러운 구조가 (있으면) 본질적으로 유일하지만, R의 4차 곱공간에는 서로 미분동형이 아닌 매끄러운 구조가 비가산 개 있다. 또 7차원 구면에는 표준적이지 않은 매끄러운 구조가 존재한다(Milnor의 exotic sphere)[^2]. 위상적 정보와 미분적 정보가 다른 층위임을 보여주는 예다.

## compact 다양체

compact 다양체는 유한 개의 chart로 덮인다. 2차원 compact 연결 다양체는 [Euler 지표](euler-characteristic.md)와 방향성만으로 완전히 분류된다.

# 활용

- 일반상대성이론은 시공간을 4차원 Lorentz 다양체로 본다. [곡률](curvature.md)이 중력장을 기술한다.
- 최적화에서 제약조건 집합이 다양체이면(예: 직교성 제약, 고정 rank 제약) 좌표를 쓰지 않고 접공간 위에서 경사법을 돌린다. [경사하강법](gradient-descent.md)의 manifold 변형이 그것이다.
- Lie group은 군 연산이 매끄러운 다양체다. [군](groups.md)의 구조와 다양체 구조가 양립하므로 [군 작용](group-actions.md)을 연속적·미분적으로 다룰 수 있다.
- 위상적 불변량 계산은 다양체를 조각으로 분해해 수행한다. [기본군](fundamental-group.md)과 [단체 호몰로지](homology.md)가 대표적이다.

정규값 정리로 다양체임을 확인하는 계산 예는 다음과 같다.

```python
import numpy as np

# F(x) = x·x - 1 의 미분은 2x^T 이다. x ≠ 0 이면 전사이므로
# 1 은 regular value 이고 F^{-1}(0) = S^{n-1} 은 (n-1)차원 다양체다.
def dF(x):
    return 2.0 * np.asarray(x)[None, :]

x = np.array([0.6, 0.8, 0.0])
print(np.linalg.matrix_rank(dF(x)))  # 1 = dim N, 따라서 전사
```

[^1]: J. M. Lee, *Introduction to Smooth Manifolds*, 2nd ed., Ch. 1 (다양체·chart·atlas), Ch. 3 (접공간), Ch. 5 (정규값 정리와 부분다양체). 정의의 요약은 USTC 강의노트에서도 확인할 수 있다. http://staff.ustc.edu.cn/~wangzuoq/Courses/21F-Manifolds/Notes/Lec02.pdf
[^2]: J. Milnor, "On manifolds homeomorphic to the 7-sphere", *Annals of Mathematics* 64 (1956), 399–405. https://doi.org/10.2307/1969983

# 연관 문서

## 선수지식

- [위상 공간](topology.md)
- [미분](derivative.md)

## 더 알아보기

- [Riemann 계량과 측지선](riemannian-metrics.md)
