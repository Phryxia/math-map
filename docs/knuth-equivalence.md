# Knuth 동치

# 개요

**Knuth 동치(Knuth equivalence)** 는 두 수의 나열이 행 삽입으로 같은 대각표를 주는지를 이웃한 세 글자의 바꾸기로 판정하는 [동치관계](equivalence-relations.md)다. 카드 세 장을 $2,1,3$ 순서와 $2,3,1$ 순서로 놓고 [Robinson–Schensted–Knuth 대응](robinson-schensted-knuth.md)(RSK)의 행 삽입을 하면, 두 순서 모두 첫 행 $1,3$, 둘째 행 $2$ 인 대각표가 나온다. 두 순서는 이웃한 카드 $1,3$ 의 자리만 다르고, 그 옆의 $2$ 가 두 카드 사이의 값이다.

Knuth 동치는 이런 바꾸기로 이어지는 나열을 한 묶음으로 모으고, 같은 대각표를 주는 나열이 정확히 한 묶음이 된다.

# 직관

$1,2,3$ 을 늘어놓는 여섯 순서를 행 삽입하면 대각표 네 개가 나온다.

- $123$: 첫 행 $1,2,3$.
- $213$, $231$: 첫 행 $1,3$, 둘째 행 $2$.
- $132$, $312$: 첫 행 $1,2$, 둘째 행 $3$.
- $321$: 세 행 $1$, $2$, $3$.

같은 대각표를 주는 두 순서는 이웃한 카드 $1,3$ 을 맞바꾼 것이다. $213$ 과 $231$ 에서는 바뀌는 두 카드의 왼쪽에 $2$ 가 있고, $132$ 와 $312$ 에서는 오른쪽에 $2$ 가 있다. 어느 쪽이든 바로 옆의 카드가 바뀌는 두 카드 사이의 값이다.

$123$ 에서 $1,2$ 를 맞바꿔 $213$ 을 만들면 대각표가 달라진다. 이때 옆의 $3$ 은 $1$ 과 $2$ 사이의 값이 아니다.

각 묶음에는 그 대각표를 아래 행부터, 각 행은 왼쪽에서 오른쪽으로 읽은 순서가 들어 있다. 첫 행 $1,3$, 둘째 행 $2$ 인 대각표를 이렇게 읽으면 $213$ 이고, 첫 행 $1,2$, 둘째 행 $3$ 인 대각표를 읽으면 $312$ 다.

# 정의

## 기본 Knuth 변환

양의 정수의 유한 나열을 낱말(word)이라 한다. 직관 절의 순서 $213$ 은 길이 $3$ 인 낱말이다. 낱말 안의 이웃한 세 글자를 다음처럼 바꾸고 나머지 글자는 그대로 두는 것을 **기본 Knuth 변환(elementary Knuth transformation)** 이라 한다.

$$
\begin{aligned}
&yzx\quad\leftrightarrow\quad yxz &&(x\lt y\le z)\cr
&xzy\quad\leftrightarrow\quad zxy &&(x\le y\lt z)
\end{aligned}
$$

첫 꼴은 바뀌는 두 글자 $x,z$ 의 왼쪽에 사이값 $y$ 가 있는 경우이고, 둘째 꼴은 오른쪽에 있는 경우다. 직관 절의 $213\leftrightarrow 231$ 은 $x=1$, $y=2$, $z=3$ 인 첫 꼴이고, $132\leftrightarrow 312$ 는 둘째 꼴이다.

같은 수가 되풀이되면 등호가 붙는 자리가 두 꼴에서 다르다. $x=y=1$, $z=2$ 이면 둘째 꼴로 $121\leftrightarrow 211$ 이고, 두 낱말은 모두 첫 행 $1,1$, 둘째 행 $2$ 인 대각표를 준다.

## Knuth 동치

기본 Knuth 변환을 유한 번 되풀이해 낱말 $u$ 를 $v$ 로 바꿀 수 있으면 $u$ 와 $v$ 가 **Knuth 동치(Knuth equivalent)** 라 하고 $u\equiv v$ 로 쓴다. 기본 변환은 거꾸로도 할 수 있으므로 이것은 동치관계다.

직관 절의 여섯 순서는 $\lbrace 123\rbrace$, $\lbrace 213,231\rbrace$, $\lbrace 132,312\rbrace$, $\lbrace 321\rbrace$ 네 동치류로 나뉜다.

## 읽기 낱말

대각표 $T$ 의 행을 아래 행부터 위 행으로, 각 행은 왼쪽에서 오른쪽으로 읽은 낱말을 $T$ 의 **읽기 낱말(reading word)** $w(T)$ 라 한다. 첫 행 $1,3$, 둘째 행 $2$ 인 대각표의 읽기 낱말은 $213$ 이다.

## Plactic 모노이드

모노이드(monoid)는 결합법칙을 만족하는 곱과 그 곱의 항등원이 있는 집합이다. 글자 $1,\dots,n$ 으로 된 낱말 전체는 이어 붙이기를 곱으로, 빈 낱말을 항등원으로 하는 모노이드다. 기본 Knuth 변환은 이웃한 세 글자만 바꾸므로 $u\equiv u'$, $v\equiv v'$ 이면 $uv\equiv u'v'$ 이고, 곱이 동치류 위에서 정의된다.

이 모노이드를 Knuth 동치로 나눈 몫을 **plactic 모노이드(plactic monoid)** $\mathrm{Pl}\_n$ 이라 한다. Lascoux 와 Schützenberger 가 프랑스어로 monoïde plaxique 라 이름 붙였다[^2].

$\mathrm{Pl}\_3$ 에서 $13$ 과 $2$ 의 곱은 $132$ 의 동치류이고, $2$ 와 $13$ 의 곱은 $213$ 의 동치류다. 두 동치류가 다르므로 $\mathrm{Pl}\_3$ 의 곱은 가환이 아니다.

# 성질

## Knuth 정리

두 낱말 $u,v$ 에 대해 $u\equiv v$ 는 $P(u)=P(v)$ 와 동치다. 여기서 $P(w)$ 는 $w$ 의 글자를 차례로 행 삽입한 대각표다. 이것이 Knuth 정리(Knuth's theorem)다[^1].

증명의 요지. 기본 Knuth 변환 하나가 삽입 대각표를 바꾸지 않는다는 것은 세 글자가 첫 행에서 밀어내는 수를 경우로 나눠 확인한다. 반대 방향에는 대각표 $T$ 와 글자 $x$ 에 대한 다음 식을 쓴다.

$$
w(T)\thinspace x\equiv w(T\leftarrow x)
$$

행 삽입에서 한 행의 수를 밀어내는 한 단계가 기본 Knuth 변환 몇 번으로 적히므로 이 식이 성립한다. 첫 행이 $1,3$ 뿐인 대각표에 $2$ 를 넣으면 첫 행 $1,2$, 둘째 행 $3$ 이 되고, 위 식은 둘째 꼴 변환 $132\equiv 312$ 다.

이 식을 글자마다 쓰면 $w\equiv w(P(w))$ 다. 그래서 $P(u)=P(v)$ 이면 $u\equiv w(P(u))=w(P(v))\equiv v$ 다.

## 동치류와 대각표

각 동치류에는 대각표의 읽기 낱말이 정확히 하나 들어 있다. 대각표 $T$ 는 $P(w(T))=T$ 를 만족하고, Knuth 정리에서 동치류는 $P$ 로 정해지므로 그렇다. 그래서 $\mathrm{Pl}\_n$ 의 원소는 글자 $1,\dots,n$ 으로 채운 대각표와 일대일로 대응하고, 두 대각표 $T,U$ 의 곱은 $T$ 에 $w(U)$ 의 글자를 차례로 행 삽입한 대각표다.

모양이 $\lambda$ 인 대각표 $T$ 의 동치류에 든 낱말의 수는 모양 $\lambda$ 의 표준 Young 대각표의 수 $f^\lambda$ 다. RSK 는 낱말을 삽입 대각표와 기록 대각표의 쌍으로 보내는 전단사이고, 삽입 대각표를 $T$ 로 고정하면 기록 대각표만 남는다. 직관 절에서 모양 $(2,1)$ 인 두 동치류는 크기가 $f^{(2,1)}=2$ 다.

## Greene 정리

$P(w)$ 의 모양을 $\lambda$ 라 하면, $\lambda_1+\cdots+\lambda_k$ 는 $w$ 에서 서로 겹치지 않는 약증가 부분수열 $k$ 개의 길이 합의 최댓값이다. 이것이 Greene 정리(Greene's theorem)다[^3].

증명의 요지. 이 최댓값은 기본 Knuth 변환에서 변하지 않는다. 대각표의 읽기 낱말에서는 위의 $k$ 개 행이 그 최댓값을 준다.

$w=213$ 이면 가장 긴 증가 부분수열 $13$ 의 길이가 $2$ 이고, $2$ 와 $13$ 두 개로 세 글자를 모두 덮으므로 모양은 $(2,1)$ 이다. $k=1$ 인 경우가 [최장 증가 부분수열](longest-increasing-subsequence.md)의 길이가 첫 행의 길이라는 Schensted 정리(Schensted's theorem)다.

## Jeu de taquin 과의 관계

[Jeu de taquin](jeu-de-taquin.md)의 안쪽 미끄러짐 한 번은 기울어진 대각표의 읽기 낱말을 Knuth 동치인 낱말로 바꾼다. 그래서 정렬한 대각표는 처음 읽기 낱말의 삽입 대각표이고, 미는 순서와 무관하다.

Jeu de taquin 문서의 직관 절에서 처음 대각표의 읽기 낱말은 $132$ 이고, 정렬한 대각표의 읽기 낱말은 $312$ 다. 두 낱말은 둘째 꼴 변환으로 이어진다.

## Littlewood–Richardson 계수

$\mathrm{Pl}\_n$ 의 원소를 정수 계수로 더한 것들의 환에서, 모양이 $\lambda$ 이고 글자가 $1,\dots,n$ 인 대각표 전체의 합을 $S_\lambda$ 로 쓴다. 다음이 성립한다[^4].

$$
S_\mu S_\nu=\sum_\lambda c^\lambda_{\mu\nu}\thinspace S_\lambda
$$

여기서 $c^\lambda_{\mu\nu}$ 는 [Littlewood–Richardson 규칙](littlewood-richardson.md)의 계수다. 대각표마다 글자 $i$ 를 변수 $x_i$ 로 바꾼 단항식을 대응시키면 $S_\lambda$ 는 [Schur 다항식](schur-polynomials.md) $s_\lambda(x_1,\dots,x_n)$ 이 되고, 이 식은 Schur 다항식의 곱의 전개가 된다.

$n=2$ 이면 $S_{(1)}$ 은 낱말 $1$ 과 $2$ 의 동치류의 합이다. $S_{(1)}^2$ 은 $11$, $12$, $21$, $22$ 의 동치류의 합이고, $11$, $12$, $22$ 는 모양 $(2)$ 인 대각표 셋의 읽기 낱말, $21$ 은 첫 행 $1$, 둘째 행 $2$ 인 대각표의 읽기 낱말이다. 그래서 $S_{(1)}^2=S_{(2)}+S_{(1,1)}$ 이고, 변수로 바꾸면 $s_{(1)}^2=s_{(2)}+s_{(1,1)}$ 이다.

# 활용

- Jeu de taquin 의 순서 무관성. 정렬의 결과가 미는 순서와 무관하다는 정리를 미끄러짐이 Knuth 동치를 지킨다는 사실로 증명한다.
- Littlewood–Richardson 규칙의 증명. Lascoux 와 Schützenberger 는 plactic 모노이드의 환에서 $S_\mu S_\nu$ 를 전개해 계수를 대각표의 개수로 세었다[^2].
- 결정 기저(crystal basis). 일반선형 [Lie 대수](lie-algebras.md) $\mathfrak{gl}\_n$ 의 표준표현을 여러 번 [텐서곱](tensor-products.md)한 표현의 결정 그래프는 낱말 전체를 정점으로 둔다. 두 낱말이 Knuth 동치인 것은 두 낱말이 서로 동형인 연결 성분의 같은 자리에 놓이는 것과 동치다[^5].

[^1]: D. E. Knuth, Permutations, matrices, and generalized Young tableaux, *Pacific J. Math.* **34** (1970), 709–727.
[^2]: A. Lascoux, M.-P. Schützenberger, Le monoïde plaxique, in *Noncommutative structures in algebra and geometric combinatorics* (Naples, 1978), Quad. Ricerca Sci. 109, CNR, Rome (1981), 129–156.
[^3]: C. Greene, An extension of Schensted's theorem, *Adv. Math.* **14** (1974), 254–265.
[^4]: W. Fulton, *Young Tableaux*, Cambridge University Press (1997), 2 장과 5 장.
[^5]: D. Bump, A. Schilling, *Crystal Bases: Representations and Combinatorics*, World Scientific (2017), 8 장.

# 연관 문서

## 선수지식

- [Jeu de taquin](jeu-de-taquin.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #algebra #algorithms
