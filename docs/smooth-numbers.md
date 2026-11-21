# 매끄러운 수

# 개요

**매끄러운 수(smooth number)** 는 소인수가 모두 정해진 한계 이하인 양의 정수다. [지표 계산법](index-calculus.md)과 [이차 체](quadratic-sieve.md)는 무작위로 만든 정수 가운데 작은 소수만으로 쪼개지는 것을 골라 모은다. 그래서 $10^6$ 이하의 정수 가운데 소인수가 모두 $1000$ 이하인 것이 몇 개인지를 알아야 알고리즘의 실행 시간이 정해진다.

이 개수의 비율은 $u=\log x/\log y$ 하나로 정해지는 Dickman 함수(Dickman function) $\rho(u)$ 로 근사된다. 위의 경우는 $u=2$ 이고 비율은 $\rho(2)=1-\log 2\approx 0.31$ 에 가깝다.

# 직관

$100$ 이하의 양의 정수 가운데 소인수가 모두 $10$ 이하인 것을 센다. 하나씩 소인수분해하는 대신, 소인수 가운데 $10$ 보다 큰 것이 있는 수를 세어 $100$ 에서 뺀다.

$10$ 보다 큰 소수 둘을 곱하면 $11\cdot 11=121$ 이상이므로 $100$ 을 넘는다. 그래서 $100$ 이하의 수는 $10$ 보다 큰 소인수를 많아야 하나 갖는다. 그 소인수가 $p$ 인 수는 $p$ 의 배수 $\lfloor 100/p\rfloor$ 개이고, 겹치지 않으므로 그대로 더한다. $p=11,13,17,\dots,97$ 의 스물한 개 소수에 대해 더하면 다음이 나온다.

$$
\sum\_{10\lt p\le 100}\left\lfloor\frac{100}{p}\right\rfloor=9+7+5+5+4+3+3+2+2+2+2+1\cdot 10=54
$$

남는 수는 $100-54=46$ 개다.

같은 계산을 $x$ 와 $y=\sqrt x$ 로 한다. $y$ 보다 큰 소수 둘의 곱은 $x$ 를 넘으므로 이번에도 큰 소인수는 많아야 하나이고, 소인수가 모두 $y$ 이하가 아닌 수의 개수는 $\sum\_{y\lt p\le x}\lfloor x/p\rfloor$ 다. 바닥함수를 떼면 이 값은 $x$ 에 $y$ 와 $x$ 사이의 소수의 역수 합을 곱한 것에 가깝다.

[Mertens 정리](mertens-theorem.md)는 소수의 역수 합이 $\log\log x$ 에 상수를 더한 것이라 한다. 그래서 $y$ 와 $x$ 사이의 역수 합은 $\log\log x-\log\log\sqrt x=\log 2$ 로 간다. 소인수가 모두 $\sqrt x$ 이하인 수의 비율은 $1-\log 2\approx 0.307$ 로 간다. $x=10^6$, $y=1000$ 이면 실제 개수는 $344299$ 개이고 비율은 $0.344$ 다.

# 정의

## 매끄러운 수와 개수 함수

양의 정수 $n\ge 2$ 의 가장 큰 소인수를 $P(n)$ 이라 하고 $P(1)=1$ 로 둔다. $P(n)\le y$ 이면 $n$ 을 **$y$-매끄러운 수(y-smooth number)** 라 한다. $x$ 이하의 $y$-매끄러운 수의 개수를 다음으로 쓴다.

$$
\Psi(x,y)=\char35{}\lbrace n\le x : P(n)\le y\rbrace
$$

직관 절의 계산은 $\Psi(100,10)=46$ 이다. $45=3^2\cdot 5$ 는 $10$-매끄럽고 $46=2\cdot 23$ 은 그렇지 않다.

## Dickman 함수

**Dickman 함수(Dickman function)** $\rho:\lbrack 0,\infty)\to(0,1\rbrack$ 는 $0\le u\le 1$ 에서 $\rho(u)=1$ 이고, $u\gt 1$ 에서 연속이며 다음 미분방정식을 만족하는 함수다.

$$
u\rho'(u)=-\rho(u-1)
$$

양변을 $u$ 로 나누어 $1$ 부터 적분하면 다음 적분방정식과 같다.

$$
\rho(u)=1-\int\_1^u\frac{\rho(t-1)}{t}\thinspace dt
$$

$1\le u\le 2$ 에서는 $\rho(t-1)=1$ 이므로 $\rho(u)=1-\log u$ 이고, 직관 절의 $1-\log 2$ 가 $\rho(2)$ 다. $u\gt 2$ 에서는 닫힌 꼴이 없고, 값은 다음과 같다.

| u | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $\rho(u)$ | $1$ | $0.3069$ | $0.04861$ | $0.004911$ | $0.0003547$ |

# 성질

## Dickman 정리

**Dickman 정리(Dickman's theorem)** 는 $u\ge 1$ 을 고정하면 다음이 성립한다는 정리다.[^1]

$$
\Psi\negthinspace\left(x,x^{1/u}\right)\sim\rho(u)\thinspace x\qquad(x\to\infty)
$$

증명의 요지. $y$-매끄럽지 않은 $n\le x$ 를 가장 큰 소인수 $p=P(n)\gt y$ 로 가르면 $n=pm$ 이고 $m\le x/p$, $P(m)\le p$ 다. 그래서 다음 Buchstab 항등식(Buchstab identity)이 성립한다.

$$
\Psi(x,y)=\lfloor x\rfloor-\sum\_{y\lt p\le x}\Psi\negthinspace\left(\frac xp,p\right)
$$

$p=x^{1/t}$ 로 쓰면 $\log(x/p)/\log p=t-1$ 이므로, $\lfloor u\rfloor$ 에 대한 귀납법으로 $\Psi(x/p,p)$ 를 $\rho(t-1)\thinspace x/p$ 로 바꾼다. Mertens 정리에서 $\sum 1/p$ 의 증분은 $d(\log\log p)=-dt/t$ 이므로 합이 $x\int\_1^u\rho(t-1)\thinspace dt/t$ 로 간다. 이것이 적분방정식이다.

## 점근

$u\to\infty$ 이면 다음이 성립한다.[^2]

$$
\rho(u)=\exp\bigl(-u(\log u+\log\log u-1+o(1))\bigr)
$$

거칠게는 $\rho(u)=u^{-u(1+o(1))}$ 이다. $u$ 가 $1$ 늘 때마다 $\rho$ 는 대략 $u$ 배 작아지고, 위 표의 $3$ 에서 $5$ 까지가 그렇다.

**Canfield–Erdős–Pomerance 정리(Canfield–Erdős–Pomerance theorem)** 는 $u$ 가 $x$ 와 함께 커지는 범위로 이 크기를 넓힌다. 임의의 $\varepsilon\gt 0$ 에 대해 $y\ge(\log x)^{1+\varepsilon}$ 이고 $u\to\infty$ 이면 다음이 성립한다.[^3]

$$
\Psi(x,y)=x\thinspace u^{-u(1+o(1))}
$$

Hildebrand 는 $y\ge\exp\bigl((\log\log x)^{5/3+\varepsilon}\bigr)$ 에서 $\Psi(x,y)\sim\rho(u)\thinspace x$ 가 균등하게 성립함을 보였다.[^2]

## 작은 한계

$y$ 를 고정하면 $y$-매끄러운 수는 $\prod\_{p\le y}p^{e\_p}$ 꼴이고, $\Psi(x,y)$ 는 $\sum e\_p\log p\le\log x$ 를 만족하는 음이 아닌 정수 벡터의 개수다. 이 영역은 단체이므로 $\pi(y)$ 를 $y$ 이하의 소수의 개수라 하면 다음이 성립한다.[^2]

$$
\Psi(x,y)\sim\frac{1}{\pi(y)!}\prod\_{p\le y}\frac{\log x}{\log p}
$$

$y=3$ 이면 $2^a3^b\le x$ 의 개수가 $(\log x)^2/(2\log 2\log 3)$ 에 점근한다. 이 범위에서 매끄러운 수의 비율은 $x$ 의 거듭제곱만큼 작다.

## Rankin 방법

상계는 **Rankin 방법(Rankin's method)** 으로 짧게 나온다. $0\lt\sigma\lt 1$ 이면 $n\le x$ 에서 $(x/n)^\sigma\ge 1$ 이므로 다음이 성립한다.

$$
\Psi(x,y)\le\sum\_{P(n)\le y}\left(\frac xn\right)^{\sigma}=x^{\sigma}\prod\_{p\le y}\left(1-p^{-\sigma}\right)^{-1}
$$

$\sigma=1-1/\log y$ 로 고르면 $x^\sigma=xe^{-u}$ 이고 곱은 $O(\log y)$ 이므로 $\Psi(x,y)=O(xe^{-u}\log y)$ 가 나온다. $\sigma$ 를 $u$ 에 맞춰 더 작게 고르면 $u^{-u(1+o(1))}$ 꼴의 상계가 나온다.[^2]

# 활용

- 지표 계산법. 관계 하나를 얻는 데 드는 시행 횟수가 $1/\rho(u)\approx u^u$ 이고, 인수 기저의 한계를 이 값과 인수 기저의 크기가 맞도록 고르면 실행 시간 $L\_p\lbrack 1/2,\sqrt 2\rbrack$ 가 나온다.
- 이차 체와 [수체 체](number-field-sieve.md). 체로 거르는 값의 크기가 각각 $\sqrt n$ 과 $n$ 의 더 작은 거듭제곱 정도이고, 그 값이 매끄러울 확률을 Canfield–Erdős–Pomerance 정리로 넣어 $L\_n\lbrack 1/2,1\rbrack$ 와 $L\_n\lbrack 1/3,(64/9)^{1/3}\rbrack$ 를 얻는다.
- [Pollard p − 1 방법](pollard-p-minus-1.md). 소인수 $p$ 에 대해 $p-1$ 이 $B$-매끄러우면 성공하므로, 성공 확률이 $\rho(\log p/\log B)$ 정도다.
- [타원곡선 소인수분해](elliptic-curve-factorization.md). 곡선마다 군의 위수가 Hasse 구간에서 바뀌고, 그 위수가 매끄러울 확률이 곡선 하나의 성공 확률이다. 이 확률로 곡선 수와 한계를 맞추면 기대 시간 $L\_p\lbrack 1/2,\sqrt 2\rbrack$ 가 나온다.

[^1]: K. Dickman, "On the frequency of numbers containing prime factors of a certain relative magnitude", *Arkiv för Matematik, Astronomi och Fysik* 22A (1930), 1–14.

[^2]: A. Granville, "Smooth numbers: computational number theory and beyond", in *Algorithmic Number Theory*, MSRI Publications 44 (2008), 267–323. Hildebrand 의 범위, ρ 의 점근, 작은 y 의 공식, Rankin 방법이 1–3 절에 있다. G. Tenenbaum, *Introduction to Analytic and Probabilistic Number Theory*, 3rd ed. (2015) 의 III.5 장도 같은 내용을 담는다.

[^3]: E. R. Canfield, P. Erdős, C. Pomerance, "On a problem of Oppenheim concerning 'factorisatio numerorum'", *Journal of Number Theory* 17 (1983), 1–28.

# 연관 문서

## 선수지식

- [Mertens 정리](mertens-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #algorithms
