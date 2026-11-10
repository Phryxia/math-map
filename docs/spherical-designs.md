# 구면 설계

# 개요

**구면 설계(spherical design)** 는 구면 위의 유한 점 모임으로, 차수가 $t$ 이하인 다항식을 그 점들에서 평균 내면 구면 전체에서의 평균과 같아지는 것이다. 지구 표면의 평균 기온을 관측소 몇 곳의 값으로 어림할 때, 관측소를 극 두 곳에 두면 적도 쪽 값이 전혀 들어가지 않는다. 구면 설계는 관측소를 어디에 몇 개 두면 낮은 차수의 다항식에 대해 평균이 정확한지를 정한다.

# 직관

단위구면 $S^2$ 위에서 높이 $z$ 는 $\lbrack -1,1\rbrack$ 에 고르게 분포한다. 이것이 Archimedes 의 모자 상자 정리(hat-box theorem)다. 그래서 구면 평균은 $z^2$ 이 $\tfrac13$, $z^4$ 이 $\tfrac15$ 다.

북극과 남극 두 점에서 $z^2$ 의 평균은 $1$ 이라 틀린다. 정팔면체의 꼭짓점 여섯 개 $(\pm1,0,0)$, $(0,\pm1,0)$, $(0,0,\pm1)$ 에서는 $z^2$ 이 $0,0,0,0,1,1$ 이라 평균이 $\tfrac13$ 으로 맞는다. 같은 여섯 점에서 $z^4$ 의 평균은 $\tfrac13$ 이라 $\tfrac15$ 와 다르다. 홀수 차수의 단항식은 마주 보는 두 점에서 부호가 반대라 평균이 $0$ 으로 맞으므로, 정팔면체는 차수 $3$ 이하의 다항식에서 평균이 정확하고 차수 $4$ 에서 틀린다.

정이십면체의 꼭짓점 열두 개는 $(0,\pm1,\pm\varphi)$ 와 그 좌표를 순환시킨 것을 길이 $\sqrt{1+\varphi^2}$ 로 나눈 점이고 $\varphi=\tfrac{1+\sqrt5}2$ 다. $z$ 좌표는 $\pm\varphi$, $0$, $\pm1$ 을 $\sqrt{1+\varphi^2}$ 로 나눈 것이 네 개씩이고, $\varphi^2=\varphi+1$ 을 쓰면 $z^2$ 의 평균이 $\tfrac13$, $z^4$ 의 평균이 $\tfrac15$ 로 나온다. 이 열두 점은 차수 $5$ 까지 평균이 정확하다.

# 정의

## t-설계

$X\subset S^{n-1}$ 가 유한집합이고 차수 $t$ 이하인 모든 다항식 $p$ 에서 다음이 성립하면 $X$ 를 **구면 t-설계(spherical t-design)** 라 한다.

$$
\frac1{\vert X\vert}\sum_{x\in X}p(x)=\int_{S^{n-1}}p\thinspace d\sigma
$$

$\sigma$ 는 회전 불변인 확률측도다. 직관 절의 정팔면체는 $3$-설계이고 $4$-설계가 아니며, 정이십면체는 $5$-설계다. 평면에서 정 $(t+1)$ 각형의 꼭짓점은 $t$-설계다.

## 조화함수에 의한 판정

다항식을 구면에 제한하면 차수 $\ell\le t$ 인 [구면조화함수](spherical-harmonics.md)의 합으로 쓰이고, $\ell\ge1$ 인 구면조화함수의 구면 평균은 $0$ 이다. 그래서 $X$ 가 $t$-설계인 것은 $1\le\ell\le t$ 인 모든 구면조화함수 $Y$ 에서 $\sum\_{x\in X}Y(x)=0$ 인 것과 같다. 정팔면체에서 $\ell=2$ 의 $xy$ 와 $x^2-y^2$ 는 여섯 점에서 합이 $0$ 이다.

# 성질

## Delsarte–Goethals–Seidel 하한

정리. $S^{n-1}$ 의 $t$-설계 $X$ 는 다음을 만족한다[^1].

$$
\vert X\vert\ge\begin{cases}\binom{n+e-1}{n-1}+\binom{n+e-2}{n-1}&(t=2e)\cr 2\binom{n+e-1}{n-1}&(t=2e+1)\end{cases}
$$

증명의 요지($t=2e$). 구면에 제한한 차수 $e$ 이하의 다항식의 공간을 $V$ 라 하면 차원은 위 우변이다. $f,g\in V$ 이면 $fg$ 는 차수 $2e\le t$ 라 $X$ 위의 평균이 $\int fg\thinspace d\sigma$ 와 같다. $\vert X\vert\lt\dim V$ 이면 $X$ 의 모든 점에서 $0$ 인 $f\ne0$ 이 $V$ 에 있고, 그러면 $\int f^2d\sigma$ 가 $X$ 위의 평균 $0$ 과 같아 모순이다.

$S^2$ 에서 하한은 $t=2,3,5$ 일 때 $4,6,12$ 이고, 정사면체, 정팔면체, 정이십면체가 등호를 만족한다.

## 단단한 설계

하한의 등호를 만족하는 설계를 **단단한 설계(tight design)** 라 한다. $n\ge3$ 이면 단단한 설계가 있을 수 있는 것은 $t\in\lbrace 1,2,3,4,5,7,11\rbrace$ 일 때뿐이다[^2]. [E₈ 격자](e8-lattice.md)의 길이가 가장 짧은 벡터 240 개는 $S^7$ 의 단단한 $7$-설계이고 $2\binom{10}7=240$ 이다. [Leech 격자](leech-lattice.md)의 최소 벡터 196560 개는 $S^{23}$ 의 단단한 $11$-설계이고 $2\binom{28}{23}=196560$ 이다.

## 존재

모든 $n$ 과 $t$ 에서 $t$-설계가 있다[^3]. Bondarenko, Radchenko, Viazovska 는 $N\ge c\_nt^{n-1}$ 인 모든 $N$ 에서 점 $N$ 개의 $t$-설계가 있음을 보였다[^4]. 하한이 $t^{n-1}$ 규모이므로 이 점 개수의 차수는 더 줄일 수 없다.

# 활용

- 구면 위의 수치 적분. $t$-설계의 점에서 값을 고르게 평균 내면 차수 $t$ 이하의 다항식은 정확히 적분되고, 매끄러운 함수는 다항식 근사의 오차만큼만 틀린다.
- 접촉 배치와 선형계획 상한. [Delsarte 선형계획 상한](delsarte-lp-bound.md)의 구면판은 차원 8 과 24 의 접촉수에서 240 과 196560 으로 등호가 되고, 등호를 만족하는 배치가 E₈ 와 Leech 격자의 단단한 설계다.
- 양자 상태. 큐비트 상태의 Bloch 구면에서 구면 t-설계는 [복소 사영 설계](complex-projective-designs.md)와 같다.

[^1]: P. Delsarte, J. M. Goethals, J. J. Seidel, "Spherical codes and designs", *Geometriae Dedicata* 6 (1977), 363–388.
[^2]: E. Bannai, R. M. Damerell, "Tight spherical designs I", *Journal of the Mathematical Society of Japan* 31 (1979), 199–207.
[^3]: P. D. Seymour, T. Zaslavsky, "Averaging sets: a generalization of mean values and spherical designs", *Advances in Mathematics* 52 (1984), 213–240.
[^4]: A. Bondarenko, D. Radchenko, M. Viazovska, "Optimal asymptotic bounds for spherical designs", *Annals of Mathematics* 178 (2013), 443–452.

# 연관 문서

## 선수지식

- [구면조화함수](spherical-harmonics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #analysis #group_theory
