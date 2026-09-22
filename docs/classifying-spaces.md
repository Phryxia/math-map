# 분류공간

# 개요

분류공간은 다발을 세는 문제를 사상의 호모토피류를 세는 문제로 바꾸는 공간이다. 위상군 $G$ 마다 공간 $BG$ 와 그 위의 주다발 $EG \to BG$ 가 있어, 파라콤팩트 공간 $X$ 위의 주 $G$ 다발이 연속사상 $X \to BG$ 의 호모토피류와 일대일로 대응한다.

[특성류](characteristic-classes.md)는 이 대응에서 $BG$ 의 [코호몰로지](cohomology.md) 원소를 당긴 것이다. $H^\ast(BU(n))$ 이 Chern 류로 생성되는 [다항식환](polynomial-rings.md)이라는 계산이 Chern 류의 항등식을 전부 담는다.

# 직관

공간 $X$ 위의 랭크 $r$ 인 [벡터다발](vector-bundles.md)을 동형을 빼고 전부 세려 한다. 자료는 덮개 $\lbrace U\_\alpha\rbrace$ 와 전이함수 $g\_{\alpha\beta} : U\_\alpha \cap U\_\beta \to \mathrm{GL}\_r$ 의 모임이다. 덮개를 더 잘게 나누면 다른 자료가 같은 다발을 주므로 이 목록을 직접 셀 수 없다.

$X = S^n$ 에서 해 본다. 위아래 반구는 각각 수축가능하므로 다발이 자명하고, 남는 자료는 적도에서 두 자명화를 붙이는 사상 $S^{n-1} \to \mathrm{GL}\_r$ 하나다. 이 사상을 연속으로 움직여도 다발은 동형인 채로 있으므로, $S^n$ 위의 다발은 [호모토피군](homotopy-groups.md) $\pi\_{n-1}(\mathrm{GL}\_r)$ 의 원소가 센다. 덮개가 두 조각뿐이라 이 계산이 끝났다.

일반 $X$ 에서는 덮개가 몇 조각이 될지 모른다. 대신 다발 자체를 한 공간으로 보낸다. 랭크 $r$ 다발은 각 점에 $r$ 차원 벡터공간을 붙인 것이므로, 다발을 큰 공간 $\mathbb R^N$ 안에 넣을 수 있으면 점 $x$ 를 그 위의 $r$ 차원 부분공간으로 보내는 사상 $X \to \mathrm{Gr}\_r(\mathbb R^N)$ 이 생긴다. Grassmann 다양체 위에는 각 점인 부분공간을 그대로 올린 정준 다발이 있고, 원래 다발은 이 사상으로 정준 다발을 당긴 것이다.

$X$ 가 콤팩트하면 유한한 $N$ 으로 충분하지만 $N$ 은 $X$ 에 따라 달라진다. $N$ 을 무한으로 키운 $\mathrm{Gr}\_r(\mathbb R^\infty)$ 는 모든 $X$ 에서 통한다. 호모토픽한 두 사상이 당긴 다발은 동형이므로, 다발을 세는 문제가 $\lbrack X, \mathrm{Gr}\_r(\mathbb R^\infty)\rbrack$ 를 세는 문제가 된다.

# 정의

## 주다발

위상군 $G$ 가 오른쪽에서 자유롭게 작용하는 공간 $P$ 와 사영 $p : P \to X$ 가 **주 $G$ 다발**이라는 것은, $X$ 의 각 점에 근방 $U$ 가 있어 $p^{-1}(U)$ 가 $G$ 동변 위상동형으로 $U \times G$ 와 같다는 뜻이다. 랭크 $r$ 벡터다발의 기저 전체를 모은 틀다발이 주 $\mathrm{GL}\_r$ 다발이고, 이 대응으로 벡터다발과 주 $\mathrm{GL}\_r$ 다발이 같은 것을 센다.

## 보편 다발과 분류공간

$EG$ 가 수축가능하고 $G$ 가 자유롭게 작용하는 공간일 때, 주다발 $EG \to EG/G$ 를 **보편 다발**, 밑공간 $BG = EG/G$ 를 $G$ 의 **분류공간**이라 한다.

**정리(Milnor)**[^1]**.** 모든 위상군 $G$ 에 대해 $EG$ 가 존재한다.

$G$ 의 사본을 무한히 많이 결합한 $G \ast G \ast \dots$ 가 수축가능하고 대각 작용이 자유롭다. ∎

$EG$ 는 호모토피 동치를 빼고 유일하므로 $BG$ 도 그렇다.

# 성질

## 분류 정리

**정리**[^2]**.** $X$ 가 파라콤팩트이면 $\lbrack X, BG\rbrack \to \mathrm{Prin}\_G(X)$, $f \mapsto f^\ast EG$ 가 전단사다.

전사성은 $X$ 위의 주다발 $P$ 에서 $G$ 동변 사상 $P \to EG$ 를 만들어 얻고, 단사성은 $X \times \lbrack 0,1\rbrack$ 위의 다발이 두 끝에서 같은 제한을 가지면 전체가 당김임을 쓴다. 두 단계 모두 $EG$ 의 수축가능성에서 나온다. ∎

## 호모토피군

올다발 $F\to E\to B$ 는 호모토피군의 긴 완전열 $\dots\to\pi\_n(F)\to\pi\_n(E)\to\pi\_n(B)\to\pi\_{n-1}(F)\to\dots$ 을 준다. 보편 다발에 이것을 적용하면 $E G$ 가 수축가능하므로 $\pi\_n(BG) \cong \pi\_{n-1}(G)$ 다. 이산군에서는 $BG$ 가 $\pi\_1 = G$ 이고 나머지 호모토피군이 $0$ 인 공간, 곧 $K(G,1)$ 이다.

| $G$ | $BG$ | 비고 |
| --- | --- | --- |
| $\mathbb Z/2$ | $\mathbb{RP}^\infty$ | $K(\mathbb Z/2, 1)$ |
| $\mathbb Z$ | $S^1$ | $K(\mathbb Z, 1)$ |
| $U(1)$ | $\mathbb{CP}^\infty$ | $K(\mathbb Z, 2)$ |
| $O(n)$ | $\mathrm{Gr}\_n(\mathbb R^\infty)$ | 실 랭크 $n$ 다발 |
| $U(n)$ | $\mathrm{Gr}\_n(\mathbb C^\infty)$ | 복소 랭크 $n$ 다발 |

## 특성류의 보편성

**정리**[^3]**.** $H^\ast(BU(n);\mathbb Z) = \mathbb Z\lbrack c\_1,\dots,c\_n\rbrack$ 이고 $H^\ast(BO(n);\mathbb F\_2) = \mathbb F\_2\lbrack w\_1,\dots,w\_n\rbrack$ 이다. 여기서 $\deg c\_i = 2i$, $\deg w\_i = i$ 다.

$\mathrm{Gr}\_n$ 의 Schubert 세포 분할로 코호몰로지를 계산하고, 분할 원리로 생성원이 기본 대칭식임을 확인한다. ∎

랭크 $n$ 복소다발의 특성류, 곧 동형에 불변이고 당김과 교환하는 코호몰로지류의 배정은 전부 $H^\ast(BU(n))$ 의 원소를 당긴 것이다. 분류 정리가 다발을 사상으로 바꾸므로 그 배정이 $BU(n)$ 위에서 무엇을 주는지만 정하면 된다.

## 군 코호몰로지와의 일치

이산군 $G$ 에서 $H^\ast(BG;M)$ 은 군 코호몰로지 $H^\ast(G;M)$ 과 같다. $EG \to BG$ 가 보편 덮개이고 $EG$ 의 특이사슬 복합체가 $\mathbb Z G$ 위의 자유 분해가 되기 때문이다.

# 활용

- 특성류를 정의하는 자리다. Chern 류를 곡률로 정의하면 접속에 의존하지 않음을 따로 보여야 하지만, $H^\ast(BU(n))$ 의 생성원으로 정의하면 당김의 함자성에서 바로 나온다.
- $K$ 이론의 분류공간이 $\mathbb Z \times BU$ 다. 콤팩트 $X$ 에서 $K^0(X) = \lbrack X, \mathbb Z \times BU\rbrack$ 이고, [Fredholm 작용소](fredholm-operators.md) 공간이 같은 호모토피형을 갖는다.
- 대수적 $K$ 이론에서 환 $R$ 의 $K$ 군을 $\mathrm{GL}(R)$ 의 분류공간에 세포를 붙여 정의한다. [대수적 $K$ 이론](algebraic-k-theory.md)의 plus 구성이 그 절차다.
- 게이지 이론에서 주다발의 모듈라이를 다룰 때 다발의 동형류가 $\lbrack X, BG\rbrack$ 로 이산화되고, 그 안에서 접속의 공간을 게이지군으로 나눈다.

[^1]: J. Milnor, "Construction of universal bundles II", *Annals of Mathematics* 63 (1956), 430–436.

[^2]: D. Husemoller, *Fibre Bundles*, 3rd ed., Springer (1994), Ch. 4. 파라콤팩트 밑공간에서 분류 정리와 당김의 호모토피 불변성을 증명한다.

[^3]: J. Milnor and J. Stasheff, *Characteristic Classes*, Princeton University Press (1974), §14, §7. Chern 류와 Stiefel–Whitney 류가 분류공간의 코호몰로지를 생성함을 보인다.

# 연관 문서

## 선수지식

- [특성류](characteristic-classes.md)

## 더 알아보기

- [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md)

#algebraic_topology #topology #differential_geometry
