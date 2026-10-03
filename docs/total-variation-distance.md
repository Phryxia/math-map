# 전변동거리

# 개요

전변동거리(total variation distance)는 두 확률측도가 같은 사건에 주는 확률의 차 가운데 가장 큰 것이다.

$$
d_{\mathrm{TV}}(\mu,\nu)=\sup_{A\in\mathcal B}\vert\mu(A)-\nu(A)\vert
$$

밀도로는 차의 $L^1$ 노름의 절반이고, 결합으로는 두 변수를 다르게 만들 확률의 최솟값이다. 세 표현이 같은 값을 주므로 쓰는 자리에 따라 골라 쓴다.

# 직관

앞면 확률이 $1/2$ 인 동전과 $0.6$ 인 동전이 있다. 하나를 받아 여러 번 던져 어느 동전인지 맞히려 한다. 한 번만 던질 수 있다면 성공 확률이 얼마인가. 두 분포가 얼마나 다른지를 이 성공 확률로 재려면 확률의 차가 가장 큰 사건을 찾아야 한다.

사건이 넷뿐이다. 공집합과 전체에서는 차가 $0$ 이고, 앞면에서는 $0.1$, 뒷면에서는 $0.1$ 이다. 가장 큰 차가 $0.1$ 이므로 앞면이 나오면 $0.6$ 동전이라고 답하는 규칙의 성공 확률이 $0.5+0.1/2=0.55$ 다. 일반적으로 차가 가장 큰 사건은 한쪽 밀도가 다른 쪽보다 큰 자리를 모두 모은 것이다.

$$
A^\ast=\lbrace x:\ p(x)\gt q(x)\rbrace,\qquad \mu(A^\ast)-\nu(A^\ast)=\sum_{p\gt q}\big(p(x)-q(x)\big)
$$

두 밀도의 합이 각각 $1$ 이므로 $p\gt q$ 인 자리의 초과분과 $p\lt q$ 인 자리의 부족분이 같다. 따라서 위 값이 $\frac12\sum_x\vert p(x)-q(x)\vert$ 이고, 동전 예에서 $\frac12(0.1+0.1)=0.1$ 이다.

같은 양을 다른 방향에서 재려면 두 분포를 한 확률공간에 올려 가능한 한 같게 만든다. $\min(p,q)$ 만큼은 두 변수가 같은 값을 갖게 할 수 있고 남는 부분만 다르게 되므로, 다를 확률의 최솟값이 $1-\sum_x\min(p(x),q(x))$ 다. 이 값도 $\frac12\sum\vert p-q\vert$ 와 같다.

# 정의

## 전변동거리

$(X,\mathcal B)$ 위의 확률측도 $\mu,\nu$ 에 대해

$$
d_{\mathrm{TV}}(\mu,\nu)=\sup_{A\in\mathcal B}\vert\mu(A)-\nu(A)\vert
$$

를 **전변동거리**라 한다. 공통 지배측도 $\lambda$ 를 잡고 [Radon–Nikodym 도함수](radon-nikodym.md) $p=d\mu/d\lambda$, $q=d\nu/d\lambda$ 를 쓰면 다음이 성립한다.

$$
d_{\mathrm{TV}}(\mu,\nu)=\frac12\int_X\vert p-q\vert\thinspace d\lambda
$$

## 결합

$X\times X$ 위의 확률측도 $\pi$ 의 두 주변분포가 각각 $\mu,\nu$ 이면 $\pi$ 를 $\mu$ 와 $\nu$ 의 **결합**이라 한다. 결합은 [최적 수송](optimal-transport.md)의 수송계획과 같은 대상이다.

# 성질

## 세 표현의 동치

> **정리.** $d_{\mathrm{TV}}(\mu,\nu)=\frac12\Vert p-q\Vert\_1=\min\_\pi\thinspace\Pr\lbrack X\ne Y\rbrack$ 이고, 오른쪽의 최솟값은 결합 $\pi$ 전체에서 달성된다.

첫 등식은 직관 절의 계산이고 상한이 $A^\ast$ 에서 달성된다. 둘째 등식의 한 방향은 임의의 결합에서

$$
\vert\mu(A)-\nu(A)\vert=\vert\Pr\lbrack X\in A\rbrack-\Pr\lbrack Y\in A\rbrack\vert\le\Pr\lbrack X\ne Y\rbrack
$$

이기 때문이다. 다른 방향은 $\min(p,q)$ 를 대각선에 몰아 놓고 남은 질량을 초과분과 부족분 사이에 임의로 잇는 결합을 만들면 $\Pr\lbrack X\ne Y\rbrack$ 이 정확히 전변동거리가 된다.

## 거리의 성질

$0\le d_{\mathrm{TV}}\le1$ 이고 삼각부등식이 성립한다. 가측사상 $f$ 에 대해

$$
d_{\mathrm{TV}}(f\_\ast\mu,\thinspace f\_\ast\nu)\le d_{\mathrm{TV}}(\mu,\nu)
$$

가 성립한다. 상측도의 사건이 원래 공간의 사건 가운데 $f$ 로 정해지는 것들만 보므로 상한이 줄어든다.

## 검정의 최적 오류

> **정리**(Le Cam)**.** $\mu$ 와 $\nu$ 를 구분하는 [가설검정](hypothesis-testing.md)에서 제1종 오류와 제2종 오류의 합의 하한은 $1-d_{\mathrm{TV}}(\mu,\nu)$ 다.

판별규칙은 가측집합 $A$ 하나이고 오류의 합이 $1-(\mu(A)-\nu(A))$ 이므로, $A^\ast$ 에서 최소가 된다. 전변동거리가 작은 두 분포는 표본 하나로 구분할 수 없다.

## Pinsker 부등식

> **정리.** $d_{\mathrm{TV}}(\mu,\nu)\le\sqrt{\tfrac12\mathrm{KL}(\mu\Vert\nu)}$ 다.

[KL divergence](kl-divergence.md)(Kullback–Leibler divergence)는 계산이 쉬운 대신 거리가 아니고 유계가 아니다. 이 부등식이 KL 상한을 전변동거리 상한으로 바꿔 주므로, 분포 근사의 오차를 KL 로 계산하고 결론을 확률의 차로 진술할 수 있다.

## 곱측도

$$
d_{\mathrm{TV}}(\mu^{\otimes n},\nu^{\otimes n})\le n\thinspace d_{\mathrm{TV}}(\mu,\nu)
$$

좌변은 $n$ 개의 독립 표본으로 두 분포를 구분하는 문제의 난이도다. 결합 표현에서 각 좌표를 최대 결합으로 잇고 하나라도 다를 확률을 더하면 나온다.

# 활용

- **Markov 연쇄의 혼합시간.** [Markov 연쇄](markov-chains.md)의 $t$ 걸음 분포와 정상분포의 전변동거리가 $\varepsilon$ 아래로 떨어지는 가장 작은 $t$ 를 혼합시간이라 한다. 결합 표현이 그 상한을 주는 표준 수단이고, 두 사본을 함께 돌려 만날 때까지의 시간을 재면 된다.
- **Poisson 근사.** 독립이 약한 지시함수들의 합을 Poisson 분포로 바꿀 때 오차를 전변동거리로 재고, Chen–Stein 방법이 그 상한을 공분산의 합으로 준다.
- **추정 하한.** 두 모수에서의 분포가 전변동거리로 가까우면 어느 추정량도 둘을 구분하지 못한다. 모수 공간에서 그런 두 점을 찾는 것이 추정 오차의 하한을 증명하는 두 점 방법이다.
- **비용이 지시함수인 최적 수송.** 비용을 $x\ne y$ 에서 $1$, 같은 자리에서 $0$ 으로 두면 최적 수송비용이 전변동거리다. 비용이 거리인 Wasserstein 거리와 달리 점이 얼마나 멀리 옮겨지는지를 보지 않는다.

# 연관 문서

## 선수지식

- [Radon–Nikodym 정리](radon-nikodym.md)
- [최적 수송](optimal-transport.md)

## 더 알아보기

- [Markov 연쇄의 혼합시간](mixing-time.md)

#probability #measure_theory #statistics #information_theory
