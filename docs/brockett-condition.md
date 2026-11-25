# Brockett 조건

# 개요

**Brockett 조건(Brockett's condition)** 은 상태만 보고 입력을 정하는 연속 되먹임으로 평형점을 안정화하려면 계가 만족해야 하는 필요조건이다. 바퀴 둘 달린 수레는 앞뒤로 가고 제자리에서 돌 수 있지만 옆으로는 미끄러지지 않는다. 수레를 주차 위치로 보내는 일은 앞뒤로 여러 번 움직이면 되지만, 현재 위치와 방향만 보고 속도와 회전을 연속으로 정하는 규칙으로는 할 수 없다.

Brockett 조건은 평형점 근처에서 계가 낼 수 있는 속도들이 영벡터 둘레의 모든 방향을 덮는지를 묻고, 덮지 못하면 그런 규칙이 없다고 답한다.

# 직관

수레의 위치를 $(x,y)$, 바퀴 축에 수직인 진행 방향의 각을 $\theta$ 라 하자. 입력은 전진 속도 $v$ 와 회전 속도 $\omega$ 이고 다음 식을 따른다.

$$
\dot x=v\cos\theta,\qquad\dot y=v\sin\theta,\qquad\dot\theta=\omega
$$

목표는 원점에서 동쪽을 보는 상태 $(0,0,0)$ 이다. 이 상태 근처에서 수레가 낼 수 있는 속도는 $(v\cos\theta,v\sin\theta,\omega)$ 꼴이다. 속도 $(0,\varepsilon,0)$ 을 내려면 $v\cos\theta=0$ 이고 $v\sin\theta=\varepsilon\ne 0$ 이어야 하므로 $\theta=\pm\pi/2$ 이다. $\theta$ 가 $0$ 근처이면 이 속도는 어떤 입력으로도 나오지 않는다.

이것이 연속 되먹임을 막는다. 수직선 위의 계에서 되먹임이 원점을 안정화하면 닫힌 계의 속도는 $x=r$ 에서 음수, $x=-r$ 에서 양수다. [중간값 정리](intermediate-value-theorem.md)로 이 속도는 구간 $\lbrack -r,r\rbrack$ 에서 $0$ 근처의 모든 값을 지난다.

$\mathbb R^3$ 에서도 같다. 원점을 둘러싼 작은 구면 위에서 닫힌 계의 속도는 안쪽을 향하므로 $-x$ 로 연속 변형되고, [Brouwer 차수](brouwer-degree.md)가 $-x$ 와 같아 영이 아니다. 그러면 속도장은 구 안에서 $0$ 근처의 모든 값을 지나야 하고 $(0,\varepsilon,0)$ 도 지나야 하는데, 수레는 그 속도를 낼 수 없다.

# 정의

## 연속 되먹임 안정화

계 $\dot x=f(x,u)$ 에서 $f:\mathbb R^n\times\mathbb R^m\to\mathbb R^n$ 이 연속이고 $f(0,0)=0$ 이라 하자. 연속 함수 $k:\mathbb R^n\to\mathbb R^m$ 이 $k(0)=0$ 을 만족하고 닫힌 계 $\dot x=f(x,k(x))$ 의 원점이 국소 점근 안정이면, $k$ 가 원점을 **연속 되먹임으로 안정화(continuous feedback stabilization)** 한다고 한다. 직관 절의 수레에서 $n=3$, $m=2$, $u=(v,\omega)$ 다.

## Brockett 조건

계 $\dot x=f(x,u)$ 가 다음을 만족하면 **Brockett 조건** 을 만족한다고 한다. $(0,0)$ 의 모든 근방 $N$ 에 대해 상 $f(N)$ 이 $\mathbb R^n$ 에서 $0$ 의 근방을 포함한다.

수레는 $(0,0,0)$ 의 근방 $\lbrace\vert\theta\vert\lt\pi/4\rbrace$ 위에서 $f$ 의 상이 $(0,\varepsilon,0)$ 꼴의 점을 하나도 포함하지 않으므로 조건을 만족하지 않는다.

# 성질

## Brockett 정리

$f$ 가 $C^1$ 이고 연속 되먹임 $k$ 가 원점을 안정화하며 닫힌 계의 해가 초기값마다 유일하면, 계는 Brockett 조건을 만족한다[^1][^2]. Brockett 은 $k$ 가 $C^1$ 인 경우를 증명했고, Zabczyk 가 해의 유일성만 두고 연속인 $k$ 로 넓혔다.

증명의 요지. $F(x)=f(x,k(x))$ 로 둔다. 다음 절의 결과로 끌림 영역 안의 작은 공 $B$ 에서 $\deg(F,B,0)=(-1)^n$ 이다. 차수는 경계에서 $F$ 가 피하는 값의 연결 성분 위에서 일정하므로, $0$ 에 가까운 모든 $y$ 에서 $\deg(F,B,y)=(-1)^n\ne 0$ 이고 $F(x)=y$ 인 $x\in B$ 가 있다. $y=f(x,k(x))$ 이고 $(x,k(x))$ 는 $B$ 가 작으면 $(0,0)$ 의 주어진 근방 안에 있다.

## 점근 안정 평형점의 지표

$\mathbb R^n$ 의 연속 벡터장 $F$ 가 해의 유일성을 가지고 원점이 점근 안정 평형점이면, 원점에서 $F$ 의 지표는 $(-1)^n$ 이다[^3].

증명의 요지. $\varphi\_t$ 를 흐름이라 하고 끌림 영역 안의 작은 구면 $S$ 를 잡는다. $t\in(0,T\rbrack$ 에서 $H\_t(x)=(\varphi\_t(x)-x)/t$, $H\_0=F$ 로 두면 $H$ 는 연속이다. $S$ 위의 점은 평형점도 주기점도 아니므로 $H\_t$ 는 $S$ 위에서 $0$ 이 되지 않는다. $T$ 가 크면 $\varphi\_T(S)$ 가 $S$ 안쪽 작은 공에 들어가 $s\varphi\_T(x)-x$ 가 $s\in\lbrack 0,1\rbrack$ 에서 $0$ 이 되지 않으므로, 호모토피 불변성으로 $F$ 의 차수는 $-x$ 의 차수 $(-1)^n$ 과 같다.

## 선형계에서의 조건

선형계 $\dot x=Ax+Bu$ 에서 $f$ 의 상은 행렬 $\lbrack A\ B\rbrack$ 의 열공간이므로, Brockett 조건은 이 행렬의 계수가 $n$ 인 것과 같다. 선형계가 안정화 가능한 것은 실부가 $0$ 이상인 모든 $\lambda$ 에서 $\lbrack A-\lambda I\ B\rbrack$ 의 계수가 $n$ 인 것이다. [가제어성](controllability.md)의 Popov–Belevitch–Hautus 판정을 $\lambda=0$ 에만 적용한 것이 Brockett 조건이다.

그래서 조건은 충분조건이 아니다. $\dot x\_1=x\_1$, $\dot x\_2=u$ 는 $\lbrack A\ B\rbrack$ 의 계수가 $2$ 라 조건을 만족하지만, $x\_1$ 이 입력과 무관하게 $e^t$ 로 자라므로 안정화되지 않는다.

## 가제어인데 조건을 어기는 계

다음 계를 **비홀로노믹 적분기(nonholonomic integrator)** 라 한다.

$$
\dot x\_1=u\_1,\qquad\dot x\_2=u\_2,\qquad\dot x\_3=x\_1u\_2-x\_2u\_1
$$

속도 $(0,0,\varepsilon)$ 은 $u\_1=u\_2=0$ 을 요구하고 그러면 셋째 성분이 $0$ 이므로, 조건을 어긴다. 두 입력 벡터장 $g\_1=(1,0,-x\_2)$, $g\_2=(0,1,x\_1)$ 의 Lie 괄호(Lie bracket)는 $\lbrack g\_1,g\_2\rbrack=(0,0,2)$ 이고, $g\_1$, $g\_2$ 와 함께 모든 점에서 $\mathbb R^3$ 을 생성한다. Chow–Rashevskii 정리(Chow–Rashevskii theorem)로 이 계는 임의의 두 상태를 잇는 입력을 가진다. 직관 절의 수레는 좌표와 입력을 바꾸면 원점 근처에서 이 꼴이 된다.

## 제어 Lyapunov 함수가 없음

입력에 대해 아핀인 계에 작은 제어 성질을 가진 제어 Lyapunov 함수가 있으면, [Sontag 공식](sontag-formula.md)이 원점 밖에서 매끄럽고 원점에서 연속인 안정화 되먹임을 준다. 이 되먹임의 닫힌 계는 원점 밖에서 해가 유일하고, $V$ 가 해를 따라 줄므로 원점에서 출발한 해는 원점에 머문다. 따라서 Brockett 정리의 가정이 성립하고, 조건을 어기는 수레와 비홀로노믹 적분기에는 작은 제어 성질을 가진 제어 Lyapunov 함수가 없다.

# 활용

- 시변 되먹임. Coron 은 표류항이 없는 가제어 계를 시간에 주기적으로 의존하는 연속 되먹임 $u=k(x,t)$ 로 대역 점근 안정화할 수 있음을 보였다[^4]. 수레의 주차 제어가 이 꼴로 설계된다.
- 불연속 되먹임과 표본 유지. Clarke, Ledyaev, Sontag, Subbotin 은 점근 가제어인 계가 불연속 되먹임을 표본 유지(sample-and-hold)로 적용해 안정화됨을 보였다[^5]. 연속성을 버리면 Brockett 조건의 장애가 사라진다.
- 비홀로노믹 계의 설계. 바퀴 달린 이동 로봇, 트레일러를 단 차량, 우주선의 자세처럼 속도에 제약이 걸린 계에서, 설계 전에 조건을 확인해 연속 정적 되먹임을 찾을지 시변이나 불연속 되먹임으로 갈지 정한다.

[^1]: R. W. Brockett, "Asymptotic stability and feedback stabilization", in R. W. Brockett, R. S. Millman, H. J. Sussmann (eds.), *Differential Geometric Control Theory*, Birkhäuser, 1983, 181–191.
[^2]: J. Zabczyk, "Some comments on stabilizability", *Applied Mathematics and Optimization* 19 (1989), 1–9.
[^3]: M. A. Krasnosel'skii, P. P. Zabreiko, *Geometrical Methods of Nonlinear Analysis*, Springer, 1984.
[^4]: J.-M. Coron, "Global asymptotic stabilization for controllable systems without drift", *Mathematics of Control, Signals, and Systems* 5 (1992), 295–312.
[^5]: F. H. Clarke, Yu. S. Ledyaev, E. D. Sontag, A. I. Subbotin, "Asymptotic controllability implies feedback stabilization", *IEEE Transactions on Automatic Control* 42 (1997), 1394–1407.

# 연관 문서

## 선수지식

- [Brouwer 차수](brouwer-degree.md)
- [Sontag 공식](sontag-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #topology #analysis
