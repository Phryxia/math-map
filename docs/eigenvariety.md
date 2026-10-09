# 고유다양체

# 개요

고유다양체는 과수렴 고유형식의 Hecke 고윳값 체계를 무게와 함께 매개하는 $p$ 진 강체해석공간이다. [Hida 이론](hida-theory.md)이 기울기 $0$ 의 형식만 모아 무게 공간 위 유한 평탄 가군을 얻은 데 비해, 기울기를 고정하지 않으면 유한 평탄이 깨진다.

Coleman 과 Mazur 는 $U_p$ 의 특성 멱급수의 영점 자취를 공간으로 삼아 이 문제를 피했다. 그렇게 얻은 1차원 공간이 **고유곡선** $\mathcal E$ 이고, 무게 사상 $\mathcal E\to\mathcal W$ 는 유한 평탄이 아니지만 국소적으로 유한이다[^1]. 고전 고유형식이 $\mathcal E$ 에 조밀하게 놓이고 Hida 족은 기울기 $0$ 성분으로 그 안에 들어간다.

# 직관

무게 $k$ 의 고유형식 $f$ 를 준위에 $p$ 를 넣어 올리면 $U_p$ 의 고윳값이 둘 나온다. 다음 이차식의 두 근이다.

$$
x^2-a_px+p^{k-1}
$$

두 근의 곱이 $p^{k-1}$ 이므로 부치의 합이 $k-1$ 이다. $f$ 가 보통이면 한 근은 부치 $0$, 다른 근은 부치 $k-1$ 이다. Hida 족은 부치 $0$ 인 쪽만 담고 나머지 근은 버린다. 버린 근에 붙는 형식도 고유형식이므로 그것까지 담는 족이 있어야 한다.

기울기를 열어 두면 차원이 무게에 따라 움직인다. $U_p$ 의 특성 멱급수 $P(w,t)=\det(1-tU_p)$ 를 무게 $w$ 와 함께 보면 계수가 $w$ 의 $p$ 진 해석함수이고, 무게마다 영점의 부치 분포가 달라진다. 기울기 $h$ 이하 조각의 차원이 무게와 함께 뛰므로 조각들을 가군 하나로 묶을 수 없다.

묶는 대신 영점을 그대로 공간으로 본다. 쌍 $(w,t)$ 가운데 $P(w,t)=0$ 인 것만 모으면 무게와 기울기가 동시에 좌표인 한 공간이 되고, 무게를 고정해 자른 단면이 그 무게의 고윳값 목록이다. 이 자취 위에 Hecke 고윳값을 붙인 것이 고유다양체다.

# 정의

## 무게 공간

$\mathcal W$ 를 $\mathbb Z_p^\times$ 의 연속 $p$ 진 지표들이 이루는 강체해석공간이라 한다. [Iwasawa 대수](iwasawa-algebra.md) $\Lambda=\mathbb Z_p\lbrack\lbrack T\rbrack\rbrack$ 의 형식 스펙트럼을 강체화한 것이고, $p$ 가 홀수면 $p-1$ 개의 열린 단위원판이 모인 모양이다.

정수 $k$ 는 지표 $x\mapsto x^k$ 로 $\mathcal W$ 의 점이 되고 이를 **고전 무게**라 한다.

## 스펙트럼 곡선

$M_w$ 를 무게 $w$ 의 과수렴 모듈러 형식 공간이라 하면 $U_p$ 가 $M_w$ 에 콤팩트하게 작용한다. 그 [Fredholm 행렬식](fredholm-determinant.md)

$$
P(w,t)=\det(1-tU_p\vert M_w)
$$

은 $t$ 에 대한 완전함수이고 계수가 $w$ 위에서 해석적이다. 영점 자취

$$
\mathcal Z=\lbrace (w,t)\in\mathcal W\times\mathbb A^1:P(w,t)=0\rbrace
$$

를 **스펙트럼 곡선**이라 한다. 점 $(w,t)$ 는 무게 $w$ 에서 $U_p$ 고윳값이 $t^{-1}$ 인 자리에 해당한다.

## 고유다양체

$\mathcal Z$ 의 허용 덮개를 $P$ 의 인수분해에 맞춰 잡으면, 각 조각 위에서 해당 고윳값에 속하는 유한 차원 부분공간이 생기고 거기 작용하는 Hecke 대수가 유한 가군이다. 조각마다 그 대수의 스펙트럼을 취해 붙인 공간이 **고유다양체** $\mathcal E$ 다.

$\mathcal E$ 의 점은 쌍 $(w,\lambda)$ 이고, $\lambda$ 는 무게 $w$ 의 과수렴 고유형식에 붙는 Hecke 고윳값 체계다. $\mathrm{GL}\_2$ 와 준위 $N$ 의 경우 $\mathcal E$ 가 1차원이라 **고유곡선**이라 부른다.

# 성질

## 무게 사상

$\mathcal E\to\mathcal W$ 는 유한 평탄이 아니다. 기울기가 커지는 방향으로 무한히 많은 성분이 쌓이기 때문이다. 대신 $\mathcal E$ 의 각 점에 그 점을 담는 열린 근방이 있어 무게 공간의 열린 원판 위로 유한 평탄이다. 기울기 $h$ 를 고정하고 무게를 작은 원판으로 제한하면 그 안에서 차원이 일정하다.

## 고전점의 조밀성

> **정리 (Coleman).** 기울기 $h$ 이고 무게 $k\gt h+1$ 인 과수렴 고유형식은 고전 고유형식이다[^2].

이 판정으로 고전점이 $\mathcal E$ 의 모든 기약 성분에서 조밀하다. 기울기는 성분마다 국소적으로 유계이므로, 무게를 충분히 키우면 조건 $k\gt h+1$ 이 만족된다.

## 보통 성분

기울기 $0$ 부분 $\mathcal E^{\mathrm{ord}}$ 는 $\mathcal W$ 위 유한 평탄이고 Hida 대수 $\mathbf h$ 의 강체해석공간과 같다. Hida 이론의 조절 정리가 이 성분에서 무게 사상이 유한 평탄이라는 진술이다.

## Galois 표현의 족

$\mathcal E$ 위에 유사표현이 하나 있어 각 점에서 그 점의 고윳값 체계에 붙는 2차원 [Galois 표현](galois-representations.md)의 대각합을 준다. 고전점에서는 모듈러 형식의 표현이고, 다른 점에서는 무게가 정수가 아닌 $p$ 진 표현이다.

# 활용

- [Fontaine–Mazur 추측](fontaine-mazur.md). $\mathcal E$ 의 점은 모두 거의 모든 곳 비분기인 표현을 주지만 de Rham 인 점은 고전점뿐이다. 고전점이 조밀한데도 여집합이 훨씬 크다는 구도가 여기서 나온다.
- [Galois 표현의 변형환](deformation-rings.md). 변형환을 강체화한 공간 안에서 $\mathcal E$ 가 모듈러 자취로 나타나고, 두 공간의 비교가 모듈러성 올림 정리의 $p$ 진 판본이다.
- [$p$ 진 $L$ 함수](p-adic-l-function.md). 과수렴 기호를 $\mathcal E$ 위에서 모으면 점마다의 $L$ 함수가 두 변수 함수 하나로 붙는다.
- 고차 군. Buzzard 의 고유다양체 기계와 Urban 의 구성이 같은 절차를 $\mathrm{GL}\_n$ 과 유니터리군으로 옮긴다. 필요한 것은 과수렴 공간과 그 위의 콤팩트 작용소다.

[^1]: R. Coleman, B. Mazur, "The eigencurve", in *Galois Representations in Arithmetic Algebraic Geometry*, London Math. Soc. Lecture Note Ser. 254 (1998), 1–113.
[^2]: R. Coleman, "Classical and overconvergent modular forms", Invent. Math. 124 (1996), 215–241.

# 연관 문서

## 선수지식

- [과수렴 모듈러 기호](overconvergent-modular-symbols.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #complex_analysis
