# 자연변환

자연변환은 두 functor가 각 대상에서 내놓는 결과를 사상과 양립하도록 비교한다.

## 정의

C와 D를 범주라 하고, F와 G를 C에서 D로 가는 functor라 하자. 자연변환 α:F⇒G는 C의 각 대상 c에 D의 사상 α_c:F(c)→G(c)를 지정한다.

C의 모든 사상 f:c→c'에 대해 다음 naturality 조건을 요구한다. 왼쪽은 F(f)를 먼저 적용하고 α의 c' 성분을 적용한 합성이고, 오른쪽은 α의 c 성분을 먼저 적용하고 G(f)를 적용한 합성이다.

$$
\alpha_{c'}\circ F(f)=G(f)\circ\alpha_c
$$

즉 대상마다 임의의 사상을 고르는 것이 아니라, C의 모든 사상에 대한 사각형이 가환해야 한다.

## 성질

각 성분이 항등사상인 모음은 F에서 F로 가는 자연변환이다. α:F⇒G와 β:G⇒H가 자연변환이면 대상 c에서 (β∘α)_c=β_c∘α_c로 정의한 성분별 합성도 자연변환이다. 두 naturality 등식을 이어 붙이면 합성의 naturality가 바로 나온다.

모든 성분 α_c가 동형사상이면 α를 자연동형이라 한다. 성분별 역 α_c^{-1}도 naturality 조건을 만족하므로 G⇒F인 역 자연변환을 이룬다.

집합 X를 멱집합 P(X)로 보내고 함수 h의 직접상으로 사상을 보내는 functor P를 생각하자. 함수 η_X:X→P(X)를 η_X(x)={x}로 두면 다음 등식 때문에 항등 functor에서 P로 가는 자연변환이 된다.

$$
P(h)(\eta_X(x))=\{h(x)\}=\eta_Y(h(x))
$$

반대로 유한차원 벡터 공간 V와 쌍대공간 V* 사이의 동형은 기저 선택에 의존하며 일반 선형사상과 양립하지 않아 자연동형이 아니다.

## 활용

같은 입력 범주에서 나온 두 구성이 사상까지 일관되게 대응하는지 표현한다. Functor들을 대상으로, 자연변환들을 사상으로 모아 functor category를 만들 수 있으며, 범주의 동치·adjunction·Yoneda lemma를 서술하는 기본 단위가 된다.

## 기타 참고 문헌

- [Emily Riehl, Category Theory in Context](https://emilyriehl.github.io/files/context.pdf): §1.4, Definition 1.4.1·1.4.3과 Example 1.4.4. 자연변환, 자연동형, singleton 및 double-dual 예시.

# 연관 문서

## 선수지식

- [Functor](functors.md)

## 더 알아보기

- [Yoneda lemma](yoneda-lemma.md)
- [Adjunction](adjunctions.md)
