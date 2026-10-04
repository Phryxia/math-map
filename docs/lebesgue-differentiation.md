# Lebesgue 미분정리

# 개요

Lebesgue 미분정리는 국소 가적분 함수의 작은 공 위 평균이 거의 모든 점에서 그 점의 함숫값으로 수렴한다는 정리다. 미적분학의 기본정리는 피적분함수의 연속성을 가정하는데, 이 정리는 그 가정을 지우고 결론을 측도 $0$ 의 예외를 허용하는 형태로 바꾼다. 증명의 도구는 Vitali 덮개 보조정리와 극대함수의 약한 추정이다.

# 직관

$f$ 가 연속이면 $F(x)=\int\_a^x f$ 의 도함수가 $f(x)$ 다. $f$ 가 연속이 아니면 어떻게 되는지 두 예로 본다.

$f$ 를 $x\ge 0$ 에서 $1$ , $x\lt 0$ 에서 $0$ 인 함수라 하자. $F(x)=\int\_0^x f$ 는 $x\gt 0$ 에서 $x$ , $x\le 0$ 에서 $0$ 이고, $x\ne 0$ 에서는 $F'(x)=f(x)$ 가 성립한다. $x=0$ 에서만 좌우 차분이 $0$ 과 $1$ 로 갈려 미분이 되지 않는다. 예외가 한 점이다.

$f$ 를 유리수에서 $1$ , 무리수에서 $0$ 인 함수라 하자. [Lebesgue 적분](lebesgue-integral.md)으로 $\int\_0^x f=0$ 이므로 $F\equiv 0$ 이고 $F'\equiv 0$ 이다. $f$ 와 $F'$ 는 유리수에서 값이 다르지만 유리수 집합의 측도는 $0$ 이다. 두 예에서 결론이 깨지는 점들의 측도가 모두 $0$ 이다.

차분을 평균으로 바꿔 쓰면 이 현상을 다룰 꼴이 나온다.

$$
\frac{F(x+h)-F(x)}{h}=\frac{1}{h}\int\_x^{x+h}f
$$

이므로 $F'(x)=f(x)$ 는 $x$ 주변 짧은 구간에서 $f$ 의 평균이 $f(x)$ 로 가는 것과 같다. 구간을 공으로 바꾸면 차원에 상관없이 쓸 수 있고, 이 꼴로 쓴 결론이 거의 모든 점에서 성립한다.

# 정의

$f\in L^1\_{\mathrm{loc}}(\mathbb R^n)$ 이라 하자. $B\_r(x)$ 를 중심 $x$ , 반지름 $r$ 인 공, $\vert B\_r(x)\vert$ 를 그 Lebesgue 측도라 한다.

점 $x$ 가 $f$ 의 **Lebesgue 점**이라는 것은 다음이 성립하는 것이다.

$$
\lim\_{r\to 0}\frac{1}{\vert B\_r(x)\vert}\int\_{B\_r(x)}\vert f(y)-f(x)\vert\thinspace dy=0
$$

$f$ 의 **Hardy–Littlewood 극대함수**는 다음이다.

$$
Mf(x)=\sup\_{r\gt 0}\frac{1}{\vert B\_r(x)\vert}\int\_{B\_r(x)}\vert f\vert\thinspace dy
$$

# 성질

## Vitali 덮개 보조정리

유한 개의 공 $B\_1,\dots,B\_N$ 에 대해, 서로 겹치지 않는 부분족 $B\_{i\_1},\dots,B\_{i\_k}$ 가 있어 다음이 성립한다[^1].

$$
\Bigl\vert\bigcup\_{j=1}^N B\_j\Bigr\vert\le 3^n\sum\_{l=1}^k\vert B\_{i\_l}\vert
$$

반지름이 큰 공부터 고르고 이미 고른 것과 만나는 공을 버리면 된다. 버려진 공은 고른 공의 반지름 이하이므로 그 공을 세 배로 늘린 것에 들어간다.

## 극대함수의 약한 추정

*정리.* $f\in L^1(\mathbb R^n)$ 과 $\lambda\gt 0$ 에 대해 다음이 성립한다[^1].

$$
\vert\lbrace x:Mf(x)\gt\lambda\rbrace\vert\le\frac{3^n}{\lambda}\Vert f\Vert\_1
$$

*증명의 요지.* $Mf(x)\gt\lambda$ 인 점마다 평균이 $\lambda$ 를 넘는 공을 하나 고르면 그 공의 측도가 $\lambda^{-1}\int\_B\vert f\vert$ 이하다. 덮개 보조정리로 겹치지 않는 부분족을 뽑아 더하면 적분들이 겹치지 않으므로 합이 $\Vert f\Vert\_1$ 이하다.

## 정리

*정리.* $f\in L^1\_{\mathrm{loc}}(\mathbb R^n)$ 이면 거의 모든 점이 $f$ 의 Lebesgue 점이다[^1].

*증명의 요지.* 연속함수가 $L^1$ 에서 조밀하므로 $\Vert f-g\Vert\_1$ 이 작은 연속함수 $g$ 를 잡는다. $g$ 에서는 결론이 모든 점에서 성립한다. 차 $f-g$ 의 평균은 $M(f-g)$ 로 억제되고 그 집합의 측도가 약한 추정으로 $\Vert f-g\Vert\_1/\lambda$ 의 상수배 이하다. 두 항을 함께 작게 만들면 결론이 깨지는 점들의 측도가 $0$ 으로 간다.

## 따름정리

| 진술 | 내용 |
| --- | --- |
| 미적분학의 기본정리 | $F(x)=\int\_a^x f$ 이면 거의 모든 $x$ 에서 $F'(x)=f(x)$ |
| 단조함수의 미분가능성 | 증가함수는 거의 모든 점에서 미분가능하고 도함수가 가적분이다 |
| 밀도점 | 가측집합 $E$ 의 거의 모든 점에서 $\vert E\cap B\_r\vert/\vert B\_r\vert\to 1$ |

밀도점 진술은 $f=\mathbf 1\_E$ 를 넣은 경우다. 단조함수판은 [유계변동 함수](bounded-variation.md)의 Jordan 분해와 함께 쓰면 유계변동 함수가 거의 어디서나 미분가능하다는 결론을 준다.

## 도함수가 적분을 되돌리지 않는 경우

$F'=f$ 가 거의 어디서나 성립해도 $F(x)-F(a)=\int\_a^x F'$ 는 따라오지 않는다. Cantor 함수는 연속이고 증가하며 거의 모든 점에서 도함수가 $0$ 이지만 $F(1)-F(0)=1$ 이다. 적분으로 되돌리려면 절대연속성이 필요하고, 그 조건이 [Radon–Nikodym 정리](radon-nikodym.md)가 다루는 측도의 절대연속성과 같은 조건이다.

# 활용

- 유계변동 함수의 도함수. Jordan 분해로 증가함수 둘의 차로 쓴 뒤 각 항에 이 정리를 적용해 거의 어디서나 미분가능성을 얻는다.
- [Rademacher 정리](rademacher-theorem.md). Lipschitz 함수가 거의 어디서나 미분가능하다는 정리의 증명이 방향별 도함수의 존재를 이 정리로 얻은 뒤 선형성을 확인한다.
- Radon–Nikodym 정리의 밀도 해석. 측도의 밀도가 작은 공 위 질량비의 극한으로 주어지고, 그 극한의 존재가 거의 모든 점에서 보장된다.
- 근사 항등원의 수렴. 핵을 좁혀 가며 합성곱한 $f\ast\varphi\_\varepsilon$ 이 거의 모든 점에서 $f$ 로 수렴한다는 진술이 평균의 수렴을 가중평균으로 넓힌 것이다.

[^1]: E. M. Stein and R. Shakarchi, *Real Analysis*, Princeton University Press, 2005, 3 장. 덮개 보조정리, 극대함수의 약한 추정, 미분정리와 밀도점을 차례로 다룬다.

# 연관 문서

## 선수지식

- [유계변동 함수](bounded-variation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #analysis
