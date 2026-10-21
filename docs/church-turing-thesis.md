# Church–Turing 논제

# 개요

**Church–Turing 논제(Church–Turing thesis)** 는 알고리즘으로 계산할 수 있는 자연수 함수가 정확히 Turing 기계로 계산되는 함수라는 주장이다. "알고리즘으로 계산할 수 있다" 는 형식적으로 정의된 개념이 아니므로 이 주장은 증명되는 정리가 아니다. 근거는 [재귀함수](recursive-functions.md), [Lambda calculus](lambda-calculus.md), Turing 기계라는 서로 다른 세 정의가 같은 함수족을 준다는 정리와, Turing 이 계산하는 사람의 동작을 분석한 논증이다.

# 직관

Hilbert 의 결정문제(Entscheidungsproblem)는 [1차 논리](first-order-logic.md)의 문장이 주어지면 그것이 항상 참인지 판정하는 기계적 절차를 묻는다. 절차가 있다고 답하려면 절차 하나를 보이면 된다. 절차가 없다고 답하려면 가능한 모든 절차를 다루어야 하므로 "절차" 의 정의가 먼저 있어야 한다.

1936년에 Church 는 $\lambda$ 정의가능한 함수를, Turing 은 자신의 기계가 계산하는 함수를 그 정의로 내놓고 각각 결정문제에 판정 절차가 없음을 증명했다[^1][^2]. 두 증명은 정의가 다르므로 같은 결론인지가 따로 문제가 되었고, Turing 은 두 정의가 같은 함수족을 준다는 것을 이듬해에 증명했다. 이 일치 위에서 두 정의를 "계산 가능" 의 정의로 받아들이는 것이 이 논제다.

# 정의

## 논제

$f : \mathbb N^k \rightharpoonup \mathbb N$ 가 **효과적으로 계산 가능하다(effectively calculable)** 는 것은, 유한한 지시문으로 적힌 절차가 있어 입력마다 유한 단계 안에 $f$ 의 값을 내놓고 값이 없는 입력에서는 끝나지 않는다는 뜻이다. 지시문은 판단이나 통찰 없이 기계적으로 따를 수 있어야 한다. 이 정의는 형식적이지 않다.

**Church–Turing 논제.** 효과적으로 계산 가능한 함수는 Turing 기계로 계산되는 함수와 같다.

같은 주장을 $\lambda$ 정의가능성으로 적은 것을 Church 논제(Church's thesis), Turing 기계로 적은 것을 Turing 논제(Turing's thesis)라 부르기도 한다. 아래 동치 정리 때문에 셋은 같은 주장이다.

## Turing 의 분석

Turing 은 종이와 연필로 계산하는 사람이 따르는 제약을 다음으로 적었다[^2].

- 종이에 쓰는 기호의 종류는 유한하다.
- 한 번에 볼 수 있는 칸의 수는 유한하다.
- 계산하는 사람의 마음 상태의 수는 유한하다.
- 한 단계에서 바꾸는 것은 지금 보는 칸의 기호와 마음 상태이고, 다음에 볼 칸은 지금 칸에서 정해진 거리 안에 있다.

이 제약을 만족하는 계산은 칸 하나를 읽고 쓰는 머리와 유한 상태표를 가진 기계로 흉내 낼 수 있다. 이 기계가 [계산 가능성](computability.md)의 Turing 기계다.

# 성질

## 세 정의의 동치

**정리 (Kleene 1936, Turing 1937).** 자연수 위의 부분함수에 대해 다음 셋은 동치다.

1. 부분 재귀 함수다.
2. $\lambda$ 정의가능하다.
3. Turing 기계로 계산된다.

$1 \Rightarrow 2$ 는 기본 함수, 합성, 원시 재귀, 최소화를 $\lambda$ 항으로 구성해 보인다. 최소화에는 고정점 combinator 를 쓴다. $2 \Rightarrow 3$ 은 $\lambda$ 항의 정규 순서 축약을 Turing 기계로 흉내 낸다. $3 \Rightarrow 1$ 은 기계의 상태와 테이프를 수 하나로 부호화해 한 단계 전이를 원시 재귀 함수로 적고, 정지할 때까지의 단계 수를 최소화로 찾는다. 레지스터 기계, Post 의 생성 체계(Post canonical system), Markov 알고리즘(Markov algorithm)도 같은 함수족을 준다.

## 논제의 지위

논제의 한쪽 방향, 곧 Turing 기계로 계산되는 함수는 효과적으로 계산 가능하다는 것은 Turing 기계의 동작이 그 자체로 기계적 지시문이므로 성립한다. 반대 방향은 효과적 계산 가능성이 형식적 정의가 아니므로 증명의 대상이 아니다. 반대 방향을 반박하려면 효과적인 절차를 하나 보이고 그것이 계산하는 함수가 Turing 기계로 계산되지 않음을 증명해야 한다.

## 결정문제의 부정적 해답

결정문제에 판정 절차가 없다는 결론은 두 단계로 얻는다. 첫째는 1차 논리의 항상 참인 문장 집합을 판정하는 Turing 기계가 없다는 정리다. [정지 문제](halting-problem.md)를 1차 논리 문장의 타당성 문제로 환원해 증명한다. 둘째는 논제로, 이 정리를 "판정하는 효과적 절차가 없다" 로 바꾼다.

## 물리적 판본

**물리적 Church–Turing 논제(physical Church–Turing thesis)** 는 물리계가 계산할 수 있는 함수가 Turing 기계로 계산되는 함수와 같다는 주장이다. 원래의 논제는 사람이 기계적으로 따르는 절차에 관한 것이므로 물리적 판본과 다른 주장이다. Gandy 는 이산적이고 결정론적인 기계 장치가 만족하는 원리 넷(상태의 유한한 기술, 위계의 유한성, 부품의 유일한 재조립, 인과의 국소성)을 세우고, 이 원리를 만족하는 장치가 계산하는 함수는 Turing 기계로 계산된다는 것을 증명했다[^3].

# 활용

- 계산 가능성의 정지 문제와 [Rice 정리](rice-theorem.md)는 Turing 기계에 관한 정리다. 논제를 받아들이면 이 정리들은 "어떤 알고리즘으로도 판정할 수 없다" 는 진술이 된다.
- 재귀 이론의 문헌은 함수가 부분 재귀 함수임을 보일 때 계산 절차를 말로 적고 재귀함수의 구성은 생략한다. 이것을 "논제에 의한 증명(proof by Church's thesis)" 이라 한다. 생략한 구성은 원리상 언제나 채울 수 있다.
- [Gödel 불완전성 정리](godel-incompleteness.md)의 "형식 체계" 는 정리 집합을 기계적으로 나열할 수 있는 체계다. Gödel 은 1964년의 후기에서 Turing 의 분석이 형식 체계의 정확한 정의를 주므로 불완전성 정리가 모든 형식 체계에 적용된다고 적었다[^4].
- [P 대 NP 문제](p-np.md)를 비롯한 복잡도 이론은 다항시간을 Turing 기계로 정의한다. 다중 테이프 Turing 기계와 레지스터 기계 같은 고전적 계산 모형은 서로를 다항시간 안에 흉내 내므로 다항시간 계산 가능성은 이 모형들 사이에서 같다.

[^1]: A. Church, An unsolvable problem of elementary number theory, American Journal of Mathematics 58(2), 1936, 345–363, https://doi.org/10.2307/2371045
[^2]: A. M. Turing, On computable numbers, with an application to the Entscheidungsproblem, Proceedings of the London Mathematical Society (2) 42, 1937, 230–265, https://doi.org/10.1112/plms/s2-42.1.230
[^3]: R. Gandy, Church's thesis and principles for mechanisms, in The Kleene Symposium, North-Holland, 1980, 123–148
[^4]: K. Gödel, Postscriptum (1964) to On undecidable propositions of formal mathematical systems, in Collected Works I, Oxford University Press, 1986, 369–371

# 연관 문서

## 선수지식

- [재귀함수](recursive-functions.md)
- [Lambda calculus](lambda-calculus.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #logic #philosophy_of_math
