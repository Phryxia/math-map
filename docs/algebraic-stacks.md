# 대수적 스택

# 개요

**대수적 스택(algebraic stack)** 은 대상들을 분류할 때 동형류만이 아니라 대상 사이의 동형사상까지 기억하는 기하적 대상이다. 원점을 뺀 직선 위의 두 겹 덮개 $t\mapsto t^2$ 은 모든 섬유가 두 점이어서 점마다 보면 자명한 덮개와 같지만 전체로는 자명하지 않으므로, 동형류만 모은 [모듈라이 공간](moduli-space.md)으로는 두 덮개를 구별하지 못한다. 스택은 섬유의 두 점을 맞바꾸는 자기동형까지 남겨, 자명한 조각을 그 자기동형으로 붙여 만든 덮개를 따로 기억한다.

# 직관

대수적 스택은 스킴 $S$ 마다 $S$ 위의 대상과 그 사이의 동형사상을 함께 대응시키는 군준 범주로, 국소적으로 주어진 대상과 동형이 붙여지고 스킴으로 덮이는 것이다. 모듈라이 공간의 모듈라이 함자는 대상의 동형류만 남기므로 자기동형이 있으면 [표현 가능 함자](representable-functors.md)가 되지 못한다. 동형류의 집합 대신 동형사상까지 남긴 군준을 쓰면 표현 가능성 대신 스택이 되고, 그 스택이 섬세 모듈라이 공간의 역할을 한다.

위수 $2$ 인 군 $G=\mathbb Z/2$ 의 주다발, 곧 $G$ 가 섬유마다 자유롭고 추이적으로 작용하는 두 겹 덮개 $P\to S$ 를 분류하려 한다. 한 점 위의 두 겹 덮개는 두 점 집합 하나뿐이므로 모듈라이 함자 $F(S)=\lbrace S\text{ 위의 주 }G\text{ 다발}\rbrace/\cong$ 에서 $F(\mathrm{pt})$ 는 원소가 하나다. $F$ 를 스킴 $M$ 이 표현하면 $M$ 은 한 점이다.

원점을 뺀 아핀직선 $S=\mathbb G\_m$ 위의 두 겹 덮개 $t\mapsto t^2$ 은 모든 섬유가 두 점이지만 연결이므로 자명한 덮개 $S\times G$ 와 동형이 아니다. $M$ 이 한 점이면 $S\to M$ 은 상수 사상 하나뿐이고, 그 당김은 자명한 덮개다. 그래서 $F$ 는 표현 가능하지 않다. 섬유 하나에는 두 점을 맞바꾸는 자기동형이 있고, 연결된 덮개는 자명한 조각들을 이 자기동형으로 붙여 얻는다. 동형류만 세면 붙이는 데 쓴 자기동형이 사라진다.

그래서 $S$ 마다 집합이 아니라 $S$ 위의 주 $G$ 다발들과 그 사이의 동형사상들이 이루는 군준(groupoid)을 둔다. 한 점 위의 군준은 대상이 하나이고 그 자기동형군이 $G$ 다. 이 대응이 분류 스택 $BG$ 이고, $S$ 에서 $BG$ 로 가는 사상은 $S$ 위의 주 $G$ 다발 그 자체다.

# 정의

## 군준 범주

모든 사상이 동형사상인 범주를 **군준(groupoid)** 이라 한다. 스킴의 범주 $\mathbf{Sch}$ 위의 **군준 범주(category fibered in groupoids)** 는 함자 $p\colon\mathcal X\to\mathbf{Sch}$ 로서, 각 $S$ 위의 섬유 $\mathcal X(S)$ 가 군준이고 사상 $T\to S$ 를 따라 $\mathcal X(S)$ 의 대상을 $\mathcal X(T)$ 로 당길 수 있는 것이다. 당김은 동형을 빼고 유일하다.

스킴 $X$ 는 $\mathcal X(S)=\mathrm{Hom}(S,X)$ 를 항등사상만 있는 군준으로 보아 군준 범주가 된다. [Yoneda lemma](yoneda-lemma.md)를 군준 범주로 확장한 2 Yoneda 보조정리(2-Yoneda lemma)로 $S$ 에서 $\mathcal X$ 로 가는 사상의 군준은 $\mathcal X(S)$ 와 동치다.

## 스택

군준 범주 $\mathcal X$ 가 다음 두 조건을 만족하면 **스택(stack)** 이라 한다. 조건은 에탈 위상(étale topology)의 덮개 $\lbrace S\_i\to S\rbrace$ 마다 요구한다.

1. $\mathcal X(S)$ 의 두 대상 사이의 동형사상은 $S\_i$ 위의 동형사상들이 겹치는 곳에서 일치하면 하나로 붙는다.
2. $S\_i$ 위의 대상들과 겹치는 곳에서의 동형사상들이 세 겹치는 곳에서 서로 맞으면, 그것들을 당김으로 갖는 $S$ 위의 대상이 있다. 이 조건이 **강하(descent)** 다.

## 대수적 스택과 Deligne–Mumford 스택

스택 $\mathcal X$ 가 다음을 만족하면 **대수적 스택** 이라 한다[^1].

- 대각사상 $\mathcal X\to\mathcal X\times\mathcal X$ 가 대수 공간(algebraic space)으로 표현 가능하다.
- 스킴 $U$ 와 매끄러운 전사 사상 $U\to\mathcal X$ 가 있다. $U$ 를 **아틀라스(atlas)** 라 한다.

아틀라스를 에탈 사상으로 잡을 수 있으면 **Deligne–Mumford 스택(Deligne–Mumford stack)** 이라 한다[^2]. 특성 $0$ 에서 대수적 스택이 Deligne–Mumford 스택인 것과 모든 점의 자기동형군이 유한하고 축소된 것은 동치다.

## 몫 스택

군 스킴 $G$ 가 스킴 $X$ 에 작용하면 **몫 스택(quotient stack)** $\lbrack X/G\rbrack$ 는 $S$ 마다 주 $G$ 다발 $P\to S$ 와 $G$ 동변 사상 $P\to X$ 의 쌍들이 이루는 군준을 대응시킨다. $X$ 가 한 점이면 $\lbrack\mathrm{pt}/G\rbrack=BG$ 다.

# 성질

## 자유 작용의 몫

$G$ 가 $X$ 에 자유롭게 작용하고 몫 스킴 $X/G$ 가 있어 $X\to X/G$ 가 주 $G$ 다발이면 $\lbrack X/G\rbrack$ 는 스킴 $X/G$ 와 동치다. 대상 $(P\to S,\thinspace P\to X)$ 가 사상 $S\to X/G$ 를 정하고, 거꾸로 $S\to X/G$ 를 따라 $X\to X/G$ 를 당기면 대상이 나온다. 군준의 자기동형은 $P$ 의 $G$ 작용 가운데 $P\to X$ 를 보존하는 것이고, 자유 작용에서는 항등사상뿐이다.

## 조대 모듈라이 공간

점마다의 자기동형군 스킴을 모은 관성(inertia) $I\_{\mathcal X}\to\mathcal X$ 가 유한 사상인 대수적 스택 $\mathcal X$ 에는 조대 모듈라이 공간 $\mathcal X\to M$ 이 있고 $M$ 은 대수 공간이다. 이것이 Keel–Mori 정리(Keel–Mori theorem)다[^3]. 타원곡선의 모듈라이 스택 $\mathcal M\_{1,1}$ 은 모든 점이 자기동형 $-1$ 을 가져 스킴이 아니고, 그 조대 모듈라이 공간이 $j$ 직선이다.

## 곡선의 모듈라이 스택

$g\ge 2$ 에서 종수 $g$ 곡선의 모듈라이 스택 $\mathcal M\_g$ 는 매끄러운 Deligne–Mumford 스택이다. 안정곡선을 더한 $\overline{\mathcal M}\_g$ 는 고유(proper)하고 매끄러운 Deligne–Mumford 스택이다. 안정곡선의 자기동형군이 유한하고 축소된 것이 Deligne–Mumford 판정에 쓰이고, 고유성은 안정 축소 정리(stable reduction theorem)로 증명된다[^2].

# 활용

- [곡선의 모듈라이 공간](moduli-of-curves.md)의 Deligne–Mumford 콤팩트화는 스택 $\overline{\mathcal M}\_g$ 의 조대 모듈라이 공간이다. Deligne 과 Mumford 는 $\overline{\mathcal M}\_g$ 위에서 $\mathcal M\_g$ 가 기약임을 증명했다[^2].
- [Gromov–Witten 불변량](gromov-witten-invariants.md)은 안정 사상의 모듈라이 스택 위에서 적분해 정의한다. 자기동형이 있는 점에서 적분값이 유리수가 된다.
- [모듈러 곡선](modular-curves.md)은 복소수 위에서 몫 $\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H$ 이고, 스택으로는 $\mathcal M\_{1,1}$ 의 해석적 판 $\lbrack\mathbb H/\mathrm{SL}\_2(\mathbb Z)\rbrack$ 이다.

[^1]: M. Artin, Versal deformations and algebraic stacks, *Invent. Math.* 27 (1974), 165–189.
[^2]: P. Deligne, D. Mumford, The irreducibility of the space of curves of given genus, *Publ. Math. IHÉS* 36 (1969), 75–109.
[^3]: S. Keel, S. Mori, Quotients by groupoids, *Ann. of Math.* 145 (1997), 193–213.

# 연관 문서

## 선수지식

- [모듈라이 공간](moduli-space.md)
- [표현 가능 함자](representable-functors.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #category_theory
