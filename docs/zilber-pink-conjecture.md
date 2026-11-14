# Zilber–Pink 추측

# 개요

**Zilber–Pink 추측(Zilber–Pink conjecture)** 은 부분다양체가 특별한 부분다양체와 차원을 세어 예상한 것보다 크게 만나는 일이 유한 번만 일어난다는 진술이다. 공간에서 곡선 하나와 곡면 하나는 대개 점에서 만나고, 곡선과 다른 곡선은 대개 만나지 않는다. 이 진술은 곡선이 "대개 만나지 않을" 특별한 곡선들과 만나는 점이 유한 개라고 답한다.

# 직관

곱셈군 $(\mathbb C^\times)^3$ 안의 곡선 $C=\lbrace(t,\thinspace 1-t,\thinspace 1+t)\rbrace$ 를 잡는다. 정수 지수의 곱 관계 하나, 예를 들어 $x^2y=z$ 를 만족하는 $C$ 의 점을 찾으면 $t^2(1-t)=1+t$ 의 근이고 유한 개다. 관계 $x^ay^bz^c=1$ 은 정수 $(a,b,c)$ 마다 하나씩이므로, 관계 하나라도 만족하는 점을 모두 모으면 무한히 많을 수 있다.

관계 두 개를 동시에 만족하는 점은 사정이 다르다. 관계 하나로 정해지는 곡면은 $C$ 와 점에서 만나는 것이 차원으로 예상한 결과다. 관계 두 개로 정해지는 곡선은 다른 곡선 $C$ 와 만나지 않는 것이 예상이고, 만나면 우연이다.

Bombieri, Masser, Zannier 는 $C$ 가 관계 하나로 정해지는 곡면에 통째로 들어가지 않으면 이런 우연이 유한 번만 일어남을 증명했다[^1]. 꼬임점은 관계 세 개를 동시에 만족하는 점이므로, [Manin–Mumford 추측](manin-mumford-conjecture.md)의 곱셈군 판은 이 결과의 한 경우다.

# 정의

## 특별 부분다양체

곱셈군 $G=(\mathbb C^\times)^n$ 에서 정수 지수의 곱 관계 몇 개로 정해지는 연결 대수적 부분군을 부분토러스(subtorus)라 하고, 부분토러스를 꼬임점만큼 옮긴 것을 이 문맥의 특별 부분다양체라 한다. [아벨 다양체](abelian-varieties.md)에서는 Manin–Mumford 추측의 꼬임 잉여류가, [모듈러 곡선](modular-curves.md)의 곱에서는 [André–Oort 추측](andre-oort-conjecture.md)의 특별 부분다양체가 같은 자리에 온다. 직관 절에서 관계 두 개로 정해지는 곡선이 $(\mathbb C^\times)^3$ 의 1 차원 특별 부분다양체다.

## 비전형 교차

$S$ 를 위의 공간 가운데 하나, $X\subseteq S$ 를 기약 부분다양체, $T$ 를 특별 부분다양체라 한다. $X\cap T$ 의 기약 성분 $Y$ 가 다음을 만족하면 $Y$ 를 **비전형 교차(atypical intersection)** 라 한다.

$$
\dim Y\gt\dim X+\dim T-\dim S
$$

우변은 두 부분다양체가 일반적인 위치에 있을 때 교차의 차원이다. 직관 절에서 $\dim X=1$, $\dim T=1$, $\dim S=3$ 이므로 우변은 $-1$ 이고, $C$ 와 관계 두 개의 곡선이 만나는 점은 $\dim Y=0$ 인 비전형 교차다. 관계 하나의 곡면은 $\dim T=2$ 라 우변이 $0$ 이므로 그 교점은 비전형이 아니다.

## 진술

$X$ 의 비전형 교차 가운데 다른 비전형 교차에 진부분으로 들어가지 않는 것을 극대라 한다. 다음 진술을 **Zilber–Pink 추측** 이라 한다[^2].

> $X$ 의 극대 비전형 교차는 유한 개다.

$X$ 가 특별 부분다양체에 통째로 들어가지 않는 곡선이면, 이 진술은 $X$ 와 공차원 $2$ 이상의 특별 부분다양체들의 교점이 유한 개라는 것과 같다.

# 성질

## Manin–Mumford 와 André–Oort 의 포함

꼬임점 하나는 $0$ 차원 특별 부분다양체이고, $\dim X\lt\dim S$ 이면 $\dim X+0-\dim S\lt 0$ 이므로 $X$ 위의 꼬임점은 모두 비전형 교차다. 극대 비전형 교차가 유한 개라는 것에서 Manin–Mumford 추측의 결론이 유도된다[^2]. 특이 모듈러스의 점을 $0$ 차원 특별 부분다양체로 놓으면 같은 방법으로 André–Oort 추측이 유도된다.

## 곱셈군 안의 곡선

$\overline{\mathbb Q}$ 위에서 정의된 곡선 $C\subseteq(\mathbb C^\times)^n$ 이 진부분토러스의 잉여류에 들어가지 않으면, $C$ 와 공차원 $2$ 이상의 부분토러스 전부의 교점은 유한 개다. Bombieri, Masser, Zannier 가 1999 년에 증명했다[^1]. 증명은 교점의 높이를 위에서 누르는 단계와, 높이가 유계인 점이 유한 개라는 Northcott 성질(Northcott property)을 쓰는 단계로 나뉜다.

## o-최소 방법

Habegger 와 Pila 는 $\overline{\mathbb Q}$ 위에서 정의된 아벨 다양체 안의 곡선과 모듈러 곡선의 곱 안의 곡선에 대해 진술을 증명했다[^3]. 순서는 [Pila–Wilkie 정리](pila-wilkie-theorem.md)를 쓰는 Manin–Mumford 와 André–Oort 의 증명과 같다. 균일화로 올린 집합의 유리점 상한과 교점의 Galois 켤레 하한을 견준다.

# 활용

- [지수함수](exponential-function.md)의 [모형론](model-theory.md). Zilber 는 복소 지수함수의 성질을 공리로 적은 의사지수체(pseudo-exponential field)를 연구하며 곱셈군 판을 내놓았다. 그 공리계가 복소수체의 지수함수와 맞는지 판정하는 데 이 진술과 Schanuel 추측(Schanuel's conjecture)이 쓰인다[^2].
- 매개변수 족의 꼬임점. 매개변수 $\lambda$ 에 따라 움직이는 [타원곡선](elliptic-curves.md) 위의 두 점 $P_\lambda,Q_\lambda$ 가 동시에 꼬임점이 되는 $\lambda$ 는, 두 점 사이에 $\lambda$ 와 무관한 정수 계수 일차 관계가 없으면 유한 개다. Masser 와 Zannier 가 Legendre 족 $y^2=x(x-1)(x-\lambda)$ 의 $x$ 좌표 $2$ 와 $3$ 인 두 점에서 이것을 증명했고[^4], 족 전체를 하나의 공간으로 보면 비전형 교차의 유한성이다.

[^1]: E. Bombieri, D. Masser, U. Zannier, "Intersecting a curve with algebraic subgroups of multiplicative groups", International Mathematics Research Notices **1999** (1999), no. 20, 1119–1140.
[^2]: B. Zilber, "Exponential sums equations and the Schanuel conjecture", Journal of the London Mathematical Society **65** (2002), 27–44. R. Pink, "A combination of the conjectures of Mordell–Lang and André–Oort", *Geometric Methods in Algebra and Number Theory*, Progress in Mathematics **235**, Birkhäuser (2005), 251–282.
[^3]: P. Habegger, J. Pila, "O-minimality and certain atypical intersections", Annales Scientifiques de l'École Normale Supérieure **49** (2016), 813–858.
[^4]: D. Masser, U. Zannier, "Torsion anomalous points and families of elliptic curves", American Journal of Mathematics **132** (2010), 1677–1691.

# 연관 문서

## 선수지식

- [Manin–Mumford 추측](manin-mumford-conjecture.md)
- [André–Oort 추측](andre-oort-conjecture.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #logic
