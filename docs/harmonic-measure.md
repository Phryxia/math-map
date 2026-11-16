# 조화 측도

# 개요

**조화 측도(harmonic measure)** 는 영역 안의 한 점에서 보았을 때 경계의 한 부분이 얼마만큼의 몫을 차지하는지를 재는 측도다. 상반평면 모양의 금속판에서 경계의 구간 $\lbrack -1,1\rbrack$ 만 온도 $1$ 로, 나머지 경계는 온도 $0$ 으로 유지하면 점 $i$ 의 온도는 $1/2$ 이다. 이 값은 점 $i$ 에서 출발해 무작위로 움직이는 입자가 처음 닿는 경계점이 $\lbrack -1,1\rbrack$ 에 있을 확률과도 같다.

조화 측도는 경계의 부분 집합마다 이 온도를 대응시키고, 일반 경계값의 온도를 이 측도에 대한 적분으로 쓴다.

# 직관

상반평면 $H$ 에서 경계값 $g$ 를 갖는 [조화함수](harmonic-functions.md)는 Poisson 적분(Poisson integral)으로 나온다.

$$u(x+iy)=\frac1\pi\int_{-\infty}^{\infty}\frac{y}{(x-t)^2+y^2}g(t)\thinspace dt$$

$g$ 가 $\lbrack a,b\rbrack$ 에서 $1$, 나머지에서 $0$ 이면 적분은 $\arctan$ 의 차다.

$$u(x+iy)=\frac1\pi\left(\arctan\frac{b-x}{y}-\arctan\frac{a-x}{y}\right)$$

괄호 안은 점 $z=x+iy$ 에서 $a$ 와 $b$ 를 바라보는 두 반직선 사이의 각 $\theta$ 다. 그래서 온도는 $\theta/\pi$ 이고, 구간이 $z$ 에서 크게 보일수록 높다. $z=i$, $a=-1$, $b=1$ 이면 $\theta=\pi/2$ 라 온도가 $1/2$ 이다.

이 온도는 경계의 구간마다 정해지고, 겹치지 않는 두 구간의 온도는 더해진다. 경계 전체의 온도는 $1$ 이다. 점 $z$ 를 고정하면 경계의 부분 집합에 $0$ 과 $1$ 사이의 값을 주는 확률 측도가 생기고, 이것을 조화 측도라 부른다.

# 정의

**조화 측도** 는 영역의 점 $z$ 와 경계의 부분 집합 $E$ 에 대해, 경계에서 $E$ 위는 $1$, 나머지는 $0$ 인 [Dirichlet 문제](dirichlet-problem.md)의 해의 $z$ 에서의 값이다. $\Omega\subseteq\mathbb C$ 가 경계의 모든 점이 정칙점(regular point)인 영역이고 $E\subseteq\partial\Omega$ 가 Borel 집합이면, 경계값 $1\_E$ 의 Perron 해(Perron solution)를 $\omega(z,E,\Omega)$ 라 쓴다[^1].

$z$ 를 고정한 $E\mapsto\omega(z,E,\Omega)$ 는 $\partial\Omega$ 위의 확률 측도이고, $\omega\_z$ 라 쓴다. 연속인 경계값 $g$ 의 Dirichlet 문제의 해는 다음이다.

$$u(z)=\int_{\partial\Omega}g\thinspace d\omega_z$$

[Riesz–Markov–Kakutani 표현 정리](riesz-markov-kakutani.md)로 $g\mapsto u(z)$ 를 나타내는 측도가 $\omega\_z$ 다. 직관 절의 상반평면에서 $\omega\_z$ 는 밀도 $y/(\pi((x-t)^2+y^2))$ 를 갖는 [Cauchy 분포](cauchy-distribution.md)이고, $\omega(i,\lbrack -1,1\rbrack,H)=1/2$ 다.

단위원판 $\mathbb D$ 에서는 평균값 성질로 $\omega\_0$ 가 단위원의 길이를 $2\pi$ 로 나눈 측도다. 길이 $\ell$ 인 호 $I$ 에 대해 $\omega(0,I,\mathbb D)=\ell/2\pi$ 다.

# 성질

## 등각 불변성

$\varphi:\Omega\to\Omega'$ 가 전단사 [등각사상](conformal-mapping.md)이고 경계까지 위상동형으로 확장되면 다음이 성립한다.

$$\omega(z,E,\Omega)=\omega(\varphi(z),\varphi(E),\Omega')$$

증명은 조화함수에 정칙함수를 합성하면 조화이고 경계값이 $\varphi$ 를 따라 옮겨진다는 것이다. Jordan 영역 $\Omega$ 에서 [Riemann 사상정리](riemann-mapping-theorem.md)의 사상 $\varphi:\Omega\to\mathbb D$ 가 $\varphi(z\_0)=0$ 을 만족하면, $\omega\_{z\_0}$ 는 단위원의 정규화된 길이를 $\varphi^{-1}$ 로 옮긴 측도다.

## Brown 운동의 출구 분포

$z$ 에서 출발한 평면의 [Brown 운동](brownian-motion.md) $B$ 가 $\Omega$ 를 처음 벗어나는 시각을 $\tau$ 라 하면 다음이 성립한다[^2].

$$\omega(z,E,\Omega)=\Pr\nolimits_z\lbrack B_\tau\in E\rbrack$$

$z\mapsto\Pr\_z\lbrack B\_\tau\in E\rbrack$ 는 Brown 운동이 작은 원 위에서 균등하게 나가므로 평균값 성질을 만족해 조화이고, 경계점 근처에서 출발하면 거의 바로 그 근처에서 나가므로 경계값이 $1\_E$ 다. 이것이 Kakutani 정리(Kakutani's theorem)다.

## 단조성

$\Omega\subseteq\Omega'$ 이고 $E\subseteq\partial\Omega\cap\partial\Omega'$ 이면 $\omega(z,E,\Omega)\le\omega(z,E,\Omega')$ 다. 두 함수의 차는 $\Omega$ 에서 조화이고 경계에서 $0$ 이하이므로 [최대값 원리](maximum-principle.md)로 $0$ 이하다. 영역을 넓히면 $E$ 가 받는 몫이 늘지 않는다는 것을 Carleman 원리(Carleman's principle)라 한다.

## 두 상수 정리

$f$ 가 $\Omega$ 에서 정칙이고 $\vert f\vert\le M$ 이며, 경계의 $E$ 로 다가갈 때 $\vert f\vert$ 의 상극한이 $m\lt M$ 이하이면 다음이 성립한다. 이것을 두 상수 정리(two-constants theorem)라 한다[^1].

$$\log\vert f(z)\vert\le\omega(z,E,\Omega)\log m+\bigl(1-\omega(z,E,\Omega)\bigr)\log M$$

증명의 요지. $\log\vert f\vert$ 는 각 점의 값이 둘레 원 위의 평균 이하인 함수이고, 오른쪽은 같은 경계값 이상을 갖는 조화함수다. 최대값 원리로 부등식이 나온다.

고리 $\lbrace r\_1\lt\vert z\vert\lt r\_2\rbrace$ 에서 바깥 원의 조화 측도는 $\log(\vert z\vert/r\_1)/\log(r\_2/r\_1)$ 이다. 여기에 두 상수 정리를 쓰면 [최대 절댓값 원리](maximum-modulus-principle.md) 문서의 Hadamard 세 원 정리(Hadamard three-circle theorem)가 나온다.

# 활용

- 경계의 크기. 단순연결 영역의 조화 측도는 경계가 아무리 복잡해도 [Hausdorff 차원](hausdorff-dimension.md)이 $1$ 인 집합에 몰려 있다. 이것이 [Makarov 정리](makarov-theorem.md)다[^1].
- 띠 모양 영역의 추정. [극값 길이](extremal-length.md)의 [Ahlfors 왜곡 정리](ahlfors-distortion-theorem.md)는 띠의 먼 끝이 받는 조화 측도를 단면 폭으로 위에서 잡는다.
- 성장 모형. 확산 제한 응집(diffusion-limited aggregation)은 무작위로 움직이는 입자가 덩어리에 처음 닿는 자리에 붙는 모형이고, 덩어리 바깥 영역에서 각 경계점이 다음 입자를 받을 확률이 조화 측도다.
- 퍼텐셜 이론. [퍼텐셜 이론](potential-theory.md)에서 콤팩트 집합의 평형 측도는 바깥 영역의 $\infty$ 에서 본 조화 측도다.

[^1]: J. B. Garnett, D. E. Marshall, *Harmonic Measure*, Cambridge University Press, 2005, 1장, 6장.
[^2]: S. Kakutani, "Two-dimensional Brownian motion and harmonic functions", *Proc. Imp. Acad. Tokyo* **20** (1944), 706–714.

# 연관 문서

## 선수지식

- [Dirichlet 문제](dirichlet-problem.md)

## 더 알아보기

- [Ahlfors 왜곡 정리](ahlfors-distortion-theorem.md)
- [Makarov 정리](makarov-theorem.md)

#complex_analysis #analysis #probability
