# 기하 중앙값

# 개요

**기하 중앙값(geometric median)** 은 $\mathbb R^n$ 의 점 $a_1,\dots,a_m$ 에 대해 각 점까지의 Euclid 거리의 합을 최소화하는 점이다. 마을 다섯 곳에 공동 창고 하나를 지어 각 마을까지 직선 거리의 합을 줄이려 할 때, 좌표의 평균은 멀리 떨어진 마을 하나 쪽으로 크게 끌려간다. 기하 중앙값은 거리의 합 자체를 최소화하므로 그런 마을 하나에 덜 끌리고, 각 마을에서 오는 길이 $1$ 인 방향 벡터의 합이 $0$ 이 되는 점을 반복으로 찾아 구한다.

# 직관

수직선 위의 점 $0,1,2,10,11$ 에서 거리의 합 $f(x)=\sum_i\lvert x-a_i\rvert$ 를 가장 작게 하는 $x$ 를 찾는다. $x$ 를 오른쪽으로 조금 옮기면 $x$ 의 왼쪽에 있는 점까지의 거리는 늘고 오른쪽에 있는 점까지의 거리는 준다. 그래서 $f$ 의 기울기는 왼쪽 점의 수에서 오른쪽 점의 수를 뺀 값이다. $1\lt x\lt 2$ 에서는 $2-3=-1$ 이고 $2\lt x\lt 10$ 에서는 $3-2=1$ 이므로 $f$ 는 $x=2$ 에서 가장 작다. 가운데 점 $2$ 가 답이고, 이것이 중앙값이다.

점 $11$ 을 $100$ 으로 옮겨도 왼쪽과 오른쪽 점의 수가 그대로이므로 답은 $2$ 에 머문다. 평균은 $4.8$ 에서 $22.6$ 으로 움직인다.

평면에서는 점의 수를 세는 대신 방향을 더한다. $x$ 에서 $a_i$ 로 가는 거리는 $x$ 를 $a_i$ 에서 멀어지는 방향으로 옮길 때 그 길이만큼 늘어난다. 그래서 $f$ 의 기울기는 각 $a_i$ 에서 $x$ 로 향하는 길이 $1$ 인 벡터들의 합이다. 이 합이 $0$ 인 점이 답이지만, 벡터의 길이를 맞추려고 거리로 나누었기 때문에 이 방정식은 일차가 아니어서 반복으로 푼다.

수직선에서는 보통의 중앙값이고, 세 점이면 Fermat 점이다. 목적함수가 [볼록](convexity.md)이어서 국소 최소가 전역 최소이지만, 다섯 점 이상에서는 해를 근호로 쓸 수 없어 반복 알고리즘으로 구한다.

# 정의

점 $a_1,\dots,a_m\in\mathbb R^n$ 과 가중치 $w_1,\dots,w_m\gt 0$ 에 대해 함수

$$
f(x)=\sum_{i=1}^mw_i\Vert x-a_i\Vert
$$

를 최소화하는 문제가 Fermat–Weber 문제이고, 최소점을 기하 중앙값이라 한다. $\Vert\cdot\Vert$ 는 Euclid 노름이다. 통계에서는 **공간 중앙값(spatial median)** 이라 한다.

$x$ 가 어느 $a_i$ 와도 다르면 $f$ 는 $x$ 에서 미분가능하고 기울기는 다음과 같다.

$$
\nabla f(x)=\sum_{i=1}^mw_i\frac{x-a_i}{\Vert x-a_i\Vert}
$$

# 성질

## 존재와 유일성

정리. $f$ 는 볼록이고 최소점이 존재한다. 점 $a_1,\dots,a_m$ 이 한 직선 위에 있지 않으면 최소점은 하나뿐이다.

증명의 요지. 노름은 볼록이고 볼록함수의 양수배의 합은 볼록이다. $\Vert x\Vert\to\infty$ 이면 $f(x)\to\infty$ 이므로 최소점이 존재한다. $x\mapsto\Vert x-a_i\Vert$ 는 $a_i$ 를 지나는 직선 위에서만 일차이므로, 두 최소점을 잇는 선분 위에서 $f$ 가 일차이려면 모든 $a_i$ 가 그 선분의 직선 위에 있어야 한다.

## 최적성 조건

정리. $x$ 가 어느 $a_i$ 와도 다르면 $x$ 가 최소점인 것은 $\nabla f(x)=0$ 과 동치다. $x=a_k$ 가 최소점인 것은 다음과 동치다[^1].

$$
\Bigl\Vert\sum_{i\ne k}w_i\frac{a_k-a_i}{\Vert a_k-a_i\Vert}\Bigr\Vert\le w_k
$$

$a_k$ 에서는 $f$ 가 미분가능하지 않다. [부분미분](subdifferential.md)으로 보면 $w_k\Vert x-a_k\Vert$ 의 $a_k$ 에서의 부분미분이 반지름 $w_k$ 인 닫힌 공이므로, 나머지 항의 기울기가 그 공 안에 있는 것이 $0$ 이 부분미분에 들어 있는 조건이다.

## Fermat 점

정리(Torricelli). 삼각형의 세 각이 모두 $120^\circ$ 보다 작으면 세 꼭짓점의 기하 중앙값은 세 변을 각각 $120^\circ$ 로 보는 삼각형 안의 점이다. 한 각이 $120^\circ$ 이상이면 그 꼭짓점이 기하 중앙값이다.

꼭짓점이 아닌 최소점에서는 길이 $1$ 인 벡터 셋의 합이 $0$ 이므로 세 벡터가 서로 $120^\circ$ 를 이룬다. 꼭짓점 $a_k$ 에서는 나머지 두 단위벡터의 합의 길이가 $1$ 이하인 것이 위의 조건이고, 이것은 두 벡터 사이의 각이 $120^\circ$ 이상인 것과 동치다.

## 근호로 쓸 수 없음

정리(Bajaj). 평면의 다섯 점 이상에 대해, 좌표가 유리수인데 기하 중앙값의 좌표가 유리수에서 사칙연산과 거듭제곱근으로 얻어지지 않는 예가 있다[^2].

따라서 정확한 공식 대신 반복 알고리즘이나 [근사 알고리즘](approximation-algorithms.md)으로 구한다.

## Weiszfeld 반복

**Weiszfeld 반복(Weiszfeld's algorithm)** 은 $\nabla f(x)=0$ 을 $x$ 에 대해 형식적으로 푼 식을 고정점 반복으로 쓴 것이다[^3].

$$
x_{t+1}=\frac{\sum_iw_ia_i/\Vert x_t-a_i\Vert}{\sum_iw_i/\Vert x_t-a_i\Vert}
$$

$x_{t+1}$ 은 가중치 $w_i/\Vert x_t-a_i\Vert$ 를 둔 제곱거리 합 $\sum_iw_i\Vert x-a_i\Vert^2/\Vert x_t-a_i\Vert$ 의 최소점, 곧 가중 평균이다.

```typescript
// 점 a[i] 와 가중치 w[i] 의 기하 중앙값을 Weiszfeld 반복으로 근사한다.
function weiszfeld(a: number[][], w: number[], x: number[], steps: number): number[] {
  const dist = (p: number[], q: number[]) =>
    Math.hypot(...p.map((pi, k) => pi - q[k]));
  for (let t = 0; t < steps; t++) {
    const num = new Array(x.length).fill(0);
    let den = 0;
    for (let i = 0; i < a.length; i++) {
      const r = dist(x, a[i]);
      if (r === 0) return x; // 자료점에 닿으면 멈춘다. 그 점이 최소점인지는 최적성 조건으로 판정한다
      const c = w[i] / r;
      for (let k = 0; k < x.length; k++) num[k] += c * a[i][k];
      den += c;
    }
    x = num.map((v) => v / den);
  }
  return x;
}
```

정리(Kuhn). 반복이 자료점에 닿지 않으면 $f(x_{t+1})\le f(x_t)$ 이고 등호는 $x_t$ 가 최소점일 때만 성립한다. 자료점에 닿지 않는 반복은 최소점으로 수렴한다[^1].

증명의 요지. 산술-기하 평균 부등식으로 $\Vert x-a_i\Vert\le\frac12\bigl(\Vert x-a_i\Vert^2/\Vert x_t-a_i\Vert+\Vert x_t-a_i\Vert\bigr)$ 이고 등호는 $x=x_t$ 에서 성립한다. 오른쪽에 $w_i$ 를 곱해 더한 함수를 $g$ 라 하면 모든 $x$ 에서 $g(x)\ge f(x)$ 이고 $g(x_t)=f(x_t)$ 이며, $g$ 의 최소점이 $x_{t+1}$ 이다. 따라서 $f(x_{t+1})\le g(x_{t+1})\le g(x_t)=f(x_t)$ 이다.

## 강건성

**붕괴점(breakdown point)** 은 자료점 가운데 몇 분의 몇을 임의로 옮겨야 추정값을 임의로 멀리 보낼 수 있는지를 나타내는 비율이다. 평균의 붕괴점은 $0$ 이다. 점 하나만 멀리 옮겨도 평균이 따라간다.

정리(Lopuhaä–Rousseeuw). 기하 중앙값의 붕괴점은 $1/2$ 이다[^4].

# 활용

- 시설 배치. A. Weber 는 원료 산지와 시장까지의 운송비 합을 최소화하는 공장 위치를 이 문제로 정식화했다. 시설을 $k$ 개 두고 후보지를 유한 집합으로 제한한 판본이 [k-중앙값 문제](k-median.md)다.
- 강건한 위치 추정. 다변량 자료에서 이상치가 섞일 때 평균 대신 공간 중앙값으로 중심을 추정한다. 분산 학습에서 일부 작업자가 보낸 기울기가 틀렸을 때 기울기들의 기하 중앙값으로 합치는 방법도 같은 성질을 쓴다.
- 반복 재가중 최소제곱. Weiszfeld 반복은 $\ell_1$ 류의 비용을 가중 제곱 비용의 반복으로 푸는 반복 재가중 최소제곱(iteratively reweighted least squares)의 한 예다.

[^1]: H. W. Kuhn, "A note on Fermat's problem", Mathematical Programming 4 (1973), 98–107.
[^2]: C. Bajaj, "The algebraic degree of geometric optimization problems", Discrete & Computational Geometry 3 (1988), 177–191.
[^3]: E. Weiszfeld, "Sur le point pour lequel la somme des distances de n points donnés est minimum", Tôhoku Mathematical Journal 43 (1937), 355–386.
[^4]: H. P. Lopuhaä, P. J. Rousseeuw, "Breakdown points of affine equivariant estimators of multivariate location and covariance matrices", Annals of Statistics 19 (1991), 229–248.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #statistics #algorithms
