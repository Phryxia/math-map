# Eilenberg–MacLane 공간

# 개요

**Eilenberg–MacLane 공간(Eilenberg–MacLane space)** 은 구면을 공간 안으로 감는 방법 가운데 한 차원의 것만 한 점으로 줄어들지 않는 공간이다. 원은 한 바퀴 감는 고리가 감은 횟수인 정수만큼 있고, 2 차원 이상의 구면을 원에 감는 방법은 모두 한 점으로 줄어들므로 정수군에 대한 차원 $1$ 의 Eilenberg–MacLane 공간이다. 공간 $X$ 에서 이런 공간으로 가는 연속사상을 연속변형까지 세면 $X$ 의 [코호몰로지](cohomology.md)군이 나오므로, 코호몰로지 계산을 사상을 세는 문제로 바꿔 다룬다.

# 직관

원 $S^1$ 로 가는 연속사상을 연속변형으로 옮겨지는 것끼리 묶어 센다. $X=S^1$ 이면 사상은 감는 수 하나로 정해지므로 묶음이 정수만큼 있고, $X$ 가 원환면이면 두 방향의 감는 수가 있어 정수 쌍만큼 있다. 두 공간의 1차 정수 코호몰로지도 각각 $\mathbb Z$ 와 $\mathbb Z^2$ 다.

$X$ 를 세포로 쌓고 사상 $f\colon X\to S^1$ 을 세포마다 정해 보면 두 값이 같은 이유가 보인다. 0차 세포를 모두 한 점으로 보내고 1차 세포마다 감는 수를 정하면 1차 코사슬이 된다. 이것을 2차 세포 위로 늘릴 수 있는 것은 2차 세포의 테두리를 따라 감는 수를 더한 값이 $0$ 일 때, 곧 그 코사슬의 코경계가 $0$ 일 때다. 3차 이상의 세포에서는 $\pi_k(S^1)=0$ 이라 늘리는 데 걸리는 것이 없다.

이 계산은 $S^1$ 의 [호모토피군](homotopy-groups.md)이 1차의 $\mathbb Z$ 하나뿐이라서 된다. 2차 코호몰로지를 같은 방식으로 얻으려면 2차 호모토피군만 $\mathbb Z$ 이고 나머지가 $0$ 인 공간이 있어야 한다. 무한 복소 사영공간 $\mathbb{CP}^{\infty}$ 가 그런 공간이다.

# 정의

## K(G,n)

연결 [CW 복합체](cw-complexes.md)(CW complex, closure-finite weak topology) $K$ 가 $\pi_n(K)\cong G$ 이고 $i\ne n$ 에서 $\pi_i(K)=0$ 이면 $K$ 를 **Eilenberg–MacLane 공간** 이라 하고 $K(G,n)$ 으로 쓴다. $n=1$ 에서 $G$ 는 임의의 군이고 $n\ge 2$ 에서는 아벨군이다.

$S^1$ 은 $\pi_1(S^1)=\mathbb Z$ 이고, 보편덮개 $\mathbb R$ 이 수축가능하므로 $i\ge 2$ 에서 $\pi_i(S^1)=\pi_i(\mathbb R)=0$ 이다. 그러므로 $S^1$ 은 $K(\mathbb Z,1)$ 이다.

| 공간 | 값 |
| --- | --- |
| $S^1$ | $K(\mathbb Z,1)$ |
| $\mathbb{RP}^{\infty}$ | $K(\mathbb Z/2,1)$ |
| $\mathbb{CP}^{\infty}$ | $K(\mathbb Z,2)$ |
| 이산군 $G$ 의 [분류공간](classifying-spaces.md) $BG$ | $K(G,1)$ |

## 기본류

$G$ 가 아벨군이고 $K=K(G,n)$ 이면 [Hurewicz 정리](hurewicz-theorem.md)로 $H_n(K)\cong G$ 이고 $H_{n-1}(K)=0$ 이다. 보편계수 정리(universal coefficient theorem)로 $H^n(K;G)\cong\mathrm{Hom}(G,G)$ 이고, 항등사상에 대응하는 원소 $\iota\in H^n(K;G)$ 를 **기본류(fundamental class)** 라 한다. $K=S^1$ 이면 $\iota$ 는 $H^1(S^1;\mathbb Z)=\mathbb Z$ 의 생성원이고, 사상 $f\colon X\to S^1$ 에 대해 $f^\ast\iota$ 는 직관 절의 감는 수 코사슬이 정하는 코호몰로지류다.

# 성질

## 존재와 유일성

$G$ 와 $n$ 이 정해지면 $K(G,n)$ 은 존재하고 호모토피 동치를 무시하면 하나뿐이다. 존재는 세포를 붙여 증명한다. $n$ 차 호모토피군이 $G$ 이고 그 아래가 $0$ 인 CW 복합체에서 시작해, 차수가 $n$ 보다 높은 호모토피군의 생성원마다 한 차원 높은 세포를 붙여 그 원소를 $0$ 으로 만든다.

## 표현가능성

Eilenberg 와 MacLane 의 표현 정리는 다음이다. $X$ 가 CW 복합체이고 $G$ 가 아벨군이면 다음은 $X$ 에 대해 자연스러운 전단사다.[^1]

$$
\lbrack X,K(G,n)\rbrack\ \longrightarrow\ H^n(X;G),\qquad f\mapsto f^{\ast}\iota
$$

증명은 세포에 대한 귀납이다. $X$ 의 $(n-1)$ 골격을 한 점으로 보내면 $n$ 차 세포 위의 사상을 정하는 자료는 $G$ 에 값을 갖는 $n$ 차 코사슬이고, 그 사상을 $(n+1)$ 차 세포 위로 늘리는 장애는 그 코사슬의 코경계다. 그래서 코사이클이 늘릴 수 있는 사상에 대응하고, 두 사상 사이의 호모토피는 코경계만큼의 차이에 대응한다. 차수가 $n+1$ 보다 높은 세포에서는 $\pi_i(K)=0$ 이라 늘리기에 장애가 없다.

## 코호몰로지 연산

$H^n(-;G)$ 에서 $H^m(-;G')$ 로 가는 [자연변환](natural-transformations.md) 전체는 $H^m(K(G,n);G')$ 과 일대일 대응한다. 표현가능성에 [Yoneda 보조정리](yoneda-lemma.md)(Yoneda lemma)를 적용한 결과다.

그러므로 코호몰로지 연산(cohomology operation)을 찾는 문제는 한 공간의 코호몰로지 계산이다. Serre 는 $K(\mathbb Z/2,n)$ 의 mod 2 코호몰로지를 [스펙트럼 수열](spectral-sequences.md)로 계산해 [Steenrod 제곱](steenrod-operations.md)이 그 코호몰로지를 생성함을 보였다.[^2]

## 고리 공간

$$
\Omega K(G,n)\ \simeq\ K(G,n-1)
$$

고리 공간(loop space) $\Omega Y$ 는 $\pi_i(\Omega Y)\cong\pi_{i+1}(Y)$ 이므로 호모토피군의 차수가 하나 내려가고, 한 차수에만 있다는 조건은 유지된다. 그러므로 $K(G,n)$ 들은 Eilenberg–MacLane 스펙트럼(Eilenberg–MacLane spectrum) $HG$ 를 이루고, 이 스펙트럼이 정하는 일반 코호몰로지 이론이 보통 코호몰로지 $H^\ast(-;G)$ 다.

## Postnikov 탑

[Postnikov 탑](postnikov-tower.md)은 연결 CW 복합체 $X$ 마다 있는 사상들의 탑 $\dots\to X_n\to X_{n-1}\to\dots\to X_1$ 이다. $X_n$ 의 호모토피군은 $n$ 차까지 $X$ 와 같고 그 위로는 $0$ 이다. 각 단계 $X_n\to X_{n-1}$ 은 올이 $K(\pi_n(X),n)$ 인 [올화](fibrations.md)다. $X$ 가 단순연결이면 이 올화는 $H^{n+1}(X_{n-1};\pi_n(X))$ 의 원소 하나로 정해지고, 이 원소를 **$k$-불변량($k$-invariant)** 이라 한다. 탑은 $X$ 의 호모토피 유형을 호모토피군과 $k$-불변량으로 기술한다.

# 활용

- 선다발의 분류. 복소 선다발의 동형류는 $\lbrack X,\mathbb{CP}^{\infty}\rbrack$ 이고 표현가능성으로 $H^2(X;\mathbb Z)$ 다. 이 대응이 [특성류](characteristic-classes.md)의 첫 Chern 류(first Chern class)다. 같은 논법으로 실 선다발은 $\lbrack X,\mathbb{RP}^\infty\rbrack=H^1(X;\mathbb Z/2)$ 로 분류되고 이 대응이 첫 [Stiefel–Whitney 류](stiefel-whitney-classes.md)다.
- [군 코호몰로지](group-cohomology.md). 이산군 $G$ 와 $G$-가군 $M$ 에 대해 $K(G,1)$ 의 국소계수 코호몰로지가 군 코호몰로지 $H^{\ast}(G;M)$ 과 같다.
- [장애 이론](obstruction-theory.md). 사상을 Postnikov 탑을 따라 한 단계씩 올릴 때 각 단계의 장애가 $k$-불변량이 당겨진 $H^{n+1}$ 의 원소다.

[^1]: Samuel Eilenberg, Saunders MacLane, *Relations between homology and homotopy groups of spaces*, Annals of Mathematics 46 (1945), 480–509.
[^2]: Jean-Pierre Serre, *Cohomologie modulo 2 des complexes d'Eilenberg–MacLane*, Commentarii Mathematici Helvetici 27 (1953), 198–232.

# 연관 문서

## 선수지식

- [호모토피군](homotopy-groups.md)
- [분류공간](classifying-spaces.md)
- [코호몰로지](cohomology.md)

## 더 알아보기

- [장애 이론](obstruction-theory.md)
- [Brown 표현 정리](brown-representability.md)

#algebraic_topology #topology #category_theory
