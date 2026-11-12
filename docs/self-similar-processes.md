# 자기유사 과정

# 개요

**자기유사 과정(self-similar process)** 은 시간을 몇 배로 늘리면 값이 정해진 거듭제곱 배로 늘어난 것과 분포가 같은 확률과정이다. 주가를 하루 동안 그린 그래프와 한 달 동안 그린 그래프를 축의 눈금 없이 보면 어느 쪽이 하루치인지 가리기 어렵다. 자기유사 과정은 이 성질을 시간 배율 $c$ 와 값 배율 $c^H$ 의 관계 하나로 적고, 지수 $H$ 와 증분의 독립 여부로 [Brown 운동](brownian-motion.md), 안정 Lévy 과정, 분수 Brown 운동을 나눈다.

# 직관

Brown 운동 $B_t$ 는 $B_t$ 가 분산 $t$ 인 정규분포를 따른다. 시간을 $4$ 배로 늘린 $B_{4t}$ 는 분산이 $4t$ 이므로 $2B_t$ 와 분포가 같다. 시간을 $c$ 배 하면 값이 $c^{1/2}$ 배가 된다.

[Lévy 과정](levy-processes.md) 가운데 $X_1$ 이 표준 [Cauchy 분포](cauchy-distribution.md)를 따르는 Cauchy 과정에서는 $X_t$ 가 $t$ 배 한 Cauchy 분포를 따른다. 시간을 $4$ 배 하면 값이 $4$ 배가 되고, 지수는 $1$ 이다.

두 과정 모두 시간을 $c$ 배 하면 값이 $c^H$ 배가 되고, $H$ 만 다르다. Brown 운동은 $H=1/2$, Cauchy 과정은 $H=1$ 이다. 이 $H$ 가 [안정 분포](stable-distributions.md)의 안정 지수 $\alpha$ 의 역수와 같다.

# 정의

## 자기유사 과정

실수값 확률과정 $(X_t)\_{t\ge 0}$ 와 $H\gt 0$ 에 대해, 모든 $c\gt 0$ 에서 두 과정 $(X_{ct})\_{t\ge 0}$ 와 $(c^HX_t)\_{t\ge 0}$ 의 유한차원 분포가 같으면 $X$ 를 지수 $H$ 의 **자기유사 과정** 이라 하고 줄여서 $H$ 자기유사라 한다. $H$ 를 **Hurst 지수(Hurst index)** 라 한다.

유한차원 분포가 같다는 것은 모든 시각 $t_1,\dots,t_m$ 에서 벡터 $(X_{ct_1},\dots,X_{ct_m})$ 과 $(c^HX_{t_1},\dots,c^HX_{t_m})$ 의 분포가 같다는 것이다. 직관 절의 Brown 운동은 $1/2$ 자기유사, Cauchy 과정은 $1$ 자기유사다.

## 정상 증분

모든 $s\ge 0$ 에서 $(X_{t+s}-X_s)\_{t\ge 0}$ 와 $(X_t-X_0)\_{t\ge 0}$ 의 유한차원 분포가 같으면 $X$ 가 **정상 증분(stationary increments)** 을 갖는다고 한다. Lévy 과정은 정상 증분을 갖는다. $H$ 자기유사이고 정상 증분을 갖는 과정을 $H$-sssi 과정(self-similar with stationary increments)이라 한다.

## 분수 Brown 운동

$0\lt H\le 1$ 일 때 평균이 $0$ 이고 공분산이 다음과 같은 [Gauss 과정](gaussian-processes.md)을 Hurst 지수 $H$ 의 **분수 Brown 운동(fractional Brownian motion)** 이라 하고 $B^H$ 로 쓴다.

$$
\mathbb E\lbrack B^H_sB^H_t\rbrack=\frac12\left(t^{2H}+s^{2H}-\vert t-s\vert^{2H}\right)
$$

$H=1/2$ 이면 공분산이 $\min(s,t)$ 가 되어 Brown 운동이다. 공분산의 $t$, $s$ 를 $ct$, $cs$ 로 바꾸면 $c^{2H}$ 가 곱해지므로 $B^H$ 는 $H$ 자기유사다.

# 성질

## 원점의 값

$X$ 가 $H$ 자기유사이면 $X_0=0$ 이 거의 확실히 성립한다. $X_0$ 과 $c^HX_0$ 의 분포가 모든 $c\gt 0$ 에서 같고, $c\to 0$ 이면 $c^HX_0\to 0$ 이므로 $X_0$ 의 분포는 $0$ 에 몰려 있다.

## 자기유사 Lévy 과정

Lévy 과정 $X$ 가 $H$ 자기유사이면 $X_1$ 은 안정 지수 $\alpha=1/H$ 의 엄밀 안정 분포를 따르고, 따라서 $H\ge 1/2$ 이다. 거꾸로 $X_1$ 이 엄밀 $\alpha$ 안정이면 $X$ 는 $1/\alpha$ 자기유사다.[^1]

증명의 요지. $X_n$ 은 독립이고 분포가 같은 증분 $n$ 개의 합이고, 자기유사성에서 $X_n$ 과 $n^HX_1$ 의 분포가 같다. 이것이 안정 분포의 정의에서 $c_n=n^H$, $d_n=0$ 인 경우다. 안정 분포의 배율은 $n^{1/\alpha}$ ($0\lt\alpha\le 2$) 이므로 $H=1/\alpha\ge 1/2$ 이다.

## 유한 분산 sssi 과정의 공분산

$X$ 가 $H$-sssi 이고 $\sigma^2=\mathbb E\lbrack X_1^2\rbrack\lt\infty$ 이면 $0\lt H\le 1$ 이고 공분산은 다음으로 정해진다.[^1]

$$
\mathbb E\lbrack X_sX_t\rbrack=\frac{\sigma^2}{2}\left(t^{2H}+s^{2H}-\vert t-s\vert^{2H}\right)
$$

증명. 정상 증분과 자기유사성에서 다음이 나오고, $2X_sX_t=X_s^2+X_t^2-(X_t-X_s)^2$ 에 기댓값을 취하면 위 식이 된다.

$$
\mathbb E\lbrack(X_t-X_s)^2\rbrack=\mathbb E\lbrack X_{\vert t-s\vert}^2\rbrack=\sigma^2\vert t-s\vert^{2H}
$$

$H\le 1$ 은 $X_2=X_1+(X_2-X_1)$ 에서 나온다. 두 항의 제곱 평균의 제곱근이 모두 $\sigma$ 이므로 $2^H\sigma\le 2\sigma$ 다.

그래서 유한 분산의 Gauss sssi 과정은 분수 Brown 운동의 상수배뿐이다.

## 증분의 상관

분수 Brown 운동의 단위 증분 $Z_k=B^H_{k+1}-B^H_k$ 사이의 상관은 다음과 같다.

$$
\rho(n)=\mathbb E\lbrack Z_0Z_n\rbrack=\frac12\left((n+1)^{2H}-2n^{2H}+(n-1)^{2H}\right)
$$

$n=1$ 이면 $\rho(1)=2^{2H-1}-1$ 이다. $H=1/2$ 이면 $0$ 이라 증분이 독립이고, $H\gt 1/2$ 이면 양수, $H\lt 1/2$ 이면 음수다.

$n\to\infty$ 이면 $\rho(n)\sim H(2H-1)n^{2H-2}$ 다. $1/2\lt H\lt 1$ 이면 $\sum_n\rho(n)=\infty$ 이고, 이렇게 상관의 합이 발산하는 것을 **장기 의존성(long-range dependence)** 이라 한다.

## Lamperti 변환

$X$ 가 $H$ 자기유사인 것은 $Y_t=e^{-Ht}X_{e^t}$ ($t\in\mathbb R$) 가 정상 과정인 것과 동치다. 이 대응을 **Lamperti 변환(Lamperti transformation)** 이라 한다.[^2]

Brown 운동에서 $Y_t=e^{-t/2}B_{e^t}$ 의 공분산은 $e^{-(t+s)/2}e^{\min(s,t)}=e^{-\vert t-s\vert/2}$ 이므로 $Y$ 는 정상 [Ornstein–Uhlenbeck 과정](ornstein-uhlenbeck-process.md)이다.

# 활용

- 수문학. Hurst 는 Nile 강의 연간 수위 기록에서 저수지 용량을 정하는 통계량인 [재조정 범위](rescaled-range.md)가 $n^{1/2}$ 이 아니라 약 $n^{0.7}$ 로 자라는 것을 관측했다.[^3] Mandelbrot 와 Van Ness 는 이것을 $H\approx 0.7$ 인 분수 Brown 운동의 장기 의존성으로 모형화했다.[^4]
- 통신망. 이더넷 트래픽의 패킷 수를 여러 시간 척도에서 세면 $H$ 가 $0.5$ 보다 큰 자기유사 과정처럼 행동한다. 독립인 도착을 가정한 [Poisson 과정](poisson-process.md) 모형보다 큰 요동이 긴 시간 척도에서도 사라지지 않는다.[^5]
- 극한 정리. 정상 증분 과정의 부분합을 시간과 값 양쪽에서 늘려 극한을 취하면, 극한이 존재할 때 그 극한은 자기유사 과정이다(Lamperti 의 극한 정리). Brown 운동이 [중심극한정리](central-limit-theorem.md)의 과정판 극한인 것이 $H=1/2$ 인 경우다.

[^1]: G. Samorodnitsky, M. S. Taqqu, *Stable Non-Gaussian Random Processes*, Chapman & Hall (1994), §7.1 과 §7.2. 자기유사 과정, 안정 Lévy 과정, 분수 Brown 운동의 공분산.
[^2]: J. Lamperti, "Semi-stable Stochastic Processes", *Transactions of the American Mathematical Society* 104 (1962), 62–78.
[^3]: H. E. Hurst, "Long-Term Storage Capacity of Reservoirs", *Transactions of the American Society of Civil Engineers* 116 (1951), 770–808.
[^4]: B. B. Mandelbrot, J. W. Van Ness, "Fractional Brownian Motions, Fractional Noises and Applications", *SIAM Review* 10 (1968), 422–437.
[^5]: W. E. Leland, M. S. Taqqu, W. Willinger, D. V. Wilson, "On the Self-Similar Nature of Ethernet Traffic (Extended Version)", *IEEE/ACM Transactions on Networking* 2 (1994), 1–15.

# 연관 문서

## 선수지식

- [안정 분포](stable-distributions.md)
- [Lévy 과정](levy-processes.md)

## 더 알아보기

- [재조정 범위 분석](rescaled-range.md)

#probability #analysis #statistics
