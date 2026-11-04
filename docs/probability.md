# 유한 확률 공간

# 개요

**유한 확률 공간(finite probability space)** 은 가능한 결과가 유한 개인 무작위 실험에서, 결과마다 일어날 가능성을 수로 적은 모형이다. 주사위 두 개를 던져 눈의 합이 $7$ 일 확률을 구할 때 합을 $2$ 부터 $12$ 까지 $11$ 가지로 세어 $1/11$ 로 답하면 틀린다. 유한 확률 공간은 두 눈의 순서쌍 $36$ 개에 각각 $1/36$ 을 주고, 합이 $7$ 인 순서쌍 $6$ 개의 값을 더해 $6/36$ 으로 답한다.

결과가 무한히 많은 실험은 [측도](measure.md)로 다룬다.

# 직관

주사위 두 개를 던져 눈의 합을 본다. 합은 $2$ 부터 $12$ 까지 $11$ 가지이지만, 합이 $2$ 인 경우는 $(1,1)$ 하나이고 합이 $7$ 인 경우는 $(1,6),(2,5),\dots,(6,1)$ 여섯이다. 합 $11$ 가지를 같은 가능성으로 놓으면 이 차이가 사라진다.

두 눈의 순서쌍 $36$ 개는 같은 가능성으로 나온다. 그래서 순서쌍마다 $1/36$ 을 주고, 합이 $7$ 일 확률은 해당 순서쌍의 값을 더해 $6/36=1/6$, 합이 $2$ 일 확률은 $1/36$ 이다. 결과마다 음이 아닌 수를 주고 그 합을 $1$ 로 맞춘 뒤, 사건의 확률을 그 사건에 든 결과의 수를 더해 얻는다.

# 정의

## 확률 공간

$\Omega$ 를 유한하고 비어 있지 않은 결과 집합이라 하고, 각 결과에 확률을 주는 [함수](functions.md) $p$ 를 정한다.

$$
p:\Omega\to\lbrack 0,1\rbrack,\qquad \sum_{\omega\in\Omega}p(\omega)=1
$$

$(\Omega,p)$ 를 **유한 확률 공간** 이라 한다. $\Omega$ 의 부분집합을 **사건(event)** 이라 하고 그 확률은 포함된 결과들의 확률 합이다.

$$
P(A)=\sum_{\omega\in A}p(\omega)
$$

직관 절에서 $\Omega=\lbrace 1,\dots,6\rbrace^2$, $p(\omega)=1/36$ 이고, 합이 $7$ 인 사건 $A$ 는 순서쌍 $6$ 개로 $P(A)=1/6$ 이다. 모든 결과의 확률이 같은 경우에만 $P(A)=\vert A\vert/\vert\Omega\vert$ 가 성립한다.

## 조건부 확률과 독립

$P(B) \gt 0$ 일 때 $B$ 가 주어진 $A$ 의 **조건부 확률(conditional probability)** 을 다음으로 정의한다.

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
$$

가능한 결과를 $B$ 로 제한하고 남은 확률의 합을 다시 $1$ 로 맞춘 값이다. 두 사건이 다음을 만족하면 **독립(independent)** 이라 한다.

$$
P(A\cap B)=P(A)P(B)
$$

$A$ 를 합이 $7$ 인 사건, $B$ 를 첫 눈이 $3$ 인 사건이라 하면 $A\cap B=\lbrace(3,4)\rbrace$ 이므로 $P(A\mid B)=(1/36)/(1/6)=1/6$ 이다. $P(A\cap B)=1/36=P(A)P(B)$ 이므로 $A$ 와 $B$ 는 독립이다. 합이 $12$ 인 사건 $C$ 는 $P(C\mid B)=0\ne P(C)$ 이어서 $B$ 와 독립이 아니다.

세 개 이상의 사건은 모든 부분 모임에서 곱 규칙이 성립할 때 **상호독립(mutually independent)** 이라 한다.

# 성질

## 쌍마다 독립과 상호독립

쌍마다 독립인 것과 상호독립인 것은 다르다. 동전 두 개를 던져 $A$ 를 첫째가 앞면, $B$ 를 둘째가 앞면, $C$ 를 두 결과가 같은 사건이라 하면 세 쌍 모두 독립이지만 $P(A\cap B\cap C)=1/4\ne 1/8$ 이다.

## 기본 규칙

- 합집합. 겹친 부분을 한 번 뺀다. 결과마다 세어지는 횟수를 확인하면 증명된다.

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
$$

세 개 이상이면 [포함배제 원리](inclusion-exclusion.md)로 확장된다. 겹침을 무시하고 더한 값은 상한이고, 이것이 합집합 한계(union bound)다.

- 전확률. $\Omega$ 를 서로소인 사건들로 분할하면 다음이 성립하고, 여기에 조건부 확률의 정의를 뒤집으면 [Bayes 정리](bayes.md)가 된다.

$$
P(A)=\sum_iP(A\mid B_i)P(B_i)
$$

- 단조성. $A \subseteq B$ 이면 $P(A) \le P(B)$ 다.

## 배반과 독립

배반은 $A \cap B = \emptyset$ 이고 독립은 $P(A \cap B) = P(A)P(B)$ 다. 확률이 양수인 두 사건이 배반이면 교집합의 확률이 0 이므로 독립이 아니다. 한쪽이 일어나면 다른 쪽이 불가능하므로 강하게 의존한다.

공정한 주사위 한 번에서 $A$ 를 짝수, $B$ 를 3 의 배수라 하면 $P(A) = 1/2$ , $P(B) = 1/3$ , $P(A \cap B) = P(\lbrace 6\rbrace) = 1/6$ 이므로 독립이다.

## 유한 공간의 예

- [생일 문제](birthday-problem.md). 23 명이면 생일이 겹칠 확률이 절반을 넘는다. 비교할 쌍이 $253$ 개이고, 사람 수가 아니라 쌍의 수가 값을 정한다.
- 확률적 방법. 확률이 0 보다 크면 그런 경우가 존재한다는 논법이 [확률적 방법](probabilistic-method.md)이고, 존재 증명을 계산 문제로 바꾼다.
- 조건부의 비대칭. $P(A \mid B)$ 와 $P(B \mid A)$ 는 다른 값이다. 희귀한 병의 검사에서 양성일 때 실제로 병일 확률이 낮은 것이 이 차이다.

## 무한 결과 집합

결과가 무한히 많으면 각 결과에 양의 확률을 고르게 줄 수 없다. 자연수에는 [균등분포](uniform-distribution.md)가 없고, [실수](real-numbers.md) 구간에서는 한 점의 확률이 0 이면서 구간의 확률이 양수다. 그래서 결과별 확률 대신 사건별 확률을 기본으로 삼고 어떤 사건에 확률을 줄지를 $\sigma$ 대수로 지정한다. 극한을 다루기 위해 유한 가법성 대신 가산 가법성을 요구한다. 이 확장이 측도이고 위의 규칙들은 그대로 성립한다.

# 활용

## 알고리즘과 모형

무작위 알고리즘의 성공 확률, 해시 충돌, 표본 추출, 유한 상태 모형의 전이가 유한 확률 공간 위의 계산이다. 합집합 한계와 기댓값의 선형성만으로 많은 결과가 나온다.

## 정보 갱신

관측이 들어올 때마다 조건부 확률로 믿음을 갱신하는 절차가 [Bayes 추론](bayesian-inference.md)이고, 남은 불확실성을 수로 재는 것이 [Shannon 엔트로피](entropy.md)다.

## 모형화의 전제

계산에 앞서 결과 집합과 각 결과의 확률이 정해져야 한다. 같은 실험도 결과 집합을 다르게 잡으면 다른 답이 나오고, 이 선택은 모형화의 문제다.[^1]

[^1]: MIT, *Mathematics for Computer Science*, Session 28: Intro to Discrete Probability. 표본 공간과 사건의 확률. https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/mit6_042js15_session28.pdf

# 연관 문서

## 선수지식

- [함수](functions.md)
- [확률론 개관](probability-overview.md)

## 더 알아보기

### 확률의 기초

- [Bayes 정리](bayes.md)
- [생일 문제](birthday-problem.md)
- [투표 정리](ballot-theorem.md)
- [측도](measure.md)
- [확률변수](random-variables.md)
- [Shannon 엔트로피](entropy.md)
- [Radically elementary 확률론](radically-elementary-probability.md)

### 조합과 알고리즘

- [확률적 방법](probabilistic-method.md)
- [부울 함수의 Fourier 해석](boolean-fourier.md)
- [스펙트럼 희소화](spectral-sparsification.md)
- [Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)
- [Håstad 스위칭 보조정리](switching-lemma.md)
- [범용 해시족](universal-hashing.md)
- [스킵 리스트](skip-lists.md)
- [비교 정렬](comparison-sorting.md)
- [Karger 축약 알고리즘](karger-min-cut.md)

#probability #measure_theory #statistics #algorithms
