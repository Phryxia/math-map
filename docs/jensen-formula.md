# Jensen 공식

# 개요

**Jensen 공식(Jensen's formula)** 은 정칙함수의 원 위 크기 평균과 원 안 영점의 위치를 잇는 등식이다. 원판 $\vert z\vert\le 1$ 위에서 $\vert f\vert\le 10$ 이고 $f(0)=1$ 인 정칙함수가 원판 $\vert z\vert\le 1/2$ 안에 영점을 몇 개까지 가질 수 있는지 물으면, $f$ 의 식을 몰라 영점을 구할 수 없다.

이 공식은 영점 하나마다 원 위의 $\log\vert f\vert$ 평균이 중심값보다 정해진 양만큼 커진다는 것을 주고, 그 차이의 합을 $\log 10$ 으로 묶어 영점 개수의 상계 $\log\_2 10\lt 4$ 를 낸다.

# 직관

영점이 없는 정칙함수 $f$ 에서 $\log\vert f\vert$ 는 [조화함수](harmonic-functions.md)이므로, 원 위의 평균이 중심값과 같다. $f(z)=e^z$ 이면 $\log\vert f(z)\vert=\mathrm{Re}\thinspace z$ 이고, 단위원 위에서 $\cos\theta$ 의 평균은 $0$ 으로 $\log\vert f(0)\vert=0$ 과 같다.

$f(z)=z-1/2$ 는 단위원판 안의 점 $1/2$ 에서 $0$ 이 된다. 중심값은 $\log\vert f(0)\vert=\log(1/2)$ 다. 단위원 위의 평균은 다음과 같다.

$$
\frac{1}{2\pi}\int_0^{2\pi}\log\vert e^{i\theta}-1/2\vert\thinspace d\theta=\frac{1}{2\pi}\int_0^{2\pi}\log\vert 1-e^{-i\theta}/2\vert\thinspace d\theta=0
$$

둘째 피적분함수는 영점이 없는 $1-z/2$ 의 $\log\vert\cdot\vert$ 를 단위원에서 본 것이므로 평균이 중심값 $\log 1=0$ 이다.

평균 $0$ 이 중심값 $\log(1/2)$ 보다 $\log 2$ 만큼 크다. 영점을 $a$ 로 옮기면 같은 계산에서 차이는 $\log(1/\vert a\vert)$ 다. 영점이 중심에 가까울수록 차이가 크고, 원에 가까울수록 $0$ 에 가깝다.

영점이 여럿이면 차이가 영점마다 더해진다. 이 등식이 Jensen 공식이다.

# 정의

$f$ 가 닫힌 원판 $\vert z\vert\le r$ 을 포함하는 열린집합에서 [정칙함수](holomorphic-functions.md)일 때, $t\le r$ 에 대해 $n(t)$ 는 $\vert z\vert\le t$ 안의 영점 개수를 중복도까지 세어 더한 값이다. $f(z)=z-1/2$ 이면 $t\lt 1/2$ 에서 $n(t)=0$, $t\ge 1/2$ 에서 $n(t)=1$ 이다.

$\vert a\vert\lt r$ 인 $a$ 에 대해 **Blaschke 인자(Blaschke factor)** 는 다음 함수다.

$$
B\_a(z)=\frac{r(z-a)}{r^2-\bar az}
$$

$B\_a$ 는 $a$ 에서만 $0$ 이 되고 원 $\vert z\vert=r$ 위에서 $\vert B\_a\vert=1$ 이다. $r=1$, $a=1/2$ 이면 $B\_{1/2}(z)=(z-1/2)/(1-z/2)$ 이고, 직관 절의 $z-1/2$ 은 $B\_{1/2}$ 에 영점 없는 함수 $1-z/2$ 를 곱한 것이다.

# 성질

## Jensen 공식

*정리.* $f$ 가 $\vert z\vert\le r$ 을 포함하는 열린집합에서 정칙이고 $f(0)\neq 0$ 이며, 원판 $\vert z\vert\lt r$ 안의 영점이 중복도까지 세어 $a\_1,\dots,a\_n$ 이고 원 위에 영점이 없으면 다음이 성립한다[^1].

$$
\frac{1}{2\pi}\int_0^{2\pi}\log\vert f(re^{i\theta})\vert\thinspace d\theta=\log\vert f(0)\vert+\sum_{k=1}^{n}\log\frac{r}{\vert a\_k\vert}
$$

*증명의 요지.* $g=f/(B\_{a\_1}\cdots B\_{a\_n})$ 은 원판에서 영점이 없는 정칙함수이므로 $\log\vert g\vert$ 의 원 위 평균은 $\log\vert g(0)\vert$ 다. 원 위에서 $\vert B\_{a\_k}\vert=1$ 이므로 $\vert g\vert=\vert f\vert$ 다. 중심에서 $\vert B\_{a\_k}(0)\vert=\vert a\_k\vert/r$ 이므로 $\log\vert g(0)\vert=\log\vert f(0)\vert+\sum\_k\log(r/\vert a\_k\vert)$ 다. ∎

원 위에 영점이 있어도 $\log\vert e^{i\theta}-1\vert$ 이 적분 가능하고 그 평균이 $0$ 이므로 같은 등식이 성립한다.

## 영점 세는 함수로 쓴 꼴

각 영점 $a$ 에서 $\log(r/\vert a\vert)$ 는 다음 적분과 같다.

$$
\log\frac{r}{\vert a\vert}=\int_{\vert a\vert}^{r}\frac{dt}{t}
$$

영점마다 더하면 $t$ 에서 피적분함수에 $n(t)$ 가 곱해지므로 Jensen 공식은 다음 꼴이 된다.

$$
\int_0^{r}\frac{n(t)}{t}\thinspace dt=\frac{1}{2\pi}\int_0^{2\pi}\log\vert f(re^{i\theta})\vert\thinspace d\theta-\log\vert f(0)\vert
$$

## 영점 개수의 상계

*따름정리.* $\vert z\vert\le R$ 에서 $\vert f\vert\le M$ 이고 $f(0)\neq 0$ 이면 $r\lt R$ 에 대해 다음이 성립한다.

$$
n(r)\le\frac{\log(M/\vert f(0)\vert)}{\log(R/r)}
$$

$n$ 은 증가함수이므로 $r$ 부터 $R$ 까지의 적분은 $n(r)\log(R/r)$ 이상이다. 이 적분은 $0$ 부터 $R$ 까지의 적분 이하이고, 앞 절의 식에서 그 값은 $\log M-\log\vert f(0)\vert$ 이하이므로 부등식이 나온다. 개요의 $M=10$, $f(0)=1$, $R=1$, $r=1/2$ 를 넣으면 $n(1/2)\le\log\_2 10\approx 3.32$ 이므로 영점은 셋 이하다.

## 증가 위수와 영점 밀도

전해석함수 $f$ 가 상수 $C$, $\rho$ 에 대해 $\vert f(z)\vert\le\exp(C\vert z\vert^\rho)$ 를 만족하고 $f(0)\neq 0$ 이면, 앞의 따름정리에 $R=2r$ 을 넣어 다음을 얻는다.

$$
n(r)\le\frac{C(2r)^\rho-\log\vert f(0)\vert}{\log 2}=O(r^\rho)
$$

$f(z)=\sin(\pi z)/(\pi z)$ 는 $\vert f(z)\vert\le e^{\pi\vert z\vert}$ 이고 영점이 $\pm 1,\pm 2,\dots$ 이므로 $n(r)$ 은 대략 $2r$ 이다. 상계 $O(r)$ 과 차수가 같다.

## Blaschke 조건

단위원판에서 유계인 정칙함수 $f\not\equiv 0$ 의 영점 $a\_k$ 는 다음을 만족한다.

$$
\sum_k(1-\vert a\_k\vert)\lt\infty
$$

$f(0)\neq 0$ 이면 Jensen 공식에서 반지름 $r\lt 1$ 안의 영점에 대해 $\sum\_k\log(r/\vert a\_k\vert)\le\log M-\log\vert f(0)\vert$ 다. $r\to 1$ 로 보내고 $\log(1/x)\ge 1-x$ 를 쓰면 위의 합이 유계다. $f(0)=0$ 이면 $f$ 를 $z^m$ 으로 나눈 함수에 같은 논증을 쓴다.

## 유리형함수

$f$ 가 원판에서 유리형이고 극이 중복도까지 세어 $b\_1,\dots,b\_p$ 이면 극마다 반대 부호의 항이 붙는다.

$$
\frac{1}{2\pi}\int_0^{2\pi}\log\vert f(re^{i\theta})\vert\thinspace d\theta=\log\vert f(0)\vert+\sum_{k=1}^{n}\log\frac{r}{\vert a\_k\vert}-\sum_{j=1}^{p}\log\frac{r}{\vert b\_j\vert}
$$

$f$ 를 영점만 갖는 두 정칙함수의 몫으로 쓰고 각각에 정리를 적용하면 나온다.

# 활용

- [Weierstrass 인수분해 정리](weierstrass-factorization.md)의 Hadamard 인수분해에서 위수 $\rho$ 인 전해석함수의 영점 개수 $n(r)=O(r^{\rho+\varepsilon})$ 을 증가 위수와 영점 밀도의 따름정리로 얻는다. 이 상계에서 $\sum\_k\vert a\_k\vert^{-s}$ 가 $s\gt\rho$ 에서 수렴하고, 기본 인수의 차수를 $\rho$ 이하로 고를 수 있다.
- [Riemann zeta 함수](riemann-zeta.md)의 영점 개수 추정에 쓴다. 높이 $T$ 근처의 점을 중심으로 하는 원판에 Jensen 공식을 적용하면 높이 $T$ 와 $T+1$ 사이의 비자명 영점이 $O(\log T)$ 개다[^2].
- 정수 계수 다항식 $p(z)=c\prod\_k(z-\alpha\_k)$ 의 [Mahler 측도](mahler-measure.md)는 단위원 위 $\log\vert p\vert$ 평균의 지수이고, Jensen 공식에서 $\vert c\vert\prod\_k\max(1,\vert\alpha\_k\vert)$ 와 같다. $p(z)=z-2$ 이면 $2$ 다.
- [Nevanlinna 이론](nevanlinna-theory.md)은 유리형함수 꼴의 Jensen 공식을 함숫값 $w$ 마다 $f-w$ 에 적용해, 원 위의 $\log\vert f\vert$ 평균과 $f=w$ 의 해의 개수를 비교한다. [Picard 정리](picard-theorems.md)는 이 비교의 한 따름이다.

[^1]: L. V. Ahlfors, *Complex Analysis*, 3rd ed., McGraw-Hill, 1979, 5 장 3 절 — Jensen 공식과 Hadamard 정리.
[^2]: H. Davenport, *Multiplicative Number Theory*, 3rd ed., Graduate Texts in Mathematics 74, Springer, 2000, 15 장 — 임계띠의 영점 개수.

# 연관 문서

## 선수지식

- [조화함수](harmonic-functions.md)

## 더 알아보기

- [Nevanlinna 이론](nevanlinna-theory.md)
- [Mahler 측도](mahler-measure.md)

#complex_analysis #analysis #number_theory
