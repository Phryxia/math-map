# 대칭공간

# 개요

대칭공간은 각 점에서 측지선의 방향을 모두 뒤집는 등거리변환을 갖는 [Riemann 다양체](riemannian-metrics.md)다. 이 변환이 있으면 곡률 텐서가 평행하므로 한 점의 곡률이 공간 전체의 곡률을 정한다.

[등질공간](homogeneous-spaces.md) $G/H$ 가운데 $H$ 가 $G$ 의 대합의 고정부분군인 것이 대칭공간이고, 분류가 [Lie 대수](lie-algebras.md)와 그 대합의 분류로 바뀐다.

# 직관

유클리드 공간에서 점 $p$ 를 지나는 직선마다 $p$ 를 중심으로 뒤집는 변환, 곧 $x\mapsto 2p-x$ 는 거리를 보존한다. 구면에서도 $p$ 와 그 대심점을 잇는 축에 대한 회전 가운데 접평면을 $-1$ 배로 보내는 것이 있다. 두 공간 모두 점마다 "그 점을 고정하고 모든 측지선을 거꾸로 돌리는 등거리변환" 을 갖는다.

이 변환 $s_p$ 의 미분은 $T_pM$ 에서 $-\mathrm{id}$ 다. 곡률 텐서의 공변미분 $\nabla R$ 은 지표가 다섯 개이므로 $s_p$ 로 끌어오면 부호가 $(-1)^5=-1$ 배 되고, $s_p$ 가 등거리변환이라 $\nabla R$ 은 그대로여야 한다. 따라서 $p$ 에서 $\nabla R=-\nabla R$ 이고 $\nabla R=0$ 이다. 점마다 이 변환이 있으면 곡률이 평행이 된다.

# 정의

## 대칭공간

Riemann 다양체 $M$ 이 **대칭공간**이라는 것은 각 $p\in M$ 에 등거리변환 $s_p\colon M\to M$ 이 있어 $s_p(p)=p$ 이고 $d(s_p)\_p=-\mathrm{id}$ 라는 뜻이다.[^1] $s_p$ 를 $p$ 에서의 **측지적 대칭**이라 한다.

$\nabla R=0$ 만 요구하면 **국소 대칭공간**이라 한다. 측지적 대칭이 근방에서만 정의되는 경우다.

## 대합과 Cartan 분해

$G$ 를 $M$ 의 등거리변환군의 항등성분, $H$ 를 한 점 $o$ 의 안정자라 하면 $M=G/H$ 다. $\sigma(g)=s_o\thinspace g\thinspace s_o$ 는 $G$ 의 대합 자기동형이고 $H$ 는 그 고정부분군의 항등성분을 품는다.

$\sigma$ 의 미분이 $\mathfrak g$ 를 고윳값 $\pm 1$ 로 가른다.

$$
\mathfrak g=\mathfrak h\oplus\mathfrak m,\qquad \lbrack\mathfrak h,\mathfrak h\rbrack\subseteq\mathfrak h,\quad\lbrack\mathfrak h,\mathfrak m\rbrack\subseteq\mathfrak m,\quad\lbrack\mathfrak m,\mathfrak m\rbrack\subseteq\mathfrak h
$$

이것이 **Cartan 분해**이고 $\mathfrak m$ 이 $T_o M$ 과 동형이다.

## 세 유형

Killing 형식을 $\mathfrak m$ 에 제한한 부호로 유형을 나눈다. 음의 정부호이면 **콤팩트형**, 양의 정부호이면 **비콤팩트형**, $\lbrack\mathfrak m,\mathfrak m\rbrack=0$ 이면 **유클리드형**이다.

## Hermite 대칭공간

**Hermite 대칭공간**은 복소구조를 갖는 대칭공간으로 각 점의 측지적 대칭이 정칙인 것이다. 복소구조가 등거리군의 작용과 호환되므로 Riemann 계량이 [Kähler 계량](kahler-manifolds.md)이 된다.

$G/H$ 가 Hermite 인 것과 $H$ 의 중심이 원군을 담는 것이 동치다. 그 원군이 $\mathfrak m$ 에 작용하여 제곱이 $-1$ 인 자기준동형을 주고, 그것이 복소구조다.

비콤팩트형 Hermite 대칭공간은 $\mathbb C^n$ 의 유계 영역과 쌍정칙이고 그 영역을 **유계 대칭영역**이라 한다. 상반평면 $\mathrm{SL}\_2(\mathbb R)/\mathrm{SO}(2)$ 는 단위원판과 쌍정칙이고, $\mathrm{Sp}\_{2g}(\mathbb R)/U(g)$ 는 Siegel 상반공간으로 대칭행렬이 이루는 유계 영역과 쌍정칙이다.

# 성질

## 곡률 공식

**정리.** 대칭공간에서 $X,Y,Z\in\mathfrak m$ 에 대해 곡률은 다음과 같다.

$$
R(X,Y)Z=-\lbrack\lbrack X,Y\rbrack,Z\rbrack
$$

증명의 요지. $\mathfrak m$ 의 원소가 생성하는 1 매개변수 군이 측지선을 주고, 접속의 공변미분이 $\mathfrak h$ 성분으로 적힌다. 곡률의 정의에 넣으면 괄호의 두 겹이 남는다. ∎

따라서 단면곡률은 $\langle\lbrack\lbrack X,Y\rbrack,X\rbrack,Y\rangle$ 꼴이고, 콤팩트형에서 $\ge 0$ 이며 비콤팩트형에서 $\le 0$ 이다.

## 완비성과 지수사상

**정리.** 대칭공간은 측지적으로 완비이고, 비콤팩트형에서 지수사상이 미분동형이다.

증명의 요지. 측지적 대칭으로 측지선을 끝에서 이어 붙일 수 있으므로 모든 측지선이 $\mathbb R$ 전체에서 정의된다. 비콤팩트형은 단면곡률이 $\le 0$ 이므로 Cartan–Hadamard 정리가 적용되어 켤레점이 없다. ∎

## 쌍대성

**정리.** 콤팩트형 대칭공간과 비콤팩트형 대칭공간이 짝을 이룬다.

증명의 요지. Cartan 분해에서 $\mathfrak m$ 을 $i\mathfrak m$ 으로 바꾸면 $\lbrack\mathfrak m,\mathfrak m\rbrack$ 의 부호가 뒤집히고 $\mathfrak h\oplus i\mathfrak m$ 이 다시 Lie 대수가 된다. 이 대응이 두 유형의 기약 대칭공간을 일대일로 짝짓는다. ∎

구면 $S^n=\mathrm{SO}(n+1)/\mathrm{SO}(n)$ 과 쌍곡공간 $\mathrm{SO}(n,1)^+/\mathrm{SO}(n)$ 이 짝이다.

## 분류

**정리.** 단연결 대칭공간은 유클리드 인자와 기약 인자들의 Riemann 곱이고, 기약 인자는 단순 Lie 대수와 그 대합의 켤레류로 분류된다.

증명의 요지. 등방표현의 기약 분해가 공간의 곱 분해를 준다. 기약 인자에서 $\mathfrak g$ 가 단순하거나 두 벌의 직합이고, 대합의 분류가 [근계](root-systems.md)의 자기동형과 Satake 도형의 분류로 환원된다. ∎

## Harish-Chandra 매장

**정리.** 비콤팩트형 Hermite 대칭공간은 $\mathbb C^n$ 의 유계 볼록 영역과 쌍정칙이다.[^2]

증명의 요지. 복소화 $\mathfrak g_{\mathbb C}$ 안에서 복소구조의 고유값 $i$ 와 $-i$ 에 따라 $\mathfrak m$ 의 복소화를 $\mathfrak m^+\oplus\mathfrak m^-$ 로 가른다. 두 조각은 각각 아벨 부분대수이고 지수사상이 $\mathfrak m^+$ 위에서 단사다. 점을 그 역으로 $\mathfrak m^+\cong\mathbb C^n$ 의 좌표로 적으면 상이 유계 볼록 영역이 된다. $\mathrm{SL}\_2(\mathbb R)/\mathrm{SO}(2)$ 에서 이 좌표가 상반평면을 단위원판으로 보내는 Cayley 변환이다. ∎

$n$ 은 공간의 복소차원이다. 이 좌표로 유계 대칭영역이 $\mathbb C^n$ 의 영역으로 실현되고, 그 영역의 자기동형군이 처음의 $G$ 다.

# 활용

- [Grassmann 다양체](grassmannian.md)가 콤팩트형 기약 대칭공간이다. $\mathrm{O}(n)/(\mathrm{O}(k)\times\mathrm{O}(n-k))$ 의 대합이 두 블록의 부호를 바꾸는 켤레이고, Cartan 분해의 $\mathfrak m$ 이 블록 밖 성분이다.
- 상반평면 $\mathrm{SL}\_2(\mathbb R)/\mathrm{SO}(2)$ 가 비콤팩트형이다. 이산 부분군으로 나눈 몫이 모듈러 곡선이고, 그 위의 조화해석이 [Selberg 대각합 공식](selberg-trace-formula.md)을 준다.
- [측지선의 비교정리](geodesic-comparison-theorems.md)에서 상수곡률 모형이 맡던 자리를 대칭공간이 맡는다. 곡률이 평행이므로 Jacobi 방정식의 계수가 상수이고 해가 닫힌 형태로 나온다.
- 대칭공간 위의 불변 미분작용소 대수가 가환이다. 그 고유함수가 구면함수이고, 전개가 [구면조화함수](spherical-harmonics.md)의 일반화다.
- 유계 대칭영역을 산술 부분군으로 나눈 몫이 대수다양체가 되고, 그 다양체가 [Shimura 다양체](shimura-varieties.md)다. Hermite 조건이 몫에 복소구조를 주고, 비콤팩트형이라는 조건이 몫을 콤팩트가 아닌 공간으로 만든다.

[^1]: Sigurdur Helgason, *Differential Geometry, Lie Groups, and Symmetric Spaces*, Academic Press (1978), Ch. IV. 측지적 대칭의 정의, Cartan 분해, 곡률 공식과 세 유형의 분류가 이 장에 있다.

[^2]: Sigurdur Helgason, *Differential Geometry, Lie Groups, and Symmetric Spaces*, Academic Press (1978), Ch. VIII. 복소화의 분해와 유계 영역으로의 매장이 이 장에 있다.

# 연관 문서

## 선수지식

- [Riemann 계량](riemannian-metrics.md)
- [등질공간](homogeneous-spaces.md)

## 더 알아보기

- [Shimura 다양체](shimura-varieties.md)

#differential_geometry #group_theory #algebra #linear_algebra
