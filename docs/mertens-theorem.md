# Mertens 정리

# 개요

Mertens 정리는 소수 역수의 합이 $\log\log x$ 로 커진다는 것과 그 오차의 크기를 주는 세 추정이다. 세 추정 모두 [소수 정리](prime-number-theorem.md)보다 먼저 증명되었고 증명에 복소해석을 쓰지 않는다. 가중 $\log p$ 를 붙인 합을 $\sum\_{n\le x}\log n$ 의 두 가지 계산으로 먼저 잡고, 거기서 가중을 떼어 나머지 둘을 얻는다.

# 직관

$\sum\_{n\le x}1/n$ 은 $\log x$ 쯤으로 커진다. 소수만 골라 $\sum\_{p\le x}1/p$ 를 더하면 얼마나 커지는가.

Euler 의 전개로 하한을 잡는다. 각 소수마다 등비급수를 펼쳐 곱하면

$$
\prod\_{p\le x}\left(1-\frac1p\right)^{-1}=\prod\_{p\le x}\left(1+\frac1p+\frac1{p^2}+\cdots\right)
$$

이고, 오른쪽을 전개하면 소인수가 모두 $x$ 이하인 자연수의 역수가 전부 한 번씩 나온다. $n\le x$ 인 $n$ 은 소인수가 모두 $x$ 이하이므로 그 안에 들어 있고, 따라서 이 곱은 $\sum\_{n\le x}1/n$ 보다 크다. 로그를 취하고 $-\log(1-1/p)=1/p+O(1/p^2)$ 를 쓰면 $\sum\_{p\le x}1/p\gt\log\log x-C$ 가 나온다.

상한은 이 방법으로 나오지 않는다. 곱을 전개한 급수에는 $x$ 보다 큰 수의 역수도 들어 있어서, 곱이 $\sum\_{n\le x}1/n$ 보다 얼마나 더 큰지 전개만으로는 재지 못한다.

전개가 소인수분해를 느슨하게 쓴 탓이니, 소인수분해를 등식으로 쓸 수 있는 양을 센다. $\log n=\sum\_{p^k\mid n}\log p$ 이므로 $\sum\_{n\le x}\log n$ 을 두 가지로 계산한다. 왼쪽은 Stirling 으로 $x\log x-x+O(\log x)$ 다. 오른쪽은 $p^k\le x$ 인 각 소수 거듭제곱마다 그 배수의 개수 $\lfloor x/p^k\rfloor$ 를 세어 $\log p$ 를 더한 것이고, $k\ge 2$ 인 항의 합은 $O(x)$ 다. 두 계산을 맞추면 $\sum\_{p\le x}(\log p)/p=\log x+O(1)$ 이고, 이 등식에는 상한과 하한이 함께 들어 있다.

가중 $\log p$ 를 Abel 합으로 떼면 $\sum\_{p\le x}1/p$ 의 값이 $\log\log x$ 에 상수를 더한 것으로 정해지고, 다시 지수로 올리면 Euler 곱의 크기가 정해진다.

# 정의

$p$ 는 소수를 지나고 $\gamma$ 는 Euler–Mascheroni 상수다. 세 추정을 차례로 **제1, 제2, 제3 Mertens 정리**라 한다.[^1]

$$
\sum\_{p\le x}\frac{\log p}{p}=\log x+O(1)
$$

$$
\sum\_{p\le x}\frac1p=\log\log x+M+O\negthinspace\left(\frac1{\log x}\right)
$$

$$
\prod\_{p\le x}\left(1-\frac1p\right)^{-1}=e^{\gamma}\log x+O(1)
$$

둘째 식의 상수 $M=0.2614\dots$ 를 **Mertens 상수**라 한다.

# 성질

## 제1 정리의 증명

$\sum\_{n\le x}\log n$ 을 두 가지로 센다. Stirling 공식이 $x\log x-x+O(\log x)$ 를 주고, 소인수분해 $\log n=\sum\_{p^k\mid n}\log p$ 를 넣어 소수 거듭제곱마다 모으면 다음을 준다.

$$
\sum\_{n\le x}\log n=\sum\_{p^k\le x}\left\lfloor\frac{x}{p^k}\right\rfloor\log p
$$

$k\ge 2$ 인 항은 $\sum\_p(\log p)\sum\_{k\ge 2}x/p^k=O(x)$ 이고, $k=1$ 인 항에서 바닥함수를 $x/p+O(1)$ 로 바꾸면 오차가 $O(\vartheta(x))=O(x)$ 다. 여기서 $\vartheta(x)=\sum\_{p\le x}\log p$ 이고 $\vartheta(x)=O(x)$ 는 Chebyshev 의 추정이다. 남은 항 $x\sum\_{p\le x}(\log p)/p$ 를 $x\log x+O(x)$ 와 맞추고 $x$ 로 나누면 제1 정리다.

## 제2 정리의 증명

$A(x)=\sum\_{p\le x}(\log p)/p$ 로 두면 제1 정리가 $A(x)=\log x+R(x)$, $R(x)=O(1)$ 을 준다. $1/p=\lbrack(\log p)/p\rbrack\cdot(1/\log p)$ 로 보고 Abel 합을 쓰면

$$
\sum\_{p\le x}\frac1p=\frac{A(x)}{\log x}+\int\_2^x\frac{A(t)}{t\log^2 t}dt
$$

가 된다. $A(t)=\log t+R(t)$ 를 넣으면 $\log t$ 쪽 적분이 $\log\log x$ 를 주고 $R(t)$ 쪽 적분이 수렴한다. 그 수렴값과 $A(x)/\log x$ 의 극한이 모여 상수 $M$ 이 되고, 꼬리의 크기가 $O(1/\log x)$ 다.

## 소수 정리와의 관계

제2 정리는 소수 정리보다 약하다. $\pi(x)=\mathrm{li}(x)+E(x)$ 로 쓰면 제2 정리의 오차항은 $E(t)/(t\log t)$ 의 적분만 제약하므로, $E$ 가 부호를 바꾸며 상쇄되는 한 $E(x)/x$ 가 $0$ 으로 가지 않아도 성립한다. 거꾸로 소수 정리는 제2 정리의 오차를 $O(1/\log^2 x)$ 로 줄인다.

$M$ 과 $\gamma$ 의 관계는 제3 정리가 준다. $\log$ 를 취해 $-\log(1-1/p)=1/p+\sum\_{k\ge 2}1/(kp^k)$ 를 쓰면

$$
M=\gamma-\sum\_p\sum\_{k\ge 2}\frac1{kp^k}
$$

이고, 제3 정리의 상수가 $e^{\gamma}$ 인 것이 이 등식과 같은 내용이다.

# 활용

- **체의 주항.** [체 방법](sieve-methods.md)에서 $z$ 보다 작은 소수로 걸러 남는 개수의 주항이 $x\prod\_{p\le z}(1-1/p)$ 이고, 제3 정리가 그 값을 $e^{-\gamma}x/\log z$ 로 준다. 체의 상한을 소수 정리 없이 계산할 수 있는 근거다.
- **영점의 쌍 상관.** [쌍 상관 추측](pair-correlation-conjecture.md)의 증명에서 대각항 $\sum\_{n\le x}\Lambda(n)^2/n$ 의 크기를 제1 정리가 준다.
- **소수의 무한성의 정량화.** [소수](primes.md)가 무한히 많다는 것에서 더 나아가, 역수 합이 발산하는 속도까지 제2 정리가 정한다. 역수 합이 수렴하는 부분집합은 소수 전체보다 희박하다.

[^1]: F. Mertens, "Ein Beitrag zur analytischen Zahlentheorie", *Journal für die reine und angewandte Mathematik* 78 (1874), 46–62. 세 정리의 증명과 Abel 합의 계산은 G. Tenenbaum, *Introduction to Analytic and Probabilistic Number Theory*, 3rd ed. (2015) 의 1장에 있다.

# 연관 문서

## 선수지식

- [소수](primes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis
