# Feller 과정

# 개요

**Feller 과정(Feller process)** 은 시간이 연속인 Markov 과정 가운데, 시간 $t$ 뒤의 기댓값을 주는 작용소들이 연속함수의 공간 위에서 강연속 반군을 이루는 과정이다. 이산 시간의 [Markov 연쇄](markov-chains.md)는 전이행렬 하나를 거듭제곱해 모든 시점의 분포를 얻지만, 손님이 무작위로 들어오는 가게의 손님 수처럼 시간이 연속이면 모든 $t$ 마다 전이확률이 따로 있어 행렬 하나로 적을 수 없다. Feller 과정은 이 전이 작용소들의 $t=0$ 에서의 미분, 곧 생성원 하나로 과정 전체를 정하고, 생성원이 될 수 있는 작용소를 Hille–Yosida 정리의 조건으로 가른다.

# 직관

손님이 시간당 평균 $\lambda$ 명씩 들어오는 가게에서 시각 $t$ 의 누적 손님 수를 $X\_t$ 라 한다. [Poisson 과정](poisson-process.md)이므로 지금 $x$ 명이면 시간 $t$ 뒤에 $x+k$ 명일 확률은 $e^{-\lambda t}(\lambda t)^k/k!$ 다. 손님 수의 함수 $f$ 에 대해 시간 $t$ 뒤의 기댓값은 다음과 같다.

$$
T(t)f(x)=\sum\_{k\ge0}e^{-\lambda t}\frac{(\lambda t)^k}{k!}f(x+k)
$$

$t$ 가 작으면 $k=0$ 과 $k=1$ 항만 남아 $T(t)f(x)\approx(1-\lambda t)f(x)+\lambda tf(x+1)$ 이다. 그래서 순간 변화율은 다음 작용소다.

$$
Af(x)=\lim\_{t\to0}\frac{T(t)f(x)-f(x)}{t}=\lambda\big(f(x+1)-f(x)\big)
$$

거꾸로 $A$ 에서 $T(t)$ 를 되찾을 수 있다. $Sf(x)=f(x+1)$ 로 두면 $A=\lambda(S-I)$ 이고, 지수함수의 급수로 다음이 나와 위의 $T(t)$ 와 같다.

$$
e^{tA}=e^{-\lambda t}e^{\lambda tS}=\sum\_{k\ge0}e^{-\lambda t}\frac{(\lambda t)^k}{k!}S^k
$$

순간 변화율 하나가 모든 시각의 전이를 정한다.

# 정의

## Feller 반군

$E$ 가 $\mathbb R^d$ 나 $\mathbb Z^d$ 같은 국소 콤팩트 거리 공간일 때, 무한원에서 $0$ 으로 가는 $E$ 위의 연속함수 공간을 $C\_0(E)$ 로 쓰고 최댓값 노름을 준다. $C\_0(E)$ 위의 축약 [강연속 반군](c0-semigroups.md) $T(t)$ 가 $0\le f\le1$ 이면 $0\le T(t)f\le1$ 을 만족하면 **Feller 반군(Feller semigroup)** 이라 한다.

직관 절의 $T(t)$ 는 $E=\mathbb Z$ 에서 Feller 반군이다. 확률의 가중평균이므로 $0\le f\le1$ 을 보존하고, $f$ 가 무한원에서 $0$ 으로 가면 $T(t)f$ 도 그렇다.

## Feller 과정과 생성원

Markov 과정 $X\_t$ 의 전이 작용소 $T(t)f(x)=E\_x\lbrack f(X\_t)\rbrack$ 가 Feller 반군이면 $X\_t$ 를 Feller 과정이라 한다. $E\_x$ 는 $X\_0=x$ 에서 출발한 과정의 기댓값이다. 이 반군의 생성원을 과정의 **생성원(infinitesimal generator)** 이라 한다.

Poisson 과정의 생성원은 직관 절의 $\lambda(S-I)$ 다. [Brown 운동](brownian-motion.md)에서는 $T(t)f(x)=E\lbrack f(x+B\_t)\rbrack$ 이고, $f$ 를 $x$ 둘레에서 Taylor 전개하면 $E\lbrack B\_t\rbrack=0$, $E\lbrack B\_t^2\rbrack=t$ 에서 생성원이 $Af=\tfrac12f''$ 이 나온다.

# 성질

## 반군 법칙

Markov 성질에서 Chapman–Kolmogorov 방정식(Chapman–Kolmogorov equation)이 나오고, 이것이 $T(t+s)=T(t)T(s)$ 다. 시간 $t+s$ 뒤의 기댓값은 먼저 $s$ 동안 움직인 위치에서 다시 $t$ 동안의 기댓값을 평균한 것이다.

## 양의 최댓값 원리

정리. Feller 반군의 생성원 $A$ 와 정의역의 $f$ 에 대해, $f$ 가 $x\_0$ 에서 음이 아닌 최댓값을 가지면 $Af(x\_0)\le0$ 이다. 이것을 양의 최댓값 원리(positive maximum principle)라 한다[^1].

Poisson 과정에서는 $f(x\_0+1)\le f(x\_0)$ 이므로 $\lambda\big(f(x\_0+1)-f(x\_0)\big)\le0$ 이다. Brown 운동에서는 최댓값에서 $f''(x\_0)\le0$ 이다.

## Hille–Yosida–Ray 정리

정리. $C\_0(E)$ 위의 작용소 $A$ 의 폐포가 Feller 반군의 생성원인 것은 다음 세 조건과 동치다[^1].

1. $A$ 의 정의역이 $C\_0(E)$ 에서 조밀하다.
2. $A$ 가 양의 최댓값 원리를 만족한다.
3. 어떤 $\lambda\gt0$ 에서 $\lambda-A$ 의 치역이 조밀하다.

양의 최댓값 원리에서 $\Vert(\lambda-A)f\Vert\ge\lambda\Vert f\Vert$ 가 나오므로, 이 정리는 강연속 반군 문서의 Hille–Yosida 정리를 $C\_0(E)$ 에 맞춘 것이다.

## 경로와 강 Markov 성질

정리. Feller 과정은 경로가 오른쪽 연속이고 왼쪽 극한을 갖는 판본을 갖고, 그 판본은 강 Markov 성질(strong Markov property)을 만족한다[^2].

## Dynkin 공식

정리. $f$ 가 생성원의 정의역에 있으면 다음 과정은 [마팅게일](martingales.md)이다[^2].

$$
M\_t=f(X\_t)-f(X\_0)-\int\_0^tAf(X\_s)\thinspace ds
$$

유계 정지시간 $\tau$ 에서 기댓값을 잡으면 다음이 나온다.

$$
E\_x\lbrack f(X\_\tau)\rbrack=f(x)+E\_x\Big\lbrack\int\_0^\tau Af(X\_s)\thinspace ds\Big\rbrack
$$

이것을 Dynkin 공식(Dynkin's formula)이라 한다.

# 활용

- Kolmogorov 후진 방정식. $u(t,x)=T(t)f(x)$ 는 $u\_t=Au$, $u(0,\cdot)=f$ 를 만족한다. Brown 운동에서는 이것이 [열방정식](heat-equation.md) $u\_t=\tfrac12u\_{xx}$ 다.
- [확률미분방정식](stochastic-differential-equations.md). $dX\_t=b(X\_t)\thinspace dt+\sigma(X\_t)\thinspace dB\_t$ 의 해는 계수가 좋으면 Feller 과정이고, 생성원은 $Af=bf'+\tfrac12\sigma^2f''$ 다.
- [Lévy 과정](levy-processes.md). 독립 정상 증분을 갖는 과정은 Feller 과정이고, 생성원이 Lévy–Khintchine 공식의 세 부분, 곧 표류, 확산, 도약으로 나뉜다.

[^1]: S. N. Ethier, T. G. Kurtz, *Markov Processes: Characterization and Convergence*, Wiley, 1986, 4 장.
[^2]: D. Revuz, M. Yor, *Continuous Martingales and Brownian Motion*, 3판, Springer, 1999, 3 장과 7 장.

# 연관 문서

## 선수지식

- [강연속 반군](c0-semigroups.md)
- [Brown 운동](brownian-motion.md)

## 더 알아보기

- [Lévy 과정](levy-processes.md)

#probability #functional_analysis
