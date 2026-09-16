# 생성함수

# 개요

생성함수는 수열을 멱급수의 계수로 인코딩해, 수열에 대한 조작을 급수의 대수적 연산으로 바꾸는 장치다. 수열의 합성곱이 급수의 곱이 되고, 이동이 변수 곱이 되며, 선형 점화식이 유리함수가 된다. "수열을 하나의 대상으로 다룬다"는 발상이 핵심이다.

형식적 멱급수는 수렴을 요구하지 않는 대수적 대상이다. 계수 수열의 환으로 정의하므로 급수가 발산해도 조작이 정당하다. 수렴하는 구간이 있으면 해석적 도구(미분, 적분, 유수, 안장점 근사)를 추가로 쓸 수 있고, 여기서 점근 열거(asymptotic enumeration)가 나온다.

두 종류가 표준이다. 보통 생성함수(OGF)는 라벨 없는 구조, 지수 생성함수(EGF)는 라벨 있는 구조에 맞는다. 두 곱 연산의 조합적 의미가 다르므로 구분이 생긴다.

# 직관

주머니에 1원 동전 여러 개, 2원 동전 여러 개가 있다고 하자. n원을 만드는 방법의 수를 알고 싶다. 1원짜리로 만들 수 있는 금액을 급수로 적으면 1 + x + x^2 + ... 이고, 2원짜리는 1 + x^2 + x^4 + ... 이다. 두 급수를 곱하면 x^n의 계수가 정확히 답이 된다. 곱셈이 "각 종류에서 하나를 골라 금액을 더한다"는 연산을 자동으로 수행한다.

```mermaid
graph LR
  A["수열 (a_n)"] --> B["급수 A(x) = Σ a_n x^n"]
  B --> C["덧셈 / 곱 / 미분 / 치환"]
  C --> D["닫힌 형태 A(x)"]
  D --> E["부분분수 · 이항전개 · 계수 추출"]
  E --> F["a_n의 공식 또는 점근"]
```

곱셈이 합성곱이라는 사실이 전부다. 조합 구조를 "쪼갤 수 있으면" 생성함수가 곱으로 분해된다.

# 정의

수열 (a_n)에 대해 보통 생성함수와 지수 생성함수를 다음과 같이 정의한다. x는 형식적 변수이며 수렴은 요구하지 않는다.

$$
A(x)=\sum_{n\ge 0}a_n x^{n},
\qquad
\hat A(x)=\sum_{n\ge 0}a_n\frac{x^{n}}{n!}
$$

## 형식적 멱급수 환

계수가 가환환 R에 있는 형식적 멱급수 전체는 다음 연산으로 환을 이룬다.

$$
\Bigl(\sum a_n x^n\Bigr)\Bigl(\sum b_n x^n\Bigr)=\sum_{n\ge 0}\Bigl(\sum_{k=0}^{n}a_k b_{n-k}\Bigr)x^{n}
$$

이 [환](rings.md)을 R[[x]]로 쓴다. R이 체이면 R[[x]]는 국소환이고, 급수가 가역인 것은 상수항이 가역인 것과 동치다. 특히 다음 항등식은 수렴과 무관하게 R[[x]] 안의 등식이다.

$$
(1-x)\sum_{n\ge 0}x^{n}=1,\qquad\text{즉}\quad \sum_{n\ge 0}x^{n}=\frac{1}{1-x}
$$

[다항식환](polynomial-rings.md)이 유한 개의 항만 허용하는 반면 형식적 멱급수는 무한 항을 허용한다. 계수 추출 연산을 다음과 같이 쓴다.

$$
[x^{n}]A(x)=a_n
$$

## 기본 연산 사전

$$
\begin{aligned}
&\text{이동:} && \sum_{n\ge 0}a_{n+1}x^{n}=\frac{A(x)-a_0}{x}\cr
&\text{부분합:} && \sum_{n\ge 0}\Bigl(\sum_{k\le n}a_k\Bigr)x^{n}=\frac{A(x)}{1-x}\cr
&\text{가중:} && \sum_{n\ge 0}n\thinspace a_n x^{n}=x\thinspace A'(x)\cr
&\text{OGF 곱:} && [x^{n}]A(x)B(x)=\sum_{k=0}^{n}a_k b_{n-k}\cr
&\text{EGF 곱:} && n!\thinspace[x^{n}]\hat A(x)\hat B(x)=\sum_{k=0}^{n}\binom{n}{k}a_k b_{n-k}
\end{aligned}
$$

EGF의 곱에 이항계수가 붙는 것이 라벨 있는 구조에 맞는 이유다. n개의 라벨을 두 부분구조에 나누어 배정하는 방법의 수가 곧 이항계수다.

# 성질

## 선형 점화식은 유리함수와 동치

상수 계수 선형 점화식을 만족하는 수열의 생성함수는 유리함수이며, 역도 성립한다. Fibonacci 수열 F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2}에 급수를 곱하고 점화식을 대입하면 다음을 얻는다.

$$
F(x)=\sum_{n\ge 0}F_n x^{n}=\frac{x}{1-x-x^{2}}
$$

분모의 근을 이용해 부분분수로 분해하면 닫힌 공식이 나온다. phi는 황금비다.

$$
F(x)=\frac{1}{\sqrt5}\Bigl(\frac{1}{1-\varphi x}-\frac{1}{1-\psi x}\Bigr),
\qquad
F_n=\frac{\varphi^{n}-\psi^{n}}{\sqrt5},\quad
\varphi,\psi=\frac{1\pm\sqrt5}{2}
$$

일반적으로 분모의 근의 크기가 계수의 지수적 성장률을 결정한다. 가장 작은 절댓값의 극(pole)이 지배한다.

$$
a_n\sim C\thinspace\rho^{-n}n^{m-1},\qquad \rho=\text{가장 작은 극의 절댓값}
$$

이 원리를 [해석함수](holomorphic-functions.md)로 정당화하면 특이점 해석(singularity analysis)이 된다. 형식적 조작으로 얻은 급수의 [수렴](limits.md) 반경이 곧 rho다.

## Catalan 수: 비선형 점화식

이진 트리의 재귀 구조에서 C(x) = 1 + x C(x)^2가 나오고, 이차방정식을 풀어 다음을 얻는다.

$$
C(x)=\frac{1-\sqrt{1-4x}}{2x},
\qquad
C_n=\frac{1}{n+1}\binom{2n}{n}
$$

계수는 (1-4x)^(1/2)의 이항전개로 얻는다. 여기서 곱이 아니라 합성과 대수방정식이 나타나는 것이 선형 경우와의 차이다.

## 분할수

n의 분할 개수 p(n)은 각 부분 크기 k를 독립적으로 몇 개 쓸지 고르는 구조이므로, 크기별 급수의 곱이 된다.

$$
\sum_{n\ge 0}p(n)x^{n}=\prod_{k\ge 1}\frac{1}{1-x^{k}}
$$

Euler의 오각수 정리는 이 곱의 역수를 전개한 결과다[^1].

$$
\prod_{k\ge 1}(1-x^{k})=\sum_{j\in\mathbb{Z}}(-1)^{j}x^{\thinspace j(3j-1)/2}=1-x-x^{2}+x^{5}+x^{7}-x^{12}-\cdots
$$

두 급수의 곱이 1이므로 계수를 비교하면 부호 교대 점화식이 나오고, 이것으로 p(n)을 O(n^{3/2}) 항으로 계산할 수 있다.

$$
p(n)=p(n-1)+p(n-2)-p(n-5)-p(n-7)+p(n-12)+\cdots
$$

지수는 일반화된 오각수 j(3j-1)/2이며 j는 0이 아닌 정수 전체를 훑는다. 서로 다른 부분으로의 분할과 홀수 부분으로의 분할이 같은 개수라는 Euler의 정리도 같은 곱을 두 방식으로 정리해 얻는다.

## EGF와 라벨 있는 구조

집합 분할, 순열, 사상의 열거에는 EGF가 맞다. 대표적인 결과는 다음이다.

$$
\sum_{n\ge 0}B_n\frac{x^{n}}{n!}=e^{\thinspace e^{x}-1},
\qquad
\sum_{n\ge 0}D_n\frac{x^{n}}{n!}=\frac{e^{-x}}{1-x}
$$

B_n은 Bell 수(집합 분할의 개수), D_n은 완전순열의 개수다. 두 번째 식은 [포함배제 원리](inclusion-exclusion.md)로 얻은 부호 교대 합의 EGF 형태이며, 실제로 (1/(1-x))는 모든 순열의 EGF이고 e^(-x)가 고정점을 제거하는 인자다. 지수 공식(exponential formula)이 이 패턴을 일반화한다. 연결된 조각의 EGF가 C(x)면 그 조각들의 집합의 EGF는 exp(C(x))다.

## 형식적 조작의 한계

형식적 멱급수에서 무한 합은 각 차수의 계수가 유한 합으로 결정될 때만 정의된다. 상수항이 0이 아닌 급수를 대입하는 합성은 허용되지 않는다. 예를 들어 A(x)에 x를 1로 치환하는 것은 급수가 수렴할 때만 의미가 있다. 발산 급수를 다루는 형식적 조작과 수치 계산을 혼동하지 않아야 한다.

# 활용

## 점화식 풀이 절차

1. 점화식에 x^n을 곱하고 n에 대해 합한다.
2. 초기항 보정을 하고 A(x)에 대한 방정식을 세운다.
3. A(x)를 닫힌 형태로 푼다.
4. 부분분수 또는 이항전개로 계수를 추출한다.

## 화폐 문제

1, 5, 10, 25센트로 n센트를 만드는 방법의 수는 다음 급수의 계수다.

$$
\frac{1}{(1-x)(1-x^{5})(1-x^{10})(1-x^{25})}
$$

```python
def coin_ways(amount, coins):
    """생성함수 곱을 계수 배열 위에서 직접 수행한다."""
    ways = [1] + [0] * amount
    for c in coins:                      # 1/(1 - x^c)를 차례로 곱한다
        for n in range(c, amount + 1):
            ways[n] += ways[n - c]
    return ways[amount]

assert coin_ways(100, [1, 5, 10, 25]) == 242

def partitions(n):
    """p(n): 부분 크기 k에 대한 1/(1 - x^k)의 곱"""
    p = [1] + [0] * n
    for k in range(1, n + 1):
        for m in range(k, n + 1):
            p[m] += p[m - k]
    return p[n]

assert [partitions(n) for n in range(10)] == [1, 1, 2, 3, 5, 7, 11, 15, 22, 30]
```

안쪽 루프가 오름차순인 것이 곱셈의 정확한 구현이다. 내림차순으로 바꾸면 각 부분을 한 번씩만 쓰는(서로 다른 부분) 문제가 된다.

## 다른 분야와의 연결

확률에서 확률생성함수와 적률생성함수는 같은 장치이며, 독립 확률변수의 합이 생성함수의 곱이 되는 성질이 [중심극한정리](central-limit-theorem.md)류 논증의 출발점이다. [Markov chain](markov-chains.md)의 첫 도달 시간 분포도 생성함수로 푼다. [이산 Fourier 변환](fourier.md)은 유한 수열에 대한 생성함수를 단위근에서 평가한 것이고, 이 관점에서 합성곱 정리와 급수의 곱이 같은 사실이다. Analytic Combinatorics는 구조의 재귀적 문법에서 생성함수를 기계적으로 유도하고 특이점으로 점근을 읽는 체계적 방법론이다[^2].

[^1]: Euler's pentagonal number theorem, 진술과 분할수 점화식: https://en.wikipedia.org/wiki/Pentagonal_number_theorem
[^2]: P. Flajolet and R. Sedgewick, Analytic Combinatorics, Cambridge University Press, 2009 (Part A: Symbolic methods). https://algo.inria.fr/flajolet/Publications/book.pdf

# 연관 문서

## 선수지식

- [셈의 기본 원리](counting-principles.md)
- [수열의 극한](limits.md)

## 더 알아보기

- [Laplace 방법과 안장점](laplace-method.md)
- [분할수와 원법](partitions.md)

#combinatorics
