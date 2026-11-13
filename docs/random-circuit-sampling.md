# 무작위 회로 표본추출

# 개요

**무작위 회로 표본추출(random circuit sampling)** 은 게이트를 무작위로 골라 만든 양자 회로 하나를 받아, 그 회로를 $\vert 0\cdots 0\rangle$ 에 걸고 측정한 비트열의 분포에서 표본을 뽑는 문제다. 큐비트가 $53$ 개이면 출력 비트열이 $2^{53}$ 가지라서, 장치가 낸 표본 백만 개로는 분포가 맞는지 직접 비교할 수 없다. 이 문제에서는 표본마다 그 비트열의 이상적인 확률을 고전 계산으로 구해 평균을 내고, 그 평균이 균등 분포보다 얼마나 큰지로 장치가 회로를 따랐는지 잰다.

# 직관

큐비트 $2$ 개의 회로가 출력 $00,01,10,11$ 을 확률 $0.5$, $0.3$, $0.15$, $0.05$ 로 낸다고 하자. 이 회로를 제대로 돌린 장치의 표본은 $00$ 에 자주 몰리고, 고장 나서 무작위 비트를 내는 장치의 표본은 네 비트열에 고르게 퍼진다.

표본 비트열 $x$ 마다 이상적인 확률 $p(x)$ 를 적어 평균을 내면, 제대로 된 장치에서는 그 평균이 $\sum\_xp(x)^2=0.365$ 이고 무작위 비트에서는 $1/4=0.25$ 다. 두 값의 차를 균등 분포의 값으로 맞추어 $4\times 0.365-1=0.46$ 과 $4\times 0.25-1=0$ 을 얻는다. 큐비트가 많고 회로가 깊으면 제대로 된 장치의 이 값은 $1$ 에 가까워진다.

# 정의

## 무작위 회로

큐비트 $n$ 개를 격자에 놓고, 층마다 이웃한 쌍에 두 큐비트 게이트를 걸고 각 큐비트에 정해진 집합에서 무작위로 고른 한 큐비트 게이트를 거는 일을 $d$ 층 되풀이한 [양자 회로](quantum-circuits.md)를 무작위 회로라 한다. 회로 $C$ 의 출력 확률은 $p\_C(x)=\vert\langle x\vert C\vert 0^n\rangle\vert^2$ 이다.

## 선형 교차 엔트로피

장치가 낸 표본 $x\_1,\dots,x\_k$ 에 대해

$$
F\_{\mathrm{XEB}}=\frac{2^n}{k}\sum\_{i=1}^{k}p\_C(x\_i)-1
$$

을 **선형 교차 엔트로피 벤치마크(linear cross-entropy benchmark, XEB)** 라 한다[^1]. 직관 절의 두 장치에서 이 값은 $0.46$ 과 $0$ 이다.

# 성질

## Porter–Thomas 분포

회로가 충분히 깊으면 출력 확률 $p\_C(x)$ 들은 $N=2^n$ 으로 다음 지수분포를 따르는 값처럼 퍼진다[^1].

$$
\Pr\lbrack p\_C(x)\in\lbrack p,p+dp\rbrack\rbrack\approx Ne^{-Np}\thinspace dp
$$

이것이 Porter–Thomas 분포(Porter–Thomas distribution)다. 이 분포에서 $\sum\_xp\_C(x)^2\approx 2/N$ 이므로, 이상적인 장치의 $F\_{\mathrm{XEB}}$ 는 $1$ 에 가깝고 균등 분포의 표본은 $0$ 이다. 출력 확률이 대부분 $1/N$ 규모라는 것이 반집중(anti-concentration)이다.

## 계산의 어려움

[후선택 양자 계산](postselected-quantum-computation.md)의 논증으로, 이 회로 족의 모든 회로에서 출력 분포를 각 확률의 작은 상수배 안으로 흉내 내는 고전 다항시간 알고리즘이 있으면 다항 계층이 무너진다. 무작위로 고른 회로에서도 출력 확률 하나를 정확히 계산하는 일은 평균적으로 #P-난해다[^2]. 근사 표본추출의 어려움은 확률을 작은 오차 안으로 어림하는 일이 평균적으로도 어렵다는 추측에 기댄다.

## 고전 흉내

회로를 텐서망으로 적고 축약하면 출력 확률 하나를 큐비트 수가 아니라 회로의 너비와 깊이로 정해지는 비용에 계산한다. 잡음 섞인 장치는 $F\_{\mathrm{XEB}}$ 가 $1$ 보다 훨씬 작으므로, 고전 알고리즘은 같은 작은 값만 맞추면 된다.

# 활용

- 양자 우위 실험. 2019 년 실험은 큐비트 $53$ 개와 깊이 $20$ 의 회로로 $F\_{\mathrm{XEB}}\approx 0.002$ 인 표본 백만 개를 약 $200$ 초에 얻었다[^1]. 이후 텐서망 축약으로 같은 회로의 표본을 고전 컴퓨터로 수 시간 만에 얻었다[^3].
- 장치 검증. 회로를 바꿔 가며 $F\_{\mathrm{XEB}}$ 를 재면 게이트 오류율의 곱으로 장치 전체의 충실도를 어림한다.
- 인증된 무작위 비트. 표본의 $F\_{\mathrm{XEB}}$ 가 문턱을 넘으면 표본에 일정한 양의 무작위성이 있다는 것을 계산적 가정 아래 보이는 규약이 제안되었다.

[^1]: F. Arute et al., Quantum supremacy using a programmable superconducting processor, *Nature* 574 (2019), 505–510.
[^2]: A. Bouland, B. Fefferman, C. Nirkhe, U. Vazirani, On the complexity and verification of quantum random circuit sampling, *Nature Physics* 15 (2019), 159–163.
[^3]: F. Pan, K. Chen, P. Zhang, Solving the sampling problem of the Sycamore quantum circuits, *Physical Review Letters* 129 (2022), 090502.

# 연관 문서

## 선수지식

- [후선택 양자 계산](postselected-quantum-computation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #complexity
