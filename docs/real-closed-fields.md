# 실폐체

# 개요

**실폐체(real closed field, 실닫힌체)** 는 실수처럼 크기를 비교할 수 있고, 양수마다 제곱근이 있으며 홀수 차 다항식이 항상 근을 갖는 체다. 실수에서 성립하는 "모든 삼차방정식은 실근을 갖는다" 를 증명할 때 실수가 완비라는 성질까지 써야 하는지가 문제다. 실수에 들어 있는 대수적 수만 모은 체에서도 같은 명제가 참이고, 이 체는 셀 수 있을 만큼 작다. 실폐체는 이런 체들을 한데 묶어, 덧셈, 곱셈, 크기 비교로 적은 명제가 그 모든 체에서 참거짓이 같다는 것을 보인다.

# 직관

실폐체는 $-1$ 이 제곱의 합이 아닌 체 가운데 같은 성질을 갖는 진대수 확대가 없는 체다. 실수체 $\mathbb R$ 와 실대수적 수의 체 $\mathbb R\cap\bar{\mathbb Q}$ 가 예다.

실폐체 $F$ 에서 $F(\sqrt{-1})$ 은 대수적으로 닫혀 있고, $F$ 의 순서는 하나뿐이며 양수가 정확히 $0$ 아닌 제곱이다. 다항식에 대한 일차 문장은 모든 실폐체에서 참거짓이 같다.

대수학의 기본정리(fundamental theorem of algebra), 곧 $\mathbb C=\mathbb R(i)$ 위의 상수 아닌 다항식이 근을 갖는다는 정리를 증명한다. $\mathbb R$ 에 대해 쓰는 사실은 둘이다. 양수는 제곱근을 갖고, 차수가 홀수인 실계수 다항식은 [중간값 정리](intermediate-value-theorem.md)로 실근을 갖는다.

$L$ 을 $\mathbb C$ 를 포함하는 $\mathbb R$ 의 유한 Galois 확대라 하고 $G=\mathrm{Gal}(L/\mathbb R)$ 의 2 Sylow 부분군을 $P$ 라 한다. $P$ 의 고정체는 $\mathbb R$ 위의 차수가 홀수인 확대이고, 그 원시원소의 최소다항식은 실근을 가지므로 기약이려면 일차여야 한다. 따라서 $G=P$ 는 2 군이다. $\mathrm{Gal}(L/\mathbb C)$ 가 자명하지 않으면 지수 $2$ 인 부분군이 있고 그 고정체는 $\mathbb C$ 의 이차 확대다. 그런데 $\mathbb C$ 의 원소는 첫째 사실로 모두 제곱근을 가지므로 이차 확대가 없고, $L=\mathbb C$ 다.

이 증명은 두 사실과 Galois 이론만 썼다. 같은 두 사실을 만족하는 순서체라면 어느 것이든 $\sqrt{-1}$ 을 붙여 대수적으로 닫힌 체가 된다. 실대수적 수의 체도 두 사실을 만족하므로, 셀 수 있는 체인데도 대수적 성질은 $\mathbb R$ 와 같다. 두 사실을 만족하는 체가 실폐체다.

# 정의

## 형식적 실체

$-1$ 이 $F$ 의 원소의 제곱의 합으로 쓰이지 않는 체 $F$ 가 **형식적 실체(formally real field)** 다. 형식적 실체의 표수는 $0$ 이다.

$F$ 가 형식적 실체인 것과 $F$ 에 체의 순서가 있는 것은 동치다(Artin, Schreier).[^1] 여기서 체의 순서는 덧셈과 곱셈에 대해 양수의 집합이 닫혀 있는 전순서다.

## 실폐체

형식적 실체 $F$ 의 진대수 확대가 하나도 형식적 실체가 아니면 $F$ 를 **실폐체**라 한다.

# 성질

## 동치 조건

체 $F$ 에 대해 다음 셋이 동치다.[^1]

1. $F$ 는 실폐체다.
2. $F$ 에 순서가 있어 양수가 정확히 $0$ 아닌 제곱이고, 차수가 홀수인 $F$ 계수 다항식이 모두 $F$ 에 근을 갖는다.
3. $F\ne F(\sqrt{-1})$ 이고 $F(\sqrt{-1})$ 이 대수적으로 닫혀 있다.

2 에서 3 은 직관 절의 증명이 그대로 성립한다. 3 에서 1 은 두 단계다. $a^2+b^2$ 은 $a+b\sqrt{-1}$ 의 노름이고 그 원소가 $F(\sqrt{-1})$ 에서 제곱이므로 제곱의 합이 $F$ 의 제곱이 되어 $-1$ 은 제곱의 합이 아니다. $F$ 의 진대수 확대는 $F(\sqrt{-1})$ 과 동형인 체를 포함하므로 형식적 실체가 아니다. 1 에서 2 는 $a\gt0$ 이 제곱이 아니면 $F(\sqrt a)$ 가 형식적 실체가 되는 것과, 홀수 차수의 기약다항식이 근을 붙인 확대에 순서를 넘겨주는 것으로 보인다.

순서가 양수 $=$ 제곱으로 정해지므로 실폐체의 순서는 하나뿐이고, 실폐체 사이의 체 동형은 순서를 보존한다.

## Artin–Schreier 정리

**정리(Artin–Schreier theorem).** 체 $F$ 의 대수적 폐포 $C$ 가 $1\lt\lbrack C:F\rbrack\lt\infty$ 를 만족하면 $\lbrack C:F\rbrack=2$ 이고 $F$ 는 실폐체이며 $C=F(\sqrt{-1})$ 이다.[^1]

증명은 [Galois 이론](galois-theory.md)과 [Sylow 정리](sylow-theorems.md)를 쓴다. 표수 $p$ 에서는 중간체 위에 [Artin–Schreier 이론](artin-schreier-theory.md)의 $x^p-x-a$ 꼴 순환 확대를 만들어 $C$ 가 대수적으로 닫혀 있다는 것과 모순을 얻으므로, 표수가 $0$ 이다.

## 실폐포

순서체 $(K,\le)$ 의 대수 확대 $R$ 가 실폐체이고 $R$ 의 순서가 $K$ 의 순서를 연장하면 $R$ 를 $K$ 의 **실폐포(real closure)** 라 한다. 실폐포는 존재하고, 두 실폐포 사이에는 $K$ 위의 순서 보존 동형이 정확히 하나 있다.[^1]

$\mathbb Q$ 의 실폐포는 실대수적 수의 체다. $\mathbb Q(\sqrt2)$ 는 순서가 둘이고($\sqrt2\gt0$ 과 $\sqrt2\lt0$) 순서마다 실폐포가 따로 있다. 두 실폐포는 체로서 동형이지만 그 동형은 $\mathbb Q(\sqrt2)$ 위의 동형이 아니다.

## Tarski–Seidenberg 정리

실폐체의 이론 $\mathrm{RCF}$ 는 순서체의 공리에 위 동치 조건 2 를 더한 일차 이론이다.

**Tarski–Seidenberg 정리(Tarski–Seidenberg theorem).** $\mathrm{RCF}$ 는 양화사 소거(quantifier elimination)를 갖는다.[^2]

따라서 $\mathrm{RCF}$ 는 완전하고 결정 가능하다. $\mathbb R$ 에서 참인 다항식에 대한 일차 문장은 실대수적 수의 체를 비롯한 모든 실폐체에서 참이다. 정의 가능 집합은 다항식 부등식의 불리언 결합으로 쓰이는 반대수집합(semialgebraic set)이다.

## Hilbert 17번 문제

$\mathbb R$ 위의 $n$ 변수 다항식 $f$ 가 $\mathbb R^n$ 의 모든 점에서 $0$ 이상이면 $f$ 는 유리함수의 제곱의 합이다. 이것이 Hilbert 17번 문제(Hilbert's seventeenth problem)에 대한 Artin 의 답이다.[^1]

*증명의 요지.* $f$ 가 제곱의 합이 아니면 유리함수체 $\mathbb R(x_1,\dots,x_n)$ 에 $f\lt0$ 인 순서가 있고, 그 실폐포 $R$ 에서 문장 "$f(x)\lt0$ 인 $x$ 가 있다" 가 참이다($x$ 로 변수 자신을 잡는다). Tarski–Seidenberg 정리로 같은 문장이 $\mathbb R$ 에서 참이 되어 가정에 모순이다.

# 활용

- [모형론](model-theory.md): 실폐체의 양화사 소거가 대수적 폐체의 경우와 함께 양화사 소거의 기본 예이고, Tarski 의 결정 절차를 준다.
- [o-최소성](o-minimality.md): 실폐체가 o-최소 구조의 첫 예이고, 한 변수 정의 가능 집합은 유한 개의 점과 구간의 합이다.
- [Witt 환](witt-ring.md): 실폐체 $F$ 에서 이차형식은 부호수로 분류되어 $W(F)\cong\mathbb Z$ 이다. 일반 체에서는 순서마다 부호수 준동형 $W(K)\to\mathbb Z$ 가 하나씩 있고, 그 순서가 $K$ 의 실폐포를 하나씩 정한다.
- [안정 이론](stable-theories.md): 순서가 정의 가능하므로 실폐체의 이론은 안정이 아니다.

[^1]: S. Lang, *Algebra*, 개정 3판, Graduate Texts in Mathematics 211, Springer, 2002, 11장. 형식적 실체, Artin–Schreier 정리, 실폐포, Hilbert 17번 문제가 이 장에 있다.
[^2]: D. Marker, *Model Theory: An Introduction*, Graduate Texts in Mathematics 217, Springer, 2002, 3장 3절.

# 연관 문서

## 선수지식

- [Galois 이론](galois-theory.md)
- [Sylow 정리](sylow-theorems.md)

## 더 알아보기

- [o-최소성](o-minimality.md)

#field_theory #algebra #logic
