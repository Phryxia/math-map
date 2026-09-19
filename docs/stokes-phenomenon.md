# Stokes 현상과 재합산

# 개요

[Laplace 방법과 안장점](laplace-method.md)은 적분의 주도항을 안장점 하나에서 읽어 낸다. 매개변수를 복소평면에서 돌리면 어느 방향에서는 안장점 하나로 충분하고 다른 방향에서는 두 번째 안장점의 기여가 합류하는데, 이 교체가 **Stokes 현상**이다.

교체되는 항은 언제나 주도항보다 지수적으로 작다. [Euler–Maclaurin 공식과 점근급수](euler-maclaurin.md)에서 점근급수가 함수를 결정하지 못한다며 남겨 둔 $e^{-x}$ 규모의 항이 이것이다. 점근급수의 발산과 지수적으로 작은 항의 존재를 잇는 사전이 **Borel 변환**이다. 계수의 계승적 성장이 Borel 평면의 특이점으로 번역되고, 그 특이점을 어느 쪽으로 우회하느냐가 지수적으로 작은 항을 켜고 끈다.

발산급수에서 원래 함수를 되찾는 절차가 **재합산**(resummation)이고, 점근급수 하나의 계수 안에 다른 안장점의 급수가 들어 있다는 관찰이 Écalle 의 **resurgence** 이론이다.

# 직관

## 발산의 원인

점근급수의 계수가 $n!$ 규모로 커지는 원인은 급수가 보고 있지 않은 두 번째 안장점이다. 두 안장점의 작용 차이를 $A$ 라 하면

$$
a_n \thickspace\sim\thickspace \frac{C\thinspace\Gamma(n+b)}{A^{\thinspace n+b}}
$$

이다. $A$ 가 작을수록, 곧 두 안장점이 가까울수록 급수가 빨리 발산한다. 계수의 성장률을 재면 보이지 않는 안장점의 위치를 알아낼 수 있다.

## 특이점의 우회

$n!$ 을 $\Gamma$ 적분으로 풀어 급수를 적분으로 바꾸면 발산의 책임이 피적분함수의 극점 하나로 옮겨간다. 적분 경로가 그 극점 위로 지나느냐 아래로 지나느냐에 따라 답이 갈리고, 차이는 유수 하나로 크기가 $e^{-Ax}$ 다.

경로를 연속으로 움직이다 특이점을 건너는 순간 이 항이 붙는다. 함수 자체는 어디서도 불연속이 아니고, 불연속인 것은 점근전개를 몇 개의 지수항으로 쓰는가라는 기술 방식이다.

```mermaid
graph LR
  D["발산 점근급수<br/>a_n ~ n!/A^n"] --> B["Borel 변환<br/>수렴 반경 |A|"]
  B --> S["zeta = A 의 특이점"]
  S --> P["Laplace 적분 경로를<br/>위/아래로 우회"]
  P --> E["차이 = 지수적으로 작은 항<br/>~ e^{-Ax}"]
  E --> T["transseries<br/>모든 지수항을 함께 씀"]
```

## 켜지는 곳과 보이는 곳

$e^{-Ax}$ 가 주도항에 비해 가장 작은 방향에서 항이 켜지고, 두 항의 크기가 같아지는 방향에서 눈에 보인다. 무시해도 좋을 만큼 작을 때 붙어야 나중에 커졌을 때 함수가 연속으로 이어진다.

# 정의

## Borel 변환과 Borel 합

$x \to \infty$ 에서의 점근급수 $\tilde f(x) = \sum_{n \ge 0} a_n x^{-n-1}$ 에 대해 **Borel 변환**은

$$
\mathcal{B}\lbrack\tilde f\rbrack(\zeta) \thickspace=\thickspace \sum_{n \ge 0} \frac{a_n}{n!}\thinspace\zeta^{n}
$$

이다. $a_n$ 이 $n!$ 규모로 커져도 $\mathcal{B}[\tilde f]$ 는 양의 수렴 반경을 가진다. 이 함수를 해석적으로 연장한 뒤

$$
\mathcal{S}\_\theta \tilde f(x) \thickspace=\thickspace \int_0^{e^{i\theta}\infty} e^{-x\zeta}\thinspace\mathcal{B}\lbrack\tilde f\rbrack(\zeta)\thinspace d\zeta
$$

를 방향 $\theta$ 의 **Borel 합**이라 한다. 적분이 수렴하면 $\mathcal{S}\_\theta \tilde f$ 는 해석함수이고 그 점근전개가 원래 급수다.

## Stokes 선과 anti-Stokes 선

$\mathcal{B}[\tilde f]$ 의 특이점이 놓인 방향을 **특이 방향**이라 한다. 그 방향에서 적분 경로가 막히므로 좌우 극한 $\mathcal{S}\_{\theta^+}$ 와 $\mathcal{S}\_{\theta^-}$ 가 갈라지고, 두 값의 차이가 지수적으로 작은 항이며 그 계수를 **Stokes 상수**라 한다.

두 지수항 $e^{-A_1x}$ 와 $e^{-A_2x}$ 를 비교할 때의 관례는 다음과 같다.

| 선 | 조건 | 일어나는 일 |
|---|---|---|
| Stokes 선 | $(A_2 - A_1)x$ 가 양의 실수 | 작은 항의 계수가 켜지거나 꺼진다 |
| anti-Stokes 선 | $\lvert e^{-A_1x}\rvert = \lvert e^{-A_2x}\rvert$ | 두 항의 크기가 뒤바뀐다 |

물리 문헌은 두 이름을 반대로 쓰는 일이 잦으므로 지수의 실수부를 비교하는지 크기를 비교하는지를 보는 편이 안전하다.

## Transseries

모든 안장점을 한꺼번에 쓴 형식적 표현

$$
F(x) \thickspace=\thickspace \sum_{k \ge 0} \sigma^{k}\thinspace e^{-kAx}\thinspace x^{-kb}\sum_{n \ge 0} a_{n,k}\thinspace x^{-n}
$$

을 **transseries** 라 한다. $k = 0$ 항이 보통의 점근급수이고 $\sigma$ 가 Stokes 상수로 방향을 건널 때 값이 바뀐다. **Resurgence** 는 $k = 0$ 급수의 계수 $a_{n,0}$ 의 큰 $n$ 점근이 $k = 1$ 급수의 계수 $a_{n,1}$ 로 쓰인다는 사실이다.

# 성질

## 계수 성장과 특이점의 사전

$\mathcal{B}[\tilde f]$ 가 $\zeta = A$ 에서 가장 가까운 특이점을 가지면 수렴 반경이 $\lvert A \rvert$ 이므로

$$
\limsup_{n\to\infty} \left\lvert \frac{a_n}{n!} \right\rvert^{1/n} = \frac{1}{\lvert A \rvert}
$$

이다. 거꾸로 계수를 몇십 개 계산해 $a_n/(n!\thinspace A^{-n})$ 이 안정되는 $A$ 를 찾으면 보이지 않는 안장점의 작용을 수치로 읽는다.

Stirling 급수에서는 Borel 변환의 특이점이 $\zeta = 2\pi i k$ 에 있어 $\lvert A \rvert = 2\pi$ 이고, 여기서 [Euler–Maclaurin](euler-maclaurin.md) 의 최적 절단 $K^\ast \approx \pi x$ 와 최소 오차 $e^{-2\pi x}$ 가 따라 나온다.

## 최적 절단과 그 너머

점근급수는 항을 $n \approx \lvert A \rvert x$ 개까지 더할 때 오차가 최소가 되고 그 최소값이 $e^{-\lvert A\rvert x}$ 규모이며, 여기까지가 **superasymptotic** 정확도다. 남은 꼬리를 버리지 않고 다시 점근전개하면 정확도가 한 단계 올라가고, 이를 **hyperasymptotic** 전개라 한다. 재합산은 이 계단을 끝까지 올라가 원리적으로 임의의 정확도에 도달한다.

## Stokes 승수의 매끄러운 전환

고전적 서술에서 작은 항의 계수는 Stokes 선에서 0 에서 1 로 점프한다. Berry 는 최적 절단 부근에서 전환이 매끄러움을 보였다. 적절한 국소 변수 $\sigma$ 에 대해

$$
S(\sigma) \thickspace\approx\thickspace \tfrac12\thinspace\mathrm{erfc}(-\sigma)
$$

로 변한다. 점프는 급수를 성기게 볼 때 생기는 착시이고, 알맞은 해상도에서는 오차함수 하나의 매끄러운 계단이다.

## Airy 함수

$\mathrm{Ai}(z)$ 는 안장점이 둘인 가장 간단한 예다. $\lvert \arg z\rvert \lt\pi/3$ 에서는 감쇠하는 안장점 하나가 지배해

$$
\mathrm{Ai}(z) \thickspace\sim\thickspace \frac{e^{-\frac23 z^{3/2}}}{2\sqrt{\pi}\thinspace z^{1/4}}\sum_{n\ge0} (-1)^n\frac{c_n}{(\tfrac23 z^{3/2})^{n}}
$$

이고, 음의 실축 쪽으로 돌아가면 두 안장점의 기여가 합쳐져 진동한다. 그 사이 $\arg z = \pm 2\pi/3$ 에서 두 번째 지수항이 켜진다. 지수적으로 감쇠하는 해와 진동하는 해가 같은 함수의 두 영역이라는 것이 [WKB 근사](wkb-approximation.md)의 연결 공식이 하는 일이고, Stokes 가 1857 년에 본 현상이다.

# 활용

## Borel–Padé 재합산

Borel 변환을 유리함수로 근사(Padé)한 뒤 Laplace 적분하는 방식이 표준 도구다. Euler 급수 $\sum (-1)^n n!\thinspace z^n$ 의 정확한 합은 $\int_0^\infty e^{-t}/(1+zt)\thinspace dt$ 이고, 최적 절단과 Borel 적분을 비교할 수 있다.

최적 절단 $N\approx1/z$ 에서의 오차는 $e^{-1/z}$ 규모이고, 절단으로는 그 벽을 넘지 못한다. Borel 합은 벽 너머의 값을 준다.

## 섭동론의 비섭동 효과

양자역학과 장론의 섭동급수도 계수가 $n!$ 로 커져 발산한다. 그 발산이 instanton 이라 불리는 고전해의 기여 $e^{-S/\hbar}$ 를 가리키며, 섭동급수의 애매함과 instanton 기여의 애매함이 상쇄되어야 물리량이 잘 정의된다. Resurgence 가 이 상쇄를 조직적으로 다루는 언어다.

## 계수 성장에서 읽는 구조

조합론에서 생성함수의 계수 점근에도 같은 사전이 쓰인다. 주도항 뒤에 숨은 지수적으로 작은 보정은 다른 특이점의 흔적이고, 그 위치는 계수 수열의 성장에서 역산된다.[^1]

[^1]: John P. Boyd, *The Devil's Invention: Asymptotic, Superasymptotic and Hyperasymptotic Series*, Acta Applicandae Mathematicae 56 (1999), §§1–8. 최적 절단, 지수적으로 작은 항, Stokes 현상과 hyperasymptotic 전개의 개관.

# 연관 문서

## 선수지식

- [Laplace 방법과 안장점](laplace-method.md)

## 더 알아보기

- [Airy 함수](airy-functions.md)
- [Resurgence 와 alien 미분](resurgence.md)
- [Padé 근사와 Borel 재합산](borel-pade.md)

#analysis #complex_analysis #computation
