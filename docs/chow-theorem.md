# Chow 정리

# 개요

**Chow 정리(Chow's theorem)** 는 복소 사영공간 안에서 국소적으로 정칙함수의 영점으로 정의되는 닫힌 집합이 동차다항식의 공통 영점이라는 정리다. $\mathbb C^2$ 의 곡선 $y=e^x$ 는 정칙함수 $y-e^x$ 의 영점이지만, 어떤 다항식의 영점도 아니다.

사영공간처럼 무한원점까지 붙여 콤팩트하게 만든 공간에서는 이런 곡선이 닫힌 해석적 집합으로 남지 못한다. Chow 정리는 그래서 사영공간 안의 해석적 대상을 [사영다양체](projective-varieties.md)로 다루게 해 준다.

# 직관

곡선 $C:y=e^x$ 와 직선 $y=1$ 은 $x=2\pi ik$ $(k\in\mathbb Z)$ 에서 만나므로 교점이 무한히 많다. 차수 $d$ 인 대수곡선은 자신에 포함되지 않는 직선과 많아야 $d$ 점에서 만나므로 $C$ 는 대수곡선이 아니다.

$\mathbb C^2$ 를 사영평면 $\mathbb P^2$ 의 $z\ne 0$ 인 부분으로 보면, 교점 $(2\pi ik,1)$ 은 $k\to\infty$ 에서 직선 $y=1$ 의 무한원점 $(1:0:0)$ 으로 모인다. $C$ 의 폐포가 그 점 근처에서 정칙함수 $f$ 의 영점이라면, $f$ 를 직선 $y=1$ 에 제한한 한 변수 정칙함수가 그 점으로 모이는 영점을 무한히 가지므로 항등적으로 $0$ 이고, 그 점 근처의 직선이 $C$ 의 폐포에 들어가야 한다. $C$ 와 직선의 교점은 띄엄띄엄 놓여 있으므로 $C$ 의 폐포는 사영평면의 해석적 집합이 아니다.

# 정의

닫힌 집합 $X\subset\mathbb P^n$ 의 각 점 $p$ 에 근방 $U$ 와 $U$ 위의 정칙함수 $f\_1,\dots,f\_k$ 가 있어 $X\cap U$ 가 그 공통 영점이면 $X$ 를 **해석적 부분집합(analytic subset)** 이라 한다. 직관 절의 $C$ 는 $\mathbb C^2$ 의 해석적 부분집합이고, 그 폐포는 $\mathbb P^2$ 의 해석적 부분집합이 아니다.

정리. $\mathbb P^n$ 의 해석적 부분집합은 유한 개의 동차다항식의 공통 영점이다[^1].

# 성질

## 원뿔로 하는 증명

$X\subset\mathbb P^n$ 의 원뿔 $\widehat X\subset\mathbb C^{n+1}$ 을 $X$ 의 점이 나타내는 직선들의 합집합으로 둔다. $\widehat X$ 는 원점 밖에서 해석적이고, Remmert–Stein 확장 정리(Remmert–Stein extension theorem)로 원점까지 포함해 해석적이다.

원점 근처에서 $\widehat X$ 를 정의하는 정칙함수 $f$ 를 동차 성분 $f=\sum\_d f\_d$ 로 전개한다. $\widehat X$ 는 상수배에 닫혀 있으므로 $f(tv)=\sum\_d t^df\_d(v)=0$ 이 모든 작은 $t$ 에서 성립하고, 각 동차다항식 $f\_d$ 가 $\widehat X$ 위에서 $0$ 이다. Noether 성질로 유한 개의 $f\_d$ 가 $X$ 를 정의한다[^1].

## 정칙사상의 대수성

사영다양체 사이의 정칙사상은 그래프가 $\mathbb P^n\times\mathbb P^m$ 의 해석적 부분집합이다. Segre 매장으로 이 곱을 사영공간에 넣고 Chow 정리를 쓰면 그래프가 대수적 집합이므로 정칙사상은 다항식으로 주어지는 사상이다.

같은 이유로 사영공간에 매장된 콤팩트 [Riemann 곡면](riemann-surfaces.md)은 대수곡선이다.

## GAGA

Serre 는 Chow 정리를 층으로 넓혔다. 사영다양체 위의 연접 해석적 층은 모두 대수적 연접층에서 오고, 두 층의 [층 코호몰로지](sheaf-cohomology.md)가 같다(GAGA, géométrie algébrique et géométrie analytique)[^2]. Chow 정리는 이 가운데 구조층의 몫에 관한 경우다.

## 콤팩트성의 역할

정리는 $\mathbb C^n$ 에서 성립하지 않고, 직관 절의 $y=e^x$ 가 반례다. 콤팩트 복소다양체여도 사영공간에 들어가지 않으면 결론이 없다. 일반적인 $2$ 차원 복소 원환면은 콤팩트이지만 곡선을 하나도 갖지 않고, 다항식으로 정의할 방법이 없다.

# 활용

- 사영성과 대수성. [Kodaira 매장 정리](kodaira-embedding-theorem.md)로 사영공간에 매장된 복소다양체는 Chow 정리로 사영 대수다양체가 된다.
- 타원곡선. [타원함수](elliptic-functions.md) $\wp$, $\wp'$ 으로 원환면을 사영평면에 넣은 상은 Chow 정리에 따라 다항식의 영점이고, 실제로 삼차식 $y^2=4x^3-g\_2x-g\_3$ 이다.
- 대수기하와 복소기하의 교환. [Hodge 이론](hodge-theory.md)이나 [Kähler 다양체](kahler-manifolds.md)의 해석적 방법으로 얻은 부분다양체와 사상을 대수기하의 대상으로 옮길 때 쓴다.

[^1]: P. Griffiths and J. Harris, *Principles of Algebraic Geometry*, Wiley, 1978, Chapter 1, Section 3.

[^2]: J.-P. Serre, Géométrie algébrique et géométrie analytique, *Annales de l'Institut Fourier* 6 (1956), 1–42.

# 연관 문서

## 선수지식

- [사영다양체](projective-varieties.md)
- [정칙함수](holomorphic-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #complex_analysis #theorem
