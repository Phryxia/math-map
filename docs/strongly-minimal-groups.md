# 강최소 군

# 개요

**강최소 군(strongly minimal group)** 은 정의 가능한 부분집합이 유한이거나 여유한인 군이다. 예로 [복소수](complex-numbers.md)의 덧셈군에서 덧셈과 상수로 적은 식의 해집합은 유한개의 점이거나, 유한개를 뺀 나머지 전체다. 이 조건은 군의 곱셈에 대해 아무것도 요구하지 않는다. 그래도 정의 가능한 부분군은 유한하거나 군 전체여야 하므로, 중심과 중심화군이 유한한지만 따져 곱셈이 교환적인지 판정할 수 있다.

# 직관

군 $G$ 의 정의 가능한 부분집합이 모두 유한이거나 여유한(cofinite)이라고 하자. 이 조건은 곱셈에 대해 아무것도 요구하지 않는데, 그래도 $G$ 의 곱셈이 교환적인지 따질 수 있다.

강최소성은 정의 가능 집합을 유한과 여유한 둘로만 나누므로, 정의 가능한 부분군 $H\le G$ 가 무한하면 $H$ 는 여유한이다. 잉여류(coset) $gH$ 도 정의 가능하고 $H$ 와 일대일 대응하므로 무한하고 따라서 여유한인데, 여유한 집합 둘은 반드시 만나고 서로 다른 잉여류는 만나지 않는다. 잉여류가 하나뿐이므로 $H=G$ 이고, 정의 가능한 진부분군은 전부 유한하다. 중심 $Z(G)$ 와 중심화군(centralizer) $C_G(g)$ 도 정의 가능한 부분군이므로 $C_G(g)$ 는 유한하거나 $G$ 전체이고, $C_G(g)=G$ 는 $g\in Z(G)$ 와 같다.

$Z(G)$ 가 무한하면 $Z(G)=G$ 이므로 $G$ 가 아벨군이다. 남는 것은 $Z(G)$ 가 유한하고 중심 밖의 모든 $g$ 에서 $C_G(g)$ 가 유한한 경우로, 그때 켤레류(conjugacy class) $g^G$ 의 지표가 무한하므로 켤레류가 여유한이 되고 여유한 켤레류 둘이 만나므로 중심 밖이 켤레류 하나가 된다. 이 경우를 배제해 $G$ 가 아벨군임을 보인 것이 Reineke 정리(Reineke's theorem)다.[^1]

# 정의

## 강최소 집합

구조 $M$ 의 정의 가능 집합 $D$ 가 무한이고, $M$ 의 모든 기본 확대에서 $D$ 의 정의 가능한 부분집합이 유한이거나 $D$ 에서 여유한이면 $D$ 를 **강최소 집합(strongly minimal set)** 이라 한다. 매개변수를 쓴 정의도 포함한다. 체 $(\mathbb C,+,\cdot)$ 에서 $\mathbb C$ 전체는 강최소 집합이다. 한 변수 논리식이 정의하는 집합은 다항식 영점 집합들의 Boole 조합(Boolean combination)이고, 영이 아닌 다항식의 영점은 유한 개다.

기본 확대를 모두 요구하는 것이 "강" 이다. $M$ 안에서만 유한과 여유한으로 갈리는 집합은 최소 집합(minimal set)이고, 확대에서 조건이 깨질 수 있다.

## 강최소 군

군 $G$ 의 바탕집합이 강최소 집합이면 $G$ 를 **강최소 군** 이라 한다. 군 언어에 다른 구조가 붙어 있어도 정의 가능 집합을 그 언어 전체에서 센다. 덧셈군 $(\mathbb Q,+)$ 는 강최소 군이고, 체 언어를 붙인 $(\mathbb C,+,\cdot)$ 의 덧셈군도 강최소 군이다. 덧셈군 $(\mathbb Z,+)$ 는 강최소 군이 아니다. 논리식 $\exists y\thinspace(x=y+y)$ 가 정의하는 짝수 집합이 무한이고 여집합도 무한이다.

## Morley 위수

강최소 집합은 Morley 위수(Morley rank) $1$, Morley 정도(Morley degree) $1$ 이다. 정도가 $1$ 이라는 것은 위수 $1$ 인 서로소 정의 가능 집합 둘로 쪼갤 수 없다는 뜻이고, 직관 절의 잉여류 논증이 그것을 쓴다.

# 성질

## 부분군 격자

정의 가능한 부분군은 유한하거나 $G$ 전체다. 따라서 $G$ 는 연결(connected)이고, 유한 지표의 정의 가능한 진부분군이 없다.

## Reineke 정리

강최소 군은 아벨군이다.[^1]

증명의 요지는 직관 절의 두 단계다. 중심이 무한하면 끝나고, 유한하면 중심 밖이 켤레류 하나인 군이 되는데 안정성이 그런 군을 허용하지 않는다.

이 정리는 위수 $1$ 에서 단순 무한군을 배제한다. [유한 Morley 위수 군](groups-of-finite-morley-rank.md)의 분류에서 위수 $1$ 인 경우가 이것으로 끝난다.

## 기하의 비퇴화성

강최소 집합에는 대수적 폐포 $\mathrm{acl}$ 이 주는 프리기하(pregeometry)가 있다. $a,b$ 가 독립이면 $ab\in\mathrm{acl}(a,b)$ 이지만 $ab\notin\mathrm{acl}(a)\cup\mathrm{acl}(b)$ 이므로 이 프리기하는 퇴화(trivial)가 아니다. 퇴화 기하에서는 $\mathrm{acl}$ 이 한 점씩의 폐포의 합집합이므로 이런 원소가 나오지 않는다.

[Zilber 삼분법](zilber-trichotomy.md)의 세 경우 가운데 퇴화가 배제되므로, 강최소 군의 기하는 국소 모듈러(locally modular)이거나 대수적으로 닫힌 체의 기하다.

## 모듈러인 경우의 정의 가능 집합

Hrushovski–Pillay 정리(Hrushovski–Pillay theorem). 강최소 군이 국소 모듈러이면 정의 가능한 부분집합이 모두 정의 가능한 부분군의 잉여류들의 유한 Boole 조합이다.[^2]

정의 가능 집합이 군 구조만으로 설명되고 그 밖의 구조가 해석되지 않는다. 이 성질을 갖는 군을 약정규(weakly normal) 또는 $1$ 기반(1-based) 군이라 부른다.

## 예

- $\mathbb Q$ 벡터공간을 덧셈군으로 본 것. 비틀림이 없고 나눗셈이 되는 아벨군이며 정의 가능 집합이 잉여류의 Boole 조합이다.
- 무한 기본 아벨 $p$ 군 $\bigoplus_{\omega}\mathbb Z/p$ . 모든 원소의 위수가 $p$ 이고 $\mathbb F_p$ 벡터공간이다.
- 대수적으로 닫힌 체 $K$ 의 덧셈군과 곱셈군. 체 언어를 붙이면 국소 모듈러가 아니고 삼분법의 셋째 경우가 된다.

앞의 둘은 국소 모듈러이고 셋째는 아니다. 셋 다 아벨군이므로 Reineke 정리와 맞는다.

# 활용

## 군 배치 정리의 출력 판정

[군 배치 정리](group-configuration.md)에서 해석된 위수 $1$ 의 군이 아벨군임을 이 정리가 보장한다. 그 위의 정의 가능한 자기준동형들이 환을 이루고 그 환이 나눗셈환이 되는 다음 단계가 아벨성을 쓴다.

## 국소 모듈러 기하의 분류

국소 모듈러이고 퇴화가 아닌 강최소 집합에는 군이 해석되고, 그 군이 아벨군이며, 위의 Hrushovski–Pillay 정리로 기하가 나눗셈환 위의 벡터공간의 기하가 된다. 삼분법의 둘째 경우가 이렇게 구체화된다.

## 유한 Morley 위수 군의 분류

[Cherlin–Zilber 추측](cherlin-zilber-conjecture.md)은 단순 무한 유한 Morley 위수 군이 대수적으로 닫힌 체 위의 대수군이라고 한다.[^3] 위수 $1$ 인 경우는 Reineke 정리가 아벨성을 주어 무한 단순군이 없으므로, 분류는 위수 $2$ 부터 따진다.

[^1]: J. Reineke, *Minimale Gruppen*, Z. Math. Logik Grundlagen Math. **21** (1975), 357–359. 중심 밖이 켤레류 하나인 경우의 배제는 B. Poizat, *Groupes stables* (Nur al-Mantiq wal-Ma'rifah, 1987) 2 장에 안정 이론의 사슬 조건으로 정리되어 있다.
[^2]: E. Hrushovski, A. Pillay, *Weakly normal groups*, in *Logic Colloquium '85*, North-Holland (1987), 233–244.
[^3]: T. Altınel, A. Borovik, G. Cherlin, *Simple Groups of Finite Morley Rank*, Math. Surveys Monogr. **145**, AMS (2008). 짝수 위수의 경우가 이 책에서 해결된 부분이다.

# 연관 문서

## 선수지식

- [군 배치 정리](group-configuration.md)

## 더 알아보기

- [유한 Morley 위수 군](groups-of-finite-morley-rank.md)

#logic #foundations #algebra #group_theory
