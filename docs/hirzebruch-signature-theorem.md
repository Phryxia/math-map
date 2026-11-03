# Hirzebruch 부호수 정리

# 개요

**Hirzebruch 부호수 정리(Hirzebruch signature theorem)** 는 다양체 안의 부분다양체들이 만나는 방식에서 얻은 정수를 그 다양체의 접공간에서 계산하는 공식이다. 복소 사영평면 $\mathbb{CP}^2$ 에서 두 복소 직선은 한 점에서 만나고, 이 교차 수에서 부호수 $1$ 이 나온다. 정리는 이 값이 접공간에서 계산한 Pontryagin 수 $3$ 의 $1/3$ 과 같음을 보이고, 이 관계를 $4k$ 차원 다양체로 넓혀 위상에서 정한 부호수를 접다발의 [특성류](characteristic-classes.md)로 계산한다.

# 직관

$4$ 차원 닫힌 방향 다양체 $M$ 의 [교차형식](intersection-form.md)에서 부호수를 계산하려면 $H^2(M;\mathbb R)$ 의 기저를 잡고 컵곱 [행렬](matrices.md)을 대각화해 양의 고윳값과 음의 고윳값을 센다. 접다발의 특성류로 같은 값을 얻을 수 있는지 보기 위해 $\mathbb{CP}^2$ 에서 두 수를 계산한다.

$H^2(\mathbb{CP}^2;\mathbb Z)$ 는 $a$ 하나가 생성하고 $\langle a\cup a,\lbrack\mathbb{CP}^2\rbrack\rangle=1$ 이므로 형식이 $1\times 1$ 행렬 $(1)$ 이고 부호수가 $1$ 이다. 한편 접다발의 첫 [Pontryagin 류](pontryagin-classes.md)는 $p_1=3a^2$ 이므로 $\langle p_1/3,\lbrack\mathbb{CP}^2\rbrack\rangle=1$ 이다. 두 수가 같다.

한 다양체에서 값이 같은 것으로는 공식이 되지 않는다. 그런데 두 수가 모두 [코보디즘](cobordism.md) 불변량이고, 코보디즘 환에 유리수를 텐서하면 $\lbrack\mathbb{CP}^{2i}\rbrack$ 들이 그 환을 생성한다. 생성원마다 두 값이 일치하도록 다항식의 계수를 정하면 모든 다양체에서 일치한다. $4$ 차원에서 그 다항식이 $p_1/3$ 이고, $8$ 차원에서는 $\mathbb{CP}^4$ 와 $\mathbb{CP}^2\times\mathbb{CP}^2$ 두 생성원이 $p_2$ 와 $p_1^2$ 의 계수 두 개를 정한다.

# 정의

## 부호수

닫힌 방향 $4k$ 차원 다양체 $M$ 에서 다음 컵곱은 대칭 쌍선형형식이고, [Poincaré 쌍대성](poincare-duality.md)으로 비퇴화다.

$$
H^{2k}(M;\mathbb R)\times H^{2k}(M;\mathbb R)\to\mathbb R,\qquad (x,y)\mapsto\langle x\cup y,\lbrack M\rbrack\rangle
$$

이 형식의 행렬의 양의 고윳값 개수를 $b^+$, 음의 고윳값 개수를 $b^-$ 라 하면 **부호수(signature)** 는 $\mathrm{sign}(M)=b^+-b^-$ 다. 직관 절에서 $\mathrm{sign}(\mathbb{CP}^2)=1$ 이다. $S^2\times S^2$ 에서는 두 인수의 생성원 $x,y$ 에 대해 행렬이 $\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 이고 고윳값이 $1,-1$ 이므로 부호수가 $0$ 이다.

## L-류

**$L$-류($L$-class)** 는 멱급수 $Q(y)=\sqrt y/\tanh\sqrt y$ 가 정하는 [곱셈적 종수](multiplicative-genera.md)의 특성류 열이다. 접다발의 Pontryagin 근을 $y_j$ 라 하면 $\prod_j Q(y_j)$ 의 차수 $4k$ 성분이 $L_k$ 이고, $L_k$ 는 $p_1,\dots,p_k$ 의 유리계수 다항식이다. 처음 두 항은 다음과 같다.

$$
L_1=\frac{p_1}{3},\qquad L_2=\frac{7p_2-p_1^2}{45}
$$

$\mathbb{CP}^2$ 에서 $\langle L_1,\lbrack\mathbb{CP}^2\rbrack\rangle=1$ 이다. $\mathbb{CP}^4$ 에서는 $p=(1+a^2)^5$ 이므로 $p_1=5a^2$, $p_2=10a^4$ 이고 $\langle L_2,\lbrack\mathbb{CP}^4\rbrack\rangle=(70-25)/45=1$ 이다.

# 성질

## 부호수 정리

닫힌 방향 $4k$ 차원 다양체 $M$ 에서 $\mathrm{sign}(M)=\langle L_k,\lbrack M\rbrack\rangle$ 이다. 차원이 $4$ 의 배수가 아니면 중간 차수가 없거나 형식이 반대칭이므로 부호수를 $0$ 으로 둔다.

증명의 요지는 양변을 환 준동형으로 보는 것이다. 부호수는 코보디즘 불변량이고 $\mathrm{sign}(M\times N)=\mathrm{sign}(M)\thinspace\mathrm{sign}(N)$ 이므로 환 준동형 $\Omega\_\ast\otimes\mathbb Q\to\mathbb Q$ 를 준다. Pontryagin 수도 코보디즘 불변량이고, 곱셈적 종수는 Whitney 곱 공식(Whitney product formula)으로 곱을 곱으로 보내므로 $\langle L,\lbrack M\rbrack\rangle$ 도 환 준동형이다. 두 준동형이 생성원 $\lbrack\mathbb{CP}^{2i}\rbrack$ 에서 모두 $1$ 이 되는 멱급수가 $Q(y)=\sqrt y/\tanh\sqrt y$ 하나뿐이다.

## 정수성

$L_k$ 의 계수는 분수이지만 좌변이 정수이므로 $\langle L_k,\lbrack M\rbrack\rangle$ 은 항상 정수다. $8$ 차원에서는 $7p_2\lbrack M\rbrack-p_1^2\lbrack M\rbrack$ 이 $45$ 의 배수다. 그러므로 이 조합이 정수가 아닌 Pontryagin 수의 값은 매끄러운 닫힌 다양체의 접다발에서 나오지 않는다.

## Rokhlin 정리

Rokhlin 정리(Rokhlin's theorem)는 닫힌 [스핀 구조](spin-structures.md)를 가진 $4$ 차원 다양체의 부호수가 $16$ 의 배수라는 것이다. 스핀 다양체에서 $\hat A=-p_1/24$ 는 [Dirac 작용소](dirac-operator.md)의 지표라 정수이므로 $\mathrm{sign}=p_1/3=-8\hat A$ 는 $8$ 의 배수다. $4$ 차원에서 Dirac 작용소의 핵과 여핵은 사원수 벡터공간이라 지표가 짝수이므로 $16$ 의 배수가 된다. K3 곡면의 부호수는 $-16$ 이고, 부호수가 $8$ 인 $E_8$ 형식은 매끄러운 스핀 $4$ 다양체의 교차형식이 아니다.

## 지표 정리와의 관계

부호수 작용소(signature operator) $d+d^\ast$ 를 자기쌍대 형식과 반자기쌍대 형식 사이의 작용소로 보면 그 지표가 부호수다. 이 작용소에 [지표 정리](index-theorem.md)를 적용하면 지표가 $\langle L_k,\lbrack M\rbrack\rangle$ 로 나오고, 부호수 정리가 다시 증명된다.

# 활용

- [이색 구면](exotic-spheres.md). 호모토피 $7$ 구면이 경계가 되는 $p_1=0$ 인 $8$ 다양체에서 $45\thinspace\mathrm{sign}=7p_2$ 이므로 부호수는 $7$ 의 배수이고, 부호수를 $7$ 로 나눈 나머지가 미분구조를 가르는 불변량이 된다.
- $4$ 차원 다양체의 제약. $p_1\lbrack M\rbrack=3\thinspace\mathrm{sign}(M)$ 이므로 교차형식이 정해지면 첫 Pontryagin 수가 정해진다.
- 특성수의 정수 조건. 곱셈적 종수에서 $\hat A$-류와 Todd 류(Todd class)가 같은 방식으로 정의되고, 각각 Dirac 작용소와 Dolbeault 작용소의 지표로서 정수성 조건을 준다.
- [Novikov 추측](novikov-conjecture.md). 부호수는 호모토피 불변량이지만 $L$-류 자체는 그렇지 않다. Novikov 추측은 $L$-류에 기본군의 분류공간에서 당긴 코호몰로지류를 곱해 적분한 고차 부호수(higher signature)가 호모토피 불변량인지를 묻는다.

# 연관 문서

## 선수지식

- [코보디즘](cobordism.md)
- [Pontryagin 류](pontryagin-classes.md)

## 더 알아보기

- [Novikov 추측](novikov-conjecture.md)

#algebraic_topology #topology #differential_geometry
