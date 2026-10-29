# 이차 경험분포함수 통계량

# 개요

**이차 경험분포함수 통계량(quadratic EDF statistic)** 은 표본에서 만든 누적 비율의 그래프와 가설의 분포함수 그래프의 차이를 구간 전체에서 제곱해 더한 검정통계량이다. 표본 $100$ 개가 $\lbrack 0,1\rbrack$ 의 [균등분포](uniform-distribution.md)에서 왔는지 검정할 때 두 그래프가 한 점에서 크게 벌어지지 않고 넓은 범위에서 조금씩 벌어지면, 차이의 최댓값만 보는 검정은 이 어긋남을 잘 잡지 못한다. 이 통계량은 차이의 제곱을 가중과 함께 적분해 넓은 범위의 어긋남을 모으고, 가중을 양 끝에서 크게 주면 꼬리의 어긋남을 더 민감하게 잡는다.

# 직관

이차 경험분포함수 통계량은 경험 분포함수와 가설의 분포함수의 차이를 제곱하고 가중을 주어 적분한 적합도 검정통계량이다. 가중이 $1$ 이면 **Cramér–von Mises 통계량(Cramér–von Mises statistic)** $W^2$, 분산의 역수이면 **Anderson–Darling 통계량(Anderson–Darling statistic)** $A^2$ 이다. EDF 는 경험 분포함수(empirical distribution function)다.

[Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md)은 차이의 최댓값만 보고, 이 통계량들은 차이 전체를 적분한다. 귀무가설 아래의 극한분포는 [Brown 다리](brownian-bridge.md)의 제곱 적분이고, Karhunen–Loève 전개로 독립 정규 제곱의 가중합으로 쓰인다.

표본 $100$ 개가 $\lbrack 0,1\rbrack$ 의 균등분포에서 왔는지 검정한다. 귀무가설 아래에서 $F_n(x)$ 는 $x$ 근처에 있고 그 표준편차는 $\sqrt{x(1-x)/100}$ 이다. $x=0.5$ 에서는 $0.05$ 이고 $x=0.02$ 에서는 $0.014$ 다.

실제 분포가 $0$ 근처에 질량을 조금 더 두어 $F(0.02)=0.05$ 라 하자. $x=0.02$ 에서 차이는 $0.03$ 쯤이다. Kolmogorov–Smirnov 검정은 모든 $x$ 에 같은 기준 $0.136$ 을 쓰므로 이 차이로는 기각하지 않는다. 그런데 $0.03$ 은 그 점의 표준편차 $0.014$ 의 두 배를 넘는다.

차이를 그 점의 분산 $x(1-x)/n$ 으로 나누면 $x=0.02$ 의 차이 $0.03$ 과 $x=0.5$ 의 차이 $0.1$ 이 같은 크기로 비교된다. 나눈 값을 제곱해 모든 $x$ 에서 적분한 것이 Anderson–Darling 통계량이고, 나누지 않고 제곱해 적분한 것이 Cramér–von Mises 통계량이다.

# 정의

## 통계량

$X_1,\dots,X_n$ 이 독립이고 같은 분포 $F$ 를 따른다. 연속인 분포함수 $F_0$ 에 대해 $H_0:F=F_0$ 를 검정한다. 경험 분포함수 $F_n$ 과 가중 함수 $\psi\colon(0,1)\to\lbrack 0,\infty)$ 로

$$
Q_n=n\int_{-\infty}^{\infty}\big(F_n(x)-F_0(x)\big)^2\psi\big(F_0(x)\big)\thinspace dF_0(x)
$$

를 둔다. $\psi\equiv 1$ 이면 $W^2$, $\psi(t)=1/(t(1-t))$ 이면 $A^2$ 이다.

## 계산

순서통계량 $X\_{(1)}\le\dots\le X\_{(n)}$ 과 $V_i=F_0(X\_{(i)})$ 로 적분이 다음 합이 된다[^1].

$$
W^2=\frac{1}{12n}+\sum_{i=1}^{n}\Big(V_i-\frac{2i-1}{2n}\Big)^2
$$

$$
A^2=-n-\frac1n\sum_{i=1}^{n}(2i-1)\big(\log V_i+\log(1-V_{n+1-i})\big)
$$

$F_n$ 이 순서통계량 사이에서 상수이므로 구간마다 적분이 닫힌 식으로 계산된다.

# 성질

## 분포무관성

$F_0$ 이 연속이면 $U_i=F_0(X_i)$ 가 귀무가설 아래에서 $\lbrack 0,1\rbrack$ 의 균등분포를 따르고, 치환 $t=F_0(x)$ 로 $Q_n$ 이 $U_i$ 만으로 정해진다. 따라서 $Q_n$ 의 분포는 $n$ 과 $\psi$ 에만 의존한다.

## 극한분포

정리. 귀무가설 아래에서 다음이 분포수렴한다[^1][^2].

$$
W^2\longrightarrow\int_0^1(B^0_t)^2\thinspace dt=\sum_{k=1}^{\infty}\frac{Z_k^2}{k^2\pi^2},\qquad A^2\longrightarrow\int_0^1\frac{(B^0_t)^2}{t(1-t)}\thinspace dt=\sum_{k=1}^{\infty}\frac{Z_k^2}{k(k+1)}
$$

$B^0$ 는 Brown 다리이고 $Z_1,Z_2,\dots$ 는 독립 표준정규다.

증명의 요지. 경험 과정 $\sqrt n(F_n(t)-t)$ 가 균등 표본에서 $B^0$ 로 약수렴하고, 적분 사상의 연속성으로 첫 극한이 나온다. $A^2$ 는 가중이 $t=0,1$ 에서 적분가능하지 않으므로 끝 근처를 따로 막는 논증이 더 필요하다. 오른쪽의 급수는 공분산 핵 $(\min(s,t)-st)\sqrt{\psi(s)\psi(t)}$ 의 고윳값 전개다. $\psi\equiv 1$ 이면 고윳값이 $1/(k\pi)^2$ 이고, $\psi(t)=1/(t(1-t))$ 이면 고유함수가 Legendre 다항식에서 나와 고윳값이 $1/(k(k+1))$ 이다.

## 분위수

극한분포의 평균은 $W^2$ 쪽이 $\sum_k 1/(k\pi)^2=1/6$, $A^2$ 쪽이 $\sum_k 1/(k(k+1))=1$ 이다. 유의수준 5% 의 기각값은 $W^2$ 가 $0.461$, $A^2$ 가 $2.492$ 다[^1]. $A^2$ 는 $n\ge 5$ 이면 극한분포의 분위수를 그대로 써도 크기의 차이가 작다[^3].

## 추정한 모수

$F_0$ 의 모수를 같은 표본에서 추정해 넣으면, Kolmogorov–Smirnov 검정과 같이 통계량이 작아져 극한분포가 바뀐다. 정규분포, [지수분포](exponential-distribution.md)처럼 위치와 척도의 모수족이면 바뀐 극한분포가 모수의 참값에 의존하지 않으므로, 모수족마다 분위수 표를 따로 만든다[^3].

# 활용

- **정규성 검정.** 평균과 분산을 추정한 정규분포에 대한 Anderson–Darling 검정은 꼬리에 가중을 두므로, 꼬리가 두꺼운 대립가설에 대해 Kolmogorov–Smirnov 검정보다 검정력이 크다[^3].
- **이표본 판본.** 두 표본의 경험 분포함수 차이를 합친 경험분포로 적분하면 이표본 Cramér–von Mises 통계량과 이표본 Anderson–Darling 통계량이 된다.

[^1]: T. W. Anderson, D. A. Darling, "Asymptotic theory of certain goodness of fit criteria based on stochastic processes", *Annals of Mathematical Statistics* **23** (1952), 193–212.
[^2]: Galen R. Shorack, Jon A. Wellner, *Empirical Processes with Applications to Statistics*, Wiley, 1986, 5 장.
[^3]: M. A. Stephens, "EDF statistics for goodness of fit and some comparisons", *Journal of the American Statistical Association* **69** (1974), 730–737.

# 연관 문서

## 선수지식

- [Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md)
- [Brown 다리](brownian-bridge.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability
