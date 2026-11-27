# Pólya 빈도 수열

# 개요

**Pólya 빈도 수열(Pólya frequency sequence)** 은 수열을 대각선마다 늘어놓은 행렬의 소행렬식이 모두 $0$ 이상인 수열이다. 이항계수 $1,2,1$ 은 이 조건을 만족하지만 $1,1,1$ 은 만족하지 않는다. 두 수열 모두 양수뿐이라 성분만 보아서는 차이가 보이지 않는다.

차이는 생성함수에서 보인다. $1,2,1$ 의 생성함수 $(1+z)^2$ 은 근이 음의 실수뿐이고, $1,1,1$ 의 생성함수 $1+z+z^2$ 은 근이 허수다. 유한 수열이 Pólya 빈도 수열인 것은 생성함수의 근이 모두 $0$ 이하의 실수인 것과 동치이고, 이것으로 수열이 로그 오목인지를 근의 위치로 판정한다.

# 직관

수열 $a\_0,a\_1,a\_2,\dots$ 를 $(i,j)$ 성분이 $a\_{i-j}$ 인 아래삼각 [Toeplitz 행렬](toeplitz-matrices.md)로 늘어놓는다. 음수 번호의 $a\_k$ 는 $0$ 이다. $1,2,1$ 에서 행렬의 왼쪽 위 부분은 다음과 같다.

$$
\begin{pmatrix}1&0&0&0\cr 2&1&0&0\cr 1&2&1&0\cr 0&1&2&1\end{pmatrix}
$$

둘째와 셋째 행, 첫째와 둘째 열의 소행렬식은 $2\cdot 2-1\cdot 1=3$ 이다. 이런 소행렬식이 모두 $0$ 이상이라는 것이 이 행렬이 [완전 음 아닌 행렬](totally-nonnegative-matrices.md)이라는 조건이다.

$1,1,1$ 로 같은 행렬을 만들고 둘째부터 넷째 행, 첫째부터 셋째 열을 고르면 다음 소행렬식이 음수다.

$$
\det\begin{pmatrix}1&1&0\cr 1&1&1\cr 0&1&1\end{pmatrix}=-1
$$

그래서 $1,1,1$ 은 Pólya 빈도 수열이 아니다. 근이 허수인 $1+z+z^2$ 이 이 음의 소행렬식을 만든다.

# 정의

## Pólya 빈도 수열

$k\lt 0$ 이면 $a\_k=0$ 인 음 아닌 실수열 $(a\_k)\_{k\in\mathbb Z}$ 의 Toeplitz 행렬 $\lbrack a\_{i-j}\rbrack\_{i,j\ge 0}$ 이 완전 음 아닌 행렬이면 $(a\_k)$ 를 Pólya 빈도 수열이라 한다. 직관 절의 $1,2,1$ 은 Pólya 빈도 수열이고 $1,1,1$ 은 아니다.

## 로그 오목과 단봉

모든 $k$ 에서 $a\_k^2\ge a\_{k-1}a\_{k+1}$ 이면 수열이 **로그 오목(log-concave)** 이라 한다. 어떤 번호까지 늘다가 그 뒤로 줄면 **단봉(unimodal)** 이라 한다. 양수 항 사이에 $0$ 이 끼지 않는 로그 오목 수열은 단봉이다. $1,2,1$ 은 로그 오목이고 $1,1,1$ 도 로그 오목이다.

# 성질

## 로그 오목성

$a\_k^2-a\_{k-1}a\_{k+1}$ 은 Toeplitz 행렬의 $2\times 2$ 소행렬식이므로 Pólya 빈도 수열은 로그 오목이다. 직관 절의 $1,1,1$ 이 보이듯 역은 성립하지 않는다.

## 합성곱에 대한 닫힘

두 Pólya 빈도 수열의 합성곱은 Pólya 빈도 수열이다. 합성곱의 Toeplitz 행렬은 두 Toeplitz 행렬의 곱이고, 완전 음 아닌 행렬의 곱은 완전 음 아닌 행렬이다. 생성함수로는 두 생성함수의 곱이다. $1,1$ 은 Pólya 빈도 수열이므로 그 $m$ 번 합성곱인 이항계수 $\binom m0,\dots,\binom mm$ 도 그렇다.

## Aissen–Schoenberg–Whitney–Edrei 정리

**정리.** $a\_0=1$ 인 수열이 Pólya 빈도 수열인 것은 생성함수가 다음 꼴인 것과 동치다[^1][^2].

$$
\sum\_{k\ge 0}a\_kz^k=e^{\gamma z}\prod\_{i\ge 1}\frac{1+\alpha\_iz}{1-\beta\_iz}
$$

여기서 $\gamma\ge 0$, $\alpha\_i,\beta\_i\ge 0$ 이고 $\sum\_i(\alpha\_i+\beta\_i)\lt\infty$ 다. 충분성은 각 인수 $1+\alpha z$, $1/(1-\beta z)=\sum\beta^kz^k$, $e^{\gamma z}$ 의 계수열이 Pólya 빈도 수열이라는 것과 합성곱에 대한 닫힘으로 나온다. 필요성은 Edrei 가 Nevanlinna 의 유리형 함수 이론으로 증명했다.

유한 수열이면 $\gamma=0$, $\beta\_i=0$ 이고, 생성함수가 $\prod(1+\alpha\_iz)$ 다. 그래서 유한 수열이 Pólya 빈도 수열인 것은 생성함수의 근이 모두 $0$ 이하의 실수인 것과 동치다.

## 실근 다항식의 계수

근이 모두 실수인 $n$ 차 다항식 $\sum\_ka\_kz^k$ 의 계수는 [Maclaurin 부등식](maclaurin-inequality.md)과 함께 쓰이는 Newton 부등식(Newton's inequalities)을 만족하고, 이것은 로그 오목보다 강하다.

$$
a\_k^2\ge a\_{k-1}a\_{k+1}\Bigl(1+\frac1k\Bigr)\Bigl(1+\frac1{n-k}\Bigr)
$$

계수가 음이 아니면 근이 $0$ 이하이므로 위 정리에 따라 Pólya 빈도 수열이기도 하다.

# 활용

- 조합론의 단봉성. 그래프의 매칭 수를 크기별로 센 수열은 매칭 다항식의 근이 모두 실수라는 [Heilmann–Lieb 정리](heilmann-lieb-theorem.md)에 따라 Pólya 빈도 수열이고, 그래서 로그 오목이고 단봉이다.
- 무한 대칭군의 지표. 무한 대칭군의 극단 지표를 분류한 [Thoma 정리](thoma-theorem.md)의 매개변수가 위 정리의 $\alpha\_i$, $\beta\_i$, $\gamma$ 와 같은 꼴이다.
- Pólya 빈도 함수. 실수 위의 함수 $f$ 에 대해 $\lbrack f(x\_i-y\_j)\rbrack$ 가 모두 완전 음 아닌 행렬이면 Pólya 빈도 함수라 하고, Schoenberg 는 그 [Laplace 변환](laplace-transform.md)의 역수가 근이 실수인 정함수의 극한이라는 것을 보였다. 이런 함수와의 합성곱은 신호의 부호 변화 수를 늘리지 않는다.

[^1]: M. Aissen, I. J. Schoenberg, A. M. Whitney, "On the generating functions of totally positive sequences I", Journal d'Analyse Mathématique 2 (1952), 93–103.
[^2]: A. Edrei, "On the generating functions of totally positive sequences II", Journal d'Analyse Mathématique 2 (1952), 104–109.

# 연관 문서

## 선수지식

- [완전 음 아닌 행렬](totally-nonnegative-matrices.md)
- [생성함수](generating-functions.md)

## 더 알아보기

- [Heilmann–Lieb 정리](heilmann-lieb-theorem.md)
- [Thoma 정리](thoma-theorem.md)

#combinatorics #linear_algebra #complex_analysis
