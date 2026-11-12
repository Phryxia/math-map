# Wronski 행렬식

# 개요

**Wronski 행렬식(Wronskian)** 은 함수 몇 개와 그 도함수들을 늘어놓은 정사각행렬의 행렬식이다. 이계 선형 미분방정식 $t^2y''-2ty'+2y=0$ 의 해 $y=t$ 를 하나 찾았을 때, 나머지 해를 모두 얻으려면 $t$ 의 상수배가 아닌 해가 하나 더 있어야 한다. Wronski 행렬식은 방정식의 계수만으로 계산되므로, 둘째 해를 모르는 채로 그 행렬식을 먼저 구하고 거기서 둘째 해 $t^2$ 을 끌어낼 수 있다.

# 직관

$t\gt 0$ 에서 방정식을 $t^2$ 으로 나누면 $y''-\tfrac2ty'+\tfrac2{t^2}y=0$ 이다. 해 $y_1=t$ 와 아직 모르는 해 $y_2$ 로 다음 양을 만든다.

$$
W=y_1y_2'-y_1'y_2
$$

$W$ 를 미분하면 $y_1'y_2'$ 항이 지워져 $W'=y_1y_2''-y_1''y_2$ 이다. 여기에 방정식 $y''=\tfrac2ty'-\tfrac2{t^2}y$ 를 두 해에 각각 넣으면 $\tfrac2{t^2}$ 이 붙은 항도 지워지고 $W'=\tfrac2tW$ 만 남는다. 이 식에는 $y_2$ 가 들어 있지 않다. $W(1)=1$ 이 되게 $y_2$ 를 고르면 $W=t^2$ 이다.

이제 $y_2$ 를 구한다. $y_1=t$ 를 넣으면 $W=ty_2'-y_2$ 이고, 이것은 $t^2(y_2/t)'$ 과 같다. 그래서 다음이 나온다.

$$
\Bigl(\frac{y_2}{t}\Bigr)'=\frac{W}{t^2}=1
$$

$y_2/t=t$ 이므로 $y_2=t^2$ 이고, 방정식에 넣으면 $2t^2-4t^2+2t^2=0$ 이 맞는다. $W=t^2$ 이 $t\gt 0$ 에서 $0$ 이 아니므로 $t$ 와 $t^2$ 은 서로 상수배가 아니고, 모든 해는 $c_1t+c_2t^2$ 이다.

# 정의

## Wronski 행렬식

$n-1$ 번 미분 가능한 함수 $y_1,\dots,y_n$ 의 **Wronski 행렬식** 은 다음 함수다.

$$
W(y_1,\dots,y_n)(t)=\det\begin{pmatrix}y_1&y_2&\cdots&y_n\cr y_1'&y_2'&\cdots&y_n'\cr \vdots&\vdots&&\vdots\cr y_1^{(n-1)}&y_2^{(n-1)}&\cdots&y_n^{(n-1)}\end{pmatrix}
$$

$n=2$ 이면 직관 절의 $y_1y_2'-y_1'y_2$ 이고, $W(t,t^2)=t\cdot 2t-1\cdot t^2=t^2$ 이다. 첫 행은 함숫값, 다음 행부터는 차례로 도함수다.

## 일계 계로 쓴 형태

$n$ 계 선형 방정식은 다음 꼴이다.

$$
y^{(n)}+p\_{n-1}(t)y^{(n-1)}+\cdots+p_0(t)y=0
$$

이 방정식은 $x=(y,y',\dots,y^{(n-1)})$ 로 두면 일계 계 $x'=A(t)x$ 이다. 해 $n$ 개를 열로 놓은 행렬 $\Phi$ 를 만들면 $W=\det\Phi$ 이다. 직관 절의 방정식에서 $A(t)$ 의 대각합은 $\tfrac2t$ 로, $W'=\tfrac2tW$ 의 계수와 같다.

# 성질

## Abel 항등식

$n$ 계 선형 방정식의 해 $y_1,\dots,y_n$ 의 Wronski 행렬식은 다음을 만족한다. 이것을 **Abel 항등식(Abel's identity)** 이라 한다.[^1]

$$
W(t)=W(t_0)\exp\Bigl(-\int\_{t_0}^tp\_{n-1}(s)\thinspace ds\Bigr)
$$

증명의 요지. 행렬식을 미분하면 행 하나씩만 미분한 행렬식 $n$ 개의 합이다. 마지막 행을 미분한 것 말고는 같은 행이 두 번 나와 $0$ 이다. 마지막 행의 $y^{(n)}$ 에 방정식을 넣으면 $-p\_{n-1}y^{(n-1)}$ 항만 남고 나머지는 앞의 행과 비례해 지워지므로 $W'=-p\_{n-1}W$ 이다. 직관 절은 $p_1=-\tfrac2t$ 라 $W=t^2$ 이 나왔다.

## 영이 아니거나 항상 영

Abel 항등식에서 지수함수는 $0$ 이 되지 않으므로, 방정식의 해들의 Wronski 행렬식은 계수가 연속인 구간 전체에서 $0$ 이 아니거나 항상 $0$ 이다. 앞의 경우가 해들이 일차독립인 경우이고, 이때 해 $n$ 개가 모든 해를 일차결합으로 나타낸다.[^1]

방정식의 해라는 조건이 없으면 이 판정은 성립하지 않는다. $y_1=t^2$ 과 $y_2=t\vert t\vert$ 는 실수 전체에서 $W=t^2\cdot 2\vert t\vert-2t\cdot t\vert t\vert=0$ 이지만, $t\gt 0$ 에서는 같고 $t\lt 0$ 에서는 부호가 반대라 일차독립이다. 두 함수 모두 $t=0$ 근처에서 같은 이계 선형 방정식의 해가 될 수 없다.

## Liouville 공식

일계 계 $x'=A(t)x$ 의 해를 열로 놓은 행렬 $\Phi$ 는 다음을 만족한다. 이것을 **Liouville 공식(Liouville's formula)** 이라 한다.

$$
\det\Phi(t)=\det\Phi(t_0)\exp\int\_{t_0}^t\mathrm{tr}\thinspace A(s)\thinspace ds
$$

Abel 항등식은 $A$ 가 동반행렬 꼴일 때의 경우다. $\det\Phi$ 는 해 $n$ 개가 이루는 평행체의 부피이므로, 대각합이 $0$ 인 계의 흐름은 부피를 보존한다. $A$ 가 상수이면 [행렬 지수](matrix-exponential.md)의 $\det e^{tA}=e^{t\thinspace\mathrm{tr}A}$ 와 같다.

## 상수 변화법

$y''+p(t)y'+q(t)y=g(t)$ 의 해 하나는 동차 방정식의 해 $y_1$, $y_2$ 와 그 Wronski 행렬식으로 다음과 같이 적힌다. 이 방법을 **상수 변화법(variation of parameters)** 이라 한다.[^1]

$$
y_p(t)=-y_1(t)\int\frac{y_2(s)g(s)}{W(s)}\thinspace ds+y_2(t)\int\frac{y_1(s)g(s)}{W(s)}\thinspace ds
$$

직관 절의 방정식을 $t^2$ 으로 나눈 꼴에 오른쪽 $g(t)=1$ 을 붙이면 $y_1=t$, $y_2=t^2$, $W=t^2$ 이라 $y_p=-t\cdot t+t^2\ln t$ 이다.

# 활용

- 둘째 해 구하기(reduction of order). 직관 절처럼 해 하나 $y_1$ 과 Abel 항등식으로 $W$ 를 얻고 $(y_2/y_1)'=W/y_1^2$ 을 적분한다.
- 특수함수. [Airy 함수](airy-functions.md) $\mathrm{Ai}$, $\mathrm{Bi}$ 의 Wronski 행렬식은 방정식에 일계 항이 없어 상수 $1/\pi$ 이다. [Bessel 함수](bessel-functions.md)의 $W(J_\nu,Y_\nu)=2/(\pi t)$ 도 Abel 항등식에서 나온다.
- [Sturm–Liouville 이론](sturm-liouville.md). 같은 고윳값의 두 고유함수는 끝점에서 Wronski 행렬식이 $0$ 이라 일차종속이고, 고유공간이 1 차원이다.
- [Green 함수](greens-function.md). 이계 경계값 문제의 Green 함수는 양 끝의 조건을 하나씩 만족하는 두 해의 곱을 그 두 해의 Wronski 행렬식으로 나누어 만든다.
- [Floquet 이론](floquet-theory.md). Hill 방정식은 대각합이 $0$ 이라 Liouville 공식으로 모노드로미 행렬의 행렬식이 $1$ 이다.

[^1]: E. A. Coddington, N. Levinson, *Theory of Ordinary Differential Equations*, McGraw-Hill (1955), 3 장. Wronski 행렬식, Abel 항등식과 Liouville 공식, 상수 변화법.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)
- [행렬식](determinants.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #linear_algebra
