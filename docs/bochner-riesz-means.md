# Bochner–Riesz 평균

# 개요

**Bochner–Riesz 평균(Bochner–Riesz means)** 은 함수의 [Fourier 변환](fourier-transform.md)을 반지름 $R$ 의 공 안에서 잘라 되돌릴 때, 공의 경계에서 날카롭게 자르지 않고 $(1-\lvert\xi\rvert^2/R^2)^\delta$ 의 무게로 부드럽게 줄여 되돌린 함수다. 소리 신호에서 높은 주파수를 버리고 남은 주파수만으로 신호를 다시 만들면, 버리는 기준을 높일수록 원래 신호에 가까워질 것으로 기대한다. 한 변수에서는 그렇지만, 평면에서 원판 밖의 주파수를 날카롭게 버리면 $L^p$ 에서 원래 함수로 돌아가지 않는 함수가 있다.

경계를 얼마나 부드럽게 깎아야 되돌림이 수렴하는지를 지수 $\delta$ 로 잰다. $\delta$ 가 $(n-1)/2$ 보다 크면 모든 $L^p$ 에서 수렴하고, 그보다 작을 때의 경계는 [Kakeya 극대함수](kakeya-maximal-function.md)의 문제와 이어진다.

# 직관

되돌린 함수는 원래 함수 $f$ 와 핵 $K\_R(x)=R^nK(Rx)$ 의 합성곱이다. $K$ 는 잘라 낸 무게 함수 $m(\xi)$ 의 Fourier 역변환이다. $\int\lvert K\rvert\lt\infty$ 이면 다음이 성립하고, 매끄러운 함수로 근사하는 논법으로 $f\ast K\_R\to f$ 가 모든 $L^p$ 에서 나온다.

$$
\Vert f\ast K\_R\Vert\_p\le\Vert K\Vert\_1\Vert f\Vert\_p
$$

한 변수에서 $\lbrack-1,1\rbrack$ 밖을 날카롭게 버리면 $m$ 은 구간의 지시함수이고, 핵은 다음과 같다.

$$
K(x)=\frac{\sin 2\pi x}{\pi x}
$$

이 핵은 $1/\lvert x\rvert$ 처럼 줄어들어 절댓값의 적분이 발산한다. 경계를 $m(\xi)=(1-\xi^2)\_+$ 로 깎으면 핵이 $1/x^2$ 처럼 줄어들어 적분이 유한하다.

$n$ 변수에서 공의 지시함수를 쓰면 핵은 $\lvert x\rvert^{-(n+1)/2}$ 의 크기로 진동하며 줄어든다. 무게 $(1-\lvert\xi\rvert^2)\_+^\delta$ 를 쓰면 지수가 $\delta$ 만큼 커진다. $\mathbb R^n$ 에서 $\lvert x\rvert^{-a}$ 가 무한원 근처에서 적분 가능한 것은 $a\gt n$ 일 때이므로, $(n+1)/2+\delta\gt n$, 곧 $\delta\gt(n-1)/2$ 이면 핵이 적분 가능하다.

# 정의

$\delta\ge0$ 과 $R\gt 0$ 에 대해 다음 작용소를 **Bochner–Riesz 평균** 이라 한다.

$$
S\_R^\delta f(x)=\int\_{\mathbb R^n}\Bigl(1-\frac{\lvert\xi\rvert^2}{R^2}\Bigr)\_+^\delta\thinspace\hat f(\xi)\thinspace e^{2\pi ix\cdot\xi}\thinspace d\xi
$$

$(t)\_+=\max(t,0)$ 이다. $\delta=0$ 이면 공 밖을 날카롭게 버리는 **공 곱셈자(ball multiplier)** 다. $\delta=(n-1)/2$ 를 **임계 지수(critical index)** 라 한다. 직관 절의 한 변수 예에서 $\delta=0$ 과 $\delta=1$ 을 비교했고, 임계 지수는 $0$ 이다.

# 성질

## 임계 지수 위

$\delta\gt(n-1)/2$ 이면 핵이 적분 가능하므로 $S\_R^\delta$ 는 모든 $1\le p\le\infty$ 에서 $L^p$ 위의 유계 작용소이고, $R\to\infty$ 에서 $S\_R^\delta f\to f$ 가 $L^p$ 노름으로 성립한다($1\le p\lt\infty$).

## 한 변수의 공 곱셈자

$n=1$, $\delta=0$ 이면 핵은 적분 가능하지 않지만 $1\lt p\lt\infty$ 에서 $S\_R^0$ 은 $L^p$ 에서 유계다(M. Riesz). 구간의 지시함수는 두 반직선의 지시함수의 차이고, 반직선 곱셈자는 Hilbert 변환(Hilbert transform)으로 적히며 Hilbert 변환은 $1\lt p\lt\infty$ 에서 유계이기 때문이다.

## Fefferman 의 공 곱셈자 정리

$n\ge2$ 이면 공 곱셈자 $S\_1^0$ 은 $p\ne2$ 인 어떤 $L^p$ 에서도 유계가 아니다(Fefferman 1971)[^1]. 증명은 [Kakeya 바늘 문제](kakeya-needle-problem.md)의 Besicovitch 집합을 쓴다. 넓이가 작은 집합 안에 여러 방향의 긴 직사각형을 겹쳐 놓고, 공의 경계 근처에서 각 직사각형의 방향에 맞는 반평면 곱셈자를 모으면 유계성과 모순이 생긴다.

## Bochner–Riesz 추측

$0\lt\delta\le(n-1)/2$ 에서 다음 진술을 Bochner–Riesz 추측(Bochner–Riesz conjecture)이라 한다. $S\_1^\delta$ 가 $L^p(\mathbb R^n)$ 에서 유계인 것은 다음과 동치다.

$$
\Bigl\lvert\frac1p-\frac12\Bigr\rvert\lt\frac{2\delta+1}{2n}
$$

이 범위 밖에서 유계가 아니라는 것은 핵의 감소 속도에서 증명된다. $n=2$ 에서는 추측이 증명되었다(Carleson–Sjölin 1972)[^2]. 이 추측은 Fourier 제한 추측(restriction conjecture)을 함의하고(Tao 1999)[^3], 제한 추측은 Kakeya 극대함수에 대한 추측을 함의한다.

# 활용

- 여러 변수 Fourier 적분의 수렴. 원판이나 공으로 자른 부분 적분이 $L^p$ 에서 수렴하지 않으므로, 여러 변수의 Fourier 역변환은 Bochner–Riesz 평균이나 Gauss 무게로 정의한다.
- 다중 [Fourier 급수](fourier-series.md). 같은 문제가 격자점의 공 안 부분합에서 생기고, 한 변수의 [Fejér 핵](fejer-kernel.md)이 하는 역할을 Bochner–Riesz 평균이 한다.
- [Kakeya 극대함수](kakeya-maximal-function.md)와 Fourier 제한 추측. 세 추측이 같은 기하학적 어려움, 곧 여러 방향의 가는 관이 얼마나 겹칠 수 있는지에서 나온다.

[^1]: C. Fefferman, "The multiplier problem for the ball", *Annals of Mathematics* 94 (1971), 330–336.
[^2]: L. Carleson and P. Sjölin, "Oscillatory integrals and a multiplier problem for the disc", *Studia Mathematica* 44 (1972), 287–299.
[^3]: T. Tao, "The Bochner–Riesz conjecture implies the restriction conjecture", *Duke Mathematical Journal* 96 (1999), 363–375.

# 연관 문서

## 선수지식

- [Fourier 변환](fourier-transform.md)
- [Kakeya 극대함수](kakeya-maximal-function.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #measure_theory
