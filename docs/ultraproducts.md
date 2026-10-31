# 초곱

# 개요

**초곱(ultraproduct)** 은 구조들을 무한히 늘어놓은 열을, 거의 모든 자리에서 성립하는 것을 참으로 보는 규칙으로 한 구조로 묶는 구성이다. 소수 $p$ 마다 원소가 $p$ 개인 체 $\mathbb F_p$ 를 늘어놓고, 거의 모든 $p$ 에서 같은 원소열을 같은 원소로 보면 하나의 체가 나온다. 각 $\mathbb F_p$ 에서는 $1$ 을 $p$ 번 더하면 $0$ 이지만, 묶은 체에서는 $1$ 을 몇 번 더해도 $0$ 이 되지 않아 표수가 $0$ 이다. 초곱은 "거의 모든" 을 초필터로 정하고, 각 자리에서 거의 늘 참인 문장이 묶은 구조에서 참이라는 Łoś 정리로 이런 결론을 얻는다.

# 직관

자연수의 성질은 그대로 유지하면서 모든 표준 자연수보다 큰 원소가 하나 있는 구조를 만들려 한다. $\mathbb N$ 의 복사본을 무한히 많이 두고 곱 $\prod_{i \in \mathbb N} \mathbb N$ 을 만들면 원소는 자연수열이고, 수열 $(0, 1, 2, 3, \dots)$ 은 상수열 $(k, k, k, \dots)$ 보다 $i \gt k$ 인 자리에서 모두 크다. 문제는 순서인데, 곱에서 $f \lt g$ 를 모든 자리에서의 비교로 정하면 $(0,1,0,1,\dots)$ 과 $(1,0,1,0,\dots)$ 은 어느 쪽도 크지 않아 전순서가 깨진다. 자연수에서 참인 문장이 곱에서 거짓이 된다.

모든 자리가 아니라 자리의 집합이 큰지로 판정해, 짝수 자리의 집합과 홀수 자리의 집합 가운데 하나만 크다고 정해 놓으면 두 수열의 비교가 정해진다. 어떤 집합이든 그것과 그 여집합 중 정확히 하나를 크다고 고르는 방식이 초필터다. 유한 집합을 작다고 두는 초필터를 잡으면 $(0,1,2,\dots)$ 이 상수열보다 작은 자리가 유한 개뿐이므로 모든 상수열보다 크다.

# 정의

## 초필터

집합 $I$ 의 부분집합족 $U$ 가 **[필터](filters-and-nets.md)(filter)** 라는 것은 $I \in U$, $\varnothing \notin U$ 이고, 교집합에 닫혀 있으며 위로 닫혀 있다는 뜻이다. 모든 $A \subseteq I$ 에 대해 $A \in U$ 와 $I \setminus A \in U$ 가운데 정확히 하나가 성립하면 **초필터(ultrafilter)** 라 한다. $\mathbb N$ 에서 여집합이 유한한 집합 전체는 필터이지만 초필터가 아니다. 짝수 집합도 홀수 집합도 그 여집합이 무한해서 이 필터에 들지 않는다.

한 점을 포함하는 집합 전체는 초필터이고 이를 주 초필터(principal ultrafilter)라 한다. $3$ 을 포함하는 $\mathbb N$ 의 부분집합 전체가 그 예다. 유한 집합의 여집합 전체가 만드는 필터를 확장하면 주가 아닌 초필터를 얻고, 그 확장에 [선택공리](axiom-of-choice.md)를 쓴다.

## 초곱

같은 언어의 구조족 $\lbrace M_i\rbrace_{i \in I}$ 와 $I$ 위의 초필터 $U$ 를 잡는다. 곱집합 $\prod_{i \in I} M_i$ 에 다음 관계를 준다.

$$
f \sim_U g \thinspace\iff\thinspace \lbrace i \in I : f(i) = g(i)\rbrace \in U
$$

이 [동치관계](equivalence-relations.md)의 몫을 **초곱** 이라 하고 $\prod_{i} M_i / U$ 로 쓴다. 모든 $M_i$ 가 같은 구조 $M$ 이면 **초거듭제곱(ultrapower)** 이라 한다.

관계기호와 함수기호는 자리별로 해석한다. $n$ 항 관계 $R$ 에 대해 다음으로 정의한다.

$$
R(\lbrack f_1\rbrack, \dots, \lbrack f_n\rbrack) \thinspace\iff\thinspace \lbrace i \in I : M_i \models R(f_1(i), \dots, f_n(i))\rbrace \in U
$$

직관 절의 구조는 $\mathbb N^{\mathbb N}/U$ 이고 $U$ 는 주가 아닌 초필터다. $\lbrace i: k\lt i\rbrace$ 는 여집합이 유한하므로 $U$ 에 들고, 그래서 $\lbrack(0,1,2,\dots)\rbrack\gt\lbrack(k,k,k,\dots)\rbrack$ 다. $\lbrack(0,1,0,1,\dots)\rbrack$ 과 $\lbrack(1,0,1,0,\dots)\rbrack$ 은 짝수 집합이 $U$ 에 들면 앞의 것이 작고, 홀수 집합이 $U$ 에 들면 뒤의 것이 작다. 주 초필터 $\lbrace A:3\in A\rbrace$ 로 만든 초거듭제곱에서는 수열이 셋째 자리 값으로만 비교되어 $\mathbb N$ 과 같은 구조가 나온다.

# 성질

## Łoś 정리

Łoś 정리(Łoś's theorem).[^1] [1차 논리](first-order-logic.md)의 논리식 $\varphi$ 와 원소 $\lbrack f_1\rbrack, \dots, \lbrack f_n\rbrack$ 에 대해 다음이 성립한다.

$$
\prod_i M_i / U \models \varphi(\lbrack f_1\rbrack, \dots) \thinspace\iff\thinspace \lbrace i \in I : M_i \models \varphi(f_1(i), \dots)\rbrace \in U
$$

논리식의 구조에 대한 귀납이다. 원자식은 정의 그대로이고, 논리곱은 초필터가 교집합에 닫혀 있다는 데서 나온다. 부정 단계에서 $A \in U$ 와 여집합이 $U$ 에 드는 것 가운데 정확히 하나만 성립한다는 초필터의 성질을 쓴다. 존재 한정 단계에서는 각 자리마다 증인을 골라 수열을 만들어야 하므로 선택공리를 쓴다.

초거듭제곱의 경우 상수열로 보내는 사상 $M \to M^I/U$ 는 기본 매장(elementary embedding)이고, $M$ 과 그 초거듭제곱은 기본 동치다.

## 콤팩트성 정리

콤팩트성 정리(compactness theorem). 문장 집합 $T$ 의 모든 유한 부분집합이 모형을 가지면 $T$ 도 모형을 갖는다.

$T$ 의 유한 부분집합 전체를 $I$ 로 두고, 각 $i \in I$ 에 $i$ 의 모형 $M_i$ 를 잡는다. $\sigma \in T$ 마다 $\sigma$ 를 포함하는 유한 부분집합의 모임을 보면 이들이 유한 교집합 성질을 가지므로 모두 포함하는 초필터 $U$ 가 있다. Łoś 정리로 $\prod M_i/U$ 가 $T$ 의 모든 문장을 만족한다.

이 증명은 완전성 정리(completeness theorem)를 거치지 않고 모형을 직접 만든다.

## Keisler–Shelah 정리

Keisler–Shelah 정리(Keisler–Shelah theorem).[^2] 두 구조가 기본 동치인 것과 동형인 초거듭제곱을 갖는 것은 동치다.

의미론적 개념인 기본 동치가 대수적 개념인 동형으로 바뀐다. Keisler 가 일반화 [연속체 가설](continuum-hypothesis.md) 아래 증명했고 Shelah 가 가정 없이 증명했다.

## Boolean 값 모형과의 관계

완비 [Boole 대수](boolean-algebras.md) 위의 [Boolean 값 모형](boolean-valued-models.md)을 극대 필터로 나누면 두 값 구조가 나온다. 초곱은 이 조작에서 대수를 멱집합 대수로 잡은 경우다. [강제법](forcing.md)의 완비 Boole 대수를 쓰고 생성적 초필터(generic ultrafilter)로 나누면 강제 확대(forcing extension)가 나온다.

# 활용

- 콤팩트성 정리의 모형을 직접 구성한다. 증명 체계를 쓰지 않으므로 증명 가능성과 만족 가능성을 분리해 다룰 수 있다.
- 비표준 해석학이 $\mathbb R$ 의 초거듭제곱을 쓴다. 주가 아닌 초필터에서 $\lbrack(1,1/2,1/3,\dots)\rbrack$ 은 모든 양의 실수 상수열보다 작은 양수, 곧 무한소다. 이 구조가 $\mathbb R$ 과 기본 동치이므로 1차 논리로 쓴 [실수](real-numbers.md)의 성질이 그대로 옮겨진다.[^3]
- [Ax–Grothendieck 정리](ax-grothendieck.md)가 [유한체](finite-fields.md)의 초곱을 쓴다. 표수 $p$ 인 대수적으로 닫힌 체들을 소수 $p$ 전체에 걸쳐 묶은 초곱이 표수 $0$ 인 대수적으로 닫힌 체가 되므로, 유한체에서 확인한 1차 논리 문장이 [복소수체](complex-numbers.md)로 옮겨진다.
- [모형론](model-theory.md)에서 포화 모형(saturated model)을 만든다. 적절한 초필터로 초거듭제곱을 취하면 기수에 맞는 포화성을 얻고, 그 모형에서 작은 매개변수 집합 위의 타입이 모두 실현된다.

[^1]: J. Łoś, "Quelques remarques, théorèmes et problèmes sur les classes définissables d'algèbres", in *Mathematical Interpretation of Formal Systems*, North-Holland (1955), 98–113.

[^2]: S. Shelah, "Every two elementarily equivalent models have isomorphic ultrapowers", *Israel Journal of Mathematics* 10 (1971), 224–233. Keisler 가 일반화 연속체 가설 아래 얻은 결과에서 그 가정을 없앤다.

[^3]: A. Robinson, *Non-standard Analysis*, North-Holland (1966). 초거듭제곱으로 무한소를 갖는 순서체를 만들고 해석학을 그 위에서 전개한다.

# 연관 문서

## 선수지식

- [모형론](model-theory.md)
- [필터와 그물](filters-and-nets.md)

## 더 알아보기

- [비표준 해석학](nonstandard-analysis.md)

#logic #set_theory #foundations
