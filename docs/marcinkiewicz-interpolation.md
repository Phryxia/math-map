# Marcinkiewicz 보간 정리

# 개요

작용소가 두 지수 $p_0$ 과 $p_1$ 에서 $L^p$ 노름을 받치지 못하고 $\lambda$ 를 넘는 집합의 크기만 받칠 때가 있다. 특이적분 작용소의 $p=1$ 이 그 자리다.

Marcinkiewicz 보간 정리는 이 약한 추정 둘에서 그 사이 지수의 $L^p$ 유계성을 끌어낸다[^1]. 선형성 대신 준선형성만 쓰고 끝점 지수는 결론에서 빠진다.

# 직관

$T$ 가 $L^1$ 과 $L^2$ 에서 약한 추정을 가질 때 $\Vert Tf\Vert\_{L^{3/2}}$ 를 재려 한다. $L^p$ 노름은 분포함수 $d_g(\lambda)=\vert\lbrace\vert g\vert\gt \lambda\rbrace\vert$ 로 다시 적을 수 있으므로 약한 추정을 그대로 넣을 수 있다.

$$
\Vert g\Vert\_{L^p}^p=p\int_0^\infty\lambda^{p-1}\thinspace d_g(\lambda)\thinspace d\lambda
$$

$p=3/2$ 에 $d\_{Tf}(\lambda)\le C_1\Vert f\Vert\_{L^1}/\lambda$ 를 넣으면 피적분함수가 $\lambda^{-1/2}$ 이고 그 적분은 $\lambda\to\infty$ 에서 발산한다. $d\_{Tf}(\lambda)\le C_2^2\Vert f\Vert\_{L^2}^2/\lambda^2$ 를 넣으면 피적분함수가 $\lambda^{-3/2}$ 이고 그 적분은 $\lambda\to 0$ 에서 발산한다. 한쪽만으로는 양쪽 끝 가운데 하나가 반드시 발산한다.

두 추정이 발산하는 끝이 서로 다르므로 큰 $\lambda$ 에서는 둘째를, 작은 $\lambda$ 에서는 첫째를 쓴다. 노름이 둘이라 $\lambda$ 마다 다른 함수의 노름을 써야 하므로 $f$ 자체를 $\lambda$ 를 기준으로 가른다.

$$
f=f\thinspace\mathbf 1\_{\lbrace\vert f\vert\gt \lambda\rbrace}+f\thinspace\mathbf 1\_{\lbrace\vert f\vert\le\lambda\rbrace}
$$

앞 조각은 $L^1$ 에, 뒤 조각은 $L^2$ 에 들고 각 조각의 노름이 $\lambda$ 에 의존한다. 두 약한 추정을 각 조각에 쓰고 위 적분에 넣으면 $\lambda$ 적분이 수렴하며 $\Vert f\Vert\_{L^{3/2}}$ 가 나온다.

# 정의

## 분포함수

가측함수 $g$ 의 **분포함수**는 다음과 같다.

$$
d_g(\lambda)=\vert\lbrace x:\vert g(x)\vert\gt \lambda\rbrace\vert\qquad(\lambda\gt 0)
$$

$0\lt p\lt\infty$ 에서 $\Vert g\Vert\_{L^p}^p=p\int_0^\infty\lambda^{p-1}d_g(\lambda)\thinspace d\lambda$ 가 성립한다. Fubini 정리를 $\vert g(x)\vert^p=p\int_0^{\vert g(x)\vert}\lambda^{p-1}d\lambda$ 에 적용해 적분 순서를 바꾸면 나온다.

## 약한 유형

$T$ 가 모든 $f\in L^p$ 와 모든 $\lambda\gt 0$ 에서 다음을 만족하면 **약한 유형** $(p,q)$ 라 한다.

$$
d\_{Tf}(\lambda)\le\left(\frac{C\thinspace\Vert f\Vert\_{L^p}}{\lambda}\right)^q
$$

Chebyshev 부등식이 $d\_{Tf}(\lambda)\le\lambda^{-q}\Vert Tf\Vert\_{L^q}^q$ 를 주므로 $L^p\to L^q$ 유계이면 약한 유형 $(p,q)$ 다. 그 반대는 성립하지 않는다. 강한 추정이 성립할 때 **강한 유형** $(p,q)$ 라 한다.

## 준선형 작용소

어떤 $K\gt 0$ 에 대해 모든 $f,g$ 에서 $\vert T(f+g)\vert\le K(\vert Tf\vert+\vert Tg\vert)$ 가 거의 모든 점에서 성립하면 $T$ 를 **준선형**이라 한다. 극대함수처럼 상한으로 정의한 작용소가 선형은 아니면서 이 조건을 만족한다.

# 성질

## 보간 정리

$1\le p_0\lt p_1\le\infty$ 이고 준선형 작용소 $T$ 가 약한 유형 $(p_0,p_0)$ 과 $(p_1,p_1)$ 이면, 각 $p_0\lt p\lt p_1$ 에서 $T$ 는 강한 유형 $(p,p)$ 다.

$$
\Vert Tf\Vert\_{L^p}\le C_p\thinspace\Vert f\Vert\_{L^p}
$$

증명의 요지. $p_1\lt\infty$ 로 둔다. 직관 절의 분해 $f=f_0+f_1$ 에 준선형성을 쓰면 $d\_{Tf}(\lambda)\le d\_{Tf_0}(\lambda/2K)+d\_{Tf_1}(\lambda/2K)$ 이고, 각 항에 약한 추정을 쓰면 $\lambda^{-p_0}\Vert f_0\Vert\_{L^{p_0}}^{p_0}$ 과 $\lambda^{-p_1}\Vert f_1\Vert\_{L^{p_1}}^{p_1}$ 의 상수배로 받친다. 분포함수 공식에 넣고 Fubini 정리로 $\lambda$ 적분을 먼저 하면 앞 항에서 $\int_0^{\vert f\vert}\lambda^{p-p_0-1}d\lambda$ 가 $\vert f\vert^{p-p_0}$ 에 비례하고 뒤 항에서 $\int\_{\vert f\vert}^\infty\lambda^{p-p_1-1}d\lambda$ 가 $\vert f\vert^{p-p_1}$ 에 비례한다. $p_0\lt p\lt p_1$ 이 두 적분의 수렴 조건이며, 각각에 $\vert f\vert^{p_0}$ 과 $\vert f\vert^{p_1}$ 을 곱하면 둘 다 $\vert f\vert^p$ 이 되어 $\Vert f\Vert\_{L^p}^p$ 로 모인다. 상수 $C_p$ 는 $(p-p_0)^{-1}$ 과 $(p_1-p)^{-1}$ 을 인자로 가지므로 $p$ 가 끝점에 가면 발산한다. $p_1=\infty$ 인 경우는 뒤 조각에 $\Vert f_1\Vert\_{L^\infty}\le\lambda$ 를 써서 그 항을 없앤다.

## 끝점

결론은 열린 구간 $p_0\lt p\lt p_1$ 에서만 성립하고 끝점에서 약한 유형이 강한 유형으로 올라가지 않는다. [Calderón–Zygmund 이론](calderon-zygmund-theory.md)의 Hilbert 변환이 그 예다. 이 작용소는 약한 유형 $(1,1)$ 이지만 $L^1$ 에서 강한 유형이 아니다.

## Riesz–Thorin 정리와의 차이

[Riesz–Thorin 정리](riesz-thorin.md)는 강한 유형 $(p_0,q_0)$ 과 $(p_1,q_1)$ 에서 그 사이의 강한 유형을 주고, 선형 작용소에만 쓰이며 증명은 띠 영역에서 해석함수의 최대원리를 쓴다. 상수는 $C_0^{1-\theta}C_1^\theta$ 로 두 끝 상수의 기하평균이고 끝점을 포함한다. Marcinkiewicz 정리는 가정이 약한 유형이면 되고 준선형 작용소에 쓰이며 증명이 분포함수의 적분뿐이지만, 상수가 기하평균보다 크고 끝점을 잃는다.

## 일반형

지수가 대각에 있지 않은 경우에도 성립한다. $q_0\ne q_1$, $p_i\le q_i$ 이고 $T$ 가 약한 유형 $(p_0,q_0)$ 과 $(p_1,q_1)$ 이면, $0\lt\theta\lt 1$ 에 대해 $1/p=(1-\theta)/p_0+\theta/p_1$ 과 $1/q=(1-\theta)/q_0+\theta/q_1$ 로 정한 $(p,q)$ 에서 $T$ 는 강한 유형이다. $p_i\le q_i$ 조건을 빼면 반례가 있다.

# 활용

- **특이적분 작용소.** Calderón–Zygmund 정리의 증명이 약한 유형 $(1,1)$ 과 강한 유형 $(2,2)$ 를 이 정리로 이어 $1\lt p\lt 2$ 를 얻는다. 나머지 $2\lt p\lt\infty$ 는 쌍대 작용소에 같은 결과를 쓴다.
- **극대함수.** [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md)는 상한으로 정의되어 선형이 아니지만 준선형이고, 약한 유형 $(1,1)$ 과 자명한 $(\infty,\infty)$ 를 가지므로 $1\lt p\le\infty$ 에서 $L^p$ 유계다. 끝점 $p=1$ 에서는 유계가 아니다.
- **Riesz 가능성.** 핵 $\vert x\vert^{\alpha-n}$ 의 합성곱 작용소가 약한 유형 추정을 가지므로 보간이 Hardy–Littlewood–Sobolev 부등식을 준다. [Sobolev 공간](sobolev-spaces.md)의 매입 정리를 이 부등식으로 증명한다.
- **에르고딕 평균.** [Birkhoff 에르고딕 정리](ergodic-theorem.md)의 증명에 쓰는 극대 에르고딕 부등식이 약한 유형 $(1,1)$ 이고, 보간이 $1\lt p\lt\infty$ 에서 평균의 $L^p$ 수렴을 준다.

[^1]: J. Marcinkiewicz, "Sur l'interpolation d'opérations", Comptes Rendus de l'Académie des Sciences Paris **208** (1939), 1272–1273. 증명을 적지 않은 고지였고, A. Zygmund 가 "On a theorem of Marcinkiewicz concerning interpolation of operations", Journal de Mathématiques Pures et Appliquées **35** (1956), 223–248 에서 증명과 일반형을 주었다.

# 연관 문서

## 선수지식

- [$L^p$ 공간](lp-spaces.md)

## 더 알아보기

- [Hardy–Littlewood 극대함수](hardy-littlewood-maximal-function.md)
- [Calderón–Zygmund 이론](calderon-zygmund-theory.md)

#analysis #functional_analysis #measure_theory
