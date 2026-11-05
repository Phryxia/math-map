# Stokes 현상

# 개요

**Stokes 현상(Stokes phenomenon)** 은 큰 매개변수에 대한 근사식이, 매개변수가 복소평면의 어느 방향으로 커지느냐에 따라 다른 꼴을 갖는 현상이다. 예로 [Airy 함수](airy-functions.md) $\mathrm{Ai}(x)$ 는 하나의 해석함수인데 $x\to+\infty$ 에서는 지수적으로 작아지고 $x\to-\infty$ 에서는 진동해, 두 쪽의 근사식이 다르다. Stokes 현상은 근사식에 붙는 지수적으로 작은 항이 어느 방향에서 나타나고 사라지는지를 정해 방향마다 다른 근사식을 하나의 함수로 잇는다.

# 직관

$x\gt 0$ 에서 $F(x)=\int_0^\infty e^{-x\zeta}/(1+\zeta)\thinspace d\zeta$ 를 큰 $x$ 에 대해 근사한다. $1/(1+\zeta)=\sum(-\zeta)^n$ 을 넣고 항별로 적분하면 $\sum_{n\ge0}(-1)^nn!\thinspace x^{-n-1}$ 이 나온다. 계수가 $n!$ 로 커져 이 급수는 어떤 $x$ 에서도 수렴하지 않지만, 큰 $x$ 에서 앞의 몇 항은 $F$ 를 잘 근사하는 [점근급수](asymptotic-series.md)다. 이 근사는 지수의 최대점 하나(여기서는 끝점 $\zeta=0$)에서 주항을 얻는 [Laplace 방법](laplace-method.md)과 같은 꼴이다.

$x=re^{i\phi}$ 로 두고 $\phi$ 를 $0$ 에서 키운다. 적분이 수렴하도록 경로를 $\zeta$ 평면의 반직선 $\arg\zeta=-\phi$ 로 돌리면, 같은 점근급수가 계속 $F$ 를 근사한다. $\phi$ 가 $\pi$ 에 이르면 경로의 방향이 음의 실축이 되어 $1/(1+\zeta)$ 의 극 $\zeta=-1$ 을 지난다.

극을 위로 지나는 경로와 아래로 지나는 경로의 적분값은 극의 유수만큼 다르고, 그 차는 $2\pi i\thinspace e^{x}$ 다. $\arg x=\pi$ 근처에서 $\vert e^{x}\vert=e^{-r}$ 이므로 이 항은 급수의 어떤 항보다도 작다. 그래서 $\arg x=\pi$ 를 건너면 같은 함수의 점근식에 $2\pi i\thinspace e^{x}$ 가 더해진다.

더해진 항은 $x$ 를 더 돌려 $\mathrm{Re}\thinspace x=0$ 에 이르면 크기가 $1$ 이 되어 급수의 주항 $1/x$ 보다 커진다. 점근식이 방향에 따라 다른 지수항을 갖는 것이 Stokes 현상이다.

# 정의

## Borel 변환과 Borel 합

$x \to \infty$ 에서의 점근급수 $\tilde f(x) = \sum_{n \ge 0} a_n x^{-n-1}$ 에 대해 **Borel 변환(Borel transform)** 은

$$
\mathcal{B}\lbrack\tilde f\rbrack(\zeta) \thickspace=\thickspace \sum_{n \ge 0} \frac{a_n}{n!}\thinspace\zeta^{n}
$$

이다. $a_n$ 이 $n!$ 규모로 커져도 $\mathcal{B}[\tilde f]$ 는 양의 수렴 반경을 가진다. 직관 절의 급수는 $a_n=(-1)^nn!$ 이므로 $\mathcal{B}\lbrack\tilde f\rbrack(\zeta)=\sum(-\zeta)^n=1/(1+\zeta)$ 다. 이 함수를 해석적으로 연장한 뒤

$$
\mathcal{S}\_\theta \tilde f(x) \thickspace=\thickspace \int_0^{e^{i\theta}\infty} e^{-x\zeta}\thinspace\mathcal{B}\lbrack\tilde f\rbrack(\zeta)\thinspace d\zeta
$$

를 방향 $\theta$ 의 **Borel 합(Borel sum)** 이라 한다. 적분이 수렴하면 $\mathcal{S}\_\theta \tilde f$ 는 해석함수이고 그 점근전개가 원래 급수다. 직관 절의 $F$ 는 $\theta=0$ 인 Borel 합이다.

## Stokes 선과 anti-Stokes 선

$\mathcal{B}[\tilde f]$ 의 특이점이 놓인 방향을 **특이 방향(singular direction)** 이라 한다. 그 방향에서는 적분 경로가 특이점을 지나므로 좌우 극한 $\mathcal{S}\_{\theta^+}$ 와 $\mathcal{S}\_{\theta^-}$ 가 갈라지고, 두 값의 차이가 지수적으로 작은 항이며 그 계수를 **Stokes 상수(Stokes constant)** 라 한다. 직관 절의 예에서 특이 방향은 $\theta=\pi$ 이고, 차이는 $2\pi i\thinspace e^{x}$, Stokes 상수는 $2\pi i$ 다.

두 지수항 $e^{-A_1x}$ 와 $e^{-A_2x}$ 를 비교할 때의 관례는 다음과 같다.

| 선 | 조건 | 일어나는 일 |
|---|---|---|
| Stokes 선(Stokes line) | $(A_2 - A_1)x$ 가 양의 실수 | 작은 항의 계수가 바뀐다 |
| anti-Stokes 선(anti-Stokes line) | $\lvert e^{-A_1x}\rvert = \lvert e^{-A_2x}\rvert$ | 두 항의 크기가 뒤바뀐다 |

직관 절의 예에서 급수는 지수가 없으므로 $A_1=0$ 이고, 더해지는 항 $e^{x}$ 는 $A_2=-1$ 이다. Stokes 선은 $-x\gt 0$, 곧 $\arg x=\pi$ 이고, anti-Stokes 선은 $\vert e^{x}\vert=1$, 곧 $\mathrm{Re}\thinspace x=0$ 이다. 작은 항의 계수는 그 항이 무시해도 좋을 크기일 때 바뀌므로, 그 항이 커지는 방향에서도 함수가 연속으로 이어진다.

물리 문헌은 두 이름을 반대로 쓰는 일이 잦으므로 지수의 실수부를 비교하는지 크기를 비교하는지를 보는 편이 안전하다.

## Transseries

모든 안장점을 한꺼번에 쓴 형식적 표현

$$
F(x) \thickspace=\thickspace \sum_{k \ge 0} \sigma^{k}\thinspace e^{-kAx}\thinspace x^{-kb}\sum_{n \ge 0} a_{n,k}\thinspace x^{-n}
$$

을 **transseries** 라 한다. $k = 0$ 항이 보통의 점근급수이고 $\sigma$ 가 Stokes 상수로 방향을 건널 때 값이 바뀐다. [Resurgence 이론](resurgence.md)에서 다루는 resurgence 는 $k = 0$ 급수의 계수 $a_{n,0}$ 의 큰 $n$ 점근이 $k = 1$ 급수의 계수 $a_{n,1}$ 로 쓰인다는 사실이다.

# 성질

## 계수 성장과 특이점의 위치

$\mathcal{B}[\tilde f]$ 가 $\zeta = A$ 에서 가장 가까운 특이점을 가지면 수렴 반경이 $\lvert A \rvert$ 이므로

$$
\limsup_{n\to\infty} \left\lvert \frac{a_n}{n!} \right\rvert^{1/n} = \frac{1}{\lvert A \rvert}
$$

이다. 거꾸로 계수를 몇십 개 계산해 $a_n/(n!\thinspace A^{-n})$ 이 안정되는 $A$ 를 찾으면 급수에 나타나지 않는 안장점의 작용을 수치로 얻는다.

Stirling 급수에서는 Borel 변환의 특이점이 $\zeta = 2\pi i k$ 에 있어 $\lvert A \rvert = 2\pi$ 이고, 여기서 [Euler–Maclaurin 공식](euler-maclaurin.md)의 최적 절단(optimal truncation) $K^\ast \approx \pi x$ 와 최소 오차 $e^{-2\pi x}$ 가 나온다.

## 최적 절단과 그 너머

점근급수는 항을 $n \approx \lvert A \rvert x$ 개까지 더할 때 오차가 최소가 되고 그 최솟값이 $e^{-\lvert A\rvert x}$ 규모이며, 여기까지가 **superasymptotic** 정확도다. 남은 꼬리를 버리지 않고 다시 점근전개하면 오차가 더 줄고, 이를 **hyperasymptotic** 전개라 한다. 발산급수에서 함수값을 다시 얻는 절차를 재합산(resummation)이라 하고, Borel 합으로 재합산하면 함수값 자체가 나온다.

## Stokes 승수의 매끄러운 전환

고전적 서술에서 작은 항의 계수는 Stokes 선에서 0 에서 1 로 점프한다. Berry 는 최적 절단 부근에서 전환이 매끄러움을 보였다. 적절한 국소 변수 $\sigma$ 에 대해

$$
S(\sigma) \thickspace\approx\thickspace \tfrac12\thinspace\mathrm{erfc}(-\sigma)
$$

로 변한다. $\mathrm{erfc}$ 는 여오차함수(complementary error function)다. 계수가 $0$ 에서 $1$ 로 뛰는 것은 급수를 고정된 차수에서 볼 때의 서술이고, 최적 절단에 맞춘 국소 변수로는 계수가 오차함수 꼴로 매끄럽게 변한다.

## Airy 함수

Airy 함수 $\mathrm{Ai}(z)$ 는 안장점이 둘인 가장 간단한 예다. $\lvert \arg z\rvert \lt\pi/3$ 에서는 감쇠하는 안장점 하나가 지배해

$$
\mathrm{Ai}(z) \thickspace\sim\thickspace \frac{e^{-\frac23 z^{3/2}}}{2\sqrt{\pi}\thinspace z^{1/4}}\sum_{n\ge0} (-1)^n\frac{c_n}{(\tfrac23 z^{3/2})^{n}}
$$

이고, 음의 실축 쪽으로 돌아가면 두 안장점의 기여가 합쳐져 진동한다. 그 사이 $\arg z = \pm 2\pi/3$ 에서 두 번째 지수항이 켜진다. 지수적으로 감쇠하는 해와 진동하는 해가 같은 함수의 두 영역이라는 것이 [WKB 근사](wkb-approximation.md)(Wentzel–Kramers–Brillouin)의 연결 공식이 하는 일이고, Stokes 가 1857 년에 본 현상이다.

# 활용

## Borel–Padé 재합산

Borel 변환을 유리함수로 근사(Padé)한 뒤 Laplace 적분하는 [Borel–Padé 재합산](borel-pade.md)이 표준 도구다. Euler 급수 $\sum (-1)^n n!\thinspace z^n$ 의 정확한 합은 $\int_0^\infty e^{-t}/(1+zt)\thinspace dt$ 이고, 최적 절단과 Borel 적분을 비교할 수 있다.

최적 절단 $N\approx1/z$ 에서의 오차는 $e^{-1/z}$ 규모이고, 절단으로는 오차를 그보다 줄일 수 없다. Borel 합은 함수값 자체를 준다.

## 섭동론의 비섭동 효과

양자역학과 장론의 섭동급수도 계수가 $n!$ 로 커져 발산한다. 그 발산률은 instanton 이라 불리는 고전해의 기여 $e^{-S/\hbar}$ 의 지수 $S$ 와 같고, 섭동급수의 애매함과 instanton 기여의 애매함이 상쇄되어야 물리량이 잘 정의된다. Resurgence 이론이 이 상쇄를 다룬다.

## 생성함수의 계수 점근

조합론에서 [생성함수](generating-functions.md)의 계수 점근에도 특이점과 계수 성장의 같은 대응을 쓴다. 주항 뒤의 지수적으로 작은 보정은 다른 특이점에서 나오고, 그 위치는 계수 수열의 성장에서 계산된다[^1].

[^1]: John P. Boyd, *The Devil's Invention: Asymptotic, Superasymptotic and Hyperasymptotic Series*, Acta Applicandae Mathematicae 56 (1999), §§1–8. 최적 절단, 지수적으로 작은 항, Stokes 현상과 hyperasymptotic 전개의 개관.

# 연관 문서

## 선수지식

- [Laplace 방법](laplace-method.md)

## 더 알아보기

- [Airy 함수](airy-functions.md)
- [Resurgence 이론](resurgence.md)
- [Borel–Padé 재합산](borel-pade.md)

#analysis #complex_analysis #computation
