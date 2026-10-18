# 부분미분

# 개요

**부분미분(subdifferential)** 은 미분할 수 없는 볼록 함수에서 기울기를 대신하는 집합이다. 한 점에서 그래프를 아래로 받치는 아핀 함수의 기울기를 전부 모은 것이고, [볼록성](convexity.md)의 접선 부등식을 미분가능성 없이 쓴 것이다.

집합이 $0$ 을 포함하는 것이 그 점에서 최솟값을 갖는 조건이다. 꺾인 자리에서 최소점을 찾는 방법이 이 조건에서 나오고, 절댓값 벌점을 붙인 문제의 해가 정확히 $0$ 이 되는 까닭도 같다.

# 직관

$f(x)=\frac{1}{2}(x-1)^2+\vert x\vert$ 를 최소화한다. 도함수가 $0$ 인 점을 찾는 방법을 쓰려면 절댓값을 두 조각으로 나눠야 한다.

$x\gt 0$ 에서 $f(x)=\frac{1}{2}(x-1)^2+x$ 이므로 $f'(x)=x$ 이고, $f'(x)=0$ 인 점은 $x=0$ 이다. 이 점은 $x\gt 0$ 에 들어가지 않는다. $x\lt 0$ 에서 $f(x)=\frac{1}{2}(x-1)^2-x$ 이므로 $f'(x)=x-2$ 이고, $f'(x)=0$ 인 점은 $x=2$ 다. 이 점도 $x\lt 0$ 에 들어가지 않는다. 두 조각 어디에도 도함수가 $0$ 인 점이 없다.

그래도 최소점은 있다. $x\gt 0$ 에서 $f'(x)=x\gt 0$ 이라 값이 오르고 $x\lt 0$ 에서 $f'(x)=x-2\lt 0$ 이라 값이 내리므로, 가장 낮은 점은 두 조각이 만나는 $x=0$ 이고 $f(0)=\frac{1}{2}$ 다. 절댓값이 꺾이는 그 점에 최소점이 있어 도함수로는 찾지 못했다.

$x=0$ 에서 도함수 하나를 구하는 대신, 그 점에서 그래프에 닿고 그래프 아래에 놓이는 직선의 기울기를 모은다. 기울기 $p$ 인 직선이 그런 직선인 것은 모든 $x$ 에서 $f(x)\ge\frac{1}{2}+px$ 인 것, 곧 $\frac{1}{2}x^2-x+\vert x\vert\ge px$ 인 것이다. $x\gt 0$ 에서 이 부등식은 $\frac{1}{2}x\ge p$ 이므로 $p\le 0$ 이고, $x\lt 0$ 에서는 양변을 음수로 나눠 $\frac{1}{2}x-2\le p$ 이므로 $p\ge -2$ 다. 모은 기울기는 $\lbrack -2,0\rbrack$ 이다.

이 구간은 $0$ 을 포함한다. 기울기 $0$ 인 수평선이 $x=0$ 에서 그래프 아래에 놓이므로 모든 $x$ 에서 $f(x)\ge f(0)$ 이고, 그래서 $x=0$ 이 최소점이다. 한 점에서 모은 기울기의 집합을 그 점에서의 부분미분이라 한다.

# 정의

## 부분미분

$f:\mathbb{R}^n\to\mathbb{R}\cup\lbrace+\infty\rbrace$ 가 볼록이고 $f(x)$ 가 유한할 때, $x$ 에서의 **부분미분** $\partial f(x)$ 는 다음을 만족하는 $p$ 전부의 집합이다.

$$
\partial f(x)=\lbrace p\in\mathbb{R}^n:f(z)\ge f(x)+\langle p,\thinspace z-x\rangle\rbrace
$$

부등식은 모든 $z\in\mathbb{R}^n$ 에서 요구한다. 원소 $p$ 를 $x$ 에서의 **부분기울기**(subgradient)라 한다.

$f(x)=\vert x\vert$ 는 $\partial f(0)=\lbrack -1,1\rbrack$ 이고 $x\ne 0$ 에서 $\partial f(x)=\lbrace\mathrm{sign}(x)\rbrace$ 다. $f(x)=\Vert x\Vert\_1$ 은 좌표마다 이 집합의 곱이다.

## 유효 영역

$f$ 가 $+\infty$ 를 값으로 가질 수 있게 둔 것은 제약을 함수에 넣기 위한 것이다. 볼록집합 $C$ 의 **지시함수**는 $C$ 안에서 $0$ , 밖에서 $+\infty$ 인 함수이고, 이 함수의 최소화가 $C$ 위의 제약 문제다. $f$ 의 **유효 영역**은

$$
\mathrm{dom}\thinspace f=\lbrace x\in\mathbb{R}^n:f(x)\lt+\infty\rbrace
$$

이고 볼록집합이다. $\partial f(x)$ 는 $x\notin\mathrm{dom}\thinspace f$ 에서 공집합이고 $\mathrm{dom}\thinspace f$ 의 경계점에서도 공집합일 수 있다. $f(x)=-\sqrt{x}$ 를 $x\ge 0$ 에서 보면 $\partial f(0)$ 이 공집합이다.

## 방향도함수

$d\in\mathbb{R}^n$ 방향의 **방향도함수**는 다음 극한이다.

$$
f'(x;d)=\lim_{t\to 0^+}\frac{f(x+td)-f(x)}{t}
$$

볼록 함수에서 차분몫 $(f(x+td)-f(x))/t$ 는 $t$ 에 대해 증가하므로 극한이 항상 존재한다. $x\in\mathrm{dom}\thinspace f$ 의 내부에서는 유한하다.

# 성질

## 존재와 모양

정리. $x$ 가 $\mathrm{dom}\thinspace f$ 의 내부에 있으면 $\partial f(x)$ 는 공집합이 아닌 볼록 콤팩트 집합이다[^1].

증명의 요지. 볼록성은 정의 부등식이 $p$ 에 대해 선형이므로 따라온다. 공집합이 아닌 것은 에피그래프에 받침 초평면을 긋는 것이다. $\mathrm{epi}\thinspace f$ 는 볼록집합이고 $(x,f(x))$ 는 그 경계점이므로 분리초평면 정리로 받침 초평면이 있다. $x$ 가 내부점이면 그 초평면이 수직일 수 없으므로 $s$ 축 계수로 나눠 $p$ 를 얻는다. 유계인 것은 방향마다 $\langle p,d\rangle\le f'(x;d)$ 이고 오른쪽이 유한하기 때문이다.

## 미분가능한 점

정리. $f$ 가 $x$ 에서 미분가능하면 $\partial f(x)=\lbrace\nabla f(x)\rbrace$ 다. 거꾸로 $\partial f(x)$ 가 한 점이면 $f$ 는 $x$ 에서 미분가능하다.

증명의 요지. 미분가능하면 접선 부등식이 $\nabla f(x)\in\partial f(x)$ 를 주고, 다른 $p$ 가 있으면 $d=p-\nabla f(x)$ 방향으로 정의 부등식과 일차 전개가 어긋난다. 역방향은 방향도함수가 $d$ 에 대해 선형이 되는 것을 아래 지지함수 표현으로 보인 뒤 선형 범함수를 기울기로 읽는 것이다.

## 최적성 조건

정리. $x^\star$ 가 $f$ 의 전역 최소점인 것과 $0\in\partial f(x^\star)$ 인 것은 동치다.

증명. $0\in\partial f(x^\star)$ 는 모든 $z$ 에서 $f(z)\ge f(x^\star)+\langle 0,\thinspace z-x^\star\rangle=f(x^\star)$ 라는 뜻이고, 이것이 전역 최소의 정의다. 미분가능한 경우의 $\nabla f(x^\star)=0$ 을 그대로 거둔다.

## 단조성

정리. $p\in\partial f(x)$ 이고 $q\in\partial f(y)$ 이면 $\langle p-q,\thinspace x-y\rangle\ge 0$ 이다.

증명. 정의 부등식을 $f(y)\ge f(x)+\langle p,\thinspace y-x\rangle$ 와 $f(x)\ge f(y)+\langle q,\thinspace x-y\rangle$ 로 두 번 쓰고 더하면 $0\ge\langle p-q,\thinspace y-x\rangle$ 이다. 일변수에서는 부분미분이 증가하는 집합값 사상이라는 뜻이고, 미분가능한 경우의 $f''\ge 0$ 에 대응한다.

## 합 규칙

볼록집합의 **상대내부**는 그 집합을 포함하는 가장 작은 아핀 공간 안에서 잡은 내부다. $\mathbb{R}^2$ 의 선분은 내부가 공집합이지만 상대내부는 양 끝점을 뺀 선분이다.

정리. $\partial f(x)+\partial g(x)\subseteq\partial(f+g)(x)$ 는 항상 성립하고, $\mathrm{dom}\thinspace f$ 의 상대내부와 $\mathrm{dom}\thinspace g$ 의 상대내부가 만나면 등호가 성립한다[^2].

증명의 요지. 포함은 두 정의 부등식을 더하는 것이다. 등호에는 Fenchel 쌍대성을 쓴다. 상대내부 조건이 쌍대 문제의 최적값 차이를 $0$ 으로 만들고 그 최적해가 합의 부분기울기를 두 조각으로 쪼갠다.

조건이 없으면 등호가 깨진다. $f(x)=-\sqrt{x}$ 를 $x\ge 0$ 에서 보고 $x\lt 0$ 에서 $+\infty$ 로 두고, $g$ 를 $x\le 0$ 의 지시함수로 둔다. 두 유효 영역의 상대내부는 $x\gt 0$ 과 $x\lt 0$ 이라 만나지 않는다. $f+g$ 는 $x=0$ 에서만 유한하고 값이 $0$ 이므로 $\partial(f+g)(0)=\mathbb{R}$ 이지만, $\partial f(0)$ 이 공집합이라 왼쪽은 공집합이다.

## 지지함수 표현

정리. $x$ 가 $\mathrm{dom}\thinspace f$ 의 내부에 있으면 모든 $d$ 에서 다음이 성립한다.

$$
f'(x;d)=\max_{p\in\partial f(x)}\langle p,\thinspace d\rangle
$$

증명의 요지. $\le$ 는 정의 부등식에 $z=x+td$ 를 넣고 $t$ 로 나누는 것이다. $\ge$ 는 $d\mapsto f'(x;d)$ 가 양으로 동차인 볼록 함수이므로 그 그래프에 받침 초평면을 긋고 그 기울기가 $\partial f(x)$ 에 들어감을 확인하는 것이다. 부분미분은 방향도함수를 지지함수로 갖는 볼록체이고, 두 대상이 서로를 결정한다.

## 볼록 공액과의 역관계

정리. $p\in\partial f(x)$ 인 것과 $f(x)+f^\ast(p)=\langle p,\thinspace x\rangle$ 인 것은 동치다. $f$ 가 닫힌 볼록 함수이면 $p\in\partial f(x)$ 와 $x\in\partial f^\ast(p)$ 도 동치다.

증명의 요지. [볼록 공액](convex-conjugate.md)의 정의 $f^\ast(p)=\sup_z(\langle p,\thinspace z\rangle-f(z))$ 에서 상한이 $z=x$ 에서 달성되는 것이 정의 부등식과 같은 말이다. 둘째 문장은 $f^{\ast\ast}=f$ 를 첫 문장에 넣은 것이다. 부분미분과 그 역사상이 공액으로 바뀐다.

# 활용

- 근접 연산자의 특징. $u=\mathrm{prox}\_{\eta g}(z)$ 인 것과 $(z-u)/\eta\in\partial g(u)$ 인 것이 동치이고, [근접 경사법](proximal-gradient-method.md)의 비확장성과 고정점 정리가 이 동치에서 나온다.
- 절댓값 벌점의 희소성. $\frac{1}{2}(x-z)^2+\lambda\vert x\vert$ 의 최적성 조건은 $x=0$ 에서 $z\in\lbrack -\lambda,\lambda\rbrack$ 이다. 구간 하나가 통째로 해를 $0$ 으로 만들고, 그래서 라쏘 해의 좌표 여럿이 정확히 $0$ 이 된다.
- 힌지 손실의 최소화. [지지벡터기계](support-vector-machine.md)의 연성 마진 문제는 $\max(0,1-y\langle w,\thinspace x\rangle)$ 의 합이라 분류 경계 위의 표본에서 미분이 없고, 그 점에서 부분기울기를 골라 걸음을 정한다.
- 제약 문제의 최적성. 지시함수의 부분미분이 법원뿔이므로 $0\in\partial f(x)+N\_C(x)$ 가 $C$ 위 최소화의 조건이 되고, [Lagrange 쌍대성](lagrange-duality.md)의 상보성 조건을 이 꼴로 쓴다.
- 비볼록 Lipschitz 함수로의 확장. [Clarke 준미분](clarke-subdifferential.md)은 미분가능한 점에서의 기울기 극한들의 볼록껍질이고, 그런 점이 거의 어디서나 있다는 것이 [Rademacher 정리](rademacher-theorem.md)다.

[^1]: R. T. Rockafellar, *Convex Analysis*, Princeton University Press, 1970, Theorem 23.4.
[^2]: R. T. Rockafellar, *Convex Analysis*, Princeton University Press, 1970, Theorem 23.8.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)

## 더 알아보기

- [Clarke 준미분](clarke-subdifferential.md)
- [근접 경사법](proximal-gradient-method.md)

#optimization #analysis #machine_learning
