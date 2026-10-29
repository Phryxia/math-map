# 균등분포

# 개요

**균등분포(uniform distribution)** 는 정해진 범위 안의 모든 값이 똑같이 나오기 쉬운 분포다. $0$ 과 $1$ 사이의 수를 아무렇게나 하나 고를 때 그 수가 $0.3$ 보다 작을 확률은 구간 $\lbrack 0,0.3\rbrack$ 의 길이인 $0.3$ 이다. 균등분포는 확률을 길이의 비로 정하고, 이 분포를 따르는 수 하나를 함수에 넣어 다른 분포를 따르는 수를 만든다.

# 직관

$0$ 과 $1$ 사이에서 수 $U$ 를 고른다. $0.3$ 이 정확히 나올 확률이 양수 $c$ 라면 다른 모든 값도 확률 $c$ 로 나와야 하고, 서로 다른 값을 $\lceil 1/c\rceil+1$ 개만 모아도 확률의 합이 $1$ 을 넘는다. 그래서 한 값이 나올 확률은 $0$ 이고, 확률은 구간에 준다. 같은 길이의 구간은 같은 확률을 가져야 하므로 $P(U\le u)=u$ 다.

이 $U$ 로 원자가 붕괴할 때까지의 시간을 흉내 낸다. $T=-\log(1-U)$ 로 두면 $T\gt t$ 는 $1-U\lt e^{-t}$, 곧 $U\gt 1-e^{-t}$ 와 같으므로 $P(T\gt t)=e^{-t}$ 다. 이것은 비율 $1$ 인 [지수분포](exponential-distribution.md)의 꼬리다.

$U$ 에 넣은 함수 $-\log(1-u)$ 는 지수분포의 누적분포함수 $1-e^{-t}$ 의 역함수다. 다른 분포에서도 누적분포함수의 역함수에 $U$ 를 넣으면 그 분포를 따르는 수가 나온다.

# 정의

유한집합 $S$ 위의 **이산 균등분포(discrete uniform distribution)** 는 모든 $s\in S$ 에서 $P(X=s)=1/\vert S\vert$ 인 분포다.

$a\lt b$ 일 때 구간 $\lbrack a,b\rbrack$ 위의 **연속 균등분포(continuous uniform distribution)** 는 [확률밀도](probability-density.md)가 $\lbrack a,b\rbrack$ 에서 $1/(b-a)$ 이고 그 밖에서 $0$ 인 분포이고, $X\sim U(a,b)$ 로 쓴다.

더 일반적으로 $\mathbb R^n$ 의 집합 $A$ 가 양수이고 유한한 Lebesgue 측도(Lebesgue measure) $\vert A\vert$ 를 가지면, $A$ 위의 균등분포는 $P(X\in B)=\vert A\cap B\vert/\vert A\vert$ 로 정한다.

# 성질

## 평균과 분산

**정리.** $X\sim U(a,b)$ 이면 $\mathbb E\lbrack X\rbrack=(a+b)/2$ 이고 $\mathrm{Var}(X)=(b-a)^2/12$ 이다.

증명의 요지. $U=(X-a)/(b-a)\sim U(0,1)$ 에서 $\mathbb E\lbrack U\rbrack=\int_0^1u\thinspace du=1/2$, $\mathbb E\lbrack U^2\rbrack=1/3$ 이므로 $\mathrm{Var}(U)=1/12$ 이다. $X=a+(b-a)U$ 로 되돌려 쓴다.

## 역변환 표본추출

**정리.** $F$ 가 누적분포함수이고 $F^{-1}(u)=\inf\lbrace x:F(x)\ge u\rbrace$ 로 두면, $U\sim U(0,1)$ 일 때 $X=F^{-1}(U)$ 의 누적분포함수는 $F$ 다.[^1]

증명의 요지. $F$ 가 오른쪽 연속이고 증가하므로 $F^{-1}(u)\le x$ 와 $u\le F(x)$ 가 동치다. 따라서 $P(X\le x)=P(U\le F(x))=F(x)$ 다.

이 방법을 **역변환 표본추출(inverse transform sampling)** 이라 한다. 컴퓨터가 만드는 난수는 $\lbrack 0,1)$ 의 균등분포를 흉내 내므로, 누적분포함수의 역함수를 계산할 수 있는 분포는 이 정리로 표본을 만든다.

## 확률 적분 변환

**정리.** 확률변수 $X$ 의 누적분포함수 $F$ 가 연속이면 $F(X)\sim U(0,1)$ 이다.[^1]

증명의 요지. $F$ 가 연속이면 모든 $u\in(0,1)$ 에서 $F(x)=u$ 인 $x$ 가 존재하고, 그 가운데 가장 큰 것을 $x_u$ 라 하면 $P(F(X)\le u)=P(X\le x_u)=F(x_u)=u$ 다.

이 성질을 **확률 적분 변환(probability integral transform)** 이라 한다. 표본이 분포 $F$ 에서 왔는지 검정할 때 $F(X_i)$ 로 바꾸면 귀무가설 아래의 분포가 $F$ 에 의존하지 않는다.

## 순서통계량

**정리.** $U_1,\dots,U_n$ 이 독립이고 모두 $U(0,1)$ 을 따를 때, $k$ 번째로 작은 값 $U_{(k)}$ 의 밀도는 다음과 같다.

$$
f_{(k)}(u)=\frac{n!}{(k-1)!\thinspace(n-k)!}u^{k-1}(1-u)^{n-k}\qquad(0\le u\le 1)
$$

증명의 요지. $U_{(k)}$ 가 $u$ 근처의 길이 $du$ 인 구간에 있으려면 $n$ 개 가운데 하나가 그 구간에, $k-1$ 개가 $u$ 왼쪽에, $n-k$ 개가 오른쪽에 있어야 한다. 그렇게 나누는 방법이 $n!/((k-1)!\thinspace 1!\thinspace(n-k)!)$ 가지이고, 각각의 확률이 $u^{k-1}(1-u)^{n-k}du$ 다. 적분하면 $\mathbb E\lbrack U_{(k)}\rbrack=k/(n+1)$ 이고, 표본 $n$ 개가 구간을 평균적으로 길이가 같은 $n+1$ 조각으로 나눈다.

# 활용

- [Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md)의 통계량은 확률 적분 변환으로 $U(0,1)$ 표본의 경험 분포함수와 대각선의 거리로 바뀌어, 귀무가설의 분포가 연속이기만 하면 같은 표로 검정한다.
- [Brown 다리](brownian-bridge.md)는 $U(0,1)$ 표본의 경험 분포함수에서 $t$ 를 뺀 차를 $\sqrt n$ 배 한 과정의 극한이다.
- [붓스트랩](bootstrap.md)이 실패하는 표준 예는 $\lbrack 0,\theta\rbrack$ 의 균등분포에서 표본 최댓값으로 $\theta$ 를 추정하는 경우다.
- [지수족](exponential-families.md)은 모든 모수에서 밀도가 양수인 집합이 같으므로, 받침이 $\lbrack 0,\theta\rbrack$ 인 균등분포족은 지수족이 아니다.
- [생일 문제](birthday-problem.md)와 [쿠폰 수집가 문제](coupon-collector.md)는 이산 균등분포에서 독립으로 뽑은 값들이 겹치거나 모두 나오는 시점을 묻는다.

[^1]: G. Casella, R. L. Berger, *Statistical Inference*, 2nd ed., Duxbury (2002), §2.1. 확률 적분 변환과 역변환에 의한 표본 생성.

# 연관 문서

## 선수지식

- [확률밀도](probability-density.md)

## 더 알아보기

- [순서통계량](order-statistics.md)

#probability #statistics
