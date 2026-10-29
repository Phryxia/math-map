# C 스타 대수

# 개요

**C 스타 대수(C-star algebra)** 는 [행렬](matrices.md)처럼 더하고 곱하고 켤레전치를 취할 수 있고, 크기를 재는 노름이 곱셈과 맞물린 대수다. 대각행렬은 대각선의 값들, 곧 점 $n$ 개 위의 함수로 볼 수 있고, 서로 교환하는 행렬들은 한꺼번에 대각화되어 이런 함수로 바뀐다. 무한차원의 작용소에서 같은 일을 하려면 대각화 없이 대수의 연산만으로 점과 함숫값을 읽어 내야 한다. C 스타 대수는 등식 $\Vert a^\ast a\Vert=\Vert a\Vert^2$ 을 조건으로 두고, 이 조건을 만족하는 교환 대수가 어떤 공간 위의 [연속함수](continuity.md) 대수와 같음을 증명한다.

# 직관

C 스타 대수는 수반 연산을 갖춘 복소 Banach 대수 가운데 모든 원소가 $\Vert a^\ast a\Vert=\Vert a\Vert^2$ 를 만족하는 것이다. [Hilbert 공간](hilbert-spaces.md) 위의 [유계 작용소](bounded-operators.md) 대수와 그 노름 닫힌 부분대수가 전형이고, Gelfand–Naimark 정리는 그것이 유일한 꼴임을 말한다.

한 등식이 노름을 대수 구조에 묶어 놓는다. 그래서 노름을 따로 주지 않고도 대수에서 스펙트럼과 양의 원소가 정해진다.

유한차원에서 교환하는 작용소 묶음은 동시에 대각화된다. 대각행렬 전체가 이루는 대수는 $\lbrace 1,\dots,n\rbrace$ 위의 함수 전체와 같다. 합과 곱과 복소공액이 성분별 연산이므로 두 대수는 같은 것이고, 대각행렬을 보는 것과 $n$ 개의 점 위의 함수를 보는 것이 구별되지 않는다.

무한차원에서 이 대응이 어디까지 가는지 묻는다. 곱셈작용소 $(M\_fg)(x)=f(x)g(x)$ 들이 이루는 대수는 함수 대수 $C(X)$ 와 같고, 반대로 함수 대수가 주어지면 그것이 어느 공간 위의 함수인지 알아내야 한다. 대수만 손에 있고 공간은 없는 상황이다.

공간의 점을 대수에서 꺼낸다. 점 $x\in X$ 는 $f\mapsto f(x)$ 라는 사상을 주고, 이 사상은 곱을 곱으로 보내는 복소값 선형사상이다. 거꾸로 그런 사상을 전부 모으면 그것이 $X$ 와 일치한다. 가환인 경우에 이 복원이 정확히 성립하는 것이 Gelfand–Naimark 정리다.

교환하지 않는 대수에는 이 복원을 받을 공간이 없다. 점에 값을 주는 사상이 모자라고 남는 것은 대수뿐이다. 그 대수를 공간의 자리에 놓고 다루는 것이 C 스타 대수를 쓰는 방식이다.

# 정의

복소 Banach 대수 $\mathcal A$ 에 대합(involution) $a\mapsto a^\ast$ 가 있어 켤레선형이고 $(ab)^\ast=b^\ast a^\ast$, $a^{\ast\ast}=a$ 를 만족하고 다음이 성립하면 $\mathcal A$ 를 C 스타 대수라 한다.

$$
\Vert a^\ast a\Vert=\Vert a\Vert^2
$$

$a=a^\ast$ 인 원소를 자기수반이라 하고, $a=b^\ast b$ 꼴인 원소를 양의 원소라 한다.

## 상태

$\varphi:\mathcal A\to\mathbb C$ 가 선형이고 양의 원소를 음이 아닌 [실수](real-numbers.md)로 보내고 $\Vert\varphi\Vert=1$ 이면 $\varphi$ 를 **상태(state)** 라 한다. 상태 전체는 약 스타 위상에서 콤팩트 볼록집합이고, 그 극점을 순수 상태라 한다.

## 표현

$\pi:\mathcal A\to\mathcal B(H)$ 가 대합을 보존하는 대수 준동형이면 $\pi$ 를 $\mathcal A$ 의 표현이라 한다. 핵이 0 이면 충실하다고 한다.

# 성질

## 가환 Gelfand–Naimark 정리

단위원을 가진 가환 C 스타 대수 $\mathcal A$ 는 콤팩트 Hausdorff 공간 $X$ 위의 연속함수 대수 $C(X)$ 와 등거리 대합 동형이다[^1]. $X$ 는 $\mathcal A$ 의 지표, 곧 $\mathbb C$ 로 가는 0 이 아닌 준동형 전체에 약 스타 위상을 준 공간이다.

증명의 요지는 지표 공간이 $\mathcal A$ 의 극대 아이디얼과 일대일 대응하고, Gelfand 변환 $a\mapsto\hat a$ 가 $\Vert\hat a\Vert\_\infty=\Vert a\Vert$ 를 준다는 것이다. 마지막 등식에 C 스타 항등식이 쓰인다. 자기수반 원소에서는 노름이 스펙트럼 반지름과 같고, 일반 원소는 $a^\ast a$ 로 옮겨 처리한다.

## GNS 구성

GNS(Gelfand–Naimark–Segal) 구성은 상태 $\varphi$ 에서 표현을 만든다[^2]. $\langle a,b\rangle=\varphi(b^\ast a)$ 로 준반쌍선형형식을 정의하고 $\varphi(a^\ast a)=0$ 인 원소를 몫으로 없애고 완비화하면 Hilbert 공간 $H\_\varphi$ 가 나온다. 왼쪽 곱셈이 $H\_\varphi$ 위의 표현을 주고 몫 사상의 상 $\xi$ 가 $\varphi(a)=\langle\pi(a)\xi,\xi\rangle$ 을 만족하는 순환벡터다.

## 일반 Gelfand–Naimark 정리

모든 C 스타 대수는 어떤 Hilbert 공간 위 유계 작용소 대수의 노름 닫힌 대합 부분대수와 등거리 동형이다. 상태를 충분히 많이 모아 GNS 표현을 직합하면 충실한 표현이 된다. 추상적 조건으로 정의한 대수가 언제나 작용소로 실현된다.

## von Neumann 대수와의 차이

[von Neumann 대수](von-neumann-algebras.md)는 같은 부분대수를 노름 대신 약작용소 위상에서 닫은 것이다. 노름 닫힘은 사영을 거의 만들지 않아 $C(\lbrack 0,1\rbrack)$ 처럼 사영이 $0$ 과 $1$ 뿐인 C 스타 대수가 있고, 약작용소 닫힘은 사영이 완비격자를 이루게 한다. 위상이 다르므로 같은 작용소 묶음이 두 가지 크기의 대수를 생성한다.

# 활용

- 비가환 위상공간. 가환 경우의 대응을 거꾸로 읽어 C 스타 대수를 공간으로 취급한다. 공간의 벡터다발에 해당하는 것이 사영 가군이고, 그 분류가 [작용소 K 이론](operator-k-theory.md)이다.
- 양자역학의 관측가능량. 관측가능량을 C 스타 대수의 자기수반 원소로, 계의 상태를 그 위의 상태로 놓는다. GNS 구성이 상태마다 Hilbert 공간을 돌려주므로 공간을 먼저 고르지 않아도 된다.
- 군과 동역학의 불변량. 이산군의 군 C 스타 대수와 작용의 [교차곱](crossed-products.md)이 군과 작용의 성질을 대수의 성질로 옮긴다. 수정성(amenability)이 대수의 핵형(nuclearity)으로 나타난다.
- 연속함수 대수의 일반화가 필요한 자리. 특이점이 있는 공간이나 엽층의 횡단 구조처럼 점의 집합으로는 다루기 나쁜 대상을 대수로 바꾸어 다룬다.

[^1]: G. Murphy, *C\*-algebras and Operator Theory*, Academic Press (1990), 2장. Gelfand 변환과 지표 공간의 구성이 있다.
[^2]: G. Pedersen, *C\*-algebras and their Automorphism Groups*, Academic Press (1979), 3장. GNS 구성과 일반 Gelfand–Naimark 정리의 증명을 다룬다.

# 연관 문서

## 선수지식

- [유계 작용소](bounded-operators.md)

## 더 알아보기

- [작용소 K 이론](operator-k-theory.md)
- [교차곱](crossed-products.md)

#functional_analysis #analysis #topology #measure_theory
