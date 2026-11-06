# Simon 알고리즘

# 개요

**Simon 알고리즘(Simon's algorithm)** 은 두 입력의 값이 같아지는 숨은 규칙을, 고전적으로는 지수 번 걸리는 질의를 $n$ 번 남짓으로 찾아내는 양자 알고리즘이다. 길이 $n$ 인 비트열 함수 $f$ 가 비밀 비트열 $s$ 에 대해 $f(x)=f(x\oplus s)$ 이고 그 밖의 두 입력에서는 값이 다르다고 하자. 고전적으로는 같은 값이 나오는 두 입력을 만날 때까지 질의해야 하고 질의가 $2^{n/2}$ 규모로 든다. Simon 알고리즘은 양자 회로로 $s$ 와 비트 내적이 $0$ 인 비트열을 하나씩 뽑고, 그런 비트열 $n-1$ 개로 세운 일차연립방정식을 풀어 $s$ 를 얻는다.

# 직관

$n=2$, $s=11$ 이라 한다. $f(00)=f(11)=a$ 이고 $f(01)=f(10)=b$ 이며 $a\ne b$ 다. 고전적으로는 $f(00)$, $f(01)$, $f(10)$ 을 차례로 물어 $f(01)=f(10)$ 을 보고서야 $s=01\oplus 10=11$ 을 안다.

[양자 회로](quantum-circuits.md)로는 네 입력을 같은 진폭으로 겹쳐 놓고 $f$ 를 한 번 계산해 $\tfrac12\sum_x\vert x\rangle\vert f(x)\rangle$ 을 만든다. 둘째 레지스터를 측정해 $a$ 가 나오면 첫 레지스터에는 $\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 만 남는다. 여기에 큐비트마다 $H$ 를 걸면 $\vert 01\rangle$ 과 $\vert 10\rangle$ 의 진폭은 $\tfrac12-\tfrac12=0$ 으로 지워지고 $\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 이 된다. 측정하면 $00$ 이나 $11$ 이 나온다.

나오는 비트열 $y$ 는 언제나 $y\cdot s=y\_1s\_1\oplus y\_2s\_2=0$ 을 만족한다. $y=11$ 이 나오면 $s\_1\oplus s\_2=0$ 이고 $s\ne 00$ 이므로 $s=11$ 이다. $n$ 이 커져도 한 번 돌릴 때마다 $s$ 에 대한 일차방정식이 하나씩 나온다.

# 정의

## Simon 문제

$f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace^m$ 과 $s\in\lbrace 0,1\rbrace^n$, $s\ne 0$ 이 모든 $x,y$ 에서

$$
f(x)=f(y)\iff y\in\lbrace x,\thinspace x\oplus s\rbrace
$$

를 만족한다. $f$ 에 질의만 할 수 있을 때 $s$ 를 찾는 문제를 **Simon 문제(Simon's problem)** 라 한다. 질의는 $\vert x\rangle\vert b\rangle\mapsto\vert x\rangle\vert b\oplus f(x)\rangle$ 를 한 번 거는 것이다. 직관 절의 $f$ 는 $n=2$, $s=11$ 인 경우다.

## 한 회의 회로

1. 큐비트 $n$ 개에 $H^{\otimes n}$ 을 걸어 $2^{-n/2}\sum_x\vert x\rangle\vert 0\rangle$ 을 만든다.
2. 질의를 한 번 걸어 $2^{-n/2}\sum_x\vert x\rangle\vert f(x)\rangle$ 을 만든다.
3. 둘째 레지스터를 측정한다. 결과가 $f(x\_0)$ 이면 첫 레지스터는 $\tfrac1{\sqrt 2}(\vert x\_0\rangle+\vert x\_0\oplus s\rangle)$ 이다.
4. 첫 레지스터에 $H^{\otimes n}$ 을 걸고 측정해 $y$ 를 얻는다.

$H^{\otimes n}\vert x\rangle=2^{-n/2}\sum_y(-1)^{x\cdot y}\vert y\rangle$ 이므로 4단계 직전의 $y$ 의 진폭은

$$
2^{-(n+1)/2}(-1)^{x\_0\cdot y}\left(1+(-1)^{s\cdot y}\right)
$$

이다. $s\cdot y=1$ 인 $y$ 의 진폭은 $0$ 이고, $s\cdot y=0$ 인 $2^{n-1}$ 개의 $y$ 가 각각 확률 $2^{-(n-1)}$ 로 나온다. 직관 절에서 $\vert 01\rangle$ 과 $\vert 10\rangle$ 이 지워진 것이 $s\cdot y=1$ 인 경우다.

## Simon 알고리즘

한 회의 회로를 되풀이해 $y\_1,y\_2,\dots$ 를 모으고, 이들이 $\mathbb F\_2^n$ 에서 일차독립인 $n-1$ 개가 되면 멈춘다. 연립방정식 $y\_i\cdot s=0$ 의 해 공간은 $\lbrace 0,s\rbrace$ 이므로 [Gauss 소거법](gaussian-elimination.md)으로 $0$ 이 아닌 해 $s$ 를 구한다[^1].

# 성질

## 질의 수

$y$ 는 $s$ 와 직교하는 $n-1$ 차원 부분공간 $s^\perp$ 에서 균등하게 나온다. 이미 얻은 $j$ 개가 일차독립이면 다음 $y$ 가 그 생성 공간 밖에 있을 확률은 $1-2^{j-(n-1)}$ 이다. 따라서 $n-1$ 번 돌려서 일차독립인 $n-1$ 개를 얻을 확률은

$$
\prod_{i=1}^{n-1}\left(1-2^{-i}\right)\gt\frac14
$$

이고, 질의 수의 기댓값은 $O(n)$ 이다. 고전 계산은 Gauss 소거법의 $O(n^3)$ 번 비트 연산이다.

## 고전 하한

고전 무작위 알고리즘이 Simon 문제를 상수 확률로 풀려면 $\Omega(2^{n/2})$ 번 질의해야 한다[^1]. 질의한 입력들 사이에 $x\oplus x'=s$ 인 쌍이 없으면 답한 값이 모두 다르고, 이 값들은 $s$ 에 대해 남은 후보들을 구별하지 못한다. 질의 $q$ 개가 만드는 쌍은 $\binom q2$ 개이고 쌍 하나가 $s$ 를 맞힐 확률이 약 $2^{-n}$ 이므로, [생일 문제](birthday-problem.md)와 같은 셈으로 $q$ 가 $2^{n/2}$ 규모여야 한다. Simon 은 이 차이로 어떤 오라클에 대해 BPP(bounded-error probabilistic polynomial time)가 BQP(bounded-error quantum polynomial time)를 포함하지 않음을 보였다.

## 숨은 부분군 문제

$f$ 는 $\mathbb F\_2^n$ 의 부분군 $H=\lbrace 0,s\rbrace$ 의 각 잉여류에서 일정하고 서로 다른 잉여류에서는 값이 다르다. Simon 문제는 [군](groups.md) $\mathbb F\_2^n$ 위의 숨은 부분군 문제(hidden subgroup problem)이고, 4단계의 $H^{\otimes n}$ 은 이 군 위의 [이산 Fourier 변환](fourier.md)이다. 군을 $\mathbb Z/Q\mathbb Z$ 로 바꾸고 $H^{\otimes n}$ 을 양자 Fourier 변환으로 바꾸면 주기 찾기가 되고, 그것이 [Shor 알고리즘](shor-algorithm.md)의 핵심 단계다.

# 활용

- Shor 알고리즘. Shor 는 Simon 의 회로 구조(균등 중첩, 질의, 둘째 레지스터 측정, Fourier 변환)를 그대로 쓰고 군만 바꾸어 위수 찾기를 풀었다.
- 대칭키 암호의 양자 공격. 블록 암호의 구성 가운데 비밀값 $s$ 에 대해 $f(x)=f(x\oplus s)$ 꼴의 함수가 나오는 것이 있고, 그 함수에 중첩 상태로 질의할 수 있으면 Simon 알고리즘으로 $s$ 가 다항 시간에 나온다. Even–Mansour 구성과 3 라운드 Feistel 구성이 이렇게 깨진다[^2].

[^1]: D. R. Simon, On the power of quantum computation, *SIAM Journal on Computing* 26 (1997), 1474–1483.
[^2]: H. Kuwakado, M. Morii, Security on the quantum-type Even-Mansour cipher, *Proceedings of the International Symposium on Information Theory and its Applications* (2012), 312–316; H. Kuwakado, M. Morii, Quantum distinguisher between the 3-round Feistel cipher and the random permutation, *Proceedings of the IEEE International Symposium on Information Theory* (2010), 2682–2685.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)

## 더 알아보기

- [숨은 부분군 문제](hidden-subgroup-problem.md)

#computation #algorithms #complexity
