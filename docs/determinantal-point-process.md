# 결정점과정

# 개요

**결정점과정(determinantal point process)** 은 점들 사이의 모든 상관을 핵 $K$ 하나로 압축한 점과정(point process)이다. 무작위 [행렬](matrices.md)의 [고윳값](eigenvalues.md)을 수직선에 찍으면, 빗방울처럼 아무렇게나 떨어진 점들과 달리 서로 가까이 붙은 쌍이 드물고 점들이 고르게 퍼진다. 결정점과정은 점들이 함께 놓일 밀도를 행렬식으로 적어 이런 밀어냄을 표현하고, 점의 개수나 빈 구간의 확률을 행렬식 계산으로 구한다.

# 직관

두 자리 $1$, $2$ 에 점을 놓을지 무작위로 정한다. 각 자리에 점이 있을 확률은 $1/2$ 이다. 두 자리를 독립으로 정하면 둘 다 점이 있을 확률은 $1/4$ 이다. 두 자리가 가까워 점이 함께 놓이기 어렵게 하려면 이 확률을 $1/4$ 보다 작게 해야 한다.

확률을 $2\times2$ 행렬 $K=\begin{pmatrix}1/2&b\cr b&1/2\end{pmatrix}$ 로 적는다. 한 자리에 점이 있을 확률은 대각성분 $1/2$ 이고, 둘 다 있을 확률은 [행렬식](determinants.md) $\det K=1/4-b^2$ 이다. $b=0$ 이면 독립이고, $b=1/2$ 이면 두 점이 함께 놓이는 일이 없어 언제나 점이 정확히 하나다. 자리가 많아져도 $k$ 개 자리에 점이 함께 있을 확률을 $K$ 의 $k\times k$ 주부분행렬의 행렬식으로 정하면, 두 행이 비슷한 자리끼리는 행렬식이 작아 함께 놓이기 어렵다.

무작위 [행렬](matrices.md)의 고윳값이 이런 분포를 따른다. 점들이 서로 무관한 [Poisson 과정](poisson-process.md)과 달리 고윳값은 가까이 붙은 쌍이 드물다.

# 정의

## 상관함수와 핵

국소유한(locally finite) 점과정의 $k$ 차 **상관함수(correlation function)** $\rho_k$ 는 서로 다른 $k$ 개의 점이 $dx_1,\dots,dx_k$ 안에 하나씩 있을 확률이 $\rho_k\thinspace dx_1\cdots dx_k$ 가 되도록 정의한다. 모든 $k$ 에 대해

$$
\rho_k(x_1,\dots,x_k) = \det\bigl\lbrack K(x_i,x_j)\bigr\rbrack
$$

를 만족하는 핵 $K$ 가 있으면 이 과정을 **결정점과정** 이라 하고 $K$ 를 그 **핵(kernel)** 이라 한다.

## 유한 집합 위의 결정점과정

$N\times N$ 행렬 $K$ 에 대해 뽑히는 부분집합 $S$ 의 확률이

$$
\Pr\lbrack A \subseteq S\rbrack = \det K_A
$$

로 주어진다. $K_A$ 는 $A$ 로 지표된 주부분행렬이다. 직관 절의 $2\times2$ 행렬 $K$ 에서 $\Pr\lbrack\lbrace1,2\rbrace\subseteq S\rbrack=1/4-b^2$ 이다. 기계학습에서는 $L$ 앙상블(L-ensemble) 형식

$$
\Pr\lbrack S\rbrack = \frac{\det L_S}{\det(I+L)}, \qquad K = L(I+L)^{-1}
$$

을 쓴다. $L$ 이 자료점 사이의 유사도 행렬이면 $\det L_S$ 가 그 자료점들이 펼치는 부피이고, 서로 다른 항목을 함께 고를수록 확률이 커진다. $L=\begin{pmatrix}1&c\cr c&1\end{pmatrix}$ 이면 $\det(I+L)=4-c^2$ 이고 $\Pr\lbrack S=\lbrace1,2\rbrace\rbrack=(1-c^2)/(4-c^2)$ 이다. 두 항목이 같을수록, 곧 $c\to1$ 일수록 함께 뽑힐 확률이 $0$ 으로 간다.

## 표준적인 핵

무작위 행렬의 스펙트럼 안쪽을 확대하면 sine 핵(sine kernel)

$$
K_{\sin}(x,y) = \frac{\sin\pi(x-y)}{\pi(x-y)}
$$

이 나오고, 가장자리를 $N^{2/3}$ 배로 확대하면 [Airy 함수](airy-functions.md)로 만든 Airy 핵(Airy kernel)

$$
K_{\mathrm{Ai}}(x,y) = \frac{\mathrm{Ai}(x)\mathrm{Ai}'(y)-\mathrm{Ai}'(x)\mathrm{Ai}(y)}{x-y}
$$

가 나온다. 둘 다 사영작용소의 핵이다. sine 핵은 $\lbrack-\tfrac12,\tfrac12\rbrack$ 위 Fourier 모드로의 사영, Airy 핵은 Airy 변환에서 음의 스펙트럼으로의 사영이다.

정수 위에서 밀도 $\rho$ 의 이산 sine 핵(discrete sine kernel)은 $x\ne y$ 에서 $K(x,y)=\sin\pi\rho(x-y)/\pi(x-y)$, $K(x,x)=\rho$ 다. $\rho=1/2$ 이면 거리 $1$ 인 두 점이 함께 있을 확률은 $\rho^2-K(0,1)^2=1/4-1/\pi^2\approx0.1487$ 로 독립값 $0.25$ 보다 작고, 거리 $2$ 에서는 $K(0,2)=0$ 이라 독립값과 같다.

# 성질

## 존재

$K$ 가 [자기수반 작용소](bounded-operators.md)이고 $0 \preceq K \preceq I$ 이면 $K$ 를 핵으로 하는 결정점과정이 존재하고 유일하다. 이것이 Macchi–Soshnikov 정리(Macchi–Soshnikov theorem)다. $K$ 의 고윳값이 $1$ 을 넘으면 어떤 $k$ 에서 행렬식이 음수가 되어 $\rho_k \ge 0$ 이 성립하지 않는다.

## 행렬식과 반발

두 점이 가까우면 $K(x_1,\cdot)$ 과 $K(x_2,\cdot)$ 이 거의 같은 함수라 행렬의 두 행이 거의 같아지고 행렬식이 0 에 가까워진다.

$$
\rho_2(x,y) = K(x,x)K(y,y) - K(x,y)^2 \le \rho_1(x)\rho_1(y)
$$

두 점을 함께 볼 확률이 독립일 때보다 작다. 같은 이유로 양의 상관이 있는 점과정, 곧 뭉치는 점들은 결정점과정이 아니다.

## 개수의 Bernoulli 분해

영역 $B$ 로 제한한 작용소 $K_B$ 의 고윳값을 $\lambda_1,\lambda_2,\dots$ 라 하면 $B$ 안의 점 개수가

$$
\char35{}(B) \thickspace\overset{d}{=}\thickspace \sum_i \mathrm{Bern}(\lambda_i)
$$

로 독립 Bernoulli 확률변수들의 합과 같은 분포를 가진다. 점들은 독립이 아니지만 개수는 독립합으로 분해된다. 여기서 $\mathbb E\char35{}(B) = \mathrm{tr}K_B$ 와 $\mathrm{Var}\char35{}(B) = \sum\lambda_i(1-\lambda_i) \le \mathbb E\char35{}(B)$ 가 따라 나온다. 분산이 평균보다 작다는 것이 반발의 정량적 표현이며, [집중부등식](concentration-inequalities.md)과 [중심극한정리](central-limit-theorem.md)도 이 분해에서 나온다.

$K_B$ 가 사영이면 모든 $\lambda_i$ 가 0 또는 1 이라 개수가 결정론적이다. $N$ 차원 사영핵의 결정점과정은 정확히 $N$ 개의 점을 낸다.

## 빈 공간 확률

구간 $(s,\infty)$ 에 점이 하나도 없을 확률이 다음 [Fredholm 행렬식](fredholm-determinant.md)이다.

$$
\Pr\lbrack\char35{}(s,\infty) = 0\rbrack = \det\bigl(I - K\bigr)\_{L^2(s,\infty)}
$$

최대 점의 분포함수가 이 값이므로 Airy 핵에 적용하면 [Tracy–Widom 분포](tracy-widom.md) $F_2$ 가 정의된다. 최댓값의 분포를 구하는 문제가 작용소의 행렬식 계산이 된다.

## 무작위 행렬 바깥의 예

- 균등 생성수형도. 유한 [그래프](graphs.md)의 생성수형도를 균등하게 뽑으면 뽑힌 변들의 집합이 전달 전류 행렬(transfer current matrix)을 핵으로 하는 결정점과정이다. 이것이 Burton–Pemantle 정리(Burton–Pemantle theorem)이고, 변들이 음의 상관을 가진다는 것이 유도된다.
- 비교차 경로와 타일링. 겹치지 않는 격자 경로들의 위치와 마름모 타일링의 무늬가 결정점과정이고, 북극권 현상(arctic circle phenomenon)이 이 성질로 증명된다.
- Pauli 배타원리(Pauli exclusion principle). 자유 페르미온(fermion)의 다체 파동함수는 Slater 행렬식(Slater determinant)이고, 그 절댓값 제곱에서 입자 위치의 상관이 결정점과정의 꼴로 나온다. 두 전자가 같은 자리에 있을 밀도가 $0$ 인 것은 행렬식의 두 행이 같아지는 것이다.
- 자료의 다양성 선택. 추천이나 요약에서 서로 비슷하지 않은 항목을 고를 때 $L$ 앙상블에서 표본을 뽑는다.

# 활용

## 표본추출

연쇄법칙으로 결정점과정을 정확히 표본추출한다. 지표를 하나씩 보면서 조건부 확률로 뽑고, 뽑았는지 여부에 따라 핵을 [Schur 보수](schur-complement.md)로 갱신한다. 갱신식의 분모만 다르다.

## 이 틀의 쓰임

- 개수의 분포, 빈 공간 확률, 최대·최소의 분포가 작용소의 고윳값이나 Fredholm 행렬식으로 쓰이므로 극한을 취하기 쉽다. 무작위 행렬의 국소 통계에 대한 정리 대부분이 이 경로로 증명된다.
- 표본추출이 다항시간이다. 위 알고리즘은 $O(N^3)$ 이고 스펙트럼 분해를 이용한 판본은 표본마다 $O(N k^2)$ 다.
- 고윳값, 생성수형도, 타일링, 비교차 경로가 모두 결정점과정이라 한쪽에서 증명한 극한정리가 다른 쪽으로 옮겨 간다. 그래서 Tracy–Widom 분포가 이 여러 분야에 나타난다.[^1]

[^1]: J. Ben Hough, Manjunath Krishnapur, Yuval Peres, Bálint Virág, *Determinantal Processes and Independence*, Probability Surveys 3 (2006), 206–229. 정의와 존재 정리, 개수의 독립 베르누이 분해, 표본추출 알고리즘.

# 연관 문서

## 선수지식

- [Fredholm 행렬식](fredholm-determinant.md)
- [확률변수](random-variables.md)

## 더 알아보기

- [Tracy–Widom 분포](tracy-widom.md)
- [쌍 상관 추측](pair-correlation-conjecture.md)

#probability #linear_algebra
