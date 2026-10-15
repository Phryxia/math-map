# 서포트 벡터 머신

# 개요

서포트 벡터 머신은 두 부류를 가르는 초평면 가운데 가장 가까운 자료까지의 거리가 최대인 것을 고르는 분류기다. 그 거리를 마진이라 하고, 마진 최대화는 선형 제약 아래 2차함수를 최소화하는 볼록 문제가 된다.

[Lagrange 쌍대성](lagrange-duality.md)을 적용하면 해가 자료의 내적만으로 적히고, 마진 위에 놓인 자료점들의 선형결합으로 표현된다. 그 점들이 서포트 벡터다. 마진이 클 때 일반화 오차가 작다는 보장은 [Rademacher 복잡도](rademacher-complexity.md)에서 나온다.

# 직관

평면의 점들이 두 부류로 나뉘고 이들을 가르는 직선이 하나보다 많다. 어느 직선을 고르나.

직선을 $\langle w,x\rangle+b=0$ 이라 쓰면 점 $x_i$ 에서 직선까지의 거리는 $\vert\langle w,x_i\rangle+b\vert/\Vert w\Vert$ 다. 자료를 모두 맞히는 직선마다 가장 가까운 자료까지의 거리를 재고, 그 값이 가장 큰 직선을 고른다. 재야 하는 값은

$$\min\_{i}\frac{\vert\langle w,x_i\rangle+b\vert}{\Vert w\Vert}$$

이고 $w$ 와 $b$ 두 묶음을 함께 움직여 이것을 최대화해야 한다.

$w$ 와 $b$ 를 같은 양수로 곱하면 직선은 그대로이고 분자만 그 배로 바뀐다. 이 자유도를 써서 가장 가까운 자료점에서 $\vert\langle w,x_i\rangle+b\vert=1$ 이 되도록 척도를 고정한다. 그러면 모든 자료가 $y_i(\langle w,x_i\rangle+b)\ge 1$ 을 만족하고 거리는 $1/\Vert w\Vert$ 가 된다. 거리를 최대화하는 것이 $\Vert w\Vert$ 를 최소화하는 것과 같아진다.

남은 문제는 부등식 제약 $n$ 개 아래에서 $\Vert w\Vert^2$ 를 최소화하는 것이다. 제약마다 Lagrange 승수가 붙고, 등호가 성립하지 않는 제약의 승수는 $0$ 이다. 그러므로 해는 등호가 성립하는 자료점, 곧 직선에서 거리가 정확히 $1/\Vert w\Vert$ 인 점들만으로 적힌다.

# 정의

## 경성 마진 문제

표지가 $y_i\in\lbrace -1,+1\rbrace$ 인 자료 $(x_1,y_1),\dots,(x_n,y_n)$ 에 대해

$$\min\_{w,b}\frac12\Vert w\Vert\_2^2 \quad \text{subject to}\quad y_i(\langle w,x_i\rangle+b)\ge 1\ \ (i=1,\dots,n)$$

이 **경성 마진** 문제다. 목적함수가 강볼록이고 제약이 선형이므로 실행가능영역이 비어 있지 않으면 해가 유일하다. 마진은 $1/\Vert w\Vert\_2$ 다.

## 연성 마진 문제

자료를 모두 맞히는 초평면이 없을 때는 제약을 느슨하게 한다. 여유변수 $\xi_i\ge 0$ 와 상수 $C\gt 0$ 를 두고

$$\min\_{w,b,\xi}\frac12\Vert w\Vert\_2^2 + C\sum_{i=1}^n\xi_i \quad \text{subject to}\quad y_i(\langle w,x_i\rangle+b)\ge 1-\xi_i,\ \ \xi_i\ge 0$$

을 **연성 마진** 문제라 한다. $C$ 가 크면 틀린 자료에 주는 벌점이 커지고, 작으면 마진을 넓게 잡는다.

## 쌍대문제

$$\max\_{\alpha}\ \sum_{i=1}^n\alpha_i-\frac12\sum_{i=1}^n\sum_{j=1}^n\alpha_i\alpha_j y_i y_j\langle x_i,x_j\rangle \quad \text{subject to}\quad 0\le\alpha_i\le C,\ \ \sum_{i=1}^n\alpha_i y_i=0$$

가 연성 마진 문제의 쌍대문제다. $\alpha_i\gt 0$ 인 자료점을 **서포트 벡터**라 한다.

# 성질

## 쌍대문제의 유도

Lagrange 함수를 $w$ 와 $b$ 에 대해 최소화한다. $w$ 에 대한 기울기를 $0$ 으로 두면

$$w=\sum_{i=1}^n\alpha_i y_i x_i$$

이고 $b$ 에 대한 미분에서 $\sum_i\alpha_i y_i=0$ 이 나온다. 이것을 Lagrange 함수에 넣으면 $w$ 가 사라지고 자료의 내적만 남는다. 원문제가 볼록이고 Slater 조건이 성립하므로 쌍대간극이 $0$ 이고 두 문제의 최적값이 같다.

## KKT 조건과 서포트 벡터

최적해는 KKT(Karush–Kuhn–Tucker) 조건의 상보성

$$\alpha_i\lbrack y_i(\langle w,x_i\rangle+b)-1+\xi_i\rbrack=0$$

를 만족한다. 마진 안쪽에 있어 제약이 느슨한 자료점은 $\alpha_i=0$ 이고 해에 기여하지 않는다. $0\lt \alpha_i\lt C$ 인 점은 마진 위에 정확히 놓이고, 이 점에서 $b$ 를 계산한다. $\alpha_i=C$ 인 점은 마진을 침범하거나 틀린 점이다.

## 힌지 손실 꼴

제약을 없애고 $\xi_i=\max(0,1-y_i(\langle w,x_i\rangle+b))$ 를 대입하면

$$\min\_{w,b}\ \frac12\Vert w\Vert\_2^2+C\sum_{i=1}^n\max(0,1-y_i(\langle w,x_i\rangle+b))$$

이다. 연성 마진 문제는 힌지 손실에 $\ell^2$ 벌점을 붙인 제약 없는 볼록 문제와 같다. 이 꼴은 [경사하강법](gradient-descent.md)의 변형으로 바로 풀 수 있고, 미분 불가능한 자리에서는 열미분을 쓴다.

## 커널 치환

쌍대문제와 판별함수 $f(x)=\sum_i\alpha_i y_i\langle x_i,x\rangle+b$ 에 자료가 내적으로만 들어간다. 내적을 양의 준정부호 핵 $K(x,x')$ 으로 바꾸면 특징 사상을 명시하지 않고 고차원에서의 선형 분류를 계산한다. [커널 PCA](kernel-pca.md)(principal component analysis)가 공분산에 쓰는 것과 같은 치환이다.

## 일반화 경계

노름이 $B$ 이하인 선형류의 Rademacher 복잡도가 $BR/\sqrt n$ 이고 마진 손실의 Lipschitz 상수가 $1/\rho$ 이므로, 마진 $\rho$ 로 자료를 가르는 분류기의 오분류율은 확률 $1-\delta$ 로

$$\frac{2BR}{\rho\sqrt n}+3\sqrt{\frac{\log(2/\delta)}{2n}}$$

이하의 양만큼만 경험 오차에서 떨어진다. 경계에 좌표의 개수가 없으므로 특징 공간의 차원이 표본 수보다 커도 같은 수가 나온다.

# 활용

## 마진 기반 분류

마진을 최대화하는 기준은 분류기 선택에서 [볼록성](convexity.md)을 유지하는 몇 가지 기준 가운데 하나다. $0$-$1$ 손실의 최소화는 비볼록이고, 힌지 손실은 그 상한이면서 볼록이다.

## 핵을 쓰는 다른 문제

판별함수가 자료의 선형결합으로 적히는 구조는 회귀와 이상치 탐지로 옮겨간다. $\varepsilon$ 관용 손실을 쓰면 서포트 벡터 회귀가 되고, 한 부류만 두고 원점에서 가장 먼 초평면을 찾으면 단일 부류 문제가 된다.

## 정칙화 상수의 선택

$C$ 가 경험 오차와 마진 가운데 어느 쪽을 더 줄일지 정한다. [교차검증](cross-validation.md)으로 고르거나, 일반화 경계의 복잡도 항을 벌점으로 보고 [편향-분산 분해](bias-variance-decomposition.md)의 두 항을 저울질한다.

# 연관 문서

## 선수지식

- [Lagrange 쌍대성](lagrange-duality.md)
- [Rademacher 복잡도](rademacher-complexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #optimization #statistics
