# 특성함수

# 개요

**특성함수(characteristic function)** 는 확률분포를 파동 $e^{itx}$ 의 평균으로 바꿔 적은 함수다. 독립인 두 주사위 눈의 합의 분포를 구하려면 모든 경우를 짝지어 더해야 하지만, 특성함수로 바꾸면 두 특성함수를 곱하기만 하면 된다. 특성함수는 분포를 결정하고 독립인 값의 합을 곱으로 바꾸므로, 합의 분포와 그 극한을 곱셈과 함수의 극한으로 계산한다.

# 직관

분포를 적률열 $\mathbb E\lbrack X^n\rbrack$ 로 정하려 하면 두 경우에 실패한다. 적률이 아예 없을 수 있고([Cauchy 분포](cauchy-distribution.md)), 모든 적률이 같은데 분포가 다른 경우도 있다([로그정규분포](lognormal-distribution.md)). [적률생성함수](moment-generating-function.md) $\mathbb E\lbrack e^{tX}\rbrack$ 는 무거운 꼬리에서 발산한다. $t$ 를 순허수로 바꾸면 $\vert e^{itX}\vert=1$ 이므로 기댓값이 언제나 존재하고 절댓값이 1 이하이며, 그 대신 값이 [복소수](complex-numbers.md)가 된다.

$e^{itx}$ 는 단위원 위의 점이므로 $\varphi(t)$ 는 각 $x$ 를 단위원 위 각도 $tx$ 의 점으로 옮긴 분포의 무게중심이다. $t$ 가 커지면 점들이 원 위에 흩어져 상쇄되므로 $\varphi$ 가 $0$ 근방에서 줄어드는 속도가 분포의 퍼짐을 나타낸다. 특성함수는 확률측도의 [Fourier 변환](fourier-transform.md)이고, [합성곱](convolution.md)이 곱으로 가는 것과 변환이 함수를 결정하는 것이 Fourier 해석에서 온다.

# 정의

$\mathbb R^d$ 위 [측도](measure.md) $\mu$ 가 확률측도일 때 $\mu$ 의 **특성함수** 는 다음이다.

$$
\varphi_\mu(t)=\int_{\mathbb R^d}e^{i\langle t,x\rangle}\thinspace d\mu(x),\qquad t\in\mathbb R^d
$$

[확률변수](random-variables.md) $X\sim\mu$ 로 쓰면 $\varphi_X(t)=\mathbb E\bigl\lbrack e^{i\langle t,X\rangle}\bigr\rbrack$ 다. [상측도](pushforward-measure.md)로 정의한 분포만 보므로 확률공간이 무엇인지는 상관이 없다.

주사위 눈 $X$ 의 특성함수는 $\varphi_X(t)=\frac16\sum_{k=1}^6e^{ikt}$ 이다. 독립인 두 주사위 눈의 합의 특성함수는 $\varphi_X(t)^2=\frac1{36}\sum_{m=2}^{12}c_me^{imt}$ 이고, $e^{imt}$ 의 계수 $c_m/36$ 이 합이 $m$ 일 확률이다. $c_7=6$ 이므로 합이 $7$ 일 확률은 $1/6$ 이다.

## 표준 분포의 특성함수

| 분포 | 특성함수 |
| --- | --- |
| 점질량 $\delta_c$ | $e^{itc}$ |
| Bernoulli $\mathrm{Bernoulli}(p)$ | $1-p+pe^{it}$ |
| [Poisson 분포](poisson-distribution.md) $\mathrm{Poisson}(\lambda)$ | $\exp\bigl(\lambda(e^{it}-1)\bigr)$ |
| 정규 $N(m,\sigma^2)$ | $\exp\bigl(itm-\tfrac12\sigma^2t^2\bigr)$ |
| 지수 $\mathrm{Exp}(\lambda)$ | $\lambda/(\lambda-it)$ |
| Cauchy | $e^{-\vert t\vert}$ |

[정규분포](normal-distribution.md)의 특성함수는 다시 정규형이다. Cauchy 분포의 특성함수는 원점에서 미분가능하지 않고, Cauchy 분포에는 평균이 없다.

# 성질

## 기본 성질

다음은 정의에서 바로 나온다.

- $\varphi(0)=1$ 이고 모든 $t$ 에 대해 $\vert\varphi(t)\vert\le1$ 이다.
- $\varphi$ 는 $\mathbb R^d$ 전체에서 [균등연속](uniform-continuity.md)이다. $\vert\varphi(t+h)-\varphi(t)\vert\le\mathbb E\bigl\lbrack\vert e^{i\langle h,X\rangle}-1\vert\bigr\rbrack$ 이고 우변이 [지배 수렴 정리](dominated-convergence.md)로 $h\to0$ 일 때 0 이 되며 이 평가에 $t$ 가 나타나지 않는다.
- $\varphi_{-X}(t)=\overline{\varphi_X(t)}$ 이므로 $\varphi$ 가 실함수인 것과 $X$ 가 $-X$ 와 같은 분포인 것이 동치다.
- $\varphi_{aX+b}(t)=e^{itb}\varphi_X(at)$ 다.

## 독립합의 곱

$X$ 와 $Y$ 가 독립이면 기댓값이 분리되어 다음이 성립한다.

$$
\varphi_{X+Y}(t)=\varphi_X(t)\thinspace\varphi_Y(t)
$$

분포의 합성곱이 특성함수의 곱이 되므로 합의 분포 문제가 곱셈 문제가 된다. 독립 정규분포의 합이 정규분포인 것은 $\exp$ 안의 지수를 더하면 나온다.

## 유일성과 반전

$\varphi_\mu=\varphi_\nu$ 이면 $\mu=\nu$ 다. 분포함수의 연속점 $a\lt b$ 에서 반전공식

$$
\mu\bigl((a,b)\bigr)=\lim_{T\to\infty}\frac1{2\pi}\int_{-T}^{T}\frac{e^{-ita}-e^{-itb}}{it}\thinspace\varphi_\mu(t)\thinspace dt
$$

가 성립하고, $\varphi_\mu$ 가 적분가능하면 $\mu$ 는 유계 연속 밀도를 가진다.

$$
f(x)=\frac1{2\pi}\int_{\mathbb R}e^{-itx}\varphi_\mu(t)\thinspace dt
$$

## 적률과 원점에서의 미분

$\mathbb E\lbrack\vert X\vert^n\rbrack\lt\infty$ 이면 $\varphi$ 는 $n$ 번 연속미분가능하고 다음이 성립한다.

$$
\varphi^{(n)}(0)=i^n\thinspace\mathbb E\lbrack X^n\rbrack,\qquad
\varphi(t)=\sum_{k=0}^{n}\frac{(it)^k}{k!}\mathbb E\lbrack X^k\rbrack+o(\vert t\vert^n)
$$

역은 짝수 차수에서만 성립한다. $\varphi''(0)$ 이 존재하면 $\mathbb E\lbrack X^2\rbrack\lt\infty$ 이지만 1 차 미분 가능성만으로는 평균의 존재가 보장되지 않는다. 위 전개는 국소 정보이고 유일성은 $t$ 전체에서의 값에서 나온다.

## Lévy 연속성 정리

$\mu_n$ 이 $\mathbb R^d$ 위 확률측도열이라 하자.

1. $\mu_n\Rightarrow\mu$ 이면 모든 $t$ 에 대해 $\varphi_{\mu_n}(t)\to\varphi_\mu(t)$ 다.
2. 역으로 $\varphi_{\mu_n}(t)$ 가 각 $t$ 에서 어떤 함수 $\psi(t)$ 로 수렴하고 $\psi$ 가 $t=0$ 에서 연속이면, $\psi$ 는 어떤 확률측도 $\mu$ 의 특성함수이고 $\mu_n\Rightarrow\mu$ 다.

1 은 $e^{i\langle t,x\rangle}$ 가 유계 연속이므로 정의에서 나온다. 2 의 증명은 $\psi$ 의 원점 근방 적분으로 꼬리질량을 평가하는 부등식

$$
\mu_n\bigl(\lbrace\vert x\vert\gt 2/\delta\rbrace\bigr)\le\frac1\delta\int_{-\delta}^{\delta}\bigl(1-\varphi_{\mu_n}(t)\bigr)\thinspace dt
$$

에서 긴밀성(tightness)을 얻고, Prokhorov 정리(Prokhorov's theorem)로 수렴 부분열을 잡은 뒤 유일성으로 극한을 확정한다.

가정이 필요함은 두 예에서 나온다. $\mu_n=\delta_n$ 이면 $\varphi_n(t)=e^{int}$ 가 $t=0$ 에서만 수렴한다. $\mu_n=N(0,n)$ 이면 $\varphi_n(t)=e^{-nt^2/2}$ 가 각 점에서 수렴하지만 극한이 $t=0$ 에서만 1 인 불연속 함수이고, 질량이 퍼져 확률측도로 수렴하지 못하는 상황이 원점의 불연속으로 나타난다.

## Bochner 정리

Bochner 정리(Bochner's theorem)는 다음 진술이다. $\varphi:\mathbb R^d\to\mathbb C$ 가 어떤 확률측도의 특성함수인 것과 다음 세 조건이 동시에 성립하는 것이 동치다.

- $\varphi(0)=1$ ,
- $\varphi$ 가 연속,
- $\varphi$ 가 양정치(positive definite)다. 곧 임의의 $t_1,\dots,t_n$ 과 복소수 $c_1,\dots,c_n$ 에 대해 $\sum_{j,k}c_j\overline{c_k}\thinspace\varphi(t_j-t_k)\ge0$ .

양정치성은 $\bigl\vert\sum_jc_je^{i\langle t_j,X\rangle}\bigr\vert^2$ 의 기댓값이 음수가 될 수 없다는 사실이고, 위 합을 전개하면 나온다. 어려운 방향은 양정치 [연속함수](continuity.md)에서 측도를 복원하는 쪽이다. [Gauss 과정](gaussian-processes.md)의 정상 [공분산](covariance.md) 핵 $k(s,t)=\varphi(s-t)$ 가 유효한지를 이 정리로 판정한다.

# 활용

## 중심극한정리

[중심극한정리](central-limit-theorem.md)의 표준 증명이 위 도구 셋을 차례로 쓴다. $X_i$ 가 독립동일분포이고 평균 0, 분산 1 이라 하면 $S_n=(X_1+\dots+X_n)/\sqrt n$ 의 특성함수가 다음이다.

$$
\varphi_{S_n}(t)=\Bigl\lbrack\varphi_X\bigl(t/\sqrt n\bigr)\Bigr\rbrack^n
$$

2 차 적률이 유한하므로 원점 전개 $\varphi_X(s)=1-s^2/2+o(s^2)$ 를 대입한다.

$$
\varphi_{S_n}(t)=\Bigl\lbrack 1-\frac{t^2}{2n}+o\bigl(1/n\bigr)\Bigr\rbrack^n\longrightarrow e^{-t^2/2}
$$

우변이 $N(0,1)$ 의 특성함수이고 0 에서 연속이므로 Lévy 연속성 정리가 분포 수렴을 준다. 희박 극한에서 [이항분포](binomial-distribution.md)가 Poisson 분포로 가는 것도 같은 방식이다. $\bigl(1-\lambda/n+\lambda e^{it}/n\bigr)^n\to\exp\bigl(\lambda(e^{it}-1)\bigr)$ 이다.

## 안정분포와 무한분해가능성

$\varphi$ 가 임의의 $n$ 에 대해 어떤 특성함수의 $n$ 제곱으로 쓰이면 그 분포를 **무한분해가능(infinitely divisible)** 하다고 한다. 이런 분포는 Lévy–Khintchine 공식(Lévy–Khintchine formula)으로 분류된다. 정규, Poisson, Cauchy 분포가 여기 속하고, 이 분류가 Lévy 과정과 [Brown 운동](brownian-motion.md)의 구성으로 이어진다.

$\varphi_X(t)^n=\varphi_X(c_nt)e^{id_nt}$ 꼴을 만족하는 분포를 **안정분포(stable distribution)** 라 한다. 대칭인 안정분포는 특성함수가 $\exp(-\vert t\vert^\alpha)$ 꼴이 되는 $\alpha\in(0,2\rbrack$ 로 매개된다. $\alpha=2$ 가 정규, $\alpha=1$ 이 Cauchy 분포다. 분산이 없는 무거운 꼬리 분포의 정규화한 합은 이 족의 분포로 수렴한다.

# 연관 문서

## 선수지식

- [약수렴](weak-convergence.md)
- [확률변수](random-variables.md)
- [Fourier 변환](fourier-transform.md)

## 더 알아보기

- [Gauss 과정](gaussian-processes.md)
- [Cramér 분해 정리](cramer-decomposition.md)

#probability #analysis #theorem
