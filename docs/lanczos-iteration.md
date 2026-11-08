# Lanczos 반복

# 개요

**Lanczos 반복(Lanczos iteration)** 은 대칭행렬에 벡터를 거듭 곱해 얻는 방향들을 세 항 점화식으로 직교화하고, 그 결과로 생긴 작은 삼중대각행렬의 고윳값으로 원래 행렬의 끝 고윳값을 근사하는 방법이다. 정점이 백만 개인 그래프의 Laplacian 행렬에서 가장 작은 고윳값 몇 개를 구하려면 행렬 전체를 분해할 수 없고, 행렬과 벡터의 곱만 쓸 수 있다. Lanczos 반복은 곱셈 $m$ 번으로 $m\times m$ 삼중대각행렬을 만들고, $m$ 이 수십이어도 그 행렬의 가장 큰 고윳값과 가장 작은 고윳값이 원래 행렬의 끝 고윳값에 가깝다.

# 직관

$A=\mathrm{diag}(1,2,3)$ 의 고윳값을 행렬과 벡터의 곱만으로 찾는다. $q_1=(1,1,1)/\sqrt3$ 에서 [Rayleigh 몫](rayleigh-quotient.md)은 $\alpha_1=q_1^{\mathsf T}Aq_1=2$ 이다. $Aq_1$ 에서 $q_1$ 방향 성분을 빼면 $(-1,0,1)/\sqrt3$ 이 남고, 길이 $\beta_1=\sqrt{2/3}$ 으로 나눈 $q_2=(-1,0,1)/\sqrt2$ 가 다음 방향이다. $\alpha_2=q_2^{\mathsf T}Aq_2=2$ 다.

$q_1$, $q_2$ 가 생성하는 평면에서 Rayleigh 몫이 가장 큰 값과 가장 작은 값은 $2\times 2$ 행렬

$$
T_2=\begin{pmatrix}\alpha_1&\beta_1\cr\beta_1&\alpha_2\end{pmatrix}=\begin{pmatrix}2&\sqrt{2/3}\cr\sqrt{2/3}&2\end{pmatrix}
$$

의 고윳값 $2\pm\sqrt{2/3}$, 곧 약 $2.817$ 과 $1.184$ 이다. 곱셈 두 번으로 끝 고윳값 $3$ 과 $1$ 에 다가갔다. 한 번 더 하면 $Aq_2-\alpha_2q_2-\beta_1q_1$ 의 길이 $\beta_2=1/\sqrt3$ 이 나오고, $3\times 3$ 행렬 $T_3$ 의 고윳값은 정확히 $1,2,3$ 이다.

$Aq_2$ 를 직교화할 때 $q_1$ 과 $q_2$ 방향만 빼면 된다. $A$ 가 대칭이어서 $Aq_j$ 는 $q_{j-2}$ 이전의 방향과 이미 직교하기 때문이다. 그래서 단계마다 벡터 세 개만 있으면 된다.

# 정의

$n\times n$ 실대칭행렬 $A$ 와 단위벡터 $q_1$ 에서 $\beta_0=0$, $q_0=0$ 으로 두고 $j=1,2,\dots$ 에 대해

$$
\alpha_j=q_j^{\mathsf T}Aq_j,\qquad \beta_jq_{j+1}=Aq_j-\alpha_jq_j-\beta_{j-1}q_{j-1}
$$

로 정한다. $\beta_j\gt 0$ 은 오른쪽 벡터의 길이다. $Q_m=(q_1,\dots,q_m)$ 와

$$
T_m=\begin{pmatrix}\alpha_1&\beta_1&&\cr\beta_1&\alpha_2&\ddots&\cr&\ddots&\ddots&\beta_{m-1}\cr&&\beta_{m-1}&\alpha_m\end{pmatrix}
$$

을 만드는 이 절차가 Lanczos 반복이다[^1]. $T_m$ 의 고윳값 $\theta_1^{(m)}\ge\cdots\ge\theta_m^{(m)}$ 을 **Ritz 값(Ritz value)** 이라 하고, $T_my=\theta y$ 일 때 $Q_my$ 를 **Ritz 벡터(Ritz vector)** 라 한다. 직관 절에서 $\theta^{(2)}=2\pm\sqrt{2/3}$ 이다.

```javascript
// matvec(v) 는 A v. 반환값은 T_m 의 대각 alpha 와 부대각 beta
function lanczos(matvec, q1, m) {
  let qPrev = zeros(q1.length), q = q1, betaPrev = 0;
  const alpha = [], beta = [];
  for (let j = 0; j < m; j++) {
    const w = matvec(q);
    alpha.push(dot(q, w));
    const r = sub(sub(w, scale(alpha[j], q)), scale(betaPrev, qPrev));
    const bj = norm(r);
    if (bj === 0) break;          // 불변 부분공간을 찾았다
    beta.push(bj);
    qPrev = q; q = scale(1 / bj, r); betaPrev = bj;
  }
  return { alpha, beta };
}
```

# 성질

## 세 항 관계

$AQ_m=Q_mT_m+\beta_mq_{m+1}e_m^{\mathsf T}$ 이고 $Q_m^{\mathsf T}AQ_m=T_m$ 이다. $q_1,\dots,q_m$ 은 [Krylov 부분공간](krylov-subspace-methods.md) $\mathcal K_m=\mathrm{span}\lbrace q_1,Aq_1,\dots,A^{m-1}q_1\rbrace$ 의 정규직교기저다. $\beta_m=0$ 이면 $\mathcal K_m$ 이 $A$ 의 불변 부분공간이고 $T_m$ 의 고윳값은 $A$ 의 고윳값이다.

## Ritz 값과 Rayleigh 몫

$x=Q_my$ 이면 $R_A(x)=R_{T_m}(y)$ 이므로

$$
\theta_1^{(m)}=\max_{x\in\mathcal K_m\setminus\lbrace 0\rbrace}R_A(x)\le\lambda_1(A)
$$

이다. $\mathcal K_m\subseteq\mathcal K_{m+1}$ 이므로 $\theta_1^{(m)}$ 은 $m$ 에 대해 증가하며 $\lambda_1$ 로 다가간다. 가장 작은 Ritz 값도 같은 이유로 감소하며 $\lambda_n$ 으로 다가간다. $T_m$ 은 $T_{m+1}$ 의 주부분행렬이므로 [Cauchy 끼움 정리](cauchy-interlacing.md)에 따라 두 Ritz 값 목록이 엇갈려 놓인다.

## 잔차

Ritz 쌍 $(\theta,Q_my)$, $\vert y\vert=1$ 의 잔차는

$$
\vert AQ_my-\theta Q_my\vert=\beta_m\vert y_m\vert
$$

이다. $y_m$ 은 $y$ 의 마지막 성분이다. $Q_m$ 을 곱하지 않고 $T_m$ 만으로 계산되므로 반복을 멈출 때를 정하는 데 쓴다. 대칭행렬에서는 잔차가 $\eta$ 이하인 Ritz 값과 거리가 $\eta$ 이하인 $A$ 의 고윳값이 있다.

## 수렴 속도

$q_1$ 과 $\lambda_1$ 의 고유벡터 사이의 각을 $\phi$, $\rho=(\lambda_1-\lambda_2)/(\lambda_2-\lambda_n)$ 이라 하면

$$
\lambda_1-\theta_1^{(m)}\le(\lambda_1-\lambda_n)\left(\frac{\tan\phi}{c_{m-1}(1+2\rho)}\right)^2
$$

이다[^2]. $c_k$ 는 $k$ 차 [Chebyshev 다항식](chebyshev-polynomials.md)이다. 직관 절에서 $\tan\phi=\sqrt2$, $\rho=1$, $c_1(3)=3$ 이므로 $m=2$ 의 상한은 $3-0.444=2.556$ 이고 실제 $\theta_1^{(2)}\approx 2.817$ 은 이 위에 있다. $c_{m-1}(1+2\rho)$ 는 대략 $e^{2(m-1)\sqrt\rho}$ 로 자라므로, 같은 곱셈 횟수의 [거듭제곱법](power-iteration.md)이 갖는 $(\lambda_2/\lambda_1)^{2m}$ 보다 빠르다.

## 부동소수점에서의 직교성 손실

반올림이 있으면 $q_j$ 들이 직교성을 잃는다. Paige 는 직교성이 무너지는 방향이 이미 수렴한 Ritz 벡터의 방향이라는 것을 보였다[^3]. 그 결과 같은 고윳값의 Ritz 값이 여러 개 다시 나타난다. 모든 $q_j$ 에 대해 다시 직교화하면 단계마다 연산이 $O(nm)$ 으로 늘고, 수렴한 Ritz 벡터에 대해서만 다시 직교화하는 선택적 재직교화(selective reorthogonalization)가 그 사이에 있다.

## Gauss 구적

$q_1=b/\vert b\vert$ 이면 함수 $f$ 에 대해

$$
b^{\mathsf T}f(A)b\approx\vert b\vert^2e_1^{\mathsf T}f(T_m)e_1
$$

이고, $f$ 가 차수 $2m-1$ 이하의 다항식이면 등호다[^4]. $b^{\mathsf T}f(A)b$ 는 $A$ 의 고윳값 위에 놓인 측도에 대한 $f$ 의 적분이고, $T_m$ 의 고윳값과 고유벡터의 첫 성분이 그 적분의 $m$ 점 [Gauss 구적](gaussian-quadrature.md)의 마디와 가중치다.

## 공액기울기법과의 관계

$A$ 가 양의 정부호이고 $q_1=b/\vert b\vert$ 이면, [공액기울기법](conjugate-gradient.md)의 $m$ 번째 근사해는 $x_m=\vert b\vert Q_mT_m^{-1}e_1$ 이다. 공액기울기법의 계수는 $T_m$ 의 $LDL^{\mathsf T}$ 분해에서 나온다.

# 활용

- 큰 희소 대칭행렬의 끝 고윳값. [Laplacian 행렬](graph-laplacian.md)의 작은 고윳값과 고유벡터를 스펙트럼 군집에 쓰고, 양자역학의 Hamiltonian 행렬에서 바닥 상태 에너지를 구한다. 메모리를 일정하게 두려고 $m$ 단계마다 수렴하지 않은 Ritz 벡터들로 다시 시작하는 암묵적 재시작(implicit restart)을 쓴다.
- 행렬 함수와 벡터의 곱. $e^{-tA}b$, $A^{-1/2}b$ 를 $\vert b\vert Q_mf(T_m)e_1$ 로 근사한다. [열방정식](heat-equation.md)의 시간 적분과 Gauss 표본추출이 이 계산을 쓴다.
- 대각합 추정. [Hutchinson 대각합 추정량](hutchinson-trace-estimator.md)처럼 무작위 벡터 $b$ 마다 Gauss 구적으로 $b^{\mathsf T}f(A)b$ 를 구해 평균하면 $\mathrm{tr}\thinspace f(A)$ 의 추정이 된다. $f=\log$ 이면 $\log\det A$ 다.
- 특이값. $A^{\mathsf T}A$ 에 Lanczos 반복을 쓰는 것과 같은 계산을 $A$ 와 $A^{\mathsf T}$ 의 곱만으로 하는 것이 [Golub–Kahan 이중대각화](golub-kahan-bidiagonalization.md)의 Lanczos 판본이다.

[^1]: C. Lanczos, "An iteration method for the solution of the eigenvalue problem of linear differential and integral operators", *Journal of Research of the National Bureau of Standards* 45 (1950), 255–282.

[^2]: Y. Saad, "On the rates of convergence of the Lanczos and the block-Lanczos methods", *SIAM Journal on Numerical Analysis* 17 (1980), 687–706. Gene H. Golub and Charles F. Van Loan, *Matrix Computations*, 4th ed., Johns Hopkins University Press (2013), 10 장.

[^3]: C. C. Paige, "Accuracy and effectiveness of the Lanczos algorithm for the symmetric eigenproblem", *Linear Algebra and its Applications* 34 (1980), 235–258.

[^4]: Gene H. Golub and Gérard Meurant, *Matrices, Moments and Quadrature with Applications*, Princeton University Press (2010), 6 장.

# 연관 문서

## 선수지식

- [Krylov 부분공간 방법](krylov-subspace-methods.md)
- [Rayleigh 몫](rayleigh-quotient.md)

## 더 알아보기

- [MINRES](minres.md)

#linear_algebra #algorithms #computation
