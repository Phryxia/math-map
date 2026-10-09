# Brouwer 차수

# 개요

Brouwer 차수는 경계에서 어떤 값을 피하는 연속사상에 붙는 정수다. 방정식 $f(x)=y$ 의 해를 부호와 함께 센 값이고, 경계에서 $y$ 를 피하는 연속변형으로 바뀌지 않는다. 차수가 $0$ 이 아니면 해가 있으므로, 계산하기 쉬운 사상으로 변형해 값을 얻는 것이 해의 존재를 보이는 방법이 된다. 구면의 자기사상에서는 차수가 호모토피류를 완전히 가른다.

# 직관

연속함수 $f:\lbrack -1,1\rbrack\to\mathbb R$ 가 $f(-1)\lt 0$ 과 $f(1)\gt 0$ 을 만족하면 중간값 정리로 $f(c)=0$ 인 $c$ 가 있다. 평면에서 같은 것을 묻는다. 단위원판 $D$ 에서 $f:D\to\mathbb R^2$ 가 연속이고 테두리에서 $0$ 을 피할 때, 원판 안에 $f(x)=0$ 인 점이 있는지를 테두리의 값만 보고 판정할 수 있는가.

중간값 정리를 그대로 쓰려면 $f$ 의 부호가 바뀌는 것을 보아야 한다. 그런데 $f$ 의 값은 평면의 벡터이고 벡터에는 양과 음이 없다. 테두리에서 $f$ 가 $0$ 을 피한다는 것만으로는 비교할 두 값이 나오지 않아 판정이 서지 않는다.

값에 부호가 없으니 크기를 버리고 방향만 본다. 테두리에서 $f(x)\neq 0$ 이므로 $f(x)/\Vert f(x)\Vert$ 가 단위원의 점이고, 테두리를 한 바퀴 돌면 이 점도 단위원 위를 돈다. $f(x,y)=(x^2-y^2,2xy)$ 를 테두리 $(\cos\theta,\sin\theta)$ 에 넣으면 $(\cos 2\theta,\sin 2\theta)$ 가 나와 두 바퀴를 돈다.

이 두 바퀴가 원판 안의 해를 준다. 원판 안에 $f(x)=0$ 인 점이 없다면 $f(x)/\Vert f(x)\Vert$ 가 원판 전체에서 정의되고, 원판은 한 점으로 줄어들므로 테두리의 바퀴 수가 $0$ 이어야 한다. 두 바퀴는 $0$ 이 아니므로 해가 있고, 실제로 $f(x,y)=0$ 은 원점에서 성립한다. 이 바퀴 수가 차수다.

# 정의

Brouwer 차수는 유계 열린집합에서 정의된 연속사상에 붙는 정수 $\deg(f,\Omega,y)$ 다. $\Omega\subset\mathbb R^n$ 이 유계 열린집합이고 $f:\overline\Omega\to\mathbb R^n$ 이 연속이며 $y\notin f(\partial\Omega)$ 일 때 정의된다.

## 정칙값에서의 정의

$f$ 가 $\Omega$ 에서 매끄럽고 $y$ 가 $f$ 의 정칙값이면

$$\deg(f,\Omega,y)=\sum\_{x\in f^{-1}(y)}\mathrm{sign}\thinspace\det Df(x).$$

$Df(x)$ 는 $x$ 에서의 Jacobi 행렬이다. $y$ 가 정칙값이므로 $f^{-1}(y)$ 의 점마다 $\det Df(x)\neq 0$ 이고, [역함수 정리](inverse-function-theorem.md)로 그 점들은 고립되어 있다. $f^{-1}(y)$ 는 $\overline\Omega$ 의 닫힌부분집합이면서 경계와 만나지 않으므로 콤팩트이고, 고립점으로 된 콤팩트 집합이라 유한집합이다. 따라서 합이 유한하다.

## 연속사상으로의 확장

정칙값이 아닌 $y$ 와 매끄럽지 않은 $f$ 는 근사로 처리한다. [Sard 정리](sard-theorem.md)에 따라 임계값의 집합은 측도 $0$ 이므로 $y$ 에 얼마든지 가까운 정칙값 $y'$ 이 있고, $\Vert y'-y\Vert$ 가 $y$ 와 $f(\partial\Omega)$ 의 거리보다 작으면 $\deg(f,\Omega,y')$ 이 $y'$ 의 선택과 무관하다. 연속인 $f$ 는 Weierstrass 근사로 매끄러운 $g$ 로 균등근사하고, $\Vert g-f\Vert$ 가 같은 거리보다 작으면 $\deg(g,\Omega,y)$ 가 $g$ 의 선택과 무관하다. 두 값을 차례로 쓴 것이 $\deg(f,\Omega,y)$ 다.

## 구면 사이의 사상

$g:S^n\to S^n$ 이 연속이면 유도사상 $g\_\ast:H\_n(S^n)\to H\_n(S^n)$ 은 $H\_n(S^n)\cong\mathbb Z$ 에서 정수 $d$ 의 곱이다. 이 $d$ 를 $g$ 의 차수라 하고 $\deg g$ 로 쓴다. 매끄러운 $g$ 와 그 정칙값 $y$ 에서는 이 값이 위의 부호 합과 같다.

# 성질

## 호모토피 불변성

$H:\overline\Omega\times\lbrack 0,1\rbrack\to\mathbb R^n$ 이 연속이고 모든 $t$ 에서 $y\notin H(\partial\Omega,t)$ 이면 $\deg(H(\cdot,0),\Omega,y)=\deg(H(\cdot,1),\Omega,y)$ 다.

증명의 요지. 매끄러운 경우에 $H^{-1}(y)$ 는 $\Omega\times\lbrack 0,1\rbrack$ 안의 $1$ 차원 콤팩트 [다양체](manifolds.md)이고, 가정에 따라 그 경계는 $t=0$ 과 $t=1$ 의 두 끝면에만 놓인다. 곡선 하나의 두 끝점이 같은 끝면에 있으면 부호가 반대이고 다른 끝면에 있으면 부호가 같으므로, 두 끝면의 부호 합이 일치한다.

## 해의 존재

$\deg(f,\Omega,y)\neq 0$ 이면 $f^{-1}(y)\cap\Omega\neq\varnothing$ 이다. 대우로 보면 $f^{-1}(y)\cap\Omega$ 가 비면 정칙값 근사에서 합이 공집합 위의 합이 되어 차수가 $0$ 이다.

## 정규화와 가법성

항등사상은 $y\in\Omega$ 에서 $\deg(\mathrm{id},\Omega,y)=1$ 이다. $\Omega$ 가 서로 겹치지 않는 열린집합 $\Omega\_1,\dots,\Omega\_k$ 의 합집합을 포함하고 $f^{-1}(y)\cap\Omega$ 가 그 합집합에 들어가면

$$\deg(f,\Omega,y)=\sum\_{i=1}^{k}\deg(f,\Omega\_i,y).$$

## 곱셈성

구면의 자기사상에서 $\deg(g\circ h)=\deg g\cdot\deg h$ 다. 유도사상이 합성에서 합성으로 가고 $H\_n(S^n)$ 의 자기준동형이 정수 곱이므로 정수의 곱이 된다. $S^1$ 에서 $z\mapsto z^m$ 의 차수가 $m$ 인 것과 합치면 복소다항식 $z^n+a\_{n-1}z^{n-1}+\dots+a\_0$ 의 차수가 큰 원에서 $n$ 이다.

## Hopf 정리

$n\ge 1$ 에서 $g,h:S^n\to S^n$ 이 호모토픽인 것과 $\deg g=\deg h$ 인 것이 서로 필요충분조건이다. 따라서 차수가 $\pi\_n(S^n)\cong\mathbb Z$ 의 동형을 준다.[^1]

증명의 요지. 차수가 호모토피 불변이므로 한쪽 방향은 정의에서 나온다. 반대 방향은 차수 $0$ 인 사상이 상수사상과 호모토픽임을 보이는 것으로 줄고, 정칙값의 원상에서 부호가 반대인 점 둘을 잇는 호를 따라 두 점을 함께 없애는 변형을 반복한다.

## 벡터장의 지표

$v$ 가 $\mathbb R^n$ 의 열린집합에서 정의된 벡터장이고 $x\_0$ 이 고립된 영점이면, $x\_0$ 을 둘러싼 작은 구면에서 $v/\Vert v\Vert$ 가 주는 사상의 차수를 $x\_0$ 에서 $v$ 의 지표라 한다. Poincaré–Hopf 정리는 콤팩트 다양체 위의 벡터장에서 이 지표의 합이 Euler 지표와 같다고 말한다.

# 활용

- [Brouwer 고정점 정리](brouwer-fixed-point.md): $f:D^n\to D^n$ 에 고정점이 없으면 $x-f(x)$ 가 $0$ 을 피하므로 차수가 정의되고, 호모토피 불변성으로 그 값이 $1$ 이면서 해의 존재 조건과 어긋난다.
- [Leray–Schauder 차수](leray-schauder-degree.md): Banach 공간의 콤팩트 섭동 $I-T$ 에서 유한차원 근사의 Brouwer 차수를 극한으로 옮긴 정의다.
- [Poincaré–Hopf 정리](poincare-hopf.md): 고립 영점의 지표를 작은 구면 위의 차수로 정의하는 자리에서 쓴다.
- 털난 공 정리: $S^n$ 의 대척사상의 차수가 $(-1)^{n+1}$ 이고, 영점 없는 접벡터장이 있으면 항등사상과 대척사상이 호모토픽이 되어 $n$ 이 짝수일 때 모순이다.
- 분기 이론: 매개변수 $\lambda$ 에 따라 $f(x,\lambda)=0$ 의 해를 셀 때, 차수가 $\lambda$ 를 지나며 바뀌는 자리에서 해의 개수가 바뀐다.

[^1]: Hopf 정리의 진술과 증명은 Milnor, *Topology from the Differentiable Viewpoint*, 7 장에 있다.

# 연관 문서

## 선수지식

- [단체 호몰로지](homology.md)
- [역함수 정리](inverse-function-theorem.md)

## 더 알아보기

- [Leray–Schauder 차수](leray-schauder-degree.md)

#topology #algebraic_topology #differential_geometry #analysis
