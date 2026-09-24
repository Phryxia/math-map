# 격자

# 개요

선형독립인 벡터 $b_1,\dots,b_n$ 의 정수 결합 전체가 **격자**다. [벡터공간](vector-spaces.md)에서 정수 계수만 허용해 이산화한 대상이고, $\mathbb R^n$ 의 정수 좌표점들이 가장 단순한 예다.

한 격자를 만드는 기저는 무수히 많고, 짧고 거의 직교하는 좋은 기저와 길고 거의 평행한 나쁜 기저가 같은 점집합을 나타낸다. 좋은 기저가 있으면 임의의 점에 가장 가까운 격자점을 쉽게 찾지만 나쁜 기저만으로는 그 계산이 어렵다. 격자 기반 암호가 이 비대칭에 기댄다.

[내적](inner-product-spaces.md)이 짧음과 직교를 정의하고 Gram–Schmidt 직교화를 주며, [행렬식](determinants.md)이 기저를 바꿔도 변하지 않는 기본영역의 부피를 준다. 짧은 벡터의 길이와 이 부피 사이의 관계가 격자 이론의 첫 정리들이다.

# 직관

## 같은 격자, 다른 기저

$\mathbb Z^2$ 에서 $(1,0),(0,1)$ 이 기저이고 $(201,37),(409,75)$ 도 기저다. 행렬식이 $\pm1$ 인 정수행렬을 곱한 것이라 역행렬도 정수행렬이고 서로를 정수 결합으로 표현한다.

두 번째 기저에서는 원점 근처의 짧은 벡터가 보이지 않는다. 두 기저벡터의 길이가 200 이 넘는데 격자에는 길이 1 인 벡터가 있다.

## 기본영역의 부피

기저가 만드는 평행육면체의 부피는 $|\det B|$ 다. 기저를 바꾸는 행렬의 행렬식이 $\pm1$ 이므로 이 값은 기저에 무관한 격자의 불변량이고, 격자점의 밀도가 $1/|\det B|$ 다.

부피가 작으면 짧은 벡터가 있으리라는 예상을 Minkowski 의 정리가 정량화한다.

## Minkowski 의 볼록체 정리

원점 대칭인 [볼록](convexity.md) 집합 $S$ 의 부피가 $2^n\det L$ 보다 크면, $S$ 는 원점이 아닌 격자점을 반드시 포함한다.

증명은 [비둘기집 원리](pigeonhole-principle.md)의 연속판이다. $S$ 를 절반으로 축소한 $\frac12S$ 를 기본영역들로 잘라 한 칸에 겹쳐 쌓으면 총 부피가 칸의 부피보다 크므로 두 조각이 겹친다. 겹치는 두 점 $\frac12 x,\frac12 y$ 의 차 $\frac12(x-y)$ 가 격자점이고, 대칭성과 볼록성이 그것이 $S$ 안에 있음을 보장한다.

공 $\Vert v\Vert\le r$ 에 적용하면 최단벡터의 길이 상계가 나온다. 존재만 말하고 위치는 말하지 않는 비구성적 정리이며, 그 벡터를 찾는 문제가 계산적으로 어렵다.

# 정의

## 격자와 기저

$b_1,\dots,b_m\in\mathbb R^n$ 이 선형독립일 때 다음 집합이 격자다.

$$
L=\Big\lbrace\sum_{i=1}^m z_ib_i\ :\ z_i\in\mathbb Z\Big\rbrace
$$

$B$ 를 $b_i$ 를 행으로 갖는 행렬이라 하면 $L=\lbrace zB:z\in\mathbb Z^m\rbrace$ 이다. $m=n$ 이면 완전계수라 한다. 아래에서 격자는 모두 완전계수다.

동치인 정의로 격자는 $\mathbb R^n$ 의 이산 부분군이다. $(1,\sqrt2)$ 가 생성하는 $\mathbb Z$ 결합은 $\mathbb R^2$ 에서 조밀하므로 격자가 아니다.

## 행렬식과 기본영역

$$
\det L=|\det B|,\qquad \mathcal P(B)=\Big\lbrace\sum t_ib_i:t_i\in[0,1)\Big\rbrace
$$

$\mathcal P(B)$ 가 기본영역이고 그 부피가 $\det L$ 이다. 두 기저 $B,B'$ 가 같은 격자를 만들 필요충분조건은 $B'=UB$ 인 정수행렬 $U$ 로 $\det U=\pm1$ 인 것이 존재하는 것이며, 그런 $U$ 를 단모듈러 행렬이라 한다.

Gram 행렬 $G=BB^{\mathsf T}$ 에 대해 $\det L=\sqrt{\det G}$ 이므로, 격자가 $\mathbb R^n$ 에 놓인 방식과 무관하게 내적 정보만으로 결정된다.

## 연속 최소

$$
\lambda_k(L)=\min\lbrace r\gt 0:\ \dim\mathrm{span}(L\cap \bar B(0,r))\ge k\rbrace
$$

$\lambda_1$ 이 0 이 아닌 최단벡터의 길이다. $\lambda_k$ 는 선형독립인 격자벡터 $k$ 개를 반지름 $r$ 공 안에서 찾을 수 있는 최소 반지름이다.

$\lambda_1,\dots,\lambda_n$ 을 달성하는 벡터들이 기저가 되지 않을 수 있고, 차원 4 이상에서 반례가 있다.

## 쌍대격자

$$
L^\ast=\lbrace y\in\mathrm{span}(L):\ \langle y,x\rangle\in\mathbb Z\ \ \forall x\in L\rbrace
$$

$(B^{-1})^{\mathsf T}$ 가 $L^\ast$ 의 기저이고 $\det L^\ast=1/\det L$ 이므로 $L$ 이 촘촘하면 $L^\ast$ 가 성기다. 전이 정리들이 $\lambda_1(L)$ 과 $\lambda_n(L^\ast)$ 를 묶고, 암호의 어려움 증명에서 두 격자를 오가는 논증이 쓰인다.

## 계산 문제

기저가 주어질 때 최단 비영 벡터를 찾는 것이 [최단벡터 문제](shortest-vector-problem.md)이고, 목표점 $t\in\mathbb R^n$ 에 가장 가까운 격자점을 찾는 것이 최근접벡터 문제다. 둘 다 정확판과 최적의 $\gamma$ 배 이내를 요구하는 근사판이 있다.

격자 기반 암호는 $\gamma$ 가 차원 $n$ 의 다항식인 근사판에 파라미터를 놓는다.

# 성질

## Minkowski 의 정리

원점 대칭인 볼록집합 $S$ 에 대해 $\mathrm{vol}(S)\gt 2^n\det L$ 이면 $S\cap L\ne\lbrace 0\rbrace$ 이다. 반지름 $r$ 인 공에 적용하면

$$
\lambda_1(L)\le 2\Big(\frac{\det L}{V_n}\Big)^{1/n},\qquad V_n=\mathrm{vol}(B(0,1))
$$

이고 $V_n\approx(2\pi e/n)^{n/2}$ 를 넣으면 $\lambda_1=O(\sqrt n)(\det L)^{1/n}$ 이다.

Hermite 상수로는 $\lambda_1\le\sqrt{\gamma_n}(\det L)^{1/n}$ 이고, $\gamma_n$ 의 정확한 값은 $n\le8$ 과 $n=24$ 에서만 알려져 있다. 이 차원들에서 최적값을 주는 격자가 $E_8$ 과 Leech 격자이며 구 채우기 문제의 답이 나온 차원과 같다.

둘째 정리는 연속 최소 전체를 묶는다.

$$
\frac{2^n}{n!}\det L\le\prod_{k=1}^n\lambda_k\cdot V_n\le 2^n\det L
$$

## Gauss 추정

무작위 격자에서는 반지름 $r$ 공 안의 격자점 개수가 대략 $V_nr^n/\det L$ 이다. 이것이 1 이 되는 지점을 최단벡터의 길이로 예상하면

$$
\lambda_1(L)\approx\sqrt{\frac n{2\pi e}}\thinspace(\det L)^{1/n}
$$

Minkowski 상계와 상수배만 다르고 무작위 격자에서 잘 맞아 암호 파라미터를 고르는 기준이 된다. 이 추정보다 훨씬 짧은 벡터를 심어 둔 격자가 암호에서 비밀 역할을 한다.

## LLL 축소

좋은 기저를 찾는 문제는 어렵지만 어느 정도 좋은 기저는 다항시간에 찾을 수 있다. Gram–Schmidt 직교화를 $b_i^\ast$ , 계수를 $\mu_{ij}$ 라 할 때 다음 두 조건을 만족하면 **LLL**(Lenstra–Lenstra–Lovász) **축소 기저**다.

$$
|\mu_{ij}|\le\tfrac12\ (j\lt i),\qquad
\delta\Vert b_{k-1}^\ast\Vert^2\le\Vert b_k^\ast\Vert^2+\mu_{k,k-1}^2\Vert b_{k-1}^\ast\Vert^2
$$

둘째가 Lovász 조건으로, 인접한 두 벡터의 순서가 크게 잘못되지 않았음을 요구한다. $\delta=3/4$ 로 잡으면 다음 보장이 나온다.

$$
\Vert b_1\Vert\le 2^{(n-1)/2}\lambda_1(L)
$$

근사비가 지수적이지만 차원이 작으면 쓸모 있고 실제 입력에서는 보장보다 잘 작동한다. 알고리즘은 크기 축소와 교환을 번갈아 하며, $\prod\Vert b_i^\ast\Vert^{n-i}$ 꼴의 정수 퍼텐셜이 교환마다 상수배로 줄어들어 다항시간이 보장된다.

지수 근사비를 줄이려면 블록 단위로 정확히 푸는 BKZ(block Korkine–Zolotarev) 계열을 쓴다. 블록 크기 $\beta$ 에서 근사비가 대략 $\beta^{n/\beta}$ 이고 비용이 $2^{O(\beta)}$ 이며, 실무의 파라미터가 이 절충 곡선 위에서 정해진다.

# 활용

## 정수론의 존재 정리들

Fermat 의 두 제곱수 정리를 Minkowski 로 증명할 수 있다. $p\equiv1\pmod4$ 이면 $x^2\equiv-1\pmod p$ 인 $x$ 가 있고, $(1,x),(0,p)$ 가 생성하는 격자는 행렬식이 $p$ 이며 모든 격자점 $(a,b)$ 가 $a^2+b^2\equiv0\pmod p$ 를 만족한다. 반지름 $\sqrt{2p}$ 인 원의 넓이 $2\pi p\gt 4p$ 이므로 그 안에 격자점이 있고, $0\lt a^2+b^2\lt 2p$ 이면서 $p$ 의 배수이므로 $a^2+b^2=p$ 다.

같은 도구가 [대수적 수체](algebraic-number-fields.md)에서 류수의 유한성과 Dirichlet 단원 정리를 준다. 격자와 볼록체의 관계가 수의 기하학의 바탕이다.

## LLL 의 응용

LLL 은 1982 년에 유리계수 다항식의 인수분해를 다항시간에 하려고 만들어졌다. 근을 수치로 구한 뒤 인수의 계수 벡터를 짧은 격자벡터로 찾는 방식이다.

암호 해독에도 쓰인다. 배낭 암호 계열이 거의 전부 LLL 로 무너졌고, Coppersmith 의 방법은 지수가 작거나 비밀키 $d\lt N^{0.292}$ 이거나 소인수의 상위 비트가 새면 [RSA](rsa-cryptosystem.md)(Rivest–Shamir–Adleman)를 깬다. 난수생성기의 출력 일부로 상태를 복원하는 공격도 같은 틀이다.

짧은 벡터를 찾으면 풀리는 문제로 번역되면 LLL 이 적용되므로, 격자는 공격 도구이자 방어 수단이다.

## 부호와 채움

격자는 [오류정정부호](error-correcting-codes.md)의 연속판이다. 부호가 Hamming 거리로 떨어진 점들을 고르듯 격자는 Euclid 거리로 떨어진 점들을 고른다. 최소거리가 $\lambda_1$ 이고 복호가 **CVP**(closest vector problem)다.

Gauss 잡음 채널에서 격자 부호가 용량에 접근하고, $E_8$ 과 Leech 격자가 각 차원에서 최적의 구 채우기를 준다는 것이 2016 년과 2017 년에 증명되었다. 통신의 변조 설계와 구 채우기 문제가 같은 최적화다.

## 후양자 암호로

나쁜 기저를 공개키로, 좋은 기저를 비밀키로 쓰는 것이 격자 암호의 원형이다. 현대적 구성은 기저 대신 잡음 섞인 선형방정식을 쓰지만 어려움의 근원은 격자의 근사 최단벡터 문제다. 양자 내성과 최악 경우 환산 때문에 표준화된 후양자 알고리즘의 주류가 되었다.

# 연관 문서

## 선수지식

- [내적 공간](inner-product-spaces.md)
- [행렬식](determinants.md)
- [정수론 개관](number-theory-overview.md)

## 더 알아보기

- [최단벡터 문제](shortest-vector-problem.md)
- [구 채우기](sphere-packing.md)
- [theta 급수](theta-series.md)

#number_theory #linear_algebra #cryptography
