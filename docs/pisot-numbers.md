# Pisot 수

# 개요

**Pisot 수(Pisot number)** 는 $1$ 보다 큰 실수인 대수적 정수 가운데 나머지 켤레가 모두 단위원 안에 있는 수다. 황금비 $\varphi=1.618\ldots$ 의 거듭제곱을 계산하면 $\varphi^{10}=122.99187\ldots$, $\varphi^{11}=199.00502\ldots$ 처럼 정수에 점점 가까워진다. 무리수의 거듭제곱이 왜 정수 쪽으로 몰리는지가 물음이다.

$\varphi$ 의 켤레 $-1/\varphi$ 는 절댓값이 $1$ 보다 작아 거듭제곱이 $0$ 으로 간다. 두 거듭제곱의 합은 정수이므로 $\varphi^n$ 과 가장 가까운 정수의 거리는 $(1/\varphi)^n$ 이하로 줄어든다. Pisot 수는 이 논증이 그대로 통하는 수다.

# 직관

$\varphi=(1+\sqrt 5)/2$ 는 $x^2-x-1$ 의 근이고 다른 근은 $\psi=(1-\sqrt 5)/2=-0.618\ldots$ 이다. $L\_n=\varphi^n+\psi^n$ 은 $L\_0=2$, $L\_1=1$ 이고 $L\_{n+1}=L\_n+L\_{n-1}$ 을 만족하므로 모두 정수다. $L\_{10}=123$, $L\_{11}=199$ 이다.

$\vert\psi\vert\lt 1$ 이므로 $\varphi^n=L\_n-\psi^n$ 과 정수 $L\_n$ 의 거리 $\vert\psi\vert^n$ 은 $0$ 으로 간다. $\psi^{10}=0.00813\ldots$ 이 개요의 $\varphi^{10}$ 이 $123$ 보다 모자란 양이다.

$\sqrt 2$ 는 그렇지 않다. 켤레가 $-\sqrt 2$ 로 절댓값이 $1$ 보다 크고, $\sqrt 2^{n}$ 은 $n$ 이 짝수일 때 정수, 홀수일 때 정수에 $\sqrt 2$ 를 곱한 값이어서 정수와의 거리가 $0$ 으로 가지 않는다. 거듭제곱이 정수로 몰리는 것은 켤레가 모두 단위원 안에 있을 때다.

# 정의

$\theta\gt 1$ 이 실수인 대수적 정수이고 그 최소다항식의 다른 근이 모두 $\vert\cdot\vert\lt 1$ 이면 $\theta$ 를 **Pisot 수** 라 한다. Pisot–Vijayaraghavan 수(Pisot–Vijayaraghavan number)라고도 한다. $\varphi$, $1+\sqrt 2$ (켤레 $-0.414\ldots$), 그리고 $2$ 이상의 정수가 Pisot 수다.

$\tau\gt 1$ 이 실수인 대수적 정수이고 다른 켤레가 모두 $\vert\cdot\vert\le 1$ 이며 그 가운데 적어도 하나가 $\vert\cdot\vert=1$ 이면 $\tau$ 를 **Salem 수(Salem number)** 라 한다. [Mahler 측도](mahler-measure.md)의 Lehmer 다항식의 근 $1.17628\ldots$ 은 Salem 수다.

$\Vert x\Vert$ 는 실수 $x$ 와 가장 가까운 정수 사이의 거리다. $\Vert\varphi^{10}\Vert=0.00813\ldots$ 이다.

# 성질

## 거듭제곱과 정수의 거리

$\theta$ 가 차수 $d$ 인 Pisot 수이고 켤레가 $\theta\_2,\dots,\theta\_d$ 이면 $n$ 제곱의 합 $\theta^n+\sum\_{k\ge 2}\theta\_k^n$ 은 근들의 대칭식이므로 정수다. 그러므로 다음이 성립하고, 우변은 지수적으로 $0$ 에 간다.

$$
\Vert\theta^n\Vert\le\sum_{k=2}^{d}\vert\theta\_k\vert^n
$$

역으로 다음 정리가 있다(Pisot 정리, Pisot's theorem). 대수적 수 $\theta\gt 1$ 과 실수 $\lambda\neq 0$ 이 $\sum\_n\Vert\lambda\theta^n\Vert^2\lt\infty$ 를 만족하면 $\theta$ 는 Pisot 수다[^1].

## Mahler 측도

Pisot 수와 Salem 수의 켤레는 $\theta$ 자신만 단위원 밖에 있으므로 Mahler 측도가 $M(\theta)=\theta$ 다. Salem 수의 최소다항식은 상반 다항식이고, 차수는 $4$ 이상의 짝수다. 켤레 $\tau$ 가 단위원 위의 켤레 $\omega$ 를 가지면 $1/\omega=\bar\omega$ 도 켤레이고, 이로부터 $1/\tau$ 도 켤레가 되기 때문이다.

## 가장 작은 Pisot 수

가장 작은 Pisot 수는 $x^3-x-1$ 의 실근 $\theta\_0=1.3247\ldots$ 이다(Siegel, 1944)[^2]. 그 켤레 둘은 절댓값이 $\theta\_0^{-1/2}=0.8688\ldots$ 인 복소수다. Smyth 정리는 상반이 아닌 정수 계수 다항식의 Mahler 측도가 $\theta\_0$ 이상임을 말하므로, 하한 $\theta\_0$ 은 Pisot 수에서 이루어진다.

## Pisot 수 집합의 위상

Pisot 수 전체의 집합 $S$ 는 실수직선의 닫힌집합이다(Salem, 1944)[^1]. 모든 Pisot 수는 Salem 수열의 극한이다. $S$ 의 가장 작은 극한점은 황금비 $\varphi$ 다(Dufresnoy, Pisot, 1955).

# 활용

- 동전 던지기로 만든 확률변수 $\sum\_{n\ge 0}\pm\lambda^n$ ($1/2\lt\lambda\lt 1$, 부호는 독립이고 반반)의 분포를 Bernoulli 합성곱(Bernoulli convolution)이라 한다. $1/\lambda$ 가 Pisot 수이면 이 분포는 Lebesgue 측도에 대해 특이하다(Erdős, 1939). 증명은 [Fourier 변환](fourier-transform.md)이 $\Vert\theta^n\Vert\to 0$ 때문에 무한대에서 $0$ 으로 가지 않음을 보인다.
- 밑이 $\beta\gt 1$ 인 실수 진법($\beta$-전개)에서 $\beta$ 가 Pisot 수이면 $\mathbb Q(\beta)\cap\lbrack 0,1)$ 의 원소의 전개가 결국 주기적이다(Bertrand, Schmidt).
- 치환 규칙으로 만든 타일링과 준결정에서, 늘임 배율이 Pisot 수이면 회절 무늬가 점 성분을 갖는다. $\varphi$ 를 배율로 하는 Fibonacci 치환 $a\to ab$, $b\to a$ 가 그 예이고, 단어 길이가 [Fibonacci 수](fibonacci-numbers.md)다.

[^1]: R. Salem, *Algebraic Numbers and Fourier Analysis*, D. C. Heath, 1963, 1 장과 5 장 — Pisot 정리, 집합 S 의 닫힘과 극한점, Salem 수.
[^2]: C. L. Siegel, "Algebraic integers whose conjugates lie in the unit circle", *Duke Math. J.* 11 (1944), 597–602.

# 연관 문서

## 선수지식

- [Mahler 측도](mahler-measure.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #measure_theory
