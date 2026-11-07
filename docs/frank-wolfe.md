# Frank–Wolfe 알고리즘

# 개요

**Frank–Wolfe 알고리즘(Frank–Wolfe algorithm)** 은 볼록집합 위에서 매끄러운 볼록 함수를 최소화할 때, 집합으로의 사영 대신 집합 위에서 일차함수를 최소화하는 문제를 반복해서 푸는 방법이다. 확률 벡터 $x=(x_1,x_2,x_3)$ 가운데 점 $a=(1,\thinspace 0.5,\thinspace -0.5)$ 에 가장 가까운 것을 찾을 때, 사영 경사법의 한 걸음은 확률 벡터의 집합으로의 사영이라 원래 문제와 같은 문제를 다시 풀어야 한다. Frank–Wolfe 알고리즘은 기울기의 성분 가운데 가장 작은 것을 고르고 그 꼭짓점 쪽으로 현재 점을 섞는 일만 되풀이해, 사영 없이 최소점에 다가간다.

# 직관

$f(x)=\frac12\Vert x-a\Vert^2$ 을 확률 벡터 위에서 최소화한다. 꼭짓점 $e_1=(1,0,0)$ 에서 시작하면 기울기는 $x-a=(0,\thinspace -0.5,\thinspace 0.5)$ 이다. [경사하강법](gradient-descent.md)으로 보폭 $1$ 의 걸음을 밟으면 $e_1-(x-a)=a$ 이고, $a$ 는 음수 성분이 있어 확률 벡터가 아니다. $a$ 를 확률 벡터로 사영하는 것이 원래 문제이므로 이 길은 막힌다.

기울기를 써서 $f$ 를 일차함수 $f(x_0)+\langle\nabla f(x_0),\thinspace s-x_0\rangle$ 로 근사하고, 이 일차함수를 확률 벡터 $s$ 위에서 최소화한다. [선형계획법](linear-programming.md)에서 다면체 위의 일차함수는 꼭짓점에서 최소가 되므로, 기울기 성분 $(0,\thinspace -0.5,\thinspace 0.5)$ 가운데 가장 작은 둘째 성분의 꼭짓점 $s=e_2$ 가 답이다. 이 계산은 성분 셋을 비교하는 것뿐이다.

다음 점은 $x_0$ 와 $s$ 를 잇는 선분 위에서 고른다. $x_0+\gamma(s-x_0)=(1-\gamma,\thinspace\gamma,\thinspace 0)$ 에서 $f$ 는 $\frac12\bigl(\gamma^2+(\gamma-0.5)^2+0.25\bigr)$ 이고 $\gamma=0.25$ 에서 가장 작다. 새 점 $x_1=(0.75,\thinspace 0.25,\thinspace 0)$ 은 두 확률 벡터를 섞은 것이라 자동으로 확률 벡터다.

$x_1$ 에서 기울기는 $(-0.25,\thinspace -0.25,\thinspace 0.5)$ 이고, 일차 근사를 가장 줄이는 꼭짓점은 $e_1$ 또는 $e_2$ 다. 그 꼭짓점 쪽으로 가도 일차 근사가 $\langle\nabla f(x_1),\thinspace x_1-e_1\rangle=0$ 만큼밖에 줄지 않으므로 $x_1$ 이 최소점이다. 일차함수의 최소화와 선분 위의 섞기를 되풀이하는 이 방법을 Frank–Wolfe 알고리즘이라 부른다.

# 정의

$C\subseteq\mathbb R^n$ 이 콤팩트 볼록집합이고 $f$ 가 $C$ 를 포함하는 열린집합에서 미분가능한 볼록 함수라 하자. **Frank–Wolfe 알고리즘** 은 $x_0\in C$ 에서 시작해 다음을 되풀이한다.

$$
s_k\in\mathop{\mathrm{arg\thinspace min}}\_{s\in C}\thinspace\langle\nabla f(x_k),\thinspace s\rangle,\qquad x_{k+1}=x_k+\gamma_k(s_k-x_k)
$$

보폭은 $\gamma_k=2/(k+2)$ 로 두거나, 선분 위에서 $f$ 를 최소로 하는 $\gamma_k\in\lbrack 0,1\rbrack$ 로 고른다. 직관 절은 선분 위의 최소화를 쓴 경우다. 첫 식의 최소화를 **선형 최소화 오라클(linear minimization oracle)** 이라 하고, 이 알고리즘을 조건부 경사법(conditional gradient method)이라고도 부른다.

## 쌍대 간격

$x\in C$ 에서 다음 값을 **Frank–Wolfe 간격(Frank–Wolfe gap)** 이라 한다.

$$
g(x)=\max_{s\in C}\thinspace\langle\nabla f(x),\thinspace x-s\rangle
$$

$s=x$ 를 넣으면 $g(x)\ge 0$ 이다. 오라클이 내놓은 $s_k$ 로 $g(x_k)=\langle\nabla f(x_k),\thinspace x_k-s_k\rangle$ 이므로 반복마다 추가 계산 없이 얻는다. 직관 절에서 $g(x_0)=\langle(0,-0.5,0.5),\thinspace e_1-e_2\rangle=0.5$ 이고 $g(x_1)=0$ 이다.

# 성질

## 간격과 최적값

정리. 최솟값을 $f^\star$ 라 하면 모든 $x\in C$ 에서 $f(x)-f^\star\le g(x)$ 다.

증명의 요지. [볼록성](convexity.md)의 접선 하한으로 최소점 $x^\star$ 에서 $f^\star\ge f(x)+\langle\nabla f(x),\thinspace x^\star-x\rangle\ge f(x)-g(x)$ 이다. 그래서 $g(x_k)$ 가 작아지면 반복을 멈추고, 그때의 오차는 $g(x_k)$ 이하로 보장된다.

## O(1/k) 수렴

정리. $\nabla f$ 가 $L$ Lipschitz 이고 $D$ 가 $C$ 의 지름이면, $\gamma_k=2/(k+2)$ 에서 $k\ge 1$ 에 대해 다음이 성립한다[^1].

$$
f(x_k)-f^\star\le\frac{2LD^2}{k+2}
$$

증명의 요지. $h_k=f(x_k)-f^\star$ 로 쓴다. 경사하강법 문서의 하강 보조정리로 $f(x_{k+1})\le f(x_k)+\gamma_k\langle\nabla f(x_k),\thinspace s_k-x_k\rangle+\frac{L}{2}\gamma_k^2D^2$ 이고, 가운데 항은 $-\gamma_kg(x_k)\le-\gamma_kh_k$ 이하다. 그래서 $h_{k+1}\le(1-\gamma_k)h_k+\frac{L}{2}\gamma_k^2D^2$ 이고, $\gamma_0=1$ 에서 $h_1\le LD^2/2$ 로 시작해 $k$ 에 대한 귀납법으로 결론이 나온다.

## 희소성

$x_0$ 이 $C$ 의 꼭짓점이면 $x_k$ 는 꼭짓점 많아야 $k+1$ 개의 볼록결합이다. 확률 단체에서는 $x_k$ 의 $0$ 아닌 성분이 많아야 $k+1$ 개다. 확률 단체 위에서 성분 $k$ 개만으로 만들 수 있는 점의 오차가 $\Omega(1/k)$ 인 함수가 있으므로, 이 단체 위에서는 위 수렴률이 성분 수와 오차의 관계로서 개선될 수 없다[^1].

최소점이 집합의 경계에 있고 꼭짓점이 아니면 $s_k$ 가 몇 꼭짓점 사이를 오가며 걸음이 지그재그로 짧아진다. 다면체에서 이미 쓴 꼭짓점의 가중치를 덜어 내는 걸음(away step)을 더하면, $f$ 가 강볼록일 때 선형 수렴한다[^2].

# 활용

- [행렬 완성](matrix-completion.md). 핵 노름이 $\tau$ 이하인 행렬의 집합 위에서 관측 성분의 제곱오차를 최소화할 때, 오라클의 답은 기울기 행렬의 가장 큰 특이값에 대한 특이벡터 $u$ , $v$ 로 $-\tau uv^\top$ 이다. 사영에는 [특이값 분해](singular-value-decomposition.md) 전체가 필요하지만 오라클에는 특이벡터 한 쌍만 필요하고, $x_k$ 는 계수 $k+1$ 이하의 행렬이다.
- 교통 배정 문제(traffic assignment problem). [가격 무정부](price-of-anarchy.md) 문서의 Wardrop 균형은 볼록 함수 $\Phi$ 를 흐름 위에서 최소화한 해이고, 오라클은 현재 지연을 길이로 하는 [최단경로](shortest-paths.md) 문제다. 이 알고리즘은 도로망의 교통량 배정에 오래 쓰였다.
- 희소 근사. $\ell^1$ 공이나 확률 단체 위의 최소화에서 반복마다 좌표 하나만 새로 쓰므로, 적은 수의 좌표로 된 근사해를 얻는다.
- 이차계획. Frank 와 Wolfe 는 선형 제약 아래 이차함수를 최소화하는 방법으로 이 알고리즘을 도입했다[^3]. 오라클이 선형계획 문제다.

[^1]: M. Jaggi, *Revisiting Frank–Wolfe: Projection-free sparse convex optimization*, Proceedings of the 30th International Conference on Machine Learning, Proceedings of Machine Learning Research 28(1), 2013, 427–435.
[^2]: S. Lacoste-Julien and M. Jaggi, *On the global linear convergence of Frank–Wolfe optimization variants*, Advances in Neural Information Processing Systems 28, 2015.
[^3]: M. Frank and P. Wolfe, *An algorithm for quadratic programming*, Naval Research Logistics Quarterly 3, 1956, 95–110.

# 연관 문서

## 선수지식

- [경사하강법](gradient-descent.md)
- [선형계획법](linear-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning
