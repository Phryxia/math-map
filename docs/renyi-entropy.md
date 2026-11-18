# Rényi 엔트로피

# 개요

**Rényi 엔트로피(Rényi entropy)** 는 확률분포의 불확실성을 차수 $\alpha$ 에 따라 다르게 평균해 잰 값들의 모임이다. 비밀번호 생성기가 $a$ 를 확률 $1/2$, $b$ 와 $c$ 를 각각 $1/4$ 로 내면, 결과를 적는 데 평균 $1.5$ 비트가 들지만 한 번에 맞히려는 사람은 $a$ 를 골라 절반의 확률로 맞힌다. 결과를 적는 비용과 한 번에 맞힐 확률은 서로 다른 물음이고, 차수 $\alpha$ 를 바꾸면 Rényi 엔트로피 하나로 두 물음의 답이 모두 나온다.

# 직관

생성기가 $a$, $b$, $c$ 를 확률 $1/2$, $1/4$, $1/4$ 로 낸다. [Shannon 엔트로피](entropy.md)는 결과마다의 정보량 $-\log_2 p$ 를 평균한 값이다. $a$ 의 정보량은 $1$ 비트, $b$ 와 $c$ 는 $2$ 비트이므로 평균은 $\frac12\cdot 1+\frac14\cdot 2+\frac14\cdot 2=1.5$ 비트다.

한 번에 맞히려는 사람은 가장 흔한 $a$ 를 고르고 확률 $1/2$ 로 성공한다. 이 확률은 결과가 둘이고 확률이 같은 분포의 성공 확률과 같으므로, 이 사람에게 생성기는 $1$ 비트짜리다. 생성기를 두 번 돌려 같은 값이 나올 확률은 $\frac14+\frac1{16}+\frac1{16}=\frac38$ 이다. 결과가 $m$ 개이고 확률이 같은 분포에서 이 확률은 $1/m$ 이므로, 이 물음으로는 생성기가 결과 $8/3$ 개짜리, 곧 $\log_2(8/3)\approx 1.415$ 비트다.

세 값 $1.5$, $1$, $1.415$ 는 모두 확률 $p_i$ 를 확률 $p_i$ 로 평균한 것의 로그다. 차이는 평균하는 방식에 있다. Shannon 엔트로피는 로그를 먼저 취해 산술평균하고, 두 번 같은 값이 나올 확률은 $p_i$ 를 그대로 산술평균하고, 한 번에 맞힐 확률은 $p_i$ 의 최댓값을 쓴다.

# 정의

유한 집합 위의 분포 $p=(p_1,\dots,p_n)$ 과 $\alpha\ge 0$, $\alpha\ne 1$ 에 대해 다음 값을 차수 $\alpha$ 의 **Rényi 엔트로피** 라 한다[^1].

$$
H_\alpha(p)=\frac{1}{1-\alpha}\log_2\sum_{i=1}^np_i^\alpha
$$

$\alpha=1$ 과 $\alpha=\infty$ 에서는 극한으로 정한다. 특별한 차수는 다음과 같다.

- $H_0(p)=\log_2\vert\lbrace i:p_i\gt 0\rbrace\vert$ 는 확률이 $0$ 이 아닌 결과 수의 로그이고, **Hartley 엔트로피(Hartley entropy)** 라 한다.
- $H_1(p)=-\sum_ip_i\log_2p_i$ 는 Shannon 엔트로피다.
- $H_2(p)=-\log_2\sum_ip_i^2$ 는 독립인 두 표본이 같을 확률의 로그에 $-1$ 을 곱한 것이고, **충돌 엔트로피(collision entropy)** 라 한다.
- $H_\infty(p)=-\log_2\max_ip_i$ 는 한 번에 맞힐 확률의 로그에 $-1$ 을 곱한 것이고, **최소 엔트로피(min-entropy)** 라 한다.

직관 절의 분포에서 $H_0=\log_2 3\approx 1.585$, $H_1=1.5$, $H_2=\log_2(8/3)\approx 1.415$, $H_\infty=1$ 이다.

# 성질

## 일반화된 평균

$H_\alpha$ 는 $p_i$ 를 확률 $p_i$ 로 평균한 $\alpha-1$ 차 거듭제곱 평균의 로그에 $-1$ 을 곱한 것이다.

$$
H_\alpha(p)=-\log_2\Bigl(\sum_ip_i\thinspace p_i^{\alpha-1}\Bigr)^{1/(\alpha-1)}
$$

$\alpha\to 1$ 이면 거듭제곱 평균이 기하평균 $\prod_ip_i^{p_i}$ 로 가고, 그 로그에 $-1$ 을 곱하면 Shannon 엔트로피다. Rényi 는 독립인 두 분포의 엔트로피가 더해진다는 조건과 정보량의 일반화된 평균이라는 조건을 함께 만족하는 것이 Shannon 엔트로피와 이 모임뿐임을 보였다[^1].

## 차수에 대한 단조성

거듭제곱 평균은 차수가 클수록 크므로 $H_\alpha(p)$ 는 $\alpha$ 에 대해 증가하지 않는다. 직관 절의 분포에서 $1.585\ge 1.5\ge 1.415\ge 1$ 이다. 모든 $p_i$ 가 같으면 모든 차수에서 $H_\alpha=\log_2n$ 이고, 이것이 각 차수의 최댓값이다.

## 충돌 엔트로피와 최소 엔트로피

$\max_ip_i^2\le\sum_ip_i^2\le\max_ip_i$ 이므로 다음이 성립한다.

$$
H_\infty(p)\le H_2(p)\le 2H_\infty(p)
$$

직관 절에서 $1\le 1.415\le 2$ 다. 최소 엔트로피를 직접 다루기 어려울 때 충돌 엔트로피로 상한과 하한을 얻는다.

## 가법성

$X$ 와 $Y$ 가 독립이면 $\sum_{i,j}(p_iq_j)^\alpha=\sum_ip_i^\alpha\sum_jq_j^\alpha$ 이므로 $H_\alpha(X,Y)=H_\alpha(X)+H_\alpha(Y)$ 다. 독립이 아닌 경우 Shannon 엔트로피의 연쇄법칙에 해당하는 등식은 $\alpha\ne 1$ 에서 성립하지 않는다.

## Rényi 발산

두 분포 $p$, $q$ 에 대해 $D_\alpha(p\Vert q)=\frac{1}{\alpha-1}\log_2\sum_ip_i^\alpha q_i^{1-\alpha}$ 를 **Rényi 발산(Rényi divergence)** 이라 한다. $\alpha\to 1$ 이면 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)로 가고, $q$ 가 $n$ 개 위의 균등분포이면 $D_\alpha(p\Vert q)=\log_2n-H_\alpha(p)$ 다.

# 활용

- [무작위성 추출기](randomness-extractors.md). 추출할 수 있는 균등한 비트의 수는 Shannon 엔트로피가 아니라 최소 엔트로피로 정해진다. 잔여 해시 보조정리의 증명은 출력의 충돌 확률, 곧 충돌 엔트로피를 계산한다.
- 비밀번호와 키의 안전성. 공격자가 한 번에 맞힐 확률은 $2^{-H_\infty}$ 다. 직관 절의 생성기는 Shannon 엔트로피가 $1.5$ 비트여도 한 번 시도에 절반의 확률로 뚫린다.
- [Hill 수](hill-numbers.md). 생태학의 차수 $q$ 다양도는 $2^{H_q}$ 이고, 종 수, Shannon 지수의 지수, Simpson 지수의 역수가 $q=0,1,2$ 의 경우다.
- [엔트로피 불확정성 관계](entropic-uncertainty.md). 두 측정의 결과 분포의 Rényi 엔트로피 합에 아래 한계를 주는 Maassen–Uffink 부등식(Maassen–Uffink inequality)이 $1/\alpha+1/\beta=2$ 인 차수 $\alpha$, $\beta$ 에서 성립한다.

[^1]: A. Rényi, "On measures of entropy and information", *Proc. Fourth Berkeley Symp. Math. Statist. Probab.* 1 (1961), 547–561.

# 연관 문서

## 선수지식

- [Shannon 엔트로피](entropy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #probability
