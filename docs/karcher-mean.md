# Karcher 평균

# 개요

**Karcher 평균(Karcher mean)** 은 양의 정부호 행렬 여러 개의 기하평균을, 각 행렬까지의 Riemann 거리의 제곱합을 최소로 하는 행렬로 정한 것이다. 행렬 두 개의 [행렬 기하평균](matrix-geometric-mean.md)은 식 하나로 정해지지만, 셋째 행렬을 섞으려고 두 개씩 평균을 거듭하면 어느 둘을 먼저 묶느냐에 따라 결과가 달라진다. Karcher 평균은 순서와 무관한 최소화 문제로 평균을 정해 이 문제를 없앤다.

# 직관

양수 $a,b,c$ 의 기하평균은 $(abc)^{1/3}$ 이다. 두 수의 기하평균 $\sqrt{ab}$ 와 $c$ 를 가중치 $2/3$, $1/3$ 으로 다시 평균하면 $(ab)^{1/3}c^{1/3}$ 이 되어, 어느 둘을 먼저 묶어도 같은 값이 나온다.

같은 일을 다음 세 행렬에 한다.

$$
A=\begin{pmatrix}1&0\cr 0&4\end{pmatrix},\quad B=\begin{pmatrix}4&0\cr 0&1\end{pmatrix},\quad C=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}
$$

$A\thinspace\sharp\thinspace B=2I$ 이고, 이것과 $C$ 를 가중치 $2/3$, $1/3$ 으로 평균한 $(2I)\thinspace\sharp_{1/3}\thinspace C=2^{2/3}C^{1/3}$ 은 대각성분이 $1.938$, 비대각성분이 $0.351$ 이다. $A$ 와 $C$ 를 먼저 묶어 $(A\thinspace\sharp\thinspace C)\thinspace\sharp_{1/3}\thinspace B$ 를 만들면 대각성분이 $1.946,1.914$, 비대각성분이 $0.301$ 로 다른 행렬이 나온다. 행렬은 곱의 순서를 바꿀 수 없어서, 두 개씩 평균하는 방식으로는 세 행렬의 평균이 하나로 정해지지 않는다.

수의 기하평균 $(abc)^{1/3}$ 은 $\sum_i(\log x-\log a_i)^2$ 을 최소로 하는 $x$ 다. 이 꼴은 묶는 순서가 없으므로 행렬로 옮길 수 있다. 행렬 사이의 거리를 정하고 제곱합을 최소로 하는 행렬을 평균으로 삼으면, 위 세 행렬의 평균은 대각성분이 $1.933$, 비대각성분이 $0.318$ 인 행렬 하나로 정해진다.

# 정의

## Riemann 거리

양의 정부호 행렬 $A,B$ 의 **Riemann 거리(Riemannian distance)** 는 다음이다.

$$
\delta(A,B)=\bigl\Vert\log\bigl(A^{-1/2}BA^{-1/2}\bigr)\bigr\Vert_F=\Bigl(\sum_i\log^2\lambda_i\Bigr)^{1/2}
$$

$\lambda_i$ 는 $A^{-1}B$ 의 고윳값이고 $\Vert\cdot\Vert_F$ 는 성분 제곱합의 제곱근이다. 이 거리는 행렬 기하평균 문서의 [Riemann 계량](riemannian-metrics.md)에서 측지선의 길이다. $1\times 1$ 행렬에서는 $\vert\log a-\log b\vert$ 다.

## Karcher 평균

양의 정부호 행렬 $A_1,\dots,A_m$ 과 합이 $1$ 인 양의 가중치 $w_1,\dots,w_m$ 에 대해 다음 최소화 문제의 해를 **Karcher 평균** 이라 한다.

$$
\Lambda(A_1,\dots,A_m)=\mathop{\mathrm{arg\thinspace min}}\_{X\succ 0}\sum_{i=1}^m w_i\thinspace\delta^2(X,A_i)
$$

가중치를 주지 않으면 $w_i=1/m$ 이다. 직관 절의 세 행렬의 Karcher 평균이 대각성분 $1.933$, 비대각성분 $0.318$ 인 행렬이다.

# 성질

## 존재와 유일성

양의 정부호 행렬 전체는 이 거리로 단면 곡률이 $0$ 이하인 완비 거리 공간이고, 거리의 제곱은 측지선을 따라 강볼록이다. 그래서 최소화 문제의 해가 존재하고 하나뿐이다[^1].

## Karcher 방정식

Karcher 평균 $X$ 는 다음 방정식의 유일한 양의 정부호 해다[^2].

$$
\sum_{i=1}^m w_i\log\bigl(X^{-1/2}A_iX^{-1/2}\bigr)=0
$$

수에서는 $\sum_iw_i(\log a_i-\log x)=0$ 이고 해가 가중 기하평균 $\prod_ia_i^{w_i}$ 이다. 행렬이 모두 교환하면 Karcher 평균은 $\prod_iA_i^{w_i}$ 이고, 행렬이 두 개이면 $A_1\thinspace\sharp\thinspace A_2$ 다.

## 기하평균이 가져야 할 성질

Karcher 평균은 행렬의 순서를 바꿔도 같고, 행렬식은 $\det\Lambda=\prod_i(\det A_i)^{w_i}$ 이다. 직관 절에서는 $(4\cdot 4\cdot 3)^{1/3}=48^{1/3}$ 이다. 각 변수에 대해 Löwner 순서로 단조라는 것은 Lawson 과 Lim 이 증명했고, 이로써 아래 Ando–Li–Mathias 의 조건을 모두 만족한다는 것이 알려졌다[^3].

Ando, Li, Mathias 는 이런 성질들을 기하평균의 조건으로 세우고, 두 개씩 평균하는 반복을 극한까지 되풀이해 조건을 모두 만족하는 다른 평균을 만들었다[^4]. 이 평균과 Karcher 평균은 세 행렬 이상에서 일반적으로 다르다.

## 계산

Karcher 평균은 닫힌 식이 없고 반복으로 구한다. 현재 근삿값 $X$ 에서 방정식 왼쪽의 합만큼 측지선을 따라 움직이는 Riemann 경사하강을 쓴다.

$$
X\leftarrow X^{1/2}\exp\Bigl(\sum_iw_i\log\bigl(X^{-1/2}A_iX^{-1/2}\bigr)\Bigr)X^{1/2}
$$

# 활용

- 공분산 행렬의 평균. 여러 측정에서 얻은 공분산 행렬을 평균할 때 행렬식이 각 행렬식의 기하평균이 되는 평균으로 쓴다. 뇌파 신호의 분류에서 공분산 행렬의 평균과 거리로 분류기를 만드는 것이 그 예다.
- 확산 텐서 영상. 각 화소의 $3\times 3$ 양의 정부호 텐서를 보간하거나 평활할 때 Karcher 평균과 Riemann 거리를 쓴다.
- 레이더 신호 처리. 공분산 행렬로 표현한 신호를 평균해 표적이 없는 배경을 추정한다.

[^1]: R. Bhatia, *Positive Definite Matrices*, Princeton University Press (2007), 6 장.
[^2]: M. Moakher, "A differential geometric approach to the geometric mean of symmetric positive-definite matrices", *SIAM Journal on Matrix Analysis and Applications* 26 (2005), 735–747.
[^3]: J. Lawson, Y. Lim, "Monotonic properties of the least squares mean", *Mathematische Annalen* 351 (2011), 267–279.
[^4]: T. Ando, C.-K. Li, R. Mathias, "Geometric means", *Linear Algebra and its Applications* 385 (2004), 305–334.

# 연관 문서

## 선수지식

- [행렬 기하평균](matrix-geometric-mean.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #linear_algebra #statistics
