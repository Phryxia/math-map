# 근접 경사법

# 개요

근접 경사법은 미분가능한 볼록 함수와 미분 불가능한 볼록 함수의 합을 최소화하는 1 차 방법이다. 미분가능한 항에는 [경사하강법](gradient-descent.md)의 걸음을 밟고, 나머지 항은 근접 연산자로 한 걸음에 정확히 처리한다. 근접 연산자를 닫힌 식으로 계산할 수 있는 항에서는 걸음 비용이 경사하강법과 같고 수렴률도 같은 $O(1/k)$ 다.

# 직관

$\frac{1}{2}\Vert Ax-b\Vert^2+\lambda\Vert x\Vert\_1$ 을 최소화한다. 뒤 항의 한 좌표 $\vert x_j\vert$ 는 $x_j\gt 0$ 에서 미분이 $1$ , $x_j\lt 0$ 에서 $-1$ 이고 $x_j=0$ 에서는 없다. 이 문제를 푸는 목적이 여러 좌표가 정확히 $0$ 인 해를 얻는 것이므로, 기울기가 없는 자리가 바로 찾으려는 자리다.

그래서 두 항을 따로 다룬다. 앞 항 $f$ 는 현재 점에서 접평면과 이차항으로 바꿔 쓰고 뒤 항 $g$ 는 건드리지 않은 채 그 합을 최소화한다.

$$
x_{k+1}=\mathop{\mathrm{arg\thinspace min}}\_{x}\Bigl(f(x_k)+\nabla f(x_k)^\top(x-x_k)+\frac{1}{2\eta}\Vert x-x_k\Vert^2+g(x)\Bigr)
$$

$x$ 에 의존하지 않는 항을 버리고 제곱을 묶으면 괄호 안이 $\frac{1}{2\eta}\Vert x-z_k\Vert^2+g(x)$ 이고 $z_k=x_k-\eta\nabla f(x_k)$ 다. 경사 걸음을 먼저 밟아 $z_k$ 로 간 다음, 그 점에서 멀어지는 값을 물면서 $g$ 를 줄이는 것이 한 걸음이다.

$g(x)=\lambda\Vert x\Vert\_1$ 이면 이 최소화가 좌표마다 갈라지고 한 좌표의 문제는 $\frac{1}{2\eta}(x-z)^2+\lambda\vert x\vert$ 다. $z\gt\eta\lambda$ 이면 최소점이 $z-\eta\lambda$ , $z\lt-\eta\lambda$ 이면 $z+\eta\lambda$ , 그 사이이면 $0$ 이다. 미분이 없는 점 $x=0$ 이 최소점으로 나오는 구간이 생기고, 그 좌표가 정확히 $0$ 이 된다.

# 정의

$F=f+g$ 를 최소화한다. $f$ 는 미분가능한 볼록 함수이고 $\nabla f$ 가 $L$ -Lipschitz, $g$ 는 볼록이고 하반연속이며 어딘가에서 유한한 값을 갖는다. 최솟값을 $F^\star$ , 최소점을 $x^\star$ 로 쓴다.

## 부분미분

볼록 함수 $g$ 의 점 $u$ 에서의 **부분미분** $\partial g(u)$ 는 다음을 만족하는 벡터 $p$ 전부의 집합이다.

$$
g(x)\ge g(u)+\langle p,\thinspace x-u\rangle\qquad(\forall x)
$$

$g$ 가 $u$ 에서 미분가능하면 $\partial g(u)=\lbrace\nabla g(u)\rbrace$ 다. $g$ 가 $u$ 에서 최솟값을 가지는 것과 $0\in\partial g(u)$ 인 것이 동치다. $g(x)=\vert x\vert$ 는 $u=0$ 에서 $\partial g(0)=\lbrack -1,1\rbrack$ 이다.

## 근접 연산자

$$
\mathrm{prox}\_{\eta g}(z)=\mathop{\mathrm{arg\thinspace min}}\_{x}\Bigl(g(x)+\frac{1}{2\eta}\Vert x-z\Vert^2\Bigr)
$$

이 사상을 $g$ 의 **근접 연산자**(proximal operator) 라 한다. 괄호 안이 $1/\eta$ 강볼록이므로 최소점이 하나뿐이고 연산자가 잘 정의된다. $g$ 가 $C$ 안에서 $0$ 이고 밖에서 $+\infty$ 인 함수, 곧 볼록집합 $C$ 의 지시함수이면 $\mathrm{prox}\_{\eta g}$ 는 $C$ 로의 사영이다.

## 근접 경사 반복

$$
x_{k+1}=\mathrm{prox}\_{\eta g}\bigl(x_k-\eta\thinspace\nabla f(x_k)\bigr),\qquad 0\lt \eta\le 1/L
$$

이 반복을 **근접 경사법**이라 한다. $g=0$ 이면 근접 연산자가 항등사상이라 경사하강법이 된다.

## 연성 문턱

$g=\lambda\Vert\cdot\Vert\_1$ 의 근접 연산자는 좌표마다 다음과 같다.

$$
\bigl(\mathrm{prox}\_{\eta g}(z)\bigr)\_j=\mathrm{sign}(z_j)\thinspace\max\bigl(\vert z_j\vert-\eta\lambda,\thinspace 0\bigr)
$$

이 사상을 **연성 문턱**(soft thresholding) 이라 하고, 이 $g$ 에 대한 근접 경사법을 ISTA(iterative shrinkage-thresholding algorithm) 라 한다.

# 성질

## 부분미분으로 쓴 특징

$u=\mathrm{prox}\_{\eta g}(z)$ 인 것과 다음이 동치다.

$$
\frac{z-u}{\eta}\in\partial g(u)
$$

근접 연산자의 정의식에 최적성 조건 $0\in\partial g(u)+(u-z)/\eta$ 를 쓴 것이다. 아래 두 정리가 이 동치를 쓴다.

## 비확장성

정리. 모든 $z,w$ 에 대해 $\Vert\mathrm{prox}\_{\eta g}(z)-\mathrm{prox}\_{\eta g}(w)\Vert\le\Vert z-w\Vert$ 다[^1].

증명의 요지. $u=\mathrm{prox}\_{\eta g}(z)$ , $v=\mathrm{prox}\_{\eta g}(w)$ 로 두면 $(z-u)/\eta\in\partial g(u)$ 이고 $(w-v)/\eta\in\partial g(v)$ 다. 부분미분의 정의 부등식을 두 점에서 쓰고 더하면 $\langle p-q,\thinspace u-v\rangle\ge 0$ 이 모든 $p\in\partial g(u)$ , $q\in\partial g(v)$ 에서 성립하므로 $\langle (z-u)-(w-v),\thinspace u-v\rangle\ge 0$ 이다. 정리하면 $\Vert u-v\Vert^2\le\langle z-w,\thinspace u-v\rangle$ 이고 Cauchy–Schwarz 부등식으로 결론이 나온다.

## 고정점과 최적성

정리. $x$ 가 $F$ 의 최소점인 것과 $x=\mathrm{prox}\_{\eta g}(x-\eta\nabla f(x))$ 인 것이 동치다.

증명의 요지. 오른쪽에 위 동치를 적용하면 $-\nabla f(x)\in\partial g(x)$ 이고, 이것이 $0\in\nabla f(x)+\partial g(x)$ , 곧 $F$ 의 최적성 조건이다. 반복의 고정점이 최소점이라는 뜻이다.

## 볼록 함수의 $O(1/k)$ 수렴

정리. $\eta=1/L$ 이면 다음이 성립한다[^2].

$$
F(x_k)-F^\star\le\frac{L\Vert x_0-x^\star\Vert^2}{2k}
$$

증명의 요지. 하강 보조정리를 $f$ 에, 근접 걸음의 최적성 조건을 $g$ 에 쓰면 한 걸음이 모든 $x$ 에서 다음을 만족한다.

$$
F(x_{k+1})\le F(x)+\frac{L}{2}\Vert x-x_k\Vert^2-\frac{L}{2}\Vert x-x_{k+1}\Vert^2
$$

$x=x^\star$ 를 넣고 $k=0$ 부터 더하면 거리 항이 망원합으로 사라진다. 왼쪽은 $F(x_k)$ 가 단조감소하므로 $k\bigl(F(x_k)-F^\star\bigr)$ 로 아래에서 묶인다.

## 가속 변형

경사 걸음 대신 직전 변위를 더한 점에서 기울기를 재면 수렴률이 $O(1/k^2)$ 로 올라간다. 이것이 FISTA(fast iterative shrinkage-thresholding algorithm) 이고, [Nesterov 가속법](nesterov-acceleration.md)의 계수 $t_k$ 를 그대로 쓴다[^2].

# 활용

## $\ell^1$ 정칙화 회귀

$f(x)=\frac{1}{2}\Vert Ax-b\Vert^2$ , $g(x)=\lambda\Vert x\Vert\_1$ 로 두면 한 걸음이 행렬 곱 두 번과 좌표별 연성 문턱이다. 정칙화 계수 $\lambda$ 를 키우면 문턱이 넓어져 $0$ 이 되는 좌표가 늘어난다.

## 제약이 있는 매끄러운 최소화

$g$ 를 볼록집합 $C$ 의 지시함수로 두면 근접 걸음이 $C$ 로의 사영이고 반복이 사영 경사법이 된다. 이때 위 $O(1/k)$ 정리가 그대로 적용된다.

## 핵 노름 최소화

행렬의 특이값 합을 $g$ 로 두면 근접 연산자가 [특이값 분해](singular-value-decomposition.md) 뒤 특이값마다 연성 문턱을 적용한 것이다. 관측된 성분만 맞추는 $f$ 와 함께 쓰면 낮은 계수 행렬을 복원하는 반복이 된다.

[^1]: N. Parikh and S. Boyd, *Proximal Algorithms*, Foundations and Trends in Optimization 1(3), 2014, 2.3 절.
[^2]: A. Beck and M. Teboulle, *A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems*, SIAM Journal on Imaging Sciences 2(1), 2009, Theorem 3.1 과 Theorem 4.4.

# 연관 문서

## 선수지식

- [경사하강법](gradient-descent.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning #functional_analysis
