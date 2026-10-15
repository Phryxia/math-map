# Fejér 핵

# 개요

Fejér 핵은 [Fourier 급수](fourier-series.md)의 부분합을 산술평균한 것을 합성곱으로 나타내는 핵이다. 음이 아니고 적분이 $1$ 이며 원점 밖에서 균등하게 $0$ 으로 간다.

이 세 성질에서 연속인 주기함수의 균등수렴이 나온다. 부분합 자체는 연속함수에서도 균등수렴하지 않으므로 평균을 취하는 것이 수렴을 되찾는 방법이다.

# 직관

$2\pi$ 주기함수 $f$ 의 Fourier 부분합은 합성곱 $S_Nf=f\ast D_N$ 으로 적히고, 핵은

$$
D_N(t)=\sum_{n=-N}^{N}e^{int}=\frac{\sin((N+\tfrac12)t)}{\sin(t/2)}
$$

이다. 이 핵은 부호가 바뀌고 $\vert D_N\vert$ 의 적분이 $\log N$ 의 상수배로 자란다. 그래서 $f$ 가 연속이어도 부분합의 균등수렴이 나오지 않는다.

부호가 바뀌어서 막혔으니 부호가 바뀌지 않는 핵을 만든다. 부분합 $S_0f,\dots,S_Nf$ 의 산술평균을 취하면 핵이 $D_0,\dots,D_N$ 의 산술평균이고, 그 합은 기하급수의 합으로 계산되어 제곱 꼴이 된다. 제곱이므로 음이 아니고, 음이 아닌 핵은 절댓값의 적분이 $1$ 이므로 균등수렴이 따라온다.

# 정의

## Fejér 핵

$$
F_N(t)=\frac{1}{N+1}\sum_{k=0}^{N}D_k(t)=\frac{1}{N+1}\left(\frac{\sin((N+1)t/2)}{\sin(t/2)}\right)^2
$$

를 **Fejér 핵**이라 한다.

## Cesàro 평균

$f$ 의 부분합의 산술평균 $\sigma_Nf=\frac{1}{N+1}\sum_{k=0}^{N}S_kf$ 를 **Cesàro 평균**이라 한다. 합성곱으로는 $\sigma_Nf=f\ast F_N$ 이고 여기서

$$
(f\ast g)(x)=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x-t)g(t)\thinspace dt
$$

다.

# 성질

## 근사항등원의 세 조건

**정리.** $F_N\ge 0$ 이고, $\frac{1}{2\pi}\int_{-\pi}^{\pi}F_N(t)\thinspace dt=1$ 이고, 각 $\delta\gt 0$ 에서 $\delta\le\vert t\vert\le\pi$ 위의 $F_N$ 이 $0$ 으로 균등수렴한다.

첫째는 정의의 제곱 꼴에서 나온다. 둘째는 $D_k$ 의 적분이 상수항 하나만 남겨 $1$ 이므로 평균도 $1$ 이다. 셋째는 $\delta\le\vert t\vert\le\pi$ 에서 $\sin^2(t/2)\ge\sin^2(\delta/2)$ 이므로

$$
0\le F_N(t)\le\frac{1}{(N+1)\sin^2(\delta/2)}
$$

이다. ∎

## Fejér 정리

**정리.** $f$ 가 연속인 $2\pi$ 주기함수이면 $\sigma_Nf\to f$ 가 균등수렴한다[^1].

적분이 $1$ 이므로 $\sigma_Nf(x)-f(x)=\frac{1}{2\pi}\int_{-\pi}^{\pi}(f(x-t)-f(x))F_N(t)\thinspace dt$ 다. $\varepsilon\gt 0$ 에 대해 균등연속성으로 $\vert t\vert\lt \delta$ 에서 $\vert f(x-t)-f(x)\vert\lt \varepsilon$ 인 $\delta$ 를 잡는다. 적분을 $\vert t\vert\lt \delta$ 와 $\delta\le\vert t\vert\le\pi$ 로 쪼개면 앞쪽은 $F_N\ge 0$ 과 적분 $1$ 에서 $\varepsilon$ 이하이고, 뒤쪽은 $2\Vert f\Vert$ 에 셋째 조건의 상계를 곱한 것이므로 $N$ 을 키우면 $0$ 으로 간다. ∎

## Korovkin 정리와의 관계

$\sigma_N$ 은 음이 아닌 핵과의 합성곱이므로 양선형작용소다. 계수 쪽에서 계산하면 $\vert n\vert\le N$ 에서

$$
\sigma_N(e^{int})=\Bigl(1-\frac{\vert n\vert}{N+1}\Bigr)e^{int}
$$

이므로 $1$ , $\cos t$ , $\sin t$ 세 함수에서 수렴한다. [Korovkin 정리](korovkin-theorem.md)의 원 판본이 그 셋을 검정함수로 쓰므로 Fejér 정리가 그 정리의 특수한 경우다.

## Gibbs 현상의 부재

$\min f\le\sigma_Nf\le\max f$ 가 성립한다. 핵이 음이 아니고 적분이 $1$ 이므로 합성곱이 가중평균이다. 부분합에서는 불연속점 근처에서 약 $9$ 퍼센트의 과도 진동이 남지만 Cesàro 평균에서는 남지 않는다.

$f$ 가 유계이고 $x$ 에서 좌우극한을 가지면 $\sigma_Nf(x)\to(f(x^+)+f(x^-))/2$ 다. 핵이 짝함수이므로 두 쪽의 기여가 같은 무게로 들어간다.

## 계수의 감쇠

$\sigma_Nf$ 의 $n$ 번째 Fourier 계수는 $(1-\vert n\vert/(N+1))\hat f(n)$ 이다. 차수를 $N$ 에서 자르는 것과 달리 계수를 선형으로 줄여 꼬리를 매끄럽게 끊는다.

# 활용

- **삼각다항식의 조밀성.** Fourier 급수 문서의 Parseval 등식 증명은 삼각다항식이 연속함수 공간에서 조밀하다는 것을 Fejér 정리로 얻는다. $\sigma_Nf$ 자체가 삼각다항식이므로 근사열을 명시적으로 준다.
- **창함수.** 신호 처리에서 계수에 $1-\vert n\vert/(N+1)$ 을 곱하는 삼각 창이 이 핵과 같다. 차수를 자르는 직사각 창의 과도 진동을 없애는 데 쓴다.
- **Weierstrass 근사정리의 삼각 판본.** [Stone–Weierstrass 정리](stone-weierstrass.md)의 활용 절이 원 위의 삼각다항식이 조밀함을 대수 조건에서 얻는다. Fejér 정리는 같은 결론을 근사열의 구성으로 준다.

[^1]: L. Fejér, *Untersuchungen über Fouriersche Reihen*, Mathematische Annalen **58** (1904), 51–69.

# 연관 문서

## 선수지식

- [Fourier 급수](fourier-series.md)
- [Korovkin 정리](korovkin-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis
