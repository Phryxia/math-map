# 해바라기 보조정리

# 개요

**해바라기 보조정리(sunflower lemma)** 는 원소가 $k$ 개 이하인 집합들의 족이 $k!\thinspace(p-1)^k$ 개보다 많은 집합을 가지면, 그 안에 꽃잎이 $p$ 개인 해바라기가 있다는 정리다. 해바라기는 어느 두 집합의 교집합도 같은 하나의 집합인 집합들이다. P. Erdős 와 R. Rado 가 1960 년에 증명했다[^1].

증명은 [비둘기집 원리](pigeonhole-principle.md)를 집합의 크기에 대해 귀납적으로 쓴다. 회로 복잡도에서 단조 회로의 하한을 증명하는 데 쓰인다.

# 직관

원소가 둘인 집합, 곧 그래프의 간선들이 많이 있다고 둔다. 서로 겹치지 않는 간선을 하나씩 고르다가 더 고를 수 없게 되면 두 경우가 있다. 겹치지 않는 간선을 $p$ 개 골랐으면 그 $p$ 개가 공통 원소 없이 흩어진 꽃잎이다. $p$ 개에 못 미쳤으면, 고른 간선의 끝점은 $2(p-1)$ 개 이하이고 나머지 간선은 모두 이 끝점 가운데 하나를 지난다.

간선이 $2(p-1)^2$ 개보다 많으면 비둘기집 원리로 어떤 끝점 $x$ 가 $p-1$ 개보다 많은 간선, 곧 $p$ 개 이상의 간선에 들어 있다. 이 간선들은 $x$ 에서 뻗은 별이고 어느 두 개도 $\lbrace x\rbrace$ 에서만 만난다. 공통 부분이 $\lbrace x\rbrace$ 인 해바라기다. 원소가 $k$ 개인 집합에서도 같은 계산을 한다. $x$ 를 지나는 집합들에서 $x$ 를 빼면 원소가 $k-1$ 개인 집합들이 남고, 거기서 다시 같은 선택을 한다.

# 정의

집합 $S_1,\dots,S_p$ 가 **해바라기(sunflower)** 라는 것은 집합 $Y$ 가 있어서 $i\ne j$ 이면 $S_i\cap S_j=Y$ 인 것이다. $Y$ 를 **핵(core)**, $S_i\setminus Y$ 를 **꽃잎(petal)** 이라 한다. 꽃잎들은 서로 겹치지 않는다. 핵이 공집합인 해바라기는 서로 겹치지 않는 집합들이다. 이 용어는 Δ-계(Δ-system)라고도 한다.

# 성질

## Erdős–Rado 상한

정리(Erdős–Rado). $\mathcal F$ 가 원소가 $k$ 개 이하인 집합들의 족이고 $\lvert\mathcal F\rvert\gt k!\thinspace(p-1)^k$ 이면 $\mathcal F$ 는 꽃잎이 $p$ 개인 해바라기를 포함한다[^1].

증명의 요지. $k$ 에 대한 귀납법이다. $k=1$ 이면 서로 다른 한 원소 집합이 $p$ 개보다 많고, 그 가운데 $p$ 개가 핵이 공집합인 해바라기다. $k\ge 2$ 이면 $\mathcal F$ 에서 서로 겹치지 않는 집합을 더 고를 수 없을 때까지 고른다. $p$ 개 이상 골랐으면 끝난다. 아니면 고른 집합의 합집합 $U$ 는 원소가 $(p-1)k$ 개 이하이고 $\mathcal F$ 의 모든 집합이 $U$ 와 만난다. 비둘기집 원리로 어떤 $x\in U$ 가 $\lvert\mathcal F\rvert/((p-1)k)\gt(k-1)!\thinspace(p-1)^{k-1}$ 개의 집합에 들어 있다. 그 집합들에서 $x$ 를 뺀 족에 귀납 가정을 적용해 해바라기를 얻고, 각 집합에 $x$ 를 다시 넣으면 핵에 $x$ 가 더해진 해바라기가 된다.

## 하한

원소가 $k$ 개인 집합 $(p-1)^k$ 개로 되어 있고 꽃잎이 $p$ 개인 해바라기가 없는 족이 있다. 서로 겹치지 않고 원소가 $p-1$ 개인 집합 $A_1,\dots,A_k$ 를 두고, 각 $A_i$ 에서 원소를 하나씩 골라 만든 $k$ 원소 집합을 모두 모은 족이다.

이 족의 서로 다른 집합 $p$ 개가 핵 $Y$ 의 해바라기라고 둔다. 각 $A_i$ 에서 $p$ 개의 집합이 고른 원소는 $p-1$ 가지뿐이므로, 비둘기집 원리로 두 집합이 같은 원소 $a$ 를 고른다. 두 집합의 교집합이 $Y$ 이므로 $a\in Y$ 이고, $Y$ 는 모든 집합에 들어 있으므로 $p$ 개 모두가 $A_i$ 에서 $a$ 를 고른다. 모든 $i$ 에서 이렇게 되면 $p$ 개의 집합이 같아져 모순이다. 따라서 Erdős–Rado 상한은 $k!$ 배 안에서 정확하다.

## Erdős–Rado 해바라기 추측

Erdős–Rado 해바라기 추측(sunflower conjecture)은 $p$ 에만 의존하는 상수 $C_p$ 가 있어서, 원소가 $k$ 개 이하인 집합이 $C_p^k$ 개보다 많은 족은 꽃잎 $p$ 개의 해바라기를 포함한다는 진술이다[^1].

R. Alweiss, S. Lovett, K. Wu, J. Zhang 은 2019 년에 상한을 $(Cp^3\log k\log\log k)^k$ 로 줄였다[^2]. Erdős–Rado 상한의 $k!$ 은 $k^k$ 정도이므로 밑의 $k$ 가 $\log k\log\log k$ 로 바뀐 것이다.

# 활용

- 단조 회로의 하한. A. A. Razborov 는 그래프에 서로 모두 이웃한 꼭짓점 $k$ 개가 있는지 판정하는 단조 회로, 곧 NOT 게이트가 없는 [불 회로](boolean-circuits.md)의 크기가 초다항이어야 함을 증명했다. 게이트가 계산하는 함수를 작은 집합족의 합집합으로 근사하고, 족이 커지면 해바라기를 찾아 꽃잎을 버리고 핵으로 바꾸어 족의 크기를 묶는다[^3].
- 집합론. 비가산 개의 유한집합으로 된 족은 비가산 크기의 Δ-계를 포함한다는 Δ-계 보조정리(Δ-system lemma)가 [강제법](forcing.md)에서 가산 사슬 조건(countable chain condition)을 증명하는 데 쓰인다.

[^1]: P. Erdős, R. Rado, "Intersection theorems for systems of sets", Journal of the London Mathematical Society 35 (1960), 85–90.
[^2]: R. Alweiss, S. Lovett, K. Wu, J. Zhang, "Improved bounds for the sunflower lemma", Annals of Mathematics 194(3) (2021), 795–815. 학회 판은 STOC 2020.
[^3]: A. A. Razborov, "Lower bounds for the monotone complexity of some Boolean functions", Soviet Mathematics Doklady 31 (1985), 354–357.

# 연관 문서

## 선수지식

- [비둘기집 원리](pigeonhole-principle.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #complexity #set_theory
