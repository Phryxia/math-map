# 기하급수

# 개요

**기하급수(geometric series)** 는 각 항이 바로 앞 항에 같은 수 $r$ 을 곱한 것인 급수 $a+ar+ar^2+\cdots$ 다. 순환소수 $0.333\cdots$ 은 $3/10+3/100+3/1000+\cdots$ 으로 끝없이 더한 값인데, 항을 하나씩 더해서는 끝나지 않으므로 그 값이 $1/3$ 이라는 것을 다른 방법으로 보여야 한다. 처음 $n$ 개 항의 합을 $r^n$ 을 쓴 닫힌 식으로 적고, $n$ 을 키울 때 그 식의 [극한](limits.md)을 구한다.

# 직관

$S_n=1+r+r^2+\cdots+r^{n-1}$ 에 $r$ 을 곱하면 $rS_n=r+r^2+\cdots+r^n$ 이다. 두 식을 빼면 가운데 항이 모두 지워져 $S_n-rS_n=1-r^n$ 이 남는다. $r\ne 1$ 이면 $S_n=(1-r^n)/(1-r)$ 다.

$0.333\cdots$ 은 첫 항이 $3/10$ 이고 $r=1/10$ 이므로 처음 $n$ 자리까지의 합은 $\frac{3}{10}\cdot\frac{1-10^{-n}}{1-1/10}=\frac13\left(1-10^{-n}\right)$ 이다. $10^{-n}$ 은 $0$ 으로 가므로 합은 $1/3$ 로 수렴한다.

# 정의

$a\ne 0$ 과 $r$ 에 대해 급수 $\sum_{k\ge 0}ar^k$ 를 첫째 항 $a$, **공비(common ratio)** $r$ 인 기하급수라 한다. 부분합은 다음과 같다.

$$
\sum_{k=0}^{n-1}ar^k=\begin{cases}a\dfrac{1-r^n}{1-r}&r\ne 1\cr na&r=1\end{cases}
$$

# 성질

## 수렴 조건

**정리.** 실수 또는 [복소수](complex-numbers.md) $r$ 에 대해 $\sum_{k\ge 0}ar^k$ 는 $\lvert r\rvert\lt 1$ 일 때 수렴하고 그 합은 $a/(1-r)$ 이다. $\lvert r\rvert\ge 1$ 이면 발산한다.

증명의 요지. $\lvert r\rvert\lt 1$ 이면 $\lvert r^n\rvert=\lvert r\rvert^n\to 0$ 이므로 부분합의 식에서 극한이 나온다. $\lvert r\rvert\ge 1$ 이면 항의 절댓값이 $\lvert a\rvert$ 이상이라 항이 $0$ 으로 가지 않고, 항이 $0$ 으로 가지 않는 급수는 수렴하지 않는다.[^1]

## 항별 미분

$\lvert r\rvert\lt 1$ 에서 $1/(1-r)=\sum_{k\ge 0}r^k$ 는 [멱급수](power-series.md)이므로 수렴반경 안에서 항별로 미분된다.

$$
\sum_{k\ge 1}kr^{k-1}=\frac{1}{(1-r)^2}
$$

동전을 던져 앞면이 처음 나올 때까지 던진 횟수의 평균이 $\sum_{k\ge 1}k2^{-k}=\frac12\cdot\frac{1}{(1-1/2)^2}=2$ 인 것이 이 식이다.

## 비교의 기준

[급수의 수렴판정](series-convergence.md)의 비율 판정과 근 판정은 주어진 급수의 항이 어느 자리부터 공비 $q\lt 1$ 인 기하급수의 항보다 작다는 것을 보이는 판정이다. 오차가 매 단계 $q$ 배 이하로 줄어드는 반복법의 오차 합도 같은 이유로 처음 오차의 $1/(1-q)$ 배 이하다.

## 작용소의 기하급수

$r$ 자리에 [유계 작용소](bounded-operators.md) $T$ 를 놓아도 같은 계산이 성립한다. $\lVert T\rVert\lt 1$ 이면 $\sum_{k\ge 0}T^k$ 가 수렴하고 $(I-T)\sum_{k=0}^{n-1}T^k=I-T^n$ 에서 그 합이 $(I-T)^{-1}$ 이다. 이 급수를 **Neumann 급수(Neumann series)** 라 한다.

# 활용

- [무리수](irrational-numbers.md)에서 되풀이되는 소수 전개가 유리수라는 증명은 되풀이되는 마디를 기하급수로 더한다.
- [멱급수](power-series.md)의 수렴반경은 근 판정으로 기하급수와 비교해 정해진다.
- [생성함수](generating-functions.md)에서 $1/(1-x)=\sum x^n$ 은 모든 항의 계수가 $1$ 인 수열의 생성함수이고, 분수식 생성함수를 부분분수로 나눈 뒤 각 조각을 기하급수로 전개해 계수를 얻는다.
- [축약사상 고정점 정리](banach-fixed-point.md)의 오차 한계 $d(x_n,x^\ast)\le\frac{q^n}{1-q}d(x_1,x_0)$ 은 이웃한 반복값의 거리를 기하급수로 더한 것이다.

[^1]: Jiří Lebl, *Basic Analysis*, §2.5 (급수, 기하급수의 수렴과 합).

# 연관 문서

## 선수지식

- [수열의 극한](limits.md)

## 더 알아보기

- [급수의 수렴판정](series-convergence.md)
- [기하분포](geometric-distribution.md)

#analysis #combinatorics
