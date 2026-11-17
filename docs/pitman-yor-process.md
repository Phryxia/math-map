# Pitman–Yor 과정

# 개요

**Pitman–Yor 과정(Pitman–Yor process)** 은 [Dirichlet 과정](dirichlet-process.md)에 할인 모수 하나를 더해, 처음 보는 값이 더 자주 나오게 한 무작위 이산 분포다. 긴 글에서 서로 다른 낱말의 수를 세면 글 길이의 거듭제곱 꼴로 는다. Dirichlet 과정으로 낱말을 뽑으면 서로 다른 값의 수가 표본 수의 로그로만 늘어 이 증가를 맞추지 못한다.

Pitman–Yor 과정은 이미 나온 값마다 같은 양을 깎아 그만큼 새 값에 주고, 서로 다른 값의 수가 표본 수의 거듭제곱으로 늘게 한다.

# 직관

Dirichlet 과정의 중국집 과정에서 손님 $n+1$ 은 손님 $n_j$ 명인 탁자에 $n_j/(\alpha+n)$, 새 탁자에 $\alpha/(\alpha+n)$ 의 확률로 앉는다. $\alpha=1$ 이고 손님 셋이 탁자 두 개에 $2$ 명, $1$ 명 앉아 있으면 넷째 손님은 두 탁자에 $2/4$, $1/4$, 새 탁자에 $1/4$ 로 간다. 새 탁자를 열 확률 $\alpha/(\alpha+n)$ 은 탁자가 몇 개 열렸는지와 무관하게 $1/n$ 정도로 줄어서, 탁자 수가 $\log n$ 정도로만 는다.

탁자마다 손님 수에서 $d=1/2$ 를 깎는다. 두 탁자에서 깎인 $2\cdot\frac12$ 를 새 탁자 몫에 더하면 넷째 손님은 두 탁자에 $\frac{3/2}{4}=3/8$, $\frac{1/2}{4}=1/8$, 새 탁자에 $\frac{1+1}{4}=1/2$ 로 간다. 탁자가 많이 열릴수록 새 탁자 몫이 커지므로 탁자 수가 더 빨리 늘고, 손님이 한 명뿐인 탁자는 몫을 가장 크게 잃는다.

# 정의

## 중국집 과정

$0\le d\lt1$, $\alpha\gt-d$ 를 잡는다. 손님 $n$ 명이 탁자 $K$ 개에 $n_1,\dots,n_K$ 명씩 앉아 있을 때, 손님 $n+1$ 은

- 탁자 $j$ 에 확률 $\dfrac{n_j-d}{\alpha+n}$ 로,
- 새 탁자에 확률 $\dfrac{\alpha+dK}{\alpha+n}$ 로

앉는다. 이 과정이 만드는 $\lbrace 1,\dots,n\rbrace$ 의 무작위 분할을 모수 $(d,\alpha)$ 의 중국집 과정이라 한다. $d$ 를 **할인 모수(discount parameter)**, $\alpha$ 를 **집중 모수(concentration parameter)** 라 한다. $d=0$ 이면 Dirichlet 과정의 중국집 과정이다.

## 막대 꺾기와 Pitman–Yor 과정

$V_k\sim\mathrm{Beta}(1-d,\alpha+kd)$ 를 $k=1,2,\dots$ 에 대해 독립으로 뽑고 $w_k=V_k\prod\_{j\lt k}(1-V_j)$ 로 둔다. 기준 분포 $H$ 에서 $\theta_1,\theta_2,\dots$ 를 독립으로 뽑아

$$
P=\sum_{k=1}^\infty w_k\delta_{\theta_k}
$$

로 둔 무작위 확률측도의 분포를 **Pitman–Yor 과정(Pitman–Yor process)** $\mathrm{PY}(d,\alpha,H)$ 라 한다[^1]. $P$ 에서 독립으로 뽑은 값들을 같은 값끼리 묶으면 위의 중국집 과정의 분할이 나온다. 무게 $(w_k)$ 를 큰 순서로 늘어놓은 것의 분포를 두 모수 Poisson–Dirichlet 분포(two-parameter Poisson–Dirichlet distribution) $\mathrm{PD}(d,\alpha)$ 라 한다.

# 성질

## Ewens–Pitman 표본 공식

$\lbrace 1,\dots,n\rbrace$ 를 크기 $n_1,\dots,n_k$ 의 덩어리로 나눈 특정 분할이 나올 확률은 다음과 같다[^2].

$$
\frac{\prod_{i=1}^{k-1}(\alpha+id)}{(\alpha+1)(\alpha+2)\cdots(\alpha+n-1)}\prod_{j=1}^{k}(1-d)(2-d)\cdots(n_j-1-d)
$$

빈 곱은 $1$ 이다. 손님이 앉는 순서마다 확률을 곱하면 분자의 $\alpha+id$ 는 $i+1$ 번째 탁자를 열 때, $m-d$ 는 $m$ 명인 탁자에 앉을 때 나온다. 값이 덩어리 크기에만 기대므로 분할의 분포는 손님의 순서를 바꾸어도 같다. $d=0$ 이면 [Ewens 표본 공식](ewens-sampling-formula.md)이다.

직관 절의 $d=1/2$, $\alpha=1$ 에서 $\lbrace 1,2\rbrace,\lbrace 3\rbrace$ 의 확률은 $\frac{3/2}{2\cdot3}\cdot\frac12=1/8$ 이다. 둘째 손님이 첫 탁자에 앉을 확률 $1/4$ 과 셋째 손님이 새 탁자를 열 확률 $1/2$ 의 곱과 같다.

## 탁자 수의 증가

$K_n$ 을 손님 $n$ 명일 때의 탁자 수라 한다.

- $d=0$ 이면 $E\lbrack K_n\rbrack=\sum\_{i=0}^{n-1}\alpha/(\alpha+i)\sim\alpha\log n$ 이다.
- $0\lt d\lt1$ 이면 $K_n/n^d$ 가 거의 확실하게 양의 확률변수로 수렴한다[^3].

손님이 $m$ 명인 탁자의 수를 세면, $0\lt d\lt1$ 에서 그 비율이 $m^{-1-d}$ 에 비례해 줄어든다. 낱말 빈도의 Zipf 법칙(Zipf's law)과 같은 거듭제곱 꼬리다.

## 안정 종속자와의 관계

$\alpha=0$ 인 $\mathrm{PD}(d,0)$ 은 지수 $d$ 의 [안정 분포](stable-distributions.md)를 따르는 증가 Lévy 과정(안정 종속자, stable subordinator)이 시간 $[0,1]$ 에서 낸 뜀들의 크기를 합으로 나눈 것과 같은 분포다[^1]. 일반 $\alpha$ 의 분포는 이 분포를 합의 거듭제곱으로 다시 무게 준 것이다.

# 활용

- [n-gram 언어 모형](n-gram-language-models.md). 낱말 다음에 올 낱말의 분포를 문맥마다 Pitman–Yor 과정으로 두고 짧은 문맥의 분포를 기준 분포로 이어 쌓으면, 그 사후 예측의 근사가 Kneser–Ney 평활(Kneser–Ney smoothing)의 식이 된다[^4].
- 거듭제곱 꼬리의 군집. 단어, 사용자, 종의 빈도처럼 드문 범주가 많은 자료에서 군집 수에 대한 사전분포로 쓴다.
- 계층 모형. [계층적 Dirichlet 과정](hierarchical-dirichlet-process.md)의 두 층을 Pitman–Yor 과정으로 바꾼 계층적 Pitman–Yor 과정이 있다.

[^1]: J. Pitman, M. Yor, "The two-parameter Poisson–Dirichlet distribution derived from a stable subordinator", *Annals of Probability* 25 (1997), 855–900.
[^2]: J. Pitman, "Exchangeable and partially exchangeable random partitions", *Probability Theory and Related Fields* 102 (1995), 145–158.
[^3]: J. Pitman, *Combinatorial Stochastic Processes*, Lecture Notes in Mathematics 1875, Springer, 2006, 3 장.
[^4]: Y. W. Teh, "A hierarchical Bayesian language model based on Pitman–Yor processes", ACL 2006.

# 연관 문서

## 선수지식

- [Dirichlet 과정](dirichlet-process.md)
- [Ewens 표본 공식](ewens-sampling-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #machine_learning #combinatorics
