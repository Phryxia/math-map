# 양자 상대 엔트로피

# 개요

**양자 상대 엔트로피(quantum relative entropy)** 는 두 밀도 행렬을 측정으로 얼마나 잘 가를 수 있는지를 수 하나로 잰 것이다. 상자에서 큐비트가 하나씩 나오는데 $\vert +\rangle$ 만 나오는 상자인지, 동전을 던져 $\vert 0\rangle$ 이나 $\vert 1\rangle$ 을 내는 상자인지 가려야 한다고 하자. 계산 기저로 재면 두 상자 모두 $0$ 과 $1$ 이 반반이라 구별되지 않고, $\vert\pm\rangle$ 기저로 재면 구별된다. 양자 상대 엔트로피는 측정 방법을 고르기 전에 두 밀도 행렬만으로 구별 가능성을 계산하고, 사본이 $n$ 개일 때 틀릴 확률이 $2^{-n}$ 의 몇 제곱으로 줄어드는지를 준다.

# 직관

개요의 두 상자는 [밀도 행렬](density-matrix.md) $\rho=\vert +\rangle\langle +\vert$ 와 $\sigma=\tfrac12 I$ 를 낸다. 계산 기저로 재면 두 결과 분포가 $(\tfrac12,\tfrac12)$ 로 같아 [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)가 $0$ 이다. $\vert\pm\rangle$ 기저로 재면 분포가 $(1,0)$ 과 $(\tfrac12,\tfrac12)$ 이고 KL divergence 는 $1\cdot\log\_2\tfrac1{1/2}=1$ 이다. 같은 두 상태라도 측정에 따라 값이 다르다.

$\vert\pm\rangle$ 기저는 $\rho$ 의 고유기저이고, $\sigma=\tfrac12 I$ 도 이 기저에서 대각이다. 두 행렬이 같은 기저에서 대각이면 그 기저의 [고윳값](eigenvalues.md) 분포끼리 KL divergence 를 계산하면 된다. 행렬로 쓰면 $\mathrm{tr}\thinspace\rho(\log\_2\rho-\log\_2\sigma)$ 이고, $\rho$ 의 고윳값이 $1,0$, $\sigma$ 의 고윳값이 $\tfrac12,\tfrac12$ 라 $1\cdot(0-(-1))=1$ 이다. 이 식은 두 행렬이 같은 기저에서 대각이 아니어도 계산된다.

# 정의

## 상대 엔트로피

밀도 행렬 $\rho$, $\sigma$ 에 대해 $\rho$ 의 고유벡터가 펼치는 공간이 $\sigma$ 의 것에 포함되면

$$
D(\rho\Vert\sigma)=\mathrm{tr}\thinspace\rho\log_2\rho-\mathrm{tr}\thinspace\rho\log_2\sigma
$$

로 두고, 아니면 $D(\rho\Vert\sigma)=+\infty$ 로 둔다. 이것을 $\rho$ 의 $\sigma$ 에 대한 **양자 상대 엔트로피** 라 한다[^1]. 직관 절의 두 상태는 $D(\rho\Vert\sigma)=1$ 이다. 거꾸로 $D(\sigma\Vert\rho)=+\infty$ 다. $\sigma$ 는 $\vert -\rangle$ 방향 성분이 있고 $\rho$ 는 없다.

## 양자 상호정보량

두 계의 밀도 행렬 $\rho\_{AB}$ 와 축소 밀도 행렬 $\rho\_A$, $\rho\_B$ 에 대해

$$
I(A:B)=D(\rho_{AB}\Vert\rho_A\otimes\rho_B)=S(A)+S(B)-S(AB)
$$

를 **양자 상호정보량(quantum mutual information)** 이라 한다. $S(A)$ 는 $\rho\_A$ 의 von Neumann 엔트로피다. $\vert\Phi^+\rangle=\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 은 $S(A)=S(B)=1$, $S(AB)=0$ 이라 $I=2$ 이고, $\tfrac12(\vert 00\rangle\langle 00\vert+\vert 11\rangle\langle 11\vert)$ 은 $S(AB)=1$ 이라 $I=1$ 이다.

## 조건부 엔트로피

$S(A\vert B)=S(AB)-S(B)$ 를 **양자 조건부 엔트로피(quantum conditional entropy)** 라 한다. $\vert\Phi^+\rangle$ 에서 $S(A\vert B)=0-1=-1$ 이다. 고전 조건부 엔트로피와 달리 음수가 될 수 있다.

# 성질

## Klein 부등식

$D(\rho\Vert\sigma)\ge 0$ 이고 등호는 $\rho=\sigma$ 일 때만 성립한다(Klein 부등식, Klein's inequality). 따라서 $I(A:B)\ge 0$ 이고 $S(AB)\le S(A)+S(B)$ 다.

## 단조성

[양자 채널](quantum-channels.md) $\Phi$ 에 대해

$$
D\big(\Phi(\rho)\Vert\Phi(\sigma)\big)\le D(\rho\Vert\sigma)
$$

이다(Lindblad–Uhlmann 단조성, Lindblad–Uhlmann monotonicity)[^2]. 측정은 밀도 행렬을 결과의 확률분포로 보내는 채널이므로, 어떤 측정으로 얻은 두 결과 분포의 KL divergence 도 $D(\rho\Vert\sigma)$ 이하다. 직관 절의 계산 기저 측정은 $0\le 1$, $\vert\pm\rangle$ 기저 측정은 $1\le 1$ 이다.

## 강한 부가성

세 계 $A$, $B$, $C$ 의 상태에서

$$
S(ABC)+S(B)\le S(AB)+S(BC)
$$

이다(강한 부가성, strong subadditivity)[^3]. 부분 대각합 $\mathrm{tr}\_C$ 가 채널이므로 단조성에서 $I(A:BC)\ge I(A:B)$ 이고, 이 부등식을 엔트로피로 풀어 쓴 것이 강한 부가성이다.

## 양자 Stein 보조정리

$\rho^{\otimes n}$ 과 $\sigma^{\otimes n}$ 을 가르는 측정에서 $\rho$ 를 $\sigma$ 로 잘못 판정할 확률을 $\varepsilon$ 이하로 묶을 때, $\sigma$ 를 $\rho$ 로 잘못 판정할 확률의 최솟값은 $2^{-nD(\rho\Vert\sigma)+o(n)}$ 이다(양자 Stein 보조정리, quantum Stein's lemma)[^4]. 직관 절의 상태에서는 $\vert\pm\rangle$ 기저로 $n$ 번 재어 모두 $+$ 일 때만 $\rho$ 로 판정하면, $\rho$ 를 틀릴 확률이 $0$ 이고 $\sigma$ 를 틀릴 확률이 $2^{-n}$ 이다.

## 조건부 엔트로피와 얽힘

분리 가능한 상태는 $S(A\vert B)\ge 0$ 이다[^5]. 그래서 $S(A\vert B)\lt 0$ 이면 [양자 얽힘](quantum-entanglement.md)이 있다. $\vert\Phi^+\rangle$ 은 $-1$ 이다. 역은 성립하지 않는다. 등방 상태 $p\vert\Phi^+\rangle\langle\Phi^+\vert+(1-p)\tfrac14 I$ 는 $p\gt\tfrac13$ 이면 얽혀 있지만 $p$ 가 $\tfrac13$ 에 가까우면 $S(A\vert B)\gt 0$ 이다.

# 활용

- Holevo 한계. 앙상블 $\lbrace p\_x,\rho\_x\rbrace$ 의 [Holevo 한계](holevo-bound.md)의 Holevo 정보량은 $\sum_xp\_xD(\rho\_x\Vert\rho)$ 이고, 측정으로 꺼내는 상호정보량이 이것을 넘지 못한다는 증명이 단조성을 쓴다.
- 얽힘 정제. [얽힘 정제](entanglement-distillation.md)의 해싱 부등식 $E\_D\ge S(B)-S(AB)=-S(A\vert B)$ 는 음의 조건부 엔트로피만큼 얽힌 쌍을 뽑을 수 있다는 진술이다.
- 가설검정. 양자 Stein 보조정리는 [가설검정](hypothesis-testing.md)의 Stein 보조정리를 측정 선택까지 포함하도록 넓힌 것이고, 최적 측정은 사본 $n$ 개에 함께 거는 측정이다.
- 열역학. 온도 $T$ 의 Gibbs 상태 $\sigma$ 에 대해 $D(\rho\Vert\sigma)$ 는 자유 에너지 차이를 $k\_BT\ln 2$ 로 나눈 값이고, 단조성은 열평형으로 가는 과정에서 이 값이 늘지 않는다는 진술이다.

[^1]: H. Umegaki, Conditional expectation in an operator algebra. IV. Entropy and information, *Kodai Mathematical Seminar Reports* 14 (1962), 59–85.
[^2]: G. Lindblad, Completely positive maps and entropy inequalities, *Communications in Mathematical Physics* 40 (1975), 147–151.
[^3]: E. H. Lieb, M. B. Ruskai, Proof of the strong subadditivity of quantum-mechanical entropy, *Journal of Mathematical Physics* 14 (1973), 1938–1941.
[^4]: F. Hiai, D. Petz, The proper formula for relative entropy and its asymptotics in quantum probability, *Communications in Mathematical Physics* 143 (1991), 99–114. 역방향은 T. Ogawa, H. Nagaoka, Strong converse and Stein's lemma in quantum hypothesis testing, *IEEE Transactions on Information Theory* 46 (2000), 2428–2433.
[^5]: M. A. Nielsen, J. Kempe, Separable states are more disordered globally than locally, *Physical Review Letters* 86 (2001), 5184–5187.

# 연관 문서

## 선수지식

- [밀도 행렬](density-matrix.md)
- [KL divergence](kl-divergence.md)

## 더 알아보기

- [양자 Chernoff 한계](quantum-chernoff-bound.md)

#information_theory #computation #linear_algebra
