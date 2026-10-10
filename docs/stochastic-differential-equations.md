# 확률미분방정식

# 개요

확률미분방정식(stochastic differential equation, SDE)은 미지의 확률과정 $X$ 에 대한 적분 등식

$$
X_t=X_0+\int_0^ta(s,X_s)\thinspace ds+\int_0^tb(s,X_s)\thinspace dB_s
$$

이다. 둘째 적분이 [Itô 적분](ito-calculus.md)이므로 피적분함수가 미지의 과정이어도 뜻을 갖는다.

[상미분방정식](ordinary-differential-equations.md)의 존재·유일성 증명이 그대로 옮겨 가서, 계수 $a$ 와 $b$ 가 Lipschitz 조건을 만족하면 해가 유일하게 존재한다. 해는 Markov 과정이고, 그 밀도는 결정론적 편미분방정식을 만족한다.

# 직관

$x'(t)=\mu x(t)$ 의 해는 $x_0e^{\mu t}$ 다. 성장률 $\mu$ 가 시각마다 흔들리는 값이면 해는 무엇인가.

성장률을 $\mu+\xi(t)$ 로 놓고 변수분리로 풀면 $\log x(t)=\log x_0+\mu t+\int_0^t\xi(s)\thinspace ds$ 다. 흔들림을 시각마다 독립이고 평균 $0$ 인 것으로 잡으면, 이 적분은 독립증분을 갖는 연속 과정이므로 [Brown 운동](brownian-motion.md) $B_t$ 다. 그러면 $\xi$ 는 $B$ 의 도함수인데 $B$ 의 경로는 어느 점에서도 미분가능하지 않다. $\xi(t)$ 라는 함수가 없으니 $(\mu+\xi)x$ 라는 식도 없다.

$\xi$ 가 미분으로는 존재하지 않고 적분으로만 존재했으니, 방정식도 미분 대신 적분으로 쓴다. $x'=\mu x$ 를 $x(t)=x_0+\int_0^t\mu x(s)\thinspace ds$ 로 고치고 흔들림 항을 $\int_0^t\sigma x(s)\thinspace dB_s$ 로 적는다. $x$ 가 $B$ 에 adapted 이면 이 적분은 Itô 적분으로 정해진다.

이 등식을 만족하는 과정을 찾는다. $\log X$ 에 Itô 공식을 쓰면 $d\log X=(\mu-\sigma^2/2)\thinspace dt+\sigma\thinspace dB$ 이므로

$$
X_t=x_0\exp\Big(\big(\mu-\tfrac{\sigma^2}{2}\big)t+\sigma B_t\Big)
$$

이다. $\sigma=0$ 이면 $x_0e^{\mu t}$ 로 돌아간다. $-\sigma^2/2$ 는 $(dB)^2=dt$ 에서 나온 Itô 보정이고, 고전적 변수분리로 풀면 나오지 않는다.

# 정의

## 적분형

계수 $a,b:\lbrack 0,T\rbrack\times\mathbb R\to\mathbb R$ 와 Brown 운동 $B$ 의 filtration $(\mathcal F_t)$ 가 주어졌을 때, SDE 의 해는 다음을 만족하는 연속 adapted 과정 $X$ 다.

$$
X_t=X_0+\int_0^ta(s,X_s)\thinspace ds+\int_0^tb(s,X_s)\thinspace dB_s\qquad(0\le t\le T)
$$

$a$ 를 표류계수, $b$ 를 확산계수라 한다. 미분형 $dX_t=a(t,X_t)\thinspace dt+b(t,X_t)\thinspace dB_t$ 는 이 등식의 약칭이다.

## 강한 해와 약한 해

**강한 해**는 확률공간과 Brown 운동 $B$ 가 먼저 주어진 상태에서 $(\mathcal F_t)$ 에 adapted 이고 위 등식을 만족하는 $X$ 다.

**약한 해**는 확률공간, Brown 운동 $\tilde B$, 과정 $\tilde X$ 를 함께 구성해 등식을 만족시킨 것이다. 분포만 정해지므로 강한 해는 약한 해이지만 역은 성립하지 않는다. $dX=\mathrm{sgn}(X)\thinspace dB$ 는 약한 해를 갖고 강한 해를 갖지 않는다[^1].

## 생성작용소

시간에 무관한 계수 $a(x),b(x)$ 의 SDE 에 대해 2차 미분작용소

$$
(Lf)(x)=a(x)f'(x)+\tfrac12b(x)^2f''(x)
$$

를 해의 **생성작용소**라 한다. Itô 공식을 $f(X_t)$ 에 적용하면 $df(X_t)=(Lf)(X_t)\thinspace dt+b(X_t)f'(X_t)\thinspace dB_t$ 이고, 둘째 항의 기댓값이 $0$ 이므로 $\frac{d}{dt}\mathbb E\lbrack f(X_t)\rbrack=\mathbb E\lbrack (Lf)(X_t)\rbrack$ 이다.

# 성질

## 존재와 유일성

$a$ 와 $b$ 가 $x$ 에 대해 Lipschitz 이고

$$
\vert a(t,x)\vert+\vert b(t,x)\vert\le C(1+\vert x\vert)
$$

를 만족하며 $\mathbb E\lbrack X_0^2\rbrack\lt\infty$ 이면 강한 해가 존재하고 경로마다 유일하다.

증명은 [축약사상 고정점 정리](banach-fixed-point.md)의 Picard 반복이다. $X^{(n+1)}$ 을 $X^{(n)}$ 을 계수에 넣어 적분한 것으로 정의하고 $\mathbb E\lbrack \sup\_{s\le t}\vert X^{(n+1)}\_s-X^{(n)}\_s\vert^2\rbrack$ 을 재면, Itô 등거리와 Doob 최대부등식이 확률적분 항을 $\int_0^t\mathbb E\lbrack\vert X^{(n)}\_s-X^{(n-1)}\_s\vert^2\rbrack ds$ 로 바꾼다. Lipschitz 상수가 붙은 이 적분 부등식에 Gronwall 부등식을 쓰면 수렴이 나온다. 선형 증가 조건은 해가 유한 시간에 발산하지 않게 한다.

Lipschitz 조건이 깨지면 유일성도 깨진다. $dX=3X^{2/3}\thinspace dt$ 는 $X_0=0$ 에서 $X_t=0$ 과 $X_t=t^3$ 을 모두 해로 갖는다. 확산계수가 있으면 더 약한 조건으로도 유일성이 나와, $b$ 가 균등타원형이고 유계일 때는 $a,b$ 가 유계 가측이기만 하면 약한 해가 유일하다[^2].

## Markov 성질

계수가 시간에 무관하면 해는 강 Markov 과정이고 추이반군 $P_tf(x)=\mathbb E^x\lbrack f(X_t)\rbrack$ 의 생성작용소가 $L$ 이다. 시각 $t$ 이후의 거동이 $X_t$ 의 값만으로 정해지는 것은 적분 등식의 양쪽에서 $t$ 이전의 증분이 떨어져 나가기 때문이다.

$u(t,x)=\mathbb E^x\lbrack f(X_t)\rbrack$ 은 후진방정식 $\partial_tu=Lu$ 를 만족한다. 이 대응이 [Feynman–Kac 공식](feynman-kac.md)으로 확장되어 퍼텐셜 항과 원천 항까지 포함한다.

## Fokker–Planck 방정식

$X_t$ 의 밀도 $p(t,x)$ 는 $L$ 의 수반작용소가 주는 전진방정식, 곧 [Fokker–Planck 방정식](fokker-planck.md)을 만족한다.

$$
\partial_tp=-\partial_x\big(a(x)p\big)+\tfrac12\partial_x^2\big(b(x)^2p\big)
$$

좌변의 $p$ 는 결정론적 함수이므로, 경로의 무작위성을 포기하면 SDE 하나가 편미분방정식 하나로 바뀐다. $\partial_tp=0$ 인 해가 정상분포다. $a=-V'$ 이고 $b$ 가 상수 $\sqrt{2\varepsilon}$ 이면 정상분포는 $p\propto e^{-V(x)/\varepsilon}$ 이다.

## 대표적인 해

| SDE | 해 또는 정상분포 |
|---|---|
| $dX=\mu\thinspace dt+\sigma\thinspace dB$ | $X_0+\mu t+\sigma B_t$ |
| $dS=\mu S\thinspace dt+\sigma S\thinspace dB$ | $S_0\exp((\mu-\sigma^2/2)t+\sigma B_t)$ |
| $dX=-\theta X\thinspace dt+\sigma\thinspace dB$ | Ornstein–Uhlenbeck 과정, 정상분포 $N(0,\sigma^2/2\theta)$ |
| $dX=-V'(X)\thinspace dt+\sqrt{2\varepsilon}\thinspace dB$ | 정상분포 $\propto e^{-V/\varepsilon}$ |

넷째 줄이 Langevin 방정식이다. $\varepsilon\to 0$ 에서 정상분포가 $V$ 의 최솟값에 집중한다.

## Euler–Maruyama 이산화

보폭 $h=T/N$, $t_k=kh$ 에 대해 적분 등식의 각 항을 왼쪽 끝점으로 근사한다. 증분 $B\_{t\_{k+1}}-B\_{t\_k}$ 는 분산이 $h$ 인 독립 Gauss 난수다.

```javascript
function eulerMaruyama(a, b, x0, h, N, gauss) {
  let x = x0
  const path = [x]
  for (let k = 0; k < N; k++) {
    const dW = Math.sqrt(h) * gauss()
    x = x + a(k * h, x) * h + b(k * h, x) * dW
    path.push(x)
  }
  return path
}
```

Lipschitz 조건에서 강수렴 차수는 $1/2$ 이고 약수렴 차수는 $1$ 이다.

$$
\big(\mathbb E\lbrack\vert X_T-\hat X_N\vert^2\rbrack\big)^{1/2}\le Ch^{1/2},\qquad \big\vert\mathbb E\lbrack f(X_T)\rbrack-\mathbb E\lbrack f(\hat X_N)\rbrack\big\vert\le Ch
$$

차수가 결정론적 Euler 법의 $1$ 보다 낮은 것은 확률적분의 Taylor 전개에 $\int\int dB\thinspace dB$ 항이 남기 때문이다. 이 항을 명시적으로 넣은 Milstein 법은 강수렴 차수가 $1$ 이다.

# 활용

## 금융

[Itô 적분](ito-calculus.md)의 활용 절이 다루는 Black–Scholes 편미분방정식은 기하 Brown 운동 SDE 에 Itô 공식을 적용한 결과다. 위험중립측도로 옮기는 과정이 [Girsanov 정리](girsanov.md)의 표류항 변경이고, 옮긴 뒤의 가격이 Feynman–Kac 공식의 기댓값 표현이다. 미국형 옵션은 종료 시각을 고르는 문제이므로 [최적 정지](optimal-stopping.md)의 자유경계 문제가 된다.

## 통계물리

Langevin 방정식은 퍼텐셜 $V$ 안의 입자에 열잡음을 더한 SDE 다. Fokker–Planck 방정식의 정상분포가 Gibbs 측도 $e^{-V/\varepsilon}$ 이므로, 이 SDE 를 이산화해 돌리면 Gibbs 측도의 표본이 나온다. [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)은 이 수렴을 자유에너지의 하강으로 다시 쓴다.

## 필터링

관측 $dY_t=h(X_t)\thinspace dt+dW_t$ 에서 숨은 상태 $X$ 를 추정하는 문제는 조건부 분포가 만족하는 SDE 로 표현된다. $a$ 와 $h$ 가 선형이고 잡음이 Gauss 이면 조건부 분포가 Gauss 로 유지되어 평균과 공분산의 유한차원 방정식으로 닫히고, 그 이산시간 판이 [Kalman 필터](kalman-filter.md)다.

## 생성모형

[확산모형](diffusion-models.md)은 자료에 잡음을 더하는 전진 SDE 와 그 시간역전 SDE 를 쓴다. 역전 SDE 의 표류항에 밀도의 로그기울기가 들어가고, 이것을 신경망으로 근사한 뒤 Euler–Maruyama 로 적분해 표본을 만든다.

[^1]: Karatzas, I., Shreve, S. E. *Brownian Motion and Stochastic Calculus*, 2nd ed., Springer, 1991, 5.3절.
[^2]: Stroock, D. W., Varadhan, S. R. S. *Multidimensional Diffusion Processes*, Springer, 1979, 7장.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)
- [Itô 적분](ito-calculus.md)

## 더 알아보기

- [Feynman–Kac 공식](feynman-kac.md)
- [Fokker–Planck 방정식](fokker-planck.md)
- [확산모형](diffusion-models.md)
- [Freidlin–Wentzell 이론](freidlin-wentzell.md)

#probability #analysis #machine_learning
