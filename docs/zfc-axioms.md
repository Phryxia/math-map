# ZFC 공리계

# 개요

**ZFC 공리계(Zermelo–Fraenkel set theory with choice, ZFC)** 는 어떤 모임이 집합인지를 정하는 공리들의 목록이고, 현대 수학의 대상은 대부분 이 공리로 만든 집합으로 적힌다. 예로 자기 자신을 원소로 갖지 않는 집합을 전부 모은 것을 집합으로 인정하면, 그 모임이 자기 자신의 원소인지 물을 때 어느 답도 모순이 된다. ZFC 는 이미 있는 집합에서 새 집합을 만드는 방법만 공리로 허용해 이런 모임이 집합이 되지 않게 한다.

# 직관

[집합](sets.md)을 "성질 $P$ 를 만족하는 모든 것의 모임" 으로 정하면, $P$ 를 "자기 자신을 원소로 갖지 않는다" 로 둔 모임 $R$ 이 생긴다. $R\in R$ 이면 $R$ 의 조건에서 $R\notin R$ 이고, $R\notin R$ 이면 $R$ 이 조건을 만족하므로 $R\in R$ 이다.

$$
R=\lbrace\thinspace x : x\notin x\thinspace\rbrace\thinspace\Longrightarrow\thinspace R\in R \iff R\notin R
$$

모순은 $R$ 의 원소 후보가 "모든 것" 이었던 데서 나온다. 그래서 후보를 이미 있는 집합 $A$ 의 원소로 제한한다. $A=\lbrace\varnothing,\lbrace\varnothing\rbrace\rbrace$ 이면 $\varnothing\notin\varnothing$ 이고 $\lbrace\varnothing\rbrace\notin\lbrace\varnothing\rbrace$ 이므로 $R_A=\lbrace x\in A:x\notin x\rbrace=A$ 다. $R_A\in A$ 라면 앞의 논법이 다시 모순을 내므로, 이번에는 모순 대신 $R_A\notin A$ 라는 결론이 나온다.

같은 방식으로 새 집합은 이미 있는 집합에서만 만든다. 위의 $A$ 도 공집합 $\varnothing$ 에서 $\lbrace\varnothing\rbrace$ 을 만들고 두 집합을 짝지어 만든 것이다. 이렇게 집합을 만드는 방법을 하나씩 공리로 적은 목록이 ZFC 다.

# 정의

ZFC 는 원소 관계를 나타내는 이항 관계 기호 $\in$ 하나만 가진 [1차 논리](first-order-logic.md)로 적는다. 아래에서 변수는 모두 집합을 가리키고, 부분집합 관계는 축약 표기로 정의한다.

$$
A\subseteq B \quad :\iff\quad \forall x\thinspace(x\in A\to x\in B)
$$

예는 모두 직관 절의 $A=\lbrace\varnothing,\lbrace\varnothing\rbrace\rbrace$ 를 쓴다.

## 공리 목록

1. 외연성(extensionality): 원소가 같은 집합은 같다.

$$
\forall A\thinspace\forall B\thinspace\bigl(\forall x\thinspace(x\in A\leftrightarrow x\in B)\to A=B\bigr)
$$

$\lbrace\varnothing,\lbrace\varnothing\rbrace\rbrace$ 과 $\lbrace\lbrace\varnothing\rbrace,\varnothing\rbrace$ 은 원소가 같으므로 같은 집합이다.

2. 짝(pairing): 임의의 $a$ , $b$ 에 대해 둘만을 원소로 갖는 집합이 있다.

$$
\forall a\thinspace\forall b\thinspace\exists P\thinspace\forall x\thinspace\bigl(x\in P\leftrightarrow (x=a\vee x=b)\bigr)
$$

$a=b=\varnothing$ 이면 $\lbrace\varnothing\rbrace$ 이 나오고, $a=\varnothing$, $b=\lbrace\varnothing\rbrace$ 이면 $A$ 가 나온다.

3. 합집합(union): 집합족의 원소들을 모은 집합이 있다.

$$
\forall F\thinspace\exists U\thinspace\forall x\thinspace\bigl(x\in U\leftrightarrow \exists A\thinspace(A\in F\wedge x\in A)\bigr)
$$

$\bigcup A=\varnothing\cup\lbrace\varnothing\rbrace=\lbrace\varnothing\rbrace$ 이다.

4. 거듭제곱집합(power set): 부분집합 전체의 집합이 있다.

$$
\forall A\thinspace\exists P\thinspace\forall B\thinspace(B\in P\leftrightarrow B\subseteq A)
$$

$\lbrace\varnothing\rbrace$ 의 부분집합은 $\varnothing$ 과 $\lbrace\varnothing\rbrace$ 이므로 그 거듭제곱집합은 $A$ 다.

5. 분류 스킴(separation): 각 논리식 $\varphi$ 마다 하나의 공리. $A$ 의 원소 중 $\varphi$ 를 만족하는 것들이 집합을 이룬다.

$$
\forall A\thinspace\exists S\thinspace\forall x\thinspace\bigl(x\in S\leftrightarrow (x\in A\wedge \varphi(x,\vec p))\bigr)
$$

$\varphi(x)$ 를 $x\notin x$ 로 두면 직관 절의 $R_A$ 가 나온다.

6. 치환 스킴(replacement): 각 논리식 $\varphi$ 마다 하나의 공리. $\varphi$ 가 $A$ 위에서 함수처럼 행동하면 그 상이 집합을 이룬다.

$$
\forall x\in A\thinspace\exists! y\thinspace\varphi(x,y)\quad \Longrightarrow\quad \exists B\thinspace\forall y\thinspace\bigl(y\in B\leftrightarrow\exists x\in A\thinspace\varphi(x,y)\bigr)
$$

$\varphi(x,y)$ 를 $y=\lbrace x\rbrace$ 로 두면 $A$ 의 상은 $\lbrace\lbrace\varnothing\rbrace,\lbrace\lbrace\varnothing\rbrace\rbrace\rbrace$ 이다.

7. 무한(infinity): 공집합을 포함하고 후속자에 닫힌 집합이 있다. 후속자는 다음으로 정의한다.

$$
S(x)=x\cup\lbrace x\rbrace,\qquad \exists I\thinspace\bigl(\varnothing\in I\wedge \forall x\thinspace(x\in I\to S(x)\in I)\bigr)
$$

$S(\varnothing)=\lbrace\varnothing\rbrace$ 이고 $S(\lbrace\varnothing\rbrace)=A$ 이므로, 무한 공리의 $I$ 는 $\varnothing$, $\lbrace\varnothing\rbrace$, $A$, $S(A)$, $\dots$ 를 모두 원소로 갖는다.

8. 정칙성(regularity, foundation): 공집합이 아닌 집합은 자기와 공통 원소가 없는 원소를 갖는다.

$$
\forall A\thinspace\bigl(A\neq\varnothing \to \exists m\in A\quad (m\cap A=\varnothing)\bigr)
$$

$A$ 에서는 $m=\varnothing$ 이 $m\cap A=\varnothing$ 을 만족한다.

9. 선택(choice): 공집합을 원소로 갖지 않는 집합족에는 선택함수가 있다([선택공리](axiom-of-choice.md)).

$$
\forall F\thinspace\bigl(\varnothing\notin F \to \exists f:F\to\bigcup F\quad \forall A\in F\quad f(A)\in A\bigr)
$$

$F=\lbrace\lbrace\varnothing\rbrace, A\rbrace$ 이면 $f(\lbrace\varnothing\rbrace)=f(A)=\varnothing$ 이 선택함수다. 유한 집합족의 선택함수는 1 에서 8 까지로 만들 수 있고, 이 공리는 무한 집합족에서 쓰인다.

공집합의 존재는 무한 공리와 분류로부터 나오므로 별도 공리로 두지 않아도 된다. 1 에서 8 까지를 ZF(Zermelo–Fraenkel set theory), 9 를 더한 것을 ZFC 라 부른다[^1].

# 성질

## Russell 역설의 회피

직관 절의 모순을 Russell 역설(Russell's paradox)이라 한다. 분류는 " $A$ 의 부분집합"만 만든다. 모든 집합의 집합 $V$ 가 있다고 가정하면 분류로 위의 $R$ 을 얻어 모순이 된다. 따라서 ZF 에서는 그런 $V$ 가 없다. 정칙성은 더 강하게 $x$ 가 $x$ 의 원소인 집합 자체를 배제한다. $x$ 가 $x$ 에 속하면 하나짜리 집합에 정칙성을 적용해 모순이 나온다.

## 분류와 치환

분류는 치환에서 따라 나온다. $\varphi$ 를 만족하는 $x$ 를 $x$ 자신으로 보내는 부분함수에 치환을 적용하면 된다. 역방향은 성립하지 않는다. 분류는 결과 집합의 크기를 $A$ 로 제한하지만, 치환은 $A$ 의 크기를 넘지 않는 새 집합을 $A$ 밖에서 만들어 낸다. 예컨대 자연수 $n$ 마다 $n$ 번째 거듭제곱집합을 대응시키는 함수의 상은 분류만으로는 얻을 수 없다. Zermelo 의 원래 체계에 치환을 추가한 것이 Fraenkel 과 Skolem 의 기여이며, 이것 없이는 [서수](ordinals.md)의 표준적 구성과 초한 재귀가 작동하지 않는다.

## 폰 노이만 자연수

무한 공리가 주는 $I$ 에서 분류로 "후속자 닫힌 모든 집합에 속하는 원소"만 남기면 최소의 귀납적 집합을 얻는다. 이를 자연수 집합으로 정의한다[^2].

$$
0=\varnothing,\quad 1=\lbrace 0\rbrace,\quad 2=\lbrace 0,1\rbrace,\quad n+1=n\cup\lbrace n\rbrace,\qquad \omega=\bigcap\lbrace\thinspace I : I \text{ 귀납적}\thinspace\rbrace
$$

이 정의에서 $n$ 의 원소 개수는 정확히 $n$ 이고, $m$ 이 $n$ 의 원소인 것과 $m$ 이 $n$ 보다 작은 것이 같다. 순서 관계가 원소 관계로 정의된다. 외연성으로 각 자연수는 유일하게 결정되고, 수학적 귀납법은 최소성에서 바로 나온다. 정수·유리수는 [동치류](equivalence-relations.md)로, [실수](real-numbers.md)는 유리수 Cauchy 수열의 동치류나 Dedekind 절단으로 구성한다.

## 순서쌍과 함수

$$
(a,b)=\bigl\lbrace\lbrace a\rbrace,\lbrace a,b\rbrace\bigr\rbrace
$$

짝 공리를 두 번 쓰면 존재하고, 외연성으로 첫 성분과 둘째 성분이 복원된다. 곱집합은 거듭제곱집합과 분류로 만들고, [함수](functions.md)는 곱집합의 특별한 부분집합으로 정의한다. 관계, 순서, 대수 구조가 모두 이 위에 올라간다.

## 누적 위계

공집합에서 시작해 거듭제곱집합을 되풀이해 쌓은 집합들을 누적 위계(cumulative hierarchy)라 한다. 서수 $\alpha$ 마다 $V_\alpha$ 를 다음과 같이 정한다.

$$
V_0=\varnothing,\qquad V_{\alpha+1}=P(V_\alpha),\qquad V_\lambda=\bigcup_{\alpha\lt\lambda}V_\alpha\thinspace\thinspace(\lambda\thinspace\text{극한서수})
$$

$V_1=\lbrace\varnothing\rbrace$, $V_2=A$ 이고, $V_\omega$ 는 유전적 유한 집합 전체다. 정칙성 공리 아래에서 모든 집합이 어떤 $V_\alpha$ 에 들어간다. 원소 관계를 따라 내려가는 열 $x_0\ni x_1\ni\cdots$ 은 유한 번 만에 끝난다.

## 메타수학적 사실

- 일관성: ZFC 가 무모순이면 그 사실을 ZFC 안에서 증명할 수 없다([Gödel 불완전성 정리](godel-incompleteness.md)).
- 독립성: 연속체 가설과 선택공리는 ZF 에서 독립이다. Gödel 의 [구성가능 우주](constructible-universe.md)와 Cohen 의 [강제법](forcing.md)이 양쪽 방향을 준다.
- 모델의 존재: ZFC 가 무모순이면 [Löwenheim–Skolem 정리](lowenheim-skolem.md)로 가산 모델이 있다. 모델 내부의 "비가산" 은 그 모델이 가진 전단사만 보고 판정되므로 모순이 아니다([기수](cardinality.md)). 이것을 Skolem 역설(Skolem's paradox)이라 한다.

# 활용

## 클래스와 표기

"모든 집합의 모임"이나 "모든 서수의 모임"은 집합이 아니므로, 논리식을 줄여 쓴 약칭으로만 쓴다. 이를 고유 모임(proper class)이라 부른다. [범주](category.md)론에서 "모든 집합의 범주"를 다룰 때 이 구분이 문제가 되며, Grothendieck 우주(Grothendieck universe)를 추가하거나 NBG(von Neumann–Bernays–Gödel set theory) 같은 클래스 이론으로 옮긴다.

## 큰 기수와 확장

ZFC 로 판정되지 않는 문장을 다루기 위해 도달 불가능 기수(inaccessible cardinal), 측정 가능 기수(measurable cardinal) 같은 큰 기수 공리(large cardinal axiom)를 추가하는 확장을 연구한다. 이들은 증명 강도를 단계적으로 올리며, 각 단계는 앞 단계의 무모순성을 함의한다.

해석학과 대수학의 많은 정리는 거듭제곱집합을 몇 번만 쓰는 낮은 층에서 증명된다. 어떤 정리가 어느 공리를 필요로 하는지 정하는 연구가 역수학(reverse mathematics)이다.

[^1]: Zermelo–Fraenkel Axioms, Wolfram MathWorld. https://mathworld.wolfram.com/Zermelo–FraenkelAxioms.html
[^2]: Set-theoretic definition of natural numbers (von Neumann ordinals). https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers

# 연관 문서

## 선수지식

- [집합](sets.md)
- [1차 논리](first-order-logic.md)
- [수학기초론 개관](foundations-overview.md)

## 더 알아보기

- [서수](ordinals.md)
- [선택공리](axiom-of-choice.md)
- [구조적 집합론](structural-set-theory.md)
- [연속체 가설](continuum-hypothesis.md)
- [구성가능 우주](constructible-universe.md)

#set_theory #foundations
