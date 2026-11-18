# 후방 오차 분석

# 개요

**후방 오차 분석(backward error analysis)** 은 반올림이 섞인 계산의 답을, 입력을 조금 바꾼 문제의 정확한 답으로 보고 그 바뀐 정도를 재는 방법이다. 유효숫자 세 자리로 $1.00+0.004-1.00$ 을 앞에서부터 계산하면 $1.00+0.004$ 가 $1.00$ 으로 반올림되어 답이 $0$ 이 나오고, 참값 $0.004$ 와 비교하면 오차가 100% 다. 이 답은 첫 두 입력을 0.4% 씩 줄인 문제의 정확한 답이다.

후방 오차 분석은 이렇게 계산 방법의 잘못(입력을 얼마나 바꾸었나)과 문제 자체의 민감함(입력이 바뀌면 답이 얼마나 바뀌나)을 갈라서 잰다.

# 직관

유효숫자 세 자리 십진 계산에서는 연산마다 결과를 세 자리로 반올림한다. 세 수 $1.00$, $0.004$, $0.004$ 를 앞에서부터 더하면 $1.00+0.004=1.004$ 가 $1.00$ 이 되고, 다시 $0.004$ 를 더해도 $1.00$ 이다. 참값은 $1.008$ 이므로 답의 상대오차는 $0.008/1.008\approx 0.0079$, 곧 0.8% 쯤이다.

답 $1.00$ 은 첫 입력을 $1.00$ 에서 $0.992$ 로 바꾼 합 $0.992+0.004+0.004$ 와 정확히 같다. 입력을 0.8% 바꾼 문제를 정확히 푼 것이고, 답의 오차도 0.8% 다.

개요의 $1.00+0.004-1.00$ 에서는 첫 덧셈의 반올림이 $1.004$ 를 $1.00$ 으로, 곧 $(1-0.00398)$ 배로 줄였다. 첫 두 입력을 같은 비율로 줄인 $0.996016+0.003984-1.00$ 은 정확히 $0$ 이다. 입력은 0.4% 바뀌었는데 답의 오차는 100% 다.

두 계산에서 반올림이 입력을 바꾼 정도는 비슷하다. 차이는 문제에 있다. 양수끼리 더하는 문제는 입력이 0.4% 바뀌면 답은 많아야 0.4% 바뀐다. $1.00+0.004-1.00$ 은 크기 $1$ 인 두 수가 지워지고 $0.004$ 만 남으므로, 입력의 작은 변화가 답에서 수백 배로 커진다.

# 정의

**부동소수점 수(floating-point number)** 는 $\pm m\times\beta^{e}$ 꼴의 수다. 진법 $\beta$ 와 자릿수 $t$ 가 정해져 있고, 가수 $m$ 은 $\beta^{t-1}\le m\lt\beta^t$ 인 정수, 지수 $e$ 는 정해진 범위의 정수다. 직관 절의 계산은 $\beta=10$, $t=3$ 이다.

반올림의 상대오차의 상한 $u=\frac12\beta^{1-t}$ 를 **단위 반올림(unit roundoff)** 이라 한다. 직관 절에서 $u=0.005$ 이고, IEEE 754 표준(Institute of Electrical and Electronics Engineers 754)의 배정밀도에서는 $u=2^{-53}\approx 1.1\times 10^{-16}$ 이다. 넘침과 아래넘침이 없으면 사칙연산의 계산값 $\mathrm{fl}(x\circ y)$ 는 다음을 만족한다고 놓는다.

$$
\mathrm{fl}(x\circ y)=(x\circ y)(1+\delta),\qquad \vert\delta\vert\le u
$$

입력 $x$ 에서 값 $f(x)$ 를 구하는 문제를 어떤 알고리즘으로 계산한 값이 $\hat y$ 라 한다. $\hat y-f(x)$ 를 **전방 오차(forward error)** 라 한다. $\hat y=f(x+\Delta x)$ 를 만족하는 $\Delta x$ 가운데 가장 작은 것의 크기를 **후방 오차(backward error)** 라 한다. 직관 절의 첫 합에서 전방 오차는 $-0.008$, 후방 오차는 첫 입력의 변화 $0.008$ 이다.

문제의 **조건수(condition number)** 는 입력의 상대 변화가 작을 때, 답의 상대 변화를 입력의 상대 변화로 나눈 비의 상한이다. 입력의 각 성분을 상대적으로 $\varepsilon$ 이하로 바꿀 때 합 $x_1+\cdots+x_n$ 의 조건수는 다음이다.

$$
\kappa=\frac{\vert x_1\vert+\cdots+\vert x_n\vert}{\vert x_1+\cdots+x_n\vert}
$$

양수의 합은 $\kappa=1$ 이고, $1.00+0.004-1.00$ 은 $\kappa=2.004/0.004=501$ 이다.

모든 입력에서 후방 오차가 $u$ 의 작은 배수 이하인 알고리즘을 **후방 안정(backward stable)** 이라 한다.

# 성질

## 전방 오차의 상한

후방 오차가 작고 조건수를 알면 전방 오차는 대략 다음으로 묶인다.

$$
\frac{\vert\hat y-f(x)\vert}{\vert f(x)\vert}\lesssim\kappa\cdot\frac{\Vert\Delta x\Vert}{\Vert x\Vert}
$$

직관 절의 둘째 계산에서 $501\times 0.00398\approx 2$ 이므로 상대오차 100% 가 이 상한 안에 든다. 후방 안정인 알고리즘의 전방 오차는 조건수 곱하기 $u$ 의 규모다. 조건수가 $10^{k}$ 이면 답의 유효숫자 $k$ 자리쯤을 잃는다.

## 합의 후방 오차

$x_1,\dots,x_n$ 을 앞에서부터 더하면 계산값은 다음 꼴이다[^1].

$$
\hat s=x_1(1+\theta_1)+x_2(1+\theta_2)+\cdots+x_n(1+\theta_n),\qquad \vert\theta_i\vert\le\gamma_{n-1}
$$

여기서 $\gamma_k=ku/(1-ku)$ 다. $x_1$ 과 $x_2$ 는 덧셈 $n-1$ 번의 반올림 인수를 모두 받고, 뒤의 입력일수록 받는 인수가 적다. 각 인수가 $1+\delta$ 이고 $\vert\delta\vert\le u$ 이므로 $k$ 개의 곱은 $1+\theta$, $\vert\theta\vert\le\gamma_k$ 로 쓴다. 따라서 차례로 더하는 합은 후방 안정이다.

## 선형계의 후방 오차

$Ax=b$ 를 풀어 얻은 $\hat x$ 가 $(A+\Delta A)\hat x=b$ 를 만족하면, $x-\hat x=A^{-1}\Delta A\thinspace\hat x$ 이므로 다음이 성립한다.

$$
\frac{\Vert x-\hat x\Vert}{\Vert\hat x\Vert}\le\kappa(A)\frac{\Vert\Delta A\Vert}{\Vert A\Vert}
$$

$\kappa(A)=\Vert A\Vert\thinspace\Vert A^{-1}\Vert$ 는 [행렬 분해](matrix-factorizations.md)에서 정의한 행렬의 조건수다. 앞 절의 상한이 근사 없이 성립하는 경우다.

계산값과 잔차 $r=b-A\hat x$ 만으로 후방 오차를 구할 수 있다. $\Vert\Delta A\Vert/\Vert A\Vert$ 가 가장 작은 $\Delta A$ 의 값은 2 노름에서 다음이다[^1].

$$
\frac{\Vert r\Vert}{\Vert A\Vert\thinspace\Vert\hat x\Vert}
$$

전방 오차는 참값을 모르면 잴 수 없지만 후방 오차는 계산이 끝난 뒤 행렬-벡터 곱 하나로 잰다.

## 알고리즘별 후방 안정성

- 삼각계의 후진 대입은 후방 안정이다. 계산값 $\hat x$ 는 $\vert\Delta T\vert\le\gamma_n\vert T\vert$ 인 $(T+\Delta T)\hat x=b$ 의 정확한 해다. 절댓값과 부등호는 성분마다 적용한다[^1].
- 부분 피벗팅을 쓴 [Gauss 소거법](gaussian-elimination.md)의 후방 오차는 $u$ 와 $n$ 의 다항식과 증폭인자(growth factor)의 곱으로 묶인다. 증폭인자는 소거 중에 나타난 성분의 최댓값을 $A$ 의 성분의 최댓값으로 나눈 값이고, 최악의 경우 $2^{n-1}$ 이다[^1].
- [Householder 반사](householder-reflection.md)로 만든 QR 분해(orthogonal-triangular decomposition)는 후방 안정이다.
- 다항식의 근을 동반행렬의 고윳값으로 구하는 계산은 행렬에 대해 후방 안정이지만, 근이 계수에 대해 민감하면 전방 오차가 크다. [Wilkinson 다항식](wilkinson-polynomial.md)이 그 예다.

# 활용

- [Wilkinson 다항식](wilkinson-polynomial.md). 근이 $1,\dots,20$ 인 다항식에서 $x^{19}$ 의 계수 $-210$ 을 $2^{-23}$ 만큼 바꾸면 근 열 개가 복소수가 된다. 계산한 근의 후방 오차가 $u$ 규모여도 조건수가 크면 근이 틀린다.
- [고윳값 조건수](eigenvalue-condition-number.md). [QR 알고리즘](qr-algorithm.md)이 후방 안정이므로 계산한 고윳값의 오차는 고윳값 조건수 곱하기 $u\Vert A\Vert$ 의 규모로 묶인다.
- 반복법의 멈춤 조건. [공액기울기법](conjugate-gradient.md) 같은 반복법을 잔차로 잰 후방 오차 $\Vert r\Vert/(\Vert A\Vert\Vert\hat x\Vert)$ 가 정한 값보다 작아질 때 멈추면, 멈춘 해는 그만큼 바꾼 계의 정확한 해다.

[^1]: N. J. Higham, *Accuracy and Stability of Numerical Algorithms*, 2nd ed., SIAM, 2002, Chapter 1, Chapter 4, Theorem 7.1, Theorem 8.5, Chapter 9.

# 연관 문서

## 선수지식

- [행렬 분해](matrix-factorizations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #computation #algorithms
