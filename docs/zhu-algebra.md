# Zhu 대수와 모듈러 불변성

# 개요

[정점작용소대수](vertex-operator-algebras.md) $V$ 의 가군 $M$ 에 지표를 붙인다.

$$
\mathrm{ch}\_M(\tau)=\mathrm{tr}\_Mq^{L_0-c/24},\qquad q=e^{2\pi i\tau}
$$

정의상 이것은 등급 차원의 생성함수이고 $q$ 의 형식급수다. 그런데 알려진 예마다 모듈러 성질을 갖는다. 격자 VOA(vertex operator algebra) 에서 theta 급수를 $\eta$ 로 나눈 꼴이 나오고, Virasoro 최소모형에서 Rocha-Caridi 공식이 나오고, [괴물 달빛](monstrous-moonshine.md)에서는 $j-744$ 가 나온다. Zhu 는 1996 년에 이것이 정리임을 증명했다.

> $V$ 가 $C_2$ 여유한이고 유리적이면 기약가군은 유한개이고 지표들이 상반평면에서 수렴하며, 그 유한차원 span 위에서 $\mathrm{SL}\_2(\mathbb Z)$ 가 작용한다.

$$
\mathrm{ch}\_{M_i}\negthinspace\left(\frac{a\tau+b}{c\tau+d}\right)=\sum_j\rho(\gamma)\_{ij}\mathrm{ch}\_{M_j}(\tau)
$$

대수적 대상에서 나온 급수가 모듈러 형식이 되는 조건을 대수 쪽에서 준 정리이며, 달빛 현상의 기반이다.

증명의 도구가 **Zhu 대수** $A(V)$ 다. 무한차원인 $V$ 에서 결합 대수 하나를 뽑아내는 구성이고, 그 대수의 기약가군이 $V$ 의 기약가군과 일대일 대응한다. 무한차원 정점대수의 표현론이 유한차원 결합대수의 표현론으로 내려오며, 가군의 분류와 지표의 모듈러성이 모두 이 구성에서 나온다.

# 직관

물리 쪽 그림에서 $\mathrm{ch}\_M(\tau)$ 는 복소 원환면 $\mathbb C/(\mathbb Z+\mathbb Z\tau)$ 위의 분배함수다. 원환면은 $\tau$ 와 $-1/\tau$ 를 같은 모양으로 보므로 분배함수도 그 두 값에서 같아야 한다. 그런데 대각합을 계산할 때는 한 방향을 시간, 다른 방향을 공간으로 고르고, 지표의 정의에 들어간 $L_0$ 가 그중 한 방향만 본다. 두 방향을 맞바꾼 계산이 같은 값을 준다는 논증은 급수가 수렴하고 대각합이 잘 정의될 때만 성립한다. 가정을 빼면 정리가 무너진다. $\mathfrak{sl}\_2$ 아핀 VOA 를 음의 정수가 아닌 레벨에서 보거나 $C_2$ 여유한이 아닌 VOA 를 보면 지표가 수렴하지 않거나, 수렴해도 모듈러 궤도가 무한차원이 된다.

$C_2$ 여유한 조건은 $C_2(V)=\mathrm{span}\lbrace a_{-2}b:a,b\in V\rbrace$ 에 대해 $\dim V/C_2(V)\lt\infty$ 를 요구한다. $V/C_2(V)$ 가 유한차원이면 그 위의 연산이 유한 단계에서 선형종속을 만들고, 그것이 모듈러 형식을 계수로 갖는 선형상미분방정식으로 번역된다.

$$
\left(\partial_q^{(n)}+g_2(\tau)\partial_q^{(n-2)}+\cdots+g_n(\tau)\right)f=0,\qquad g_k\in M_{2k}(\mathrm{SL}\_2(\mathbb Z))
$$

계수가 모듈러 형식이므로 방정식이 $\mathrm{SL}\_2(\mathbb Z)$ 에 불변이고, 따라서 유한차원 해공간도 불변이다. 지표들이 그 해공간에 들어 있으므로 모듈러 변환 아래에서 서로 섞인다. 수렴성은 정칙특이점만 갖는 방정식의 해가 첨점 근처에서 다항 증가한다는 데서 따라온다.

# 정의

## Zhu 대수

$V=\bigoplus_nV_n$ 을 등급 VOA 라 하고 동차원소 $a\in V_{\mathrm{wt}\thinspace a}$ 에 대해 두 연산을 정의한다.

$$
a\ast b=\mathop{\mathrm{Res}}\_z\left(Y(a,z)b\thinspace\frac{(1+z)^{\mathrm{wt}\thinspace a}}{z}\right),\qquad
a\circ b=\mathop{\mathrm{Res}}\_z\left(Y(a,z)b\thinspace\frac{(1+z)^{\mathrm{wt}\thinspace a}}{z^2}\right)
$$

$O(V)=\mathrm{span}\lbrace a\circ b\rbrace$ 로 두고

$$
A(V)=V/O(V)
$$

를 **Zhu 대수**라 한다. $\ast$ 가 $O(V)$ 를 내리고 몫에서 결합적이 되며, $[\mathbf1]$ 이 단위원이고 $[\omega]$ 가 중심에 들어간다. 두 식은 $z$ 의 거듭제곱 하나만 다른데, 하나는 곱을 정의하고 하나는 몫으로 날릴 부분공간을 정의한다.

## 허용가군과 최저층

허용가군은 아래로 유계인 등급 공간이다.

$$
M=\bigoplus_{n\ge0}M(n),\qquad L_0\vert_{M(n)}=h+n
$$

$M$ 이 기약이면 최저층 $M(0)$ 이 전체를 생성한다. $a\in V$ 의 성분 가운데 등급을 보존하는 $o(a)=a_{\mathrm{wt}\thinspace a-1}$ 만 $M(0)$ 을 $M(0)$ 으로 보내고, 이 작용소들이 만드는 대수가 $A(V)$ 다.

## 유한성 조건

- **$C_2$ 여유한**: $C_2(V)=\mathrm{span}\lbrace a_{-2}b\rbrace$ 에 대해 $\dim V/C_2(V)\lt\infty$ 인 것.
- **유리적**: 모든 허용가군이 완전가약.

두 조건은 논리적으로 독립이지만 알려진 예에서는 대개 함께 성립하고, 둘 다 만족하는 VOA 를 **강유리적**이라 부른다. $C_2$ 여유한이면 $A(V)$ 가 유한차원이고 기약가군이 유한개다.

## 두 정리

> **분류 정리 (Zhu).** $M\mapsto M(0)$ 이 $V$ 의 기약 허용가군의 동형류와 $A(V)$ 의 기약가군의 동형류 사이의 전단사를 준다.

> **모듈러 불변성 정리 (Zhu).** $V$ 가 $C_2$ 여유한, 유리적이고 $V_0=\mathbb C\mathbf1$ 이면 기약가군 $M_1,\dots,M_k$ 의 지표가 $\mathbb H$ 에서 수렴하고, 그 span 위에 $\mathrm{SL}\_2(\mathbb Z)$ 의 $k$ 차원 표현 $\rho$ 가 있어 위 변환식이 성립한다.

# 성질

## Virasoro 대수와 격자 VOA 의 Zhu 대수

| $V$ | $A(V)$ | 기약가군 |
|---|---|---|
| 일반 $c$ 의 Virasoro $L(c,0)$ | $\mathbb C[x]$ | $x$ 의 값 $h$ 마다 하나, 무한개 |
| Virasoro 최소모형 $L(c_{p,q},0)$ | 유한차원 몫 $\mathbb C[x]/f(x)$ | $(p-1)(q-1)/2$ 개 |
| 격자 VOA $V_L$ ($L$ 짝수) | $\mathbb C[L^\ast/L]$ | $\vert L^\ast/L\vert$ 개, 잉여류로 색인 |
| $V^\natural$ | $\mathbb C$ | 자기 자신 하나뿐 |

$A(V)=\mathbb C[x]$ 인 경우 $x=[\omega]$ 이고 그 고유값이 최고무게 $h$ 다. 최소모형에서는 $f(x)$ 의 근이 Kac 표의 $h_{r,s}$ 값들이라 가군 개수가 유한하다. 기약가군 분류가 다항식 하나의 근을 찾는 문제로 내려온다.

$V^\natural$ 은 $A(V)=\mathbb C$ 라 기약가군이 자기 자신뿐이고(**홀로모픽**), 지표가 1 차원 표현이므로 $\mathrm{SL}\_2(\mathbb Z)$ 에 대해 상수배로만 변한다. 무게 0 이고 첨점에서 극이 하나인 그런 함수는 $j$ 의 상수 이동뿐이다.

## 증명의 단계

1. **원환면 위 1 점 함수 공간의 정의.** $\mathrm{tr}\_Mo(a)q^{L_0-c/24}$ 꼴을 $a\in V$ 에 대해 모은 공간을 놓고 그것이 만족하는 재귀식(Zhu 재귀)을 세운다. Weierstrass $\wp$ 함수와 Eisenstein 급수가 계수로 들어온다.
2. **유한차원성.** $C_2$ 여유한 조건으로 이 공간이 유한차원임을 보인다. $V/C_2(V)$ 의 유한 생성원으로 재귀를 끝내는 논증이며 가장 기술적인 단계다.
3. **$\mathrm{SL}\_2(\mathbb Z)$ 작용.** 1 점 함수 공간이 격자 $\mathbb Z+\mathbb Z\tau$ 의 기저 교체에 불변이므로 작용이 생긴다.
4. **지표가 기저.** 유리성으로 기약가군의 지표들이 이 공간을 채운다.

$C_2$ 여유한 가정을 빼면 2 가 무너진다. 아핀 VOA 의 승인가능하지 않은 레벨과 로그 등각장론이 이 조건을 만족하지 않으며, 이 경우 지표만으로는 모듈러 표현이 닫히지 않고 $\tau$ 의 로그를 포함한 유사지표를 함께 넣는다. Miyamoto 와 Huang 의 후속 작업이 $C_2$ 여유한이되 유리적이 아닌 경우로 정리를 넓혔다.[^1]

# 활용

## $j$ 함수의 출현

Zhu 정리는 괴물 달빛에서 $j$ 가 나오는 자리를 설명한다. $V^\natural$ 이 홀로모픽이므로 지표가 $\mathrm{SL}\_2(\mathbb Z)$ 아래 불변인 무게 0 함수이고, 등급이 $-1$ 에서 시작하므로 첨점에서 단순극을 가지며, $V^\natural_1=0$ 이라 상수항이 0 이다. 이 세 조건을 만족하는 함수는 하나뿐이다.

$$
\mathrm{ch}\_{V^\natural}(\tau)=J(\tau)=j(\tau)-744=q^{-1}+196884q+\cdots
$$

홀로모픽 $c=24$ VOA 이면 $j$ 가 반드시 나오므로, 달빛의 남은 내용은 그 VOA 위에 괴물군이 작용한다는 쪽이다.

## 모듈러 텐서범주와 Verlinde 공식

기약가군들이 융합곱으로 텐서범주를 이루고, 지표의 $S$ 행렬이 그 범주의 $S$ 행렬과 일치한다. Verlinde 공식은 융합 구조상수를 $S$ 행렬로 준다.

$$
N_{ij}^k=\sum_m\frac{S_{im}S_{jm}\overline{S_{km}}}{S_{0m}}
$$

대수의 표현론인 왼쪽이 해석적 변환 행렬인 오른쪽으로 계산된다. 이 등식을 진술하려면 지표의 모듈러성이 먼저 있어야 한다. Huang 이 강유리 VOA 에 대해 증명했고, 3 차원 위상적 장론과 매듭 불변량으로 이어진다.

## 등각장론의 분류

$c$ 를 고정하고 홀로모픽 VOA 를 분류하는 문제는 격자 분류의 VOA 판본이다. $c=8$ 에서 $V_{E_8}$ 하나, $c=16$ 에서 둘, $c=24$ 에서 71 개(Schellekens 목록)로 [Niemeier 격자](niemeier-lattices.md)의 24 개와 평행하게 커진다. 무게 0 모듈러 함수의 공간이 유한차원이므로 가능한 지표가 유한개로 제한되고, 그 목록이 분류의 후보를 만든다.

[^1]: 원논문은 Y. Zhu, *Modular invariance of characters of vertex operator algebras*, J. Amer. Math. Soc. 9 (1996). $C_2$ 여유한이되 유리적이 아닌 경우로의 확장은 M. Miyamoto, *Modular invariance of vertex operator algebras satisfying $C_2$ cofiniteness*, Duke Math. J. 122 (2004). Verlinde 공식의 증명은 Y.-Z. Huang, *Vertex operator algebras and the Verlinde conjecture*, Commun. Contemp. Math. 10 (2008). 교과서적 정리는 C. Dong–J. Lepowsky 와 A. Matsuo–K. Nagatomo 의 강의록.

# 연관 문서

## 선수지식

- [정점작용소대수](vertex-operator-algebras.md)

## 더 알아보기

- [모듈러 텐서범주와 3 차원 TQFT](modular-tensor-categories.md)
- [Schellekens 목록과 홀로모픽 c=24 VOA 분류](schellekens-list.md)

#algebra #complex_analysis #number_theory #theorem
