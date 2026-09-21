# Bell 수

# 개요

Bell 수 $B_n$ 은 원소가 $n$ 개인 집합을 겹치지 않는 부분집합들로 나누는 방법의 수다. 덩어리의 개수를 고정한 제2종 [Stirling 수](stirling-numbers.md)를 모두 더한 값이다.

한 원소가 속한 덩어리를 먼저 고르는 계산이 점화식을 주고, 그 점화식에서 지수생성함수 $e^{e^x-1}$ 이 나온다. Dobinski 공식은 같은 수를 무한급수로 쓴다.

# 직관

$n$ 명을 조로 나눈다. 조의 개수를 정하지 않고 몇 개든 좋다고 하면 방법이 몇 가지인가.

$n=3$ 에서 사람을 $1,2,3$ 이라 하고 손으로 센다. 셋이 한 조인 경우 하나, 둘과 하나로 갈리는 경우가 어느 한 명을 떼어 내는 세 가지, 셋이 각각 따로인 경우 하나다. 모두 $5$ 가지다.

$n=4$ 를 같은 식으로 세려면 경우가 많아진다. 대신 $1$ 번이 속한 조를 먼저 정한다. 그 조에 $1$ 번과 함께 들어갈 사람을 나머지 셋 가운데 $k$ 명 고르는 방법이 $\binom{3}{k}$ 가지이고, 남은 $3-k$ 명을 나누는 방법의 수는 사람 수가 줄어든 같은 문제의 답이다.

$B_0 = 1$ 에서 시작하면 $B_1 = 1$, $B_2 = 2$, $B_3 = 1\cdot 2 + 2\cdot 1 + 1\cdot 1 = 5$ 이고 손으로 센 값과 맞는다. 같은 계산으로 $B_4 = 15$, $B_5 = 52$, $B_6 = 203$ 이다.

이 점화식이 $1$ 번을 떼어 내는 자리에서 이항계수를 만들므로, 수열을 다루는 도구는 보통 생성함수가 아니라 지수생성함수다.

# 정의

## Bell 수

집합 $\lbrace 1,\dots,n\rbrace$ 을 공집합이 아닌 부분집합들로 나누는 방법의 수를 $n$ 번째 **Bell 수** $B_n$ 이라 한다. $B_0 = 1$ 로 둔다.

$$
B_n \thinspace=\thinspace \sum_{k=0}^{n} S(n,k)
$$

$S(n,k)$ 는 덩어리가 정확히 $k$ 개인 분할의 수, 곧 제2종 Stirling 수다. 집합의 분할은 [동치관계](equivalence-relations.md)와 하나씩 대응하므로 $B_n$ 은 $n$ 원 집합 위의 동치관계의 개수이기도 하다.

## Bell 삼각형

첫 줄에 $1$ 을 놓고, 각 줄의 마지막 수를 다음 줄의 첫 수로 옮긴 뒤 왼쪽 수와 바로 위 수를 더해 오른쪽으로 채운다. 각 줄의 첫 수가 $B_n$ 이다.

| | | | |
| --- | --- | --- | --- |
| $1$ | | | |
| $1$ | $2$ | | |
| $2$ | $3$ | $5$ | |
| $5$ | $7$ | $10$ | $15$ |

# 성질

## 점화식

**정리.** $B_{n+1} = \sum_{k=0}^{n} \binom{n}{k} B_k$ 다.

$n+1$ 번 원소가 속한 덩어리에 함께 들어갈 원소를 나머지 $n$ 개 가운데 $n-k$ 개 고르는 방법이 $\binom{n}{n-k} = \binom{n}{k}$ 가지이고, 남은 $k$ 개를 나누는 방법이 $B_k$ 가지다. 두 선택이 분할을 하나로 결정하므로 합이 $B_{n+1}$ 이다. ∎

## 지수생성함수

**정리.** $\sum_{n \ge 0} B_n \dfrac{x^n}{n!} = e^{e^x - 1}$ 이다.

좌변을 $f(x)$ 라 하면 위 점화식은 두 지수생성함수의 곱을 뜻하므로 $f'(x) = e^x f(x)$ 다. $f(0) = 1$ 인 해가 $e^{e^x-1}$ 이다. ∎

덩어리 하나를 만드는 방법의 [생성함수](generating-functions.md)가 $e^x - 1$ 이고, 이름 붙은 구조를 모아 집합을 만드는 조작이 지수생성함수의 합성 $e^{(\cdot)}$ 으로 나타나는 것이 일반 형태다.

## Dobinski 공식

**정리(Dobinski)**[^1]**.** $B_n = \dfrac{1}{e}\sum_{k \ge 0} \dfrac{k^n}{k!}$ 다.

평균이 $1$ 인 Poisson 분포를 따르는 확률변수 $X$ 의 $n$ 차 적률이 우변이다. $X$ 의 내림 계승 적률이 $E\lbrack X(X-1)\cdots(X-k+1)\rbrack = 1$ 이고, 거듭제곱을 내림 계승으로 펼치는 계수가 제2종 Stirling 수이므로 $E\lbrack X^n\rbrack = \sum_k S(n,k)$ 다. 이것이 $B_n$ 이다. ∎

## Touchard 합동

**정리(Touchard)**[^2]**.** $p$ 가 소수이면 $B_{p+n} \equiv B_n + B_{n+1} \pmod p$ 다.

$n = 0$ 을 넣으면 $B_p \equiv 2 \pmod p$ 다. 이 합동이 $B_n$ 을 법 $p$ 로 본 수열이 주기적임을 주고, 그 주기는 $(p^p-1)/(p-1)$ 을 나눈다.

## 성장

$B_n$ 은 계승보다 느리고 지수함수보다 빠르게 큰다. Dobinski 공식의 급수를 최대항으로 어림하면 다음을 얻는다.[^3]

$$
\frac{\ln B_n}{n} \thinspace=\thinspace \ln n - \ln\ln n - 1 + o(1)
$$

# 활용

- 집합의 분할을 세는 문제 전반에 나타난다. $n$ 개 항목을 이름 없는 묶음으로 나누는 경우의 수가 $B_n$ 이고, 묶음에 이름이 있으면 대신 $k^n$ 꼴의 수가 나온다.
- 평균이 $\lambda$ 인 Poisson 분포의 $n$ 차 적률이 $\sum_k S(n,k)\lambda^k$ 이므로 $\lambda = 1$ 에서 $B_n$ 이다. 적률을 내림 계승 적률로 바꾸는 계산이 이 항등식을 준다.
- [정수의 분할](partitions.md)과 대비된다. 집합의 분할은 원소를 구별하므로 $B_n$ 이 세고, 원소를 구별하지 않으면 분할수 $p(n)$ 이 센다. $n=4$ 에서 $B_4 = 15$ 이고 $p(4) = 5$ 다.
- 구조를 세는 조합론에서 지수생성함수의 합성이 어떻게 쓰이는지 보이는 기본 예다. 덩어리의 생성함수를 바꾸면 순환으로 나눈 분할이나 크기에 조건을 준 분할의 수가 같은 방식으로 나온다.

[^1]: G. Dobiński, "Summirung der Reihe $\sum n^m/n!$ für $m = 1, 2, 3, 4, 5, \dots$", *Archiv der Mathematik und Physik* 61 (1877), 333–336.

[^2]: J. Touchard, "Propriétés arithmétiques de certains nombres récurrents", *Annales de la Société Scientifique de Bruxelles* 53A (1933), 21–31.

[^3]: L. Moser and M. Wyman, "An asymptotic formula for the Bell numbers", *Transactions of the Royal Society of Canada* 49 (1955), 49–54.

# 연관 문서

## 선수지식

- [Stirling 수](stirling-numbers.md)

## 더 알아보기

- [조합적 종](combinatorial-species.md)

#combinatorics #probability #number_theory
