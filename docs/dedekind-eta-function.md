# Dedekind eta 함수

# 개요

**Dedekind eta 함수(Dedekind eta function)** 는 무한곱 $(1-q)(1-q^2)(1-q^3)\cdots$ 에 $q^{1/24}$ 를 곱해 상반평면 위의 함수로 만든 것이다. 이 곱은 [분할수](partitions.md) 생성함수의 역수이고, $p(n)$ 이 얼마나 빨리 자라는지를 알려면 $q$ 가 $1$ 에 가까울 때 이 곱의 크기를 알아야 한다. $q=0.94$ 이면 곱의 인자가 $1$ 에서 거의 떨어지지 않아 백만분의 일 정밀도에 인자 200 개가 넘게 든다.

eta 함수는 $\tau$ 를 $-1/\tau$ 로 바꿀 때 간단한 인자만 곱해진다. 이 규칙으로 $q$ 가 $1$ 에 가까운 곳의 값을 $q$ 가 $0$ 에 가까운 곳의 값으로 바꾸면 곱의 첫 인자만으로 크기가 나온다.

# 직관

$q=e^{-2\pi t}$ 로 두고 $t$ 가 작을 때 다음 곱의 값을 구하려고 한다.

$$
P(q)=\prod_{k\ge1}(1-q^k)
$$

$t=1/10$ 이면 $q=0.5335$ 이다. 인자 $1-q^k$ 가 $1$ 과 백만분의 일 이내로 같아지려면 $q^k\lt 10^{-6}$ 이어야 하고, $k=22$ 부터 그렇다. 인자 21 개를 곱하면 $P(0.5335)=0.23680$ 이 나온다.

$t=1/100$ 이면 $q=0.9391$ 이고 같은 정밀도에 인자 219 개가 든다. $t$ 를 줄일수록 $q^k$ 가 작아지는 속도가 느려져 곱해야 할 인자 수가 $t$ 에 반비례해 늘어난다.

곱이 느리게 끝나는 이유는 $q$ 가 $1$ 에 가깝다는 데 있다. 그래서 $q$ 가 $0$ 에 가까운 다른 점의 값으로 $P$ 를 적는다. $q=e^{2\pi i\tau}$ 로 쓰면 $t=1/10$ 은 $\tau=i/10$ 이고, $\tau\mapsto-1/\tau$ 는 이 점을 $\tau=10i$ 로 보낸다. 그 점에서는 $q=e^{-20\pi}\approx 5\times10^{-28}$ 이라 곱의 인자가 전부 $1$ 이다.

두 점의 값을 잇는 식은 $P$ 에 $q^{1/24}$ 를 곱한 함수 $\eta(\tau)=q^{1/24}P(q)$ 에서 성립한다.

$$
\eta(-1/\tau)=\sqrt{-i\tau}\thinspace\eta(\tau)
$$

$\tau=i/10$ 을 넣으면 $\sqrt{-i\tau}=\sqrt{1/10}$ 이므로 $\eta(i/10)=\sqrt{10}\thinspace\eta(10i)$ 이다. $\eta(10i)=e^{-2\pi\cdot 10/24}=0.072949$ 이고, $\eta(i/10)=\sqrt{10}\cdot 0.072949=0.23069$ 다. 이것을 $q^{1/24}=e^{-2\pi/240}=0.97416$ 으로 나누면 $P(0.5335)=0.23680$ 이 인자 하나로 나온다. 같은 계산이 모든 $t$ 에서 다음을 준다.

$$
P(e^{-2\pi t})=t^{-1/2}\thinspace e^{-\pi/(12t)}\thinspace e^{\pi t/12}\prod_{k\ge1}\bigl(1-e^{-2\pi k/t}\bigr)
$$

$t=1/100$ 에서 오른쪽 곱은 $1$ 이고 앞의 세 인자가 $4.2789\times10^{-11}$ 을 준다.

# 정의

## eta 함수

상반평면 $\mathbb H=\lbrace\tau:\mathrm{Im}\thinspace\tau\gt 0\rbrace$ 의 $\tau$ 에 대해 $q=e^{2\pi i\tau}$, $q^{1/24}=e^{2\pi i\tau/24}$ 로 둔다. **Dedekind eta 함수** 는 다음 함수다.

$$
\eta(\tau)=q^{1/24}\prod_{n\ge1}(1-q^n)
$$

$\lvert q\rvert\lt 1$ 이라 $\sum\lvert q\rvert^n$ 이 수렴하므로 곱은 $\mathbb H$ 위에서 국소 균등하게 수렴하고, 인자가 모두 $0$ 이 아니므로 $\eta$ 는 $\mathbb H$ 에서 영점이 없는 [정칙함수](holomorphic-functions.md)다. 직관 절의 $\tau=i/10$ 에서 $\eta(i/10)=0.23069$ 다.

## eta 몫

양의 정수 $N$ 의 약수 $\delta$ 마다 정수 $r_\delta$ 를 정해 만든 다음 곱을 **eta 몫(eta quotient)** 이라 한다.

$$
f(\tau)=\prod_{\delta\mid N}\eta(\delta\tau)^{r_\delta}
$$

$r_\delta$ 가 모두 $0$ 이상이면 eta 곱(eta product)이라고도 한다. $\eta(\tau)^2\eta(11\tau)^2$ 은 $N=11$, $r_1=r_{11}=2$ 인 eta 곱이다.

# 성질

## 두 변환식

$\eta$ 는 [모듈러 군](modular-group.md)의 두 생성원 $T:\tau\mapsto\tau+1$, $S:\tau\mapsto-1/\tau$ 에 대해 다음과 같이 변한다. 제곱근은 $\mathbb H$ 에서 양의 실수 위에서 양수인 분지를 쓴다.

$$
\eta(\tau+1)=e^{\pi i/12}\thinspace\eta(\tau),\qquad
\eta(-1/\tau)=\sqrt{-i\tau}\thinspace\eta(\tau)
$$

첫째 식은 정의에서 바로 나온다. $\tau+1$ 에서 $q$ 는 그대로이고 $q^{1/24}$ 에 $e^{2\pi i/24}$ 가 곱해진다.

둘째 식의 증명은 Euler 의 오각수 정리(pentagonal number theorem)에서 시작한다. 그 정리의 전개 $\prod(1-q^n)=\sum_{j\in\mathbb Z}(-1)^jq^{j(3j-1)/2}$ 에 $q^{1/24}$ 를 곱하면 $\eta$ 가 지표 하나를 단 theta 급수로 적힌다.

$$
\eta(\tau)=\sum_{n\ge1}\chi_{12}(n)\thinspace q^{n^2/24}
$$

$\chi_{12}(n)$ 은 $n\equiv\pm1\pmod{12}$ 이면 $1$, $n\equiv\pm5\pmod{12}$ 이면 $-1$, 그 밖에는 $0$ 이다. $n=1,5,7,11,13$ 의 항이 $q^{1/24}(1-q-q^2+q^5+q^7)$ 이다. 이 급수에 [Poisson 합 공식](poisson-summation.md)을 쓰면 $\chi_{12}$ 의 [Gauss 합](gauss-sums.md)이 $\sqrt{12}$ 라는 것에서 인자 $\sqrt{-i\tau}$ 가 나온다.

## 일반 변환식과 Dedekind 합

$\mathrm{SL}\_2(\mathbb Z)$ 의 원소 $\gamma$ 의 성분을 다음과 같이 쓴다.

$$
\gamma=\begin{pmatrix}a&b\cr c&d\end{pmatrix},\qquad \gamma\tau=\frac{a\tau+b}{c\tau+d}
$$

$c\gt 0$ 이면 다음이 성립한다.

$$
\eta(\gamma\tau)=\varepsilon(a,b,c,d)\sqrt{-i(c\tau+d)}\thinspace\eta(\tau),\qquad
\varepsilon=\exp\Bigl(\pi i\Bigl(\frac{a+d}{12c}-s(d,c)\Bigr)\Bigr)
$$

$s(d,c)$ 는 [Dedekind 합](dedekind-sums.md)이다. $((x))$ 를 $x$ 가 정수이면 $0$, 아니면 $x-\lfloor x\rfloor-\frac12$ 로 두고 다음으로 정한다.

$$
s(d,c)=\sum_{k=1}^{c-1}\Bigl(\Bigl(\frac kc\Bigr)\Bigr)\Bigl(\Bigl(\frac{dk}c\Bigr)\Bigr)
$$

$S$ 는 $a=d=0$, $c=1$ 이고 $s(0,1)$ 은 빈 합이라 $\varepsilon=1$ 이므로 앞 절의 둘째 식이 된다. $\varepsilon$ 은 언제나 24 차 단위근이다. 이 단위근의 규칙을 곱셈자 체계(multiplier system)라 하고, $\eta$ 는 이 곱셈자를 단 무게 $1/2$ 의 [모듈러 형식](modular-forms.md)이다.

## 판별식 형식

$\eta^{24}$ 은 판별식 형식(discriminant modular form) $\Delta$ 와 같다.

$$
\eta(\tau)^{24}=q\prod_{n\ge1}(1-q^n)^{24}=\Delta(\tau)
$$

두 변환식을 24 제곱하면 $e^{2\pi i}=1$ 과 $(\sqrt{-i\tau})^{24}=(-i\tau)^{12}=\tau^{12}$ 가 나오므로 $\Delta(\tau+1)=\Delta(\tau)$, $\Delta(-1/\tau)=\tau^{12}\Delta(\tau)$ 다. 전개가 $q$ 로 시작하므로 $\Delta$ 는 무게 12 의 첨점형식이다. $\eta$ 가 $\mathbb H$ 에서 영점이 없으므로 $\Delta$ 도 영점이 없다.

## 로그 미분과 E₂

정의의 곱에 로그를 취해 미분하면 다음이 나온다.

$$
\frac1{2\pi i}\frac{\eta'(\tau)}{\eta(\tau)}=\frac1{24}-\sum_{n\ge1}\frac{nq^n}{1-q^n}=\frac1{24}E_2(\tau)
$$

$E_2=1-24\sum_{n\ge1}\sigma_1(n)q^n$ 은 무게 2 의 [Eisenstein 급수](eisenstein-series.md)다. $S$ 변환식의 로그를 취해 $\tau$ 로 미분하면 다음이 나온다.

$$
E_2(-1/\tau)=\tau^2E_2(\tau)+\frac{12\tau}{2\pi i}
$$

보정항 $12\tau/(2\pi i)$ 는 $\log\sqrt{-i\tau}$ 의 도함수 $1/(2\tau)$ 에서 온다. 이 보정항 때문에 $E_2$ 는 모듈러 형식이 아니고 준모듈러 형식(quasimodular form)이다.

## eta 몫이 모듈러 형식이 되는 조건

eta 몫 $f=\prod_{\delta\mid N}\eta(\delta\tau)^{r_\delta}$ 의 무게는 $k=\frac12\sum r_\delta$ 다. $k$ 가 정수이고 다음 두 합동이 성립하면 $f$ 는 $\Gamma_0(N)$ 에 대해 무게 $k$ 의 변환 규칙을 만족한다. 이 판정을 Gordon–Hughes–Newman 정리(Gordon–Hughes–Newman theorem)라 한다.

$$
\sum_{\delta\mid N}\delta\thinspace r_\delta\equiv0\pmod{24},\qquad
\sum_{\delta\mid N}\frac N\delta\thinspace r_\delta\equiv0\pmod{24}
$$

지표는 $(-1)^k\prod\delta^{r_\delta}$ 로 정해지는 이차 지표이고, 이 곱이 제곱수이면 지표가 자명하다. $\eta(\tau)^2\eta(11\tau)^2$ 은 $k=2$, $1\cdot2+11\cdot2=24$, $11\cdot2+1\cdot2=24$, $1^2\cdot11^2=121$ 이므로 $\Gamma_0(11)$ 의 무게 2 형식이고, 전개가 $q$ 로 시작하므로 첨점형식이다. 첨점에서의 위수는 Ligozat 공식(Ligozat's formula)으로 따로 계산한다.

# 활용

- [분할수](partitions.md)의 점근식. 생성함수가 $q^{1/24}/\eta(\tau)$ 이므로 직관 절의 식이 $q\to1$ 에서의 크기 $\sqrt t\thinspace e^{\pi/(12t)}$ 를 주고, [원법](circle-method.md)이 이것으로 $p(n)\sim\frac1{4n\sqrt3}e^{\pi\sqrt{2n/3}}$ 을 얻는다. Rademacher 급수의 계수에는 일반 변환식의 Dedekind 합이 들어간다.
- 분할수의 합동. Ramanujan 의 $\sum p(5n+4)q^n=5\prod(1-q^{5n})^5/(1-q^n)^6$ 의 우변은 eta 몫이고, 법 $5,7,11$ 합동의 증명이 eta 몫의 모듈러성을 쓴다.
- 판별식 형식과 $\tau(n)$. $\Delta=\eta^{24}$ 의 곱 표현에서 [모듈러 형식](modular-forms.md)의 Ramanujan $\tau$ 함수를 계산하고, Ramanujan 의 미분 관계식은 $E_2$ 의 변환식을 써서 증명된다.
- 낮은 레벨의 첨점형식. [theta 급수](theta-series.md)와 함께 eta 몫이 $S_2(\Gamma_0(11))$ 의 생성원 $\eta(\tau)^2\eta(11\tau)^2$ 처럼 첨점형식을 명시적으로 적고, [모듈러 곡선](modular-curves.md) $X_0(11)$ 의 타원곡선과 대응한다.
- [Rogers–Ramanujan 항등식](rogers-ramanujan-identities.md)의 연분수 $R(q)$ 가 $1/R^5-11-R^5=\eta(\tau)^6/\eta(5\tau)^6$ 을 만족한다.
- [정점작용소대수](vertex-operator-algebras.md)의 지표. 격자 정점작용소대수의 지표가 $\Theta_L/\eta^n$ 이고, $1/\eta$ 의 $q^{-1/24}$ 가 중심전하 보정 $-c/24$ 다. [Jacobi 형식](jacobi-forms.md)의 생성원 $\phi_{-2,1}=\theta_1^2/\eta^6$ 과 [괴물 달빛 추측](monstrous-moonshine.md)의 주 모듈러 함수(Hauptmodul)도 eta 몫으로 적힌다.

# 연관 문서

## 선수지식

- [모듈러 형식](modular-forms.md)
- [분할수](partitions.md)

## 더 알아보기

- [Dedekind 합](dedekind-sums.md)

#number_theory #complex_analysis #combinatorics
