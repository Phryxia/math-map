# Skorokhod 표현정리

# 개요

Skorokhod 표현정리는 분포 수렴하는 확률측도열을 하나의 확률공간 위에서 거의 확실히 수렴하는 확률변수열로 실현한다. [약수렴](weak-convergence.md)은 분포만 다루므로 표본점마다의 값에 대해서는 아무것도 말하지 않는데, 이 정리가 같은 분포를 갖는 다른 열을 잡아 점마다의 수렴을 준다.

거의 확실한 수렴을 가정하는 정리를 분포 수렴 상황에 쓰는 데 이 표현을 쓴다. Fatou 보조정리, [지배 수렴 정리](dominated-convergence.md), 연속사상 정리가 그런 예다.

# 직관

$X_n$ 이 $X$ 로 분포 수렴할 때 $\mathbb E\lbrack X_n^2\rbrack$ 의 극한을 알아내려고 한다. 분포 수렴의 정의는 유계 연속함수 $f$ 에 대한 $\mathbb E\lbrack f(X_n)\rbrack\to\mathbb E\lbrack f(X)\rbrack$ 이고 $f(x)=x^2$ 는 유계가 아니므로 정의에서 나오는 것이 없다. $X_n(\omega)\to X(\omega)$ 가 거의 모든 $\omega$ 에서 성립하면 Fatou 보조정리가 곧바로 $\mathbb E\lbrack X^2\rbrack\le\liminf_n\mathbb E\lbrack X_n^2\rbrack$ 를 주는데, 분포 수렴은 표본점마다의 값을 비교하지 않으므로 이 경로가 막힌다.

분포를 바꾸지 않는 한 확률변수는 다시 만들어도 된다. $\mu_n$ 을 $0,\thinspace 1/n,\thinspace 2/n,\dots,\thinspace 1$ 에 균등한 분포, $\mu$ 를 $\lbrack 0,1\rbrack$ 위 균등분포라 하자. $U$ 를 $\lbrack 0,1\rbrack$ 위 균등분포에서 한 번 뽑아 $Y_n=\lceil nU\rceil/n$ 과 $Y=U$ 로 두면 $Y_n$ 의 분포는 $\mu_n$ , $Y$ 의 분포는 $\mu$ 이고 $|Y_n-Y|\le 1/n$ 이므로 모든 표본점에서 $Y_n\to Y$ 다. 모든 $n$ 에 같은 $U$ 를 쓴 것이 점마다의 수렴을 만든다.

# 정의

## Skorokhod 표현

거리 공간 $S$ 위의 확률측도열 $\mu_n$ 과 확률측도 $\mu$ 에 대해, 확률공간 $(\Omega,\mathcal F,P)$ 와 그 위의 $S$ 값 확률변수 $Y_n,Y$ 가 다음 셋을 만족하면 $(Y_n,Y)$ 를 $(\mu_n,\mu)$ 의 **Skorokhod 표현**이라 한다.

$$
Y_n\sim\mu_n,\qquad Y\sim\mu,\qquad P\bigl(\lim_n Y_n=Y\bigr)=1
$$

세 조건은 주변분포를 지정하고 수렴을 요구한다. 주변분포만 맞추는 쌍이 [결합](coupling.md)이고, Skorokhod 표현은 거의 확실한 수렴을 추가로 만족하는 결합이다.

## 분위수 함수

실수 위 분포함수 $F$ 의 **분위수 함수**는 다음이다.

$$
F^{-1}(u)=\inf\lbrace x\in\mathbb R: F(x)\ge u\rbrace,\qquad u\in(0,1)
$$

$F$ 가 연속이고 증가하면 역함수와 같다. $U$ 가 $(0,1)$ 위 균등분포이면 $F^{-1}(U)$ 의 분포함수가 $F$ 다.

# 성질

## 실수 위의 구성

> **정리.** $\mathbb R$ 위에서 $\mu_n\Rightarrow\mu$ 이면 $(\mu_n,\mu)$ 의 Skorokhod 표현이 존재한다.

$\Omega=(0,1)$ 에 Lebesgue 측도를 주고 $Y_n=F_n^{-1}(U)$ , $Y=F^{-1}(U)$ 로 둔다. 여기서 $U(\omega)=\omega$ 이고 $F_n,F$ 는 $\mu_n,\mu$ 의 분포함수다. 분위수 함수의 성질로 주변분포가 맞는다.

수렴을 보이는 것이 증명의 요지다. $F^{-1}$ 이 $u$ 에서 연속이면 $F_n^{-1}(u)\to F^{-1}(u)$ 다. $\varepsilon\gt 0$ 에 대해 $F^{-1}(u)-\varepsilon$ 과 $F^{-1}(u)+\varepsilon$ 사이에서 $F$ 의 연속점을 골라 $\mu_n\Rightarrow\mu$ 가 주는 분포함수의 각점 수렴을 쓰면 충분히 큰 $n$ 에서 $F_n^{-1}(u)$ 가 그 구간에 든다. $F^{-1}$ 은 단조이므로 불연속점이 셀 수 있고 Lebesgue 측도가 $0$ 이다. 따라서 거의 모든 $u$ 에서 수렴한다.

## Polish 공간으로의 확장

> **정리.** $S$ 가 Polish 공간이고 $\mu_n\Rightarrow\mu$ 이면 $(\mu_n,\mu)$ 의 Skorokhod 표현이 존재한다.[^1]

증명은 $S$ 를 지름이 작은 Borel 조각으로 유한 분할하고 조각마다 질량을 맞추는 사상을 세워 $\lbrack 0,1\rbrack$ 위 균등분포에서 두 변수를 함께 뽑는 것이다. 분할을 가늘게 하는 열을 따라 구성을 정교화하면 극한에서 거의 확실한 수렴이 나온다. 실수 경우의 분위수 함수가 하던 일을 분할과 질량 배분이 대신한다.

## 원래 열과의 관계

표현은 원래 확률변수열 $X_n$ 과 같은 분포만 공유하고 표본점 대응은 다르다. $X_n$ 자체가 거의 확실히 수렴한다는 결론은 나오지 않는다. 독립인 $X_n$ 을 균등분포에서 뽑으면 $X_n$ 은 어느 점에서도 수렴하지 않지만 $\mu_n$ 은 상수열이므로 표현은 $Y_n=Y$ 로 잡힌다.

표현도 유일하지 않다. 실수 위에서 분위수 결합 외에 다른 구성이 있고, 분포만 맞추면 되므로 측도보존 변환으로 자유롭게 바꿀 수 있다.

# 활용

## 연속사상 정리

$g$ 가 $\mu$ 거의 어디서나 연속이면 $X_n\xrightarrow{d}X$ 에서 $g(X_n)\xrightarrow{d}g(X)$ 가 따라온다. 표현 $Y_n\to Y$ 를 잡으면 $Y$ 가 $g$ 의 연속점에 거의 확실히 들어가므로 $g(Y_n)\to g(Y)$ 가 거의 확실하고, 거의 확실한 수렴이 분포 수렴을 함의한다. 분포 수준에서 직접 다루면 $g$ 의 불연속점 집합을 유계 연속함수로 처리해야 한다.

## 기댓값의 수렴

Fatou 보조정리를 표현에 적용하면 $\mathbb E\lbrack h(X)\rbrack\le\liminf_n\mathbb E\lbrack h(X_n)\rbrack$ 가 하반연속인 비음 $h$ 에 대해 성립한다. [균등적분가능성](uniform-integrability.md)을 더하면 지배 수렴 정리가 적용되어 등호가 되고, 이것이 약수렴에서 적률의 수렴을 얻는 표준 경로다.

## 거리의 수렴 판정

$\lbrack 0,1\rbrack$ 에 값을 갖는 분포열의 Wasserstein 거리 $W_p(\mu_n,\mu)$ 가 $0$ 으로 가는지 보는 데 표현을 쓴다. $Y_n\to Y$ 가 거의 확실하고 $|Y_n-Y|^p$ 가 균등적분가능하면 $\mathbb E\lbrack |Y_n-Y|^p\rbrack\to 0$ 이고, 그 쌍이 결합이므로 [최적 수송](optimal-transport.md) 비용의 상한이 된다.

[^1]: Dudley, *Real Analysis and Probability*, 2nd ed., Theorem 11.7.2 — 가분 거리 공간에서의 표현 구성.

# 연관 문서

## 선수지식

- [약수렴](weak-convergence.md)
- [결합](coupling.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory #statistics
