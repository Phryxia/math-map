# 연쇄법칙

# 개요

**연쇄법칙(chain rule)** 은 합성함수의 미분을 각 함수의 미분의 곱으로 구하는 규칙이다. 풍선의 반지름이 초당 $2$ cm 씩 늘어날 때, 반지름이 $10$ cm 인 순간 부피는 초당 얼마나 늘어나는가. 부피는 반지름의 함수이고 반지름은 시간의 함수이므로, 연쇄법칙은 반지름에 대한 부피의 변화율과 시간에 대한 반지름의 변화율을 곱해 답을 얻는다.

# 직관

부피는 $V(r)=\tfrac43\pi r^3$ 이고 반지름은 $r(t)$ 다. 짧은 시간 $\Delta t$ 동안 반지름은 거의 $2\Delta t$ 만큼 늘어난다.

반지름이 $10$ 근처에서 $\Delta r$ 만큼 늘면 부피는 거의 $V'(10)\Delta r=400\pi\thinspace\Delta r$ 만큼 는다. 여기에 $\Delta r\approx 2\Delta t$ 를 넣으면 부피의 증가량은 거의 $400\pi\cdot 2\Delta t$ 이다.

그러므로 시간에 대한 부피의 변화율은 $400\pi\cdot 2=800\pi$ 이고, 초당 약 $2513$ $\mathrm{cm}^3$ 이다. 두 단계의 변화율이 곱해진 것이다.

# 정의

## 한 변수

연쇄법칙은 다음 정리다[^1]. $f$ 가 $a$ 에서 미분 가능하고 $g$ 가 $f(a)$ 에서 미분 가능하면 $g\circ f$ 는 $a$ 에서 미분 가능하고 다음이 성립한다.

$$
(g\circ f)'(a)=g'\bigl(f(a)\bigr)f'(a)
$$

직관 절에서 $f=r$, $g=V$ 이고 다음이 나온다.

$$
(V\circ r)'(t)=V'\bigl(r(t)\bigr)\thinspace r'(t)=4\pi r(t)^2\cdot 2
$$

$r(t)=10$ 인 순간 이 값이 $800\pi$ 다.

## 여러 변수

$f\colon\mathbb R^n\to\mathbb R^m$ 이 $a$ 에서, $g\colon\mathbb R^m\to\mathbb R^k$ 가 $f(a)$ 에서 미분 가능하면 다음이 성립한다.

$$
D(g\circ f)(a)=Dg\bigl(f(a)\bigr)\thinspace Df(a)
$$

$D$ 는 [미분](derivative.md)을 선형사상으로 본 것이고, 좌변과 우변은 선형사상의 합성이다. 성분으로 쓰면 Jacobi 행렬(Jacobian matrix)의 곱이다.

$$
\frac{\partial(g\circ f)\_i}{\partial x_j}(a)=\sum_{l=1}^m\frac{\partial g_i}{\partial y_l}\bigl(f(a)\bigr)\frac{\partial f_l}{\partial x_j}(a)
$$

# 성질

## 증명

$b=f(a)$ 로 두면 미분 가능성에서 다음 두 식이 나온다.

$$
\begin{aligned}
f(a+h)&=f(a)+f'(a)h+\varepsilon_1(h)h\cr
g(b+k)&=g(b)+g'(b)k+\varepsilon_2(k)k
\end{aligned}
$$

여기서 $h\to 0$ 일 때 $\varepsilon_1(h)\to 0$ 이고, $k\to 0$ 일 때 $\varepsilon_2(k)\to 0$ 이다.

$k=f(a+h)-f(a)=(f'(a)+\varepsilon_1(h))h$ 를 둘째 식에 넣으면 다음이 나온다.

$$
g\bigl(f(a+h)\bigr)-g\bigl(f(a)\bigr)=\bigl(g'(b)+\varepsilon_2(k)\bigr)\bigl(f'(a)+\varepsilon_1(h)\bigr)h
$$

양변을 $h$ 로 나누고 $h\to 0$ 으로 보내면 $k\to 0$ 이므로 $g'(b)f'(a)$ 가 남는다.

차분몫을 $\dfrac{\Delta g}{\Delta f}\cdot\dfrac{\Delta f}{\Delta x}$ 로 쪼개는 계산은 $\Delta f=0$ 인 $h$ 가 $0$ 근처에 무한히 있으면 쓸 수 없다. $f(x)=x^2\sin(1/x)$ 가 그런 함수다. 위 증명은 $\varepsilon_2(0)=0$ 으로 두어 이 경우를 함께 처리한다.

## 극좌표

$u(x,y)$ 를 [극좌표](polar-coordinates.md) $x=r\cos\theta$, $y=r\sin\theta$ 로 쓴 함수를 $w(r,\theta)$ 라 하면 여러 변수 공식에서 다음이 나온다.

$$
\frac{\partial w}{\partial r}=\cos\theta\thinspace\frac{\partial u}{\partial x}+\sin\theta\thinspace\frac{\partial u}{\partial y},\qquad \frac{\partial w}{\partial\theta}=-r\sin\theta\thinspace\frac{\partial u}{\partial x}+r\cos\theta\thinspace\frac{\partial u}{\partial y}
$$

$u=x^2+y^2$ 이면 $w=r^2$ 이고, 첫 식의 우변은 $2r\cos^2\theta+2r\sin^2\theta=2r$ 로 $\partial w/\partial r$ 와 같다.

## 역함수의 미분

$f$ 가 역함수 $f^{-1}$ 를 갖고 둘 다 미분 가능하면, $f^{-1}\circ f$ 가 항등함수이므로 연쇄법칙으로 $(f^{-1})'(f(a))\thinspace f'(a)=1$ 이다. 그래서 $f'(a)\ne 0$ 이어야 하고 $(f^{-1})'(f(a))=1/f'(a)$ 다. 역함수가 미분 가능하다는 것 자체를 보이는 것이 [역함수 정리](inverse-function-theorem.md)다.

## 곱의 계산 순서

함수 $L$ 개를 합성한 $f_L\circ\cdots\circ f_1$ 의 미분은 Jacobi 행렬 $L$ 개의 곱 $J_L\cdots J_1$ 이다. 행렬 곱은 결합법칙을 만족하므로 오른쪽부터 곱해도 왼쪽부터 곱해도 결과가 같지만 계산량은 다르다.

입력이 $n$ 개이고 출력이 하나이면 $J_L$ 은 행이 하나다. 왼쪽부터 곱하면 매 단계 행 벡터 하나와 행렬의 곱이므로, 기울기 전체를 함수값 한 번 계산하는 비용의 상수배로 얻는다. 이 순서로 곱하는 것이 [자동미분](automatic-differentiation.md)의 역전 모드다.

# 활용

- [자동미분](automatic-differentiation.md)과 역전파(backpropagation). 프로그램의 단계마다 연쇄법칙을 써서 미분을 계산하고, [다층 퍼셉트론](multilayer-perceptron.md)의 손실 함수의 기울기를 층마다 거꾸로 곱해 얻는다.
- [치환적분](integration-by-substitution.md). 한 변수 치환적분 공식은 $(F\circ g)'=f(g)g'$ 를 적분한 것이다.
- [접다발](tangent-bundle.md)의 좌표 변환. 좌표를 바꾸면 접벡터의 성분이 좌표 변환의 Jacobi 행렬로 바뀐다.
- 편미분방정식의 변수 변환. [파동방정식](wave-equation.md)을 $\xi=x-ct$, $\eta=x+ct$ 로 바꾸어 $\partial^2u/\partial\xi\partial\eta=0$ 을 얻는 계산이 연쇄법칙이다.

[^1]: W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., McGraw-Hill, 1976, Theorem 5.5, Theorem 9.15.

# 연관 문서

## 선수지식

- [미분](derivative.md)

## 더 알아보기

- [자동미분](automatic-differentiation.md)
- [기울기 벡터](gradient.md)

#analysis #linear_algebra #machine_learning
