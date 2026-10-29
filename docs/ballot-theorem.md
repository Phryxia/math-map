# 투표 정리

# 개요

**투표 정리(ballot theorem)** 는 후보 A 가 $a$ 표, 후보 B 가 $b$ 표를 얻고 $a\gt b$ 일 때, 표를 무작위 순서로 하나씩 열면 개표 내내 A 가 앞서 있을 확률이 $(a-b)/(a+b)$ 라는 정리다. A 가 $3$ 표, B 가 $2$ 표이면 개표 순서 $10$ 가지 가운데 A 가 줄곧 앞서는 것은 AAABB 와 AABAB 둘뿐이고, $(3-2)/5\cdot 10=2$ 와 맞는다. 줄곧 앞서지 못한 순서를 처음 동점이 된 지점까지 뒤집어 다른 순서와 짝지으면 나쁜 순서의 수가 한 번에 세어진다.

# 직관

A 가 $3$ 표, B 가 $2$ 표인 개표에서 첫 표가 B 이면 A 는 처음부터 뒤진다. 첫 표가 A 인데 나중에 동점이 되는 순서도 있다. AABBA 는 넷째 표에서 $2:2$ 가 되고, ABABA 는 둘째 표에서 $1:1$ 이 된다.

첫 표가 A 이고 동점을 지나는 순서에서, 처음 동점이 되기까지의 표를 모두 A 와 B 를 바꾼다. AABBA 는 넷째 표까지 바꿔 BBAAA 가 되고, ABABA 는 둘째 표까지 바꿔 BAABA 가 된다. 바꾼 결과는 첫 표가 B 인 순서이고, 거꾸로 첫 표가 B 인 순서는 반드시 어디선가 동점을 지나므로 같은 방법으로 되돌릴 수 있다. 그래서 "첫 표가 A 이고 동점을 지나는 순서" 와 "첫 표가 B 인 순서" 는 개수가 같다. 첫 표가 B 인 순서는 $\binom 41=4$ 가지이고 첫 표가 A 인 순서는 $\binom 42=6$ 가지이므로, 줄곧 앞서는 순서는 $6-4=2$ 가지다.

# 정의

$a\gt b\ge 0$ 이라 하자. A 표 $a$ 개와 B 표 $b$ 개를 일렬로 늘어놓은 $\binom{a+b}{a}$ 가지 순서가 같은 확률로 나온다고 한다. 앞에서부터 $k$ 번째 표까지 A 표의 수를 $\alpha_k$, B 표의 수를 $\beta_k$ 라 할 때, **투표 정리** 는 다음 진술이다.

$$
\Pr\lbrack\alpha_k\gt\beta_k\ (k=1,\dots,a+b)\rbrack=\frac{a-b}{a+b}
$$

J. Bertrand 가 1887 년에 진술했고, 같은 해 D. André 가 위 뒤집기 논법으로 증명했다.[^1]

# 성질

## 반사 논법

줄곧 앞서는 순서의 수는 다음과 같다.

$$
\binom{a+b-1}{a-1}-\binom{a+b-1}{a}=\frac{a-b}{a+b}\binom{a+b}{a}
$$

첫째 항은 첫 표가 A 인 순서의 수이고, 둘째 항은 첫 표가 B 인 순서의 수다. 직관 절의 뒤집기가 "첫 표가 A 이고 동점을 지나는 순서" 와 "첫 표가 B 인 순서" 사이의 일대일 대응이다. 표 하나를 한 칸 위나 아래로 가는 걸음으로 보면, 이 뒤집기는 경로의 처음 부분을 높이 $0$ 의 수평선에 대해 뒤집는 것이다. 이 논법을 반사 원리(reflection principle)라 한다.

## 비기지 않는 경우

A 가 B 에 뒤지지 않기만 하면 되는 경우, 곧 모든 $k$ 에서 $\alpha_k\ge\beta_k$ 일 확률은 $a\ge b$ 에서 $(a+1-b)/(a+1)$ 이다. A 표 하나를 맨 앞에 붙이면 "뒤지지 않음" 이 "줄곧 앞섬" 으로 바뀌므로 위 정리를 $a+1$ 과 $b$ 에 적용한 것이다. $a=b=n$ 이면 확률이 $1/(n+1)$ 이고, 그런 순서의 수가 [Catalan 수](catalan-numbers.md) $\frac{1}{n+1}\binom{2n}{n}$ 이다.

## 무작위 걷기의 표현

$\pm 1$ 걸음의 단순 [무작위 걷기](random-walks.md) $S_n$ 에서 $S_n=k\gt 0$ 이라는 조건 아래 $S_1,\dots,S_n$ 이 모두 양수일 확률은 $k/n$ 이다. 투표 정리를 $a-b=k$, $a+b=n$ 으로 쓴 것이다. 시간을 거꾸로 읽으면 다음 도달 시간 정리(hitting time theorem)가 나온다. 높이 $-k$ 에 처음 닿는 시각을 $\tau_{-k}$ 라 하면 다음이 성립한다.

$$
\Pr\lbrack\tau_{-k}=n\rbrack=\frac kn\Pr\lbrack S_n=-k\rbrack
$$

# 활용

- Takács 는 걸음이 음이 아닌 정수인 교환가능 수열로 투표 정리를 넓혔고, 이것으로 대기열에서 서버가 쉬지 않고 일하는 구간의 길이 분포를 계산했다.[^2]
- [분지과정](branching-processes.md)의 Galton–Watson 나무에서 전체 개체 수 분포는 도달 시간 정리로 계산된다. 자손 수를 걸음으로 하는 걷기가 처음 $-1$ 에 닿는 시각이 전체 개체 수다.
- [유한 확률 공간](probability.md)에서 대칭 무작위 걷기가 $2n$ 걸음 동안 $0$ 으로 돌아오지 않을 확률이 $\binom{2n}{n}2^{-2n}$ 이라는 계산이 반사 논법에서 나온다.

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. I, 3rd ed., Wiley (1968), Ch. III. 투표 정리, 반사 원리, 대칭 무작위 걷기의 귀환 확률. Bertrand 와 André 의 원 논문은 *Comptes Rendus de l'Académie des Sciences* **105** (1887), 369 과 436–437.
[^2]: L. Takács, *Combinatorial Methods in the Theory of Stochastic Processes*, Wiley (1967).

# 연관 문서

## 선수지식

- [유한 확률 공간](probability.md)
- [Catalan 수](catalan-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics
