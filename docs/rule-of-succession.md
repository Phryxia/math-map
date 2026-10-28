# Laplace 계승 규칙

# 개요

**Laplace 계승 규칙(Laplace's rule of succession)** 은 성공 확률을 모르는 시행을 몇 번 해 본 결과로 다음 시행이 성공할 확률을 정하는 규칙이다. 동전을 세 번 던져 세 번 다 앞면이 나오면, 빈도로는 앞면의 확률이 $1$ 이어서 다음에 뒷면이 나오는 것을 불가능하다고 예측하게 된다. 계승 규칙은 성공 확률의 사전분포를 균등분포로 두고 [Bayes 추론](bayesian-inference.md)으로 계산해, $n$ 번 가운데 $s$ 번 성공했을 때 다음 성공 확률을 $(s+1)/(n+2)$ 로 준다.

# 직관

Laplace 계승 규칙은 성공 확률을 모르는 독립 시행을 $n$ 번 하여 $s$ 번 성공했을 때, 다음 시행이 성공할 확률을 $(s+1)/(n+2)$ 로 정하는 규칙이다. 성공 확률의 사전분포를 $\lbrack 0,1\rbrack$ 위의 균등분포로 둔 Bayes 추론의 사후 예측 확률이다.

관측한 빈도 $s/n$ 과 달리 한 번도 보지 못한 결과에도 양의 확률을 준다. 범주가 $m$ 개인 경우로 넓힌 것이 더하기 1 평활(add-one smoothing)이다.

동전을 세 번 던져 세 번 다 앞면이 나왔다. 빈도로는 앞면의 확률이 $3/3=1$ 이므로 다음에 뒷면이 나올 확률을 $0$ 으로 예측한다. 세 번의 관측으로 뒷면이 불가능하다고 말하는 것이다.

앞면의 확률 $p$ 를 모른다는 것을 $p$ 가 $\lbrack 0,1\rbrack$ 에서 균등분포를 따른다고 적는다. 세 번 다 앞면일 확률은 $p^3$ 을 $p$ 에 대해 평균한 $\int_0^1p^3\thinspace dp=1/4$ 이고, 네 번 다 앞면일 확률은 $\int_0^1p^4\thinspace dp=1/5$ 이다. 그러므로 세 번 앞면을 본 뒤 넷째가 앞면일 확률은 $(1/5)/(1/4)=4/5$ 이고, 뒷면의 확률은 $1/5$ 로 남는다.

같은 계산을 $n$ 번 가운데 $s$ 번 앞면에 하면 $(s+1)/(n+2)$ 가 나온다. 앞면과 뒷면을 한 번씩 더 본 것처럼 센 빈도다.

# 정의

$p$ 가 $\lbrack 0,1\rbrack$ 위의 균등분포를 따르고, $p$ 가 주어지면 $X_1,X_2,\dots$ 가 독립이며 $P(X_i=1\mid p)=p$ 다. $S_n=X_1+\cdots+X_n$ 이라 한다. **Laplace 계승 규칙** 은 다음 예측 확률이다.

$$
P(X_{n+1}=1\mid X_1,\dots,X_n)=\frac{S_n+1}{n+2}
$$

범주가 $m$ 개이고 $n$ 번 가운데 범주 $j$ 가 $n_j$ 번 나왔으면, 범주 확률 벡터의 사전분포를 단체 위의 균등분포로 둘 때 다음이 범주 $j$ 일 확률은 $(n_j+1)/(n+m)$ 이다. 일반적으로 $\lambda\gt 0$ 에 대해 $(n_j+\lambda)/(n+m\lambda)$ 로 정하는 예측을 **가산 평활(additive smoothing)** 이라 한다.

# 성질

## 사후분포

균등분포는 $\mathrm{Beta}(1,1)$ 이므로 Bayes 추론의 Beta–Binomial 켤레 갱신으로 사후분포가 $\mathrm{Beta}(S_n+1,\thinspace n-S_n+1)$ 이다. 다음 시행의 성공 확률은 사후평균 $(S_n+1)/(n+2)$ 이다. 범주가 $m$ 개이면 사전분포가 매개변수 $(1,\dots,1)$ 인 [Dirichlet 분포](dirichlet-distribution.md)이고, 사후평균이 $(n_j+1)/(n+m)$ 이다. 가산 평활의 $\lambda$ 는 매개변수 $(\lambda,\dots,\lambda)$ 인 Dirichlet 사전분포에 해당한다.

## 성공 횟수의 분포

**명제.** $s=0,1,\dots,n$ 마다 $P(S_n=s)=1/(n+1)$ 이다.

$P(S_n=s)=\binom ns\int_0^1p^s(1-p)^{n-s}\thinspace dp=\binom ns\frac{s!\thinspace(n-s)!}{(n+1)!}=\frac1{n+1}$ 이다. $\square$

특정한 순서의 관측열 $x_1,\dots,x_n$ 이 나올 확률은 $1/\bigl((n+1)\binom ns\bigr)$ 이고 순서에 의존하지 않는다. 관측열이 교환가능하므로 [de Finetti 정리](de-finetti-theorem.md)의 혼합 표현의 한 예다.

## 부호 길이의 후회

관측열 $x^n$ 에 대해, 이 규칙으로 차례로 예측한 확률의 곱은 $P_{\mathrm L}(x^n)=1/\bigl((n+1)\binom ns\bigr)$ 이다. 사후에 고른 최선의 $p$ 로 계산한 확률 $\hat p^s(1-\hat p)^{n-s}$ ($\hat p=s/n$) 와 견주면

$$
\log\frac{\hat p^s(1-\hat p)^{n-s}}{P_{\mathrm L}(x^n)}=\log(n+1)+\log\Bigl(\binom ns\hat p^s(1-\hat p)^{n-s}\Bigr)\le\log(n+1)
$$

이다. 둘째 항은 이항분포의 한 확률의 로그이므로 $0$ 이하다.

사전분포를 매개변수 $(1/2,1/2)$ 인 Beta 분포로 바꾸어 $(S_n+1/2)/(n+1)$ 로 예측하면 이 차가 $\frac12\log n+O(1)$ 로 줄어든다. 이 예측을 **Krichevsky–Trofimov 추정량(Krichevsky–Trofimov estimator)** 이라 한다.[^1]

# 활용

- **적응형 산술 부호화.** [산술 부호화](arithmetic-coding.md)에 이 규칙의 예측 확률을 넣으면 분포를 모르는 이진 원천을 부호화한다. 부호 길이와, 사후 최선의 고정 분포에 맞춘 이상적 부호 길이의 차는 $\log(n+1)$ 에 상수를 더한 값 이하다.
- **보편 포트폴리오.** 자산을 기호로, 가격 상대값을 나온 기호의 표시 벡터로 놓으면 [보편 포트폴리오](universal-portfolio.md)의 비율이 이 규칙의 예측 확률과 같다. 부호 길이의 후회 상한 $\log(n+1)$ 이 보편 포트폴리오의 후회 상한의 $m=2$ 경우다.
- **언어 모형의 평활.** 단어 열의 빈도로 확률을 추정할 때 말뭉치에 없는 열의 확률이 $0$ 이 되지 않도록 가산 평활을 쓴다. 범주 수 $m$ 이 표본 수보다 크면 $\lambda=1$ 은 보지 못한 열에 너무 큰 확률을 주므로 작은 $\lambda$ 를 쓴다.

[^1]: Thomas M. Cover, Joy A. Thomas, *Elements of Information Theory*, 2nd ed., Wiley, 2006, 13.2 절.

# 연관 문서

## 선수지식

- [Bayes 추론](bayesian-inference.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #information_theory
