# Bessel 함수

# 개요

**Bessel 함수(Bessel function)** 는 원형으로 대칭인 진동과 확산을 풀 때 반지름 방향에 나타나는 함수다. 사각형 북면의 진동수는 변의 방향마다 변수를 나눠 $\sin$ 함수로 구한다. 원형 북면에서 극좌표로 변수를 나누면 반지름 방향에 계수가 $r$ 에 따라 바뀌는 방정식이 남고, 그 해는 [삼각함수](trigonometric-functions.md)나 [지수함수](exponential-function.md)로 적히지 않는다. Bessel 함수는 이 방정식의 해를 무한급수로 정의하고, 그 영점의 위치로 원형 북면의 진동수를 정한다.

# 직관

Bessel 함수는 Bessel 방정식 $x^2y''+xy'+(x^2-\nu^2)y=0$ 의 해다. 원통 대칭인 영역에서 [Laplace 연산자](laplace-operator.md)를 극좌표로 쓰고 변수를 분리하면 반지름 방향에 이 방정식이 남는다. 계수가 변수에 의존하므로 해가 삼각함수나 지수함수로 적히지 않고, [멱급수](power-series.md)로 정의한 새 함수가 필요하다.

차수 $\nu$ 를 고정하면 해는 두 개의 일차독립인 함수로 생성된다. 원점에서 유계인 쪽이 제1종 $J_\nu$ 이고 발산하는 쪽이 제2종 $Y_\nu$ 다.

반지름 $a$ 인 원형 북면이 낼 수 있는 진동수를 구하려 한다. 사각형 막이라면 두 변의 방향으로 변수를 분리해 각 방향에서 $\sin(n\pi x/L)$ 을 얻고, 진동수는 $\sqrt{(n/L_1)^2+(m/L_2)^2}$ 의 정수 조합으로 전부 나온다.

원판에서는 극좌표를 쓴다. [파동방정식](wave-equation.md) $\partial_t^2u=\Delta u$ 의 해를 $u=R(r)\Theta(\theta)T(t)$ 로 놓으면 각 방향은 한 바퀴 돌아 제자리로 와야 하므로 $\Theta(\theta)=\cos m\theta$ 이고 $m$ 은 정수다. 시간 방향은 $T(t)=\cos\omega t$ 다. 남은 반지름 방향은 다음과 같다.

$$
r^2R''+rR'+(\omega^2r^2-m^2)R=0
$$

$\sin$ 과 $\cos$ 을 넣어 보면 $r^2$ 과 $r$ 이 붙은 항이 서로 소거되지 않는다. 계수가 $r$ 에 따라 달라지므로 사각형에서 쓴 함수가 해가 되지 않는다.

$x=\omega r$ 로 변수를 바꾸면 $\omega$ 가 식에서 사라지고 $x^2y''+xy'+(x^2-m^2)y=0$ 만 남는다. 해를 $y=\sum\_{k\ge 0}c_kx^{k+m}$ 꼴로 놓고 계수를 맞추면 $c_k$ 가 $k$ 에 대한 점화식으로 하나씩 정해진다. 이렇게 얻은 급수가 $J_m$ 이고, 원점에서 유계인 해는 상수배를 빼면 이것뿐이다.

북면의 테두리는 고정되어 있으므로 $R(a)=J_m(\omega a)=0$ 이다. 따라서 진동수 $\omega$ 는 $J_m$ 의 영점 $\alpha_{mk}$ 를 $a$ 로 나눈 값만 가질 수 있다. 영점의 간격이 큰 $x$ 에서 $\pi$ 에 가까워지지만 정확히 $\pi$ 는 아니어서, 원형 북면의 진동수는 사각형 막과 달리 정수비를 이루지 않는다.

# 정의

## Bessel 방정식

차수 $\nu$ 의 **Bessel 방정식(Bessel's equation)** 은 다음 2계 선형 [상미분방정식](ordinary-differential-equations.md)이다.

$$
x^2y''+xy'+(x^2-\nu^2)y=0
$$

이 방정식은 $x=0$ 에서 정칙 특이점을 가지며 $p(x)=x$, $q(x)=x$, $w(x)=x$ 로 [Sturm–Liouville 이론](sturm-liouville.md)의 꼴 $(xy')'+(x-\nu^2/x)y=0$ 으로 쓰인다.

## 제1종과 제2종

**제1종 Bessel 함수(Bessel function of the first kind)** 는 다음 급수다.

$$
J_\nu(x)=\sum_{k=0}^{\infty}\frac{(-1)^k}{k!\thinspace\Gamma(k+\nu+1)}\left(\frac x2\right)^{2k+\nu}
$$

여기서 $\Gamma$ 는 [감마 함수](gamma-function.md)다. 급수는 모든 $x\gt 0$ 에서 수렴하고 $\nu\ge 0$ 이면 $x\to 0$ 에서 유계다.

$\nu$ 가 정수가 아니면 $J_{-\nu}$ 가 $J_\nu$ 와 일차독립이다. 정수 $n$ 에서는 $J_{-n}=(-1)^nJ_n$ 이므로 두 번째 해를 따로 만든다. **제2종 Bessel 함수(Bessel function of the second kind)** 는 다음 극한이다.

$$
Y_\nu(x)=\lim_{\mu\to\nu}\frac{J_\mu(x)\cos\mu\pi-J_{-\mu}(x)}{\sin\mu\pi}
$$

$Y_\nu$ 는 $x\to 0^+$ 에서 발산한다. $\nu=0$ 이면 $Y_0(x)\sim(2/\pi)\log x$ 다.

## 변형 Bessel 함수

$x$ 를 $ix$ 로 바꾼 방정식 $x^2y''+xy'-(x^2+\nu^2)y=0$ 의 해가 **변형 Bessel 함수(modified Bessel function)** 다.

$$
I_\nu(x)=i^{-\nu}J_\nu(ix),\qquad K_\nu(x)=\frac\pi2\cdot\frac{I_{-\nu}(x)-I_\nu(x)}{\sin\nu\pi}
$$

$I_\nu$ 는 $x\to\infty$ 에서 지수적으로 커지고 $K_\nu$ 는 지수적으로 작아진다.

## 적분표현

정수 차수에서 $J_n$ 은 다음 적분으로도 적힌다.

$$
J_n(x)=\frac1{2\pi}\int_{-\pi}^{\pi}e^{i(n\tau-x\sin\tau)}\thinspace d\tau
$$

일반 차수에서는 다음 표현을 쓴다.

$$
J_\nu(x)=\frac{(x/2)^\nu}{\Gamma(\nu+\frac12)\Gamma(\frac12)}\int_{-1}^{1}(1-t^2)^{\nu-1/2}\cos(xt)\thinspace dt\qquad(\nu\gt -1/2)
$$

# 성질

## 점화식

인접한 세 차수가 다음 관계를 만족한다.

$$
J_{\nu-1}(x)+J_{\nu+1}(x)=\frac{2\nu}xJ_\nu(x),\qquad J_{\nu-1}(x)-J_{\nu+1}(x)=2J_\nu'(x)
$$

*증명의 요지.* 급수 정의에서 항별로 $k$ 를 하나 밀어 지표를 맞추면 $\Gamma(k+\nu+1)$ 과 $\Gamma(k+\nu)$ 의 비가 $k+\nu$ 로 나와 두 식이 나온다. 같은 조작으로 $(x^{-\nu}J_\nu)'=-x^{-\nu}J_{\nu+1}$ 과 $(x^\nu J_\nu)'=x^\nu J_{\nu-1}$ 이 유도된다.

## 직교성

고정한 $m$ 에 대해 $\alpha_{mk}$ 를 $J_m$ 의 양의 영점이라 하면 다음이 성립한다.

$$
\int_0^1J_m(\alpha_{mk}r)J_m(\alpha_{mj}r)\thinspace r\thinspace dr=0\qquad(k\neq j)
$$

*증명의 요지.* Bessel 방정식을 가중함수 $r$ 를 갖는 Sturm–Liouville 문제로 보면 서로 다른 고윳값의 고유함수가 직교한다. 두 해에 방정식을 각각 곱해 빼고 $0$ 에서 $1$ 까지 적분하면 경계항이 $J_m(\alpha_{mk})=0$ 으로 사라진다.

이 직교성으로 원판 위의 함수를 $J_m(\alpha_{mk}r)\cos m\theta$ 로 전개하는 Fourier–Bessel 급수(Fourier–Bessel series)가 정의된다.

## 영점

$\nu\gt -1$ 이면 $J_\nu$ 의 영점은 모두 [실수](real-numbers.md)이고 단순하며 무한히 많다. 연속한 두 영점 사이에 $J_{\nu+1}$ 의 영점이 정확히 하나 있다[^1].

차수가 커지면 첫 영점도 커진다. $\alpha_{\nu 1}$ 은 $\nu$ 가 클 때 $\nu+1.8557\nu^{1/3}$ 에 가까워진다.

## 점근 전개

$x\to\infty$ 에서 다음이 성립한다.

$$
J_\nu(x)=\sqrt{\frac2{\pi x}}\left(\cos\left(x-\frac{\nu\pi}2-\frac\pi4\right)+O(1/x)\right)
$$

*증명의 요지.* 적분표현의 지수 $i(n\tau-x\sin\tau)$ 에 [정상위상법](stationary-phase.md)을 적용한다. $\tau=\pm\pi/2$ 에서 위상의 미분이 $0$ 이 되고, 그 두 점의 기여를 더하면 $\cos$ 항과 $x^{-1/2}$ 가 나온다. 진폭이 $x^{-1/2}$ 로 줄어드는 것은 원통면에서 에너지가 반지름에 비례하는 원주로 퍼지기 때문이다.

이 점근 전개는 발산급수이고 [Airy 함수](airy-functions.md)에서와 같은 [Stokes 현상](stokes-phenomenon.md)이 나타난다.

## 생성함수

정수 차수의 Bessel 함수는 하나의 Laurent 전개로 묶인다.

$$
e^{(x/2)(t-1/t)}=\sum_{n=-\infty}^{\infty}J_n(x)t^n
$$

$t=e^{i\theta}$ 로 놓으면 $e^{ix\sin\theta}=\sum_nJ_n(x)e^{in\theta}$ 가 되어 적분표현이 다시 나온다.

# 활용

- **원통 좌표의 경계값 문제.** 원형 막의 진동, 원통 도파관의 전파 모드, 원기둥에서의 열확산이 모두 Sturm–Liouville 이론의 고유함수로 $J_m$ 을 쓴다.
- **방사 대칭 함수의 변환.** 평면에서 방사 대칭인 함수의 [Fourier 변환](fourier-transform.md)은 $J_0$ 을 핵으로 하는 1차원 적분으로 줄어든다. 이것이 Hankel 변환(Hankel transform)이다.
- **보형형식의 Fourier 전개.** [Maass 형식](maass-forms.md)의 Fourier 계수에 $K_\nu$ 가 들어간다. 비정칙 보형형식의 Whittaker 함수가 변형 Bessel 함수다.
- **보형형식의 합 공식.** [Kuznetsov 공식](kuznetsov-formula.md)과 [Petersson 공식](petersson-formula.md)의 기하 쪽 항이 $J_{k-1}$ 과 $J_{2it}$ 를 [Kloosterman 합](kloosterman-sums.md)에 곱한 꼴로 나온다.

[^1]: G. N. Watson, *A Treatise on the Theory of Bessel Functions*, 2nd ed., Cambridge University Press, 1944. 제15장, 영점의 실수성과 Sturm 분리 정리의 적용.

# 연관 문서

## 선수지식

- [멱급수](power-series.md)
- [Sturm–Liouville 이론](sturm-liouville.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #complex_analysis #number_theory
