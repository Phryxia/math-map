# Lie 대수 코호몰로지

# 개요

**Lie 대수 코호몰로지(Lie algebra cohomology)** 는 [Lie 대수](lie-algebras.md) $\mathfrak g$ 와 그 표현 $V$ 에 벡터공간 $H^n(\mathfrak g,V)$ 를 대응시키는 불변량이다. 2 차원 공간 $\mathfrak g$ 에 괄호를 $0$ 으로 주고 $1$ 차원을 더해 새 괄호 $[X,Y]=Z$ 를 만들면 Heisenberg 대수(Heisenberg algebra)가 되는데, 같은 일을 $\mathfrak{sl}\_2$ 에 하면 새 괄호가 늘 좌표를 바꾸는 것만으로 없어진다. 어느 Lie 대수에서 이런 확장이 몇 가지 있는지가 문제다. Lie 대수 코호몰로지는 이 확장들을 차수 $2$ 의 벡터공간 하나로 세고, 같은 계산이 차수 $1$ 에서는 미분의 분류를 준다.

# 직관

$\mathfrak g$ 에 $1$ 차원을 더한 $\mathfrak e=\mathfrak g\oplus kZ$ 에서 $Z$ 는 모든 것과 괄호가 $0$ 이고, 나머지는 다음 괄호를 갖는다고 하자.

$$
[X,Y]\_{\mathfrak e}=[X,Y]+\omega(X,Y)\thinspace Z\qquad(X,Y\in\mathfrak g)
$$

$\omega$ 는 교대 쌍선형형식이어야 하고, Jacobi 항등식은 $\omega([X,Y],W)+\omega([Y,W],X)+\omega([W,X],Y)=0$ 이 된다. 좌표를 $X'=X+f(X)Z$ ($f$ 는 $\mathfrak g$ 위의 선형범함수) 로 바꾸면 $[X',Y']\_{\mathfrak e}=[X,Y]'+\big(\omega(X,Y)-f([X,Y])\big)Z$ 이므로 $\omega$ 가 $\omega-f([\cdot,\cdot])$ 로 바뀐다. $\omega=f([\cdot,\cdot])$ 꼴이면 좌표를 바꿔 새 괄호를 없앨 수 있다.

$\mathfrak g=k^2$ 이고 괄호가 $0$ 이면 Jacobi 조건은 모든 $\omega$ 에서 성립하고 $f([\cdot,\cdot])=0$ 이다. 교대형식은 $\omega(X_1,X_2)=c$ 하나로 정해지고 어느 것도 없앨 수 없다. $c\neq0$ 이면 $[X_1,X_2]=cZ$ 인 Heisenberg 대수다.

$\mathfrak g=\mathfrak{sl}\_2$ 에서는 $\omega$ 가 $\omega(E,F)$, $\omega(H,E)$, $\omega(H,F)$ 세 값으로 정해진다. $f(H)=\omega(E,F)$, $f(E)=\frac12\omega(H,E)$, $f(F)=-\frac12\omega(H,F)$ 로 두면 $[E,F]=H$, $[H,E]=2E$, $[H,F]=-2F$ 로부터 세 값 모두 $f([\cdot,\cdot])$ 와 같다. 그래서 $\mathfrak{sl}\_2$ 의 이런 확장은 모두 좌표를 바꾸면 직합이 된다. 조건을 만족하는 $\omega$ 의 공간을 없앨 수 있는 $\omega$ 의 공간으로 나눈 몫이 $H^2(\mathfrak g,k)$ 이고, 위 계산은 $k^2$ 에서 $1$ 차원, $\mathfrak{sl}\_2$ 에서 $0$ 이다.

# 정의

## Chevalley–Eilenberg 복합체

$\mathfrak g$ 를 체 $k$ 위의 Lie 대수, $V$ 를 그 표현이라 한다. $C^n(\mathfrak g,V)$ 를 $\mathfrak g^n$ 에서 $V$ 로 가는 교대 다중선형사상의 공간으로 두고 $d:C^n\to C^{n+1}$ 을 다음으로 정의한다. $\hat X_i$ 는 그 자리를 빼라는 뜻이다.

$$
\begin{aligned}
(d\omega)(X_0,\dots,X_n)={}&\sum_{i}(-1)^iX_i\thinspace\omega(X_0,\dots,\hat X_i,\dots,X_n)\cr
&+\sum_{i\lt j}(-1)^{i+j}\omega([X_i,X_j],X_0,\dots,\hat X_i,\dots,\hat X_j,\dots,X_n)
\end{aligned}
$$

$d\circ d=0$ 이고, 이 [사슬 복합체](chain-complexes.md)의 코호몰로지가 **Lie 대수 코호몰로지** $H^n(\mathfrak g,V)$ 다. 이 복합체를 **Chevalley–Eilenberg 복합체(Chevalley–Eilenberg complex)** 라 한다.

## Ext 로 쓴 정의

$\mathfrak g$ 의 표현은 [보편포락대수](universal-enveloping-algebra.md) $U(\mathfrak g)$ 의 가군이다. $k$ 에 $\mathfrak g$ 가 $0$ 으로 작용하게 하면 다음이 성립한다.

$$
H^n(\mathfrak g,V)\cong\mathrm{Ext}^n\_{U(\mathfrak g)}(k,V)
$$

Chevalley–Eilenberg 복합체는 $U(\mathfrak g)\otimes\Lambda^n\mathfrak g$ 로 된 $k$ 의 자유분해에 $\mathrm{Hom}\_{U(\mathfrak g)}(-,V)$ 를 적용한 것이다. [유도 함자](derived-functors.md)의 일반론이 긴 완전열과 분해에 대한 무관성을 준다.

# 성질

## 낮은 차수

- $H^0(\mathfrak g,V)=\lbrace v\in V:Xv=0\ \ \forall X\in\mathfrak g\rbrace$ 이다.
- $H^1(\mathfrak g,V)$ 는 $\delta([X,Y])=X\delta(Y)-Y\delta(X)$ 를 만족하는 선형사상 $\delta:\mathfrak g\to V$ 를 $\delta(X)=Xv$ 꼴로 나눈 몫이다. $V=\mathfrak g$ (딸림표현) 이면 미분(derivation)을 내부미분 $\mathrm{ad}\_Y$ 로 나눈 몫이다.
- $H^1(\mathfrak g,\mathrm{Hom}(U,W))$ 는 $W$ 를 부분표현, $U$ 를 몫으로 갖는 표현의 확장 $0\to W\to V\to U\to0$ 을 분류한다.
- $H^2(\mathfrak g,V)$ 는 $V$ 를 가환 아이디얼로 갖고 몫이 $\mathfrak g$ 인 Lie 대수의 확장을 분류한다. $V=k$ 이면 직관 절의 중심확장이다.

## Whitehead 보조정리

**Whitehead 보조정리(Whitehead's lemmas).** $\mathfrak g$ 가 표수 $0$ 인 체 위의 반단순 Lie 대수이고 $V$ 가 유한차원 표현이면 $H^1(\mathfrak g,V)=0$ 이고 $H^2(\mathfrak g,V)=0$ 이다.[^1]

$V$ 가 자명하지 않은 기약표현이면 Casimir 작용소가 $V$ 위에서 $0$ 이 아닌 상수로 작용하면서 코호몰로지 위에서는 $0$ 으로 작용하므로 모든 차수의 코호몰로지가 $0$ 이다. 남은 $V=k$ 의 경우, 차수 $1$ 은 $[\mathfrak g,\mathfrak g]=\mathfrak g$ 에서, 차수 $2$ 는 Killing 형식의 비퇴화성과 차수 $1$ 의 결과로 증명된다.

$H^1=0$ 은 [Weyl 완전가약성 정리](weyl-complete-reducibility.md)와 동치다. $H^1(\mathfrak g,\mathfrak g)=0$ 은 반단순 Lie 대수의 미분이 모두 내부미분이라는 것이다. $H^2=0$ 에서 **Levi 분해(Levi decomposition)** 가 유도된다. 유한차원 Lie 대수 $\mathfrak e$ 의 극대 가해 아이디얼을 $\mathfrak r$ 이라 하면 반단순 부분대수 $\mathfrak s$ 가 있어 $\mathfrak e=\mathfrak s\oplus\mathfrak r$ (벡터공간 직합) 이다.

## 차수 3

$\mathfrak g$ 가 복소 단순 Lie 대수이면 $H^3(\mathfrak g,\mathbb C)$ 는 $1$ 차원이고 다음 형식이 생성한다.

$$
\omega(X,Y,W)=\kappa([X,Y],W)
$$

$\kappa$ 는 Killing 형식이다.

## 콤팩트 Lie 군의 코호몰로지

$G$ 가 콤팩트 연결 [Lie 군](lie-groups.md)이고 $\mathfrak g$ 가 그 Lie 대수이면 다음이 성립한다.[^2]

$$
H^n\_{\mathrm{dR}}(G;\mathbb R)\cong H^n(\mathfrak g,\mathbb R)
$$

$G$ 위의 미분형식을 왼쪽 이동과 오른쪽 이동으로 평균내면 양쪽 불변 형식만 남고, 그 형식의 외미분이 Chevalley–Eilenberg 미분과 같다. $G=\mathrm{SU}(2)$ 이면 위 $3$ 형식이 $S^3$ 의 부피형식이다.

# 활용

- [Virasoro 대수](virasoro-algebra.md)는 원 위의 다항 벡터장들의 Lie 대수(Witt 대수)의 중심확장이다. Witt 대수의 $H^2$ 가 $1$ 차원이므로 중심확장이 하나뿐이고, 중심전하 $c$ 가 그 확장을 정한다. 같은 방식으로 [아핀 Lie 대수](affine-lie-algebras.md)는 고리 대수의 중심확장이다.
- [군 코호몰로지](group-cohomology.md)의 차수 $2$ 가 [군 확대](group-extensions.md)를 분류하는 것과 같은 방식으로, 차수 $2$ 의 Lie 대수 코호몰로지가 Lie 대수의 확장을 분류한다.
- [Weyl 완전가약성 정리](weyl-complete-reducibility.md)의 증명은 차수 $1$ 의 소멸을 직접 보이는 것과 같다.
- [Wess–Zumino–Witten 모형](wess-zumino-witten.md)의 Wess–Zumino 항은 차수 $3$ 의 생성원을 적분한 것이고, 그 계수인 레벨 $k$ 는 이 형식의 주기가 정수가 되도록 정수로 제한된다.

[^1]: C. Weibel, *An Introduction to Homological Algebra* (1994), 7 장(Chevalley–Eilenberg 복합체, Whitehead 보조정리, Levi 분해).
[^2]: C. Chevalley, S. Eilenberg, "Cohomology theory of Lie groups and Lie algebras", *Transactions of the American Mathematical Society* 63 (1948), 85–124.

# 연관 문서

## 선수지식

- [보편포락대수](universal-enveloping-algebra.md)
- [유도 함자](derived-functors.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #group_theory #algebraic_topology
