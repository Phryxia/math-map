# 쌍곡함수

# 개요

**쌍곡함수(hyperbolic function)** 는 지수함수를 짝함수와 홀함수로 가른 두 함수와 그 비다. $\cosh t=(e^t+e^{-t})/2$ 와 $\sinh t=(e^t-e^{-t})/2$ 가 그 둘이고, 합이 $e^t$ 다.

삼각함수와 같은 꼴의 항등식을 부호 하나만 바꿔 만족한다. $\cos^2 t+\sin^2 t=1$ 자리에 $\cosh^2 t-\sinh^2 t=1$ 이 오고, 단위원 대신 쌍곡선 $x^2-y^2=1$ 을 매개화한다.

# 직관

$y''=y$ 를 초기조건 $y(0)=1$ , $y'(0)=0$ 으로 푼다. $e^t$ 와 $e^{-t}$ 가 해이므로 일반해는 $Ae^t+Be^{-t}$ 이고, 두 조건은 $A+B=1$ 과 $A-B=0$ 이므로 $A=B=\frac{1}{2}$ 다. 해는 $(e^t+e^{-t})/2$ 이고 짝함수다.

같은 방정식에 $y(0)=0$ , $y'(0)=1$ 을 넣으면 $A+B=0$ 과 $A-B=1$ 이므로 $A=\frac{1}{2}$ , $B=-\frac{1}{2}$ 다. 해는 $(e^t-e^{-t})/2$ 이고 홀함수다. 두 해를 더하면 $e^t$ 이므로, 이 둘은 지수함수를 짝과 홀로 가른 조각이다.

$y''=-y$ 에 같은 두 초기조건을 넣으면 $\cos t$ 와 $\sin t$ 가 나온다. 방정식의 부호 하나만 다르므로 두 쌍의 성질도 부호에서만 갈린다. 짝인 해를 미분하면 홀인 해가 되는 것은 양쪽이 같고, 홀인 해를 미분하면 $y''=y$ 쪽은 짝인 해 그대로이고 $y''=-y$ 쪽은 부호가 붙는다.

두 해의 제곱 차를 계산한다. $(e^t+e^{-t})^2-(e^t-e^{-t})^2=4$ 이므로 짝인 해의 제곱에서 홀인 해의 제곱을 빼면 $1$ 이다. $\cos^2 t+\sin^2 t=1$ 이 점 $(\cos t,\sin t)$ 를 단위원에 올리듯, 이 식은 점을 쌍곡선 $x^2-y^2=1$ 의 $x\gt 0$ 쪽 가지에 올린다. 이 가지를 매개화하는 두 함수를 쌍곡 코사인과 쌍곡 사인이라 한다.

# 정의

## 쌍곡 사인과 코사인

$t\in\mathbb{R}$ 에서 **쌍곡 사인**과 **쌍곡 코사인**은 다음 두 함수다.

$$
\sinh t=\frac{e^t-e^{-t}}{2},\qquad\cosh t=\frac{e^t+e^{-t}}{2}
$$

$\sinh$ 는 홀함수이고 $\mathbb{R}$ 에서 증가하며 치역이 $\mathbb{R}$ 이다. $\cosh$ 는 짝함수이고 $\cosh 0=1$ 이 최솟값이며 치역이 $\lbrack 1,\infty)$ 다.

## 나머지 쌍곡함수

$$
\tanh t=\frac{\sinh t}{\cosh t},\qquad\mathrm{coth}\thinspace t=\frac{1}{\tanh t},\qquad\mathrm{sech}\thinspace t=\frac{1}{\cosh t},\qquad\mathrm{csch}\thinspace t=\frac{1}{\sinh t}
$$

$\tanh$ 는 증가함수이고 치역이 $(-1,1)$ 이다. $t\to\pm\infty$ 에서 $\pm 1$ 로 수렴한다.

## 멱급수

$e^t$ 의 [멱급수](power-series.md)에서 짝수 차수 항과 홀수 차수 항을 나눠 모은 것이 두 함수의 멱급수다.

$$
\cosh t=\sum\_{k=0}^{\infty}\frac{t^{2k}}{(2k)!},\qquad\sinh t=\sum\_{k=0}^{\infty}\frac{t^{2k+1}}{(2k+1)!}
$$

두 급수는 모든 $t$ 에서 수렴한다. $\cos$ 과 $\sin$ 의 급수에서 항마다 붙는 부호 $(-1)^k$ 를 떼면 이 급수가 된다.

# 성질

## 기본 항등식

$$
\cosh^2 t-\sinh^2 t=1
$$

$$
\sinh(s+t)=\sinh s\cosh t+\cosh s\sinh t,\qquad\cosh(s+t)=\cosh s\cosh t+\sinh s\sinh t
$$

증명은 정의를 지수함수로 풀어 쓰고 $e^{s+t}=e^se^t$ 를 쓰는 것이다. 삼각함수의 덧셈정리와 비교하면 코사인 쪽 둘째 항의 부호가 다르다. $s=t$ 를 넣으면 $\cosh 2t=\cosh^2 t+\sinh^2 t=1+2\sinh^2 t$ 다.

## 미분과 적분

$$
(\sinh t)'=\cosh t,\qquad(\cosh t)'=\sinh t,\qquad(\tanh t)'=\mathrm{sech}^2\thinspace t
$$

두 함수가 각각 $y''=y$ 의 해이므로 두 번 미분하면 자기 자신으로 돌아온다. 삼각함수에서는 네 번 미분해야 돌아온다.

## 역함수

$\sinh$ 는 $\mathbb{R}$ 에서 증가하므로 역함수가 $\mathbb{R}$ 전체에서 있고, $\cosh$ 는 $t\ge 0$ 으로 제한해 역함수를 잡는다. $y=\sinh t$ 를 $e^t$ 에 대한 이차방정식 $e^{2t}-2ye^t-1=0$ 으로 보고 양근을 취하면 다음이 나온다.

$$
\mathrm{arsinh}\thinspace y=\log\bigl(y+\sqrt{y^2+1}\bigr),\qquad\mathrm{arcosh}\thinspace y=\log\bigl(y+\sqrt{y^2-1}\bigr)\thinspace(y\ge 1)
$$

$$
\mathrm{artanh}\thinspace y=\frac{1}{2}\log\frac{1+y}{1-y}\thinspace(\vert y\vert\lt 1)
$$

역삼각함수와 달리 역쌍곡함수는 로그와 제곱근으로 닫힌 꼴로 적힌다.

## 삼각함수와의 관계

$$
\cosh(it)=\cos t,\qquad\sinh(it)=i\sin t
$$

지수함수의 급수를 복소수로 넓히면 두 쌍이 같은 함수의 실축과 허축 위의 모습이다. 쌍곡 항등식과 삼각 항등식의 부호 차이는 $i^2=-1$ 에서 나온다.

# 활용

- 현수선. 양 끝을 고정한 줄의 모양은 $y=a\cosh(x/a)$ 이고, 이 곡선이 [현수선](catenary.md)이다. 줄의 평형 조건이 $y''=\sqrt{1+(y')^2}/a$ 이고 그 해가 쌍곡 코사인이다.
- 적분 치환. $\sqrt{x^2+a^2}$ 를 품은 적분에서 $x=a\sinh u$ 로 치환하면 근호가 $a\cosh u$ 로 풀린다. $\sqrt{x^2-a^2}$ 에는 $x=a\cosh u$ 를 쓴다.
- 신경망의 활성함수. $\tanh$ 는 치역이 $(-1,1)$ 이고 원점에서 기울기가 $1$ 이라, 출력을 유계로 묶으면서 영 근방에서 항등사상에 가까운 활성함수로 쓴다. 로지스틱 함수 $\sigma$ 와는 $\tanh t=2\sigma(2t)-1$ 로 이어진다.
- 특수상대성의 속도 매개변수. 시간과 한 공간 좌표에 작용하는 Lorentz 변환의 행렬은 대각이 $\cosh\theta$ 이고 비대각이 $\sinh\theta$ 다. 두 변환을 이으면 덧셈정리로 $\theta$ 가 더해지므로, 속도 $\tanh\theta$ 의 합성 공식이 $\tanh$ 의 덧셈정리로 나온다.

# 연관 문서

## 선수지식

- [멱급수](power-series.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry #machine_learning
