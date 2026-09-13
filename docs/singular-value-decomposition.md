# 특이값 분해

# 개요

특이값 분해(SVD)는 임의의 직사각행렬을 "정규직교기저 회전 · 축별 확대 · 정규직교기저 회전"의 합성으로 쪼갠다. 정사각·대칭이라는 조건이 전혀 필요 없고, 모든 실(또는 복소)행렬에 대해 존재한다. [스펙트럼 정리](spectral-theorem.md)를 AᵗA에 적용하면 곧바로 증명되며, 특이값은 AᵗA의 고윳값의 제곱근이다[^1]. 절단된 SVD가 모든 unitary 불변 노름에서 최적의 저계수 근사라는 Eckart–Young–Mirsky 정리가 압축·잡음 제거·주성분 분석의 이론적 근거다[^2].

# 직관

선형사상은 단위구를 타원체로 보낸다. 타원체의 주축 방향이 왼쪽 특이벡터, 축의 길이가 특이값, 그 축으로 가는 원래 방향이 오른쪽 특이벡터다. 계수가 r이면 축 r개만 살아 있고 나머지 방향은 눌려 0이 된다.

```mermaid
graph LR
  X["입력 공간의 단위구"] -->|"V 전치: 오른쪽 특이벡터를 좌표축으로"| Y["정렬된 구"]
  Y -->|"Sigma: 축마다 sigma_i 배"| Z["축이 정렬된 타원체"]
  Z -->|"U: 출력 공간의 방향으로 회전"| W["A가 만든 타원체"]
```

대칭 양의 준정부호 행렬에서는 특이값이 고윳값과 일치하지만, 일반 행렬에서는 다르다. 예를 들어 첫 행 (0,2), 둘째 행 (0,0)인 행렬의 고윳값은 0뿐이지만 특이값은 2와 0이다. 특이값은 "얼마나 늘리는가"를, 고윳값은 "어느 방향이 보존되는가"를 잰다.

# 정의

A를 m×n 실행렬, r을 그 계수라 하자. SVD는 다음 분해다. 여기서 U는 m차 직교행렬, V는 n차 직교행렬, Σ는 대각 성분이 내림차순으로 음이 아닌 m×n 행렬이다.

$$
A=U\Sigma V^{\mathsf T},\qquad
\sigma_1\ge\sigma_2\ge\dots\ge\sigma_r>0=\sigma_{r+1}=\dots
$$

열 단위로 쓰면 rank 1 행렬들의 합이며, 이 형태를 compact SVD라 한다.

$$
A=\sum_{i=1}^{r}\sigma_i u_i v_i^{\mathsf T}
$$

특이값은 AᵗA(또는 AAᵗ)의 고윳값의 음이 아닌 제곱근이고, uᵢ와 vᵢ는 각각 AAᵗ와 AᵗA의 고유벡터다[^1].

$$
A^{\mathsf T}A\,v_i=\sigma_i^2 v_i,\qquad
A A^{\mathsf T}u_i=\sigma_i^2 u_i,\qquad
Av_i=\sigma_i u_i
$$

계수 k 이하로 자른 절단 SVD와 Moore–Penrose 의사역행렬은 다음과 같다. Σ⁺는 0이 아닌 특이값을 역수로 바꾸고 0은 그대로 두어 전치한 행렬이다[^3].

$$
A_k=\sum_{i=1}^{k}\sigma_i u_i v_i^{\mathsf T},
\qquad
A^{+}=V\Sigma^{+}U^{\mathsf T}
$$

# 성질

## 존재 정리

AᵗA는 대칭이고 모든 x에서 이차형식이 Ax의 노름 제곱이라 양의 준정부호다. [스펙트럼 정리](spectral-theorem.md)로 정규직교 고유기저 v₁,…,v_n과 내림차순 고윳값 λ₁≥…≥λ_n≥0을 얻는다. λᵢ의 제곱근을 σᵢ라 하고, σᵢ가 0이 아닌 i에 대해 uᵢ를 정의한다.

$$
u_i=\frac{1}{\sigma_i}Av_i
$$

이들은 정규직교다. 실제로 다음 계산이 성립한다.

$$
\langle u_i,u_j\rangle
=\frac{v_i^{\mathsf T}A^{\mathsf T}Av_j}{\sigma_i\sigma_j}
=\frac{\lambda_j\,\delta_{ij}}{\sigma_i\sigma_j}=\delta_{ij}
$$

λᵢ=0이면 Avᵢ의 노름 제곱이 λᵢ=0이므로 Avᵢ=0이다. 따라서 u₁,…,u_r을 m차원의 정규직교기저로 확장하면 위 rank 1 합이 모든 vⱼ에서 A와 같은 값을 주고, 기저에서 일치하므로 A와 같다. 특이값은 유일하지만 U와 V는 유일하지 않다(중복 특이값의 고유공간 안에서 회전이 자유롭고, 부호도 짝지어 바꿀 수 있다).

## 노름과 계수

최대 특이값은 작용소 2-노름, 특이값 제곱합은 Frobenius 노름 제곱이다.

$$
\lVert A\rVert_2=\max_{x\neq0}\frac{\lVert Ax\rVert}{\lVert x\rVert}=\sigma_1,
\qquad
\lVert A\rVert_F^2=\sum_{i=1}^{r}\sigma_i^2
$$

0이 아닌 특이값의 개수가 계수이고, v_{r+1},…,v_n이 kernel의 정규직교기저, u₁,…,u_r이 상공간의 정규직교기저다. 정사각행렬이면 [행렬식](determinants.md)의 절댓값이 특이값의 곱이다. 수치적으로는 σ를 임계값으로 자른 개수를 계수로 삼는 것이 안정적이고, 조건수는 σ₁/σ_r이다.

## Eckart–Young–Mirsky

k < r인 k에 대해, 계수가 k 이하인 모든 행렬 중 절단 SVD가 오차를 최소화한다. 이 최적성은 spectral 노름과 Frobenius 노름에서 각각 다음 값으로 달성되며, 더 일반적으로 모든 unitary 불변 노름에서 성립한다[^2].

$$
\min_{\operatorname{rank}B\le k}\lVert A-B\rVert_2=\lVert A-A_k\rVert_2=\sigma_{k+1}
$$

$$
\min_{\operatorname{rank}B\le k}\lVert A-B\rVert_F^2
=\sum_{i=k+1}^{r}\sigma_i^2
$$

증명 개요(spectral 노름): 계수 k 이하인 B의 kernel은 차원이 n-k 이상이므로 v₁,…,v_{k+1}이 span하는 (k+1)차원 공간과 0이 아닌 벡터 x에서 만난다. 그 x에서 (A-B)x=Ax이고, x가 앞의 k+1개 오른쪽 특이벡터의 결합이므로 Ax의 노름은 σ_{k+1}배 이상이다. 따라서 어떤 B도 오차를 σ_{k+1} 아래로 줄일 수 없고, A_k가 그 값을 달성한다.

## 최소제곱과 의사역행렬

A⁺는 항상 존재하고 유일하며, 다음 벡터는 잔차를 최소화하는 해 중에서 노름이 가장 작은 것이다[^3].

$$
x^{\star}=A^{+}b
$$

A의 열이 독립이면 A⁺는 정규방정식의 해 (AᵗA)⁻¹Aᵗ와 일치하고([내적 공간](inner-product-spaces.md)의 정사영), 열이 종속이면 정규방정식이 유일해를 갖지 않는 자리에서 SVD가 최소노름해를 골라 준다. A⁺A와 AA⁺는 각각 행공간과 열공간으로의 정사영이다.

## 다른 분해와의 관계

A가 대칭 양의 준정부호이면 SVD와 고유분해가 일치한다. 일반 정사각행렬은 극분해 A = (직교행렬)·(양의 준정부호)로 쓰이고, 여기서 직교 부분이 UVᵗ, 양의 준정부호 부분이 VΣVᵗ다. 이 사실이 주어진 행렬에 가장 가까운 직교행렬을 찾는 Procrustes 문제의 해를 준다.

# 활용

## 주성분 분석

행이 관측, 열이 변수인 데이터행렬에서 각 열의 평균을 뺀 X를 만들면 표본공분산이 XᵗX를 표본수-1로 나눈 것이다. 따라서 X의 오른쪽 특이벡터가 주성분 방향이고, 각 성분이 설명하는 분산이 특이값 제곱을 표본수-1로 나눈 값이다. 공분산행렬을 만들지 않고 X의 SVD를 직접 쓰는 편이 수치적으로 안정적이다. 확률 쪽 해석은 [확률변수](random-variables.md)의 공분산을 내적으로 보는 관점과 같다.

$$
\frac{1}{n-1}X^{\mathsf T}X=V\Big(\frac{\Sigma^{\mathsf T}\Sigma}{n-1}\Big)V^{\mathsf T}
$$

## 압축과 잡음 제거

Eckart–Young에 의해 상위 k개 성분만 남기면 저장량이 (m+n+1)k로 줄고 오차는 버린 특이값들로 통제된다. 이미지 압축, latent semantic analysis, 추천 시스템의 행렬 완성, 모델 가중치의 저계수 근사가 같은 원리다.

```python
import numpy as np
A = np.arange(1., 13.).reshape(4, 3)      # 계수 2인 행렬
U, s, Vt = np.linalg.svd(A, full_matrices=False)
print(np.round(s, 6))                     # 세 번째 특이값은 0, 즉 계수가 2다
k = 1
Ak = (U[:, :k] * s[:k]) @ Vt[:k]
print(np.linalg.norm(A - Ak))             # = sqrt(sum of s[k:]**2)
print(np.sqrt((s[k:] ** 2).sum()))
```

## 수치선형대수와 최적화

조건수 σ₁/σ_r이 선형계 해의 민감도와 [gradient descent](gradient-descent.md)의 수렴 속도를 정한다. 계수 결손 문제, 전체 최소제곱, regularization(Tikhonov)에서 작은 특이값을 잘라내거나 감쇠시키는 조작이 표준 도구다. 그래프 쪽에서는 [그래프 Laplacian](graph-laplacian.md)이 대칭이라 SVD와 고유분해가 일치하고, [스펙트럼 sparsification](spectral-sparsification.md)의 보증도 특이값/고윳값 비로 서술된다.

[^1]: Per-Gunnar Martinsson, Matrix factorizations and low rank approximation (course notes ch. 1), UT Austin. https://users.oden.utexas.edu/~pgm/Teaching/2019_393C/linalg.pdf
[^2]: Zhihua Zhang, "The Singular Value Decomposition, Applications and Beyond", arXiv:1510.08532. https://arxiv.org/abs/1510.08532
[^3]: Jorge Barata and Michael Hussein, "The Moore–Penrose Pseudoinverse: A Tutorial Review of the Theory", arXiv:1110.6882. https://arxiv.org/abs/1110.6882

# 연관 문서

## 선수지식

- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.
