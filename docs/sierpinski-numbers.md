# Sierpiński 수

# 개요

**Sierpiński 수(Sierpiński number)** 는 $k\cdot 2^n+1$ 이 모든 양의 정수 $n$ 에서 합성수가 되는 홀수 $k$ 다. $k=1,3,5,7,9$ 는 $n$ 을 $1$ 이나 $2$ 로 두면 이미 소수 $3,7,11,29,19$ 가 나온다. 그러면 $n$ 을 끝없이 늘려도 소수가 한 번도 나오지 않는 $k$ 가 있는지가 물음이 된다. 몇 개의 작은 소수가 $n$ 의 나머지에 따라 돌아가며 $k\cdot 2^n+1$ 을 나누도록 $k$ 를 고르면 그런 $k$ 가 만들어진다.

# 직관

$k=78557$ 에서 $78557\cdot 2^n+1$ 을 $3$ 으로 나눈 나머지를 본다. $78557$ 을 $3$ 으로 나눈 나머지는 $2$ 이고, $2^n$ 을 $3$ 으로 나눈 나머지는 $n$ 이 짝수이면 $1$, 홀수이면 $2$ 다. $n$ 이 짝수이면 $2\cdot 1+1=3$ 이므로 $78557\cdot 2^n+1$ 은 $3$ 으로 나누어진다.

$n$ 이 홀수인 경우는 다른 소수가 맡는다. $2^n$ 을 $5$ 로 나눈 나머지는 $n$ 에 따라 $2,4,3,1$ 을 주기 $4$ 로 되풀이하고, $n$ 을 $4$ 로 나눈 나머지가 $1$ 이면 $78557\cdot 2^n+1$ 이 $5$ 로 나누어진다.

같은 계산으로 소수 $7,13,19,37,73$ 이 각각 $n$ 의 나머지 하나씩을 맡는다. 일곱 소수가 맡는 나머지를 모으면 $n$ 을 $36$ 으로 나눈 나머지 $36$ 가지가 모두 덮인다. 그래서 $78557\cdot 2^n+1$ 은 어느 $n$ 에서도 일곱 소수 가운데 하나로 나누어지고, 그 소수보다 크므로 합성수다.

# 정의

$k\cdot 2^n+1$ 이 모든 $n\ge 1$ 에서 합성수인 양의 홀수 $k$ 를 Sierpiński 수라 한다. 직관 절의 $78557$ 이 Sierpiński 수다.

정수 $d_i\ge 1$ 과 $a_i$ 의 쌍 $(a_i,d_i)$ 유한 개가 있어 모든 정수 $n$ 이 적어도 하나의 합동식 $n\equiv a_i\pmod{d_i}$ 를 만족하면, 이 합동식들의 모임을 [덮개 합동계](covering-systems.md)라 한다. 직관 절에서 쓴 덮개 합동계는 다음 일곱 합동식이고, 각 줄의 소수가 그 줄의 $n$ 에서 $78557\cdot 2^n+1$ 을 나눈다.

| 소수 p | 법 p 에서 2 의 위수 | n 의 합동식 |
| --- | --- | --- |
| $3$ | $2$ | $n\equiv 0\pmod 2$ |
| $5$ | $4$ | $n\equiv 1\pmod 4$ |
| $7$ | $3$ | $n\equiv 1\pmod 3$ |
| $13$ | $12$ | $n\equiv 11\pmod{12}$ |
| $19$ | $18$ | $n\equiv 15\pmod{18}$ |
| $37$ | $36$ | $n\equiv 27\pmod{36}$ |
| $73$ | $9$ | $n\equiv 3\pmod 9$ |

이런 소수의 모임을 $k$ 의 **덮개 집합(covering set)** 이라 한다.

# 성질

## 소수 하나가 맡는 합동류

소수 $p\nmid 2k$ 에서 $2$ 의 위수를 $d$ 로 둔다. $p\mid k\cdot 2^n+1$ 은 $2^n\equiv -k^{-1}\pmod p$ 와 같다. [원시근](primitive-roots.md) 문서의 위수의 성질에 의해 $2^n\equiv 2^m\pmod p$ 는 $n\equiv m\pmod d$ 와 동치다. 따라서 $-k^{-1}$ 이 $2$ 의 거듭제곱으로 나타나면 이 조건을 만족하는 $n$ 은 법 $d$ 의 나머지 하나 전체이고, 나타나지 않으면 그런 $n$ 이 없다.

그래서 덮개 집합을 찾는 일은 각 소수가 맡는 나머지 하나씩으로 덮개 합동계를 이루는 일과 같다.

## Sierpiński 정리

Sierpiński 는 Sierpiński 수가 무한히 많다는 것을 증명했다.[^1] 증명은 [Fermat 수](fermat-numbers.md)의 소인수를 덮개 집합으로 쓴다. $F_m=2^{2^m}+1$ 을 나누는 소수에서 $2$ 의 위수는 $2^{m+1}$ 이다. $F_0,\dots,F_4$ 는 소수 $3,5,17,257,65537$ 이고 $F_5=641\cdot 6700417$ 이므로, 다음 일곱 합동식에 일곱 소수를 하나씩 맡긴다.

$$
\begin{aligned}
&n\equiv 1\pmod 2,\quad n\equiv 2\pmod 4,\quad n\equiv 4\pmod 8,\quad n\equiv 8\pmod{16}\cr
&n\equiv 16\pmod{32},\quad n\equiv 32\pmod{64},\quad n\equiv 0\pmod{64}
\end{aligned}
$$

양의 정수 $n$ 을 $2^j$ 와 홀수의 곱으로 쓰면 $j\le 5$ 일 때 $j+1$ 번째 줄의 합동식을, $j\ge 6$ 일 때 마지막 합동식을 만족하므로 이 모임은 덮개 합동계다. 각 합동식 $n\equiv a\pmod{d}$ 와 그 소수 $p$ 에 대해 $k\equiv -2^{-a}\pmod p$ 를 요구하고 $k$ 가 홀수이기를 요구한다. [중국인의 나머지 정리](chinese-remainder-theorem.md)로 이 조건들은 다음 법의 나머지 하나가 된다.

$$
M=2\cdot 3\cdot 5\cdot 17\cdot 257\cdot 641\cdot 65537\cdot 6700417
$$

그 나머지에 속하면서 $6700417$ 보다 큰 $k$ 는 모두 Sierpiński 수다.

## Riesel 수

$k\cdot 2^n-1$ 이 모든 $n\ge 1$ 에서 합성수인 홀수 $k$ 를 **Riesel 수(Riesel number)** 라 한다. 같은 덮개 논증이 적용되고, Riesel 은 $509203$ 이 Riesel 수임을 보였다.[^2]

## 알려진 열린 문제

Selfridge 는 $78557$ 의 덮개 집합을 찾았고, $78557$ 이 가장 작은 Sierpiński 수라는 것은 Sierpiński 문제(Sierpiński problem)라는 이름으로 남아 있다.[^2] $78557$ 보다 작은 홀수 $k$ 가운데 소수 $k\cdot 2^n+1$ 이 하나도 발견되지 않은 것이 있으므로 이 진술은 증명되지 않았다.

# 활용

- 소수 탐색. Proth 꼴 $k\cdot 2^n+1$ 의 소수를 찾는 계산은 덮개 집합이 있는 $k$ 를 미리 제외한다. 그런 $k$ 에서는 $n$ 을 아무리 늘려도 소수가 나오지 않는다.
- Erdős 의 덮개 논증. Erdős 는 같은 방법으로 $2^j+p$ ($p$ 소수) 꼴로 쓸 수 없는 홀수가 등차수열 하나를 통째로 채운다는 것을 증명했다.[^2]
- [Zsigmondy 정리](zsigmondy-theorem.md). 법이 $d$ 인 합동식을 소수 하나에 맡기려면 $2$ 의 위수가 $d$ 인 소수, 곧 $2^d-1$ 의 새 소인수가 있어야 한다. $d\ne 1,6$ 이면 그런 소수가 존재한다는 것을 이 정리가 보장한다.

[^1]: W. Sierpiński, "Sur un problème concernant les nombres k·2ⁿ + 1", *Elemente der Mathematik* 15, 1960, pp. 73–74.
[^2]: R. K. Guy, *Unsolved Problems in Number Theory*, 3rd ed., Springer, 2004, Sections B21 and F13.

# 연관 문서

## 선수지식

- [원시근](primitive-roots.md)
- [덮개 합동계](covering-systems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics
