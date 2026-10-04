# 체 방법

# 개요

체 방법은 정수집합에서 작은 소수의 배수를 걸러 남는 원소의 개수를 추정하는 기법이다. 걸러낸 결과를 [포함배제 원리](inclusion-exclusion.md)로 쓰면 항의 개수가 걸러낸 [소수](primes.md)의 개수에 지수적으로 늘어 오차가 주항을 넘는다.

합을 자르거나 2차형식으로 바꿔 상한과 하한을 따로 얻는 것이 체 방법의 내용이다. Brun 의 절단과 Selberg 의 가중이 두 표준 수단이고, 쌍둥이 소수의 개수 상한과 등차수열의 소수 개수 상한이 그 결과다.

# 직관

$100$ 이하의 소수를 세려면 $2,3,5,7$ 의 배수를 지우고 남은 것을 센다. 이 절차를 그대로 식으로 쓰면 $x$ 이하의 정수 가운데 $z$ 보다 작은 소인수를 갖지 않는 것의 개수가

$$
\sum\_{d\mid P(z)}\mu(d)\Bigl\lfloor\frac xd\Bigr\rfloor,\qquad P(z)=\prod\_{p\lt z}p
$$

다. $\mu$ 는 포함배제 원리에 나오는 Möbius 함수이고, $d$ 는 $P(z)$ 의 약수 전체를 지난다.

바닥함수를 $x/d$ 로 바꾸면 오차가 항마다 $1$ 이하이고 항의 개수가 $2^{\pi(z)}$ 이므로

$$
\sum\_{d\mid P(z)}\mu(d)\Bigl\lfloor\frac xd\Bigr\rfloor=x\prod\_{p\lt z}\Bigl(1-\frac1p\Bigr)+O(2^{\pi(z)})
$$

를 얻는다. 여기서 $\pi(z)$ 는 $z$ 보다 작은 소수의 개수다. 주항은 Mertens 정리로 $x$ 의 $e^{-\gamma}/\log z$ 배 정도다.

오차가 주항보다 작으려면 $2^{\pi(z)}$ 가 $x/\log z$ 보다 작아야 하고, 이 조건은 $z$ 를 $\log x$ 정도까지만 키우게 한다. 그 $z$ 를 넣으면 상한이 $x/\log\log x$ 이고, [소수 정리](prime-number-theorem.md)가 주는 $x/\log x$ 와 크기가 다르다. 걸러낼 소수가 하나 늘 때마다 항의 개수가 두 배가 되어 오차가 커진다.

그래서 약수 $d$ 를 전부 쓰지 않는다. 소인수 개수가 $r$ 이하인 $d$ 만 남겨 합을 자르면 항의 개수가 $\pi(z)^r$ 로 줄고, 포함배제의 부분합이 $r$ 의 홀짝에 따라 상한과 하한을 주므로 자른 합이 그대로 추정에 쓰인다. 자른 합의 주항이 원래 주항에서 얼마나 멀어지는지를 재는 것이 체 방법의 계산이다.

# 정의

## 체 문제

유한 정수집합 $A$ , 소수들의 집합 $\mathcal P$ , 양수 $z$ 에 대해

$$
P(z)=\prod\_{p\in\mathcal P,\thinspace p\lt z}p,\qquad S(A,\mathcal P,z)=\char35{}\lbrace a\in A\thinspace :\thinspace \gcd(a,P(z))=1\rbrace
$$

로 두고 $S(A,\mathcal P,z)$ 를 **체 함수**라 한다. $A$ 를 **거르는 집합**, $\mathcal P$ 를 **거르는 소수**라 한다.

소수를 세는 문제는 $A=\lbrace 1,\dots,x\rbrace$ 와 $\mathcal P$ 를 모든 소수로 두고 $z=x^{1/2}$ 를 쓴 것이다. 쌍둥이 소수를 세는 문제는 $A=\lbrace n(n+2)\thinspace :\thinspace n\le x\rbrace$ 로 둔다.

## 체의 차원

소수 $p$ 마다 $A$ 에서 걸러내는 잉여류의 개수를 $w(p)$ 라 한다. 상수 $\kappa$ 가 있어

$$
\sum\_{p\lt z}\frac{w(p)\log p}{p}=\kappa\log z+O(1)
$$

이면 그 체 문제를 **$\kappa$ 차원**이라 한다. 소수를 세는 문제는 $w(p)=1$ 이므로 $1$ 차원이고, 쌍둥이 소수는 $p\gt 2$ 에서 $n\equiv 0,-2$ 둘을 걸러내므로 $2$ 차원이다.

차원이 체 방법의 주항을 정한다. $\kappa$ 차원 문제의 상한은 $\vert A\vert$ 에 $(\log z)^{-\kappa}$ 를 곱한 크기다.

# 성질

## Brun 의 순수 체

**정리.** $\mathcal P$ 의 소수 개수를 $\pi(z)$ 라 할 때, 짝수 $2r$ 에 대해

$$
S(A,\mathcal P,z)\le\sum\_{d\mid P(z),\thinspace\omega(d)\le 2r}\mu(d)\thinspace\vert A\_d\vert
$$

이고 $2r+1$ 로 바꾸면 부등호가 뒤집힌다. 여기서 $\omega(d)$ 는 $d$ 의 서로 다른 소인수의 개수이고 $A\_d$ 는 $d$ 로 나누어지는 $A$ 의 원소 전체다.[^1]

증명의 요지. 고정된 $a\in A$ 에 대해 $m=\gcd(a,P(z))$ 의 소인수가 $s$ 개이면, 왼쪽의 기여는 $s=0$ 에서 $1$ 이고 그 밖에서 $0$ 이다. 오른쪽의 기여는 $\sum\_{j\le 2r}(-1)^j\binom sj$ 이고, 이 부분합은 Bonferroni 부등식으로 $s=0$ 에서 $1$ , $s\ge 1$ 에서 $0$ 이상이다. 항마다 비교하면 부등식이 나온다.

## Brun 정리

**정리.** $x$ 이하의 쌍둥이 소수 쌍의 개수 $\pi\_2(x)$ 에 대해

$$
\pi\_2(x)\ll\frac{x(\log\log x)^2}{(\log x)^2}
$$

이다. 따라서 $p$ 와 $p+2$ 가 모두 소수인 $p$ 에 걸친 $\sum 1/p$ 가 수렴한다.[^1]

증명의 요지. 순수 체의 상한에 $z=x^{c/\log\log x}$ 와 $r$ 을 $\log\log x$ 정도로 잡는다. 절단 때문에 생기는 오차가 주항의 상수배로 눌리도록 두 값을 맞춘다. 2 차원 체의 주항이 $(\log z)^{-2}$ 이므로 위 꼴이 나온다. 급수의 수렴은 이 상한을 쌍의 크기별로 더해 얻는다.

모든 소수에 걸친 $\sum 1/p$ 는 발산하므로, 쌍둥이 소수는 소수 전체보다 얇다.

## Selberg 체

절단 대신 가중을 쓴다. $\lambda\_1=1$ 이고 $d\gt D$ 에서 $\lambda\_d=0$ 인 실수열 $\lambda\_d$ 를 잡으면, $\gcd(a,P(z))=1$ 인 $a$ 에서 안쪽 합이 $1$ 이므로

$$
S(A,\mathcal P,z)\le\sum\_{a\in A}\Bigl(\sum\_{d\mid\gcd(a,P(z))}\lambda\_d\Bigr)^2
$$

이 성립한다.

**정리.** 오른쪽은 $\lambda\_d$ 에 대한 양의 정부호 2차형식이고, 최솟값이 $\vert A\vert/G(D)$ 꼴이다. 여기서 $G(D)=\sum\_{d\lt D}\mu(d)^2/g(d)$ 이고 $g$ 는 $A\_d$ 의 밀도로 정해지는 곱셈적 함수다.[^1]

증명의 요지. 2차형식을 대각화하면 각 변수에 대한 완전제곱 꼴이 되고, $\lambda\_1=1$ 이라는 하나의 선형 제약 아래 최솟값이 Cauchy–Schwarz 등호 조건에서 나온다. 소수를 세는 1 차원 문제에서 $G(D)$ 가 $\log D$ 정도이므로 상한이 $\vert A\vert/\log D$ 다. 절단이 $z$ 를 $\log x$ 로 묶었던 것과 달리 $D$ 를 $x$ 의 거듭제곱까지 키울 수 있다.

## Brun–Titchmarsh 정리

**정리.** $1\le y\le x$ 에 대해

$$
\pi(x+y)-\pi(x)\le\frac{2y}{\log y}(1+o(1))
$$

이다.[^2]

증명의 요지. $A=\lbrace n\thinspace :\thinspace x\lt n\le x+y\rbrace$ 에 Selberg 체를 적용한다. 1 차원 체의 상한이 $y/\log z$ 이고 $z$ 를 $y^{1/2}$ 까지 키울 수 있어 계수 $2$ 가 나온다. 소수 정리가 주는 점근값의 계수는 $1$ 이므로, 이 상한은 점근값의 두 배에서 멈춘다.

## 패리티 현상

체 방법은 소인수의 개수가 짝수인 수와 홀수인 수를 가르지 못한다. Selberg 는 체 조건만으로는 두 집합의 개수 추정이 같은 상한과 하한을 받는 예를 들었다.[^3]

따라서 소인수가 정확히 하나라는 결론, 곧 소수라는 결론은 체 방법만으로 나오지 않는다. 쌍둥이 소수 추측 대신 Chen 정리의 $p+2$ 가 소수이거나 두 소수의 곱이라는 결론이 나오는 것이 이 때문이다.

# 활용

- **소수 쌍의 밀도.** Brun 정리의 상한이 쌍둥이 소수의 역수 합을 수렴하게 하므로, Brun 상수라는 값이 정의된다. 같은 상한을 $p$ 와 $p+2k$ 꼴로 바꾸면 임의의 짝수 간격에 쓸 수 있다.
- **등차수열의 소수.** Brun–Titchmarsh 정리는 [Dirichlet L 함수](dirichlet-l-functions.md)를 쓰지 않고 짧은 구간과 등차수열의 소수 개수 상한을 준다. 해석적 방법이 주는 하한과 짝지어 쓴다.
- **소수 간격.** Goldston–Pintz–Yıldırım 의 가중을 Selberg 체에 넣어 얻은 상한을 Zhang 과 Maynard 가 개선하여, 간격이 유계인 소수 쌍이 무한히 많다는 결론이 나왔다.[^4]
- **다항식 값의 소인수.** $n^2+1$ 처럼 한 변수 다항식의 값에 체를 적용하면 소인수 개수의 상한이 나온다. 차원이 다항식의 기약 인자 개수로 정해진다.

[^1]: H. Halberstam, H.-E. Richert, *Sieve Methods*, Academic Press, 1974, 2 장과 3 장. Brun 의 절단과 Selberg 의 2차형식이 모두 이 책의 서술을 따른다. Brun 의 원논문은 V. Brun, *Le crible d'Eratosthène et le théorème de Goldbach*, Skr. Norske Vid.-Akad. Kristiania I, 1920.

[^2]: H. L. Montgomery, R. C. Vaughan, *The large sieve*, Mathematika **20** (1973), 119–134. 계수 $2$ 를 모든 범위에서 얻은 형태가 이 논문이다.

[^3]: J. Friedlander, H. Iwaniec, *Opera de Cribro*, American Mathematical Society, 2010, 16 장. 패리티 현상의 서술과 Selberg 의 예가 이 장에 있다.

[^4]: Y. Zhang, *Bounded gaps between primes*, Ann. of Math. **179** (2014), 1121–1174. J. Maynard, *Small gaps between primes*, Ann. of Math. **181** (2015), 383–413.

# 연관 문서

## 선수지식

- [포함배제 원리](inclusion-exclusion.md)
- [소수](primes.md)

## 더 알아보기

- [큰 체](large-sieve.md)

#number_theory #combinatorics
