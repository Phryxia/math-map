# 한정사 표준형

# 개요

**한정사 표준형(prenex normal form)** 은 모든 한정사(quantifier)가 논리식의 맨 앞에 모여 있는 꼴이다.

$$
Q_1x_1\thinspace Q_2x_2\cdots Q_nx_n\thinspace\psi
$$

$Q_i$ 는 $\forall$ 이나 $\exists$ 이고 $\psi$ 에는 한정사가 없다. [1차 논리](first-order-logic.md)의 모든 논리식은 이 꼴의 논리식과 동치이고, 변환 절차는 부정을 안쪽으로 밀고 한정사를 바깥으로 끌어내는 것이다.

# 직관

논리식의 어려움은 한정사의 교대 횟수로 잰다. $\forall x\thinspace\exists y\thinspace R(x,y)$ 와 $\exists y\thinspace\forall x\thinspace R(x,y)$ 는 뜻이 다르고, 뒤의 것이 더 강한 주장이다. 그런데 $\lnot(\forall x\thinspace P(x)\to\exists y\thinspace Q(y))$ 처럼 한정사가 연결사 안쪽에 박혀 있으면 교대 횟수를 셀 수 없다.

한정사를 앞으로 끌어낸다. $\lnot\forall x\thinspace P(x)$ 는 [De Morgan 법칙](de-morgan-laws.md)의 한정사 판본으로 $\exists x\thinspace\lnot P(x)$ 가 된다. 함의 $\forall x\thinspace P(x)\to Q$ 는 먼저 $\lnot\forall x\thinspace P(x)\lor Q$ 로 풀고, 같은 판본으로 $\exists x\thinspace\lnot P(x)\lor Q$ 가 되고, $Q$ 에 $x$ 가 없으므로 $\exists x(\lnot P(x)\lor Q)$ 로 묶인다. 한정사 하나가 맨 앞으로 나왔다.

이 끌어내기가 실패하는 자리가 하나 있다. $(\exists x\thinspace P(x))\land(\exists x\thinspace Q(x))$ 를 $\exists x(P(x)\land Q(x))$ 로 쓰면 뜻이 바뀐다. 앞의 식은 $P$ 를 만족하는 원소와 $Q$ 를 만족하는 원소가 각각 있다는 말이고, 뒤의 식은 둘을 함께 만족하는 원소가 하나 있다는 말이다. 두 한정사가 같은 이름을 쓰기 때문이므로, 끌어내기 전에 한정사마다 변수 이름을 다르게 바꾼다.

# 정의

## 접두부와 모체

논리식 $\varphi$ 가 $Q_1x_1\cdots Q_nx_n\thinspace\psi$ 꼴이고 $\psi$ 에 한정사가 없으면 $\varphi$ 를 한정사 표준형이라 한다. 앞부분 $Q_1x_1\cdots Q_nx_n$ 을 접두부(prefix), 뒤의 $\psi$ 를 모체(matrix)라 한다.

## 변환 절차

논리식 하나를 다음 네 단계로 한정사 표준형으로 옮긴다.

1. 함의와 동치를 $\lnot$, $\land$, $\lor$ 로 푼다. $\varphi\to\psi$ 는 $\lnot\varphi\lor\psi$ 로, $\varphi\leftrightarrow\psi$ 는 두 함의의 논리곱으로 쓴다.
2. 부정을 원자식 앞까지 밀어 넣는다. 연결사에는 De Morgan 법칙을, 한정사에는 그 한정사 판본을 쓴다.
3. 한정사마다 변수 이름을 서로 다르게 바꾼다. 묶인 변수의 이름을 바꾸는 것은 뜻을 바꾸지 않는다.
4. 한정사를 바깥으로 끌어낸다. $x$ 가 $\psi$ 에 자유롭게 나타나지 않을 때 다음이 성립한다.

$$
(\forall x\thinspace\varphi)\land\psi\iff\forall x(\varphi\land\psi),\qquad (\exists x\thinspace\varphi)\lor\psi\iff\exists x(\varphi\lor\psi)
$$

$$
(\forall x\thinspace\varphi)\to\psi\iff\exists x(\varphi\to\psi),\qquad \psi\to(\forall x\thinspace\varphi)\iff\forall x(\psi\to\varphi)
$$

함의의 왼쪽에서 한정사가 뒤집히는 것은 1 단계에서 그 자리가 부정 아래로 들어가기 때문이다.

# 성질

## 존재

**정리.** 1차 논리의 모든 논리식 $\varphi$ 에 대해 한정사 표준형 $\varphi'$ 가 있어 $\varphi\leftrightarrow\varphi'$ 가 증명된다.

증명의 요지. 논리식의 구조에 대한 귀납이다. 원자식은 접두부가 빈 한정사 표준형이다. $\lnot$ 과 두 항 연결사에서는 부분식의 표준형을 받아 위 변환의 2 단계와 4 단계를 쓰고, $Qx$ 가 붙은 경우에는 접두부 앞에 $Qx$ 를 더한다. 3 단계의 이름 바꾸기가 4 단계의 조건을 보장한다. ∎

## 비유일성

한정사 표준형은 하나로 정해지지 않는다. $\forall x\thinspace P(x)\land\exists y\thinspace Q(y)$ 에서 두 한정사는 어느 쪽을 먼저 끌어내도 되므로 $\forall x\thinspace\exists y(P(x)\land Q(y))$ 와 $\exists y\thinspace\forall x(P(x)\land Q(y))$ 가 둘 다 표준형이다. 접두부의 교대 횟수는 달라질 수 있으므로, 논리식의 복잡도는 가능한 표준형 가운데 교대가 가장 적은 것으로 정한다.

## 한정사 교대와 계층

접두부의 꼴이 집합의 등급을 정한다. 산술에서 $\exists$ 묶음과 $\forall$ 묶음이 $n$ 번 교대하는 접두부로 정의되는 집합을 $\Sigma_n$ 또는 $\Pi_n$ 이라 하고, 이 등급이 [산술적 계층](arithmetical-hierarchy.md)이다. [2차 산술](second-order-arithmetic.md)에서는 집합 변수에 붙는 한정사로 같은 방식의 계층을 매긴다.

## Skolem 표준형

존재 한정사를 함수 기호로 바꿔 접두부를 $\forall$ 만으로 만든 것이 Skolem 표준형(Skolem normal form)이다. $\forall x\thinspace\exists y\thinspace R(x,y)$ 에서 $x$ 마다 $y$ 를 골라 주는 함수 기호 $f$ 를 언어에 더해 $\forall x\thinspace R(x,f(x))$ 로 쓴다.

두 논리식은 동치가 아니다. 뒤의 것은 선택 함수가 언어에 있다고 말하므로 더 강하다. 그러나 만족가능성은 보존된다. 앞의 것이 모형을 가지면 그 모형에서 $y$ 를 고르는 함수를 $f$ 의 해석으로 두어 뒤의 것의 모형을 얻는다[^1].

## 양화사 소거와의 차이

양화사 소거(quantifier elimination)는 한정사가 하나도 없는 동치 논리식을 찾는 것이고, 실폐체나 대수적 폐체처럼 특정 이론에서만 된다. 한정사 표준형은 모든 1차 논리식에서 되지만 한정사가 남는다. [모형론](model-theory.md)이 어느 이론에서 양화사 소거가 되는지를 다룬다.

# 활용

- [결의법](resolution.md) 기반 자동 정리 증명은 입력 논리식을 Skolem 표준형으로 옮긴 뒤 모체를 논리곱 표준형으로 바꿔 절(clause) 집합을 만든다.
- [Löwenheim–Skolem 정리](lowenheim-skolem.md)의 증명이 Skolem 함수로 부분구조를 만든다. 모형에서 존재 주장의 증거를 고르는 함수가 그대로 기본 부분구조를 준다.
- 산술적 계층의 정의가 접두부의 교대 횟수를 쓴다. 정지 문제가 $\Sigma_1$ 에 드는 것은 그 문제를 "멈추는 단계 수가 존재한다" 꼴로 적을 수 있기 때문이다.
- 2차 산술의 부분체계를 가르는 내포 공리는 내포 조건에 허용되는 접두부로 분류된다.

[^1]: Herbert B. Enderton, *A Mathematical Introduction to Logic*, 2nd ed., Academic Press (2001), Ch. 2. 한정사 표준형의 존재, Skolem 함수, 만족가능성 보존이 이 장에 있다.

# 연관 문서

## 선수지식

- [1차 논리](first-order-logic.md)

## 더 알아보기

- [Herbrand 정리](herbrand-theorem.md)
- [결의법](resolution.md)
- [산술적 계층](arithmetical-hierarchy.md)

#logic #foundations #computation
