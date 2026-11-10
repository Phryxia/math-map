# Arthur 매개변수

# 개요

**Arthur 매개변수(Arthur parameter)** 는 L 매개변수에 $\mathrm{SL}\_2$ 를 하나 더 붙여 비템퍼드 표현까지 분류하는 매개변수다. 예로 $\mathrm{GL}\_2$ 의 자명 표현은 자기동형 스펙트럼에 나타나지만 Satake 매개변수의 절댓값이 $1$ 이 아니어서 L 매개변수로 적히지 않는다. Arthur 매개변수는 둘째 $\mathrm{SL}\_2$ 의 표현으로 그 어긋남을 적어 이런 표현에도 매개변수를 주고, 각 표현이 이산 스펙트럼에 몇 번 나타나는지를 계산한다.

# 직관

[Vogan L 꾸러미](vogan-packets.md)의 L 매개변수 $\varphi:W_F\times\mathrm{SL}\_2(\mathbb C)\to{}^LG$ 는 $W_F$ 위에서 유계이고, 그 표현들은 템퍼드(tempered)다. $p$ 진 자리에서 템퍼드 비분기 표현의 Satake 매개변수는 절댓값이 $1$ 이다. Ramanujan 추측(Ramanujan conjecture)은 $\mathrm{GL}\_n$ 의 첨점 표현이 모든 자리에서 템퍼드라는 진술이다.

$\mathrm{GL}\_2(\mathbb A)$ 의 자명 표현은 상수함수로 실현되어 이산 스펙트럼에 들어 있다. 그 비분기 자리 $p$ 의 Satake 매개변수는 $\lbrace p^{1/2},p^{-1/2}\rbrace$ 이고 절댓값이 $1$ 이 아니다. 그래서 유계인 L 매개변수로는 이 표현을 적을 수 없다.

$p^{1/2},p^{-1/2}$ 는 $\mathrm{SL}\_2(\mathbb C)$ 의 $2$ 차원 표현에 $\mathrm{diag}(p^{1/2},p^{-1/2})$ 를 넣은 값의 [고윳값](eigenvalues.md)이다. $d$ 차원 표현 $[d]$ 에 넣으면 $p^{(d-1)/2},p^{(d-3)/2},\dots,p^{-(d-1)/2}$ 가 나온다. 그래서 L 매개변수에 $\mathrm{SL}\_2(\mathbb C)$ 를 하나 더 붙이고, 그 $\mathrm{SL}\_2$ 의 표현으로 Satake 매개변수가 $1$ 에서 벗어나는 크기를 적는다. 자명 표현은 유계인 부분이 자명하고 둘째 $\mathrm{SL}\_2$ 가 $[2]$ 로 작용하는 매개변수가 된다.

# 정의

## Arthur 매개변수

$F$ 가 국소체이고 $G$ 가 $F$ 위의 연결 환원군일 때, $G$ 의 **Arthur 매개변수(Arthur parameter)** 는 준동형

$$
\psi:\ W_F\times\mathrm{SL}\_2(\mathbb C)\times\mathrm{SL}\_2(\mathbb C)\to{}^LG
$$

로서 $W_F$ 로 제한한 것이 유계 상을 갖고 두 $\mathrm{SL}\_2$ 로 제한한 것이 대수적인 것이다. 첫째 $\mathrm{SL}\_2$ 는 L 매개변수의 $\mathrm{SL}\_2$ 이고, 둘째를 **Arthur $\mathrm{SL}\_2$** 라 부른다. $\psi$ 에 대응하는 L 매개변수는 다음과 같다.

$$
\varphi_\psi(w)=\psi\negthinspace\left(w,\ 1,\ \begin{pmatrix}|w|^{1/2}&\cr&|w|^{-1/2}\end{pmatrix}\right)
$$

직관 절의 자명 표현은 $G=\mathrm{GL}\_2$, ${}^LG=\mathrm{GL}\_2(\mathbb C)\times W_F$ 에서 $\psi=1\boxtimes[2]$ 로 적힌다. 곧 $W_F$ 와 첫째 $\mathrm{SL}\_2$ 에서는 자명하고 둘째 $\mathrm{SL}\_2$ 에서는 표준 $2$ 차원 표현이다. 이때 $\varphi_\psi(w)=\mathrm{diag}(|w|^{1/2},|w|^{-1/2})$ 이고 Frobenius 의 상의 고윳값이 $p^{\mp1/2}$ 이다. 둘째 $\mathrm{SL}\_2$ 에서 자명한 $\psi$ 는 L 매개변수 그 자체다.

$\mathrm{GL}\_N$ 의 표현 $\sigma$ 와 $[d]$ 의 [텐서곱](tensor-products.md)을 $\sigma\boxtimes[d]$ 로, 직합을 $\boxplus$ 로 적는다.

## Arthur 꾸러미

**Arthur 꾸러미(Arthur packet)** $\Pi_\psi$ 는 $\psi$ 에 대응하는 $G(F)$ 의 표현들의 유한 다중집합이다. 원소 $\pi$ 마다 아래 성분군의 지표 $\chi_\pi$ 가 붙고, 꾸러미와 지표는 꼬인 내시 지표 항등식(twisted endoscopic character identity)으로 정해진다.[^1] $\mathrm{GL}\_2$ 의 $\psi=1\boxtimes[2]$ 에서는 $\Pi_\psi$ 가 자명 표현 하나다.

## 성분군과 부호 지표

$S_\psi=\mathrm{Cent}(\mathrm{im}\thinspace\psi,\widehat G)$ 로 두고 **성분군(component group)** 을 $\mathcal S_\psi=\pi_0(S_\psi/Z(\widehat G)^\Gamma)$ 로 정의한다.

전역 매개변수 $\psi=\boxplus_i\sigma_i\boxtimes[d_i]$ 에서 $i$ 번째 성분에 $-1$ 로, 나머지에 $1$ 로 작용하는 원소를 $s_i$ 라 하자. **부호 지표(sign character)** $\epsilon_\psi:\mathcal S_\psi\to\lbrace\pm1\rbrace$ 는 다음 값으로 정의된다.[^1]

$$
\epsilon_\psi(s_i)=\prod_{j\ne i,\ d_i+d_j\ \text{홀수}}\varepsilon\negthinspace\left(\tfrac12,\ \sigma_i\times\sigma_j\right)^{\min(d_i,d_j)}
$$

$\varepsilon(\tfrac12,\sigma_i\times\sigma_j)$ 는 Rankin–Selberg L 함수의 중심점 $\varepsilon$ 인자다. $G=\mathrm{Sp}\_4$, $\widehat G=\mathrm{SO}\_5(\mathbb C)$ 에서 $\mathrm{PGL}\_2$ 의 첨점 표현 $\sigma$ 로 만든 $\psi=\sigma\boxtimes[2]\boxplus1\boxtimes[1]$ 는 $d_1+d_2=3$ 이 홀수라 $\epsilon_\psi(s_1)=\varepsilon(\tfrac12,\sigma)$ 다. 이 $\psi$ 의 꾸러미가 Saito–Kurokawa 올림(Saito–Kurokawa lift)을 포함한다.

# 성질

## 중복도 공식

전역 표현 $\pi=\otimes\pi_v$ 에서 각 $\pi_v$ 가 국소 꾸러미 $\Pi_{\psi_v}$ 의 원소이면, 전역 성분군 $\mathcal S_\psi$ 에서 각 국소 성분군 $\mathcal S_{\psi_v}$ 로 가는 사상을 따라 국소 지표들을 곱해 지표 하나를 얻는다.

$$
\chi_\pi=\prod_v\chi_{\pi_v}\ \in\ \mathrm{Irr}(\mathcal S_\psi)
$$

Arthur 의 중복도 공식(multiplicity formula)은 다음 진술이다.[^1] $G$ 가 준분할 고전군(quasi-split classical group)이고 $\psi$ 가 이산 전역 Arthur 매개변수이면, $\pi\in\Pi_\psi$ 가 이산 스펙트럼에 받는 $\psi$ 의 기여는

$$
m_\psi(\pi)=
\begin{cases}
1,&\chi_\pi=\epsilon_\psi\cr
0,&\text{그 외}
\end{cases}
$$

이고, $\pi$ 의 이산 스펙트럼 중복도는 $\pi$ 를 포함하는 꾸러미들의 기여를 더한 값(짝수 직교군에서는 상수배)이다. Saito–Kurokawa 의 예에서 무한 자리의 지표가 $s_1$ 에서 $-1$ 인 표현은 $\varepsilon(\tfrac12,\sigma)=-1$ 일 때만 이산 스펙트럼에 나타난다.

## GLₙ 의 경우

$\mathrm{GL}\_n$ 에서는 중심화군이 연결이라 성분군이 자명하고, $\Pi_\psi$ 는 원소가 하나다. Mœglin–Waldspurger 정리(Mœglin–Waldspurger theorem)에 따르면 이산 스펙트럼의 표현은 다음 매개변수와 일대일로 대응한다.

$$
n=dm,\qquad
\psi=\sigma\boxtimes[d],\qquad
\sigma\ \text{는 }\mathrm{GL}\_m\text{ 의 첨점 표현}
$$

$d=1$ 이 첨점 표현이고, $d\gt 1$ 이면 잔여 스펙트럼의 [Speh 표현](speh-representations.md)이다. $m=1$, $d=n$ 이면 $\sigma$ 는 $\mathrm{GL}\_1$ 의 지표 $\chi$ 이고 표현은 $1$ 차원 표현 $\chi\circ\det$ 다. 직관 절의 자명 표현은 $n=2$, $\chi=1$ 인 경우다.

## 고전군의 분류

Arthur 는 준분할 고전군의 이산 스펙트럼을 $\mathrm{GL}\_N$ 의 자기쌍대 첨점 표현으로 분류했다.[^1] 매개변수는

$$
\psi=\boxplus_i\ \sigma_i\boxtimes[d_i],
\qquad
\sigma_i\ \text{는 }\mathrm{GL}\_{m_i}\text{ 의 자기쌍대 첨점 표현}
$$

꼴이고, 각 $\sigma_i\boxtimes[d_i]$ 가 $\widehat G$ 가 보존하는 쌍선형 형식과 같은 유형(직교 또는 심플렉틱)이어야 한다. 증명은 안정화된 대각합 공식(stabilized trace formula)과 $\mathrm{GL}\_N$ 으로의 이전을 쓰고, 그 안정화에 [기본 보조정리](fundamental-lemma.md)를 사용한다.

## Arthur 꾸러미와 L 꾸러미의 차이

L 꾸러미와 달리 Arthur 꾸러미에는 다음 성질이 있다.

- 유니터리이지만 템퍼드가 아닌 표현이 들어간다.
- 서로 다른 매개변수의 꾸러미가 겹칠 수 있다.
- 꾸러미 안의 표현이 중복도를 갖고 나타날 수 있다.

국소 꾸러미 $\Pi_{\psi_v}$ 는 L 꾸러미 $\Pi_{\varphi_{\psi_v}}$ 를 포함한다.

## Ramanujan 추측과의 관계

$\mathrm{GL}\_n$ 의 첨점 표현이 템퍼드라는 Ramanujan 추측은 Arthur 매개변수로 쓰면 첨점 표현의 매개변수 $\sigma\boxtimes[1]$ 에서 둘째 $\mathrm{SL}\_2$ 가 자명하다는 진술이다. 고전군에서는 이 진술이 성립하지 않는다. 둘째 $\mathrm{SL}\_2$ 가 자명하지 않은 첨점 표현, 곧 CAP(cuspidal associated to parabolic) 표현이 존재하고 Saito–Kurokawa 올림이 그 예다.

# 활용

## 이산 스펙트럼 계산

주어진 레벨과 무게에서 어떤 자기동형 표현이 몇 개 있는지를, 매개변수 조합을 나열하고 각각에 대해 지표 조건을 확인하는 유한 계산으로 바꾼다. [모듈러 형식](modular-forms.md) 공간의 차원 공식이 이 계산으로 표현론에서 유도된다.

## 올림의 예측

Saito–Kurokawa, Ikeda, Miyawaki 올림(lift)처럼 한 군의 형식에서 다른 군의 형식을 만드는 구성은 Arthur 매개변수 수준에서 매개변수의 재조립이다. 어떤 올림이 존재할 수 있고 그 상이 무엇인지를 매개변수의 모양으로 예측한다.

## 산술적 응용의 입력

고전군의 자기동형 표현을 [Galois 표현](galois-representations.md)과 잇는 작업([Shimura 다양체](shimura-varieties.md)의 [코호몰로지](cohomology.md) 분해)은 어떤 표현이 이산 스펙트럼에 있는지를 먼저 알아야 한다. 고전군에 대한 모듈러성 올림 정리(modularity lifting theorem)와 [Langlands 강령](langlands-program.md)의 상호성 결과들이 Arthur 의 분류를 사용한다.

[^1]: J. Arthur, *The Endoscopic Classification of Representations: Orthogonal and Symplectic Groups*, AMS Colloquium Publications **61**, 2013. 꾸러미의 존재, 부호 지표, 중복도 공식이 1 장에 진술되어 있다.

# 연관 문서

## 선수지식

- [Vogan L 꾸러미](vogan-packets.md)
- [기본 보조정리](fundamental-lemma.md)

## 더 알아보기

- [Speh 표현](speh-representations.md)

#number_theory #group_theory #field_theory
