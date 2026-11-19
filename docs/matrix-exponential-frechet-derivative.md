# 행렬 지수의 Fréchet 미분

# 개요

**행렬 지수의 Fréchet 미분(Fréchet derivative of the matrix exponential)** 은 행렬 $A$ 를 조금 바꾸었을 때 [행렬 지수](matrix-exponential.md) $e^A$ 가 얼마나, 어느 방향으로 바뀌는지를 주는 선형사상이다. 수 $x$ 를 $\delta$ 만큼 바꾸면 $e^x$ 는 $e^x\delta$ 만큼 바뀌지만, 행렬에서는 바꾼 방향이 $A$ 와 교환하지 않으면 이 계산이 맞지 않는다. Fréchet 미분은 이 변화를 적분 하나로 쓰고, 고윳값이 $\lambda\_i$, $\lambda\_j$ 인 방향에서는 $e^x$ 의 기울기를 두 고윳값 사이에서 평균한 값으로 준다.

# 직관

$A=\begin{pmatrix}0&0\cr 0&1\end{pmatrix}$ 의 오른쪽 위 성분을 $0$ 에서 $t$ 로 바꾼다. 바꾼 행렬을 $M=\begin{pmatrix}0&t\cr 0&1\end{pmatrix}$ 라 하면 $M^2=M$ 이라 모든 $n\ge 1$ 에서 $M^n=M$ 이다. 거듭제곱급수에 넣으면 다음이 나온다.

$$
e^M=I+\Bigl(1+\frac1{2!}+\frac1{3!}+\cdots\Bigr)M=I+(e-1)M=\begin{pmatrix}1&(e-1)t\cr 0&e\end{pmatrix}
$$

$e^A=\begin{pmatrix}1&0\cr 0&e\end{pmatrix}$ 이므로 오른쪽 위 성분이 $(e-1)t$ 만큼 바뀌었다. 왼쪽 위 성분을 $t$ 만큼 바꾸면 $e^0$ 이 $e^t$ 로 바뀌어 변화가 $t$ 에 가깝고, 오른쪽 아래를 바꾸면 $e$ 가 $e^{1+t}$ 로 바뀌어 변화가 $et$ 에 가깝다.

오른쪽 위 성분은 고윳값 $0$ 과 $1$ 을 잇는 자리이고, 그 변화의 배율 $e-1$ 은 $e^x$ 의 기울기 $e^x$ 를 $x=0$ 에서 $x=1$ 까지 평균한 값 $\int\_0^1e^x\thinspace dx$ 다. 대각 성분의 배율 $1$ 과 $e$ 는 고윳값 하나에서 잰 기울기 $e^0$, $e^1$ 이다.

# 정의

$n\times n$ 행렬 $A$ 에서 선형사상 $L(A,\cdot)$ 이 다음을 만족하면 $L(A,\cdot)$ 을 $A$ 에서 행렬 지수의 **Fréchet 미분** 이라 한다.

$$
\bigl\Vert e^{A+E}-e^A-L(A,E)\bigr\Vert=o\bigl(\Vert E\Vert\bigr)\qquad(E\to 0)
$$

$L(A,E)$ 는 방향 $E$ 로 $A$ 를 바꿀 때 $e^A$ 의 변화의 일차 부분이다. 직관 절에서 $E$ 가 오른쪽 위 성분만 $1$ 인 행렬이면 $L(A,E)$ 는 오른쪽 위 성분만 $e-1$ 인 행렬이다.

행렬 $A$ 에서 행렬 지수의 **조건수(condition number)** 는 다음이다. $\Vert L(A)\Vert$ 는 $\Vert E\Vert=1$ 에서 $\Vert L(A,E)\Vert$ 의 최댓값이다.

$$
\kappa\_{\exp}(A)=\frac{\Vert L(A)\Vert\thinspace\Vert A\Vert}{\Vert e^A\Vert}
$$

$A$ 의 상대 변화가 $\varepsilon$ 이면 $e^A$ 의 상대 변화는 일차까지 많아야 $\kappa\_{\exp}(A)\varepsilon$ 이다.

# 성질

## 적분 표현

Fréchet 미분은 다음 적분으로 쓰인다.[^1]

$$
L(A,E)=\int\_0^1e^{(1-s)A}\thinspace E\thinspace e^{sA}\thinspace ds
$$

증명의 요지. $X(t)=e^{t(A+E)}$ 는 $X'=AX+EX$ 를 만족하므로, $EX$ 를 바깥 입력으로 보면 [Duhamel 원리](duhamel-principle.md)에서 다음이 나온다.

$$
e^{A+E}=e^A+\int\_0^1e^{(1-s)A}\thinspace E\thinspace e^{s(A+E)}\thinspace ds
$$

적분 안의 $e^{s(A+E)}$ 를 $e^{sA}$ 로 바꾼 오차는 $O(\Vert E\Vert^2)$ 다.

$E$ 가 $A$ 와 교환하면 적분 안이 $Ee^A$ 로 상수라 $L(A,E)=e^AE$ 다. 수에서의 $e^x\delta$ 가 이 경우다.

## 대각화 가능한 행렬

$A=V\mathrm{diag}(\lambda\_1,\dots,\lambda\_n)V^{-1}$ 이고 $\tilde E=V^{-1}EV$ 이면 다음이 성립한다.[^1]

$$
\bigl(V^{-1}L(A,E)V\bigr)\_{ij}=\tilde E\_{ij}\thinspace\frac{e^{\lambda\_i}-e^{\lambda\_j}}{\lambda\_i-\lambda\_j}
$$

$\lambda\_i=\lambda\_j$ 이면 분수를 $e^{\lambda\_i}$ 로 읽는다. 적분 표현의 $(i,j)$ 성분이 $\int\_0^1e^{(1-s)\lambda\_i+s\lambda\_j}\thinspace ds$ 이기 때문이다. 직관 절의 $e-1$ 은 $\lambda\_1=0$, $\lambda\_2=1$ 에서 $(e^0-e^1)/(0-1)$ 이다.

## 블록 행렬 공식

$2n\times 2n$ 블록 행렬의 지수의 오른쪽 위 블록이 Fréchet 미분이다.[^2]

$$
\exp\begin{pmatrix}A&E\cr 0&A\end{pmatrix}=\begin{pmatrix}e^A&L(A,E)\cr 0&e^A\end{pmatrix}
$$

그래서 행렬 지수를 계산하는 방법을 $2n\times 2n$ 행렬에 쓰면 $L(A,E)$ 가 함께 나온다. Al-Mohy 와 Higham 은 척도 조정과 제곱(scaling and squaring)의 각 단계를 미분해 $L(A,E)$ 를 $e^A$ 와 같은 정밀도로 계산하는 방법을 만들었다.[^3]

## 정규행렬의 조건수

$A$ 가 정규행렬이면 2-노름 조건수는 $\kappa\_{\exp}(A)=\Vert A\Vert\_2$ 다.[^4] 고윳값 실수부의 최댓값을 $\alpha$ 라 하면 정규행렬에서 $\Vert e^{sA}\Vert\_2=e^{s\alpha}$ 이다. 그래서 적분 표현에서 다음이 나오고, $E=I$ 에서 등호가 성립한다.

$$
\Vert L(A,E)\Vert\_2\le e^{\alpha}\Vert E\Vert\_2=\Vert e^A\Vert\_2\Vert E\Vert\_2
$$ 정규가 아닌 행렬에서는 $\Vert e^A\Vert$ 가 고윳값만으로 정해지지 않아 조건수가 $\Vert A\Vert$ 보다 훨씬 클 수 있다.

# 활용

- 연속시간 Markov 연쇄의 추정. 전이행렬 $P(t)=e^{tQ}$ 의 생성행렬 $Q$ 가 모수 $\theta$ 에 달려 있으면 $\partial P/\partial\theta=L(tQ,t\thinspace\partial Q/\partial\theta)$ 이고, [연속시간 Markov 연쇄](continuous-time-markov-chains.md)의 우도를 경사로 최대화하는 데 쓴다.
- 조건수 추정. 행렬 지수를 계산하는 프로그램이 결과의 신뢰도를 알리려고 $\Vert L(A)\Vert$ 를 몇 개의 $L(A,E)$ 로 어림한다.[^3]
- [Lie 군](lie-groups.md) 위의 최적화와 제어. 회전 행렬을 $e^X$ 로 쓰는 모형에서 $X$ 에 대한 기울기가 $L(X,\cdot)$ 이다.
- [행렬 로그](matrix-logarithm.md)의 미분. $\log$ 가 $\exp$ 의 역함수이므로 $\log$ 의 Fréchet 미분은 $L(\log B,\cdot)$ 의 역사상이다.

[^1]: N. J. Higham, *Functions of Matrices: Theory and Computation*, SIAM (2008), 3 장, 10 장.

[^2]: R. Mathias, "A chain rule for matrix functions and applications", *SIAM Journal on Matrix Analysis and Applications* 17 (1996), 610–620.

[^3]: A. H. Al-Mohy, N. J. Higham, "Computing the Fréchet derivative of the matrix exponential, with an application to condition number estimation", *SIAM Journal on Matrix Analysis and Applications* 30 (2009), 1639–1657.

[^4]: C. Van Loan, "The sensitivity of the matrix exponential", *SIAM Journal on Numerical Analysis* 14 (1977), 971–981.

# 연관 문서

## 선수지식

- [Duhamel 원리](duhamel-principle.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #linear_algebra #algorithms
