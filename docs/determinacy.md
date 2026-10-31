# 결정성

# 개요

**결정성(determinacy)** 은 두 사람이 번갈아 자연수를 내놓아 무한 수열을 만드는 게임에서 어느 한쪽에 필승 전략이 있다는 성질이다. 틱택토처럼 유한 번에 끝나는 게임은 마지막 수부터 거꾸로 올라가며 승패를 정해 필승 전략이 있음을 보이지만, 수열이 끝없이 이어지는 게임에는 마지막 수가 없어 이 방법을 쓸 수 없다. 결정성은 승리 조건이 위상적으로 단순하면 $\mathsf{ZFC}$ 에서 증명되고, 조건이 복잡해질수록 더 강한 공리가 있어야 증명된다.

# 직관

틱택토처럼 유한 번에 끝나는 게임은 마지막 수부터 거꾸로 올라가며 각 위치의 승패를 정하면 어느 한쪽에 필승 전략이 있다. 두 사람이 번갈아 $0$ 과 $1$ 을 끝없이 내놓아 무한 수열을 만드는 게임에는 마지막 수가 없으므로 이 귀납을 시작할 자리가 없다.

승리 조건이 유한 단계에서 판정되는 경우는 유한 게임으로 돌아간다. 이긴 수열의 모임이 "처음 세 항이 $0,1,0$ 이다" 라면 세 수를 낸 시점에 승패가 정해지고 그 뒤의 수는 결과를 바꾸지 못하므로, 세 번째 수까지의 유한 게임에 역방향 귀납을 적용하면 된다. 이긴 수열의 모임이 유한 단계의 판정들의 합집합으로 쓰이는 경우가 Baire 공간(Baire space) $\mathbb N^{\mathbb N}$ 의 열린집합이고, 열린집합에서는 이 논법이 그대로 돌아간다.

# 정의

## 무한 게임

$A\subseteq\mathbb N^{\mathbb N}$ 에 대해 게임 $G(A)$ 를 다음으로 둔다. 두 참가자 I 과 II 가 번갈아 자연수를 내놓아 $a_0,a_1,a_2,\dots$ 를 만들고, I 이 짝수 번째를 낸다. 결과 수열이 $A$ 에 들면 I 이, 들지 않으면 II 가 이긴다.

직관 절의 예는 $A$ 가 처음 세 항이 $0,1,0$ 인 수열 전체인 게임이다. I 이 $a_0$ 과 $a_2$ 를, II 가 $a_1$ 을 내므로 II 가 $a_1=2$ 를 내면 결과 수열은 $A$ 에 들지 않는다.

## 전략

**전략(strategy)** 은 유한 수열에 자연수를 대응시키는 함수 $\sigma$ 다. I 이 $\sigma$ 를 따른다는 것은 $a_{2n}=\sigma(a_0,\dots,a_{2n-1})$ 로 둔다는 뜻이고, II 가 $\tau$ 를 따른다는 것은 $a_{2n+1}=\tau(a_0,\dots,a_{2n})$ 로 둔다는 뜻이다. $\sigma$ 가 I 의 **필승 전략(winning strategy)** 이라는 것은 II 가 어떻게 응수하든 결과 수열이 $A$ 에 든다는 것이다. II 의 필승 전략도 같은 방식으로 정의한다.

위 예에서 길이 $1$ 인 수열에 $2$ 를, 그 밖의 유한 수열에 $0$ 을 대응시키는 $\tau$ 는 II 의 필승 전략이다. I 이 무엇을 내든 $a_1=2\ne 1$ 이므로 결과 수열이 $A$ 에 들지 않는다.

## 결정성

$G(A)$ 가 **결정된다(determined)** 는 것은 I 이나 II 에게 필승 전략이 있다는 것이다. 위 예의 게임은 II 에게 필승 전략이 있으므로 결정된다. 집합족 $\Gamma$ 에 대해 $\Gamma$-결정성은 $\Gamma$ 에 속하는 모든 $A$ 에서 $G(A)$ 가 결정된다는 명제다. $\Gamma$ 가 열린집합 전체이면 열린 결정성(open determinacy)이고, $\mathbb N^{\mathbb N}$ 의 부분집합 전체이면 이 명제를 **결정성 공리(axiom of determinacy)** $\mathsf{AD}$ 라 한다.

# 성질

## Gale–Stewart 정리

Gale–Stewart 정리(Gale–Stewart theorem)는 다음이다. $A$ 가 Baire 공간 $\mathbb N^{\mathbb N}$ 에서 열린집합이면 $G(A)$ 가 결정된다[^1].

증명의 요지는 다음과 같다. I 에게 필승 전략이 없다고 하자. 유한 수열 $p$ 를 두고 $p$ 다음부터 시작하는 게임에서 I 에게 필승 전략이 없는 경우를 $p$ 가 좋다고 부른다. 빈 수열은 좋다. $p$ 가 좋고 I 이 $a$ 를 내면, $p\frown a\frown b$ 가 좋은 $b$ 가 있다. 그렇지 않으면 모든 $b$ 에서 I 이 이기므로 $p$ 에서 I 에게 필승 전략이 생긴다. II 가 이 $b$ 를 고르는 전략을 따르면 게임의 모든 유한 시작 조각이 좋다. 결과 수열이 $A$ 에 든다면 $A$ 가 열린집합이므로 어떤 유한 조각에서 이미 결과가 정해져 그 조각에서 I 이 이기고, 좋다는 성질에 어긋난다.

## 선택공리와의 충돌

$\mathsf{ZFC}$ 에서 결정되지 않는 $A$ 가 있다. 전략이 연속체 개이므로 전략 전체를 길이 $2^{\aleph_0}$ 으로 줄 세우고, 초한귀납으로 단계마다 그 전략이 지는 수열 하나를 $A$ 에 넣거나 $A$ 밖에 두면 어느 전략도 필승이 아니다. 따라서 $\mathsf{AD}$ 는 $\mathsf{ZF}$ 에 종속선택(dependent choice)만 더한 체계에서 묻는다.

## 결정성에서 오는 정칙성

$\mathsf{ZF}+\mathsf{AD}$ 에서 $\mathbb R$ 의 모든 부분집합이 Lebesgue [가측](measurable-functions.md)이고, 셀 수 없는 모든 집합이 완전집합(perfect set)을 포함한다. 비가측 집합을 만드는 [Vitali 집합](vitali-set.md)의 구성은 선택공리를 쓰므로 이 체계에서 통하지 않는다.

## 큰 기수에서 오는 결정성

측도 가능 기수(measurable cardinal)가 있으면 해석적 집합(analytic set)의 결정성이 성립한다[^2]. [큰 기수](large-cardinals.md)의 세기를 올리면 결정성이 성립하는 집합족도 넓어진다. [Woodin 기수](large-cardinal-hierarchy.md)가 $n$ 개 있고 그 위에 측도 가능 기수가 있으면 $\mathbf\Pi^1_{n+1}$ 집합이 결정되고, Woodin 기수가 무한히 많으면 [사영 계층](projective-hierarchy.md)의 집합 전체가 결정된다[^3]. 무한히 많은 Woodin 기수 위에 측도 가능 기수가 있으면 $L(\mathbb R)$ 에서 $\mathsf{AD}$ 가 성립한다[^4].

# 활용

- 무모순성 강도(consistency strength)의 순서: $\mathsf{ZF}+\mathsf{AD}$ 의 무모순성 강도가 Woodin 기수 무한 개를 갖는 $\mathsf{ZFC}$ 와 같다. 큰 기수의 세기 순서에서 결정성이 한 단계를 차지한다.
- 사영집합의 성질: 사영 결정성(projective determinacy) 아래에서 사영집합이 Lebesgue 가측이고 완전집합 성질과 균일화 성질(uniformization property)을 갖는다. 고전 기술적 집합론이 해석적 집합까지만 얻은 결과가 사영 계층 전체로 올라간다.
- $L(\mathbb R)$ 의 구조: $L(\mathbb R)$ 에서 $\mathsf{AD}$ 가 성립하면 그 모형 안의 기수 구조가 $\mathsf{AD}$ 의 귀결로 정해진다. 선택공리가 없는 모형을 큰 기수로 통제하는 표준 사례다.
- 게임 논법: 집합의 성질을 게임의 승패로 바꿔 증명하는 방식에 쓰인다. 어느 쪽에 필승 전략이 있는지를 따져 성질을 얻는 논법이 결정성을 전제한다.

[^1]: D. Gale, F. M. Stewart, *Infinite games with perfect information*, in: Contributions to the Theory of Games II, Annals of Mathematics Studies **28**, Princeton University Press, 1953, 245–266.
[^2]: D. A. Martin, *Measurable cardinals and analytic games*, Fundamenta Mathematicae **66** (1970), 287–291.
[^3]: D. A. Martin, J. R. Steel, *A proof of projective determinacy*, Journal of the American Mathematical Society **2** (1989), 71–125.
[^4]: A. Kanamori, *The Higher Infinite*, 2nd ed., Springer, 2003, 32 절.

# 연관 문서

## 선수지식

- [큰 기수](large-cardinals.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #logic #foundations
