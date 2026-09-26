# Mordell–Lang 추측

# 개요

Mordell–Lang 추측은 [아벨 다양체](abelian-varieties.md)의 부분다양체 $X$ 와 유한생성 부분군 $\Gamma$ 의 교집합을 결정한다. 답은 $X$ 안에 통째로 들어가는 아벨 부분다양체의 잉여류 유한 개다. 종수 $2$ 이상 곡선의 유리점이 유한하다는 Mordell 추측이 이 진술의 한 경우이고, 함수체 경우의 증명은 [Zilber 삼분법](zilber-trichotomy.md)을 쓴다.

# 직관

종수 $2$ 이상의 곡선 $C$ 위에 유리점이 몇 개나 있는지 묻는다. $C$ 를 그 Jacobian $J$ 에 넣으면 $C$ 의 유리점은 $C$ 와 $J(\mathbb Q)$ 의 교집합이고, Mordell–Weil 정리가 $J(\mathbb Q)$ 를 유한생성 군으로 준다. 물음이 "유한생성 부분군과 부분다양체가 몇 점에서 만나는가" 로 바뀐다.

교집합이 무한할 때가 있다. 타원곡선 $E$ 에서는 $C=E=J$ 이고 교집합이 $E(\mathbb Q)$ 전체라서, 계수가 양수면 무한히 많다. 그러니 무한을 막는 것은 유한생성 자체가 아니다.

두 경우의 차이는 $C$ 가 $J$ 의 부분군인지다. $E$ 는 자기 자신의 부분군이라 덧셈으로 닫혀 있고, 점 하나에서 그 배수를 만들어 무한히 많은 점을 얻는다. 종수 $2$ 이상의 곡선은 $J$ 안에서 덧셈으로 닫혀 있지 않고, 양차원 아벨 부분다양체의 잉여류를 품지도 않는다.

무한한 교집합을 만드는 것은 덧셈으로 닫힌 조각뿐이라고 보면, 교집합은 $X$ 안에 들어가는 잉여류 유한 개와 그 밖의 점 유한 개로 갈린다. 종수 $2$ 이상 곡선에는 잉여류가 없으므로 남는 것은 유한집합이다.

# 정의

$K$ 를 표수 $0$ 인 체, $A$ 를 $K$ 위의 아벨 다양체, $X\subseteq A$ 를 닫힌 부분다양체, $\Gamma\subseteq A(K)$ 를 유한생성 부분군이라 하자.

**Mordell–Lang 추측**은 다음을 말한다. 아벨 부분다양체 $B_1,\dots,B_n\subseteq A$ 와 점 $\gamma_1,\dots,\gamma_n\in\Gamma$ 가 있어 각 $i$ 에서 $\gamma_i+B_i\subseteq X$ 이고 다음이 성립한다.

$$X\cap\Gamma=\bigcup_{i=1}^{n}\bigl(\gamma_i+(B_i\cap\Gamma)\bigr)$$

$B_i=0$ 인 항은 한 점이므로, 이 진술은 $X\cap\Gamma$ 가 유한 개의 잉여류와 유한집합의 합임을 뜻한다.

## 나눗셈 닫힘

$\Gamma$ 를 유한계수 부분군, 곧 유한생성 군 $\Gamma_0$ 에 대해 $\Gamma=\lbrace x\in A(K):mx\in\Gamma_0\ \text{인}\ m\ge 1\ \text{이 있다}\rbrace$ 로 넓혀도 같은 결론이 성립한다. 비틀림 부분군 전체는 계수 $0$ 인 이 꼴이다.

## 반아벨 다양체 확장

$A$ 를 반아벨 다양체, 곧 원환군에 의한 아벨 다양체의 확대 $1\to T\to A\to A_0\to 0$ 으로 바꾼 진술도 성립한다. 이 경우에 $B_i$ 는 반아벨 부분다양체다.

# 성질

## Mordell 추측

종수 $g\ge 2$ 인 곡선 $C$ 를 수체 $K$ 위에서 잡고 $K$ 유리점 하나로 Jacobian $J$ 에 넣는다. $\Gamma=J(K)$ 는 Mordell–Weil 정리로 유한생성이므로 위 진술이 적용된다.

$C$ 는 양차원 아벨 부분다양체의 잉여류를 품지 않는다. 품는다면 그 잉여류가 $C$ 안의 양차원 폐집합이라 $C$ 와 같아지고, $C$ 가 아벨 다양체의 평행이동이 되어 종수가 $1$ 이다. 따라서 모든 $B_i=0$ 이고 $C(K)=C\cap\Gamma$ 가 유한하다.

## Manin–Mumford 정리

$\Gamma$ 를 $A$ 의 비틀림점 전체로 두면 위 나눗셈 닫힘의 계수 $0$ 인 경우이고, 결론은 $X$ 와 비틀림점의 교집합이 $X$ 안에 들어가는 아벨 부분다양체 잉여류들의 비틀림점으로 다 설명된다는 것이다. 종수 $2$ 이상 곡선을 Jacobian 에 넣으면 곡선 위의 비틀림점이 유한 개다[^1].

## 증명의 갈래

수체 위의 경우는 Faltings 가 Vojta 의 Diophantine 근사 방법을 확장해 증명했다[^2]. 함수체 위의 경우와 표수 $p$ 의 경우는 Hrushovski 가 모형론으로 증명했다[^3].

## 모형론적 증명

$K$ 가 상수체 $k$ 위의 함수체라 하자. $K$ 를 표수 $0$ 인 [미분적으로 닫힌 체](differentially-closed-fields.md) 안에 넣으면 $A(K)$ 안에 Manin 사상의 핵으로 정의되는 부분군이 놓이고, 이 군은 유한 Morley 계수를 갖는 정의 가능 군이다.

이 군 안의 극소 집합에 Zilber 삼분법을 적용한다. 기하가 국소 모듈러이면 정의 가능 집합이 부분군의 잉여류와 그 유한 불 조합뿐이므로 결론의 꼴이 바로 나온다. 국소 모듈러가 아니면 대수적으로 닫힌 체가 해석되고, 그 체가 상수체 $k$ 와 동형이 되어 $A$ 가 $k$ 위에서 정의되는 경우로 몰린다. 그 경우는 따로 다룬다.

# 활용

- **곡선의 유리점.** 종수 $2$ 이상 곡선을 Jacobian 에 넣고 $\Gamma$ 를 Mordell–Weil 군으로 잡으면 유리점이 유한하다는 Faltings 정리가 따라 나온다. 개수의 상한은 주지 않으므로, 실제 점을 찾는 데는 [Chabauty 방법](chabauty-method.md)처럼 계수 조건을 쓰는 방법을 함께 쓴다.
- **부분다양체의 특수점.** 아벨 다양체 안에서 비틀림점이 조밀하게 놓이는 부분다양체는 잉여류뿐이라는 Manin–Mumford 정리가 따라 나온다.
- **모형론의 기하 안정성 이론.** 함수체 경우의 증명이 Zilber 삼분법을 산술 문제에 적용한 사례이고, 같은 방법이 차분체에서 Manin–Mumford 정리를 준다.
- **함수체 위의 균일성.** 상수체 위에서 정의되지 않는 곡선족에서 유리점 개수의 상한이 족의 자료만으로 정해진다.

[^1]: M. Raynaud, "Courbes sur une variété abélienne et points de torsion", Inventiones Mathematicae **71** (1983), 207–233.

[^2]: G. Faltings, "Diophantine Approximation on Abelian Varieties", Annals of Mathematics **133** (1991), 549–576; "The General Case of S. Lang's Conjecture", *Barsotti Symposium in Algebraic Geometry*, Academic Press (1994), 175–182.

[^3]: E. Hrushovski, "The Mordell–Lang Conjecture for Function Fields", Journal of the American Mathematical Society **9** (1996), 667–690.

# 연관 문서

## 선수지식

- [아벨 다양체](abelian-varieties.md)
- [Zilber 삼분법](zilber-trichotomy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #logic #algebra
