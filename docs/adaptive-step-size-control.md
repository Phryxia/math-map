# 적응 걸음 크기 조절

# 개요

**적응 걸음 크기 조절(adaptive step size control)** 은 [상미분방정식](ordinary-differential-equations.md)을 한 걸음씩 풀 때, 걸음마다 오차를 어림해 해가 빨리 변하는 곳에서는 걸음을 줄이고 천천히 변하는 곳에서는 늘리는 방법이다. $x'=x^2$, $x(0)=1$ 의 해 $1/(1-t)$ 는 $t=0$ 근처에서는 완만하지만 $t=0.99$ 에서는 $100$ 이고 그 근처에서 가파르게 오른다. 끝의 가파른 구간에 맞춘 작은 걸음을 처음부터 쓰면 완만한 구간에서 계산이 낭비된다. 한 걸음에서 잰 기울기들로 정확도가 다른 근사 두 개를 계산해 그 차를 오차로 보고, 그 차가 정한 크기 안에 들도록 다음 걸음을 정한다.

# 직관

[Runge–Kutta 방법](runge-kutta-methods.md) 문서의 Euler 방법과 같은 걸음에서 기울기를 하나 더 재는 2 차 방법인 Heun 방법(Heun's method)으로 $x'=x^2$, $x(0)=1$ 을 걸음 $0.1$ 만큼 푼다. Euler 방법은 기울기 $1$ 로 가서 $1.1$ 을 낸다. Heun 방법은 끝점의 기울기 $1.1^2=1.21$ 을 더 재어 두 기울기의 평균 $1.105$ 로 가서 $1.1105$ 를 낸다. 참값은 $1/0.9=1.1111$ 이다.

참값을 모르는 채로도 두 결과의 차 $0.0105$ 를 볼 수 있다. Heun 방법이 훨씬 정확하므로 이 차는 Euler 방법의 오차 $0.0111$ 과 거의 같다. 값의 크기 $1.1105$ 로 나누면 $0.0095$ 다. 한 걸음에 허용할 상대오차를 $0.001$ 로 정했다면 이 걸음은 너무 크다.

Euler 방법의 한 걸음 오차는 걸음의 제곱에 비례하므로, 차를 $0.001$ 로 줄이려면 걸음에 다음 배율을 곱한다.

$$
\sqrt{\frac{0.001}{0.0095}}\approx 0.325
$$

여유를 두어 $0.9$ 를 더 곱하면 새 걸음은 $0.0293$ 이다. 이 걸음으로 다시 풀면 Euler 방법이 $1.0293$, Heun 방법이 $1.0301$ 을 내고, 상대 차가 $0.00084$ 라 받아들인다. 참값은 $1.03015$ 이다. 앞으로 나아갈 때는 더 정확한 Heun 방법의 값을 쓴다.

같은 계산을 걸음마다 되풀이하면 걸음이 해의 가파름을 따라 바뀐다. 이 방정식에서는 $x''=2x^3$ 이라 두 결과의 상대 차가 대략 $\bigl(h/(1-t)\bigr)^2$ 이고, 허용치 $\varepsilon$ 을 지키는 걸음은 $(1-t)\sqrt{\varepsilon}$ 규모다. $\varepsilon=0.001$ 로 $t=0.99$ 까지 가면 걸음이 $t=0$ 근처의 $0.029$ 에서 $t=0.99$ 근처의 $0.00033$ 까지 줄어든다.

# 정의

## 내장 쌍

같은 단 $k_1,\dots,k_s$ 를 쓰면서 가중치만 다른 두 Runge–Kutta 방법의 짝을 **내장 쌍(embedded pair)** 이라 한다. 한 걸음에서 다음 두 값을 계산한다.

$$
\begin{aligned}
x\_{n+1}&=x_n+h\sum\_{i=1}^s b_ik_i\cr
\hat x\_{n+1}&=x_n+h\sum\_{i=1}^s \hat b_ik_i
\end{aligned}
$$

$x\_{n+1}$ 의 차수가 $p$, $\hat x\_{n+1}$ 의 차수가 $q$ 일 때 이 쌍을 $p(q)$ 쌍이라 쓰고, 보통 $q=p-1$ 이다. 단을 공유하므로 둘째 값은 곱셈 몇 번만 더 든다. 직관 절의 짝은 Heun–Euler 2(1) 쌍이고 Butcher 표는 다음과 같다. 마지막 두 줄이 $b$ 와 $\hat b$ 다.

$$
\begin{array}{c|cc}
0 & 0 & 0\cr
1 & 1 & 0\cr
\hline
& \tfrac12 & \tfrac12\cr
& 1 & 0
\end{array}
$$

## 오차 어림과 허용치

두 값의 차 $x\_{n+1}-\hat x\_{n+1}$ 을 **오차 어림(error estimate)** 이라 하고 $e\_{n+1}$ 로 쓴다. 해가 $d$ 차원 벡터이면 성분마다 절대 허용치 $a$ 와 상대 허용치 $r$ 을 섞어 다음 수로 줄인다.

$$
\mathrm{err}=\sqrt{\frac1d\sum\_{i=1}^d\left(\frac{e\_{n+1,i}}{a+r\max(\vert x\_{n,i}\vert,\vert x\_{n+1,i}\vert)}\right)^2}
$$

$\mathrm{err}\le 1$ 이면 걸음을 **받아들이고(accept)**, 아니면 **거절해(reject)** 같은 $x_n$ 에서 더 작은 걸음으로 다시 한다.[^1] 직관 절은 $d=1$, $a=0$, $r=0.001$ 인 경우이고, 첫 걸음은 $\mathrm{err}\approx 9.5$ 라 거절, 둘째 걸음은 $\mathrm{err}\approx 0.84$ 라 받아들였다.

## 걸음 갱신 규칙

받아들였든 거절했든 다음 걸음은 다음과 같이 정한다.

$$
h\_{\mathrm{new}}=h\cdot\min\Bigl(\alpha\_{\max},\ \max\bigl(\alpha\_{\min},\ \gamma\thinspace\mathrm{err}^{-1/(q+1)}\bigr)\Bigr)
$$

$\gamma$ 는 $0.8$ 에서 $0.9$ 쯤의 **안전 계수(safety factor)** 이고, $\alpha\_{\min}$ 과 $\alpha\_{\max}$ 는 한 번에 걸음을 얼마나 줄이고 늘릴지의 한계로 $0.2$ 와 $5$ 쯤을 쓴다.[^1] 지수 $1/(q+1)$ 은 낮은 차수 방법의 한 걸음 오차가 $h^{q+1}$ 에 비례하는 데서 온다. Heun–Euler 쌍은 $q=1$ 이라 직관 절의 제곱근이 나왔다.

## 국소 외삽

오차를 어림한 뒤 차수가 높은 $x\_{n+1}$ 로 나아가는 것을 **국소 외삽(local extrapolation)** 이라 한다. 직관 절이 Heun 방법의 값으로 나아간 것이 그것이다. 이때 오차 어림은 실제로 쓰는 값의 오차보다 낮은 차수 값의 오차를 재므로, 실제 한 걸음 오차는 어림보다 작다.

한 걸음의 절차는 다음과 같다.

```javascript
// pair = { a, c, b, bHat, q }. errNorm 은 정의 절의 err 를 계산한다.
function adaptiveStep(f, t, x, h, pair, errNorm) {
  for (;;) {
    const k = stages(f, t, x, h, pair.a, pair.c);          // 단 k_1..k_s
    const xHigh = combine(x, h, pair.b, k);
    const xLow = combine(x, h, pair.bHat, k);
    const err = errNorm(xHigh, xLow, x);
    const factor = Math.min(5, Math.max(0.2, 0.9 * err ** (-1 / (pair.q + 1))));
    if (err <= 1) return { t: t + h, x: xHigh, hNext: h * factor };
    h = h * factor;                                         // 거절: 같은 점에서 다시
  }
}
```

# 성질

## 국소 오차 조절과 전체 오차

허용치가 묶는 것은 한 걸음의 오차이고, 끝점의 오차는 걸음마다 생긴 오차가 방정식을 따라 커지거나 줄어든 것의 합이다. 직관 절의 방정식을 상대 허용치 $10^{-3}$ 으로 $t=0.99$ 까지 풀면 받아들인 걸음 $153$ 개, 거절 $1$ 번에 끝값이 $95.86$ 이라 참값 $100$ 과 4.1% 어긋난다. 해가 커지는 방정식이라 앞 걸음의 오차가 뒤에서 불어나서 허용치보다 큰 오차가 남는다.

허용치를 $10^{-4}$ 로 줄이면 받아들인 걸음 $504$ 개, 거절 $2$ 번에 끝값이 $99.59$ 이고 오차는 0.41% 다. 국소 외삽을 하는 $p(q)$ 쌍에서 한 걸음 오차는 $h^{p+1}$, 걸음은 $\varepsilon^{1/(q+1)}$ 에 비례하므로, 걸음 수가 $\varepsilon^{-1/(q+1)}$ 에 비례하는 것까지 넣으면 전체 오차는 대략 다음에 비례한다.

$$
\varepsilon^{(p+1)/(q+1)}\cdot\varepsilon^{-1/(q+1)}=\varepsilon^{p/(q+1)}
$$

Heun–Euler 쌍은 $p/(q+1)=1$ 이라 허용치를 $10$ 분의 $1$ 로 줄이면 전체 오차도 $10$ 분의 $1$ 이 되고, 위의 4.1% 와 0.41% 가 그것이다. 이 비례를 **허용치 비례성(tolerance proportionality)** 이라 한다.[^1]

## 고정 걸음과의 비교

같은 Heun 방법을 고정 걸음으로 $t=0.99$ 까지 풀면 걸음 $400$ 개에서 오차가 2.5%, $1000$ 개에서 0.46% 다. 적응 조절은 걸음 $506$ 번(거절 포함)으로 0.41% 를 냈다. 고정 걸음은 끝의 가파른 구간에 맞춘 걸음을 완만한 구간에서도 쓰기 때문에 걸음 수가 늘어난다. 해가 변하는 시간 척도가 구간 안에서 여러 자릿수 바뀔수록 차이가 커진다.

## 강성 방정식에서의 걸음

[강성 방정식](stiff-equations.md) 문서의 $x'=-50(x-\cos t)$, $x(0)=0$ 을 Heun–Euler 쌍과 절대 허용치 $0.1$ 로 $t=10$ 까지 풀면 받아들인 걸음이 $255$ 개이고 평균 걸음이 $0.040$ 이다. 허용치를 $0.01$ 로 줄여도 $263$ 개, 평균 $0.0405$ 로 거의 같다. 처음 잠깐 뒤의 해는 $\cos t$ 에 가까워 정확도만 보면 걸음 $0.4$ 쯤이 허용되지만, 걸음이 Heun 방법의 안정 한계 $2/50=0.04$ 근처에 머문다.

Heun 방법의 안정성 함수는 $R(z)=1+z+z^2/2$ 이고 실수축에서 $\vert R(z)\vert\le 1$ 인 구간이 $\lbrack -2,0\rbrack$ 이다. 걸음이 $0.04$ 를 넘으면 빨리 줄어드는 성분이 걸음마다 커지고, 오차 어림이 그것을 잡아 걸음을 줄인다. 그래서 양함수 쌍의 걸음 조절기는 강성 문제에서 허용치와 관계없이 안정 한계 근처에서 받아들임과 거절을 되풀이한다. 이 현상이 방정식이 강성이라는 실용적인 판별 기준이 되기도 한다.[^2]

## PI 걸음 조절

정의 절의 규칙은 이번 걸음의 $\mathrm{err}$ 만 본다. 앞 걸음의 $\mathrm{err}\_{n-1}$ 도 넣은 다음 규칙을 **PI 걸음 조절(proportional–integral step size control)** 이라 한다.[^3]

$$
h\_{n+1}=h_n\cdot\gamma\thinspace\mathrm{err}\_n^{-\beta_1}\thinspace\mathrm{err}\_{n-1}^{\beta_2}
$$

$k=q+1$ 로 두고 $\beta_1=0.7/k$, $\beta_2=0.4/k$ 를 흔히 쓴다.[^2] $\beta_2=0$, $\beta_1=1/k$ 이면 정의 절의 규칙이다. 앞 걸음의 오차를 함께 보아 걸음의 변화가 완만해지고, 위 강성 방정식처럼 안정 한계 근처에서 걸음이 오르내리는 경우에 거절 횟수가 준다.

# 활용

- 표준 풀이기. MATLAB 의 `ode45` 는 Dormand–Prince 5(4) 쌍, `ode23` 은 Bogacki–Shampine 3(2) 쌍에 국소 외삽과 정의 절의 걸음 갱신 규칙을 쓴다.[^4] Dormand–Prince 쌍은 단이 $7$ 개이지만 마지막 단이 다음 걸음의 첫 단과 같아(first same as last, FSAL) 받아들인 걸음마다 함수 계산이 $6$ 번이다.
- Fehlberg 쌍. Runge–Kutta–Fehlberg 4(5) 쌍은 차수 $4$ 인 값으로 나아가고 차수 $5$ 인 값을 오차 어림에만 쓴다. 국소 외삽을 하지 않는 쪽이다.[^1]
- 궤도 계산. 이심률이 큰 행성이나 혜성의 Kepler 궤도(Kepler orbit)는 근일점 근처에서 속도가 빠르고 원일점 근처에서 느려, 고정 걸음보다 적응 걸음이 같은 정확도에 걸음을 훨씬 적게 쓴다.
- [선형 다단계 방법](linear-multistep-methods.md)과 음함수 방법. 예측자와 수정자의 차로 오차를 어림해 같은 갱신 규칙으로 걸음과 차수를 함께 바꾼다. 강성 풀이기의 후진 차분 공식이 그렇게 걸음을 정한다.[^2]

[^1]: E. Hairer, S. P. Nørsett, G. Wanner, *Solving Ordinary Differential Equations I: Nonstiff Problems*, 2nd ed., Springer (1993), II.4 절. 내장 쌍, 오차 노름, 걸음 갱신 규칙, 허용치 비례성, Fehlberg 쌍.
[^2]: E. Hairer, G. Wanner, *Solving Ordinary Differential Equations II: Stiff and Differential-Algebraic Problems*, 2nd ed., Springer (1996), IV.2 절. 양함수 방법의 걸음 조절이 강성 문제에서 보이는 거동, PI 조절의 계수.
[^3]: K. Gustafsson, M. Lundh, G. Söderlind, "A PI stepsize control for the numerical solution of ordinary differential equations", *BIT* 28 (1988), 270–287.
[^4]: L. F. Shampine, M. W. Reichelt, "The MATLAB ODE Suite", *SIAM Journal on Scientific Computing* 18 (1997), 1–22. Bogacki–Shampine 쌍은 P. Bogacki, L. F. Shampine, "A 3(2) pair of Runge–Kutta formulas", *Applied Mathematics Letters* 2 (1989), 321–325.

# 연관 문서

## 선수지식

- [Runge–Kutta 방법](runge-kutta-methods.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #algorithms
