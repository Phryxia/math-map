# 벡터 자기회귀 모형

# 개요

**벡터 자기회귀 모형(vector autoregression, VAR)** 은 여러 시계열의 오늘 값을 모든 계열의 지난 값들의 일차결합에 잡음을 더한 것으로 놓는 모형이다. 오늘 기온이 평소보다 높으면 내일 전력 수요가 늘듯, 한 계열의 충격이 다른 계열로 번지는 일은 계열마다 따로 맞춘 [자기회귀 모형](autoregressive-models.md)으로는 드러나지 않는다. 벡터 자기회귀 모형은 계수를 행렬로 두어, 충격이 어느 계열에서 어느 계열로 며칠에 걸쳐 전해지는지를 행렬의 거듭제곱으로 계산한다.

# 직관

기온의 평년 대비 편차를 $a\_n$, 전력 수요의 편차를 $b\_n$ 이라 한다. 기온 편차는 어제 기온 편차의 절반을 따르고, 전력 수요 편차는 어제 기온 편차의 $0.4$ 배와 어제 수요 편차의 $0.3$ 배를 따른다.

$$
\begin{pmatrix}a\_n\cr b\_n\end{pmatrix}=\begin{pmatrix}0.5&0\cr 0.4&0.3\end{pmatrix}\begin{pmatrix}a\_{n-1}\cr b\_{n-1}\end{pmatrix}+\begin{pmatrix}\varepsilon\_{1,n}\cr\varepsilon\_{2,n}\end{pmatrix}
$$

0 일째에 기온에만 크기 $1$ 인 충격이 오고 그 뒤로 충격이 없다면, 다음 날부터의 값은 행렬을 거듭 곱해 나온다. 기온 편차는 $1,0.5,0.25,0.125$ 로 줄고, 전력 수요 편차는 $0,0.4,0.32,0.196$ 이다. 수요는 기온 충격 하루 뒤에 가장 크게 반응하고 그 뒤 줄어든다. 행렬의 오른쪽 위가 $0$ 이므로 수요의 충격은 기온으로 번지지 않는다.

# 정의

## VAR(p) 모형

$k$ 차원 벡터 시계열 $x\_n$ 과 $k\times k$ 행렬 $\Phi\_1,\dots,\Phi\_p$ 에 대해 다음 식을 차수 $p$ 의 벡터 자기회귀 모형, VAR($p$) 모형이라 한다.

$$
x\_n=\Phi\_1x\_{n-1}+\cdots+\Phi\_px\_{n-p}+\varepsilon\_n
$$

$\varepsilon\_n$ 은 평균 $0$, 공분산행렬 $\Sigma$ 이고 서로 다른 시각끼리 상관이 없는 벡터 백색잡음이다. 직관 절은 $k=2$, $p=1$ 이다.

## 충격 반응

$\Phi\_1=\Phi$ 인 VAR($1$) 에서 행렬 $\Phi^h$ 의 $(i,j)$ 성분을 계열 $j$ 의 충격에 대한 계열 $i$ 의 $h$ 걸음 **충격 반응(impulse response)** 이라 한다. 직관 절의 수요 편차 $0.4,0.32,0.196$ 이 $\Phi,\Phi^2,\Phi^3$ 의 $(2,1)$ 성분이다.

## Granger 인과

계열 $j$ 의 지난 값을 빼도 계열 $i$ 의 한 걸음 예측오차가 줄지 않으면 계열 $j$ 가 계열 $i$ 를 **Granger 인과하지 않는다(does not Granger-cause)** 고 한다.[^1] VAR($p$) 에서는 모든 $\Phi\_l$ 의 $(i,j)$ 성분이 $0$ 인 것과 같다. 직관 절에서 기온은 수요를 Granger 인과하고 수요는 기온을 Granger 인과하지 않는다.

# 성질

## 정상성 조건

VAR($1$) 은 $\Phi$ 의 고윳값이 모두 단위원 안에 있으면 약정상 해가 하나뿐이고, 해는 $x\_n=\sum\_{h\ge 0}\Phi^h\varepsilon\_{n-h}$ 다. VAR($p$) 는 지난 $p$ 개를 쌓은 $kp$ 차원 벡터로 VAR($1$) 로 바꾸어 같은 조건을 쓴다. 이것은 $\det(I-\Phi\_1z-\cdots-\Phi\_pz^p)$ 의 근이 모두 단위원 밖에 있다는 조건과 같다.[^2] 직관 절의 $\Phi$ 는 삼각행렬이라 고윳값이 $0.5$ 와 $0.3$ 이다.

## 공분산

VAR($1$) 의 공분산 $\Gamma(0)=\mathrm{Cov}(x\_n)$ 은 다음 [Stein 방정식](stein-equation.md)의 해다.

$$
\Gamma(0)=\Phi\thinspace\Gamma(0)\thinspace\Phi^{\mathsf T}+\Sigma
$$

시차 $h$ 의 공분산은 $\Gamma(h)=\Phi^h\Gamma(0)$ 이다. VAR($p$) 에서는 다변량 Yule–Walker 방정식 $\Gamma(h)=\sum\_l\Phi\_l\Gamma(h-l)$($h\ge 1$)이 성립한다.

## 추정

각 방정식의 오른쪽 변수가 모두 같으므로, 계열마다 따로 최소제곱 회귀를 해도 잡음이 Gauss 일 때의 최대가능도 추정과 같다.[^2] 모수는 $k^2p$ 개라서 계열 수가 늘면 빠르게 많아지고, 차수는 [정보 기준](information-criteria.md)으로 고른다.

# 활용

- 거시경제. Sims 는 금리, 물가, 생산을 함께 VAR 로 맞추어 정책 충격의 반응을 경제 이론의 제약 없이 측정했다.[^3]
- Granger 인과 검정. 해당 계수들이 모두 $0$ 이라는 가설을 F 검정으로 확인한다.
- 예측. 여러 계열을 함께 예측하고, 한 계열의 새 값이 다른 계열의 예측을 고친다.
- 신경과학. 뇌 영역별 신호를 VAR 로 맞추고 Granger 인과로 영역 사이의 영향 방향을 어림한다.

[^1]: C. W. J. Granger, "Investigating causal relations by econometric models and cross-spectral methods", *Econometrica* 37 (1969), 424–438.

[^2]: H. Lütkepohl, *New Introduction to Multiple Time Series Analysis*, Springer (2005), 2 장과 3 장.

[^3]: C. A. Sims, "Macroeconomics and reality", *Econometrica* 48 (1980), 1–48.

# 연관 문서

## 선수지식

- [자기회귀 모형](autoregressive-models.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #linear_algebra #probability
