# 서수

# 개요

**서수(ordinal)** 는 "몇 번째"를 무한까지 이어 붙인 번호다. 자연수 $1,2,3,\dots$ 를 차례로 세운 뒤 맨 끝에 $0$ 을 하나 더 세우면, $0$ 앞에는 끝없이 많은 수가 있어서 $0$ 이 몇 번째인지 자연수로는 말할 수 없다. 서수는 각 자리 앞에 놓인 번호 전체를 그 자리의 번호로 삼아 이런 자리에도 번호를 준다.

# 직관

자연수를 $1,2,3,\dots$ 의 순서로 늘어놓고 맨 뒤에 $0$ 을 둔다. $1$ 은 첫째 자리, $2$ 는 둘째 자리에 있고, $n\ge 1$ 은 앞에 $n-1$ 개의 수를 둔 자리에 있다. $0$ 앞에는 수가 끝없이 많으므로 $0$ 의 자리에는 어떤 자연수 번호도 맞지 않는다.

자연수 번호가 막힌 것은 앞에 놓인 것이 유한 개일 때만 그 개수를 셀 수 있어서다. 그래서 개수 대신 앞에 놓인 자리의 번호 전체를 모은 집합을 번호로 쓴다. 맨 앞 자리의 번호는 빈 집합 $0=\varnothing$ 이고, 그다음 자리의 번호는 $1=\lbrace 0\rbrace$, 그다음은 $2=\lbrace 0,1\rbrace$ 이다. 이 규칙대로 $0$ 이 놓인 맨 뒤 자리의 번호는 앞 자리의 번호 전체인 $\lbrace 0,1,2,\dots\rbrace$ 이고, 이것을 $\omega$ 로 쓴다.

같은 규칙은 계속 쓸 수 있다. $0$ 뒤에 수를 하나 더 세우면 그 자리의 번호는 $\omega\cup\lbrace\omega\rbrace$ 이다. 자연수를 짝수 $0,2,4,\dots$ 먼저, 홀수 $1,3,5,\dots$ 나중으로 늘어놓으면 $1$ 의 자리 번호는 $\omega$, $3$ 의 자리 번호는 $\omega\cup\lbrace\omega\rbrace$ 이고, 번호는 홀수를 따라 다시 끝없이 이어진다.

자연수의 [수학적 귀납법](mathematical-induction.md)은 $n$ 에서 $n+1$ 로 가는 단계를 되풀이해 모든 자연수에 닿지만, $\omega$ 처럼 바로 앞 자리가 없는 자리에는 닿지 않는다. 그런 자리에서는 "앞의 모든 번호에서 성립하면 이 번호에서도 성립한다" 는 단계를 쓴다. 이 단계를 더한 귀납법을 초한귀납법(transfinite induction)이라 한다.

# 정의

## 정렬순서

집합 $A$ 위의 전순서인 [부분순서](partial-orders.md) $\le$ 에서 공집합이 아닌 모든 부분집합이 최솟값을 가지면 $\le$ 를 **정렬순서(well-order)** 라 한다.

$$
\forall B\subseteq A\thinspace\bigl(B\neq\varnothing \to \exists m\in B\thinspace\forall b\in B\thinspace(m\le b)\bigr)
$$

자연수의 보통 순서는 정렬순서다. 정수의 보통 순서는 정렬순서가 아니다. 음의 정수 전체에 최솟값이 없다. 직관 절의 배열 $1,2,3,\dots,0$ 은 정렬순서다. 부분집합에 양의 정수가 있으면 그 가운데 가장 작은 것이 최솟값이고, $0$ 하나뿐이면 $0$ 이 최솟값이다.

## 추이적 집합

원소의 원소가 다시 원소인 집합 $x$ 를 **추이적 집합(transitive set)** 이라 한다.

$$
\forall y\thinspace(y\in x \to y\subseteq x)
$$

$2=\lbrace\varnothing,\lbrace\varnothing\rbrace\rbrace$ 는 추이적이다. 원소 $\lbrace\varnothing\rbrace$ 의 원소 $\varnothing$ 이 다시 $2$ 의 원소다. $\lbrace\lbrace\varnothing\rbrace\rbrace$ 는 추이적이 아니다. 원소 $\lbrace\varnothing\rbrace$ 의 원소 $\varnothing$ 이 이 집합의 원소가 아니다.

## von Neumann 서수

추이적이고 원소 관계 $\in$ 로 정렬된 집합을 **서수** 라 한다[^1]. 이 정의는 [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel 집합론에 [선택공리](axiom-of-choice.md)를 더한 것) 안의 집합으로 서수를 준다.

$$
\mathrm{Ord}(\alpha)\quad :\iff\quad \alpha \text{ 는 추이적}\quad \wedge\quad (\alpha,\in) \text{ 는 정렬순서}
$$

서수 사이의 순서는 $\alpha\lt\beta :\iff \alpha\in\beta$ 로 정한다. 직관 절의 $0,1,2$ 와 $\omega=\lbrace 0,1,2,\dots\rbrace$ 가 서수이고, $1\lt 2$ 는 $1\in 2$ 다.

## 후속 서수와 극한 서수

서수 $\alpha$ 의 **후속 서수(successor ordinal)** 는 $\alpha+1=\alpha\cup\lbrace\alpha\rbrace$ 다. $0$ 이 아니고 어떤 서수의 후속 서수도 아닌 서수를 **극한 서수(limit ordinal)** 라 한다. 직관 절에서 $0$ 뒤에 세운 자리의 번호 $\omega\cup\lbrace\omega\rbrace$ 가 $\omega+1$ 이고, $\omega$ 는 바로 앞 자리가 없으므로 극한 서수다. $\omega$ 는 가장 작은 극한 서수다.

## 서수 산술

서수의 덧셈, 곱셈, 거듭제곱은 오른쪽 인자에 대한 재귀로 정의한다. $\lambda$ 는 극한 서수다.

$$
\alpha+0=\alpha,\quad \alpha+(\beta+1)=(\alpha+\beta)+1,\quad \alpha+\lambda=\sup_{\beta\lt\lambda}(\alpha+\beta)
$$

$$
\alpha\cdot 0=0,\quad \alpha\cdot(\beta+1)=\alpha\cdot\beta+\alpha,\quad \alpha\cdot\lambda=\sup_{\beta\lt\lambda}\alpha\cdot\beta
$$

$$
\alpha^{0}=1,\quad \alpha^{\beta+1}=\alpha^{\beta}\cdot\alpha,\quad \alpha^{\lambda}=\sup_{\beta\lt\lambda}\alpha^{\beta}\quad(\alpha\neq 0)
$$

$\omega\cdot 2=\omega\cdot 1+\omega=\omega+\omega$ 다. 극한 규칙으로 $1+\omega=\sup_{n\lt\omega}(1+n)=\omega$ 다.

# 성질

## 정렬성과 순서형

- 서수의 원소는 서수이고, $\alpha=\lbrace\beta : \beta\lt\alpha\rbrace$ 다. 두 서수는 항상 비교 가능하고, 서수 전체는 원소 관계로 정렬된다.
- 서수의 집합 $S$ 의 상한은 합집합이다. $\sup S=\bigcup S$. 서수 $\lambda\neq 0$ 이 극한 서수인 것은 $\lambda=\bigcup\lambda$ 와 동치다.
- 서수 전체의 모임은 집합이 아니다. 집합이라면 그 자신이 서수가 되어 자기 자신의 원소가 되고, 정칙성 공리(axiom of regularity)에 모순이다. 이것이 Burali-Forti 역설(Burali-Forti paradox)이다.
- 모든 정렬순서 집합은 정확히 하나의 서수와 순서 동형이다. 그 서수를 **순서형(order type)** 이라 한다. 증명은 최솟값부터 서수를 차례로 대응시키는 초한재귀이며, 치환 공리(axiom schema of replacement)를 사용한다. 직관 절의 배열 $1,2,3,\dots,0$ 의 순서형은 $\omega+1$ 이고, 짝수 먼저 홀수 나중의 배열의 순서형은 $\omega\cdot 2$ 다.
- 덧셈 $\alpha+\beta$ 는 $\alpha$ 의 순서 뒤에 $\beta$ 의 순서를 이어 붙인 순서의 순서형이다. 곱 $\alpha\cdot\beta$ 는 $\beta\times\alpha$ 에 사전식 순서를 준 순서의 순서형이다.

## 초한귀납법

서수의 성질 $P$ 에 대해 다음이 성립한다[^2].

$$
\forall\alpha\thinspace\bigl(\forall\beta\lt\alpha\thinspace P(\beta)\quad \to\quad P(\alpha)\bigr)\quad \Longrightarrow\quad \forall\alpha\thinspace P(\alpha)
$$

증명: $P$ 가 거짓인 서수 $\gamma$ 가 있다고 하자. $\gamma+1$ 의 원소 가운데 $P$ 가 거짓인 것들의 집합은 공집합이 아니므로 최소 원소 $\alpha$ 를 갖는다. $\alpha$ 미만에서는 $P$ 가 성립하므로 가정에서 $\alpha$ 에서도 성립하고, 모순이다.

가정은 $0$, 후속 서수, 극한 서수의 세 경우로 나누어 확인하는 꼴로 흔히 쓴다.

## 초한재귀

각 단계에서 이전 값 전체를 받아 다음 값을 주는 규칙 $G$ 가 주어지면, 모든 서수에서 정의된 함수 $F$ 가 유일하게 존재한다. 이것을 초한재귀(transfinite recursion)라 한다.

$$
F(\alpha)=G\bigl(F\upharpoonright\alpha\bigr)
$$

서수 산술, 누적 위계(cumulative hierarchy), 선택공리로부터의 정렬 구성이 이 정리로 정의된다. 누적 위계는 다음 재귀로 정의된다.

$$
V_0=\varnothing,\quad V_{\alpha+1}=\mathcal P(V_\alpha),\quad V_\lambda=\bigcup_{\alpha\lt\lambda}V_\alpha
$$

정칙성 공리는 모든 집합이 어떤 $V_\alpha$ 에 속한다는 진술과 동치다.

## 산술의 교환법칙 실패

덧셈과 곱셈은 결합법칙을 만족하지만 교환법칙은 만족하지 않는다.

$$
1+\omega=\omega \neq \omega+1,\qquad 2\cdot\omega=\omega \neq \omega\cdot 2
$$

자연수 순서 앞에 원소 하나를 붙인 순서는 $\omega$ 와 동형이다. 뒤에 붙이면 최대 원소가 생겨 $\omega$ 와 동형이 아니다. $\beta\mapsto\alpha+\beta$ 는 순증가이고 극한에서 연속이지만, $\alpha\mapsto\alpha+\beta$ 는 둘 다 아니다.

## Cantor 표준형

$0$ 이 아닌 모든 서수는 다음 꼴로 유일하게 적힌다. 이 꼴을 Cantor 표준형(Cantor normal form)이라 한다.

$$
\alpha=\omega^{\beta_1}c_1+\cdots+\omega^{\beta_k}c_k,\qquad \beta_1\gt\cdots\gt\beta_k\ge 0,\quad 0\lt c_i\lt\omega
$$

$\omega^{\alpha}=\alpha$ 를 만족하는 최소의 서수를 $\varepsilon_0$ 라 한다.

$$
\varepsilon_0=\min\lbrace\alpha : \omega^{\alpha}=\alpha\rbrace=\sup\lbrace\omega,\thinspace \omega^{\omega},\thinspace \omega^{\omega^{\omega}},\dots\rbrace
$$

$\varepsilon_0$ 는 가산 서수다. Gentzen 은 [Peano 산술](peano-axioms.md)(Peano arithmetic, PA)의 무모순성이 $\varepsilon_0$ 까지의 초한귀납법으로 증명됨을 보였다. $\varepsilon_0$ 를 PA 의 증명론적 서수(proof-theoretic ordinal)라 한다([Gödel 불완전성 정리](godel-incompleteness.md)).

## 서수와 기수

같은 크기의 서수 가운데 가장 작은 것을 [기수](cardinality.md)로 정의한다. $\omega$, $\omega+1$, $\omega\cdot 2$, $\omega^\omega$ 는 모두 가산이고 기수는 모두 $\aleph_0$ 다.

# 활용

## 서수로 색인된 계층

- [Borel 계층](borel-hierarchy.md), Baire 계층(Baire hierarchy) 같은 해석학의 계층은 서수로 색인된다.
- 이론의 증명론적 서수로 이론의 증명 강도를 비교한다.
- 프로그램과 게임의 종료 증명에서 상태마다 서수를 주고 각 단계에서 서수가 줄어듦을 보인다. 서수에는 무한 감소열이 없으므로 종료가 따라 나온다.

## Cantor 표준형의 덧셈

Cantor 표준형의 덧셈은 오른쪽 서수의 첫 항보다 지수가 작은 왼쪽 항을 지우고 지수가 같은 항의 계수를 더한다.

$$
(\omega^2\cdot 3+\omega\cdot 5+7)+(\omega\cdot 2+1)=\omega^2\cdot 3+\omega\cdot 7+1
$$

$7$ 은 $\omega\cdot 2$ 에 흡수되어 지워진다. $1+\omega=\omega$ 도 같은 규칙이다.

## 정렬 정리

모든 집합에 정렬순서를 줄 수 있다는 정렬 정리(well-ordering theorem)는 선택공리와 동치이고, 정렬순서가 주어진 집합의 원소는 서수로 색인된다. 그러면 초한귀납법을 임의의 집합 위의 구성에 쓸 수 있다. [벡터 공간](vector-spaces.md)의 기저 존재는 원소를 서수로 줄 세운 뒤 앞의 원소들과 일차독립인 원소만 차례로 고르는 방식으로도 증명된다.

[^1]: Ordinal Number, Wolfram MathWorld. https://mathworld.wolfram.com/OrdinalNumber.html
[^2]: Transfinite induction, Wikipedia. https://en.wikipedia.org/wiki/Transfinite_induction

# 연관 문서

## 선수지식

- [ZFC 공리계](zfc-axioms.md)
- [부분순서](partial-orders.md)

## 더 알아보기

### 기수와 우주

- [선택공리](axiom-of-choice.md)
- [연속체 가설](continuum-hypothesis.md)
- [구성가능 우주](constructible-universe.md)
- [큰 기수](large-cardinals.md)

### 초한 계층

- [초산술적 계층](hyperarithmetical-hierarchy.md)
- [Borel 계층](borel-hierarchy.md)

### 산술의 증명 강도

- [Goodstein 정리](goodstein-theorem.md)
- [빠르게 자라는 계층](fast-growing-hierarchy.md)

### 수 체계의 확장

- [초현실수](surreal-numbers.md)

#set_theory #logic #analysis
