# 증명

# 개요

**증명(proof)** 은 가정에서 결론이 따라온다는 것을 정해진 추론 규칙만으로 확인하는 논증이다. 두 홀수의 합이 짝수라는 주장은 $1+3$ , $5+7$ , $9+11$ 을 아무리 많이 계산해도 모든 홀수 쌍에 대해 확인되지 않는다. 증명은 두 홀수를 $2k+1$ , $2l+1$ 로 적고 합이 $2(k+l+1)$ 임을 보여, 무한히 많은 경우를 유한한 줄 수로 한꺼번에 처리한다.

# 직관

$n^2+n+41$ 에 $n=0,1,2,\dots$ 를 넣으면 $41, 43, 47, 53, \dots$ 이 나오고, $n=39$ 까지 마흔 개가 전부 소수다. 그런데 $n=40$ 이면 $40^2+40+41=1681=41^2$ 이다. 마흔 번 확인한 것으로는 마흔한 번째를 알 수 없었다.

두 홀수의 합이 짝수라는 주장도 사례를 세어서는 끝나지 않는다. 홀수는 $2k+1$ 꼴의 정수이므로 두 홀수를 $2k+1$, $2l+1$ 로 쓰면 합은 $2k+2l+2=2(k+l+1)$ 이고, $k+l+1$ 이 정수이므로 짝수다. 이 계산은 $k$, $l$ 이 무엇이든 같아서 모든 홀수 쌍을 한 줄로 처리한다.

이 계산의 각 줄은 홀수와 짝수의 정의, 덧셈과 곱셈의 분배법칙처럼 이미 받아들인 것에서 나온다. 받아들인 것에서 허용된 규칙만으로 결론까지 가는 이런 논증이 증명이다. 아래에서는 배중률(law of excluded middle)을 허용하는 고전논리(classical logic)를 쓴다. 배중률을 공리로 두지 않는 체계는 [직관주의](intuitionism.md)가 다룬다.

# 정의

## 명제와 연결사

**명제(proposition)** 는 참 또는 거짓 하나로 판정되는 문장이다. "$6$ 은 짝수다" 는 참인 명제다. "$x$ 는 짝수다" 는 $x$ 가 남아 있어 참거짓이 정해지지 않는 조건이고, 변수의 범위와 한정사를 정해야 명제가 된다. 명제를 잇는 "그리고", "또는", "아니다", "이면" 을 연결사(connective)라 하고, "이면" 으로 이은 것을 함의(implication)라 한다.

$$
P\Rightarrow Q
$$

$P$ 가 거짓이면 함의 전체가 참이다. "$n$ 이 $4$ 의 배수이면 $n$ 은 짝수다" 는 $n=8$ 에서 $P$ 와 $Q$ 가 모두 참이라 참이고, $n=6$ 에서 $P$ 가 거짓이라 참이며, $n=3$ 에서도 $P$ 가 거짓이라 참이다. 그러므로 함의가 참이라는 사실만으로 $P$ 나 $Q$ 가 참이라고 결론지을 수 없고, $Q$ 가 참이라는 것과 $P \Rightarrow Q$ 가 참이라는 것도 다른 진술이다. 공집합에 대한 모든 전칭명제가 참인 것도 이 규칙의 결과다.

## 한정사

변수 $x$ 의 범위를 [집합](sets.md) $A$ 로 정하고 $P(x)$ 를 조건이라 하자. "모든" 을 뜻하는 $\forall$ 와 "어떤" 을 뜻하는 $\exists$ 를 한정사(quantifier)라 하고, 각각 붙인 명제를 전칭명제와 존재명제라 한다.

$$
\forall x\in A\thickspace P(x),\qquad \exists x\in A\thickspace P(x)
$$

$\forall x\in\lbrace 1,3,5\rbrace\thickspace(x\text{ 는 홀수})$ 는 참이고, $\exists x\in\lbrace 1,3,5\rbrace\thickspace(x\gt 4)$ 는 $x=5$ 로 참이다.

부정은 한정사를 뒤집는다. $\neg\forall x\thinspace P(x)$ 는 $\exists x\thinspace \neg P(x)$ 이고, $\neg\exists x\thinspace P(x)$ 는 $\forall x\thinspace \neg P(x)$ 다. 그래서 전칭명제는 반례 하나로 반박되고 존재명제는 모든 경우를 배제해야 반박된다.

## 한정사의 순서

순서를 바꾸면 뜻이 달라진다. "각 자연수마다 그보다 큰 자연수가 있다" 는 참이지만 "모든 자연수보다 큰 자연수가 있다" 는 거짓이다.

$$
\forall n\thinspace\exists m\thickspace(m\gt n)\quad\text{참},\qquad \exists m\thinspace\forall n\thickspace(m\gt n)\quad\text{거짓}
$$

앞쪽은 $n$ 마다 다른 $m$ 을 골라도 되고 뒤쪽은 공통의 $m$ 하나를 요구한다. 해석학의 $\varepsilon\text{-}\delta$ 정의, [균등연속](uniform-continuity.md)과 연속의 차이, [균등수렴](uniform-convergence.md)과 점별수렴의 차이가 모두 이 순서 하나에 달려 있다.

# 성질

## 기본 기법

- 직접증명(direct proof). 가정에서 정의와 이미 증명된 정리를 적용해 결론에 도달한다.
- 대우증명(proof by contraposition). 고전논리에서 다음이 성립하므로 어느 쪽을 증명해도 된다.

$$
(P\Rightarrow Q)\iff(\neg Q\Rightarrow\neg P)
$$

예로 $n^2$ 이 홀수이면 $n$ 도 홀수라는 명제를 든다. 대우를 취해 $n = 2k$ 라 하면 $n^2 = 4k^2 = 2(2k^2)$ 이므로 $n^2$ 도 짝수다. 대우 쪽은 정의를 한 번 펼치면 끝난다.

- 귀류법(proof by contradiction). $P$ 와 $\neg Q$ 를 함께 가정해 모순을 얻는다. $\sqrt2$ 가 [무리수](irrational-numbers.md)임을 보이는 고전적 논증이 이 형태다.
- 경우 나누기(proof by cases). 가능한 상황을 빠짐없이 나누고 각각에서 결론을 얻는다. 나눔이 전체를 덮는지 반드시 확인해야 한다.
- [수학적 귀납법](mathematical-induction.md). 기저 단계와 귀납 단계를 보인다. 강한 귀납법은 $n$ 미만 전부를 가정하며, 자연수의 정렬성과 동치다. [서수](ordinals.md)로 확장하면 초한귀납법이 된다.
- 구성과 존재. 존재명제는 대상을 실제로 만들어 보이거나, 존재하지 않는다고 가정해 모순을 얻어 증명한다. 후자는 대상을 알려 주지 않는다. [확률적 방법](probabilistic-method.md)이 그런 비구성적 증명의 대표적인 기법이다.

## 흔한 오류

- 역과 혼동. $P \Rightarrow Q$ 를 보이고 $Q \Rightarrow P$ 를 썼다고 여기는 것. 동치를 주장하려면 양방향을 각각 증명해야 한다.
- 순환 논증(circular reasoning). 결론을 증명 도중에 이미 참인 것으로 쓰는 것.
- 한정사 범위의 미끄러짐. $n$ 에 의존해 고른 값을 $n$ 과 무관한 상수처럼 쓰는 것. 해석학 증명에서 가장 흔한 실수다.
- 예시에 의한 전칭 주장. 유한한 확인은 반례를 찾는 데는 결정적이지만 전칭명제를 확정하지 못한다. 직관 절의 $n^2 + n + 41$ 이 그 예다.

## 형식 증명과 사람의 증명

형식 증명은 모든 단계를 정해진 문법과 추론 규칙으로 적어 기계가 검사할 수 있다. 사람이 쓰는 증명은 확인 가능한 중간 단계를 생략하지만, 가정을 슬쩍 바꾸거나 결론을 전제로 쓰는 것은 생략이 아니라 오류다. 형식 증명의 문법과 추론 규칙을 정하는 체계가 [1차 논리](first-order-logic.md)이고, 증명을 프로그램에 대응시키는 것이 [Curry–Howard 대응](curry-howard.md)이다. 무모순인 공리계에서 증명할 수 없는 참인 문장의 존재는 [Gödel 불완전성 정리](godel-incompleteness.md)가 보인다.

# 활용

## 정의의 전개

증명의 첫 단계는 정의를 기호로 펼쳐 쓰는 것이다. [연속성](continuity.md)의 $\varepsilon\text{-}\delta$ 정의에서 합성함수의 연속성을 얻는 논증, [극한](limits.md)의 정의에서 극한의 유일성을 얻는 논증이 그 형태다. 정리를 적용할 때는 가정을 하나씩 확인한다.

## 알고리즘의 정확성

반복문 불변식은 귀납법이고, 재귀 함수의 정확성 증명은 강한 귀납법이며, 종료 증명은 정렬성 논증이다. 프로그램이 "대체로 잘 도는 것" 과 "모든 입력에서 명세를 만족하는 것" 의 차이가 곧 예시와 증명의 차이다.[^1]

## 증명의 한계

어떤 명제는 주어진 공리계에서 참도 거짓도 증명할 수 없고([연속체 가설](continuum-hypothesis.md)), 어떤 문제는 알고리즘으로 판정할 수 없다([계산 가능성](computability.md)). 이 경계를 다루려면 증명 자체를 수학적 대상으로 삼아야 한다. 수리논리학(mathematical logic)이 그 일을 한다.

[^1]: MIT, *Mathematics for Computer Science*, Chapter 1.1–1.6. 직접증명, 대우, 귀류법의 도입과 흔한 오류. https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_session1/

# 연관 문서

## 선수지식

없음.

## 더 알아보기

### 논리와 기초

- [수학기초론 개관](foundations-overview.md)
- [계산 개관](computation-overview.md)
- [1차 논리](first-order-logic.md)
- [직관주의](intuitionism.md)
- [수학적 플라톤주의](mathematical-platonism.md)

### 증명 기법의 대표 사례

- [수학적 귀납법](mathematical-induction.md)
- [비둘기집 원리](pigeonhole-principle.md)
- [기수](cardinality.md)

#logic #foundations
