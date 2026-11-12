# 복제자 방정식

# 개요

**복제자 방정식(replicator equation)** 은 큰 집단에서 각 전략을 쓰는 개체의 비율이, 그 전략의 이득이 집단 평균보다 큰 만큼 늘어나도록 바뀌는 미분방정식이다. 먹이 하나를 두고 두 개체가 만날 때 끝까지 싸우는 매 전략과 물러나는 비둘기 전략이 있다. 매만 있는 집단에서는 서로 다치고, 비둘기만 있는 집단에 매가 들어오면 매가 먹이를 독차지한다. 집단에서 매의 비율이 결국 어디에 머무는지가 이 방정식의 물음이다.

복제자 방정식은 비율의 변화를 이득의 차이로 적고, 그 방정식의 평형점이 안정한지로 집단이 머무는 비율을 찾는다.

# 직관

두 개체가 만났을 때 내가 얻는 이득이 다음 표와 같다고 하자. 매끼리 만나면 둘 다 다쳐 $-1$ 을 얻고, 비둘기끼리 만나면 먹이를 나눠 $1$ 씩 얻는다.

| 내 전략 / 상대 전략 | 매     | 비둘기 |
| --------- | ------ | ------ |
| 매        | $-1$   | $2$    |
| 비둘기    | $0$    | $1$    |

집단에서 매의 비율을 $x$ 라 하고 각 개체가 상대를 무작위로 만난다고 하면, 매의 평균 이득은 $-x+2(1-x)=2-3x$ 이고 비둘기의 평균 이득은 $1-x$ 다. 두 값의 차는 $1-2x$ 이므로 $x\lt 1/2$ 이면 매가 더 얻고 $x\gt 1/2$ 이면 비둘기가 더 얻는다.

각 개체가 자기 이득에 비례하는 속도로 자손을 늘리면, 매의 비율은 매의 이득과 집단 평균 이득의 차에 $x$ 를 곱한 속도로 바뀐다. 매의 이득에서 집단 평균 이득을 뺀 값은 $(1-x)(1-2x)$ 이므로 다음이 나온다.

$$
\dot x=x(1-x)(1-2x)
$$

$0\lt x\lt 1/2$ 이면 $\dot x\gt 0$ 이고 $1/2\lt x\lt 1$ 이면 $\dot x\lt 0$ 이다. 매가 하나라도 있으면 집단은 매와 비둘기가 반씩인 상태로 간다.

# 정의

## 이득 행렬과 집단 상태

전략이 $n$ 개이고 전략 $i$ 의 개체가 전략 $j$ 의 개체를 만나 얻는 이득이 $a_{ij}$ 일 때 $A=(a_{ij})$ 를 **이득 행렬(payoff matrix)** 이라 한다. 전략 $i$ 를 쓰는 개체의 비율을 $x_i$ 라 하면 집단 상태 $x$ 는 다음 단체(simplex)의 점이다.

$$
\Delta_n=\lbrace x\in\mathbb R^n: x_i\ge 0,\thickspace \textstyle\sum_i x_i=1\rbrace
$$

상태 $x$ 에서 전략 $i$ 의 이득은 $(Ax)\_i$ 이고 집단 평균 이득은 $x^{\mathsf T}Ax$ 다. 직관 절의 게임은 $n=2$ 이고 $A$ 의 두 행이 $(-1,2)$, $(0,1)$ 이다.

## 복제자 방정식

$\Delta_n$ 위의 다음 미분방정식을 **복제자 방정식** 이라 한다[^1].

$$
\dot x_i=x_i\big((Ax)\_i-x^{\mathsf T}Ax\big)\qquad(i=1,\dots,n)
$$

전략 $i$ 의 개체 수 $N_i$ 가 $\dot N_i=N_i(Ax)\_i$ 로 늘 때 $x_i=N_i/\sum_jN_j$ 가 이 식을 만족한다. 직관 절의 게임에서 $x=x_1$ 로 두면 $\dot x=x(1-x)(1-2x)$ 가 된다.

## 대칭 Nash 균형

$x^\ast\in\Delta_n$ 이 모든 $y\in\Delta_n$ 에 대해 $y^{\mathsf T}Ax^\ast\le x^{\ast\mathsf T}Ax^\ast$ 를 만족하면 $x^\ast$ 를 **대칭 Nash 균형(symmetric Nash equilibrium)** 이라 한다. 두 참가자가 모두 $x^\ast$ 를 쓰는 조합이 [Nash 균형](nash-equilibrium.md)이라는 뜻이다.

직관 절의 게임에서 $x^\ast=(1/2,1/2)$ 이면 매와 비둘기의 이득이 둘 다 $1/2$ 이므로 어떤 $y$ 도 $1/2$ 보다 많이 얻지 못한다. 비둘기만 있는 $(0,1)$ 은 매로 바꾸면 $1$ 대신 $2$ 를 얻으므로 대칭 Nash 균형이 아니다.

## 진화적으로 안정한 전략

$x^\ast\in\Delta_n$ 이 다음 두 조건을 만족하면 **진화적으로 안정한 전략(evolutionarily stable strategy, ESS)** 이라 한다[^2].

- 모든 $y$ 에 대해 $y^{\mathsf T}Ax^\ast\le x^{\ast\mathsf T}Ax^\ast$ 다.
- $y\ne x^\ast$ 에서 등호가 성립하면 $y^{\mathsf T}Ay\lt x^{\ast\mathsf T}Ay$ 다.

첫 조건은 대칭 Nash 균형이고, 둘째 조건은 $x^\ast$ 와 같은 이득을 내는 소수의 돌연변이 $y$ 가 들어와도 $y$ 끼리 만날 때 $x^\ast$ 보다 덜 얻는다는 것이다. 직관 절의 게임에서 매의 비율이 $q$ 인 전략 $y$ 에 대해 $x^{\ast\mathsf T}Ay-y^{\mathsf T}Ay=2(q-1/2)^2$ 이므로 $x^\ast=(1/2,1/2)$ 은 ESS 다.

# 성질

## 단체와 면의 불변성

$\sum_i\dot x_i=x^{\mathsf T}Ax-x^{\mathsf T}Ax=0$ 이므로 해는 $\Delta_n$ 을 떠나지 않는다. $x_i=0$ 이면 $\dot x_i=0$ 이므로 처음에 없던 전략은 생기지 않는다. 그래서 꼭짓점은 모두 평형점이고, $\Delta_n$ 의 각 면도 해가 떠나지 않는 집합이다.

## Nash 균형과 평형점

정리. 복제자 방정식에서 다음이 성립한다[^1].

- 대칭 Nash 균형은 평형점이다.
- [Lyapunov 안정성](lyapunov-stability.md)의 뜻으로 안정한 평형점은 대칭 Nash 균형이다.
- $\Delta_n$ 의 내부에서 출발한 해가 한 점으로 수렴하면 그 극한은 대칭 Nash 균형이다.

첫째의 증명. $x^\ast$ 가 대칭 Nash 균형이면 $x^\ast_i\gt 0$ 인 $i$ 마다 $(Ax^\ast)\_i$ 가 최댓값 $x^{\ast\mathsf T}Ax^\ast$ 와 같으므로 $\dot x_i=0$ 이다. 둘째의 증명. $(Ax^\ast)\_j\gt x^{\ast\mathsf T}Ax^\ast$ 인 $j$ 가 있으면 근방에서 $x_j$ 가 지수적으로 늘어 해가 $x^\ast$ 에서 멀어진다.

역은 성립하지 않는다. 직관 절의 게임에서 비둘기만 있는 상태 $x=0$ 은 꼭짓점이라 평형점이지만 대칭 Nash 균형이 아니고, $\dot x=x(1-x)(1-2x)$ 에서 불안정하다.

## ESS 의 점근 안정성

정리. ESS 는 복제자 방정식의 점근 안정한 평형점이다[^3].

증명의 요지. [KL divergence](kl-divergence.md) $V(x)=\sum_ix^\ast_i\log(x^\ast_i/x_i)$ 를 Lyapunov 함수로 쓴다. 해를 따라 미분하면 다음이 나온다.

$$
\dot V(x)=-\sum_ix^\ast_i\frac{\dot x_i}{x_i}=-\big(x^{\ast\mathsf T}Ax-x^{\mathsf T}Ax\big)
$$

$x^\ast$ 가 ESS 이면 $x^\ast$ 의 근방에서 $x\ne x^\ast$ 일 때 $x^{\ast\mathsf T}Ax\gt x^{\mathsf T}Ax$ 이므로 $V$ 가 엄격한 Lyapunov 함수다[^1]. 직관 절의 게임에서 이 차는 $2(x-1/2)^2$ 이다.

## 가위바위보

가위바위보에서 이기면 $1$, 지면 $-1$, 비기면 $0$ 을 얻는 이득 행렬은 다음과 같다.

$$
A=\begin{pmatrix}0&-1&1\cr 1&0&-1\cr -1&1&0\end{pmatrix}
$$

$A$ 가 반대칭이므로 $x^{\mathsf T}Ax=0$ 이고, $A$ 의 각 열의 합이 $0$ 이므로 $\frac{d}{dt}\log(x_1x_2x_3)=\sum_i(Ax)\_i=0$ 이다. 그래서 내부의 해는 곱 $x_1x_2x_3$ 이 일정한 닫힌 곡선을 돈다. 내부 평형점 $(1/3,1/3,1/3)$ 은 대칭 Nash 균형이고 안정하지만 점근 안정하지 않으며, 모든 $y$ 에서 $y^{\mathsf T}Ay=x^{\ast\mathsf T}Ay=0$ 이므로 ESS 가 아니다.

## 평균 이득의 증가

정리. $A$ 가 대칭행렬이면 평균 이득 $x^{\mathsf T}Ax$ 는 해를 따라 줄지 않는다. 이것을 Fisher 의 자연선택 기본 정리(Fisher's fundamental theorem of natural selection)라 한다[^1].

증명의 요지. $A$ 가 대칭이므로 $\frac{d}{dt}x^{\mathsf T}Ax=2\dot x^{\mathsf T}Ax$ 다. 여기에 복제자 방정식을 넣으면 다음이 나온다.

$$
\frac{d}{dt}x^{\mathsf T}Ax=2\sum_ix_i\big((Ax)\_i-x^{\mathsf T}Ax\big)^2\ge 0
$$

오른쪽은 집단에서 이득의 분산의 두 배다. 유전자 두 개의 조합으로 적합도가 정해지는 이배체 선택 모형에서 이득 행렬이 대칭이 된다.

## Lotka–Volterra 방정식과의 동치

$y_i=x_i/x_n$ ($i=1,\dots,n-1$) 로 좌표를 바꾸고 시간을 다시 재면, $\Delta_n$ 의 내부에서 복제자 방정식은 생물 $n-1$ 종의 Lotka–Volterra 방정식(Lotka–Volterra equation) $\dot y_i=y_i\big(r_i+\sum_jb_{ij}y_j\big)$ 이 된다[^1]. 계수는 $r_i=a_{in}-a_{nn}$, $b_{ij}=a_{ij}-a_{nj}$ 다.

# 활용

- 유한 집단과의 관계. [Moran 모형](moran-model.md)에서 적합도를 상대와 만나 얻는 이득의 평균으로 두면, 집단 크기 $N$ 이 클 때 전략 비율이 복제자 방정식의 오른쪽을 평균 이득으로 나눈 조정된 복제자 방정식(adjusted replicator equation)의 해로 수렴한다[^4]. 평균 이득이 양수이면 나눗셈은 시간이 흐르는 속도만 바꾸므로 궤도는 복제자 방정식과 같다.
- 학습 절차. 각 전략의 가중치를 누적 이득의 지수로 두는 [곱셈 가중치 절차](multiplicative-weights.md)를 연속시간으로 쓰면, $x_i=e^{U_i}/\sum_je^{U_j}$, $\dot U_i=(Ax)\_i$ 에서 $x$ 가 복제자 방정식을 정확히 만족한다.
- 생태학. 위의 동치로 종 사이의 경쟁과 포식을 다루는 Lotka–Volterra 방정식의 평형과 순환을 게임의 균형으로 분석한다.

[^1]: Josef Hofbauer, Karl Sigmund, *Evolutionary Games and Population Dynamics*, Cambridge University Press, 1998, Ch. 6–7.
[^2]: J. Maynard Smith, G. R. Price, "The logic of animal conflict", *Nature* 246 (1973), 15–18.
[^3]: Peter D. Taylor, Leo B. Jonker, "Evolutionarily stable strategies and game dynamics", *Mathematical Biosciences* 40 (1978), 145–156.
[^4]: Arne Traulsen, Jens Christian Claussen, Christoph Hauert, "Coevolutionary dynamics: from finite to infinite populations", *Physical Review Letters* 95 (2005), 238701.

# 연관 문서

## 선수지식

- [Nash 균형](nash-equilibrium.md)
- [Lyapunov 안정성](lyapunov-stability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #probability
