# Lagrange 반전 공식

# 개요

$w=z\varphi(w)$ 를 만족하는 형식적 [멱급수](power-series.md) $w(z)$ 의 계수를 $\varphi$ 의 거듭제곱 계수로 적는 공식이다. 방정식을 풀지 않고 계수만 얻는다.

재귀로 정의된 조합 구조의 [생성함수](generating-functions.md)가 이런 방정식을 만족하므로, 나무의 개수를 닫힌 식으로 세는 데 쓴다.

# 직관

괄호를 올바르게 친 방법의 수를 세려고 생성함수 $C(z)$ 를 쓰면 $C=1+zC^2$ 이 나온다. 이차방정식이라 $C=(1-\sqrt{1-4z})/(2z)$ 로 풀리고, 이항급수를 펼치면 계수가 나온다.

정점에 이름이 붙은 뿌리나무를 세면 지수생성함수가 $T=ze^{T}$ 를 만족한다. 이번에는 방정식이 대수적이지 않아 $T$ 를 초등함수로 적을 수 없다.

계수만 알면 되는데 $T$ 자체를 구하려니 막힌다. 같은 식을 $z$ 에 대해 풀면 $z=Te^{-T}$ 이고 이것은 곧바로 적힌다. 구하려는 $T(z)$ 는 이 함수의 역함수다.

역함수의 $n$ 번째 계수를 원래 함수의 계수로 적는 방법이 있으면 방정식을 풀지 않아도 된다. 계수를 유수로 쓰고 적분변수를 $z$ 에서 $w$ 로 바꾸면 그 방법이 나온다.

# 정의

## 형식적 유수

형식적 Laurent 급수 $F(z)=\sum_k f_k z^k$ 에서 $f_{-1}$ 을 **유수**라 하고 $\mathop{\mathrm{Res}}F$ 로 쓴다. 계수 뽑기는 유수로 적힌다.

$$
\lbrack z^n\rbrack F(z)=\mathop{\mathrm{Res}}\thinspace F(z)z^{-n-1}
$$

## 함수방정식

$\varphi(w)=\sum_{k\ge 0}\varphi_k w^k$ 이 $\varphi_0\ne 0$ 을 만족하면 방정식 $w=z\varphi(w)$ 는 상수항이 $0$ 인 형식적 멱급수 해 $w(z)$ 를 꼭 하나 갖는다. 계수를 차수 순으로 비교하면 각 계수가 앞의 계수들로 정해지기 때문이다.

# 성질

## 반전 공식

**정리(Lagrange).** 위 조건에서 $n\ge 1$ 이면 다음이 성립한다.[^1]

$$
\lbrack z^n\rbrack w(z)=\frac1n\lbrack w^{n-1}\rbrack\varphi(w)^n
$$

형식적 멱급수 $H$ 에 대해서는 다음 형태로 일반화된다.

$$
\lbrack z^n\rbrack H(w(z))=\frac1n\lbrack w^{n-1}\rbrack\bigl(H'(w)\varphi(w)^n\bigr)
$$

## 증명의 요지

형식적 유수는 두 성질을 만족한다. 도함수의 유수는 $0$ 이고, 치환에서는 $\mathop{\mathrm{Res}}F(z)=\mathop{\mathrm{Res}}F(z(w))z'(w)$ 가 성립한다.

$\lbrack z^n\rbrack w$ 를 유수로 쓰고 $z=w/\varphi(w)$ 로 치환한다. $z^{-n-1}z'(w)$ 를 전개하면 두 항이 나오고, 그중 하나는 $w^{-n}\varphi(w)^n/(-n)$ 의 도함수 꼴이라 유수가 $0$ 이다. 남은 항의 유수가 $\frac1n\lbrack w^{n-1}\rbrack\varphi(w)^n$ 이다. ∎

## 이름 붙은 뿌리나무

$T=ze^{T}$ 에서 $\varphi(w)=e^{w}$ 이므로 공식이 다음을 준다.

$$
\lbrack z^n\rbrack T=\frac1n\lbrack w^{n-1}\rbrack e^{nw}=\frac1n\cdot\frac{n^{n-1}}{(n-1)!}=\frac{n^{n-1}}{n!}
$$

$T$ 가 지수생성함수이므로 정점 $n$ 개에 이름이 붙은 뿌리나무가 $n^{n-1}$ 개다. 뿌리를 고르는 $n$ 가지를 나누면 나무가 $n^{n-2}$ 개이고 이것이 Cayley 공식이다.

## 평면나무

$w=z(1+w)^2$ 에서 $\varphi(w)=(1+w)^2$ 이므로 계수는 다음이다.

$$
\lbrack z^n\rbrack w=\frac1n\lbrack w^{n-1}\rbrack(1+w)^{2n}=\frac1n\binom{2n}{n-1}
$$

$n=1,2,3$ 에서 $1,2,5$ 이고 Catalan 수가 나온다. 이차방정식을 푸는 대신 이항계수 하나를 읽은 것이다.

# 활용

- **재귀 구조의 열거.** [조합적 종](combinatorial-species.md)의 방정식 가운데 $Y=Z\cdot F(Y)$ 꼴은 그대로 이 공식의 조건이다. 뿌리나무, $k$ 진나무, 괄호치기가 모두 여기 들어간다.
- **분기과정.** 자손 수 분포의 확률생성함수를 $\varphi$ 로 놓으면 전체 자손 수의 분포가 위 계수로 나온다. 투표 문제의 답도 같은 계수다.
- **점근 전개.** 계수를 이항계수나 거듭제곱으로 적고 나면 [Laplace 방법](laplace-method.md)으로 큰 $n$ 에서의 크기를 얻는다.

[^1]: Richard P. Stanley, *Enumerative Combinatorics*, Volume 2, Cambridge University Press (1999), 5.4절. 형식적 유수를 쓴 증명과 여러 변수 판이 이 절에 있다.

# 연관 문서

## 선수지식

- [생성함수](generating-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #analysis #probability
