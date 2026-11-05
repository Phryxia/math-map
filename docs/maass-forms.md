# Maass 형식

# 개요

**Maass 형식(Maass form)** 은 상반평면 위의 $\mathrm{SL}\_2(\mathbb Z)$ 불변 함수 가운데 쌍곡 Laplace 작용소의 고유함수인 것이다. 곡면 $\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H$ 위의 함수를 Laplace 작용소의 고유함수로 전개하면, [Eisenstein 급수](eisenstein-series.md)가 주는 연속 부분 말고 고윳값이 띄엄띄엄 놓인 부분이 남는다. 그 부분의 고유함수가 Maass 첨점형식이고, 첫 고윳값 $\tfrac14+r_1^2$ 의 $r_1=9.533695\dots$ 는 수치 계산으로 구한다. Maass 형식은 정칙 모듈러 형식과 함께 $\mathrm{GL}\_2$ 의 자기동형 형식을 이루어 같은 $L$ 함수 이론으로 다뤄진다.

# 직관

원 위의 함수는 [Fourier 급수](fourier-series.md)로 $e^{2\pi inx}$ 들의 합으로 전개된다. $e^{2\pi inx}$ 는 두 번 미분하면 자기 자신의 $-4\pi^2n^2$ 배가 되는 함수이고, 고윳값 $4\pi^2n^2$ 이 정수 $n$ 마다 하나씩 명시적으로 나온다.

상반평면 $\mathbb H$ 에서 $z\mapsto z+1$ 과 $z\mapsto -1/z$ 로 옮겨도 값이 같은 함수에 같은 일을 하려 한다. 여기서 두 번 미분하는 연산은 쌍곡 Laplace 작용소 $\Delta=-y^2(\partial_x^2+\partial_y^2)$ 다. $y^s$ 는 $\Delta y^s=s(1-s)y^s$ 를 만족하고 $z\mapsto z+1$ 에서 불변이지만, $z\mapsto -1/z$ 에서는 불변이 아니다.

$y^s$ 를 $\mathrm{SL}\_2(\mathbb Z)$ 의 원소들로 옮긴 것을 전부 더하면 두 변환에서 불변인 고유함수가 된다. 이것이 Eisenstein 급수 $E(z,s)$ 이고, $s$ 를 연속으로 움직일 수 있으므로 고윳값이 연속으로 나온다. $E(z,s)$ 는 $y\to\infty$ 에서 $y^s$ 처럼 커져 곡면 위에서 제곱적분이 되지 않는다.

남는 물음은 $y\to\infty$ 에서 $0$ 으로 가는 불변 고유함수가 있는지다. 이런 함수는 더하기로 만들 수 없고, 고윳값 $\tfrac14+r^2$ 이 $r=9.5337\dots$, $12.1730\dots$ 처럼 띄엄띄엄 수치로만 나온다. 이 함수들이 Maass 첨점형식이다.

# 정의

## Maass 형식

$\Gamma\subset\mathrm{SL}\_2(\mathbb Z)$ 를 유한 지수 부분군이라 한다. 함수 $u:\mathbb H\to\mathbb C$ 가 다음 셋을 만족하면 **Maass 형식** 이다.

1. 모든 $\gamma\in\Gamma$ 에 대해 $u(\gamma z)=u(z)$ 다.
2. [Laplace–Beltrami 연산자](laplace-beltrami-operator.md) $\Delta=-y^2(\partial_x^2+\partial_y^2)$ 에 대해 $\Delta u=\lambda u$ 다.
3. 어떤 $N$ 에 대해 $y\to\infty$ 에서 $u(z)=O(y^N)$ 이다. 이를 다항 증가(moderate growth)라 한다.

$\Gamma$ 의 모든 첨점에서 상수항 $\int_0^1u(x+iy)\thinspace dx$ 가 $0$ 이면 **Maass 첨점형식(Maass cusp form)** 이라 한다. 상수함수는 $\lambda=0$ 인 Maass 형식이다. Eisenstein 급수 $E(z,s)$ 는 $\lambda=s(1-s)$ 인 Maass 형식이지만, 상수항이 $y^s+\varphi(s)y^{1-s}$ 이므로 첨점형식이 아니다. $\mathrm{SL}\_2(\mathbb Z)$ 의 첫 Maass 첨점형식 $u_1$ 은 $\lambda=\tfrac14+r_1^2\approx 91.14$ 를 갖는다.

고윳값을 $\lambda=s(1-s)$, $s=\tfrac12+ir$ 로 쓴다. $\lambda\ge\tfrac14$ 이면 $r$ 이 [실수](real-numbers.md)이고 $u$ 를 **온도적(tempered)** 이라 한다. $\lambda\lt\tfrac14$ 이면 $r$ 이 순허수이고 $u$ 를 **예외적(exceptional)** 이라 한다. $u_1$ 은 온도적이다.

$u(-\bar z)=u(z)$ 이면 **짝(even)**, $u(-\bar z)=-u(z)$ 이면 **홀(odd)** 이라 하고, $\epsilon=0,1$ 로 구별한다.

## Hecke–Maass 형식과 L 함수

[Hecke 작용소](hecke-operators.md) 전체의 동시 고유함수인 Maass 첨점형식을 **Hecke–Maass 형식(Hecke–Maass form)** 이라 한다. 그 Fourier 계수 $a_n$ 을 $a_1=1$ 로 정규화하고

$$
L(s,u)=\sum_{n\ge1}\frac{a_n}{n^s}
$$

을 $u$ 의 $L$ 함수라 한다.

# 성질

## Fourier 전개

$u$ 가 $\mathrm{SL}\_2(\mathbb Z)$ 의 Maass 첨점형식이고 $\lambda=\tfrac14+r^2$ 이면

$$
u(z)=\sqrt y\sum_{n\neq0}a_n\thinspace K_{ir}(2\pi\vert n\vert y)\thinspace e^{2\pi inx}
$$

이다. $u(z+1)=u(z)$ 이므로 $x$ 에 대해 전개하고, 계수함수가 만족하는 [상미분방정식](ordinary-differential-equations.md)의 해 가운데 다항 증가하는 것을 고르면 이 꼴이 나온다. $K_{ir}$ 은 제2종 변형 [Bessel 함수](bessel-functions.md)이고

$$
K_{ir}(z)=\int_0^\infty e^{-z\cosh t}\cos(rt)\thinspace dt
$$

다. $y\to\infty$ 에서 $K_{ir}(y)\sim\sqrt{\pi/2y}\thinspace e^{-y}$ 이므로 첨점형식은 첨점에서 지수적으로 감소하고 $L^2(\Gamma\backslash\mathbb H)$ 에 속한다. $u$ 가 짝이면 $a_{-n}=a_n$, 홀이면 $a_{-n}=-a_n$ 이다.

## Euler 곱과 함수방정식

$\mathrm{SL}\_2(\mathbb Z)$ 의 Hecke–Maass 형식에서 계수는 곱셈적이고

$$
L(s,u)=\prod_p\bigl(1-a_pp^{-s}+p^{-2s}\bigr)^{-1}
$$

이다. 완비화하면

$$
\Lambda(s,u)=\pi^{-s}\Gamma\Big(\frac{s+\epsilon+ir}2\Big)\Gamma\Big(\frac{s+\epsilon-ir}2\Big)L(s,u)=(-1)^\epsilon\Lambda(1-s,u)
$$

가 성립한다. 무게 $k$ 정칙 형식의 감마 인자는 $\Gamma(s+\frac{k-1}2)$ 하나이고, Maass 형식의 감마 인자는 $r$ 에 의존하는 둘이다.

## 스펙트럼 분해

$L^2(\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H)$ 는 상수함수, Maass 첨점형식들, Eisenstein 급수의 적분으로 분해된다.

$$
L^2(\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H)=\mathbb C\oplus\bigoplus_j\mathbb C\thinspace u_j\oplus\Bigl\lbrace\int_{-\infty}^{\infty}g(r)E(z,\tfrac12+ir)\thinspace dr\Bigr\rbrace
$$

$\mathrm{SL}\_2(\mathbb Z)$ 의 첫 $r_j$ 값은 다음과 같고, 명시적 공식 없이 엄밀한 오차 범위와 함께 수치로 계산되었다.[^5]

$$
r_1=9.5336952\dots,\quad r_2=12.1730083\dots,\quad r_3=13.7797514\dots
$$

## 표현론적 분류

$L^2(\Gamma\backslash\mathrm{SL}\_2(\mathbb R))$ 를 $\mathrm{SL}\_2(\mathbb R)$ 의 기약 유니터리 표현으로 분해하면 각 계열이 자기동형 형식의 한 종류에 대응한다.

| 표현 계열 | 대응하는 자기동형 형식 |
|---|---|
| 이산계열 $D_k$ | 무게 $k$ 의 정칙 첨점형식 |
| 주계열 $\pi_{ir}$ | $\lambda=\tfrac14+r^2$ 인 온도적 Maass 첨점형식 |
| 여계열 | $\lambda\lt\tfrac14$ 인 예외적 Maass 첨점형식 |
| 자명 표현 | 상수함수 |

주계열 표현의 무게 $0$ 벡터를 $\mathbb H$ 위의 함수로 내리면 Maass 형식이 된다.

## Weyl 법칙

[Selberg 대각합 공식](selberg-trace-formula.md)에 시험함수를 넣으면 $\mathrm{SL}\_2(\mathbb Z)$ 에 대해 [Weyl 법칙](weyl-law.md)이 나온다.

$$
\char35{}\lbrace j:r_j\le T\rbrace=\frac{\mathrm{vol}(\Gamma\backslash\mathbb H)}{4\pi}T^2-\frac{2}\pi T\log T+O(T)
$$

$\mathrm{vol}=\pi/3$ 이므로 선행항이 $T^2/12$ 이고, Maass 첨점형식은 무한히 많다. 이 증명은 형식을 하나도 구성하지 않고 존재를 보인다. 무게 $k$ 정칙 첨점형식의 공간은 차원이 $k/12$ 정도이고 명시적 기저가 있다.

Phillips 와 Sarnak 은 산술적이지 않은 일반 격자에서는 격자를 변형하면 Maass 첨점형식이 대부분 사라진다고 추측했다.

## Selberg 의 1/4 추측

합동 부분군 $\Gamma_0(N)$ 에 대해 모든 Maass 첨점형식의 고윳값이 $\lambda\ge\tfrac14$ 라는 진술을 Selberg 의 $1/4$ 추측(Selberg's eigenvalue conjecture)이라 한다.[^1] $\mathrm{SL}\_2(\mathbb Z)$ 에서는 첫 고윳값이 $91.14$ 이므로 성립한다. 응용에 필요한 것은 $N$ 에 대해 균등한 하한이다.

정칙 형식에서 Deligne 이 증명한 Ramanujan–Petersson 추측 $\vert a_p\vert\le 2p^{(k-1)/2}$ 은 유한 자리의 Satake 매개변수가 단위원 위에 있다는 조건이다. Selberg 추측은 같은 조건을 무한 자리에 둔 것이고, $r$ 이 실수라는 조건으로 나타난다.

| 결과 | 하한 |
|---|---|
| Selberg (1965) | $\lambda\ge\tfrac3{16}$ |
| Luo–Rudnick–Sarnak (1995) | $\lambda\ge\tfrac14-(\tfrac{5}{28})^2$ |
| Kim–Sarnak (2003) | $\lambda\ge\tfrac14-(\tfrac7{64})^2$ |

Kim–Sarnak 의 $7/64$ 는 $\mathrm{GL}\_2$ 에서 $\mathrm{GL}\_5$ 로 가는 대칭 4 제곱 함수성(symmetric fourth power functoriality)에서 나왔다.[^2]

# 활용

- 스펙트럼 전개. [Kuznetsov 공식](kuznetsov-formula.md)은 [Kloosterman 합](kloosterman-sums.md)의 가중합을 자기동형 형식의 계수의 합으로 바꾸고, 그 합에 정칙 형식, Maass 첨점형식, Eisenstein 급수가 모두 들어간다. 예외적 고윳값이 있으면 그 항이 $x^{2\vert r\vert}$ 꼴로 커지므로, Selberg 추측 쪽의 하한이 오차항의 크기를 정한다.
- 산술 양자 혼돈. [양자 혼돈](quantum-chaos.md)은 음곡률 곡면의 Laplace 고유함수가 고윳값이 커질 때 어떻게 퍼지는지 묻는다. $\mathrm{SL}\_2(\mathbb Z)$ 의 Hecke–Maass 형식 $u_j$ 에 대해 $\vert u_j(z)\vert^2d\mu$ 가 $\lambda_j\to\infty$ 에서 균등측도로 약수렴한다는 양자 유일 에르고딕성(quantum unique ergodicity)이 증명되었다. Lindenstrauss 는 에르고딕 이론의 [측도](measure.md) 강직성으로 극한이 균등측도의 상수배임을 보였고, Soundararajan 은 첨점으로 질량이 빠져나가지 않음을 보여 그 상수가 $1$ 임을 증명했다. 산술적이지 않은 음곡률 곡면에 대한 같은 진술은 Rudnick–Sarnak 의 추측이다.[^3]
- Artin 추측. 2 차원 [Galois 표현](galois-representations.md) $\rho:\mathrm{Gal}(\bar{\mathbb Q}/\mathbb Q)\to\mathrm{GL}\_2(\mathbb C)$ 에서 복소켤레 $c$ 의 상의 [행렬식](determinants.md)이 $-1$ 이면 무게 $1$ 의 정칙 첨점형식에, $+1$ 이면 $\lambda=\tfrac14$ 인 Maass 형식에 대응한다고 예상된다. 앞의 경우는 Khare–Wintenberger 의 [Serre 추측과 Khare–Wintenberger 정리](serre-conjecture.md)로 증명되었다. 뒤의 경우는 상이 가해군일 때 [Langlands–Tunnell 정리](langlands-tunnell.md)로 증명되었고, 일반적인 경우는 증명되지 않았다.[^4] 이렇게 얻은 Maass 형식은 계수가 Galois 표현의 지표값이어서 명시적이다.

[^1]: A. Selberg, "On the estimation of Fourier coefficients of modular forms", Proceedings of Symposia in Pure Mathematics VIII (1965), 1–15. $\lambda\ge\tfrac14$ 추측의 원 진술이다.
[^2]: H. Kim, "Functoriality for the exterior square of GL(4) and the symmetric fourth of GL(2)", Journal of the AMS 16 (2003), 139–183. $\tfrac14-(\tfrac7{64})^2$ 한계는 H. Kim 과 P. Sarnak 의 부록 2 에 있다.
[^3]: Z. Rudnick, P. Sarnak, "The behaviour of eigenstates of arithmetic hyperbolic manifolds", Communications in Mathematical Physics 161 (1994), 195–213. E. Lindenstrauss, "Invariant measures and arithmetic quantum unique ergodicity", Annals of Mathematics 163 (2006), 165–219. K. Soundararajan, "Quantum unique ergodicity for SL₂(ℤ)\ℍ", Annals of Mathematics 172 (2010), 1529–1538.
[^4]: J. Tunnell, "Artin's conjecture for representations of octahedral type", Bulletin of the AMS 5 (1981), 173–175. 가해 상을 갖는 2 차원 표현에 대한 결과이고, 일반 경우가 남아 있음을 서론이 밝힌다.
[^5]: A. Booker, A. Strömbergsson, A. Venkatesh, "Effective computation of Maass cusp forms", International Mathematics Research Notices (2006). 고윳값을 엄밀한 오차 범위와 함께 계산하는 방법과 $\mathrm{SL}\_2(\mathbb Z)$ 의 첫 값들을 준다.

# 연관 문서

## 선수지식

- [Eisenstein 급수](eisenstein-series.md)
- [Hecke 작용소](hecke-operators.md)

## 더 알아보기

- [Selberg 대각합 공식](selberg-trace-formula.md)
- [Kuznetsov 공식](kuznetsov-formula.md)

#number_theory #analysis #complex_analysis #theorem
