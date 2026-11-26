# 할선법

# 개요

**할선법(secant method)** 은 방정식 $f(x)=0$ 의 해를 함숫값만으로 구하는 반복법이다. $f$ 의 값이 긴 계산이나 실험 끝에 하나씩만 나오면 [Newton 법](newton-method.md)이 요구하는 도함수를 얻을 수 없다. 할선법은 접선 대신 최근 두 점을 지나는 직선을 긋고 그 직선의 영점을 다음 근삿값으로 삼아, 걸음마다 함숫값 하나만 새로 계산하면서 맞는 자릿수를 빠르게 늘린다.

# 직관

$f(x)=x^2-2$ 의 해 $\sqrt2$ 를 구하는데, $f$ 에 수를 넣으면 값이 나오는 것만 쓸 수 있다고 하자. Newton 법은 $x_{k+1}=x_k-f(x_k)/f'(x_k)$ 로 움직이므로 걸음마다 $f'(x_k)$ 가 있어야 한다. 값만 나오는 계산에서는 이 수가 나오지 않는다.

접선의 기울기가 없으니 이미 계산한 두 점의 기울기로 바꾼다. $x_0=1$ 에서 $f=-1$, $x_1=2$ 에서 $f=2$ 이므로 두 점을 잇는 직선의 기울기는 $3$ 이고, 그 직선은 $x_2=2-2/3=1.33333$ 에서 $0$ 이 된다. 이제 $x_1$ 과 $x_2$ 를 잇는 직선의 영점을 구하면 $x_3=1.4$ 이고, 같은 일을 되풀이하면 $1.41463$, $1.4142114$, $1.41421356$ 이 나온다.

오차는 $8.1\times10^{-2}$, $1.4\times10^{-2}$, $4.2\times10^{-4}$, $2.1\times10^{-6}$, $3.2\times10^{-10}$ 이다. 걸음마다 맞는 자릿수가 대략 $1.6$ 배가 된다. 두 점을 지나는 직선을 **할선(secant line)** 이라 하므로 이 반복을 할선법이라 한다.

# 정의

## 할선 반복

할선법은 서로 다른 두 초깃값 $x_0$, $x_1$ 에서 시작해 다음 점화식으로 $x_2, x_3, \dots$ 를 만드는 반복이다.

$$
x_{k+1}=x_k-f(x_k)\thinspace\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}
$$

분수 부분은 두 점을 잇는 직선의 기울기의 역수다. 이 기울기를 **분할 차분(divided difference)** 이라 하고 $f\lbrack x_{k-1},x_k\rbrack$ 로 쓴다. [다항식 보간](polynomial-interpolation.md)에서 정의되는 일차 분할 차분과 같다.

$$
f\lbrack x_{k-1},x_k\rbrack=\frac{f(x_k)-f(x_{k-1})}{x_k-x_{k-1}},\qquad x_{k+1}=x_k-\frac{f(x_k)}{f\lbrack x_{k-1},x_k\rbrack}
$$

Newton 반복의 $f'(x_k)$ 를 $f\lbrack x_{k-1},x_k\rbrack$ 로 바꾼 꼴이다. 직관 절의 첫 걸음은 $f\lbrack 1,2\rbrack=3$ 이고 $x_2=2-2/3$ 이다.

같은 값을 다음 꼴로도 쓸 수 있다.

$$
x_{k+1}=\frac{x_{k-1}f(x_k)-x_kf(x_{k-1})}{f(x_k)-f(x_{k-1})}
$$

이 꼴은 해 근처에서 분자의 두 항이 거의 같아 자릿수를 잃는다. 계산에는 앞의 꼴을 쓴다.

```javascript
// f 의 값만 쓰는 할선 반복. 걸음마다 f 를 한 번 계산한다
function secant(f, x0, x1, tol, maxIter) {
  let f0 = f(x0), f1 = f(x1);
  for (let k = 0; k < maxIter; k++) {
    if (f1 === f0) throw new Error("할선이 수평이다");
    const x2 = x1 - f1 * (x1 - x0) / (f1 - f0);
    if (Math.abs(x2 - x1) < tol) return x2;
    x0 = x1; f0 = f1;
    x1 = x2; f1 = f(x2);
  }
  return x1;
}
```

## 가위치법

**가위치법(regula falsi, method of false position)** 은 부호가 다른 두 점 $a$, $b$ 를 들고 다니며 할선의 영점 $c$ 를 구한 뒤, $f(a)$ 와 $f(c)$ 의 부호가 다르면 $b$ 를 $c$ 로, 같으면 $a$ 를 $c$ 로 바꾸는 반복이다. 두 점 사이에 언제나 부호 변화가 있으므로 [중간값 정리](intermediate-value-theorem.md)로 해가 그 사이에 있다.

직관 절의 $x^2-2$ 에서 $a=1$, $b=2$ 로 시작하면 $c$ 는 $1.33333$, $1.4$, $1.41176$, $1.41379$, $1.41414$ 이고 $b=2$ 는 한 번도 바뀌지 않는다. 오차는 걸음마다 약 $0.17$ 배로 준다.

# 성질

## 오차 점화식

$f$ 가 두 번 연속미분가능하고 $r$ 이 단순근, 곧 $f(r)=0$, $f'(r)\ne0$ 이라 하자. 오차 $e_k=x_k-r$ 은 다음을 만족한다.

$$
e_{k+1}=\frac{f\lbrack x_{k-1},x_k,r\rbrack}{f\lbrack x_{k-1},x_k\rbrack}\thinspace e_ke_{k-1}
$$

증명의 요지. $p$ 를 $x_{k-1}$ 과 $x_k$ 에서 $f$ 와 같은 일차식이라 하면 보간 오차 공식으로 $f(r)-p(r)=f\lbrack x_{k-1},x_k,r\rbrack\thinspace e_{k-1}e_k$ 다. $f(r)=0$ 이고 $p(x_{k+1})=0$ 이며 $p$ 의 기울기가 $f\lbrack x_{k-1},x_k\rbrack$ 이므로 $-p(r)=f\lbrack x_{k-1},x_k\rbrack\thinspace e_{k+1}$ 이다. 두 식에서 $e_{k+1}$ 을 풀면 위 식이 나온다.

$x_{k-1}$, $x_k$ 가 $r$ 로 가면 [평균값 정리](mean-value-theorem.md)의 분할 차분 판으로 분자는 $f''(r)/2$ 로, 분모는 $f'(r)$ 로 간다.

$$
\lim_{k\to\infty}\frac{e_{k+1}}{e_ke_{k-1}}=\frac{f''(r)}{2f'(r)}
$$

직관 절의 $x^2-2$ 에서 이 값은 $1/(2\sqrt2)\approx0.354$ 이고, 오차에서 계산한 $e_4/(e_3e_2)$ 와 $e_5/(e_4e_3)$ 는 둘 다 $0.355$ 다.

## 수렴 차수

정리. $f$ 가 두 번 연속미분가능하고 $r$ 이 단순근이면, $x_0$, $x_1$ 이 $r$ 에 충분히 가까울 때 할선 반복은 $r$ 로 수렴하고 수렴 차수(order of convergence)는 황금비 $\varphi=(1+\sqrt5)/2\approx1.618$ 이다.

증명의 요지. 오차 점화식에서 $\lvert e_{k+1}\rvert\approx C\lvert e_k\rvert\lvert e_{k-1}\rvert$ 다. $\lvert e_{k+1}\rvert\approx A\lvert e_k\rvert^p$ 꼴을 넣으면 $\lvert e_{k-1}\rvert\approx(\lvert e_k\rvert/A)^{1/p}$ 이므로 양변의 지수를 맞추어 $p=1+1/p$, 곧 $p^2=p+1$ 이 나온다. 양의 근이 $\varphi$ 다. 수렴 자체는 $r$ 근방에서 계수 $C\lvert e_{k-1}\rvert$ 가 $1$ 보다 작게 유지된다는 데서 나온다.

## 함숫값 한 번당 속도

Newton 법은 걸음마다 $f$ 와 $f'$ 를 계산하고 차수가 $2$ 다. 두 값의 계산 비용이 같으면 함숫값 두 번에 차수 $2$ 이므로 한 번당 차수는 $2^{1/2}\approx1.414$ 다. 할선법은 함숫값 한 번에 차수 $\varphi\approx1.618$ 이다. $f'$ 의 계산이 $f$ 의 계산의 약 $0.44$ 배보다 비싸면 같은 계산량으로 할선법이 더 많은 자릿수를 얻는다.

## 실패와 느려지는 경우

- 수평 할선. $f(x_k)=f(x_{k-1})$ 이면 분모가 $0$ 이다. 해에서 멀리 있는 두 점의 값이 비슷해도 다음 점이 멀리 튄다.
- 해를 가두지 않는다. 가위치법과 달리 두 점 사이에 해가 있다는 보장이 없어, 초깃값이 멀면 발산할 수 있다.
- 중근. $f(x)=(x-1)^2$ 에서는 $e_{k+1}=e_ke_{k-1}/(e_k+e_{k-1})$ 이다. 비율 $t=e_{k+1}/e_k$ 가 일정하다고 놓으면 $t^2+t-1=0$ 이고, 오차는 걸음마다 $t=(\sqrt5-1)/2\approx0.618$ 배로 줄어드는 선형 수렴이 된다. $x_0=0$, $x_1=0.5$ 에서 비율은 $0.667$, $0.6$, $0.625$, $0.615$, $0.619$ 다.
- 가위치법의 고정된 끝점. $f$ 가 해를 낀 구간에서 볼록이거나 오목이면 한쪽 끝점이 끝까지 바뀌지 않고 수렴이 선형이 된다. 고정된 끝점의 함숫값을 매번 반으로 줄이는 Illinois 수정(Illinois modification)은 차수를 약 $1.442$ 로 올린다.

# 활용

- [Brent 법](brent-method.md)은 해를 가두는 이분법, 할선법, 세 점을 지나는 역 이차 보간을 섞어, 이분법의 수렴 보장과 할선법의 속도를 함께 얻는다. 표준 수치 라이브러리의 한 변수 근 찾기가 이 방법이다.
- 경계값 문제의 [사격법](shooting-method.md)은 초기 기울기 $s$ 를 정해 [상미분방정식](ordinary-differential-equations.md)을 끝까지 풀고, 끝점에서 경계조건과의 차이 $F(s)$ 를 $0$ 으로 만든다. $F$ 의 값 하나가 미분방정식의 수치해 하나이므로 도함수 없이 할선법으로 $s$ 를 고친다.
- [준Newton 법](quasi-newton-methods.md)의 할선 조건 $B_{k+1}s_k=y_k$ 는 분할 차분을 여러 변수로 옮긴 것이다. 한 변수에서 Broyden 법은 할선법과 같다.
- [Muller 법](muller-method.md)은 직선 대신 최근 세 점을 지나는 이차식의 영점을 다음 점으로 삼아 차수를 약 $1.84$ 로 올리고, 실수 초깃값에서 복소수 근에 닿을 수 있다.

# 연관 문서

## 선수지식

- [Newton 법](newton-method.md)
- [다항식 보간](polynomial-interpolation.md)

## 더 알아보기

- [Brent 법](brent-method.md)
- [Ridders 법](ridders-method.md)
- [Anderson 가속](anderson-acceleration.md)
- [Muller 법](muller-method.md)
- [사격법](shooting-method.md)

#optimization #analysis #algorithms
