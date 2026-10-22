# Novikov 추측

# 개요

**Novikov 추측(Novikov conjecture)** 은 닫힌 방향 다양체 $M$ 과 연속사상 $f\colon M\to BG$ 에 대해, 고차 부호수

$$
\mathrm{sign}\_x(M,f)=\langle L(M)\cup f^\ast x,\lbrack M\rbrack\rangle\qquad(x\in H^\ast(BG;\mathbb Q))
$$

가 방향을 보존하는 호모토피 동치에서 바뀌지 않는다는 추측이다. $L(M)$ 은 [Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)의 $L$ 류이고, $BG$ 는 이산군 $G$ 의 [분류공간](classifying-spaces.md)이다. Novikov 가 1970 년에 제시했다[^1].

# 직관

Hirzebruch 부호수 정리는 $\mathrm{sign}(M)=\langle L(M),\lbrack M\rbrack\rangle$ 이다. 좌변은 코호몰로지의 컵곱만으로 정해지므로 호모토피 동치에서 바뀌지 않는다. 우변의 [Pontryagin 류](pontryagin-classes.md)는 하나하나가 호모토피 불변이 아니지만 $L$ 류를 기본류에 짝지은 이 수 하나는 불변이다. $L(M)$ 에 다른 코호몰로지류를 곱해 짝지은 수도 불변인지 묻는다.

$f\colon M\to S^1$ 이 매끄럽고 한 점 $p$ 가 정칙값이면 $N=f^{-1}(p)$ 는 법다발이 자명한 여차원 $1$ 의 닫힌 부분다양체다. $x$ 를 $H^1(S^1;\mathbb Q)$ 의 생성원으로 두면 $f^\ast x$ 는 $N$ 의 [Poincaré 쌍대](poincare-duality.md)이고

$$
\langle L(M)\cup f^\ast x,\lbrack M\rbrack\rangle=\langle L(M)\vert\_N,\lbrack N\rbrack\rangle=\mathrm{sign}(N)
$$

이다. 이 수는 $M$ 을 원 위로 보낸 사상의 올 $N$ 의 부호수다. $M$ 을 호모토피 동치인 다른 다양체로 바꾸면 올이 바뀌는데도 이 부호수가 같다는 것을 Novikov 가 증명했다. $S^1=B\mathbb Z$ 이므로 이것이 $G=\mathbb Z$ 인 경우의 Novikov 추측이다.

# 정의

## 고차 부호수

$G$ 를 이산군, $M$ 을 닫힌 방향 매끄러운 다양체, $f\colon M\to BG$ 를 연속사상이라 하자. 유리 코호몰로지류 $x\in H^\ast(BG;\mathbb Q)$ 마다 위의 $\mathrm{sign}\_x(M,f)$ 를 $x$ 에 대한 **고차 부호수(higher signature)** 라 한다. $x=1$ 이면 보통의 부호수다.

## 추측의 진술

$G$ 가 Novikov 추측을 만족한다는 것은 다음이 성립한다는 뜻이다. 방향을 보존하는 호모토피 동치 $h\colon M'\to M$ 과 $f\colon M\to BG$ 에 대해 모든 $x$ 에서

$$
\mathrm{sign}\_x(M',f\circ h)=\mathrm{sign}\_x(M,f)
$$

이다.

# 성질

## Baum–Connes 조립 사상과의 관계

[Baum–Connes 추측](baum-connes-conjecture.md)의 조립 사상 $\mu\colon K\_\ast(BG)\to K\_\ast(C^\ast\_r(G))$ 가 유리수 계수에서 단사이면 $G$ 는 Novikov 추측을 만족한다[^2]. 증명의 요지. $M$ 의 부호수 작용소가 $K\_\ast(BG)$ 의 원소를 주고, 그 원소의 Chern 지표를 $x$ 와 짝지은 값이 고차 부호수다. 그 원소의 $\mu$ 에 의한 상은 $C^\ast\_r(G)$ 위의 대칭 형식으로 표현되어 호모토피 불변이다. $\mu$ 가 유리 단사이면 상의 불변성이 원소의 불변성으로 옮겨 온다.

## 증명된 경우

- 자유 아벨군에서 Lusztig 이 증명했다[^3].
- 연결 [Lie 군](lie-groups.md)의 이산 부분군에서 Kasparov 가 증명했다[^2].
- [쌍곡군](hyperbolic-groups.md)에서 Connes–Moscovici 가 증명했다[^4].
- [Hilbert 공간](hilbert-spaces.md)에 거친 매장(coarse embedding)을 갖는 유한생성 군에서 Yu 가 증명했다[^5]. [Haagerup 성질](haagerup-property.md)을 갖는 군과 순종군이 이 범위에 든다.

# 활용

- [수술 이론](surgery-theory.md)에서 Novikov 추측은 $L$ 이론의 조립 사상이 유리수 계수에서 단사라는 진술과 동치다[^1]. 호모토피 동치인 두 다양체가 위상동형인지 판정할 때 고차 부호수가 장애가 된다.
- Pontryagin 류의 유리류는 위상동형에서 불변이고(Novikov 정리), Novikov 추측은 그 가운데 $BG$ 에서 당겨 온 류와 짝지은 부분이 호모토피 동치에서도 불변이라고 진술한다.

[^1]: S. Ferry, A. Ranicki, J. Rosenberg, A history and survey of the Novikov conjecture, in *Novikov Conjectures, Index Theorems and Rigidity, Vol. 1*, London Math. Soc. Lecture Note Ser. 226, Cambridge Univ. Press (1995), 7–66.
[^2]: G. Kasparov, Equivariant KK-theory and the Novikov conjecture, *Invent. Math.* 91 (1988), 147–201.
[^3]: G. Lusztig, Novikov's higher signature and families of elliptic operators, *J. Differential Geom.* 7 (1972), 229–256.
[^4]: A. Connes, H. Moscovici, Cyclic cohomology, the Novikov conjecture and hyperbolic groups, *Topology* 29 (1990), 345–388.
[^5]: G. Yu, The coarse Baum–Connes conjecture for spaces which admit a uniform embedding into Hilbert space, *Invent. Math.* 139 (2000), 201–240.

# 연관 문서

## 선수지식

- [Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)
- [Baum–Connes 추측](baum-connes-conjecture.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #algebraic_topology #functional_analysis
