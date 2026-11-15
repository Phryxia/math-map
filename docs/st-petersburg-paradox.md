# St. Petersburg 역설

# 개요

**St. Petersburg 역설(St. Petersburg paradox)** 은 기댓값이 무한대인 도박에 사람들이 적은 돈만 걸려 한다는 관찰과, 기댓값으로 공정한 참가비를 정하는 원칙이 어긋나는 예다. 동전을 앞면이 나올 때까지 던져 $k$ 번째에 처음 앞면이 나오면 $2^k$ 원을 받는 게임에서, 받는 돈의 기댓값은 무한대지만 이 게임에 $20$ 원을 내려는 사람도 드물다. 받는 돈의 효용으로 기댓값을 다시 계산하거나, 상대의 자금 한도를 넣거나, 여러 판의 합이 자라는 속도를 보면 유한한 참가비가 나온다.

# 직관

처음 앞면이 나오는 시각 $K$ 는 확률 $1/2$ 의 [기하분포](geometric-distribution.md)를 따르므로 $\Pr\lbrack K=k\rbrack=2^{-k}$ 다. 받는 돈 $2^K$ 의 기댓값은 각 항이 $2^{-k}\cdot 2^k=1$ 인 급수다.

$$
\mathbb E\lbrack 2^K\rbrack=\sum_{k=1}^\infty 2^{-k}2^k=1+1+1+\cdots=\infty
$$

받는 돈이 $2$ 원이나 $4$ 원일 확률은 $3/4$ 이고, $64$ 원 이상일 확률은 $1/32$ 이다. 기댓값을 무한대로 만드는 것은 확률이 아주 작은 큰 상금들이다. 그 상금이 나오는 판은 실제로 거의 나오지 않으므로, 기댓값만 보고 큰 참가비를 내면 대부분의 경우 돈을 잃는다.

# 정의

공정한 동전을 앞면이 나올 때까지 던지고, $k$ 번째 던지기에서 처음 앞면이 나오면 $2^k$ 를 받는 게임을 **St. Petersburg 게임(St. Petersburg game)** 이라 한다. 이 게임의 상금 $X=2^K$ 는 $\Pr\lbrack X=2^k\rbrack=2^{-k}$ 인 확률변수이고 기댓값이 없다. 참가비를 기댓값으로 정하는 원칙으로는 이 게임의 참가비가 정해지지 않는 것을 **St. Petersburg 역설** 이라 한다.

N. Bernoulli 가 1713 년에 문제를 냈고, D. Bernoulli 가 1738 년 St. Petersburg 학술원 논문집에 해법을 실어 이 이름이 붙었다.[^1]

# 성질

## 로그 효용

D. Bernoulli 는 돈 $x$ 의 가치가 $x$ 가 아니라 $\log x$ 에 비례한다고 놓았다. 그러면 상금의 효용의 기댓값은 유한하다.

$$
\mathbb E\lbrack\log 2^K\rbrack=\log 2\sum_{k=1}^\infty k2^{-k}=2\log 2=\log 4
$$

효용이 같은 확실한 금액은 $4$ 다. 효용을 이렇게 바꾸는 것은 [Kelly 기준](kelly-criterion.md)이 로그 자산의 기댓값을 최대화하는 것과 같은 계산이다.

로그 효용으로도 역설은 완전히 사라지지 않는다. 상금을 $e^{2^k}$ 로 바꾸면 로그 효용의 기댓값이 다시 무한대가 되므로, 효용 함수가 위로 유계가 아니면 같은 꼴의 게임을 만들 수 있다. 이것을 K. Menger 가 1934 년에 지적했다.[^2]

## 자금 한도

상대의 자금이 $2^m$ 이어서 그보다 큰 상금은 $2^m$ 만 받는다면 기댓값은 다음과 같다.

$$
\sum_{k=1}^{m}2^{-k}2^k+\sum_{k\gt m}2^{-k}2^m=m+1
$$

자금이 약 $1$ 조, 곧 $2^{40}$ 이면 기댓값은 $41$ 이다. 기댓값을 무한대로 만든 것이 실제로는 지급될 수 없는 상금이었으므로, 한도를 넣으면 기댓값이 자금의 로그 정도로 줄어든다.

## 여러 판의 합

게임을 $n$ 번 해서 받는 돈의 합 $S_n$ 은 $n$ 에 비례해 자라지 않는다. W. Feller 는 다음 비가 $1$ 로 확률수렴한다는 약한 [큰 수의 법칙](law-of-large-numbers.md)을 증명했다.[^3]

$$
\frac{S_n}{n\log_2 n}
$$

그래서 $n$ 판을 할 때 한 판의 공정한 참가비는 $\log_2 n$ 이다. $1024$ 판이면 한 판에 약 $10$ 이다. 기댓값이 없으므로 표본평균이 한 값으로 모이는 보통의 큰 수의 법칙은 성립하지 않고, 정규화를 $n$ 대신 $n\log_2 n$ 으로 바꾸어야 수렴한다.

# 활용

- 기대효용 이론. 위험이 있는 선택을 금액의 기댓값이 아니라 효용의 기댓값으로 비교하는 기대효용 이론(expected utility theory)이 이 역설의 Bernoulli 해법에서 시작했다. 오목한 효용 함수가 위험 회피를 나타낸다.
- 꼬리가 두꺼운 분포. 상금의 분포는 $\Pr\lbrack X\ge x\rbrack$ 가 대략 $2/x$ 인 Pareto 꼴 꼬리를 가진다. 이런 분포의 합은 몇 개의 큰 값이 좌우하고, 표본평균으로 평균을 추정하는 방법이 통하지 않는다.
- 재무와 보험의 가격 결정. 확률이 작고 손실이 큰 사건의 가격을 기댓값으로 정하면 지급 능력의 한도와 어긋날 수 있다. 자금 한도 절의 계산이 이 어긋남의 가장 단순한 예다.

[^1]: D. Bernoulli, "Specimen theoriae novae de mensura sortis", *Commentarii Academiae Scientiarum Imperialis Petropolitanae* **5** (1738), 175–192. 영역은 *Econometrica* **22** (1954), 23–36.
[^2]: K. Menger, "Das Unsicherheitsmoment in der Wertlehre", *Zeitschrift für Nationalökonomie* **5** (1934), 459–485.
[^3]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. I, 3rd ed., Wiley (1968), X.4.

# 연관 문서

## 선수지식

- [기하분포](geometric-distribution.md)
- [큰 수의 법칙](law-of-large-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #statistics
