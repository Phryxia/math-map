# 원분체

# 개요

**원분체(cyclotomic field)** 는 유리수체에 $1$ 의 원시 $n$ 제곱근 $\zeta_n=e^{2\pi i/n}$ 을 붙인 체 $\mathbb Q(\zeta_n)$ 이다. 차수는 $\varphi(n)$ 이고 Galois 군은 $(\mathbb Z/n\mathbb Z)^{\times}$ 다.

소수 $p$ 가 $\mathbb Q(\zeta_n)$ 에서 어떻게 분해되는지는 $p$ 를 $n$ 으로 나눈 나머지만으로 정해진다. 이 분해법칙에서 이차 상호법칙과 등차수열 위의 소수에 대한 Dirichlet 정리가 나오고, Kronecker–Weber 정리에 따라 $\mathbb Q$ 의 아벨 확대는 모두 원분체 안에 들어 있다.

# 직관

$\Phi_5(x)=x^4+x^3+x^2+x+1$ 을 소수 $q$ 를 법으로 인수분해한다. $q=11$ 이면 $\mathbb F_{11}^{\times}$ 이 위수 $10$ 인 순환군이라 위수 $5$ 인 원소 $3,4,5,9$ 가 있고, $\Phi_5\equiv(x-3)(x-4)(x-5)(x-9)$ 다. $q=2$ 이면 일차와 이차 인수가 없어 기약이고, $q=19$ 이면 이차식 둘의 곱이다. $q=5$ 이면 $x^5-1\equiv(x-1)^5$ 이므로 $\Phi_5\equiv(x-1)^4$ 이다.

규칙은 $\Phi_5$ 의 근이 위수 $5$ 인 원소라는 데서 나온다. 위수 $5$ 인 원소는 $5\mid q^f-1$ 인 가장 작은 $f$ 에 대해 $\mathbb F_{q^f}$ 에 처음 나타나므로 인수의 차수가 모두 $f$ 다. $11\equiv1$ 이면 $f=1$, $19\equiv4$ 이면 $f=2$, $2$ 는 $5$ 를 법으로 위수가 $4$ 라서 $f=4$ 다.

[대수적 수체](algebraic-number-fields.md)의 정수환에서 소수 $q$ 의 분해는 최소다항식을 $q$ 를 법으로 인수분해한 모양과 같다. 그래서 $q$ 가 $\mathbb Q(\zeta_5)$ 에서 몇 개의 소 아이디얼로 갈라지는지가 $q\bmod5$ 하나로 정해진다. $q=5$ 만은 한 소 아이디얼의 네제곱이 되어 분기한다.

# 정의

## 원분다항식

$n$ 번째 **원분다항식(cyclotomic polynomial)** 은 $1$ 의 원시 $n$ 제곱근을 모두 근으로 갖는 일계수 다항식이다.

$$
\Phi_n(x)=\prod_{k\in(\mathbb Z/n\mathbb Z)^{\times}}\big(x-\zeta_n^{k}\big),\qquad x^n-1=\prod_{d\mid n}\Phi_d(x)
$$

둘째 식으로 귀납하면 $\Phi_n(x)\in\mathbb Z\lbrack x\rbrack$ 이고 차수는 $\varphi(n)$ 이다.

## 원분체

$\mathbb Q(\zeta_n)$ 을 $n$ 번째 원분체라 한다. $n$ 이 홀수이면 $\mathbb Q(\zeta_n)=\mathbb Q(\zeta_{2n})$ 이므로 $n\not\equiv2\pmod4$ 로 잡는다.

# 성질

## 기약성과 Galois 군

**정리.** $\Phi_n$ 은 $\mathbb Q$ 위에서 기약이다.[^1]

*증명의 요지.* $\zeta$ 의 최소다항식을 $f$ 라 하고 $p\nmid n$ 인 소수 $p$ 를 잡는다. $\zeta^p$ 가 $f$ 의 근이 아니라고 하면 $\zeta$ 가 $g(x^p)$ 의 근인 다른 인수 $g$ 가 있고, 법 $p$ 로 내리면 $\bar g(x^p)=\bar g(x)^p$ 이므로 $\bar f$ 와 $\bar g$ 가 공통근을 가져 $x^n-1$ 이 법 $p$ 에서 중근을 갖는다. $x^n-1$ 은 도함수 $nx^{n-1}$ 과 서로소라 모순이다. 따라서 $\zeta^k$ 가 $\gcd(k,n)=1$ 인 모든 $k$ 에서 $f$ 의 근이다.

그래서 $\lbrack\mathbb Q(\zeta_n):\mathbb Q\rbrack=\varphi(n)$ 이고, $a\bmod n$ 을 $\sigma_a(\zeta_n)=\zeta_n^{a}$ 로 보내는 사상이 [Galois 이론](galois-theory.md)의 동형 $(\mathbb Z/n\mathbb Z)^{\times}\cong\mathrm{Gal}(\mathbb Q(\zeta_n)/\mathbb Q)$ 를 준다.

## 정수환과 판별식

$\mathbb Q(\zeta_n)$ 의 정수환은 $\mathbb Z\lbrack\zeta_n\rbrack$ 이다. 소수 $p$ 에서 $\mathbb Q(\zeta_p)$ 의 판별식은 $(-1)^{(p-1)/2}p^{p-2}$ 이고, $p$ 는 $(p)=(1-\zeta_p)^{p-1}$ 로 완전분기한다.[^1]

## 분해법칙

$n=p^km$, $p\nmid m$ 이라 하고 $f$ 를 $p$ 의 $(\mathbb Z/m\mathbb Z)^{\times}$ 에서의 위수라 하면 $\mathbb Q(\zeta_n)$ 에서

$$
e=\varphi(p^k),\qquad f=\mathrm{ord}\_m(p),\qquad g=\varphi(m)/f
$$

다. $p\nmid n$ 이면 분기하지 않고 Frobenius 원소가 $\sigma_p$ 이며, $p$ 가 완전분해하는 것은 $p\equiv1\pmod n$ 인 것과 동치다.

## 부분체

- $\mathbb Q(\zeta_n+\zeta_n^{-1})$ 는 $\mathbb Q(\zeta_n)$ 의 최대 실부분체이고 $n\ge3$ 에서 차수가 $\varphi(n)/2$ 다.
- 홀수 소수 $p$ 에서 $(\mathbb Z/p\mathbb Z)^{\times}$ 의 지수 $2$ 부분군이 하나뿐이므로 이차 부분체도 하나이고, 그것이 $p^{\ast}=(-1)^{(p-1)/2}p$ 에 대한 $\mathbb Q(\sqrt{p^{\ast}})$ 다. [Gauss 합](gauss-sums.md) $g$ 가 $g^2=p^{\ast}$ 를 만족해 $\sqrt{p^{\ast}}$ 를 $\zeta_p$ 의 다항식으로 준다.

## Kronecker–Weber 정리

**Kronecker–Weber 정리(Kronecker–Weber theorem).** $\mathbb Q$ 의 유한 아벨 확대는 모두 어떤 $\mathbb Q(\zeta_n)$ 에 포함된다.[^2]

$\mathbb Q(\sqrt d)$ 는 판별식을 $D$ 라 할 때 $\mathbb Q(\zeta\_{\vert D\vert})$ 에 포함된다. $\mathbb Q(\sqrt2)\subseteq\mathbb Q(\zeta_8)$ 은 $\zeta_8+\zeta_8^{-1}=\sqrt2$ 에서 보인다.

## 정칙 소수

홀수 소수 $p$ 가 $\mathbb Q(\zeta_p)$ 의 류수를 나누지 않으면 **정칙 소수(regular prime)** 라 한다. Kummer 는 정칙 소수 $p$ 에서 $x^p+y^p=z^p$ 이 $xyz\ne0$ 인 정수해를 갖지 않음을 증명했고, $p$ 가 정칙인 것이 $p$ 가 [Bernoulli 수](bernoulli-numbers.md) $B_2,B_4,\dots,B\_{p-3}$ 의 분자를 하나도 나누지 않는 것과 동치임을 보였다.[^1] 가장 작은 비정칙 소수는 $37$ 이고 $B\_{32}$ 의 분자를 나눈다. 류군의 $p$ 부분을 Galois 군의 지표로 가른 고유공간 가운데 어느 것이 $0$ 이 아닌지는 [Herbrand–Ribet 정리](herbrand-ribet.md)가 Bernoulli 수의 합동으로 정한다.

# 활용

- [이차 상호법칙](quadratic-reciprocity.md): 홀수 소수 $q$ 가 $\mathbb Q(\sqrt{p^{\ast}})$ 에서 분해되는지는 $\left(\frac{p^{\ast}}{q}\right)$ 로도, 분해법칙의 $q\bmod p$ 로도 정해지고, 두 판정이 같다는 것이 상호법칙이다.
- [Chebotarev 밀도 정리](chebotarev.md): $\mathbb Q(\zeta_m)$ 에 적용하면 Frobenius 가 $p\bmod m$ 이므로 등차수열의 소수에 대한 Dirichlet 정리가 된다.
- [유체론](class-field-theory.md): Kronecker–Weber 정리가 $\mathbb Q$ 위의 유체론이고, 원분체가 $\mathbb Q$ 의 광선류체다.
- [Iwasawa 주추측](iwasawa-main-conjecture.md): 원분 $\mathbb Z_p$ 확대 $\mathbb Q(\zeta\_{p^\infty})$ 의 류군의 증가를 $p$ 진 $L$ 함수로 기술한다.
- 정다각형의 작도: 정 $n$ 각형은 $\varphi(n)$ 이 $2$ 의 거듭제곱일 때만 컴퍼스와 직선자로 작도된다.

[^1]: L. C. Washington, *Introduction to Cyclotomic Fields*, 2nd ed., Graduate Texts in Mathematics 83, Springer, 1997, 2장, 5장, 6장.
[^2]: J. Neukirch, *Algebraic Number Theory*, Grundlehren 322, Springer, 1999, 5장 1절.

# 연관 문서

## 선수지식

- [대수적 수체](algebraic-number-fields.md)

## 더 알아보기

- [유체론](class-field-theory.md)

#number_theory #field_theory #algebra
