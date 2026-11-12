# 직교 Procrustes 문제

# 개요

**직교 Procrustes 문제(orthogonal Procrustes problem)** 는 점들의 배치 하나를 돌리기만 해서 다른 배치에 가장 가깝게 겹치는 회전을 찾는 문제다. 같은 분자를 두 번 측정해 원자 좌표를 얻으면 두 좌표 묶음은 측정 오차와 함께 서로 돌아가 있고, 둘을 비교하려면 먼저 가장 잘 맞는 회전으로 한쪽을 돌려야 한다. 그 회전은 두 배치로 만든 행렬 하나의 [극분해](polar-decomposition.md)에서 직교 인수로 나온다.

# 직관

평면의 점 세 개 $(1,0)$, $(0,1)$, $(-1,0)$ 을 열로 둔 [행렬](matrices.md) $B$ 와, 이것을 $90^\circ$ 돌린 뒤 조금 흔든 점들을 열로 둔 행렬 $C$ 가 있다.

$$
B=\begin{pmatrix}1&0&-1\cr 0&1&0\end{pmatrix},\qquad C=\begin{pmatrix}0.1&-1&0\cr 1&0.1&-1\end{pmatrix}
$$

$\Vert XB-C\Vert\_F$ 를 가장 작게 하는 행렬 $X$ 를 아무 제한 없이 고르면 최소제곱해 $X=CB^{\mathsf T}(BB^{\mathsf T})^{-1}$ 이 나온다.

$$
X=\begin{pmatrix}0.05&-1\cr 1&0.1\end{pmatrix}
$$

이 $X$ 는 두 열의 내적이 $0.05$ 라 회전이 아니고, 점들 사이의 거리를 바꾼다. 흔들린 자료에 맞추느라 모양까지 바꾼 것이다.

회전만 허용하면 남는 것은 각 $\theta$ 하나다. $R(\theta)$ 로 돌린 $B$ 와 $C$ 의 거리 제곱은 $\Vert B\Vert\_F^2+\Vert C\Vert\_F^2-2\thinspace\mathrm{tr}(R(\theta)^{\mathsf T}CB^{\mathsf T})$ 이므로 대각합을 크게 하면 된다. $M=CB^{\mathsf T}$ 는 다음과 같다.

$$
M=\begin{pmatrix}0.1&-1\cr 2&0.1\end{pmatrix},\qquad\mathrm{tr}(R(\theta)^{\mathsf T}M)=0.2\cos\theta+3\sin\theta
$$

최대는 $\tan\theta=15$, 곧 $\theta\approx 86.19^\circ$ 에서 나온다. 거리 제곱은 $0.0067$ 로, $90^\circ$ 회전의 $0.02$ 보다 작다.

# 정의

$B$, $C$ 가 $n\times m$ 실행렬일 때, 직교행렬 $Q$ 가운데 다음을 가장 작게 하는 것을 찾는 문제를 **직교 Procrustes 문제** 라 한다.

$$
\Vert QB-C\Vert\_F
$$

$B$, $C$ 의 열이 $\mathbb R^n$ 의 점 $m$ 개이고 $Q$ 가 그 점들을 함께 돌린다. $Q$ 를 [행렬식](determinants.md)이 $1$ 인 회전으로 한정한 문제는 **Kabsch 문제(Kabsch problem)** 라 하고, 그 풀이를 Kabsch 알고리즘(Kabsch algorithm)이라 한다.

# 성질

## 극분해 해

$M=CB^{\mathsf T}$ 의 [특이값 분해](singular-value-decomposition.md)를 $M=U\Sigma V^{\mathsf T}$ 라 하면 $Q=UV^{\mathsf T}$, 곧 $M$ 의 극분해의 직교 인수가 해다.[^1]

증명의 요지. 거리 제곱은 다음과 같다.

$$
\Vert QB-C\Vert\_F^2=\Vert B\Vert\_F^2+\Vert C\Vert\_F^2-2\thinspace\mathrm{tr}(Q^{\mathsf T}M)
$$

$\mathrm{tr}(Q^{\mathsf T}U\Sigma V^{\mathsf T})=\mathrm{tr}(V^{\mathsf T}Q^{\mathsf T}U\Sigma)$ 이고, $Z=V^{\mathsf T}Q^{\mathsf T}U$ 는 직교행렬이라 대각성분이 $1$ 이하다. 그래서 대각합은 $\sum_i\sigma_i$ 이하이고, $Z=I$, 곧 $Q=UV^{\mathsf T}$ 에서 등호가 성립한다. 직관 절의 $M$ 에서 이 $Q$ 는 $86.19^\circ$ 회전이다.

## 회전으로 한정한 해

$UV^{\mathsf T}$ 의 행렬식이 $-1$ 이면 위 해는 반사를 포함한다. 회전만 허용하면 해는 다음이다.[^2]

$$
Q=U\thinspace\mathrm{diag}\bigl(1,\dots,1,\det(UV^{\mathsf T})\bigr)V^{\mathsf T}
$$

가장 작은 특이값 $\sigma_n$ 의 방향 하나만 부호를 바꾸므로, 대각합의 손실이 $2\sigma_n$ 으로 가장 작다.

## 평행이동

점 배치가 평행이동도 다를 때는 두 배치의 무게중심을 각각 원점으로 옮긴 뒤 위 문제를 푼다. 회전 $Q$ 와 이동 $t$ 를 함께 고르는 $\Vert QB+t\mathbf 1^{\mathsf T}-C\Vert\_F$ 의 최소에서 $t$ 는 무게중심의 차이이고, $t$ 를 넣으면 무게중심을 뺀 문제가 남는다.

# 활용

- 분자 구조 비교. 두 단백질 구조를 Kabsch 알고리즘으로 겹친 뒤의 원자 거리 제곱 평균의 제곱근(root-mean-square deviation)으로 구조의 차이를 잰다.
- 모양 분석. 여러 표본의 표지점 배치를 평행이동, 회전, 척도를 맞춰 겹친 뒤 평균 모양과 그 둘레의 변동을 [주성분 분석](principal-component-analysis.md)으로 본다. 이것을 일반화 Procrustes 분석(generalized Procrustes analysis)이라 한다.
- 자세 결정. 위성이 별이나 자기장 방향을 몸체 좌표로 잰 벡터와 기준 좌표의 벡터를 가장 잘 맞추는 회전을 구하는 Wahba 문제(Wahba's problem)가 같은 꼴이다.

[^1]: P. H. Schönemann, "A generalized solution of the orthogonal Procrustes problem", *Psychometrika* 31 (1966), 1–10.
[^2]: W. Kabsch, "A solution for the best rotation to relate two sets of vectors", *Acta Crystallographica A* 32 (1976), 922–923. 행렬식 보정은 W. Kabsch, *Acta Crystallographica A* 34 (1978), 827–828.

# 연관 문서

## 선수지식

- [극분해](polar-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #optimization #statistics
