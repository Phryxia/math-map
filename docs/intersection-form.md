# 교차형식

# 개요

**교차형식(intersection form)** 은 4 차원 다양체 안의 2 차원 곡면 두 개가 몇 번 만나는지를 부호와 함께 센 정수들의 표다. 복소 사영평면 안의 직선 두 개는 늘 한 점에서 만나고, 직선 하나를 살짝 움직인 것과 원래 직선도 한 점에서 만나므로 이 공간의 표는 $(1)$ 이다. 구 두 개의 곱 $S^2\times S^2$ 에서는 두 구가 한 번 만나고 같은 구를 움직인 것끼리는 만나지 않아 표가 $\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 이다. 교차형식은 이 표로 4 차원 다양체를 구별하고, 닫힌 단연결 매끄러운 다양체는 이 표만으로 위상동형인지가 정해진다.

# 직관

$H_2=\mathbb Z^2$ 인 닫힌 유향 4 차원 다양체 둘을 들어 호몰로지군만으로 구별되는지 본다. $S^2\times S^2$ 에서는 두 인자 $\lbrack S^2\times\mathrm{pt}\rbrack$ 와 $\lbrack\mathrm{pt}\times S^2\rbrack$ 가 한 점에서 만나고 각자는 자기 자신과 만나지 않게 밀어낼 수 있다. 복소 사영평면 둘을 이어 붙인 $\mathbb{CP}^2\char35{}\mathbb{CP}^2$ 에서는 각 인자의 직선류가 자기 자신과 한 점에서 만나고 서로는 만나지 않는다.

두 교차수의 표를 적으면 앞의 것은 대각성분이 $0$ 이고 비대각성분이 $1$ 이며, 뒤의 것은 그 반대다. 앞의 표에서는 $x=a\lbrack S^2\times\mathrm{pt}\rbrack+b\lbrack\mathrm{pt}\times S^2\rbrack$ 가 자기 자신과 만나는 수가 $2ab$ 로 늘 짝수이고, 뒤의 표에서는 직선류 하나가 자기 자신과 $1$ 번 만난다. 이 짝홀은 기저를 바꿔도 변하지 않으므로 두 다양체는 위상동형이 아니고, 호몰로지군이 같아도 교차수의 표가 구별을 준다.

# 정의

## 교차형식

$M$ 이 닫힌 유향 4 차원 다양체이면 $H^2(M;\mathbb Z)$ 의 꼬임을 뺀 자유 부분 $H$ 위에 다음 형식을 둔다.[^1]

$$
Q_M(\alpha,\beta)=\langle\alpha\cup\beta,\lbrack M\rbrack\rangle
$$

$Q_M$ 은 대칭이고, [Poincaré 쌍대성](poincare-duality.md)이 유도하는 사상 $H\to H^\ast$ 가 동형이므로 **단모듈러(unimodular)** 다. 곧 어떤 기저에서 행렬식이 $\pm 1$ 이다. $\mathbb{CP}^2$ 에서는 $Q=(1)$, $S^2\times S^2$ 에서는 $Q=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 이고 행렬식은 각각 $1$ 과 $-1$ 이다.

## 부호수와 홀짝성

$Q_M$ 을 [실수](real-numbers.md)로 확장해 대각화했을 때 양의 고윳값의 개수를 $b^+$, 음의 고윳값의 개수를 $b^-$ 라 한다. **부호수(signature)** 는 $\sigma(M)=b^+-b^-$ 다.

모든 $\alpha$ 에서 $Q_M(\alpha,\alpha)$ 가 짝수이면 $Q_M$ 을 **짝수형(even)** 이라 하고, 그렇지 않으면 **홀수형(odd)** 이라 한다. $H\ne 0$ 이고 $b^+$ 와 $b^-$ 가운데 하나가 $0$ 이면 **정부호(definite)** 라 한다. $\mathbb{CP}^2$ 의 $(1)$ 은 홀수형이고 양의 정부호이며 $\sigma=1$ 이다. $S^2\times S^2$ 의 형식은 짝수형이고 고윳값이 $1,-1$ 이라 정부호가 아니며 $\sigma=0$ 이다.

# 성질

## 연결합

$Q\_{M\char35{}N}=Q_M\oplus Q_N$ 이다. 연결합의 둘째 코호몰로지는 두 다양체의 둘째 코호몰로지의 직합이고, 서로 다른 성분에서 온 류는 만나지 않는다. 직관 절의 $\mathbb{CP}^2\char35{}\mathbb{CP}^2$ 의 형식은 $(1)\oplus(1)$ 이다.

## 짝수형의 부호수

Rokhlin 정리(Rokhlin's theorem)는 닫힌 단연결 매끄러운 유향 4 차원 다양체 $M$ 의 $Q_M$ 이 짝수형이면 $\sigma(M)$ 이 $16$ 의 배수라는 것이다. 단연결이면 $Q_M$ 이 짝수형인 것은 $w_2(M)=0$, 곧 $M$ 이 [스핀 구조](spin-structures.md)를 갖는 것과 같다. [Dirac 작용소](dirac-operator.md)의 지표는 $-\sigma(M)/8$ 이고, 4 차원 스피너 다발의 사원수 구조로 핵과 여핵이 짝수 차원이라 지표가 짝수다.

## 위상형의 결정

[Freedman 정리](freedman-theorem.md)는 닫힌 단연결 4 차원 위상다양체가 교차형식과 Kirby–Siebenmann 불변량(Kirby–Siebenmann invariant)으로 위상동형까지 분류된다는 것이다. 단모듈러 대칭 형식마다 그것을 교차형식으로 갖는 다양체가 있다. 짝수형에서는 Kirby–Siebenmann 불변량이 $\sigma/8\bmod 2$ 로 정해지므로 다양체가 위상동형까지 하나다.

## 정부호형의 대각화

Donaldson 정리(Donaldson's theorem)는 닫힌 단연결 매끄러운 4 차원 다양체의 교차형식이 정부호이면 정수 기저에서 $\pm I$ 로 대각화된다는 것이다. 증명은 [Yang–Mills 이론](yang-mills-theory.md)의 순간자 모듈라이 공간이 주는 코보디즘에서 나오고, 같은 모듈라이가 [Donaldson 불변량](donaldson-invariants.md)을 정의한다. 이 정리와 Freedman 정리를 합치면 정부호 짝수형 $E_8$ 을 교차형식으로 갖는 위상다양체에는 매끄러운 구조가 없다.

## 비정부호형의 분류

정부호가 아닌 단모듈러 대칭 형식은 계수, 부호수, 홀짝성으로 결정된다. 홀수형은 $\langle 1\rangle$ 과 $\langle-1\rangle$ 의 직합이고, 짝수형은 쌍곡형식과 $\pm E_8$ 의 직합이다. 정부호형의 개수는 계수가 커지면 빠르게 늘어나고, 계수 $16$ 의 짝수 정부호형은 $E_8\oplus E_8$ 과 $D_{16}^+$ 둘이다.

# 활용

- [Seiberg–Witten 이론](seiberg-witten-theory.md). 교차형식이 같은 두 매끄러운 다양체는 Freedman 정리로 위상동형이고, Seiberg–Witten 불변량이 다르면 미분동형이 아니다.
- Seiberg–Witten 모듈라이 공간의 차원 공식 $d(\mathfrak s)=(c_1(\mathfrak s)^2-2\chi-3\sigma)/4$ 는 [Euler 지표](euler-characteristic.md) $\chi$ 와 부호수를 쓴다.
- [이차형식](quadratic-forms.md)의 단모듈러 격자 이론이 가능한 교차형식의 목록을 준다. 짝수 정부호 격자의 계수는 $8$ 의 배수이고, 계수 $8$ 의 짝수 정부호 격자는 $E_8$ 하나다.

[^1]: Robert E. Gompf and András I. Stipsicz, *4-Manifolds and Kirby Calculus*, American Mathematical Society (1999), Ch. 1. 교차형식의 정의, 단모듈러 형식의 분류, Rokhlin 과 Freedman 과 Donaldson 의 정리가 이 장에 있다.

# 연관 문서

## 선수지식

- [이차형식](quadratic-forms.md)
- [Poincaré 쌍대성](poincare-duality.md)

## 더 알아보기

- [Freedman 정리](freedman-theorem.md)
- [Kirby 계산법](kirby-calculus.md)
- [Donaldson 불변량](donaldson-invariants.md)

#algebraic_topology #topology #differential_geometry #linear_algebra
