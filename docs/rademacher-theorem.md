# Rademacher 정리

# 개요

Rademacher 정리는 $\mathbb R^n$ 의 열린집합 위에서 정의된 [Lipschitz 사상](lipschitz-maps.md)이 Lebesgue 측도로 거의 모든 점에서 미분가능하다는 정리다. 미분가능성을 따로 가정하지 않고 거리의 늘어남에 상한을 두는 것만으로 도함수가 거의 어디서나 존재한다.

한 변수에서는 [유계변동 함수](bounded-variation.md)의 미분정리로 따라오고, 여러 변수에서는 방향미분을 먼저 얻은 뒤 전미분으로 올리는 단계가 하나 더 든다.

# 직관

$f(x)=\lvert x\rvert$ 는 상수 $1$ 의 Lipschitz 함수이고 원점에서 미분이 되지 않는다. 미분이 되지 않는 점을 피해 가며 미분하려면 그런 점이 얼마나 많은지 알아야 한다.

꺾인 점을 늘려 본다. $g_1$ 을 주기 $1$ 이고 기울기가 늘 $\pm1$ 인 톱니라 하자. 꺾인 점은 단위구간마다 둘이다. 주기를 $2^{-k}$ 로 줄인 톱니 $g_k$ 는 꺾인 점이 $2^{k+1}$ 개이지만 기울기는 여전히 $\pm1$ 이다. 꺾인 점을 조밀하게 만들려고 $g_1+g_2+\cdots+g_k$ 를 더하면 꺾인 점은 늘어나는데 기울기가 $\pm k$ 까지 커진다. Lipschitz 상수를 $L$ 로 고정하면 $k\le L$ 이므로 이 방법으로는 유한 번밖에 더하지 못한다.

기울기가 $\lbrack -L,L\rbrack$ 안에 있다는 조건을 그대로 쓴다. $h(x)=f(x)+Lx$ 로 두면 $x\lt y$ 일 때

$$
h(y)-h(x)=f(y)-f(x)+L(y-x)\ge -L(y-x)+L(y-x)=0
$$

이므로 $h$ 는 줄어들지 않는다. 줄어들지 않는 함수는 거의 모든 점에서 미분가능하고, $f(x)=h(x)-Lx$ 이므로 $f$ 도 그렇다.

여러 변수에서는 이 계산을 직선마다 한다. 방향 $v$ 를 하나 고정하고 직선 $t\mapsto f(x+tv)$ 를 보면 한 변수 Lipschitz 함수이므로 거의 모든 $t$ 에서 미분이 된다. 남는 일은 방향마다 얻은 도함수들이 한 [선형사상](linear-maps.md)으로 모이는지 확인하는 것이다.

# 정의

## 전미분

$U\subset\mathbb R^n$ 이 열린집합이고 $f:U\to\mathbb R^m$ 일 때, $f$ 가 점 $x\in U$ 에서 **미분가능**하다는 것은 선형사상 $A:\mathbb R^n\to\mathbb R^m$ 이 있어 다음이 성립하는 것이다.

$$
\lim_{h\to0}\frac{\lVert f(x+h)-f(x)-Ah\rVert}{\lVert h\rVert}=0
$$

이 $A$ 를 $Df(x)$ 로 쓴다.

## 정리

$U\subset\mathbb R^n$ 을 열린집합, $f:U\to\mathbb R^m$ 을 Lipschitz 사상이라 하자. 그러면 $f$ 는 $U$ 의 거의 모든 점에서 미분가능하다. 곧 미분가능하지 않은 점의 집합은 Lebesgue 측도가 $0$ 이다.

성분마다 적용하면 되므로 $m=1$ 인 경우만 보이면 충분하다.

# 성질

## 증명의 요지

방향 $v\in\mathbb R^n$ 을 $\lVert v\rVert=1$ 로 고정한다. 각 직선 위에서 $t\mapsto f(x+tv)$ 가 한 변수 Lipschitz 함수이므로 직관 절의 계산으로 거의 모든 $t$ 에서 미분가능하다. Fubini 정리를 직선의 다발에 적용하면 방향미분

$$
D_vf(x)=\lim_{t\to0}\frac{f(x+tv)-f(x)}{t}
$$

이 거의 모든 $x\in U$ 에서 존재한다. 좌표방향 $e_1,\dots,e_n$ 에 대해 동시에 적용하면 경사 $\nabla f$ 가 거의 어디서나 정의된다.

다음 단계는 $D_vf=\nabla f\cdot v$ 를 보이는 것이다. 시험함수 $\varphi\in C_c^\infty(U)$ 에 대해 차분몫의 적분을 잡고 Lipschitz 조건으로 유계수렴정리를 쓰면

$$
\int_U D_vf\thinspace\varphi\thinspace dx=-\int_U f\thinspace D_v\varphi\thinspace dx=\sum_{i=1}^n v_i\int_U \partial_if\thinspace\varphi\thinspace dx
$$

가 나오고, $\varphi$ 가 임의이므로 거의 어디서나 등식이 성립한다.

마지막으로 $\lVert v\rVert=1$ 인 방향 가운데 가산 조밀한 집합 $\lbrace v_k\rbrace$ 를 잡는다. 각 $v_k$ 마다 위 등식이 성립하지 않는 점들은 [측도](measure.md) $0$ 이고, 가산 개의 합집합도 측도 $0$ 이다. 남은 점에서는 차분몫

$$
Q(x,v,t)=\frac{f(x+tv)-f(x)}{t}-\nabla f(x)\cdot v
$$

가 각 $v_k$ 에서 $t\to0$ 일 때 $0$ 으로 간다. $Q$ 는 $v$ 에 대해 Lipschitz 상수 $2L$ 로 Lipschitz 이므로 조밀한 방향에서의 수렴이 모든 방향에서의 [균등수렴](uniform-convergence.md)으로 올라가고, 이것이 전미분의 정의다.

## 도함수의 크기

거의 모든 점에서 $\lVert Df(x)\rVert\le\mathrm{Lip}(f)$ 다. 미분의 정의에서 $\lVert Df(x)h\rVert\le\mathrm{Lip}(f)\lVert h\rVert+o(\lVert h\rVert)$ 이고 $h$ 를 $0$ 으로 보내면 된다. 역으로 $U$ 가 볼록이면 평균값 부등식이 $\mathrm{Lip}(f)=\mathrm{ess\thinspace sup}\lVert Df\rVert$ 를 준다.

## 미분 불가능한 점의 집합

"거의 모든 점"을 "모든 점"으로 바꿀 수 없다. $f(x)=\lvert x\rvert$ 가 한 점에서 걸린다. 미분 불가능한 점이 조밀할 수도 있다. 유리수를 $q_1,q_2,\dots$ 로 줄 세우고

$$
f(x)=\sum_{k\ge1}2^{-k}\lvert x-q_k\rvert
$$

로 두면 각 항이 상수 $2^{-k}$ 의 Lipschitz 이므로 합이 상수 $1$ 의 Lipschitz 이고, 모든 유리점에서 좌우 도함수가 다르다. 미분 불가능한 점의 집합은 측도 $0$ 이면서 $\mathbb R$ 에서 조밀하다.

## 무한차원에서의 실패

정의역이 무한차원 [Banach 공간](banach-spaces.md)이면 정리가 성립하지 않는다. $\ell^1$ 위에 어느 점에서도 미분가능하지 않은 Lipschitz 함수가 있다[^1]. 증명이 Lebesgue 측도와 Fubini 정리에 의존하므로 평행이동 불변 측도가 없는 공간으로 그대로 옮겨 가지 않는다.

# 활용

- [Lipschitz 사상](lipschitz-maps.md)의 집합 $\mathrm{Lip}(U)$ 와 Sobolev 공간 $W^{1,\infty}(U)$ 를 동일시한다. Rademacher 정리가 주는 $\nabla f$ 가 약한 도함수와 같고, 그 $L^\infty$ 노름이 Lipschitz 상수다.
- 기하측도론에서 면적공식과 여면적공식의 가정이 Lipschitz 사상이다. 두 공식 모두 적분 안에 Jacobi 행렬식을 두므로 거의 어디서나의 미분가능성이 먼저 있어야 한다.
- 비평활 최적화에서 Clarke 준미분은 미분가능한 점들에서의 경사의 극한들이 이루는 볼록껍질로 정의된다. 그런 점이 거의 어디서나 있다는 것이 이 정의가 비어 있지 않은 근거다.
- 거리공간 사이의 Lipschitz 사상을 다루는 Kirchheim 의 미분정리와 Cheeger 의 미분가능성 이론이 이 정리를 정의역이 $\mathbb R^n$ 이 아닌 곳으로 넓힌 것이다.

[^1]: J. Lindenstrauss, D. Preiss, J. Tišer, *Fréchet Differentiability of Lipschitz Functions and Porous Sets in Banach Spaces*, Princeton University Press, 2012, 1장.

# 연관 문서

## 선수지식

- [유계변동 함수](bounded-variation.md)
- [Lipschitz 사상](lipschitz-maps.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #measure_theory #optimization #theorem
