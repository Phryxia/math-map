# 미분형식

# 개요

**미분형식(differential form)** 은 다양체의 각 점에서 접공간 위의 교대 다중선형 형식을 매끄럽게 고른 것이다. 구간에서 $f'$ 을 적분하면 $f(b)-f(a)$ 이고, 평면 영역에서 회전을 적분하면 경계를 도는 선적분이다. 이런 정리들은 모두 안쪽에서 미분한 것의 적분이 경계에서의 적분과 같다는 꼴인데 차원마다 기호가 달라 따로 증명되고, 적분할 대상을 미분형식으로 적으면 하나의 식이 된다.

# 직관

$\int_0^1 2x\thinspace dx=1$ 을 $x=u^2$ 로 바꿔 계산한다. $dx=2u\thinspace du$ 를 넣으면 $\int_0^1 2u^2\cdot 2u\thinspace du=\int_0^1 4u^3\thinspace du=1$ 로 값이 유지되지만, 피적분함수만 $2u^2$ 로 바꿔 적분하면 $2/3$ 이 나온다. 좌표를 바꿀 때 따라붙는 $2u$ 가 있어야 값이 같으므로 적분되는 것은 함수가 아니라 $f\thinspace dx$ 전체다.

평면에서도 같다. 두 벡터 $(a,b)$, $(c,d)$ 가 만드는 평행사변형의 부호 있는 넓이는 $ad-bc$ 이고, 두 벡터를 바꿔 넣으면 부호가 바뀌며 같은 벡터를 두 번 넣으면 $0$ 이다. 넓이를 적분하는 것은 각 점에서 이 규칙에 함수를 곱한 $f\thinspace dx\wedge dy$ 를 적분하는 것이고, 좌표를 바꾸면 Jacobi 행렬식(Jacobian determinant)이 이 규칙에서 따라 나온다.

# 정의

## 교대 형식

벡터공간 $V$ 에 대해 $\Lambda^kV^\ast$ 는 $k$ 개의 인수를 받는 교대 다중선형 함수들의 공간이다. 이 공간은 [외대수](exterior-algebra.md)의 차수 $k$ 부분이다.

$V=\mathbb R^2$ 에서 $dx\wedge dy$ 는 $(dx\wedge dy)(u,v)=u_1v_2-u_2v_1$ 인 교대 2형식이고, 직관 절의 부호 있는 넓이다. $V=\mathbb R^3$ 의 $\Lambda^2V^\ast$ 는 $dy\wedge dz$, $dz\wedge dx$, $dx\wedge dy$ 를 기저로 하는 3 차원 공간이다.

## 미분형식

[다양체](manifolds.md) $M$ 위의 **$k$ 형식**은 각 점 $p$ 에서 $\Lambda^kT_p^\ast M$ 의 원소를 매끄럽게 배정한 것이며 국소 좌표에서 다음 꼴이다. $k$ 형식 전체를 $\Omega^k(M)$ 으로 쓴다.

$$
\omega=\sum_{i_1\lt\cdots\lt i_k}f_{i_1\cdots i_k}\thinspace dx^{i_1}\wedge\cdots\wedge dx^{i_k}
$$

0형식은 함수이고, $\mathbb R$ 위의 1형식 $2x\thinspace dx$ 가 직관 절의 피적분 대상이다. 평면 위의 2형식 $f\thinspace dx\wedge dy$ 를 적분하면 보통의 이중적분 $\iint f\thinspace dx\thinspace dy$ 다.

## 쐐기곱

$\alpha\in\Omega^k$, $\beta\in\Omega^l$ 의 **쐐기곱(wedge product)** $\alpha\wedge\beta\in\Omega^{k+l}$ 은 각 점에서 외대수의 곱이다. 좌표에서는 $dx^i$ 끼리의 곱을 $dx^i\wedge dx^j=-dx^j\wedge dx^i$ 로 정리해 계산한다. 평면에서 $(dx+dy)\wedge(dx-dy)=-dx\wedge dy+dy\wedge dx=-2\thinspace dx\wedge dy$ 다.

## 외미분

**외미분(exterior derivative)** $d\colon\Omega^k\to\Omega^{k+1}$ 은 함수 $f$ 에 $df=\sum_i(\partial f/\partial x^i)\thinspace dx^i$ 를 주고, 일반 형식에는 계수함수에 $d$ 를 적용하고 쐐기를 붙인다.

$$
d\big(f\thinspace dx^{i_1}\wedge\cdots\wedge dx^{i_k}\big)=df\wedge dx^{i_1}\wedge\cdots\wedge dx^{i_k}
$$

평면에서 $d(x\thinspace dy)=dx\wedge dy$ 이고, $d(-y\thinspace dx+x\thinspace dy)=-dy\wedge dx+dx\wedge dy=2\thinspace dx\wedge dy$ 다.

## 당김

매끄러운 사상 $F\colon N\to M$ 에 대해 $k$ 형식 $\omega$ 의 **당김(pullback)** $F^\ast\omega$ 는 $N$ 위의 다음 형식이다.

$$
(F^\ast\omega)\_p(v_1,\dots,v_k)=\omega_{F(p)}\big(dF_p v_1,\dots,dF_p v_k\big)
$$

$F(u)=u^2$ 이면 $F^\ast(2x\thinspace dx)=2u^2\cdot 2u\thinspace du=4u^3\thinspace du$ 로 직관 절의 치환이 나온다. 극좌표 $F(r,\theta)=(r\cos\theta,r\sin\theta)$ 에서는 $F^\ast(dx\wedge dy)=r\thinspace dr\wedge d\theta$ 다.

# 성질

## 외미분의 특징과 당김

$d$ 는 좌표에 의존하지 않고 다음 네 성질로 유일하게 결정된다. 선형이고, 함수에서 보통의 미분이고, 곱규칙 $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^k\alpha\wedge d\beta$ 를 만족하고, $d\circ d=0$ 이다.

쐐기곱은 결합적이고 쌍선형이며 $\alpha\wedge\beta=(-1)^{kl}\thinspace\beta\wedge\alpha$ 를 만족한다. 당김은 쐐기곱, 외미분과 교환한다. $F^\ast(d\omega)=d(F^\ast\omega)$ 와 $F^\ast$ 가 적분을 보존한다는 것이 치환적분 공식이다.

## Stokes 정리

$M$ 이 방향을 가진 $n$ 차원 다양체이고 $\omega$ 가 받침이 콤팩트한 $(n-1)$ 형식이면 다음이 성립한다. 이것이 Stokes 정리(Stokes' theorem)다.

$$
\int_Md\omega=\int_{\partial M}\omega
$$

[단위분할](partitions-of-unity.md)로 문제를 좌표 조각 하나로 국소화하고 반공간 $\lbrace x^n\ge0\rbrace$ 에서 직접 계산한다. 그 계산이 미적분학의 기본정리 한 번이다.

| 차원 | 고전적 이름 |
|---|---|
| $n=1$ | 미적분학의 기본정리 |
| $n=2$ 인 평면 | Green 정리 |
| $n=2$ 이고 바탕이 $\mathbb R^3$ 안의 곡면 | 곡면 Stokes 정리 |
| $n=3$ | 발산 정리(divergence theorem) |

단위원판에서 $\omega=x\thinspace dy$ 를 쓰면 좌변은 $\iint dx\wedge dy=\pi$ 이고, 우변은 $\int_0^{2\pi}\cos\theta\cdot\cos\theta\thinspace d\theta=\pi$ 다. 평면의 경우가 [Green 정리](greens-theorem.md)다.

$\mathbb R^3$ 의 기울기(gradient), 회전(curl), 발산(divergence)은 각각 $\Omega^0\to\Omega^1$, $\Omega^1\to\Omega^2$, $\Omega^2\to\Omega^3$ 의 $d$ 이고, $\mathrm{curl}\circ\mathrm{grad}=0$ 과 $\mathrm{div}\circ\mathrm{curl}=0$ 이 $d\circ d=0$ 의 사례다. $\binom3k$ 가 $1,3,3,1$ 이라 3 차원에서는 1형식과 2형식을 모두 벡터장으로 적을 수 있고, 그래서 세 연산이 벡터장의 연산으로 쓰인다.

## d∘d=0

혼합 편미분이 순서에 무관하다는 사실과 쐐기곱의 반대칭성 때문에 항들이 상쇄되어 $d\circ d=0$ 이 된다. 함수 $f$ 에서 $d(df)=\sum_{i,j}(\partial^2f/\partial x^j\partial x^i)\thinspace dx^j\wedge dx^i$ 이고 $(i,j)$ 항과 $(j,i)$ 항이 상쇄된다.

기하적으로는 경계의 경계가 없다는 진술이다. 정육면체의 경계는 여섯 면이고 그 여섯 면의 경계인 변들은 두 번씩 반대 방향으로 나타나 상쇄된다. Stokes 정리로 $d$ 와 $\partial$ 가 대응하므로 두 사실이 같은 내용이다.

## 코호몰로지와 구멍

$d\omega=0$ 인 형식을 닫힌 형식(closed form), $\omega=d\eta$ 인 형식을 완전형식(exact form)이라 한다. $d\circ d=0$ 이므로 완전형식은 닫힌 형식이고, 역의 성립 여부가 공간의 모양에 달렸다.

$$
H^k_{\mathrm{dR}}(M)=\frac{\ker\big(d\colon\Omega^k\to\Omega^{k+1}\big)}{\mathrm{im}\big(d\colon\Omega^{k-1}\to\Omega^k\big)}
$$

Poincaré 보조정리(Poincaré lemma)에 따르면 수축가능한 열린집합에서 모든 닫힌 형식은 완전하다. $H^k\ne0$ 은 국소적으로는 $d\eta$ 로 쓸 수 있지만 전역적으로는 쓸 수 없는 닫힌 형식이 있다는 뜻이다.

$\mathbb R^2\setminus\lbrace 0\rbrace$ 위의 각형식

$$
\omega=\frac{-y\thinspace dx+x\thinspace dy}{x^2+y^2}
$$

은 $d\omega=0$ 이지만 단위원에서의 적분이 $2\pi$ 이므로 완전하지 않다. 완전형식이면 Stokes 정리로 닫힌 곡선 위의 적분이 $0$ 이어야 한다. 원점의 구멍이 $H^1$ 을 1 차원으로 만든다.

de Rham 정리(de Rham theorem)에 따르면 이 [de Rham 코호몰로지](de-rham-cohomology.md)는 위상적 특이 [코호몰로지](cohomology.md)의 실계수판과 동형이다. 미분으로 정의한 대상이 위상 불변량이 된다.

## 방향과 부피

$n$ 차원 다양체에서 $\Lambda^nT_p^\ast M$ 이 1 차원이므로, 어디서도 $0$ 이 되지 않는 $n$ 형식이 존재하는 것과 방향을 줄 수 있는 것이 동치다. Möbius 띠(Möbius strip)에는 그런 형식이 없다.

[Riemann 계량](riemannian-metrics.md)이 있으면 정규직교 틀에서 $1$ 을 주는 부피형식(volume form)이 유일하게 결정되고 길이, 넓이, 부피가 형식의 적분으로 계산된다. Hodge 별작용소(Hodge star operator) $\star$ 가 $k$ 형식과 $(n-k)$ 형식을 맞바꾸며, $\delta=\pm\negthinspace\star d\star$ 와 $\Delta=d\delta+\delta d$ 로 [Laplace 연산자](laplace-operator.md)가 나온다. [Hodge 이론](hodge-theory.md)의 Hodge 정리에 따르면 콤팩트 다양체에서 $\Delta\omega=0$ 인 조화형식이 각 코호몰로지류에 하나씩 있다.

## 좌표 없는 계산

$\mathbb R^3$ 에서 $\omega=x\thinspace dy\wedge dz+y\thinspace dz\wedge dx+z\thinspace dx\wedge dy$ 를 미분하면

$$
d\omega=(1+1+1)\thinspace dx\wedge dy\wedge dz=3\thinspace dx\wedge dy\wedge dz
$$

이고, 단위공에서 Stokes 정리를 적용하면 $\int_{S^2}\omega=3\cdot\frac43\pi=4\pi$ 다.

# 활용

- Maxwell 방정식(Maxwell's equations) 넷이 전자기장 2형식 $F$ 와 전류 3형식 $J$ 에 대한 $dF=0$, $d\star F=J$ 로 적힌다. 첫 식이 Gauss 자기 법칙과 Faraday 법칙, 둘째가 Gauss 법칙과 Ampère–Maxwell 법칙이다. 좌표계에 의존하지 않으므로 [곡률](curvature.md)이 있는 시공간에서도 같은 꼴이다. $dF=0$ 에서 Poincaré 보조정리로 국소적으로 $F=dA$ 인 퍼텐셜 $A$ 가 존재한다.
- 닫힌 형식의 적분은 경로의 연속변형에 불변이다. 닫혀 있지만 완전하지 않은 형식의 적분이 감은 수, 유수 같은 정수 불변량을 준다. 각형식의 적분을 $2\pi$ 로 나눈 값이 원점 둘레의 감은 수다.
- [Gauss–Bonnet 정리](gauss-bonnet.md)는 곡률 2형식의 적분이 [Euler 지표](euler-characteristic.md)의 $2\pi$ 배와 같다는 진술이다. [지표 정리](index-theorem.md)도 특성류를 미분형식으로 적어 진술된다.
- [Hamilton 역학](hamiltonian-mechanics.md)은 닫힌 비퇴화 2형식을 가진 다양체, 곧 [심플렉틱 다양체](symplectic-manifolds.md) 위에서 전개된다. Hamilton 흐름이 이 형식을 보존하므로 그 거듭제곱인 부피형식도 보존되고, 이것이 Liouville 정리(Liouville's theorem)다.

# 연관 문서

## 선수지식

- [다양체](manifolds.md)
- [외대수](exterior-algebra.md)

## 더 알아보기

- [Lie 미분](lie-derivative.md)
- [de Rham 코호몰로지](de-rham-cohomology.md)
- [심플렉틱 다양체](symplectic-manifolds.md)

#differential_geometry #analysis #topology
