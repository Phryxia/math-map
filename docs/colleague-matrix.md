# Colleague 행렬

# 개요

**Colleague 행렬(colleague matrix)** 은 [Chebyshev 다항식](chebyshev-polynomials.md)의 합으로 적은 다항식에 대해, 고윳값이 그 다항식의 근이 되도록 만든 행렬이다. 구간 $\lbrack -1,1\rbrack$ 에서 함수를 $\sum a_kT_k(x)$ 꼴로 어림한 뒤 근을 구하려 할 때, 계수를 $x^k$ 의 계수로 바꾸면 $T\_{10}$ 하나만 해도 계수 $-1280$ 이 생겨 반올림 오차가 커진다. Colleague 행렬은 계수 $a_k$ 를 바꾸지 않고 그대로 행렬에 넣어, 근을 고윳값 문제로 계산한다.

# 직관

$T\_{10}(x)=512x^{10}-1280x^8+1120x^6-400x^4+50x^2-1$ 은 $\lbrack -1,1\rbrack$ 에서 절댓값이 $1$ 이하다. 그런데 거듭제곱으로 전개한 각 항은 $1280$ 까지 커지고, 값 $1$ 이하는 이 큰 항들이 서로 지워져서 나온다. 계수마다 상대오차 $\varepsilon$ 의 반올림이 있으면 값에는 $1000\varepsilon$ 정도의 오차가 생긴다. [Wilkinson 다항식](wilkinson-polynomial.md)이 보이듯 계수의 작은 오차로도 근은 크게 움직이므로, Chebyshev 계수를 거듭제곱 계수로 바꾸지 않고 근을 구하는 방법이 필요하다.

동반행렬은 $x\cdot x^k=x^{k+1}$ 을 행렬로 적은 것이다. Chebyshev 다항식에서는 같은 자리에 점화식 $xT_0=T_1$, $xT_k=\frac12(T\_{k-1}+T\_{k+1})$ 을 쓴다. $p(x)=T_2(x)+T_1(x)=2x^2+x-1$ 을 본다. 근 $x$ 에서는 $p(x)=0$ 이므로 $T_2(x)=-T_1(x)$ 이고

$$
xT_0=T_1,\qquad xT_1=\tfrac12(T_0+T_2)=\tfrac12T_0-\tfrac12T_1
$$

이다. 벡터 $v=(T_0(x),T_1(x))$ 로 쓰면 $xv=Cv$, $C=\begin{pmatrix}0&1\cr 1/2&-1/2\end{pmatrix}$ 이다. $C$ 의 특성다항식은 $\lambda^2+\frac12\lambda-\frac12=\frac12(2\lambda^2+\lambda-1)$ 이므로 고윳값이 $p$ 의 근 $\frac12$, $-1$ 이다.

$x=\frac12$ 에서 $v=(1,\frac12)$ 이고 $Cv=(\frac12,\frac14)$ 가 $\frac12v$ 다. $C$ 의 성분은 $p$ 의 Chebyshev 계수 $1,1$ 과 점화식의 $\frac12$ 뿐이다.

# 정의

$n\ge 2$ 이고 $p(x)=\sum_{k=0}^{n}a_kT_k(x)$, $a_n\ne 0$ 이라 하자. $p$ 의 colleague 행렬은

$$
C=\begin{pmatrix}0&1&&&\cr \frac12&0&\frac12&&\cr &\ddots&\ddots&\ddots&\cr &&\frac12&0&\frac12\cr &&&\frac12&0\end{pmatrix}-\frac1{2a_n}\begin{pmatrix}0&\cdots&0\cr \vdots&&\vdots\cr 0&\cdots&0\cr a_0&\cdots&a\_{n-1}\end{pmatrix}
$$

인 $n\times n$ 행렬이다[^1]. 첫째 항은 점화식을 적은 삼중대각행렬이고, 둘째 항은 마지막 행에만 $p$ 의 계수를 놓는다. 직관 절의 $C$ 는 $n=2$, $(a_0,a_1,a_2)=(0,1,1)$ 인 경우다. 마지막 행이 $(\frac12,0)-\frac12(0,1)=(\frac12,-\frac12)$ 다.

# 성질

## 특성다항식

$$
\det(xI-C)=\frac{p(x)}{2^{n-1}a_n}
$$

이다. 따라서 $C$ 의 고윳값은 중복도까지 $p$ 의 근과 같다.

증명의 요지. $v(x)=(T_0(x),\dots,T\_{n-1}(x))$ 로 두면 점화식으로 첫 $n-1$ 개 성분이 지워져

$$
(xI-C)\thinspace v(x)=\frac{p(x)}{2a_n}\thinspace e_n
$$

이다. 마지막 성분은 $xT\_{n-1}=\frac12(T\_{n-2}+T_n)$ 에 $T_n=(p-\sum_{k\lt n}a_kT_k)/a_n$ 을 넣어 계산한다.

Cramer 공식으로 이 식의 첫 성분 $T_0=1$ 을 읽으면 $1=\frac{p(x)}{2a_n}\cdot\frac{c}{\det(xI-C)}$ 이다. $c$ 는 $xI-C$ 의 $(n,1)$ 여인수(cofactor)다.

마지막 행과 첫 열을 지운 행렬은 대각이 $-1,-\frac12,\dots,-\frac12$ 인 아래삼각행렬이므로 $c=2^{-(n-2)}$ 이다. 직관 절에서 $\det(xI-C)=\frac12(2x^2+x-1)=p(x)/2$ 이다.

## 근에 속하는 고유벡터

$p(x_0)=0$ 이면 위 식에서 $Cv(x_0)=x_0v(x_0)$ 이므로 $v(x_0)=(T_0(x_0),\dots,T\_{n-1}(x_0))$ 가 고유벡터다. 첫 성분이 $1$ 이어서 영벡터가 아니다. 동반행렬의 고유벡터가 $(1,x_0,\dots,x_0^{n-1})$ 인 것과 같은 꼴이다.

## 다른 직교다항식

세 항 점화식 $xP_k=\alpha_kP\_{k+1}+\beta_kP_k+\gamma_kP\_{k-1}$ 을 만족하는 [직교다항식](orthogonal-polynomials.md)의 합 $\sum a_kP_k$ 에 대해서도 같은 방법으로 행렬을 만든다. 삼중대각 부분에 $\alpha_k,\beta_k,\gamma_k$ 를 놓고 마지막 행에 계수를 놓은 이 행렬을 comrade 행렬(comrade matrix)이라 한다[^2]. Colleague 행렬은 $P_k=T_k$ 인 경우다.

# 활용

- 함수의 근 찾기. 구간 위의 매끄러운 함수를 Chebyshev 절점에서 보간해 $\sum a_kT_k$ 를 얻고, colleague 행렬의 고윳값을 [QR 알고리즘](qr-algorithm.md)으로 구한 뒤 $\lbrack -1,1\rbrack$ 가까이 있는 실수 고윳값만 남긴다. Chebfun 의 근 찾기가 이 방법을 쓰고, 차수가 크면 구간을 나누어 각 조각에서 따로 푼다[^3].
- 극값 찾기. $p'$ 의 Chebyshev 계수는 $p$ 의 계수에서 점화식으로 바로 계산되므로, $p'$ 의 colleague 행렬로 $p$ 의 극값 후보를 모두 구한다.

[^1]: I. J. Good, "The colleague matrix, a Chebyshev analogue of the companion matrix", *The Quarterly Journal of Mathematics* 12 (1961), 61–68.
[^2]: S. Barnett, "A companion matrix analogue for orthogonal polynomials", *Linear Algebra and its Applications* 12 (1975), 197–208.
[^3]: L. N. Trefethen, *Approximation Theory and Approximation Practice*, SIAM, 2013. 18 장.

# 연관 문서

## 선수지식

- [Wilkinson 다항식](wilkinson-polynomial.md)
- [Chebyshev 다항식](chebyshev-polynomials.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #analysis #algorithms #computation
