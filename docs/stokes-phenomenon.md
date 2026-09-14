# Stokes 현상과 재합산

# 개요

[Laplace 방법과 안장점](laplace-method.md)은 적분의 주도항을 안장점 하나에서 읽어 낸다. 그런데 매개변수를 복소평면에서 돌리면 어느 방향에서는 그 안장점 하나로 충분하고, 다른 방향에서는 두 번째 안장점의 기여가 갑자기 합류한다. 이 교체가 **Stokes 현상**이다.

교체되는 항은 언제나 주도항보다 지수적으로 작다. [Euler–Maclaurin 공식과 점근급수](euler-maclaurin.md)에서 "점근급수가 함수를 결정하지 못한다" 며 남겨 둔 $e^{-x}$ 규모의 항이 정확히 이것이다. 점근급수가 발산한다는 사실과 지수적으로 작은 항이 존재한다는 사실은 같은 현상의 두 얼굴이고, 그 둘을 잇는 사전이 **Borel 변환**이다. 계수의 계승적 성장이 Borel 평면의 특이점으로 번역되고, 그 특이점을 어느 쪽으로 우회하느냐가 지수적으로 작은 항을 켜고 끈다.

발산급수에서 원래 함수를 되찾는 절차를 **재합산**(resummation)이라 하며, 점근급수 하나의 계수 안에 다른 안장점의 급수가 통째로 들어 있다는 관찰이 Écalle 의 **resurgence** 이론이다.

# 직관

## 발산의 원인은 다른 안장점이다

점근급수의 계수가 왜 하필 $n!$ 처럼 커지는가. 답은 급수가 보고 있지 않은 두 번째 안장점에 있다. 두 안장점의 작용 차이를 $A$ 라 하면 계수는

$$
a_n \;\sim\; \frac{C\,\Gamma(n+b)}{A^{\,n+b}}
$$

꼴로 커진다. $A$ 가 작을수록, 즉 두 안장점이 가까울수록 급수는 더 빨리 발산한다. 계수를 많이 계산해 성장률을 재면 보이지 않는 안장점의 위치를 알아낼 수 있다는 뜻이기도 하다.

## 특이점을 어느 쪽으로 돌아가는가

$n!$ 을 $\Gamma$ 적분으로 풀어 급수를 적분과 바꾸면, 발산의 책임이 피적분함수의 극점 하나로 옮겨간다. 적분 경로가 그 극점 위로 지나느냐 아래로 지나느냐에 따라 답이 갈리고, 차이는 유수 하나, 크기로는 $e^{-Ax}$ 다.

경로를 연속으로 움직이다 특이점을 건너는 순간 이 항이 붙는다. 이것이 Stokes 현상의 전부다. 함수 자체는 어디서도 불연속이 아니다. 불연속인 것은 "점근전개를 몇 개의 지수항으로 쓸 것인가" 라는 우리의 기술 방식이다.

```mermaid
graph LR
  D["발산 점근급수<br/>a_n ~ n!/A^n"] --> B["Borel 변환<br/>수렴 반경 |A|"]
  B --> S["zeta = A 의 특이점"]
  S --> P["Laplace 적분 경로를<br/>위/아래로 우회"]
  P --> E["차이 = 지수적으로 작은 항<br/>~ e^{-Ax}"]
  E --> T["transseries<br/>모든 지수항을 함께 씀"]
```

## 켜지는 곳과 보이는 곳

$e^{-Ax}$ 가 주도항에 비해 가장 작은 방향에서 항이 켜지고, 두 항의 크기가 같아지는 방향에서 비로소 눈에 보인다. 가장 작을 때 켜진다는 것이 역설처럼 들리지만, 오히려 그래서 함수가 연속일 수 있다. 무시해도 좋을 만큼 작을 때 조용히 붙어야 나중에 커졌을 때 아귀가 맞는다.

# 정의

## Borel 변환과 Borel 합

$x \to \infty$ 에서의 점근급수 $\tilde f(x) = \sum_{n \ge 0} a_n x^{-n-1}$ 에 대해 **Borel 변환**을

$$
\mathcal{B}[\tilde f](\zeta) \;=\; \sum_{n \ge 0} \frac{a_n}{n!}\,\zeta^{n}
$$

으로 정의한다. $a_n$ 이 $n!$ 규모로 커져도 $\mathcal{B}[\tilde f]$ 는 양의 수렴 반경을 가진다. 이 함수를 해석적으로 연장한 뒤

$$
\mathcal{S}_\theta \tilde f(x) \;=\; \int_0^{e^{i\theta}\infty} e^{-x\zeta}\,\mathcal{B}[\tilde f](\zeta)\,d\zeta
$$

를 방향 $\theta$ 의 **Borel 합**이라 한다. 적분이 수렴하면 $\mathcal{S}_\theta \tilde f$ 는 실제 해석함수이고 그 점근전개가 원래 급수다.

## Stokes 선과 anti-Stokes 선

$\mathcal{B}[\tilde f]$ 의 특이점이 놓인 방향을 **특이 방향**이라 한다. 그 방향에서 적분 경로가 막히므로 좌우 극한 $\mathcal{S}_{\theta^+}$ 와 $\mathcal{S}_{\theta^-}$ 가 갈라진다. 두 값의 차이가 지수적으로 작은 항이고, 그 계수를 **Stokes 상수**라 한다.

두 지수항 $e^{-A_1x}$ 와 $e^{-A_2x}$ 를 비교할 때 관례는 다음과 같다.

| 선 | 조건 | 무슨 일이 일어나는가 |
|---|---|---|
| Stokes 선 | $(A_2 - A_1)x$ 가 양의 실수 | 작은 항의 계수가 켜지거나 꺼진다 |
| anti-Stokes 선 | $\lvert e^{-A_1x}\rvert = \lvert e^{-A_2x}\rvert$ | 두 항의 크기가 뒤바뀐다 |

물리 문헌은 두 이름을 반대로 쓰는 일이 잦으므로, 이름보다 "지수의 실수부를 비교하는가, 크기를 비교하는가" 를 보는 편이 안전하다.

## Transseries

지수항 하나로는 함수를 다 적지 못한다. 모든 안장점을 한꺼번에 쓴 형식적 표현

$$
F(x) \;=\; \sum_{k \ge 0} \sigma^{k}\,e^{-kAx}\,x^{-kb}\sum_{n \ge 0} a_{n,k}\,x^{-n}
$$

을 **transseries** 라 한다. $k = 0$ 항이 보통의 점근급수이고, $\sigma$ 가 Stokes 상수이며 방향을 건널 때 값이 바뀐다. **Resurgence** 는 $k = 0$ 급수의 계수 $a_{n,0}$ 의 큰 $n$ 점근이 $k = 1$ 급수의 계수 $a_{n,1}$ 로 쓰인다는 사실을 말한다. 한 조각 안에 나머지 조각들이 되살아나 있다.

# 성질

## 계수 성장과 특이점의 사전

$\mathcal{B}[\tilde f]$ 가 $\zeta = A$ 에서 가장 가까운 특이점을 가지면 수렴 반경이 $\lvert A \rvert$ 이고, 따라서

$$
\limsup_{n\to\infty} \left\lvert \frac{a_n}{n!} \right\rvert^{1/n} = \frac{1}{\lvert A \rvert}
$$

가 성립한다. 거꾸로 계수를 몇십 개 계산해 $a_n/(n!\,A^{-n})$ 이 안정되는 $A$ 를 찾으면 특이점의 위치, 즉 보이지 않는 안장점의 작용을 수치로 읽어 낼 수 있다.

Stirling 급수가 좋은 예다. 그 Borel 변환의 특이점이 $\zeta = 2\pi i k$ 에 있어 $\lvert A \rvert = 2\pi$ 이고, 이로부터 [Euler–Maclaurin](euler-maclaurin.md) 에서 본 최적 절단 $K^* \approx \pi x$ 와 최소 오차 $e^{-2\pi x}$ 가 그대로 따라 나온다. 두 문서가 같은 수를 다른 쪽에서 본 셈이다.

## 최적 절단과 그 너머

점근급수는 항을 $n \approx \lvert A \rvert x$ 개까지 더할 때 오차가 최소가 되고, 그 최소값이 $e^{-\lvert A\rvert x}$ 규모다. 여기까지가 **superasymptotic** 정확도다. 남은 꼬리를 버리지 않고 다시 점근전개하면 정확도를 한 단계 더 올릴 수 있으며, 이를 **hyperasymptotic** 전개라 한다. 재합산은 이 계단을 끝까지 올라가 원리적으로 임의의 정확도에 도달하는 절차다.

## Stokes 승수는 매끄럽게 변한다

고전적인 서술에서 작은 항의 계수는 Stokes 선에서 0 에서 1 로 점프한다. Berry 는 최적 절단 부근에서 보면 그 전환이 매끄러움을 보였다. 적절한 국소 변수 $\sigma$ 에 대해 승수가

$$
S(\sigma) \;\approx\; \tfrac12\,\operatorname{erfc}(-\sigma)
$$

로 변한다. 점프는 급수를 성기게 볼 때 생기는 착시이고, 알맞은 해상도로 보면 오차함수 한 개의 매끄러운 계단이다.

## Airy 함수라는 표준 예

$\operatorname{Ai}(z)$ 는 안장점이 둘인 가장 간단한 예다. $\lvert \arg z\rvert < \pi/3$ 에서는 감쇠하는 안장점 하나가 지배해

$$
\operatorname{Ai}(z) \;\sim\; \frac{e^{-\frac23 z^{3/2}}}{2\sqrt{\pi}\,z^{1/4}}\sum_{n\ge0} (-1)^n\frac{c_n}{(\tfrac23 z^{3/2})^{n}}
$$

이고, 음의 실축 쪽으로 돌아가면 두 안장점의 기여가 합쳐져 진동하는 꼴이 된다. 그 사이 $\arg z = \pm 2\pi/3$ 에서 두 번째 지수항이 켜진다. "지수적으로 감쇠하는 해" 와 "진동하는 해" 가 같은 함수의 두 영역이라는 사실이 [WKB 근사](wkb-approximation.md)의 연결 공식이 하는 일이고, Stokes 가 1857 년에 실제로 본 현상이 이것이다.

# 활용

## 발산급수를 수치로 합산하기

Borel 변환을 유리함수로 근사(Padé)한 뒤 Laplace 적분하는 **Borel–Padé** 재합산이 표준 도구다. 아래에서 Euler 급수 $\sum (-1)^n n!\,z^n$ 을 최적 절단, Borel 적분 두 방식으로 계산해 비교한다. 이 급수의 정확한 합은 $\int_0^\infty e^{-t}/(1+zt)\,dt$ 다.

```python
import math

def truncated(z, N):
    return sum((-1) ** n * math.factorial(n) * z ** n for n in range(N))

def borel_sum(z, M=20000, T=60.0):
    # B[f](t) = sum (-1)^n (zt)^n = 1/(1+zt), 이어서 Laplace 적분
    h = T / M
    total = 0.0
    for k in range(M + 1):
        t = k * h
        w = 1.0 if 0 < k < M else 0.5
        total += w * math.exp(-t) / (1 + z * t)
    return total * h

for z in (0.1, 0.2, 0.3):
    exact = borel_sum(z)
    best_N = max(1, round(1 / z))          # 최적 절단 N ~ 1/z
    err = abs(truncated(z, best_N) - exact)
    print(f"z={z}  Borel={exact:.12f}  최적절단 N={best_N}"
          f"  오차={err:.2e}  e^(-1/z)={math.exp(-1/z):.2e}")
```

출력에서 최적 절단의 오차가 $e^{-1/z}$ 규모와 같은 자릿수로 나온다. 절단으로는 그 벽을 넘을 수 없고, Borel 합은 벽 너머의 값을 준다.

## 섭동론의 비섭동 효과

양자역학과 장론의 섭동급수도 계수가 $n!$ 로 커져 발산한다. 그 발산이 instanton 이라 불리는 고전해의 기여 $e^{-S/\hbar}$ 를 가리키며, 섭동급수의 애매함과 instanton 기여의 애매함이 정확히 상쇄되어야 물리량이 잘 정의된다. Resurgence 는 이 상쇄를 조직적으로 쓰는 언어를 준다.

## 계수에서 보이지 않는 구조 읽기

조합론에서 생성함수의 계수 점근을 다룰 때도 같은 사전이 쓰인다. 주도항 뒤에 숨은 지수적으로 작은 보정은 다른 특이점의 흔적이고, 그 위치는 계수 수열의 성장에서 역산된다. "급수가 발산하니 버린다" 가 아니라 "발산하는 방식이 정보다" 라는 관점의 전환이 이 이론의 실질적인 소득이다.[^1]

[^1]: John P. Boyd, *The Devil's Invention: Asymptotic, Superasymptotic and Hyperasymptotic Series*, Acta Applicandae Mathematicae 56 (1999), §§1–8. 최적 절단, 지수적으로 작은 항, Stokes 현상과 hyperasymptotic 전개의 개관.

# 연관 문서

## 선수지식

- [Laplace 방법과 안장점](laplace-method.md)

## 더 알아보기

- [WKB 근사와 연결 공식](wkb-approximation.md)

#analysis #complex_analysis #computation
