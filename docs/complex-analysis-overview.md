# 복소해석 개관

# 개요

복소해석(complex analysis)은 복소수를 받아 복소수를 내는 함수 가운데 미분가능한 것을 다루는 분야다. [실수](real-numbers.md) 적분 $\int_{-\infty}^{\infty}\frac{dx}{1+x^4}$ 를 원시함수로 구하면 로그와 역탄젠트가 섞인 긴 식을 거쳐야 한다. 적분 경로를 복소평면의 닫힌 곡선으로 바꾸면 적분값이 함숫값이 무한대로 가는 몇 개의 점에서 정해지는 수만으로 계산되어, 이런 적분이 대수 계산으로 풀린다.

처음 읽는 사람은 [복소수](complex-numbers.md)에서 시작한다.

# 지도

```mermaid
graph TD
  CN["복소수"] --> HF["정칙함수"]
  DV["미분"] --> HF
  FC["미적분학의 기본 정리"] --> HF
  PS["멱급수"] --> RT["유수 정리"]
  HF --> RT
  HF --> HM["조화함수"]
  PS --> AC["해석적 연속"]
  HF --> AC
  HF --> CM["등각사상"]
  HF --> WF["Weierstrass 인수분해 정리"]
  WF --> PC["Picard 정리"]
  RT --> PC
  CM --> RS["Riemann 곡면"]
  RS --> MC["모듈러 곡선"]
  RS --> TS["Teichmüller 공간"]
  RT --> EF["타원함수"]
  RT --> GF["감마 함수"]
  AC --> GF
  AC --> RZ["Riemann zeta 함수"]
  RZ --> PNT["소수 정리"]
  RT --> PNT
  PNT --> DL["Dirichlet L 함수"]
  HF --> MF["모듈러 형식"]
  HF --> RR["Riemann–Roch 정리"]
  HF --> KM["Kähler 다양체"]
```

# 갈래

처음 읽는 사람은 정칙함수와 조화함수, 급수와 특이점, 영점과 값 분포의 순서로 읽는다. 그 뒤는 두 방향으로 갈린다. 확장과 사상은 정의역을 넓히거나 영역을 바꿔치는 쪽이고 복소역학이 그 뒤에 온다. 해석적 수론은 급수와 특이점만 읽고도 들어갈 수 있다. 나머지 해석적 정수론 문서는 [정수론 개관](number-theory-overview.md)에 있다.

## 정칙함수와 조화함수

먼저 읽을 것: [미분](derivative.md)(해석 개관). 시작 문서: [복소수](complex-numbers.md).

- [복소수](complex-numbers.md): $i^2=-1$ 로 정한 실수 쌍의 체, 극형식과 Euler 공식, 거듭제곱근
- [정칙함수](holomorphic-functions.md): Cauchy–Riemann 방정식, Goursat 논법, 적분 공식, Liouville 정리, 대수학의 기본정리
- [조화함수](harmonic-functions.md): Laplace 방정식과 조화 켤레, 평균값 성질, 최대 원리, Poisson 적분 공식, Harnack 부등식
  - [Dirichlet 문제](dirichlet-problem.md): 경계값을 갖는 조화함수의 존재, Perron 구성과 장벽

## 급수와 특이점

먼저 읽을 갈래: 정칙함수와 조화함수. 시작 문서: [멱급수](power-series.md).

- [멱급수](power-series.md): 수렴반지름, 항별 미분, 해석함수
- [유수 정리](residue-theorem.md): 고립 특이점의 분류, 유수 계산, 실적분으로의 응용
- [해석적 연속](analytic-continuation.md): 함수 요소와 경로를 따른 연속, 항등정리와 유일성, 단일가치 정리, 자연 경계
  - [타원함수](elliptic-functions.md): 이중주기 유리형함수, Weierstrass 페 함수와 그 미분방정식, 복소 원환면

## 영점과 값 분포

먼저 읽을 갈래: 급수와 특이점. 먼저 읽을 것: [Arzelà–Ascoli 정리](arzela-ascoli.md)(함수해석 개관). 시작 문서: [Weierstrass 인수분해 정리](weierstrass-factorization.md).

- [Weierstrass 인수분해 정리](weierstrass-factorization.md): 기본 인수와 무한곱, 지정한 영점을 갖는 전해석함수, 위수와 Hadamard 인수분해
  - [Picard 정리](picard-theorems.md): Casorati–Weierstrass 정리, 두 값을 피할 수 없다는 작은 Picard 와 큰 Picard
- [Hurwitz 정리](hurwitz-theorem.md): 국소 균등수렴에서 영점 개수의 보존, 영점 없음과 단사성의 보존, Rouché 정리와의 관계
- [Montel 정리](montel-theorem.md): 국소 유계인 정칙함수족의 정규성, 두 값을 생략하는 족

## 확장과 사상

먼저 읽을 갈래: 영점과 값 분포. 먼저 읽을 것: [덮개공간](covering-spaces.md)(위상 개관). 시작 문서: [등각사상](conformal-mapping.md).

- [등각사상](conformal-mapping.md): Möbius 변환, Schwarz 보조정리, 원판의 자기동형군
- [Riemann 사상정리](riemann-mapping-theorem.md): 단순연결 영역과 원판의 등각동치, 극값 문제로 가는 증명과 Carathéodory 경계 확장
- [Riemann 곡면](riemann-surfaces.md): 다가함수를 단일가치로 만드는 곡면, 구면과 평면과 원판의 삼분법
  - [Riemann–Hurwitz 공식](riemann-hurwitz-formula.md): 정칙사상의 차수와 분기지수로 두 곡면의 종수를 잇는 등식, 초타원곡선과 Fermat 곡선의 종수, 자기동형군의 84(g−1) 상계
  - [초타원곡선](hyperelliptic-curves.md): y² = f(x) 로 쓰이는 곡선, 초타원 대합과 정칙 미분의 기저, 종수 2 곡선이 전부 초타원이라는 것
  - [Klein 사차곡선](klein-quartic.md): 자기동형군 PSL₂(F₇) 로 Hurwitz 상계 84(g−1) 의 등호를 이루는 종수 3 곡선, 모듈러 곡선 X(7)
- [준등각 사상](quasiconformal-maps.md): 왜곡을 유계로 묶은 동형사상, Beltrami 방정식과 가측 Riemann 사상 정리
  - [Teichmüller 정리](teichmuller-theorem.md): 팽창률이 최소인 준등각 사상의 존재와 유일성, 정칙 이차미분으로 쓴 Beltrami 계수와 Teichmüller 공간의 좌표
  - [Riemann–Roch 정리](riemann-roch.md): 곡면 위 유리형함수 공간의 차원
  - [Jacobi 다양체](jacobian-variety.md): 주기 격자로 나눈 복소 토러스, Abel 정리가 주는 주 divisor 판정
  - [Kähler 다양체](kahler-manifolds.md): 조화형식으로 읽는 코호몰로지
  - [곡선의 모듈라이 공간](moduli-of-curves.md): 종수 $g$ 곡선의 동형류가 이루는 차원 $3g-3$ 의 공간, 안정곡선을 더한 Deligne–Mumford 콤팩트화와 Torelli 사상

## 복소역학

먼저 읽을 갈래: 확장과 사상. 시작 문서: [Julia 집합](julia-set.md).

- [Julia 집합](julia-set.md): 반복합성이 초기값에 민감한 점의 집합, Fatou 집합과의 분할, 반복 전사성
- [Fatou 성분의 분류](fatou-components.md): 성분이 모두 최종 주기적이라는 Sullivan 정리와 주기 성분의 네 유형
  - [Siegel 선형화 정리](siegel-linearization.md): 무리 회전수 중립 고정점이 회전과 공액이 되는 Diophantine 조건, Siegel 원판의 존재
- [Mandelbrot 집합](mandelbrot-set.md): 임계점 궤도가 유계인 매개변수, 연결성 이분법과 쌍곡 성분

## 해석적 수론

먼저 읽을 갈래: 급수와 특이점. 먼저 읽을 것: [소수](primes.md)(정수론 개관). 시작 문서: [Riemann zeta 함수](riemann-zeta.md).

- [Riemann zeta 함수](riemann-zeta.md): Euler 곱, 함수방정식, 임계띠의 영점
  - [감마 함수](gamma-function.md): 함수방정식을 거꾸로 읽어 얻는 유리형 확장과 점근전개
- [소수 정리](prime-number-theorem.md): 직선 $\mathrm{Re}\thinspace s=1$ 위의 비영점성이 주는 소수 계수 함수의 점근
- [Dirichlet L 함수](dirichlet-l-functions.md): 등차수열의 소수 정리
  - [모듈러 형식](modular-forms.md): 상반평면 위의 변환 규칙을 가진 정칙함수

# 연관 문서

## 선수지식

- [집합](sets.md)

## 더 알아보기

- [복소수](complex-numbers.md)

#complex_analysis #analysis #number_theory #overview
