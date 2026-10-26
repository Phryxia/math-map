# 붕괴점

# 개요

**붕괴점(breakdown point)** 은 표본의 몇 퍼센트를 임의의 값으로 바꾸어야 추정량을 한없이 멀리 보낼 수 있는지를 나타내는 비율이다. F. R. Hampel 이 1971 년에 분포에 대한 판본을, D. L. Donoho 와 P. J. Huber 가 1983 년에 유한 표본 판본을 정의했다[^1][^2]. 평균의 붕괴점은 $1/n$ 이고 중앙값은 약 $1/2$ 이다. 회귀에서는 최소제곱과 Huber 의 [M-추정량](m-estimators.md)이 설명변수가 큰 관측값 하나로 무너지고, 붕괴점이 약 $1/2$ 인 회귀 추정량으로 최소 중앙값 제곱(least median of squares, LMS)과 최소 절사 제곱(least trimmed squares, LTS)이 있다.

# 직관

관측값 $1,2,3,4,5$ 의 중심을 추정한다. 평균은 $3$ 이다. $5$ 하나를 $1000$ 으로 바꾸면 평균은 $202$ 가 되고, $5$ 를 더 큰 수로 바꿀수록 평균도 한없이 커진다. 관측값 다섯 가운데 하나만 바꿔도 평균은 어디로든 간다.

중앙값은 $3$ 이다. $4$ 와 $5$ 를 아무리 큰 수로 바꿔도 가운데 값은 $3$ 이다. $3$ 까지 셋을 바꾸면 가운데 값이 바꾼 값 가운데 하나가 되어 한없이 커질 수 있다. 다섯 가운데 둘까지는 견디고 셋에서 무너진다.

직선 회귀에서는 같은 일이 반응값과 설명변수 양쪽에서 일어난다. M-추정량은 잔차가 큰 관측값이 당기는 힘을 일정한 값 이하로 막지만, 설명변수 $x$ 가 아주 큰 점 하나를 넣으면 그 점의 당기는 힘이 $x$ 에 비례해 커진다. 그래서 반응값의 이상치는 견디지만 그런 점 하나에 기울기가 한없이 바뀐다.

# 정의

표본 $\mathbf x=(x_1,\dots,x_n)$ 과 추정량 $T$ 에서, 관측값 $m$ 개를 임의의 값으로 바꾼 표본 전체를 $\mathbf x'$ 로 쓴다. **유한 표본 붕괴점(finite-sample breakdown point)** 은

$$
\varepsilon^\ast(T,\mathbf x)=\min\Bigl\lbrace\frac mn : \sup_{\mathbf x'}\lVert T(\mathbf x')-T(\mathbf x)\rVert=\infty\Bigr\rbrace
$$

이다. 분포 $F$ 를 $(1-\varepsilon)F+\varepsilon H$ 로 오염시키고 $H$ 를 모든 분포에 걸쳐 바꿀 때 $T$ 가 유계로 남는 $\varepsilon$ 의 상한을 **점근 붕괴점(asymptotic breakdown point)** 이라 한다.

위치 추정량이 **이동 동변(translation equivariant)** 이라는 것은 모든 상수 $c$ 에 대해 $T(x_1+c,\dots,x_n+c)=T(\mathbf x)+c$ 인 것이다. 회귀 추정량 $T(\mathbf x,\mathbf y)$ 가 **회귀 동변(regression equivariant)** 이라는 것은 모든 $\mathbf v\in\mathbb R^p$ 에 대해 반응을 $y_i+\mathbf x_i^{\mathsf T}\mathbf v$ 로 바꾸면 추정값이 $T+\mathbf v$ 로 바뀌는 것이다.

# 성질

## 위치 추정량

- 평균은 $\varepsilon^\ast=1/n$ 이다.
- 중앙값은 $\varepsilon^\ast=\lfloor(n+1)/2\rfloor/n$ 이다.
- 위아래에서 각각 비율 $\alpha$ 만큼 버리고 평균하는 절사 평균(trimmed mean)은 점근 붕괴점이 $\alpha$ 다.
- 척도를 고정한 Huber 위치 추정량처럼 $\psi$ 가 유계이고 단조인 위치 M-추정량은 점근 붕괴점이 $1/2$ 다. 바꾼 관측값은 하나당 많아야 $c$ 만큼 당기고, 남은 관측값이 절반을 넘으면 그 당김을 상쇄하는 자리가 유계 범위에 남는다.

정리. 이동 동변인 위치 추정량의 유한 표본 붕괴점은 $\lfloor(n+1)/2\rfloor/n$ 이하다[^2].

증명의 요지. 관측값의 절반 가까이를 $c$ 만큼 옮긴 표본 $\mathbf x'$ 를 만들면 $\mathbf x$ 와 $\mathbf x'$ 의 관측값 $\lfloor n/2\rfloor$ 개가 같고, 남은 관측값을 바꾸어 $\mathbf x$ 에서 $\mathbf x'$ 로 갈 수 있다. 이동 동변성에서 $T(\mathbf x')=T(\mathbf x)+c$ 이고 $c$ 는 얼마든지 크게 잡을 수 있다.

## 회귀 추정량

[선형회귀](linear-regression.md)의 최소제곱 추정량은 $\varepsilon^\ast=1/n$ 이다. Huber 손실이나 절대오차 손실의 회귀 M-추정량도 설명변수가 큰 점 하나로 무너지므로 $\varepsilon^\ast=1/n$ 이다.

P. J. Rousseeuw 는 잔차 제곱의 중앙값을 최소화하는 LMS 추정량

$$
\hat\beta\_{\mathrm{LMS}}=\mathop{\mathrm{arg\thinspace min}}\_\beta\thinspace\mathrm{med}\_i\thinspace(y_i-\mathbf x_i^{\mathsf T}\beta)^2
$$

을 제안했고, 그 붕괴점이 일반 위치의 자료에서 $(\lfloor n/2\rfloor-p+2)/n$ 으로 $1/2$ 에 가까움을 증명했다[^3]. 잔차 제곱을 작은 것부터 $h$ 개만 더해 최소화하는 LTS 추정량도 $h\approx n/2$ 이면 붕괴점이 같은 차수다. 회귀 동변인 추정량의 붕괴점은 $(\lfloor(n-p)/2\rfloor+1)/n$ 이하다.

LMS 는 수렴 속도가 $n^{-1/3}$ 이고, LTS 는 $n^{-1/2}$ 로 수렴해 점근 정규성을 갖는다. 높은 붕괴점의 추정값에서 출발해 M-추정량의 반복을 몇 번 돌리면 붕괴점과 효율을 함께 얻는 MM-추정량(MM-estimator)이 된다.

## 계산

LMS 와 LTS 의 목적함수는 볼록이 아니다. 관측값 $p$ 개를 지나는 초평면을 모든 부분집합에서 계산하면 LMS 의 근사해가 나오지만 부분집합이 $\binom np$ 개다. 실무에서는 무작위 부분집합에서 출발해 잔차가 작은 $h$ 개로 최소제곱을 반복하는 FAST-LTS 를 쓴다[^4]. 반복마다 LTS 목적함수가 줄어든다.

# 활용

- 이상치 탐지. 높은 붕괴점의 회귀로 구한 잔차는 이상치가 섞여도 크게 바뀌지 않으므로, 잔차가 큰 관측값을 이상치 후보로 표시한다.
- 강건 척도 추정. 중앙값으로부터의 절대편차의 중앙값(median absolute deviation, MAD)은 붕괴점이 $1/2$ 이고 M-추정량의 척도로 쓰인다.
- 컴퓨터 비전의 모형 맞춤. 대응점의 절반 가까이가 틀린 자료에서 기하 변환을 추정할 때 LMS 와 같은 원리의 무작위 표본 합의가 쓰인다.

[^1]: F. R. Hampel, "A general qualitative definition of robustness", Annals of Mathematical Statistics 42 (1971), 1887–1896.
[^2]: D. L. Donoho, P. J. Huber, "The notion of breakdown point", in *A Festschrift for Erich L. Lehmann*, Wadsworth (1983), 157–184.
[^3]: P. J. Rousseeuw, "Least median of squares regression", Journal of the American Statistical Association 79 (1984), 871–880.
[^4]: P. J. Rousseeuw, K. Van Driessen, "Computing LTS regression for large data sets", Data Mining and Knowledge Discovery 12 (2006), 29–45.

# 연관 문서

## 선수지식

- [M-추정량](m-estimators.md)
- [선형회귀](linear-regression.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #optimization
