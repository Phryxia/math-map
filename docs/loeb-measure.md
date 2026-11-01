# Loeb 측도

# 개요

**Loeb 측도(Loeb measure)** 는 무한히 큰 정수 $N$ 개의 점에 무게를 똑같이 나누어 준 셈에서 얻는 측도다. 구간 $[0,1]$ 을 $N$ 등분한 점 $k/N$ 마다 무게 $1/N$ 을 주면, 구간 $[a,b]$ 에 든 점의 무게 합은 $b-a$ 와 무한히 작은 차이밖에 나지 않는다. 이 합은 유한 개를 더하는 계산이라 다루기 쉽지만, 셀 수 있는 무한 개의 집합에 대해 길이를 더하는 성질은 따로 보여야 한다. Loeb 측도는 무한히 작은 차이를 버린 값이 그 성질을 만족함을 보여, Lebesgue 측도와 [Brown 운동](brownian-motion.md)의 측도를 점을 세는 계산으로 만든다.

# 직관

구간 $\lbrack 0,1\rbrack$ 의 길이를 유한 개의 점을 세어 재려고 한다. $N$ 등분점 $1/N,2/N,\dots,1$ 가운데 집합 $A$ 에 들어가는 점의 개수를 $N$ 으로 나누면, $A$ 가 구간일 때 $N$ 이 커질수록 그 비율이 구간의 길이에 가까워진다. $A$ 를 유리수 전체로 잡으면 등분점이 전부 유리수라 비율이 모든 $N$ 에서 $1$ 이고, 유리수 집합의 길이 $0$ 과 다르다. 유한 개의 점으로는 유리수 집합과 구간을 가르지 못한다.

$N$ 을 [비표준 해석학](nonstandard-analysis.md)의 무한히 큰 초자연수(hypernatural number)로 바꾼다. 등분점의 모임 $T$ 는 초유한 집합(hyperfinite set)이고, $T$ 의 내부 부분집합마다 점의 개수가 초자연수 하나로 정해진다. 개수를 $N$ 으로 나눈 초실수에서 가장 가까운 실수, 곧 표준부분을 그 집합의 크기로 삼는다. 구간 $\lbrack a,b\rbrack$ 에 든 등분점의 크기는 $b-a$ 다.

등분점은 모두 초유리수라 유리수인 등분점을 그대로 세면 여전히 $1$ 이 나온다. 그래서 등분점마다 가장 가까운 실수를 보고, 그 실수가 유리수인 등분점들을 모은다. 유리수 $q$ 하나에 무한히 가까운 등분점들은 $q$ 를 가운데 둔 길이 $\varepsilon$ 인 구간 안에 있으므로 크기가 $\varepsilon$ 이하이고, $\varepsilon$ 을 얼마든지 작게 잡을 수 있어 크기가 $0$ 이다. 유리수는 셀 수 있게 많으므로, 셀 수 있게 많은 조각의 크기를 더할 수 있으면 이 모임의 크기는 $0$ 이다. 그 더하기가 되도록 크기를 넓힌 것이 Loeb 측도다.

# 정의

## 내부 측도의 표준부분

$^\ast X$ 의 부분집합들로 된 내부 대수(internal algebra) $\mathcal A$ 와 그 위의 내부 유한가법측도(internal finitely additive measure) $\mu\colon\mathcal A\to{}^\ast\lbrack 0,\infty)$ 가 주어졌다고 하자. $\mu$ 의 값이 유한한 초실수일 때 표준부분(standard part)을 취한다.

$$
\mu_L(A)=\mathrm{st}(\mu(A)),\qquad A\in\mathcal A
$$

$\mu_L$ 은 $\mathcal A$ 위의 실수값 유한가법측도다. 직관 절의 $T$ 에서 내부 부분집합 $B$ 에 $\mu(B)=\vert B\vert/N$ 을 주면 $\mu_L(T\cap{}^\ast\lbrack a,b\rbrack)=b-a$ 다.

## Loeb 측도

$\mu_L$ 을 $\mathcal A$ 가 생성하는 $\sigma$ 대수로 확장하고 영집합을 더해 완비화한 [측도](measure.md)를 **Loeb 측도** 라 하고 $L(\mu)$ 로 쓴다. 그 정의역을 $L(\mathcal A)$ 로 쓰고 원소를 **Loeb 가측(Loeb measurable)** 이라 한다. 직관 절의 모임 $\mathrm{st}^{-1}(\mathbb Q)=\bigcup\_{q}\mathrm{st}^{-1}(q)$ 는 내부집합이 아니지만 셀 수 있게 많은 Loeb 가측 집합의 합집합이므로 Loeb 가측이고, $L(\mu)$ 값이 $0$ 이다.

# 성질

## σ 가법성

Loeb 가 증명한 정리에 따르면 $\mu_L$ 은 $\mathcal A$ 위에서 $\sigma$ 가법이다. 따라서 [Carathéodory 확장정리](caratheodory-extension.md)로 $L(\mathcal A)$ 위의 완비 측도가 얻어진다.[^1]

증명의 요지. $A=\bigsqcup_n A_n$ 이고 $A$ 와 모든 $A_n$ 이 $\mathcal A$ 에 있다고 하자. 집합열

$$
B_k=A\setminus\bigcup_{n\le k}A_n
$$

은 내부집합의 감소열이고 교집합이 비어 있다. 비표준 모형의 가산 포화성(countable saturation)에서 내부집합의 감소열이 각 단계에서 비어 있지 않으면 교집합도 비어 있지 않다. 그러므로 어떤 $k$ 에서 $B_k$ 가 비고, 합집합이 유한 개로 끝나므로 급수가 유한합이 된다. ∎

$\sigma$ 가법성이 포화성 하나에서 나오므로 측도의 정의를 확인하는 일이 극한 계산이 아니라 집합론적 논증이 된다.

## 내부집합 근사

$A$ 가 Loeb 가측이고 $L(\mu)(A)$ 가 유한이면 내부집합 $B\in\mathcal A$ 가 있어 다음이 성립한다.

$$
L(\mu)(A\thinspace\triangle\thinspace B)=0
$$

Loeb 가측 집합은 내부집합과 영집합만큼만 다르다. 이 근사로 Loeb 공간의 계산을 내부 대상의 계산으로 바꾼다.

## Lebesgue 측도의 구성

$N$ 을 무한히 큰 초자연수라 하고 $T=\lbrace k/N: k=1,\dots,N\rbrace$ 이라 하자. $T$ 의 내부 부분집합에 원소 개수를 $N$ 으로 나눈 값을 주면 내부 유한가법측도가 된다.

표준부분사상 $\mathrm{st}\colon T\to\lbrack 0,1\rbrack$ 은 Loeb 가측이고, 이 사상으로 Loeb 측도를 밀어낸 것이 $\lbrack 0,1\rbrack$ 의 Lebesgue 측도다. $\lbrack 0,1\rbrack$ 의 유리수 집합의 역상이 직관 절의 $\mathrm{st}^{-1}(\mathbb Q)$ 이고 값이 $0$ 이다.

## Loeb 적분

내부 함수 $F\colon T\to{}^\ast\mathbb R$ 의 내부 합이 유한하고 무한대 값 부분의 기여가 무시할 만하면 $F$ 를 S 적분가능(S-integrable)이라 한다. 그때 $\mathrm{st}\circ F$ 가 Loeb 적분가능하고 두 적분값이 표준부분으로 이어진다.

$$
\int \mathrm{st}(F)\thinspace dL(\mu)=\mathrm{st}\Bigl(\sum_{t\in T}F(t)\mu(\lbrace t\rbrace)\Bigr)
$$

초유한 합 하나가 적분 하나를 준다.

# 활용

- Brown 운동의 구성. 걸음 수가 초유한 개이고 각 걸음이 $\pm1/\sqrt N$ 인 무작위 걸음을 잡고 표준부분을 취하면 Brown 운동이 나온다. 경로의 연속성과 측도의 존재가 이 한 구성에서 동시에 나온다.[^2]
- 확률공간의 성질. Loeb 확률공간은 원자가 없고(atomless) 포화되어(saturated) 있다. 분포가 주어진 [확률변수](random-variables.md)를 항상 실현할 수 있으므로 분포에 대한 진술을 확률변수에 대한 진술로 바꾸는 논증이 쉬워진다.
- 극한 정리. 확률변수열의 약수렴(weak convergence)을 초유한 지표에서의 등식으로 바꾼다. 초유한 무작위 걸음의 한 시점에서 [중심극한정리](central-limit-theorem.md)가 그렇게 나온다.
- 측도의 존재 증명. 내부 대상에서 시작해 $\sigma$ 가법성을 포화성으로 얻으므로, 측도의 구성에서 Carathéodory 외측도 논증 대신 쓸 수 있다.

[^1]: Peter A. Loeb, *Conversion from nonstandard to standard measure spaces and applications in probability theory*, Transactions of the American Mathematical Society 211 (1975), 113–122.
[^2]: Robert M. Anderson, *A non-standard representation for Brownian motion and Itô integration*, Israel Journal of Mathematics 25 (1976), 15–46.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [비표준 해석학](nonstandard-analysis.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #probability #analysis #logic
