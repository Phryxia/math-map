# 제곱잉여의 Gauss 보조정리

# 개요

**제곱잉여의 Gauss 보조정리(Gauss's lemma on quadratic residues)** 는 홀소수 $p$ 와 $p$ 의 배수가 아닌 정수 $a$ 에 대해, $a,2a,\dots,\frac{p-1}2a$ 를 $p$ 로 나눈 나머지 가운데 $p/2$ 보다 큰 것의 개수 $\mu$ 로 Legendre 기호가 $\left(\frac ap\right)=(-1)^\mu$ 로 정해진다는 정리다. [이차 상호법칙](quadratic-reciprocity.md)의 Euler 판정법을 거듭제곱 계산 없이 나머지의 개수로 바꾸고, 제2 보충 법칙(second supplementary law)과 이차 상호법칙의 Eisenstein 증명이 이 정리에서 나온다. 다항식의 원시성에 대한 Gauss 보조정리와는 다른 정리다.

# 직관

$2$ 가 법 $p$ 의 제곱잉여인지를 모든 홀소수 $p$ 에 대해 한 번에 알고 싶다. Euler 판정법은 $2^{(p-1)/2}$ 를 $p$ 로 나눈 나머지가 $1$ 인지 $-1$ 인지 보라고 하는데, 이 계산은 $p$ 마다 따로 해야 한다.

$p=7$ 에서 $2^3$ 을 다르게 계산한다. $2\cdot4\cdot6=2^3\cdot(1\cdot2\cdot3)$ 이다. 왼쪽의 $4$ 와 $6$ 은 $7/2$ 보다 크므로 법 $7$ 에서 $4\equiv-3$, $6\equiv-1$ 로 바꿔 쓰면 $2\cdot4\cdot6\equiv(-1)^2\cdot(1\cdot2\cdot3)$ 이다. 두 식에서 $3!$ 을 지우면 $2^3\equiv(-1)^2=1$ 이고, $2$ 는 법 $7$ 의 제곱잉여다. 실제로 $3^2=9\equiv2$ 다.

이 계산에서 남은 것은 $2,4,6$ 가운데 $7/2$ 보다 큰 것이 몇 개인지뿐이다. 일반 $p$ 에서 $2,4,\dots,p-1$ 가운데 $p/2$ 보다 큰 것의 개수는 $p$ 를 $8$ 로 나눈 나머지만으로 정해지므로, $2$ 가 제곱잉여인지도 그 나머지로 정해진다.

# 정의

$p$ 는 홀소수이고 $p\nmid a$ 이다. $k=1,2,\dots,\frac{p-1}2$ 에 대해 $ka$ 를 $p$ 로 나눈 나머지를 $r_k\in\lbrace 1,\dots,p-1\rbrace$ 라 하고, $r_k\gt p/2$ 인 $k$ 의 개수를 $\mu$ 라 한다.

**정리(Gauss 보조정리).** $\left(\frac ap\right)=(-1)^\mu$ 이다.[^1]

# 성질

## 증명의 요지

$r_k\gt p/2$ 이면 $s_k=p-r_k$, 아니면 $s_k=r_k$ 로 둔다. 모든 $s_k$ 는 $1$ 이상 $\frac{p-1}2$ 이하다. $s_j=s_k$ 이면 $ja\equiv\pm ka$ 이고 $p\nmid a$ 이므로 $j\equiv\pm k$ 인데, $1\le j,k\le\frac{p-1}2$ 에서 $j+k\equiv 0$ 은 불가능하므로 $j=k$ 다. 따라서 $s_1,\dots,s\_{(p-1)/2}$ 는 $1,\dots,\frac{p-1}2$ 를 다시 늘어놓은 것이다. 곱을 비교하면

$$
a^{(p-1)/2}\Bigl(\frac{p-1}2\Bigr)!=\prod_{k}ka\equiv(-1)^\mu\prod_k s_k=(-1)^\mu\Bigl(\frac{p-1}2\Bigr)!\pmod p
$$

이고, 계승을 지우면 $a^{(p-1)/2}\equiv(-1)^\mu$ 다. Euler 판정법 $a^{(p-1)/2}\equiv\left(\frac ap\right)$ 으로 결론이 나온다.

## 제2 보충 법칙

$a=2$ 이면 $2k\gt p/2$ 인 $k\le\frac{p-1}2$ 의 개수는 $\mu=\frac{p-1}2-\lfloor p/4\rfloor$ 이다. $p\equiv1,3,5,7\pmod 8$ 에서 $\mu$ 는 각각 짝수, 홀수, 홀수, 짝수이므로

$$
\Big(\frac2p\Big)=(-1)^{(p^2-1)/8}
$$

이다. $2$ 는 $p\equiv\pm1\pmod 8$ 일 때만 제곱잉여다.

## 바닥함수의 합

$a$ 가 홀수이면

$$
\mu\equiv\sum_{k=1}^{(p-1)/2}\Bigl\lfloor\frac{ka}{p}\Bigr\rfloor\pmod 2
$$

이다. $ka=p\lfloor ka/p\rfloor+r_k$ 를 $k$ 에 대해 더하고, $r_k$ 와 $s_k$ 의 관계를 써서 법 $2$ 로 정리하면 $(a-1)\sum k$ 가 짝수인 항으로 빠지고 이 식이 남는다.[^1]

# 활용

- **이차 상호법칙의 Eisenstein 증명.** 서로 다른 홀소수 $p,q$ 에 대해 바닥함수(floor function)의 합 공식으로 $\left(\frac qp\right)\left(\frac pq\right)=(-1)^{S}$ 이고, $S=\sum_{k\le(p-1)/2}\lfloor kq/p\rfloor+\sum_{l\le(q-1)/2}\lfloor lp/q\rfloor$ 는 직사각형 $0\lt x\lt p/2$, $0\lt y\lt q/2$ 안의 격자점을 대각선 $y=qx/p$ 의 아래와 위로 나눠 센 것이다. 대각선 위에 격자점이 없으므로 $S=\frac{p-1}2\cdot\frac{q-1}2$ 이고 상호법칙이 나온다.[^2]
- **Legendre 기호의 계산.** 작은 $a$ 에 대해 $\left(\frac ap\right)$ 이 $p$ 를 $4a$ 로 나눈 나머지에만 의존한다는 것을 이 정리로 직접 셀 수 있다. $a=2$ 의 경우가 제2 보충 법칙이다.

[^1]: K. Ireland, M. Rosen, *A Classical Introduction to Modern Number Theory*, 2nd ed., GTM 84, Springer, 1990, 5 장 2 절(Gauss 보조정리와 제2 보충 법칙), 5 장 3 절(바닥함수의 합과 상호법칙의 증명).
[^2]: G. Eisenstein, *Geometrischer Beweis des Fundamentaltheorems für die quadratischen Reste*, Journal für die reine und angewandte Mathematik **28** (1844), 246–248.

# 연관 문서

## 선수지식

- [이차 상호법칙](quadratic-reciprocity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #theorem
