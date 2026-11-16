# 합동 부분군

# 개요

**합동 부분군(congruence subgroup)** 은 [모듈러 군](modular-group.md)의 원소 가운데 행렬 성분이 어떤 정수 $N$ 을 법으로 정해진 조건을 만족하는 것들의 부분군이다. 행렬 $\begin{pmatrix}a&b\cr c&d\end{pmatrix}$ 의 왼쪽 아래 성분 $c$ 가 짝수인 것만 모아도 곱셈에 닫혀 있고, 이 부분군은 상반평면을 모듈러 군보다 세 배 넓은 조각으로 나눈다. 성분을 $N$ 으로 나눈 나머지만 보면 무한한 군의 문제가 유한한 행렬군의 계산으로 바뀌고, 지수, 기본 영역의 넓이, 첨점의 개수가 그 계산에서 나온다.

# 직관

$\mathrm{SL}\_2(\mathbb Z)$ 의 원소의 성분을 $2$ 로 나눈 나머지로 바꾸면 성분이 $0$ 과 $1$ 인 행렬식 $1$ 의 행렬이 나온다. 그런 행렬은 다음 여섯 개다.

$$
\begin{pmatrix}1&0\cr 0&1\end{pmatrix},\ \begin{pmatrix}1&1\cr 0&1\end{pmatrix},\ \begin{pmatrix}1&0\cr 1&1\end{pmatrix},\ \begin{pmatrix}0&1\cr 1&0\end{pmatrix},\ \begin{pmatrix}0&1\cr 1&1\end{pmatrix},\ \begin{pmatrix}1&1\cr 1&0\end{pmatrix}
$$

나머지를 취하는 것은 곱을 보존하므로, 나머지가 단위행렬인 원소들은 부분군을 이루고 그 지수는 $6$ 이다. 나머지가 처음 두 행렬 가운데 하나인 원소들, 곧 $c$ 가 짝수인 원소들도 부분군을 이루고 지수는 $6/2=3$ 이다. 모듈러 군의 $T:\tau\mapsto\tau+1$ 은 $c=0$ 이라 이 부분군에 들고, $S:\tau\mapsto-1/\tau$ 는 $c=1$ 이라 들지 않는다.

# 정의

## 세 가지 합동 부분군

양의 정수 $N$ 에 대해 다음 세 부분군을 둔다. 합동식은 [정수의 합동](modular-arithmetic.md)의 합동식이다.

$$
\begin{aligned}
\Gamma(N)&=\lbrace\gamma\in\mathrm{SL}\_2(\mathbb Z):\gamma\equiv I\pmod N\rbrace\cr
\Gamma\_1(N)&=\lbrace\gamma\in\mathrm{SL}\_2(\mathbb Z):c\equiv 0,\ a\equiv d\equiv 1\pmod N\rbrace\cr
\Gamma\_0(N)&=\lbrace\gamma\in\mathrm{SL}\_2(\mathbb Z):c\equiv 0\pmod N\rbrace
\end{aligned}
$$

$\Gamma(N)$ 을 **주합동 부분군(principal congruence subgroup)** 이라 한다. $\Gamma(N)\subseteq\Gamma\_1(N)\subseteq\Gamma\_0(N)$ 이다. 직관 절의 지수 $6$ 인 부분군이 $\Gamma(2)$ 이고 지수 $3$ 인 부분군이 $\Gamma\_0(2)=\Gamma\_1(2)$ 다.

$\mathrm{SL}\_2(\mathbb Z)$ 의 부분군 $\Gamma$ 가 어떤 $N$ 에 대해 $\Gamma(N)$ 을 포함하면 $\Gamma$ 를 합동 부분군이라 한다.

## 레벨

$\Gamma(N)\subseteq\Gamma$ 인 가장 작은 $N$ 을 $\Gamma$ 의 **레벨(level)** 이라 한다. $\Gamma\_0(N)$ 과 $\Gamma\_1(N)$ 의 레벨은 $N$ 이다.

# 성질

## 축소 사상의 전사성

나머지를 취하는 사상 $\mathrm{SL}\_2(\mathbb Z)\to\mathrm{SL}\_2(\mathbb Z/N\mathbb Z)$ 는 전사이고 그 핵이 $\Gamma(N)$ 이다. 따라서 $\Gamma(N)$ 은 정규부분군이고 지수는 $\mathrm{SL}\_2(\mathbb Z/N\mathbb Z)$ 의 위수다. 전사성의 요지는 행렬식이 $1$ 을 법으로 $N$ 인 정수 행렬에서 성분을 $N$ 의 배수만큼 고쳐 서로소인 첫 열을 만들고, 그 열을 행렬식 $1$ 인 정수 행렬로 채우는 것이다.

## 지수

소수 $p$ 가 $N$ 을 나누는 것 전체에 대한 곱으로 지수는 다음이다.

$$
\begin{aligned}
\lbrack\mathrm{SL}\_2(\mathbb Z):\Gamma(N)\rbrack&=N^3\prod\_{p\mid N}\left(1-\frac1{p^2}\right)\cr
\lbrack\mathrm{SL}\_2(\mathbb Z):\Gamma\_1(N)\rbrack&=N^2\prod\_{p\mid N}\left(1-\frac1{p^2}\right)\cr
\lbrack\mathrm{SL}\_2(\mathbb Z):\Gamma\_0(N)\rbrack&=N\prod\_{p\mid N}\left(1+\frac1p\right)
\end{aligned}
$$

$N=2$ 이면 $6$, $3$, $3$ 이고 직관 절의 셈과 같다. $\Gamma\_0(N)$ 의 지수는 $\mathrm{SL}\_2(\mathbb Z/N\mathbb Z)$ 가 법 $N$ 의 사영직선의 점 $(c:d)$ 에 작용할 때 $(0:1)$ 의 궤도의 크기이고, 소수 $p$ 이면 $p+1$ 이다.

## 기본 영역과 첨점

$-I\in\Gamma\_0(N)$ 이므로 $\Gamma\_0(N)$ 의 기본 영역은 모듈러 군의 기본 영역 $\mathcal F$ 의 복사본을 지수만큼 모은 것이고, 넓이는 지수에 $\pi/3$ 을 곱한 값이다. $\Gamma\_0(2)$ 는 $\mathcal F$, $S\mathcal F$, $ST\mathcal F$ 를 모은 넓이 $\pi$ 인 영역이다. 소수 $p$ 에 대해 $\Gamma\_0(p)$ 의 첨점은 $\infty$ 와 $0$ 의 두 궤도다.

## 합동 부분군이 아닌 부분군

$\mathrm{SL}\_2(\mathbb Z)$ 에는 지수가 유한하지만 합동 부분군이 아닌 부분군이 있다. 모듈러 군이 $\mathbb Z/2\ast\mathbb Z/3$ 이어서 유한군 위로 가는 전사 준동형이 많고, 그 핵이 어느 $\Gamma(N)$ 도 포함하지 않는 경우가 있다.

# 활용

- [모듈러 형식](modular-forms.md): 무게 $k$ 레벨 $N$ 의 모듈러 형식은 $\Gamma\_0(N)$ 이나 $\Gamma\_1(N)$ 에 대한 변환 규칙으로 정의된다.
- [모듈러 곡선](modular-curves.md): $\Gamma\_0(N)$ 으로 상반평면을 나눈 몫에 첨점을 더한 곡선이 $X\_0(N)$ 이다. $X\_0(11)$ 은 종수 $1$ 이고 타원곡선이다.
- [Maass 형식](maass-forms.md): $\Gamma\_0(N)$ 의 몫 위 Laplace 고윳값에 대한 Selberg 의 $\lambda\ge 3/16$ 하계가 합동 부분군에서 증명된다.

# 연관 문서

## 선수지식

- [모듈러 군](modular-group.md)
- [정수의 합동](modular-arithmetic.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory
