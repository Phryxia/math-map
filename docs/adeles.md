# 아델

# 개요

**아델 환(adele ring)** 은 유리수를 [실수](real-numbers.md)와 모든 소수의 [p 진수](p-adic-numbers.md)에 한꺼번에 넣어 보는 환이다. $12/5$ 의 실수 절댓값 $12/5$ 와 $2,3,5$ 진 절댓값 $1/4,1/3,5$ 를 모두 곱하면 $1$ 이 나오는데, 이 관계는 모든 자리를 함께 볼 때만 성립한다. 아델 환은 모든 자리를 한 환의 좌표로 묶어, 수체의 산술을 국소콤팩트 환 위의 해석으로 다룬다.

# 직관

$12/5$ 의 절댓값을 자리마다 잰다. 실수 절댓값은 $12/5$ 이고, [p 진수](p-adic-numbers.md)의 절댓값은 $p=2$ 에서 $1/4$, $p=3$ 에서 $1/3$, $p=5$ 에서 $5$, 그 밖의 소수에서 $1$ 이다. 이것을 모두 곱하면 $1$ 이다. 어느 한 자리를 빼면 곱이 $1$ 이 아니므로, 이 관계를 적으려면 $12/5$ 를 [실수](real-numbers.md)와 모든 $\mathbb Q_p$ 에 동시에 넣은 좌표의 묶음 $(12/5,12/5,12/5,\dots)$ 로 보아야 한다.

이 묶음에서 $p$ 진 정수 $\mathbb Z_p$ 밖에 있는 좌표는 $p=5$ 하나뿐이다. 분모에 나오는 소수가 유한 개이므로 어느 유리수든 유한 개의 좌표만 $\mathbb Z_p$ 밖에 있다. 그래서 좌표 묶음 가운데 유한 개를 빼고 모든 좌표가 $\mathbb Z_p$ 안에 있는 것만 모은다. 이것이 아델이다.

정수 쪽에서는 [중국인의 나머지 정리](chinese-remainder-theorem.md)가 같은 묶음을 준다. $\mathbb Z/12\mathbb Z\cong\mathbb Z/4\mathbb Z\times\mathbb Z/3\mathbb Z$ 처럼 $n$ 으로 나눈 나머지는 $n$ 을 나누는 소수 거듭제곱별 나머지로 쪼개진다. 모든 $n$ 에 대한 나머지를 서로 맞물리게 모으면 소수별 $p$ 진 정수의 묶음이 된다.

$$
\hat{\mathbb Z}=\varprojlim_n\mathbb Z/n\mathbb Z\cong\prod_p\mathbb Z_p
$$

여기에 분모를 허용하고 실수 좌표를 붙인 것이 유리수의 아델 환이다.

# 정의

## 아델 환

$K$ 가 [수체](algebraic-number-fields.md)(또는 함수체)이고 $v$ 가 그 자리(place)일 때, $K_v$ 를 완비화, $\mathcal O_v$ 를 그 정수환이라 하자. 아르키메데스 자리에서는 $\mathcal O_v$ 조건을 붙이지 않는다. $K$ 의 **아델 환** $\mathbb A_K$ 는 다음 **제한직적(restricted product)** 이다.

$$
\mathbb A_K={\prod_v}'\thinspace(K_v,\mathcal O_v)
=\Big\lbrace(x_v)\in\prod_vK_v:\text{거의 모든 } v \text{ 에서 } x_v\in\mathcal O_v\Big\rbrace
$$

"거의 모든" 은 유한 개를 뺀 모든 자리라는 뜻이다. 직관 절의 $(12/5,12/5,\dots)$ 는 $p=5$ 에서만 $\mathbb Z_5$ 밖에 있으므로 $\mathbb A_{\mathbb Q}$ 의 원소다. 같은 방식으로 $\alpha\mapsto(\alpha,\alpha,\dots)$ 가 대각 매장 $K\hookrightarrow\mathbb A_K$ 를 정의한다. 모든 좌표에 $1/p$ 를 놓은 $(x_p)=(1/p)$ 는 모든 $p$ 에서 $\mathbb Z_p$ 밖에 있으므로 아델이 아니다.

위상은 아르키메데스 자리를 모두 포함하는 유한집합 $S$ 마다

$$
\mathbb A_{K,S}=\prod_{v\in S}K_v\times\prod_{v\notin S}\mathcal O_v
$$

를 곱위상의 열린 부분환으로 두고 그 합집합으로 준다. $K=\mathbb Q$ 의 **유한 아델(finite adele)** 의 환은 $\mathbb A_f=\hat{\mathbb Z}\otimes_{\mathbb Z}\mathbb Q$ 이고, $\mathbb A_{\mathbb Q}=\mathbb R\times\mathbb A_f$ 다.

## 이델군

**이델군(idele group)** 은 단원군의 제한직적이다.

$$
\mathbb A_K^\times={\prod_v}'\thinspace(K_v^\times,\mathcal O_v^\times)
$$

모든 좌표에 $p$ 를 놓은 $(x_p)=(p)$ 는 $p\in\mathbb Z_p$ 라 아델이지만, 모든 $p$ 에서 $p\notin\mathbb Z_p^\times$ 라 이델이 아니다. 그 역원 $(1/p)$ 는 아델이 아니다. 대각 원소 $(12/5,12/5,\dots)$ 는 $p\ne2,3,5$ 에서 $\mathbb Z_p^\times$ 안에 있으므로 이델이다.

**이델 노름(idele norm)** 은 자리별 절댓값의 곱이다.

$$
|x|\_{\mathbb A}=\prod_v|x_v|\_v
$$

거의 모든 자리에서 $|x_v|\_v=1$ 이므로 유한 곱이다. 직관 절의 계산은 $|12/5|\_{\mathbb A}=1$ 이다. 실수 좌표만 $2$ 이고 나머지 좌표가 $1$ 인 이델의 노름은 $2$ 다. 노름이 $1$ 인 이델의 부분군을 $\mathbb A_K^{\times,1}$ 로 적는다.

## 이델류군

**이델류군(idele class group)** 은 이델군을 대각으로 들어간 $K^\times$ 로 나눈 몫이다.

$$
C_K=\mathbb A_K^\times/K^\times
$$

$K=\mathbb Q$ 에서 이델 $(x_v)$ 는 각 $p$ 진 좌표의 $p$ 지수만큼 유리수를 곱해 모든 유한 좌표를 $\mathbb Z_p^\times$ 에 넣을 수 있다. 그래서 $C_{\mathbb Q}\cong\mathbb R_{\gt 0}\times\hat{\mathbb Z}^\times$ 다.

# 성질

## 국소콤팩트성

$\mathbb A_K$ 는 국소콤팩트 [위상환](topological-groups.md)이다. 곱 $\prod_p\mathbb Z_p$ 는 [Tychonoff 정리](tychonoff-theorem.md)로 콤팩트하고, $\mathbb A_{K,S}$ 는 콤팩트 열린 부분환 $\prod_{v\notin S}\mathcal O_v$ 와 국소콤팩트 $\prod_{v\in S}K_v$ 의 곱이다. 직적 $\prod_p\mathbb Q_p$ 는 국소콤팩트가 아니다.

각 $\mathbb Q_p$ 가 콤팩트하지 않아 무한 곱에서 콤팩트 근방이 생기지 않는다. 국소콤팩트이므로 $\mathbb A_K$ 위에 [Haar 측도](haar-measure.md)가 존재한다.

대각 원소 $(\alpha,\alpha,\dots)$ 는 거의 모든 자리에서 $0$ 이 아니므로 직합 $\bigoplus_vK_v$ 는 $K$ 를 포함하지 않는다.

## 이델군의 위상

$\mathbb A_K^\times$ 에 $\mathbb A_K$ 의 부분공간 위상을 주면 역원 연산이 연속이 아니다. 제한직적 $\prod'(K_v^\times,\mathcal O_v^\times)$ 의 위상은 $x\mapsto(x,x^{-1})$ 로 $\mathbb A_K\times\mathbb A_K$ 에 매장해 얻는 위상과 같고, 이 위상에서 $\mathbb A_K^\times$ 는 위상군이다.

## 곱 공식

곱 공식(product formula)은 모든 $\alpha\in K^\times$ 에서 $|\alpha|\_{\mathbb A}=1$ 이라는 진술이다. 그러므로 $K^\times\subset\mathbb A_K^{\times,1}$ 이다. $K=\mathbb Q$ 에서는 $\alpha=\pm\prod p^{e_p}$ 의 $p$ 진 절댓값이 $p^{-e_p}$ 이고 실수 절댓값이 $\prod p^{e_p}$ 라 곱이 $1$ 이다.

## 이산성과 콤팩트성

$K$ 는 $\mathbb A_K$ 의 이산 부분군이고 $\mathbb A_K/K$ 는 콤팩트하다. 증명은 $\mathcal O_K$ 를 $\prod_{v\mid\infty}K_v$ 의 격자로 실현하는 Minkowski 논증에, 유한 자리에서 분모를 없애는 중국인의 나머지 정리를 붙인다.

$K=\mathbb Q$ 에서 그 분해는 $\mathbb A_{\mathbb Q}=\mathbb Q+\big(\lbrack 0,1)\times\hat{\mathbb Z}\big)$ 다. 아델 하나에서 유한 자리들의 분모를 유리수 하나로 없애고 실수 자리를 $\lbrack 0,1)$ 로 옮긴다. $\mathbb R=\mathbb Z+\lbrack 0,1)$ 의 아델 판이며 $\lbrack 0,1)\times\hat{\mathbb Z}$ 가 콤팩트 기본영역이다.

| 자리 | R 안의 Z | 아델 환 안의 Q |
| --- | --- | --- |
| 전체 | $\mathbb R$ | $\mathbb A_{\mathbb Q}=\mathbb R\times\mathbb A_f$ |
| 이산 부분군 | $\mathbb Z$ | 대각으로 들어간 $\mathbb Q$ |
| 콤팩트 몫 | 원 $\mathbb R/\mathbb Z$ | $\mathbb A_{\mathbb Q}/\mathbb Q$ |
| 조화해석 | [Fourier 급수](fourier-series.md) | [Poisson 합 공식](poisson-summation.md) |

$\mathbb A_K^{\times,1}/K^\times$ 도 콤팩트하다. 이 진술은 두 고전 정리와 동치다. 콤팩트성을 유한 자리 쪽에 적용하면 류수의 유한성(finiteness of the class number)이, 아르키메데스 자리 쪽에 적용하면 [Dirichlet 단수 정리](dirichlet-unit-theorem.md)가 나온다. $|\cdot|\_{\mathbb A}\colon C_K\to\mathbb R_{\gt 0}$ 의 핵이 이 콤팩트군이므로 다음이 성립한다.

$$
C_K\cong\mathbb R_{\gt 0}\times C_K^1,\qquad C_K^1 \text{ 콤팩트}
$$

## 류군과 광선류군

유한 자리의 $\mathcal O_v^\times$ 들과 아르키메데스 성분을 묶어 $U=\prod_{v\nmid\infty}\mathcal O_v^\times\times\prod_{v\mid\infty}K_v^\times$ 로 두면

$$
C_K/\thinspace\overline{U}\ \cong\ \mathrm{Cl}(K)
$$

이다. 이델의 유한 좌표 $x_v$ 마다 소 아이디얼 $\mathfrak p_v^{v(x_v)}$ 를 대응시키면 분수 아이디얼이 나오고, $U$ 는 그 핵이다. 더 작은 열린 부분군으로 나누면 [광선류군](class-field-theory.md)(ray class group)이 나온다. $C_K$ 의 몫으로 모든 모듈러스의 광선류군이 나오므로 유체론을 모듈러스를 하나씩 고르지 않고 서술할 수 있다.

## 강근사

$K$ 는 $\mathbb A_K$ 에서 이산이므로 조밀하지 않다. 강근사 정리(strong approximation theorem)는 다음 진술이다. $S$ 가 비어 있지 않은 자리들의 집합이면, $K$ 는 $\mathbb A_K^S=\prod'\_{v\notin S}K_v$ 에서 조밀하다.

$S=\lbrace\infty\rbrace$ 로 두면 유한 개의 소수에서 지정한 합동조건을 만족하는 유리수가 있다는 중국인의 나머지 정리가 된다. $S=\lbrace p\rbrace$ 로 두면 실수 근사와 나머지 소수에서의 합동조건을 동시에 만족시킬 수 있다. $S$ 가 비면 성립하지 않는다. 곱 공식 때문에 다른 자리를 다 지정하면 남은 자리의 절댓값이 정해진다.

## Tate 의 zeta 적분과 함수방정식

$\mathbb A_K$ 는 가법군으로서 자기쌍대(self-dual)다. 비자명한 가법 지표(additive character) $\psi$ 를 고정하면 $x\mapsto\psi(xy)$ 가 쌍대군 전체를 준다. $K$ 가 이산이고 몫이 콤팩트하므로 Poisson 합 공식이 성립한다.

$$
\sum_{\alpha\in K}f(\alpha)=\sum_{\alpha\in K}\hat f(\alpha)
$$

Tate 는 여기에 이델 위의 zeta 적분

$$
Z(f,s)=\int_{\mathbb A_K^\times}f(x)\thinspace|x|\_{\mathbb A}^s\thinspace d^\times x
$$

를 결합했다. 적분이 국소 인자의 곱으로 쪼개져 Euler 곱이 나오고, Poisson 합 공식에서 $s\leftrightarrow1-s$ 대칭이 나온다. Riemann 과 Hecke 가 theta 함수의 변환식으로 얻었던 $\zeta_K(s)$ 의 해석적 접속과 함수방정식이 감마 인자와 판별식까지 포함해 유도된다. [Langlands 강령](langlands-program.md)도 L 함수를 군 위의 적분으로 정의해 해석적 성질을 표현론에서 얻는다.

## 자기동형 형식의 몫공간

$\mathrm{GL}\_n(K)$ 는 $\mathrm{GL}\_n(\mathbb A_K)$ 의 이산 부분군이므로 몫공간

$$
\mathrm{GL}\_n(K)\backslash\mathrm{GL}\_n(\mathbb A_K)
$$

위의 함수를 볼 수 있다. $n=1$ 이면 이델류군이고, $n=2$ 이면 [모듈러 형식](modular-forms.md)의 아델 판이다.

레벨 $\Gamma_0(N)$ 은 유한 자리의 콤팩트 열린 부분군 $K_0(N)\subset\mathrm{GL}\_2(\hat{\mathcal O})$ 에 대응하고, 강근사 정리에서 다음이 유도된다.

$$
\mathrm{GL}\_2(\mathbb Q)\backslash\mathrm{GL}\_2(\mathbb A_{\mathbb Q})/K_0(N)\ \cong\ \Gamma_0(N)\backslash\mathbb H
$$

[Hecke 작용소](hecke-operators.md)는 이중 잉여류 $K_0(N)\thinspace\mathrm{diag}(1,p)\thinspace K_0(N)$ 에 대응한다.

# 활용

- 유체론: 광선류군으로 쓰면 모듈러스 $\mathfrak m$ 을 매번 고르고 정합성을 확인해야 한다. 유체론의 Artin 상호 사상(Artin reciprocity map)은 이델류군에서 $C_K\to\mathrm{Gal}(K^{\mathrm{ab}}/K)$ 한 줄로 적힌다.
- 국소 유체론과 대역 유체론: 각 $K_v^\times$ 에서의 국소 유체론(local class field theory)의 사상이 $C_K$ 위의 대역 사상의 성분이 된다.
- 해석: 국소콤팩트라 Haar 측도와 [Fourier 변환](fourier-transform.md)이 정의된다. [Tate 의 zeta 적분](tate-zeta-integral.md)이 이것을 사용하고, 자기동형 형식의 스펙트럼 분해와 [Selberg 대각합 공식](selberg-trace-formula.md)의 아델 판도 이것을 사용한다.
- 환원군: $\mathrm{GL}\_1$ 을 $\mathrm{GL}\_n$ 이나 다른 환원군으로 바꾸어도 같은 정의가 통한다. [대수군의 Tamagawa 수](tamagawa-numbers.md)가 $G(K)\backslash G(\mathbb A_K)$ 의 부피로 정의된다.

## 수체와 함수체

함수체 $\mathbb F_q(X)$ 에도 자리와 아델이 있다. 자리는 곡선의 닫힌 점이고, $\mathbb A/K$ 의 콤팩트성은 곡선의 사영성에 해당하며, 곱 공식은 주인자의 차수가 $0$ 이라는 진술이 된다. $\mathbb A_K^{\times}/K^\times\mathcal O^\times$ 가 [Picard 군](picard-group.md)이고, 류수의 유한성이 차수 $0$ 인 Picard 군의 유한성이 된다. 함수체 쪽에서는 이 진술들이 곡선의 대수기하로 증명된다.

# 연관 문서

## 선수지식

- [p 진수](p-adic-numbers.md)
- [대수적 수체](algebraic-number-fields.md)

## 더 알아보기

- [Tate 의 zeta 적분](tate-zeta-integral.md)
- [Brauer 군](brauer-groups.md)
- [대수군의 Tamagawa 수](tamagawa-numbers.md)

#number_theory #field_theory #analysis
