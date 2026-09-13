# Yoneda lemma

Yoneda lemma는 대상을 향하는 모든 사상을 자연스럽게 관찰한 정보가 그 대상과 functor의 원소를 완전히 결정한다는 정리다.

## 정의

C를 locally small category, A를 C의 대상이라 하자. A로 향하는 사상들을 모은 contravariant functor를 다음처럼 둔다.

$$
h_A(X)=\operatorname{Hom}_C(X,A)
$$

F를 C의 반대범주에서 Set으로 가는 functor라 하면 Yoneda lemma는 자연변환의 집합과 F(A) 사이에 표준적인 전단사가 있다고 말한다.

$$
\operatorname{Nat}(h_A,F)\cong F(A)
$$

이 대응은 자연변환 α를 항등사상에서 평가하여 α_A(id_A)로 보내며, A와 F 양쪽에 대해 자연스럽다.

## 성질

원소 u∈F(A)가 주어지면 자연변환 α를 복원할 수 있다. 사상 f:X→A에 대해 contravariant functor F가 내놓는 함수 F(f):F(A)→F(X)를 사용한다.

$$
\alpha_X(f)=F(f)(u)
$$

Functor의 합성 보존 법칙 때문에 이 성분들은 naturality를 만족한다. 반대로 u를 α_A(id_A)로 잡으면 자연성에서 모든 f에 대해 위 식이 강제된다. 따라서 대응은 단사이자 전사다.

F 자체가 h_B이면 다음 전단사를 얻는다.

$$
\operatorname{Nat}(h_A,h_B)\cong\operatorname{Hom}_C(A,B)
$$

그러므로 Yoneda embedding은 full이고 faithful하다. 특히 두 대상의 representable functor가 자연동형이면 원래 대상도 동형이다. 다만 각 X에서 집합 h_A(X)와 h_B(X)의 크기만 우연히 같다는 사실로는 부족하며, 모든 사상과 양립하는 자연동형이 필요하다.

## 활용

대상을 내부 원소 대신 다른 대상에서 들어오는 모든 사상의 작용으로 특징짓는다. 보편 성질로 정의한 대상의 유일성을 증명하고, 표현가능 functor를 판정하며, 자연변환의 값을 한 대상의 한 원소로 줄여 계산할 때 사용한다.

## 기타 참고 문헌

- [Emily Riehl, Category Theory in Context](https://emilyriehl.github.io/files/context.pdf): §2.2, Yoneda lemma와 Yoneda embedding의 full faithfulness.

# 연관 문서

## 선수지식

- [자연변환](natural-transformations.md)

## 더 알아보기

- [Adjunction](adjunctions.md)

#category_theory #theorem
