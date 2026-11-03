# Dyson 의 rank 와 crank

# 개요

**rank** 와 **crank** 는 정수의 분할(partition)마다 붙이는 정수 값이다. Ramanujan 은 $4, 9, 14, \dots$ 처럼 $5n+4$ 꼴인 수의 분할 개수가 늘 $5$ 의 배수임을 증명했지만, 그 분할들을 크기가 같은 다섯 무더기로 나누는 방법은 증명에서 나오지 않는다. rank 와 crank 는 분할마다 값을 주고 그 값의 잉여로 무더기를 지어, 합동식을 분할의 분류로 설명한다.

# 직관

Ramanujan 이 [분할수](partitions.md) 표에서 찾아낸 세 합동식이 있다.

$$
p(5n+4)\equiv0\ (\mathrm{mod}\ 5),\qquad p(7n+5)\equiv0\ (\mathrm{mod}\ 7),\qquad p(11n+6)\equiv0\ (\mathrm{mod}\ 11)
$$

증명은 [생성함수](generating-functions.md) 조작으로 나오지만, $p(5n+4)$ 개의 분할을 다섯 무더기로 똑같이 나누는 방법은 증명에서 나오지 않는다. 무더기를 지으려면 분할마다 법 $5$ 의 값을 주는 규칙이 있어야 한다.

$n=0$ 에서 $p(4)=5$ 의 다섯 분할 $4$, $3+1$, $2+2$, $2+1+1$, $1+1+1+1$ 에 가장 큰 부분에서 부분의 개수를 뺀 값을 주면 순서대로 $3,1,0,-1,-3$ 이고, 법 $5$ 로는 $3,1,0,4,2$ 라 다섯 잉여류가 하나씩 나온다. F. Dyson 은 1944 년에 이 값을 rank 라 부르고, 모든 $n$ 에서 $5n+4$ 의 분할을 rank 의 법 $5$ 잉여로 나누면 다섯 무더기의 크기가 같다고 추측했다. 법 $7$ 에서도 같은 추측을 세웠다.

법 $11$ 에서는 rank 가 무더기를 고르게 나누지 않는다. Dyson 은 세 합동식을 모두 설명하는 통계량이 있으리라 보고 정의를 모르는 채 crank 라는 이름을 붙였다. G. Andrews 와 F. Garvan 이 1988 년에 $1$ 인 부분의 개수를 따로 다루는 규칙으로 crank 를 찾았다.

# 정의

## rank

분할 $\lambda=(\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_\ell)$ 의 **rank** 는

$$
\mathrm{rank}(\lambda)=\lambda_1-\ell
$$

이다. $N(m,n)$ 은 $n$ 의 분할 가운데 rank 가 $m$ 인 것의 개수, $N(r,t,n)$ 은 rank 가 $r\pmod t$ 인 것의 개수다. 직관 절의 계산에서 $N(r,5,4)=1$ ($0\le r\le 4$) 이다.

## crank

$\omega(\lambda)$ 를 $1$ 인 부분의 개수, $\mu(\lambda)$ 를 $\omega(\lambda)$ 보다 큰 부분의 개수라 하면 **crank** 는

$$
\mathrm{crank}(\lambda)=\begin{cases}\lambda_1&\omega(\lambda)=0\cr\mu(\lambda)-\omega(\lambda)&\omega(\lambda)\gt 0\end{cases}
$$

이다. $4$ 의 다섯 분할에서 crank 는 순서대로 $4,0,2,-2,-4$ 이다. $3+1$ 에서는 $\omega=1$ 이고 $1$ 보다 큰 부분이 $3$ 하나라 $1-1=0$ 이다. $M(m,n)$ 은 $n\gt 1$ 일 때 crank 가 $m$ 인 $n$ 의 분할의 개수이고, $n=1$ 에서는 $M(0,1)=-1$, $M(\pm1,1)=1$ 로 둔다. 분할 $1$ 하나로는 균등 분포가 불가능하므로 이렇게 따로 정한다.

## 생성함수

$$
R(z;q)=\sum_{n\ge0}\sum_m N(m,n)z^mq^n=\sum_{n\ge0}\frac{q^{n^2}}{(zq;q)\_n(z^{-1}q;q)\_n}
$$

$$
C(z;q)=\sum_{n\ge0}\sum_m M(m,n)z^mq^n=\prod_{n\ge1}\frac{1-q^n}{(1-zq^n)(1-z^{-1}q^n)}
$$

여기서 $(a;q)\_n=\prod_{j=0}^{n-1}(1-aq^j)$ 이고, $z=1$ 에서 둘 다 $\sum p(n)q^n$ 이 된다.

# 성질

## 대칭성

켤레 분할은 가장 큰 부분과 부분의 개수를 맞바꾸므로 rank 의 부호를 뒤집는다. 그래서 $N(m,n)=N(-m,n)$ 이다.

## 법 5 와 법 7 의 rank

A. O. L. Atkin 과 H. P. F. Swinnerton-Dyer 는 1954 년에 Dyson 의 추측을 증명했다.

$$
N(r,5,5n+4)=\frac{p(5n+4)}{5}\ (0\le r\le4),\qquad N(r,7,7n+5)=\frac{p(7n+5)}{7}\ (0\le r\le6)
$$

$N(r,5,5n+4)$ 가 $r$ 에 무관하다는 것은 $p(5n+4)\equiv0\pmod5$ 를 함의하고, 역은 성립하지 않는다.

## 법 11 의 rank 와 crank

$p(6)=11$ 의 분할 $6$, $5+1$, $4+2$, $4+1+1$, $3+3$, $3+2+1$, $3+1+1+1$, $2+2+2$, $2+2+1+1$, $2+1+1+1+1$, $1+1+1+1+1+1$ 의 rank 는 $5,3,2,1,1,0,-1,-1,-2,-3,-5$ 다. 법 $11$ 로 $1$ 이 두 번 나오므로 rank 는 이 경우에 고르게 나누지 않는다.

같은 분할의 crank 는 $6,0,4,-1,3,1,-3,2,-2,-4,-6$ 이고 법 $11$ 로 열한 잉여류가 하나씩 나온다. Andrews 와 Garvan 은 crank 가 $5n+4$, $7n+5$, $11n+6$ 의 분할을 각각 법 $5,7,11$ 로 고르게 나눈다는 것을 증명했다.

## mock 모듈러성

$R(-1;q)$ 는 Ramanujan 의 3 차 mock theta 함수(mock theta function) $f(q)$ 다. $z$ 가 $1$ 이 아닌 $1$ 의 거듭제곱근이면 $R(z;q)$ 는 무게 $1/2$ 의 mock 모듈러 형식(mock modular form)이고, 그 그림자(shadow)는 [theta 급수](theta-series.md)다. $C(z;q)$ 는 eta 몫으로 표현되는 [Jacobi 형식](jacobi-forms.md)이다.

S. Zwegers 는 2002 년에 mock theta 함수를 조화 [Maass 형식](maass-forms.md)(harmonic Maass form)의 정칙 부분으로 해석했다. K. Bringmann 과 K. Ono 는 이것을 써서 $f(q)$ 의 계수에 대한 정확한 공식, 곧 Andrews–Dragonette 추측(Andrews–Dragonette conjecture)을 증명했다.

## 더 큰 합동식

$p(n)$ 은 $5^a7^b11^c$ 꼴의 법에서 합동식 족을 갖는다(G. N. Watson, Atkin). K. Ono 는 $5$ 이상의 모든 소수 $\ell$ 에 대해 $p(An+B)\equiv0\pmod\ell$ 인 산술급수가 무한히 많음을 보였다. 증명은 분할 생성함수를 반정수 무게 모듈러 형식으로 보고, [Galois 표현](galois-representations.md)에서 나오는 Serre 의 정리로 [Hecke 작용소](hecke-operators.md)가 법 $\ell$ 로 $0$ 이 되는 소수가 양의 밀도로 있음을 쓴다.

## 두 통계량의 대비

| | rank | crank |
| --- | --- | --- |
| 정의 | 최대 부분 빼기 부분의 개수 | 1 의 개수로 갈린 규칙 |
| 고르게 나누는 법 | 5, 7 | 5, 7, 11 |
| 생성함수 | mock 모듈러 형식 | Jacobi 형식 |

## 모멘트

F. Garvan 은 모든 $k\ge1$ 과 $n$ 에서 crank 의 짝수 차 모멘트 $\sum_m m^{2k}M(m,n)$ 이 rank 의 짝수 차 모멘트 $\sum_m m^{2k}N(m,n)$ 보다 크다는 것을 증명했다.

# 활용

- 생성함수 항등식 대신 분할들을 짝지어 합동식을 증명하는 전략이 다른 조합 수열의 합동식에도 쓰인다.
- $R(-1;q)=f(q)$ 이므로 $f(q)$ 의 $q^n$ 계수는 rank 가 짝수인 $n$ 의 분할 수에서 rank 가 홀수인 것을 뺀 값이다. Ramanujan 의 mock theta 함수가 분할 통계의 생성함수로 적힌다.

# 연관 문서

## 선수지식

- [분할수](partitions.md)
- [Mock 모듈러 형식](mock-modular-forms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #number_theory #complex_analysis
