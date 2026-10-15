# Markov 연쇄의 혼합시간

# 개요

혼합시간은 [Markov 연쇄](markov-chains.md)의 분포가 정상분포에 가까워지기까지 걸리는 걸음 수다. 가까움은 [전변동거리](total-variation-distance.md)로 재고, 출발점 가운데 가장 나쁜 것을 택한다.

$$
d(t)=\max_x d_{\mathrm{TV}}\big(P^t(x,\cdot),\thinspace\pi\big),\qquad t_{\mathrm{mix}}(\varepsilon)=\min\lbrace t:\ d(t)\le\varepsilon\rbrace
$$

수렴 정리는 $d(t)\to0$ 만 주고 걸음 수는 주지 않는다. 결합과 스펙트럼 간격이 그 수를 재는 두 수단이다.

# 직관

수렴 정리에 따르면 기약이고 비주기적인 연쇄의 분포는 출발점과 무관하게 정상분포로 간다. 그런데 카드 $52$ 장을 몇 번 섞어야 충분한지는 수렴한다는 사실로 답할 수 없다. 걸음 수를 세야 한다.

$n$ 비트 문자열 $\lbrace 0,1\rbrace^n$ 에서 세어 본다. 한 걸음은 좌표 하나를 무작위로 고르고 그 자리를 $0$ 또는 $1$ 로 무작위로 다시 쓰는 것이다. 정상분포는 균등분포다. 출발점이 다른 두 사본 $X_t$ 와 $Y_t$ 를 함께 돌리되, 매 걸음 같은 좌표를 고르고 같은 값을 써 넣는다. 각 사본만 보면 원래 연쇄와 같은 연쇄다.

이렇게 돌리면 한 번 쓰인 좌표에서 두 사본의 값이 같아지고, 그 뒤로도 같은 값만 써 넣으므로 다시 달라지지 않는다. 따라서 모든 좌표가 적어도 한 번 뽑히면 두 사본이 완전히 일치한다. 좌표를 무작위로 고르는 것을 되풀이해 모두 한 번씩 뽑기까지 걸리는 걸음 수가 쿠폰 수집 문제의 답이고, $n\log n$ 규모다.

두 사본이 일치한 뒤에는 어느 사본의 분포도 서로 다르지 않다. 전변동거리가 두 변수가 다를 확률 이하이므로, $t$ 가 $n\log n$ 보다 충분히 크면 $d(t)$ 가 작다. 출발점을 정상분포에서 뽑은 사본으로 두면 같은 계산이 정상분포와의 거리를 준다.

# 정의

## 혼합시간

$$
d(t)=\max_{x\in X}d_{\mathrm{TV}}\big(P^t(x,\cdot),\thinspace\pi\big),\qquad t_{\mathrm{mix}}(\varepsilon)=\min\lbrace t\ge0:\ d(t)\le\varepsilon\rbrace
$$

$\varepsilon=1/4$ 로 둔 $t_{\mathrm{mix}}=t_{\mathrm{mix}}(1/4)$ 를 그냥 **혼합시간**이라 한다.

## 연쇄의 결합

두 연쇄 $(X_t)$, $(Y_t)$ 를 한 확률공간에 올려 각각이 $P$ 를 따르게 만든 것을 **결합**이라 하고, $\tau=\min\lbrace t:\ X_t=Y_t\rbrace$ 를 **만남 시간**이라 한다. $X_\tau=Y_\tau$ 인 뒤에는 두 사본을 함께 움직여 계속 일치하게 둘 수 있다.

# 성질

## 결합에 의한 상한

> **정리.** 임의의 결합에 대해 $d(t)\le\max_{x,y}\Pr\lbrack\tau\gt t\rbrack$ 이고, 여기서 $\Pr$ 은 $X_0=x$, $Y_0=y$ 로 출발한 결합의 확률이다.

전변동거리의 결합 표현에서 $d_{\mathrm{TV}}(P^t(x,\cdot),P^t(y,\cdot))\le\Pr\lbrack X_t\ne Y_t\rbrack\le\Pr\lbrack\tau\gt t\rbrack$ 이고, $y$ 를 정상분포에서 뽑으면 왼쪽이 $d_{\mathrm{TV}}(P^t(x,\cdot),\pi)$ 가 된다. 직관 절의 쿠폰 수집 계산이 이 상한을 쓴 것이다.

## 지수 감쇠

> **정리.** $\bar d(t)=\max_{x,y}d_{\mathrm{TV}}(P^t(x,\cdot),P^t(y,\cdot))$ 는 준곱셈적이다. 곧 $\bar d(s+t)\le\bar d(s)\bar d(t)$ 다.

따라서 $t_{\mathrm{mix}}(\varepsilon)\le\lceil\log_2(1/\varepsilon)\rceil\thinspace t_{\mathrm{mix}}$ 이고, 정확도를 높이는 비용이 로그다. 혼합시간을 $\varepsilon=1/4$ 하나로 정의하는 것이 이 부등식 때문에 손실이 없다.

## 스펙트럼 간격

$\pi$ 에 대해 가역인 유한 연쇄의 고윳값을 $1=\lambda_1\gt\lambda_2\ge\dots\ge\lambda_m\ge-1$ 이라 하고 $\gamma=1-\max_{i\ge2}\vert\lambda_i\vert$ 를 스펙트럼 간격, $t_{\mathrm{rel}}=1/\gamma$ 를 완화시간이라 하면 다음이 성립한다.

$$
(t_{\mathrm{rel}}-1)\log\frac{1}{2\varepsilon}\ \le\ t_{\mathrm{mix}}(\varepsilon)\ \le\ t_{\mathrm{rel}}\log\frac{1}{\varepsilon\thinspace\pi_{\min}}
$$

$\pi_{\min}=\min_x\pi(x)$ 다. 상한은 가역 연쇄를 $L^2(\pi)$ 의 자기수반작용소로 보고 $P^t$ 의 스펙트럼 분해를 쓰면 나오고, 하한은 $\lambda_2$ 의 고유함수를 검정함수로 쓴다. 두 부등식은 $\log(1/\pi_{\min})$ 배 안에서 혼합시간과 완화시간을 묶으므로, [고윳값](eigenvalues.md) 계산으로 혼합시간의 규모를 알 수 있다.

## 예

| 연쇄 | 혼합시간 |
| --- | --- |
| $n$ 비트 문자열의 좌표 갱신 | $\tfrac12 n\log n$ |
| 완전그래프 $K_n$ 위의 걷기 | $O(1)$ |
| 길이 $n$ 순환 위의 걷기 | $\Theta(n^2)$ |
| 카드 $52$ 장의 riffle 섞기 | $\tfrac32\log_2 52$ 규모, 곧 $7$ 번 |

순환 위의 걷기가 느린 것은 좌표가 한 걸음에 $\pm1$ 만 움직여 거리 $n$ 을 지나는 데 $n^2$ 걸음이 필요하기 때문이다. 완전그래프에서는 한 걸음이 정상분포를 거의 그대로 주므로 걸음 수가 상수다.

# 활용

- **MCMC(Markov chain Monte Carlo)의 수렴 판정.** 목표분포를 정상분포로 갖는 연쇄를 돌려 표본을 얻을 때 버려야 하는 초기 구간의 길이가 혼합시간이다. 혼합시간의 상한을 증명하지 못한 연쇄에서는 표본의 품질을 보증할 수 없다.
- **카드 섞기의 횟수.** riffle 섞기를 $\log_2 n$ 의 상수배만큼 되풀이하면 전변동거리가 작아진다는 결과가 카드 $52$ 장에서 $7$ 번이라는 수를 준다.
- **확장그래프.** 스펙트럼 간격이 상수로 떨어져 있는 그래프에서 무작위 걷기의 혼합시간이 $O(\log n)$ 이다. 이 성질이 [무작위 걷기](random-walks.md)를 쓰는 알고리즘의 걸음 수를 정한다.
- **조합적 계산.** 완전정합의 개수나 분할함수를 근사 계산할 때 해당 대상 위의 연쇄를 설계하고 혼합시간을 다항식으로 묶는 것이 근사 알고리즘의 성립 조건이다.

# 연관 문서

## 선수지식

- [Markov 연쇄](markov-chains.md)
- [전변동거리](total-variation-distance.md)
- [결합](coupling.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory #algorithms #linear_algebra
