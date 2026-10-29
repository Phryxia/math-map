# Abel 합산 공식

# 개요

**Abel 합산 공식(Abel summation formula)** 은 두 수열을 곱한 항의 합을, 한쪽은 부분합으로 다른 쪽은 이웃한 항의 차로 바꿔 쓰는 공식이다. $\sin 1/1+\sin 2/2+\sin 3/3+\cdots$ 은 항의 절댓값이 $1/n$ 과 비슷하게 줄어서 비교판정으로는 수렴 여부가 정해지지 않는다. 이 공식으로 합을 바꿔 쓰면 $\sin n$ 의 부분합은 유계이고 $1/n$ 의 이웃한 항의 차는 합이 유한하므로, 수렴하는 급수와 비교할 수 있는 꼴이 된다.

# 직관

$\sum_{n\ge1}\sin n/n$ 이 수렴하는지 정하려고 한다. [급수의 수렴판정](series-convergence.md)의 비교판정은 항의 절댓값을 쓰는데, $\lvert\sin n\rvert$ 은 $n$ 이 커져도 작아지지 않으므로 $\sum\lvert\sin n\rvert/n$ 은 조화급수처럼 발산한다. $\sin n$ 의 부호가 불규칙하게 바뀌므로 교대급수 판정도 쓸 수 없다.

막힌 이유는 $\sin n$ 이 항마다 크기를 줄이지 않는다는 것이다. 그런데 $\sin n$ 을 더해 가면 양수와 음수가 서로 지워서 부분합 $S_N=\sin 1+\cdots+\sin N$ 은 커지지 않는다. 삼각함수의 합 공식으로 계산하면 $S_N=\sin(N/2)\sin((N+1)/2)/\sin(1/2)$ 이므로 $\lvert S_N\rvert\le 1/\sin(1/2)\lt 2.1$ 이다.

그러니 $\sin n$ 을 하나씩 쓰는 대신 부분합으로 바꾼다. $\sin n=S_n-S_{n-1}$ 을 넣고 같은 $S_n$ 이 붙은 항을 모으면 다음이 된다.

$$
\sum_{n=1}^{N}\frac{\sin n}{n}=\frac{S_N}{N}+\sum_{n=1}^{N-1}S_n\left(\frac1n-\frac1{n+1}\right)
$$

오른쪽 첫 항은 $2.1/N$ 보다 작아서 $0$ 으로 간다. 둘째 합의 항은 절댓값이 $2.1\thinspace(1/n-1/(n+1))$ 을 넘지 않고, 이 값을 $n=1$ 부터 더하면 이웃한 항이 지워져 $2.1$ 을 넘지 않는다. 비교판정으로 둘째 합이 절대수렴하므로 $\sum\sin n/n$ 은 수렴한다.

# 정의

## 부분합산

수열 $(a_n)$, $(b_n)$ 에 대해 $A_n=a_1+\cdots+a_n$, $A_0=0$ 이라 하면 다음이 성립한다.

$$
\sum_{n=1}^{N}a_nb_n=A_Nb_N-\sum_{n=1}^{N-1}A_n(b_{n+1}-b_n)
$$

이 등식을 **부분합산(summation by parts)** 이라 한다. 왼쪽에 $a_n=A_n-A_{n-1}$ 을 넣고 $A_n$ 마다 계수를 모으면 오른쪽이 된다. 적분의 부분적분 $\int fg'=fg-\int f'g$ 에서 적분을 합으로, 미분을 이웃한 항의 차로 바꾼 꼴이다.

## 적분 꼴

$A(t)=\sum_{n\le t}a_n$ 이라 하고 $f$ 가 $\lbrack 1,x\rbrack$ 에서 연속미분가능하면 다음이 성립한다.

$$
\sum_{n\le x}a_nf(n)=A(x)f(x)-\int_1^xA(t)f'(t)\thinspace dt
$$

이 등식을 Abel 합산 공식이라 한다. $A(t)$ 는 정수 사이에서 상수인 계단함수이므로, $\lbrack n,n+1)$ 에서 $\int_n^{n+1}A(t)f'(t)\thinspace dt=A_n(f(n+1)-f(n))$ 이다. 이것을 더하면 부분합산의 $b_n=f(n)$ 인 경우로 돌아간다.

# 성질

## Dirichlet 판정법

**정리 (Dirichlet 판정법, Dirichlet's test).** $\sum a_n$ 의 부분합이 유계이고 $b_n$ 이 $0$ 으로 단조감소하면 $\sum a_nb_n$ 이 수렴한다.

증명의 요지. $\lvert A_n\rvert\le M$ 이라 하자. 부분합산의 첫 항 $A_Nb_N$ 은 $Mb_N\to0$ 으로 묶인다. 둘째 합의 항은 $M(b_n-b_{n+1})$ 로 묶이고 이 값들의 합은 $Mb_1$ 이므로 절대수렴한다. 직관 절의 계산이 $a_n=\sin n$, $b_n=1/n$ 인 경우다.

$a_n=(-1)^{n+1}$ 이면 부분합이 $1$ 과 $0$ 을 오가므로 교대급수의 Leibniz 판정이 이 정리의 특수한 경우다.

## Abel 판정법

**정리 (Abel 판정법, Abel's test).** $\sum a_n$ 이 수렴하고 $b_n$ 이 단조이며 유계이면 $\sum a_nb_n$ 이 수렴한다.

증명의 요지. $b_n$ 은 극한 $b$ 를 가진다. $\sum a_nb_n=\sum a_n(b_n-b)+b\sum a_n$ 으로 나누면, 첫 합에서 $a_n$ 의 부분합은 유계이고, $b_n-b$ 는 필요하면 부호를 바꿔 $0$ 으로 단조감소하게 할 수 있으므로 Dirichlet 판정법으로 수렴한다.

## 조화합의 점근식

$a_n=1$, $f(t)=1/t$ 로 두면 $A(t)=\lfloor t\rfloor=t-\lbrace t\rbrace$ 이고, $\lbrace t\rbrace$ 는 $t$ 의 소수 부분이다. Abel 합산 공식에서 다음이 나온다.

$$
\sum_{n\le x}\frac1n=\frac{\lfloor x\rfloor}{x}+\int_1^x\frac{\lfloor t\rfloor}{t^2}\thinspace dt=\log x+1-\int_1^{\infty}\frac{\lbrace t\rbrace}{t^2}\thinspace dt+O\left(\frac1x\right)
$$

$0\le\lbrace t\rbrace\lt 1$ 이므로 마지막 적분은 수렴하고 꼬리는 $1/x$ 를 넘지 않는다. 상수 $\gamma=1-\int_1^{\infty}\lbrace t\rbrace t^{-2}\thinspace dt$ 가 [Euler–Mascheroni 상수](euler-mascheroni-constant.md)다. 이 점근식의 $O(1/x)$ 부분을 더 높은 차수까지 전개하는 것이 [Euler–Maclaurin 공식](euler-maclaurin.md)이다.

# 활용

- [멱급수](power-series.md)의 Abel 정리는 $\sum c_n$ 이 수렴할 때 $\sum c_nx^n$ 이 $x\to1^-$ 에서 $\sum c_n$ 으로 간다는 진술이고, 증명은 $b_n=x^n$ 으로 둔 부분합산이다.
- [Dirichlet 급수](dirichlet-series.md) $\sum a_nn^{-s}$ 는 $f(t)=t^{-s}$ 로 둔 Abel 합산 공식으로 $s\int_1^{\infty}A(x)x^{-s-1}\thinspace dx$ 가 되고, 이 적분 표현에서 $A(x)$ 의 크기가 수렴 반평면을 정한다.
- [Mertens 정리](mertens-theorem.md)의 둘째 정리는 $\sum_{p\le x}(\log p)/p$ 의 점근식에 $f(t)=1/\log t$ 를 곱한 Abel 합산 공식으로 증명된다.
- [소수 정리](prime-number-theorem.md)에서 $\vartheta(x)\sim x$ 로부터 $\pi(x)\sim x/\log x$ 를 유도하는 계산은 소수 $p$ 에서 $a_p=\log p$ 로 두고 $f(t)=1/\log t$ 를 곱한 Abel 합산 공식이다.
- [Riemann–Stieltjes 적분](riemann-stieltjes-integral.md)으로는 $\sum_{n\le x}a_nf(n)=\int f\thinspace dA$ 이고, Abel 합산 공식은 이 적분의 부분적분 공식이다.
- [Fourier 급수](fourier-series.md) $\sum\sin(nx)/n$ 이 $x$ 가 $2\pi$ 의 배수가 아닐 때 수렴한다는 것은 직관 절의 계산에서 $1$ 을 $x$ 로 바꾼 Dirichlet 판정법이다.

# 연관 문서

## 선수지식

- [급수의 수렴판정](series-convergence.md)

## 더 알아보기

- [Euler–Mascheroni 상수](euler-mascheroni-constant.md)

#analysis #number_theory
