# de Finetti 정리

# 개요

**de Finetti 정리(de Finetti's theorem)** 는 교환가능한 무한 $\lbrace 0,1\rbrace$ 열의 분포가 Bernoulli 분포의 혼합으로 유일하게 적힌다는 정리다. 앞면이 나올 확률을 모르는 동전을 계속 던질 때 결과의 순서를 바꿔도 확률이 같다고 믿더라도, 각 던지기가 독립이라고 말할 수는 없다. 이 정리는 그런 열이 앞면 확률 $p$ 를 먼저 무작위로 고르고 그 $p$ 로 독립으로 던지는 것과 같은 분포임을 보여, [Bayes 추론](bayesian-inference.md)의 사전분포를 관측의 대칭성에서 끌어낸다.

# 직관

동전을 던지는데 앞면 확률을 모른다. 던지기들이 독립이라고 할 수는 없다. 앞면이 일곱 번 나온 뒤라면 여덟 번째도 앞면이라고 보게 되므로, 앞선 결과가 다음 결과의 확률을 바꾼다. 그런데 순서는 확률을 바꾸지 않는다. 열 번 가운데 앞면이 일곱 번 나오는 사건은 어느 자리에서 나왔든 확률이 같다. 쓸 수 있는 가정이 순서 무관성 하나뿐일 때 분포가 어떤 꼴인지 묻는다.

열이 무한하고 순서에 무관하면 앞면의 비율 $S_n/n$ 이 한 값으로 수렴한다. 그 극한을 $\Theta$ 라 하자. $\Theta$ 는 던지기 하나하나로는 정해지지 않고 열 전체의 꼬리에서만 읽히는 값이다. $\Theta=\theta$ 를 알고 있다고 하면 각 던지기는 확률 $\theta$ 로 앞면이 나오는 독립 던지기가 되고, 앞면이 $s$ 번인 길이 $n$ 의 결과의 확률이 $\theta^s(1-\theta)^{n-s}$ 다. $\Theta$ 자체는 무작위이므로 분포는 이 곱을 $\Theta$ 의 분포로 평균한 것이다.

# 정의

## 교환가능열

확률변수열 $X_1,X_2,\dots$ 이 교환가능(exchangeable)하다는 것은 모든 $n$ 과 $\lbrace 1,\dots,n\rbrace$ 의 모든 순열 $\sigma$ 에서 다음이 성립하는 것이다.

$$
(X_1,\dots,X_n)\ \overset{d}{=}\ (X_{\sigma(1)},\dots,X_{\sigma(n)})
$$

독립 동일분포열은 교환가능하다. 역은 성립하지 않으며, 항아리에서 공을 꺼내 같은 색 공을 하나 더 넣고 되돌리는 Pólya 항아리 열이 교환가능하지만 독립이 아닌 예다.

## 교환가능 σ 대수

교환가능 $\sigma$ 대수는 유한 개 좌표의 치환으로 바뀌지 않는 사건들이 이루는 $\sigma$ 대수다. 꼬리 $\sigma$ 대수를 포함하고, $S_n/n$ 의 극한이 이 $\sigma$ 대수에 대해 가측이다.

# 성질

## de Finetti 정리

$X_1,X_2,\dots$ 이 교환가능한 $\lbrace 0,1\rbrace$ 값 무한열이면 $\lbrack 0,1\rbrack$ 위의 확률측도 $\mu$ 가 유일하게 있어 모든 $n$ 과 $x\_1,\dots,x\_n\in\lbrace 0,1\rbrace$ 에서 다음이 성립한다.

$$
P(X_1=x_1,\dots,X_n=x_n)=\int_0^1\theta^{s}(1-\theta)^{n-s}\thinspace\mu(d\theta),\qquad s=\sum_{i=1}^n x_i
$$

증명의 요지는 둘이다. 첫째로 $S_n/n$ 이 거의 확실하게 수렴하고 그 극한의 분포를 $\mu$ 로 잡는다. 둘째로 길이 $n$ 의 결과 확률을 $N\gt n$ 개의 항아리 추출로 적고 $N\to\infty$ 로 보내면 복원 없는 추출이 복원 추출에 가까워져 위 적분이 나온다. 유일성은 $\mu$ 의 적률이 $P(X_1=\dots=X_n=1)$ 로 전부 결정되는 것에서 온다.[^1]

## 조건부 독립

$\mu$ 를 $\Theta$ 의 분포로 보면 $\Theta$ 가 주어졌을 때 $X_1,X_2,\dots$ 이 조건부로 독립 동일분포다. 교환가능성은 독립성을 버리는 대신 숨은 한 변수에 대한 조건부 독립성을 남긴다.

## 유한열에서의 실패

유한 교환가능열은 혼합으로 적히지 않는다. 공 두 개 가운데 하나에 $1$, 하나에 $0$ 이 적혀 있고 복원 없이 둘을 차례로 꺼내면 $(X_1,X_2)$ 는 교환가능하고 $P(X_1=X_2)=0$ 이다. 그런데 어떤 혼합이든

$$
\int_0^1\big(\theta^2+(1-\theta)^2\big)\thinspace\mu(d\theta)\ \ge\ \tfrac12
$$

이므로 $P(X_1=X_2)\ge 1/2$ 를 피할 수 없다. 길이 $n$ 의 교환가능열은 혼합에서 전변동거리로 $O(1/n)$ 만큼 떨어진 것까지만 보장된다.[^2]

## Hewitt–Savage 정리

상태공간이 [Polish 공간](polish-spaces.md)인 교환가능 무한열의 분포는 곱측도들의 혼합이다. 곧 그 공간 위의 확률측도들의 공간에 측도 $\mu$ 가 유일하게 있어 결합분포가 $\int P^{\otimes\infty}\thinspace\mu(dP)$ 로 적힌다. 0-1 열에서 $\mu$ 가 $\lbrack 0,1\rbrack$ 위의 측도였던 것은 Bernoulli 분포가 모수 하나로 적히기 때문이다. 교환가능 분포 전체가 볼록집합이고 곱측도가 그 극점이라는 것이 정리의 다른 표현이다.[^3]

## Hewitt–Savage 0-1 법칙

독립 동일분포열의 교환가능 사건은 확률이 $0$ 이거나 $1$ 이다. 꼬리사건보다 넓은 모임에 적용되므로, 무작위 걷기가 원점으로 무한히 자주 돌아오는 사건처럼 꼬리사건이 아닌 사건의 확률도 이 법칙으로 갈린다.

# 활용

- [Bayes 추론](bayesian-inference.md)의 사전분포. 관측열이 교환가능하다는 판단만 받아들이면 모수와 그 위의 사전분포가 정리에서 따라 나오므로, 사전분포를 주관적 선택이 아니라 모형 가정의 결과로 적을 수 있다.
- [Kolmogorov 확장정리](kolmogorov-extension.md). 교환가능 무한열이 사는 확률공간이 그 정리로 세워지고, de Finetti 정리는 유한열이 아니라 무한열에만 성립하므로 이 공간이 필요하다.
- 혼합 모형과 계층모형. 집단마다 모수가 다르고 집단 안에서는 관측이 교환가능한 모형이 조건부 독립 구조를 그대로 쓴다.
- 중국집 과정과 Dirichlet 과정의 표현. 분할이 교환가능한 무작위 분할의 분포가 혼합으로 적히는 것이 Kingman 의 표현정리다.

[^1]: David Aldous, "Exchangeability and related topics", École d'Été de Probabilités de Saint-Flour XIII, Lecture Notes in Mathematics 1117, Springer, 1985, 1장.
[^2]: P. Diaconis, D. Freedman, "Finite exchangeable sequences", Annals of Probability 8 (1980), 745–764. 유한열과 혼합 사이의 전변동거리 상한.
[^3]: E. Hewitt, L. J. Savage, "Symmetric measures on Cartesian products", Transactions of the American Mathematical Society 80 (1955), 470–501.

# 연관 문서

## 선수지식

- [Bayes 추론](bayesian-inference.md)
- [Kolmogorov 확장정리](kolmogorov-extension.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory #statistics #theorem
