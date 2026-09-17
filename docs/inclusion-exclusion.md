# 포함배제 원리

# 개요

포함배제 원리는 겹치는 집합들의 합집합 크기를 각 부분교집합의 크기로 계산하는 공식이다. 덧셈 원리는 서로소일 때만 쓸 수 있고, 겹침을 한 번 빼면 두 번 겹친 부분이 지워지며 다시 더하면 세 번 겹친 부분이 과다 계산된다. 포함배제는 이 진동을 부호 교대 합으로 상쇄한다.

조건을 만족하는 것을 직접 세기 어렵고 조건을 어기는 방식은 세기 쉬운 상황에 쓴다. 완전순열(derangement), Euler phi 함수, 전사함수의 개수, 체(sieve) 계산이 같은 형태다. 일반화하면 부분순서 집합 위의 Möbius 반전이 되고, 확률 판본은 Bonferroni 부등식으로 이어진다.

# 직관

두 집합이면 겹친 부분을 한 번 더 셌으므로 한 번 빼면 된다.

$$
|A\cup B|=|A|+|B|-|A\cap B|
$$

세 집합에서 세 겹 영역의 계수는 세 개를 더할 때 3, 쌍 교집합 셋을 뺄 때 -3 이라 합이 0 이다. 삼중 교집합을 다시 더해야 1 이 된다.

일반적으로 정확히 m개의 집합에 속하는 원소의 계수는 이항정리에 의해 다음과 같이 1 이 된다($m\ge1$ 일 때).

$$
\sum_{j=1}^{m}(-1)^{j-1}\binom{m}{j}=1-\sum_{j=0}^{m}(-1)^{j}\binom{m}{j}=1-0=1
$$

어떤 집합에도 속하지 않는 원소는 어떤 항에도 나타나지 않으므로 계수가 0 이다.

# 정의

유한집합 $A_1,\dots,A_n$ 에 대해 공집합이 아닌 첨자 부분집합 $S$ 에 대한 교집합을 다음과 같이 쓴다.

$$
A_S=\bigcap_{i\in S}A_i,\qquad A_\varnothing=U
$$

여기서 U는 전체집합이다.

## 합집합 형태

$$
\Bigl|\bigcup_{i=1}^{n}A_i\Bigr|
=\sum_{\varnothing\ne S\subseteq[n]}(-1)^{|S|-1}\thinspace|A_S|
=\sum_{j=1}^{n}(-1)^{j-1}\sum_{|S|=j}|A_S|
$$

## 여집합 형태

모든 조건을 피하는 원소의 개수를 세는 다음 형태가 계산에 편하다.

$$
\Bigl|\thinspace U\setminus\bigcup_{i=1}^{n}A_i\Bigr|=\sum_{S\subseteq[n]}(-1)^{|S|}\thinspace|A_S|
$$

## 지시함수 증명

각 원소 x에 대한 항등식을 U 위에서 더하면 위 공식이 나온다. 1_A는 지시함수다.

$$
\prod_{i=1}^{n}\bigl(1-\mathbf{1}_{A_i}(x)\bigr)=\sum_{S\subseteq[n]}(-1)^{|S|}\mathbf{1}_{A_S}(x)
$$

좌변은 $x$ 가 어떤 $A_i$ 에도 속하지 않으면 1, 하나라도 속하면 0 이다. 우변을 $U$ 에 대해 합하면 여집합 형태를 얻는다[^1].

# 성질

## 확률 버전과 Bonferroni 부등식

[확률](probability.md)에서는 크기를 확률로 바꾸면 같은 식이 성립한다.

$$
P\Bigl(\bigcup_{i=1}^{n}A_i\Bigr)=\sum_{j=1}^{n}(-1)^{j-1}\sum_{|S|=j}P(A_S)
$$

합을 중간에서 끊으면 부등식이 된다. 홀수 개 항에서 끊으면 상한, 짝수 개에서 끊으면 하한이다. j=1에서 끊은 상한이 union bound다.

$$
P\Bigl(\bigcup_i A_i\Bigr)\le \sum_i P(A_i)
$$

[Ramsey 이론](ramsey-theory.md)의 확률적 하한 증명이 이 상한을 쓴다.

## 완전순열 (derangement)

고정점이 없는 [순열](counting-principles.md)의 개수를 $D_n$ 이라 한다. $A_i$ 를 "$i$ 가 고정점인 순열들"이라 하면 크기가 $j$ 인 첨자 집합의 교집합은 $(n-j)!$ 이므로 다음을 얻는다.

$$
D_n=\sum_{j=0}^{n}(-1)^{j}\binom{n}{j}(n-j)!=n!\sum_{j=0}^{n}\frac{(-1)^{j}}{j!}
$$

임의의 순열이 완전순열일 확률은 지수함수의 교대급수로 수렴한다.

$$
\frac{D_n}{n!}\longrightarrow e^{-1}\approx 0.367879
$$

오차는 $1/(n+1)!$ 보다 작다. 작은 값은 $D_1=0,\ D_2=1,\ D_3=2,\ D_4=9,\ D_5=44$ 이고 점화식 $D_n=(n-1)(D_{n-1}+D_{n-2})$ 도 성립한다.

## Euler phi 함수

$n$ 보다 작거나 같은 양의 정수 중 $n$ 과 서로소인 것의 개수를 $\varphi(n)$ 이라 한다. $n$ 의 서로 다른 [소인수](primes.md)를 $p_1,\dots,p_r$ 이라 하고 $A_i$ 를 $p_i$ 의 배수 집합이라 하면, $p_i$ 들이 서로 다른 소수이므로 교집합의 크기가 곱으로 주어져 다음을 얻는다.

$$
\varphi(n)=\sum_{S\subseteq[r]}(-1)^{|S|}\frac{n}{\prod_{i\in S}p_i}=n\prod_{i=1}^{r}\Bigl(1-\frac{1}{p_i}\Bigr)
$$

예를 들어 phi(60) = 60(1-1/2)(1-1/3)(1-1/5) = 16이다. 이 곱 형태에서 phi 가 곱셈적(multiplicative)임이 보인다. phi 의 산술적 성질은 [Fermat–Euler 정리](fermat-euler-theorem.md)에서 쓴다.

## 전사함수의 개수

크기 n의 집합에서 크기 m의 집합으로 가는 전사 [함수](functions.md)의 개수는 상이 i번째 값을 빠뜨리는 사건에 포함배제를 적용해 얻는다.

$$
\bigl|\lbrace f:[n]\twoheadrightarrow[m]\rbrace\bigr|=\sum_{j=0}^{m}(-1)^{j}\binom{m}{j}(m-j)^{n}=m!\thinspace S(n,m)
$$

여기서 S(n,m)은 제2종 Stirling 수다.

## Möbius 반전

포함배제는 국소 유한 [부분순서](partial-orders.md) 집합 위의 Möbius 반전의 특수한 경우다. 부분집합 격자에서 Möbius 함수가 다음 값을 가지기 때문에 부호 (-1)^|S|가 나타난다.

$$
\mu(S,T)=(-1)^{|T\setminus S|}\quad (S\subseteq T)
$$

정수의 나눗셈 순서에서 같은 반전을 적용하면 수론적 Möbius 반전 공식이 되고, phi 계산의 또 다른 유도가 된다.

## 항 수의 폭발

공식은 $2^n$ 개의 항을 가지므로 $n$ 이 크면 직접 계산이 불가능하다. 영구식(permanent) 계산의 Ryser 공식이 이 형태이며 여전히 지수 시간이다. 실제로는 대칭성으로 항을 묶거나, 근사가 필요하면 Bonferroni 절단을 쓴다.

# 활용

## 소수 세기

100 이하 소수의 개수를 2, 3, 5, 7의 배수를 걸러 계산한다. 1은 소수가 아니고 2, 3, 5, 7 자신은 걸러졌으므로 보정한다.

$$
\pi(100)=\Bigl(100-\sum_{p}\Bigl\lfloor\frac{100}{p}\Bigr\rfloor+\sum_{p<q}\Bigl\lfloor\frac{100}{pq}\Bigr\rfloor-\cdots\Bigr)-1+4=25
$$

이 절차를 일반화한 Legendre, Meissel, Lehmer 의 방법이 소수 계수 함수의 고전적 계산법이다.

## 여집합 형태의 계산

여집합 형태를 코드로 옮긴다.

```python
from itertools import combinations
from math import factorial, prod

def avoid_all(universe_size, intersection_size, n):
    """|U \\ (A_1 ∪ ... ∪ A_n)| = Σ_S (-1)^|S| |A_S|"""
    total = 0
    for j in range(n + 1):
        for S in combinations(range(n), j):
            total += (-1) ** j * intersection_size(S)
    return total

# 완전순열: A_i = {i를 고정하는 순열}, |A_S| = (n - |S|)!
n = 8
D = avoid_all(factorial(n), lambda S: factorial(n - len(S)), n)
assert D == 14833
assert D == round(factorial(n) * sum((-1) ** j / factorial(j) for j in range(n + 1)))
print(D / factorial(n), prod([1]))   # 0.3678... ≈ 1/e
```

## 확률과 조합 최적화

생일 문제류의 적어도 하나 사건, 체를 이용한 정수론적 추정, [최소 신장트리](minimum-spanning-tree.md)류 문제의 계수 계산, 색칠 다항식(chromatic polynomial)의 삭제-축약 전개가 포함배제 구조를 갖는다. [생성함수](generating-functions.md)와 결합하면 부호 교대 합을 멱급수의 곱으로 다룬다.

[^1]: J. H. van Lint and R. M. Wilson, A Course in Combinatorics, 2nd ed., Cambridge University Press, Chapter 10 (Sieve methods). https://www.cambridge.org/core/books/course-in-combinatorics/BD3F62F231B5CC1E9E06915EF0E0E1DC

# 연관 문서

## 선수지식

- [셈의 기본 원리](counting-principles.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics
