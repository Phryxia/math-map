# 외대수

# 개요

**외대수(exterior algebra)** 는 벡터끼리 곱하되 같은 벡터를 두 번 곱하면 $0$ 이 되게 한 대수다. 평면에서 두 벡터 $u,v$ 가 만드는 평행사변형의 넓이에 부호를 붙이면, $u,v$ 의 순서를 바꿀 때 부호가 바뀌고 $u=v$ 이면 $0$ 이다. 외대수는 이 규칙을 곱으로 삼아 $k$ 개의 벡터가 만드는 $k$ 차원 부피를 계산하고, [행렬식](determinants.md)을 좌표 없이 정의한다.

# 직관

평면의 두 벡터 $u=(2,0)$, $v=(1,3)$ 이 만드는 평행사변형은 밑변 $2$, 높이 $3$ 으로 넓이가 $6$ 이다. 이 넓이를 벡터의 곱 $u\wedge v$ 로 적되, 같은 벡터를 두 번 곱하면 $0$ 이고 두 벡터를 바꾸면 부호가 바뀌는 규칙만 둔다. 표준기저 $e_1=(1,0)$, $e_2=(0,1)$ 로 쓰면 $u=2e_1$, $v=e_1+3e_2$ 다.

곱을 분배법칙으로 펼치면 $u\wedge v=2e_1\wedge e_1+6\thinspace e_1\wedge e_2$ 이고, $e_1\wedge e_1=0$ 이므로 $u\wedge v=6\thinspace e_1\wedge e_2$ 다. 계수 $6$ 이 넓이이고, 단위 정사각형 $e_1\wedge e_2$ 의 몇 배인지로 넓이가 적힌다.

공간의 세 벡터를 곱하면 같은 계산으로 $e_1\wedge e_2\wedge e_3$ 의 몇 배인지가 나오고, 그 계수가 평행육면체의 부호 있는 부피다. 평면에서 세 벡터를 곱하면 펼친 각 항에 $e_1$ 이나 $e_2$ 가 두 번 들어가므로 모두 $0$ 이다.

# 정의

## 텐서 대수

체 $F$ 위의 벡터 공간 $V$ 의 **텐서 대수(tensor algebra)** 는 모든 차수의 [텐서곱](tensor-products.md) 거듭제곱의 직합이다.

$$T(V)=\bigoplus_{k\ge 0}V^{\otimes k},\qquad V^{\otimes 0}=F$$

곱은 텐서곱이고 결합적이다. $V=\mathbb R^2$ 에서 $e_1\otimes e_2$ 와 $e_2\otimes e_1$ 은 $V^{\otimes 2}$ 의 서로 다른 원소이고, $e_1\otimes e_1$ 은 $0$ 이 아니다.

## 외대수

$v\otimes v$ 꼴의 원소들이 생성하는 양쪽 아이디얼을 $I$ 라 하면 **외대수(exterior algebra)** 는 그 몫이다.

$$\Lambda(V)=T(V)/I$$

몫에서 유도된 곱을 **쐐기곱(wedge product)** 이라 하고 $\wedge$ 로 쓴다. $k$ 차 성분을 $\Lambda^k V$ 라 하고 그 원소를 $k$ 벡터($k$-vector)라 한다. $V=\mathbb R^2$ 에서 $e_1\otimes e_1$ 은 $I$ 에 속하므로 $e_1\wedge e_1=0$ 이고, 직관 절의 $u\wedge v=6\thinspace e_1\wedge e_2$ 는 $\Lambda^2\mathbb R^2$ 의 원소다.

# 성질

## 반대칭성

정의에서 $v\wedge v=0$ 이고, $(v+w)\wedge(v+w)=0$ 을 펼치면 다음이 나온다.

$$v\wedge w=-w\wedge v$$

표수가 2 가 아니면 두 조건이 동치다. 표수 2 에서는 $v\wedge v=0$ 이 더 강하므로 그것을 정의로 삼는다.

## 기저와 차원

$\dim V=n$ 이고 $e_1,\dots,e_n$ 이 기저이면 다음이 $\Lambda^k V$ 의 기저다.

$$\lbrace e\_{i_1}\wedge\cdots\wedge e\_{i_k} : 1\le i_1\lt \cdots\lt i_k\le n\rbrace$$

따라서 $\dim\Lambda^k V=\binom{n}{k}$ 이고 $\dim\Lambda(V)=2^n$ 이다.

## 일차독립 판정

$v_1,\dots,v_k\in V$ 에 대해 $v_1\wedge\cdots\wedge v_k\neq 0$ 과 이 벡터들의 일차독립이 동치다.

일차종속이면 한 벡터를 나머지의 선형결합으로 바꿔 넣고 반대칭성을 쓰면 모든 항에 같은 벡터가 두 번 들어가 0 이 된다. 독립이면 기저로 확장해 위 기저 원소 하나로 만들 수 있으므로 0 이 아니다.

## Plücker 관계

$\omega\in\Lambda^k V$ 가 어떤 $v_1,\dots,v_k$ 에 대해 $v_1\wedge\cdots\wedge v_k$ 로 쓰이면 **분해가능**하다고 한다. $k\ge 2$ 이고 $\dim V\gt k+1$ 이면 분해가능하지 않은 원소가 있다. 기저 $e_1,\dots,e_n$ 에 대한 $\omega$ 의 좌표 $p_{i_1\dots i_k}$ 를 **Plücker 좌표**라 하고, 분해가능성은 이 좌표들의 이차식으로 표현된다.

$n=4$ , $k=2$ 가 가장 작은 예다. $\omega=\sum_{i\lt j}p_{ij}\thinspace e_i\wedge e_j$ 가 분해가능할 필요충분조건은 $\omega\wedge\omega=0$ 이고, 좌표로 쓰면 이차식 하나가 된다.

$$p_{12}p_{34}-p_{13}p_{24}+p_{14}p_{23}=0$$

분해가능한 $\omega$ 들이 이루는 집합은 이런 이차식들로 정의되고, 사영화하면 $V$ 의 $k$ 차원 부분공간 전체를 가리킨다. 부분공간 $W$ 에 기저 $v_1,\dots,v_k$ 를 잡아 $v_1\wedge\cdots\wedge v_k$ 를 대응시키면 기저를 바꿀 때 행렬식배만큼만 달라지므로 대응이 사영공간 안에서 잘 정의된다.

## 교대 다중선형사상의 보편성질

$k$ 개의 변수를 가진 교대 다중선형사상 $\varphi\colon V^k\to W$ 는 선형사상 $\tilde\varphi\colon \Lambda^k V\to W$ 와 일대일로 대응한다. 대응은 $\varphi(v_1,\dots,v_k)=\tilde\varphi(v_1\wedge\cdots\wedge v_k)$ 다.

교대성은 두 변수를 바꿀 때 부호가 바뀐다는 조건이고, 외대수는 그 조건을 대수 구조로 옮긴 것이다.

## 행렬식

[선형사상](linear-maps.md) $f\colon V\to V$ 는 각 차수에 $\Lambda^k f(v_1\wedge\cdots\wedge v_k)=f(v_1)\wedge\cdots\wedge f(v_k)$ 로 사상을 유도한다. $\Lambda^n V$ 가 1 차원이므로 $\Lambda^n f$ 는 스칼라 곱이고, 그 스칼라가 $\det f$ 다.

$$\Lambda^n f=\det(f)\cdot \mathrm{id}\_{\Lambda^n V}$$

곱셈성 $\det(fg)=\det(f)\det(g)$ 가 $\Lambda^n(fg)=\Lambda^n f\circ\Lambda^n g$ 에서 즉시 나온다. 기저를 고르지 않아도 정의되므로 기저 변환에 대한 불변성을 따로 확인할 필요가 없다.

## 차수 붙은 가환성

$\alpha\in\Lambda^k V$ , $\beta\in\Lambda^l V$ 이면 다음이 성립한다.

$$\alpha\wedge\beta=(-1)^{kl}\thinspace\beta\wedge\alpha$$

$\alpha$ 와 $\beta$ 를 각각 $k$ 개, $l$ 개의 벡터의 쐐기곱으로 쓰고 인접한 두 벡터를 바꿀 때마다 부호가 한 번 바뀌는 것을 $kl$ 번 세면 된다. 짝수 차수의 원소는 전체와 가환한다.

## 쌍대와 Hodge 별

유한차원에서 $(\Lambda^k V)^\ast$ 와 $\Lambda^k(V^\ast)$ 가 자연히 동형이므로, 교대 $k$ 형식의 공간을 [쌍대 공간](dual-space.md)의 외대수로 볼 수 있다.

$V$ 에 내적과 방향을 주면 $\Lambda^k V$ 와 $\Lambda^{n-k}V$ 의 차원이 같고, 기저의 여집합을 대응시키는 동형이 Hodge 별 연산자 $\ast$ 다. $\mathbb R^3$ 에서 $\Lambda^2$ 와 $\Lambda^1$ 의 대응이 벡터곱이다.

# 활용

- [다양체](manifolds.md)의 각 점에서 여접공간의 외대수를 취하고 그 단면을 모으면 [미분형식](differential-forms.md)이다. 외미분과 Stokes 정리가 이 대수 위에서 서술된다.
- $k$ 차원 부분공간에 $v_1\wedge\cdots\wedge v_k$ 를 대응시키면 [Grassmann 다양체](grassmannian.md)가 사영공간으로 매장된다. 상의 방정식이 Plücker 관계다.
- 행렬식의 Laplace 전개와 Cramer 공식은 $\Lambda^{n-1}$ 과 $\Lambda^n$ 사이의 쐐기곱을 좌표로 쓴 것이다.
- 반대칭 상태로 기술되는 여러 입자 계의 상태공간이 1 입자 공간의 외대수다.

# 연관 문서

## 선수지식

- [텐서곱](tensor-products.md)

## 더 알아보기

- [Clifford 대수](clifford-algebras.md)
- [Grassmann 다양체](grassmannian.md)
- [Koszul 복합체](koszul-complex.md)
- [미분형식](differential-forms.md)

#linear_algebra #algebra #differential_geometry
