# Riemann–Hilbert 대응

# 개요

**Riemann–Hilbert 대응(Riemann–Hilbert correspondence)** 은 특이점 몇 개를 뺀 복소평면 위의 선형 미분방정식과, 그 해를 특이점 둘레로 한 바퀴 돌렸을 때 해가 바뀌는 방식을 서로 맞바꾸는 대응이다. 방정식 $xy'=\tfrac12 y$ 의 해 $\sqrt x$ 는 원점 둘레를 한 바퀴 돌고 나면 $-\sqrt x$ 가 된다. 해를 식으로 쓸 수 없는 방정식에서도 이 부호 같은 정보는 남는다.

이 대응은 방정식을 해가 바뀌는 방식을 적은 행렬 몇 개로 바꾸고, 거꾸로 행렬 몇 개를 주면 그것을 해의 바뀜으로 갖는 방정식이 하나로 정해진다는 것을 보인다. 그래서 방정식에 관한 물음이 행렬에 관한 물음으로 풀린다.

# 직관

$x\ne 0$ 에서 방정식 $xy'=\alpha y$ 를 푼다. $\alpha$ 는 복소수다. 해는 $y=x^\alpha=e^{\alpha\log x}$ 이고, $\log x$ 는 원점 둘레를 돌 때마다 값이 바뀌므로 해도 한 가지 값으로 정해지지 않는다.

$x=1$ 에서 해의 값 $1$ 을 잡고 $x=e^{i\theta}$ 를 따라 $\theta$ 를 $0$ 에서 $2\pi$ 까지 움직이며 [해석적 연속](analytic-continuation.md)으로 해를 이어 간다. $\log x=i\theta$ 는 $2\pi i$ 까지 늘고, $x=1$ 로 돌아왔을 때 해의 값은 $e^{2\pi i\alpha}$ 다. 한 바퀴 돈 해는 처음 해에 수 $e^{2\pi i\alpha}$ 를 곱한 것이다. $\alpha=\tfrac12$ 이면 이 수가 $-1$ 이고, $\alpha$ 가 정수이면 $1$ 이다.

이 수는 방정식을 하나로 정하지 못한다. $\alpha$ 를 $\alpha+1$ 로 바꾼 방정식의 해 $x^{\alpha+1}$ 도 한 바퀴 돌면 $e^{2\pi i\alpha}$ 배가 된다. 두 해는 유리함수 $x$ 를 곱한 만큼만 다르고, $y=xz$ 로 미지함수를 바꾸면 한 방정식이 다른 방정식으로 옮겨 간다. 그래서 유리함수를 곱해 미지함수를 바꾼 방정식들을 같은 것으로 본다.

같은 것으로 보아도 아직 부족하다. $x^2y'=-y$ 의 해 $e^{1/x}$ 는 원점 둘레를 돌아도 바뀌지 않아서, 해가 상수인 $y'=0$ 과 바뀌는 방식이 같다. 그런데 $e^{1/x}$ 는 유리함수가 아니므로 두 방정식은 유리함수를 곱해 옮겨 가지 않는다.

차이는 크기에 있다. $x$ 가 양수 쪽에서 $0$ 으로 갈 때 $e^{1/x}$ 는 $x$ 의 어떤 거듭제곱보다도 빨리 커지고, $x^\alpha$ 는 거듭제곱만큼만 커진다. 해가 특이점 근처에서 거듭제곱만큼만 커지는 방정식으로 범위를 좁히면 해가 바뀌는 방식이 방정식을 정한다.

# 정의

## 모노드로미 표현

$S=\lbrace a_1,\dots,a_m\rbrace$ 를 복소평면의 유한집합, $X=\mathbb C\setminus S$ 라 한다. $n\times n$ 행렬값 함수 $A(x)$ 가 $X$ 에서 정칙일 때 다음 연립방정식을 생각한다.

$$
Y'(x)=A(x)Y(x)
$$

점 $x_0\in X$ 근처에서 일차독립인 해 $n$ 개를 열로 놓은 행렬 $\Phi$ 를 **기본해 행렬(fundamental matrix)** 이라 한다. $x_0$ 에서 시작해 돌아오는 고리 $\gamma$ 를 따라 $\Phi$ 를 해석적으로 연속하면 다시 기본해 행렬이 되므로, 가역행렬 $M_\gamma$ 가 있어 연속한 결과가 $\Phi M_\gamma$ 다.

$M_\gamma$ 는 $\gamma$ 의 호모토피류에만 의존하고, 고리를 이어 붙이면 행렬이 곱해진다. 그래서 [기본군](fundamental-group.md)에서 가는 다음 준동형이 정의된다.

$$
\rho:\pi_1(X,x_0)\to\mathrm{GL}\_n(\mathbb C),\qquad \rho(\gamma)=M_\gamma
$$

$\rho$ 를 **모노드로미 표현(monodromy representation)** 이라 한다. 기본해 행렬을 $\Phi P$ 로 바꾸면 $\rho$ 는 $P^{-1}\rho P$ 로 바뀌므로, 모노드로미 표현은 켤레를 빼고 정해진다. 직관 절의 $xy'=\alpha y$ 에서 $n=1$, $S=\lbrace 0\rbrace$ 이고, 원점을 한 번 도는 고리 $\gamma$ 에 대해 $\rho(\gamma)=e^{2\pi i\alpha}$ 다.

## 정칙 특이점

점 $a\in S$ 가 **정칙 특이점(regular singular point)** 이라는 것은, $a$ 를 꼭짓점으로 하는 각 부채꼴 안에서 기본해 행렬의 성분이 상수 $C$ 와 $N$ 에 대해 $\lvert x-a\rvert^{-N}$ 의 $C$ 배를 넘지 않는다는 뜻이다. 무한원점은 $x=1/t$ 로 바꾸어 $t=0$ 에서 같은 조건을 본다. 직관 절의 $xy'=\alpha y$ 는 원점이 정칙 특이점이고, $x^2y'=-y$ 는 원점이 정칙 특이점이 아니다.

$A(x)$ 가 $a$ 에서 많아야 단순극을 가지면 $a$ 는 정칙 특이점이다. 모든 특이점에서 단순극만 갖는 계

$$
Y'=\sum_{i=1}^m\frac{A_i}{x-a_i}Y
$$

를 **Fuchs 형 계(Fuchsian system)** 라 한다. $A_i$ 는 상수 행렬이고, 무한원점에서 $t=1/x$ 로 바꾼 계의 유수 행렬은 $-\sum_i A_i$ 다.

## 유리 게이지 동치

유리함수를 성분으로 하고 [행렬식](determinants.md)이 $0$ 이 아닌 유리함수인 행렬 $G(x)$ 로 $Y=GZ$ 라 두면 $Z$ 는 다음 계를 만족한다.

$$
Z'=\bigl(G^{-1}AG-G^{-1}G'\bigr)Z
$$

이렇게 옮겨 가는 두 계를 **유리 게이지 동치(rationally gauge equivalent)** 라 한다. 직관 절에서 $y=xz$ 가 $xy'=(\alpha+1)y$ 를 $xz'=\alpha z$ 로 옮긴다. 이 동치는 정칙 특이성과 모노드로미 표현을 바꾸지 않는다.

# 성질

## Riemann–Hilbert 대응

$\mathbb P^1$ 에서 $S$ 를 뺀 곳 위의 계 가운데 계수가 유리함수이고 $S$ 의 모든 점이 정칙 특이점인 것을 유리 게이지 동치로 모은 류와, $\pi_1(\mathbb P^1\setminus S)$ 의 $n$ 차원 표현의 [켤레류](conjugacy-classes.md) 사이에 일대일 대응이 있다[^1]. 계는 모노드로미 표현으로 보낸다.

증명의 요지. 단사성은 모노드로미가 같은 두 계의 기본해 행렬 $\Phi_1,\Phi_2$ 에서 나온다. $\Phi_1\Phi_2^{-1}$ 은 고리를 돌아도 바뀌지 않아 $\mathbb P^1\setminus S$ 에서 정칙이고, 정칙 특이 조건 때문에 각 특이점에서 거듭제곱만큼만 커지므로 극으로 끝나는 유리함수 행렬이다. 전사성은 국소에서 $x^{B}=\exp(B\log x)$ 꼴의 해를 갖는 계를 만들어 붙이는 것이다. 이렇게 얻은 해석적 벡터다발이 $\mathbb P^1$ 위에서 대수적이라는 데 GAGA 원리(géométrie algébrique et géométrie analytique)를 쓴다.

Deligne 은 이것을 매끄러운 복소 [대수다양체](algebraic-varieties.md) $X$ 로 넓혔다. $X$ 위의 대수적 [벡터다발](vector-bundles.md)과 정칙 특이인 평탄 [접속](connection.md)의 쌍들이 이루는 [범주](category.md)는 $\pi_1(X)$ 의 유한차원 표현들의 범주와 동치다[^1].

## 국소 모노드로미

$xY'=BY$ 꼴의 계에서 $B$ 가 상수 행렬이면 기본해 행렬은 $x^B=\exp(B\log x)$ 이고, 원점을 한 번 도는 모노드로미는 다음과 같다.

$$
M=\exp(2\pi iB)
$$

Fuchs 형 계에서 $a_i$ 를 한 번 도는 고리의 모노드로미는, $A_i$ 의 두 [고윳값](eigenvalues.md)의 차가 $0$ 이 아닌 정수가 되는 일이 없으면 $\exp(2\pi iA_i)$ 와 켤레다. $\pi_1(\mathbb P^1\setminus\lbrace a_1,\dots,a_m\rbrace)$ 은 각 $a_i$ 를 한 번씩 도는 고리 $\gamma_1,\dots,\gamma_m$ 으로 생성되고 관계는 $\gamma_1\cdots\gamma_m=1$ 하나다. 그래서 표현은 곱이 단위행렬인 가역행렬 $M_1,\dots,M_m$ 을 동시 켤레로 모은 류와 같다.

## Hilbert 21번 문제

Hilbert 21번 문제(Hilbert's twenty-first problem)는 곱이 단위행렬인 $M_1,\dots,M_m$ 이 주어졌을 때 그것을 모노드로미로 갖는 Fuchs 형 계가 있는지 묻는다. 정칙 특이인 계로는 위 대응에 따라 항상 있다. Fuchs 형으로 좁히면 답이 다르다.

- $M_i$ 가운데 하나가 대각화 가능하면 Fuchs 형 계가 있다(Plemelj).
- $n=2$ 이면 항상 있다(Dekkers).
- $n=3$, $m=4$ 에서 Fuchs 형 계로 실현되지 않는 표현이 있다(Bolibruch)[^2].

## 초기하 방정식의 강성

Gauss 초기하 방정식(hypergeometric equation)은 $0,1,\infty$ 에만 정칙 특이점을 갖는 2계 방정식이고, 각 특이점에서 해가 $(x-a)^{\lambda}$ 꼴로 시작하는 지수(exponent) $\lambda$ 두 개씩을 갖는다. 모노드로미는 $M_0M_1M_\infty=I$ 인 $2\times 2$ 행렬 세 개다.

표현이 기약이면 세 행렬의 고윳값만으로 표현이 켤레를 빼고 정해진다. 그러므로 여섯 지수가 방정식을 유리 게이지 동치를 빼고 정한다. Riemann 은 1857 년에 초기하 함수를 식이 아니라 이 국소 자료로 정의했다[^3].

## D 가군의 Riemann–Hilbert 대응

Kashiwara 와 Mebkhout 은 대응을 편미분방정식계로 넓혔다. 매끄러운 복소 대수다양체 $X$ 위에서 정칙 홀로노믹 $\mathcal D$ 가군(regular holonomic $\mathcal D$-module)의 유도범주는 구성가능층(constructible sheaf)의 유도범주와 동치이고, 이 동치는 해의 [층](sheaves.md)을 주는 de Rham [함자](functors.md)로 주어진다[^4]. 정칙 홀로노믹 가군 하나는 편향층(perverse sheaf) 하나로 간다. 특이점이 점이 아니라 부분다양체이고, 해의 바뀜이 표현 대신 층으로 적힌다.

# 활용

- Kazhdan–Lusztig 추측. [Beilinson–Bernstein 국소화](beilinson-bernstein.md)는 리 대수의 가군을 [깃발다양체](flag-varieties.md) 위의 $\mathcal D$ 가군으로 옮기고, D 가군의 Riemann–Hilbert 대응이 그것을 편향층으로 옮긴다. 기약 가군의 중복도가 교차 코호몰로지 층의 차원으로 계산되어 [Kazhdan–Lusztig 다항식](kazhdan-lusztig.md)의 계수와 같아진다.
- 미분 Galois 군. [미분 Galois 이론](differential-galois-theory.md)에서 $\mathbb C(x)$ 위의 Fuchs 형 방정식의 미분 Galois 군은 모노드로미 표현의 상의 Zariski 닫힘이다. 정칙 특이성이 없으면 이 등식이 성립하지 않는다. $x^2y'=-y$ 는 모노드로미가 자명하지만 미분 Galois 군이 $\mathbb C^\times$ 다.
- 등모노드로미 변형. Fuchs 형 계의 특이점 $a_i$ 를 움직이면서 모노드로미를 바꾸지 않으려면 $A_i$ 가 [Schlesinger 방정식](schlesinger-equations.md)을 만족해야 한다. $n=2$, 특이점 넷에서 이 방정식은 [Painlevé 방정식](painleve-equations.md)의 여섯째 꼴이 된다.

[^1]: P. Deligne, *Équations différentielles à points singuliers réguliers*, Lecture Notes in Mathematics **163**, Springer (1970).
[^2]: D. V. Anosov, A. A. Bolibruch, *The Riemann–Hilbert Problem*, Aspects of Mathematics **E22**, Vieweg (1994).
[^3]: B. Riemann, "Beiträge zur Theorie der durch die Gauss'sche Reihe F(α, β, γ, x) darstellbaren Functionen", Abhandlungen der Königlichen Gesellschaft der Wissenschaften zu Göttingen **7** (1857).
[^4]: M. Kashiwara, "The Riemann–Hilbert problem for holonomic systems", Publications of the Research Institute for Mathematical Sciences **20** (1984), 319–365. Z. Mebkhout, "Une autre équivalence de catégories", Compositio Mathematica **51** (1984), 63–88.

# 연관 문서

## 선수지식

- [기본군](fundamental-group.md)
- [접속](connection.md)
- [해석적 연속](analytic-continuation.md)

## 더 알아보기

- [Schlesinger 방정식](schlesinger-equations.md)

#complex_analysis #algebraic_topology #differential_geometry #algebra
