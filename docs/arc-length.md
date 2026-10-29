# 곡선의 길이

# 개요

**곡선의 길이(arc length)** 는 곡선 위에 점을 촘촘히 찍고 이웃한 점을 선분으로 이었을 때 그 꺾은선의 길이가 다가가는 값이다. 포물선 $y=x^2$ 의 $x=0$ 에서 $x=1$ 까지의 부분은 자로 잴 수 없고, 양 끝을 잇는 선분의 길이 $\sqrt2$ 는 곡선보다 짧다. 곡선이 미분가능하면 꺾은선의 길이의 합이 속력 $\vert\gamma'(t)\vert$ 의 Riemann 합이 되어, 길이를 적분 하나로 계산한다.

# 직관

$y=x^2$ 의 $0\le x\le1$ 부분의 길이를 구한다. 양 끝만 이으면 $\sqrt2=1.414\cdots$ 다. 가운데 점 $(1/2,1/4)$ 을 더해 두 선분으로 이으면 $\sqrt{1/4+1/16}+\sqrt{1/4+9/16}=1.460\cdots$ 이다. 점을 더할 때마다 꺾은선이 곡선에 가까워지고 길이가 늘어나지만, 이 합을 극한까지 계산할 식이 없다.

막힌 곳은 선분마다 높이 차 $\Delta y$ 가 달라 합이 정리되지 않는다는 것이다. $[x_{i-1},x_i]$ 에서 [미분](derivative.md)의 평균값 정리로 $\Delta y=f'(\xi_i)\Delta x$ 인 $\xi_i$ 가 있으므로 선분의 길이는 $\sqrt{1+f'(\xi_i)^2}\thinspace\Delta x$ 다. 그러면 꺾은선의 길이는 함수 $\sqrt{1+f'(x)^2}$ 의 [Riemann 적분](riemann-integral.md)의 합이고, 극한은 다음 적분이다.

$$
\int_0^1\sqrt{1+4x^2}\thinspace dx=\frac{2\sqrt5+\log(2+\sqrt5)}{4}=1.4789\cdots
$$

# 정의

## 꺾은선의 상한

연속인 곡선 $\gamma\colon\lbrack a,b\rbrack\to\mathbb R^n$ 과 분할 $a=t_0\lt t_1\lt\cdots\lt t_m=b$ 에 대해 꺾은선의 길이 $\sum_{i=1}^{m}\vert\gamma(t_i)-\gamma(t_{i-1})\vert$ 를 둔다. 모든 분할에 대한 이 값의 상한을 곡선의 길이 $L(\gamma)$ 라 하고, $L(\gamma)\lt\infty$ 이면 $\gamma$ 를 **길이를 잴 수 있는 곡선(rectifiable curve)** 이라 한다.

분할에 점을 더하면 삼각부등식으로 꺾은선의 길이가 줄지 않으므로, 상한은 분할을 잘게 할 때의 극한과 같다.

## 호길이 매개화

$\gamma$ 가 연속미분가능하고 $\gamma'(t)\ne0$ 이면 $s(t)=\int_a^t\vert\gamma'(u)\vert\thinspace du$ 는 증가 전단사이고, $\sigma(s)=\gamma(t(s))$ 를 **호길이 매개화(arc length parametrization)** 라 한다. $\vert\sigma'(s)\vert=1$ 이므로 $\sigma$ 는 속력 $1$ 로 곡선을 지나고, $s$ 는 출발점에서 잰 길이다.

# 성질

## 적분 공식

**정리.** $\gamma$ 가 연속미분가능하면 다음이 성립한다.

$$
L(\gamma)=\int_a^b\vert\gamma'(t)\vert\thinspace dt
$$

증명의 요지. [미적분학의 기본 정리](fundamental-calculus.md)로 $\gamma(t_i)-\gamma(t_{i-1})=\int_{t_{i-1}}^{t_i}\gamma'$ 이므로 각 선분의 길이는 $\int_{t_{i-1}}^{t_i}\vert\gamma'\vert$ 를 넘지 않고, $L(\gamma)\le\int_a^b\vert\gamma'\vert$ 다. 반대로 $\gamma'$ 은 $\lbrack a,b\rbrack$ 에서 [균등연속](uniform-continuity.md)이므로 분할이 잘면 각 조각에서 $\gamma'$ 이 거의 상수이고, 선분의 길이와 $\int\vert\gamma'\vert$ 의 차의 합이 $0$ 으로 간다.

함수 $f$ 의 그래프 $\gamma(x)=(x,f(x))$ 이면 $\vert\gamma'\vert=\sqrt{1+f'^2}$ 이고 직관 절의 식이 나온다. 극좌표 $r=r(\theta)$ 로 주어진 곡선에서는 $\vert\gamma'\vert=\sqrt{r^2+r'^2}$ 이다.

## 매개변수에 무관함

$\varphi\colon\lbrack c,d\rbrack\to\lbrack a,b\rbrack$ 가 증가 전단사이면 $L(\gamma\circ\varphi)=L(\gamma)$ 다. 분할이 $\varphi$ 로 일대일 대응하고 꺾은선이 같기 때문이다. 길이는 곡선을 지나는 빠르기와 무관하고 지나간 점의 순서만으로 정해진다.

## 길이가 무한인 연속 곡선

$f(x)=x\sin(1/x)$, $f(0)=0$ 의 $\lbrack 0,1\rbrack$ 위 그래프는 연속이지만 길이가 무한이다. $x_k=1/((k+1/2)\pi)$ 에서 $\vert f(x_k)\vert=x_k$ 이고 이웃한 두 점의 부호가 반대이므로, 이 점들을 지나는 꺾은선의 길이는 $\sum_k x_k$ 이상이고 이 합은 조화급수처럼 발산한다. 곡선이 길이를 잴 수 있을 필요충분조건은 각 좌표함수가 [유계변동 함수](bounded-variation.md)라는 것이다.

# 활용

- [곡률](curvature.md)은 호길이 매개화한 곡선에서 단위접벡터가 도는 빠르기 $\vert\sigma''(s)\vert$ 로 정의된다.
- [측지선](geodesics.md)은 두 점을 잇는 곡선 가운데 길이를 국소적으로 최소로 하는 것이고, 길이 범함수의 변분에서 측지선 방정식이 나온다.
- [최단강하선 문제](brachistochrone.md)는 길이 요소 $ds=\sqrt{1+y'^2}\thinspace dx$ 를 속력으로 나눈 시간을 최소화한다.
- [Riemann 계량](riemannian-metrics.md)은 각 점의 접벡터에 길이를 주는 것이고, 곡선의 길이는 $\int\sqrt{g(\gamma',\gamma')}\thinspace dt$ 로 정의된다.
- [Green 정리](greens-theorem.md)의 선적분은 곡선을 호길이로 매개화하면 $\int F\cdot T\thinspace ds$ 로 쓰인다.

# 연관 문서

## 선수지식

- [미적분학의 기본 정리](fundamental-calculus.md)

## 더 알아보기

- [곡률](curvature.md)

#analysis #differential_geometry
