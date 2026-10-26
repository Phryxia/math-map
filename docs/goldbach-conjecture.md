# Goldbach 추측

# 개요

**Goldbach 추측(Goldbach's conjecture)** 은 $2$ 보다 큰 모든 짝수가 두 [소수](primes.md)의 합이라는 추측이다. $4=2+2$, $10=3+7=5+5$, $100=3+97$ 처럼 작은 짝수는 손으로 확인되지만, 확인만으로는 모든 짝수에 대해 답할 수 없다. 이 문제는 짝수를 두 소수의 합으로 쓰는 방법의 개수를 [원법](circle-method.md)으로 어림하고 그 개수가 양수임을 보이는 방향으로 다룬다.

# 직관

작은 짝수를 두 소수의 합으로 써 본다. $4=2+2$, $6=3+3$, $8=3+5$, $10=3+7=5+5$, $12=5+7$, $14=3+11=7+7$ 이다. 수가 커질수록 쓰는 방법이 여러 개가 된다.

표현이 왜 늘어나는지 소수의 개수로 어림한다. [소수 정리](prime-number-theorem.md)로 $n$ 이하의 소수는 약 $n/\log n$ 개다. $n=p+q$ 에서 $p$ 를 고르면 $q$ 가 정해지므로, $p$ 와 $n-p$ 가 둘 다 소수인 $p$ 를 세면 된다. $p$ 가 소수일 확률을 $1/\log n$, $n-p$ 가 소수일 확률도 $1/\log n$ 으로 놓고 둘을 독립으로 다루면 표현의 개수가 약 $n/(\log n)^2$ 이다. $n=10^6$ 에서 이 값이 약 $5\thinspace000$ 이다.

이 어림은 증명이 아니다. 두 조건을 독립으로 다룬 것이 틀렸다. $n$ 이 $3$ 의 배수이면 $p\neq 3$ 인 소수 $p$ 에 대해 $n-p$ 도 $3$ 으로 나누어지지 않으므로, $n-p$ 가 소수일 확률이 평균보다 크다. 합동류마다 이런 치우침이 있어서 어림값에 소인수로 정해지는 보정이 곱해진다. 보정을 붙여도 남는 것은 평균적인 크기이고, 특정한 $n$ 에서 표현이 $0$ 개가 아니라는 하한은 거기서 나오지 않는다.

# 정의

$$
\forall n\ge 4\ \text{짝수}\ \ \exists p,q\ \text{소수}:\ n=p+q
$$

약한 Goldbach 추측(weak Goldbach conjecture) 또는 삼소수 추측은 $5$ 보다 큰 모든 홀수가 세 소수의 합이라는 진술이다. 짝수 형태에서 홀수 $n$ 에 $n-3$ 을 적용하면 약한 형태가 따라 나온다.

$n$ 의 표현 개수를 다음으로 쓴다.

$$
r(n)=\char35{}\lbrace (p,q):\ p,q\ \text{소수},\ n=p+q\rbrace
$$

# 성질

## 약한 형태의 증명

Vinogradov 는 충분히 큰 홀수가 세 소수의 합임을 원법으로 증명했다. 세 변수에서는 주 호의 기여가 나머지 호의 오차보다 크다. Helfgott 이 "충분히 큰" 의 하한을 계산으로 다룰 수 있는 크기까지 내리고 그 아래를 기계로 확인해 모든 홀수 $n\ge 7$ 에 대한 진술을 얻었다[^1].

## Hardy–Littlewood 점근 공식

원법의 주 호 계산은 표현 개수의 예측값을 준다[^2].

$$
r(n)\sim\mathfrak S(n)\frac{n}{(\log n)^2},\qquad \mathfrak S(n)=2\prod_{p\gt 2}\Bigl(1-\frac{1}{(p-1)^2}\Bigr)\prod_{p\mid n,\thinspace p\gt 2}\frac{p-1}{p-2}
$$

$\mathfrak S(n)$ 이 특이급수(singular series)이고 직관 절의 합동류 보정이 이 곱이다. $n$ 이 홀수이면 $p=2$ 만 남아 $\mathfrak S(n)=0$ 이 되어 짝수 조건이 식에 들어간다.

## 체 방법이 간 거리

[Chen 정리](chen-theorem.md)는 충분히 큰 짝수를 소수와 소인수 두 개 이하인 수의 합으로 쓴다. 체 방법의 패리티 현상 때문에 소인수가 정확히 하나라는 결론이 나오지 않는다. Shnirelman 은 모든 정수가 유계 개의 소수의 합임을 가법적 밀도 논증으로 증명했다.

## 예외의 밀도

$X$ 이하의 짝수 가운데 두 소수의 합으로 쓰이지 않는 것의 개수가 $X$ 에 비해 $0$ 으로 가는 비율이라는 결과가 있다. Montgomery 와 Vaughan 은 그 개수가 $X^{1-\delta}$ 이하인 $\delta\gt 0$ 이 존재함을 보였다[^3].

# 활용

- **[원법](circle-method.md)의 한계 측정.** 변수가 둘인 가법 문제에서 나머지 호의 오차가 주 호의 기여를 넘는다. 변수를 셋으로 늘린 삼소수 문제에서 그 관계가 뒤집히므로, 두 문제의 차이가 방법의 적용 범위를 보여 준다.
- **[체 방법](sieve-methods.md)의 패리티 현상.** 소인수 개수의 홀짝을 체가 구별하지 못하는 성질 때문에 Chen 정리에서 멈춘다.
- **[직관주의](intuitionism.md).** 증명도 반증도 주어지지 않은 명제의 예로 쓰인다. 고전 논리에서는 이 진술이 지금 참이거나 거짓이고, 직관주의에서는 증명을 얻기 전까지 진리값을 갖지 않는다.

[^1]: H. A. Helfgott, "The ternary Goldbach problem", arXiv:1501.05438 (2015).

[^2]: R. C. Vaughan, *The Hardy–Littlewood Method*, 2nd ed., Cambridge University Press, 1997, 3 장. 특이급수와 주 호 계산.

[^3]: H. L. Montgomery, R. C. Vaughan, "The exceptional set in Goldbach's problem", *Acta Arithmetica* 27 (1975), 353–370.

# 연관 문서

## 선수지식

- [원법](circle-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #combinatorics
