# Stirling 공식

# 개요

**Stirling 공식(Stirling's formula)** 은 큰 $n$ 에서 $n!$ 을 거듭제곱과 지수로 근사하는 식이다. 동전을 100 번 던져 앞면이 정확히 50 번 나올 확률은 $\binom{100}{50}/2^{100}$ 인데, $100!$ 은 158 자리 수여서 손으로 약분할 수 없다. Stirling 공식으로 계승을 $\sqrt{2\pi n}\thinspace(n/e)^n$ 으로 바꾸면 거듭제곱끼리 약분되어 이 확률이 $1/\sqrt{50\pi}\approx 0.0798$ 로 나온다. 실제 값은 $0.0796$ 이다.

# 직관

$\log n!$ 은 $\log 1$ 부터 $\log n$ 까지의 합이므로 적분과 견줄 수 있다. 높이가 $\log k$ 인 점들을 선분으로 이은 꺾은선 아래 넓이는 $\log n!-\frac12\log n$ 이고, 곡선 $y=\log x$ 아래 넓이는 다음과 같다.

$$
\int_1^n\log x\thinspace dx=n\log n-n+1
$$

$\log x$ 는 위로 볼록하므로 꺾은선은 곡선보다 아래에 있고, 두 넓이의 차는 조각마다 작다. 그래서 $\log n!-\frac12\log n-(n\log n-n)$ 이 $n$ 이 커져도 크게 변하지 않을 것이고, 이 값을 $C$ 라 하면 $n!\approx e^C\sqrt n\thinspace(n/e)^n$ 이다.

실제로 $n!$ 을 $\sqrt n\thinspace(n/e)^n$ 으로 나눈 값은 $n=1$ 에서 $e\approx 2.718$, $n=10$ 에서 $2.528$, $n=100$ 에서 $2.509$ 이다. 이 값은 $\sqrt{2\pi}\approx 2.5066$ 으로 줄어든다. 상수가 $\sqrt{2\pi}$ 인 것은 적분 $\int_0^{\pi/2}\sin^k x\thinspace dx$ 의 계산에서 나온다.

# 정의

Stirling 공식은 다음이다.

$$
\lim_{n\to\infty}\frac{n!}{\sqrt{2\pi n}\thinspace(n/e)^n}=1
$$

이것을 $n!\sim\sqrt{2\pi n}\thinspace(n/e)^n$ 으로 쓴다. $a_n\sim b_n$ 은 $a_n/b_n\to 1$ 이라는 뜻이고, 차 $a_n-b_n$ 이 $0$ 으로 간다는 뜻이 아니다. $n=10$ 에서 우변은 $3598696$ 이고 $10!=3628800$ 이어서 차는 $30104$ 이지만 비는 $1.0084$ 이다.

# 성질

## 극한의 존재

$d_n=\log n!-(n+\frac12)\log n+n$ 으로 둔다. $t=1/(2n+1)$ 이면 $1+1/n=(1+t)/(1-t)$ 이고 $n+\frac12=1/(2t)$ 이므로 다음이 성립한다.

$$
d_n-d_{n+1}=\frac{1}{2t}\log\frac{1+t}{1-t}-1
$$

[Taylor 정리](taylor-theorem.md)로 얻는 다음 급수를 넣는다.

$$
\log\frac{1+t}{1-t}=2\left(t+\frac{t^3}{3}+\frac{t^5}{5}+\cdots\right)
$$

그러면 다음이 나온다.

$$
d_n-d_{n+1}=\frac{t^2}{3}+\frac{t^4}{5}+\frac{t^6}{7}+\cdots
$$

이 값은 양수이고, 각 항의 분모를 $3$ 으로 바꾼 등비급수보다 작다.

$$
0\lt d_n-d_{n+1}\lt\frac{t^2}{3(1-t^2)}=\frac{1}{12n}-\frac{1}{12(n+1)}
$$

따라서 $d_n$ 은 감소하고 $d_n-\frac{1}{12n}$ 은 증가한다. 두 수열이 서로를 막으므로 $d_n$ 은 극한 $C$ 로 수렴하고 $C\lt d_n\lt C+\frac{1}{12n}$ 이다[^1].

## 상수 √2π

$I_k=\int_0^{\pi/2}\sin^k x\thinspace dx$ 에 [부분적분](integration-by-parts.md)을 쓰면 $I_k=\frac{k-1}{k}I_{k-2}$ 이고, $I_0=\pi/2$, $I_1=1$ 에서 시작해 다음을 얻는다.

$$
I_{2m}=\frac{(2m)!}{4^m(m!)^2}\cdot\frac{\pi}{2},\qquad I_{2m+1}=\frac{4^m(m!)^2}{(2m+1)!}
$$

$0\le\sin x\le 1$ 이므로 $I_{2m+1}\le I_{2m}\le I_{2m-1}$ 이고, $I_{2m-1}/I_{2m+1}=(2m+1)/(2m)\to 1$ 이므로 $I_{2m}/I_{2m+1}\to 1$ 이다. 앞 절의 $n!\sim e^C\sqrt n\thinspace(n/e)^n$ 을 넣으면 $(2m)!/(4^m(m!)^2)\sim\sqrt 2/(e^C\sqrt m)$ 이고 다음이 나온다.

$$
\frac{I_{2m}}{I_{2m+1}}\sim\frac{\pi}{2}\cdot\frac{2}{e^{2C}}\cdot\frac{2m+1}{m}\to\frac{2\pi}{e^{2C}}
$$

이 극한이 $1$ 이므로 $e^C=\sqrt{2\pi}$ 다. $I_{2m}/I_{2m+1}\to 1$ 을 곱으로 풀어 쓴 것이 [Wallis 곱](wallis-product.md) $\frac{\pi}{2}=\prod_{m\ge 1}\frac{4m^2}{4m^2-1}$ 이다.

## 오차의 범위

두 절을 합치면 모든 $n\ge 1$ 에서 다음이 성립한다.

$$
\sqrt{2\pi n}\left(\frac ne\right)^n\lt n!\lt\sqrt{2\pi n}\left(\frac ne\right)^n e^{1/(12n)}
$$

$e^{1/(12n)}\approx 1+\frac{1}{12n}$ 이므로 상대오차는 $\frac{1}{12n}$ 정도다. $n=10$ 에서 $1+\frac{1}{120}=1.0083$ 이고 정의 절의 비 $1.0084$ 와 맞는다. 상대오차를 $1/n$ 의 거듭제곱으로 더 전개한 것이 [감마 함수](gamma-function.md)의 Stirling 급수(Stirling series)다.

## 중심 이항계수

앞 절의 계산에서 다음이 나온다.

$$
\frac{1}{4^m}\binom{2m}{m}\sim\frac{1}{\sqrt{\pi m}}
$$

$m=50$ 이면 개요의 $1/\sqrt{50\pi}\approx 0.0798$ 이다. 같은 방법으로 $0\lt\alpha\lt 1$ 이고 $k=\alpha n$ 이 정수일 때 다음이 성립한다.

$$
\binom{n}{k}\sim\frac{e^{nH(\alpha)}}{\sqrt{2\pi n\alpha(1-\alpha)}},\qquad H(\alpha)=-\alpha\log\alpha-(1-\alpha)\log(1-\alpha)
$$

$H$ 는 자연로그로 쓴 [Shannon 엔트로피](entropy.md)다.

# 활용

- [Catalan 수](catalan-numbers.md)의 점근. 닫힌 식 $\frac{1}{n+1}\binom{2n}{n}$ 에 중심 이항계수의 점근을 넣으면 $4^n/(n^{3/2}\sqrt\pi)$ 이다.
- [아크사인 법칙](arcsine-law.md). 대칭 무작위 걸음이 시각 $2k$ 에 원점에 있을 확률 $u_{2k}=\binom{2k}{k}/4^k$ 가 $1/\sqrt{\pi k}$ 에 가깝다는 것에서 아크사인 밀도가 나온다.
- [이항분포](binomial-distribution.md)의 정규근사. 이항확률의 계승을 Stirling 공식으로 바꾸고 $\log$ 를 2 차까지 전개하면 정규밀도가 나온다. 이것이 [중심극한정리](central-limit-theorem.md)의 de Moivre–Laplace 판이다.
- [대편차 원리](large-deviations.md)의 동전 예. 이항계수의 지수 $nH(\alpha)$ 가 앞면 비율이 $\alpha$ 일 확률의 지수 감소율을 정한다.
- [확률적 방법](probabilistic-method.md)의 Ramsey 수 하한. $\binom nk$ 를 $n^k/k!$ 로 묶고 $k!$ 에 Stirling 공식을 써서 조건이 성립하는 $n$ 을 정한다.
- [Mertens 정리](mertens-theorem.md)의 증명. $\log\lfloor x\rfloor!=x\log x-x+O(\log x)$ 를 소인수분해로 센 합과 견준다.
- [Laplace 방법](laplace-method.md). $n!=\int_0^\infty t^ne^{-t}\thinspace dt$ 의 최대점 근처를 Gauss 적분으로 바꾸어 같은 공식을 얻고, 같은 방법을 지수에 큰 매개변수가 든 다른 적분에 쓴다.

[^1]: H. Robbins, "A Remark on Stirling's Formula", *The American Mathematical Monthly* 62 (1955), 26–29.

# 연관 문서

## 선수지식

- [셈의 기본 원리](counting-principles.md)
- [Wallis 곱](wallis-product.md)
- [Taylor 정리](taylor-theorem.md)

## 더 알아보기

- [Laplace 방법](laplace-method.md)

#analysis #combinatorics #probability
