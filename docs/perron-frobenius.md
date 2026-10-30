# Perron–Frobenius 정리

# 개요

**Perron–Frobenius 정리(Perron–Frobenius theorem)** 는 성분이 음이 아닌 [행렬](matrices.md)에서 가장 큰 [고윳값](eigenvalues.md)이 양의 [실수](real-numbers.md)이고 그 고유벡터의 성분을 모두 양으로 잡을 수 있다는 정리다. 웹페이지 셋이 서로 링크하고, 사람들이 매 단계 링크를 무작위로 따라간다고 하자. 페이지 사이를 옮기는 확률을 행렬로 적으면 성분이 모두 음이 아니고, 오래 지난 뒤 각 페이지에 있는 사람의 비율이 페이지의 중요도가 된다. 이 정리는 그 비율이 성분이 모두 양인 고유벡터로 하나뿐임을 보인다.

# 직관

$A=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}$ 를 $(1,0)$ 에 거듭 곱하면 $(2,1)$, $(5,4)$, $(14,13)$ 이 나온다. 두 성분의 비가 $2$, $1.25$, $1.08$ 로 $1$ 에 다가가므로 방향이 $(1,1)$ 로 모인다. $A(1,1)=(3,3)$ 이므로 $(1,1)$ 은 고윳값 $3$ 의 고유벡터이고, 다른 고유벡터 $(1,-1)$ 의 고윳값 $1$ 은 절댓값이 더 작아 거듭 곱할수록 그 성분의 비중이 줄어든다.

음이 아닌 행렬은 성분이 음이 아닌 벡터를 다시 그런 벡터로 보낸다. 이 원뿔을 자기 안으로 보내는 사상에는 방향이 변하지 않는 벡터가 원뿔 안에 있고, 그 방향의 고윳값이 Perron 근이다.

$B=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 은 $(1,0)$ 과 $(0,1)$ 을 번갈아 내놓아 방향이 모이지 않는다. $B$ 의 고윳값 $1$ 과 $-1$ 은 절댓값이 같다. 성분에 $0$ 이 있는 행렬에서는 거듭제곱이 어떤 성분을 계속 $0$ 으로 남기는지가 결론을 가른다.

# 정의

## 음이 아닌 행렬과 양 행렬

실정사각행렬 $A=(a\_{ij})$ 에 대해 모든 성분이 음이 아니면 $A\ge 0$ , 모든 성분이 양이면 $A\gt 0$ 으로 쓴다. 직관 절의 $A$ 는 $A\gt0$ 이고 $B$ 는 $B\ge0$ 이지만 $B\gt0$ 이 아니다.

## 기약성

$A\ge 0$ 의 유향 [그래프](graphs.md)는 정점 $1,\dots,n$ 에 대해 $a\_{ij}\gt 0$ 일 때 $i\to j$ 간선을 두어 얻는다. 이 그래프가 강연결이면 $A$ 를 **기약(irreducible)** 이라 한다. 직관 절의 $B$ 는 간선 $1\to2$, $2\to1$ 이 있으므로 기약이다. $\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 은 $2$ 에서 $1$ 로 가는 간선이 없으므로 기약이 아니다.

## 원시성

어떤 $k\ge 1$ 에 대해 $A^k\gt 0$ 이면 $A$ 를 **원시적(primitive)** 이라 한다. 직관 절의 $A$ 는 $k=1$ 에서 원시적이다. $B$ 는 $B^2=I$ 이므로 거듭제곱이 $B$ 와 $I$ 를 번갈아 내놓고, 어느 쪽도 양 행렬이 아니어서 원시적이 아니다.

## Perron 근

$\rho(A)=\max\lbrace \vert\lambda\vert : \lambda \text{ 는 } A \text{ 의 고윳값}\rbrace$ 를 **스펙트럼 반지름(spectral radius)** 이라 한다. 아래 정리가 주는 양의 고윳값을 **Perron 근(Perron root)**, 그 고유벡터를 **Perron 벡터(Perron vector)** 라 한다. 직관 절의 $A$ 는 $\rho(A)=3$ 이고 Perron 벡터가 $(1,1)$ 이다. $B$ 는 $\rho(B)=1$ 이다.

# 성질

## 기약성과 원시성의 관계

$A\ge0$ 이 기약인 것은 임의의 $i,j$ 에 대해 $(A^k)\_{ij}\gt 0$ 인 $k\ge 1$ 이 있는 것과 동치다. 원시적이면 기약이고, 직관 절의 $B$ 가 보이듯 역은 성립하지 않는다.

## 양 행렬의 경우

$A\gt 0$ 이면 다음이 성립한다.

- $\rho(A)$ 는 $A$ 의 고윳값이고 대수적 중복도가 1 이다.
- 성분이 모두 양인 고유벡터 $v$ 가 있고, 양의 고유벡터는 $v$ 의 상수배뿐이다.
- 다른 모든 고윳값 $\lambda$ 는 $\vert\lambda\vert\lt \rho(A)$ 를 만족한다.

증명의 요지는 원뿔의 불변성이다. 단체 $\Delta=\lbrace x\ge 0 : \sum_i x_i=1\rbrace$ 위에서 사상 $x\mapsto Ax/\Vert Ax\Vert\_1$ 을 본다. $A\gt 0$ 이므로 이 사상은 $\Delta$ 를 그 내부로 보내고, 연속이며 $\Delta$ 가 콤팩트 볼록이므로 [Brouwer 고정점정리](brouwer-fixed-point.md)로 고정점이 있다. 고정점이 양의 고유벡터이고, 그 고윳값이 최대임은 아래 공식에서 나온다.

## Collatz–Wielandt 공식

$A\ge 0$ 이 기약이면 Perron 근이 다음 변분 표현을 갖는다.

$$\rho(A)=\max\_{x\ge 0,\thinspace x\neq 0}\thinspace \min\_{i\thinspace :\thinspace x_i\gt 0}\frac{(Ax)\_i}{x_i}$$

우변의 값을 $r(x)$ 라 하면 $r(x)x\le Ax$ 이므로 $r(x)\le\rho(A)$ 이고, $x$ 를 Perron 벡터로 두면 등호가 된다. 이 공식은 고유벡터를 모르는 채로 Perron 근의 하한을 준다.

범위를 성분이 모두 양수인 $x$ 로 좁히면 최대와 최소를 맞바꾼 표현이 나온다.

$$\rho(A)=\min\_{x\gt 0}\thinspace\max\_{i}\frac{(Ax)\_i}{x_i}$$

우변의 값을 $R(x)$ 라 하면 $Ax\le R(x)x$ 이므로 $\rho(A)\le R(x)$ 이고, 여기서도 Perron 벡터에서 등호가 된다. 두 표현을 함께 쓰면 양벡터 하나를 대입할 때마다 $r(x)\le\rho(A)\le R(x)$ 로 하한과 상한이 동시에 나온다.

## 기약 행렬의 경우

$A\ge 0$ 이 기약이면 $\rho(A)$ 가 단순 고윳값이고 양의 Perron 벡터를 갖는다. 그러나 절댓값이 $\rho(A)$ 인 고윳값이 여러 개일 수 있다. 그 개수를 $h$ 라 하면 이 고윳값들은 다음 꼴이다.

$$\rho(A)\thinspace e^{2\pi i j/h},\qquad j=0,1,\dots,h-1$$

$h$ 를 $A$ 의 **주기**라 하고, $h=1$ 인 것이 원시성과 동치다. 순환 이동 행렬은 $h=n$ 인 예이고, 그 고윳값은 $n$ 차 단위근 전체다.

## 반복 곱의 수렴

$A$ 가 원시적이고 $\rho=\rho(A)$ , $Av=\rho v$ , $w^{T}A=\rho w^{T}$ , $w^{T}v=1$ 이면 다음이 성립한다.

$$\lim\_{k\to\infty}\left(\frac{A}{\rho}\right)^{k}=v\thinspace w^{T}$$

증명의 요지는 $A/\rho$ 의 다른 고윳값이 절댓값 1 보다 작으므로 Jordan 분해에서 그 블록의 거듭제곱이 0 으로 간다는 것이다.

거듭제곱법이 이 수렴을 그대로 쓴다. 양벡터 $x_0$ 에서 시작해 $x_{k+1}=Ax_k/\Vert Ax_k\Vert$ 로 반복하면 $x_k$ 가 Perron 벡터로 간다. 절댓값이 둘째로 큰 고윳값을 $\lambda_2$ 라 하면 오차는 $(\vert\lambda_2\vert/\rho)^k$ 의 크기이고, 두 값이 가까울수록 반복 횟수가 늘어난다.

## Perron 근의 상하한

$A\ge 0$ 의 행 합을 $r_i=\sum_j a\_{ij}$ 라 하면 다음이 성립한다.

$$\min_i r_i\le\rho(A)\le\max_i r_i$$

$x$ 를 전부 1 인 벡터로 두면 $(Ax)\_i/x_i=r_i$ 이므로, $r(x)\le\rho(A)\le R(x)$ 에서 $r(x)=\min_i r_i$ 와 $R(x)=\max_i r_i$ 가 나온다. 두 부등식이 한 벡터를 대입한 결과다. 행 합이 모두 같으면 두 부등식이 등식이 되고 $\rho(A)$ 가 그 공통값이다.

# 활용

- 확률행렬은 행 합이 1 이므로 $\rho=1$ 이다. 기약이면 Perron 벡터가 유일한 정상분포이고, 원시적이면 반복 곱의 수렴이 곧 [Markov 연쇄](markov-chains.md)의 극한분포 수렴이다. 주기 $h$ 는 연쇄의 주기와 같다.
- 연결 그래프의 인접행렬은 기약인 음이 아닌 행렬이다. Perron 근이 평균 차수와 최대 차수 사이에 놓이고, Perron 벡터의 성분이 고유벡터 중심성이다. [Expander 그래프](expander-graphs.md)의 스펙트럼 간극은 둘째 고윳값과 이 Perron 근의 차이다.
- 페이지랭크는 웹 그래프의 확률행렬에 균등분포를 섞어 원시적으로 만든 뒤 Perron 벡터를 거듭제곱법으로 계산한다.
- Leslie 행렬의 Perron 근이 연령 구조를 가진 개체군의 장기 성장률이고, Perron 벡터가 안정 연령 분포다.

# 연관 문서

## 선수지식

- [고윳값](eigenvalues.md)

## 더 알아보기

- [유한형 이동](shifts-of-finite-type.md)

#linear_algebra #graph_theory #probability
