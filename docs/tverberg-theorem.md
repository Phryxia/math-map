# Tverberg 정리

# 개요

**Tverberg 정리(Tverberg's theorem)** 는 $\mathbb R^d$ 의 점 $(r-1)(d+1)+1$ 개를 $r$ 개의 부분으로 나누어 그 볼록 껍질들이 공통점을 갖게 할 수 있다는 정리다. Tverberg 가 1966 년에 증명했다.[^1]

$r=2$ 이면 점 $d+2$ 개를 둘로 나누는 Radon 정리(Radon's theorem)이고, Radon 정리는 [Helly 정리](helly-theorem.md)의 증명에 쓰인다. 점의 개수 $(r-1)(d+1)+1$ 은 더 줄일 수 없다.

# 직관

수직선 위의 점 $1,2,\dots,2r-1$ 을 $r$ 개의 부분으로 나눈다. 가운데 점 $r$ 을 혼자 한 부분으로 두고, 나머지는 $\lbrace 1,2r-1\rbrace,\lbrace 2,2r-2\rbrace,\dots,\lbrace r-1,r+1\rbrace$ 로 짝짓는다. 짝마다 볼록 껍질은 구간이고 모든 구간이 점 $r$ 을 포함한다. 점 $2r-1$ 개로 $r$ 부분이 된다.

점이 $2r-2$ 개이면 이렇게 나눌 수 없다. 공통점을 $c$ 라 하면, $c$ 를 점으로 갖지 않는 부분은 $c$ 왼쪽의 점과 오른쪽의 점을 하나씩은 가져야 한다. 점 하나짜리 부분은 $\lbrace c\rbrace$ 뿐이므로 많아야 하나이고, 나머지 $r-1$ 개 부분이 점을 둘 이상 쓴다. 그러면 점이 $1+2(r-1)=2r-1$ 개 이상 있어야 한다.

$d=1$ 에서는 $(r-1)(d+1)+1=2r-1$ 이므로, 위의 두 계산으로 이 경우의 정리와 개수의 최선성이 증명된다.

# 정의

## Tverberg 분할

$\mathbb R^d$ 의 점 $x_1,\dots,x_N$ 의 첨자를 서로 겹치지 않는 공집합 아닌 부분 $P_1,\dots,P_r$ 로 나눈 것이

$$
\bigcap_{j=1}^r\mathrm{conv}\lbrace x_i : i\in P_j\rbrace\ne\varnothing
$$

을 만족하면 이를 **Tverberg 분할(Tverberg partition)** 이라 하고, 교집합의 점을 **Tverberg 점(Tverberg point)** 이라 한다.

## 다색 Carathéodory 정리

**다색 Carathéodory 정리(colorful Carathéodory theorem)** 는 $\mathbb R^D$ 의 유한집합 $C_1,\dots,C_{D+1}$ 이 모두 원점을 볼록 껍질에 포함하면, $c_i\in C_i$ 를 하나씩 골라 원점이 $\mathrm{conv}\lbrace c_1,\dots,c_{D+1}\rbrace$ 에 들게 할 수 있다는 정리다. Bárány 가 1982 년에 증명했다.[^2] $C_1=\cdots=C_{D+1}$ 인 경우가 Carathéodory 정리(Carathéodory's theorem)다.

# 성질

## Tverberg 정리

**정리.** $N=(r-1)(d+1)+1$ 이면 $\mathbb R^d$ 의 점 $x_1,\dots,x_N$ 은 Tverberg 분할 $P_1,\dots,P_r$ 을 갖는다.

증명(Sarkaria).[^3] $\mathbb R^{r-1}$ 의 벡터 $v_1,\dots,v_r$ 을 $\sum_jv_j=0$ 이고 그 가운데 어느 $r-1$ 개도 일차독립이 되게 잡는다. 정삼각형이나 정단체의 꼭짓점을 무게중심에서 본 벡터가 그런 예다. 이때 $w_j\in\mathbb R^{d+1}$ 에 대해

$$
\sum_{j=1}^r w_j\otimes v_j=0 \iff w_1=w_2=\cdots=w_r
$$

이다. $y_i=(x_i,1)\in\mathbb R^{d+1}$ 로 두고 $D=(d+1)(r-1)$ 차원 공간 $\mathbb R^{d+1}\otimes\mathbb R^{r-1}$ 에서 $C_i=\lbrace y_i\otimes v_j : j=1,\dots,r\rbrace$ 를 생각한다. $C_i$ 의 평균이 $0$ 이므로 원점은 각 $\mathrm{conv}(C_i)$ 에 들고, 집합의 개수 $N$ 은 $D+1$ 이다.

다색 Carathéodory 정리로 $j(i)$ 를 골라 $\sum_i\lambda_iy_i\otimes v_{j(i)}=0$, $\lambda_i\ge 0$, $\sum_i\lambda_i=1$ 이 되게 한다. $P_j=\lbrace i : j(i)=j\rbrace$ 로 묶으면 위의 동치에서 $w_j=\sum_{i\in P_j}\lambda_iy_i$ 가 $j$ 에 무관하다. 마지막 좌표에서 $\sum_{i\in P_j}\lambda_i=1/r$ 이 모든 $j$ 에서 같으므로 각 $P_j$ 는 공집합이 아니고, 앞의 $d$ 개 좌표에서 $r\sum_{i\in P_j}\lambda_ix_i$ 가 모든 $\mathrm{conv}\lbrace x_i : i\in P_j\rbrace$ 에 공통인 점이다.

## 개수의 최선성

$\mathbb R^d$ 의 점 $(r-1)(d+1)$ 개를 일반 위치(general position)에 두면 Tverberg 분할이 존재하지 않는다. 부분 $P_j$ 의 볼록 껍질은 차원이 $\vert P_j\vert-1$ 인 아핀 부분공간에 들고, 일반 위치에서 이런 부분공간 $r$ 개가 한 점에서 만나려면 여차원의 합 $\sum_j(d-\vert P_j\vert+1)$ 이 $d$ 이하여야 한다. 이는 $\sum_j\vert P_j\vert\ge (r-1)(d+1)+1$ 과 동치다.

## 중심점

$r=\lceil n/(d+1)\rceil$ 로 두면 점 $n$ 개의 Tverberg 점은 Tukey 깊이가 $r$ 이상이다. 그 점을 포함하는 닫힌 반공간이 어느 부분의 점도 포함하지 않으면 그 부분의 볼록 껍질이 열린 여집합에 들어 모순이므로, 반공간은 부분마다 점을 하나 이상 포함한다. 이것으로 [중심점 정리](centerpoint-theorem.md)가 다시 증명된다.

## 위상적 Tverberg 정리

$N=(r-1)(d+1)$ 차원 단체 $\Delta^N$ 에서 $\mathbb R^d$ 로 가는 연속사상 $f$ 에 대해, 서로 겹치지 않는 면 $\sigma_1,\dots,\sigma_r$ 가 존재해 $f(\sigma_1)\cap\cdots\cap f(\sigma_r)\ne\varnothing$ 이라는 진술을 **위상적 Tverberg 정리(topological Tverberg theorem)** 라 한다. $f$ 가 꼭짓점의 아핀 확장이면 Tverberg 정리다.

- $r$ 이 소수이면 Bárány, Shlosman, Szűcs 가 증명했다.[^4] 증명은 $\mathbb Z/r$ 이 자유롭게 작용하는 공간에 대한 [Borsuk–Ulam 정리](borsuk-ulam.md) 꼴의 정리를 쓴다.
- $r$ 이 소수의 거듭제곱이면 Özaydin 이 같은 방법을 $(\mathbb Z/p)^k$ 의 작용으로 바꾸어 증명했다.[^6]
- $r$ 이 소수의 거듭제곱이 아니면 진술이 거짓이다. Mabillard 와 Wagner 의 사상 구성을 Frick 이 적용해 $d\ge 3r+1$ 에서 반례를 만들었다.[^5]

# 활용

- [중심점 정리](centerpoint-theorem.md)의 두 번째 증명이 Tverberg 점에서 나온다.
- [Helly 정리](helly-theorem.md)의 증명에 $r=2$ 인 경우, 곧 Radon 정리를 쓴다.
- 위상적 Tverberg 정리는 [Borsuk–Ulam 정리](borsuk-ulam.md)의 등변 위상수학(equivariant topology) 방법이 조합기하에 쓰이는 예다.

[^1]: H. Tverberg, *A generalization of Radon's theorem*, J. London Math. Soc. **41** (1966), 123–128.
[^2]: I. Bárány, *A generalization of Carathéodory's theorem*, Discrete Math. **40** (1982), 141–152.
[^3]: K. S. Sarkaria, *Tverberg's theorem via number fields*, Israel J. Math. **79** (1992), 317–320.
[^4]: I. Bárány, S. B. Shlosman, A. Szűcs, *On a topological generalization of a theorem of Tverberg*, J. London Math. Soc. (2) **23** (1981), 158–164.
[^5]: P. V. M. Blagojević, F. Frick, G. M. Ziegler, *Barycenters of polytope skeleta and counterexamples to the topological Tverberg conjecture, via constraints*, J. Eur. Math. Soc. **21** (2019). Frick 의 반례와 그 구성이 정리되어 있다.
[^6]: M. Özaydin, *Equivariant maps for the symmetric group*, preprint, University of Wisconsin–Madison, 1987.

# 연관 문서

## 선수지식

- [Helly 정리](helly-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #combinatorics #algebraic_topology
