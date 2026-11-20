# 기준 단어 알고리즘

# 개요

**기준 단어 알고리즘(anchor word algorithm)** 은 주제마다 그 주제에서만 나오는 낱말이 있다고 놓고, 한 문서에 함께 나온 낱말 쌍의 횟수만으로 주제들을 찾는 방법이다. 운동 기사에만 나오는 "공" 과 선거 기사에만 나오는 "투표" 가 있으면, 두 기사에 다 나오는 "경기" 와 함께 나오는 낱말들의 비율은 "공" 의 비율과 "투표" 의 비율을 섞은 것이다. 낱말마다 함께 나오는 낱말의 분포를 점으로 찍으면 기준 단어의 점이 꼭짓점이 되고, 다른 낱말의 점을 꼭짓점들의 가중평균으로 쓴 가중치에서 주제가 나온다.

# 직관

[잠재 Dirichlet 할당](latent-dirichlet-allocation.md)(latent Dirichlet allocation, LDA)의 주제를 찾을 때 사후분포는 닫힌 꼴로 계산되지 않고, [변분 추론](variational-inference.md)이나 Gibbs 표집은 어느 출발점에서 시작했는지에 따라 다른 답에 머물 수 있다. 낱말이 공, 투표, 경기 셋이고 주제가 둘인 기사 모음에서 다른 방법을 본다. 운동 주제는 공과 경기를 $1/2$ 씩, 선거 주제는 투표와 경기를 $1/2$ 씩 내고, 기사의 절반은 운동만, 절반은 선거만 다룬다.

기사 하나에서 낱말 자리 두 개를 골라 첫째 낱말과 둘째 낱말의 쌍이 나올 확률을 표로 적는다. 행이 첫째 낱말, 열이 둘째 낱말이고 순서는 공, 투표, 경기다.

$$
Q=\begin{pmatrix}1/8&0&1/8\cr 0&1/8&1/8\cr 1/8&1/8&1/4\end{pmatrix}
$$

운동 기사가 뽑힐 확률 $1/2$ 에 공과 경기가 나올 확률 $1/2\cdot 1/2$ 을 곱해 공과 경기의 칸이 $1/8$ 이다. 경기와 경기의 칸은 운동 기사와 선거 기사에서 $1/8$ 씩 받아 $1/4$ 이다.

행마다 합이 $1$ 이 되게 나누면, 첫째 낱말이 정해졌을 때 둘째 낱말의 분포가 나온다.

$$
\bar Q_{\text{공}}=(\tfrac12,0,\tfrac12),\qquad\bar Q_{\text{투표}}=(0,\tfrac12,\tfrac12),\qquad\bar Q_{\text{경기}}=(\tfrac14,\tfrac14,\tfrac12)
$$

공은 운동 기사에만 나오므로 공의 행은 운동 기사의 낱말 분포 그대로다. 경기의 행은 공의 행과 투표의 행을 반씩 섞은 것이고, 그 가중치 $(1/2,1/2)$ 은 경기가 나왔을 때 그 기사가 운동 기사일 확률과 선거 기사일 확률이다.

각 낱말이 나올 확률은 $Q$ 의 행 합으로 공 $1/4$, 투표 $1/4$, 경기 $1/2$ 다. 운동 주제에서 낱말이 나올 확률은 "운동일 확률 곱하기 낱말이 나올 확률" 에 비례하므로 공 $1\cdot\tfrac14$, 투표 $0$, 경기 $\tfrac12\cdot\tfrac12$ 에 비례하고, 합이 $1$ 이 되게 나누면 공 $1/2$, 경기 $1/2$ 로 처음의 운동 주제가 나온다.

# 정의

## 동시 출현 행렬

낱말이 $V$ 개, 주제가 $K$ 개인 주제 모형에서 주제 $k$ 의 낱말 분포를 $\beta\_k$ 로, $\beta\_k$ 를 행으로 쌓은 $K\times V$ 행렬을 $\beta$ 로 쓴다. 문서의 주제 비율 $\theta$ 에 대해 $R=\mathbb E\lbrack\theta\theta^{\mathsf T}\rbrack$ 라 하자.

한 문서에서 서로 다른 두 낱말 자리를 골랐을 때 첫째가 $i$, 둘째가 $j$ 일 확률을 $Q\_{ij}$ 로 둔 $V\times V$ 행렬 $Q$ 를 **동시 출현 행렬(word co-occurrence matrix)** 이라 한다. 두 자리의 낱말은 $\theta$ 가 주어지면 독립이므로 다음이 성립한다.

$$
Q=\beta^{\mathsf T}R\thinspace\beta
$$

$Q$ 의 각 행을 그 행의 합으로 나눈 행렬을 $\bar Q$ 로 쓴다. 직관 절에서 $R=\mathrm{diag}(1/2,1/2)$ 이고 $Q$ 와 $\bar Q$ 는 그 절의 것이다.

## 분리 가능성과 기준 단어

낱말 $s$ 가 $\beta\_{k,s}\gt 0$ 이고 $l\ne k$ 인 모든 주제에서 $\beta\_{l,s}=0$ 이면 $s$ 를 주제 $k$ 의 **기준 단어(anchor word)** 라 한다. 모든 주제에 기준 단어가 있는 모형을 **분리 가능(separable)** 하다고 한다. 직관 절에서 공은 운동 주제의 기준 단어, 투표는 선거 주제의 기준 단어이고, 경기는 기준 단어가 아니다.

# 성질

## 볼록 결합 정리

분리 가능한 모형에서 주제 $k$ 의 기준 단어를 $s\_k$ 라 하면 모든 낱말 $i$ 에 대해 다음이 성립한다.

$$
\bar Q_i=\sum_{k=1}^K C_{ik}\thinspace\bar Q_{s_k},\qquad C_{ik}=P(z_1=k\mid w_1=i)
$$

여기서 $w\_1$ 은 첫째 자리의 낱말, $z\_1$ 은 그 자리의 주제다. Arora, Ge, Moitra 가 이 관계로 주제를 복원했다[^1].

증명의 요지. $\bar Q\_i$ 는 $w\_1=i$ 일 때 둘째 낱말 $w\_2$ 의 분포다. $z\_1$ 이 주어지면 $w\_1$ 은 $\beta\_{z\_1}$ 에서만 뽑히므로 $w\_2$ 와 독립이고, 그래서 $\bar Q\_i=\sum\_k C\_{ik}\thinspace P(w\_2\mid z\_1=k)$ 다. 기준 단어 $s\_k$ 에서는 $C\_{s\_k k}=1$ 이므로 $\bar Q\_{s\_k}=P(w\_2\mid z\_1=k)$ 다.

## 기준 단어 찾기

$R$ 이 가역이면 기준 단어의 행 $\bar Q\_{s\_1},\dots,\bar Q\_{s\_K}$ 는 일차독립이고, 볼록 결합 정리에 따라 모든 행이 이들의 볼록 결합이다. 따라서 $\bar Q$ 의 행들이 만드는 [볼록 껍질](convex-hull-algorithms.md)의 꼭짓점이 정확히 기준 단어의 행이다.

꼭짓점은 원점에서 가장 먼 행을 고르고, 이미 고른 행들이 생성하는 부분공간에서 가장 먼 행을 다음으로 고르기를 $K$ 번 되풀이해 찾는다. Arora 와 공저자들은 이 탐욕 절차가 행에 작은 오차가 있어도 기준 단어에 가까운 행을 고름을 보였다[^2].

## 주제 복원

$C$ 를 구하면 [Bayes 정리](bayes.md)로 주제가 나온다. 낱말 $i$ 가 나올 확률을 $p\_i=\sum\_j Q\_{ij}$ 라 하면 다음이 성립한다.

$$
\beta_{k,i}=\frac{C_{ik}\thinspace p_i}{\sum_{j=1}^V C_{jk}\thinspace p_j}
$$

$C$ 의 각 행은 $\bar Q\_i$ 를 기준 단어 행들의 볼록 결합으로 가장 가깝게 쓰는 가중치이므로 낱말마다 단체 위의 볼록 최적화로 구한다. 직관 절의 마지막 문단이 이 식의 계산이다.

## 표본 수와 시간

Arora, Ge, Moitra 는 분리 가능성의 여유와 $R$ 의 조건수에 대한 가정 아래, 문서 수가 $V$, $K$, 원하는 정확도의 역수에 대해 다항식만큼이면 이 방법이 다항 시간에 $\beta$ 를 원하는 정확도로 복원함을 증명했다[^1]. 가능도를 쓰는 LDA 의 사후분포 추론은 일반적으로 NP-어렵다(NP-hard, NP 는 nondeterministic polynomial time)[^3].

## 음 아닌 행렬 분해와의 관계

$Q=\beta^{\mathsf T}(R\beta)$ 는 $Q$ 를 음 아닌 두 행렬의 곱으로 쓴 것이고, 분리 가능성은 [음 아닌 행렬 분해](nonnegative-matrix-factorization.md)(nonnegative matrix factorization, NMF)의 분리 가능한 경우와 같다. 이 경우의 NMF 는 Arora, Ge, Kannan, Moitra 의 다항 시간 알고리즘으로 풀린다.

# 활용

- 큰 문서 모음의 주제 모형. 동시 출현 행렬은 문서를 한 번 읽어 만들고, 그 뒤의 계산은 문서 수와 무관하게 $V\times V$ 행렬 위에서 한다. Arora 와 공저자들은 이 방법이 Gibbs 표집과 비슷한 품질의 주제를 더 짧은 시간에 낸다고 보고했다[^2].
- 다른 추론의 출발점. 기준 단어 알고리즘이 낸 $\beta$ 를 변분 추론이나 Gibbs 표집의 초기값으로 쓴다.
- 초분광 영상의 분해. 화소마다 파장별 반사율을 적은 행렬에서, 한 물질만 담은 순수 화소가 기준 단어의 자리이고 다른 화소는 순수 화소들의 볼록 결합으로 쓰인다.

[^1]: S. Arora, R. Ge, A. Moitra, "Learning topic models — going beyond SVD", Proceedings of the 53rd IEEE Symposium on Foundations of Computer Science (2012), 1–10.
[^2]: S. Arora, R. Ge, Y. Halpern, D. Mimno, A. Moitra, D. Sontag, Y. Wu, M. Zhu, "A practical algorithm for topic modeling with provable guarantees", Proceedings of the 30th International Conference on Machine Learning (2013).
[^3]: D. Sontag, D. M. Roy, "Complexity of inference in latent Dirichlet allocation", Advances in Neural Information Processing Systems 24 (2011).

# 연관 문서

## 선수지식

- [잠재 Dirichlet 할당](latent-dirichlet-allocation.md)
- [음 아닌 행렬 분해](nonnegative-matrix-factorization.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #statistics #linear_algebra #algorithms
