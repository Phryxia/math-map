# Wallis 곱

# 개요

**Wallis 곱(Wallis product)** 은 원주율의 절반 $\pi/2$ 를 분수의 무한곱으로 나타낸 식이다. 동전을 $2m$ 번 던져 앞면이 정확히 $m$ 번 나올 확률은 $m=1,2,3,4$ 에서 $1/2$, $3/8$, $5/16$, $35/128$ 로 줄어든다. 이 확률이 $m$ 에 대해 어떤 빠르기로 줄어드는지는 분수를 계속 곱해서는 보이지 않는다.

Wallis 곱은 이 확률을 사인 거듭제곱의 적분 두 개 사이에 끼운다. 그 결과 확률이 $1/\sqrt{\pi m}$ 에 가깝다는 것이 나온다.

# 직관

앞면이 정확히 $m$ 번 나올 확률을 $p_m$ 이라 한다. $p_m=\binom{2m}{m}/4^m$ 이고, 이항계수를 풀어 $p_m$ 과 $p_{m-1}$ 을 나누면 $(2m-1)/(2m)$ 이 남는다. 그래서 $p_m$ 은 다음 곱이다.

$$
p_m=\frac12\cdot\frac34\cdot\frac56\cdots\frac{2m-1}{2m}
$$

$m\thinspace p_m^2$ 을 계산하면 $m=1,2,3,4$ 에서 $0.250$, $0.281$, $0.293$, $0.299$ 다. 값이 천천히 커지지만 어디에서 멈추는지는 이 곱에서 보이지 않는다.

같은 꼴의 인수 $(k-1)/k$ 가 사인의 거듭제곱을 $0$ 부터 $\pi/2$ 까지 적분할 때 나온다. 이 적분을 $I_k$ 라 하면 [부분적분](integration-by-parts.md)으로 $I_k=\frac{k-1}{k}I_{k-2}$ 이다. $I_0=\pi/2$ 에서 짝수 번 내려가면 $I_{2m}=p_m\cdot\pi/2$ 이고, $I_1=1$ 에서 홀수 번 내려가면 $I_{2m+1}=1/\bigl((2m+1)p_m\bigr)$ 이다.

$0$ 과 $\pi/2$ 사이에서 $\sin x$ 는 $0$ 과 $1$ 사이에 있으므로 거듭제곱을 올릴수록 그래프가 내려간다. 그래서 $I_{2m+1}\le I_{2m}\le I_{2m-1}$ 이고, 세 적분에 위의 식을 넣으면 다음이 나온다.

$$
\frac{1}{\pi\left(m+\frac12\right)}\le p_m^2\le\frac{1}{\pi m}
$$

$m\thinspace p_m^2$ 은 $1/\pi\approx 0.318$ 로 간다. 곧 $p_m$ 은 $1/\sqrt{\pi m}$ 에 가깝다. $m=50$ 이면 $1/\sqrt{50\pi}\approx 0.0798$ 이고 실제 확률은 $0.0796$ 이다.

# 정의

**Wallis 적분(Wallis integral)** 은 음이 아닌 정수 $k$ 에 대해 다음과 같이 정의한 $I_k$ 다.

$$
I_k=\int_0^{\pi/2}\sin^k x\thinspace dx
$$

$I_0=\pi/2$, $I_1=1$, $I_2=\pi/4$, $I_3=2/3$ 이다. $\sin x$ 대신 $\cos x$ 를 넣어도 $x\mapsto\pi/2-x$ 로 바꾸면 같은 값이다.

Wallis 곱은 다음 식이다.

$$
\frac{\pi}{2}=\prod_{k=1}^{\infty}\frac{2k}{2k-1}\cdot\frac{2k}{2k+1}=\frac21\cdot\frac23\cdot\frac43\cdot\frac45\cdot\frac65\cdot\frac67\cdots
$$

무한곱은 부분곱 $P_m=\prod_{k=1}^{m}\frac{(2k)^2}{(2k-1)(2k+1)}$ 의 극한이다. $P_1=4/3\approx 1.333$, $P_2=64/45\approx 1.422$, $P_3\approx 1.463$, $P_4\approx 1.486$ 이고 $\pi/2\approx 1.571$ 로 다가간다. 직관 절의 확률로 쓰면 $P_m=1/\bigl((2m+1)p_m^2\bigr)$ 이다.

# 성질

## Wallis 적분의 점화식

$k\ge 2$ 이면 $I_k=\frac{k-1}{k}I_{k-2}$ 이다. $\sin^k x=\sin^{k-1}x\cdot\sin x$ 로 나누어 부분적분하면 경계항 $\bigl\lbrack-\sin^{k-1}x\cos x\bigr\rbrack_0^{\pi/2}$ 은 $0$ 이고 다음이 남는다.

$$
I_k=(k-1)\int_0^{\pi/2}\sin^{k-2}x\cos^2x\thinspace dx=(k-1)(I_{k-2}-I_k)
$$

$I_k$ 를 한쪽으로 모으면 점화식이 나온다. 이것을 반복하면 다음 닫힌 식이 나온다.

$$
I_{2m}=\frac{(2m)!}{4^m(m!)^2}\cdot\frac{\pi}{2},\qquad I_{2m+1}=\frac{4^m(m!)^2}{(2m+1)!}
$$

## Wallis 곱의 증명

$0\lt x\lt\pi/2$ 에서 $0\lt\sin x\lt 1$ 이므로 $I_{2m+1}\lt I_{2m}\lt I_{2m-1}$ 이다. 이것을 $I_{2m+1}$ 로 나누고 $I_{2m-1}/I_{2m+1}=(2m+1)/(2m)$ 을 쓰면 다음이 나온다.

$$
1\lt\frac{I_{2m}}{I_{2m+1}}\lt 1+\frac{1}{2m}
$$

닫힌 식을 넣으면 $I_{2m}/I_{2m+1}=\frac{\pi}{2}\big/P_m$ 이므로 다음이 성립한다.

$$
\frac{\pi}{2}\cdot\frac{2m}{2m+1}\lt P_m\lt\frac{\pi}{2}
$$

$m\to\infty$ 이면 양쪽이 $\pi/2$ 로 가므로 Wallis 곱이 증명된다. 부분곱은 아래에서 $\pi/2$ 로 증가하고, 오차는 $\frac{\pi}{2(2m+1)}$ 보다 작다. 오차가 $1/m$ 의 빠르기로만 줄므로 이 곱으로 원주율의 자릿수를 계산하지는 않는다.

## 사인의 곱 공식

[Weierstrass 인수분해 정리](weierstrass-factorization.md)에서 다음 곱 공식이 나온다.

$$
\sin\pi z=\pi z\prod_{n=1}^{\infty}\left(1-\frac{z^2}{n^2}\right)
$$

$z=1/2$ 을 넣으면 좌변은 $1$ 이고 $1-\frac{1}{4n^2}=\frac{(2n-1)(2n+1)}{(2n)^2}$ 이다. 양변의 역수를 취하면 Wallis 곱이다.

## 중심 이항계수의 범위

직관 절의 부등식은 등호 없이 성립한다.

$$
\frac{1}{\sqrt{\pi\left(m+\frac12\right)}}\lt\frac{1}{4^m}\binom{2m}{m}\lt\frac{1}{\sqrt{\pi m}}
$$

두 경계의 비는 $\sqrt{1+1/(2m)}$ 이므로 $\binom{2m}{m}/4^m\sim 1/\sqrt{\pi m}$ 이다. 이 점근식은 계승의 근사 없이 적분의 비교만으로 얻어진다.

# 활용

- [Stirling 공식](stirling-formula.md)의 상수. 합과 적분의 비교로 $n!\sim e^C\sqrt n\thinspace(n/e)^n$ 까지 얻은 뒤, 이것을 $I_{2m}/I_{2m+1}\to 1$ 에 넣어 $e^C=\sqrt{2\pi}$ 를 정한다.
- [Euler–Maclaurin 공식](euler-maclaurin.md)으로 $\log\Gamma$ 를 전개할 때 상수항 $\frac12\log 2\pi$ 는 공식에서 나오지 않고 Wallis 곱으로 정한다. [감마 함수](gamma-function.md)의 Stirling 급수의 상수 $\sqrt{2\pi}$ 도 같다.
- [아크사인 법칙](arcsine-law.md). 대칭 무작위 걸음이 시각 $2k$ 에 원점에 있을 확률 $u_{2k}$ 가 $p_k$ 이고, 중심 이항계수의 범위로 $u_{2k}$ 가 $1/\sqrt{\pi k}$ 에 가깝다는 것이 나온다.

# 연관 문서

## 선수지식

- [부분적분](integration-by-parts.md)

## 더 알아보기

- [Stirling 공식](stirling-formula.md)

#analysis #combinatorics #probability
