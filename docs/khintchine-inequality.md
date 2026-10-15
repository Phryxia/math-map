# Khintchine 부등식

# 개요

Khintchine 부등식은 무작위 부호를 붙인 합 $\sum_j\varepsilon_ja_j$ 의 $L^p$ 노름이 계수의 $\ell^2$ 노름과 상수배로 동등하다는 것이다. 상수는 $p$ 에만 의존하고 항의 개수와 계수에 의존하지 않는다.

$p=2$ 에서는 직교성으로 등식이 성립한다. 이 부등식은 그 등식이 모든 $p$ 에서 상수배까지 유지됨을 말한다.

# 직관

독립 부호 $\varepsilon_j$ 에 대해 $S=\sum_{j=1}^n\varepsilon_ja_j$ 의 크기를 잰다. 제곱의 기댓값을 전개하면 $E\lbrack S^2\rbrack=\sum_{i,j}a_ia_jE\lbrack\varepsilon_i\varepsilon_j\rbrack$ 이고, 독립이고 평균이 $0$ 이므로 $i\ne j$ 항이 모두 사라져 $E\lbrack S^2\rbrack=\sum_ja_j^2$ 이다.

네제곱에서도 전개가 된다. $E\lbrack\varepsilon_j^4\rbrack=1$ 이고 서로 다른 지표가 섞인 항은 $\varepsilon_i^2\varepsilon_j^2$ 꼴만 남으므로

$$
E\lbrack S^4\rbrack=\sum_ja_j^4+3\sum_{i\ne j}a_i^2a_j^2\le 3\Bigl(\sum_ja_j^2\Bigr)^2
$$

이다. 즉 $\Vert S\Vert_4\le 3^{1/4}\Vert S\Vert_2$ 로 두 노름이 상수배로 묶인다. 짝수가 아닌 $p$ 에서는 전개 대신 꼬리 확률의 추정을 적분한다.

# 정의

## Rademacher 열

$\varepsilon_1,\varepsilon_2,\dots$ 가 독립이고 각각 $+1$ 과 $-1$ 을 확률 $1/2$ 로 취하면 이 열을 **Rademacher 열**이라 한다.

## Rademacher 합

실수 $a_1,\dots,a_n$ 에 대해 $S=\sum_{j=1}^n\varepsilon_ja_j$ 를 **Rademacher 합**이라 하고, $\sigma^2=\sum_{j=1}^na_j^2$ 로 둔다.

# 성질

## Khintchine 부등식

**정리.** 각 $p\in\lbrack 1,\infty)$ 에 대해 $n$ 과 계수에 무관한 상수 $A_p,B_p\gt 0$ 이 있어

$$
A_p\thinspace\sigma\le\Vert S\Vert_p\le B_p\thinspace\sigma
$$

가 성립한다[^1].

$p\ge 2$ 에서는 Hölder 부등식이 $\Vert S\Vert_2\le\Vert S\Vert_p$ 를 주므로 $A_p=1$ 이다. 상계는 [집중부등식](concentration-inequalities.md)의 Hoeffding 부등식에서 나온다. $P(\vert S\vert\ge t)\le 2e^{-t^2/(2\sigma^2)}$ 를 꼬리 적분에 넣으면

$$
E\lbrack\vert S\vert^p\rbrack=\int_0^\infty pt^{p-1}P(\vert S\vert\ge t)\thinspace dt\le 2p\int_0^\infty t^{p-1}e^{-t^2/(2\sigma^2)}\thinspace dt=p\thinspace 2^{p/2}\Gamma(p/2)\thinspace\sigma^p
$$

이고 $B_p=(p\thinspace 2^{p/2}\Gamma(p/2))^{1/p}$ 를 얻는다. 이 값은 $p$ 가 커질 때 $\sqrt p$ 의 상수배로 자란다.

$p\lt 2$ 에서는 Hölder 부등식이 $\Vert S\Vert_p\le\Vert S\Vert_2$ 를 주므로 $B_p=1$ 이다. 하계는 직관 절의 네제곱 추정을 거쳐 나온다. 지수 $3/2$ 와 $3$ 의 Hölder 부등식에서

$$
\sigma^2=E\lbrack\vert S\vert^{2/3}\vert S\vert^{4/3}\rbrack\le\bigl(E\vert S\vert\bigr)^{2/3}\bigl(E\lbrack\vert S\vert^4\rbrack\bigr)^{1/3}\le 3^{1/3}\bigl(E\vert S\vert\bigr)^{2/3}\sigma^{4/3}
$$

이므로 $\sigma\le\sqrt 3\thinspace\Vert S\Vert_1$ 이다. $\Vert S\Vert_1\le\Vert S\Vert_p$ 이므로 $A_p=1/\sqrt 3$ 이 모든 $p\ge 1$ 에서 통한다. ∎

## 최적 상수

$p\ge 2$ 에서 최적 상수 $B_p$ 는 표준 Gauss 확률변수 $g$ 의 $p$ 차 모멘트 $\Vert g\Vert_p$ 와 같다[^2]. 계수를 모두 $1/\sqrt n$ 으로 두고 $n$ 을 키우면 [중심극한정리](central-limit-theorem.md)로 $S$ 가 $g$ 에 분포수렴하므로 이 값이 하한이고, Haagerup 이 상한도 같음을 보였다.

$p=1$ 에서 최적 상수는 $A_1=1/\sqrt 2$ 이고 계수가 둘일 때 등호가 성립한다[^3]. 위 증명이 준 $1/\sqrt 3$ 은 최적이 아니다.

## Gauss 합과의 비교

계수가 같은 $\sum_j\varepsilon_ja_j$ 와 $\sum_jg_ja_j$ 는 $L^p$ 노름이 $p$ 에만 의존하는 상수배로 동등하다. 여기서 $g_j$ 는 독립인 표준 Gauss 확률변수다. 두 합이 모두 $\sigma$ 와 동등하므로 상수를 합성하면 된다.

# 활용

- **Littlewood–Paley 부등식.** [Littlewood–Paley 이론](littlewood-paley.md)의 증명은 부호를 붙인 작용소 $\sum_j\varepsilon_j\Delta_jf$ 의 $L^p$ 노름을 부호에 무관하게 제한하고, 각 점에서 이 부등식을 적용해 제곱합 함수의 노름으로 바꾼다.
- **Boolean 함수의 1차 항.** [Boolean 함수의 Fourier 해석](boolean-fourier.md)에서 1차 항만 남은 함수는 Rademacher 합이다. 그 함수의 $L^p$ 노름을 Fourier 계수의 $\ell^2$ 노름으로 재는 데 이 부등식을 쓴다.
- **무작위 부호를 쓴 하계.** 어떤 작용소가 $L^p$ 에서 유계가 아님을 보일 때 계수를 무작위 부호로 두고 이 부등식으로 노름을 계산한다. 계수를 하나씩 고르는 구성을 피할 수 있다.

[^1]: A. Khintchine, *Über dyadische Brüche*, Mathematische Zeitschrift **18** (1923), 109–116.
[^2]: U. Haagerup, *The best constants in the Khintchine inequality*, Studia Mathematica **70** (1981), 231–283.
[^3]: S. J. Szarek, *On the best constants in the Khinchin inequality*, Studia Mathematica **58** (1976), 197–208.

# 연관 문서

## 선수지식

- [집중부등식](concentration-inequalities.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #analysis #functional_analysis
