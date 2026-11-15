# 타원적분

# 개요

**타원적분(elliptic integral)** 은 삼차나 사차 다항식의 제곱근이 분모나 분자에 들어간 적분이다. 반지름 $r$ 인 원의 둘레는 $2\pi r$ 이지만, 긴 반지름 $2$, 짧은 반지름 $1$ 인 타원의 둘레를 [곡선의 길이](arc-length.md) 공식으로 쓰면 $\sqrt{1-\tfrac34\sin^2\theta}$ 를 적분해야 하고, 이 적분은 초등함수로 계산되지 않는다.

타원적분은 이런 적분을 세 가지 표준형으로 모으고, 표준형의 값을 급수와 평균의 반복으로 계산한다.

# 직관

타원 $x^2/a^2+y^2/b^2=1$ ($a\ge b$) 을 $x=a\sin\theta$, $y=b\cos\theta$ 로 그린다. 속력은 $\sqrt{a^2\cos^2\theta+b^2\sin^2\theta}$ 이고, $e=\sqrt{1-b^2/a^2}$ 로 두면 이것은 $a\sqrt{1-e^2\sin^2\theta}$ 다. 사분원 하나에 해당하는 $0\le\theta\le\pi/2$ 의 길이를 네 배 하면 둘레가 나온다.

$$L=4a\int_0^{\pi/2}\sqrt{1-e^2\sin^2\theta}\thinspace d\theta$$

$e=0$ 이면 원이라 적분이 $\pi/2$ 이고 $L=2\pi a$ 다. $a=2$, $b=1$ 이면 $e^2=3/4$ 이고 적분값은 $1.211056$ 이라 둘레는 $9.688448$ 이다. 이 값은 $\sin$ 과 $\cos$ 의 원시함수로는 나오지 않고, 적분 자체를 새 함수로 두어야 한다.

# 정의

**타원적분** 은 $R$ 이 두 변수의 유리함수이고 $P$ 가 중근이 없는 삼차나 사차 다항식일 때 $\int R(x,\sqrt{P(x)})\thinspace dx$ 꼴의 적분이다. Legendre 는 모든 타원적분을 초등함수와 다음 세 표준형의 합으로 바꿀 수 있음을 보였다. $0\le k\lt 1$ 을 모듈러스(modulus)라 한다[^1].

$$F(\varphi,k)=\int_0^{\varphi}\frac{d\theta}{\sqrt{1-k^2\sin^2\theta}},\qquad E(\varphi,k)=\int_0^{\varphi}\sqrt{1-k^2\sin^2\theta}\thinspace d\theta$$

$$\Pi(n;\varphi,k)=\int_0^{\varphi}\frac{d\theta}{(1-n\sin^2\theta)\sqrt{1-k^2\sin^2\theta}}$$

차례로 제1종, 제2종, 제3종 타원적분이라 한다. $\varphi=\pi/2$ 인 것을 완전 타원적분(complete elliptic integral)이라 하고 $K(k)=F(\pi/2,k)$, $E(k)=E(\pi/2,k)$ 로 쓴다. $k'=\sqrt{1-k^2}$ 일 때 $K'=K(k')$, $E'=E(k')$ 다.

직관 절의 타원 둘레는 $L=4aE(e)$ 이고, $a=2$, $b=1$ 이면 $E(\sqrt3/2)\approx 1.211056$ 이다.

# 성질

## 급수

$\lvert k\rvert\lt 1$ 에서 피적분함수를 $k^2\sin^2\theta$ 의 거듭제곱급수로 펼쳐 항별로 적분하면 다음이 나온다.

$$K(k)=\frac{\pi}{2}\sum_{n=0}^{\infty}\left(\frac{(2n)!}{2^{2n}(n!)^2}\right)^2k^{2n},\qquad E(k)=\frac{\pi}{2}\sum_{n=0}^{\infty}\left(\frac{(2n)!}{2^{2n}(n!)^2}\right)^2\frac{k^{2n}}{1-2n}$$

$k\to 1$ 이면 $K(k)\to\infty$ 이고 $E(k)\to 1$ 이다. $E(1)=1$ 은 납작하게 눌린 타원의 둘레가 $4a$ 라는 것이다.

## 도함수

$k$ 로 미분하면 두 완전 적분이 서로의 식으로 적힌다.

$$\frac{dE}{dk}=\frac{E-K}{k},\qquad\frac{dK}{dk}=\frac{E-k'^2K}{k\thinspace k'^2}$$

## Legendre 관계식

모든 $0\lt k\lt 1$ 에서 다음이 성립하고, 이것을 Legendre 관계식(Legendre's relation)이라 한다[^1].

$$EK'+E'K-KK'=\frac{\pi}{2}$$

증명의 요지. 위 도함수 식으로 왼쪽을 $k$ 로 미분하면 $0$ 이므로 왼쪽은 상수다. 왼쪽을 $K'(E-K)+E'K$ 로 묶는다. $k\to 0$ 에서 $E-K$ 는 $k^2$ 정도로 작아지고 $K'$ 은 $\log(1/k)$ 정도로만 커지므로 첫 항은 $0$ 으로 가고, 둘째 항은 $1\cdot\pi/2$ 로 간다.

## 산술기하 평균

$K(k)=\pi/(2M(1,k'))$ 이고, $M$ 은 [산술기하 평균](arithmetic-geometric-mean.md)이다. $E$ 도 같은 반복에서 두 수열의 차를 모아 계산되고, 그 계산과 Legendre 관계식을 합친 것이 원주율을 구하는 Gauss–Legendre 알고리즘이다.

# 활용

- 타원의 둘레. $L=4aE(e)$ 다. Ramanujan 의 근사는 다음이고, $a=2$, $b=1$ 에서 $9.688421$ 을 주어 소수 넷째 자리까지 맞는다.

  $$L\approx\pi\bigl(3(a+b)-\sqrt{(3a+b)(a+3b)}\bigr)$$

- 진자의 주기. 진폭 $\theta\_0$ 인 진자의 주기는 $4K(\sin(\theta\_0/2))\sqrt{\ell/g}$ 이고, 제1종 적분의 역함수가 [Jacobi 타원함수](jacobi-elliptic-functions.md)다.
- 렘니스케이트. 다음 적분의 위끝을 변수로 둔 함수의 역함수가 [렘니스케이트 사인](lemniscatic-sine.md)이다.

  $$\int_0^1\frac{dt}{\sqrt{1-t^4}}=\frac{K(1/\sqrt2)}{\sqrt2}\approx 1.311029$$

- 원형 전류 고리의 자기장. 반지름 $R$ 인 원형 고리를 흐르는 전류가 고리 축 밖의 점에 만드는 자기장은 $K$ 와 $E$ 로 적힌다.

[^1]: National Institute of Standards and Technology (NIST), Digital Library of Mathematical Functions, 19장, https://dlmf.nist.gov/19 (19.2 정의, 19.4 도함수, 19.7 Legendre 관계식).

# 연관 문서

## 선수지식

- [곡선의 길이](arc-length.md)

## 더 알아보기

- [Jacobi 타원함수](jacobi-elliptic-functions.md)

#analysis #complex_analysis
