# Wold 분해

# 개요

**Wold 분해(Wold decomposition)** 는 길이를 보존하는 작용소가 작용하는 공간을, 작용소가 유니터리인 부분과 한 칸씩 미는 부분으로 나누는 정리다. 수열 $(x_1,x_2,x_3,\dots)$ 을 $(x_1,0,x_2,x_3,\dots)$ 으로 보내는 작용소는 길이를 보존하지만, 첫 좌표는 제자리에 두고 나머지 좌표는 한 칸씩 민다. 한 식으로 적힌 작용소에서 이 두 동작을 가르려면 치역에 들지 않는 방향을 찾아 그 방향을 계속 밀어 본다. Wold 분해는 그렇게 밀려 나가는 방향들과 끝까지 남는 방향들로 공간을 나눈다.

# 직관

$\ell^2$ 위의 작용소 $V$ 를 다음과 같이 정한다.

$$
V(x_1,x_2,x_3,x_4,\dots)=(x_1,0,x_2,x_3,x_4,\dots)
$$

좌표를 지우지 않고 자리만 옮기므로 $\Vert Vx\Vert=\Vert x\Vert$ 다. 표준 기저로는 $Ve_1=e_1$ 이고, $n\ge 2$ 에서 $Ve_n=e_{n+1}$ 이다.

$V$ 는 유니터리가 아니다. 치역의 수열은 둘째 좌표가 모두 $0$ 이어서 $e_2$ 가 치역에 들지 않는다. [부분 등거리](partial-isometries.md) 문서의 오른쪽 이동 $S$ 도 아니다. $S$ 는 $0$ 이 아닌 벡터를 제자리에 두지 않는데 $V$ 는 $e_1$ 을 제자리에 둔다.

두 동작을 가르려고 치역에 들지 않는 방향에서 시작한다. 치역의 직교여공간은 $e_2$ 가 생성한다. $e_2$ 에 $V$ 를 거듭 적용하면 $e_3, e_4, e_5,\dots$ 가 나오고, 이 벡터들은 서로 직교한다. $e_2, e_3, e_4,\dots$ 가 생성하는 닫힌 부분공간에서 $V$ 는 오른쪽 이동과 같다.

남은 것은 $e_1$ 이 생성하는 직선이고, 이 직선 위에서 $V$ 는 항등이다. 직선 위의 벡터는 모든 $n$ 에서 $V^n$ 의 치역에 들어 있다. $e_k$ $(k\ge 2)$ 성분이 $0$ 이 아닌 벡터는 $V^{k-1}$ 의 치역에 들지 않는다.

# 정의

[Hilbert 공간](hilbert-spaces.md) $H$ 위의 [유계 작용소](bounded-operators.md) $V$ 가 모든 $x$ 에서 $\Vert Vx\Vert=\Vert x\Vert$ 를 만족하면 **등거리 작용소(isometry)** 라 한다. 처음 공간이 $H$ 전체인 부분 등거리이고, $V^\ast V=I$ 를 만족한다. 직관 절의 $V$ 와 오른쪽 이동 $S$ 가 등거리 작용소다.

닫힌 부분공간 $M$ 과 그 직교여공간 $M^\perp$ 가 둘 다 $V$ 에 대해 닫혀 있으면 $M$ 을 $V$ 의 **축소 부분공간(reducing subspace)** 이라 한다. 직관 절에서 $e_1$ 의 생성은 $V$ 의 축소 부분공간이다. $Ve_1=e_1$ 이고, $V$ 는 $e_2,e_3,\dots$ 의 생성을 자기 안으로 보낸다.

닫힌 부분공간 $L$ 이 서로 다른 $n,m\ge 0$ 에서 $V^nL\perp V^mL$ 을 만족하면 $L$ 을 $V$ 의 **wandering subspace** 라 한다. 직관 절에서 $V^ne_2=e_{n+2}$ 가 서로 직교하므로 $e_2$ 의 생성은 $V$ 의 wandering subspace 다.

$K$ 를 차원이 $m$ 인 Hilbert 공간이라 하자. $\sum\_n\Vert k_n\Vert^2$ 이 유한한 $K$ 값 수열 $(k_0,k_1,k_2,\dots)$ 전체의 공간에서 다음 작용소를 **중복도(multiplicity)** $m$ 인 **이동 작용소(unilateral shift)** 라 한다.

$$
S_K(k_0,k_1,k_2,\dots)=(0,k_0,k_1,k_2,\dots)
$$

$m=1$ 이면 오른쪽 이동 $S$ 다. $\ell^2$ 에서 $e_n\mapsto e_{n+2}$ 로 정한 작용소는 홀수 번째 좌표와 짝수 번째 좌표를 따로 한 칸씩 미는 중복도 $2$ 인 이동 작용소다.

# 성질

## Wold 분해 정리

$V$ 가 $H$ 위의 등거리 작용소이고 $L=H\ominus VH=\ker V^\ast$ 이면 다음이 성립한다[^1].

$$
H=H_u\oplus\bigoplus_{n\ge 0}V^nL,\qquad H_u=\bigcap_{n\ge 0}V^nH
$$

두 부분은 $V$ 의 축소 부분공간이다. $V$ 는 $H_u$ 위에서 유니터리이고, $\bigoplus_{n}V^nL$ 위에서 중복도 $\dim L$ 인 이동 작용소와 유니터리 동치(unitary equivalence)다. 곧 $\bigoplus_{n}V^nL$ 에서 $\ell^2(K)$ 로 가는 유니터리 $W$ 가 존재해, $V$ 를 그 부분에 제한한 것이 $W^\ast S_KW$ 다.

$H_u$ 는 $V$ 가 유니터리로 작용하는 축소 부분공간 가운데 가장 큰 것이므로 분해는 유일하다. 직관 절의 $V$ 에서는 $L$ 이 $e_2$ 의 생성이고 $H_u$ 가 $e_1$ 의 생성이다.

증명의 요지. $V^\ast V=I$ 이므로 $n\gt m$ 이고 $x,y\in L$ 이면 $\langle V^nx,V^my\rangle=\langle V^{n-m}x,y\rangle$ 이고, $V^{n-m}x\in VH$ 는 $L$ 과 직교하므로 이 값은 $0$ 이다. 따라서 $L$ 은 wandering subspace 다. 또 $VH$ 가 닫혀 있어 $H=L\oplus VH$ 이고, 양변에 $V^k$ 를 적용하면 $V^kH=V^kL\oplus V^{k+1}H$ 다. 이것을 이어 붙이면 다음이 나온다.

$$
H=L\oplus VL\oplus\cdots\oplus V^{n-1}L\oplus V^nH
$$

$n\to\infty$ 로 보내면 $\bigoplus_n V^nL$ 의 직교여공간이 $H_u$ 다. $V$ 가 단사이므로 $V(H_u)=\bigcap_n V^{n+1}H=H_u$ 이고, $V$ 는 $H_u$ 위에서 전사인 등거리, 곧 유니터리다.

## 순수 등거리의 판정

$H_u=\lbrace 0\rbrace$ 인 등거리 작용소를 **순수(pure)** 하다고 한다. $V$ 가 순수한 것은 모든 $x$ 에서 $\Vert V^{\ast n}x\Vert\to 0$ 인 것과 동치다. $V^nV^{\ast n}$ 은 $V^nH$ 로의 사영이므로 $\Vert V^{\ast n}x\Vert$ 는 $x$ 를 $V^nH$ 로 사영한 길이이고, 이 길이는 $x$ 를 $H_u$ 로 사영한 길이로 수렴한다. 직관 절의 $V$ 는 $V^{\ast n}e_1=e_1$ 이라 순수하지 않다.

## 유니터리 동치에 의한 분류

두 등거리 작용소가 유니터리 동치인 것은 두 유니터리 부분이 유니터리 동치이고 $\dim\ker V^\ast$ 가 같은 것과 동치다. 등거리 작용소는 유니터리 작용소 하나와 [기수](cardinality.md) 하나로 정해진다.

## Fredholm 지표

$\dim\ker V^\ast=m$ 이 유한하면 $V$ 는 핵이 $0$ 이고 여핵이 $m$ 차원인 [Fredholm 작용소](fredholm-operators.md)이고, 지표는 $-m$ 이다. 직관 절의 $V$ 는 지표가 $-1$ 이고, 오른쪽 이동과 지표가 같지만 유니터리 동치가 아니다.

# 활용

- [Hardy 공간](hardy-spaces.md)의 Beurling 정리(Beurling's theorem). $H^2$ 에서 $z$ 를 곱하는 작용소는 기저 $1,z,z^2,\dots$ 에 대한 중복도 $1$ 인 이동 작용소다. $z$ 곱에 닫힌 부분공간 $M$ 에 이 작용소를 제한하면 순수 등거리이고, wandering subspace $M\ominus zM$ 이 1 차원이어서 이것을 생성하는 내부 함수(inner function) $u$ 로 $M=uH^2$ 가 나온다.
- 유니터리 확장과 [von Neumann 부등식](von-neumann-inequality.md). Wold 분해의 이동 부분을 $\ell^2(\mathbb Z)$ 의 양방향 이동으로 늘이면 모든 등거리 작용소가 유니터리 작용소로 확장된다. 노름이 $1$ 이하인 축약 작용소(contraction)의 유니터리 팽창(unitary dilation)을 이 확장으로 구성하고, von Neumann 부등식이 그 팽창에서 유도된다.
- 시계열의 Wold 정리(Wold's theorem)[^2]. [Wiener 필터](wiener-filter.md) 문서의 광의 정상 과정 $x\lbrack n\rbrack$ 은 과거 값으로 완전히 예측되는 결정적 부분 $d\lbrack n\rbrack$ 과 한 단계 예측 오차 $\varepsilon\lbrack n\rbrack$ 의 이동평균(moving average)으로 나뉜다. 예측 오차들이 시간 이동에 대한 wandering subspace 를 이루고, 결정적 부분이 $H_u$ 에 해당한다. 분해는 다음과 같다.

$$
x\lbrack n\rbrack=\sum_{k\ge 0}b_k\thinspace\varepsilon\lbrack n-k\rbrack+d\lbrack n\rbrack
$$

- Coburn 정리(Coburn's theorem). 유니터리가 아닌 등거리 작용소 하나가 생성하는 [C 스타 대수](c-star-algebras.md)는 그 등거리 작용소에 관계없이 오른쪽 이동이 생성하는 Toeplitz 대수(Toeplitz algebra)와 동형이다. 증명에서 Wold 분해로 이동 부분을 떼어 낸다.

[^1]: B. Sz.-Nagy, C. Foias, H. Bercovici, L. Kérchy, *Harmonic Analysis of Operators on Hilbert Space*, 2nd ed., Springer, 2010, Theorem I.1.1.
[^2]: H. Wold, *A Study in the Analysis of Stationary Time Series*, Almqvist & Wiksell, 1938.

# 연관 문서

## 선수지식

- [부분 등거리](partial-isometries.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #linear_algebra #statistics
