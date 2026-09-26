# 쌍곡 3 다양체

# 개요

곡면에서는 위상과 기하가 분리된다. 종수 2 인 닫힌 곡면에 [곡률](curvature.md) $-1$ 인 계량을 줄 수 있고 그런 계량은 6 차원 가족을 이룬다. 바지 분해의 경계 길이와 비틀림을 돌리면 서로 다른 쌍곡 곡면이 계속 나온다. 넓이는 [Gauss–Bonnet](gauss-bonnet.md)에 의해 $2\pi|\chi|$ 로 고정되지만 측지선의 길이 스펙트럼은 계량마다 다르다.

3 차원에서는 사정이 다르다.

> **Mostow 강직성.** 유한 부피 완비 쌍곡 구조를 갖는 3 차원 다양체에서 그 구조는 등거리사상을 빼면 유일하다.

돌릴 손잡이가 없다. 한 다양체에 쌍곡 계량이 들어가면 그 계량은 위상이 결정한 것이고, 계량에서 읽는 부피, 최단 측지선의 길이, 등거리군의 위수가 전부 위상 불변량이 된다. 매듭 여집합의 부피 $2.029883\ldots$ 는 계량을 고른 결과가 아니라 8 자매듭 자체의 성질이다.

쌍곡 구조는 상수 단면곡률 $-1$ 이고 완비인 [Riemann 계량](riemannian-metrics.md)이다. 그 구조를 군의 말로 번역하는 도구가 [덮개공간](covering-spaces.md)이고, 구조를 계산할 때 나오는 수가 [Lobachevsky 함수](lobachevsky-function.md)의 값이다.

# 직관

## 차원에 따른 강직성

강직성 증명은 보편덮개 사이의 동변 유사등각 사상을 만들고 그것이 무한원 경계로 확장된다는 사실에서 출발한다. 경계는 2 차원에서 $\partial\mathbb H^2=S^1$ 이고 3 차원에서 $\partial\mathbb H^3=S^2=\widehat{\mathbb C}$ 다.

$S^1$ 위의 유사대칭 사상은 무한 차원 공간을 이루고 그 공간이 [Teichmüller 공간](teichmuller-space.md)이다. $S^2$ 위에서는 Mostow 의 에르고딕 논법이 작동한다. 극한집합이 $S^2$ 전체이고 [군 작용](group-actions.md)이 에르고딕이면 경계 사상의 미분이 거의 어디서나 등각이어야 하고, 등각 자기사상은 [Möbius 변환](holomorphic-functions.md)뿐이다. 차원이 하나 올라가면서 경계의 등각 구조가 뻣뻣해지고 유사등각 사상이 등각으로 강제된다.

## 쌍곡 구조와 표현

완비 쌍곡 계량을 가진 $M$ 을 보편덮개로 올리면 $\mathbb H^3$ 이고 데크 변환은 등거리사상이다. $\mathrm{Isom}^+(\mathbb H^3)=\mathrm{PSL}\_2(\mathbb C)$ 이므로 계량 하나가 표현 하나를 준다.

$$
\rho:\pi_1(M)\longrightarrow \mathrm{PSL}\_2(\mathbb C),\qquad M\cong \mathbb H^3/\rho(\pi_1 M)
$$

이 $\rho$ 는 충실이고 상이 이산이다. 거꾸로 이산 충실 표현이 있으면 몫이 쌍곡 다양체다. 쌍곡 구조를 찾는 문제가 표현을 찾는 대수 문제가 되고, Mostow 강직성은 그 표현이 $\mathrm{PSL}\_2(\mathbb C)$ 켤레를 빼고 하나뿐이라는 진술이 된다.

$\rho(\gamma)$ 의 자취는 켤레 불변이므로 위상 불변량이고, 자취들이 생성하는 불변 자취체는 [대수적 수체](algebraic-number-fields.md)다. 부피는 초월수인데 자취체는 수체라는 대비가 [Bloch 군](algebraic-k-theory.md)과 조절자로 이어진다.

## cusp 와 이상 사면체 분할

매듭 여집합 $S^3\setminus K$ 는 콤팩트하지 않지만 부피가 유한하고, 무한으로 가는 끝은 원환면 하나 곱하기 반직선 꼴이다. 이런 다양체는 꼭짓점이 전부 무한원점에 놓인 이상 사면체로 유한 분할된다.

사면체 하나는 복소수 하나로 결정된다. 무한원 경계에서 네 꼭짓점 중 셋을 $0,1,\infty$ 로 보내면 남은 하나가 $z\in\mathbb C\setminus\lbrace 0,1\rbrace$ 이고, 이 **모양 매개변수**가 사면체를 정한다. 세 이면각은

$$
z,\qquad z'=\frac1{1-z},\qquad z''=1-\frac1z
$$

의 편각이고 곱이 $zz'z''=-1$ 이다. $n$ 개 사면체를 붙인 다양체는 미지수 $n$ 개짜리 방정식계 하나로 환원되며, 이것이 Thurston 의 **붙임 방정식**이다.

# 정의

## 쌍곡 공간과 등거리군

> **정의.** 상반공간 모형은 $\mathbb H^3=\lbrace(x_1,x_2,x_3):x_3\gt 0\rbrace$ 에 계량 $ds^2=(dx_1^2+dx_2^2+dx_3^2)/x_3^2$ 을 준 것이다. 단면곡률이 상수 $-1$ 이고 완비이며, 이 성질을 갖는 단순연결 3 차원 다양체는 등거리사상을 빼고 이것뿐이다.

무한원 경계 $\partial\mathbb H^3=\widehat{\mathbb C}$ 위에서 등거리사상은 Möbius 변환으로 작용하고

$$
\mathrm{Isom}^+(\mathbb H^3)\cong \mathrm{PSL}\_2(\mathbb C),\qquad
\begin{pmatrix}a&b\cr c&d\end{pmatrix}\cdot w=\frac{aw+b}{cw+d}
$$

이다. 항등이 아닌 원소는 자취로 분류된다. $\mathrm{tr}^2\in[0,4)$ 이면 **타원형**으로 고정점이 내부에 있어 회전이고, $\mathrm{tr}^2=4$ 이면 **포물형**으로 경계에 고정점 하나를 가지며 cusp 를 만들고, 그 밖이면 **꼬인형**으로 축 하나를 따라 이동하며 이동거리 $2\thinspace\mathrm{arccosh}|\mathrm{tr}/2|$ 가 폐측지선의 길이다.

## 쌍곡 다양체와 Kleinian 군

> **정의.** $\Gamma\le\mathrm{PSL}\_2(\mathbb C)$ 가 이산이고 비틀림이 없으면 **Kleinian 군**이라 하고, $M=\mathbb H^3/\Gamma$ 를 완비 쌍곡 3 다양체라 한다. $\mathrm{Vol}(M)\lt\infty$ 이면 유한 부피다.

비틀림이 없다는 조건이 타원형 원소를 배제하므로 작용이 자유롭고 몫이 다양체가 된다. 유한 부피이면 $M$ 은 콤팩트한 부분과 유한개의 **cusp**(원환면 $\times[0,\infty)$ 꼴, 포물형 원소들이 만든다)로 나뉜다.

## 붙임 방정식

이상 사면체 $\Delta_1,\dots,\Delta_n$ 을 붙여 $M$ 을 만들었다고 하자. 모양 매개변수 $z_1,\dots,z_n$ 이 완비 쌍곡 구조를 주려면 두 조건이 필요하다.

> **모서리 조건.** 각 모서리를 둘러싼 사면체들의 이면각의 합이 $2\pi$ 이고 회전이 제자리로 돌아와야 한다. 모서리 $e$ 마다
> $$\prod_{i}z_i^{\thinspace a_{e,i}}(z_i')^{\thinspace b_{e,i}}(z_i'')^{\thinspace c_{e,i}}=1,\qquad \sum_i\big(a_{e,i}\arg z_i+\cdots\big)=2\pi$$

> **cusp 조건 (완비성).** 각 cusp 원환면의 자오선 $m$ 과 경선 $\ell$ 에 대응하는 포물형 조건
> $$H(m)=H(\ell)=1$$
> 여기서 $H$ 는 사면체 모양의 곱으로 주어지는 홀로노미다.

이 조건을 만족하는 해 가운데 모든 $z_i$ 의 허수부가 양인 것이 기하적 해다. 부피는

$$
\mathrm{Vol}(M)=\sum_{i=1}^n D(z_i),\qquad
D(z)=\mathrm{Im}\mathrm{Li}\_2(z)+\arg(1-z)\log|z|
$$

인 **Bloch–Wigner 이중로그**로 주어진다. 이상 사면체의 세 이면각이 $\alpha,\beta,\gamma$ 이면 $D(z)=\Lambda(\alpha)+\Lambda(\beta)+\Lambda(\gamma)$ 로 Lobachevsky 함수가 된다.

# 성질

## Mostow–Prasad 강직성

> **정리 (Mostow 1968, Prasad 1973).** $n\ge3$ 이고 $M_1,M_2$ 가 유한 부피 완비 쌍곡 $n$ 다양체이며 $\pi_1(M_1)\cong\pi_1(M_2)$ 이면, 그 동형을 실현하는 등거리사상 $M_1\to M_2$ 가 존재한다.

Mostow 가 닫힌 경우를, Prasad 가 cusp 가 있는 유한 부피 경우를 처리했다. $n=2$ 에서는 Teichmüller 공간이 $6g-6$ 차원이라 거짓이다.

증명의 요지는 다음과 같다.

1. [기본군](fundamental-group.md)의 동형이 준등거리사상 $\mathbb H^n\to\mathbb H^n$ 을 유도한다.
2. 준등거리사상은 무한원 경계 $S^{n-1}$ 위의 유사등각 사상으로 확장된다 (Efremovič–Tihomirova, Mostow).
3. 군 작용이 극한집합 위에서 에르고딕이므로 그 유사등각 사상의 Beltrami 계수가 거의 어디서나 0 이다.
4. 등각 자기사상은 Möbius 변환이고 $\mathbb H^n$ 의 등거리사상에서 온다.

거의 등거리가 정확히 등거리로 승격되는 논법이고, 3 단계가 $n\ge3$ 을 쓴다.

따름정리는 다음과 같다.

- 부피가 위상 불변량이다. $\mathrm{Vol}(M)$ 을 매듭 표에 적을 수 있고 두 매듭의 부피가 다르면 두 매듭은 다르다.
- $\mathrm{Isom}(M)$ 이 유한이고 $\mathrm{Out}(\pi_1 M)$ 과 같다.
- 길이 스펙트럼, 자취체, cusp 모양이 전부 불변량이다.

## 두꺼운–얇은 분해

> **Margulis 보조정리.** 차원 $n$ 마다 상수 $\varepsilon_n\gt 0$ 이 있어, 임의의 쌍곡 $n$ 다양체에서 단사반지름이 $\varepsilon_n$ 미만인 부분 $M_{\lt\varepsilon}$ 은 cusp 이웃과 짧은 측지선 주변의 Margulis 관들의 합집합이다.

쌍곡 다양체는 기하가 유계인 콤팩트 조각인 두꺼운 부분과 표준 꼴인 얇은 부분으로 나뉜다. 부피가 유계이면 두꺼운 부분의 꼴이 유한 가지뿐이고, 이 [콤팩트성](compactness.md)이 아래 Jørgensen–Thurston 정리를 지탱한다.

## 부피의 집합

> **정리 (Jørgensen–Thurston).** 쌍곡 3 다양체 부피의 집합 $\mathcal V\subset\mathbb R_{\gt 0}$ 은 정렬집합이고 순서형이 $\omega^\omega$ 다. 각 부피값을 갖는 다양체는 유한개다.

작은 쪽 끝이 확인되어 있다.

| 종류 | 최소 부피 | 다양체 |
|---|---|---|
| cusp 1 개 | $2.029883\ldots=2V_3$ | 8 자매듭과 그 자매 여집합 |
| 닫힌 것 | $0.942707\ldots$ | Weeks 다양체 |

$V_3=\Lambda(\pi/6)\cdot3=1.0149416\ldots$ 는 정이면체 이상 사면체의 부피이고, 8 자매듭 여집합이 그런 사면체 두 개다.

$\omega^\omega$ 라는 순서형은 극한점의 층이 무한히 쌓인다는 뜻이고, 그 층을 만드는 것이 다음 정리다.

## 쌍곡 Dehn 수술

> **정리 (Thurston).** $M$ 이 cusp 를 가진 유한 부피 쌍곡 다양체이면, 유한개의 예외 기울기를 뺀 모든 기울기 $(p,q)$ 에 대해 Dehn 채움 $M_{p,q}$ 도 쌍곡이다. 그리고
> $$\mathrm{Vol}(M_{p,q})\lt\mathrm{Vol}(M),\qquad \mathrm{Vol}(M_{p,q})\longrightarrow\mathrm{Vol}(M)\ \ (p^2+q^2\to\infty)$$

cusp 를 메우면 부피가 줄고, 복잡하게 메울수록 원래 부피에 아래에서 수렴한다. $\mathcal V$ 안의 각 부피값이 그보다 큰 부피값들의 극한이 되고, 이 과정을 겹쳐 $\omega^\omega$ 가 나온다. 수술로 만드는 3 다양체 가운데 쌍곡이 아닌 것은 유한개의 예외뿐이다.

강직성은 고정된 위상형에서 계량이 유일하다는 진술이고 Dehn 수술은 위상형 자체를 바꾸므로 둘은 어긋나지 않는다. 붙임 방정식의 말로는, 완비성 조건을 풀어 준 해의 족이 불완비 구조들의 1 복소차원 가족을 이루고 그 가운데 홀로노미가 $(p,q)$ 조건을 만족하는 이산점들이 채워진 다양체의 완비 구조다.

## 기하화 정리 안에서의 위치

> **정리 (Thurston 의 기하화 추측, Perelman 증명).** 모든 닫힌 방향 가능 3 다양체는 소수 분해와 원환면 분해를 거쳐 8 개 모형 기하 중 하나를 갖는 조각으로 잘린다.

8 개는 $\mathbb H^3,\ \mathbb E^3,\ S^3,\ S^2\times\mathbb R,\ \mathbb H^2\times\mathbb R,\ \widetilde{\mathrm{SL}\_2\mathbb R},\ \mathrm{Nil},\ \mathrm{Sol}$ 이고 이 가운데 $\mathbb H^3$ 조각이 압도적으로 많다. 나머지 일곱은 Seifert 올뭉치거나 원환면 다발로 분류되어 있어 3 차원 위상수학의 내용이 쌍곡 조각에 몰린다. 강직성이 그 조각들을 기하로 식별하므로 3 다양체의 분류가 Kleinian 군의 분류가 된다.

# 활용

## 8 자매듭 여집합

8 자매듭 $4_1$ 의 여집합은 이상 사면체 두 개를 붙여 만든다. 두 사면체의 모양을 $z,w$ 라 하면 모서리 조건이

$$
z(1-z)\thinspace w(1-w)=1
$$

한 방정식으로 줄고, 완비성 조건까지 넣으면 정이면체 사면체 $z=w=e^{i\pi/3}$ 이 나온다. 부피는

$$
\mathrm{Vol}=2D\big(e^{i\pi/3}\big)=2\cdot3\Lambda(\pi/6)=6\times0.5074708\ldots=2.0298832\ldots
$$

이고, [볼륨 추측](volume-conjecture.md)이 색 Jones 다항식의 증가율로 재현한다고 주장하는 값이 이것이다. 조합 쪽 합의 안장점 조건이 여기 모서리 조건과 같은 식이 된다.

## 이중로그를 쓴 부피 계산

붙임 방정식의 해가 주어지면 부피 계산은 Bloch–Wigner 함수의 수치 계산이다.

$|z|=1$ 인 정이면체 해에서는 $\log|z|=0$ 이라 둘째 항이 사라지고 $D(e^{i\theta})=\mathrm{Im}\mathrm{Li}\_2(e^{i\theta})=2\Lambda(\theta/2)$ 가 된다.[^1]

## 매듭 구별

SnapPy 같은 프로그램은 매듭 도식에서 이상 사면체 분할을 자동으로 만들고 붙임 방정식을 [Newton 법](newton-method.md)으로 푼다. 얻은 부피, cusp 모양, 자취체가 위상 불변량이므로 매듭표에서 항목을 가르는 1 차 기준이 된다. [Alexander 다항식](knot-invariants.md)이나 Jones 다항식이 같은 값을 주는 매듭 쌍도 부피가 다르면 갈린다.

수치 계산은 증명이 아니다. 붙임 방정식의 근사해가 진짜 해 근처에 있음을 구간 산술로 검증하는 절차(HIKMOT 류)를 통과해야 그 다양체가 쌍곡이라는 것이 정리가 된다.

## 산술 다양체, Chern–Simons 이론, $K$ 이론

- **산술 쌍곡 다양체.** $\Gamma$ 가 사원수 대수의 정수원에서 오면 Bianchi 군 $\mathrm{PSL}\_2(\mathcal O_d)$ 류가 되고 부피가 [Dedekind zeta 함수](dirichlet-l-functions.md)의 값으로 계산된다. [Selberg 대각합 공식](selberg-trace-formula.md)이 길이 스펙트럼과 Laplace 스펙트럼을 잇는다.
- **Chern–Simons 이론.** 쌍곡 구조는 $\mathrm{SL}\_2(\mathbb C)$ 평탄 접속이므로 [Chern–Simons](chern-simons.md) 불변량이 정의되고 $\mathrm{CS}+i\thinspace\mathrm{Vol}/2\pi$ 라는 복소수 하나로 묶인다. [Witten 점근](witten-asymptotics.md)과 볼륨 추측이 이 복소수의 실수부와 허수부를 본다.
- **$K$ 이론.** 사면체 모양들이 정하는 Bloch 군의 원소가 있고 그 Borel 조절자가 부피다. 대수적 K 이론이 3 다양체의 부피와 이렇게 이어진다.

[^1]: $\mathrm{Im}\mathrm{Li}\_2(e^{i\theta})=\sum_n\sin(n\theta)/n^2$ 이고 $\Lambda(\theta)=\tfrac12\sum_n\sin(2n\theta)/n^2$ 이므로 $\mathrm{Im}\mathrm{Li}\_2(e^{i\theta})=2\Lambda(\theta/2)$ 다. $\theta=\pi/3$ 에서 $2\Lambda(\pi/6)=1.0149416\ldots=V_3$ 이 나온다.

# 연관 문서

## 선수지식

- [Riemann 계량과 측지선](riemannian-metrics.md)
- [덮개공간](covering-spaces.md)
- [Lobachevsky 함수](lobachevsky-function.md)

## 더 알아보기

- [볼륨 추측과 색 Jones 다항식](volume-conjecture.md)
- [기하화 정리](geometrization.md)

#differential_geometry #topology #algebraic_topology #group_theory #theorem
