# 교대 사영

# 개요

**교대 사영(alternating projections)** 은 두 집합에 함께 속하는 점을 찾으려고, 한 집합에서 가장 가까운 점으로 옮기고 다시 다른 집합에서 가장 가까운 점으로 옮기는 일을 되풀이하는 방법이다. 평면에서 $x$ 축과 직선 $y=x$ 의 교점을 찾는다면, 점 $(4,4)$ 를 $x$ 축으로 내리고, 그 점을 직선 $y=x$ 로 올리고, 다시 $x$ 축으로 내린다. 두 집합 각각으로 옮기는 것은 쉽지만 교집합으로 바로 옮기는 것은 어려울 때, 쉬운 두 사영만으로 교점에 다가간다.

# 직관

$U$ 를 $x$ 축, $V$ 를 직선 $y=x$ 라 한다. 점을 $U$ 의 가장 가까운 점으로 옮기는 것은 $y$ 좌표를 $0$ 으로 바꾸는 것이고, $V$ 의 가장 가까운 점으로 옮기는 것은 두 좌표를 평균으로 바꾸는 것이다.

$(4,4)$ 에서 시작하면 $U$ 로 $(4,0)$ , $V$ 로 $(2,2)$ , $U$ 로 $(2,0)$ , $V$ 로 $(1,1)$ 이다. $V$ 위의 점이 한 바퀴마다 $(4,4)$ , $(2,2)$ , $(1,1),\dots$ 로 원점까지의 거리가 절반이 되어, 교점 $(0,0)$ 으로 간다.

절반이라는 비율은 두 직선이 이루는 각 $45^\circ$ 로 정해진다. 한 직선 위의 점을 다른 직선으로 옮기면 원점까지의 거리에 그 각의 코사인 $\cos 45^\circ=1/\sqrt2$ 가 곱해지고, 한 바퀴에 두 번 옮기므로 $1/2$ 이다. 두 직선이 이루는 각이 작을수록 비율이 $1$ 에 가까워져 느려진다.

# 정의

$H$ 가 [Hilbert 공간](hilbert-spaces.md)이고 $C$ , $D$ 가 공집합이 아닌 닫힌 볼록집합이라 하자. 최근접점 정리로 각 $x$ 에 대해 $C$ 에서 $x$ 와 가장 가까운 점이 하나뿐이고, 이 점을 $P_Cx$ 로 쓴다. **교대 사영** 은 $x_0\in H$ 에서 시작하는 다음 반복이다.

$$
x_{k+1}=P_DP_Cx_k
$$

직관 절의 예는 $H=\mathbb R^2$ , $C=U$ , $D=V$ , $x_0=(4,4)$ 인 경우다. $C$ 와 $D$ 가 닫힌 부분공간이면 $P_C$ 와 $P_D$ 는 정사영이다.

## Friedrichs 각

닫힌 부분공간 $U$ , $V$ 와 $W=U\cap V$ 에 대해 다음 수 $c(U,V)$ 를 $U$ 와 $V$ 의 **Friedrichs 각(Friedrichs angle)** 의 코사인이라 한다.

$$
c(U,V)=\sup\lbrace\vert\langle u,v\rangle\vert:u\in U\cap W^\perp,\thinspace v\in V\cap W^\perp,\thinspace \Vert u\Vert\le 1,\thinspace \Vert v\Vert\le 1\rbrace
$$

교집합에 수직인 부분만 보고 잰 두 공간 사이의 가장 작은 각이다. 직관 절의 두 직선은 $W=\lbrace 0\rbrace$ 이고 단위벡터 $(1,0)$ 과 $(1,1)/\sqrt2$ 의 내적이 $1/\sqrt2$ 이므로 $c=\cos 45^\circ$ 다.

# 성질

## von Neumann 정리

정리. $U$ , $V$ 가 Hilbert 공간의 닫힌 부분공간이면 모든 $x$ 에서 다음이 성립한다[^1].

$$
\lim_{n\to\infty}(P_VP_U)^nx=P_{U\cap V}\thinspace x
$$

증명의 요지. $S=P_VP_UP_V$ 는 자기수반이고 $0\le S\le I$ 이다. [스펙트럼 정리](spectral-theorem.md)로 $S^n$ 은 스펙트럼 위의 함수 $t^n$ 에 대응하고, $t^n$ 이 $\lbrack 0,1\rbrack$ 에서 $t=1$ 의 지시함수로 점마다 수렴하므로 $S^nx$ 는 $Sx=x$ 인 점들로의 정사영으로 수렴한다. $Sx=x$ 이면 $\Vert x\Vert\le\Vert P_UP_Vx\Vert\le\Vert P_Vx\Vert\le\Vert x\Vert$ 에서 등호가 성립해야 하므로 $x\in V$ 이고 $x\in U$ 다. 그래서 $S^n\to P_{U\cap V}$ 이고, $(P_VP_U)^{n+1}=S^nP_U$ 와 $P_{U\cap V}P_U=P_{U\cap V}$ 로 결론이 나온다.

극한이 교집합의 아무 점이 아니라 $x$ 에서 가장 가까운 교집합의 점이다. 직관 절에서 $(4,4)$ 의 극한 $(0,0)$ 이 $\lbrace 0\rbrace$ 으로의 사영이다.

## 수렴률

정리. 닫힌 부분공간 $U$ , $V$ 와 $c=c(U,V)$ 에 대해 다음이 성립한다[^1].

$$
\Vert(P_VP_U)^n-P_{U\cap V}\Vert=c^{2n-1}
$$

$c\lt 1$ 이면 비율 $c^2$ 로 선형 수렴한다. 유한차원에서는 언제나 $c\lt 1$ 이다. 무한차원에서는 $U+V$ 가 닫혀 있는 것과 $c\lt 1$ 이 동치이고, $c=1$ 이면 수렴이 얼마든지 느린 시작점이 있다. 직관 절에서 $c^2=1/2$ 이 한 바퀴의 비율이다.

## 볼록집합에서의 수렴

정리. $H=\mathbb R^n$ 이고 $C\cap D$ 가 공집합이 아니면, 교대 사영은 $C\cap D$ 의 한 점으로 수렴한다[^2].

증명의 요지. 최근접점의 특징으로 $c\in C$ 에 대해 $\langle x-P_Cx,\thinspace c-P_Cx\rangle\le 0$ 이고, 그래서 $\Vert x-c\Vert^2\ge\Vert P_Cx-c\Vert^2+\Vert x-P_Cx\Vert^2$ 이다. $c\in C\cap D$ 로 두면 $x_k$ 에서 $c$ 까지의 거리가 줄고, 걸음의 제곱합이 유한하다. 유계인 열의 집적점은 두 집합 모두에 있고, 그 점까지의 거리도 줄므로 열 전체가 그 점으로 수렴한다.

부분공간과 달리 극한이 $x_0$ 에서 가장 가까운 교집합의 점이라는 보장은 없다. 가장 가까운 점을 얻으려면 걸음마다 보정 항을 더하는 [Dykstra 알고리즘](dykstra-algorithm.md)을 쓴다. 무한차원 Hilbert 공간에서는 약수렴만 성립하고, 노름으로 수렴하지 않는 예가 있다[^3]. $C\cap D$ 가 비어 있으면 $P_Cx_k$ 와 $x_k$ 가 두 집합 사이의 가장 가까운 점의 쌍에 다가간다(그런 쌍이 있을 때).

# 활용

- [Kaczmarz 방법](kaczmarz-method.md). 연립일차방정식 $Ax=b$ 의 해를 식 하나가 정하는 초평면 $\lbrace x:\langle a_i,x\rangle=b_i\rbrace$ 로의 사영을 차례로 써서 찾는다. 사영은 $x+\frac{b_i-\langle a_i,x\rangle}{\Vert a_i\Vert^2}a_i$ 이고, 단층촬영의 영상 복원에서 대수적 재구성 기법(algebraic reconstruction technique)이라는 이름으로 쓴다.
- [Sinkhorn 알고리즘](sinkhorn.md). 행의 합을 맞추는 단계와 열의 합을 맞추는 단계가 두 아핀집합으로의 KL(Kullback–Leibler) 사영이고, 거리를 [Bregman divergence](bregman-divergence.md)로 바꾼 교대 사영이다.
- 가장 가까운 상관행렬. 주어진 대칭행렬에 가장 가까운, 반정부호이고 대각 성분이 $1$ 인 행렬을 반정부호 원뿔로의 사영과 대각을 $1$ 로 바꾸는 사영을 번갈아 써서 구한다. 가장 가까운 점이 필요하므로 Dykstra 보정을 붙인다[^4].
- [Douglas–Rachford 분할](douglas-rachford-splitting.md). 같은 교점 문제를 사영 대신 반사로 풀면 부분공간에서 비율이 $c^2$ 에서 $c$ 로 바뀐다.

[^1]: F. Deutsch, *Best Approximation in Inner Product Spaces*, Springer, 2001, 9 장. von Neumann 의 원 증명은 J. von Neumann, *Functional Operators, Vol. II*, Princeton University Press, 1950, 정리 13.7. 수렴률의 등식은 S. Kayalar and H. L. Weinert, *Error bounds for the method of alternating projections*, Mathematics of Control, Signals, and Systems 1, 1988, 43–59.
[^2]: W. Cheney and A. A. Goldstein, *Proximity maps for convex sets*, Proceedings of the American Mathematical Society 10, 1959, 448–450.
[^3]: H. S. Hundal, *An alternating projection that does not converge in norm*, Nonlinear Analysis 57, 2004, 35–61.
[^4]: N. J. Higham, *Computing the nearest correlation matrix—a problem from finance*, IMA Journal of Numerical Analysis 22, 2002, 329–343.

# 연관 문서

## 선수지식

- [Hilbert 공간](hilbert-spaces.md)

## 더 알아보기

- [Halperin 정리](halperin-theorem.md)
- [Kaczmarz 방법](kaczmarz-method.md)
- [Dykstra 알고리즘](dykstra-algorithm.md)

#functional_analysis #optimization #linear_algebra
