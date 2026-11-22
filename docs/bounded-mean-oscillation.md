# 유계 평균 진동 공간

# 개요

**유계 평균 진동 공간(bounded mean oscillation, BMO)** 은 어느 구간을 잡아도 함수가 그 구간의 평균에서 벗어난 정도의 평균이 일정한 값 이하인 함수들의 공간이다. $\log\vert x\vert$ 는 $0$ 근처에서 한없이 작아지므로 유계가 아니지만, 구간 $\lbrack 0,r\rbrack$ 에서 평균을 빼고 벗어난 크기를 평균 내면 $r$ 에 관계없이 $2/e$ 다. 유계 함수에 Hilbert 변환 같은 특이적분을 적용하면 이런 로그 꼴의 함수가 나오고, 이 공간이 그 결과를 담는다.

# 직관

구간 $\lbrack 0,1\rbrack$ 의 지시함수 $f$ 는 유계다. [Calderón–Zygmund 이론](calderon-zygmund-theory.md)의 Hilbert 변환(Hilbert transform)을 $f$ 에 적용하면 다음이 나온다.

$$
Hf(x)=\frac{1}{\pi}\log\left\vert\frac{x}{x-1}\right\vert
$$

$x\to 0$ 에서 $Hf$ 가 무한대로 가므로 $Hf$ 는 유계가 아니다. 유계 함수를 유계 함수로 보내지 않으니, 최댓값으로는 $Hf$ 의 크기를 잴 수 없다.

$Hf$ 가 커지는 것은 $0$ 근처의 로그 때문이다. 로그는 크지만 천천히 커지므로, 짧은 구간 안에서는 값들이 서로 크게 다르지 않다. 그래서 구간마다 그 구간의 평균을 빼고 남은 크기를 본다. 구간 $\lbrack 0,r\rbrack$ 에서 $\log x$ 의 평균은 $\log r-1$ 이고, $u=x/r$ 로 바꾸면 벗어난 크기의 평균은 다음과 같다.

$$
\frac1r\int_0^r\bigl\vert\log x-(\log r-1)\bigr\vert\thinspace dx=\int_0^1\vert\log u+1\vert\thinspace du=\frac2e
$$

$r$ 이 사라지므로 아무리 짧은 구간을 잡아도 이 값은 $2/e$ 다.

# 정의

$\mathbb R^n$ 위의 국소 적분가능 함수 $f$ 와 정육면체 $Q$ 에 대해 $f\_Q=\frac{1}{\vert Q\vert}\int_Qf$ 를 $Q$ 위의 평균이라 하자. 다음 값을 $f$ 의 **BMO 노름(BMO norm)** 이라 한다.

$$
\Vert f\Vert\_{\ast}=\sup_Q\frac{1}{\vert Q\vert}\int_Q\vert f-f\_Q\vert\thinspace dx
$$

$\Vert f\Vert\_\ast\lt\infty$ 인 함수들을 상수 차이를 같은 것으로 보고 모은 공간을 **유계 평균 진동 공간** $\mathrm{BMO}(\mathbb R^n)$ 이라 한다. 상수 함수의 노름이 $0$ 이므로 상수 차이를 같은 것으로 보아야 노름이 된다.

$\vert f\vert\le M$ 이면 각 $Q$ 에서 $\vert f-f\_Q\vert\le 2M$ 이므로 $\Vert f\Vert\_\ast\le 2\Vert f\Vert\_\infty$ 이고, $L^\infty\subset\mathrm{BMO}$ 다. $\log\vert x\vert$ 는 BMO 에 들고 유계가 아니므로 포함은 진부분집합이다. 직관 절에서 $\lbrack 0,r\rbrack$ 꼴 구간을 보았고, $0$ 에서 길이 이상 떨어진 구간 $\lbrack a,b\rbrack$ 에서는 $\log b-\log a\le\log 2$ 다.

$\mathrm{sgn}(x)\log\vert x\vert$ 는 BMO 에 들지 않는다. 구간 $\lbrack -r,r\rbrack$ 에서 평균이 $0$ 이고 벗어난 크기의 평균은 $\vert\log r-1\vert$ 정도여서 $r\to 0$ 에서 무한대로 간다.

# 성질

## John–Nirenberg 부등식

$f\in\mathrm{BMO}$ 이면 모든 정육면체 $Q$ 와 $\lambda\gt 0$ 에서 다음이 성립한다. 상수 $C_1,C_2$ 는 $n$ 에만 의존한다[^1].

$$
\bigl\vert\lbrace x\in Q:\vert f(x)-f\_Q\vert\gt\lambda\rbrace\bigr\vert\le C_1\vert Q\vert\thinspace e^{-C_2\lambda/\Vert f\Vert\_\ast}
$$

이것을 **John–Nirenberg 부등식(John–Nirenberg inequality)** 이라 한다. 평균에서 $\lambda$ 이상 벗어난 부분의 크기가 $\lambda$ 에 대해 지수적으로 줄어든다. $\log\vert x\vert$ 에서 $\lbrack 0,1\rbrack$ 위 $\vert\log x+1\vert\gt\lambda$ 인 부분은 대략 $x\lt e^{-1-\lambda}$ 이고 길이가 $e^{-1-\lambda}$ 이므로, 이 지수 감쇠에 따라 로그보다 빨리 커지는 함수는 BMO 에 들지 않는다.

증명의 요지. $Q$ 를 Calderón–Zygmund 분해로 잘라 $\vert f-f\_Q\vert$ 의 평균이 $2\Vert f\Vert\_\ast$ 를 넘는 가장 큰 작은 정육면체들을 고르면, 그 넓이의 합은 $\vert Q\vert/2$ 이하이고 그 위의 평균은 $f\_Q$ 와 $2^{n+1}\Vert f\Vert\_\ast$ 이하로 다르다. 작은 정육면체마다 같은 분해를 되풀이하면 $k$ 번째 단계에서 넓이가 $2^{-k}\vert Q\vert$ 이하이고 벗어난 크기는 $k$ 에 비례해 늘어나므로 지수 감쇠가 나온다.

부등식에서 $1\le p\lt\infty$ 마다 $\Vert f\Vert\_\ast$ 와 $\sup_Q\bigl(\frac{1}{\vert Q\vert}\int_Q\vert f-f\_Q\vert^p\bigr)^{1/p}$ 가 상수배 안에서 같다.

## 특이적분의 유계성

Calderón–Zygmund 작용소 $T$ 는 $L^\infty$ 를 BMO 로 보내고, $\Vert Tf\Vert\_\ast\le C\Vert f\Vert\_\infty$ 다. 직관 절의 $Hf$ 가 그 예다.

## H¹ 과의 쌍대성

[실 Hardy 공간](real-hardy-spaces.md) $H^1(\mathbb R^n)$ 은 $L^1$ 함수 가운데 Riesz 변환이 모두 $L^1$ 에 드는 것들의 공간이다. $H^1$ 의 쌍대공간은 BMO 다. 곧 $g\in\mathrm{BMO}$ 마다 $f\mapsto\int fg$ 가 $H^1$ 위의 유계 선형범함수로 확장되고, 모든 유계 선형범함수가 이 꼴이다[^2]. $L^1$ 의 쌍대공간이 $L^\infty$ 인 것과 견주면 $H^1$ 은 $L^1$ 보다 작고 BMO 는 $L^\infty$ 보다 크다.

## Carleson 측도 판정

원 위의 적분가능 함수 $\varphi$ 의 Poisson 적분(Poisson integral)을 단위원판의 조화함수 $u$ 라 하자. $\varphi$ 가 원 위의 BMO 에 드는 것은 $\vert\nabla u(z)\vert^2(1-\vert z\vert)\thinspace dA(z)$ 가 [Carleson 측도](carleson-measures.md)인 것과 동치다[^2]. 쌍대성의 증명은 이 판정과 Carleson 매립 정리를 쓴다.

## 보간

$1\le p_0\lt p\lt\infty$ 이고 선형작용소 $T$ 가 $L^{p_0}$ 에서 $L^{p_0}$ 로, $L^\infty$ 에서 BMO 로 유계이면 $T$ 는 $L^p$ 에서 $L^p$ 로 유계다[^2]. [Riesz–Thorin 정리](riesz-thorin.md)의 끝점 $L^\infty$ 를 BMO 로 바꾼 판이다.

# 활용

- 특이적분의 $L^p$ 유계성. Calderón–Zygmund 작용소가 $L^2$ 와 $L^\infty\to\mathrm{BMO}$ 에서 유계임을 보이고 보간하면 $2\le p\lt\infty$ 의 $L^p$ 유계성이 나온다.
- 해석함수의 경계값. 원판의 [Hardy 공간](hardy-spaces.md) $H^1$ 의 쌍대공간이 경계값의 BMO 로 적힌다.
- 편미분방정식. 계수의 BMO 노름이 작은 발산 꼴 타원형 방정식에서 해의 도함수의 $L^p$ 추정이 성립한다.
- 마팅게일. 확률론에서 BMO 마팅게일은 정지 시각마다 남은 증분의 조건부 기댓값이 유계인 마팅게일이고, 같은 John–Nirenberg 꼴의 지수 감쇠를 만족한다.

[^1]: F. John, L. Nirenberg, "On functions of bounded mean oscillation", Communications on Pure and Applied Mathematics 14 (1961).
[^2]: C. Fefferman, E. M. Stein, "Hᵖ spaces of several variables", Acta Mathematica 129 (1972).

# 연관 문서

## 선수지식

- [Calderón–Zygmund 이론](calderon-zygmund-theory.md)
- [Carleson 측도](carleson-measures.md)

## 더 알아보기

- [실 Hardy 공간](real-hardy-spaces.md)

#analysis #functional_analysis #complex_analysis
