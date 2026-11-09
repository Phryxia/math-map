# Sylvester 방정식

# 개요

**Sylvester 방정식(Sylvester equation)** 은 정사각[행렬](matrices.md) $A$, $B$ 와 행렬 $C$ 가 주어졌을 때 미지의 행렬 $X$ 에 대한 방정식 $AX-XB=C$ 다. 위삼각행렬 $\begin{pmatrix}1&3\cr 0&2\end{pmatrix}$ 를 대각행렬로 바꾸려면 오른쪽 위의 $3$ 을 지우는 기저 변환이 필요하고, 그 변환의 성분이 이 꼴의 방정식을 푼 값이다. $A$ 와 $B$ 를 [Schur 분해](schur-decomposition.md)로 위삼각 꼴로 바꾸면 이 방정식은 열마다 삼각계를 푸는 문제가 된다.

# 직관

$T=\begin{pmatrix}1&3\cr 0&2\end{pmatrix}$ 는 고윳값이 $1$, $2$ 다. 왼쪽 위 칸과 오른쪽 아래 칸을 떼어 놓으려고 $S=\begin{pmatrix}1&x\cr 0&1\end{pmatrix}$ 로 닮음 변환을 하면

$$
S^{-1}TS=\begin{pmatrix}1&1\cdot x-x\cdot 2+3\cr 0&2\end{pmatrix}
$$

이다. 오른쪽 위가 $0$ 이 되려면 $1\cdot x-x\cdot 2=-3$, 곧 $x=3$ 이다. 실제로 $T(3,1)^{\mathsf T}=(6,2)^{\mathsf T}=2(3,1)^{\mathsf T}$ 라 $S$ 의 둘째 열이 고윳값 $2$ 의 고유벡터다.

Schur 분해 문서의 $\begin{pmatrix}2&2\cr 0&2\end{pmatrix}$ 에서 같은 계산을 하면 $2x-x\cdot 2=-2$, 곧 $0=-2$ 가 되어 $x$ 가 없다. 두 칸의 고윳값이 같아서 $x$ 의 계수가 $0$ 이 된 것이다. 칸이 행렬일 때도 같다. 블록 위삼각행렬 $\begin{pmatrix}A&C\cr 0&B\end{pmatrix}$ 를 $\begin{pmatrix}I&X\cr 0&I\end{pmatrix}$ 로 변환하면 오른쪽 위 블록이 $AX-XB+C$ 이므로, 블록을 떼어 내는 일은 $AX-XB=-C$ 를 푸는 일이다.

# 정의

$A$ 를 $m\times m$, $B$ 를 $n\times n$, $C$ 를 $m\times n$ 복소행렬이라 하자. $m\times n$ 행렬 $X$ 에 대한 방정식

$$
AX-XB=C
$$

를 **Sylvester 방정식** 이라 한다[^1]. 직관 절의 첫 계산은 $m=n=1$, $A=(1)$, $B=(2)$, $C=(-3)$ 인 경우다. $B=-A^\ast$ 로 둔 $AX+XA^\ast=C$ 를 연속 시간 **Lyapunov 방정식(Lyapunov equation)** 이라 한다.

사상 $\mathcal S(X)=AX-XB$ 는 $m\times n$ 행렬 공간 위의 선형사상이다. 그 Frobenius 노름(Frobenius norm)에 대한 최소 확대율

$$
\mathrm{sep}(A,B)=\min_{X\ne 0}\frac{\Vert AX-XB\Vert\_F}{\Vert X\Vert\_F}
$$

을 $A$ 와 $B$ 의 분리도(separation)라 한다. $m=n=1$ 이면 $\mathrm{sep}(a,b)=\vert a-b\vert$ 다.

# 성질

## 해의 존재와 유일성

Sylvester 방정식이 모든 $C$ 에 대해 해를 하나만 갖는 것은 $A$ 와 $B$ 가 공통 [고윳값](eigenvalues.md)을 갖지 않는 것과 동치다[^1].

증명의 요지. $A=Q\_AT\_AQ\_A^\ast$, $B=Q\_BT\_BQ\_B^\ast$ 로 Schur 분해하고 $Y=Q\_A^\ast XQ\_B$, $D=Q\_A^\ast CQ\_B$ 로 바꾸면 방정식은 $T\_AY-YT\_B=D$ 다. $T\_B$ 가 위삼각이므로 $Y$ 의 $k$ 번째 열 $y_k$ 는

$$
(T\_A-t\_{kk}I)\thinspace y_k=d_k+\sum_{j\lt k}t\_{jk}\thinspace y_j
$$

를 만족하고, $t\_{kk}$ 는 $B$ 의 고윳값이다. $t\_{kk}$ 가 $A$ 의 고윳값이 아니면 $T\_A-t\_{kk}I$ 가 대각성분이 $0$ 아닌 위삼각행렬이라 $y_1,y_2,\dots$ 가 차례로 하나씩 정해진다. 공통 고윳값 $\lambda$ 가 있으면 $Av=\lambda v$, $w^\ast B=\lambda w^\ast$ 인 $v,w\ne 0$ 에 대해 $\mathcal S(vw^\ast)=\lambda vw^\ast-\lambda vw^\ast=0$ 이므로 $\mathcal S$ 가 단사가 아니다.

## Bartels–Stewart 알고리즘

위 증명이 그대로 계산법이다. $A$ 와 $B$ 의 Schur 분해를 [QR 알고리즘](qr-algorithm.md)으로 구하고, 열마다 위삼각계를 뒤에서부터 풀고, $X=Q\_AYQ\_B^\ast$ 로 되돌린다. 이것을 **Bartels–Stewart 알고리즘(Bartels–Stewart algorithm)** 이라 한다[^2]. Schur 분해가 $O(m^3+n^3)$ 번, 삼각계 $n$ 개가 $O(m^2n)$ 번의 연산이다.

$A=\begin{pmatrix}1&1\cr 0&2\end{pmatrix}$, $B=(3)$, $C=(1,1)^{\mathsf T}$ 이면 $A$ 와 $B$ 가 이미 위삼각이라 $(A-3I)x=C$ 하나를 푼다. $\begin{pmatrix}-2&1\cr 0&-1\end{pmatrix}x=\begin{pmatrix}1\cr 1\end{pmatrix}$ 에서 $x_2=-1$, $-2x_1-1=1$ 이므로 $X=(-1,-1)^{\mathsf T}$ 다.

## 고윳값 사이의 거리와 분리도

$\mathcal S$ 의 고윳값은 $A$ 의 고윳값 $\lambda_i$ 와 $B$ 의 고윳값 $\mu_j$ 의 차 $\lambda_i-\mu_j$ 전부다. 위 증명의 공통 고윳값 논법을 $\mathcal S(vw^\ast)=(\lambda-\mu)vw^\ast$ 로 바꾸면 이 차들이 고윳값으로 나온다. 그래서

$$
\mathrm{sep}(A,B)\le\min_{i,j}\vert\lambda_i-\mu_j\vert,\qquad \Vert X\Vert\_F\le\frac{\Vert C\Vert\_F}{\mathrm{sep}(A,B)}
$$

이다. $A$ 와 $B$ 가 정규행렬이면 첫 부등식이 등식이다. 정규행렬이 아니면 $\mathrm{sep}$ 이 고윳값 사이의 거리보다 훨씬 작을 수 있고, 그때 해 $X$ 가 크다[^1].

## 적분 표현

$A$ 의 모든 고윳값의 실수부가 음수이고 $B$ 의 모든 고윳값의 실수부가 양수이면

$$
X=-\int_0^\infty e^{tA}\thinspace C\thinspace e^{-tB}\thinspace dt
$$

가 해다. $Y=\int_0^\infty e^{tA}Ce^{-tB}dt$ 로 두고 $\frac{d}{dt}\bigl(e^{tA}Ce^{-tB}\bigr)=A\bigl(e^{tA}Ce^{-tB}\bigr)-\bigl(e^{tA}Ce^{-tB}\bigr)B$ 를 $0$ 부터 $\infty$ 까지 적분하면 $-C=AY-YB$ 이고, $X=-Y$ 다. Lyapunov 방정식 $A^{\mathsf T}P+PA=-Q$ 에 적용하면 [Lyapunov 안정성](lyapunov-stability.md) 문서의 해 $P=\int_0^\infty e^{tA^{\mathsf T}}Qe^{tA}dt$ 가 나온다.

# 활용

- 블록 대각화와 행렬함수. Schur 형을 고윳값이 서로 떨어진 묶음으로 나눈 블록 위삼각 꼴에서, 직관 절의 변환으로 블록을 떼어 블록 대각 꼴로 만든다. 블록마다 행렬함수를 계산하는 Schur–Parlett 방법이 이 단계를 쓴다.
- 안정성 판정. Lyapunov 안정성 문서의 Lyapunov 방정식이 $B=-A^{\mathsf T}$ 인 경우이고, 해가 양의 정부호인지로 $A$ 의 고윳값이 모두 왼쪽 반평면에 있는지 판정한다.
- 불변 부분공간의 섭동. $A$ 를 블록 위삼각 꼴 $\begin{pmatrix}A\_{11}&A\_{12}\cr 0&A\_{22}\end{pmatrix}$ 로 둘 때, $A$ 를 크기 $\varepsilon$ 만큼 바꾸면 첫 블록에 해당하는 불변 부분공간은 대략 $\varepsilon/\mathrm{sep}(A\_{11},A\_{22})$ 만큼 기운다[^1]. [고윳값 조건수](eigenvalue-condition-number.md)가 고윳값 하나에 대해 주는 양을 부분공간으로 넓힌 것이다.

[^1]: N. J. Higham, *Accuracy and Stability of Numerical Algorithms*, 2nd ed., SIAM, 2002. 16 장.
[^2]: R. H. Bartels, G. W. Stewart, "Solution of the matrix equation AX + XB = C", *Communications of the ACM* 15 (1972), 820–826.

# 연관 문서

## 선수지식

- [Schur 분해](schur-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #analysis
