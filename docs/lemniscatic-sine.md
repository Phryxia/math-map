# 렘니스케이트 사인

# 개요

**렘니스케이트 사인(lemniscatic sine)** 은 원 대신 렘니스케이트라는 8 자 모양 곡선의 호의 길이로 정의한 사인 함수이고, $\mathrm{sl}$ 로 쓴다. 원에서 길이 $s$ 인 호의 끝점 높이가 $\sin s$ 이듯, 렘니스케이트에서 원점부터 길이 $s$ 만큼 곡선을 따라간 점과 원점 사이의 거리가 $\mathrm{sl}\thinspace s$ 다. 렘니스케이트의 호를 같은 길이로 $n$ 등분하는 점을 자와 컴퍼스로 작도할 수 있는지는 호의 길이만 보아서는 정할 수 없다.

렘니스케이트 사인의 덧셈 정리와 주기가 이 물음을 원을 $n$ 등분하는 문제와 같은 꼴의 대수 방정식으로 바꾼다.

# 직관

Bernoulli 렘니스케이트(lemniscate of Bernoulli)는 극좌표로 $r^2=\cos 2\theta$ 인 곡선이고, 원점에서 교차하는 두 고리로 되어 있다. 원점에서 출발해 원점과의 거리가 $r$ 인 점까지 곡선을 따라간 길이는 다음이다.

$$s(r)=\int_0^r\frac{dt}{\sqrt{1-t^4}}$$

원의 경우 같은 계산에서 $\int_0^x dt/\sqrt{1-t^2}=\arcsin x$ 가 나온다. 원의 호의 길이를 뒤집은 함수가 $\sin$ 이므로, 렘니스케이트에서는 $s(r)$ 을 뒤집은 함수 $r=\mathrm{sl}(s)$ 를 쓴다.

한 고리의 길이의 절반, 곧 원점에서 가장 먼 점 $r=1$ 까지의 길이는 $s(1)\approx 1.311029$ 다. 원에서 $\pi/2$ 가 하는 역할을 이 값이 하므로 $\varpi=2s(1)\approx 2.622057$ 로 두고 렘니스케이트 상수(lemniscate constant)라 한다. 렘니스케이트 전체의 길이는 $2\varpi$ 다.

# 정의

**렘니스케이트 사인** 은 $s(r)=\int_0^r dt/\sqrt{1-t^4}$ 의 역함수 $\mathrm{sl}$ 이다. $0\le s\le\varpi/2$ 에서 $\mathrm{sl}$ 은 $0$ 에서 $1$ 로 증가하고, 다음 미분방정식을 만족한다.

$$\mathrm{sl}'(s)=\sqrt{1-\mathrm{sl}(s)^4},\qquad\mathrm{sl}(0)=0$$

렘니스케이트 코사인은 $\mathrm{cl}(s)=\mathrm{sl}(\varpi/2-s)$ 다. 직관 절의 곡선에서 원점부터 길이 $\varpi/2$ 를 가면 원점에서 가장 먼 점 $(1,0)$ 에 닿고 $\mathrm{sl}(\varpi/2)=1$ 이다. 길이 $\varpi$ 를 가면 원점으로 돌아와 $\mathrm{sl}(\varpi)=0$ 이다.

렘니스케이트 상수는 [감마 함수](gamma-function.md)로 다음과 같이 적힌다[^1].

$$\varpi=2\int_0^1\frac{dt}{\sqrt{1-t^4}}=\frac{\Gamma(1/4)^2}{2\sqrt{2\pi}}$$

# 성질

## 덧셈 정리

다음이 성립한다[^1].

$$\mathrm{sl}(a+b)=\frac{\mathrm{sl}\thinspace a\thinspace\mathrm{sl}'b+\mathrm{sl}\thinspace b\thinspace\mathrm{sl}'a}{1+\mathrm{sl}^2a\thinspace\mathrm{sl}^2b}$$

$a=b$ 로 두면 호의 길이를 두 배로 늘린 점의 거리가 원래 거리 $r$ 의 대수식으로 나온다. 이것이 Fagnano 의 배가 공식(Fagnano's doubling formula)이다.

$$\mathrm{sl}(2s)=\frac{2r\sqrt{1-r^4}}{1+r^4},\qquad r=\mathrm{sl}(s)$$

## 두 주기와 Gauss 정수

덧셈 정리로 $\mathrm{sl}$ 을 복소평면 전체의 유리형함수로 연장하면 $\mathrm{sl}(is)=i\thinspace\mathrm{sl}(s)$ 이고, 주기 격자는 $(1+i)\varpi$ 와 $(1-i)\varpi$ 로 생성된다[^1]. 그래서 $\mathrm{sl}$ 은 [타원함수](elliptic-functions.md)이고, 주기 격자가 $i$ 를 곱해도 바뀌지 않는다.

$i$ 배가 격자를 보존하므로, [Gauss 정수](gaussian-integers.md) $\alpha$ 마다 $\mathrm{sl}(\alpha s)$ 가 $\mathrm{sl}(s)$ 의 유리식과 $\mathrm{sl}'(s)$ 로 적힌다. 대응하는 타원곡선 $y^2=x^3-x$ 는 Gauss 정수 환에 의한 [복소 곱셈](complex-multiplication.md)을 갖는다.

## Gauss 상수

[산술기하 평균](arithmetic-geometric-mean.md) 문서의 Gauss 상수 $G=1/M(1,\sqrt2)\approx 0.834627$ 은 $\varpi/\pi$ 와 같다. Gauss 적분 표현에서 $a=1$, $b=\sqrt2$ 이면 적분이 $\int_0^{\pi/2}d\theta/\sqrt{1+\sin^2\theta}$ 이고, 변수를 바꾸면 이 적분이 $\int_0^1 dt/\sqrt{1-t^4}=\varpi/2$ 와 같다.

## Abel 의 등분 정리

렘니스케이트를 길이가 같은 $n$ 개의 호로 나누는 점을 자와 컴퍼스로 작도할 수 있는 필요충분조건은 $n$ 이 $2$ 의 거듭제곱과 서로 다른 Fermat 소수(Fermat prime)들의 곱인 것이다. 이것을 Abel 정리(Abel's theorem on the lemniscate)라 하고, 정 $n$ 각형의 작도 조건과 같은 꼴이다[^2].

증명의 요지. 등분점은 $\mathrm{sl}(2\varpi k/n)$ 이고, 이 값들은 $\mathbb Q(i)$ 위에서 $\mathrm{sl}(ns)$ 를 $\mathrm{sl}(s)$ 로 쓴 식의 근이다. 이 근들을 $\mathbb Q(i)$ 에 더한 체의 Galois 군이 가환이고, 그 차수가 $2$ 의 거듭제곱인 것과 $n$ 의 조건이 동치다. 차수가 $2$ 의 거듭제곱이면 [작도 가능한 수](constructible-numbers.md)다.

# 활용

- Eisenstein 급수의 값. 격자 $\mathbb Z+\mathbb Zi$ 의 [Eisenstein 급수](eisenstein-series.md) $G\_4$ 는 $\varpi^4/15$ 다. Hurwitz 는 $\sum'(m+ni)^{-4k}$ 를 $\varpi^{4k}$ 의 유리수배로 쓰고, 그 유리수를 Hurwitz 수(Hurwitz numbers)라 했다.
- 류체론의 예. Gauss 정수 환 위에서 $\mathrm{sl}$ 의 등분값을 $\mathbb Q(i)$ 에 더한 체는 $\mathbb Q(i)$ 의 가환 확대를 이루고, 원분체가 $\mathbb Q$ 의 가환 확대를 주는 것과 같은 꼴이다. 허수 이차체 위에서 이 꼴을 일반화한 것이 Kronecker 의 청춘의 꿈(Kronecker's Jugendtraum)이다.
- 원주율과 산술기하 평균. $\varpi$ 와 $\pi$ 의 비가 Gauss 상수이므로 $\varpi$ 는 산술기하 평균으로 빠르게 계산된다.

[^1]: C. L. Siegel, *Topics in Complex Function Theory*, Vol. I, Wiley, 1969, 1장.
[^2]: M. Rosen, "Abel's theorem on the lemniscate", *American Mathematical Monthly* **88** (1981), 387–395.

# 연관 문서

## 선수지식

- [타원함수](elliptic-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #number_theory #analysis
