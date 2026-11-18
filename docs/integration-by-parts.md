# 부분적분

# 개요

**부분적분(integration by parts)** 은 두 함수의 곱을 적분할 때, 한쪽을 미분하고 다른 쪽을 적분한 곱의 적분으로 바꾸는 방법이다. $\int_0^1 xe^x\thinspace dx$ 는 $x$ 와 $e^x$ 의 곱이라 원시함수가 바로 보이지 않는다. 부분적분은 $x$ 를 미분해 $1$ 로 만들고 $e^x$ 는 적분해도 $e^x$ 로 두어, 남는 적분을 $\int_0^1 e^x\thinspace dx$ 로 바꾼다.

# 직관

곱 $x e^x$ 를 미분하면 곱의 미분법으로 $e^x+xe^x$ 가 나온다. 구하려는 $xe^x$ 가 이 결과의 한 항이다. 그래서 $xe^x$ 는 $(xe^x)'$ 에서 $e^x$ 를 뺀 것이고, 양변을 $0$ 부터 $1$ 까지 적분하면 다음이 나온다.

$$
\int_0^1 xe^x\thinspace dx=\Bigl\lbrack xe^x\Bigr\rbrack_0^1-\int_0^1 e^x\thinspace dx=e-(e-1)=1
$$

첫 항은 [미적분학의 기본 정리](fundamental-calculus.md)로 도함수의 적분을 양 끝값의 차로 바꾼 것이다. 둘째 항의 피적분함수 $e^x$ 는 원시함수가 바로 보인다. $x$ 를 미분해 $1$ 로 만든 덕분에 적분할 함수가 단순해졌다.

# 정의

부분적분은 다음 공식이다. $f$ 와 $g$ 가 $\lbrack a,b\rbrack$ 에서 연속미분가능하면 다음이 성립한다.

$$
\int_a^b f(x)g'(x)\thinspace dx=f(b)g(b)-f(a)g(a)-\int_a^b f'(x)g(x)\thinspace dx
$$

곱의 미분법 $(fg)'=f'g+fg'$ 의 양변을 적분하면 나온다[^1]. 직관 절의 예는 $f(x)=x$, $g(x)=e^x$ 인 경우다. $f(b)g(b)-f(a)g(a)$ 를 경계항(boundary term)이라 한다.

원시함수로 쓰면 다음과 같다.

$$
\int f g'\thinspace dx=fg-\int f'g\thinspace dx
$$

# 성질

## 반복과 감마 함수

$\int_0^\infty x^ne^{-x}\thinspace dx$ 에 $f=x^n$, $g=-e^{-x}$ 로 부분적분을 쓰면 경계항이 $0$ 이고 $n\int_0^\infty x^{n-1}e^{-x}\thinspace dx$ 가 남는다. 이것을 $n$ 번 되풀이하면 값이 $n!$ 이다. 같은 계산이 [감마 함수](gamma-function.md)의 함수방정식 $\Gamma(s+1)=s\Gamma(s)$ 를 준다.

## 경계항이 사라지는 경우

$f$ 나 $g$ 가 구간의 양 끝에서 $0$ 이면 경계항이 없어져 $\int fg'=-\int f'g$ 다. 미분이 한 함수에서 다른 함수로 부호만 바꾸어 옮겨 간다.

이 등식으로 미분 가능하지 않은 함수의 도함수를 정의한다. $\varphi$ 가 매끄럽고 구간 밖에서 $0$ 인 모든 함수일 때 $\int u\varphi'=-\int v\varphi$ 가 성립하는 $v$ 를 $u$ 의 약한 도함수(weak derivative)라 한다. $u(x)=\vert x\vert$ 이면 $x\lt 0$ 에서 $-1$, $x\gt 0$ 에서 $1$ 인 함수가 약한 도함수다. 약한 도함수가 적분 가능한 함수들이 [Sobolev 공간](sobolev-spaces.md)이다.

## 다변수

영역 $\Omega\subseteq\mathbb R^n$ 과 그 경계의 바깥 단위 법선 $\nu$ 에 대해 [발산 정리](divergence-theorem.md)를 $uv$ 에 쓰면 다음이 나온다.

$$
\int_\Omega u\thinspace\partial_iv\thinspace dx=\int_{\partial\Omega}uv\thinspace\nu_i\thinspace dS-\int_\Omega\partial_iu\thinspace v\thinspace dx
$$

$i$ 에 대해 더하고 $v$ 자리에 $\partial_iv$ 를 넣으면 Green 항등식(Green's identity)이 된다. $u$ 가 경계에서 $0$ 이면 $\int_\Omega u\Delta v=-\int_\Omega\nabla u\cdot\nabla v$ 이고, 이것이 [Laplace 연산자](laplace-operator.md)의 부호를 정한다. 평면에서는 [Green 정리](greens-theorem.md)에서 같은 식이 유도된다.

## 합의 부분적분

수열 $a_n$ 의 부분합을 $A_n=a_1+\dots+a_n$ 이라 하면 $a_n=A_n-A_{n-1}$ 은 부분합의 차분이다. 적분을 합으로, 미분을 차분으로 바꾸면 다음 등식이 나온다.

$$
\sum_{n=1}^N a_nb_n=A_Nb_N-\sum_{n=1}^{N-1}A_n(b_{n+1}-b_n)
$$

이것이 [Abel 합산 공식](abel-summation.md)이다. $b_n$ 이 단조이고 $A_n$ 이 유계이면 우변으로 합의 수렴을 판정한다.

## Fourier 계수의 감소

$f$ 가 주기 $2\pi$ 의 연속미분가능 함수이면 부분적분에서 경계항이 주기성으로 지워져 다음이 나온다.

$$
\frac{1}{2\pi}\int_0^{2\pi}f(x)e^{-inx}\thinspace dx=\frac{1}{in}\cdot\frac{1}{2\pi}\int_0^{2\pi}f'(x)e^{-inx}\thinspace dx
$$

그래서 [Fourier 급수](fourier-series.md)의 계수 $\hat f(n)$ 은 $n\hat f(n)\to 0$ 을 만족한다. $f$ 가 $k$ 번 연속미분가능하면 $k$ 번 되풀이해 $n^k\hat f(n)\to 0$ 이다. 함수가 매끄러울수록 계수가 빨리 줄어든다.

# 활용

- [변분법](calculus-of-variations.md)의 Euler–Lagrange 방정식. 범함수의 변분에 나오는 $\eta'$ 항을 부분적분으로 $\eta$ 항으로 바꾸고, 끝점에서 $\eta=0$ 이므로 경계항이 사라진다.
- [유한요소법](finite-element-method.md)의 약형식(weak formulation). $-\Delta u=f$ 에 시험함수를 곱해 적분하고 부분적분으로 2 계 도함수를 1 계 도함수 둘의 곱으로 바꾼다.
- [정규분포](normal-distribution.md)의 Stein 항등식(Stein's identity). 표준정규 밀도 $\phi$ 가 $\phi'(x)=-x\phi(x)$ 를 만족하므로 부분적분으로 $E\lbrack g'(Z)\rbrack=E\lbrack Zg(Z)\rbrack$ 가 나오고, [Stein 방법](stein-method.md)이 이 등식을 쓴다.
- [Riemann–Stieltjes 적분](riemann-stieltjes-integral.md)에서는 적분하는 쪽과 적분자의 자리를 바꾸는 공식으로 쓰인다.

[^1]: W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., McGraw-Hill, 1976, Theorem 6.22.

# 연관 문서

## 선수지식

- [미적분학의 기본 정리](fundamental-calculus.md)

## 더 알아보기

- [Stirling 공식](stirling-formula.md)

#analysis #functional_analysis
