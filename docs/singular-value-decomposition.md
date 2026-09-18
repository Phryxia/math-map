# 특이값 분해

# 개요

특이값 분해(SVD)는 임의의 직사각행렬을 "정규직교기저 회전 · 축별 확대 · 정규직교기저 회전"의 합성으로 쪼갠다. 정사각·대칭이라는 조건이 전혀 필요 없고, 모든 실(또는 복소)행렬에 대해 존재한다. [스펙트럼 정리](spectral-theorem.md)를 $A^{\mathsf T}A$ 에 적용하면 곧바로 증명되며, 특이값은 $A^{\mathsf T}A$ 의 고윳값의 제곱근이다[^1]. 절단된 SVD가 모든 unitary 불변 노름에서 최적의 저계수 근사라는 Eckart–Young–Mirsky 정리가 압축·잡음 제거·주성분 분석의 이론적 근거다[^2].

# 직관

선형사상은 단위구를 타원체로 보낸다. 타원체의 주축 방향이 왼쪽 특이벡터, 축의 길이가 특이값, 그 축으로 가는 원래 방향이 오른쪽 특이벡터다. 계수가 $r$ 이면 축 $r$ 개만 살아 있고 나머지 방향은 눌려 $0$ 이 된다.

대칭 양의 준정부호 행렬에서는 특이값이 고윳값과 일치하지만, 일반 행렬에서는 다르다. 예를 들어 첫 행 $(0,2)$ , 둘째 행 $(0,0)$ 인 행렬의 고윳값은 $0$ 뿐이지만 특이값은 $2$ 와 $0$ 이다. 특이값은 "얼마나 늘리는가"를, 고윳값은 "어느 방향이 보존되는가"를 잰다.

# 정의

$A$ 를 $m\times n$ 실행렬, $r$ 을 그 계수라 하자. SVD는 다음 분해다. 여기서 $U$ 는 $m$ 차 직교행렬, $V$ 는 $n$ 차 직교행렬, $\Sigma$ 는 대각 성분이 내림차순으로 음이 아닌 $m\times n$ 행렬이다.

$$
A=U\Sigma V^{\mathsf T},\qquad
\sigma_1\ge\sigma_2\ge\dots\ge\sigma_r>0=\sigma_{r+1}=\dots
$$

열 단위로 쓰면 rank 1 행렬들의 합이며, 이 형태를 compact SVD라 한다.

$$
A=\sum_{i=1}^{r}\sigma_i u_i v_i^{\mathsf T}
$$

특이값은 $A^{\mathsf T}A$ (또는 $AA^{\mathsf T}$ )의 고윳값의 음이 아닌 제곱근이고, $u_i$ 와 $v_i$ 는 각각 $AA^{\mathsf T}$ 와 $A^{\mathsf T}A$ 의 고유벡터다[^1].

$$
A^{\mathsf T}A\thinspace v_i=\sigma_i^2 v_i,\qquad
A A^{\mathsf T}u_i=\sigma_i^2 u_i,\qquad
Av_i=\sigma_i u_i
$$

계수 $k$ 이하로 자른 절단 SVD와 Moore–Penrose 의사역행렬은 다음과 같다. $\Sigma^{+}$ 는 $0$ 이 아닌 특이값을 역수로 바꾸고 $0$ 은 그대로 두어 전치한 행렬이다[^3].

$$
A_k=\sum_{i=1}^{k}\sigma_i u_i v_i^{\mathsf T},
\qquad
A^{+}=V\Sigma^{+}U^{\mathsf T}
$$

# 성질

## 존재 정리

$A^{\mathsf T}A$ 는 대칭이고 모든 $x$ 에서 이차형식이 $Ax$ 의 노름 제곱이라 양의 준정부호다. [스펙트럼 정리](spectral-theorem.md)로 정규직교 고유기저 $v_1,\dots,v_n$ 과 내림차순 고윳값 $\lambda_1\ge\dots\ge\lambda_n\ge 0$ 을 얻는다. $\lambda_i$ 의 제곱근을 $\sigma_i$ 라 하고, $\sigma_i$ 가 $0$ 이 아닌 $i$ 에 대해 $u_i$ 를 정의한다.

$$
u_i=\frac{1}{\sigma_i}Av_i
$$

이들은 정규직교다. 실제로 다음 계산이 성립한다.

$$
\langle u_i,u_j\rangle
=\frac{v_i^{\mathsf T}A^{\mathsf T}Av_j}{\sigma_i\sigma_j}
=\frac{\lambda_j\thinspace\delta_{ij}}{\sigma_i\sigma_j}=\delta_{ij}
$$

$\lambda_i=0$ 이면 $Av_i$ 의 노름 제곱이 $\lambda_i=0$ 이므로 $Av_i=0$ 이다. 따라서 $u_1,\dots,u_r$ 을 $m$ 차원의 정규직교기저로 확장하면 위 rank 1 합이 모든 $v_j$ 에서 $A$ 와 같은 값을 주고, 기저에서 일치하므로 $A$ 와 같다. 특이값은 유일하지만 $U$ 와 $V$ 는 유일하지 않다(중복 특이값의 고유공간 안에서 회전이 자유롭고, 부호도 짝지어 바꿀 수 있다).

## 노름과 계수

최대 특이값은 작용소 2-노름, 특이값 제곱합은 Frobenius 노름 제곱이다.

$$
\lVert A\rVert_2=\max_{x\neq0}\frac{\lVert Ax\rVert}{\lVert x\rVert}=\sigma_1,
\qquad
\lVert A\rVert_F^2=\sum_{i=1}^{r}\sigma_i^2
$$

$0$ 이 아닌 특이값의 개수가 계수이고, $v_{r+1},\dots,v_n$ 이 kernel의 정규직교기저, $u_1,\dots,u_r$ 이 상공간의 정규직교기저다. 정사각행렬이면 [행렬식](determinants.md)의 절댓값이 특이값의 곱이다. 수치적으로는 $\sigma$ 를 임계값으로 자른 개수를 계수로 삼는 것이 안정적이고, 조건수는 $\sigma_1/\sigma_r$ 이다.

## Eckart–Young–Mirsky

$k<r$ 인 $k$ 에 대해, 계수가 $k$ 이하인 모든 행렬 중 절단 SVD가 오차를 최소화한다. 이 최적성은 spectral 노름과 Frobenius 노름에서 각각 다음 값으로 달성되며, 더 일반적으로 모든 unitary 불변 노름에서 성립한다[^2].

$$
\min_{\mathrm{rank}B\le k}\lVert A-B\rVert_2=\lVert A-A_k\rVert_2=\sigma_{k+1}
$$

$$
\min_{\mathrm{rank}B\le k}\lVert A-B\rVert_F^2
=\sum_{i=k+1}^{r}\sigma_i^2
$$

증명 개요(spectral 노름): 계수 $k$ 이하인 $B$ 의 kernel은 차원이 $n-k$ 이상이므로 $v_1,\dots,v_{k+1}$ 이 span하는 $(k+1)$ 차원 공간과 $0$ 이 아닌 벡터 $x$ 에서 만난다. 그 $x$ 에서 $(A-B)x=Ax$ 이고, $x$ 가 앞의 $k+1$ 개 오른쪽 특이벡터의 결합이므로 $Ax$ 의 노름은 $\sigma_{k+1}$ 배 이상이다. 따라서 어떤 $B$ 도 오차를 $\sigma_{k+1}$ 아래로 줄일 수 없고, $A_k$ 가 그 값을 달성한다.

## 최소제곱과 의사역행렬

$A^{+}$ 는 항상 존재하고 유일하며, 다음 벡터는 잔차를 최소화하는 해 중에서 노름이 가장 작은 것이다[^3].

$$
x^{\star}=A^{+}b
$$

$A$ 의 열이 독립이면 $A^{+}$ 는 정규방정식의 해 $(A^{\mathsf T}A)^{-1}A^{\mathsf T}$ 와 일치하고([내적 공간](inner-product-spaces.md)의 정사영), 열이 종속이면 정규방정식이 유일해를 갖지 않는 자리에서 SVD가 최소노름해를 골라 준다. $A^{+}A$ 와 $AA^{+}$ 는 각각 행공간과 열공간으로의 정사영이다.

## 다른 분해와의 관계

$A$ 가 대칭 양의 준정부호이면 SVD와 고유분해가 일치한다. 일반 정사각행렬은 극분해 $A=(\text{직교행렬})\cdot(\text{양의 준정부호})$ 로 쓰이고, 여기서 직교 부분이 $UV^{\mathsf T}$ , 양의 준정부호 부분이 $V\Sigma V^{\mathsf T}$ 다. 이 사실이 주어진 행렬에 가장 가까운 직교행렬을 찾는 Procrustes 문제의 해를 준다.

# 활용

## 주성분 분석

행이 관측, 열이 변수인 데이터행렬에서 각 열의 평균을 뺀 $X$ 를 만들면 표본공분산이 $X^{\mathsf T}X$ 를 $n-1$ 로 나눈 것이다. 따라서 $X$ 의 오른쪽 특이벡터가 주성분 방향이고, 각 성분이 설명하는 분산이 특이값 제곱을 $n-1$ 로 나눈 값이다. 공분산행렬을 만들지 않고 $X$ 의 SVD를 직접 쓰는 편이 수치적으로 안정적이다. 확률 쪽 해석은 [확률변수](random-variables.md)의 공분산을 내적으로 보는 관점과 같다.

$$
\frac{1}{n-1}X^{\mathsf T}X=V\Big(\frac{\Sigma^{\mathsf T}\Sigma}{n-1}\Big)V^{\mathsf T}
$$

## 압축과 잡음 제거

Eckart–Young에 의해 상위 $k$ 개 성분만 남기면 저장량이 $(m+n+1)k$ 로 줄고 오차는 버린 특이값들로 통제된다. 이미지 압축, latent semantic analysis, 추천 시스템의 행렬 완성, 모델 가중치의 저계수 근사가 같은 원리다.

## 수치선형대수와 최적화

조건수 $\sigma_1/\sigma_r$ 이 선형계 해의 민감도와 [gradient descent](gradient-descent.md)의 수렴 속도를 정한다. 계수 결손 문제, 전체 최소제곱, regularization(Tikhonov)에서 작은 특이값을 잘라내거나 감쇠시키는 조작이 표준 도구다. 그래프 쪽에서는 [그래프 Laplacian](graph-laplacian.md)이 대칭이라 SVD와 고유분해가 일치하고, [스펙트럼 sparsification](spectral-sparsification.md)의 보증도 특이값/고윳값 비로 서술된다.

[^1]: Per-Gunnar Martinsson, Matrix factorizations and low rank approximation (course notes ch. 1), UT Austin. https://users.oden.utexas.edu/~pgm/Teaching/2019_393C/linalg.pdf
[^2]: Zhihua Zhang, "The Singular Value Decomposition, Applications and Beyond", arXiv:1510.08532. https://arxiv.org/abs/1510.08532
[^3]: Jorge Barata and Michael Hussein, "The Moore–Penrose Pseudoinverse: A Tutorial Review of the Theory", arXiv:1110.6882. https://arxiv.org/abs/1110.6882

# 연관 문서

## 선수지식

- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

- [주성분 분석](principal-component-analysis.md)

#linear_algebra
