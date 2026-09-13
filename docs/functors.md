# Functor

Functor는 대상과 사상을 함께 옮기면서 항등사상과 합성을 보존하는 범주 사이의 대응이다.

## 정의

C와 D를 범주라 하자. Functor F는 C의 대상 A를 D의 대상 F(A)로, 사상 f:A→B를 사상 F(f):F(A)→F(B)로 보낸다.

C에서 합성 가능한 사상 f와 g에 대해 다음을 요구한다.

$$
F(g\circ f)=F(g)\circ F(f),\qquad
F(\mathrm{id}_A)=\mathrm{id}_{F(A)}
$$

여기서는 사상 방향을 유지하는 covariant functor를 다룬다. 대상만 어떻게 보내는지 정하는 것으로는 충분하지 않다.

## 성질

실수 벡터 공간을 그 바탕 집합으로, 선형사상을 같은 함수로 보내는 대응은 functor다. 합성과 항등사상은 그대로 유지하면서 벡터 연산 구조를 잊는다.

부분순서 집합을 범주로 보면 순서를 보존하는 함수가 functor다. A≤B가 F(A)≤F(B)를 보장해야 원래 사상에 대응하는 사상을 보낼 수 있다.

Functor는 동형사상을 보존한다. f의 역을 g라 하면 다음처럼 F(g)가 F(f)의 역이 된다.

$$
F(g)\circ F(f)=F(g\circ f)=F(\mathrm{id}_A)=\mathrm{id}_{F(A)}
$$

반대 순서의 합성도 항등사상이다. 그러나 F(f)가 동형이라고 f가 동형인 것은 아니다. 대상 하나와 항등사상 하나만 있는 범주로 모든 것을 보내면 원래의 비가역 사상도 항등사상으로 바뀐다.

## 활용

대수·기하의 구성을 합성 가능한 사상까지 포함해 다루고, 어느 정보가 다른 범주로 이동할 때 보존되는지 분석한다. 같은 대상 대응도 사상 대응을 다르게 정하면 서로 다른 functor가 될 수 있다.

## 기타 참고 문헌

- [The Stacks Project, Definition 4.2.8, tag 001B](https://stacks.math.columbia.edu/tag/001B): 대상·사상 대응과 합성·항등 보존 조건.
- 동형 보존은 합성과 항등사상 보존 공리에서 위처럼 직접 따라온다. Functor 사이의 대응인 자연변환은 별도 주제로 다룬다.

# 연관 문서

## 선수지식

- [범주](category.md)
- [선형사상](linear-maps.md)

## 더 알아보기

- [자연변환](natural-transformations.md)
