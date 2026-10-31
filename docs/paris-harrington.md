# Paris–Harrington 정리

# 개요

**Paris–Harrington 정리(Paris–Harrington theorem)** 는 유한집합의 색칠에 관한 참인 명제 가운데 자연수의 기본 공리로는 증명되지 않는 것이 있다는 정리다. 여섯 수의 쌍 $15$ 개를 두 색으로 어떻게 칠해도 한 색으로 묶인 세 수가 나오고, 묶이는 집합의 크기를 키워도 범위를 충분히 크게 잡으면 그런 집합이 나온다는 유한 Ramsey 정리는 [Peano 공리](peano-axioms.md)계에서 증명된다. 묶인 집합의 원소 수가 그 집합의 가장 작은 원소 이상이라는 요구를 하나 더하면, 명제는 여전히 참이지만 필요한 범위가 너무 빨리 커져 Peano 공리계로는 증명되지 않는다.

# 직관

[Ramsey 이론](ramsey-theory.md)의 유한 Ramsey 정리(finite Ramsey theorem)는 $\lbrace 1,\dots,N\rbrace$ 의 두 원소 부분집합을 두 색으로 칠할 때 세 원소가 서로 같은 색으로 묶이는 $N$ 이 있다고 말한다. $N=6$ 이면 충분하다. 여섯 수에서 만드는 쌍 $15$ 개를 어떻게 칠해도 한 색으로 묶인 세 수가 나온다. 묶이는 크기를 $m$ 으로 키우면 필요한 $N$ 이 커지고, 그 $N$ 이 언제나 있다는 것을 Peano 산술이 증명한다.

요구를 하나 바꾼다. 한 색으로 묶인 집합 $H$ 의 원소 수를 $m$ 이상으로 요구하면서, 원소 수가 $H$ 의 가장 작은 원소 이상이기를 함께 요구한다. $\lbrace 3,10,57\rbrace$ 은 원소가 셋이고 가장 작은 원소가 $3$ 이라 조건을 만족한다. $\lbrace 5,9\rbrace$ 는 원소가 둘인데 가장 작은 원소가 $5$ 이므로 만족하지 않고, 원소를 셋 더 넣어야 한다.

바뀐 요구는 칠하는 쪽에 유리하다. 작은 수가 든 집합은 원소 수 요구가 약하므로, 칠하는 쪽은 작은 수들이 한 색으로 묶이는 것을 먼저 막는다. 그러면 한 색으로 묶인 집합은 큰 수들로만 이루어지고 그만큼 원소를 많이 가져야 한다. 같은 $m$ 에서 필요한 $N$ 이 훨씬 커진다.

# 정의

## 상대적으로 큰 집합

유한집합 $H\subseteq\mathbb N$ 이

$$
\vert H\vert\ge\min H
$$

를 만족하면 **상대적으로 큰 집합(relatively large set)** 이라 한다. 빈집합은 제외한다. 직관 절의 $\lbrace 3,10,57\rbrace$ 은 $3\ge 3$ 이라 상대적으로 크고, $\lbrace 5,9\rbrace$ 는 $2\lt 5$ 라 상대적으로 크지 않다.

## 강화된 Ramsey 명제

$\lbrack N\rbrack^n$ 을 $\lbrace 1,\dots,N\rbrace$ 의 $n$ 원소 부분집합 전체라 한다. 기호

$$
N\to\_\ast(m)^n\_k
$$

는 임의의 색칠 $c:\lbrack N\rbrack^n\to\lbrace 1,\dots,k\rbrace$ 에 대해 $\lbrack H\rbrack^n$ 위에서 $c$ 가 상수이고 $\vert H\vert\ge m$ 이며 상대적으로 큰 $H\subseteq\lbrace 1,\dots,N\rbrace$ 가 있다는 뜻이다. 이 기호로 적은

$$
\mathrm{PH}:\quad\forall n\thinspace\forall k\thinspace\forall m\thinspace\exists N\quad N\to\_\ast(m)^n\_k
$$

가 **강화된 Ramsey 명제(strengthened finite Ramsey theorem)** 다. 기호 $\mathrm{PH}$ 는 Paris 와 Harrington 의 머리글자다. 상대적으로 크다는 조건을 빼면 유한 Ramsey 정리다.

$n=2$, $k=2$, $m=3$ 이면 색칠 $c$ 는 쌍마다 두 색 가운데 하나를 준다. $H=\lbrace 2,7,9\rbrace$ 의 세 쌍 $\lbrace 2,7\rbrace$, $\lbrace 2,9\rbrace$, $\lbrace 7,9\rbrace$ 가 같은 색이면, $\vert H\vert=3\ge m$ 이고 $3\ge\min H=2$ 이므로 $H$ 가 요구를 만족한다. $\lbrace 4,7,9\rbrace$ 는 같은 색이어도 $3\lt 4$ 라 요구를 만족하지 않는다.

# 성질

## 무한 Ramsey 정리에서의 유도

강화된 Ramsey 명제는 참이다.

어떤 $n,k,m$ 에서 모든 $N$ 이 실패한다고 하자. $N$ 마다 반례 색칠이 있고, 큰 $N$ 의 색칠을 작은 $N$ 으로 제한해 나무를 만들면 각 높이의 마디가 유한 개다. König 보조정리(König's lemma)가 무한 가지를 주고, 그 가지가 $\lbrack\mathbb N\rbrack^n$ 전체의 색칠 $c$ 를 정한다. 무한 Ramsey 정리(infinite Ramsey theorem)로 $c$ 가 상수인 무한집합 $A$ 가 있다. $A$ 의 가장 작은 원소를 $a$ 라 하고 $A$ 의 처음 $\max(m,a)$ 개 원소를 $H$ 로 잡으면 $H$ 는 상수이고 원소가 $m$ 개 이상이며 상대적으로 크다. $H\subseteq\lbrace 1,\dots,N\rbrace$ 인 $N$ 을 잡으면 그 $N$ 의 색칠이 반례가 아니므로 모순이다.

이 논증은 무한집합을 거친다. 유한 Ramsey 정리를 쓰는 길은 없다.

## Peano 산술에서의 독립성

Peano 산술은 강화된 Ramsey 명제를 증명하지 않는다. Paris 와 Harrington 이 1977 년에 증명했다.[^1]

증명이 둘 있다. 하나는 증가 속도를 재는 것이다. $N$ 의 최솟값을 $f(n,k,m)$ 이라 하면 이 함수는 [빠르게 자라는 계층](fast-growing-hierarchy.md)에서 $F\_{\varepsilon_0}$ 와 같은 속도로 자란다. Peano 산술이 전 함수임을 증명하는 재귀 함수는 $\varepsilon_0$ 보다 작은 [서수](ordinals.md) 수준에 머무르므로 $f$ 를 담지 못한다.

다른 하나는 모형을 만드는 것이다. 강화된 Ramsey 명제를 가정하면 Peano 산술의 가산 비표준 모형 안에서, 다시 Peano 산술의 모형이 되는 시작 절편(initial segment)을 만들 수 있다. 그러므로 강화된 Ramsey 명제로부터 Peano 산술의 무모순성이 증명되고, [Gödel 불완전성 정리](godel-incompleteness.md)의 둘째 정리로 Peano 산술은 이 명제를 증명하지 못한다.

## 유한 Ramsey 정리와의 차이

유한 Ramsey 정리에서 최소 $N$ 은 $n$ 에 따라 정해지는 반복 지수 함수로 유계이고, 그 유계는 Peano 산술 안에서 증명된다. 상대적으로 크다는 조건 하나가 증가 속도를 $\varepsilon_0$ 수준으로 올린다.

# 활용

- 자기 지시 없는 독립 명제. Gödel 문장은 증명 가능성 술어로 자기를 가리키게 만든 식이라 산술의 다른 명제와 생김새가 다르다. 강화된 Ramsey 명제는 유한집합과 색칠만으로 적히고, Peano 산술에서 독립인 명제가 조합론 안에도 있음을 보인다.
- 체계의 세기 측정. 체계가 전 함수임을 증명하는 재귀 함수의 증가 속도로 그 체계의 세기를 잰다. 강화된 Ramsey 명제는 Peano 산술의 한계인 $\varepsilon_0$ 를 조합론 명제의 꼴로 드러낸다. [Goodstein 정리](goodstein-theorem.md)가 같은 자리에 있다.
- 공리 강도의 비교. [역수학](reverse-mathematics.md)은 정리마다 그 증명에 필요한 공리를 찾는다. [2차 산술](second-order-arithmetic.md)의 부분체계 가운데 산술적 내포 공리(arithmetical comprehension axiom)를 갖춘 $\mathrm{ACA}\_0$ 는 산술 문장에 대해 Peano 산술의 보존적 확장이므로 강화된 Ramsey 명제를 증명하지 못한다. 위 논증은 모든 $n$ 에 대한 무한 Ramsey 정리를 쓰고, 이것은 $\mathrm{ACA}\_0$ 에 모든 유한 번 Turing 점프의 존재를 더한 $\mathrm{ACA}\_0'$ 에서 증명된다.

[^1]: J. Paris and L. Harrington, "A Mathematical Incompleteness in Peano Arithmetic", in J. Barwise (ed.), Handbook of Mathematical Logic, North-Holland (1977), 1133–1142.

# 연관 문서

## 선수지식

- [Ramsey 이론](ramsey-theory.md)
- [Gödel 불완전성 정리](godel-incompleteness.md)

## 더 알아보기

아직 연결한 문서가 없다.

#logic #combinatorics #foundations
