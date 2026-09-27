# p 진 L 함수

# 개요

$p$ 진 $L$ 함수는 복소 $L$ 함수의 특수값을 $p$ 진 해석 함수 하나로 모은 것이다. 값들은 유리수이고, 유리수는 복소수로도 $p$ 진수로도 읽힌다. $p$ 진 거리로 읽으면 서로 다른 지표에서 나온 값들이 가까워지고, 그 가까움이 한 함수의 연속성이 된다.

원형은 Kubota–Leopoldt 의 $p$ 진 zeta 함수다. Riemann zeta 의 음의 정수 값 $\zeta(1-n)=-B_n/n$ 을 [Bernoulli 수](bernoulli-numbers.md)의 Kummer 합동으로 이어 $\mathbb Z_p$ 위의 함수로 연장한다.

[타원곡선](elliptic-curves.md) $E/\mathbb Q$ 의 경우를 Mazur 와 Swinnerton-Dyer 가 세웠다[^1]. 재료는 [모듈러 기호](modular-symbols.md)이고, 얻는 것은 $\mathbb Z_p$ 위의 해석 함수 $L_p(E,s)$ 다. 이 함수가 Birch–Swinnerton-Dyer(BSD) 추측의 $p$ 진 판본과 [Iwasawa 주추측](iwasawa-main-conjecture.md)의 해석적 변에 놓인다.

# 직관

## 층마다 다른 복소수

$E$ 의 순위를 원분탑 $\mathbb Q\subset\mathbb Q(\mu_p)\subset\mathbb Q(\mu_{p^2})\subset\cdots$ 를 따라 재려고 한다. $n$ 층에서 필요한 것은 도체 $p^n$ 인 지표 $\chi$ 마다의 값 $L(E,\chi,1)$ 이다. [BSD](birch-swinnerton-dyer.md) 추측에 따르면 이 값이 $0$ 인지 아닌지가 그 지표 성분의 순위를 가른다.

값은 층마다 여러 개이고 전부 복소수다. 층을 하나 올릴 때 값들이 어떻게 변하는지 복소 절댓값으로는 보이지 않는다. 층 사이를 잇는 양은 $p$ 의 거듭제곱이므로 $p$ 진 거리로 재야 한다.

## 모듈러 기호가 주는 유리수

$E$ 에 대응하는 무게 2 신형식을 $f=\sum a_nq^n$ 이라 하고, 유리수 $r$ 에서의 모듈러 기호를 다음으로 둔다.

$$
\lbrack r\rbrack^{\pm}=\frac{1}{\Omega^{\pm}}\Bigl(\int_{i\infty}^{r}f(z)\thinspace dz\pm\int_{i\infty}^{-r}f(z)\thinspace dz\Bigr)
$$

$\Omega^{+}$ 와 $\Omega^{-}$ 는 $E$ 의 실주기와 허주기다. 이렇게 정규화한 $\lbrack r\rbrack^{\pm}$ 는 유리수이고 분모가 유계다. 도체 $p^n$ 인 원시 지표 $\chi$ 에 대한 특수값이 이 유리수들의 유한 합으로 나온다.

$$
\frac{\tau(\bar\chi)\thinspace L(E,\bar\chi,1)}{\Omega^{\pm}}
=\sum_{a\bmod p^n}\chi(a)\lbrack a/p^n\rbrack^{\pm}
$$

$\tau(\bar\chi)$ 는 [Gauss 합](gauss-sums.md)이고 부호 $\pm$ 는 $\chi(-1)$ 을 따른다. 좌변은 복소수였지만 우변은 유리수와 $p^n$ 차 단위근의 합이다.

## 층을 잇는 관계

Hecke 작용소 $U_p$ 가 층 사이의 관계를 준다. $b$ 가 $p^{n+1}$ 을 법으로 $a$ 위에 놓인 $p$ 개의 잉여류를 지날 때 다음이 성립한다.

$$
\sum_{b\equiv a\thinspace(p^n)}\lbrack b/p^{n+1}\rbrack=a_p\lbrack a/p^n\rbrack-\lbrack a/p^{n-1}\rbrack
$$

한 층의 값들을 더하면 아래층의 값이 나오되 $a_p$ 와 $-1$ 이 섞여 나온다. 이 섞임을 $\alpha$ 로 고르게 나누면 합 규칙이 정확해진다. $\alpha$ 를 $X^2-a_pX+p$ 의 근 가운데 $p$ 진 단위인 것으로 잡고 $\alpha^{-n}\lbrack a/p^n\rbrack$ 의 차를 보면, 층마다 값을 주는 규칙이 $\mathbb Z_p^{\times}$ 위의 [측도](measure.md) 하나가 된다.

측도가 하나 생기면 층마다 흩어져 있던 값들이 한 대상의 적분값이 된다. 지표 $\chi$ 로 적분하면 $n$ 층의 값이 나오고, $\langle x\rangle^{s-1}$ 로 적분하면 $s$ 에 대한 해석 함수가 나온다.

# 정의

## Mazur–Swinnerton-Dyer 측도

$E/\mathbb Q$ 를 도체 $N$ 인 타원곡선, $p\nmid N$ 을 좋은 보통 환원의 소수라 한다. 보통(ordinary)은 $p\nmid a_p$ 를 뜻하고, 이때 $X^2-a_pX+p$ 의 두 근 가운데 정확히 하나가 $p$ 진 단위다. 그것을 $\alpha$ 라 한다.

$\mathbb Z_p^{\times}$ 의 콤팩트 열린 집합 위에서 다음으로 정하는 것이 **Mazur–Swinnerton-Dyer 측도** $\mu_\alpha$ 다.

$$
\mu_\alpha(a+p^n\mathbb Z_p)=\alpha^{-n}\lbrack a/p^n\rbrack-\alpha^{-(n+1)}\lbrack a/p^{n-1}\rbrack
$$

$\alpha$ 가 단위이므로 우변의 $p$ 진 절댓값이 $n$ 에 무관하게 유계다. 유계인 유한가법 함수가 측도이고, $\mathbb Z_p^{\times}$ 위의 연속 함수를 적분할 수 있다.

## p 진 L 함수

$\omega$ 를 Teichmüller 지표, $\langle x\rangle=x/\omega(x)$ 를 $1+p\mathbb Z_p$ 성분이라 한다. $s\in\mathbb Z_p$ 에 대한 **$p$ 진 $L$ 함수**는 다음 적분이다.

$$
L_p(E,s)=\int_{\mathbb Z_p^{\times}}\langle x\rangle^{\thinspace s-1}\thinspace d\mu_\alpha(x)
$$

$\langle x\rangle^{s-1}=\exp_p\bigl((s-1)\log_p\langle x\rangle\bigr)$ 는 $s$ 에 대해 $p$ 진 해석적이고, 측도가 유계이므로 적분도 그렇다. 도체 $p^n$ 인 원시 지표 $\chi$ 를 끼운 판본은 $\int\chi(x)\langle x\rangle^{s-1}d\mu_\alpha$ 로 쓰고 $L_p(E,\chi,s)$ 라 한다.

## 보간 공식

정의를 특징짓는 것은 $s=1$ 에서의 값이다. 도체 $p^n$ ($n\ge1$) 인 원시 지표 $\chi$ 에 대해 다음이 성립한다[^2].

$$
L_p(E,\chi,1)=\frac{p^n}{\alpha^{\thinspace n}\thinspace\tau(\bar\chi)}\cdot\frac{L(E,\bar\chi,1)}{\Omega^{\pm}}
$$

자명한 지표에서는 $p$ 자리의 Euler 인자가 두 번 빠진다.

$$
L_p(E,1)=\Bigl(1-\frac{1}{\alpha}\Bigr)^{2}\frac{L(E,1)}{\Omega^{+}}
$$

주기 $\Omega^{\pm}$ 와 Gauss 합의 정규화는 [^2] 의 규약을 따른다. 이 두 등식이 모든 $\chi$ 에서 성립하는 유계 측도는 하나뿐이므로 $L_p(E,s)$ 는 보간 성질로 결정된다.

# 성질

## 예외적 영점

$p$ 가 $E$ 에서 split multiplicative 환원이면 $a_p=1$ 이고 $\alpha=1$ 이다. 보간 공식의 인자 $(1-\alpha^{-1})^2$ 이 $0$ 이므로 $L(E,1)\neq0$ 이어도 $L_p(E,1)=0$ 이다. 복소 쪽과 $p$ 진 쪽의 영점 차수가 어긋난다.

Mazur, Tate, Teitelbaum 이 이 자리를 메우는 불변량을 도입했다[^2]. $q_E\in p\mathbb Z_p$ 를 $E$ 의 Tate 주기라 할 때 다음이 $\mathcal L$ 불변량이다.

$$
\mathcal L(E)=\frac{\log_p q_E}{\mathrm{ord}\_p\thinspace q_E}
$$

예외적 영점 자리에서 $L_p$ 의 미분이 복소 특수값에 $\mathcal L(E)$ 를 곱한 것이다. Greenberg 와 Stevens 가 Hida 족을 따라 무게를 움직이는 방법으로 증명했다[^3].

$$
L_p'(E,1)=\mathcal L(E)\cdot\frac{L(E,1)}{\Omega^{+}}
$$

## 초특이 환원

$p\mid a_p$ 이면 $\alpha$ 의 $p$ 진 부치가 양수이고 $\alpha^{-n}$ 이 커진다. $\mu_\alpha$ 가 유계가 아니므로 위 적분이 그대로는 수렴하지 않는다. Amice–Vélu 와 Vishik 이 증가 차수를 제한한 분포로 적분 범위를 좁혀 $L_p$ 를 구성했고, 얻는 함수는 $\mathbb Z_p$ 전체에서 해석적이되 유계가 아니다[^4].

$a_p=0$ 인 경우 Pollack 이 이 함수를 두 조각으로 나눴다[^4]. 두 근 $\alpha,\bar\alpha$ 에서 온 함수 $L_p^{\alpha}$ 와 $L_p^{\bar\alpha}$ 를 유계인 $L_p^{+},L_p^{-}$ 와 명시적 $\log$ 인자의 조합으로 쓴다. 이 분해가 초특이 자리에서도 Iwasawa 불변량을 정의하게 한다.

## Iwasawa 대수 위의 원소

보통 환원에서 $\mu_\alpha$ 는 $\Gamma=\mathrm{Gal}(\mathbb Q(\mu_{p^\infty})/\mathbb Q(\mu_p))\cong\mathbb Z_p$ 위의 유계 측도이므로, 완비군환 $\Lambda=\mathbb Z_p\lbrack\lbrack\Gamma\rbrack\rbrack\cong\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 의 원소로 읽힌다. 이 원소를 $\mathcal L_E\in\Lambda$ 라 쓴다.

Weierstrass 예비정리가 $\mathcal L_E=p^{\mu}\cdot u\cdot P(T)$ 로 갈라 준다. $u$ 는 $\Lambda$ 의 단위, $P$ 는 차수 $\lambda$ 인 구별다항식이다. 두 수 $\mu,\lambda$ 가 $L_p$ 의 영점 개수와 $p$ 나눔을 재는 Iwasawa 불변량이다.

## 유일성

보간 공식이 요구하는 값은 $\chi$ 가 원분탑의 유한 층 지표를 지날 때 얻는 값들이고, 이 지표들은 $\Lambda$ 의 국소화에서 조밀하다. 두 유계 측도가 같은 값을 주면 차가 조밀한 집합에서 사라지므로 차가 $0$ 이다. 초특이 경우에는 유계성 대신 증가 차수 조건이 같은 역할을 하고, 부치 조건이 $h\lt 1$ 이면 유일성이 성립한다[^4].

# 활용

- **$p$ 진 BSD.** [$p$ 진 높이](p-adic-height.md)로 만든 조절자와 $L_p$ 의 선행계수를 견주는 등식이 $p$ 진 BSD 추측이다. 양변이 모두 $\mathbb Q_p$ 의 원소라 등식이 성립할 자리가 있다. split multiplicative 자리에서는 위의 $\mathcal L(E)$ 가 추가 인자로 들어간다[^2].
- **Iwasawa 주추측.** [Iwasawa 주추측](iwasawa-main-conjecture.md)은 $\mathcal L_E$ 가 생성하는 아이디얼이 원분탑 위 [Selmer 군](selmer-tate-shafarevich.md)의 특성 아이디얼과 같다는 진술이다. Kato 의 [Euler 계](euler-systems.md)가 한쪽 포함을, Skinner 와 Urban 의 Eisenstein 합동이 반대쪽을 준다[^5].
- **순위 0 의 판정.** Kato 의 포함 하나만으로도 $L(E,1)\neq0$ 에서 $E(\mathbb Q)$ 의 유한성이 따라 나온다. 보간 공식이 $L(E,1)\neq0$ 을 $L_p(E,1)\neq0$ 으로 옮기고, 그것이 $\Lambda$ 가군의 여차원 조건이 된다[^5].
- **수치 계산.** [과수렴 모듈러 기호](overconvergent-modular-symbols.md)가 $\mathcal L_E$ 의 계수를 유한 번의 선형대수로 준다. 보간으로 정의된 함수를 층마다 따라가지 않고 $\mu,\lambda$ 를 직접 표로 만든다.

[^1]: B. Mazur, P. Swinnerton-Dyer, *Arithmetic of Weil curves*, Invent. Math. **25** (1974), 1–61. 같은 시기의 독립 구성은 Yu. Manin, *Parabolic points and zeta-functions of modular curves*, Izv. Akad. Nauk SSSR **36** (1972), 19–66.

[^2]: B. Mazur, J. Tate, J. Teitelbaum, *On p-adic analogues of the conjectures of Birch and Swinnerton-Dyer*, Invent. Math. **84** (1986), 1–48. 보간 공식의 주기와 Gauss 합 정규화, $\mathcal L$ 불변량의 정의, $p$ 진 BSD 의 추가 인자가 모두 이 논문의 1 절과 2 절이다.

[^3]: R. Greenberg, G. Stevens, *p-adic L-functions and p-adic periods of modular forms*, Invent. Math. **111** (1993), 407–447.

[^4]: Y. Amice, J. Vélu, *Distributions p-adiques associées aux séries de Hecke*, Astérisque **24–25** (1975), 119–131. M. M. Vishik, *Non-Archimedean measures connected with Dirichlet series*, Mat. Sb. **99** (1976), 248–260. 초특이 분해는 R. Pollack, *On the p-adic L-function of a modular form at a supersingular prime*, Duke Math. J. **118** (2003), 523–558.

[^5]: K. Kato, *p-adic Hodge theory and values of zeta functions of modular forms*, Astérisque **295** (2004), 117–290. C. Skinner, E. Urban, *The Iwasawa main conjectures for GL(2)*, Invent. Math. **195** (2014), 1–277.

# 연관 문서

## 선수지식

- [p 진수](p-adic-numbers.md)
- [모듈러 기호](modular-symbols.md)
- [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)

## 더 알아보기

- [Iwasawa 주추측](iwasawa-main-conjecture.md)

#number_theory #complex_analysis #algebra
