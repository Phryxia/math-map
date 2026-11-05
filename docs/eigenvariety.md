# 고유다양체

# 개요

**고유다양체(eigenvariety)** 는 무게가 $p$ 진으로 연속해서 변하는 [모듈러 형식](modular-forms.md)들을 한 공간의 점으로 모은 것이다. 무게 $k$ 의 고유형식을 준위에 $p$ 를 넣어 올리면 $U_p$ 의 고윳값이 둘 나오는데, 무게를 $k$ 에서 $p$ 진으로 가까운 $k'$ 으로 바꾸면 고윳값이 조금씩 바뀌며 따라오는 형식이 있다. 고유다양체는 이런 형식의 Hecke 고윳값을 무게와 함께 매개하는 $p$ 진 [강체해석공간](rigid-analytic-spaces.md)을 만들어, 무게를 따라 이어지는 형식의 족을 그 공간의 곡선으로 다룬다.

# 직관

판별식 $\Delta=\sum\tau(n)q^n$ 은 무게 $12$, 준위 $1$ 의 고유형식이다. 준위에 $p=11$ 을 넣어 올리면 $U_{11}$ 의 고윳값이 둘 나오고, 둘은 다음 이차식의 근이다.

$$
x^2-\tau(11)x+11^{11},\qquad \tau(11)=534612
$$

$\tau(11)$ 은 $11$ 로 나누어떨어지지 않으므로 [Newton 다각형](newton-polygon.md)에서 두 근의 $11$ 진 부치는 $0$ 과 $11$ 이다. 이 부치를 기울기(slope)라 한다. [Hida 이론](hida-theory.md)은 기울기 $0$ 인 근을 무게에 따라 연속으로 잇는 형식의 족을 만들지만, 기울기 $11$ 인 근은 그 족에 들어가지 않는다.

기울기 $11$ 인 근에 붙는 형식도 무게를 $12$ 에서 $11$ 진으로 가까운 무게로 바꾸며 따라가려면, 모듈러 형식보다 넓은 공간이 있어야 한다. 그 공간이 과수렴 모듈러 형식의 공간이고, 같은 정보를 [과수렴 모듈러 기호](overconvergent-modular-symbols.md)로도 계산한다. 이 공간에서 $U_p$ 의 고윳값을 무게와 함께 모으면, 무게마다 고윳값의 목록이 바뀌고 목록에 든 고윳값의 개수도 바뀐다.

그래서 무게와 고윳값의 쌍 가운데 실제로 고윳값이 되는 것만 모아 한 공간으로 본다. 무게를 고정해 자른 단면이 그 무게의 고윳값 목록이고, $\Delta$ 의 두 근은 무게 $12$ 의 단면에 놓인 두 점이다.

# 정의

## 무게 공간

$\mathcal W$ 를 $\mathbb Z_p^\times$ 의 연속 $p$ 진 지표들이 이루는 강체해석공간이라 하고 **무게 공간(weight space)** 이라 한다. [Iwasawa 대수](iwasawa-algebra.md) $\Lambda=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 의 형식 스펙트럼을 강체화한 것이고, $p$ 가 홀수면 $p-1$ 개의 열린 단위원판이 모인 모양이다.

정수 $k$ 는 지표 $x\mapsto x^k$ 로 $\mathcal W$ 의 점이 되고, 이 점을 **고전 무게(classical weight)** 라 한다. 직관 절의 무게 $12$ 는 $x\mapsto x^{12}$ 이다.

## 스펙트럼 곡선

$M_w$ 를 무게 $w$ 의 과수렴 모듈러 형식(overconvergent modular form) 공간이라 하면 $U_p$ 가 $M_w$ 에 콤팩트하게 작용한다. 그 [Fredholm 행렬식](fredholm-determinant.md)

$$
P(w,t)=\det(1-tU_p\vert M_w)
$$

은 $t$ 에 대한 완전함수이고 계수가 $w$ 위에서 해석적이다. 영점 자취

$$
\mathcal Z=\lbrace (w,t)\in\mathcal W\times\mathbb A^1:P(w,t)=0\rbrace
$$

를 **스펙트럼 곡선(spectral curve)** 이라 한다. 점 $(w,t)$ 는 무게 $w$ 에서 $U_p$ 고윳값이 $t^{-1}$ 인 자리다. 직관 절의 두 근 $\alpha,\beta$ 는 $\mathcal Z$ 의 점 $(12,\alpha^{-1})$, $(12,\beta^{-1})$ 이다.

## 고유다양체

$\mathcal Z$ 의 허용 덮개를 $P$ 의 인수분해에 맞춰 잡으면, 각 조각 위에서 해당 고윳값에 속하는 유한 차원 부분공간이 생기고 거기 작용하는 Hecke 대수가 유한 가군이다. 조각마다 그 대수의 스펙트럼을 취해 붙인 공간이 고유다양체 $\mathcal E$ 다. $\mathcal E$ 의 점은 쌍 $(w,\lambda)$ 이고, $\lambda$ 는 무게 $w$ 의 과수렴 고유형식에 붙는 Hecke 고윳값 체계다. 직관 절의 $\Delta$ 의 두 $11$ 안정화는 무게 $12$ 위의 두 점이다.

$\mathrm{GL}\_2$ 와 준위 $N$ 의 경우 $\mathcal E$ 는 1 차원이고 **고유곡선(eigencurve)** 이라 부른다. Coleman 과 Mazur 가 이것을 구성했다[^1].

# 성질

## 무게 사상

$\mathcal E\to\mathcal W$ 는 유한 평탄이 아니다. 한 무게 위에 기울기가 서로 다른 점이 무한히 많다. 대신 $\mathcal E$ 의 각 점에 그 점을 담는 열린 근방이 있어 무게 공간의 열린 원판 위로 유한 평탄이다. 기울기 $h$ 를 고정하고 무게를 작은 원판으로 제한하면 그 안에서 차원이 일정하다.

## 고전점의 조밀성

Coleman 의 고전성 정리(Coleman's classicality theorem)는 기울기 $h$ 이고 무게 $k\gt h+1$ 인 과수렴 고유형식이 고전 고유형식이라는 정리다[^2]. 직관 절의 기울기 $0$ 인 근은 이 조건을 만족하고, 기울기 $11$ 인 근은 $12\gt12$ 가 성립하지 않는 경계에 있다.

이 판정으로 고전점이 $\mathcal E$ 의 모든 기약 성분에서 조밀하다. 기울기는 성분마다 국소적으로 유계이므로, 무게를 충분히 키우면 조건 $k\gt h+1$ 이 만족된다.

## 보통 성분

기울기 $0$ 부분 $\mathcal E^{\mathrm{ord}}$ 는 $\mathcal W$ 위 유한 평탄이고 Hida 대수 $\mathbf h$ 의 강체해석공간과 같다. Hida 이론의 조절 정리가 이 성분에서 무게 사상이 유한 평탄이라는 진술이다.

## Galois 표현의 족

$\mathcal E$ 위에 유사표현(pseudo-representation)이 하나 있어 각 점에서 그 점의 고윳값 체계에 붙는 2차원 [Galois 표현](galois-representations.md)의 대각합을 준다. 고전점에서는 모듈러 형식의 표현이고, 다른 점에서는 무게가 정수가 아닌 $p$ 진 표현이다.

# 활용

- [Fontaine–Mazur 추측](fontaine-mazur.md)에 따르면 $\mathcal E$ 의 점이 주는 표현 가운데 $p$ 에서 de Rham 인 것은 고전점의 표현뿐이다. Kisin 은 고유곡선을 써서 이 추측의 $\mathrm{GL}\_2$ 경우 일부를 증명했다[^3].
- [Galois 표현의 변형환](deformation-rings.md)을 강체화한 공간 안에서 $\mathcal E$ 가 모듈러 자취로 나타나고, 두 공간을 비교하는 것이 모듈러성 올림 정리의 $p$ 진 판본이다.
- [p 진 L 함수](p-adic-l-function.md)는 과수렴 기호를 $\mathcal E$ 위에서 모으면 점마다의 $L$ 함수를 두 변수 함수 하나로 모은 것으로 확장된다.
- Buzzard 의 일반 구성(eigenvariety machine)과 Urban 의 구성이 같은 절차를 $\mathrm{GL}\_n$ 과 유니터리군으로 옮긴다. 필요한 것은 과수렴 공간과 그 위의 [콤팩트 작용소](compact-operators.md)다.

[^1]: R. Coleman, B. Mazur, "The eigencurve", in *Galois Representations in Arithmetic Algebraic Geometry*, London Math. Soc. Lecture Note Ser. 254 (1998), 1–113.
[^2]: R. Coleman, "Classical and overconvergent modular forms", Invent. Math. 124 (1996), 215–241.
[^3]: M. Kisin, "Overconvergent modular forms and the Fontaine–Mazur conjecture", Invent. Math. 153 (2003), 373–454.

# 연관 문서

## 선수지식

- [과수렴 모듈러 기호](overconvergent-modular-symbols.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #complex_analysis
