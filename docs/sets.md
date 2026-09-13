# 집합

집합은 어떤 대상들이 들어 있는지를 정하고, 순서와 중복을 구별하지 않는 수학적 대상이다.

## 정의

집합을 A, B로, 대상을 x로 쓰자. x가 A의 원소라는 뜻은 다음과 같다.

$$
x\in A
$$

A의 모든 원소가 B에도 속하면 A는 B의 부분집합이다. 두 집합은 원소가 정확히 같을 때 같다.

$$
A\subseteq B\iff\forall x\,(x\in A\Rightarrow x\in B)
$$

원소가 없는 집합은 공집합이다. 원소가 없는 것과 공집합 하나를 원소로 갖는 것은 다르다.

$$
\varnothing\ne\{\varnothing\}
$$

여기서는 집합을 사용하는 기본 언어를 다룬다. 어떤 조건이든 집합을 만든다고 가정하지는 않는다. 집합의 존재를 제어하는 공리 체계는 별도 주제다.

## 성질

합집합은 어느 쪽에든 속하는 원소, 교집합은 양쪽에 속하는 원소, 차집합은 앞쪽에만 속하는 원소를 모은다.

$$
\begin{aligned}
A\cup B&=\{x:x\in A\text{ or }x\in B\}\\
A\cap B&=\{x:x\in A\text{ and }x\in B\}\\
A\setminus B&=\{x:x\in A\text{ and }x\notin B\}
\end{aligned}
$$

예를 들어 A를 1과 3의 집합, B를 3과 5의 집합으로 정하면 교집합은 3만 포함하고 합집합은 1, 3, 5를 포함한다. 숫자를 적는 순서를 바꾸거나 3을 두 번 적어도 집합은 변하지 않는다.

멱집합은 주어진 집합의 모든 부분집합을 모은 집합이다. 0 이상의 정수 n을 A의 원소 수라고 할 때 유한 집합의 멱집합 크기는 다음과 같다.

$$
|\mathcal P(A)|=2^n
$$

각 원소를 넣거나 빼는 두 선택을 독립적으로 하기 때문이다. 빈 부분집합과 A 자체도 센다.

## 활용

함수의 입력 범위, 확률에서 가능한 결과, 그래프의 정점들을 지정한다. 집합 연산은 조건을 결합하고 분리하는 계산이 된다.

순서가 중요하면 수열이나 순서쌍을, 같은 값의 출현 횟수가 중요하면 multiset을 사용해야 한다. 집합으로 바꾸면 그 정보는 사라진다.

## 기타 참고 문헌

- [OpenStax, Basic Set Concepts](https://openstax.org/books/contemporary-mathematics/pages/1-1-basic-set-concepts): 원소·부분집합·공집합의 기초 설명.
- 멱집합 크기의 증명은 위의 원소별 두 선택으로 완결된다. 집합 연산은 등식은 임의의 원소가 양쪽에 속할 조건이 같은지 확인해서 증명할 수 있다.

# 연관 문서

## 선수지식

없음.

## 더 알아보기

- [함수](functions.md)
- [동치관계와 동치류](relations.md)
- [그래프](graphs.md)
- [셈의 기본 원리](counting-principles.md)
- [1차 논리](first-order-logic.md)
- [수학적 플라톤주의](mathematical-platonism.md)
- [ZFC 공리계](zfc-axioms.md)
- [Boolean algebra](boolean-algebras.md)

#set_theory
