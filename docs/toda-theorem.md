# Toda 정리

# 개요

**Toda 정리(Toda's theorem)** 는 [다항 계층](polynomial-hierarchy.md)의 모든 언어가 해의 수를 세는 #P(sharp P) 함수 하나를 신탁으로 쓰는 결정적 다항시간 기계로 판정된다는 정리다. 다항 계층을 PH(polynomial hierarchy)로 쓰면 $\mathrm{PH}\subseteq\mathrm P^{\char35{}\mathrm P}$ 이다. S. Toda 가 1991 년에 증명했다[^1].

다항 계층은 한정사를 번갈아 쓰는 횟수에 따라 층을 이루는데, 이 정리는 해의 수를 정확히 세는 능력이 층 전체를 포함한다는 것을 보인다. 증명은 [Valiant–Vazirani 정리](valiant-vazirani.md)의 무작위 환원과 해의 수의 홀짝에 대한 대수적 조작을 잇는다.

# 직관

"해가 있는가" 를 묻는 대신 "해의 수가 홀수인가" 를 물어도 크게 잃지 않는다. Valiant–Vazirani 정리는 해가 있는 논리식에 무작위 일차 제약을 더해 해를 하나만 남기므로, 그 확률로는 "해가 있다" 가 "해의 수가 홀수다" 와 같아진다. 홀짝은 두 논리식의 해의 수를 곱하거나 더하는 연산과 잘 맞아서, $\exists$ 와 $\forall$ 가 번갈아 쌓인 식도 층마다 같은 일을 되풀이해 홀짝 질문 하나로 줄인다.

남는 것은 무작위성이다. 무작위 비트마다 홀짝 질문의 답이 있고, 대부분의 비트에서 답이 옳다. 해의 수 $m$ 을 다항식으로 바꾸어 $m$ 이 홀수이면 큰 $2$ 의 거듭제곱을 법으로 $-1$, 짝수이면 $0$ 이 되게 만들면, 모든 무작위 비트에 대한 값의 합이 옳은 답의 개수를 셀 수 있는 꼴로 담는다. 그 합은 #P 함수 하나의 값이다.

# 정의

## 사용하는 부류

- **#P** 는 다항시간 검증기 $V$ 에 대해 $f(x)=\big\lvert\lbrace y:V(x,y)=1\rbrace\big\rvert$ 꼴의 함수 부류다. $y$ 의 길이는 $\lvert x\rvert$ 의 다항식으로 제한한다.
- **⊕P(parity P)** 는 어떤 #P 함수 $f$ 에 대해 $x\in L\iff f(x)$ 가 홀수인 언어 $L$ 의 부류다.
- 부류 $\mathcal C$ 에 대해 $\mathrm{BP}\cdot\mathcal C$ (BP 는 bounded-error probabilistic)는 다항 길이의 무작위 비트열 $r$ 과 $\mathcal C$ 의 언어 $L'$ 이 있어서, 모든 $x$ 에 대해 $\Pr_r\lbrack(x,r)\in L'\iff x\in L\rbrack\ge 2/3$ 인 언어 $L$ 의 부류다.

## 진술

정리. $\mathrm{PH}\subseteq\mathrm{BP}\cdot\oplus\mathrm P\subseteq\mathrm P^{\char35{}\mathrm P}$ 이다.

# 성질

## 첫 단계

정리. $\mathrm{PH}\subseteq\mathrm{BP}\cdot\oplus\mathrm P$ 다.

증명의 요지. $\mathrm{NP}\subseteq\mathrm{BP}\cdot\oplus\mathrm P$ 는 Valiant–Vazirani 정리를 여러 번 독립으로 돌려 해가 하나 남는 시행이 있게 하고, 시행들의 결과를 홀짝 연산으로 묶어 얻는다. 이 포함은 신탁을 붙여도 그대로 성립하므로 $\Sigma_{k+1}^{\mathrm p}=\mathrm{NP}^{\Sigma_k^{\mathrm p}}$ 에 귀납적으로 적용한다. 이때 $\oplus\mathrm P^{\oplus\mathrm P}=\oplus\mathrm P$ 와 $\mathrm{BP}\cdot\mathrm{BP}\cdot\mathcal C=\mathrm{BP}\cdot\mathcal C$ 를 써서 쌓인 연산자를 하나로 합친다.

## 둘째 단계

정리. $\mathrm{BP}\cdot\oplus\mathrm P\subseteq\mathrm P^{\char35{}\mathrm P}$ 다.

증명의 요지. 다항식 $p(m)=3m^4+4m^3$ 을 $j$ 번 합성한 $p_j$ 는 $m$ 이 홀수이면 $p_j(m)\equiv -1$, 짝수이면 $p_j(m)\equiv 0\pmod{2^{2^j}}$ 을 만족한다. $m$ 이 #P 함수의 값이면 $p_j(m)$ 도 #P 함수의 값으로 만들 수 있다. 무작위 비트열 $r$ 마다 이 값을 더한 $\sum_rp_j(m(x,r))$ 는 하나의 #P 함수이고, $2^{2^j}$ 를 무작위 비트열의 수보다 크게 잡으면 이 합을 법으로 줄인 값에서 홀수인 $r$ 의 수가 그대로 읽힌다. 그 수가 전체의 $2/3$ 이상인지로 답을 정한다.

## 귀결

- [영구식](permanent.md)의 계산이 #P-완전이므로, 영구식을 신탁으로 쓰는 다항시간 기계가 PH 전체를 판정한다.
- 증명의 첫 단계에 따라 $\oplus\mathrm P$ 의 언어가 모두 [무작위 복잡도 부류](randomized-complexity-classes.md)의 BPP(bounded-error probabilistic polynomial time)에 들면 PH 가 BPP 에 포함된다.

# 활용

- 세기 문제의 어려움. 어떤 함수의 계산이 #P-완전임을 보이면, 그 함수에 다항시간 알고리즘이 있을 때 $\mathrm{PH}=\mathrm P$ 가 된다. 그래서 #P-완전성은 NP(nondeterministic polynomial time)-완전성보다 강한 어려움의 근거로 쓰인다.

[^1]: S. Toda, "PP is as hard as the polynomial-time hierarchy", SIAM Journal on Computing 20(5) (1991), 865–877.

# 연관 문서

## 선수지식

- [다항 계층](polynomial-hierarchy.md)
- [Valiant–Vazirani 정리](valiant-vazirani.md)
- [셈 복잡도](counting-complexity.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #logic
