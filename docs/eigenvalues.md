# 고윳값과 고유벡터

# 개요

고유벡터는 선형사상이 방향을 바꾸지 않고 배율만 곱하는 벡터이고, 그 배율이 고윳값이다. 고유벡터로 된 기저를 잡으면 사상은 대각행렬이 되어, 거듭제곱·지수·점화식 같은 반복 적용 문제가 스칼라 계산으로 분해된다. 고윳값은 특성다항식의 근으로 계산되고, 대각화 가능성은 각 고윳값의 기하적 중복도와 대수적 중복도가 같은지로 판정된다[^1]. 대각화가 안 되는 경우에도 Cayley–Hamilton 정리와 Jordan 형이 구조를 준다.

# 직관

행렬이 벡터를 늘이고 돌리는 가운데, 돌지 않고 늘어나기만 하는 방향이 고유벡터다. $A=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}$ 이면 $(1,1)$ 방향은 $3$ 배로, $(1,-1)$ 방향은 $1$ 배로 간다. 이 두 방향을 축으로 삼으면 $A$ 는 대각행렬 $\mathrm{diag}(3,1)$ 이고, $A$ 를 $k$ 번 적용한 결과는 각 축에서 $3^k$ 배와 $1$ 배다.

$N=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 은 고윳값 $0$ 만 갖고 고유벡터가 한 방향뿐이라 대각화되지 않는다. 대각화 판정은 두 단계로 갈린다. 특성다항식이 체 안에서 일차식 $n$ 개로 분해되지 않으면 대각화가 불가능하고, 체를 확장하면 가능해질 수 있다. 분해되더라도 어느 고윳값에서 기하적 중복도가 대수적 중복도보다 작으면 대각화가 불가능하고, 그때는 [Jordan 표준형](jordan-canonical-form.md)까지만 간다.

# 정의

$V$ 를 체 $F$ 위의 유한차원 [벡터 공간](vector-spaces.md), $T$ 를 $V$ 에서 $V$ 로 가는 선형사상이라 하자. $0$ 이 아닌 벡터 $v$ 와 스칼라 $\lambda$ 가 다음을 만족하면 $\lambda$ 를 고윳값, $v$ 를 그에 대한 고유벡터라 한다.

$$
Tv=\lambda v,\qquad v\neq 0
$$

고윳값 $\lambda$ 의 고유공간은 $\lambda I-T$ 의 핵이고, 그 차원이 기하적 중복도다.

$$
E_\lambda=\ker(\lambda I-T),\qquad
m_{\mathrm{geo}}(\lambda)=\dim E_\lambda
$$

$n$ 차 정사각행렬 $A$ 의 특성다항식은 [행렬식](determinants.md)으로 정의되는 $n$ 차 monic 다항식이며, 그 근이 정확히 고윳값이다. $\lambda$ 가 근으로 등장하는 중복도가 대수적 중복도다.

$$
\chi_A(\lambda)=\det(\lambda I-A)
$$

가역행렬 $P$ 가 존재하여 $P^{-1}AP$ 가 대각행렬이면 $A$ 가 대각화 가능하다고 한다. 이때 $P$ 의 열이 고유벡터, 대각 성분이 대응하는 고윳값이다.

$$
A=P\thinspace\mathrm{diag}(\lambda_1,\dots,\lambda_n)\thinspace P^{-1}
$$

# 성질

## 고유벡터의 선형독립

서로 다른 고윳값에 대응하는 고유벡터들은 선형독립이다. 최소 개수의 반례 관계식을 잡고 양변에 $(T-\lambda_1 I)$ 를 적용하면 $\lambda_1$ 항이 사라져 더 짧은 관계식이 나오는데, 이는 최소성에 모순이다. 따라서 서로 다른 고윳값이 $n$ 개면 자동으로 대각화 가능하다.

## 중복도 부등식과 대각화 판정

기하적 중복도는 대수적 중복도를 넘지 않는다. 따라서 대각화 가능은 다음 두 조건이 함께 성립하는 것과 동치다[^1]: 특성다항식이 $F$ 안에서 일차식들의 곱으로 완전히 분해되고(대수적 중복도의 합이 $n$ ), 각 고윳값에서 기하적 중복도가 대수적 중복도와 같다.

$$
1\le m_{\mathrm{geo}}(\lambda)\le m_{\mathrm{alg}}(\lambda)
$$

첫 조건만 깨지는 예로 실수 위의 회전행렬 $\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 은 실고윳값이 없지만 복소수 위에서는 $\pm i$ 로 대각화된다. 두 번째 조건이 깨지는 예가 위의 $N$ 이다. 대수적으로 닫힌 체 위에서는 이 경우에도 대각 성분이 고윳값이고 그 바로 위가 1 인 블록 꼴까지 간다[^3].

## 대각합과 행렬식

특성다항식의 계수 비교로 얻는다. 고윳값을 중복도까지 세면 합이 대각합, 곱이 행렬식이다. 이는 대각화 여부와 무관하게 대수적으로 닫힌 체 위에서 성립한다.

$$
\mathrm{tr}A=\sum_{i=1}^{n}\lambda_i,\qquad
\det A=\prod_{i=1}^{n}\lambda_i
$$

특히 $A$ 가 가역인 것은 $0$ 이 고윳값이 아닌 것과 동치다.

## Cayley–Hamilton

모든 정사각행렬은 자기 자신의 특성다항식을 만족한다[^1][^3].

$$
\chi_A(A)=0
$$

증명 개요: 대각화 가능한 행렬에 대해서는 각 고유방향에서 $\chi_A(\lambda_i)=0$ 이므로 자명하고, 일반 행렬은 대각화 가능한 행렬의 극한(또는 대수적 닫힘 위에서 삼각화)으로 다루거나 adjugate 항등식 $(\lambda I-A)\cdot\mathrm{adj}(\lambda I-A)=\chi_A(\lambda)I$ 를 다항식 환에서 전개해 얻는다. 실용적 결과로 $A^n$ 이 더 낮은 차수의 거듭제곱들로 표현되고, 가역행렬의 역행렬이 $A$ 의 다항식이 된다.

## 유사불변량

$P^{-1}AP$ 는 $A$ 와 같은 특성다항식, 같은 고윳값, 같은 중복도를 갖는다. 반대로 같은 특성다항식을 가져도 유사하지 않을 수 있다. 위의 $N$ 과 영행렬은 특성다항식이 모두 $\lambda^2$ 이지만 계수가 다르다. 완전한 분류는 Jordan 표준형이나 불변인자가 한다.

# 활용

## 거듭제곱과 점화식

대각화된 행렬의 $k$ 제곱은 대각 성분의 $k$ 제곱이다.

$$
A^k=P\thinspace\mathrm{diag}(\lambda_1^k,\dots,\lambda_n^k)\thinspace P^{-1}
$$

Fibonacci 점화식은 $\begin{pmatrix}1&1\cr 1&0\end{pmatrix}$ 의 거듭제곱이고, 그 고윳값이 황금비와 그 켤레이므로 Binet 공식이 나온다.

$$
\lambda_{\pm}=\frac{1\pm\sqrt5}{2},\qquad
F_k=\frac{\lambda_+^k-\lambda_-^k}{\sqrt5}
$$

## 확률과 동역학

[Markov 연쇄](markov-chains.md)의 전이행렬은 고윳값 1 과 그에 대응하는 정상분포를 갖는다. 두 번째로 큰 고윳값의 절댓값이 수렴 속도를 지배한다. 연속시간에서는 [상미분방정식](ordinary-differential-equations.md) 선형계의 해가 고윳값의 지수함수로 분해되고, 실부의 부호가 안정성을 결정한다.

$$
x'=Ax\ \Longrightarrow\ x(t)=\sum_i c_i e^{\lambda_i t}v_i
$$

## 그래프와 수치계산

[그래프 Laplacian](graph-laplacian.md)의 고윳값은 연결성과 확장성을 잰다. [유효저항](effective-resistance.md)과 [랜덤 워크](random-walks.md)의 혼합시간이 이 스펙트럼으로 표현된다. 수치 계산에서는 특성다항식의 근을 구하지 않고 QR 알고리즘이나 거듭제곱 반복을 쓴다. 특성다항식의 근을 직접 구하는 방식은 계수의 미소 오차가 근을 크게 흔들어 쓰이지 않는다.

실대칭행렬은 고유벡터를 직교로 고를 수 있고, 그 진술이 [스펙트럼 정리](spectral-theorem.md)다[^2].

[^1]: Irena Penev, Linear Algebra 2, Lecture 19 — The Cayley–Hamilton theorem, Diagonalization, Charles University. https://iuuk.mff.cuni.cz/~ipenev/LA2S2023Lecture19slides.pdf
[^2]: Oliver Knill, Math 21b — Diagonalization, Harvard University. https://abel.math.harvard.edu/archive/21b_fall_03/handouts/diagonalization.pdf
[^3]: Gabriel Day, The Cayley–Hamilton and Jordan Normal Form Theorems, University of Chicago REU 2017. https://math.uchicago.edu/~may/REU2017/REUPapers/Day.pdf

# 연관 문서

## 선수지식

- [행렬식](determinants.md)
- [선형사상](linear-maps.md)

## 더 알아보기

### 구조 정리

- [스펙트럼 정리](spectral-theorem.md)
- [Jordan 표준형](jordan-canonical-form.md)

### 스펙트럼이 쓰이는 곳

- [Perron–Frobenius 정리](perron-frobenius.md)
- [Expander 그래프와 스펙트럼 간극](expander-graphs.md)
- [군의 표현과 지표](group-representations.md)
- [Wigner 반원법칙](wigner-semicircle.md)

#linear_algebra #algebra #probability #analysis
