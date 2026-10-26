# 최고무게 가군

# 개요

**최고무게 가군(highest-weight module)** 은 [Lie 대수](lie-algebras.md)의 가군 가운데 벡터 하나에서 출발해 무게를 내리는 작용만 되풀이하면 전체가 만들어지는 것이다. 대각합이 $0$ 인 $2\times2$ 행렬들의 Lie 대수 $\mathfrak{sl}\_2$ 에서 $H$ 의 고윳값이 $\lambda$ 인 벡터에 $F$ 를 거듭 작용시키면 고윳값이 $\lambda,\lambda-2,\lambda-4,\dots$ 인 벡터가 차례로 나온다. 이 사슬이 어디서 끊겨야 유한차원 표현이 되는지가 문제다. 최고무게 가군은 사슬을 끊지 않은 가장 큰 가군을 먼저 만들고, 그 몫으로 기약표현을 얻는다.

# 직관

[Lie 대수](lie-algebras.md)의 $\mathfrak{sl}\_2$ 절은 기저 $H,E,F$ 와 괄호 $[H,E]=2E$, $[H,F]=-2F$, $[E,F]=H$ 를 쓴다. 표현 하나에서 $Hv=\lambda v$ 이고 $Ev=0$ 인 벡터 $v$ 를 잡고 $v_k=F^kv$ 로 둔다. $F$ 는 고윳값을 $2$ 내리므로 $Hv_k=(\lambda-2k)v_k$ 다. $E$ 를 작용시키면 $[E,F]=H$ 로 $F$ 를 하나씩 왼쪽으로 넘기며 계산하고, $k$ 에 대한 귀납으로 다음이 나온다.

$$
Ev_k=k(\lambda-k+1)\thinspace v_{k-1}
$$

$v_0,v_1,v_2,\dots$ 의 일차결합들은 $H$, $E$, $F$ 를 작용시켜도 그 안에 남는다. 어느 $v_k$ 도 $0$ 이 되라는 조건이 없으면 $v_k$ 가 모두 일차독립이고, 고윳값 $\lambda,\lambda-2,\lambda-4,\dots$ 가 하나씩 있는 무한차원 표현이 된다. $\lambda$ 가 어떤 복소수이든 이 표현은 존재한다.

유한차원이려면 어떤 $m\ge1$ 에서 $v_m=0$ 이고 $v_{m-1}\neq0$ 이어야 한다. 그러면 $0=Ev_m=m(\lambda-m+1)v_{m-1}$ 이므로 $\lambda=m-1$ 이다. 곧 $\lambda$ 는 음이 아닌 정수 $n$ 이고 사슬은 $v_0,\dots,v_n$ 의 $n+1$ 개다.

거꾸로 $\lambda=n$ 이면 위 식에서 $Ev_{n+1}=(n+1)(n-n)v_n=0$ 이다. $v_{n+1}$ 은 $v$ 와 같은 꼴, 곧 $E$ 가 죽이는 고유벡터이고 고윳값은 $-n-2$ 다. $v_{n+1},v_{n+2},\dots$ 의 일차결합들이 부분표현을 이루고, 이것으로 나눈 몫은 기저가 $v_0,\dots,v_n$ 인 $n+1$ 차원 표현이다. $\lambda=0$ 이면 몫은 $1$ 차원 자명표현이다. 무한차원 표현을 먼저 만들고 그 몫으로 유한차원 표현을 얻는 이 계산을 일반 반단순 Lie 대수에서 $H$ 자리에 Cartan 부분대수를, $E$ 와 $F$ 자리에 양근과 음근의 근벡터를 넣어 되풀이한 것이 최고무게 가군의 이론이다.

# 정의

## 무게와 최고무게 벡터

$\mathfrak g$ 를 복소 반단순 Lie 대수, $\mathfrak h$ 를 Cartan 부분대수, $\Phi^+$ 를 [근계](root-systems.md) $\Phi$ 의 양근, $\Delta=\lbrace\alpha_1,\dots,\alpha_r\rbrace$ 을 단순근이라 한다. 다음 두 부분대수를 둔다.

$$
\mathfrak n^{+}=\bigoplus_{\alpha\in\Phi^+}\mathfrak g_\alpha,\qquad
\mathfrak n^{-}=\bigoplus_{\alpha\in\Phi^+}\mathfrak g_{-\alpha},\qquad
\mathfrak g=\mathfrak n^{-}\oplus\mathfrak h\oplus\mathfrak n^{+}
$$

$\mathfrak b=\mathfrak h\oplus\mathfrak n^{+}$ 을 **Borel 부분대수(Borel subalgebra)** 라 한다. $\mathfrak g$ [가군](modules.md) $V$ 와 $\mu\in\mathfrak h^\ast$ 에 대해 $V_\mu=\lbrace v\in V:hv=\mu(h)v\ \ \forall h\in\mathfrak h\rbrace$ 가 **무게공간(weight space)** 이고, $V_\mu\neq0$ 이면 $\mu$ 가 **무게(weight)** 다. $\mathfrak g_\alpha V_\mu\subset V_{\mu+\alpha}$ 이다.

무게에는 다음 [부분순서](partial-orders.md)를 준다. $\mu\le\lambda$ 는 $\lambda-\mu$ 가 단순근의 음이 아닌 정수결합이라는 뜻이다.

$0$ 이 아닌 $v\in V_\lambda$ 가 $\mathfrak n^{+}v=0$ 을 만족하면 $v$ 를 무게 $\lambda$ 의 **최고무게 벡터(highest-weight vector)** 라 한다.

## 보편포락대수

**보편포락대수(universal enveloping algebra)** $U(\mathfrak g)$ 는 $\mathfrak g$ 의 원소들로 생성되고 관계 $XY-YX=[X,Y]$ 만을 갖는 결합대수다. $\mathfrak g$ 가군과 $U(\mathfrak g)$ 가군은 같은 것이다. $U(\mathfrak n^{-})$, $U(\mathfrak b)$ 도 같은 방식으로 정의되고 $U(\mathfrak g)$ 의 부분대수다.

## 최고무게 가군

$\mathfrak g$ 가군 $V$ 가 무게 $\lambda$ 의 최고무게 벡터 $v$ 하나로 생성되면, 곧 $V=U(\mathfrak g)v$ 이면 $V$ 를 최고무게 $\lambda$ 의 **최고무게 가군** 이라 한다.

## Verma 가군

$\mathbb C_\lambda$ 를 $\mathfrak h$ 가 $\lambda$ 로, $\mathfrak n^{+}$ 이 $0$ 으로 작용하는 $1$ 차원 $\mathfrak b$ 가군이라 하자. **Verma 가군(Verma module)** 은 다음이다.

$$
M(\lambda)=U(\mathfrak g)\otimes_{U(\mathfrak b)}\mathbb C_\lambda
$$

$1\otimes1$ 이 무게 $\lambda$ 의 최고무게 벡터이고 $M(\lambda)$ 를 생성한다. 직관 절의 $v_0,v_1,v_2,\dots$ 로 이루어진 무한차원 표현이 $\mathfrak{sl}\_2$ 의 $M(\lambda)$ 다.

# 성질

## 무게 구조

**Poincaré–Birkhoff–Witt 정리(Poincaré–Birkhoff–Witt theorem).** $\mathfrak g$ 의 순서 있는 기저 $X_1,\dots,X_d$ 에 대해 단항식 $X_1^{a_1}\cdots X_d^{a_d}$ 들이 $U(\mathfrak g)$ 의 기저다.

음근마다 근벡터 $F_\beta\in\mathfrak g_{-\beta}$ 를 하나씩 잡는다. 기저를 $\mathfrak n^{-}$, $\mathfrak h$, $\mathfrak n^{+}$ 순으로 놓으면 $U(\mathfrak g)=U(\mathfrak n^{-})U(\mathfrak b)$ 이고, 최고무게 벡터 $v$ 에 대해 $U(\mathfrak b)v=\mathbb Cv$ 다. 그러므로 최고무게 가군 $V$ 는 $F_{\beta_1}\cdots F_{\beta_k}v$ 꼴의 벡터들로 생성되고, 이 벡터의 무게는 $\lambda-\beta_1-\cdots-\beta_k$ 다. 다음이 따라 나온다.

- $V=\bigoplus_{\mu\le\lambda}V_\mu$ 이다.
- $\dim V_\lambda=1$ 이다.
- $\lambda-\mu$ 를 양근의 합으로 쓰는 방법이 유한하므로 각 $V_\mu$ 는 유한차원이다.

## Verma 가군의 보편성

Poincaré–Birkhoff–Witt 정리로 $M(\lambda)$ 는 $U(\mathfrak n^{-})$ 위의 계수 $1$ 인 자유가군이다. $\mathcal P(\nu)$ 를 $\nu$ 를 양근들의 음이 아닌 정수결합으로 쓰는 방법의 수(**Kostant 분할 함수(Kostant partition function)**)라 하면 무게공간의 차원이 다음과 같다.

$$
\dim M(\lambda)\_{\lambda-\nu}=\mathcal P(\nu)
$$

최고무게 $\lambda$ 의 최고무게 가군 $V$ 와 그 생성원 $v$ 가 있으면 $1\otimes1\mapsto v$ 로 정해지는 전사 가군 사상 $M(\lambda)\to V$ 가 있다. 곧 최고무게 $\lambda$ 의 최고무게 가군은 모두 $M(\lambda)$ 의 몫이다.

## 유일한 단순 몫

$M(\lambda)$ 의 진부분가군 $N$ 은 무게공간의 합이므로 $N_\lambda\neq0$ 이면 생성원을 포함해 $N=M(\lambda)$ 가 된다. 따라서 진부분가군은 모두 $\bigoplus_{\mu\neq\lambda}M(\lambda)\_\mu$ 에 들어가고, 진부분가군 전부의 합 $N(\lambda)$ 도 진부분가군이다. $N(\lambda)$ 가 유일한 극대 부분가군이고 몫이 단순가군이다.

$$
L(\lambda)=M(\lambda)/N(\lambda)
$$

**정리.** $L(\lambda)\cong L(\mu)$ 이면 $\lambda=\mu$ 다. 최고무게 벡터를 하나라도 갖는 단순가군은 어떤 $L(\lambda)$ 와 동형이다.

최고무게가 무게 가운데 순서로 가장 큰 것이므로 동형사상이 그것을 보존한다. 단순가군에서는 최고무게 벡터 하나가 전체를 생성하므로 그 가군은 최고무게 가군이고 $M(\lambda)$ 의 단순 몫이다.

## 유한차원 판정

단순근 $\alpha_i$ 마다 $E_i\in\mathfrak g_{\alpha_i}$, $F_i\in\mathfrak g_{-\alpha_i}$, $H_i=[E_i,F_i]$ 가 $\mathfrak{sl}\_2$ 의 관계를 만족하게 잡을 수 있다. $\lambda(H_i)=\langle\lambda,\alpha_i^\vee\rangle$ 이다.

**정리.** $L(\lambda)$ 가 유한차원일 필요충분조건은 모든 $i$ 에 대해 $\langle\lambda,\alpha_i^\vee\rangle\in\mathbb Z_{\ge0}$ 인 것이다.[^1]

필요조건은 $L(\lambda)$ 를 $\lbrace E_i,F_i,H_i\rbrace$ 가 생성하는 $\mathfrak{sl}\_2$ 의 표현으로 보면 나온다. 최고무게 벡터 $v$ 는 이 $\mathfrak{sl}\_2$ 에 대해서도 $E_iv=0$ 이고 $H_iv=\langle\lambda,\alpha_i^\vee\rangle v$ 이므로, 직관 절의 계산대로 이 값이 음이 아닌 정수여야 한다.

충분조건의 요지는 셋이다. $n_i=\langle\lambda,\alpha_i^\vee\rangle$ 이면 직관 절의 계산으로 $E_iF_i^{n_i+1}v=0$ 이다. $j\neq i$ 이면 $\alpha_j-\alpha_i$ 가 근이 아니므로 $[E_j,F_i]=0$ 이고 $E_jF_i^{n_i+1}v=0$ 이다. 그래서 $F_i^{n_i+1}v$ 는 최고무게 벡터가 되어 진부분가군을 생성하고 $L(\lambda)$ 에서 $0$ 이다. 이로부터 $E_i,F_i$ 가 $L(\lambda)$ 위에서 멱영으로 작용하고, 무게의 집합이 단순 반사들, 따라서 Weyl 군 $W$ 에 대해 불변이다. $\lambda$ 이하의 지배적 무게는 유한 개이고 모든 $W$ 궤도가 지배적 무게를 하나 포함하므로 무게가 유한 개이고, 무게공간이 유한차원이므로 $L(\lambda)$ 가 유한차원이다.

이 정리와 유한차원 표현의 완전가약성(Weyl 의 정리, Weyl's theorem on complete reducibility)을 합하면 유한차원 기약표현이 지배적 정수 무게와 일대일 대응한다는 [Weyl 지표 공식](weyl-character-formula.md)의 분류 정리가 된다.

## sl₂ 의 Verma 가군

$\mathfrak{sl}\_2$ 에서 $\lambda\notin\mathbb Z_{\ge0}$ 이면 직관 절의 식의 계수 $k(\lambda-k+1)$ 이 $k\ge1$ 에서 $0$ 이 되지 않으므로 $v_0$ 이외의 최고무게 벡터가 없고 $M(\lambda)$ 는 단순하다. $\lambda=n\in\mathbb Z_{\ge0}$ 이면 $N(n)$ 은 $v_{n+1}$ 이 생성하는 부분가군이고 $M(-n-2)$ 와 동형이다. 다음 짧은 완전열이 있다.

$$
0\to M(-n-2)\to M(n)\to L(n)\to0
$$

# 활용

- [Weyl 지표 공식](weyl-character-formula.md)은 $L(\lambda)$ 의 무게공간 차원을 준다. 대수적 증명은 $\mathrm{ch}\thinspace M(\lambda)=e^\lambda/\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$ 에서 출발해 $L(\lambda)$ 의 지표를 Verma 가군 지표의 교대합으로 쓴다.
- [범주 O](category-o.md)는 $\lambda$ 가 지배적 정수 무게가 아닌 경우까지 포함해 $M(\lambda)$ 와 $L(\lambda)$ 를 대상으로 하는 범주다. 조성 중복도 $[M(\mu):L(\lambda)]$ 를 [Kazhdan–Lusztig 다항식](kazhdan-lusztig.md)이 계산한다.
- [아핀 Lie 대수](affine-lie-algebras.md)와 [Virasoro 대수](virasoro-algebra.md)에서도 Cartan 부분대수와 양근을 같은 방식으로 정해 Verma 가군과 그 단순 몫을 정의한다. [정점작용소대수](vertex-operator-algebras.md)와 등각장론의 표현이 이 가군들로 기술된다.
- 양자역학의 각운동량에서 스핀 $j$ 의 상태 공간은 $\mathfrak{sl}\_2$ 의 $L(2j)$ 이고, 최고무게 벡터가 자기양자수 $m=j$ 인 상태다.

[^1]: J. Humphreys, *Introduction to Lie Algebras and Representation Theory* (1972), 17 절(보편포락대수와 Poincaré–Birkhoff–Witt 정리), 20 절(최고무게 벡터와 Verma 가군), 21 절(유한차원 판정).

# 연관 문서

## 선수지식

- [근계](root-systems.md)

## 더 알아보기

- [Weyl 지표 공식](weyl-character-formula.md)
- [범주 O](category-o.md)

#algebra #group_theory #linear_algebra
