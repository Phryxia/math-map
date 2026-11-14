# 위상 K 이론

# 개요

**위상 K 이론(topological K-theory)** 은 공간 위의 벡터다발을 직합으로 더하고 형식적으로 빼서 만든 군으로 공간과 다발을 구별하는 방법이다. 원 위에는 띠를 그대로 붙인 원기둥과 한 번 비틀어 붙인 Möbius 띠라는 두 선다발이 있는데, Möbius 띠 두 장을 직합하면 비틀림이 풀려 원기둥 두 장의 직합과 같아진다. K 이론은 이런 계산을 [Grothendieck 군](grothendieck-group.md) 안의 등식으로 적고, Möbius 띠와 원기둥의 차가 두 번 더하면 $0$ 이 되는 원소임을 군의 구조로 보인다.

# 직관

원 위의 실 선다발은 구간 $\lbrack 0,1\rbrack$ 위의 띠 $\lbrack 0,1\rbrack\times\mathbb R$ 의 두 끝을 붙여 만든다. 끝 $0$ 의 올 $v$ 를 끝 $1$ 의 올 $v$ 에 붙이면 원기둥 $\varepsilon$ 이고, $-v$ 에 붙이면 Möbius 띠 $M$ 이다. Möbius 띠에서는 $0$ 이 아닌 단면이 한 바퀴 돌면 부호가 바뀌어야 하므로 어디서나 $0$ 이 아닌 단면이 없고, 그래서 $M$ 은 $\varepsilon$ 과 동형이 아니다.

올이 $\mathbb R^2$ 인 다발도 같은 방식으로 만든다. 끝을 붙이는 데 $2\times 2$ 직교행렬을 쓰고, 행렬식이 같은 두 행렬은 직교행렬 안에서 연속으로 이어지므로 같은 다발을 준다. $M\oplus M$ 은 행렬 $-I$ 로 붙인 것이고, $-I$ 는 각 $\pi$ 의 회전이라 행렬식이 $1$ 이다. 따라서 $M\oplus M$ 은 항등행렬로 붙인 $\varepsilon\oplus\varepsilon$ 과 동형이다.

이 등식을 Grothendieck 군에서 쓰면 $2\lbrack M\rbrack=2\lbrack\varepsilon\rbrack$ 이다. $x=\lbrack M\rbrack-\lbrack\varepsilon\rbrack$ 으로 두면 $2x=0$ 이고, $M\oplus\varepsilon^k$ 는 행렬식이 $-1$ 인 행렬로 붙인 것이라 어느 $k$ 에서도 $\varepsilon^{k+1}$ 과 동형이 아니므로 $x\ne 0$ 이다. 원 위의 다발을 더하고 빼는 계산에서 위수 $2$ 인 원소가 나온다.

# 정의

$X$ 를 콤팩트 Hausdorff 공간이라 한다. $X$ 위의 복소 [벡터다발](vector-bundles.md)의 동형류 전체는 직합 $\oplus$ 로 가환 모노이드이고, 그 Grothendieck 군을 $K(X)$ 로 쓴다. 실 벡터다발로 같은 구성을 하면 $KO(X)$ 다. 직관 절의 계산은 $KO(S^1)$ 안의 계산이다.

$X$ 가 연결이면 다발의 올의 차원이 $K(X)\to\mathbb Z$ 인 준동형을 주고, 그 핵을 **축약 K 군(reduced K-group)** $\widetilde K(X)$ 라 한다. $K(X)=\mathbb Z\oplus\widetilde K(X)$ 다. 직관 절의 $x$ 는 차원이 $1-1=0$ 이므로 $\widetilde{KO}(S^1)$ 의 원소이고, $\widetilde{KO}(S^1)=\mathbb Z/2$ 를 $x$ 가 생성한다.

텐서곱 $\otimes$ 은 직합에 대해 분배적이므로 $K(X)$ 에 곱을 주어 가환환으로 만든다. 연속사상 $f:X\to Y$ 는 다발의 당김으로 환 준동형 $f^\ast:K(Y)\to K(X)$ 를 준다.

# 성질

## 원소의 꼴

$X$ 가 콤팩트이면 모든 다발 $E$ 에 대해 $E\oplus E'$ 가 자명한 다발 $\varepsilon^N$ 이 되는 다발 $E'$ 이 있다.[^1] 따라서 $K(X)$ 의 원소는 모두 $\lbrack E\rbrack-\lbrack\varepsilon^N\rbrack$ 꼴이고, $\lbrack E\rbrack=\lbrack F\rbrack$ 인 것은 어떤 $k$ 에서 $E\oplus\varepsilon^k\cong F\oplus\varepsilon^k$ 인 것과 동치다.

증명의 요지. $X$ 를 다발이 자명해지는 열린 집합 유한 개로 덮고, [단위분할](partitions-of-unity.md)로 각 국소 자명화를 이어 붙여 $E$ 를 $X\times\mathbb C^N$ 의 부분다발로 넣는다. 그 직교 여공간이 $E'$ 이다.

## 호모토피 불변성

호모토피인 두 사상 $f\simeq g:X\to Y$ 는 같은 준동형 $f^\ast=g^\ast$ 를 준다. 콤팩트 공간 위에서 다발을 호모토피를 따라 당기면 동형인 다발이 나오기 때문이다. K 군은 [분류공간](classifying-spaces.md)으로 다음과 같이 표현된다. 우변은 사상의 호모토피류 전체다.

$$
K(X)=\lbrack X,\thinspace\mathbb Z\times BU\rbrack
$$

## 구면의 K 군

[Bott 주기성](bott-periodicity.md)에 따라 $\widetilde K(S^{2n})=\mathbb Z$ 이고 $\widetilde K(S^{2n+1})=0$ 이다. $S^2=\mathbb CP^1$ 위의 표준 선다발을 $H$ 라 하면 $\widetilde K(S^2)$ 는 $\lbrack H\rbrack-1$ 이 생성하고, 환 $K(S^2)$ 에서 다음이 성립한다.

$$
(\lbrack H\rbrack-1)^2=0
$$

실 K 군은 주기 $8$ 이고, $\widetilde{KO}(S^1)=\mathbb Z/2$ 는 직관 절의 Möbius 띠의 계산이다.

## Swan 정리

$X$ 위의 복소 벡터다발 $E$ 의 연속 단면 전체 $\Gamma(E)$ 는 연속함수 환 $C(X)$ 위의 유한생성 [사영가군](projective-modules.md)이고, $E\mapsto\Gamma(E)$ 는 다발의 동형류와 유한생성 사영가군의 동형류 사이의 일대일 대응이다. 이것이 Swan 정리(Serre–Swan theorem)다.[^2] 따라서 $K(X)$ 는 환 $C(X)$ 의 대수적 $K_0$ 와 같다.

# 활용

- [Adams 연산](adams-operations.md)과 [Hopf 불변량](hopf-invariant.md). Adams 는 $K$ 위의 연산 $\psi^k$ 로 Hopf 불변량이 $1$ 인 사상 $S^{2n-1}\to S^n$ 이 $n=2,4,8$ 에서만 있음을 보였고, 여기서 $\mathbb R^n$ 이 나눗셈 대수가 되는 차원이 $1,2,4,8$ 뿐이라는 것이 나온다.
- [지표 정리](index-theorem.md). 타원 미분 작용소의 기호는 여접다발 위의 K 군의 원소를 정하고, Atiyah–Singer 지표 정리는 해석적 지표를 이 원소에서 계산한다.
- [작용소 K 이론](operator-k-theory.md). Swan 정리로 $K(X)=K_0(C(X))$ 이므로, [C 스타 대수](c-star-algebras.md)의 K 군은 콤팩트 공간의 K 군을 가환이 아닌 대수로 넓힌 것이다.

[^1]: M. F. Atiyah, *K-Theory*, W. A. Benjamin, 1967, 1 장. 여다발의 존재, 호모토피 불변성, 구면의 K 군과 주기성 정리가 있다.

[^2]: R. G. Swan, "Vector bundles and projective modules", *Transactions of the American Mathematical Society* **105** (1962), 264–277.

# 연관 문서

## 선수지식

- [벡터다발](vector-bundles.md)
- [Grothendieck 군](grothendieck-group.md)

## 더 알아보기

- [Adams 연산](adams-operations.md)

#algebraic_topology #topology #algebra
