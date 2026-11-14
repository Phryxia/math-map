# Manin–Mumford 추측

# 개요

**Manin–Mumford 추측(Manin–Mumford conjecture)** 은 곡선이나 부분다양체 위에 "유한 번 더하면 원점으로 돌아오는 점" 이 얼마나 많이 놓일 수 있는지를 정하는 진술이고, 1983 년에 Raynaud 가 증명했다. 평면의 직선 $x+y=1$ 위에서 $x$ 와 $y$ 가 모두 1 의 거듭제곱근인 점을 찾으면 두 개뿐이다. 이 진술은 이런 점이 무한히 많으려면 부분다양체가 덧셈으로 닫힌 조각을 포함해야 하고, 그 조각을 빼면 남는 점이 유한 개라고 답한다.

# 직관

복소평면 둘의 곱에서 직선 $x+y=1$ 을 잡고, $x^N=y^N=1$ 인 양의 정수 $N$ 이 있는 점 $(x,y)$ 를 찾는다. $x,y$ 는 모두 절댓값이 $1$ 이므로 $x$ 는 단위원 위에, $y=1-x$ 도 단위원 위에 있다. 그러면 $x$ 는 단위원과, 단위원을 오른쪽으로 $1$ 만큼 옮긴 원의 교점이다.

두 원은 $x=e^{i\pi/3}$ 와 $x=e^{-i\pi/3}$ 에서만 만난다. 이때 $y=1-x$ 는 각각 $e^{-i\pi/3}$, $e^{i\pi/3}$ 이고 둘 다 1 의 6 제곱근이다. 조건을 만족하는 점은 이 둘뿐이다.

곡선 $xy=1$ 에서는 답이 다르다. 1 의 거듭제곱근 $\zeta$ 마다 $(\zeta,\zeta^{-1})$ 이 곡선 위에 있으므로 이런 점이 무한히 많다. $xy=1$ 인 점들은 좌표끼리 곱하는 연산으로 닫혀 있고, $x+y=1$ 은 닫혀 있지 않다.

무한히 많은 점을 주는 것이 연산으로 닫힌 조각뿐이라는 것이 이 추측이다. 곱셈 대신 [아벨 다양체](abelian-varieties.md)의 덧셈을 쓰면 [Mordell–Lang 추측](mordell-lang.md)에서 유한생성 군을 꼬임점 전체로 바꾼 경우가 된다.

# 정의

## 꼬임점

가환 [대수군](algebraic-groups.md) $A$ 의 점 $P$ 가 어떤 양의 정수 $N$ 에 대해 $NP=0$ 을 만족하면 $P$ 를 **꼬임점(torsion point, 비틀림점)** 이라 한다. 곱셈군 $(\mathbb C^\times)^2$ 에서는 연산이 좌표별 곱셈이고 항등원이 $(1,1)$ 이므로, 꼬임점은 두 좌표가 모두 1 의 거듭제곱근인 점이다. 직관 절에서 찾은 점이 이것이다.

$g$ 차원 복소 아벨 다양체는 $\mathbb C^g$ 를 [격자](lattices.md) $\Lambda$ 로 나눈 것이다. 위수가 $N$ 을 나누는 꼬임점은 $\frac1N\Lambda/\Lambda$ 의 점이고 $N^{2g}$ 개다.

## 꼬임 잉여류

$A$ 의 대수적 부분군 $B$ 가 연결이고 $t$ 가 꼬임점일 때 $t+B$ 를 **꼬임 잉여류(torsion coset)** 라 한다. 직관 절의 곡선 $xy=1$ 은 $(\mathbb C^\times)^2$ 의 연결 부분군이므로 $t=(1,1)$ 인 꼬임 잉여류다. 한 점 $\lbrace t\rbrace$ 도 $B=0$ 인 꼬임 잉여류다.

## 진술

$A$ 를 복소 아벨 다양체, $X\subseteq A$ 를 닫힌 부분다양체, $A_{\mathrm{tors}}$ 를 꼬임점 전체라 한다. 다음 진술을 **Manin–Mumford 추측** 이라 한다.

$$
X\cap A_{\mathrm{tors}}=\bigcup_{i=1}^n\bigl(t_i+B_i\bigr)\cap A_{\mathrm{tors}},\qquad t_i+B_i\subseteq X
$$

$t_i+B_i$ 는 유한 개의 꼬임 잉여류다. $X$ 가 종수 $2$ 이상의 곡선이면 양차원 잉여류를 포함하지 않으므로 $X$ 위의 꼬임점이 유한 개다.

# 성질

## Raynaud 정리

Raynaud 는 1983 년에 곡선의 경우와 일반 부분다양체의 경우를 차례로 증명했다[^1]. 증명은 수체 위로 내려 소수 $p$ 에서의 환원을 쓴다. 이후 이 진술을 Raynaud 정리(Raynaud's theorem)라고도 부른다.

곱셈군 $(\mathbb C^\times)^n$ 에서 같은 진술은 Lang 이 1965 년에 증명했다[^2]. 직관 절의 계산은 그 가장 작은 경우다.

## Galois 켤레의 하한

$X$ 가 수체 $K$ 위에서 정의되면 $X$ 위의 꼬임점 $P$ 의 Galois 켤레도 $X$ 위에 있다. 직관 절에서 $x+y=1$ 의 계수가 유리수이므로 $(e^{i\pi/3},e^{-i\pi/3})$ 의 복소켤레 $(e^{-i\pi/3},e^{i\pi/3})$ 도 해이고, 두 해가 한 [켤레류](conjugacy-classes.md)를 이룬다.

Masser 는 위수 $N$ 인 꼬임점의 $K$ 위 켤레가 $cN^{\delta}$ 개 이상임을 보였다. 여기서 $c,\delta\gt 0$ 은 $A$ 와 $K$ 에만 의존한다[^3]. 곱셈군에서는 위수 $N$ 인 1 의 거듭제곱근의 $\mathbb Q$ 위 켤레가 $\varphi(N)$ 개라는 [원분체](cyclotomic-fields.md)의 사실이 이 하한이다.

## Pila–Zannier 증명

균일화 사상 $\mathbb C^g\to A$ 로 $X$ 를 올리고 격자의 기저로 좌표를 잡으면 $X$ 의 역상은 $\lbrack 0,1)^{2g}$ 안의 집합 $Z$ 가 된다. 위수 $N$ 인 꼬임점은 $Z$ 안의 분모 $N$ 인 유리점에 대응한다.

$Z$ 는 해석함수로 정의되는 집합이라 [Pila–Wilkie 정리](pila-wilkie-theorem.md)가 적용된다. $Z$ 에서 반대수적 부분을 뺀 나머지에 놓인 분모 $N$ 이하의 유리점은 모든 $\varepsilon\gt 0$ 에 대해 $c_\varepsilon N^{\varepsilon}$ 개 이하다. Masser 하한은 위수 $N$ 인 꼬임점 하나가 있으면 그런 유리점이 $cN^{\delta}$ 개 있음을 준다. $\varepsilon\lt\delta$ 로 잡으면 $N$ 이 유계이다. 반대수적 부분이 꼬임 잉여류의 역상이라는 것은 Ax 정리(Ax's theorem)로 증명한다[^4].

## Mordell–Lang 추측과의 관계

Mordell–Lang 추측의 나눗셈 닫힘 판에서 유한생성 군을 $\lbrace 0\rbrace$ 로 잡으면 그 나눗셈 닫힘이 $A_{\mathrm{tors}}$ 이고, 결론이 Manin–Mumford 추측이다. Hrushovski 는 차분체(difference field)의 [모형론](model-theory.md)으로 다른 증명을 주었고, 꼬임 잉여류의 개수를 $X$ 의 차수로 명시적으로 위에서 눌렀다[^5].

# 활용

- 곡선의 꼬임점. 종수 $2$ 이상의 곡선 $C$ 와 점 $P_0$ 를 잡고 $P\mapsto\lbrack P-P_0\rbrack$ 로 [Jacobi 다양체](jacobian-variety.md)에 넣으면, $\lbrack P-P_0\rbrack$ 가 꼬임점인 $P$ 는 유한 개다. [초타원곡선](hyperelliptic-curves.md)에서 $P_0$ 를 Weierstrass 점으로 잡으면 다른 Weierstrass 점 $P$ 는 $2\lbrack P-P_0\rbrack=0$ 을 만족하므로 이런 점이다.
- [André–Oort 추측](andre-oort-conjecture.md). [모듈러 곡선](modular-curves.md)의 곱 안에서 허수곱(complex multiplication, CM)을 갖는 점들이 이루는 특별한 부분다양체를 정하는 문제다. Pila 는 꼬임점 대신 허수곱 점을 넣고 같은 상한과 하한의 비교로 $\mathbb C^n$ 의 경우를 증명했다[^6].
- [Zilber 삼분법](zilber-trichotomy.md). Hrushovski 의 증명은 차분체 안의 정의 가능 군에 삼분법을 적용해, 꼬임점의 집합이 부분군의 잉여류로 갈리는 국소 모듈러 경우로 몰아간다.

[^1]: M. Raynaud, "Courbes sur une variété abélienne et points de torsion", Inventiones Mathematicae **71** (1983), 207–233. M. Raynaud, "Sous-variétés d'une variété abélienne et points de torsion", *Arithmetic and Geometry* I, Progress in Mathematics **35**, Birkhäuser (1983), 327–352.
[^2]: S. Lang, "Division points on curves", Annali di Matematica Pura ed Applicata **70** (1965), 229–234.
[^3]: D. Masser, "Small values of the quadratic part of the Néron–Tate height on an abelian variety", Compositio Mathematica **53** (1984), 153–170.
[^4]: J. Pila, U. Zannier, "Rational points in periodic analytic sets and the Manin–Mumford conjecture", Rendiconti Lincei **19** (2008), 149–162.
[^5]: E. Hrushovski, "The Manin–Mumford conjecture and the model theory of difference fields", Annals of Pure and Applied Logic **112** (2001), 43–115.
[^6]: J. Pila, "O-minimality and the André–Oort conjecture for ℂⁿ", Annals of Mathematics **173** (2011), 1779–1840.

# 연관 문서

## 선수지식

- [Mordell–Lang 추측](mordell-lang.md)
- [Pila–Wilkie 정리](pila-wilkie-theorem.md)

## 더 알아보기

- [Zilber–Pink 추측](zilber-pink-conjecture.md)

#number_theory #algebra #logic
