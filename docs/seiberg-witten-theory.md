# Seiberg–Witten 이론

# 개요

Seiberg–Witten 이론은 콤팩트 4 차원 다양체의 $\mathrm{spin}^c$ 구조마다 [Dirac 작용소](dirac-operator.md)와 접속의 곡률을 묶은 1 계 방정식을 세우고, 그 해의 공간을 게이지군으로 나눈 모듈라이 공간을 세어 얻는 불변량이다.

불변량은 계량과 섭동의 선택에 의존하지 않고 매끄러운 구조에만 의존한다. 위상동형이지만 미분동형이 아닌 4 차원 다양체를 이 불변량으로 가른다.

# 직관

콤팩트 단연결 4 차원 위상다양체는 교차형식으로 분류된다. 같은 교차형식을 가진 매끄러운 다양체가 서로 미분동형인지는 위상 불변량으로 답할 수 없으므로, 계량에 의존하는 방정식의 해를 세고 그 수가 계량과 무관함을 보이는 길을 택한다. 반자기쌍대 Yang–Mills 방정식으로 그 수를 세는 것이 먼저 나왔지만, 게이지군이 비가환이어서 모듈라이 공간이 콤팩트하지 않고 특이점을 가진다.

게이지군을 $\mathrm{U}(1)$ 로 바꾸고 스피너 장을 함께 넣으면 Weitzenböck 공식이 해에 크기 제한을 준다. 두 방정식을 그 공식에 대입하면 스피너의 크기가 스칼라 곡률의 최솟값으로 유계가 되고, 접속의 곡률도 따라 유계가 된다. 그래서 모듈라이 공간이 콤팩트하고 섭동으로 매끄럽게 만들 수 있다. 스칼라 곡률이 양인 계량이 있으면 같은 추정이 해를 자명한 것만 남긴다.

# 정의

## $\mathrm{spin}^c$ 구조

$\mathrm{Spin}^c(n)$ 은 $\mathbb Z/2$ 를 대각으로 나눈 곱이다.

$$
\mathrm{Spin}^c(n)=\bigl(\mathrm{Spin}(n)\times\mathrm{U}(1)\bigr)/\lbrace\pm(1,1)\rbrace
$$

방향 지어진 Riemann 다양체의 $\mathrm{spin}^c$ 구조는 틀다발을 이 군의 주다발로 들어 올린 것이다. [스핀 구조](spin-structures.md)의 장애가 $w_2$ 의 소멸인 것과 달리, $\mathrm{spin}^c$ 구조는 $w_2$ 가 어떤 정수 류의 $\mathbb Z/2$ 환원일 때 존재하고 콤팩트 방향 4 차원 다양체에서는 항상 존재한다.[^1]

$\mathrm{spin}^c$ 구조 $\mathfrak s$ 는 스피너 다발 $W=W^+\oplus W^-$ 와 **결정선다발** $L$ 을 준다. $c_1(\mathfrak s)=c_1(L)$ 로 적는다.

## Seiberg–Witten 방정식

$A$ 를 $L$ 의 $\mathrm{U}(1)$ [접속](connection.md), $\psi$ 를 $W^+$ 의 단면이라 한다. **Seiberg–Witten 방정식**은 다음 둘이다.

$$
D_A\psi=0,\qquad F_A^+=q(\psi)
$$

$D_A$ 는 $A$ 로 꼬은 Dirac 작용소이고, $F_A^+$ 는 곡률 2 형식의 자기쌍대 성분이며, $q(\psi)=\psi\otimes\psi^\ast-\frac{\vert\psi\vert^2}{2}\thinspace\mathrm{id}$ 를 Clifford 곱으로 허수 자기쌍대 2 형식과 동일시한 것이다.

## 모듈라이 공간과 불변량

게이지군 $\mathcal G$ 는 $M$ 에서 $\mathrm{U}(1)$ 로 가는 매끄러운 사상의 군이고 $u\cdot(A,\psi)=(A-2\thinspace u^{-1}du,\thinspace u\psi)$ 로 작용한다. 해집합을 이 작용으로 나눈 것이 **모듈라이 공간** $\mathcal M(\mathfrak s)$ 다.

자기쌍대 2 형식 $\eta$ 로 둘째 방정식을 $F_A^+=q(\psi)+\eta$ 로 섭동하면, 일반적 $\eta$ 에서 $\mathcal M(\mathfrak s)$ 가 다음 차원의 콤팩트 매끄러운 다양체다.

$$
d(\mathfrak s)=\frac{c_1(\mathfrak s)^2-2\chi(M)-3\sigma(M)}{4}
$$

여기서 $\chi$ 는 [Euler 표수](euler-characteristic.md)이고 $\sigma$ 는 부호수다. $d(\mathfrak s)=0$ 이면 $\mathcal M(\mathfrak s)$ 는 유한집합이고, 점마다 부호를 붙여 센 정수를 **Seiberg–Witten 불변량** $\mathrm{SW}(\mathfrak s)$ 라 한다.

# 성질

## 선험적 추정

**정리.** 해 $(A,\psi)$ 는 $\max_M\vert\psi\vert^2\le\max_M(-\kappa)$ 를 만족한다. 여기서 $\kappa$ 는 스칼라 곡률이다.

증명의 요지. Weitzenböck 공식과 첫 방정식에서 $0=\nabla_A^\ast\nabla_A\psi+\frac{\kappa}{4}\psi+\frac12 F_A^+\cdot\psi$ 다. 둘째 방정식으로 $F_A^+$ 를 $q(\psi)$ 로 바꾸고 $\psi$ 와 내적하면 $\frac12\Delta\vert\psi\vert^2+\vert\nabla_A\psi\vert^2+\frac{\kappa}{4}\vert\psi\vert^2+\frac14\vert\psi\vert^4=0$ 이 된다. $\vert\psi\vert^2$ 의 최대점에서 Laplace 항이 음이 아니므로 $\vert\psi\vert^2\le-\kappa$ 다. ∎

## 소멸 정리

**정리.** $M$ 이 스칼라 곡률이 양인 계량을 가지면 모든 $\mathrm{spin}^c$ 구조에서 $\mathrm{SW}(\mathfrak s)=0$ 이다.

증명의 요지. 그 계량에서 선험적 추정이 $\psi=0$ 을 주고, 둘째 방정식이 $F_A^+=0$ 이 된다. 그러면 해가 반자기쌍대 접속뿐이고 섭동 $\eta$ 를 작게 두면 해가 없다. ∎

## 유한성

**정리.** $\mathrm{SW}(\mathfrak s)\ne 0$ 인 $\mathrm{spin}^c$ 구조는 유한개다.

증명의 요지. 선험적 추정이 $F_A^+$ 를 유계로 만들고, 반자기쌍대 성분은 $c_1(\mathfrak s)$ 의 조화 대표원으로 정해진다. 따라서 $c_1(\mathfrak s)^2$ 가 아래로 유계이고, 차원 공식이 $c_1(\mathfrak s)^2$ 를 고정하므로 가능한 류가 유한하다. ∎

## 심플렉틱 다양체

**정리(Taubes).** $b^+\gt 1$ 인 콤팩트 [심플렉틱 4 차원 다양체](symplectic-manifolds.md)의 표준 $\mathrm{spin}^c$ 구조에서 $\mathrm{SW}=\pm 1$ 이다. 여기서 $b^+$ 는 교차형식의 양의 고윳값 개수다.

이 정리와 소멸 정리를 합치면 $b^+\gt 1$ 인 심플렉틱 4 차원 다양체에는 스칼라 곡률이 양인 계량이 없다.

# 활용

- 교차형식이 같은 두 매끄러운 4 차원 다양체를 가른다. 한쪽이 $b^+\gt 1$ 인 심플렉틱 다양체이고 다른 쪽이 스칼라 곡률이 양인 계량을 가지면, Taubes 정리와 소멸 정리가 불변량을 $\pm 1$ 과 $0$ 으로 갈라 두 다양체가 미분동형이 아님을 준다.
- 양의 스칼라 곡률 계량의 장애를 준다. Lichnerowicz 소멸 정리가 $\hat A$ 종수로 주는 장애보다 강해, $\hat A=0$ 인 심플렉틱 다양체에서도 장애를 잡는다.
- 매끄럽게 매장된 곡면의 종수 하한을 준다. 복소곡면의 대수곡선이 자기 호몰로지류에서 종수를 최소로 한다는 Thom 추측이 이 하한에서 나온다.
- 3 차원 다양체로 내려가면 [Heegaard Floer 호몰로지](heegaard-floer-homology.md)와 같은 정보를 담는 Floer 이론이 된다. 4 차원 코보디즘이 두 쪽에서 같은 준동형을 유도한다.

[^1]: John W. Morgan, *The Seiberg–Witten Equations and Applications to the Topology of Smooth Four-Manifolds*, Princeton University Press (1996), Ch. 2–6. $\mathrm{spin}^c$ 구조의 존재, 방정식, 선험적 추정과 모듈라이 공간의 구성이 이 장들에 있다.

# 연관 문서

## 선수지식

- [스핀 구조](spin-structures.md)
- [Dirac 작용소](dirac-operator.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #topology #algebraic_topology
