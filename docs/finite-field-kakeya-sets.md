# 유한체 Kakeya 집합

# 개요

**유한체 Kakeya 집합(Kakeya set over a finite field)** 은 위수 $q$ 의 [유한체](finite-fields.md) $\mathbb F\_q$ 위의 공간 $\mathbb F\_q^{\thinspace n}$ 의 부분집합으로, 모든 방향의 직선을 적어도 하나씩 포함하는 집합이다. T. Wolff 가 실수 공간의 Kakeya 문제를 본떠 이 집합이 얼마나 작을 수 있는지 물었고[^1], Z. Dvir 가 원소가 적어도 $q^n/n!$ 개라는 것을 증명했다[^2]. 이 하한을 Dvir 정리(Dvir's theorem)라 부른다.

증명은 Kakeya 집합에서 $0$ 이 되는 차수 낮은 다항식을 만들고 그 다항식이 영다항식이어야 한다는 것을 보이는 다항식 방법(polynomial method)이다. 마지막 단계에서 [조합적 영점 정리](combinatorial-nullstellensatz.md)의 격자 위의 영다항식 정리를 쓴다.

# 직관

평면 $\mathbb F\_q^{\thinspace 2}$ 의 직선은 기울기로 방향이 정해지고, 방향은 $q+1$ 가지다(기울기 $q$ 가지와 세로 방향 하나). 방향마다 직선을 하나씩 고르면 서로 다른 두 직선은 많아야 한 점에서 만난다. 첫째 직선이 점 $q$ 개를 주고, 둘째 직선은 첫째와 겹치는 점을 빼고 적어도 $q-1$ 개를 더 주고, $k$ 째 직선은 적어도 $q-k+1$ 개를 더 준다. 그래서 평면의 Kakeya 집합은 점이 적어도 $q+(q-1)+\cdots+1=q(q+1)/2$ 개이고, 전체 $q^2$ 의 절반쯤이다.

차원이 $n$ 이면 방향이 $(q^n-1)/(q-1)$ 가지다. 그러나 같은 계산에서 $k$ 째 직선이 더 주는 점은 $k\gt q$ 이면 $0$ 개 이상이라는 것밖에 모르므로, 하한은 차원과 상관없이 $q(q+1)/2$ 에 머문다. 직선 쌍마다 겹침을 세는 대신, 집합의 모든 점에서 $0$ 이 되는 다항식을 하나 잡고 직선 위로 제한한다. 직선 위에서 그 다항식은 변수 하나의 다항식이고, 차수가 $q$ 보다 작은데 근이 $q$ 개이면 영다항식이다. 이 사실을 방향마다 모으면 다항식의 최고차 부분이 공간 전체에서 $0$ 이 되어 모순이 나오고, 그 모순이 집합이 작을 수 없다는 증명이 된다.

# 정의

$\mathbb F\_q^{\thinspace n}$ 의 $0$ 이 아닌 벡터 $b$ 와 점 $a$ 에 대해 직선 $\ell\_{a,b}=\lbrace a+tb : t\in\mathbb F\_q\rbrace$ 의 방향은 $b$ 다. $b$ 와 $cb$ ($c\ne 0$) 는 같은 직선들을 주므로 같은 방향으로 본다.

부분집합 $K\subseteq\mathbb F\_q^{\thinspace n}$ 이 모든 $b\ne 0$ 에 대해 어떤 $a$ 에서 $\ell\_{a,b}\subseteq K$ 를 만족하면 $K$ 를 Kakeya 집합이라 한다.

# 성질

## Dvir 정리

$K\subseteq\mathbb F\_q^{\thinspace n}$ 이 Kakeya 집합이면

$$
\lvert K\rvert\ge\binom{q+n-1}{n}\ge\frac{q^n}{n!}
$$

이다. 이항계수 판본은 N. Alon 과 T. Tao 가 Dvir 의 원래 논증을 다듬어 얻었다[^2].

증명의 요지. 차수 $q-1$ 이하의 $n$ 변수 단항식은 $\binom{q+n-1}{n}$ 개다. $\lvert K\rvert$ 가 이보다 작으면, 계수를 미지수로 둔 연립일차방정식 "$K$ 의 모든 점에서 값이 $0$" 은 미지수가 식보다 많아 $0$ 이 아닌 해를 가진다. 그 해를 차수 $d\le q-1$ 의 다항식 $P$ 로, $P$ 의 차수 $d$ 인 동차 부분을 $P_d$ 로 둔다. $K$ 는 공집합이 아니므로 $P$ 는 상수가 아니고 $d\ge 1$ 이다.

방향 $b$ 의 직선 $\ell\_{a,b}\subseteq K$ 위에서 $t\mapsto P(a+tb)$ 는 차수 $d$ 이하의 일변수 다항식이고 $q$ 개의 근을 가지므로 영다항식이다. 그 $t^d$ 의 계수는 $P_d(b)$ 이므로 $P_d(b)=0$ 이다. $P_d$ 는 동차이므로 $P_d(0)=0$ 이고, $P_d$ 는 $\mathbb F\_q^{\thinspace n}$ 의 모든 점에서 $0$ 이다. 변수마다 차수가 $q-1$ 이하이므로 격자 위의 영다항식 정리로 $P_d$ 는 영다항식이고, $P_d$ 가 $P$ 의 최고차 부분이라는 데 모순이다.

## 중복도 방법

Z. Dvir, S. Kopparty, S. Saraf, M. Sudan 은 $K$ 의 각 점에서 높은 차수로 $0$ 이 되는 다항식을 써서 하한을

$$
\lvert K\rvert\ge\frac{q^n}{(2-1/q)^n}
$$

로 올렸다[^3].

## 실수 공간의 Kakeya 추측

$\mathbb R^n$ 에서 모든 방향의 길이 $1$ 인 선분을 포함하는 집합도 Kakeya 집합이라 한다. A. S. Besicovitch 는 Lebesgue 측도가 $0$ 인 Kakeya 집합을 구성했다[^4]. **Kakeya 추측(Kakeya conjecture)** 은 $\mathbb R^n$ 의 Kakeya 집합의 [Hausdorff 차원](hausdorff-dimension.md)이 $n$ 이라는 추측이다. Wolff 가 물은 것은 이 추측을 유한체로 옮긴 꼴인 $\lvert K\rvert\ge c\_n q^n$ 이다.

# 활용

- [무작위성 추출기](randomness-extractors.md). Z. Dvir 와 A. Wigderson 은 Dvir 정리의 증명을 써서, 몇 개의 원천 가운데 하나만 균등할 때 그 원천들을 섞어 엔트로피가 높은 출력을 내는 병합기(merger)를 만들고 이를 추출기 구성에 썼다[^5].
- [조합적 영점 정리](combinatorial-nullstellensatz.md)와 함께 다항식 방법의 표준 예다. 집합에서 $0$ 이 되는 다항식의 존재는 차원 세기에서, 그 다항식이 영다항식이라는 것은 근의 개수 제한에서 나오고, 두 결론의 충돌이 하한을 준다.

[^1]: T. Wolff, "Recent work connected with the Kakeya problem", Prospects in Mathematics (Princeton, 1996), American Mathematical Society (1999), 129–162.
[^2]: Z. Dvir, "On the size of Kakeya sets in finite fields", Journal of the American Mathematical Society 22 (2009), 1093–1097.
[^3]: Z. Dvir, S. Kopparty, S. Saraf, M. Sudan, "Extensions to the method of multiplicities, with applications to Kakeya sets and mergers", SIAM Journal on Computing 42(6) (2013), 2305–2328.
[^4]: A. S. Besicovitch, "On Kakeya's problem and a similar one", Mathematische Zeitschrift 27 (1928), 312–320.
[^5]: Z. Dvir, A. Wigderson, "Kakeya sets, new mergers, and old extractors", SIAM Journal on Computing 40(3) (2011), 778–792.

# 연관 문서

## 선수지식

- [조합적 영점 정리](combinatorial-nullstellensatz.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #field_theory #algebra #complexity
