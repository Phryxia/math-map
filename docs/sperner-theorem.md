# Sperner 정리

# 개요

**Sperner 정리(Sperner's theorem)** 는 $n$ 개 원소 집합의 부분집합 가운데 서로 포함관계가 없는 것을 최대 몇 개 고를 수 있는지 정하는 정리다. $\lbrace 1,2,3\rbrace$ 에서는 크기 $1$ 인 것 셋이나 크기 $2$ 인 것 셋을 고를 수 있지만, $\lbrace 1\rbrace$ 과 $\lbrace 2,3\rbrace$ 처럼 크기를 섞으면 더 넣을 것이 없어 둘에서 멈춘다. 이 정리는 공집합에서 한 원소씩 늘려 전체에 이르는 열을 세어, 중간 크기의 부분집합 전체 $\binom{n}{\lfloor n/2\rfloor}$ 개가 최대임을 보인다.

# 직관

$\lbrace 1,2,3\rbrace$ 의 부분집합을 고르되 고른 것끼리 포함관계가 없게 할 때 최대 몇 개인지 묻는다. 크기가 $1$ 인 것 셋을 고르면 서로 포함하지 않으므로 세 개가 되고, 크기 $2$ 인 것 셋도 마찬가지다. 크기를 섞으면 오히려 줄어드는데, $\lbrace 1\rbrace$ 과 $\lbrace 2,3\rbrace$ 을 골랐으면 남은 부분집합은 모두 둘 중 하나를 포함하거나 둘 중 하나에 포함되므로 더 넣을 수 없다. 포함관계가 없는 족을 반사슬이라 하고, 공집합에서 시작해 한 원소씩 늘려 전체에 이르는 열을 사슬이라 한다.

$n=3$ 이면 사슬은 $3! = 6$ 개이고, 반사슬의 원소는 한 사슬에서 많아야 하나 나온다. 크기 $k$ 인 부분집합 하나를 지나는 사슬은 $k!(3-k)!$ 개여서 $k=1$ 이면 $2$ 개, $k=2$ 이면 $2$ 개, $k=0$ 이면 $6$ 개다. 반사슬의 원소마다 지나는 사슬을 모으면 서로 겹치지 않으므로 그 합이 $6$ 을 넘지 못하고, 크기 $1$ 짜리만 고르면 $2+2+2=6$ 으로 꽉 차며 공집합을 고르면 혼자서 $6$ 을 다 쓴다. 사슬을 세는 이 계산이 $n$ 에서도 그대로 돌아가고, 중간 크기의 부분집합이 지나는 사슬이 가장 적으므로 그것만 고를 때 개수가 최대가 된다.

# 정의

## 반사슬과 부분집합 격자

$\lbrack n\rbrack = \lbrace 1,\dots,n\rbrace$ 의 부분집합 전체를 포함관계로 순서 지은 [부분순서](partial-orders.md)를 **부분집합 격자(subset lattice)** 라 한다. 부분집합 격자는 [순서론의 격자](order-lattices.md)이고, 두 부분집합의 이음과 만남은 합집합과 교집합이다.

부분집합족 $\mathcal A$ 가 **반사슬(antichain)** 이라는 것은 서로 다른 $A, B \in \mathcal A$ 에 대해 항상 $A \not\subseteq B$ 라는 뜻이다. 공집합에서 전체까지 한 원소씩 늘려 가는 길이 $n+1$ 의 열을 **최대 사슬(maximal chain)** 이라 하고, 최대 사슬은 $\lbrack n\rbrack$ 의 순열과 하나씩 대응하므로 $n!$ 개다. $n=3$ 에서 $\lbrace\lbrace 1\rbrace,\lbrace 2,3\rbrace\rbrace$ 은 반사슬이고, 순열 $2,1,3$ 에 대응하는 최대 사슬은 $\varnothing\subset\lbrace 2\rbrace\subset\lbrace 1,2\rbrace\subset\lbrace 1,2,3\rbrace$ 이다.

## LYM 부등식

부분집합족 $\mathcal A$ 에 대한 다음 부등식을 **LYM 부등식(Lubell–Yamamoto–Meshalkin inequality)** 이라 한다.

$$
\sum_{A \in \mathcal A} \frac{1}{\binom{n}{\vert A\vert}} \thinspace\le\thinspace 1
$$

반사슬 $\lbrace\lbrace 1\rbrace,\lbrace 2,3\rbrace\rbrace$ 에서 좌변은 $1/3+1/3=2/3$ 이고, 크기 $1$ 인 부분집합 셋을 고르면 $1/3+1/3+1/3=1$ 이다.

# 성질

## LYM 부등식과 Sperner 정리

$\mathcal A$ 가 $\lbrack n\rbrack$ 의 반사슬이면 LYM 부등식이 성립한다.[^1]

최대 사슬 하나는 각 크기의 부분집합을 정확히 하나씩 지나므로, 반사슬의 원소를 많아야 하나 지난다. 크기가 $k$ 인 부분집합 $A$ 를 지나는 최대 사슬은 $A$ 안을 세우는 $k!$ 가지와 밖을 세우는 $(n-k)!$ 가지의 곱으로 $k!(n-k)!$ 개다. 각 $A \in \mathcal A$ 가 차지하는 사슬들이 서로 겹치지 않으므로 다음이 성립한다.

$$
\sum_{A \in \mathcal A} \vert A\vert!\thinspace(n-\vert A\vert)! \thinspace\le\thinspace n!
$$

양변을 $n!$ 으로 나누면 LYM 부등식이다.

E. Sperner 가 1928 년에 증명한 Sperner 정리는 다음이다. $\lbrack n\rbrack$ 의 반사슬의 크기는 $\binom{n}{\lfloor n/2\rfloor}$ 을 넘지 않는다.

이항계수는 $k = \lfloor n/2\rfloor$ 에서 최대이므로 LYM 부등식의 각 항이 $1/\binom{n}{\lfloor n/2\rfloor}$ 이상이다. 항의 개수가 $\vert\mathcal A\vert$ 이므로 $\vert\mathcal A\vert / \binom{n}{\lfloor n/2\rfloor} \le 1$ 이 나온다.

## 대칭 사슬 분해

부분집합 격자는 크기 $k$ 에서 시작해 크기 $n-k$ 에서 끝나는 사슬들로 쪼개진다. 이런 분해를 **대칭 사슬 분해(symmetric chain decomposition)** 라 하고, 괄호 짝 맞추기로 구성한다. 부분집합을 $0$ 과 $1$ 의 열로 보고 $1$ 을 여는 괄호, $0$ 을 닫는 괄호로 읽어 짝지은 뒤, 짝이 없는 자리만 바꾸어 사슬을 만든다.

분해에 쓰인 사슬의 개수는 가장 큰 계층의 크기 $\binom{n}{\lfloor n/2\rfloor}$ 과 같다. 반사슬은 각 사슬에서 원소를 많아야 하나 가지므로 Sperner 정리가 다시 나온다. 이 논법은 [Dilworth 정리](dilworth-theorem.md)를 부분집합 격자에 적용한 것과 같은 결론을 주면서 사슬 덮개를 명시적으로 준다.

## 등호 조건

$n$ 이 짝수이면 크기 $n/2$ 인 부분집합 전체가 유일한 최대 반사슬이다. $n$ 이 홀수이면 크기 $(n-1)/2$ 인 것 전체와 크기 $(n+1)/2$ 인 것 전체가 각각 최대이고, 둘을 섞은 족은 포함관계가 생기므로 반사슬이 아니다.

등호 조건은 LYM 부등식의 등호가 각 계층을 통째로 쓸 때만 성립한다는 데서 나온다. 반사슬이 어떤 계층의 일부만 쓰면 그 계층의 쓰이지 않은 부분집합을 지나는 사슬이 남으므로 부등식이 엄격해진다.

# 활용

- [Erdős–Ko–Rado 정리](erdos-ko-rado.md)가 같은 계산 구조를 갖는다. 크기 $k$ 인 부분집합 가운데 서로 교집합이 비지 않는 것을 고르면 $n \ge 2k$ 일 때 최대 개수가 $\binom{n-1}{k-1}$ 이고, 원형 배열 위의 사슬을 세는 논법으로 증명된다.
- [Littlewood–Offord 문제](littlewood-offord.md)의 해가 Sperner 정리다. $1$ 이상인 [실수](real-numbers.md) $a_1,\dots,a_n$ 에 대해 합 $\sum_{i \in S} a_i$ 가 길이 $1$ 미만인 구간에 들어가는 $S$ 의 개수는 $\binom{n}{\lfloor n/2\rfloor}$ 을 넘지 않는다. $S\subsetneq S'$ 이면 두 합의 차가 $1$ 이상이므로 그런 $S$ 들은 반사슬이다. 부호가 섞인 $a_i$ 는 부호를 바꾸어 이 경우로 옮긴다.
- 단조 부울 함수의 개수를 세는 Dedekind 문제(Dedekind's problem)에서 반사슬이 셈의 대상이다. 단조 함수가 그 함수를 $1$ 로 만드는 극소 집합들의 반사슬로 정해진다.

[^1]: D. Lubell, "A short proof of Sperner's lemma", *Journal of Combinatorial Theory* 1 (1966), 299. 최대 사슬을 세어 Sperner 정리를 얻는 증명이다.

# 연관 문서

## 선수지식

- [Dilworth 정리](dilworth-theorem.md)

## 더 알아보기

- [Erdős–Ko–Rado 정리](erdos-ko-rado.md)
- [Littlewood–Offord 문제](littlewood-offord.md)

#combinatorics #order_theory
