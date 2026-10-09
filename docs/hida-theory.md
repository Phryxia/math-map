# Hida 이론

# 개요

Hida 이론은 무게를 변수로 두어 보통 모듈러 형식을 하나의 $p$ 진 족으로 묶는다. 무게 $k$ 마다 따로 놓여 있던 [모듈러 형식](modular-forms.md)의 공간을 $U_p$ 의 고윳값이 $p$ 진 단위원인 부분으로 자르면, 그 조각들이 [Iwasawa 대수](iwasawa-algebra.md) $\Lambda=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 위의 유한 평탄 가군 하나의 특수화로 나온다.

그 가군이 **Hida 대수** $\mathbf h$ 이고, $\mathbf h$ 의 준동형 하나가 무게를 움직여도 따라 움직이는 고유형식 한 줄을 준다. 각 형식의 [Hecke 작용소](hecke-operators.md) 고윳값은 무게의 $p$ 진 해석함수가 되고, [Galois 표현](galois-representations.md)도 족 전체에 걸쳐 하나로 붙는다.

# 직관

무게 $k$ 의 모듈러 형식과 무게 $k'$ 의 모듈러 형식은 서로 다른 공간에 있다. 두 공간 사이에는 선형사상이 없으므로 형식끼리 비교할 길이 없다. 그런데 Hecke 고윳값은 수이므로 비교할 수 있다. 무게를 바꾸면 고윳값이 어떻게 바뀌는지 [Eisenstein 급수](eisenstein-series.md)로 계산한다. 소수 $\ell$ 에 대해 다음이다.

$$
T_\ell E_k=(1+\ell^{k-1})E_k
$$

$p$ 를 홀수 소수, $\ell\ne p$ 로 잡으면 $\ell$ 은 $p$ 로 나뉘지 않는다. $(\mathbb Z/p^{n+1})^\times$ 의 위수가 $(p-1)p^n$ 이므로 $\ell^{(p-1)p^n}\equiv 1\pmod{p^{n+1}}$ 이다. 따라서 $k\equiv k'\pmod{(p-1)p^n}$ 이면 다음이 성립한다.

$$
\ell^{k-1}\equiv\ell^{k'-1}\pmod{p^{n+1}}
$$

무게를 $p$ 진으로 가깝게 잡으면 고윳값도 $p$ 진으로 가깝다. $n$ 을 키우면 자릿수가 얼마든지 맞으므로 고윳값 $1+\ell^{k-1}$ 은 무게 $k$ 의 $p$ 진 연속함수로 늘어난다.

형식 자체를 무게의 함수로 묶으려면 공간의 차원이 걸린다. 무게 $k$ 의 첨가형식 공간의 차원은 $k$ 가 커질수록 늘어나므로 무게마다 형식의 개수가 달라 한 줄로 이을 수 없다. $U_p$ 를 여러 번 적용해 고윳값이 $p$ 로 나뉘는 부분을 버리고 남은 조각만 보면 차원이 무게에 무관해진다. 그 조각들을 무게 변수 위의 가군 하나로 묶은 것이 Hida 의 구성이다.

# 정의

## 보통 형식

준위 $\Gamma_0(Np^r)$ 의 고유형식 $f=\sum a_nq^n$ 이 $p$ 에서 **보통**(ordinary)이라는 것은 $U_p$ 고윳값 $a_p$ 가 $p$ 진 단위원, 곧 $v_p(a_p)=0$ 이라는 뜻이다. 부치 $v_p(a_p)$ 를 **기울기**라 부르고 보통 형식은 기울기 $0$ 의 형식이다.

$\mathbb Z_p$ 계수 첨가형식 공간 $S_k(Np^r;\mathbb Z_p)$ 위에서 다음 극한이 수렴하고 멱등원이다.

$$
e=\lim_{n\to\infty}U_p^{n!}
$$

$U_p$ 의 고윳값이 단위원인 자리에서 $U_p^{n!}$ 은 $1$ 로 가고 부치가 양인 자리에서는 $0$ 으로 간다. $e$ 를 **보통 사영자**라 하고 $eS_k(Np^r;\mathbb Z_p)$ 를 **보통 부분**이라 한다.

## Iwasawa 대수와 무게 공간

$\Lambda=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 을 Iwasawa 대수라 한다. $1+p\mathbb Z_p$ 의 생성원 $1+p$ 를 $1+T$ 로 보내면 $\Lambda\cong\mathbb Z_p\lbrack\lbrack 1+p\mathbb Z_p\rbrack\rbrack$ 이다.

정수 $k$ 마다 연속 준동형 $\Lambda\to\mathbb Z_p$, $T\mapsto(1+p)^k-1$ 이 있고 그 핵이 **산술 소이데알**이다.

$$
P_k=\bigl(T-((1+p)^k-1)\bigr)
$$

$\Lambda$ 의 극대 스펙트럼이 무게 공간이고 정수 무게는 그 안의 점 $P_k$ 다. $\Lambda$ 가 2차원 정칙 국소환이므로 $\Lambda/P_k\cong\mathbb Z_p$ 다.

## Hida 대수

$H_k(Np^r)$ 을 $eS_k(Np^r;\mathbb Z_p)$ 에 작용하는 Hecke 작용소들이 생성하는 $\mathbb Z_p$ 대수라 하면, 준위를 올리는 사상에 대한 역극한이 **Hida 대수**다.

$$
\mathbf h=\varprojlim_r H_2(Np^r)
$$

$\mathbf h$ 는 $T$ 의 작용을 통해 $\Lambda$ 대수이고 $\Lambda$ 위 유한 평탄이다. $\mathbf h$ 의 기약 성분 $\mathbb I$ 는 $\Lambda$ 위 유한 평탄인 국소 정역이다.

## $\Lambda$ 진 고유형식

$\mathbb I$ 계수의 형식 급수

$$
\mathcal F=\sum_{n\ge1}a_nq^n,\qquad a_n\in\mathbb I
$$

가 **$\Lambda$ 진 고유형식**이라는 것은, $\mathbb I$ 의 거의 모든 산술 특수화 $\phi$ 에서 $\phi(\mathcal F)=\sum\phi(a_n)q^n$ 이 무게 $k(\phi)$ 의 고전 보통 고유형식이라는 뜻이다. $\phi$ 가 $P_k$ 위에 놓이면 $k(\phi)=k$ 다.

# 성질

## 조절 정리

> **조절 정리 (Hida).** $k\ge2$ 에 대해 $\mathbf h\otimes_\Lambda\Lambda/P_k$ 는 무게 $k$ 의 보통 Hecke 대수와 동형이다[^1].

$\mathbf h$ 는 $\Lambda$ 위 평탄이므로 특수화가 Hecke 작용과 어긋나지 않는다. 증명의 요지는 보통 부분의 코호몰로지가 $U_p$ 작용에 대한 역극한에서 $\Lambda$ 위 자유가 되고, 그 자유성이 특수화 사상의 핵과 여핵을 없앤다는 것이다. 핵과 여핵 위에서 $U_p$ 의 기울기가 양이라 보통 사영자가 그들을 죽인다.

## 족의 차원

조절 정리에서 $\mathbf h$ 의 $\Lambda$ 계수가 무게 $k$ 보통 형식 공간의 차원과 같다. $\Lambda$ 계수는 무게에 의존하지 않으므로 다음이 모든 $k\ge2$ 에서 같은 값이다.

$$
\dim_{\mathbb Q_p}eS_k(Np^r;\mathbb Q_p)
$$

무게 $k$ 전체 공간의 차원은 $k$ 와 함께 늘어나지만 보통 부분은 늘지 않는다. 고전 보통 고유형식 하나를 고르면 그것을 특수화로 갖는 $\Lambda$ 진 고유형식이 있고, 무게를 움직여 다른 무게의 보통 고유형식으로 이어진다.

## Galois 표현의 족

$\mathbb I$ 를 $\mathbf h$ 의 기약 성분이라 하면 연속 표현

$$
\rho_{\mathbb I}:G_{\mathbb Q}\to\mathrm{GL}\_2(\mathbb I)
$$

이 있어, 각 산술 특수화 $\phi$ 에서 $\phi\circ\rho_{\mathbb I}$ 가 고전 형식 $\phi(\mathcal F)$ 에 붙는 표현이다. $\ell\nmid Np$ 에서 Frobenius 의 대각합이 $a_\ell\in\mathbb I$ 이고 행렬식이 무게를 변수로 하는 순환지표다.

$p$ 에서의 분해군 $D_p$ 로 제한하면 $\rho_{\mathbb I}$ 가 상삼각이다. 비분기 지표와 순환지표의 곱으로 대각이 주어지므로, 보통성이 Galois 쪽에서는 $D_p$ 제한의 모양으로 나타난다.

# 활용

- [$p$ 진 $L$ 함수](p-adic-l-function.md)의 예외적 영점. Greenberg 와 Stevens 는 Mazur–Tate–Teitelbaum 추측을 Hida 족 위에서 무게를 변수로 미분해 증명했다[^2]. [Tate 곡선](tate-curve.md)의 $\mathcal L$ 불변량이 그 미분에서 나온다.
- [Galois 표현의 변형환](deformation-rings.md). $\mathbf h$ 가 변형환의 몫으로 나타나고, 변형환의 $p$ 진 해석공간 안에서 Hida 족은 기울기 $0$ 자리에 놓인 성분이다.
- [Fontaine–Mazur 추측](fontaine-mazur.md). 족의 점 가운데 de Rham 인 것이 정수 무게의 고전점뿐이라는 현상이 Hida 족에서 관찰된다.
- [Iwasawa 주추측](iwasawa-main-conjecture.md). 족을 따라 움직이는 Euler 계를 구성해 주추측의 대수적 변과 해석적 변을 비교한다.

[^1]: H. Hida, "Galois representations into $\mathrm{GL}\_2(\mathbb Z_p\lbrack\lbrack X\rbrack\rbrack)$ attached to ordinary cusp forms", Invent. Math. 85 (1986), 545–613.
[^2]: R. Greenberg, G. Stevens, "$p$-adic $L$-functions and $p$-adic periods of modular forms", Invent. Math. 111 (1993), 407–447.

# 연관 문서

## 선수지식

- [Hecke 작용소](hecke-operators.md)
- [Iwasawa 대수](iwasawa-algebra.md)

## 더 알아보기

- [과수렴 모듈러 기호](overconvergent-modular-symbols.md)

#number_theory #algebra #complex_analysis
