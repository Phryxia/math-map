# Barrington 정리

# 개요

**Barrington 정리(Barrington's theorem)** 는 [NC 계층](nc-hierarchy.md)의 $\mathrm{NC}^1$ 이 폭 $5$ 이고 길이가 다항식인 분지 프로그램으로 판정되는 언어의 부류와 같다는 정리다. D. A. M. Barrington 이 1986 년에 증명했다[^1].

폭 $5$ 의 분지 프로그램은 기억하는 상태가 $5$ 개뿐인 계산이다. 증명은 $5$ 원소의 치환군 $S_5$ 의 교환자로 논리곱을 계산하고, 이 계산은 $S_5$ 가 [가해군](solvable-groups.md)이 아니라는 데 기댄다.

# 직관

입력 비트를 차례로 읽으며 상태 $5$ 개 가운데 하나에 머무는 기계를 생각한다. 각 단계는 입력 비트 하나 $x_i$ 를 보고, $x_i=0$ 이면 치환 $\alpha$ 를, $x_i=1$ 이면 치환 $\beta$ 를 상태에 적용한다. 단계를 모두 거친 뒤의 상태로 답을 정한다.

$x_1$ 을 계산하는 것은 쉽다. $x_1=1$ 일 때 $5$ 순환 $\sigma=(1\thinspace 2\thinspace 3\thinspace 4\thinspace 5)$ 를, $x_1=0$ 일 때 항등 치환 $e$ 를 적용하면 결과가 $\sigma$ 인지 $e$ 인지로 $x_1$ 이 드러난다. 같은 방법으로 $x_2$ 에서 다른 $5$ 순환 $\tau$ 를 만든다.

$x_1\wedge x_2$ 를 계산하려면 두 프로그램을 $P_1P_2P_1^{-1}P_2^{-1}$ 로 이어 붙인다. 역 프로그램 $P^{-1}$ 은 단계를 거꾸로 놓고 치환을 역원으로 바꾼 것이다. 둘 중 하나가 $e$ 이면 결과는 $e$ 이고, 둘 다 $1$ 이면 결과는 교환자 $\sigma\tau\sigma^{-1}\tau^{-1}$ 이다. $\sigma$ 와 $\tau$ 를 잘 고르면 이 교환자가 다시 $5$ 순환이어서, 결과가 $5$ 순환인지 $e$ 인지로 논리곱이 드러난다. 길이는 $4$ 배가 되므로 깊이 $d$ 의 회로를 따라 반복하면 길이가 $4^d$ 이고, $d=O(\log n)$ 이면 다항식이다.

# 정의

## 분지 프로그램

입력 길이 $n$ 의 **폭 $w$ 치환 분지 프로그램(width-w permutation branching program)** 은 명령의 열 $(i_1,\alpha_1,\beta_1),\dots,(i_\ell,\alpha_\ell,\beta_\ell)$ 이다. $i_k\in\lbrace 1,\dots,n\rbrace$ 이고 $\alpha_k,\beta_k\in S_w$ 다. 입력 $x$ 에서의 값은

$$
P(x)=\gamma_1\gamma_2\cdots\gamma_\ell,\qquad \gamma_k=\begin{cases}\alpha_k & x_{i_k}=0\cr \beta_k & x_{i_k}=1\end{cases}
$$

인 치환이고, $\ell$ 을 길이라 한다. 곱은 왼쪽의 치환부터 적용한다. 받아들이는 치환의 집합 $F\subseteq S_w$ 를 정해 $P(x)\in F$ 이면 $x$ 를 받아들인다.

## 치환으로 계산하기

$\sigma\in S_5$ 가 $5$ 순환일 때, 모든 $x$ 에서 $f(x)=1$ 이면 $P(x)=\sigma$ 이고 $f(x)=0$ 이면 $P(x)=e$ 인 프로그램 $P$ 를 $f$ 를 **$\sigma$-계산한다** 고 한다.

# 성질

## 교환자 보조정리

보조정리. $S_5$ 에는 교환자 $\sigma\tau\sigma^{-1}\tau^{-1}$ 이 $5$ 순환인 $5$ 순환 $\sigma$, $\tau$ 가 있다. 예를 들어 $\sigma=(1\thinspace 2\thinspace 3\thinspace 4\thinspace 5)$, $\tau=(1\thinspace 3\thinspace 5\thinspace 4\thinspace 2)$ 이면 교환자는 $(1\thinspace 3\thinspace 2\thinspace 5\thinspace 4)$ 이다[^1].

$5$ 순환끼리는 모두 켤레이다. 프로그램이 $f$ 를 $\sigma$-계산하면 첫 명령의 두 치환 앞에 $\theta$ 를, 마지막 명령의 두 치환 뒤에 $\theta^{-1}$ 을 곱해 $f$ 를 $\theta\sigma\theta^{-1}$-계산하게 바꿀 수 있다. 그래서 목표 순환은 길이를 늘리지 않고 다른 $5$ 순환으로 바꿀 수 있다.

## Barrington 정리

정리. 언어가 $\mathrm{NC}^1$ 에 드는 것은 폭 $5$ 이고 길이가 다항식인 치환 분지 프로그램 족으로 판정되는 것과 동치다[^1].

증명의 요지. 회로에서 프로그램으로 가는 방향은 깊이 $d$ 에 대한 귀납법이다. 각 게이트의 함수를 어떤 $5$ 순환으로 계산하는 길이 $4^d$ 이하의 프로그램을 만든다.

- 입력 $x_i$ 는 명령 $(i,e,\sigma)$ 하나다.
- 부정 $\neg f$ 는 $f$ 를 $\sigma^{-1}$-계산하는 프로그램의 마지막 명령에 $\sigma$ 를 곱해 $\sigma$-계산으로 바꾼다.
- 논리곱 $f\wedge g$ 는 직관 절의 $P\thinspace Q\thinspace P^{-1}Q^{-1}$ 이다. 보조정리의 $\sigma$, $\tau$ 로 $P$ 와 $Q$ 의 목표를 맞춘다.
- 논리합은 [De Morgan 법칙](de-morgan-laws.md)으로 부정과 논리곱으로 쓴다.

프로그램에서 회로로 가는 방향은 치환의 곱을 이진 나무로 묶는 것이다. 명령마다 $x_{i_k}$ 로 $\gamma_k$ 를 고르는 것이 상수 크기 회로이고, $S_5$ 의 원소 둘의 곱도 상수 크기 회로이므로, 길이 $\ell$ 의 곱이 깊이 $O(\log\ell)$ 에 계산된다.

## 가해군의 한계

같은 꼴의 프로그램을 유한군 $G$ 의 원소로 만들 수 있다. $G$ 가 가해군이면 유도열 $G\supseteq\lbrack G,G\rbrack\supseteq\cdots$ 가 자명군에 닿으므로, 교환자를 거듭 취하면 결국 $e$ 가 되어 논리곱을 거듭 계산하는 위 구성이 깊이 상수에서 멈춘다. D. A. M. Barrington 과 D. Thérien 은 길이가 다항식인 프로그램이 가해 모노이드 위에서 판정하는 언어가 정확히 $\mathrm{ACC}^0$ 임을 보였다[^2]. $\mathrm{ACC}^0$ 은 $\mathrm{AC}^0$ 에 법 $m$ 의 합을 세는 게이트를 더한 상수 깊이 회로의 부류다.

폭이 $5$ 보다 작은 치환 분지 프로그램에서 $S_w$ 는 $w\le 4$ 일 때 가해군이므로, 폭 $5$ 는 이 방법으로 $\mathrm{NC}^1$ 전체를 얻는 가장 작은 폭이다.

# 활용

- [NC 계층](nc-hierarchy.md)의 $\mathrm{NC}^1$ 에 대한 대수적 특성화. $\mathrm{NC}^1$ 은 상수 크기 비가해군의 원소를 다항식 개 곱하는 문제와 같고, 고정된 비가해군 위의 낱말 문제가 $\mathrm{NC}^1$-완전이다.
- [불 회로](boolean-circuits.md)의 공식 크기. 깊이 $O(\log n)$ 의 회로는 다항 크기의 공식으로 펼쳐지므로, 다항 크기 공식과 $\mathrm{NC}^1$ 과 폭 $5$ 분지 프로그램이 같은 부류를 준다.

[^1]: D. A. M. Barrington, "Bounded-width polynomial-size branching programs recognize exactly those languages in NC¹", Journal of Computer and System Sciences 38 (1989), 150–164. 학회 판은 Proceedings of the 18th ACM Symposium on Theory of Computing (1986), 1–5.
[^2]: D. A. M. Barrington, D. Thérien, "Finite monoids and the fine structure of NC¹", Journal of the ACM 35 (1988), 941–952.

# 연관 문서

## 선수지식

- [NC 계층](nc-hierarchy.md)
- [가해군](solvable-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #group_theory
