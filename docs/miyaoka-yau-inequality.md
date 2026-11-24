# Miyaoka–Yau 부등식

# 개요

**Miyaoka–Yau 부등식(Miyaoka–Yau inequality)** 은 첫 Chern 류가 음인 콤팩트 복소 곡면에서 두 Chern 수가 $c_1^2\le 3c_2$ 를 만족한다는 정리다. 사영공간 안의 $5$ 차 곡면은 $c_1^2=5$, $c_2=55$ 이고, 종수 $2$ 곡선 둘의 곱은 $c_1^2=8$, $c_2=4$ 다. 어떤 수의 쌍이 곡면의 Chern 수로 나타나는지 물을 때, 이 부등식은 $c_1^2$ 가 $c_2$ 의 세 배를 넘는 쌍을 전부 뺀다.

증명은 [Kähler–Einstein 계량](kahler-einstein-metrics.md)의 곡률로 $3c_2-c_1^2$ 를 음이 아닌 양의 적분으로 쓰는 것이다.

# 직관

복소 곡면 $M$ 의 두 Chern 수는 수 두 개다. $c_2$ 는 $M$ 을 실 $4$ 차원 다양체로 본 [Euler 지표](euler-characteristic.md)이고, $c_1^2$ 는 첫 Chern 류의 제곱을 $M$ 위에서 적분한 값이다. 사영공간 $\mathbb{CP}^3$ 안의 $d$ 차 매끄러운 곡면에서는 초평면의 류 $H$ 로 $c_1=(4-d)H$ 이고 $H^2$ 의 적분이 $d$ 이므로 두 수가 다음과 같다.

$$
c_1^2=d(d-4)^2,\qquad c_2=d(d^2-4d+6)
$$

$d\ge 5$ 이면 $c_1\lt 0$ 이다. 두 수의 차를 정리하면 $3c_2-c_1^2=2d(d-1)^2$ 이므로 이 곡면들은 모두 $c_1^2\lt 3c_2$ 를 만족한다. 종수 $g$, $h$ 곡선의 곱은 $c_1^2=8(g-1)(h-1)$, $c_2=4(g-1)(h-1)$ 이고 $c_1^2=2c_2$ 다.

이 예들에서 $c_1^2$ 는 $3c_2$ 에 닿지 않는다. 등호 $c_1^2=3c_2$ 는 $\mathbb{CP}^2$ 가 만족하는데($c_1^2=9$, $c_2=3$), $\mathbb{CP}^2$ 는 $c_1\gt 0$ 이다. Miyaoka–Yau 부등식은 $c_1\lt 0$ 인 곡면에서 $3c_2$ 가 $c_1^2$ 의 상한이고, 등호가 성립하는 곡면이 무엇인지까지 정한다.

# 정의

## Chern 수

콤팩트 복소 곡면 $M$ 의 접다발의 Chern 류 $c_1$, $c_2$ 에 대해, [특성류](characteristic-classes.md)의 적분

$$
c_1^2=\int\_M c_1(M)^2,\qquad c_2=\int\_M c_2(M)
$$

를 $M$ 의 **Chern 수(Chern number)** 라 한다. $c_2$ 는 Euler 류의 적분이므로 $M$ 의 Euler 지표다. 직관 절의 $d$ 차 곡면은 $c(M)=(1+H)^4/(1+dH)$ 를 $2$ 차까지 전개해 두 수를 얻는다.

## 공의 몫

$\mathbb C^2$ 의 단위공 $B=\lbrace (z,w)\mid\vert z\vert^2+\vert w\vert^2\lt 1\rbrace$ 위의 Kähler 형식 $\omega_B=-i\partial\bar\partial\log(1-\vert z\vert^2-\vert w\vert^2)$ 를 **복소 쌍곡 계량(complex hyperbolic metric)** 이라 한다. 계수 행렬의 행렬식이 $(1-\vert z\vert^2-\vert w\vert^2)^{-3}$ 이므로 $\mathrm{Ric}(\omega_B)=-3\omega_B$ 다. $B$ 의 정칙 자기동형으로 된 이산군 $\Gamma$ 가 고정점 없이 작용하고 $B/\Gamma$ 가 콤팩트하면, $B/\Gamma$ 를 **공의 몫(ball quotient)** 이라 한다. 공의 몫은 $\omega_B$ 를 물려받아 $c_1\lt 0$ 인 곡면이 된다.

# 성질

## Miyaoka–Yau 부등식

정리(Yau). $c_1(M)\lt 0$ 인 콤팩트 Kähler 곡면 $M$ 은 $c_1^2\le 3c_2$ 를 만족하고, 등호는 $M$ 이 공의 몫일 때뿐이다.[^1]

증명의 요지. Aubin–Yau 정리로 $\mathrm{Ric}(\omega)=-\omega$ 인 계량 $\omega$ 를 잡는다. Chern–Weil 이론(Chern–Weil theory)으로 $c_1^2$ 와 $c_2$ 를 $\omega$ 의 곡률 텐서의 이차식의 적분으로 쓴다. 곡률 텐서를 $\omega_B$ 의 곡률과 같은 꼴의 부분과 나머지 $R^\circ$ 로 나누면, $\mathrm{Ric}(\omega)=-\omega$ 일 때 다음이 성립한다.

$$
3c_2-c_1^2=\kappa\int\_M\vert R^\circ\vert^2\omega^2,\qquad\kappa\gt 0
$$

우변은 음이 아니다. 등호이면 $R^\circ=0$ 이므로 곡률이 어디서나 $\omega_B$ 의 상수배와 같고, 범피복(universal cover)이 $B$ 와 정칙 등거리다.

## Miyaoka 의 판

정리(Miyaoka). 일반형 곡면(surface of general type)은 $c_1^2\le 3c_2$ 를 만족한다.[^2]

일반형 곡면은 표준 선다발(canonical bundle)의 $m$ 제곱의 정칙 단면이 이루는 공간의 차원이 $m^2$ 의 크기로 자라는 곡면이다. $c_1\lt 0$ 이면 일반형이므로 Miyaoka 의 판은 Yau 의 판의 부등식을 포함한다. Miyaoka 의 증명은 대수기하의 방법이고 계량을 쓰지 않는다.

# 활용

- 곡면의 Chern 수 분포. 극소 일반형 곡면의 Chern 수는 $c_1^2\gt 0$ 과 Noether 부등식(Noether inequality)과 Miyaoka–Yau 부등식이 둘러싼 영역 안에 있다. 이 영역의 어느 점에 곡면이 있는지 묻는 문제를 곡면의 지리(geography of surfaces)라 한다.
- 가짜 사영평면. $c_1^2=9$, $c_2=3$ 이고 $\mathbb{CP}^2$ 와 Betti 수가 같은 일반형 곡면을 가짜 사영평면(fake projective plane)이라 한다. 등호 조건에 따라 가짜 사영평면은 공의 몫이고, Mumford 가 첫 예를 만들었고 Prasad–Yeung 이 분류했다.[^3][^4]

[^1]: Shing-Tung Yau, "Calabi's conjecture and some new results in algebraic geometry", *Proceedings of the National Academy of Sciences USA* **74** (1977), 1798–1799.
[^2]: Yoichi Miyaoka, "On the Chern numbers of surfaces of general type", *Inventiones Mathematicae* **42** (1977), 225–237.
[^3]: David Mumford, "An algebraic surface with K ample, (K²) = 9, pg = q = 0", *American Journal of Mathematics* **101** (1979), 233–244.
[^4]: Gopal Prasad, Sai-Kee Yeung, "Fake projective planes", *Inventiones Mathematicae* **168** (2007), 321–370.

# 연관 문서

## 선수지식

- [특성류](characteristic-classes.md)
- [Kähler–Einstein 계량](kahler-einstein-metrics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #complex_analysis #topology
