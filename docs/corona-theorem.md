# Corona 정리

# 개요

**Corona 정리(corona theorem)** 는 원판에서 유계인 정칙함수 $f_1,\dots,f_n$ 이 어디서도 한꺼번에 작아지지 않으면, 유계인 정칙함수 $g_1,\dots,g_n$ 이 있어 $f_1g_1+\cdots+f_ng_n=1$ 이 된다는 정리다. 다항식 $z^2$ 과 $(1-z)^2$ 은 공통 영점이 없어서 Euclid 호제법으로 $1$ 을 두 다항식의 결합으로 쓸 수 있는데, 유계 정칙함수는 영점이 무한히 많거나 경계 근처에서 작아질 수 있어 같은 계산이 되지 않는다. 이 정리는 두 함수의 절댓값의 합이 양의 하한을 가진다는 조건 하나로 그런 결합이 존재함을 보인다.

# 직관

다항식 $f_1=z^2$ 과 $f_2=(1-z)^2$ 은 공통 영점이 없다. 호제법을 따라가면 다음 결합이 나온다.

$$
z^2(3-2z)+(1-z)^2(1+2z)=1
$$

$g_1=3-2z$ 와 $g_2=1+2z$ 는 원판에서 유계이므로, 이 결합은 원판의 유계 정칙함수 사이의 결합이기도 하다.

결합이 있으면 $1\le\vert f_1\vert\vert g_1\vert+\vert f_2\vert\vert g_2\vert$ 이므로, $g_j$ 의 상계를 $M$ 이라 할 때 원판의 모든 점에서 $\vert f_1\vert+\vert f_2\vert\ge 1/M$ 이어야 한다. $f_1=\exp(-(1+z)/(1-z))$ 와 $f_2=1-z$ 는 원판 안에 영점이 없지만, $z$ 가 실수축을 따라 $1$ 로 다가가면 둘 다 $0$ 으로 간다. 그래서 이 두 함수로는 결합을 만들 수 없다.

[Hardy 공간](hardy-spaces.md)의 유계 함수에서는 공통 영점이 없다는 것만으로는 부족하고, 원판 전체에서 두 함수의 절댓값의 합이 양의 하한을 가져야 한다. Corona 정리는 이 필요조건이 충분조건이기도 하다는 것이다.

# 정의

$H^\infty$ 는 원판 $\mathbb D$ 에서 유계인 정칙함수의 집합이고, 노름 $\Vert f\Vert\_\infty=\sup_{\mathbb D}\vert f\vert$ 와 점별 곱으로 가환 [Banach 대수](banach-algebras.md)다. $f_1,\dots,f_n\in H^\infty$ 가 어떤 $\delta\gt 0$ 에 대해 다음을 만족하면 **corona 자료(corona data)** 라 한다.

$$
\vert f_1(z)\vert+\cdots+\vert f_n(z)\vert\ge\delta\qquad(z\in\mathbb D)
$$

직관 절의 $z^2$ 과 $(1-z)^2$ 은 corona 자료이고, $\exp(-(1+z)/(1-z))$ 와 $1-z$ 는 아니다.

$H^\infty$ 에서 $\mathbb C$ 로 가는 $0$ 이 아닌 곱셈적 선형 범함수 전체를 $\mathfrak M$ 이라 하고, Gelfand 위상을 준 이 공간을 $H^\infty$ 의 **극대 아이디얼 공간(maximal ideal space)** 이라 한다. 점 $z\in\mathbb D$ 에서의 값 $f\mapsto f(z)$ 가 $\mathfrak M$ 의 원소이므로 $\mathbb D$ 는 $\mathfrak M$ 안에 들어 있다. $\mathfrak M$ 에서 $\mathbb D$ 의 닫힘을 뺀 나머지를 **corona** 라 한다.

# 성질

## Corona 정리

$f_1,\dots,f_n$ 이 $\delta$ 를 하한으로 갖는 corona 자료이고 $\Vert f_j\Vert\_\infty\le 1$ 이면, $\sum_j f_jg_j=1$ 을 만족하고 $\Vert g_j\Vert\_\infty$ 가 $n$ 과 $\delta$ 만으로 정해지는 상계를 갖는 $g_j\in H^\infty$ 가 있다.[^1] Carleson 이 1962 년에 증명했다.

## 극대 아이디얼 공간에서의 진술

Corona 정리는 $\mathbb D$ 가 $\mathfrak M$ 에서 조밀하다는 것, 곧 corona 가 공집합이라는 것과 동치다. corona 자료가 결합 $\sum f_jg_j=1$ 을 갖지 않으면 $f_1,\dots,f_n$ 이 생성하는 아이디얼이 전체가 아니므로 어떤 극대 아이디얼에 들어 있다. 그 극대 아이디얼의 지표 $\varphi$ 는 모든 $f_j$ 에서 $0$ 이지만, $\mathbb D$ 의 점에서의 값은 $\sum\vert f_j\vert\ge\delta$ 를 만족하므로 $\varphi$ 는 $\mathbb D$ 의 닫힘 밖에 있다. 반대 방향도 같은 논증을 뒤집어 얻는다.

## 증명의 요지

$n=2$ 일 때 Wolff 의 증명은 다음과 같다.[^2] 먼저 $\varphi_j=\bar f_j/(\vert f_1\vert^2+\vert f_2\vert^2)$ 로 두면 $f_1\varphi_1+f_2\varphi_2=1$ 이지만 $\varphi_j$ 는 정칙이 아니다. $b$ 를 미지의 함수로 두고 다음처럼 고친다.

$$
g_1=\varphi_1+bf_2,\qquad g_2=\varphi_2-bf_1
$$

그러면 $f_1g_1+f_2g_2=1$ 이 그대로 유지되고, $g_j$ 가 정칙이려면 $b$ 가 $\bar\partial b=\varphi_1\thinspace\bar\partial\varphi_2-\varphi_2\thinspace\bar\partial\varphi_1$ 를 만족해야 한다. 이 $\bar\partial$ 방정식이 경계에서 유계인 해를 갖는다는 것을 Carleson 측도(Carleson measure)의 판정으로 보이는 것이 증명의 중심이다.

# 활용

- [보간 수열](interpolating-sequences.md). Carleson 은 corona 정리에 앞서 원판의 수열 $z_k$ 에 대해 임의의 유계 수열 $w_k$ 를 값으로 갖는 $f\in H^\infty$, $f(z_k)=w_k$ 가 항상 존재할 조건을 구했다. 이 조건이 [Blaschke 곱](blaschke-products.md)의 영점이 서로 충분히 떨어져 있다는 조건이고, corona 정리의 증명에 쓰인다.
- 연산자 이론. $H^\infty$ 의 함수를 곱하는 연산자를 Hardy 공간 $H^2$ 위에서 보면, corona 정리는 곱셈 연산자들의 행이 오른쪽 역을 갖는 조건을 준다. 이 판정은 제어 이론에서 전달 함수의 분해에 쓰인다.
- 다른 영역. 유한 연결 평면 영역에서는 같은 정리가 성립한다. 다변수의 단위공 $\mathbb B^n$ 과 다원판 $\mathbb D^n$ ($n\ge 2$) 에서는 corona 문제가 열린 문제로 알려져 있다.[^3]

[^1]: L. Carleson, "Interpolations by bounded analytic functions and the corona problem", Annals of Mathematics 76 (1962).
[^2]: J. B. Garnett, Bounded Analytic Functions, revised 1st ed., Springer (2007), 8 장.
[^3]: J. B. Garnett, Bounded Analytic Functions, revised 1st ed., Springer (2007), 8 장 끝의 주석.

# 연관 문서

## 선수지식

- [Hardy 공간](hardy-spaces.md)
- [Banach 대수](banach-algebras.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #functional_analysis #analysis
