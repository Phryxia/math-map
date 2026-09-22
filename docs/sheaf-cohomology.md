# 층 코호몰로지

# 개요

층 코호몰로지는 전역 단면 함자의 오른쪽 유도 함자다. 층의 짧은 완전열에서 전역 단면을 취하면 오른쪽 끝의 전사성이 깨지고, 깨진 정도를 재는 군이 $H^1$ 이다.

국소적으로 풀리는 문제가 전역적으로 풀리지 않는 장애가 $H^1$ 의 원소로 나타난다. 계산은 단사 분해 대신 비순환 분해나 덮개의 Čech 복합체로 한다.

# 직관

$X = \mathbb C \setminus \lbrace 0\rbrace$ 위의 함수 $f(z) = z$ 는 어디서도 $0$ 이 아니다. $e^g = f$ 인 정칙함수 $g$ 를 찾는다. 원점을 뺀 평면을 반평면 두 개로 덮으면 각 조각에서 로그의 가지를 잡을 수 있으므로 국소적으로는 $g\_i$ 가 있다.

두 조각이 겹치는 곳에서 $g\_i$ 와 $g\_j$ 를 비교하면 차가 $2\pi i$ 의 정수배다. 그 정수를 $c\_{ij}$ 라 하면 세 조각이 겹치는 곳에서 $c\_{ij} + c\_{jk} = c\_{ik}$ 가 성립한다. 전역 로그 $g$ 가 있으면 $b\_i = (g\_i - g)/2\pi i$ 가 정수이고 $c\_{ij} = b\_j - b\_i$ 로 쓰인다.

$f(z) = z$ 에서는 그런 $b\_i$ 가 없다. 원점을 한 바퀴 도는 동안 가지가 $2\pi i$ 만큼 어긋나므로 $c\_{ij}$ 를 차로 나타내려면 정수 하나가 모자란다. 덮개를 더 잘게 나누어도 어긋남은 그대로 남는다.

공동경계 조건을 만족하는 자료 $\lbrace c\_{ij}\rbrace$ 를 모으고 차로 쓰이는 것들을 몫으로 버리면 군이 하나 남는다. 이 군이 $\mathbb Z$ 값 층의 $H^1$ 이고, 로그를 붙이지 못하게 하는 장애가 그 원소다. 같은 구성을 층마다 차수마다 하려면 전역 단면 함자의 완전성이 깨지는 것을 유도 함자로 재면 된다.

# 정의

## 유도 함자로서의 정의

위상공간 $X$ 위의 아벨군 값 [층](sheaves.md)의 범주는 아벨 범주이고 단사 대상을 충분히 갖는다. 층 $\mathcal F$ 의 단사 분해 $0 \to \mathcal F \to \mathcal I^0 \to \mathcal I^1 \to \cdots$ 를 잡고 전역 단면 함자 $\Gamma(X,-)$ 를 적용한 복합체의 코호몰로지를 **층 코호몰로지**라 한다.

$$
H^i(X, \mathcal F) \thinspace=\thinspace H^i(\Gamma(X, \mathcal I^\bullet))
$$

[유도 함자](derived-functors.md)의 일반론에서 이 군이 분해의 선택에 의존하지 않고, $H^0(X,\mathcal F) = \mathcal F(X)$ 다.

## Čech 코호몰로지

열린덮개 $\mathcal U = \lbrace U\_i\rbrace$ 에 대해 $p$ 차 사슬을 $\prod_{i\_0 \lt \cdots \lt i\_p} \mathcal F(U\_{i\_0} \cap \cdots \cap U\_{i\_p})$ 로 두고 교대합으로 공동경계를 정의한 복합체의 코호몰로지를 $\check{H}^p(\mathcal U, \mathcal F)$ 라 한다. 덮개를 세분해 가며 극한을 취한 것이 $\check{H}^p(X, \mathcal F)$ 다.

# 성질

## 긴 완전열

**정리.** 층의 짧은 완전열 $0 \to \mathcal F' \to \mathcal F \to \mathcal F'' \to 0$ 에서 다음 긴 완전열이 나온다.

$$
0 \to H^0(X,\mathcal F') \to H^0(X,\mathcal F) \to H^0(X,\mathcal F'') \to H^1(X,\mathcal F') \to \cdots
$$

유도 함자의 긴 완전열을 전역 단면 함자에 적용한 것이다. 연결 사상 $H^0(X,\mathcal F'') \to H^1(X,\mathcal F')$ 이 전역 단면을 들어 올리지 못하는 장애를 준다. ∎

## 비순환 분해

$H^i(X,\mathcal A) = 0$ 이 모든 $i \ge 1$ 에서 성립하는 층을 **비순환층**이라 한다. 열린집합의 단면이 언제나 전역 단면으로 늘어나는 층을 **연약층**, 국소적으로 유한한 덮개마다 단위분해를 갖는 층을 **세밀층**이라 하고, 둘 다 비순환층이다.

**정리.** $\mathcal F$ 의 비순환 분해 $0 \to \mathcal F \to \mathcal A^0 \to \mathcal A^1 \to \cdots$ 를 쓰면 $H^i(X,\mathcal F) = H^i(\Gamma(X,\mathcal A^\bullet))$ 다.

단사 분해와 비순환 분해 사이의 사슬 사상을 만들고 긴 완전열로 귀납한다. 단사층을 직접 다루지 않고 계산하는 근거다. ∎

## Leray 정리

**정리**[^1]**.** 덮개 $\mathcal U$ 의 모든 유한 교집합 $U\_{i\_0} \cap \cdots \cap U\_{i\_p}$ 에서 $H^q(\cdot, \mathcal F) = 0$ 이 $q \ge 1$ 에 대해 성립하면 $\check{H}^p(\mathcal U, \mathcal F) \cong H^p(X, \mathcal F)$ 다.

교집합이 전부 아핀인 스킴의 덮개나 볼록인 다양체의 덮개가 이 조건을 만족하므로, 유한 덮개 하나로 코호몰로지 전체가 계산된다.

## 소멸

**정리(Grothendieck)**[^2]**.** $X$ 가 Noether 위상공간이고 차원이 $n$ 이면 모든 아벨층에서 $i \gt n$ 일 때 $H^i(X,\mathcal F) = 0$ 이다.

아핀 스킴 위의 준연접층에서는 $i \ge 1$ 의 모든 코호몰로지가 소멸한다. 사영 다양체 위의 연접층에서는 각 $H^i$ 가 유한차원이고 $i$ 가 차원을 넘으면 소멸한다.

# 활용

- de Rham 정리와 Dolbeault 정리가 비순환 분해의 두 경우다. 상수층을 미분형식의 층으로 분해하면 [de Rham 코호몰로지](de-rham-cohomology.md)가, 정칙함수의 층을 $(0,q)$ 형식의 층으로 분해하면 Dolbeault 코호몰로지가 나온다.
- 지수열 $0 \to \mathbb Z \to \mathcal O \to \mathcal O^{\ast} \to 0$ 의 긴 완전열이 선다발을 분류한다. $H^1(X,\mathcal O^{\ast})$ 가 [Picard 군](picard-group.md)이고 첫 Chern 류가 $H^2(X,\mathbb Z)$ 로 가는 연결 사상이다.
- 연접층의 [Euler 지표](euler-characteristic.md) $\sum_i (-1)^i \dim H^i(X,\mathcal F)$ 가 [Riemann–Roch](riemann-roch.md) 공식의 왼쪽 항이다. 고차 항의 소멸을 보이면 전역 단면의 차원이 계산된다.
- 에탈 위상 위에서 같은 구성을 하면 유한체 위 다양체의 점의 개수를 세는 코호몰로지가 나오고, Frobenius 의 대각합 공식이 Weil 추측의 증명에 쓰인다.

[^1]: J. Leray, "L'anneau spectral et l'anneau filtré d'homologie d'un espace localement compact et d'une application continue", *Journal de Mathématiques Pures et Appliquées* 29 (1950), 1–139.

[^2]: A. Grothendieck, "Sur quelques points d'algèbre homologique", *Tôhoku Mathematical Journal* 9 (1957), 119–221. 아벨 범주의 유도 함자와 Noether 공간에서의 소멸 정리가 이 논문의 내용이다.

# 연관 문서

## 선수지식

- [층](sheaves.md)
- [유도 함자](derived-functors.md)

## 더 알아보기

- [Picard 군](picard-group.md)

#algebraic_topology #category_theory #topology
