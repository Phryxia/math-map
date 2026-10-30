# Koszul 복합체

# 개요

**Koszul 복합체(Koszul complex)** 는 환의 원소열 하나에서 [외대수](exterior-algebra.md)로 만드는 사슬 복합체다. 원소 $x$ 하나가 영인자가 아니면 $0\to R\xrightarrow{x}R\to R/(x)\to 0$ 이 $R/(x)$ 의 자유 분해이지만, 원소가 $x,y$ 둘이면 $R/(x,y)$ 의 자유 분해를 어떻게 만들지가 문제다. Koszul 복합체는 $x$ 와 $y$ 의 곱셈을 외대수의 꼴로 엮은 복합체를 내놓고, 원소열이 정칙열이면 이것이 자유 분해다.

# 직관

$R$ 을 환, $x,y\in R$ 이라 하고 $R/(x,y)$ 의 자유 분해를 구하려 한다. 원소가 하나이고 $x$ 가 영인자(zero divisor)가 아니면 다음이 완전열이다.

$$
0\longrightarrow R\xrightarrow{\thinspace x\thinspace }R\longrightarrow R/(x)\longrightarrow 0
$$

원소가 둘이면 먼저 $R^2\to R$ 을 $(a,b)\mapsto ax+by$ 로 잡는다. 상이 $(x,y)$ 이므로 여핵이 $R/(x,y)$ 이고, 핵은 $ax+by=0$ 인 $(a,b)$ 다. $x$ 가 영인자가 아니고 $y$ 가 $R/xR$ 에서 영인자가 아니면 $by=-ax$ 에서 $b=cx$ 와 $a=-cy$ 가 나와 핵이 $(-y,x)$ 의 배수뿐이다. 이 부호는 $e_1\wedge e_2\mapsto xe_2-ye_1$ 과 같은 규칙이어서, 원소가 $n$ 개면 $p$ 번째 자리에 $\binom{n}{p}$ 개의 생성원이 나오고 부호가 외대수의 미분과 일치한다.

$$
0\longrightarrow R\xrightarrow{\thinspace (-y,\thinspace x)\thinspace }R^2\xrightarrow{\thinspace (x,\thinspace y)\thinspace }R\longrightarrow R/(x,y)\longrightarrow 0
$$

# 정의

## 복합체

$R$ 을 가환환, $x=(x_1,\dots,x_n)$ 을 $R$ 의 원소열이라 하고 $E=R^n$ 에 기저 $e_1,\dots,e_n$ 을 잡는다. **Koszul 복합체** $K\_\bullet(x)$ 는 $K_p=\Lambda^pE$ 에 다음 미분을 준 것이다.

$$
d(e_{i_1}\wedge\dots\wedge e_{i_p})=\sum_{j=1}^p(-1)^{j-1}x_{i_j}\thinspace e_{i_1}\wedge\dots\wedge\widehat{e_{i_j}}\wedge\dots\wedge e_{i_p}
$$

$\widehat{e_{i_j}}$ 는 그 인자를 뺀다는 표시다. $K_0=R$, $K_n\cong R$ 이고 $p\gt n$ 이면 $K_p=0$ 이다.

$n=2$ 이고 $x=(x,y)$ 이면 $K_2=Re_1\wedge e_2$ , $K_1=Re_1\oplus Re_2$ , $K_0=R$ 이다. 미분은 $d(e_1)=x$ , $d(e_2)=y$ , $d(e_1\wedge e_2)=xe_2-ye_1$ 이고, 이것이 직관 절의 복합체 $R\to R^2\to R$ 이다.

## 가군 계수

$R$ 가군 $M$ 에 대해 $K\_\bullet(x;M)=K\_\bullet(x)\otimes_RM$ 이라 쓰고 그 호몰로지를 $H_p(x;M)$ 이라 한다.

$M=R$ 이면 $K\_\bullet(x;R)=K\_\bullet(x)$ 이고, 직관 절의 $R=k\lbrack x,y\rbrack$ 와 $x=(x,y)$ 에서 $H_0=R/(x,y)=k$ 다.

## 정칙열

$x_1,\dots,x_n$ 이 $M$ 위의 **정칙열(regular sequence)** 이라는 것은 각 $i$ 에서 $x_i$ 가 $M/(x_1,\dots,x_{i-1})M$ 의 영인자가 아니고 $M/(x_1,\dots,x_n)M\neq0$ 이라는 뜻이다.

$R=k\lbrack x,y\rbrack$ 에서 $x,y$ 는 $R$ 위의 정칙열이다. $x$ 는 정역 $R$ 의 영인자가 아니고, $y$ 는 $R/(x)\cong k\lbrack y\rbrack$ 의 영인자가 아니다. $x,x$ 는 정칙열이 아니다. $R/(x)$ 에서 $x\cdot1=0$ 이므로 둘째 $x$ 가 영인자다.

# 성질

## 미분의 제곱과 영차 호몰로지

$d\circ d=0$ 이다. $e_{i_j}$ 와 $e_{i_k}$ 를 지우는 두 순서가 부호 $(-1)^{j-1}(-1)^{k-2}$ 와 $(-1)^{k-1}(-1)^{j-1}$ 으로 같은 항을 주고 서로 상쇄된다. 또 $K_1\to K_0$ 의 상이 $(x_1,\dots,x_n)$ 이므로 $H_0(x;M)=M/(x_1,\dots,x_n)M$ 이다.

## 정칙열 판정

**정리.** $x$ 가 $M$ 위의 정칙열이면 $p\ge1$ 에서 $H_p(x;M)=0$ 이다. $R$ 이 Noether 국소환이고 $M$ 이 유한생성이며 $x_i$ 가 극대 아이디얼에 있으면 역도 성립한다.

증명은 $n$ 에 대한 귀납이다. $K\_\bullet(x_1,\dots,x_n)$ 은 $K\_\bullet(x_1,\dots,x_{n-1})$ 에 $K\_\bullet(x_n)$ 을 텐서한 것이고, 뒤쪽이 두 항뿐이므로 앞쪽 복합체에 $x_n$ 을 곱하는 사상의 사상뿔(mapping cone)이 된다. 그 긴 완전열이

$$
0\longrightarrow H_p(x';M)/x_nH_p(x';M)\longrightarrow H_p(x;M)\longrightarrow \lbrace m\in H_{p-1}(x';M):x_nm=0\rbrace\longrightarrow0
$$

을 주고, 여기서 $x'=(x_1,\dots,x_{n-1})$ 이다. 귀납 가정으로 $p\ge2$ 의 항이 사라지고 $p=1$ 만 남아 $x_n$ 이 $M/(x')M$ 의 영인자가 아니라는 조건이 된다. 역방향은 같은 완전열에 [Nakayama 보조정리](nakayama-lemma.md)를 써서 $H_p$ 의 소멸을 하나씩 내린다. ∎

## 자유 분해

$x$ 가 정칙열이면 위 정리로 $K\_\bullet(x)$ 가 $R/(x_1,\dots,x_n)$ 의 자유 분해이고 길이가 $n$ 이다. 순위가 $\binom{n}{p}$ 이므로

$$
\mathrm{Tor}\_p^R\bigl(R/(x),M\bigr)\cong H_p(x;M)
$$

가 되고 오른쪽은 유한 번의 [행렬](matrices.md) 계산이다.

## 깊이

**정리.** $I=(x_1,\dots,x_n)$ 이고 $M$ 이 유한생성이면

$$
\mathrm{depth}(I,M)=n-\max\lbrace p:H_p(x;M)\neq0\rbrace
$$

이다. 정칙열의 최대 길이를 재는 깊이가 원소열의 선택과 무관하다는 사실이 이 등식에서 따라온다. 오른쪽이 생성원의 순서에 의존하지 않기 때문이다.

## 정칙 국소환의 잉여체

$R$ 이 [정칙 국소환](regular-local-rings.md)이고 $\mathfrak m$ 이 극대 아이디얼, $k=R/\mathfrak m$ 이라 하자. $\mathfrak m$ 의 최소 생성계 $x_1,\dots,x_d$ 는 정칙열이므로 $K\_\bullet(x)$ 가 $k$ 의 최소 자유 분해이고

$$
\mathrm{Tor}\_p^R(k,k)\cong\Lambda^p(\mathfrak m/\mathfrak m^2)
$$

이다. $p\gt d$ 에서 사라지므로 대역 차원이 $d=\dim R$ 이고, 이것이 정칙 국소환을 유한 대역 차원으로 특징짓는 정리의 계산 부분이다.

# 활용

- **완전교차환.** $S$ 가 정칙 국소환이고 $f_1,\dots,f_c$ 가 정칙열일 때 $R=S/(f_1,\dots,f_c)$ 의 $S$ 자유 분해가 $K\_\bullet(f)$ 다. Betti 수가 $\binom{c}{p}$ 로 결정되고 마지막 항의 순위가 $1$ 이므로 $R$ 이 [Gorenstein 환](gorenstein-rings.md)이다.
- **Cohen–Macaulay 판정.** [Cohen–Macaulay 환](cohen-macaulay-rings.md)이라는 조건은 깊이와 차원이 같다는 것이고, 깊이를 위 등식으로 계산하면 매개변수계 하나의 Koszul 호몰로지만 보면 된다.
- **사영공간 위의 완전열.** $\mathbb P^n$ 의 좌표 $x_0,\dots,x_n$ 에 Koszul 복합체를 층으로 세우면 $\Lambda^p$ 자리가 $\Omega^p(p)$ 가 되고, 이 분해로 접다발과 미분형식 층의 코호몰로지를 계산한다.
- **국소 코호몰로지.** $x$ 의 거듭제곱 $x^t$ 로 만든 Koszul 복합체들의 극한이 $I$ 에 대한 [국소 코호몰로지](local-cohomology.md)를 주고, 소멸 차수가 다시 깊이다.

# 연관 문서

## 선수지식

- [사슬 복합체](chain-complexes.md)
- [외대수](exterior-algebra.md)
- [정칙 국소환](regular-local-rings.md)

## 더 알아보기

- [국소 코호몰로지](local-cohomology.md)

#ring_theory #algebra #linear_algebra #algebraic_topology
