# Bolzano–Weierstrass 정리

# 개요

**Bolzano–Weierstrass 정리(Bolzano–Weierstrass theorem)** 는 유계인 [실수](real-numbers.md) 수열이 수렴하는 부분수열(subsequence)을 갖는다는 정리다. $\sin 1,\sin 2,\sin 3,\dots$ 은 모든 항이 $-1$ 과 $1$ 사이에 있지만 [수열의 극한](limits.md)이 없고, 어느 항을 골라야 수렴하는지 식으로 정할 수도 없다. 이 정리는 구간을 반씩 자르며 항이 무한히 많이 든 쪽을 계속 고르는 방법으로, 이런 수열에서도 수렴하는 부분수열을 골라낸다.

# 직관

수렴하는 수열은 유계다. 역은 성립하지 않는다. $a_n=(-1)^n$ 은 모든 항이 $\lbrack -1,1\rbrack$ 에 있지만 수렴하지 않는다. 그런데 짝수 번째 항만 모으면 전부 $1$ 이고 $1$ 로 수렴한다. 유계인 수열에서는 늘 이렇게 수렴하는 부분을 골라낼 수 있는가.

$a_n=\sin n$ 으로 해 본다. 모든 항이 $\lbrack -1,1\rbrack$ 에 있다. $(-1)^n$ 에서는 "짝수 번째" 라는 규칙으로 항을 골랐는데 여기에는 그런 규칙이 없다. $\sin n$ 의 값은 $\lbrack -1,1\rbrack$ 전체에 흩어져 있어서, 어느 번호의 항을 모으면 값이 한 곳으로 모이는지 식으로 적을 수 없다.

항을 식으로 고를 수 없으니 항 대신 값이 쌓이는 구간을 찾는다. $\lbrack -1,1\rbrack$ 을 반으로 자르면 $\lbrack -1,0\rbrack$ 과 $\lbrack 0,1\rbrack$ 가운데 적어도 한쪽에 $a_n$ 이 들어가는 번호 $n$ 이 무한히 많다. 양쪽 모두 유한 개의 번호만 담으면 번호가 전부 유한 개가 되어 수열이 아니다. 번호가 무한히 많은 쪽을 고르고 그것을 다시 반으로 잘라 같은 선택을 되풀이한다. $k$ 번 자른 구간은 길이가 $2^{1-k}$ 이고 그 안에 들어가는 번호는 여전히 무한히 많다.

$k$ 번째 구간에서 항 하나를 앞서 뽑은 것보다 뒤 번호로 뽑는다. 번호가 무한히 많으므로 늘 가능하다. 이렇게 얻은 $a_{n_1},a_{n_2},\dots$ 에서 $j,k\ge m$ 이면 두 항이 길이 $2^{1-m}$ 인 같은 구간에 들어 있으므로 거리가 $2^{1-m}$ 이하다. $m$ 을 키우면 이 거리가 $0$ 으로 가고 뽑은 부분수열이 수렴한다.

# 정의

수열 $(a_n)\_{n\in\mathbb N}$ 과 강증가하는 번호열 $n_1\lt n_2\lt\cdots$ 에 대해 $(a_{n_k})\_{k\in\mathbb N}$ 을 부분수열이라 한다. $(a_n)$ 이 유계라는 것은 $\sup_n\lvert a_n\rvert\lt\infty$ 다. 정리의 진술은 다음이다[^1].

$$
\sup_n\lvert a_n\rvert\lt\infty\implies\exists\thinspace(n_k)\ \text{강증가},\ \exists L\in\mathbb R:\ \lim_{k\to\infty}a_{n_k}=L
$$

## 극한점 형태

집합 $S\subseteq\mathbb R$ 이 유계이고 무한집합이면 $S$ 는 극한점(limit point)을 갖는다. 점 $x$ 가 $S$ 의 극한점이라는 것은 모든 $\varepsilon\gt 0$ 에 대해 $S\cap(x-\varepsilon,x+\varepsilon)$ 이 $x$ 아닌 점을 담는다는 뜻이다. 무한집합에서 서로 다른 항으로 된 수열을 뽑으면 수열 형태가 극한점 형태를 함의하고, 극한점의 $1/k$ 근방에서 항을 차례로 뽑으면 거꾸로도 함의한다.

# 성질

## 증명의 요지

$(a_n)$ 이 $\lbrack A,B\rbrack$ 에 있다고 한다. $I_0=\lbrack A,B\rbrack$ 에서 시작해 $I_k$ 를 반으로 자르고 항의 번호가 무한히 많이 들어 있는 쪽을 $I_{k+1}$ 로 둔다. 길이는 $\lvert I_k\rvert=(B-A)2^{-k}$ 다. $I_k$ 에서 $n_k\gt n_{k-1}$ 인 항을 하나 뽑으면 $j,k\ge m$ 에서 두 항이 $I_m$ 에 함께 있으므로 $\lvert a_{n_k}-a_{n_j}\rvert\le(B-A)2^{-m}$ 이다. 따라서 $(a_{n_k})$ 는 Cauchy 수열이고 완비성으로 수렴한다. 구간 수축 원리(nested interval principle)를 쓰면 $\bigcap_k I_k$ 가 한 점 $L$ 이고 그 점이 극한이다.

## 완비성과의 동치

실수의 [완비성](completeness.md)을 정하는 상한 공리(least upper bound axiom)에서 이 정리가 증명되고 거꾸로도 증명된다[^2]. 유계집합 $S$ 에 대해 $S$ 의 점 $x_k$ 와 $S$ 의 상계 $y_k$ 를 중점 판정으로 번갈아 좁히면 $\lvert x_k-y_k\rvert\to 0$ 이다. $(x_k)$ 의 수렴하는 부분수열의 극한이 $S$ 의 최소상계다.

유리수체에서는 거짓이다. $\sqrt2$ 의 소수 전개를 자른 유리수 수열은 유계이고 단조이지만 어느 부분수열도 유리수 안에서 수렴하지 않는다.

## 고차원과 수열 콤팩트성

$\mathbb R^d$ 의 유계 수열에서 첫 좌표가 수렴하는 부분수열을 뽑고 그 안에서 둘째 좌표가 수렴하는 부분수열을 뽑기를 $d$ 번 되풀이하면 모든 좌표가 수렴하는 부분수열이 나온다. 유계이고 닫힌 $\mathbb R^d$ 의 부분집합에서는 모든 수열이 그 집합 안의 점으로 수렴하는 부분수열을 가지며, 이 성질을 수열 콤팩트성(sequential compactness)이라 한다. [거리 공간](metric-spaces.md)에서 수열 콤팩트성과 [콤팩트성](compactness.md)은 동치이고, $\mathbb R^d$ 에서 둘이 유계성과 닫힘의 결합과 동치라는 것이 [Heine–Borel 정리](heine-borel.md)다.

## 무한차원에서의 실패

$\ell^2$ 의 표준기저 $(e_n)$ 은 $\Vert e_n\Vert=1$ 로 유계이지만 $n\neq m$ 에서 $\Vert e_n-e_m\Vert=\sqrt2$ 이므로 어느 부분수열도 Cauchy 수열이 아니다. 무한차원 노름공간의 닫힌 단위공은 수열 콤팩트가 아니고, 쌍대공간의 약한 위상으로 바꾸면 콤팩트성이 성립한다는 것이 [Banach–Alaoglu 정리](banach-alaoglu.md)다.

# 활용

- **[Arzelà–Ascoli 정리](arzela-ascoli.md).** 점별유계인 함수족에서 조밀 부분집합의 점마다 이 정리로 수렴하는 부분열을 뽑고 대각선 부분열을 취해 균등수렴하는 부분열을 얻는다.
- **[Tychonoff 정리](tychonoff-theorem.md).** $\lbrack 0,1\rbrack^{\mathbb N}$ 의 콤팩트성을 보일 때 좌표마다 이 정리를 적용하고 대각선 부분열을 취한다.
- **최대·최소 정리.** 닫힌 유계 구간의 연속함수가 최댓값을 갖는다는 것을, 상한에 다가가는 함숫값을 주는 점들의 수열에서 수렴하는 부분수열을 뽑아 증명한다.
- **[역수학](reverse-mathematics.md).** [2차 산술](second-order-arithmetic.md)의 체계 가운데 이 정리는 산술적 내포 공리를 갖는 $\mathrm{ACA}\_0$ 와 동치다. 반분 단계에서 "이 반쪽에 항이 무한히 많은가" 를 판정하는 데 한정사(quantifier)가 필요하다.

[^1]: W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., Theorem 3.6 과 Theorem 2.42.

[^2]: K. Ross, *Elementary Analysis: The Theory of Calculus*, 2nd ed., Section 11 — 상한 공리와 부분수열 정리의 동치.

# 연관 문서

## 선수지식

- [수열의 극한](limits.md)
- [완비성](completeness.md)

## 더 알아보기

- [Heine–Borel 정리](heine-borel.md)

#analysis #topology #foundations
