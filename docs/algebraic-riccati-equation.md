# 대수 Riccati 방정식

# 개요

**대수 Riccati 방정식(algebraic Riccati equation)** 은 미지의 대칭행렬 $X$ 가 일차항과 이차항으로 함께 들어 있는 [행렬](matrices.md) 방정식이다. 가만두면 원점에서 저절로 멀어지는 수레를 계속 밀어 원점 근처에 붙잡아 두려 할 때, 위치에 곱해 밀 힘을 정하는 가장 좋은 배율이 이 방정식의 해다. 수레 하나에서는 이차방정식 $2s-s^2+1=0$ 이고 근이 둘이라, 어느 근이 답인지부터 가려야 한다. 계수로 만든 크기 두 배의 행렬에서 [고윳값](eigenvalues.md)의 실수부가 음수인 고유벡터들을 모아 해를 읽으면, 답이 되는 근 하나가 골라진다.

# 직관

[선형 이차 조절기](linear-quadratic-regulator.md)에서 수레의 위치가 $\dot x=x+u$ 를 따른다고 하자. 힘 $u$ 를 주지 않으면 $x$ 는 $e^t$ 배로 커진다. 비용 $\int_0^\infty(x^2+u^2)\thinspace dt$ 를 가장 작게 하는 입력은 $u=-sx$ 꼴이다. 그 문서의 미분 Riccati 방정식에서 시간에 따라 변하지 않는 해를 찾으면, $s$ 는 다음 방정식을 만족한다.

$$
2s-s^2+1=0
$$

근은 $s=1+\sqrt2$ 와 $s=1-\sqrt2$ 다. $u=-sx$ 를 넣으면 $\dot x=(1-s)x$ 이므로, 첫 근에서는 $\dot x=-\sqrt2\thinspace x$ 로 수레가 원점으로 돌아오고 비용은 $(1+\sqrt2)x_0^2$ 이다. 둘째 근에서는 $\dot x=\sqrt2\thinspace x$ 로 수레가 멀어지고, 비용 공식 $sx_0^2$ 이 음수가 되어 실제 비용일 수 없다. 답은 닫은 계가 원점으로 돌아오는 근이다.

미지수가 행렬이면 근의 공식이 없고 해가 여러 개일 수 있어, 위처럼 근을 다 구하고 고르는 방법을 쓸 수 없다. 수레의 두 근이 닫은 계의 비율 $-\sqrt2$ 와 $\sqrt2$ 를 주었으니, 이 두 비율을 고윳값으로 갖는 행렬에서 출발한다. 방정식의 계수로 만든 다음 행렬은 고윳값이 $\pm\sqrt2$ 다.

$$
H=\begin{pmatrix}1&-1\cr -1&-1\end{pmatrix}
$$

고윳값 $-\sqrt2$ 의 고유벡터는 $(1,\thinspace 1+\sqrt2)$ 이고, 둘째 성분을 첫째 성분으로 나누면 답 $s=1+\sqrt2$ 가 나온다. 고윳값 $\sqrt2$ 의 고유벡터 $(1,\thinspace 1-\sqrt2)$ 는 버린 근을 준다. 행렬일 때도 실수부가 음수인 고윳값의 고유벡터를 모아 같은 나눗셈을 하면 답이 골라진다.

# 정의

## 연속시간 대수 Riccati 방정식

$A$ 는 $n\times n$, $B$ 는 $n\times p$ 실행렬이고 $W$ 는 양의 준정부호, $V$ 는 양의 정부호 대칭행렬이다. $G=BV^{-1}B^{\mathsf T}$ 로 두고, $n\times n$ 행렬 $X$ 에 대한 다음 방정식을 **연속시간 대수 Riccati 방정식(continuous-time algebraic Riccati equation)** 이라 한다.

$$
A^{\mathsf T}X+XA-XGX+W=0
$$

선형 이차 조절기 문서의 미분 Riccati 방정식에서 $\dot S=0$ 으로 둔 식이다. 직관 절의 수레는 $n=p=1$, $A=B=W=V=1$ 인 경우다.

## 안정화 해

대칭행렬 $X$ 가 방정식을 만족하고 $A-GX$ 의 고윳값의 실수부가 모두 음수이면, $X$ 를 **안정화 해(stabilizing solution)** 라 한다. 수레에서 $A-GX=1-s$ 이므로 $s=1+\sqrt2$ 가 안정화 해이고 $s=1-\sqrt2$ 는 아니다.

## Hamilton 행렬

방정식의 계수로 만든 $2n\times 2n$ 행렬

$$
H=\begin{pmatrix}A&-G\cr -W&-A^{\mathsf T}\end{pmatrix}
$$

를 이 방정식의 **Hamilton 행렬(Hamiltonian matrix)** 이라 한다. 직관 절의 $H$ 가 수레의 Hamilton 행렬이다. 다음 $J$ 에 대해 $JH$ 는 대칭행렬이다.

$$
J=\begin{pmatrix}0&I\cr -I&0\end{pmatrix},\qquad JH=\begin{pmatrix}-W&-A^{\mathsf T}\cr -A&G\end{pmatrix}
$$

## 안정화 가능성과 검출 가능성

어떤 $p\times n$ 행렬 $K$ 에 대해 $A-BK$ 의 고윳값의 실수부가 모두 음수이면 쌍 $(A,B)$ 를 **안정화 가능(stabilizable)** 이라 한다. $(A^{\mathsf T},C^{\mathsf T})$ 가 안정화 가능이면 쌍 $(C,A)$ 를 **검출 가능(detectable)** 이라 한다. [가제어성](controllability.md) 문서의 극배치 정리에 따라 가제어인 쌍은 안정화 가능하다. 수레는 $K=2$ 로 $A-BK=-1$ 이 되어 안정화 가능하다.

# 성질

## 불변 부분공간과 해의 대응

$n\times n$ 행렬 $X$ 가 방정식을 만족하는 것과 다음 식이 성립하는 것은 동치다.[^1]

$$
H\begin{pmatrix}I\cr X\end{pmatrix}=\begin{pmatrix}I\cr X\end{pmatrix}(A-GX)
$$

좌변의 위 블록은 $A-GX$ 이고 우변의 위 블록과 같다. 아래 블록은 좌변이 $-W-A^{\mathsf T}X$, 우변이 $XA-XGX$ 이고, 둘이 같다는 식이 Riccati 방정식이다. 그래서 해 $X$ 마다 $\begin{pmatrix}I\cr X\end{pmatrix}$ 의 열들이 생성하는 $n$ 차원 공간은 $H$ 를 곱해도 그 안에 머물고, $H$ 를 그 공간에 제한한 사상의 고윳값이 $A-GX$ 의 고윳값이다.

거꾸로 $n$ 차원 불변 부분공간이 $\begin{pmatrix}U_1\cr U_2\end{pmatrix}$ 의 열로 생성되고 $U_1$ 이 가역이면, 다음 $X$ 가 해다.

$$
X=U_2U_1^{-1}
$$

직관 절의 고유벡터 나눗셈이 $n=1$ 인 경우다.

## 고윳값의 대칭

$\lambda$ 가 $H$ 의 고윳값이면 $-\lambda$ 도 고윳값이다. $JH$ 가 대칭이므로 $H^{\mathsf T}J=-JH$ 이고, $J^{-1}H^{\mathsf T}J=-H$ 다. $H$ 와 $-H^{\mathsf T}$ 가 닮음이므로 두 행렬의 고윳값이 같고, $-H^{\mathsf T}$ 의 고윳값은 $H$ 의 고윳값에 $-1$ 을 곱한 것이다.

$H$ 가 허수축 위에 고윳값을 갖지 않으면, 실수부가 음수인 고윳값이 중복도를 세어 정확히 $n$ 개다. 안정화 해의 $A-GX$ 는 고윳값이 이 $n$ 개여야 하므로, 안정화 해는 있다면 하나뿐이다. 수레에서는 $\pm\sqrt2$ 가 짝이고 $-\sqrt2$ 가 $1-s$ 다.

## 존재와 유일성

$W=C^{\mathsf T}C$ 로 쓸 때 $(A,B)$ 가 안정화 가능이고 $(C,A)$ 가 검출 가능이면, 안정화 해 $X$ 가 존재하고 양의 준정부호다. 이 $X$ 는 양의 준정부호인 해 가운데 유일하다.[^1] 두 조건은 $H$ 가 허수축 위에 고윳값을 갖지 않는 것과 위 대응의 $U_1$ 이 가역인 것을 보장한다.

이때 $u=-V^{-1}B^{\mathsf T}Xx$ 가 다음 비용을 최소화하고, 최소 비용은 $x_0^{\mathsf T}Xx_0$ 이다.[^1]

$$
\int_0^\infty\bigl(x^{\mathsf T}Wx+u^{\mathsf T}Vu\bigr)\thinspace dt
$$

수레의 최소 비용 $(1+\sqrt2)x_0^2$ 이 이것이다.

## Schur 방법

$H$ 를 [Schur 분해](schur-decomposition.md)해 실 Schur 형 $Q^{\mathsf T}HQ$ 의 대각 블록 가운데 실수부가 음수인 고윳값의 블록을 앞에 둔다. 대각성분의 순서는 원하는 대로 정할 수 있으므로 이 배열은 항상 가능하다. 그러면 $Q$ 의 처음 $n$ 열이 그 고윳값들의 불변 부분공간을 생성하고, 그 열을 위아래 $n$ 행씩 $U_1$, $U_2$ 로 나누어 $X=U_2U_1^{-1}$ 을 계산한다. 이것을 **Schur 방법(Schur method)** 이라 한다.[^2]

고유벡터 대신 직교행렬 $Q$ 의 열을 쓰므로 고윳값이 겹치거나 가까워도 계산이 안정하다. Schur 형은 [QR 알고리즘](qr-algorithm.md)으로 구하고, 연산량은 $O(n^3)$ 이다. 수레에서는 $Q$ 의 첫 열이 고유벡터 $(1,\thinspace 1+\sqrt2)$ 를 길이 $1$ 로 나눈 것이라 같은 $s$ 가 나온다.

같은 불변 부분공간은 [행렬 부호 함수](matrix-sign-function.md)로도 얻는다. Newton 반복으로 $\mathrm{sign}(H)$ 를 계산하면 $(I-\mathrm{sign}(H))/2$ 의 열공간이 그 부분공간이다.

## Newton–Kleinman 반복

$A-BK_0$ 의 고윳값의 실수부가 모두 음수인 $K_0$ 에서 시작해 $k=0,1,2,\dots$ 에 대해 다음을 되풀이한다.

$$
\begin{aligned}
&(A-BK_k)^{\mathsf T}X_k+X_k(A-BK_k)=-\bigl(W+K_k^{\mathsf T}VK_k\bigr)\cr
&K\_{k+1}=V^{-1}B^{\mathsf T}X_k
\end{aligned}
$$

첫 식은 [Sylvester 방정식](sylvester-equation.md) 문서의 Lyapunov 방정식(Lyapunov equation)이라 Bartels–Stewart 알고리즘으로 푼다. 이 반복을 **Newton–Kleinman 반복(Newton–Kleinman iteration)** 이라 한다. 안정화 가능성과 검출 가능성 아래에서 모든 $A-BK_k$ 의 고윳값 실수부가 음수로 남고, $X_0\succeq X_1\succeq\cdots$ 이 안정화 해 $X$ 로 이차 수렴한다.[^3]

$R(X)=A^{\mathsf T}X+XA-XGX+W$ 의 [미분](derivative.md)은 $\Delta\mapsto(A-GX)^{\mathsf T}\Delta+\Delta(A-GX)$ 이다. $GX_k=BK\_{k+1}$ 이므로 위 반복은 $R(X)=0$ 에 대한 [Newton 법](newton-method.md)과 같다. 수레에서 Lyapunov 방정식은 $2(1-K)x=-(1+K^2)$ 이고, $K_0=2$ 에서 시작하면 다음이 나온다.

$$
X_0=\frac52,\qquad X_1=\frac{29}{12},\qquad X_2=\frac{985}{408}
$$

$1+\sqrt2$ 와의 차는 $0.086$, $0.0025$, $0.0000021$ 로, 걸음마다 맞는 자릿수가 대략 두 배가 된다.

## 이산시간 판본

선형 이차 조절기 문서의 이산시간 대수 Riccati 방정식에도 같은 구조가 있다. Hamilton 행렬 대신 $J$ 를 보존하는 사교 펜슬(symplectic pencil)을 쓰고, 고윳값이 $\lambda$ 와 $1/\lambda$ 로 짝을 지으며, 안정화 해는 단위원 안쪽 고윳값의 불변 부분공간에서 나온다.[^1] Newton 반복의 각 단계는 Lyapunov 방정식 대신 [Stein 방정식](stein-equation.md)을 푸는 것이 된다.

# 활용

- 선형 이차 조절기의 무한 구간 연속시간 문제. 되먹임 이득 $V^{-1}B^{\mathsf T}X$ 를 안정화 해에서 얻는다.
- 연속시간 [Kalman 필터](kalman-filter.md)(Kalman–Bucy filter)의 정상 상태. $A$ 를 $A^{\mathsf T}$ 로, $G$ 를 관측 행렬과 관측 잡음 [공분산](covariance.md)으로 만든 행렬로 바꾼 방정식의 안정화 해가 정상 상태 오차 공분산이다.[^1]
- $H\_\infty$ 제어($H\_\infty$ control). $G$ 를 $BV^{-1}B^{\mathsf T}$ 에서 외란 입력 항 $\gamma^{-2}B_1B_1^{\mathsf T}$ 을 뺀 부정부호 행렬로 바꾼 방정식의 안정화 해가 존재하는지로, 외란의 영향을 $\gamma$ 배 이하로 줄이는 되먹임이 있는지 판정한다.[^1]
- [Lyapunov 안정성](lyapunov-stability.md). $G=0$ 이고 $W$ 가 양의 정부호이면 방정식이 Lyapunov 방정식이 되고, 안정화 해가 닫은 계의 Lyapunov 함수 $x^{\mathsf T}Xx$ 를 준다.

[^1]: Kemin Zhou, John C. Doyle, Keith Glover, *Robust and Optimal Control*, Prentice Hall (1996), 13 장, 14 장, 16 장. Hamilton 행렬과 불변 부분공간, 안정화 해의 존재와 유일성, 이산시간 판본, 선형 이차 조절과 Kalman–Bucy 필터, H∞ 제어의 Riccati 방정식.
[^2]: Alan J. Laub, "A Schur method for solving algebraic Riccati equations", *IEEE Transactions on Automatic Control* 24 (1979), 913–921.
[^3]: David L. Kleinman, "On an iterative technique for Riccati equation computations", *IEEE Transactions on Automatic Control* 13 (1968), 114–115.

# 연관 문서

## 선수지식

- [Sylvester 방정식](sylvester-equation.md)
- [선형 이차 조절기](linear-quadratic-regulator.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #linear_algebra #algorithms
