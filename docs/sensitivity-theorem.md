# 민감도 정리

# 개요

**민감도 정리(sensitivity theorem)** 는 $0$ 과 $1$ 의 열을 받아 $0$ 이나 $1$ 을 내는 함수에서, 비트 하나를 뒤집어 값이 바뀌는 자리의 수가 작으면 함수 전체도 단순하다는 정리다. 세 비트의 다수결 함수는 입력 $110$ 에서 앞의 두 비트 가운데 하나를 뒤집으면 값이 $1$ 에서 $0$ 으로 바뀌므로 이 입력에서 값을 바꾸는 자리가 둘이고, 어느 입력에서도 둘을 넘지 않는다. 민감도 정리는 함수를 다항식으로 적을 때의 차수가 이 최대 개수의 제곱 이하임을 보여, 민감도가 다른 복잡도 척도들과 다항식으로 묶임을 증명한다.

# 직관

민감도 정리는 불 함수 $f:\lbrace 0,1\rbrace^n\to\lbrace 0,1\rbrace$ 의 다항식 차수가 민감도의 제곱 이하라는 정리, 곧 $\deg f\le s(f)^2$ 이다. H. Huang 이 2019 년에 증명했다[^1]. 민감도 $s(f)$ 는 한 입력에서 비트 하나를 뒤집어 값이 바뀌는 좌표의 최대 개수다.

차수, 블록 민감도, 결정 나무의 깊이 같은 불 함수의 복잡도 척도들은 서로 다항식으로 묶인다는 것이 알려져 있었고, 민감도만 이 묶음 밖에 있었다. N. Nisan 과 M. Szegedy 가 1994 년에 민감도도 다항식으로 묶이는지 물었고[^2], 이 정리가 그 물음에 답한다. 증명은 초입방체 그래프의 부호 붙은 인접 행렬의 [고윳값](eigenvalues.md) 계산이다.

투표 함수를 생각한다. $n$ 명이 $0$ 이나 $1$ 을 내고 과반이면 $1$ 인 함수에서, 표가 정확히 반으로 갈린 입력의 한 표를 바꾸면 결과가 바뀐다. 이런 입력에서는 많은 좌표가 결과를 바꾸고, 이것이 민감도가 크다는 뜻이다. 반면 $f(x)=1$ 이 $x$ 가 특정한 몇 비트의 패턴이 들어 있는지에만 달린 함수는 대부분의 입력에서 비트 하나로 결과가 바뀌지 않는다.

비트를 하나씩이 아니라 묶음으로 뒤집게 하면 더 많은 방향을 셀 수 있다. 서로 겹치지 않는 좌표 묶음 $B_1,\dots,B_k$ 가 있어서 묶음 하나를 통째로 뒤집을 때마다 값이 바뀌면, 이 $k$ 의 최대가 블록 민감도 $\mathrm{bs}(f)$ 다. 블록 민감도는 민감도 이상이고, 둘의 차가 얼마나 벌어질 수 있는지가 물음이었다. D. Rubinstein 의 예에서 $\mathrm{bs}(f)$ 는 $s(f)^2/2$ 정도까지 커진다[^3]. 민감도 정리로부터 $\mathrm{bs}(f)\le 2s(f)^4$ 이 유도되어, 그 차는 다항식 안에 머문다.

# 정의

$x\in\lbrace 0,1\rbrace^n$ 의 좌표 집합 $B$ 를 뒤집은 입력을 $x^B$ 로 쓰고, $x^{\lbrace i\rbrace}$ 를 $x^i$ 로 쓴다.

- **민감도(sensitivity)** $s(f)=\max_x\lvert\lbrace i:f(x^i)\ne f(x)\rbrace\rvert$.
- **블록 민감도(block sensitivity)** $\mathrm{bs}(f)$ 는 서로소인 $B_1,\dots,B_k$ 가 모두 $f(x^{B_j})\ne f(x)$ 를 만족하는 $x$ 와 $k$ 가운데 $k$ 의 최대다.
- **차수(degree)** $\deg f$ 는 $f$ 를 나타내는 실계수 다중선형 다항식의 차수다. 이 다항식은 하나로 정해진다.
- **결정 나무 깊이(decision tree depth)** $D(f)$ 는 입력 비트를 하나씩 물어 $f(x)$ 를 정하는 결정적 알고리즘이 최악의 경우에 묻는 비트 수의 최솟값이다.

초입방체 그래프 $Q_n$ 은 정점이 $\lbrace 0,1\rbrace^n$ 이고 한 좌표만 다른 두 점을 간선으로 잇는 그래프다.

# 성질

## 척도들의 관계

$s(f)\le\mathrm{bs}(f)\le D(f)$ 이고 $\deg f\le D(f)$ 다. 결정 나무의 각 잎은 그 경로에서 물은 비트들의 곱으로 쓰이므로, 차수가 깊이를 넘지 않는다. 다음이 알려져 있다.

| 관계 | 출처 |
|---|---|
| $\mathrm{bs}(f)\le 2\deg(f)^2$ | Nisan–Szegedy[^2] |
| $D(f)\le\mathrm{bs}(f)^3$ | Nisan, Beals 외 |
| $D(f)\le\deg(f)^3$ | Midrijanis |

그래서 $\mathrm{bs}$, $\deg$, $D$ 는 서로 다항식으로 묶이고, 민감도 정리가 $s$ 를 이 묶음에 넣는다.

## Huang 의 보조정리

보조정리. $Q_n$ 의 정점 $2^{n-1}+1$ 개로 유도된 부분 그래프에는 차수가 $\sqrt n$ 이상인 정점이 있다[^1].

증명의 요지. 행렬을 $A_1=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$, $A_n=\begin{pmatrix}A_{n-1}&I\cr I&-A_{n-1}\end{pmatrix}$ 로 정한다. $A_n$ 은 $Q_n$ 의 인접 행렬에서 일부 성분을 $-1$ 로 바꾼 것이고, 귀납법으로 $A_n^2=nI$ 이다. 대각합이 $0$ 이므로 고윳값은 $\sqrt n$ 과 $-\sqrt n$ 이 각각 $2^{n-1}$ 번이다. 정점 $2^{n-1}+1$ 개에 해당하는 주부분행렬 $B$ 는 Cauchy 끼움 정리(Cauchy interlacing theorem)로 가장 큰 고윳값이 $\sqrt n$ 이상이다. 한편 $B$ 의 가장 큰 고윳값은 $B$ 의 행마다 절댓값의 합의 최댓값 이하이고, 이 값은 유도된 부분 그래프의 최대 차수다.

## 민감도 정리

정리. 모든 불 함수에서 $\deg f\le s(f)^2$ 이다. 따라서 $\mathrm{bs}(f)\le 2s(f)^4$ 이다[^1].

증명의 요지. 먼저 $\deg f=n$ 인 경우를 본다. $g(x)=f(x)\oplus x_1\oplus\cdots\oplus x_n$ 으로 두면 $f$ 의 최고차 계수가 $0$ 이 아니라는 것은 $g^{-1}(0)$ 과 $g^{-1}(1)$ 의 크기가 다르다는 것과 동치다. 큰 쪽은 $2^{n-1}+1$ 개 이상의 정점이므로 보조정리로 그 안에 이웃이 $\sqrt n$ 개 이상인 $x$ 가 있다. $x$ 와 $x^i$ 가 같은 쪽이면 $g(x)=g(x^i)$ 이고, 홀짝 항이 바뀌므로 $f(x)\ne f(x^i)$ 다. 그래서 $s(f)\ge\sqrt n$ 이다. 일반적인 경우에는 차수 $d$ 의 단항식 하나를 골라 나머지 변수를 고정해 차수 $d$ 의 $d$ 변수 함수를 얻고, 같은 논증을 적용한다. 둘째 부등식은 Nisan–Szegedy 의 $\mathrm{bs}\le 2\deg^2$ 에 대입한 것이다.

# 활용

- [부울 함수의 Fourier 해석](boolean-fourier.md)의 차수와 영향력. 차수는 Fourier 계수가 $0$ 이 아닌 가장 큰 준위이고, 이 정리는 그 준위를 한 입력 근방의 민감한 좌표 수로 위에서 묶는다.
- 질의 복잡도. 결정 나무 깊이, 무작위 질의 복잡도, 양자 질의 복잡도는 모두 차수와 다항식으로 묶이고, 이 정리로 민감도와도 다항식으로 묶인다.
- [스펙트럼 정리](spectral-theorem.md)의 쓰임. 증명에 쓰인 Cauchy 끼움 정리는 대칭행렬의 고윳값의 Courant–Fischer min–max 표현에서 나온다.

[^1]: H. Huang, "Induced subgraphs of hypercubes and a proof of the Sensitivity Conjecture", Annals of Mathematics 190 (2019), 949–955.
[^2]: N. Nisan, M. Szegedy, "On the degree of Boolean functions as real polynomials", Computational Complexity 4 (1994), 301–313.
[^3]: D. Rubinstein, "Sensitivity vs. block sensitivity of Boolean functions", Combinatorica 15 (1995), 297–299.

# 연관 문서

## 선수지식

- [부울 함수의 Fourier 해석](boolean-fourier.md)
- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #combinatorics #linear_algebra
