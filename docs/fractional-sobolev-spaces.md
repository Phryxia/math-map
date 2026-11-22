# 분수 Sobolev 공간

# 개요

**분수 Sobolev 공간(fractional Sobolev space)** 은 함수가 몇 번 미분 가능한지를 정수가 아닌 수 $s$ 로 재어 모은 함수공간이다. 구간 $[0,1]$ 에서 $1$ 이고 밖에서 $0$ 인 계단 함수는 제곱적분 가능하지만, 도함수가 양 끝의 순간적인 치솟음이라 한 번 미분 가능한 함수의 공간에는 들지 않는다. 분수 Sobolev 공간은 두 점의 값 차이를 거리의 거듭제곱으로 나눈 양의 적분으로 매끄러움을 재어, 이 계단 함수가 $s\lt 1/2$ 인 공간에 들고 $s\ge 1/2$ 인 공간에는 들지 않는다는 답을 준다.

# 직관

계단 함수 $u=\mathbf 1\_{\lbrack 0,1\rbrack}$ 를 본다. [Sobolev 공간](sobolev-spaces.md) $H^1(\mathbb R)$ 에 들려면 도함수의 제곱적분이 유한해야 하는데, $u$ 의 도함수는 두 점에 몰린 치솟음이어서 함수가 아니다. 도함수 대신 두 점의 값 차이 $u(x)-u(y)$ 를 거리 $\vert x-y\vert$ 의 거듭제곱으로 나누어 모든 점의 쌍에 대해 더한다.

$x$ 와 $y$ 가 둘 다 $\lbrack 0,1\rbrack$ 안이거나 둘 다 밖이면 차이가 $0$ 이다. $x$ 가 안에 있고 $y\gt 1$ 이면 차이가 $1$ 이므로, 거듭제곱을 $\vert x-y\vert^{1+2s}$ 로 두면 이 쌍들의 몫을 더한 값은 다음이다.

$$
\int_0^1\int_1^\infty\frac{dy\thinspace dx}{(y-x)^{1+2s}}=\int_0^1\frac{(1-x)^{-2s}}{2s}\thinspace dx=\frac{1}{2s(1-2s)}
$$

이 적분은 $s\lt 1/2$ 이면 유한하고 $s\ge 1/2$ 이면 끝점 $x=1$ 근처에서 발산한다. 계단 함수의 매끄러움은 $1/2$ 바로 아래까지다.

[Fourier 변환](fourier-transform.md)으로 보아도 같은 경계가 나온다. $\vert\hat u(\xi)\vert^2$ 는 $\xi\to\infty$ 에서 $1/\xi^2$ 처럼 줄고, $\vert\xi\vert^{2s}\vert\hat u(\xi)\vert^2$ 가 적분 가능한 것은 $2s-2\lt -1$, 곧 $s\lt 1/2$ 일 때다.

# 정의

## Gagliardo 반노름

$\Omega\subset\mathbb R^n$ 이 열린집합이고 $0\lt s\lt 1$, $1\le p\lt\infty$ 라 하자. 측정 가능한 함수 $u$ 의 **Gagliardo 반노름(Gagliardo seminorm)** 은 다음이다.

$$
\lbrack u\rbrack\_{W^{s,p}(\Omega)}=\left(\int_\Omega\int_\Omega\frac{\vert u(x)-u(y)\vert^p}{\vert x-y\vert^{n+sp}}\thinspace dx\thinspace dy\right)^{1/p}
$$

직관 절의 계단 함수는 $n=1$, $p=2$ 인 경우다. $x$ 가 안이고 $y$ 가 밖인 쌍은 $y\gt 1$ 쪽과 $y\lt 0$ 쪽이 있고 순서쌍을 두 번 세므로, 직관 절의 적분의 네 배가 나온다.

$$
\lbrack u\rbrack\_{W^{s,2}(\mathbb R)}^2=\frac{2}{s(1-2s)},\qquad 0\lt s\lt\tfrac12
$$

## 분수 Sobolev 공간

$0\lt s\lt 1$ 이면 $L^p(\Omega)$ 의 원소 가운데 Gagliardo 반노름이 유한한 것 전체를 $W^{s,p}(\Omega)$ 라 하고, 노름 $\Vert u\Vert\_{L^p}+\lbrack u\rbrack\_{W^{s,p}}$ 를 준다. 이 공간을 **분수 Sobolev 공간** 또는 Sobolev–Slobodeckij 공간(Sobolev–Slobodeckij space)이라 한다[^1]. $s=k+\sigma$ ($k$ 는 정수, $0\lt\sigma\lt 1$) 이면 $u\in W^{k,p}(\Omega)$ 이고 차수가 $k$ 인 모든 약한 도함수가 $W^{\sigma,p}(\Omega)$ 에 드는 함수 전체를 $W^{s,p}(\Omega)$ 라 한다.

$p=2$ 이고 $\Omega=\mathbb R^n$ 이면 실수 $s\ge 0$ 마다 Fourier 변환으로 다음 공간을 둔다.

$$
H^s(\mathbb R^n)=\left\lbrace u\in L^2(\mathbb R^n):(1+\vert\xi\vert^2)^{s/2}\hat u\in L^2(\mathbb R^n)\right\rbrace
$$

계단 함수 $\mathbf 1\_{\lbrack 0,1\rbrack}$ 는 $0\le s\lt 1/2$ 에서 $H^s(\mathbb R)$ 에 들고 $s\ge 1/2$ 에서 들지 않는다.

# 성질

## 두 정의의 일치

정리. $0\lt s\lt 1$ 이면 상수 $C(n,s)\gt 0$ 이 있어 모든 $u\in L^2(\mathbb R^n)$ 에 대해 다음이 성립한다. 그러므로 $W^{s,2}(\mathbb R^n)=H^s(\mathbb R^n)$ 이고 두 노름은 동치다[^1].

$$
\lbrack u\rbrack\_{W^{s,2}(\mathbb R^n)}^2=C(n,s)\int\_{\mathbb R^n}\vert\xi\vert^{2s}\vert\hat u(\xi)\vert^2\thinspace d\xi
$$

증명의 요지. $y=x+h$ 로 두고 $x$ 에 대해 먼저 적분하면 Plancherel 정리로 $\int\vert u(x+h)-u(x)\vert^2dx$ 가 $\int\vert e^{2\pi ih\cdot\xi}-1\vert^2\vert\hat u(\xi)\vert^2d\xi$ 와 같다. 이것을 $\vert h\vert^{-n-2s}dh$ 로 적분할 때, $h$ 에 대한 적분은 회전과 척도 변환에 대한 불변성으로 $\vert\xi\vert^{2s}$ 의 상수배다.

오른쪽 적분은 [분수 Laplace 연산자](fractional-laplacian.md)로 쓰면 $\langle(-\Delta)^su,u\rangle$ 의 상수배다. 이 공간은 분수 Laplace 연산자를 다루는 방정식의 에너지 공간이다.

## 매장

정리. $0\lt s\lt 1$ 이고 $sp\lt n$ 이면 다음 연속 매장이 있다. $sp\gt n$ 이면 $W^{s,p}(\mathbb R^n)$ 의 함수는 지수 $s-n/p$ 의 [Hölder 공간](holder-spaces.md)에 드는 연속 대표원을 갖는다[^1].

$$
W^{s,p}(\mathbb R^n)\subset L^{np/(n-sp)}(\mathbb R^n)
$$

$n=1$, $p=2$ 에서 경계는 $s=1/2$ 다. $s\gt 1/2$ 이면 $H^s(\mathbb R)$ 의 함수가 연속이므로, 불연속인 계단 함수가 $H^s$ 에 들 수 없다는 것도 이 정리에서 나온다.

## 흔적 정리

정리. $\Omega\subset\mathbb R^n$ 이 유계이고 경계가 Lipschitz 이면, 경계로의 제한 $u\mapsto u\vert\_{\partial\Omega}$ 는 $W^{1,p}(\Omega)$ 에서 $W^{1-1/p,p}(\partial\Omega)$ 로 가는 유계 전사 선형사상으로 확장된다($1\lt p\lt\infty$)[^2].

$p=2$ 이면 $H^1(\Omega)$ 함수의 경계값 전체가 정확히 $H^{1/2}(\partial\Omega)$ 다. Sobolev 공간 문서의 흔적 정리(trace theorem)가 경계값을 $L^p(\partial\Omega)$ 에 넣는 것과 달리, 이 정리는 경계값이 이루는 공간을 정확히 정한다.

# 활용

- [Dirichlet 문제](dirichlet-problem.md)의 약한 꼴. 경계값 $g$ 를 준 Laplace 방정식이 $H^1(\Omega)$ 에 해를 가질 필요충분조건이 $g\in H^{1/2}(\partial\Omega)$ 이다. 흔적 정리가 이 조건을 준다.
- [유한요소법](finite-element-method.md)의 수렴 차수. L 자 모양 영역의 오목한 모서리 근처에서 해는 $r^{2/3}\sin(2\theta/3)$ 꼴이고 $\varepsilon\gt 0$ 마다 $H^{5/3-\varepsilon}$ 에 든다. 균일한 격자에서 $H^1$ 오차가 $h^{2/3-\varepsilon}$ 로만 줄어드는 이유가 이 분수 차수다.
- 분수 Laplace 연산자의 방정식 $(-\Delta)^su=f$ 를 [Lax–Milgram 정리](lax-milgram.md)로 풀 때 해를 찾는 공간이 $H^s$ 다.

[^1]: Eleonora Di Nezza, Giampiero Palatucci, Enrico Valdinoci, "Hitchhiker's guide to the fractional Sobolev spaces", *Bulletin des Sciences Mathématiques* 136 (2012), 521–573.
[^2]: Emilio Gagliardo, "Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in n variabili", *Rendiconti del Seminario Matematico della Università di Padova* 27 (1957), 284–305.

# 연관 문서

## 선수지식

- [Sobolev 공간](sobolev-spaces.md)

## 더 알아보기

- [Besov 공간](besov-spaces.md)

#functional_analysis #analysis
