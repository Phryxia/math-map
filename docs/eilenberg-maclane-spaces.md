# Eilenberg–MacLane 공간

# 개요

호모토피군이 한 차수에만 남아 있는 공간을 Eilenberg–MacLane 공간이라 한다. 이 공간으로 가는 사상을 호모토피 동치까지 세면 코호몰로지군이 나온다.

코호몰로지는 사슬 복합체로 정의되지만 이 대응을 거치면 공간 사이의 사상 집합이 된다. 코호몰로지 연산과 [장애 이론](obstruction-theory.md)의 계산이 이 대응 위에서 이루어진다.

# 직관

원 $S^1$ 은 $\pi_1=\mathbb Z$ 이고 나머지 호모토피군이 $0$ 이다. 공간 $X$ 에서 $S^1$ 로 가는 연속사상을 호모토피 동치까지 세어 본다.

$X=S^1$ 이면 그런 사상은 감는 수 하나로 정해지므로 집합이 $\mathbb Z$ 다. $X$ 가 원환면이면 두 방향의 감는 수가 있어 $\mathbb Z^2$ 다. 한편 두 공간의 1차 정수 코호몰로지도 각각 $\mathbb Z$ 와 $\mathbb Z^2$ 다.

$S^1$ 의 호모토피군이 1차에만 있어서 두 값이 같다. 사상 $f:X\to S^1$ 을 $X$ 의 세포마다 정하려 할 때, 1차 세포에서 정한 값을 2차 세포 위로 늘리는 데 걸리는 장애가 $\pi_1(S^1)$ 에 값을 갖는 1차 코사슬이고, 그보다 높은 차수에서는 $\pi_n(S^1)=0$ 이라 장애가 없다.

$2$ 차 코호몰로지를 같은 방식으로 얻으려면 $\pi_2=\mathbb Z$ 이고 나머지가 $0$ 인 공간이 있어야 한다. 무한 복소 사영공간 $\mathbb{CP}^{\infty}$ 가 그런 공간이다.

# 정의

## K(G,n)

연결 CW 복합체(CW complex) $K$ 가 $\pi_n(K)\cong G$ 이고 $i\ne n$ 에서 $\pi_i(K)=0$ 이면 $K$ 를 **Eilenberg–MacLane 공간**이라 하고 $K(G,n)$ 으로 쓴다. $n=1$ 에서 $G$ 는 임의의 군이고 $n\ge 2$ 에서는 아벨군이다.

$G$ 와 $n$ 이 정해지면 $K(G,n)$ 은 호모토피 동치까지 하나뿐이다. 존재는 세포를 붙여 만든다. $n$ 차 호모토피군이 $G$ 인 Moore 공간에서 시작해, 차수가 $n$ 보다 높은 호모토피군의 생성원마다 세포를 붙여 그 원소를 죽인다.

| 공간 | 값 |
| --- | --- |
| $S^1$ | $K(\mathbb Z,1)$ |
| $\mathbb{RP}^{\infty}$ | $K(\mathbb Z/2,1)$ |
| $\mathbb{CP}^{\infty}$ | $K(\mathbb Z,2)$ |
| 이산군 $G$ 의 [분류공간](classifying-spaces.md) $BG$ | $K(G,1)$ |

## 기본류

$K=K(G,n)$ 에 대해 Hurewicz 정리가 $H_n(K)\cong G$ 를 주고, 보편계수 정리가 $H^n(K;G)$ 안에 항등사상에 대응하는 원소를 준다. 이것을 **기본류** $\iota$ 라 한다.

# 성질

## 표현가능성

**정리(Eilenberg, MacLane).** $X$ 가 CW 복합체이면 다음이 자연 전단사다.[^1]

$$
\lbrack X,K(G,n)\rbrack\ \longrightarrow\ H^n(X;G),\qquad f\mapsto f^{\ast}\iota
$$

증명은 세포에 대한 귀납이다. $X$ 의 차원 $n$ 이하인 세포 위에서 사상을 정하는 자료가 $n$ 차 코사슬이고, 그 사상을 $(n+1)$ 세포 위로 늘리는 장애가 코사슬의 코경계다. 코경계가 $0$ 인 코사슬, 곧 코사이클이 늘릴 수 있는 사상에 대응하고, 두 사상 사이의 호모토피는 코바운더리에 대응한다. 차수가 $n+1$ 보다 높은 세포에서는 $\pi_i(K)=0$ 이라 늘리기가 항상 되고 선택이 유일하다. ∎

## 코호몰로지 연산

$H^n(-;G)$ 에서 $H^m(-;G')$ 로 가는 [자연변환](natural-transformations.md) 전체는 $H^m(K(G,n);G')$ 과 일대일 대응한다. 표현가능성을 Yoneda 보조정리에 넣은 결과다.

이 대응이 연산을 찾는 문제를 한 공간의 코호몰로지 계산으로 바꾼다. Serre 가 $K(\mathbb Z/2,n)$ 의 mod 2 코호몰로지를 스펙트럼 수열로 계산해 Steenrod 제곱이 그 코호몰로지를 생성함을 보였다.[^2]

## 고리 공간

$$
\Omega K(G,n)\ \simeq\ K(G,n-1)
$$

고리 공간을 취하면 호모토피군의 차수가 하나 내려가고, 한 차수에만 있다는 조건은 유지된다. 그러므로 $K(G,n)$ 들은 하나의 스펙트럼을 이루고 이를 Eilenberg–MacLane 스펙트럼이라 한다. 일반 코호몰로지 이론 가운데 이 스펙트럼이 주는 것이 보통 코호몰로지다.

## Postnikov 탑

[Postnikov 탑](postnikov-tower.md)은 연결 공간 $X$ 마다 있는 사상들의 탑이다. 탑 $\dots\to X_n\to X_{n-1}\to\dots\to X_1$ 이 있어 $X_n$ 의 호모토피군이 $n$ 차까지는 $X$ 와 같고 그 위로는 $0$ 이다. 각 단계 $X_n\to X_{n-1}$ 은 올이 $K(\pi_n(X),n)$ 인 올다발이고, 그 올다발을 정하는 자료가 $H^{n+1}(X_{n-1};\pi_n(X))$ 의 원소다.

호모토피 유형을 호모토피군과 이 원소들로 쪼개어 기술하는 것이 탑의 쓰임이다.

# 활용

- **선다발의 분류.** 복소 선다발의 동형류는 $\lbrack X,\mathbb{CP}^{\infty}\rbrack$ 이고 표현가능성으로 $H^2(X;\mathbb Z)$ 다. 이 대응이 [특성류](characteristic-classes.md)의 첫 Chern 류이고, 같은 논법이 실 선다발과 $H^1(X;\mathbb Z/2)$ 의 첫 Stiefel–Whitney 류를 준다.
- **군 코호몰로지.** 이산군 $G$ 에서 $K(G,1)$ 의 특이 코호몰로지가 군 코호몰로지 $H^{\ast}(G;M)$ 과 같다. 위상적 계산과 대수적 계산이 같은 값을 준다.
- **사상의 개수.** 구면에서 구면으로 가는 사상의 호모토피류를 세는 문제에서 Postnikov 탑을 한 단계씩 올라가며 장애를 계산한다. 각 단계의 장애가 위 $H^{n+1}$ 의 원소다.

[^1]: Samuel Eilenberg, Saunders MacLane, *Relations between homology and homotopy groups of spaces*, Annals of Mathematics 46 (1945), 480–509.
[^2]: Jean-Pierre Serre, *Cohomologie modulo 2 des complexes d'Eilenberg–MacLane*, Commentarii Mathematici Helvetici 27 (1953), 198–232.

# 연관 문서

## 선수지식

- [호모토피군](homotopy-groups.md)
- [분류공간](classifying-spaces.md)

## 더 알아보기

- [장애 이론](obstruction-theory.md)

#algebraic_topology #topology #category_theory
