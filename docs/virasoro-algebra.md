# Virasoro 대수

# 개요

**Virasoro 대수(Virasoro algebra)** 는 원 위의 다항식 벡터장이 이루는 Witt 대수의 유일한 비자명 중심확대다. 원 위의 벡터장 $L_n=-t^{n+1}\partial_t$ 들은 교환자 $\lbrack L_m,L_n\rbrack=(m-n)L_{m+n}$ 으로 무한차원 [Lie 대수](lie-algebras.md)를 이루지만, 2 차원 등각장론에서 이 대칭이 상태공간에 작용하면 교환자에 상수항이 하나 더 붙는다. Virasoro 대수는 그 상수항을 중심원소의 값 $c$ 로 기록한 대수이고, $c$ 는 그 대칭을 갖는 이론을 가르는 첫 자료다.

# 직관

원 위의 벡터장은 교환자로 무한차원 Lie 대수를 이룬다. 복소 기저로 쓰면 $L_n=-t^{n+1}\partial_t$ 이고 괄호가 다음이다.

$$
\lbrack L_m,L_n\rbrack=(m-n)L_{m+n}
$$

이것이 **Witt 대수(Witt algebra)** 다.

이 대수의 최고무게 표현을 찾는다. $L_0$ 의 고윳값으로 등급을 매기고 $L_{-1},L_{-2},\dots$ 를 올림, $L_1,L_2,\dots$ 를 내림으로 쓴다. 최고무게 벡터 $v_h$ 는 $L_0v_h=hv_h$ 이고 $L_nv_h=0$ ($n\gt 0$)이다. 등급 1 의 공간은 $L_{-1}v_h$ 하나가 펼치고, 노름을 재면 다음이다.

$$
\langle L_{-1}v_h,L_{-1}v_h\rangle=\langle v_h,L_1L_{-1}v_h\rangle=\langle v_h,2L_0v_h\rangle=2h
$$

등급 2 로 가면 $L_{-2}v_h$ 와 $L_{-1}^2v_h$ 둘이고, Gram [행렬](matrices.md)을 적으려면 $L_2L_{-2}v_h$ 를 계산해야 한다. Witt 대수의 괄호로는 $L_2L_{-2}v_h=\lbrack L_2,L_{-2}\rbrack v_h=4L_0v_h=4hv_h$ 다. 그러면 Gram 행렬이 $h$ 만으로 정해지고 모든 등급에서 자유도가 $h$ 하나다.

중심항을 넣으면 $\lbrack L_2,L_{-2}\rbrack=4L_0+\frac{c}{2}$ 가 되어 $L_2L_{-2}v_h=(4h+\frac c2)v_h$ 다. Gram 행렬이 $h$ 와 $c$ 둘로 정해지고, 두 매개변수가 독립이므로 표현론이 $(c,h)$ 평면의 문제가 된다.

Gram 행렬식이 $0$ 이 되는 자리가 핵이 생기는 자리다. 등급 2 에서 행렬식을 계산하면 다음이다.

$$
\det=32h\lbrack h^2+\tfrac{1}{8}(c-5)h+\tfrac{1}{2}c\thinspace\rbrack
$$

$h=0$ 과 두 근에서 핵이 생긴다. 핵의 원소가 **널 벡터**이고, 그것으로 몫을 취한 것이 기약 표현이다. 널 벡터가 언제 생기는지를 모든 등급에서 묶으면 Kac 행렬식 공식이 나온다.

# 정의

## Virasoro 대수

**Virasoro 대수** $\mathrm{Vir}$ 는 기저 $\lbrace L_n:n\in\mathbb Z\rbrace\cup\lbrace C\rbrace$ 와 다음 괄호를 가진 복소 Lie 대수다.

$$
\lbrack L_m,L_n\rbrack=(m-n)L_{m+n}+\frac{1}{12}(m^3-m)\thinspace\delta_{m+n,0}\thinspace C,\qquad \lbrack C,\mathrm{Vir}\rbrack=0
$$

$\mathbb CC$ 로 나눈 몫이 Witt 대수 $\mathcal W=\mathrm{Der}\thinspace\mathbb C\lbrack t,t^{-1}\rbrack$ 다. 표현에서 $C$ 가 스칼라 $c$ 로 작용할 때 그 $c$ 가 **중심전하(central charge)** 다.

삼각분해는 $\mathrm{Vir}=\mathrm{Vir}\_{-}\oplus(\mathbb CL_0\oplus\mathbb CC)\oplus\mathrm{Vir}\_{+}$ 이고 $\mathrm{Vir}\_{\pm}$ 는 $L_n$ ($\pm n\gt 0$)이 펼친다.

## 최고무게 가군

$(c,h)\in\mathbb C^2$ 에 대해 **Verma 가군(Verma module)** $M(c,h)$ 는 $v_h$ 를 생성원으로 하고 다음을 만족하는 가군이다.

$$
Cv_h=cv_h,\qquad L_0v_h=hv_h,\qquad L_nv_h=0\quad(n\gt 0)
$$

$L_0$ 의 고윳값이 $h+N$ 인 부분공간을 $M(c,h)\_N$ 으로 적는다. 직관 절에서 $M(c,h)\_1$ 은 $L_{-1}v_h$ 가, $M(c,h)\_2$ 는 $L_{-2}v_h$ 와 $L_{-1}^2v_h$ 가 펼친다.

$M(c,h)$ 의 최대 진부분가군으로 나눈 몫이 기약 가군 $L(c,h)$ 다. 진부분가군의 0 이 아닌 원소를 **널 벡터(null vector)** 라 한다.

$h=0$ 이면 $L_1L_{-1}v_0=2L_0v_0=0$ 이고 $L_2L_{-1}v_0=3L_1v_0=0$ 이므로, $L_{-1}v_0$ 은 모든 $L_n$ ($n\gt 0$)이 죽이는 벡터다. 그래서 $L_{-1}v_0$ 이 생성하는 부분가군은 진부분가군이고 $L_{-1}v_0$ 은 널 벡터다.

## Shapovalov 형식

$M(c,h)$ 에는 $\langle v_h,v_h\rangle=1$ 과 $L_n^\dagger=L_{-n}$ 으로 정해지는 쌍선형형식이 하나 있다. 등급이 다른 부분공간끼리 직교하므로 각 등급에서 유한크기 Gram 행렬이 나오고, 그 행렬이 **Shapovalov 형식(Shapovalov form)** 이다.

등급 1 의 Gram 행렬은 $1\times1$ 행렬 $(2h)$ 이고, 등급 2 의 행렬식은 직관 절의 $32h\lbrack h^2+\tfrac18(c-5)h+\tfrac12c\rbrack$ 다.

## 최소모형

양의 정수 $m\ge 2$ 에 대해 다음 값을 **최소모형 중심전하(minimal model central charge)** 라 한다.

$$
c_m=1-\frac{6}{m(m+1)}
$$

$1\le s\le r\le m-1$ 인 정수쌍 $(r,s)$ 에 대응하는 무게가 다음이다.

$$
h_{r,s}=\frac{\bigl((m+1)r-ms\bigr)^2-1}{4m(m+1)}
$$

$m=3$ 이면 $c_3=1/2$ 이고, $(r,s)=(1,1),(2,1),(2,2)$ 에서 $h_{r,s}=0,\thinspace 1/2,\thinspace 1/16$ 이다.

# 성질

## Verma 가군의 기저와 근기

$M(c,h)$ 의 기저는 $L_{-n_1}\cdots L_{-n_k}v_h$ ($n_1\ge\cdots\ge n_k\ge 1$)이므로 $M(c,h)\_N$ 의 차원은 $N$ 의 분할수 $p(N)$ 이다. 널 벡터는 Shapovalov 형식의 근기(radical)에 놓인다. 그래서 $M(c,h)$ 가 기약인 것과 모든 등급의 Gram 행렬식이 $0$ 이 아닌 것이 같다.

## 최소모형의 표현

$c=c_m$ 에서 유니터리 기약 표현은 $h_{r,s}$ 를 무게로 하는 것뿐이고 개수가 $m(m-1)/2$ 다.

## 중심확대의 유일성

> **정리.** [Lie 대수 코호몰로지](lie-algebra-cohomology.md) $H^2(\mathcal W,\mathbb C)$ 가 1 차원이므로 Witt 대수의 1 차원 중심확대는 스칼라배를 빼고 유일하다.

증명의 요지는 2 차 코사이클 $\psi$ 를 등급으로 제한하는 것이다. $L_0$ 의 작용으로 $\psi(L_m,L_n)$ 이 $m+n=0$ 일 때만 0 이 아니고, 코사이클 조건을 $(L_m,L_n,L_{-m-n})$ 에 적용하면 $\psi(L_m,L_{-m})$ 에 대한 점화식이 나온다. 그 해가 $m^3-m$ 의 상수배이고, $m$ 의 1 차항은 코경계라 없앨 수 있다.

[군 확대](group-extensions.md)에서 확대의 분류가 2 차 코호몰로지라는 것과 같은 계산이고, 중심전하가 그 1 차원 공간의 좌표다.

## Kac 행렬식 공식

> **정리.** $M(c,h)\_N$ 의 Shapovalov 행렬식은 상수배를 빼고 다음이다[^1].

$$
\det\_N(c,h)=\prod\_{\substack{r,s\ge 1\cr rs\le N}}\bigl(h-h\_{r,s}(c)\bigr)^{p(N-rs)}
$$

$h_{r,s}(c)$ 는 $c$ 를 $m$ 으로 매개화해 위 최소모형 공식으로 쓴 것을 복소 $m$ 까지 늘린 것이다. 증명의 요지는 양변의 $h$ 에 대한 차수와 최고차항을 맞추고, $h=h_{r,s}$ 에서 널 벡터가 실제로 존재함을 등급 $rs$ 에서 구성하는 것이다.

$M(c,h)$ 가 기약인 것은 모든 $r,s\ge 1$ 에 대해 $h\ne h_{r,s}(c)$ 인 것과 같다.

## 유니터리 표현의 분류

> **정리.** $L(c,h)$ 가 유니터리이려면 $c\ge 1,\thinspace h\ge 0$ 이거나 $c=c_m$ 이고 $h=h_{r,s}$ 여야 한다[^2].

필요조건은 Gram 행렬식의 부호를 추적해 나온다. 등급 1 에서 $2h\ge 0$ , 등급 $N$ 에서 $c\ge 0$ 이 따라오고, $0\lt c\lt 1$ 에서는 행렬식의 영점 곡선 $h=h_{r,s}(c)$ 들이 $(c,h)$ 평면을 영역으로 자르는데 유니터리 영역이 곡선들의 교차점으로 줄어든다. 그 교차점이 최소모형의 $(c_m,h_{r,s})$ 다.

충분조건은 코셋 구성으로 모형을 실제로 만들어 얻는다. $c_m$ 의 표현이 $\mathfrak{su}(2)$ 레벨 $m-2$ 와 레벨 1 의 아핀 표현에서 Sugawara 로 만든 두 Virasoro 작용의 차로 나온다.

## Sugawara 구성

> **정리.** 레벨 $k\ne-h^\vee$ 의 [아핀 Lie 대수](affine-lie-algebras.md) 표현에는 중심전하 $c=\dfrac{k\dim\mathfrak g}{k+h^\vee}$ 의 Virasoro 작용이 있다.

$\mathfrak g$ 의 직교기저 $\lbrace x^a\rbrace$ 를 잡고 $J^a_n=x^a\otimes t^n$ 이라 쓴다. 다음 이차식이 Virasoro 관계를 만족한다.

$$
L_n=\frac{1}{2(k+h^\vee)}\sum\_a\sum\_{m\in\mathbb Z}{:}J^a_mJ^a_{n-m}{:}
$$

$h^\vee$ 는 쌍대 Coxeter 수이고 콜론은 정규순서다. 검산의 요지는 $\lbrack L_n,J^a_m\rbrack=-mJ^a_{n+m}$ 을 먼저 보이고, 그것으로 $\lbrack L_m,L_n\rbrack$ 을 계산하는 것이다. 분모가 $k+h^\vee$ 이므로 임계 레벨 $k=-h^\vee$ 에서 이 구성이 작동하지 않는다.

# 활용

- **최소모형.** 중심전하 $c_m$ 의 유니터리 표현이 유한개라는 사실이 2 차원 임계현상의 분류에 쓰인다. $m=3$ 은 $c=1/2$ 이고 표현이 셋이며, 이것이 2 차원 [Ising 모형](ising-model.md)의 임계점에 대응한다. $m=4$ 는 $c=7/10$ 이고 삼중임계 Ising 모형(tricritical Ising model)의 임계점이며, $m=5$ 는 $c=4/5$ 이고 세 상태 [Potts 모형](potts-model.md)의 임계점이다.

- **정점작용소대수.** [정점작용소대수](vertex-operator-algebras.md)의 공리는 Virasoro 원소 $\omega$ 를 요구하고, 그 모드가 중심전하 $c$ 의 Virasoro 대수를 이룬다. 등급과 모듈러성이 이 원소에서 나오므로 모듈러 형식 쪽 응용에 필요하다.

- **Wess–Zumino–Witten 모형.** [Wess–Zumino–Witten 모형](wess-zumino-witten.md)의 에너지–운동량 텐서를 위 Sugawara 이차식으로 만든다. 그 모형의 중심전하 $c=k\dim\mathfrak g/(k+h^\vee)$ 가 Sugawara 정리의 값이다.

- **모듈라이 공간.** [곡선의 모듈라이 공간](moduli-of-curves.md) 위의 벡터다발 구성에 Virasoro 작용을 쓴다. 원 위의 벡터장이 곡면을 붙이는 변형을 생성하므로 중심확대가 다발의 사영성을 결정한다.

- **Kac 행렬식.** 위 행렬식 공식의 영점이 분할수 $p(N-rs)$ 를 지수로 가지므로, 특정 $(c,h)$ 에서 기약 가군의 지표가 분할수의 생성함수에서 널 벡터 기여를 뺀 꼴로 나온다. 최소모형의 지표가 그렇게 얻어지는 모듈러 함수다.

[^1]: V. Kac, *Highest weight representations of infinite dimensional Lie algebras*, Proc. International Congress of Mathematicians, Helsinki, 1978.
[^2]: P. Goddard, A. Kent, D. Olive, *Unitary representations of the Virasoro and super-Virasoro algebras*, Comm. Math. Phys. 103 (1986), 105–119.

# 연관 문서

## 선수지식

- [Lie 대수](lie-algebras.md)
- [Lie 대수 코호몰로지](lie-algebra-cohomology.md)

## 더 알아보기

- [정점작용소대수](vertex-operator-algebras.md)

#algebra #group_theory #complex_analysis #combinatorics
