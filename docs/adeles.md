# 아델과 이델

# 개요

아델 환은 수체의 모든 자리를 한 덩어리로 묶은 국소콤팩트 위상환이다. [p 진수](p-adic-numbers.md)에서 $\mathbb Q$ 의 자리는 소수들과 무한 자리 하나로 전부이고, 곱 공식 $\prod_v|x|\_v=1$ 은 모든 자리를 동시에 볼 때만 의미를 갖는다.

직적 $\prod_v K_v$ 는 국소콤팩트성을 잃어 Haar 측도도 Fourier 해석도 할 수 없고, 직합은 $\mathbb Q$ 조차 담지 못한다. 그 중간이 **제한직적**이며, 거의 모든 자리에서 정수환 안에 있을 것만 요구한다.

$$
\mathbb A_K=\Big\lbrace(x_v)\in\prod_vK_v:\text{거의 모든 } v \text{ 에서 } x_v\in\mathcal O_v\Big\rbrace
$$

[수체](algebraic-number-fields.md) $K$ 는 $\mathbb A_K$ 안에 이산 부분군으로 들어가고 몫은 콤팩트하다. $\mathbb Z\subset\mathbb R$ 와 같은 그림이다. 곱군 쪽에서는 유수의 유한성과 Dirichlet 단원 정리가 "노름 1 인 이델류군이 콤팩트하다" 는 한 문장으로 합쳐진다.

# 직관

## 중국인의 나머지 정리의 극한

$\mathbb Z/n\mathbb Z\cong\prod_{p^k\Vert n}\mathbb Z/p^k\mathbb Z$ 에서 $n$ 을 키워 극한을 취하면

$$
\hat{\mathbb Z}=\varprojlim_n\mathbb Z/n\mathbb Z\cong\prod_p\mathbb Z_p
$$

가 된다. 모든 법에서의 나머지 정보를 한꺼번에 들고 있는 환이다. 여기에 $\mathbb Q$ 를 텐서해 분모를 허용하면 유한 아델 $\mathbb A_f$ 가 나오고, 무한 자리를 곱하면 다음을 얻는다.

$$
\mathbb A_{\mathbb Q}=\mathbb R\times\mathbb A_f,\qquad \mathbb A_f=\hat{\mathbb Z}\otimes_{\mathbb Z}\mathbb Q
$$

아델 하나는 실수 하나와 모든 법에서의 나머지 정보를 묶은 것이다.

## 제한직적의 필연성

$\prod_p\mathbb Z_p$ 는 Tychonoff 정리로 콤팩트하다. 그러나 $\prod_p\mathbb Q_p$ 는 국소콤팩트조차 아니다. 각 $\mathbb Q_p$ 가 콤팩트하지 않아 무한 곱에서 콤팩트 근방을 만들 수 없다.

제한직적은 $\prod_p\mathbb Z_p$ 라는 콤팩트 열린 부분군을 심어 두고 그 평행이동으로 위상을 준다. 전체가 국소콤팩트가 되고 Haar 측도가 생겨 Fourier 해석이 가능해진다.

조건이 거의 모든 자리에서 정수인 것은 유리수 $x$ 의 분모에 유한 개의 소수만 나오기 때문이다. 직합이었다면 $x_v=x$ 인 대각 원소가 거의 모든 자리에서 0 이 아니라 들어가지 못한다.

## 아델 안의 격자 $\mathbb Q$

$\mathbb Q$ 가 $\mathbb A_{\mathbb Q}$ 안에 놓이는 방식은 $\mathbb Z$ 가 $\mathbb R$ 안에 놓이는 방식과 같다.

| 자리 | $\mathbb R$ 안의 $\mathbb Z$ | $\mathbb A_{\mathbb Q}$ 안의 $\mathbb Q$ |
| --- | --- | --- |
| 전체 | $\mathbb R$ | $\mathbb A_{\mathbb Q}=\mathbb R\times\mathbb A_f$ |
| 이산 부분군 | $\mathbb Z$ | 대각으로 들어간 $\mathbb Q$ |
| 콤팩트 몫 | 원 $\mathbb R/\mathbb Z$ | $\mathbb A_{\mathbb Q}/\mathbb Q$ |
| 조화해석 | Fourier 급수 | Poisson 합공식 |

$\mathbb A_{\mathbb Q}=\mathbb Q+\big([0,1)\times\hat{\mathbb Z}\big)$ 가 성립한다. 아델 하나에서 유한 자리들의 분모를 유리수 하나로 털어내고 실수 자리를 $[0,1)$ 로 밀어 넣으면 된다. $\mathbb R=\mathbb Z+[0,1)$ 의 아델 판이며 $[0,1)\times\hat{\mathbb Z}$ 가 기본영역이다. 기본영역이 콤팩트하므로 몫이 콤팩트하다.

$\mathbb R/\mathbb Z$ 가 콤팩트라서 Fourier 급수가 있듯, $\mathbb A_{\mathbb Q}/\mathbb Q$ 가 콤팩트라서 아델 위의 Poisson 합공식이 성립한다. Tate 는 이 합공식으로 $\zeta$ 함수의 함수방정식을 유도했다.

# 정의

## 아델 환

$K$ 가 수체(또는 함수체)이고 $v$ 가 그 자리일 때, $K_v$ 를 완비화, $\mathcal O_v$ 를 그 정수환이라 하자. 아르키메데스 자리에서는 $\mathcal O_v$ 조건을 붙이지 않는다.

$$
\mathbb A_K={\prod_v}'\thinspace(K_v,\mathcal O_v)
=\Big\lbrace(x_v):x_v\in\mathcal O_v \text{ for almost all } v\Big\rbrace
$$

위상은 아르키메데스 자리를 모두 포함하는 유한집합 $S$ 마다

$$
\mathbb A_{K,S}=\prod_{v\in S}K_v\times\prod_{v\notin S}\mathcal O_v
$$

를 열린 부분환으로 두고 그 곱위상의 합집합으로 준다. 결과는 국소콤팩트 위상환이며 대각 매장 $K\hookrightarrow\mathbb A_K$ 가 정의된다.

## 이델군

곱군 $\mathbb A_K^\times$ 에 $\mathbb A_K$ 의 부분공간 위상을 주면 역원 연산이 연속이 아니다. 올바른 위상은 $x\mapsto(x,x^{-1})$ 로 $\mathbb A_K\times\mathbb A_K$ 에 매장해 얻는 것이고, 이는 제한직적

$$
\mathbb A_K^\times={\prod_v}'\thinspace(K_v^\times,\mathcal O_v^\times)
$$

의 위상과 같다. 이 군이 **이델군**이다.

**이델 노름**은 자리별 절댓값의 곱이다.

$$
|x|\_{\mathbb A}=\prod_v|x_v|\_v
$$

거의 모든 자리에서 $|x_v|\_v=1$ 이므로 유한 곱이라 잘 정의된다. 곱 공식은 $\alpha\in K^\times$ 마다 $|\alpha|\_{\mathbb A}=1$ 이라는 뜻이므로, $K^\times$ 는 노름 1 인 부분군 $\mathbb A_K^{\times,1}$ 안에 들어간다.

## 이델류군

$$
C_K=\mathbb A_K^\times/K^\times
$$

를 **이델류군**이라 한다. 유한 자리의 $\mathcal O_v^\times$ 들과 아르키메데스 성분을 묶어 $U=\prod_{v\nmid\infty}\mathcal O_v^\times\times\prod_{v\mid\infty}K_v^\times$ 로 두면

$$
C_K/\thinspace\overline{U}\ \cong\ \mathrm{Cl}(K)
$$

이고, 더 작은 열린 부분군으로 나누면 [광선유군](class-field-theory.md)이 나온다. $C_K$ 는 모든 모듈러스의 광선유군을 동시에 담으므로 유체론이 모듈러스를 하나씩 고르지 않고 서술된다.

# 성질

## 이산성과 콤팩트성

> **정리.** $K$ 는 $\mathbb A_K$ 의 이산 부분군이고 $\mathbb A_K/K$ 는 콤팩트하다.

증명의 요지는 $\mathbb Q$ 에서의 분해와 같다. $\mathcal O_K$ 를 $\prod_{v\mid\infty}K_v$ 의 격자로 실현하는 Minkowski 논증에, 유한 자리에서 분모를 털어내는 중국인의 나머지 정리를 붙인다.

> **정리.** $\mathbb A_K^{\times,1}/K^\times$ 는 콤팩트하다.

이 문장은 두 고전 정리와 동치다. 콤팩트성을 유한 자리 쪽으로 밀면 **유수의 유한성**이, 아르키메데스 자리 쪽으로 밀면 **Dirichlet 단원 정리**가 나온다.

$|\cdot|\_{\mathbb A}\colon C_K\to\mathbb R_{\gt 0}$ 의 핵이 이 콤팩트군이므로 구조는 다음과 같다.

$$
C_K\cong\mathbb R_{\gt 0}\times C_K^1,\qquad C_K^1 \text{ 콤팩트}
$$

## 강근사

$K$ 가 $\mathbb A_K$ 에서 이산이므로 조밀할 수 없다. 자리 하나를 빼면 달라진다.

> **강근사 정리.** $S$ 가 비어 있지 않은 자리들의 집합이면, $K$ 는 $\mathbb A_K^S=\prod'\_{v\notin S}K_v$ 에서 조밀하다.

$S=\lbrace\infty\rbrace$ 로 두면 유한 개의 소수에서 지정한 합동조건을 만족하는 유리수가 있다는 중국인의 나머지 정리가 된다. $S=\lbrace p\rbrace$ 로 두면 실수 근사와 나머지 소수에서의 합동조건을 동시에 만족시킬 수 있다는 뜻이 된다.

빼는 자리가 하나는 있어야 한다. 곱 공식이 모든 자리를 묶고 있으므로 다른 자리를 다 지정하면 남은 자리의 절댓값이 강제된다.

## Tate 논문과 함수방정식

$\mathbb A_K$ 는 가법군으로서 자기쌍대다. 비자명한 가법 지표 $\psi$ 를 고정하면 $x\mapsto\psi(xy)$ 가 쌍대군 전체를 준다. $K$ 가 이산이고 몫이 콤팩트하므로 Poisson 합공식이 성립한다.

$$
\sum_{\alpha\in K}f(\alpha)=\sum_{\alpha\in K}\hat f(\alpha)
$$

Tate 는 여기에 이델 위의 zeta 적분

$$
Z(f,s)=\int_{\mathbb A_K^\times}f(x)\thinspace|x|\_{\mathbb A}^s\thinspace d^\times x
$$

를 얹었다. 적분이 국소 인자의 곱으로 쪼개져 Euler 곱이 나오고, Poisson 합공식이 $s\leftrightarrow1-s$ 대칭을 준다. Riemann 과 Hecke 가 theta 함수의 변환식으로 얻었던 $\zeta_K(s)$ 의 해석적 접속과 함수방정식이 감마 인자와 판별식까지 포함해 따라 나온다.

$L$ 함수를 급수가 아니라 군 위의 적분으로 정의하면 해석적 성질이 표현론에서 나온다. [Langlands 강령](langlands-program.md)이 이 전략을 물려받았다.

## 자기동형 형식의 몫공간

$\mathrm{GL}\_n(K)$ 는 $\mathrm{GL}\_n(\mathbb A_K)$ 의 이산 부분군이므로 몫공간

$$
\mathrm{GL}\_n(K)\backslash\mathrm{GL}\_n(\mathbb A_K)
$$

위의 함수를 볼 수 있다. $n=1$ 이면 이델류군이고, $n=2$ 이면 [모듈러 형식](modular-forms.md)의 아델 판이다.

레벨 $\Gamma_0(N)$ 은 유한 자리의 콤팩트 열린 부분군 $K_0(N)\subset\mathrm{GL}\_2(\hat{\mathcal O})$ 에 대응하고, 강근사 정리가

$$
\mathrm{GL}\_2(\mathbb Q)\backslash\mathrm{GL}\_2(\mathbb A_{\mathbb Q})/K_0(N)\ \cong\ \Gamma_0(N)\backslash\mathbb H
$$

를 준다. Hecke 작용소는 이중 잉여류 $K_0(N)\thinspace\mathrm{diag}(1,p)\thinspace K_0(N)$ 이 된다.

# 활용

- **모듈러스의 소거.** 유체론을 광선유군으로 쓰면 모듈러스 $\mathfrak m$ 을 매번 고르고 정합성을 확인해야 한다. 이델류군은 모든 $\mathfrak m$ 을 동시에 담아 $C_K\to\mathrm{Gal}(K^{\mathrm{ab}}/K)$ 한 줄로 끝난다.
- **국소와 대역의 통일.** 각 $K_v^\times$ 에서의 국소 유체론과 대역 유체론이 같은 그림의 부분과 전체가 된다. 국소 조건을 붙여 대역 대상을 만드는 절차가 제한직적으로 형식화된다.
- **해석적 도구.** 국소콤팩트라 Haar 측도와 Fourier 변환이 있다. Tate 논문이 그 첫 수확이고, 자기동형 형식의 스펙트럼 분해와 대각합 공식이 그 위에 세워진다.
- **군의 교체.** $\mathrm{GL}\_1$ 을 $\mathrm{GL}\_n$ 이나 다른 환원군으로 바꾸는 것이 서술상 자명해진다.

## 수체와 함수체의 평행

함수체 $\mathbb F_q(X)$ 에도 자리와 아델이 있다. 자리는 곡선의 닫힌 점이고, $\mathbb A/K$ 의 콤팩트성은 곡선의 사영성에 해당하며, 곱 공식은 인자의 차수가 0 이라는 사실이 된다. $\mathbb A_K^{\times}/K^\times\mathcal O^\times$ 가 Picard 군이고, 유수의 유한성이 Picard 군의 유한생성성이 된다.

수체에서 어렵게 증명되는 정리가 함수체에서는 대수기하의 표준 도구로 나오는 경우가 많다. 아델은 두 세계를 같은 문장으로 서술하는 언어이며, 이 유비를 따라가는 것이 Weil 이래 정수론의 전략이었다.

# 연관 문서

## 선수지식

- [p 진수와 부치](p-adic-numbers.md)
- [대수적 수체와 정수환](algebraic-number-fields.md)

## 더 알아보기

- [논문: Fourier Analysis in Number Fields and Hecke's Zeta-Functions](tate-thesis.md)
- [Brauer 군과 Hasse 원리](brauer-groups.md)

#number_theory #field_theory #analysis
