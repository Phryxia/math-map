# Iwasawa 주추측

# 개요

**Iwasawa 주추측(Iwasawa main conjecture)** 은 $1$ 의 $p^n$ 제곱근으로 만든 체들을 $n=1,2,3,\dots$ 로 쌓았을 때, 각 체의 류수가 $p$ 로 몇 번 나누어지는지가 하나의 $p$ 진 $L$ 함수로 정해진다는 진술이다. $p=37$ 에서는 [Bernoulli 수](bernoulli-numbers.md) $B_{32}$ 의 분자가 $37$ 로 나누어지고, 그에 맞추어 $\mathbb Q(\mu_{37})$ 의 류수도 $37$ 로 나누어진다. 층 하나씩 류수를 계산하면 $n$ 에 따른 규칙이 보이지 않는다.

Iwasawa 는 탑 전체의 류군을 [멱급수](power-series.md) 환 위의 가군 하나로 모았고, 주추측은 그 가군을 정하는 멱급수가 $p$ 진 $L$ 함수와 같다고 주장한다. Mazur 와 Wiles 가 이것을 증명했다.

# 직관

$p$ 를 홀소수라 하고 $A_n$ 을 $\mathbb Q(\mu_{p^{n+1}})$ 의 류군의 $p$ 부분이라 하자. $p=37$ 이면 $A_0$ 은 위수 $37$ 의 순환군이다. 층마다 $\char35{}A_n$ 을 따로 계산해서는 $n$ 이 커질 때 이 수가 어떻게 자라는지 알 수 없다.

탑의 Galois 군에는 $\mathbb Z_p$ 와 같은 부분 $\Gamma$ 가 있고, 그 생성원 $\gamma$ 가 모든 $A_n$ 에 작용한다. $A_n$ 들을 노름 사상으로 이어 사영극한 $X$ 를 만들고 $T=\gamma-1$ 로 두면, $X$ 는 멱급수환 $\Lambda=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 위의 가군이 된다. $n$ 번째 층은 $\omega_n=(1+T)^{p^{n}}-1$ 로 나눈 몫 $X/\omega_nX$ 로 돌아온다.

가장 단순한 경우로 $X=\Lambda/(T-p)$ 를 보자. 이 가군에서는 $T$ 가 $p$ 로 작용하므로 $X\cong\mathbb Z_p$ 이고 $\omega_n$ 은 $(1+p)^{p^n}-1$ 배로 작용한다. 이 수는 $p$ 로 정확히 $n+1$ 번 나누어지므로 $\char35{}(X/\omega_nX)=p^{n+1}$ 이고, 층의 크기의 지수는 $n$ 에 대해 일차식으로 자란다.

일반적인 $X$ 는 유한한 차이를 무시하면 이런 조각들의 직합이고, 조각마다 $X$ 를 정하는 멱급수의 인수 하나가 대응한다. 그래서 $\char35{}A_n$ 의 지수는 큰 $n$ 에서 규칙적인 꼴이 되고, 그 규칙은 멱급수 하나로 정해진다. 주추측은 이 멱급수가 Bernoulli 수를 $p$ 진으로 이어 붙여 만든 [p 진 L 함수](p-adic-l-function.md)와 같다고 말한다.

# 정의

## 원분 Zₚ 확대와 Iwasawa 대수

$\mathbb Q(\mu_{p^\infty})/\mathbb Q$ 의 Galois 군은 $\Delta\times\Gamma$ 로 쪼개진다. $\Delta\cong(\mathbb Z/p)^{\times}$ 는 위수 $p-1$ 의 유한군이고, $\Gamma\cong\mathbb Z_p$ 다. $\Gamma$ 의 유한 몫에 대응하는 고정체들의 탑 $\mathbb Q_n$ 을 $\mathbb Q$ 의 **원분 Zₚ 확대(cyclotomic Zₚ-extension)** 라 한다.

$\Gamma$ 의 위상 생성원 $\gamma$ 를 고정하면 다음 동형이 있고, 이 환을 [Iwasawa 대수](iwasawa-algebra.md)라 한다.

$$
\Lambda=\mathbb Z_p\lbrack\lbrack\Gamma\rbrack\rbrack=\varprojlim_n\mathbb Z_p\lbrack\Gamma/\Gamma^{p^{n}}\rbrack\thickspace\cong\thickspace\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack,\qquad \gamma\mapsto 1+T
$$

직관 절의 $\Lambda/(T-p)$ 는 $\gamma$ 가 $1+p$ 배로 작용하는 $\mathbb Z_p$ 다.

## 구별다항식과 유사동형

$\mathbb Z_p\lbrack T\rbrack$ 의 모닉 다항식 가운데 최고차항 외의 계수가 모두 $p$ 로 나누어지는 것을 **구별다항식(distinguished polynomial)** 이라 한다. $T-p$ 와 $T^2+pT+p$ 는 구별다항식이고 $T-1$ 은 아니다.

두 $\Lambda$ [가군](modules.md) 사이의 준동형의 핵과 여핵이 유한이면 그 준동형을 **유사동형(pseudo-isomorphism)** 이라 한다. 유한 가군은 $0$ 과 유사동형이다.

## 특성 아이디얼

유한 생성 비틀림 $\Lambda$ 가군 $X$ 는 다음 꼴의 가군과 유사동형이다(성질 절의 구조정리). 여기서 $f_j$ 는 기약인 구별다항식이다.

$$
X\thickspace\sim\thickspace\bigoplus_{i}\Lambda/(p^{m_i})\oplus\bigoplus_{j}\Lambda/(f_j^{n_j})
$$

이때 다음 아이디얼을 $X$ 의 **특성 아이디얼(characteristic ideal)** 이라 하고, $\mu$ 와 $\lambda$ 를 $X$ 의 **Iwasawa 불변량(Iwasawa invariants)** 이라 한다.

$$
\mathrm{char}\_\Lambda(X)=\Big(p^{\sum_i m_i}\prod_j f_j^{n_j}\Big),\qquad
\mu=\sum_i m_i,\quad \lambda=\sum_j n_j\deg f_j
$$

$X=\Lambda/(T-p)$ 이면 $\mathrm{char}\_\Lambda(X)=(T-p)$, $\mu=0$, $\lambda=1$ 이다.

## Kubota–Leopoldt p 진 L 함수

$\chi$ 를 도체가 $p$ 의 거듭제곱인 Dirichlet 지표라 하자. 다음 보간 성질을 만족하는 $p$ 진 해석함수 $L_p(s,\chi)$ 가 유일하게 존재하고, 이것을 Kubota–Leopoldt $p$ 진 $L$ 함수(Kubota–Leopoldt p-adic L-function)라 한다.

$$
L_p(1-n,\chi)=-\big(1-\chi\omega^{-n}(p)\thinspace p^{\thinspace n-1}\big)\frac{B_{n,\chi\omega^{-n}}}{n},\qquad n\ge1
$$

$\omega$ 는 Teichmüller 지표이고, $B_{n,\psi}$ 는 일반화 Bernoulli 수(generalized Bernoulli number)다. 이 값들은 [Dirichlet L 함수](dirichlet-l-functions.md)의 음의 정수에서의 값 $L(1-n,\psi)=-B_{n,\psi}/n$ 에서 $p$ 에서의 Euler 인수를 뺀 것이다. $\chi=\omega^k$ 이고 $n\equiv k\pmod{p-1}$ 이면 $\chi\omega^{-n}=1$ 이므로 $L_p(1-n,\omega^k)=-(1-p^{n-1})B_n/n$ 이다.

Mazur 는 $L_p(s,\chi)$ 를 $\Gamma$ 위의 $p$ 진 측도로 실현했고, 측도는 $\Lambda$ 의 원소와 같으므로 $L_p(s,\chi)$ 에 대응하는 멱급수 $f(T,\chi)\in\Lambda$ 가 정해진다.

## 주추측의 진술

$X_\infty$ 를 $\mathbb Q(\mu_{p^\infty})$ 의 최대 불분기 아벨 $p$ 확대의 Galois 군이라 하고, $\chi$ 를 $\Delta$ 의 홀수 지표, $X_\infty^{(\chi)}$ 를 $\Delta$ 가 $\chi$ 로 작용하는 성분이라 하자. Iwasawa 주추측은 다음 등식이다.

$$
\mathrm{char}\_\Lambda\big(X_\infty^{(\chi)}\big)=\big(f(T,\chi^{-1}\omega)\big)
$$

짝수 지표 쪽은 단수 가군을 순환체 단수(cyclotomic unit)의 부분가군으로 나눈 몫으로 같은 꼴의 등식을 쓴다. 양변은 $\Lambda$ 의 아이디얼이고, 등식은 크기만이 아니라 특성 아이디얼의 일치를 주장한다.

# 성질

## 구조정리

유한 생성 $\Lambda$ 가군 $X$ 에 대해 다음 유사동형이 존재한다. $\Lambda$ 가 2 차원 [정칙 국소환](regular-local-rings.md)이라는 사실과 Weierstrass 준비정리(Weierstrass preparation theorem)로 증명된다.

$$
X\thickspace\longrightarrow\thickspace\Lambda^{r}\oplus\bigoplus_{i}\Lambda/(p^{m_i})\oplus\bigoplus_{j}\Lambda/(f_j^{n_j})
$$

$X$ 가 비틀림이면 $r=0$ 이다. Weierstrass 준비정리는 $\Lambda$ 의 원소를 $p^\mu\cdot P(T)\cdot U(T)$ 로 쓴다. $P$ 는 차수 $\lambda$ 의 구별다항식이고 $U$ 는 단원이다.

## Iwasawa 성장 공식

수체 $K$ 의 $\mathbb Z_p$ 확대 $K_\infty=\bigcup_nK_n$ ($\lbrack K_n:K\rbrack=p^n$)에서 $A_n$ 을 $K_n$ 의 아이디얼류군의 $p$ 부분, $X=\varprojlim A_n$ 이라 하자. 충분히 큰 $n$ 에서 다음이 성립한다. $\mu,\lambda$ 는 $X$ 의 Iwasawa 불변량이고 $\nu$ 는 정수 상수다.

$$
\mathrm{ord}\_p\char35{}A_n=\mu\thinspace p^{n}+\lambda\thinspace n+\nu
$$

증명의 요지. $X=\Lambda/(f)$ 이면 $\char35{}(X/\omega_nX)$ 는 $f$ 와 $\omega_n$ 의 종결식(resultant)의 $p$ 진 부치로 정해진다. 구별다항식의 근은 $p$ 진 절댓값이 $1$ 보다 작고, 그 근에서 $\omega_n$ 의 값의 부치가 $n$ 에 대해 일차로 자라므로 근 $\lambda$ 개가 $\lambda n$ 을 준다. $\Lambda/(p^{m})$ 에서는 $\char35{}(X/\omega_nX)=p^{m\thinspace p^{n}}$ 이어서 $\mu p^{n}$ 이 나온다. 직관 절의 $\Lambda/(T-p)$ 는 $\mu=0$, $\lambda=1$, 지수 $n+1$ 인 경우다.

## Ferrero–Washington 정리

아벨 수체의 원분 $\mathbb Z_p$ 확대에서는 $\mu=0$ 이다. 이것을 Ferrero–Washington 정리(Ferrero–Washington theorem)라 한다. 그래서 [원분체](cyclotomic-fields.md)에서 류수의 $p$ 지수는 큰 $n$ 에서 $\lambda n+\nu$ 다.

## Herbrand–Ribet 정리와의 관계

주추측의 양변을 $T=0$ 에서 비교하면 [Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)의 Herbrand–Ribet 정리가 나온다. $p$ 가 홀소수, $k$ 가 짝수, $2\le k\le p-3$ 이면 다음이 성립한다.

$$
p\mid B_k\quad\Longleftrightarrow\quad A^{(\omega^{1-k})}\ne0
$$

Herbrand 가 $\Leftarrow$ 를, Ribet 이 $\Rightarrow$ 를 증명했다. Herbrand 쪽은 [Stickelberger 원소](stickelberger.md)가 류군을 소멸시킨다는 사실에서 나오고, Ribet 쪽은 [Eisenstein 급수](eisenstein-series.md)와 첨점형식의 합동에서 불분기 확대를 만들어 류군의 원소를 얻는다. Mazur–Wiles 는 Ribet 의 방법을 [모듈러 곡선](modular-curves.md)의 탑 전체에 적용해 류군이 $L_p$ 가 정하는 크기 이상임을 보였다. Rubin 은 반대 방향, 곧 류군이 그 크기 이하임을 [Euler 계](euler-systems.md)로 증명했다.

## 순환체 단수와 지표 공식

$E$ 를 $\mathbb Q(\mu_{p^{n}})^{+}$ 의 단수군, $C\subset E$ 를 순환체 단수가 생성하는 부분군, $h^+$ 를 $\mathbb Q(\mu_{p^{n}})^{+}$ 의 류수라 하면 다음이 성립한다(Kummer, Sinnott).

$$
\big\lbrack\thinspace E:C\thinspace\big\rbrack=h^{+}
$$

$1-\zeta_{p^{n}}$ 은 $p$ 위의 소원소이고, 단수가 되는 것은 비 $\frac{1-\zeta^{a}}{1-\zeta}$ 다. Euler 계 증명에서 이 공식이 두 변의 전체 크기가 같음을 준다. Euler 계로 각 $\chi$ 성분에서 한쪽 부등식을 얻으면, 전체 크기가 같으므로 모든 성분에서 등호가 성립한다.

## Rubin 의 증명

1. Euler 계. $c_n=\frac{1-\zeta_{n}^{a}}{1-\zeta_n}$ 들이 $H^1(\mathbb Q(\mu_n),\mathbb Z_p(1))$ 안에서 자취 관계 $\mathrm{cor}(c_{n\ell})=(1-\mathrm{Fr}\_\ell^{-1})c_n$ 을 만족한다. [Kummer 이론](kummer-theory.md)으로 단수군이 $H^1(\cdot,\mathbb Z_p(1))$ 에 들어가므로 이 단수들이 코호몰로지류다.
2. 유도. Kolyvagin 유도 연산자(Kolyvagin derivative operator)로 류 $\kappa_n$ 을 만든다. 각 $\kappa_n$ 은 $n$ 을 나누는 소수 밖에서 국소 조건을 만족한다.
3. 상호법칙. [Poitou–Tate 완전열](poitou-tate.md)의 대역 상호법칙으로 류군의 원소를 하나씩 제거한다. 소수 $\ell$ 은 [Chebotarev 밀도 정리](chebotarev.md)로 고른다.
4. 부등식. $\char35{}X_\infty^{(\chi)}$ 가 $L_p$ 쪽이 정하는 크기 이하임을 얻는다. 이 나눔은 $\Lambda$ 의 높이 1 소 아이디얼마다 확인한다.
5. 등호. 해석적 류수 공식(analytic class number formula)과 지표 공식으로 전체 크기가 같음을 확인해 등호를 얻는다.

## 알려진 열린 문제

| 진술 | 상태 |
|---|---|
| 원분체 주추측 ($\mathbb Q$ 위) | 증명됨 (Mazur–Wiles, Rubin) |
| 허수이차체 위 주추측 | 증명됨 (Rubin, 타원 단수) |
| $\mu=0$ (아벨 수체) | 증명됨 (Ferrero–Washington) |
| 일반 총실체에서 $\mu=0$ | 증명되지 않음[^1] |
| [Vandiver 추측과 순환체의 짝수 성분](vandiver-conjecture.md)의 $p\nmid h^{+}$ | 증명되지 않음, 수치 검증만 있음[^1] |
| 총실체 위 주추측 | 홀수 $p$ 에서 증명됨 (Wiles) |

주추측은 홀수 성분을 기술하고 짝수 성분이 $0$ 인지는 말하지 않으므로, Vandiver 추측은 주추측에서 유도되지 않는다.

# 활용

## 정칙 소수와 Fermat 마지막 정리

$p$ 가 $\mathbb Q(\mu_p)$ 의 류수를 나누지 않으면 $p$ 를 정칙 소수(regular prime)라 한다. Kummer 는 이것이 $p\nmid B_2B_4\cdots B_{p-3}$ 와 동치임을 증명했고, 정칙 소수 $p$ 에 대해 $x^p+y^p=z^p$ 가 자명하지 않은 정수해를 갖지 않음을 증명했다([Fermat 마지막 정리](fermats-last-theorem.md)). Herbrand–Ribet 정리는 Kummer 의 기준을 류군의 성분별로 세분하고, 주추측은 같은 관계를 탑의 모든 층으로 확장한다.

## 타원곡선의 주추측

[타원곡선](elliptic-curves.md) $E$ 에 대해서도 같은 꼴의 진술이 세워진다. $E$ 의 [Selmer 군과 Tate–Shafarevich 군](selmer-tate-shafarevich.md)의 Selmer 군을 원분 $\mathbb Z_p$ 확대의 층마다 모아 $\Lambda$ 가군을 만들고, 그 특성 아이디얼이 Mazur–Swinnerton-Dyer 의 $p$ 진 $L$ 함수와 같다는 것이 타원곡선의 주추측이다. Kato 의 Euler 계가 한쪽 나눔을, Skinner–Urban 이 Eisenstein 합동으로 반대쪽 나눔을 주었다. 이 정리에서 $p$ 진 [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)(BSD)과, 추가 조건 아래 고전적 BSD 추측의 일부가 유도된다.

## Iwasawa 불변량의 계산

류군을 직접 계산하기 어려운 층에서도 $L_p$ 의 멱급수의 $\lambda$ 불변량을 Bernoulli 수로 계산해 류군의 성장을 정한다. 거꾸로 작은 층의 류군에서 $L_p$ 의 영점에 대한 정보를 얻는다.

## Stark 추측

Stark 추측(Stark conjecture)은 $L$ 함수의 $s=0$ 근처의 값을 단수의 로그로 나타내는 원소의 존재를 예측하고, 순환체 단수는 $\mathbb Q$ 위의 아벨 확대에서 그 원소다. Rubin 은 이 원소들의 일반화(Rubin–Stark 원소)가 존재하면 Euler 계를 이룬다는 것을 보였다.

[^1]: 표준 교재는 L. Washington, *Introduction to Cyclotomic Fields* (2판, Springer 1997) 7, 13, 15 장. 주추측의 두 증명은 B. Mazur, A. Wiles, *Class fields of abelian extensions of* $\mathbb Q$ (Invent. Math. **76**, 1984) 와 K. Rubin 의 부록(Washington 2판 15 장). Ferrero–Washington 은 Ann. of Math. **109** (1979). 총실체는 A. Wiles, *The Iwasawa conjecture for totally real fields*, Ann. of Math. **131** (1990). 타원곡선 쪽은 C. Skinner, E. Urban, *The Iwasawa main conjectures for* $\mathrm{GL}\_2$ (Invent. Math. **195**, 2014).

# 연관 문서

## 선수지식

- [Euler 계](euler-systems.md)
- [Stickelberger 원소](stickelberger.md)
- [p 진 L 함수](p-adic-l-function.md)

## 더 알아보기

- [Vandiver 추측과 순환체의 짝수 성분](vandiver-conjecture.md)

#number_theory #theorem #algebra
