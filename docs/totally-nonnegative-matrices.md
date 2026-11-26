# 완전 음 아닌 행렬

# 개요

**완전 음 아닌 행렬(totally nonnegative matrix)** 은 정사각 부분행렬의 행렬식, 곧 소행렬식이 모두 $0$ 이상인 행렬이다. 첫 행이 $2,1$ 이고 둘째 행이 $1,2$ 인 행렬은 성분 넷과 행렬식 $3$ 이 모두 양수라 이 조건을 만족하지만, $3\times 3$ 행렬은 소행렬식이 $19$ 개이고 $n\times n$ 행렬에서는 그 수가 지수적으로 늘어 하나씩 확인하기 어렵다.

이런 행렬은 모두 평면 그래프에서 경로를 세는 행렬로 적히고, 소행렬식은 겹치지 않는 경로의 수가 된다. 그래서 그래프 하나를 그리면 모든 소행렬식의 부호가 한꺼번에 정해지고, 판정에는 $n^2$ 개의 소행렬식만 보면 된다.

# 직관

[Lindström–Gessel–Viennot 보조정리](lindstrom-gessel-viennot-lemma.md)의 격자에서 출발점 $(0,1)$, $(1,0)$ 과 도착점 $(1,2)$, $(2,1)$ 의 경로 수를 늘어놓은 행렬은 다음이다.

$$
A=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}
$$

$1\times 1$ 소행렬식은 한 쌍의 경로 수이고, $\det A=3$ 은 만나지 않는 경로 쌍의 수다. 둘 다 무엇을 센 수이므로 음수가 될 수 없다.

같은 일을 행렬의 곱으로 볼 수 있다. $A$ 는 다음과 같이 세 행렬의 곱이다.

$$
A=\begin{pmatrix}1&0\cr \frac12&1\end{pmatrix}\begin{pmatrix}2&0\cr 0&\frac32\end{pmatrix}\begin{pmatrix}1&\frac12\cr 0&1\end{pmatrix}
$$

각 인수는 왼쪽 그래프의 층 하나다. 첫 인수는 둘째 줄에서 첫째 줄로 가중치 $\frac12$ 인 비스듬한 간선을, 가운데 인수는 줄마다 가중치 $2$ 와 $\frac32$ 인 수평 간선을, 마지막 인수는 첫째 줄에서 둘째 줄로 가중치 $\frac12$ 인 간선을 둔다. 세 층을 이은 그래프에서 경로의 가중치 합이 $A$ 의 성분이고, 소행렬식은 겹치지 않는 경로의 가중치 합이라 $0$ 이상이다.

# 정의

## 소행렬식

$n\times n$ 행렬 $A$ 의 행 번호 집합 $I$ 와 열 번호 집합 $J$ 가 크기가 같을 때, 그 행과 열만 남긴 부분행렬의 행렬식을 **소행렬식(minor)** $\Delta\_{I,J}(A)$ 라 한다. 직관 절의 $A$ 에서 $\Delta\_{\lbrace 1\rbrace,\lbrace 2\rbrace}=1$, $\Delta\_{\lbrace 1,2\rbrace,\lbrace 1,2\rbrace}=3$ 이다.

## 완전 음 아닌 행렬과 완전 양 행렬

모든 소행렬식이 $0$ 이상이면 완전 음 아닌 행렬, 모두 양수이면 **완전 양 행렬(totally positive matrix)** 이라 한다. 직관 절의 $A$ 는 완전 양 행렬이다. 단위행렬은 $\Delta\_{\lbrace 1\rbrace,\lbrace 2\rbrace}=0$ 이므로 완전 음 아닌 행렬이지만 완전 양 행렬은 아니다.

## 기본 이중대각 행렬

$t\ge 0$ 이고 $E\_{ij}$ 가 $(i,j)$ 성분만 $1$ 인 행렬일 때, $x\_i(t)=I+tE\_{i,i+1}$ 와 $y\_i(t)=I+tE\_{i+1,i}$ 를 **기본 이중대각 행렬(elementary bidiagonal matrix)** 이라 한다. 직관 절의 첫 인수는 $y\_1(\frac12)$, 마지막 인수는 $x\_1(\frac12)$ 이다.

# 성질

## 곱에 대한 닫힘

완전 음 아닌 행렬의 곱은 완전 음 아닌 행렬이다. [Cauchy–Binet 공식](cauchy-binet-formula.md)으로 $\Delta\_{I,J}(AB)=\sum\_K\Delta\_{I,K}(A)\Delta\_{K,J}(B)$ 이고, 우변의 항이 모두 $0$ 이상이므로 좌변도 $0$ 이상이다. 기본 이중대각 행렬과 양의 대각행렬은 소행렬식을 직접 계산해 완전 음 아닌 행렬임을 확인할 수 있으므로, 그 곱도 모두 완전 음 아닌 행렬이다.

## Loewner–Whitney 정리

**정리(Loewner–Whitney).** 가역인 완전 음 아닌 행렬은 모두 $t\ge 0$ 인 기본 이중대각 행렬들과 대각 성분이 양수인 대각행렬의 곱이다[^1].

$2\times 2$ 에서는 $a\_{11}\gt 0$ 일 때 다음 분해가 된다. 직관 절의 분해가 $a\_{11}=2$, $a\_{12}=a\_{21}=1$, $\det A=3$ 인 경우다.

$$
\begin{pmatrix}a\_{11}&a\_{12}\cr a\_{21}&a\_{22}\end{pmatrix}=y\_1\Bigl(\frac{a\_{21}}{a\_{11}}\Bigr)\begin{pmatrix}a\_{11}&0\cr 0&\frac{\det A}{a\_{11}}\end{pmatrix}x\_1\Bigl(\frac{a\_{12}}{a\_{11}}\Bigr)
$$

일반적인 경우는 [Gauss 소거법](gaussian-elimination.md)의 각 단계가 기본 이중대각 행렬 하나를 떼어 내는데, 이웃한 행끼리만 빼는 소거가 완전 음 아닌 성질을 지킨다는 것으로 증명한다. 각 인수를 그래프의 층 하나로 그리면, 가역인 완전 음 아닌 행렬은 모두 평면 그래프의 경로 행렬이다.

## 판정에 필요한 소행렬식

$n\times n$ 행렬이 완전 양 행렬인 것은 행 번호와 열 번호가 각각 연속이고 그중 하나가 $1$ 을 포함하는 소행렬식 $n^2$ 개가 모두 양수인 것과 동치다[^2]. $2\times 2$ 에서는 $a\_{11}$, $a\_{12}$, $a\_{21}$, $\det A$ 넷이다. $a\_{22}$ 는 $a\_{22}=(\det A+a\_{12}a\_{21})/a\_{11}\gt 0$ 으로 따라 나온다.

## 고윳값과 고유벡터

**정리(Gantmacher–Krein).** $n\times n$ 완전 양 행렬의 고윳값은 서로 다른 양수 $\lambda\_1\gt\dots\gt\lambda\_n\gt 0$ 이고, $\lambda\_k$ 의 고유벡터의 성분은 부호가 정확히 $k-1$ 번 바뀐다[^3].

직관 절의 $A$ 는 고윳값이 $3$ 과 $1$ 이고 고유벡터가 $(1,1)$ 과 $(1,-1)$ 이다. 부호가 바뀌는 횟수가 각각 $0$ 과 $1$ 이다.

## 부호 변화의 감소

벡터 $x$ 의 성분에서 $0$ 을 지우고 부호가 바뀌는 횟수를 $S(x)$ 라 하면, 완전 음 아닌 행렬 $A$ 에 대해 $S(Ax)\le S(x)$ 다[^3]. 이 성질을 **변동 감소(variation diminishing)** 라 한다. 직관 절의 $A$ 와 $x=(1,-3)$ 이면 $Ax=(-1,-5)$ 이고 $S(x)=1$, $S(Ax)=0$ 이다.

# 활용

- [Pólya 빈도 수열](polya-frequency-sequences.md). 수열 $(a\_k)$ 로 만든 [Toeplitz 행렬](toeplitz-matrices.md) $\lbrack a\_{i-j}\rbrack$ 가 완전 음 아닌 행렬이면 Pólya 빈도 수열(Pólya frequency sequence)이라 한다. 계수가 이항계수인 $(1+z)^m$ 처럼 음의 실근만 갖는 다항식의 계수열이 그 예이고, Edrei 의 정리가 이런 수열의 생성함수를 모두 결정한다.
- 진동 이론. 줄에 매단 질점들처럼 이웃끼리만 묶인 진동계에서 강성 행렬의 역인 영향 행렬(influence matrix)은 진동 행렬(oscillation matrix), 곧 거듭제곱 하나가 완전 양 행렬인 완전 음 아닌 행렬이다. Gantmacher–Krein 정리가 진동 행렬에도 성립해 $k$ 번째 진동 모드가 $k-1$ 개의 마디를 갖는다[^3].
- 스플라인. B-스플라인을 점들에서 계산한 배치 행렬(collocation matrix)은 완전 음 아닌 행렬이고, 변동 감소 성질로 스플라인 근사가 자료보다 많이 진동하지 않는다.
- [클러스터 대수](cluster-algebras.md). 완전 양 행렬의 판정에 쓰는 소행렬식 묶음 사이를 옮겨 가는 교환 관계가 Fomin 과 Zelevinsky 가 클러스터 대수를 정의한 출발점이다[^2].
- [KP 위계](kp-hierarchy.md)(Kadomtsev–Petviashvili hierarchy). 완전 음 아닌 [Grassmann 다양체](grassmannian.md)의 점이 KP 방정식의 정칙인 다중 솔리톤 해를 준다.

[^1]: C. Loewner, "On totally positive matrices", Mathematische Zeitschrift 63 (1955), 338–340.
[^2]: S. Fomin, A. Zelevinsky, "Total positivity: tests and parametrizations", The Mathematical Intelligencer 22 (2000), 23–33.
[^3]: F. R. Gantmacher, M. G. Krein, Oscillation Matrices and Kernels and Small Vibrations of Mechanical Systems, AMS Chelsea, 2002, 2 장.

# 연관 문서

## 선수지식

- [Lindström–Gessel–Viennot 보조정리](lindstrom-gessel-viennot-lemma.md)
- [Cauchy–Binet 공식](cauchy-binet-formula.md)

## 더 알아보기

- [Pólya 빈도 수열](polya-frequency-sequences.md)

#linear_algebra #combinatorics
