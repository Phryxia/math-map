# 토포스

# 개요

토포스는 집합의 [범주](category.md)가 가진 구조를 공리로 뽑아낸 범주다. 유한 [제한](limits-colimits.md), 지수 대상, 부분대상 분류자 셋을 갖추면 토포스이고, 그 안에서 집합론의 구성 대부분을 그대로 할 수 있다.

토포스마다 내부 논리가 따라 나오고, 그 논리는 일반적으로 직관주의 논리다. 배중률과 선택공리는 토포스에 따라 성립하기도 하고 성립하지 않기도 한다.

# 직관

집합 $X$ 의 부분집합은 특성함수 $X \to \lbrace 0,1\rbrace$ 과 하나씩 대응한다. 부분집합을 원소를 모은 것으로 보지 않고 이 대응으로 보면, 원소를 말하지 않고 사상만으로 부분집합을 다룰 수 있다.

대응을 사상의 말로 쓰면 이렇다. 한원소 집합 $1$ 에서 $\lbrace 0,1\rbrace$ 로 가는 사상 $\mathrm{true}$ 를 값 $1$ 을 주는 것으로 잡는다. 부분집합 $A \subseteq X$ 의 포함사상 $A \to X$ 와 $A \to 1$ 이 만드는 사각형이 당김이 된다. 즉 $A$ 는 특성함수가 $\mathrm{true}$ 가 되는 자리를 정확히 모은 것이다.

거꾸로 특성함수를 주면 그 당김이 부분집합이므로, 대응이 양쪽으로 간다. 이 성질만 쓰면 $\lbrace 0,1\rbrace$ 이 두 원소를 가진다는 사실은 필요 없다.

다른 범주에서 같은 자리를 차지하는 대상을 찾으면 그 범주가 자기만의 진리값 대상을 갖는다. 위상공간 위의 [층](sheaves.md) 범주에서는 그 대상의 점이 두 개가 아니라 열린집합들의 [격자](order-lattices.md)이고, 거기서 나오는 논리가 배중률을 만족하지 않는다.

# 정의

## 부분대상 분류자

범주 $\mathcal E$ 가 끝 대상 $1$ 을 가질 때, 대상 $\Omega$ 와 사상 $\mathrm{true}\colon 1 \to \Omega$ 가 **부분대상 분류자**라는 것은 다음이 성립한다는 뜻이다. 모든 단사사상 $m\colon A \to X$ 에 대해 유일한 $\chi_m\colon X \to \Omega$ 가 있어 다음 사각형이 당김이다.

$$
\begin{array}{ccc}
A & \to & 1\cr
\downarrow & & \downarrow\cr
X & \to & \Omega
\end{array}
$$

위 화살표는 $A \to 1$, 아래 화살표는 $\chi_m$, 왼쪽은 $m$, 오른쪽은 $\mathrm{true}$ 다.

## 초등 토포스

범주 $\mathcal E$ 가 **초등 토포스**라는 것은 다음 셋을 갖춘다는 뜻이다.

- 유한 제한을 모두 갖는다.
- 곱 함자 $(-) \times Y$ 가 우수반을 갖는다. 그 값을 **지수 대상** $X^Y$ 라 한다.
- 부분대상 분류자를 갖는다.

집합의 범주 $\mathbf{Set}$ 에서 $\Omega = \lbrace 0,1\rbrace$ 이고 $X^Y$ 는 함수 집합이다. 작은 범주 $\mathcal C$ 에 대한 함자 범주 $\mathbf{Set}^{\mathcal C^{\mathrm{op}}}$ 와 위상공간 위의 층 범주도 토포스다.

## Grothendieck 토포스

작은 범주 위의 층 범주와 동치인 토포스를 **Grothendieck 토포스**라 한다. 모든 Grothendieck 토포스는 초등 토포스이고, 여기에 더해 임의의 쌍대제한과 생성자 집합을 갖는다.

# 성질

## 토포스의 닫힘 성질

**정리.** 토포스는 유한 쌍대제한을 갖는다.[^1]

공리에 쌍대제한이 없는데도 나온다. 증명은 $\mathcal E$ 의 반대 범주를 $\Omega$ 의 거듭제곱 함자로 옮기는 것이다. 멱대상 함자 $X \mapsto \Omega^X$ 가 자기 자신의 반대 방향 수반이 되고, 이 수반이 극한을 쌍대극한으로 바꾼다. ∎

**정리.** 토포스의 조각 범주 $\mathcal E/X$ 는 다시 토포스다.

부분대상 분류자는 $X$ 로 당긴 $\Omega \times X \to X$ 이고, 지수 대상은 $X$ 위에서 섬유별로 잡는다. 이 성질이 토포스 안에서 매개변수를 가진 구성을 다루는 근거다.

## 내부 논리

**정리.** 토포스의 부분대상 격자 $\mathrm{Sub}(X)$ 는 [Heyting 대수](heyting-algebras.md)다.

교집합과 합집합은 부분대상의 제한과 쌍대제한이고, 함의는 $(-) \wedge A$ 의 우수반으로 얻는다. 여집합에 해당하는 $\neg A = (A \Rightarrow 0)$ 이 정의되지만 $A \vee \neg A = X$ 는 일반적으로 성립하지 않는다.

배중률이 모든 대상에서 성립하는 토포스를 **불 토포스**라 한다. $\mathbf{Set}$ 은 불 토포스이고, 두 점 이상을 가진 공간 위의 층 토포스는 대개 아니다. 토포스의 내부 언어로 쓴 증명이 [직관주의](intuitionism.md) 논리의 증명과 같은 규칙을 따르는 이유가 이것이다.

## 독립성의 재구성

**정리.** 적절한 토포스에서 선택공리가 성립하지 않는다.

$\mathbf{Set}$ 이 아닌 토포스를 고르면 전사사상이 갈라지지 않는 예가 나온다. 완비 [Boolean 대수](boolean-algebras.md) 위의 층 토포스를 잡으면 [강제법](forcing.md)의 [Boolean 값 모형](boolean-valued-models.md)이 토포스의 말로 다시 쓰이고, 연속체 가설의 독립성 증명이 층의 구성으로 옮겨진다.

# 활용

- 집합론의 대안 기초를 준다. Lawvere 의 집합 범주 공리는 원소 대신 사상으로 집합론을 세우고, [구조적 집합론](structural-set-theory.md)이 그 틀이다.
- 대수기하에서 층 토포스가 공간을 대신한다. 에탈 토포스는 점집합이 없는 상황에서도 코호몰로지를 정의하고, 그 코호몰로지가 [Galois 표현](galois-representations.md)을 만든다.
- 직관주의 논리의 의미론을 준다. [Kripke 의미론](kripke-semantics.md)은 전순서 위의 함자 범주가 토포스인 특수한 경우다.
- 프로그래밍 언어 의미론에서 데카르트 닫힌 구조가 타입과 함수를 해석한다. [Curry–Howard 대응](curry-howard.md)의 범주 쪽 대응물이 지수 대상이다.

[^1]: Saunders Mac Lane and Ieke Moerdijk, *Sheaves in Geometry and Logic: A First Introduction to Topos Theory*, Springer (1992), Ch. IV. 초등 토포스의 정의, 쌍대제한의 존재, 조각 범주의 정리가 이 장에 있다.

# 연관 문서

## 선수지식

- [제한과 쌍대제한](limits-colimits.md)
- [수반](adjunctions.md)
- [층](sheaves.md)

## 더 알아보기

아직 연결한 문서가 없다.

#category_theory #logic #foundations
