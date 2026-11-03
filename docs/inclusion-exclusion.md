# 포함배제 원리

# 개요

**포함배제 원리(inclusion–exclusion principle)** 는 겹치는 집합들의 합집합의 크기를 각 집합과 교집합들의 크기로 계산하는 공식이다. $1$ 부터 $30$ 까지 가운데 $2$, $3$, $5$ 의 어느 것으로도 나누어떨어지지 않는 수를 세려고 한다. 배수를 그냥 빼면 $6$ 의 배수처럼 두 번 빠지는 수가 생기고, 이것을 다시 더하면 $30$ 처럼 세 수 모두의 배수가 다시 세어진다. 포함배제 원리는 빼고 더하기를 번갈아 $30-(15+10+6)+(5+3+2)-1=8$ 을 얻는 식으로 이 계산을 정리한다.

# 직관

$1$ 부터 $30$ 까지에서 $2$ 의 배수는 $15$ 개, $3$ 의 배수는 $10$ 개, $5$ 의 배수는 $6$ 개다. 셋을 모두 빼면 $30-31=-1$ 이 되어 틀린다. $6$ 은 $2$ 의 배수로도 $3$ 의 배수로도 빠져 두 번 빠졌다.

두 번 빠진 수를 한 번씩 돌려놓는다. $6$ 의 배수 $5$ 개, $10$ 의 배수 $3$ 개, $15$ 의 배수 $2$ 개를 더하면 $-1+10=9$ 다. 이제 $30$ 이 문제다. $30$ 은 처음에 세 번 빠지고 방금 세 번 더해져 한 번도 빠지지 않았으므로, $30$ 의 배수 $1$ 개를 한 번 더 빼서 $8$ 을 얻는다. 남는 수는 $1,7,11,13,17,19,23,29$ 의 $8$ 개다.

수 하나가 몇 번 세어지는지만 보면 이 계산이 맞는 이유가 나온다. $30$ 처럼 세 집합에 든 수는 처음에 $1$ 번 세고, 한 집합씩 뺄 때 $3$ 번, 두 집합씩 더할 때 $3$ 번, 세 집합을 뺄 때 $1$ 번 움직여 $1-3+3-1=0$ 번 남는다. 정확히 $m\ge 1$ 개의 집합에 든 수는 이항정리로 $\sum_{j=0}^{m}(-1)^{j}\binom{m}{j}=(1-1)^m=0$ 번 남고, 어느 집합에도 들지 않은 수만 $1$ 번 남는다.

# 정의

전체집합 $U$ 의 유한 부분집합 $A_1,\dots,A_n$ 과 첨자 집합 $S\subseteq\lbrace 1,\dots,n\rbrace$ 에 대해

$$
A_S=\bigcap_{i\in S}A_i,\qquad A_\varnothing=U
$$

로 쓴다. 직관 절에서 $U=\lbrace 1,\dots,30\rbrace$ 이고 $A_1,A_2,A_3$ 이 $2,3,5$ 의 배수 집합이면 $A_{\lbrace 1,2\rbrace}$ 는 $6$ 의 배수 집합이고 $\lvert A_{\lbrace 1,2,3\rbrace}\rvert=1$ 이다.

포함배제 원리는 다음 두 등식이다. 첫째는 합집합 형태, 둘째는 어느 $A_i$ 에도 들지 않는 원소를 세는 여집합 형태다.

$$
\Bigl\lvert\bigcup_{i=1}^{n}A_i\Bigr\rvert
=\sum_{\varnothing\ne S}(-1)^{\lvert S\rvert-1}\thinspace\lvert A_S\rvert,
\qquad
\Bigl\lvert\thinspace U\setminus\bigcup_{i=1}^{n}A_i\Bigr\rvert=\sum_{S}(-1)^{\lvert S\rvert}\thinspace\lvert A_S\rvert
$$

합은 $\lbrace 1,\dots,n\rbrace$ 의 부분집합 $S$ 전체에 대해 잡는다. 직관 절의 계산은 여집합 형태에서 $n=3$ 인 경우이고, 합집합 형태로는 $2,3,5$ 가운데 하나로 나누어떨어지는 수가 $31-10+1=22$ 개다. $n=2$ 이면 합집합 형태는 $\lvert A\cup B\rvert=\lvert A\rvert+\lvert B\rvert-\lvert A\cap B\rvert$ 다.

# 성질

## 지시함수 증명

$A$ 의 지시함수(indicator function) $\mathbf 1_A$ 는 $A$ 위에서 $1$, 밖에서 $0$ 인 함수다. 각 원소 $x\in U$ 에서

$$
\prod_{i=1}^{n}\bigl(1-\mathbf{1}\_{A_i}(x)\bigr)=\sum_{S}(-1)^{\lvert S\rvert}\mathbf{1}\_{A_S}(x)
$$

이다. 좌변은 $x$ 가 어떤 $A_i$ 에도 속하지 않으면 $1$, 하나라도 속하면 $0$ 이고, 우변은 좌변의 곱을 전개한 것이다. 양변을 $U$ 에 대해 더하면 여집합 형태를 얻는다[^1].

## 확률 판본과 Bonferroni 부등식

[확률](probability.md)에서는 크기를 확률로 바꾸면 같은 식이 성립한다.

$$
P\Bigl(\bigcup_{i=1}^{n}A_i\Bigr)=\sum_{j=1}^{n}(-1)^{j-1}\sum_{|S|=j}P(A_S)
$$

합을 중간에서 끊으면 부등식이 되고, 이것을 Bonferroni 부등식(Bonferroni inequalities)이라 한다. 홀수 개 항에서 끊으면 상한, 짝수 개에서 끊으면 하한이다. $j=1$ 에서 끊은 상한을 합집합 상한(union bound)이라 한다.

$$
P\Bigl(\bigcup_i A_i\Bigr)\le \sum_i P(A_i)
$$

[Ramsey 이론](ramsey-theory.md)의 확률적 하한 증명이 이 상한을 쓴다.

## 완전순열

고정점이 없는 [순열](counting-principles.md)을 완전순열(derangement)이라 하고 그 개수를 $D_n$ 이라 한다. $A_i$ 를 "$i$ 가 고정점인 순열들"이라 하면 크기가 $j$ 인 첨자 집합의 교집합은 $(n-j)!$ 이므로 다음을 얻는다.

$$
D_n=\sum_{j=0}^{n}(-1)^{j}\binom{n}{j}(n-j)!=n!\sum_{j=0}^{n}\frac{(-1)^{j}}{j!}
$$

임의의 순열이 완전순열일 확률은 [지수함수](exponential-function.md)의 교대급수로 수렴한다.

$$
\frac{D_n}{n!}\longrightarrow e^{-1}\approx 0.367879
$$

오차는 $1/(n+1)!$ 보다 작다. 작은 값은 $D_1=0$, $D_2=1$, $D_3=2$, $D_4=9$, $D_5=44$ 이고 점화식 $D_n=(n-1)(D_{n-1}+D_{n-2})$ 도 성립한다.

## Euler 함수

$n$ 보다 작거나 같은 양의 정수 중 $n$ 과 서로소인 것의 개수 $\varphi(n)$ 을 Euler 함수(Euler's totient function)라 한다. $n$ 의 서로 다른 [소인수](primes.md)를 $p_1,\dots,p_r$ 이라 하고 $A_i$ 를 $p_i$ 의 배수 집합이라 하면, $p_i$ 들이 서로 다른 소수이므로 교집합의 크기가 곱으로 주어져 다음을 얻는다.

$$
\varphi(n)=\sum_{S\subseteq[r]}(-1)^{|S|}\frac{n}{\prod_{i\in S}p_i}=n\prod_{i=1}^{r}\Bigl(1-\frac{1}{p_i}\Bigr)
$$

직관 절의 계산은 $\varphi(30)=30\cdot\tfrac12\cdot\tfrac23\cdot\tfrac45=8$ 이고, $\varphi(60)=60\bigl(1-\tfrac12\bigr)\bigl(1-\tfrac13\bigr)\bigl(1-\tfrac15\bigr)=16$ 이다. 곱 형태에서 $\varphi$ 가 곱셈적(multiplicative)임이 보인다. $\varphi$ 의 산술적 성질은 [Fermat–Euler 정리](fermat-euler-theorem.md)에서 쓴다.

## 전사함수의 개수

크기 $n$ 인 집합에서 크기 $m$ 인 집합으로 가는 전사 [함수](functions.md)의 개수는 상이 $i$ 번째 값을 빠뜨리는 사건에 포함배제를 적용해 얻는다.

$$
\bigl|\lbrace f:[n]\twoheadrightarrow[m]\rbrace\bigr|=\sum_{j=0}^{m}(-1)^{j}\binom{m}{j}(m-j)^{n}=m!\thinspace S(n,m)
$$

여기서 $S(n,m)$ 은 제2종 [Stirling 수](stirling-numbers.md)다.

## Möbius 반전

포함배제는 국소 유한(locally finite) [부분순서](partial-orders.md) 집합 위의 Möbius 반전(Möbius inversion)의 특수한 경우다. 부분집합 [격자](order-lattices.md)의 Möbius 함수(Möbius function)가 다음 값을 가지므로 부호 $(-1)^{\vert S\vert}$ 가 나타난다.

$$
\mu(S,T)=(-1)^{|T\setminus S|}\quad (S\subseteq T)
$$

정수의 나눗셈 순서에서 같은 반전을 적용하면 수론적 [Möbius 반전 공식](mobius-inversion.md)이 되고, $\varphi$ 계산의 또 다른 유도가 된다.

## 항 수의 폭발

공식은 $2^n$ 개의 항을 가지므로 $n$ 이 크면 직접 계산이 불가능하다. [영구식](permanent.md) 계산의 Ryser 공식(Ryser's formula)이 이 형태이며 여전히 지수 시간이다. 실제로는 대칭성으로 항을 묶거나, 근사가 필요하면 Bonferroni 절단을 쓴다.

# 활용

## Eratosthenes 체

Eratosthenes 체(sieve of Eratosthenes)는 $\sqrt{100}$ 이하의 소수 $2,3,5,7$ 의 배수를 걸러 $100$ 이하의 소수를 남긴다. 그 개수를 여집합 형태로 센다. $1$ 은 소수가 아닌데 남고 $2,3,5,7$ 자신은 걸러졌으므로 $-1+4$ 로 보정한다.

$$
\pi(100)=\Bigl(100-\sum_{p}\Bigl\lfloor\frac{100}{p}\Bigr\rfloor+\sum_{p\lt q}\Bigl\lfloor\frac{100}{pq}\Bigr\rfloor-\cdots\Bigr)-1+4=25
$$

이 절차를 일반화한 Legendre, Meissel, Lehmer 의 방법이 소수 계수 함수의 고전적 계산법이다.

## 확률과 조합 최적화

[생일 문제](birthday-problem.md)처럼 적어도 하나가 일어나는 사건의 확률, 체를 이용한 정수론적 추정, 색칠 다항식(chromatic polynomial)의 계산이 포함배제를 쓴다. [생성함수](generating-functions.md)와 결합하면 부호 교대 합을 [멱급수](power-series.md)의 곱으로 다룬다.

[^1]: J. H. van Lint and R. M. Wilson, A Course in Combinatorics, 2nd ed., Cambridge University Press, Chapter 10 (Sieve methods). https://www.cambridge.org/core/books/course-in-combinatorics/BD3F62F231B5CC1E9E06915EF0E0E1DC

# 연관 문서

## 선수지식

- [셈의 기본 원리](counting-principles.md)

## 더 알아보기

- [Möbius 반전 공식](mobius-inversion.md)
- [체 방법](sieve-methods.md)

#combinatorics #probability #number_theory
