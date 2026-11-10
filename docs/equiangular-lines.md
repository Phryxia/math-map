# 등각 직선

# 개요

**등각 직선(equiangular lines)** 은 원점을 지나는 직선들로서 어느 두 직선이 이루는 각도 같은 것이다. 평면에서는 정삼각형의 세 꼭짓점과 중심을 이은 직선 세 개가 서로 $60^\circ$ 를 이루고, 네 번째 직선은 놓을 수 없다. 공간에서 이런 직선을 몇 개까지 놓을 수 있는지는 직선마다 정사영 행렬을 하나씩 대응시켜, 그 행렬들이 놓이는 대칭행렬 공간의 차원과 대각합을 세어 답한다.

# 직관

3 차원 공간에서는 정이십면체의 마주 보는 꼭짓점을 이은 직선 여섯 개가 등각이다. $\varphi=(1+\sqrt5)/2$ 이고 $\varphi^2=\varphi+1$ 일 때 방향 벡터

$$
(0,1,\varphi),\ (0,1,-\varphi),\ (1,\varphi,0),\ (1,-\varphi,0),\ (\varphi,0,1),\ (-\varphi,0,1)
$$

은 길이의 제곱이 $1+\varphi^2=\varphi+2$ 이고, 어느 두 벡터의 내적도 $\varphi$ 나 $-\varphi$ 다. 예를 들어 첫째와 둘째의 내적은 $1-\varphi^2=-\varphi$ 다. 길이를 $1$ 로 맞추면 내적의 절댓값은 $\varphi/(\varphi+2)=1/\sqrt5$ 다.

일곱 번째 직선을 놓을 수 없는 이유는 행렬로 센다. 단위 방향 벡터 $v_i$ 마다 그 직선으로의 정사영 행렬 $P_i=v_iv_i^{\mathsf T}$ 를 만든다. $P_i$ 는 $3\times 3$ 대칭[행렬](matrices.md)이고, 대칭행렬은 대각과 그 위의 성분 $6$ 개로 정해지므로 $3\times 3$ 대칭행렬 전체는 $6$ 차원 [벡터 공간](vector-spaces.md)이다. 행렬 $P_iP_j$ 의 대각합은 $\langle v_i,v_j\rangle^2$ 이므로, 직선 $N$ 개가 서로 각 $\theta$ 를 이루면 $\mathrm{tr}(P_iP_j)$ 는 $i=j$ 에서 $1$, $i\ne j$ 에서 $\alpha^2=\cos^2\theta$ 다.

$\sum_ic_iP_i=0$ 이라 하자. $P_j$ 를 곱하고 대각합을 취하면 $(1-\alpha^2)c_j+\alpha^2\sum_ic_i=0$ 이 모든 $j$ 에서 성립한다. 그러면 $c_j$ 가 모두 같고, $j$ 에 대해 더하면 $\sum_ic_i=0$ 이므로 $c_j=0$ 이다. $P_1,\dots,P_N$ 은 일차독립이고 $N\le 6$ 이다. 정이십면체의 여섯 직선이 이 상한을 달성한다.

# 정의

$\mathbb R^d$ 의 원점을 지나는 직선 $N$ 개가 있고, 단위 방향 벡터 $v_1,\dots,v_N$ 이 어떤 $0\le\alpha\lt 1$ 에 대해

$$
\vert\langle v_i,v_j\rangle\vert=\alpha\qquad(i\ne j)
$$

를 만족하면 이 직선들을 각 $\arccos\alpha$ 의 **등각 직선** 이라 한다[^1]. $\mathbb R^d$ 의 등각 직선의 최대 개수를 $N(d)$, 각을 $\arccos\alpha$ 로 고정했을 때의 최대 개수를 $N\_\alpha(d)$ 로 적는다. 직관 절에서 $N(3)\ge 6$ 이다.

$S\_{ij}=\langle v_i,v_j\rangle/\alpha$ ($i\ne j$), $S\_{ii}=0$ 인 $N\times N$ 행렬 $S$ 를 이 직선들의 **Seidel 행렬(Seidel matrix)** 이라 한다. 성분은 대각에서 $0$, 나머지에서 $\pm 1$ 이고, $v_i$ 들의 Gram 행렬은 $I+\alpha S$ 다.

$v_i$ 를 $-v_i$ 로 바꾸어도 직선은 같고 $S$ 의 $i$ 행과 $i$ 열의 부호가 바뀐다. 이 조작을 Seidel 전환(Seidel switching)이라 한다. 직관 절의 여섯 직선의 Seidel 행렬은 [회의 행렬](conference-matrices.md) 문서의 차수 $6$ 의 대칭 회의 행렬과 전환으로 같다.

# 성질

## Gram 행렬 판정

대각이 $0$ 이고 나머지가 $\pm 1$ 인 대칭행렬 $S$ 에 대해, $S$ 를 Seidel 행렬로 갖는 $\mathbb R^d$ 의 각 $\arccos\alpha$ 인 등각 직선이 있는 것은 $S$ 의 가장 작은 [고윳값](eigenvalues.md)이 $-1/\alpha$ 이상이고 $I+\alpha S$ 의 계수가 $d$ 이하인 것과 동치다. $I+\alpha S$ 가 양의 준정부호이면 [스펙트럼 정리](spectral-theorem.md)로 $I+\alpha S=B^{\mathsf T}B$ 인 $d\times N$ 행렬 $B$ 를 얻고, $B$ 의 열이 $v_i$ 다. 따라서 $N\gt d$ 이면 $-1/\alpha$ 는 $S$ 의 고윳값이고 중복도가 $N-d$ 이상이다.

차수 $6$ 의 대칭 회의 행렬 $C$ 는 $C^2=5I$ 이므로 고윳값이 $\pm\sqrt5$ 이고 각각 중복도가 $3$ 이다. $I+C/\sqrt5$ 의 계수가 $3$ 이어서 직관 절의 여섯 직선이 다시 나온다.

## 절대 상한

$$
N(d)\le\frac{d(d+1)}{2}
$$

이 부등식을 Gerzon 상한(Gerzon bound)이라 한다[^1]. 직관 절의 논증에서 $3$ 을 $d$ 로 바꾸면 된다. $d\times d$ 대칭행렬 공간의 차원이 $d(d+1)/2$ 다. 등호는 $d=2,3,7,23$ 에서 성립하고 $N(2)=3$, $N(3)=6$, $N(7)=28$, $N(23)=276$ 이다[^1].

## 상대 상한

$d\alpha^2\lt 1$ 이면

$$
N\_\alpha(d)\le\frac{d(1-\alpha^2)}{1-d\alpha^2}
$$

이다[^1]. $M=\sum_iP_i$ 로 두면 $\mathrm{tr}M=N$ 이고 $\mathrm{tr}M^2=N+N(N-1)\alpha^2$ 이다. $M$ 의 고윳값 $d$ 개에 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)을 쓰면 $\mathrm{tr}M^2\ge(\mathrm{tr}M)^2/d$ 이고, 정리하면 위 부등식이다. 등호는 $M=(N/d)I$ 일 때 성립한다. 직관 절의 $d=3$, $\alpha^2=1/5$ 에서 우변은 $3\cdot\frac45/\frac25=6$ 이다.

## 각의 홀수 조건

$N\gt 2d$ 이면 $1/\alpha$ 는 홀수인 정수다[^1]. Gram 행렬 판정에서 $-1/\alpha$ 는 정수 행렬 $S$ 의 고윳값이고 중복도가 $N/2$ 보다 크다. 그 켤레 대수적 수도 같은 중복도의 고윳값이므로 $-1/\alpha$ 는 유리수이고, 정수 계수 모닉 다항식의 근이므로 정수다.

$1/\alpha$ 가 짝수이면 $S+(1/\alpha)I$ 는 법 $2$ 로 $J+I$ 와 같고, $J$ 는 성분이 모두 $1$ 인 행렬이다. $J+I$ 의 법 $2$ 계수는 $N-1$ 이상이므로 $S+(1/\alpha)I$ 의 계수도 $N-1$ 이상이다. 이것은 계수 $d$ 이하와 어긋난다.

## 작은 차원의 값

$$
N(2)=3,\quad N(3)=N(4)=6,\quad N(5)=10,\quad N(6)=16,\quad N(7)=28
$$

이다[^1]. $N(5)=10$ 은 Petersen 그래프의 Seidel 행렬이 달성하고, 그 계산은 [강정칙 그래프](strongly-regular-graphs.md) 문서에 있다.

# 활용

- 신호의 표현. $N$ 개의 단위 벡터에서 내적의 절댓값의 최댓값은 $\sqrt{(N-d)/(d(N-1))}$ 이상이다. 상대 상한을 $\alpha^2$ 에 대해 푼 것이고 Welch 상한(Welch bound)이라 한다. 등호를 달성하는 벡터족을 등각 단단한 프레임(equiangular tight frame)이라 하고, [압축 센싱](compressed-sensing.md)의 측정 행렬에서 열 사이의 내적을 작게 하는 데 쓴다.
- 조합적 구성. 대칭 회의 행렬, Petersen 그래프 같은 강정칙 그래프의 Seidel 행렬에서 등각 직선이 나온다.
- 양자 측정. 복소 공간 $\mathbb C^d$ 에서 같은 문제의 절대 상한은 $d^2$ 이고, 이를 달성하는 직선족이 대칭 정보 완전 측정(symmetric informationally complete positive operator-valued measure, SIC-POVM)이다. 모든 $d$ 에서 이것이 있다는 진술이 Zauner 추측(Zauner's conjecture)이다.

[^1]: P. W. H. Lemmens, J. J. Seidel, "Equiangular lines", *Journal of Algebra* 24 (1973), 494–512.

# 연관 문서

## 선수지식

- [스펙트럼 정리](spectral-theorem.md)
- [회의 행렬](conference-matrices.md)

## 더 알아보기

- [두 그래프](two-graphs.md)

#combinatorics #linear_algebra #signal_processing
