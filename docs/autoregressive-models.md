# 자기회귀 모형

# 개요

**자기회귀 모형(autoregressive model, AR)** 은 시계열의 오늘 값을 지난 몇 개 값의 일차결합에 새 잡음을 더한 것으로 놓는 모형이다. 날마다 재는 기온의 평년 대비 편차는 어제 편차가 컸으면 오늘도 큰 경향이 있어, 편차들을 서로 독립인 값으로 다루면 내일 값의 예측도 그 오차의 크기도 틀린다. 자기회귀 모형은 이 경향을 계수 몇 개로 적고, 그 계수를 자료의 자기공분산에서 연립방정식 하나로 추정해 예측에 쓴다.

# 직관

오늘 편차가 어제 편차의 절반에 새 잡음을 더한 것이라 한다. 잡음은 평균이 $0$, 분산이 $0.75$ 이고 지난 값과 상관이 없다.

$$
x\_n=0.5\thinspace x\_{n-1}+\varepsilon\_n
$$

편차의 분산이 날마다 같다면 그 값 $v$ 는 $v=0.25\thinspace v+0.75$ 를 만족하므로 $v=1$ 이다. 하루 떨어진 두 편차의 공분산은 $\mathbb E\lbrack x\_nx\_{n-1}\rbrack=0.5\thinspace v=0.5$ 이고, 같은 계산을 되풀이하면 $k$ 일 떨어진 공분산은 $0.5^k$ 이다.

내일 값은 오늘 값의 절반으로 예측하고, 예측오차는 잡음 하나라서 분산이 $0.75$ 다. 모레 값은 $0.25\thinspace x\_n$ 으로 예측하고, 오차는 $\varepsilon\_{n+2}$ 에 $0.5\thinspace\varepsilon\_{n+1}$ 을 더한 것이고, 그 분산은 $0.25\cdot 0.75+0.75=0.9375$ 다. 멀리 갈수록 예측은 $0$ 으로, 오차의 분산은 편차 자체의 분산 $1$ 로 간다.

계수를 모를 때는 자료에서 하루 떨어진 공분산과 분산의 비를 구한다. 그 비가 $0.5$ 이면 계수도 $0.5$ 로 추정된다. 지난 값을 여러 개 쓰는 모형에서는 이 비교가 연립방정식이 되고, 그 연립방정식을 [Levinson–Durbin 알고리즘](levinson-durbin-algorithm.md)이 푼다.

# 정의

## 정상 과정과 백색잡음

평균이 $n$ 에 무관하고 $\mathrm{Cov}(x\_n,x\_{n+k})$ 가 $k$ 에만 의존하는 수열 $(x\_n)$ 을 **약정상 과정(weakly stationary process)** 이라 하고, 그 공분산 $\gamma(k)$ 를 **자기공분산(autocovariance)** 이라 한다. 평균이 $0$, 분산이 $\sigma^2$ 이고 서로 다른 시각의 값이 상관이 없는 과정을 **백색잡음(white noise)** 이라 한다. 직관 절의 $\varepsilon\_n$ 이 $\sigma^2=0.75$ 인 백색잡음이고, $x\_n$ 의 자기공분산은 $\gamma(k)=0.5^{\vert k\vert}$ 다.

## AR(p) 모형

$\varepsilon\_n$ 을 백색잡음이라 하자. 다음을 만족하는 약정상 과정을 차수 $p$ 의 자기회귀 모형, 줄여 AR($p$) 모형이라 한다.

$$
x\_n=\phi\_1x\_{n-1}+\cdots+\phi\_px\_{n-p}+\varepsilon\_n
$$

$\varepsilon\_n$ 은 $x\_{n-1},x\_{n-2},\dots$ 와 상관이 없다. 다항식 $\phi(z)=1-\phi\_1z-\cdots-\phi\_pz^p$ 를 **자기회귀 다항식(autoregressive polynomial)** 이라 한다. 직관 절은 $p=1$, $\phi\_1=0.5$ 이고 $\phi(z)=1-0.5z$ 다.

# 성질

## 정상성 조건

$\phi(z)$ 의 근이 모두 단위원 밖에 있으면, 위 식을 만족하는 약정상 과정이 하나뿐이고 지난 잡음의 급수로 적힌다.[^1]

$$
x\_n=\sum\_{j\ge 0}\psi\_j\varepsilon\_{n-j},\qquad \sum\_{j\ge 0}\psi\_jz^j=\frac{1}{\phi(z)}
$$

직관 절은 근이 $z=2$ 이고 $\psi\_j=0.5^j$ 다. $\phi\_1=1$ 이면 근이 $z=1$ 이고, $x\_n=x\_{n-1}+\varepsilon\_n$ 의 분산은 걸음마다 $\sigma^2$ 씩 늘어 약정상 해가 없다. 이 급수 표현은 [Wold 분해](wold-decomposition.md)가 약정상 과정 일반에 주는 꼴의 특수한 경우다.

## Yule–Walker 방정식

AR($p$) 식의 양변에 $x\_{n-k}$($k\ge 1$)를 곱해 평균을 내면 다음 **Yule–Walker 방정식(Yule–Walker equations)** 이 나온다.

$$
\gamma(k)=\sum\_{i=1}^p\phi\_i\gamma(k-i)\quad(k=1,\dots,p),\qquad \sigma^2=\gamma(0)-\sum\_{i=1}^p\phi\_i\gamma(i)
$$

계수행렬 $(\gamma(i-j))$ 는 [Toeplitz 행렬](toeplitz-matrices.md)이다. 자기공분산을 표본값으로 바꾸어 풀면 Yule–Walker 추정량이 되고, Levinson–Durbin 알고리즘이 $p=1,2,\dots$ 의 해를 차례로 $O(p^2)$ 연산에 준다. 직관 절에서는 $p=1$ 이라 $\phi\_1=\gamma(1)/\gamma(0)=0.5$, $\sigma^2=1-0.5\cdot 0.5=0.75$ 다.

## 자기상관과 편자기상관

자기상관 $\rho(k)=\gamma(k)/\gamma(0)$ 은 $k$ 가 커질 때 기하급수적으로 줄고 $0$ 이 되지는 않는다. 지난 값 $k-1$ 개의 영향을 뺀 뒤 $x\_n$ 과 $x\_{n-k}$ 의 상관을 **편자기상관(partial autocorrelation)** 이라 한다. AR($p$) 모형의 편자기상관은 $k\gt p$ 에서 $0$ 이고, Levinson–Durbin 알고리즘의 반사 계수가 편자기상관이다. 표본의 편자기상관이 어디서 끊기는지로 $p$ 를 고른다.

## 스펙트럼 밀도

AR($p$) 과정의 스펙트럼 밀도는 다음과 같다.

$$
f(\omega)=\frac{\sigma^2}{2\pi\thinspace\vert\phi(e^{-i\omega})\vert^2}
$$

직관 절은 $f(\omega)=0.75/(2\pi(1.25-\cos\omega))$ 이고, 낮은 진동수에서 크다. 이웃한 값이 비슷한 과정이라 느린 오르내림이 많다.

# 활용

- 예측. AR($p$) 모형의 $h$ 걸음 예측은 식을 앞으로 되풀이해 얻고, 예측오차의 분산은 $\sigma^2\sum\_{j\lt h}\psi\_j^2$ 다.
- 차수 선택. 후보 $p$ 마다 모형을 적합하고 [정보 기준](information-criteria.md)이 가장 작은 차수를 고른다.
- 선형 예측 부호화. 음성 신호를 짧은 구간으로 나누어 AR 계수를 구하고, 계수와 예측오차만 보내 음성을 압축한다. [격자 필터](lattice-filter.md)가 반사 계수로 이 계산을 한다.
- [스펙트럼 추정](spectral-estimation.md). 짧은 자료에서 주기도 대신 AR 모형의 스펙트럼 밀도를 쓰면 좁은 봉우리가 갈라져 보인다. Burg 의 최대 엔트로피 방법(maximum entropy method)이 이 추정이다.[^2]

[^1]: P. J. Brockwell, R. A. Davis, *Time Series: Theory and Methods*, 2nd ed., Springer (1991), 3 장과 8 장.

[^2]: J. P. Burg, "Maximum entropy spectral analysis", Ph.D. thesis, Stanford University (1975).

# 연관 문서

## 선수지식

- [Levinson–Durbin 알고리즘](levinson-durbin-algorithm.md)

## 더 알아보기

- [ARMA 모형](arma-models.md)

#statistics #signal_processing #probability
