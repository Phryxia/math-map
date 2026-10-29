# 붓스트랩

# 개요

**붓스트랩(bootstrap)** 은 가진 표본에서 다시 표본을 뽑아 통계량이 얼마나 흔들리는지를 근사하는 방법이다. 표본평균의 분산은 $\sigma^2/n$ 에 표본분산을 넣으면 나오지만, 표본 중위수의 분산은 이런 공식으로 바로 나오지 않는다. 붓스트랩은 표본 $n$ 개에서 복원추출로 크기 $n$ 인 표본을 여러 번 뽑아 중위수를 매번 다시 계산하고, 그 값들의 흩어짐으로 분산을 추정한다.

# 직관

붓스트랩은 표본에서 다시 표본을 뽑아 통계량의 분포를 근사하는 방법이다. 참 분포 $P$ 를 모르는 자리에 경험 분포 $P_n$ 을 넣고, $P_n$ 에서 크기 $n$ 의 표본을 복원추출로 뽑아 통계량을 다시 계산한다.

근사의 근거는 [경험 과정](empirical-process.md)의 수렴이다. 통계량이 $P$ 를 매끄럽게 따르는 함수이고 함수족이 Donsker 족이면 재표본 통계량의 분포가 원래 통계량의 분포와 같은 극한을 갖는다.

$\lbrack 0,1\rbrack$ 에서 표본 $X_1,\dots,X_n$ 을 뽑아 표본 중위수 $T_n$ 을 계산하고 그 표준편차를 알고자 한다. 표본평균이면 $\mathrm{Var}(\bar X)=\sigma^2/n$ 이고 $\sigma^2$ 을 표본분산으로 바꾸면 끝난다. 중위수의 분산은 이 길로 가지 않는다.

중위수의 분산을 정의대로 쓰면

$$\mathrm{Var}\_P(T_n) = \int (T_n(x_1,\dots,x_n) - E\_P T_n)^2\thinspace dP(x_1)\cdots dP(x_n)$$

이고 적분이 $P$ 에 대한 것이다. $P$ 를 모르니 값이 나오지 않는다. 표본평균에서는 이 적분이 $\sigma^2/n$ 으로 접혀 미지량이 하나만 남았지만, 중위수에서는 접히지 않는다.

적분의 $P$ 를 경험 분포 $P_n$ 으로 바꾼다. $P_n$ 은 표본점 $n$ 개에 질량 $1/n$ 을 둔 분포이므로 적분이 유한합이 된다. 표본점을 중복 허용으로 $n$ 개 고르는 모든 경우에 중위수를 계산해 그 분산을 내면 값이 나온다. 경우의 수가 $n^n$ 이라 전부 세는 대신 $P_n$ 에서 표본을 $B$ 번 뽑아 그 표본분산을 쓴다.

$P_n$ 이 $P$ 에 가까우므로 이 값이 참 분산에 가깝다. 중위수를 분포의 함수로 보면 $T(P_n)$ 과 $T(P)$ 의 차이가 경험 과정의 크기로 묶이고, 분산을 재는 연산도 같은 차이로 묶인다.

# 정의

## 붓스트랩 표본

표본 $X_1,\dots,X_n$ 에서 복원추출로 $n$ 개를 뽑은 $X_1^{\ast},\dots,X_n^{\ast}$ 을 **붓스트랩 표본**이라 한다. 각 $X_i^{\ast}$ 는 경험 측도 $P_n$ 에서 독립으로 뽑은 것과 같고, 원래 표본을 조건으로 고정했을 때의 분포가 $P_n$ 이다.

재표본의 경험 측도를 $P_n^{\ast}$ 로 쓴다. 표본점 $X_i$ 가 재표본에 들어간 횟수를 $M_i$ 라 하면 $(M_1,\dots,M_n)$ 은 시행 $n$ 번, 칸 $n$ 개의 다항분포를 따르고

$$P_n^{\ast} = \frac1n\sum_{i=1}^n M_i\thinspace\delta_{X_i}$$

다.

## 붓스트랩 분포

통계량 $T_n = T(P_n)$ 에 대해 $T_n^{\ast} = T(P_n^{\ast})$ 의 조건부 분포를 **붓스트랩 분포**라 한다. 원래 표본을 고정한 조건부 분포이므로 계산 가능한 양이고, $\sqrt n\thinspace (T_n - T(P))$ 의 분포를 $\sqrt n\thinspace (T_n^{\ast} - T_n)$ 의 분포로 근사한다.

실제 절차는 재표본을 $B$ 번 뽑아 경험 분포로 조건부 분포를 대신하는 것이다.

```javascript
function bootstrapDistribution(sample, statistic, B) {
  const n = sample.length
  const values = []
  for (let b = 0; b < B; b++) {
    const resample = []
    for (let i = 0; i < n; i++) {
      resample.push(sample[randomIndex(n)])
    }
    values.push(statistic(resample))
  }
  return values.sort((a, b) => a - b)
}
```

## 백분위 구간

붓스트랩 분포의 $\alpha/2$ 분위수와 $1-\alpha/2$ 분위수를 양 끝으로 하는 구간을 **백분위 구간**이라 한다. $T_n^{\ast}$ 의 값을 정렬했을 때 $\lceil B\alpha/2\rceil$ 번째와 $\lceil B(1-\alpha/2)\rceil$ 번째 값이다.

$\sqrt n\thinspace (T_n^{\ast}-T_n)$ 의 분위수를 $T_n$ 에 더해 만드는 구간은 기본 구간이고, 통계량을 표준오차 추정치로 나눈 뒤 같은 절차를 밟으면 $t$ 붓스트랩 구간이다.

# 성질

## 표본평균에서의 타당성

**정리.** $E X^2\lt\infty$ 이면 조건부 분포 $\sqrt n\thinspace (\bar X^{\ast}-\bar X)$ 가 거의 확실하게 $N(0,\sigma^2)$ 으로 [약수렴](weak-convergence.md)한다[^1].

증명의 요지. $\sqrt n\thinspace (\bar X^{\ast}-\bar X) = n^{-1/2}\sum_{i=1}^n (M_i-1)X_i$ 이고 다항 횟수 $M_i$ 는 평균 $1$, 분산 $1-1/n$ 을 갖는다. 원래 표본을 고정하면 이 합의 조건부 분산이 표본분산이고, [큰 수의 법칙](law-of-large-numbers.md)이 그것을 $\sigma^2$ 으로 보낸다. Lindeberg 조건을 표본의 네제곱 평균으로 확인한다.

## Donsker 족에서의 타당성

**정리.** 함수족 $\mathcal F$ 가 Donsker 족이면 $\sqrt n\thinspace (P_n^{\ast}-P_n)$ 이 $\ell^\infty(\mathcal F)$ 에서 경험 과정의 극한 $\mathbb G$ 와 같은 [Gauss 과정](gaussian-processes.md)으로 조건부 약수렴한다[^1].

함수 $T$ 가 $P$ 에서 Hadamard 미분가능하면 미분의 선형성으로 통계량 수준의 수렴이 따라온다. 중위수, 분위수, 절단평균, 상관계수가 이 조건을 만족한다.

## 타당성이 깨지는 예

표본 최대값 $T_n=\max_i X_i$ 에서는 붓스트랩 분포가 수렴하지 않는다. $\lbrack 0,\theta\rbrack$ [균등분포](uniform-distribution.md)에서 $n(\theta-T_n)$ 은 [지수분포](exponential-distribution.md)로 수렴하지만, 재표본이 원래 표본의 최대값을 포함할 확률이 $1-(1-1/n)^n\to 1-e^{-1}$ 이므로 조건부 분포가 $0$ 에 양의 질량을 남긴다[^2]. 그 질량이 $n$ 과 함께 사라지지 않아 극한이 지수분포와 다르다.

통계량이 분포의 매끄러운 함수가 아닌 경우가 이런 예다. 재표본 크기를 $m=o(n)$ 으로 줄이면 질량 $1-(1-1/n)^m$ 이 $0$ 으로 가고 수렴이 회복된다. 이것이 $m$ out of $n$ 붓스트랩이고, 복원추출 대신 크기 $m$ 의 부분표본을 쓰는 것이 부분표본 추출이다.

## 구간의 정확도

백분위 구간의 피복확률은 $1-\alpha+O(n^{-1/2})$ 이고, 치우침과 비대칭을 보정한 $\mathrm{BCa}$ 구간과 $t$ 붓스트랩 구간은 $1-\alpha+O(n^{-1})$ 이다[^3]. 보정항은 치우침 모수와 가속 모수 두 개로, 전자는 붓스트랩 분포가 $T_n$ 아래에 두는 비율에서, 후자는 잭나이프 값의 세제곱 합에서 계산한다.

# 활용

## 표준오차

통계량의 분산 공식이 분포의 밀도를 포함하는 경우에 공식 대신 붓스트랩 분산을 쓴다. 표본 중위수의 점근 분산은 $1/(4nf(m)^2)$ 으로 밀도값 $f(m)$ 을 요구하지만, 붓스트랩은 밀도를 추정하지 않는다.

## 신뢰구간

[신뢰구간](confidence-intervals.md)을 피벗량으로 구성하려면 통계량의 분포를 알아야 한다. 백분위 구간은 그 분포를 재표본으로 대신하므로 분포 가정 없이 구간을 준다.

## 예측오차 추정

모형을 재표본으로 적합하고 뽑히지 않은 점에서 오차를 재면 [교차검증](cross-validation.md)과 같은 역할을 한다. 재표본에 한 번도 들어가지 않을 확률이 $(1-1/n)^n\to e^{-1}$ 이므로 평가에 쓰이는 점이 전체의 약 37% 다.

[^1]: A. W. van der Vaart, J. A. Wellner, *Weak Convergence and Empirical Processes*, Springer (1996), §3.6 — 경험 과정의 붓스트랩과 Donsker 족에서의 조건부 수렴.
[^2]: P. J. Bickel, D. A. Freedman, "Some asymptotic theory for the bootstrap", Annals of Statistics 9 (1981), 1196–1217 — 표본 최대값에서 붓스트랩 분포가 극한을 갖지 않는 계산.
[^3]: B. Efron, R. J. Tibshirani, *An Introduction to the Bootstrap*, Chapman and Hall (1993), §14 — 백분위 구간과 $\mathrm{BCa}$ 구간의 피복확률 차수.

# 연관 문서

## 선수지식

- [경험 과정](empirical-process.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #machine_learning
