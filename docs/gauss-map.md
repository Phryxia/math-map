# Gauss 사상

# 개요

Gauss 사상은 [연분수](continued-fractions.md) 전개의 한 걸음을 주는 변환이다.

$$
T:\lbrack 0,1)\to\lbrack 0,1),\qquad Tx=\frac1x-\Big\lfloor\frac1x\Big\rfloor\quad(x\ne0),\qquad T0=0
$$

$x$ 의 부분몫은 $a_n=\lfloor 1/T^{n-1}x\rfloor$ 이므로 연분수 전개의 통계는 $T$ 의 궤도의 통계다. $T$ 는 Gauss 측도를 보존하고 그에 대해 에르고딕이어서, [에르고딕 정리](ergodic-theorem.md)가 거의 모든 실수의 부분몫 분포를 준다.

# 직관

연분수 전개의 부분몫 $a_1,a_2,\dots$ 는 수마다 다르다. 특정한 수를 고르지 않고 보통의 실수에서 $a_n$ 이 어떤 값을 얼마나 자주 갖는지 물으려면 값마다 그 값을 주는 $x$ 들의 크기를 재야 한다.

첫 부분몫은 쉽다. $a_1=k$ 인 것은 $k\le 1/x\lt k+1$ 과 같으므로 그런 $x$ 전체가 구간 $\lbrack 1/(k+1),\thinspace 1/k)$ 이고 길이가 $\frac{1}{k(k+1)}$ 이다. 그런데 $a_2$ 를 같은 방법으로 세려면 $Tx$ 가 어디에 있는지를 알아야 하고, $T$ 는 길이를 보존하지 않는다. $\lbrack 0,1/2)$ 의 상이 $\lbrack 0,1)$ 전체이므로 길이가 두 배가 된다. 걸음마다 자가 바뀌어서 같은 계산을 되풀이할 수 없다.

막힌 곳이 자가 바뀐다는 것이므로, $T$ 가 보존하는 자를 찾는다. 밀도 $\rho$ 가 보존된다는 것은 $T^{-1}$ 의 가지 $x\mapsto 1/(x+k)$ 들을 모두 합한 것이 제자리로 온다는 뜻이다.

$$
\rho(x)=\sum_{k\ge1}\frac{1}{(x+k)^2}\thinspace\rho\Big(\frac{1}{x+k}\Big)
$$

$\rho(x)=\frac{1}{1+x}$ 를 넣으면 오른쪽이 $\sum_k\big(\frac{1}{x+k}-\frac{1}{x+k+1}\big)$ 이고 망원합이 $\frac{1}{x+1}$ 이라 양쪽이 같다. 이 밀도로 재면 자가 걸음마다 그대로이고, 부분몫의 빈도를 모든 $n$ 에서 한 번에 셀 수 있다.

# 정의

## Gauss 사상과 Gauss 측도

$Tx=1/x-\lfloor 1/x\rfloor$ 를 **Gauss 사상**이라 하고, $\lbrack 0,1)$ 위의 측도

$$
\mu(A)=\frac{1}{\log 2}\int_A\frac{dx}{1+x}
$$

를 **Gauss 측도**라 한다. $\mu(\lbrack 0,1))=1$ 이고 $\mu$ 는 Lebesgue 측도와 서로 절대연속이므로 두 측도의 영집합이 같다.

## 분기

$k\ge1$ 마다 $T$ 를 구간 $I_k=\lbrack 1/(k+1),\thinspace 1/k)$ 에 제한한 것은 $I_k$ 에서 $\lbrack 0,1)$ 로의 전단사이고 역이 $x\mapsto 1/(x+k)$ 다. $x\in I_k$ 인 것과 $a_1(x)=k$ 인 것이 같다.

# 성질

## 측도보존과 에르고딕성

> **정리**(Gauss)**.** $T$ 는 Gauss 측도를 보존한다.

$A\subseteq\lbrack 0,1)$ 의 역상은 $T^{-1}A=\bigcup_k\lbrace 1/(x+k):x\in A\rbrace$ 이고, 각 가지에서 변수변환 $y=1/(x+k)$ 를 하면 직관 절의 망원합이 그대로 $\mu(T^{-1}A)=\mu(A)$ 를 준다.

> **정리**(Knopp)**.** $T$ 는 Gauss 측도에 대해 에르고딕이다.

증명의 요지는 상의 왜곡이 유계라는 것이다. 길이 $n$ 의 부분몫 $(a_1,\dots,a_n)$ 을 고정하면 그 수들로 시작하는 $x$ 전체는 구간 하나이고, 이 구간에 제한한 $T^n$ 의 도함수가 구간 안에서 상수배 안에서 변한다. 따라서 불변집합 $A$ 는 모든 그런 구간에서 같은 비율을 차지하고, 그 구간들이 $\lbrack 0,1)$ 의 가측집합을 근사하므로 $\mu(A)$ 가 $0$ 또는 $1$ 이다.

## Gauss–Kuzmin 분포

> **정리.** 거의 모든 $x$ 에서 부분몫이 $k$ 인 빈도는 다음과 같다.

$$
\lim_{N\to\infty}\frac{\char35{}\lbrace n\le N:\ a_n(x)=k\rbrace}{N}=\log_2\Big(1+\frac{1}{k(k+2)}\Big)
$$

지시함수 $\mathbf 1\_{I_k}$ 에 Birkhoff 정리를 쓰면 빈도가 $\mu(I_k)$ 이고, 이를 계산하면 위 값이다. $k=1$ 에서 약 $0.415$ 이므로 부분몫의 $41$ 퍼센트 가까이가 $1$ 이다.

## Lévy 정리와 Khinchin 상수

> **정리**(Lévy)**.** 거의 모든 $x$ 에서 수렴분모 $q_n$ 이 다음을 만족한다.

$$
\lim_{n\to\infty}\frac1n\log q_n=\frac{\pi^2}{12\log 2}
$$

$\log q_n$ 을 $-\sum_{k\lt n}\log T^kx$ 로 바꾸고 $f(x)=-\log x$ 에 Birkhoff 정리를 쓰면 극한이 $\int f\thinspace d\mu$ 이고, 이 적분이 $\frac{\pi^2}{12\log 2}$ 다. 같은 방법으로 $f=\log a_1$ 을 넣으면 부분몫의 기하평균이 거의 모든 $x$ 에서 같은 상수로 수렴하고, 그 값을 Khinchin 상수라 한다.

부분몫의 산술평균은 수렴하지 않는다. $\int a_1\thinspace d\mu$ 가 $\sum_k k\thinspace\mu(I_k)$ 이고 $\mu(I_k)$ 가 $k^{-2}$ 규모라 발산하므로, $f=a_1$ 은 $L^1(\mu)$ 에 속하지 않아 Birkhoff 정리의 가정을 만족하지 않는다.

# 활용

- **유클리드 알고리즘의 평균 걸음 수.** Lévy 정리는 $q_n$ 이 $e^{cn}$ 규모로 자란다는 것이므로, 거꾸로 크기가 $q$ 인 수의 연분수 길이가 $\frac{12\log 2}{\pi^2}\log q$ 규모다. [유클리드 알고리즘](euclidean-algorithm.md)의 평균 걸음 수가 이 값이다.
- **근사의 질.** $\vert x-p_n/q_n\vert\lt 1/q_n^2$ 이고 $q_n$ 의 성장률이 정해지므로, 거의 모든 실수에서 [Diophantine 근사](diophantine-approximation.md)의 오차가 $e^{-2cn}$ 규모로 줄어든다. 부분몫이 유계인 수는 측도 $0$ 의 집합을 이룬다.
- **엔트로피.** $T$ 의 [Kolmogorov–Sinai 엔트로피](kolmogorov-sinai-entropy.md)는 $\pi^2/(6\log 2)$ 이고, 분할 $\lbrace I_k\rbrace$ 가 생성분할이다. Lévy 정리의 상수가 이 값의 절반인 것은 $q_n$ 이 $T^n$ 의 도함수의 제곱근 규모이기 때문이다.

# 연관 문서

## 선수지식

- [연분수](continued-fractions.md)
- [에르고딕 정리](ergodic-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #measure_theory #analysis
