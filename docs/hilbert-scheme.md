# Hilbert 스킴

# 개요

Hilbert 스킴은 고정한 사영공간 안에서 Hilbert 다항식이 정해진 닫힌 부분스킴의 모듈라이 공간이다. 부분스킴을 점으로 갖는 사영 스킴이고 섬세하다. 부분스킴이 극한에서 퇴화하는 자리를 비축소 구조로 받아 두므로 콤팩트성을 잃지 않는다.

# 직관

평면의 점 두 개를 분류한다. 서로 다른 두 점은 좌표 네 개로 정해지고 순서를 지우면 자유도가 넷인 집합이 남는다. 두 점이 하나로 모이는 극한에서는 점 하나만 남으므로 그 극한은 두 점의 집합이 아니다. 자유도 넷을 유지하려면 극한에 무엇이 남는지 봐야 한다.

점을 좌표로 세지 않고 그 점에서 $0$ 이 되는 다항식으로 센다. $p=(0,0)$ 과 $q=(t,0)$ 두 점에서 $0$ 이 되는 다항식 전체는 $y$ 와 $x(x-t)$ 가 생성하는 아이디얼이다. $t$ 를 $0$ 으로 보내면 생성원이 $y$ 와 $x^2$ 가 된다. 이 아이디얼은 $(0,0)$ 에서 $0$ 이 되는 다항식 전체 $(x,y)$ 보다 작다. $x$ 를 담지 않으므로 점 하나보다 많은 정보, 곧 두 점이 모여 온 방향을 기억한다.

$y$ 와 $x^2$ 가 생성하는 아이디얼에 대응하는 대상은 점이 아니라 길이 $2$ 의 부분스킴이다. 좌표환 $\mathbb C\lbrack x,y\rbrack/(y,x^2)$ 가 $\mathbb C$ 위에서 차원 $2$ 이고, 서로 다른 두 점의 좌표환도 차원 $2$ 다. 이 차원을 보존하는 부분스킴을 전부 모으면 극한이 안에 들어오고 모든 점이 같은 차원을 갖는다. 차원 대신 비틀린 층의 Euler 표수를 쓰면 같은 셈을 사영공간의 임의의 부분스킴으로 넓힐 수 있다.

# 정의

$Z\subset\mathbb P^n$ 을 닫힌 부분스킴이라 한다. $Z$ 의 **Hilbert 다항식**은

$$P_Z(m)=\chi(\mathcal O_Z(m))=\sum_i (-1)^i \dim H^i(Z,\mathcal O_Z(m))$$

로 정해지는 $m$ 의 다항식이다. 큰 $m$ 에서 $P_Z(m)=\dim H^0(Z,\mathcal O_Z(m))$ 이다. 차수 $d$ 의 곡면은 $P_Z$ 의 차수가 $\dim Z$ 이고 최고차 계수가 $d/(\dim Z)!$ 다.

**Hilbert 함자**는 스킴 $S$ 에 집합

$$\mathrm{Hilb}^P(S)=\lbrace Z\subset\mathbb P^n\times S \text{ 닫힌 부분스킴},\ Z\to S \text{ 평탄},\ P\_{Z_s}=P \rbrace$$

를 대응시키는 반변 함자다. 평탄성이 섬유의 Hilbert 다항식을 일정하게 유지하는 조건이다.

**Hilbert 스킴** $\mathrm{Hilb}^P(\mathbb P^n)$ 은 이 함자를 표현하는 스킴이다. 보편족은 $\mathrm{Hilb}^P(\mathbb P^n)$ 위의 평탄족 $\mathcal Z$ 이고, 임의의 평탄족은 유일한 사상에 따른 $\mathcal Z$ 의 당김이다.

$P$ 가 상수 $n$ 인 경우를 $\mathrm{Hilb}^n(X)$ 로 적고 **점들의 Hilbert 스킴**이라 한다. 그 점은 $X$ 위의 길이 $n$ 인 영차원 부분스킴이다.

# 성질

## 표현가능성과 사영성

$\mathrm{Hilb}^P(\mathbb P^n)$ 은 존재하고 사영 스킴이다.[^1]

증명의 요지. 평탄족의 섬유는 큰 $m$ 에서 같은 차원의 선형계를 끊어 내므로, $Z$ 를 차수 $m$ 의 동차다항식이 만드는 공간 안에서 $Z$ 를 소멸시키는 부분공간으로 바꿔 적을 수 있다. 이 대응이 Hilbert 함자를 Grassmann 다양체의 부분함자로 심고, 평탄성 조건이 Grassmann 다양체 안의 닫힌 조건이 된다. [Grassmann 다양체](grassmannian.md)가 사영적이므로 닫힌 부분스킴도 사영적이다.

이 구성이 모듈라이 공간을 기하 불변량 이론으로 만드는 자리에서 매개공간으로 쓰인다. 분류할 대상을 사영공간 안에 심고 그 심기의 선택을 군의 작용으로 지우는 방식이다.

## 접공간

$Z\subset\mathbb P^n$ 에 대응하는 점에서 Hilbert 스킴의 접공간은 법층의 대역 절단이다.

$$T\_{\lbrack Z\rbrack}\mathrm{Hilb}^P(\mathbb P^n)=H^0(Z,\mathcal N\_{Z/\mathbb P^n})$$

$Z$ 가 매끄러우면 $\mathcal N\_{Z/\mathbb P^n}$ 이 벡터다발이고 그 절단이 $Z$ 를 바깥으로 미는 일차 변형이다. $H^1(Z,\mathcal N\_{Z/\mathbb P^n})=0$ 이면 그 점에서 Hilbert 스킴이 매끄럽다.

## 매끄러움과 특이성

곡면 위의 점들의 Hilbert 스킴은 매끄럽다. $X$ 가 매끄러운 사영곡면이면 $\mathrm{Hilb}^n(X)$ 는 차원 $2n$ 의 매끄러운 다양체다.[^2]

세 차원 이상에서는 그렇지 않다. $\mathrm{Hilb}^n(\mathbb P^3)$ 은 $n\ge 8$ 에서 특이점을 갖는다. 공간곡선을 매개하는 Hilbert 스킴에는 기약이 아니고 축소되지도 않는 성분이 있다.[^3]

## Hilbert–Chow 사상

$\mathrm{Hilb}^n(X)$ 의 점에 그 부분스킴의 받침을 중복도와 함께 대응시키면 사상

$$\mathrm{Hilb}^n(X)\to \mathrm{Sym}^n(X)$$

이 나온다. $\mathrm{Sym}^n(X)$ 는 $X^n$ 을 대칭군으로 나눈 몫이다. 서로 다른 $n$ 개의 점 위에서는 이 사상이 동형이고, 점이 겹치는 자리에서 섬유가 양차원이 된다. $X$ 가 곡면이면 이 사상이 특이점을 갖는 몫의 해소다.

# 활용

- **모듈라이 공간의 구성.** [모듈라이 공간](moduli-space.md)을 기하 불변량 이론으로 만들 때 안정 대상을 사영공간에 심은 전체를 Hilbert 스킴으로 매개하고, 심기의 자유도를 일반선형군의 작용으로 지운다. 곡선의 모듈라이 공간이 이 방식으로 구성된다.
- **대칭함수와 표현론.** 곡면 위의 점들의 Hilbert 스킴의 코호몰로지를 $n$ 에 대해 모두 모으면 무한차원 Heisenberg 대수의 표현이 되고, 그 특수화가 대칭함수의 항등식을 준다.[^4] 평면의 경우 고정점이 [분할](partitions.md)과 짝지어지고 토러스 작용의 지표가 Macdonald 다항식으로 나온다.
- **특이점의 해소.** $\mathrm{Hilb}^n(X)$ 와 Hilbert–Chow 사상이 대칭곱의 해소를 주므로, 곡면의 대칭곱 위의 교차 계산을 매끄러운 공간으로 옮겨 할 수 있다.

[^1]: A. Grothendieck, "Techniques de construction et théorèmes d'existence en géométrie algébrique IV: Les schémas de Hilbert", Séminaire Bourbaki **6** (1960–1961), exp. 221, 249–276.

[^2]: J. Fogarty, "Algebraic Families on an Algebraic Surface", American Journal of Mathematics **90** (1968), 511–521.

[^3]: D. Mumford, "Further Pathologies in Algebraic Geometry", American Journal of Mathematics **84** (1962), 642–648.

[^4]: H. Nakajima, *Lectures on Hilbert Schemes of Points on Surfaces*, American Mathematical Society, 1999.

# 연관 문서

## 선수지식

- [모듈라이 공간](moduli-space.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #ring_theory #combinatorics
