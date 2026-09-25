# Arthur 매개변수

# 개요

Arthur 매개변수는 L 매개변수에 $\mathrm{SL}\_2$ 를 하나 더 붙여 비템퍼드 표현까지 분류하는 매개변수다.

$$
\psi:\ W_F\times\mathrm{SL}\_2(\mathbb C)\times\mathrm{SL}\_2(\mathbb C)\longrightarrow{}^LG
$$

[Vogan 꾸러미](vogan-packets.md)의 L 매개변수 $\varphi:W_F\times\mathrm{SL}\_2(\mathbb C)\to{}^LG$ 는 템퍼드 표현에서 작동하지만 잔여 스펙트럼에 사는 비템퍼드 표현을 놓친다. 첫째 $\mathrm{SL}\_2$ 는 국소 분기 정보(Deligne 의 멱단 부분)를 담고, 둘째 $\mathrm{SL}\_2$ 가 비템퍼드성을 담는다. 둘째가 자명하면 템퍼드로 돌아오고, 자명하지 않으면 그만큼 Satake 매개변수가 유니터리 축에서 밀려난다.

이 매개변수가 정의하는 **Arthur 꾸러미** $\Pi_\psi$ 는 L 꾸러미보다 크고 성질이 미묘하다. 그 대가로 전역 **중복도 공식**을 얻는다. 자기동형 표현이 이산 스펙트럼에 나타나는 횟수가 국소 지표들의 곱 하나로 결정된다.

$$
m(\pi)=\bigl|\lbrace\text{국소 지표의 곱이 }\psi\text{ 의 지표와 맞는 경우}\rbrace\bigr|
$$

[Langlands 강령](langlands-program.md)이 어떤 표현이 존재하는지를 예측한다면 Arthur 의 분류는 몇 개 있는지까지 답한다.

# 직관

## 둘째 $\mathrm{SL}\_2$ 의 역할

Ramanujan 추측은 $\mathrm{GL}\_n$ 의 첨점 표현이 템퍼드라고, 곧 Satake 매개변수의 절댓값이 1 이라고 예측한다. 자기동형 스펙트럼 전체에는 템퍼드가 아닌 것이 있다. $\mathrm{GL}\_2$ 의 자명 표현은 잔여 스펙트럼에 살고 Satake 매개변수가 $\lbrace q^{1/2},q^{-1/2}\rbrace$ 라 절댓값이 1 이 아니다.

이런 표현에 L 매개변수를 붙이면 유니터리가 아닌 상으로 가야 해서 이론이 망가진다. 둘째 $\mathrm{SL}\_2$ 는 이 밀림을 구조 안에서 처리한다. $\mathrm{SL}\_2(\mathbb C)$ 의 $d$ 차원 표현을 통해 들어오면 매개변수가

$$
w\ \longmapsto\ \varphi(w)\otimes\begin{pmatrix}|w|^{1/2}&\cr&|w|^{-1/2}\end{pmatrix}^{\negthinspace\oplus}
$$

꼴로 $q^{\pm(d-1)/2}$ 만큼 벌어지고, 벌어진 양이 비템퍼드성의 크기다.

## 첨점성과 잔여성의 사전

둘째 $\mathrm{SL}\_2$ 가 자명한 매개변수가 템퍼드에 대응하고, 클수록 스펙트럼의 얕은 곳에 있는 표현이 나온다. 극단이 자명 표현으로, 첫째 $\mathrm{SL}\_2$ 가 자명하고 둘째가 전체를 차지한다.

$\mathrm{GL}\_n$ 에서 이 사전은 완전히 알려져 있다. Mœglin–Waldspurger 가 분류한 이산 스펙트럼은 첨점 표현 하나와 정수 $d$ 의 짝으로 매개되는 **Speh 표현**들이고, 둘째 $\mathrm{SL}\_2$ 의 차원이 그 $d$ 다.

## 중복도 공식의 구조

전역 표현 $\pi=\otimes\pi_v$ 에서 각 자리의 $\pi_v$ 는 국소 Arthur 꾸러미의 원소이고 성분군의 지표 $\chi_{\pi_v}$ 를 갖는다. 전역 성분군 $\mathcal S_\psi$ 가 모든 국소 성분군으로 대각 사상을 가지므로 국소 지표들을 곱해 전역 성분군 위의 지표 하나를 얻는다.

$$
\chi_\pi=\prod_v\chi_{\pi_v}\ \in\ \mathrm{Irr}(\mathcal S_\psi)
$$

중복도 공식은 이 곱이 특정 지표 $\epsilon_\psi$ 와 같을 때만 $\pi$ 가 이산 스펙트럼에 나타난다고 말한다. $\epsilon_\psi$ 는 대칭 거듭제곱 $L$ 함수의 부호로 정의되는 명시적 지표다. 유한군의 지표 하나를 계산하면 무한차원 공간에서의 중복도가 나오고, 안정화된 [대각합 공식](fundamental-lemma.md)이 그 증명 도구다.

# 정의

## Arthur 매개변수

$$
\psi:\ W_F\times\mathrm{SL}\_2(\mathbb C)\times\mathrm{SL}\_2(\mathbb C)\to{}^LG
$$

에서 $W_F$ 로의 제한이 유계 상을 갖고 두 $\mathrm{SL}\_2$ 로의 제한이 대수적이어야 한다. 대응하는 L 매개변수는 다음과 같다.

$$
\varphi_\psi(w)=\psi\negthinspace\left(w,\ \begin{pmatrix}|w|^{1/2}&\cr&|w|^{-1/2}\end{pmatrix},\ 1\right)
$$

둘째 인자에 절댓값이 들어가면서 유계성이 깨지고, 그 깨짐이 비템퍼드성이다.

## 성분군과 부호 지표

$S_\psi=\mathrm{Cent}(\psi,\widehat G)$ 에서 $\mathcal S_\psi=\pi_0(S_\psi/Z(\widehat G)^\Gamma)$ 를 만든다. 전역 상황에서 $\epsilon_\psi:\mathcal S_\psi\to\lbrace\pm1\rbrace$ 는 다음 꼴이다.

$$
\epsilon_\psi(s)=\prod_i\varepsilon\negthinspace\left(\tfrac12,\ \pi_i\times\pi_j\right)^{\cdots}
$$

매개변수를 쪼갠 조각들의 Rankin–Selberg $\varepsilon$ 인자로 만든 부호이며, 중심값의 부호가 나타난다는 점에서 [GGP 지표 공식](gan-gross-prasad.md)(Gan–Gross–Prasad)과 같은 자리에 있다.

## 중복도 공식

$G$ 를 고전군, $\psi$ 를 이산 전역 Arthur 매개변수라 하자. $\pi=\otimes\pi_v$ 가 $\Pi_\psi=\otimes\Pi_{\psi_v}$ 의 원소이면

$$
m(\pi)=
\begin{cases}
1,&\chi_\pi=\epsilon_\psi\cr
0,&\text{그 외}
\end{cases}
$$

이다. 이산 스펙트럼은 중복도 1 이고, 어느 원소가 나타나는지는 국소 지표의 곱으로 판정된다.

# 성질

## $\mathrm{GL}\_n$ 의 경우

$\mathrm{GL}\_n$ 에서는 성분군이 언제나 자명하므로 모든 $\pi\in\Pi_\psi$ 가 정확히 한 번 나타난다. 이산 스펙트럼의 분류는 다음과 같다.

$$
n=dm,\qquad
\psi=\sigma\boxtimes[d],\qquad
\sigma\ \text{는 }\mathrm{GL}\_m\text{ 의 첨점 표현}
$$

$d=1$ 이 첨점 표현이고, $d\gt 1$ 이면 잔여 스펙트럼의 Speh 표현이며, $m=1,d=n$ 이면 자명 표현이다. 이 목록이 전부라는 것이 Mœglin–Waldspurger 의 정리다.

## 고전군의 분류

Arthur 는 유사분열 고전군의 이산 스펙트럼을 $\mathrm{GL}\_N$ 의 자기쌍대 첨점 표현으로 매개했다. 매개변수는

$$
\psi=\boxplus_i\ \sigma_i\boxtimes[d_i],
\qquad
\sigma_i\ \text{는 }\mathrm{GL}\_{m_i}\text{ 의 자기쌍대 첨점 표현}
$$

꼴이고, 각 $\sigma_i\boxtimes[d_i]$ 가 $G$ 의 쌍대군이 보존하는 형식과 맞는 부호를 가져야 한다. 조건을 만족하는 조합을 세는 것이 고전군 표현을 세는 일이 된다. 증명은 안정화된 대각합 공식과 $\mathrm{GL}\_N$ 으로의 이전을 쓰고, 기본 보조정리가 그 밑에 깔려 있다.

## Arthur 꾸러미의 성질

L 꾸러미와 달리 Arthur 꾸러미에는 다음 성질이 있다.

- 원소가 기약이 아닐 수 있고, 유니터리가 아닌 표현이 섞일 수 있다.
- 서로 다른 매개변수의 꾸러미가 겹칠 수 있다.
- 꾸러미 안의 표현이 중복도를 갖고 나타날 수 있다.

전역 중복도 공식이 이 언어로만 적히므로 국소적 불편을 감수한다.

## 일반화 Ramanujan 추측과의 관계

$\mathrm{GL}\_n$ 의 첨점 표현이 템퍼드라는 추측은 Arthur 의 언어로 첨점 매개변수의 둘째 $\mathrm{SL}\_2$ 가 자명하다는 진술이다. 고전군에서는 거짓이다. 둘째 $\mathrm{SL}\_2$ 가 자명하지 않은 첨점 표현, 곧 CAP(cuspidal associated to parabolic) 표현이 존재하고 Saito–Kurokawa 올림이 그 예다. Ramanujan 추측은 $\mathrm{GL}\_n$ 의 성질이지 자기동형 형식 일반의 성질이 아니다.

# 활용

## 이산 스펙트럼 계산

주어진 레벨과 무게에서 어떤 자기동형 표현이 몇 개 있는지를, 매개변수 조합을 나열하고 각각에 대해 지표 조건을 확인하는 유한 계산으로 바꾼다. 이 계산이 차원 공식을 표현론으로 설명한다.

## 올림의 예측

Saito–Kurokawa, Ikeda, Miyawaki 올림처럼 한 군의 형식에서 다른 군의 형식을 만드는 구성은 Arthur 매개변수 수준에서 매개변수의 재조립이다. 어떤 올림이 존재할 수 있고 그 상이 무엇인지를 매개변수의 모양으로 예측한다.

## 산술적 응용의 입력

고전군의 자기동형 표현을 [Galois 표현](galois-representations.md)과 잇는 작업(Shimura 다양체의 [코호몰로지](cohomology.md) 분해)은 어떤 표현이 이산 스펙트럼에 있는지를 먼저 알아야 한다. 최근의 모듈러성 올림 정리와 Langlands 상호성의 부분적 결과들이 Arthur 의 분류를 입력으로 쓴다.

# 연관 문서

## 선수지식

- [Vogan L 꾸러미와 순수 내부형식](vogan-packets.md)
- [기본 보조정리와 대각합 공식의 안정화](fundamental-lemma.md)

## 더 알아보기

- [Speh 표현과 잔여 스펙트럼](speh-representations.md)

#number_theory #group_theory #field_theory
