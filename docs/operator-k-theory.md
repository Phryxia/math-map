# 작용소 K 이론

# 개요

**작용소 K 이론(operator K-theory)** 은 [C 스타 대수](c-star-algebras.md) $A$ 에 두 아벨군 $K_0(A)$ 와 $K_1(A)$ 를 대응시키는 이론이다. $K_0$ 은 행렬 대수 속 사영의 동치류에서, $K_1$ 은 유니터리의 호모토피류에서 만든다. 콤팩트 Hausdorff 공간 $X$ 위의 연속함수 대수 $C(X)$ 에서 두 군은 $X$ 의 위상 K 이론(topological K-theory) $K^0(X)$, $K^1(X)$ 와 같다.

# 직관

[Fredholm 작용소](fredholm-operators.md) 문서의 오른쪽 이동 작용소 $S$ 는 지표가 $-1$ 이다. Atkinson 정리에 따라 $S$ 는 Calkin 대수(Calkin algebra) $\mathcal B(H)/\mathcal K(H)$ 에서 가역이다. 그러면 $S$ 에 [콤팩트 작용소](compact-operators.md) 하나를 더해 $\mathcal B(H)$ 에서 가역인 작용소로 고칠 수 있는가를 묻는다.

고칠 수 없다. 콤팩트 작용소를 더해도 지표는 그대로이고 가역 작용소의 지표는 $0$ 이다. 고치지 못하게 막는 것은 정수 $-1$ 하나다.

이 정수는 두 사영에서 나온다. $S^\ast S=I$ 이고 $SS^\ast=I-e_0$ 인데 $e_0$ 은 첫 좌표로의 사영이다. 핵으로의 사영은 $0$ 이고 여핵으로의 사영은 $e_0$ 이므로, 지표는 두 사영의 계수의 차 $0-1$ 이다.

몫 대수의 가역원 하나가 아이디얼 $\mathcal K(H)$ 안의 사영 두 개의 차를 내놓은 것이다. 사영을 계수로 세고 차를 허용하면 정수가 나온다. 이 두 쪽을 모든 C 스타 대수로 넓힌 것이 $K_1$ 과 $K_0$ 이고, 지표는 둘 사이의 사상이 된다.

# 정의

$A$ 를 단위원을 가진 C 스타 대수라 하고 $M_n(A)$ 를 성분이 $A$ 의 원소인 $n\times n$ 행렬의 C 스타 대수라 하자. $a\mapsto\mathrm{diag}(a,0)$ 으로 $M_n(A)\subset M_{n+1}(A)$ 로 보고 그 합집합을 $M_\infty(A)$ 라 쓴다.

## 사영과 동치

$p\in M_n(A)$ 가 $p=p^\ast=p^2$ 를 만족하면 **사영(projection)** 이다. 두 사영 $p,q$ 에 대해 $v^\ast v=p$, $vv^\ast=q$ 인 $v$ 가 있으면 $p$ 와 $q$ 가 **Murray–von Neumann 동치(Murray–von Neumann equivalence)** 라 하고 $p\sim q$ 로 쓴다. 이런 $v$ 를 부분 등거리(partial isometry)라 한다.

$\mathcal B(H)$ 에서 두 사영이 동치인 것은 상의 차원이 같은 것과 같다. 동치는 사영의 "크기" 를 차원 없이 비교하는 방법이다.

## K₀ 군

$M_\infty(A)$ 의 사영의 동치류 전체를 $V(A)$ 라 하고 덧셈을 다음으로 정의한다.

$$
\lbrack p\rbrack+\lbrack q\rbrack=\left\lbrack\begin{pmatrix}p&0\cr 0&q\end{pmatrix}\right\rbrack
$$

$V(A)$ 는 가환 모노이드다. 자연수에서 정수를 만들듯 형식적 차 $\lbrack p\rbrack-\lbrack q\rbrack$ 를 붙여 얻은 아벨군, 곧 $V(A)$ 의 Grothendieck 군(Grothendieck group)이 **$K_0(A)$** 다.

단위원이 없는 $A$ 는 단위원을 붙인 $\tilde A$ 를 쓰고, $K_0(A)$ 를 $K_0(\tilde A)\to K_0(\mathbb C)$ 의 핵으로 정의한다.

## K₁ 군

$U_n(A)$ 를 $M_n(A)$ 의 유니터리(unitary) 전체, 곧 $u^\ast u=uu^\ast=1$ 인 원소 전체라 하고 $u\mapsto\mathrm{diag}(u,1)$ 로 $U_n(A)\subset U_{n+1}(A)$ 로 본다. 합집합 $U_\infty(A)$ 에서 노름 위상으로 연속인 경로로 이어지는 두 유니터리를 같게 보면 **$K_1(A)$** 가 나온다.

$$
K_1(A)=U_\infty(A)/U_\infty(A)\_0
$$

$U_\infty(A)\_0$ 은 단위원을 포함하는 경로연결 성분이다. 곱은 $\lbrack u\rbrack\lbrack v\rbrack=\lbrack uv\rbrack=\lbrack\mathrm{diag}(u,v)\rbrack$ 이고, 두 표현이 같은 류를 준다는 것에서 $K_1(A)$ 가 아벨군임이 나온다.

## 예

| 대수 | K₀ | K₁ |
| --- | --- | --- |
| $\mathbb C$, $M_n(\mathbb C)$ | $\mathbb Z$ | $0$ |
| $\mathcal K(H)$ | $\mathbb Z$ | $0$ |
| 무한차원 $H$ 의 $\mathcal B(H)$ | $0$ | $0$ |
| $C(S^1)$ | $\mathbb Z$ | $\mathbb Z$ |
| $C(S^2)$ | $\mathbb Z^2$ | $0$ |

$M_n(\mathbb C)$ 과 $\mathcal K(H)$ 에서 사영의 류는 계수로 정해진다. 무한차원 $\mathcal B(H)$ 에서는 $I\sim I\oplus I$ 이므로 $\lbrack I\rbrack=2\lbrack I\rbrack$ 이고 모든 류가 $0$ 이 된다. $C(S^1)$ 의 $K_1$ 은 원에서 $\mathbb C^\times$ 로 가는 함수의 감음수(winding number)가 분류한다.

# 성질

## 함자성과 호모토피 불변성

대합을 보존하는 준동형 $\varphi\colon A\to B$ 는 $\lbrack p\rbrack\mapsto\lbrack\varphi(p)\rbrack$ 와 $\lbrack u\rbrack\mapsto\lbrack\varphi(u)\rbrack$ 로 군 준동형 $\varphi\_\ast$ 를 준다. 경로로 이어지는 두 준동형은 같은 $\varphi\_\ast$ 를 준다. $K_0$ 과 $K_1$ 은 직합을 직합으로 보내고 귀납극한과 교환한다.

## 6항 완전열

닫힌 아이디얼 $I\subset A$ 에 대해 $0\to I\to A\to A/I\to 0$ 은 다음 6항 [완전열](exact-sequences.md)(six-term exact sequence)을 준다[^1].

$$
\begin{array}{ccccc}
K_0(I) & \longrightarrow & K_0(A) & \longrightarrow & K_0(A/I)\cr
\uparrow\partial_1 & & & & \downarrow\partial_0\cr
K_1(A/I) & \longleftarrow & K_1(A) & \longleftarrow & K_1(I)
\end{array}
$$

$\partial_1$ 을 지표 사상(index map)이라 한다. $u\in A/I$ 가 유니터리이고 그 올림 $v\in A$ 가 부분 등거리이면 $\partial_1\lbrack u\rbrack=\lbrack 1-v^\ast v\rbrack-\lbrack 1-vv^\ast\rbrack$ 이다. $\partial_0$ 은 지수 사상(exponential map)이다.

$A=\mathcal B(H)$, $I=\mathcal K(H)$ 이면 $K_0(\mathcal K(H))=\mathbb Z$ 이고 $\partial_1$ 은 Calkin 대수의 가역원 $\pi(T)$ 를 $\mathrm{ind}(T)$ 로 보낸다. 직관 절의 $S$ 에서 $\partial_1\lbrack\pi(S)\rbrack=\lbrack 0\rbrack-\lbrack e_0\rbrack=-1$ 이다.

## Bott 주기성

$A$ 의 현수(suspension) $SA=C_0((0,1),A)$ 에 대해 $K_1(A)\cong K_0(SA)$ 는 정의에서 바로 나온다. **[Bott 주기성](bott-periodicity.md)(Bott periodicity)** 은 다음 동형이다[^1].

$$
K_0(A)\cong K_1(SA)
$$

그래서 $K_{i+1}(A)=K_i(SA)$ 로 놓으면 $K_{i+2}(A)\cong K_i(A)$ 이고 군은 두 개뿐이다. 6항 완전열이 고리 모양으로 닫히는 것도 이 동형 때문이다.

Toeplitz 확대(Toeplitz extension) $0\to\mathcal K\to\mathcal T\to C(S^1)\to 0$ 에서 $\partial_1$ 이 생성원 $z$ 를 $-1$ 로 보낸다. 이 계산이 Bott 주기성의 한 증명에 쓰인다.

## Pimsner–Voiculescu 완전열

$\alpha$ 가 $A$ 의 자기동형이면 정수군 $\mathbb Z$ 의 작용으로 [교차곱](crossed-products.md)(crossed product) $A\rtimes_\alpha\mathbb Z$ 가 정의된다. 그 K 군은 다음 6항 완전열에서 계산된다[^2].

$$
\begin{array}{ccccc}
K_0(A) & \xrightarrow{1-\alpha\_\ast} & K_0(A) & \longrightarrow & K_0(A\rtimes_\alpha\mathbb Z)\cr
\uparrow & & & & \downarrow\cr
K_1(A\rtimes_\alpha\mathbb Z) & \longleftarrow & K_1(A) & \xleftarrow{1-\alpha\_\ast} & K_1(A)
\end{array}
$$

$A=C(S^1)$ 이고 $\alpha$ 가 각 $2\pi\theta$ 회전이면 교차곱은 무리수 회전 대수(irrational rotation algebra) $A_\theta$ 다. 회전은 $S^1$ 의 항등사상과 호모토픽이라 $\alpha\_\ast$ 가 항등이고, 위 열에서 $K_0(A_\theta)\cong\mathbb Z^2$, $K_1(A_\theta)\cong\mathbb Z^2$ 이 나온다.

# 활용

- 위상 K 이론. 콤팩트 공간 $X$ 위의 [벡터다발](vector-bundles.md)은 $C(X)$ 위의 유한생성 [사영가군](projective-modules.md)과 대응하고(Serre–Swan 정리), 그 결과 $K_0(C(X))=K^0(X)$ 다. [대수적 K 이론](algebraic-k-theory.md)의 $K_0$ 도 같은 사영가군의 Grothendieck 군이다.
- [지표 정리](index-theorem.md). 타원 작용소의 주기호가 $K^0$ 의 원소를 주고, 해석적 지표는 위 지표 사상의 값이다.
- 분류. 유한차원 C 스타 대수의 귀납극한인 AF 대수(approximately finite-dimensional algebra)는 순서를 준 $K_0$ 군으로 동형류가 결정된다(Elliott 정리)[^3].
- [von Neumann 대수](von-neumann-algebras.md)와의 비교. 무한차원 $\mathcal B(H)$ 처럼 사영이 많은 대수는 K 군이 $0$ 이 되고, K 이론은 노름으로만 닫은 대수에서 정보를 준다.

[^1]: M. Rørdam, F. Larsen, N. Laustsen, *An Introduction to K-Theory for C\*-Algebras*, Cambridge University Press (2000), 9장(6항 완전열)과 11장(Bott 주기성).
[^2]: M. Pimsner, D. Voiculescu, Exact sequences for K-groups and Ext-groups of certain cross-product C\*-algebras, *J. Operator Theory* 4 (1980), 93–118.
[^3]: G. Elliott, On the classification of inductive limits of sequences of semisimple finite-dimensional algebras, *J. Algebra* 38 (1976), 29–44.

# 연관 문서

## 선수지식

- [C 스타 대수](c-star-algebras.md)
- [Fredholm 작용소](fredholm-operators.md)

## 더 알아보기

- [Baum–Connes 추측](baum-connes-conjecture.md)

#functional_analysis #topology #algebraic_topology #algebra
