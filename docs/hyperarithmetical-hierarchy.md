# 초산술적 계층

# 개요

[산술적 계층](arithmetical-hierarchy.md)은 공집합의 [Turing 도약](turing-degrees.md)을 유한 번 반복해 얻는 집합을 층으로 나눈다. 반복을 유한에서 멈출 이유는 없다.

**초산술적 계층**은 도약의 반복을 계산가능한 [서수](ordinals.md)까지 밀어 올린 것이다. 이렇게 얻는 집합 전체가 [해석적 계층](analytical-hierarchy.md)의 $\Delta^1_1$ 과 같다.

# 직관

정지 문제 $\varnothing'$ 은 계산가능하지 않다. $\varnothing'$ 을 신탁으로 주고 다시 정지 문제를 물으면 $\varnothing''$ 이 나오고, 이것을 $n$ 번 되풀이하면 $\varnothing^{(n)}$ 이다. Post 정리에 따라 $\varnothing^{(n)}$ 은 $\Sigma^0_n$ 완전이고, 산술적 계층의 $n$ 번째 층이 이 집합으로 정확히 설명된다.

$n$ 을 다 쓰면 층이 떨어진다. 그래도 다음 집합을 적을 수는 있다.

$$
\varnothing^{(\omega)}=\lbrace (n,x):x\in\varnothing^{(n)}\rbrace
$$

이 집합은 어느 $\varnothing^{(n)}$ 으로도 계산되지 않는다. $\varnothing^{(\omega)}$ 가 계산되면 $\varnothing^{(n+1)}$ 도 계산되고, 이는 도약이 차수를 올린다는 사실과 어긋난다. 그러므로 $\varnothing^{(\omega)}$ 는 산술적이지 않고, 여기서 도약을 한 번 더 해 $\varnothing^{(\omega+1)}$ 로 갈 수 있다.

이 방식을 서수 $\alpha$ 마다 이어 가려면 극한 서수에서 막힌다. $\varnothing^{(\omega\cdot 2)}$ 를 만들려면 $\varnothing^{(\omega)},\varnothing^{(\omega+1)},\varnothing^{(\omega+2)},\dots$ 을 전부 모아야 하는데, 무엇을 모으는지 기계가 알아야 모으는 절차가 정해진다. 서수 $\omega\cdot 2$ 자체는 무한집합이라 기계에 건넬 수 없다.

대신 $\omega\cdot 2$ 로 올라가는 증가열 $\omega,\omega+1,\omega+2,\dots$ 을 내놓는 프로그램의 번호를 건넨다. 기계는 그 번호로 아래 단계들을 차례로 불러 합칠 수 있다. 도약은 이렇게 번호로 지정되는 서수까지만 이어지고, 그 서수 전체의 상한이 이 계층의 높이가 된다.

# 정의

## Kleene 의 표기 체계

**Kleene 의 $\mathcal O$** 는 자연수의 집합이고, 각 원소 $a$ 에 서수 $\vert a\vert$ 를 함께 매긴다. 다음 세 조항의 귀납으로 정한다.

- $1\in\mathcal O$ 이고 $\vert 1\vert=0$ 이다.
- $a\in\mathcal O$ 이면 $2^a\in\mathcal O$ 이고 $\vert 2^a\vert=\vert a\vert+1$ 이다.
- $\varphi_e$ 가 전역함수이고 모든 $n$ 에 대해 $\varphi_e(n)\in\mathcal O$ 이며 $\vert\varphi_e(n)\vert\lt \vert\varphi_e(n+1)\vert$ 이면, $3\cdot 5^e\in\mathcal O$ 이고 $\vert 3\cdot 5^e\vert=\sup_n\vert\varphi_e(n)\vert$ 이다.

$\mathcal O$ 의 원소가 표기하는 서수 전체는 $\omega_1^{\mathrm{CK}}$ 미만의 서수 전체와 같다. 이 $\omega_1^{\mathrm{CK}}$ 를 **Church–Kleene 서수**라 하고, 자연수 위의 계산가능한 정렬순서의 순서형이 되지 못하는 최소 서수로도 특징지어진다.

한 서수에 표기가 여럿 붙는다. $\omega$ 로 올라가는 증가열은 여럿이고 그 프로그램 번호가 모두 다른 표기를 준다.

## 초한 도약

$a\in\mathcal O$ 마다 집합 $H_a$ 를 표기의 귀납을 따라 정한다.

$$
H_1=\varnothing,\qquad H_{2^a}=(H_a)',\qquad H_{3\cdot 5^e}=\lbrace (n,x):x\in H_{\varphi_e(n)}\rbrace
$$

여기서 $(H_a)'$ 은 $H_a$ 를 신탁으로 한 정지 문제다.

자연수 집합 $A$ 가 **초산술적**이라는 것은 어떤 $a\in\mathcal O$ 에 대해 $A\le_T H_a$ 인 것이다. 초산술적 집합 전체를 $\mathrm{HYP}$ 라 쓴다. 표기 $a$ 가 매기는 서수 $\vert a\vert$ 가 그 집합이 놓이는 층이다.

# 성질

## 표기의 무관함

$a,b\in\mathcal O$ 이고 $\vert a\vert=\vert b\vert$ 이면 $H_a\equiv_T H_b$ 다.[^1] 증명은 $\vert a\vert$ 에 대한 초한 귀납이고, 두 표기가 같은 서수를 가리키면 그 아래 단계들 사이의 환원을 따라 올라가며 양방향 환원을 잇는다.

따라서 서수 $\alpha\lt \omega_1^{\mathrm{CK}}$ 마다 Turing 차수 $\boldsymbol{0}^{(\alpha)}$ 가 표기 선택과 무관하게 정해지고, 초산술적 집합의 모임도 표기 체계의 세부에 의존하지 않는다.

## Kleene 정리

$\mathrm{HYP}=\Delta^1_1$ 이다.[^1]

$\mathrm{HYP}\subseteq\Delta^1_1$ 쪽은 $H_a$ 의 구성을 논리식으로 옮겨 얻는다. "$H$ 가 $a$ 까지의 도약 열이다" 라는 조건은 산술 논리식이므로, $x\in A$ 를 "그런 열이 있고 거기서 $x$ 가 나온다" 로도 "그런 열마다 거기서 $x$ 가 나온다" 로도 쓸 수 있다. 앞의 것이 $\Sigma^1_1$, 뒤의 것이 $\Pi^1_1$ 이다.

$\Delta^1_1\subseteq\mathrm{HYP}$ 쪽은 $\Sigma^1_1$ 경계 정리를 쓴다. $A$ 와 여집합이 모두 $\Sigma^1_1$ 이면 각각 계산가능한 나무의 족으로 정규형을 갖고, $x\notin A$ 를 증언하는 나무들은 전부 정렬근거이므로 그 순위의 집합이 $\Sigma^1_1$ 로 정의된다. 경계 정리가 이 순위들을 $\omega_1^{\mathrm{CK}}$ 미만의 한 서수로 묶어 주고, 그 서수의 표기 $a$ 에서 $A\le_T H_a$ 가 된다.

## $\mathcal O$ 의 복잡도

$\mathcal O$ 는 $\Pi^1_1$ 완전이다.[^1] 셋째 조항이 $\varphi_e$ 의 값 전체가 이미 $\mathcal O$ 에 있기를 요구하므로 정의가 정렬근거성에 걸리고, 그 조건이 $\Pi^1_1$ 이다.

그러므로 $\mathcal O$ 자체는 초산술적이지 않다. 초산술적 집합 하나하나는 $\mathcal O$ 의 원소 하나로 지정되지만, 지정하는 쪽의 목록은 지정되는 쪽의 모임에 들어가지 않는다.

# 활용

- **역수학의 $\mathrm{ATR}\_0$.** [역수학](reverse-mathematics.md)의 다섯 체계 가운데 $\mathrm{ATR}\_0$ 가 정렬순서를 따라 산술적 내포를 되풀이하는 공리를 쓴다. $\mathrm{ACA}\_0$ 의 최소 $\omega$ 모형이 산술적 집합의 모임이듯, $\mathrm{ATR}\_0$ 의 최소 $\omega$ 모형이 $\mathrm{HYP}$ 다.
- **효과적 Borel 계층.** Baire 공간의 Borel 집합에 계산가능한 코드를 붙이면 코드의 순위가 초산술적 계층의 층과 맞는다. 해석적 계층의 활용 절이 드는 Suslin 정리가 이 대응의 상대화된 판본이다.
- **초산술 환원가능성.** $A$ 가 $B$ 에 상대화한 초산술적 집합일 때 $A\le_h B$ 로 쓴다. $\Pi^1_1$ 집합의 구조를 이 환원으로 재고, $\mathcal O$ 가 그 안에서 완전 원소의 자리에 놓인다.

[^1]: G. E. Sacks, *Higher Recursion Theory* (1990), II 장. Spector 유일성 정리는 II.4, Kleene 정리와 $\Sigma^1_1$ 경계 정리는 II.2 와 II.5, $\mathcal O$ 의 $\Pi^1_1$ 완전성은 II.7. 역수학 쪽 대응은 S. G. Simpson, *Subsystems of Second Order Arithmetic*, 2판 (2009), VIII.3.

# 연관 문서

## 선수지식

- [서수](ordinals.md)
- [해석적 계층](analytical-hierarchy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #logic #set_theory
