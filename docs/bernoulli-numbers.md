# Bernoulli 수

# 개요

**Bernoulli 수(Bernoulli number)** $B_j$ 는 거듭제곱의 합을 $n$ 의 다항식으로 쓸 때 계수로 나타나는 유리수열이다[^1]. $0^2+1^2+\cdots+(n-1)^2=\tfrac13n^3-\tfrac12n^2+\tfrac16n$ 이고, 지수 $k$ 를 바꿀 때마다 이런 공식을 새로 유도하지 않고 한 번에 쓰는 방법이 문제다. 계수에 나오는 $1,-\tfrac12,\tfrac16$ 이 $B_0,B_1,B_2$ 이고, 이 수열 하나로 모든 $k$ 의 공식이 다음과 같이 적힌다.

$$
\sum_{a=0}^{n-1}a^{k}=\frac1{k+1}\sum_{j=0}^{k}\binom{k+1}{j}B_j\thinspace n^{\thinspace k+1-j}
$$

# 직관

$0+1+\cdots+(n-1)=\tfrac12n^2-\tfrac12n$ 이고 $0^2+1^2+\cdots+(n-1)^2=\tfrac13n^3-\tfrac12n^2+\tfrac16n$ 이다. 손으로는 $(a+1)^{k+1}-a^{k+1}$ 을 $a=0,\dots,n-1$ 에서 더해 하나씩 유도하고, 지수 $k$ 가 바뀔 때마다 계산을 처음부터 다시 한다.

모든 $k$ 를 한꺼번에 다루려고 $k$ 번째 합에 $t^k/k!$ 을 곱해 더한다. $\sum_k a^kt^k/k!=e^{at}$ 이므로

$$
\sum_{k\ge0}\Big(\sum_{a=0}^{n-1}a^k\Big)\frac{t^k}{k!}=\sum_{a=0}^{n-1}e^{at}=\frac{e^{nt}-1}{e^t-1}=\frac{t}{e^t-1}\cdot\frac{e^{nt}-1}{t}
$$

이다. 둘째 인수는 $\sum_{m\ge0}n^{m+1}t^m/(m+1)!$ 로 바로 전개된다. 첫째 인수 $t/(e^t-1)=1-\tfrac12t+\tfrac1{12}t^2-\tfrac1{720}t^4+\cdots$ 를 한 번만 전개해 두면 두 급수를 곱해 모든 $k$ 의 공식이 나온다. 이 전개의 $t^j$ 계수에 $j!$ 을 곱한 $1,-\tfrac12,\tfrac16,0,-\tfrac1{30}$ 이 Bernoulli 수다.

# 정의

## Bernoulli 수와 Bernoulli 다항식

**Bernoulli 수** $B_n$ 과 **Bernoulli 다항식(Bernoulli polynomial)** $B_n(x)$ 는 다음 [멱급수](power-series.md) 전개의 계수로 정의된다.

$$
\frac{t}{e^{t}-1}=\sum_{n\ge0}B_n\frac{t^{n}}{n!},
\qquad
\frac{t\thinspace e^{xt}}{e^{t}-1}=\sum_{n\ge0}B_n(x)\frac{t^{n}}{n!}
$$

$B_n=B_n(0)$ 이다. 직관 절의 전개에서 $B_0=1$, $B_1=-\tfrac12$, $B_2=2!\cdot\tfrac1{12}=\tfrac16$, $B_3=0$, $B_4=4!\cdot(-\tfrac1{720})=-\tfrac1{30}$ 이다. 그 뒤의 값은 다음과 같다.

$$
B_6=\tfrac1{42},\quad B_8=-\tfrac1{30},\quad B_{10}=\tfrac5{66}
$$

$e^{xt}=1+xt+x^2t^2/2+\cdots$ 를 곱하면 $B_1(x)=x-\tfrac12$, $B_2(x)=x^2-x+\tfrac16$ 이다.

## 일반화 Bernoulli 수

도체 $f$ 인 Dirichlet 지표 $\chi$ 의 **일반화 Bernoulli 수(generalized Bernoulli number)** $B_{n,\chi}$ 는 다음 전개의 계수다.

$$
\sum_{a=1}^{f}\chi(a)\frac{t\thinspace e^{at}}{e^{ft}-1}=\sum_{n\ge0}B_{n,\chi}\frac{t^{n}}{n!}
$$

$\chi$ 가 자명하면 $n\ne1$ 에서 원래의 $B_n$ 이다. $t$ 의 계수를 비교하면 $\chi\ne1$ 에서 $B_{1,\chi}=\frac1f\sum_{a=1}^{f}\chi(a)\thinspace a$ 다. 법 $4$ 의 지표 $\chi(1)=1$, $\chi(3)=-1$ 에서는 $B_{1,\chi}=\tfrac14(1-3)=-\tfrac12$ 이다.

## 정칙소수

홀소수 $p$ 가 $\mathbb Q(\mu_p)$ 의 류수를 나누지 않으면 $p$ 를 **정칙소수(regular prime)** 라 하고, 나누면 **비정칙 소수(irregular prime)** 라 한다. $\mu_p$ 는 $1$ 의 $p$ 제곱근 전체다. $3,5,7,\dots,31$ 은 정칙이고 $37$ 은 비정칙이다.

# 성질

## 거듭제곱의 합

직관 절의 두 급수를 곱해 $t^k$ 의 계수를 비교하면 다음이 나온다.

$$
\sum_{a=0}^{n-1}a^{k}=\frac1{k+1}\sum_{j=0}^{k}\binom{k+1}{j}B_j\thinspace n^{\thinspace k+1-j}
$$

$k=2$ 에서 $\tfrac13\big(B_0n^3+3B_1n^2+3B_2n\big)=\tfrac13n^3-\tfrac12n^2+\tfrac16n$ 이다.

## 점화식과 홀수 첨자

$n=1$ 을 넣으면 거듭제곱 합이 $0^k$ 이므로 $n\ge1$ 에서 $\sum_{k=0}^{n}\binom{n+1}{k}B_k=0$ 이다. $n=1$ 에서 $1+2B_1=0$, $n=2$ 에서 $1+3B_1+3B_2=0$ 이다.

$n\ge3$ 이 홀수면 $B_n=0$ 이다.

$$
\frac{t}{e^{t}-1}+\frac t2=\frac t2\coth\frac t2
$$

우변이 짝함수이므로 $B_1t$ 를 뺀 나머지에서 홀수 차 계수가 모두 $0$ 이다.

## zeta 값과 L 값

[Riemann zeta 함수](riemann-zeta.md)의 짝수 정수 값과 음의 정수 값이 Bernoulli 수로 적힌다.

$$
\zeta(2k)=\frac{(-1)^{k+1}B_{2k}(2\pi)^{2k}}{2\thinspace(2k)!},
\qquad
\zeta(1-n)=-\frac{B_n}{n}
$$

$\zeta(2)=\pi^2/6$ 은 $k=1$, $B_2=\tfrac16$ 인 경우다. 두 식은 함수방정식으로 서로 옮겨진다. 홀수 $\zeta(3),\zeta(5),\dots$ 에 대응하는 Bernoulli 수 표현은 없다.

[Dirichlet L 함수](dirichlet-l-functions.md)에서는 $L(1-n,\chi)=-B_{n,\chi}/n$ 이다. 법 $4$ 의 지표에서 $L(0,\chi)=-B_{1,\chi}=\tfrac12$ 다.

## von Staudt–Clausen 정리

von Staudt–Clausen 정리(von Staudt–Clausen theorem)는 다음 진술이다. $n\ge2$ 가 짝수면

$$
B_n+\sum_{(p-1)\mid n}\frac1p\in\mathbb Z
$$

이다. 그러므로 $B_n$ 의 분모는 $\prod_{(p-1)\mid n}p$ 이고 제곱인수가 없다. $n=4$ 에서 $p-1\in\lbrace 1,2,4\rbrace$ 이므로 $p=2,3,5$ 이고 $B_4=-\tfrac1{30}$ 의 분모가 $30$ 이다. $p$ 진 부치로는 다음과 같다.

$$
v_p(B_n)=\begin{cases}-1,&(p-1)\mid n\cr \ \ge0,&\text{그 외}\end{cases}
$$

증명의 요지. $(\mathbb Z/p)^\times$ 가 위수 $p-1$ 인 순환군이므로

$$
\sum_{a=1}^{p-1}a^{n}\equiv\begin{cases}-1\pmod p,&(p-1)\mid n\cr 0\pmod p,&\text{그 외}\end{cases}
$$

이다. 거듭제곱 합 공식에 $n=p$ 를 넣은 식과 이 합동식을 법 $p$ 로 맞추면 $pB_n\equiv-1$ 또는 $0$ 이 나온다.

## Kummer 합동

Kummer 합동(Kummer congruence)은 다음 진술이다. $(p-1)\nmid m$ 이고 $m\equiv n\pmod{(p-1)p^{k-1}}$ 이면

$$
\big(1-p^{m-1}\big)\frac{B_m}{m}\equiv\big(1-p^{n-1}\big)\frac{B_n}{n}\pmod{p^{k}}
$$

이다. 인자 $(1-p^{m-1})$ 은 $\zeta$ 의 Euler 곱에서 $p$ 인자를 뺀 것이다. $k=1$ 이면 이 인자가 법 $p$ 로 $1$ 이라 $B_m/m\equiv B_n/n\pmod p$ 가 된다.

법 $p-1$ 의 한 잉여류에 드는 양의 정수 전체는 $\mathbb Z_p$ 에서 조밀하므로, 이 합동에서 그 잉여류 위의 함수

$$
n\ \longmapsto\ \big(1-p^{n-1}\big)\frac{B_n}{n}
$$

가 $p$ 진 [균등연속](uniform-continuity.md)이고 $\mathbb Z_p$ 전체로 유일하게 연장된다. $n\equiv i\pmod{p-1}$ 에서 $L_p(1-n,\omega^i)=-(1-p^{n-1})B_n/n$ 이 되는 $p$ 진 L 함수가 이 연장이다. $\omega$ 는 Teichmüller 지표(Teichmüller character)다.

## Kummer 의 기준

Kummer 의 기준(Kummer's criterion)은 다음 진술이다. 홀소수 $p$ 가 정칙일 필요충분조건은

$$
p\nmid B_2\thinspace B_4\cdots B_{p-3}\ \text{의 분자}
$$

이다. $37$ 은 $B_{32}$ 의 분자를 나누므로 비정칙이다. $60$ 이하의 비정칙 소수는 $37,59$ 이고 다음은 $67,101,103,\dots$ 이다.

비정칙 소수의 밀도는 $1-e^{-1/2}\approx39.3\char37{}$ 로 추정되며 수치와 맞는다. 정칙소수가 무한히 많은지는 알려져 있지 않고[^2], 비정칙 소수가 무한히 많다는 것은 Jensen 이 증명했다.

Kummer 는 류수 공식으로 이 기준을 증명했다. 류군을 고유공간으로 나눈 세분은 Herbrand–Ribet 정리(Herbrand–Ribet theorem)다. $p\nmid B_k$ 에서 $\omega^{1-k}$ 고유공간이 $0$ 임은 Stickelberger 정리(Stickelberger's theorem)에서 나오고(Herbrand), 반대 방향은 Ribet 이 증명했다.

## 점근 크기

$$
|B_{2n}|=\frac{2\thinspace(2n)!}{(2\pi)^{2n}}\zeta(2n)\ \sim\ 4\sqrt{\pi n}\left(\frac{n}{\pi e}\right)^{2n}
$$

계승보다 빠르게 자라므로 $B_n$ 을 유리수로 직접 계산하면 분자의 자릿수가 빠르게 커진다. 큰 $n$ 의 계산은 von Staudt–Clausen 정리로 분모를 알아낸 뒤 여러 소수를 법으로 분자를 구해 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 복원한다.

# 활용

## Kummer 의 Fermat 정리

$p$ 가 정칙이면 $x^{p}+y^{p}=z^{p}$ 에 $xyz\ne0$ 인 정수해가 없다. 증명은 $\mathbb Q(\mu_p)$ 에서 좌변을 인수분해한 뒤 유일분해가 깨지는 정도를 류군으로 재고, $p\nmid h$ 를 써서 각 인자를 주 아이디얼로 만든다. Kummer 의 기준이 $p\nmid h$ 를 $B_k$ 의 법 $p$ 계산으로 바꾼다.

## p 진 L 함수와 Iwasawa 이론

Kummer 합동에서 [Kubota–Leopoldt p 진 zeta 함수](kubota-leopoldt-zeta.md)와 [p 진 L 함수](p-adic-l-function.md) $L_p(s,\chi)$ 가 나온다. 그 보간값과 [Stickelberger 원소](stickelberger.md)의 계수가 $B_{n,\chi}$ 로 적힌다. 법 $4$ 의 지표의 $L(0,\chi)=-B_{1,\chi}$ 처럼 $L(0,\chi)$ 가 Stickelberger 원소의 지표 성분이다. [Iwasawa 주추측](iwasawa-main-conjecture.md)은 $L_p$ 를 [Iwasawa 대수](iwasawa-algebra.md)의 원소로 본 것이 류군 탑의 특성 아이디얼을 생성한다는 진술이고, 그 증명에서 Herbrand–Ribet 정리가 유도된다.

## Euler–Maclaurin 공식

$$
\sum_{a=M}^{N}f(a)=\int_M^{N}f+\frac{f(M)+f(N)}2+\sum_{k=1}^{K}\frac{B_{2k}}{(2k)!}\Big(f^{(2k-1)}(N)-f^{(2k-1)}(M)\Big)+R_K
$$

합과 적분의 차이를 Bernoulli 수로 전개한다. $\zeta(s)$ 와 $\Gamma(s)$ 의 고정밀 계산과 Stirling 급수(Stirling series)가 이 전개를 사용한다. $\vert B_{2k}\vert$ 가 계승보다 빠르게 커지므로 급수는 점근급수이고 $K$ 를 가장 작은 항에서 끊는다. 자세한 것은 [Euler–Maclaurin 공식](euler-maclaurin.md)에 있다.

## 위상수학

$B_n$ 은 Todd 류(Todd class)의 계수로 Hirzebruch–Riemann–Roch 공식(Hirzebruch–Riemann–Roch formula)에 들어간다. 구면의 안정 [호모토피군](homotopy-groups.md)에서 Adams 의 $\mathrm{im}\thinspace J$ 부분의 위수가 $B_{2k}/4k$ 의 분모로 정해진다. [질량 공식](mass-formula.md)에서도 짝수 유니모듈러 격자의 질량이 Bernoulli 수로 적힌다.

[^1]: 표준 참고는 K. Ireland, M. Rosen, *A Classical Introduction to Modern Number Theory* (2판) 15 장과 L. Washington, *Introduction to Cyclotomic Fields* (2판) 5 장. 비정칙 소수의 밀도 추정은 C. L. Siegel 의 발상이며, 비정칙 소수의 무한성은 K. L. Jensen (1915).
[^2]: L. Washington, *Introduction to Cyclotomic Fields* (2판, 1997) 5 장. 정칙소수가 무한히 많은지 알려져 있지 않다고 적혀 있다.

# 연관 문서

## 선수지식

- [멱급수](power-series.md)
- [Riemann zeta 함수](riemann-zeta.md)

## 더 알아보기

- [Kubota–Leopoldt p 진 zeta 함수](kubota-leopoldt-zeta.md)
- [Stickelberger 원소](stickelberger.md)
- [Euler–Maclaurin 공식](euler-maclaurin.md)
- [질량 공식](mass-formula.md)

#number_theory #analysis #computation
