# 추세 제거 요동 분석

# 개요

**추세 제거 요동 분석(detrended fluctuation analysis, DFA)** 은 시계열을 누적한 곡선을 여러 길이의 토막으로 자르고, 토막마다 직선을 맞춘 뒤 남는 요동의 크기가 토막 길이에 따라 자라는 지수로 장기 의존성을 재는 방법이다. 심장 박동 간격이나 기온 기록처럼 평균 수준이 천천히 바뀌는 자료에서는, [재조정 범위 분석](rescaled-range.md)의 누적 편차가 그 느린 변화 때문에 커져 장기 의존이 없는데도 있는 것처럼 보인다. DFA 는 토막마다 맞춘 직선을 빼서 느린 변화를 걷어 내고, 남은 요동으로 같은 지수를 추정한다.

# 직관

재조정 범위 분석 문서의 여덟 해 유입량 $3,5,4,6,2,4,5,3$ 에서 평균 $4$ 를 빼고 차례로 더하면 누적 곡선 $-1,0,0,2,0,0,1,0$ 이 나온다. 이 곡선을 길이 $4$ 인 토막 두 개로 자른다.

첫 토막의 네 점 $(1,-1),(2,0),(3,0),(4,2)$ 에 최소제곱 직선을 맞추면 기울기 $0.9$, 절편 $-2$ 이고, 직선에서 벗어난 양은 $0.1,0.2,-0.7,0.4$ 다. 둘째 토막 $(5,0),(6,0),(7,1),(8,0)$ 에는 기울기 $0.1$, 절편 $-0.4$ 인 직선이 맞고, 벗어난 양은 $-0.1,-0.2,0.7,-0.4$ 다.

벗어난 양을 제곱해 모두 더하면 $1.4$ 이고, 점 여덟 개로 나눈 제곱근 $\sqrt{0.175}\approx 0.418$ 이 토막 길이 $4$ 에서의 요동 크기다. 토막 안에서 누적 곡선이 한쪽으로 기우는 부분은 직선이 가져가고, 직선으로 설명되지 않는 굴곡만 남는다. 토막 길이를 바꿔 가며 이 값을 구하고 $\log$ 끼리 그린 기울기를 읽는다.

# 정의

## 요동 함수

$x_1,\dots,x_N$ 의 평균을 $\bar x$ 라 하고 누적합 $Y_k=\sum\_{i=1}^k(x_i-\bar x)$ 를 **윤곽(profile)** 이라 한다. 토막 길이 $n$ 에 대해 윤곽을 길이 $n$ 인 겹치지 않는 토막 $N_n=\lfloor N/n\rfloor$ 개로 나누고, 토막 $\nu$ 안에서 최소제곱으로 맞춘 차수 $\ell$ 의 다항식을 $p\_\nu$ 라 한다. 다음을 **요동 함수(fluctuation function)** 라 한다.

$$
F(n)=\sqrt{\frac1{nN_n}\sum\_{\nu=1}^{N_n}\sum\_{k\in\nu}\bigl(Y_k-p\_\nu(k)\bigr)^2}
$$

$\ell=1$ 이면 DFA1, $\ell=2$ 이면 DFA2 라 한다. 직관 절은 $N=8$, $n=4$, $\ell=1$ 인 경우이고 $F(4)\approx 0.418$ 이다.

## DFA 지수

$\log F(n)$ 을 $\log n$ 에 대해 그린 점들에 맞춘 직선의 기울기 $\alpha$ 를 **DFA 지수(DFA exponent)** 라 한다.[^1]

# 성질

## 지수와 Hurst 지수

정상 과정에서 $F(n)$ 은 $n^\alpha$ 에 비례해 자라고, $\alpha$ 는 다음과 같이 해석된다.[^2]

- 독립인 값이면 $\alpha=\tfrac12$ 이다. 윤곽이 확률보행이고 토막 안의 요동이 $\sqrt n$ 규모라서다.
- Hurst 지수 $H$ 인 분수 Gauss 잡음이면 $\alpha=H$ 이다. $\tfrac12\lt\alpha\lt 1$ 이 장기 의존이다.
- 값 자체가 분수 Brown 운동처럼 비정상이면 윤곽이 한 번 더 누적되어 $\alpha=H+1$ 이다. 그래서 $\alpha\gt 1$ 이 나오면 자료가 정상이 아니라고 본다.

## 추세 제거

차수 $\ell$ 의 DFA 는 원래 값 $x_i$ 에 들어 있는 차수 $\ell-1$ 이하의 다항식 추세를 지운다. $x_i$ 의 차수 $\ell-1$ 추세는 누적한 윤곽에서 차수 $\ell$ 이 되고, 토막마다 맞춘 차수 $\ell$ 다항식이 그것을 그대로 가져가기 때문이다.[^2] DFA1 은 평균 수준의 일정한 차이를, DFA2 는 직선 추세까지 지운다.

## 스펙트럼과의 관계

파워 스펙트럼이 낮은 주파수에서 $f^{-\beta}$ 처럼 커지는 정상 과정에서는 $\beta=2\alpha-1$ 이다. 독립인 값은 $\beta=0$ 인 백색 잡음, $\alpha=1$ 은 $1/f$ 잡음에 해당한다.[^2]

## 작은 토막과 큰 토막

$n$ 이 다항식 차수에 비해 너무 작으면 맞춘 다항식이 요동까지 가져가 $F(n)$ 이 작게 나온다. $n$ 이 $N$ 에 가까우면 토막 수가 적어 $F(n)$ 의 흩어짐이 크다. 그래서 보통 $n$ 을 $\ell+2$ 쯤부터 $N/4$ 쯤까지 로그 간격으로 잡는다.[^2]

# 활용

- 유전체 서열. 염기를 퓨린과 피리미딘에 따라 $\pm 1$ 로 바꾼 수열에 처음 쓰였고, 단백질을 만들지 않는 구간이 섞인 서열에서 장기 상관이 보고되었다.[^1]
- 심장 박동 간격. 건강한 사람의 박동 간격은 $\alpha\approx 1$ 근처이고 심부전 환자에서 값이 달라진다는 것이 보고되었다.[^3]
- 기후와 수문. 기온과 강수 기록에서 계절 주기와 장기 추세를 뺀 뒤 $\alpha$ 를 재고, 재조정 범위 분석의 결과와 비교한다.

[^1]: C.-K. Peng, S. V. Buldyrev, S. Havlin, M. Simons, H. E. Stanley, A. L. Goldberger, "Mosaic organization of DNA nucleotides", *Physical Review E* 49 (1994), 1685–1689.
[^2]: J. W. Kantelhardt, E. Koscielny-Bunde, H. H. A. Rego, S. Havlin, A. Bunde, "Detecting long-range correlations with detrended fluctuation analysis", *Physica A* 295 (2001), 441–454.
[^3]: C.-K. Peng, S. Havlin, H. E. Stanley, A. L. Goldberger, "Quantification of scaling exponents and crossover phenomena in nonstationary heartbeat time series", *Chaos* 5 (1995), 82–87.

# 연관 문서

## 선수지식

- [재조정 범위 분석](rescaled-range.md)

## 더 알아보기

아직 연결한 문서가 없다.

#statistics #probability #signal_processing
