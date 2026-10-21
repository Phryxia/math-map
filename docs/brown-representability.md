# Brown 표현 정리

# 개요

**Brown 표현 정리(Brown representability theorem)** 는 밑점을 가진 연결 [CW 복합체](cw-complexes.md)(CW complex)의 호모토피 범주에서 집합으로 가는 반변 함자가 두 공리, 곧 쐐기합 공리와 Mayer–Vietoris 공리를 만족하면 [표현 가능 함자](representable-functors.md)라는 정리다. 표현하는 공간은 호모토피 동치를 빼고 하나다.

[Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md)이 코호몰로지를 표현하고 분류공간이 다발의 동형류를 표현하는 것이 이 정리의 경우다. 함자가 두 공리를 만족하는지만 확인하면 표현하는 공간을 따로 만들지 않아도 존재가 보장된다.

# 직관

[Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md) 문서는 $X$ 에서 $K(G,n)$ 으로 가는 사상의 호모토피류가 $H^n(X;G)$ 와 같다는 것을 보였다. 코호몰로지가 공간 하나로 가는 사상의 집합으로 적힌 것이다. 그러면 어떤 함자가 이렇게 공간 하나로 가는 사상의 집합으로 적히는지가 질문이 된다.

$F(X)=\lbrack X,Y\rbrack$ 꼴인 함자에는 두 성질이 있다. 쐐기합 $\bigvee X\_\alpha$ 에서 $Y$ 로 가는 사상은 각 $X\_\alpha$ 에서 가는 사상을 따로 고른 것과 같으므로 $F(\bigvee X\_\alpha)=\prod F(X\_\alpha)$ 이다. $X=A\cup B$ 이면 $A$ 와 $B$ 에서의 사상이 $A\cap B$ 에서 호모토픽할 때 호모토피 확장 성질로 둘을 붙여 $X$ 에서의 사상을 얻는다. 코호몰로지에서 이 두 번째 성질은 [Mayer–Vietoris 완전열](mayer-vietoris.md)의 일부다.

Brown 정리는 이 두 성질이 충분하다고 말한다. 표현하는 공간 $Y$ 는 세포를 붙여 만든다. 구면 $S^n$ 마다 $F(S^n)$ 의 원소를 실현하도록 구면을 붙이고, 같은 원소를 주는 두 사상을 하나로 만들도록 원판을 붙이는 것을 차원마다 반복한다.

# 정의

$\mathbf{Ho}\_\ast$ 를 밑점을 가진 연결 CW 복합체와 밑점을 보존하는 사상의 호모토피류가 이루는 범주라 한다. 반변 함자 $F:\mathbf{Ho}\_\ast^{\mathrm{op}}\to\mathbf{Set}\_\ast$ 가 다음을 만족한다고 한다.

- **쐐기합 공리(wedge axiom).** 포함 사상들이 주는 사상 $F\bigl(\bigvee\_\alpha X\_\alpha\bigr)\to\prod\_\alpha F(X\_\alpha)$ 가 전단사다.
- **Mayer–Vietoris 공리.** $X$ 가 부분복합체 $A$, $B$ 의 합집합이고 $a\in F(A)$, $b\in F(B)$ 가 $F(A\cap B)$ 에서 같은 원소로 제한되면, $A$ 와 $B$ 로 각각 $a$ 와 $b$ 로 제한되는 $x\in F(X)$ 가 존재한다.

원소 $u\in F(Y)$ 가 모든 $X$ 에서 $\lbrack X,Y\rbrack\to F(X)$, $f\mapsto F(f)(u)$ 를 전단사로 만들면 $(Y,u)$ 가 $F$ 를 표현한다고 하고, $u$ 를 보편원소라 한다.

# 성질

## 정리

**정리(Brown, 1962).** 두 공리를 만족하는 $F$ 는 표현 가능하다. 곧 CW 복합체 $Y$ 와 $u\in F(Y)$ 가 있어 $\lbrack X,Y\rbrack\cong F(X)$ 가 $X$ 에 대해 자연스럽다. $Y$ 는 호모토피 동치를 빼고 유일하다[^1].

증명의 요지. $Y\_0$ 를 $F(S^n)$ 의 원소마다 구면 $S^n$ 을 하나씩 둔 쐐기합으로 시작하고, 쐐기합 공리로 각 성분이 그 원소인 $u\_0\in F(Y\_0)$ 를 잡는다. $\pi\_n(Y\_k)\to F(S^n)$ 의 핵의 원소마다 $(n+1)$ 차원 원판을 붙여 $Y\_{k+1}$ 을 만들고, Mayer–Vietoris 공리로 $u\_k$ 를 $u\_{k+1}$ 로 연장한다. 극한 $Y$ 에서 $\pi\_n(Y)\to F(S^n)$ 이 모든 $n$ 에서 전단사이고, 세포에 대한 귀납으로 모든 CW 복합체에서 $\lbrack X,Y\rbrack\to F(X)$ 가 전단사임을 보인다. 유일성은 [Yoneda 보조정리](yoneda-lemma.md)와 Whitehead 정리에서 나온다.

## 표현되는 함자의 예

| 함자 $F(X)$ | 표현하는 공간 |
| --- | --- |
| $H^n(X;G)$ | Eilenberg–MacLane 공간 $K(G,n)$ |
| 구조군이 $G$ 인 주다발의 동형류 | [분류공간](classifying-spaces.md) $BG$ |
| 계수 $k$ 인 복소 [벡터다발](vector-bundles.md)의 동형류 | 무한 [Grassmann 다양체](grassmannian.md) $\mathrm{Gr}(k,\mathbb C^\infty)$ |
| 위상 K 이론 $\widetilde K^0(X)$ | $BU$ |

다발의 경우는 쐐기합 공리와 Mayer–Vietoris 공리가 다발을 붙이는 조작에서 나온다. 계수 $k$ 를 고정한 벡터다발은 연결 공간에서 정의되므로 정리의 가정에 맞는다.

## 일반화 코호몰로지와 스펙트럼

일반화 코호몰로지 이론 $E^\ast$ 는 차수마다 두 공리를 만족하므로 $E^n(X)=\lbrack X,E\_n\rbrack$ 인 공간 $E\_n$ 이 존재한다. 현수 동형 $E^n(X)\cong E^{n+1}(\Sigma X)$ 가 $E\_n\simeq\Omega E\_{n+1}$ 을 주므로, 일반화 코호몰로지 이론은 이런 공간의 열인 $\Omega$ 스펙트럼으로 표현된다.

## 삼각범주 판본

Neeman 은 콤팩트 생성 삼각범주에서 쌍대곱을 곱으로 보내는 코호몰로지 함자가 표현 가능함을 증명했다[^2]. 이 판본은 [유도 범주](derived-categories.md)에서 Grothendieck 쌍대성의 오른쪽 수반 함자가 존재함을 보이는 데 쓴다.

# 활용

- **코호몰로지 연산.** $H^m$ 에서 $H^n$ 으로 가는 자연변환은 Yoneda 보조정리로 $H^n(K(G,m);G')$ 의 원소와 같다. [Steenrod 연산](steenrod-operations.md)이 이 방식으로 분류된다.
- **분류 문제.** 어떤 구조의 동형류가 두 공리를 만족함을 보이면 그 구조를 분류하는 공간이 존재하고, 구조를 세는 문제가 그 공간으로 가는 사상을 세는 문제가 된다.
- **안정 호모토피 이론.** 스펙트럼의 범주가 일반화 코호몰로지 이론을 대상으로 다루는 근거가 이 정리다.

[^1]: E. H. Brown, "Cohomology theories", *Annals of Mathematics* 75 (1962), 467–484. A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, 4.E 절.
[^2]: A. Neeman, "The Grothendieck duality theorem via Bousfield's techniques and Brown representability", *Journal of the American Mathematical Society* 9 (1996), 205–236.

# 연관 문서

## 선수지식

- [표현 가능 함자](representable-functors.md)
- [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #category_theory #topology
