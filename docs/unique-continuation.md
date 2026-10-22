# 유일 연속 정리

# 개요

**유일 연속 정리(unique continuation theorem)** 는 연결 영역에서 타원형 방정식의 해가 열린 부분집합 하나에서 $0$ 이면 영역 전체에서 $0$ 이라는 정리다. 두 해가 작은 공 하나에서 같으면 영역 전체에서 같다는 것과 동치다. 조화함수에서는 해석함수의 일치 정리로 나오지만, 계수가 해석적이지 않은 방정식의 해는 해석함수가 아니어서 따로 증명해야 한다. T. Carleman 이 평면에서 처음 증명했다[^1].

# 직관

연결 영역 $\Omega\subset\mathbb R^n$ 의 [조화함수](harmonic-functions.md) $u$ 가 작은 공 $B$ 에서 $0$ 이라고 하자. 조화함수는 각 점에서 Taylor 급수가 수렴해 그 근방에서 함수와 같다. $B$ 안의 점에서는 모든 편미분이 $0$ 이므로, 모든 편미분이 $0$ 인 점의 집합 $Z$ 는 비어 있지 않다. $Z$ 는 연속함수들의 영점이므로 닫혀 있고, $Z$ 의 점 근방에서 Taylor 급수가 $0$ 이므로 열려 있다. $\Omega$ 가 연결이므로 $Z=\Omega$ 이고 $u=0$ 이다.

계수가 $x$ 에 따라 바뀌는 방정식 $\sum_{i,j}\partial_i(a^{ij}(x)\partial_ju)=0$ 의 해는 계수가 해석적이지 않으면 Taylor 급수로 나타낼 수 없다. 위 논법에서 열려 있음을 보이는 단계가 Taylor 급수를 썼으므로 그 단계를 바꿔야 한다. 해가 한 점 근처에서 얼마나 빨리 $0$ 으로 갈 수 있는지를 적분으로 재고, 해가 아닌 한 무한히 빨리 갈 수는 없다는 부등식으로 그 단계를 대신한다.

# 정의

$\Omega\subset\mathbb R^n$ 을 연결 열린집합이라 하고

$$
Lu=\sum_{i,j}\partial_i\bigl(a^{ij}(x)\partial_ju\bigr)+\sum_ib^i(x)\partial_iu+c(x)u
$$

를 고른 타원형 연산자라 한다. 고른 타원형은 어떤 $\theta\gt 0$ 에서 모든 $x,\xi$ 에 대해 $\sum a^{ij}(x)\xi_i\xi_j\ge\theta\Vert\xi\Vert^2$ 라는 뜻이다.

- $L$ 이 **약한 유일 연속성(weak unique continuation property)** 을 갖는다는 것은 $Lu=0$ 의 해 $u\in H^1_{\mathrm{loc}}(\Omega)$ 가 비어 있지 않은 열린집합에서 $0$ 이면 $\Omega$ 에서 $0$ 이라는 것이다.
- $L$ 이 **강한 유일 연속성(strong unique continuation property)** 을 갖는다는 것은 해 $u$ 가 어떤 점 $x_0$ 에서 무한 차수로 $0$ 이 되면, 곧 모든 $N$ 에 대해 $\int_{B_r(x_0)}u^2=O(r^N)$ $(r\to 0)$ 이면 $\Omega$ 에서 $0$ 이라는 것이다.

강한 유일 연속성은 약한 유일 연속성을 함의한다.

# 성질

## 유일 연속 정리

$a^{ij}$ 가 Lipschitz 연속이고 $b^i,c$ 가 유계이면 $L$ 은 강한 유일 연속성을 갖는다. N. Aronszajn 이 Carleman 의 방법으로 강한 유일 연속성을 증명했고[^2], N. Garofalo 와 F.-H. Lin 은 Lipschitz 계수의 발산꼴 방정식에서 아래의 진동수 함수로 다시 증명했다[^3].

## 진동수 함수

조화함수 $u$ 에 대해

$$
N(r)=\frac{r\int_{B_r}\Vert\nabla u\Vert^2\thinspace dx}{\int_{\partial B_r}u^2\thinspace d\sigma}
$$

를 $x_0$ 에서의 **진동수 함수(frequency function)** 라 한다. $N$ 은 $r$ 에 대해 감소하지 않는다. 동차 조화다항식 $u$ 의 차수가 $d$ 이면 $N(r)=d$ 다.

$N$ 이 $r_0$ 이하에서 $N(r_0)$ 로 막히므로 두배 부등식(doubling inequality)

$$
\int_{B_{2r}}u^2\le C\int_{B_r}u^2\qquad(2r\le r_0)
$$

이 나온다. $C$ 는 $N(r_0)$ 와 $n$ 으로 정해진다. 이 부등식을 $k$ 번 되풀이하면 $\int_{B_{2^{-k}r_0}}u^2\ge C^{-k}\int_{B_{r_0}}u^2$ 이고, 우변은 $r=2^{-k}r_0$ 의 거듭제곱 $r^{\log_2C}$ 규모다. 그래서 $0$ 이 아닌 해는 무한 차수로 $0$ 이 될 수 없다.

## Carleman 부등식

Carleman 부등식(Carleman estimate)은 가중함수 $\phi$ 와 큰 매개변수 $\tau$ 에 대해, $x_0$ 근처에 받침이 있는 모든 매끄러운 $v$ 에서

$$
\tau^3\int e^{2\tau\phi}v^2\thinspace dx\le C\int e^{2\tau\phi}(Lv)^2\thinspace dx
$$

가 성립한다는 부등식이다. $\phi$ 는 $x_0$ 에서 멀어질수록 작아지게 고른다. 해 $u$ 에 차단함수를 곱한 $v$ 를 넣으면 $Lv$ 는 차단함수가 변하는 바깥 고리에서만 $0$ 이 아니다. $\tau\to\infty$ 로 보내면 안쪽의 $u$ 가 $0$ 이어야 한다.

## 정칙성 조건

3 차원 이상에서 Lipschitz 조건은 Hölder 연속으로 약하게 할 수 없다. A. Pliś 는 3 차원에서 계수가 Hölder 연속인 고른 타원형 연산자와, 열린집합에서 $0$ 이지만 항등적으로 $0$ 이 아닌 해를 만들었다[^4]. 계수가 해석적인 타원형 방정식에서는 Holmgren 정리(Holmgren's theorem)가 일반 차수에서 유일 연속을 준다.

# 활용

- [Courant 마디 영역 정리](courant-nodal-domain-theorem.md)의 증명은 마디 영역 하나에서 $0$ 인 고유함수가 영역 전체에서 $0$ 이라는 데서 모순을 얻는다. Laplace 고유함수는 $L=\Delta+\lambda$ 의 해이므로 이 정리를 쓴다.
- Runge 근사 성질. 약한 유일 연속성을 갖는 연산자에서는 큰 영역의 해들이 작은 영역의 해 전체를 $L^2$ 에서 조밀하게 근사한다. P. Lax 가 유일 연속에서 이 근사 성질을 유도했다[^5].
- Laplace 고유함수의 마디 집합은 내부가 비어 있다. 내부가 있으면 고유함수가 그 열린집합에서 $0$ 이므로 영역 전체에서 $0$ 이다.

[^1]: T. Carleman, "Sur un problème d'unicité pour les systèmes d'équations aux dérivées partielles à deux variables indépendantes", Ark. Mat. Astr. Fys. 26B (1939), no. 17, 1–9.
[^2]: N. Aronszajn, "A unique continuation theorem for solutions of elliptic partial differential equations or inequalities of second order", J. Math. Pures Appl. 36 (1957), 235–249.
[^3]: N. Garofalo, F.-H. Lin, "Monotonicity properties of variational integrals, Aₚ weights and unique continuation", Indiana Univ. Math. J. 35 (1986), 245–268.
[^4]: A. Pliś, "On non-uniqueness in Cauchy problem for an elliptic second order differential equation", Bull. Acad. Polon. Sci. Sér. Sci. Math. Astronom. Phys. 11 (1963), 95–100.
[^5]: P. D. Lax, "A stability theorem for solutions of abstract differential equations, and its application to the study of the local behavior of solutions of elliptic equations", Comm. Pure Appl. Math. 9 (1956), 747–766.

# 연관 문서

## 선수지식

- [조화함수](harmonic-functions.md)
- [타원형 정칙성](elliptic-regularity.md)

## 더 알아보기

- [Courant 마디 영역 정리](courant-nodal-domain-theorem.md)

#functional_analysis #analysis #theorem
