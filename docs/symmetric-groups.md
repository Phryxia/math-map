# 대칭군

# 개요

**대칭군(symmetric group)** 은 $n$ 개의 물건의 자리를 바꾸는 방법 전체를, 두 방법을 차례로 하는 것을 곱으로 삼아 묶은 군이다. 15 퍼즐은 빈칸 옆의 조각을 빈칸으로 미는 놀이인데, 정돈된 판에서 $14$ 와 $15$ 만 맞바꾼 배치는 아무리 밀어도 정돈된 판으로 돌아오지 않는다. 자리 바꿈 하나를 두 개씩 맞바꾸기의 연속으로 쪼개고 그 횟수의 짝홀을 보면, 미는 동작으로는 맞바꾸기 횟수의 짝홀이 맞지 않아 그 배치에 닿을 수 없다는 것이 증명된다.

# 직관

카드 세 장 $1,2,3$ 을 섞는 방법은 $3!=6$ 가지다. 첫째 자리의 카드를 둘째 자리로, 둘째를 셋째로, 셋째를 첫째로 옮기는 섞기를 $1\to 2\to 3\to 1$ 로 적고, 첫째와 둘째만 맞바꾸는 섞기를 $1\leftrightarrow 2$ 로 적는다. 앞의 섞기를 하고 이어서 다시 하면 $1\to 3\to 2\to 1$ 이 되고, 세 번 하면 처음 순서로 돌아온다. 섞기를 두 번 이어 한 것이 다시 섞기 하나이므로 여섯 섞기는 이어 하기에 대해 닫혀 있다.

$1\to 2\to 3\to 1$ 은 $1\leftrightarrow 2$ 를 한 뒤 $1\leftrightarrow 3$ 을 한 것과 같다. 맞바꾸기 둘로 쪼개진다. 같은 섞기를 다른 맞바꾸기들로 쪼갤 수도 있지만, 맞바꾸기 횟수가 짝수인지 홀수인지는 쪼개는 방법과 상관없이 정해진다. 15 퍼즐에서 조각을 한 번 미는 것은 빈칸과 조각의 맞바꾸기 하나이고, 빈칸이 오른쪽 아래 구석으로 돌아오려면 민 횟수가 짝수여야 한다. $14$ 와 $15$ 만 맞바꾼 배치는 맞바꾸기 하나, 곧 홀수 번이므로 닿을 수 없다.

# 정의

## 순열과 대칭군

집합 $X$ 에서 자기 자신으로 가는 전단사 [함수](functions.md)를 $X$ 의 **순열(permutation)** 이라 한다. $X$ 의 순열 전체는 합성 $\sigma\tau=\sigma\circ\tau$ 를 곱으로 하여 [군](groups.md)이 되고, 이것을 $X$ 의 대칭군 $\mathrm{Sym}(X)$ 라 한다. $\sigma\tau$ 는 $\tau$ 를 먼저 하고 $\sigma$ 를 나중에 하는 순열이다. $X=\lbrace 1,\dots,n\rbrace$ 이면 $S_n$ 으로 쓰고, 그 위수는 $n!$ 이다.

## 순환 표기

서로 다른 $a_1,\dots,a_k$ 를 $a_1\mapsto a_2\mapsto\cdots\mapsto a_k\mapsto a_1$ 로 보내고 나머지를 고정하는 순열을 길이 $k$ 의 **순환(cycle)** 이라 하고 $(a_1\ a_2\ \cdots\ a_k)$ 로 쓴다. 길이 $2$ 의 순환 $(a\ b)$ 를 **호환(transposition)** 이라 한다. 직관 절의 $1\to 2\to 3\to 1$ 은 $(1\ 2\ 3)$ 이고 $1\leftrightarrow 2$ 는 $(1\ 2)$ 다. 순열을 서로소인 순환들의 곱으로 썼을 때 순환 길이들의 모임을 **순환 꼴(cycle type)** 이라 한다.

## 부호

$\sigma\in S_n$ 의 **부호(sign)** 는 다음 값이다.

$$
\mathrm{sgn}(\sigma)=\prod_{1\le i\lt j\le n}\frac{\sigma(j)-\sigma(i)}{j-i}
$$

분모와 분자는 같은 수들의 곱에서 부호만 다르므로 값은 $1$ 이나 $-1$ 이다. $-1$ 이 되는 것은 $i\lt j$ 이면서 $\sigma(i)\gt\sigma(j)$ 인 쌍의 수가 홀수일 때다. 부호가 $1$ 인 순열을 **짝순열(even permutation)**, $-1$ 인 순열을 **홀순열(odd permutation)** 이라 하고, 짝순열 전체를 **교대군(alternating group)** $A_n$ 이라 한다.

# 성질

## 서로소 순환 분해

**정리.** 모든 순열은 서로소인 순환들의 곱으로 쓰이고, 그 표현은 순환의 순서와 길이 $1$ 인 순환을 빼면 하나뿐이다.

증명의 요지. $i$ 에 $\sigma$ 를 거듭 적용하면 $\lbrace 1,\dots,n\rbrace$ 이 유한하므로 언젠가 $i$ 로 돌아온다. 그렇게 지나간 원소들이 순환 하나를 이루고, 이 순환들이 $\lbrace 1,\dots,n\rbrace$ 을 겹치지 않게 나눈다. 서로소인 순환들은 서로 교환되므로 곱의 순서는 상관없다.

예로 $1\mapsto 3$, $2\mapsto 5$, $3\mapsto 1$, $4\mapsto 4$, $5\mapsto 2$ 인 순열은 $(1\ 3)(2\ 5)$ 이고 순환 꼴은 $2,2,1$ 이다.

## 호환에 의한 생성

**정리.** $S_n$ 의 모든 원소는 호환들의 곱이다.

증명의 요지. 서로소 순환 분해가 있으므로 순환 하나만 보면 되고, 다음 등식이 성립한다. 오른쪽 호환부터 적용해 각 $a_i$ 가 가는 곳을 따라가면 확인된다.

$$
(a_1\ a_2\ \cdots\ a_k)=(a_1\ a_k)(a_1\ a_{k-1})\cdots(a_1\ a_2)
$$

$(a\ b)$ 는 이웃한 호환 $(i\ i{+}1)$ 들의 곱이므로, 이웃한 호환만으로도 $S_n$ 이 생성된다.

## 부호의 곱셈성

**정리.** $\mathrm{sgn}(\sigma\tau)=\mathrm{sgn}(\sigma)\thinspace\mathrm{sgn}(\tau)$ 다. 호환의 부호는 $-1$ 이다.

증명의 요지. 곱의 정의식을 $\tau$ 를 거쳐 둘로 나눈다.

$$
\prod_{i\lt j}\frac{\sigma\tau(j)-\sigma\tau(i)}{j-i}=\prod_{i\lt j}\frac{\sigma(\tau(j))-\sigma(\tau(i))}{\tau(j)-\tau(i)}\cdot\prod_{i\lt j}\frac{\tau(j)-\tau(i)}{j-i}
$$

첫째 인수는 $\lbrace\tau(i),\tau(j)\rbrace$ 가 모든 두 원소 집합을 한 번씩 지나므로 $\mathrm{sgn}(\sigma)$ 다. 호환 $(i\ i{+}1)$ 은 순서가 뒤집힌 쌍이 하나이므로 부호가 $-1$ 이고, 모든 호환은 $(i\ i{+}1)$ 의 켤레이므로 부호가 같다.

따라서 순열을 호환의 곱으로 쓰는 방법은 여럿이어도 호환 개수의 짝홀은 정해져 있다. 길이 $k$ 인 순환의 부호는 $(-1)^{k-1}$ 이다. $\mathrm{sgn}\colon S_n\to\lbrace 1,-1\rbrace$ 이 준동형이므로 $A_n$ 은 그 핵이고, $n\ge 2$ 이면 지표가 $2$ 인 정규부분군이라 $\lvert A_n\rvert=n!/2$ 다.

## 켤레와 순환 꼴

$\tau(a_1\ \cdots\ a_k)\tau^{-1}=(\tau(a_1)\ \cdots\ \tau(a_k))$ 이다. 켤레는 순환 표기의 숫자를 $\tau$ 로 바꿔 쓰는 것이므로, 두 순열이 켤레인 것과 순환 꼴이 같은 것은 동치다. $S_n$ 의 [켤레류](conjugacy-classes.md)는 $n$ 의 [분할](partitions.md)과 일대일로 대응한다.

## Cayley 정리

**정리.** 모든 군 $G$ 는 $\mathrm{Sym}(G)$ 의 부분군과 동형이다. 이것을 **Cayley 정리(Cayley's theorem)** 라 한다.

증명의 요지. $g\in G$ 에 왼쪽 곱 $x\mapsto gx$ 를 대응시키면 이것은 $G$ 의 순열이고, $g\mapsto(x\mapsto gx)$ 는 단사 준동형이다. 위수 $n$ 인 군은 $S_n$ 의 부분군으로 나타난다.[^1]

# 활용

- [행렬식](determinants.md)의 Leibniz 공식은 $S_n$ 전체에 대한 합이고, 각 항에 순열의 부호가 붙는다.
- [켤레류](conjugacy-classes.md)와 [지표표](character-table.md). $S_n$ 의 켤레류가 분할과 대응하므로 기약표현의 개수도 $n$ 의 분할의 개수다. $S_3$ 의 지표표는 세 켤레류 $e$, 호환, 길이 $3$ 순환에 대한 표다.
- [Burnside 보조정리](burnside-lemma.md)와 [Pólya 세기 정리](polya-enumeration.md)는 $S_n$ 의 부분군이 색칠에 작용할 때 순환 꼴로 고정점을 센다.
- [Galois 이론](galois-theory.md). $n$ 차 다항식의 Galois 군은 근 $n$ 개의 순열이므로 $S_n$ 의 부분군이다. $n\ge 5$ 이면 $S_n$ 이 [가해군](solvable-groups.md)이 아니어서 일반 5 차 방정식에 근의 공식이 없다.
- [Schur–Weyl 쌍대성](schur-weyl-duality.md)에서 $S_k$ 는 텐서곱 $V^{\otimes k}$ 의 인수 자리를 바꾸는 작용으로 나타난다.

[^1]: David S. Dummit, Richard M. Foote, *Abstract Algebra*, 3rd ed., §1.3 (대칭군), §3.5 (호환과 교대군), §4.2 (Cayley 정리), §4.3 (대칭군의 켤레와 순환 꼴).

# 연관 문서

## 선수지식

- [군](groups.md)

## 더 알아보기

- [켤레류](conjugacy-classes.md)
- [행렬식](determinants.md)

#group_theory #algebra #combinatorics
