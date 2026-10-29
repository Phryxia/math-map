# 쿠폰 수집가 문제

# 개요

**쿠폰 수집가 문제(coupon collector's problem)** 는 $n$ 종류의 쿠폰 가운데 하나가 고르게 무작위로 나오는 뽑기를 되풀이할 때, 모든 종류를 한 번 이상 모으기까지 몇 번 뽑아야 하는지 묻는 문제다. 주사위를 던져 $1$ 부터 $6$ 까지 모든 눈을 한 번씩 보려면 평균 $14.7$ 번을 던져야 하고, 이는 $6$ 의 두 배를 훨씬 넘는다. 뽑기를 "새 종류가 나올 때까지" 의 구간으로 나누면 구간마다 기다리는 횟수의 평균이 간단히 계산되고, 그 합이 답이다.

# 직관

주사위의 여섯 눈을 모은다. 첫 던짐은 무조건 새 눈이다. 눈 하나를 본 뒤에는 남은 다섯 눈 가운데 하나가 나올 확률이 $5/6$ 이므로 새 눈을 보기까지 평균 $6/5$ 번을 던진다. 눈 둘을 본 뒤에는 확률 $4/6$ 이고 평균 $6/4$ 번이다.

이렇게 마지막 한 눈을 기다리는 구간까지 더하면 평균은 다음과 같다.

$$
\frac66+\frac65+\frac64+\frac63+\frac62+\frac61=6\left(1+\frac12+\cdots+\frac16\right)=6\cdot\frac{49}{20}=14.7
$$

마지막 구간 하나가 평균 $6$ 번으로 전체의 40% 를 차지한다. 거의 다 모은 뒤 남은 하나를 기다리는 시간이 길다.

# 정의

$X_1,X_2,\dots$ 를 $\lbrace 1,\dots,n\rbrace$ 위에서 고르게 분포하는 독립 확률변수라 하고, 다음 정지 시각을 **수집 시간(collection time)** 이라 한다.

$$
T_n=\min\lbrace t : \lbrace X_1,\dots,X_t\rbrace=\lbrace 1,\dots,n\rbrace\rbrace
$$

$i-1$ 종류를 모은 뒤 $i$ 번째 새 종류가 나오기까지의 횟수를 $G_i$ 라 하면 $T_n=G_1+\cdots+G_n$ 이다. $G_i$ 는 성공 확률이 $p_i=(n-i+1)/n$ 인 기하분포(geometric distribution)를 따르고, $G_1,\dots,G_n$ 은 서로 독립이다.

# 성질

## 기댓값

$n$ 번째 조화수(harmonic number)를 $H_n=1+\frac12+\cdots+\frac1n$ 이라 하면 다음이 성립한다.

$$
\mathbb E\lbrack T_n\rbrack=\sum_{i=1}^{n}\frac{n}{n-i+1}=nH_n=n\ln n+\gamma n+\frac12+O\Big(\frac1n\Big)
$$

$\gamma\approx 0.5772$ 는 Euler–Mascheroni 상수(Euler–Mascheroni constant)다. 기하분포의 평균 $1/p_i$ 를 더하고 [유한 확률 공간](probability.md)의 기댓값의 선형성을 쓴 것이다.

## 분산

$G_i$ 들이 독립이므로 분산도 더해진다.

$$
\mathrm{Var}(T_n)=\sum_{i=1}^{n}\frac{1-p_i}{p_i^2}\le\sum_{k=1}^{n}\frac{n^2}{k^2}\lt\frac{\pi^2}{6}n^2
$$

표준편차가 $O(n)$ 이고 평균이 $n\ln n$ 이므로, $T_n/(n\ln n)$ 은 $1$ 로 확률수렴한다.

## 꼬리 확률

$c\gt 0$ 에 대해 다음이 성립한다.

$$
\Pr\lbrack T_n\gt\lceil n\ln n+cn\rceil\rbrack\le e^{-c}
$$

증명의 요지. $m=\lceil n\ln n+cn\rceil$ 번 뽑은 뒤 특정 종류 $j$ 가 한 번도 나오지 않을 확률은 $(1-1/n)^m\le e^{-m/n}\le e^{-c}/n$ 이다. $n$ 종류에 합집합 한계를 쓰면 된다.

## Erdős–Rényi 극한

모든 [실수](real-numbers.md) $c$ 에 대해 다음이 성립한다.[^1]

$$
\lim_{n\to\infty}\Pr\lbrack T_n\le n\ln n+cn\rbrack=e^{-e^{-c}}
$$

증명의 요지. $m=n\ln n+cn$ 번 뽑은 뒤 빠진 종류의 개수는 평균이 $n(1-1/n)^m\to e^{-c}$ 이고, 포함배제로 그 분포가 평균 $e^{-c}$ 의 [Poisson 분포](poisson-distribution.md)(Poisson distribution)로 수렴함을 보인다. 빠진 종류가 $0$ 개일 확률이 $e^{-e^{-c}}$ 다. 이 극한분포를 Gumbel 분포(Gumbel distribution)라 한다.

# 활용

- 카드 묶음에서 맨 위 카드를 무작위 위치에 끼워 넣는 섞기는, 처음 맨 아래에 있던 카드가 맨 위로 올라온 뒤 한 번 더 섞으면 완전히 섞인다. 그때까지의 횟수가 쿠폰 수집 시간과 같은 꼴이어서 [Markov 연쇄의 혼합시간](mixing-time.md)이 $n\ln n$ 근처다.
- 키를 $n$ 개의 칸에 고르게 무작위로 넣을 때 모든 칸이 한 번 이상 차는 키의 수가 수집 시간 $T_n$ 이다.
- Erdős–Rényi 무작위 그래프에서 고립점이 사라지는 간선 수의 문턱 $\frac12n\ln n$ 이 같은 계산에서 나온다.

[^1]: P. Erdős, A. Rényi, "On a classical problem of probability theory", *Magyar Tudományos Akadémia Matematikai Kutató Intézetének Közleményei* **6** (1961), 215–220.

# 연관 문서

## 선수지식

- [유한 확률 공간](probability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #algorithms
