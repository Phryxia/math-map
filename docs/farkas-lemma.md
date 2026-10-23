# Farkas 보조정리

# 개요

**Farkas 보조정리(Farkas' lemma)** 는 실행렬 $A\in\mathbb R^{m\times n}$ 과 $b\in\mathbb R^m$ 에 대해 다음 둘 가운데 정확히 하나가 성립한다는 정리다.

1. $Ax=b$, $x\ge 0$ 인 $x\in\mathbb R^n$ 이 존재한다.
2. $A^{\mathsf T}y\ge 0$, $b^{\mathsf T}y\lt 0$ 인 $y\in\mathbb R^m$ 이 존재한다.

선형 부등식계에 해가 없으면 그 사실을 확인해 주는 벡터 $y$ 가 있다는 정리이고, [선형계획법](linear-programming.md)의 강쌍대성이 이 정리에서 증명된다. 두 조건 가운데 정확히 하나가 성립한다는 꼴의 정리를 대안 정리(theorem of the alternative)라 한다.

# 직관

평면에서 $a_1=(1,0)$, $a_2=(1,1)$ 을 음이 아닌 계수로 더해 $b=(0,1)$ 을 만들려고 한다. $x_1a_1+x_2a_2=(x_1+x_2,x_2)$ 이므로 $x_2=1$, $x_1=-1$ 이어야 하고 $x_1\ge 0$ 이 깨진다. $a_1$, $a_2$ 의 음이 아닌 결합 전체는 두 벡터 사이의 각 영역이고 $b$ 는 그 밖에 있다.

$b$ 가 영역 밖에 있다는 것을 계산 하나로 확인할 수 있다. $y=(1,-\tfrac12)$ 로 두면 $y^{\mathsf T}a_1=1$, $y^{\mathsf T}a_2=\tfrac12$ 로 둘 다 $0$ 이상이고 $y^{\mathsf T}b=-\tfrac12$ 다. 음이 아닌 결합 $x_1a_1+x_2a_2$ 와 $y$ 의 내적은 항상 $0$ 이상이므로 $b$ 는 그런 결합이 아니다. 직선 $y^{\mathsf T}z=0$ 이 영역과 $b$ 를 가른다.

# 정의

행렬 $A$ 의 열 $a_1,\dots,a_n$ 의 음이 아닌 결합 전체

$$
\mathrm{cone}(A)=\lbrace Ax:\ x\ge 0\rbrace
$$

를 $A$ 가 생성하는 **원뿔(cone)** 이라 한다. 조건 1 은 $b\in\mathrm{cone}(A)$ 이고, 조건 2 의 $y$ 는 $\mathrm{cone}(A)$ 를 반공간 $\lbrace z:y^{\mathsf T}z\ge 0\rbrace$ 에 두고 $b$ 를 그 밖에 두는 초평면의 법벡터다. 조건 2 를 만족하는 $y$ 를 조건 1 이 성립하지 않는다는 **증거(certificate)** 라 한다.

# 성질

## 증명

두 조건이 함께 성립하면 $0\le(A^{\mathsf T}y)^{\mathsf T}x=y^{\mathsf T}Ax=y^{\mathsf T}b\lt 0$ 이 되어 모순이다. 조건 1 이 성립하지 않을 때 조건 2 를 보이면 된다.

$\mathrm{cone}(A)$ 는 볼록이고 닫혀 있다. 닫힘은 Carathéodory 의 논법에서 나온다. 원뿔의 점마다 일차독립인 열들만으로 쓰는 표현이 있고, 일차독립인 열들의 원뿔은 선형 동형사상에 의한 $\lbrack 0,\infty)^k$ 의 상이라 닫혀 있으며, 그런 열의 부분집합은 유한 개다. $b\notin\mathrm{cone}(A)$ 이면 [볼록성](convexity.md)의 분리초평면 정리로 $y^{\mathsf T}b\lt\alpha\le y^{\mathsf T}z$ $(z\in\mathrm{cone}(A))$ 인 $y$ 와 $\alpha$ 가 있다. $0\in\mathrm{cone}(A)$ 에서 $\alpha\le 0$ 이고, 원뿔은 양수배에 닫혀 있으므로 $y^{\mathsf T}a_j\ge 0$ 이다. $\square$

## 변형

같은 논법이나 변수 치환으로 다음 대안 정리들이 나온다.[^1]

| 해가 있는 계 | 해가 있는 대안 계 |
| --- | --- |
| $Ax\le b$ | $y\ge 0$, $A^{\mathsf T}y=0$, $b^{\mathsf T}y\lt 0$ |
| $Ax\le b$, $x\ge 0$ | $y\ge 0$, $A^{\mathsf T}y\ge 0$, $b^{\mathsf T}y\lt 0$ |
| $Ax\lt 0$ (Gordan) | $y\ge 0$, $y\ne 0$, $A^{\mathsf T}y=0$ |

각 행에서 왼쪽 계와 오른쪽 계 가운데 정확히 하나가 해를 갖는다. 첫 행은 $x=x^+-x^-$ 와 여유 변수 $s\ge 0$ 으로 $Ax^+-Ax^-+s=b$ 를 만든 뒤 Farkas 보조정리를 쓴 것이다.

## 강쌍대성

원 문제 $\max\lbrace c^{\mathsf T}x:Ax\le b,\ x\ge 0\rbrace$ 와 쌍대 문제가 모두 허용해를 갖고 쌍대 최적값이 $\delta$ 라 한다. 약쌍대성으로 원 문제의 값은 $\delta$ 이하이므로 $Ax\le b$, $-c^{\mathsf T}x\le-\delta$, $x\ge 0$ 에 해가 있음을 보이면 된다. 해가 없으면 변형 표의 둘째 행에서 $y\ge 0$, $t\ge 0$ 이 존재해 $A^{\mathsf T}y\ge tc$, $b^{\mathsf T}y\lt t\delta$ 다.

$t\gt 0$ 이면 $y/t$ 가 목적값이 $\delta$ 보다 작은 쌍대 허용해이므로 모순이다. $t=0$ 이면 $A^{\mathsf T}y\ge 0$, $b^{\mathsf T}y\lt 0$ 이고, 쌍대 허용해에 $y$ 의 양수배를 더하면 허용해로 남은 채 목적값이 $\delta$ 아래로 내려가 모순이다.

## 무한 차원

$A$ 가 무한 개의 열을 갖거나 무한 차원 공간의 연속 선형사상이면 $\mathrm{cone}(A)$ 가 닫혀 있지 않을 수 있고, 그때는 조건 1 이 실패해도 조건 2 가 성립하지 않는다. 닫힘을 보장하는 조건(Slater 조건 같은 내부점 조건)을 따로 둔다.

# 활용

- **선형계획법의 쌍대성.** 강쌍대성의 증명과, 최적이 아니라는 것을 확인하는 증거가 쌍대 변수라는 해석이 이 정리에서 나온다.
- **KKT 조건.** 부등식 제약 최적화의 국소 최적점에서 활성 제약의 기울기들이 목적함수의 기울기를 음이 아닌 결합으로 만든다는 KKT(Karush–Kuhn–Tucker) 조건은, 선형화한 계에 Farkas 보조정리를 쓴 것이다. [Lagrange 쌍대성](lagrange-duality.md)에서 쓴다.
- **차익 거래 없음.** 유한 개의 상태와 자산이 있는 시장에서 비용이 $0$ 이하이고 모든 상태에서 손실이 없으며 어떤 상태에서 이익이 나는 포트폴리오가 없다는 것과, 모든 상태에 양의 가격을 주는 상태 가격 벡터가 있다는 것이 동치다. 자산 가격 결정의 기본 정리의 유한 판본이다.
- **[Markov 연쇄](markov-chains.md)의 정상분포.** 유한 전이행렬 $P$ 에 대해 $\pi^{\mathsf T}(P-I)=0$, $\pi\ge 0$, $\sum\pi_i=1$ 에 해가 없다고 하면 대안 계에서 모든 $i$ 에서 $(Pv)\_i\gt v_i$ 인 $v$ 가 나온다. $(Pv)\_i$ 는 $v$ 의 좌표들의 가중평균이므로 $v_i$ 가 최대인 좌표에서 모순이다. 따라서 정상분포가 존재한다.

[^1]: Alexander Schrijver, *Theory of Linear and Integer Programming*, Wiley, 1986, 7 장. 원 논문은 J. Farkas, "Theorie der einfachen Ungleichungen", *Journal für die reine und angewandte Mathematik* **124** (1902), 1–27.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)

## 더 알아보기

- [선형계획법](linear-programming.md)
- [Gordan 보조정리](gordan-lemma.md)

#optimization #linear_algebra #analysis
