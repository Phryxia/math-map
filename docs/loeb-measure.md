# Loeb 측도

# 개요

초유한 집합 위의 유한가법측도에 표준부분을 취하면 실수값 측도가 나오고, 이것이 항상 $\sigma$ 가법이라는 것이 Loeb 의 구성이다. 확장한 결과가 Loeb 측도다.

유한가법에서 $\sigma$ 가법으로 가는 단계를 비표준 모형의 포화성이 처리한다. 초유한 개의 점에 균등하게 얹은 셈측도에서 Lebesgue 측도와 Wiener 측도가 이렇게 나온다.

# 직관

구간 $[0,1]$ 의 길이를 유한 개의 점을 세어 재려고 한다. $N$ 등분점 $1/N,2/N,\dots,1$ 을 놓고 집합 $A$ 에 들어가는 점의 개수를 $N$ 으로 나누면 비율 하나가 나온다. $A$ 가 구간이면 $N$ 이 커질수록 이 비율이 구간의 길이에 가까워진다.

$A$ 를 유리수 전체로 잡으면 막힌다. $N$ 등분점이 전부 유리수라 비율이 모든 $N$ 에서 $1$ 이고, 유리수 집합의 길이 $0$ 과 다르다. 유한 개의 점으로는 이 집합을 가릴 수 없다.

$N$ 을 무한히 큰 초자연수로 바꾼다. 등분점의 모임은 초유한 집합이고, 그 안에서 $A$ 에 들어가는 점의 개수는 초자연수 하나로 확정된다. 개수를 $N$ 으로 나눈 값은 초실수이고, 그 표준부분이 실수를 준다. 유리수 전체를 잡으면 이 초유한 격자의 점 가운데 표준적인 유리수에 무한히 가까운 것만 세게 되므로 앞의 요동이 사라진다.

남은 문제는 이렇게 얻은 값이 측도인지다. 유한가법성은 전이 원리가 그대로 준다. 서로 겹치지 않는 가산 개 집합의 합집합에서도 값이 더해지는지는 따로 확인해야 하고, 그 확인이 이 구성의 내용이다.

# 정의

## 내부 측도의 표준부분

$^\ast X$ 의 부분집합들로 된 내부 대수 $\mathcal A$ 와 그 위의 내부 유한가법측도 $\mu\colon\mathcal A\to{}^\ast\lbrack 0,\infty)$ 가 주어졌다고 하자. $\mu$ 의 값이 유한한 초실수일 때 표준부분을 취한다.

$$
\mu_L(A)=\mathrm{st}(\mu(A)),\qquad A\in\mathcal A
$$

$\mu_L$ 은 $\mathcal A$ 위의 실수값 유한가법측도다.

## Loeb 측도

$\mu_L$ 을 $\mathcal A$ 가 생성하는 $\sigma$ 대수로 확장하고 영집합을 더해 완비화한 [측도](measure.md)를 **Loeb 측도**라 하고 $L(\mu)$ 로 쓴다. 그 정의역을 $L(\mathcal A)$ 로 쓰고 원소를 **Loeb 가측**이라 한다.

# 성질

## $\sigma$ 가법성

**정리(Loeb).** $\mu_L$ 은 $\mathcal A$ 위에서 $\sigma$ 가법이다. 따라서 Carathéodory 확장이 $L(\mathcal A)$ 위의 완비 측도를 준다.[^1]

*증명의 요지.* $A=\bigsqcup_n A_n$ 이고 $A$ 와 모든 $A_n$ 이 $\mathcal A$ 에 있다고 하자. 집합열

$$
B_k=A\setminus\bigcup_{n\le k}A_n
$$

은 내부집합의 감소열이고 교집합이 비어 있다. 비표준 모형의 가산 포화성은 내부집합의 감소열이 각 단계에서 비어 있지 않으면 교집합도 비어 있지 않다고 말한다. 그러므로 어떤 $k$ 에서 $B_k$ 가 비고, 합집합이 유한 개로 끝나므로 급수가 유한합이 된다. ∎

$\sigma$ 가법성이 포화성 하나에서 나오므로 측도의 정의를 확인하는 일이 극한 계산이 아니라 집합론적 논증이 된다.

## 내부집합 근사

$A$ 가 Loeb 가측이고 $L(\mu)(A)$ 가 유한이면 내부집합 $B\in\mathcal A$ 가 있어 다음이 성립한다.

$$
L(\mu)(A\thinspace\triangle\thinspace B)=0
$$

Loeb 가측 집합은 내부집합과 영집합만큼만 다르다. 이 근사가 Loeb 공간의 계산을 내부 대상의 계산으로 되돌린다.

## Lebesgue 측도의 구성

$N$ 을 무한히 큰 초자연수라 하고 $T=\lbrace k/N: k=1,\dots,N\rbrace$ 이라 하자. $T$ 의 내부 부분집합에 원소 개수를 $N$ 으로 나눈 값을 주면 내부 유한가법측도가 된다.

표준부분사상 $\mathrm{st}\colon T\to\lbrack 0,1\rbrack$ 은 Loeb 가측이고, 이 사상으로 Loeb 측도를 밀어낸 것이 $\lbrack 0,1\rbrack$ 의 Lebesgue 측도다. 앞의 유리수 집합은 이 측도에서 값 $0$ 을 받는다.

## Loeb 적분

내부 함수 $F\colon T\to{}^\ast\mathbb R$ 의 내부 합이 유한하고 무한대 값 부분의 기여가 무시할 만하면 $F$ 를 S 적분가능이라 한다. 그때 $\mathrm{st}\circ F$ 가 Loeb 적분가능하고 두 적분값이 표준부분으로 이어진다.

$$
\int \mathrm{st}(F)\thinspace dL(\mu)=\mathrm{st}\Bigl(\sum_{t\in T}F(t)\mu(\lbrace t\rbrace)\Bigr)
$$

초유한 합 하나가 적분 하나를 준다.

# 활용

- **Brown 운동의 구성.** 걸음 수가 초유한 개이고 각 걸음이 $\pm1/\sqrt N$ 인 무작위 걸음을 잡고 표준부분을 취하면 [Brown 운동](brownian-motion.md)이 나온다. 경로의 연속성과 측도의 존재가 이 한 구성에서 동시에 나온다.[^2]
- **확률공간의 성질.** Loeb 확률공간은 원자가 없고 포화되어 있다. 분포가 주어진 [확률변수](random-variables.md)를 항상 실현할 수 있으므로 분포에 대한 진술을 확률변수에 대한 진술로 바꾸는 논증이 쉬워진다.
- **극한 정리.** 확률변수열의 약수렴을 초유한 지표에서의 등식으로 바꾼다. 중심극한정리를 초유한 무작위 걸음의 한 시점에서 읽는 것이 그 예다.
- **측도의 존재 증명.** 내부 대상에서 시작해 $\sigma$ 가법성을 포화성으로 얻으므로, 측도의 구성에서 Carathéodory 외측도 논증을 대신하는 길이 된다.

[^1]: Peter A. Loeb, *Conversion from nonstandard to standard measure spaces and applications in probability theory*, Transactions of the American Mathematical Society 211 (1975), 113–122.
[^2]: Robert M. Anderson, *A non-standard representation for Brownian motion and Itô integration*, Israel Journal of Mathematics 25 (1976), 15–46.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [비표준 해석학](nonstandard-analysis.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #probability #analysis #logic
