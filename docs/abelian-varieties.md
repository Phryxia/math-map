# 아벨 다양체

# 개요

**아벨 다양체(abelian variety)** 는 다항식으로 정의되고 점끼리 더할 수 있는 닫힌 도형이다. [타원곡선](elliptic-curves.md) $y^2=x^3-x$ 위의 두 점을 잇는 직선이 곡선과 만나는 셋째 점을 $x$ 축에 대해 뒤집으면 두 점의 합이 나오지만, 구멍이 둘 이상인 곡선에는 이런 덧셈이 없다. 아벨 다양체는 이 덧셈을 고차원으로 넓힌 대상이고, 구멍이 $g$ 개인 곡선의 점들의 형식적 합을 $g$ 차원 아벨 다양체의 점으로 다룬다.

# 직관

타원곡선 $y^2=x^3+ax+b$ 에서 두 점 $P,Q$ 의 합은 두 점을 지나는 직선이 만나는 세 번째 점을 $x$ 축에 대해 반사한 것이다. 같은 계산을 $y^2=f(x)$ 에서 $f$ 의 차수가 $5$ 인 곡선으로 해 본다. $P,Q$ 를 지나는 직선 $y=\alpha x+\beta$ 를 곡선에 넣으면 $(\alpha x+\beta)^2=f(x)$ 이고, 좌변이 $2$ 차 우변이 $5$ 차이므로 근이 다섯 개다. 그 가운데 둘이 $P$ 와 $Q$ 의 $x$ 좌표이고 세 개가 남아, 삼차 곡선처럼 남는 점 하나를 합으로 삼을 근거가 없다.

점 하나로 답하는 것을 그만두고 점의 형식적 합을 쓴다. 곡선의 점에 정수 계수를 붙여 더한 것이 divisor 이고, 무한원점을 $\infty$ 로 적어 점 $P$ 를 $P-\infty$ 로 바꾼다. 위 직선은 곡선 위의 유리함수이고 그 영점과 극을 모으면 $P+Q+R_1+R_2+R_3-5\infty$ 이므로, 유리함수에서 온 divisor 를 $0$ 으로 놓으면 두 점의 합이 divisor 들 안에서 정해진다.

$$
(P-\infty)+(Q-\infty)=-(R_1-\infty)-(R_2-\infty)-(R_3-\infty)
$$

# 정의

## 군다양체

**아벨 다양체** 는 체 $k$ 위의 연결 완비 군다양체(group variety)다. 곧 연결 완비 다양체 $A$ 와 사상

$$
m:A\times A\to A,\qquad i:A\to A
$$

와 점 $e\in A(k)$ 가 있어 $m$ 이 결합법칙을, $e$ 가 항등원을, $i$ 가 역원을 주고 $m$ 과 $i$ 가 다양체의 사상인 것이다. 차원을 $g$ 로 적는다.

**완비(complete)** 는 임의의 다양체 $T$ 에 대해 사영 $A\times T\to T$ 가 닫힌 집합을 닫힌 집합으로 보낸다는 조건이다.

타원곡선 $y^2=x^3-x$ 에서 $e$ 는 무한원점, $m$ 은 개요의 직선 덧셈, $i$ 는 $(x,y)\mapsto(x,-y)$ 다. 두 사상 모두 좌표의 유리식으로 적히므로 다양체의 사상이고, 이 곡선은 $g=1$ 인 아벨 다양체다.

종수 $2$ 곡선에서는 계수의 합이 $0$ 인 divisor 를 유리함수의 divisor 로 나눈 몫이 아벨 다양체다. 직관 절의 식이 $m$ 이고, 그 원소가 전부 $P_1+P_2-2\infty$ 꼴이어서 차원이 $2$ 다.

## Riemann 관계

$\Lambda$ 가 $\mathbb C^g$ 안의 계수 $2g$ 격자일 때 복소 토러스(complex torus) $\mathbb C^g/\Lambda$ 위의 **Riemann 관계(Riemann relations)** 는 교대형식 $E:\Lambda\times\Lambda\to\mathbb Z$ 가

$$
E(ix,iy)=E(x,y),\qquad E(x,ix)\gt 0\thickspace(x\ne0)
$$

를 만족한다는 조건이다. 여기서 $E$ 는 $\Lambda\otimes\mathbb R=\mathbb C^g$ 로 실선형으로 늘려 본다.

$g=1$ 이고 $\Lambda=\mathbb Z+\mathbb Z\tau$, $\mathrm{Im}\thinspace\tau\gt 0$ 이면 $E(x,y)=\mathrm{Im}(\bar xy)/\mathrm{Im}\thinspace\tau$ 로 둔다. $E(a+b\tau,c+d\tau)=ad-bc$ 이므로 정수값이고, $E(x,ix)=\vert x\vert^2/\mathrm{Im}\thinspace\tau\gt 0$ 이다.

## 동종사상

전사이고 핵이 유한군인 사상 $f:A\to B$ 를 **동종사상(isogeny)** 이라 하고, 핵의 원소 수를 그 **차수(degree)** 라 한다.

$y^2=x^3-x$ 에서 $2$ 배 사상 $\lbrack 2\rbrack$ 의 핵은 무한원점과 $y=0$ 인 세 점 $(0,0),(1,0),(-1,0)$ 이다. $\lbrack 2\rbrack$ 는 차수 $4$ 인 동종사상이다.

소수 $\ell\ne\mathrm{char}\thinspace k$ 에 대해 $A\lbrack n\rbrack$ 을 $\lbrack n\rbrack$ 의 핵이라 할 때

$$
T_\ell A=\varprojlim_n A\lbrack \ell^n\rbrack(\bar k)
$$

를 **Tate 가군(Tate module)** 이라 한다. 원소는 $\ell P_{n+1}=P_n$ 을 만족하는 점열 $(P_1,P_2,\dots)$, $P_n\in A\lbrack \ell^n\rbrack$ 이다. 위 곡선에서 $\ell=2$ 이면 $P_1$ 은 $A\lbrack 2\rbrack$ 의 네 점 가운데 하나이고, $P_2$ 는 $2P_2=P_1$ 인 점이다.

## 쌍대와 편극

$A$ 위에서 대수적으로 자명한 선다발들이 이루는 군 $\mathrm{Pic}^0(A)$ 는 $g$ 차원 아벨 다양체의 점들로 주어지고, 그 아벨 다양체를 **쌍대 아벨 다양체(dual abelian variety)** $\hat A$ 라 한다.

선다발 $L$ 은 사상

$$
\varphi_L:A\to\hat A,\qquad x\mapsto t_x^\ast L\otimes L^{-1}
$$

를 준다. $t_x$ 는 $x$ 만큼의 평행이동이다. $L$ 이 충분(ample)하면 $\varphi_L$ 이 동종사상이고, 이때 $\varphi_L$ 을 **편극(polarization)** 이라 한다. $\varphi_L$ 이 동형이면 **주편극(principal polarization)** 이다.

타원곡선 $E$ 와 $L=\mathcal O(\infty)$ 이면 $t_x^\ast L\otimes L^{-1}$ 은 divisor $(-x)-\infty$ 의 선다발이다. 점 $P$ 를 $P-\infty$ 의 류로 보내는 대응이 $E$ 와 $\mathrm{Pic}^0(E)$ 사이의 전단사이므로 $\varphi_L$ 은 동형이고, $L$ 은 주편극을 준다.

# 성질

## 사영성

아벨 다양체는 모두 [사영다양체](projective-varieties.md)다. 충분한 선다발이 존재하므로 사영공간에 묻힌다.

## 복소 토러스

$k=\mathbb C$ 이면 $A$ 의 복소점은 $\mathbb C^g/\Lambda$ 이고, $\Lambda$ 는 계수 $2g$ 격자다. 거꾸로 복소 토러스 $\mathbb C^g/\Lambda$ 는 Riemann 관계를 만족하는 $E$ 가 존재할 때만 아벨 다양체다. $g=1$ 이면 정의 절의 $E$ 가 모든 격자에서 관계를 만족하지만, $g\ge2$ 이면 관계를 만족하지 않는 격자가 존재한다.

## n 배 사상

동종사상 $A\to B$ 가 존재하면 $\dim A=\dim B$ 다. 정수 $n$ 배 사상 $\lbrack n\rbrack:A\to A$ 는 차수 $n^{2g}$ 인 동종사상이다. $n$ 이 $\mathrm{char}\thinspace k$ 와 서로소이면

$$
A\lbrack n\rbrack(\bar k)\cong(\mathbb Z/n\mathbb Z)^{2g}
$$

이다. 그러므로 $T_\ell A$ 는 $\mathbb Z_\ell$ 위의 계수 $2g$ 자유가군이다. $k$ 의 절대 [Galois 군](galois-theory.md) $G_k$ 가 이 가군에 작용해 $2g$ 차원 [Galois 표현](galois-representations.md)을 준다.

## 강체성 보조정리

**보조정리.** $X$ 가 완비이고 $f:X\times Y\to Z$ 가 사상이며 어떤 $y_0$ 에 대해 $f(X\times\lbrace y_0\rbrace)$ 가 한 점이면, $f$ 는 첫 인자에 의존하지 않는다.

$z_0=f(X\times\lbrace y_0\rbrace)$ 의 아핀 근방 $U$ 를 잡고 닫힌 집합 $W=f^{-1}(Z\setminus U)$ 를 본다. $X$ 가 완비이므로 $W$ 의 $Y$ 로의 상이 닫혀 있고 $y_0$ 을 포함하지 않는다. 그 여집합의 점 $y$ 에서 $f(X\times\lbrace y\rbrace)$ 는 아핀 $U$ 에 들어가는 완비 다양체의 상이므로 한 점이다. ∎

**정리.** 아벨 다양체의 군 연산은 교환적이다.

$\varphi(x,y)=m(m(x,y),i(m(y,x)))$ 로 두면 $\varphi(x,e)=e$ 가 모든 $x$ 에서 성립한다. 보조정리로 $\varphi$ 가 $x$ 에 의존하지 않고, $x=e$ 를 넣으면 $\varphi\equiv e$ 다. ∎

군이 교환적이므로 연산을 덧셈으로 적는다.

## Poincaré 완전가약성

**정리.** 아벨 부분다양체 $B\subset A$ 에 대해 아벨 부분다양체 $C\subset A$ 가 있어 덧셈 사상 $B\times C\to A$ 가 동종사상이다.[^1]

$\hat A\to\hat B$ 를 $B$ 로 제한한 사상의 핵에서 연결 성분을 $C$ 로 잡으면 $B\cap C$ 가 유한이고 차원이 맞는다. ∎

**따름정리.** 모든 아벨 다양체는 단순 아벨 다양체들의 곱과 동종이다. 단순은 자명하지 않은 아벨 부분다양체가 없다는 뜻이다. 그러므로 $\mathrm{End}(A)\otimes\mathbb Q$ 는 반단순 대수다.

## 사상과 Tate 가군

**정리.** $k$ 가 유한체이거나 수체이고 $\ell\ne\mathrm{char}\thinspace k$ 이면

$$
\mathrm{Hom}(A,B)\otimes\mathbb Z_\ell\longrightarrow\mathrm{Hom}\_{G_k}(T_\ell A,T_\ell B)
$$

가 동형이다.[^2]

두 아벨 다양체 사이의 사상이 Galois 작용을 보존하는 Tate 가군의 사상으로 모두 나온다. 유한체 위의 판본이 Tate 의 정리이고 수체 위의 판본이 Faltings 의 정리다.

## 차원 1

차원이 $1$ 인 아벨 다양체는 유리점을 가진 종수 $1$ 곡선, 곧 타원곡선이다. 위 정의의 군 연산이 현과 접선의 덧셈과 일치한다.

# 활용

- **Jacobi 다양체.** 종수 $g$ 곡선 $X$ 에 대해 차수 $0$ 인 divisor 류의 군 $\mathrm{Pic}^0(X)$ 가 $g$ 차원 주편극 아벨 다양체다. 직관 절의 구성이 $g=2$ 인 경우이고, [Jacobi 다양체](jacobian-variety.md)의 정의 절이 복소해석 쪽에서 같은 대상을 만든다.
- **Mordell–Weil 정리.** 수체 $K$ 위의 아벨 다양체 $A$ 에 대해 $A(K)$ 가 유한생성 아벨군이다. 타원곡선 판본과 그 증명에 쓰는 높이 함수가 [Néron–Tate 높이](canonical-height.md)의 주제다.
- **모듈러 아벨 다양체.** 준위 $N$ 의 새형식 $f$ 에 Hecke 아이디얼로 $J_0(N)$ 을 나눈 아벨 다양체 $A_f$ 가 대응한다. 이 몫 위에서 유리점의 유한성을 보이는 것이 [Kolyvagin–Logachev 정리](kolyvagin-logachev.md)다.
- **Manin–Mumford 추측.** $A$ 안의 곡선이 아벨 부분다양체의 이동이 아니면 그 위의 꼬임점이 유한 개다. [Pila–Wilkie 정리](pila-wilkie-theorem.md)의 활용 절이 증명의 얼개를 적는다.
- **함수체 위의 Mordell–Lang.** 아벨 다양체의 부분군과 부분다양체의 교집합을 모형론의 갈래짓기 독립으로 분석한다. [안정 이론](stable-theories.md)의 활용 절이 이 논법을 든다.

[^1]: Mumford, *Abelian Varieties*, §19. 완전가약성 정리와 자기준동형 대수의 반단순성이 이 절에 있다.
[^2]: Tate, "Endomorphisms of abelian varieties over finite fields", *Invent. Math.* 2 (1966); Faltings, "Endlichkeitssätze für abelsche Varietäten über Zahlkörpern", *Invent. Math.* 73 (1983).

# 연관 문서

## 선수지식

- [타원곡선](elliptic-curves.md)
- [사영다양체](projective-varieties.md)

## 더 알아보기

- [Siegel 모듈라이 다양체](siegel-modular-variety.md)
- [Faltings 정리](faltings-theorem.md)
- [Mordell–Lang 추측](mordell-lang.md)
- [Néron 모델](neron-models.md)

#algebra #number_theory #complex_analysis
