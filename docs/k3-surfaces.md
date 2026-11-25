# K3 곡면

# 개요

**K3 곡면(K3 surface)** 은 어디서도 $0$ 이 되지 않는 정칙 $2$ 형식을 갖고 정칙 $1$ 형식은 갖지 않는 콤팩트 복소곡면이다. 복소 사영공간 $\mathbb{CP}^3$ 안에서 네 변수의 사차 동차식 $x^4+y^4+z^4+w^4=0$ 이 정하는 곡면이 그 예다. 이 식의 계수를 바꾸면 곡면의 모양이 바뀌는데, 두 방정식이 같은 곡면을 주는지 계수만 보고 가리기는 어렵다.

K3 곡면은 둘째 코호몰로지의 정수 격자와 그 안에서 $2$ 형식이 가리키는 방향으로 분류되므로, 이 물음이 격자 안의 계산으로 바뀐다.

# 직관

평면 삼차곡선은 종수가 $1$ 이고, 그 위에는 어디서도 $0$ 이 되지 않는 정칙 미분 $dx/y$ 가 있다. $\mathbb{CP}^2$ 의 표준다발은 $\mathcal O(-3)$ 이고, 차수 $d$ 곡선의 표준다발은 $\mathcal O(d-3)$ 을 곡선에 제한한 것이므로 $d=3$ 에서 자명하다.

한 차원 올려 $\mathbb{CP}^3$ 의 차수 $d$ 곡면 $X$ 를 본다. $\mathbb{CP}^3$ 의 표준다발은 $\mathcal O(-4)$ 이므로 $X$ 의 표준다발은 $\mathcal O(d-4)$ 의 제한이고, $d=4$ 에서 자명하다. 그래서 매끄러운 사차곡면 위에는 어디서도 $0$ 이 되지 않는 정칙 $2$ 형식이 상수배를 빼고 하나 있다.

사차곡면을 고르는 수를 센다. $4$ 개 변수의 사차 단항식은 $35$ 개이고, 계수 전체의 상수배를 무시하면 $34$ 개가 남는다. 좌표 변환 $\mathrm{PGL}\_4(\mathbb C)$ 가 $15$ 차원이므로 사차곡면은 $34-15=19$ 개의 수로 정해진다.

# 정의

**K3 곡면** 은 연결된 콤팩트 복소곡면 $X$ 로 다음 두 조건을 만족하는 것이다.

$$
K_X\cong\mathcal O_X,\qquad H^1(X,\mathcal O_X)=0
$$

$K_X$ 는 정칙 $2$ 형식의 선다발이다. 첫 조건은 어디서도 $0$ 이 되지 않는 정칙 $2$ 형식 $\omega$ 가 있다는 것이고, 둘째 조건은 [Hodge 이론](hodge-theory.md)의 Hodge 수로 $h^{0,1}=0$ 이라는 것이다. 직관 절의 매끄러운 사차곡면은 K3 곡면이다.

다음도 K3 곡면이다.

- 사영평면 위에서 매끄러운 육차곡선을 따라 분기하는 이중 덮개.
- $\mathbb{CP}^4$ 안에서 이차곡면과 삼차곡면의 교차, $\mathbb{CP}^5$ 안에서 이차곡면 셋의 교차.
- 아벨 곡면의 [Kummer 곡면](kummer-surfaces.md)에서 이중점 $16$ 개를 부풀린 곡면.

# 성질

## 위상 불변량

K3 곡면의 Hodge 수는 $h^{0,0}=h^{2,0}=h^{0,2}=h^{2,2}=1$, $h^{1,0}=h^{0,1}=0$, $h^{1,1}=20$ 이다. 따라서 Betti 수는 $b_0=b_4=1$, $b_1=b_3=0$, $b_2=22$ 이고 Euler 표수는 $24$ 다.

Euler 표수는 [Noether 공식](noether-formula.md) $\chi(\mathcal O_X)=(K_X^2+c_2)/12$ 로 계산한다. $\chi(\mathcal O_X)=1-0+1=2$ 이고 $K_X^2=0$ 이므로 $c_2=24$ 다. 사차곡면에서는 차수 $d$ 곡면의 공식 $c_2=d(d^2-4d+6)$ 에 $d=4$ 를 넣어도 $24$ 가 나온다.

K3 곡면은 단순연결이다. 모든 K3 곡면은 서로 변형으로 이어지고, 따라서 미분동형이다[^1].

## K3 격자

$H^2(X,\mathbb Z)$ 위의 [교차형식](intersection-form.md)은 단모듈러이고 짝수이며 부호수가 $(3,19)$ 다. 짝수인 것은 $c_1=0$ 이라 $X$ 가 스핀 다양체이기 때문이다. 부정부호 짝수 단모듈러 형식은 계수와 부호수로 정해지므로 이 격자는 다음과 같다.

$$
H^2(X,\mathbb Z)\cong U^{\oplus 3}\oplus E_8(-1)^{\oplus 2}
$$

$U$ 는 기저 $e,f$ 에서 $e\cdot e=f\cdot f=0$, $e\cdot f=1$ 인 쌍곡형식이고, $E_8(-1)$ 은 [E₈ 격자](e8-lattice.md)의 형식에 $-1$ 을 곱한 것이다. 부호수 $3-19=-16$ 은 [Rokhlin 정리](rokhlin-theorem.md)가 허용하는 $0$ 이 아닌 값 가운데 절댓값이 가장 작다.

## 주기와 Torelli 정리

$\omega$ 가 생성하는 직선 $H^{2,0}(X)\subset H^2(X,\mathbb C)$ 를 $X$ 의 주기(period)라 한다. 교차형식을 $\mathbb C$ 로 넓히면 $\omega\cdot\omega=0$ 이고 $\omega\cdot\bar\omega\gt 0$ 이다. 이 두 조건을 만족하는 직선 전체는 $\mathbb P(H^2(X,\mathbb C))$ 안의 $20$ 차원 열린 집합이다.

전역 Torelli 정리(global Torelli theorem). 두 K3 곡면 $X$, $Y$ 가 동형일 필요충분조건은 주기를 주기로 보내는 격자 동형 $H^2(X,\mathbb Z)\cong H^2(Y,\mathbb Z)$ 가 있는 것이다[^2]. 주기 사상은 전사이고[^3], 모든 K3 곡면은 [Kähler 다양체](kahler-manifolds.md)다[^4].

## Picard 수

$H^{1,1}(X)\cap H^2(X,\mathbb Z)$ 는 $X$ 위 선다발의 류가 이루는 격자이고, 그 계수를 Picard 수 $\rho(X)$ 라 한다. $h^{1,1}=20$ 이므로 $0\le\rho\le 20$ 이다. 사차곡면은 초평면 단면의 류를 가지므로 $\rho\ge 1$ 이고, 직관 절의 $19$ 개 매개변수는 $20$ 차원 주기 공간에서 이 류 하나에 수직이라는 조건을 뺀 수다.

# 활용

- Ricci 평탄 계량. 표준다발이 자명하므로 [Calabi 추측](calabi-conjecture.md)의 해가 K3 곡면마다 Ricci 곡률이 $0$ 인 Kähler 계량을 준다. 이 계량은 초Kähler 계량(hyperkähler metric)이다.
- 4 차원 위상. K3 곡면은 교차형식이 짝수이고 부호수가 $-16$ 인 단순연결 스핀 다양체이므로, Rokhlin 정리의 $16$ 을 더 키울 수 없다는 예이고, $b_2=22=\frac{10}{8}\cdot 16+2$ 이므로 [Furuta 10/8 정리](furuta-10-8-theorem.md)의 등호를 이루는 예다.
- 달빛. K3 곡면의 타원 종수(elliptic genus)를 초등각 지표로 분해한 계수가 Mathieu 군 $M_{24}$ 의 표현 차원으로 나뉜다. 이 관찰이 [Mathieu 군](mathieu-groups.md)과 [umbral moonshine](umbral-moonshine.md) 문서의 출발점이다.

[^1]: K. Kodaira, "On the Structure of Compact Complex Analytic Surfaces I", American Journal of Mathematics **86** (1964), 751–798.

[^2]: I. I. Piatetski-Shapiro and I. R. Shafarevich, "A Torelli Theorem for Algebraic Surfaces of Type K3", Mathematics of the USSR-Izvestiya **5** (1971), 547–588. Kähler 인 경우는 D. Burns and M. Rapoport, "On the Torelli Problem for Kählerian K-3 Surfaces", Annales scientifiques de l'École Normale Supérieure **8** (1975), 235–273.

[^3]: A. N. Todorov, "Applications of the Kähler–Einstein–Calabi–Yau Metric to Moduli of K3 Surfaces", Inventiones Mathematicae **61** (1980), 251–265.

[^4]: Y.-T. Siu, "Every K3 Surface is Kähler", Inventiones Mathematicae **73** (1983), 139–150.

# 연관 문서

## 선수지식

- [Kähler 다양체](kahler-manifolds.md)
- [교차형식](intersection-form.md)

## 더 알아보기

- [Kummer 곡면](kummer-surfaces.md)
- [Enriques 곡면](enriques-surfaces.md)

#differential_geometry #complex_analysis #algebraic_topology #algebra
