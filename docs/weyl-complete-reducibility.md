# Weyl 완전가약성 정리

# 개요

**Weyl 완전가약성 정리(Weyl's theorem on complete reducibility)** 는 복소 반단순 [Lie 대수](lie-algebras.md)의 유한차원 표현이 기약표현들의 직합으로 쪼개진다는 정리다. 위삼각 $2\times2$ [행렬](matrices.md)들이 $\mathbb C^2$ 에 작용하면 첫째 좌표축은 모든 행렬이 보존하지만, 그와 겹치지 않으면서 보존되는 직선은 없다. 이런 표현은 작은 조각으로 쪼갠 뒤 조각들을 다시 맞추는 방법이 여러 가지라 조각만으로 분류할 수 없다. 이 정리는 반단순 Lie 대수에서는 이런 일이 생기지 않음을 보여, 유한차원 표현의 분류를 기약표현의 분류로 줄인다.

# 직관

위삼각 행렬 $E=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 은 $e_1$ 을 $0$ 으로, $e_2$ 를 $e_1$ 로 보낸다. $e_1$ 의 직선은 보존되고, 다른 직선이 보존되려면 그 직선의 벡터 $v=ae_1+be_2$ ($b\neq0$) 에 대해 $Ev=be_1$ 이 $v$ 의 상수배여야 한다. $be_1$ 은 $v$ 의 상수배가 아니므로 보존되는 보충 직선이 없다.

[Lie 대수](lie-algebras.md)의 $\mathfrak{sl}\_2$ 에서 같은 상황, 곧 표현 $V$ 와 보존되는 부분공간 $W$ 가 있고 $W$ 가 $n+1$ 차원 기약표현, 몫 $V/W$ 가 $m+1$ 차원 기약표현인 경우를 본다. [보편포락대수](universal-enveloping-algebra.md)의 Casimir 원소 $C=EF+FE+\frac12H^2$ 는 $\mathfrak{sl}\_2$ 의 작용과 교환하고, $n+1$ 차원 기약표현 위에서 상수 $\frac12n(n+2)$ 배다. 그러므로 $C$ 는 $W$ 위에서 $\frac12n(n+2)$ 배, $V/W$ 위에서 $\frac12m(m+2)$ 배로 작용한다.

$m\neq n$ 이면 두 값이 다르다. $C-\frac12m(m+2)$ 는 $W$ 위에서 가역이고 $V/W$ 위에서 $0$ 이므로, 그 핵은 $W$ 와 $0$ 만 공유하고 차원이 $m+1$ 이다. $C$ 가 작용과 교환하므로 이 핵은 보존되는 부분공간이고, $V=W\oplus\ker\big(C-\frac12m(m+2)\big)$ 이다. 위삼각 행렬들의 Lie 대수는 불변 쌍선형형식이 퇴화해 이런 원소를 만들 수 없다.

# 정의

## 완전가약

[가군](modules.md)이나 표현 $V$ 가 **완전가약(completely reducible)** 이라는 것은 다음 동치인 조건 가운데 하나를 만족하는 것이다.

- $V$ 가 기약 부분표현들의 직합이다.
- 보존되는 부분공간 $W\subset V$ 마다 보존되는 보충공간 $W'$ 이 있어 $V=W\oplus W'$ 이다.

## 정리

**정리.** $\mathfrak g$ 가 복소 반단순 Lie 대수이면 $\mathfrak g$ 의 유한차원 표현은 모두 완전가약이다.[^1]

# 성질

## 표현의 Casimir 작용소

$\varphi:\mathfrak g\to\mathfrak{gl}(V)$ 가 충실한 표현이면 $\beta(X,Y)=\mathrm{tr}(\varphi(X)\varphi(Y))$ 는 $\mathfrak g$ 위의 비퇴화 불변 대칭 쌍선형형식이다. 기저 $X_i$ 와 $\beta$ 에 대한 쌍대기저 $X^i$ 로 다음을 둔다.

$$
c_\varphi=\sum_{i=1}^{\dim\mathfrak g}\varphi(X_i)\varphi(X^i)
$$

$c_\varphi$ 는 모든 $\varphi(X)$ 와 교환하고 $\mathrm{tr}\thinspace c_\varphi=\dim\mathfrak g$ 다. $V$ 가 기약이면 Schur 보조정리(Schur's lemma)로 $c_\varphi$ 는 상수 $\dim\mathfrak g/\dim V$ 배이고, 이 값은 $0$ 이 아니다. 충실하지 않은 표현은 핵의 보충 아이디얼에 같은 구성을 쓴다.

## 증명의 요지

1. 몫이 $1$ 차원 자명표현인 경우. $W\subset V$ 가 기약이고 $\mathfrak g$ 가 $V/W$ 에 $0$ 으로 작용하면, $c_\varphi$ 는 $\varphi(X)$ 들의 곱의 합이므로 $V$ 를 $W$ 안으로 보내고 $W$ 위에서는 $0$ 이 아닌 상수배다. 따라서 $\ker c_\varphi$ 가 $1$ 차원 보존 보충공간이다.
2. 몫이 $1$ 차원 자명표현이고 $W$ 가 기약이 아닌 경우는 $\dim W$ 에 대한 귀납으로 1 로 줄인다.
3. 일반의 경우. $W\subset V$ 에 대해 $\mathrm{Hom}(V,W)$ 의 부분공간 $\mathcal V=\lbrace f:f\vert_W\text{ 가 상수배}\rbrace$ 와 $\mathcal W=\lbrace f:f\vert_W=0\rbrace$ 을 잡는다. 둘 다 $\mathfrak g$ 의 작용 $(X\cdot f)(v)=Xf(v)-f(Xv)$ 로 보존되고 $\mathcal V/\mathcal W$ 는 $1$ 차원 자명표현이다. 2 로 $\mathcal W$ 의 보존 보충공간이 생기고, 그 생성원 $f$ 를 $f\vert_W=\mathrm{id}$ 로 정규화하면 $f$ 는 $\mathfrak g$ 의 작용과 교환하는 사영이다. $\ker f$ 가 $W$ 의 보존 보충공간이다.

## Whitehead 첫째 보조정리

**Whitehead 첫째 보조정리(Whitehead's first lemma).** 반단순 $\mathfrak g$ 의 유한차원 표현 $V$ 에 대해 $\mathfrak g$ 에서 $V$ 로 가는 선형사상 $\delta$ 가 $\delta([X,Y])=X\delta(Y)-Y\delta(X)$ 를 만족하면 $\delta(X)=Xv$ 인 $v\in V$ 가 있다.

표현의 짧은 완전열 $0\to W\to V\to U\to0$ 에서 선형 보충공간 둘의 차이는 $\mathrm{Hom}(U,W)$ 에 값을 갖는 이런 $\delta$ 를 준다. 보조정리를 $\mathrm{Hom}(U,W)$ 에 쓰면 보존되는 보충공간이 나오므로, 이 보조정리는 완전가약성과 동치다. [Lie 대수 코호몰로지](lie-algebra-cohomology.md)로 쓰면 보조정리는 $H^1(\mathfrak g,V)=0$ 이다.

## 성립하지 않는 경우

- 반단순이 아니면 성립하지 않는다. 개요의 위삼각 행렬이 예다.
- 무한차원이면 성립하지 않는다. [최고무게 가군](highest-weight-modules.md)의 Verma 가군 $M(n)$ 은 부분가군 $M(-n-2)$ 를 갖지만 보존 보충공간이 없다.
- 표수 $p\gt0$ 인 체 위에서는 일반적으로 성립하지 않는다.

## 콤팩트군의 증명

$\mathfrak g$ 의 콤팩트 실형식을 Lie 대수로 갖는 단일연결 콤팩트 [Lie 군](lie-groups.md) $K$ 를 잡는다. $\mathfrak g$ 의 유한차원 표현은 $K$ 의 표현으로 올라가고, [Haar 측도](haar-measure.md)로 임의의 내적을 평균내면 $K$ 불변 내적이 생긴다. 보존되는 부분공간의 직교여공간이 보존되는 보충공간이다. 이 논법을 Weyl 의 유니터리 트릭(unitarian trick)이라 한다.

# 활용

- [Weyl 지표 공식](weyl-character-formula.md)의 분류 정리는 유한차원 기약표현을 지배적 정수 무게로 색인한다. 이 정리로 모든 유한차원 표현이 그 기약표현들의 직합이 되어, 지표가 표현을 동형 차이까지 정한다.
- [최고무게 가군](highest-weight-modules.md)의 유한차원 판정 정리와 합해 유한차원 표현의 분류가 끝난다. [범주 O](category-o.md)처럼 무한차원 가군을 다루는 범주에서는 이 정리가 성립하지 않아 조성 중복도가 문제가 된다.
- 둘째 Whitehead 보조정리(Whitehead's second lemma)의 증명에도 같은 Casimir 작용소를 쓰고, 그 보조정리에서 Lie 대수의 [Levi 분해](levi-decomposition.md)가 유도된다.

[^1]: J. Humphreys, *Introduction to Lie Algebras and Representation Theory* (1972), 6 절(Casimir 작용소, Weyl 정리, Whitehead 보조정리).

# 연관 문서

## 선수지식

- [보편포락대수](universal-enveloping-algebra.md)

## 더 알아보기

- [Weyl 지표 공식](weyl-character-formula.md)

#algebra #group_theory #linear_algebra #theorem
