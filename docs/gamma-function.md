# 감마 함수와 Stirling 근사

# 개요

$n!$ 은 자연수에서만 정의된다. 이것을 실수와 복소수로 잇는 함수가 감마 함수다.

$$
\Gamma(s)=\int_0^{\infty}t^{s-1}e^{-t}\thinspace dt\quad(\operatorname{Re}s>0),
\qquad
\Gamma(n+1)=n!
$$

계승의 보간은 여럿이지만 감마가 표준이 된 근거는 둘이다. 함수방정식 $\Gamma(s+1)=s\thinspace\Gamma(s)$ 를 로그볼록성과 함께 요구하면 후보가 하나로 좁혀진다(Bohr–Mollerup). 적분 정의가 $e^{-t}$ 의 Mellin 변환이라 적분과 급수의 변환 공식마다 나타난다. [유수 정리](residue-theorem.md)로 윤곽을 옮길 때 붙는 인자, zeta 의 함수방정식에 붙는 인자, 확률분포의 정규화 상수가 감마다.

극점의 위치와 유수, 무한곱, 해석적 연속은 복소해석에서 나오고, 큰 $s$ 에서의 크기인 Stirling 급수는 [Euler–Maclaurin 공식](euler-maclaurin.md)이 주는 점근전개다.

# 직관

## 보간을 결정하는 조건

$f(x+1)=xf(x)$ 와 $f(1)=1$ 만으로는 부족하다. 주기 1 인 양함수 $p$ 를 곱한 $f\cdot p$ 도 같은 조건을 만족한다. $\log f$ 의 볼록성을 더하면 답이 유일해진다.

$$
\log\Gamma\ \text{가 볼록}\ \Longleftrightarrow\ \frac{\Gamma'}{\Gamma}\ \text{가 증가}
$$

주기함수를 곱하면 로그볼록성이 깨지므로 그런 변형이 배제된다. 로그볼록성은 [볼록성](convexity.md)이 유일성 정리를 주는 예다.

## Mellin 변환으로서의 적분

$\int_0^\infty t^{s-1}e^{-t}dt$ 는 $e^{-t}$ 의 Mellin 변환이다. Mellin 변환은 곱셈군 $(0,\infty)$ 위의 Fourier 변환이고, 스케일 변환의 지표 $t^{s}$ 로 함수를 분해한다. 스케일을 바꾸며 적분을 정리하는 계산에서 감마가 나온다.

$$
\int_0^{\infty}t^{s-1}e^{-\lambda t}dt=\frac{\Gamma(s)}{\lambda^{s}},
\qquad
\sum_{n\ge1}\frac{1}{n^{s}}\cdot\Gamma(s)=\int_0^{\infty}\frac{t^{s-1}}{e^{t}-1}dt
$$

오른쪽 식이 $\zeta(s)$ 를 적분으로 바꾸는 표준 통로이고, 감마가 $\zeta$ 의 무한 자리 인자로 불리는 근거다. 이 관점의 일반화가 [Tate 논문](tate-thesis.md)이다.

## 극점의 출처

$t\to0$ 에서 $e^{-t}=1-t+\tfrac{t^2}2-\cdots$ 이므로

$$
\int_0^{1}t^{s-1}e^{-t}dt=\sum_{n\ge0}\frac{(-1)^{n}}{n!}\cdot\frac1{s+n}
$$

가 되어 극점이 $s=0,-1,-2,\dots$ 에 하나씩 유수 $(-1)^n/n!$ 로 나타난다. 적분의 수렴을 막는 것은 $t=0$ 쪽이고 $e^{-t}$ 의 Taylor 계수가 유수가 된다. 감마는 영점이 없고 극점만 있으므로 $1/\Gamma$ 가 정함수다.

## 반사공식

$1/\Gamma(s)$ 는 $s=0,-1,-2,\dots$ 에서, $1/\Gamma(1-s)$ 는 $s=1,2,3,\dots$ 에서 영점을 갖는다. 둘의 곱은 모든 정수에서 단순영점을 갖는 정함수이고 증가 차수까지 맞추면 $\sin\pi s$ 와 같다.

$$
\Gamma(s)\Gamma(1-s)=\frac{\pi}{\sin\pi s}
$$

$s=\tfrac12$ 에서 $\Gamma(\tfrac12)=\sqrt\pi$ 이고 이것이 Gauss 적분이다. 정함수를 영점으로 판별하는 논법은 Hadamard 인수분해의 형태다.

```mermaid
flowchart TD
  INT["적분 정의<br/>Mellin 변환"] --> FE["Gamma(s+1) = s Gamma(s)"]
  FE --> AC["해석적 연속<br/>극점 s = 0,-1,-2,..."]
  INT --> PROD["Weierstrass 곱<br/>1/Gamma 는 정함수"]
  PROD --> REFL["반사공식<br/>Gamma(s)Gamma(1-s) = pi/sin"]
  AC --> ZETA["완비 zeta<br/>xi(s) = pi^{-s/2}Gamma(s/2)zeta(s)"]
  FE --> STIR["Stirling 급수<br/>Euler-Maclaurin"]
  STIR --> NUM["수치계산: 인수이동 + 점근전개"]
  REFL --> BETA["베타 함수와 부피"]
```

# 정의

## 적분과 해석적 연속

$\operatorname{Re}s>0$ 에서 적분이 절대수렴하고 정칙이다. 해석적 연속은 함수방정식을 거꾸로 쓴다.

$$
\Gamma(s)=\frac{\Gamma(s+n)}{s(s+1)\cdots(s+n-1)}
$$

우변은 $\operatorname{Re}s>-n$ 에서 정의되므로 $n$ 을 키우면 $\mathbb C$ 전체로 이어진다. 수치계산도 이 식을 쓴다.

## Euler 곱과 Weierstrass 곱

$$
\Gamma(s)=\lim_{n\to\infty}\frac{n!\thinspace n^{s}}{s(s+1)\cdots(s+n)},
\qquad
\frac1{\Gamma(s)}=s\thinspace e^{\gamma s}\prod_{n\ge1}\Big(1+\frac sn\Big)e^{-s/n}
$$

두 번째 식에서 $1/\Gamma$ 가 위수 1 의 정함수다. 수렴인자 $e^{-s/n}$ 을 넣는 자리에 [Euler 상수](euler-maclaurin.md) $\gamma$ 가 나타나며, 이는 $\sum1/n$ 과 $\log n$ 의 차이다.

## 베타 함수

$$
\mathrm B(x,y)=\int_0^1t^{x-1}(1-t)^{y-1}dt=\frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}
$$

베타 함수는 이항계수의 연속판이다. 증명은 $\Gamma(x)\Gamma(y)$ 를 이중적분으로 쓰고 극좌표에 해당하는 치환을 한다. 조합론의 여러 항등식이 이 식의 특수화다.

# 성질

## 극점과 유수

$\Gamma$ 는 $\mathbb C$ 에서 유리형이고 영점이 없다. 극점은 $n\ge0$ 인 정수에 대한 $s=-n$ 의 단순극점뿐이며

$$
\operatorname*{Res}_{s=-n}\Gamma(s)=\frac{(-1)^{n}}{n!}
$$

영점이 없으므로 $\Gamma$ 로 나누는 조작이 언제나 허용되고, 함수방정식에서 감마 인자를 옮겨 붙이는 계산에 제약이 없다.

## Bohr–Mollerup 정리

**정리.** $f:(0,\infty)\to(0,\infty)$ 가 $f(1)=1$ 과 $f(x+1)=xf(x)$ 와 $\log f$ 의 볼록성을 만족하면 $f=\Gamma$ 다.

**증명의 착상.** 로그볼록성으로 $\log f(n+x)$ 를 $\log f(n)$ 과 $\log f(n+1)$ 사이의 기울기로 가두면 Euler 곱 표현이 유도된다. $\square$

정의의 내용은 적분이 아니라 이 세 조건이다.

## 반사, 배가, 승법

$$
\Gamma(s)\Gamma(1-s)=\frac{\pi}{\sin\pi s},
\qquad
\Gamma(s)\Gamma\negthinspace\left(s+\tfrac12\right)=2^{1-2s}\sqrt\pi\thinspace\Gamma(2s)
$$

$$
\prod_{k=0}^{n-1}\Gamma\negthinspace\left(s+\frac kn\right)=(2\pi)^{(n-1)/2}\thinspace n^{1/2-ns}\thinspace\Gamma(ns)
$$

세 번째가 Gauss 승법공식이고 두 번째 Legendre 배가공식이 $n=2$ 인 경우다. 승법공식은 $\Gamma$ 가 곱셈군의 $n$ 배 사상과 정합한다는 진술이고, 지표합에서 [Gauss 합](gauss-sums.md)이 만족하는 Hasse–Davenport 관계가 같은 형태다.

## Stirling 급수

$f=\log x$ 에 Euler–Maclaurin 을 적용하면 $\log\Gamma$ 의 점근전개가 나온다.

$$
\log\Gamma(z)=\Big(z-\tfrac12\Big)\log z-z+\tfrac12\log2\pi
+\sum_{k=1}^{K}\frac{B_{2k}}{2k(2k-1)z^{2k-1}}+R_K
$$

$|\arg z|<\pi$ 인 닫힌 부채꼴에서 균등하게 성립한다. 지수를 취하면 다음이 된다.

$$
\Gamma(z)\sim\sqrt{\frac{2\pi}{z}}\left(\frac ze\right)^{z},
\qquad n!\sim\sqrt{2\pi n}\left(\frac ne\right)^{n}
$$

상수 $\sqrt{2\pi}$ 는 Euler–Maclaurin 이 주지 않고 반사공식이나 Wallis 곱으로 정한다. 급수가 발산하므로 최적 절단은 $K\approx\pi|z|$ 이고 그때 상대오차가 $e^{-2\pi|z|}$ 규모다.

## 감마 인자와 함수방정식

$$
\xi(s)=\pi^{-s/2}\Gamma\negthinspace\left(\frac s2\right)\zeta(s)
\quad\Longrightarrow\quad
\xi(s)=\xi(1-s)
$$

[Riemann zeta](prime-number-theorem.md) 의 함수방정식은 감마 인자를 붙여야 대칭이 된다. 소수마다 Euler 인자 $(1-p^{-s})^{-1}$ 가 있듯 무한 자리의 인자가 감마다. $\zeta$ 의 자명한 영점 $s=-2,-4,\dots$ 는 $\Gamma(s/2)$ 의 극점을 상쇄하느라 생긴 것이고 $\zeta$ 자신의 성질이 아니다. [모듈러 형식](modular-forms.md)과 [Dirichlet $L$ 함수](dirichlet-l-functions.md)의 완비화에도 무게에 맞춘 감마 인자가 같은 자리에 붙는다.

# 활용

## 수치계산

작은 $z$ 에서는 점근전개의 정확도가 낮으므로 함수방정식으로 $z$ 를 키운 뒤 Stirling 급수를 쓰고 되돌린다.

```python
from fractions import Fraction as F
from math import comb, log, pi, lgamma, sin, exp

M = 40
B = [F(0)] * (M + 1); B[0] = F(1)
for n in range(1, M + 1):
    B[n] = -sum(comb(n + 1, k) * B[k] for k in range(n)) / F(n + 1)

def loggamma(z, K=8, shift=12):
    s = 0.0
    while z < shift:                       # Gamma(z) = Gamma(z+1)/z 로 끌어올린다
        s -= log(z); z += 1
    r = (z - 0.5) * log(z) - z + 0.5 * log(2 * pi)
    for k in range(1, K + 1):              # Stirling 급수
        r += float(B[2 * k]) / (2 * k * (2 * k - 1) * z ** (2 * k - 1))
    return r + s

for z in (0.1, 0.5, 2.5, 7.0):
    print(z, "%.2e" % abs(loggamma(z) - lgamma(z)))
# 0.1 1.3e-15 / 0.5 7.1e-15 / 2.5 4.4e-15 / 7.0 8.9e-16

print(exp(2 * loggamma(0.5)), pi)                          # Gamma(1/2)^2 = pi
z = 0.3
print(exp(loggamma(z) + loggamma(1 - z)), pi / sin(pi * z))  # 반사공식
```

$\Gamma$ 자체는 금방 넘치지만 로그는 넘치지 않으므로 $\log\Gamma$ 를 계산한다. 이항계수나 확률밀도에서 필요한 양은 감마의 비 $\Gamma(a)\Gamma(b)/\Gamma(a+b)$ 이므로 로그로 더하고 뺀다.

## 부피와 확률분포

$n$ 차원 단위공의 부피와 감마분포의 정규화 상수가 같은 뿌리에서 나온다.

$$
\operatorname{vol}(B^{n})=\frac{\pi^{n/2}}{\Gamma\negthinspace\left(\frac n2+1\right)},
\qquad
p(x)=\frac{\lambda^{\alpha}}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x}
$$

앞의 식에서 $\Gamma$ 가 분모에 있으므로 $n$ 이 커지면 부피가 0 으로 급격히 줄어든다. [구 채우기](sphere-packing.md)의 밀도 평가가 이 값을 쓴다. 뒤의 감마분포는 지수분포의 합이며 $\alpha=n/2$ 와 $\lambda=1/2$ 이면 자유도 $n$ 의 카이제곱분포가 되어 [가설검정](hypothesis-testing.md)의 기본 분포가 된다. [지수족](exponential-families.md)의 로그분배함수가 $\log\Gamma$ 로 쓰이는 것도 같은 사정이다.

## 조합론적 근사

$$
\binom{2n}{n}=\frac{(2n)!}{(n!)^{2}}\sim\frac{4^{n}}{\sqrt{\pi n}}
$$

Stirling 근사를 세 번 써서 얻는 이 식을 [확률](probability.md)의 중심극한형 계산이 쓴다. $4^{n}$ 이 주도항이고 $\sqrt{n}$ 이 보정인 구조가 대칭 랜덤워크의 되돌아옴 확률, 이항분포의 최대값, 엔트로피 계산에 나타난다.[^1]

[^1]: 표준 참고는 E. Artin, *The Gamma Function* (Bohr–Mollerup 을 중심에 둔 짧은 고전)과 E. T. Whittaker, G. N. Watson, *A Course of Modern Analysis* 12 장. 수치구현은 W. Press 외, *Numerical Recipes* 6.1 절의 Lanczos 근사에 있다.

# 연관 문서

## 선수지식

- [Laurent 급수와 유수 정리](residue-theorem.md)
- [Euler–Maclaurin 공식과 점근급수](euler-maclaurin.md)

## 더 알아보기

- [Laplace 방법과 안장점](laplace-method.md)
- [Mellin 변환과 Perron 공식](mellin-transform.md)

#analysis #complex_analysis #computation
