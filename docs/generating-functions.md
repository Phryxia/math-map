# 생성함수

# 개요

**생성함수(generating function)** 는 수열을 [멱급수](power-series.md)의 계수로 인코딩해, 수열에 대한 조작을 급수의 대수적 연산으로 바꾸는 장치다. 1 원 동전과 2 원 동전으로 $n$ 원을 만드는 방법의 수를 $n$ 마다 세려면 경우를 하나씩 나열해야 하고, $n$ 이 커지면 나열이 길어진다. 생성함수는 동전마다 $1+x+x^2+\cdots$ 같은 급수를 만들고 그 곱의 계수로 이 수들을 한꺼번에 얻는다.

# 직관

1 원 동전과 2 원 동전이 얼마든지 있을 때 $4$ 원을 만드는 방법을 센다. 2 원짜리를 $0$ 개, $1$ 개, $2$ 개 쓰면 나머지를 1 원짜리 $4$ 개, $2$ 개, $0$ 개로 채우므로 방법은 $3$ 가지다. $5$ 원, $6$ 원으로 가면 같은 나열을 처음부터 다시 해야 한다.

1 원짜리 $a$ 개를 $x^a$ 로, 2 원짜리 $b$ 개를 $x^{2b}$ 로 적는다. 1 원짜리를 쓰는 방법 전체는 $1+x+x^2+\cdots$ 이고, 2 원짜리를 쓰는 방법 전체는 $1+x^2+x^4+\cdots$ 이다. 두 급수를 곱하면 $x^a\cdot x^{2b}=x^{a+2b}$ 이므로 $x^4$ 의 계수는 $a+2b=4$ 인 쌍 $(4,0),(2,1),(0,2)$ 의 수 $3$ 이다. 곱 하나의 $x^n$ 의 계수가 모든 $n$ 에 대해 $n$ 원을 만드는 방법의 수다.

$(1-x)(1+x+x^2+\cdots)$ 를 전개하면 $x$ 이상의 항이 모두 지워져 $1$ 이 남으므로 $1+x+x^2+\cdots$ 를 $1/(1-x)$ 로 쓴다. 같은 계산으로 $1+x^2+x^4+\cdots=1/(1-x^2)$ 이고, 곱은 $1/\bigl((1-x)(1-x^2)\bigr)$ 이다. 이 유리함수를 부분분수로 나누면 $n$ 원을 만드는 방법의 수가 $\lfloor n/2\rfloor+1$ 로 한 번에 나온다. 이때 $x$ 에 수를 넣어 급수의 값을 구하지 않으므로 수렴을 따지지 않는다.

# 정의

**형식적 멱급수(formal power series)** 는 계수의 열 $(a_n)\_{n\ge 0}$ 을 $\sum_{n\ge 0}a_nx^n$ 으로 적은 것이다. $x$ 는 값을 넣지 않는 형식적 변수이고 수렴은 요구하지 않는다. 계수가 가환환(commutative ring) $R$ 에 있는 형식적 멱급수 전체는 항별 덧셈과 다음 곱으로 [환](rings.md)을 이룬다.

$$
\Bigl(\sum a_n x^n\Bigr)\Bigl(\sum b_n x^n\Bigr)=\sum_{n\ge 0}\Bigl(\sum_{k=0}^{n}a_k b_{n-k}\Bigr)x^{n}
$$

이 환을 $R[[x]]$ 로 쓴다. 곱의 계수는 두 계수열의 [합성곱](convolution.md)이다. [다항식환](polynomial-rings.md)이 유한 개의 항만 허용하는 반면 형식적 멱급수는 무한 개의 항을 허용한다. 직관 절의 등식은 $R[[x]]$ 안의 곱으로 확인된다.

$$
(1-x)\sum_{n\ge 0}x^{n}=1,\qquad\text{즉}\quad \sum_{n\ge 0}x^{n}=\frac{1}{1-x}
$$

수열 $(a_n)$ 의 **보통 생성함수(ordinary generating function, OGF)** $A(x)$ 와 **지수 생성함수(exponential generating function, EGF)** $\hat A(x)$ 는 다음 형식적 멱급수다.

$$
A(x)=\sum_{n\ge 0}a_n x^{n},
\qquad
\hat A(x)=\sum_{n\ge 0}a_n\frac{x^{n}}{n!}
$$

모든 항이 $1$ 인 수열의 OGF 는 $1/(1-x)$ 이고 EGF 는 $e^x=\sum x^n/n!$ 이다. 직관 절의 수열 $a_n=\lfloor n/2\rfloor+1$ 의 OGF 는 $1/\bigl((1-x)(1-x^2)\bigr)$ 이다. 계수 추출(coefficient extraction)은 $\lbrack x^{n}\rbrack A(x)=a_n$ 으로 쓴다. $\lbrack x^4\rbrack\thinspace 1/\bigl((1-x)(1-x^2)\bigr)=3$ 이다.

# 성질

## 가역원

$R[[x]]$ 의 원소가 가역인 것은 상수항이 $R$ 에서 가역인 것과 동치다. $a_0$ 이 가역이면 $(\sum a_nx^n)(\sum b_nx^n)=1$ 의 계수를 비교해 $b_0=a_0^{-1}$, $b_n=-a_0^{-1}\sum_{k=1}^na_kb_{n-k}$ 로 $b_n$ 을 차례로 정할 수 있다. 그래서 $R$ 이 체이면 가역이 아닌 원소는 상수항이 $0$ 인 급수들이고 이들이 유일한 극대 아이디얼을 이루므로, $R[[x]]$ 는 국소환(local ring)이다.

## 기본 연산

$$
\begin{aligned}
&\text{이동:} && \sum_{n\ge 0}a_{n+1}x^{n}=\frac{A(x)-a_0}{x}\cr
&\text{부분합:} && \sum_{n\ge 0}\Bigl(\sum_{k\le n}a_k\Bigr)x^{n}=\frac{A(x)}{1-x}\cr
&\text{가중:} && \sum_{n\ge 0}n\thinspace a_n x^{n}=x\thinspace A'(x)\cr
&\text{OGF 곱:} && \lbrack x^{n}\rbrack A(x)B(x)=\sum_{k=0}^{n}a_k b_{n-k}\cr
&\text{EGF 곱:} && n!\thinspace\lbrack x^{n}\rbrack\hat A(x)\hat B(x)=\sum_{k=0}^{n}\binom{n}{k}a_k b_{n-k}
\end{aligned}
$$

EGF 의 곱에 이항계수가 붙으므로 라벨 있는 구조(labeled structure)에 맞는다. $n$ 개의 라벨을 두 부분구조에 나누어 배정하는 방법의 수가 이항계수다. OGF 의 곱은 라벨 없는 구조에 맞고, 직관 절의 동전 셈이 그 예다.

## 선형 점화식과 유리함수의 동치

상수 계수 선형 점화식을 만족하는 수열의 생성함수는 유리함수이고, 역도 성립한다. [Fibonacci 수](fibonacci-numbers.md)의 수열 $F_0=0$, $F_1=1$, $F_n=F_{n-1}+F_{n-2}$ 에 급수를 곱하고 점화식을 대입하면 다음을 얻는다.

$$
F(x)=\sum_{n\ge 0}F_n x^{n}=\frac{x}{1-x-x^{2}}
$$

분모의 근을 이용해 부분분수로 분해하면 닫힌 공식이 나온다. $\varphi$ 는 황금비(golden ratio)다.

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

이 원리를 [해석함수](holomorphic-functions.md)로 정당화하면 특이점 해석(singularity analysis)이 된다. 형식적 조작으로 얻은 급수의 [수렴](limits.md) 반경이 위 식의 $\rho$ 다.

## Catalan 수: 비선형 점화식

이진 트리(binary tree)는 비어 있거나 뿌리 아래 왼쪽과 오른쪽 이진 트리를 하나씩 둔 것이다. 그래서 내부 정점 수로 센 OGF 가 $C(x)=1+xC(x)^2$ 를 만족하고, 이차방정식을 풀면 다음을 얻는다.

$$
C(x)=\frac{1-\sqrt{1-4x}}{2x},
\qquad
C_n=\frac{1}{n+1}\binom{2n}{n}
$$

$C_n$ 이 [Catalan 수](catalan-numbers.md)다. 계수는 $(1-4x)^{1/2}$ 의 이항전개로 얻는다. 여기서 곱이 아니라 합성과 대수방정식이 나타나는 것이 선형 경우와의 차이다.

## 분할수

$n$ 을 양의 정수의 합으로 쓰는 방법의 수 $p(n)$, 곧 [분할수](partitions.md)는 각 부분 크기 $k$ 를 독립적으로 몇 개 쓸지 고르는 구조이므로, 크기별 급수의 곱이 된다.

$$
\sum_{n\ge 0}p(n)x^{n}=\prod_{k\ge 1}\frac{1}{1-x^{k}}
$$

Euler 의 오각수 정리(pentagonal number theorem)는 이 곱의 역수를 전개한 결과다[^1].

$$
\prod_{k\ge 1}(1-x^{k})=\sum_{j\in\mathbb{Z}}(-1)^{j}x^{\thinspace j(3j-1)/2}=1-x-x^{2}+x^{5}+x^{7}-x^{12}-\cdots
$$

두 급수의 곱이 1이므로 계수를 비교하면 부호 교대 점화식이 나오고, 이것으로 $p(n)$ 을 $O(n^{3/2})$ 항으로 계산할 수 있다.

$$
p(n)=p(n-1)+p(n-2)-p(n-5)-p(n-7)+p(n-12)+\cdots
$$

지수는 일반화된 오각수 $j(3j-1)/2$ 이며 $j$ 는 $0$ 이 아닌 정수 전체를 훑는다. 서로 다른 부분으로의 분할과 홀수 부분으로의 분할이 같은 개수라는 Euler 의 분할 정리(Euler's partition theorem)도 같은 곱을 두 방식으로 정리해 얻는다.

## EGF 와 라벨 있는 구조

집합 분할, 순열, 사상의 열거에는 EGF 가 맞다. 대표적인 결과는 다음이다.

$$
\sum_{n\ge 0}B_n\frac{x^{n}}{n!}=e^{\thinspace e^{x}-1},
\qquad
\sum_{n\ge 0}D_n\frac{x^{n}}{n!}=\frac{e^{-x}}{1-x}
$$

$B_n$ 은 [Bell 수](bell-numbers.md)(집합 분할의 개수), $D_n$ 은 고정점이 없는 순열, 곧 완전순열(derangement)의 개수다. 두 번째 식은 [포함배제 원리](inclusion-exclusion.md)로 얻은 부호 교대 합의 EGF 형태다. $1/(1-x)$ 는 모든 순열의 EGF 이고 $e^{-x}$ 가 고정점을 제거하는 인자다. 지수 공식(exponential formula)은 연결된 조각의 EGF 가 $C(x)$ 면 그 조각들의 집합의 EGF 가 $\exp(C(x))$ 라는 공식이다. $B_n$ 의 식은 조각을 공집합이 아닌 블록으로, $C(x)=e^x-1$ 로 둔 경우다.

## 형식적 조작의 한계

형식적 멱급수에서 무한 합은 각 차수의 계수가 유한 합으로 결정될 때만 정의된다. 상수항이 $0$ 이 아닌 급수를 대입하는 합성은 허용되지 않는다. $A(x)$ 의 $x$ 에 $1$ 을 대입하는 것도 급수가 수렴할 때만 의미가 있다.

# 활용

## 점화식 풀이 절차

1. 점화식에 $x^n$ 을 곱하고 $n$ 에 대해 합한다.
2. 초기항 보정을 하고 $A(x)$ 에 대한 방정식을 세운다.
3. $A(x)$ 를 닫힌 형태로 푼다.
4. 부분분수 또는 이항전개로 계수를 추출한다.

## 화폐 문제

$1$, $5$, $10$, $25$ 센트로 $n$ 센트를 만드는 방법의 수는 다음 급수의 계수다.

$$
\frac{1}{(1-x)(1-x^{5})(1-x^{10})(1-x^{25})}
$$

## 확률에서의 생성함수

확률에서 확률생성함수(probability generating function)와 [적률생성함수](moment-generating-function.md)는 같은 장치이며, 독립 [확률변수](random-variables.md)의 합이 생성함수의 곱이 되는 성질을 [중심극한정리](central-limit-theorem.md)류 논증에 쓴다. [Markov 연쇄](markov-chains.md)의 첫 도달 시간 분포도 생성함수로 푼다. [이산 Fourier 변환](fourier.md)은 유한 수열에 대한 생성함수를 단위근에서 평가한 것이고, 이 관점에서 합성곱 정리와 급수의 곱이 같은 사실이다. 해석적 조합론(analytic combinatorics)은 구조의 재귀적 정의에서 생성함수를 유도하고 특이점의 위치와 종류로 계수의 점근을 구하는 방법이다[^2].

[^1]: Euler's pentagonal number theorem, 진술과 분할수 점화식: https://en.wikipedia.org/wiki/Pentagonal_number_theorem
[^2]: P. Flajolet and R. Sedgewick, Analytic Combinatorics, Cambridge University Press, 2009 (Part A: Symbolic methods). https://algo.inria.fr/flajolet/Publications/book.pdf

# 연관 문서

## 선수지식

- [셈의 기본 원리](counting-principles.md)
- [수열의 극한](limits.md)

## 더 알아보기

### 조합적 수와 반전 공식

- [Catalan 수](catalan-numbers.md)
- [Fibonacci 수](fibonacci-numbers.md)
- [Lagrange 반전 공식](lagrange-inversion.md)
- [Ehrhart 다항식](ehrhart-polynomial.md)

### 확률 과정과 구조 이론

- [분지과정](branching-processes.md)
- [적률생성함수](moment-generating-function.md)
- [조합적 종](combinatorial-species.md)

### 계수의 점근

- [Laplace 방법](laplace-method.md)
- [분할수](partitions.md)

### 수열의 점화식 계산

- [Berlekamp–Massey 알고리즘](berlekamp-massey.md)

#combinatorics #analysis #probability
