# 고윳값 조건수

# 개요

**고윳값 조건수(eigenvalue condition number)** 는 [행렬](matrices.md)의 성분을 조금 바꾸었을 때 단순 [고윳값](eigenvalues.md) 하나가 그 변화의 몇 배만큼 움직이는지를 나타내는 수다. 첫 행 $(1,10)$, 둘째 행 $(0,2)$ 인 행렬의 왼쪽 아래 성분을 $0$ 에서 $\varepsilon$ 으로 바꾸면 고윳값 $1$ 은 약 $1-10\varepsilon$ 으로 움직여, 바꾼 양의 $10$ 배만큼 틀린다. 고윳값 조건수는 오른쪽 고유벡터와 왼쪽 고유벡터 두 개로 이 배율을 계산해, 계산한 고윳값이 몇 자리까지 맞는지 미리 정한다.

# 직관

$A=\begin{pmatrix}1&10\cr 0&2\end{pmatrix}$ 의 고윳값은 $1$ 과 $2$ 다. 왼쪽 아래에 $\varepsilon$ 을 넣은 행렬의 특성다항식은 $(1-z)(2-z)-10\varepsilon=z^2-3z+2-10\varepsilon$ 이고, 근은 $\bigl(3\pm\sqrt{1+40\varepsilon}\bigr)/2$ 다. $\sqrt{1+40\varepsilon}\approx 1+20\varepsilon$ 이므로 두 고윳값은 약 $1-10\varepsilon$ 과 $2+10\varepsilon$ 이다.

배율 $10$ 은 오른쪽 위 성분 $10$ 에서 왔다. 고윳값 $1$ 의 고유벡터 $x=(1,0)$ 와, $y^{\mathsf T}A=y^{\mathsf T}$ 를 만족하는 벡터 $y=(1,-10)$ 를 놓는다. 왼쪽 아래 성분을 바꾸는 행렬 $E=\varepsilon e_2e_1^{\mathsf T}$ 에서 $y^{\mathsf T}Ex/(y^{\mathsf T}x)=\varepsilon\thinspace y_2x_1=-10\varepsilon$ 이고, 이것이 고윳값의 움직임이다.

# 정의

$\lambda$ 를 $A$ 의 단순 고윳값, 곧 특성다항식의 단순근이라 하자. $Ax=\lambda x$ 인 $0$ 아닌 $x$ 를 **오른쪽 고유벡터(right eigenvector)**, $y^\ast A=\lambda y^\ast$ 인 $0$ 아닌 $y$ 를 **왼쪽 고유벡터(left eigenvector)** 라 한다. $\lambda$ 의 고윳값 조건수는 다음 수다[^1].

$$
\kappa(\lambda)=\frac{\Vert x\Vert\thinspace\Vert y\Vert}{\vert y^\ast x\vert}
$$

직관 절의 $\lambda=1$ 에서 $\Vert x\Vert=1$, $\Vert y\Vert=\sqrt{101}$, $y^\ast x=1$ 이므로 $\kappa(1)=\sqrt{101}\approx 10.05$ 다. $\lambda=2$ 는 $x=(10,1)$, $y=(0,1)$ 에서 같은 값이다. $\kappa(\lambda)$ 는 $x$ 와 $y$ 사이 각의 코사인의 역수이므로 $1$ 이상이다.

# 성질

## 1 차 섭동

$\lambda$ 가 단순 고윳값이면 $A+tE$ 의 고윳값 $\lambda(t)$ 가 $t=0$ 근방에서 $\lambda(0)=\lambda$ 인 미분가능한 함수로 정해지고 다음이 성립한다[^1].

$$
\lambda'(0)=\frac{y^\ast Ex}{y^\ast x},\qquad\vert\lambda'(0)\vert\le\kappa(\lambda)\Vert E\Vert
$$

$(A+tE)x(t)=\lambda(t)x(t)$ 를 $t$ 로 미분하고 왼쪽에 $y^\ast$ 를 곱하면 $y^\ast(A-\lambda)x'(0)=0$ 이 지워져 첫 식이 나온다. $E=yx^\ast/(\Vert x\Vert\thinspace\Vert y\Vert)$ 이면 둘째 식이 등호다. 그래서 크기 $\varepsilon$ 의 섭동은 고윳값을 대략 $\kappa(\lambda)\varepsilon$ 까지 옮긴다.

## 정규행렬

$A$ 가 정규행렬이면 $y=x$ 로 잡을 수 있어 모든 고윳값에서 $\kappa(\lambda)=1$ 이다. 에르미트 행렬에서는 이것이 [Weyl 고윳값 부등식](weyl-eigenvalue-inequality.md) $\vert\lambda_i(A+E)-\lambda_i(A)\vert\le\Vert E\Vert$ 와 맞는다. 직관 절의 $A$ 는 $AA^\ast\ne A^\ast A$ 이고 $\kappa\approx 10$ 이다.

## 대각화 행렬의 조건수

$A=V\Lambda V^{-1}$ 이고 $V$ 의 열이 길이 $1$ 이면 $V^{-1}$ 의 행이 왼쪽 고유벡터이고 $\kappa(\lambda_i)\le\kappa(V)=\Vert V\Vert\thinspace\Vert V^{-1}\Vert$ 다. 개별 조건수가 하나라도 크면 모든 고윳값을 함께 다루는 상한도 크다.

## 겹친 고윳값

$\lambda$ 가 크기 $m$ 인 Jordan 블록에 있으면 크기 $\varepsilon$ 의 섭동이 고윳값을 $\varepsilon^{1/m}$ 의 차수로 옮기고, $\kappa(\lambda)$ 는 정의되지 않는다. $\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 은 $\pm\sqrt\varepsilon$ 이다. 단순 고윳값 두 개가 가까워지면 $y^\ast x$ 가 $0$ 으로 가고 $\kappa(\lambda)$ 가 커진다. $\begin{pmatrix}1&1\cr 0&1+\delta\end{pmatrix}$ 의 두 고윳값은 $\kappa=\sqrt{1+\delta^2}/\delta$ 다.

## 의사스펙트럼과의 관계

작은 $\varepsilon$ 에서 단순 고윳값 $\lambda$ 근처의 [의사스펙트럼](pseudospectra.md) $\Lambda_\varepsilon(A)$ 는 반지름이 약 $\kappa(\lambda)\varepsilon$ 인 원판이다[^2]. 고윳값 조건수는 의사스펙트럼의 $\varepsilon\to 0$ 극한의 크기를 고윳값마다 따로 준다.

# 활용

- 계산한 고윳값의 정확도. [QR 알고리즘](qr-algorithm.md)은 후방 안정이라 계산한 고윳값이 $\Vert E\Vert\approx u\Vert A\Vert$ 인 $A+E$ 의 고윳값이고, 오차는 약 $\kappa(\lambda)u\Vert A\Vert$ 다. $u$ 는 기계 정밀도이고, LAPACK(Linear Algebra PACKage)의 고윳값 루틴이 이 조건수의 역수를 함께 계산해 오차 상한을 낸다[^3].
- 매개변수에 따른 고윳값의 기울기. 1 차 섭동 식으로 진동계의 주파수나 [Markov 연쇄](markov-chains.md) 전이행렬의 고윳값이 성분 하나에 대해 얼마나 빨리 바뀌는지 계산한다.
- 다항식 근의 민감도. 동반행렬의 고윳값이 다항식의 근이므로, [Wilkinson 다항식](wilkinson-polynomial.md) $(z-1)(z-2)\cdots(z-20)$ 처럼 계수의 작은 변화로 근이 크게 움직이는 것이 동반행렬의 큰 고윳값 조건수로 나타난다.

[^1]: G. W. Stewart and J.-G. Sun, *Matrix Perturbation Theory*, Academic Press (1990), 4 장.
[^2]: L. N. Trefethen and M. Embree, *Spectra and Pseudospectra: The Behavior of Nonnormal Matrices and Operators*, Princeton University Press (2005).
[^3]: E. Anderson et al., *LAPACK Users' Guide*, 3rd ed., SIAM (1999).

# 연관 문서

## 선수지식

- [고윳값](eigenvalues.md)

## 더 알아보기

- [Wilkinson 다항식](wilkinson-polynomial.md)

#linear_algebra #algorithms #computation
