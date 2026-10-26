# Harish-Chandra 동형

# 개요

**Harish-Chandra 동형(Harish-Chandra isomorphism)** 은 반단순 [Lie 대수](lie-algebras.md)의 [보편포락대수](universal-enveloping-algebra.md)에서 모든 원소와 교환하는 원소들이 Cartan 부분대수 위의 다항식 가운데 Weyl 군에 대해 불변인 것들과 같다는 정리다. $\mathfrak{sl}\_2$ 의 Casimir 원소는 최고무게 $\lambda$ 의 Verma 가군 위에서 $\frac12\lambda(\lambda+2)$ 배로 작용하고, 이 값은 $\lambda$ 와 $-\lambda-2$ 에서 같다. 중심 원소들의 값으로 어느 가군들을 구별할 수 있고 어느 것은 구별할 수 없는지가 문제다. 이 정리는 그 값이 같아지는 무게가 정확히 Weyl 군의 이동 작용의 한 궤도임을 보인다.

# 직관

[최고무게 가군](highest-weight-modules.md)의 $\mathfrak{sl}\_2$ Verma 가군 $M(\lambda)$ 에서 최고무게 벡터 $v$ 는 $Hv=\lambda v$, $Ev=0$ 을 만족한다. [보편포락대수](universal-enveloping-algebra.md)의 Casimir 원소 $C=EF+FE+\frac12H^2$ 를 작용시키면 $EFv=[E,F]v=\lambda v$ 이고 $FEv=0$ 이므로 다음이 나온다.

$$
Cv=\Big(\lambda+\tfrac12\lambda^2\Big)v=\tfrac12\big((\lambda+1)^2-1\big)v
$$

$C$ 는 모든 원소와 교환하고 $v$ 가 $M(\lambda)$ 를 생성하므로 $C$ 는 $M(\lambda)$ 전체에서 이 상수배다. 이 값은 $\lambda$ 에 대한 다항식이고, $\mu=\lambda+1$ 로 바꾸면 $\frac12(\mu^2-1)$ 이라 $\mu\mapsto-\mu$ 에 대해 불변이다. $\mu\mapsto-\mu$ 는 $\mathfrak{sl}\_2$ 의 Weyl 군 $\lbrace 1,s\rbrace$ 의 작용이고, $\lambda$ 로는 $\lambda\mapsto-\lambda-2$ 다. [최고무게 가군](highest-weight-modules.md) 문서의 완전열 $0\to M(-n-2)\to M(n)\to L(n)\to0$ 에서 부분가군과 전체가 $C$ 의 같은 값을 갖는 것이 이 불변성이다.

$\mathfrak{sl}\_2$ 의 보편포락대수에서 모든 원소와 교환하는 원소는 $C$ 의 다항식뿐이다. 그래서 $C$ 의 값과 $\mu^2$ 의 값이 같은 정보이고, 중심은 $\mu$ 의 짝수 다항식들의 환과 같다. 일반 반단순 Lie 대수에서 $\mu\mapsto-\mu$ 자리에 Weyl 군 $W$ 를, $\lambda+1$ 자리에 $\lambda+\rho$ 를 넣은 것이 Harish-Chandra 동형이다.

# 정의

## 중심 지표

$\mathfrak g$ 를 복소 반단순 Lie 대수, $\mathfrak h$ 를 Cartan 부분대수, $\mathfrak g=\mathfrak n^{-}\oplus\mathfrak h\oplus\mathfrak n^{+}$ 을 [최고무게 가군](highest-weight-modules.md)의 분해라 한다. $Z(\mathfrak g)$ 는 $U(\mathfrak g)$ 의 중심이다.

$z\in Z(\mathfrak g)$ 는 Verma 가군 $M(\lambda)$ 위에서 상수 $\chi_\lambda(z)$ 배로 작용한다. 대수 준동형 $\chi_\lambda:Z(\mathfrak g)\to\mathbb C$ 를 무게 $\lambda$ 의 **중심 지표(central character)** 라 한다.

## Harish-Chandra 준동형

Poincaré–Birkhoff–Witt 정리로 다음 직합 분해가 있다.

$$
U(\mathfrak g)=U(\mathfrak h)\oplus\big(\mathfrak n^{-}U(\mathfrak g)+U(\mathfrak g)\mathfrak n^{+}\big)
$$

첫째 성분으로의 사영을 $Z(\mathfrak g)$ 에 제한한 것을 $p$ 라 한다. $U(\mathfrak h)$ 는 $\mathfrak h$ 가 가환이므로 $\mathfrak h^\ast$ 위의 다항식환 $S(\mathfrak h)$ 와 같고, $\chi_\lambda(z)=p(z)(\lambda)$ 다. $\rho$ 를 양근의 합의 절반이라 하고 $\gamma(z)(\lambda)=p(z)(\lambda-\rho)$ 로 둔 $\gamma:Z(\mathfrak g)\to S(\mathfrak h)$ 를 **Harish-Chandra 준동형(Harish-Chandra homomorphism)** 이라 한다.

# 성질

## Harish-Chandra 정리

**정리.** $\gamma$ 는 $Z(\mathfrak g)$ 에서 $W$ 불변 다항식환 $S(\mathfrak h)^W$ 로 가는 대수 동형사상이다.[^1]

증명의 요지는 셋이다. $W$ 불변성은 단순 반사마다 보인다. $\langle\lambda+\rho,\alpha_i^\vee\rangle$ 가 양의 정수이면 $M(s_i\cdot\lambda)$ 가 $M(\lambda)$ 의 부분가군이라 두 중심 지표가 같고, 이런 $\lambda$ 들이 다항식을 정하기에 충분히 많다. 단사성은 $z$ 를 Poincaré–Birkhoff–Witt 기저로 펼친 최고차항이 $p(z)$ 에 남는다는 데서 나온다. 전사성은 Chevalley 제한 정리(Chevalley restriction theorem) $S(\mathfrak g)^{\mathfrak g}\cong S(\mathfrak h)^W$ 와 등급을 비교해 얻는다.

## 중심 지표가 같을 조건

**따름정리.** $\chi_\lambda=\chi_\mu$ 일 필요충분조건은 $\mu=w\cdot\lambda=w(\lambda+\rho)-\rho$ 인 $w\in W$ 가 있는 것이다.

$W$ 불변 다항식은 $W$ 의 서로 다른 궤도를 구별하므로 정리에서 따라 나온다.

## 중심의 구조

Chevalley 의 정리로 $S(\mathfrak h)^W$ 는 대수적으로 독립인 동차 다항식 $r=\dim\mathfrak h$ 개로 생성되는 다항식환이다. 따라서 $Z(\mathfrak g)$ 도 $r$ 개의 생성원을 갖는 다항식환이다. 생성원의 차수는 $\mathfrak{sl}\_2$ 에서 $2$ (Casimir 원소), $\mathfrak{sl}\_n$ 에서 $2,3,\dots,n$ 이다.

# 활용

- [범주 O](category-o.md)의 블록 분해에서 가군은 중심 지표로 갈리고, 따름정리로 한 블록에 드는 단순가군 $L(\mu)$ 의 무게 $\mu$ 는 한 점작용 궤도 $W\cdot\lambda$ 에 들어간다.
- [보편포락대수](universal-enveloping-algebra.md)의 Casimir 원소의 값 $\frac12\big((\lambda+\rho,\lambda+\rho)-(\rho,\rho)\big)$ (Killing 형식의 규격화에 따라 상수배가 붙는다) 가 이 동형의 차수 $2$ 성분이다.
- [Beilinson–Bernstein 국소화](beilinson-bernstein.md)는 중심 지표를 하나 고정한 $U(\mathfrak g)$ 가군들을 깃발다양체 위의 D 가군으로 옮긴다.
- 실 반단순 [Lie 군](lie-groups.md)의 무한차원 표현에서 중심 지표는 무한소 지표(infinitesimal character)라 불리고, 기약표현을 분류하는 첫 불변량이다.

[^1]: J. Humphreys, *Introduction to Lie Algebras and Representation Theory* (1972), 23 절(Harish-Chandra 정리와 그 증명). Chevalley 제한 정리와 불변 다항식환의 구조도 같은 절.

# 연관 문서

## 선수지식

- [최고무게 가군](highest-weight-modules.md)

## 더 알아보기

- [범주 O](category-o.md)

#algebra #group_theory
