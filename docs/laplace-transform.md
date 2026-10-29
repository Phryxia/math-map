# Laplace 변환

# 개요

**Laplace 변환(Laplace transform)** 은 $t\ge 0$ 에서 정의된 함수 $f(t)$ 에 $e^{-st}$ 를 곱해 적분해서 변수 $s$ 의 함수 $F(s)$ 로 바꾸는 변환이다. 용수철에 매단 물체의 위치 $y(t)$ 가 $y''+3y'+2y=0$, $y(0)=1$, $y'(0)=0$ 을 만족할 때 $y$ 를 구하는 문제가 이 변환을 쓰는 전형적인 자리다. 변환하면 미분이 $s$ 의 곱셈으로 바뀌고 초기조건이 식에 함께 들어가므로, 미분방정식이 $F(s)$ 에 대한 일차방정식이 되어 나눗셈으로 풀린다.

# 직관

[상미분방정식](ordinary-differential-equations.md) $y''+3y'+2y=0$, $y(0)=1$, $y'(0)=0$ 을 푼다. 양변에 $e^{-st}$ 를 곱해 $0$ 부터 $\infty$ 까지 적분하고, $Y(s)=\int_0^\infty e^{-st}y(t)\thinspace dt$ 로 둔다. 부분적분 한 번으로 $\int_0^\infty e^{-st}y'(t)\thinspace dt=sY(s)-y(0)$ 이 나오고, 두 번이면 $y''$ 의 적분이 $s^2Y(s)-sy(0)-y'(0)$ 이다. 초기조건을 넣으면 식은 다음이 된다.

$$
(s^2Y-s)+3(sY-1)+2Y=0,\qquad Y(s)=\frac{s+3}{(s+1)(s+2)}=\frac{2}{s+1}-\frac{1}{s+2}
$$

$e^{at}$ 를 같은 방법으로 적분하면 $\int_0^\infty e^{-st}e^{at}\thinspace dt=1/(s-a)$ 이므로, $2/(s+1)$ 은 $2e^{-t}$ 에서, $1/(s+2)$ 는 $e^{-2t}$ 에서 나온 것이다. 따라서 $y(t)=2e^{-t}-e^{-2t}$ 이다. 실제로 $y(0)=1$, $y'(0)=0$ 이고 식을 만족한다.

# 정의

$f$ 가 $\lbrack 0,\infty)$ 의 모든 유계구간에서 적분가능하고 어떤 $M,c$ 에 대해 $\vert f(t)\vert\le Me^{ct}$ 이면, $f$ 의 **Laplace 변환** 은 다음 함수다.

$$
F(s)=\mathcal L\lbrace f\rbrace(s)=\int_0^\infty e^{-st}f(t)\thinspace dt
$$

적분은 [복소수](complex-numbers.md) $s$ 가 $\mathrm{Re}\thinspace s\gt c$ 일 때 절대수렴하고, $F$ 는 이 반평면에서 [정칙함수](holomorphic-functions.md)다. 적분이 수렴하는 $\mathrm{Re}\thinspace s$ 의 하한을 수렴 가로좌표(abscissa of convergence)라 한다.

자주 쓰는 값은 다음과 같다. [감마 함수](gamma-function.md)로는 $\mathcal L\lbrace t^{\alpha}\rbrace=\Gamma(\alpha+1)/s^{\alpha+1}$ 이다.

| 함수 | 변환 | 범위 |
| --- | --- | --- |
| $1$ | $1/s$ | $\mathrm{Re}\thinspace s\gt 0$ |
| $t^n$ | $n!/s^{n+1}$ | $\mathrm{Re}\thinspace s\gt 0$ |
| $e^{at}$ | $1/(s-a)$ | $\mathrm{Re}\thinspace s\gt\mathrm{Re}\thinspace a$ |
| $\sin\omega t$ | $\omega/(s^2+\omega^2)$ | $\mathrm{Re}\thinspace s\gt 0$ |
| $\cos\omega t$ | $s/(s^2+\omega^2)$ | $\mathrm{Re}\thinspace s\gt 0$ |

# 성질

## 미분과 적분의 규칙

$f$ 가 연속이고 $f'$ 도 위 조건을 만족하면 다음이 성립한다.

$$
\mathcal L\lbrace f'\rbrace(s)=sF(s)-f(0),\qquad \mathcal L\lbrace f^{(n)}\rbrace(s)=s^nF(s)-\sum_{k=0}^{n-1}s^{n-1-k}f^{(k)}(0)
$$

증명은 부분적분이고, 경계항 $e^{-st}f(t)$ 가 $t\to\infty$ 에서 $0$ 으로 가는 것을 $\mathrm{Re}\thinspace s\gt c$ 로 보장한다. 적분 쪽은 $\mathcal L\lbrace\int_0^t f\rbrace=F(s)/s$ 이다. 반대로 $s$ 로 미분하면 $F'(s)=-\mathcal L\lbrace tf(t)\rbrace(s)$ 이다.

## 이동 규칙

$$
\mathcal L\lbrace e^{at}f(t)\rbrace(s)=F(s-a),\qquad \mathcal L\lbrace f(t-a)H(t-a)\rbrace(s)=e^{-as}F(s)\quad(a\ge 0)
$$

$H$ 는 $t\ge 0$ 에서 $1$, $t\lt 0$ 에서 $0$ 인 Heaviside 함수(Heaviside step function)다. 둘째 규칙으로 시각 $a$ 에 켜지는 입력을 다룬다.

## 합성곱 정리

$\lbrack 0,\infty)$ 위의 합성곱 $(f\ast g)(t)=\int_0^t f(\tau)g(t-\tau)\thinspace d\tau$ 에 대해 다음이 성립한다.

$$
\mathcal L\lbrace f\ast g\rbrace=F\cdot G
$$

증명의 요지. 이중적분 $\int_0^\infty\int_0^t e^{-st}f(\tau)g(t-\tau)\thinspace d\tau\thinspace dt$ 에서 [Fubini–Tonelli 정리](fubini-tonelli.md)로 적분 순서를 바꾸고 $u=t-\tau$ 로 치환한다. [합성곱](convolution.md)의 정리와 같은 꼴이고, 적분 범위가 $\lbrack 0,t\rbrack$ 로 잘린 것만 다르다.

## 유일성과 반전 공식

연속함수 $f,g$ 의 Laplace 변환이 어떤 반직선 $s\gt s_0$ 에서 같으면 $f=g$ 다. 이를 Lerch 정리(Lerch's theorem)라 한다. 표에서 $F$ 를 찾아 $f$ 를 읽는 직관 절의 방법이 이 정리로 정당화된다.

$f$ 가 조각마다 매끄러우면 $\gamma\gt c$ 에 대해 다음 Bromwich 적분(Bromwich integral)으로 $f$ 가 $f$ 의 연속점 $t\gt 0$ 에서 복원된다.

$$
f(t)=\frac1{2\pi i}\lim_{T\to\infty}\int_{\gamma-iT}^{\gamma+iT}e^{st}F(s)\thinspace ds
$$

$F$ 가 유리함수이면 적분 경로를 왼쪽으로 닫아 [유수 정리](residue-theorem.md)를 적용한다. 그러면 $f(t)$ 는 $F$ 의 극에서 $e^{st}F(s)$ 의 유수를 모두 더한 값이다. 직관 절의 $Y(s)$ 에서 극 $s=-1$ 의 유수가 $2e^{-t}$, 극 $s=-2$ 의 유수가 $-e^{-2t}$ 다.

$s=\gamma+i\omega$ 로 두면 $F(\gamma+i\omega)$ 는 $e^{-\gamma t}f(t)H(t)$ 의 [Fourier 변환](fourier-transform.md)이다. Bromwich 적분은 Fourier 반전 공식을 이 함수에 적용한 것이다.

## 끝값 정리

$f$ 와 $f'$ 이 변환을 갖고 $sF(s)$ 의 극이 모두 왼쪽 반평면 $\mathrm{Re}\thinspace s\lt 0$ 에 있으면 다음이 성립한다.

$$
\lim_{t\to\infty}f(t)=\lim_{s\to 0}sF(s),\qquad f(0^{+})=\lim_{s\to\infty}sF(s)
$$

앞의 것을 끝값 정리(final value theorem), 뒤의 것을 첫값 정리(initial value theorem)라 한다. 둘째 식은 극의 조건 없이 성립한다.

# 활용

- 상수계수 선형 상미분방정식과 그 연립계를 직관 절처럼 대수방정식으로 바꿔 푼다. 입력 $x(t)$ 와 출력 $y(t)$ 가 초기값 $0$ 인 선형 방정식으로 이어지면 $Y(s)=W(s)X(s)$ 이고, $W(s)$ 를 전달함수(transfer function)라 한다. 제어이론은 $W$ 의 극이 왼쪽 반평면에 있는지로 안정성을 판정한다.
- 확률에서 음이 아닌 확률변수 $X$ 의 밀도 $p$ 에 대해 $\mathbb E\lbrack e^{-sX}\rbrack=\mathcal L\lbrace p\rbrace(s)$ 다. 독립인 두 변수의 합의 밀도는 합성곱이므로 변환이 곱이 되고, [Poisson 과정](poisson-process.md)의 도착 시각처럼 지수분포를 더한 변수의 분포를 이 곱으로 계산한다.
- 갱신 방정식(renewal equation) $u(t)=g(t)+\int_0^t u(t-\tau)k(\tau)\thinspace d\tau$ 처럼 합성곱이 든 적분방정식을 합성곱 정리로 $U=G+UK$, 곧 $U=G/(1-K)$ 로 바꿔 푼다.
- [Mellin 변환](mellin-transform.md) $\int_0^\infty x^{z-1}f(x)\thinspace dx$ 에 $x=e^{-t}$ 를 넣으면 $\int_{-\infty}^{\infty}e^{-zt}f(e^{-t})\thinspace dt$ 가 되어, 적분 범위를 실직선 전체로 넓힌 양쪽 Laplace 변환(two-sided Laplace transform)과 같은 꼴이다.
- Bernstein 정리(Bernstein's theorem on monotone functions)는 $(0,\infty)$ 위의 함수가 완전단조(completely monotone), 곧 $(-1)^nF^{(n)}\ge 0$ 이 모든 $n$ 에서 성립하는 것과 음이 아닌 측도의 Laplace 변환인 것이 동치라는 정리다.[^1]

[^1]: D. V. Widder, *The Laplace Transform*, Princeton University Press (1941). 수렴 가로좌표, Lerch 정리, 반전 공식, Bernstein 정리.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)
- [유수 정리](residue-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #complex_analysis #probability
