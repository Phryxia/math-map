# 산술적 계층

# 개요

결정 불가능한 문제라도 난이도가 같지 않다. 정지 문제는 답이 "예" 일 때 증거를 제시할 수 있지만, 기계가 모든 입력에서 멈추는지 묻는 문제는 답이 "예" 여도 제시할 증거가 없다.

**산술적 계층**은 자연수 집합을 정의하는 산술 논리식의 한정기호 교대 횟수로 집합을 분류한다. $n$ 번째 층은 [Turing 도약](turing-degrees.md)을 $n$ 번 반복한 차수에 대응한다.

# 직관

정지 문제는 결정할 수 없다. 그래도 기계 $e$ 가 입력 $0$ 에서 멈추는 경우라면 그 사실을 확인할 방법이 있다. 기계를 돌려 보면 언젠가 멈추고, 멈춘 단계 수를 제시하면 누구나 검산한다.

기계가 모든 입력에서 멈추는지 묻는 문제는 다르다. 답이 "예" 여도 제시할 것이 없다. 입력 $0$, $1$, $2$ 를 차례로 확인해 나갈 수는 있지만 이 확인은 끝나지 않는다. 입력마다 멈춘 단계 수를 따로 찾아야 하고 입력이 무한히 많다.

두 물음을 문장으로 풀어 쓰면 차이가 어디 있는지 보인다. 앞의 것은 "어떤 $s$ 가 있어서 기계 $e$ 가 $s$ 단계 안에 멈춘다" 이고, 뒤의 것은 "모든 $n$ 에 대해 어떤 $s$ 가 있어서 기계 $e$ 가 입력 $n$ 에서 $s$ 단계 안에 멈춘다" 이다. 따옴표 안쪽의 "$s$ 단계 안에 멈춘다" 는 둘 다 유한 번 계산으로 판정된다. 다른 것은 그 앞에 붙은 "어떤" 과 "모든" 의 배열뿐이다.

"어떤" 과 "모든" 이 몇 번 번갈아 나오는지를 세면 층이 매겨진다.

# 정의

## 논리식의 층

한정기호가 $\forall i\lt t$, $\exists i\lt t$ 꼴로만 나오는 [산술 논리식](peano-axioms.md)을 $\Delta^0_0$ 논리식이라 한다. 이런 논리식의 진릿값은 유한 번 계산으로 판정된다.

나머지 층은 $\Delta^0_0$ 위에 한정기호를 번갈아 붙여 정한다.

$$
\Sigma^0_{n+1}=\lbrace \exists m\thinspace \varphi:\varphi\in\Pi^0_n\rbrace,\qquad \Pi^0_{n+1}=\lbrace \forall m\thinspace \varphi:\varphi\in\Sigma^0_n\rbrace
$$

같은 종류의 한정기호가 이어지면 쌍함수 $\langle\cdot,\cdot\rangle$ 로 하나로 합치므로 층은 교대 횟수만으로 정해진다.

집합 $A\subseteq\mathbb N$ 이 $\Sigma^0_n$ 이라는 것은 $A=\lbrace x:\varphi(x)\rbrace$ 인 $\Sigma^0_n$ 논리식 $\varphi$ 가 있다는 뜻이다. $\Pi^0_n$ 도 같다. 두 쪽에 모두 속하면 $\Delta^0_n$ 이라 하고, 어떤 $n$ 에 대해 $\Sigma^0_n$ 인 집합을 **산술적 집합**이라 한다.

## 낮은 층의 이름

$\Delta^0_1$ 은 계산 가능한 집합이고 $\Sigma^0_1$ 은 재귀적 열거 가능한 집합이다. 정지 문제 $K=\lbrace e:\Phi_e(e)\thinspace\text{가 멈춘다}\rbrace$ 가 $\Sigma^0_1$ 이고 그 여집합이 $\Pi^0_1$ 이다.

## 상대화

신탁 $X$ 를 쓰는 기계의 계산을 $\Delta^0_0$ 자리에 넣으면 $\Sigma^0_n(X)$, $\Pi^0_n(X)$ 가 정해진다. 상대화한 계층은 $X$ 위에서 같은 정리를 그대로 만족한다.

# 성질

## 포함 관계

$$
\Sigma^0_n\cup\Pi^0_n\ \subseteq\ \Delta^0_{n+1}\ \subseteq\ \Sigma^0_{n+1}\cap\Pi^0_{n+1}
$$

논리식 앞에 쓰이지 않는 한정기호를 덧붙이면 층이 하나 올라가므로 왼쪽 포함이 성립한다. 오른쪽은 $\Delta$ 의 정의다.

## 계층의 엄격성

**정리(Kleene).** 모든 $n\ge 1$ 에서 $\Sigma^0_n\ne\Pi^0_n$ 이고, 따라서 위 포함은 모두 진부분집합이다.[^1]

증명은 대각선 논법이다. 각 $n$ 에 보편 집합 $U_n\in\Sigma^0_n$ 이 있어 모든 $\Sigma^0_n$ 집합 $A$ 에 대해 $A=\lbrace x:\langle e,x\rangle\in U_n\rbrace$ 인 $e$ 가 존재한다. $D=\lbrace e:\langle e,e\rangle\in U_n\rbrace$ 로 두면 $D\in\Sigma^0_n$ 이다. $D$ 의 여집합이 $\Sigma^0_n$ 이라면 그것을 주는 지표 $d$ 가 있고, $d\in D$ 와 $d\notin D$ 가 동치가 되어 모순이다. ∎

## Post 정리

**정리(Post).** $A\in\Sigma^0_{n+1}$ 인 것과 $A$ 가 $\emptyset^{(n)}$ 에 대해 재귀적 열거 가능한 것이 동치다. 또 $A\in\Delta^0_{n+1}$ 인 것과 $A\le_T\emptyset^{(n)}$ 인 것이 동치다.[^2]

$n=0$ 은 $\Sigma^0_1$ 집합이 재귀적 열거 가능하다는 정의다. 귀납 단계는 신탁 $X$ 를 쓰는 계산이 멈추는지가 $X$ 에 대해 $\Sigma^0_1$ 이라는 사실과, $\Pi^0_n$ 집합을 신탁으로 쓰는 것이 $\Sigma^0_n$ 집합을 신탁으로 쓰는 것과 같다는 사실을 쓴다. ∎

이 정리가 논리식의 교대 횟수와 도약 횟수를 맞바꾼다. $\Sigma^0_n$ 완전 집합의 Turing 차수가 $\mathbf 0^{(n)}$ 이다.

## 완전 집합

계산 가능한 함수 $f$ 가 모든 $x$ 에 대해 $x\in B\iff f(x)\in A$ 를 만족하면 $B$ 가 $A$ 로 **다대일 환원**된다고 한다. $A$ 가 $\Sigma^0_n$ 이고 모든 $\Sigma^0_n$ 집합이 $A$ 로 다대일 환원되면 $A$ 를 $\Sigma^0_n$ **완전**이라 한다. $W_e$ 를 $e$ 번째 기계의 정의역이라 할 때 다음이 각 층의 완전 집합이다.[^3]

| 집합 | 뜻 | 층 |
| --- | --- | --- |
| $K$ | $\Phi_e(e)$ 가 멈춘다 | $\Sigma^0_1$ 완전 |
| $\mathrm{Fin}$ | $W_e$ 가 유한하다 | $\Sigma^0_2$ 완전 |
| $\mathrm{Tot}$ | $W_e=\mathbb N$ 이다 | $\Pi^0_2$ 완전 |
| $\mathrm{Cof}$ | $W_e$ 의 여집합이 유한하다 | $\Sigma^0_3$ 완전 |

완전 집합이 그 층에 있고 아래 층에는 없으므로 계층의 엄격성이 구체적인 예로도 확인된다.

# 활용

- **결정 불가능성의 등급.** [Turing 차수](turing-degrees.md)의 활용 절이 낱말 문제와 Diophantus 방정식을 $\mathbf 0'$ 로 분류한다. Post 정리로 이 분류가 논리식의 모양만 보고도 정해진다. "모든 입력에서 멈춘다" 는 $\Pi^0_2$ 이므로 정지 문제보다 엄격히 어렵다.
- **산술적 내포.** [역수학](reverse-mathematics.md)의 체계 $\mathrm{ACA}\_0$ 은 매개변수를 허용한 산술 논리식이 정의하는 집합의 존재를 공리로 둔다. 이 체계의 $\omega$ 모형은 도약에 닫힌 집합족이고, 그 최소 모형이 산술적 집합 전체다.
- **정의 불가능성.** 참인 산술 문장의 집합은 어느 층에도 속하지 않는다. 속한다면 그 층의 엄격성이 깨진다. [Gödel 불완전성 정리](godel-incompleteness.md)의 증명이 만드는 문장은 $\Pi^0_1$ 이므로 계층의 가장 낮은 자리에 있다.

[^1]: S. C. Kleene, *Recursive predicates and quantifiers*, Trans. Amer. Math. Soc. 53 (1943), 41–73. 계층의 정의와 보편 집합에 의한 엄격성 증명.
[^2]: Emil L. Post, *Recursively enumerable sets of positive integers and their decision problems*, Bull. Amer. Math. Soc. 50 (1944), 284–316.
[^3]: Hartley Rogers Jr., *Theory of Recursive Functions and Effective Computability*, McGraw-Hill, 1967, 14장. 각 층의 완전 집합 목록과 환원 구성.

# 연관 문서

## 선수지식

- [1차 논리](first-order-logic.md)
- [Turing 차수](turing-degrees.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #logic #set_theory
