# Edmonds 문제

# 개요

**Edmonds 문제(Edmonds' problem)** 는 성분이 미지수의 일차식인 정사각행렬이, 미지수에 적당한 수를 넣으면 가역이 되는지를 묻는 문제다. 왼쪽 정점 $n$ 개와 오른쪽 정점 $n$ 개를 잇는 간선들이 주어졌을 때, 간선 자리마다 미지수를 두고 나머지 자리를 $0$ 으로 둔 행렬은 [매칭](matchings.md)으로 모든 정점을 짝지을 수 있을 때만 행렬식이 $0$ 이 아닌 다항식이다. 이 문제는 그런 판정을 일반 행렬에서 묻고, 무작위로 수를 넣어 보는 방법과 미지수를 서로 가환하지 않게 둔 판본의 결정적 방법으로 다룬다.

# 직관

간선이 넷인 이분 그래프 $K_{2,2}$ 의 행렬은 다음이고, 행렬식 $x_{11}x_{22}-x_{12}x_{21}$ 은 $0$ 이 아닌 다항식이다.

$$
\begin{pmatrix}x_{11}&x_{12}\cr x_{21}&x_{22}\end{pmatrix}
$$

$x_{11}=x_{22}=1$, $x_{12}=x_{21}=0$ 을 넣으면 가역이 되고, 이 대입이 고른 자리가 완전 매칭이다. 왼쪽 정점 둘이 모두 오른쪽 첫 정점에만 이어진 그래프의 행렬은 둘째 열이 $0$ 이라 어떤 수를 넣어도 가역이 아니다. 왼쪽 두 정점의 이웃이 하나뿐이라 짝을 지을 수 없다는 것이 열 공간이 줄어든다는 것과 같다.

모든 행렬이 이렇게 판정되지는 않는다. $3\times 3$ 반대칭 행렬의 행렬식은 $\det A^T=\det(-A)=-\det A$ 에서 늘 $0$ 이다.

$$
A(x)=\begin{pmatrix}0&x_1&x_2\cr -x_1&0&x_3\cr -x_2&-x_3&0\end{pmatrix}
$$

그런데 이 행렬에는 행렬 $A_1,A_2,A_3$ 이 함께 작은 공간으로 보내는 부분공간이 없다. $v\ne 0$ 하나를 보내면 상 $A_1v,A_2v,A_3v$ 는 $v$ 에 수직인 평면을 펼친다. 줄어드는 공간이 없는데도 가역이 될 수 없는 것은 미지수가 서로 가환하기 때문이고, 가환하지 않는 미지수로 보면 이 행렬은 가역이다.

# 정의

## 일차 행렬

$\mathbb F$ 가 무한체이고 $A_1,\dots,A_m$ 이 $\mathbb F$ 위의 $n\times n$ 행렬일 때 다음 행렬을 **일차 행렬(linear matrix)** 이라 한다.

$$
A(x)=x_1A_1+\dots+x_mA_m
$$

직관 절의 반대칭 행렬은 $A_1=E_{12}-E_{21}$, $A_2=E_{13}-E_{31}$, $A_3=E_{23}-E_{32}$ 인 경우다. $E_{jk}$ 는 $(j,k)$ 성분만 $1$ 인 행렬이다.

## 가환 계수와 Edmonds 문제

미지수에 $\mathbb F$ 의 원소를 넣어 얻는 행렬의 계수 가운데 가장 큰 것을 **가환 계수(commutative rank)** $\mathrm{crk}\thinspace A$ 라 한다. $\mathrm{crk}\thinspace A=n$ 인지, 곧 $\det A(x)$ 가 $0$ 인 다항식이 아닌지 판정하는 문제가 Edmonds 문제다[^1]. 직관 절의 반대칭 행렬은 $\mathrm{crk}\thinspace A=2$ 다.

## 비가환 계수

미지수를 서로 가환하지 않는 변수로 보고 자유 비가환체(free skew field) 위에서 잰 $A(x)$ 의 계수를 **비가환 계수(non-commutative rank)** $\mathrm{ncrk}\thinspace A$ 라 한다. [연산자 척도화](operator-scaling.md)의 줄어드는 부분공간으로 다음과 같이 적힌다[^2].

$$
\mathrm{ncrk}\thinspace A=n-\max_{V\subseteq\mathbb F^n}\Bigl(\dim V-\dim\sum_iA_iV\Bigr)
$$

직관 절의 반대칭 행렬은 $\dim V-\dim\sum_iA_iV$ 가 모든 $V\ne 0$ 에서 $0$ 이하이므로 $\mathrm{ncrk}\thinspace A=3$ 이다.

# 성질

## 두 계수의 비교

$\mathrm{crk}\thinspace A\le\mathrm{ncrk}\thinspace A\le 2\thinspace\mathrm{crk}\thinspace A$ 다[^2]. 왼쪽 부등식은 줄어드는 부분공간 $V$ 가 있으면 어떤 대입에서도 $A(x)V\subseteq\sum_iA_iV$ 가 $V$ 보다 작아 $A(x)$ 의 계수가 $n-(\dim V-\dim\sum_iA_iV)$ 이하라는 데서 나온다. 직관 절의 반대칭 행렬이 두 계수가 다른 예다.

## 계수가 1 인 행렬

$A_i$ 가 모두 계수 $1$ 이면 두 계수가 같다. 이분 그래프의 행렬은 $A_i$ 가 $E_{jk}$ 들인 경우이고, 이때 줄어드는 부분공간은 좌표 부분공간으로 고를 수 있으며, 그 조건은 Hall 조건(Hall's condition)이 깨지는 왼쪽 정점 집합과 같다. 그래서 이 경우의 Edmonds 문제는 이분 매칭 알고리즘으로 결정적 다항시간에 풀린다.

## 무작위 알고리즘

$\det A(x)$ 는 차수 $n$ 의 다항식이다. 유한 집합 $S\subseteq\mathbb F$ 에서 미지수마다 독립으로 고르게 뽑아 넣으면, [Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)에 따라 $\det A(x)\ne 0$ 인 다항식이 $0$ 이 될 확률이 $n/\vert S\vert$ 이하다. 행렬식을 한 번 계산하는 단측 오류 다항시간 알고리즘이다.

## 결정적 알고리즘

가환 계수를 결정적 다항시간에 판정하는 알고리즘은 알려져 있지 않다[^2]. V. Kabanets 와 R. Impagliazzo 는 그런 알고리즘이 있으면 영구식이 다항식 크기의 산술 회로를 갖지 않거나 $\mathsf{NEXP}\not\subseteq\mathsf{P/poly}$ 임을 보였다[^3]. 비가환 계수는 A. Garg, L. Gurvits, R. Oliveira, A. Wigderson 이 유리수체 위에서 연산자 척도화로 결정적 다항시간에 판정했고[^2], G. Ivanyos, Y. Qiao, K. V. Subrahmanyam 이 임의의 체에서 대수적 알고리즘을 주었다[^4].

# 활용

- 완전 매칭의 판정. 일반 그래프의 Tutte 행렬(Tutte matrix)은 반대칭 일차 행렬이고, 행렬식이 $0$ 이 아닌 것과 완전 매칭이 있는 것이 동치다. Schwartz–Zippel 보조정리 문서의 무작위 매칭 판정이 이 경우다.
- 다항식 항등 판정. 산술 공식으로 주어진 다항식은 크기가 공식 크기에 비례하는 일차 행렬의 행렬식으로 적힌다. 그래서 Edmonds 문제의 결정적 알고리즘은 공식의 항등 판정의 결정적 알고리즘을 준다[^2].
- [Brascamp–Lieb 부등식](brascamp-lieb-inequality.md). 상수가 유한한지의 판정이 연산자 척도화의 용량 문제로 바뀌고, 그 용량이 양수인 것이 비가환 계수가 최대인 것과 같은 꼴이다.

[^1]: J. Edmonds, "Systems of distinct representatives and linear algebra", Journal of Research of the National Bureau of Standards 71B (1967), 241–245.
[^2]: A. Garg, L. Gurvits, R. Oliveira, A. Wigderson, "Operator scaling: theory and applications", Foundations of Computational Mathematics 20 (2020), 223–290.
[^3]: V. Kabanets, R. Impagliazzo, "Derandomizing polynomial identity tests means proving circuit lower bounds", Computational Complexity 13 (2004), 1–46.
[^4]: G. Ivanyos, Y. Qiao, K. V. Subrahmanyam, "Constructive non-commutative rank computation is in deterministic polynomial time", Computational Complexity 27 (2018), 561–593.

# 연관 문서

## 선수지식

- [연산자 척도화](operator-scaling.md)
- [Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #linear_algebra #algebra
