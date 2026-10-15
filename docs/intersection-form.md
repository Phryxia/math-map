# 교차형식

# 개요

교차형식은 닫힌 유향 4 차원 다양체의 둘째 코호몰로지 위에 [Poincaré 쌍대성](poincare-duality.md)이 주는 대칭 쌍선형형식이다. 두 코호몰로지류의 컵곱을 기본류에서 값매김한 정수가 형식의 값이다.

쌍대성 정리가 이 형식을 단모듈러로 만든다. 단연결 다양체에서는 이 형식이 위상형을 결정하고, 매끄러운 구조의 존재에 제약을 준다.

# 직관

$H_2=\mathbb Z^2$ 인 닫힌 유향 4 차원 다양체 둘을 들어 호몰로지군만으로 구별되는지 본다. $S^2\times S^2$ 에서는 두 인자 $\lbrack S^2\times\mathrm{pt}\rbrack$ 와 $\lbrack\mathrm{pt}\times S^2\rbrack$ 가 한 점에서 만나고 각자는 자기 자신과 만나지 않게 밀어낼 수 있다. 사영평면 둘을 이어 붙인 것에서는 각 인자의 직선류가 자기 자신과 한 점에서 만나고 서로는 만나지 않는다.

두 교차수의 표를 적으면 앞의 것은 대각성분이 $0$ 이고 비대각성분이 $1$ 이며, 뒤의 것은 그 반대다. 두 표는 정수 기저 변환으로 옮겨지지 않는다. 앞의 표는 모든 대각성분이 짝수이고 뒤의 표는 그렇지 않기 때문이다. 호몰로지군은 둘 다 $\mathbb Z^2$ 였으므로 교차수의 표가 구별을 준다.

# 정의

## 교차형식

$M$ 이 닫힌 유향 4 차원 다양체이면 $H^2(M;\mathbb Z)$ 의 비틀림을 뺀 자유 부분 $H$ 위에 다음 형식을 둔다.[^1]

$$
Q_M(\alpha,\beta)=\langle\alpha\cup\beta,\lbrack M\rbrack\rangle
$$

$Q_M$ 은 대칭이고, 쌍대성 정리가 유도하는 사상 $H\to H^\ast$ 가 동형이므로 **단모듈러**다. 곧 어떤 기저에서 행렬식이 $\pm 1$ 이다.

## 부호수와 홀짝성

$Q_M$ 을 실수로 확장해 대각화했을 때 양의 고윳값의 개수를 $b^+$, 음의 고윳값의 개수를 $b^-$ 라 한다. **부호수**는 $\sigma(M)=b^+-b^-$ 다.

모든 $\alpha$ 에서 $Q_M(\alpha,\alpha)$ 가 짝수이면 $Q_M$ 을 **짝수형**이라 하고, 그렇지 않으면 **홀수형**이라 한다. $b^+$ 와 $b^-$ 가 모두 양이 아니면 **정부호**라 한다.

## 연결합

$Q\_{M\char35{}N}=Q_M\oplus Q_N$ 이다. 연결합이 두 다양체의 둘째 코호몰로지를 직합으로 주고 서로 다른 성분에서 온 류는 만나지 않는다.

# 성질

## 짝수형의 부호수

**정리(Rokhlin).** $M$ 이 닫힌 매끄러운 유향 4 차원 다양체이고 $Q_M$ 이 짝수형이면 $\sigma(M)$ 이 $16$ 으로 나뉜다.

증명의 요지. $Q_M$ 이 짝수형인 것은 $w_2(M)=0$, 곧 $M$ 이 [스핀 다양체](spin-structures.md)인 것과 같다. [Dirac 작용소](dirac-operator.md)의 지표가 $-\sigma(M)/8$ 이고, 4 차원 스피너 다발의 사원수 구조가 핵과 쌍대핵을 짝지어 지표를 짝수로 만든다. ∎

## 위상형의 결정

**정리(Freedman).** 닫힌 단연결 4 차원 위상다양체는 교차형식과 Kirby–Siebenmann 불변량으로 위상동형까지 분류된다. 단모듈러 대칭 형식마다 그것을 교차형식으로 갖는 다양체가 있다.

짝수형에서는 Kirby–Siebenmann 불변량이 Rokhlin 정리로 부호수에 묶이므로 다양체가 위상동형까지 하나다.

## 정부호형의 대각화

**정리(Donaldson).** 닫힌 단연결 매끄러운 4 차원 다양체의 교차형식이 정부호이면 그 형식은 정수 기저에서 항등행렬로 대각화된다.

증명은 [Yang–Mills 이론](yang-mills-theory.md)의 순간자 모듈라이 공간이 주는 코보디즘에서 나오며, 같은 모듈라이가 [Donaldson 불변량](donaldson-invariants.md)을 정의한다. 이 정리와 Freedman 정리를 합치면 정부호 짝수형 $E_8$ 을 교차형식으로 갖는 위상다양체에는 매끄러운 구조가 없다.

## 비정부호형의 분류

정부호가 아닌 단모듈러 대칭 형식은 계수, 부호수, 홀짝성으로 결정된다. 홀수형은 $\langle 1\rangle$ 과 $\langle-1\rangle$ 의 직합이고, 짝수형은 쌍곡형식과 $\pm E_8$ 의 직합이다. 정부호형의 개수는 계수가 커지면 급히 늘어나고, 계수 $16$ 에서 짝수형이 둘이다.

# 활용

- [Seiberg–Witten 이론](seiberg-witten-theory.md)이 교차형식이 같은 두 매끄러운 다양체를 가른다. Freedman 정리로 위상동형인 짝에서 불변량이 다르면 미분동형이 아니다.
- 차원 공식 $d(\mathfrak s)=(c_1(\mathfrak s)^2-2\chi-3\sigma)/4$ 가 부호수를 쓴다. [Euler 표수](euler-characteristic.md)와 부호수가 모듈라이 공간의 차원을 정한다.
- [이차형식](quadratic-forms.md)의 단모듈러 격자 이론이 가능한 교차형식의 목록을 준다. 짝수 정부호 격자의 계수가 $8$ 의 배수라는 사실이 $E_8$ 의 등장을 설명한다.

[^1]: Robert E. Gompf and András I. Stipsicz, *4-Manifolds and Kirby Calculus*, American Mathematical Society (1999), Ch. 1. 교차형식의 정의, 단모듈러 형식의 분류, Rokhlin 과 Freedman 과 Donaldson 의 정리가 이 장에 있다.

# 연관 문서

## 선수지식

- [이차형식](quadratic-forms.md)
- [Poincaré 쌍대성](poincare-duality.md)

## 더 알아보기

- [Donaldson 불변량](donaldson-invariants.md)

#algebraic_topology #topology #differential_geometry #linear_algebra
