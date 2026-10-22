# abc 추측

# 개요

**abc 추측(abc conjecture)** 은 서로소인 양의 정수 $a+b=c$ 에서 $c$ 가 $abc$ 의 서로 다른 소인수의 곱보다 아주 큰 경우가 유한개뿐이라는 추측이다. 1985 년에 Masser 와 Oesterlé 가 제시했다.[^1]

덧셈 $a+b=c$ 와 세 수의 소인수분해 사이의 관계를 하나의 부등식으로 적은 것이고, 정수 방정식의 해가 유한개라는 여러 진술이 이 부등식에서 유도된다. 다항식에서는 같은 꼴의 부등식이 Mason–Stothers 정리로 증명되어 있다.

# 직관

$5+7=12$ 에서 세 수에 나타나는 [소수](primes.md)는 $2,3,5,7$ 이고 그 곱 $210$ 은 $c=12$ 보다 훨씬 크다. 서로소인 $a,b$ 를 아무렇게나 고르면 대개 이렇다. $c$ 가 소수의 곱보다 커지려면 $a,b,c$ 가 같은 소수를 여러 번 써야 한다. $1+8=9$ 는 $8=2^3$, $9=3^2$ 이라 소수의 곱이 $2\cdot3=6$ 이고 $c=9$ 보다 작다.

$1+(3^{2^k}-1)=3^{2^k}$ 에서 $3^{2^k}-1$ 은 $2^{k+2}$ 로 나누어진다. $k=1$ 이면 $8$, $k=2$ 이면 $80=16\cdot5$ 이다. 그래서 소수의 곱은 $3\cdot(3^{2^k}-1)/2^{k+1}$ 이하이고, $c$ 를 이것으로 나눈 비는 $2^{k+1}/3$ 보다 크다. 비 $c/(\text{소수의 곱})$ 은 얼마든지 커질 수 있다.

그러므로 $c$ 가 소수의 곱 이하라는 부등식은 성립하지 않는다. abc 추측은 소수의 곱에 $1$ 보다 조금 큰 지수 $1+\varepsilon$ 을 붙이면 그것을 넘는 경우가 유한개라는 진술이다.

# 정의

## 근기

$0$ 이 아닌 정수 $n$ 의 **근기(radical)** 는 $n$ 을 나누는 서로 다른 소수의 곱이다.

$$
\mathrm{rad}(n)=\prod_{p\mid n}p
$$

$\mathrm{rad}(72)=\mathrm{rad}(2^3\cdot3^2)=6$ 이다.

## 추측의 진술

**abc 추측.** 모든 $\varepsilon\gt 0$ 에 대해, 서로소인 양의 정수 $a,b,c$ 가운데 $a+b=c$ 이고

$$
c\gt \mathrm{rad}(abc)^{1+\varepsilon}
$$

인 세 쌍은 유한개다. 동치로, $\varepsilon$ 에만 의존하는 상수 $K_\varepsilon$ 이 있어 모든 서로소 $a+b=c$ 에서 $c\le K_\varepsilon\thinspace\mathrm{rad}(abc)^{1+\varepsilon}$ 이다.

세 쌍의 **질(quality)** 을 $q(a,b,c)=\log c/\log\mathrm{rad}(abc)$ 로 정의하면, 추측은 $q\gt 1+\varepsilon$ 인 세 쌍이 유한개라는 것이다. 알려진 질의 최댓값은 Reyssat 의 $2+3^{10}\cdot109=23^5$ 이 주는 $q\approx1.6299$ 다.[^2]

# 성질

## Mason–Stothers 정리

**정리(Mason–Stothers).** 표수 $0$ 인 체 $k$ 위의 서로소 다항식 $a,b,c$ 가 $a+b=c$ 를 만족하고 모두 상수인 것은 아니면

$$
\max(\deg a,\deg b,\deg c)\le n_0(abc)-1
$$

이다. $n_0(abc)$ 는 $abc$ 의 대수적 폐포에서의 서로 다른 근의 개수다.[^3]

증명의 요지. $f=a/c$, $g=b/c$ 로 두면 $f+g=1$ 이고 [미분](derivative.md)하면 $f'+g'=0$ 이므로

$$
\frac ba=-\frac{f'/f}{g'/g}
$$

다. $abc$ 의 서로 다른 근 $\gamma$ 에 대한 $N_0=\prod(t-\gamma)$ 를 곱하면 $N_0f'/f$ 와 $N_0g'/g$ 는 차수가 $n_0(abc)-1$ 이하인 다항식이다. $a\cdot N_0f'/f=-b\cdot N_0g'/g$ 이고 $a,b$ 가 서로소이므로 $b$ 가 $N_0f'/f$ 를 나눈다. 따라서 $\deg b\le n_0(abc)-1$ 이고 $a,c$ 도 같다.

다항식에서는 $\deg$ 가 $\log$ 의 자리에, $n_0$ 이 $\log\mathrm{rad}$ 의 자리에 있다. 정수에는 미분에 해당하는 연산이 없어 이 증명이 옮겨지지 않는다.

## 다항식의 Fermat 방정식

$n\ge3$ 이면 $x^n+y^n=z^n$ 은 모두 상수는 아닌 서로소 다항식 해가 없다. Mason–Stothers 정리를 $a=x^n$, $b=y^n$, $c=z^n$ 에 적용하면 $d=\max(\deg x,\deg y,\deg z)$ 에 대해 $nd\le\deg x+\deg y+\deg z-1\le3d-1$ 이므로 $n\lt 3$ 이다.

## 무조건 상계

현재 증명된 가장 강한 상계는 지수 크기다. Stewart 와 Yu 는 상수 $K$ 가 있어 서로소 $a+b=c$ 에서

$$
\log c\lt K\thinspace\mathrm{rad}(abc)^{1/3}(\log\mathrm{rad}(abc))^3
$$

임을 증명했다.[^4] 증명은 로그의 일차 형식(linear forms in logarithms)에 대한 [Baker 정리](baker-theorem.md)의 방법을 $p$ 진 로그까지 써서 각 소수 지수의 크기를 누른다.

# 활용

- [Fermat 마지막 정리](fermats-last-theorem.md): 서로소 해 $x^n+y^n=z^n$ 에서 $\mathrm{rad}(x^ny^nz^n)\le xyz\lt z^3$ 이므로 abc 추측에서 $z^n\le K_\varepsilon z^{3+3\varepsilon}$ 이다. $\varepsilon\lt 1/3$ 으로 잡으면 $n\ge4$ 인 해는 $z$ 가 유계라 유한개뿐이다.
- [Faltings 정리](faltings-theorem.md): Elkies 는 abc 추측의 명시적 판본에서 종수 $2$ 이상인 곡선의 유리점의 높이 상계가 유도됨을 보였다. Faltings 정리의 증명은 이 상계를 주지 않는다.[^5]
- [타원곡선](elliptic-curves.md)의 판별식: Szpiro 추측(Szpiro's conjecture)은 $\mathbb Q$ 위 타원곡선의 최소 판별식이 도체의 $6+\varepsilon$ 제곱으로 위에서 유계라는 진술이다. Oesterlé 는 $a+b=c$ 의 Frey 곡선 $y^2=x(x-a)(x+b)$ 를 써서 abc 추측이 Szpiro 추측의 변형과 동치임을 보였다.[^1]
- [Néron–Tate 높이와 Mordell–Weil 정리](canonical-height.md): Hindry 와 Silverman 은 Szpiro 비가 유계인 곡선족에서 Lang 의 높이 하한을 증명했으므로, abc 추측에서 모든 곡선의 하한이 따라온다.

[^1]: J. Oesterlé, *Nouvelles approches du «théorème» de Fermat*, Séminaire Bourbaki exp. 694, Astérisque **161–162** (1988), 165–186. Masser 와 Oesterlé 의 추측 제시와 Szpiro 추측과의 동치가 여기 정리되어 있다.
[^2]: E. Reyssat 의 예는 A. Granville, T. Tucker, *It's as easy as abc*, Notices Amer. Math. Soc. **49** (2002), 1224–1231 에 실려 있다.
[^3]: S. Lang, *Algebra*, 3rd ed., GTM 211, Springer, 2002, IV 장 7 절.
[^4]: C. L. Stewart, K. Yu, *On the abc conjecture II*, Duke Math. J. **108** (2001), 169–181.
[^5]: N. Elkies, *ABC implies Mordell*, Internat. Math. Res. Notices **1991**, no. 7, 99–109.

# 연관 문서

## 선수지식

- [소수](primes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #theorem
