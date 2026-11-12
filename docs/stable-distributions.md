# 안정 분포

# 개요

**안정 분포(stable distribution)** 는 같은 분포를 따르는 독립인 값을 여러 개 더해도 크기와 위치만 바뀌고 모양은 그대로인 분포다. 측정 오차를 $n$ 번 더하면 합이 얼마나 커지는지 물으면, 오차가 정규분포를 따를 때는 $\sqrt n$ 배로, 벽에 닿는 등대 빛처럼 [Cauchy 분포](cauchy-distribution.md)를 따를 때는 $n$ 배로 커진다. 안정 분포는 이 배율을 $n^{1/\alpha}$ 로 적는 지수 $\alpha$ 하나로 분포들을 나누고, 분산이 없는 오차를 많이 더한 합이 $\alpha$ 에 맞는 안정 분포로 다가간다는 것으로 그 합의 크기와 꼴을 정한다.

# 직관

독립인 측정 오차 $X_1,\dots,X_n$ 이 모두 표준 [정규분포](normal-distribution.md)를 따르면 합 $X_1+\dots+X_n$ 은 분산이 $n$ 인 정규분포를 따른다. 합은 오차 하나를 $\sqrt n$ 배 한 것과 분포가 같고, 그래서 [중심극한정리](central-limit-theorem.md)는 합을 $\sqrt n$ 으로 나눈다.

등대 빛의 위치처럼 오차가 표준 Cauchy 분포를 따르면 표본평균이 다시 표준 Cauchy 분포를 따르므로, 합은 오차 하나를 $n$ 배 한 것과 분포가 같다. 같은 질문에 정규분포는 $\sqrt n$, Cauchy 분포는 $n$ 으로 답한다.

두 배율은 [특성함수](characteristic-functions.md)로 보면 한 식에서 나온다. 독립인 값의 합의 특성함수는 특성함수의 곱이다. 표준 정규분포의 특성함수는 $e^{-t^2/2}$, 표준 Cauchy 분포의 특성함수는 $e^{-\vert t\vert}$ 이고, 둘 다 $e^{-c\vert t\vert^\alpha}$ 꼴이다. 이 꼴을 $n$ 제곱하면 다음이 나온다.

$$
\left(e^{-c\vert t\vert^\alpha}\right)^n=e^{-c\vert n^{1/\alpha}t\vert^\alpha}
$$

오른쪽은 오차 하나를 $n^{1/\alpha}$ 배 한 값의 특성함수다. 정규분포는 $\alpha=2$ 라서 $\sqrt n$ 배, Cauchy 분포는 $\alpha=1$ 이라서 $n$ 배다. 다른 $\alpha$ 에도 합의 배율이 $n^{1/\alpha}$ 인 분포가 있고, 이런 분포를 안정 분포라 한다.

# 정의

## 안정 분포

확률변수 $X$ 와 그 독립인 복사본 $X_1,X_2,\dots$ 에 대해, 모든 $n\ge 2$ 에서 상수 $c_n\gt 0$ 과 $d_n$ 이 존재해 다음이 분포로서 같으면 $X$ 의 분포를 **안정 분포** 라 한다. 모든 $n$ 에서 $d_n=0$ 으로 잡을 수 있으면 **엄밀 안정(strictly stable)** 이라 한다. 상수인 확률변수는 제외한다.

$$
X_1+X_2+\dots+X_n\overset{d}{=}c_nX+d_n
$$

직관 절의 두 오차는 엄밀 안정이고, 정규분포는 $c_n=\sqrt n$, Cauchy 분포는 $c_n=n$ 이다. 평균이 $\mu$ 인 정규분포는 합의 평균이 $n\mu$ 이고 $\sqrt n X$ 의 평균은 $\sqrt n\mu$ 이므로 $d_n=(n-\sqrt n)\mu$ 다.

## 안정 지수

성질 절의 정리에 따라 $c_n=n^{1/\alpha}$ 인 $\alpha\in(0,2\rbrack$ 가 하나로 정해진다. 이 $\alpha$ 를 **안정 지수(stability index)** 라 하고, 지수가 $\alpha$ 인 안정 분포를 $\alpha$ 안정 분포라 한다. 정규분포의 안정 지수는 $2$, Cauchy 분포의 안정 지수는 $1$ 이다.

## 네 모수

안정 분포는 특성함수로 분류된다. 모든 안정 분포는 안정 지수 $\alpha\in(0,2\rbrack$, **비대칭 모수(skewness parameter)** $\beta\in\lbrack -1,1\rbrack$, 척도 $\sigma\gt 0$, 위치 $\mu\in\mathbb R$ 의 네 값으로 정해지고, $\alpha\ne 1$ 이면 특성함수가 다음과 같다.[^1]

$$
\varphi(t)=\exp\left(-\sigma^\alpha\vert t\vert^\alpha\left(1-i\beta\thinspace\mathrm{sgn}(t)\tan\frac{\pi\alpha}{2}\right)+i\mu t\right)
$$

$\alpha=1$ 이면 다음과 같다.

$$
\varphi(t)=\exp\left(-\sigma\vert t\vert\left(1+i\beta\frac{2}{\pi}\mathrm{sgn}(t)\log\vert t\vert\right)+i\mu t\right)
$$

이 분포를 $S(\alpha,\beta,\sigma,\mu)$ 로 쓴다. $\beta=0$ 이면 $\mu$ 를 중심으로 대칭이고, $\beta=1$ 이면 오른쪽 꼬리만 두껍다.

- $S(2,0,\sigma,\mu)$ 는 평균 $\mu$, 분산 $2\sigma^2$ 인 정규분포다. $\alpha=2$ 이면 $\tan\pi=0$ 이라 $\beta$ 가 식에서 사라진다.
- $S(1,0,\sigma,\mu)$ 는 위치 $\mu$, 척도 $\sigma$ 인 Cauchy 분포다. 특성함수가 $e^{i\mu t-\sigma\vert t\vert}$ 로 Cauchy 분포 문서의 식과 같다.
- $S(1/2,1,\sigma,0)$ 은 **Lévy 분포(Lévy distribution)** 다. $x\gt 0$ 에서만 밀도가 있고 밀도는 다음과 같다.

$$
f(x)=\sqrt{\frac{\sigma}{2\pi}}\thinspace x^{-3/2}e^{-\sigma/(2x)}
$$

밀도가 초등함수로 적히는 안정 분포는 이 세 족과 Lévy 분포를 좌우로 뒤집은 $S(1/2,-1,\sigma,0)$ 뿐이다.

# 성질

## 배율의 거듭제곱 꼴

안정 분포의 $c_n$ 은 어떤 $\alpha\in(0,2\rbrack$ 에 대해 $c_n=n^{1/\alpha}$ 다.[^2]

증명의 요지. 엄밀 안정인 경우 $mn$ 개의 합을 $n$ 개씩 $m$ 묶음으로 나누면 $c_{mn}X\overset{d}{=}c_m c_n X$ 이므로 $c_{mn}=c_mc_n$ 이다. 여기에 $c_n$ 이 증가한다는 것을 보이면 $c_n=n^{1/\alpha}$ 꼴만 남는다. $\alpha\le 2$ 는 안정 지수의 범위 절에서 나온다.

## 안정 지수의 범위

$\alpha\gt 2$ 이면 $e^{-\vert t\vert^\alpha}$ 는 특성함수가 아니다.

증명. 특성함수 $\varphi$ 가 원점에서 두 번 미분가능하면 $\mathbb E\lbrack X^2\rbrack=-\varphi''(0)$ 이다. $\alpha\gt 2$ 이면 $\varphi''(0)=0$ 이므로 $\mathbb E\lbrack X^2\rbrack=0$ 이고 $X=0$ 이다. 그런데 $X=0$ 의 특성함수는 상수 $1$ 이므로 모순이다.

## 꼬리와 적률

$0\lt\alpha\lt 2$ 이면 꼬리가 거듭제곱으로 줄어든다. $X\sim S(\alpha,\beta,\sigma,\mu)$ 이면 $x\to\infty$ 에서 다음이 성립한다.[^1]

$$
x^\alpha P(X\gt x)\to C_\alpha\frac{1+\beta}{2}\sigma^\alpha,\qquad x^\alpha P(X\lt -x)\to C_\alpha\frac{1-\beta}{2}\sigma^\alpha
$$

$C_\alpha$ 는 $\alpha$ 에만 달린 양수다. $\alpha=1$ 에서 $C_1=2/\pi$ 이고, 표준 Cauchy 분포의 꼬리 $P(X\gt x)\approx 1/(\pi x)$ 가 이 식과 맞는다.

그래서 $\mathbb E\lbrack\vert X\vert^p\rbrack$ 는 $p\lt\alpha$ 이면 유한하고 $p\ge\alpha$ 이면 무한하다. 정규분포가 아닌 안정 분포는 분산이 없고, $\alpha\le 1$ 이면 평균도 없다.

## 지지집합

$0\lt\alpha\lt 1$ 이고 $\beta=1$ 이면 $S(\alpha,1,\sigma,\mu)$ 는 $\lbrack\mu,\infty)$ 에만 값을 갖는다. 그 밖의 경우는 실수 전체에 값을 갖는다. Lévy 분포가 $\alpha=1/2$ 인 예다.

## 일반화 중심극한정리

**일반화 중심극한정리(generalized central limit theorem)** 는 다음이다. $X_1,X_2,\dots$ 가 독립이고 분포가 같을 때, 상수 $a_n\gt 0$, $b_n$ 을 골라 다음이 상수가 아닌 $Z$ 로 분포수렴하면 $Z$ 는 안정 분포를 따른다. 거꾸로 모든 안정 분포는 이런 극한으로 나타난다.[^2]

$$
\frac{X_1+\dots+X_n-b_n}{a_n}\to Z
$$

$Z$ 가 $\alpha\lt 2$ 인 안정 분포가 되는 조건은 꼬리로 적힌다. **천천히 변하는 함수(slowly varying function)** $L$ 은 모든 $s\gt 0$ 에서 $L(sx)/L(x)\to 1$ 인 함수다. $\log x$ 와 상수가 예다. 극한이 $\alpha$ 안정 분포가 될 필요충분조건은 다음 둘이다.

1. $P(\vert X_1\vert\gt x)=x^{-\alpha}L(x)$ 인 천천히 변하는 함수 $L$ 이 있다.
2. $P(X_1\gt x)/P(\vert X_1\vert\gt x)$ 가 어떤 $p\in\lbrack 0,1\rbrack$ 로 수렴한다.

이때 $a_n$ 은 $nP(\vert X_1\vert\gt a_n)\to 1$ 이 되게 잡고, 극한의 비대칭 모수는 $\beta=2p-1$ 이다. $L$ 이 상수이면 $a_n$ 은 $n^{1/\alpha}$ 의 상수배다. 분산이 유한하면 $\alpha=2$ 이고 이 정리는 중심극한정리다.

예. $P(X_1\gt x)=x^{-3/2}$ ($x\ge 1$) 인 Pareto 분포는 평균 $3$ 이 있지만 분산이 없다. $\alpha=3/2$, $p=1$ 이므로 $(X_1+\dots+X_n-3n)/n^{2/3}$ 은 $\beta=1$ 인 $3/2$ 안정 분포로 수렴한다. 합의 요동은 $\sqrt n$ 이 아니라 $n^{2/3}$ 의 크기로 자란다.

## 무한분해가능성과 Lévy 측도

안정 분포는 $n$ 개의 독립 복사본의 합으로 쓰이므로 무한분해가능(infinitely divisible)하다. $\alpha\lt 2$ 이면 Lévy–Khintchine 공식(Lévy–Khintchine formula)의 Gauss 부분이 $0$ 이고 Lévy 측도가 다음과 같다. 상수 $c_+,c_-\ge 0$ 은 $c_++c_-\gt 0$ 을 만족한다.

$$
\nu(dx)=\begin{cases}c_+x^{-1-\alpha}\thinspace dx & (x\gt 0)\cr c_-\vert x\vert^{-1-\alpha}\thinspace dx & (x\lt 0)\end{cases}
$$

비대칭 모수는 다음과 같다.

$$
\beta=\frac{c_+-c_-}{c_++c_-}
$$

크기가 $x$ 이상인 도약의 빈도가 $x^{-\alpha}$ 에 비례하고, 꼬리와 적률 절의 꼬리가 여기서 나온다.

# 활용

- [Brown 운동](brownian-motion.md)이 수준 $a\gt 0$ 에 처음 닿는 시각 $T_a$ 는 Lévy 분포 $S(1/2,1,a^2,0)$ 를 따른다. 반사 원리로 얻는 밀도가 정의 절의 식에 $\sigma=a^2$ 를 넣은 것과 같다. 수준 $2a$ 에 닿으려면 $a$ 에 닿은 뒤 다시 $a$ 를 올라가야 하므로 $T_{2a}$ 는 $T_a$ 의 독립 복사본 둘의 합이고, Brown 운동의 척도 불변성으로 $T_{2a}\overset{d}{=}4T_a$ 다. 배율 $4=2^{1/\alpha}$ 가 $\alpha=1/2$ 와 맞는다.
- [Lévy 과정](levy-processes.md) 가운데 $X_1$ 이 엄밀 $\alpha$ 안정인 것을 안정 Lévy 과정이라 한다. 모든 $t$ 에서 $X_t\overset{d}{=}t^{1/\alpha}X_1$ 이고, 무한분해가능성 절의 Lévy 측도로 도약이 정해진다. $\alpha=2$ 이면 Brown 운동이다.
- Mandelbrot 는 1963 년 면화 가격의 변동을 $\alpha$ 가 약 $1.7$ 인 안정 분포로 모형화했다. 일별 변동의 합이 월별 변동이고, 정규분포 모형보다 큰 변동이 자주 관측된 것을 꼬리와 적률 절의 거듭제곱 꼬리로 설명했다.[^3]
- 안정 분포의 표본은 Chambers–Mallows–Stuck 방법(Chambers–Mallows–Stuck method)으로 만든다. $U$ 가 $(-\pi/2,\pi/2)$ 의 [균등분포](uniform-distribution.md), $W$ 가 평균 $1$ 인 [지수분포](exponential-distribution.md)를 따르고 서로 독립이면, 대칭인 $S(\alpha,0,1,0)$ 표본이 다음으로 나온다.[^4]

$$
X=\frac{\sin(\alpha U)}{(\cos U)^{1/\alpha}}\left(\frac{\cos((1-\alpha)U)}{W}\right)^{(1-\alpha)/\alpha}
$$

$\alpha=1$ 이면 둘째 인수가 $1$ 이 되어 $X=\tan U$ 이고, Cauchy 분포 문서의 등대 위치와 같다. $\alpha=2$ 이면 $X=2\sqrt W\sin U$ 로 분산이 $2$ 인 정규분포 표본이다.

[^1]: G. Samorodnitsky, M. S. Taqqu, *Stable Non-Gaussian Random Processes*, Chapman & Hall (1994), Definition 1.1.6 과 Property 1.2.15. 특성함수의 네 모수 표현과 꼬리의 점근식.
[^2]: W. Feller, *An Introduction to Probability Theory and Its Applications*, Vol. II, 2nd ed., Wiley (1971), Chapter VI.1 과 Chapter XVII.5. 배율의 거듭제곱 꼴과 끌림 영역의 꼬리 조건.
[^3]: B. Mandelbrot, "The Variation of Certain Speculative Prices", *The Journal of Business* 36 (1963), 394–419.
[^4]: J. M. Chambers, C. L. Mallows, B. W. Stuck, "A Method for Simulating Stable Random Variables", *Journal of the American Statistical Association* 71 (1976), 340–344.

# 연관 문서

## 선수지식

- [Cauchy 분포](cauchy-distribution.md)
- [특성함수](characteristic-functions.md)
- [중심극한정리](central-limit-theorem.md)

## 더 알아보기

- [정칙 변동](regular-variation.md)
- [자기유사 과정](self-similar-processes.md)
- [분수 Laplace 연산자](fractional-laplacian.md)

#probability #statistics #analysis
