# 단단한 육각형 모형

# 개요

**단단한 육각형 모형(hard hexagon model)** 은 삼각 격자의 칸에 입자를 놓되 이웃한 두 칸에는 함께 놓지 않는 배치들의 확률 모형이다. 평면에 흡착된 분자가 너무 커서 바로 옆 칸에 다른 분자가 올 수 없는 상황이 이 꼴이다. 입자를 넣으려는 세기를 높이면 어느 값에서 입자들이 격자 전체에 고르게 퍼진 상태를 버리고 세 갈래로 나뉜 칸 가운데 한 갈래에 몰린다. Baxter 는 그 값과 몰리는 정도를 정확히 계산했고, 계산 안에서 [Rogers–Ramanujan 항등식](rogers-ramanujan-identities.md)의 급수가 나온다.

# 직관

한 줄로 놓인 칸 $1,2,\dots,n$ 에서 먼저 센다. 이웃한 두 칸에 함께 입자를 두지 않는 배치에 입자 하나마다 무게 $z$ 를 곱한다. 칸 하나의 상태를 빈칸과 입자 둘로 두고, 이웃한 두 칸의 상태가 허용되는지를 [행렬](matrices.md)로 적는다.

$$
T=\begin{pmatrix}1&z\cr 1&0\end{pmatrix}
$$

첫째 행과 열이 빈칸, 둘째가 입자다. 입자 다음 입자는 금지라 오른쪽 아래가 $0$ 이다. 무게의 합은 $T$ 의 거듭제곱으로 계산되고, 칸 하나당 무게는 $T$ 의 큰 [고윳값](eigenvalues.md) $\frac{1+\sqrt{1+4z}}2$ 로 간다. 이 값은 $z\gt0$ 에서 매끄럽게 변하므로 한 줄에서는 입자가 갑자기 한쪽으로 몰리는 일이 없다.

이번에는 칸 $1,2,3,\dots$ 가운데 칸 $j$ 의 입자에 무게 $q^j$ 를 준다. 입자가 놓인 칸 번호를 큰 것부터 적으면 이웃한 두 수의 차이가 $2$ 이상인 분할이고, 무게의 합은 Rogers–Ramanujan 함수 $G(q)$ 다. 평면에서 Baxter 가 쓴 모서리 전달 행렬(corner transfer matrix)은 원점에서 뻗은 반직선 위의 배치를 이 무게로 센다. 그래서 평면 모형의 답에 $G$ 와 $H$ 가 나타난다.

# 정의

## 배치와 분배함수

삼각 격자의 칸은 이웃이 여섯이다. 유한한 영역 $\Lambda$ 의 칸마다 $0$ 이나 $1$ 을 주되 이웃한 두 칸이 함께 $1$ 이 아닌 배정을 **허용 배치(admissible configuration)** 라 한다. $1$ 인 칸이 입자다. 허용 배치는 격자 그래프의 독립집합이다([독립집합 문제](independent-set.md)).

**활동도(activity)** $z\gt0$ 에 대해 **대분배함수(grand partition function)** 는 다음 합이다.

$$
Z_\Lambda(z)=\sum_{\sigma}z^{\vert\sigma\vert}
$$

$\sigma$ 는 허용 배치 전체를 지나고 $\vert\sigma\vert$ 는 입자 수다. 각 배치에 확률 $z^{\vert\sigma\vert}/Z_\Lambda(z)$ 를 준 분포가 이 모형이다. $\Lambda$ 가 칸 $N$ 개로 커질 때 칸 하나당 분배함수 $\kappa(z)=\lim Z_\Lambda(z)^{1/N}$ 과 입자 밀도 $\rho(z)=z\thinspace\frac{d}{dz}\log\kappa(z)$ 를 본다.

## 세 부분격자

삼각 격자의 칸은 세 부분격자 $A,B,C$ 로 나뉘고, 한 칸의 여섯 이웃은 모두 다른 두 부분격자에 속한다. 한 부분격자를 전부 채우면 허용 배치이고 밀도가 $1/3$ 이다. 이것이 가장 빽빽한 배치다. 부분격자마다의 밀도를 $\rho_A,\rho_B,\rho_C$ 라 한다.

# 성질

## Baxter 의 해

Baxter 는 모서리 전달 행렬로 $\kappa(z)$ 와 부분격자 밀도를 정확히 계산했다[^1]. 결과는 다음과 같다[^2].

- 임계 활동도는 황금비 $\varphi=\frac{1+\sqrt5}2$ 의 다섯제곱이다.

  $$
  z_c=\frac{11+5\sqrt5}2=\varphi^5\approx11.09
  $$

- $z\lt z_c$ 에서는 $\rho_A=\rho_B=\rho_C$ 이고, $z\gt z_c$ 에서는 한 부분격자의 밀도가 나머지보다 크다. 앞의 것을 유체 상(fluid phase), 뒤의 것을 고체 상(solid phase)이라 한다.
- $z$ 가 위에서 $z_c$ 로 갈 때 밀도 차 $R=\rho_A-\rho_B$ 는 $(z-z_c)^{1/9}$ 에 비례해 $0$ 으로 간다. 비열의 지수는 $\alpha=1/3$, 상관 길이의 지수는 $\nu=5/6$ 이다.

## Rogers–Ramanujan 함수의 출현

$z$ 와 $\rho$ 를 보조 변수 $q$ 의 함수로 적으면 그 식이 Rogers–Ramanujan 함수 $G(q)$, $H(q)$ 와 $q$ 무한곱으로 이루어진다. 모서리 전달 행렬을 대각화하면 고윳값이 $q^{\sum_jj\sigma_j}$ 이고, $\sigma_j\sigma_{j+1}=0$ 인 수열 $(\sigma_j)$ 에 대한 합이 직관 절의 간격 분할의 생성함수가 되기 때문이다. 경계 조건이 첫 칸을 비워 두면 그 합은 $H(q)$ 다. Baxter 는 이 계산 과정에서 Rogers–Ramanujan 항등식을 다시 유도했다[^3].

## 일반화

Andrews, Baxter, Forrester 는 높이가 $1,\dots,r$ 인 RSOS 모형(restricted solid-on-solid model)을 같은 방법으로 풀었다[^4]. 단단한 육각형 모형은 그 가운데 한 경우와 대응하고, 일반 $r$ 에서 Andrews–Gordon 꼴의 항등식이 나온다.

# 활용

- 흡착 기체의 모형. 표면의 격자 위에 놓인 원자가 이웃 칸을 막는 계에서 밀도에 따른 상전이를 나타낸다.
- [Lovász 국소 보조정리](lovasz-local-lemma.md). 그래프의 독립집합 다항식 $\sum_\sigma z^{\vert\sigma\vert}$ 에 음의 활동도를 넣었을 때 값이 양수로 남는 범위가, 국소 보조정리가 성립하는 사건 확률의 가장 넓은 범위인 Shearer 경계(Shearer's bound)와 같다[^5]. 단단한 육각형 모형의 분배함수는 삼각 격자의 독립집합 다항식이다.
- [Ising 모형](ising-model.md)과 같은 틀의 격자 모형이다. 둘 다 칸마다 두 상태를 두고 이웃 사이의 무게로 분포를 정하며, 단단한 육각형 모형은 이웃 무게가 $0$ 이나 $1$ 인 극단의 경우다.

[^1]: R. J. Baxter, "Hard hexagons: exact solution", *J. Phys. A* 13 (1980).
[^2]: R. J. Baxter, *Exactly Solved Models in Statistical Mechanics*, Academic Press, 1982, 14장.
[^3]: R. J. Baxter, "Rogers–Ramanujan identities in the hard hexagon model", *J. Stat. Phys.* 26 (1981).
[^4]: G. E. Andrews, R. J. Baxter, P. J. Forrester, "Eight-vertex SOS model and generalized Rogers–Ramanujan-type identities", *J. Stat. Phys.* 35 (1984).
[^5]: A. D. Scott, A. D. Sokal, "The repulsive lattice gas, the independent-set polynomial, and the Lovász local lemma", *J. Stat. Phys.* 118 (2005).

# 연관 문서

## 선수지식

- [Ising 모형](ising-model.md)
- [Rogers–Ramanujan 항등식](rogers-ramanujan-identities.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics
