# Kloosterman 합

# 개요

Kloosterman 합은 법 $c$ 의 가역 잉여류에서 수와 그 역원을 함께 지수에 올려 더한 값이다. [Gauss 합](gauss-sums.md)이 제곱을 올려 절댓값이 $\sqrt c$ 로 정확히 계산되는 데 비해, 역원을 올린 합은 닫힌 꼴로 평가되지 않고 소수 법에서 크기만 $2\sqrt c$ 로 묶인다.

Kloosterman 이 네 변수 이차형식의 표현 개수를 세며 도입했다[^1]. 모듈러 형식의 Fourier 계수와 [원법](circle-method.md)의 주 호에서 같은 합이 나온다.

# 직관

법 $p$ 에서 $x$ 와 그 역원 $\bar x$ 가 둘 다 $1$ 과 $H$ 사이에 드는 $x$ 가 몇 개인지 센다. 두 구간의 지표함수를 지수 $e^{2\pi iax/p}$ 들의 합으로 펼치면 개수가

$$
\sum_{a,b\bmod p}w(a)\thinspace\overline{w(b)}\sum_{x}e^{2\pi i(ax+b\bar x)/p}
$$

로 적히고 $w$ 는 구간 길이에서 바로 나오는 수다. 남는 것은 안쪽 합이다. $x$ 만 든 $\sum_{x}e^{2\pi iax/p}$ 는 $a$ 가 $p$ 의 배수이면 $p-1$, 아니면 $-1$ 로 끝난다. 역원이 함께 들어가면 그 계산이 되지 않는다. $x$ 를 $tx$ 로 바꾸면 지수가 $atx+bt^{-1}\bar x$ 가 되어 합이 곱 $ab$ 에만 달렸음은 나오지만 크기는 나오지 않는다.

크기만 묻는다. $a$ 를 법 $p$ 전체로 움직여 안쪽 합의 절댓값의 제곱을 더하면 두 변수 $x,y$ 의 합이 되고, $a$ 에 대한 직교성이 $x=y$ 인 항만 남겨 값이 $p(p-1)$ 이다. 항이 $p$ 개이므로 절댓값의 제곱이 평균 $p$ 쯤이고 절댓값은 평균 $\sqrt p$ 쯤이다. 개별 $a$ 에서도 절댓값이 $2\sqrt p$ 를 넘지 않는 것이 Weil 의 상계다. 그 상계를 위 식에 넣으면 $H$ 가 $p^{3/4}$ 보다 클 때 주항이 오차를 넘어 개수의 점근식이 나온다.

# 정의

## Kloosterman 합

$a,b$ 를 정수, $c$ 를 양의 정수라 하고 $e(z)=e^{2\pi iz}$ 라 쓴다. Kloosterman 합은

$$
K(a,b;c)=\sum_{x\in(\mathbb Z/c\mathbb Z)^\ast}e\left(\frac{ax+b\bar x}{c}\right)
$$

이다. 합은 법 $c$ 의 가역 잉여류 전체에서 돌고 $\bar x$ 는 $x\bar x\equiv1\pmod c$ 인 잉여류다. $ax+b\bar x$ 의 법 $c$ 잉여류가 정해지므로 각 항이 잘 정의된다.

## Kloosterman 각

$p$ 가 소수이고 $p\nmid ab$ 이면 Weil 상계로 $K(a,b;p)/(2\sqrt p)$ 가 $\lbrack -1,1\rbrack$ 에 들어간다. 그 값을 $\cos\theta$ 로 적는 $\theta\in\lbrack 0,\pi\rbrack$ 를 Kloosterman 각이라 한다.

## Salié 합

$\chi$ 를 법 $p$ 의 Legendre 기호라 할 때

$$
T(a,b;p)=\sum_{x\in(\mathbb Z/p\mathbb Z)^\ast}\chi(x)\thinspace e\left(\frac{ax+b\bar x}{p}\right)
$$

를 Salié 합이라 한다.

# 성질

## 대칭과 정규화

$x\mapsto-x$ 가 $\bar x\mapsto-\bar x$ 를 주므로 $K(a,b;c)$ 의 켤레가 자신과 같고 값이 실수다. $x\mapsto\bar x$ 는 $K(a,b;c)=K(b,a;c)$ 를 준다. $\gcd(a,c)=1$ 이면 $x\mapsto\bar ax$ 가

$$
K(a,b;c)=K(1,ab;c)
$$

를 주므로 두 변수 가운데 하나만 남는다. $a\equiv0$ 인 자리에서는 $\bar x$ 가 가역 잉여류를 다시 훑으므로 $K(0,b;c)$ 가 Ramanujan 합 $\sum_{x\in(\mathbb Z/c\mathbb Z)^\ast}e(bx/c)$ 와 같다.

## 곱셈성

$\gcd(c_1,c_2)=1$ 이면

$$
K(1,n;c_1c_2)=K(1,n\overline{c_2}^2;c_1)\thinspace K(1,n\overline{c_1}^2;c_2)
$$

이고 $\overline{c_2}$ 는 법 $c_1$ 에서, $\overline{c_1}$ 은 법 $c_2$ 에서 잡은 역원이다. 증명의 요지는 분수의 분해다. $\overline{c_2}c_2+\overline{c_1}c_1\equiv1\pmod{c_1c_2}$ 이므로 $1/(c_1c_2)$ 가 법 $1$ 에서 $\overline{c_2}/c_1+\overline{c_1}/c_2$ 와 같고, 지수가 두 법의 지수로 갈린다. 각 조각에서 $x\mapsto\overline{c_2}x$ 로 치환하면 위 꼴이 나온다. 그래서 $c$ 가 소수 거듭제곱인 경우만 계산하면 된다.

## Weil 상계

$p$ 가 소수이고 $p\nmid ab$ 이면 $\vert K(a,b;p)\vert\le2\sqrt p$ 다[^2]. 증명의 요지는 지수합을 곡선의 점의 수로 바꾸는 것이다. $\mathbb F_p$ 의 곱셈군 위 함수 $x\mapsto ax+b\bar x$ 에 Artin–Schreier 덮개를 올리면 그 덮개의 [L 함수](dwork-rationality.md)가 차수 $2$ 다항식이고, 역근 $\alpha,\beta$ 가 $K(a,b;p)=-(\alpha+\beta)$ 와 $\alpha\beta=p$ 를 만족한다. 곡선의 Riemann 가설이 $\vert\alpha\vert=\vert\beta\vert=\sqrt p$ 를 주므로 합의 절댓값이 $2\sqrt p$ 이하다.

## 소수 거듭제곱 법에서의 평가

$p$ 가 홀수 소수, $k\ge2$, $p\nmid n$ 이면 $K(1,n;p^k)$ 는 정류점 방법으로 닫힌 꼴로 평가된다. $n$ 이 법 $p$ 에서 이차잉여가 아니면 합이 $0$ 이고, 이차잉여이면 $v^2\equiv n$ 인 두 잉여류 $\pm v$ 가 각각 절댓값 $p^{k/2}$ 를 기여해 $\vert K(1,n;p^k)\vert=2p^{k/2}$ 다. 소수 법이 아닌 곳에서 Weil 상계가 등호로 포화된다.

## Salié 합의 평가

$p$ 가 홀수 소수이고 $p\nmid n$ 이면

$$
T(1,n;p)=\varepsilon_p\sqrt p\sum_{v^2\equiv n\thinspace(\mathrm{mod}\thinspace p)}e\left(\frac{2v}{p}\right)
$$

이고 $\varepsilon_p$ 는 $p\equiv1\pmod4$ 이면 $1$, $p\equiv3\pmod4$ 이면 $i$ 다[^3]. 이차 지표를 끼우면 Gauss 합이 떨어져 나와 합이 두 항으로 줄어든다. 그래서 Salié 합에는 Weil 상계 같은 간접 논증이 필요하지 않다.

## Kloosterman 각의 분포

$p$ 를 고정하고 $a$ 를 $1$ 부터 $p-1$ 까지 움직여 얻은 각 $\theta_a$ 들을 본다. Katz 는 $p\to\infty$ 에서 이 각들이 측도 $\frac{2}{\pi}\sin^2\theta\thinspace d\theta$ 로 균등분포함을 증명했다[^4]. 증명은 Artin–Schreier 덮개가 만드는 층의 모노드로미군이 $\mathrm{SL}\_2$ 전체임을 보이고 Deligne 의 [Weil 추측 증명](deligne-weil-conjectures.md)을 적용하는 것이다. 한 소수에서 $a$ 를 움직인다는 점이 한 곡선에서 소수를 움직이는 [Sato–Tate 분포](sato-tate.md)와 다르다.

## Kloosterman 합의 합

Weil 상계를 항마다 적용하면 $\sum_{c\le C}c^{-1}\vert K(1,n;c)\vert$ 가 $C^{1/2}$ 크기로 끝난다. [Kuznetsov 공식](kuznetsov-formula.md)은 이 합을 [Maass 형식](maass-forms.md)의 Fourier 계수와 Eisenstein 쪽 적분으로 바꾸어 항 사이의 상쇄를 드러낸다[^5]. Linnik 추측은 $\sum_{c\le C}c^{-1}K(1,n;c)$ 가 모든 $\varepsilon\gt 0$ 에서 $O(C^\varepsilon)$ 라고 진술한다.

# 활용

- **모듈러 형식의 Fourier 계수.** Poincaré 급수를 Fourier 전개하면 계수가 $c$ 에 대한 Kloosterman 합의 합으로 적힌다. [모듈러 형식](modular-forms.md) 가운데 첨점 형식의 계수 상계가 그 합의 크기에서 나오고, Weil 상계가 Ramanujan 추측의 지수에 부분적인 값을 준다.
- **원법의 주 호.** [원법](circle-method.md)에서 분모 $c$ 의 유리점 근방을 모으면 Kloosterman 합이 나온다. 네 변수 이차형식의 표현 개수에서 그 합의 크기가 오차항을 정한다.
- **법 $p$ 의 역원 분포.** 직관 절의 개수 문제가 그 예다. 구간 길이가 $p^{3/4}$ 를 넘으면 Weil 상계로 점근식이 나온다.
- **구면 위의 격자점.** 세 변수 이차형식의 표현 개수를 반정수 무게 형식의 계수로 적으면 Salié 합이 나오고, 그 닫힌 꼴이 계수를 이차체의 류수와 잇는다.

[^1]: H. D. Kloosterman, "On the representation of numbers in the form $ax^2+by^2+cz^2+dt^2$", Acta Mathematica 49 (1926), 407–464.
[^2]: A. Weil, "On some exponential sums", Proceedings of the National Academy of Sciences 34 (1948), 204–207.
[^3]: H. Salié, "Über die Kloostermanschen Summen $S(u,v;q)$", Mathematische Zeitschrift 34 (1931), 91–109.
[^4]: N. M. Katz, "Gauss Sums, Kloosterman Sums, and Monodromy Groups", Annals of Mathematics Studies 116, Princeton University Press (1988).
[^5]: N. V. Kuznetsov, "Petersson's conjecture for cusp forms of weight zero and Linnik's conjecture", Matematicheskii Sbornik 111 (1980), 334–383.

# 연관 문서

## 선수지식

- [Gauss 합](gauss-sums.md)
- [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)

## 더 알아보기

- [Kuznetsov 공식](kuznetsov-formula.md)

#number_theory #analysis #complex_analysis
