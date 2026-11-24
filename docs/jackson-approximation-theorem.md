# Jackson 근사 정리

# 개요

**Jackson 근사 정리(Jackson's theorem)** 는 연속함수를 차수 $n$ 의 다항식으로 근사할 때의 가장 작은 오차가 함수의 흔들림 정도로 위에서 정해진다는 정리다. $\lbrack -1,1\rbrack$ 에서 $\vert x\vert$ 를 다항식으로 근사하면 차수 $1$ 에서 오차가 $1/2$, 차수 $2$ 에서 $1/8$ 이고, 차수를 올리면 오차는 줄지만 매끄러운 $x^2$ 처럼 빨리 $0$ 이 되지는 않는다. 이 정리는 입력이 $1/n$ 만큼 움직일 때 함숫값이 움직이는 최대량을 오차의 상한으로 주어, 꺾인 점 하나가 있는 $\vert x\vert$ 의 오차가 $1/n$ 의 상수배 이하라는 것을 보인다.

# 직관

[최량 균등 근사](best-uniform-approximation.md)의 교대 정리로 $\vert x\vert$ 의 최량 오차를 구한다. 차수 $1$ 에서는 짝함수이므로 상수로 근사하고, $x=-1,0,1$ 에서 오차가 $+1/2,-1/2,+1/2$ 로 교대하는 $1/2$ 이 최량이다. 오차는 $1/2$ 이다.

차수 $2$ 에서는 $a+bx^2$ 꼴을 찾는다. 오차 $\vert x\vert-a-bx^2$ 가 $x=0$ 에서 $-h$, $x=\pm 1/2$ 에서 $+h$, $x=\pm 1$ 에서 $-h$ 이도록 놓으면 $a=h$, $b=1$, $1/4=2h$ 가 나온다. 따라서 최량 근사는 $x^2+1/8$ 이고 오차는 $1/8$ 이다.

차수에 오차를 곱하면 $1\cdot\tfrac12$ 와 $2\cdot\tfrac18=\tfrac14$ 이다. 차수를 계속 올리면 이 곱은 $0$ 으로 가지 않고 일정한 양수 가까이에 머문다. $\vert x\vert$ 는 $x=0$ 에서 꺾이고, 입력이 $1/n$ 움직이면 함숫값도 많아야 $1/n$ 움직인다. 오차가 $1/n$ 규모라는 것이 이 움직임의 크기와 맞는다.

# 정의

## 연속률

구간 $\lbrack a,b\rbrack$ 위의 함수 $f$ 와 $\delta\gt 0$ 에 대해 다음을 $f$ 의 **연속률(modulus of continuity)** 이라 한다.

$$
\omega(f,\delta)=\sup\left\lbrace\vert f(x)-f(y)\vert\ :\ \vert x-y\vert\le\delta\right\rbrace
$$

$f$ 가 [균등연속](uniform-continuity.md)인 것은 $\delta\to 0$ 에서 $\omega(f,\delta)\to 0$ 인 것과 동치다. 직관 절의 $f(x)=\vert x\vert$ 는 $\omega(f,\delta)=\delta$ 다.

## 정리의 진술

$E_n(f)$ 를 차수 $n$ 이하의 다항식으로 근사할 때의 최량 균등 오차라 한다. Jackson 근사 정리는 다음 진술이다. 절대상수 $C$ 가 있어 $\lbrack -1,1\rbrack$ 위의 모든 연속함수 $f$ 와 $n\ge 1$ 에서 다음이 성립한다.[^1]

$$
E_n(f)\le C\thinspace\omega\left(f,\tfrac1n\right)
$$

$f(x)=\vert x\vert$ 이면 $E_n(f)\le C/n$ 이다. 주기 $2\pi$ 인 연속함수를 차수 $n$ 의 삼각다항식으로 근사하는 판본도 같은 꼴이다.

# 성질

## 증명의 요지

주기 판본부터 증명한다. 다음 **Jackson 핵(Jackson kernel)** 을 쓴다. $m=\lfloor n/2\rfloor+1$ 이고 $c_n$ 은 적분이 $1$ 이 되게 하는 상수다.

$$
K_n(t)=c_n\left(\frac{\sin(mt/2)}{\sin(t/2)}\right)^4
$$

$K_n$ 은 차수 $n$ 이하의 삼각다항식이고 $\int_{-\pi}^{\pi}\vert t\vert K_n(t)\thinspace dt\le C'/n$ 을 만족한다. [Fejér 핵](fejer-kernel.md)을 제곱한 것이므로 $0$ 에 더 몰려 있다. $f$ 와 $K_n$ 의 합성곱은 차수 $n$ 이하의 삼각다항식이다.

$\omega(f,\lambda\delta)\le(1+\lambda)\omega(f,\delta)$ 이므로 합성곱과 $f$ 의 차이는 다음 이하다.

$$
\int_{-\pi}^{\pi}\omega(f,\vert t\vert)K_n(t)\thinspace dt\le\omega\left(f,\tfrac1n\right)\int_{-\pi}^{\pi}\left(1+n\vert t\vert\right)K_n(t)\thinspace dt\le(1+C')\thinspace\omega\left(f,\tfrac1n\right)
$$

$\lbrack -1,1\rbrack$ 판본은 $g(\theta)=f(\cos\theta)$ 로 바꾼다. $\vert\cos\theta-\cos\varphi\vert\le\vert\theta-\varphi\vert$ 이므로 $\omega(g,\delta)\le\omega(f,\delta)$ 이고, $g$ 가 짝함수이므로 근사 삼각다항식을 짝으로 고를 수 있다. 짝 삼각다항식은 $\cos\theta$ 의 다항식이므로 $x=\cos\theta$ 의 다항식이 된다.

## 매끄러운 함수

$f$ 가 $r$ 번 연속미분가능하면 다음이 성립한다. $C_r$ 은 $r$ 에만 의존한다.

$$
E_n(f)\le\frac{C_r}{n^r}\thinspace\omega\left(f^{(r)},\tfrac1n\right)
$$

도함수가 많을수록 오차가 빨리 줄어든다. 직관 절의 $x^2$ 는 차수 $2$ 에서 오차가 $0$ 이다.

## Bernstein 역정리

주기 판본에서 Jackson 정리의 역이 성립한다. $0\lt\alpha\lt 1$ 이고 모든 $n$ 에서 $E_n(f)\le Mn^{-\alpha}$ 이면 $f$ 는 지수 $\alpha$ 의 [Hölder 공간](holder-spaces.md)에 든다. 이것을 **Bernstein 역정리(Bernstein's inverse theorem)** 라 한다. 따라서 오차가 줄어드는 속도로 함수가 얼마나 매끄러운지를 거꾸로 알 수 있다.

## Bernstein 상수

Bernstein 은 $\vert x\vert$ 에 대해 $n\to\infty$ 에서 짝수 $n$ 의 $nE_n(\vert x\vert)$ 가 극한 $\beta=0.2801\ldots$ 로 수렴함을 보였다.[^2] 이 $\beta$ 를 **Bernstein 상수(Bernstein constant)** 라 한다. 직관 절의 $n=2$ 에서 그 곱은 $0.25$ 이다.

# 활용

- [Fourier 급수](fourier-series.md)의 균등수렴. 차수 $n$ 의 삼각다항식으로 근사할 때의 최량 균등 오차를 $E_n^{\mathrm T}(f)$ 라 하면, 차수 $n$ 의 부분합의 오차는 $E_n^{\mathrm T}(f)$ 에 $\log n$ 규모의 상수를 곱한 값 이하다. Jackson 정리와 합치면 $\omega(f,\delta)\log(1/\delta)\to 0$ 일 때 부분합이 균등수렴한다. 이것이 Dini–Lipschitz 판정(Dini–Lipschitz test)이다.
- Chebyshev 절점 보간과 스펙트럼 방법. 보간 다항식의 오차가 $E_n(f)$ 의 $\log n$ 배 이하이므로, Jackson 정리가 보간과 스펙트럼 방법의 수렴 속도를 함수의 매끄러움으로 정해 준다.
- Remez 알고리즘의 차수 선택. 원하는 오차에 필요한 차수를 계산 전에 $\omega(f,1/n)$ 으로 어림한다.

[^1]: D. Jackson, *Über die Genauigkeit der Annäherung stetiger Funktionen durch ganze rationale Funktionen gegebenen Grades und trigonometrische Summen gegebener Ordnung*, Dissertation, Göttingen, 1911.
[^2]: S. N. Bernstein, "Sur la meilleure approximation de |x| par des polynômes de degrés donnés", *Acta Mathematica* 37 (1914), 1–57.

# 연관 문서

## 선수지식

- [최량 균등 근사](best-uniform-approximation.md)
- [균등연속](uniform-continuity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #algorithms
