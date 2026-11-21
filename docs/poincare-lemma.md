# Poincaré 보조정리

# 개요

**Poincaré 보조정리(Poincaré lemma)** 는 별 모양 영역에서 외미분이 $0$ 인 미분형식은 모두 다른 형식의 외미분이라는 정리다. 평면의 힘 $(2xy,\thinspace x^2)$ 이 한 일을 계산할 때, 일이 경로와 무관하고 끝점의 퍼텐셜 차이로 정해지는지는 이 힘이 어떤 함수의 기울기인지에 달렸다. 회전이 $0$ 이라는 조건은 그 필요조건이지만, 원점을 뺀 평면에서는 회전이 $0$ 이어도 퍼텐셜이 없는 힘이 있다. 이 정리는 영역의 모든 점이 한 점에서 선분으로 보이면 회전이 $0$ 이라는 조건만으로 퍼텐셜이 존재함을 보이고, 그 퍼텐셜을 선분 위의 적분으로 적는다.

# 직관

힘 $(P,Q)=(2xy,\thinspace x^2)$ 를 [미분형식](differential-forms.md) $\omega=2xy\thinspace dx+x^2\thinspace dy$ 로 쓴다. 퍼텐셜 $f$ 는 $df=\omega$ 인 함수, 곧 $\partial f/\partial x=2xy$ 이고 $\partial f/\partial y=x^2$ 인 함수다. 이런 $f$ 가 있으면 혼합 편미분이 같아야 하므로 $\partial P/\partial y=\partial Q/\partial x$ 이고, 여기서는 둘 다 $2x$ 다. 형식으로는 $d\omega=0$ 이다.

이 조건만으로 $f$ 를 만든다. 원점에서 점 $(x,y)$ 까지 선분 $t\mapsto(tx,ty)$, $0\le t\le 1$ 을 따라 $\omega$ 를 적분한 값을 $f(x,y)$ 로 둔다. 선분 위에서 $dx=x\thinspace dt$, $dy=y\thinspace dt$ 이므로 다음이 나온다.

$$
f(x,y)=\int_0^1\big(2(tx)(ty)\cdot x+(tx)^2\cdot y\big)\thinspace dt=\int_0^1 3t^2x^2y\thinspace dt=x^2y
$$

실제로 $d(x^2y)=2xy\thinspace dx+x^2\thinspace dy=\omega$ 다.

이 계산에는 원점에서 모든 점까지의 선분이 영역 안에 있다는 것만 쓰였다. 원점을 뺀 평면에서는 원점에서 출발할 수 없고, 다른 점 $p$ 에서 출발하면 $p$ 의 반대쪽 점까지의 선분이 원점을 지난다. 그 영역의 각형식 $(-y\thinspace dx+x\thinspace dy)/(x^2+y^2)$ 는 $d\omega=0$ 이지만 단위원을 한 바퀴 도는 적분이 $2\pi$ 이므로 퍼텐셜이 없다.

# 정의

## 별 모양 영역

열린집합 $U\subseteq\mathbb R^n$ 이 점 $p_0$ 에 대해 **별 모양(star-shaped)** 이라는 것은 모든 $x\in U$ 에 대해 선분 $\lbrace p_0+t(x-p_0):0\le t\le 1\rbrace$ 가 $U$ 에 포함된다는 것이다.

[볼록](convexity.md)집합은 그 안의 모든 점에 대해 별 모양이다. 평면 전체는 원점에 대해 별 모양이고, 원점을 뺀 평면은 어느 점에 대해서도 별 모양이 아니다. 직관 절의 선분 적분은 원점에 대해 별 모양인 영역에서 정의된다.

## 닫힌 형식과 완전형식

$d\omega=0$ 인 형식을 **닫힌 형식(closed form)**, 어떤 $\eta$ 로 $\omega=d\eta$ 인 형식을 **완전형식(exact form)** 이라 한다. 직관 절의 $\omega=2xy\thinspace dx+x^2\thinspace dy$ 는 닫혀 있고 $\eta=x^2y$ 로 완전하다. 각형식은 원점을 뺀 평면에서 닫혀 있지만 완전하지 않다.

## 원뿔 작용소

$U$ 가 원점에 대해 별 모양일 때 $k$ 형식 $\omega$ ($k\ge 1$) 의 **원뿔 작용소(cone operator)** $K\omega$ 는 다음 $(k-1)$ 형식이다.

$$
(K\omega)\_x(v_1,\dots,v_{k-1})=\int_0^1 t^{k-1}\thinspace\omega_{tx}(x,v_1,\dots,v_{k-1})\thinspace dt
$$

점 $x$ 를 원점과 잇는 방향 $x$ 를 첫 인수로 넣고, 선분 위의 점 $tx$ 에서 형식의 값을 모아 적분한다. 인자 $t^{k-1}$ 은 나머지 $k-1$ 개 인수가 점 $tx$ 에서 길이가 $t$ 배로 줄어든 것을 보정한다. 호모토피 작용소(homotopy operator)라고도 부른다.

$k=1$ 이면 $(K\omega)(x)=\int_0^1\omega_{tx}(x)\thinspace dt$ 이고 직관 절의 선분 적분이다. 직관 절의 $\omega$ 에서 $K\omega=x^2y$ 다.

$k=2$ 이고 $\omega=dx\wedge dy$ 이면 $\omega(x,v)=x_1v_2-x_2v_1$ 이므로 다음이 나온다.

$$
K(dx\wedge dy)=\int_0^1 t\thinspace dt\cdot(x\thinspace dy-y\thinspace dx)=\tfrac12(x\thinspace dy-y\thinspace dx)
$$

# 성질

## 호모토피 공식

원점에 대해 별 모양인 $U$ 위의 $k$ 형식 $\omega$ ($k\ge 1$) 에 대해 다음이 성립한다.

$$
\omega=d(K\omega)+K(d\omega)
$$

$0$ 형식 $f$ 에는 $K(df)=f-f(0)$ 이 성립한다.

증명의 요지. 선형이므로 $\omega=f\thinspace dx^{i_1}\wedge\cdots\wedge dx^{i_k}$ 한 항만 보면 된다. $d(K\omega)$ 와 $K(d\omega)$ 를 좌표로 전개하면 $x^{i_j}$ 를 미분한 항과 $f$ 를 미분한 항만 남고, 둘을 더하면 다음이 나온다.

$$
\int_0^1\Big(k\thinspace t^{k-1}f(tx)+t^k\sum_i x^i\frac{\partial f}{\partial x^i}(tx)\Big)\thinspace dt=\int_0^1\frac{d}{dt}\big(t^kf(tx)\big)\thinspace dt=f(x)
$$

## Poincaré 보조정리

원점에 대해 별 모양인 $U$ 에서 $k\ge 1$ 인 닫힌 형식 $\omega$ 는 완전하고, $\eta=K\omega$ 가 $d\eta=\omega$ 를 만족한다. 호모토피 공식에서 $d\omega=0$ 을 넣으면 바로 나온다. [de Rham 코호몰로지](de-rham-cohomology.md)로 쓰면 $k\ge 1$ 에서 $H^k_{\mathrm{dR}}(U)=0$ 이다.

$\mathbb R^2$ 의 $\omega=dx\wedge dy$ 는 닫혀 있고, 정의 절의 계산으로 $K\omega=\tfrac12(x\thinspace dy-y\thinspace dx)$ 다. 미분하면 $\tfrac12(dx\wedge dy-dy\wedge dx)=dx\wedge dy$ 로 $\omega$ 가 나온다.

## 퍼텐셜의 비유일성

$d\eta=d\eta'=\omega$ 이면 $\eta-\eta'$ 은 닫힌 형식이다. 그러므로 $k\ge 2$ 이면 Poincaré 보조정리로 $\eta'=\eta+d\lambda$ 인 $(k-1)$ 형식 $\lambda$ 가 있고, $k=1$ 이면 두 퍼텐셜은 상수만큼 다르다. 직관 절의 퍼텐셜은 $x^2y+c$ 꼴뿐이다.

## 국소 완전성

[다양체](manifolds.md)의 모든 점은 좌표 조각 안에서 공 모양 근방을 가지고, 공은 중심에 대해 별 모양이다. 그러므로 닫힌 형식은 다양체 위에서 국소적으로 언제나 완전하다. 각형식도 원점을 포함하지 않는 반평면 $x\gt 0$ 에서는 편각 함수 $\theta$ 의 외미분이다. 닫힌 형식이 전역적으로 완전한지는 영역의 모양에 달렸고, 그 차이를 재는 것이 de Rham 코호몰로지다.

## 수축가능 영역

별 모양 조건은 수축가능성(contractibility)으로 바꿀 수 있다. 매끄럽게 한 점으로 수축되는 다양체 $M$ 에서도 $k\ge 1$ 인 닫힌 형식은 완전하다. 별 모양 영역의 수축 $h_t(x)=tx$ 대신 일반 수축을 쓰면 de Rham 코호몰로지의 호모토피 불변성 증명과 같은 작용소가 나온다.

# 활용

- 벡터 해석의 퍼텐셜. $\mathbb R^3$ 의 별 모양 영역에서 회전이 $0$ 인 [벡터장](vector-fields.md)은 기울기장이고, 발산이 $0$ 인 벡터장은 어떤 벡터장의 회전이다. 앞의 것은 [선적분](line-integral.md)이 경로와 무관한 보존장의 판정이고, 뒤의 것은 자기장의 벡터 퍼텐셜이 존재하는 근거다.
- [Maxwell 방정식](maxwell-equations.md). 미분형식으로 쓴 $dF=0$ 에서 국소적으로 $F=dA$ 인 퍼텐셜 $A$ 가 존재한다. 퍼텐셜의 비유일성 $A\mapsto A+d\lambda$ 가 게이지 변환(gauge transformation)이다.
- de Rham 정리(de Rham theorem)의 층 이론적 증명. 상수층을 미분형식의 [층](sheaves.md)으로 분해할 때 그 분해가 [완전열](exact-sequences.md)이라는 것이 국소 완전성이다.
- Darboux 정리(Darboux theorem). [심플렉틱 다양체](symplectic-manifolds.md)의 Moser 논법은 두 심플렉틱 형식의 차 $\omega_1-\omega_0$ 이 한 점의 근방에서 $d\sigma$ 로 쓰인다는 것을 쓴다.

# 연관 문서

## 선수지식

- [미분형식](differential-forms.md)

## 더 알아보기

- [Helmholtz 분해](helmholtz-decomposition.md)
- [Dolbeault–Grothendieck 보조정리](dolbeault-grothendieck-lemma.md)

#differential_geometry #analysis #topology
