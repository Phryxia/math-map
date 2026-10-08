# Hardy–Littlewood 극대함수

# 개요

$f$ 를 중심이 $x$ 인 공에서 평균한 값은 반지름에 따라 변한다. Hardy–Littlewood 극대함수는 그 평균들의 상한이다[^1].

이 함수의 분포를 $\Vert f\Vert\_{L^1}$ 로 받치는 추정 하나가 공의 평균이 $f(x)$ 로 수렴하는 것과 근사 항등원과의 합성곱이 수렴하는 것을 함께 준다. 상한을 취하므로 선형이 아니고 준선형이다.

# 직관

$f\in L^1(\mathbb R^n)$ 의 공 평균이 반지름을 줄일 때 $f(x)$ 로 가는지 묻는다. $f$ 가 연속이면 각 점에서 참이다.

$$
\frac{1}{\vert B_r(x)\vert}\int\_{B_r(x)}f(y)\thinspace dy\ \longrightarrow\ f(x)\qquad(r\to 0)
$$

연속함수는 $L^1$ 에서 조밀하므로 $\Vert f-g\Vert\_{L^1}\lt\varepsilon$ 인 연속함수 $g$ 를 잡는다. $g$ 의 평균은 모든 점에서 수렴하므로 남은 것은 $f-g$ 의 평균이다. 그런데 $\Vert f-g\Vert\_{L^1}$ 이 작다는 것만으로는 어느 점에서도 그 평균의 상한이 작다고 말할 수 없다. 좁은 공 위에서 큰 값을 갖는 함수는 $L^1$ 노름이 작으면서 그 공의 평균이 크다.

받칠 수 없는 것은 각 점의 값이고 받칠 수 있는 것은 상한이 큰 점들의 크기다. 평균의 상한이 $\lambda$ 를 넘는 집합의 부피가 $\Vert f-g\Vert\_{L^1}/\lambda$ 이하라면, $\varepsilon$ 을 줄여 가며 그 집합들의 교집합을 보면 수렴하지 않는 점 전체가 영집합이 된다. 그래서 평균의 상한을 함수로 두고 그 함수의 분포를 재는 것이 다음 수다.

# 정의

## 극대함수

$f\in L^1\_{\mathrm{loc}}(\mathbb R^n)$ 의 **Hardy–Littlewood 극대함수**는 다음과 같다.

$$
Mf(x)=\sup\_{r\gt 0}\frac{1}{\vert B_r(x)\vert}\int\_{B_r(x)}\vert f(y)\vert\thinspace dy
$$

$x$ 를 중심으로 하는 공만 쓴 것을 중심 극대함수, $x$ 를 품는 모든 공을 쓴 것을 비중심 극대함수라 한다. 비중심 쪽이 크고 두 함수는 $2^n$ 배 안에서 서로 받치므로 유계성에 관한 결과가 같다. $M(f+g)\le Mf+Mg$ 이므로 $M$ 은 준선형이고, 상한을 취하는 자리에서 선형성이 깨진다.

## Vitali 덮개 보조정리

공 $B_1,\dots,B_N$ 에 대해 서로 겹치지 않는 부분열 $B\_{i_1},\dots,B\_{i_k}$ 가 있어 다음이 성립한다.

$$
\Bigl\vert\bigcup\_{m=1}^N B_m\Bigr\vert\le 3^n\sum\_{j=1}^k\vert B\_{i_j}\vert
$$

구성은 반지름이 큰 공부터 고르고 이미 고른 공과 만나는 것을 버리는 것이다. 버려진 공은 자신보다 크거나 같은 어떤 고른 공과 만나므로 그 공을 세 배로 늘린 것 안에 든다.

# 성질

## 약한 유형 $(1,1)$ 추정

모든 $f\in L^1(\mathbb R^n)$ 과 $\lambda\gt 0$ 에서 다음이 성립한다.

$$
\vert\lbrace x:Mf(x)\gt \lambda\rbrace\vert\le\frac{3^n}{\lambda}\Vert f\Vert\_{L^1}
$$

증명의 요지. $E\_\lambda=\lbrace Mf\gt \lambda\rbrace$ 의 각 점 $x$ 에는 평균이 $\lambda$ 를 넘는 공 $B_x$ 가 있어 $\vert B_x\vert\lt\lambda^{-1}\int\_{B_x}\vert f\vert$ 다. $E\_\lambda$ 의 콤팩트 부분집합을 그 공들 가운데 유한 개로 덮고 Vitali 보조정리로 겹치지 않는 부분열을 뽑으면, 그 콤팩트 집합의 부피가 $3^n$ 배의 부분열 부피 합 이하이고 부분열이 겹치지 않으므로 그 합이 $\lambda^{-1}\Vert f\Vert\_{L^1}$ 이하다. 콤팩트 부분집합에 대해 상한을 취한다.

## $L^p$ 유계성

$\Vert Mf\Vert\_{L^\infty}\le\Vert f\Vert\_{L^\infty}$ 는 평균이 상한을 넘지 못하는 것에서 바로 나온다. 이 강한 유형 $(\infty,\infty)$ 와 위의 약한 유형 $(1,1)$ 에 [Marcinkiewicz 보간 정리](marcinkiewicz-interpolation.md)를 쓰면 각 $1\lt p\le\infty$ 에서 유계성이 나온다.

$$
\Vert Mf\Vert\_{L^p}\le C\_{n,p}\thinspace\Vert f\Vert\_{L^p}
$$

$M$ 이 선형이 아니므로 선형 작용소를 요구하는 보간 정리로는 이 결론을 얻지 못한다.

## $p=1$ 에서의 비유계성

$f\in L^1$ 이고 $f$ 가 영함수가 아니면 $Mf\notin L^1$ 이다. $\vert f\vert$ 의 적분이 양수인 공 $B$ 를 하나 잡고 $\vert x\vert$ 가 충분히 크면, $x$ 를 중심으로 $B$ 를 품는 공의 반지름이 $\vert x\vert$ 와 같은 크기이므로 $Mf(x)\ge c_n\vert x\vert^{-n}\int_B\vert f\vert$ 다. $\vert x\vert^{-n}$ 은 무한대 근방에서 적분되지 않는다.

## Lebesgue 미분 정리

$f\in L^1\_{\mathrm{loc}}(\mathbb R^n)$ 이면 거의 모든 $x$ 에서 공 평균이 $f(x)$ 로 수렴한다.

증명의 요지. 직관 절의 흐름을 약한 추정으로 닫는다. 연속함수 $g$ 로 $\Vert f-g\Vert\_{L^1}\lt\varepsilon$ 을 잡으면 $\limsup\_{r\to 0}$ 로 잰 오차가 $M(f-g)(x)+\vert f(x)-g(x)\vert$ 이하다. 이것이 $\lambda$ 를 넘는 집합의 부피는 약한 추정과 Chebyshev 부등식으로 $(3^n+1)\varepsilon/\lambda$ 이하이고, $\varepsilon$ 이 임의이므로 그 집합은 영집합이다. $\lambda$ 를 $1/k$ 로 두고 가산 합집합을 취한다. 수렴하는 점을 $f$ 의 **Lebesgue 점**이라 한다.

# 활용

- **근사 항등원의 각점 수렴.** 핵 $\varphi\_\varepsilon(x)=\varepsilon^{-n}\varphi(x/\varepsilon)$ 가 적분 $1$ 이고 꼬리가 충분히 빨리 줄면 $\vert f\ast\varphi\_\varepsilon(x)\vert\le C\thinspace Mf(x)$ 이므로, Lebesgue 점에서 $f\ast\varphi\_\varepsilon(x)\to f(x)$ 다. Gauss 핵과 Poisson 핵의 경계값 수렴이 이 추정으로 나온다.
- **특이적분의 각점 추정.** [Calderón–Zygmund 이론](calderon-zygmund-theory.md)에서 특이적분 작용소의 절단값을 $Mf$ 와 $M(Tf)$ 로 받치는 추정이 극대 특이적분의 유계성을 주고, 거기서 주값 적분이 거의 모든 점에서 존재한다는 결론이 나온다.
- **에르고딕 평균.** [Birkhoff 에르고딕 정리](ergodic-theorem.md)의 증명이 쓰는 극대 에르고딕 부등식은 평균의 상한을 재고 약한 유형 $(1,1)$ 을 결론으로 갖는 같은 구조이며, 덮개 논법의 자리를 올림 보조정리가 맡는다.
- **Sobolev 함수의 각점 성질.** 기울기의 극대함수로 $\vert f(x)-f(y)\vert$ 를 받치면 $W^{1,p}$ 함수가 $p\gt n$ 에서 Hölder 연속이 된다. [Sobolev 공간](sobolev-spaces.md)의 매입 정리를 이 방식으로 증명한다.

[^1]: G. H. Hardy, J. E. Littlewood, "A maximal theorem with function-theoretic applications", Acta Mathematica **54** (1930), 81–116. 실직선 위에서 세웠고, N. Wiener 가 "The ergodic theorem", Duke Mathematical Journal **5** (1939), 1–18 에서 $\mathbb R^n$ 과 측도 보존 변환으로 넓혔다.

# 연관 문서

## 선수지식

- [Marcinkiewicz 보간 정리](marcinkiewicz-interpolation.md)

## 더 알아보기

- [극대 특이적분](maximal-singular-integral.md)

#analysis #measure_theory #functional_analysis
