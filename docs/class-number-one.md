# 류수 1 문제

# 개요

허이차체 $\mathbb Q(\sqrt{-d})$ 의 정수환에서 소인수분해가 유일한 것은 이데알 류수가 $1$ 인 것과 같다. 그런 $d$ 는 $1,2,3,7,11,19,43,67,163$ 아홉 개뿐이다.

Gauss 가 1801 년에 이 목록을 적었고[^1], 증명은 1952 년 Heegner, 1966 년 Baker, 1967 년 Stark 를 거쳐 완성됐다. 류수가 판별식과 함께 커진다는 것 자체는 1934 년에 증명됐지만 그 증명에서 판별식의 상한이 나오지 않았고, 상한을 계산할 수 있게 만든 것이 모듈러 함수의 특이값과 로그의 일차형식이다.

# 직관

$\mathbb Z$ 에서는 소인수분해가 유일하다. $\mathbb Z\lbrack\sqrt{-5}\rbrack$ 에서는 $6=2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5})$ 이고 네 인수가 모두 더 쪼개지지 않으므로 유일하지 않다. 어느 $d$ 에서 유일한지 묻는다.

[대수적 수체](algebraic-number-fields.md)의 Minkowski 상계가 각 경우를 유한한 계산으로 바꾼다. $d=1,2,3,7,11$ 에서는 상계 아래의 아이디얼이 전부 주 아이디얼이라 류수가 $1$ 이고, $d=5$ 에서는 $(2,1+\sqrt{-5})$ 가 주 아이디얼이 아니라 류수가 $2$ 다. 이렇게 훑으면 류수가 $1$ 인 $d$ 가 $1,2,3,7,11,19,43,67,163$ 으로 나오고, $163$ 다음으로는 아무리 멀리 가도 나오지 않는다.

계산을 늘리는 것으로는 "없다" 가 증명되지 않는다. 판별식 $D$ 의 류수는 $\sqrt{\vert D\vert}$ 에 $L(1,\chi_D)$ 를 곱한 크기이므로 $L(1,\chi_D)$ 의 하한만 있으면 $\vert D\vert$ 가 큰 곳에서 류수가 $2$ 이상이 된다. 그런데 알려진 하한은 어떤 판별식 하나가 예외일 수 있다는 꼴이고, 그 예외의 크기를 수로 적을 수 없어 훑을 범위가 정해지지 않는다.

다른 길로 간다. 류수가 $1$ 이면 $\tau=(1+\sqrt{-163})/2$ 에서 모듈러 함수 $j$ 의 값이 유리정수가 되고, 실제로 $j(\tau)=-640320^3$ 이다. $j$ 의 Fourier 전개 $j=q^{-1}+744+196884q+\cdots$ 에 $q=-e^{-\pi\sqrt{163}}$ 을 넣으면

$$
e^{\pi\sqrt{163}}=640320^3+744-196884\thinspace e^{-\pi\sqrt{163}}+\cdots=262537412640768743.99999999999925\dots
$$

이다. 지수와 정수가 소수점 아래 열두 자리까지 맞는 이 현상이 $\pi\sqrt{163}$ 과 대수적 수의 로그 사이의 아주 작은 일차결합을 뜻하고, 그런 결합이 얼마나 작을 수 있는지에 계산 가능한 하한이 있으면 $d$ 의 상한이 나온다.

# 정의

## 허이차체의 류수

제곱인자 없는 $d\gt 0$ 에 대해 $K=\mathbb Q(\sqrt{-d})$ 의 판별식은 $-d\equiv1\pmod 4$ 이면 $D=-d$, 아니면 $D=-4d$ 다. 정수환 $\mathcal O_K$ 의 이데알 류군의 위수를 **류수** $h(D)$ 라 한다.

$h(D)$ 는 판별식 $D$ 의 원시 양정부호 이진 [이차형식](quadratic-forms.md)의 동치류 개수와 같다. 소인수분해의 유일성, 곧 $\mathcal O_K$ 가 주 아이디얼 정역인 것은 $h(D)=1$ 과 동치다.

## 류수 1 문제

$h(D)=1$ 인 음의 판별식 $D$ 를 전부 결정하는 문제다. 답은 아홉 개다.

$$
D=-3,\thinspace-4,\thinspace-7,\thinspace-8,\thinspace-11,\thinspace-19,\thinspace-43,\thinspace-67,\thinspace-163
$$

대응하는 $d=1,2,3,7,11,19,43,67,163$ 을 **Heegner 수**라 한다.

# 성질

## 류수 공식과 증가

Dirichlet 의 류수 공식은 류수를 $L$ 함수의 값으로 적는다.

$$
h(D)=\frac{w\thinspace\sqrt{\vert D\vert}}{2\pi}\thinspace L(1,\chi_D)
$$

$\chi_D$ 는 판별식 $D$ 의 Kronecker 지표이고 $w$ 는 $\mathcal O_K$ 의 단원 개수로, $D\lt -4$ 이면 $w=2$ 다.

Hecke 는 일반화 Riemann 가설 아래 $L(1,\chi_D)\gg1/\log\vert D\vert$ 를 얻었다. Deuring 과 Heilbronn 은 그 가설이 깨지는 경우, 곧 어떤 $L(s,\chi)$ 에 $1$ 에 아주 가까운 실영점이 있는 경우에 거꾸로 다른 판별식의 류수가 커짐을 보였다. 두 경우를 합쳐 Heilbronn 이 1934 년에 $h(D)\to\infty$ 를 증명했다[^2].

이 증명은 판별식의 상한을 주지 않는다. 결론은 두 경우 가운데 하나에서 나오는데 어느 쪽인지 알 수 없고, 둘째 경우의 상수는 가정한 영점의 위치에 달려 있다.

## Heegner 의 증명

Heegner 는 1952 년에 모듈러 함수의 특이값으로 문제를 풀었다[^3]. $h(D)=1$ 이면 $j(\tau)$ 가 유리정수이고, Weber 함수가 만드는 삼차 방정식의 유리근 조건이 $d$ 에 대한 Diophantus 방정식이 되어 해가 아홉 개로 제한된다.

증명은 1960 년대까지 받아들여지지 않았다. Weber 의 교과서에서 빠진 부분을 그대로 쓴 자리가 있다는 것이 이유였다. Stark 가 1969 년에 그 자리를 메울 수 있음을 보여 증명이 본래 완전했음이 확인됐다.

## Baker 와 Stark 의 증명

Baker 와 Stark 는 1966 년과 1967 년에 독립적으로 증명했다[^4]. Baker 의 논법은 [Baker 정리](baker-theorem.md)의 유효 하한을 쓴다.

$h(D)=1$ 을 가정하면 특이값 $j(\tau)$ 가 유리정수이므로 위 전개에서 $e^{\pi\sqrt d}$ 와 정수의 차가 지수적으로 작다. 그 차를 로그를 취해 적으면 $\pi\sqrt d$ 와 대수적 수 몇 개의 로그를 정수 계수로 묶은 일차형식이 되고, 크기가 $e^{-\pi\sqrt d}$ 규모다. Baker 의 하한은 이 일차형식이 $d$ 의 거듭제곱의 역수보다 작을 수 없다고 하므로 두 부등식이 $d$ 의 상한을 준다. 남은 유한 범위를 계산으로 훑으면 목록이 닫힌다.

Stark 는 Heegner 의 방법을 정비해 같은 결론에 닿았다. 두 논법은 모두 특이값의 정수성을 출발점으로 삼는다.

## 류수 2 이상

Baker 와 Stark 는 같은 방법으로 $h(D)=2$ 인 판별식 18 개도 결정했다.

일반적인 $h$ 에는 다른 논법이 쓰인다. Goldfeld 는 1976 년에, $L$ 함수가 $s=1$ 에서 3 차 이상의 영점을 갖는 타원곡선이 있으면 계산 가능한 상수로

$$
h(D)\gg(\log\vert D\vert)^{1-\varepsilon}
$$

가 성립함을 보였다. Gross 와 Zagier 는 1986 년에 [Heegner 점](heegner-points.md)의 높이를 $L$ 함수의 미분으로 적는 공식을 증명해 그런 곡선의 존재를 확인했다[^5]. 두 결과가 합쳐져 주어진 $h$ 마다 판별식의 상한을 적을 수 있게 됐고, Watkins 가 $h\le100$ 인 판별식을 전부 열거했다[^6].

## 특이 모듈러 값

$h(D)=1$ 인 판별식에서 $j$ 의 값은 다음과 같다.

| $d$ | $j(\tau)$ |
| --- | --- |
| $7$ | $-3375$ |
| $11$ | $-32768$ |
| $19$ | $-884736$ |
| $43$ | $-884736000$ |
| $67$ | $-147197952000$ |
| $163$ | $-262537412640768000$ |

세제곱근이 각각 $15,32,96,960,5280,640320$ 이다. 이 정수성은 [허수 곱셈](complex-multiplication.md)의 일반 정리에서 나온다. $h(D)=1$ 일 때만 값이 유리정수이고, $h(D)\gt 1$ 이면 $j(\tau)$ 가 차수 $h(D)$ 인 대수적 정수가 되어 힐베르트 류체를 생성한다.

# 활용

- **소수 생성 다항식.** $n^2+n+41$ 은 $n=0,\dots,39$ 에서 모두 소수다. Rabinowitz 의 판정은 $n^2+n+k$ 가 $n=0,\dots,k-2$ 에서 모두 소수인 것과 $h(1-4k)=1$ 이 동치라는 것이고, $k=41$ 이 판별식 $-163$ 에 해당한다.
- **원주율 급수.** Chudnovsky 형제의 급수는 $640320^3$ 을 분모에 쓰고 항마다 십진수 14 자리를 얻는다. 수렴이 빠른 이유가 $e^{\pi\sqrt{163}}$ 의 정수 근접성이다.
- **허수 곱셈과 류체.** Heegner 수는 허이차체의 힐베르트 류체가 그 체 자신인 경우다. 류체론의 명시적 구성에서 $j$ 의 특이값이 생성원이 된다.
- **타원곡선의 계수.** 판별식이 Heegner 수인 허수 곱셈 타원곡선은 유리수체 위에 정의되고, 그 개수가 유한한 이유가 이 목록이다.

[^1]: C. F. Gauss, *Disquisitiones Arithmeticae* (1801), 303 항. Gauss 는 이진형식의 유형수로 적었고 판별식 규약이 지금과 다르다.
[^2]: H. Heilbronn, "On the class-number in imaginary quadratic fields", Quart. J. Math. 5 (1934), 150–160.
[^3]: K. Heegner, "Diophantische Analysis und Modulfunktionen", Math. Z. 56 (1952), 227–253.
[^4]: A. Baker, "Linear forms in the logarithms of algebraic numbers I", Mathematika 13 (1966), 204–216. H. M. Stark, "A complete determination of the complex quadratic fields of class-number one", Michigan Math. J. 14 (1967), 1–27.
[^5]: D. Goldfeld, "The class number of quadratic fields and the conjectures of Birch and Swinnerton-Dyer", Ann. Scuola Norm. Sup. Pisa 3 (1976), 624–663. B. Gross, D. Zagier, "Heegner points and derivatives of L-series", Invent. Math. 84 (1986), 225–320.
[^6]: M. Watkins, "Class numbers of imaginary quadratic fields", Math. Comp. 73 (2004), 907–938.

# 연관 문서

## 선수지식

- [대수적 수체](algebraic-number-fields.md)
- [Baker 정리](baker-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #complex_analysis
