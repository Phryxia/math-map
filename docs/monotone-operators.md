# 단조 작용소

# 개요

**단조 작용소(monotone operator)** 는 실수 위의 증가함수를 여러 변수로 옮긴 사상이다. 함수 $\vert x\vert$ 의 기울기는 $0$ 에서 $-1$ 에서 $1$ 로 뛰고, 이 점프를 세로 선분으로 메운 그래프는 끊긴 데 없이 오른쪽 위로 올라간다. 최소점을 찾는 일은 이 그래프가 높이 $0$ 을 지나는 자리를 찾는 일이고, 단조 작용소의 이론은 같은 일을 기울기가 아닌 사상, 예를 들어 안장점 문제의 회전 사상에도 하게 해 준다.

# 직관

$g(x)=\vert x\vert$ 의 [부분미분](subdifferential.md)은 $x\lt 0$ 에서 $\lbrace -1\rbrace$, $x\gt 0$ 에서 $\lbrace 1\rbrace$, $x=0$ 에서 구간 $\lbrack -1,1\rbrack$ 이다. 이 값들을 평면에 찍으면 높이 $-1$ 의 반직선, 원점 위의 세로 선분, 높이 $1$ 의 반직선이 이어진 그래프가 된다. 그래프 위의 두 점 $(x,u)$, $(y,v)$ 는 $x\lt y$ 이면 $u\le v$ 이다.

[근접점 방법](proximal-point-method.md)의 한 걸음은 $x+\eta u=z$ 인 그래프 위의 점 $(x,u)$ 를 찾는 일이다. $\eta=1$ 이면 그래프를 오른쪽으로 기울여 $x+u$ 를 높이로 하는 새 그래프를 만들고, 이 그래프가 높이 $z$ 를 지나는 자리를 찾는다. 새 그래프는 끊긴 데 없이 올라가므로 어떤 $z$ 에서도 한 번만 지난다.

$x=0$ 에서 세로 선분 대신 점 $u=0$ 하나만 두면 사정이 달라진다. $x+u$ 는 $x\lt 0$ 에서 $-1$ 보다 작고, $x=0$ 에서 $0$, $x\gt 0$ 에서 $1$ 보다 크다. 높이 $z=0.5$ 를 지나는 자리가 없어 그 걸음을 밟을 수 없다. 그래프에 빈 데가 없을 때, 곧 더 메울 점이 없을 때를 극대라 한다.

# 정의

## 단조성과 극대성

$H$ 가 실 [Hilbert 공간](hilbert-spaces.md)이라 하자. 각 점 $x$ 에 부분집합 $T(x)\subset H$ 를 주는 사상 $T$ 를 집합값 작용소(set-valued operator)라 하고, $\mathrm{gra}\thinspace T=\lbrace(x,u)\mid u\in T(x)\rbrace$ 를 그 그래프라 한다. $T$ 가

$$
\langle u-v,\thinspace x-y\rangle\ge 0\qquad(u\in T(x),\quad v\in T(y))
$$

를 만족하면 단조 작용소라 한다. 그래프가 다른 단조 작용소의 그래프에 진부분집합으로 들어가지 않으면 **극대 단조(maximal monotone)** 라 한다. $H=\mathbb R$ 이면 단조성은 그래프가 직관 절처럼 오른쪽 위로만 가는 것이다. 직관 절의 부분미분은 극대 단조이고, $0$ 에서 값 $0$ 만 남긴 작용소는 단조이지만 극대가 아니다.

## 레졸벤트

$\eta\gt 0$ 에 대해 $J\_{\eta T}=(I+\eta T)^{-1}$ 를 $T$ 의 **레졸벤트(resolvent)** 라 한다. $x\in J\_{\eta T}(z)$ 는 $z-x\in\eta T(x)$ 와 같다. $T=\partial g$ 이면 이 조건은 근접점 방법의 한 걸음의 조건이므로 $J\_{\eta\partial g}=\mathrm{prox}\_{\eta g}$ 다. $T=\partial\vert\cdot\vert$, $\eta=1$ 이면 $J_T(0.5)=0$, $J_T(2.5)=1.5$ 다.

## 예

- 볼록 함수 $g$ 의 부분미분 $\partial g$. 부분기울기 부등식 둘을 더하면 단조성이 나온다.
- 닫힌 볼록집합 $C$ 의 법선뿔(normal cone) $N_C(x)=\lbrace u\mid\langle u,c-x\rangle\le 0\quad(c\in C)\rbrace$. 지시함수의 부분미분이고, 레졸벤트는 $C$ 로의 사영이다.
- [선형사상](linear-maps.md) $A$ 가 모든 $x$ 에서 $\langle Ax,x\rangle\ge 0$ 이면 단조다. $\mathbb R^2$ 의 $T(x,y)=(y,-x)$ 는 $\langle T(x,y),(x,y)\rangle=0$ 이므로 단조이고, 행렬이 대칭이 아니므로 어떤 함수의 기울기도 아니다.
- 안장점 연산자. $L(x,y)$ 가 $x$ 에 대해 볼록이고 $y$ 에 대해 오목이면 $(x,y)\mapsto(\partial_xL,\thinspace-\partial_yL)$ 이 단조다. $L(x,y)=xy$ 이면 위의 $T(x,y)=(y,-x)$ 이고, 영점 $(0,0)$ 이 안장점이다.

# 성질

## Minty 정리

정리(Minty 정리, Minty theorem). 단조 작용소 $T$ 가 극대인 것은 $I+T$ 의 치역이 $H$ 전체인 것과 동치다.[^1]

직관 절에서 메운 그래프는 모든 높이를 지났고, 메우지 않은 그래프는 $z=0.5$ 를 지나지 못했다. Minty 정리는 이 관찰이 일반 Hilbert 공간에서 성립한다는 정리다.

## 레졸벤트의 단단한 비확장성

정리. $T$ 가 극대 단조이면 $J\_{\eta T}$ 는 $H$ 전체에서 정의된 한 값 사상이고 다음을 만족한다.

$$
\Vert J\_{\eta T}z-J\_{\eta T}w\Vert^2\le\langle J\_{\eta T}z-J\_{\eta T}w,\thinspace z-w\rangle
$$

증명의 요지. 정의역이 전체인 것은 $\eta T$ 에 Minty 정리를 쓴 결과다. $x=J\_{\eta T}z$, $y=J\_{\eta T}w$ 이면 $(z-x)/\eta\in T(x)$, $(w-y)/\eta\in T(y)$ 이므로 단조성에서 $\langle(z-w)-(x-y),\thinspace x-y\rangle\ge 0$ 이다. 이것이 위 부등식이고, $z=w$ 이면 $x=y$ 이므로 한 값이다.

$J\_{\eta T}z=z$ 인 것은 $0\in T(z)$ 와 동치이므로, 레졸벤트의 고정점이 $T$ 의 영점이다. 영점 집합은 닫힌 볼록집합이다.

## 부분미분의 극대성

정리(Rockafellar). $g$ 가 고유하고 볼록이고 하반연속이면 $\partial g$ 는 극대 단조다.[^2]

$\mathbb R$ 에서 거꾸로도 성립한다. 극대 단조 작용소는 어떤 볼록 함수의 부분미분이고, 그 함수는 그래프 아래 넓이를 적분해서 얻는다. $\mathbb R^2$ 에서는 거꾸로가 성립하지 않고, 회전 $T(x,y)=(y,-x)$ 가 반례다.

## 합의 극대성

정리(Rockafellar). $A$, $B$ 가 극대 단조이고 $A$ 의 정의역과 $B$ 의 정의역의 내부가 만나면 $A+B$ 는 극대 단조다.[^3]

이 조건이 없으면 합이 극대가 아닐 수 있다. $\mathbb R^2$ 의 두 닫힌 원판이 한 점에서만 접하면 두 법선뿔의 합은 그 점에서 접선 방향을 잃고, 지시함수의 합의 부분미분보다 작다.

## 앞걸음과 회전

회전 $T(x,y)=(y,-x)$ 에서 앞걸음 $z\mapsto z-\eta Tz$ 는 행렬 $\begin{pmatrix}1&-\eta\cr\eta&1\end{pmatrix}$ 이고 노름을 $\sqrt{1+\eta^2}$ 배 한다. 모든 $\eta\gt 0$ 에서 원점에서 멀어진다. 레졸벤트 $J\_{\eta T}$ 는 노름을 $1/\sqrt{1+\eta^2}$ 배 하므로 근접점 방법은 원점으로 수렴한다. 회전에서는 앞걸음만으로 영점에 닿지 않는다.

# 활용

- 근접점 방법의 확장. 극대 단조 $T$ 의 영점을 $x\_{k+1}=J\_{\eta T}x_k$ 로 찾는다. 레졸벤트의 단단한 비확장성에서 반복점이 영점으로 약수렴한다는 것을 Rockafellar 가 증명했다.[^4]
- [Douglas–Rachford 분할](douglas-rachford-splitting.md). $0\in Ax+Bx$ 를 $A$ 와 $B$ 의 레졸벤트만으로 푸는 반복이고, Lions 와 Mercier 가 극대 단조 작용소의 합에 대해 수렴을 증명했다.[^5] 두 볼록 함수의 합을 최소화하는 문서의 반복은 $A=\partial f$, $B=\partial g$ 인 경우다.
- 변분 부등식과 안장점. 볼록–오목 함수의 안장점과 [Lions–Stampacchia 정리](lions-stampacchia.md)의 변분 부등식은 단조 작용소에 법선뿔을 더한 작용소의 영점이다. 회전처럼 앞걸음이 발산하는 경우에 Korpelevich 의 [엑스트라그레이디언트 방법](extragradient-method.md)은 한 걸음에 앞걸음을 두 번 써서 수렴을 얻는다.[^6]
- 비선형 편미분방정식. 반사적 [Banach 공간](banach-spaces.md)에서 쌍대공간으로 가는 강압적이고 연속인 단조 작용소는 전사다. 이것이 [Browder–Minty 정리](browder-minty.md)이고, $p$-Laplace 방정식 $-\mathrm{div}(\vert\nabla u\vert^{p-2}\nabla u)=f$ 의 약해의 존재가 이 정리에서 나온다.

[^1]: George J. Minty, "Monotone (nonlinear) operators in Hilbert space", *Duke Mathematical Journal* **29** (1962), 341–346.
[^2]: R. T. Rockafellar, "On the maximal monotonicity of subdifferential mappings", *Pacific Journal of Mathematics* **33** (1970), 209–216.
[^3]: R. T. Rockafellar, "On the maximality of sums of nonlinear monotone operators", *Transactions of the American Mathematical Society* **149** (1970), 75–88.
[^4]: R. T. Rockafellar, "Monotone operators and the proximal point algorithm", *SIAM Journal on Control and Optimization* **14** (1976), 877–898.
[^5]: P.-L. Lions and B. Mercier, "Splitting algorithms for the sum of two nonlinear operators", *SIAM Journal on Numerical Analysis* **16** (1979), 964–979.
[^6]: G. M. Korpelevich, "The extragradient method for finding saddle points and other problems", *Ekonomika i Matematicheskie Metody* **12** (1976), 747–756. 단조 작용소 일반의 정리는 H. H. Bauschke and P. L. Combettes, *Convex Analysis and Monotone Operator Theory in Hilbert Spaces*, 2판, Springer, 2017, 20–26 장에 있다.

# 연관 문서

## 선수지식

- [부분미분](subdifferential.md)
- [Hilbert 공간](hilbert-spaces.md)

## 더 알아보기

- [Browder–Minty 정리](browder-minty.md)
- [엑스트라그레이디언트 방법](extragradient-method.md)

#functional_analysis #optimization #analysis
