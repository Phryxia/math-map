# Serre 쌍대성

# 개요

**Serre 쌍대성(Serre duality)** 은 콤팩트 복소다양체 위에서 선다발의 높은 차수 코호몰로지를 표준다발과의 짝의 낮은 차수 코호몰로지의 쌍대 공간으로 바꾸는 정리다. Riemann 구에서 무한원점에 이중 영점을 갖는 함수들의 첫째 코호몰로지가 몇 차원인지 물으면, 정의대로 계산하려면 겹친 영역의 Laurent 급수를 따져야 한다.

Serre 쌍대성은 이 물음을 미분형식을 세는 일로 바꾼다. 쌍을 이루는 방법은 함수와 형식을 곱해 유수를 취하는 것이다.

# 직관

Riemann 구 $\mathbb P^1$ 을 $z\ne\infty$ 인 $U\_0$ 과 $z\ne 0$ 인 $U\_1$ 로 덮는다. $D=-n\lbrack\infty\rbrack$ $(n\ge 1)$ 에 대해 $\mathcal O(D)$ 의 단면은 $\infty$ 에서 $n$ 차 이상의 영점을 갖는 함수다. [층 코호몰로지](sheaf-cohomology.md)의 Čech 계산에서 $H^1(\mathcal O(D))$ 는 $U\_0\cap U\_1$ 위의 Laurent 급수 $\sum a\_mz^m$ 를 $U\_0$ 의 함수와 $U\_1$ 의 함수의 합으로 나눈 몫이다.

$U\_0$ 의 함수는 $m\ge 0$ 인 항만 갖고, $U\_1$ 의 함수는 $\infty$ 에서 $n$ 차 영점이 있으므로 $m\le -n$ 인 항만 갖는다. 남는 항은 $z^{-1},\dots,z^{-(n-1)}$ 이고 $H^1(\mathcal O(D))$ 는 $n-1$ 차원이다.

반대쪽에서 표준인자는 $K=-2\lbrack\infty\rbrack$ 이므로 $K-D=(n-2)\lbrack\infty\rbrack$ 이고, $\mathcal O(K-D)$ 의 단면인 정칙 미분형식은 $dz,z\thinspace dz,\dots,z^{n-2}dz$ 로 $n-1$ 개다. 남는 항 $z^{-k}$ 과 형식 $z^{k-1}dz$ 를 곱하면 $dz/z$ 이고 유수가 $1$ 이다. 두 공간이 유수로 짝지어져 차원이 같다.

# 정의

$X$ 를 $n$ 차원 콤팩트 복소다양체, $K_X$ 를 정칙 $n$ 형식의 선다발, $E$ 를 정칙 벡터다발, $E^\vee$ 를 그 쌍대라 한다. **Serre 쌍대성** 은 다음 동형이다[^1].

$$
H^i(X,E)\cong H^{n-i}(X,E^\vee\otimes K_X)^\vee
$$

동형은 다음 곱과 적분 $H^n(X,K_X)\to\mathbb C$ 를 합성한 쌍이 비퇴화라는 것으로 주어진다.

$$
H^i(X,E)\times H^{n-i}(X,E^\vee\otimes K_X)\to H^n(X,K_X)
$$

매끄러운 사영다양체에서도 같은 진술이 대수적으로 성립한다[^2].

곡선에서 $E=\mathcal O(D)$, $i=1$ 이면 $H^1(\mathcal O(D))\cong H^0(\mathcal O(K-D))^\vee$ 이고, 쌍은 직관 절처럼 유수의 합이다.

# 성질

## Dolbeault 코호몰로지로 하는 증명

$H^i(X,E)$ 는 $E$ 값 $(0,i)$ 형식의 $\bar\partial$ 코호몰로지와 같다. $E$ 값 $(0,i)$ 형식 $\alpha$ 와 $E^\vee$ 값 $(n,n-i)$ 형식 $\beta$ 에 대해 $\int_X\alpha\wedge\beta$ 가 쌍을 준다. 에르미트 계량을 고르면 조화형식이 각 코호몰로지류의 대표가 되고, 켤레선형 Hodge 별 작용소가 조화형식끼리를 일대일로 보내므로 쌍이 비퇴화다[^1].

## 곡선

곡선에서 $D=0$ 이면 $h^1(\mathcal O)=h^0(K)=g$ 이고, $D=K$ 이면 $h^1(K)=h^0(\mathcal O)=1$ 이다. [Riemann–Roch 정리](riemann-roch.md)의 두 꼴 $h^0(D)-h^1(D)=\deg D+1-g$ 와 $\ell(D)-\ell(K-D)=\deg D+1-g$ 가 이 쌍대성으로 이어진다.

## 곡면

곡면에서 $h^2(\mathcal O)=h^0(K)=p_g$, $h^1(\mathcal O)=h^1(K)=q$ 다. 그래서 $\chi(\mathcal O)=1-q+p_g$ 이고, 이 수가 [Noether 공식](noether-formula.md)의 좌변이다.

## Hodge 수의 대칭

$E=\Omega^p$ 로 두면 $\Omega^{p\vee}\otimes K_X\cong\Omega^{n-p}$ 이므로 $h^{p,q}=h^{n-p,n-q}$ 이다. [Kähler 다양체](kahler-manifolds.md)에서는 켤레 대칭 $h^{p,q}=h^{q,p}$ 와 함께 Hodge 다이아몬드의 두 대칭을 이룬다.

## 쌍대 층

$X$ 가 매끄럽지 않아도 Cohen–Macaulay 사영다양체이면 쌍대 층 $\omega_X$ 가 있어 $H^i(X,\mathcal F)\cong\mathrm{Ext}^{n-i}(\mathcal F,\omega_X)^\vee$ 가 모든 연접층 $\mathcal F$ 에 대해 성립한다[^2]. $X$ 가 [Gorenstein 환](gorenstein-rings.md)으로 국소적으로 적히면 $\omega_X$ 는 선다발이다. 평면의 $d$ 차 곡선은 특이점이 있어도 $\omega=\mathcal O(d-3)\vert\_X$ 이고, 이것은 [딸림 공식](adjunction-formula.md)과 같은 꼴이다.

# 활용

- 곡선의 Riemann–Roch 정리. $h^1$ 을 $\ell(K-D)$ 로 바꿔, 함수 공간의 차원을 미분형식의 개수로 적는다.
- 모듈러 형식의 존재 조건. 모듈러 곡선에서 주어진 주요부를 갖는 약정칙 형식이 있을 조건은, 쌍대성으로 모든 첨점형식과의 유수 쌍이 $0$ 인 것이 된다. [Borcherds 곱](borcherds-products.md)과 [Gross–Kohnen–Zagier 정리](gross-kohnen-zagier.md)가 이 조건을 쓴다.
- 최고차 코호몰로지. [Borel–Weil–Bott 정리](borel-weil-bott.md)에서 깃발 다양체의 표준다발의 최고차 코호몰로지는 쌍대성으로 $H^0(\mathcal O)$ 의 쌍대와 같고, 그래서 $\mathbb C$ 다.
- 소멸 정리. 풍부한 선다발 $L$ 에 대한 Kodaira 소멸 $H^i(K\otimes L)=0$ $(i\gt 0)$ 은 쌍대성으로 $H^i(L^{-1})=0$ $(i\lt n)$ 과 같다.

[^1]: P. Griffiths and J. Harris, *Principles of Algebraic Geometry*, Wiley, 1978, Chapter 0, Section 6.

[^2]: R. Hartshorne, *Algebraic Geometry*, Graduate Texts in Mathematics 52, Springer, 1977, Chapter III, Section 7.

# 연관 문서

## 선수지식

- [층 코호몰로지](sheaf-cohomology.md)
- [Riemann–Roch 정리](riemann-roch.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #complex_analysis #differential_geometry #theorem
