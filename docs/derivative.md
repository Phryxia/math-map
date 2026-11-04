# 미분

# 개요

**미분(derivative)** 은 한 점 근처에서 함수의 변화를 일차식으로 어림한 것이다. 물체가 $t$ 초 동안 $t^2$ 만큼 움직일 때 $0$ 초부터 $3$ 초까지의 평균 속도는 $3$ 이지만, 정확히 $3$ 초인 순간의 속도는 걸린 시간이 $0$ 이어서 나눗셈으로 구할 수 없다. 걸린 시간 $h$ 를 줄여 가며 평균 속도 $((3+h)^2-9)/h=6+h$ 를 보면 $6$ 에 다가간다. 미분은 이렇게 평균 변화율의 극한으로 순간의 변화율을 정의한다.

# 직관

물체가 $t$ 초 동안 $s(t)=t^2$ 만큼 움직인다. $0$ 초부터 $3$ 초까지의 평균 속도는 간 거리를 걸린 시간으로 나눈 $(9-0)/3=3$ 이다. 그러면 $3$ 초 그 순간의 속도는 얼마인가. 같은 방법을 쓰면 간 거리도 $0$ 이고 걸린 시간도 $0$ 이라 $0/0$ 이 되어 값이 나오지 않는다.

간격을 $0$ 으로 두어 막혔으니 $0$ 으로 두지 말고 줄여 간다. $3$ 초부터 $3+h$ 초까지의 평균 속도는 다음과 같다.

$$
\frac{(3+h)^2-3^2}{h}=\frac{6h+h^2}{h}=6+h
$$

$h$ 를 $0.1$, $0.01$ 로 줄이면 값은 $6.1$, $6.01$ 이 되어 $6$ 에 가까워진다. $h$ 에 $0$ 을 넣을 수는 없지만 $h$ 를 $0$ 으로 보내는 극한은 $6$ 으로 정해진다. 이 값이 $3$ 초에서의 순간 속도이고, $s$ 의 $t=3$ 에서의 미분계수다.

같은 계산을 거리로 쓰면 $s(3+h)=9+6h+h^2$ 이다. $3$ 초 근처에서 움직인 거리는 $6h$ 에 $h^2$ 만큼의 오차를 더한 것이고, $h$ 가 작으면 오차는 $6h$ 보다 훨씬 작다. 순간 속도 $6$ 은 거리의 증가를 일차식 $6h$ 로 어림할 때의 계수다.

# 정의

## 차분몫의 극한

실함수 $f$ 가 $a$ 를 포함하는 열린 구간에서 정의되어 있고 다음 극한이 유한하게 존재하면 $f$ 는 $a$ 에서 **미분 가능(differentiable)** 하고 그 값을 **미분계수(differential coefficient)** 라 한다.

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
$$

분수 $(f(a+h)-f(a))/h$ 를 차분몫(difference quotient)이라 한다. $h$ 가 양쪽에서 $0$ 으로 갈 때 값이 같아야 한다. 미분 가능한 점마다 미분계수를 대응시킨 함수 $f'$ 를 **도함수(derived function)** 라 한다.

직관 절의 $s(t)=t^2$ 는 모든 $a$ 에서 차분몫이 $2a+h$ 이므로 미분 가능하고 도함수는 $s'(t)=2t$, $s'(3)=6$ 이다. $\lvert x\rvert$ 는 $a=0$ 에서 양의 $h$ 의 차분몫이 $1$, 음의 $h$ 의 차분몫이 $-1$ 이라 극한이 없으므로 미분 가능하지 않다.

## 선형 근사

$f : \mathbb R^n \to \mathbb R^m$ 와 점 $a$ 에 대해 다음을 만족하는 [선형사상](linear-maps.md) $A:\mathbb R^n\to\mathbb R^m$ 이 있으면 $f$ 는 $a$ 에서 미분 가능하고 $A$ 를 $f$ 의 $a$ 에서의 미분이라 한다. $A$ 를 나타내는 [행렬](matrices.md)을 Jacobi 행렬(Jacobian matrix)이라 한다.

$$
\lim_{h\to0}\frac{\lVert f(a+h)-f(a)-Ah\rVert}{\lVert h\rVert}=0
$$

$n=m=1$ 이면 $A$ 는 $h\mapsto f'(a)h$ 이다. 직관 절의 $s$ 에서는 $s(3+h)-s(3)-6h=h^2$ 이고 $h^2/h\to 0$ 이므로 $A$ 는 $h\mapsto 6h$ 다.

$f(x,y)=(x^2,xy)$ 를 점 $(1,2)$ 에서 보면 $f(1+h_1,2+h_2)=(1+2h_1+h_1^2,\thinspace 2+2h_1+h_2+h_1h_2)$ 이다. 일차 항만 모으면

$$
A=\begin{pmatrix}2&0\cr 2&1\end{pmatrix}
$$

이고 나머지 $(h_1^2,h_1h_2)$ 의 크기는 $\lVert h\rVert^2$ 이하이므로 $\lVert h\rVert$ 로 나누면 $0$ 으로 간다.

# 성질

## 기본 성질

- 일변수에서 차분몫의 극한으로 정의한 미분 가능성과 선형 근사로 정의한 미분 가능성은 동치다. $f(a+h)=f(a)+f'(a)h+r(h)$ 로 두면 $r(h)/h\to 0$ 이 차분몫이 $f'(a)$ 로 가는 것과 같다.
- 미분 가능하면 [연속](continuity.md)이다. 근사식에서 $h \to 0$ 이면 함수 증가량도 $0$ 으로 간다. 역은 거짓이다. $\lvert x\rvert$ 가 반례다.
- 모든 점에서 연속이면서 어느 점에서도 미분 가능하지 않은 함수가 존재한다. Weierstrass 함수(Weierstrass function)가 그 예다.
- 합, 곱, 몫, 합성에 대한 규칙이 성립한다. 연쇄법칙(chain rule)은 선형 근사의 합성이 선형 근사라는 진술이다.

$$
(g\circ f)'(a)=g'(f(a))\thinspace f'(a)
$$

- 열린 구간 안의 점에서 $f$ 가 극값(extremum)을 가지면 그 점의 미분계수는 $0$ 이다. 역은 거짓이다($x^3$ 의 $0$). 최적화는 이 필요조건으로 후보를 걸러낸다.

## 편미분과 미분 가능성

편미분(partial derivative)은 한 좌표축 방향의 차분몫의 극한이다. 선형 근사의 정의는 모든 방향을 한꺼번에 근사할 것을 요구하므로, 편미분이 모두 존재해도 미분 가능하지 않을 수 있다. 편미분이 모두 존재하고 연속이면 미분 가능하다.

## 평균값 정리

$[a,b]$ 에서 연속이고 $(a,b)$ 에서 미분 가능하면 다음을 만족하는 $c$ 가 존재한다. 이것을 평균값 정리(mean value theorem)라 한다.

$$
f(b)-f(a)=f'(c)(b-a)
$$

한 점 근처의 도함수 정보에서 구간 전체에 대한 결론이 유도된다. 도함수가 $0$ 이면 상수함수라는 것과 도함수의 부호가 증가·감소를 결정한다는 것이 이 정리의 따름정리다.

## 수치 미분의 오차

$$
\frac{f(a+h)-f(a)}{h}=f'(a)+O(h),\qquad \frac{f(a+h)-f(a-h)}{2h}=f'(a)+O(h^2)
$$

부동소수점에서는 분자의 빼기에서 유효숫자가 상쇄되므로 $h$ 가 너무 작으면 오차가 커진다. 중앙 차분(central difference)에서 최적의 $h$ 는 기계 엡실론(machine epsilon)의 세제곱근 근처다. 자동 미분(automatic differentiation)은 연쇄법칙을 연산 그래프 위에서 정확히 적용하므로 이 상쇄가 없다.

# 활용

- 접선 근사는 [Newton 법](newton-method.md)의 한 걸음이고 기울기 벡터는 [경사하강법](gradient-descent.md)의 방향을 준다. 고차 항까지 쓰면 [멱급수](power-series.md) 전개가 되어 오차를 정량적으로 통제한다. 한 점의 미분계수만으로 먼 구간의 함숫값을 보장하려면 2 계 도함수의 크기나 [Lipschitz 사상](lipschitz-maps.md)의 조건이 필요하다.
- 순간 속도, 반응 속도, 민감도, 탄력성을 모두 도함수로 적는다. 미지 함수와 그 도함수를 함께 담은 식이 [상미분방정식](ordinary-differential-equations.md)이다.
- 곡선의 접선, 곡면의 접평면, 다양체의 접공간이 모두 선형 근사다. 미분을 선형사상으로 정의하면 좌표를 바꿔도 진술이 그대로다. [다양체](manifolds.md) 위의 접사상과 [곡률](curvature.md)을 이 정의로 세운다[^1].

[^1]: OpenStax, *Calculus Volume 1*, §3.1 Defining the Derivative. 차분몫의 극한과 접선·변화율. https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative

# 연관 문서

## 선수지식

- [연속함수](continuity.md)
- [선형사상](linear-maps.md)

## 더 알아보기

### 해석

- [미적분학의 기본 정리](fundamental-calculus.md)
- [유계변동 함수](bounded-variation.md)
- [역함수 정리](inverse-function-theorem.md)
- [멱급수](power-series.md)
- [상미분방정식](ordinary-differential-equations.md)
- [정칙함수](holomorphic-functions.md)
- [다항식 보간](polynomial-interpolation.md)

### 최적화와 통계

- [Newton 법](newton-method.md)
- [경사하강법](gradient-descent.md)
- [최대가능도 추정](maximum-likelihood.md)
- [Hessian 행렬](hessian.md)

### 기하

- [다양체](manifolds.md)

#analysis #linear_algebra
