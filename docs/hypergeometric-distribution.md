# 초기하분포

# 개요

**초기하분포(hypergeometric distribution)** 는 두 종류가 섞인 유한 개의 대상에서 되돌려 넣지 않고 몇 개를 뽑았을 때, 한 종류가 뽑힌 개수의 분포다. 카드 $52$ 장에서 $5$ 장을 받았을 때 하트가 정확히 $2$ 장일 확률을 구하려면, 하트 $13$ 장에서 $2$ 장을 고르고 나머지 $39$ 장에서 $3$ 장을 고르는 방법의 수를 세어야 한다. 초기하분포는 그 수를 $5$ 장을 고르는 모든 방법의 수로 나누는 계산을, 대상의 수와 뽑는 수가 무엇이든 같은 식으로 한다.

# 직관

상자에 빨간 공 $4$ 개와 파란 공 $6$ 개가 있고, 공 $3$ 개를 한꺼번에 꺼낸다. 공 $10$ 개에서 $3$ 개를 고르는 방법은 $\binom{10}3=120$ 가지이고 모두 똑같이 나오기 쉽다.

빨강이 정확히 $2$ 개인 경우는 빨강 $4$ 개에서 $2$ 개를 고르고 파랑 $6$ 개에서 $1$ 개를 고르는 경우이므로 $\binom42\binom61=36$ 가지다. 확률은 $36/120=0.3$ 이다.

공을 하나 꺼낼 때마다 다시 넣는다면 매번 빨강이 나올 확률이 $0.4$ 이므로 [이항분포](binomial-distribution.md)에서 확률은 $3\cdot 0.4^2\cdot 0.6=0.288$ 이다. 넣지 않으면 빨강을 하나 꺼낸 뒤 남은 빨강이 줄어 다음 꺼내기의 확률이 바뀌므로 두 값이 다르다.

빨강의 개수 $0,1,2,3$ 마다 같은 계산을 하면 $20$, $60$, $36$, $4$ 가지이고, 더하면 $120$ 이다.

# 정의

$N$ 개의 대상 가운데 $K$ 개가 표시되어 있고, $N$ 개에서 $n$ 개를 같은 확률로 고른다. 고른 것 가운데 표시된 것의 개수를 $X$ 라 하면 다음이 성립하고, 이 분포를 모수 $N$, $K$, $n$ 인 초기하분포라 한다. $X\sim\mathrm{Hyp}(N,K,n)$ 으로 쓴다.

$$
P(X=k)=\frac{\binom Kk\binom{N-K}{n-k}}{\binom Nn},\qquad\max(0,\thinspace n-N+K)\le k\le\min(n,K)
$$

확률을 모두 더하면 $1$ 인 것은 [셈의 기본 원리](counting-principles.md)의 Vandermonde 항등식(Vandermonde's identity) $\sum_k\binom Kk\binom{N-K}{n-k}=\binom Nn$ 이다.[^1]

# 성질

## 평균과 분산

**정리.** $X\sim\mathrm{Hyp}(N,K,n)$ 이고 $p=K/N$ 이면 다음이 성립한다.

$$
\mathbb E\lbrack X\rbrack=np,\qquad\mathrm{Var}(X)=np(1-p)\cdot\frac{N-n}{N-1}
$$

증명의 요지. 대상을 하나씩 $n$ 번 꺼낸다고 보고, $t$ 번째에 표시된 것이 나오면 $1$ 인 지시변수를 $I_t$ 라 한다. 대칭성으로 $P(I_t=1)=p$ 이므로 평균은 $np$ 다. $s\ne t$ 이면 $P(I_s=I_t=1)=\frac{K(K-1)}{N(N-1)}$ 이므로 [공분산](covariance.md)은 $-\frac{p(1-p)}{N-1}$ 이다. 분산 $n$ 개와 공분산 $n(n-1)$ 개를 더하면 위 식이 나온다.

평균은 이항분포 $\mathrm B(n,p)$ 와 같고 분산은 $\frac{N-n}{N-1}$ 배로 작다. 이 배율을 **유한 모집단 수정(finite population correction)** 이라 한다. $n=N$ 이면 분산이 $0$ 이고, 모두 꺼내면 $X=K$ 로 정해진다.

## 대칭성

**정리.** $\mathrm{Hyp}(N,K,n)$ 과 $\mathrm{Hyp}(N,n,K)$ 는 같은 분포다.

증명의 요지. 이항계수를 계승으로 풀면 두 확률이 모두 $\frac{K!\thinspace(N-K)!\thinspace n!\thinspace(N-n)!}{N!\thinspace k!\thinspace(K-k)!\thinspace(n-k)!\thinspace(N-K-n+k)!}$ 이다. 표시된 대상과 뽑힌 대상의 역할을 바꾸어도 둘 다에 속하는 대상의 수는 같다.

## 이항분포 근사

**정리.** $n$ 과 $k$ 를 고정하고 $N\to\infty$, $K/N\to p$ 이면 $P(X=k)\to\binom nkp^k(1-p)^{n-k}$ 이다.

증명의 요지. 확률을 $\binom nk\prod_{i=0}^{k-1}\frac{K-i}{N-i}\prod_{i=0}^{n-k-1}\frac{N-K-i}{N-k-i}$ 로 다시 쓰면, 앞의 곱의 각 항이 $p$ 로, 뒤의 곱의 각 항이 $1-p$ 로 수렴한다.

모집단이 뽑는 수보다 훨씬 크면 넣지 않고 뽑는 것과 넣고 뽑는 것이 거의 같다. 여론조사에서 유권자 수백만 명 가운데 천 명을 뽑아 지지자 수를 이항분포로 다루는 것이 이 근사다.

## 꼬리 확률

넣지 않고 뽑은 합은 넣고 뽑은 합보다 평균 근처에 더 모인다. Hoeffding 은 연속인 볼록함수 $\phi$ 에 대해 $\mathbb E\lbrack\phi(X)\rbrack\le\mathbb E\lbrack\phi(Y)\rbrack$, $Y\sim\mathrm B(n,p)$ 임을 보였다.[^2] $\phi(x)=e^{\lambda x}$ 로 두면 [집중부등식](concentration-inequalities.md)의 Chernoff 한계와 Hoeffding 부등식이 초기하분포에도 그대로 성립한다.

# 활용

- 포획-재포획법(capture-recapture method)은 연못의 물고기 $K$ 마리를 잡아 표시해 풀어 주고, 나중에 $n$ 마리를 잡아 표시된 것이 $k$ 마리이면 전체 수 $N$ 을 $Kn/k$ 로 추정한다. 표시된 수는 $\mathrm{Hyp}(N,K,n)$ 을 따르고, 이 추정값은 $P(X=k)$ 를 가장 크게 하는 $N$ 의 근방이다.
- Fisher 정확 검정(Fisher's exact test)은 $2\times 2$ 표에서 행의 합과 열의 합을 고정하면 한 칸의 횟수가 초기하분포를 따르는 것을 써서 p-값을 정확히 계산한다. 기대 횟수가 작아 [Pearson 카이제곱 검정](pearson-chi-squared-test.md)의 근사를 쓸 수 없을 때 쓴다.
- 제품 $N$ 개 가운데 $n$ 개를 검사해 불량품 수로 묶음 전체를 받아들일지 정하는 표본 검사에서, 불량품 수는 초기하분포를 따른다.

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. I, 3rd ed., Wiley (1968), §II.6. 초기하분포의 정의와 이항분포 근사, 포획-재포획 추정.
[^2]: W. Hoeffding, "Probability inequalities for sums of bounded random variables", *Journal of the American Statistical Association* 58 (1963), 13–30, Theorem 4.

# 연관 문서

## 선수지식

- [이항분포](binomial-distribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics #combinatorics
