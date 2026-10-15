# 최단강하선 문제

# 개요

최단강하선 문제는 두 점을 잇는 곡선 가운데 중력만 받는 구슬이 가장 빨리 내려오는 것을 찾는 문제다. 답은 직선이 아니라 사이클로이드다.

낙하 시간을 곡선의 범함수로 쓰면 [변분법](calculus-of-variations.md)의 문제가 되고, Beltrami 항등식이 그 범함수의 Euler–Lagrange 방정식을 한 번 적분한다.

# 직관

점 $(0,0)$ 에서 점 $(1,1)$ 까지 구슬을 굴려 내린다. 둘째 좌표는 아래로 재고 중력가속도는 $g$ 다. 직선으로 잇는 길이 가장 짧지만, 그 길로 내려오는 시간이 가장 짧은지는 따로 따져야 한다.

직선을 따라가면 경사면 위의 등가속도 운동이다. 경로의 길이는 $\sqrt2$ 이고 도착점에서 속력은 $\sqrt{2g}$ 이므로 평균 속력이 $\sqrt{2g}/2$ 다. 걸리는 시간은 $2\sqrt2/\sqrt{2g}=2/\sqrt g$ 다.

이번에는 $(0,0)$ 에서 $(0.5,1)$ 까지 급하게 내려간 뒤 $(0.5,1)$ 에서 $(1,1)$ 까지 수평으로 가는 꺾인 길을 간다. 첫 구간의 길이는 $\sqrt{1.25}\approx1.118$ 이고 끝 속력이 $\sqrt{2g}$ 이므로 시간이 $2\times1.118/\sqrt{2g}$ 다. 둘째 구간은 속력 $\sqrt{2g}$ 로 길이 $0.5$ 를 가므로 시간이 $0.5/\sqrt{2g}$ 다. 합은 $2.736/\sqrt{2g}\approx1.934/\sqrt g$ 이고 직선보다 짧다.

길이는 늘었는데 시간이 줄었다. 초반에 더 많이 내려가 속력을 먼저 얻으면 뒤쪽을 빠르게 지나기 때문이다. 그러면 얼마나 처지게 할 것인지가 남는다. 높이 $y$ 에서 속력이 $\sqrt{2gy}$ 이므로 시간은 경로를 따라 $ds/\sqrt{2gy}$ 를 적분한 값이고, 이 값을 가장 작게 하는 곡선 $y$ 를 찾는 것이 문제다.

# 정의

곡선을 $y:\lbrack 0,a\rbrack\to\lbrack 0,\infty)$ 로 쓰고 $y(0)=0$, $y(a)=b$ 라 한다. 둘째 좌표는 아래로 잰다.

에너지 보존에서 높이 $y$ 에서의 속력이 $v=\sqrt{2gy}$ 이고 호의 길이가 $ds=\sqrt{1+y'^2}\thinspace dx$ 이므로, 낙하 시간은 다음 범함수다.

$$
T\lbrack y\rbrack=\int_0^a\sqrt{\frac{1+y'^2}{2gy}}\thinspace dx
$$

$T$ 를 가장 작게 하는 곡선을 **최단강하선**이라 한다.

# 성질

## 사이클로이드 해

피적분함수 $F(y,y')=\sqrt{(1+y'^2)/(2gy)}$ 는 $x$ 를 명시적으로 포함하지 않으므로 Beltrami 항등식을 쓴다.

$$
F-y'\frac{\partial F}{\partial y'}=\frac{1}{\sqrt{2gy}\sqrt{1+y'^2}}=C
$$

양변을 제곱하면 다음이 남는다.

$$
y(1+y'^2)=k,\qquad k=\frac{1}{2gC^2}
$$

**정리.** 이 방정식의 해는 사이클로이드다.[^1]

$$
x=r(\theta-\sin\theta),\qquad y=r(1-\cos\theta),\qquad k=2r
$$

확인은 대입이다. $dy/dx=\sin\theta/(1-\cos\theta)$ 이므로

$$
1+y'^2=\frac{(1-\cos\theta)^2+\sin^2\theta}{(1-\cos\theta)^2}=\frac{2-2\cos\theta}{(1-\cos\theta)^2}=\frac{2}{1-\cos\theta}
$$

이고, 따라서 $y(1+y'^2)=r(1-\cos\theta)\cdot 2/(1-\cos\theta)=2r$ 다. 끝점 $(a,b)$ 가 $r$ 과 $\theta$ 의 범위를 정한다.

사이클로이드는 반지름 $r$ 인 원이 직선 위를 구를 때 원 위의 한 점이 그리는 곡선이다. 매개변수 $\theta$ 는 구른 각이다.

## 등시성

**정리(Huygens).** 사이클로이드 위에서 어느 점에서 놓아도 최저점에 닿는 시간이 같고 그 값은 $\pi\sqrt{r/g}$ 다.[^2]

호의 길이를 매개변수로 쓰면 최저점으로부터의 거리에 비례하는 복원력이 나오고 운동이 단순조화진동이 된다. 주기가 $4\pi\sqrt{r/g}$ 이고 최저점까지가 그 사분의 일이다.

최단강하선과 등시곡선이 같은 곡선이므로, 시작점을 어디로 옮겨도 최단강하선의 모양이 바뀌지 않는다.

## 광학과의 대응

Johann Bernoulli 의 1697 년 풀이는 매질의 굴절로 문제를 바꾼 것이다.[^1] 높이에 따라 빛의 속력이 $\sqrt{2gy}$ 인 매질을 생각하면 Snell 법칙이 층마다 $\sin\alpha/v=\text{상수}$ 를 준다. $\alpha$ 가 곡선의 접선과 수직선이 이루는 각이면 $\sin\alpha=1/\sqrt{1+y'^2}$ 이므로 이 조건은 위의 Beltrami 항등식과 같은 식이다.

# 활용

- **변분법의 첫 문제.** Johann Bernoulli 가 1696 년에 이 문제를 공개하고 이듬해 Newton, Leibniz, l'Hôpital, Jacob Bernoulli 가 각자 풀었다. [변분법](calculus-of-variations.md)의 Euler–Lagrange 방정식과 Beltrami 항등식이 이 문제를 일반화하는 과정에서 세워졌다.
- **등시 진자.** Huygens 는 등시성을 진자 시계에 쓰려고 추의 줄이 사이클로이드 모양 틀을 따라 감기게 했다. 진폭이 커져도 주기가 변하지 않는 것이 목적이고, 원호 진자의 주기가 진폭에 따라 달라지는 것을 피한다.
- **구속조건이 붙은 변형.** 경로의 길이를 고정하거나 마찰을 넣으면 같은 범함수에 항이 더해진다. 길이를 고정한 문제는 변분법의 Lagrange 곱수로 다루는 형태다.

[^1]: H. Goldstine, *A History of the Calculus of Variations from the 17th through the 19th Century*, Springer, 1980, 1 장. Bernoulli 의 공개 문제와 1697 년의 다섯 풀이가 실려 있다.
[^2]: C. Huygens, *Horologium Oscillatorium*, Paris, 1673, 2 부. 사이클로이드의 등시성과 진자 시계의 설계가 그 내용이다.

# 연관 문서

## 선수지식

- [변분법](calculus-of-variations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization #differential_geometry
