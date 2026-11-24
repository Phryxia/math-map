# 친화수

# 개요

**친화수(amicable numbers)** 는 한 수의 자기 자신을 뺀 약수를 모두 더하면 다른 수가 되고, 다른 수에서 같은 일을 하면 처음 수로 돌아오는 두 수의 쌍이다. $220$ 의 자기 자신을 뺀 약수 $1,2,4,5,10,11,20,22,44,55,110$ 을 더하면 $284$ 이고, $284$ 의 약수 $1,2,4,71,142$ 를 더하면 $220$ 이다. [완전수](perfect-numbers.md)는 이 일을 한 번 해서 자기 자신으로 돌아오는 수이고, 친화수는 두 번 해서 돌아오는 수다.

# 직관

$n$ 에서 자기 자신을 뺀 약수의 합을 $s(n)$ 으로 두고 $s$ 를 되풀이해 적용한다. $12$ 에서 시작하면 다음과 같이 $1$ 에서 끝난다.

$$
12\to 16\to 15\to 9\to 4\to 3\to 1
$$

$6$ 에서 시작하면 $s(6)=1+2+3=6$ 이므로 그 자리에 머문다. $220$ 에서 시작하면 $284$ 를 거쳐 $220$ 으로 돌아와 길이 $2$ 의 순환이 된다. $12496$ 에서 시작하면 다음 길이 $5$ 의 순환이 나온다.

$$
12496\to 14288\to 15472\to 14536\to 14264\to 12496
$$

길이 $1$ 의 순환이 완전수, 길이 $2$ 의 순환이 친화수다.

# 정의

$\sigma(n)$ 을 $n$ 의 약수의 합으로 두고 $s(n)=\sigma(n)-n$ 이라 한다. 서로 다른 양의 정수 $m$, $n$ 이 $s(m)=n$, $s(n)=m$ 을 만족하면, 곧 $\sigma(m)=\sigma(n)=m+n$ 이면 $(m,n)$ 을 친화수 쌍이라 한다. $\sigma(220)=\sigma(284)=504=220+284$ 다.

$n, s(n), s(s(n)),\dots$ 을 $n$ 의 **약수 합 수열(aliquot sequence)** 이라 한다. 직관 절의 $12$ 와 $12496$ 에서 시작한 열이 그 예다. 길이가 $3$ 이상인 순환에 든 수를 **사교수(sociable numbers)** 라 한다.

# 성질

## Thābit 의 규칙

$n\ge 2$ 에서 다음 세 수가 모두 소수이면 $(2^npq,\thinspace 2^nr)$ 은 친화수 쌍이다.[^1]

$$
p=3\cdot 2^{n-1}-1,\qquad q=3\cdot 2^n-1,\qquad r=9\cdot 2^{2n-1}-1
$$

$n=2$ 이면 $p=5$, $q=11$, $r=71$ 이고 쌍은 $(220,284)$ 다. $n=4$ 이면 $(17296,18416)$, $n=7$ 이면 $(9363584,9437056)$ 이 나온다.

증명의 요지. 완전수 문서의 곱셈 공식으로 두 약수 합을 계산한다.

$$
\sigma(2^npq)=(2^{n+1}-1)(p+1)(q+1),\qquad \sigma(2^nr)=(2^{n+1}-1)(r+1)
$$

$p+1$ 과 $q+1$ 의 곱이 $9\cdot 2^{2n-1}$ 이고 이것이 $r+1$ 과 같으므로 두 값이 같다. 그 값이 $2^npq+2^nr$ 과 같음은 전개해 확인한다.

## 규칙 밖의 쌍

Thābit 의 규칙은 모든 친화수 쌍을 주지 않는다. $(1184,1210)$ 은 이 규칙으로 나오지 않는 쌍이고, 크기 순으로 둘째 쌍인데도 1866 년에야 Paganini 가 찾았다. Euler 는 규칙을 일반화해 쌍을 수십 개 찾았다.[^2]

## 친화수의 밀도

$x$ 이하에서 친화수 쌍에 드는 수의 개수를 $A(x)$ 라 하면 $A(x)/x\to 0$ 이다. Erdős 가 처음 보였고, Pomerance 는 충분히 큰 $x$ 에서 다음 상한을 얻었다.[^3]

$$
A(x)\le x\exp\big(-(\ln x)^{1/3}\big)
$$

## 약수 합 수열의 끝

약수 합 수열은 $1$ 에서 끝나거나, 순환에 들어가거나, 끝없이 커진다. Catalan–Dickson 추측(Catalan–Dickson conjecture)은 모든 약수 합 수열이 유계라는 추측이다. $276$ 에서 시작하는 수열은 계산된 범위에서 아직 끝나지 않았다.[^4]

# 활용

- [완전수](perfect-numbers.md). 약수 합 함수 $\sigma$ 의 곱셈 공식과 Mersenne 꼴의 소수 조건이 친화수에서도 같은 역할을 한다.
- [Möbius 반전 공식](mobius-inversion.md). $\sigma$ 는 상수함수 $1$ 과 항등함수의 Dirichlet 합성곱이고, 친화수 조건 $\sigma(m)=\sigma(n)=m+n$ 은 이 산술함수에 대한 방정식이다.

[^1]: Thābit ibn Qurra 의 규칙. L. E. Dickson, *History of the Theory of Numbers*, Vol. I, Carnegie Institution, 1919, Chapter I.
[^2]: L. Euler, "De numeris amicabilibus", *Opuscula varii argumenti* 2, 1750, pp. 23–107.
[^3]: C. Pomerance, "On the distribution of amicable numbers II", *Journal für die reine und angewandte Mathematik* 325, 1981, pp. 183–188.
[^4]: R. K. Guy, *Unsolved Problems in Number Theory*, 3rd ed., Springer, 2004, Section B6.

# 연관 문서

## 선수지식

- [완전수](perfect-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics
