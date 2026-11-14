# André–Oort 추측

# 개요

**André–Oort 추측(André–Oort conjecture)** 은 [모듈라이 공간](moduli-space.md)의 부분다양체 위에 복소 곱셈을 갖는 대상에 대응하는 점이 얼마나 많이 놓일 수 있는지를 정하는 진술이다. 두 좌표가 모두 복소 곱셈을 갖는 [타원곡선](elliptic-curves.md)의 $j$ 값인 평면의 점을 찾으면, 대각선 $x=y$ 위에는 무한히 많고 직선 $x+y=1$ 위에는 유한 개다. 이 진술은 이런 점이 무한히 많으려면 부분다양체가 타원곡선 사이의 동종 관계나 좌표 고정으로 정해지는 특별한 꼴이어야 한다고 답한다.

# 직관

타원곡선은 $j$ 값 하나로 동형을 빼고 정해지므로, 복소평면 $\mathbb C$ 의 점 하나가 타원곡선 하나다. [복소 곱셈](complex-multiplication.md)을 갖는 곡선의 $j$ 값은 $y^2=x^3-x$ 의 $j=1728$ 과 $y^2=x^3+1$ 의 $j=0$ 같은 것이고, 허수 이차체마다 이런 값이 있어 무한히 많다. 이런 $j$ 값을 특이 모듈러스라 한다.

평면 $\mathbb C^2$ 에서 두 좌표가 모두 특이 모듈러스인 점을 찾는다. 직선 $x=1728$ 위에는 $(1728,j)$ 가 특이 모듈러스 $j$ 마다 하나씩 있어 무한히 많다. 대각선 $x=y$ 위에도 $(j,j)$ 가 무한히 많다.

곡선 $E$ 가 복소 곱셈을 가지면 $E$ 에서 차수 $N$ 인 동종사상으로 가는 곡선 $E'$ 도 복소 곱셈을 갖는다. 그래서 두 좌표가 차수 $N$ 인 동종사상으로 이어진 곡선들의 $j$ 값인 점의 모임, 곧 모듈러 다항식 $\Phi_N(x,y)=0$ 의 해집합 위에도 이런 점이 무한히 많다. 대각선은 $N=1$ 인 경우다.

직선 $x+y=1$ 은 어느 꼴도 아니고, 그 위에서 두 좌표가 모두 특이 모듈러스인 점은 유한 개다. 무한히 많은 점을 주는 것이 좌표 고정과 동종 관계뿐이라는 것이 이 추측이다. [Manin–Mumford 추측](manin-mumford-conjecture.md)에서 꼬임점과 꼬임 잉여류가 하던 자리를 특이 모듈러스와 모듈러 다항식이 맡는다.

# 정의

## 특이 모듈러스

상반평면의 점 $\tau$ 가 허수 이차 [무리수](irrational-numbers.md), 곧 정수 $a,b,c$ 에 대해 $a\tau^2+b\tau+c=0$ 이고 $D=b^2-4ac\lt 0$ 이면 $j(\tau)$ 를 **특이 모듈러스(singular modulus)** 라 한다. $\gcd(a,b,c)=1$ 일 때 $D$ 를 그 [판별식](discriminant.md)이라 한다. $\tau=i$ 는 $\tau^2+1=0$ 이므로 $D=-4$ 이고 $j(i)=1728$ 이다. [Shimura 다양체](shimura-varieties.md)의 특수점은 $\mathrm{GL}\_2$ 의 경우 이런 $\tau$ 들이다.

## 특별 부분다양체

$\mathbb C^n$ 의 기약 부분다양체 가운데 다음 꼴의 식들로 정해지는 것을 **특별 부분다양체(special subvariety)** 라 한다.

- 좌표 하나를 특이 모듈러스로 고정하는 식 $x_i=j_0$.
- 두 좌표를 모듈러 다항식으로 잇는 식 $\Phi_N(x_i,x_k)=0$.

직관 절의 직선 $x=1728$, 대각선 $x=y$, 곡선 $\Phi_N(x,y)=0$ 이 $\mathbb C^2$ 의 특별 곡선이다. 특이 모듈러스를 좌표로 하는 점 하나도 $0$ 차원 특별 부분다양체다.

## 진술

$S$ 를 Shimura 다양체, $X\subseteq S$ 를 닫힌 부분다양체라 한다. 다음 진술을 **André–Oort 추측** 이라 한다.

> $X$ 안의 특수점의 Zariski 닫힘은 $X$ 에 들어가는 특별 부분다양체 유한 개의 합집합이다.

$S=\mathbb C^n$ 은 [모듈러 곡선](modular-curves.md) $\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H$ 를 $j$ 로 $\mathbb C$ 와 같게 놓고 $n$ 개 곱한 Shimura 다양체다.

# 성질

## 평면 곡선의 경우

André 는 1998 년에 $\mathbb C^2$ 의 기약 곡선 $X$ 가 특별 곡선이 아니면 $X$ 위에서 두 좌표가 모두 특이 모듈러스인 점이 유한 개임을 증명했다[^1]. 직관 절의 직선 $x+y=1$ 이 이 경우다.

## Pila 정리

Pila 는 2011 년에 $\mathbb C^n$ 의 모든 부분다양체에 대해 진술을 증명했다[^2]. 증명은 Pila–Zannier 의 Manin–Mumford 증명과 같은 순서다.

- 올림. $j$ 를 기본영역에 제한한 함수로 $X$ 를 상반평면의 곱 안의 집합 $Z$ 로 올린다. 이 제한은 o-최소 구조에서 정의 가능하다.
- 상한. 판별식 $D$ 인 특수점은 $Z$ 안의 이차 무리수 좌표의 점이고, 그 높이는 $\lvert D\rvert$ 의 거듭제곱으로 위에서 눌린다. [Pila–Wilkie 정리](pila-wilkie-theorem.md)의 대수적 점 판에 따라 $Z$ 의 반대수적 부분 밖에 있는 그런 점은 모든 $\varepsilon\gt 0$ 에 대해 $c_\varepsilon\lvert D\rvert^{\varepsilon}$ 개 이하다.
- 하한. 판별식 $D$ 인 특이 모듈러스의 $\mathbb Q$ 위 켤레는 류수 $h(D)$ 개이고, Siegel 정리(Siegel's theorem)에 따라 $h(D)\ge c_\varepsilon\lvert D\rvert^{1/2-\varepsilon}$ 이다.
- 마무리. 두 한계를 견주면 반대수적 부분 밖의 특수점은 $\lvert D\rvert$ 가 유계인 것뿐이다. 반대수적 부분이 특별 부분다양체에서 온다는 것은 $j$ 함수의 Ax–Lindemann 정리(Ax–Lindemann theorem)로 증명한다.

## Siegel 모듈라이 다양체와 일반 Shimura 다양체

주편극 [아벨 다양체](abelian-varieties.md)의 모듈라이 공간 $\mathcal A_g$ 에서는 Galois 켤레의 하한이 남은 단계였다. Tsimerman 은 평균 Colmez 추측(averaged Colmez conjecture)의 증명을 써서 이 하한을 얻고 $\mathcal A_g$ 의 경우를 증명했다[^3]. Pila, Shankar, Tsimerman 은 특수점의 높이를 Shimura 다양체 일반에서 위에서 눌러 모든 Shimura 다양체의 경우를 증명했다[^4].

# 활용

- 효과적 판. Siegel 하한은 상수 $c_\varepsilon$ 을 계산할 수 없어서 Pila 의 증명은 판별식의 상한을 주지 않는다. Kühne 와 Bilu, Masser, Zannier 는 평면 곡선의 경우 상한을 명시했고, 직선 $x+y=1$ 위에는 두 좌표가 모두 특이 모듈러스인 점이 하나도 없음을 보였다[^5].
- Zilber–Pink 추측(Zilber–Pink conjecture). Manin–Mumford 추측과 André–Oort 추측을 함께 일반화해, 부분다양체와 특별 부분다양체의 교차가 예상보다 큰 차원을 갖는 경우를 제한하는 진술이다. 두 정리의 증명에서 쓴 상한과 하한의 비교가 이 진술의 부분 결과에도 쓰인다.

[^1]: Y. André, "Finitude des couples d'invariants modulaires singuliers sur une courbe algébrique plane non modulaire", Journal für die reine und angewandte Mathematik **505** (1998), 203–208.
[^2]: J. Pila, "O-minimality and the André–Oort conjecture for ℂⁿ", Annals of Mathematics **173** (2011), 1779–1840.
[^3]: J. Tsimerman, "The André–Oort conjecture for 𝒜g", Annals of Mathematics **187** (2018), 379–390.
[^4]: J. Pila, A. N. Shankar, J. Tsimerman, "Canonical heights on Shimura varieties and the André–Oort conjecture", arXiv:2109.08788 (2021).
[^5]: Yu. Bilu, D. Masser, U. Zannier, "An effective 'theorem of André' for CM-points on a plane curve", Mathematical Proceedings of the Cambridge Philosophical Society **154** (2013), 145–152.

# 연관 문서

## 선수지식

- [Shimura 다양체](shimura-varieties.md)
- [복소 곱셈](complex-multiplication.md)
- [Pila–Wilkie 정리](pila-wilkie-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #logic
