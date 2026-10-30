# 선형사상

# 개요

**선형사상(linear map)** 은 합을 보내면 보낸 것들의 합이 되고 상수배를 보내면 보낸 것의 상수배가 되는 함수다. 평면의 점을 원점 중심으로 직각만큼 돌리는 함수는 $(1,0)$ 을 $(0,1)$ 로, $(0,1)$ 을 $(-1,0)$ 으로 보내고, 이 두 값만 알면 $(x,y)=x(1,0)+y(0,1)$ 이 $(-y,x)$ 로 가는 것이 정해진다. 선형사상은 기저에서의 값만으로 정해지므로 [행렬](matrices.md) 하나로 적히고, 연립일차방정식이나 도형의 변환을 그 행렬의 계산으로 다룬다.

# 직관

평면의 점을 원점 중심으로 직각만큼 돌리는 함수 $R$ 은 $(x,y)$ 를 $(-y,x)$ 로 보낸다. 두 점을 더한 뒤 돌린 것과 각각 돌린 뒤 더한 것이 같고, $3$ 배한 뒤 돌린 것과 돌린 뒤 $3$ 배한 것도 같다. 그래서 $(1,0)\mapsto(0,1)$ 과 $(0,1)\mapsto(-1,0)$ 두 값만 알면 $(x,y)=x(1,0)+y(0,1)$ 의 값이 $x(0,1)+y(-1,0)=(-y,x)$ 로 정해진다.

두 값 $(0,1)$ 과 $(-1,0)$ 을 세로로 적어 나란히 세우면 수 네 개의 표가 된다.

$$
\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}
$$

$R$ 의 값은 이 표의 첫째 열에 $x$ 를, 둘째 열에 $y$ 를 곱해 더한 것이다. 평면의 모든 점에서 정의된 함수가 수 네 개로 저장된다.

$(x,y)$ 를 $x+y$ 로 보내는 함수 $S$ 도 더하기와 상수배를 보존한다. $S$ 는 $(1,-1)$ 을 $0$ 으로 보내고, 직선 $x+y=0$ 위의 점이 전부 $0$ 으로 간다. 평면의 두 방향 가운데 한 방향은 $0$ 으로 가고, 남은 한 방향이 수직선 전체를 채운다.

# 정의

## 선형사상

**선형사상(linear map)** 은 같은 체 위의 [벡터 공간](vector-spaces.md) $V$, $W$ 사이의 함수 $T:V\to W$ 가운데 모든 벡터 $u,v$ 와 스칼라 $a,b$ 에 대해 다음을 만족하는 것이다.

$$
T(au+bv)=aT(u)+bT(v)
$$

직관 절의 회전 $R$ 과 $S(x,y)=x+y$ 는 선형사상이다. 평행이동 $v\mapsto v+(1,0)$ 은 $0$ 을 $(1,0)$ 으로 보내는데 선형사상은 $T(0)=T(0\cdot0)=0\cdot T(0)=0$ 이어야 하므로 선형사상이 아니다. 평행이동까지 허용한 것이 아핀 사상(affine map)이다.

## 핵과 상

**핵(kernel)** 과 **상(image)** 은 다음 집합이다.

$$
\ker T=\lbrace v\in V:T(v)=0_W\rbrace,\qquad \mathrm{im}T=\lbrace T(v):v\in V\rbrace
$$

직관 절의 $S$ 에서 $\ker S$ 는 직선 $x+y=0$ 이고 $\mathrm{im}S$ 는 [실수](real-numbers.md) 전체다. 회전 $R$ 은 $\ker R=\lbrace 0\rbrace$ 이고 $\mathrm{im}R$ 은 평면 전체다.

## 행렬 표현

$V$ 와 $W$ 가 유한차원이고 입력 기저 $e_1,\dots,e_n$ 과 출력 기저를 고정했을 때 $T$ 의 **행렬 표현(matrix representation)** 은 $j$ 번째 열이 $T(e_j)$ 의 좌표인 행렬 $A$ 다. 입력과 출력의 좌표 열벡터를 $c$ 와 $d$ 라 하면 다음과 같다.

$$
d=Ac
$$

표준기저에서 직관 절의 회전 $R$ 의 행렬 표현은 위의 $2\times2$ 표이고, $S$ 의 행렬 표현은 $1\times2$ 행렬 $\begin{pmatrix}1&1\end{pmatrix}$ 이다.

# 성질

## 기저의 상

$V$ 의 기저를 $e_1, \dots, e_n$ 이라 하면 임의의 벡터는 그들의 결합으로 유일하게 쓰이고, 선형성으로 다음이 성립한다.

$$
T\Big(\sum_i c_ie_i\Big)=\sum_i c_iT(e_i)
$$

그래서 $T$ 는 $T(e_i)$ 들로 정해지고, 기저의 상을 아무렇게나 정하면 그 값을 갖는 선형사상이 하나 있다. 핵은 $V$ 의 부분공간, 상은 $W$ 의 부분공간이다.

## 기저 변환

기저를 바꾸면 행렬은 $A \mapsto P^{-1}AP$ 꼴로 달라지고 사상 자체는 그대로다. 행렬의 성질 가운데 기저 변환에 불변인 것(계수, [행렬식](determinants.md), 고윳값, 대각합)만이 사상의 성질이다.

## 단사성과 핵

$T$ 가 단사인 것과 $\ker T = \lbrace 0\rbrace$ 인 것은 동치다. 두 입력의 상이 같으면 차가 핵에 들어가고, 핵이 0 뿐이면 두 입력이 같다. 선형사상의 단사성은 원점의 원상만으로 판정된다.

## 차원 정리

$V$ 가 유한차원이면 다음이 성립한다.

$$
\dim V=\dim\ker T+\dim\mathrm{im}T
$$

*증명.* 핵의 기저를 $V$ 의 기저로 확장하고, 새로 추가한 벡터들의 상이 상의 기저가 됨을 보인다. 직관 절의 $S$ 는 핵이 직선이고 상이 실수 전체이므로 $2 = 1 + 1$ 이다.

따름정리로 같은 유한차원 공간 사이의 선형사상은 단사인 것과 전사인 것이 동치이고, 미지수가 식보다 많은 제차 연립방정식은 0 이 아닌 해를 갖는다.

## 연산과 구조

선형사상의 합과 스칼라배도 선형사상이므로 $\mathrm{Hom}(V, W)$ 가 벡터 공간이고, 유한차원이면 차원은 $\dim V \cdot \dim W$ 다. 합성은 행렬 곱에 대응하고, 행렬 곱의 결합성과 비교환성은 합성의 성질이다. 가역인 선형사상이 동형사상이며, 유한차원에서 두 공간이 동형인 것은 차원이 같은 것과 동치다.

## 선형성의 판정

미분 연산, [적분](riemann-integral.md), 기댓값, [이산 Fourier 변환](fourier.md)은 선형이다. 제곱, 절댓값, 정규화, 최댓값 연산은 선형이 아니다. 선형인 연산에서만 기저 하나로 계산이 끝나고 중첩 원리를 쓴다.

# 활용

- **연립방정식.** $Ax = b$ 의 가해성은 $b$ 가 상에 속하는지 여부이고, 해가 존재하면 해집합은 특수해 하나에 핵을 더한 것이다. 핵의 차원이 해의 자유도다.
- **선형 근사.** [미분](derivative.md)은 함수를 한 점 근처에서 선형사상으로 근사한다. 안정성 분석, [Newton 법](newton-method.md), 신경망의 한 층이 이 구도를 따른다.
- **구조를 보존하는 사상.** 핵과 상, 동형정리, 차원 정리의 형태가 군과 환에서 반복되고, [함자](functors.md)는 그 반복을 사상 개념 자체로 다룬다.[^1]

[^1]: MIT, *18.06SC Linear Algebra*, Linear Transformations and their Matrices. 선형사상과 행렬 표현, 기저 변환. https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/linear-transformations-and-their-matrices/

# 연관 문서

## 선수지식

- [벡터 공간](vector-spaces.md)

## 더 알아보기

### 행렬과 불변량

- [행렬](matrices.md)
- [고윳값](eigenvalues.md)

### 선형성이 나타나는 곳

- [미분](derivative.md)
- [이산 Fourier 변환](fourier.md)
- [Markov 연쇄](markov-chains.md)
- [그래프 Laplacian](graph-laplacian.md)
- [선형계획법](linear-programming.md)

### 구조로 확장

- [쌍대 공간](dual-space.md)
- [텐서곱](tensor-products.md)
- [Lie 대수](lie-algebras.md)
- [함자](functors.md)

#linear_algebra #algebra #analysis #category_theory
