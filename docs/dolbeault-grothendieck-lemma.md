# Dolbeault–Grothendieck 보조정리

# 개요

**Dolbeault–Grothendieck 보조정리(Dolbeault–Grothendieck lemma)** 는 복소 변수에서 $\partial u/\partial\bar z=f$ 꼴의 방정식이 국소적으로 언제나 풀린다는 정리다. 함수가 [정칙함수](holomorphic-functions.md)인지는 $\partial u/\partial\bar z=0$ 인지로 판정되고, 정칙이 아닌 함수는 이 값이 $0$ 에서 얼마나 벗어나는지로 잴 수 있다. 거꾸로 그 벗어난 정도 $f$ 를 먼저 주고 $u$ 를 찾는 문제에, 이 정리는 $f$ 에 $1/(z-w)$ 를 곱해 평면에서 적분한 함수가 해라는 것으로 답한다.

# 직관

$z=x+iy$ 에 대해 연산자 $\partial/\partial\bar z=\frac12(\partial_x+i\partial_y)$ 를 둔다. $u=a+ib$ 에 적용하면 실부와 허부가 Cauchy–Riemann 방정식(Cauchy–Riemann equations) $a_x=b_y$, $a_y=-b_x$ 와 같으므로, $u_{\bar z}=0$ 은 $u$ 가 정칙이라는 뜻이다. $u_{\bar z}$ 를 계산할 때는 $z$ 와 $\bar z$ 를 따로 된 변수처럼 다룬다. $u=z\bar z$ 이면 $u_{\bar z}=z$ 다.

$f$ 가 $z$ 와 $\bar z$ 의 다항식이면 $\bar z$ 에 대해 적분해 $u$ 를 얻는다. $f=z^a\bar z^b$ 이면 $u=z^a\bar z^{b+1}/(b+1)$ 이다. 다항식이 아니면 이 방법이 통하지 않는다.

단위원판에서 $1$, 밖에서 $0$ 인 $f$ 에서는 원판 안에서 $u=\bar z$, 밖에서 $u=1/z$ 로 두면 안쪽에서는 $u_{\bar z}=1$, 바깥에서는 $1/z$ 가 정칙이라 $u_{\bar z}=0$ 이다. 단위원 위에서 $\bar z=1/z$ 이므로 두 식은 연속으로 이어진다.

이 $u$ 는 다음 적분으로 얻어진다.

$$
u(z)=\frac1\pi\int_{\vert w\vert\lt 1}\frac{dA(w)}{z-w}
$$

$\vert z\vert\gt 1$ 이면 $1/(z-w)$ 가 원판에서 $w$ 의 정칙함수이므로 평균값 성질로 적분은 $\pi\cdot(1/z)$ 이고, $u=1/z$ 가 나온다.

# 정의

## Wirtinger 연산자

복소평면에서 다음 두 연산자를 **Wirtinger 연산자(Wirtinger derivatives)** 라 한다.

$$
\frac{\partial}{\partial z}=\frac12\Big(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\Big),\qquad\frac{\partial}{\partial\bar z}=\frac12\Big(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\Big)
$$

직관 절의 계산은 $\partial z/\partial\bar z=0$, $\partial\bar z/\partial\bar z=1$ 과 곱의 미분법에서 나온다.

## Cauchy 변환

받침이 콤팩트한 매끄러운 함수 $f$ 에 대해 다음 $Tf$ 를 $f$ 의 **Cauchy 변환(Cauchy transform)** 이라 한다. $dA$ 는 평면의 넓이 측도다.

$$
Tf(z)=\frac1\pi\int_{\mathbb C}\frac{f(w)}{z-w}\thinspace dA(w)
$$

직관 절의 $u$ 는 단위원판의 지시함수의 Cauchy 변환이다.

## ∂̄ 연산자와 (p,q) 형식

$\mathbb C^n$ 의 좌표 $z_1,\dots,z_n$ 에서 $dz_{i_1}\wedge\cdots\wedge dz_{i_p}\wedge d\bar z_{j_1}\wedge\cdots\wedge d\bar z_{j_q}$ 에 함수를 곱한 것의 합을 $(p,q)$ 형식이라 한다. [미분형식](differential-forms.md)의 외미분 $d$ 는 $\partial+\bar\partial$ 로 갈라지고, $\bar\partial$ 는 계수 $f$ 에 다음을 적용한다.

$$
\bar\partial f=\sum_{k=1}^n\frac{\partial f}{\partial\bar z_k}\thinspace d\bar z_k
$$

$\bar\partial\circ\bar\partial=0$ 이다. $\bar\partial\alpha=0$ 인 형식을 $\bar\partial$ 닫힌 형식, $\alpha=\bar\partial\beta$ 인 형식을 $\bar\partial$ 완전 형식이라 한다. $n=1$ 이고 $(0,1)$ 형식 $f\thinspace d\bar z$ 이면 $\bar\partial u=f\thinspace d\bar z$ 는 직관 절의 방정식 $u_{\bar z}=f$ 다.

# 성질

## 한 변수의 해

$f$ 가 받침이 콤팩트한 매끄러운 함수이면 $u=Tf$ 는 매끄럽고 $\partial u/\partial\bar z=f$ 를 만족한다.

증명의 요지. $w=z-\zeta$ 로 바꾸면 $Tf(z)=\frac1\pi\int f(z-\zeta)\zeta^{-1}dA(\zeta)$ 이고, $\zeta^{-1}$ 이 국소적으로 적분가능하므로 적분 안에서 미분해 $u_{\bar z}=T(f_{\bar w})$ 를 얻는다. 일반화된 Cauchy 적분 공식(Cauchy–Pompeiu formula)을 경계 항이 없는 $f$ 에 쓰면 $T(f_{\bar w})=f$ 다.

## 열린집합과 원판

평면의 원판 $D$ 에서 매끄러운 $f$ 를 주면, $D$ 보다 작은 원판에서 $1$ 이고 받침이 $D$ 안에 있는 함수 $\chi$ 를 곱한 $T(\chi f)$ 가 작은 원판에서 $u_{\bar z}=f$ 를 만족한다. 평면의 임의의 열린집합에서도 방정식은 그 집합 전체에서 풀린다[^1].

## 여러 변수의 보조정리

다원판 $\Delta=\lbrace\vert z_k\vert\lt r_k\rbrace$ 의 폐포의 근방에서 $q\ge 1$ 인 $\bar\partial$ 닫힌 $(p,q)$ 형식 $\alpha$ 가 주어지면, 더 작은 다원판에서 $\bar\partial\beta=\alpha$ 인 $(p,q-1)$ 형식 $\beta$ 가 존재한다. 이것이 Dolbeault–Grothendieck 보조정리다[^2].

증명의 요지. $\alpha$ 가 $d\bar z_1,\dots,d\bar z_k$ 만 쓰는 경우로 $k$ 에 대한 귀납법을 쓴다. $d\bar z_k$ 를 가진 성분의 계수에 $\bar z_k$ 방향의 Cauchy 변환을 적용해 $\gamma$ 를 만들면 $\alpha-\bar\partial\gamma$ 는 $d\bar z_k$ 를 쓰지 않는다. $\bar\partial\alpha=0$ 에서 계수들이 $z_{k+1},\dots,z_n$ 방향으로 정칙이므로, Cauchy 변환한 $\gamma$ 도 그 방향으로 정칙이고 귀납이 이어진다.

## Poincaré 보조정리와의 비교

[Poincaré 보조정리](poincare-lemma.md)는 별 모양 영역에서 $d$ 닫힌 형식이 $d$ 완전하다는 진술이고, 이 보조정리는 다원판에서 $\bar\partial$ 닫힌 형식이 $\bar\partial$ 완전하다는 진술이다. 차이는 $q=0$ 에 있다. $\bar\partial$ 닫힌 $(p,0)$ 형식은 계수가 정칙인 형식이고, 이것은 $0$ 이 아니어도 $\bar\partial$ 의 상이 될 수 없다. 그래서 상수 함수만 남는 de Rham 쪽과 달리 정칙함수 전체가 남는다.

# 활용

- Dolbeault 정리(Dolbeault theorem). 이 보조정리로 정칙 $p$ 형식의 층은 $(p,q)$ 형식의 층들과 $\bar\partial$ 로 이은 완전열로 분해되고, 그 분해의 층들은 단위분할로 비순환이다. 그러므로 [층 코호몰로지](sheaf-cohomology.md) $H^q(X,\Omega^p)$ 가 [Kähler 다양체](kahler-manifolds.md)의 Dolbeault 코호몰로지(Dolbeault cohomology) $H^{p,q}\_{\bar\partial}(X)$ 와 같다.
- 정칙함수의 구성. 국소적으로 주어진 극의 주요부를 이어 붙인 매끄러운 함수의 오차를 $\bar\partial u=f$ 로 지워 원하는 극을 가진 유리형함수를 만든다. 이것이 Mittag-Leffler 정리(Mittag-Leffler theorem)의 $\bar\partial$ 증명이다.
- Beltrami 방정식. [준등각 사상](quasiconformal-maps.md)을 만드는 $f_{\bar z}=\mu f_z$ 의 풀이는 Cauchy 변환과, 그것을 $z$ 로 미분한 Beurling 변환(Beurling transform)의 $L^p$ 유계성을 쓴다.

[^1]: L. Hörmander, *An Introduction to Complex Analysis in Several Variables*, 3rd ed., North-Holland, 1990, Chapter 1. 한 변수 ∂̄ 방정식의 해와 임의의 열린집합에서의 풀이.
[^2]: P. Griffiths and J. Harris, *Principles of Algebraic Geometry*, Wiley, 1978, Chapter 0, Section 2. ∂̄ Poincaré 보조정리와 Dolbeault 정리.

# 연관 문서

## 선수지식

- [Poincaré 보조정리](poincare-lemma.md)
- [정칙함수](holomorphic-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #differential_geometry #analysis
