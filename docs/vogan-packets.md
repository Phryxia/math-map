# Vogan L 꾸러미

# 개요

**Vogan L 꾸러미(Vogan L-packet)** 는 하나의 L 매개변수에 대응하는 기약 표현들을 순수 내부 형식(pure inner form) 전체에 걸쳐 모은 집합이다. 국소 [Langlands 강령](langlands-program.md)은 표현마다 L 매개변수라는 이름표를 붙이는데, $\mathrm{GL}\_n$ 이 아닌 군에서는 여러 표현이 같은 이름표를 공유하고, 그 표현들을 구별할 지표 가운데 일부에는 대응하는 표현이 없다. 모자란 표현은 군의 내부 형식 위에 있다. Vogan L 꾸러미는 군과 그 순수 내부 형식들의 표현을 한데 모아, 같은 이름표를 가진 표현과 지표가 일대일로 대응하게 한다.

# 직관

$\mathrm{GL}\_2(\mathbb R)$ 의 무게 $k$ 이산계열 표현을 $\mathrm{SL}\_2(\mathbb R)$ 로 제한하면 정칙 조각 $D_k^{+}$ 와 반정칙 조각 $D_k^{-}$ 로 갈라진다. 두 조각은 $\mathrm{diag}(1,-1)\in\mathrm{GL}\_2(\mathbb R)$ 의 켤레로 서로 옮겨지므로, 국소 Langlands 대응은 둘에 같은 이름표(L 매개변수)를 붙인다. 이름표가 같은 두 표현을 가르려면 이름표 말고 정보가 하나 더 있어야 한다. 그 정보가 매개변수에서 나오는 위수 $2$ 의 유한군의 지표이고, $D_k^{+}$ 와 $D_k^{-}$ 가 그 군의 두 지표에 하나씩 대응한다.

$\mathrm{PGL}\_2(\mathbb R)$ 에서는 사정이 다르다. 무게 $k$ 의 이산계열에 해당하는 매개변수에서도 위수 $2$ 의 유한군이 나오지만, $\mathrm{PGL}\_2(\mathbb R)$ 에는 그 매개변수를 갖는 표현이 $D_k$ 하나뿐이다. 남은 지표에 대응하는 표현은 Hamilton 사원수의 곱셈군을 중심으로 나눈 $\mathbb H^\times/\mathbb R^\times\cong\mathrm{SO}(3)$ 의 $(k-1)$ 차원 표현이다. $\mathrm{PGL}\_2(\mathbb R)$ 과 $\mathrm{SO}(3)$ 의 표현을 한데 모으면 지표와 표현이 일대일로 대응하고, 이렇게 모은 집합이 Vogan L 꾸러미다. 이 짝은 [Jacquet–Langlands 대응](jacquet-langlands.md)이 주는 것과 같다.

# 정의

## L 매개변수와 L 꾸러미

국소체 $F$ 위의 환원군 $G$ 의 **L 매개변수(L-parameter)** 는 Weil–Deligne 군에서 L 군으로 가는 준동형

$$
\varphi:W_F\times\mathrm{SL}\_2(\mathbb C)\longrightarrow{}^LG
$$

이다. 국소 Langlands 대응이 같은 $\varphi$ 를 붙이는 $G(F)$ 의 기약 표현들의 모임을 **L 꾸러미(L-packet)** $\Pi_\varphi(G)$ 라 한다. $\mathrm{GL}\_n$ 에서는 꾸러미가 원소 하나이고, 직관 절의 $\mathrm{SL}\_2(\mathbb R)$ 에서는 $\lbrace D_k^{+},D_k^{-}\rbrace$ 가 한 꾸러미다.


## 내부형식과 순수 내부형식

$G$ 를 $F$ 위의 유사분열(quasi-split) 환원군이라 하자. $G$ 의 **내부형식(inner form)** 은 $\bar F$ 위에서 $G$ 와 동형이지만 $F$ 위에서는 다를 수 있는 군이고 $H^1(F,G_{\mathrm{ad}})$ 로 분류된다. **순수 내부형식(pure inner form)** 은 $H^1(F,G)$ 로 분류되며 각 코사이클 $b$ 가 군 $G_b$ 를 준다.

- $G=\mathrm{PGL}\_2$ : 내부형식은 $B^\times/F^\times$ , 곧 [사원수 대수](quaternion-algebras.md)들이다.
- $G=U(V)$ : 순수 내부형식은 같은 차원의 에르미트 공간 $V'$ 들이고, 국소체 위에서는 판별식으로 구별되어 정확히 두 개다.
- $G=\mathrm{GL}\_n$ : $H^1(F,\mathrm{GL}\_n)=1$ 이므로 순수 내부형식이 자기 자신뿐이다.

## 성분군

$\varphi$ 의 상을 중심화하는 쌍대군의 부분군을 $S_\varphi=\mathrm{Cent}\bigl(\varphi,\widehat G\bigr)$ 라 하고

$$
\mathcal S_\varphi=\pi_0\negthinspace\left(S_\varphi\right)
$$

를 **성분군(component group)** 이라 한다. $G$ 하나의 꾸러미만 볼 때는 $\pi_0\bigl(S_\varphi/Z(\widehat G)^{\Gamma}\bigr)$ 를 쓴다. $G=\mathrm{PGL}\_2$ 이면 $\widehat G=\mathrm{SL}\_2(\mathbb C)$ 이고, 직관 절의 이산계열 매개변수에서 $S_\varphi=\lbrace\pm1\rbrace$ 이므로 $\mathcal S_\varphi\cong\mathbb Z/2$ 다. 자명 지표가 $\mathrm{PGL}\_2(\mathbb R)$ 의 $D_k$, 다른 지표가 $\mathrm{SO}(3)$ 의 $(k-1)$ 차원 표현에 대응한다.

## Vogan L 꾸러미와 정련된 대응

$$
\Pi_\varphi^{\mathrm{Vogan}}=\bigsqcup_{b\in H^1(F,G)}\Pi_\varphi(G_b)
\ \xrightarrow{\ \sim\ }\ \mathrm{Irr}(\mathcal S_\varphi)
$$

이 전단사가 정련된 국소 Langlands 대응(refined local Langlands correspondence)이고, 왼쪽 집합을 **Vogan L 꾸러미** 라 한다. 표현이 어느 순수 내부형식 위에 있는지는 지표를 $Z(\widehat G)^\Gamma$ 에 제한해 읽는다.

$\Pi_\varphi\leftrightarrow\mathrm{Irr}(\mathcal S_\varphi)$ 는 표준적인 대응이 아니다. 양쪽 모두 유한집합이라 짝짓는 방법이 여럿이고, 하나를 고정하려면 기저점을 정해야 하고, 관례는 Whittaker 데이터(Whittaker datum)를 쓴다. 유사분열형 $G$ 위에서 주어진 Whittaker 데이터에 대해 [일반 표현](whittaker-models.md)인 원소를 $\mathcal S_\varphi$ 의 자명 지표에 대응시키고, 꾸러미마다 그런 일반 표현이 정확히 하나 있다는 Shahidi 의 일반성 추측(Shahidi's genericity conjecture)이 이 정규화의 근거다.

## 안정성

개별 표현의 지표는 안정 켤레류 위에서 잘 정의되지 않지만, 꾸러미 전체의 합

$$
\Theta_\varphi=\sum_{\pi\in\Pi_\varphi}\dim(\rho_\pi)\thinspace\Theta_\pi
$$

는 안정 분포(stable distribution)가 된다. [기본 보조정리](fundamental-lemma.md)가 쓰이는 대각합 공식의 안정화에서 다루는 대상이 이 합이고, 꾸러미를 쪼개는 이론이 내시(endoscopy)다.

# 성질

## 고전군의 꾸러미 크기

$\mathrm{SO}(2n+1)$ 의 쌍대군은 $\mathrm{Sp}\_{2n}(\mathbb C)$ 다. 이산 매개변수를 서로 다른 기약 성분의 합으로 적으면 각 성분이 심플렉틱형이어야 하고 중심화군은 $\lbrace\pm1\rbrace^r$ 이다. 중심을 나누면 꾸러미 크기가 $2^{r-1}$ 이다. 기약 매개변수의 꾸러미는 원소가 하나뿐이고, 매개변수가 분해될수록 꾸러미가 커진다.

| 매개변수 | 쌍대군 | 군 | 꾸러미 크기 |
| --- | --- | --- | --- |
| $\phi_4$ | $\mathrm{Sp}\_4(\mathbb C)$ | $\mathrm{SO}(5)$ | $1$ |
| $\phi_2+\phi_6$ | $\mathrm{Sp}\_8(\mathbb C)$ | $\mathrm{SO}(9)$ | $2$ |
| $\phi_2+\phi_4+\phi_6$ | $\mathrm{Sp}\_{12}(\mathbb C)$ | $\mathrm{SO}(13)$ | $4$ |

## GGP 지표 공식

[Gan–Gross–Prasad 추측](gan-gross-prasad.md)(GGP)의 국소 진술은 다음 형태다.

$$
\sum_{\pi\in\Pi_\varphi^{\mathrm{Vogan}}}m(\pi)=1,
\qquad
\chi(\pi)=\varepsilon\negthinspace\left(\tfrac12,\varphi_{n+1}\otimes\varphi_n\right)
$$

왼쪽 합은 Vogan L 꾸러미 위의 합이다. 유사분열형 군 하나만 보면 중복도가 전부 0 일 수 있고, 그때 해당 표현은 비유사분열 내부형식 위에 있다. [Waldspurger 정리](waldspurger-formula.md)에서 주기가 어느 사원수 대수 위에서 소멸하지 않는지 묻는 것이 이 현상의 $n=1$ 판본이다. 오른쪽 등식은 $\varepsilon$ 인자가 $\mathcal S_\varphi$ 위의 지표를 지정한다는 뜻이고, 그 지표를 $Z(\widehat G)^\Gamma$ 에 제한하면 내부형식이 나온다.

## Arthur 매개변수

템퍼드가 아닌 표현까지 다루려면 매개변수에 $\mathrm{SL}\_2$ 를 하나 더 붙여 [Arthur 매개변수](arthur-parameters.md)로 넓힌다.

$$
\psi:W_F\times\mathrm{SL}\_2(\mathbb C)\times\mathrm{SL}\_2(\mathbb C)\to{}^LG
$$

둘째 $\mathrm{SL}\_2$ 가 템퍼드가 아닌 성분을 기술한다. Arthur 꾸러미는 대응하는 L 꾸러미를 포함하고, 템퍼드가 아닌 유니터리 표현을 원소로 가질 수 있다. 고전군에 대한 Arthur 의 분류는 전역 중복도 공식을 성분군으로 적는다. 전역 자기동형 표현 $\pi=\otimes\pi_v$ 가 이산 스펙트럼에 나타나는지는 국소 지표들의 곱을 전역 성분군 $\mathcal S_\psi$ 로 제한한 것이 Arthur 의 부호 지표 $\varepsilon_\psi$ 와 같은지로 결정된다.

$$
\Bigl(\prod_v\chi_{\pi_v}\Bigr)\Big\vert\_{\mathcal S_\psi}=\varepsilon_\psi
$$

# 활용

- 분류 정리의 진술 형식. 고전군의 자기동형 표현 분류(Arthur, Mok, Kaletha–Mínguez–Shin–White 의 내부형식 확장)가 이 틀로 적혀 있다. 어떤 표현이 존재하는지를 어떤 매개변수와 지표의 짝이 가능한지로 바꾸어, 표현을 세는 대신 유한군의 지표를 센다.
- 주기와 분지의 예측. 주기 적분의 비소멸 문제가 이 틀에서 진술된다. 주기가 소멸하지 않는 표현을 꾸러미 안에서 지목하는 규칙은 $\mathcal S_\varphi$ 위의 지표로 적힌다.
- 내시와 대각합 공식. 꾸러미가 안정 분포의 단위인 것이 안정화된 대각합 공식의 출발 조건이다. 항등식을 쪼개 개별 표현 정보를 뽑는 일이 내시 이전이며, 그 분해는 $\mathcal S_\varphi$ 의 지표 전개에 해당한다.

# 연관 문서

## 선수지식

- [Langlands 강령](langlands-program.md)
- [Galois 표현](galois-representations.md)

## 더 알아보기

- [Gan–Gross–Prasad 추측](gan-gross-prasad.md)
- [Arthur 매개변수](arthur-parameters.md)

#number_theory #group_theory #field_theory
