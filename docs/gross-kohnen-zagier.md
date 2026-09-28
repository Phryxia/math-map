# Gross–Kohnen–Zagier 정리

# 개요

Gross–Kohnen–Zagier 정리는 판별식마다 하나씩 만든 [Heegner 점](heegner-points.md)들을 계수로 삼은 $q$ 급수가 무게 $3/2$ 의 [모듈러 형식](modular-forms.md)이라는 진술이다.

$$
\sum_{m\gt 0}y_m\thinspace q^m\ \in\ S^+\_{3/2}(\Gamma_0(4N))\otimes J
$$

$y_m$ 은 판별식 $-m$ 의 Heegner 점들을 자취로 모은 인자류이고 $J$ 는 [모듈러 곡선](modular-curves.md) $X_0(N)$ 의 [Jacobi 다양체](jacobian-variety.md)의 유리점이 이루는 군을 유리수 계수로 늘린 것이다.

무게 $2$ 의 신형식 $f$ 로 성분을 자르면 모든 $y_m$ 이 한 점의 유리수배가 되고, 그 배율이 [Shimura 대응](shimura-correspondence.md)으로 $f$ 에 짝지어진 무게 $3/2$ 형식의 Fourier 계수다. 판별식을 바꾸어 얻은 점들이 한 직선 위에 놓인다.

증명은 둘이다. 원래 증명은 Heegner 점들의 높이 짝을 Rankin 적분으로 계산한다.[^1] Borcherds 는 [Borcherds 곱](borcherds-products.md)이 만드는 인자가 무엇인지로 다시 증명했다.[^2]

# 직관

## 무한히 많은 점과 유한생성 군

$X_0(N)$ 위에는 허수이차체마다 Heegner 점들이 있고, 허수이차 판별식은 무한히 많다. 이 점들을 $J_0(N)$ 안의 인자류로 옮기면 $y_1,y_2,y_3,\dots$ 가 나온다. Mordell–Weil 정리로 $J_0(N)(\mathbb Q)$ 는 유한생성이므로 유리수 계수의 선형관계

$$
\sum_{m\gt 0}c_m\thinspace y_m=0
$$

가 무한히 많다. 어느 $(c_m)$ 이 여기 드는지가 문제다.

## 생성함수로 옮긴 문제

관계를 하나씩 찾는 대신 점을 계수로 삼은 급수 $\sum_m y_m q^m$ 을 본다. 이 급수가 유한차원 형식 공간 $S$ 의 원소와 $J$ 의 원소를 곱한 것들의 합, 곧 $S\otimes J$ 의 원소라 하자. $\sum_m y_m q^m=\sum_j g_j\otimes v_j$ 로 쓰면 $y_m=\sum_j a_{g_j}(m)v_j$ 이므로

$$
\sum_m c_m\thinspace y_m=\sum_j\Bigl(\sum_m c_m\thinspace a_{g_j}(m)\Bigr)v_j
$$

이고, $S$ 의 모든 $g$ 에 대해 $\sum_m c_m a_g(m)=0$ 인 $(c_m)$ 은 관계가 된다. 역도 성립한다. 관계를 전부 아는 것과 급수가 어느 공간에 드는지 아는 것이 같은 문제다.

## 무게 $3/2$

그 공간은 준위 $4N$ 무게 $3/2$ 의 Kohnen 플러스 공간이다. 판별식 $-m$ 이 $4N$ 을 법으로 제곱이어야 Heegner 점이 생기고, 플러스 공간의 계수가 살아남는 $m$ 의 조건이 그것과 맞는다. Hecke 작용소 $T_p$ 가 $y_m$ 들을 섞는 방식도 Shimura 대응이 무게 $3/2$ 쪽에 주는 Hecke 작용과 맞는다.

공간이 유한차원이므로 $m$ 이 그 차원을 넘으면 $y_m$ 은 앞의 점들의 유리수 결합이다. 무한히 많던 관계가 유한 개의 계수로 결정된다.

# 정의

## 설정

$N$ 을 제곱인수가 없는 양의 정수라 하고

$$
J=J_0(N)(\mathbb Q)\otimes\mathbb Q
$$

라 쓴다. $J$ 는 유한차원 $\mathbb Q$ 벡터공간이다.

## Heegner 인자류

$-m$ 이 허수이차 판별식이고 $4N$ 을 법으로 제곱이면 $K=\mathbb Q(\sqrt{-m})$ 이 준위 $N$ 의 Heegner 조건을 만족한다. $K$ 의 Hilbert 류체 $H$ 위에 있는 판별식 $-m$ 의 Heegner 점들을 모두 더하고 차수를 $0$ 으로 맞추려 첨점류를 뺀 뒤 자취를 취한 것이

$$
y_m=\mathrm{Tr}\_{H/\mathbb Q}\bigl(\textstyle\sum x_{\mathfrak a}-\deg\cdot\infty\bigr)\ \in\ J
$$

다. 조건을 만족하지 않는 $m$ 에는 $y_m=0$ 을 준다.

## Kohnen 플러스 공간

$$
S^+\_{3/2}(\Gamma_0(4N))=\Bigl\lbrace g=\sum a(m)q^m\in S_{3/2}(\Gamma_0(4N)):\ a(m)=0\ \text{ unless }\ -m\equiv0,1\ (\mathrm{mod}\ 4)\Bigr\rbrace
$$

## 정리

$$
\sum_{m\gt 0}y_m\thinspace q^m\ \in\ S^+\_{3/2}(\Gamma_0(4N))\otimes J
$$

# 성질

## 신형식 성분의 1차원성

무게 $2$ 준위 $N$ 의 신형식 $f$ 가 자르는 $J$ 의 성분을 $J_f$, $y_m$ 의 그 성분을 $y_{m,f}$ 라 하면 $y_f\in J_f$ 와 유리수열 $a(m)$ 이 있어

$$
y_{m,f}=a(m)\thinspace y_f
$$

이고 $\sum_m a(m)q^m$ 은 Shimura 대응이 $f$ 에 짝지은 무게 $3/2$ 의 고유형식이다. 정리의 진술에서 $J$ 를 $J_f$ 로 바꾸면 우변의 형식 공간이 1차원이므로 이 꼴이 나온다.

## 함수방정식의 부호

$L(f,s)$ 의 부호가 $+1$ 이면 Heegner 점이 비틀림이고, 유리수 계수로 늘린 $J$ 에서 비틀림은 $0$ 이므로 모든 $y_{m,f}$ 가 $0$ 이다. 급수가 $0$ 이 아닐 수 있는 경우는 부호가 $-1$ 일 때다.

## Borcherds 의 증명

$X_0(N)$ 은 서명 $(2,1)$ 짝수 격자의 직교군이 주는 모듈러 다양체이고, 그 위의 Heegner 인자 $Z(m)$ 이 판별식 $-m$ 의 Heegner 점들을 모은 것이다. Borcherds 곱은 주요부 계수가 $c(-m)$ 인 약정칙 형식 $F$ 로부터 인자가

$$
\mathrm{div}(\Psi_F)=\sum_{m\gt 0}c(-m)\thinspace Z(m)
$$

인 모듈러 형식 $\Psi_F$ 를 만든다. $\Psi_F$ 가 모듈러 형식이므로 이 인자는 $J_0(N)$ 에서 $0$ 이 되고, 따라서 $\sum_m c(-m)y_m=0$ 이다.

그런 $F$ 가 있을 조건은 Serre 쌍대성이 주는 유한 개의 선형 조건, 곧 무게 $3/2$ 의 모든 첨점형식 $g$ 에 대해 $\sum_m c(-m)a_g(m)=0$ 이다. 직관 절의 동치로 이것이 정리다.

## 원래 증명

$y_m$ 들의 Néron–Tate 높이 짝 $\langle y_m,y_n\rangle_f$ 를 두 변수 생성함수로 모으고 Rankin 적분으로 계산하면 무게 $3/2$ 형식 두 개의 Fourier 계수의 곱이 나온다. 높이 짝이 $J_f$ 위에서 비퇴화이므로 등식

$$
\langle y_m,y_n\rangle_f=a(m)\thinspace a(n)\thinspace\langle y_f,y_f\rangle
$$

에서 $y_{m,f}=a(m)y_f$ 가 나온다. $m=n$ 인 항이 Gross–Zagier 공식의 판별식 $-m$ 판본이다.

# 활용

## 생성원 하나로의 환원

해석적 순위가 $1$ 인 타원곡선에서 $E(\mathbb Q)$ 의 무한위수 부분을 Heegner 점으로 얻을 때, 이 정리가 판별식마다 다른 점을 한 점의 유리수배로 환원한다. 계산에 쓸 판별식은 $a(m)\ne0$ 인 것 아무거나 고르면 된다.

## Kohnen–Zagier 공식과의 짝

같은 무게 $3/2$ 형식의 계수 $a(m)$ 을 두 정리가 다르게 해석한다. 부호가 $+1$ 인 신형식에 대해서는 Kohnen–Zagier 가 $a(m)^2$ 을 중심값 $L(f,1)$ 의 비틀림 판본과 잇고[^3], 부호가 $-1$ 인 경우에는 이 정리가 $a(m)$ 을 Heegner 점의 배율로 준다. 도함수 쪽 값은 Gross–Zagier 공식이 높이로 준다.

## 특수 순환류의 모듈러성

Heegner 점을 고차원 순환류로 바꾼 같은 모양의 진술이 뒤따랐다. Zhang 은 Kuga–Sato 다양체의 Heegner 순환류에 대해, Kudla 와 Millson 은 직교형 Shimura 다양체의 특수 순환류에 대해 생성함수가 모듈러임을 보였다.[^4] Kudla 강령은 이 계열을 산술적 교차수로 확장한다.

## Borcherds 곱의 존재 판정

증명을 거꾸로 읽으면 어떤 Heegner 인자 조합 $\sum c_mZ(m)$ 이 모듈러 형식의 인자인지를 무게 $3/2$ 첨점형식과의 짝 조건으로 판정할 수 있다. 기하 문제가 유한 개의 선형 조건이 된다.

[^1]: B. Gross, W. Kohnen, D. Zagier, *Heegner points and derivatives of L-series. II*, Math. Ann. **278** (1987), 497–562. 무게 $3/2$ 쪽의 배경은 W. Kohnen, *Newforms of half-integral weight*, J. Reine Angew. Math. **333** (1982), 32–72.
[^2]: R. Borcherds, *The Gross–Kohnen–Zagier theorem in terms of Borcherds products*, Math. Z. **228** (1998), 27–29.
[^3]: W. Kohnen, D. Zagier, *Values of L-series of modular forms at the center of the critical strip*, Invent. Math. **64** (1981), 175–198.
[^4]: S. Zhang, *Heights of Heegner cycles and derivatives of L-series*, Invent. Math. **130** (1997), 99–152. 직교형은 S. Kudla, J. Millson, *Intersection numbers of cycles on locally symmetric spaces and Fourier coefficients of holomorphic modular forms in several complex variables*, Publ. Math. Inst. Hautes Études Sci. **71** (1990), 121–172.

# 연관 문서

## 선수지식

- [Heegner 점과 Gross–Zagier 공식](heegner-points.md)
- [Borcherds 곱](borcherds-products.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #theorem #complex_analysis
