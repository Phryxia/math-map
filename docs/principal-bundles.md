# 주다발

# 개요

**주다발(principal bundle)** 은 공간의 각 점에 같은 [Lie 군](lie-groups.md) 하나의 복사본을 붙이되, 점마다 기준점을 따로 정하지 않은 공간이다. 방향이 있는 곡면의 각 점에서 접평면의 정규직교 기저를 고르면 그 선택은 원 위의 회전만큼 자유롭고, 이런 선택 전체를 모으면 각 점 위에 원이 하나씩 붙은 공간이 된다. 주다발은 이 자유로움을 군으로 따로 떼어, [벡터다발](vector-bundles.md)과 틀다발, 그 위의 [접속](connection.md)과 [특성류](characteristic-classes.md)를 한 군으로 함께 다룬다.

# 직관

계수 $r$ 벡터다발은 국소 자명화의 전이함수 $g_{\alpha\beta}\colon U_\alpha\cap U_\beta\to\mathrm{GL}\_r(\mathbb R)$ 로 결정된다. 섬유가 어떤 모양이든 전이함수가 같으면 같은 자료이고, 전이함수가 $\mathrm{GL}\_r$ 보다 작은 군에 값을 가지면 다발에 구조가 더 있다. 직교군에 값을 가지면 섬유마다 내적이 정해지고, 행렬식이 양인 쪽에만 값을 가지면 방향이 정해진다.

섬유를 떼고 전이함수만 남기려면 섬유 자리에 군 $G$ 자체를 놓고 왼쪽 곱으로 붙인다. 그러면 오른쪽 곱이 붙임과 무관하게 섬유 위에 남아 전역에서 정의된다. 각 섬유는 $G$ 와 같지만 어느 원소가 항등인지는 정해지지 않는다. 항등을 고르는 일이 국소 단면을 고르는 일이다.

원 위의 Möbius 띠는 계수 $1$ 벡터다발이고, 원을 두 조각으로 덮으면 전이함수가 한 겹침에서 $+1$, 다른 겹침에서 $-1$ 이다. 전이함수가 군 $\lbrace\pm1\rbrace$ 에 값을 가지므로 섬유 자리에 이 군을 놓으면 각 점 위에 두 점이 붙은 공간, 곧 원을 두 번 감는 원이 된다.

# 정의

## 주다발

Lie 군 $G$ 의 오른쪽 작용을 가진 다양체 $P$ 와 매끄러운 전사 $\pi\colon P\to M$ 이 다음 셋을 만족하면 $\pi$ 를 **주 $G$ 다발(principal $G$-bundle)** 이라 한다.[^1]

- 작용이 섬유를 보존한다. 모든 $u\in P$ 와 $g\in G$ 에 대해 $\pi(u\thinspace g)=\pi(u)$ 다.
- 작용이 각 섬유에서 자유롭고 추이적이다.
- 각 점에 근방 $U$ 와 미분동형 $\varphi\colon\pi^{-1}(U)\to U\times G$ 가 있어 $\varphi(u\thinspace g)=\varphi(u)\thinspace g$ 를 만족한다.

$G$ 를 **구조군(structure group)** 이라 하고, 셋째 조건의 $\varphi$ 를 **국소 자명화(local trivialization)** 라 한다. 국소 자명화 둘이 겹치는 곳에서 $\varphi_\alpha\circ\varphi_\beta^{-1}$ 는 왼쪽 곱으로 작용하므로 전이함수 $g_{\alpha\beta}\colon U_\alpha\cap U_\beta\to G$ 를 준다.

직관 절의 이중덮개는 $\pi\colon S^1\to S^1$, $z\mapsto z^2$ 이고 $G=\lbrace\pm1\rbrace$ 가 $z\mapsto -z$ 로 작용한다. 섬유 $\lbrace z,-z\rbrace$ 위에서 작용은 자유롭고 추이적이며, 반원 위에서는 두 가지 제곱근 가운데 하나를 연속으로 고를 수 있어 국소 자명화가 있다. 따라서 주 $\lbrace\pm1\rbrace$ 다발이다. 곱 $M\times G$ 에 $(p,h)g=(p,hg)$ 로 작용시킨 것은 자명한 주 $G$ 다발이다.

## 틀다발과 결합다발

계수 $r$ 벡터다발 $E\to M$ 의 **틀다발(frame bundle)** $\mathrm{Fr}(E)$ 는 각 점에서 섬유 $E_p$ 의 순서기저 전체를 모은 것이다. 기저를 가역행렬로 바꾸는 작용이 자유롭고 추이적이므로 주 $\mathrm{GL}\_r(\mathbb R)$ 다발이다. 곡면의 접다발에 쓰면 각 점에서 접평면의 순서기저 전체가 섬유다.

거꾸로 주 $G$ 다발 $P$ 와 $G$ 의 표현 $\rho\colon G\to\mathrm{GL}(V)$ 가 주어지면 다음 **결합다발(associated bundle)** 을 만든다.

$$
P\times\_\rho V=(P\times V)/\sim,\qquad (u\thinspace g,v)\sim(u,\rho(g)v)
$$

이것은 계수 $\dim V$ 인 벡터다발이고, 전이함수는 $\rho(g_{\alpha\beta})$ 다. 원의 이중덮개에 $\rho(-1)=-1$ 인 $\mathbb R$ 위의 표현을 쓰면 전이함수가 $\pm1$ 인 계수 $1$ 다발, 곧 Möbius 띠가 나온다.

## 구조군의 축소

$H\le G$ 가 닫힌 부분군일 때, 전이함수를 모두 $H$ 에 값을 갖도록 고를 수 있으면 구조군이 $H$ 로 **축소(reduction)** 된다고 한다. 방향이 있는 곡면에 [Riemann 계량](riemannian-metrics.md)을 주고 양의 방향의 정규직교 기저만 쓰면 전이함수가 회전행렬이 되므로, 접다발의 틀다발은 구조군이 $\mathrm{SO}(2)$ 로 축소된다. 개요의 원이 붙은 공간이 이 축소된 다발이다.

## 주접속

$P$ 위의 **주접속(principal connection)** 은 $\mathfrak g$ 값 1형식 $\omega$ 로 다음 둘을 만족하는 것이다. 여기서 $\mathfrak g$ 는 $G$ 의 [Lie 대수](lie-algebras.md)이고, $A\in\mathfrak g$ 가 생성하는 섬유 방향 벡터장(기본 벡터장, fundamental vector field)을 $A^\char35{}$ 로 적는다.

- $\omega(A^\char35{})=A$ 다.
- $R_g^\ast\omega=\mathrm{Ad}(g^{-1})\circ\omega$ 다.

$\omega$ 의 핵 $H_u=\ker\omega_u$ 를 **수평 부분공간(horizontal subspace)** 이라 한다. 자명한 다발 $M\times G$ 에서 행렬군 $G$ 의 좌표로 $\omega=h^{-1}dh$ 로 두면, 기본 벡터장 $A^\char35{}=\frac{d}{dt}h\exp(tA)$ 에서 $\omega(A^\char35{})=h^{-1}hA=A$ 이고 $R_g^\ast\omega=(hg)^{-1}d(hg)=g^{-1}(h^{-1}dh)g$ 이므로 주접속이다. 수평 부분공간은 $M$ 방향 $T_pM\times 0$ 이다.

# 성질

## 수평 분해

주접속의 첫 조건으로 섬유 방향 부분공간 $V_u$ 와 수평 부분공간이 $T_uP=V_u\oplus H_u$ 로 나뉘고, 둘째 조건으로 이 분해가 작용과 양립한다.

## 자명성 판정

주 $G$ 다발이 자명한 것은 전역 단면을 갖는 것과 동치다.

증명의 요지. 단면 $s$ 가 있으면 $M\times G\to P$, $(p,g)\mapsto s(p)\thinspace g$ 가 섬유마다 전단사이고 동변이므로 동형이다. 거꾸로 자명한 다발은 $p\mapsto(p,e)$ 를 단면으로 갖는다.

원의 이중덮개 $z\mapsto z^2$ 의 단면은 원 전체에서 연속인 제곱근이고, 그런 함수는 없으므로 이 다발은 자명하지 않다. 벡터다발은 영단면을 항상 가지므로 이 판정이 성립하지 않는다.

## 벡터다발과의 대응

계수 $r$ 실벡터다발의 동형류와 주 $\mathrm{GL}\_r(\mathbb R)$ 다발의 동형류가 일대일로 대응한다.

증명의 요지. $E\mapsto\mathrm{Fr}(E)$ 와 $P\mapsto P\times\_\rho\mathbb R^r$ 가 서로 역이다. 여기서 $\rho$ 는 항등 표현이다. 두 구성이 전이함수를 그대로 두므로 합성이 항등이 된다.

## 구조군 축소와 추가 구조

구조군이 $H$ 로 축소되는 것은 주 $H$ 다발 $Q$ 와 $H$ 동변 매장 $Q\hookrightarrow P$ 가 있는 것과 동치다. 계수 $r$ 벡터다발의 틀다발이 $\mathrm{O}(r)$ 로 축소되는 것은 다발이 섬유마다의 내적을 갖는 것과 같고, $\mathrm{SO}(r)$ 로 축소되는 것은 내적과 방향을 함께 갖는 것과 같다.

증명의 요지. 내적이 있으면 정규직교 틀만 모아 주 $\mathrm{O}(r)$ 다발을 얻고, 전이함수가 직교행렬이 된다. 거꾸로 축소가 주어지면 축소된 틀을 정규직교로 선언하는 내적이 겹치는 곳에서 일치한다. $\mathrm{GL}\_r(\mathbb R)$ 가 $\mathrm{O}(r)$ 로 변형수축하므로 축소는 늘 존재하고, $\mathrm{SO}(r)$ 로의 축소는 첫 [Stiefel–Whitney 류](stiefel-whitney-classes.md)가 $0$ 인 것과 같아 늘 존재하지는 않는다.

## 접속의 두 꼴

주 $G$ 다발의 주접속과 결합 벡터다발 위의 접속이 대응한다.

증명의 요지. 수평 부분공간이 결합다발의 단면을 곡선을 따라 평행이동하는 길을 정하고, 그 평행이동의 미분이 공변미분이다. 국소 자명화에서 $\omega$ 를 당기면 $\mathfrak g$ 값 1형식 $A_\alpha$ 가 나오고, 전이함수에 대한 변환법칙 $A_\beta=\mathrm{Ad}(g_{\alpha\beta}^{-1})A_\alpha+g_{\alpha\beta}^{-1}dg_{\alpha\beta}$ 가 접속형식의 변환법칙과 같다.

## 호모토피 분류

파라콤팩트(paracompact) 공간 위의 주 $G$ 다발의 동형류는 [분류공간](classifying-spaces.md)으로 가는 사상의 호모토피류 $\lbrack M,BG\rbrack$ 와 일대일로 대응한다.

보편 다발 $EG\to BG$ 의 당김이 대응을 주고, 전사성과 단사성이 $EG$ 의 수축가능성에서 나온다.

# 활용

- [특성류](characteristic-classes.md)를 Chern–Weil 이론(Chern–Weil theory)이 주접속의 곡률 $F=d\omega+\tfrac12\lbrack\omega,\omega\rbrack$ 의 불변 다항식으로 적는다. 구조군의 불변 다항식 공간이 그 군의 특성류를 모두 준다.
- [Chern–Simons 이론](chern-simons.md)의 작용이 주접속의 1형식으로 쓰인다. 구조군이 $\mathrm{SU}(n)$ 이면 3차원 다양체 위의 주다발이 모두 자명하므로 접속을 전역 1형식으로 적을 수 있다.
- [스핀 구조](spin-structures.md)가 $\mathrm{SO}(n)$ 틀다발을 $\mathrm{Spin}(n)$ 으로 들어 올리는 축소다. 들어 올림의 존재가 둘째 Stiefel–Whitney 류로 판정되고, [Dirac 작용소](dirac-operator.md)를 세우는 데 쓰인다.
- [Lie 군](lie-groups.md)의 몫 $G\to G/H$ 가 주 $H$ 다발이다. 이 다발의 결합다발로 등질공간 위의 동변 벡터다발이 나오고, 그 단면 공간이 유도표현(induced representation)이다.
- 게이지 이론(gauge theory)이 주접속을 장으로 쓴다. 게이지 변환이 다발의 자기동형이고, 물리의 관측량은 접속의 공간을 그 군으로 나눈 몫 위의 함수다.

[^1]: Shoshichi Kobayashi and Katsumi Nomizu, *Foundations of Differential Geometry*, Vol. 1, Wiley (1963), Ch. I–II. 주다발의 정의, 틀다발과 결합다발, 구조군의 축소, 주접속이 이 두 장에 있다.

# 연관 문서

## 선수지식

- [벡터다발](vector-bundles.md)
- [Lie 군](lie-groups.md)

## 더 알아보기

- [분류공간](classifying-spaces.md)
- [스핀 구조](spin-structures.md)
- [Yang–Mills 이론](yang-mills-theory.md)

#differential_geometry #topology #algebraic_topology #group_theory
