# Han 부등식

# 개요

**Han 부등식(Han's inequality)** 은 여러 좌표로 된 무작위 대상의 불확실성이, 좌표를 하나씩 빼고 본 부분들의 불확실성으로 아래에서 눌린다는 부등식이다. 정육면체의 꼭짓점 몇 개를 고르면, 고른 꼭짓점끼리 잇는 모서리는 많아야 몇 개인가가 이런 물음이다. Han 부등식은 고른 꼭짓점 하나를 고르게 뽑은 확률변수의 [Shannon 엔트로피](entropy.md)를 좌표별로 쪼개, 모서리의 수를 엔트로피로 세어 이 물음에 답한다.

# 직관

정육면체의 꼭짓점을 세 비트 문자열 $000,\dots,111$ 로 적으면, 모서리는 한 비트만 다른 두 꼭짓점을 잇는다. 아랫면 $S=\lbrace 000,100,001,101\rbrace$ 을 고르면 $S$ 안의 모서리는 넷이다. 꼭짓점 네 개로 모서리를 다섯 개 이상 만들 수 있는지 묻는다.

$S$ 에서 꼭짓점 $X=(X\_1,X\_2,X\_3)$ 을 고르게 뽑는다. 둘째와 셋째 비트를 알려 주면 첫째 비트는 어떻게 남는가. $X=000$ 이면 첫째 비트만 바꾼 $100$ 도 $S$ 에 있으므로 첫째 비트는 $0$ 과 $1$ 이 반반이고, 남은 불확실성이 $1$ 비트다. 첫째 비트만 바꾼 꼭짓점이 $S$ 에 없으면 남은 불확실성이 $0$ 이다.

그래서 첫째 비트에 남는 불확실성의 평균은 첫째 방향 모서리의 양 끝에 있는 꼭짓점의 비율이다. 첫째 방향 모서리가 $e\_1$ 개이면 그 비율은 $2e\_1/\lvert S\rvert$ 다. 세 방향을 더하면 $2e(S)/\lvert S\rvert$ 이고, $e(S)$ 는 $S$ 안의 모서리 수다.

Han 부등식에 따르면 이 합은 $X$ 전체의 불확실성 $\log\_2\lvert S\rvert$ 를 넘지 않는다. 그러므로 $e(S)\le\frac12\lvert S\rvert\log\_2\lvert S\rvert$ 이고, 꼭짓점 넷이면 모서리는 넷 이하다. 아랫면은 첫째와 셋째 비트가 각각 $1$ 비트씩 남아 합이 $2=\log\_2 4$ 이므로 등호가 성립한다.

# 정의

## 좌표를 뺀 묶음

이산 확률변수들의 묶음 $X=(X\_1,\dots,X\_n)$ 에서 $S\subseteq\lbrace 1,\dots,n\rbrace$ 이면 $X\_S=(X\_i)\_{i\in S}$ 로 적고, $i$ 번째 좌표를 뺀 묶음을 $X\_{-i}$ 로 적는다. 직관 절에서 $X\_{-1}=(X\_2,X\_3)$ 이다.

## 평균 엔트로피

$k=1,\dots,n$ 에 대해 크기 $k$ 인 좌표 묶음의 엔트로피를 좌표 하나당으로 평균한 값을 **평균 엔트로피(average subset entropy)** $h\_k$ 라 한다.

$$
h_k=\frac{1}{\binom nk}\sum_{\lvert S\rvert=k}\frac{H(X_S)}{k}
$$

직관 절의 아랫면에서 $X\_1$ 과 $X\_3$ 은 독립인 공정한 비트이고 $X\_2=0$ 이다. 엔트로피를 비트로 재면 $h\_1=(1+0+1)/3$, $h\_2=(1+1+2)/6$, $h\_3=2/3$ 으로 셋 다 $2/3$ 이다.

# 성질

## Han 부등식

다음 두 부등식이 성립하고 서로 동치다(Han).[^1]

$$
\sum_{i=1}^nH(X_{-i})\ge(n-1)\thinspace H(X),\qquad\sum_{i=1}^nH(X_i\mid X_{-i})\le H(X)
$$

둘째 식의 각 항은 $H(X\_i\mid X\_{-i})=H(X)-H(X\_{-i})$ 이므로 두 식이 같다.

증명의 요지. 조건을 늘리면 엔트로피가 줄어들므로 다음이 성립한다.

$$
H(X_i\mid X_{-i})\le H(X_i\mid X_1,\dots,X_{i-1})
$$

이것을 $i=1,\dots,n$ 에 대해 더하면 연쇄법칙으로 우변의 합이 $H(X)$ 다. 첫째 식은 $n$ 개의 묶음 $X\_{-i}$ 가 각 좌표를 $n-1$ 번 덮는 경우의 [Shearer 보조정리](shearer-lemma.md)이기도 하다.

## 평균 엔트로피의 감소

평균 엔트로피는 $k$ 에 대해 감소한다.[^1]

$$
h_1\ge h_2\ge\cdots\ge h_n
$$

증명의 요지. 크기 $k+1$ 인 묶음 $X\_T$ 마다 앞 절의 첫째 식을 쓰면 $\sum\_{i\in T}H(X\_{T\setminus\lbrace i\rbrace})\ge k\thinspace H(X\_T)$ 다. 모든 $T$ 에 대해 평균하면 $h\_k\ge h\_{k+1}$ 이 나온다.

$h\_1=\frac1n\sum H(X\_i)$ 이고 $h\_n=H(X)/n$ 이므로, 양 끝이 같은 것과 $X\_1,\dots,X\_n$ 이 독립인 것은 동치다. 직관 절의 아랫면은 좌표가 독립이어서 $h\_k$ 가 모두 같았다.

## 모서리 수의 상한

$\lbrace 0,1\rbrace^n$ 의 부분집합 $S$ 안에서 한 비트만 다른 쌍의 수를 $e(S)$ 라 하면 다음이 성립한다.[^2]

$$
e(S)\le\frac12\lvert S\rvert\log_2\lvert S\rvert
$$

증명은 직관 절의 계산이다. $S$ 에서 고르게 뽑은 $X$ 에 대해 $H(X\_i\mid X\_{-i})$ 는 $i$ 방향 모서리의 끝점 비율이고, 그 합 $2e(S)/\lvert S\rvert$ 가 $H(X)=\log\_2\lvert S\rvert$ 이하다. $S$ 가 $k$ 차원 부분 입방체이면 등호가 성립한다. 이 부등식은 [초입방체 그래프](hypercube-graphs.md)의 간선 등주 부등식이다.

# 활용

- 상대 엔트로피판. $P$ 가 곱 측도이면 모든 분포 $Q$ 에 대해 $\sum\_iD(Q^{(i)}\Vert P^{(i)})\le(n-1)\thinspace D(Q\Vert P)$ 다. $Q^{(i)}$, $P^{(i)}$ 는 $i$ 번째 좌표를 뺀 주변분포다. 이 부등식으로 엔트로피의 텐서화 부등식을 증명하고, 그것이 독립 변수 함수의 [집중부등식](concentration-inequalities.md)을 준다.[^2] $D$ 는 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)다.
- 집합족의 크기. $\lbrace 0,1\rbrace^n$ 의 부분집합 $\mathcal A$ 를 좌표 하나씩 지워 사영한 $\mathcal A\_i$ 들에 대해 $\lvert\mathcal A\rvert^{n-1}\le\prod\_i\lvert\mathcal A\_i\rvert$ 다. Shearer 보조정리 문서의 Loomis–Whitney 부등식과 같은 꼴이다.
- 다변량 상관의 측도. Han 은 평균 엔트로피의 차이 $h\_k-h\_{k+1}$ 로 변수 $n$ 개 사이의 대칭인 상관을 재는 음이 아닌 양들을 정의했다.[^1]

[^1]: T. S. Han, "Nonnegative entropy measures of multivariate symmetric correlations", *Information and Control* **36** (1978), 133–156.
[^2]: S. Boucheron, G. Lugosi, P. Massart, *Concentration Inequalities: A Nonasymptotic Theory of Independence*, Oxford University Press (2013), 4 장.

# 연관 문서

## 선수지식

- [Shearer 보조정리](shearer-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #information_theory #probability
