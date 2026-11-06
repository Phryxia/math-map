# Stickelberger 원소

# 개요

**Stickelberger 원소(Stickelberger element)** 는 [원분체](cyclotomic-fields.md)의 Galois 군의 원소들을 분수 계수로 더한 것으로, [Gauss 합](gauss-sums.md)이 소 아이디얼로 분해되는 모양을 적는다. $\bmod 7$ 의 삼차 지표로 만든 Gauss 합 $g$ 는 절댓값이 $\sqrt7$ 이고, $g^3$ 은 $\mathbb Z\lbrack\omega\rbrack$ 에서 $7=(1+3\omega)(1+3\bar\omega)$ 의 한 인수로 두 번, 다른 인수로 한 번 나뉜다. 두 지수가 왜 $2$ 와 $1$ 로 갈리는지가 문제다. Stickelberger 원소의 계수가 그 지수를 정하고, 이 원소에 정수 계수가 되도록 군환 원소를 곱한 것은 원분체의 아이디얼 류군을 소멸시킨다.

# 직관

$\chi$ 를 $\chi(3)=\omega=e^{2\pi i/3}$ 인 $\bmod 7$ 의 삼차 지표라 하자. Gauss 합 $g=\sum_{a=1}^{6}\chi(a)\zeta_7^{a}$ 는 $\vert g\vert^2=7$ 을 만족하므로, $g$ 가 나누는 소 아이디얼은 $7$ 위에 있는 것뿐이다. $g$ 자신은 $\mathbb Q(\omega,\zeta_7)$ 에 있지만 $g^3$ 은 $\mathbb Q(\omega)$ 에 있고, $g^3=7J$ 이다. 여기서 $J=g^2/g(\chi^2)$ 는 Jacobi 합(Jacobi sum)이고 계산하면 $J=-1-3\omega$ 다.

$1+3\omega$ 의 노름은 $1-3+9=7$ 이므로 $\mathfrak p=(1+3\omega)$ 와 그 켤레 $\bar{\mathfrak p}$ 가 $7$ 위의 두 소 아이디얼이고 $(7)=\mathfrak p\bar{\mathfrak p}$ 다. 그러면 $(g^3)=(7)(J)=\mathfrak p^{2}\bar{\mathfrak p}^{1}$ 이다. $\vert g\vert$ 만 보아서는 두 지수가 같은 $3/2$ 일 것처럼 보이지만 실제로는 $2$ 와 $1$ 로 갈린다. Galois 군 $\lbrace\sigma_1,\sigma_2\rbrace$ 의 원소에 $1/3$ 과 $2/3$ 을 붙여 더한 것에 $3$ 을 곱하면 바로 이 지수 $1$ 과 $2$ 가 나온다. 이렇게 지수를 모아 적은 군환의 원소가 Stickelberger 원소다.

# 정의

## Stickelberger 원소

$K=\mathbb Q(\mu_m)$, $G=\mathrm{Gal}(K/\mathbb Q)\cong(\mathbb Z/m)^{\times}$ 이고 $\sigma_a(\zeta_m)=\zeta_m^{a}$ 라 하자. $\lbrace x\rbrace$ 는 $x$ 의 소수 부분이다.

$$
\theta_m=\sum_{a\in(\mathbb Z/m)^{\times}}\Big\lbrace\frac{a}{m}\Big\rbrace\thinspace\sigma_a^{-1}\in\mathbb Q\lbrack G\rbrack
$$

$\theta_m$ 을 **Stickelberger 원소** 라 한다. 여기서 $\mathbb Q\lbrack G\rbrack$ 은 $G$ 의 원소들의 유리수 계수 형식적 일차결합이 이루는 군환(group ring)이다. 직관 절의 $m=3$ 이면 $\sigma_2=\sigma_2^{-1}$ 이므로 $\theta_3=\tfrac13\sigma_1+\tfrac23\sigma_2$ 이고, $3\theta_3=\sigma_1+2\sigma_2$ 의 계수 $1$, $2$ 가 직관 절의 두 지수다.

## Stickelberger 아이디얼

$$
I_m=\mathbb Z\lbrack G\rbrack\cap\theta_m\mathbb Z\lbrack G\rbrack
$$

$I_m$ 을 **Stickelberger 아이디얼(Stickelberger ideal)** 이라 한다. $\gcd(c,m)=1$ 인 정수 $c$ 에 대해 $(c-\sigma_c)\theta_m\in\mathbb Z\lbrack G\rbrack$ 이고, 이런 원소들이 $I_m$ 을 아이디얼로 생성한다[^1]. $m=3$, $c=2$ 이면 $\sigma_2^2=\sigma_1$ 이므로

$$
(2-\sigma_2)\theta_3=\big(\tfrac23\sigma_1+\tfrac43\sigma_2\big)-\big(\tfrac13\sigma_2+\tfrac23\sigma_1\big)=\sigma_2
$$

이고, 분모가 사라진다.

## 소 아이디얼의 Gauss 합

$\mathfrak p$ 를 $m$ 과 서로소인 $K$ 의 [소 아이디얼](prime-ideals.md), $q=N\mathfrak p$ 라 하면 $q\equiv1\pmod m$ 이다. 잉여체 $\mathcal O\_K/\mathfrak p\cong\mathbb F\_q$ 위에서 $\chi\_{\mathfrak p}(x)\equiv x^{-(q-1)/m}\pmod{\mathfrak p}$ 인 $m$ 차 지표 $\chi\_{\mathfrak p}$ 를 잡고, $p$ 를 $q$ 의 표수로 두어

$$
g(\mathfrak p)=-\sum_{x\in\mathbb F_q}\chi\_{\mathfrak p}(x)\thinspace\zeta_p^{\mathrm{Tr}(x)}
$$

로 정의한다. 직관 절의 $g$ 는 $m=3$, $q=7$ 인 경우이고 부호와 지표의 방향만 다르다.

# 성질

## Gauss 합의 소인수분해

Stickelberger 관계(Stickelberger relation). $g(\mathfrak p)^m\in K$ 이고

$$
\big(g(\mathfrak p)^m\big)=\mathfrak p^{\thinspace m\theta_m}
$$

이다[^1]. 우변은 $\prod_a(\sigma_a^{-1}\mathfrak p)^{m\lbrace a/m\rbrace}$ 를 뜻한다. $m=3$ 이면 $\mathfrak p^{3\theta_3}=\mathfrak p\cdot(\sigma_2\mathfrak p)^2$ 이고, 직관 절의 $\mathfrak p^{2}\bar{\mathfrak p}$ 와 같은 모양이다.

## 원분체의 소수 위에서의 부치

$p$ 를 홀소수, $\pi=\zeta_p-1$, $\omega$ 를 $\omega(a)\equiv a\pmod{\mathfrak P}$ 인 Teichmüller 지표(Teichmüller character)라 하자. $\mathfrak P$ 는 $\mathbb Q(\mu_{p-1},\mu_p)$ 의 $p$ 위 소 아이디얼이다. $g(\chi)=\sum_{a=1}^{p-1}\chi(a)\zeta_p^{a}$ 로 두면, $0\le k\le p-2$ 에서 Stickelberger 합동(Stickelberger congruence)

$$
g(\omega^{-k})\equiv-\frac{\pi^{k}}{k!}\pmod{\pi^{k+1}}
$$

이 성립하고, 특히 $g(\omega^{-k})$ 는 $\pi$ 로 정확히 $k$ 번 나뉜다.

증명의 요지. $\zeta_p^{a}=(1+\pi)^{a}=\sum_j\binom aj\pi^{j}$ 를 대입하면 $\pi^{j}$ 의 계수는 $\sum_a\omega^{-k}(a)\binom aj$ 이다. $\omega(a)\equiv a$ 이므로 이 합은 $\bmod p$ 에서 $\sum_a a^{-k}\binom aj$ 와 같고, $j\lt k$ 이면 $a$ 의 거듭제곱 합 $\sum_a a^{i-k}$ $(0\le i\le j)$ 로 풀려 $0$ 이 된다. $j=k$ 이면 $(p-1)/k!\equiv-1/k!$ 이 남는다. $q=p^{f}$ 의 유한체로 가면 지수 $k$ 가 $k$ 의 $p$ 진 자릿수의 합으로 바뀐다.

## Stickelberger 정리

Stickelberger 정리(Stickelberger's theorem). $I_m$ 은 $K=\mathbb Q(\mu_m)$ 의 아이디얼 류군(ideal class group) $\mathrm{Cl}(K)$ 를 소멸시킨다. 곧 $\alpha\in I_m$ 과 아이디얼류 $\lbrack\mathfrak a\rbrack$ 에 대해 $\lbrack\mathfrak a\rbrack^{\alpha}=1$ 이다[^1].

증명의 요지. 류군은 $m$ 과 서로소인 1 차 소 아이디얼 $\mathfrak p$ 의 류로 생성된다. $\alpha=(c-\sigma_c)\theta_m$ 이면 Stickelberger 관계로부터 $\mathfrak p^{\alpha}$ 가 $g(\mathfrak p)^{c-\sigma_c}\in K$ 가 생성하는 주 아이디얼임이 유도되므로 그 류가 자명하다.

## L 값과의 관계

$\chi$ 를 도체가 $m$ 인 원시 Dirichlet 지표라 하면

$$
\chi(\theta_m)=\sum_a\Big\lbrace\frac{a}{m}\Big\rbrace\bar\chi(a)=B_{1,\bar\chi}=-L(0,\bar\chi),
\qquad
B_{1,\chi}=\frac1m\sum_{a=1}^{m}\chi(a)\thinspace a
$$

이다. $\chi$ 의 도체 $f$ 가 $m$ 보다 작으면 $m$ 의 소인수 가운데 $f$ 를 나누지 않는 것들의 Euler 인자가 곱해진다. $L(0,\chi)$ 는 [Dirichlet L 함수](dirichlet-l-functions.md)의 값이고, $B_{1,\chi}$ 는 일반화 [Bernoulli 수](bernoulli-numbers.md)(generalized Bernoulli number)다. 자명하지 않은 짝지표 $\chi$ 에서는 $L(0,\chi)=0$ 이다.

## 홀수 성분으로의 제한

$\lbrace a/m\rbrace+\lbrace-a/m\rbrace=1$ 이므로 $(1+\sigma_{-1})\theta_m=\sum_a\sigma_a$ 이다. 그래서 $\theta_m$ 의 짝수 부분은 노름원소 $\sum_a\sigma_a$ 의 배수뿐이고, 소멸 정리는 류군의 홀수 성분에 대해서만 정보를 준다. 짝수 성분은 [Vandiver 추측과 순환체의 짝수 성분](vandiver-conjecture.md)의 대상이다.

## Herbrand 정리

$p$ 를 홀소수, $A$ 를 $\mathbb Q(\mu_p)$ 의 류군의 $p$ 부분, $A\_i$ 를 $\mathrm{Gal}(\mathbb Q(\mu_p)/\mathbb Q)$ 가 $\omega^{i}$ 로 작용하는 성분이라 하자. $k$ 가 짝수이고 $2\le k\le p-3$ 일 때 $\theta_p$ 의 $\omega^{1-k}$ 성분은 $B_{1,\omega^{k-1}}$ 이고, Kummer 합동(Kummer congruence)으로

$$
B_{1,\omega^{k-1}}\equiv\frac{B_k}{k}\pmod p
$$

이다. $p\nmid B_k$ 이면 이 성분이 $p$ 진 단원이므로 $(c-\sigma_c)\theta_p$ 로 분모를 없앤 뒤 소멸 정리를 쓰면 $A\_{1-k}=0$ 이 나온다. 이것이 Herbrand 정리(Herbrand's theorem)다. 역, 곧 $p\mid B_k$ 이면 $A\_{1-k}\neq0$ 이라는 진술은 Ribet 이 증명했다([Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)).

## 지표 공식

$\mathbb Z\lbrack G\rbrack^{-}$ 와 $I_m^{-}$ 를 $\sigma_{-1}$ 이 $-1$ 로 작용하는 부분이라 하자. $m=p^{n}$ 이면

$$
\big\lbrack\thinspace\mathbb Z\lbrack G\rbrack^{-}:I_m^{-}\thinspace\big\rbrack=h^{-}\_m
$$

이다(Iwasawa). $h^{-}=h/h^{+}$ 은 상대류수(relative class number)다. Sinnott 은 이 공식을 일반 $m$ 으로 넓혔고, 그때는 우변에 $2$ 의 거듭제곱 인자가 붙는다[^2]. 짝수 쪽의 대응은 원분 단수(cyclotomic units) $C$ 의 지표 $\lbrack E:C\rbrack=h^{+}$ 이다.

| 쪽 | 대상 | 지표 공식 | L 값 |
|---|---|---|---|
| 홀수 성분 | Stickelberger 아이디얼 | $\lbrack\mathbb Z\lbrack G\rbrack^{-}:I^{-}\rbrack=h^{-}$ | 홀지표의 $L(0,\chi)$ |
| 짝수 성분 | 원분 단수 | $\lbrack E:C\rbrack=h^{+}$ | 짝지표의 $L'(0,\chi)$ |

## 소멸자와 크기

소멸 정리는 $I_m$ 이 류군을 소멸시킨다는 것만 말하므로 $\char35{}\mathrm{Cl}(K)$ 의 크기는 나오지 않는다. 지표 공식은 홀수 성분 전체의 크기를 주지만 성분마다의 크기는 주지 않는다. 각 성분의 크기와 Iwasawa 가군으로서의 구조는 [Iwasawa 주추측](iwasawa-main-conjecture.md)이 정하고, 그 증명의 한 방법이 [Euler 계](euler-systems.md)다.

## 다른 체로의 일반화

- Brumer–Stark 추측(Brumer–Stark conjecture). 총실체 $F$ 위의 아벨 확대 $L/F$ 에서 $\theta_m$ 에 대응하는 원소가 $L$ 의 류군을 소멸시키고, 소멸을 실현하는 원소가 명시적 조건을 만족한다는 진술이다. Dasgupta–Kakde 가 홀소수 부분을 증명했다[^3].
- Gross–Koblitz 공식(Gross–Koblitz formula). Gauss 합을 Morita 의 $p$ 진 감마 함수 값의 곱으로 나타내는 등식이다. Stickelberger 합동은 이 등식의 첫 항이다[^4].
- Rubin–Stark 추측(Rubin–Stark conjecture). $L$ 함수가 $s=0$ 에서 고차로 소실하는 경우의 유사 원소를 예측한다. 이 원소들이 존재하면 Euler 계를 이룬다.

# 활용

## 허수이차체의 류수

$p\gt3$, $p\equiv3\pmod4$ 이고 $\chi=\left(\frac{\cdot}{p}\right)$ 이면 $\chi(\theta_p)=B_{1,\chi}=-h\big(\mathbb Q(\sqrt{-p})\big)$ 이다. $p=7$ 이면 $B_{1,\chi}=(1+2-3+4-5-6)/7=-1$ 이고 류수는 $1$ 이다. 이 값을 다시 정리하면 Dirichlet 의 류수 공식

$$
h\big(\mathbb Q(\sqrt{-p})\big)=\frac{1}{2-\left(\frac2p\right)}\sum_{0\lt a\lt p/2}\left(\frac{a}{p}\right)
$$

이 나온다. $p=23$ 이면 $1$ 부터 $11$ 까지 이차잉여가 일곱, 비잉여가 넷이고 $\left(\frac2{23}\right)=1$ 이므로 $h=3$ 이다.

## 정칙소수 판정

Kummer 판정법(Kummer's criterion)은 $p\nmid B_2B_4\cdots B_{p-3}$ 이면 $p\nmid h\big(\mathbb Q(\mu_p)\big)$ 라는 진술을 포함한다. Herbrand 정리로부터 $p\nmid h^{-}$ 가 나오고, $p\mid h^{+}$ 이면 $p\mid h^{-}$ 라는 반영 정리(reflection theorem)로 $p\nmid h^{+}$ 가 나온다.

## Jacobi 합과 Fermat 곡선

Gauss 합의 분해는 Jacobi 합 $J(\chi,\psi)=g(\chi)g(\psi)/g(\chi\psi)$ 의 분해를 준다. Jacobi 합은 [유한체](finite-fields.md) 위의 Fermat 곡선(Fermat curve) $x^{n}+y^{n}=1$ 의 점 개수 공식에 나타나고, Weil 은 이 곡선에서 그 절댓값이 $\sqrt q$ 임을 먼저 확인했고, 일반 다양체의 경우는 [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)이 다룬다. Stickelberger 관계는 이 수의 소 아이디얼별 지수를 주므로 곡선의 [Newton 다각형](newton-polygon.md)이 계산된다.

[^1]: L. Washington, *Introduction to Cyclotomic Fields* (2판, Springer 1997) 6 장과 K. Ireland, M. Rosen, *A Classical Introduction to Modern Number Theory* (2판) 14 장. 원논문은 L. Stickelberger, *Über eine Verallgemeinerung der Kreistheilung*, Math. Ann. **37** (1890).
[^2]: K. Iwasawa, *A class number formula for cyclotomic fields*, Ann. of Math. **76** (1962). W. Sinnott, *On the Stickelberger ideal and the circular units of a cyclotomic field*, Ann. of Math. **108** (1978).
[^3]: S. Dasgupta, M. Kakde, *On the Brumer–Stark conjecture*, Ann. of Math. **197** (2023).
[^4]: B. Gross, N. Koblitz, *Gauss sums and the p-adic Γ-function*, Ann. of Math. **109** (1979).

# 연관 문서

## 선수지식

- [Gauss 합](gauss-sums.md)
- [Bernoulli 수](bernoulli-numbers.md)

## 더 알아보기

- [Iwasawa 주추측](iwasawa-main-conjecture.md)
- [Herbrand–Ribet 정리와 Eisenstein 합동](herbrand-ribet.md)

#number_theory #algebra #field_theory #theorem
