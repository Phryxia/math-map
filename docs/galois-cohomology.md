# Galois 코호몰로지

# 개요

**Galois 코호몰로지(Galois cohomology)** 는 체 $K$ 의 절대 Galois 군 $G_K=\mathrm{Gal}(K^{\mathrm{sep}}/K)$ 와 그 군이 작용하는 가환군 $A$ 에 대한 [군 코호몰로지](group-cohomology.md) $H^n(K,A)=H^n(G_K,A)$ 다. 코사슬을 연속 함수로 제한해 정의한다.

$A=\mu_n$ 에서 차수 $1$ 이 [Kummer 이론](kummer-theory.md)의 군 $K^{\times}/(K^{\times})^{n}$ 이 되고, 차수 $2$ 가 [Brauer 군](brauer-groups.md)의 $n$ 비틀림이 된다. 비가환 계수의 차수 $1$ 은 $K$ 위의 대수적 대상의 형식(form)을 분류한다.

# 직관

Kummer 이론은 $1$ 의 원시 $n$ 제곱근을 포함하는 체 $K$ 에서 지수 $n$ 아벨 확대를 $K^{\times}/(K^{\times})^{n}$ 의 부분군으로 분류한다. $K=\mathbb Q(i)$, $n=2$ 에서 제곱류 $a$ 마다 확대 $K(\sqrt a)$ 가 하나씩 있고, 확대 $L$ 하나마다 Galois 군 $\mathrm{Gal}(L/K)$ 가 따로 있다. 모든 $a$ 를 한 군으로 다루려면 $\sqrt a$ 를 전부 포함하는 체가 있어야 하고, 그런 체는 $K$ 의 유한 확대가 아니다.

$K$ 의 분리 대수적 원소를 전부 모은 $K^{\mathrm{sep}}$ 를 쓰면 $\sigma\in G_K$ 마다 $\chi_a(\sigma)=\sigma(\sqrt a)/\sqrt a\in\lbrace\pm1\rbrace$ 가 정해지고, $a\mapsto\chi_a$ 가 $K^{\times}/(K^{\times})^{2}$ 에서 준동형 $G_K\to\lbrace\pm1\rbrace$ 의 군으로 가는 단사다. $\chi_a(\sigma)$ 는 $\sigma$ 가 유한 확대 $K(\sqrt a)$ 에서 하는 작용만으로 정해진다. $G_K$ 는 무한군이어서 이 조건이 없는 준동형도 있고, 그런 준동형은 어느 확대에서도 오지 않는다.

그래서 값이 어떤 유한 확대 위의 작용만으로 정해지는 함수만 쓴다. 이 함수가 아래 위상에서 연속인 함수이고, 그렇게 고르면 Kummer 의 대응이 $\mathrm{Hom}\_{\mathrm{cont}}(G_K,\mu_n)\cong K^{\times}/(K^{\times})^{n}$ 으로 적힌다. 같은 함수로 군 코호몰로지의 코사슬을 만들면 작용이 자명한 $\mu_n$ 에서 $H^1$ 이 연속 준동형의 군이므로, 위 식이 $H^1(K,\mu_n)\cong K^{\times}/(K^{\times})^{n}$ 이다.

# 정의

## Krull 위상

$L$ 이 $K$ 의 유한 Galois 확대를 지날 때 $\mathrm{Gal}(K^{\mathrm{sep}}/L)$ 들을 단위원의 근방 기저로 하는 $G_K$ 의 위상이 **Krull 위상(Krull topology)** 이다. 이 위상으로

$$
G_K\cong\varprojlim_L\mathrm{Gal}(L/K)
$$

이고, $G_K$ 는 콤팩트이며 완전 비연결인 위상군, 곧 **프로유한군(profinite group)** 이다. [Galois 이론](galois-theory.md)의 대응은 $G_K$ 의 닫힌 부분군과 $K^{\mathrm{sep}}/K$ 의 중간체 사이의 전단사로 확장되고, 열린 부분군이 유한 확대에 대응한다.

## 이산 가군

$G_K$ 가 작용하는 가환군 $A$ 가 모든 원소의 안정자가 열린 부분군이면 **이산 $G_K$ 가군(discrete module)** 이라 한다. 동치 조건은 $A=\bigcup_L A^{\mathrm{Gal}(K^{\mathrm{sep}}/L)}$ 이다. $K^{\mathrm{sep}}$, $(K^{\mathrm{sep}})^{\times}$, $\mu_n$, 타원곡선 $E$ 의 $E(K^{\mathrm{sep}})$ 와 $E\lbrack m\rbrack$ 가 예다.

## 연속 코사슬

$C^n(G_K,A)$ 를 연속 함수 $G_K^n\to A$ 의 군으로 두고 막대 분해의 코경계 공식을 그대로 쓴다. 그 코호몰로지가

$$
H^n(K,A)=H^n(G_K,A)
$$

다. 연속 함수 $G_K^n\to A$ 는 어떤 유한 Galois 확대 $L$ 에서 $\mathrm{Gal}(L/K)^n$ 을 거쳐 $A^{\mathrm{Gal}(K^{\mathrm{sep}}/L)}$ 으로 가므로, 유한군의 코호몰로지를 팽창 사상으로 이은 극한과 같다.[^1]

$$
H^n(K,A)\cong\varinjlim_L H^n\big(\mathrm{Gal}(L/K),A^{\mathrm{Gal}(K^{\mathrm{sep}}/L)}\big)
$$

# 성질

## 팽창–제한 완전열

$H$ 가 $G_K$ 의 닫힌 정규 부분군이면 다음이 완전하다. 이것이 **팽창–제한 완전열(inflation–restriction sequence)** 이다.

$$
0\longrightarrow H^1(G_K/H,A^H)\xrightarrow{\mathrm{inf}}H^1(G_K,A)\xrightarrow{\mathrm{res}}H^1(H,A)^{G_K/H}
$$

$H=G_L$ 로 두면 $K$ 위의 류가 $L$ 로 올렸을 때 사라지는지를 $\mathrm{Gal}(L/K)$ 의 코호몰로지로 판정한다.

## Hilbert 정리 90 의 극한

[Hilbert 정리 90](hilbert-theorem-90.md)의 코호몰로지 판본은 모든 유한 Galois 확대 $L/K$ 에서 $H^1(\mathrm{Gal}(L/K),L^{\times})=1$ 이다. 극한을 취하면

$$
H^1(K,(K^{\mathrm{sep}})^{\times})=1,\qquad H^n(K,K^{\mathrm{sep}})=0\quad(n\ge1)
$$

이다. 둘째 식은 가법 판본에서 같은 방법으로 나온다.

## Kummer 열

$K$ 의 표수가 $n$ 을 나누지 않으면 $n$ 제곱 사상은 $(K^{\mathrm{sep}})^{\times}$ 에서 전사이고, 짧은 완전열

$$
1\longrightarrow\mu_n\longrightarrow(K^{\mathrm{sep}})^{\times}\xrightarrow{\thinspace x\mapsto x^n\thinspace}(K^{\mathrm{sep}})^{\times}\longrightarrow1
$$

을 얻는다. 이 열이 **Kummer 열(Kummer sequence)** 이다. 긴 완전열에 $H^1(K,(K^{\mathrm{sep}})^{\times})=1$ 을 넣으면 다음이 나온다.

$$
H^1(K,\mu_n)\cong K^{\times}/(K^{\times})^{n},\qquad H^2(K,\mu_n)\cong\mathrm{Br}(K)\lbrack n\rbrack
$$

여기서 $\mathrm{Br}(K)=H^2(K,(K^{\mathrm{sep}})^{\times})$ 이고, 이 군이 중심단순대수의 Brauer 동치류의 군과 같다. $\mu_n\subseteq K$ 이면 $\mu_n\cong\mathbb Z/n$ 이므로 첫째 식이 Kummer 이론의 대응이다.

표수 $p$ 에서 $n=p$ 이면 같은 자리에 $0\to\mathbb Z/p\to K^{\mathrm{sep}}\xrightarrow{\wp}K^{\mathrm{sep}}\to0$, $\wp(x)=x^p-x$ 를 쓰고, 가법 판본으로 $H^1(K,\mathbb Z/p)\cong K/\wp(K)$ 를 얻는다. 이것이 [Artin–Schreier 이론](artin-schreier-theory.md)의 대응이다.

## 비가환 H¹ 과 형식

$A$ 가 가환이 아니어도 $H^0$ 과 $H^1$ 은 정의된다. $H^1(K,A)$ 는 군이 아니라 자명한 류를 밑점으로 갖는 집합이다.

$X$ 가 $K$ 위의 대수적 대상(이차형식, 대수, 대수다양체)이면 $K^{\mathrm{sep}}$ 위에서 $X$ 와 동형이 되는 $K$ 위의 대상, 곧 $X$ 의 **형식(form)** 의 동형류가 $H^1(K,\mathrm{Aut}(X))$ 와 전단사다. 동형 $f:X'\to X$ 에 코사이클 $\sigma\mapsto f\circ\sigma(f)^{-1}$ 을 대응시킨다. 이 대응이 **Galois 강하(Galois descent)** 다.

- 표수가 $2$ 가 아니면 차원 $n$ 의 비퇴화 이차형식은 $H^1(K,\mathrm O_n)$ 으로 분류된다.
- 차수 $n$ 의 중심단순대수는 $H^1(K,\mathrm{PGL}\_n)$ 으로 분류되고, $1\to\mathbb G_m\to\mathrm{GL}\_n\to\mathrm{PGL}\_n\to1$ 의 연결 사상이 이 집합을 $\mathrm{Br}(K)$ 로 보낸다.
- Hilbert 정리 90 의 비가환 판본 $H^1(K,\mathrm{GL}\_n)=1$ 은 $K$ 위의 $n$ 차원 벡터 공간의 형식이 자명한 것 하나뿐이라는 진술이다.

## 코호몰로지 차원

$p$ 비틀림 이산 가군 $A$ 전부에서 $n\gt d$ 이면 $H^n(K,A)=0$ 인 가장 작은 $d$ 가 **$p$ 코호몰로지 차원(cohomological dimension)** $\mathrm{cd}\_p(K)$ 다.

- 유한체 $\mathbb F_q$ 에서 $G_K\cong\hat{\mathbb Z}$ 이고 Frobenius $F$ 가 위상적 생성원이다. 유한한 $A$ 에 대해 $H^1(\mathbb F_q,A)=A/(F-1)A$ 이고 $n\ge2$ 에서 $H^n=0$ 이므로 $\mathrm{cd}=1$ 이다. 특히 $\mathrm{Br}(\mathbb F_q)=0$ 이다.
- $p$ 진 국소체 $K$ 에서는 모든 소수 $\ell$ 에 대해 $\mathrm{cd}\_\ell(K)=2$ 이고, [국소 유체론](local-class-field-theory.md)이 $H^2(K,(K^{\mathrm{sep}})^{\times})=\mathrm{Br}(K)\cong\mathbb Q/\mathbb Z$ 를 준다.

## Tate 국소 쌍대성

$K$ 가 $p$ 진 국소체이고 $A$ 가 유한 이산 가군이면 $A'=\mathrm{Hom}(A,\mu)$ 에 대해 컵곱

$$
H^i(K,A)\times H^{2-i}(K,A')\longrightarrow H^2(K,\mu)\cong\mathbb Q/\mathbb Z
$$

이 $i=0,1,2$ 에서 완전쌍이다. 이것이 **Tate 국소 쌍대성(Tate local duality)** 이다.[^2] 여기서 $\mu$ 는 $1$ 의 거듭제곱근 전체다. 세 군의 위수 사이에는 [Euler 지표](euler-characteristic.md) 공식 $\dfrac{\char35{}H^0\cdot\char35{}H^2}{\char35{}H^1}=\vert\char35{}A\vert\_K$ 가 성립하고, $\vert\cdot\vert\_K$ 는 $K$ 의 정규화된 절댓값이다.

# 활용

- [Selmer 군과 Tate–Shafarevich 군](selmer-tate-shafarevich.md): Kummer 열의 타원곡선 판본이 $E(K)/mE(K)$ 를 $H^1(K,E\lbrack m\rbrack)$ 에 넣고, 국소 조건으로 자른 부분군이 Selmer 군이다.
- [Poitou–Tate 완전열](poitou-tate.md): 수체 위의 Galois 코호몰로지를 모든 자리의 국소 코호몰로지와 Tate 국소 쌍대성으로 잇는 완전열이다.
- [Brauer 군](brauer-groups.md): $\mathrm{Br}(K)=H^2(K,(K^{\mathrm{sep}})^{\times})$ 로 계산하고, 국소체에서 불변량 $\mathrm{inv}:\mathrm{Br}(K_v)\cong\mathbb Q/\mathbb Z$ 가 나온다.
- [Witt 환](witt-ring.md): 기본 아이디얼의 여과의 층 $I^n/I^{n+1}$ 이 $H^n(K,\mathbb Z/2)$ 와 같다는 Milnor 추측의 우변이 Galois 코호몰로지다.
- [변형환](deformation-rings.md): [Galois 표현](galois-representations.md)의 변형의 접공간과 장애가 $H^1$ 과 $H^2$ 로 정의된다.

[^1]: J.-P. Serre, *Galois Cohomology*, Springer, 1997, 1장 2절. 비가환 $H^1$ 과 형식의 분류는 3장이다.
[^2]: J. Neukirch, A. Schmidt, K. Wingberg, *Cohomology of Number Fields*, 2nd ed., Grundlehren 323, Springer, 2008, 7장 2절.

# 연관 문서

## 선수지식

- [Kummer 이론](kummer-theory.md)

## 더 알아보기

- [Selmer 군과 Tate–Shafarevich 군](selmer-tate-shafarevich.md)

#field_theory #number_theory #group_theory #algebra
