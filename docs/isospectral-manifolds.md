# 등스펙트럼 다양체

# 개요

**등스펙트럼 다양체(isospectral manifolds)** 는 [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)의 고윳값이 중복도까지 모두 같은 두 닫힌 Riemann 다양체다. 북이 내는 진동수가 북 표면의 고윳값으로 정해지듯, 닫힌 Riemann 다양체의 고윳값을 모두 알면 다양체의 모양이 정해지는지가 문제다. 등스펙트럼이면서 등거리가 아닌 다양체 쌍이 있으면 답은 아니오이고, $16$ 차원 평탄 원환면 한 쌍이 그런 예다.

# 직관

격자 $L\subset\mathbb R^n$ 으로 만든 평탄 원환면 $\mathbb R^n/L$ 에서 고유함수는 쌍대격자의 원소 $\xi\in L^\ast$ 마다 $e^{2\pi i\xi\cdot x}$ 이고 고윳값은 $4\pi^2\Vert\xi\Vert^2$ 다. 그래서 고윳값 $4\pi^2r$ 의 중복도는 $\Vert\xi\Vert^2=r$ 인 $\xi\in L^\ast$ 의 개수다. 두 원환면이 등스펙트럼인지는 두 쌍대격자에서 노름마다 벡터의 개수가 같은지, 곧 두 격자의 [theta 급수](theta-series.md)가 같은지로 정해진다.

16 차원에는 짝수 유니모듈러 격자가 $E_8\oplus E_8$ 과 $D_{16}^+$ 두 개 있다. 유니모듈러이므로 $L^\ast=L$ 이다. 두 격자의 theta 급수는 무게 $8$ 인 모듈러 형식이고 그런 형식의 공간이 1 차원이므로 둘은 같다. 그런데 $E_8\oplus E_8$ 의 노름 $2$ 벡터들은 서로 직교하는 두 부분으로 갈리고 $D_{16}^+$ 의 것들은 갈리지 않아 두 격자는 회전으로 겹쳐지지 않는다. 그래서 두 원환면은 등스펙트럼이고 등거리가 아니다.

등거리인 두 다양체는 등스펙트럼이다. J. Milnor 가 등거리가 아닌 등스펙트럼 평탄 원환면 한 쌍을 처음 만들었고[^1], T. Sunada 가 유한군으로 이런 쌍을 만드는 일반적인 방법을 내놓았다[^2].

# 정의

닫힌 Riemann 다양체 $(M,g)$, $(M^\prime,g^\prime)$ 의 $-\Delta$ 고윳값을 중복도만큼 되풀이해 $\lambda_0\le\lambda_1\le\cdots$, $\lambda_0^\prime\le\lambda_1^\prime\le\cdots$ 로 적는다. 모든 $k$ 에서 $\lambda_k=\lambda_k^\prime$ 이면 두 다양체가 **등스펙트럼(isospectral)** 이라 한다. 열 대각합 $\sum_ke^{-t\lambda_k}$ 가 모든 $t\gt 0$ 에서 같은 것과 동치다.

고윳값 목록에서 정해지는 양을 **스펙트럼 불변량(spectral invariant)** 이라 한다. 등스펙트럼인 다양체끼리 어떤 성질이 늘 같으면 그 성질을 스펙트럼이 정한다고 한다.

# 성질

## 스펙트럼이 정하는 양

[열핵 전개](heat-kernel-asymptotics.md)의 계수가 스펙트럼 불변량이다. 그래서 차원, 부피, 스칼라 곡률의 적분은 스펙트럼이 정한다. 닫힌 곡면에서는 상수항이 $\chi/6$ 이므로 종수도 스펙트럼이 정한다.

## 평탄 원환면

Milnor 의 쌍이 16 차원 예다. 차원을 내리면 A. Schiemann 이 3 차원 이하의 양의 정부호 이차형식은 theta 급수로 정해짐을 보였으므로 3 차원 이하의 평탄 원환면은 등스펙트럼이면 등거리다[^3]. 4 차원에서는 J. H. Conway 와 N. J. A. Sloane 이 theta 급수가 같고 동치가 아닌 격자의 족을 만들었다[^4].

## Sunada 의 방법

유한군 $G$ 의 두 부분군 $H_1,H_2$ 가 모든 켤레류 $C$ 에서 $\vert C\cap H_1\vert=\vert C\cap H_2\vert$ 를 만족하면 **거의 켤레(almost conjugate)** 라 하고, $(G,H_1,H_2)$ 를 Gassmann 삼중쌍(Gassmann triple)이라 한다. 이 조건은 두 순열표현 $\mathbb C\lbrack G/H_1\rbrack$ 과 $\mathbb C\lbrack G/H_2\rbrack$ 가 동형이라는 것과 같다.

Sunada 정리. $G$ 가 닫힌 다양체 $M$ 에 등거리변환으로 자유롭게 작용하고 $(G,H_1,H_2)$ 가 Gassmann 삼중쌍이면 $M/H_1$ 과 $M/H_2$ 는 등스펙트럼이다[^2].

증명의 요지. $M/H$ 의 고유함수는 $M$ 의 $H$ 불변 고유함수다. $E_\lambda$ 를 $M$ 의 고윳값 $\lambda$ 의 고유공간이라 하면 $M/H$ 에서 $\lambda$ 의 중복도는 $\dim E_\lambda^H$ 이고, Frobenius 상호법칙(Frobenius reciprocity)으로 이것은 $\mathbb C\lbrack G/H\rbrack$ 와 $E_\lambda$ 가 공유하는 [군의 표현](group-representations.md)의 차원과 같다. 두 순열표현이 동형이므로 중복도가 같다.

$H_1,H_2$ 가 켤레이면 $M/H_1$ 과 $M/H_2$ 는 등거리다. 그래서 켤레가 아닌 거의 켤레 쌍이 필요하다. 가장 작은 예 가운데 하나는 $G=\mathrm{GL}\_3(\mathbb F_2)$ 이고, $H_1$ 은 [유한 사영평면](finite-projective-planes.md) Fano 평면의 한 점의 안정자, $H_2$ 는 한 직선의 안정자다.

## 평면 영역

C. Gordon, D. Webb, S. Wolpert 는 Fano 평면의 Gassmann 삼중쌍으로 Sunada 의 방법을 궤도체에 적용해, Dirichlet 고윳값이 모두 같고 합동이 아닌 평면 다각형 두 개를 만들었다[^5]. M. Kac 가 물은 "북의 모양을 소리로 들을 수 있는가" 에 대한 답이다.

## 쌍곡 곡면

[Selberg 대각합 공식](selberg-trace-formula.md)으로 닫힌 쌍곡 곡면의 Laplace 스펙트럼과 닫힌 측지선의 길이 목록은 서로를 정한다. M.-F. Vignéras 는 [사원수 대수](quaternion-algebras.md)의 극대 순서환(maximal order)에서 등스펙트럼이고 등거리가 아닌 쌍곡 곡면을 만들었다[^6].

# 활용

- 대수적 수체. Gassmann 삼중쌍 $(G,H_1,H_2)$ 에서 $G$ 를 Galois 군으로 하는 확대의 두 고정체는 [Dedekind zeta 함수](dedekind-zeta.md)가 같다. R. Perlis 는 zeta 함수가 같은 두 수체가 이렇게 나타남을 보였다[^7].
- [Niemeier 격자](niemeier-lattices.md)의 16 차원 두 격자가 Milnor 의 쌍을 준다.

[^1]: J. Milnor, "Eigenvalues of the Laplace operator on certain manifolds", Proc. Nat. Acad. Sci. USA 51 (1964), 542.
[^2]: T. Sunada, "Riemannian coverings and isospectral manifolds", Ann. of Math. 121 (1985), 169–186.
[^3]: A. Schiemann, "Ternary positive definite quadratic forms are determined by their theta series", Math. Ann. 308 (1997), 507–517.
[^4]: J. H. Conway, N. J. A. Sloane, "Four-dimensional lattices with the same theta series", Internat. Math. Res. Notices 1992, no. 4, 93–96.
[^5]: C. Gordon, D. Webb, S. Wolpert, "Isospectral plane domains and surfaces via Riemannian orbifolds", Invent. Math. 110 (1992), 1–22.
[^6]: M.-F. Vignéras, "Variétés riemanniennes isospectrales et non isométriques", Ann. of Math. 112 (1980), 21–32.
[^7]: R. Perlis, "On the equation $\zeta_K(s)=\zeta_{K'}(s)$", J. Number Theory 9 (1977), 342–360.

# 연관 문서

## 선수지식

- [열핵 전개](heat-kernel-asymptotics.md)
- [덮개공간](covering-spaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #group_theory #number_theory
