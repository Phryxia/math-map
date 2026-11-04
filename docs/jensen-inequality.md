# Jensen 부등식

# 개요

**Jensen 부등식(Jensen's inequality)** 은 볼록함수를 평균 안쪽에 넣은 값이 바깥쪽에 넣은 값보다 작거나 같다는 부등식이다. 값 $1$ 과 $9$ 가 반반의 확률로 나올 때, 평균을 내고 제곱하면 $25$ 이고 제곱하고 평균을 내면 $41$ 이어서 두 순서의 결과가 다르다. Jensen 부등식은 제곱처럼 볼록한 함수에서는 언제나 뒤쪽이 크다고 정해, 평균과 함수의 순서를 바꿀 때 생기는 차이의 방향을 준다.

# 직관

값이 $1$ 과 $9$ 인 두 경우가 각각 확률 $1/2$ 로 나오는 측정이 있고, 측정값을 제곱해서 쓴다고 하자. 제곱한 값의 평균을 구하는 길이 둘이다. 먼저 평균을 내고 제곱하면 $5^2=25$ 다. 먼저 제곱하고 평균을 내면 $(1+81)/2=41$ 이다. 두 값이 다르고, 뒤쪽이 크다.

$1$ 과 $9$ 를 다른 두 수로 바꾸어도 뒤쪽이 크다. 이유는 제곱함수의 그래프에 있다. 두 점 $(1,1)$ 과 $(9,81)$ 을 선분으로 이으면 그 선분은 그래프보다 위에 있다. 선분의 가운데 점의 높이가 $41$ 이고, 그래프에서 같은 가로 위치의 높이가 $25$ 다. 선분이 그래프 위에 있는 함수가 [볼록성](convexity.md)의 볼록함수이므로, 두 값을 반반으로 섞는 한 이 대소는 뒤집히지 않는다.

값이 셋 이상이거나 연속으로 퍼져 있으면 선분 하나로는 말할 수 없다. 대신 평균 위치에서 그래프에 접선을 긋는다. 볼록함수의 접선은 그래프보다 아래에 있으므로, 모든 값에서 접선의 높이가 함숫값 이하다. 양변의 평균을 내면 접선 쪽은 직선이라 평균이 접점의 높이 그대로이고, 함숫값 쪽은 그보다 크거나 같다. 접점의 높이가 $\varphi(E\lbrack X\rbrack)$ 이고 함숫값의 평균이 $E\lbrack\varphi(X)\rbrack$ 이다.

# 정의

확률공간 $(\Omega,\mathcal F,P)$ 위의 [확률변수](random-variables.md) $X$ 가 적분가능하고, 구간 $I\subseteq\mathbb R$ 이 $P(X\in I)=1$ 을 만족하며, $\varphi:I\to\mathbb R$ 가 볼록함수라고 하자. **Jensen 부등식** 은

$$
\varphi(E\lbrack X\rbrack)\le E\lbrack\varphi(X)\rbrack
$$

이다. 좌변은 평균을 먼저 낸 뒤 $\varphi$ 를 적용한 값이고, 우변은 $\varphi$ 를 먼저 적용한 뒤 평균을 낸 값이다. 우변은 $+\infty$ 일 수 있고, 그때도 부등식은 성립한다. $\varphi$ 가 오목함수이면 부등호의 방향이 반대다.

직관 절의 $X$ 는 $P(X=1)=P(X=9)=1/2$ 이고 $\varphi(x)=x^2$ 이면 부등식은 $25\le 41$ 이다. 같은 $X$ 에 오목함수 $\sqrt x$ 를 쓰면 $\sqrt{E\lbrack X\rbrack}=\sqrt5\approx 2.24$ 이고 $E\lbrack\sqrt X\rbrack=(1+3)/2=2$ 이어서 부등호가 반대로 선다. $\varphi(x)=3x+1$ 처럼 아핀인 함수는 볼록이면서 오목이므로 양변이 $16$ 으로 같다.

# 성질

## 적분 꼴과 유한 꼴

[Lebesgue 적분](lebesgue-integral.md)으로 쓰면 측도 $\mu$ 가 $\mu(\Omega)=1$ 인 측도이고 $f$ 가 적분가능할 때

$$
\varphi\left(\int\_\Omega f\thinspace d\mu\right)\le\int\_\Omega\varphi\circ f\thinspace d\mu
$$

다. 가중치 $\lambda_i\ge 0$, $\sum_i\lambda_i=1$ 에 대해 유한집합 위의 측도 $\mu(\lbrace i\rbrace)=\lambda_i$ 로 특수화하면 유한 꼴

$$
\varphi\left(\sum\_i\lambda_i x_i\right)\le\sum\_i\lambda_i\varphi(x_i)
$$

가 된다. $\lambda=(1/2,1/2)$, $x=(1,9)$, $\varphi(x)=x^2$ 이 직관 절의 계산이다.

## 지지선에 의한 증명

$m=E\lbrack X\rbrack$ 라 하자. 볼록함수는 정의역 내부의 각 점에서 **지지선(supporting line)** 을 갖는다. 곧 모든 $x\in I$ 에 대해

$$
\varphi(x)\ge\varphi(m)+c\thinspace(x-m)
$$

인 상수 $c$ 가 존재한다. $\varphi$ 가 미분가능하면 $c=\varphi'(m)$ 이고, 일반적으로는 좌미분계수와 우미분계수 사이의 아무 값이 된다. 양변에 $x=X$ 를 넣고 기댓값을 취하면 우변의 기댓값이 $\varphi(m)+c\thinspace(E\lbrack X\rbrack-m)=\varphi(m)$ 이므로 $E\lbrack\varphi(X)\rbrack\ge\varphi(m)$ 이다.

## 등호 조건

$\varphi$ 가 엄밀히 볼록하면 등호는 $X$ 가 확률 $1$ 로 상수일 때만 성립한다. 지지선 부등식이 $x\ne m$ 에서 엄밀하므로, $P(X\ne m)\gt 0$ 이면 기댓값을 취한 부등식도 엄밀해진다. $\varphi$ 가 어떤 구간에서 선형이면 $X$ 가 그 구간 안에 들어 있을 때 상수가 아니어도 등호가 된다.

## 조건부 꼴

[조건부 기댓값](conditional-expectation.md)에 대해서도 같은 부등식이 성립한다. $\mathcal G\subseteq\mathcal F$ 가 부분 $\sigma$ 대수이고 $X$ 와 $\varphi(X)$ 가 적분가능하면

$$
\varphi(E\lbrack X\mid\mathcal G\rbrack)\le E\lbrack\varphi(X)\mid\mathcal G\rbrack
$$

가 거의 확실하게 성립한다. 증명은 지지선의 기울기 $c$ 를 유리수 위의 상한으로 바꾸어 가산 개의 아핀 함수로 $\varphi$ 를 아래에서 근사하는 것이다. 이 꼴에서 $(X_n)$ 이 [martingale](martingales.md)이고 $\varphi$ 가 볼록이면 $(\varphi(X_n))$ 이 열마팅게일(submartingale)이 된다.

## 멱평균의 단조성

$r\lt s$ 이고 $X\ge 0$ 이면 $E\lbrack X^r\rbrack^{1/r}\le E\lbrack X^s\rbrack^{1/s}$ 다. $\varphi(x)=x^{s/r}$ 가 볼록이므로 $X^r$ 에 Jensen 부등식을 적용하면 나온다. $r=1$, $s=2$ 인 경우가 분산이 음이 아니라는 것과 같다.

# 활용

- 산술평균과 기하평균의 부등식(AM–GM inequality)은 $\varphi=-\log$ 에 유한 꼴을 적용한 것이다. $-\log$ 가 볼록이므로 $-\log\sum_i\lambda_i x_i\le-\sum_i\lambda_i\log x_i$ 이고, 양변에 지수를 취하면 $\prod_i x_i^{\lambda_i}\le\sum_i\lambda_i x_i$ 다.
- [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)가 음이 아니라는 것은 $-\log$ 에 Jensen 부등식을 적용해 얻는다. [변분 추론](variational-inference.md)에서 증거 하한(evidence lower bound)을 유도하는 단계도 같은 계산이다.
- 위험회피(risk aversion) 효용에서 기대효용이 기댓값의 효용보다 작다는 진술이 오목함수에 대한 Jensen 부등식이다.
- Doob 최대부등식(Doob's maximal inequality)을 $\vert M_n\vert$ 이나 $M_n^2$ 에 적용할 때, 이 과정이 열마팅게일이라는 것을 조건부 꼴로 얻는다.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)
- [확률변수](random-variables.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #optimization #measure_theory
