# 통계 개관

# 개요

통계(statistics)는 관측된 표본에서 그 표본을 만든 분포에 관한 진술을 끌어내는 분야다. 동전을 $100$ 번 던져 앞면이 $62$ 번 나왔을 때, 이 동전의 앞면 확률을 얼마로 볼지, 그 값을 얼마나 믿을지, 공정한 동전이라는 주장을 버려야 하는지가 이 꼴의 물음이다. 앞면 확률마다 결과의 분포를 적은 모형을 세우고, 관측된 $62$ 번이 각 모형에서 얼마나 그럴듯한지 비교해 답한다.

처음 읽는 사람은 [최대가능도 추정](maximum-likelihood.md)에서 시작한다.

# 지도

```mermaid
graph TD
  DV["미분"] --> ML["최대가능도 추정"]
  RV["확률변수"] --> ML
  ML --> EF["지수족"]
  BY["Bayes 정리"] --> BI["Bayes 추론"]
  RV --> BI
  ML --> HT["가설검정"]
  RV --> HT
  CLT["중심극한정리"] --> HT
  HT --> CI["신뢰구간"]
  CLT --> CI
  IP["내적 공간"] --> LR["선형회귀"]
  ML --> LR
  PCA["주성분 분석"] --> PPCA["확률적 PCA"]
  PPCA --> VAE["변분 오토인코더"]
```

# 갈래

처음 읽는 사람은 추정, 검정과 구간의 순서로 읽는다. 그 뒤는 세 방향으로 갈린다. 경험 분포와 재표본은 분포에 모수를 두지 않고 표본분포를 세우고, 회귀와 모형 선택은 설명변수를 둔 모형을 적합하고 비교하며, 잠재변수 모형은 관측되지 않는 변수를 둔 모형을 추정한다. 확률적 기반은 [확률론 개관](probability-overview.md)에, 우도비의 측도론적 정의는 [측도변환](change-of-measure.md)에 있다.

## 추정

먼저 읽을 것: [확률변수](random-variables.md)(확률 개관), [미분](derivative.md)(해석 개관), [Bayes 정리](bayes.md)(확률 개관), [KL divergence](kl-divergence.md)(정보이론 개관). 곁가지인 정보기하는 [내적 공간](inner-product-spaces.md)(선형대수 개관)과 [Riemann 계량](riemannian-metrics.md)(미분기하 개관)을 더 쓴다. 시작 문서: [최대가능도 추정](maximum-likelihood.md).

- [최대가능도 추정](maximum-likelihood.md): 가능도함수를 최대로 하는 모수, 점근 정규성과 Cramér–Rao 하한
- [M-추정량](m-estimators.md): 표본 손실의 합을 최소화하는 추정량, 샌드위치 분산의 점근 정규성, 영향 함수와 Huber 손실의 최소최대 성질
- [지수족](exponential-families.md): 자연모수와 로그분배함수로 적은 분포족, 충분통계량과 켤레 사전분포
- [Fisher 정보](fisher-information.md): 점수함수의 [공분산](covariance.md), 정보 등식과 Cramér–Rao 하한의 유도
  - [정보기하](information-geometry.md): 분포족을 다양체로 보는 Fisher–Rao 계량, 쌍대 접속과 자연 경사법
- [Bayes 추론](bayesian-inference.md): 사전분포에서 사후분포로 가는 갱신, 사후예측분포와 최대사후추정
  - [Dirichlet 분포](dirichlet-distribution.md): 확률 벡터 위의 분포. 다항 관측의 켤레사전분포이고 감마 확률변수의 정규화로 표현된다
  - [Laplace 계승 규칙](rule-of-succession.md): 균등 사전분포 아래 다음 시행의 성공 확률 (s+1)/(n+2). 가산 평활, Krichevsky–Trofimov 추정량, 부호 길이의 후회

## 검정과 구간

먼저 읽을 갈래: 추정. 먼저 읽을 것: [중심극한정리](central-limit-theorem.md), [반복로그 법칙](law-of-iterated-logarithm.md)(확률 개관). 시작 문서: [가설검정](hypothesis-testing.md).

- [카이제곱 분포](chi-squared-distribution.md): 독립 표준정규의 제곱합의 분포, 정규 표본의 표본분산과 Wilks 극한
  - [t 분포](t-distribution.md): 표준정규를 카이제곱의 제곱근으로 나눈 분포, 분산을 모르는 정규 표본의 평균과 두꺼운 꼬리
- [가설검정](hypothesis-testing.md): 귀무가설과 검정통계량, 제1종·제2종 오류, Neyman–Pearson 보조정리
  - [가능도비 검정](likelihood-ratio-test.md): 두 모수 집합 위의 최대 가능도의 비로 세우는 검정, Wilks 정리의 카이제곱 극한
  - [Pearson 카이제곱 검정](pearson-chi-squared-test.md): 범주별 횟수와 기대 횟수의 차이로 세우는 적합도 검정과 독립성 검정, 자유도 계산과 가능도비 통계량과의 점근 동치
  - [거짓 발견률](false-discovery-rate.md): 여러 가설을 함께 검정할 때 기각한 것 가운데 잘못 기각한 것의 비율의 기댓값. Benjamini–Hochberg 절차와 의존하는 p-값
- [신뢰구간](confidence-intervals.md): 피벗량으로 세우는 구간, 피복확률과 검정과의 쌍대성
- [순차확률비 검정](sequential-probability-ratio-test.md): 누적 우도비와 두 문턱, Wald 의 오류율 경계와 기대 표본 수
- [군축차 설계](group-sequential-design.md): 중간분석 시점마다의 경계, 알파 소비 함수로 1 종 오류율을 통제하는 설계
- [신뢰열](confidence-sequences.md): 모든 표본 크기에서 동시에 모수를 포함하는 구간의 열. Ville 부등식과 혼합법, 반복로그 법칙이 주는 폭의 하한
  - [e-값](e-values.md): 귀무가설 아래 기댓값이 1 이하인 음이 아닌 통계량. 곱과 평균으로 합치고, p-값과 보정 함수로 바꾸며, 보편 추론과 e-BH 다중검정에 쓴다

## 경험 분포와 재표본

먼저 읽을 갈래: 추정. 먼저 읽을 것: [VC 차원](vc-dimension.md)(머신러닝 개관). 시작 문서: [Glivenko–Cantelli 정리](glivenko-cantelli.md).

- [Glivenko–Cantelli 정리](glivenko-cantelli.md): 경험 분포함수가 참 분포함수로 균등수렴한다, Kolmogorov–Smirnov 거리와 Dvoretzky–Kiefer–Wolfowitz 부등식
  - [Kolmogorov–Smirnov 검정](kolmogorov-smirnov-test.md): 경험 분포함수와 가설 분포함수의 최대 차이로 세우는 적합도 검정, Kolmogorov 분포의 분위수와 이표본 판본
    - [이차 경험분포함수 통계량](quadratic-edf-statistics.md): 차이의 제곱을 가중 적분한 Cramér–von Mises 와 Anderson–Darling 통계량, Brown 다리의 Karhunen–Loève 전개로 얻는 극한분포
- [경험 과정](empirical-process.md): 함수족을 지표로 갖는 확률과정, Donsker 족과 덮개수, 사슬 묶기와 Dudley 적분
- [붓스트랩](bootstrap.md): 경험 분포에서 다시 표본을 뽑아 분포를 세우는 절차, Donsker 족에서의 타당성과 표본 최대값에서 깨지는 예

## 회귀와 모형 선택

먼저 읽을 갈래: 추정. 먼저 읽을 것: 내적 공간(선형대수 개관). 시작 문서: [선형회귀](linear-regression.md).

- [선형회귀](linear-regression.md): 정규방정식과 사영으로 적은 최소제곱 추정, Gauss–Markov 정리
  - [일반화선형모형](generalized-linear-models.md): 반응분포를 지수족으로 둔 회귀, 정준연결함수와 반복 가중최소제곱
  - [붕괴점](breakdown-point.md): 추정량을 한없이 보내려면 바꿔야 하는 표본의 비율, 평균의 1/n 과 중앙값의 1/2, 이동 동변 추정량의 상한, 회귀 M-추정량의 1/n 과 LMS 와 LTS 의 1/2
- [분위수 회귀](quantile-regression.md): 조건부 분위수를 일차식으로 추정하는 회귀, 확인 함수와 선형계획, 관측값 p 개를 지나는 해, 점근 정규성과 분위수 교차
- [기대 결손](expected-shortfall.md): 손실 분포의 위쪽 꼬리 평균, 위험가치의 부분가법성 실패와 정합 위험 측도, Rockafellar–Uryasev 공식, 유도 가능성
  - [정합 위험 측도](coherent-risk-measures.md): 단조성, 현금 불변성, 양의 동차성, 부분가법성을 만족하는 위험의 기준, 확률측도 집합 위의 최악 기댓값으로 쓰는 표현 정리, 볼록 위험 측도와 볼록 공액, 엔트로피 위험 측도, Kusuoka 표현
- [편향-분산 분해](bias-variance-decomposition.md): 평균제곱오차를 편향의 제곱과 분산으로 가르는 항등식
  - [James–Stein 추정량](james-stein-estimator.md): 세 개 이상의 정규 평균을 함께 줄여 추정하면 모든 모수에서 관측 자체보다 제곱오차가 작다
    - [Ledoit–Wolf 축소 추정](ledoit-wolf-shrinkage.md): 표본공분산을 단위행렬의 배수 쪽으로 줄이는 볼록결합, 자료에서 계산한 최적 비율과 신탁 추정량에 대한 일치성
- [정칙화](regularization.md): 잔차제곱합에 계수의 크기를 재는 벌점을 더하는 추정, 능형회귀와 라소의 축소와 희소성
- [교차검증](cross-validation.md): 적합에 쓰지 않은 조각으로 오차를 재는 절차, 선형 적합에서의 닫힌 꼴
- [정보 기준](information-criteria.md): 로그가능도에 모수 개수의 벌점을 더해 모형을 비교하는 양, 벌점의 크기에서 갈리는 두 기준
- [적정 점수 규칙](proper-scoring-rules.md): 참 분포를 그대로 예측할 때 기대 손실이 가장 작은 손실, 로그 점수와 Brier 점수, 볼록 함수와 Bregman 발산에 의한 표현, 로그 점수의 국소성

## 잠재변수 모형

먼저 읽을 갈래: 추정. 먼저 읽을 것: [주성분 분석](principal-component-analysis.md)(머신러닝 개관). 시작 문서: [기댓값 최대화 알고리즘](em-algorithm.md).

- [기댓값 최대화 알고리즘](em-algorithm.md): 은닉변수 모형에서 가능도를 올리는 두 단계, 증거 하한과 가능도의 단조 증가
- [확률적 PCA](probabilistic-pca.md)(principal component analysis): 저차원 잠재변수를 둔 Gauss 모형, 주성분과의 관계
- [Kalman 필터](kalman-filter.md): 선형 Gauss 상태공간 모형의 순차 추정, Kalman 이득과 정보 형식
- [은닉 Markov 모형](hidden-markov-model.md): 유한 상태 뒤에 숨은 열의 추정, 전향 후향 재귀와 Viterbi 복호

# 연관 문서

## 선수지식

- [집합](sets.md)

## 더 알아보기

- [최대가능도 추정](maximum-likelihood.md)
- [Bayes 추론](bayesian-inference.md)
- [확률적 PCA](probabilistic-pca.md)

#statistics #probability #machine_learning #overview
