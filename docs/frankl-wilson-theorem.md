# Frankl–Wilson 정리

# 개요

**Frankl–Wilson 정리(Frankl–Wilson theorem)** 는 소수 $p$ 를 법으로 교집합의 크기가 $s$ 가지 값만 갖는 $k$ 원소 부분집합족의 크기가 $\binom ns$ 이하라는 정리다. 단 $k$ 는 법 $p$ 로 그 $s$ 가지 값에 들지 않는다. P. Frankl 과 R. M. Wilson 이 1981 년에 증명했다[^1].

[Erdős–Ko–Rado 정리](erdos-ko-rado.md)는 교집합이 비지 않는 족을 다룬다. Frankl–Wilson 정리는 교집합의 크기를 몇 가지 값으로 제한하고, 집합을 [벡터 공간](vector-spaces.md)의 다항식으로 바꾸어 일차독립성으로 개수를 묶는다. 그 따름정리로 단위 거리 그래프의 채색수 하한, Borsuk 추측(Borsuk's conjecture)의 반례, 명시적 Ramsey 그래프가 나온다.

# 직관

마을 사람 $n$ 명이 모임을 만든다. 모든 모임의 인원은 홀수이고, 서로 다른 두 모임에 함께 든 사람 수는 짝수다. 모임은 몇 개까지 만들 수 있는가.

모임 $A$ 를 $\mathbb F\_2^n$ 의 특성 벡터 $v_A$ 로 쓰면 $v_A\cdot v_B=\lvert A\cap B\rvert\bmod 2$ 다. 그래서 $v_A\cdot v_A=1$ 이고 $A\ne B$ 이면 $v_A\cdot v_B=0$ 이다. $\sum_A c_Av_A=0$ 에 $v_B$ 를 내적하면 $c_B=0$ 이므로 특성 벡터들은 일차독립이고, 모임은 $n$ 개 이하다.

교집합의 크기가 법 $p$ 로 $s$ 가지 값 $l_1,\dots,l_s$ 를 가질 수 있으면, 내적 하나로는 $A\ne B$ 에서 $0$ 이 나오지 않는다. 그래서 내적 대신 $s$ 차 다항식 $f_A(x)=\prod_i(v_A\cdot x-l_i)$ 를 쓴다. $f_A(v_B)$ 는 $A\ne B$ 에서 $0$ 이고 $A=B$ 에서 $0$ 이 아니므로 같은 논법으로 $f_A$ 들이 일차독립이다. 개수의 상한은 $f_A$ 들이 사는 공간의 차원이다.

# 정의

$\lbrack n\rbrack=\lbrace 1,\dots,n\rbrace$ 의 부분집합들의 모임을 집합족이라 한다. 정수의 집합 $L$ 에 대해, 서로 다른 모든 $A,B\in\mathcal F$ 에서 $\lvert A\cap B\rvert\in L$ 이면 $\mathcal F$ 를 **$L$ 교차족($L$-intersecting family)** 이라 한다. 모든 원소의 크기가 $k$ 이면 $k$ 균등족이라 한다.

**Frankl–Wilson 정리.** $p$ 가 소수이고 $L$ 이 법 $p$ 의 잉여 $s$ 개로 된 집합이다. $\mathcal F$ 가 $\lbrack n\rbrack$ 의 $k$ 균등족이고 $k\bmod p\notin L$ 이며, 서로 다른 모든 $A,B\in\mathcal F$ 에서 $\lvert A\cap B\rvert\bmod p\in L$ 이면

$$
\lvert\mathcal F\rvert\le\binom ns
$$

이다[^1].

법을 쓰지 않는 판본은 D. K. Ray-Chaudhuri 와 R. M. Wilson 의 정리다. $\lvert L\rvert=s$ 이고 $\mathcal F$ 가 $L$ 교차 $k$ 균등족이면 $\lvert\mathcal F\rvert\le\binom ns$ 다[^2].

# 성질

## 균등하지 않은 판본과 다항식 증명

정리. $p$, $L$, $s$ 가 위와 같고, $\mathcal F$ 의 모든 원소 $A$ 에서 $\lvert A\rvert\bmod p\notin L$ 이며 서로 다른 $A,B$ 에서 $\lvert A\cap B\rvert\bmod p\in L$ 이면 $\lvert\mathcal F\rvert\le\sum_{i=0}^s\binom ni$ 다.

증명의 요지. $A\in\mathcal F$ 마다 $\mathbb F\_p$ 위의 다항식

$$
f_A(x)=\prod_{l\in L}\bigl(v_A\cdot x-l\bigr)
$$

를 둔다. $x\in\lbrace 0,1\rbrace^n$ 에서 $v_A\cdot v_B=\lvert A\cap B\rvert$ 이므로 $f_A(v_B)=0$ ($A\ne B$) 이고 $f_A(v_A)\ne 0$ 이다. 직관 절의 논법으로 $f_A$ 들은 $\lbrace 0,1\rbrace^n$ 위의 함수로서 일차독립이다. $\lbrace 0,1\rbrace^n$ 에서는 $x_i^2=x_i$ 이므로 각 $f_A$ 를 차수 $s$ 이하의 다중선형 다항식으로 바꿔도 값이 같다. 그런 다항식의 공간은 단항식 $\prod_{i\in S}x_i$ ($\lvert S\rvert\le s$) 로 생성되어 차원이 $\sum_{i\le s}\binom ni$ 다.

균등족에서 상한이 $\binom ns$ 로 줄어드는 것은 Frankl 과 Wilson 의 원래 증명이 준다[^1].

## 단위 거리 그래프의 채색수

$\mathbb R^n$ 의 점을 정점으로 하고 거리가 $1$ 인 두 점을 잇는 그래프의 채색수를 $\chi(\mathbb R^n)$ 이라 한다.

정리(Frankl–Wilson). $\chi(\mathbb R^n)$ 은 $n$ 에 대해 지수적으로 자란다. Frankl 과 Wilson 은 $\chi(\mathbb R^n)\ge(1.2+o(1))^n$ 을 얻었다[^1].

증명의 요지. $n=4p-1$ 로 두고 크기 $2p-1$ 인 부분집합의 특성 벡터를 점으로 잡는다. 두 점의 거리의 제곱은 $\lvert A\triangle B\rvert=2(2p-1)-2\lvert A\cap B\rvert$ 이므로 $\lvert A\cap B\rvert=p-1$ 인 쌍이 모두 거리 $\sqrt{2p}$ 에 있다. 점 전체를 $1/\sqrt{2p}$ 배 하면 이 거리가 $1$ 이 된다. 색 하나를 받은 점들은 이 거리의 쌍을 포함하지 않으므로 교집합의 크기가 $\lbrace 0,\dots,2p-2\rbrace\setminus\lbrace p-1\rbrace$ 에 들고, 법 $p$ 로 $\lbrace 0,\dots,p-2\rbrace$ 의 $p-1$ 가지 값만 갖는다. $2p-1\equiv p-1$ 은 여기 들지 않으므로 정리에서 한 색의 점은 $\binom{4p-1}{p-1}$ 개 이하다. 따라서 색은 $\binom{4p-1}{2p-1}/\binom{4p-1}{p-1}$ 개 이상이 필요하고, 이 비는 $p$ 에 대해 지수적으로 자란다.

## Borsuk 추측의 반례

K. Borsuk 는 $\mathbb R^d$ 의 유계 집합을 언제나 지름이 더 작은 $d+1$ 개의 조각으로 나눌 수 있는지 물었다. J. Kahn 과 G. Kalai 는 Frankl–Wilson 정리로 반례를 구성했다. 상수 $c\gt 1$ 이 있어 충분히 큰 $d$ 에서 $c^{\sqrt d}$ 개보다 적은 조각으로는 나눌 수 없는 유한 집합이 존재하고, 첫 반례는 $d=1325$ 에서 나온다[^3].

구성의 요지. $u\in\lbrace\pm 1\rbrace^n$ 마다 $\mathbb R^{n^2}$ 의 점 $u\otimes u$ 를 둔다. $\lvert u\otimes u\rvert^2=n^2$ 이고 $(u\otimes u)\cdot(w\otimes w)=(u\cdot w)^2$ 이므로

$$
\lvert u\otimes u-w\otimes w\rvert^2=2n^2-2(u\cdot w)^2
$$

이고, 지름은 $u\cdot w=0$ 인 쌍에서 나온다. 지름이 더 작은 조각에는 서로 직교하는 쌍이 없다. $n=4p$ 일 때 직교하는 쌍이 없는 $\pm 1$ 벡터의 모임은 Frankl–Wilson 정리로 전체의 지수적으로 작은 몫이므로, 조각 수가 $n$ 에 대해 지수적이다. $d$ 는 $n^2$ 정도이므로 조각 수는 $\sqrt d$ 에 대해 지수적이다.

## 명시적 Ramsey 그래프

$\lbrack p^3\rbrack$ 의 크기 $p^2-1$ 인 부분집합을 정점으로 하고, $\lvert A\cap B\rvert\not\equiv -1\pmod p$ 인 두 정점을 잇는 그래프를 둔다.

- 클릭 안의 교집합 크기는 법 $p$ 로 $-1$ 이 아닌 $p-1$ 가지 값을 갖고 $p^2-1\equiv -1$ 이므로, Frankl–Wilson 정리로 클릭은 $\binom{p^3}{p-1}$ 개 이하의 정점을 갖는다.
- 독립집합 안의 교집합 크기는 $p-1,2p-1,\dots,p^2-p-1$ 의 $p-1$ 가지 값을 가지므로, Ray-Chaudhuri–Wilson 정리로 독립집합도 $\binom{p^3}{p-1}$ 개 이하다.

정점 수를 $N=\binom{p^3}{p^2-1}$ 이라 하면 $\log N$ 은 $p^2\log p$ 정도이고 $\log\binom{p^3}{p-1}$ 은 $p\log p$ 정도다. 그래서 클릭도 독립집합도 $2^{c\sqrt{\log N\log\log N}}$ 보다 작은 그래프가 명시적으로 주어진다[^1].

# 활용

- [Ramsey 이론](ramsey-theory.md)의 명시적 구성. 위의 그래프는 오랫동안 명시적 Ramsey 그래프의 최선이었고, B. Barak, A. Rao, R. Shaltiel, A. Wigderson 의 구성이 이것을 넘었다[^4].
- 이산기하. 단위 거리 그래프의 채색수와 Borsuk 문제의 하한이 위 두 절의 계산으로 나온다.
- 집합족의 크기 상한. [조합적 설계](block-designs.md)의 Fisher 부등식(Fisher's inequality)은 직관 절과 같은 일차독립성 논법으로 증명된다.

[^1]: P. Frankl, R. M. Wilson, "Intersection theorems with geometric consequences", Combinatorica 1 (1981), 357–368.
[^2]: D. K. Ray-Chaudhuri, R. M. Wilson, "On t-designs", Osaka Journal of Mathematics 12 (1975), 737–744.
[^3]: J. Kahn, G. Kalai, "A counterexample to Borsuk's conjecture", Bulletin of the American Mathematical Society 29 (1993), 60–62.
[^4]: B. Barak, A. Rao, R. Shaltiel, A. Wigderson, "2-source dispersers for $n^{o(1)}$ entropy, and Ramsey graphs beating the Frankl–Wilson construction", Annals of Mathematics 176 (2012), 1483–1543.

# 연관 문서

## 선수지식

- [벡터 공간](vector-spaces.md)
- [Erdős–Ko–Rado 정리](erdos-ko-rado.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #linear_algebra #graph_theory
