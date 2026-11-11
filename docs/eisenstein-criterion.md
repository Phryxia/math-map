# Eisenstein 판정법

# 개요

**Eisenstein 판정법(Eisenstein's criterion)** 은 정수 계수 다항식이 유리수 계수 다항식의 곱으로 쪼개지지 않음을 계수를 소수 하나로 나누어 보는 것만으로 판정하는 방법이다. $x^4+10x+5$ 는 정수근이 없지만, 이차식 두 개의 곱으로 쪼개지는지는 근을 찾는 것으로 알 수 없다. 이 판정법은 최고차가 아닌 계수가 모두 $5$ 의 배수이고 상수항이 $25$ 의 배수가 아니라는 두 가지만 보고 이 다항식이 쪼개지지 않는다고 결론짓는다.

# 직관

$f(x)=x^4+10x+5$ 를 정수 계수 다항식의 곱으로 쪼개려고 한다. [원시다항식의 Gauss 보조정리](gauss-lemma-polynomials.md)에 따라 정수 계수로 쪼개지지 않으면 유리수 계수로도 쪼개지지 않으므로, 정수 계수만 보면 된다.

일차 인수가 있으면 정수근이 있고, 그 근은 상수항 $5$ 의 약수 $\pm1,\pm5$ 가운데 하나다. $f(1)=16$, $f(-1)=-4$, $f(5)=680$, $f(-5)=580$ 이므로 일차 인수는 없다.

남은 경우는 이차식 두 개의 곱이다. $f$ 를 다음 꼴로 놓는다.

$$
x^4+10x+5=(x^2+ax+b)(x^2+cx+d)
$$

전개해 계수를 맞추면 다음이 나온다.

$$
a+c=0,\qquad ac+b+d=0,\qquad ad+bc=10,\qquad bd=5
$$

$c=-a$ 이므로 $b+d=a^2$ 이고, $bd=5$ 에서 $b+d$ 는 $6$ 이나 $-6$ 이다. $a^2=\pm6$ 인 정수 $a$ 가 없으므로 이 경우도 없다. 계산은 끝났지만 상수항의 약수마다 경우를 나누었고, 차수가 크면 나눌 경우가 그만큼 늘어난다.

$bd=5$ 에서 $b$ 와 $d$ 가운데 하나만 $5$ 의 배수였다. 이 관찰을 계수 전체로 넓힌다. $f$ 의 계수를 $5$ 로 나눈 나머지만 남기면 $10$ 과 $5$ 가 $0$ 이 되어 $x^4$ 만 남는다. $f=gh$ 이면 나머지끼리도 곱이 맞으므로 $g$ 와 $h$ 의 나머지를 곱하면 $x^4$ 이다.

나머지로 된 다항식에서도 인수분해는 하나뿐이므로, $g$ 와 $h$ 의 나머지는 각각 $x^r$ 과 $x^{4-r}$ 이다($r\ge1$). 그러면 $g$ 와 $h$ 의 상수항 $b$ 와 $d$ 가 둘 다 $5$ 의 배수가 되어 $bd$ 는 $25$ 의 배수다. $bd=5$ 이므로 모순이고, $f$ 는 쪼개지지 않는다. 이 논증은 차수를 보지 않고 계수 셋에 대한 조건만 썼다.

# 정의

## 원시다항식

계수 전체의 최대공약수가 $1$ 인 정수 계수 다항식을 원시다항식(primitive polynomial)이라 한다. $3x^2+6$ 은 계수의 최대공약수가 $3$ 이라 원시다항식이 아니고, $x^4+10x+5$ 는 원시다항식이다.

Gauss 보조정리로부터 정수 계수 다항식이 [다항식환](polynomial-rings.md) $\mathbb Q[x]$ 에서 차수 $r$ 과 $s$ 인 두 다항식의 곱이면, $\mathbb Z[x]$ 에서도 차수 $r$ 과 $s$ 인 두 다항식의 곱이라는 것이 따라 나온다[^1]. 직관 절이 정수 계수만 본 근거가 이것이다.

## Eisenstein 다항식

$f\in\mathbb Z[x]$ 를 다음과 같이 쓴다.

$$
f(x)=a_nx^n+a_{n-1}x^{n-1}+\dots+a_1x+a_0,\qquad n\ge1
$$

[소수](primes.md) $p$ 가 다음 세 조건을 만족하면 $f$ 를 **p 에서의 Eisenstein 다항식(Eisenstein polynomial at p)** 이라 한다.

1. $p\nmid a_n$
2. $i=0,1,\dots,n-1$ 에 대해 $p\mid a_i$
3. $p^2\nmid a_0$

직관 절의 $x^4+10x+5$ 는 $p=5$ 에서 Eisenstein 다항식이다. $5\nmid1$ 이고, $5$ 는 $0,0,10,5$ 를 나누고, $25\nmid5$ 다. $x^n-2$ 는 모든 $n\ge1$ 에 대해 $p=2$ 에서 Eisenstein 다항식이다.

## 판정법의 진술

Eisenstein 판정법은 다음 진술이다. $f$ 가 어떤 소수 $p$ 에서 Eisenstein 다항식이면 $f$ 는 $\mathbb Q[x]$ 에서 **기약다항식(irreducible polynomial)** 이다. 곧 차수가 $1$ 이상인 두 유리수 계수 다항식의 곱으로 쓰이지 않는다.

$3x^2+6$ 은 $p=2$ 에서 Eisenstein 다항식이므로 $\mathbb Q[x]$ 에서 기약이다. $\mathbb Z[x]$ 에서는 $3\cdot(x^2+2)$ 이고 $3$ 이 단원이 아니므로 기약이 아니다. $\mathbb Z[x]$ 에서 기약이라는 결론은 $f$ 가 원시다항식일 때만 나온다.

# 성질

## 판정법의 증명

$f$ 가 $p$ 에서 Eisenstein 다항식이고 $\mathbb Q[x]$ 에서 차수 $r,s\ge1$ 인 두 다항식의 곱이라고 하자. Gauss 보조정리로 $f=gh$ 인 $g,h\in\mathbb Z[x]$ 가 있고 차수는 $r$ 과 $s$ 다. $g$ 의 최고차 계수와 상수항을 $b_r, b_0$, $h$ 의 것을 $c_s, c_0$ 이라 한다.

계수를 법 $p$ 로 줄이는 사상 $\mathbb Z[x]\to\mathbb F\_p[x]$ 을 막대로 적는다. 조건 1, 2 에서 $\bar f=\bar a_nx^n$ 이고 $\bar a_n\ne0$ 이다. $b_rc_s=a_n$ 이 $p$ 의 배수가 아니므로 $\bar g$ 와 $\bar h$ 의 차수는 $r$ 과 $s$ 그대로다.

[유한체](finite-fields.md) $\mathbb F\_p$ 위의 다항식환은 [유일분해정역](unique-factorization-domains.md)이고 $x$ 는 기약이므로, $\bar g\bar h=\bar a_nx^n$ 에서 $\bar g=\bar b_rx^r$, $\bar h=\bar c_sx^s$ 이다. $r,s\ge1$ 이므로 $\bar b_0=\bar c_0=0$ 이고, $p\mid b_0$, $p\mid c_0$ 에서 $p^2\mid b_0c_0=a_0$ 이다. 이것은 조건 3 에 어긋난다.

## 정역 위의 판정법

증명은 정수의 성질 가운데 $p\mathbb Z$ 가 [소 아이디얼](prime-ideals.md)이라는 것만 썼다. 그래서 다음이 성립한다[^2]. $R$ 가 정역이고 $P$ 가 $R$ 의 소 아이디얼이며, $R[x]$ 의 원소 $f$ 가 다음 꼴이라고 하자.

$$
f(x)=x^n+a_{n-1}x^{n-1}+\dots+a_0,\qquad a_0,\dots,a_{n-1}\in P,\qquad a_0\notin P^2
$$

그러면 $f$ 는 $R[x]$ 에서 기약이다. $R=k[t]$, $P=(t)$ 로 두면 $x^n-t$ 가 $k[t][x]$ 에서 기약이고, $R$ 가 유일분해정역이면 Gauss 보조정리로 분수체 $k(t)$ 위에서도 기약이다.

## 변수 이동

정수 $c$ 에 대해 $f(x)\mapsto f(x+c)$ 는 $\mathbb Q[x]$ 의 환 자기동형이고 차수를 보존한다. 그래서 $f(x)$ 가 기약인 것과 $f(x+c)$ 가 기약인 것은 동치다. $f$ 자신이 Eisenstein 다항식이 아니어도 $f(x+c)$ 가 그러면 $f$ 는 기약이다.

$x^2+1$ 은 상수항이 $1$ 이라 어느 소수에서도 Eisenstein 다항식이 아니다. $x$ 를 $x+1$ 로 바꾸면 다음이 나오고, 이것은 $p=2$ 에서 Eisenstein 다항식이므로 $x^2+1$ 은 기약이다.

$$
(x+1)^2+1=x^2+2x+2
$$

## 원분다항식

소수 $p$ 에 대해 **원분다항식(cyclotomic polynomial)** $\Phi_p$ 는 다음 다항식이다.

$$
\Phi_p(x)=\frac{x^p-1}{x-1}=x^{p-1}+x^{p-2}+\dots+x+1
$$

$x$ 를 $x+1$ 로 바꾸고 이항정리로 전개하면 다음이 나온다.

$$
\Phi_p(x+1)=\frac{(x+1)^p-1}{x}=\sum_{k=1}^{p}\binom{p}{k}x^{k-1}
$$

$1\le k\le p-1$ 에서 $\binom pk$ 는 $p$ 의 배수이고, 최고차 계수는 $\binom pp=1$, 상수항은 $\binom p1=p$ 다. 그래서 $\Phi_p(x+1)$ 은 $p$ 에서 Eisenstein 다항식이고 $\Phi_p$ 는 기약이다. $p=5$ 이면 다음과 같다.

$$
\Phi_5(x+1)=x^4+5x^3+10x^2+10x+5
$$

## 법 p 로 줄이는 판정

Eisenstein 판정법은 $\bar f$ 가 $x^n$ 의 상수배로 완전히 무너지는 경우를 다룬다. 반대 끝은 $\bar f$ 가 $\mathbb F\_p[x]$ 에서 기약인 경우다. $p\nmid a_n$ 이고 $\bar f$ 가 $\mathbb F\_p[x]$ 에서 기약이면 $f$ 는 $\mathbb Q[x]$ 에서 기약이다. $f=gh$ 이면 $\bar f=\bar g\bar h$ 이고 차수가 보존되기 때문이다.

$x^3-x-1$ 은 어느 소수에서도 Eisenstein 다항식이 아니다. 상수항 $-1$ 을 나누는 소수가 없기 때문이다. 법 $2$ 로 줄이면 $x^3+x+1$ 이고, $\mathbb F\_2$ 의 두 원소 $0,1$ 에서 값이 $1$ 이라 근이 없다. 삼차식이 근이 없으면 기약이므로 $x^3-x-1$ 은 $\mathbb Q[x]$ 에서 기약이다.

## Newton 다각형과의 관계

$p$ 에서의 Eisenstein 다항식은 [Newton 다각형](newton-polygon.md)이 점 $(0,1)$ 과 $(n,0)$ 을 잇는 선분 하나인 다항식이다. 그 선분 위에 정수 좌표 점이 끝점 둘뿐이므로 [p 진수](p-adic-numbers.md)체 $\mathbb Q\_p$ 위에서도 기약이고, 근 $\alpha$ 의 $p$ 진 부치는 $1/n$ 이다.

# 활용

- [원분체](cyclotomic-fields.md). $\Phi_p$ 가 기약이므로 원시 $p$ 제곱근 $\zeta_p$ 의 [최소다항식](minimal-polynomial.md)이 $\Phi_p$ 이고 $\lbrack\mathbb Q(\zeta_p):\mathbb Q\rbrack=p-1$ 이다.
- [체의 확대](field-extensions.md). $x^n-2$ 가 기약이므로 $\lbrack\mathbb Q(\sqrt[n]2):\mathbb Q\rbrack=n$ 이다. 따라서 $\mathbb Q$ 에는 모든 차수 $n$ 의 확대가 존재한다.
- 국소체의 완전분기 확대(totally ramified extension). $\mathbb Q\_p$ 위의 Eisenstein 다항식의 근 하나를 붙인 확대는 분기지수가 차수와 같은 확대이고, 역으로 완전분기 확대는 균등화원(uniformizer)의 최소다항식으로 Eisenstein 다항식을 가진다[^3]. [국소 유체론](local-class-field-theory.md)의 Lubin–Tate 확대가 이 꼴로 구성된다.

[^1]: S. Lang, *Algebra*, 3rd ed., Springer GTM 211, Chapter IV §2. Gauss 보조정리와 그 따름정리.
[^2]: D. S. Dummit, R. M. Foote, *Abstract Algebra*, 3rd ed., Wiley, 2004, §9.4 Proposition 13 과 Corollary 14.
[^3]: J.-P. Serre, *Local Fields*, Springer GTM 67, Chapter I §6. 완전분기 확대와 Eisenstein 다항식.

# 연관 문서

## 선수지식

- [원시다항식의 Gauss 보조정리](gauss-lemma-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #number_theory #field_theory
