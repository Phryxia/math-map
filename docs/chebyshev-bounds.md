# Chebyshev 추정

# 개요

Chebyshev 추정은 $x$ 이하 소수의 개수 $\pi(x)$ 가 $x/\log x$ 의 두 상수배 사이에 놓인다는 부등식이다. [소수 정리](prime-number-theorem.md)와 달리 복소해석을 쓰지 않고 이항계수의 소인수를 세는 것으로 증명되며, 상수를 꼼꼼히 잡으면 Bertrand 가설이 따라 나온다.

# 직관

$x$ 이하의 소수가 몇 개인가. 개수를 정확히 세는 대신 $x/\log x$ 의 몇 배 안에 있는지만 정한다.

세는 도구는 이항계수 $\binom{2n}{n}$ 이다. 이 수는 $(1+1)^{2n}=4^n$ 의 항 가운데 가장 큰 하나이므로 $4^n/(2n+1)\le\binom{2n}{n}\le 4^n$ 이다. 그리고 $\binom{2n}{n}=(2n)!/(n!)^2$ 의 소인수는 모두 $2n$ 이하다.

상한을 먼저 본다. $n\lt p\le 2n$ 인 소수 $p$ 는 $(2n)!$ 을 한 번 나누고 $n!$ 을 나누지 않으므로 $\binom{2n}{n}$ 을 정확히 한 번 나눈다. 그런 소수가 여럿이면 그 곱이 $\binom{2n}{n}$ 을 나누므로

$$
\prod\_{n\lt p\le 2n}p\le\binom{2n}{n}\le 4^n
$$

이고, 로그를 취하면 $\vartheta(2n)-\vartheta(n)\le 2n\log 2$ 다. $n=x/2, x/4, \dots$ 로 쌓아 더하면 $\vartheta(x)\le(2\log 2)x$ 가 나온다.

하한은 같은 이항계수를 반대쪽에서 읽는다. $\binom{2n}{n}$ 에서 소수 $p$ 의 지수는 $\log\_p 2n$ 을 넘지 못하므로 $p$ 의 거듭제곱이 $2n$ 보다 크지 않고, 소인수가 $2n$ 이하이므로

$$
\frac{4^n}{2n+1}\le\binom{2n}{n}\le(2n)^{\pi(2n)}
$$

이다. 로그를 취하면 $\pi(2n)\log 2n\ge 2n\log 2-\log(2n+1)$ 이고, $\pi(x)$ 가 $x/\log x$ 의 상수배보다 크다.

# 정의

소수 계량 함수와 Chebyshev 의 두 함수를 다음으로 쓴다. $\Lambda$ 는 von Mangoldt 함수로, $n=p^k$ 이면 $\Lambda(n)=\log p$ 이고 그 밖에서는 $0$ 이다.

$$
\pi(x)=\sum\_{p\le x}1,\qquad \vartheta(x)=\sum\_{p\le x}\log p,\qquad \psi(x)=\sum\_{n\le x}\Lambda(n)
$$

$\vartheta$ 를 **제1 Chebyshev 함수**, $\psi$ 를 **제2 Chebyshev 함수**라 한다.

# 성질

## 상한과 하한

상수 $c\_1,c\_2\gt 0$ 이 있어 충분히 큰 $x$ 에서 다음이 성립한다.[^1]

$$
c\_1\frac{x}{\log x}\le\pi(x)\le c\_2\frac{x}{\log x}
$$

$\vartheta$ 쪽으로는 $c\_1x\le\vartheta(x)\le c\_2x$ 와 같은 내용이다. 직관 절의 계산은 $c\_2=2\log 2$ 와 $c\_1=\log 2$ 를 준다. Chebyshev 자신은 $0.921\lt\pi(x)\log x/x\lt 1.106$ 을 얻었다.

## 세 함수의 동등성

$$
\psi(x)=\sum\_{k\ge 1}\vartheta(x^{1/k}),\qquad \psi(x)-\vartheta(x)=O(\sqrt x\log^2 x)
$$

$\vartheta(x)=\sum\_{p\le x}\log p\le\pi(x)\log x$ 이고, 거꾸로 $\varepsilon\gt 0$ 에 대해 $\vartheta(x)\ge(\pi(x)-\pi(x^{1-\varepsilon}))(1-\varepsilon)\log x$ 다. 따라서 $\pi(x)\log x/x$, $\vartheta(x)/x$, $\psi(x)/x$ 가 같은 극한을 갖거나 셋 다 극한을 갖지 않는다. 소수 정리는 이 공통 극한이 $1$ 이라는 진술이고, Chebyshev 추정은 극한의 존재를 묻지 않고 상하한만 준다.

## Bertrand 가설

$n\ge 1$ 이면 $n\lt p\le 2n$ 인 소수 $p$ 가 있다.

증명의 요지. 그런 소수가 없다고 하면 $\binom{2n}{n}$ 의 소인수가 모두 $2n/3$ 이하다. $2n/3\lt p\le n$ 인 소수는 $(2n)!$ 과 $(n!)^2$ 을 같은 횟수로 나누므로 기여하지 않고, $\sqrt{2n}\lt p\le 2n/3$ 인 소수는 지수가 $1$ 이하이며, $p\le\sqrt{2n}$ 인 소수는 지수가 $\log\_p 2n$ 이하다. 세 몫을 곱해 $\binom{2n}{n}\le 4^{2n/3}(2n)^{\sqrt{2n}}$ 을 얻는데, 이것이 $4^n/(2n+1)$ 보다 작아지는 것은 $n$ 이 충분히 클 때 성립하지 않는다. 남는 작은 $n$ 은 직접 확인한다.

# 활용

- **Mertens 정리.** [Mertens 정리](mertens-theorem.md)의 제1 정리를 증명할 때 바닥함수를 $x/p$ 로 바꾸며 생기는 오차가 $O(\vartheta(x))$ 이고, 그것이 $O(x)$ 임을 이 추정이 준다.
- **체의 상한.** [체 방법](sieve-methods.md)에서 걸러 남는 개수의 상한을 평가할 때 걸러 쓰는 소수의 개수와 로그 합이 필요하고, 소수 정리를 쓰지 않고 그 크기를 잡는다.
- **소수 간격.** [소수 간격](prime-gaps.md)이 다루는 연속한 소수의 차에 대해, Bertrand 가설이 $p\_{n+1}\lt 2p\_n$ 이라는 첫 상한을 준다.

[^1]: P. L. Chebyshev, "Mémoire sur les nombres premiers", *Journal de mathématiques pures et appliquées* 17 (1852), 366–390. 이항계수를 쓰는 증명과 Bertrand 가설의 Erdős 식 증명은 T. M. Apostol, *Introduction to Analytic Number Theory* (1976) 의 4장에 있다.

# 연관 문서

## 선수지식

- [소수](primes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis
