# 혼합성

# 개요

**혼합성(mixing)** 은 변환을 되풀이할 때 한 집합이 공간 전체에 고르게 흩어지는 성질이다. 구간 $\lbrack 0,1)$ 에서 $x$ 를 $2x$ 의 소수부로 보내면, 미리 정한 구간 $\lbrack 0,1/2)$ 로 들어갈 점들은 몇 걸음 전으로 거슬러 올라갈수록 짧은 구간 여럿으로 쪼개져 $\lbrack 0,1)$ 전체에 고르게 퍼진다. 혼합성은 $n$ 걸음 뒤 한 집합에 들어갈 점들이 다른 집합과 겹치는 양이 두 집합 크기의 곱으로 가는지로 이 흩어짐을 판정한다.

# 직관

[에르고딕 정리](ergodic-theorem.md)는 한 점의 궤도에서 재는 시간평균이 공간평균과 같다고 한다. [무리수](irrational-numbers.md) 회전 $Tx=x+\alpha \bmod 1$ 이 그 예였다. 그런데 이 변환이 집합을 어떻게 옮기는지 보면 구간이 모양 그대로 밀려가기만 한다. 궤도의 평균은 맞는데 집합 자체는 퍼지지 않는다. 이 차이를 재려면 $A$ 가 $n$ 걸음 뒤의 $B$ 와 얼마나 겹치는지를 보면 된다.

$A=B=\lbrack 0,1/2)$ 로 두고 무리수 회전에서 겹침을 계산한다. $T^{-n}B=\lbrack -n\alpha,\thinspace 1/2-n\alpha)$ 는 길이 $1/2$ 인 구간 하나이므로 $A$ 와의 겹침은 두 구간이 얼마나 어긋났는지로 정해진다.

$$
\mu(A\cap T^{-n}B)=\tfrac12-\min\lbrace \lbrace n\alpha\rbrace,\thinspace 1-\lbrace n\alpha\rbrace\rbrace
$$

$\lbrace n\alpha\rbrace$ 는 소수부이고 $\lbrack 0,1)$ 에서 조밀하므로 이 값은 $0$ 과 $1/2$ 사이를 끝없이 오가며 어느 수로도 수렴하지 않는다. 평균을 내면 $\mu(A)\mu(B)=1/4$ 가 되지만 각 $n$ 에서는 $1/4$ 근처에 머물지 않는다.

같은 계산을 두 배 사상 $Tx=2x \bmod 1$ 에서 한다. $T^{-n}B$ 는 길이 $2^{-n-1}$ 인 구간 $2^n$ 개가 간격 $2^{-n}$ 으로 흩어진 집합이므로, $n\ge1$ 이면 어느 구간에서 보아도 그 구간의 절반을 차지한다. 따라서 겹침이 정확히 $\mu(A)\mu(B)=1/4$ 다. 구간 하나가 공간 전체에 고르게 흩어졌으므로 각 $n$ 에서 수렴이 성립한다. 이 조건을 혼합성이라 한다.

# 정의

## 강혼합

확률공간 $(X,\mathcal B,\mu)$ 의 측도보존변환(measure-preserving transformation) $T$ 가 모든 $A,B\in\mathcal B$ 에서

$$
\lim_{n\to\infty}\mu(A\cap T^{-n}B)=\mu(A)\mu(B)
$$

를 만족하면 **강혼합(strong mixing)** 이라 한다. 직관 절의 두 배 사상에서 $A=B=\lbrack 0,1/2)$ 이면 $n\ge 1$ 마다 겹침이 $1/4=\mu(A)\mu(B)$ 이고, 무리수 회전에서는 겹침이 $0$ 과 $1/2$ 사이를 오가므로 극한이 없다.

## 약혼합

$T$ 가 모든 $A,B\in\mathcal B$ 에서

$$
\lim_{N\to\infty}\frac1N\sum_{n=0}^{N-1}\big\vert\mu(A\cap T^{-n}B)-\mu(A)\mu(B)\big\vert=0
$$

을 만족하면 **약혼합(weak mixing)** 이라 한다. 여기서 $\frac1N\sum\_{n\lt N}$ 꼴의 평균을 Cesàro 평균(Cesàro mean)이라 한다. 무리수 회전에서 $m\_n=\min\lbrace \lbrace n\alpha\rbrace,1-\lbrace n\alpha\rbrace\rbrace$ 는 $\lbrack 0,1/2\rbrack$ 에 고르게 분포하므로, $\vert\mu(A\cap T^{-n}B)-1/4\vert=\vert 1/4-m\_n\vert$ 의 평균은 $1/8$ 로 가고 약혼합 조건이 깨진다. 절댓값을 떼면 에르고딕성(ergodicity)과 동치인 조건이 되고, 무리수 회전에서 그 평균은 $0$ 으로 간다. 세 성질은 같은 양을 각 $n$ 에서, 절댓값의 평균에서, 평균에서 재는 것으로 갈린다.

| 성질 | μ(A∩T⁻ⁿB)-μ(A)μ(B) 에 대한 조건 |
| --- | --- |
| 강혼합 | 각 $n$ 에서 $0$ 으로 수렴 |
| 약혼합 | 절댓값의 Cesàro 평균이 $0$ |
| 에르고딕 | Cesàro 평균이 $0$ |

# 성질

## 세 성질의 위계

강혼합이면 약혼합이고, 약혼합이면 에르고딕이다. 두 함의의 역은 성립하지 않는다.

수렴하는 수열의 Cesàro 평균은 같은 값으로 수렴하므로 첫 함의가 나온다. 평균의 절댓값은 절댓값의 평균 이하이므로 둘째 함의가 나온다.

무리수 회전은 에르고딕이지만 약혼합이 아니다. 직관 절의 겹침이 $0$ 과 $1/2$ 를 오가므로 절댓값의 평균이 $0$ 으로 가지 않는다. 약혼합이면서 강혼합이 아닌 변환으로 Chacón 변환(Chacón transformation)이 있고, 구간을 자르고 쌓는(cutting and stacking) 구성으로 만든다.[^1]

## 스펙트럼 판정

$Uf=f\circ T$ 라 하면 $T$ 가 약혼합인 것은 $U$ 의 고유값이 $1$ 하나뿐이고 그 고유공간이 상수함수뿐인 것과 동치다.

고유함수가 있으면 혼합이 깨진다. $Uf=\lambda f$ 이고 $f$ 가 상수가 아니면 $\vert\lambda\vert=1$ 이고 $\int f\thinspace d\mu=0$ 으로 정규화할 수 있는데, 이때

$$
\int f\cdot\overline{U^nf}\thinspace d\mu=\bar\lambda^n\Vert f\Vert\_2^2
$$

의 절댓값이 $n$ 과 무관하게 $\Vert f\Vert\_2^2$ 이므로 상관이 줄지 않는다. 무리수 회전에서 $f(x)=e^{2\pi ix}$ 가 고유값 $e^{2\pi i\alpha}$ 의 고유함수이므로 무리수 회전은 약혼합이 아니다.

## 상관함수의 감쇠

$T$ 가 강혼합인 것은 모든 $f,g\in L^2(\mu)$ 에서 다음이 성립하는 것과 동치다.

$$
\int_X f\cdot(g\circ T^n)\thinspace d\mu\ \longrightarrow\ \int_X f\thinspace d\mu\int_X g\thinspace d\mu
$$

지시함수에서 정의가 그대로 이 식이고, 지시함수의 유한선형결합이 $L^2$ 에서 조밀하며 $g\mapsto g\circ T^n$ 이 등거리이므로 일반 $f,g$ 로 넘어간다. 왼쪽을 상관함수(correlation function)라 하고, 혼합의 속도는 이 수렴의 속도로 재는 것이 보통이다.

## 혼합하는 변환의 예

- Bernoulli 이동(Bernoulli shift). 독립 동일분포 열의 공간에서 좌표를 한 칸 미는 변환은 강혼합이다. $A$ 와 $T^{-n}B$ 가 충분히 큰 $n$ 에서 서로 다른 좌표만 보므로 독립이다.
- 두 배 사상. $Tx=2x \bmod 1$ 은 이진 전개에서 자리를 한 칸 미는 것이라 공정한 동전열의 Bernoulli 이동과 같고, 따라서 강혼합이다.
- Arnold 고양이 사상(Arnold's cat map). $\mathbb T^2$ 에서 $T(x,y)=(2x+y,\thinspace x+y)$ 는 Lebesgue 측도를 보존하고 강혼합이다. $f$ 의 [Fourier 계수](fourier-series.md)가 $n$ 걸음 뒤 $(A^{\mathsf T})^n$ 으로 밀려 나가고 [행렬](matrices.md)의 고유값 절댓값이 $1$ 이 아니므로, $0$ 이 아닌 격자점의 상이 무한히 멀어져 상관이 사라진다.

# 활용

- 상관의 감쇠와 극한정리. 강혼합의 속도가 충분히 빠르면 $f\circ T^n$ 의 합에 [중심극한정리](central-limit-theorem.md)가 성립한다. 독립성 대신 상관의 감쇠가 분산의 합을 통제한다.
- 준주기 운동(quasi-periodic motion)과의 구분. 무리수 회전과 그 고차원 판본인 토러스 평행이동은 에르고딕이지만 혼합이 아니므로, 회전수로 정해지는 준주기 운동과 혼합하는 운동이 스펙트럼 판정으로 갈린다.
- 난수 생성. 두 배 사상의 이진 전개 이동은 초기값의 아래쪽 비트를 위로 올리므로, 유한 정밀도에서 되풀이하면 초기값 정보가 사라진다. 혼합의 속도가 이 손실의 속도다.

[^1]: R. V. Chacón, "Weakly mixing transformations which are not strongly mixing", Proc. Amer. Math. Soc. 22 (1969), 559–562.

# 연관 문서

## 선수지식

- [에르고딕 정리](ergodic-theorem.md)

## 더 알아보기

- [Kolmogorov–Sinai 엔트로피](kolmogorov-sinai-entropy.md)
- [Furstenberg 다중 되돌이 정리](furstenberg-multiple-recurrence.md)

#measure_theory #probability #analysis
