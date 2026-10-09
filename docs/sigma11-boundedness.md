# $\Sigma^1_1$ 경계 정리

# 개요

$\Sigma^1_1$ 경계 정리는 정렬근거 나무들의 $\Sigma^1_1$ 집합에 속한 나무의 순위가 Church–Kleene 서수 $\omega_1^{\mathrm{CK}}$ 미만의 한 서수에서 유계라는 정리다. 개별 나무의 순위가 모두 $\omega_1^{\mathrm{CK}}$ 미만이라는 것에서 공통 상한이 따라 나오지는 않고, 집합이 $\Sigma^1_1$ 이라는 조건이 그 상한을 준다.

정렬근거 조건은 $\Pi^1_1$ 이므로 이 정리가 $\Sigma^1_1$ 과 $\Pi^1_1$ 의 비대칭을 서수의 말로 바꾼다. [초산술적 계층](hyperarithmetical-hierarchy.md)에서 $\Delta^1_1$ 이 초산술적 집합과 같다는 Kleene 정리의 증명이 이 정리를 쓴다.

# 직관

계산가능한 정렬순서의 순서형을 전부 모으면 그 상한이 $\omega_1^{\mathrm{CK}}$ 다. 정의가 그렇다. 그러므로 "원소마다 순위가 $\omega_1^{\mathrm{CK}}$ 미만" 이라는 조건만으로는 상한이 $\omega_1^{\mathrm{CK}}$ 보다 작아지지 않는다. 실제로 $\mathcal O$ 전체는 원소마다 표기하는 서수가 $\omega_1^{\mathrm{CK}}$ 미만이면서 상한은 $\omega_1^{\mathrm{CK}}$ 에 닿는다.

그러면 어떤 집합에서 상한이 떨어지는지 묻게 된다. $\Sigma^1_1$ 집합 $A$ 가 정렬근거 나무만 담고 상한이 $\omega_1^{\mathrm{CK}}$ 에 닿는다고 하자. 그러면 "나무 $T$ 의 순위가 $A$ 의 어떤 원소의 순위 이하다" 라는 조건이 $\Sigma^1_1$ 로 쓰이고, 상한이 $\omega_1^{\mathrm{CK}}$ 이므로 이 조건은 $T$ 가 정렬근거라는 것과 같아진다. 정렬근거 나무 전체가 $\Sigma^1_1$ 이 되어 버리는데, 그 집합은 $\Pi^1_1$ 완전이므로 $\Sigma^1_1$ 이 아니다. 따라서 상한이 $\omega_1^{\mathrm{CK}}$ 에 닿을 수 없다.

# 정의

## 나무와 정렬근거

자연수의 유한열 집합 $T$ 가 시작 구간에 대해 닫혀 있으면 **나무**라 한다. $T$ 가 무한 분지를 갖지 않으면, 곧 모든 $n$ 에서 $f\restriction n\in T$ 인 함수 $f:\mathbb N\to\mathbb N$ 이 없으면 **정렬근거**라 한다.

정렬근거 나무 전체의 집합을 $\mathrm{WF}$ 로 적는다. 정렬근거 조건은 함수에 대한 전칭이므로 $\mathrm{WF}$ 는 $\Pi^1_1$ 이다.

## 순위

정렬근거 나무 $T$ 의 노드 $\sigma$ 에 서수를 귀납으로 매긴다.

$$
\mathrm{rk}\_T(\sigma)=\sup\lbrace \mathrm{rk}\_T(\sigma n)+1: \sigma n\in T\rbrace
$$

말단 노드에서 값이 $0$ 이고, 나무의 **순위**는 $\mathrm{rk}(T)=\mathrm{rk}\_T(\langle\thinspace\rangle)$ 다. 정렬근거가 아니면 이 귀납이 끝나지 않으므로 순위는 정렬근거 나무에서만 정의된다.

$T$ 가 계산가능하고 정렬근거이면 $\mathrm{rk}(T)\lt \omega_1^{\mathrm{CK}}$ 다. 나무의 노드를 순위로 정렬하면 계산가능한 정렬순서가 되기 때문이다.

# 성질

## 경계 정리

> **정리.** $A\subseteq\mathrm{WF}$ 가 $\Sigma^1_1$ 이면 $\sup\lbrace \mathrm{rk}(T):T\in A\rbrace\lt \omega_1^{\mathrm{CK}}$ 다.[^1]

증명은 $\mathrm{WF}$ 가 $\Sigma^1_1$ 이 아니라는 사실로 돌린다. 상한이 $\omega_1^{\mathrm{CK}}$ 라고 하자. 나무 $T$ 에 대해 다음 조건을 세운다.

$$
\exists S\thinspace\bigl(S\in A\thinspace\wedge\thinspace T\le\_{\mathrm{rk}} S\bigr)
$$

여기서 $T\le\_{\mathrm{rk}} S$ 는 $T$ 에서 $S$ 로 가는 순서보존 사상의 존재이고, $S$ 가 정렬근거일 때 $\mathrm{rk}(T)\le\mathrm{rk}(S)$ 와 동치다. 이 사상의 존재는 함수에 대한 존재 한정기호 하나이므로 조건 전체가 $\Sigma^1_1$ 이다.

조건을 만족하는 $T$ 는 정렬근거 나무에 순서보존으로 들어가므로 정렬근거다. 역으로 $T$ 가 정렬근거이면 $\mathrm{rk}(T)\lt \omega_1^{\mathrm{CK}}$ 이고 상한 가정에서 $\mathrm{rk}(T)\le\mathrm{rk}(S)$ 인 $S\in A$ 가 있다. 따라서 조건은 $\mathrm{WF}$ 를 정의하고 $\mathrm{WF}$ 가 $\Sigma^1_1$ 이 된다. 이것이 모순이다.

## 정렬근거 나무의 $\Pi^1_1$ 완전성

> **정리.** $\mathrm{WF}$ 는 $\Pi^1_1$ 완전이고 $\Sigma^1_1$ 이 아니다.

완전성은 임의의 $\Pi^1_1$ 집합을 나무의 족으로 정규화해 얻는다. $\Pi^1_1$ 조건 $\forall f\thinspace\theta(x,f)$ 에서 $\theta$ 의 반례가 되는 유한 근사들을 모아 나무 $T_x$ 를 만들면, $x$ 가 조건을 만족하는 것과 $T_x$ 가 정렬근거인 것이 같다. $\mathrm{WF}$ 가 $\Sigma^1_1$ 이면 $\Pi^1_1\subseteq\Sigma^1_1$ 이 되어 두 층이 무너지므로 $\Sigma^1_1$ 이 아니다.

## Kunen–Martin 정리

> **정리.** 정렬근거인 $\Sigma^1_1$ 관계의 순위는 $\omega_1$ 미만이다.

경계 정리를 관계로 옮긴 판이다. 관계 $\prec$ 의 감소열의 유한 근사를 노드로 하는 나무를 세우면 $\prec$ 의 정렬근거성이 그 나무의 정렬근거성과 같고, $\Sigma^1_1$ 조건에서 나무들의 순위가 유계가 된다. 효과적 판본에서 상한은 $\omega_1^{\mathrm{CK}}$ 이고, 매개변수를 허용한 상대화 판본에서 $\omega_1$ 이다.

# 활용

## Kleene 정리의 한쪽 포함

$\Delta^1_1$ 집합이 초산술적이라는 포함에서 이 정리를 쓴다. $A$ 와 여집합이 모두 $\Sigma^1_1$ 이면 각각 계산가능한 나무의 족으로 정규형을 갖고, $x\notin A$ 를 증언하는 나무들이 전부 정렬근거이므로 그 족이 $\Sigma^1_1$ 부분집합을 이룬다. 경계 정리가 순위들을 $\omega_1^{\mathrm{CK}}$ 미만의 한 서수로 묶고, 그 서수의 표기 $a$ 에서 $A\le_T H_a$ 가 나온다.

## 순위 분석

$\Pi^1_1$ 집합을 순위에 따라 $\omega_1^{\mathrm{CK}}$ 개의 조각으로 쪼개는 데 쓴다. $\mathrm{WF}$ 를 순위 $\alpha$ 미만인 나무들로 자른 $\mathrm{WF}\_\alpha$ 는 각 $\alpha\lt \omega_1^{\mathrm{CK}}$ 에서 초산술적이고, 경계 정리가 $\Sigma^1_1$ 부분집합이 어느 조각 안에 갇힌다고 말한다. [해석적 계층](analytical-hierarchy.md)의 $\Pi^1_1$ 집합에 대한 구조 정리들이 이 분해 위에 선다.

## 역수학에서의 대응

$\Sigma^1_1$ 경계 정리는 초한 재귀를 산술적 논리식에 허용하는 체계 $\mathrm{ATR}\_0$(arithmetical transfinite recursion)에서 증명되고 더 약한 체계에서는 증명되지 않는다.[^2] [역수학](reverse-mathematics.md)의 큰 다섯 체계 가운데 $\mathrm{ATR}\_0$ 을 특징짓는 진술이고, 가산 정렬순서 둘의 비교가능성과 같은 자리에 선다.

[^1]: G. E. Sacks, *Higher Recursion Theory* (1990), II.5 — 경계 정리와 그 상대화. Kleene 정리는 II.2.

[^2]: S. G. Simpson, *Subsystems of Second Order Arithmetic*, 2nd ed. (2009), V.6 — $\mathrm{ATR}\_0$ 와 $\Sigma^1_1$ 경계 원리의 동치.

# 연관 문서

## 선수지식

- [초산술적 계층](hyperarithmetical-hierarchy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #logic #set_theory
