# 조합적 종

# 개요

조합적 종은 유한집합마다 그 위의 구조를 배정하는 규칙을 [함자](functors.md)로 본 것이다. 종에는 합, 곱, 합성, 미분이 정의되고, 종을 지수생성함수로 보내는 사상이 이 네 연산을 급수의 덧셈, 곱셈, 합성, 미분으로 옮긴다.

구조를 조립한 방식이 그대로 생성함수의 식이 되므로, 열거 문제마다 점화식을 따로 세우지 않고 구성에서 식을 읽는다. 지수 공식이 이 대응의 한 경우다.

# 직관

$n$ 개 원소의 집합을 블록으로 나누는 방법의 개수, 곧 [Bell 수](bell-numbers.md)의 지수생성함수는 $e^{e^x-1}$ 이다. 길이 $n$ 순열의 지수생성함수는 $1/(1-x)$ 이고, 순환으로 분해하면 순환 하나의 지수생성함수 $\log(1/(1-x))$ 의 지수와 같다. 두 결과가 같은 모양이다.

집합 분할 쪽을 계산해 본다. 블록 하나는 비어 있지 않은 집합이므로 그 구조의 지수생성함수는 $\sum_{n \ge 1} x^n/n! = e^x - 1$ 이다. 블록이 정확히 $k$ 개인 분할을 세려면 $n$ 개 라벨을 $k$ 개 블록에 나눠 주어야 하고, 라벨을 나누는 방법의 개수가 다항계수이므로 지수생성함수에서는 단순한 곱 $(e^x-1)^k$ 가 된다. 블록에 순서가 없으므로 $k!$ 로 나눈다.

$k$ 를 모두 더하면 $\sum_{k \ge 0}(e^x-1)^k/k! = e^{e^x-1}$ 이다. 순환 분해도 같은 계산이고 블록 자리에 순환이 들어간 것뿐이다. 두 경우에서 실제로 쓴 것은 라벨을 두 덩이로 나누는 일이 지수생성함수의 곱에 대응한다는 사실 하나다.

구조의 종류마다 이 계산을 되풀이하지 않으려면 구조를 배정하는 규칙 자체를 대상으로 삼는다. 규칙에 합과 곱과 합성을 정의하고 지수생성함수로 보내는 사상이 그 연산들을 보존하면, 구성에서 식이 바로 나온다.

# 정의

## 종

유한집합과 전단사의 [범주](category.md)에서 유한집합의 범주로 가는 함자 $F$ 를 **종**이라 한다. 유한집합 $U$ 에 유한집합 $F\lbrack U\rbrack$ 을 주고, 전단사 $\sigma : U \to V$ 에 전단사 $F\lbrack\sigma\rbrack : F\lbrack U\rbrack \to F\lbrack V\rbrack$ 을 주며 합성과 항등을 보존한다. $F\lbrack U\rbrack$ 의 원소를 $U$ 위의 $F$ 구조라 한다.

함자성은 구조가 라벨의 이름에 의존하지 않는다는 조건이다. 따라서 $\vert F\lbrack U\rbrack\vert$ 는 $\vert U\vert$ 에만 의존하고 그 값을 $f\_n$ 으로 쓴다.

| 종 | $U$ 위의 구조 | 지수생성함수 |
| --- | --- | --- |
| $E$ | $U$ 자신 하나 | $e^x$ |
| $E\_+$ | 비어 있지 않은 $U$ 자신 | $e^x - 1$ |
| $L$ | $U$ 의 선형순서 | $1/(1-x)$ |
| $C$ | $U$ 의 순환배열 | $\log(1/(1-x))$ |
| $X$ | $\vert U\vert = 1$ 일 때만 한 개 | $x$ |

## 종의 사상

종 $F$ 에서 $G$ 로 가는 **사상**은 자연변환이다. 유한집합 $U$ 마다 함수 $\alpha_U:F\lbrack U\rbrack\to G\lbrack U\rbrack$ 을 주고, 모든 전단사 $\sigma:U\to V$ 에서

$$
\alpha_V\circ F\lbrack\sigma\rbrack=G\lbrack\sigma\rbrack\circ\alpha_U
$$

를 만족한다. 라벨을 바꾼 뒤 사상을 적용한 결과가 사상을 적용한 뒤 라벨을 바꾼 결과와 같다는 조건이다.

모든 $\alpha_U$ 가 전단사이면 $\alpha$ 를 **동형**이라 하고 $F=G$ 로 쓴다. 종에 관한 등식은 이 뜻이며, 구조의 개수가 같다는 것보다 강한 조건이다. $X\cdot X$ 와 $E_2+E_2$ 는 모든 $n$ 에서 구조의 개수가 같지만 동형이 아니고, 이 구별을 [분자종](molecular-species.md)이 다룬다.

## 지수생성함수

종 $F$ 의 **지수생성함수**는 $F(x) = \sum_{n \ge 0} f\_n x^n/n!$ 이다.

## 합, 곱, 합성

$$
(F+G)\lbrack U\rbrack = F\lbrack U\rbrack \sqcup G\lbrack U\rbrack, \qquad (F \cdot G)\lbrack U\rbrack = \bigsqcup_{U = A \sqcup B} F\lbrack A\rbrack \times G\lbrack B\rbrack
$$

곱은 라벨을 두 덩이로 나눠 각각에 구조를 주는 것이다. 합성 $(F \circ G)\lbrack U\rbrack$ 은 $U$ 를 블록으로 분할하고 각 블록에 $G$ 구조를, 블록 전체의 집합에 $F$ 구조를 주는 것이며 $G\lbrack\varnothing\rbrack = \varnothing$ 일 때 정의한다. 미분은 $F'\lbrack U\rbrack = F\lbrack U \cup \lbrace \ast\rbrace\rbrack$ 로, 라벨 하나를 따로 떼어 표시한 구조다.

# 성질

## 연산의 보존

**정리**[^1]**.** 종에서 지수생성함수로 가는 사상은 다음을 만족한다.

$$
(F+G)(x) = F(x)+G(x), \quad (F\cdot G)(x) = F(x)G(x), \quad (F\circ G)(x) = F(G(x)), \quad F'(x) = \frac{d}{dx}F(x)
$$

곱의 경우 $\vert U\vert = n$ 을 크기 $k$ 와 $n-k$ 로 나누는 방법이 $\binom{n}{k}$ 가지이므로 $h\_n = \sum_k \binom{n}{k} f\_k g\_{n-k}$ 이고, 이것이 지수생성함수의 곱이 주는 계수다. 합성은 같은 계산을 분할의 블록 개수에 걸쳐 반복한 것이다. ∎

## 지수 공식

**따름정리.** $G\lbrack\varnothing\rbrack = \varnothing$ 이면 $(E \circ G)(x) = e^{G(x)}$ 다.

$E \circ G$ 는 라벨 집합을 블록으로 나누고 각 블록에 $G$ 구조를 준 것이다. $G = E\_+$ 를 넣으면 집합 분할의 지수생성함수 $e^{e^x-1}$ 이 나오고 계수가 Bell 수다. $G = C$ 를 넣으면 순환 분해로 $\exp(\log(1/(1-x))) = 1/(1-x)$ 가 나와 순열의 개수 $n!$ 을 준다.

## 미분과 점화식

$L' = L \cdot L$ 에서 $L(x)' = L(x)^2$ 을 얻는다. 선형순서에서 라벨 하나를 떼면 그 앞뒤 두 순서가 남기 때문이다. 종의 등식이 미분방정식을 주고 그것이 점화식이 된다.

## 순환 지표

라벨을 붙이지 않은 구조를 세려면 전단사군의 작용으로 나눈 몫을 센다. 종 $F$ 의 순환 지표

$$
Z\_F(p\_1, p\_2, \dots) = \sum_{n \ge 0}\frac{1}{n!}\sum_{\sigma \in S\_n} \mathrm{fix}\thinspace F\lbrack\sigma\rbrack \thinspace p\_1^{c\_1(\sigma)}p\_2^{c\_2(\sigma)}\cdots
$$

에서 $c\_i(\sigma)$ 는 $\sigma$ 의 길이 $i$ 순환의 개수다. $p\_i = x^i$ 를 넣으면 동형류의 보통생성함수가, $p\_1 = x$ 이고 나머지를 $0$ 으로 두면 지수생성함수가 나온다. 순환 지표도 합, 곱, 합성을 보존한다.

# 활용

- 집합 분할과 순열 분해의 지수생성함수를 한 공식에서 얻는다. [Bell 수](bell-numbers.md)와 제1종 [Stirling 수](stirling-numbers.md)가 지수 공식의 두 경우다.
- 뿌리 있는 라벨 나무의 종은 $T = X \cdot (E \circ T)$ 를 만족하고, 여기서 $T(x) = xe^{T(x)}$ 와 Lagrange 반전으로 나무의 개수 $n^{n-1}$ 이 나온다.
- Pólya 열거가 순환 지표의 특수한 경우다. 군의 작용으로 색칠을 세는 공식이 종의 합성에서 나온다.
- 확률에서 라벨 구조의 극한 분포를 다룰 때 종의 분해가 독립 성분으로 옮겨진다. 순열의 순환 개수가 Poisson 근사를 갖는 것이 순환 종의 분해에서 나온다.

[^1]: A. Joyal, "Une théorie combinatoire des séries formelles", *Advances in Mathematics* 42 (1981), 1–82.

# 연관 문서

## 선수지식

- [생성함수](generating-functions.md)
- [Bell 수](bell-numbers.md)

## 더 알아보기

- [분자종](molecular-species.md)

#combinatorics #category_theory #probability
