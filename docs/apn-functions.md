# APN 함수

# 개요

**APN 함수(almost perfect nonlinear function)** 는 $n$ 비트를 받아 $n$ 비트를 내는 [함수](functions.md) 가운데, 입력에 같은 차를 더했을 때 출력의 차가 한 값에 몰리는 정도가 가장 작은 함수다. 3 비트 함수에서 입력쌍 $x$, $x+001$ 여덟 개의 출력 차를 적으면, 항등함수는 여덟 번 모두 $001$ 이고 $\mathbb F_8$ 의 세제곱 사상은 네 값이 두 번씩 나온다. 암호의 비선형 부품은 출력 차를 맞히는 공격을 막아야 하므로, 한 출력 차가 나오는 횟수의 최댓값을 재고 그 값을 가능한 최솟값 $2$ 로 만드는 이런 함수를 쓴다.

# 직관

블록 암호의 비선형 부품 S-상자(S-box)가 3 비트 함수 $F$ 라 하자. 공격자는 차가 $a$ 인 두 입력 $x$, $x+a$ 를 넣고 출력의 차 $F(x)+F(x+a)$ 를 본다. 덧셈은 비트별 배타적 논리합이다. 어떤 $a$ 에서 출력 차가 한 값 $b$ 로 자주 나오면, 공격자는 입력 차 $a$ 로부터 출력 차 $b$ 를 높은 확률로 맞힌다. 항등함수는 언제나 $b=a$ 이므로 확률이 $1$ 이다.

[유한체](finite-fields.md) $\mathbb F_8=\mathbb F_2\lbrack\alpha\rbrack/(\alpha^3+\alpha+1)$ 의 원소 $c_2\alpha^2+c_1\alpha+c_0$ 를 비트 $c_2c_1c_0$ 로 적고 $F(x)=x^3$ 을 계산하면

| x      | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- |
| $x^3$  | 000 | 001 | 011 | 100 | 101 | 110 | 111 | 010 |

이다. $a=001$ 이면 출력 차는 $x=000,001$ 에서 $001$, $x=010,011$ 에서 $111$, $x=100,101$ 에서 $011$, $x=110,111$ 에서 $101$ 이다. 네 값이 두 번씩 나온다. 다른 여섯 개의 $a$ 에서도 출력 차는 네 값이 두 번씩이다.

두 번보다 적게 할 수는 없다. $x$ 와 $x+a$ 는 같은 쌍이므로 같은 출력 차를 주고, 한 출력 차가 나오는 횟수는 언제나 짝수다. $x^3$ 은 모든 $a$ 에서 이 최솟값을 달성한다. $(x+a)^3+x^3=ax^2+a^2x+a^3$ 이고 표수 $2$ 에서 $x\mapsto ax^2+a^2x$ 는 덧셈을 보존하며 그 핵이 $\lbrace 0,a\rbrace$ 이므로, 이 식은 $x$ 의 값 두 개마다 같은 값을 준다.

# 정의

$F:\mathbb F_2^n\to\mathbb F_2^n$ 와 $a\in\mathbb F_2^n$ 에 대해 $D_aF(x)=F(x+a)+F(x)$ 를 $F$ 의 $a$ 방향 미분(derivative)이라 하고,

$$
\delta_F(a,b)=\char35{}\lbrace x\in\mathbb F_2^n : D_aF(x)=b\rbrace,\qquad
\delta_F=\max_{a\ne 0,\thinspace b}\delta_F(a,b)
$$

로 둔다. $\delta_F$ 를 $F$ 의 차분 균일성(differential uniformity)이라 한다[^1]. 직관 절의 $x^3$ 은 $\delta_F(001,b)$ 가 $b=001,111,011,101$ 에서 $2$ 이고 나머지에서 $0$ 이며 $\delta_F=2$ 다. 항등함수는 $\delta_F=8$ 이다.

$\delta_F(a,b)$ 는 언제나 짝수이므로 $\delta_F\ge 2$ 다. $\delta_F=2$ 인 $F$ 를 **APN 함수** 라 한다[^1]. $\mathbb F_2^n$ 을 $\mathbb F\_{2^n}$ 과 같은 것으로 보아 함수를 유한체의 다항식으로 적는 일이 많다.

# 성질

## 네 점의 합

$F$ 가 APN 인 것은 서로 다른 네 점 $x_1,x_2,x_3,x_4$ 가 $x_1+x_2+x_3+x_4=0$ 을 만족하면 $F(x_1)+F(x_2)+F(x_3)+F(x_4)\ne 0$ 인 것과 동치다[^2]. $D_aF(x)=D_aF(y)$ 이고 $y\notin\lbrace x,x+a\rbrace$ 이면 $x,x+a,y,y+a$ 가 그런 네 점이고, 역으로 그런 네 점에서 $a=x_1+x_2$ 로 두면 같은 출력 차가 네 번 나온다.

## Gold 함수

$F(x)=x^{2^i+1}$ 을 $\mathbb F\_{2^n}$ 에서 보면

$$
\delta_F=2^{\gcd(i,n)}
$$

이고, 따라서 $F$ 가 APN 인 것은 $\gcd(i,n)=1$ 인 것과 동치다[^1]. $D_aF(x)=a^{2^i}x+ax^{2^i}+a^{2^i+1}$ 의 앞 두 항은 $x$ 에 대해 덧셈을 보존한다. 그 핵은 $x=0$ 이거나 $(x/a)^{2^i-1}=1$ 인 $x$, 곧 $a\thinspace\mathbb F\_{2^{\gcd(i,n)}}$ 이다. 직관 절의 $x^3$ 은 $i=1$, $n=3$ 이다.

## 역함수

$F(x)=x^{2^n-2}$, 곧 $x\ne 0$ 에서 $x^{-1}$ 이고 $F(0)=0$ 인 함수는 $n$ 이 홀수이면 $\delta_F=2$, 짝수이면 $\delta_F=4$ 다[^1]. $x\notin\lbrace 0,a\rbrace$ 에서 $(x+a)^{-1}+x^{-1}=b$ 를 정리하면 $bx^2+abx+a=0$ 이고 해가 둘 이하다. $b=a^{-1}$ 이면 $x=0,a$ 가 해이고, 여기에 $x^2+ax+a^2=0$ 의 해가 더해진다. $x=ay$ 로 두면 $y^2+y+1=0$ 이고 이 식은 $\mathbb F\_4\subseteq\mathbb F\_{2^n}$, 곧 $n$ 이 짝수일 때만 해가 둘 있다.

## 굽은 함수와의 관계

$F:\mathbb F_2^n\to\mathbb F_2^m$ 의 모든 미분 $D_aF$ ($a\ne 0$) 가 각 값을 $2^{n-m}$ 번씩 취하면 $F$ 를 완전 비선형(perfect nonlinear)이라 한다. [굽은 함수](bent-functions.md) 문서의 미분의 균형에서 이는 $0$ 이 아닌 모든 $v$ 에 대해 $v\cdot F$ 가 굽은 함수인 것과 같다. 완전 비선형 함수는 $n$ 이 짝수이고 $m\le n/2$ 일 때만 있다[^2]. $m=n$ 에서는 완전 비선형이 불가능하고 $\delta_F=2$ 가 최선이어서 이름에 "거의(almost)" 가 붙는다.

$n$ 이 홀수이고 $0$ 이 아닌 모든 $v$ 에서 $v\cdot F$ 의 Walsh 계수가 $0$ 이나 $\pm 2^{(n+1)/2}$ 이면 $F$ 를 거의 굽은 함수(almost bent function, AB)라 한다. AB 함수는 APN 이다[^2]. $n$ 이 홀수이고 $\gcd(i,n)=1$ 인 Gold 함수는 AB 다.

## APN 치환

$n$ 이 홀수이면 $\gcd(3,2^n-1)=1$ 이므로 $x^3$ 은 전단사이고 APN 치환이다. $n$ 이 짝수이면 $3$ 이 $2^n-1$ 을 나누어 $x^3$ 은 전단사가 아니다. $n=2$ 와 $n=4$ 에는 APN 치환이 없고, $n=6$ 에는 있다[^3]. 짝수 $n\ge 8$ 에서 APN 치환이 있는지는 알려져 있지 않다[^2].

# 활용

- 차분 공격(differential cryptanalysis)[^4]. 암호의 라운드를 거치는 입력 차와 출력 차의 연쇄가 성립할 확률은 S-상자마다 많아야 $\delta_F/2^n$ 이다. S-상자의 차분 균일성이 작을수록 공격에 필요한 평문쌍의 수가 커진다.
- AES(Advanced Encryption Standard)의 S-상자. $\mathbb F\_{2^8}$ 의 역함수에 아핀 사상을 합성한 것이다. 아핀 사상은 차분 균일성을 바꾸지 않으므로 $\delta_F=4$ 이고, 역함수 절에서 $n=8$ 이 짝수인 경우다.
- 부호 이론. $F(0)=0$ 일 때 $0$ 이 아닌 $x$ 마다 열 $(x,F(x))$ 를 둔 패리티 검사 [행렬](matrices.md)의 이진 부호는, $F$ 가 APN 인 것과 최소 거리가 $5$ 인 것이 동치다[^2]. 네 점의 합 절에서 네 열의 합이 $0$ 이 되지 않는다는 조건이다. $F(x)=x^3$ 이면 이 부호는 두 개의 오류를 고치는 [이진 BCH 부호](bch-codes.md)(Bose–Chaudhuri–Hocquenghem code)다.

[^1]: K. Nyberg, "Differentially uniform mappings for cryptography", *Advances in Cryptology — EUROCRYPT '93*, Lecture Notes in Computer Science 765, Springer, 1994, 55–64.
[^2]: C. Carlet, *Boolean Functions for Cryptography and Coding Theory*, Cambridge University Press, 2021.
[^3]: K. A. Browning, J. F. Dillon, M. T. McQuistan, A. J. Wolfe, "An APN permutation in dimension six", *Finite Fields: Theory and Applications*, Contemporary Mathematics 518, American Mathematical Society, 2010, 33–42.
[^4]: E. Biham, A. Shamir, "Differential cryptanalysis of DES-like cryptosystems", *Journal of Cryptology* 4 (1991), 3–72.

# 연관 문서

## 선수지식

- [굽은 함수](bent-functions.md)
- [유한체](finite-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #cryptography #field_theory
