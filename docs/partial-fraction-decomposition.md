# 부분분수 분해

# 개요

**부분분수 분해(partial fraction decomposition)** 는 분모가 인수분해되는 분수식을, 분모가 인수 하나의 거듭제곱뿐인 간단한 분수들의 합으로 쓰는 방법이다. $\int dx/(x^2-1)$ 은 피적분함수의 원시함수가 바로 보이지 않는다. 부분분수 분해는 $1/(x^2-1)$ 을 $1/(x-1)$ 과 $1/(x+1)$ 의 상수배의 합으로 바꾸고, 두 항은 각각 로그로 적분된다.

# 직관

$x^2-1=(x-1)(x+1)$ 이므로 상수 $A$, $B$ 를 찾아 다음과 같이 쓰려 한다.

$$
\frac{1}{(x-1)(x+1)}=\frac{A}{x-1}+\frac{B}{x+1}
$$

양변에 $(x-1)(x+1)$ 을 곱하면 $1=A(x+1)+B(x-1)$ 이다. $x=1$ 을 넣으면 $A=1/2$ 이고, $x=-1$ 을 넣으면 $B=-1/2$ 이다. 그러므로 적분은 다음과 같다.

$$
\int\frac{dx}{x^2-1}=\frac12\log\vert x-1\vert-\frac12\log\vert x+1\vert+C
$$

$1=A(x+1)+B(x-1)$ 을 만족하는 상수가 있었던 것은 $x-1$ 과 $x+1$ 이 공통인수를 갖지 않기 때문이다. 공통인수가 없는 두 다항식의 다항식 계수 일차결합으로 $1$ 을 만들 수 있고, 그 계수는 [유클리드 알고리즘](euclidean-algorithm.md)으로 구한다.

# 정의

$K$ 를 [체](fields.md), $p/q$ 를 $K$ 계수 다항식의 분수로 $\deg p\lt\deg q$ 인 것이라 한다. [다항식환](polynomial-rings.md) $K\lbrack x\rbrack$ 에서 $q$ 를 서로 다른 모닉 기약다항식의 거듭제곱의 곱 $q=c\thinspace q_1^{e_1}\cdots q_r^{e_r}$ 로 쓴다. 부분분수 분해는 다음 꼴의 등식이고, 이런 $a_{ij}$ 는 하나뿐이다[^1].

$$
\frac{p}{q}=\sum_{i=1}^r\sum_{j=1}^{e_i}\frac{a_{ij}}{q_i^{\thinspace j}},\qquad \deg a_{ij}\lt\deg q_i
$$

직관 절의 예는 $K=\mathbb Q$, $q_1=x-1$, $q_2=x+1$, $e_1=e_2=1$ 이고 $a_{11}=1/2$, $a_{21}=-1/2$ 이다. 같은 인수가 거듭 나오면 거듭제곱마다 항이 하나씩 생긴다.

$$
\frac{1}{x^2(x-1)}=-\frac1x-\frac1{x^2}+\frac1{x-1}
$$

$\deg p\ge\deg q$ 이면 먼저 나눗셈으로 $p=sq+t$, $\deg t\lt\deg q$ 로 쓰고 $t/q$ 를 분해한다.

# 성질

## 존재와 유일성

$u$ 와 $v$ 가 공통인수가 없으면 $1=su+tv$ 인 다항식 $s,t$ 가 있다. 양변에 $p/(uv)$ 를 곱하면 $p/(uv)=ps/v+pt/u$ 이므로, $q$ 의 서로 다른 기약인수의 거듭제곱마다 분수 하나씩으로 나뉜다. 분자 $a$ 가 $\deg a\lt e\deg q_i$ 인 $a/q_i^e$ 는 $a$ 를 $q_i$ 로 거듭 나누어 $a=\sum_j b_jq_i^{\thinspace j}$, $\deg b_j\lt\deg q_i$ 로 쓰면 분해된다.

유일성은 차수로 보인다. 두 분해의 차가 $0$ 인데 어떤 항이 $0$ 이 아니면, 분모를 통분한 분자가 $q_i$ 로 나누어떨어지지 않아 모순이다. 같은 내용을 [중국인의 나머지 정리](chinese-remainder-theorem.md)로 쓰면 $K\lbrack x\rbrack/(q)$ 가 $K\lbrack x\rbrack/(q_i^{e_i})$ 들의 곱과 동형이라는 것이다.

## 단순근의 계수

$c$ 가 $q$ 의 단순근이면 항 $A/(x-c)$ 의 계수는 다음이다.

$$
A=\frac{p(c)}{q'(c)}
$$

$q(x)=(x-c)r(x)$ 로 쓰면 $q'(c)=r(c)$ 이고, 분해의 양변에 $x-c$ 를 곱한 뒤 $x=c$ 를 넣으면 $A=p(c)/r(c)$ 가 남는다. 직관 절에서 $q'(x)=2x$ 이므로 $A=1/2$, $B=1/(-2)$ 이다. 복소함수로 보면 $A$ 는 $p/q$ 의 $c$ 에서의 유수이고, [유수 정리](residue-theorem.md)가 이 값을 쓴다.

## 실수와 복소수

$K=\mathbb C$ 이면 [대수학의 기본정리](fundamental-theorem-of-algebra.md)로 기약다항식은 일차식뿐이고 모든 항이 $a/(x-c)^j$ 꼴이다. $K=\mathbb R$ 이면 기약다항식은 일차식과 실근이 없는 이차식이고, 항은 다음 두 꼴이다.

$$
\frac{a}{(x-c)^j},\qquad \frac{bx+d}{(x^2+\beta x+\gamma)^j}
$$

## 유리함수의 적분

$a/(x-c)^j$ 의 원시함수는 $j=1$ 이면 로그, $j\ge 2$ 이면 $(x-c)^{1-j}$ 의 상수배다. 이차식 분모의 항은 분모를 완전제곱으로 바꾸어 로그와 $\arctan$ 으로 적분한다. 그래서 실계수 유리함수의 원시함수는 유리함수, 로그, $\arctan$ 의 합으로 적힌다.

# 활용

- [생성함수](generating-functions.md)의 계수 추출. [Fibonacci 수](fibonacci-numbers.md)의 생성함수 $x/(1-x-x^2)$ 의 분모를 $(1-\varphi x)(1-\psi x)$ 로 인수분해해 두 항으로 나누면, 각 항이 등비급수이므로 $F_n=(\varphi^n-\psi^n)/\sqrt5$ 가 나온다.
- [z 변환](z-transform.md)과 [Laplace 변환](laplace-transform.md)의 역변환. 유리함수를 부분분수로 나누면 각 항의 역변환이 지수 수열이나 지수함수다.
- 선형 점화식과 상수계수 선형 미분방정식의 해. 특성다항식의 근마다 해의 한 항이 대응하고, 중근은 거듭제곱의 항으로 나타난다.

[^1]: M. Spivak, *Calculus*, 4th ed., Publish or Perish, 2008, 19 장.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #analysis #combinatorics
