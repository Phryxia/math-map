# Tannaka 쌍대성

# 개요

**Tannaka 쌍대성(Tannaka duality)** 은 군이 벡터 공간에 작용하는 방법들의 모임만 알면 원래 군을 다시 만들 수 있다는 정리다. 정삼각형의 대칭군은 1 차원 공간에 두 가지로, 평면에 한 가지로 작용하고, 이 세 작용은 군의 원소를 [행렬](matrices.md)로 바꾼다. 작용들을 따로 보면 군의 구조가 다 드러나지 않지만, 두 작용을 텐서곱으로 합치는 방법과 각 작용의 밑 벡터 공간까지 함께 기록하면 군이 정해진다. Tannaka 쌍대성은 표현 전체와 그 사이의 텐서곱 구조로 이루어진 범주에서 군을 복원한다.

# 직관

정삼각형의 [대칭군](symmetric-groups.md) $S_3$ 의 1 차원 표현은 모든 원소를 $1$ 로 보내는 자명 표현과, 뒤집기를 $-1$ 로 보내는 부호 표현 둘뿐이다. 두 표현 모두 항등과 두 회전을 $1$ 로 보내므로, 1 차원 표현만 보아서는 이 세 원소를 구별할 수 없다. 유한 아벨군은 1 차원 표현들로 복원되지만 $S_3$ 에서는 이 방법이 막힌다.

군 $G$ 의 원소 $g$ 는 [표현](group-representations.md) $(V,\rho_V)$ 마다 선형사상 $\rho_V(g)$ 를 하나씩 준다. 이 선형사상들의 모임은 두 성질을 갖는다. 표현 사이의 사상 $f:V\to W$ 에 대해 $f\circ\rho_V(g)=\rho_W(g)\circ f$ 이고, 텐서곱에서 $\rho_{V\otimes W}(g)=\rho_V(g)\otimes\rho_W(g)$ 다. 앞의 것은 사상과 교환한다는 뜻이고 뒤의 것은 텐서곱과 호환한다는 뜻이다.

그러면 반대로 묻는다. 표현마다 선형사상 $\eta_V$ 를 주고 이 두 성질을 만족하는 모임이 있을 때, 그것이 어떤 $g$ 에서 오는가. 이런 모임 전체는 합성으로 군을 이루고 $G$ 에서 그 군으로 가는 준동형이 있다. Tannaka 쌍대성은 이 준동형이 동형이라는 것이다. $1$ 차원 표현만 쓰면 모자랐던 정보를 모든 표현과 텐서곱 호환성이 채운다. $S_3$ 의 두 회전은 평면 표현에서 $120°$ 회전 행렬과 $240°$ 회전 행렬로 갈린다.

# 정의

## 강체 대칭 모노이드 범주

체 $k$ 위의 아벨 범주 $\mathcal C$ 가 $k$ 선형 대칭 [모노이드 범주](monoidal-categories.md)이고, 모든 대상이 쌍대 대상(dual object)을 가지며 $\mathrm{End}(\mathbf 1)=k$ 일 때 $\mathcal C$ 를 **강체 대칭 모노이드 범주(rigid symmetric monoidal category)** 라 한다. $\mathbf 1$ 은 텐서곱의 단위 대상이다.

복소수체 위에서 $S_3$ 의 유한차원 표현의 범주 $\mathrm{Rep}\_{\mathbb C}(S_3)$ 는 강체 대칭 모노이드 범주다. 단위 대상은 자명 표현이고, 표현 $V$ 의 쌍대 대상은 쌍대공간 $V^\ast$ 에 $g$ 가 $\rho_V(g^{-1})$ 의 전치로 작용하는 표현이다.

## 섬유함자

$\mathrm{Vec}\_k$ 를 $k$ 위 유한차원 벡터공간의 범주라 한다. 완전(exact)하고 충실한(faithful) $k$ 선형 텐서함자(tensor functor)

$$
\omega:\mathcal C\to\mathrm{Vec}\_k
$$

를 **섬유함자(fiber functor)** 라 한다. 텐서함자라는 것은 $\omega(V\otimes W)\cong\omega(V)\otimes\omega(W)$ 인 동형이 결합법칙과 대칭과 호환되게 주어졌다는 뜻이다. 섬유함자를 가진 강체 대칭 모노이드 범주를 **Tannaka 범주(Tannakian category)** 라 한다. $\mathrm{Rep}\_{\mathbb C}(S_3)$ 에서 각 표현을 밑벡터공간으로 보내는 망각 함자가 섬유함자다.

## 텐서 자기동형군

$k$ 대수 $R$ 마다

$$
\mathrm{Aut}^{\otimes}(\omega)(R)=\lbrace(\eta_V)\_{V\in\mathcal C}:\eta_V\in\mathrm{GL}(\omega(V)\otimes_kR)\rbrace
$$

로 두고, 각 $\eta_V$ 가 $\mathcal C$ 의 사상과 교환하며 $\eta_{V\otimes W}=\eta_V\otimes\eta_W$ 와 $\eta_{\mathbf 1}=\mathrm{id}$ 를 만족하는 것만 모은다. $R$ 을 달리는 이 대응이 함자를 이루고, 합성이 군 구조를 준다. 이 함자를 $\omega$ 의 **텐서 자기동형군(tensor automorphism group)** 이라 한다.

$\mathrm{Rep}\_{\mathbb C}(S_3)$ 와 망각 함자에서 원소 $g\in S_3$ 는 $\eta_V=\rho_V(g)$ 로 $\mathrm{Aut}^{\otimes}(\omega)(\mathbb C)$ 의 원소 하나를 준다.

# 성질

## 복원 정리

$G$ 가 체 $k$ 위의 아핀 군 스킴(affine group scheme)이고 $\mathrm{Rep}\_k(G)$ 가 그 유한차원 표현의 범주, $\omega$ 가 밑벡터공간을 주는 섬유함자이면

$$
\mathrm{Aut}^{\otimes}(\omega)\cong G
$$

이다.[^1]

$G\to\mathrm{Aut}^{\otimes}(\omega)$ 는 $g$ 를 $(\rho_V(g))$ 로 보내는 사상이다. 단사성은 $G$ 의 좌표환이 정칙표현(regular representation)의 행렬성분으로 생성되므로 모든 표현에서 자명하게 작용하는 원소가 단위원뿐임에서 나온다. 전사성은 정칙표현을 쓴다. 정칙표현 위의 $\eta$ 가 좌표환의 대수 자기준동형을 주고, 텐서곱 호환성이 그것을 쌍대곱과 교환하게 만들므로 $\eta$ 가 $G$ 의 점 하나에서 온다. ∎

## 인식 정리

$\mathcal C$ 가 Tannaka 범주이면 $G=\mathrm{Aut}^{\otimes}(\omega)$ 는 아핀 군 스킴이고 $\omega$ 가 동등

$$
\mathcal C\simeq\mathrm{Rep}\_k(G)
$$

를 유도한다.[^1]

$\omega$ 의 상에 작용하는 $G$ 의 작용을 주면 $\omega$ 가 $\mathrm{Rep}\_k(G)$ 로 올라가고, 강체성과 $\mathrm{End}(\mathbf 1)=k$ 가 이 올림이 범주 동등임을 준다. 강체성이 없으면 군 대신 모노이드 꼴 대상이 나온다. ∎

## 콤팩트군의 경우

콤팩트 위상군 $G$ 는 유한차원 유니타리 표현의 범주와 그 위의 텐서곱에서 복원된다.[^2] [Peter–Weyl 정리](peter-weyl.md)가 유한차원 표현의 행렬성분이 $L^2(G)$ 에서 조밀함을 주므로 표현 범주가 $G$ 의 정보를 다 담는다. 이 판본이 Tannaka 와 Kreĭn 의 결과다.

## 꼬임 범주의 복원

섬유함자가 대칭과 호환한다는 조건을 꼬임과 호환하는 것으로 바꾸면 복원되는 대상은 군이 아니다. 꼬임이 대칭이 아닌 경우에 나오는 것이 양자군(quantum group)의 표현 범주이고, 섬유함자가 아예 없으면 군 스킴 대신 대수적 대상을 복원한다.

# 활용

- [미분 Galois 이론](differential-galois-theory.md). 선형 미분방정식의 해들이 이루는 미분가군의 범주가 Tannaka 범주이고, 그 텐서 자기동형군이 방정식의 미분 Galois 군이다. 군의 차원이 해의 대수적 독립성을 재는 양이 된다.
- 모티브 Galois 군(motivic Galois group). 모티브(motive)의 범주가 Tannaka 범주라는 가정 아래 그 복원군을 모티브 Galois 군이라 한다. 이 군의 표현이 [Galois 표현](galois-representations.md)의 모티브적 설명을 준다.
- [기하적 Satake 대응](geometric-satake.md)은 아핀 Grassmann 다양체 위 반전가능 층의 범주에 텐서 구조를 주고, 그 범주의 복원군이 Langlands 쌍대군임을 보인다. 쌍대군의 구성이 이 정리의 결론으로 나온다.
- 표현 범주의 비교. 두 Tannaka 범주가 동등한지를 복원군의 동형으로 바꿔 판정한다. 섬유함자가 둘 있으면 두 복원군이 꼬임 꼴로 연결되고, 그 차이가 섬유함자 사이의 동형의 존재 문제로 옮겨진다.

[^1]: P. Deligne, J. S. Milne, "Tannakian categories", in *Hodge Cycles, Motives, and Shimura Varieties*, Lecture Notes in Math. **900**, Springer (1982), 101–228. 복원 정리와 인식 정리가 2절에 있다. 앞선 서술은 N. Saavedra Rivano, *Catégories Tannakiennes*, Lecture Notes in Math. **265** (1972).
[^2]: T. Tannaka, "Über den Dualitätssatz der nichtkommutativen topologischen Gruppen", *Tôhoku Math. J.* **45** (1938), 1–12, 그리고 M. Kreĭn 의 1949년 결과.

# 연관 문서

## 선수지식

- [군의 표현](group-representations.md)
- [모노이드 범주](monoidal-categories.md)

## 더 알아보기

아직 연결한 문서가 없다.

#category_theory #group_theory #algebra
