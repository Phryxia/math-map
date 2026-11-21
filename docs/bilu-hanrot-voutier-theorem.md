# Bilu–Hanrot–Voutier 정리

# 개요

**Bilu–Hanrot–Voutier 정리(Bilu–Hanrot–Voutier theorem)** 는 바로 앞 두 항으로 다음 항이 정해지는 [Lucas 수열](lucas-sequences.md)에서 $n$ 번째 항이 $n\gt 30$ 이면 앞 항들에 없던 새 소인수를 반드시 갖는다는 정리다. [Fibonacci 수](fibonacci-numbers.md) $1,1,2,3,5,8,13,21,34,55,89,144$ 를 소인수분해하면 대부분의 항에 처음 보는 소수가 있지만 $8=2^3$ 과 $144=2^4\cdot 3^2$ 에는 없다. 정리는 이런 항이 어느 Lucas 수열에서나 $n\le 30$ 에서만 나온다고 답하고, 항에서 떼어 낸 원분 인수가 앞 항들의 소인수만으로는 이룰 수 없을 만큼 크다는 것을 보여 증명한다.

# 직관

Fibonacci 수는 $F_n=(\varphi^n-\psi^n)/(\varphi-\psi)$ 다. $\varphi,\psi$ 를 정수 $a,b$ 로 바꾸면 [Zsigmondy 정리](zsigmondy-theorem.md)가 다루는 $a^n-b^n$ 의 꼴이다. Zsigmondy 정리의 증명은 $a^n-b^n$ 의 원분 인수가 $n$ 보다 커진다는 크기 비교였고, $\vert\varphi\vert\gt\vert\psi\vert$ 이므로 같은 비교가 $F_n$ 에도 통한다. 실제로 새 소인수가 없는 $F_n$ 은 $n=1,2,6,12$ 뿐이다.

$\varphi,\psi$ 대신 $x^2-x+2=0$ 의 두 근을 쓴다.

$$
\alpha=\frac{1+\sqrt{-7}}{2},\qquad \beta=\frac{1-\sqrt{-7}}{2},\qquad u_n=\frac{\alpha^n-\beta^n}{\alpha-\beta}
$$

$u_n$ 은 $u_{n}=u_{n-1}-2u_{n-2}$ 를 만족하는 정수이고 $0,1,1,-1,-3,-1,5,7,-3,-17,-11,23,45,-1,\dots$ 로 이어진다. $u_{13}=-1$ 에는 소인수가 하나도 없다.

$\alpha$ 와 $\beta$ 는 켤레이므로 절댓값이 $\sqrt 2$ 로 같고, $\alpha/\beta=e^{i\theta}$ 로 쓰면 $\vert\alpha^n-\beta^n\vert=2^{n/2}\vert e^{in\theta}-1\vert$ 다. $13\theta$ 는 $2\pi$ 의 $5$ 배와 $0.03$ 정도만 차이 나서 $\vert e^{13i\theta}-1\vert$ 가 $0.03$ 쯤이다. 그래서 $\vert\alpha^{13}-\beta^{13}\vert$ 는 $2^{13/2}\approx 90$ 에 $0.03$ 을 곱한 $2.6$ 쯤이고, $\vert\alpha-\beta\vert=\sqrt 7$ 로 나누면 $\vert u_{13}\vert=1$ 이다. 두 근의 절댓값이 같으면 $n\theta$ 가 $2\pi$ 의 배수에 가까운 $n$ 마다 항이 작아지고, Zsigmondy 정리의 크기 비교가 막힌다.

# 정의

## Lucas 쌍과 Lucas 수열

**Lucas 쌍(Lucas pair)** 은 $\alpha+\beta$ 와 $\alpha\beta$ 가 $0$ 이 아닌 서로소인 정수이고 $\alpha/\beta$ 가 $1$ 의 거듭제곱근이 아닌 두 대수적 수 $(\alpha,\beta)$ 다. Lucas 쌍의 **Lucas 수열(Lucas sequence)** 은 $u_n=(\alpha^n-\beta^n)/(\alpha-\beta)$ 이다.

$(\varphi,\psi)$ 는 $\alpha+\beta=1$, $\alpha\beta=-1$ 인 Lucas 쌍이고 그 Lucas 수열은 Fibonacci 수다. 직관 절의 $(\alpha,\beta)$ 는 $\alpha+\beta=1$, $\alpha\beta=2$ 인 Lucas 쌍이다.

## 원시 소인수

$(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta$ 는 정수다. 소수 $p$ 가 $u_n$ 을 나누고 $(\alpha-\beta)^2u_1u_2\cdots u_{n-1}$ 을 나누지 않으면 $p$ 를 $u_n$ 의 **원시 소인수(primitive divisor)** 라 한다.

Fibonacci 수에서는 $(\varphi-\psi)^2=5$ 다. $F_{11}=89$ 의 $89$ 는 원시 소인수이고, $F_{12}=144$ 의 $2$ 와 $3$ 은 $F_3=2$, $F_4=3$ 을 나누므로 원시 소인수가 아니다. 이 정의로는 $F_5=5$ 에도 원시 소인수가 없다.

## Lehmer 쌍

**Lehmer 쌍(Lehmer pair)** 은 $(\alpha+\beta)^2$ 와 $\alpha\beta$ 가 $0$ 이 아닌 서로소인 정수이고 $\alpha/\beta$ 가 $1$ 의 거듭제곱근이 아닌 $(\alpha,\beta)$ 다. **Lehmer 수(Lehmer number)** 는 $n$ 이 홀수이면 $(\alpha^n-\beta^n)/(\alpha-\beta)$, 짝수이면 $(\alpha^n-\beta^n)/(\alpha^2-\beta^2)$ 이다. 원시 소인수는 $(\alpha^2-\beta^2)^2$ 와 앞의 Lehmer 수를 모두 나누지 않는 소인수다.

$\alpha=(\sqrt 5+\sqrt{-3})/2$ 와 그 켤레 $\beta$ 는 $(\alpha+\beta)^2=5$, $\alpha\beta=2$ 인 Lehmer 쌍이다. $\alpha+\beta=\sqrt 5$ 가 정수가 아니므로 Lucas 쌍은 아니다. 모든 Lucas 쌍은 Lehmer 쌍이다.

# 성질

## 정리의 진술

Bilu, Hanrot, Voutier 는 2001 년에 다음을 증명했다.[^1] $n\gt 30$ 이면 모든 Lucas 쌍의 $u_n$ 과 모든 Lehmer 쌍의 $n$ 번째 Lehmer 수가 원시 소인수를 갖는다.

$30$ 은 더 줄일 수 없다. 직관 절의 수열에서 $u_{30}=-24475=-5^2\cdot 11\cdot 89$ 이고 $5\mid u_6$, $11\mid u_{10}$, $89\mid u_{15}$ 이므로 원시 소인수가 없다. 같은 논문은 $n\le 30$ 에서 원시 소인수가 없는 Lucas 쌍과 Lehmer 쌍을 전부 표로 적었다.

## 실수 쌍

$\alpha,\beta$ 가 실수이면 $n\gt 12$ 에서 $u_n$ 이 원시 소인수를 갖는다. Carmichael 이 1913 년에 증명했다.[^2] $F_{12}=144$ 가 이 경계에 닿는 예다.

증명의 요지. $\alpha+\beta$ 와 $\alpha\beta$ 가 정수이고 판별식 $(\alpha-\beta)^2$ 가 양수이면 $\vert\alpha\vert\ne\vert\beta\vert$ 다. 아래 원분 인수의 크기가 $\vert\alpha\vert^{\varphi(n)}$ 정도로 자라므로 Zsigmondy 정리와 같은 크기 비교가 된다. $\varphi(n)$ 은 Euler 피함수(Euler's totient function)다.

## 원분 인수

$\Phi_d(x,y)$ 를 $d$ 차 원분다항식(cyclotomic polynomial)을 동차화한 것이라 하면 다음이 성립한다.

$$
u_n=\prod_{d\mid n,\thinspace d\gt 1}\Phi_d(\alpha,\beta)
$$

Fibonacci 수에서는 $\Phi_2=1$, $\Phi_3=2$, $\Phi_4=3$, $\Phi_6=4$, $\Phi_{12}=6$ 이고 곱이 $F_{12}=144$ 다. 각 $\Phi_d(\alpha,\beta)$ 는 정수다.

$u_n$ 의 원시 소인수는 모두 $\Phi_n(\alpha,\beta)$ 를 나눈다. $\Phi_n(\alpha,\beta)$ 의 소인수 가운데 원시 소인수가 아닌 것은 $n$ 을 나누는 소수 하나뿐이고, $n\gt 12$ 이면 그 지수가 $1$ 이다. 따라서 $n\gt 12$ 에서 $u_n$ 에 원시 소인수가 없으면 $\vert\Phi_n(\alpha,\beta)\vert\le n$ 이다. 직관 절의 수열에서 $\Phi_{30}(\alpha,\beta)=-5$ 다.

## 복소 쌍과 Baker 정리

$\alpha,\beta$ 가 켤레 복소수이면 $\Phi_n(\alpha,\beta)$ 는 $1$ 의 원시 $n$ 제곱근 $\zeta$ 전부에 걸친 $\alpha-\zeta\beta$ 의 곱이고, $\vert\alpha-\zeta\beta\vert=\vert\alpha\vert\thinspace\vert 1-\zeta\beta/\alpha\vert$ 다. $\beta/\alpha$ 가 어떤 $\zeta$ 에 가까우면 그 인수가 작아져 $\vert\Phi_n(\alpha,\beta)\vert$ 를 아래에서 누를 수 없다.

[Baker 정리](baker-theorem.md)는 대수적 수의 로그의 일차결합 $n\log(\alpha/\beta)-2\pi ik$ 가 $0$ 이 아니면 $n$ 의 거듭제곱의 역수보다 작아질 수 없다는 하한을 준다. 이 하한으로 $\vert\Phi_n(\alpha,\beta)\vert\gt n$ 이 되는 $n$ 의 명시적 상한을 얻는다. Bilu, Hanrot, Voutier 는 그 상한 아래의 $n$ 을 계산으로 확인해 경계를 $30$ 으로 내렸다.

# 활용

- [Ramanujan–Nagell 방정식](ramanujan-nagell-equation.md) $x^2+7=2^m$ 은 직관 절의 수열에서 $u_n=\pm 1$ 이 되는 $n$ 을 찾는 문제다. $\mathbb Z\lbrack\alpha\rbrack$ 는 [유일분해정역](unique-factorization-domains.md)이고 $2=\alpha\beta$ 이므로 $(x+\sqrt{-7})/2=\pm\alpha^{m-2}$ 또는 $\pm\beta^{m-2}$ 가 된다. 켤레를 빼면 $u_{m-2}=\pm 1$ 이다. $u_n=\pm 1$ 인 $n=1,2,3,5,13$ 이 해 $m=3,4,5,7,15$ 를 준다. Nagell 이 1948 년에 이것이 해의 전부임을 증명했다.
- 항이 $\pm 1$ 이거나 앞 항들의 소인수만으로 된 Lucas 수열과 Lehmer 수열의 항은 $n\le 30$ 에서만 나온다. 그래서 $u_n=\pm p^k$ 꼴의 지수 Diophantus 방정식은 $n\le 30$ 의 경우를 직접 확인하는 문제로 줄어든다.
- $\alpha,\beta$ 가 서로소인 정수 $a,b$ 이면 $u_n=(a^n-b^n)/(a-b)$ 이고, 원시 소인수의 물음은 Zsigmondy 정리의 물음이 된다.

[^1]: Yu. Bilu, G. Hanrot, P. M. Voutier, "Existence of primitive divisors of Lucas and Lehmer numbers", *Journal für die reine und angewandte Mathematik* **539** (2001), 75–122.
[^2]: R. D. Carmichael, "On the numerical factors of the arithmetic forms αⁿ±βⁿ", *Annals of Mathematics* **15** (1913), 30–70.

# 연관 문서

## 선수지식

- [Zsigmondy 정리](zsigmondy-theorem.md)

## 더 알아보기

- [Ramanujan–Nagell 방정식](ramanujan-nagell-equation.md)

#number_theory #algebra
