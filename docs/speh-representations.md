# Speh 표현과 잔여 스펙트럼

# 개요

자기동형 형식의 공간 $L^2\bigl(\mathrm{GL}_n(F)\backslash\mathrm{GL}_n(\mathbb A)^1\bigr)$ 는 세 조각으로 나뉜다.

$$
L^2=\underbrace{L^2_{\mathrm{cusp}}}_{\text{첨점}}\ \oplus\ \underbrace{L^2_{\mathrm{res}}}_{\text{잔여}}\ \oplus\ \underbrace{L^2_{\mathrm{cont}}}_{\text{연속}}
$$

앞의 둘을 합쳐 **이산 스펙트럼**이라 한다. 잔여 부분은 Mœglin 과 Waldspurger 가 1989 년에 완전히 분류했다.

$$
L^2_{\mathrm{disc}}\bigl(\mathrm{GL}_n\bigr)=\bigoplus_{n=dm}\ \bigoplus_{\sigma\ \text{첨점}(\mathrm{GL}_m)}\mathrm{Speh}(\sigma,d)
$$

각 항이 정확히 한 번씩 나온다. $d=1$ 이 첨점 표현 자신이고 $d\gt 1$ 인 것들이 잔여 스펙트럼을 채우는 **Speh 표현**이다.

[Arthur 매개변수](arthur-parameters.md) 쪽에서 이 분류는 $\psi=\sigma\boxtimes[d]$ 한 줄이며, 둘째 $\mathrm{SL}_2(\mathbb C)$ 의 $d$ 차원 표현이 Speh 표현의 $d$ 다. $\mathrm{GL}_n$ 은 Arthur 의 분류가 완전히 증명된 유일한 경우이고 고전군 쪽 그림의 원본이다.

# 직관

## Eisenstein 급수의 유수

[Eisenstein 급수](eisenstein-series.md) $E(z,s)$ 는 첨점에서 $y^s$ 처럼 자라 제곱적분가능하지 않다. $s$ 가 **극**일 때 유수를 취하면 성장이 한 등급 줄어 $L^2$ 안으로 들어온다.

$\mathrm{GL}_2$ 에서 $E(z,s)$ 는 $s=1$ 에 단순극을 갖고 유수는 상수함수 $3/\pi$ 다. 상수함수가 생성하는 표현이 **자명 표현**이므로, 자명 표현은 첨점이 아니라 잔여 스펙트럼에 산다.

일반 $n$ 에서도 절차는 같다. 포물형 부분군 $P$ 와 그 Levi 위의 첨점 표현에서 Eisenstein 급수를 만들고 다변수 $s$ 의 극을 따라 차례로 유수를 취한다. Langlands 가 절차를 세웠고 Mœglin–Waldspurger 가 $\mathrm{GL}_n$ 에서 어느 극이 살아남는지 계산했다.

## 등차수열 조건

Levi 가 $\mathrm{GL}_m^{\thinspace d}$ 이고 각 성분에 같은 첨점 표현 $\sigma$ 를 올린 뒤 지수를 간격 1 의 등차수열

$$
\Bigl(\tfrac{d-1}2,\ \tfrac{d-3}2,\ \dots,\ -\tfrac{d-1}2\Bigr)
$$

로 잡은 자리에서만 유수가 0 이 아니고 다른 조합은 사라진다.

같은 모양이 국소 표현론의 Bernstein–Zelevinsky **분절(segment)** $[\rho,\rho\nu,\dots,\rho\nu^{d-1}]$ 이고, 분절 하나가 본질적 제곱적분가능 표현 하나를 준다. 국소에서 표현을 뭉치는 규칙과 전역에서 극이 생기는 규칙이 같다.

## 비템퍼드성의 크기

$\sigma$ 의 Satake 매개변수가 $\lbrace\alpha_1,\dots,\alpha_m\rbrace$ 이면 $\mathrm{Speh}(\sigma,d)$ 의 것은

$$
\bigl\lbrace\alpha_i\thinspace q^{j}\ :\ 1\le i\le m,\ j=\tfrac{d-1}2,\tfrac{d-3}2,\dots,-\tfrac{d-1}2\bigr\rbrace
$$

이다. $\sigma$ 가 Ramanujan 경계 $|\alpha_i|=1$ 을 지켜도 Speh 표현은 $q^{\pm(d-1)/2}$ 만큼 벌어지고, 그 폭이 $d$ 로 결정된다. Ramanujan 추측이 첨점 표현에 한정되는 까닭이 여기 있다.

# 정의

## 세 조각

$L^2_{\mathrm{cusp}}$ 는 모든 진 포물형 부분군의 멱단근기 위 적분이 0 인 함수들이 이루는 닫힌 부분공간이다. $L^2_{\mathrm{cont}}$ 는 Eisenstein 급수의 직접적분으로 얻어지고, 나머지 $L^2_{\mathrm{res}}$ 가 **잔여 스펙트럼**으로 Eisenstein 급수의 유수들이 생성한다.

## Speh 표현

$\sigma$ 를 $\mathrm{GL}_m(\mathbb A)$ 의 유니터리 첨점 자기동형 표현, $\nu=|\det|$ 라 한다. $n=dm$ 에 대해 정규화 포물형 유도

$$
\sigma\nu^{\frac{d-1}2}\ \times\ \sigma\nu^{\frac{d-3}2}\ \times\ \cdots\ \times\ \sigma\nu^{-\frac{d-1}2}
$$

는 기약이 아니며, 그 유일한 Langlands 몫이 $\mathrm{Speh}(\sigma,d)$ 다. 유니터리성은 자명하지 않은 사실이고, Speh 가 $\mathrm{GL}_{2n}(\mathbb R)$ 에서 처음 발견해 이름이 붙었다.

$d=1$ 이면 $\mathrm{Speh}(\sigma,1)=\sigma$ 다. $m=1,\ d=n$ 이고 $\sigma$ 가 자명 지표면 $\mathrm{Speh}(\mathbf 1,n)$ 이 $\mathrm{GL}_n$ 의 자명 표현이다.

## Mœglin–Waldspurger 정리

$$
L^2_{\mathrm{disc}}\bigl(\mathrm{GL}_n(F)\backslash\mathrm{GL}_n(\mathbb A)^1\bigr)
=\bigoplus_{\substack{n=dm}}\ \bigoplus_{\sigma}\ \mathrm{Speh}(\sigma,d)
$$

합은 $n=dm$ 인 약수 분해와 $\mathrm{GL}_m$ 의 유니터리 첨점 표현 $\sigma$ 위를 달리고 각 항의 중복도는 1 이다. 잔여 스펙트럼은 $d\gt 1$ 인 항들의 합이다[^1].

# 성질

## 중복도 1

$\mathrm{GL}_n$ 의 이산 스펙트럼은 중복도가 언제나 1 이다. 성분군이 자명하므로 Arthur 의 중복도 공식이 $\mathrm{GL}_n$ 에서 자명해진다. 고전군에서는 성분군이 살아 있어 중복도가 1 을 넘을 수 있다.

## 매개변수 세기

$n$ 이 주어졌을 때 잔여 스펙트럼에 기여하는 모양의 개수는 약수를 세는 문제다.

| $n$ | 모양 $[\mathrm{GL}_m$ 첨점$]\times[d]$ |
|---|---|
| 2 | $m{=}2,d{=}1$ (첨점), $m{=}1,d{=}2$ (잔여, $q^{0.5}$ ) |
| 4 | $d{=}1$ , $m{=}2,d{=}2$ ($q^{0.5}$ ), $m{=}1,d{=}4$ ($q^{1.5}$ ) |
| 6 | $d{=}1$ , $d{=}2$ ($q^{0.5}$ ), $d{=}3$ ($q^{1}$ ), $d{=}6$ ($q^{2.5}$ ) |

$n$ 이 소수면 잔여 스펙트럼이 자명 표현 계열 하나뿐이다. 약수가 많으면 잔여 쪽이 층층이 쌓이고 가장 깊은 층이 자명 표현이므로, 약수 격자의 모양이 스펙트럼의 층 구조를 준다.

## $L$ 함수에 의한 판정

$\pi$ 가 $\mathrm{GL}_n$ 의 이산 스펙트럼에 있을 때 첨점인지 잔여인지는 Rankin–Selberg $L$ 함수로 읽힌다. $L(s,\pi\times\tilde\pi)$ 는 $s=1$ 에 언제나 극을 갖지만 그 차수가 $\pi$ 가 몇 겹의 Speh 인지를 드러낸다. 잔여 표현은 $\sigma\nu^j$ 들의 중복 때문에 극이 더 많다.

## 유니터리 쌍대의 벽돌

Tadić 의 $\mathrm{GL}_n$ 유니터리 쌍대 분류는 Speh 표현과 그 보조적 계열 변형을 유도로 조립한 것이 전부라는 결론이다. Speh 표현은 잔여 스펙트럼을 채울 뿐 아니라 유니터리 표현론의 기본 벽돌이다.

# 활용

## CAP 표현과 Saito–Kurokawa

$\mathrm{GL}_n$ 에서는 비템퍼드 표현이 전부 잔여 스펙트럼으로 밀려나므로 Ramanujan 추측이 분류와 모순되지 않는다.

$\mathrm{GSp}_4$ 에는 첨점이면서 Arthur 매개변수의 둘째 $\mathrm{SL}_2$ 가 자명하지 않은 표현이 있다. 포물형 부분군에서 올라온 Eisenstein 급수와 거의 모든 자리에서 Satake 매개변수가 같다는 뜻에서 **CAP 표현**(cuspidal associated to parabolic)이라 부르고, 대표가 무게 $2k-2$ 의 타원 첨점형식에서 만든 무게 $k$ 의 Siegel 모듈러 형식인 **Saito–Kurokawa 올림**이다.

$$
\psi_{\mathrm{SK}}=\bigl(\sigma\boxtimes[1]\bigr)\ \boxplus\ \bigl(\mathbf 1\boxtimes[2]\bigr)
$$

둘째 항의 $[2]$ 가 비템퍼드성을 넣으므로 Saito–Kurokawa 올림의 Hecke 고윳값은 Ramanujan 경계를 위반하고, Siegel 형식에 대한 Ramanujan 추측의 반례가 된다. Arthur 매개변수가 반례의 위치를 지정하므로 추측은 CAP 이 아닌 첨점 표현은 템퍼드라는 형태로 수정된다.

## 고전군의 분류

고전군의 이산 스펙트럼을 세는 작업은 $\mathrm{GL}_N$ 의 자기쌍대 첨점 표현 $\sigma_i$ 와 정수 $d_i$ 의 짝을 부호 조건에 맞게 조립하는 일이 된다. 조립의 부품 $\sigma_i\boxtimes[d_i]$ 가 Speh 표현의 국소 매개변수이고, $\mathrm{GL}_N$ 쪽 분류가 완전하므로 고전군 쪽 분류가 유한한 조합 문제로 환원된다.

## 주기와 올림

$\mathrm{Speh}(\sigma,2)$ 의 $\mathrm{Sp}_{2m}$ 주기는 $\sigma$ 의 외곱 $L$ 함수의 극과 이어진다. [Gan–Gross–Prasad 추측](gan-gross-prasad.md)의 비템퍼드 판본이 이런 주기를 다루고, Ikeda 올림과 Miyawaki 올림은 매개변수 수준에서 $\boxtimes[d]$ 를 붙였다 떼는 조작으로 보인다.

[^1]: 분류의 원논문은 C. Mœglin, J.-L. Waldspurger, *Le spectre résiduel de* $\mathrm{GL}(n)$ (Ann. Sci. ÉNS **22**, 1989), 605–674. Eisenstein 급수와 유수 절차는 같은 저자의 *Spectral Decomposition and Eisenstein Series* (1995). Speh 표현의 실수 자리 원본은 B. Speh, *Unitary representations of* $\mathrm{GL}(n,\mathbb R)$ *with nontrivial (g,K)-cohomology*, Invent. Math. **71** (1983). 유니터리 쌍대 분류는 M. Tadić, Ann. Sci. ÉNS **19** (1986). CAP 표현과 Saito–Kurokawa 는 I. Piatetski-Shapiro, Invent. Math. **71** (1983). 고전군 쪽은 J. Arthur, *The Endoscopic Classification of Representations* (2013).

# 연관 문서

## 선수지식

- [Arthur 매개변수와 비템퍼드 표현](arthur-parameters.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory #theorem
