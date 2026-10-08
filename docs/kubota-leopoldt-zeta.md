# Kubota–Leopoldt p 진 zeta 함수

# 개요

Kubota–Leopoldt $p$ 진 zeta 함수는 Riemann zeta 의 음의 정수 값 $\zeta(1-n)=-B_n/n$ 을 $p$ 진 위치에서 이어 만든 $\mathbb Z_p$ 상의 해석함수다. [Dirichlet 지표](dirichlet-l-functions.md) $\chi$ 를 붙인 꼴 $L_p(s,\chi)$ 가 표준 대상이고, 음의 정수에서의 값이 [일반화 Bernoulli 수](bernoulli-numbers.md)로 주어진다.

이 함수를 [Iwasawa 대수](iwasawa-algebra.md) $\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 의 원소로 다시 쓴 것이 [Iwasawa 주추측](iwasawa-main-conjecture.md)의 해석적 변이다.

# 직관

$\zeta(1-n)=-B_n/n$ 은 유리수이므로 $p$ 진수로 읽을 수 있다. $n$ 을 $p$ 진으로 움직이며 이 값을 잇고 싶다. 바로는 막힌다. von Staudt–Clausen 정리로 $(p-1)\mid n$ 이면 $B_n$ 의 분모가 $p$ 를 담아 $\zeta(1-n)$ 이 $p$ 진 정수가 아니다. 남은 $n$ 에서 값이 어떻게 움직이는지를 $p=5$ 에서 본다. $n=2$ 에서 $-B_2/2=-1/12$ 이고 $n=6$ 에서 $-B_6/6=-1/252$ 인데, 두 수를 $5$ 진으로 견주면 $-1/12\equiv 2$ , $-1/252\equiv 2 \pmod 5$ 다.

같은 $5$ 진 값이 나온 것은 $2$ 와 $6$ 이 $\bmod 4$ 로 같은 데서 온다. 일반적으로 $(p-1)\nmid n$ 이고 $n\equiv m \pmod{(p-1)p^{k-1}}$ 이면 Euler 인자를 뗀 $(1-p^{n-1})B_n/n$ 이 $\bmod p^k$ 로 합동이다([Kummer 합동](bernoulli-numbers.md)). $\bmod (p-1)$ 의 잉여류 하나를 고정하면 그 안의 정수 $n$ 이 $\mathbb Z_p$ 에서 조밀하고 값이 $p$ 진 균등연속으로 움직이므로, 잉여류마다 $\mathbb Z_p$ 위의 함수가 하나씩 유일하게 연장되어 나온다. $p-1$ 개의 잉여류를 Teichmüller 지표의 거듭제곱 $\omega^i$ 로 가리킨 것이 $L_p(s,\omega^i)$ 다.

# 정의

## Teichmüller 지표

$\omega\colon(\mathbb Z/p)^{\ast}\to\mathbb Z_p^{\ast}$ 는 $\omega(a)\equiv a \pmod p$ 이고 $\omega(a)^{p-1}=1$ 인 유일한 사상이다. $\mathbb Z_p^{\ast}$ 가 $\mu_{p-1}\times(1+p\mathbb Z_p)$ 로 쪼개지므로 $a$ 의 $\mu_{p-1}$ 성분을 취하는 것이 $\omega$ 다. 도체가 $p$ 인 지표이고, 거듭제곱 $\omega^i$ 가 $\bmod (p-1)$ 의 잉여류 $i$ 를 가리킨다.

## p 진 L 함수

**정리(Kubota–Leopoldt).** 도체 $f$ 인 Dirichlet 지표 $\chi$ 에 대해, $\chi$ 가 자명하면 $s=1$ 을 뺀 $\mathbb Z_p$ 에서, 자명하지 않으면 $\mathbb Z_p$ 전체에서 $p$ 진 해석적인 함수 $L_p(s,\chi)$ 가 유일하게 있어 모든 정수 $n\ge1$ 에서 다음이 성립한다[^1].

$$
L_p(1-n,\chi)=-\big(1-\chi\omega^{-n}(p)\thinspace p^{n-1}\big)\frac{B_{n,\chi\omega^{-n}}}{n}
$$

여기서 $B_{n,\psi}$ 는 지표 $\psi$ 의 일반화 Bernoulli 수이고, $\chi\omega^{-n}$ 은 두 지표의 곱이다. $\chi$ 가 자명하고 $n=1$ 이면 오른쪽이 정의되지 않는다.

## p 진 zeta 함수

$\chi$ 가 자명한 경우의 $\zeta_p(s)=L_p(s,\mathbf 1)$ 을 **$p$ 진 zeta 함수**라 한다. 보간 공식은 $(p-1)\nmid n$ 인 $n$ 에서 $\zeta_p(1-n)=-(1-p^{n-1})B_n/n$ 이 된다. $(p-1)\mid n$ 인 $n$ 에서는 $\chi\omega^{-n}$ 이 자명해지지 않아 오른쪽이 다른 지표의 값을 가리킨다.

# 성질

## 보간값의 유일성

$\mathbb Z_{\ge1}$ 의 각 잉여류가 $\mathbb Z_p$ 에서 조밀하고 $L_p(\cdot,\chi)$ 가 연속이므로, 보간 공식이 함수를 결정한다. 서로 다른 두 해석함수가 같은 보간값을 가지면 차가 조밀집합에서 $0$ 이고 연속성으로 항등적으로 $0$ 이다. ∎

## Iwasawa 대수 위의 멱급수

**정리(Iwasawa).** $q=p$ ($p$ 가 홀수) 로 두고 $\chi$ 를 도체가 $p$ 의 거듭제곱인 비자명 짝수 지표라 하면, 멱급수 $f_\chi(T)\in\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 가 있어 모든 $s\in\mathbb Z_p$ 에서 $L_p(s,\chi)=f_\chi\big((1+q)^{1-s}-1\big)$ 다[^2].

$(1+q)^{1-s}-1$ 은 $s$ 의 $p$ 진 해석함수이고 $\mathbb Z_p$ 에서 $p\mathbb Z_p$ 로 간다. $\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 의 멱급수가 $p\mathbb Z_p$ 에서 수렴하므로 오른쪽이 정의된다. $\chi$ 가 자명하면 $f$ 의 분모에 $T$ 가 하나 남아 $s=1$ 의 극점이 된다.

## s = 1 의 극점

$\zeta_p(s)$ 는 $s=1$ 에서 단순 극점을 갖고 유수는 $1-1/p$ 다. 복소 zeta 가 $s=1$ 에서 유수 $1$ 의 극점을 갖는 것에 대응하고, 차이인 인자 $1-1/p$ 가 $p$ 에서의 Euler 인자를 뗀 몫이다.

## Leopoldt 의 s = 1 공식

**정리(Leopoldt).** $\chi$ 가 비자명 짝수 지표이고 도체 $f$ 가 $p$ 로 나누어지지 않으면 다음이 성립한다[^3].

$$
L_p(1,\chi)=-\big(1-\chi(p)p^{-1}\big)\frac{\tau(\chi)}{f}\sum_{a=1}^{f-1}\bar\chi(a)\thinspace\log_p(1-\zeta_f^{a})
$$

$\tau(\chi)=\sum_{a=1}^{f}\chi(a)\zeta_f^{a}$ 는 Gauss 합, $\log_p$ 는 $p$ 진 로그, $\zeta_f$ 는 원시 $f$ 제 거듭제곱근이다. $\bar\chi(a)$ 는 $a$ 가 $f$ 와 서로소가 아니면 $0$ 이므로 합에 남는 항은 $\gcd(a,f)=1$ 인 $a$ 의 것뿐이다.

$1-\zeta_f^{a}$ 는 순환체 $\mathbb Q(\zeta_f)$ 의 원분 단수이므로 오른쪽은 단수군의 $\chi$ 성분에서 계산된다. 짝수 지표를 모두 모은 곱이 $p$ 진 류수 공식이고, 그 비소멸이 Leopoldt 추측과 같은 진술이다.

# 활용

- **Iwasawa 주추측의 해석적 변.** [Iwasawa 주추측](iwasawa-main-conjecture.md)은 $f_\chi(T)$ 가 생성하는 아이디얼이 순환체의 아이디얼 류군의 특성 아이디얼과 같다는 진술이다. 위의 멱급수 표현이 그 좌변을 준다.
- **Herbrand–Ribet 정리.** 보간 공식을 $n=k$ 에서 읽으면 $p\mid B_k$ 조건이 $L_p(1-k,\omega^{1-k})$ 의 $p$ 진 값으로 번역되고, 류군의 $\omega^{1-k}$ 성분이 자명하지 않다는 것과 묶인다.
- **Stickelberger 원소.** [Stickelberger](stickelberger.md) 원소의 계수가 일반화 Bernoulli 수이므로 그 $p$ 진 극한이 이 함수의 보간값이 된다. Euler 계 논증이 이 대응을 쓴다.
- **p 진 L 함수의 원형.** 타원곡선의 [$p$ 진 $L$ 함수](p-adic-l-function.md)는 모듈러 기호의 측도로 같은 꼴의 보간 공식을 세운다. 보간할 특수값을 Bernoulli 수에서 모듈러 형식의 주기로 바꾼 것이다.

[^1]: T. Kubota, H. W. Leopoldt, *Eine p-adische Theorie der Zetawerte I*, Journal für die reine und angewandte Mathematik **214/215** (1964), 328–339.
[^2]: K. Iwasawa, *Lectures on p-adic L-functions*, Annals of Mathematics Studies **74**, Princeton University Press, 1972, 3 장.
[^3]: L. C. Washington, *Introduction to Cyclotomic Fields*, 2판, Springer, 1997, 5 장 정리 5.18 과 4 장.

# 연관 문서

## 선수지식

- [p 진수](p-adic-numbers.md)
- [Bernoulli 수](bernoulli-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #algebra
