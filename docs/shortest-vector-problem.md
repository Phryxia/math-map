# 최단벡터 문제

# 개요

[격자](lattices.md)의 기저가 주어졌을 때 0 이 아닌 가장 짧은 격자 벡터를 찾는 문제가 **최단벡터 문제**(shortest vector problem, SVP)다. 격자는 점집합이 같아도 기저가 무수히 많고, 짧고 거의 직교하는 기저와 길고 거의 평행한 기저가 같은 격자를 나타낸다. 나쁜 기저만 주어졌을 때 짧은 벡터를 찾는 계산 비용이 이 문제의 내용이다.

Minkowski 정리는 짧은 벡터의 존재를 보장하지만 찾는 절차를 주지 않는다. 존재와 계산 사이의 이 간극에 격자 기반 암호가 놓인다.

같은 자리에 목표점에 가장 가까운 격자점을 찾는 최근접벡터 문제(closest vector problem, CVP)와, 정확한 답 대신 $\gamma$ 배 이내를 요구하는 근사판이 있다. 어려움의 정도가 $\gamma$ 에 따라 달라지고, 암호가 쓰는 영역과 난해성이 증명된 영역이 서로 다른 구간이다.

# 직관

## 좋은 기저와 나쁜 기저의 비대칭

$\mathbb Z^2$ 를 기저 $(1,0),(0,1)$ 로 주면 최단 벡터가 눈에 보인다. 같은 격자를 $(1000,1),(1001,1)$ 로 주면 두 기저 벡터가 거의 평행하고 길다. 짧은 벡터 $(1,0)$ 은 두 기저 벡터의 차로 얻어지지만, 차원이 커지면 어느 정수 결합이 짧은 벡터를 주는지가 드러나지 않는다.

기저의 정수 결합으로 만들 수 있는 벡터는 무한히 많고, 짧은 것을 찾는 탐색 공간이 차원에 대해 지수적으로 커진다. 실수 계수를 허용하면 Gram–Schmidt 직교화로 즉시 풀리므로, 어려움은 계수가 정수라는 제약에서 온다.

# 정의

## SVP 와 CVP

격자 $L$ 의 최단벡터 문제는 $\lambda_1(L)=\Vert v\Vert$ 를 이루는 $v\in L\setminus\lbrace 0\rbrace$ 을 찾는 문제다.

$$
\lambda_1(L)=\min\lbrace \Vert v\Vert : v\in L,\ v\neq 0\rbrace
$$

입력은 $L$ 의 기저이고 노름은 보통 유클리드 노름이다. 최근접벡터 문제는 목표점 $t\in\mathbb R^n$ 에 대해 $\Vert t-v\Vert$ 를 최소로 하는 $v\in L$ 을 찾는 문제다.

## 근사판과 판정판

$\gamma\ge1$ 에 대한 근사판 $\mathrm{SVP}\_\gamma$ 는 $\Vert v\Vert\le\gamma\thinspace\lambda_1(L)$ 인 $v\in L\setminus\lbrace 0\rbrace$ 을 찾는 문제다. $\mathrm{CVP}\_\gamma$ 도 같은 방식으로 최적 거리의 $\gamma$ 배 이내를 요구한다.

판정판 $\mathrm{GapSVP}\_\gamma$ 는 입력이 $\lambda_1(L)\le1$ 인 경우와 $\lambda_1(L)\gt\gamma$ 인 경우 중 하나임이 보장될 때 어느 쪽인지 판정하는 문제다. 두 경우 사이의 격자는 입력으로 들어오지 않는다.

## 변형

- 최단독립벡터 문제(shortest independent vectors problem, SIVP): $\mathrm{SIVP}\_\gamma$ 는 연속 최소 $\lambda_n(L)$ 의 $\gamma$ 배 이내 길이인 일차독립 벡터 $n$ 개를 찾는다.
- 유계거리 복호(bounded distance decoding, BDD): 목표점이 격자에서 $\lambda_1(L)/2$ 보다 가까움이 보장된 CVP 다. 답이 유일하다.
- 무한노름판: $\Vert\cdot\Vert\_\infty$ 로 잰 SVP 다. 정확판이 결정적 환산 아래 $\mathrm{NP}$ 난해다.

# 성질

## 난해성

SVP 는 무작위 환산 아래 $\mathrm{NP}$ 난해하고, $\gamma$ 가 상수인 근사판도 그렇다.[^1] 무작위 환산이란 환산 알고리즘이 난수를 쓰고 유계 확률로 옳은 사례를 내놓는 것을 말하며, 결정적 환산으로 같은 결과를 얻는 것은 유클리드 노름에서는 알려져 있지 않다. CVP 쪽이 더 강해서, 정확판이 결정적 환산으로 $\mathrm{NP}$ 난해하고 $\mathrm{SVP}\_\gamma$ 가 $\mathrm{CVP}\_\gamma$ 로 다항시간 환산된다.

## 난해성의 상한

$\gamma\ge\sqrt{n/\log n}$ 이면 $\mathrm{GapSVP}\_\gamma$ 가 $\mathrm{NP}\cap\mathrm{coNP}$ 에 든다.[^2] 이 종류에 드는 문제가 $\mathrm{NP}$ 난해하면 다항 계층이 붕괴하므로, 이 구간의 근사에서는 난해성 증명을 기대하지 않는다.

난해성이 증명된 인자와 이 상한 사이에 암호가 쓰는 구간이 있다. 암호는 $\gamma$ 가 $n$ 의 다항식인 영역에 파라미터를 놓는다.

## 알고리즘

| 알고리즘 | 근사율 | 시간 |
| --- | --- | --- |
| LLL(Lenstra–Lenstra–Lovász) 축소 | $2^{(n-1)/2}$ | 다항 |
| BKZ(block Korkine–Zolotarev), 블록 크기 $\beta$ | $\beta^{\Theta(n/\beta)}$ | $2^{\Theta(\beta)}$ 배 다항 |
| Kannan 열거 | $1$ | $n^{\Theta(n)}$ |
| AKS(Ajtai–Kumar–Sivakumar) 체 | $1$ | $2^{\Theta(n)}$ |

LLL 축소는 다항시간에 지수적 근사율을 주고, 블록 크기를 키우는 BKZ 가 근사율과 시간을 잇는 절충을 준다. 정확한 답을 내는 알고리즘은 시간이 차원에 대해 지수적이며, 양자 알고리즘도 지수를 상수배 줄이는 데 그친다. 소인수분해와 [이산로그](discrete-logarithm.md)를 다항시간에 푸는 Shor 알고리즘은 아벨 숨은 부분군 구조를 쓰는데 격자 문제에는 그 구조가 없다.

## 최악 경우에서 평균 경우로

무작위로 뽑은 사례 하나를 푸는 알고리즘에서 모든 격자의 근사 문제를 푸는 알고리즘을 만드는 환산이 있다. 짧은 정수해 문제(short integer solution, SIS)의 평균 경우가 $\mathrm{SIVP}\_\gamma$ 의 최악 경우만큼 어렵고,[^3] 오류 있는 학습(learning with errors, LWE)의 평균 경우가 $\mathrm{GapSVP}\_\gamma$ 와 $\mathrm{SIVP}\_\gamma$ 의 최악 경우만큼 어렵다.[^4] 파라미터를 무작위로 뽑는 암호 구성이 쉬운 사례에 걸릴 위험을 이 환산이 배제한다.

# 활용

## 격자 기반 암호

[격자 기반 후양자 암호](post-quantum-cryptography.md)의 안전성 가정이 근사 SVP 의 어려움이다. 나쁜 기저를 공개키로, 좋은 기저를 비밀키로 두는 것이 원형이고, 현대적 구성은 기저 대신 LWE 표본을 공개한다. 복호가 BDD 이고 공격이 근사 SVP 다.

## 정수 관계의 탐색

LLL 축소로 얻은 짧은 벡터가 주어진 실수들 사이의 정수 관계를 준다. 대수적 수의 최소다항식 복원, 낮은 차수 다항식의 인수분해, 작은 지수를 쓴 [RSA](rsa-cryptosystem.md)(Rivest–Shamir–Adleman) 의 공격이 이 방식이다.

## 부호의 복호

선형부호의 최대우도 복호가 [유한체](finite-fields.md) 위의 CVP 이고, 실수 격자의 BDD 와 같은 구조다. 다중안테나 통신의 신호 검출에도 같은 열거 알고리즘을 쓴다.

[^1]: Miklós Ajtai, "The shortest vector problem in $L_2$ is NP-hard for randomized reductions", STOC 1998. 상수 인자 근사판으로의 확장은 Daniele Micciancio, "The shortest vector in a lattice is hard to approximate to within some constant", FOCS 1998.

[^2]: Oded Goldreich, Shafi Goldwasser, "On the limits of non-approximability of lattice problems", STOC 1998. 이 논문은 $\mathrm{NP}\cap\mathrm{coAM}$ 을 보였고, $\mathrm{NP}\cap\mathrm{coNP}$ 는 Dorit Aharonov, Oded Regev, "Lattice problems in NP $\cap$ coNP", FOCS 2004 가 $\gamma=\sqrt n$ 에서 보였다.

[^3]: Miklós Ajtai, "Generating hard instances of lattice problems", STOC 1996.

[^4]: Oded Regev, "On lattices, learning with errors, random linear codes, and cryptography", STOC 2005. 환산이 양자 알고리즘을 쓰며, 고전 환산은 Chris Peikert, "Public-key cryptosystems from the worst-case shortest vector problem", STOC 2009 에 있다.

# 연관 문서

## 선수지식

- [격자](lattices.md)

## 더 알아보기

- [격자 기반 후양자 암호](post-quantum-cryptography.md)

#computation #cryptography #linear_algebra #number_theory
