# 자유확률

# 개요

[비교차 분할](noncrossing-partitions.md)로 적률을 전개하면 확률변수의 독립을 대신하는 조건이 나온다. 그 조건을 만족하는 변수들의 합은 보통의 합성곱이 아닌 다른 법칙을 따른다.

자유확률은 곱이 교환하지 않는 변수에 그 조건을 둔 확률론이다. 중심극한정리의 자리에 [Wigner 반원법칙](wigner-semicircle.md)이 오고, 큰 무작위 행렬의 고윳값 분포가 이 이론의 계산으로 나온다.

# 직관

독립인 확률변수 $X,Y$ 의 합의 분포는 합성곱이고, 적률은 $E\lbrack(X+Y)^n\rbrack$ 을 전개해 혼합항 $E\lbrack X^aY^b\rbrack=E\lbrack X^a\rbrack E\lbrack Y^b\rbrack$ 으로 쪼개면 나온다.

같은 일을 큰 무작위 행렬 두 개에 한다. $A,B$ 가 $N\times N$ 대칭행렬이고 각자의 고윳값 분포가 정해져 있을 때 $A+B$ 의 고윳값 분포를 구하려 한다. 기댓값의 자리에는 규격화한 대각합 $\tau(M)=N^{-1}\mathrm{tr}\thinspace M$ 을 둔다. 행렬은 교환하지 않으므로 $\tau\lbrack(A+B)^n\rbrack$ 을 전개하면 $\tau(ABAB)$ 처럼 번갈아 나오는 항이 남고, 이 항은 $\tau(A^2)\tau(B^2)$ 로 쪼개지지 않는다.

$A$ 와 $B$ 의 고유벡터가 서로 무작위한 방향을 향하면 그 항의 값을 계산할 수 있다. $N\to\infty$ 에서 $\tau(ABAB)=\tau(A)^2\tau(B^2)+\tau(A^2)\tau(B)^2-\tau(A)^2\tau(B)^2$ 이 되고, 평균이 $0$ 인 경우 이 값은 $0$ 이다. 독립일 때 혼합적률이 곱으로 쪼개지던 자리에 다른 규칙이 들어선 것이고, 그 규칙을 적률의 언어로 적은 것이 비교차 분할의 합이다.

# 정의

## 비교환 확률공간

단위원을 갖는 대수 $\mathcal A$ 와 선형함수 $\tau:\mathcal A\to\mathbb C$ 가 $\tau(1)=1$ 을 만족하는 쌍 $(\mathcal A,\tau)$ 를 **비교환 확률공간**이라 한다. $\mathcal A$ 의 원소를 확률변수라 부르고 $\tau(a^n)$ 을 적률이라 한다. $\mathcal A$ 가 교환하는 함수들의 대수이고 $\tau$ 가 적분이면 보통의 확률공간이다.

## 자유독립

부분대수 $\mathcal A_1,\mathcal A_2\subset\mathcal A$ 가 **자유독립**이라는 것은, 번갈아 고른 원소들의 중심화된 곱의 $\tau$ 값이 $0$ 이라는 뜻이다. $a_1,\dots,a_k$ 가 번갈아 두 부분대수에서 오고 각각 $\tau(a_i)=0$ 이면 다음이 성립한다.

$$
\tau(a_1a_2\cdots a_k)=0
$$

## 자유 누적량

적률 $m_n=\tau(a^n)$ 에 대해 비교차 분할의 합으로 정의되는 수열 $\kappa_n$ 을 $a$ 의 **자유 누적량**이라 한다.

$$
m_n=\sum\_{\pi\in\mathrm{NC}(n)}\prod\_{V\in\pi}\kappa\_{\vert V\vert}
$$

두 변수가 자유독립인 것은 혼합 자유 누적량이 모두 $0$ 인 것과 같다[^1]. 따라서 자유독립인 변수의 합에서는 자유 누적량이 더해진다.

# 성질

## R 변환

$a$ 의 **R 변환**을 자유 누적량의 생성함수 $R_a(z)=\sum\_{n\ge 1}\kappa_nz^{n-1}$ 으로 둔다. $a$ 와 $b$ 가 자유독립이면 다음이 성립한다.

$$
R\_{a+b}(z)=R_a(z)+R_b(z)
$$

고전 확률에서 누적량의 생성함수가 로그 특성함수이고 독립인 합에서 더해지는 것과 같은 자리다. 분포를 Cauchy 변환 $G_a(z)=\tau\bigl((z-a)^{-1}\bigr)$ 로 적으면 $R$ 은 $G$ 의 역함수에서 $1/z$ 를 뺀 것이다.

## 자유 중심극한정리

$a_1,a_2,\dots$ 가 자유독립이고 평균 $0$, 분산 $1$ 이면 $(a_1+\dots+a_n)/\sqrt n$ 의 분포가 반원분포로 수렴한다.

증명의 요지. 자유 누적량이 더해지므로 합의 $n$ 번째 자유 누적량은 $n\kappa_n$ 이고, $\sqrt n$ 으로 나누면 $n^{1-n/2}\kappa_n$ 이 된다. $n=2$ 에서 $1$ 로 남고 $n\ge 3$ 에서 $0$ 으로 간다. $\kappa_2$ 만 $0$ 이 아닌 분포가 반원분포다. 고전 쪽에서 같은 계산이 정규분포를 주는 것과 다른 점은 분할의 범위뿐이다.

## 자유 합성곱

자유독립인 두 변수의 합의 분포를 두 분포의 **자유 합성곱** $\mu\boxplus\nu$ 라 한다. $R$ 변환의 덧셈이 이 연산을 계산한다. 반원분포는 자유 합성곱에서 안정분포이고, 고전 합성곱의 정규분포가 맡던 자리를 맡는다.

## 무작위 행렬과의 대응

고유벡터의 방향이 서로 무작위한 두 큰 대칭행렬은 $N\to\infty$ 에서 자유독립이 된다[^2]. 그래서 두 행렬의 합의 고윳값 분포가 각 분포의 자유 합성곱으로 나온다. 직관 절의 $\tau(ABAB)$ 계산이 이 수렴의 가장 짧은 경우다.

# 활용

- **합의 고윳값 분포.** 두 큰 행렬의 합이나 신호에 잡음을 더한 행렬의 고윳값 분포를 $R$ 변환의 덧셈으로 계산한다. [Marchenko–Pastur 법칙](marchenko-pastur.md)도 자유 곱셈 합성곱으로 다시 얻는다.
- **작용소대수의 불변량.** 자유군의 폰노이만 대수를 자유독립인 생성원으로 적고, 자유 엔트로피와 자유 차원으로 그 대수를 구분한다.
- **대형 행렬의 신호 검출.** 관측 행렬의 고윳값 가운데 어느 것이 잡음의 분포를 벗어나는지를 자유 합성곱이 예측한 경계로 판정한다.
- **조합론의 세기.** 비교차 분할의 격자 구조에 대한 항등식이 자유 누적량의 관계식으로 번역되고, 그 반대 방향으로 세기 문제의 답이 나온다.

[^1]: R. Speicher, "Multiplicative functions on the lattice of non-crossing partitions and free convolution", Mathematische Annalen **298** (1994), 611–628.

[^2]: D. Voiculescu, "Limit laws for random matrices and free products", Inventiones Mathematicae **104** (1991), 201–220.

# 연관 문서

## 선수지식

- [비교차 분할](noncrossing-partitions.md)
- [Wigner 반원법칙](wigner-semicircle.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #functional_analysis
