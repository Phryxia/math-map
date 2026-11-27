# Poisson–Dirichlet 분포

# 개요

**Poisson–Dirichlet 분포(Poisson–Dirichlet distribution)** 는 전체를 무한히 많은 조각으로 무작위로 나누었을 때 조각의 크기를 큰 순서로 늘어놓은 것의 분포다. 카드 $n$ 장을 고르게 섞은 순열을 순환으로 나누면, 가장 긴 순환이 $n/2$ 보다 길 확률은 $n=4$ 에서 $7/12\approx 0.583$ 이고 $n$ 이 커지면 $\log 2\approx 0.693$ 으로 간다. 순환 길이를 $n$ 으로 나누어 큰 순서로 늘어놓은 것은 매개변수 $1$ 인 Poisson–Dirichlet 분포로 수렴하고, 이 분포의 가장 큰 성분이 $1/2$ 보다 클 확률이 $\log 2$ 다.

# 직관

$\lbrace 1,\dots,n\rbrace$ 의 순열을 고르게 하나 뽑고 $1$ 이 든 순환을 따라간다. $1,\sigma(1),\sigma^2(1),\dots$ 에서 다음 칸이 $1$ 로 돌아올 확률은 남은 후보 수의 역수이므로, $1$ 이 든 순환의 길이는 $1,\dots,n$ 에서 고르게 분포한다. $n=3$ 의 여섯 순열에서 $1$ 이 든 순환의 길이는 $1$, $2$, $3$ 이 각각 두 번씩 나온다.

길이 $k$ 인 순환을 떼어 내면 남은 $n-k$ 개 위의 순열도 고르게 분포한다. 그래서 둘째 순환은 남은 것 가운데 고른 비율을 차지하고, 셋째도 그렇다. $n$ 이 크면 순환들의 비율은 막대를 고른 점에서 꺾고 남은 막대를 다시 고른 점에서 꺾는 것과 같다.

$$
W_1=U_1,\qquad W_2=U_2(1-U_1),\qquad W_3=U_3(1-U_1)(1-U_2),\ \dots
$$

$U_i$ 는 서로 독립이고 $[0,1]$ 에서 균등하다. 이 조각들을 큰 순서로 늘어놓은 것이 매개변수 $1$ 인 Poisson–Dirichlet 분포다. 길이가 $n/2$ 보다 긴 순환은 많아야 하나이고 길이 $k$ 인 순환을 갖는 순열은 $n!/k$ 개이므로, 개요의 확률은 $\sum\_{n/2\lt k\le n}1/k$ 이고 $\log 2$ 로 간다.

# 정의

## GEM 분포

$\theta\gt 0$ 이라 하자. $V_1,V_2,\dots$ 가 서로 독립이고 [베타분포](beta-distribution.md) $\mathrm{Beta}(1,\theta)$ 를 따를 때 다음 수열의 분포를 **GEM 분포(Griffiths–Engen–McCloskey distribution)** $\mathrm{GEM}(\theta)$ 라 한다.

$$
W_k=V_k\prod_{j\lt k}(1-V_j),\qquad k=1,2,\dots
$$

$\sum_kW_k=1$ 이 거의 확실하게 성립한다. $\mathrm{Beta}(1,1)$ 은 균등분포이므로 직관 절의 막대 꺾기가 $\mathrm{GEM}(1)$ 이다.

## Poisson–Dirichlet 분포

$\mathrm{GEM}(\theta)$ 를 따르는 $(W_k)$ 를 큰 순서로 늘어놓은 $S_1\ge S_2\ge\cdots$ 의 분포를 매개변수 $\theta$ 인 Poisson–Dirichlet 분포 $\mathrm{PD}(\theta)$ 라 한다. $\mathrm{PD}(\theta)$ 는 $s_1\ge s_2\ge\cdots\ge 0$ 이고 $\sum s_i=1$ 인 수열 전체 위의 분포다. 직관 절의 순환 비율의 극한이 $\mathrm{PD}(1)$ 이다.

# 성질

## 순환 길이의 극한

**정리.** 순열 $\sigma$ 를 확률 $\theta^{c(\sigma)}/\theta^{(n)}$ 로 뽑는다. 여기서 $c(\sigma)$ 는 순환의 개수이고 $\theta^{(n)}=\theta(\theta+1)\cdots(\theta+n-1)$ 이다. 순환 길이를 $n$ 으로 나누어 큰 순서로 늘어놓은 것은 $n\to\infty$ 에서 $\mathrm{PD}(\theta)$ 로 분포수렴한다[^1].

$\theta=1$ 이면 이 확률은 $1/n!$ 이고, 직관 절의 고른 순열이다. 순환으로 나눈 분할은 [Ewens 표본 공식](ewens-sampling-formula.md)의 분포를 따른다.

## 크기 편향 순서

$S\sim\mathrm{PD}(\theta)$ 에서 성분 하나를 크기에 비례하는 확률로 고르고, 남은 성분에서 다시 크기에 비례해 고르기를 되풀이한다. 이렇게 고른 순서로 늘어놓은 수열은 $\mathrm{GEM}(\theta)$ 를 따른다[^2]. 원소 $1$ 이 어느 순환에 들 확률은 그 순환의 길이에 비례하므로, 직관 절에서 $1$ 이 든 순환을 먼저 고른 것이 이 순서다.

## 물감 상자 분할

[Kingman 표현정리](kingman-representation-theorem.md)의 물감 상자 분할을 $S\sim\mathrm{PD}(\theta)$ 로 만들면 그 분할의 분포는 Ewens 표본 공식이 주는 중국집 과정의 분포다. $\sum_iS_i=1$ 이므로 혼자 남는 번호가 생기지 않는다. 두 번호가 같은 블록에 들 확률은 다음과 같다.

$$
E\Bigl\lbrack\sum_iS_i^2\Bigr\rbrack=\sum_{k\ge 1}E\lbrack V^2\rbrack\thinspace E\lbrack(1-V)^2\rbrack^{k-1}=\frac{2}{(\theta+1)(\theta+2)}\cdot\frac{\theta+2}{2}=\frac1{1+\theta}
$$

크기 편향 순서로 바꾸어도 제곱합은 그대로이므로 GEM 의 막대로 계산했다. $\theta=1$ 이면 $1/2$ 이다.

## 대칭 Dirichlet 분포의 극한

$(D_1,\dots,D_K)$ 가 매개변수가 모두 $\theta/K$ 인 [Dirichlet 분포](dirichlet-distribution.md)를 따를 때, 이를 큰 순서로 늘어놓은 것은 $K\to\infty$ 에서 $\mathrm{PD}(\theta)$ 로 분포수렴한다[^3]. Kingman 은 이 극한으로 $\mathrm{PD}(\theta)$ 를 처음 정의했다. 칸 하나의 기댓값 $1/K$ 은 $0$ 으로 가지만 큰 칸 몇 개가 전체의 대부분을 차지한다.

## Poisson 과정 표현

$(0,\infty)$ 위에서 세기 측도가 $\theta x^{-1}e^{-x}dx$ 인 [Poisson 과정](poisson-process.md)의 점을 $J_1\ge J_2\ge\cdots$ 라 하자. 합 $T=\sum_iJ_i$ 는 유한하고 [감마분포](gamma-distribution.md) $\mathrm{Gamma}(\theta,1)$ 를 따르며, $(J_i/T)$ 는 $\mathrm{PD}(\theta)$ 를 따르고 $T$ 와 독립이다[^3]. $J_i$ 들은 감마 종속자(gamma subordinator)의 시각 $\theta$ 까지의 뛰어오름이고, 이 독립성이 Dirichlet 분포가 정규화된 감마 변수라는 성질의 무한 판이다.

## 가장 큰 성분

$\mathrm{PD}(1)$ 의 가장 큰 성분 $S_1$ 은 $P(S_1\le x)=\rho(1/x)$ 를 만족한다. $\rho$ 는 [매끄러운 수](smooth-numbers.md) 문서의 Dickman 함수(Dickman function)다[^1]. $1\le u\le 2$ 에서 $\rho(u)=1-\log u$ 이므로 $P(S_1\gt 1/2)=\log 2$ 이고, 개요의 극한이 이것이다. $E\lbrack S_1\rbrack$ 은 약 $0.6243$ 이고, 이 값을 Golomb–Dickman 상수(Golomb–Dickman constant)라 한다.

# 활용

- 소인수분해. $x$ 이하의 정수 $N$ 을 고르게 뽑아 소인수 $p$ 마다 $\log p/\log N$ 을 큰 순서로 늘어놓으면 $x\to\infty$ 에서 $\mathrm{PD}(1)$ 로 분포수렴한다[^1]. 가장 큰 소인수가 $\sqrt N$ 보다 클 확률이 $\log 2$ 로 가는 것이 직관 절의 순열 계산과 같은 극한이다.
- 집단유전학. 무한 대립유전자 모형에서 돌연변이율 $\theta$ 인 집단의 대립유전자 빈도를 큰 순서로 늘어놓은 것의 정상분포가 $\mathrm{PD}(\theta)$ 다. 표본의 유형별 개수가 Ewens 표본 공식을 따르는 것은 이 빈도에서 물감 상자 분할을 만든 결과다.
- 비모수 Bayes 통계. [Dirichlet 과정](dirichlet-process.md)의 막대 꺾기 표현에서 원자의 무게는 $\mathrm{GEM}(\theta)$ 를 따르고, 무게를 큰 순서로 늘어놓으면 $\mathrm{PD}(\theta)$ 다. [Pitman–Yor 과정](pitman-yor-process.md)의 무게는 두 매개변수 판 $\mathrm{PD}(d,\theta)$ 를 따른다.

[^1]: R. Arratia, A. D. Barbour, S. Tavaré, *Logarithmic Combinatorial Structures: A Probabilistic Approach*, European Mathematical Society, 2003, 1 장과 5 장.
[^2]: J. Pitman, *Combinatorial Stochastic Processes*, Lecture Notes in Mathematics 1875, Springer, 2006, 3 장.
[^3]: J. F. C. Kingman, "Random discrete distributions", Journal of the Royal Statistical Society Series B 37 (1975), 1–22.

# 연관 문서

## 선수지식

- [Kingman 표현정리](kingman-representation-theorem.md)
- [대칭군](symmetric-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #statistics
