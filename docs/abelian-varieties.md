# 아벨 다양체

# 개요

[타원곡선](elliptic-curves.md)은 곡선 위의 점들이 그대로 군을 이룬다. 종수가 $2$ 이상인 곡선에는 이 덧셈이 없다.

**아벨 다양체**는 군 구조를 갖춘 완비 [사영다양체](projective-varieties.md)다. 종수 $g$ 곡선에서 점 대신 점의 형식적 합을 다루면 $g$ 차원 아벨 다양체가 나오고, 타원곡선에서 쓰던 계산이 그 위에서 돌아간다.

# 직관

타원곡선 $y^2=x^3+ax+b$ 에서 두 점 $P,Q$ 의 합은 두 점을 지나는 직선이 만나는 세 번째 점을 $x$ 축에 대해 반사한 것이다. 같은 계산을 $y^2=f(x)$ 에서 $f$ 의 차수가 $5$ 인 곡선으로 해 본다.

$P,Q$ 를 지나는 직선 $y=\alpha x+\beta$ 를 곡선에 넣으면 $(\alpha x+\beta)^2=f(x)$ 이고, 좌변이 $2$ 차 우변이 $5$ 차이므로 근이 다섯 개다. 그 가운데 둘이 $P$ 와 $Q$ 의 $x$ 좌표이고 세 개가 남는다. 삼차 곡선에서는 남는 점이 하나뿐이어서 그것을 합으로 삼았는데, 여기서는 세 점 가운데 어느 것을 $P+Q$ 로 삼을 근거가 없다.

점 하나로 답하는 것을 그만두고 점의 형식적 합을 쓴다. 곡선의 점에 정수 계수를 붙여 더한 것이 divisor 이고, 무한원점을 $\infty$ 로 적어 점 $P$ 를 $P-\infty$ 로 바꾼다. 위 직선은 곡선 위의 유리함수이고 그 영점과 극을 모으면 $P+Q+R_1+R_2+R_3-5\infty$ 다. 유리함수의 영점과 극을 세어 만든 divisor 를 $0$ 으로 놓으면

$$
(P-\infty)+(Q-\infty)=-(R_1-\infty)-(R_2-\infty)-(R_3-\infty)
$$

이 되어 두 점의 합이 divisor 들의 집합 안에서 정해진다.

계수의 합이 $0$ 인 divisor 를 이렇게 나눈 몫은 군이고, 그 원소는 전부 $P_1+P_2-2\infty$ 꼴로 적힌다. 두 점을 고르는 자유도가 $2$ 이고, 실제로 이 군은 $2$ 차원 사영다양체의 점집합과 일치하며 덧셈이 좌표의 다항식으로 주어진다. 군이면서 완비 다양체인 이것을 아벨 다양체라 한다.

# 정의

## 군다양체

아벨 다양체는 체 $k$ 위의 연결 완비 군다양체다. 곧 연결 완비 다양체 $A$ 와 사상

$$
m:A\times A\to A,\qquad i:A\to A
$$

와 점 $e\in A(k)$ 가 있어 $m$ 이 결합법칙을, $e$ 가 항등원을, $i$ 가 역원을 주고 $m$ 과 $i$ 가 다양체의 사상인 것이다. 차원을 $g$ 로 적는다.

완비는 임의의 다양체 $T$ 에 대해 사영 $A\times T\to T$ 가 닫힌 집합을 닫힌 집합으로 보낸다는 조건이다. 아벨 다양체는 모두 사영다양체다.

## 복소 토러스

$k=\mathbb C$ 이면 $A$ 의 복소점은 $\mathbb C^g/\Lambda$ 다. $\Lambda$ 는 $\mathbb C^g$ 안의 계수 $2g$ 격자다.

거꾸로 복소 토러스 $\mathbb C^g/\Lambda$ 가 아벨 다양체가 되는 조건은 교대형식 $E:\Lambda\times\Lambda\to\mathbb Z$ 가 있어

$$
E(ix,iy)=E(x,y),\qquad E(x,ix)\gt 0\thickspace(x\ne0)
$$

를 만족하는 것이다. 이것이 **Riemann 관계**이고, $g=1$ 이면 어떤 격자든 관계를 만족하지만 $g\ge2$ 부터는 만족하지 않는 격자가 대부분이다.

## 동종사상

전사이고 핵이 유한군인 사상 $f:A\to B$ 를 **동종사상**이라 한다. 동종사상이 있으면 두 아벨 다양체의 차원이 같고, 핵의 크기가 그 차수다.

정수 $n$ 배 사상 $\lbrack n\rbrack:A\to A$ 는 동종사상이고 차수가 $n^{2g}$ 다. $n$ 이 $\mathrm{char}\thinspace k$ 와 서로소이면 핵은

$$
A\lbrack n\rbrack(\bar k)\cong(\mathbb Z/n\mathbb Z)^{2g}
$$

이다. 소수 $\ell\ne\mathrm{char}\thinspace k$ 에 대해 $T_\ell A=\varprojlim_n A\lbrack \ell^n\rbrack(\bar k)$ 를 **Tate 가군**이라 하고, $\mathbb Z_\ell$ 위의 계수 $2g$ 자유가군이다. $k$ 의 절대 [Galois 군](galois-theory.md) $G_k$ 가 이 가군에 작용해 $2g$ 차원 [Galois 표현](galois-representations.md)을 준다.

## 쌍대와 편극

$A$ 위에서 대수적으로 자명한 선다발들이 이루는 군 $\mathrm{Pic}^0(A)$ 는 다시 $g$ 차원 아벨 다양체이고, 이것이 **쌍대 아벨 다양체** $\hat A$ 다.

선다발 $L$ 은 사상

$$
\varphi_L:A\to\hat A,\qquad x\mapsto t_x^\ast L\otimes L^{-1}
$$

를 준다. $t_x$ 는 $x$ 만큼의 평행이동이다. $L$ 이 충분하면 $\varphi_L$ 이 동종사상이고, 이때 $\varphi_L$ 을 **편극**이라 한다. 동형이면 **주편극**이다.

# 성질

## 강체성 보조정리

**보조정리.** $X$ 가 완비이고 $f:X\times Y\to Z$ 가 사상이며 어떤 $y_0$ 에 대해 $f(X\times\lbrace y_0\rbrace)$ 가 한 점이면, $f$ 는 첫 인자에 의존하지 않는다.

$z_0=f(X\times\lbrace y_0\rbrace)$ 의 아핀 근방 $U$ 를 잡고 닫힌 집합 $W=f^{-1}(Z\setminus U)$ 를 본다. $X$ 가 완비이므로 $W$ 의 $Y$ 로의 상이 닫혀 있고 $y_0$ 을 품지 않는다. 그 여집합의 점 $y$ 에서 $f(X\times\lbrace y\rbrace)$ 는 아핀 $U$ 에 들어가는 완비 다양체의 상이므로 한 점이다. ∎

**정리.** 아벨 다양체의 군 연산은 교환적이다.

$\varphi(x,y)=m(m(x,y),i(m(y,x)))$ 로 두면 $\varphi(x,e)=e$ 가 모든 $x$ 에서 성립한다. 보조정리로 $\varphi$ 가 $x$ 에 의존하지 않고, $x=e$ 를 넣으면 $\varphi\equiv e$ 다. ∎

군이 교환적이므로 연산을 덧셈으로 적는다.

## Poincaré 완전가약성

**정리.** 아벨 부분다양체 $B\subset A$ 에 대해 아벨 부분다양체 $C\subset A$ 가 있어 덧셈 사상 $B\times C\to A$ 가 동종사상이다.[^1]

$B$ 로의 제한 $\hat A\to\hat B$ 의 핵의 연결 성분을 $C$ 로 잡으면 $B\cap C$ 가 유한이고 차원이 맞는다. ∎

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

#algebra #number_theory #complex_analysis
