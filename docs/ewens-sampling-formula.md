# Ewens 표본 공식

# 개요

**Ewens 표본 공식(Ewens sampling formula)** 은 돌연변이가 생길 때마다 새로운 유형이 나오는 집단에서 유전자 몇 개를 뽑았을 때, 유형별 개수가 어떤 꼴로 나올지의 확률을 주는 식이다. 유전자 $3$ 개를 뽑아 보니 둘은 같은 유형이고 하나는 다른 유형이다. 셋이 모두 같을 확률, 모두 다를 확률과 견주어 이 결과가 얼마나 흔한지, 그리고 유형의 수로 돌연변이율을 어떻게 추정하는지가 이 공식의 물음이다.

Ewens 표본 공식은 표본의 계보를 [Kingman 합류](kingman-coalescent.md)로 놓고 그 위에 돌연변이를 뿌려, 유형별 개수의 분포를 돌연변이율 하나로 적어 이 물음에 답한다.

# 직관

표본 유전자를 하나씩 계보에 더해 간다고 하자. Kingman 합류에서 계보를 거슬러 올라갈 때, 계보가 $i$ 개이면 둘이 합쳐지는 세기는 $\binom i2$ 이고 돌연변이가 생기는 세기는 $i\theta/2$ 다. 어느 쪽이 먼저 일어나는지만 보면, 계보 하나가 돌연변이로 끊길 확률은 $\theta/(\theta+i-1)$ 이다.

이것을 앞으로 읽으면 다음 규칙이 된다. 유전자 $i$ 개를 이미 뽑았으면 $i+1$ 번째는 확률 $\theta/(\theta+i)$ 로 새 유형이고, 나머지 확률로 이미 뽑은 $i$ 개 가운데 고르게 하나와 같은 유형이다.

$\theta=1$ 이면 두 번째 유전자가 첫째와 같을 확률은 $1/2$ 이다. 세 번째가 앞의 둘과 같을 확률은 $2/3$ 이다. 그러므로 셋이 모두 같을 확률은 $\frac12\cdot\frac23=1/3$, 모두 다를 확률은 $\frac12\cdot\frac13=1/6$, 둘과 하나로 나뉠 확률은 나머지 $1/2$ 이다.

# 정의

## 무한 대립유전자 모형

돌연변이가 생길 때마다 이전에 없던 유형이 나온다는 가정을 **무한 대립유전자 모형(infinite alleles model)** 이라 한다. 유형을 대립유전자(allele)라 한다. 표본에서는 어느 유전자끼리 유형이 같은지만 의미가 있고, 유형의 이름은 의미가 없다.

## 대립유전자 구성

표본 $k$ 개에서 정확히 $j$ 개의 복사본으로 나타난 유형의 수를 $a_j$ 라 하고, $\mathbf a=(a_1,\dots,a_k)$ 를 **대립유전자 구성(allelic configuration)** 이라 한다. $\sum_j ja_j=k$ 이고 유형의 수는 $K=\sum_ja_j$ 다. 직관 절에서 둘과 하나로 나뉜 표본은 $a_1=1$, $a_2=1$, $a_3=0$ 이고 $K=2$ 다.

## Ewens 표본 공식

돌연변이율을 $\theta\gt 0$ 이라 하고 $\theta^{(k)}=\theta(\theta+1)\cdots(\theta+k-1)$ 이라 쓴다. 대립유전자 구성이 $\mathbf a$ 일 확률은 다음이다.

$$
\Pr[\mathbf a]=\frac{k!}{\theta^{(k)}}\prod_{j=1}^k\frac{(\theta/j)^{a_j}}{a_j!}
$$

$k=3$, $\theta=1$ 이면 $\theta^{(3)}=6$ 이다. $a_3=1$ 이면 $\frac66\cdot\frac13=1/3$, $a_1=3$ 이면 $\frac66\cdot\frac1{3!}=1/6$, $a_1=a_2=1$ 이면 $\frac66\cdot 1\cdot\frac12=1/2$ 이고 직관 절의 값과 같다.

# 성질

## 공식의 유도

정리. 중립 [Wright–Fisher 모형](wright-fisher-model.md)에 무한 대립유전자 돌연변이를 더한 집단이 정상 상태에 있으면, 집단 크기가 클 때 표본 $k$ 개의 대립유전자 구성은 Ewens 표본 공식을 따른다[^1].

증명의 요지. 직관 절의 규칙으로 유전자를 하나씩 더하면, 유전자를 정해진 묶음으로 나누는 방법 하나마다 확률의 분모가 $\theta^{(k)}$ 이다. 분자에는 새 유형마다 $\theta$ 가, 크기 $j$ 인 유형 하나마다 $(j-1)!$ 이 곱해진다. 유전자 $k$ 개를 구성 $\mathbf a$ 로 나누는 방법의 수 $k!/\prod_j(j!)^{a_j}a_j!$ 를 곱하면 공식이 나온다.

직관 절의 규칙은 [Dirichlet 과정](dirichlet-process.md)의 중국집 과정에서 $\alpha=\theta$ 로 둔 것과 같다. 그러므로 Ewens 표본 공식은 집중도 $\theta$ 의 Dirichlet 과정에서 뽑은 표본이 같은 값끼리 나뉘는 분할의 분포이기도 하다.

## 유형의 수

$i+1$ 번째 유전자가 새 유형일 사건은 서로 독립이고 확률이 $\theta/(\theta+i)$ 다. 그러므로 유형의 수는 독립 Bernoulli 변수의 합이고 평균이 다음이다[^1].

$$
\mathbb E[K]=\sum_{i=0}^{k-1}\frac{\theta}{\theta+i}
$$

$k$ 가 크면 $\mathbb E[K]$ 는 $\theta\log k$ 처럼 자란다. $k=3$, $\theta=1$ 이면 $1+\frac12+\frac13=11/6$ 이고, 직관 절의 확률로 $1\cdot\frac13+2\cdot\frac12+3\cdot\frac16=11/6$ 과 같다.

## 유형 수의 충분성

공식에서 $\theta$ 가 들어가는 부분은 $\theta^K/\theta^{(k)}$ 뿐이다. 그러므로 $K$ 는 $\theta$ 의 [충분통계량](sufficient-statistics.md)이고, $K$ 가 주어지면 구성의 조건부분포는 $\theta$ 와 무관하다[^1].

[최대가능도 추정](maximum-likelihood.md)은 관측한 $K$ 와 위의 평균이 같아지는 $\theta$ 다. 조건부분포가 $\theta$ 와 무관하므로, $K$ 를 고정한 채 구성이 중립 가정에서 나올 법한지를 검정할 수 있다. 이것을 Ewens–Watterson 검정(Ewens–Watterson test)이라 한다.

## 무작위 순열의 순환

$\theta=1$ 이면 공식은 원소 $k$ 개의 [대칭군](symmetric-groups.md)에서 고르게 뽑은 순열이 길이 $j$ 인 순환을 $a_j$ 개 가질 확률과 같다.

$$
\Pr[\mathbf a]=\prod_{j=1}^k\frac{1}{j^{a_j}a_j!}
$$

길이 $j$ 인 순환을 $a_j$ 개 갖는 순열의 수가 $k!/\prod_j j^{a_j}a_j!$ 이므로 이 식이 나온다. $k=3$ 이면 항등원 하나, 맞바꿈 셋, $3$-순환 둘이므로 확률이 $1/6$, $1/2$, $1/3$ 이고 직관 절의 세 값과 같다.

## Poisson 극한

$k\to\infty$ 에서 고정된 $j$ 마다 $a_j$ 의 분포는 평균 $\theta/j$ 의 [Poisson 분포](poisson-distribution.md)로 가고, 서로 다른 $j$ 의 $a_j$ 는 극한에서 독립이다[^2]. 작은 유형의 개수는 서로 무관한 Poisson 변수처럼 움직인다.

# 활용

- 중립성 검정. 서열 표본에서 유형의 수와 구성을 세어, 구성이 Ewens 표본 공식에서 멀리 떨어져 있으면 선택이나 집단 구조가 작용했다고 본다.
- 베이즈 비모수 추론. Dirichlet 과정 혼합 모형에서 군집의 수와 크기의 사전분포가 이 공식이다.
- 조합 구조의 통계. 무작위 순열의 순환, 무작위 다항식의 기약 인수, 무작위 정수의 소인수 분해처럼 큰 대상을 쪼갠 조각의 크기 분포가 같은 꼴의 극한을 갖는다[^2].

[^1]: W. J. Ewens, "The sampling theory of selectively neutral alleles", *Theoretical Population Biology* 3 (1972), 87–112.
[^2]: Richard Arratia, A. D. Barbour, Simon Tavaré, *Logarithmic Combinatorial Structures: A Probabilistic Approach*, EMS Monographs in Mathematics, 2003, Ch. 2 (Ewens 표본 공식과 Poisson 극한).

# 연관 문서

## 선수지식

- [Kingman 합류](kingman-coalescent.md)
- [Dirichlet 과정](dirichlet-process.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #combinatorics
