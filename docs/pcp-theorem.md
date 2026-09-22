# PCP 정리와 근사 불가능성

# 개요

[근사 알고리즘](approximation-algorithms.md)은 NP-어려운 문제에 대해 보장된 비율의 답을 낸다. 어떤 문제는 임의로 좋은 근사가 가능하고(FPTAS, fully polynomial-time approximation scheme) 어떤 문제는 어느 비율에서 멈춘다. 알고리즘 설계만으로는 그 경계를 알 수 없다.

1992 년에 완성된 **PCP 정리**(probabilistically checkable proof)가 경계를 준다.

$$
\mathsf{NP}=\mathsf{PCP}(\log n,\ O(1))
$$

NP 문제의 증명은 무작위 $O(\log n)$ 비트를 써서 상수 개 비트만 읽고 검증할 수 있는 형태로 다시 쓸 수 있다. 옳은 주장에는 검증자가 반드시 통과시키는 증명이 있고, 틀린 주장에는 어떤 증명을 내밀어도 검증자가 최소 절반의 확률로 잡아낸다.

검증자를 제약충족 문제로 번역하면 옳은 입력에서는 모든 제약을 만족할 수 있고 틀린 입력에서는 어떤 할당도 절반 이상을 만족시키지 못한다. 두 경우 사이의 **간극**을 좁히는 근사 알고리즘이 있으면 원래 NP 문제가 정확히 풀린다. 따라서 $\mathsf{P}=\mathsf{NP}$ 가 아니면 그런 근사 알고리즘은 없다.

$$
\text{검증자의 무작위성}\ \longrightarrow\ \text{간극 있는 제약충족}\ \longrightarrow\ \text{근사 하한}
$$

사슬의 끝에서 MAX-3SAT 의 $7/8$ 이 최적임이 나온다. 상한은 무작위 할당에서, 하한은 PCP 정리의 가장 정교한 판본에서 나온다.

# 직관

## 오류정정부호로 쓴 증명

보통의 NP 증명은 한 글자만 틀려도 무효이고 그 한 글자를 찾으려면 전체를 읽어야 한다. PCP 는 증명을 오류정정부호로 다시 쓴다. 두 부호어는 대부분의 자리에서 다르므로 증명이 조금이라도 틀리면 부호화된 증명은 아주 많은 자리에서 틀리고, 무작위 몇 자리만 찍어도 드러난다.

구성에 쓰이는 부호는 Hadamard 부호와 저차 다항식 부호다. 검사는 세 자리가 선형성을 만족하는지 같은 국소 질문이고, 국소 검사를 통과하는 함수가 전역적으로 부호어에 가깝다는 선형성 검사와 저차 검사 정리가 정확성을 준다.

## 간극과 근사 하한

PCP 검증자를 제약충족 문제로 번역한다. 검증자가 쓰는 무작위 문자열 $r$ 하나마다 제약 하나를 만든다. 그 제약은 "검증자가 $r$ 을 뽑았을 때 읽는 상수 개 비트가 검증자를 통과시키는 값이어야 한다" 는 조건이다. 무작위 비트가 $O(\log n)$ 개이므로 제약은 다항식 개다.

완전성에서, $x$ 가 언어에 속하면 모든 제약을 만족하는 할당이 있다. 건전성에서, 속하지 않으면 어떤 할당도 제약의 절반 이하만 만족한다. 만족 비율에 $1$ 대 $1/2$ 의 간극이 생긴다.

$1/2$ 보다 좋은 비율을 보장하는 다항시간 근사 알고리즘이 있으면 두 경우가 구별되어 원래 언어가 다항시간에 판정된다. $\mathsf P\ne\mathsf{NP}$ 아래에서 그런 근사 알고리즘은 없다.

NP-어려운 것은 간극 있는 문제이고 원래 문제가 아니다. 간극이 없으면 근사 알고리즘이 두 경우를 구별하지 못해도 모순이 없다. PCP 정리의 내용은 간극을 만들 수 있다는 것이다.

## MAX-3SAT 의 $7/8$

MAX-3SAT 에서 각 절은 리터럴 세 개의 논리합이다. 변수에 값을 동전 던지기로 주면 한 절이 만족되지 않을 확률은 세 리터럴이 모두 거짓일 확률 $1/8$ 이다. 따라서 기대 만족 절 수가 $\frac78 m$ 이고, 기댓값을 달성하는 할당이 반드시 존재한다. 알고리즘은 무작위조차 필요 없다. 조건부 기댓값을 따라가며 변수를 하나씩 고정하면 결정적으로 $\frac78 m$ 을 달성한다.

Håstad 의 정리[^3]는 이 $7/8$ 을 개선할 수 없다고 말한다. 임의의 $\varepsilon\gt 0$ 에 대해 $\frac78+\varepsilon$ 비율을 보장하는 다항시간 알고리즘은 $\mathsf{P}=\mathsf{NP}$ 를 함의한다.

원인은 3 비트 검증자의 구조에 있다. 세 비트를 읽는 검사 가운데 세 비트의 배타적 논리합이 주어진 값과 같은지 묻는 형태가 가장 강하고, 이 검사로 만든 제약충족 문제 MAX-3LIN 에서 $1/2+\varepsilon$ 이 이미 어렵다. 3SAT 절로 번역하면 $1/2$ 가 $7/8$ 로 옮겨진다.

# 정의

## 확률 검증 가능 증명

검증자 $V$ 는 입력 $x$ 와 무작위 문자열 $r$ 과 증명 $\pi$ 에 대한 신탁 접근을 갖는 다항시간 알고리즘이다. $V$ 가 언어 $L$ 에 대해 $\mathsf{PCP}(R(n),Q(n))$ 검증자라는 것은 다음을 뜻한다.

- **자원**: $|r|=O(R(n))$ 이고 $V$ 는 $\pi$ 의 비트를 많아야 $O(Q(n))$ 개 읽는다.
- **완전성**: $x\in L$ 이면 어떤 $\pi$ 가 있어 $\Pr_r[V^{\pi}(x,r)=1]=1$ 이다.
- **건전성**: $x\notin L$ 이면 모든 $\pi$ 에 대해 $\Pr_r[V^{\pi}(x,r)=1]\le\frac12$ 이다.

읽는 위치는 이전에 읽은 값에 의존해도 되고, 비적응적으로 바꿔도 질의 수가 상수배만 늘어난다.

## PCP 정리

$$
\mathsf{NP}=\mathsf{PCP}(\log n,\ 1)
$$

포함 $\supseteq$ 는 쉽다. 무작위 문자열이 $O(\log n)$ 비트뿐이라 가능한 $r$ 이 다항식 개이고 전부 돌리면 결정적 다항시간 검증이 된다. 정리의 내용은 반대 방향 $\subseteq$ 다.

원래 증명(Arora–Safra, Arora–Lund–Motwani–Sudan–Szegedy)[^1]은 대수적이다. 산술화로 3SAT 을 다항식 항등식 검사로 바꾸고, 저차 검사와 합 검사를 조합한 뒤 질의 수를 줄이는 합성 정리를 반복한다. 2007 년 Dinur 의 조합적 증명은 제약 그래프의 간극을 한 번에 두 배씩 키우는 연산을 $O(\log n)$ 번 반복해 상수 간극에 도달한다.

## 간극 문제

$\mathsf{Gap}\text{-}\mathrm{CSP}[c,s]$ 는 다음 약속 문제다. 주어진 제약충족 인스턴스에 대해

- 만족 가능 비율이 $\ge c$ 인 경우와
- 만족 가능 비율이 $\le s$ 인 경우를

구별하라. 그 사이 값은 입력으로 주어지지 않는다고 약속한다. PCP 정리는 $\mathsf{Gap}\text{-}\mathrm{CSP}[1,\frac12]$ 가 NP-어렵다는 진술과 동치다.

비율 $s/c$ 보다 좋은 근사 알고리즘이 있으면 두 경우를 구별할 수 있으므로, 간극 문제의 NP-어려움이 근사 비율 $s/c$ 의 하한이 된다.

## Håstad 의 3 비트 검증자

Håstad 는 완전성을 $1$ 에서 $1-\varepsilon$ 로 조금 양보하는 대신 건전성을 $\frac12+\varepsilon$ 까지 밀어 내리는 3 질의 검증자를 만들었다. 검사 형태는 배타적 논리합이다.

$$
\pi[i]\oplus\pi[j]\oplus\pi[k]=b
$$

MAX-3LIN(법 $2$ 선형방정식 최대 만족)에서 $\frac12+\varepsilon$ 근사가 NP-어렵고 무작위 할당이 $\frac12$ 를 주므로 이 비율이 최적이다. MAX-3SAT 로 환원하면 $\frac78+\varepsilon$ 의 어려움이 나온다.

## 유일게임 추측

PCP 정리만으로 최적 상수가 나오지 않는 문제가 많다. MAX-CUT 은 [반정부호 계획법](semidefinite-programming.md)의 Goemans–Williamson 알고리즘이 $\alpha_{GW}\approx0.878$ 을 주는데, PCP 만으로는 $16/17\approx0.941$ 아래로 하한을 내리지 못한다.

Khot 의 **유일게임 추측**은 한 변수의 값이 다른 변수의 값을 유일하게 정하는 2 변수 제약으로 된 간극 문제가 임의의 $\varepsilon,\delta$ 에 대해 $\mathsf{Gap}[1-\varepsilon,\delta]$ 수준에서 NP-어렵다고 주장한다. 이 추측 아래에서 Goemans–Williamson 의 $0.878$ 이 최적이 되고, 넓은 종류의 제약충족 문제에서 기본 SDP(semidefinite programming) 완화가 최적 근사 알고리즘이 된다.

이 추측의 절반에 해당하는 **2-to-2 게임 정리**는 Khot, Minzer, Safra 가 증명했다[^4].

# 성질

## 근사 가능성의 지형

PCP 정리 이후 NP-어려운 최적화 문제들이 근사 가능성에 따라 계층으로 갈라졌다.

| 부류 | 뜻 | 예 |
|---|---|---|
| FPTAS | 임의의 $1+\varepsilon$ 에 대해 시간이 $1/\varepsilon$ 에 다항 | 배낭 문제 |
| PTAS(polynomial-time approximation scheme) | 임의의 $1+\varepsilon$ 에 대해 시간이 $1/\varepsilon$ 에 지수여도 됨 | 유클리드 TSP(traveling salesman problem) |
| APX(approximable) | 어떤 상수 비율은 되지만 PTAS 는 없음 | MAX-3SAT, 정점 덮개 |
| 상수 불가 | 상수 비율 근사조차 NP-어려움 | 일반 TSP, 최대 클릭 |

경계는 PCP 정리로 그어진다. 최대 클릭은 $n^{1-\varepsilon}$ 보다 좋은 근사가 NP-어렵고, 집합 덮개는 $(1-\varepsilon)\ln n$ 이 하한이며 탐욕 알고리즘의 $\ln n$ 이 정확히 최적이다.

## 하한 증명의 도구

무조건적 알고리즘 하한은 제한된 계산 모형에서만 알려져 있고, 일반적인 다항시간 알고리즘에 대해서는 $\mathsf{P}\ne\mathsf{NP}$ 같은 가정 아래에서만 말할 수 있다. PCP 정리는 그 가정을 근사 문제로 옮긴다. 알려진 근사 하한은 대부분 이 번역을 거친다.

## 간극 증폭과 expander

Dinur 증명[^2]의 핵심 연산은 제약 그래프 $G$ 를 $t$ 거듭제곱해 길이 $t$ 경로를 제약 하나로 묶는 것이다. 그래프의 연결성이 나쁘면 간극이 증폭되지 않으므로 먼저 그래프를 **expander** 로 만들어 무작위 걷기가 빠르게 섞이게 한 뒤 거듭제곱한다. 알파벳이 커지므로 합성으로 다시 줄인다. 세 연산을 한 라운드로 묶어 $O(\log n)$ 번 돌리면 간극이 상수가 된다.

이 증명에는 다항식이 등장하지 않고 expander 의 스펙트럼 간극이 그 자리를 대신한다.

# 활용

## 조건부 기댓값 방법

조건부 기댓값 방법은 무작위성 없이 $\frac78 m$ 을 달성한다. 변수를 하나씩 고정할 때마다 남은 변수를 동전으로 채웠을 때의 기대 만족 절 수를 두 선택에 대해 계산하고 큰 쪽을 택한다. 매 단계에서 값이 줄지 않으므로 처음 기댓값 $\frac78 m$ 이상이 보장된다.

## 근사 하한, 부호 이론, 위임 계산

- **근사 하한**: 새 최적화 문제의 근사 한계는 알려진 간극 문제에서 간극을 보존하는 환원으로 증명한다.
- **최적 비율의 결정**: 상한과 하한이 만나면 근사 가능성이 완전히 결정된다. MAX-3SAT 의 $7/8$ , 집합 덮개의 $\ln n$ , MAX-3LIN 의 $1/2$ 가 그런 예다.
- **부호 이론**: 국소 검사 가능 부호(locally testable code, LTC)와 국소 복호 가능 부호(locally decodable code, LDC)가 PCP 구성에서 나왔고 상수 비율 LTC 구성으로 이어졌다.
- **위임 계산**: 짧은 증명을 조금만 읽고 검증하는 구조가 SNARK(succinct non-interactive argument of knowledge) 류 증명 시스템의 기본 구조다.

[^1]: S. Arora, S. Safra, *Probabilistic checking of proofs*, JACM 45 (1998), 그리고 S. Arora, C. Lund, R. Motwani, M. Sudan, M. Szegedy, *Proof verification and the hardness of approximation problems*, JACM 45 (1998). 원 증명.
[^2]: I. Dinur, *The PCP theorem by gap amplification*, JACM 54 (2007). 간극 증폭에 의한 조합적 증명.
[^3]: J. Håstad, *Some optimal inapproximability results*, JACM 48 (2001). 3 비트 검증자와 $7/8$ 최적성.
[^4]: S. Khot, D. Minzer, M. Safra, *Pseudorandom sets in Grassmann graph have near-perfect expansion*, Annals of Mathematics **198** (2023), 1–92. 유일게임 추측의 2-to-2 판본을 증명한다.

# 연관 문서

## 선수지식

- [근사 알고리즘](approximation-algorithms.md)
- [Expander 그래프](expander-graphs.md)

## 더 알아보기

- [유일게임 추측과 2-to-2 정리](unique-games.md)

#complexity #algorithms #theorem
