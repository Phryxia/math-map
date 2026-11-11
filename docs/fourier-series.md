# Fourier 급수

# 개요

**Fourier 급수(Fourier series)** 는 주기함수를 sin 과 cos 의 무한합으로 쓴 것이다. 양 끝을 $0$ 도로 유지하는 쇠막대의 처음 온도가 $\sin x$ 나 $\sin 2x$ 모양이면 그 모양을 유지한 채 높이만 시간에 따라 지수적으로 줄어들지만, 처음 온도가 아무 모양이면 이런 계산이 바로 되지 않는다. Fourier 급수는 아무 처음 온도를 사인 곡선들의 합으로 쓰고, 각 사인 곡선을 따로 계산해 더한다.

# 직관

길이 $\pi$ 인 쇠막대의 양 끝을 $0$ 도로 두고, 위치 $x$, 시각 $t$ 의 온도를 $u(x,t)$ 라 한다. 온도는 [열방정식](heat-equation.md) $u_t=\kappa u_{xx}$ 를 만족한다. 처음 온도가 $\sin x$ 이면 $u=e^{-\kappa t}\sin x$ 이고, $\sin 2x$ 이면 $u=e^{-4\kappa t}\sin 2x$ 다. 두 식을 방정식에 넣으면 양변이 같다.

처음 온도가 $f(x)=x(\pi-x)$ 이면 이런 식이 바로 나오지 않는다. $f$ 를 $\sin nx$ 들의 합 $\sum b_n\sin nx$ 로 쓸 수 있으면 각 항을 따로 풀어 $u=\sum b_ne^{-\kappa n^2t}\sin nx$ 를 얻는다. 남는 일은 $b_n$ 을 정하는 것이다.

$\int_0^\pi\sin nx\sin mx\thinspace dx$ 는 $n\ne m$ 이면 $0$, $n=m$ 이면 $\pi/2$ 다. 그래서 $f=\sum b_n\sin nx$ 의 양변에 $\sin mx$ 를 곱해 적분하면 $b_m$ 항만 남고 $b_m=\frac2\pi\int_0^\pi f(x)\sin mx\thinspace dx$ 다. $f=x(\pi-x)$ 이면 짝수 $m$ 에서 $b_m=0$, 홀수 $m$ 에서 $b_m=8/(\pi m^3)$ 이고 $b_1\approx 2.546$, $b_3\approx 0.094$ 다.

$x=\pi/2$ 에서 $f=\pi^2/4\approx 2.467$ 이고, 첫 항까지의 합은 $2.546$, 셋째 항까지는 $2.452$, 다섯째 항까지는 $2.473$ 이다. 합이 $f$ 의 값으로 다가간다. 서로 직교하는 [삼각함수](trigonometric-functions.md)들로 함수를 나누는 일은 직교하는 방향들로 벡터를 나누는 일과 같고, 무한히 많은 방향에서 이 합이 $f$ 로 수렴하는지는 [Hilbert 공간](hilbert-spaces.md)의 [완비성](completeness.md)이 정한다.

# 정의

## 삼각함수계와 직교성

구간에서의 내적을 [Riemann 적분](riemann-integral.md)(또는 더 일반적으로 [Lebesgue 적분](lebesgue-integral.md))으로 정의한다.

$$
\langle f, g\rangle = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)\thinspace\overline{g(x)}\thinspace dx .
$$

복소 지수계 $e_n(x)=\exp(inx)$ 는 이 내적에 대해 정규직교다.

$$
\langle e_n, e_m\rangle = \frac{1}{2\pi}\int_{-\pi}^{\pi} e^{i(n-m)x}\thinspace dx = \begin{cases} 1 & n = m,\cr 0 & n \ne m.\end{cases}
$$

[실수](real-numbers.md)형으로는 $1$ , $\cos(nx)$ , $\sin(nx)$ 들이 서로 직교하며, 이는 곱을 합으로 바꾸는 삼각 항등식에서 바로 나온다.

## Fourier 계수와 부분합

$f$ 가 주기 $2\pi$ 이고 적분가능하면 계수와 부분합을 다음과 같이 정의한다.

$$
\hat{f}(n) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)\thinspace e^{-inx}\thinspace dx,\qquad S_N f(x) = \sum_{n=-N}^{N} \hat{f}(n)\thinspace e^{inx}.
$$

실수형 계수와의 관계는 다음과 같다.

$$
a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos(nx)\thinspace dx,\qquad b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin(nx)\thinspace dx,
$$

$$
S_N f(x) = \frac{a_0}{2} + \sum_{n=1}^{N}\big(a_n\cos(nx) + b_n\sin(nx)\big).
$$

$\hat f(n)$ 을 **Fourier 계수(Fourier coefficient)**, $S_Nf$ 를 **부분합(partial sum)** 이라 하고, 급수 $\sum_n\hat f(n)e^{inx}$ 를 **Fourier 급수** 라 한다. 함수가 짝함수면 sin 계수가, 홀함수면 cos 계수가 모두 $0$ 이다.

$(-\pi,\pi)$ 에서 $f(x)=x$ 이면 홀함수이므로 $a_n=0$ 이고, 부분적분으로 $b_n=\frac2\pi\int_0^\pi x\sin nx\thinspace dx=2(-1)^{n+1}/n$ 이다. 곧 $x=2\bigl(\sin x-\tfrac12\sin 2x+\tfrac13\sin 3x-\cdots\bigr)$ 다.

## Dirichlet 핵

부분합은 [합성곱](convolution.md)으로 쓰이고, 그 핵 $D_N$ 을 **Dirichlet 핵(Dirichlet kernel)** 이라 한다.

$$
S_N f(x) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x-t)\thinspace D_N(t)\thinspace dt,\qquad D_N(t) = \sum_{n=-N}^{N} e^{int} = \frac{\sin\big((N+\tfrac12)t\big)}{\sin(t/2)} .
$$

$N=1$ 이면 $D_1(t)=1+2\cos t$ 이고 $t=\pi$ 에서 $-1$ 이다. $D_N$ 의 적분은 항상 $2\pi$ 지만, 절댓값 적분을 $2\pi$ 로 나눈 값인 Lebesgue 상수(Lebesgue constant)는 $\log N$ 정도로 발산한다.

## Cesàro 평균과 Fejér 핵

부분합의 산술평균을 쓰면 핵이 음이 아닌 근사항등원이 된다. 그 핵이 [Fejér 핵](fejer-kernel.md)이다.

$$
\sigma_N f = \frac{1}{N+1}\sum_{k=0}^{N} S_k f,\qquad F_N(t) = \frac{1}{N+1}\left(\frac{\sin\big(\tfrac{(N+1)t}{2}\big)}{\sin(t/2)}\right)^2 \ge 0 .
$$

# 성질

## L² 수렴과 Parseval 등식

$f$ 가 제곱적분가능하면 부분합은 $f$ 의 $2N+1$ 차원 부분공간으로의 정사영이므로, 그 차수의 삼각다항식 가운데 제곱평균 오차를 최소화한다. 삼각함수계가 완비이므로 다음이 성립한다. 둘째 등식을 Parseval 등식(Parseval's identity)이라 한다.

$$
\Vert S_N f - f\Vert \xrightarrow[N\to\infty]{} 0,\qquad \sum_{n\in\mathbb{Z}} \vert\hat{f}(n)\vert^2 = \frac{1}{2\pi}\int_{-\pi}^{\pi} \vert f(x)\vert^2\thinspace dx .
$$

완비성 증명의 표준 경로는 Fejér 정리다. 연속 주기함수에 대해 Cesàro 평균이 균등수렴하므로 삼각다항식이 [연속함수](continuity.md) 공간에서 조밀하고, 연속함수가 $L^2$ 에서 조밀하므로 삼각함수계에 직교하는 벡터는 0뿐이다. 따라서 Parseval 등식은 Hilbert 공간의 일반론에서 유도된다.

편극(polarization)하면 다음 형태도 얻는다.

$$
\frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)\overline{g(x)}\thinspace dx = \sum_{n\in\mathbb{Z}} \hat{f}(n)\overline{\hat{g}(n)} .
$$

## 계수의 감쇠와 함수의 매끄러움

Riemann–Lebesgue 보조정리(Riemann–Lebesgue lemma)로 적분가능한 함수의 계수는 $0$ 으로 간다. 부분적분을 반복하면 매끄러움이 계수의 감쇠 속도로 나타난다. $f$ 가 $k$ 번 연속미분가능한 주기함수면

$$
\widehat{f^{(k)}}(n) = (in)^k \hat{f}(n),\qquad \vert\hat{f}(n)\vert = o\big(\vert n\vert^{-k}\big).
$$

계수가 절대수렴하면 급수는 [균등수렴](uniform-convergence.md)하고, 균등수렴하는 연속함수열의 극한이므로 합은 연속이다. 반대로 도약 불연속이 있으면 계수는 $1/n$ 정도로만 줄고 절대수렴하지 않는다. 정의 절의 $f(x)=x$ 는 주기 $2\pi$ 로 늘이면 $x=\pi$ 에서 끊기고 $\vert b_n\vert=2/n$ 이다.

## 점별 수렴

부분합에서 $x$ 에서의 값 $s$ 를 빼면 Dirichlet 핵이 짝함수이므로 국소적인 적분만 남고, 다음 두 판정법이 나온다.

- Dini 판정(Dini test). 어떤 양수 $\delta$ 에 대해

$$
\int_{0}^{\delta} \frac{\vert f(x+t) + f(x-t) - 2s\vert}{t}\thinspace dt \lt\infty
$$

이면 $S_Nf(x)\to s$ 다. $f$ 가 $x$ 에서 Hölder 조건(Hölder condition)을 만족하면 조건이 충족된다.

- Dirichlet 조건(Dirichlet conditions). $f$ 가 한 주기에서 조각별 단조이고 유한개의 불연속만 가지면, 모든 점에서 좌우극한의 평균으로 수렴한다.

$$
S_N f(x) \longrightarrow \frac{f(x^+) + f(x^-)}{2}.
$$

일반적으로는 연속성만으로 부족하다. du Bois-Reymond 의 예처럼 어떤 점에서 부분합이 발산하는 연속 주기함수가 존재한다([균등유계성 원리](uniform-boundedness.md)로 존재만 보이는 것이 표준이다). 반면 Carleson 정리(Carleson's theorem)로 제곱적분가능한 함수의 Fourier 급수는 거의 어디서나 수렴한다[^1]. 적분가능하기만 한 함수에서는 이것조차 거짓이며, 어디서나 발산하는 Kolmogorov 의 예가 있다.

## Gibbs 현상

도약 불연속 근처에서 부분합은 함수를 일정 비율만큼 초과한다. 이것을 Gibbs 현상(Gibbs phenomenon)이라 한다. 도약 크기를 $1$ 로 두면, 초과분의 극한은 $N$ 을 키워도 줄지 않고 다음 상수로 수렴한다[^2].

$$
\frac{1}{\pi}\int_{0}^{\pi} \frac{\sin t}{t}\thinspace dt - \frac{1}{2} \approx 0.0895 .
$$

약 $9$ 퍼센트의 과도 진동이 남는다. 초과가 일어나는 위치는 불연속점에 점점 가까워지므로 $L^2$ 수렴과 모순되지 않는다. 초과 부분의 넓이는 $0$ 으로 가고 높이는 그대로다.

이 현상은 부분합이라는 절단 방식에서 생기며, Fejér 평균처럼 음이 아닌 핵을 쓰면 사라진다. 신호 처리에서는 [창함수](window-functions.md)(window function)를 곱해 이 진동을 없앤다.

## 몇 가지 고전적 귀결

사각파, 톱니파 같은 구체적인 함수에 Parseval 등식을 적용하면 급수의 합이 계산된다. 정의 절의 $f(x)=x$ 에서 실수형 Parseval 등식 $\frac1\pi\int_{-\pi}^{\pi}x^2dx=\sum b_n^2$ 의 왼쪽은 $2\pi^2/3$, 오른쪽은 $\sum 4/n^2$ 이므로 다음을 얻는다.

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}.
$$

같은 방식으로 다른 짝수 차수 zeta 값도 계산된다. 균등수렴하는 삼각급수의 계수가 유일하게 결정된다는 사실(계수의 유일성)은 직교성만으로 나온다.

# 활용

## 열방정식

Fourier 가 급수를 도입한 원래 문제다. 양 끝에서 온도가 $0$ 인 막대의 열전도는 다음 문제다.

$$
\frac{\partial u}{\partial t} = \kappa \frac{\partial^2 u}{\partial x^2},\qquad u(0,t) = u(\pi,t) = 0,\qquad u(x,0) = f(x).
$$

변수분리(separation of variables)를 하면 $\sin(nx)$ 가 공간 방향의 고유함수이고, 시간 방향은 계수마다 상수계수 [상미분방정식](ordinary-differential-equations.md) $b_n'=-\kappa n^2b_n$ 이어서 지수 감쇠다. 초기조건을 sin 급수로 전개하면 해가 바로 나온다.

$$
u(x,t) = \sum_{n=1}^{\infty} b_n\thinspace e^{-\kappa n^2 t} \sin(nx),\qquad b_n = \frac{2}{\pi}\int_{0}^{\pi} f(x)\sin(nx)\thinspace dx .
$$

$t\gt 0$ 이면 계수가 지수적으로 줄어들므로 해는 즉시 무한히 매끄러워진다. 열방정식의 평활화 성질이 계수 감쇠로 나타난다. [파동방정식](wave-equation.md)에서는 지수 대신 $\cos(nct)$ , $\sin(nct)$ 가 나오며 감쇠가 없어 초기 불연속이 그대로 전파된다.

## 이산 변환과의 관계

표본을 유한개만 쓰면 적분이 유한합이 되고, 그것이 [이산 Fourier 변환](fourier.md)이다. 실제 계산은 이 유한 버전과 [고속 Fourier 변환](fft.md)(fast Fourier transform, FFT)으로 한다. 주기함수를 [멱급수](power-series.md)로 전개하는 경우와는 다르다. 멱급수는 해석적 함수에만 쓸 수 있고 수렴 반경 안에서만 유효하지만, Fourier 급수는 매끄럽지 않은 함수, 불연속 함수에도 적용되며 전 구간에서 평균적으로 수렴한다.

## 사각파의 부분합

사각파의 Fourier 급수는 홀수 차수 sin 항만 남는다. $-1$ 과 $1$ 사이를 오가는 사각파의 부분합은 불연속점 근처에서 Gibbs 현상을 보인다. $L^2$ 오차는 $0$ 으로 가지만 초과분은 약 $0.179$ 에 머문다. 도약 크기 $2$ 로 나누면 앞의 상수 $0.0895$ 가 나온다.

## 다른 방향의 확장

- 비주기 함수에는 [Fourier 변환](fourier-transform.md), 격자 위에서는 [Poisson 합 공식](poisson-summation.md)이 대응한다.
- 구면 위에서는 [구면조화함수](spherical-harmonics.md), 일반 콤팩트 군에서는 [Peter–Weyl 정리](peter-weyl.md)가 대응한다. 어느 경우든 "적당한 연산자의 고유함수가 정규직교기저를 이룬다"는 구조가 공통이다.
- 계수 자체를 다루는 조화해석은 [정칙함수](holomorphic-functions.md)와도 만난다. 단위원 위의 Fourier 급수에서 음의 지수를 버리면 원판 위의 정칙함수가 된다.

[^1]: Wikipedia, "Carleson's theorem", https://en.wikipedia.org/wiki/Carleson%27s_theorem
[^2]: Wikipedia, "Gibbs phenomenon", https://en.wikipedia.org/wiki/Gibbs_phenomenon

# 연관 문서

## 선수지식

- [Hilbert 공간](hilbert-spaces.md)
- [Riemann 적분](riemann-integral.md)

## 더 알아보기

### 수렴과 부등식

- [Fejér 핵](fejer-kernel.md)
- [Wirtinger 부등식](wirtinger-inequality.md)

### 변환과 합공식

- [Fourier 변환](fourier-transform.md)
- [Poisson 합 공식](poisson-summation.md)
- [Hardy 공간](hardy-spaces.md)

### 다른 분야에서의 쓰임

- [등분포](equidistribution.md)
- [Lobachevsky 함수](lobachevsky-function.md)

#analysis #functional_analysis #computation
