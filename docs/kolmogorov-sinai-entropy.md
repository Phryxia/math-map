# Kolmogorov–Sinai 엔트로피

# 개요

Kolmogorov–Sinai 엔트로피는 측도보존변환이 한 걸음마다 만들어 내는 정보의 양이다. 유한 가측분할 $\mathcal P$ 를 변환으로 되풀이해 세분한 것의 [Shannon 엔트로피](entropy.md)가 $n$ 에 비례해 자라고, 그 비례상수의 상한이 변환의 엔트로피다.

$$
h(T)=\sup_{\mathcal P}\lim_{n\to\infty}\frac1n H\Big(\bigvee_{k=0}^{n-1}T^{-k}\mathcal P\Big)
$$

엔트로피는 측도론적 동형에 대한 불변량이므로 [혼합](mixing.md)하는 변환들을 서로 구분하는 데 쓴다.

# 직관

혼합성은 집합이 공간 전체에 퍼지는지 아닌지를 가른다. 두 배 사상 $Tx=2x \bmod 1$ 과 세 배 사상 $Sx=3x \bmod 1$ 은 둘 다 강혼합이므로 이 성질로는 갈라지지 않는다. 두 변환을 수로 구분하려면 퍼지는 속도를 재야 한다.

두 배 사상에서 점의 위치를 이진 전개 $x=0.b_1b_2b_3\dots$ 로 적는다. $x$ 를 정확도 $2^{-n}$ 으로 알려면 앞의 $n$ 비트를 알아야 한다. 한 걸음 적용하면 $Tx=0.b_2b_3\dots$ 이므로 자리가 하나 밀리고, 알고 있던 $n$ 비트 가운데 맨 앞이 빠지고 맨 뒤에 모르던 비트가 하나 들어온다. 걸음마다 모르는 비트가 하나씩 늘어나므로 정확도를 유지하려면 걸음마다 $1$ 비트를 새로 받아야 한다.

세 배 사상에서 같은 계산을 삼진 전개로 하면 걸음마다 받아야 하는 양이 $\log_2 3$ 비트다. 걸음당 받아야 하는 정보의 양이 두 변환에서 다르고, 이 양이 변환에 딸린 수다. 자연로그로 재면 두 배 사상이 $\log 2$, 세 배 사상이 $\log 3$ 이다.

# 정의

## 분할의 엔트로피

확률공간 $(X,\mathcal B,\mu)$ 의 유한 가측분할 $\mathcal P=\lbrace P_1,\dots,P_m\rbrace$ 에 대해 다음을 정의한다.

$$
H(\mathcal P)=-\sum_{i=1}^{m}\mu(P_i)\log\mu(P_i)
$$

두 분할 $\mathcal P,\mathcal Q$ 의 **공통세분** $\mathcal P\vee\mathcal Q$ 는 $P_i\cap Q_j$ 들로 이루어진 분할이다.

## 변환의 엔트로피

측도보존변환 $T$ 와 분할 $\mathcal P$ 에 대해

$$
h(T,\mathcal P)=\lim_{n\to\infty}\frac1n H\Big(\bigvee_{k=0}^{n-1}T^{-k}\mathcal P\Big)
$$

이고, $h(T)=\sup_{\mathcal P}h(T,\mathcal P)$ 를 $T$ 의 **엔트로피**라 한다. 극한은 $H$ 의 부분가법성과 Fekete 보조정리로 존재한다.

$\bigvee_{k=0}^{n-1}T^{-k}\mathcal P$ 의 조각은 처음 $n$ 걸음 동안 궤도가 $\mathcal P$ 의 어느 조각에 있었는지를 기록한 것이므로, $H$ 는 길이 $n$ 의 관측 기록이 담는 정보량이다.

# 성질

## Kolmogorov–Sinai 정리

> **정리.** $\mathcal P$ 가 생성분할, 곧 $\bigvee_{k\ge0}T^{-k}\mathcal P$ 가 영집합까지 $\mathcal B$ 를 생성하면 $h(T)=h(T,\mathcal P)$ 다.

정의의 상한을 분할 전체에서 찾지 않고 생성분할 하나에서 끝낼 수 있다. 두 배 사상에서 $\mathcal P=\lbrace\lbrack 0,1/2),\lbrack 1/2,1)\rbrace$ 가 생성분할이고 세분의 조각이 $2^n$ 개의 길이 $2^{-n}$ 구간이므로 $H=n\log 2$ 이고 $h(T)=\log 2$ 다.

## Shannon–McMillan–Breiman 정리

> **정리.** $T$ 가 에르고딕이고 $\mathcal P$ 가 유한분할이면, 거의 모든 $x$ 에서 $x$ 를 담은 세분 조각 $\mathcal P^n(x)$ 의 측도가 다음을 만족한다.

$$
\lim_{n\to\infty}-\frac1n\log\mu\big(\mathcal P^n(x)\big)=h(T,\mathcal P)
$$

측도가 $e^{-nh}$ 정도인 조각이 거의 모든 점을 덮으므로 실제로 나타나는 길이 $n$ 의 기록은 $e^{nh}$ 가지 정도다. [에르고딕 정리](ergodic-theorem.md)가 시간평균에 대해 주는 결론을 기록의 확률에 대해 준 것이다.

## 동형 불변량

엔트로피는 측도론적 동형으로 보존된다. Bernoulli 이동 $B(p_1,\dots,p_m)$ 의 엔트로피는 $-\sum_i p_i\log p_i$ 이므로, $B(1/2,1/2)$ 와 $B(1/3,1/3,1/3)$ 은 동형이 아니다.

> **정리**(Ornstein)**.** 엔트로피가 같은 두 Bernoulli 이동은 측도론적으로 동형이다.[^1]

Bernoulli 이동에서는 엔트로피 하나가 완전 불변량이다. Bernoulli 가 아닌 변환에서는 성립하지 않고, 엔트로피가 같으면서 동형이 아닌 Kolmogorov 자동사상(K 자동사상)이 있다.

## 영 엔트로피

무리수 회전은 $h(T)=0$ 이다. 회전은 거리를 보존하므로 길이 $\ell$ 인 구간들의 분할을 $n$ 번 세분해도 조각의 개수가 $n$ 에 비례해 늘 뿐이고, $H$ 가 $\log n$ 규모라 $n$ 으로 나누면 $0$ 으로 간다. 엔트로피가 $0$ 인 변환은 과거의 관측이 미래를 결정하는 변환이다.

| 변환 | 엔트로피 |
| --- | --- |
| 무리수 회전 | $0$ |
| 두 배 사상 | $\log 2$ |
| Bernoulli 이동 $B(p,1-p)$ | $-p\log p-(1-p)\log(1-p)$ |
| Arnold 고양이 사상 | $\log\frac{3+\sqrt5}{2}$ |
| Gauss 사상 | $\pi^2/(6\log 2)$ |

[^1]: D. S. Ornstein, "Bernoulli shifts with the same entropy are isomorphic", Advances in Math. 4 (1970), 337–352.

# 활용

- **동역학계의 분류.** 엔트로피가 다르면 두 변환이 동형이 아니므로, 분류 문제에서 먼저 계산하는 불변량이다. Bernoulli 이동 안에서는 Ornstein 정리로 분류가 끝난다.
- **정보원의 엔트로피율.** 정상 정보원을 수열 공간 위의 이동변환으로 보면 변환의 엔트로피가 정보원의 엔트로피율과 같다. [무손실 부호화 정리](source-coding.md)의 압축 한계가 이 값이다.
- **Lyapunov 지수.** 매끄러운 변환에서 Pesin 공식은 엔트로피를 양의 Lyapunov 지수의 합으로 준다. 고양이 사상에서 $\log\frac{3+\sqrt5}{2}$ 가 큰 고유값의 로그인 것이 그 사례다.
- **연분수의 부분몫 성장.** Gauss 사상의 엔트로피 $\pi^2/(6\log 2)$ 가 [연분수](continued-fractions.md) 분모의 성장률을 주고, 거의 모든 실수에서 $n$ 번째 분모가 $e^{n\pi^2/(12\log 2)}$ 규모임을 준다.

# 연관 문서

## 선수지식

- [Shannon 엔트로피](entropy.md)
- [혼합성](mixing.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #information_theory #probability
