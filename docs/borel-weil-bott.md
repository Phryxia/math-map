# Borel–Weil–Bott 정리와 깃발다양체

# 개요

Borel–Weil–Bott 정리는 깃발다양체 $G/B$ 위 직선다발의 코호몰로지를 기약표현으로 계산한다.

[Weyl 지표 공식](weyl-character-formula.md)은 콤팩트 Lie 군의 기약표현을 최고무게로 분류하고 지표를 닫힌 식으로 주지만, 그 벡터공간을 만드는 방법은 주지 않는다. Borel–Weil 정리의 답은 기하적이다. $G$ 를 복소 반단순군, $B$ 를 Borel 부분군이라 하자. 지배적 무게 $\lambda$ 는 $B$ 의 일차원 표현을 주고, 그것으로 $G/B$ 위에 직선다발 $\mathcal L_\lambda$ 를 꼬아 만들면

$$
H^0(G/B,\mathcal L_\lambda)\cong V_\lambda^{\ast}
$$

가 $G$ 가군으로 성립한다. 차원 계산은 [Riemann–Roch](riemann-roch.md) 유형의 코호몰로지 계산이 된다.

Bott 가 1957 년에 $\lambda$ 가 지배적이지 않은 경우를 답했다[^1]. 코호몰로지가 전부 사라지거나, 정확히 한 차수에서만 살아남되 그 차수와 나타나는 표현이 $\lambda$ 를 $\rho$ 이동한 Weyl 군 작용으로 결정된다. 지표 공식의 $\rho$ 이동은 계산 편의가 아니라 코호몰로지 차수를 세는 기하적 양이다.

# 직관

## 깃발다양체의 유래

$G$ 의 표현 $V_\lambda$ 안에서 최고무게 벡터 $v_\lambda$ 는 상수배를 빼면 유일하다. $\mathbb P(V_\lambda)$ 에서 점 $[v_\lambda]$ 를 잡고 $G$ 로 궤도를 돌리면 안정자가 $\lambda$ 를 정의하는 포물형 부분군이다. 일반적인 $\lambda$ 에서는 안정자가 $B$ 이고 궤도는

$$
G/B\hookrightarrow\mathbb P(V_\lambda)
$$

로 닫힌 매장이 된다. $G/B$ 는 최고무게 벡터가 그리는 궤도이고, 직선다발 $\mathcal L_\lambda$ 는 이 매장에서 $\mathcal O(1)$ 을 당긴 것이다.

$G=\mathrm{GL}\_n$ 에서 $G/B$ 는 $\mathbb C^n$ 의 완전 깃발 $0\subset V_1\subset\cdots\subset V_{n-1}\subset\mathbb C^n$ 들의 공간이라 **깃발다양체**라 부른다. $B$ 는 표준 깃발의 안정자다.

## Bott 의 이동 규칙

$\lambda$ 가 지배적이지 않으면 단면이 없어 $H^0=0$ 이지만 높은 차수 코호몰로지는 살아 있을 수 있다. Weyl 군의 **점 작용**

$$
w\cdot\lambda=w(\lambda+\rho)-\rho
$$

을 쓴다. $\rho$ 는 양근 합의 절반이다.

- $\lambda+\rho$ 가 어떤 벽 위에 놓이면, 곧 어떤 근 $\alpha$ 에 대해 $\langle\lambda+\rho,\alpha^\vee\rangle=0$ 이면 모든 차수의 코호몰로지가 $0$ 이다.
- 그렇지 않으면 $w(\lambda+\rho)$ 를 지배적으로 만드는 $w\in W$ 가 유일하게 있고 다음이 성립한다.

$$
H^{\ell(w)}(G/B,\mathcal L_\lambda)\cong V_{w\cdot\lambda}^{\ast},\qquad H^{i}=0\ (i\ne\ell(w))
$$

$\ell(w)$ 는 $w$ 를 단순반사로 쓴 최단 단어의 길이다. $\lambda+\rho$ 를 지배적 방으로 밀어 넣는 데 넘은 벽의 개수가 코호몰로지가 사는 차수다. $\lambda$ 가 이미 지배적이면 $w=e$ 이고 Borel–Weil 로 되돌아온다.

무게 $\lambda$ 자체의 Weyl 대칭은 벽 위의 무게를 고정점으로 갖지만, $\lambda+\rho$ 로 옮기면 지배적 방의 내부로 들어가 정칙 여부가 갈린다. 지표 공식의 $\sum_w(-1)^{\ell(w)}e^{w(\lambda+\rho)}$ 에 붙은 $(-1)^{\ell(w)}$ 가 코호몰로지 차수의 부호다.

## Euler 표수로서의 지표 공식

각 $\lambda$ 에 대해 Euler 표수를 쓰면

$$
\chi(G/B,\mathcal L_\lambda)=\sum_i(-1)^i\mathrm{ch}H^i(G/B,\mathcal L_\lambda)=(-1)^{\ell(w)}\mathrm{ch}V_{w\cdot\lambda}^\ast
$$

이고, 왼쪽은 Atiyah–Bott 고정점 공식이나 등변 Riemann–Roch 로 계산된다. 결과가 Weyl 지표 공식의 우변이다. 교대합 $\sum_w(-1)^{\ell(w)}$ 은 고정점 $wB\in(G/B)^T$ 들의 기여를 모은 것이다.

# 정의

## 깃발다양체

$G$ 를 복소 반단순 대수군, $B\le G$ 를 Borel 부분군(극대 연결 가해 부분군), $T\le B$ 를 극대 원환면이라 하자. 몫 $X=G/B$ 는 매끄러운 사영 대수다양체이고 **깃발다양체**라 한다. 차원은 양근의 개수다.

$$
\dim_{\mathbb C}G/B=|\Phi^+|=\frac{\dim G-\mathrm{rank}G}{2}
$$

$G=\mathrm{SL}\_2$ 면 $G/B=\mathbb P^1$ 이고, $G=\mathrm{SL}\_3$ 면 $G/B$ 는 $\mathbb P^2$ 안의 깃발들이 이루는 3 차원 다양체다.

## 직선다발 $\mathcal L_\lambda$

무게 $\lambda\in X^\ast(T)$ 는 $B\to T\to\mathbb C^\times$ 로 확장되어 $B$ 의 일차원 표현 $\mathbb C_\lambda$ 를 준다. 연관다발

$$
\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}=(G\times\mathbb C)/\lbrace(g,z)\sim(gb,\lambda(b)z)\rbrace
$$

가 $G/B$ 위의 $G$ 등변 직선다발이다. 부호 규약은 $\lambda$ 가 지배적일 때 $\mathcal L_\lambda$ 가 매우 풍부(very ample)해지도록 잡았다.

## Schubert 세포와 Bruhat 순서

$B$ 가 $G/B$ 에 왼쪽에서 작용하고 궤도는 Weyl 군으로 색인된다. 이것이 **Bruhat 분해**다.

$$
G=\bigsqcup_{w\in W}BwB,\qquad G/B=\bigsqcup_{w\in W}C_w,\quad C_w=BwB/B\cong\mathbb C^{\ell(w)}
$$

$C_w$ 가 Schubert 세포, 그 닫힘 $X_w=\overline{C_w}$ 가 Schubert 다양체이고, 닫힘 관계가 **Bruhat 순서**를 정의한다.

$$
X_w=\bigsqcup_{v\le w}C_v
$$

세포가 전부 짝수 실차원이므로 세포 [호몰로지](homology.md)의 경계사상이 모두 $0$ 이다.

$$
H^{2k}(G/B,\mathbb Z)=\bigoplus_{\ell(w)=k}\mathbb Z[X_w],\qquad H^{\text{홀}}=0
$$

Poincaré 다항식은 Weyl 군의 길이 생성함수다.

$$
\sum_k \dim H^{2k}(G/B)\thinspace q^{k}=\sum_{w\in W}q^{\ell(w)}=\prod_{i=1}^{r}\frac{1-q^{d_i}}{1-q}
$$

$d_i$ 는 $W$ 의 기본 불변식 차수다. $\mathrm{SL}\_n$ 에서 $W=S_n$ 이고 우변은 $q$ 계승 $[n]\_q!$ 이다.

# 성질

## 정리 (Borel–Weil–Bott)

$\lambda\in X^\ast(T)$ 에 대해 다음이 성립한다.

1. $\langle\lambda+\rho,\alpha^\vee\rangle=0$ 인 양근 $\alpha$ 가 있으면 모든 $i$ 에 대해 $H^i(G/B,\mathcal L_\lambda)=0$ 이다.
2. 아니면 $w(\lambda+\rho)$ 가 지배적 정칙이 되는 $w\in W$ 가 유일하게 존재하고, $H^{\ell(w)}(G/B,\mathcal L_\lambda)\cong V_{w\cdot\lambda}^{\ast}$ 이며 나머지 차수는 $0$ 이다.

*증명.* $\mathrm{SL}\_2$ 로 환원한다. 단순반사 $s_\alpha$ 에 대응하는 포물형 부분군 $P_\alpha$ 를 잡으면 $G/B\to G/P_\alpha$ 가 $\mathbb P^1$ 다발이고, Leray 스펙트럼열을 쓰면 $\mathbb P^1$ 위 $\mathcal O(n)$ 의 코호몰로지만 알면 된다. $n\ge0$ 이면 $H^0$ 만, $n\le-2$ 이면 $H^1$ 만, $n=-1$ 이면 둘 다 $0$ 이다. 마지막 경우가 벽 위 조건의 국소 판본이고, 다발을 하나씩 통과할 때마다 차수가 하나씩 밀린다.

## 표수 $p$ 에서의 실패

Borel–Weil 의 $H^0$ 부분은 표수 $p$ 인 체 위에서도 성립한다[^2]. $H^0(G/B,\mathcal L_\lambda)$ 는 기약가군의 쌍대가 아니라 **Weyl 가군**의 쌍대를 주고, 기약가군은 그 안의 부분가군으로 나타난다. Bott 의 소멸 부분은 무너져, 지배적이지 않은 $\lambda$ 에 대해 여러 차수에서 동시에 코호몰로지가 살아남는 일이 $p$ 가 작을 때 일어난다.

기약가군의 지표를 묻는 Lusztig 추측, 그 반례를 준 Williamson 의 계산, Schubert 다양체의 교차 코호몰로지를 다루는 Kazhdan–Lusztig 이론이 모두 Bott 정리가 $p$ 에서 틀리는 방식을 재는 작업이다.

## 포물형 판본

$B$ 대신 포물형 부분군 $P$ 를 쓰면 $G/P$ 도 사영다양체이고 같은 정리가 $W$ 를 $W_P$ 로 나눈 잉여류 대표들로 성립한다. $G=\mathrm{GL}\_n$ 이고 $P$ 가 $k$ 차원 부분공간의 안정자이면 $G/P$ 는 Grassmann 다양체 $\mathrm{Gr}(k,n)$ 이고 Schubert 세포 분해가 Schubert 계산이 된다. 코호몰로지환의 구조상수가 Littlewood–Richardson 계수이며 [Schur 다항식](schur-polynomials.md) 조합론과 같은 표를 만든다.

## 무한차원 확장

$G$ 를 아핀 Kac–Moody 군으로 바꾸면 $G/B$ 가 무한차원 아핀 깃발다양체가 되고 같은 정리가 성립한다. 얻는 표현이 아핀 Lie 대수의 적분 최고무게 표현이고, 그 지표가 [모듈러 형식](modular-forms.md)의 성질을 갖는 Weyl–Kac 지표 공식으로 나온다. [기하학적 Satake 대응](geometric-satake.md)은 아핀 Grassmann 다양체 위 층으로 표현범주 전체를 복원한다.

# 활용

## SL(3) 에서의 계산

$A_2$ 근계에서 무게를 기본무게 좌표 $(a,b)$ 로 쓰고, 지배적이지 않은 $\lambda$ 마다 $\lambda+\rho$ 를 지배적 방으로 미는 $w$ 를 찾아 코호몰로지가 사는 차수와 표현을 계산한다. 차원은 $A_2$ 의 Weyl 차원 공식

$$
\dim V_{(a,b)}=\tfrac12(a+1)(b+1)(a+b+2)
$$

로 대조한다.

자명표현이 나오는 자리만 뽑으면 규칙이 보인다.

| $\lambda=(a,b)$ | 코호몰로지 |
|---|---|
| $(0,0)$ | $H^0=V_{(0,0)}^\ast$ , 차원 $1$ |
| $(-2,1)$ | $H^1=V_{(0,0)}^\ast$ , 차원 $1$ |
| $(-3,0)$ | $H^2=V_{(0,0)}^\ast$ , 차원 $1$ |
| $(-2,-2)$ | $H^3=V_{(0,0)}^\ast$ , 차원 $1$ |
| $(-1,0)$ , $(-1,k)$ | 모든 $H^i=0$ |
| $(-4,-4)$ | $H^3=V_{(2,2)}^\ast$ , 차원 $27$ |

같은 표현 $V_0=\mathbb C$ 가 $\ell(w)=0,1,2,3$ 네 차수에서 한 번씩 나타나고, 그때의 $\lambda$ 는 $w\cdot 0=w(\rho)-\rho$ 다. $\lambda=(-1,k)$ 는 $\lambda+\rho$ 의 첫 좌표가 $0$ 이라 항상 벽 위이므로 $k$ 와 무관하게 소멸한다.

차수의 상한은 $\dim G/B=|\Phi^+|=3$ 이고 $\lambda=-2\rho$ 에서 도달한다. $\mathcal L_{-2\rho}$ 가 $G/B$ 의 표준다발이고 $H^3(G/B,K)\cong\mathbb C$ 는 Serre 쌍대성이 주는 값이므로, Bott 규칙이 쌍대성과 맞는다.

## [borel-weil-bott]

- **표현의 실현.** 분류된 $V_\lambda$ 를 함수공간으로 얻는다. 물리에서 스핀 $j$ 표현을 $\mathbb P^1$ 위 $\mathcal O(2j)$ 의 단면으로 보는 것이 $\mathrm{SU}(2)$ 판본이다.
- **Schubert 계산.** $G/P$ 의 코호몰로지환에서 Schubert 류의 곱이 고전 열거기하의 문제를 푼다.
- **Kazhdan–Lusztig 이론.** Schubert 다양체는 특이점을 가지며 그 국소 구조를 재는 것이 KL(Kazhdan–Lusztig) 다항식이다. 표수 $p$ 에서 Bott 정리가 깨지는 방식이 이 다항식으로 기술된다.
- **기하학적 표현론.** 표현을 공간 위 층으로 실현하는 강령의 최초 사례이며, [기하학적 Satake](geometric-satake.md)와 Beilinson–Bernstein 국소화가 이 길을 잇는다.

[^1]: R. Bott, *Homogeneous vector bundles*, Ann. of Math. 66 (1957). 소멸 정리와 이동 규칙의 원전.
[^2]: J. C. Jantzen, *Representations of Algebraic Groups*, 2nd ed., AMS, 2003. 표수 $p$ 에서 무엇이 남고 무엇이 깨지는지에 대한 표준 참고서.

# 연관 문서

## 선수지식

- [Weyl 지표 공식과 최고무게 이론](weyl-character-formula.md)
- [Riemann–Roch 정리](riemann-roch.md)

## 더 알아보기

- [Schubert 계산과 Grassmann 다양체](schubert-calculus.md)
- [Kazhdan–Lusztig 다항식](kazhdan-lusztig.md)
- [Beilinson–Bernstein 국소화](beilinson-bernstein.md)

#algebra #group_theory #differential_geometry #theorem
