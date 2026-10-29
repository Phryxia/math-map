# Freiman 정리

# 개요

**Freiman 정리(Freiman's theorem)** 는 원소끼리 더한 값이 적게 나오는 정수 집합은 등차수열에 가까운 모양이라는 정리다. $\lbrace 1,2,\dots,100\rbrace$ 에서 두 원소를 더하면 $2$ 부터 $200$ 까지 $199$ 가지 값만 나오지만, $\lbrace 2,4,8,\dots,2^{100}\rbrace$ 에서는 $5050$ 가지 값이 모두 다르게 나온다. Freiman 정리는 합의 가짓수가 원소 수의 상수배 이하라는 조건에서 그 집합을 포함하는 등차수열 꼴의 집합을 찾아, 덧셈의 정보로 집합의 모양을 정한다.

# 직관

Freiman 정리는 정수의 유한집합 $A$ 가 $\lvert A+A\rvert\le K\lvert A\rvert$ 를 만족하면, $A$ 가 차원이 $K$ 에만 의존하고 크기가 $\lvert A\rvert$ 의 $K$ 에만 의존하는 상수배 이하인 일반화 등차수열에 포함된다는 정리다. G. A. Freiman 이 1973 년에 증명했고[^1], I. Z. Ruzsa 가 [이산 Fourier 변환](fourier.md)과 [격자](lattices.md)의 Minkowski 정리를 쓰는 짧은 증명을 주었다[^2].

합집합의 크기가 작다는 덧셈 쪽의 정보에서 집합의 모양을 정하는 역정리(inverse theorem)이고, Gowers 의 [Szemerédi 정리](szemeredi-theorem.md) 증명과 [Gowers 균등 노름](gowers-norms.md)의 역정리에 쓰인다.

$\lbrace 1,\dots,n\rbrace$ 에서 두 수를 더하면 $2$ 부터 $2n$ 까지 $2n-1$ 가지 합이 나온다. $n$ 개의 수를 아무렇게나 고르면 두 수의 합은 대개 서로 달라 $n(n+1)/2$ 가지에 가깝다. 합이 적게 나오는 집합은 원소들이 일정한 간격으로 늘어선 집합이다.

간격이 두 가지인 집합도 합이 적다. $Q$ 를 큰 수로 잡고 $x+yQ$ ($0\le x\lt L_1$, $0\le y\lt L_2$) 꼴의 수를 모으면 원소가 $L_1L_2$ 개이고, 두 원소의 합은 $x+yQ$ ($0\le x\lt 2L_1$, $0\le y\lt 2L_2$) 꼴이라 $4L_1L_2$ 가지 이하다. 이런 집합의 큰 부분집합도 합이 적다. Freiman 정리는 합이 적은 집합이 이 꼴밖에 없다는 것이다.

# 정의

아벨 군의 부분집합 $A,B$ 에 대해 **합집합(sumset)** 은 $A+B=\lbrace a+b : a\in A,\thinspace b\in B\rbrace$ 이고, $A-B$ 와 $kA=A+\dots+A$ 도 같은 방식으로 정의된다. $\lvert A+A\rvert/\lvert A\rvert$ 를 $A$ 의 **배증 상수(doubling constant)** 라 한다.

정수 $a,q_1,\dots,q_d$ 와 양의 정수 $L_1,\dots,L_d$ 에 대해

$$
P=\lbrace a+x_1q_1+\dots+x_dq_d : 0\le x_i\lt L_i\rbrace
$$

를 차원 $d$ 의 **일반화 등차수열(generalized arithmetic progression)** 이라 한다. $\lvert P\rvert\le L_1\cdots L_d$ 이고, 등호가 성립하면 고유(proper)하다고 한다.

# 성질

## 가장 작은 배증

정리. 정수의 유한집합 $A$ 에 대해 $\lvert A+A\rvert\ge 2\lvert A\rvert-1$ 이고, 등호는 $A$ 가 등차수열일 때만 성립한다.

증명의 요지. $a_1\lt\dots\lt a_n$ 이면 $a_1+a_1\lt a_1+a_2\lt a_2+a_2\lt a_2+a_3\lt\dots\lt a_n+a_n$ 이 서로 다른 합 $2n-1$ 개다. 등호이면 $a_{i-1}+a_i\lt a_{i-1}+a_{i+1}\lt a_i+a_{i+1}$ 이고 이 사이에 있는 사슬의 합은 $2a_i$ 뿐이므로 $a_{i-1}+a_{i+1}=2a_i$ 다.

## Plünnecke–Ruzsa 부등식

정리. $\lvert A+A\rvert\le K\lvert A\rvert$ 이면 모든 $m,n\ge 0$ 에 대해 $\lvert mA-nA\rvert\le K^{m+n}\lvert A\rvert$ 이다.

이 부등식(Plünnecke–Ruzsa inequality)은 H. Plünnecke 가 그래프 논법으로 처음 증명했고 Ruzsa 가 차집합까지 넓혔다. G. Petridis 는 $\lvert X+B\rvert/\lvert X\rvert$ 를 가장 작게 하는 부분집합 $X\subseteq A$ 를 골라 귀납하는 짧은 증명을 주었다[^3].

## Ruzsa 덮기 보조정리

정리(Ruzsa 덮기 보조정리, Ruzsa covering lemma). $\lvert A+B\rvert\le K\lvert A\rvert$ 이면 $\lvert X\rvert\le K$ 인 $X\subseteq B$ 가 존재해 $B\subseteq X+A-A$ 이다.

증명의 요지. $x+A$ ($x\in X$) 가 서로 겹치지 않는 극대 $X\subseteq B$ 를 고른다. 이 평행이동들은 $A+B$ 안에 있으므로 $\lvert X\rvert\lvert A\rvert\le K\lvert A\rvert$ 이다. 극대성에서 모든 $b\in B$ 에 대해 $b+A$ 가 어떤 $x+A$ 와 만나므로 $b\in x+A-A$ 이다.

## Bogolyubov 보조정리

정리(Bogolyubov 보조정리, Bogolyubov's lemma). $A\subseteq\mathbb Z/N$ 이 $\lvert A\rvert=\alpha N$ 이면 $2A-2A$ 는 다음 [Bohr 집합](bohr-sets.md)을 포함한다.

$$
B(R,1/4)=\lbrace x\in\mathbb Z/N : \lVert rx/N\rVert\le 1/4\quad(r\in R)\rbrace,\qquad\lvert R\rvert\le\alpha^{-2}
$$

$\lVert t\rVert$ 는 [실수](real-numbers.md) $t$ 와 가장 가까운 정수 사이의 거리다.

증명의 요지. $2A-2A$ 에서 $x$ 를 표현하는 방법의 수는 $N^{-1}\sum_r\lvert\widehat{1_A}(r)\rvert^4e^{2\pi irx/N}$ 이다. $R$ 을 $\lvert\widehat{1_A}(r)\rvert\ge\alpha^{3/2}N$ 인 $r$ 전체로 잡으면 Parseval 등식에서 $\lvert R\rvert\le\alpha^{-2}$ 이다. $x\in B(R,1/4)$ 이면 $R$ 의 항은 실수부가 음이 아니고 나머지 항의 합은 $r=0$ 의 항보다 작으므로 표현의 수가 양수다.

## Ruzsa 의 증명

정리(Freiman). $\lvert A+A\rvert\le K\lvert A\rvert$ 인 유한집합 $A\subseteq\mathbb Z$ 는 차원 $d(K)$ 이하이고 크기 $f(K)\lvert A\rvert$ 이하인 일반화 등차수열에 포함된다[^1][^2].

증명의 요지.

1. Plünnecke–Ruzsa 부등식으로 $\lvert 8A-8A\rvert\le K^{16}\lvert A\rvert$ 이다. 이 정보로 $\lvert A'\rvert\ge\lvert A\rvert/8$ 인 $A'\subseteq A$ 를 골라, 덧셈 관계를 $8$ 개 합까지 보존하며 $N$ 이 $K^{16}\lvert A\rvert$ 의 상수배 이하인 $\mathbb Z/N$ 으로 옮긴다.
2. Bogolyubov 보조정리로 $\mathbb Z/N$ 에서 $2A'-2A'$ 안에 계수 $\lvert R\rvert$ 가 $K$ 의 다항식 이하인 Bohr 집합이 있다.
3. 계수 $\lvert R\rvert$ 의 Bohr 집합은 $\mathbb R^{\lvert R\rvert}$ 의 격자와 상자의 교집합이고, Minkowski 의 둘째 정리(Minkowski's second theorem)로 그 안에 차원 $\lvert R\rvert$ 이하이고 $N$ 에 대한 크기의 비율이 $\lvert R\rvert$ 에만 의존하는 고유 일반화 등차수열이 있다. 이것을 1 단계의 대응으로 정수 쪽에 옮기면 $2A-2A$ 가 큰 일반화 등차수열 $P$ 를 포함한다.
4. $\lvert A+P\rvert\le\lvert 3A-2A\rvert\le K^5\lvert A\rvert$ 이므로 Ruzsa 덮기 보조정리에서 $A\subseteq X+P-P$ 이고 $\lvert X\rvert$ 는 $K$ 에만 의존한다. $X$ 의 원소마다 차원을 하나씩 더하면 $A$ 를 포함하는 일반화 등차수열이 된다.

## 상수와 다항 Freiman–Ruzsa 추측

M.-C. Chang 은 차원을 $K$ 의 상수배로, 크기 상수를 $\exp(CK^2\log^3K)$ 로 줄였다[^4]. T. Sanders 는 Bogolyubov 단계의 Bohr 집합 계수를 $\log K$ 의 다항식으로 줄였다[^5].

다항 Freiman–Ruzsa 추측(polynomial Freiman–Ruzsa conjecture)은 상수가 $K$ 의 다항식이 되는 판본이다. $\mathbb F\_2^n$ 에서는 W. T. Gowers, B. Green, F. Manners, T. Tao 가 증명했다. $A\subseteq\mathbb F\_2^n$ 이 $\lvert A+A\rvert\le K\lvert A\rvert$ 이면 크기가 $\lvert A\rvert$ 이하인 부분군 $H$ 의 잉여류 $2K^{12}$ 개 이하로 $A$ 를 덮을 수 있다[^6].

# 활용

- Gowers 의 Szemerédi 정리 상한. [Gowers 균등 노름](gowers-norms.md)이 큰 함수에서 밀도 증가를 얻는 단계가 [Balog–Szemerédi–Gowers 정리](balog-szemeredi-gowers.md)와 이 정리를 쓴다.
- $U^3$ 역정리. Green 과 Tao 의 $U^3$ 역정리는 큰 Fourier 계수의 위치가 이루는 집합에 이 정리를 적용해 이차 위상을 만든다.
- 일반 아벨 군. Green 과 Ruzsa 는 임의의 아벨 군에서 같은 결론을 일반화 등차수열과 유한 부분군의 합으로 증명했다[^7].

[^1]: G. A. Freiman, *Foundations of a Structural Theory of Set Addition*, Translations of Mathematical Monographs 37, American Mathematical Society (1973).
[^2]: I. Z. Ruzsa, "Generalized arithmetical progressions and sumsets", Acta Mathematica Hungarica 65 (1994), 379–388.
[^3]: G. Petridis, "New proofs of Plünnecke-type estimates for product sets in groups", Combinatorica 32 (2012), 721–733.
[^4]: M.-C. Chang, "A polynomial bound in Freiman's theorem", Duke Mathematical Journal 113 (2002), 399–419.
[^5]: T. Sanders, "On the Bogolyubov–Ruzsa lemma", Analysis & PDE 5 (2012), 627–655.
[^6]: W. T. Gowers, B. Green, F. Manners, T. Tao, "On a conjecture of Marton", 2023 년 프리프린트.
[^7]: B. Green, I. Z. Ruzsa, "Freiman's theorem in an arbitrary abelian group", Journal of the London Mathematical Society 75 (2007), 163–175.

# 연관 문서

## 선수지식

- [이산 Fourier 변환](fourier.md)

## 더 알아보기

- [Balog–Szemerédi–Gowers 정리](balog-szemeredi-gowers.md)

#combinatorics #number_theory #analysis
