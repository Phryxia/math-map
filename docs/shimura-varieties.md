# Shimura 다양체

# 개요

**Shimura 다양체(Shimura variety)** 는 [모듈러 곡선](modular-curves.md)을 만드는 구성을 다른 [행렬](matrices.md)군에 적용해 얻는 대수다양체다. 모듈러 곡선은 $\mathrm{SL}\_2(\mathbb R)$ 를 회전군 $\mathrm{SO}(2)$ 로 나눈 상반평면을 다시 $\mathrm{SL}\_2(\mathbb Z)$ 로 나누어 얻는데, 다른 군에서 같은 나눗셈을 하면 결과에 복소구조가 있는지가 정해지지 않는다. Shimura 다양체는 실점이 복소 대칭영역에 작용하는 [대수군](algebraic-groups.md)을 재료로 잡아 복소구조를 보장하고, 그 몫으로 [대수다양체](algebraic-varieties.md)를 얻는다.

# 직관

모듈러 곡선은 $\mathrm{SL}\_2(\mathbb Z)$ 를 상반평면 $\mathbb H$ 에 작용시켜 얻고, [Siegel 모듈라이 다양체](siegel-modular-variety.md)는 $\mathrm{Sp}\_{2g}(\mathbb Z)$ 를 Siegel 상반공간 $\mathbb H_g$ 에 작용시켜 얻는다. 두 공간이 어디서 오는지 보면 같은 자리다. $\mathrm{SL}\_2(\mathbb R)$ 는 $\mathbb H$ 에 추이적으로 작용하고 점 $i$ 의 고정화군이 $\mathrm{SO}(2)$ 이므로 $\mathbb H=\mathrm{SL}\_2(\mathbb R)/\mathrm{SO}(2)$ 다.

$\mathrm{Sp}\_{2g}(\mathbb R)$ 도 $\mathbb H_g$ 에 추이적으로 작용하고 $iI_g$ 의 고정화군이 $U(g)$ 이므로 $\mathbb H_g=\mathrm{Sp}\_{2g}(\mathbb R)/U(g)$ 다. 분모는 둘 다 최대콤팩트 부분군이다.

그러면 재료는 대수군 $G$ 하나로 줄어든다. $G(\mathbb R)$ 를 최대콤팩트 부분군으로 나누어 공간을 얻고 $G(\mathbb Z)$ 로 그 공간을 다시 나눈다. 남은 것은 복소구조다. $\mathrm{SL}\_2(\mathbb R)/\mathrm{SO}(2)$ 가 복소 $1$ 차원인 것은 $\mathbb H$ 가 $\mathbb C$ 의 열린 집합이어서인데, 다른 군에서 같은 구성을 하려면 이 복소구조도 $G$ 에서 읽어야 한다.

$\mathbb H$ 의 점 $\tau$ 가 하는 일을 보면 복소구조가 어디 있는지 드러난다. $\tau$ 는 격자 $\mathbb Z^2$ 가 놓인 $\mathbb R^2$ 를 $\mathbb C$ 와 동일시한다. 그 동일시는 $\mathbb C^\times$ 가 $\mathbb R^2$ 에 스칼라곱으로 작용하는 방식을 정하는 것이고, 곧 준동형 $\mathbb C^\times\to\mathrm{GL}\_2(\mathbb R)$ 하나다. $\tau=i$ 에서 $a+bi$ 는 $\begin{pmatrix}a&-b\cr b&a\end{pmatrix}$ 로 간다.

다른 $\tau$ 가 주는 준동형은 이것의 $\mathrm{GL}\_2(\mathbb R)$ 켤레다. 따라서 $\mathbb H$ 는 준동형 하나의 켤레류다.

이 기술에서 $\mathrm{GL}\_2$ 를 다른 환원군으로 바꾸고, [켤레류](conjugacy-classes.md)에 복소구조가 생기는 조건을 군에 요구한 것이 Shimura 다양체의 정의다.

# 정의

## Shimura 데이터

**Shimura 데이터(Shimura datum)** 는 쌍 $(G,X)$ 다. $G$ 는 $\mathbb Q$ 위의 연결 환원 대수군이고, $X$ 는 준동형 $h\colon\mathbb S\to G_{\mathbb R}$ 들의 $G(\mathbb R)$ 켤레류 하나다. 여기서 $\mathbb S=\mathrm{Res}\_{\mathbb C/\mathbb R}\mathbb G_m$ 은 $\mathbb R$ 위의 대수군으로 실점이 $\mathbb C^\times$ 다.

세 조건을 요구한다.

- $h$ 가 $\mathfrak g_{\mathbb C}=\mathrm{Lie}(G)\otimes\mathbb C$ 에 주는 Hodge 분해의 타입이 $\lbrace(-1,1),(0,0),(1,-1)\rbrace$ 에 든다.
- $\mathrm{ad}\thinspace h(i)$ 가 $G^{\mathrm{ad}}\_{\mathbb R}$ 의 Cartan 대합이다.
- $G^{\mathrm{ad}}$ 의 $\mathbb Q$ 단순 인자 가운데 실점이 콤팩트인 것이 없다.

첫 조건이 $X$ 에 복소구조를 주고, 둘째 조건이 그 구조를 Hermite 대칭공간의 것으로 만들고, 셋째 조건이 각 단순 인자를 $X$ 에 실제로 작용하게 한다. 이때 $X$ 의 각 연결성분 $X^+$ 는 유계 [대칭영역](symmetric-spaces.md)이다.

$G=\mathrm{GL}\_2$ 이고 $h$ 가 다음과 같다고 하자.

$$
h(a+bi)=\begin{pmatrix}a&-b\cr b&a\end{pmatrix}
$$

그러면 $h$ 는 $\mathfrak{gl}\_2\otimes\mathbb C$ 를 타입 $(-1,1)$, $(0,0)$, $(1,-1)$ 의 세 조각으로 나눈다. $\mathrm{ad}\thinspace h(i)$ 는 $\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 에 의한 켤레이고, 그 고정군이 $\mathrm{SO}(2)$ 를 담는 극대 콤팩트 부분군이어서 Cartan 대합(Cartan involution)이다. $G^{\mathrm{ad}}=\mathrm{PGL}\_2$ 의 실점은 콤팩트가 아니다. $h$ 의 켤레류 $X$ 는 직관 절의 $\mathbb H$ 와 아래 반평면 $\mathbb H^-$ 의 합집합이다.

## 복소점

$K\subset G(\mathbb A_f)$ 를 콤팩트 열린 부분군으로 잡는다. $\mathbb A_f$ 는 유한 아델환(ring of finite adeles)이다. 레벨(level) $K$ 의 Shimura 다양체는 다음 몫이다.

$$\mathrm{Sh}\_K(G,X)=G(\mathbb Q)\backslash(X\times G(\mathbb A_f)/K)$$

$G(\mathbb Q)$ 는 $X$ 와 $G(\mathbb A_f)$ 에 동시에 작용한다. 이 집합은 유한 개의 연결성분을 갖고 각 성분은 $\Gamma\backslash X^+$ 꼴이다. $\Gamma$ 는 $G(\mathbb Q)$ 의 산술 부분군이고 $K$ 를 작게 잡으면 $\Gamma$ 도 작아진다. $G=\mathrm{GL}\_2$ 에서 $K$ 를 $\mathrm{GL}\_2(\widehat{\mathbb Z})$ 의 원소 가운데 $N$ 으로 나눈 나머지가 단위행렬인 것들로 잡으면, 각 성분의 $\Gamma$ 는 주합동 부분군(principal congruence subgroup) $\Gamma(N)$ 이다.

## 예

| G | X⁺ | Shimura 다양체 |
| --- | --- | --- |
| $\mathrm{GL}\_2$ | $\mathbb H$ | 모듈러 곡선 |
| $\mathrm{Sp}\_{2g}$ | $\mathbb H_g$ | Siegel 모듈라이 다양체 |
| $\mathrm{GU}(1,n)$ | 복소 $n$ 차원 단위공 | Picard 모듈라이 다양체 |

$\mathrm{GL}\_2$ 에서는 $X$ 가 두 연결성분 $\mathbb H$ 와 $\mathbb H^-$ 로 갈리고, $K=\mathrm{GL}\_2(\widehat{\mathbb Z})$ 이면 $\mathrm{Sh}\_K$ 가 $\mathrm{SL}\_2(\mathbb Z)\backslash\mathbb H$ 다.

# 성질

## 대수성

각 연결성분 $\Gamma\backslash X^+$ 는 준사영 복소 대수다양체의 구조를 갖는다.[^1]

증명의 요지. $\Gamma$ 에 대한 자동형 형식들의 등급환을 만들고 그 환의 Proj 를 취해 $\Gamma\backslash X^+$ 를 포함하는 [사영다양체](projective-varieties.md)를 얻는다. 무게가 충분히 큰 형식들이 $X^+$ 의 점을 분리하고 접벡터를 분리하므로 사영공간으로의 매장이 나온다. 매장의 상에서 경계를 빼면 원래 몫이 열린 부분다양체로 남는다.

## 차원

$\dim\mathrm{Sh}\_K(G,X)=\dim_{\mathbb C}X$ 다. $\mathrm{GL}\_2$ 에서 $1$ 이고 $\mathrm{Sp}\_{2g}$ 에서 $g(g+1)/2$ 다.

## 특수점

$h$ 의 상이 $\mathbb Q$ 위에 정의된 극대 토러스의 실점에 들어가는 $X$ 의 점을 **특수점(special point)** 이라 한다. $\mathrm{GL}\_2$ 에서 특수점은 $\mathbb H$ 의 허수 이차 [무리수](irrational-numbers.md)이고, 그 점에 대응하는 [타원곡선](elliptic-curves.md)은 [복소 곱셈](complex-multiplication.md)(complex multiplication, CM)을 갖는다. $\tau=i$ 에서 $h$ 의 상은 $\mathbb Q(i)^\times$ 가 이루는 토러스에 들어가고, 대응하는 곡선 $\mathbb C/(\mathbb Z+i\mathbb Z)$ 는 $\mathbb Z\lbrack i\rbrack$ 에 의한 복소 곱셈을 갖는다.

## 표준모형

$\mathrm{Sh}\_K(G,X)$ 는 $(G,X)$ 로 정해지는 수체, 곧 반사체(reflex field) 위의 모형을 갖는다[^2]. 이 모형을 표준모형(canonical model)이라 한다. 특수점의 좌표는 [유체론](class-field-theory.md)이 기술하는 아벨 확대에 들고, Galois 군이 특수점에 작용하는 방식을 지정하면 모형이 유일하게 정해진다. $\mathrm{GL}\_2$ 에서 반사체는 $\mathbb Q$ 이고 표준모형은 $\mathbb Q$ 위의 모듈러 곡선이다.

## Hecke 작용

$g\in G(\mathbb A_f)$ 는 오른쪽 곱으로 $\mathrm{Sh}\_K(G,X)$ 에서 $\mathrm{Sh}\_{g^{-1}Kg}(G,X)$ 로 가는 사상을 준다. $K$ 와 $g^{-1}Kg$ 를 함께 포함하는 부분군으로 올라가면 이 사상들이 $\mathrm{Sh}\_K$ 위의 대응이 되고, 코호몰로지에 작용소를 준다. $G=\mathrm{GL}\_2$ 에서 이 작용소가 [모듈러 형식](modular-forms.md)의 [Hecke 작용소](hecke-operators.md)와 일치한다.

# 활용

- **Langlands 대응.** $\ell$ 진 코호몰로지 $H^i(\mathrm{Sh}\_K,\mathbb Q_\ell)$ 에서 Hecke 작용과 Galois 작용이 가환이므로, Hecke 고유값의 꾸러미마다 [Galois 표현](galois-representations.md)이 붙는다. $G=\mathrm{GL}\_2$ 의 경우가 모듈러 곡선의 [Jacobi 다양체](jacobian-variety.md)에서 $2$ 차원 Galois 표현을 얻는 [Eichler–Shimura 관계](eichler-shimura.md)다. [Langlands 강령](langlands-program.md)은 이 대응을 일반 환원군으로 확장한다.
- **아벨 다양체의 모듈라이.** $G=\mathrm{Sp}\_{2g}$ 와 유니터리군의 경우 $\mathrm{Sh}\_K$ 의 점이 추가 자기준동형을 가진 [아벨 다양체](abelian-varieties.md)를 분류한다. 레벨 $K$ 가 등분점 위의 구조를 정한다.
- **복소 곱셈.** 특수점의 좌표가 생성하는 체를 유체론으로 기술한다. $\mathrm{GL}\_2$ 에서 이것이 허수 이차체의 류체를 타원곡선의 $j$ 불변량으로 생성하는 결과다.

[^1]: W. L. Baily and A. Borel, "Compactification of Arithmetic Quotients of Bounded Symmetric Domains", Annals of Mathematics **84** (1966), 442–528.

[^2]: P. Deligne, "Travaux de Shimura", Séminaire Bourbaki 389 (1971), Lecture Notes in Mathematics **244**, 123–165. 공리와 표준모형의 정식화는 P. Deligne, "Variétés de Shimura", in Automorphic Forms, Representations and L-functions, Proceedings of Symposia in Pure Mathematics **33** (1979), 247–289.

# 연관 문서

## 선수지식

- [대수군](algebraic-groups.md)
- [대칭공간](symmetric-spaces.md)
- [Siegel 모듈라이 다양체](siegel-modular-variety.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #group_theory #complex_analysis
