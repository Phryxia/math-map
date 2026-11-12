# 정칙 변동

# 개요

**정칙 변동(regular variation)** 은 함수가 큰 값에서 거듭제곱처럼 자라거나 줄어드는 성질이고, 로그처럼 느리게 변하는 인수가 곱해진 것까지 포함한다. 손해액의 꼬리 확률이 $x^{-2}$ 가 아니라 $x^{-2}\log x$ 로 줄어들 때, 최댓값을 얼마로 나누어야 하는지와 극한의 꼴이 바뀌는지가 문제가 된다. 정칙 변동은 $x$ 를 몇 배로 늘렸을 때 함숫값이 몇 배가 되는지만 보아 로그 인수를 지우고, 극한의 꼴은 거듭제곱 지수로, 나누는 수는 로그 인수까지 넣어 정한다.

# 직관

꼬리 확률이 $\bar F(x)=1-F(x)=x^{-2}\log x$ 인 손해액 $X_1,\dots,X_n$ 의 최댓값 $M_n$ 을 본다. 꼬리가 $\bar F(x)=x^{-2}$ 이면 $M_n/\sqrt n$ 이 Fréchet 분포로 간다([극값 분포](extreme-value-distributions.md)). 로그 인수가 있을 때도 같은 계산을 하려면 $n\bar F(a_n)\to 1$ 인 $a_n$ 을 잡고 다음을 계산한다.

$$
P(M_n\le a_nx)=\bigl(1-\bar F(a_nx)\bigr)^n
$$

$n\bar F(a_nx)$ 는 $n\bar F(a_n)$ 에 비율 $\bar F(a_nx)/\bar F(a_n)$ 을 곱한 것이다. 이 비율은 다음과 같다.

$$
\frac{\bar F(tx)}{\bar F(t)}=x^{-2}\cdot\frac{\log t+\log x}{\log t}\to x^{-2}\qquad(t\to\infty)
$$

로그 인수는 비율에서 $1$ 로 가므로 극한은 $x^{-2}$ 만 남고, $P(M_n\le a_nx)\to\exp(-x^{-2})$ 로 꼬리가 $x^{-2}$ 일 때와 같은 Fréchet 분포가 나온다. 로그 인수는 $a_n$ 에만 남는다. $a_n^2=n\log a_n$ 을 풀면 $a_n$ 은 $\sqrt{(n\log n)/2}$ 와 비가 $1$ 로 간다.

# 정의

## 정칙 변동 함수

$(a,\infty)$ 에서 정의된 양의 가측 함수 $f$ 가 모든 $x\gt 0$ 에서 다음을 만족하면 $f$ 를 지수(index) $\rho$ 의 **정칙 변동 함수(regularly varying function)** 라 한다.

$$
\lim_{t\to\infty}\frac{f(tx)}{f(t)}=x^\rho
$$

직관 절의 꼬리 $x^{-2}\log x$ 는 지수 $-2$ 의 정칙 변동 함수다. $x^\rho$ 자신, $x^\rho\log\log x$, 다항식 $3x^2+x$ (지수 $2$) 도 정칙 변동이다. $e^x$ 는 비율이 $e^{t(x-1)}$ 이라 극한이 유한하지 않으므로 정칙 변동이 아니다.

## 천천히 변하는 함수

지수 $0$ 의 정칙 변동 함수, 곧 모든 $x\gt 0$ 에서 $L(tx)/L(t)\to 1$ 인 함수를 **천천히 변하는 함수(slowly varying function)** 라 한다. $\log x$, 상수, $\exp(\sqrt{\log x})$ 가 예다.

$2+\sin(\log x)$ 는 $1$ 과 $3$ 사이에 갇혀 있지만 천천히 변하는 함수가 아니다. $x=e^{\pi/2}$ 로 두면 비율이 다음과 같다.

$$
\frac{2+\sin(\log t+\pi/2)}{2+\sin(\log t)}
$$

이 비율은 $\log t$ 가 $2\pi$ 의 배수일 때는 $3/2$, $2\pi$ 의 배수에 $3\pi/2$ 를 더한 값일 때는 $2$ 이므로 수렴하지 않는다.

지수 $\rho$ 의 정칙 변동 함수를 $x^\rho$ 로 나누면 천천히 변하는 함수가 된다. 그래서 모든 정칙 변동 함수는 $f(x)=x^\rho L(x)$ 꼴이다. 직관 절의 꼬리에서 $L(x)=\log x$ 다.

# 성질

## 균등 수렴 정리

$L$ 이 천천히 변하는 함수이면 $L(tx)/L(t)\to 1$ 은 $x$ 가 $(0,\infty)$ 의 닫힌 유계 구간 $\lbrack b,c\rbrack$ 을 움직일 때 균등하게 성립한다. 이 정리를 **균등 수렴 정리(uniform convergence theorem)** 라 한다.[^1]

가측성 가정이 필요하다. 선택 공리로 만든 비가측 함수 가운데 모든 $x$ 에서 비율이 $1$ 로 가지만 균등하지 않은 것이 있다.

## 표현 정리

$L$ 이 천천히 변하는 함수인 것은 $c(x)\to c\gt 0$, $\varepsilon(u)\to 0$ 인 가측 함수 $c$, $\varepsilon$ 이 존재해 큰 $x$ 에서 다음이 성립하는 것과 동치다.[^1]

$$
L(x)=c(x)\exp\left(\int_b^x\frac{\varepsilon(u)}{u}\thinspace du\right)
$$

$L(x)=\log x$ 는 $c(x)=1$, $\varepsilon(u)=1/\log u$, $b=e$ 로 이 꼴이다. 이 표현에서 모든 $\delta\gt 0$ 에 대해 큰 $x$ 에서 $x^{-\delta}\le L(x)\le x^\delta$ 가 나온다. 천천히 변하는 인수는 어떤 거듭제곱보다도 느리게 자라고 느리게 줄어든다.

## Karamata 정리

$f$ 가 지수 $\rho$ 의 정칙 변동 함수이고 유계 구간에서 적분가능하면 다음이 성립한다. 이 정리를 **Karamata 정리(Karamata's theorem)** 라 한다.[^1]

$$
\begin{aligned}
\int_b^xf(u)\thinspace du&\sim\frac{xf(x)}{\rho+1}\qquad(\rho\gt -1)\cr
\int_x^\infty f(u)\thinspace du&\sim\frac{xf(x)}{-\rho-1}\qquad(\rho\lt -1)
\end{aligned}
$$

$\sim$ 는 두 변의 비가 $1$ 로 간다는 뜻이다. 적분한 함수도 정칙 변동이고 지수가 $1$ 늘어난다. $f(u)=\log u$ 이면 $\int_e^x\log u\thinspace du=x\log x-x$ 이고, 오른쪽 $x\log x$ 와 비가 $1$ 로 간다.

직관 절의 꼬리에서 $\rho=-2$ 이므로 둘째 식에서 $\int_x^\infty\bar F(u)\thinspace du\sim x\bar F(x)$ 다. 손해액이 $x$ 를 넘었을 때 넘은 양의 평균은 이 적분을 $\bar F(x)$ 로 나눈 값이므로 $x$ 와 비가 $1$ 로 간다.

## 역함수

$f$ 가 지수 $\rho\gt 0$ 의 정칙 변동 함수이면 $f(g(x))\sim x$ 인 증가함수 $g$ 가 존재하고, $g$ 는 지수 $1/\rho$ 의 정칙 변동 함수다.[^1]

극값이나 합을 나누는 수 $a_n$ 은 $1/\bar F$ 의 이런 역함수에 $n$ 을 넣은 값이다. $\bar F$ 가 지수 $-\alpha$ 의 정칙 변동이면 $a_n$ 은 지수 $1/\alpha$ 의 정칙 변동 수열이다. 직관 절에서 $a_n\sim\sqrt{(n\log n)/2}$ 는 지수 $1/2$ 다.

## Karamata Tauber 정리

$U$ 가 $\lbrack 0,\infty)$ 에서 증가하고 오른쪽 연속인 함수이고 $U(0)=0$ 이라 하자. $\hat U(s)=\int_0^\infty e^{-sx}\thinspace dU(x)$ 가 $s\gt 0$ 에서 유한하면, $\rho\ge 0$ 과 천천히 변하는 $L$ 에 대해 다음 두 조건이 동치다. 이 정리를 **Karamata Tauber 정리(Karamata's Tauberian theorem)** 라 한다. 원점 근처의 변환에서 원래 함수의 모양을 끌어내는 [Tauber 정리](tauberian-theorems.md)의 한 꼴이다.[^1]

$$
U(x)\sim\frac{x^\rho L(x)}{\Gamma(1+\rho)}\quad(x\to\infty)\iff\hat U(s)\sim s^{-\rho}L(1/s)\quad(s\to 0^+)
$$

[Laplace 변환](laplace-transform.md)의 원점 근처 모양으로 원래 함수의 무한대 근처 모양을 정한다. $U(x)=x$ 이면 $\hat U(s)=1/s$ 이고 $\rho=1$, $L=1$ 로 양쪽이 맞는다.

# 활용

- 극값 분포의 끌림 영역. 분포 $F$ 가 Fréchet 분포 $\Phi_\alpha$ 의 끌림 영역에 드는 것은 $\bar F$ 가 지수 $-\alpha$ 의 정칙 변동 함수인 것과 동치다. 극값 분포 문서의 끌림 영역 조건이 이 정의다.
- 안정 분포의 끌림 영역. [안정 분포](stable-distributions.md) 문서의 일반화 중심극한정리에서 $\alpha\lt 2$ 인 극한의 조건은 $P(\vert X\vert\gt x)$ 가 지수 $-\alpha$ 의 정칙 변동 함수인 것이다. [중심극한정리](central-limit-theorem.md)처럼 정규분포로 수렴하는 조건은 잘라 낸 이차 적률 $\int_{\vert x\vert\le t}x^2\thinspace dF(x)$ 가 천천히 변하는 함수인 것이다.[^2] 분산이 유한하면 이 적분이 상수로 가므로 조건이 성립한다.
- 꼬리의 비교. $\bar F$ 가 지수 $-\alpha$ 의 정칙 변동이면 $\mathbb E\lbrack X^p\rbrack$ 는 $p\lt\alpha$ 에서 유한하고 $p\gt\alpha$ 에서 무한하다. 표현 정리의 $x^{-\delta}\le L(x)\le x^\delta$ 에서 나온다.

[^1]: N. H. Bingham, C. M. Goldie, J. L. Teugels, *Regular Variation*, Cambridge University Press (1987), Theorem 1.2.1, 1.3.1, 1.5.11, 1.5.12, 1.7.1. 균등 수렴 정리, 표현 정리, Karamata 정리, 역함수, Karamata Tauber 정리.
[^2]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. II, 2nd ed., Wiley (1971), Chapter XVII.5. 정규분포와 안정 분포의 끌림 영역.

# 연관 문서

## 선수지식

- [극값 분포](extreme-value-distributions.md)
- [안정 분포](stable-distributions.md)

## 더 알아보기

- [Hill 추정량](hill-estimator.md)
- [부분지수 분포](subexponential-distributions.md)

#probability #analysis #statistics
