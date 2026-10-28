# Arakelov 기하

# 개요

**Arakelov 기하(Arakelov geometry)** 는 정수 위의 기하에 무한 자리를 더해, 곡면 위에서 하듯 차수와 교차수를 세는 이론이다. 콤팩트 곡면 위의 선다발은 단면 하나의 영점 개수로 차수가 정해지지만, 정수 위에서 같은 셈을 하면 단면 $s$ 를 $2s$ 로 바꿀 때 영점의 무게 합이 $\log 2$ 만큼 커져 차수가 단면에 따라 달라진다. Arakelov 기하는 복소수 자리마다 길이를 재는 계량을 더해 무한 자리에서 $\log 2$ 를 빼고, 차수가 단면과 무관하게 한다.

# 직관

Arakelov 기하는 [대수적 수체](algebraic-number-fields.md) $K$ 의 정수환 위의 스킴에 복소수 자리마다 Hermite 계량을 더해, 유한 자리와 무한 자리를 같은 방식으로 다루는 교차이론을 세우는 이론이다. Arakelov 가 산술 곡면에서 시작했고[^1], Faltings 가 [Riemann–Roch 정리](riemann-roch.md)를 증명했으며[^2], Gillet–Soulé 가 고차원으로 확장했다[^3]. [Néron–Tate 높이](canonical-height.md)는 이 교차이론의 교차수로 다시 정의된다.

콤팩트 [Riemann 곡면](riemann-surfaces.md) 위의 선다발은 유리형 단면 하나를 잡아 영점에서 극점을 뺀 개수로 차수를 센다. 다른 단면을 잡아도 그 비가 유리형 함수이고 유리형 함수의 영점과 극점의 개수가 같으므로 차수는 단면과 무관하다. 같은 셈을 정수 위에서 하려 한다.

$\mathrm{Spec}\thinspace\mathbb Z$ 위의 선다발은 계수 $1$ 인 자유 $\mathbb Z$ 가군 $L=\mathbb Ze$ 다. 단면 $s=ne$ 는 $n$ 을 나누는 소수 $p$ 에서 $v_p(n)$ 번 사라지고, 각 영점에 $\log p$ 의 무게를 주면 영점의 개수는 $\sum_pv_p(n)\log p=\log\vert n\vert$ 다. 단면을 $2s$ 로 바꾸면 이 값이 $\log 2$ 만큼 커진다. 곡면은 콤팩트하지만 $\mathrm{Spec}\thinspace\mathbb Z$ 에는 무한 자리가 빠져 있다.

무한 자리에 노름 $\Vert e\Vert$ 를 주고 그 자리의 몫으로 $-\log\Vert s\Vert$ 를 더한다. $s=ne$ 이면 $\log\vert n\vert-\log(\vert n\vert\Vert e\Vert)=-\log\Vert e\Vert$ 이므로 합이 $n$ 과 무관하다. 유리수 $x\ne 0$ 에 대해 $\sum_p\log\vert x\vert_p+\log\vert x\vert=0$ 인 곱 공식(product formula)이 이 무관함을 준다. 이 차수가 산술 차수이고, 같은 방법으로 정수 위의 곡선에서 교차수를 세는 것이 Arakelov 기하다.

# 정의

## 계량 선다발과 산술 차수

$\mathcal O\_K$ 를 $K$ 의 정수환이라 하자. **계량 선다발(metrized line bundle)** $\overline L=(L,(\Vert\cdot\Vert\_\sigma)\_\sigma)$ 은 계수 $1$ 인 사영 $\mathcal O\_K$ 가군 $L$ 과 매장 $\sigma\colon K\to\mathbb C$ 마다 $L\otimes\_\sigma\mathbb C$ 위의 Hermite 노름의 쌍이다. 영 아닌 $s\in L$ 에 대해

$$
\widehat{\deg}\thinspace\overline L=\log\char35{}(L/\mathcal O\_Ks)-\sum\_\sigma\log\Vert s\Vert\_\sigma
$$

를 $\overline L$ 의 **산술 차수(arithmetic degree)** 라 한다. 곱 공식으로 이 값은 $s$ 와 무관하다.

## 산술 곡면

**산술 곡면(arithmetic surface)** 은 정칙 스킴 $\mathcal X$ 와 고유 평탄 사상 $\mathcal X\to\mathrm{Spec}\thinspace\mathcal O\_K$ 로서 일반 섬유 $X\_K$ 가 기하적으로 연결된 매끄러운 사영곡선인 것이다. 소수 $\mathfrak p$ 위의 섬유는 유한체 위의 곡선이고, 매장 $\sigma$ 마다 Riemann 곡면 $X\_\sigma=X\_K\otimes\_\sigma\mathbb C$ 가 무한 자리의 섬유 역할을 한다.

## Arakelov 인자와 교차수

$\mathcal X$ 의 기약 닫힌 곡선 $C\_i$ 와 형식 기호 $X\_\sigma$ 의 합

$$
D=\sum\_in\_iC\_i+\sum\_\sigma r\_\sigma X\_\sigma\qquad(n\_i\in\mathbb Z,\ r\_\sigma\in\mathbb R)
$$

을 **Arakelov 인자(Arakelov divisor)** 라 한다. 서로 다른 두 곡선 $C,D$ 의 교차수는 유한 부분과 무한 부분의 합이다. 유한 부분은 교점 $x$ 마다 국소 교차 중복도에 $\log\char35{}k(x)$ 를 곱해 더한 것이다. 무한 부분은 $C,D$ 가 일반 섬유에서 주는 점들 $P,Q$ 에 대해 $-\sum\_\sigma g\_\sigma(P\_\sigma,Q\_\sigma)$ 다. $g\_\sigma$ 는 Arakelov 가 $X\_\sigma$ 위의 표준 부피형식으로 정규화한 [Green 함수](greens-function.md)다[^1]. $X\_\sigma$ 와 수평 곡선 $C$ 의 교차수는 $C$ 가 일반 섬유에서 주는 인자의 차수다.

# 성질

## 주인자

$\mathcal X$ 의 유리함수 $f$ 에 대해 $\widehat{\mathrm{div}}(f)=\mathrm{div}(f)+\sum\_\sigma v\_\sigma(f)X\_\sigma$, $v\_\sigma(f)=-\int\_{X\_\sigma}\log\vert f\vert\_\sigma\thinspace\mu\_\sigma$ 로 두면, $\widehat{\mathrm{div}}(f)$ 와 모든 Arakelov 인자의 교차수가 $0$ 이다[^1]. $\mu\_\sigma$ 는 표준 부피형식이다. 콤팩트 곡면에서 주인자의 차수가 $0$ 인 것의 산술판이고, 증명은 유한 부분에 곱 공식을, 무한 부분에 Green 함수의 방정식을 쓴다. 그래서 교차수는 Arakelov 인자의 선형 동치류 위에서 정의된다.

## Faltings 의 Riemann–Roch 정리

Faltings 는 산술 곡면 위의 계량 선다발에 대해 Riemann–Roch 정리와 Noether 공식의 산술판을 증명했다[^2]. 코호몰로지의 차원 자리에 단면 격자의 체적과 무한 자리의 해석적 항이 들어간다.

## Faltings–Hriljac 정리

$X\_K$ 위의 차수 $0$ 인 두 인자 $D,E$ 를 $\mathcal X$ 로 닫고, 모든 섬유 성분과의 교차수가 $0$ 이 되게 수직 성분 $\Phi(D)$, $\Phi(E)$ 를 더하면

$$
\langle D,E\rangle\_{\mathrm{NT}}=-\bigl((D+\Phi(D))\cdot(E+\Phi(E))\bigr)
$$

이다. 좌변은 [Jacobi 다양체](jacobian-variety.md) 위의 Néron–Tate 높이 쌍이다[^2][^4]. 높이는 이 정리로 교차수에서 정의된다.

# 활용

- [Faltings 정리](faltings-theorem.md)의 증명에 쓰는 Faltings 높이는 [아벨 다양체](abelian-varieties.md)의 [Néron 모델](neron-models.md)에서 얻은 계량 선다발 $\omega$ 의 산술 차수다.
- [Borcherds 곱](borcherds-products.md)의 산술판에서 Borcherds 곱의 노름의 로그가 Arakelov 이론의 Green 함수가 되고, 특수 인자의 산술 교차수가 [Eisenstein 급수](eisenstein-series.md)의 계수와 비교된다.
- Gillet–Soulé 의 산술 교차이론은 고차원 산술 다양체에서 산술 Chow 군을 정의하고, 높이를 계량 선다발의 산술 교차수로 정의한다[^3].

[^1]: S. Ju. Arakelov, Intersection theory of divisors on an arithmetic surface, *Izv. Akad. Nauk SSSR Ser. Mat.* 38 (1974), 1179–1192.
[^2]: G. Faltings, Calculus on arithmetic surfaces, *Ann. of Math.* 119 (1984), 387–424.
[^3]: H. Gillet, C. Soulé, Arithmetic intersection theory, *Publ. Math. IHÉS* 72 (1990), 93–174.
[^4]: P. Hriljac, Heights and Arakelov's intersection theory, *Amer. J. Math.* 107 (1985), 23–38.

# 연관 문서

## 선수지식

- [대수적 수체](algebraic-number-fields.md)
- [Néron–Tate 높이와 Mordell–Weil 정리](canonical-height.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #complex_analysis
