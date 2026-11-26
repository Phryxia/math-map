# Lefschetz (1,1) 정리

# 개요

**Lefschetz (1,1) 정리(Lefschetz (1,1) theorem)** 는 콤팩트 Kähler 다양체의 정수 $2$ 차 코호몰로지류가 정칙 선다발의 첫째 Chern 류인 것과 그 류가 Hodge 분해의 $(1,1)$ 성분에만 놓이는 것이 동치라는 정리다. 복소 원환면 $\mathbb C^2/\Lambda$ 위에 곡선이 있는지, 있다면 몇 종류인지를 물으면 격자 $\Lambda$ 만 보고는 답하기 어렵다.

이 정리는 물음을 선형대수로 바꾼다. 정수 코호몰로지 $\mathbb Z^6$ 의 원소 가운데 $4$ 차원 부분공간 $H^{1,1}$ 에 들어가는 것을 세면, 곡선과 선다발의 류가 모두 나온다.

# 직관

$X=\mathbb C^2/\Lambda$ 의 $H^2(X,\mathbb Z)$ 는 계수 $6$ 이고, 복소계수로 넓히면 다음 분해를 갖는다.

$$
H^2(X,\mathbb C)=H^{2,0}\oplus H^{1,1}\oplus H^{0,2}
$$

$H^{2,0}$ 은 $dz\_1\wedge dz\_2$ 로, $H^{0,2}$ 는 그 켤레로 생성되고 $H^{1,1}$ 은 $dz\_i\wedge d\bar z\_j$ 네 개로 생성된다. 곡선 $C\subset X$ 위에서는 정칙 좌표가 하나뿐이므로 $dz\_1\wedge dz\_2$ 를 $C$ 로 제한하면 $0$ 이고, $\int_C dz\_1\wedge dz\_2=0$ 이다. 그래서 곡선의 류는 $H^{2,0}$ 과 $H^{0,2}$ 성분이 없고 $H^{1,1}$ 에 놓인다.

격자를 일반적으로 고르면 $\mathbb Z^6$ 의 $0$ 이 아닌 원소 가운데 $H^{1,1}$ 에 들어가는 것이 없다. 그러면 $X$ 에는 곡선이 하나도 없다. $X$ 가 두 타원곡선의 곱 $E\_1\times E\_2$ 이면 $E\_1\times\lbrace p\rbrace$ 와 $\lbrace q\rbrace\times E\_2$ 의 류가 $H^{1,1}$ 에 들어간다. Lefschetz (1,1) 정리는 이 필요조건이 충분조건이기도 하다고 말한다.

# 정의

$X$ 를 콤팩트 [Kähler 다양체](kahler-manifolds.md)라 하고, 정칙 선다발 $L$ 에 그 첫째 Chern 류 $c\_1(L)\in H^2(X,\mathbb Z)$ 를 대응시킨다. 정수류 $\alpha$ 의 $H^2(X,\mathbb C)$ 에서의 상이 $H^{1,1}$ 에 들어갈 때 $\alpha$ 를 $(1,1)$ 류라 한다.

정리. $\alpha\in H^2(X,\mathbb Z)$ 가 어떤 정칙 선다발의 $c\_1$ 일 필요충분조건은 $\alpha$ 가 $(1,1)$ 류인 것이다[^1].

$(1,1)$ 류 전체가 이루는 군을 **Néron–Severi 군(Néron–Severi group)** $\mathrm{NS}(X)$ 라 하고, 그 계수를 Picard 수 $\rho$ 라 한다. 직관 절의 일반적인 원환면은 $\rho=0$ 이다.

# 성질

## 지수 완전열로 하는 증명

정칙함수의 층 $\mathcal O$ 와 $0$ 이 없는 정칙함수의 층 $\mathcal O^\ast$ 사이에 $f\mapsto e^{2\pi if}$ 가 있고, 핵은 정수값 상수함수다. 다음 [완전열](exact-sequences.md)이 생긴다.

$$
0\to\mathbb Z\to\mathcal O\to\mathcal O^\ast\to 0
$$

[층 코호몰로지](sheaf-cohomology.md)의 긴 완전열에서 $H^1(X,\mathcal O^\ast)=\mathrm{Pic}(X)$ 다음은 $H^2(X,\mathbb Z)\to H^2(X,\mathcal O)$ 이다. 연결 사상은 $c\_1$ 이고, $H^2(X,\mathcal O)\cong H^{0,2}$ 로 가는 사상은 $\alpha$ 의 $(0,2)$ 성분을 취하는 것이다. 그래서 $\alpha$ 가 $c\_1$ 의 상에 있을 필요충분조건은 $(0,2)$ 성분이 $0$ 인 것이다. $\alpha$ 가 실수류이므로 $(2,0)$ 성분은 $(0,2)$ 성분의 켤레이고 함께 $0$ 이다.

## Picard 군의 구조

같은 완전열에서 $c\_1$ 의 핵은 $H^1(X,\mathcal O)/H^1(X,\mathbb Z)$ 이고, 이것은 복소 원환면 $\mathrm{Pic}^0(X)$ 이다. 다음 완전열이 성립한다.

$$
0\to\mathrm{Pic}^0(X)\to\mathrm{Pic}(X)\to\mathrm{NS}(X)\to 0
$$

[Picard 군](picard-group.md)은 연속적으로 움직이는 부분 $\mathrm{Pic}^0$ 과 이산적인 부분 $\mathrm{NS}$ 로 나뉜다. 곡선에서는 $\mathrm{NS}=\mathbb Z$ 가 차수이고 $\mathrm{Pic}^0$ 이 [Jacobi 다양체](jacobian-variety.md)다.

## Picard 수의 상한

$\mathrm{NS}(X)\otimes\mathbb R$ 은 $H^{1,1}$ 의 실수 부분에 들어가므로 $\rho\le h^{1,1}$ 이다. [K3 곡면](k3-surfaces.md)은 $h^{1,1}=20$ 이라 $\rho\le 20$ 이다. 두 타원곡선의 곱은 $h^{1,1}=4$ 이고, $\rho$ 는 두 곡선이 동종이 아니면 $2$, 동종이고 복소곱셈이 없으면 $3$, 동종이고 복소곱셈을 가지면 $4$ 다[^2].

## 사영 다양체에서

$X$ 가 사영 다양체이면 정칙 선다발은 인자에서 오므로, $(1,1)$ 류는 모두 곡선이나 초곡면의 정수 결합의 류다. 이것이 Hodge 추측(Hodge conjecture)의 $k=1$ 경우다.

# 활용

- Hodge 추측. [Hodge 이론](hodge-theory.md)의 Hodge 류가 대수적 순환에서 오는지 묻는 추측은 $2$ 차에서 이 정리로 참이다. Kähler 다양체 문서의 Hodge 추측 절이 이 경우를 든다.
- 격자로 하는 곡면의 계산. [Enriques 곡면](enriques-surfaces.md)과 K3 곡면의 Picard 격자를 둘째 코호몰로지 격자 안의 $(1,1)$ 정수류로 계산한다.
- 사영성 판정. [Kodaira 매장 정리](kodaira-embedding-theorem.md)와 함께 쓰면, 콤팩트 Kähler 다양체가 사영 다양체일 필요충분조건은 $(1,1)$ 류 가운데 Kähler 류가 있는 것이다. 직관 절의 일반적인 원환면은 $\rho=0$ 이므로 사영 다양체가 아니다.
- [Hodge 지표 정리](hodge-index-theorem.md). 곡면에서 $\mathrm{NS}(X)\otimes\mathbb R$ 이 $H^{1,1}$ 안에 있다는 것과 $H^{1,1}$ 의 부호수 $(1,h^{1,1}-1)$ 에서 $\mathrm{NS}$ 의 부호수 $(1,\rho-1)$ 이 나온다.

[^1]: P. Griffiths and J. Harris, *Principles of Algebraic Geometry*, Wiley, 1978, Chapter 1, Section 1.

[^2]: C. Birkenhake and H. Lange, *Complex Abelian Varieties*, 2nd ed., Grundlehren der mathematischen Wissenschaften 302, Springer, 2004, Chapter 5.

# 연관 문서

## 선수지식

- [Picard 군](picard-group.md)
- [Kähler 다양체](kahler-manifolds.md)

## 더 알아보기

- [Kodaira 매장 정리](kodaira-embedding-theorem.md)
- [Noether–Lefschetz 정리](noether-lefschetz-theorem.md)

#complex_analysis #algebra #differential_geometry #theorem
