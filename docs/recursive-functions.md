# 재귀함수

# 개요

**재귀함수(recursive function)** 는 몇 개의 기본 함수에서 출발해 합성, 원시 재귀, 최소화를 유한 번 적용해 얻는 자연수 함수다. 최소화를 빼고 얻는 함수를 원시 재귀 함수라 한다. 최소화까지 쓰면 [계산 가능성](computability.md)의 Turing 기계가 계산하는 함수와 정확히 같은 함수족이 나온다. Gödel 이 [불완전성 정리](godel-incompleteness.md)에서 증명 관계를 산술로 옮길 때 원시 재귀 함수를 썼고, Kleene 이 1936년에 최소화를 더해 지금의 정의를 세웠다[^1].

# 직관

Turing 기계는 테이프 위의 규칙으로 계산을 적는다. 산술에서는 덧셈을 식 두 줄로 정의한다. $a + 0 = a$ 이고 $a + (b + 1) = (a + b) + 1$ 이다. $3 + 2$ 를 구하려면 둘째 줄을 두 번 써서 $(3 + 1) + 1$ 로 줄이고, 첫째 줄로 끝낸다. 곱셈도 같은 꼴로 $a \cdot 0 = 0$ 과 $a \cdot (b + 1) = a \cdot b + a$ 로 정의되고, 둘째 줄 안에 이미 정의한 덧셈이 들어간다.

이 꼴의 정의는 $b$ 를 하나씩 줄이므로 계산이 반드시 끝나고, 몇 번 반복할지가 계산 전에 정해진다. 그런데 "$f(x, y) = 0$ 이 되는 가장 작은 $y$" 를 구하는 계산은 $y = 0, 1, 2, \dots$ 를 차례로 넣어 보아야 하고, 그런 $y$ 가 없으면 끝나지 않는다. 반복 횟수가 정해진 정의에 이 찾기를 더하면 Turing 기계와 같은 계산 능력이 나온다.

# 정의

## 기본 함수와 연산

$\mathbb N = \lbrace 0, 1, 2, \dots\rbrace$ 위의 함수를 다룬다. $\bar x$ 는 $(x_1, \dots, x_k)$ 를 줄여 쓴 것이다.

**기본 함수(basic function)** 는 다음 셋이다.

- 영함수 $Z(x) = 0$
- 후자 함수 $S(x) = x + 1$
- 사영 함수 $P^k_i(x_1, \dots, x_k) = x_i$ $(1 \le i \le k)$

**합성(composition).** $g$ 가 $m$ 변수 함수이고 $h_1, \dots, h_m$ 이 $k$ 변수 함수이면 $f(\bar x) = g(h_1(\bar x), \dots, h_m(\bar x))$ 다.

**원시 재귀(primitive recursion).** $k$ 변수 함수 $g$ 와 $k + 2$ 변수 함수 $h$ 에서 $k + 1$ 변수 함수 $f$ 를 다음으로 정의한다.

$$
f(\bar x, 0) = g(\bar x), \qquad f(\bar x, y + 1) = h(\bar x, y, f(\bar x, y))
$$

**최소화(minimization).** $k + 1$ 변수 부분함수 $g$ 에서 $f(\bar x) = \mu y\thinspace\lbrack g(\bar x, y) = 0\rbrack$ 를 정의한다. 값은 $g(\bar x, y) = 0$ 이고 모든 $z \lt y$ 에서 $g(\bar x, z)$ 가 정의되어 $0$ 이 아닌 가장 작은 $y$ 다. 그런 $y$ 가 없으면 $f(\bar x)$ 는 정의되지 않는다. $\mu$ 를 최소화 연산자(minimization operator, $\mu$ 연산자)라 한다.

## 함수족

- **원시 재귀 함수(primitive recursive function)** 는 기본 함수에서 합성과 원시 재귀만으로 얻는 함수다.
- **부분 재귀 함수(partial recursive function)** 는 기본 함수에서 합성, 원시 재귀, 최소화로 얻는 부분함수다. $\mu$ 재귀 함수라고도 한다.
- **전역 재귀 함수(total recursive function)** 는 모든 입력에서 정의되는 부분 재귀 함수다. 일반 재귀 함수(general recursive function)라고도 한다.

집합 $A \subseteq \mathbb N^k$ 가 원시 재귀 또는 재귀라는 것은 특성함수가 각각 원시 재귀 또는 전역 재귀라는 것이다.

## 예

- 덧셈 $a + b$ 는 $g = P^1_1$, $h(a, y, z) = S(z)$ 로 둔 원시 재귀다. 곱셈은 $g = Z$, $h(a, y, z) = z + a$ 로 둔 원시 재귀다. 거듭제곱 $a^b$ 도 같은 꼴이다.
- 전자 $\mathrm{pred}(0) = 0$, $\mathrm{pred}(y + 1) = y$ 와 절단 뺄셈 $a \mathbin{\dot{-}} b = \max(a - b, 0)$ 은 원시 재귀다.
- 유계 최소화 $\mu y \le n\thinspace\lbrack g(\bar x, y) = 0\rbrack$ 는 찾는 범위가 $n$ 이하로 정해져 있어 원시 재귀로 정의된다. 유계 한정사(bounded quantifier) $\exists y \le n$, $\forall y \le n$ 도 원시 재귀 술어를 원시 재귀 술어로 보낸다.
- 소수의 집합은 "$1 \lt p$ 이고 $\forall d \le p\thinspace(d \mid p \Rightarrow d = 1 \lor d = p)$" 로 정의되므로 원시 재귀다.

# 성질

## 원시 재귀 함수의 전역성

기본 함수는 전역이고, 합성과 원시 재귀는 전역 함수를 전역 함수로 보낸다. 원시 재귀는 $y$ 에 대한 귀납으로 $f(\bar x, y)$ 가 정의됨을 보이면 된다. 정의되지 않는 값은 최소화에서만 생긴다.

## Ackermann 함수

**Ackermann 함수(Ackermann function)** 는 다음 식으로 정의되는 두 변수 함수다.

$$
A(0, n) = n + 1, \qquad A(m + 1, 0) = A(m, 1), \qquad A(m + 1, n + 1) = A(m, A(m + 1, n))
$$

**정리.** $A$ 는 전역 재귀 함수이지만 원시 재귀 함수가 아니다.

증명의 요지. 순서쌍 $(m, n)$ 의 사전식 순서에 대한 귀납으로 $A$ 가 모든 입력에서 정의된다. 다음으로 원시 재귀 함수 $f$ 마다 상수 $c$ 가 있어 모든 $\bar x$ 에서 $f(\bar x) \lt A(c, x_1 + \cdots + x_k)$ 임을 $f$ 의 구성에 대한 귀납으로 보인다. $n \mapsto A(n, n)$ 이 원시 재귀라면 어떤 $c$ 에 대해 $A(n, n) \lt A(c, n)$ 이 모든 $n$ 에서 성립하고, $n = c$ 를 넣으면 모순이다.

원시 재귀 함수는 반복 횟수가 미리 정해진 계산만 하므로 전역 재귀 함수 전체를 덮지 못한다. [빠르게 자라는 계층](fast-growing-hierarchy.md)에서 $n \mapsto A(n, n)$ 은 $F_\omega$ 와 같은 속도로 자란다.

## 전역 재귀 함수의 대각선 논법

전역 재귀 함수 전체를 $(e, x) \mapsto g(e, x)$ 꼴의 전역 재귀 함수 하나로 나열할 수는 없다. 그런 $g$ 가 있으면 $d(x) = g(x, x) + 1$ 은 전역 재귀인데 어느 $e$ 에 대해서도 $d \neq g(e, \cdot)$ 이다. 그래서 계산 가능한 함수를 하나의 목록으로 나열하려면 정의되지 않는 값을 허락하는 부분 재귀 함수를 써야 한다.

## Turing 계산 가능성과의 동치

**정리.** 부분함수 $f : \mathbb N^k \rightharpoonup \mathbb N$ 가 부분 재귀 함수인 것과 Turing 기계로 계산되는 것은 동치다.

한쪽은 기본 함수, 합성, 원시 재귀, 최소화를 각각 Turing 기계로 구현해 보인다. 최소화는 $y = 0, 1, 2, \dots$ 를 차례로 시험하는 반복이다. 다른 쪽은 Turing 기계의 상태와 테이프를 수 하나로 부호화하고, 한 단계의 전이가 원시 재귀 함수임을 보인다. [Lambda calculus](lambda-calculus.md)의 $\lambda$ 정의가능성도 같은 함수족을 준다. 세 정의의 일치가 [Church–Turing 논제](church-turing-thesis.md)의 근거다.

## Kleene 정규형 정리

**정리 (Kleene 정규형 정리, Kleene normal form theorem).** 원시 재귀 술어 $T(e, x, y)$ 와 원시 재귀 함수 $U$ 가 있어, 모든 부분 재귀 함수 $f$ 에 대해 어떤 $e$ 가 존재하고

$$
f(x) \simeq U(\mu y\thinspace\lbrack T(e, x, y)\rbrack)
$$

다[^1]. $\simeq$ 는 양변이 함께 정의되지 않거나 함께 정의되어 같다는 뜻이다.

$e$ 는 $f$ 를 계산하는 프로그램의 번호이고, $T(e, x, y)$ 는 "$y$ 가 프로그램 $e$ 를 입력 $x$ 로 돌려 끝난 계산 과정의 부호다" 라는 술어다. 계산 과정이 주어지면 그것이 올바른지는 반복 횟수가 정해진 검사로 확인되므로 $T$ 는 원시 재귀다. 따라서 모든 부분 재귀 함수는 최소화를 한 번만 써서 정의된다.

# 활용

- Gödel 불완전성 정리: "$n$ 은 $m$ 을 결론으로 하는 증명의 부호다" 라는 관계가 원시 재귀이고, 원시 재귀 함수는 산술 논리식으로 표현된다. 이 두 사실로 증명 가능성 술어를 산술 안에서 정의한다.
- [형식주의와 Hilbert 프로그램](formalism-hilbert-program.md): Hilbert 의 유한주의적 관점은 원시 재귀 산술(primitive recursive arithmetic, PRA)로 형식화된다. PRA 는 원시 재귀 함수의 정의식과 한정사 없는 귀납만 쓰는 체계다.
- [역수학](reverse-mathematics.md): 체계 $\mathrm{WKL}\_0$ 에서 증명되는 $\Pi^0_2$ 문장은 PRA 에서도 증명된다.
- [산술적 계층](arithmetical-hierarchy.md): Kleene 정규형 정리의 $T$ 술어로 정지 집합이 $\Sigma^0_1$ 임이 나온다.

[^1]: S. C. Kleene, General recursive functions of natural numbers, Mathematische Annalen 112, 1936, 727–742, https://doi.org/10.1007/BF01565439

# 연관 문서

## 선수지식

- [계산 가능성](computability.md)

## 더 알아보기

- [Church–Turing 논제](church-turing-thesis.md)
- [빠르게 자라는 계층](fast-growing-hierarchy.md)

#computation #logic #foundations
