# 초현실수

# 개요

**초현실수(surreal numbers)** 는 이미 만든 수들의 두 집합 $L$, $R$ 의 쌍 $\lbrace L\mid R\rbrace$ 로 수를 차례로 만들어 얻는 순서체이고, 실수와 [서수](ordinals.md)를 함께 포함한다. J. H. Conway 가 조합 게임을 분석하며 정의했고[^1], 이름은 D. E. Knuth 가 붙였다[^2].

초현실수 전체는 집합이 아니라 고유 모임(proper class)이다. 그 위에서 덧셈과 곱셈이 같은 꼴의 재귀로 정의되고, 결과는 실폐체가 된다.

# 직관

수 $\tfrac12$ 을 $0$ 과 $1$ 사이에 처음 끼워 넣는 수로 정의하려 한다. 그러려면 "사이" 를 뜻하는 기호와, 끼워 넣을 수 가운데 어느 것을 고를지의 규칙이 있어야 한다. 기호는 $\lbrace 0\mid 1\rbrace$ 로 쓰고 "왼쪽 집합의 모든 수보다 크고 오른쪽 집합의 모든 수보다 작은 수 가운데 가장 먼저 만든 것" 으로 읽는다.

처음에는 아무 수도 없으므로 두 집합이 다 비어 있는 $\lbrace\thinspace\mid\thinspace\rbrace$ 하나를 만들고 $0$ 이라 부른다. 다음 날에는 $0$ 을 쓸 수 있으므로 $\lbrace 0\mid\thinspace\rbrace=1$ 과 $\lbrace\thinspace\mid 0\rbrace=-1$ 이 생긴다. 그다음 날에 $\lbrace 1\mid\thinspace\rbrace=2$, $\lbrace 0\mid 1\rbrace=\tfrac12$ 와 그 음수들이 생긴다. 이렇게 날마다 이웃한 두 수 사이와 양 끝에 수가 하나씩 더해지고, 유한한 날 안에 생기는 수는 분모가 $2$ 의 거듭제곱인 분수다.

덧셈도 같은 꼴로 정의하면 $\tfrac12+\tfrac12=\lbrace\tfrac12\mid\tfrac32\rbrace$ 가 나온다. $\tfrac12$ 보다 크고 $\tfrac32$ 보다 작은 수 가운데 가장 먼저 만든 것은 $1$ 이므로 $\tfrac12+\tfrac12=1$ 이다. 날을 무한히 셀 수 있으면 $\lbrace 0,1,2,\dots\mid\thinspace\rbrace$ 가 모든 자연수보다 큰 수 $\omega$ 가 되고, 서수의 순서대로 날을 이어 가면 모든 서수와 모든 실수가 생긴다.

# 정의

## 수와 순서

초현실수와 그 순서 $\le$ 를 동시에 재귀로 정의한다. $L$, $R$ 이 이미 정의된 초현실수의 집합이고 $L$ 의 어느 원소도 $R$ 의 어느 원소 이상이 아니면 $x=\lbrace L\mid R\rbrace$ 는 초현실수다. $L$ 의 원소를 $x^L$, $R$ 의 원소를 $x^R$ 로 쓴다.

$$
x\le y\iff\text{어떤 } x^L \text{ 도 } y\le x^L \text{ 이 아니고, 어떤 } y^R \text{ 도 } y^R\le x \text{ 가 아니다}
$$

$x\le y$ 이고 $y\le x$ 이면 $x=y$ 로 쓴다. 이 등호는 같은 수를 나타내는 서로 다른 쌍을 같게 본다. $\lbrace -1\mid 1\rbrace=0$ 이 그 예다.

## 탄생일

수 $x$ 의 **탄생일(birthday)** 은 $x=\lbrace L\mid R\rbrace$ 이고 $L\cup R$ 의 원소의 탄생일이 모두 $\alpha$ 보다 작은 쌍이 존재하는 가장 작은 서수 $\alpha$ 다. $0=\lbrace\thinspace\mid\thinspace\rbrace$ 의 탄생일은 $0$ 이다.

## 연산

$$
-x=\lbrace -x^R\mid -x^L\rbrace,\qquad x+y=\lbrace x^L+y,\thinspace x+y^L\mid x^R+y,\thinspace x+y^R\rbrace
$$

곱셈은 다음과 같다.

$$
xy=\left\lbrace\begin{matrix}x^Ly+xy^L-x^Ly^L,\cr x^Ry+xy^R-x^Ry^R\end{matrix}\thinspace\middle\vert\thinspace\begin{matrix}x^Ly+xy^R-x^Ly^R,\cr x^Ry+xy^L-x^Ry^L\end{matrix}\right\rbrace
$$

여기서 각 식은 $x^L$, $x^R$, $y^L$, $y^R$ 가 해당 집합의 원소 전체를 돌 때 나오는 수의 집합을 뜻한다.

# 성질

## 단순성 정리

**단순성 정리(simplicity theorem)** 는 $x=\lbrace L\mid R\rbrace$ 가 $L$ 의 모든 원소보다 크고 $R$ 의 모든 원소보다 작은 수 가운데 탄생일이 가장 작은 수와 같고, 그런 수가 하나뿐이라는 정리다[^1]. 직관 절의 $\tfrac12+\tfrac12=1$ 과 $\lbrace -1\mid 1\rbrace=0$ 이 이 정리로 나온다.

## 순서체

$\le$ 는 전순서이고, 위 연산으로 초현실수는 순서체의 공리를 모두 만족한다[^1]. 원소가 집합이 아니라 모임을 이루므로 이 순서체를 $\mathbf{No}$ 로 쓴다. 양수 $x$ 의 제곱근과 홀수 차수 다항식의 근이 $\mathbf{No}$ 안에 존재하므로 $\mathbf{No}$ 는 [실폐체](real-closed-fields.md)다.

모든 순서체(집합인 것)는 $\mathbf{No}$ 에 순서체로서 매장된다[^1]. 그래서 $\mathbf{No}$ 는 순서체 가운데 가장 큰 것의 역할을 한다.

## 실수와 서수

탄생일이 유한인 수는 분모가 $2$ 의 거듭제곱인 유리수 전체이고, 탄생일이 $\omega$ 인 수들까지 더하면 실수 전체가 들어온다. 예를 들어 $\tfrac13=\lbrace\tfrac14,\tfrac{5}{16},\dots\mid\tfrac12,\tfrac38,\dots\rbrace$ 는 $\tfrac13$ 에 아래와 위에서 다가가는 분모가 $2$ 의 거듭제곱인 분수들을 양쪽에 모은 것이다.

서수 $\alpha$ 는 $\lbrace\beta : \beta\lt\alpha\mid\thinspace\rbrace$ 로 초현실수가 된다. 서수끼리의 초현실수 덧셈과 곱셈은 서수의 보통 덧셈과 곱셈이 아니라 Hessenberg 자연합과 자연곱(natural sum and product)과 같다. 서수가 아닌 수도 생긴다.

$$
\omega-1=\lbrace 0,1,2,\dots\mid\omega\rbrace,\qquad \frac1\omega=\lbrace 0\mid 1,\tfrac12,\tfrac14,\dots\rbrace,\qquad \omega\cdot\frac1\omega=1
$$

# 활용

- 조합 게임 이론. 두 사람이 서로 다른 수를 갖는 편파 게임(partizan game)의 국면 가운데 $\lbrace L\mid R\rbrace$ 의 조건을 만족하는 것이 초현실수이고, 게임의 합이 초현실수의 덧셈과 같다[^1]. Nim 의 크기 $1$ 인 더미 $\lbrace 0\mid 0\rbrace$ 는 왼쪽의 $0$ 이 오른쪽의 $0$ 이상이어서 수가 아니다. 이런 공평 게임은 [Sprague–Grundy 정리](sprague-grundy-theorem.md)가 Nim 더미의 값으로 분석한다.

[^1]: J. H. Conway, On Numbers and Games, Academic Press (1976).
[^2]: D. E. Knuth, Surreal Numbers, Addison-Wesley (1974).

# 연관 문서

## 선수지식

- [서수](ordinals.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #algebra #combinatorics
