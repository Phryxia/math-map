# 선형사상

선형사상은 벡터의 덧셈과 실수배를 보존하는 함수다.

## 정의

V, W를 실수 벡터 공간, T를 V에서 W로 가는 함수, u, v를 V의 원소, a, b를 실수라 하자. 다음 조건이면 T는 선형사상이다.

$$
T(au+bv)=aT(u)+bT(v)
$$

핵은 0으로 보내지는 입력들의 집합이고, 상은 실제로 얻는 출력들의 집합이다.

$$
\ker T=\{v\in V:T(v)=0\},\qquad\operatorname{im}T=\{T(v):v\in V\}
$$

첫 0은 W의 영벡터다. 핵은 V의 부분공간, 상은 W의 부분공간이다.

## 성질

선형사상은 영벡터를 영벡터로 보낸다. 따라서 0을 다른 점으로 평행이동하는 함수는 선형사상이 아니다.

핵이 영벡터만 포함할 때와 T가 단사일 때는 정확히 일치한다. 두 입력의 출력이 같으면 차가 핵에 들어가고, 핵이 0이면 두 입력이 같기 때문이다.

V가 유한차원일 때 rank-nullity 정리, 즉 차원 정리는 다음을 말한다. 입력 공간의 차원은 핵의 차원과 상의 차원의 합이다.

$$
\dim V=\dim\ker T+\dim\operatorname{im}T
$$

예를 들어 평면의 점 (x,y)를 실수 x+y로 보내면 핵은 x+y=0인 직선이고 상은 실수 전체다. 입력의 두 자유도 중 하나가 핵에서 사라지고 하나가 출력에 남는다.

유한차원 공간에서 양쪽 기저를 정하면 선형사상을 행렬 A로 나타낼 수 있다. 입력과 출력의 좌표 열벡터를 각각 c, d라고 쓰면 다음과 같다.

$$
d=Ac
$$

행렬의 각 열은 해당 입력 기저 벡터의 출력 좌표다. 기저를 바꾸면 행렬은 달라질 수 있지만 원래 선형사상은 그대로다.

## 활용

연립 일차방정식, 미분 연산, 차원 축소, 대칭을 나타내는 행렬을 다룬다. 어떤 정보를 잃는지는 핵이, 가능한 출력은 상이 나타낸다.

## 기타 참고 문헌

- [MIT, Linear Transformations and their Matrices](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/linear-transformations-and-their-matrices/): 선형사상과 행렬 표현.
- 차원 정리의 증명 개요: 핵의 기저를 V의 기저로 확장한다. 새로 추가한 기저 벡터들의 출력이 상의 기저를 이룬다.

# 연관 문서

## 선수지식

- [벡터 공간](vector-spaces.md)

## 더 알아보기

- [그래프 Laplacian](graph-laplacian.md)
- [이산 Fourier 변환](fourier.md)
- [미분](derivative.md)
- [Functor](functors.md)
- [행렬식](determinants.md)
- [고윳값과 고유벡터](eigenvalues.md)
- [선형계획법](linear-programming.md)
- [Markov 연쇄](markov-chains.md)
- [텐서곱](tensor-products.md)

#linear_algebra
