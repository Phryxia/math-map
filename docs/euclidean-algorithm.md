# 유클리드 알고리즘

# 개요

**유클리드 알고리즘(Euclidean algorithm)** 은 나머지 있는 나눗셈을 되풀이해 두 정수의 최대공약수를 구하는 방법이다. 최대공약수를 소인수분해로 구하려면 두 수를 [소수](primes.md)로 차례로 나눠 봐야 하고, 수가 백 자리쯤 되면 이 방법은 현실적인 시간에 끝나지 않는다. $1071$ 을 $462$ 로 나눈 나머지는 $147$ 이고, $1071$ 과 $462$ 의 공약수는 $462$ 와 $147$ 의 공약수와 같다. 유클리드 알고리즘은 이 나눗셈을 나머지가 $0$ 이 될 때까지 되풀이해, 자릿수에 비례하는 횟수만에 최대공약수 $21$ 을 낸다.

# 직관

$1071$ 과 $462$ 를 모두 나누는 수는 $1071-2\cdot462=147$ 도 나눈다. 거꾸로 $462$ 와 $147$ 을 모두 나누는 수는 $1071=2\cdot462+147$ 도 나눈다. 그래서 두 쌍의 공약수는 같고, 수만 작아졌다.

같은 일을 되풀이하면 $462=3\cdot147+21$, $147=7\cdot21+0$ 이다. 나머지가 $0$ 이 된 순간 $21$ 이 $147$ 을 나누므로 $(147,21)$ 의 공약수 가운데 가장 큰 것이 $21$ 이고, 처음 쌍의 최대공약수도 $21$ 이다. 공약수가 바뀌지 않는다는 것에서 답이 맞고, 수가 계속 작아진다는 것에서 계산이 끝난다.

계산을 거꾸로 되짚으면 $21=462-3\cdot147=462-3(1071-2\cdot462)=7\cdot462-3\cdot1071$ 이다. 최대공약수가 두 수의 정수 배의 합으로 적힌다. $\gcd(a,m)=1$ 일 때 $sa+tm=1$ 을 법 $m$ 의 [합동](modular-arithmetic.md)으로 보면 $sa\equiv 1$ 이므로 $s$ 가 $a$ 의 역원이다. 서로소이면 역원이 있다는 명제의 증명이 그대로 역원을 구하는 절차다.

# 정의

## 최대공약수와 나눗셈 정리

$a \ge b \gt 0$ 인 정수를 모두 나누는 양의 정수 중 가장 큰 것이 최대공약수(greatest common divisor) $\gcd(a,b)$ 다. $\gcd(a, 0) = a$ 로 약속한다. $\gcd(1071,462)=21$ 이다.

나눗셈 정리(division theorem)로 유일한 몫 $q$ 와 나머지 $r$ 이 있다.

$$
a=qb+r,\qquad 0\le r\lt b
$$

$a=1071$, $b=462$ 이면 $q=2$, $r=147$ 이다.

## 알고리즘

$b\ne0$ 인 동안 $(a,b)$ 를 $(b,r)$ 로 바꾸고, $b=0$ 이 되면 $a$ 를 반환하는 절차를 유클리드 알고리즘이라 한다. 직관 절에서 $(1071,462)\to(462,147)\to(147,21)\to(21,0)$ 이고 반환값은 $21$ 이다.

## 확장 유클리드 알고리즘

유클리드 알고리즘의 각 단계에서 나머지를 처음 두 수의 정수 결합 $sa+tb$ 로 함께 기록해, 마지막에 $\gcd(a,b)=sa+tb$ 인 $s,t$ 를 내는 절차를 **확장 유클리드 알고리즘(extended Euclidean algorithm)** 이라 한다. 직관 절의 계산이 $s=-3$, $t=7$ 을 낸다.

# 성질

## 정확성과 종료

$\gcd(a,b)=\gcd(b,r)$ 이다. $a$ 와 $b$ 의 공약수는 $r=a-qb$ 도 나눈다. 역으로 $b$ 와 $r$ 의 공약수는 $a=qb+r$ 도 나눈다. 따라서 $\lbrace a,b\rbrace$ 의 공약수 집합과 $\lbrace b,r\rbrace$ 의 공약수 집합이 같고 최댓값도 같다.

나머지는 이전 단계의 작은 수보다 엄밀히 작으므로 음이 아닌 정수의 감소열이 되고 반드시 끝난다.

$252$ 와 $105$ 에 적용하면

$$
\begin{aligned}
252&=2\cdot105+42\cr
105&=2\cdot42+21\cr
42&=2\cdot21+0
\end{aligned}
$$

이므로 $\gcd=21$ 이다. 역대입하면

$$
21=105-2\cdot42=105-2(252-2\cdot105)=-2\cdot252+5\cdot105
$$

## Bézout 항등식

정수 $s,t$ 가 존재해 $\gcd(a,b)=sa+tb$ 를 만족한다. 이것을 Bézout 항등식(Bézout's identity)이라 한다. 더 정확히는 $\lbrace sa + tb : s,t \in \mathbb{Z}\rbrace$ 가 $\gcd(a,b)$ 의 배수 전체와 같다. 존재는 확장 유클리드 알고리즘이 $s,t$ 를 실제로 내는 것으로 증명된다.

## 반복 횟수

Lamé 정리(Lamé's theorem)에 따르면 작은 쪽 수의 십진 자릿수를 $d$ 라 할 때 나눗셈 횟수는 $5d$ 를 넘지 않는다. 최악의 경우는 연속한 [Fibonacci 수](fibonacci-numbers.md)이고, 이때 매 단계의 몫이 모두 $1$ 이라 감소가 가장 느리다.

나눗셈 횟수는 값에 대해 $O(\log \min(a,b))$ 다. 자릿수 $n$ 의 나눗셈 한 번의 비용을 세면 전체 비트 복잡도는 $O(n^2)$ 이고, 이진 GCD(greatest common divisor) 알고리즘(binary GCD algorithm)과 Lehmer 알고리즘(Lehmer's algorithm)이 이 비용을 줄인다.

## 일차 Diophantus 방정식

일차 Diophantus 방정식(linear Diophantine equation) $ax+by=c$ 가 정수해를 갖는 것과 $\gcd(a,b)\mid c$ 인 것은 동치다. 해가 있으면 Bézout 계수를 $c/g$ 배해 특수해를 얻고, 일반해는

$$
x=x_0+\frac bg k,\qquad y=y_0-\frac ag k,\qquad k\in\mathbb{Z}
$$

다. $g=\gcd(a,b)$ 다. 동전 문제, 격자점 문제, 주기가 다른 두 사건이 겹치는 시점 계산이 이 형태로 환원된다.

## Euclid 보조정리

Euclid 보조정리(Euclid's lemma)는 $\gcd(p,a)=1$ 인 소수 $p$ 가 $ab$ 를 나누면 $p\mid b$ 라는 정리다. $sp+ta=1$ 의 양변에 $b$ 를 곱하면 $spb+tab=b$ 이고 좌변의 두 항이 $p$ 의 배수이므로 증명된다. 소수의 유일분해가 이 보조정리로 증명되고, 나머지 있는 나눗셈이 되는 환인 [유클리드 정역](euclidean-domains.md)에서도 같은 논증으로 유일분해가 성립한다.

## 다른 환에서의 유클리드 알고리즘

같은 절차가 체 위의 [다항식환](polynomial-rings.md)에서도 작동한다. 차수가 나머지의 크기를 대신하고, 최대공약다항식과 Bézout 항등식이 같은 형태로 나온다. 부분분수 분해, [유한체](finite-fields.md) 구현의 역원 계산, [Reed–Solomon 부호](reed-solomon-codes.md)의 복호 알고리즘이 이를 쓴다. Gauss 정수 $\mathbb{Z}\lbrack i\rbrack$ 에서도 노름을 크기로 삼아 작동한다.

# 활용

- RSA(Rivest–Shamir–Adleman)의 개인키 지수는 $ed \equiv 1 \pmod{\varphi(n)}$ 의 해이므로 확장 유클리드 알고리즘 한 번으로 얻는다. [타원곡선](elliptic-curves.md) 암호의 점 연산, [중국인의 나머지 정리](chinese-remainder-theorem.md)를 이용한 복호 가속, 유한체 산술의 나눗셈도 이 절차에 의존한다.
- 분수 약분은 분자와 분모를 최대공약수로 나누는 것이다. 나눗셈의 몫들을 순서대로 모으면 [연분수](continued-fractions.md) 전개가 되고, 그 절단이 최적의 유리수 근사를 준다. 달력의 윤년 규칙, 기어비 설계, Stern–Brocot 트리(Stern–Brocot tree)의 유리수 탐색이 그 응용이다.
- 불변량으로 정확성을 보이고 감소하는 양으로 종료를 보이는 증명 방식이 반복 알고리즘을 분석할 때 쓰는 표준 방법이다[^1].

[^1]: MIT 6.042J, *Number Theory I: GCDs*, Chapter 8.1–8.5. 최대공약수, 유클리드 알고리즘의 정확성, Bézout 항등식. https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/mit6_042js15_session12.pdf

# 연관 문서

## 선수지식

- [정수의 합동](modular-arithmetic.md)

## 더 알아보기

- [소수](primes.md)
- [연분수](continued-fractions.md)
- [Farey 수열](farey-sequences.md)
- [Frobenius 동전 문제](frobenius-coin-problem.md)

#number_theory #algorithms
