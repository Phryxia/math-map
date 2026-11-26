# Aitken Δ² 과정

# 개요

**Aitken Δ² 과정(Aitken's delta-squared process)** 은 천천히 수렴하는 수열의 연속한 세 항으로 극한을 더 정확히 어림하는 방법이다. $x_{k+1}=\cos x_k$ 를 $x_0=1$ 에서 되풀이하면 $1$, $0.540$, $0.858$, $0.654$, $0.793$ 처럼 해 $0.7391$ 의 양쪽을 오가며 걸음마다 오차가 $2/3$ 배씩만 준다. Aitken 과정은 오차가 같은 비율로 준다고 보고 세 항에서 그 비율과 극한을 함께 풀어, 처음 세 항만으로 $0.728$ 을 얻는다.

# 직관

$\cos x=x$ 의 해를 $x_{k+1}=\cos x_k$ 로 구하면 [축약사상 고정점 정리](banach-fixed-point.md)로 수렴은 보장되지만 느리다. 오차는 $0.26$, $-0.20$, $0.12$, $-0.085$, $0.054$ 이고, 이웃한 오차의 비가 $-0.76$, $-0.59$, $-0.72$, $-0.64$ 로 대략 일정하다. 해에서 $\cos$ 의 기울기가 $-\sin 0.7391\approx-0.674$ 이므로 오차가 이 비율로 줄어든다.

비율이 정확히 일정하다고 놓으면 $x_k=r+C\lambda^k$ 다. 모르는 수는 $r$, $C$, $\lambda$ 셋이므로 세 항 $x_0$, $x_1$, $x_2$ 로 풀린다. 이웃한 항의 차는 $x_1-x_0=C\lambda^0(\lambda-1)$ 과 $x_2-x_1=C\lambda(\lambda-1)$ 이므로 두 차의 비가 $\lambda$ 다. $\lambda$ 를 알면 $x_2-r=\lambda(x_1-r)$ 에서 $r$ 이 나온다.

$x_0=1$, $x_1=0.54030$, $x_2=0.85755$ 에서 두 차는 $-0.45970$ 과 $0.31725$ 이고 $\lambda=-0.690$ 이다. 이 값으로 풀면 $r=0.72801$ 이고 오차는 $0.011$ 로, $x_2$ 의 오차 $0.12$ 보다 열 배 작다. 다음 세 항 $x_1$, $x_2$, $x_3$ 으로 같은 계산을 하면 $0.73367$ 이 나온다.

# 정의

## Aitken 변환

수열 $(x_k)$ 의 **전진 차분(forward difference)** 을 다음과 같이 둔다.

$$
\Delta x_k=x_{k+1}-x_k,\qquad\Delta^2x_k=\Delta x_{k+1}-\Delta x_k=x_{k+2}-2x_{k+1}+x_k
$$

$\Delta^2x_k\ne0$ 일 때 Aitken 변환은 다음 수열 $(A_k)$ 다.

$$
A_k=x_{k+2}-\frac{(\Delta x_{k+1})^2}{\Delta^2x_k}
$$

직관 절의 계산은 $k=0$ 의 경우다. $\Delta x_1=0.31725$, $\Delta^2x_0=0.31725+0.45970=0.77695$ 이므로 $A_0=0.85755-0.12955=0.72801$ 이다.

같은 값을 $x_k-(\Delta x_k)^2/\Delta^2x_k$ 로도 쓴다. 분모 $\Delta^2x_k$ 는 거의 같은 수들의 차라 자릿수를 잃으므로, 빼는 양이 작은 위의 꼴을 계산에 쓴다.

## Steffensen 법

**Steffensen 법(Steffensen's method)** 은 고정점 반복 $x\mapsto g(x)$ 에 Aitken 변환을 끼워 넣은 반복이다. 현재 점 $y$ 에서 $a=g(y)$, $b=g(a)$ 를 계산하고, 세 수 $y$, $a$, $b$ 에 Aitken 변환을 한 값을 다음 점으로 삼는다.

```javascript
// 고정점 x = g(x) 를 찾는 Steffensen 반복. 걸음마다 g 를 두 번 계산한다
function steffensen(g, y, tol, maxIter) {
  for (let k = 0; k < maxIter; k++) {
    const a = g(y), b = g(a);
    const d = (b - a) - (a - y);
    if (d === 0) return b;
    const next = b - (b - a) * (b - a) / d;
    if (Math.abs(next - y) < tol) return next;
    y = next;
  }
  return y;
}
```

$g=\cos$, $y=1$ 에서 첫 값은 $A_0=0.728010$ 이고, 그다음은 $0.739066967$, $0.739085133166$ 이다. 오차는 $1.1\times10^{-2}$, $1.8\times10^{-5}$, $4.9\times10^{-11}$ 이다.

# 성질

## 기하수열에서의 정확성

정리. $\lambda\ne0,1$ 이고 $x_k=r+C\lambda^k$ $(C\ne0)$ 이면 모든 $k$ 에서 $A_k=r$ 이다.

증명의 요지. $\Delta x_k=C\lambda^k(\lambda-1)$ 이고 $\Delta^2x_k=C\lambda^k(\lambda-1)^2$ 이다. 그러면 다음이 나온다.

$$
\frac{(\Delta x_{k+1})^2}{\Delta^2x_k}=C\lambda^{k+2}=x_{k+2}-r
$$

역으로 $A_k$ 가 모든 $k$ 에서 같은 값 $r$ 이면 $(x_{k+2}-r)(x_k-r)=(x_{k+1}-r)^2$ 이므로 $x_k-r$ 이 [기하급수](geometric-series.md)의 항처럼 일정한 비로 변한다.

## 선형 수렴의 가속

정리. $x_k\to r$ 이고 오차 $e_k=x_k-r$ 이 다음을 만족한다고 하자.

$$
e_{k+1}=(\lambda+\delta_k)\thinspace e_k,\qquad\lvert\lambda\rvert\lt 1,\quad\lambda\ne0,\quad\delta_k\to0
$$

그러면 충분히 큰 $k$ 에서 $A_k$ 가 정의되고 $(A_k-r)/e_{k+2}\to0$ 이다.[^1]

증명의 요지. $\mu_k=\lambda+\delta_k$ 로 두면 $\Delta x_k=(\mu_k-1)e_k$ 이고, 이것을 $A_k$ 에 넣으면 다음이 나온다.

$$
A_k-r=e_{k+2}\thinspace(1-Q_k),\qquad Q_k=\frac{\mu_k(\mu_{k+1}-1)^2}{\mu_{k+1}(\mu_k\mu_{k+1}-2\mu_k+1)}
$$

$\mu_k$ 와 $\mu_{k+1}$ 이 둘 다 $\lambda$ 로 가면 $Q_k$ 의 분모는 $\lambda(\lambda-1)^2$ 으로 가서 분자와 같아지므로 $1-Q_k\to0$ 이다. 직관 절의 예에서 $(A_k-r)/e_{k+2}$ 는 $-0.094$, $0.064$, $-0.040$, $0.027$ 로 줄어든다.

## Steffensen 법의 이차 수렴

정리. $g$ 가 두 번 연속미분가능하고 $g(r)=r$, $g'(r)\ne1$ 이면, $r$ 에 충분히 가까운 초깃값에서 Steffensen 법은 이차 수렴한다.

증명의 요지. $f(x)=g(x)-x$, $a=g(y)$, $b=g(a)$ 로 두면 $f(a)-f(y)=b-2a+y$ 이므로 $s=(b-2a+y)/(a-y)$ 는 $f$ 의 그래프에서 $y$ 와 $a$ 를 잇는 할선의 기울기다. Steffensen 법의 한 걸음은 $y-f(y)/s$ 이고, $f$ 에 대한 [Newton 법](newton-method.md)의 $f'(y)$ 를 $s$ 로 바꾼 꼴이다. 두 점 사이 거리가 $O(\lvert y-r\rvert)$ 이므로 $s-f'(y)=O(\lvert y-r\rvert)$ 이고, 이 차는 다음 오차에 $O(\lvert y-r\rvert^2)$ 만 더한다.

$\lvert g'(r)\rvert\gt 1$ 이어서 단순 반복이 발산하는 경우에도 Steffensen 법은 수렴한다. 함수 계산은 걸음마다 두 번이고 도함수는 쓰지 않는다. 두 점을 잇는 직선의 영점으로 움직인다는 점에서 [할선법](secant-method.md)과 같은 꼴이지만, 할선법이 직전 두 근삿값을 쓰는 데 비해 Steffensen 법은 $y$ 와 $g(y)$ 를 쓴다.

## 로그 수렴에서의 실패

$e_{k+1}/e_k\to1$ 인 수열에서는 Aitken 변환이 오차의 차수를 바꾸지 못한다. $\sum_{n\ge1}1/n^2=\pi^2/6$ 의 부분합은 오차가 약 $-1/k$ 이고, 부분합 $100$ 개 뒤에 Aitken 변환을 하면 오차가 $9.7\times10^{-3}$ 에서 $4.9\times10^{-3}$ 으로 절반이 될 뿐이다. 이런 수열에는 오차 전개의 꼴 $c_1/k+c_2/k^2+\cdots$ 를 쓰는 [Richardson 외삽](richardson-extrapolation.md)이 맞다.

# 활용

- 교대급수의 합. $\pi/4=1-1/3+1/5-\cdots$ 의 부분합 $1$, $0.6667$, $0.8667$ 에 Aitken 변환을 하면 $0.79167$ 이고 오차가 $0.081$ 에서 $0.0063$ 으로 준다. 부분합의 오차가 부호를 바꾸며 비율 $-1$ 에 가깝게 줄어드는 경우다.
- 고정점 반복의 가속. 선형 수렴하는 반복에 Steffensen 법을 쓰면 도함수 없이 이차 수렴을 얻는다.
- [거듭제곱법](power-iteration.md)의 고윳값 추정. 거듭제곱 반복의 [Rayleigh 몫](rayleigh-quotient.md)은 두 [고윳값](eigenvalues.md)의 비율로 선형 수렴하므로 Aitken 변환으로 다듬는다.
- Shanks 변환(Shanks transformation)은 $x_k=r+\sum_{i=1}^mC_i\lambda_i^k$ 꼴을 $2m+1$ 개 항으로 정확히 푸는 변환이고, $m=1$ 이 Aitken 변환이다. 계산은 Wynn 의 ε 알고리즘(Wynn's epsilon algorithm)으로 하고, 멱급수의 부분합에 쓰면 그 결과가 Padé 근사(Padé approximant)의 값과 같다.

[^1]: C. Brezinski, M. Redivo Zaglia, Extrapolation Methods: Theory and Practice, North-Holland (1991), 2장.

# 연관 문서

## 선수지식

- [축약사상 고정점 정리](banach-fixed-point.md)
- [기하급수](geometric-series.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #algorithms
