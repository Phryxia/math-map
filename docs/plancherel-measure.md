# Plancherel 측도

# 개요

**Plancherel 측도(Plancherel measure)** 는 무작위로 섞은 순열을 Young 도형으로 바꿀 때 각 도형이 나올 확률이다. 카드 세 장을 섞으면 순서는 여섯 가지이고, 각 순서를 [Robinson–Schensted–Knuth 대응](robinson-schensted-knuth.md)(RSK)으로 도형에 보내면 $(3)$ 과 $(1,1,1)$ 이 한 번씩, $(2,1)$ 이 네 번 나온다. 카드가 많아지면 이 확률이 도형의 모양을 하나의 곡선 근처로 몰아, 가장 길게 커지는 부분수열의 길이 같은 양을 그 곡선에서 읽는다.

# 직관

카드 $1,2,3$ 의 여섯 순서를 RSK 로 행 삽입한다. $123$ 은 한 행에 $1,2,3$ 이 붙어 $(3)$ 이 되고, $321$ 은 삽입할 때마다 앞의 수를 밀어내 $(1,1,1)$ 이 된다. $132$ 는 $1,3$ 을 놓은 뒤 $2$ 가 $3$ 을 밀어내 $(2,1)$ 이 되고, $213$, $231$, $312$ 도 $(2,1)$ 이 된다. 그래서 확률은 $(3)$ 과 $(1,1,1)$ 이 각각 $1/6$, $(2,1)$ 이 $4/6$ 이다.

모양 $(2,1)$ 의 표준 Young 대각표는 두 개이고, RSK 는 순열을 같은 모양의 대각표 쌍에 일대일로 보낸다. 쌍의 수가 $2\times2=4$ 이므로 $(2,1)$ 이 네 번 나온다. 모양마다 대각표 수의 제곱이 그 모양이 나오는 순열의 수다.

# 정의

$\lambda\vdash n$ 의 표준 Young 대각표 수를 $f^\lambda$ 라 하면 $n$ 의 분할 위의 Plancherel 측도는 다음이다.

$$
M_n(\lambda)=\frac{(f^\lambda)^2}{n!}
$$

RSK 가 전단사이므로 $\sum_\lambda (f^\lambda)^2=n!$ 이고 $M_n$ 은 확률측도다. $S_n$ 에서 균등하게 고른 순열의 RSK 모양의 분포가 $M_n$ 이다. $n=3$ 이면 직관 절의 $1/6$, $4/6$, $1/6$ 이다.

$f^\lambda$ 는 [갈고리 길이 공식](hook-length-formula.md)으로 계산되므로 $M_n(\lambda)=n!/\prod_{u\in\lambda}h(u)^2$ 다.

이름은 유한군의 정칙표현이 기약표현 $V$ 를 $\dim V$ 번 포함한다는 Plancherel 공식(Plancherel formula)에서 왔다. $S_n$ 의 기약표현 $S^\lambda$ 의 차원이 $f^\lambda$ 이므로 $M_n(\lambda)$ 는 정칙표현에서 $S^\lambda$ 성분이 차지하는 차원의 비율이다.

# 성질

## 성장 과정

$\lambda\vdash n$ 에 칸 $c$ 하나를 붙여 다시 분할의 도형 $\lambda+c$ 가 될 때, $\lambda$ 에서 $\lambda+c$ 로 가는 확률을 다음으로 둔다.

$$
P(\lambda\to\lambda+c)=\frac{f^{\lambda+c}}{(n+1)\thinspace f^\lambda}
$$

$\sum_c f^{\lambda+c}=(n+1)f^\lambda$ 이므로 확률의 합은 $1$ 이다. 빈 도형에서 이 규칙으로 칸을 하나씩 붙이면 $n$ 번째 도형의 분포가 $M_n$ 이다. 이것을 Plancherel 성장 과정(Plancherel growth process)이라 한다. $(2,1)$ 에서는 $(3,1)$, $(2,2)$, $(2,1,1)$ 로 가는 확률이 $3/8$, $2/8$, $3/8$ 이다.

## 극한 모양

도형을 $45^\circ$ 돌려 칸의 대각선이 가로축 $u$ 에 오게 놓고, 가로와 세로를 $1/\sqrt n$ 배로 줄인다. $\lambda$ 를 $M_n$ 으로 고르면 $n\to\infty$ 에서 도형의 위쪽 경계가 다음 함수의 그래프로 확률수렴한다. Vershik–Kerov 와 Logan–Shepp 가 1977 년에 각자 증명했다[^1].

$$
\Omega(u)=\begin{cases}\dfrac2\pi\left(u\arcsin\dfrac u2+\sqrt{4-u^2}\right) & (\vert u\vert\le2)\cr \vert u\vert & (\vert u\vert\gt 2)\end{cases}
$$

경계가 가로축 위 $u=2$ 에서 $\vert u\vert$ 와 만나므로 첫 행의 길이는 $2\sqrt n$ 에 가깝다. 증명은 $M_n(\lambda)$ 를 갈고리 길이의 곱으로 적고, 그 로그를 경계 함수의 범함수로 근사해 최소화하는 변분 문제를 푼다.

## 첫 행의 요동

$\lambda_1$ 이 $2\sqrt n$ 에서 벗어나는 크기는 $n^{1/6}$ 이다. Baik–Deift–Johansson 정리(Baik–Deift–Johansson theorem)는 다음 분포 수렴이다[^2].

$$
\frac{\lambda_1-2\sqrt n}{n^{1/6}}\ \longrightarrow\ \mathrm{TW}\_2
$$

$\mathrm{TW}\_2$ 는 [Tracy–Widom 분포](tracy-widom.md)이고, Gauss 유니터리 앙상블(Gaussian unitary ensemble)의 최대 고윳값의 극한 분포와 같다. 첫 몇 행 $\lambda_1,\lambda_2,\dots$ 의 결합 분포도 같은 앙상블의 큰 고윳값 몇 개의 결합 분포로 수렴한다[^3].

# 활용

- [최장 증가 부분수열](longest-increasing-subsequence.md). 균등한 순열의 가장 긴 증가 부분수열의 길이가 RSK 모양의 첫 행이므로, 그 분포가 $M_n$ 아래의 $\lambda_1$ 의 분포다. 극한 모양에서 길이 $2\sqrt n$ 이, 첫 행의 요동에서 $\mathrm{TW}\_2$ 극한이 나온다.
- 무작위 행렬. 도형의 첫 행들과 Gauss 유니터리 앙상블의 고윳값이 같은 극한을 가지므로, $n$ 을 [Poisson 분포](poisson-distribution.md)로 섞은 $M_n$ 이 행렬 없이 Tracy–Widom 분포를 계산하는 모형으로 쓰인다.

[^1]: A. Vershik, S. Kerov, Asymptotics of the Plancherel measure of the symmetric group and the limiting form of Young tableaux, *Soviet Math. Dokl.* **18** (1977), 527–531. B. Logan, L. Shepp, A variational problem for random Young tableaux, *Adv. Math.* **26** (1977), 206–222.
[^2]: J. Baik, P. Deift, K. Johansson, On the distribution of the length of the longest increasing subsequence of random permutations, *J. Amer. Math. Soc.* **12** (1999), 1119–1178.
[^3]: A. Borodin, A. Okounkov, G. Olshanski, Asymptotics of Plancherel measures for symmetric groups, *J. Amer. Math. Soc.* **13** (2000), 481–515.

# 연관 문서

## 선수지식

- [Robinson–Schensted–Knuth 대응](robinson-schensted-knuth.md)
- [갈고리 길이 공식](hook-length-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #algebra
