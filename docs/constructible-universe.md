# 구성가능 우주

# 개요

구성가능 우주 $L$ 은 각 단계에서 1차 논리식으로 정의되는 부분집합만 취해 초한 재귀로 쌓은 모임이다. ZFC 의 모든 공리를 만족하는 내부 모형이고, 모든 집합이 구성가능하다는 명제 $V = L$ 이 그 안에서 성립한다.

$L$ 에서는 [선택공리](axiom-of-choice.md)와 일반 연속체 가설이 정리다. ZFC 가 무모순이면 여기에 이 둘을 더해도 무모순임이 이 모형에서 나온다.

# 직관

$\vert \mathcal P(\omega)\vert$ 가 어느 알레프인지 묻는다. ZFC 의 공리로는 $\aleph\_1$ 이라고도 $\aleph\_2$ 라고도 증명되지 않는다.

멱집합 공리는 $X$ 의 부분집합을 전부 모은 집합이 있다고만 말하고 그 부분집합들이 어떻게 생기는지는 말하지 않는다. 부분집합을 만드는 방법을 하나로 고정해 본다. $X$ 를 논의 영역으로 하는 1차 논리식에 $X$ 의 원소를 매개변수로 넣어 잘라낸 것만 부분집합으로 인정한다.

그러면 개수를 셀 수 있다. 논리식은 유한 문자열이므로 셀 수 있게 많고, 매개변수는 $X$ 에서 고르므로 $X$ 가 무한이면 후보가 $\vert X\vert$ 가지다. 잘라낸 부분집합 전체의 크기가 $\vert X\vert$ 가 된다. 단계마다 이렇게 쌓으면 $\alpha$ 가 무한 서수일 때 $\alpha$ 단계의 크기가 $\vert\alpha\vert$ 다.

$\omega$ 의 부분집합이 어느 단계에서 나오는지 본다. 각 부분집합은 셀 수 있는 정보로 정의되므로 셀 수 있는 서수 단계에서 이미 나타나고, 셀 수 있는 서수는 $\aleph\_1$ 개다. 실수 전체가 $\aleph\_1$ 개의 단계 안에 들어가고 각 단계의 크기도 $\aleph\_1$ 이하이므로, 이 우주에서 실수의 개수는 $\aleph\_1$ 이다.

# 정의

## 정의 가능한 멱집합

집합 $X$ 에 대해 $\mathrm{Def}(X)$ 는 구조 $(X, \in)$ 를 논의 영역으로 하고 $X$ 의 원소를 매개변수로 쓰는 1차 논리식으로 정의되는 $X$ 의 부분집합 전체다.

## 구성가능 계층

[서수](ordinals.md)에 걸친 초한 재귀로 정의한다.

$$
L\_0 = \varnothing, \qquad L\_{\alpha+1} = \mathrm{Def}(L\_\alpha), \qquad L\_\lambda = \bigcup_{\alpha \lt \lambda} L\_\alpha
$$

모든 서수에 걸친 합집합 $L = \bigcup\_\alpha L\_\alpha$ 를 **구성가능 우주**라 한다. 집합 $x$ 가 $L$ 에 속하면 **구성가능하다**고 하고, 모든 집합이 구성가능하다는 명제를 **구성가능성 공리** $V = L$ 이라 한다.

# 성질

## 내부 모형

**정리(Gödel)**[^1]**.** $L$ 은 추이적이고 모든 서수를 포함하며 [ZFC](zfc-axioms.md) 의 공리를 전부 만족한다.

각 공리를 $L$ 로 상대화해 확인한다. 분리와 치환은 $\mathrm{Def}$ 의 정의에서 바로 나오고, 멱집합 공리는 $L$ 안에서 $\mathcal P(x) \cap L$ 이 어떤 $L\_\alpha$ 의 원소임을 보이는 것으로 얻는다. ∎

$L$ 의 구성이 절대적이므로 $L$ 안에서 같은 구성을 하면 다시 $L$ 이 나오고, 따라서 $V = L$ 이 $L$ 에서 성립한다.

## 크기

$\alpha$ 가 무한 서수이면 $\vert L\_\alpha\vert = \vert\alpha\vert$ 다. 각 단계에서 더해지는 부분집합이 논리식과 매개변수의 쌍으로 색인되기 때문이다.

## 응축 보조정리

**정리.** $\lambda$ 가 극한 서수이고 $M$ 이 $L\_\lambda$ 의 기본 부분구조이면, $M$ 은 어떤 $\beta \le \lambda$ 에 대해 $L\_\beta$ 와 동형이다.

Mostowski 붕괴로 $M$ 을 추이적 집합으로 바꾸고, 구성가능성이 절대적이므로 그 결과가 다시 구성가능 계층의 한 단계임을 확인한다. ∎

## 일반 연속체 가설

**정리(Gödel).** $V = L$ 이면 모든 무한 기수 $\kappa$ 에서 $2^\kappa = \kappa^+$ 다.

$x \subseteq L\_\kappa$ 를 잡고 $x$ 와 $L\_\kappa$ 를 담는 기본 부분구조를 크기 $\kappa$ 로 잡는다. 응축 보조정리로 그것이 $L\_\beta$ 와 동형이고 $\vert\beta\vert = \kappa$ 이므로 $\beta \lt \kappa^+$ 다. 따라서 $\mathcal P(\kappa) \cap L \subseteq L\_{\kappa^+}$ 이고 그 크기는 $\kappa^+$ 이하다. ∎

$L$ 에는 서수의 정의 가능한 정렬순서가 있으므로 선택공리도 정리다. 두 결과를 합치면 ZFC 가 무모순일 때 ZFC 에 [연속체 가설](continuum-hypothesis.md)을 더해도 무모순이다.

## 큰 기수와의 충돌

**정리(Scott)**[^2]**.** 측도 가능 기수가 존재하면 $V \neq L$ 이다.

$\kappa$ 위에 $\kappa$ 개 미만의 만남에 닫힌 비주요 [초필터](boolean-algebras.md)가 있으면 $\kappa$ 를 측도 가능 기수라 한다. 그 초필터로 $V$ 의 [초곱](ultraproducts.md)을 만들면 모든 논리식의 참을 보존하는 사상 $j\colon V\to M$ 이 나온다. 이런 $j$ 가 **기본 매장**이고, $j(\alpha)\neq\alpha$ 인 가장 작은 서수 $\kappa$ 가 그 **임계점**이다. $V=L$ 이면 $M=L$ 이 되어 $L$ 의 정의 가능한 정렬순서가 $j$ 로 보존되고, 임계점에서 그 순서의 최소원소가 자기 자신과 달라진다. ∎

큰 기수 공리는 $L$ 안에서 유지되지 않으므로, $V = L$ 을 택하는 것은 그런 공리를 포기하는 것이다.

# 활용

- 상대적 무모순성 증명의 첫 방법이다. 명제 $\varphi$ 가 $L$ 에서 성립함을 보이면 ZFC 에 $\varphi$ 를 더한 이론의 무모순성이 나온다. [강제법](forcing.md)이 반대 방향, 곧 $\varphi$ 의 부정이 무모순임을 보이는 방법이다.
- 다이아몬드 원리가 $L$ 에서 성립한다. 이 원리로 Suslin 나무를 구성할 수 있고, 그 결과 [Suslin 문제](suslin-problem.md)의 답이 부정인 모형이 나온다.[^3]
- 사영 집합의 성질을 가른다. $V = L$ 이면 Lebesgue 가측이 아닌 $\Delta^1\_2$ 집합이 있고, 따라서 모든 사영 집합이 가측이라는 명제는 ZFC 에서 증명되지 않는다.
- 미세구조 이론이 $L$ 의 각 단계를 분석해 조합적 원리를 끌어낸다. 같은 분석이 더 큰 내부 모형으로 확장된다.

[^1]: K. Gödel, *The Consistency of the Axiom of Choice and of the Generalized Continuum-Hypothesis with the Axioms of Set Theory*, Annals of Mathematics Studies 3, Princeton University Press (1940).

[^2]: D. Scott, "Measurable cardinals and constructible sets", *Bulletin de l'Académie Polonaise des Sciences* 9 (1961), 521–524.

[^3]: R. B. Jensen, "The fine structure of the constructible hierarchy", *Annals of Mathematical Logic* 4 (1972), 229–308. 다이아몬드 원리가 $L$ 에서 성립함과 그로부터 Suslin 나무를 얻는 구성이 이 논문의 내용이다.

# 연관 문서

## 선수지식

- [서수](ordinals.md)
- [ZFC 공리계](zfc-axioms.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #logic #foundations
