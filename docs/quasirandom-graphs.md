# 준무작위 그래프

# 개요

**준무작위 그래프(quasirandom graph)** 는 간선을 동전 던지기로 넣지 않았는데도 부분 구조의 개수가 무작위 그래프와 거의 같은 [그래프](graphs.md) 열이다. 정점 $n$ 개를 둘로 나눠 다른 쪽끼리만 모두 이은 그래프는 간선이 전체 쌍의 절반이지만, 한쪽 정점들 사이에는 간선이 하나도 없어 무작위 그래프와 전혀 다르다. 주어진 그래프가 이런 치우침 없이 고른지를 정점 부분집합을 모두 확인하지 않고 판정하려 한다.

Chung, Graham, Wilson 은 간선 수와 길이 $4$ 인 순환의 수 두 가지만 세면 이 판정이 된다는 것을 보였다.

# 직관

간선 밀도가 $1/2$ 인 [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)에서 정점 네 개 $a,b,c,d$ 를 순서대로 고르면 $ab,bc,cd,da$ 가 모두 간선일 확률은 $1/16$ 이다. 그래서 이런 닫힌 걸음의 수는 약 $n^4/16$ 이다.

개요의 이분 그래프에서는 $a$ 와 $c$ 가 같은 쪽, $b$ 와 $d$ 가 다른 쪽이면 네 간선이 모두 있다. 그런 순서쌍은 약 $2\cdot(n/2)^4=n^4/8$ 개로, 무작위 그래프의 두 배다. 간선 수가 같아도 네 칸 순환의 수가 이 치우침을 드러낸다.

[Paley 그래프](paley-graphs.md) $P_q$ 는 정점 $q$ 개에 간선 밀도가 거의 $1/2$ 이고, 네 칸 닫힌 걸음의 수가 $q^4/16+O(q^3)$ 이다. 이 셈 하나에서 $P_q$ 의 모든 정점 집합에 간선이 고르게 퍼져 있다는 것이 따라 나온다.

# 정의

## 준동형 밀도

그래프 $H$ 의 정점에서 $G$ 의 정점으로 가는 사상 가운데 $H$ 의 간선을 $G$ 의 간선으로 보내는 것을 준동형(homomorphism)이라 한다. 그 수를 $\mathrm{hom}(H,G)$ 로 쓰고, 다음 값을 준동형 밀도(homomorphism density)라 한다.

$$
t(H,G)=\frac{\mathrm{hom}(H,G)}{\vert V(G)\vert^{\vert V(H)\vert}}
$$

$t(K_2,G)$ 는 간선의 양 끝 순서쌍의 비율, 곧 간선 밀도다. 네 칸 순환 $C_4$ 에 대해 $\mathrm{hom}(C_4,G)$ 는 직관 절의 닫힌 걸음의 수이고, 개요의 이분 그래프에서 $t(C_4,G)\approx 1/8$ 이다.

## 준무작위 그래프 열

$0\lt p\lt 1$ 을 고정한다. 정점이 $n$ 개인 그래프 $G_n$ 의 열이 다음을 만족하면 밀도 $p$ 의 **준무작위 그래프 열** 이라 한다.

$$
t(K_2,G_n)\ge p-o(1),\qquad t(C_4,G_n)\le p^4+o(1)
$$

$o(1)$ 은 $n\to\infty$ 에서 $0$ 으로 가는 양이다. 개요의 이분 그래프 열은 $p=1/2$ 에서 $t(C_4)\approx 1/8\gt 1/16$ 이므로 준무작위가 아니다. Paley 그래프의 열 $P_q$ 는 $p=1/2$ 의 준무작위 그래프 열이다.

# 성질

## Chung–Graham–Wilson 정리

정점 $n$ 개, 간선 밀도 $p$ 인 그래프 열 $G_n$ 에서 다음 조건들은 서로 동치다[^1]. 이것이 Chung–Graham–Wilson 정리(Chung–Graham–Wilson theorem)다.

- (C4) $t(C_4,G_n)\le p^4+o(1)$.
- (고윳값) 인접행렬의 가장 큰 [고윳값](eigenvalues.md)이 $(p+o(1))n$ 이고, 나머지 고윳값의 절댓값이 모두 $o(n)$ 이다.
- (불일치) 모든 정점 집합 $X$ 에서 $X$ 안의 간선 수가 $p\vert X\vert^2/2+o(n^2)$ 이다.
- (부분 그래프) 모든 고정된 그래프 $H$ 에서 $t(H,G_n)=p^{e(H)}+o(1)$ 이다. $e(H)$ 는 $H$ 의 간선 수다.

개요의 이분 그래프에서는 한쪽 정점 $n/2$ 개를 $X$ 로 두면 $X$ 안의 간선이 $0$ 이고 $p\vert X\vert^2/2=n^2/16$ 이어서 불일치 조건이 깨진다.

## 증명의 요지

(C4) 에서 (고윳값). 인접행렬 $A$ 의 고윳값을 $\lambda_1\ge\lambda_2\ge\dots$ 라 하면 $\mathrm{hom}(C_4,G)=\mathrm{tr}(A^4)=\sum_i\lambda_i^4$ 이다. $\lambda_1$ 은 평균 차수 $pn$ 이상이므로 $\lambda_1^4\ge p^4n^4$ 이고, 합이 $p^4n^4+o(n^4)$ 이하이면 나머지의 네제곱 합이 $o(n^4)$ 이다.

(고윳값) 에서 (불일치). $X$ 의 지시벡터를 고유벡터로 전개하면 $\lambda_1$ 의 성분이 $p\vert X\vert^2$ 을 주고, 나머지 성분이 $\max_{i\ge 2}\vert\lambda_i\vert\cdot\vert X\vert$ 이하의 오차를 준다. 이것이 [Expander 그래프](expander-graphs.md) 문서의 혼합 보조정리다.

(불일치) 에서 (부분 그래프). $H$ 의 정점을 하나씩 채울 때마다 이웃 집합의 크기가 $p$ 배가 되는 것을 불일치 조건으로 보인다. 이것을 셈 보조정리(counting lemma)라 한다. (부분 그래프) 에서 (C4) 는 $H=C_4$ 로 두면 된다.

## C4 의 하한

모든 그래프에서 $t(C_4,G)\ge t(K_2,G)^4$ 이다. $\mathrm{hom}(C_4,G)$ 는 두 정점 $x,y$ 의 공통 이웃 수의 제곱을 모든 순서쌍에서 더한 것이고, [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 두 번 쓰면 이 하한이 나온다. 그래서 준무작위 그래프 열은 간선 밀도를 고정했을 때 $C_4$ 의 밀도가 가장 작은 열이다. 이 하한을 다른 이분 그래프로 넓힌 것이 [Sidorenko 추측](sidorenko-conjecture.md)이다.

## 그래폰

준무작위 그래프 열은 [그래폰](graphons.md)의 cut 거리에서 상수 함수 $p$ 로 수렴하는 그래프 열과 같다. (부분 그래프) 조건의 $t(H,G_n)\to p^{e(H)}$ 가 상수 그래폰의 준동형 밀도 $p^{e(H)}$ 로의 수렴이다.

# 활용

- 무작위 그래프 없이 만든 예. Paley 그래프는 무작위 그래프가 높은 확률로 갖는 성질을 결정적으로 갖는 그래프가 필요할 때 쓴다. 간선 밀도와 $C_4$ 의 수만 확인하면 위 정리의 모든 조건이 따라 나온다.
- [Szemerédi 정규성 보조정리](szemeredi-regularity-lemma.md). 정규성 보조정리의 조각 쌍이 만족하는 고른 밀도 조건이 이분 그래프판 불일치 조건이다. 같은 정리의 이분판에서 조각 쌍의 고름을 $C_4$ 의 수로 판정한다.
- 준무작위 군. Gowers 는 차원이 작은 비자명 [표현](group-representations.md)이 없는 군에서 곱셈 관계로 만든 이분 그래프가 준무작위임을 보이고, 이것으로 곱이 없는 큰 집합이 존재하지 않음을 증명했다[^2].

[^1]: F. R. K. Chung, R. L. Graham, R. M. Wilson, Quasi-random graphs, *Combinatorica* **9** (1989), 345–362.
[^2]: W. T. Gowers, Quasirandom groups, *Combin. Probab. Comput.* **17** (2008), 363–387.

# 연관 문서

## 선수지식

- [Paley 그래프](paley-graphs.md)
- [Erdős–Rényi 랜덤 그래프](erdos-renyi-graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #graph_theory #probability
