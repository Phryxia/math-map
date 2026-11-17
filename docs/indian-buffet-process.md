# Indian 뷔페 과정

# 개요

**Indian 뷔페 과정(Indian buffet process, IBP)** 은 대상마다 특징 몇 개를 고르게 하되, 특징이 모두 몇 개인지 미리 정하지 않는 무작위 0-1 행렬의 분포다. 사진 여러 장이 있고 사진마다 사람, 나무, 자동차 같은 물체가 여러 개 들어 있으면, 사진을 한 무리에만 넣는 군집으로는 이 구조를 적을 수 없고 물체의 종류가 몇 개인지도 모른다.

이 과정은 사진을 행으로, 물체의 종류를 열로 둔 행렬에서 사진마다 1 인 칸을 여러 개 허용하고, 열의 수는 사진이 늘수록 저절로 늘게 한다. 그 행렬을 사전분포로 두고 사후분포에서 물체의 종류와 사진마다의 물체를 함께 추정한다.

# 직관

손님이 차례로 뷔페에 들어와 요리를 담는다. 첫 손님은 평균 $\alpha$ 개의 요리를 담는다. $\alpha=1$ 이고 첫 손님이 요리 1 과 요리 2 를 담았다고 하자.

둘째 손님은 이미 나온 요리마다, 앞선 손님 가운데 그 요리를 담은 비율로 담는다. 요리 1 과 2 는 앞선 손님 하나 가운데 하나가 담았으므로 각각 확률 $1/2$ 로 담는다. 그다음 평균 $\alpha/2$ 개의 새 요리를 담는다. 둘째 손님이 요리 1 과 새 요리 3 을 담았다고 하자.

셋째 손님은 요리 1 을 $2/3$, 요리 2 와 3 을 각각 $1/3$ 의 확률로 담고, 평균 $\alpha/3$ 개의 새 요리를 담는다. 많이 담긴 요리는 계속 많이 담기고, 새 요리는 갈수록 드물게 나온다.

손님을 행으로, 요리를 처음 나온 순서대로 열로 놓고 담은 칸을 $1$ 로 적으면 지금까지의 행렬은 다음과 같다.

$$
Z=\begin{pmatrix}1&1&0\cr 1&0&1\end{pmatrix}
$$

[Dirichlet 과정](dirichlet-process.md)의 중국집 과정에서는 손님이 탁자 하나에만 앉아 각 행에 $1$ 이 하나뿐이다. 이 과정에서는 손님이 요리를 여러 개 담아 한 행에 $1$ 이 여러 개 있다.

# 정의

## 순차 정의

$\alpha\gt0$ 을 잡는다. 손님 $1,\dots,N$ 이 차례로 다음을 한다.

- 손님 $1$ 은 [Poisson 분포](poisson-distribution.md) $\mathrm{Poisson}(\alpha)$ 를 따르는 개수의 새 요리를 담는다.
- 손님 $i\ge2$ 는 이미 나온 요리 $k$ 마다, 앞선 $i-1$ 명 가운데 $m_k$ 명이 담았으면 확률 $m_k/i$ 로 담는다. 그다음 $\mathrm{Poisson}(\alpha/i)$ 를 따르는 개수의 새 요리를 담는다.

손님 $i$ 가 요리 $k$ 를 담았으면 $z\_{ik}=1$, 아니면 $0$ 으로 둔 $N$ 행의 행렬 $Z$ 의 분포를 모수 $\alpha$ 의 **Indian 뷔페 과정(Indian buffet process)** 이라 한다[^1]. 열은 요리가 처음 나온 순서로 놓는다.

직관 절의 셋째 손님에게 $m_1=2$, $m_2=m_3=1$, $i=3$ 이므로 확률이 $2/3$, $1/3$, $1/3$ 이다.

## 유한 모형의 극한

열이 $K$ 개인 다음 모형을 생각한다. 열마다 $\pi_k\sim\mathrm{Beta}(\alpha/K,1)$ 을 독립으로 뽑고, 행마다 $z\_{ik}\sim\mathrm{Bernoulli}(\pi_k)$ 를 독립으로 뽑는다. $\pi_k$ 는 요리 $k$ 의 인기다. 이 행렬에서 모두 $0$ 인 열을 지우고 나머지를 처음 $1$ 이 나오는 행의 순서로 놓은 것의 분포는 $K\to\infty$ 에서 Indian 뷔페 과정으로 수렴한다[^1].

[베타분포](beta-distribution.md) $\mathrm{Beta}(\alpha/K,1)$ 은 $K$ 가 클수록 $0$ 근처에 몰려서, 열 대부분은 아무도 담지 않는 요리가 된다.

# 성질

## 행의 교환가능성

순차 정의는 손님의 순서에 기대지만, 열 이름을 무시한 행렬의 분포는 행의 순서를 바꾸어도 같다. 유한 모형에서 행들이 $\pi$ 를 조건으로 독립이고 같은 분포를 따르므로 성립하고, 극한에서도 유지된다. [de Finetti 정리](de-finetti-theorem.md)에 따라 행들은 어떤 무작위 측도를 조건으로 독립이고, 그 측도의 분포가 베타 과정(beta process)이다[^2].

## 특징 수

- 각 행의 $1$ 의 개수는 $\mathrm{Poisson}(\alpha)$ 를 따른다. 교환가능성 때문에 모든 행이 첫 행과 같은 분포다.
- 나온 요리의 총수 $K_+$ 는 $\mathrm{Poisson}(\alpha H_N)$ 을 따른다. 손님 $i$ 가 담는 새 요리 수 $\mathrm{Poisson}(\alpha/i)$ 들을 더한 것이고, $H_N$ 은 다음 조화수다.

  $$
  H_N=1+\frac12+\dots+\frac1N
  $$

유한 모형으로도 같은 값이 나온다. $\pi\sim\mathrm{Beta}(a,1)$, $a=\alpha/K$ 일 때

$$
E\lbrack(1-\pi)^N\rbrack=\int_0^1 a x^{a-1}(1-x)^N\thinspace dx=\prod_{j=1}^N\frac{j}{a+j}
$$

이고, 이 값은 $1-aH_N+O(a^2)$ 이다. 한 열이 쓰일 확률이 $aH_N+O(a^2)$ 이므로 쓰인 열 수의 기댓값은 $K$ 를 곱해 $\alpha H_N+O(1/K)$ 이다.

직관 절의 $\alpha=1$, 손님 셋이면 $E\lbrack K_+\rbrack=H_3=11/6$ 이다. 요리 수는 손님 수의 로그로 는다.

## 막대 꺾기 표현

$\nu_1,\nu_2,\dots$ 를 $\mathrm{Beta}(\alpha,1)$ 에서 독립으로 뽑고 $\mu_k=\nu_1\nu_2\cdots\nu_k$ 로 두면, 인기를 큰 순서로 늘어놓은 $(\pi\_{(1)},\pi\_{(2)},\dots)$ 와 $(\mu_k)$ 는 같은 분포다[^3]. 인기가 곱으로 줄어드는 이 표현을 유한 개에서 잘라 변분 추론에 쓴다.

# 활용

- 잠재 특징 모형. 관측 $X$ 를 $X=ZA+E$ 로 둔다. $Z$ 는 Indian 뷔페 과정을 따르는 특징 행렬, $A$ 는 특징마다의 기여, $E$ 는 잡음이다. 사진에서 물체의 종류와 각 사진의 물체를 함께 찾는 문제가 이 꼴이다[^1].
- 특징 수를 정하지 않는 인자 분석. 인자 수를 미리 정하는 대신 $Z$ 의 열 수가 사후분포에서 정해진다.
- 추천 체계. 사용자를 행, 잠재 취향을 열로 두고 사용자마다 취향 여러 개를 허용한다.
- [계층적 Dirichlet 과정](hierarchical-dirichlet-process.md)과 짝을 이룬다. 그쪽은 묶음마다 성분 하나씩을 고르는 군집을 공유하고, 이쪽은 대상마다 특징 여러 개를 고른다.

[^1]: T. L. Griffiths, Z. Ghahramani, "The Indian buffet process: an introduction and review", *Journal of Machine Learning Research* 12 (2011), 1185–1224.
[^2]: R. Thibaux, M. I. Jordan, "Hierarchical beta processes and the Indian buffet process", AISTATS 2007.
[^3]: Y. W. Teh, D. Görür, Z. Ghahramani, "Stick-breaking construction for the Indian buffet process", AISTATS 2007.

# 연관 문서

## 선수지식

- [Dirichlet 과정](dirichlet-process.md)
- [베타분포](beta-distribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #machine_learning #probability
