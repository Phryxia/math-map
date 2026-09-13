# 직관주의 논리의 Kripke 의미론

Kripke 의미론은 정보가 늘어나는 상태들을 부분순서로 놓고 직관주의 명제가 어느 상태에서 정당화되는지 해석한다.

## 정의

Kripke frame은 상태들의 부분순서집합 W다. 순서 w≤v는 v가 w보다 더 많은 정보를 가진 미래 상태라는 뜻이다. 각 원자명제 p가 참인 상태들은 위로 닫혀야 한다.

$$
w\Vdash p\ \text{이고}\ w\le v\quad\Longrightarrow\quad v\Vdash p
$$

논리연결사의 forcing 관계는 다음처럼 정한다. 논리곱과 논리합은 현재 상태에서 각각 두 증명 또는 한쪽 증명을 요구한다. 함의는 현재 이후의 모든 상태를 검사한다.

$$
w\Vdash A\to B
\quad\Longleftrightarrow\quad
\forall v\ge w\,(v\Vdash A\Rightarrow v\Vdash B)
$$

어떤 상태도 모순 ⊥를 force하지 않으며, 부정은 A→⊥로 해석한다.

## 성질

모든 논리식은 persistence를 만족한다. 즉 w에서 force된 식은 더 큰 정보 상태 v에서도 force된다. 원자명제에서는 모형의 조건이고, 복합식에서는 구조적 귀납으로 증명한다. 함의의 경우 v 이후의 상태들은 w 이후의 상태들이기도 하다.

두 상태 w₀≤w₁만 있고 원자명제 p가 w₁에서만 force되는 모형을 생각하자. w₀에서는 p가 아직 force되지 않는다. 또한 미래 w₁이 p를 force하므로 w₀는 p→⊥도 force하지 않는다. 따라서 w₀에서 다음 배중률은 force되지 않는다.

$$
p\lor\neg p
$$

이는 배중률의 부정을 증명한 것이 아니라, 배중률이 모든 직관주의 Kripke 모형에서 타당하지 않음을 보인 반례다.

## 활용

직관주의 논리에서 어떤 식이 증명되지 않는지 반모형으로 보이고, 지식·계산 단계가 늘어날수록 이미 얻은 증명이 보존된다는 구성을 표현한다. Heyting algebra 의미론과 함께 직관주의 논리의 soundness와 completeness를 연구하는 표준 도구다.

## 기타 참고 문헌

- [Stanford Encyclopedia of Philosophy, Intuitionistic Logic](https://plato.stanford.edu/entries/logic-intuitionistic/): §5의 Kripke 의미론, persistence 조건과 forcing 절.

# 연관 문서

## 선수지식

- [직관주의 논리](intuitionistic-logic.md)
- [부분순서](partial-orders.md)

## 더 알아보기

- [Heyting algebra](heyting-algebras.md)
