# Duhamel 원리

# 개요

**Duhamel 원리(Duhamel's principle)** 는 바깥에서 계속 무언가가 들어오는 선형 방정식의 해를, 아무것도 들어오지 않을 때의 해를 겹쳐 더해서 구하는 방법이다. 물탱크의 물이 남은 양에 비례하는 속도로 빠져나가는 동안 수도꼭지로 시각마다 다른 양의 물이 들어오면, 남은 물의 양은 어떻게 변하는가. Duhamel 원리는 각 순간에 들어온 물을 따로 떼어 그 물이 이후 빠져나가는 모양을 계산하고, 그것을 전부 더해 답을 얻는다.

# 직관

탱크에 남은 물의 양을 $x(t)$ 로 적는다. 물이 남은 양만큼의 속도로 빠지고 수도꼭지로 시간당 $g(t)$ 만큼 들어오면 다음 방정식이 성립한다.

$$
x'(t)=-x(t)+g(t),\qquad x(0)=x_0
$$

수도꼭지가 잠겨 있으면 $x'=-x$ 이고 해는 $x(t)=e^{-t}x_0$ 다. 처음 물은 시간 $t$ 가 지나면 $e^{-t}$ 배로 줄어든다.

수도꼭지를 열면 시각 $s$ 부터 $s+\Delta s$ 사이에 물 $g(s)\Delta s$ 가 들어온다. 이 물도 들어온 뒤로는 처음 물과 똑같이 줄어들어, 시각 $t$ 에는 $e^{-(t-s)}g(s)\Delta s$ 가 남는다. 빠지는 속도가 남은 양에 비례하므로 어느 순간에 들어온 물이 다른 순간에 들어온 물의 줄어드는 모양을 바꾸지 않는다.

그러면 시각 $t$ 의 물은 처음 물의 남은 양과 조각마다 남은 양을 더한 것이고, $\Delta s\to 0$ 이면 합이 적분이 된다.

$$
x(t)=e^{-t}x_0+\int_0^t e^{-(t-s)}g(s)\thinspace ds
$$

수도꼭지가 늘 $g=1$ 이고 $x_0=0$ 이면 $x(t)=1-e^{-t}$ 이다. 물은 $1$ 로 다가가고, 그때 들어오는 양과 빠지는 양이 같다.

# 정의

Duhamel 원리는 다음 공식이다. $A$ 가 $n\times n$ 행렬이고 $g$ 가 연속인 벡터값 함수이면, 초깃값 문제 $x'=Ax+g(t)$, $x(0)=x_0$ 의 해는 [행렬 지수](matrix-exponential.md) $e^{tA}$ 로 다음과 같이 적힌다.

$$
x(t)=e^{tA}x_0+\int_0^t e^{(t-s)A}g(s)\thinspace ds
$$

$e^{tA}x_0$ 는 들어오는 것이 없을 때의 해이고, $e^{(t-s)A}g(s)$ 는 시각 $s$ 에 들어온 양이 시간 $t-s$ 동안 동차 방정식을 따라 변한 결과다. 직관 절의 탱크는 $n=1$, $A=-1$ 인 경우다.

같은 꼴은 선형 편미분방정식에도 쓰인다[^1]. 동차 문제 $u_t=Lu$ 의 해를 초깃값 $u_0$ 에서 시간 $t$ 만큼 보내는 사상을 $S(t)$ 라 하면, $u_t=Lu+f$ 의 해는 다음이다.

$$
u(t)=S(t)u_0+\int_0^t S(t-s)f(s)\thinspace ds
$$

[열방정식](heat-equation.md) $u_t=\Delta u+f$ 에서 $S(t)$ 는 열핵과의 합성곱이다. 시각 $s$ 에 더해진 열 $f(s)$ 가 이후 열방정식을 따라 퍼진 것을 전부 더한 것이 해다.

# 성질

## 증명

$x'=Ax+g$ 의 양변에 $e^{-tA}$ 를 곱하면 좌변은 다음과 같다.

$$
e^{-tA}x'-Ae^{-tA}x=\frac{d}{dt}\bigl(e^{-tA}x(t)\bigr)
$$

그러므로 $(e^{-tA}x)'=e^{-tA}g(t)$ 이고, $0$ 부터 $t$ 까지 적분한 뒤 $e^{tA}$ 를 곱하면 정의 절의 공식이 나온다. 두 해의 차는 $x'=Ax$, $x(0)=0$ 을 만족하므로 $0$ 이고, 해는 하나뿐이다.

## 계수가 바뀌는 방정식

$x'=A(t)x+g(t)$ 에서는 $e^{tA}$ 대신 동차 방정식의 기본행렬(fundamental matrix) $\Phi(t)$ 를 쓴다. $\Phi$ 의 열들은 동차 방정식의 일차독립인 해들이다.

$$
x(t)=\Phi(t)\Phi(0)^{-1}x_0+\int_0^t\Phi(t)\Phi(s)^{-1}g(s)\thinspace ds
$$

$x(t)=\Phi(t)c(t)$ 로 두고 상수 벡터 $c$ 를 함수로 바꾸어 대입해도 같은 식이 나온다. 2 계 방정식을 1 계 연립으로 바꾸어 이 식을 쓴 것이 [Wronski 행렬식](wronskian.md)의 상수 변화법(variation of parameters)이다.

## 파동방정식

[파동방정식](wave-equation.md) $u_{tt}=c^2u_{xx}+f$ 는 시간에 대해 2 계이므로, 시각 $s$ 에 가해진 힘 $f(s)$ 는 그 순간의 처음 속도로 들어간다. 처음 위치가 $0$ 이고 처음 속도가 $\psi$ 인 동차 문제의 해는 $(1/2c)\int_{x-ct}^{x+ct}\psi(y)\thinspace dy$ 다. 처음 위치와 처음 속도가 $0$ 일 때 이것을 시각마다 겹치면 다음이 나온다.

$$
u(x,t)=\frac{1}{2c}\int_0^t\int_{x-c(t-s)}^{x+c(t-s)}f(y,s)\thinspace dy\thinspace ds
$$

점 $(x,t)$ 의 값은 그 점에서 거꾸로 그린 두 특성선 사이의 삼각형 안의 힘에만 의존한다.

## 해의 크기

공식에 노름을 씌우면 다음이 나온다.

$$
\Vert x(t)\Vert\le\Vert e^{tA}\Vert\thinspace\Vert x_0\Vert+\int_0^t\Vert e^{(t-s)A}\Vert\thinspace\Vert g(s)\Vert\thinspace ds
$$

[로그 노름](logarithmic-norm.md) $\mu(A)$ 가 음수이면 $\Vert e^{tA}\Vert\le e^{t\mu(A)}$ 이다. 그래서 $\Vert g\Vert\le M$ 이면 모든 $t$ 에서 $\Vert x(t)\Vert\le e^{t\mu(A)}\Vert x_0\Vert+M/\vert\mu(A)\vert$ 이다. 직관 절의 탱크에서 $\mu=-1$ 이고 $M=1$ 이면 상한은 $e^{-t}x_0+1$ 이고, 물의 양은 시간이 지나도 유계다.

# 활용

- [강연속 반군](c0-semigroups.md)의 완화해(mild solution). $A$ 가 반군 $S(t)$ 를 생성하면, 정의 절의 둘째 공식을 만족하는 $u$ 를 $u'=Au+f$ 의 완화해라 한다. 이 $u$ 는 미분 가능하지 않아도 된다.
- 비선형 방정식의 해의 존재. [해석 반군](analytic-semigroups.md)의 방정식 $u'=Au+F(u)$ 를 다음 적분방정식으로 바꾼다.

  $$
  u(t)=S(t)u_0+\int_0^tS(t-s)F(u(s))\thinspace ds
  $$

  짧은 시간에서 우변이 축약사상임을 보여 [축약사상 고정점 정리](banach-fixed-point.md)로 해를 얻는다.
- [열방정식](heat-equation.md)과 [파동방정식](wave-equation.md)의 원천항. 열원이나 바깥 힘이 있는 문제의 해를 동차 문제의 해의 적분으로 쓴다.

[^1]: L. C. Evans, *Partial Differential Equations*, 2nd ed., American Mathematical Society, 2010, 2.3.1 절과 2.4.2 절.

# 연관 문서

## 선수지식

- [행렬 지수](matrix-exponential.md)

## 더 알아보기

- [지수 적분기](exponential-integrators.md)
- [행렬 지수의 Fréchet 미분](matrix-exponential-frechet-derivative.md)

#analysis #linear_algebra #functional_analysis
