# Hida 이론

# 개요

**Hida 이론(Hida theory)** 은 무게가 서로 다른 [모듈러 형식](modular-forms.md)들을 무게를 변수로 하는 하나의 족으로 묶는 이론이다. 무게 $k$ 의 [Eisenstein 급수](eisenstein-series.md)의 $n$ 번째 계수는 $n$ 의 약수들의 $k-1$ 제곱의 합인데, $n=2$ 이면 무게 $4$ 에서 $1+2^3=9$, 무게 $8$ 에서 $1+2^7=129$ 이고 두 값의 차 $120$ 이 $5$ 의 배수다. Hida 이론은 이런 합동을 무게의 $p$ 진 연속 변화로 보고, $U_p$ 고윳값이 $p$ 진 단위원인 형식들의 계수를 무게의 $p$ 진 해석함수로 만들어 한 족의 특수화로 계산한다.

# 직관

무게 $4$ 의 모듈러 형식과 무게 $8$ 의 모듈러 형식은 서로 다른 공간에 있어서 형식끼리 같은지를 물을 수 없다. 그러나 [Hecke 작용소](hecke-operators.md)의 고윳값은 수이므로 비교할 수 있다. Eisenstein 급수 $E_k$ 에서 소수 $\ell$ 의 고윳값은 다음과 같다.

$$
T_\ell E_k=(1+\ell^{k-1})E_k
$$

$p$ 를 홀수 소수, $\ell\ne p$ 로 잡는다. $(\mathbb Z/p^{n+1})^\times$ 의 위수가 $(p-1)p^n$ 이므로 $\ell^{(p-1)p^n}\equiv 1\pmod{p^{n+1}}$ 이다. 따라서 $k\equiv k'\pmod{(p-1)p^n}$ 이면 다음이 성립한다.

$$
\ell^{k-1}\equiv\ell^{k'-1}\pmod{p^{n+1}}
$$

$p=5$, $\ell=2$, $k=4$, $k'=8$ 이면 $n=0$ 이고 $9\equiv129\pmod 5$ 다. 무게가 $p$ 진으로 가까우면 고윳값도 $p$ 진으로 가깝고, $n$ 을 키우면 맞는 자릿수가 얼마든지 늘어난다. 그래서 고윳값 $1+\ell^{k-1}$ 은 무게 $k$ 의 $p$ 진 연속함수로 늘어난다.

형식 자체를 무게의 함수로 묶으려면 공간의 차원이 걸린다. 무게 $k$ 의 첨점형식 공간의 차원은 $k$ 가 커질수록 늘어나므로 무게마다 형식의 개수가 달라 한 줄로 이을 수 없다. $U_p$ 의 고윳값이 $p$ 로 나누어지는 부분을 버리고 남은 부분만 보면 차원이 무게에 무관해진다. 그 부분들을 무게 변수 위의 가군 하나로 묶은 것이 Hida 의 구성이다.

# 정의

## 보통 형식

레벨 $\Gamma_0(Np^r)$ 의 고유형식 $f=\sum a_nq^n$ 의 $U_p$ 고윳값 $a_p$ 가 $p$ 진 단위원, 곧 $v_p(a_p)=0$ 이면 $f$ 가 $p$ 에서 **보통(ordinary)** 이라 한다. $v_p(a_p)$ 를 $f$ 의 **기울기(slope)** 라 하고, 보통 형식은 기울기 $0$ 의 형식이다.

레벨 1 의 $E_k$ 에서 $U_p$ 의 고유형식 두 개가 나온다. $E_k(\tau)-p^{k-1}E_k(p\tau)$ 는 $U_p$ 고윳값이 $1$ 이어서 보통이고, $E_k(\tau)-E_k(p\tau)$ 는 고윳값이 $p^{k-1}$ 이어서 기울기가 $k-1$ 이다. 두 고윳값은 다음 다항식의 근이다.

$$
x^2-(1+p^{k-1})x+p^{k-1}=(x-1)(x-p^{k-1})
$$

## 보통 사영자

$\mathbb Z_p$ 계수 첨점형식 공간 $S_k(Np^r;\mathbb Z_p)$ 위에서 다음 극한이 수렴하고 멱등원이다.

$$
e=\lim_{n\to\infty}U_p^{n!}
$$

$e$ 를 **보통 사영자(ordinary projector)** 라 하고 $eS_k(Np^r;\mathbb Z_p)$ 를 **보통 부분(ordinary part)** 이라 한다. $U_p$ 의 고윳값이 단위원인 고유벡터에서 $U_p^{n!}$ 은 항등으로 가고, 고윳값의 부치가 양인 고유벡터에서는 $0$ 으로 간다. 위의 두 Eisenstein 형식에 같은 극한을 적용하면 $e$ 는 고윳값 $1$ 인 것을 그대로 두고 고윳값 $p^{k-1}$ 인 것을 $0$ 으로 보낸다.

## 무게 공간

$\Lambda=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 을 [Iwasawa 대수](iwasawa-algebra.md)라 한다. $1+p\mathbb Z_p$ 의 생성원 $1+p$ 를 $1+T$ 로 보내면 $\Lambda\cong\mathbb Z_p\lbrack\lbrack 1+p\mathbb Z_p\rbrack\rbrack$ 이다. 정수 $k$ 마다 연속 준동형 $\Lambda\to\mathbb Z_p$, $T\mapsto(1+p)^k-1$ 이 있고, 그 핵을 무게 $k$ 의 **산술 소 아이디얼(arithmetic prime)** 이라 한다.

$$
P_k=\bigl(T-((1+p)^k-1)\bigr)
$$

이 준동형은 전사이므로 $\Lambda/P_k\cong\mathbb Z_p$ 다. $P_k$ 는 $\Lambda$ 의 높이 1 [소 아이디얼](prime-ideals.md)이고, 정수 무게는 이 소 아이디얼들로 나타난다. $k\equiv k'\pmod{(p-1)p^n}$ 이면 $(1+p)^k\equiv(1+p)^{k'}\pmod{p^{n+1}}$ 이므로 두 점 $P_k$, $P_{k'}$ 은 $p$ 진으로 가깝다.

## Hida 대수

$H_k(Np^r)$ 을 $eS_k(Np^r;\mathbb Z_p)$ 에 작용하는 Hecke 작용소들이 생성하는 $\mathbb Z_p$ 대수라 하면, 레벨을 올리는 사상에 대한 역극한이 **Hida 대수(Hida Hecke algebra)** 다.

$$
\mathbf h=\varprojlim_r H_2(Np^r)
$$

$\mathbf h$ 는 다이아몬드 작용소(diamond operator)를 통해 $\Lambda$ 대수가 된다.

## Λ 진 고유형식

$\mathbb I$ 를 $\Lambda$ 위 유한인 정역이라 하자. $\mathbb I$ 계수의 형식 급수 $\mathcal F=\sum_{n\ge1}a_nq^n$ 의 거의 모든 산술 특수화 $\phi\colon\mathbb I\to\bar{\mathbb Q}\_p$ 에서 $\phi(\mathcal F)=\sum\phi(a_n)q^n$ 이 무게 $k(\phi)$ 의 고전 보통 고유형식이면, $\mathcal F$ 를 **Λ 진 고유형식(Λ-adic eigenform)** 이라 한다. $\phi$ 가 $P_k$ 위에 놓이면 $k(\phi)=k$ 다.

첨점형식은 아니지만 Eisenstein 급수도 같은 꼴의 족을 이룬다. $k\equiv k_0\pmod{p-1}$ 인 무게만 보고 $\ell=\omega(\ell)(1+p)^{s(\ell)}$ 로 쓰면($\omega$ 는 Teichmüller 지표), $a_\ell=1+\ell^{-1}\omega(\ell)^{k_0}(1+T)^{s(\ell)}\in\Lambda$ 는 $P_k$ 에서 $1+\ell^{k-1}$ 이 된다. 이 족의 무게 $k$ 특수화가 보통 형식 $E_k(\tau)-p^{k-1}E_k(p\tau)$ 다.

# 성질

## 조절 정리

$\mathbf h$ 는 $\Lambda$ 위에서 유한 생성이고 평탄이다. $k\ge2$ 에 대해 $\mathbf h\otimes_\Lambda\Lambda/P_k$ 는 무게 $k$ 의 보통 Hecke 대수와 동형이다[^1]. 이것을 Hida 의 조절 정리(control theorem)라 한다.

증명의 요지는 보통 부분의 코호몰로지가 레벨에 대한 역극한에서 $\Lambda$ 위 자유가 되고, 이 자유성 때문에 특수화 사상의 핵과 여핵이 보통 부분에서 $0$ 이 된다는 것이다. 핵과 여핵 위에서는 $U_p$ 의 기울기가 양이어서 보통 사영자가 그것들을 $0$ 으로 보낸다.

## 족의 차원

조절 정리로 $\mathbf h$ 의 $\Lambda$ 위 계수가 무게 $k$ 의 보통 형식 공간의 차원과 같다. 계수는 무게에 의존하지 않으므로, $p-1$ 을 법으로 같은 $k\ge2$ 에서 다음 차원이 같다.

$$
\dim_{\mathbb Q_p}eS_k(Np^r;\mathbb Q_p)
$$

무게 $k$ 전체 공간의 차원은 $k$ 와 함께 늘어나지만 보통 부분은 늘지 않는다. 고전 보통 고유형식 하나를 고르면 그것을 특수화로 갖는 Λ 진 고유형식이 존재하고, 그 족의 다른 특수화가 다른 무게의 보통 고유형식이다.

## Galois 표현의 족

$\mathbb I$ 를 $\mathbf h$ 의 기약 성분이라 하면 다음 연속 표현이 존재한다.

$$
\rho_{\mathbb I}\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\mathbb I)
$$

각 산술 특수화 $\phi$ 에서 $\phi\circ\rho_{\mathbb I}$ 는 고전 형식 $\phi(\mathcal F)$ 에 붙는 [Galois 표현](galois-representations.md)이다. $\ell\nmid Np$ 에서 Frobenius 원소의 대각합은 $a_\ell\in\mathbb I$ 이고, 행렬식은 무게를 변수로 하는 원분 지표(cyclotomic character)의 거듭제곱이다.

$p$ 에서의 분해군 $D_p$ 로 제한하면 $\rho_{\mathbb I}$ 는 상삼각이고, 대각 성분 가운데 하나는 $U_p$ 고윳값을 Frobenius 에 주는 불분기 지표다. 형식이 보통이라는 조건이 Galois 표현에서는 $D_p$ 제한의 이 꼴로 나타난다.

# 활용

- [p 진 L 함수](p-adic-l-function.md)의 예외적 영점. Greenberg 와 Stevens 는 Mazur–Tate–Teitelbaum 추측(Mazur–Tate–Teitelbaum conjecture)을 Hida 족 위에서 무게를 변수로 미분해 증명했다[^2]. [Tate 곡선](tate-curve.md)의 $\mathcal L$ 불변량이 그 미분에서 나온다.
- [Galois 표현의 변형환](deformation-rings.md). $\mathbf h$ 의 국소 성분이 보통 변형환과 동형이라는 $R=\mathbf T$ 정리가 Hida 족 위에서 증명된다. 기울기가 양인 형식까지 포함하는 족은 [고유다양체](eigenvariety.md)가 다룬다.
- [Fontaine–Mazur 추측](fontaine-mazur.md). Hida 족의 정수 무게 $k\ge2$ 인 점에서 오는 Galois 표현은 조절 정리로 고전 형식의 표현이고 기하적이다. Fontaine–Mazur 추측은 기하적인 2 차원 표현이 모두 이렇게 모듈러 형식에서 온다고 예측한다.
- [Iwasawa 주추측](iwasawa-main-conjecture.md). 족 위에서 정의된 [Euler 계](euler-systems.md)와 족 위의 $p$ 진 $L$ 함수를 비교해 주추측의 두 변을 비교한다.

[^1]: H. Hida, "Galois representations into $\mathrm{GL}\_2(\mathbb Z_p\lbrack\lbrack X\rbrack\rbrack)$ attached to ordinary cusp forms", Invent. Math. 85 (1986), 545–613.
[^2]: R. Greenberg, G. Stevens, "$p$-adic $L$-functions and $p$-adic periods of modular forms", Invent. Math. 111 (1993), 407–447.

# 연관 문서

## 선수지식

- [Hecke 작용소](hecke-operators.md)
- [Iwasawa 대수](iwasawa-algebra.md)

## 더 알아보기

- [과수렴 모듈러 기호](overconvergent-modular-symbols.md)

#number_theory #algebra #complex_analysis
