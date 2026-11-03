# 층 코호몰로지

# 개요

**층 코호몰로지(sheaf cohomology)** 는 조각마다 풀리는 문제가 공간 전체에서 풀리지 않는 정도를 재는 군들이다. 평면에서 원점을 뺀 곳에서 각도 함수는 작은 조각마다 연속으로 정할 수 있지만, 원점을 한 바퀴 돌면 $2\pi$ 가 어긋나 전체에서 하나의 [연속함수](continuity.md)로 이어지지 않는다. 조각마다 정한 각도들이 겹치는 곳에서 상수만큼씩 어긋나는 자료가 이 장애를 기록한다. 층 코호몰로지는 이런 어긋남의 자료를 군 $H^1$ 으로 모으고, 그 군이 $0$ 이면 조각의 해가 이어져 전체의 해가 됨을 보인다.

# 직관

$X=\mathbb C\setminus\lbrace 0\rbrace$ 에서 $e^g=z$ 인 [정칙함수](holomorphic-functions.md) $g$, 곧 로그를 찾는다. $X$ 를 방향 $0$, $2\pi/3$, $4\pi/3$ 을 향한 열린 반평면 셋 $U\_0$, $U\_1$, $U\_2$ 로 덮는다. 각 반평면에서는 편각을 길이 $\pi$ 인 구간 하나로 고를 수 있으므로 로그 $g\_k$ 가 있다. $U\_0$ 에서는 편각을 $(-\pi/2,\pi/2)$, $U\_1$ 에서는 $(\pi/6,7\pi/6)$, $U\_2$ 에서는 $(5\pi/6,11\pi/6)$ 에서 고른다.

두 반평면이 겹치는 곳은 부채꼴 하나이고, 거기서 $g\_j-g\_i$ 는 $2\pi i$ 의 정수배다. 그 정수를 $c\_{ij}$ 라 하면 $U\_0\cap U\_1$ 과 $U\_1\cap U\_2$ 에서는 두 편각 구간이 같은 값을 주므로 $c\_{01}=c\_{12}=0$ 이다. $U\_0\cap U\_2$ 는 편각이 $-\pi/2$ 와 $-\pi/6$ 사이인 부채꼴이고, $U\_2$ 의 편각은 $U\_0$ 의 편각보다 $2\pi$ 크므로 $c\_{02}=1$ 이다.

전역 로그 $g$ 가 있으면 $b\_k=(g\_k-g)/2\pi i$ 가 정수이고 $c\_{ij}=b\_j-b\_i$ 로 쓰인다. 그러면 $c\_{01}+c\_{12}-c\_{02}=0$ 이어야 하는데 실제 값은 $-1$ 이다. 로그를 어떻게 골라도 $g\_k$ 를 $2\pi i$ 의 정수배만큼 바꾸는 것뿐이고, 이 합은 바뀌지 않는다. 따라서 $X$ 에는 전역 로그가 없다.

겹치는 곳마다 정수를 하나씩 단 자료 $(c\_{ij})$ 를 모으고, $b\_j-b\_i$ 로 쓰이는 것들을 몫으로 버리면 군이 하나 남는다. 위 계산은 이 군이 $0$ 이 아님을 보이고, 이 군이 정수 값 층의 $H^1$ 이다.

# 정의

## 유도 함자로서의 정의

위상공간 $X$ 위의 아벨군 값 [층](sheaves.md)의 [범주](category.md)는 [아벨 범주](abelian-categories.md)이고 단사 대상(injective object)을 충분히 갖는다. 층 $\mathcal F$ 의 단사 분해 $0 \to \mathcal F \to \mathcal I^0 \to \mathcal I^1 \to \cdots$ 를 잡고 전역 단면 [함자](functors.md)(global section functor) $\Gamma(X,-)$ 를 적용한 복합체의 [코호몰로지](cohomology.md)를 **층 코호몰로지** 라 한다.

$$
H^i(X, \mathcal F) \thinspace=\thinspace H^i(\Gamma(X, \mathcal I^\bullet))
$$

이 군은 $\Gamma(X,-)$ 의 오른쪽 [유도 함자](derived-functors.md)이고, 분해의 선택에 의존하지 않는다. $i=0$ 에서는 $H^0(X,\mathcal F)=\mathcal F(X)$ 다. 정수 값 상수층 $\mathbb Z$ 에서 $H^0(X,\mathbb Z)$ 는 $X$ 위의 국소 상수 정수 함수 전체이고, 직관 절의 $X=\mathbb C\setminus\lbrace 0\rbrace$ 은 연결이므로 $H^0(X,\mathbb Z)=\mathbb Z$ 다.

## Čech 코호몰로지

열린덮개 $\mathcal U = \lbrace U\_i\rbrace$ 에 대해 $p$ 차 사슬을 $\prod_{i\_0 \lt \cdots \lt i\_p} \mathcal F(U\_{i\_0} \cap \cdots \cap U\_{i\_p})$ 로 두고, 교대합으로 정한 공동경계(coboundary)로 만든 복합체의 코호몰로지를 $\check{H}^p(\mathcal U, \mathcal F)$ 라 한다. 덮개를 세분해 가며 극한을 취한 것이 **Čech 코호몰로지(Čech cohomology)** $\check{H}^p(X, \mathcal F)$ 다.

직관 절의 덮개에서 세 반평면이 함께 겹치는 곳은 없으므로 2 차 사슬은 $0$ 이다. $0$ 차 사슬은 $(b\_0,b\_1,b\_2)\in\mathbb Z^3$, $1$ 차 사슬은 $(c\_{01},c\_{12},c\_{02})\in\mathbb Z^3$ 이고, 공동경계는 $(b\_1-b\_0,\thinspace b\_2-b\_1,\thinspace b\_2-b\_0)$ 이다. 그 상은 $(x,y,x+y)$ 꼴 전체이므로 $(c\_{01},c\_{12},c\_{02})\mapsto c\_{02}-c\_{01}-c\_{12}$ 가 동형 $\check H^1(\mathcal U,\mathbb Z)\cong\mathbb Z$ 를 준다. 로그의 자료 $(0,0,1)$ 은 생성원 $1$ 로 간다.

## 비순환층

$H^i(X,\mathcal A) = 0$ 이 모든 $i \ge 1$ 에서 성립하는 층을 **비순환층(acyclic sheaf)** 이라 한다. 열린집합 위의 단면이 언제나 전역 단면으로 늘어나는 층을 **연약층(flasque sheaf)** 이라 한다. 국소적으로 유한한 열린 덮개마다 그 덮개에 종속된 [단위분할](partitions-of-unity.md)을 층의 자기 사상으로 갖는 층을 **세밀층(fine sheaf)** 이라 한다.

연속일 필요가 없는 모든 실함수의 층에서는 열린집합 위의 단면을 그 밖에서 $0$ 으로 늘리면 전역 단면이 되므로, 이 층은 연약층이다. 매끄러운 [다양체](manifolds.md) 위의 매끄러운 함수의 층은 매끄러운 단위분할로 곱할 수 있으므로 세밀층이다.

# 성질

## 긴 완전열

층의 짧은 [완전열](exact-sequences.md) $0 \to \mathcal F' \to \mathcal F \to \mathcal F'' \to 0$ 에서 다음 긴 완전열이 나온다.

$$
0 \to H^0(X,\mathcal F') \to H^0(X,\mathcal F) \to H^0(X,\mathcal F'') \to H^1(X,\mathcal F') \to \cdots
$$

유도 함자의 긴 완전열을 전역 단면 함자에 적용한 것이다. 연결 사상 $H^0(X,\mathcal F'') \to H^1(X,\mathcal F')$ 의 상이 전역 단면을 들어 올리지 못하는 장애다. 직관 절의 로그 문제는 정칙함수의 층 $\mathcal O$ 와 어디서도 $0$ 이 아닌 정칙함수의 층 $\mathcal O^\ast$ 사이의 지수열(exponential sequence) $0\to\mathbb Z\to\mathcal O\xrightarrow{\exp(2\pi i\cdot)}\mathcal O^\ast\to 0$ 에서, 단면 $z\in H^0(X,\mathcal O^\ast)$ 의 연결 사상 상이 $H^1(X,\mathbb Z)$ 에서 $0$ 이 아니라는 것이다.

## 비순환 분해

연약층은 비순환층이다. 파라콤팩트 Hausdorff 공간 위의 세밀층도 비순환층이다.

$\mathcal F$ 의 비순환 분해 $0 \to \mathcal F \to \mathcal A^0 \to \mathcal A^1 \to \cdots$ 를 쓰면 $H^i(X,\mathcal F) = H^i(\Gamma(X,\mathcal A^\bullet))$ 다. 증명은 단사 분해와 비순환 분해 사이의 사슬 사상을 만들고 긴 완전열로 귀납한다. 단사층을 직접 다루지 않고 계산할 수 있는 근거가 이 정리다.

## Leray 정리

덮개 $\mathcal U$ 의 모든 유한 교집합 $U\_{i\_0} \cap \cdots \cap U\_{i\_p}$ 에서 $q \ge 1$ 이면 $H^q(\cdot, \mathcal F) = 0$ 일 때 $\check{H}^p(\mathcal U, \mathcal F) \cong H^p(X, \mathcal F)$ 다[^1].

분리 스킴(separated scheme)의 아핀 열린 덮개는 준연접층(quasi-coherent sheaf)에 대해 이 조건을 만족하고, 다양체의 측지 볼록 열린 덮개는 상수층에 대해 이 조건을 만족한다. 직관 절의 반평면과 그 교집합인 부채꼴은 볼록이므로 $H^1(\mathbb C\setminus\lbrace 0\rbrace,\mathbb Z)\cong\mathbb Z$ 다.

## 소멸

$X$ 가 차원 $n$ 인 Noether 위상공간(Noetherian topological space)이면 모든 아벨군 값 층에서 $i \gt n$ 일 때 $H^i(X,\mathcal F) = 0$ 이다(Grothendieck)[^2].

아핀 스킴 위의 준연접층에서는 $i \ge 1$ 의 모든 코호몰로지가 소멸한다. 사영 다양체 위의 연접층(coherent sheaf)에서는 각 $H^i$ 가 유한차원이고 $i$ 가 차원을 넘으면 소멸한다.

# 활용

- de Rham 정리와 Dolbeault 정리(Dolbeault theorem)가 비순환 분해의 두 경우다. 상수층을 [미분형식](differential-forms.md)의 세밀층으로 분해하면 [de Rham 코호몰로지](de-rham-cohomology.md)가, 정칙함수의 층을 $(0,q)$ 형식의 층으로 분해하면 Dolbeault 코호몰로지가 나온다.
- 복소다양체에서 지수열의 긴 완전열이 선다발을 분류한다. $H^1(X,\mathcal O^{\ast})$ 가 [Picard 군](picard-group.md)이고, $H^2(X,\mathbb Z)$ 로 가는 연결 사상이 첫 Chern 류(first Chern class)다.
- 연접층의 [Euler 지표](euler-characteristic.md) $\sum_i (-1)^i \dim H^i(X,\mathcal F)$ 가 [Riemann–Roch](riemann-roch.md) 공식의 왼쪽 항이다. 고차 항의 소멸을 보이면 전역 단면의 차원이 계산된다.
- [에탈 코호몰로지](etale-cohomology.md)는 에탈 위상 위에서 같은 구성을 한 것이다. [유한체](finite-fields.md) 위 다양체의 점의 개수가 Frobenius 의 대각합으로 적히고, 이 공식이 [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)에 쓰인다.

[^1]: J. Leray, "L'anneau spectral et l'anneau filtré d'homologie d'un espace localement compact et d'une application continue", *Journal de Mathématiques Pures et Appliquées* 29 (1950), 1–139.

[^2]: A. Grothendieck, "Sur quelques points d'algèbre homologique", *Tôhoku Mathematical Journal* 9 (1957), 119–221. 아벨 범주의 유도 함자와 Noether 공간에서의 소멸 정리가 이 논문의 내용이다.

# 연관 문서

## 선수지식

- [층](sheaves.md)
- [유도 함자](derived-functors.md)

## 더 알아보기

- [에탈 코호몰로지](etale-cohomology.md)
- [Picard 군](picard-group.md)

#algebraic_topology #category_theory #topology
