# Serre 추측과 Khare–Wintenberger 정리

# 개요

[모듈러 형식](modular-forms.md)의 고유형식 $f$ 는 각 소수 $\lambda\mid p$ 마다 Galois 표현 $\rho_{f,\lambda}$ 를 낳고, 그것을 잉여체로 환원하면 2 차원 mod $p$ 표현

$$
\bar\rho_f\colon G_{\mathbb Q}\longrightarrow \mathrm{GL}\_2(\overline{\mathbb F}\_p)
$$

가 나온다. Serre 는 1987 년에 그 역을 물었다.[^1] 연속이고 기약이고 홀수인 mod $p$ 표현은 모두 이렇게 나오는가? 여기서 홀수란 복소켤레 $c$ 에 대해 $\det\bar\rho(c)=-1$ 이라는 뜻이다.

추측은 여기서 멈추지 않는다. Serre 는 그런 $f$ 의 무게와 레벨을 $\bar\rho$ 자체에서 읽는 공식을 함께 제시했다.

$$
k(\bar\rho)\ \text{는}\ \bar\rho|\_{I_p}\ \text{로부터},\qquad
N(\bar\rho)\ \text{는}\ p\ \text{밖의 분기로부터}
$$

레벨은 $p$ 를 뺀 Artin 도체이고, 무게는 $p$ 자리의 온순 분기 지표의 지수로 정해진다. 표현 하나를 받아 유한한 자료 $(k,N)$ 을 계산하면, 찾아야 할 고유형식이 유한 차원 공간 $S_{k}(\Gamma_1(N))$ 안에 있다고 장소까지 지목한다는 것이다. 추측이 곧 알고리즘인 드문 형태다.

Khare 와 Wintenberger 가 2008 년에 이것을 증명했다.[^2] 증명의 요지는 [변형환](deformation-rings.md)이다. $\bar\rho$ 를 조건에 맞는 특성 $0$ 표현으로 **올리고**, 모듈러성 올림 정리($R=T$ 정리)로 그 올림이 모듈러임을 보이고, 다시 환원해 $\bar\rho$ 가 모듈러라고 결론짓는다. 올림은 언제나 가능하지 않으므로 소수와 무게를 옮겨 가며 귀납을 돌리는데, 그 귀납이 증명의 핵심 장치다.

# 직관

## 홀수성 조건

$\rho_{f,\lambda}$ 는 [모듈러 곡선](modular-curves.md)의 코호몰로지에서 나오고, 복소켤레는 그 위에 실점의 대합으로 작용해 고윳값 $+1,-1$ 을 하나씩 갖는다. 그러므로 모듈러 표현은 반드시 $\det\bar\rho(c)=-1$ 이다. 홀수 조건은 결론을 위한 가정이 아니라 필요조건을 그대로 옮겨 적은 것이다.

짝수 표현에는 정칙 모듈러 형식이 아니라 Maass 형식이 대응하고, 그 대응은 해석적이라 더 어렵다. 홀수 조건이 있어 Serre 추측이 정칙 형식만으로 완결된다.

## 레벨과 무게의 결정

$\ell\ne p$ 에서 $\bar\rho$ 가 비분기이면 그 소수는 레벨에 기여하지 않는다. 분기하면 관성군의 여과로 Artin 도체 지수를 계산해 $\ell^{n_\ell}$ 만큼 레벨을 키운다. 자기동형 형식 쪽에서 도체가 레벨인 것과 정확히 같은 규칙이다.

$p$ 자리는 사정이 다르다. $p$ 에서의 분기는 레벨로 보내지 않고 **무게**로 흡수한다. $\bar\rho|\_{I_p}$ 가 온순 지표 $\chi^a\oplus\chi^b$ 로 분해되면

$$
k(\bar\rho)=1+pa+b
$$

꼴의 공식이 나온다. 왜 지수가 무게가 되는지는 순환지표가 무게 $2$ 의 형식에서 오고 $\chi^{k-1}$ 이 무게 $k$ 에 대응한다는 관찰을 밀고 나간 결과다. 관성군의 지수 하나가 $p$ 배로 증폭되어 무게가 되는 것이 이 공식의 특징이고, 그래서 작은 표현에서도 무게가 $p$ 규모로 커진다.

## $\Delta$ 의 두 가지 쓰임

무게 $12$ 레벨 $1$ 의 유일한 첨점형식 $\Delta=\sum\tau(n)q^n$ 을 예로 든다. 거의 모든 $p$ 에서 $\bar\rho_{\Delta,p}$ 의 상은 가능한 한 크다. 그러나 유한개의 **예외적 소수** $2,3,5,7,23,691$ 에서는 상이 작아지고, 그때마다 $\tau$ 에 합동이 생긴다.

$p=691$ 에서는 표현이 아예 가약이 되어 $1\oplus\chi^{11}$ 로 갈라진다. 그 결과가 Ramanujan 의 합동이다.

$$
\tau(n)\equiv\sigma_{11}(n)\pmod{691}
$$

이 경우는 Serre 추측의 가정인 기약성을 만족하지 않는다. 가약한 표현은 Eisenstein 급수에서 오기 때문에 처음부터 제외해야 하고, $691$ 은 무게 $12$ Eisenstein 급수의 상수항 $\zeta(-11)$ 의 분자를 나누는 소수다.

$p=23$ 에서는 기약이지만 상이 이면체군에 들어간다. 그러면 $\tau(p)\bmod23$ 이 $\mathbb Q(\sqrt{-23})$ 에서 $p$ 가 어떻게 분해되는지로 결정된다. 세 갈래 법칙이 나온다.

# 정의

## 모듈러인 표현

$\bar\rho\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\overline{\mathbb F}\_p)$ 가 **모듈러**라는 것은 어떤 무게 $k\ge2$ 와 레벨 $N$ 과 네벤티푸스 $\varepsilon$ 의 고유형식 $f\in S_k(\Gamma_1(N))$ 과 $\lambda\mid p$ 가 있어

$$
\bar\rho\thickspace\cong\thickspace\bar\rho_{f,\lambda}
$$

인 것이다. 동치로, 거의 모든 소수 $\ell$ 에서

$$
\mathrm{tr}\bar\rho(\mathrm{Frob}\_\ell)\equiv a_\ell(f),\qquad
\det\bar\rho(\mathrm{Frob}\_\ell)\equiv \varepsilon(\ell)\ell^{k-1}\pmod\lambda
$$

가 성립하는 것이다. Chebotarev 밀도 정리가 거의 모든 $\ell$ 에서의 자취 일치로 표현이 결정됨을 보장한다.

## 추측의 두 형태

**약한 형태.** 연속, 기약, 홀수인 $\bar\rho$ 는 모듈러다.

**강한 형태.** 그런 $\bar\rho$ 는 무게 $k(\bar\rho)$ 와 레벨 $N(\bar\rho)$ 에서 모듈러다. 두 값은 다음으로 정한다.

$$
N(\bar\rho)=\prod_{\ell\ne p}\ell^{\thinspace n_\ell},\qquad
n_\ell=\sum_{i\ge0}\frac{|G_i|}{|G_0|}\dim\bigl(V/V^{G_i}\bigr)
$$

$G_i$ 는 $\ell$ 에서의 상위 분기군, $V=\overline{\mathbb F}\_p^2$ 다. 무게는 $\bar\rho|\_{I_p}$ 로 정한다. $p\gt 2$ 인 온순한 경우를 예로 들면, 관성군의 작용이 $\chi^a\oplus\chi^b$ 로 분해되고(여기서 $0\le a\lt b\le p-2$ 이고 $\chi$ 는 mod $p$ 순환지표다) 표현이 $I_p$ 에서 분해되면

$$
k(\bar\rho)=1+pa+b
$$

이다. 관성군의 상이 $\mathbb F_{p^2}^\times$ 안에 있어 준위 $2$ 의 기본 지표 $\psi$ 로 $\psi^{a+pb}\oplus\psi^{b+pa}$ 꼴이 되는 경우에도 같은 공식이 쓰인다. 야생 분기가 있으면 정의가 더 복잡해지고, $p=2$ 에서는 Serre 의 원래 정의를 수정해야 한다.

## Ribet 의 정리

**정리(Ribet, 1990).** $p\gt 2$ 에서 약한 형태와 강한 형태는 동치다.

증명은 모듈러 표현이 주어졌을 때 레벨과 무게를 실제로 최소값까지 **내리는** 것이다. 레벨 낮추기가 이른바 $\varepsilon$ -추측이고, 이것이 Frey 곡선과 Fermat 의 마지막 정리를 이었다. 그러므로 $\bar\rho$ 를 아무 $(k,N)$ 에서 모듈러라고 보이기만 하면 최소 자료까지 자동으로 내려온다. Khare–Wintenberger 가 약한 형태만 공략하면 되었던 이유다.

# 성질

## 증명의 구조

Khare–Wintenberger 의 증명은 세 부품을 귀납으로 엮는다.

1. **올림.** $\bar\rho$ 를 $p$ 진 기하적 표현으로 올린다. 조건을 단 변형환이 비어 있지 않음을 보이는 문제이고, Ramakrishna 의 올림 정리와 그 확장이 국소 조건을 적당히 고르면 올림이 존재함을 준다. 국소 조건은 $p$ 에서 결정적 또는 반안정, 다른 자리에서는 도체를 지정한 것으로 잡는다.
2. **모듈러성 올림.** $\bar\rho$ 가 모듈러이면 조건을 만족하는 올림도 모듈러라는 $R=T$ 형태의 정리. Wiles–Taylor 에서 시작해 Kisin 까지 온 기술이 여기 전부 들어간다.
3. **귀납.** 위 둘만으로는 순환이다. 2 번이 $\bar\rho$ 의 모듈러성을 이미 요구하기 때문이다. 고리를 끊는 장치가 **소수 사이의 이동**이다. $\bar\rho$ 를 올려 얻은 특성 $0$ 표현 $\rho$ 는 모든 소수 $q$ 에서 잉여표현 $\bar\rho_q$ 를 갖는다. $q$ 를 잘 고르면 $\bar\rho_q$ 쪽이 더 다루기 쉬운 경우로 내려가고, 거기서 모듈러성을 얻은 뒤 다시 $\rho$ 로 올라와 원래 $p$ 로 돌아온다.

귀납은 무게와 레벨에 대해 돌고, 바닥에는 고전적인 사실이 놓인다. $p=2,3$ 에서 레벨 $1$ 이고 분기가 작은 표현은 존재하지 않는다는 Tate 와 Serre 의 판별식 논법이다. $\mathbb Q$ 밖으로 분기가 거의 없는 수체는 판별식 하한 때문에 아주 작을 수밖에 없다는 관찰에서 나온다. 자기동형 형식을 하나도 쓰지 않는 이 바닥 사례가 전체 귀납을 지탱한다.

## 따름정리

- **Fermat 의 마지막 정리.** Frey 곡선의 mod $p$ 표현이 레벨 $2$ 무게 $2$ 에서 모듈러여야 하는데 그 공간이 $0$ 이다. Serre 추측의 강한 형태만으로 모순이 나온다. 역사적으로는 Ribet 의 레벨 낮추기와 Wiles 의 모듈러성 정리로 따로 증명되었지만, 더 짧은 논리적 경로는 Serre 추측을 거친다.
- **홀수 2 차원 Artin 추측.** 상이 유한한 홀수 기약 표현 $\rho\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\mathbb C)$ 의 Artin $L$ 함수가 정칙이라는 주장. Serre 추측에서 $k(\bar\rho)=1$ 인 경우에 해당하고, 무게 $1$ 형식에서 모듈러성이 나오면 정칙성이 따라온다. 이 방향이 Khare–Wintenberger 이후 정리가 되었다.
- **[Fontaine–Mazur 추측](fontaine-mazur.md)의 입력.** $\mathrm{GL}\_2$ 경우를 증명하는 Kisin–Emerton 논법은 잔여표현이 모듈러라는 가정에서 출발한다. Serre 추측이 그 가정을 불필요하게 만든다.
- **계산 가능한 판정.** $\bar\rho$ 를 주면 $(k,N)$ 을 계산하고 유한 차원 공간에서 자취를 맞춰 보면 된다. [모듈러 기호](modular-symbols.md)로 그 공간을 다루므로 절차 전체가 컴퓨터에서 돈다.

## 일반화

- **수체 위의 Serre 추측.** Buzzard–Diamond–Jarvis 가 완전실체 위의 무게 공식을 정식화했다. 무게가 하나가 아니라 집합이 되고, 국소 조건의 언어로 다시 쓰인다.
- **일반 군.** $\mathrm{GL}\_n$ 과 다른 환원군에 대한 판본이 제안되어 있으나, 무게 공식 자체가 국소 Galois 표현의 결정적 변형환의 기하로 번역되어야 해서 진술부터 어렵다.
- **홀수 조건의 필연성.** 짝수 표현의 경우 대응은 Maass 형식 쪽이고, 이쪽은 $p$ 진 방법이 거의 닿지 않는다. Serre 추측이 정칙 형식으로 닫히는 것은 홀수 조건 덕분이다.

# 활용

## 모듈러성 판정

- **모듈러성 판정.** 타원곡선이나 아벨 다양체에서 나온 $\bar\rho$ 를 만나면 $(k,N)$ 을 계산하고 해당 공간의 고유형식과 자취를 맞춘다. Frey 곡선 논법의 실전 형태다.
- **합동의 원천.** $\tau$ 의 합동처럼 계수 사이의 합동은 대개 mod $p$ 표현의 상이 작아진 흔적이다. 어떤 합동이 가능한지는 상이 될 수 있는 부분군의 분류로 결정된다.
- **$p$ 진 Langlands 의 잔여 입력.** 모듈러성 올림 정리는 언제나 잔여표현의 모듈러성을 가정에 둔다. Serre 추측이 $\mathrm{GL}\_2/\mathbb Q$ 에서 그 가정을 제거해 주었고, 그 덕에 [Fontaine–Mazur 추측](fontaine-mazur.md)의 $\mathrm{GL}\_2$ 경우가 조건 없는 정리가 되었다.

[^1]: J.-P. Serre, *Sur les représentations modulaires de degré 2 de Gal(Q̄/Q)*, Duke Math. J. **54** (1987), 179–230. 추측의 원전이고 무게·레벨 공식과 $\Delta$ 의 예외적 소수 계산이 여기 있다.

[^2]: C. Khare, J.-P. Wintenberger, *Serre's modularity conjecture I, II*, Invent. Math. **178** (2009), 485–504, 505–586.

# 연관 문서

## 선수지식

- [Galois 표현의 변형과 보편 변형환](deformation-rings.md)
- [Hecke 작용소와 새형식](hecke-operators.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory #theorem
