# 스펙트럼 정리

# 개요

스펙트럼 정리는 유한차원 [내적 공간](inner-product-spaces.md)에서 자기수반 연산자가 실고윳값을 가지며 고유벡터로 된 정규직교기저를 갖는다는 정리다[^1]. 행렬 언어로는 실대칭행렬이 직교행렬로 대각화되고, 역으로 직교 대각화가 가능한 실행렬은 대칭이다[^2]. [고윳값](eigenvalues.md) 일반론에서는 중복도 조건이 깨져 대각화가 실패할 수 있지만 대칭성이 그 실패를 막는다. 이차형식의 주축 분해, 양의 정부호 판정, 공분산 분석, [특이값 분해](singular-value-decomposition.md)가 이 정리의 귀결이다.

# 직관

실대칭행렬 $A$ 는 원점 중심의 이차형식을 정한다. 스펙트럼 정리는 그 도형의 주축이 서로 수직이고, 그 축을 좌표계로 잡으면 이차형식에 교차항이 없어진다는 것이다. 고윳값은 각 축에서의 늘어남 정도이고 부호가 도형의 종류를 정한다.

$$
x^{\mathsf T}Ax=\sum_{i=1}^{n}\lambda_i y_i^2,
\qquad y=Q^{\mathsf T}x
$$

$Av=\lambda v$ , $Aw=\mu w$ 이고 $\lambda\neq\mu$ 이면 대칭성에서 $\lambda\langle v,w\rangle=\langle Av,w\rangle=\langle v,Aw\rangle=\mu\langle v,w\rangle$ 이므로 $\langle v,w\rangle=0$ 이다. 서로 다른 고윳값의 고유공간은 직교한다.

# 정의

$V$ 를 실수체 또는 복소수체 위의 유한차원 내적 공간, $T$ 를 $V$ 의 선형연산자라 하자. $T$ 의 수반연산자 $T^{\ast}$ 는 다음 항등식으로 유일하게 정해진다.

$$
\langle Tv,w\rangle=\langle v,T^{\ast}w\rangle\quad\text{모든 }v,w\in V
$$

정규직교기저에서 $T^{\ast}$ 의 행렬은 켤레전치다. $T^{\ast}=T$ 이면 자기수반(실수에서는 대칭, 복소수에서는 Hermitian)이라 하고, $T^{\ast}T=TT^{\ast}$ 이면 normal 이라 한다.

$$
A^{\ast}=\overline{A}^{\mathsf T},\qquad
\text{대칭: }A^{\mathsf T}=A,\qquad
\text{Hermitian: }A^{\ast}=A
$$

$Q$ 의 열이 정규직교기저이면 $Q$ 는 직교행렬(복소수에서는 unitary)이고 역행렬이 전치다.

$$
Q^{\mathsf T}Q=I
$$

$A$ 가 실대칭이면 직교행렬 $Q$ 와 실대각행렬 $\Lambda$ 가 존재해 다음이 성립하고, 역도 성립한다[^2].

$$
A=Q\Lambda Q^{\mathsf T},\qquad \Lambda=\mathrm{diag}(\lambda_1,\dots,\lambda_n)
$$

# 성질

## 고윳값의 실수성

자기수반 $T$ 의 고윳값은 실수다. $Tv=\lambda v$ 에 $v$ 를 내적하면

$$
\lambda\lVert v\rVert^2=\langle Tv,v\rangle=\langle v,Tv\rangle=\overline{\lambda}\lVert v\rVert^2
$$

이고 노름 제곱이 양수이므로 $\lambda=\overline\lambda$ 다[^1].

## 증명의 요지

복소 내적 공간에서 귀납법으로 증명한다. 차원이 1 이상이면 특성다항식이 근을 가지므로 고윳값 $\lambda$ 과 단위 고유벡터 $v$ 가 있다. $w$ 가 $v$ 와 직교하면 $\langle Tw,v\rangle=\langle w,Tv\rangle=\lambda\langle w,v\rangle=0$ 이므로 $v$ 의 직교여공간은 $T$ 불변이다. 그 공간은 차원이 1 작고 제한한 연산자도 자기수반이므로 귀납가정이 적용되며, 얻은 고유벡터들이 정규직교 고유기저를 이룬다.

실대칭행렬은 복소 Hermitian 으로 보면 고윳값이 실수이고, 그러면 $\lambda I-A$ 가 실행렬이므로 kernel 에서 실고유벡터를 고른다. 같은 고윳값의 고유공간 안에서는 Gram–Schmidt 로 정규직교기저를 잡고 서로 다른 고윳값 사이는 위 직교성이 처리한다. 기하적 중복도가 항상 대수적 중복도와 같다.

## 스펙트럼 분해와 함수 계산

서로 다른 고윳값을 $\mu_1,\dots,\mu_k$ , $P_i$ 를 그 고유공간으로의 정사영이라 하면

$$
A=\sum_{i=1}^{k}\mu_i P_i,\qquad
\sum_{i=1}^{k}P_i=I,\qquad P_iP_j=0\ (i\neq j)
$$

이다. 이 분해가 함수를 고윳값에만 적용하는 계산을 정당화한다. 모든 고윳값이 음이 아니면 유일한 양의 준정부호 제곱근이 존재한다.

$$
f(A)=Q\thinspace\mathrm{diag}(f(\lambda_1),\dots,f(\lambda_n))\thinspace Q^{\mathsf T}
$$

## Normal 연산자와 반례

복소 내적 공간에서 unitary 로 대각화 가능한 것은 normal 인 것과 동치이며, Hermitian, skew-Hermitian, unitary 행렬이 모두 normal 의 특수한 경우다[^1]. 대칭성이 없으면 결론이 깨진다. 첫 행 $(0,1)$ , 둘째 행 $(0,0)$ 인 행렬은 고유벡터가 한 방향뿐이라 대각화되지 않고, 실회전행렬은 실고윳값이 없다.

## Rayleigh 몫과 min–max

고윳값을 내림차순으로 놓으면 최대와 최소 고윳값이 Rayleigh 몫의 극값이다[^4].

$$
\lambda_1=\max_{x\neq0}\frac{x^{\mathsf T}Ax}{x^{\mathsf T}x},
\qquad
\lambda_n=\min_{x\neq0}\frac{x^{\mathsf T}Ax}{x^{\mathsf T}x}
$$

중간 고윳값은 Courant–Fischer min–max 정리가 부분공간에 대한 극값으로 표현한다. 이 변분 표현이 고윳값의 섭동 부등식과 그래프 스펙트럼의 상한 하한 논증에 쓰인다.

## 양의 정부호 판정

실대칭 $A$ 가 $0$ 이 아닌 모든 $x$ 에서 이차형식이 양수이면 양의 정부호라 한다. 스펙트럼 정리에서 이는 모든 고윳값이 양수인 것과 동치이고, 선행 주요 소행렬식(왼쪽 위 $k\times k$ 부분행렬의 [행렬식](determinants.md))이 모두 양수인 것과도 동치다[^3].

$$
x^{\mathsf T}Ax\gt 0\ (x\neq0)
\iff \lambda_i\gt 0\ \forall i
\iff \det A_{1:k,1:k}\gt 0\ (k=1,\dots,n)
$$

선행 주요 소행렬식만 보는 판정은 양의 준정부호에는 통하지 않는다. 준정부호 판정에는 모든 주요 소행렬식이 음이 아니어야 한다.

# 활용

## 최적화와 곡률

Hessian 이 양의 준정부호인 것이 [볼록성](convexity.md)의 이차 조건이고, 양의 정부호이면 임계점이 국소 최솟값이다. 최대 고윳값과 최소 고윳값의 비인 조건수가 [gradient descent](gradient-descent.md)의 수렴 속도를 지배한다.

$$
\kappa=\frac{\lambda_1}{\lambda_n}
$$

## 데이터와 통계

공분산행렬은 대칭이고 양의 준정부호이므로 직교 고유기저를 갖고, 그 기저가 주성분이다. 분산이 큰 방향을 고르는 문제가 Rayleigh 몫 최대화이며, 실제 계산은 데이터행렬의 [특이값 분해](singular-value-decomposition.md)로 한다. [확률변수](random-variables.md)의 공분산을 내적으로 보면 주성분은 정사영의 최적 방향이다.

## 그래프와 신호

[그래프 Laplacian](graph-laplacian.md)은 대칭 양의 준정부호이므로 실고윳값과 직교 고유기저를 갖는다. 최소 고윳값 0 의 중복도가 연결성분 개수이고, 두 번째 고윳값이 확장성과 clustering 을 재며, [유효저항](effective-resistance.md)과 [스펙트럼 sparsification](spectral-sparsification.md)의 보증이 이 스펙트럼으로 서술된다. 순환행렬은 [이산 Fourier 변환](fourier.md) 행렬로 대각화되므로 convolution 이 곱셈이 된다.

무한차원으로의 확장은 콤팩트 자기수반 연산자와 [Hilbert 공간](hilbert-spaces.md)의 스펙트럼 이론으로 이어지며, 고윳값 없이 연속 스펙트럼만 있는 경우가 생긴다.

[^1]: Anne Schilling et al., MAT067 — The Spectral Theorem for normal linear maps, University of California, Davis. https://www.math.ucdavis.edu/~anne/WQ2007/mat67-Ll-Spectral_Theorem.pdf
[^2]: Ron Freiwald, Orthogonally Diagonalizable Matrices, Washington University in St. Louis. https://www.math.wustl.edu/~freiwald/309orthogdiag.pdf
[^3]: Sylvester's criterion, Wikipedia (2026-09-13 확인). https://en.wikipedia.org/wiki/Sylvester%27s_criterion
[^4]: EECS 16B Note 14 — Symmetric Matrices and the Spectral Theorem, UC Berkeley. https://eecs16b.org/notes/sp24/note14.pdf

# 연관 문서

## 선수지식

- [고윳값과 고유벡터](eigenvalues.md)
- [내적 공간](inner-product-spaces.md)

## 더 알아보기

- [특이값 분해](singular-value-decomposition.md)
- [Hecke 작용소](hecke-operators.md)
- [유계 작용소와 스펙트럼](bounded-operators.md)

#linear_algebra #analysis #optimization #theorem
