# n-gram 언어 모형

# 개요

**n-gram 언어 모형(n-gram language model)** 은 다음 낱말의 확률을 바로 앞 $n-1$ 개 낱말만 보고 정하는 문장의 확률 모형이다. 휴대폰 자판이 "학교에" 다음에 "간다" 를 추천하려면, 말뭉치에서 "학교에" 뒤에 어떤 낱말이 몇 번 왔는지 세어 확률로 바꾸면 된다.

세기만 하면 말뭉치에 한 번도 나오지 않은 낱말 쌍의 확률이 $0$ 이 되어, 멀쩡한 문장도 확률 $0$ 을 받는다. n-gram 언어 모형은 센 값에서 조금씩 덜어 낸 확률을 짧은 문맥의 확률로 나누어 주는 평활(smoothing)로 이 문제를 다룬다.

# 직관

말뭉치가 다음 세 문장이다.

- 나는 학교에 간다
- 나는 집에 간다
- 너는 학교에 간다

앞 낱말 하나만 보는 모형에서 "너는" 다음 낱말의 확률을 센 값으로 정하면, "너는" 뒤에는 "학교에" 만 한 번 나왔으므로 $P(\text{학교에}\mid\text{너는})=1$ 이고 $P(\text{집에}\mid\text{너는})=0$ 이다. "너는 집에 간다" 는 확률 $0$ 을 받는다. 말뭉치가 작아서 생긴 $0$ 이다.

"너는" 뒤의 셈 $1$ 에서 $D=1/2$ 를 덜어 $1/2$ 을 남기고, 덜어 낸 $1/2$ 을 "너는" 과 상관없는 다음 낱말 분포로 나눈다. 그 분포로 "앞에 서로 다른 낱말이 몇 종류 왔는가" 를 쓴다. 말뭉치의 서로 다른 낱말 쌍은 다섯 개이고, "학교에" 앞에는 "나는", "너는" 두 종류, "집에" 앞에는 "나는" 한 종류, "간다" 앞에는 "학교에", "집에" 두 종류가 왔다. 비율은 $2/5$, $1/5$, $2/5$ 다.

그러면 다음 확률이 나온다.

$$
\begin{aligned}
P(\text{학교에}\mid\text{너는})&=\tfrac12+\tfrac12\cdot\tfrac25=0.7,\cr
P(\text{집에}\mid\text{너는})&=\tfrac12\cdot\tfrac15=0.1,\cr
P(\text{간다}\mid\text{너는})&=\tfrac12\cdot\tfrac25=0.2.
\end{aligned}
$$

합이 $1$ 이고 "너는 집에" 가 양의 확률을 받는다. 이 방법을 Kneser–Ney 평활이라 한다.

# 정의

## n-gram 모형

낱말 열 $w_1\cdots w_T$ 의 확률을 앞 $n-1$ 개 낱말만 조건으로 한 곱으로 둔다.

$$
P(w_1\cdots w_T)=\prod_{i=1}^T P(w_i\mid w_{i-n+1}\cdots w_{i-1})
$$

이 가정 아래 낱말 열은 앞 $n-1$ 개 낱말을 상태로 한 [Markov 연쇄](markov-chains.md)다. $n=2$ 를 bigram, $n=3$ 을 trigram 이라 한다. 문장의 처음과 끝에는 표지 낱말을 붙인다.

## 최대가능도 추정과 평활

$c(uw)$ 를 문맥 $u$ 다음에 낱말 $w$ 가 나온 횟수, $c(u)=\sum_w c(uw)$ 라 하면 최대가능도 추정은 $P\_{\mathrm{ML}}(w\mid u)=c(uw)/c(u)$ 다. $c(uw)=0$ 인 쌍에 양의 확률을 주도록 이 값을 고치는 방법을 **평활(smoothing)** 이라 한다.

- 가산 평활. 어휘 크기를 $V$ 라 할 때 $(c(uw)+\lambda)/(c(u)+\lambda V)$ 로 둔다. [Laplace 계승 규칙](rule-of-succession.md)을 문맥마다 쓴 것이다.
- **절대 할인(absolute discounting)**. 셈마다 $0\lt D\lt1$ 을 덜고 덜어 낸 몫을 짧은 문맥 $u'$ ($u$ 에서 가장 앞 낱말을 뺀 것)의 분포로 나눈다.

$$
P(w\mid u)=\frac{\max(c(uw)-D,0)}{c(u)}+\frac{D\thinspace N_{1+}(u\bullet)}{c(u)}P(w\mid u')
$$

$N\_{1+}(u\bullet)$ 는 $u$ 다음에 한 번 이상 나온 서로 다른 낱말의 수다. 덜어 낸 총량이 둘째 항의 계수이므로 확률의 합이 $1$ 이다.

## Kneser–Ney 평활

절대 할인에서 가장 짧은 문맥의 분포를 낱말의 빈도 대신 **이어짐 확률(continuation probability)** 로 둔 것을 **Kneser–Ney 평활(Kneser–Ney smoothing)** 이라 한다[^1].

$$
P_{\mathrm{cont}}(w)=\frac{N_{1+}(\bullet w)}{N_{1+}(\bullet\bullet)}
$$

$N\_{1+}(\bullet w)$ 는 $w$ 앞에 한 번 이상 나온 서로 다른 낱말의 수이고, $N\_{1+}(\bullet\bullet)$ 는 서로 다른 낱말 쌍의 수다. 직관 절의 계산이 $n=2$, $D=1/2$ 인 Kneser–Ney 평활이다. 거기서 "간다" 의 빈도 비율은 $3/6$ 이지만 이어짐 확률은 $2/5$ 다.

# 성질

## 빈도와 이어짐 확률

짧은 문맥의 분포는 긴 문맥에서 셈이 $0$ 일 때만 쓰인다. 영어 말뭉치에서 "Francisco" 는 자주 나오지만 거의 "San" 뒤에서만 나온다. "San" 이 아닌 문맥에서 "Francisco" 를 빈도대로 예측하면 그 문맥에서 실제로 나올 가능성보다 훨씬 큰 확률을 준다. 앞에 오는 낱말의 종류 수는 새 문맥에서 그 낱말이 나올 가능성을 센다.

## 수정 Kneser–Ney 와 할인의 크기

Chen 과 Goodman 은 셈이 $1$, $2$, $3$ 이상인 쌍에 서로 다른 할인 $D_1,D_2,D_{3+}$ 를 주는 수정 Kneser–Ney 평활이 여러 말뭉치에서 다른 평활보다 낮은 혼잡도를 준다는 것을 실험으로 보였다[^2]. 셈이 $r$ 인 쌍의 수를 $n_r$ 라 할 때 $D_1$ 의 추정은 다음과 같다.

$$
D_1=1-2\frac{n_2}{n_1}\cdot\frac{n_1}{n_1+2n_2}
$$

## 혼잡도

시험 말뭉치 $w_1\cdots w_T$ 에서 모형의 **혼잡도(perplexity)** 는

$$
\mathrm{PP}=2^{-\frac1T\sum_{i=1}^T\log_2 P(w_i\mid w_{i-n+1}\cdots w_{i-1})}
$$

다. 지수는 시험 말뭉치의 낱말당 [Shannon 엔트로피](entropy.md)를 모형으로 추정한 교차 엔트로피이고, 혼잡도는 모형이 매 낱말을 평균 몇 개의 후보 가운데서 고르는 것과 같은지를 나타낸다. 확률 $0$ 인 낱말이 하나라도 있으면 혼잡도가 무한대다.

## Pitman–Yor 과정과의 관계

문맥마다 다음 낱말의 분포를 [Pitman–Yor 과정](pitman-yor-process.md)으로 두고, 그 기준 분포를 한 낱말 짧은 문맥의 분포로 이어 쌓은 계층 모형에서, 탁자마다 손님이 하나씩 앉는다고 근사한 사후 예측이 Kneser–Ney 평활의 식이다[^3]. 탁자 수가 서로 다른 앞 낱말의 수가 되고 할인 모수가 $D$ 가 된다.

# 활용

- 음성 인식과 기계 번역. 소리나 원문에서 나온 후보 문장들을 언어 모형의 확률로 다시 순위 매긴다.
- 자판 입력의 다음 낱말 추천과 철자 교정.
- 신경망 언어 모형의 비교 기준. 혼잡도를 같은 시험 말뭉치에서 재어 Kneser–Ney 평활 5-gram 모형과 견준다.
- 문자 단위 모형. 낱말 대신 글자를 단위로 하면 압축의 예측 모형이 된다.

[^1]: R. Kneser, H. Ney, "Improved backing-off for M-gram language modeling", ICASSP 1995, 181–184.
[^2]: S. F. Chen, J. Goodman, "An empirical study of smoothing techniques for language modeling", *Computer Speech and Language* 13 (1999), 359–394.
[^3]: Y. W. Teh, "A hierarchical Bayesian language model based on Pitman–Yor processes", ACL 2006.

# 연관 문서

## 선수지식

- [Markov 연쇄](markov-chains.md)
- [Laplace 계승 규칙](rule-of-succession.md)

## 더 알아보기

- [단어 임베딩](word-embeddings.md)

#machine_learning #statistics #probability #information_theory
