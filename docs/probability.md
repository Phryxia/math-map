# 유한 확률 공간

유한 확률 공간은 가능한 결과마다 음이 아닌 무게를 주고 전체 무게를 1로 맞춘 모델이다.

## 정의

Ω를 유한하고 비어 있지 않은 결과 집합, ω를 그 원소, p를 결과별 확률을 주는 함수로 정하자.

$$
p:\Omega\to[0,1],\qquad\sum_{\omega\in\Omega}p(\omega)=1
$$

사건 A는 Ω의 부분집합이다. 사건의 확률 P(A)는 그 사건에 들어 있는 결과들의 확률 합이다.

$$
P(A)=\sum_{\omega\in A}p(\omega)
$$

모든 결과가 같은 확률일 때만 사건의 원소 수를 전체 원소 수로 나누어 확률을 계산할 수 있다.

## 성질

A, B를 사건이라 하자. 합집합 확률은 겹친 부분을 한 번 빼서 계산한다.

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
$$

B의 확률이 양수일 때 B가 일어났다는 조건 아래 A의 확률은 다음과 같다.

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
$$

조건부 확률은 가능한 결과를 B로 제한하고 남은 확률 합을 다시 1로 맞춘 것이다.

두 사건이 독립이라는 뜻은 교집합의 확률이 두 확률의 곱과 같다는 것이다.

$$
P(A\cap B)=P(A)P(B)
$$

배반은 교집합이 비는 것이고 독립과 다르다. 양의 확률인 두 사건이 배반이면 한 사건의 발생이 다른 사건을 불가능하게 하므로 독립일 수 없다.

공정한 주사위를 한 번 던질 때 A를 짝수가 나오는 사건, B를 3의 배수가 나오는 사건으로 정하자. 확률은 각각 1/2와 1/3이고 교집합은 6이 나오는 사건으로 확률이 1/6이다. 따라서 이 두 사건은 독립이다. 같은 실험의 사건도 독립일 수 있다.

## 활용

무작위 알고리즘, 유한 상태 모델, 조건에 따른 정보 갱신을 다룬다. 결과 집합을 어떻게 정했는지와 결과들이 같은 확률인지가 계산의 전제다.

연속적인 결과를 다루려면 단순한 유한 합을 넘어 사건들의 집합과 측도를 정해야 한다. 여기서는 그 문제를 포함하지 않는다.

## 기타 참고 문헌

- [MIT, Intro to Discrete Probability](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/mit6_042js15_session28.pdf): 표본 공간과 사건의 확률.
- 합집합 공식은 결과마다 양쪽 합에서 몇 번 세는지 확인하면 증명된다. 조건부 확률과 독립은 같은 모델 안에서 위 정의로 직접 계산할 수 있다.

# 연관 문서

## 선수지식

- [함수](functions.md)

## 더 알아보기

- [Shannon entropy](entropy.md)
- [논문: Graph Sparsification by Effective Resistances](spectral-sparsification.md)
- [Bayes 정리](bayes.md)
- [측도](measure.md)
- [확률변수와 기댓값](random-variables.md)
- [확률적 방법](probabilistic-method.md)

#probability
