# Arrow 불가능성 정리

# 개요

**Arrow 불가능성 정리(Arrow's impossibility theorem)** 는 후보가 셋 이상일 때, 유권자들의 선호 순위를 모아 사회의 순위 하나를 만드는 규칙이 몇 가지 공정성 조건을 함께 만족하면 그 규칙은 한 사람의 순위를 그대로 따르는 독재뿐이라는 정리다. 세 유권자가 후보 a, b, c 를 각각 a, b, c 순, b, c, a 순, c, a, b 순으로 좋아하면, 두 후보씩 다수결로 정한 사회의 선호는 a 가 b 보다, b 가 c 보다, c 가 a 보다 앞서는 순환이 되어 순위가 되지 않는다. 다수결 대신 어떤 규칙을 쓰더라도 이런 실패를 모두 피하는 길은 독재뿐임을, 순위를 [부분순서](partial-orders.md)의 한 종류로 보고 조건들을 순서의 성질로 적어 증명한다.

# 직관

세 유권자의 순위가 개요와 같을 때 두 후보씩 다수결을 하면 a 와 b 의 대결에서 첫째와 셋째 유권자가 a 를 고르고, b 와 c 의 대결에서 첫째와 둘째가 b 를, c 와 a 의 대결에서 둘째와 셋째가 c 를 고른다. 사회의 선호가 a, b, c 를 한 줄로 세우지 못한다. 이 순환을 Condorcet 역설(Condorcet paradox)이라 한다.

점수로 순위를 정하면 순환은 사라진다. 각 유권자가 1 위에 $2$ 점, 2 위에 $1$ 점, 3 위에 $0$ 점을 주는 Borda 규칙(Borda count)을 두 유권자에게 쓴다.

첫째가 a, b, c 순이고 둘째가 b, a, c 순이면 a 와 b 가 $3$ 점씩으로 비긴다. 둘째의 순위만 b, a, c 에서 b, c, a 로 바꾸면 각 유권자가 a 와 b 중 누구를 앞에 두는지는 그대로인데, a 는 $2$ 점, b 는 $3$ 점이 되어 b 가 앞선다. a 와 b 의 사회적 순서가 c 의 위치에 따라 달라졌다.

다수결은 순위를 만들지 못하고, Borda 규칙은 두 후보의 순서를 정할 때 상관없는 제삼의 후보를 본다. Arrow 정리는 이 두 실패를 함께 피하는 규칙이 독재뿐이라는 것이다.

# 정의

## 선호와 사회후생함수

후보의 유한집합 $A$ 위의 **약순서(weak order)** 는 추이적이고 모든 두 원소가 비교되는 관계 $\succeq$ 다. 비김 $a\sim b$ 를 허용한다. 비김이 없는 약순서는 전순서다. 유권자 $1,\dots,n$ 이 각각 $A$ 위의 전순서 $\succ_i$ 를 갖는 것을 **선호 프로필(preference profile)** 이라 한다.

선호 프로필마다 $A$ 위의 약순서 $\succeq$ 하나를 주는 함수 $F$ 를 **사회후생함수(social welfare function)** 라 한다. 직관 절의 Borda 규칙은 점수의 크기로 약순서를 주는 사회후생함수다. 두 후보씩 다수결은 순환을 내는 프로필이 있어 사회후생함수가 아니다.

## 세 조건

- **Pareto 조건(Pareto condition).** 모든 유권자가 $a\succ_i b$ 이면 $a\succ b$ 다.
- **무관한 대안으로부터의 독립성(independence of irrelevant alternatives).** 두 프로필에서 모든 유권자의 $a$ 와 $b$ 사이 순서가 같으면, 두 프로필의 사회적 순서도 $a$ 와 $b$ 사이에서 같다.
- **독재자(dictator).** 어떤 유권자 $d$ 가 있어 모든 프로필과 모든 $a,b$ 에서 $a\succ_d b$ 이면 $a\succ b$ 일 때 $d$ 를 독재자라 한다.

직관 절의 Borda 규칙은 Pareto 조건을 만족하지만 독립성을 어긴다.

# 성질

## Arrow 정리

$\lvert A\rvert\ge 3$ 이고 사회후생함수 $F$ 가 Pareto 조건과 독립성을 만족하면 $F$ 에는 독재자가 있다.[^1]

$\lvert A\rvert=2$ 이면 다수결이 세 조건을 모두 만족하고 독재자가 없으므로, 후보 수의 조건은 빠질 수 없다.

## 증명의 요지

아래는 J. Geanakoplos 의 증명이다.[^2]

1. 극단 보조정리. 모든 유권자가 후보 $b$ 를 맨 위나 맨 아래에 두면 사회도 $b$ 를 맨 위나 맨 아래에 둔다. 그렇지 않아 $a\succeq b\succeq c$ 인 $a,c$ 가 있으면, 각 유권자의 순위에서 $c$ 를 $a$ 바로 위로 옮긴다. $b$ 가 끝에 있으므로 각 유권자의 $a$-$b$, $b$-$c$ 순서는 바뀌지 않아 독립성으로 $a\succeq b\succeq c$ 가 남고, 추이성으로 $a\succeq c$ 다. 그런데 모두가 $c\succ_i a$ 이므로 Pareto 조건으로 $c\succ a$ 이고 모순이다.
2. 중추 유권자. 모두가 $b$ 를 맨 아래에 둔 프로필에서 시작해 유권자 $1,2,\dots$ 순으로 한 명씩 $b$ 를 맨 위로 올린다. 처음에는 Pareto 조건으로 $b$ 가 사회의 맨 아래이고 끝에는 맨 위다. 극단 보조정리로 $b$ 는 중간에 머물지 않으므로, 어떤 유권자 $d$ 가 $b$ 를 올리는 순간 사회의 $b$ 가 맨 아래에서 맨 위로 뛴다.
3. $b$ 가 아닌 두 후보 $a,c$ 에 대해 $d$ 가 독재자다. $d$ 가 $a\succ_d c$ 인 프로필을 받으면, $d$ 가 $a\succ_d b\succ_d c$ 이고 $d$ 앞의 유권자는 $b$ 를 맨 위, 뒤의 유권자는 맨 아래에 둔 프로필과 $a$-$b$, $b$-$c$ 순서를 견준다. 2 단계의 두 프로필과 독립성으로 $a\succ b$ 와 $b\succ c$ 가 나오고 추이성으로 $a\succ c$ 다. 다시 독립성으로 원래 프로필에서도 $a\succ c$ 다.
4. $b$ 가 끼인 쌍. $b$ 대신 셋째 후보 $c$ 로 1~3 단계를 하면 $c$ 가 아닌 쌍의 독재자 $d'$ 이 나온다. $d'$ 은 $a$-$b$ 를 정하는데, 2 단계에서 $d$ 혼자 $b$ 와 $a$ 의 사회적 순서를 바꾸었으므로 $d'=d$ 다.

## 조건을 약하게 하면

- 후보가 한 줄 위에 놓이고 각 유권자가 자기 이상점에서 멀어질수록 덜 좋아하는 단봉 선호(single-peaked preferences)로 프로필을 제한하면, 두 후보씩 다수결이 순환하지 않고 중앙값 유권자의 이상점이 이긴다. 이것을 Black 의 중위 투표자 정리(median voter theorem)라 한다.
- 유권자가 무한히 많으면 독재자 대신 유권자 집합 위의 주가 아닌 초필터(nonprincipal ultrafilter)로 결정 집단을 정하는, 독재자가 없는 규칙이 있다.[^3] 유한 유권자에서는 모든 초필터가 주 초필터라서 결정 집단이 한 사람으로 줄어들고, 이것이 Arrow 정리를 다시 증명한다.

## Gibbard–Satterthwaite 정리

후보가 셋 이상이고 모든 후보가 당선될 수 있는 투표 규칙이 독재가 아니면, 어떤 유권자는 어떤 프로필에서 자기 선호를 거짓으로 밝혀 더 나은 결과를 얻을 수 있다. 이것을 Gibbard–Satterthwaite 정리(Gibbard–Satterthwaite theorem)라 한다. 증명하는 한 방법은 Arrow 정리로 환원하는 것이다.

# 활용

- 투표 제도의 비교. 다수결, Borda 규칙, 결선 투표, 승인 투표는 모두 Arrow 정리의 세 조건 가운데 하나 이상을 어긴다. 제도를 고를 때 어느 조건을 포기하는지를 비교한다.
- 순위 집계. 여러 심사위원이나 검색 엔진의 순위를 하나로 합칠 때도 같은 정리가 적용된다. 순위 사이 거리의 합을 최소화하는 Kemeny 순위(Kemeny ranking)는 독립성을 포기하고 Pareto 조건을 지킨다.
- 쌍대 비교와 순환. 쌍대 비교의 승패가 순환하는 [비추이적 주사위](nontransitive-dice.md)와 Condorcet 역설은 같은 꼴의 계산이다.
- 정량적 판본. G. Kalai 는 [부울 함수의 Fourier 해석](boolean-fourier.md)으로, 세 후보 선거에서 두 후보씩 같은 부울 함수로 집계하는 규칙이 순환을 낼 확률이 작으면 그 규칙이 독재에 가깝다는 정량적 판본을 얻었다.

[^1]: K. J. Arrow, *Social Choice and Individual Values*, Wiley (1951).
[^2]: J. Geanakoplos, "Three brief proofs of Arrow's impossibility theorem", Economic Theory 26 (2005).
[^3]: P. C. Fishburn, "Arrow's impossibility theorem: concise proof and infinite voters", Journal of Economic Theory 2 (1970). A. P. Kirman, D. Sondermann, "Arrow's theorem, many agents, and invisible dictators", Journal of Economic Theory 5 (1972).

# 연관 문서

## 선수지식

- [부분순서](partial-orders.md)

## 더 알아보기

아직 연결한 문서가 없다.

#order_theory #combinatorics
