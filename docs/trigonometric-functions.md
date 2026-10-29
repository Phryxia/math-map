# 삼각함수

# 개요

**삼각함수(trigonometric function)** 는 단위원 위에서 각 $x$ 만큼 돈 점의 가로 좌표 $\cos x$ 와 세로 좌표 $\sin x$, 그리고 그 비다. $\sin 30^\circ=1/2$ 는 정삼각형을 반으로 접은 그림에서 읽히지만, $\sin 1$ 처럼 특별한 그림이 없는 각에서는 그림만으로 값을 소수 몇째 자리까지 구할 방법이 없다. 삼각함수를 덧셈과 곱셈만 쓰는 무한급수로 다시 정의하면 모든 각에서 값을 원하는 정확도로 계산하고 그 성질을 계산으로 증명할 수 있다.

# 직관

각을 호의 길이로 재는 단위에서, 그림으로부터 $\sin'=\cos$ 와 $\cos'=-\sin$ 이 나온다. $\sin 1$ 을 구하려고 이 두 식을 되풀이해 쓰면 $\sin$ 을 미분할 때마다 $\cos$, $-\sin$, $-\cos$, $\sin$ 이 차례로 돌아온다. $0$ 에서의 값은 $\sin 0=0$, $\cos 0=1$ 이므로 $\sin$ 의 $n$ 계 도함수의 $0$ 에서의 값은 $0,1,0,-1$ 이 되풀이된다.

그림이 주는 정보가 $0$ 에서의 도함수 값뿐이니, 그 값으로 [멱급수](power-series.md)를 만든다. Taylor 계수가 $0,1,0,-1$ 이 되풀이되므로 $\sin x=x-x^3/3!+x^5/5!-\cdots$ 이다. $x=1$ 에서 세 항까지 더하면 $1-1/6+1/120=0.84166\cdots$ 이고 실제 값 $0.84147\cdots$ 와의 차는 다음 항 $1/5040$ 보다 작다. 항을 더할수록 값이 정해지므로, 이 급수를 삼각함수의 정의로 삼고 그림은 정의에서 증명되는 성질로 돌린다.

# 정의

## 사인과 코사인

모든 [실수](real-numbers.md) $x$ 에서 다음 두 급수로 정한 함수를 **사인(sine)** 과 **코사인(cosine)** 이라 한다.

$$
\sin x=\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+1}}{(2n+1)!},\qquad \cos x=\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n}}{(2n)!}
$$

두 급수의 수렴반경은 무한이다. [복소수](complex-numbers.md)로 쓰면 $\cos x=(e^{ix}+e^{-ix})/2$, $\sin x=(e^{ix}-e^{-ix})/(2i)$ 이고, [지수함수](exponential-function.md)의 급수를 짝수 차 항과 홀수 차 항으로 나눈 것과 같다.

## 탄젠트와 역함수

$\cos x\ne0$ 인 곳에서 $\tan x=\sin x/\cos x$ 를 **탄젠트(tangent)** 라 한다. $\tan$ 는 $(-\pi/2,\pi/2)$ 에서 $\mathbb R$ 로 가는 증가 전단사이고, 그 역함수를 **아크탄젠트(arctangent)** $\arctan$ 라 한다. $\pi$ 는 아래 성질 절에서 정의한다.

# 성질

## 미분과 Pythagoras 항등식

항별 미분으로 $\sin'=\cos$, $\cos'=-\sin$ 이다. $h=\sin^2+\cos^2$ 로 두면 $h'=2\sin\cos-2\cos\sin=0$ 이고 $h(0)=1$ 이므로 모든 $x$ 에서 다음이 성립한다.

$$
\sin^2x+\cos^2x=1
$$

## 덧셈정리

**정리.** $f''=-f$ 인 함수는 $f(0)$ 과 $f'(0)$ 으로 정해지고, $f(x)=f(0)\cos x+f'(0)\sin x$ 다.

증명의 요지. 오른쪽과 $f$ 의 차를 $g$ 라 하면 $g''=-g$, $g(0)=g'(0)=0$ 이다. $E=g^2+g'^2$ 은 $E'=2gg'+2g'g''=0$ 이고 $E(0)=0$ 이므로 $g=0$ 이다.

$y$ 를 고정하고 $f(x)=\sin(x+y)$ 에 이 정리를 쓰면 $f(0)=\sin y$, $f'(0)=\cos y$ 이므로 다음이 나온다. $\cos(x+y)$ 의 공식은 이 식을 $x$ 로 미분해 얻는다.

$$
\sin(x+y)=\sin x\cos y+\cos x\sin y,\qquad \cos(x+y)=\cos x\cos y-\sin x\sin y
$$

## 원주율과 주기

$\cos 0=1$ 이고, $\cos 2$ 의 급수는 둘째 항부터 절댓값이 줄어드는 교대급수라 $\cos 2\lt 1-2+2/3=-1/3$ 이다. [중간값 정리](intermediate-value-theorem.md)로 $(0,2)$ 에 $\cos$ 의 영점이 있다. 가장 작은 양의 영점의 두 배를 **원주율(pi)** $\pi$ 라 정의한다.

Pythagoras 항등식에서 $\sin(\pi/2)=\pm1$ 이고 $(0,\pi/2)$ 에서 $\sin'=\cos\gt 0$ 이므로 $\sin(\pi/2)=1$ 이다. 덧셈정리에 넣으면 $\sin(x+\pi/2)=\cos x$, $\cos(x+\pi/2)=-\sin x$ 이고, 네 번 쓰면 $\sin(x+2\pi)=\sin x$, $\cos(x+2\pi)=\cos x$ 다.

## 단위원의 매개화

점 $\gamma(t)=(\cos t,\sin t)$ 는 Pythagoras 항등식으로 단위원 위에 있고, 속도 $\gamma'(t)=(-\sin t,\cos t)$ 의 크기는 $1$ 이다. 따라서 $t=0$ 에서 $t$ 까지 움직인 호의 길이는 $t$ 이고, 급수로 정의한 삼각함수가 처음의 그림과 같다. 단위원 한 바퀴의 길이는 $2\pi$ 다.

## 아크탄젠트 급수

$\arctan'x=1/(1+x^2)=\sum_{n\ge0}(-1)^nx^{2n}$ 이 $\vert x\vert\lt 1$ 에서 성립한다. 항별로 적분하면 다음이 나온다.

$$
\arctan x=x-\frac{x^3}3+\frac{x^5}5-\cdots
$$

$x=1$ 에서 오른쪽 급수가 수렴하므로 멱급수의 Abel 정리로 $\pi/4=1-1/3+1/5-\cdots$ 다. 이 식을 **Leibniz 급수(Leibniz series)** 라 한다.

# 활용

- [Fourier 급수](fourier-series.md)는 주기 $2\pi$ 인 함수를 $\cos nx$ 와 $\sin nx$ 의 합으로 쓰고, 계수 공식은 덧셈정리에서 나오는 직교성 $\int_0^{2\pi}\cos mx\cos nx\thinspace dx=0$ $(m\ne n)$ 을 쓴다.
- [복소수](complex-numbers.md)의 극형식 $r(\cos\theta+i\sin\theta)$ 에서 곱셈이 편각의 덧셈이라는 것은 덧셈정리다.
- [상미분방정식](ordinary-differential-equations.md)의 $y''=-\omega^2y$ 는 용수철에 매단 물체의 운동이고, 해는 $A\cos\omega t+B\sin\omega t$ 뿐이다.
- [쌍곡함수](hyperbolic-functions.md)는 $y''=y$ 에서 같은 일을 한 것이고, 항등식들이 부호 하나씩만 다르다.
- [Chebyshev 다항식](chebyshev-polynomials.md)은 $\cos n\theta$ 를 $\cos\theta$ 의 다항식으로 쓴 $T_n(\cos\theta)=\cos n\theta$ 이고, 덧셈정리에서 점화식 $T_{n+1}=2xT_n-T_{n-1}$ 이 나온다.

# 연관 문서

## 선수지식

- [멱급수](power-series.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #complex_analysis
