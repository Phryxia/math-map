# Laplace 방법

# 개요

**Laplace 방법(Laplace's method)** 은 지수에 큰 매개변수가 든 적분의 점근을 피적분함수의 최대점 하나에서 얻는 방법이다. $100!=\int_0^\infty x^{100}e^{-x}\thinspace dx$ 를 어림하려 할 때, 피적분함수 $x^{100}e^{-x}$ 는 $x=100$ 근처의 좁은 구간 밖에서 거의 $0$ 이다. Laplace 방법은 그 최대점 근처에서 지수를 2 차식으로 근사해 Gauss 적분으로 바꾸고, Stirling 근사 $n!\sim\sqrt{2\pi n}\thinspace(n/e)^n$ 같은 주도항을 얻는다.

# 직관

$100!=\int_0^\infty x^{100}e^{-x}\thinspace dx$ 를 어림한다. 피적분함수는 $e^{100\log x-x}$ 이고, 지수 $100\log x-x$ 는 $x=100$ 에서 가장 크다. $x=110$ 에서 지수는 최댓값보다 약 $0.47$ 작고, $x=150$ 에서는 약 $9.45$ 작다. 그래서 피적분함수는 $x=150$ 에서 최댓값의 $e^{-9.45}\approx 8\times 10^{-5}$ 배이고, 적분값은 거의 다 $x=100$ 근처에서 나온다.

$x=100$ 근처에서 $\log x$ 를 2 차까지 전개하면 지수는 $(100\log 100-100)-(x-100)^2/200$ 이다. 이것을 넣으면 적분은 Gauss 적분 하나가 된다.

$$
100!\approx 100^{100}e^{-100}\int_{-\infty}^{\infty}e^{-(x-100)^2/200}\thinspace dx=\sqrt{2\pi\cdot 100}\thinspace\left(\frac{100}{e}\right)^{100}
$$

이 값과 실제 $100!$ 의 비는 약 $1.0008$ 이다. 지수에 큰 수가 곱해진 적분을 지수의 최대점 근처의 Gauss 적분으로 바꾸는 이 계산이 Laplace 방법이다.

# 정의

## Laplace 방법

큰 매개변수 $\lambda$ 가 든 적분

$$
I(\lambda)=\int_a^{b}g(x)\thinspace e^{\lambda\varphi(x)}\thinspace dx\qquad(\lambda\to\infty)
$$

에서 $\varphi$ 가 $\lbrack a,b\rbrack$ 내부의 유일한 점 $x_0$ 에서 최대이고 $\varphi''(x_0)\lt 0$ 이며 $g(x_0)\ne0$ 이면 다음 [점근급수](asymptotic-series.md)가 성립한다.

$$
I(\lambda)= e^{\lambda\varphi(x_0)}\sqrt{\frac{2\pi}{\lambda\vert\varphi''(x_0)\vert}}
\left(g(x_0)+\frac{c_1}{\lambda}+\frac{c_2}{\lambda^{2}}+\cdots\right)
$$

계수 $c_k$ 는 $\varphi$ 와 $g$ 의 $x_0$ 에서의 고계 도함수로 쓰인다. 주도항만 남긴 $I(\lambda)\sim g(x_0)e^{\lambda\varphi(x_0)}\sqrt{2\pi/(\lambda\vert\varphi''(x_0)\vert)}$ 를 구하는 것을 Laplace 방법이라 한다.

직관 절의 예는 $x=100t$ 로 바꾸면 $100!=100^{101}\int_0^\infty e^{100(\log t-t)}\thinspace dt$ 이고, $\lambda=100$, $\varphi(t)=\log t-t$, $g=1$, $x_0=1$, $\varphi''(1)=-1$ 이다. 주도항은 $100^{101}e^{-100}\sqrt{2\pi/100}$ 로 직관 절의 값과 같다.

## 안장점법

$\varphi$ 가 [복소수](complex-numbers.md) 변수의 정칙함수이면 $\vert e^{\lambda\varphi}\vert=e^{\lambda\mathrm{Re}\varphi}$ 가 영역 내부에서 최대가 되지 않는다. 대신 $\varphi'(z_0)=0$ 인 점을 **안장점(saddle point)** 이라 한다. 안장점에서 $\mathrm{Re}\varphi$ 는 한 방향으로 올라가고 수직 방향으로 내려간다.

안장점을 지나며 $\mathrm{Re}\varphi$ 가 가장 빨리 줄어드는 곡선을 **급강하 경로(steepest descent path)** 라 한다. 이 곡선 위에서 $\mathrm{Im}\varphi$ 는 일정하다. [윤곽을 변형](residue-theorem.md)해 적분 경로를 급강하 경로로 옮기면 피적분함수의 진동이 사라지고, 그 경로 위에서 Laplace 방법을 쓴다. 이 방법을 **안장점법(saddle point method)** 또는 최대급강하법(method of steepest descent)이라 한다.

$\varphi$ 가 정칙이고 $\varphi'(z_0)=0$ 이며 $\varphi''(z_0)\ne0$ 이면 경로를 $z_0$ 을 지나는 급강하 경로로 변형해

$$
\int g\thinspace e^{\lambda\varphi}\thinspace dz\ \sim\ g(z_0)\thinspace e^{\lambda\varphi(z_0)}\sqrt{\frac{2\pi}{\lambda\thinspace\vert\varphi''(z_0)\vert}}\thickspace e^{i\theta}
$$

를 얻는다. $\theta$ 는 급강하 방향의 각도다. $\varphi''(z_0)=\vert\varphi''(z_0)\vert e^{i\psi}$ 일 때 $\varphi''(z_0)e^{2i\theta}$ 가 음의 실수여야 하므로 $\theta=(\pi-\psi)/2$ 또는 거기에 $\pi$ 를 더한 값이고, 경로의 진행 방향이 둘 가운데 하나를 고른다.

$\varphi(z)=iz^2$ 이면 안장점은 $z_0=0$ 이고 $\varphi''(0)=2i$, $\psi=\pi/2$, $\theta=\pi/4$ 다. 급강하 경로는 직선 $z=te^{i\pi/4}$ 이고, 그 위에서 $\varphi=i\cdot it^2=-t^2$ 로 실수이며 $t=0$ 에서 최대다.

# 성질

## 최대점의 폭

$\varphi$ 의 최댓값이 $x_0$ 에서 $\varphi(x_0)$ 라 하자. 다른 점 $x$ 의 기여는 $e^{\lambda(\varphi(x)-\varphi(x_0))}$ 배로 줄어들고, 지수가 음수이므로 $\lambda$ 가 커지면 지수적으로 작아진다. 기여가 남는 폭은 $\lambda(\varphi(x)-\varphi(x_0))\approx-1$ 인 범위, 곧

$$
\vert x-x_0\vert\lesssim\frac1{\sqrt{\lambda\vert\varphi''(x_0)\vert}}
$$

이다. 폭이 $\lambda^{-1/2}$ 로 줄므로 그 안에서 $\varphi$ 를 2 차 다항식으로, $g$ 를 상수로 바꾼 오차는 주도항보다 $\lambda^{-1}$ 배 작다. 남는 것은 Gauss 적분 하나다.

$$
\int e^{-\lambda\vert\varphi''\vert(x-x_0)^{2}/2}\thinspace dx=\sqrt{\frac{2\pi}{\lambda\vert\varphi''\vert}}
$$

## 끝점 최대

최대가 끝점 $a$ 에서 일어나고 $\varphi'(a)=0$ 이면 Gauss 적분의 절반만 남는다. $\varphi'(a)\ne0$ 이면 주도항이 $g(a)e^{\lambda\varphi(a)}/(\lambda\vert\varphi'(a)\vert)$ 로 $1/\lambda$ 차수다. 주도항의 차수가 최대점의 위치와 차수에 따라 달라진다.

## Watson 보조정리

Watson 보조정리(Watson's lemma). $h(t)\sim t^{\alpha-1}\sum_ka_kt^{k}$ ($t\to 0$) 이고 어떤 상수 $C,b$ 로 $\vert h(t)\vert\le Ce^{bt}$ 이면 다음이 성립한다.

$$
\int_0^{\infty}e^{-\lambda t}\thinspace h(t)\thinspace dt\ \sim\ \sum_{k\ge0}\frac{a_k\thinspace\Gamma(k+\alpha)}{\lambda^{k+\alpha}}
$$

원점 근방의 Taylor 전개를 항별로 적분한 것이 점근전개라는 정리다. Laplace 방법의 점근급수가 이 보조정리로 증명되고, 계수에 [감마 함수](gamma-function.md)가 나온다.

## Stirling 전개

Stirling 근사(Stirling's approximation)는 $n!=\int_0^\infty t^{n}e^{-t}\thinspace dt$ 에 Laplace 방법을 쓴 결과다. $t=ns$ 로 바꾸면 $\lambda=n$, $\varphi(s)=\log s-s$ 이고 최대점이 $s=1$, $\varphi''(1)=-1$ 이므로 주도항이 $\sqrt{2\pi n}(n/e)^n$ 이다. 전개를 이어 가면

전개를 이어 가면 다음이 나온다.

$$
n!=\sqrt{2\pi n}\left(\frac ne\right)^{n}\left(1+\frac1{12n}+\frac1{288n^{2}}-\frac{139}{51840n^{3}}-\cdots\right)
$$

항을 하나 더할 때마다 상대오차가 $1/(12n)$ , $1/(288n^{2})$ , $139/(51840n^{3})$ 규모로 줄어든다. 이 급수는 발산한다. 최적 절단은 [Euler–Maclaurin](euler-maclaurin.md) 공식으로 얻는 같은 급수의 절단과 같은 $K\approx\pi n$ 이다.

## 안장점의 선택

안장점이 여럿이면 어느 것을 지나는 경로로 변형할 수 있는지가 문제다. 급강하 경로들은 $\mathrm{Re}\varphi$ 가 작은 영역을 따라 이어지고, 주어진 끝점을 잇는 경로에 어떤 안장점이 포함되는지가 매개변수에 따라 불연속적으로 바뀐다. 그 전환이 [Stokes 현상](stokes-phenomenon.md)이고, 전환선 근처에서 지수적으로 작은 항의 계수가 빠르게 바뀐다. Euler–Maclaurin 의 점근전개가 놓치는 항이 여기서는 다른 안장점의 기여다.

두 안장점이 합쳐지는 자리에서는 $\varphi''(z_0)=0$ 이어서 2 차 전개를 쓸 수 없다. 3 차 항까지 남기면 Gauss 적분 대신 [Airy 함수](airy-functions.md)의 적분 표현이 나온다. 무지개의 밝기 분포, 파동의 초점 근처, 랜덤행렬 스펙트럼의 가장자리에 같은 Airy 꼴이 나타난다.

## 대편차와 중심극한정리

$X_1,\dots,X_n$ 이 독립이고 $M(\theta)=\mathbb E[e^{\theta X}]$ 일 때

$$
\mathbb P\negthinspace\left(\frac1n\sum X_i\approx a\right)\approx e^{-nI(a)},
\qquad
I(a)=\sup_\theta\big(\theta a-\log M(\theta)\big)
$$

이 Cramér 의 [대편차 원리](large-deviations.md)다. 증명의 요지가 안장점법이고 $\sup$ 을 주는 $\theta^{\ast}$ 가 안장점이다. 안장점 조건 $M'(\theta)/M(\theta)=a$ 는 평균이 $a$ 가 되도록 분포를 기울인다는 뜻이고, 이 지수 기울이기(exponential tilting)가 [집중부등식](concentration-inequalities.md)의 Chernoff 한계(Chernoff bound)와 같은 계산이다. 중심에서 2 차 전개를 하면 [중심극한정리](central-limit-theorem.md)의 국소판이, 꼬리에서 전개하면 대편차가 나온다.

# 활용

## 조합수의 점근

[생성함수](generating-functions.md) $F(z)=\sum a_nz^{n}$ 의 계수는 윤곽적분이고, 지수에 $n$ 이 곱해진 꼴이라 안장점법이 그대로 적용된다.

$$
a_n=\frac1{2\pi i}\oint\frac{F(z)}{z^{n+1}}dz=\frac1{2\pi i}\oint e^{\log F(z)-(n+1)\log z}dz
$$

안장점 조건 $zF'(z)/F(z)=n$ 은 평균이 $n$ 이 되도록 $z$ 를 고른다는 뜻이고, 이 확률적 해석으로 안장점의 위치를 어림한다. $F$ 가 반경 $R$ 에서 특이점을 가지면 안장점이 $R$ 에 가까이 붙고, $F$ 가 정함수면 안장점이 $n$ 과 함께 무한대로 간다. 후자의 예가 [Bell 수](bell-numbers.md)다.

## 분할수의 점근식

$p(n)$ 의 생성함수는 $\prod(1-q^{k})^{-1}$ 이고 단위원 위의 모든 유리점이 특이점이라 안장점 하나로 끝나지 않는다. Hardy–Ramanujan 의 [원법](circle-method.md)은 각 유리점 근방에서 [Dedekind eta](theta-series.md)의 모듈러 변환으로 함수를 다루기 쉬운 꼴로 바꾸고, 각 조각에 안장점 평가를 적용한 뒤 전부 더한다.

$$
p(n)\sim\frac1{4n\sqrt3}\exp\negthinspace\left(\pi\sqrt{\frac{2n}3}\right)
$$

$q=1$ 근방의 기여가 주도항을 주고 나머지 유리점이 보정을 준다. 계산은 [분할수](partitions.md)에 있다. 모듈러 변환으로 함수를 바꾸고 안장점으로 평가하는 두 단계는 해석적 수론에서 계수의 점근을 구하는 주된 방법이다.

## Bayes 추론의 Laplace 근사

사후분포 $\pi(\theta\mid D)\propto e^{\log p(D\mid\theta)+\log\pi(\theta)}$ 에서 표본 수 $n$ 이 큰 매개변수다. 최대점이 최대사후추정량(maximum a posteriori estimator)이고 2 차 전개의 [Hessian](hessian.md) 이 [공분산](covariance.md)이 되므로

$$
\pi(\theta\mid D)\approx\mathcal N\negthinspace\left(\hat\theta,\ \big(-\nabla^{2}\log p\big)^{-1}\right),
\qquad
\log p(D)\approx\log p(D\mid\hat\theta)-\frac{d}2\log n+\cdots
$$

두 번째 식의 $-\tfrac d2\log n$ 이 BIC(Bayesian information criterion)의 벌점항이고, 모형 선택 기준이 Gauss 적분의 부피에서 나온다. [Bayes 추론](bayesian-inference.md)의 근사 계산과 [최대가능도](maximum-likelihood.md)의 점근 정규성이 같은 2 차 전개를 쓴다.

## 통계역학의 최대항 방법

분배함수(partition function) $Z=\sum_{E}\Omega(E)e^{-\beta E}$ 를 적분으로 바꾸면 지수의 최대점이 평형 상태를 준다. 자유에너지 $F=E-T\thinspace S$ 의 최소화가 안장점 조건이고, 요동의 크기는 $\varphi''$ 의 역수인 감수율(susceptibility)이다. 열역학 극한의 존재가 Laplace 방법의 유효성이고, $\varphi''\to0$ 이 되는 자리가 상전이점(phase transition point)이다.[^1]

[^1]: 표준 참고는 N. G. de Bruijn, *Asymptotic Methods in Analysis* 4–5 장, R. Wong, *Asymptotic Approximations of Integrals*, 그리고 P. Flajolet, R. Sedgewick, *Analytic Combinatorics* 8 장(안장점법의 조합론적 적용). Stokes 현상과 Airy 꼴은 M. V. Berry 의 해설이 있다.

# 연관 문서

## 선수지식

- [감마 함수](gamma-function.md)
- [생성함수](generating-functions.md)

## 더 알아보기

- [분할수](partitions.md)
- [Stokes 현상](stokes-phenomenon.md)
- [정상위상법](stationary-phase.md)

#analysis #combinatorics #computation
