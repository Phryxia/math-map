# max-plus 대수

# 개요

**max-plus 대수(max-plus algebra)** 는 덧셈 자리에 최댓값을, 곱셈 자리에 덧셈을 놓고 행렬 계산을 하는 체계다. 두 역을 오가는 열차가 있고, 각 역의 다음 출발이 자기 역의 앞 출발과 상대 역에서 오는 열차의 도착 가운데 늦은 쪽을 기다린다고 하자. 출발 시각은 "더해서 최댓값을 취하는" 식으로 이어지고, 이 식은 max-plus 대수에서 행렬과 벡터의 곱 하나다. 열차가 장기적으로 몇 분마다 떠나는지는 그 행렬의 고윳값으로 계산한다.

# 직관

역 1 의 $k$ 번째 출발 시각을 $x\_1(k)$, 역 2 의 것을 $x\_2(k)$ 라 한다. 역 1 은 자기 역의 앞 열차가 떠난 뒤 $2$ 분, 역 2 에서 $5$ 분 걸려 오는 열차를 기다리고, 역 2 는 두 경우 모두 $3$ 분을 기다린다. 다음 출발 시각은 다음과 같다.

$$
\begin{aligned}
x\_1(k+1)&=\max\bigl(x\_1(k)+2,\thinspace x\_2(k)+5\bigr)\cr
x\_2(k+1)&=\max\bigl(x\_1(k)+3,\thinspace x\_2(k)+3\bigr)
\end{aligned}
$$

$x(0)=(0,0)$ 에서 시작하면 $x(1)=(5,3)$, $x(2)=(8,8)$, $x(3)=(13,11)$, $x(4)=(16,16)$, $x(5)=(21,19)$ 이다. 두 걸음마다 두 역의 출발 시각이 정확히 $8$ 분씩 늦어진다. 평균하면 열차는 $4$ 분마다 떠난다.

$4$ 는 기다림이 돌아오는 고리에서 나온다. 역 1 에서 역 2 로 가는 $3$ 분과 역 2 에서 역 1 로 오는 $5$ 분을 합치면 두 걸음에 $8$ 분이고, 걸음당 $4$ 분이다. 역 1 의 자기 고리는 걸음당 $2$ 분, 역 2 의 것은 $3$ 분이므로 가장 느린 고리가 $4$ 분이다. 열차의 주기는 가장 느린 고리의 평균으로 정해진다.

# 정의

$\mathbb R\_{\max}=\mathbb R\cup\lbrace-\infty\rbrace$ 에 다음 두 연산을 둔 것을 **max-plus 대수** 라 한다.

$$
a\oplus b=\max(a,b),\qquad a\otimes b=a+b
$$

$-\infty$ 가 $\oplus$ 의 항등원이고 $0$ 이 $\otimes$ 의 항등원이다. $a\oplus a=a$ 이므로 $\oplus$ 에는 역원이 없다. 두 연산은 결합법칙, 교환법칙, 분배법칙 $a\otimes(b\oplus c)=(a\otimes b)\oplus(a\otimes c)$ 를 만족한다.

행렬의 곱은 보통의 정의에서 합과 곱을 바꿔 쓴다.

$$
(A\otimes B)\_{ij}=\max\_k\bigl(A\_{ik}+B\_{kj}\bigr)
$$

직관 절의 식은 $x(k+1)=A\otimes x(k)$ 이고 $A$ 는 다음과 같다.

$$
A=\begin{pmatrix}2&5\cr 3&3\end{pmatrix}
$$

$A$ 의 **그래프** 는 $A\_{ji}\ne-\infty$ 일 때 $i$ 에서 $j$ 로 무게 $A\_{ji}$ 인 간선을 둔 방향 그래프다. 그래프가 강하게 연결되어 있으면 $A$ 를 **기약(irreducible)** 이라 한다. 유한한 벡터 $x$ 와 수 $\lambda$ 가 $A\otimes x=\lambda\otimes x$ 를 만족하면 $\lambda$ 를 $A$ 의 **고윳값**, $x$ 를 **고유벡터** 라 한다. 직관 절의 $A$ 에서 $x=(0,-1)$ 은 $A\otimes x=(4,3)=4\otimes x$ 이므로 고윳값 $4$ 의 고유벡터다.

# 성질

## 거듭제곱과 걸음

$A^{\otimes k}$ 의 $(i,j)$ 성분은 그래프에서 $j$ 에서 $i$ 로 가는 길이 $k$ 인 걸음의 무게 합 가운데 가장 큰 값이다. 곱의 정의를 $k$ 번 펼치면 중간 정점을 고르는 모든 경우에 대한 최댓값이 되기 때문이다. $\max$ 를 $\min$ 으로 바꾼 min-plus 대수에서 같은 계산이 [최단 경로](shortest-paths.md)의 Bellman–Ford 반복이다.

## 고윳값 정리

정리. 기약인 $A$ 는 고윳값을 하나만 갖고, 그 값은 그래프의 순환들의 평균 무게 가운데 가장 큰 값이다[^1].

증명의 요지. $A\otimes x=\lambda\otimes x$ 이면 모든 간선 $j\to i$ 에서 $A\_{ij}+x\_j\le\lambda+x\_i$ 이다. 순환을 따라 더하면 $x$ 가 지워져 순환의 무게가 길이의 $\lambda$ 배 이하다. 각 $i$ 에서 등호를 이루는 $j$ 를 따라가면 등호만으로 된 순환이 생기므로 그 순환의 평균이 $\lambda$ 다.

직관 절의 $A$ 에서 순환의 평균은 $2$, $3$, $(5+3)/2=4$ 이므로 고윳값은 $4$ 다. 가장 큰 평균을 찾는 계산은 [최소 평균 순환](minimum-mean-cycle.md)의 Karp 공식에서 무게의 부호를 바꾼 것이다.

## 주기성 정리

정리. 기약인 $A$ 의 고윳값이 $\lambda$ 이면 정수 $c\ge 1$ 과 $K$ 가 있어 $k\ge K$ 에서 다음이 성립한다[^2].

$$
A^{\otimes(k+c)}=(c\lambda)\otimes A^{\otimes k}
$$

그러므로 $x(k)=A^{\otimes k}\otimes x(0)$ 은 처음 몇 걸음 뒤에 $c$ 걸음마다 $c\lambda$ 씩 늘어나고, $x(k)/k\to\lambda$ 이다. 직관 절에서는 $c=2$, $c\lambda=8$ 이고 $x(k)-4k$ 가 $(0,0)$ 과 $(1,-1)$ 을 번갈아 오간다. 평균이 $\lambda$ 인 순환들이 이루는 부분그래프가 강하게 연결되어 있으면, 그 순환 길이들의 최대공약수가 가장 작은 $c$ 다[^2].

# 활용

- 열차와 생산 일정. 각 작업이 앞 작업들이 끝나기를 기다리는 주기적 일정은 $x(k+1)=A\otimes x(k)$ 꼴이고, 고윳값이 처리 주기, 평균이 $\lambda$ 인 순환이 주기를 정하는 병목이다. 네덜란드 철도의 시간표 분석이 이 계산을 썼다[^3].
- 이산 사건 시스템. 동기화만 있는 Petri 망(event graph)의 발화 시각이 max-plus 선형 식을 따른다.
- 열대 기하(tropical geometry). 다항식의 합과 곱을 max-plus 연산으로 바꾼 열대 다항식은 조각마다 일차인 함수이고, 그 함수가 꺾이는 점들이 열대 초곡면이다. 다항식 아이디얼의 열대 다양체는 [Gröbner 부채](groebner-fans.md)의 부분 부채로 계산된다.

[^1]: R. A. Cuninghame-Green, *Minimax Algebra*, Lecture Notes in Economics and Mathematical Systems 166, Springer (1979).
[^2]: G. Cohen, D. Dubois, J. P. Quadrat, M. Viot, "A linear-system-theoretic view of discrete-event processes and its use for performance evaluation in manufacturing", *IEEE Transactions on Automatic Control* 30 (1985), 210–220.
[^3]: B. Heidergott, G. J. Olsder, J. van der Woude, *Max Plus at Work*, Princeton University Press (2006).

# 연관 문서

## 선수지식

- [최소 평균 순환](minimum-mean-cycle.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #linear_algebra #graph_theory #optimization
