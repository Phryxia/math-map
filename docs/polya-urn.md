# Pólya 항아리

# 개요

**Pólya 항아리(Pólya urn)** 는 항아리에서 공을 하나 꺼내 색을 보고, 꺼낸 공과 같은 색의 공을 하나 더해 함께 되돌려 넣기를 되풀이하는 확률 모형이다. 빨간 공 하나와 파란 공 하나로 시작해 이것을 많이 되풀이하면, 처음에 어느 색이 먼저 나왔느냐에 따라 빨간 공의 비율이 서로 다른 값으로 굳어 간다. Pólya 항아리는 그 비율이 굳는 값의 분포를 계산하고, 많이 나온 쪽이 더 많이 나오게 되는 과정을 [베타분포](beta-distribution.md)로 다룬다.

# 직관

빨간 공 하나, 파란 공 하나로 시작해 세 번 꺼낸다. 빨강, 빨강, 파랑 순서로 나올 확률은 꺼낼 때마다 공이 하나씩 늘어나므로 $\frac12\cdot\frac23\cdot\frac14=\frac1{12}$ 이다. 파랑, 빨강, 빨강 순서이면 $\frac12\cdot\frac13\cdot\frac24=\frac1{12}$ 이다.

분모는 순서와 관계없이 $2\cdot 3\cdot 4$ 이다. 분자는 빨강이 나올 때마다 $1,2,\dots$ 가 차례로 곱해지고 파랑이 나올 때마다 $1,2,\dots$ 가 차례로 곱해지므로 빨강의 개수에만 의존한다. $n$ 번 가운데 빨강이 $k$ 번인 특정한 순서의 확률은 $k!\thinspace(n-k)!/(n+1)!$ 이다.

이런 순서가 $\binom nk$ 가지이므로 빨강이 $k$ 번 나올 확률은 $\binom nk\cdot\frac{k!\thinspace(n-k)!}{(n+1)!}=\frac1{n+1}$ 이다. 빨강의 개수는 $0$ 부터 $n$ 까지 모두 같은 확률로 나온다.

$n$ 번 뒤 항아리의 빨간 공 비율은 $(k+1)/(n+2)$ 이고, $k$ 가 $0,\dots,n$ 에 고르게 퍼져 있으므로 이 비율은 $n$ 이 커질 때 $\lbrack 0,1\rbrack$ 의 [균등분포](uniform-distribution.md)로 다가간다.

# 정의

처음에 빨간 공 $a$ 개와 파란 공 $b$ 개가 있고 $c$ 는 양의 정수다. 매번 공을 하나 고르게 꺼내 색을 보고, 그 공과 같은 색의 공 $c$ 개를 더해 함께 되돌려 넣는다. $n$ 번째에 빨강이 나오면 $X_n=1$, 파랑이 나오면 $X_n=0$ 이라 하고, $n$ 번 뒤 빨간 공의 비율을 다음처럼 쓴다.

$$
Z_n=\frac{a+c(X_1+\cdots+X_n)}{a+b+nc}
$$

# 성질

## 교환가능성

**정리.** $x_1,\dots,x_n\in\lbrace 0,1\rbrace$ 이고 $k=x_1+\cdots+x_n$ 이면 다음이 성립한다.

$$
P(X_1=x_1,\dots,X_n=x_n)=\frac{\prod_{i=0}^{k-1}(a+ic)\prod_{i=0}^{n-k-1}(b+ic)}{\prod_{i=0}^{n-1}(a+b+ic)}
$$

증명의 요지. 직관 절의 계산과 같다. 분모는 꺼낼 때마다 공의 총수이고, 분자는 빨강이 $i$ 번째로 나올 때 빨간 공이 $a+(i-1)c$ 개, 파랑도 마찬가지다.

확률이 $k$ 에만 의존하므로 $X_1,X_2,\dots$ 의 순서를 바꾸어도 결합분포가 같다. 이런 열을 교환가능(exchangeable)하다고 한다. $X_1$ 과 $X_2$ 는 독립이 아니다. $a=b=c=1$ 이면 $P(X_2=1\mid X_1=1)=\frac23$ 이고 $P(X_2=1)=\frac12$ 다.

## 베타 혼합 표현

**정리.** $p$ 가 $\mathrm{Beta}(a/c,\thinspace b/c)$ 를 따르고, $p$ 가 주어지면 $Y_1,Y_2,\dots$ 가 독립이고 성공 확률이 $p$ 인 Bernoulli 확률변수라 하자. 그러면 $(X_1,X_2,\dots)$ 와 $(Y_1,Y_2,\dots)$ 는 같은 분포를 따른다.

증명의 요지. $\int_0^1p^k(1-p)^{n-k}$ 를 $\mathrm{Beta}(a/c,\thinspace b/c)$ 의 밀도에 대해 적분하면 베타 함수의 비 $B(a/c+k,\thinspace b/c+n-k)/B(a/c,\thinspace b/c)$ 가 나오고, 감마 함수의 함수방정식 $\Gamma(s+1)=s\Gamma(s)$ 로 풀면 교환가능성 정리의 식과 같다.

Pólya 항아리는 [de Finetti 정리](de-finetti-theorem.md)가 말하는 교환가능한 열의 혼합 표현을 닫힌 꼴로 보여 주는 예다. 섞는 분포는 베타분포다.

## 비율의 수렴

**정리.** $Z_n$ 은 [Martingale](martingales.md) 이고, 거의 확실하게 극한 $Z_\infty$ 로 수렴하며, $Z_\infty$ 는 $\mathrm{Beta}(a/c,\thinspace b/c)$ 를 따른다.[^1]

증명의 요지. $n$ 번 뒤 공이 $N=a+b+nc$ 개이고 빨강이 $NZ_n$ 개이면, 다음 단계의 빨간 공 비율의 조건부 기댓값은 다음과 같다.

$$
Z_n\cdot\frac{NZ_n+c}{N+c}+(1-Z_n)\cdot\frac{NZ_n}{N+c}=Z_n
$$

$0\le Z_n\le 1$ 이므로 martingale 수렴 정리로 거의 확실한 극한이 있다. 베타 혼합 표현에서 [큰 수의 법칙](law-of-large-numbers.md)으로 $(X_1+\cdots+X_n)/n\to p$ 이고, $Z_n$ 과 이 평균의 차는 $0$ 으로 가므로 $Z_\infty=p$ 다.

## 다음 공의 예측

$n$ 번 가운데 빨강이 $k$ 번 나왔을 때 다음이 빨강일 확률은 $(a+kc)/(a+b+nc)$ 이다. $a=b=c=1$ 이면 $(k+1)/(n+2)$ 이고, [Laplace 계승 규칙](rule-of-succession.md)과 같은 값이다. 균등 사전분포를 둔 [Bayes 추론](bayesian-inference.md)의 예측과 Pólya 항아리의 추출 규칙이 같은 확률을 준다.

색이 $m$ 가지이면 극한 비율 벡터는 [Dirichlet 분포](dirichlet-distribution.md)를 따른다.

# 활용

- 비모수 Bayes 추론에서 Dirichlet 과정(Dirichlet process)의 표본은 새 색을 계속 더할 수 있는 Pólya 항아리로 뽑는다. 이 추출 규칙을 Blackwell–MacQueen 항아리(Blackwell–MacQueen urn)라 한다.[^2]
- 연결이 많은 정점에 새 간선이 더 잘 붙는 연결망 성장 모형, 먼저 앞선 제품이 더 많이 팔리는 시장 점유 모형처럼 많이 나온 것이 더 많이 나오는 과정을 이 항아리로 모형화한다. 극한 점유율이 처음 몇 번의 결과에 따라 무작위한 값으로 정해진다.

[^1]: R. Durrett, *Probability: Theory and Examples*, 5th ed., Cambridge University Press (2019), §4.3. Pólya 항아리의 비율 martingale 과 베타 극한.
[^2]: D. Blackwell, J. B. MacQueen, "Ferguson distributions via Pólya urn schemes", *Annals of Statistics* 1 (1973), 353–355.

# 연관 문서

## 선수지식

- [베타분포](beta-distribution.md)
- [Martingale](martingales.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
