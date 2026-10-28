# 클러스터 대수

# 개요

**클러스터 대수(cluster algebra)** 는 변수 몇 개에서 시작해 정해진 교환 규칙으로 새 변수를 계속 만들 때, 그 변수들이 생성하는 가환환이다. 점화식 $x_{m+1}=(x_m+1)/x_{m-1}$ 으로 $x_1,x_2$ 에서 수열을 만들면 매번 나눗셈을 하는데도 $x_3,x_4,x_5$ 가 모두 $x_1,x_2$ 의 Laurent 다항식이고, $x_6$ 에서 처음 값 $x_1$ 로 돌아온다. 클러스터 대수는 이런 교환을 변이(mutation)라는 규칙으로 정해 두고, 변수가 유한 개인 경우를 [근계](root-systems.md)의 Dynkin 도형으로 분류한다.

# 직관

클러스터 대수는 유리함수체 안에서 초기 변수 $n$ 개로 출발해 변이라는 교환 규칙을 되풀이해 얻는 변수 전부로 생성한 가환환이다. Fomin 과 Zelevinsky 가 2002 년에 정의했다[^1].

변이는 변수 하나를 "두 단항식의 합을 그 변수로 나눈 것" 으로 바꾼다. 나눗셈을 되풀이하는데도 모든 변수가 초기 변수의 Laurent 다항식이라는 것이 Laurent 현상(Laurent phenomenon)이다. 변수가 유한 개인 클러스터 대수는 근계의 Dynkin 도형으로 분류된다.

수열 $x_1,x_2,x_3,\dots$ 를 다음 점화식으로 정한다.

$$
x_{m+1}=\frac{x_m+1}{x_{m-1}}
$$

$x_1=a$, $x_2=b$ 로 두고 계산한다.

$$
x_3=\frac{b+1}{a},\qquad x_4=\frac{a+b+1}{ab},\qquad x_5=\frac{a+1}{b},\qquad x_6=a,\qquad x_7=b
$$

$x_5$ 는 $x_5=(x_4+1)/x_3$ 에서 분자가 $(a+1)(b+1)/(ab)$ 로 인수분해되어 분모의 $b+1$ 이 약분된 결과다. 수열은 주기 $5$ 로 되풀이된다.

두 가지가 눈에 띈다. 매 단계 $a+b+1$ 같은 다항식으로 나누었는데도 다섯 항이 모두 분모가 $a$ 와 $b$ 의 단항식인 식, 곧 Laurent 다항식이다. 그리고 서로 다른 항은 다섯 개뿐이다. 클러스터 대수는 이런 점화식을 변수 여러 개로 늘린 틀이고, 위 두 관찰이 각각 Laurent 현상과 유한형 분류가 된다.

# 정의

## 시드와 변이

$\mathcal F=\mathbb Q(u_1,\dots,u_n)$ 을 유리함수체라 한다. **시드(seed)** 는 쌍 $(\mathbf x,B)$ 다.

- $\mathbf x=(x_1,\dots,x_n)$ 은 $\mathcal F$ 를 $\mathbb Q$ 위에서 생성하는 대수적으로 독립인 원소들이고, 이것을 **클러스터(cluster)** 라 한다.
- $B=(b_{ij})$ 는 정수 $n\times n$ 행렬이고, 양의 대각행렬 $D$ 가 있어 $DB$ 가 교대행렬이다. 이것을 **교환 행렬(exchange matrix)** 이라 한다.

$k\in\lbrace 1,\dots,n\rbrace$ 방향의 **변이** $\mu_k$ 는 시드 $(\mathbf x,B)$ 를 $(\mathbf x^\prime,B^\prime)$ 으로 보낸다. $x_k$ 만 바뀌고 다른 $x_i$ 는 그대로다.

$$
x_k x_k^\prime=\prod_{b_{ik}\gt 0}x_i^{b_{ik}}+\prod_{b_{ik}\lt 0}x_i^{-b_{ik}}
$$

$$
b_{ij}^\prime=\begin{cases}-b_{ij} & i=k\text{ 또는 }j=k\cr b_{ij}+\dfrac{\vert b_{ik}\vert b_{kj}+b_{ik}\vert b_{kj}\vert}{2} & \text{그 밖}\end{cases}
$$

첫 식이 **교환 관계(exchange relation)** 다. $\mu_k$ 를 두 번 하면 처음 시드로 돌아온다.

## 클러스터 대수

초기 시드에서 변이를 유한 번 해서 닿는 시드 전부의 클러스터에 나오는 원소를 **클러스터 변수(cluster variable)** 라 한다. 클러스터 변수 전부로 생성한 $\mathcal F$ 의 $\mathbb Z$ 부분대수가 클러스터 대수 $\mathcal A(B)$ 다.

$B$ 가 교대행렬이면 $B$ 를 꼭짓점 $1,\dots,n$ 위의 화살표 그림으로 적는다. $b_{ij}\gt 0$ 이면 $i$ 에서 $j$ 로 화살표 $b_{ij}$ 개를 긋는다. 이 그림이 **화살집(quiver)** 이다. 꼭짓점 $k$ 에서의 변이는 화살집에서 다음 셋으로 적힌다.

1. 경로 $i\to k\to j$ 마다 화살표 $i\to j$ 를 하나 더한다.
2. $k$ 에 닿는 화살표의 방향을 모두 뒤집는다.
3. 길이 $2$ 인 순환 $i\to j\to i$ 를 생기는 대로 지운다.

직관 절의 점화식은 $n=2$, $B=\begin{pmatrix}0&1\cr -1&0\end{pmatrix}$ 에서 $\mu_1$ 과 $\mu_2$ 를 번갈아 한 것이다. 교환 관계가 $x_1x_1^\prime=1+x_2$ 와 $x_2x_2^\prime=x_1^\prime+1$ 이 된다.

# 성질

## Laurent 현상

> **정리 (Fomin–Zelevinsky).** 클러스터 대수의 모든 클러스터 변수는 임의의 클러스터 $(x_1,\dots,x_n)$ 의 정수 계수 Laurent 다항식이다[^1].

$$
\mathcal A(B)\subseteq\mathbb Z\lbrack x_1^{\pm 1},\dots,x_n^{\pm 1}\rbrack
$$

증명의 요지. 변이 세 번 $\mu_k\mu_j\mu_k$ 근처를 보는 국소 계산으로 귀납한다. 새 변수의 분모로 나올 수 있는 다항식이 인접한 두 교환 관계에서 서로소임을 보이고, 그래서 분모가 단항식만 남는다.

계수가 모두 음이 아닌 정수라는 양수성(positivity)은 교대행렬일 때 Lee 와 Schiffler 가[^2], 일반적인 경우 Gross, Hacking, Keel, Kontsevich 가[^3] 증명했다.

## 유한형 분류

$B$ 에서 대각성분이 $2$ 이고 비대각성분이 $-\vert b_{ij}\vert$ 인 행렬 $A(B)$ 를 $B$ 의 Cartan 대응이라 한다.

> **정리 (Fomin–Zelevinsky).** 클러스터 변수가 유한 개인 것과, 변이로 닿는 어떤 시드의 $A(B)$ 가 유한형 Cartan 행렬인 것이 동치다. 유한형 클러스터 대수는 Dynkin 도형 $A_n,B_n,C_n,D_n,E_6,E_7,E_8,F_4,G_2$ 로 분류된다[^4].

이분 꼴의 초기 시드를 잡으면, 초기 변수가 아닌 클러스터 변수는 분모의 지수 벡터로 양의 근과 일대일 대응한다. 그래서 클러스터 변수의 개수는 양의 근의 개수에 랭크(rank) $n$ 을 더한 것이다. 직관 절의 $A_2$ 에서 분모 $a,\thinspace ab,\thinspace b$ 가 양의 근 $\alpha_1,\thinspace\alpha_1+\alpha_2,\thinspace\alpha_2$ 에 대응하고, 클러스터 변수가 $3+2=5$ 개다.

교환 행렬이 $\begin{pmatrix}0&2\cr -2&0\end{pmatrix}$ 이면 $A(B)$ 가 아핀형이고 점화식은 $x_{m+1}x_{m-1}=x_m^2+1$ 이다. $a=b=1$ 에서 $1,1,2,5,13,34,\dots$ 로 항이 끝없이 커지므로 클러스터 변수가 무한 개다. 각 항은 여전히 Laurent 다항식이다.

## 다각형의 삼각분할

$A_n$ 형 클러스터 대수는 볼록 $(n+3)$ 각형으로 실현된다.

- 클러스터 변수는 대각선이고, 개수는 $n(n+3)/2$ 다.
- 클러스터는 삼각분할이고, 개수는 [Catalan 수](catalan-numbers.md) $C_{n+1}$ 이다.
- 변이는 사각형 하나의 대각선을 다른 대각선으로 바꾸는 뒤집기(flip)다.

사각형의 꼭짓점이 차례로 $1,2,3,4$ 이면 교환 관계는 Ptolemy 관계다.

$$
x_{13}x_{24}=x_{12}x_{34}+x_{14}x_{23}
$$

변을 $1$ 로 두면 $A_2$ 의 오각형에서 대각선 다섯 개와 삼각분할 $C_3=5$ 개가 직관 절의 다섯 항과 다섯 클러스터 $\lbrace x_m,x_{m+1}\rbrace$ 다.

# 활용

- **Grassmann 다양체의 좌표환.** [Grassmann 다양체](grassmannian.md) $\mathrm{Gr}(2,n)$ 의 Plücker 좌표 $p_{ij}$ 는 Ptolemy 관계와 같은 꼴의 Plücker 관계를 만족한다. 그래서 $\mathrm{Gr}(2,n)$ 의 동차좌표환이 $A_{n-3}$ 형 클러스터 대수에 경계 변 $p_{i,i+1}$ 을 계수로 붙인 것이다. Scott 은 일반 $\mathrm{Gr}(k,n)$ 의 좌표환에도 클러스터 구조가 있음을 보였다[^5].
- **곡면의 좌표.** [Teichmüller 공간](teichmuller-space.md)에서 구멍 난 곡면의 이상 삼각분할마다 Penner 의 λ 길이(lambda length)가 좌표를 주고, 두 삼각분할 사이의 뒤집기에서 λ 길이가 Ptolemy 관계로 바뀐다. 곡면의 삼각분할이 클러스터를, 뒤집기가 변이를 준다.
- **정확한 WKB.** [정확한 WKB](exact-wkb.md)(Wentzel–Kramers–Brillouin)의 Delabaere–Dillinger–Pham 공식에서 Stokes 그래프가 바뀔 때 Voros 기호가 받는 변환이 클러스터 변이의 꼴이다.

[^1]: S. Fomin, A. Zelevinsky, *Cluster algebras I: Foundations*, J. Amer. Math. Soc. 15 (2002), 497–529.
[^2]: K. Lee, R. Schiffler, *Positivity for cluster algebras*, Ann. of Math. 182 (2015), 73–125.
[^3]: M. Gross, P. Hacking, S. Keel, M. Kontsevich, *Canonical bases for cluster algebras*, J. Amer. Math. Soc. 31 (2018), 497–608.
[^4]: S. Fomin, A. Zelevinsky, *Cluster algebras II: Finite type classification*, Invent. Math. 154 (2003), 63–121.
[^5]: J. Scott, *Grassmannians and cluster algebras*, Proc. London Math. Soc. 92 (2006), 345–380.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)
- [근계](root-systems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #algebra #ring_theory
