# Vaughan 항등식

# 개요

Vaughan 항등식은 von Mangoldt 함수를 두 수열의 곱에 걸친 쌍선형합 몇 개로 가르는 항등식이다. 소수에 걸친 합을 직접 다루는 대신 약수 구조가 드러난 합으로 바꾸면 각 조각에 Cauchy–Schwarz 부등식과 지수합 추정을 쓸 수 있다. Bombieri–Vinogradov 정리와 Vinogradov 의 세 소수 정리가 이 분해를 출발 자료로 쓴다.

# 직관

$\sum\_{n\le x}\Lambda(n)e(n\alpha)$ 의 크기를 재려고 한다. $\Lambda$ 는 소수의 거듭제곱에서만 $0$ 이 아니므로 이 합은 거의 소수에 걸친 합이고, 소수의 위치를 모르는 상태에서는 각 항의 크기 $1$ 을 더하는 것 말고 할 수 있는 것이 없어 $x$ 보다 나은 상한이 나오지 않는다.

약수 구조가 있는 함수라면 사정이 다르다. $\sum\_{n\le x}d(n)e(n\alpha)$ 에서 $d(n)$ 을 $n=mk$ 의 꼴로 풀어 쓰면 합이 $\sum\_{m}\sum\_{k\le x/m}e(mk\alpha)$ 가 되고, 안쪽 합이 공비 $e(m\alpha)$ 의 등비급수라 $\vert\sin\pi m\alpha\vert^{-1}$ 로 묶인다. 두 변수로 풀어 쓸 수 있으면 한 변수를 고정하고 다른 변수에서 상쇄를 얻는다.

그러므로 $\Lambda$ 를 두 변수의 곱에 걸친 합으로 바꾼다. $\Lambda$ 자체는 곱으로 풀리지 않지만, Dirichlet 급수의 항등식 $-\zeta'/\zeta=F-\zeta F G+(\dots)$ 꼴로 $\Lambda$ 를 Möbius 함수와 $\Lambda$ 의 합성곱 몇 개의 합으로 쓸 수 있다. 각 합성곱은 두 수열의 곱에 걸친 합이다.

분해의 조각은 두 가지 꼴이다. 한쪽 변수의 길이가 짧아 안쪽 합을 등비급수로 묶는 조각과, 두 변수의 길이가 모두 중간이어서 Cauchy–Schwarz 부등식으로 두 변수를 분리하는 조각이다. 각각을 Type I 과 Type II 라 부르고, 두 꼴의 추정을 합치면 처음 합의 상한이 나온다.

# 정의

Vaughan 항등식은 von Mangoldt 함수를 쌍선형합으로 가르는 항등식이다. $\Lambda(n)$ 은 $n=p^k$ 에서 $\log p$ 이고 그 밖에서 $0$ 인 함수이고, $\mu$ 는 Möbius 함수다. 매개변수 $U,V\ge 1$ 을 고정하고

$$F(s)=\sum\_{m\le U}\frac{\mu(m)}{m^s},\qquad G(s)=\sum\_{k\le V}\frac{\Lambda(k)}{k^s}$$

로 둔다. 항등식은 Dirichlet 급수의 등식

$$-\frac{\zeta'}{\zeta}=G+\zeta' F-\zeta F G-\Bigl(-\frac{\zeta'}{\zeta}-G\Bigr)(1-\zeta F)$$

에서 계수를 비교해 얻는다. $n\gt UV$ 이면

$$\Lambda(n)=-\sum\_{\substack{mk=n\cr m\le U}}\mu(m)\log k-\sum\_{\substack{mkl=n\cr m\le U,\thinspace k\le V}}\mu(m)\Lambda(k)+\sum\_{\substack{kl=n\cr k\gt V}}\Lambda(k)\Bigl(\sum\_{\substack{mr=l\cr m\le U}}\mu(m)\Bigr)$$

가 성립한다.[^1]

## 두 꼴의 합

위 분해를 $\sum\_{n\le x}\Lambda(n)f(n)$ 에 넣으면 각 항이 다음 두 꼴 가운데 하나가 된다. 계수 $a\_m$ 과 $b\_k$ 는 약수합으로 주어지고 크기가 $\log$ 의 거듭제곱으로 묶인다.

$$S\_{\mathrm I}=\sum\_{m\le M}a\_m\sum\_{k\le x/m}f(mk),\qquad S\_{\mathrm{II}}=\sum\_{M\lt m\le 2M}a\_m\sum\_{K\lt k\le 2K}b\_kf(mk).$$

$S\_{\mathrm I}$ 를 Type I 합, $S\_{\mathrm{II}}$ 를 Type II 합이라 한다. 앞의 것은 안쪽 변수에 제약이 없어 $f$ 의 합을 직접 쓸 수 있고, 뒤의 것은 두 변수가 모두 묶여 있어 다른 추정이 필요하다.

# 성질

## Type I 합의 추정

$f(n)=e(n\alpha)$ 에서 안쪽 합이 등비급수이므로

$$\vert S\_{\mathrm I}\vert\le\sum\_{m\le M}\vert a\_m\vert\min\Bigl(\frac{x}{m},\frac{1}{\Vert m\alpha\Vert}\Bigr)$$

이다. $\Vert\cdot\Vert$ 은 가장 가까운 정수까지의 거리다. $\alpha$ 를 분모 $q$ 의 유리수로 근사하면 $m$ 이 $q$ 의 배수 근처에 올 때만 둘째 항이 커지므로 합이 $x/q+M\log q$ 규모로 묶인다.

## Type II 합의 추정

Cauchy–Schwarz 부등식을 $m$ 에 적용하면

$$\vert S\_{\mathrm{II}}\vert^2\le\Bigl(\sum\_{m}\vert a\_m\vert^2\Bigr)\sum\_{m}\Bigl\vert\sum\_{k}b\_kf(mk)\Bigr\vert^2$$

이고, 오른쪽 둘째 인자를 전개하면 $k$ 와 $k'$ 의 쌍에 걸친 합이 되어 $m$ 에 대한 지수합 $\sum\_m e(m(k-k')\alpha)$ 가 나온다. 이 합을 등비급수로 묶고 $k=k'$ 인 대각항을 따로 세면 상한이 나온다. 두 변수의 길이의 곱 $MK$ 가 $x$ 와 같으므로 $M$ 과 $K$ 가 모두 중간 크기일 때 이 추정이 유효하다.

## Weyl 합으로의 귀결

$\alpha$ 가 $\vert\alpha-a/q\vert\le q^{-2}$ 를 만족하는 분모 $q$ 의 근사를 가지면 두 추정을 합쳐

$$\sum\_{n\le x}\Lambda(n)e(n\alpha)\ll\Bigl(\frac{x}{\sqrt q}+x^{4/5}+\sqrt{xq}\Bigr)(\log x)^4$$

를 얻는다.[^2] $q$ 가 $x^{2/5}$ 와 $x^{3/5}$ 사이에 있으면 상한이 $x$ 보다 작아지므로 상쇄가 증명된다.

# 활용

- [큰 체](large-sieve.md): Bombieri–Vinogradov 정리의 증명이 $\Lambda$ 를 이 항등식으로 분해한 뒤 각 쌍선형합을 Dirichlet 지표합으로 쓰고 큰 체의 해석적 꼴을 적용한다.
- [원법](circle-method.md): 세 소수 정리의 소호 추정이 위의 Weyl 합 상한이다. 주호에서는 $\Lambda$ 의 분포를 직접 쓰고 소호에서는 이 분해를 쓴다.
- 지수합의 쌍선형 분해: 소수에 걸친 다른 합에서도 같은 형태의 분해를 쓰고, Type I 과 Type II 가운데 어느 쪽이 병목인지로 얻을 수 있는 범위가 정해진다.
- Heath-Brown 항등식: 같은 역할을 하는 다른 분해로, $\Lambda$ 를 약수 함수의 합으로 쓰며 조각의 개수가 더 많지만 각 조각의 변수 길이를 세밀하게 고를 수 있다.

[^1]: Vaughan, *Sommes trigonométriques sur les nombres premiers*, Comptes Rendus de l'Académie des Sciences Paris 285 (1977), 981–983.
[^2]: Davenport, *Multiplicative Number Theory*, 2 판, 24 장. Vinogradov 의 원래 추정을 이 항등식으로 다시 증명하는 서술이 여기 있다.

# 연관 문서

## 선수지식

- [소수 정리](prime-number-theorem.md)
- [큰 체](large-sieve.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis
