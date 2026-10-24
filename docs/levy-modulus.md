# Lévy 연속률

# 개요

**Lévy 연속률(Lévy's modulus of continuity)** 은 [Brown 운동](brownian-motion.md)의 경로에서 길이 $h$ 인 시간 구간의 증분 가운데 가장 큰 것이 $\sqrt{2h\log(1/h)}$ 규모라는 정리다. 구간 $\lbrack 0,1\rbrack$ 의 모든 점에서 동시에 성립하는 진동 폭이다.

한 점을 고정했을 때의 진동 폭은 [반복로그 법칙](law-of-iterated-logarithm.md)이 주는 $\sqrt{2h\log\log(1/h)}$ 이다. 모든 점을 함께 보면 로그가 한 겹 줄어 폭이 더 커진다.

# 직관

구간 $\lbrack 0,1\rbrack$ 을 길이 $h=1/n$ 인 조각 $n$ 개로 자른다. 조각마다 Brown 운동의 증분은 평균 $0$, 분산 $h$ 인 정규분포를 따르고 서로 독립이다. 그래서 증분을 $\sqrt h$ 로 나누면 독립인 표준정규 확률변수 $n$ 개가 나온다. 경로의 가장 큰 증분은 $\sqrt h$ 에 이 $n$ 개의 최댓값을 곱한 것이다.

표준정규 확률변수가 $x$ 를 넘을 확률은 대략 $e^{-x^2/2}$ 이다. $n$ 개 가운데 $x$ 를 넘는 것의 개수의 기댓값은 $ne^{-x^2/2}$ 이고, 이 값이 $1$ 근처가 되는 $x$ 는 $\sqrt{2\log n}$ 이다. 더 작은 $x$ 에서는 넘는 것이 여럿 있고, 더 큰 $x$ 에서는 거의 없다. 그러므로 최댓값은 $\sqrt{2\log n}$ 근처에 있다.

두 결과를 합치면 가장 큰 증분은 $\sqrt h\cdot\sqrt{2\log n}=\sqrt{2h\log(1/h)}$ 이다. 조각의 끝점이 아닌 곳에서 시작하는 구간까지 보아도 값이 커지지 않는다는 것이 정리의 나머지다.

# 정의

함수 $f:\lbrack 0,1\rbrack\to\mathbb R$ 의 **연속률(modulus of continuity)** 은

$$
\omega_f(h)=\sup\lbrace\vert f(t)-f(s)\vert:s,t\in\lbrack 0,1\rbrack,\thinspace\vert t-s\vert\le h\rbrace
$$

이다. $f$ 가 [균등연속](uniform-continuity.md)인 것은 $h\to 0$ 에서 $\omega_f(h)\to 0$ 인 것과 동치다. 증가함수 $\varphi$ 와 상수 $C$ 가 있어 작은 $h$ 에서 $\omega_f(h)\le C\varphi(h)$ 이면 $\varphi$ 를 $f$ 의 연속률이라고도 한다. $\varphi(h)=h^\alpha$ 이면 이 조건이 $\alpha$ Hölder 연속이다.

# 성질

## Lévy 정리

**정리 (Lévy).** 표준 Brown 운동 $B$ 에 대해 거의 확실하게

$$
\limsup_{h\to 0^+}\thinspace\sup_{0\le t\le 1-h}\frac{\vert B_{t+h}-B_t\vert}{\sqrt{2h\log(1/h)}}=1
$$

이다.[^1]

하계의 요지. $h=2^{-k}$ 로 두고 조각 $2^k$ 개의 증분을 본다. $c\lt 1$ 이면 한 증분이 $c\sqrt{2h\log(1/h)}$ 를 넘을 확률이 $2^{-kc^2}$ 에 로그 인자를 곱한 것보다 크다. 증분들이 독립이므로 아무것도 넘지 않을 확률은 $\exp(-2^{k(1-c^2)}/\mathrm{poly}(k))$ 이하이고, $k$ 에 대해 합이 유한하다. [Borel–Cantelli 보조정리](borel-cantelli.md)로 충분히 큰 $k$ 에서는 넘는 증분이 항상 존재한다.

상계의 요지. 이진 격자점 $j2^{-k}$ 사이의 증분 가운데 간격이 $2^{-k(1-\delta)}$ 이하인 것만 본다. 그런 쌍은 $2^{k(1+\delta)}$ 개 정도이고, 한 쌍이 $(1+\varepsilon)$ 배의 경계를 넘을 확률이 $2^{-k(1+\varepsilon)^2(1-\delta)}$ 규모이므로 $\delta$ 가 작으면 합이 유한하다. 격자점이 아닌 $s,t$ 는 이진 전개로 격자점에 다가가며 증분을 이어 붙이고, 이어 붙인 항들의 합이 주된 항보다 작다. $\square$

## Hölder 지수

**따름정리.** 거의 확실하게 Brown 운동 경로는 모든 $\alpha\lt 1/2$ 에서 $\alpha$ Hölder 연속이고, 어떤 구간에서도 $1/2$ Hölder 연속이 아니다.

$\alpha\lt 1/2$ 이면 $\sqrt{2h\log(1/h)}/h^\alpha\to 0$ 이므로 정리의 상계에서 첫 진술이 나온다. $\sqrt{2h\log(1/h)}/h^{1/2}\to\infty$ 이고 Brown 운동의 크기 변환으로 정리가 모든 구간에서 같은 꼴로 성립하므로 둘째 진술이 나온다. $\square$

## 빠른 점

반복로그 법칙은 각 고정점 $t$ 에서 $\limsup_{h\to 0^+}\vert B_{t+h}-B_t\vert/\sqrt{2h\log\log(1/h)}=1$ 을 준다. 이 극한이 무한대인 점도 존재한다. $0\le a\le 1$ 에 대해

$$
F(a)=\Bigl\lbrace t\in\lbrack 0,1\rbrack:\limsup_{h\to 0^+}\frac{\vert B_{t+h}-B_t\vert}{\sqrt{2h\log(1/h)}}\ge a\Bigr\rbrace
$$

로 두면 $F(a)$ 의 [Hausdorff 차원](hausdorff-dimension.md)은 거의 확실하게 $1-a^2$ 이다.[^2] $F(a)$ 의 점을 **빠른 점(fast point)** 이라 한다. $0\lt a\lt 1$ 이면 $F(a)$ 는 Lebesgue [측도](measure.md) $0$ 이지만 조밀하다.

# 활용

- **강근사.** [Skorokhod 매장](skorokhod-embedding.md)으로 무작위 걷기를 Brown 운동 위에 놓을 때, 정지시간 $\tau_n$ 과 $\sigma^2n$ 의 차가 $o(n)$ 이므로 $B_{\tau_n}$ 과 $B_{\sigma^2n}$ 의 차는 길이 $o(n)$ 인 구간의 증분으로 누른다. Lévy 정리의 크기 변환판이 이 증분의 크기를 준다.
- **함수공간의 tightness.** [Donsker 불변원리](donsker-invariance-principle.md)의 tightness 판정은 연속률 $\omega_{W_n}(h)$ 가 $h\to 0$ 에서 확률적으로 균등하게 작다는 조건이다. Brown 운동 자신의 연속률이 이 정리로 정확히 주어진다.
- **수치 시뮬레이션.** 격자 간격 $h$ 로 Brown 운동을 표본추출한 뒤 선형보간하면, 보간 경로와 실제 경로의 균등 거리는 $\sqrt{h\log(1/h)}$ 규모다.

[^1]: Peter Mörters, Yuval Peres, *Brownian Motion*, Cambridge University Press, 2010, 1.2 절.
[^2]: Steven Orey, S. James Taylor, "How often on a Brownian path does the law of iterated logarithm fail?", *Proceedings of the London Mathematical Society* (3) 28 (1974), 174–192.

# 연관 문서

## 선수지식

- [Brown 운동](brownian-motion.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #measure_theory
