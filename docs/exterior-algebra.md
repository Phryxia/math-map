# 외대수

# 개요

외대수는 벡터 공간의 [텐서곱](tensor-products.md)에서 같은 벡터를 두 번 곱한 것을 0 으로 만든 대수다. 곱은 반대칭이 되고, $k$ 개의 벡터를 곱한 것들이 만드는 부분공간의 차원이 $\binom{n}{k}$ 다.

가장 높은 차수의 부분공간은 1 차원이고, 선형사상이 그 위에 주는 스칼라가 [행렬식](determinants.md)이다. 행렬식을 좌표 없이 정의하는 자리가 여기다.

# 직관

두 벡터의 쐐기곱은 그 둘이 만드는 평행사변형의 방향 붙은 면적에 대응한다. 같은 벡터를 두 번 쓰면 면적이 0 이므로 $v\wedge v=0$ 이고, 두 벡터를 바꾸면 방향이 뒤집혀 부호가 바뀐다.

$k$ 차 부분은 $k$ 차원 평행다면체의 부피를 담는다. 차원 $n$ 을 넘는 개수의 벡터는 항상 일차종속이므로 $\Lambda^k V=0$ 이 $k\gt n$ 에서 성립한다.

# 정의

## 텐서 대수

체 $F$ 위의 벡터 공간 $V$ 에 대해 텐서 대수는 모든 차수의 텐서 거듭제곱의 직합이다.

$$T(V)=\bigoplus_{k\ge 0}V^{\otimes k},\qquad V^{\otimes 0}=F$$

곱은 텐서곱이고 결합적이다.

## 외대수

$v\otimes v$ 꼴의 원소들이 생성하는 양쪽 아이디얼을 $I$ 라 하면 **외대수**는 그 몫이다.

$$\Lambda(V)=T(V)/I$$

몫에서 유도된 곱을 **쐐기곱**이라 하고 $\wedge$ 로 쓴다. $k$ 차 성분을 $\Lambda^k V$ 라 하고 그 원소를 $k$ 벡터라 한다.

## 반대칭성

정의에서 $v\wedge v=0$ 이고, $(v+w)\wedge(v+w)=0$ 을 펼치면 다음이 나온다.

$$v\wedge w=-w\wedge v$$

표수가 2 가 아니면 두 조건이 동치다. 표수 2 에서는 $v\wedge v=0$ 이 더 강하므로 그것을 정의로 삼는다.

## 기저와 차원

$\dim V=n$ 이고 $e_1,\dots,e_n$ 이 기저이면 다음이 $\Lambda^k V$ 의 기저다.

$$\lbrace e\_{i_1}\wedge\cdots\wedge e\_{i_k} : 1\le i_1\lt \cdots\lt i_k\le n\rbrace$$

따라서 $\dim\Lambda^k V=\binom{n}{k}$ 이고 $\dim\Lambda(V)=2^n$ 이다.

# 성질

## 일차독립 판정

$v_1,\dots,v_k\in V$ 에 대해 $v_1\wedge\cdots\wedge v_k\neq 0$ 과 이 벡터들의 일차독립이 동치다.

일차종속이면 한 벡터를 나머지의 선형결합으로 바꿔 넣고 반대칭성을 쓰면 모든 항에 같은 벡터가 두 번 들어가 0 이 된다. 독립이면 기저로 확장해 위 기저 원소 하나로 만들 수 있으므로 0 이 아니다.

## 교대 다중선형사상의 보편성질

$k$ 개의 변수를 가진 교대 다중선형사상 $\varphi\colon V^k\to W$ 는 선형사상 $\tilde\varphi\colon \Lambda^k V\to W$ 와 일대일로 대응한다. 대응은 $\varphi(v_1,\dots,v_k)=\tilde\varphi(v_1\wedge\cdots\wedge v_k)$ 다.

교대성은 두 변수를 바꿀 때 부호가 바뀐다는 조건이고, 외대수는 그 조건을 대수 구조로 옮긴 것이다.

## 행렬식

선형사상 $f\colon V\to V$ 는 각 차수에 $\Lambda^k f(v_1\wedge\cdots\wedge v_k)=f(v_1)\wedge\cdots\wedge f(v_k)$ 로 사상을 유도한다. $\Lambda^n V$ 가 1 차원이므로 $\Lambda^n f$ 는 스칼라 곱이고, 그 스칼라가 $\det f$ 다.

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

- 다양체의 각 점에서 여접공간의 외대수를 취하고 그 단면을 모으면 [미분형식](differential-forms.md)이다. 외미분과 Stokes 정리가 이 대수 위에서 서술된다.
- $k$ 차원 부분공간에 $v_1\wedge\cdots\wedge v_k$ 를 대응시키면 Grassmann 다양체가 사영공간으로 매장된다. 상의 방정식이 Plücker 관계다.
- 행렬식의 Laplace 전개와 Cramer 공식은 $\Lambda^{n-1}$ 과 $\Lambda^n$ 사이의 쐐기곱을 좌표로 쓴 것이다.
- 반대칭 상태로 기술되는 여러 입자 계의 상태공간이 1 입자 공간의 외대수다.

# 연관 문서

## 선수지식

- [텐서곱](tensor-products.md)

## 더 알아보기

- [미분형식과 Stokes 정리](differential-forms.md)

#linear_algebra #algebra #differential_geometry
