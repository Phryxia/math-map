# 다양체

# 개요

다양체(manifold)는 국소적으로 Euclidean 공간과 구별할 수 없는 위상 공간이다. 전역 좌표계 하나를 요구하는 대신 작은 영역마다 좌표계를 붙이고 겹치는 부분에서 좌표 변환이 맞물리도록 요구한다. 그러면 구면이나 원환면처럼 평면 위에 한 장으로 펼 수 없는 대상에서도 미분을 말할 수 있다. 좌표 변환이 매끄러우면 smooth manifold 가 되고 접공간, 벡터장, 미분형식이 따라 정의된다. 미분기하학, 일반상대성이론, 제약조건이 있는 최적화가 이 언어를 쓴다.

# 직관

지구 표면의 한 점 근처는 평면과 구별되지 않는다. 지도책은 지구 전체를 여러 장의 평면 지도로 덮고 겹치는 지역에서 좌표 변환 규칙을 제공한다. 다양체의 정의는 이 지도책의 공리화이며, chart 와 transition map 이 두 재료다.

```mermaid
flowchart LR
  M["다양체 M 의 겹치는 영역 U1 ∩ U2"]
  A["R^n 의 열린집합 (chart 1 좌표)"]
  B["R^n 의 열린집합 (chart 2 좌표)"]
  M -->|"phi_1 (위상동형)"| A
  M -->|"phi_2 (위상동형)"| B
  A -->|"transition map phi_2 ∘ phi_1^-1"| B
```

transition map 은 Euclidean 공간 사이의 함수이므로 매끄러움을 다변수 미적분으로 판정하고, 그 판정을 다양체 위의 구조로 옮긴다.

원 전체를 하나의 좌표로 덮으려 하면 시작점과 끝점이 붙어 실패한다. 위쪽 반원과 아래쪽 반원, 또는 북극과 남극을 각각 뺀 두 조각으로 덮으면 각 조각이 열린 구간과 위상동형이다.

# 정의

$M$ 을 위상공간, $n$ 을 음이 아닌 정수라 하자. $M$ 이 $n$ 차원 위상다양체(topological manifold)라는 것은 $M$ 이 Hausdorff 이고 second countable 이며 국소적으로 Euclidean 이라는 뜻이다[^1]. 국소 Euclidean 조건은 다음이다.

$$
\forall p\in M\ \exists\thinspace U\subseteq M \text{ 열린집합},\ p\in U,\ \exists\thinspace \varphi:U\xrightarrow{\ \cong\ }\varphi(U)\subseteq\mathbb{R}^{n}
$$

화살표는 위상동형(homeomorphism)이고 상 집합은 $\mathbb{R}^n$ 의 열린집합이다. 쌍 $(U,\varphi)$ 가 chart, $\varphi$ 가 국소좌표계다. Hausdorff 조건은 점들을 분리하고 second countable 조건은 공간이 지나치게 커지는 것을 막는다. 두 조건을 빼면 국소 Euclidean 만으로는 아래 정리들이 성립하지 않는다.

$M$ 을 덮는 chart 들의 모음이 atlas 이고, 두 chart 가 겹칠 때 좌표를 바꾸는 함수가 transition map 이다.

$$
\varphi_\beta\circ\varphi_\alpha^{-1}:\ \varphi_\alpha(U_\alpha\cap U_\beta)\longrightarrow \varphi_\beta(U_\alpha\cap U_\beta)
$$

## 매끄러운 구조

atlas 의 모든 transition map 이 무한히 미분가능하면 그 atlas 가 smooth atlas 다. transition map 은 Euclidean 공간의 열린집합 사이의 함수이므로 이 조건은 [미분](derivative.md)의 통상적 의미로 검사된다. 서로 합쳐도 smooth atlas 가 되는 atlas 들을 동일시하면 각 류에 극대 smooth atlas 가 하나 있고, 이것이 매끄러운 구조(smooth structure)다. 위상다양체에 매끄러운 구조를 지정한 것이 smooth manifold 다.

$M$, $N$ 을 smooth manifold 라 하자. $F:M\to N$ 이 매끄러운 사상이라는 것은 각 점에서 적절한 chart 로 표현한 합성이 매끄럽다는 뜻이다.

$$
\psi\circ F\circ\varphi^{-1}\ \text{가 } C^{\infty}
$$

## 접공간

접공간은 곡선의 속도벡터를 좌표에 의존하지 않게 정의한 것이다. derivation 을 쓰면 $p$ 에서의 접공간이 다음이다.

$$
T_pM=\bigl\lbrace\thinspace X:C^{\infty}(M)\to\mathbb{R}\ \big|\ X \text{ 는 선형},\ X(fg)=X(f)\thinspace g(p)+f(p)\thinspace X(g)\thinspace\bigr\rbrace
$$

오른쪽 조건이 Leibniz 규칙이다. $T_pM$ 은 [벡터 공간](vector-spaces.md)이고 차원은 $n$ 이며, chart $(U,\varphi)$ 의 좌표 $x$ 로부터 다음이 기저가 된다.

$$
\left.\frac{\partial}{\partial x^{1}}\right|_{p},\ \dots,\ \left.\frac{\partial}{\partial x^{n}}\right|_{p}
$$

# 성질

## 차원 불변성

비어 있지 않은 위상다양체가 $n$ 차원이면서 $m$ 차원일 수는 없다. Euclidean 공간의 열린집합 사이에 위상동형이 있으면 차원이 같다는 Brouwer 의 차원 불변성이 근거이며, [단체 호몰로지](homology.md)로 증명된다. 미분가능성을 가정하면 미분사상이 선형동형이 되어 더 짧게 얻어진다.

## 정규값 정리

$F:M\to N$ 을 매끄러운 사상, $c\in N$ 이라 하자. $F$ 의 미분사상이 $F^{-1}(c)$ 의 모든 점에서 전사이면 $c$ 가 regular value 이고, 역상은 $M$ 의 부분다양체이며 차원은 다음과 같다[^1].

$$
\dim F^{-1}(c)=\dim M-\dim N
$$

좌표의 제곱합을 취하는 함수에서 1 은 regular value 이므로

$$
S^{n}=\Bigl\lbrace\thinspace x\in\mathbb{R}^{n+1}\ \Big|\ \textstyle\sum_{i=1}^{n+1}x_i^{2}=1\thinspace\Bigr\rbrace
$$

는 $n$ 차원 smooth manifold 다. 같은 방식으로 직교행렬 전체와 행렬식이 1 인 행렬 전체가 다양체가 된다.

## 표준 예시

- 구면: 북극과 남극을 각각 제거하는 stereographic projection 두 개의 chart 로 덮인다.
- 원환면: 원의 곱공간이며 2차원 compact 다양체다.
- 실사영공간: $\mathbb{R}^{n+1}$ 에서 원점을 지나는 직선들의 집합으로 $n$ 차원 compact 다양체다. 구면의 대칭점을 동일시한 몫공간이며 [동치관계와 동치류](relations.md)의 전형적 사용이다.
- 열린집합: Euclidean 공간의 임의의 열린집합은 그 자체로 다양체다.
- 반례: 두 직선을 한 점에서 교차시킨 집합은 교차점 근처가 직선과 위상동형이 아니므로 다양체가 아니다.

## 매끄러운 구조의 비유일성

차원 4 이하의 위상다양체에서는 매끄러운 구조가 있으면 미분동형을 빼고 유일하다. $\mathbb{R}^4$ 에는 서로 미분동형이 아닌 매끄러운 구조가 비가산 개 있고, 7차원 구면에는 표준적이지 않은 매끄러운 구조가 존재한다(Milnor 의 exotic sphere)[^2]. 위상적 정보와 미분적 정보가 다른 층위다.

## compact 다양체

compact 다양체는 유한 개의 chart 로 덮인다. 2차원 compact 연결 다양체는 [Euler 지표](euler-characteristic.md)와 방향성만으로 완전히 분류된다.

# 활용

- 일반상대성이론은 시공간을 4차원 Lorentz 다양체로 보고 [곡률](curvature.md)로 중력장을 기술한다.
- 직교성 제약이나 고정 rank 제약처럼 제약조건 집합이 다양체이면 좌표 없이 접공간 위에서 경사법을 돌린다. [경사하강법](gradient-descent.md)의 manifold 변형이다.
- Lie group 은 군 연산이 매끄러운 다양체다. [군](groups.md)의 구조와 다양체 구조가 양립하므로 [군 작용](group-actions.md)을 미분적으로 다룬다.
- 위상적 불변량은 다양체를 조각으로 분해해 계산한다. [기본군](fundamental-group.md)과 [단체 호몰로지](homology.md)가 대표적이다.

정규값 정리를 구면에 적용하는 계산은 다음과 같다.

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
- [s-코보디즘 정리와 고차원 Poincaré 추측](s-cobordism.md)
- [Lie 대수](lie-algebras.md)
- [미분형식과 Stokes 정리](differential-forms.md)

#differential_geometry #topology
