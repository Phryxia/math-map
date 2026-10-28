# 정지 문제

# 개요

**정지 문제(halting problem)** 는 프로그램과 입력을 받아 그 계산이 유한 단계 안에 멈추는지 판정하는 문제다. 짝수를 차례로 보며 두 소수의 합이 아닌 것을 찾으면 멈추는 프로그램을 돌리면, 오래 돌아도 멈추지 않을 때 다음 단계에 멈출지 영원히 돌지를 실행만으로는 가를 수 없다. Turing 은 이 판정을 하는 알고리즘이 없음을 대각선 논법으로 증명했고, 이 결과는 다른 문제의 결정 불가능성을 보이는 환원의 출발점으로 쓰인다.

# 직관

프로그램 $p$ 가 입력 $x$ 에서 멈추는지 알려면 $p$ 를 $x$ 에서 실행해 보면 된다. 멈추면 "예" 라고 답한다. $N$ 단계가 지나도 실행 중이면 아직 답할 수 없다. 다음 단계에서 멈출 수도 있고 영원히 돌 수도 있으며, 실행만으로는 둘을 가를 수 없다.

$4$ 이상의 짝수를 $4,6,8,\dots$ 순서로 보며 두 소수의 합으로 쓰이지 않는 것을 찾으면 멈추는 프로그램을 생각한다. 이 프로그램이 멈추는 것은 [Goldbach 추측](goldbach-conjecture.md)이 거짓인 것과 같다. 정지 여부를 판정하는 알고리즘이 있으면 이 추측도 기계적으로 판정된다.

그런 알고리즘이 없다는 것은 프로그램에게 자기 자신의 문자열을 입력으로 주어 보인다. 판정기가 "멈춘다" 고 답하면 무한히 돌고 "멈추지 않는다" 고 답하면 멈추는 프로그램을 만들면, 그 프로그램을 자기 자신에게 실행했을 때 판정기의 답이 틀린다.

멈추는 경우를 모두 열거하는 절차는 있으므로 정지 문제는 [계산 가능성](computability.md)에서 결정 불가능하지만 인식 가능한 문제의 표준 예이고, 인식 가능한 모든 문제가 이 문제로 환원된다. Turing 의 증명은 1936년에 나왔다.

# 정의

계산 가능한 부분함수 전체를 $\varphi_0,\varphi_1,\varphi_2,\dots$ 로 번호 붙인다. $\varphi_e(x)\downarrow$ 는 번호 $e$ 의 프로그램이 입력 $x$ 에서 멈춘다는 뜻이고, $\varphi_e(x)\uparrow$ 는 멈추지 않는다는 뜻이다. 정지 문제는 집합

$$
H=\lbrace(e,x):\varphi_e(x)\downarrow\rbrace
$$

의 소속 판정이다. 대각선만 남긴 $K=\lbrace e:\varphi_e(e)\downarrow\rbrace$ 를 **정지 집합(halting set)** 이라 하고 $\varnothing'$ 으로도 쓴다.

집합 $A\subseteq\mathbb N$ 이 **계산 가능하게 열거 가능(computably enumerable)** 하다는 것은 어떤 $e$ 에서 $A=W_e=\lbrace x:\varphi_e(x)\downarrow\rbrace$ 인 것, 곧 $x\in A$ 일 때 멈추고 아닐 때 멈추지 않는 프로그램이 있는 것이다. $A\le_m B$ 는 계산 가능한 전함수 $f$ 가 있어 $x\in A\iff f(x)\in B$ 인 것이고, 이것을 **다대일 환원(many-one reduction)** 이라 한다.

# 성질

## 결정 불가능성

**정리(Turing, 1936).** $K$ 는 계산 가능하지 않다.

$K$ 가 계산 가능하면 $e\in K$ 일 때 무한히 돌고 $e\notin K$ 일 때 $0$ 을 내는 계산 가능한 부분함수 $\psi$ 가 있다. $\psi=\varphi_d$ 라 하면 $d\in K\iff\varphi_d(d)\downarrow\iff d\notin K$ 이므로 모순이다. $K\le_m H$ 가 $e\mapsto(e,e)$ 로 성립하므로 $H$ 도 계산 가능하지 않다. ∎

## 인식 가능성과 여집합

$K$ 는 계산 가능하게 열거 가능하다. $e=0,1,2,\dots$ 의 계산을 한 단계씩 번갈아 진행하고 멈춘 것을 차례로 내보내면 $K$ 가 열거된다.

집합 $A$ 가 계산 가능한 것은 $A$ 와 그 여집합이 모두 계산 가능하게 열거 가능한 것과 동치다. 두 열거를 번갈아 돌리면 $x$ 는 언젠가 한쪽에 나타나기 때문이다. 따라서 $K$ 의 여집합, 곧 멈추지 않는 프로그램의 집합은 계산 가능하게 열거 가능하지 않다.

## 완전성

계산 가능하게 열거 가능한 모든 집합 $W_e$ 는 $W_e\le_m K$ 를 만족한다. $x$ 를 받아 "입력을 무시하고 $\varphi_e(x)$ 를 계산하는 프로그램" 의 번호 $f(x)$ 를 내는 계산 가능한 $f$ 가 있고, 그 프로그램은 어느 입력에서나 $\varphi_e(x)\downarrow$ 일 때만 멈추므로 $x\in W_e\iff f(x)\in K$ 다. 번호 $f(x)$ 의 계산 가능성은 s-m-n 정리(s-m-n theorem)에서 나온다.

따라서 $K$ 는 계산 가능하게 열거 가능한 집합 가운데 다대일 환원에 대해 가장 어렵다. [산술적 계층](arithmetical-hierarchy.md)으로는 $K$ 가 $\Sigma^0_1$ 완전이고, [Turing 차수](turing-degrees.md)로는 $K$ 의 차수가 $\mathbf 0'$ 이다.

## 바쁜 비버 함수

상태가 $n$ 개이고 빈 테이프에서 멈추는 Turing 기계 가운데 가장 오래 도는 것의 단계 수를 $\mathrm{BB}(n)$ 이라 하고 **바쁜 비버 함수(busy beaver function)** 라 한다(Radó, 1962). 계산 가능한 모든 함수 $f$ 에 대해 충분히 큰 $n$ 에서 $\mathrm{BB}(n)\gt f(n)$ 이다. $\mathrm{BB}$ 이상인 계산 가능한 함수가 있으면 상태 $n$ 개의 기계를 그 값만큼 실행해 보고 정지 여부를 판정할 수 있어 정지 문제가 풀리기 때문이다.

# 활용

- [Rice 정리](rice-theorem.md). 프로그램의 자명하지 않은 의미적 성질의 판정에 정지 문제를 환원해, 그런 성질이 모두 결정 불가능함을 증명한다.
- 다른 결정 불가능 문제. [군의 표시](group-presentations.md)의 낱말 문제, [1차 논리](first-order-logic.md) 문장의 타당성, [Post 대응 문제](post-correspondence-problem.md), 정수계수 다항식의 정수해 존재([Hilbert 의 10번 문제](hilberts-tenth-problem.md))가 정지 문제의 환원으로 결정 불가능함이 증명되었다.
- [Gödel 불완전성 정리](godel-incompleteness.md). 계산을 표현하는 무모순 형식 체계에서 정리 집합은 계산 가능하게 열거 가능하므로, 체계가 모든 참인 "멈추지 않는다" 문장을 증명하면 $K$ 의 여집합이 열거되어 모순이다.
- 프로그램 분석. 정지 여부나 그로 환원되는 성질을 판정하는 정적 분석기는 틀린 답을 내거나 답을 보류하는 경우를 반드시 갖는다.

# 연관 문서

## 선수지식

- [계산 가능성](computability.md)

## 더 알아보기

- [Kleene 재귀 정리](kleene-recursion-theorem.md)
- [Post 대응 문제](post-correspondence-problem.md)
- [Hilbert 의 10번 문제](hilberts-tenth-problem.md)
- [Wang 타일](wang-tiles.md)
- [시간 계층 정리](time-hierarchy-theorem.md)

#computation #logic #theorem
