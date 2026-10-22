# 확률변수의 수렴

# 개요

**확률변수의 수렴(convergence of random variables)** 은 [확률변수](random-variables.md)열 $X_n$ 이 확률변수 $X$ 에 가까워지는 방식이다. 거의 확실한 수렴, 확률수렴, $L^p$ 수렴, 분포수렴의 네 가지를 쓴다. 넷은 서로 다른 조건이고, 극한정리마다 어느 수렴으로 성립하는지가 진술의 일부다.

[큰 수의 법칙](law-of-large-numbers.md)은 약한 법칙이 확률수렴, 강한 법칙이 거의 확실한 수렴이고, [중심극한정리](central-limit-theorem.md)는 분포수렴이다. 네 수렴 사이의 함의 관계와 반례를 알아야 한 정리의 결론을 다른 정리의 가정으로 쓸 수 있다.

# 직관

$[0,1]$ 에서 점 $\omega$ 를 고르게 뽑는다. 구간을 $[0,1]$, $[0,\tfrac12]$, $[\tfrac12,1]$, $[0,\tfrac13]$, $[\tfrac13,\tfrac23]$, $[\tfrac23,1]$, $[0,\tfrac14]$, $\dots$ 의 순서로 늘어놓고, $n$ 번째 구간을 $I_n$ 이라 할 때 $X_n(\omega)$ 는 $\omega\in I_n$ 이면 $1$, 아니면 $0$ 이다. 구간의 길이가 $0$ 으로 가므로 $P(X_n=1)=\lvert I_n\rvert\to 0$ 이다. 큰 $n$ 에서 $X_n$ 이 $0$ 이 아닐 확률은 작다.

한 점 $\omega$ 를 고정하고 $X_1(\omega),X_2(\omega),\dots$ 를 보면 다르다. 같은 길이의 구간들이 $[0,1]$ 을 한 번씩 훑으므로 $\omega$ 는 길이마다 적어도 한 구간에 들어가고, 그때마다 $X_n(\omega)=1$ 이다. 그 사이에는 $X_n(\omega)=0$ 이므로 수열 $X_n(\omega)$ 는 $0$ 과 $1$ 을 무한히 오가고 수렴하지 않는다. 이것이 모든 $\omega$ 에서 일어난다.

그래서 "$X_n$ 이 $0$ 으로 간다" 는 말에 두 뜻이 있다. 각 $n$ 에서 $0$ 이 아닐 확률이 작아진다는 뜻으로는 수렴하고, 각 $\omega$ 에서 수열이 수렴한다는 뜻으로는 수렴하지 않는다. 앞의 것이 확률수렴이고 뒤의 것이 거의 확실한 수렴이다.

이 수열에서 구간이 $[0,1]$, $[0,\tfrac12]$, $[0,\tfrac13]$, $\dots$ 인 항만 골라내면, $\omega\gt 0$ 인 점은 어느 시점부터 구간 밖에 있으므로 골라낸 수열은 $0$ 으로 거의 확실히 수렴한다. 확률수렴하는 수열에서 항상 이런 부분열을 고를 수 있다.

# 정의

확률공간 $(\Omega,\mathcal F,P)$ 위의 실숫값 확률변수 $X_n,X$ 에 대해 다음을 정의한다.

## 거의 확실한 수렴

$$
P\bigl(\lbrace\omega:X_n(\omega)\to X(\omega)\rbrace\bigr)=1
$$

이면 $X_n$ 이 $X$ 로 **거의 확실한 수렴(almost sure convergence)** 을 한다고 하고 $X_n\to X$ a.s.(almost surely)로 쓴다. 측도론의 거의 어디서나 수렴과 같다.

## 확률수렴

모든 $\varepsilon\gt 0$ 에서

$$
P\bigl(\lvert X_n-X\rvert\gt\varepsilon\bigr)\to 0
$$

이면 $X_n$ 이 $X$ 로 **확률수렴(convergence in probability)** 한다고 하고 $X_n\xrightarrow{P}X$ 로 쓴다. 측도론의 측도 수렴과 같다.

## Lᵖ 수렴

$p\ge 1$ 이고 $\mathbb E\lvert X_n\rvert^p$, $\mathbb E\lvert X\rvert^p$ 가 유한할 때

$$
\mathbb E\lvert X_n-X\rvert^p\to 0
$$

이면 $X_n$ 이 $X$ 로 **$L^p$ 수렴($L^p$ convergence)** 한다고 한다. [Lᵖ 공간](lp-spaces.md)의 노름 수렴이다. $p=1$ 이면 평균 수렴, $p=2$ 이면 제곱평균 수렴이라 한다.

## 분포수렴

$X$ 의 분포함수 $F(x)=P(X\le x)$ 가 연속인 모든 점 $x$ 에서

$$
P(X_n\le x)\to F(x)
$$

이면 $X_n$ 이 $X$ 로 **분포수렴(convergence in distribution)** 한다고 하고 $X_n\xrightarrow{d}X$ 로 쓴다. 분포만 보므로 $X_n$ 과 $X$ 가 다른 확률공간에 있어도 정의된다. 분포의 [약수렴](weak-convergence.md)과 동치다.

# 성질

## 함의 관계

다음 함의가 성립한다. $1\le p\le q$ 이다.

| 가정 | 결론 | 근거 |
| --- | --- | --- |
| 거의 확실한 수렴 | 확률수렴 | [Egorov 정리](egorov-theorem.md)나 아래 증명 |
| $L^q$ 수렴 | $L^p$ 수렴 | [Jensen 부등식](jensen-inequality.md) |
| $L^p$ 수렴 | 확률수렴 | Markov 부등식 |
| 확률수렴 | 분포수렴 | 아래 증명 |
| 상수 $c$ 로의 분포수렴 | $c$ 로의 확률수렴 | 아래 증명 |

거의 확실한 수렴에서 확률수렴. 사건 $A_n=\bigcup_{m\ge n}\lbrace\lvert X_m-X\rvert\gt\varepsilon\rbrace$ 은 감소하고 교집합이 수렴하지 않는 점의 집합에 포함되므로 $P(A_n)\to 0$ 이다. $\lbrace\lvert X_n-X\rvert\gt\varepsilon\rbrace\subseteq A_n$ 이다.

$L^p$ 수렴에서 확률수렴. Markov 부등식으로 $P(\lvert X_n-X\rvert\gt\varepsilon)\le\varepsilon^{-p}\mathbb E\lvert X_n-X\rvert^p$ 이다.

확률수렴에서 분포수렴. $P(X_n\le x)\le P(X\le x+\varepsilon)+P(\lvert X_n-X\rvert\gt\varepsilon)$ 와 $P(X\le x-\varepsilon)\le P(X_n\le x)+P(\lvert X_n-X\rvert\gt\varepsilon)$ 에서 $n\to\infty$ 후 $\varepsilon\to 0$ 으로 보내면 $F$ 의 연속점에서 극한이 $F(x)$ 다. 극한이 상수 $c$ 이면 $P(\lvert X_n-c\rvert\gt\varepsilon)\le P(X_n\le c-\varepsilon)+1-P(X_n\le c+\tfrac{\varepsilon}{2})\to 0$ 이므로 역도 성립한다.

## 반례

함의의 역은 일반적으로 성립하지 않는다. $\Omega=[0,1]$ 에 Lebesgue 측도를 준다.

- 확률수렴하지만 거의 확실히 수렴하지 않는다. 직관 절의 수열이다. $\mathbb E\lvert X_n\rvert^p=\lvert I_n\rvert\to 0$ 이어서 $L^p$ 수렴도 한다. 그래서 $L^p$ 수렴도 거의 확실한 수렴을 함의하지 않는다.
- 거의 확실히 수렴하지만 $L^1$ 수렴하지 않는다. $X_n=n\mathbf 1\_{[0,1/n]}$ 은 $\omega\gt 0$ 에서 결국 $0$ 이지만 $\mathbb E X_n=1$ 이다.
- 분포수렴하지만 확률수렴하지 않는다. $X$ 가 [표준정규분포](normal-distribution.md)를 따르고 $X_n=-X$ 이면 모든 $X_n$ 의 분포가 $X$ 와 같지만 $\lvert X_n-X\rvert=2\lvert X\rvert$ 다.

## 부분열 정리

$X_n\xrightarrow{P}X$ 이면 거의 확실히 $X$ 로 수렴하는 부분열 $X_{n_k}$ 가 존재한다.

증명의 요지. $P(\lvert X_{n_k}-X\rvert\gt 2^{-k})\lt 2^{-k}$ 인 $n_1\lt n_2\lt\cdots$ 를 고른다. 확률의 합이 유한하므로 [Borel–Cantelli 보조정리](borel-cantelli.md)에 따라 거의 모든 $\omega$ 에서 유한 개의 $k$ 를 빼고 $\lvert X_{n_k}(\omega)-X(\omega)\rvert\le 2^{-k}$ 이다.

이 정리를 거듭 쓰면 특징이 나온다. $X_n\xrightarrow{P}X$ 인 것은 모든 부분열이 다시 거의 확실히 $X$ 로 수렴하는 부분열을 갖는 것과 동치다.

## 거리와 위상

확률수렴은 거리로 나타난다. $d(X,Y)=\mathbb E\min(\lvert X-Y\rvert,1)$ 은 거의 확실히 같은 확률변수를 같게 볼 때 거리이고, $d(X_n,X)\to 0$ 은 $X_n\xrightarrow{P}X$ 와 동치다. 이 거리로 확률변수 공간은 완비다.

거의 확실한 수렴은 어떤 위상의 수렴으로도 나타나지 않는다. 위상의 수렴이라면 모든 부분열이 다시 수렴하는 부분열을 갖는 수열은 수렴해야 하는데, 직관 절의 수열은 부분열 정리에 따라 이 조건을 만족하면서 거의 확실히 수렴하지 않는다.

## L¹ 수렴의 조건

$X_n\xrightarrow{P}X$ 일 때 $L^1$ 수렴과 $\lbrace X_n\rbrace$ 의 [균등적분가능성](uniform-integrability.md)은 동치다. 반례 절의 $n\mathbf 1\_{[0,1/n]}$ 은 균등적분가능하지 않다. 확률변수열이 적분가능한 $Y$ 로 $\lvert X_n\rvert\le Y$ 를 만족하면 균등적분가능하므로, [지배 수렴 정리](dominated-convergence.md)가 이 동치의 특수한 경우다.

## 연속사상과 Slutsky 정리

$g$ 가 연속함수이면 $X_n\to X$ 의 세 수렴(거의 확실한 수렴, 확률수렴, 분포수렴)이 각각 $g(X_n)\to g(X)$ 로 이어진다. 이를 연속사상 정리(continuous mapping theorem)라 한다.

Slutsky 정리(Slutsky's theorem)는 $X_n\xrightarrow{d}X$ 이고 $Y_n\xrightarrow{P}c$ 인 상수 $c$ 가 있으면 $X_n+Y_n\xrightarrow{d}X+c$ 이고 $X_nY_n\xrightarrow{d}cX$ 라는 정리다. 극한이 상수가 아니면 성립하지 않는다. $X_n=X$, $Y_n=-X$ 이면 두 열이 각각 분포수렴하지만 합은 $0$ 이고, $Y_n$ 을 $X$ 와 독립이고 분포가 같은 $Y$ 로 바꾸면 각 열의 분포는 그대로인데 합의 분포는 $0$ 이 아니다.

# 활용

- [큰 수의 법칙](law-of-large-numbers.md)의 약한 법칙은 Chebyshev 부등식으로 $L^2$ 수렴에서 확률수렴을 얻고, 강한 법칙은 Borel–Cantelli 보조정리로 거의 확실한 수렴을 얻는다.
- [중심극한정리](central-limit-theorem.md)로 표준화한 표본평균의 분포수렴을 얻고, 표본표준편차가 모표준편차로 확률수렴하므로 Slutsky 정리로 표준화에 표본표준편차를 쓸 수 있다.
- [최대가능도 추정](maximum-likelihood.md)의 일치성은 추정량이 참값으로 확률수렴한다는 진술이다.
- [Skorokhod 표현정리](skorokhod-representation.md)는 분포수렴하는 열을 같은 분포를 갖고 거의 확실히 수렴하는 열로 바꾸어, 거의 확실한 수렴을 가정하는 정리를 분포수렴에 적용한다.
- [Martingale](martingales.md) 수렴정리는 $L^1$ 유계인 martingale 의 거의 확실한 수렴이고, 균등적분가능성을 더하면 $L^1$ 수렴이다.

# 연관 문서

## 선수지식

- [확률변수](random-variables.md)
- [Borel–Cantelli 보조정리](borel-cantelli.md)

## 더 알아보기

- [Kolmogorov 세 급수 정리](kolmogorov-three-series.md)

#probability #measure_theory #analysis
