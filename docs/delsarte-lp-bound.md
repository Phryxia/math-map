# Delsarte 선형계획 상한

# 개요

**Delsarte 선형계획 상한(Delsarte linear programming bound)** 은 부호어 사이 거리의 분포가 만족해야 하는 일차 부등식들을 모아, 부호의 크기를 선형계획 문제의 최댓값으로 위에서 누르는 방법이다. 길이 $4$ 인 이진 문자열에서 어느 두 개도 세 자리 이상 다르게 고르려 하면, 반지름 $1$ 인 공을 겹치지 않게 놓는 셈으로는 $3$ 개까지 가능해 보이지만 실제로는 $2$ 개가 최대다. 두 부호어의 거리가 $i$ 인 쌍의 수를 미지수로 두고 [Fourier 변환](fourier-transform.md)에서 나오는 부등식을 걸면 이 $2$ 가 나온다.

# 직관

길이 $4$, 최소 거리 $3$ 인 이진 부호 $C$ 를 생각한다. [오류정정부호](error-correcting-codes.md) 문서의 Hamming 한계는 $\lvert C\rvert(1+4)\le 16$ 이므로 $\lvert C\rvert\le 3$ 이다. 부호어 쌍의 거리를 세는 수

$$
A_i=\frac{1}{\lvert C\rvert}\char35{}\lbrace (x,y)\in C^2 : d(x,y)=i\rbrace
$$

를 미지수로 둔다. $A_0=1$ 이고 $A_1=A_2=0$ 이며 $\lvert C\rvert=A_0+A_3+A_4$ 다.

비트열 $z$ 에 대해 $\sum\_{x\in C}(-1)^{x\cdot z}$ 를 제곱하면 음이 아니다. 전개하면 $\sum\_{x,y\in C}(-1)^{(x+y)\cdot z}\ge 0$ 이고, 무게가 $1$ 인 $z$ 네 개에 대해 더하면 거리 $i$ 인 쌍마다 $4-2i$ 가 나와 $4-2A_3-4A_4\ge 0$ 이다. 무게 $4$ 인 $z=1111$ 에서는 $(-1)^i$ 가 나와 $1-A_3+A_4\ge 0$ 이다. $A_4=t$ 로 두면 $A_3\le\min(1+t,\thinspace 2-2t)$ 이고 $1+A_3+A_4$ 의 최댓값은 $t=\frac13$ 에서 $\frac83$ 이다. 따라서 $\lvert C\rvert\le 2$ 다.

# 정의

길이 $n$ 의 이진 부호 $C\subseteq\mathbb F_2^n$ 의 거리 분포(distance distribution)는 직관 절의 $A_0,\dots,A_n$ 이다. $0\le k\le n$ 에 대해

$$
K_k(i)=\sum\_{j=0}^{k}(-1)^j\binom{i}{j}\binom{n-i}{k-j}
$$

를 [Krawtchouk 다항식](krawtchouk-polynomials.md)이라 한다. 무게가 $i$ 인 $x$ 를 하나 고르면 $K_k(i)=\sum\_{\mathrm{wt}(z)=k}(-1)^{x\cdot z}$ 다. 직관 절의 $n=4$ 에서 $K_1(i)=4-2i$, $K_4(i)=(-1)^i$ 다.

최소 거리가 $d$ 인 길이 $n$ 의 이진 부호의 **Delsarte 선형계획 상한** 은 다음 [선형계획법](linear-programming.md) 문제의 최댓값이다[^1].

$$
\max\thinspace\sum\_{i=0}^{n}A_i\quad\text{s.t.}\quad A_0=1,\quad A_i=0\ (1\le i\le d-1),\quad A_i\ge 0,\quad \sum\_{i=0}^{n}A_iK_k(i)\ge 0\ (0\le k\le n)
$$

직관 절의 계산은 $n=4$, $d=3$ 에서 이 문제를 푼 것이고 최댓값이 $\frac83$ 이다.

# 성질

## 상한 정리

길이 $n$, 최소 거리 $d$ 인 이진 부호 $C$ 의 거리 분포는 위 문제의 제약을 만족하므로 $\lvert C\rvert$ 는 그 최댓값 이하다[^1]. $\lvert C\rvert=\sum_iA_i$ 이고, 부등식은

$$
\lvert C\rvert\sum\_{i=0}^{n}A_iK_k(i)=\sum\_{\mathrm{wt}(z)=k}\Bigl(\sum\_{x\in C}(-1)^{x\cdot z}\Bigr)^2\ge 0
$$

에서 나온다.

## 쌍대 문제

선형계획의 쌍대성에서, 다항식 $f(x)=1+\sum\_{k=1}^{n}f_kK_k(x)$ 가 $f_k\ge 0$ 이고 $i\ge d$ 에서 $f(i)\le 0$ 이면 $\lvert C\rvert\le f(0)$ 이다[^1]. $\sum_iA_if(i)=\sum_kf_k\sum_iA_iK_k(i)+\sum_iA_i\ge\lvert C\rvert$ 이고, 좌변은 $i=0$ 항 $f(0)$ 과 $i\ge d$ 의 음이 아닌 $A_i$ 에 $f(i)\le 0$ 을 곱한 항의 합이어서 $f(0)$ 이하다. 상한을 증명하려면 이런 $f$ 하나를 보이면 된다.

## 점근 상한

부호율 $R=\frac1n\log_2\lvert C\rvert$ 와 상대 거리 $\delta=d/n$ 에 대해, $n\to\infty$ 에서 쌍대 문제에 Krawtchouk 다항식의 근 근처에서 고른 $f$ 를 넣으면

$$
R\le h\Bigl(\tfrac12-\sqrt{\delta(1-\delta)}\Bigr)
$$

를 얻는다. $h$ 는 이진 엔트로피 [함수](functions.md)다. 이를 McEliece–Rodemich–Rumsey–Welch 상한(McEliece–Rodemich–Rumsey–Welch bound)이라 한다[^2].

# 활용

- 부호의 최대 크기 계산. 작은 $n$ 과 $d$ 에서 이진 부호의 최대 크기를 판정할 때 이 선형계획의 최댓값이 상한을 주고, 구성한 부호가 하한을 준다.
- 선형부호의 쌍대 부호. 선형부호에서는 $k$ 번째 부등식의 좌변을 $\lvert C\rvert$ 로 나눈 값이 쌍대 부호의 무게 $k$ 인 부호어 수이고, 이 관계가 [MacWilliams 항등식](macwilliams-identity.md)이다.
- [거리 정칙 그래프](distance-regular-graphs.md). 같은 논증이 Hamming 그래프의 거리 행렬과 그 고유공간으로 적히고, 거리 정칙 그래프와 연관 체계(association scheme) 일반으로 옮겨진다[^1].
- [구 채우기](sphere-packing.md). 유클리드 공간에서 Krawtchouk 다항식 대신 Fourier 변환을 쓴 Cohn–Elkies 선형계획 상한이 같은 꼴이고, 8 차원과 24 차원에서 이 상한을 정확히 달성하는 함수가 구성되어 최적 밀도가 판정되었다.

[^1]: P. Delsarte, "An algebraic approach to the association schemes of coding theory", *Philips Research Reports Supplements* 10 (1973).
[^2]: R. J. McEliece, E. R. Rodemich, H. Rumsey, L. R. Welch, "New upper bounds on the rate of a code via the Delsarte–MacWilliams inequalities", *IEEE Transactions on Information Theory* 23 (1977), 157–166.

# 연관 문서

## 선수지식

- [오류정정부호](error-correcting-codes.md)
- [선형계획법](linear-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #combinatorics #optimization
