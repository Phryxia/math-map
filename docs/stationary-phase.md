# 정상위상법

# 개요

**정상위상법(method of stationary phase)** 은 빠르게 진동하는 함수의 적분이 진동이 멈추는 점 근처에서만 값을 얻는다는 사실로 그 적분의 크기를 구하는 방법이다. $\cos(\lambda x^2)$ 의 그래프는 $x=0$ 근처에서 천천히 출렁이고 멀어질수록 촘촘히 출렁여, 양수 부분과 음수 부분이 서로 지운다. $\lambda$ 를 키울 때 $\int\cos(\lambda x^2)\thinspace dx$ 가 어떻게 작아지는지가 문제다. 위상 $\lambda x^2$ 의 도함수가 $0$ 인 점 $x=0$ 주위만 남겨 계산하면 $\int e^{i\lambda x^2}dx=\sqrt{\pi/\lambda}\thinspace e^{i\pi/4}$ 가 나오고, 같은 방법이 일반 위상 $\varphi$ 의 적분 $\int g\thinspace e^{i\lambda\varphi}$ 에 쓰인다.

# 직관

[Laplace 방법](laplace-method.md)은 지수가 [실수](real-numbers.md)인 적분 $\int g\thinspace e^{\lambda\varphi}$ 를 다룬다. 최대점을 벗어나면 피적분함수의 절댓값이 지수적으로 작아지므로 적분은 최대점 근처만 본다.

지수가 순허수인 $\int g\thinspace e^{i\lambda\varphi}dx$ 에서는 피적분함수의 절댓값이 어디서나 $\vert g\vert$ 로 같다. 그런데도 $\int e^{i\lambda x^2}dx=\sqrt{\pi/\lambda}\thinspace e^{i\pi/4}$ 처럼 적분은 $\lambda\to\infty$ 에서 작아진다. 위상 $\lambda\varphi$ 가 빨리 돌아 이웃한 점들의 기여가 서로 지워진다.

$\varphi'\ne0$ 인 곳에서는 $e^{i\lambda\varphi}=\frac1{i\lambda\varphi'}\frac{d}{dx}e^{i\lambda\varphi}$ 로 쓰고 부분적분한다. 부분적분할 때마다 $1/\lambda$ 이 하나 붙으므로 그 구간의 기여는 $\lambda$ 의 어떤 거듭제곱보다도 빨리 작아진다.

$\varphi'(x_0)=0$ 인 점에서는 $1/\varphi'$ 이 무한대가 되어 이 계산을 쓸 수 없다. 그 주위에서 $\varphi(x)\approx\varphi(x_0)+\tfrac12\varphi''(x_0)(x-x_0)^2$ 이고, 위상이 $1$ 라디안 넘게 돌기 전까지는 지워지지 않고 더해진다. 그 범위는 $\lambda\vert\varphi''\vert(x-x_0)^2\lesssim1$, 곧 폭 $\lambda^{-1/2}$ 이다. 그 안에서 크기가 $\vert g(x_0)\vert$ 이므로 기여가 $\lambda^{-1/2}$ 규모이고, 이것이 적분의 주항이다.

# 정의

## 진동 적분

실함수 $\varphi$ 와 $g\in C_c^\infty(\mathbb R)$, 매개변수 $\lambda\gt 0$ 에 대해 다음 적분을 **진동 적분(oscillatory integral)** 이라 하고, $\varphi$ 를 위상(phase), $g$ 를 진폭(amplitude)이라 한다.

$$
I(\lambda)=\int g(x)\thinspace e^{i\lambda\varphi(x)}\thinspace dx
$$

개요의 $\int\cos(\lambda x^2)\thinspace dx$ 는 $\varphi(x)=x^2$ 인 진동 적분의 실수부다.

## 정상점

$\varphi'(x_0)=0$ 인 점 $x_0$ 를 $\varphi$ 의 **정상점(stationary point)** 이라 한다. 정상점에서 $\varphi''(x_0)\ne0$ 이면 **비퇴화(nondegenerate)**, $\varphi''(x_0)=0$ 이면 **퇴화(degenerate)** 라 한다. $\varphi=x^2$ 의 정상점 $0$ 은 $\varphi''(0)=2$ 이므로 비퇴화이고, $\varphi=x^3$ 의 정상점 $0$ 은 $\varphi''(0)=0$ 이므로 퇴화다. $\varphi=x$ 는 정상점이 없다.

$x\in\mathbb R^n$ 이면 $\nabla\varphi(x_0)=0$ 인 점이 정상점이고, [Hessian](hessian.md) $H=D^2\varphi(x_0)$ 가 가역이면 비퇴화다. 비퇴화 조건은 [Morse 이론](morse-theory.md)의 비퇴화 임계점과 같다. $H$ 의 양의 고윳값 개수에서 음의 고윳값 개수를 뺀 값을 부호수(signature) $\sigma(H)$ 라 하고, 음의 [고윳값](eigenvalues.md) 개수를 Morse 지표(Morse index)라 한다.

# 성질

## 1 차원 정상위상 공식

$g\in C_c^\infty(\mathbb R)$ 이고 $\varphi$ 가 $g$ 의 받침 위에서 매끄럽다고 하자.

1. $\varphi'\ne0$ 이면 모든 $N$ 에 대해 $I(\lambda)=O(\lambda^{-N})$ 이다.
2. $\varphi$ 가 유일한 정상점 $x_0$ 를 갖고 그 점이 비퇴화이면 다음이 성립한다.

$$
I(\lambda)=g(x_0)\thinspace e^{i\lambda\varphi(x_0)}\sqrt{\frac{2\pi}{\lambda\vert\varphi''(x_0)\vert}}\thickspace e^{i\pi\mathrm{sgn}\varphi''(x_0)/4}\Big(1+O(\lambda^{-1})\Big)
$$

정상점이 여럿이면 각각의 기여를 더한다. $\varphi=x^2$, $g(0)=1$ 이면 주항은 $\sqrt{\pi/\lambda}\thinspace e^{i\pi/4}$ 이고 개요의 값과 같다.

증명의 요지. 1 은 직관 절의 부분적분을 되풀이한다. $g$ 의 받침이 콤팩트하므로 경계항이 없고 매번 $1/\lambda$ 이 붙는다. 이것은 Riemann–Lebesgue 보조정리(Riemann–Lebesgue lemma)의 정량적 판본이다. 2 는 정상점 주위를 잘라 내고 $\varphi$ 를 2 차까지 전개한 뒤 Fresnel 적분(Fresnel integral)을 쓴다.

## 위상 인자

2 차까지 전개한 뒤 남는 적분이 Fresnel 적분이다.

$$
\int_{-\infty}^{\infty}e^{i\lambda\varphi''(x-x_0)^2/2}dx
=\sqrt{\frac{2\pi}{\lambda\vert\varphi''\vert}}\thickspace e^{i\pi\mathrm{sgn}(\varphi'')/4}
$$

$e^{\pm i\pi/4}$ 는 $\int e^{-ax^2}dx=\sqrt{\pi/a}$ 를 $a=-i\lambda\varphi''/2$ 라는 순허수까지 해석적으로 연장할 때 제곱근이 택하는 가지에서 나온다. $a$ 가 양의 실수에서 허축으로 회전하면 $\sqrt{1/a}$ 의 편각이 $\mp\pi/4$ 만큼 돈다.

## 고차원 공식

$x\in\mathbb R^n$ 이고 $\varphi$ 의 정상점 $x_0$ 가 비퇴화이면 다음이 성립한다.

$$
\int_{\mathbb R^n}g\thinspace e^{i\lambda\varphi}dx
=g(x_0)e^{i\lambda\varphi(x_0)}\Big(\frac{2\pi}{\lambda}\Big)^{n/2}\frac{e^{i\pi\thinspace\sigma(H)/4}}{\sqrt{\vert\det H\vert}}\Big(1+O(\lambda^{-1})\Big)
$$

$\sigma(H)=n-2\cdot(\text{Morse 지표})$ 이므로 위상 인자에 Morse 지표가 나타난다. 진폭의 $\vert\det H\vert^{-1/2}$ 는 정상점 근처에서 $\varphi$ 가 얼마나 평평한지를 나타내고, 무한차원에서는 이 행렬식이 정규화되어 비틀림 같은 위상적 불변량이 된다.

## 퇴화 정상점

$\varphi''(x_0)=0$ 이면 폭이 $\lambda^{-1/2}$ 가 아니다. $\varphi-\varphi(x_0)\sim c(x-x_0)^k$ 이면 폭과 기여가 $\lambda^{-1/k}$ 이고, $k=3$ 에서 [Airy 함수](airy-functions.md)가 나온다.

$$
\mathrm{Ai}(t)=\frac1{2\pi}\int_{-\infty}^{\infty}e^{i(s^3/3+ts)}ds
$$

$t\lt 0$ 이면 정상점이 둘이라 진동하고, $t\gt 0$ 이면 실수 정상점이 없어 지수적으로 작아진다. 경계 $t=0$ 에서 두 정상점이 만나 퇴화한다. 무지개의 밝은 띠, 파동의 초점선(caustic), [WKB 근사](wkb-approximation.md)(Wentzel–Kramers–Brillouin)가 전향점에서 쓸 수 없게 되는 현상이 이 경우다.

## Laplace 방법과의 대조

| | Laplace 적분 (실 지수) | 정상위상 적분 (허 지수) |
|---|---|---|
| 크기를 정하는 것 | 감쇠 | 상쇄 |
| 주항을 주는 점 | 최대점 | 모든 정상점 |
| 임계점 없을 때 | 경계항이 주항 | $O(\lambda^{-N})$ 모든 $N$ |
| 여러 임계점 | 최대인 것 하나만 남음 | 전부 남아 간섭 |
| 추가 위상 | 없음 | $e^{i\pi\sigma/4}$ (Morse 지표) |
| 점근급수의 성격 | 발산, Borel 합 가능 | 발산, 복소 안장점 기여 |

최대급강하법(method of steepest descent)은 둘 사이에 있다. 복소 안장점을 지나는 경로를 잡으면 진동이 사라져 Laplace 형태가 되지만, 어느 안장점을 지나는 경로로 변형할 수 있는지가 매개변수에 따라 바뀌고 그 전환이 [Stokes 현상](stokes-phenomenon.md)이다. 실축에서 정상점이 만나는 자리와 복소평면에서 Stokes 선이 나타나는 자리는 같은 매개변수 값이다.

## 정상점 사이의 간섭

정상점이 $x_1,x_2$ 두 개이고 $\varphi''(x_1)\gt 0\gt\varphi''(x_2)$ 이면 다음이 성립한다.

$$
I(\lambda)\approx\sqrt{\frac{2\pi}{\lambda}}\Big\lbrack\frac{g(x_1)}{\sqrt{\vert\varphi''(x_1)\vert}}e^{i\lambda\varphi(x_1)+i\pi/4}
+\frac{g(x_2)}{\sqrt{\vert\varphi''(x_2)\vert}}e^{i\lambda\varphi(x_2)-i\pi/4}\Big\rbrack
$$

두 항의 위상차가 $\lambda(\varphi(x_1)-\varphi(x_2))+\pi/2$ 이므로 $\vert I(\lambda)\vert$ 가 $\lambda^{-1/2}$ 로 줄면서 주기적으로 진동하고, 어떤 $\lambda$ 에서는 거의 $0$ 이 된다.

같은 구조가 양자 불변량의 점근에 나타난다. Chern–Simons 경로적분에서 임계점은 평탄 접속, 임계값 $\varphi(x_\alpha)$ 는 Chern–Simons 불변량, $\vert\det H\vert^{-1/2}$ 는 [Reidemeister 비틀림](reidemeister-torsion.md), $\sigma(H)$ 는 스펙트럼 흐름이고, 이 대응이 [Witten 점근 추측](witten-asymptotics.md)의 진술이다. 양자 불변량이 어떤 $k$ 에서 $0$ 이 되는 현상도 두 항의 상쇄와 같다.

# 활용

- 파동의 전파. 분산관계 $\omega(k)$ 를 가진 파동의 해는 $\int A(k)e^{i(kx-\omega(k)t)}dk$ 이고, 정상점 조건 $x/t=\omega'(k)$ 가 군속도(group velocity)의 정의다. 관측자가 보는 파수는 자기 속도에 맞는 군속도를 가진 성분이다.
- 반고전 극한. $\hslash\to0$ 에서 Feynman 경로적분의 정상점이 고전 궤도이고, Morse 지표가 Maslov 지표(Maslov index)가 되어 WKB 근사의 위상을 준다. 전향점에서 Airy 함수가 나오는 것이 퇴화 정상점의 표준형이다.
- 양자 불변량의 점근. 간섭 절의 대응을 무한차원으로 옮긴 것이 Witten 점근 추측이며, 유한차원에서 정당화되는 계산이 그쪽에서는 정의되지 않아 다른 방법으로 증명해야 한다.

# 연관 문서

## 선수지식

- [Laplace 방법](laplace-method.md)

## 더 알아보기

- [Witten 점근 추측과 Ohtsuki 급수](witten-asymptotics.md)
- [Airy 함수](airy-functions.md)

#analysis #complex_analysis #computation
