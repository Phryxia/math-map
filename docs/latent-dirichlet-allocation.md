# 잠재 Dirichlet 할당

# 개요

**잠재 Dirichlet 할당(latent Dirichlet allocation, LDA)** 은 문서 하나를 여러 주제가 섞인 것으로 보고, 문서들의 단어만 보고 주제들과 문서마다의 주제 비율을 찾는 확률 모형이다. 기사 수천 건이 있을 때 어느 기사가 운동 경기 이야기이고 어느 기사가 선거 이야기인지, 둘이 섞인 기사는 어떤 비율로 섞였는지를 사람이 읽지 않고 알고 싶다. 같은 낱말 "경기" 가 운동 기사에도 경제 기사에도 나오므로 낱말 하나로 갈라서는 안 된다.

LDA 는 주제를 낱말들의 확률분포로, 문서를 주제들의 확률분포로 두고, 관찰한 낱말이 나올 확률이 가장 그럴듯한 두 분포를 [변분 추론](variational-inference.md)이나 표본 추출로 거꾸로 찾는다.

# 직관

낱말이 공, 골, 투표, 선거, 경기 다섯인 기사들을 본다. 주제 $1$ 은 운동으로 공 $0.4$, 골 $0.4$, 경기 $0.2$ 의 확률로 낱말을 내고, 주제 $2$ 는 선거로 투표 $0.4$, 선거 $0.4$, 경기 $0.2$ 의 확률로 낱말을 낸다. 어떤 기사의 주제 비율이 운동 $0.75$, 선거 $0.25$ 이면, 그 기사의 낱말은 먼저 주제를 비율대로 하나 고르고 그 주제의 분포에서 낱말을 뽑아 만들어진다.

이 기사에 "경기" 가 나왔을 때 그 낱말이 운동 주제에서 나왔을 확률은 다음이다.

$$
\frac{0.75\cdot 0.2}{0.75\cdot 0.2+0.25\cdot 0.2}=0.75
$$

같은 "경기" 라도 선거 비율이 높은 기사에서는 선거 주제로 기운다. 낱말의 주제는 그 낱말이 든 기사의 주제 비율로 정해지고, 기사의 주제 비율은 그 기사 낱말들의 주제로 정해진다.

실제로는 주제의 낱말 분포도 기사의 주제 비율도 모른다. LDA 는 두 가지에 [Dirichlet 분포](dirichlet-distribution.md)를 사전분포로 주고, 기사 전체의 낱말에서 두 가지의 사후분포를 구한다.

# 정의

## 생성 과정

낱말의 종류가 $V$ 개, 주제가 $K$ 개, 문서가 $D$ 개라 한다. **잠재 Dirichlet 할당(latent Dirichlet allocation)** 은 문서 모음이 다음 과정으로 만들어진다고 보는 모형이다.[^1]

1. 주제 $k=1,\dots,K$ 마다 낱말 분포 $\beta\_k\sim\mathrm{Dir}(\eta)$ 를 뽑는다.
2. 문서 $d$ 마다 주제 비율 $\theta\_d\sim\mathrm{Dir}(\alpha)$ 를 뽑는다.
3. 문서 $d$ 의 $n$ 번째 낱말 자리마다 주제 $z\_{dn}\sim\mathrm{Cat}(\theta\_d)$ 를 뽑고, 낱말 $w\_{dn}\sim\mathrm{Cat}(\beta\_{z\_{dn}})$ 을 뽑는다.

$\mathrm{Cat}(p)$ 는 확률 $p$ 로 값을 고르는 범주분포다. 직관 절은 $V=5$, $K=2$ 이고 한 문서의 $\theta\_d=(0.75,0.25)$ 인 경우다.

## 결합분포와 사후분포

문서 하나의 주제 비율, 주제 배정, 낱말의 결합분포는 다음이다. $N$ 은 문서의 낱말 수다.

$$
p(\theta,z,w\mid\alpha,\beta)=p(\theta\mid\alpha)\prod_{n=1}^N\theta_{z_n}\thinspace\beta_{z_n,w_n}
$$

추론은 관찰한 $w$ 에서 $\theta$ 와 $z$ 의 사후분포 $p(\theta,z\mid w,\alpha,\beta)$ 를 구하는 것이고, 학습은 문서 모음의 가능도를 크게 하는 $\beta$ 를 찾는 것이다.

# 성질

## 사후분포의 계산

사후분포의 정규화 상수 $p(w\mid\alpha,\beta)$ 는 $\theta$ 에 대한 적분 안에 $\sum\_k\theta\_k\beta\_{k,w\_n}$ 의 곱이 들어 있어 닫힌 꼴로 계산되지 않는다.[^1] 그래서 근사 추론을 쓴다.

## 평균장 변분 추론

D. M. Blei, A. Y. Ng, M. I. Jordan 은 $q(\theta,z)=q(\theta\mid\gamma)\prod\_nq(z\_n\mid\phi\_n)$ 로 두고 증거 하한을 최대화했다.[^1] 갱신식은 다음이다.

$$
\phi_{nk}\propto\beta_{k,w_n}\exp\bigl(\psi(\gamma_k)\bigr),\qquad\gamma_k=\alpha_k+\sum_{n=1}^N\phi_{nk}
$$

$\psi$ 는 감마 함수의 로그 도함수인 digamma 함수(digamma function)다. 첫 식은 낱말 하나의 주제 확률을 문서의 주제 비율로 정하는 직관 절의 계산이고, 둘째 식은 문서의 주제 비율을 낱말들의 주제 확률을 세어 정한다.

## 붕괴 Gibbs 표집

$\theta$ 와 $\beta$ 를 적분해 없애면 주제 배정 $z$ 만 남고, 낱말 하나의 주제를 나머지 배정이 주어졌을 때 다음 확률로 다시 뽑는 [Markov 연쇄 Monte Carlo](markov-chain-monte-carlo.md)가 된다(Griffiths, Steyvers).[^2]

$$
\Pr\lbrack z_i=k\mid z_{-i},w\rbrack\propto\bigl(n_{dk}+\alpha\bigr)\frac{n_{kw}+\eta}{n_k+V\eta}
$$

$n\_{dk}$ 는 문서 $d$ 에서 주제 $k$ 로 배정된 낱말 수, $n\_{kw}$ 는 낱말 $w$ 가 주제 $k$ 로 배정된 횟수, $n\_k$ 는 주제 $k$ 로 배정된 낱말 전체의 수이고, 셋 모두 $i$ 번째 낱말을 뺀 수다.

## 사전분포의 매개변수

$\alpha$ 의 성분이 $1$ 보다 작으면 Dirichlet 분포가 단체의 꼭짓점 쪽에 몰려, 문서마다 주제 몇 개만 큰 비율을 갖는다. $\eta$ 가 작으면 주제마다 낱말 몇 개만 큰 확률을 갖는다. 사전분포를 빼고 $\theta\_d$ 를 문서마다 따로 추정한 모형이 확률적 잠재 의미 색인(probabilistic latent semantic indexing, pLSI)이다.[^3]

## 행렬 분해와의 관계

$\theta\_d$ 를 행으로 쌓은 $D\times K$ 행렬과 $\beta\_k$ 를 행으로 쌓은 $K\times V$ 행렬의 곱은 문서마다 낱말이 나올 기대 비율의 행렬이다. 그래서 주제 모형은 문서와 낱말의 횟수 표를 음이 아닌 두 행렬의 곱으로 쓰는 [음이 아닌 행렬 분해](nonnegative-matrix-factorization.md)와 같은 꼴이다. 주제마다 그 주제에만 나오는 낱말이 있으면 주제를 다항식 시간에 확실하게 찾는 [기준 단어 알고리즘](anchor-word-algorithm.md)이 있다(Arora, Ge, Moitra).[^4]

# 활용

- 문서 모음의 탐색. 논문, 기사, 판결문 모음에서 주제를 뽑아 문서를 주제 비율로 요약하고, 주제 비율이 가까운 문서를 찾는다.
- 집단 유전학. 개체의 유전자형을 문서로, 조상 집단을 주제로 두면 같은 모형이 개체마다 조상 집단의 비율을 추정한다. J. K. Pritchard, M. Stephens, P. Donnelly 가 만든 프로그램 STRUCTURE 의 모형이 이것이다.[^5]
- 추천. 사용자를 문서로, 사용자가 고른 항목을 낱말로 두어 취향의 주제를 찾는다.

[^1]: D. M. Blei, A. Y. Ng, M. I. Jordan, "Latent Dirichlet allocation", *Journal of Machine Learning Research* **3** (2003), 993–1022.
[^2]: T. L. Griffiths, M. Steyvers, "Finding scientific topics", *Proceedings of the National Academy of Sciences* **101** (2004), 5228–5235.
[^3]: T. Hofmann, "Probabilistic latent semantic indexing", *Proceedings of the 22nd ACM SIGIR Conference* (1999), 50–57.
[^4]: S. Arora, R. Ge, A. Moitra, "Learning topic models — going beyond SVD", *Proceedings of the 53rd IEEE Symposium on Foundations of Computer Science* (2012), 1–10.
[^5]: J. K. Pritchard, M. Stephens, P. Donnelly, "Inference of population structure using multilocus genotype data", *Genetics* **155** (2000), 945–959.

# 연관 문서

## 선수지식

- [Dirichlet 분포](dirichlet-distribution.md)
- [변분 추론](variational-inference.md)

## 더 알아보기

- [계층적 Dirichlet 과정](hierarchical-dirichlet-process.md)
- [기준 단어 알고리즘](anchor-word-algorithm.md)

#machine_learning #statistics #probability
