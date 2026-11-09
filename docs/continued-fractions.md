# 연분수

# 개요

**연분수(continued fraction)** 는 [실수](real-numbers.md)를 정수 부분과, 나머지의 역수를 다시 펼친 것으로 거듭 적은 표현이다. $\pi$ 를 분모가 작은 분수로 가깝게 적으려 할 때, $22/7$ 과 $355/113$ 이 왜 좋은 근사인지는 소수 전개만 보아서는 알 수 없다. $\pi=3+1/(7+1/(15+1/(1+\cdots)))$ 로 펼쳐 도중에 끊으면 $3,22/7,333/106,355/113$ 이 차례로 나온다. 연분수는 이렇게 끊어 얻은 분수가 그 분모 이하에서 가장 좋은 유리수 근사임을 보인다.

# 직관

$\pi$ 를 분모가 작은 분수로 쓰고 싶다. $\pi = 3.14159\dots$ 의 정수 부분은 $3$ 이고, 나머지 $0.14159\dots$ 의 역수는 $7.0625\dots$ 로 정수 부분이 $7$ 이다. 그 나머지 $0.0625\dots$ 의 역수는 $15.996\dots$ 이고 정수 부분이 $15$ 다. 다음 단계의 역수는 $1.0034\dots$ 이고 그 다음은 $292.6\dots$ 이어서, 몫들을 모으면 $3, 7, 15, 1, 292$ 다.

첫 몫까지 쓰면 $3$, 둘째까지 쓰면 $3 + 1/7 = 22/7$, 셋째까지 쓰면 $333/106$, 넷째까지 쓰면 $355/113$ 이다. $355/113$ 과 $\pi$ 의 차이는 $3 \times 10^{-7}$ 보다 작고, 분모가 $113$ 보다 작은 어떤 분수도 이만큼 가깝지 않다. 다음 몫 $292$ 가 크면 그 앞에서 끊은 분수의 오차가 작으므로, 몫이 큰 자리 앞에서 끊으면 근사가 좋다.

유리수 $13/5$ 에 같은 절차를 쓰면 $2, 1, 1, 2$ 에서 나머지가 $0$ 이 되어 끝난다. 각 단계의 몫은 $13$ 과 $5$ 에 [유클리드 알고리즘](euclidean-algorithm.md)을 돌려 나오는 몫 $13=2\cdot5+3$, $5=1\cdot3+2$, $3=1\cdot2+1$, $2=2\cdot1$ 과 같다.

# 정의

## 연분수 전개

실수 $x$ 에 대해 $x_0 = x$ 로 두고 다음을 반복한다.

$$
a_k = \lfloor x_k \rfloor, \qquad x_{k+1} = \frac{1}{x_k - a_k}
$$

$x_k$ 가 정수가 되면 멈춘다. 이때 얻은 정수열로 쓴 다음 표현을 $x$ 의 **연분수 전개(continued fraction expansion)** 라 하고 $\lbrack a_0; a_1, a_2, \dots\rbrack$ 로 쓴다. $a_k$ 를 $k$ 번째 몫(partial quotient)이라 한다.

$$
x = a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2 + \cfrac{1}{\ddots}}}
$$

$a_0$ 은 정수이고 $k \ge 1$ 에서 $a_k$ 는 양의 정수다. 직관 절의 계산은 $\pi=\lbrack 3;7,15,1,292,\dots\rbrack$ 과 $13/5=\lbrack 2;1,1,2\rbrack$ 이다.

## 수렴분

$\lbrack a_0; a_1, \dots, a_k\rbrack$ 의 값을 $k$ 번째 **수렴분(convergent)** 이라 하고 기약분수 $p_k/q_k$ 로 쓴다. 수렴분의 분자와 분모는 다음 점화식을 따른다.

$$
p_k = a_k p_{k-1} + p_{k-2}, \qquad q_k = a_k q_{k-1} + q_{k-2}
$$

초깃값은 $p\_{-1} = 1$, $p\_{-2} = 0$, $q\_{-1} = 0$, $q\_{-2} = 1$ 이다. $\pi$ 에서는 $p_0/q_0=3/1$, $p_1/q_1=22/7$, $p_2/q_2=(15\cdot22+3)/(15\cdot7+1)=333/106$, $p_3/q_3=(333+22)/(106+7)=355/113$ 이다.

# 성질

## 유한 전개와 유리수

연분수 전개가 유한한 것과 $x$ 가 유리수인 것은 동치다. $x=a/b$ 이면 $x_k$ 의 분모가 유클리드 알고리즘의 나머지 열을 따라 줄어들어 유한 번에 $0$ 이 된다. 거꾸로 유한 전개의 값은 분수를 유한 번 더하고 뒤집은 것이므로 유리수다.

## 수렴분의 기본 항등식

모든 $k \ge 0$ 에 대해 $p_k q_{k-1} - p_{k-1} q_k = (-1)^{k-1}$ 이다. $\pi$ 에서 $k=1$ 이면 $22\cdot1-3\cdot7=1$ 이다.

증명은 $k$ 에 대한 귀납이다. 점화식을 대입하면 다음이 나오므로 부호만 바뀐다.

$$
p_k q_{k-1} - p_{k-1} q_k = -(p_{k-1}q_{k-2} - p_{k-2}q_{k-1})
$$

이 항등식에서 $\gcd(p_k, q_k) = 1$ 이 따라오므로 점화식으로 구한 분수는 이미 기약분수다. 또 $x$ 가 이웃한 두 수렴분 사이에 있으므로 다음이 나온다.

$$
\left\vert x - \frac{p_k}{q_k}\right\vert \thinspace\lt\thinspace \frac{1}{q_k q_{k+1}} \thinspace\le\thinspace \frac{1}{q_k^2}
$$

## 최적 근사

$q \le q_k$ 이고 $p/q \neq p_k/q_k$ 이면 $\vert qx - p\vert \gt \vert q_k x - p_k\vert$ 다[^1].

증명은 $p/q$ 를 수렴분 두 개의 정수 결합으로 쓰는 것이다. 기본 항등식에서 $(p_{k-1}, q_{k-1})$ 과 $(p_k, q_k)$ 가 정수 [격자](lattices.md)의 기저이므로 $p = u p_{k-1} + v p_k$, $q = u q_{k-1} + v q_k$ 인 정수 $u, v$ 가 있다. $q \le q_k$ 이면 $u$ 와 $v$ 의 부호가 반대이고, $q_{k-1}x - p_{k-1}$ 과 $q_k x - p_k$ 도 부호가 반대이므로 두 항이 상쇄 없이 더해진다.

Legendre 판정(Legendre's criterion)은 반대 방향이다. $\vert x - p/q\vert \lt 1/(2q^2)$ 이면 $p/q$ 는 $x$ 의 수렴분이다.

## 순환과 이차 무리수

Lagrange 정리(Lagrange's theorem on continued fractions)는 $x$ 의 연분수 전개가 어느 자리부터 순환하는 것과 $x$ 가 유리수 계수 이차방정식의 무리수 해인 것이 동치라는 정리다. $\sqrt 2 = \lbrack 1; \overline{2}\rbrack$ 과 황금비 $\varphi = \lbrack 1; \overline{1}\rbrack$ 이 예다.

순환에서 이차방정식이 나오는 쪽은 계산이다. 전개가 순환하면 $x = \lbrack a_0; \dots, a_{m}, \overline{a_{m+1}, \dots, a_{m+\ell}}\rbrack$ 이므로 꼬리 $y$ 가 $y = (py + p')/(qy + q')$ 를 만족하고, 정리하면 $y$ 의 이차방정식이 된다. $x$ 는 $y$ 의 유리수 계수 일차분수식이므로 같은 이차체에 있다.

## 근사의 한계

[Hurwitz 정리](hurwitz-theorem.md)는 모든 무리수 $x$ 에 대해 $\vert x - p/q\vert \lt 1/(\sqrt 5 q^2)$ 인 기약분수 $p/q$ 가 무한히 많다는 정리다. 상수 $\sqrt 5$ 를 더 키우면 이 진술이 거짓이 되는 $x$ 가 있다.

앞부분은 연속한 수렴분 셋 가운데 적어도 하나가 부등식을 만족함을 보여 증명된다. 상수가 최적인 것은 황금비에서 확인된다. 몫이 모두 $1$ 이라 $q_{k+1}/q_k$ 가 가장 느리게 커지고, 그만큼 근사가 가장 나쁘다.

# 활용

- [Pell 방정식](pell-equation.md) $x^2 - dy^2 = 1$ 의 기본해가 $\sqrt d$ 의 연분수 전개의 순환 마디 끝에서 나온다. 순환 길이가 홀수이면 $x^2-dy^2=-1$ 에 해가 있고 짝수이면 없다.
- [RSA 암호](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)에 대한 Wiener 공격(Wiener's attack)은 공개지수와 법의 비를 연분수로 펼쳐 작은 개인지수를 복원한다. 개인지수가 작으면 그 분수가 수렴분으로 나타난다는 것을 Legendre 판정으로 보인다.
- 달력의 윤년 규칙과 음계의 평균율이 각각 회귀년과 하루의 비, 완전5도와 옥타브의 비를 수렴분으로 끊은 결과다.
- [모듈러 기호](modular-symbols.md)에서 두 첨점을 잇는 경로를 수렴분을 따라 쪼개면 각 조각이 모듈러 군의 원소 하나로 표현되고, 모듈러 기호의 계산이 유한한 계산이 된다.
- [Diophantine 근사](diophantine-approximation.md)에서 무리수 측도(irrationality measure)를 연분수로 계산한다. 몫이 얼마나 크게 자라는지가 그 수를 유리수로 얼마나 잘 근사할 수 있는지를 정하고, 몫이 유계인 수를 나쁘게 근사되는 수(badly approximable number)라 한다.

[^1]: G. H. Hardy and E. M. Wright, *An Introduction to the Theory of Numbers*, 6th ed., Oxford University Press (2008), Ch. X. 수렴분의 최적성, Legendre 판정, Hurwitz 정리가 이 장에 있다.

# 연관 문서

## 선수지식

- [유클리드 알고리즘](euclidean-algorithm.md)
- [무리수](irrational-numbers.md)

## 더 알아보기

- [Pell 방정식](pell-equation.md)
- [Diophantine 근사](diophantine-approximation.md)
- [Gauss 사상](gauss-map.md)

#number_theory #algorithms #analysis
