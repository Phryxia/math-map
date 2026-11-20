# 복합 Poisson 과정

# 개요

**복합 Poisson 과정(compound Poisson process)** 은 무작위 시각에 일어나는 사건마다 무작위 크기를 더해 가는 누적합이다. 보험회사에 청구가 하루 평균 $2$ 건 들어오고 한 건의 금액이 $1$ 만원이나 $3$ 만원으로 반반이면, 하루 청구액은 건수와 건당 금액이 함께 무작위인 합이다. 이 합이 $0$ 일 확률은 $e^{-2}\approx 0.135$ 이지만, $3$ 만원일 확률은 한 건이 $3$ 만원인 경우와 세 건이 모두 $1$ 만원인 경우를 더해야 해서 바로 보이지 않는다. 복합 Poisson 과정은 건수를 Poisson 과정으로, 금액을 건수와 독립인 같은 분포의 수로 두고, 합의 분포를 건수로 조건을 걸어 계산하는 틀이다.

# 직관

하루 청구 건수 $N$ 은 평균 $2$ 인 [Poisson 분포](poisson-distribution.md)를 따르고, 건당 금액 $Y_1,Y_2,\dots$ 는 서로 독립이며 $N$ 과도 독립이고, $1$ 과 $3$ 을 반반의 확률로 갖는다. 하루 청구액은 $S=Y_1+\cdots+Y_N$ 이다.

$S$ 가 작은 값을 갖는 경우를 건수로 나누어 센다. $S=0$ 은 $N=0$ 뿐이라 $e^{-2}\approx 0.1353$ 이다. $S=1$ 은 한 건이 $1$ 만원인 경우라 $2e^{-2}\cdot\tfrac12\approx 0.1353$ 이고, $S=2$ 는 두 건이 모두 $1$ 만원인 경우라 $2e^{-2}\cdot\tfrac14\approx 0.0677$ 이다.

$S=3$ 은 두 경우를 더한다. 한 건이 $3$ 만원일 확률은 $2e^{-2}\cdot\tfrac12$ 이고, 세 건이 모두 $1$ 만원일 확률은 $\tfrac{8}{6}e^{-2}\cdot\tfrac18$ 이다. 합은 $\tfrac76e^{-2}\approx 0.1579$ 다.

평균은 건수의 평균 $2$ 와 금액의 평균 $2$ 의 곱 $4$ 다. 분산은 건수가 흔들리는 몫 $\mathrm{Var}(N)(EY)^2=8$ 과 금액이 흔들리는 몫 $E[N]\mathrm{Var}(Y)=2$ 를 더한 $10$ 이다.

# 정의

$N(t)$ 를 비율 $\lambda$ 인 [Poisson 과정](poisson-process.md)이라 하고, $Y_1,Y_2,\dots$ 를 분포 $F$ 를 따르는 서로 독립인 확률변수로 $N$ 과 독립이게 둔다. 다음 과정을 비율 $\lambda$, 도약 분포 $F$ 의 **복합 Poisson 과정** 이라 한다.

$$
S(t)=\sum_{i=1}^{N(t)}Y_i
$$

$N(t)=0$ 이면 $S(t)=0$ 이다. $S(t)$ 의 분포를 **복합 Poisson 분포(compound Poisson distribution)** 라 한다. 직관 절의 $S$ 는 $\lambda=2$, $t=1$, $F$ 가 $1$ 과 $3$ 에 반씩 놓인 경우의 $S(1)$ 이다.

# 성질

## 특성함수

$Y$ 의 특성함수를 $\varphi_Y(u)$ 라 하면 다음이 성립한다.

$$
E\bigl\lbrack e^{iuS(t)}\bigr\rbrack=\exp\Bigl(\lambda t\bigl(\varphi_Y(u)-1\bigr)\Bigr)
$$

$N(t)=n$ 으로 조건을 걸면 $E\lbrack e^{iuS(t)}\mid N(t)=n\rbrack=\varphi_Y(u)^n$ 이고, 여기에 Poisson 확률 $e^{-\lambda t}(\lambda t)^n/n!$ 을 곱해 더하면 지수급수가 된다. 미분하면 $E\lbrack S(t)\rbrack=\lambda tE\lbrack Y\rbrack$, $\mathrm{Var}(S(t))=\lambda tE\lbrack Y^2\rbrack$ 이 나온다. 직관 절에서 $E\lbrack Y^2\rbrack=5$ 라 분산이 $10$ 이다.

## 독립 정상 증분

복합 Poisson 과정은 겹치지 않는 시간 구간의 증분이 서로 독립이고, 증분의 분포가 구간의 길이에만 달려 있다. 그래서 복합 Poisson 과정은 [Lévy 과정](levy-processes.md)이고, Lévy 측도는 유한 측도 $\lambda F$ 다. 거꾸로 경로가 계단 함수이고 도약 수가 유한 시간에 유한한 Lévy 과정은 복합 Poisson 과정이다.[^1]

## 크기별 분해

도약 크기가 $1,2,3,\dots$ 의 값만 갖고 $P(Y=j)=f_j$ 이면, 크기가 $j$ 인 사건의 수 $N_j(t)$ 는 비율 $\lambda f_j$ 인 서로 독립인 Poisson 과정이고 다음이 성립한다.

$$
S(t)=\sum_{j\ge 1}j\thinspace N_j(t)
$$

직관 절에서는 $S=N_1+3N_3$ 이고 $N_1$, $N_3$ 이 각각 평균 $1$ 인 독립 Poisson 변수다. $S=3$ 은 $(N_1,N_3)=(3,0)$ 이나 $(0,1)$ 이고, $e^{-1}\tfrac16\cdot e^{-1}+e^{-1}\cdot e^{-1}=\tfrac76e^{-2}$ 가 직관 절의 값과 같다.

## Panjer 점화식

도약 크기가 $1,2,\dots$ 의 값만 가질 때 $p_k=P(S(1)=k)$ 는 $p_0=e^{-\lambda}$ 에서 시작해 다음 점화식으로 계산된다.[^2]

$$
p_k=\frac{\lambda}{k}\sum_{j=1}^{k}j\thinspace f_j\thinspace p_{k-j}
$$

직관 절에서는 $f_1=f_3=\tfrac12$ 이고 $p_1=p_0$, $p_2=\tfrac12p_1$ 이며, $p_3$ 은 다음과 같다.

$$
p_3=\frac23\Bigl(\frac12p_2+3\cdot\frac12p_0\Bigr)\approx 0.1579
$$

$k$ 까지의 확률을 $O(k^2)$ 번의 연산으로 얻는다.

## 무한 분해 가능성

음이 아닌 정수 위의 분포가 $P(X=0)\gt 0$ 이고 모든 $n$ 에 대해 서로 독립이고 같은 분포인 $n$ 개의 합으로 쓰일 수 있으면, 그 분포는 복합 Poisson 분포다.[^3]

## 정규 근사

$E\lbrack Y^2\rbrack\lt\infty$ 이면 $t\to\infty$ 에서 다음 분포가 표준정규분포로 수렴한다.

$$
\frac{S(t)-\lambda tE\lbrack Y\rbrack}{\sqrt{\lambda tE\lbrack Y^2\rbrack}}
$$

정수 $t$ 에서 $S(t)$ 는 $S(1)$ 과 같은 분포인 독립 증분 $t$ 개의 합이므로 [중심극한정리](central-limit-theorem.md)가 적용된다.

# 활용

- [Cramér–Lundberg 모형](cramer-lundberg-model.md). 보험회사의 누적 보험금을 복합 Poisson 과정으로 놓고 파산 확률을 계산한다.
- [M/G/1 대기행렬](mg1-queue.md). 손님이 Poisson 과정으로 도착하고 서비스 시간이 일반 분포이면, 시각 $t$ 까지 도착한 일의 총량이 복합 Poisson 과정이다.
- 보험 계리. 한 해의 총 청구액 분포를 Panjer 점화식으로 계산해 준비금과 재보험료를 정한다.[^2]
- 도약 확산 모형. 주가의 로그에 [Brown 운동](brownian-motion.md)과 복합 Poisson 과정을 더해 갑작스러운 가격 변동을 넣는다.

[^1]: K. Sato, *Lévy Processes and Infinitely Divisible Distributions*, Cambridge University Press (1999).

[^2]: H. H. Panjer, "Recursive evaluation of a family of compound distributions", *ASTIN Bulletin* 12 (1981), 22–26.

[^3]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. 1, 3rd ed., Wiley (1968), XII.2 절.

# 연관 문서

## 선수지식

- [Poisson 과정](poisson-process.md)

## 더 알아보기

- [Cramér–Lundberg 모형](cramer-lundberg-model.md)

#probability #statistics
