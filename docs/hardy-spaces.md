# Hardy 공간

# 개요

**Hardy 공간(Hardy space)** 은 단위원판의 정칙함수 가운데 반지름 $r$ 인 원 위의 평균 크기가 $r$ 에 관계없이 유계인 것들의 공간이다. $f(z)=-\log(1-z)$ 는 $z\to 1$ 에서 무한대로 가므로 유계가 아니지만, 원 위에서 $\vert f\vert^2$ 를 평균 내면 $r$ 이 $1$ 에 가까워져도 $\pi^2/6$ 을 넘지 않는다. 이런 함수가 단위원 위에 경계값을 갖는지, 경계값만으로 함수가 정해지는지가 물음이다.

제곱 평균을 쓰는 $H^2$ 는 단위원 위의 제곱 적분가능 함수 가운데 음의 진동수 성분이 없는 것들과 같다. 그래서 원판 안의 정칙함수와 원 위의 [Fourier 급수](fourier-series.md)가 서로를 정한다.

# 직관

$f(z)=\sum\_{n\ge 0}a\_nz^n$ 을 원 $z=re^{i\theta}$ 위에서 보면 $\theta$ 의 Fourier 급수 $\sum\_na\_nr^ne^{in\theta}$ 다. Parseval 등식에서 다음이 성립한다.

$$
\frac{1}{2\pi}\int_0^{2\pi}\vert f(re^{i\theta})\vert^2\thinspace d\theta=\sum_{n\ge 0}\vert a\_n\vert^2r^{2n}
$$

우변은 $r$ 에 대해 증가하므로 $r\lt 1$ 에서 유계일 필요충분조건은 $\sum\_n\vert a\_n\vert^2\lt\infty$ 다. $-\log(1-z)=\sum\_{n\ge 1}z^n/n$ 은 $\sum 1/n^2=\pi^2/6$ 이어서 이 조건을 만족한다. $1/(1-z)=\sum z^n$ 은 계수가 모두 $1$ 이어서 만족하지 않는다.

조건을 만족하면 $\sum\_na\_ne^{in\theta}$ 는 원 위의 제곱 적분가능 함수이고, 음의 진동수 계수가 모두 $0$ 이다. 역으로 그런 함수의 계수로 멱급수를 만들면 원판의 정칙함수가 된다. $-\log(1-z)$ 의 경계값은 $\sum e^{in\theta}/n=-\log(1-e^{i\theta})$ 이고, $\theta=0$ 한 점에서만 무한대다.

# 정의

$0\lt p\lt\infty$ 일 때 **Hardy 공간** $H^p$ 는 단위원판 $\mathbb D$ 의 정칙함수 $f$ 가운데 다음 값이 유한한 것들의 집합이다.

$$
\Vert f\Vert\_{H^p}^p=\sup_{0\lt r\lt 1}\frac{1}{2\pi}\int_0^{2\pi}\vert f(re^{i\theta})\vert^p\thinspace d\theta
$$

$H^\infty$ 는 $\mathbb D$ 에서 유계인 정칙함수의 집합이고 노름은 $\sup\vert f\vert$ 다. $p\le q$ 이면 $H^q\subseteq H^p$ 다. $-\log(1-z)$ 는 모든 $p\lt\infty$ 에서 $H^p$ 에 속하지만 $H^\infty$ 에 속하지 않는다. $1/(1-z)$ 는 $p\lt 1$ 에서 $H^p$ 에 속하고 $H^1$ 에는 속하지 않는다.

$H^\infty$ 의 원소 $u$ 가 원 위 거의 모든 점에서 경계값의 절댓값이 $1$ 이면 **내부 함수(inner function)** 라 한다. [Blaschke 곱](blaschke-products.md)은 내부 함수다. $\exp(-(1+z)/(1-z))$ 는 영점이 없는 내부 함수다.

$H^p$ 의 원소 $F$ 가 원 위의 함수 $\varphi\ge 0$, $\log\varphi\in L^1$ 에 대해 다음 꼴이면 **외부 함수(outer function)** 라 한다.

$$
F(z)=\exp\left(\frac{1}{2\pi}\int_0^{2\pi}\frac{e^{it}+z}{e^{it}-z}\log\varphi(t)\thinspace dt\right)
$$

외부 함수는 영점이 없고 경계값의 절댓값이 $\varphi$ 다. $1-z$ 는 외부 함수다.

# 성질

## 경계값

*정리.* $f\in H^p$ 이면 거의 모든 $\theta$ 에서 극한 $f(e^{i\theta})=\lim\_{r\to 1}f(re^{i\theta})$ 가 존재하고 [Lᵖ 공간](lp-spaces.md)의 원소다. $p\ge 1$ 이면 $f(re^{i\theta})\to f(e^{i\theta})$ 가 $L^p$ 노름으로 수렴하고 $\Vert f\Vert\_{H^p}$ 가 경계값의 $L^p$ 노름과 같다[^1].

$p\ge 1$ 이면 $f$ 는 경계값의 Poisson 적분이고, 이로써 $H^p$ 를 원 위 $L^p$ 함수 가운데 음의 Fourier 계수가 모두 $0$ 인 것들의 닫힌 부분공간으로 본다. $H^2$ 는 [Hilbert 공간](hilbert-spaces.md) $L^2$ 의 닫힌 부분공간이고, $L^2$ 에서 $H^2$ 로 가는 직교사영은 음의 계수를 지운다.

## 영점과 인수분해

$f\in H^p$, $f\not\equiv 0$ 의 영점은 Blaschke 조건을 만족하고, $f=Bg$ 로 쓰인다. $B$ 는 영점의 Blaschke 곱이고 $g\in H^p$ 는 영점이 없으며 $\Vert g\Vert\_{H^p}=\Vert f\Vert\_{H^p}$ 다. 이것을 더 나누면 $f=uF$ 이고 $u$ 는 내부 함수, $F$ 는 경계값이 $\vert f(e^{i\theta})\vert$ 인 외부 함수다. 이 인수분해는 상수 배를 빼고 유일하다[^1].

## F. Riesz 와 M. Riesz 정리

$f\in H^1$, $f\not\equiv 0$ 이면 $\log\vert f(e^{i\theta})\vert$ 가 적분가능하다. 그러므로 경계값은 양의 측도인 집합에서 $0$ 이 될 수 없다. 원 위의 복소 측도 $\mu$ 의 음의 Fourier 계수가 모두 $0$ 이면 $\mu$ 는 Lebesgue 측도에 대해 절대연속이다(F. and M. Riesz theorem)[^1].

## Beurling 정리

$H^2$ 의 닫힌 부분공간 $M$ 이 $z$ 를 곱하는 연산에 대해 닫혀 있고 $\lbrace 0\rbrace$ 이 아니면, 어떤 내부 함수 $u$ 에 대해 $M=uH^2$ 다(Beurling's theorem)[^2]. $1/2$ 에서 $0$ 이 되는 $H^2$ 함수 전체는 이런 부분공간이고, $u$ 는 Blaschke 인자 $b\_{1/2}$ 다.

# 활용

- Toeplitz 작용소(Toeplitz operator)는 $L^2$ 함수 $a$ 를 곱한 뒤 $H^2$ 로 사영하는 연산자다. [Fredholm 연산자](fredholm-operators.md)의 지표 공식은 연속인 $a$ 에 대해 지표를 $a$ 가 원점을 감는 횟수로 준다.
- [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md)의 필요성 증명은 $H^2$ 의 재생핵 $1/(1-z\bar\zeta)$ 와 $H^\infty$ 함수를 곱하는 연산자의 노름을 쓴다.
- 신호처리의 인과적 필터는 전달함수가 Hardy 공간에 속하는 필터다. 경계값의 절댓값 $\vert H(e^{i\theta})\vert$ 만 주어질 때 그 크기를 갖는 최소 위상 필터가 외부 함수다.
- 정상 과정의 예측 이론에서 Szegő 정리(Szegő's theorem)는 스펙트럼 밀도 $w$ 로 한 걸음 예측 오차를 $\exp\left(\frac{1}{2\pi}\int\log w\right)$ 로 준다. 오차가 양수일 조건이 $\log w\in L^1$ 이고, 이것은 F. Riesz 와 M. Riesz 정리의 적분가능 조건과 같은 꼴이다.

[^1]: P. L. Duren, *Theory of Hᵖ Spaces*, Academic Press, 1970, 1–2 장 — 경계값, 인수분해, F. and M. Riesz 정리.
[^2]: A. Beurling, "On two problems concerning linear transformations in Hilbert space", *Acta Math.* 81 (1949), 239–255.

# 연관 문서

## 선수지식

- [Fourier 급수](fourier-series.md)
- [Blaschke 곱](blaschke-products.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #functional_analysis #analysis #signal_processing
