# Kodaira 소멸 정리

# 개요

**Kodaira 소멸 정리(Kodaira vanishing theorem)** 는 콤팩트 Kähler 다양체 위의 양의 선다발 $L$ 에 대해 $K_X\otimes L$ 의 $0$ 차가 아닌 코호몰로지가 모두 $0$ 이라는 정리다. 곡면 위의 선다발이 단면을 몇 개 갖는지 Riemann–Roch 정리로 계산하면, 공식에 $h^0$ 과 함께 $h^1$, $h^2$ 가 섞여 나와 단면의 개수만 따로 얻을 수 없다.

이 정리가 성립하는 선다발에서는 $h^1$ 과 $h^2$ 가 $0$ 이므로, $h^0$ 이 Euler 표수와 같아지고 차수와 교차수만으로 계산된다.

# 직관

곡선 $C$ 위에서 차수 $d$ 인 선다발 $\mathcal O(D)$ 의 단면 수를 [Riemann–Roch 정리](riemann-roch.md)로 구하면 다음이 나온다.

$$
h^0(D)-h^1(D)=d+1-g
$$

$D=K+A$ 이고 $A$ 의 차수가 양이면, [Serre 쌍대성](serre-duality.md)으로 $h^1(K+A)=h^0(-A)$ 이고 차수가 음인 선다발은 단면이 없으므로 $0$ 이다. 그래서 $h^0(K+A)=\deg A+g-1$ 이 바로 나온다.

곡면에서 같은 일을 하면 $h^2(K+A)=h^0(-A)$ 는 같은 이유로 $0$ 이지만 $h^1(K+A)$ 는 쌍대성을 써도 $h^1(-A)$ 로 바뀔 뿐 차수로 판정되지 않는다. Kodaira 소멸 정리는 $A$ 가 양이면 이 가운데 차수도 $0$ 이라고 말한다. 사영평면에서 $K=\mathcal O(-3)$, $A=\mathcal O(1)$ 이면 $h^1(\mathcal O(-2))=0$ 이고, $h^0(\mathcal O(-2))=0$ 이 Euler 표수 $0$ 과 맞는다.

# 정의

$X$ 를 $n$ 차원 콤팩트 [Kähler 다양체](kahler-manifolds.md), $L$ 을 정칙 선다발이라 한다. $L$ 에 에르미트 계량 $h$ 가 있어 그 곡률 형식 $i\Theta\_h$ 가 모든 점에서 양의 정부호 $(1,1)$ 형식이면 $L$ 을 **양의 선다발(positive line bundle)** 이라 한다. 사영 다양체에서는 양의 선다발과 풍부한(ample) 선다발이 같다.

정리. $L$ 이 양이면 다음이 성립한다[^1].

$$
H^q(X,K_X\otimes L)=0\qquad(q\gt 0)
$$

Serre 쌍대성으로 바꾸면 $H^q(X,L^{-1})=0$ $(q\lt n)$ 과 동치다. 직관 절의 사영평면에서 $L^{-1}=\mathcal O(-1)$ 이고 $H^0$, $H^1$ 이 $0$ 이다.

# 성질

## Bochner–Kodaira–Nakano 항등식으로 하는 증명

$H^q(X,K_X\otimes L)$ 은 $L$ 값 $(n,q)$ 조화형식의 공간과 같다. $L$ 값 형식의 Laplace 작용소 사이에는 다음 항등식이 있다. $\Lambda$ 는 Kähler 형식을 곱하는 작용소의 수반이다.

$$
\Delta_{\bar\partial}=\Delta_{\partial}+\lbrack i\Theta_h,\Lambda\rbrack
$$

조화형식 $\alpha$ 와 내적을 취하면 다음이 나온다.

$$
0=\lVert\bar\partial\alpha\rVert^2+\lVert\bar\partial^\ast\alpha\rVert^2\ge\langle\lbrack i\Theta_h,\Lambda\rbrack\alpha,\alpha\rangle
$$

곡률이 양이면 $(n,q)$ 형식에서 $\lbrack i\Theta\_h,\Lambda\rbrack$ 은 $q\gt 0$ 일 때 양의 정부호이므로 $\alpha=0$ 이다[^1].

## 곡선과 사영공간

곡선에서는 직관 절의 차수 논법이 이 정리 전체다. 사영공간 $\mathbb P^n$ 에서는 $0\lt q\lt n$ 이면 모든 $m$ 에 대해 $H^q(\mathcal O(m))=0$ 이고, 소멸 정리는 이 가운데 $m\ge -n$ 인 경우를 준다.

## 양성 조건의 필요성

타원곡선에서 $L$ 이 자명하면 $K$ 도 자명하므로 $H^1(K\otimes L)=H^1(\mathcal O)\cong\mathbb C$ 다. 곡률이 $0$ 인 선다발에서는 정리가 성립하지 않는다.

## 일반화

$L$ 이 양이 아니어도 크고 nef 이면 같은 결론이 성립한다(Kawamata–Viehweg 소멸 정리, Kawamata–Viehweg vanishing theorem). $K_X\otimes L$ 을 $\Omega^p\otimes L$ 로 바꾸면 $p+q\gt n$ 에서 $H^q(\Omega^p\otimes L)=0$ 이다(Akizuki–Nakano 소멸 정리, Akizuki–Nakano vanishing theorem)[^1]. 양의 표수의 체 위에서는 정리가 성립하지 않는 곡면이 있다(Raynaud 의 반례, Raynaud's counterexample)[^2].

# 활용

- 단면의 개수. [Kodaira 차원](kodaira-dimension.md)의 일반형 곡면에서 $m\ge 2$ 이면 $P\_m=h^0(mK)$ 를 Riemann–Roch 로 계산할 수 있는 것은 $mK=K+(m-1)K$ 에 이 정리를 쓴 결과다. 이때 $K$ 는 극소 모형에서 크고 nef 이므로 Kawamata–Viehweg 판본을 쓴다.
- 사영 매장. [Kodaira 매장 정리](kodaira-embedding-theorem.md)는 양의 선다발의 높은 거듭제곱이 점을 가르고 접벡터를 가른다는 것을 부풀린 다양체에서의 $H^1$ 소멸로 증명한다. 그래서 정수 Kähler 류를 갖는 콤팩트 Kähler 다양체는 사영 다양체다.
- [Lefschetz 초평면 정리](lefschetz-hyperplane-theorem.md). 풍부한 초곡면 $Y\subset X$ 에서 $H^k(X)\to H^k(Y)$ 가 $k\lt n-1$ 이면 동형이라는 정리의 Hodge 이론적 증명이 Akizuki–Nakano 판본을 쓴다.
- 곡선 위의 단면. 곡선에서 $\deg D\gt 2g-2$ 이면 $h^1(D)=0$ 이고 $h^0(D)=\deg D+1-g$ 다. [Clifford 정리](clifford-theorem.md)와 [Weierstrass 점](weierstrass-points.md)의 계산이 이 범위 밖의 특수한 인자를 다룬다.

[^1]: P. Griffiths and J. Harris, *Principles of Algebraic Geometry*, Wiley, 1978, Chapter 1, Section 2.

[^2]: M. Raynaud, Contre-exemple au vanishing theorem en caractéristique p > 0, *C. P. Ramanujam — A Tribute*, Tata Institute of Fundamental Research Studies in Mathematics 8, Springer, 1978, 273–278.

# 연관 문서

## 선수지식

- [Serre 쌍대성](serre-duality.md)
- [Kähler 다양체](kahler-manifolds.md)

## 더 알아보기

- [Kodaira 매장 정리](kodaira-embedding-theorem.md)

#complex_analysis #algebra #differential_geometry #theorem
