# Freidlin–Wentzell 이론

# 개요

잡음의 세기가 $0$ 으로 가는 확률미분방정식의 해는 결정론적 궤도로 수렴한다. 안정 평형에서 출발한 해도 언젠가는 평형의 끌림 영역을 벗어난다.

Freidlin–Wentzell 이론은 그 벗어남의 확률과 경로를 정하는 [대편차 원리](large-deviations.md)다. 경로마다 작용범함수의 값을 매기고, 벗어나는 경로 전체에서 그 값을 최소화한 것이 지수 감쇠율이 된다.

# 직관

$\mathbb R^d$ 에서 잡음의 세기를 $\sqrt\varepsilon$ 으로 둔 방정식을 본다.

$$
dX^\varepsilon_t=b(X^\varepsilon_t)\thinspace dt+\sqrt\varepsilon\thinspace dW_t,\qquad X^\varepsilon_0=x_0
$$

$b$ 가 퍼텐셜 $V$ 의 음의 기울기이고 $x_0$ 이 $V$ 의 국소 최솟값이면, $\varepsilon=0$ 에서 해는 $x_0$ 에 머문다. $\varepsilon\gt 0$ 에서는 해가 우물의 벽을 넘어 다른 최솟값으로 간다. 그 일이 일어나기까지 걸리는 시간을 재려 한다.

평형 근처에서 $b$ 를 선형화하면 해가 Gauss 과정이고 평형에서의 거리가 $\sqrt\varepsilon$ 크기다. 벽까지의 거리는 $\varepsilon$ 에 무관한 양이므로 Gauss 꼬리가 $e^{-c/\varepsilon}$ 꼴의 확률을 준다. 그런데 선형화는 평형 근처에서만 맞고 벽은 그 밖에 있으므로 이 계산은 상수 $c$ 를 주지 못하고, 어느 경로로 넘는지도 말하지 않는다.

벽을 넘는 사건을 한 번에 재는 대신 경로마다 따로 잰다. 해가 주어진 경로 $\varphi$ 를 따라가려면 잡음이 매 순간 $\dot\varphi-b(\varphi)$ 만큼 밀어야 한다. $\sqrt\varepsilon\thinspace W$ 가 그만큼 밀 확률의 지수 감쇠율은 밀어야 하는 양의 제곱을 시간에 대해 적분한 것이고, 벽을 넘는 경로들 가운데 그 적분이 가장 작은 것이 사건의 확률을 정한다.

# 정의

## 작용범함수

$\varphi:\lbrack 0,T\rbrack\to\mathbb R^d$ 가 절대연속이면 **작용범함수**를 다음으로 정의한다.

$$
I_T(\varphi)=\frac12\int_0^T\vert\dot\varphi_t-b(\varphi_t)\vert^2\thinspace dt
$$

절대연속이 아닌 경로에서는 $I_T(\varphi)=\infty$ 로 둔다. $b=0$ 인 경우의 작용범함수가 Schilder 정리의 rate function 이다.

## 준퍼텐셜

평형 $x_0$ 에서 점 $y$ 로 가는 **준퍼텐셜**은 두 점을 잇는 모든 시간과 경로에서 작용을 최소화한 값이다.

$$
U(x_0,y)=\inf\lbrace I_T(\varphi):T\gt 0,\thinspace\varphi_0=x_0,\thinspace\varphi_T=y\rbrace
$$

$b=-\nabla V$ 인 경우 $U(x_0,y)=2\bigl(V(y)-V(x_0)\bigr)$ 이고, 최소를 주는 경로는 결정론적 흐름을 시간 방향으로 뒤집은 것이다.

# 성질

## Schilder 정리

$\sqrt\varepsilon\thinspace W$ 의 분포는 $\varepsilon\to 0$ 에서 rate function $\tfrac12\int_0^T\vert\dot\varphi\vert^2dt$ 의 대편차 원리를 만족한다[^1]. 증명은 Brown 경로를 조각마다 선형인 경로로 근사하고, 유한 차원 증분의 Gauss 꼬리에 Cramér 정리를 쓰는 것이다.

## Freidlin–Wentzell 정리

$b$ 가 Lipschitz 조건을 만족하면 $X^\varepsilon$ 의 분포는 $C(\lbrack 0,T\rbrack;\mathbb R^d)$ 에서 rate function $I_T$ 의 대편차 원리를 만족한다[^2]. 닫힌집합 $F$ 와 열린집합 $G$ 에서 다음이 성립한다.

$$
\limsup\_{\varepsilon\to 0}\varepsilon\log P(X^\varepsilon\in F)\le-\inf_FI_T,\qquad\liminf\_{\varepsilon\to 0}\varepsilon\log P(X^\varepsilon\in G)\ge-\inf_GI_T
$$

증명의 요지. 잡음이 가법적이므로 $w\mapsto X$ 를 주는 사상이 상한 노름에서 연속이고, Schilder 정리에 사상 원리를 적용하면 rate function 이 $\inf\lbrace\tfrac12\int\vert\dot w\vert^2:w$ 가 $\varphi$ 를 낳는다$\rbrace$ 로 나온다. 방정식을 풀면 $\dot w=\dot\varphi-b(\varphi)$ 가 유일한 선택이므로 그 하한이 $I_T(\varphi)$ 다. 잡음이 상태에 의존하면 사상이 연속이 아니고, 그때는 결정론적 궤도 주변에서 방정식을 직접 근사해 같은 결론을 얻는다.

## 탈출 시간

$D$ 가 $x_0$ 의 끌림 영역이고 경계에서 준퍼텐셜의 최솟값이 $U^\ast$ 이면, 탈출 시각 $\tau^\varepsilon$ 의 기대값이 다음을 만족한다[^2].

$$
\lim\_{\varepsilon\to 0}\varepsilon\log E\lbrack\tau^\varepsilon\rbrack=U^\ast
$$

$b=-\nabla V$ 에서 $U^\ast=2\Delta V$ 이고 $\Delta V$ 는 평형에서 가장 낮은 안장점까지의 퍼텐셜 차다. 탈출 지점은 그 안장점 근방에 집중하고, 탈출 경로는 준퍼텐셜을 최소화하는 경로에 수렴한다.

# 활용

- **Kramers 법칙.** 화학 반응의 속도상수가 활성화 에너지에 지수적으로 의존한다는 법칙이 탈출 시간 정리의 특수한 경우다. 온도가 $\varepsilon$ 의 자리에 들어가고 안장점이 전이 상태가 된다.
- **준안정 상태의 전이.** 여러 평형이 있는 계에서 평형 사이의 전이 확률을 준퍼텐셜의 차로 비교하면, 긴 시간 뒤의 분포가 준퍼텐셜이 가장 낮은 평형에 집중한다. 전이 경로를 수치로 찾는 방법이 이 변분 문제를 푼다.
- **희소사건의 추정.** 중요도 표본추출에서 표본을 어느 방향으로 기울일지를 작용을 최소화하는 경로가 정한다. 통신망의 버퍼 넘침과 보험의 파산 확률 추정에 쓴다.
- **상전이의 동역학.** 무한차원으로 넓힌 판본이 확률적 편미분방정식의 상 사이 전이를 다루고, 작용범함수가 계면의 면적에 대한 범함수로 나타난다.

[^1]: M. Schilder, "Some asymptotic formulas for Wiener integrals", Transactions of the American Mathematical Society **125** (1966), 63–85.

[^2]: M. I. Freidlin, A. D. Wentzell, *Random Perturbations of Dynamical Systems*, 3판, Springer, 2012, 3 장과 4 장. 탈출 시간과 준퍼텐셜은 4 장이다.

# 연관 문서

## 선수지식

- [대편차 원리](large-deviations.md)
- [확률미분방정식](stochastic-differential-equations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #statistics
