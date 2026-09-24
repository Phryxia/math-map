# Radically elementary 확률론

# 개요

Nelson 이 세운 이 체계는 표본공간을 [유한 확률 공간](probability.md)으로만 두되 원소 개수가 초유한인 것을 허용한다. 기댓값이 언제나 유한합이므로 $\sigma$ 대수, 측도의 가산가법성, Kolmogorov 확장 정리를 쓰지 않고 Brown 운동과 확률적분을 세운다. 초유한 자연수는 [내부집합론](internal-set-theory.md)의 이상화 공리가 준다.

# 직관

동전 $n$ 번 던지기는 셈으로 다 된다. 표본공간이 $\lbrace -1,1\rbrace^n$ 이고 각 점의 확률이 $2^{-n}$ 이며, 기댓값은 $2^n$ 개 항의 합이다. 시간 $\lbrack 0,1\rbrack$ 을 $n$ 등분하고 각 구간에서 $\pm 1/\sqrt n$ 만큼 움직이는 걷기 $w$ 를 만들면, $w$ 의 각 시점 값도 이 유한합으로 계산된다.

Brown 운동을 얻으려면 $n$ 을 무한대로 보내야 한다. 극한이 무엇인지 말하려면 경로 전체의 공간 위에 측도가 있어야 하고, 그 측도를 지으려면 유한차원 분포들이 하나의 측도로 모인다는 정리가 필요하다.

$n$ 을 무한대로 보내는 대신 모든 표준 자연수보다 큰 자연수 $\nu$ 를 하나 골라 $n=\nu$ 로 둔다. 표본공간 $\lbrace -1,1\rbrace^\nu$ 는 여전히 유한집합이고 기댓값은 여전히 유한합이다. 걷기 $w$ 는 $\nu$ 개 시점에서 정의되며, 각 걸음의 크기 $1/\sqrt\nu$ 는 무한소다.

표준 실수 $t$ 를 잡고 $t$ 에 무한히 가까운 격자점에서 $w$ 의 값을 읽은 뒤 표준부분을 취하면 Brown 운동의 시각 $t$ 값이 나온다. 극한도 측도도 쓰지 않고 유한합만 썼다.

# 정의

**유한 확률 공간**은 유한집합 $\Omega$ 와 함수 $\mathrm{pr}:\Omega\to\mathbb R$ 로 이루어지며, 모든 $\omega$ 에서 $\mathrm{pr}(\omega)\gt 0$ 이고 합이 $1$ 이다. 여기서 $\Omega$ 의 원소 개수는 초유한이어도 된다. **확률변수**는 함수 $x:\Omega\to\mathbb R$ 이고 기댓값은 유한합

$$
E\thinspace x=\sum_{\omega\in\Omega}\mathrm{pr}(\omega)\thinspace x(\omega)
$$

이다. 분산과 공분산도 같은 합으로 정의한다.

## 근사의 어휘

표준 확률론의 극한 개념을 무한소로 바꿔 쓴다.

| 이 체계 | 뜻 | 표준 확률론의 자리 |
| --- | --- | --- |
| 무한소 사건 | $\mathrm{Pr}(A)$ 가 무한소 | 확률 $0$ 인 사건 |
| 거의 모든 $\omega$ | 무한소 사건 밖의 모든 $\omega$ | 거의 확실히 |
| $x$ 가 제한적 | $\vert x\vert$ 가 어떤 표준 실수보다 작다 | 유계 |
| $x\simeq y$ | $x-y$ 가 무한소 | 수렴 |

## 확률과정

시간선은 $T=\lbrace 0,\delta,2\delta,\dots,1\rbrace$ 이고 $\delta=1/\nu$ 는 무한소다. **확률과정**은 함수 $T\times\Omega\to\mathbb R$ 이다. 과정 $x$ 가 **$S$ 연속**이라 함은 $s\simeq t$ 인 모든 $s,t\in T$ 에서 $x(s)\simeq x(t)$ 라는 것이다.

# 성질

## 대수의 법칙

$x_1,\dots,x_\nu$ 가 독립이고 기댓값이 $0$ 이며 분산의 평균이 제한적이면, 평균 $\bar x$ 는 거의 모든 $\omega$ 에서 무한소다.

**증명의 요지.** $E\thinspace\bar x^2=\nu^{-2}\sum\mathrm{Var}(x_i)$ 가 무한소이므로 Chebyshev 부등식이 $\mathrm{Pr}(\vert\bar x\vert\ge\varepsilon)$ 를 무한소로 만든다. 표준 실수 $\varepsilon$ 마다 이것이 성립하므로 무한소 사건 밖에서 $\bar x\simeq 0$ 이다.

## Brown 운동의 존재

$\pm 1/\sqrt\nu$ 걷기 $w$ 는 거의 모든 $\omega$ 에서 $S$ 연속이고, 그 표준부분이 Wiener 과정이다.

**증명의 요지.** 증분의 4차 적률이 $3\delta^2$ 이므로 최대부등식이 구간 하나에서의 요동을 $\delta$ 의 양의 거듭제곱으로 누른다. 구간이 $\nu$ 개여도 합이 여전히 무한소라 $S$ 연속성이 무한소 사건 밖에서 성립한다.

## 중심극한정리

독립이고 같은 분포를 따르며 분산이 $1$ 인 $x_1,\dots,x_\nu$ 의 정규화된 합 $\nu^{-1/2}\sum x_i$ 의 분포함수는 표준 Gauss 분포함수와 모든 표준 실수에서 무한히 가깝다. 특성함수의 유한곱을 전개하고 나머지를 무한소로 누른다.

## 확률적분

과정 $f$ 에 대해

$$
\int f\thinspace dw=\sum_{t\in T}f(t)\thinspace\lbrack w(t+\delta)-w(t)\rbrack
$$

는 유한합이다. $f$ 가 시각 $t$ 까지의 정보에만 의존하면 이 합의 기댓값이 $0$ 이고, 제곱의 기댓값이 $\sum E\thinspace f(t)^2\delta$ 다. Itô 공식은 $F(w(t+\delta))-F(w(t))$ 를 Taylor 전개해 2차항의 합이 $\tfrac12\int F''\thinspace dt$ 와 무한히 가깝다는 계산으로 나온다.[^1]

## 표준 확률론과의 번역

이 체계의 정리는 내부집합론의 보존성 정리로 표준 확률론의 정리가 된다. [Loeb 측도](loeb-measure.md)는 같은 일을 반대 방향에서 하며, 초유한 유한 확률공간에서 표준 측도공간을 만들어 번역을 명시적으로 준다.

# 활용

- **Brown 운동의 구성.** 경로공간 위의 측도를 짓지 않고 유한 걷기 하나로 끝낸다. 연속성은 적률 계산에서 직접 나온다.
- **확률미분방정식.** Euler 도식 $x(t+\delta)=x(t)+b\thinspace\delta+\sigma\thinspace\lbrack w(t+\delta)-w(t)\rbrack$ 이 수치 근사가 아니라 해의 정의다. 표준부분이 표준 해와 같다.
- **[Loeb 측도](loeb-measure.md).** 이 체계가 다루지 않는 비가산 표본공간의 진술은 Loeb 측도를 거쳐 옮긴다.
- **[마팅게일](martingales.md).** 정지시각과 선택정리가 유한합의 재배열이 되어 증명이 짧아진다.

[^1]: E. Nelson, *Radically Elementary Probability Theory*, Ann. of Math. Studies 117, Princeton University Press (1987). Brown 운동의 $S$ 연속성은 8 장, 확률적분과 Itô 공식은 11 장에 있다.

# 연관 문서

## 선수지식

- [유한 확률 공간](probability.md)
- [내부집합론](internal-set-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #logic #analysis
