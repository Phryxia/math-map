# 서수와 초한귀납법

# 개요

서수(ordinal)는 "몇 번째"를 무한까지 확장한 개념이다. 자연수의 수학적 귀납법을 임의의 정렬순서로 확장하면 초한귀납법(transfinite induction)과 초한재귀(transfinite recursion)가 되고, 이 두 도구가 집합론에서 쌓아 올리는 거의 모든 구성의 골격이 된다.

폰 노이만의 정의는 서수를 "자기보다 작은 서수 전체의 집합"으로 잡아, 순서 관계를 원소 관계와 일치시킨다. 이 덕분에 서수는 [ZFC 공리계](zfc-axioms.md) 안의 구체적인 집합이고, 서수 사이의 비교는 원소 판정으로 환원된다.

기수(cardinal)가 "크기"를 재는 것과 달리 서수는 "배열 방식"을 잰다. 같은 가산 크기에 서로 다른 서수가 무수히 많다.

# 직관

정렬순서는 "공집합이 아닌 부분집합마다 최솟값이 있는" 전순서다. 자연수 순서가 그렇고, 정수 전체 순서는 그렇지 않다.

자연수를 다 쓴 뒤에도 "다음"을 계속 붙일 수 있다.

$$
0,1,2,\dots\ \to\ \omega,\ \omega+1,\ \omega+2,\dots\ \to\ \omega\cdot 2,\ \dots\ \to\ \omega^2,\ \dots\ \to\ \omega^\omega,\ \dots
$$

omega는 앞에 바로 오는 원소가 없다. 이런 서수를 극한 서수라 하고, 어떤 서수의 후속자인 것을 후속 서수라 한다. 초한귀납법은 이 두 경우를 나누어 처리한다.

유용한 비유: 자연수 귀납법이 사다리를 한 칸씩 오르는 것이라면, 초한귀납법은 사다리를 다 오른 뒤 "그 위의 발판"으로 올라서는 단계를 추가한 것이다. 정렬성은 반례들 중 최소 반례를 고를 수 있음을 보장하며, 이것이 증명의 핵심이다.

# 정의

집합 A와 그 위의 관계가 [부분순서](partial-orders.md)이면서 전순서이고, A의 공집합이 아닌 모든 부분집합이 최솟값을 가지면 정렬순서(well-order)라 한다.

$$
\forall B\subseteq A\ \bigl(B\neq\varnothing \to \exists m\in B\ \forall b\in B\ (m\le b)\bigr)
$$

집합 x가 transitive라는 것은 원소의 원소가 다시 원소라는 뜻이다.

$$
\forall y\,(y\in x \to y\subseteq x)
$$

## 폰 노이만 서수

서수는 transitive이고 원소 관계로 정렬된 집합이다[^1].

$$
\mathrm{Ord}(\alpha)\ :\iff\ \alpha \text{ 는 transitive}\ \wedge\ (\alpha,\in) \text{ 는 정렬순서}
$$

이 정의에서 다음이 성립한다.

$$
0=\varnothing,\quad \alpha+1=\alpha\cup\{\alpha\},\quad \alpha<\beta \iff \alpha\in\beta,\quad \alpha=\{\,\beta : \beta<\alpha\,\}
$$

서수의 집합 S에 대해 합집합은 상한이 된다. 0이 아니고 후속 서수도 아닌 서수, 즉 자기 미만 전체의 합집합과 같은 서수를 극한 서수라 한다.

$$
\sup S=\bigcup S,\qquad \lambda \text{ 극한} \iff \lambda\neq 0 \wedge \lambda=\bigcup\lambda
$$

최소의 무한 극한 서수가 omega, 즉 폰 노이만 자연수 전체다.

## 서수 산술

$$
\alpha+0=\alpha,\quad \alpha+(\beta+1)=(\alpha+\beta)+1,\quad \alpha+\lambda=\sup_{\beta<\lambda}(\alpha+\beta)
$$

$$
\alpha\cdot 0=0,\quad \alpha\cdot(\beta+1)=\alpha\cdot\beta+\alpha,\quad \alpha^{0}=1,\quad \alpha^{\beta+1}=\alpha^{\beta}\cdot\alpha
$$

극한 단계에서는 곱과 거듭제곱도 상한으로 정의한다. 의미론적으로 덧셈은 두 정렬순서를 이어 붙인 것, 곱셈은 사전식 순서를 준 곱의 순서형이다.

# 성질

## 기본 정리

- 서수의 원소는 서수다. 두 서수는 항상 비교 가능하고, 서수 전체는 원소 관계로 정렬된다.
- 서수 전체의 모임은 집합이 아니다. 집합이라면 그 자신이 서수가 되어 자기 자신의 원소가 되고, 정칙성에 모순이다(Burali-Forti 역설).
- 모든 정렬순서 집합은 정확히 하나의 서수와 순서 동형이다. 그 서수를 순서형(order type)이라 한다. 증명은 최솟값부터 서수를 차례로 대응시키는 초한재귀이며, 치환 공리를 사용한다.

## 초한귀납법

서수의 성질 P에 대해, "모든 beta 미만에서 P가 성립하면 alpha에서 P가 성립한다"가 모든 alpha에 대해 참이면 P는 모든 서수에서 성립한다[^2].

$$
\forall\alpha\,\bigl(\forall\beta<\alpha\ P(\beta)\ \to\ P(\alpha)\bigr)\ \Longrightarrow\ \forall\alpha\ P(\alpha)
$$

증명: P가 거짓인 서수가 있다고 하자. 그중 하나를 gamma라 하면 gamma+1의 원소 중 P가 거짓인 것들의 집합은 공집합이 아니고, 정렬성에 의해 최소 원소 alpha를 갖는다. alpha 미만에서는 P가 성립하므로 가정에 의해 alpha에서도 성립하고, 모순이다.

실무에서는 0 단계, 후속 단계, 극한 단계 셋으로 나누어 확인하는 형태를 더 많이 쓴다.

## 초한재귀

각 단계에서 이전 값 전체를 받아 다음 값을 주는 규칙 G가 주어지면, 모든 서수에서 정의된 유일한 함수 F가 존재한다.

$$
F(\alpha)=G\bigl(F\upharpoonright\alpha\bigr)
$$

이것이 서수 산술, 누적 위계, [선택공리](axiom-of-choice.md)로부터의 정렬 구성 등을 정당화한다. 누적 위계는 다음 재귀로 정의된다.

$$
V_0=\varnothing,\quad V_{\alpha+1}=\mathcal P(V_\alpha),\quad V_\lambda=\bigcup_{\alpha<\lambda}V_\alpha
$$

정칙성 공리는 모든 집합이 어떤 V_alpha에 속한다는 진술과 동치다.

## 산술의 특이성

덧셈과 곱셈은 결합법칙을 만족하지만 교환법칙은 깨진다.

$$
1+\omega=\omega \neq \omega+1,\qquad 2\cdot\omega=\omega \neq \omega\cdot 2
$$

앞쪽 식의 이유: 자연수 순서 앞에 원소 하나를 붙여도 순서형은 여전히 omega다. 반면 뒤에 붙이면 최대 원소가 생겨 omega와 동형이 아니다. 왼쪽 덧셈은 순증가·연속이지만 오른쪽 덧셈은 그렇지 않다.

## Cantor normal form

0이 아닌 모든 서수는 다음 형태로 유일하게 적힌다.

$$
\alpha=\omega^{\beta_1}c_1+\cdots+\omega^{\beta_k}c_k,\qquad \beta_1>\cdots>\beta_k\ge 0,\ 0<c_i<\omega
$$

지수와 서수가 같아지는 최소의 서수를 epsilon_0라 한다.

$$
\varepsilon_0=\min\{\alpha : \omega^{\alpha}=\alpha\}=\sup\{\omega,\ \omega^{\omega},\ \omega^{\omega^{\omega}},\dots\}
$$

epsilon_0는 가산 서수다. Gentzen은 Peano 산술의 무모순성이 epsilon_0까지의 초한귀납법으로 증명됨을 보였고, 이 서수가 PA의 증명론적 강도를 재는 척도가 된다([Gödel 불완전성 정리](godel-incompleteness.md) 참조).

## 서수와 기수

각 서수는 자기 크기의 최소 서수와 대응시킬 수 있고, 그 최소 서수를 기수로 정의한다. omega, omega+1, omega 곱하기 2, omega의 omega승은 모두 가산이며 기수로는 하나다([가산성과 비가산성](cardinality.md)). 즉 서수는 기수보다 훨씬 촘촘하다.

# 활용

## 구성의 층 쌓기

- Borel 계층, Baire 계층 등 해석학의 계층은 서수로 색인된다.
- 이론의 증명론적 서수는 그 이론의 강도를 재는 불변량이다.
- 게임과 프로그램 종료 증명에서 상태에 서수를 배정하고 각 단계에서 서수가 감소함을 보이면 종료가 따라 나온다. 정렬성 때문에 무한 감소열이 없기 때문이다.

## 계산 예제

Cantor normal form으로 서수를 표현하면 덧셈을 기계적으로 계산할 수 있다. 다음은 항 목록 표현으로 왼쪽 서수의 작은 항들을 잘라내는 규칙이다.

$$
(\omega^2\cdot 3+\omega\cdot 5+7)+(\omega\cdot 2+1)=\omega^2\cdot 3+\omega\cdot 7+1
$$

```python
# 서수를 (지수, 계수) 내림차순 리스트로 표현. 지수는 다시 같은 형태의 서수.
def add(a, b):
    if not b: return a
    lead = b[0][0]                    # b의 최고 지수
    kept = [(e, c) for (e, c) in a if compare(e, lead) > 0]
    tail = [(e, c) for (e, c) in a if compare(e, lead) == 0]
    if tail:                          # 같은 지수는 계수를 더한다
        return kept + [(lead, tail[0][1] + b[0][1])] + b[1:]
    return kept + b                   # 작은 항은 흡수되어 사라진다
```

흡수 규칙이 곧 1 더하기 omega가 omega인 이유다.

## 정렬 정리와의 관계

모든 집합에 정렬순서를 줄 수 있다는 정렬 정리는 선택공리와 동치이고, 정렬순서가 주어지면 그 집합은 서수로 색인된다. 이로써 초한귀납법을 임의의 집합 위의 구성에 쓸 수 있게 된다. 예컨대 [벡터 공간](vector-spaces.md)의 기저 존재 증명은 원소를 서수로 줄 세운 뒤 차례로 독립성을 확인하는 방식으로도 쓸 수 있다.

[^1]: Ordinal Number, Wolfram MathWorld. https://mathworld.wolfram.com/OrdinalNumber.html
[^2]: Transfinite induction, Wikipedia. https://en.wikipedia.org/wiki/Transfinite_induction

# 연관 문서

## 선수지식

- [ZFC 공리계](zfc-axioms.md)
- [부분순서](partial-orders.md)

## 더 알아보기

- [선택공리와 Zorn 보조정리](axiom-of-choice.md)
- [연속체 가설과 독립성](continuum-hypothesis.md)

#set_theory
