# Borel–Carathéodory 정리

# 개요

**Borel–Carathéodory 정리(Borel–Carathéodory theorem)** 는 원판에서 정칙인 함수의 크기를 그 실부의 위쪽 상한과 중심에서의 값만으로 누르는 정리다. 영점이 없는 정칙함수 $h$ 가 $\lvert h\rvert\le M$ 을 만족하면 $\log h$ 의 실부 $\log\lvert h\rvert$ 는 $\log M$ 이하이지만, 허부인 편각은 위로도 아래로도 상한이 주어지지 않는다. 이 정리는 실부의 한쪽 상한만으로 조금 작은 원 위의 $\lvert\log h\rvert$ 를 누른다.

# 직관

실부의 한쪽 상한만으로는 부족한 경우가 둘 있다. 상수 $f=ci$ 는 실부가 $0$ 이지만 $\lvert f\rvert=\lvert c\rvert$ 는 얼마든지 크다. 그래서 중심의 값 $\lvert f(0)\rvert$ 가 상한에 들어가야 한다.

단위원판에서 $f(z)=-(1+z)/(1-z)$ 는 $f(0)=-1$ 이고 실부가 언제나 음수다. 그런데 $z\to 1$ 에서 $\lvert f\rvert$ 가 한없이 커진다. 그래서 상한은 경계 원 위가 아니라 그보다 작은 원 $\lvert z\rvert=r$ 위에서만 성립하고, $r$ 이 경계에 다가가면 커진다.

이 둘을 빼면 남는 것은 [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)의 Schwarz 보조정리다. $f(0)=0$ 이고 실부가 $A$ 이하이면 $\varphi=f/(2A-f)$ 는 원판을 원판 안으로 보내고 $0$ 을 $0$ 으로 보내므로 $\lvert\varphi(z)\rvert\le\lvert z\rvert$ 이다. $f$ 를 $\varphi$ 로 다시 풀면 $\lvert f\rvert$ 의 상한이 나온다.

# 정의

## Borel–Carathéodory 정리

$f$ 가 닫힌 원판 $\lvert z\rvert\le R$ 을 포함하는 열린집합에서 정칙이고, $A$ 를 원 $\lvert z\rvert=R$ 위의 $\mathrm{Re}\thinspace f$ 의 최댓값으로 둔다. $0\lt r\lt R$ 이면 다음이 성립한다[^1].

$$
\max_{\lvert z\rvert=r}\lvert f(z)\rvert\le\frac{2r}{R-r}A+\frac{R+r}{R-r}\lvert f(0)\rvert
$$

직관 절의 $f(z)=-(1+z)/(1-z)$ 는 $R$ 을 $1$ 보다 작게 잡으면 $A\lt 0$ 이고 $\lvert f(0)\rvert=1$ 이다. $r=1/2$, $R\to 1$ 이면 우변이 $3$ 에 가까워지고, $\lvert z\rvert=1/2$ 위의 $\lvert f\rvert$ 의 최댓값은 $z=1/2$ 에서의 $3$ 이다.

# 성질

## 증명의 요지

먼저 $f(0)=0$ 인 경우를 본다. [조화함수](harmonic-functions.md)인 $\mathrm{Re}\thinspace f$ 의 원 위 평균이 $\mathrm{Re}\thinspace f(0)=0$ 이므로 $A\ge 0$ 이고, $A=0$ 이면 $\mathrm{Re}\thinspace f$ 가 원 위에서 $0$ 이라 $f$ 는 상수 $0$ 이다. $A\gt 0$ 이면 최대 원리로 원판 안에서 $\mathrm{Re}\thinspace f\le A$ 이고, 다음 계산에서 $\lvert f\rvert\le\lvert 2A-f\rvert$ 다.

$$
\lvert 2A-f\rvert^2-\lvert f\rvert^2=4A\left(A-\mathrm{Re}\thinspace f\right)\ge 0
$$

$\varphi=f/(2A-f)$ 는 $\lvert\varphi\rvert\le 1$, $\varphi(0)=0$ 이므로 Schwarz 보조정리를 반지름 $R$ 의 원판에 쓰면 $\lvert\varphi(z)\rvert\le\lvert z\rvert/R$ 이다. $f=2A\varphi/(1+\varphi)$ 이므로 $\lvert z\rvert=r$ 에서 $\lvert f\rvert\le 2A(r/R)/(1-r/R)=2Ar/(R-r)$ 다.

일반 경우는 $f-f(0)$ 에 쓴다. 그 실부의 최댓값은 $A+\lvert f(0)\rvert$ 이하이므로 $\lvert f-f(0)\rvert\le 2r(A+\lvert f(0)\rvert)/(R-r)$ 이고, $\lvert f(0)\rvert$ 를 더하면 정리의 부등식이 나온다.

## 도함수의 상한

같은 논법을 Cauchy 적분 공식(Cauchy integral formula)과 합치면 도함수도 실부의 상한으로 눌린다. $n\ge 1$ 이고 $f$ 가 같은 조건을 만족하며 $A\ge 0$ 이면 다음이 성립한다[^1].

$$
\max_{\lvert z\rvert=r}\lvert f^{(n)}(z)\rvert\le\frac{2^{n+2}\thinspace n!\thinspace R}{(R-r)^{n+1}}\left(A+\lvert f(0)\rvert\right)
$$

반지름 $(R+r)/2$ 인 원에 Borel–Carathéodory 정리를 쓰고, 그 원과 반지름 $r$ 인 원 사이의 거리 $(R-r)/2$ 로 Cauchy 추정을 한다.

# 활용

- 실부가 다항식만큼만 커지는 전해석함수. 전해석함수 $f$ 가 모든 $R\ge 1$ 에 대해 $\lvert z\rvert=R$ 위에서 $\mathrm{Re}\thinspace f\le CR^k$ 를 만족하면, $r=R/2$ 로 잡아 $\lvert f\rvert\le 2CR^k+3\lvert f(0)\rvert$ 를 얻고 $f$ 는 차수 $k$ 이하의 다항식이다. $k=0$ 이면 실부가 위로 유계인 전해석함수가 상수라는 [Liouville 정리](liouville-theorem.md)의 변형이다.
- [Weierstrass 인수분해 정리](weierstrass-factorization.md)의 Hadamard 인수분해 정리(Hadamard factorization theorem). 위수가 유한한 전해석함수를 영점의 곱으로 나눈 몫은 $e^{g}$ 꼴이다. 몫의 크기에서 $\mathrm{Re}\thinspace g$ 의 상한이 나오고, 이 정리로 $g$ 가 다항식임을 보인다.
- [Riemann zeta 함수](riemann-zeta.md)의 영점 없는 영역. 로그미분 $\zeta'/\zeta$ 를 가까운 영점 $\rho$ 들의 $1/(s-\rho)$ 합과 작은 오차로 나누는 보조정리의 증명에 이 정리의 도함수 꼴을 쓴다. $\log\zeta$ 의 실부는 $\lvert\zeta\rvert$ 의 상한으로 위에서 눌린다[^2].

[^1]: E. C. Titchmarsh, The Theory of Functions, 2nd ed., Oxford University Press, 1939, 5장.
[^2]: E. C. Titchmarsh, The Theory of the Riemann Zeta-Function, 2nd ed., Oxford University Press, 1986, 3장.

# 연관 문서

## 선수지식

- [Schwarz–Pick 보조정리](schwarz-pick-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #number_theory
