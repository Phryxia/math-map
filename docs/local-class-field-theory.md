# 국소 유체론

# 개요

**국소 유체론(local class field theory)** 은 국소체 $K$ 의 아벨 확대를 $K^\times$ 의 유한지수 열린 부분군과 대응시키는 이론이다. $\mathbb Q_p$ 에 $1$ 의 $p^n$ 제곱근을 붙이면 Galois 군이 $(\mathbb Z/p^n)^\times$ 인 확대가 나오는데, $\mathbb Q_p$ 의 아벨 확대가 이런 것과 비분기 확대로 전부 얻어지는지는 확대를 하나씩 보아서는 알 수 없다. 국소 유체론은 아벨 확대 전체를 $K^\times$ 의 부분군으로 분류하고, Lubin–Tate 형식군으로 그 확대를 명시적으로 만든다.

# 직관

[p 진수](p-adic-numbers.md)의 체 $\mathbb Q_3$ 에 제곱근 하나를 붙인 확대를 전부 찾는다. $\mathbb Q_3(\sqrt d)$ 는 $d$ 를 제곱수배만큼 바꿔도 같으므로, $\mathbb Q_3^\times$ 를 제곱수들로 나눈 군의 원소마다 하나씩 나온다. 그 군은 $1,-1,3,-3$ 이 대표하는 위수 $4$ 의 군이고, $d=1$ 을 빼면 이차 확대는 $\mathbb Q_3(\sqrt{-1})$, $\mathbb Q_3(\sqrt 3)$, $\mathbb Q_3(\sqrt{-3})$ 셋이다.

$-1$ 은 $3$ 을 법으로 제곱수가 아니므로 $x^2+1$ 은 [유한체](finite-fields.md) $\mathbb F_3$ 위에서 기약이다. 그래서 $\mathbb Q_3(\sqrt{-1})$ 에서는 $3$ 으로 나눈 나머지들의 체가 $\mathbb F_3$ 에서 $\mathbb F_9$ 로 커진다. $\mathbb Q_3(\sqrt{-3})$ 은 $\zeta_3=(-1+\sqrt{-3})/2$ 를 붙인 [원분체](cyclotomic-fields.md) $\mathbb Q_3(\zeta_3)$ 이다.

$\sqrt 3=\sqrt{-3}/\sqrt{-1}$ 이므로 $\mathbb Q_3(\sqrt 3)$ 은 앞의 둘을 합친 체 안에 있다. 세 확대가 모두 나머지 체를 키우는 확대와 $1$ 의 거듭제곱근을 붙이는 확대로 얻어진다.

세 확대 각각에서 노름 $N(x)=x\bar x$ 의 값을 모으면 $\mathbb Q_3^\times$ 의 지수 $2$ 인 부분군이 나오고, 서로 다른 확대에서 서로 다른 부분군이 나온다. $\mathbb Q_3^\times$ 의 지수 $2$ 인 부분군도 정확히 셋이다. 이차 확대의 목록이 $\mathbb Q_3^\times$ 의 부분군 목록과 일대일로 맞는다.

$\mathbb Q_3$ 대신 그 유한 확대 $K$ 를 놓으면 나머지 체를 키우는 확대는 그대로 있지만, $1$ 의 거듭제곱근을 붙여서는 $K$ 의 분기하는 아벨 확대가 다 나오지 않는다. $1$ 의 $p^n$ 제곱근은 곱셈에서 $p^n$ 제곱 사상의 핵이다. Lubin 과 Tate 는 $K$ 의 소원 $\pi$ 에 맞춘 새 곱셈을 멱급수로 만들고, 그 곱셈의 $\pi^n$ 배 사상의 핵을 $1$ 의 거듭제곱근 대신 붙였다.[^1]

# 정의

## 국소체와 비분기 확대

**국소체(local field)** 는 이산 부치를 갖는 완비 체로 잔여체가 유한한 것이다. 표수 $0$ 이면 $\mathbb Q_p$ 의 유한 확대이고, 표수 $p$ 이면 $\mathbb F_q((T))$ 다. 정수환 $\mathcal O$, 극대 아이디얼 $\mathfrak m=(\pi)$, 잔여체 $k=\mathbb F_q$ 를 쓰고, $\mathfrak m$ 의 생성원 $\pi$ 를 소원(uniformizer)이라 한다. $K=\mathbb Q_3$ 이면 $\mathcal O=\mathbb Z_3$, $\pi=3$, $k=\mathbb F_3$ 이다.

국소체의 유한 확대 $L/K$ 가 **비분기(unramified)** 라는 것은 $L$ 의 잔여체의 차수가 $[L:K]$ 와 같다는 뜻이다. 잔여체의 차수가 $1$ 이면 **완전분기(totally ramified)** 라 한다. 직관 절의 $\mathbb Q_3(\sqrt{-1})$ 은 잔여체가 $\mathbb F_9$ 인 비분기 이차 확대이고, $\mathbb Q_3(\sqrt{-3})$ 은 잔여체가 $\mathbb F_3$ 인 완전분기 이차 확대다. 비분기 확대 전체의 합성을 $K^{\mathrm{ur}}$ 로 쓰고, 아벨 확대 전체의 합성을 $K^{\mathrm{ab}}$ 로 쓴다.

## 노름군

유한 아벨 확대 $L/K$ 의 **노름군(norm group)** 은 $N_{L/K}L^\times\subset K^\times$ 다. $L=\mathbb Q_3(\sqrt{-1})$ 이면 $N(a+b\sqrt{-1})=a^2+b^2$ 이고, 노름군은 $3$ 진 부치가 짝수인 원소 전체다. $3=N(x)$ 이려면 $a^2+b^2$ 의 $3$ 진 부치가 홀수여야 하는데, $-1$ 이 $\mathbb F_3$ 의 제곱수가 아니므로 $a^2+b^2$ 의 부치는 항상 짝수다.

## 형식군 법칙

$\mathcal O$ 위의 **일차원 가환 형식군 법칙(one-dimensional commutative formal group law)** 은 다음을 만족하는 $F\in\mathcal O[[X,Y]]$ 다.

$$
F(X,0)=X,\qquad F(X,Y)=F(Y,X),\qquad F(F(X,Y),Z)=F(X,F(Y,Z))
$$

$F(X,Y)=X+Y$ 가 형식 덧셈군이고, $F(X,Y)=X+Y+XY$ 가 형식 곱셈군 $\hat{\mathbb G}\_m$ 이다. 후자에 $X=a-1$, $Y=b-1$ 을 넣으면 $F=ab-1$ 이므로 $1$ 을 더한 값끼리의 곱셈이다.

형식군 법칙 $F$ 에서 $G$ 로 가는 **준동형(homomorphism)** 은 $g(F(X,Y))=G(g(X),g(Y))$ 를 만족하는 $g\in X\mathcal O[[X]]$ 다. $F=G$ 인 준동형을 자기준동형이라 하고 그 환을 $\mathrm{End}(F)$ 로 쓴다. $\hat{\mathbb G}\_m$ 에서 $g(X)=(1+X)^a-1$ 은 $a\in\mathbb Z_p$ 마다 자기준동형이다.

## Lubin–Tate 형식군

$\mathcal F\_\pi$ 를 $f(X)\equiv\pi X\pmod{X^2}$ 와 $f(X)\equiv X^q\pmod{\mathfrak m}$ 을 만족하는 $f\in\mathcal O[[X]]$ 의 집합이라 한다. $f=\pi X+X^q$ 는 $\mathcal F\_\pi$ 에 속하고, $K=\mathbb Q_p$, $\pi=p$ 이면 $f=(1+X)^p-1$ 도 속한다. $f\in\mathcal F\_\pi$ 를 자기준동형으로 갖는 형식군 법칙 $F_f$ 를 **Lubin–Tate 형식군(Lubin–Tate formal group)** 이라 한다. $f=(1+X)^p-1$ 이면 $F_f=\hat{\mathbb G}\_m$ 이다.

$\bar K$ 의 극대 아이디얼 $\mathfrak m\_{\bar K}$ 의 원소를 $F_f$ 에 넣으면 급수가 수렴하므로 $x+\_{F}y=F_f(x,y)$ 가 $\mathfrak m\_{\bar K}$ 위의 아벨군 구조를 준다. 이 군에서 $[\pi^n]\_f=f\circ\dots\circ f$ 의 핵

$$
\Lambda_n=\lbrace x\in\mathfrak m\_{\bar K}:[\pi^n]\_f(x)=0\rbrace
$$

을 **$\pi^n$ 분할점(π-power division points)** 이라 하고, $K\_{\pi,n}=K(\Lambda_n)$, $K\_\pi=\bigcup_nK\_{\pi,n}$ 으로 쓴다. $K=\mathbb Q_3$, $f=3X+X^3$ 이면 $f(x)=x(3+x^2)$ 이므로 $\Lambda_1=\lbrace 0,\pm\sqrt{-3}\rbrace$ 이고 $K\_{\pi,1}=\mathbb Q_3(\sqrt{-3})$ 이다.

# 성질

## 국소 상호법칙

**국소 상호법칙(local reciprocity law)** 은 다음이다. 연속 준동형 $\mathrm{Art}\_K\colon K^\times\to\mathrm{Gal}(K^{\mathrm{ab}}/K)$ 가 유일하게 존재해 다음을 만족한다.

1. 모든 소원 $\pi$ 에서 $\mathrm{Art}\_K(\pi)$ 를 $K^{\mathrm{ur}}$ 로 제한하면 Frobenius 다.
2. 유한 아벨 확대 $L/K$ 마다 동형 $K^\times/N\_{L/K}L^\times\cong\mathrm{Gal}(L/K)$ 를 유도한다.
3. $\mathrm{Art}\_K(\mathcal O^\times)$ 가 관성군 $\mathrm{Gal}(K^{\mathrm{ab}}/K^{\mathrm{ur}})$ 이다.

$\mathrm{Art}\_K$ 를 Artin 사상(Artin map)이라 한다. $K^\times\cong\pi^{\mathbb Z}\times\mathcal O^\times$ 에서 $\pi^{\mathbb Z}$ 는 $\mathrm{Gal}(K^{\mathrm{ur}}/K)\cong\hat{\mathbb Z}$ 의 조밀한 부분군 $\mathbb Z$ 로 가므로 $\mathrm{Art}\_K$ 는 동형이 아니다. $K^\times$ 를 노름군들에 대해 완비화하면 동형이 된다.

$$
\varprojlim_{L}K^\times/N\_{L/K}L^\times\thickspace\cong\thickspace\hat{\mathbb Z}\times\mathcal O^\times\thickspace\cong\thickspace\mathrm{Gal}(K^{\mathrm{ab}}/K)
$$

각 $n$ 에 대해 차수 $n$ 의 비분기 확대가 유일하게 존재하고, 그 Galois 군은 잔여체의 확대 $\mathbb F\_{q^n}/\mathbb F_q$ 의 Galois 군 $\mathbb Z/n$ 과 같다.

## 존재정리

**존재정리(existence theorem)** 는 다음이다. $L\mapsto N\_{L/K}L^\times$ 는 $K$ 의 유한 아벨 확대와 $K^\times$ 의 유한지수 열린 부분군 사이의 일대일 대응이고, 포함관계를 뒤집고 합성을 교차로 보낸다. 직관 절의 이차 확대 셋과 $\mathbb Q_3^\times$ 의 지수 $2$ 부분군 셋의 대응이 이것의 한 경우다.

## Lubin–Tate 형식군의 존재

$f\in\mathcal F\_\pi$ 마다 $f$ 를 자기준동형으로 갖는 형식군 법칙 $F_f$ 가 유일하게 존재한다. 또 환 준동형 $\mathcal O\to\mathrm{End}(F_f)$, $a\mapsto[a]\_f$ 가 유일하게 있어 $[a]\_f(X)\equiv aX\pmod{X^2}$ 이고 $[\pi]\_f=f$ 다.[^1]

증명의 요지. $F\equiv X+Y$ 에서 시작해 차수를 하나씩 올린다. $n$ 차까지 맞춘 $F$ 에 대해 $\Delta=f(F)-F(f(X),f(Y))$ 의 $n+1$ 차 동차부분을 $\pi^{n+1}-\pi$ 로 나눈 것을 더한다. 잔여체에서 $f$ 가 $X^q$ 이므로 $\Delta\equiv0\pmod{\pi}$ 이고, $\pi^{n+1}-\pi=\pi(\pi^n-1)$ 에서 $\pi^n-1$ 은 단원이므로 나눗셈이 $\mathcal O$ 안에서 된다. $f=(1+X)^p-1$ 이면 이 구성이 $X+Y+XY$ 를 낸다.

## Lubin–Tate 정리

1. $K\_{\pi,n}/K$ 는 완전분기 아벨 확대이고, $[a]\_f$ 의 작용이 동형 $\mathrm{Gal}(K\_{\pi,n}/K)\cong(\mathcal O/\pi^n)^\times$ 를 준다.
2. $u\in\mathcal O^\times$ 에 대해 $\mathrm{Art}\_K(u)$ 가 $\Lambda_n$ 위에서 $[u^{-1}]\_f$ 로 작용한다.
3. $K^{\mathrm{ab}}=K^{\mathrm{ur}}\cdot K\_\pi$ 이고, $K\_{\pi,n}$ 은 $f$ 의 선택에 의존하지 않는다.

첫째 줄의 차수는 $f=\pi X+X^q$ 에서 확인된다. $\Lambda_1\setminus\lbrace 0\rbrace$ 은 $f(X)/X=\pi+X^{q-1}$ 의 근이고 이것이 Eisenstein 다항식이므로, $K\_{\pi,1}$ 은 차수 $q-1=\vert(\mathcal O/\pi)^\times\vert$ 의 완전분기 확대다.

셋째 줄의 예. $K=\mathbb Q_3$ 에서 $f=3X+X^3$ 이면 $K\_{\pi,1}=\mathbb Q_3(\sqrt{-3})$ 이다. $f=(1+X)^3-1$ 이면 $\Lambda_1=\lbrace 0,\zeta_3-1,\zeta_3^2-1\rbrace$ 이므로 $K\_{\pi,1}=\mathbb Q_3(\zeta_3)$ 이고, $\zeta_3=(-1+\sqrt{-3})/2$ 이므로 두 체가 같다. 형식군은 다르지만 분할점이 생성하는 체는 같다.

둘째 줄의 $u^{-1}$ 은 $\mathrm{Art}\_K(\pi)$ 를 Frobenius 로 둘지 그 역으로 둘지에 따른 규약이고, 문헌마다 다르다.

## 원분체와의 비교

$K=\mathbb Q_p$, $\pi=p$, $f(X)=(1+X)^p-1$ 을 넣으면 오른쪽 열이 나온다.

| Lubin–Tate | K=Qₚ, f=(1+X)ᵖ-1 |
|---|---|
| $F_f(X,Y)$ | 형식 곱셈군의 $X+Y+XY$ |
| $[a]\_f(X)$ | $(1+X)^a-1$ |
| $\Lambda_n$ | $\lbrace\zeta-1:\zeta^{p^n}=1\rbrace$ |
| $K\_{\pi,n}$ | $\mathbb Q_p(\mu\_{p^n})$ |
| $\mathrm{Gal}\cong(\mathcal O/\pi^n)^\times$ | $(\mathbb Z/p^n)^\times$ |
| $K^{\mathrm{ab}}=K^{\mathrm{ur}}K\_\pi$ | 국소 Kronecker–Weber 정리 |

국소 Kronecker–Weber 정리(local Kronecker–Weber theorem)는 $\mathbb Q_p$ 의 모든 아벨 확대가 비분기 확대와 $\mathbb Q_p(\mu\_{p^n})$ 의 합성 안에 있다는 정리다.

## 분기 여과와의 정합성

$\mathcal O^\times$ 의 여과 $U^{(0)}=\mathcal O^\times\supset U^{(n)}=1+\mathfrak m^n$ 은 [분기군](ramification-groups.md)의 상첨자 번호매김(upper numbering)으로 간다.

$$
\mathrm{Art}\_K\big(U^{(n)}\big)=G^n
$$

$n=0$ 이 관성군이고, $n\ge1$ 이 야생 분기군이다. 지표 $\chi\colon K^\times\to\mathbb C^\times$ 의 도체 지수(conductor exponent)는 $\chi(U^{(n)})=1$ 이 되는 최소의 $n$ 이고, $\chi\circ\mathrm{Art}\_K^{-1}$ 에 대응하는 Galois 지표의 Artin 도체와 같다.

## 대역 이론과의 관계

수체 $K$ 의 대역 상호사상은 국소 사상들의 곱으로 정의된다.

$$
\psi_K\colon\mathbb A_K^\times\to\mathrm{Gal}(K^{\mathrm{ab}}/K),\qquad
\psi_K\big((x_v)\_v\big)=\prod_v\mathrm{Art}\_{K_v}(x_v)
$$

[아델](adeles.md)의 원소는 거의 모든 자리에서 $x_v\in\mathcal O_v^\times$ 이고 그 자리에서 확대가 비분기이므로 곱이 유한하다. 대역 상호법칙은 $\psi_K$ 가 $K^\times$ 의 대각선 원소에서 자명하다는 진술이다. $K=\mathbb Q$ 와 이차 지표로 제한하면 Hilbert 기호의 곱 공식 $\prod_v(a,b)\_v=1$ 이 되고, 이것은 [이차 상호법칙](quadratic-reciprocity.md)과 동치다.

국소 유체론의 표준적 증명은 [Galois 코호몰로지](galois-cohomology.md)로 $H^2(\mathrm{Gal}(L/K),L^\times)\cong\frac1{[L:K]}\mathbb Z/\mathbb Z$ 를 계산하고 거기서 상호사상을 만든다. Lubin–Tate 구성은 그 계산 없이 $K^{\mathrm{ab}}$ 를 명시적으로 만든다.

# 활용

- [유체론](class-field-theory.md)의 대역 상호사상. 위의 $\psi_K$ 가 국소 상호사상의 곱으로 정의된다. 수체의 아벨 확대를 특수한 값으로 명시적으로 생성하는 문제는 Hilbert 12 번 문제(Hilbert's twelfth problem)이고, $\mathbb Q$ 는 원분체로, 허수 이차체는 [복소 곱셈](complex-multiplication.md)으로 풀렸다.[^2] 총실체에서는 Dasgupta 와 Kakde 가 $p$ 진 방법으로 명시적 구성을 내놓았다.[^3]
- Galois 표현의 국소 조건. $\mathrm{Gal}(\bar K_v/K_v)$ 의 표현에서 아벨 부분은 $K_v^\times$ 의 지표로 바뀐다. 대역 [Galois 표현](galois-representations.md)의 도체와 L 인자를 자리마다 계산할 때 이 대응을 쓴다.
- 국소 ε 인자(local epsilon factor). 자기동형 L 함수의 함수방정식에 나오는 근 수가 분기 지표의 [Gauss 합](gauss-sums.md)으로 주어지고, 그 계산에 분기 여과와의 정합성을 쓴다.
- [p 진 Hodge 이론](p-adic-hodge-theory.md). $K\_\pi$ 를 붙여 만든 탑 위에서 $p$ 진 표현을 $(\varphi,\Gamma)$ 가군으로 바꾼다. Fontaine 의 주기환과 Coleman 의 노름 사상이 Lubin–Tate 탑 위에서 정의된다.
- 국소 Langlands 대응(local Langlands correspondence). $\mathrm{GL}\_1$ 의 국소 Langlands 대응이 국소 상호법칙이다. $\mathrm{GL}\_n$ 의 경우를 Harris–Taylor 와 Henniart 가 증명했고, [Langlands 강령](langlands-program.md)의 국소 성분이다.

[^1]: Jonathan Lubin, John Tate, *Formal Complex Multiplication in Local Fields*, Annals of Mathematics 81 (1965), 380–387. 형식군의 존재와 유일성은 Lemma 1 과 그 따름정리, 분할점의 $\mathcal O$ 가군 구조와 Galois 군 계산은 Theorem 2 다.
[^2]: R. P. Langlands, *Some contemporary problems with origins in the Jugendtraum*, Mathematical Developments Arising from Hilbert Problems, Proc. Sympos. Pure Math. **28** (1976), 401–418.
[^3]: S. Dasgupta, M. Kakde, *Brumer–Stark units and explicit class field theory*, 2021 년 프리프린트.

# 연관 문서

## 선수지식

- [분기군](ramification-groups.md)
- [유체론](class-field-theory.md)

## 더 알아보기

- [p 진 Hodge 이론](p-adic-hodge-theory.md)
- [Poitou–Tate 완전열](poitou-tate.md)

#number_theory #field_theory #construction
