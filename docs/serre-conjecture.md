# Serre 추측과 Khare–Wintenberger 정리

# 개요

**Serre 추측(Serre's modularity conjecture)** 은 소수마다 하나씩 정해지는 정수의 열을 어떤 소수 $\ell$ 로 나눈 나머지가, 대칭 조건 둘을 만족하면 모듈러 형식의 계수와 같다는 진술이다. $y^2+y=x^3-x^2$ 의 해를 무한원점까지 $p$ 로 나눈 나머지에서 세어 $a_p=p+1-(\text{해의 수})$ 로 두면 $a_2=-2$, $a_3=-1$ 이고, 이 값은 $q\prod_{n\ge1}(1-q^n)^2(1-q^{11n})^2$ 을 전개한 $q^2$, $q^3$ 의 계수와 같다. 방정식에서 나온 수와 멱급수의 계수가 언제 이렇게 일치하는지가 문제다. Serre 추측은 열이 기약이고 홀수인 $2$ 차원 Galois 표현에서 오면 $\ell$ 로 나눈 나머지에서 일치하는 형식이 있고, 그 형식의 무게와 레벨을 표현에서 계산할 수 있다고 답한다.

# 직관

개요의 곡선 $E:y^2+y=x^3-x^2$ 에서 $p=2,3,5,7,13$ 의 $a_p$ 는 $-2,-1,1,-2,4$ 이고, 개요의 멱급수 $f$ 의 $q^p$ 계수도 같은 값이다. 이 일치를 $\ell$ 로 나눈 나머지에서만 묻는 것이 Serre 추측의 물음이다. 소수 $p$ 마다 $\mathbb F_\ell$ 의 원소 $\bar a_p$ 가 하나씩 주어졌을 때, $q^p$ 계수가 $\ell$ 로 나누어 $\bar a_p$ 인 [모듈러 형식](modular-forms.md)이 있는가.

아무 열이나 그런 형식을 갖지는 않는다. 열은 $2$ 차원 [Galois 표현](galois-representations.md) $\bar\rho$ 의 Frobenius 대각합 $\bar a_p=\mathrm{tr}\thinspace\bar\rho(\mathrm{Frob}\_p)$ 이어야 한다. $E$ 의 $a_p$ 는 $E$ 의 $\ell$ 등분점에 Galois 군이 작용하는 $2\times 2$ 행렬의 대각합이므로 이 꼴이다.

$\ell=5$ 에서는 위의 값이 모두 $a_p\equiv 1+p\pmod 5$ 를 만족한다. $E$ 에 위수 $5$ 인 유리점이 있어서 행렬이 $\begin{pmatrix}1&\ast\cr 0&p\end{pmatrix}$ 꼴로 쪼개지기 때문이다. $1+p$ 는 무게 $2$ 인 [Eisenstein 급수](eisenstein-series.md)의 $q^p$ 계수 $\sigma_1(p)$ 이므로, 이렇게 쪼개지는 경우는 Eisenstein 급수가 설명한다. Serre 는 이 경우를 빼고 쪼개지지 않는(기약인) 표현만 물었다.

모듈러 형식에서 오는 표현은 복소켤레 $c$ 에서 $\det\bar\rho(c)=-1$ 을 만족하고, 이 조건을 홀수라 한다. Serre 는 1987 년에 기약이고 홀수인 $\bar\rho$ 가 모두 모듈러 형식에서 온다고 추측했고, 맞는 형식의 무게와 레벨도 $\bar\rho$ 에서 계산하는 공식을 냈다[^1]. 그 공식은 $E$ 에서 오는 $\ell\ne 5$ 의 표현에 무게 $2$, 레벨 $11$ 을 준다. Khare 와 Wintenberger 가 2008 년에 이 추측을 증명했다[^2].

# 정의

## 모듈러인 표현

$\bar\rho\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\overline{\mathbb F}\_p)$ 가 **모듈러(modular)** 라는 것은 어떤 무게 $k\ge2$ 와 레벨 $N$ 과 지표 $\varepsilon$(Nebentypus)의 고유형식 $f\in S_k(\Gamma_1(N))$ 과 $\lambda\mid p$ 가 있어

$$
\bar\rho\thickspace\cong\thickspace\bar\rho_{f,\lambda}
$$

인 것이다. 동치로, 거의 모든 소수 $\ell$ 에서

$$
\mathrm{tr}\bar\rho(\mathrm{Frob}\_\ell)\equiv a_\ell(f),\qquad
\det\bar\rho(\mathrm{Frob}\_\ell)\equiv \varepsilon(\ell)\ell^{k-1}\pmod\lambda
$$

가 성립하는 것이다. 반단순 표현은 거의 모든 $\ell$ 에서의 대각합과 행렬식으로 정해지므로([Chebotarev 밀도 정리](chebotarev.md)와 Brauer–Nesbitt 정리(Brauer–Nesbitt theorem)) 두 조건은 동치다. 직관 절의 곡선에서 $p\ne 5$ 인 $\bar\rho_{E,p}$ 는 $f\in S_2(\Gamma_0(11))$ 로 모듈러이고, $\varepsilon$ 은 자명하다.

## 홀수성

$\rho_{f,\lambda}$ 는 [모듈러 곡선](modular-curves.md)의 [코호몰로지](cohomology.md)에서 나오고, 복소켤레는 그 위에 실점의 대합으로 작용해 고윳값 $+1,-1$ 을 하나씩 갖는다. 그러므로 모듈러 표현은 $\det\bar\rho(c)=-1$ 을 만족하고, 이 성질을 **홀수(odd)** 라 한다. 홀수 조건은 모듈러이기 위한 필요조건이다. 직관 절의 곡선에서는 $\det\bar\rho_{E,p}$ 가 순환지표이고 $\chi(c)=-1$ 이다.

## 추측의 두 형태

Serre 추측은 두 형태로 진술된다.

- 약한 형태(weak form). 연속, 기약, 홀수인 $\bar\rho$ 는 모듈러다.
- 강한 형태(strong form). 그런 $\bar\rho$ 는 무게 $k(\bar\rho)$ 와 레벨 $N(\bar\rho)$ 에서 모듈러다.

레벨은 $p$ 를 뺀 Artin 도체(Artin conductor)다.

$$
N(\bar\rho)=\prod_{\ell\ne p}\ell^{\thinspace n_\ell},\qquad
n_\ell=\sum_{i\ge0}\frac{|G_i|}{|G_0|}\dim\bigl(V/V^{G_i}\bigr)
$$

$G_i$ 는 $\ell$ 에서의 하위 번호 [분기군](ramification-groups.md), $V=\overline{\mathbb F}\_p^2$ 다. 직관 절의 곡선에서는 $11$ 에서만 분기하고 $n_{11}=1$ 이므로 $N(\bar\rho_{E,p})=11$ 이다. 무게는 $\bar\rho|\_{I_p}$ 로 정한다. $p\gt 2$ 인 온순한 경우를 예로 들면, 관성군의 작용이 $\chi^a\oplus\chi^b$ 로 분해되고(여기서 $0\le a\le b\le p-2$ 이고 $\chi$ 는 mod $p$ 순환지표다) 표현이 $I_p$ 에서 분해되면

$$
k(\bar\rho)=1+pa+b
$$

이다. 관성군의 상이 $\mathbb F_{p^2}^\times$ 안에 있어 준위 $2$ 의 기본 지표 $\psi$ 로 $\psi^{a+pb}\oplus\psi^{b+pa}$ $(0\le a\lt b\le p-1)$ 꼴이 되는 경우에도 같은 공식이 쓰인다. 직관 절의 곡선은 $p\ne 11$ 에서 좋은 환원을 가져 $k(\bar\rho_{E,p})=2$ 다. 야생 분기가 있으면 정의가 더 복잡해지고, $p=2$ 에서는 Serre 의 원래 정의를 수정해야 한다.

$\ell\ne p$ 에서 $\bar\rho$ 가 비분기이면 그 소수는 레벨에 기여하지 않는다. $p$ 자리의 분기는 레벨이 아니라 무게에 들어간다. 무게 $k$ 의 형식에서 $\det\bar\rho_f=\varepsilon\chi^{k-1}$ 이므로 관성군 위의 순환지표의 지수가 무게를 정한다. 공식 $1+pa+b$ 에서 $a$ 가 $p$ 배가 되므로 무게는 $p^2$ 규모까지 커질 수 있다.

# 성질

## 약한 형태와 강한 형태의 동치

$p\gt 2$ 에서 약한 형태와 강한 형태는 동치다. 모듈러 표현이 주어지면 레벨과 무게를 $N(\bar\rho)$, $k(\bar\rho)$ 까지 내릴 수 있다는 것이 증명의 요지다. 레벨 낮추기(level lowering)는 Ribet(1990)이 증명한 Serre 의 $\varepsilon$ 추측이고, Frey 곡선을 [Fermat 마지막 정리](fermats-last-theorem.md)와 이었다. 무게 쪽은 Edixhoven, Carayol, Diamond 등이 맞추었다. 그래서 Khare–Wintenberger 는 약한 형태만 증명하면 되었다.

## 증명의 구조

Khare–Wintenberger 의 증명은 세 부품을 귀납으로 엮는다.

1. **올림.** $\bar\rho$ 를 $p$ 진 기하적 표현으로 올린다. 조건을 단 변형환이 비어 있지 않음을 보이는 문제이고, Ramakrishna 의 올림 정리와 그 확장이 국소 조건을 적당히 고르면 올림이 존재함을 준다. 국소 조건은 $p$ 에서 결정적 또는 반안정, 다른 자리에서는 도체를 지정한 것으로 잡는다.
2. **모듈러성 올림.** $\bar\rho$ 가 모듈러이면 조건을 만족하는 올림도 모듈러라는 $R=T$ 형태의 정리. Wiles–Taylor 에서 시작해 Kisin 까지 온 기술이 여기 전부 들어간다.
3. **귀납.** 위 둘만으로는 순환이다. 2 번이 $\bar\rho$ 의 모듈러성을 이미 요구하기 때문이다. 고리를 끊는 장치가 **소수 사이의 이동**이다. $\bar\rho$ 를 올려 얻은 특성 $0$ 표현 $\rho$ 는 모든 소수 $q$ 에서 잉여표현 $\bar\rho_q$ 를 갖는다. $q$ 를 잘 고르면 $\bar\rho_q$ 쪽이 더 다루기 쉬운 경우로 내려가고, 거기서 모듈러성을 얻은 뒤 다시 $\rho$ 로 올라와 원래 $p$ 로 돌아온다.

귀납은 무게와 레벨에 대해 돌고, 바닥에는 고전적인 사실이 놓인다. $p=2$ 와 $p=3$ 에서 $p$ 밖에서 비분기인 기약 홀수 표현이 없다는 Tate 와 Serre 의 결과다. 그런 표현의 상이 정의하는 수체는 $p$ 밖에서 비분기인데, 판별식의 하한(Odlyzko bound)이 그런 수체의 차수를 작게 묶어 표현이 존재할 수 없다.

## 따름정리

- **Fermat 의 마지막 정리.** Frey 곡선의 mod $p$ 표현이 레벨 $2$ 무게 $2$ 에서 모듈러여야 하는데 그 공간이 $0$ 이다. Serre 추측의 강한 형태에서 모순이 나온다. 증명은 Ribet 의 레벨 낮추기와 Wiles 의 모듈러성 정리로 먼저 이루어졌다.
- **홀수 2 차원 Artin 추측.** 상이 유한한 홀수 기약 표현 $\rho\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\mathbb C)$ 의 [Artin L 함수](artin-l-functions.md)가 정칙이라는 주장. Khare–Wintenberger 정리와 Kisin 의 모듈러성 올림 정리로 이런 $\rho$ 가 무게 $1$ 형식에서 온다는 것이 증명되었고, 정칙성이 따라 나온다.
- **[Fontaine–Mazur 추측](fontaine-mazur.md)의 입력.** $\mathrm{GL}\_2$ 경우를 증명하는 Kisin–Emerton 논법은 잔여표현이 모듈러라는 가정에서 출발한다. Serre 추측이 그 가정을 불필요하게 만든다.
- **계산 가능한 판정.** $\bar\rho$ 를 주면 $(k,N)$ 을 계산하고 유한 차원 공간에서 대각합을 맞춰 보면 된다. [모듈러 기호](modular-symbols.md)로 그 공간을 다루므로 절차 전체가 컴퓨터에서 돈다.

## 수체와 일반 군

- **수체 위의 Serre 추측.** Buzzard–Diamond–Jarvis 가 총실수체(totally real field) 위의 무게 공식을 정식화했다. 무게가 하나가 아니라 집합이 되고, 국소 조건으로 다시 쓰인다.
- **일반 군.** $\mathrm{GL}\_n$ 과 다른 환원군에 대한 판본에서는 Herzig 와 Gee–Herzig–Savitt 가 무게 공식을 정식화했다.

# 활용

## 모듈러성 판정

- **모듈러성 판정.** [타원곡선](elliptic-curves.md)이나 아벨 다양체에서 나온 $\bar\rho$ 를 만나면 $(k,N)$ 을 계산하고 해당 공간의 고유형식과 대각합을 맞춘다. Frey 곡선 논법의 실전 형태다.
- **합동의 원천.** 계수 사이의 합동은 mod $p$ 표현의 상이 작아진 데서 나온다. 무게 $12$ 레벨 $1$ 의 첨점형식 $\Delta=\sum\tau(n)q^n$ 에서 $\bar\rho_{\Delta,p}$ 의 상이 작아지는 소수는 $2,3,5,7,23,691$ 이다[^1]. $p=691$ 에서는 표현이 $1\oplus\chi^{11}$ 로 쪼개져 Ramanujan 합동 $\tau(n)\equiv\sigma_{11}(n)\pmod{691}$ 이 나오고, $691$ 은 $\zeta(-11)=691/32760$ 의 분자다. $p=23$ 에서는 상이 이면체군이어서 $\tau(\ell)\bmod 23$ 이 $\mathbb Q(\sqrt{-23})$ 의 Hilbert 류체(Hilbert class field)에서 $\ell$ 이 분해되는 방식으로 정해진다.
- **$p$ 진 Langlands 의 잔여 입력.** 모듈러성 올림 정리는 언제나 잔여표현의 모듈러성을 가정에 둔다. Serre 추측이 $\mathrm{GL}\_2/\mathbb Q$ 에서 그 가정을 제거해 주었고, 그 덕에 Fontaine–Mazur 추측의 $\mathrm{GL}\_2$ 경우가 조건 없는 정리가 되었다.

[^1]: J.-P. Serre, *Sur les représentations modulaires de degré 2 de Gal(Q̄/Q)*, Duke Math. J. **54** (1987), 179–230. 추측의 원전이고 무게·레벨 공식과 $\Delta$ 의 예외적 소수 계산이 여기 있다.

[^2]: C. Khare, J.-P. Wintenberger, *Serre's modularity conjecture I, II*, Invent. Math. **178** (2009), 485–504, 505–586.

# 연관 문서

## 선수지식

- [Galois 표현의 변형환](deformation-rings.md)
- [Hecke 작용소](hecke-operators.md)

## 더 알아보기

- [Fermat 마지막 정리](fermats-last-theorem.md)

#number_theory #group_theory #theorem
