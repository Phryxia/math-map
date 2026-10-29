# Gordan 보조정리

# 개요

**Gordan 보조정리(Gordan's lemma)** 는 정수 벡터 몇 개가 만드는 뿔 모양 영역 안의 정수점을, 유한 개의 정수점을 음이 아닌 정수배로 더해 모두 얻을 수 있다는 정리다. 평면에서 $(1,0)$ 과 $(1,2)$ 사이의 영역에 든 정수점 $(1,1)$ 은 이 두 벡터를 음이 아닌 정수배로 더해서는 나오지 않는다. 이 보조정리에 따라 $(1,1)$ 같은 점을 유한 개 더 넣으면 영역의 정수점이 전부 더하기로 나오고, 그 유한 집합으로 영역의 정수점을 다룬다.

# 직관

Gordan 보조정리는 유리 다면 원뿔 $C\subseteq\mathbb R^n$ 의 정수점 전체 $C\cap\mathbb Z^n$ 이 덧셈에 대해 유한 생성된다는 정리다. 곧 유한 개의 정수 벡터 $h_1,\dots,h_k\in C$ 가 있어 $C$ 의 모든 정수점이 이들의 음이 아닌 정수 결합으로 쓰인다. 이런 유한 집합을 $C$ 의 **Hilbert 기저(Hilbert basis)** 라 한다.

원뿔을 생성하는 정수 벡터들만으로는 정수점을 모두 얻지 못하는 경우가 있다. 원뿔의 생성과 정수 결합의 차이를 메우는 유한 개의 벡터가 있다는 것이 이 정리이고, [전체 쌍대 정수성](total-dual-integrality.md)과 토릭 다양체에서 쓰인다.

평면에서 $(1,0)$ 과 $(1,2)$ 가 생성하는 원뿔을 본다. 점 $(1,1)$ 은 $\tfrac12(1,0)+\tfrac12(1,2)$ 이므로 원뿔에 든다. $(1,1)=a(1,0)+b(1,2)$ 를 풀면 $b=\tfrac12$ 이므로 두 생성 벡터의 음이 아닌 정수 결합으로는 $(1,1)$ 을 얻지 못한다.

$(1,1)$ 을 더해 $\lbrace(1,0),(1,1),(1,2)\rbrace$ 로 두면 원뿔의 정수점 $(p,q)$ $(0\le q\le 2p)$ 가 모두 정수 결합으로 쓰인다. $q\le p$ 이면 $q(1,1)+(p-q)(1,0)$, $q\gt p$ 이면 $(q-p)(1,2)+(2p-q)(1,1)$ 이다. 빠졌던 $(1,1)$ 은 두 생성 벡터가 만드는 평행사변형 $\lbrace\mu_1(1,0)+\mu_2(1,2):0\le\mu_i\lt 1\rbrace$ 안의 정수점이다.

# 정의

정수 벡터 $v_1,\dots,v_k$ 로 생성되는 원뿔

$$
C=\Bigl\lbrace\sum\_{i=1}^k\lambda_iv_i:\ \lambda_i\ge 0\Bigr\rbrace
$$

를 **유리 다면 원뿔(rational polyhedral cone)** 이라 한다. 유한 집합 $H\subseteq C\cap\mathbb Z^n$ 이 $C\cap\mathbb Z^n=\lbrace\sum\_{h\in H}m_hh:\ m_h\in\mathbb Z\_{\ge 0}\rbrace$ 를 만족하면 $H$ 를 $C$ 의 **Hilbert 기저**라 한다.

$C$ 가 직선을 포함하지 않을 때, $C\cap\mathbb Z^n$ 의 $0$ 이 아닌 원소 가운데 $0$ 이 아닌 두 원소의 합으로 쓰이지 않는 것을 **기약 원소**라 한다.

# 성질

## Gordan 보조정리

> **정리.** 유리 다면 원뿔 $C$ 는 Hilbert 기저를 갖는다.[^1]

증명의 요지. 생성 벡터 $v_1,\dots,v_k$ 와 반열린 평행체 $\Pi=\lbrace\sum\mu_iv_i:0\le\mu_i\lt 1\rbrace$ 를 잡는다. $C$ 의 정수점 $z=\sum\lambda_iv_i$ 를 $\sum\lfloor\lambda_i\rfloor v_i+\sum(\lambda_i-\lfloor\lambda_i\rfloor)v_i$ 로 나누면 둘째 합은 $z$ 에서 정수 벡터를 뺀 것이므로 정수점이고 $\Pi$ 에 든다. $\Pi$ 는 유계이므로 정수점이 유한 개이고, $H=\lbrace v_1,\dots,v_k\rbrace\cup(\Pi\cap\mathbb Z^n)$ 이 Hilbert 기저다. $\square$

직관 절의 $(1,1)$ 이 이 증명의 $\Pi\cap\mathbb Z^n$ 에서 나온 원소다.

## 최소 Hilbert 기저

> **정리 (van der Corput).** $C$ 가 직선을 포함하지 않으면 기약 원소 전체가 포함관계로 가장 작은 Hilbert 기저이고, 그런 기저는 유일하다.[^1]

기약 원소는 다른 원소들의 합으로 쓰이지 않으므로 모든 Hilbert 기저에 들어 있다. 거꾸로 $C$ 의 정수점은 기약이 아니면 두 원소의 합으로 쪼개지고, 직선을 포함하지 않으므로 $c^{\mathsf T}x\gt 0$ 인 정수 $c$ 에 대해 $c^{\mathsf T}x$ 가 쪼갤 때마다 줄어들어 유한 번에 기약 원소의 합이 된다.

## 정수 Carathéodory 수

[실수](real-numbers.md) 계수의 원뿔 결합은 Carathéodory 정리(Carathéodory's theorem)로 생성 벡터 $n$ 개면 충분하다. 직선을 포함하지 않는 원뿔의 정수점을 Hilbert 기저의 정수 결합으로 쓸 때는 기저 원소 $2n-1$ 개면 충분하다(Sebő).[^2] $n$ 개로는 부족한 원뿔이 $n=6$ 에서 있다.[^3]

# 활용

- **전체 쌍대 정수성.** 부등식계 $Ax\le b$ 가 TDI(total dual integrality) 인 것은 각 면에서 등호인 행들이 그 면의 원뿔의 Hilbert 기저를 이루는 것과 동치이고, 모든 유리 다면체에 TDI 계가 있다는 Giles–Pulleyblank 정리가 이 보조정리에서 나온다.
- **[토릭 다양체](toric-varieties.md).** 쌍대 원뿔의 정수점 반군이 유한 생성되므로 그 반군환이 유한 생성 대수이고, 아핀 토릭 다양체가 정의된다. 최소 Hilbert 기저의 원소 수가 아핀 토릭 다양체를 매장하는 아핀 공간의 최소 차원이다.
- **불변식 이론.** 원환면이 다항식환에 대각으로 작용할 때 불변 단항식은 원뿔의 정수점과 대응하고, Gordan 보조정리로 불변식환이 유한 생성된다.
- **정수계획의 시험 집합.** 정수계획 문제족에서 개선 방향 전체를 원뿔의 Hilbert 기저로 유한하게 모아 두는 Graver 기저가 이 보조정리의 확장이다.

[^1]: Alexander Schrijver, *Theory of Linear and Integer Programming*, Wiley, 1986, 16.4 절.
[^2]: András Sebő, "Hilbert bases, Carathéodory's theorem and combinatorial optimization", *Integer Programming and Combinatorial Optimization*, University of Waterloo, 1990, 431–455.
[^3]: Winfried Bruns, Joseph Gubeladze, Martin Henk, Alexander Martin, Robert Weismantel, "A counterexample to an integer analogue of Carathéodory's theorem", *Journal für die reine und angewandte Mathematik* **510** (1999), 179–185.

# 연관 문서

## 선수지식

- [Farkas 보조정리](farkas-lemma.md)

## 더 알아보기

- [전체 쌍대 정수성](total-dual-integrality.md)

#optimization #combinatorics #algebra
