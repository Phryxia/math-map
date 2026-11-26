# Aberth 법

# 개요

**Aberth 법(Aberth method)** 은 다항식의 근 $n$ 개의 근삿값을 함께 고치되, 각 근삿값이 다른 근삿값들에서 밀려나도록 [Newton 법](newton-method.md)의 걸음을 바꾼 반복법이다. $x^3-6x^2+11x-6$ 의 근을 $0.5$, $0.8$, $3.4$ 에서 Newton 법으로 따로 찾으면 앞의 둘이 모두 근 $1$ 로 가고 근 $2$ 는 찾지 못한다. Aberth 법은 같은 초깃값에서 네 걸음 만에 세 근 $1$, $2$, $3$ 을 모두 찾는다.

# 직관

근삿값 $z_1,z_2,z_3$ 을 들고 있을 때, $z_1$ 을 고치는 데 $p$ 대신 다음 함수를 쓴다.

$$
q_1(x)=\frac{p(x)}{(x-z_2)(x-z_3)}
$$

$z_2$, $z_3$ 이 근에 가까우면 $q_1$ 은 그 두 근이 나눠져 없어진 다항식에 가깝고, $z_2$, $z_3$ 근처에서 극을 가져 값이 커진다. 그래서 $q_1$ 에 Newton 법을 쓰면 $z_1$ 은 다른 근삿값이 이미 차지한 근으로 가지 않는다.

$0.5$, $0.8$, $3.4$ 에서 시작하면 둘째 근삿값 $0.8$ 이 근 $1$ 쪽으로 가고, 첫째 근삿값은 $-1.135$ 로 밀려났다가 $2.186$, $2.000145$ 로 근 $2$ 에 간다. 넷째 걸음에 세 근삿값이 모두 부동소수점 정밀도로 $2$, $1$, $3$ 이다.

# 정의

## Aberth 반복

차수 $n$ 인 다항식 $p$ 와 서로 다른 근삿값 $z_1,\dots,z_n$ 에 대해, $N_i=p(z_i)/p'(z_i)$ 를 $z_i$ 의 Newton 걸음이라 하자. Aberth 반복은 모든 $i$ 에서 다음과 같이 고치는 것이다.[^1]

$$
z_i\mapsto z_i-\frac{N_i}{1-N_i\sum_{j\ne i}\dfrac{1}{z_i-z_j}}
$$

이 걸음은 직관 절의 $q_i(x)=p(x)/\prod_{j\ne i}(x-z_j)$ 에 쓴 Newton 걸음이다. 로그 미분으로 $q_i'/q_i=p'/p-\sum_{j\ne i}1/(x-z_j)$ 이고, 그 역수가 위 분수다.

모든 $i$ 를 옛 근삿값으로 한꺼번에 고치는 것이 Jacobi 꼴이다. $z_i$ 를 고치자마자 다음 $z_{i+1}$ 의 합에 새 값을 쓰는 것이 Gauss–Seidel 꼴이고, 같은 걸음 수에서 더 빨리 수렴한다.

# 성질

## 삼차 수렴

정리. $p$ 의 근이 모두 단순근이고 근삿값이 근에 충분히 가까우면 Aberth 반복은 삼차 수렴한다.[^2]

증명의 요지. $z_i$ 가 근 $r_i$ 에 가까우면 $q_i$ 는 $r_i$ 에서 단순근을 갖고, $z_j$ 와 $r_j$ 의 차이는 $q_i$ 를 정확한 몫 $p/\prod_{j\ne i}(x-r_j)$ 에서 그 차이만큼만 바꾼다. Newton 걸음의 오차는 자기 오차의 제곱에 다른 근삿값의 오차를 곱한 크기가 되고, 모든 오차가 같은 크기이면 세제곱이다.

직관 절의 예에서 셋째 걸음의 오차는 $1.5\times10^{-4}$, $1.7\times10^{-5}$, $1.0\times10^{-6}$ 이고 넷째 걸음에 부동소수점 정밀도에 닿는다.

## Durand–Kerner 법과의 비교

[Durand–Kerner 법](durand-kerner-method.md)은 Weierstrass 보정 $p(z_i)/\prod_{j\ne i}(z_i-z_j)$ 만큼 옮긴다. 이 보정은 $q_i(z_i)$ 이므로, Durand–Kerner 걸음은 $q_i$ 의 도함수를 $1$ 로 놓은 Newton 걸음이다. 도함수를 쓰지 않는 대신 이차 수렴한다. Aberth 법은 한 걸음에 $p'$ 를 더 계산하고 삼차 수렴한다. 두 방법 모두 [다항식 수축](polynomial-deflation.md)을 하지 않으므로 앞서 찾은 근의 오차가 다음 근으로 넘어가지 않는다.

# 활용

- 임의 정밀도 근 찾기. MPSolve 는 Aberth 반복의 Gauss–Seidel 꼴을 쓰고, 초깃값을 근의 크기의 무리에 맞춘 여러 원 위에 놓는다.[^3] 무리의 반지름은 계수의 로그로 만든 [Newton 다각형](newton-polygon.md)으로 정한다.
- 초깃값의 반지름. 근삿값을 한 원 위에 고르게 놓을 때 그 반지름은 [Cauchy 근 한계](cauchy-root-bound.md)로 정한다. 크기가 다른 근의 무리가 있으면 [Pellet 정리](pellet-theorem.md)로 무리마다 원을 따로 잡는다.
- 근 하나씩 찾는 방법과의 분담. [Jenkins–Traub 알고리즘](jenkins-traub-algorithm.md)과 [Laguerre 법](laguerre-method.md)은 근을 하나씩 찾고 수축하며, Aberth 법은 모든 근이 필요할 때 함께 고친다.

[^1]: O. Aberth, "Iteration methods for finding all zeros of a polynomial simultaneously", *Mathematics of Computation* 27 (1973), 339–344.
[^2]: L. W. Ehrlich, "A modified Newton method for polynomials", *Communications of the ACM* 10 (1967), 107–108.
[^3]: D. A. Bini, G. Fiorentino, "Design, analysis, and implementation of a multiprecision polynomial rootfinder", *Numerical Algorithms* 23 (2000), 127–173.

# 연관 문서

## 선수지식

- [Durand–Kerner 법](durand-kerner-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #complex_analysis #algebra
