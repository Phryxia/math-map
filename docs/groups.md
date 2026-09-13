# 군

군은 합성할 수 있고 항상 되돌릴 수 있는 연산을 추상화한 구조다.

## 정의

G를 집합, 곱으로 표기하는 이항연산을 G의 원소 두 개에서 G의 원소 하나로 가는 함수로 정하자. a, b, c를 G의 임의의 원소라 하자.

군의 공리는 결합법칙, 항등원 e의 존재, 각 원소 a의 역원 존재다.

$$
\begin{aligned}
(ab)c&=a(bc)\\
ea&=ae=a\\
a^{-1}a&=aa^{-1}=e
\end{aligned}
$$

교환법칙은 군의 공리가 아니다. 모든 a, b에 대해 다음까지 성립하면 가환군이라 한다.

$$
ab=ba
$$

## 성질

정수 전체와 덧셈은 군이다. 항등원은 0이고 정수 a의 역원은 -a다. 자연수 전체와 덧셈은 양의 원소의 덧셈 역원이 없어 군이 아니다.

항등원과 각 역원은 유일하다. 항등원이 e와 f 두 개라면 ef는 한쪽 정의로 f이고 다른 쪽 정의로 e이므로 같다.

군에서는 소거가 가능하다. 같은 원소를 왼쪽에 곱한 결과가 같으면 역원을 왼쪽에 곱하여 원래 원소가 같음을 얻는다.

$$
ab=ac\Rightarrow a^{-1}(ab)=a^{-1}(ac)\Rightarrow b=c
$$

합성의 역원에서는 순서가 뒤집힌다.

$$
(ab)^{-1}=b^{-1}a^{-1}
$$

정사각형을 보존하는 회전과 반사는 합성 아래 군을 이룬다. 회전한 뒤 반사하는 것과 반사한 뒤 회전하는 것은 일반적으로 다르므로 비가환군의 예가 된다.

## 활용

대칭, 가역적인 상태 변화, 나머지 연산의 구조를 다룬다. 동일한 공리를 만족하는 서로 다른 대상에 하나의 증명을 적용할 수 있다.

부분군은 전체 군 안에서 같은 연산으로 다시 군을 이루는 부분집합이다. 몫군을 만들 때는 동치류만 만드는 것으로 충분하지 않으며, 동치류의 곱이 대표원 선택과 무관해야 한다.

## 기타 참고 문헌

- [Thomas W. Judson, Abstract Algebra: Theory and Applications](https://judsonbooks.org/aata-files/aata-20240706.pdf): Chapter 3, 군의 정의와 예시.
- 항등원 유일성과 소거법칙의 증명은 위에 포함했다. 군 작용·부분군·몫군은 각각 후속 주제로 분리한다.

# 연관 문서

## 선수지식

- [함수](functions.md)
- [명제와 증명](proofs.md)

## 더 알아보기

- [수학적 구조주의](mathematical-structuralism.md)
- [그래프 동형](graph-isomorphism.md)
- [군 작용](group-actions.md)
- [범주](category.md)
- [환](rings.md)
- [Fermat 소정리와 Euler 정리](fermat-euler-theorem.md)
- [기본군](fundamental-group.md)
- [단체 호몰로지](homology.md)

#group_theory
