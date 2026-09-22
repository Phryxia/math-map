# 소수 정리

# 개요

$x$ 이하의 [소수](primes.md) 개수 $\pi(x)$ 에는 닫힌 공식이 없지만 큰 $x$ 에서의 점근 행동은 단순하다.

$$
\pi(x)\sim\frac{x}{\ln x}
$$

이것이 소수 정리다. $x$ 근처의 정수가 소수일 확률이 대략 $1/\ln x$ 다.

증명은 [Riemann zeta 함수](riemann-zeta.md)의 극과 영점의 위치를 소수를 세는 합으로 옮기고, 그 합을 [유수 정리](residue-theorem.md)로 계산한다.

# 직관

소수를 직접 세면 $10^3$ 이하에 $168$ 개, $10^6$ 이하에 $78498$ 개, $10^9$ 이하에 $50847534$ 개다. 개수 자체에는 규칙이 보이지 않으므로 $x$ 를 개수로 나눠 소수 하나당 정수가 몇 개인지를 본다.

| $x$ | $\pi(x)$ | $x/\pi(x)$ | $\ln x$ |
| --- | --- | --- | --- |
| $10^3$ | $168$ | $5.95$ | $6.91$ |
| $10^6$ | $78498$ | $12.74$ | $13.82$ |
| $10^9$ | $50847534$ | $19.67$ | $20.72$ |

뒤의 두 열은 차이가 $1$ 근처에 머물고 비는 $1$ 로 간다. $x$ 근처에서는 정수 $\ln x$ 개마다 소수가 하나씩 있다.

이것을 증명하려면 $p\le x$ 인 소수마다 $1$ 을 더하는 합을 다룰 도구가 있어야 한다. $\zeta$ 의 로그 미분이 소수에 대한 급수를 주는데, 거기서 소수 거듭제곱 $p^k$ 가 내놓는 값은 $1$ 이 아니라 $\ln p$ 다. 그러므로 세는 쪽도 $\ln p$ 를 더하는 것으로 바꾼다.

$p^k\le x$ 인 소수 거듭제곱마다 $\ln p$ 를 더한 값을 $\psi(x)$ 라 하자. $x$ 이하의 소수가 $x/\ln x$ 개이고 그 각각이 $\ln x$ 규모를 더하므로 $\psi(x)$ 는 $x$ 규모다. 소수 정리는 $\psi(x)\sim x$ 와 같은 진술이 된다.

$\psi(x)$ 를 $-\zeta'/\zeta$ 의 복소적분으로 쓰고 적분 경로를 왼쪽으로 밀면 $\zeta$ 의 극과 영점이 유수로 기여한다. $s=1$ 의 극이 주항 $x$ 를 주고 영점 $\rho$ 가 $-x^\rho/\rho$ 를 준다. $\lvert x^\rho\rvert=x^{\mathrm{Re}\thinspace\rho}$ 이므로 실수부가 $1$ 인 영점이 없다는 것만 보이면 영점의 기여가 주항보다 작아진다.

# 정의

## 소수 계수 함수

$$
\pi(x)=\sum_{p\le x}1,\qquad
\vartheta(x)=\sum_{p\le x}\ln p,\qquad
\psi(x)=\sum_{p^k\le x}\ln p
$$

$\psi$ 가 해석적으로 가장 다루기 쉽다. $\psi(x)=\sum_{n\le x}\Lambda(n)$ 이고 $\Lambda$ 는 von Mangoldt 함수다.

## 소수 정리

$$
\lim_{x\to\infty}\frac{\pi(x)\ln x}{x}=1
$$

$\vartheta(x)\sim x$ 와 $\psi(x)\sim x$ 가 이와 동치다. $\psi(x)-\vartheta(x)=O(\sqrt x\thinspace\ln^2x)$ 이 앞의 둘을 잇고, 부분합 공식이 $\vartheta$ 와 $\pi$ 를 잇는다.

## 로그 적분

$$
\mathrm{Li}(x)=\int_2^x\frac{dt}{\ln t}
$$

$\mathrm{Li}(x)$ 는 $x/\ln x$ 보다 정확한 근사다. 부분적분이 $\mathrm{Li}(x)=x/\ln x+x/\ln^2x+\cdots$ 를 주므로 둘의 비는 $1$ 로 가고 차이는 커진다.

# 성질

## 명시 공식

$$
\psi(x)=x-\sum_\rho\frac{x^\rho}{\rho}-\ln(2\pi)-\frac12\ln\big(1-x^{-2}\big)
$$

$\psi(x)$ 를 Perron 공식으로 $-\zeta'/\zeta$ 의 복소적분으로 쓰고 유수 정리를 적용해 얻는다. 합은 비자명한 영점 $\rho$ 전체에 대한 것이고 $\lvert\gamma\rvert$ 의 오름차순으로 대칭 합을 취한다.

$\rho=\beta+i\gamma$ 이면 $\lvert x^\rho\rvert=x^\beta$ 이므로 $\beta$ 가 진폭을 정하고 $\gamma$ 가 진동수를 정한다. 소수의 불규칙한 분포가 이 항들의 중첩이다.

## 증명의 핵심 단계

소수 정리는 $\mathrm{Re}\thinspace s=1$ 위에 $\zeta$ 의 영점이 없다는 것과 동치다. $\zeta(1+it)\ne0$ 은 [Riemann zeta 함수](riemann-zeta.md)의 성질이고, 남는 일은 이것을 $\psi(x)\sim x$ 로 옮기는 것이다.

명시 공식의 영점 합은 절대수렴하지 않으므로 유한한 높이 $T$ 에서 자르고 꼬리를 따로 추정한다. 잘린 공식은 $\psi(x)=x+O(x(\ln x)^2/T)+O(\sum_{\lvert\gamma\rvert\le T}x^\beta/\lvert\rho\rvert)$ 꼴이고, 무영점 영역이 $\beta$ 를 $1$ 에서 떼어 놓아 둘째 항을 $x$ 보다 작게 만든다. Hadamard 와 de la Vallée Poussin 이 1896 년에 독립적으로 이 길을 완성했다.

Tauber 형 정리를 쓰면 자르기 없이 끝난다. $\sum\Lambda(n)n^{-s}$ 가 $\mathrm{Re}\thinspace s=1$ 까지 정칙으로 연장된다는 사실에서 Newman 의 Tauber 정리가 $\psi(x)\sim x$ 를 바로 준다. 복소해석을 쓰지 않는 Erdős 와 Selberg 의 증명은 1949 년에 나왔다.

## 오차항

무조건적으로 알려진 형태는 다음과 같다.

$$
\pi(x)=\mathrm{Li}(x)+O\negthinspace\left(x\exp\negthinspace\left(-c(\ln x)^{3/5}(\ln\ln x)^{-1/5}\right)\right)
$$

지수의 모양은 Vinogradov–Korobov 무영점 영역의 너비에서 나온다. 무영점 영역이 넓을수록 오차가 작다.

Riemann 가설을 가정하면 오차가 다음으로 줄어든다.

$$
\pi(x)=\mathrm{Li}(x)+O\big(\sqrt x\thinspace\ln x\big)
$$

명시 공식에서 $\lvert x^\rho\rvert=x^{1/2}$ 가 되기 때문이다. 역도 성립하므로 이 오차 한계는 [Riemann 가설](riemann-hypothesis.md)과 동치다.

## $\pi(x)$ 와 $\mathrm{Li}(x)$ 의 부호

계산된 범위에서는 $\pi(x)\lt\mathrm{Li}(x)$ 이지만 Littlewood 는 차의 부호가 무한히 자주 바뀜을 증명했다. 처음 바뀌는 지점의 상계인 Skewes 수는 매우 크다.

# 활용

## 소수의 밀도를 쓰는 계산

$n$ 자리 난수가 소수일 확률이 대략 $1/(n\ln 10)$ 이므로 [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 키 생성에서 소수 하나를 찾는 시도 횟수를 추정할 수 있다. 2048 비트 소수는 평균 700 번 남짓 뽑으면 되고, 짝수와 작은 소수의 배수를 걸러 내면 더 줄어든다.

## 산술수열의 소수

[Dirichlet 지표](dirichlet-l-functions.md)로 $L$ 함수를 만들면 같은 방법이 산술수열에 적용된다. $\gcd(a,q)=1$ 이면 $a \bmod q$ 인 소수가 무한히 많고 각 잉여류에 $1/\varphi(q)$ 씩 고르게 분포한다. 소수 정리의 증명에서 $\zeta(1+it)\ne0$ 이 하는 일을 $L(1,\chi)\ne0$ 이 맡는다.

## 계산 정수론

소수를 일일이 세지 않고 $\pi(x)$ 를 계산하는 Meissel–Lehmer 계열 알고리즘이 $10^{27}$ 규모까지 도달했다. 이 계산이 명시 공식의 수치적 검증과 영점 계산의 검산에 쓰인다.

# 연관 문서

## 선수지식

- [소수](primes.md)
- [유수 정리](residue-theorem.md)
- [Riemann zeta 함수](riemann-zeta.md)

## 더 알아보기

- [Riemann 가설](riemann-hypothesis.md)
- [Dirichlet L 함수](dirichlet-l-functions.md)

#number_theory #complex_analysis #theorem
