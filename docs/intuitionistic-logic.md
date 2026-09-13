# 직관주의 논리

직관주의 논리는 명제의 증명을 그 명제를 확인하는 구성으로 해석하는 형식 추론 체계다.

## 정의

명제 A와 모순을 나타내는 명제 ⊥를 정하자. 부정은 별도 진릿값 연산이 아니라 A에서 모순을 얻는 함의로 정의한다.

$$
\neg A := A\to\bot
$$

직관주의 자연연역은 논리 연결사의 도입·제거 규칙을 사용하지만, 모든 A에 대한 배중률과 이중부정 제거를 일반 규칙으로 채택하지 않는다.

$$
A\lor\neg A
$$

$$
\neg\neg A\to A
$$

존재명제의 증명은 조건을 만족하는 대상을 제시하고 그 조건의 증명을 함께 주어야 한다. 선택명제 A∨B의 증명은 어느 쪽을 택했는지와 선택한 명제의 증명을 준다.

## 성질

임의의 A에서 이중부정 A→¬¬A는 증명된다. A를 가정하고 ¬A도 가정하면 ¬A의 정의에 따라 모순을 얻기 때문이다. 역방향은 일반적으로 증명되지 않는다.

배중률 자체를 쓰지 않아도 그 이중부정은 증명할 수 있다.

$$
\neg\neg(A\lor\neg A)
$$

증명 핵심은 A∨¬A가 모순을 낳는다고 가정하는 것이다. A를 가정하면 왼쪽 선택으로 모순이므로 ¬A를 얻고, 이 ¬A를 오른쪽 선택으로 쓰면 다시 모순이다.

배중률을 일반 정리로 인정하지 않는 것과 그 부정을 주장하는 것은 다르다. 자연수의 짝수 여부처럼 판정 절차가 있는 명제 A에는 A∨¬A를 구성할 수 있다.

직관주의 명제논리는 고전 명제논리보다 증명 가능한 식이 적지만 모순을 허용하는 체계는 아니다. 직관주의적으로 증명한 명제는 고전논리에서도 증명된다.

## 활용

존재 증명에서 실제 witness를 추출할 수 있는지 구분하고, 프로그램과 증명의 대응을 다루는 type theory와 proof assistant의 논리 기반을 제공한다. 고전 정리를 사용할 때 어느 단계가 배중률이나 이중부정 제거에 의존하는지도 추적할 수 있다.

## 기타 참고 문헌

- [Stanford Encyclopedia of Philosophy, Intuitionistic Logic](https://plato.stanford.edu/entries/logic-intuitionistic/): §1–2의 형식 체계와 고전논리와의 관계.
- [Stanford Encyclopedia of Philosophy, Intuitionism in the Philosophy of Mathematics](https://plato.stanford.edu/entries/intuitionism/): §3.2의 BHK 해석과 배중률 논의.

# 연관 문서

## 선수지식

- [명제와 증명](proofs.md)
- [수학적 직관주의](mathematical-intuitionism.md)

## 더 알아보기

- [직관주의 논리의 Kripke 의미론](kripke-semantics.md)

#logic
