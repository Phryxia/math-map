# Smale α 이론

# 개요

**Smale α 이론(Smale's alpha theory)** 은 한 점에서 계산한 함수의 값과 도함수들만으로, 그 점에서 시작한 [Newton 법](newton-method.md)이 근으로 이차 수렴한다는 것을 증명하는 판정법이다. $f(x)=x^3-2x-5$ 를 $x_0=2$ 에서 시작해 Newton 법으로 풀 때, 반복을 돌려 보기 전에 이 초깃값이 좋은지 알고 싶다. $x_0=2$ 에서 $f$, $f'$, $f''$, $f'''$ 의 값으로 수 $\alpha=0.06$ 을 계산하고, 이것이 상수 $0.1577$ 보다 작으므로 반복열이 근으로 가며 걸음마다 맞는 자리 수가 두 배가 된다고 결론 낸다.

# 직관

Newton 법의 첫 걸음의 길이는 $\lvert f(x_0)/f'(x_0)\rvert=1/10=0.1$ 이다. 이 걸음이 믿을 만한지는 $f$ 가 그 거리 안에서 얼마나 휘는지에 달려 있다. $f$ 가 직선이면 첫 걸음이 바로 근이고, 많이 휘면 접선이 근에서 먼 곳을 가리킨다.

휘는 정도는 $x_0$ 에서의 Taylor 전개로 잰다.

$$
f(x_0+t)=f(x_0)+f'(x_0)\left(t+0.6t^2+0.1t^3\right)
$$

괄호 안에서 일차항 $t$ 와 견준 이차항 $0.6t^2$ 은 $\lvert t\rvert$ 가 $1/0.6$ 정도일 때 같은 크기가 되므로, $1/0.6$ 보다 훨씬 짧은 거리에서는 $f$ 가 거의 직선이다. 걸음 $0.1$ 과 휘는 정도 $0.6$ 을 곱한 $0.06$ 이 작으면 첫 걸음 안에서 $f$ 가 거의 직선이다.

# 정의

$f$ 는 [멱급수](power-series.md)로 전개되는 함수이고 $f'(x)\ne0$ 이다.

## 세 양 α, β, γ

$$
\beta(f,x)=\left\lvert\frac{f(x)}{f'(x)}\right\rvert,\qquad\gamma(f,x)=\sup_{k\ge2}\left\lvert\frac{f^{(k)}(x)}{k!\thinspace f'(x)}\right\rvert^{1/(k-1)},\qquad\alpha(f,x)=\beta(f,x)\thinspace\gamma(f,x)
$$

$\beta$ 는 Newton 걸음의 길이이고, $\gamma$ 는 Taylor 계수를 일차 계수로 나눈 뒤 길이의 역수 단위로 맞춘 것 가운데 가장 큰 값이다. 직관 절의 예에서 $k=2$ 의 값은 $12/20=0.6$, $k=3$ 의 값은 $\sqrt{6/60}=0.316$ 이고 $k\ge4$ 는 $0$ 이므로 $\gamma=0.6$, $\beta=0.1$, $\alpha=0.06$ 이다.

## 근사 영점

$x_0$ 이 $f$ 의 **근사 영점(approximate zero)** 이라는 것은 $f$ 의 근 $\zeta$ 가 있어, $x_0$ 에서 시작한 Newton 반복열 $x_k$ 가 모든 $k$ 에서 다음을 만족한다는 것이다.

$$
\lvert x_k-\zeta\rvert\le\left(\frac12\right)^{2^k-1}\lvert x_0-\zeta\rvert
$$

$\zeta$ 를 $x_0$ 에 딸린 근이라 부른다. 오차의 상한이 $1/2$, $1/8$, $1/128$ 배로 줄어 걸음마다 맞는 이진 자릿수가 두 배가 된다.

# 성질

## α 정리

정리. $\alpha(f,x_0)\lt\alpha_0=(13-3\sqrt{17})/4\approx0.1577$ 이면 $x_0$ 은 $f$ 의 근사 영점이고, 딸린 근 $\zeta$ 는 $\lvert x_0-\zeta\rvert\le 2\beta(f,x_0)$ 를 만족한다.[^1]

증명의 요지. $\gamma$ 의 정의로 $\lvert f^{(k)}(x_0)/(k!f'(x_0))\rvert\le\gamma^{k-1}$ 이므로, $f/f'(x_0)$ 의 Taylor 계수가 $\psi(t)=\beta-t+\gamma t^2/(1-\gamma t)$ 의 계수로 위에서 눌린다. 이 실함수 $\psi$ 에 $t_0=0$ 에서 Newton 법을 쓴 수열이 $f$ 의 Newton 걸음 길이를 위에서 누르고, $\alpha\lt\alpha_0$ 은 $\psi$ 가 양의 근을 갖고 그 수열이 이차로 수렴하는 조건이다.

직관 절의 예에서 근은 $\zeta=2.0945515$ 이고 $\lvert x_0-\zeta\rvert=0.0946\le 2\beta=0.2$ 다. 반복열의 오차는 $5.4\times10^{-3}$, $1.7\times10^{-5}$ 이고 상한 $0.047$, $0.012$ 보다 작다.

## 판정이 실패하는 초깃값

α 정리는 충분조건이다. $x_0=1.5$ 이면 $f(1.5)=-4.625$, $f'(1.5)=4.75$ 이므로 $\beta=0.974$, $\gamma=0.947$, $\alpha=0.922$ 이고 판정은 아무 결론도 내지 않는다. Newton 반복열은 $2.474$, $2.156$, $2.0966$ 을 거쳐 결국 근으로 가지만, 첫 걸음에서 근을 지나쳐 오차가 $0.59$ 에서 $0.38$ 로 줄어드는 데 그친다. 근사 영점이면 첫 걸음 뒤 오차가 $0.30$ 이하여야 하므로, 이 초깃값은 근사 영점이 아니다.

## Kantorovich 정리와의 비교

Newton 법의 수렴을 보장하는 Kantorovich 정리(Kantorovich theorem)는 도함수의 Lipschitz 상수 $L$ 을 초기점 주변의 영역 전체에서 구해야 한다. α 이론은 $x_0$ 한 점에서 계산한 도함수들만 쓰고, 대신 $f$ 가 멱급수로 전개되어야 한다. 다항식은 도함수가 유한 개이므로 $\gamma$ 를 정확히 계산할 수 있다.

## γ 정리

정리. $\zeta$ 가 $f$ 의 단순근이고 $\lvert x_0-\zeta\rvert\thinspace\gamma(f,\zeta)\le(3-\sqrt7)/2\approx0.177$ 이면 $x_0$ 은 $\zeta$ 를 딸린 근으로 하는 근사 영점이다.

α 정리가 초깃값에서 계산하는 판정인 데 비해, γ 정리는 근에서의 $\gamma$ 로 근 주위에 근사 영점이 모인 구간의 반지름을 준다.

# 활용

- 계산 결과의 인증. 수치 계산으로 얻은 근삿값 $x$ 에서 $\alpha(f,x)\lt\alpha_0$ 을 확인하면, 그 근처에 근이 실제로 있고 Newton 법으로 원하는 만큼 다듬을 수 있다는 것이 증명된다. 다변수 다항식 연립방정식에서도 $f'$ 를 Jacobian 으로, 나눗셈을 역행렬로 바꾼 같은 정리가 성립한다.[^1]
- [호모토피 연속법](homotopy-continuation.md)의 걸음 크기. 경로를 따라갈 때 각 점이 다음 목표의 근사 영점이 되도록 걸음을 고르면, 경로를 건너뛰지 않는다는 것을 α 이론으로 보장한다.
- 근 찾기의 계산 복잡도. 초깃값이 근사 영점이면 오차 $\varepsilon$ 까지 $O(\log\log(1/\varepsilon))$ 번의 Newton 걸음이면 되므로, 근 찾기 알고리즘의 비용을 근사 영점에 닿기까지의 걸음 수로 센다.

[^1]: L. Blum, F. Cucker, M. Shub, S. Smale, Complexity and Real Computation, Springer (1998), Chapter 8.

# 연관 문서

## 선수지식

- [Newton 법](newton-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #complexity
