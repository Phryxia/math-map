# Jacquet–Langlands 대응

# 개요

**Jacquet–Langlands 대응(Jacquet–Langlands correspondence)** 은 [사원수 대수](quaternion-algebras.md)의 곱셈군의 자기동형 표현을 $\mathrm{GL}\_2$ 의 첨점 표현으로 보내는 대응이다. $\mathrm{GL}\_2$ 의 첨점형식은 콤팩트하지 않은 공간 위의 함수여서, Hecke 고윳값을 구하려면 연속 스펙트럼과 [Eisenstein 급수](eisenstein-series.md)를 함께 다뤄야 한다. 정부호 사원수 대수 쪽에서는 같은 정보가 유한 집합 위의 함수로 나타나고, 고윳값 계산이 유한 [행렬](matrices.md)의 계산이 된다. Jacquet–Langlands 대응은 두 쪽의 표현이 Hecke 고윳값을 보존하며 짝지어짐을 보여, $\mathrm{GL}\_2$ 의 문제를 그 유한 계산으로 옮긴다.

# 직관

무게 $2$, 레벨 $11$ 의 첨점형식은 $f=q\prod_{n\ge1}(1-q^n)^2(1-q^{11n})^2=q-2q^2-q^3+\cdots$ 의 상수배뿐이고, $f$ 의 $T_2$ 고윳값은 $-2$ 다. $f$ 는 [모듈러 곡선](modular-curves.md) $X_0(11)$ 위의 대상이다. 모듈러 곡선에는 첨점이 있어서, 이런 고윳값을 레벨마다 구하려면 $q$ 전개나 [모듈러 기호](modular-symbols.md)를 다뤄야 한다.

같은 소수 $11$ 에서 $i^2=-1$, $j^2=-11$, $ij=-ji$ 로 정해지는 사원수 대수 $B$ 를 잡는다. $B$ 의 극대 순서환에서 왼쪽 아이디얼을 곱셈으로 같아지는 것끼리 묶으면 두 류가 나온다. 두 류 위의 함수는 2 차원 공간을 이루고, [Hecke 작용소](hecke-operators.md) $T_2$ 는 이 공간에 $2\times 2$ 정수 행렬로 작용한다. 그 고윳값은 $3$ 과 $-2$ 다.

고윳값 $3=2+1$ 은 상수함수의 것이고, Eisenstein 급수의 $T_2$ 고윳값 $1+2$ 와 같다. 남은 $-2$ 는 $f$ 의 $T_2$ 고윳값과 같다. 사원수 대수 쪽에는 첨점이 없고 계산이 유한 행렬로 끝난다. 이런 일치가 모든 레벨과 모든 Hecke 작용소에서 성립함을 보장하는 것이 Jacquet–Langlands 대응이다.

# 정의

## 사원수 대수와 분지 자리

$F$ 를 수체, $B$ 를 $F$ 위의 4 차원 중심 단순 대수라 하자. 각 자리 $v$ 에서 다음 둘 가운데 하나가 성립한다. $D_v$ 는 $F_v$ 위의 유일한 나눗셈 사원수 대수(quaternion division algebra)다.

$$
B_v=B\otimes_FF_v\thickspace\cong\thickspace M_2(F_v)\quad\text{또는}\quad D_v
$$

$B_v\cong D_v$ 인 자리들의 집합 $\Sigma$ 를 $B$ 의 **분지 집합(ramification set)** 이라 한다. $\Sigma$ 는 유한하고 크기가 짝수이며, 짝수 크기의 유한집합마다 그것을 분지 집합으로 갖는 $B$ 가 동형을 빼고 하나 있다(Hasse–Brauer–Noether 정리). $\Sigma=\varnothing$ 이면 $B=M_2(F)$ 다.

$F=\mathbb Q$ 이고 $\infty\in\Sigma$ 이면 $B$ 를 **정부호 사원수 대수(definite quaternion algebra)** 라 한다. 이때 $B^\times(\mathbb R)$ 은 중심으로 나누면 콤팩트하다. 직관 절의 $B$ 는 $\Sigma=\lbrace 11,\infty\rbrace$ 인 정부호 사원수 대수다.

## 내부형식

대수적으로 닫힌 체 위에서는 $B\cong M_2$ 이므로 $B^\times$ 와 $\mathrm{GL}\_2$ 는 같은 군이 되고, $F$ 위에서만 다르다. 이런 군 $B^\times$ 를 $\mathrm{GL}\_2$ 의 **내부형식(inner form)** 이라 한다. $\Sigma=\varnothing$ 이면 $B^\times=\mathrm{GL}\_2$ 다.

## 국소 대응

$v\in\Sigma$ 에서 $B_v^\times/F_v^\times$ 는 콤팩트이므로 $B_v^\times$ 의 기약 매끄러운 표현은 모두 유한차원이다. **국소 Jacquet–Langlands 대응(local Jacquet–Langlands correspondence)** 은 다음 전단사다.

$$
\mathrm{JL}\_v\colon\mathrm{Irr}\bigl(B_v^\times\bigr)\thickspace\xrightarrow{\thinspace\sim\thinspace}\thickspace\lbrace\mathrm{GL}\_2(F_v)\text{ 의 이산계열 표현}\rbrace
$$

이 전단사는 성질 절의 지표 항등식으로 정해진다. $B_v^\times$ 의 자명 표현은 Steinberg 표현(Steinberg representation)에, 차원이 $2$ 이상인 표현은 초첨점 표현(supercuspidal representation)에 대응한다. 이산계열 표현(discrete series representation)은 행렬 계수가 중심을 나눈 군 위에서 제곱적분 가능한 표현이다.

## 전역 대응

$\pi'=\otimes_v\pi'\_v$ 를 $B^\times(\mathbb A)$ 의 기약 자기동형 표현이고 1 차원이 아닌 것이라 하자. **Jacquet–Langlands 대응** 은 다음을 만족하는 $\mathrm{GL}\_2(\mathbb A)$ 의 첨점 표현 $\pi=\otimes_v\pi_v$ 를 $\pi'$ 에 대응시킨다.

$$
\pi_v\cong\pi'\_v\quad(v\notin\Sigma),
\qquad
\pi_v=\mathrm{JL}\_v(\pi'\_v)\quad(v\in\Sigma)
$$

이 $\pi$ 는 유일하게 존재하고, 대응은 단사이며, 상은 $\Sigma$ 의 모든 자리에서 이산계열인 첨점 표현 전체다. 직관 절의 $f$ 가 정하는 표현은 $11$ 에서 Steinberg 표현의 비분기 꼬임이고 $\infty$ 에서 무게 $2$ 의 이산계열이므로 상에 속하고, 그 원상이 두 류 위의 상수가 아닌 함수다.

# 성질

## 콤팩트성

$\Sigma\ne\varnothing$ 이면 $B^\times(F)Z(\mathbb A)\backslash B^\times(\mathbb A)$ 가 콤팩트다. $B$ 에 영인자가 없으므로 멱단원소가 없고, 그래서 첨점을 만드는 포물 부분군이 없다. 이 몫 위의 $L^2$ 는 이산 스펙트럼만 갖고, 열린 콤팩트 부분군의 불변벡터 공간이 유한차원이어서 Hecke 고윳값은 유한 행렬의 [고윳값](eigenvalues.md)이다.

정부호 사원수 대수에서는 극대 순서환 $\mathcal O\subset B$ 의 왼쪽 아이디얼류가 유한 개이고, 그 집합 위의 함수공간에 Hecke 작용소가 정수 행렬로 작용한다. 이 행렬을 Brandt 행렬(Brandt matrix)이라 한다. $T_\ell$ 의 Brandt 행렬은 각 행의 합이 $\ell+1$ 이다.

## 대각합 공식 비교

증명의 요지. 두 군에서 각각 [Selberg 대각합 공식](selberg-trace-formula.md)을 쓰면 스펙트럼 쪽과 기하 쪽의 등식이 나온다. 기하 쪽은 켤레류 위의 궤도적분의 합이다. $B^\times$ 의 정칙 반단순 켤레류는 $F$ 의 이차 확대에서 오는 원소들이고, 이것은 $\mathrm{GL}\_2$ 의 타원 켤레류와 대응한다. $\mathrm{GL}\_2$ 쪽에만 있는 분열 켤레류와 연속 스펙트럼의 기여를 정리하면 스펙트럼 쪽의 비교에서 대응이 나온다.

## 지표 항등식

$v\in\Sigma$ 와 정칙 타원원소 $\gamma$ 에서 국소 대응은 지표의 부호를 바꾼다.

$$
\Theta_{\mathrm{JL}\_v(\rho)}(\gamma)=-\thinspace\Theta_\rho(\gamma)
$$

[Vogan L 꾸러미](vogan-packets.md)에서는 $\mathrm{GL}\_2$ 쪽 표현과 $B^\times$ 쪽 표현이 같은 매개변수를 갖는 꾸러미의 두 원소이고, 성분군 $\mathbb Z/2$ 의 자명 지표와 부호 지표에 각각 대응한다. 부호 지표에 대응하는 표현이 내부형식 위에 있다는 규칙이 이 부호 $-1$ 로 나타난다.

## 류수와 종수

$\Sigma=\lbrace\infty,p\rbrace$ 인 정부호 사원수 대수의 극대 순서환의 왼쪽 아이디얼류 수 $h(p)$ 는 Eichler 의 [질량 공식](mass-formula.md)에서 다음 식으로 나온다. Jacquet–Langlands 대응으로 무게 $2$ 레벨 $p$ 의 첨점형식 공간의 차원이 $h(p)-1$ 이고, 이는 모듈러 곡선 $X_0(p)$ 의 종수다.

$$
h(p)=\frac{p-1}{12}+\frac14\Bigl(1-\Bigl(\frac{-4}{p}\Bigr)\Bigr)+\frac13\Bigl(1-\Bigl(\frac{-3}{p}\Bigr)\Bigr)
$$

| p | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| h(p) | $2$ | $1$ | $2$ | $2$ | $3$ | $3$ | $3$ | $3$ | $4$ | $4$ | $5$ |
| X₀(p) 의 종수 | $1$ | $0$ | $1$ | $1$ | $2$ | $2$ | $2$ | $2$ | $3$ | $3$ | $4$ |

$h(p)$ 는 사원수 대수의 산술에서, 종수는 [Riemann 곡면](riemann-surfaces.md)의 위상에서 정해진다. 차이 $1$ 은 상수함수, 곧 대응에서 빠지는 1 차원 표현이다.

## Shimura 곡선

$F=\mathbb Q$ 이고 $\Sigma$ 가 무한 자리를 포함하지 않으면 $B^\times(\mathbb R)\cong\mathrm{GL}\_2(\mathbb R)$ 이므로 $B^\times$ 의 산술 부분군이 상반평면에 작용하고, 그 몫이 Shimura 곡선(Shimura curve)이다. 모듈러 곡선과 달리 첨점이 없는 콤팩트 곡선이다. Jacquet–Langlands 대응으로 이 곡선의 [Jacobi 다양체](jacobian-variety.md)는 모듈러 곡선 쪽 Jacobi 다양체의 새부분과 동종(isogenous)이다. [Heegner 점과 Gross–Zagier 공식](heegner-points.md)의 Heegner 점 구성이 Shimura 곡선 위에서도 성립하므로, Gross–Zagier 공식이 Shimura 곡선으로 확장된다.

# 활용

## Brandt 행렬 알고리즘

레벨 $p$ 의 첨점형식의 Hecke 고윳값을 $\mathrm{GL}\_2$ 쪽에서 구하려면 모듈러 기호나 $q$ 전개를 다뤄야 한다. $B^\times$ 쪽에서는 $h(p)$ 차원 공간 위의 정수 행렬을 대각화한다. $p=11$ 이면 직관 절의 $2\times2$ 행렬이다. 무게가 크거나 총실수체 위의 Hilbert 모듈러 형식(Hilbert modular form)처럼 $q$ 전개를 구하기 어려운 경우에 이 방법을 쓴다.

## 내부형식의 함자성

Langlands 함자성(Langlands functoriality)은 두 군의 $L$ 군 사이의 사상이 자기동형 표현의 대응을 준다고 예측한다. 내부형식은 $L$ 군이 같은 경우이고, Jacquet–Langlands 대응은 $\mathrm{GL}\_2$ 와 그 내부형식에서 이 예측을 증명한다. 대각합 공식을 비교하는 증명 방법은 다른 군의 함자성 증명에서도 쓰이고, 일반 군에서 켤레류의 궤도적분을 맞추는 문제가 [기본 보조정리](fundamental-lemma.md)다.

## 주기와 L 값

[Waldspurger 정리와 토릭 주기](waldspurger-formula.md)의 Waldspurger 공식은 토릭 주기를 사원수 대수 위의 형식에서 계산한다. 주기가 $0$ 이 아닌 $B$ 는 $\varepsilon$ 부호로 정해지고, 그 $B$ 위의 형식에 대응하는 $\mathrm{GL}\_2$ 의 형식을 Jacquet–Langlands 대응이 준다. 두 형식의 $L$ 함수가 같으므로, 주기로 계산한 중심값이 원래 형식의 $L$ 함수의 중심값이다.

## 초특이 타원곡선

[Deuring 대응](deuring-correspondence.md)으로 $\Sigma=\lbrace\infty,p\rbrace$ 인 정부호 사원수 대수의 극대 순서환은 표수 $p$ 의 초특이 [타원곡선](elliptic-curves.md)의 자기준동형환이다. 왼쪽 아이디얼류가 초특이 곡선의 동형류와 대응하고, $T_\ell$ 의 Brandt 행렬은 $\ell$ 차 동종사상으로 그 곡선들을 이은 그래프의 인접행렬이다. 이 그래프는 [Ramanujan 그래프의 명시적 구성](ramanujan-graphs.md)의 Ramanujan 그래프이고, [초특이 동종사상 그래프](supersingular-isogeny-graphs.md)를 쓰는 암호가 이 그래프에서 구성된다.

# 연관 문서

## 선수지식

- [Langlands 강령](langlands-program.md)
- [사원수 대수](quaternion-algebras.md)
- [Selberg 대각합 공식](selberg-trace-formula.md)

## 더 알아보기

- [Waldspurger 정리와 토릭 주기](waldspurger-formula.md)

#number_theory #group_theory #algebra
