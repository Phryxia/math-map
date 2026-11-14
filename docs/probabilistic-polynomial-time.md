# PP

# 개요

**PP(probabilistic polynomial time)** 는 다항시간 무작위 알고리즘이 정답을 $1/2$ 보다 조금이라도 큰 확률로 내면 풀린다고 보는 문제의 부류다. 논리식 $x\_1\vee x\_2$ 는 할당 넷 가운데 셋에서 참이고 $x\_1\wedge x\_2$ 는 하나에서만 참인데, 할당의 과반에서 참인지 묻는 문제는 할당 하나를 무작위로 골라 확인하는 것으로 답이 맞을 확률이 $1/2$ 을 넘는다. 그 차이가 $2^{-n}$ 처럼 작을 수 있어서 이 부류는 실제로 빠르게 푸는 문제의 부류가 아니고, 해의 수를 세는 일의 어려움을 판정 문제로 옮겨 적는 데 쓴다.

# 직관

변수 $n$ 개의 논리식 $\varphi$ 에서 참인 할당의 수를 $s$ 라 하고, $s\gt 2^{n-1}$ 인지 묻는다. 할당 $x$ 를 균등하게 골라 $\varphi(x)$ 가 참이면 받아들이는 알고리즘은 확률 $s/2^n$ 으로 받아들인다. 그래서 답이 예이면 받아들일 확률이 $1/2$ 보다 크고, 아니오이면 $1/2$ 이하다.

[무작위 복잡도 부류](randomized-complexity-classes.md)의 BPP(bounded-error probabilistic polynomial time)는 이 확률이 $2/3$ 이상과 $1/3$ 이하로 떨어져 있기를 요구한다. 그러면 알고리즘을 여러 번 돌려 다수결을 내면 오류가 빠르게 줄어든다. 위 알고리즘은 $s=2^{n-1}+1$ 일 때 받아들일 확률이 $1/2+2^{-n}$ 이어서, 다수결로 가려내려면 $4^n$ 번 규모로 돌려야 한다.

# 정의

## PP

언어 $L$ 이 **PP** 에 속한다는 것은 다항시간 무작위 알고리즘 $M$ 이 있어서 모든 $x$ 에 대해 다음이 성립하는 것이다[^1].

$$
x\in L\iff\Pr\lbrack M(x)\text{ 가 받아들인다}\rbrack\gt\frac12
$$

직관 절의 알고리즘이 과반 충족 문제를 PP 에 넣는다.

## 과반 충족 문제

논리식 $\varphi$ 를 받아 참인 할당이 전체의 절반보다 많은지 묻는 문제를 **과반 충족 문제(majority satisfiability, MAJSAT)** 라 한다. $x\_1\vee x\_2$ 는 예이고 $x\_1\wedge x\_2$ 는 아니오다. 과반 충족 문제는 다항시간 환원에 대해 PP-완전이다[^1].

## 차이 함수

비결정적 다항시간 기계의 받아들이는 갈래의 수에서 거부하는 갈래의 수를 뺀 함수를 그 기계의 **차이 함수(gap function)** 라 하고, 이런 함수의 부류를 GapP 라 한다. [셈 복잡도](counting-complexity.md)의 #P 함수 둘의 차가 GapP 함수다. $L\in\mathrm{PP}$ 인 것은 $x\in L\iff g(x)\gt 0$ 인 GapP 함수 $g$ 가 있는 것과 동치다.

# 성질

## NP 의 포함

$\mathrm{NP}\subseteq\mathrm{PP}$ 다. NP(nondeterministic polynomial time) 의 논리식 $\varphi$ 에 대해, 할당 $x$ 를 균등하게 골라 $\varphi(x)$ 가 참이면 받아들이고, 거짓이면 확률 $\tfrac12-2^{-n-1}$ 로 받아들인다.

$\varphi$ 가 충족 불가능하면 받아들일 확률이 $\tfrac12-2^{-n-1}$ 이다. 참인 할당이 하나라도 있으면 받아들일 확률이 $\tfrac12+2^{-2n-1}$ 이상이다.

## 닫힘 성질

PP 는 여집합에 닫혀 있다[^1]. 받아들일 확률이 정확히 $1/2$ 인 입력이 없도록 확률을 조금 옮긴 뒤 받아들임과 거부를 맞바꾼다.

PP 는 교집합과 합집합에도 닫혀 있다. 이것이 [Beigel–Reingold–Spielman 정리](beigel-reingold-spielman-theorem.md)이고, R. Beigel, N. Reingold, D. Spielman 이 두 차이 함수의 부호를 유리함수 근사로 하나의 차이 함수의 부호로 합쳐 증명했다[^2]. [후선택 양자 계산](postselected-quantum-computation.md)의 Aaronson 정리 $\mathrm{PostBQP}=\mathrm{PP}$ 를 쓰면 두 후선택 회로를 나란히 돌리는 것으로 같은 결론이 나온다.

## 셈 신탁과의 관계

$\mathrm P^{\mathrm{PP}}=\mathrm P^{\char35{}\mathrm P}$ 다. #P 함수 $f(x)$ 의 값은 "$f(x)\ge k$ 인가" 라는 PP 질문을 $k$ 에 대해 이분 탐색하면 다항 번의 질문으로 정해진다. 반대로 PP 질문은 #P 함수의 값 하나를 보면 답이 나온다.

[Toda 정리](toda-theorem.md)에 따라 [다항 계층](polynomial-hierarchy.md) 전체가 $\mathrm P^{\mathrm{PP}}$ 에 든다. 또 받아들이는 갈래를 하나씩 세면 다항 공간으로 충분하므로 PP 는 [공간 복잡도](space-complexity.md)의 PSPACE(polynomial space)에 든다.

# 활용

- 양자 계산의 위치. 후선택을 허락한 양자 회로의 부류가 PP 와 같고, BQP(bounded-error quantum polynomial time) 는 PP 에 든다[^3]. 양자 회로 표본추출의 고전적 어려움을 보이는 논증이 이 관계를 쓴다.
- 다항 계층의 붕괴 논증. PP 가 다항 계층의 $k$ 번째 층 $\Sigma\_k^{\mathrm p}$ 에 들면 Toda 정리로 다항 계층 전체가 $\mathrm P^{\Sigma\_k^{\mathrm p}}$ 에 들어 무너진다. [보손 표본추출](boson-sampling.md)과 [IQP 회로](iqp-circuits.md)의 고전적 어려움의 증명이 이 단계를 쓴다.

[^1]: J. Gill, Computational complexity of probabilistic Turing machines, *SIAM Journal on Computing* 6 (1977), 675–695.
[^2]: R. Beigel, N. Reingold, D. Spielman, PP is closed under intersection, *Journal of Computer and System Sciences* 50 (1995), 191–202.
[^3]: L. M. Adleman, J. DeMarrais, M.-D. A. Huang, Quantum computability, *SIAM Journal on Computing* 26 (1997), 1524–1540.

# 연관 문서

## 선수지식

- [셈 복잡도](counting-complexity.md)
- [무작위 복잡도 부류](randomized-complexity-classes.md)

## 더 알아보기

- [Beigel–Reingold–Spielman 정리](beigel-reingold-spielman-theorem.md)
- [후선택 양자 계산](postselected-quantum-computation.md)

#complexity #computation #probability
