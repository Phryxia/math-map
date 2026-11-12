# 행렬 지수

# 개요

**행렬 지수(matrix exponential)** 는 정사각행렬 $A$ 에 대해 $e^x$ 의 거듭제곱급수에 $x$ 대신 $A$ 를 넣은 [행렬](matrices.md) $e^A$ 다. 점 $(x,y)$ 가 $x'=-y$, $y'=x$ 를 따라 움직이면 시간 $t$ 뒤의 위치는 처음 위치를 각 $t$ 만큼 돌린 것이고, 이 회전이 계수 행렬의 지수 $e^{tA}$ 다. 미지수가 여럿인 상수계수 선형 미분방정식 $x'=Ax$ 의 해가 $x(t)=e^{tA}x(0)$ 하나로 적히고, 계산은 급수, Jordan 표준형, 척도 조정과 제곱 가운데 하나로 한다.

# 직관

[상미분방정식](ordinary-differential-equations.md) $x'=ax$ 의 해는 $e^{at}x(0)$ 이다. $x'=-y$, $y'=x$ 는 $v=(x,y)$ 로 쓰면 $v'=Av$ 이고 계수는 다음 행렬이다.

$$
A=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}
$$

수일 때처럼 $e^{tA}=\sum_k t^kA^k/k!$ 로 두고 거듭제곱을 계산한다. $A^2=-I$ 이므로 $A^3=-A$, $A^4=I$ 가 되풀이되고, 짝수 차 항은 $\cos t$ 의 급수에, 홀수 차 항은 $\sin t$ 의 급수에 모인다.

$$
e^{tA}=\cos t\thinspace I+\sin t\thinspace A=\begin{pmatrix}\cos t&-\sin t\cr \sin t&\cos t\end{pmatrix}
$$

이것을 $t$ 로 [미분](derivative.md)하면 $Ae^{tA}$ 가 되어, $e^{tA}v(0)$ 가 미분방정식을 만족한다. 해는 처음 위치를 각 $t$ 만큼 돌린 것이다.

# 정의

$n\times n$ 복소행렬 $A$ 에 대해 다음 급수의 합을 **행렬 지수** 라 한다.

$$
e^A=\sum\_{k=0}^\infty\frac{A^k}{k!}=I+A+\frac{A^2}{2!}+\frac{A^3}{3!}+\cdots
$$

곱셈에 대해 $\Vert AB\Vert\le\Vert A\Vert\thinspace\Vert B\Vert$ 인 노름에서 $\Vert A^k\Vert\le\Vert A\Vert^k$ 이므로, 급수는 $e^{\Vert A\Vert}$ 로 눌려 절대수렴한다. 직관 절의 회전 행렬이 $tA$ 에 대한 값이다.

# 성질

## 지수법칙과 미분

$s$, $t$ 가 수이면 $e^{(s+t)A}=e^{sA}e^{tA}$ 이고, $e^{tA}$ 의 역행렬은 $e^{-tA}$ 다. 급수를 항별로 미분하면 다음이 나온다.

$$
\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A
$$

그래서 $x(t)=e^{tA}x(0)$ 가 $x'=Ax$ 의 해이고, 해의 유일성으로 다른 해는 없다.

## 교환하지 않는 행렬

$AB=BA$ 이면 $e^{A+B}=e^Ae^B$ 다. 이항정리로 $(A+B)^k$ 를 전개하고 급수의 곱을 항별로 맞추면 된다. 교환하지 않으면 성립하지 않는다. 다음 두 행렬에서

$$
N_1=\begin{pmatrix}0&1\cr 0&0\end{pmatrix},\qquad N_2=\begin{pmatrix}0&0\cr 1&0\end{pmatrix}
$$

$N_1^2=N_2^2=0$ 이라 $e^{N_1}=I+N_1$, $e^{N_2}=I+N_2$ 이고 다음이 나온다.

$$
e^{N_1}e^{N_2}=\begin{pmatrix}2&1\cr 1&1\end{pmatrix},\qquad e^{N_1+N_2}=\begin{pmatrix}\cosh 1&\sinh 1\cr \sinh 1&\cosh 1\end{pmatrix}\approx\begin{pmatrix}1.543&1.175\cr 1.175&1.543\end{pmatrix}
$$

교환하지 않는 경우에는 [Lie–Trotter 곱 공식](lie-trotter-formula.md) $e^{A+B}=\lim_n(e^{A/n}e^{B/n})^n$ 이 성립한다.

## 고윳값과 행렬식

$A$ 의 [고윳값](eigenvalues.md)이 $\lambda_1,\dots,\lambda_n$ 이면 $e^A$ 의 고윳값은 $e^{\lambda_1},\dots,e^{\lambda_n}$ 이다. $A$ 를 위삼각 꼴 $T$ 로 닮음 변환하면 $e^A$ 는 대각성분이 $e^{\lambda_i}$ 인 위삼각행렬 $e^T$ 와 닮음이다. 대각성분을 곱하면 다음이 나온다.

$$
\det e^A=e^{\mathrm{tr}\thinspace A}
$$

직관 절의 $A$ 는 대각합이 $0$ 이라 $e^{tA}$ 의 [행렬식](determinants.md)이 $1$ 이고, 회전이 넓이를 보존하는 것과 맞는다. 행렬식이 $0$ 이 아니므로 $e^A$ 는 언제나 가역이다.

## Jordan 표준형으로 계산

$A=ZJZ^{-1}$ 이면 $e^{tA}=Ze^{tJ}Z^{-1}$ 이고, [Jordan 표준형](jordan-canonical-form.md)의 블록 $\lambda I+N$ ($N$ 은 $N^k=0$ 인 위쪽 이동 행렬)마다 다음이 성립한다.

$$
e^{t(\lambda I+N)}=e^{\lambda t}\sum\_{i=0}^{k-1}\frac{t^i}{i!}N^i
$$

$\lambda I$ 와 $N$ 이 교환하므로 지수법칙을 쓸 수 있고, $N$ 의 급수는 $k$ 항에서 끝난다. 해에 $e^{\lambda t}$ 와 $t$ 의 다항식의 곱이 나오는 것이 이 식에서 온다.

## 척도 조정과 제곱

급수를 그대로 자르면 $\Vert A\Vert$ 가 클 때 항이 많이 필요하다. 수 $10$ 에서 $e^{10}\approx 22026$ 을 급수 $20$ 차까지 더해도 상대오차가 $0.0016$ 이다.

대신 $e^A=(e^{A/2^s})^{2^s}$ 을 쓴다. $s=4$ 로 $e^{0.625}$ 를 급수 $6$ 차까지 더한 뒤 네 번 제곱하면 상대오차가 $0.00007$ 이다. 이것을 **척도 조정과 제곱(scaling and squaring)** 이라 하고, $e^{A/2^s}$ 를 유리함수인 Padé 근사로 계산하는 판본이 행렬 지수의 표준 계산법이다.[^1]

# 활용

- 상수계수 선형 미분방정식. $x'=Ax+g(t)$ 의 해가 $e^{tA}$ 와 Duhamel 공식으로 적힌다. 해의 크기는 [로그 노름](logarithmic-norm.md) $\mu(A)$ 로 $\Vert e^{tA}\Vert\le e^{t\mu(A)}$ 처럼 눌린다.
- [Lie 군](lie-groups.md). 행렬 Lie 군에서 [Lie 대수](lie-algebras.md)의 원소 $X$ 를 $e^X$ 로 보내는 지수사상이 이 급수다. 직관 절의 $A$ 는 회전군 $\mathrm{SO}(2)$ 의 Lie 대수의 생성원이다.
- 연속시간 [Markov 연쇄](markov-chains.md). 전이율 행렬 $Q$ 에서 시간 $t$ 의 전이확률 행렬이 $e^{tQ}$ 다.
- [강연속 반군](c0-semigroups.md). [유계 작용소](bounded-operators.md) $A$ 에서는 같은 급수가 반군 $e^{tA}$ 를 주고, 비유계 생성원으로 넓힌 것이 강연속 반군이다.

[^1]: C. Moler, C. Van Loan, "Nineteen dubious ways to compute the exponential of a matrix, twenty-five years later", *SIAM Review* 45 (2003), 3–49. 척도 조정과 제곱, Padé 근사, 다른 계산법의 비교.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)
- [Jordan 표준형](jordan-canonical-form.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #linear_algebra #algorithms
