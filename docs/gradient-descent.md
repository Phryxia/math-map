# 경사하강법

# 개요

경사하강법(gradient descent)은 미분가능한 목적함수를 기울기의 반대 방향으로 이동하며 최소화하는 1 차 반복법이다. 한 단계가 기울기 한 번 계산과 벡터 덧셈이므로 차원이 큰 문제에서도 쓴다.

수렴 속도는 목적함수의 곡률 조건이 정한다. 기울기가 $L$ -Lipschitz 인 볼록 함수에서는 함숫값 오차가 반복 횟수의 역수로 줄고, 강볼록성을 더하면 기하급수적으로 줄어든다. 확률적 변형인 SGD(stochastic gradient descent)가 기계학습 학습 알고리즘의 기본 형태다.

# 직관

미분가능한 $f$ 의 최솟값을 찾는 방법은 $\nabla f(x)=0$ 을 푸는 것이다. $f(x)=x^2-3x$ 이면 $2x-3=0$ 이라 $x=3/2$ 가 나온다. 그런데 $f(x)=x^2+\log(1+e^{x})$ 에서는 방정식이 다음과 같다.

$$
2x+\frac{e^{x}}{1+e^{x}}=0
$$

$x$ 를 한쪽으로 모으면 다른 쪽에 $e^{x}$ 가 남는다. 일차항과 지수항이 한 등식에 묶여 있어 $x$ 에 대해 풀리지 않는다.

식이 풀리지 않으니 한 점에서 출발해 $f$ 가 줄어드는 쪽으로 옮긴다. 단위벡터 $u$ 방향으로 $\delta$ 만큼 가면 $f(x+\delta u)\approx f(x)+\delta\thinspace\nabla f(x)^\top u$ 다. 오른쪽을 가장 작게 하는 $u$ 는 $-\nabla f(x)/\Vert\nabla f(x)\Vert$ 이므로 기울기의 반대쪽으로 간다.

$\delta$ 를 얼마로 할지는 이 근사가 답하지 않는다. 근사는 $\delta$ 가 작을 때만 맞고, 크게 잡으면 $f$ 가 오히려 는다. 근사의 오차를 통제하는 양은 기울기가 변하는 속도이고, $\delta$ 의 상한은 그 속도의 상한에서 나온다.

# 정의

$f$ 를 $\mathbb{R}^n$ 에서 정의된 미분가능 함수라 한다. 고정 학습률 $\eta\gt 0$ 에 대한 경사하강법은 다음 점화식이다.

$$
x_{k+1}=x_k-\eta\thinspace\nabla f(x_k),\qquad k=0,1,2,\dots
$$

정지 조건은 $\Vert\nabla f(x_k)\Vert$ 가 허용오차 아래로 내려가는 것이고, 그때 $x_k$ 는 근사 정류점이다.

$f$ 의 기울기가 $L$ -Lipschitz 인 것, 곧 $f$ 가 $L$ -smooth 인 것은 다음을 뜻한다.

$$
\left\lVert \nabla f(x)-\nabla f(y)\right\rVert\le L\left\lVert x-y\right\rVert\quad(\forall x,y)
$$

$f$ 가 $\mu$ 강볼록($\mu\gt 0$ )이라는 것은 $f(x)-\frac{\mu}{2}\Vert x\Vert^2$ 이 볼록하다는 뜻이다. 다음 부등식과 동치다.

$$
f(y)\thinspace \ge\thinspace f(x)+\nabla f(x)^\top (y-x)+\frac{\mu}{2}\left\lVert y-x\right\rVert^2\quad(\forall x,y)
$$

두 번 미분가능하면 두 조건은 Hessian 의 스펙트럼 조건 $\mu I\preceq\nabla^2f(x)\preceq LI$ 와 같다. 조건수를 $\kappa=L/\mu$ 로 정의하고 최솟값을 $f^\star$ , 최소점을 $x^\star$ 로 쓴다.

# 성질

## 하강 보조정리

$f$ 가 $L$ -smooth 이면 Taylor 잔차 항이 $L$ 로 통제된다.

$$
f(y)\le f(x)+\nabla f(x)^\top(y-x)+\frac{L}{2}\left\lVert y-x\right\rVert^2
$$

$y=x-\eta\nabla f(x)$ 를 넣으면 한 걸음의 개선량이 나온다.

$$
f(x_{k+1})\le f(x_k)-\eta\Bigl(1-\frac{L\eta}{2}\Bigr)\left\lVert \nabla f(x_k)\right\rVert^2
$$

따라서 $0\lt\eta\lt 2/L$ 이면 기울기가 $0$ 이 아닌 동안 함숫값이 엄격히 줄어들고, $\eta=1/L$ 에서 계수가 $1/(2L)$ 이다.

$$
f(x_{k+1})\le f(x_k)-\frac{1}{2L}\left\lVert \nabla f(x_k)\right\rVert^2
$$

## 비볼록 함수의 수렴

$f$ 가 $L$ -smooth 이고 아래로 유계이며 $\eta=1/L$ 이면, 위 부등식을 $k=0$ 부터 $K-1$ 까지 더해 망원합으로 정리하면 다음을 얻는다.

$$
\min_{0\le k\lt K}\left\lVert \nabla f(x_k)\right\rVert\thinspace \le\thinspace \sqrt{\frac{2L\bigl(f(x_0)-f^\star\bigr)}{K}}
$$

기울기 노름이 $K^{-1/2}$ 속도로 줄어든다. 전역 최소는 보장되지 않는다. 볼록성이 없으면 안장점 근방이나 국소 최소에 머문다.

## 볼록 함수의 $O(1/k)$ 수렴

$f$ 가 볼록이고 $L$ -smooth 이며 최소점 $x^\star$ 가 존재할 때 $\eta=1/L$ 이면 다음이 성립한다.[^1]

$$
f(x_K)-f^\star\thinspace \le\thinspace \frac{L\left\lVert x_0-x^\star\right\rVert^2}{2K}
$$

증명은 갱신식을 대입해 최소점까지의 거리 제곱을 전개하고, 볼록성의 1 차 부등식으로 교차항을 막고, 하강 보조정리로 기울기 노름 항을 함숫값 감소량으로 바꾸어 다음을 얻는 데서 출발한다.

$$
\left\lVert x_{k+1}-x^\star\right\rVert^2\le \left\lVert x_k-x^\star\right\rVert^2-\frac{2}{L}\bigl(f(x_{k+1})-f^\star\bigr)
$$

$k=0$ 부터 $K-1$ 까지 더하면 $f(x_k)-f^\star$ 들의 합이 초기 거리 제곱의 $L/2$ 배 이하다. 함숫값이 단조감소하므로 $K$ 개의 항이 모두 $f(x_K)-f^\star$ 이상이고 위 부등식이 따른다. $\varepsilon$ 근사해에 필요한 반복 수는 $\varepsilon^{-1}$ 규모다.

## 강볼록 함수의 선형 수렴

$f$ 가 $\mu$ 강볼록이고 $L$ -smooth 이면 강볼록성에서 Polyak–Łojasiewicz 부등식이 따른다.

$$
\left\lVert \nabla f(x)\right\rVert^2\thinspace \ge\thinspace 2\mu\bigl(f(x)-f^\star\bigr)
$$

이를 $\eta=1/L$ 의 하강 보조정리에 대입하면 한 걸음마다 오차가 일정 비율로 줄어든다.[^1][^2]

$$
f(x_{k+1})-f^\star\thinspace \le\thinspace \Bigl(1-\frac{\mu}{L}\Bigr)\bigl(f(x_k)-f^\star\bigr)
\thinspace\Longrightarrow\thinspace
f(x_k)-f^\star\le\Bigl(1-\frac{\mu}{L}\Bigr)^{k}\bigl(f(x_0)-f^\star\bigr)
$$

$\varepsilon$ 근사해에 필요한 반복 수는 $\kappa\log(1/\varepsilon)$ 규모다. 반복점 자체도 같은 비율로 수축하므로 [축약사상 고정점 정리](banach-fixed-point.md)와 같은 구조다. 학습률을 $\eta=2/(\mu+L)$ 로 잡으면 수축 계수가 $(L-\mu)/(L+\mu)$ 로 개선된다.[^1]

## 한계와 개선

- 강볼록이고 $L$ -smooth 인 부류에서 어떤 1 차 방법도 조건수의 제곱근보다 좋은 의존성을 갖지 못한다. [Nesterov 가속법](nesterov-acceleration.md)이 이 하한을 달성한다.
- $\eta\gt 2/L$ 이면 이차함수에서도 발산한다. 실제로는 backtracking line search 로 $\eta$ 를 적응적으로 정한다.
- 미분 불가능한 볼록 함수에서는 기울기 대신 subgradient 를 쓰고 수렴률이 $K^{-1/2}$ 로 떨어진다. 제약이 있으면 사영 경사법이나 [Lagrange 쌍대성](lagrange-duality.md)을 쓴다.
- 목적함수가 $N$ 개 항의 평균이면 한 걸음마다 무작위로 고른 항 하나나 작은 묶음의 기울기만 쓴다. 한 걸음의 비용이 $N$ 과 무관해지는 대신 기울기에 잡음이 섞이고, 고정 학습률에서는 최적점 주변의 잡음 구간까지만 내려간다. 이 변형이 [확률적 경사하강법](stochastic-gradient-descent.md)이다.

# 활용

## 이차함수에서의 수렴률

$$
f(x)=\frac{1}{2}\bigl(x_1^2+\gamma x_2^2\bigr),\qquad \gamma\gt 1
$$

여기서 $\mu=1$ , $L=\gamma$ 이고 $\eta=1/\gamma$ 이면 각 좌표가 독립으로 갱신된다.

$$
x_1^{(k)}=\Bigl(1-\frac{1}{\gamma}\Bigr)^{k} x_1^{(0)},\qquad x_2^{(k)}=0\quad(k\ge 1)
$$

곡률이 큰 좌표는 한 걸음에 끝나고 곡률이 작은 좌표가 속도를 결정하므로 수축 계수가 $1-1/\gamma=1-\mu/L$ 이 되어 위 정리와 일치한다. 학습률을 키워 $\eta\gt 1/\gamma$ 로 잡으면 $1-\eta\gamma$ 가 음수라 $x_2$ 의 부호가 걸음마다 바뀌고, 반복점이 골짜기 축을 가로질러 오간다.

## 학습과 대규모 볼록 최적화

선형회귀와 로지스틱회귀의 학습, 신경망의 역전파 학습, [선형계획법](linear-programming.md)으로 다루기 어려운 대규모 볼록 문제의 1 차 해법, 행렬 분해와 임베딩 학습에 쓰인다. 목적함수가 [볼록](convexity.md)이면 찾은 점이 전역 최소이고, 그렇지 않으면 초깃값, 학습률 일정, 정규화가 결과를 좌우한다. [최대가능도 추정](maximum-likelihood.md)처럼 확률모형의 목적함수를 최적화하는 문제에서도 기본 해법이다.

[^1]: R. Tibshirani, Gradient Descent (Convex Optimization 10-725 강의노트), Carnegie Mellon University. https://www.stat.cmu.edu/~ryantibs/convexopt/lectures/grad-descent.pdf
[^2]: M. Schmidt, Rates of Convergence: Linear Convergence of Gradient Descent (CPSC 540 강의노트), UBC. https://www.cs.ubc.ca/~schmidtm/Courses/540-W19/L5.pdf

# 연관 문서

## 선수지식

- [미분](derivative.md)
- [볼록성](convexity.md)
- [기계학습 개관](machine-learning-overview.md)

## 더 알아보기

- [Nesterov 가속법](nesterov-acceleration.md)
- [근접 경사법](proximal-gradient-method.md)
- [확률적 경사하강법](stochastic-gradient-descent.md)
- [변분 오토인코더](variational-autoencoder.md)

#optimization #machine_learning #statistics
