# 기하분포

# 개요

**기하분포(geometric distribution)** 는 성공 확률이 같은 시행을 독립으로 되풀이할 때 처음 성공하기까지 한 시행 횟수의 분포다. 주사위를 $6$ 이 나올 때까지 던지면 첫 던짐에서 끝날 확률은 $\frac16$, 둘째 던짐에서 처음 끝날 확률은 $\frac56\cdot\frac16$ 이다. 기하분포는 이 확률들을 공비가 $\frac56$ 인 등비수열로 적고, 평균 대기 횟수가 $6$ 임을 준다.

# 직관

$6$ 이 $k$ 번째 던짐에서 처음 나오려면 앞의 $k-1$ 번은 모두 $6$ 이 아니고 $k$ 번째에 $6$ 이어야 한다. 던짐이 독립이므로 그 확률은 $\left(\frac56\right)^{k-1}\frac16$ 이다. $k=1,2,3,\dots$ 에 대해 더하면 [기하급수](geometric-series.md)의 합 공식으로 $\frac16\cdot\frac1{1-5/6}=1$ 이 되어, 언젠가는 $6$ 이 나온다.

평균 몇 번 던지는지는 첫 던짐으로 경우를 나누어 구한다. 첫 던짐이 $6$ 이면 한 번으로 끝난다. 아니면 한 번을 쓰고 처음과 똑같은 상황에서 다시 시작한다. 평균을 $E$ 라 하면 $E=1+\frac56E$ 이고 $E=6$ 이다.

# 정의

$0\lt p\le 1$ 일 때 양의 정수에 값을 갖는 확률변수 $G$ 가 다음을 만족하면 $G$ 는 성공 확률 $p$ 인 기하분포를 따른다고 하고 $G\sim\mathrm{Geom}(p)$ 로 쓴다.

$$
P(G=k)=(1-p)^{k-1}p,\qquad k=1,2,3,\dots
$$

$G$ 는 성공 확률이 $p$ 인 독립 Bernoulli 시행에서 첫 성공이 일어나는 시행의 번호다. Bernoulli 시행은 [이항분포](binomial-distribution.md)의 $n=1$ 인 경우다. 첫 성공 전의 실패 횟수 $G-1$ 을 기하분포로 부르는 책도 있고, 그때는 값이 $0,1,2,\dots$ 이다.[^1]

# 성질

## 평균과 분산

**정리.** $G\sim\mathrm{Geom}(p)$ 이면 $\mathbb E\lbrack G\rbrack=1/p$ 이고 $\mathrm{Var}(G)=(1-p)/p^2$ 이다.

증명의 요지. $P(G\ge k)=(1-p)^{k-1}$ 이므로 $\mathbb E\lbrack G\rbrack=\sum_{k\ge 1}P(G\ge k)=1/p$ 다. $\sum_k k(k-1)x^{k-2}$ 가 $1/(1-x)$ 의 이계도함수 $2/(1-x)^3$ 이므로 $\mathbb E\lbrack G(G-1)\rbrack=2(1-p)/p^2$ 이고, 분산은 $\mathbb E\lbrack G(G-1)\rbrack+\mathbb E\lbrack G\rbrack-\mathbb E\lbrack G\rbrack^2$ 이다.

## 무기억성

**정리.** 모든 양의 정수 $m$, $n$ 에서 $P(G\gt m+n\mid G\gt m)=P(G\gt n)$ 이다. 거꾸로 양의 정수에 값을 갖고 이 성질을 만족하는 분포는 기하분포뿐이다.

증명의 요지. $P(G\gt n)=(1-p)^n$ 이므로 앞 방향은 지수법칙이다. 뒤 방향은 $q_n=P(G\gt n)$ 이 $q_{m+n}=q_mq_n$ 을 만족하므로 $q_n=q_1^n$ 이고, $p=1-q_1$ 로 두면 된다.

연속값 확률변수에서 같은 성질을 만족하는 분포는 [지수분포](exponential-distribution.md)다.

## 지수분포로의 극한

**정리.** $G_p\sim\mathrm{Geom}(p)$ 이면 $p\to 0$ 에서 $pG_p$ 는 비율 $1$ 인 지수분포로 분포수렴한다.

증명의 요지. $t\gt 0$ 에서 $P(pG_p\gt t)=(1-p)^{\lfloor t/p\rfloor}$ 이고, $\log(1-p)\lfloor t/p\rfloor\to -t$ 이므로 이 값이 $e^{-t}$ 로 간다.

## 합과 음이항분포

$G_1,\dots,G_r$ 이 독립이고 모두 $\mathrm{Geom}(p)$ 를 따르면 합 $S=G_1+\cdots+G_r$ 은 $r$ 번째 성공이 일어나는 시행의 번호다. $k$ 번째 시행이 $r$ 번째 성공이려면 앞의 $k-1$ 번에서 성공이 $r-1$ 번이어야 하므로 다음이 성립한다.

$$
P(S=k)=\binom{k-1}{r-1}p^r(1-p)^{k-r},\qquad k=r,r+1,\dots
$$

이 분포를 **음이항분포(negative binomial distribution)** 라 한다.[^1]

# 활용

- [쿠폰 수집가 문제](coupon-collector.md)에서 $i-1$ 종류를 모은 뒤 새 종류가 나오기까지의 횟수는 성공 확률 $(n-i+1)/n$ 인 기하분포를 따르고, 평균 $n/(n-i+1)$ 을 더하면 수집 시간의 평균 $nH_n$ 이 나온다.
- 일시적인 [무작위 걷기](random-walks.md)에서 원점으로 돌아오는 횟수는 매번 다시 돌아올 확률이 같으므로 기하분포를 따르고, 평균이 유한한지로 재귀성을 판정한다.
- [Poisson 과정](poisson-process.md)의 도착과 지수분포의 서비스 시간으로 이루어진 대기행렬에서 정상 상태의 대기 인원은 $0,1,2,\dots$ 에 값을 갖는 기하분포를 따른다.
- 성공 확률 $p$ 인 무작위 알고리즘을 성공할 때까지 되풀이하면 반복 횟수가 기하분포를 따르고 평균 $1/p$ 번이다.

[^1]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. I, 3rd ed., Wiley (1968), Chapter VI. 대기 시간으로서의 기하분포와 음이항분포.

# 연관 문서

## 선수지식

- [이항분포](binomial-distribution.md)
- [기하급수](geometric-series.md)

## 더 알아보기

- [쿠폰 수집가 문제](coupon-collector.md)

#probability #combinatorics
