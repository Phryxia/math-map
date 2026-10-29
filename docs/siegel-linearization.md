# Siegel 선형화 정리

# 개요

**Siegel 선형화 정리(Siegel linearization theorem)** 는 고정점 근처에서 회전처럼 보이는 정칙함수가, 회전각이 유리수로 잘 근사되지 않으면 좌표를 바꿔 정확히 회전으로 만들 수 있다는 정리다. $f(z)=\lambda z+z^2$ 에서 $\lvert\lambda\rvert=1$ 이면 $0$ 바로 근처에서 $f$ 는 회전과 거의 같지만, 항 $z^2$ 때문에 궤도가 $0$ 근처의 닫힌 곡선에 계속 머무는지는 바로 알 수 없다. 좌표 변환을 멱급수로 풀면 계수에 $\lambda^n-1$ 꼴의 분모가 나오는데, Siegel 은 $\lambda=e^{2\pi i\theta}$ 의 $\theta$ 가 [Diophantine 근사](diophantine-approximation.md)에서 근사 지수가 유한한 수이면 이 분모가 너무 작아지지 않아 멱급수가 수렴함을 보였다.

# 직관

Siegel 선형화 정리는 고정점의 승수가 $\lambda=e^{2\pi i\theta}$ 이고 $\theta$ 가 Diophantine 수인 정칙함수가 그 고정점 근처에서 회전 $w\mapsto\lambda w$ 와 등각 공액이라는 정리다. Siegel 이 1942 년에 증명했다.[^1]

[Fatou 성분의 분류](fatou-components.md)에 나오는 Siegel 원판이 실제로 존재한다는 것이 이 정리에서 나온다. 공액 사상의 멱급수에 $\lambda^n-1$ 꼴의 분모가 나오고, 그 분모가 얼마나 작아지는지를 Diophantine 근사의 근사 지수가 정한다.

$f(z)=\lambda z+z^2$ 이고 $\vert\lambda\vert=1$ 이라 한다. $0$ 은 고정점이고 $f'(0)=\lambda$ 이므로, $0$ 바로 근처에서 $f$ 는 원점을 중심으로 한 회전과 거의 같다. 궤도가 $0$ 근처의 닫힌 곡선에 계속 머무는지 알고 싶다. 좌표를 바꿔 $f$ 가 정확히 회전이 되게 할 수 있으면 궤도는 그 좌표의 원 위를 돈다.

$h(w)=w+b_2w^2+b_3w^3+\cdots$ 로 놓고 $f(h(w))=h(\lambda w)$ 가 되도록 계수를 정한다. $w^2$ 의 계수를 비교하면 왼쪽은 $\lambda b_2+1$, 오른쪽은 $\lambda^2b_2$ 이므로 $b_2=1/(\lambda^2-\lambda)$ 다. $w^n$ 의 계수를 비교하면 $b_n(\lambda^n-\lambda)$ 가 앞서 정한 $b_2,\dots,b_{n-1}$ 로 이루어진 식과 같아지고, $b_n$ 을 구하려면 $\lambda^n-\lambda=\lambda(\lambda^{n-1}-1)$ 로 나눈다.

$\theta=p/q$ 가 유리수이면 $\lambda^q=1$ 이어서 $n=q+1$ 에서 분모가 $0$ 이 되고 계산이 멈춘다. $\theta$ 가 [무리수](irrational-numbers.md)이면 분모는 $0$ 이 아니지만, $(n-1)\theta$ 가 정수에 가까울 때마다 $\vert\lambda^{n-1}-1\vert$ 가 작아지고 $b_n$ 이 커진다. 급수가 수렴하는지는 $\theta$ 가 유리수로 얼마나 잘 근사되는지에 달려 있다.

# 정의

## 선형화 가능성

$f$ 가 $0$ 근처에서 정칙이고 $f(0)=0$, $f'(0)=\lambda$ 라 한다. $0$ 근처에서 정칙이고 $h(0)=0$, $h'(0)=1$ 인 $h$ 가

$$
f(h(w))=h(\lambda w)
$$

를 만족하면 $f$ 가 $0$ 에서 **선형화 가능(linearizable)** 하다고 한다. 이 식을 **Schröder 방정식(Schröder's equation)** 이라 한다. $\lambda$ 를 고정점의 **승수(multiplier)** 라 하고, $\vert\lambda\vert=1$ 인 고정점을 **중립 고정점(indifferent fixed point)** 이라 한다.

## 작은 분모

직관 절의 계산에서 $b_n$ 을 구할 때 나누는 수 $\lambda^n-\lambda$ 를 **작은 분모(small divisor)** 라 한다. $\lambda=e^{2\pi i\theta}$ 이고 $\Vert x\Vert$ 를 $x$ 와 가장 가까운 정수의 거리라 하면

$$
4\Vert m\theta\Vert\le\vert\lambda^m-1\vert=2\vert\sin(\pi m\theta)\vert\le 2\pi\Vert m\theta\Vert
$$

이므로 $\vert\lambda^m-1\vert$ 의 크기는 $\Vert m\theta\Vert$ 의 크기와 상수배 차이다.

## Diophantine 수와 Brjuno 수

무리수 $\theta$ 가 상수 $c\gt 0$ 과 $\mu\ge 2$ 에 대해 모든 유리수 $p/q$ 에서

$$
\left\vert\theta-\frac pq\right\vert\ge\frac{c}{q^\mu}
$$

를 만족하면 $\theta$ 를 **Diophantine 수(Diophantine number)** 라 한다. 근사 지수가 유한한 무리수와 같은 뜻이다. [연분수](continued-fractions.md) 수렴분의 분모를 $q_k$ 라 할 때

$$
\sum_{k\ge 0}\frac{\log q_{k+1}}{q_k}\lt\infty
$$

인 무리수를 **Brjuno 수(Brjuno number)** 라 한다. Diophantine 수는 $q_{k+1}\le Cq_k^{\mu-1}$ 을 만족하므로 Brjuno 수다.

# 성질

## Koenigs 선형화 정리

> **정리.** $0\lt\vert\lambda\vert\lt 1$ 이면 $f$ 는 $0$ 에서 선형화 가능하다.

**Koenigs 선형화 정리(Koenigs linearization theorem)** 는 승수가 단위원 위에 있지 않은 경우다. $\varphi=\lim_{n\to\infty}\lambda^{-n}f^n$ 이 $0$ 근처에서 균등수렴하고 $\varphi\circ f=\lambda\varphi$ 를 만족하므로, 역함수 $h=\varphi^{-1}$ 이 Schröder 방정식의 해다. 작은 분모가 나타나지 않으므로 어려움은 $\vert\lambda\vert=1$ 인 경우에만 있다.

## Siegel 정리

> **정리 (Siegel 1942).** $\lambda=e^{2\pi i\theta}$ 이고 $\theta$ 가 Diophantine 수이면, $f(0)=0$, $f'(0)=\lambda$ 인 모든 정칙함수 $f$ 는 $0$ 에서 선형화 가능하다.

증명의 요지. 형식적 해 $h$ 의 계수 $b_n$ 은 작은 분모 여러 개의 곱으로 나눈 항들의 합이다. Diophantine 조건으로 $\vert\lambda^m-1\vert\ge c'm^{-(\mu-1)}$ 이 성립하지만, 이 하한만 곱하면 $\vert b_n\vert$ 의 상한이 $n$ 의 계승 꼴로 커져 수렴이 나오지 않는다. Siegel 은 한 곱에서 작은 분모가 동시에 매우 작아지는 횟수가 제한된다는 것을 세어, $\vert b_n\vert\le C^n$ 을 얻고 $h$ 의 수렴반지름이 양수임을 보였다.

Diophantine 수 전체는 $\lbrack 0,1\rbrack$ 에서 측도가 $1$ 이다. 차수 $d$ 인 대수적 무리수는 근사 지수가 $d$ 이하이므로 Diophantine 수다. 황금비 $(\sqrt5-1)/2$ 처럼 연분수의 몫이 유계인 수는 $\mu=2$ 에서 조건을 만족한다.

## Brjuno 조건과 Yoccoz 정리

> **정리 (Brjuno 1971).** $\theta$ 가 Brjuno 수이면 승수가 $e^{2\pi i\theta}$ 인 모든 정칙 고정점은 선형화 가능하다.[^2]

> **정리 (Yoccoz 1988).** 이차 다항식 $f(z)=e^{2\pi i\theta}z+z^2$ 이 $0$ 에서 선형화 가능한 것과 $\theta$ 가 Brjuno 수인 것은 동치다.[^3]

Yoccoz 정리로 이차 다항식에서는 Brjuno 조건보다 약한 조건이 선형화를 주지 못한다. 차수가 높은 다항식과 유리함수에서 Brjuno 조건이 필요조건인지는 Milnor 가 3판에서 열린 문제로 적었다.[^4]

## Cremer 의 반례

> **정리 (Cremer 1938).** 차수 $d\ge 2$ 유리함수 $f$ 의 고정점 승수 $\lambda$ 가 $\liminf_{q\to\infty}\vert\lambda^q-1\vert^{1/d^q}=0$ 을 만족하면 $f$ 는 그 고정점에서 선형화 가능하지 않다.

이 조건을 만족하는 $\lambda$ 는 단위원 위에서 조밀한 $G\_\delta$ 집합을 이룬다. 측도로는 거의 모든 $\theta$ 에서 선형화가 되고, Baire 범주로는 대부분의 $\theta$ 에서 되지 않는다. 선형화 가능하지 않은 중립 고정점을 **Cremer 점(Cremer point)** 이라 한다.

# 활용

## Siegel 원판의 존재

유리함수 $f$ 의 무리 회전수 중립 고정점 $z_0$ 에 대해, $f$ 가 $z_0$ 에서 선형화 가능한 것과 $z_0$ 이 [Julia 집합](julia-set.md)의 여집합인 Fatou 집합에 속하는 것은 동치다. 이때 $z_0$ 을 포함하는 Fatou 성분이 Siegel 원판이다. Siegel 정리로 $f(z)=e^{2\pi i\theta}z+z^2$ 은 $\theta$ 가 황금비일 때 Siegel 원판을 갖는다. Cremer 점은 Julia 집합에 속한다.

## Mandelbrot 집합의 경계

$z^2+c$ 의 고정점 승수가 $e^{2\pi i\theta}$ 가 되는 $c$ 는 [Mandelbrot 집합](mandelbrot-set.md)의 주 심장꼴의 경계 위에 있다. $\theta$ 가 무리수일 때, Yoccoz 정리로 $\theta$ 가 Brjuno 수이면 그 $c$ 에서 Siegel 원판이 생기고 아니면 Cremer 점이 생긴다.

## 작은 분모 문제

[Kolmogorov–Arnold–Moser 정리](kam-theorem.md)의 불변 토러스도 Diophantine 진동수에서 작은 분모가 있어도 좌표 바꾸기가 수렴함을 보이는 논법으로 증명된다. Siegel 정리가 이 논법이 성공한 첫 경우다. 원의 미분동형사상을 [Poincaré 회전수](poincare-rotation-number.md)의 회전으로 선형화하는 Arnold 정리와 Herman 정리도 같은 꼴이고, Fatou 성분의 Herman 환의 존재가 Herman 정리에서 나온다.

[^1]: C. L. Siegel, "Iteration of analytic functions", *Annals of Mathematics* 43 (1942), 607–612. 증명과 Koenigs, Cremer 정리의 서술은 J. Milnor, *Dynamics in One Complex Variable*, 3rd ed. (2006), §8, §11.

[^2]: A. D. Brjuno, "Analytic form of differential equations I", *Transactions of the Moscow Mathematical Society* 25 (1971), 131–288.

[^3]: J.-C. Yoccoz, "Théorème de Siegel, nombres de Bruno et polynômes quadratiques", *Astérisque* 231 (1995), 3–88.

[^4]: J. Milnor, *Dynamics in One Complex Variable*, 3rd ed. (2006), §11, Brjuno 정리와 Yoccoz 정리 뒤의 주석.

# 연관 문서

## 선수지식

- [Fatou 성분의 분류](fatou-components.md)
- [Diophantine 근사](diophantine-approximation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #number_theory #analysis #theorem
