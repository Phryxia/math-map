# Hirzebruch 부호수 정리

# 개요

**Hirzebruch 부호수 정리(Hirzebruch signature theorem)** 는 다양체 안의 부분다양체들이 만나는 방식에서 얻은 정수를 그 다양체의 접공간에서 계산하는 공식이다. 복소 사영평면 $\mathbb{CP}^2$ 에서 두 복소 직선은 한 점에서 만나고, 이 교차 수에서 부호수 $1$ 이 나온다. 정리는 이 값이 접공간에서 계산한 Pontryagin 수 $3$ 의 $1/3$ 과 같음을 보이고, 이 관계를 $4k$ 차원 다양체로 넓혀 위상에서 정한 부호수를 접다발의 [특성류](characteristic-classes.md)로 계산한다.

# 직관

Hirzebruch 부호수 정리는 $4k$ 차원 닫힌 방향 다양체의 [교차형식](intersection-form.md) 부호수를 [Pontryagin 류](pontryagin-classes.md)의 다항식으로 적는다.

$$
\mathrm{sign}(M)=\langle L_k(p_1,\dots,p_k),\lbrack M\rbrack\rangle
$$

좌변은 중간 차수 코호몰로지의 컵곱 형식에서 양의 고유값 개수와 음의 고유값 개수의 차이이고, 우변은 접다발의 특성류를 기본류에 짝지은 수다. 증명은 양변이 [코보디즘](cobordism.md) 불변량임을 쓴다.

$4$ 차원에서 부호수를 계산하려면 $H^2(M;\mathbb R)$ 의 기저를 잡고 컵곱 [행렬](matrices.md)을 대각화해야 한다. 특성류로 같은 값을 얻을 수 있는지 보기 위해 $\mathbb{CP}^2$ 에서 두 수를 모두 계산한다.

$H^2(\mathbb{CP}^2;\mathbb Z)$ 는 $a$ 하나가 생성하고 $\langle a\cup a,\lbrack\mathbb{CP}^2\rbrack\rangle=1$ 이므로 형식이 $1\times 1$ 행렬 $(1)$ 이고 부호수가 $1$ 이다. 한편 접다발의 첫 Pontryagin 류는 $p_1=3a^2$ 이므로 $\langle p_1/3,\lbrack\mathbb{CP}^2\rbrack\rangle=1$ 이다. 두 수가 같다.

한 다양체에서 값이 같은 것으로는 공식이 되지 않지만, 두 수가 모두 코보디즘 불변량이고 코보디즘 환에 유리수를 텐서하면 $\lbrack\mathbb{CP}^{2i}\rbrack$ 들이 그 환을 생성한다. 환의 생성원마다 두 값이 일치하도록 다항식의 계수를 정하면 모든 다양체에서 일치한다. $4$ 차원에서 그 다항식이 $p_1/3$ 이고, $8$ 차원에서는 $\mathbb{CP}^4$ 와 $\mathbb{CP}^2\times\mathbb{CP}^2$ 두 생성원이 계수 두 개를 정한다.

# 정의

닫힌 방향 $4k$ 차원 다양체 $M$ 에서 컵곱

$$
H^{2k}(M;\mathbb R)\times H^{2k}(M;\mathbb R)\to\mathbb R,\qquad (x,y)\mapsto\langle x\cup y,\lbrack M\rbrack\rangle
$$

은 대칭 비퇴화 쌍선형형식이다. 양의 고유값 개수를 $b^+$, 음의 고유값 개수를 $b^-$ 라 하면 **부호수**는 $\mathrm{sign}(M)=b^+-b^-$ 다.

## L-류

$L$-류는 멱급수 $Q(y)=\sqrt y/\tanh\sqrt y$ 가 정하는 [곱셈적 종수](multiplicative-genera.md)의 특성류 열이다. 접다발의 Pontryagin 근을 $y_j$ 라 하면 $\prod_j Q(y_j)$ 의 차수 $4k$ 성분이 $L_k$ 이고 $p_1,\dots,p_k$ 의 유리계수 다항식이다. 처음 두 항은 다음과 같다.

$$
L_1=\frac{p_1}{3},\qquad L_2=\frac{7p_2-p_1^2}{45}
$$

# 성질

## 정리

닫힌 방향 $4k$ 차원 다양체 $M$ 에서 $\mathrm{sign}(M)=\langle L_k,\lbrack M\rbrack\rangle$ 이다. 차원이 $4$ 의 배수가 아니면 중간 차수가 없거나 형식이 반대칭이므로 부호수를 $0$ 으로 둔다.

증명의 요지는 양변을 환 준동형으로 보는 것이다. 부호수는 코보디즘 불변량이고 곱다양체에서 $\mathrm{sign}(M\times N)=\mathrm{sign}(M)\mathrm{sign}(N)$ 이므로 $\Omega\_\ast\otimes\mathbb Q\to\mathbb Q$ 인 환 준동형을 준다. 특성수 쪽도 Whitney 곱 공식에서 같은 성질을 얻는다. 두 준동형이 생성원 $\lbrack\mathbb{CP}^{2i}\rbrack$ 에서 일치하도록 $L$-류의 계수를 정하면 $\tanh$ 의 멱급수가 나온다.

## 정수성

$L_k$ 의 계수는 분수이지만 $\langle L_k,\lbrack M\rbrack\rangle$ 은 항상 정수다. 정수성은 공식 자체에서 보이지 않고 좌변이 정수라는 데서 나온다. 이 현상이 특성수에 정수 조건을 걸어 어떤 유리 코호몰로지류가 실제 다양체에서 나오는지를 제한한다.

## 스핀 조건과 Rokhlin 정리

닫힌 스핀 $4$ 차원 다양체의 부호수는 $16$ 으로 나뉜다. $\mathrm{sign}=p_1/3$ 과 스핀 조건에서 나오는 지표의 정수성을 함께 쓰면 이 배수 조건이 따라온다.

## 지표 정리와의 관계

부호수 작용소의 지표가 부호수와 같고, 그 작용소에 [지표 정리](index-theorem.md)를 적용하면 우변이 $\langle L_k,\lbrack M\rbrack\rangle$ 이 된다. 그러므로 이 정리는 지표 정리의 한 경우다.

# 활용

- [지표 정리](index-theorem.md)의 특수한 경우. 타원형 작용소의 지표를 특성수로 적는 틀이 이 정리를 포함한다.
- [이색 구면](exotic-spheres.md)의 구성. $7$ 차원 구면에 들어가는 미분구조를 구별하는 불변량을 그 구면이 경계가 되는 $8$ 차원 다양체의 부호수와 $p_1$ 으로 만든다.
- $4$ 차원 다양체의 제약. 교차형식의 부호수가 $p_1/3$ 으로 고정되므로, 주어진 형식을 실현하는 다양체의 특성류가 미리 정해진다.
- 특성수의 정수 조건. 곱셈적 종수의 틀에서 $\hat A$-류와 Todd 류가 같은 방식으로 나오고 각각 정수성 조건을 준다.

# 연관 문서

## 선수지식

- [코보디즘](cobordism.md)
- [Pontryagin 류](pontryagin-classes.md)

## 더 알아보기

- [Novikov 추측](novikov-conjecture.md)

#algebraic_topology #topology #differential_geometry
