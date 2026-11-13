# 근사 세기

# 개요

**근사 세기(approximate counting)** 는 문제의 해가 몇 개인지를 정확히 세는 대신 상수배나 $1\pm\varepsilon$ 배 안의 값으로 어림하는 계산이다. 논리식 하나가 주어지고, 참이 되는 할당이 있는지만 답하는 상자를 쓸 수 있다고 하자. 상자는 할당이 $3$ 개인 논리식과 $300$ 개인 논리식에 똑같이 "있다" 고 답하므로 그대로는 개수를 알 수 없다. 근사 세기는 논리식에 무작위 제약을 하나씩 더해 할당을 절반씩 솎아 내고, 할당이 몇 번째 제약에서 사라지는지를 보아 개수의 자릿수를 읽는다.

# 직관

변수 $10$ 개의 논리식 $\varphi$ 에 참이 되는 할당이 $300$ 개 있다고 하자. 할당 하나마다 동전을 던져 앞면인 것만 남기면 평균 $150$ 개가 남는다. 이것을 $k$ 번 되풀이하면 평균 $300/2^k$ 개가 남는다.

| k | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- |
| 남는 할당의 평균 | $4.7$ | $2.3$ | $1.2$ | $0.59$ | $0.29$ |

평균이 $8$ 이상이면 할당이 거의 언제나 남고, $1/8$ 이하면 거의 언제나 하나도 남지 않는다. 그래서 할당이 남는 가장 큰 $k$ 를 찾으면 $2^k$ 가 $300$ 의 상수배 안에 든다. 남는 할당이 있는지는 참이 되는 할당이 있는지를 묻는 상자 하나로 답한다.

남은 문제는 동전 던지기를 논리식으로 적는 것이다. 동전 대신 [Valiant–Vazirani 정리](valiant-vazirani.md)의 일차식 제약 $Ax+b=0$ 을 쓴다. $A$ 의 행이 $k$ 개이면 할당 하나가 제약을 만족할 확률이 $2^{-k}$ 이고, 이 제약을 $\varphi$ 에 붙인 논리식의 참인 할당이 동전 $k$ 번을 이긴 할당이다.

# 정의

## 근사

음 아닌 정수 값 함수 $f$ 와 $\varepsilon\gt 0$ 에 대해 $(1-\varepsilon)f(x)\le g(x)\le(1+\varepsilon)f(x)$ 인 $g(x)$ 를 $f(x)$ 의 $1\pm\varepsilon$ **근사(approximation)** 라 한다. $f(x)/c\le g(x)\le cf(x)$ 이면 $c$ 배 근사라 한다. 직관 절의 $2^k$ 는 $300$ 의 상수배 근사다.

## 무작위 근사 계획

입력 $x$ 와 $\varepsilon$ 을 받아 확률 $3/4$ 이상으로 $f(x)$ 의 $1\pm\varepsilon$ 근사를 내고, 실행 시간이 $\vert x\vert$ 와 $1/\varepsilon$ 의 다항식인 무작위 알고리즘을 $f$ 의 **완전 다항시간 무작위 근사 계획(fully polynomial randomized approximation scheme, FPRAS)** 이라 한다. 같은 알고리즘을 여러 번 돌려 중앙값을 내면 실패 확률이 지수적으로 줄어든다.

[셈 복잡도](counting-complexity.md)의 예로, 성분이 음 아닌 행렬의 [영구식](permanent.md)과 DNF(disjunctive normal form) 논리식의 참인 할당의 수는 FPRAS 가 있다. 정확한 값은 둘 다 #P-완전이다.

## 신탁을 쓰는 근사

[다항 계층](polynomial-hierarchy.md)의 표기로 $\mathrm{BPP}^{\mathrm{NP}}$ 는 NP(nondeterministic polynomial time) 신탁을 쓰는 무작위 다항시간 기계가 판정하는 부류다. BPP 는 bounded-error probabilistic polynomial time 이다. 직관 절의 절차는 이 기계로 할당의 수를 상수배 근사한다. 상자가 NP 신탁이고, 동전이 기계의 무작위 비트다.

# 성질

## 상수배 근사

$\varphi$ 의 참인 할당 집합을 $S$, $\vert S\vert=s$ 라 하고, $h(x)=Ax+b$ 를 $\lbrace 0,1\rbrace^n$ 에서 $\lbrace 0,1\rbrace^k$ 로 가는 쌍마다 독립인 [범용 해시족](universal-hashing.md)에서 고른다. 남는 할당의 수 $X=\vert\lbrace x\in S: h(x)=0\rbrace\vert$ 의 평균을 $\mu=s/2^k$ 라 한다.

Markov 부등식(Markov inequality)으로 $\Pr\lbrack X\ge 1\rbrack\le\mu$ 이다. 쌍마다 독립이므로 $X$ 의 분산은 $\mu$ 이하이고, Chebyshev 부등식(Chebyshev inequality)으로 다음이 나온다.

$$
\Pr\lbrack X=0\rbrack\le\frac{\mathrm{Var}\thinspace X}{\mu^2}\le\frac1\mu
$$

그래서 $\mu\ge 8$ 이면 할당이 남지 않을 확률이, $\mu\le 1/8$ 이면 할당이 남을 확률이 $1/8$ 이하다. 각 $k$ 에서 신탁 질문을 여러 번 되풀이해 다수결을 내고, 다수결이 "남는다" 인 가장 큰 $k$ 를 $k^\ast$ 라 하면 높은 확률로 $2^{k^\ast}/8\le s\le 16\cdot 2^{k^\ast}$ 이다.

## Stockmeyer 정리

모든 #P 함수 $f$ 와 다항식 $p$ 에 대해, $\mathrm{BPP}^{\mathrm{NP}}$ 의 기계가 $\varepsilon=1/p(\vert x\vert)$ 로 $f(x)$ 의 $1\pm\varepsilon$ 근사를 낸다[^1]. 이것이 Stockmeyer 정리(Stockmeyer's theorem)다. 결정적 기계로는 다항 계층의 둘째 층 $\Sigma\_2^{\mathrm p}$ 를 신탁으로 쓰면 된다[^1].

증명의 요지. 상수배 근사를 $1\pm\varepsilon$ 근사로 바꾼다. $\varphi$ 의 변수를 $t$ 벌 따로 복사해 $\varphi$ 의 사본 $t$ 개를 논리곱으로 이은 식의 참인 할당은 $s^t$ 개다. 이 수의 $c$ 배 근사 $g$ 를 얻으면 $g^{1/t}$ 는 $s$ 의 $c^{1/t}$ 배 근사이고, $t$ 를 $1/\varepsilon$ 에 비례하게 잡으면 $c^{1/t}\le 1+\varepsilon$ 이다.

## 근사 세기와 균등 표본추출

해를 하나씩 정해 가며 남은 문제로 줄일 수 있는 문제(자기 환원 가능(self-reducible))에서는, 해의 수의 근사와 해의 거의 균등한 표본추출이 다항시간에 서로 바뀐다[^2]. 이것이 Jerrum–Valiant–Vazirani 정리(Jerrum–Valiant–Vazirani theorem)다. 첫 변수가 $0$ 인 해와 $1$ 인 해의 수를 어림해 그 비율로 첫 변수를 뽑고, 남은 식에서 되풀이하면 표본추출기가 된다. 반대로 표본추출기로 첫 변수가 $0$ 인 해의 비율을 어림하고 남은 식의 해의 수와 곱하면 근사 세기가 된다.

## 근사의 한계

참인 할당이 있는지를 판정하는 것은 그 수가 $0$ 인지를 가리는 것이다. 그래서 참인 할당의 수를 세는 #SAT(sharp satisfiability)를 어느 배수로든 근사하는 결정적 다항시간 알고리즘이 있으면 $\mathrm P=\mathrm{NP}$ 이고, FPRAS 가 있으면 $\mathrm{NP}\subseteq\mathrm{BPP}$ 다. FPRAS 가 알려진 #P-완전 문제인 음 아닌 행렬의 영구식과 DNF 논리식의 할당 수는 둘 다 해가 있는지의 판정이 다항시간에 된다.

# 활용

- 표본추출기의 출력 확률. 다항시간 무작위 알고리즘이 출력 $z$ 를 낼 확률은 $z$ 를 내는 무작위 비트열의 수를 $2^{\text{비트 수}}$ 로 나눈 값이고, 그 수는 #P 함수다. 그래서 고전 표본추출기의 출력 확률은 $\mathrm{BPP}^{\mathrm{NP}}$ 에서 근사된다. [보손 표본추출](boson-sampling.md)의 Aaronson–Arkhipov 정리가 이것을 쓴다.
- 해시 기반 모형 세기. 충족가능성(satisfiability, SAT) 풀이기를 신탁 대신 쓰고, 일차식 제약을 배타적 논리합(exclusive or, XOR) 절로 논리식에 더해 참인 할당의 수를 어림하는 실용 도구들이 직관 절의 절차를 따른다[^3].
- Markov 연쇄 표집. Jerrum–Valiant–Vazirani 정리로 근사 세기를 표본추출로 바꾸고, 표본추출은 빨리 섞이는 [Markov 연쇄](markov-chains.md)로 한다. 음 아닌 행렬의 영구식의 FPRAS 가 이 길로 얻어졌다[^4].

[^1]: L. J. Stockmeyer, The complexity of approximate counting, *Proceedings of the 15th Annual ACM Symposium on Theory of Computing* (1983), 118–126.
[^2]: M. R. Jerrum, L. G. Valiant, V. V. Vazirani, Random generation of combinatorial structures from a uniform distribution, *Theoretical Computer Science* 43 (1986), 169–188.
[^3]: S. Chakraborty, K. S. Meel, M. Y. Vardi, A scalable approximate model counter, *Principles and Practice of Constraint Programming*, Lecture Notes in Computer Science 8124 (2013), 200–216.
[^4]: M. Jerrum, A. Sinclair, E. Vigoda, A polynomial-time approximation algorithm for the permanent of a matrix with nonnegative entries, *Journal of the ACM* 51 (2004), 671–697.

# 연관 문서

## 선수지식

- [셈 복잡도](counting-complexity.md)
- [Valiant–Vazirani 정리](valiant-vazirani.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #probability
