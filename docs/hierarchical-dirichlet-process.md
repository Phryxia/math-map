# 계층적 Dirichlet 과정

# 개요

**계층적 Dirichlet 과정(hierarchical Dirichlet process, HDP)** 은 여러 묶음의 자료가 각자 다른 비율로 같은 성분들을 섞어 쓰도록 하는 사전분포다. 신문 기사 여러 편을 주제로 나눌 때, 기사마다 주제의 비율은 다르지만 "스포츠" 라는 주제는 모든 기사가 같은 것을 써야 하고, 주제가 몇 개인지는 미리 정하지 않고 자료에서 정하고 싶다.

[Dirichlet 과정](dirichlet-process.md)은 성분 수를 정하지 않지만, 기사마다 따로 뽑으면 두 기사가 같은 성분을 고를 확률이 $0$ 이다. 계층적 Dirichlet 과정은 공통의 성분 목록 하나를 Dirichlet 과정으로 먼저 뽑고, 기사마다 그 목록 위의 Dirichlet 과정을 다시 뽑아 성분을 공유하게 한다.

# 직관

기사 두 편이 있고 각 기사의 낱말은 몇 개 주제 가운데 하나에서 나온다. 주제는 어휘 위의 확률분포이고, 주제 하나를 뽑는 기준 분포 $H$ 는 [Dirichlet 분포](dirichlet-distribution.md)처럼 연속분포다. 기사마다 집중 모수 $\alpha$, 기준 분포 $H$ 의 Dirichlet 과정(Dirichlet process, DP) $G_j\sim\mathrm{DP}(\alpha,H)$ 를 따로 뽑으면 $G_1$ 의 원자와 $G_2$ 의 원자는 연속분포 $H$ 에서 독립으로 뽑은 점들이므로 확률 $1$ 로 서로 다르다. 기사 1 의 스포츠 주제와 기사 2 의 스포츠 주제가 다른 분포가 된다.

막힌 이유는 기준 분포 $H$ 가 연속이라는 것이다. 그래서 기준 분포 자체를 이산 분포로 바꾼다. $G_0\sim\mathrm{DP}(\gamma,H)$ 는 셀 수 있는 원자에만 확률을 주는 이산 분포이므로, 기사마다 $G_j\sim\mathrm{DP}(\alpha,G_0)$ 를 뽑으면 $G_j$ 의 원자는 모두 $G_0$ 의 원자 가운데서 나온다. 두 기사가 같은 주제를 쓸 확률이 양수가 된다.

이 뽑기는 식당 여러 곳이 한 차림표를 함께 쓰는 꼴로 따라간다. 식당 1 에 손님 셋이 앉아, 탁자 하나에 둘이 요리 A 를, 다른 탁자에 하나가 요리 B 를 먹는다. 식당 2 에는 손님 하나가 탁자 하나에서 요리 A 를 먹는다. $\alpha=\gamma=1$ 일 때 식당 2 에 새 손님이 온다.

- 기존 탁자에 앉을 확률은 $1/(1+1)=1/2$ 이고, 새 탁자를 열 확률은 $1/2$ 이다.
- 새 탁자는 요리를 고른다. 요리 A 를 내는 탁자가 두 식당을 합쳐 둘, B 가 하나이므로 A 를 $2/4$, B 를 $1/4$, 처음 보는 요리를 $1/4$ 로 고른다.

새 손님이 요리 A 를 먹을 확률은 $1/2+1/2\cdot 2/4=3/4$, B 는 $1/8$, 새 요리는 $1/8$ 이다. 식당 2 에서 한 번도 나오지 않은 요리 B 가 식당 1 을 거쳐 식당 2 에 나온다.

# 정의

## 계층 모형

기준 분포 $H$, 집중 모수 $\gamma,\alpha\gt0$, 묶음 $j=1,\dots,J$ 에 대해 다음 모형을 **계층적 Dirichlet 과정(hierarchical Dirichlet process)** 이라 한다[^1].

$$
\begin{aligned}
G_0&\sim\mathrm{DP}(\gamma,H),\cr
G_j\mid G_0&\sim\mathrm{DP}(\alpha,G_0)\quad(j=1,\dots,J),\cr
\theta_{ji}\mid G_j&\sim G_j,\qquad x_{ji}\mid\theta_{ji}\sim F(\theta_{ji}).
\end{aligned}
$$

$x\_{ji}$ 는 묶음 $j$ 의 $i$ 번째 관측이고, $F(\theta)$ 는 성분 $\theta$ 가 관측을 내는 분포다. 직관 절에서 묶음은 기사, 관측은 낱말, $\theta$ 는 주제, $F(\theta)$ 는 주제 $\theta$ 가 낱말을 내는 범주분포다.

## 중국집 체인

$G_0$ 와 $G_j$ 를 적분해 없앤 $\theta\_{ji}$ 의 결합분포는 다음 뽑기로 정해진다. 이 뽑기를 **중국집 체인(Chinese restaurant franchise)** 이라 한다.

- 식당 $j$ 의 탁자 $t$ 에 손님 $n\_{jt}$ 명이 있을 때, 새 손님은 탁자 $t$ 에 확률 $n\_{jt}/(\alpha+n\_{j\cdot})$ 로, 새 탁자에 확률 $\alpha/(\alpha+n\_{j\cdot})$ 로 앉는다. $n\_{j\cdot}$ 은 식당 $j$ 의 손님 수다.
- 요리 $k$ 를 내는 탁자가 모든 식당을 합쳐 $m_k$ 개일 때, 새 탁자는 요리 $k$ 를 확률 $m_k/(\gamma+m\_{\cdot})$ 로, 처음 보는 요리를 확률 $\gamma/(\gamma+m\_{\cdot})$ 로 고르고, 처음 보는 요리는 $H$ 에서 뽑는다. $m\_{\cdot}$ 은 탁자 수의 합이다.

손님 $i$ 가 앉은 탁자의 요리가 $\theta\_{ji}$ 다. 직관 절의 계산이 이 두 규칙을 한 번씩 쓴 것이다.

## 막대 꺾기 표현

$\beta=(\beta_k)$ 를 Dirichlet 과정의 막대 꺾기 표현(stick-breaking representation)에서 집중 모수 $\gamma$ 로 얻은 무게로, $\phi_k$ 를 $H$ 에서 독립으로 뽑으면 $G_0=\sum_k\beta_k\delta\_{\phi_k}$ 다. 각 묶음은 같은 원자 위에 다른 무게를 준다.

$$
G_j=\sum_{k=1}^\infty\pi_{jk}\delta_{\phi_k},\qquad\pi_j\mid\beta\sim\mathrm{DP}(\alpha,\beta)
$$

여기서 $\mathrm{DP}(\alpha,\beta)$ 는 자연수 위의 분포 $\beta$ 를 기준으로 한 Dirichlet 과정이다.

# 성질

## 묶음 무게의 분포

자연수를 유한 개의 조각 $A_1,\dots,A_r$ 로 나누면

$$
\bigl(\pi_j(A_1),\dots,\pi_j(A_r)\bigr)\mid\beta\sim\mathrm{Dir}\bigl(\alpha\beta(A_1),\dots,\alpha\beta(A_r)\bigr)
$$

이다. Dirichlet 과정의 정의에서 바로 나온다. 그러므로 $E\lbrack\pi\_{jk}\mid\beta\rbrack=\beta_k$ 이고, $\alpha$ 가 클수록 묶음의 무게가 공통 무게 $\beta$ 가까이 모인다.

## 탁자 수와 요리 수

손님 $i+1$ 은 확률 $\alpha/(\alpha+i)$ 로 새 탁자를 열므로, 손님 $n$ 명이 온 식당의 탁자 수의 기댓값은

$$
\sum_{i=0}^{n-1}\frac{\alpha}{\alpha+i}\approx\alpha\log\Bigl(1+\frac n\alpha\Bigr)
$$

이다. 요리는 탁자를 손님으로 하는 같은 뽑기이므로, 탁자가 모두 $m$ 개이면 요리 수의 기댓값은 $\gamma\log(1+m/\gamma)$ 정도다. 성분 수가 자료의 양에 따라 로그보다 느리게 는다.

## 사후 계산

중국집 체인에서 손님의 탁자와 탁자의 요리를 번갈아 다시 뽑는 Gibbs 표집(Gibbs sampling)이 사후분포를 따른다[^1]. 각 갱신은 위의 두 규칙에 관측의 가능도 $F$ 를 곱한 확률로 뽑는다. 큰 자료에는 막대 꺾기 표현을 유한 개에서 자른 [변분 추론](variational-inference.md)을 쓴다[^2].

# 활용

- 주제 수를 정하지 않는 주제 모형. [잠재 Dirichlet 할당](latent-dirichlet-allocation.md)의 주제 수 $K$ 를 정하는 대신, 문서를 묶음으로, 낱말을 관측으로 둔 계층적 Dirichlet 과정을 쓰면 주제 수가 사후분포에서 정해진다.
- 상태 수를 정하지 않는 [은닉 Markov 모형](hidden-markov-model.md)(hidden Markov model, HMM). 이전 상태마다 다음 상태 분포 $G_j$ 를 두고 모두 같은 $G_0$ 를 공유하게 하면 상태 집합이 무한한 HDP-HMM 이 된다. 같은 상태에 머무를 확률을 키운 판본으로 회의 녹음에서 말하는 사람이 몇 명인지와 누가 언제 말했는지를 함께 추정한다[^3].
- 여러 집단의 군집. 병원마다 환자 군집의 비율은 다르되 군집의 정의는 공유하게 하는 다중 집단 군집에 쓴다.

[^1]: Y. W. Teh, M. I. Jordan, M. J. Beal, D. M. Blei, "Hierarchical Dirichlet processes", *Journal of the American Statistical Association* 101 (2006), 1566–1581.
[^2]: C. Wang, J. Paisley, D. M. Blei, "Online variational inference for the hierarchical Dirichlet process", AISTATS 2011.
[^3]: E. B. Fox, E. B. Sudderth, M. I. Jordan, A. S. Willsky, "A sticky HDP-HMM with application to speaker diarization", *Annals of Applied Statistics* 5 (2011), 1020–1056.

# 연관 문서

## 선수지식

- [Dirichlet 과정](dirichlet-process.md)
- [잠재 Dirichlet 할당](latent-dirichlet-allocation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #machine_learning #probability
