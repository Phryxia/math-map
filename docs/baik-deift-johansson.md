# Baik–Deift–Johansson 정리

# 개요

**Baik–Deift–Johansson 정리(Baik–Deift–Johansson theorem)** 는 무작위로 섞은 카드 $n$ 장에서 가장 긴 증가 부분수열의 길이가 얼마나 흔들리는지 정하는 정리다. 카드 백만 장을 섞을 때마다 순서를 지키며 고른 오름차순 카드의 최대 개수를 세면, 그 수는 $2000$ 근처에 모이지만 섞을 때마다 조금씩 다르다. 이 정리는 흔들림의 크기가 $n^{1/6}$ 이고 그 분포가 큰 무작위 행렬의 최대 고윳값과 같은 [Tracy–Widom 분포](tracy-widom.md)임을 보인다.

# 직관

카드 $1,2,3$ 을 섞는다. 순서 여섯 가지 가운데 $123$ 은 셋 모두 오름차순이라 길이가 $3$ 이고, $321$ 은 한 장씩만 고를 수 있어 $1$ 이고, 나머지 넷은 $2$ 다. 가장 긴 증가 부분수열의 길이는 확률 $1/6$, $4/6$, $1/6$ 로 $1$, $2$, $3$ 이 된다.

카드가 많으면 이 길이의 평균이 $2\sqrt n$ 에 가깝다는 것이 [최장 증가 부분수열](longest-increasing-subsequence.md)의 결과다. 백만 장이면 $2000$ 이다. 그러나 섞을 때마다 길이가 다르므로, $2000$ 에서 몇 장쯤 벗어나는지와 그 벗어남이 어떤 모양으로 퍼지는지가 남는다.

흔들림은 $n^{1/6}=10$ 장 규모이고, 평균은 $2000$ 보다 $18$ 장쯤 작다. 길이에서 $2\sqrt n$ 을 빼고 $n^{1/6}$ 으로 나눈 값의 분포는 $n$ 이 커지면 하나의 곡선으로 모인다. 그 곡선은 성분을 무작위로 채운 큰 Hermite 행렬에서 가장 큰 고윳값을 같은 방식으로 줄인 값의 분포와 같다.

# 정의

## 진술

$\sigma_n$ 을 대칭군 $S_n$ 에서 균등하게 고른 순열이라 하고 $\ell_n=\ell(\sigma_n)$ 을 그 최장 증가 부분수열의 길이라 하자. $F_2$ 를 Gauss 유니터리 앙상블(Gaussian unitary ensemble, GUE)의 Tracy–Widom 분포함수라 하면 모든 실수 $x$ 에서 다음이 성립한다.

$$
\lim_{n\to\infty}P\left(\frac{\ell_n-2\sqrt n}{n^{1/6}}\le x\right)=F_2(x)
$$

적률도 수렴한다. 분포함수가 $F_2$ 인 분포를 $\mathrm{TW}\_2$ 라 쓰면 모든 $m\ge 1$ 에서 $\mathbb E\lbrack((\ell_n-2\sqrt n)/n^{1/6})^m\rbrack$ 이 $\mathrm{TW}\_2$ 의 $m$ 차 적률로 간다.[^1]

직관 절의 백만 장은 $2\sqrt n=2000$, $n^{1/6}=10$ 이다. $\mathrm{TW}\_2$ 의 평균 $-1.7711$ 과 분산 $0.8132$ 를 넣으면 평균 길이는 약 $1982$, 표준편차는 약 $9$ 장이다.

## 평균과 분산의 점근

적률의 수렴에서 다음 두 식이 나온다.

$$
\mathbb E\thinspace\ell_n=2\sqrt n-1.7711\thinspace n^{1/6}+o(n^{1/6}),\qquad
\mathrm{Var}\thinspace\ell_n=0.8132\thinspace n^{1/3}+o(n^{1/3})
$$

# 성질

## Young 도형의 첫 행

[Robinson–Schensted–Knuth 대응](robinson-schensted-knuth.md)(RSK)은 순열을 Young 도형으로 보내고, Schensted 정리(Schensted's theorem)에 따라 도형의 첫 행 길이 $\lambda_1$ 이 $\ell(\sigma)$ 와 같다. 균등한 순열의 도형은 [Plancherel 측도](plancherel-measure.md)를 따르므로 정리는 Plancherel 측도 아래 $\lambda_1$ 의 극한 분포에 관한 진술이다.

## Poisson 화

카드 수 $n$ 을 고정하는 대신 평균이 $\theta^2$ 인 [Poisson 분포](poisson-distribution.md)에서 뽑은 $N$ 으로 둔다. 이것을 **Poisson 화(poissonization)** 라 한다. [Gessel 항등식](gessel-identity.md)에 따르면 다음이 성립한다.

$$
P(\ell_N\le k)=e^{-\theta^2}\det\bigl\lbrack I_{i-j}(2\theta)\bigr\rbrack_{i,j=1}^{k}
$$

$I_m$ 은 변형 [Bessel 함수](bessel-functions.md)이고, 오른쪽 행렬식은 기호가 $e^{2\theta\cos\phi}$ 인 $k\times k$ [Toeplitz 행렬](toeplitz-matrices.md)의 행렬식이다. 확률의 계산이 행렬식 하나의 점근으로 바뀐다.

## 증명의 요지

Toeplitz 행렬식은 단위원 위의 직교다항식으로 적히고, 그 직교다항식은 $2\times2$ 행렬값 Riemann–Hilbert 문제(Riemann–Hilbert problem)의 해로 나타난다. Deift–Zhou 최급강하법(Deift–Zhou steepest descent method)으로 $k=2\theta+x\theta^{1/3}$ 에서 그 해의 점근을 계산하면 [Painlevé 방정식](painleve-equations.md) II 의 Hastings–McLeod 해가 나오고, 행렬식이 $F_2(x)$ 로 간다.

Poisson 화를 푸는 단계는 단조성을 쓴다. $P(\ell_n\le k)$ 는 $n$ 에 대해 감소하므로, $N$ 이 $\theta^2\pm\theta^{1+\varepsilon}$ 사이에 있을 확률이 $1$ 로 가는 것과 합쳐 고정된 $n$ 의 확률을 위아래로 묶는다.[^1]

## 아래쪽 행과 결합 분포

둘째 행 $\lambda_2$ 를 같은 방식으로 줄인 값은 GUE 의 둘째로 큰 고윳값의 극한 분포로 간다. 첫 $k$ 행 $\lambda_1,\dots,\lambda_k$ 의 결합 분포는 GUE 의 큰 고윳값 $k$ 개의 결합 분포, 곧 Airy 점과정(Airy point process)의 위쪽 $k$ 개 점으로 간다. Borodin–Okounkov–Olshanski, Okounkov, Johansson 이 각자 증명했다.[^2]

## 대칭성이 있는 순열

$\sigma$ 를 대합(involution), 곧 $\sigma^2=\mathrm{id}$ 인 순열 가운데 균등하게 고르면 극한 분포가 바뀐다. $F_2$ 대신 Gauss 직교 앙상블(Gaussian orthogonal ensemble)과 Gauss 심플렉틱 앙상블(Gaussian symplectic ensemble)의 Tracy–Widom 분포 $F_1$, $F_4$ 가 나오고, 어느 쪽인지는 증가와 감소, 고정점의 유무에 따라 정해진다. Baik–Rains 가 증명했다.[^3]

# 활용

- [KPZ 보편성류](kpz-universality.md). 단위정사각형에 [Poisson 과정](poisson-process.md)으로 뿌린 점을 오른쪽 위로 지나는 최대 개수는 Poisson 화한 $\ell_N$ 과 분포가 같다. 이 정리는 그 마지막 통과 시간의 요동이 $\mathrm{TW}\_2$ 라는 진술이고, 성장 모형의 높이 요동이 Tracy–Widom 분포를 따르는 예다.
- [Talagrand 볼록 거리 부등식](talagrand-convex-distance.md). 집중 부등식이 주는 흔들림 규모는 $n^{1/4}$ 이고, 이 정리의 $n^{1/6}$ 은 그 상계가 날카롭지 않음을 보인다.
- 무작위 행렬 없이 Tracy–Widom 분포를 계산하는 모형. Gessel 항등식의 행렬식은 크기 $k$ 의 행렬 하나라서, 행렬의 고윳값을 표본으로 뽑지 않고 $F_2$ 에 수렴하는 값을 계산한다.

[^1]: J. Baik, P. Deift, K. Johansson, On the distribution of the length of the longest increasing subsequence of random permutations, *J. Amer. Math. Soc.* **12** (1999), 1119–1178. 개관은 D. Romik, *The Surprising Mathematics of Longest Increasing Subsequences*, Cambridge University Press (2015).
[^2]: A. Borodin, A. Okounkov, G. Olshanski, Asymptotics of Plancherel measures for symmetric groups, *J. Amer. Math. Soc.* **13** (2000), 481–515. A. Okounkov, Random matrices and random permutations, *Int. Math. Res. Not.* (2000), 1043–1095. K. Johansson, Discrete orthogonal polynomial ensembles and the Plancherel measure, *Ann. of Math.* **153** (2001), 259–296.
[^3]: J. Baik, E. Rains, The asymptotics of monotone subsequences of involutions, *Duke Math. J.* **109** (2001), 205–281.

# 연관 문서

## 선수지식

- [최장 증가 부분수열](longest-increasing-subsequence.md)
- [Plancherel 측도](plancherel-measure.md)
- [Gessel 항등식](gessel-identity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #analysis #theorem
