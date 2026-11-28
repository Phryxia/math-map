# Padé 근사

# 개요

**Padé 근사(Padé approximant)** 는 함수의 [멱급수](power-series.md) 계수를 될 수 있는 대로 많이 맞추는 두 다항식의 비다. $\log(1+x)$ 의 Taylor 급수는 $x=2$ 에서 발산해서, 처음 다섯 계수로 만든 다항식은 $\log 3\approx 1.0986$ 대신 $-1.333$ 을 준다. 같은 다섯 계수를 분자와 분모가 이차인 유리함수에 맞추면 $x=2$ 에서 $1.0909$ 가 나온다.

# 직관

$\log(1+x)$ 의 멱급수는 다음과 같고, 수렴반경은 $1$ 이다.

$$
\log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots
$$

$x^4$ 까지 자른 다항식은 $x=1$ 에서 $0.5833$ 이고 참값 $\log 2\approx 0.6931$ 과 멀다. $x=2$ 에서는 $2-2+8/3-4\approx -1.333$ 이다. $\log(1+x)$ 는 $x=-1$ 에서 무한대로 가는데 다항식은 어디서도 무한대로 가지 않으므로, 이 특이점을 흉내 내지 못한다.

분모를 두어 특이점을 흉내 내게 한다. $q(x)=1+q_1x+q_2x^2$ 을 곱한 $q(x)\log(1+x)$ 의 $x^3$ 과 $x^4$ 의 계수가 $0$ 이 되게 하면 다음 두 식이 나온다.

$$
\frac13-\frac{q_1}{2}+q_2=0,\qquad -\frac14+\frac{q_1}{3}-\frac{q_2}{2}=0
$$

해는 $q_1=1$, $q_2=1/6$ 이다. 곱의 $x^2$ 까지의 부분 $p(x)=x+x^2/2$ 를 분자로 두면 다음 근사가 나온다.

$$
\log(1+x)\approx\frac{x+\tfrac12x^2}{1+x+\tfrac16x^2}
$$

이 식은 $x=1$ 에서 $9/13\approx 0.6923$ 이고, $x=2$ 에서 $12/11\approx 1.0909$ 다. 다항식과 같은 다섯 계수만 썼는데 수렴반경 밖에서도 참값에 가깝다. 분모의 영점은 $-3\pm\sqrt3$, 곧 $-1.27$ 과 $-4.73$ 이고, 둘 다 $\log(1+x)$ 가 정의되지 않는 $x\le -1$ 쪽에 있다.

# 정의

## Padé 근사

함수 $f$ 의 멱급수를 $f(x)=\sum_{k\ge 0}c_kx^k$ 라 한다. 음이 아닌 정수 $L$, $M$ 에 대해 $f$ 의 $\lbrack L/M\rbrack$ Padé 근사는 다음을 만족하는 유리함수 $p/q$ 다.

$$
\deg p\le L,\qquad \deg q\le M,\qquad q(0)=1,\qquad f(x)q(x)-p(x)=O\bigl(x^{L+M+1}\bigr)
$$

미지수는 $p$ 의 계수 $L+1$ 개와 $q$ 의 계수 $M$ 개이고, 맞출 계수도 $x^0$ 부터 $x^{L+M}$ 까지 $L+M+1$ 개다. 직관 절의 근사는 $\log(1+x)$ 의 $\lbrack 2/2\rbrack$ Padé 근사다. $M=0$ 이면 $\lbrack L/0\rbrack$ 은 $x^L$ 까지 자른 Taylor 다항식이다.

## 분모의 연립방정식

$k\lt 0$ 이면 $c_k=0$ 으로 두고 $q_0=1$ 로 둔다. $fq-p$ 에서 $x^{L+1}$ 부터 $x^{L+M}$ 까지의 계수가 $0$ 이라는 조건은 $q$ 의 계수에 대한 다음 $M$ 개의 일차식이다.

$$
\sum_{j=0}^{M}q_jc_{k-j}=0,\qquad k=L+1,\dots,L+M
$$

이 식에서 $q$ 를 구하면, 분자의 계수는 $p_k=\sum_{j=0}^{\min(k,M)}q_jc_{k-j}$ 로 정해진다. 직관 절의 두 식이 $L=M=2$ 인 경우다.

## Padé 표

$\lbrack L/M\rbrack$ 을 $L$ 행 $M$ 열에 놓은 표를 **Padé 표(Padé table)** 라 한다. 첫 열은 Taylor 다항식이고, $L=M$ 인 자리를 대각 근사라 한다. $e^{-x}$ 의 $\lbrack 1/1\rbrack$ 은 $(1+q_1x)(1-x+x^2/2-\cdots)$ 의 $x^2$ 계수 $1/2-q_1$ 이 $0$ 이어야 하므로 $q_1=1/2$ 이고, 다음과 같다.

$$
e^{-x}\approx\frac{1-\tfrac12x}{1+\tfrac12x}
$$

# 성질

## 유일성

$\lbrack L/M\rbrack$ 의 조건을 만족하는 유리함수는 있으면 하나다. 두 쌍 $p/q$, $p'/q'$ 이 조건을 만족하면 다음이 성립한다.

$$
p'q-pq'=(fq-p)q'-(fq'-p')q=O\bigl(x^{L+M+1}\bigr)
$$

왼쪽은 차수가 $L+M$ 이하인 다항식이므로 $0$ 이고, $p/q=p'/q'$ 이다. 분모의 연립방정식이 특이하면 조건을 만족하는 $p/q$ 가 없을 수 있다.

## 지수함수의 Padé 근사

$e^x$ 의 $\lbrack L/M\rbrack$ 은 분자와 분모가 다음과 같다.

$$
\begin{aligned}
p(x)&=\sum_{k=0}^{L}\frac{(L+M-k)!\thinspace L!}{(L+M)!\thinspace k!\thinspace(L-k)!}x^k\cr
q(x)&=\sum_{k=0}^{M}\frac{(L+M-k)!\thinspace M!}{(L+M)!\thinspace k!\thinspace(M-k)!}(-x)^k
\end{aligned}
$$

대각 근사 $L=M$ 에서는 $q(x)=p(-x)$ 다. $\lbrack 1/1\rbrack$ 은 $(1+x/2)/(1-x/2)$ 이고, $\lbrack 2/2\rbrack$ 의 분자는 $1+x/2+x^2/12$ 다.

## 대각 근사의 A-안정성

$e^z$ 의 대각 근사 $r=p/q$ 는 $\mathrm{Re}\thinspace z\le 0$ 인 모든 $z$ 에서 $\vert r(z)\vert\le 1$ 이다.

증명의 요지. $p$ 의 계수가 실수이고 $q(z)=p(-z)$ 이므로 허수축 위의 $z=iy$ 에서 $q(iy)$ 는 $p(iy)$ 의 켤레복소수이고, $\vert r(iy)\vert=1$ 이다. $q$ 의 영점은 모두 오른쪽 반평면에 있으므로 $r$ 은 왼쪽 반평면에서 정칙이고, 무한대에서 $\vert r\vert\to 1$ 이다. [최대 절댓값 원리](maximum-modulus-principle.md)에 따라 왼쪽 반평면 안에서도 $\vert r\vert\le 1$ 이다.

## 연분수

$f(x)=c_0+c_1x+\cdots$ 를 다음 꼴의 [연분수](continued-fractions.md)로 전개할 수 있다고 한다.

$$
f(x)=\cfrac{c_0}{1-\cfrac{a_1x}{1-\cfrac{a_2x}{1-\cdots}}}
$$

$n$ 번째 단에서 끊은 분수는 $\lbrack 0/0\rbrack$, $\lbrack 0/1\rbrack$, $\lbrack 1/1\rbrack$, $\lbrack 1/2\rbrack$, $\lbrack 2/2\rbrack,\dots$ 로 표의 대각선 둘을 번갈아 지난다. 계수 $a_k$ 는 [qd 알고리즘](qd-algorithm.md)으로 멱급수 계수에서 계산된다.

## de Montessus de Ballore 정리

$f$ 가 원판 $\vert x\vert\lt \rho$ 에서 유리형이고, 그 안의 극이 중복도를 세어 정확히 $M$ 개이며 $x=0$ 은 극이 아니라 한다. 그러면 $L\to\infty$ 일 때 $\lbrack L/M\rbrack$ 은 원판에서 극을 뺀 영역의 콤팩트 부분집합 위에서 $f$ 로 고르게 수렴하고, 분모의 영점은 $f$ 의 극으로 수렴한다. 이것이 **de Montessus de Ballore 정리(de Montessus de Ballore theorem)** 다[^1].

직관 절의 $\log(1+x)$ 처럼 극이 아닌 특이점을 가진 함수에는 이 정리가 쓰이지 않는다. 그런 함수의 대각 근사에서는 분모의 영점이 절단선 위에 줄지어 놓인다.

# 활용

- 지연의 유리 근사. 입력을 $T$ 만큼 늦추는 장치의 전달함수 $e^{-sT}$ 는 유리함수가 아니어서 [Smith 예측기](smith-predictor.md) 같은 제어 설계의 계산에 그대로 넣기 어렵다. 대각 Padé 근사 $(1-sT/2)/(1+sT/2)$ 로 바꾸면 $s=i\omega$ 에서 크기가 정확히 $1$ 이고, 위상 $-\omega T$ 가 $-2\arctan(\omega T/2)$ 로 바뀐다.
- [척도 조정과 제곱 방법](scaling-and-squaring.md). 행렬 지수 $e^A$ 를 계산할 때 $A/2^s$ 의 지수를 대각 Padé 근사로 구한 뒤 $s$ 번 제곱한다.
- [Runge–Kutta 방법](runge-kutta-methods.md)의 안정성 함수. 사다리꼴 규칙의 안정성 함수는 $e^z$ 의 $\lbrack 1/1\rbrack$ 이고, 뒤로 가는 [Euler 방법](euler-method.md)의 것은 $\lbrack 0/1\rbrack$ 이다. 대각 근사의 A-안정성이 이런 음함수 방법이 [강성 방정식](stiff-equations.md)에서 큰 걸음을 견디는 이유다.
- [Borel–Padé 재합산](borel-pade.md). 발산하는 급수를 Borel 변환한 뒤 Padé 근사로 해석적 연장을 대신한다.

[^1]: G. A. Baker Jr., P. Graves-Morris, Padé Approximants, 2nd ed., Cambridge University Press, 1996.

# 연관 문서

## 선수지식

- [멱급수](power-series.md)

## 더 알아보기

- [Borel–Padé 재합산](borel-pade.md)

#analysis #complex_analysis #computation
