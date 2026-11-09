# Dirichlet 단수 정리

# 개요

**Dirichlet 단수 정리(Dirichlet's unit theorem)** 는 정수에 [무리수](irrational-numbers.md) 하나를 더해 만든 수 체계에서, 역수도 그 체계에 드는 원소가 어떻게 생겼는지 정하는 정리다. 정수에서 역수가 정수인 수는 $\pm1$ 뿐이다. $a+b\sqrt2$ 꼴의 수에서는 $(1+\sqrt2)(-1+\sqrt2)=1$ 이므로 $1+\sqrt2$ 와 그 거듭제곱이 모두 역수를 갖고, 그런 수가 무한히 많다. 이 정리는 그런 수들의 로그를 좌표로 찍으면 고른 간격의 점들이 됨을 보여, 그 수 전체가 유한 개의 수의 거듭제곱의 곱으로 적힘을 증명한다.

# 직관

$\mathbb Z$ 에서 역원을 갖는 정수는 $\pm1$ 뿐이다. $\mathbb Z\lbrack\sqrt2\rbrack$ 에서는 $(1+\sqrt2)(-1+\sqrt2)=1$ 이므로 $1+\sqrt2$ 와 그 거듭제곱 $3+2\sqrt2$, $7+5\sqrt2$ 가 모두 역원을 갖는다. $\alpha=a+b\sqrt2$ 가 역원을 가질 조건은 $a^2-2b^2=\pm1$, 곧 $\alpha$ 와 켤레 $\bar\alpha=a-b\sqrt2$ 의 곱이 $\pm1$ 이라는 것이다. $\alpha$ 가 커지면 $\bar\alpha$ 가 그만큼 작아진다.

이 조건을 로그로 옮긴다. $(\log\lvert\alpha\rvert,\log\lvert\bar\alpha\rvert)$ 를 평면의 점으로 보면 곱이 $\pm1$ 이라는 조건은 두 좌표의 합이 $0$ 인 직선이고, $\alpha$ 의 거듭제곱은 같은 점의 정수배다. $1+\sqrt2$ 의 점은 $(0.881,-0.881)$ 이고, 이 직선 위의 점들이 이 점의 정수배로 고르게 놓이므로 역원을 갖는 원소는 모두 $\pm(1+\sqrt2)^n$ 이다.

$\sqrt2$ 대신 다른 무리수를 붙이면 켤레의 개수가 바뀌고, 로그 좌표의 개수와 직선 대신 나타나는 평면의 차원이 바뀐다. 그 차원이 켤레들 가운데 실수인 것과 허수인 것의 개수로 정해진다는 것이 이 정리다.

# 정의

## 매장과 로그 매장

[대수적 수체](algebraic-number-fields.md) $K$ 의 차수를 $n=\lbrack K:\mathbb Q\rbrack$ 이라 하고, $\mathbb R$ 로 가는 매장의 수를 $r_1$, 서로 켤레인 복소 매장의 쌍 수를 $r_2$ 라 한다. $n=r_1+2r_2$ 다. $\mathbb Q(\sqrt2)$ 는 $r_1=2$, $r_2=0$ 이고, $\mathbb Q(i)$ 는 $r_1=0$, $r_2=1$ 이고, $\mathbb Q(\sqrt[3]2)$ 는 $r_1=1$, $r_2=1$ 이다.

정수환 $\mathcal O_K$ 에서 곱셈 역원을 갖는 원소들의 군 $\mathcal O_K^\times$ 를 **단수군(unit group)** 이라 하고, 그 원소를 단수(unit)라 한다. 단수군에서 실수 벡터 공간으로 가는 **로그 매장(logarithmic embedding)** 을 다음으로 정의한다.

$$
\lambda\colon\mathcal O_K^\times\to\mathbb R^{r_1+r_2},\qquad
\lambda(u)=\bigl(\log\lvert\sigma_1(u)\rvert,\dots,\log\lvert\sigma_{r_1}(u)\rvert,\thinspace 2\log\lvert\tau_1(u)\rvert,\dots,2\log\lvert\tau_{r_2}(u)\rvert\bigr)
$$

여기서 $\sigma_i$ 는 실 매장, $\tau_j$ 는 복소 매장의 대표다. 직관 절의 점이 $\lambda(1+\sqrt2)=(\log(1+\sqrt2),\log(\sqrt2-1))\approx(0.881,-0.881)$ 이다.

$K$ 에 든 $1$ 의 거듭제곱근 전체를 $\mu_K$ 라 쓴다. $\mu_{\mathbb Q(\sqrt2)}=\lbrace\pm1\rbrace$, $\mu_{\mathbb Q(i)}=\lbrace\pm1,\pm i\rbrace$ 다.

## 기본단수와 조절자

$r=r_1+r_2-1$ 이라 하자. $\mathcal O_K^\times/\mu_K$ 를 생성하는 단수 $r$ 개 $\varepsilon_1,\dots,\varepsilon_r$ 을 **기본단수(fundamental units)** 라 한다. 이들의 로그 좌표 가운데 $r$ 개를 골라 만든 $r\times r$ [행렬](matrices.md)의 [행렬식](determinants.md) 절댓값을 **조절자(regulator)** $R_K$ 라 한다. $\mathbb Q(\sqrt2)$ 에서는 $r=1$ 이고 기본단수가 $1+\sqrt2$, 조절자가 $\log(1+\sqrt2)\approx0.881$ 이다.

# 성질

## 단수의 판정

$u\in\mathcal O_K$ 가 단수인 것은 $N_{K/\mathbb Q}(u)=\pm1$ 과 동치다. $u v=1$ 이면 $N(u)N(v)=1$ 이고 노름이 정수이므로 $\pm1$ 이다. 거꾸로 $N(u)=\pm1$ 이면 $u$ 의 다른 켤레들의 곱이 $\mathcal O_K$ 에 들어 있는 $\pm u^{-1}$ 이다.

## Dirichlet 의 정리

Dirichlet 은 1846 년에 다음 동형을 증명했다.

$$
\mathcal O_K^\times\cong\mu_K\times\mathbb Z^{r}, \qquad r=r_1+r_2-1
$$

증명의 요지는 세 단계다. 첫째, $\lambda$ 의 핵은 모든 매장에서 절댓값이 $1$ 인 단수들이고, Kronecker 정리(Kronecker's theorem)로 그런 대수적 정수는 $1$ 의 거듭제곱근이다. 둘째, 노름이 $\pm1$ 이므로 상은 좌표의 합이 $0$ 인 $r$ 차원 초평면 $H$ 안에 있고, 유계 영역에 든 대수적 정수가 유한 개이므로 상은 이산이다. 곧 상은 $H$ 안의 [격자](lattices.md)다.

셋째, 그 격자가 $H$ 를 펼친다는 것은 Minkowski 볼록체 정리(Minkowski's convex body theorem)로 노름이 유계인 원소를 충분히 많이 만들어 보인다.

그 결과 조절자는 격자 $\lambda(\mathcal O_K^\times)$ 의 기본영역의 부피와 같고, 고르는 좌표 $r$ 개에 무관하다.

## 계수의 값

| 수체 | r₁ | r₂ | r | 단수군 |
| --- | --- | --- | --- | --- |
| $\mathbb Q$ | $1$ | $0$ | $0$ | $\lbrace\pm1\rbrace$ |
| 허수이차체 | $0$ | $1$ | $0$ | 유한 순환군 |
| 실이차체 | $2$ | $0$ | $1$ | $\pm\varepsilon^{\mathbb Z}$ |
| $\mathbb Q(\sqrt[3]2)$ | $1$ | $1$ | $1$ | $\pm(1+\sqrt[3]2+\sqrt[3]4)^{\mathbb Z}$ |
| $\mathbb Q(\zeta_p)$ | $0$ | $(p-1)/2$ | $(p-3)/2$ | $\mu\times\mathbb Z^{(p-3)/2}$ |

$\mathbb Q(\sqrt d)$ 의 기본단수를 구하는 일은 [Pell 방정식](pell-equation.md) $x^2-dy^2=\pm1$ 의 최소해를 구하는 일과 같다.

## 류수 공식과의 관계

[Dedekind zeta 함수](dedekind-zeta.md) $\zeta_K(s)$ 의 $s=1$ 에서의 유수가 다음과 같다.

$$
\mathop{\mathrm{Res}}\_{s=1}\zeta_K(s)=\frac{2^{r_1}(2\pi)^{r_2}h_KR_K}{w_K\sqrt{\lvert d_K\rvert}}
$$

$h_K$ 는 류수, $w_K$ 는 $\mu_K$ 의 위수, $d_K$ 는 판별식이다. 유수에는 류수와 조절자가 곱 $h_KR_K$ 로만 나타난다. 실이차체에서는 이 곱이 $\sqrt{d_K}\thinspace L(1,\chi\_{d_K})$ 의 상수배이므로, 기본단수가 크면 류수가 작다.

# 활용

- 실이차체의 단수군의 계수가 $1$ 인 것이 $x^2-dy^2=1$ 의 해가 최소해의 거듭제곱으로 전부 나온다는 진술과 같다.
- Mordell 방정식(Mordell equation) $y^2=x^3+k$ 의 정수해를 $\mathbb Q(\sqrt[3]k)$ 같은 수체에서 다룰 때, 단수군이 유한 생성이라는 것을 써서 경우를 유한 개로 줄인다. [S-단위 방정식](s-unit-equation.md)이 같은 방법을 쓴다.
- [원분체](cyclotomic-fields.md) $\mathbb Q(\zeta_p)$ 의 최대 실부분체에서 원분 단수(cyclotomic unit)가 이루는 부분군의 지수는 그 실부분체의 류수 $h_p^+$ 와 같다. [Iwasawa 주추측](iwasawa-main-conjecture.md)이 이 등식을 사용한다.
- 계산 대수적 수론에서는 단수군의 생성원과 류군을 함께 구하고, 계산량이 조절자의 크기에 따라 커진다.

# 연관 문서

## 선수지식

- [대수적 수체](algebraic-number-fields.md)

## 더 알아보기

- [S-단위 방정식](s-unit-equation.md)

#number_theory #field_theory #algebra
