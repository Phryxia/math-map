# Fourier 변환

# 개요

Fourier 변환은 실직선 위의 함수를 주파수의 함수로 바꾼다. 적분가능한 $f$ 에 $\hat f(\xi)=\int_{\mathbb R}f(x)e^{-2\pi i\xi x}\thinspace dx$ 를 대응시키고, 반전 공식이 $\hat f$ 에서 $f$ 를 되돌린다. [Fourier 급수](fourier-series.md)는 주기함수의 계수를 정수로 센 수열로 주는데, 사각 펄스처럼 주기가 없는 함수에는 그 수열이 없다. Fourier 변환은 수열 자리에 실수 변수의 함수를 놓고, 계수를 더하던 합 자리에 적분을 놓는다.

# 직관

사각 펄스 $f=\mathbf 1_{\lbrack -1,1\rbrack}$ 을 삼각함수로 분해하려고 한다. Fourier 급수는 주기함수에만 쓰이므로, $f$ 를 주기 $2L$ 로 되풀이한 함수 $f_L$ 의 계수를 구한다.

$$c_n(L)=\frac{1}{2L}\int_{-1}^{1}e^{-i\pi nx/L}\thinspace dx=\frac{\sin(\pi n/L)}{\pi n}$$

$L$ 을 키우면 계수마다 $0$ 으로 가고, 계수가 전부 사라져 분해가 남지 않는다.

계수가 $0$ 으로 가는 속도가 $1/L$ 이므로 $2L$ 을 곱한다. $\xi_n=n/(2L)$ 로 쓰면 다음이 나온다.

$$2Lc_n(L)=\frac{2\sin(\pi n/L)}{\pi n/L}=\frac{\sin(2\pi\xi_n)}{\pi\xi_n}$$

$L$ 에 무관한 함수 $g(\xi)=\sin(2\pi\xi)/(\pi\xi)$ 의 $\xi_n$ 에서의 값이다. 복원식 $f_L(x)=\sum_{n\in\mathbb Z}c_n(L)e^{2\pi i\xi_n x}$ 에 $c_n(L)=g(\xi_n)\Delta\xi$ 와 $\Delta\xi=1/(2L)$ 을 넣으면 $f_L(x)=\sum_{n\in\mathbb Z}g(\xi_n)e^{2\pi i\xi_n x}\thinspace\Delta\xi$ 다.

이 합은 간격 $\Delta\xi$ 의 Riemann 합이고, $L\to\infty$ 에서 $\int_{\mathbb R}g(\xi)e^{2\pi i\xi x}\thinspace d\xi$ 로 간다. $g$ 는 $f$ 에서 바로 나오는데, $\int_{-1}^{1}e^{-2\pi i\xi x}\thinspace dx=\sin(2\pi\xi)/(\pi\xi)$ 가 $g(\xi)$ 이기 때문이다. 계수를 구하던 적분이 $\xi$ 를 실수로 받는 함수를 주고, 계수를 더하던 합이 적분이 된다.

# 정의

## 변환과 역변환

$f\in L^1(\mathbb R)$ 의 **Fourier 변환**은 다음 함수다.

$$\hat f(\xi)=\int_{\mathbb R}f(x)e^{-2\pi i\xi x}\thinspace dx$$

$\xi\in\mathbb R$ 은 주파수다. $\vert e^{-2\pi i\xi x}\vert=1$ 이므로 $\vert\hat f(\xi)\vert\le\Vert f\Vert\_1$ 이고 적분이 모든 $\xi$ 에서 수렴한다. 부호를 바꾼 적분

$$f(x)=\int_{\mathbb R}\hat f(\xi)e^{2\pi i\xi x}\thinspace d\xi$$

을 **역변환**이라 하며, 이 등식이 성립하는 조건은 성질 절의 반전 공식이다.

## 규격

지수에 $2\pi$ 를 넣지 않고 $e^{-i\xi x}$ 로 쓰는 규격에서는 역변환과 Plancherel 정리에 $1/(2\pi)$ 와 $1/\sqrt{2\pi}$ 가 붙는다. 이 문서는 $e^{-2\pi i\xi x}$ 로 두어 두 식에 상수가 붙지 않게 한다.

## Schwartz 공간

$\mathcal S(\mathbb R)$ 은 매끄럽고 모든 도함수가 임의의 다항식의 역수보다 빨리 감소하는 함수의 모임이다. 조건은 모든 $m,k\ge 0$ 에 대해 $\sup_x\vert x^m f^{(k)}(x)\vert\lt\infty$ 다. $e^{-\pi x^2}$ 가 여기 들고, $\mathcal S(\mathbb R)\subset L^1(\mathbb R)\cap L^2(\mathbb R)$ 이다.

## $L^2$ 로의 확장

$L^2(\mathbb R)$ 의 함수는 적분가능하지 않을 수 있어 정의식이 수렴하지 않는다. $\mathcal S(\mathbb R)$ 이 $L^2(\mathbb R)$ 에서 조밀하고 변환이 그 위에서 $L^2$ 노름을 보존하므로, 변환은 $L^2(\mathbb R)$ 전체로 유일하게 확장된다. 확장된 변환은 $\int_{-R}^{R}f(x)e^{-2\pi i\xi x}\thinspace dx$ 의 $R\to\infty$ 에서의 $L^2$ 극한이다.

# 성질

## 반전 공식

**정리.** $f\in L^1(\mathbb R)$ 이고 $\hat f\in L^1(\mathbb R)$ 이면 거의 모든 $x$ 에서 $f(x)=\int_{\mathbb R}\hat f(\xi)e^{2\pi i\xi x}\thinspace d\xi$ 다.[^1]

증명의 요지. 오른쪽 적분에 $e^{-\pi\varepsilon^2\xi^2}$ 를 곱해 자르면 이중적분이 절대수렴하므로 Fubini 정리로 순서를 바꿀 수 있고, 그 결과는 $f$ 와 폭 $\varepsilon$ 인 Gauss 핵의 합성곱이다. $\varepsilon\to 0$ 에서 핵의 적분이 $1$ 로 유지되고 질량이 원점에 모이므로 합성곱이 $L^1$ 에서 $f$ 로 수렴한다.

## Plancherel 정리

**정리.** $f\in L^1(\mathbb R)\cap L^2(\mathbb R)$ 이면 $\Vert\hat f\Vert\_2=\Vert f\Vert\_2$ 이고, 변환은 $L^2(\mathbb R)$ 의 유니터리 작용소로 확장된다.

증명의 요지. $\tilde f(x)=\overline{f(-x)}$ 로 두고 $h=f\ast\tilde f$ 를 만들면 $\hat h=\vert\hat f\vert^2$ 이고, $h$ 는 연속이며 $h(0)=\Vert f\Vert\_2^2$ 다. $\hat h\ge 0$ 이므로 반전 공식을 $h$ 에 $x=0$ 에서 적용하면 $\int_{\mathbb R}\vert\hat f\vert^2=h(0)$ 이다. 유니터리성은 노름 보존과 반전 공식이 주는 전사성에서 따라온다.

## 합성곱 정리

**정리.** $f,g\in L^1(\mathbb R)$ 이고 $(f\ast g)(x)=\int_{\mathbb R}f(x-y)g(y)\thinspace dy$ 이면 $\widehat{f\ast g}=\hat f\hat g$ 다.

증명의 요지. 정의식에 넣고 Fubini 정리로 순서를 바꾼다. $e^{-2\pi i\xi x}=e^{-2\pi i\xi(x-y)}e^{-2\pi i\xi y}$ 가 지수를 두 조각으로 가르므로 적분이 두 변환의 곱으로 갈린다.

## 미분과 곱셈

$f$ 와 $f'$ 가 적분가능하면 $\widehat{f'}(\xi)=2\pi i\xi\hat f(\xi)$ 다. 부분적분에서 나오고, 경계항은 $f$ 가 무한에서 $0$ 으로 가기 때문에 사라진다. 반대로 $xf(x)$ 가 적분가능하면 $\hat f$ 가 미분가능하고 적분 안에서 미분해 $\frac{d}{d\xi}\hat f(\xi)=-2\pi i\widehat{xf}(\xi)$ 를 얻는다.

두 식으로 상수계수 미분작용소 $\sum_k a_k (d/dx)^k$ 가 다항식 $\sum_k a_k(2\pi i\xi)^k$ 를 곱하는 작용소가 된다. 또 두 식이 $\mathcal S(\mathbb R)$ 의 조건을 서로 맞바꾸므로 변환은 $\mathcal S(\mathbb R)$ 을 $\mathcal S(\mathbb R)$ 로 보내는 선형 동형이다.

## Riemann–Lebesgue 보조정리

**정리.** $f\in L^1(\mathbb R)$ 이면 $\hat f$ 는 유계 연속이고 $\vert\xi\vert\to\infty$ 에서 $0$ 으로 간다.

증명의 요지. 구간의 지시함수의 변환이 $\xi$ 의 역수 크기로 줄고, 그런 함수의 유한 선형결합이 $L^1$ 에서 조밀하다. $\Vert\hat f\Vert\_\infty\le\Vert f\Vert\_1$ 이므로 근사가 극한으로 넘어간다.

## Gauss 함수

$f(x)=e^{-\pi x^2}$ 의 변환은 $\hat f(\xi)=e^{-\pi\xi^2}$ 로 자기 자신이다. 미분과 곱셈의 두 식을 $f'(x)=-2\pi xf(x)$ 에 적용하면 $\hat f'(\xi)=-2\pi\xi\hat f(\xi)$ 이고, $\hat f(0)=\int_{\mathbb R}e^{-\pi x^2}\thinspace dx=1$ 이 초기조건을 준다.

## 평행이동과 늘림

| $f$ 에 한 연산 | $\hat f$ 에 생기는 변화 |
| --- | --- |
| $f(x-a)$ | $e^{-2\pi ia\xi}\hat f(\xi)$ |
| $e^{2\pi iax}f(x)$ | $\hat f(\xi-a)$ |
| $f(ax)$, $a\ne 0$ | $\hat f(\xi/a)/\vert a\vert$ |
| $\overline{f(-x)}$ | $\overline{\hat f(\xi)}$ |

늘림의 행이 폭과 주파수폭의 반비례를 준다. $a$ 를 키워 $f$ 를 좁히면 $\hat f$ 가 $\vert a\vert$ 배로 넓어진다.

# 활용

- **특성함수.** [특성함수](characteristic-functions.md)는 확률변수 $X$ 에 $\varphi(t)=\mathbb E e^{itX}$ 를 대응시키며, $X$ 의 분포가 밀도 $p$ 를 가지면 $\varphi$ 는 $p$ 의 Fourier 변환이다. 그 문서의 반전 공식이 여기 반전 공식의 규격만 바꾼 식이다.
- **완만 분포.** [Schwartz 분포](schwartz-distributions.md) 가운데 $\mathcal S(\mathbb R)$ 의 쌍대에 드는 것에는 $\widehat T(\varphi)=T(\hat\varphi)$ 로 변환이 확장된다. 변환이 $\mathcal S(\mathbb R)$ 의 선형 동형이라는 성질이 이 정의를 받친다.
- **Poisson 합 공식.** [Poisson 합 공식](poisson-summation.md)은 적당한 조건에서 $\sum_{n\in\mathbb Z}f(n)=\sum_{n\in\mathbb Z}\hat f(n)$ 을 준다. 격자 위의 합을 변환의 합으로 바꾸는 데 쓰인다.
- **Sobolev 공간.** [Sobolev 공간](sobolev-spaces.md)의 노름은 $\hat f$ 에 $(1+\vert\xi\vert^2)^{s/2}$ 를 곱한 $L^2$ 노름으로 쓸 수 있다. 미분이 곱셈으로 바뀌는 성질이 정수 $s$ 를 실수 $s$ 로 넓힌다.
- **상수계수 편미분방정식.** 열방정식 $\partial_t u=\partial_x^2u$ 에 $x$ 에 대한 변환을 적용하면 $\partial_t\hat u=-4\pi^2\xi^2\hat u$ 로 $\xi$ 마다 상미분방정식이 되고, 해 $\hat u(t,\xi)=e^{-4\pi^2\xi^2t}\hat u(0,\xi)$ 를 역변환하면 Gauss 핵과의 합성곱이 나온다.

[^1]: Elias M. Stein, Rami Shakarchi, *Fourier Analysis: An Introduction*, Princeton University Press, 2003, 5 장. 반전 공식과 Plancherel 정리의 증명이 여기 있다.

# 연관 문서

## 선수지식

- [Fourier 급수](fourier-series.md)
- [$L^p$ 공간](lp-spaces.md)

## 더 알아보기

- [불확정성 원리](uncertainty-principle.md)
- [특성함수](characteristic-functions.md)
- [Schwartz 분포](schwartz-distributions.md)

#analysis #functional_analysis #measure_theory #probability
