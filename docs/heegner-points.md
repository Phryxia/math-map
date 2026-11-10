# Heegner 점과 Gross–Zagier 공식

# 개요

**Heegner 점(Heegner point)** 은 [모듈러 곡선](modular-curves.md) $X_0(N)$ 위의 특수한 점을 [타원곡선](elliptic-curves.md)으로 옮겨 얻는, 허수이차체 위의 점이다. 타원곡선 위의 유리점이 무한히 많은지 알려면 위수가 무한인 점을 하나 찾아야 하는데, 계수가 큰 곡선에서는 그런 점의 좌표가 수십 자리여서 탐색으로 찾기 어렵다. Heegner 점은 그런 점을 탐색 없이 구성하고, Gross–Zagier 공식은 그 점이 무한위수인지를 $L$ 함수의 미분값으로 판정한다.

# 직관

타원곡선 $E\colon y^2+y=x^3-x$ 위에는 점 $P=(0,0)$ 이 있다. $P$ 의 배수를 차례로 계산하면 $(1,0)$, $(-1,-1)$, $(2,-3)$, $(1/4,-5/8)$, $(6,14)$, $(-5/9,8/27)$ 처럼 분모와 분자의 자릿수가 계속 늘어난다. 처음 찾은 점이 이미 이런 큰 좌표를 가진 곡선에서는 작은 좌표부터 대입해 보는 탐색이 끝나지 않는다.

이 곡선의 도체는 $37$ 이고, 모듈러 곡선 $X_0(37)$ 에서 $E$ 로 가는 사상 $\varphi$ 가 있다. $X_0(37)$ 의 점은 상반평면의 수 $\tau$ 로 주어진다. $\tau=\frac{-17+\sqrt{-7}}{74}$ 는 $37\tau^2+17\tau+2=0$ 의 근이고, $37\tau$ 는 $\sigma^2+17\sigma+74=0$ 의 근이다. 두 방정식의 판별식이 모두 $-7$ 이다.

판별식이 같으므로 $\tau$ 와 $37\tau$ 가 정하는 두 타원곡선은 둘 다 $\mathbb Q(\sqrt{-7})$ 의 정수환으로 곱해지는 격자에서 온다. [복소 곱셈](complex-multiplication.md)에 따라 이런 점은 $\mathbb Q(\sqrt{-7})$ 위에서 정의된다. 그래서 $\varphi(\tau)$ 는 좌표가 $\mathbb Q(\sqrt{-7})$ 에 속하는 $E$ 의 점이고, 탐색 없이 $\tau$ 하나에서 계산된다. 이 점이 Heegner 점이고, 그것이 무한위수인지를 정하는 것이 Gross–Zagier 공식이다.

# 정의

## Heegner 조건

허수이차체 $K=\mathbb Q(\sqrt D)$ ($D\lt 0$ 은 기본판별식)와 양의 정수 $N$ 에 대해, $N$ 을 나누는 모든 소수가 $K$ 에서 분해될 때 $K$ 가 **Heegner 조건(Heegner hypothesis)** 을 만족한다고 한다. $N$ 이 홀수이고 제곱인수가 없으면 이것은 $D$ 가 $4N$ 을 법으로 제곱수와 합동인 것과 동치다.

$N=37$, $D=-7$ 이면 $17^2=289=148+141$ 이고 $141\equiv-7\pmod{148}$ 이므로 조건이 성립한다. 직관 절의 $\tau=\frac{-17+\sqrt{-7}}{74}$ 의 $17$ 이 이 제곱근이다.

## 모듈러 곡선의 Heegner 점

$K$ 가 $N$ 에 대한 Heegner 조건을 만족하면 $\mathcal O_K/\mathfrak n\cong\mathbb Z/N$ 인 [아이디얼](ideals-quotient-rings.md) $\mathfrak n$ 이 존재한다. $\mathfrak n$ 을 고정하고, 각 아이디얼류 $[\mathfrak a]\in\mathrm{Cl}(K)$ 에 대해 두 [격자](lattices.md) $\mathfrak a\subset\mathfrak a\mathfrak n^{-1}$ 이 정하는 순환 $N$ 등원사상을 잡는다.

$$
x_{\mathfrak a}=\bigl(\mathbb C/\mathfrak a\thickspace\longrightarrow\thickspace\mathbb C/\mathfrak a\mathfrak n^{-1}\bigr)\thickspace\in\thickspace X_0(N)(H)
$$

이 점들을 $X_0(N)$ 의 Heegner 점이라 한다. 핵은 $\mathfrak n^{-1}\mathfrak a/\mathfrak a\cong\mathcal O_K/\mathfrak n\cong\mathbb Z/N$ 이다. $H$ 는 $K$ 의 Hilbert 유체(Hilbert class field), 곧 $K$ 의 최대 비분기 아벨 확대이고 $\mathrm{Gal}(H/K)\cong\mathrm{Cl}(K)$ 다([유체론](class-field-theory.md)). Heegner 점은 류수 $h_K$ 개다.

$\mathbb Q(\sqrt{-7})$ 은 류수가 $1$ 이므로 $H=K$ 이고, $N=37$ 에서 Heegner 점은 하나다. 직관 절의 $\tau$ 가 그 점이다.

## 모듈러 파라미터화

도체 $N$ 의 타원곡선 $E/\mathbb Q$ 에 대해 모듈러성 정리(modularity theorem)는 $\mathbb Q$ 위에서 정의된 사상 $\varphi\colon X_0(N)\to E$ 의 존재를 준다. $\varphi$ 는 첨점 $\infty$ 를 $E$ 의 영점 $O$ 로 보내도록 정규화하고, 이 $\varphi$ 를 **모듈러 파라미터화(modular parametrization)** 라 한다. 그 차수 $\deg\varphi$ 가 모듈러 차수(modular degree)다.

$\varphi$ 는 무게 $2$ 의 새형식 $f=\sum a_nq^n$ 으로 $\varphi(\tau)=\sum_{n\ge1}\frac{a_n}{n}q^n$ ($q=e^{2\pi i\tau}$)을 $E$ 의 주기격자에 대한 몫 $\mathbb C/\Lambda_E\cong E(\mathbb C)$ 로 옮겨 계산한다. 직관 절의 곡선 $y^2+y=x^3-x$ 에서 모듈러 차수는 $2$ 다.

## 타원곡선의 Heegner 점

$E$ 의 도체 $N$ 에 대해 $K$ 가 Heegner 조건을 만족할 때 다음 점을 $E$ 의 Heegner 점이라 한다.

$$
y_K=\mathrm{Tr}\_{H/K}\thinspace\varphi(x_{\mathcal O_K})=\sum_{\sigma\in\mathrm{Gal}(H/K)}\varphi(x_{\mathcal O_K})^{\sigma}\in E(K)
$$

류수가 $1$ 이면 자취는 한 항이다. $N=37$, $D=-7$ 에서는 $y_K=\varphi(\tau)$ 다.

## 링 유체 위의 Heegner 점

$N$ 과 $D$ 에 서로소인 정수 $n$ 에 대해 $\mathcal O_n=\mathbb Z+n\mathcal O_K$ 를 지표 $n$ 의 순서환(order)이라 한다. $\mathcal O_n$ 과 $\mathfrak n\cap\mathcal O_n$ 으로 위와 같이 만든 점 $x_n\in X_0(N)$ 은 링 유체(ring class field) $K_n$ 위에서 정의되고, $y_n=\varphi(x_n)\in E(K_n)$ 으로 둔다. $K_1=H$ 이고 $\mathrm{Tr}\_{H/K}y_1=y_K$ 다.

# 성질

## Shimura 상호법칙

$\sigma_{\mathfrak b}\in\mathrm{Gal}(H/K)$ 를 아이디얼류 $[\mathfrak b]$ 에 대응하는 원소라 하면 $x_{\mathfrak a}^{\sigma_{\mathfrak b}}=x_{\mathfrak a\mathfrak b^{-1}}$ 이다. 이를 Shimura 상호법칙(Shimura reciprocity law)이라 한다. Heegner 점 $h_K$ 개가 $\mathrm{Gal}(H/K)$ 의 한 궤도를 이루고, 이 작용은 단순추이적이다.

## 함수방정식의 부호

$K$ 위의 $L$ 함수는 두 $L$ 함수의 곱이다. $E^{D}$ 는 $D$ 에 의한 이차 꼬임(quadratic twist)이다.

$$
L(E/K,s)=L(E,s)\cdot L(E^{D},s)
$$

Heegner 조건 아래에서 $L(E/K,s)$ 의 함수방정식의 부호는 $\varepsilon(E/K)=-1$ 이다. 그래서 $L(E/K,1)=0$ 이고, $s=1$ 에서 첫 정보는 미분 $L'(E/K,1)$ 에 있다.

## Gross–Zagier 공식

$\hat h$ 를 $E/K$ 위의 [Néron–Tate 높이](canonical-height.md), $u=\vert\mathcal O_K^\times\vert/2$, $\langle f,f\rangle$ 을 $f$ 의 Petersson 노름(Petersson norm)이라 하면 다음이 성립한다. Gross 와 Zagier 가 1986 년에 증명했고, 이것이 **Gross–Zagier 공식(Gross–Zagier formula)** 이다[^1].

$$
L'(E/K,1)=\frac{32\pi^2\thinspace\langle f,f\rangle}{u^2\sqrt{\vert D\vert}}\thickspace\hat h(y_K)
$$

우변의 상수가 양수이고 Néron–Tate 높이는 비틀림 점에서만 $0$ 이므로 다음이 따라 나온다.

$$
L'(E/K,1)\ne0\iff \hat h(y_K)\ne0\iff y_K\thinspace\text{가 무한위수}
$$

이때 $\mathrm{rank}\thinspace E(K)\ge1$ 이다.

## 증명의 두 국소 분해

Gross–Zagier 공식의 증명은 양변을 각각 자리 $v$ 에 대한 국소 항의 합으로 쓰고 항끼리 비교한다.

- 기하 쪽. 높이가 Néron 국소 높이의 합 $\hat h(y_K)=\sum_v \lambda_v$ 로 쓰인다. 유한 자리의 $\lambda_v$ 는 두 복소 곱셈(complex multiplication, CM) 점의 교차수이고 준동형사상의 개수로 계산된다. 무한 자리의 $\lambda_v$ 는 상반평면의 [Green 함수](greens-function.md) 값이다.
- 해석 쪽. $L(E/K,s)$ 가 $f$ 와 $K$ 의 [theta 급수](theta-series.md)의 [Rankin–Selberg 적분](rankin-selberg.md)으로 쓰인다. $s=1$ 에서 미분하면 [Eisenstein 급수](eisenstein-series.md)의 Fourier 계수가 나오고, 그 계수가 국소 항의 합으로 쪼개진다.

두 분해의 항은 자리마다 같다. 기하 쪽은 격자의 교차로, 해석 쪽은 [이차형식](quadratic-forms.md)의 표현수로 $K$ 의 아이디얼을 센다.

## Kolyvagin 정리

링 유체 위의 Heegner 점은 자취 관계를 만족한다. $\ell$ 이 $K$ 에서 관성인 소수(inert prime)이고 $a_\ell$ 이 $f$ 의 $\ell$ 번째 Hecke [고윳값](eigenvalues.md)이다.

$$
\mathrm{Tr}\_{K_{n\ell}/K_n}(y_{n\ell})=a_\ell\thinspace y_n
$$

Kolyvagin 은 이 관계로부터 코호몰로지류 $\kappa_n\in H^1(K,E[p])$ 를 만들었다. 각 $\kappa_n$ 이 국소 조건 하나를 주어 [Selmer 군과 Tate–Shafarevich 군](selmer-tate-shafarevich.md)의 크기가 위에서 제한된다. 이런 정합적인 코호몰로지류의 열이 [Euler 계](euler-systems.md)의 한 예다. 결론은 $y_K$ 가 무한위수이면 $\mathrm{rank}\thinspace E(K)=1$ 이고 $\text{Ш}(E/K)$ 가 유한하다는 것이다([Kolyvagin–Logachev 정리](kolyvagin-logachev.md)).

## 순위 1 이하의 BSD

$E/\mathbb Q$ 의 해석적 순위를 $r_{\mathrm{an}}=\mathrm{ord}\_{s=1}L(E,s)$ 라 하면, Gross–Zagier 공식과 Kolyvagin 정리를 합쳐 다음이 증명된다. 이것이 해석적 순위 $1$ 이하에서의 [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)(BSD)이다.

| 가정 | 결론 |
|---|---|
| $r_{\mathrm{an}}=0$ | $\mathrm{rank}\thinspace E(\mathbb Q)=0$ 이고 $\text{Ш}(E/\mathbb Q)$ 유한 |
| $r_{\mathrm{an}}=1$ | $\mathrm{rank}\thinspace E(\mathbb Q)=1$ 이고 $\text{Ш}(E/\mathbb Q)$ 유한 |
| $r_{\mathrm{an}}\ge2$ | 두 정리가 결론을 주지 않음 |

$r_{\mathrm{an}}=0$ 이면 $L(E^D,s)$ 가 $s=1$ 에서 단순 영점을 갖는 $K$ 를 고른다. 그런 $K$ 의 존재는 Bump–Friedberg–Hoffstein 과 Murty–Murty 의 비소실 정리(non-vanishing theorem)가 준다. 이때 $y_K$ 는 무한위수이고 그 성분이 $E^D$ 쪽에 있어, Kolyvagin 논법이 $E(\mathbb Q)$ 의 유한성을 준다.

## 순위 2 이상에서의 소실

$E(\mathbb Q)$ 의 순위가 $2$ 이상이면 $y_K$ 는 비틀림 점이다. 곡선 $389a$ 는 순위가 $2$ 이고 $L(E,s)$ 가 $s=1$ 에서 2 차 영점을 가지므로, 모든 $K$ 에서 $L'(E/K,1)=0$ 이고 공식이 $\hat h(y_K)=0$ 을 준다. Heegner 점은 $K$ 하나에 하나이고 공식의 우변은 그 점의 높이 하나이므로, 좌변의 소실 차수는 $1$ 까지만 판정된다.

## Gross–Zagier 공식의 확장

- Gross–Zagier–Zhang 공식. Zhang 이 공식을 총실체 위의 Shimura 곡선으로 확장했고, Yuan–Zhang–Zhang 이 자기동형 표현으로 일반화했다. 이 꼴의 공식은 [Waldspurger 정리와 토릭 주기](waldspurger-formula.md)의 Waldspurger 공식을 미분한 판본이다.
- p 진 Gross–Zagier 공식. Perrin-Riou 가 [p 진 L 함수](p-adic-l-function.md)의 미분과 $p$ 진 높이를 잇는 판본을 증명했다. [Iwasawa 주추측](iwasawa-main-conjecture.md)과 함께 $\text{Ш}$ 의 $p$ 부분의 위수를 계산하는 데 쓰인다.
- Stark–Heegner 점(Stark–Heegner point). Darmon 이 실이차체에서 비슷한 점을 $p$ 진 상반평면 위의 적분으로 정의했고, 그 점이 대수적이라는 것을 추측으로 제시했다[^2].

# 활용

## 생성원 계산

순위가 $1$ 인 $E$ 의 생성원을 계산하는 알고리즘이 Heegner 점에서 나온다. 좌표가 큰 생성원에서도 계산량은 좌표의 자릿수에 대해 완만하게 늘어난다.

1. Heegner 조건을 만족하고 류수가 작은 $D$ 를 고른다.
2. Heegner 점 $x_{\mathfrak a}$ 마다 상반평면의 대표 $\tau$ 를 잡고 $\varphi(\tau)=\sum_{n\ge1}\frac{a_n}{n}q^n$ 을 수치로 더한다.
3. 그 합을 더해 $y_K$ 의 복소 근사를 얻고, $\mathbb C/\Lambda_E\cong E(\mathbb C)$ 로 좌표의 근사를 구한 뒤 유리수 좌표를 복원한다.
4. 얻은 점이 $E$ 위에 있는지 정확한 산술로 확인한다.

## 합동수 문제

$n$ 이 합동수(congruent number), 곧 세 변이 유리수이고 넓이가 $n$ 인 직각삼각형이 존재하는 수인 것은 $y^2=x^3-n^2x$ 의 순위가 양수인 것과 동치다. Tunnell 정리(Tunnell's theorem)는 이 곡선의 $L(E,1)$ 이 $0$ 인지를 정수해의 개수 비교로 바꾼다. $L(E,1)\ne0$ 이면 순위 $0$ 이 위의 표로 증명되므로 $n$ 은 합동수가 아니다. 역방향, 곧 $L(E,1)=0$ 이면 $n$ 이 합동수라는 것은 BSD 추측을 가정해야 증명된다.

## Ш 의 위수의 상계

Kolyvagin 논법은 $\text{Ш}$ 의 $p$ 부분 위수의 명시적 상계를 준다. 상계는 $E(K)$ 안에서 $y_K$ 가 생성하는 부분군의 지표로 정해진다.

$$
\mathrm{ord}\_p\bigl\vert\text{Ш}(E/K)\bigr\vert\thickspace\le\thickspace 2\thinspace\mathrm{ord}\_p\bigl\lbrack E(K):\mathbb Z y_K\bigr\rbrack
$$

반대 방향의 부등식이 Iwasawa 이론으로 증명되는 경우에는 등호가 성립하고, 순위 $1$ 에서 BSD 추측의 $\text{Ш}$ 위수 공식이 따라 나온다.

## 대수적 순환류

Beilinson–Bloch 추측(Beilinson–Bloch conjecture)은 $L$ 함수의 소실 차수와 같은 수의 독립인 대수적 순환류(algebraic cycle)가 존재한다고 예측한다. Gross–Zagier 공식은 소실 차수 $1$ 에서 그 순환류로 Heegner 점을 주고, 높이와 미분값의 관계까지 준다. Euler 계의 다른 구성과 자기동형 주기 공식이 같은 꼴의 등식을 다른 [대수군](algebraic-groups.md)에서 증명한다.

[^1]: B. Gross, D. Zagier, *Heegner points and derivatives of L-series*, Invent. Math. **84** (1986), 225–320. Kolyvagin 은 *Finiteness of* $E(\mathbb Q)$ *and* $\text{Ш}(E,\mathbb Q)$ *for a subclass of Weil curves*, Izv. Akad. Nauk SSSR **52** (1988). 해설로는 H. Darmon, *Rational Points on Modular Elliptic Curves* (CBMS 101) 와 Gross 의 *Kolyvagin's work on modular elliptic curves* 가 있다.
[^2]: H. Darmon, *Integration on* $\mathcal H\_p\times\mathcal H$ *and arithmetic applications*, Ann. of Math. **154** (2001), 589–639. Stark–Heegner 점을 구성하고 그 대수성을 추측으로 제시한다.

# 연관 문서

## 선수지식

- [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)
- [모듈러 곡선](modular-curves.md)
- [복소 곱셈](complex-multiplication.md)

## 더 알아보기

- [Gross–Kohnen–Zagier 정리](gross-kohnen-zagier.md)
- [Euler 계](euler-systems.md)
- [Waldspurger 정리와 토릭 주기](waldspurger-formula.md)

#number_theory #theorem #complex_analysis
