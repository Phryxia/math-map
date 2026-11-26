# Anderson 가속

# 개요

**Anderson 가속(Anderson acceleration)** 은 고정점 반복 $x\mapsto g(x)$ 에서 최근 몇 개의 $g$ 값을 섞어 다음 점을 만드는 방법으로, 섞는 비율은 잔차 $g(x)-x$ 들의 같은 비율의 결합이 가장 작아지도록 고른다. $x=\cos x$ 의 해 $0.7390851$ 을 $x_0=1$ 에서 $x_{k+1}=\cos x_k$ 로 구하면 오차가 $0.26$, $0.20$, $0.12$, $0.085$, $0.054$ 로 걸음마다 약 $0.67$ 배씩만 준다. 직전 두 값을 섞는 Anderson 가속은 같은 $\cos$ 계산 횟수로 오차를 $1.1\times10^{-2}$, $5.4\times10^{-4}$, $1.3\times10^{-6}$, $1.6\times10^{-10}$ 까지 줄인다.

# 직관

고정점 반복이 느린 것은 $g$ 가 해 근처에서 기울기 $g'(r)=-\sin r\approx-0.67$ 의 직선처럼 움직여 오차를 매번 $0.67$ 배로만 줄이기 때문이다. 오차가 이렇게 규칙적으로 줄면 두 점의 정보로 해를 바로 겨냥할 수 있다.

$x_0=1$ 의 잔차는 $f_0=\cos1-1=-0.4597$, $x_1=0.5403$ 의 잔차는 $f_1=\cos x_1-x_1=0.3173$ 이다. 부호가 반대이므로 두 잔차를 $1-a$ 와 $a$ 의 비율로 섞으면 $0$ 이 된다. $(1-a)f_1+af_0=0$ 에서 $a=0.4083$ 이다. 같은 비율로 $g(x_1)=0.8576$ 과 $g(x_0)=0.5403$ 을 섞은 점이 다음 점이다.

$$
x_2=0.5917\cdot0.8576+0.4083\cdot0.5403=0.7280
$$

오차는 $1.1\times10^{-2}$ 이다.

# 정의

## Anderson 가속

$g:\mathbb R^n\to\mathbb R^n$ 과 깊이 $m\ge1$ 을 정한다. $f_j=g(x_j)-x_j$ 로 두고, $m_k=\min(m,k)$ 라 하자. **Anderson 가속** 은 걸음마다 다음 최소화 문제를 풀어

$$
\min_{\alpha_0,\dots,\alpha_{m_k}}\left\Vert\sum_{i=0}^{m_k}\alpha_if_{k-i}\right\Vert\_2\qquad\text{단},\quad\sum_{i=0}^{m_k}\alpha_i=1
$$

그 해 $\alpha$ 로 다음 점을 정하는 반복이다.

$$
x_{k+1}=\sum_{i=0}^{m_k}\alpha_i\thinspace g(x_{k-i})
$$

$m_k=0$ 인 첫 걸음은 보통의 고정점 반복이다. 직관 절의 예는 $n=1$, $m=1$ 이고 $\alpha_0=1-a$, $\alpha_1=a$ 다.

```javascript
// 깊이 m 의 Anderson 가속. g 는 벡터를 받아 벡터를 돌려준다
function anderson(g, x0, m, steps, solveConstrainedLS) {
  const xs = [x0], gs = [g(x0)];
  for (let k = 0; k < steps; k++) {
    const mk = Math.min(m, k);
    const F = [];
    for (let i = 0; i <= mk; i++) {
      const j = k - i;
      F.push(gs[j].map((v, t) => v - xs[j][t])); // 잔차 f_j
    }
    const alpha = solveConstrainedLS(F); // 합이 1 인 계수 가운데 잔차 결합의 노름이 가장 작은 것
    const next = gs[k].map((v, t) => alpha.reduce((s, ai, i) => s + ai * gs[k - i][t], 0));
    xs.push(next);
    gs.push(g(next));
  }
  return xs[xs.length - 1];
}
```

# 성질

## 깊이 1 과 할선법

정리. $n=1$, $m=1$ 이면 Anderson 가속의 $x_{k+1}$ 은 $f(x)=g(x)-x$ 에 대한 [할선법](secant-method.md)의 다음 점과 같다.

증명의 요지. 제약 아래 최소화의 해는 $(1-a)f_k+af_{k-1}=0$ 인 $a=f_k/(f_k-f_{k-1})$ 이다. 할선법의 다음 점은 $s=(1-a)x_k+ax_{k-1}$ 이다. $g(x_j)=x_j+f_j$ 이므로 다음이 나온다.

$$
x_{k+1}=(1-a)g(x_k)+ag(x_{k-1})=s+(1-a)f_k+af_{k-1}=s
$$

그래서 깊이 1 의 일변수 Anderson 가속은 할선법의 수렴 차수 $1.618$ 을 갖는다. 직관 절의 오차 $1.1\times10^{-2}$, $5.4\times10^{-4}$, $1.3\times10^{-6}$, $1.6\times10^{-10}$ 에서 지수가 걸음마다 약 $1.6$ 배가 된다.

## 선형 문제와 GMRES

정리. $g(x)=Mx+b$ 이고 $I-M$ 이 가역일 때, 깊이를 제한하지 않은 Anderson 가속은 연립방정식 $(I-M)x=b$ 에 대한 [GMRES](gmres.md)(generalized minimal residual method)의 반복과 대응한다. GMRES 의 $k$ 번째 근삿값을 $z_k$ 라 하면 $x_{k+1}=g(z_k)$ 이다.[^1]

증명의 요지. 선형이면 잔차 $f_j$ 들이 Krylov 부분공간을 펼치고, 합이 $1$ 인 결합의 잔차 최소화가 GMRES 의 잔차 최소화와 같은 문제가 된다. 그래서 고정점 반복이 스펙트럼 반지름 $1$ 미만의 축약일 때뿐 아니라, $M$ 의 고윳값 중 절댓값이 $1$ 보다 큰 것이 있어 고정점 반복이 발산할 때에도, 정확한 계산에서 Anderson 가속은 $n+1$ 걸음 안에 해에 닿는다.

## 축약사상에서의 수렴

[축약사상 고정점 정리](banach-fixed-point.md)의 조건을 $g$ 가 만족하고 $g$ 가 매끄러우면, 해 근처의 초깃값에서 Anderson 가속의 잔차는 고정점 반복의 잔차의 수렴률 이하로 줄어든다.[^2] 깊이가 클수록 최소화 문제가 나빠질 수 있어, 실제로는 $m$ 을 $5$ 에서 $20$ 사이로 둔다.

# 활용

- 전자 구조 계산의 자기 일관 반복. 밀도에서 퍼텐셜을 만들고 다시 밀도를 구하는 고정점 반복이 진동하거나 느릴 때, 앞선 밀도들을 섞는 이 방법을 쓰고 이 분야에서는 Pulay 혼합(Pulay mixing)이라 부른다.
- 미분방정식의 비선형 풀이. 고정점 꼴의 Picard 반복에 붙여 Jacobian 없이 [Newton 법](newton-method.md)에 가까운 속도를 얻는다.
- 최적화와 반복 알고리즘. 교대 방향 승수법(alternating direction method of multipliers)이나 기댓값 최대화(expectation–maximization)처럼 한 걸음이 고정점 사상으로 적히는 알고리즘의 수렴을 가속한다.

[^1]: H. F. Walker, P. Ni, "Anderson acceleration for fixed-point iterations", SIAM Journal on Numerical Analysis 49 (2011), 1715–1735.
[^2]: A. Toth, C. T. Kelley, "Convergence analysis for Anderson acceleration", SIAM Journal on Numerical Analysis 53 (2015), 805–819.

# 연관 문서

## 선수지식

- [축약사상 고정점 정리](banach-fixed-point.md)
- [할선법](secant-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #linear_algebra
