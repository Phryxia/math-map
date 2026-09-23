# Boolean 값 모형

# 개요

Boolean 값 모형은 논리식의 값을 참과 거짓 둘 대신 완비 [Boolean 대수](boolean-algebras.md)의 원소로 주는 모형이다. [강제법](forcing.md)의 강제 관계를 값으로 바꿔 쓴 것이고, 일반 필터를 고르는 단계 없이 독립성 증명을 할 수 있다.

강제 순서마다 완비 Boolean 대수가 하나 딸리고, 그 대수 위의 Boolean 값 모형이 강제 확대와 같은 문장들을 만족한다.

# 직관

강제법에서 조건 $p$ 가 논리식 $\varphi$ 를 강제한다는 관계 $p \Vdash \varphi$ 를 다룰 때, $\varphi$ 를 강제하는 조건 전체를 모으면 아래로 닫힌 집합이 된다. 이 집합 하나가 $\varphi$ 에 대해 알아야 할 것을 다 담고 있다.

두 논리식의 논리곱을 강제하는 조건은 각각을 강제하는 조건들의 교집합이고, 부정을 강제하는 조건은 $\varphi$ 를 강제하는 조건과 양립하지 않는 것들이다. 교집합, 여집합에 해당하는 연산이 조건들의 모임 위에 그대로 있다.

이 연산들이 닫힌 모임을 만들려면 조건의 [부분순서](partial-orders.md)를 완비 Boolean 대수로 채워 넣으면 된다. 그러면 $\varphi$ 에 그 대수의 원소 하나를 대응시킬 수 있고, 강제 관계는 그 원소가 $p$ 이상인지를 묻는 것이 된다.

논리식마다 대수의 원소를 주는 이 대응이 Boolean 값 모형이다. 참과 거짓 대신 대수의 원소를 값으로 갖고, 값이 최대원 $1$ 인 문장이 그 모형에서 성립하는 문장이다.

# 정의

## Boolean 값 우주

완비 Boolean 대수 $B$ 에 대해 $V^B$ 를 서수에 대한 초한재귀로 정의한다. $V^B_\alpha$ 의 원소는 정의역이 $\bigcup_{\beta \lt \alpha} V^B_\beta$ 의 부분집합이고 값이 $B$ 에 있는 함수다.

$$
V^B = \bigcup_{\alpha \in \mathrm{Ord}} V^B_\alpha
$$

원소 $u \in V^B$ 는 자기보다 낮은 단계의 이름마다 "그것이 $u$ 에 속할 정도"를 $B$ 의 원소로 매긴 것이다.

## 값매김

원자식의 값을 $u$ 와 $v$ 의 정의역에 대한 재귀로 정한다. 논리 기호는 대수의 연산으로 옮긴다.

$$
\lVert \varphi \wedge \psi\rVert = \lVert\varphi\rVert \wedge \lVert\psi\rVert, \qquad \lVert \neg\varphi\rVert = \neg\lVert\varphi\rVert
$$

양화사는 완비성을 쓴다.

$$
\lVert \exists x\thinspace \varphi(x)\rVert = \bigvee_{u \in V^B} \lVert \varphi(u)\rVert
$$

문장 $\sigma$ 가 $V^B$ 에서 **성립한다**는 것은 $\lVert\sigma\rVert = 1$ 이라는 뜻이다.

# 성질

## 공리의 보존

**정리.** ZFC(Zermelo–Fraenkel with choice)의 모든 공리가 $V^B$ 에서 값 $1$ 을 갖는다.[^1]

각 공리마다 필요한 이름을 $V^B$ 안에서 짓는 것이 증명이다. 분리 공리는 논리식의 값으로 정의역의 값을 깎아 만들고, [선택공리](axiom-of-choice.md)는 $V$ 의 정렬을 이름 쪽으로 옮긴다. 양화사의 값이 무한 상한이 되므로 $B$ 의 완비성이 꼭 필요하다. ∎

## 강제 순서와의 대응

**정리.** 강제 순서 $P$ 에 대해 $P$ 의 정칙 열린집합들이 이루는 완비 Boolean 대수 $B$ 가 있고, 모든 논리식에 대해 $p \Vdash \varphi$ 인 것과 $p \le \lVert\varphi\rVert$ 인 것이 동치다.

정칙 열린집합은 자기 폐포의 내부와 같은 열린집합이고, 포함관계로 완비 Boolean 대수를 이룬다. 조건 $p$ 를 그 아래 집합의 정칙화로 보내면 $P$ 가 $B$ 안에 조밀하게 들어간다. 강제 관계의 정의가 그대로 이 부등식이 된다. ∎

두 접근에서 같은 결과가 나온다. 가산 추이 모형과 일반 필터를 잡는 쪽이 새 모형을 실제로 만드는 대신 외부 가정을 쓰고, Boolean 값 쪽은 모형을 만들지 않는 대신 진리값을 하나로 좁히지 않는다.

## 독립성 증명

**정리.** $B$ 를 $\mathrm{Add}(\omega,\aleph_2)$ 에 딸린 대수로 잡으면 $V^B$ 에서 [연속체 가설](continuum-hypothesis.md)의 값이 $0$ 이다.

값이 $0$ 이므로 그 부정의 값이 $1$ 이고, ZFC 의 공리가 모두 값 $1$ 이므로 ZFC 에서 연속체 가설을 증명할 수 없다. 모순을 이끌어내는 데 모형의 존재가 필요 없고 값 계산만 있으면 된다.

## 몫과 초곱

$B$ 의 극대 필터 $U$ 로 $V^B$ 를 나누면 두 값 모형이 되고, 이 조작이 [초곱](ultraproducts.md)의 일반화다. $U$ 가 $V$ 안에 있으면 얻은 구조는 $V$ 자신과 기본 동치이고, $U$ 가 일반 필터일 때 강제 확대 $V\lbrack G\rbrack$ 이 나온다.

# 활용

- 독립성 증명을 값 계산으로 바꾼다. 연속체 가설, Suslin 가설, [Martin 의 공리](martins-axiom.md)의 무모순성을 가산 추이 모형 없이 보일 수 있다.
- [토포스](topos-theory.md)의 한 사례를 준다. 완비 Boolean 대수 위의 [층](sheaves.md) 토포스가 Boolean 값 모형에 대응하고, 내부 논리가 고전 논리인 토포스가 된다.
- Heyting 대수로 값을 바꾸면 직관주의 집합론의 모형이 나온다. 이 경우 배중률의 값이 $1$ 이 아니고, [직관주의](intuitionism.md) 논리의 독립성 결과가 같은 방법으로 나온다.
- 확률과의 대응을 준다. [측도](measure.md) 대수 위의 Boolean 값 모형이 [무작위 실수 강제법](random-real-forcing.md)에 대응하고, 값이 사건의 확률처럼 다루어진다.

[^1]: John L. Bell, *Set Theory: Boolean-Valued Models and Independence Proofs*, 3rd ed., Oxford University Press (2005), Ch. 1–2. Boolean 값 우주의 구성과 ZFC 공리의 값이 $1$ 임이 이 장들의 내용이다.

# 연관 문서

## 선수지식

- [Boolean algebra](boolean-algebras.md)
- [강제법](forcing.md)

## 더 알아보기

- [무작위 실수 강제법](random-real-forcing.md)

#set_theory #logic #order_theory
