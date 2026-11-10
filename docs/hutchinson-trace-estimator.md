# Hutchinson 대각합 추정량

# 개요

**Hutchinson 대각합 추정량(Hutchinson trace estimator)** 은 성분이 무작위인 벡터 $z$ 로 $z^{\mathsf T}Az$ 를 여러 번 계산해 평균한 값으로 정사각행렬 $A$ 의 대각합을 추정하는 방법이다. 행렬 $A^{-1}$ 이나 신경망 출력의 미분행렬처럼 성분을 직접 볼 수 없고 벡터와의 곱만 계산할 수 있는 행렬은, 대각 성분 $n$ 개를 하나씩 꺼내려면 곱셈이 $n$ 번 든다. 이 추정량은 $\pm 1$ 벡터와의 곱 몇십 번으로 대각합의 기댓값이 정확한 추정을 주고, 그 분산을 행렬의 대각 밖 성분으로 계산할 수 있게 한다.

# 직관

$A=\begin{pmatrix}2&1\cr 1&3\end{pmatrix}$ 의 대각합은 $5$ 다. 각 성분이 독립으로 확률 $1/2$ 씩 $1$ 과 $-1$ 인 $z=(z_1,z_2)$ 를 뽑으면 $z_1^2=z_2^2=1$ 이므로

$$
z^{\mathsf T}Az=2z_1^2+3z_2^2+2z_1z_2=5+2z_1z_2
$$

이다. $z_1z_2$ 는 $1$ 과 $-1$ 이 반반이므로 $z^{\mathsf T}Az$ 는 $7$ 과 $3$ 이 반반이고 평균이 $5$ 다. 대각 성분은 $z_i^2=1$ 덕분에 그대로 남고, 대각 밖 성분은 부호가 반반으로 섞여 평균에서 사라진다.

추정의 오차는 대각 밖 성분이 정한다. 위에서 $z^{\mathsf T}Az-5=\pm 2$ 이고 분산은 $4$ 다. 이런 $z$ 를 $m$ 개 뽑아 평균하면 분산이 $4/m$ 이 된다.

# 정의

$E\lbrack zz^{\mathsf T}\rbrack=I$ 인 확률벡터 $z\in\mathbb R^n$ 의 독립 표본 $z^{(1)},\dots,z^{(m)}$ 에 대해

$$
\widehat{\mathrm{tr}}\_m(A)=\frac1m\sum_{k=1}^{m}z^{(k)\mathsf T}Az^{(k)}
$$

를 $A$ 의 대각합 추정량이라 한다. 성분이 독립으로 $\pm 1$ 인 **Rademacher 벡터(Rademacher vector)** 를 쓰면 Hutchinson 추정량이라 한다[^1]. 직관 절은 $n=2$, $m=1$ 인 경우다.

# 성질

## 불편성

$$
\mathbb E\lbrack z^{\mathsf T}Az\rbrack=\mathbb E\lbrack\mathrm{tr}(Azz^{\mathsf T})\rbrack=\mathrm{tr}(A\thinspace\mathbb E\lbrack zz^{\mathsf T}\rbrack)=\mathrm{tr}\thinspace A
$$

[공분산](covariance.md)이 단위행렬인 분포면 어느 것이든 불편추정량이다.

## 분산

$A$ 가 대칭이면 다음이 성립한다.

$$
\mathrm{Var}\lbrack z^{\mathsf T}Az\rbrack=\begin{cases}2\sum_{i\ne j}a_{ij}^2=2\bigl(\Vert A\Vert\_F^2-\sum_ia_{ii}^2\bigr)&z\text{ 가 Rademacher 벡터}\cr 2\Vert A\Vert\_F^2&z\text{ 가 표준 정규벡터}\end{cases}
$$

직관 절의 $A$ 에서 Rademacher 벡터는 $2(1+1)=4$, 정규벡터는 $2(4+1+1+9)=30$ 이다. 성분이 독립이고 평균 $0$, 분산 $1$ 인 분포 가운데 Rademacher 분포의 분산이 가장 작다[^1]. 대각행렬은 Rademacher 벡터 한 개로 정확한 대각합이 나온다.

## 표본 수

$A$ 가 양의 준정부호이면 $\Vert A\Vert\_F\le\mathrm{tr}\thinspace A$ 이므로 상대 분산이 $2/m$ 이하다. 확률 $1-\delta$ 로 상대 오차 $\varepsilon$ 이하가 되는 데 $m=O(\varepsilon^{-2}\log(1/\delta))$ 개면 충분하다[^2]. [집중부등식](concentration-inequalities.md)을 [이차형식](quadratic-forms.md) $z^{\mathsf T}Az$ 에 쓴 결과다.

## 큰 고윳값의 분리

$A$ 의 큰 고윳값 몇 개가 대각합의 대부분이면, [무작위 특이값 분해](randomized-svd.md)의 무작위 치역 찾기로 그 고유공간을 근사한 $Q$ 에서 $\mathrm{tr}(Q^{\mathsf T}AQ)$ 를 정확히 계산하고 나머지 $(I-QQ^{\mathsf T})A(I-QQ^{\mathsf T})$ 에만 추정량을 쓴다. 나머지의 Frobenius 노름이 작아져 같은 정확도에 드는 곱셈이 $O(1/\varepsilon)$ 번으로 줄어든다. 이 방법을 Hutch++ 라 한다[^3].

# 활용

- 행렬 함수의 대각합. $\mathrm{tr}\thinspace f(A)$ 에서 $z^{\mathsf T}f(A)z$ 를 [Lanczos 반복](lanczos-iteration.md)의 [Gauss 구적](gaussian-quadrature.md)으로 계산한다. $f=\log$ 이면 $\log\det A$ 이고, [Gauss 과정](gaussian-processes.md)의 가능도 계산에 쓴다.
- 연속 정규화 흐름. [흐름 정합](flow-matching.md)과 연속 시간 흐름 모형에서 로그밀도의 변화율은 속도장 Jacobian 의 대각합이고, [자동미분](automatic-differentiation.md)이 주는 Jacobian–벡터 곱 하나로 $z^{\mathsf T}Jz$ 를 계산해 이 추정량을 쓴다.
- 평활 매개변수 선택. Hutchinson 은 평활 스플라인의 영향 행렬 $H$ 의 대각합 $\mathrm{tr}\thinspace H$ 를 이 방법으로 추정했다[^1]. 일반화 교차검증(generalized cross-validation)의 분모가 $\mathrm{tr}(I-H)$ 다.
- 그래프의 삼각형 수. 인접행렬 $A$ 에서 $\mathrm{tr}(A^3)$ 은 삼각형 수의 $6$ 배이므로, $z^{\mathsf T}A(A(Az))$ 의 평균으로 삼각형 수를 추정한다.

[^1]: M. F. Hutchinson, "A stochastic estimator of the trace of the influence matrix for Laplacian smoothing splines", *Communications in Statistics – Simulation and Computation* 18 (1989), 1059–1076.

[^2]: H. Avron and S. Toledo, "Randomized algorithms for estimating the trace of an implicit symmetric positive semi-definite matrix", *Journal of the ACM* 58 (2011), Article 8.

[^3]: R. A. Meyer, C. Musco, C. Musco and D. P. Woodruff, "Hutch++: optimal stochastic trace estimation", *Symposium on Simplicity in Algorithms* (2021), 142–155.

# 연관 문서

## 선수지식

- [공분산](covariance.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #probability #statistics #algorithms
