# 예측자–수정자 방법

# 개요

**예측자–수정자 방법(predictor–corrector method)** 은 [상미분방정식](ordinary-differential-equations.md)을 한 걸음 풀 때, 양함수 공식으로 다음 값을 먼저 어림하고 그 어림을 음함수 공식의 우변에 넣어 고치는 방법이다. 음함수 공식은 같은 걸음에서 더 정확하지만 걸음마다 미지수에 대한 방정식을 풀어야 한다. 예측자–수정자 방법은 그 방정식을 풀지 않고 어림값 하나로 대신해, 기울기를 걸음마다 두 번 계산하는 비용으로 음함수 공식의 차수를 얻고, 두 값의 차로 오차도 어림한다.

# 직관

[선형 다단계 방법](linear-multistep-methods.md) 문서의 예는 $x'=x$, $x_0=1$, $h=0.1$, $x_1=e^{0.1}\approx 1.105171$ 이었다. 2 단계 Adams–Bashforth 공식으로 구한 $x_2\approx 1.220947$ 은 참값 $e^{0.2}\approx 1.221403$ 보다 $0.000456$ 작다.

사다리꼴 규칙 $x_2=x_1+\frac h2(f_1+f_2)$ 는 오차 상수가 더 작은 공식이지만 우변의 $f_2=f(t_2,x_2)$ 에 구하려는 $x_2$ 가 들어 있다. 이 $x_2$ 자리에 Adams–Bashforth 의 값 $1.220947$ 을 넣는다.

$$x_2=1.105171+0.05\thinspace(1.105171+1.220947)\approx 1.221477$$

참값과의 차는 $0.000074$ 로, 처음 어림의 오차 $0.000456$ 의 약 $6$ 분의 $1$ 이다. 새로 계산한 기울기는 $f(t_2, 1.220947)$ 하나다.

두 값의 차 $1.221477-1.220947=0.000530$ 도 쓸모가 있다. 두 공식의 오차가 둘 다 같은 양 $h^3x'''$ 에 비례하므로, 이 차에서 고친 값의 오차를 어림할 수 있다. 이렇게 양함수 공식으로 예측하고 음함수 공식으로 수정하는 계산을 예측자–수정자 방법이라 한다.

# 정의

## 예측자와 수정자

양함수 선형 다단계 방법 하나와 음함수 선형 다단계 방법 하나를 고른다. 앞의 것을 **예측자(predictor)**, 뒤의 것을 **수정자(corrector)** 라 한다. 걸음마다 다음 네 단계를 하는 방법을 **PECE(predict–evaluate–correct–evaluate) 방법** 이라 한다.

- P(predict). 예측자로 $x\_{n+k}^{\lbrack 0\rbrack}$ 를 구한다.
- E(evaluate). $f\_{n+k}^{\lbrack 0\rbrack}=f(t\_{n+k},x\_{n+k}^{\lbrack 0\rbrack})$ 를 계산한다.
- C(correct). 수정자의 우변에서 $f\_{n+k}$ 자리에 $f\_{n+k}^{\lbrack 0\rbrack}$ 를 넣어 $x\_{n+k}$ 를 구한다.
- E(evaluate). $f\_{n+k}=f(t\_{n+k},x\_{n+k})$ 를 계산해 다음 걸음에 쓴다.

직관 절은 2 단계 Adams–Bashforth 공식을 예측자로, 사다리꼴 규칙을 수정자로 쓴 PECE 방법의 한 걸음이다. 수정 단계를 $m$ 번 되풀이하는 방법을 $\mathrm{P(EC)}^m\mathrm{E}$ 방법이라 한다.

## Milne 장치

예측자와 수정자의 차수가 같이 $p$ 이고, 국소 절단 오차가 각각 $C^{\ast}h^{p+1}x^{(p+1)}$, $Ch^{p+1}x^{(p+1)}$ 이라 하자. 다음 어림을 **Milne 장치(Milne's device)** 라 한다[^1].

$$x(t\_{n+k})-x\_{n+k}\approx\frac{C}{C^{\ast}-C}\bigl(x\_{n+k}-x\_{n+k}^{\lbrack 0\rbrack}\bigr)$$

두 오차 식을 빼면 다음이 나오고, 이것을 수정자의 오차 식에 넣으면 위 어림이 나온다.

$$x\_{n+k}-x\_{n+k}^{\lbrack 0\rbrack}\approx(C^{\ast}-C)\thinspace h^{p+1}x^{(p+1)}$$

직관 절에서 2 단계 Adams–Bashforth 공식은 $C^{\ast}=5/12$, 사다리꼴 규칙은 $C=-1/12$ 이므로 어림은 $-\frac16\cdot 0.000530\approx -0.000088$ 이고, 실제 오차는 $-0.000074$ 다.

# 성질

## 차수

수정자의 차수가 $p$ 이고 예측자의 차수가 $p-1$ 이상이면 PECE 방법의 차수는 $p$ 다[^1]. 예측자의 오차 $O(h^p)$ 는 수정자 우변에서 $h\beta_k$ 가 곱해져 $O(h^{p+1})$ 이 되기 때문이다. 직관 절에서 예측자 대신 [Euler 방법](euler-method.md)(차수 $1$)을 써도 차수는 사다리꼴 규칙의 $2$ 다.

## 수정을 되풀이할 때의 수렴

$f$ 가 $x$ 에 대해 Lipschitz 상수(Lipschitz constant) $L$ 을 가지면, 수정 단계를 되풀이하는 것은 사상 $y\mapsto r_n+h\beta_kf(t\_{n+k},y)$ 의 고정점 반복이다. 여기서 $r_n$ 은 수정자 식에서 $f\_{n+k}$ 항을 뺀 나머지다. $h\vert\beta_k\vert L\lt 1$ 이면 이 사상은 축소 사상이어서 반복이 수정자 방정식의 해로 수렴한다.

## 안정 영역

PECE 방법은 전체로 보면 양함수 방법이다. 그래서 수정자가 A-안정(A-stable)이어도 PECE 방법의 안정 영역은 유계다. Euler 방법을 예측자로, 사다리꼴 규칙을 수정자로 쓴 PECE 방법은 다음과 같다.

$$x\_{n+1}=x_n+\frac h2\Bigl(f(t_n,x_n)+f\bigl(t\_{n+1},\thinspace x_n+hf(t_n,x_n)\bigr)\Bigr)$$

이것은 2 단계 [Runge–Kutta 방법](runge-kutta-methods.md)인 Heun 방법(Heun's method)이다. $x'=\lambda x$ 에 적용하고 $z=h\lambda$ 로 두면 다음이 나온다.

$$x\_{n+1}=\Bigl(1+z+\frac{z^2}{2}\Bigr)x_n$$

$z=-3$ 에서 증폭률이 $2.5$ 이므로 이 방법은 불안정하다.

[강성 방정식](stiff-equations.md)에는 고정점 반복 대신 [Newton 법](newton-method.md)으로 수정자 방정식을 푼다.

## 걸음 크기 조절

Milne 장치의 어림 $\varepsilon$ 이 허용 오차 $\tau$ 보다 크면 그 걸음을 버리고 걸음을 줄인다. 새 걸음은 보통 $h\_{\mathrm{new}}=h\thinspace(\tau/\vert\varepsilon\vert)^{1/(p+1)}$ 에 1 보다 작은 안전 계수를 곱해 정한다. 다단계 방법은 같은 간격의 지난 값을 쓰므로, 걸음을 바꾸면 지난 값을 보간 다항식으로 새 간격에 다시 놓는다. 이 계산은 [적응 걸음 크기 조절](adaptive-step-size-control.md)의 내장 쌍과 같은 일을 다단계 방법에서 한다.

# 활용

- 매끄러운 궤도의 계산. 행성과 위성의 궤도처럼 $f$ 의 계산이 비싸고 해가 매끄러운 문제에서, 걸음당 $f$ 를 두 번만 계산하는 고차 Adams 예측자–수정자를 쓴다.
- 가변 차수 Adams 풀이기. Shampine 과 Gordon 의 풀이기는 Adams 예측자–수정자의 차수와 걸음을 Milne 장치의 어림으로 함께 고른다[^2].
- 수정자 방정식의 초기값. 강성 방정식을 [후진 차분 공식](backward-differentiation-formulas.md)으로 풀 때도 Newton 반복의 시작점을 예측자로 정한다.

[^1]: J. D. Lambert, *Numerical Methods for Ordinary Differential Systems: The Initial Value Problem*, Wiley (1991).
[^2]: L. F. Shampine, M. K. Gordon, *Computer Solution of Ordinary Differential Equations: The Initial Value Problem*, W. H. Freeman (1975).

# 연관 문서

## 선수지식

- [선형 다단계 방법](linear-multistep-methods.md)

## 더 알아보기

- [Nordsieck 표현](nordsieck-representation.md)

#analysis #computation #algorithms
