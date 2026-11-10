# Grenander 추정량

# 개요

**Grenander 추정량(Grenander estimator)** 은 확률밀도가 오른쪽으로 갈수록 줄어든다는 것만 알고 표본에서 그 밀도를 추정하는 방법이다. 손님이 도착하는 간격이나 고장까지의 시간처럼 짧은 값이 자주 나오는 자료에서 간격 $0.1,0.2,0.5,1.0$ 을 얻었다면, 히스토그램은 칸의 폭을 어떻게 잡느냐에 따라 모양이 달라진다. Grenander 추정량은 칸을 정하지 않고 경험분포함수를 위에서 덮는 가장 작은 오목 함수의 기울기를 밀도로 삼으며, 이 자료에서는 $(0,0.2\rbrack$ 에서 $2.5$, $(0.2,0.5\rbrack$ 에서 $5/6$, $(0.5,1\rbrack$ 에서 $0.5$ 를 준다.

# 직관

표본 $0.1,0.2,0.5,1.0$ 의 경험분포함수는 각 값에서 $1/4$ 씩 뛴다. 점 $(0,0)$, $(0.1,0.25)$, $(0.2,0.5)$, $(0.5,0.75)$, $(1,1)$ 을 찍는다. 밀도가 줄어들면 분포함수는 오목하므로, 이 점들을 아래에 두는 가장 작은 오목 꺾은선을 찾는다.

$(0,0)$ 에서 나머지 점으로 가는 기울기는 $2.5,2.5,1.5,1$ 이고, 가장 큰 $2.5$ 를 주는 가장 먼 점 $(0.2,0.5)$ 까지 선분을 긋는다. $(0.2,0.5)$ 에서는 $(0.5,0.75)$ 로 $5/6$, $(1,1)$ 로 $5/8$ 이므로 $(0.5,0.75)$ 까지 긋는다. 마지막 선분의 기울기는 $0.5$ 다.

기울기 $2.5,5/6,0.5$ 가 줄어드는 순서이므로 꺾은선은 오목하고, 그 기울기를 밀도로 읽는다. 넓이는 $0.5+0.25+0.25=1$ 이다.

# 정의

$X_1,\dots,X_n$ 이 $\lbrack 0,\infty)$ 위의 증가하지 않는 밀도 $f$ 를 갖는 분포에서 독립으로 뽑은 표본이고 $F_n$ 이 경험분포함수라 하자. $\lbrack 0,\infty)$ 위의 오목 함수 가운데 모든 점에서 $F_n$ 이상인 것들의 하한을 $F_n$ 의 **가장 작은 오목 상계(least concave majorant)** $\hat F_n$ 이라 한다. 그 왼쪽 도함수

$$
\hat f_n(x)=\lim\_{h\downarrow 0}\frac{\hat F_n(x)-\hat F_n(x-h)}{h}
$$

를 Grenander 추정량이라 한다. $\hat F_n$ 은 [순서통계량](order-statistics.md)에서만 꺾이는 꺾은선이므로 $\hat f_n$ 은 증가하지 않는 계단함수다.

# 성질

## 최대가능도

정리(Grenander). $\hat f_n$ 은 $\lbrack 0,\infty)$ 위의 증가하지 않는 밀도 가운데 가능도 $\prod f(X_i)$ 를 최대로 하는 것이다.[^1]

증명의 요지. 순서통계량 $X\_{(1)}\lt\cdots\lt X\_{(n)}$ 사이의 구간에서 $f$ 를 그 구간 오른쪽 끝의 값 $f\_{(i)}$ 로 바꾸고 $X\_{(n)}$ 뒤를 $0$ 으로 바꾸면 증가하지 않는 성질과 가능도가 유지되고 넓이는 늘지 않는다. 넓이를 $1$ 로 다시 맞추면 가능도가 커지므로 $(X\_{(i-1)},X\_{(i)}\rbrack$ 에서 상수인 밀도만 보면 된다. 그러면 문제는 $\sum\log f\_{(i)}$ 를 $\sum f\_{(i)}(X\_{(i)}-X\_{(i-1)})=1$ 과 $f\_{(1)}\ge\cdots\ge f\_{(n)}$ 아래 최대화하는 것이다.

그 해는 순서를 무시한 해 $1/(n(X\_{(i)}-X\_{(i-1)}))$ 를 간격을 가중치로 [등위 회귀](isotonic-regression.md)의 감소판에 넣은 값이고, 등위 회귀 문서의 누적합 도표에서 볼록 하계를 오목 상계로 바꾸면 $\hat F_n$ 의 기울기가 된다. 직관 절에서 순서를 무시한 해는 $2.5,2.5,5/6,0.5$ 로 이미 줄어드는 순서다.

## 일치성

$\hat F_n$ 과 참 분포함수 $F$ 사이에는 Marshall 부등식 $\sup\vert\hat F_n-F\vert\le\sup\vert F_n-F\vert$ 가 성립한다.[^2] 오른쪽은 [Glivenko–Cantelli 정리](glivenko-cantelli.md)로 $0$ 으로 가므로 $\hat F_n$ 이 $F$ 로 고르게 수렴하고, $f$ 가 연속인 $x\gt 0$ 에서 $\hat f_n(x)\to f(x)$ 다. 원점에서는 $\hat f_n(0+)$ 가 $f(0)$ 로 수렴하지 않는다.[^3]

## 세제곱근 속도

정리. $f'(x_0)\lt 0$ 이고 $f'$ 이 $x_0$ 에서 연속이면

$$
n^{1/3}\bigl(\hat f_n(x_0)-f(x_0)\bigr)\to\bigl\vert 4f(x_0)f'(x_0)\bigr\vert^{1/3}Z
$$

로 분포수렴한다. $Z$ 는 양쪽 [Brown 운동](brownian-motion.md) $W(t)$ 에서 $t^2$ 을 뺀 과정의 최대점의 분포를 따르고, 이 분포를 Chernoff 분포(Chernoff's distribution)라 한다.[^4]

[최대가능도 추정](maximum-likelihood.md)의 모수 모형에서는 오차가 $n^{-1/2}$ 로 줄지만, 모양 제약만 둔 이 추정량은 $n^{-1/3}$ 으로 줄고 극한이 정규분포가 아니다.

# 활용

- 생존 자료와 대기 시간. 감소하는 밀도는 고장률이 일정하거나 줄어드는 수명 분포, 도착 간격에서 나온다. 칸의 폭이나 핵의 띠폭을 정하지 않고 추정할 수 있다.
- 모양 제약 추론. 단조, 오목, 로그오목 같은 모양만 가정하는 추정의 기본 예이고, 같은 $n^{1/3}$ 속도와 Chernoff 분포가 단조 회귀와 현재 상태 자료(current status data)의 생존함수 추정에서도 나온다.[^4]

[^1]: Ulf Grenander, "On the theory of mortality measurement. Part II", *Skandinavisk Aktuarietidskrift* **39** (1956), 125–153.
[^2]: Albert W. Marshall, "Discussion on Barlow and van Zwet's paper", in *Nonparametric Techniques in Statistical Inference*, Cambridge University Press, 1970, 174–176.
[^3]: Michael Woodroofe, Jiayang Sun, "A penalized maximum likelihood estimate of f(0+) when f is non-increasing", *Statistica Sinica* **3** (1993), 501–515.
[^4]: Piet Groeneboom, Geurt Jongbloed, *Nonparametric Estimation under Shape Constraints*, Cambridge University Press, 2014, 2–3 장. 극한분포는 B. L. S. Prakasa Rao, "Estimation of a unimodal density", *Sankhyā Series A* **31** (1969), 23–36 에서 처음 얻었다.

# 연관 문서

## 선수지식

- [등위 회귀](isotonic-regression.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #optimization
