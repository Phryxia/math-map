# 격자

# 개요

**격자(lattice)** 는 선형독립인 벡터 $b_1,\dots,b_n$ 의 정수 결합 전체다. 모눈종이의 교차점들이 가장 단순한 예인데, 같은 교차점 전체를 $(5,3)$ 과 $(8,5)$ 처럼 길고 거의 평행한 두 벡터의 정수 결합으로도 만들 수 있고, 그 두 벡터만 보아서는 원점에서 가장 가까운 교차점이 어디인지 드러나지 않는다. 격자 이론은 이런 기저를 짧고 거의 직교하는 기저로 바꾸는 방법과 그 방법의 한계를 다룬다.

# 직관

평면의 두 벡터 $(5,3)$ 과 $(8,5)$ 의 정수 결합을 전부 모은다. 두 벡터의 길이는 $\sqrt{34}\approx 5.8$ 과 $\sqrt{89}\approx 9.4$ 다. 이 점들 가운데 원점에서 가장 가까운 것이 어디인지 묻는다.

$5\cdot(5,3)-3\cdot(8,5)=(1,0)$ 이고 $-8\cdot(5,3)+5\cdot(8,5)=(0,1)$ 이다. 그러므로 두 벡터의 정수 결합은 정수 좌표점 전체이고, 길이 $1$ 인 점 $(1,0)$ 이 들어 있다. 처음 두 벡터는 거의 같은 방향을 가리켜서, 계수를 작게 잡은 결합만 보면 이 짧은 점이 나오지 않는다.

같은 점집합을 만드는 두 벡터의 쌍은 여럿이지만, 두 벡터가 만드는 평행사변형의 넓이는 바뀌지 않는다. $(5,3),(8,5)$ 의 넓이는 $\vert 5\cdot 5-3\cdot 8\vert=1$ 이고 $(1,0),(0,1)$ 의 넓이도 $1$ 이다. 넓이가 작으면 점이 촘촘하므로 원점 가까이에 점이 있어야 한다.

# 정의

## 격자와 기저

$b_1,\dots,b_m\in\mathbb R^n$ 이 선형독립일 때 다음 집합을 격자라 하고, $b_1,\dots,b_m$ 을 그 **기저(basis)** 라 한다.

$$
L=\Big\lbrace\sum_{i=1}^m z_ib_i\thinspace :\thinspace z_i\in\mathbb Z\Big\rbrace
$$

$B$ 를 $b_i$ 를 행으로 갖는 행렬이라 하면 $L=\lbrace zB:z\in\mathbb Z^m\rbrace$ 이다. $m=n$ 이면 격자가 **완전계수(full rank)** 라 한다. 아래에서 격자는 모두 완전계수다. 직관 절의 $(5,3),(8,5)$ 와 $(1,0),(0,1)$ 은 같은 완전계수 격자 $\mathbb Z^2$ 의 두 기저다.

## 행렬식과 기본영역

$$
\det L=\vert\det B\vert,\qquad \mathcal P(B)=\Big\lbrace\sum t_ib_i:t_i\in[0,1)\Big\rbrace
$$

$\det B$ 는 [행렬](matrices.md) $B$ 의 [행렬식](determinants.md)이다. $\det L$ 을 격자의 **행렬식(determinant)** 이라 하고, $\mathcal P(B)$ 를 기저 $B$ 의 **기본영역(fundamental domain)** 이라 한다. $\mathcal P(B)$ 의 부피가 $\det L$ 이다. $\mathbb Z^2$ 에서 $\det L=1$ 이고, $(5,3),(8,5)$ 의 기본영역은 넓이 $1$ 인 가늘고 긴 평행사변형이다.

정수 성분의 정사각행렬 $U$ 로 $\det U=\pm1$ 인 것을 **단모듈러 행렬(unimodular matrix)** 이라 한다.

$U$ 의 행이 $(5,3),(8,5)$ 이면 $\det U=25-24=1$ 이므로 $U$ 는 단모듈러 행렬이다. 표준기저를 행으로 둔 단위행렬에 $U$ 를 곱하면 $U$ 자신이 되어, $U$ 가 표준기저를 $(5,3),(8,5)$ 로 바꾼다.

## 연속 최소

$$
\lambda_k(L)=\min\lbrace r\gt 0:\thinspace \dim\mathrm{span}(L\cap \bar B(0,r))\ge k\rbrace
$$

$\lambda_k(L)$ 을 $k$ 번째 **연속 최소(successive minimum)** 라 한다. 반지름 $r$ 인 닫힌 공 안에서 선형독립인 격자벡터 $k$ 개를 찾을 수 있는 가장 작은 $r$ 이다. $\lambda_1$ 은 $0$ 이 아닌 가장 짧은 격자벡터의 길이다. $\mathbb Z^2$ 에서는 $\lambda_1=\lambda_2=1$ 이고, $(1,0),(0,3)$ 이 생성하는 격자에서는 $\lambda_1=1$, $\lambda_2=3$ 이다.

## 쌍대격자

$$
L^\ast=\lbrace y\in\mathrm{span}(L):\thinspace \langle y,x\rangle\in\mathbb Z\text{ for all }x\in L\rbrace
$$

$L^\ast$ 를 $L$ 의 **쌍대격자(dual lattice)** 라 한다. $(2,0),(0,3)$ 이 생성하는 격자의 쌍대격자는 $(1/2,0),(0,1/3)$ 이 생성하고, 행렬식은 $6$ 과 $1/6$ 이다.

## 계산 문제

기저가 주어질 때 길이가 $\lambda_1$ 인 격자벡터를 찾는 것이 [최단벡터 문제](shortest-vector-problem.md)이다. 목표점 $t\in\mathbb R^n$ 에 가장 가까운 격자점을 찾는 것이 **최근접벡터 문제(closest vector problem, CVP)** 다. $\mathbb Z^2$ 에서 $t=(0.4,0.6)$ 의 최근접 격자점은 $(0,1)$ 이다. 두 문제 모두 정확판과, 최적값의 $\gamma$ 배 이내를 요구하는 근사판이 있다.

## LLL 축소 기저

기저 $b_1,\dots,b_n$ 에 Gram–Schmidt 직교화(Gram–Schmidt orthogonalization)를 적용한 벡터를 $b_i^\ast$, 계수를 $\mu_{ij}=\langle b_i,b_j^\ast\rangle/\Vert b_j^\ast\Vert^2$ 라 한다. 다음 두 조건을 만족하는 기저를 매개변수 $\delta\in(1/4,1)$ 의 **LLL 축소 기저(Lenstra–Lenstra–Lovász reduced basis)** 라 한다.

$$
\vert\mu_{ij}\vert\le\tfrac12\thinspace (j\lt i),\qquad
\delta\Vert b_{k-1}^\ast\Vert^2\le\Vert b_k^\ast\Vert^2+\mu_{k,k-1}^2\Vert b_{k-1}^\ast\Vert^2
$$

첫째를 크기 축소(size reduction) 조건, 둘째를 Lovász 조건(Lovász condition)이라 한다. $(5,3),(8,5)$ 에서 $\mu_{21}=(40+15)/34=55/34\gt 1/2$ 이므로 첫째 조건이 깨져 축소 기저가 아니다. $(1,0),(0,1)$ 은 $\mu_{21}=0$, $b_2^\ast=(0,1)$ 이므로 두 조건을 만족한다.

# 성질

## 격자의 다른 특징

$\mathbb R^n$ 의 부분집합이 완전계수 격자일 필요충분조건은 덧셈에 대한 이산 부분군(discrete subgroup)이고 $\mathbb R^n$ 을 생성하는 것이다. $(1,0)$ 과 $(\sqrt2,0)$ 이 생성하는 덧셈 부분군은 $x$ 축 위에서 조밀하므로 이산이 아니고 격자가 아니다.

두 기저 $B,B'$ 가 같은 격자를 만들 필요충분조건은 $B'=UB$ 인 단모듈러 행렬 $U$ 가 존재하는 것이다. $\det U=\pm1$ 이므로 $\det L$ 은 기저에 의존하지 않는다. Gram 행렬(Gram matrix) $G=BB^{\mathsf T}$ 에 대해 $\det L=\sqrt{\det G}$ 이므로, $\det L$ 은 기저벡터들의 [내적](inner-product-spaces.md)만으로 정해진다.

연속 최소를 이루는 벡터들이 기저가 되지 않을 수 있다. $\mathbb Z^4$ 에 $(\tfrac12,\tfrac12,\tfrac12,\tfrac12)$ 를 더해 생성한 격자에서 $\lambda_1=\dots=\lambda_4=1$ 이고 표준기저벡터 넷이 이를 이루지만, 그 넷은 $(\tfrac12,\tfrac12,\tfrac12,\tfrac12)$ 를 생성하지 않는다.

$B$ 가 $L$ 의 기저이면 $(B^{-1})^{\mathsf T}$ 가 $L^\ast$ 의 기저이고 $\det L^\ast=1/\det L$ 이다. 전이 정리(transference theorem)는 $1\le\lambda_1(L)\lambda_n(L^\ast)\le n$ 을 준다.

## Minkowski 정리

**Minkowski 정리(Minkowski's theorem)** 는 다음이다. 원점 대칭인 [볼록](convexity.md)집합 $S$ 에 대해 $\mathrm{vol}(S)\gt 2^n\det L$ 이면 $S\cap L\ne\lbrace 0\rbrace$ 이다. 반지름 $r$ 인 공에 적용하면

$$
\lambda_1(L)\le 2\Big(\frac{\det L}{V_n}\Big)^{1/n},\qquad V_n=\mathrm{vol}(B(0,1))
$$

이고 $V_n\approx(2\pi e/n)^{n/2}$ 를 넣으면 $\lambda_1=O(\sqrt n)(\det L)^{1/n}$ 이다.

증명의 요지. $\frac12S$ 를 기본영역들로 잘라 한 기본영역 안으로 평행이동해 모으면, 총 부피가 기본영역의 부피보다 크므로 두 조각이 겹친다. 이것은 [비둘기집 원리](pigeonhole-principle.md)의 연속판이다. 겹치는 두 점 $\frac12x,\frac12y$ 의 차 $\frac12(x-y)$ 가 격자점이고, $S$ 가 대칭이고 볼록이므로 $\frac12x+\frac12(-y)\in S$ 다. 증명은 격자점의 존재만 보이고 그 점을 찾는 방법은 주지 않는다.

Hermite 상수(Hermite constant) $\gamma_n$ 은 $n$ 차원 격자 전체에서 $\lambda_1^2/(\det L)^{2/n}$ 의 최댓값이다. $\gamma_n$ 의 정확한 값은 $n\le 8$ 과 $n=24$ 에서 알려져 있고, $n=8$ 과 $n=24$ 에서 최댓값을 주는 격자가 $E_8$ 과 [Leech 격자](leech-lattice.md)다.

Minkowski 둘째 정리(Minkowski's second theorem)는 연속 최소 전체의 곱을 묶는다.

$$
\frac{2^n}{n!}\det L\le\prod_{k=1}^n\lambda_k\cdot V_n\le 2^n\det L
$$

## Gauss 추정

무작위 격자에서는 반지름 $r$ 공 안의 격자점 개수가 대략 $V_nr^n/\det L$ 이다. 이 값이 $1$ 이 되는 $r$ 을 최단벡터의 길이로 예상한 것이 Gauss 추정(Gaussian heuristic)이다.

$$
\lambda_1(L)\approx\sqrt{\frac n{2\pi e}}\thinspace(\det L)^{1/n}
$$

Minkowski 상계와 상수배만 다르다. 무작위 격자에서 실제 값과 잘 맞으므로 암호의 매개변수를 고르는 기준으로 쓴다.

## LLL 알고리즘

LLL 알고리즘(LLL algorithm)은 크기 축소와, Lovász 조건이 깨진 인접한 두 벡터의 교환을 번갈아 해서 다항시간에 LLL 축소 기저를 낸다. $(5,3),(8,5)$ 에서는 $b_2$ 에서 $2b_1$ 을 빼 $(-2,-1)$ 을 얻고, 교환과 크기 축소를 되풀이하면 $(1,0),(0,1)$ 꼴의 기저에 이른다. 정수 퍼텐셜 $\prod\Vert b_i^\ast\Vert^{2(n-i+1)}$ 이 교환마다 $\delta$ 배 이하로 줄어들어 교환 횟수가 다항식으로 묶인다.

$\delta=3/4$ 이면 LLL 축소 기저의 첫 벡터가

$$
\Vert b_1\Vert\le 2^{(n-1)/2}\lambda_1(L)
$$

를 만족한다. 근사비는 차원에 지수적이지만, 실제 입력에서는 이 상한보다 훨씬 짧은 벡터가 나온다.

근사비를 줄이려면 블록 단위로 최단벡터 문제를 정확히 푸는 BKZ(block Korkine–Zolotarev) 알고리즘을 쓴다. 블록 크기 $\beta$ 에서 근사비가 대략 $\beta^{n/\beta}$ 이고 비용이 $2^{O(\beta)}$ 다.

# 활용

## 수의 기하학

$p\equiv1\pmod4$ 인 소수는 두 제곱수의 합이라는 Fermat 두 제곱수 정리(Fermat's theorem on sums of two squares)는 Minkowski 정리로 증명된다. $x^2\equiv-1\pmod p$ 인 $x$ 가 있고, $(1,x),(0,p)$ 가 생성하는 격자는 행렬식이 $p$ 이며 모든 격자점 $(a,b)$ 가 $a^2+b^2\equiv0\pmod p$ 를 만족한다. 반지름 $\sqrt{2p}$ 인 열린 원의 넓이가 $2\pi p\gt 4p$ 이므로 그 안에 $0$ 이 아닌 격자점이 있고, $0\lt a^2+b^2\lt 2p$ 이면서 $p$ 의 배수이므로 $a^2+b^2=p$ 다.

[대수적 수체](algebraic-number-fields.md)의 정수환과 단원군의 로그 상을 격자로 보고 Minkowski 정리를 적용하면 류수의 유한성과 [Dirichlet 단수 정리](dirichlet-unit-theorem.md)가 증명된다. 격자와 볼록체로 정수 문제를 다루는 분야를 수의 기하학(geometry of numbers)이라 한다.

## LLL 의 응용

LLL 알고리즘은 1982 년에 유리계수 다항식을 다항시간에 인수분해하려고 만들어졌다. 근을 수치로 구한 뒤 그 근을 갖는 인수의 계수 벡터를 짧은 격자벡터로 찾는다.

암호 해독에도 쓰인다. Merkle–Hellman 배낭 암호(knapsack cryptosystem)가 LLL 로 깨졌다. Coppersmith 방법(Coppersmith's method)과 그 변형은 공개 지수가 작거나, 비밀 지수가 $d\lt N^{0.292}$ 이거나, 소인수의 상위 비트가 새면 [RSA](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)의 비밀을 찾는다. 난수생성기의 출력 일부로 내부 상태를 복원하는 공격도 짧은 격자벡터 찾기로 바뀐다.

## 부호와 채우기

[오류정정부호](error-correcting-codes.md)가 Hamming 거리로 떨어진 점들을 고르듯 격자는 Euclid 거리로 떨어진 점들을 고른다. 최소거리가 $\lambda_1$ 이고 복호가 최근접벡터 문제다. Gauss 잡음 채널에서 격자 부호의 전송률이 용량에 접근한다.

$E_8$ 과 Leech 격자가 8 차원과 24 차원에서 모든 [구 채우기](sphere-packing.md) 가운데 밀도가 최대라는 것이 2016 년과 2017 년에 증명되었다.

## 후양자 암호

나쁜 기저를 공개키로, 좋은 기저를 비밀키로 쓰는 것이 격자 암호의 원형이다. 현대적 구성은 기저 대신 잡음 섞인 선형방정식을 쓰고, 그 어려움은 $\gamma$ 가 차원의 다항식인 근사 최단벡터 문제의 어려움으로 환원된다. 양자 알고리즘으로 빠르게 풀리는 방법이 알려져 있지 않고 최악 경우에서 평균 경우로의 환원(worst-case to average-case reduction)이 있어, [격자 기반 후양자 암호](post-quantum-cryptography.md)가 연구된다.

미국 국립표준기술연구소(National Institute of Standards and Technology, NIST)가 2024 년에 표준으로 정한 후양자 알고리즘 셋 가운데 둘이 격자 기반이다. Gauss 추정보다 훨씬 짧은 벡터를 심어 둔 격자가 그런 암호의 비밀키다.

# 연관 문서

## 선수지식

- [내적 공간](inner-product-spaces.md)
- [행렬식](determinants.md)
- [정수론 개관](number-theory-overview.md)

## 더 알아보기

### 구조와 알고리즘

- [격자 부분군](lattice-subgroups.md)
- [최단벡터 문제](shortest-vector-problem.md)

### 채우기와 쪽매

- [구 채우기](sphere-packing.md)
- [Penrose 쪽매](penrose-tiling.md)

### 생성함수와 특수 격자

- [theta 급수](theta-series.md)
- [Leech 격자](leech-lattice.md)

#number_theory #linear_algebra #cryptography
