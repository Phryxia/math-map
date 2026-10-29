# 교차곱

# 개요

**교차곱(crossed product)** 은 [C 스타 대수](c-star-algebras.md) $A$ 와 그 위에 자기동형으로 작용하는 군 $G$ 에서, $A$ 의 원소와 $G$ 의 원소를 함께 담고 작용을 켤레로 구현하는 C 스타 대수 $A\rtimes G$ 다. 원을 일정한 각만큼 돌리는 회전이 있으면, 원 위의 함수들은 대수를 이루지만 회전은 그 대수의 원소가 아니어서 함수와 회전을 섞은 식을 계산할 수 없다. 함수와 회전을 함께 원소로 두고, 회전을 함수 앞에서 뒤로 옮길 때 함수가 돌아가는 규칙 하나를 곱셈에 넣으면 둘을 한 대수에서 계산할 수 있다.

# 직관

원 $S^1$ 을 각 $2\pi\theta$ 만큼 돌리는 회전 $R$ 이 있다. 원 위의 함수는 C 스타 대수 $C(S^1)$ 을 이루고, 회전은 $f\mapsto f\circ R^{-1}$ 로 이 대수의 자기동형 $\alpha$ 를 준다. 회전이라는 움직임까지 대수 하나에 넣으려 한다.

$L^2(S^1)$ 위에서 함수 $f$ 는 곱셈작용소 $M_f$ 로, 회전은 유니터리 $(Ug)(x)=g(R^{-1}x)$ 로 작용한다. 둘 사이에는 $UM_fU^\ast=M_{\alpha(f)}$ 가 성립한다. 함수와 $U$ 의 거듭제곱으로 만든 유한합 $\sum_nM_{f_n}U^n$ 전체를 노름으로 닫으면 함수와 회전을 함께 담은 대수가 나온다.

곱은 $M_fU^n\cdot M_gU^m=M_{f\cdot\alpha^n(g)}U^{n+m}$ 으로 계산되므로 이 대수는 작용소를 쓰지 않고 계수 $f_n$ 들만으로 정의할 수 있다. 그렇게 정의한 것이 교차곱 $C(S^1)\rtimes_\alpha\mathbb Z$ 이고, $\theta$ 가 무리수이면 이를 무리수 회전 대수라 한다.

$A=\mathbb C$ 이면 교차곱은 군 C 스타 대수이고, $A=C(X)$ 이면 공간 $X$ 위의 동역학계가 대수 하나로 바뀐다.

# 정의

$G$ 를 이산군, $\alpha\colon G\to\mathrm{Aut}(A)$ 를 작용이라 하자.

## 공변 표현

[Hilbert 공간](hilbert-spaces.md) $H$ 위의 표현 $\pi\colon A\to B(H)$ 와 유니터리 표현 $u\colon G\to U(H)$ 가

$$
u_g\pi(a)u_g^\ast=\pi(\alpha_g(a))
$$

를 만족하면 $(\pi,u)$ 를 공변 표현(covariant representation)이라 한다.

## 완전 교차곱과 축소 교차곱

유한합 $\sum_g a_g\delta_g$ 들의 대합 대수 $C_c(G,A)$ 에 곱 $(a\delta_g)(b\delta_h)=a\alpha_g(b)\delta_{gh}$ 와 대합 $(a\delta_g)^\ast=\alpha_{g^{-1}}(a^\ast)\delta_{g^{-1}}$ 를 준다. 모든 공변 표현에 대한 노름의 상한으로 완비화한 것을 **완전 교차곱(full crossed product)** $A\rtimes_\alpha G$ 라 한다.

$A$ 의 충실한 표현 $\pi$ 를 $\ell^2(G,H)$ 로 늘린 정칙 공변 표현 하나의 노름으로 완비화한 것을 **축소 교차곱(reduced crossed product)** $A\rtimes_{\alpha,r}G$ 라 한다. $A=\mathbb C$ 이면 각각 완전 군 C 스타 대수 $C^\ast(G)$ 와 축소 군 C 스타 대수 $C^\ast_r(G)$ 이다.

# 성질

## 보편성질

$A\rtimes_\alpha G$ 의 표현과 $(A,G,\alpha)$ 의 공변 표현은 일대일 대응한다. 정의가 모든 공변 표현의 노름을 쓰기 때문이다. 축소 교차곱은 완전 교차곱의 몫이다.

## 순종군에서의 일치

$G$ 가 [순종군](amenable-groups.md)이면 완전 교차곱과 축소 교차곱이 같다[^1]. 특히 $C^\ast(G)=C^\ast_r(G)$ 이다. 자유군 $F_2$ 에서는 $C^\ast(F_2)\ne C^\ast_r(F_2)$ 이고, 이 일치는 순종성과 동치다.

## 단순성

$X$ 가 콤팩트 공간이고 정수군 $\mathbb Z$ 가 동형사상 $T$ 로 작용할 때, 모든 궤도가 조밀하고 주기점이 없으면 $C(X)\rtimes\mathbb Z$ 는 단순 C 스타 대수다[^2]. $\theta$ 가 무리수인 회전은 이 조건을 만족하므로 무리수 회전 대수는 단순하다.

## 가환군의 쌍대성

$G$ 가 가환이면 쌍대군 $\hat G$ 가 $A\rtimes G$ 위에 작용하고, Takai 쌍대성(Takai duality)은 $(A\rtimes G)\rtimes\hat G$ 가 $A$ 와 $\ell^2(G)$ 위 콤팩트 작용소의 텐서곱과 동형이라고 진술한다. [Pontryagin 쌍대성](pontryagin-duality.md)의 C 스타 대수 판이다.

# 활용

- [작용소 K 이론](operator-k-theory.md). 정수군의 교차곱은 Pimsner–Voiculescu 완전열로 K 군이 계산된다. 무리수 회전 대수의 $K_0$ 이 $\mathbb Z^2$ 인 것이 그 예다.
- 동역학계의 분류. [Cantor 집합](cantor-set.md) 위의 극소 동형사상 두 개가 강한 궤도 동치인 것과 교차곱이 동형인 것이 동치다(Giordano–Putnam–Skau 정리)[^3].
- 군의 성질. 군 C 스타 대수의 성질로 군을 판정한다. 순종성은 위의 일치로, Kazhdan 성질 (T)(Kazhdan's property (T)) 는 $C^\ast(G)$ 의 사영으로 나타난다. 축소 군 C 스타 대수의 K 군을 군의 위상으로 계산한다는 것이 [Baum–Connes 추측](baum-connes-conjecture.md)이다.

[^1]: D. Williams, *Crossed Products of C\*-Algebras*, American Mathematical Society (2007), 7장.
[^2]: K. Davidson, *C\*-Algebras by Example*, American Mathematical Society (1996), 8장.
[^3]: T. Giordano, I. Putnam, C. Skau, Topological orbit equivalence and C\*-crossed products, *J. Reine Angew. Math.* **469** (1995), 51–111.

# 연관 문서

## 선수지식

- [C 스타 대수](c-star-algebras.md)

## 더 알아보기

- [Baum–Connes 추측](baum-connes-conjecture.md)

#functional_analysis #group_theory #topology
