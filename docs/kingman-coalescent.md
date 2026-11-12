# Kingman 합류

# 개요

**Kingman 합류(Kingman's coalescent)** 는 집단에서 뽑은 유전자 몇 개의 계보를 과거로 거슬러 올라가며, 계보들이 공통 조상에서 하나씩 합쳐지는 시각을 나타내는 확률 모형이다. 유전자 $100$ 개로 된 집단에서 $3$ 개를 뽑아 서열을 비교했더니 몇 군데가 서로 다르다. 세 유전자의 가장 가까운 공통 조상이 몇 세대 전에 있었는지, 그동안 돌연변이가 몇 번 쌓였을지가 이 모형의 물음이다.

Kingman 합류는 집단 전체를 따라가지 않고 표본의 계보만 따라가, 합쳐지는 시각을 지수분포 몇 개의 합으로 적어 이 물음에 답한다.

# 직관

[Wright–Fisher 모형](wright-fisher-model.md)에서 각 유전자는 앞 세대의 $100$ 개 가운데 하나를 고르게 골라 부모로 삼는다. 표본의 두 유전자가 같은 부모를 고를 확률은 $1/100$ 이다. 세 유전자에서는 짝이 셋이므로 한 세대 거슬러 올라갈 때 어느 둘이 합쳐질 확률이 약 $3/100$ 이다.

그러므로 처음 합쳐질 때까지 평균 약 $100/3\approx 33$ 세대가 걸린다. 그 뒤에는 계보가 둘 남고, 이 둘이 합쳐지기까지 평균 $100$ 세대가 더 걸린다. 공통 조상까지는 평균 약 $133$ 세대다.

세대 수를 $100$ 으로 나누어 재면 두 대기시간은 평균 $1/3$ 과 $1$ 의 [지수분포](exponential-distribution.md)에 가깝다. 집단 크기 $N$ 이 무엇이든 시간 단위를 $N$ 세대로 잡으면 같은 그림이 나온다.

# 정의

## Kingman 합류

$\lbrace 1,\dots,k\rbrace$ 의 분할을 상태로 하는 연속시간 [Markov 연쇄](markov-chains.md)에서, 각 블록 쌍이 서로 독립으로 세기 $1$ 로 하나로 합쳐지면 이 연쇄를 **Kingman $k$-합류(Kingman's $k$-coalescent)** 라 한다. 처음 상태는 한 원소짜리 블록 $k$ 개다. 블록 하나가 계보 하나다.

블록이 $j$ 개일 때 합쳐질 수 있는 쌍은 $\binom j2$ 개이므로 다음 합류까지의 시간 $T_j$ 는 평균 $1/\binom j2$ 의 지수분포를 따르고, 합쳐지는 쌍은 그 가운데 고르게 하나다. 직관 절의 표본은 $k=3$ 이고 $T_3$ 의 평균이 $1/3$, $T_2$ 의 평균이 $1$ 이다.

## 공통 조상까지의 시간과 가지 길이

블록이 하나가 되는 시각 $T_{\mathrm{MRCA}}=T_k+\dots+T_2$ 를 **가장 가까운 공통 조상까지의 시간(time to the most recent common ancestor, TMRCA)** 이라 한다. 계보 나무의 가지 길이를 모두 더한 값 $L=\sum_{j=2}^k jT_j$ 를 **총 가지 길이(total branch length)** 라 한다. 블록이 $j$ 개인 동안에는 가지 $j$ 개가 동시에 자라므로 $T_j$ 에 $j$ 를 곱한다.

# 성질

## 평균 시간

정리. 다음이 성립한다[^1].

$$
\mathbb E[T_{\mathrm{MRCA}}]=\sum_{j=2}^k\frac{2}{j(j-1)}=2\left(1-\frac1k\right),\qquad \mathbb E[L]=\sum_{j=2}^k\frac{2}{j-1}
$$

$\frac{2}{j(j-1)}=\frac{2}{j-1}-\frac2j$ 로 쪼개면 앞의 합이 망원급수가 된다. $k=3$ 이면 $\mathbb E[T_{\mathrm{MRCA}}]=4/3$ 이고, $N=100$ 세대 단위로 직관 절의 $133$ 세대다.

표본을 아무리 늘려도 공통 조상까지의 평균 시간은 $2$ 를 넘지 않는다. 그 가운데 절반인 $1$ 은 마지막 두 계보가 합쳐지는 시간 $T_2$ 다. 반면 $\mathbb E[L]$ 은 $2\log k$ 처럼 자란다.

## 표본과 집단의 공통 조상

정리. 크기 $k$ 인 표본의 가장 가까운 공통 조상이 집단 전체의 가장 가까운 공통 조상과 같을 확률은 집단이 충분히 크면 $(k-1)/(k+1)$ 이다[^2].

$k=3$ 이면 $1/2$ 이고, $k=19$ 이면 $0.9$ 다. 작은 표본으로도 집단 전체 계보의 뿌리를 높은 확률로 얻는다.

## 무한대에서 내려옴

블록이 $j$ 개에서 $1$ 개가 되는 평균 시간은 $j$ 와 무관하게 $2$ 아래다. 그래서 블록이 무한히 많은 상태에서 시작해도 모든 $t\gt 0$ 에서 블록 수가 확률 $1$ 로 유한하다. 이 성질을 무한대에서 내려옴(coming down from infinity)이라 한다[^1].

## Wright–Fisher 모형에서의 수렴

정리. 크기 $N$ 인 Wright–Fisher 모형에서 표본 $k$ 개의 계보를 시간 단위 $N$ 세대로 재면, $N\to\infty$ 에서 계보의 분할 과정이 Kingman $k$-합류로 분포수렴한다[^3].

세 계보 이상이 한 세대에 동시에 합쳐질 확률은 $1/N^2$ 규모이므로 극한에서 사라지고, 두 계보가 합쳐지는 사건만 남는다. [Moran 모형](moran-model.md)처럼 한 세대의 자손 수의 분산이 유한한 다른 모형도 같은 극한을 갖는다.

## 돌연변이 수와 Watterson 추정량

시간 단위당 가지 위에서 돌연변이가 세기 $\theta/2$ 의 [Poisson 과정](poisson-process.md)으로 생긴다고 하자. 각 돌연변이가 서로 다른 자리에 생기면 표본에서 다른 글자를 보이는 자리의 수 $S$ 는 총 가지 길이 위의 돌연변이 수와 같고, 평균이 다음이다[^1].

$$
\mathbb E[S]=\frac\theta2\thinspace\mathbb E[L]=\theta\sum_{j=1}^{k-1}\frac1j
$$

그러므로 $\hat\theta=S\big/\sum_{j=1}^{k-1}1/j$ 는 $\theta$ 의 불편추정량이다. 이것을 Watterson 추정량(Watterson's estimator)이라 한다. 직관 절의 표본에서 다른 자리가 $6$ 개이면 $\hat\theta=6/1.5=4$ 다.

# 활용

- 집단의 크기와 역사. 서열 표본에서 Watterson 추정량과 짝마다의 차이 수를 비교하는 [Tajima D](tajima-d.md)로 집단이 최근에 커졌는지, 선택이 작용했는지를 가린다.
- 계통 추론의 사전분포. 표본 계보 나무에 Kingman 합류를 사전분포로 두고 서열 자료로 사후분포를 계산해 분기 시각과 집단 크기를 추정한다.
- 모의 표본 생성. 집단 전체를 시뮬레이션하지 않고 표본의 계보만 거꾸로 만든 뒤 돌연변이를 뿌려 서열 표본을 만든다.

[^1]: John Wakeley, *Coalescent Theory: An Introduction*, Roberts and Company, 2009, Ch. 3 (Kingman 합류, TMRCA 와 총 가지 길이, Watterson 추정량).
[^2]: I. W. Saunders, S. Tavaré, G. A. Watterson, "On the genealogy of nested subsamples from a haploid population", *Advances in Applied Probability* 16 (1984), 471–491.
[^3]: J. F. C. Kingman, "The coalescent", *Stochastic Processes and their Applications* 13 (1982), 235–248.

# 연관 문서

## 선수지식

- [Wright–Fisher 모형](wright-fisher-model.md)

## 더 알아보기

- [Ewens 표본 공식](ewens-sampling-formula.md)
- [Tajima D](tajima-d.md)

#probability #statistics #combinatorics
