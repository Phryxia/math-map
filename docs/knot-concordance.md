# 매듭 콩코던스

# 개요

**매듭 콩코던스(knot concordance)** 는 $S^3$ 의 두 매듭 $K_0$, $K_1$ 이 $S^3\times\lbrack 0,1\rbrack$ 안에 매끄럽게 매장된 고리면(annulus)의 양 끝일 때 성립하는 동치관계다. 동치류들은 연결합으로 아벨군을 이루고 이를 콩코던스 군(concordance group) $\mathcal C$ 라 한다. $\mathcal C$ 의 항등원은 4 차원 공 $B^4$ 안에 매장된 원판의 경계가 되는 매듭, 곧 슬라이스 매듭이다.

# 직관

매듭은 연결합 $\mathbin{\char35}$ 으로 더할 수 있다. 두 매듭에서 작은 호를 하나씩 잘라 내고 끝을 이어 붙이는 연산이다. 풀린 매듭이 항등원이지만 역원은 없다. 매듭이 경계가 되는 $S^3$ 안의 곡면의 최소 종수(genus)가 연결합에서 더해지므로, 종수가 양수인 매듭에 무엇을 더해도 풀린 매듭이 되지 않는다.

역원을 얻으려고 네 번째 차원을 쓴다. $K$ 의 거울상의 방향을 뒤집은 매듭을 $-K$ 라 하자. $K\mathbin{\char35}(-K)$ 는 $S^3$ 안에서는 풀리지 않지만, $B^4$ 안에서는 원판의 경계가 된다. $K$ 를 공 $B^3$ 안의 매듭진 호로 보고 이 호를 $B^3$ 의 경계를 축으로 반 바퀴 돌리면 $B^4$ 안의 원판이 생기고, 그 경계가 $K\mathbin{\char35}(-K)$ 이기 때문이다.

그래서 "$B^4$ 안의 원판의 경계가 된다" 를 0 으로 보면 $-K$ 가 $K$ 의 역원이 된다. 이 생각을 두 매듭 사이의 관계로 쓴 것이 콩코던스다.

# 정의

$S^3$ 의 방향을 준 두 매듭 $K_0$, $K_1$ 에 대해 매끄럽게 매장된 고리면 $A\cong S^1\times\lbrack 0,1\rbrack$ 이 있어 $A\subset S^3\times\lbrack 0,1\rbrack$ 이고 $\partial A=K_0\times\lbrace 0\rbrace\sqcup(-K_1)\times\lbrace 1\rbrace$ 이면 $K_0$ 과 $K_1$ 이 **콩코던트(concordant)** 하다고 한다.

$K$ 가 $B^4$ 안에 매끄럽게 매장된 원판 $D$ 의 경계 $\partial D=K\subset S^3=\partial B^4$ 이면 $K$ 를 **슬라이스 매듭(slice knot)** 이라 한다. $K$ 가 풀린 매듭과 콩코던트한 것과 슬라이스인 것은 동치다.

$K$ 가 경계가 되는 $B^4$ 안의 매끄러운 곡면의 최소 종수를 **4 차원 종수(slice genus)** $g_4(K)$ 라 한다. 슬라이스는 $g_4(K)=0$ 이다.

# 성질

## 군 구조

콩코던스류의 집합 $\mathcal C$ 는 연결합 $\lbrack K\rbrack+\lbrack J\rbrack=\lbrack K\mathbin{\char35}J\rbrack$ 으로 아벨군이고, 항등원은 슬라이스 매듭의 류, $\lbrack K\rbrack$ 의 역원은 $\lbrack -K\rbrack$ 이다. 역원은 직관 절의 원판이 준다.

## Seifert 행렬과 부호수

$K$ 가 경계인 $S^3$ 안의 방향을 준 곡면 $F$ 를 Seifert 곡면(Seifert surface)이라 한다. $H_1(F)$ 의 기저 $a_1,\dots,a_{2g}$ 와 $a_j$ 를 $F$ 의 양의 법선 방향으로 조금 민 $a_j^+$ 에 대해 $V_{ij}=\mathrm{lk}(a_i,a_j^+)$ 로 둔 정수 행렬 $V$ 를 Seifert 행렬(Seifert matrix)이라 한다. 여기서 $\mathrm{lk}$ 는 두 닫힌 곡선의 꼬임수다.

$$
\sigma(K)=\mathrm{sign}(V+V^{T}),\qquad\Delta_K(t)=\det(V-tV^{T})
$$

를 각각 부호수(signature)와 Alexander 다항식(Alexander polynomial)이라 한다. 둘 다 $F$ 의 선택에 의존하지 않는다($\Delta_K$ 는 $\pm t^k$ 배를 빼고).

부호수는 콩코던스 불변량이고 군 준동형 $\sigma\colon\mathcal C\to\mathbb Z$ 이며 $\vert\sigma(K)\vert\le 2g_4(K)$ 를 만족한다[^1]. 삼엽매듭은 $\sigma=\pm 2$ 이므로 슬라이스가 아니고 $\mathcal C$ 에서 위수가 무한이다.

## Fox–Milnor 조건

$K$ 가 슬라이스이면 정수 계수 다항식 $f$ 가 있어 $\pm t^k$ 배를 빼고 $\Delta_K(t)=f(t)f(t^{-1})$ 이다[^2].

8 자 매듭의 Alexander 다항식은 $-t+3-t^{-1}$ 이다. $f=a+bt$ 이면 $f(t)f(t^{-1})=a^2+b^2+ab(t+t^{-1})$ 이므로 $ab=-1$, $a^2+b^2=3$ 이어야 하는데 정수해가 없다. 그래서 8 자 매듭은 슬라이스가 아니다. 8 자 매듭은 $-K$ 와 동위이므로 $\mathcal C$ 에서 위수가 $2$ 다.

## 위상적 콩코던스와 매끄러운 콩코던스

정의에서 "매끄럽게" 를 "국소적으로 평평하게" 로 바꾸면 위상적 콩코던스 군 $\mathcal C\_{\mathrm{top}}$ 이 나오고 $\mathcal C\to\mathcal C\_{\mathrm{top}}$ 은 전사다. [Freedman 정리](freedman-theorem.md)의 방법으로 Alexander 다항식이 $1$ 인 매듭은 위상적으로 슬라이스다[^3]. 오른손 삼엽매듭의 양의 Whitehead 이중(Whitehead double)은 Alexander 다항식이 $1$ 이지만 매끄럽게 슬라이스가 아니다[^4]. 이 차이에서 $\mathbb R^4$ 와 위상동형이지만 미분동형이 아닌 매끄러운 구조가 존재한다는 것이 나온다.

부호수와 Alexander 다항식은 위상적 콩코던스 불변량이므로 이 차이를 잡지 못한다. 매끄러운 쪽에만 있는 불변량이 [Khovanov 호몰로지](khovanov-homology.md)의 Rasmussen 불변량(Rasmussen invariant) $s$ 다. $s\colon\mathcal C\to 2\mathbb Z$ 는 군 준동형이고 $\vert s(K)\vert\le 2g_4(K)$ 이다.

# 활용

- Milnor 추측. $(p,q)$ 원환 매듭은 $s=(p-1)(q-1)$ 이고 $S^3$ 안에서 종수 $(p-1)(q-1)/2$ 인 곡면의 경계이므로 $g_4=(p-1)(q-1)/2$ 다.
- 4 차원 위상. 위상적으로 슬라이스이지만 매끄럽게 슬라이스가 아닌 매듭 하나가 $\mathbb R^4$ 의 이색적 구조를 주므로, $s$ 처럼 매끄러운 콩코던스 불변량이 4 차원의 매끄러운 위상과 위상적 위상을 가르는 데 쓰인다.
- 매듭의 4 차원 종수. 부호수, $s$ 를 비롯한 준동형 $\mathcal C\to\mathbb Z$ 들이 $g_4$ 의 하한을 주고, 이 하한과 실제 곡면의 종수를 맞추어 $g_4$ 를 계산한다.

[^1]: K. Murasugi, On a certain numerical invariant of link types, *Trans. Amer. Math. Soc.* **117** (1965), 387–422.
[^2]: R. Fox, J. Milnor, Singularities of 2-spheres in 4-space and cobordism of knots, *Osaka J. Math.* **3** (1966), 257–267.
[^3]: M. Freedman, F. Quinn, *Topology of 4-Manifolds*, Princeton University Press (1990), 11.7절.
[^4]: L. Rudolph, Quasipositivity as an obstruction to sliceness, *Bull. Amer. Math. Soc.* **29** (1993), 51–59.

# 연관 문서

## 선수지식

- [매듭 불변량](knot-invariants.md)
- [Khovanov 호몰로지](khovanov-homology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #algebraic_topology
