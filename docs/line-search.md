# 선탐색

# 개요

선탐색은 하강방향이 정해진 뒤 그 방향으로 갈 거리를 정하는 절차다. 1차원 최소화를 정확히 푸는 대신 받아들일 보폭의 조건을 걸고 그 조건을 만족하는 값을 찾는다. 표준 조건이 Armijo 충분감소 조건과 곡률 조건을 묶은 Wolfe 조건이고, 이 조건 아래에서 하강법의 전역 수렴이 따라온다.

# 직관

$f(x)=x^2/2$ 를 $x=1$ 에서 방향 $d=-1$ 로 줄인다. $\varphi(\alpha)=f(1-\alpha)=(1-\alpha)^2/2$ 를 최소화하는 $\alpha$ 는 $1$ 이고 손으로 풀린다. $f$ 가 변수 수백 개의 함수면 반복마다 $\varphi$ 의 최소점을 정확히 구하는 비용이 반복 전체의 비용을 넘는다. 정확한 최소점을 포기하고 $\alpha=1$ 부터 시도해 $f$ 가 줄어들기만 하면 받아들이는 방법을 생각할 수 있다.

줄어들기만 요구하면 수렴하지 않는다. $\alpha\_k$ 를 아주 작게 잡으면 $f$ 는 매번 조금씩 줄지만 걸음의 합이 유한해 반복열이 최소점에 닿지 못한 채 멈춘다. 감소량이 보폭에 걸맞게 커야 하므로, 방향 $d$ 로 출발할 때의 기울기 $\nabla f(x)^{\mathsf T}d\lt 0$ 에 보폭을 곱한 양의 일정 비율 이상을 실제 감소량으로 요구한다. 이 요구는 $\alpha$ 가 작을 때 언제나 충족되므로 보폭이 짧아지는 것은 막지 못한다. 그래서 도착점의 기울기가 출발점보다 충분히 평평해질 것을 함께 요구한다. 두 요구가 Wolfe 조건이다.

# 정의

$f:\mathbb R^n\to\mathbb R$ 가 미분가능하고 현재 점 $x\_k$ 에서 $d\_k$ 가 **하강방향**이라 한다. 곧 $\nabla f(x\_k)^{\mathsf T}d\_k\lt 0$ 이다. 1변수 함수를 다음으로 쓴다.

$$
\varphi(\alpha)=f(x\_k+\alpha d\_k),\qquad \varphi'(0)=\nabla f(x\_k)^{\mathsf T}d\_k
$$

선탐색은 $\alpha\gt 0$ 을 정해 $x\_{k+1}=x\_k+\alpha d\_k$ 로 가는 절차다. $\varphi$ 의 최소점을 정확히 쓰는 것을 정확한 선탐색, 아래의 조건만 만족하는 값을 쓰는 것을 비정확 선탐색이라 한다.

## Armijo 조건

상수 $c\_1\in(0,1)$ 을 정하고 다음을 요구한다.

$$
f(x\_k+\alpha d\_k)\le f(x\_k)+c\_1\thinspace\alpha\thinspace\nabla f(x\_k)^{\mathsf T}d\_k
$$

우변은 기울기 $c\_1\varphi'(0)$ 의 직선이다. $c\_1\lt 1$ 이므로 이 직선은 $\varphi$ 의 접선보다 완만하고, 작은 $\alpha$ 에서는 조건이 성립한다. 실무의 $c\_1$ 은 $10^{-4}$ 정도다.

## 곡률 조건

상수 $c\_2\in(c\_1,1)$ 을 정하고 다음을 요구한다.

$$
\nabla f(x\_k+\alpha d\_k)^{\mathsf T}d\_k\ge c\_2\thinspace\nabla f(x\_k)^{\mathsf T}d\_k
$$

양변이 음수이므로 이 조건은 도착점의 방향미분이 출발점의 $c\_2$ 배보다 크다는 것, 곧 기울기가 충분히 평평해졌다는 것이다. 두 조건을 함께 **Wolfe 조건**이라 하고, 곡률 조건을 절댓값으로 바꾼

$$
\left\vert\nabla f(x\_k+\alpha d\_k)^{\mathsf T}d\_k\right\vert\le c\_2\left\vert\nabla f(x\_k)^{\mathsf T}d\_k\right\vert
$$

을 함께 요구하는 것을 **강 Wolfe 조건**이라 한다. 강 Wolfe 는 $\varphi'(\alpha)$ 가 크게 양수인 지점을 배제하므로 $\varphi$ 의 국소최소점 근처로 보폭을 제한한다. Newton 류에서 $c\_2$ 는 $0.9$ , 공액기울기법에서는 $0.1$ 정도를 쓴다.

## 되추적 선탐색

곡률 조건을 빼고 Armijo 조건만 쓰되 보폭을 줄여 가며 찾는 절차다.

```javascript
function backtrackingLineSearch(f, gradAtX, x, d, alpha0, c1, rho) {
  let alpha = alpha0                      // 보통 1
  const fx = f(x)
  const slope = dot(gradAtX, d)           // 음수
  while (f(add(x, scale(d, alpha))) > fx + c1 * alpha * slope) {
    alpha = rho * alpha                   // 보통 rho = 1/2
  }
  return alpha
}
```

## Goldstein 조건

Armijo 조건에 반대쪽 부등식을 붙여 $\alpha$ 를 위아래로 가두는 방식이다. $0\lt c\lt 1/2$ 에 대해 다음을 요구한다.

$$
f(x\_k)+(1-c)\thinspace\alpha\thinspace\varphi'(0)\le f(x\_k+\alpha d\_k)\le f(x\_k)+c\thinspace\alpha\thinspace\varphi'(0)
$$

구현이 간단하지만 허용 구간이 $\varphi$ 의 최소점을 배제할 수 있어 Wolfe 조건보다 덜 쓴다.

# 성질

## 허용 구간의 존재

$f$ 가 연속미분가능하고 $\varphi$ 가 아래로 유계이면 Wolfe 조건을 만족하는 $\alpha$ 의 구간이 존재한다.

증명의 요지. 직선 $\ell(\alpha)=f(x\_k)+c\_1\alpha\varphi'(0)$ 은 아래로 유계가 아니므로 $\varphi$ 와 만나는 점이 있고, 그 가장 작은 교점을 $\alpha'$ 이라 한다. $(0,\alpha')$ 에서 Armijo 조건이 성립한다. $\varphi(\alpha')=\ell(\alpha')$ 에 평균값 정리를 쓰면 $\varphi'(\alpha'')=c\_1\varphi'(0)$ 인 $\alpha''\in(0,\alpha')$ 이 있고, $c\_1\lt c\_2$ 이므로 $\alpha''$ 에서 곡률 조건도 성립한다. 두 조건이 연속이므로 $\alpha''$ 의 근방이 허용 구간이다.[^1]

## Zoutendijk 조건

$f$ 가 아래로 유계이고 $\nabla f$ 가 Lipschitz 상수 $L$ 로 Lipschitz 연속이며 모든 반복이 Wolfe 조건을 만족하면 다음 급수가 수렴한다. 여기서 $\theta\_k$ 는 $d\_k$ 와 $-\nabla f(x\_k)$ 가 이루는 각이다.

$$
\sum\_{k\ge 0}\cos^2\theta\_k\thinspace\Vert\nabla f(x\_k)\Vert^2\lt \infty
$$

증명의 요지. 곡률 조건과 Lipschitz 연속성에서 $\alpha\_k\ge c\thinspace\vert\varphi'(0)\vert/(L\Vert d\_k\Vert^2)$ 를 얻고, 이를 Armijo 조건에 넣으면 한 걸음의 감소량이 $\cos^2\theta\_k\Vert\nabla f(x\_k)\Vert^2$ 의 상수배 이상이다. $f$ 가 아래로 유계이므로 감소량의 합이 유한하다.

## 전역 수렴

Zoutendijk 조건에서 방향이 기울기와 직교로 가지 않는다는 조건, 곧 $\cos\theta\_k\ge\delta\gt 0$ 이 모든 $k$ 에서 성립하면 $\Vert\nabla f(x\_k)\Vert\to0$ 이다.

급수가 수렴하므로 항이 $0$ 으로 가고, $\cos^2\theta\_k\ge\delta^2$ 이 하한이므로 기울기의 노름이 $0$ 으로 간다. 최대하강 방향 $d\_k=-\nabla f(x\_k)$ 는 $\cos\theta\_k=1$ 이라 이 조건을 만족하고, 준Newton 방향은 $H\_k$ 의 조건수가 유계일 때 만족한다.

## 신뢰영역 방법과의 대비

선탐색은 방향을 먼저 정하고 거리를 정한다. 신뢰영역 방법은 거리의 상한을 먼저 정하고 그 안에서 모형을 최소화해 방향과 거리를 함께 얻는다. 모형 Hessian 이 양정부호가 아닐 때 선탐색은 하강방향을 따로 만들어야 하고, 신뢰영역은 음의 곡률 방향을 그대로 쓸 수 있다.

# 활용

- **[경사하강법](gradient-descent.md).** 고정 보폭 $\eta\gt 2/L$ 에서 발산하는 것을 되추적 선탐색이 막는다. $L$ 을 모르는 경우에 보폭을 자료에서 정하는 표준 방법이다.
- **[준Newton 법](quasi-newton-methods.md).** BFGS(Broyden–Fletcher–Goldfarb–Shanno)의 근사 Hessian 이 양정부호를 유지하는 조건 $y\_k^{\mathsf T}s\_k\gt 0$ 이 곡률 조건에서 따라온다. 강 Wolfe 선탐색을 쓰는 것이 L-BFGS(limited-memory BFGS) 구현의 표준이다.
- **[Newton 법](newton-method.md).** 보폭을 $1$ 부터 줄이는 감쇠 Newton 이 되추적 선탐색이고, 해에서 멀 때 반복열이 발산하는 것을 막는다. 해 근방에서는 $\alpha=1$ 이 받아들여져 2차 수렴이 회복된다.
- **공액기울기법.** [Krylov 부분공간 방법](krylov-subspace-methods.md)의 비선형 판에서 강 Wolfe 조건이 방향의 하강성을 보장한다. $c\_2$ 를 작게 잡는 것이 이 때문이다.

[^1]: Jorge Nocedal and Stephen Wright, *Numerical Optimization*, 2nd ed., Springer, 2006, Chapter 3. Wolfe 조건, 허용 구간의 존재, Zoutendijk 조건과 전역 수렴 정리.

# 연관 문서

## 선수지식

- [경사하강법](gradient-descent.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #machine_learning
