# Arzelà–Ascoli 정리

# 개요

Arzelà–Ascoli 정리는 연속함수의 공간에서 어떤 부분집합이 상대콤팩트인지 판정한다. 콤팩트 거리 공간 위에서는 점별유계와 동등연속 두 조건이 필요충분이다.

유한차원에서 Heine–Borel 정리가 유계 닫힌집합을 콤팩트라고 판정하는 자리를 무한차원 함수공간에서 대신한다. 함수열에서 균등수렴하는 부분열을 뽑는 논증이 이 정리를 거친다.

# 직관

$\lbrack 0,2\pi\rbrack$ 위의 $f_n(x)=\sin(nx)$ 는 상한 노름으로 유계지만 균등수렴하는 부분열이 없다. 진동이 빨라져 고정된 $\delta$ 안에서 함숫값이 계속 크게 변한다. [균등연속](uniform-continuity.md)의 $\delta$ 는 함수 하나마다 고르는 것이라 이 현상을 막지 못한다. 족 전체에 대해 하나의 $\delta$ 를 요구하면 막힌다.

# 정의

## 동등연속

거리 공간 $X$ 에서 $Y$ 로 가는 함수족 $\mathcal F$ 가 **동등연속**이라는 것은 다음이 성립한다는 뜻이다.

$$
\forall\varepsilon\gt 0\thickspace\exists\delta\gt 0\thickspace\forall f\in\mathcal F\thickspace\forall x,y\in X:\ d_X(x,y)\lt\delta\Rightarrow d_Y(f(x),f(y))\lt\varepsilon
$$

균등연속의 정의에서 $\delta$ 가 $f$ 에도 의존하지 않게 된 것이다. 양화사로 보면 $\forall f\thickspace\exists\delta$ 가 $\exists\delta\thickspace\forall f$ 로 바뀌었다.

공통의 Lipschitz 상수 $L$ 을 가지는 족은 $\delta=\varepsilon/L$ 로 동등연속이다. 도함수가 $\Vert f'\Vert\_\infty\le L$ 로 일제히 유계인 미분가능 함수족이 그 예다.

## 점별유계

각 $x\in X$ 마다 $\lbrace f(x):f\in\mathcal F\rbrace$ 가 $Y$ 에서 유계이면 $\mathcal F$ 가 **점별유계**다. 상한이 $x$ 에 따라 달라도 된다.

# 성질

## 정리

$X$ 가 콤팩트 거리 공간이고 $\mathcal F\subseteq C(X,\mathbb R)$ 라 하자. $\mathcal F$ 가 상한 노름에 대해 상대콤팩트일 필요충분조건은 $\mathcal F$ 가 점별유계이고 동등연속인 것이다.

$C(X,\mathbb R)$ 은 상한 노름으로 [Banach 공간](banach-spaces.md)이고, 거기서 상대콤팩트는 임의의 수열이 균등수렴하는 부분열을 가진다는 것과 같다.

## 충분조건의 증명

*증명의 요지.* $X$ 가 콤팩트이므로 가산 조밀 부분집합 $\lbrace x_1,x_2,\dots\rbrace$ 를 잡는다. 수열 $(f_n)\subseteq\mathcal F$ 에 대해 점별유계성과 Bolzano–Weierstrass 정리로 $x_1$ 에서 수렴하는 부분열을 뽑고, 그 부분열에서 $x_2$ 에서 수렴하는 부분열을 다시 뽑는 과정을 반복한다. 대각선 부분열 $(f_{n_k})$ 은 모든 $x_j$ 에서 수렴한다.

이것이 균등수렴임을 보이는 데 동등연속을 쓴다. $\varepsilon$ 에 대한 $\delta$ 를 잡고 조밀성으로 $X$ 를 반지름 $\delta$ 의 공 유한 개로 덮으면, 각 공의 중심에서의 수렴이 공 전체의 수렴을 준다. 세 항으로 쪼개는 부등식에서 양 끝의 두 항을 동등연속이, 가운데 항을 중심에서의 수렴이 억제한다. ∎

## 필요조건

상대콤팩트이면 유한 $\varepsilon$ 그물이 존재한다. 그물의 각 함수는 [균등연속](uniform-continuity.md)이고 유한 개이므로 $\delta$ 의 최솟값을 잡을 수 있고, 그 $\delta$ 가 족 전체에 통한다.

## 콤팩트가 아닌 정의역

$X$ 가 콤팩트가 아니면 정리는 그대로 성립하지 않는다. $\mathbb R$ 위에서 $f_n(x)=f(x-n)$ 꼴의 평행이동 족은 점별유계이고 동등연속이지만 균등수렴하는 부분열이 없다. 콤팩트가 아닌 정의역에서는 콤팩트 집합마다의 균등수렴으로 결론을 약화한다.

# 활용

## 상미분방정식의 해의 존재

$y'=F(x,y)$ 에서 $F$ 가 연속이기만 하면 Euler 꺾은선으로 만든 근사해의 족이 공통의 Lipschitz 상수를 가진다. Arzelà–Ascoli 정리가 균등수렴하는 부분열을 주고, 그 극한이 적분방정식을 만족해 해가 된다. Lipschitz 조건 없이 해의 존재만 얻는 이 논증이 Peano 존재정리다.

## 변분법의 직접법

범함수의 최소화열에서 수렴하는 부분열을 뽑는 단계에 쓴다. 에너지 유계가 도함수의 유계를 주고 그것이 동등연속을 준다.

## 정규족

복소해석에서 국소 유계인 정칙함수족이 콤팩트 집합마다 동등연속임을 Cauchy 적분 공식으로 보인다. 여기에 이 정리를 적용해 국소 균등수렴하는 부분열을 얻는 것이 Montel 정리이고, Riemann 사상 정리의 증명이 그것을 쓴다.

## 함수공간의 콤팩트 작용소

적분작용소가 콤팩트임을 보일 때 상이 동등연속인 족임을 확인한다. 이 판정이 [Fredholm 작용소](fredholm-operators.md)의 이론으로 이어진다.

# 연관 문서

## 선수지식

- [균등연속](uniform-continuity.md)
- [Banach 공간](banach-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #topology
