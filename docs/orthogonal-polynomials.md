# 직교다항식

# 개요

**직교다항식(orthogonal polynomials)** 은 구간 위에서 가중치를 준 내적으로 재었을 때 서로 직교하는 다항식들의 열이다. $\lbrack -1,1\rbrack$ 에서 함수를 $1,x,x^2,\dots$ 의 결합으로 최소제곱 근사하면 정규방정식의 계수행렬이 차수가 커질수록 특이행렬에 가까워져 계수를 정확히 구하기 어렵다. 기저를 서로 직교하는 다항식으로 바꾸면 계수행렬이 대각행렬이 되어 계수가 내적 하나로 하나씩 구해진다.

# 직관

$\lbrack -1,1\rbrack$ 에서 함수를 다항식으로 최소제곱(least squares) 근사한다. 기저 $1,x,x^2,\dots$ 로 적으면 정규방정식(normal equations)의 계수행렬이 다음 값들로 채워진다.

$$
\int_{-1}^1x^{i+j}\thinspace dx=\begin{cases}\dfrac{2}{i+j+1}&i+j\quad\text{짝수}\cr 0&i+j\quad\text{홀수}\end{cases}
$$

이 [행렬](matrices.md)은 차수를 올릴수록 조건수(condition number)가 커져서 계수를 수치로 얻기 어렵다. 차수를 하나 올리면 행렬 전체가 바뀌므로 앞서 구한 계수도 다시 계산해야 한다.

막힌 원인은 기저가 직교하지 않아 행렬이 꽉 찬 것이다. [내적](inner-product-spaces.md)에 대해 직교하는 기저를 쓰면 행렬이 대각이고 각 계수가 내적 하나로 나온다. $1,x,x^2$ 를 Gram–Schmidt 과정(Gram–Schmidt process)으로 직교화하면 $1$, $x$, $x^2-\tfrac13$ 이고, 셋째 것이 앞의 둘과 직교함은 $\int_{-1}^1(x^2-\tfrac13)dx=0$ 과 $\int_{-1}^1x(x^2-\tfrac13)dx=0$ 으로 확인된다. 계수는 차수를 올려도 바뀌지 않는다.

차수마다 Gram–Schmidt 를 처음부터 되풀이할 필요도 없다. $xp_n$ 의 차수가 $n+1$ 이므로 $p_0,\dots,p_{n+1}$ 의 조합으로 적히는데, $k\le n-2$ 에서 $\langle xp_n,p_k\rangle=\langle p_n,xp_k\rangle$ 이고 $xp_k$ 의 차수가 $n$ 보다 작아 이 값이 $0$ 이다. 남는 항은 세 개이고, 세 항 사이의 점화식 하나로 차수를 올린다.

# 정의

## 가중 내적

$(a,b)$ 에서 $w\ge0$ 이고 모든 $n$ 에 대해 모멘트 $\int_a^bx^nw(x)dx$ 가 유한하다고 한다. 다항식 위의 내적을 다음으로 정한다.

$$
\langle f,g\rangle\_w=\int_a^bf(x)g(x)w(x)\thinspace dx
$$

$w$ 를 **가중함수(weight function)** 라 한다. 직관 절의 내적은 $(a,b)=(-1,1)$, $w=1$ 인 경우이고, 이때 $\langle 1,x^2\rangle\_w=2/3$, $\langle x,x^2\rangle\_w=0$ 이다.

## 직교다항식 열

다항식 열 $p_0,p_1,p_2,\dots$ 가 **직교다항식 열(orthogonal polynomial sequence)** 이라는 것은 $\deg p_n=n$ 이고 $n\ne m$ 에서 $\langle p_n,p_m\rangle\_w=0$ 이라는 뜻이다.

$w=1$, $(a,b)=(-1,1)$ 에서 직관 절의 $1$, $x$, $x^2-\tfrac13$ 이 처음 세 항이다. 다음 항은 $x^3-\tfrac35x$ 이고, $\int_{-1}^1(x^3-\tfrac35x)x\thinspace dx=\tfrac25-\tfrac25=0$ 이다. 선행계수가 $1$ 인 열을 **모닉(monic)** 열이라 한다.

$1,x,x^2,\dots$ 를 Gram–Schmidt 직교화하면 열이 존재하고, 선행계수를 정하면 유일하다.

## 고전 직교다항식

다음 다섯 가중함수의 직교다항식 열을 **고전 직교다항식(classical orthogonal polynomials)** 이라 한다. 위의 $1$, $x$, $x^2-\tfrac13$, $x^3-\tfrac35x$ 는 모닉 Legendre 다항식이다.

| 이름 | 구간 | 가중함수 |
| --- | --- | --- |
| Legendre | $(-1,1)$ | $1$ |
| Chebyshev | $(-1,1)$ | $(1-x^2)^{-1/2}$ |
| Jacobi | $(-1,1)$ | $(1-x)^\alpha(1+x)^\beta$ |
| Laguerre | $(0,\infty)$ | $x^\alpha e^{-x}$ |
| Hermite | $(-\infty,\infty)$ | $e^{-x^2}$ |

# 성질

## 삼항 점화식

모닉 직교다항식 열에는 상수 $B_n,C_n$ 이 있어 $p_{n+1}(x)=(x-B_n)p_n(x)-C_np_{n-1}(x)$ 이고 $C_n\gt0$ 이다. 이 식을 **삼항 점화식(three-term recurrence)** 이라 한다. 모닉 Legendre 다항식에서는 $B_n=0$ 이고, $x^3-\tfrac35x=x(x^2-\tfrac13)-\tfrac{4}{15}x$ 이므로 $C_2=4/15$ 다.

$xp_n$ 을 $p_0,\dots,p_{n+1}$ 로 전개하고 $k$ 번째 계수를 $\langle xp_n,p_k\rangle\_w$ 로 읽는다. 내적의 대칭성으로 이 값이 $\langle p_n,xp_k\rangle\_w$ 이고, $k\le n-2$ 면 $xp_k$ 의 차수가 $n$ 미만이라 $0$ 이다. 계수가 세 개만 남는다.

점화식의 계수를 행렬로 모으면 삼중대각 대칭행렬이고, 이를 **Jacobi 행렬(Jacobi matrix)** 이라 한다. 가중함수의 모멘트와 점화식의 계수가 서로를 결정한다.

## 영점

$p_n$ 의 영점은 $(a,b)$ 안의 서로 다른 [실수](real-numbers.md) $n$ 개다.

$p_n$ 이 $(a,b)$ 에서 부호를 바꾸는 점이 $x_1,\dots,x_m$ 이고 $m\lt n$ 이라 한다. $q(x)=\prod_{i=1}^m(x-x_i)$ 로 두면 $p_nq$ 가 $(a,b)$ 에서 부호를 바꾸지 않으므로 $\langle p_n,q\rangle\_w\ne0$ 이다. 그런데 $\deg q=m\lt n$ 이므로 직교성에서 이 값은 $0$ 이다. 따라서 $m=n$ 이고 영점이 모두 단순하다.

$p_{n-1}$ 의 영점은 $p_n$ 의 인접한 두 영점 사이에 하나씩 놓인다. 점화식과 Jacobi 행렬의 고윳값 분리에서 따라온다.

## Gauss 구적

[Gauss 구적](gaussian-quadrature.md)(Gaussian quadrature)은 다음 정리에 근거한다. $p_n$ 의 영점 $x_1,\dots,x_n$ 과 양의 가중치 $w_1,\dots,w_n$ 이 있어, 차수 $2n-1$ 이하의 모든 다항식 $f$ 에 대해 다음이 성립한다.

$$
\int_a^bf(x)w(x)\thinspace dx=\sum_{i=1}^nw_if(x_i)
$$

$f$ 를 $p_n$ 으로 나눠 $f=qp_n+r$ 로 쓰면 $\deg q\le n-1$ 과 $\deg r\le n-1$ 이다. 직교성에서 $\int qp_nw=0$ 이므로 좌변이 $\int rw$ 와 같다. 노드에서 $p_n(x_i)=0$ 이므로 우변도 $r$ 의 값만 본다. 차수 $n-1$ 이하에서 $n$ 개 점의 보간이 정확하므로 양변이 같다.

$n$ 개의 노드와 $n$ 개의 가중치로 $2n$ 개의 자유도가 있고 차수 $2n-1$ 이하가 $2n$ 차원이므로 이 차수가 최대다.

# 활용

- [Chebyshev 다항식](chebyshev-polynomials.md). 가중 $(1-x^2)^{-1/2}$ 의 직교다항식이고, 최대 오차를 최소로 하는 근사에서 등진동(equioscillation)을 주는 열이다.
- 수치적분. Gauss 구적이 피적분함수의 값 $n$ 개로 차수 $2n-1$ 까지 정확하므로, 같은 함수 호출 수에서 등간격 공식보다 정확도가 높다.
- Hermite 함수(Hermite functions). 가중 $e^{-x^2}$ 의 직교다항식에 $e^{-x^2/2}$ 를 곱한 함수가 [Fourier 변환](fourier-transform.md)의 고유함수이고 고윳값이 $i$ 의 거듭제곱이다.
- 모멘트 문제(moment problem). Jacobi 행렬의 스펙트럼 측도가 가중함수를 복원하므로, 모멘트 열이 어떤 측도에서 오는지를 점화식 계수의 양수성으로 판정한다.
- [Hilbert 공간](hilbert-spaces.md)의 직교 전개. 가중 공간 $L^2(w)$ 에서 직교다항식 열이 완비 직교계이면 함수의 전개가 노름으로 수렴한다.

# 연관 문서

## 선수지식

- [내적 공간](inner-product-spaces.md)

## 더 알아보기

- [Chebyshev 다항식](chebyshev-polynomials.md)
- [Gauss 구적](gaussian-quadrature.md)
- [Krawtchouk 다항식](krawtchouk-polynomials.md)

#analysis #linear_algebra #algorithms
