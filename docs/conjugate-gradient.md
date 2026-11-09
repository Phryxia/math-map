# 공액기울기법

# 개요

**공액기울기법(conjugate gradient method, CG)** 은 대칭 양정부호 행렬 $A$ 의 연립일차방정식 $Ax=b$ 를, 이차함수 $f(x)=\frac12x^{\mathsf T}Ax-b^{\mathsf T}x$ 의 최솟점을 방향 하나씩 따라가며 찾아 푸는 반복법이다. 등고선이 길쭉한 타원인 그릇의 바닥을 찾을 때 매번 가장 가파른 방향으로 내려가면, 걸음이 골짜기를 가로질러 지그재그로 오가며 바닥에 닿지 않는다. 공액기울기법은 앞에서 맞춘 방향의 최소를 깨지 않는 방향만 골라 걸어서, 변수가 $n$ 개이면 정확한 산술에서 $n$ 걸음 안에 바닥에 닿는다.

# 직관

$A=\begin{pmatrix}2&1\cr 1&3\end{pmatrix}$, $b=(1,0)$ 이면 해는 $x^\ast=(3/5,-1/5)$ 다. $f$ 의 기울기는 $Ax-b$ 이므로 가장 가파르게 내려가는 방향은 잔차 $r=b-Ax$ 다. [경사하강법](gradient-descent.md)을 $x_0=0$ 에서 시작하고 걸음마다 그 방향의 최솟점까지 간다. 방향 $r$ 위의 최솟점까지 가는 걸음 길이는 $r^{\mathsf T}r/r^{\mathsf T}Ar$ 다.

- $r_0=(1,0)$ 이고 걸음 길이 $1/2$ 로 $x_1=(1/2,0)$ 이다.
- $r_1=(0,-1/2)$ 이고 걸음 길이 $1/3$ 으로 $x_2=(1/2,-1/6)$ 이다.
- $r_2=(1/6,0)$ 이다.

$r_2$ 가 $r_0$ 과 같은 방향이다. 둘째 걸음이 첫 방향 $(1,0)$ 위의 최소를 깨뜨려서 첫 방향으로 다시 가야 한다. 이후로도 두 걸음마다 잔차가 $1/6$ 배가 될 뿐 해에는 닿지 않는다.

둘째 방향 $p_1$ 을 따라 움직여도 첫 방향의 기울기 성분이 $0$ 으로 남으려면, 움직인 뒤의 잔차 $r_1-\alpha Ap_1$ 이 $p_0=(1,0)$ 과 직교해야 한다. $r_1\perp p_0$ 이므로 조건은 $p_0^{\mathsf T}Ap_1=0$ 이다. $p_1=r_1+\beta p_0$ 로 두면 $Ap_0=(2,1)$ 에서 $p_0^{\mathsf T}Ar_1=-1/2$, $p_0^{\mathsf T}Ap_0=2$ 이므로 $\beta=1/4$ 이고 $p_1=(1/4,-1/2)$ 다.

$Ap_1=(0,-5/4)$ 이므로 걸음 길이는 $r_1^{\mathsf T}p_1/p_1^{\mathsf T}Ap_1=(1/4)/(5/8)=2/5$ 이고, $x_2=(1/2,0)+\frac25(1/4,-1/2)=(3/5,-1/5)$ 이다. 두 걸음에 해가 나왔다.

# 정의

## A-공액

$A$ 가 $n\times n$ 대칭 양정부호 행렬이면 $\langle u,v\rangle_A=u^{\mathsf T}Av$ 는 내적이고, $\Vert u\Vert_A=\sqrt{u^{\mathsf T}Au}$ 를 **A-노름(A-norm)** 이라 한다. $0$ 이 아닌 벡터 $p_0,\dots,p_{k-1}$ 이 $i\ne j$ 에서 $p_i^{\mathsf T}Ap_j=0$ 을 만족하면 **A-공액(A-conjugate)** 이라 한다. 직관 절의 $p_0=(1,0)$ 과 $p_1=(1/4,-1/2)$ 은 $p_0^{\mathsf T}Ap_1=(2,1)\cdot(1/4,-1/2)=0$ 이므로 A-공액이다.

## 공액기울기법

$x_0$ 에서 시작해 $r_0=b-Ax_0$, $p_0=r_0$ 으로 두고 $k=0,1,2,\dots$ 에서 다음을 되풀이하는 반복을 공액기울기법이라 한다[^1].

$$
\alpha_k=\frac{r_k^{\mathsf T}r_k}{p_k^{\mathsf T}Ap_k},\quad x_{k+1}=x_k+\alpha_kp_k,\quad r_{k+1}=r_k-\alpha_kAp_k,\quad \beta_k=\frac{r_{k+1}^{\mathsf T}r_{k+1}}{r_k^{\mathsf T}r_k},\quad p_{k+1}=r_{k+1}+\beta_kp_k
$$

직관 절의 예에서 $\beta_0=(1/4)/1=1/4$, $\alpha_1=(1/4)/(5/8)=2/5$ 로 직관 절의 값과 같다. 절차는 다음과 같다. 한 반복에 행렬-벡터 곱이 한 번 들고 저장하는 벡터는 $x,r,p,Ap$ 넷이다.

```javascript
function conjugateGradient(matVec, b, x, tol, maxIter) {
  let r = sub(b, matVec(x));
  let p = r.slice();
  let rr = dot(r, r);
  for (let k = 0; k < maxIter && Math.sqrt(rr) > tol; k++) {
    const Ap = matVec(p);
    const alpha = rr / dot(p, Ap);
    x = axpy(alpha, p, x);       // x + alpha p
    r = axpy(-alpha, Ap, r);     // r - alpha Ap
    const rrNew = dot(r, r);
    p = axpy(rrNew / rr, p, r);  // r + beta p
    rr = rrNew;
  }
  return x;
}
```

# 성질

## 확대 부분공간 정리

$p_0,\dots,p_{n-1}$ 이 A-공액이고 $x_{k+1}$ 이 $x_k$ 에서 $p_k$ 방향의 최솟점이면, $x_k$ 는 $x_0+\mathrm{span}\lbrace p_0,\dots,p_{k-1}\rbrace$ 위에서 $f$ 의 최솟점이다. 이것이 **확대 부분공간 정리(expanding subspace theorem)** 다[^2]. 특히 $x_n=x^\ast$ 다.

증명의 요지. $k$ 에 대한 귀납법이다. $r_{k+1}=r_k-\alpha_kAp_k$ 이고 $j\lt k$ 에서 $p_j^{\mathsf T}Ap_k=0$ 이므로 $p_j^{\mathsf T}r_{k+1}=p_j^{\mathsf T}r_k=0$ 이다. $\alpha_k$ 의 선택이 $p_k^{\mathsf T}r_{k+1}=0$ 을 준다. 기울기 $-r_{k+1}$ 이 부분공간의 모든 방향과 직교하므로 최솟점이다.

$f(x)-f(x^\ast)=\frac12\Vert x-x^\ast\Vert_A^2$ 이므로, $x_k$ 는 그 부분공간에서 A-노름 오차가 가장 작은 점이다.

## Krylov 부분공간과 잔차의 직교성

공액기울기법의 반복에서 다음이 성립한다[^2].

$$
\mathrm{span}\lbrace p_0,\dots,p_{k-1}\rbrace=\mathrm{span}\lbrace r_0,\dots,r_{k-1}\rbrace=\mathcal K_k(A,r_0),\qquad r_i^{\mathsf T}r_j=0\ (i\ne j),\qquad p_i^{\mathsf T}Ap_j=0\ (i\ne j)
$$

다음 공간은 [Krylov 부분공간 방법](krylov-subspace-methods.md)의 Krylov 부분공간이다.

$$
\mathcal K_k(A,r_0)=\mathrm{span}\lbrace r_0,Ar_0,\dots,A^{k-1}r_0\rbrace
$$

직관 절의 $r_0=(1,0)$ 과 $r_1=(0,-1/2)$ 은 직교한다. 따라서 $x_k$ 는 $x_0+\mathcal K_k(A,r_0)$ 에서 A-노름 오차를 최소화하는 점이고, 이것은 그 문서의 Galerkin 조건 $r_k\perp\mathcal K_k$ 와 같다.

$p_{k+1}$ 을 앞의 모든 $p_j$ 와 A-공액으로 만드는 데 $p_k$ 하나만 쓰는 것은 다음에서 나온다. $j\lt k$ 이면 $Ap_j\in\mathcal K_{j+2}\subseteq\mathcal K_{k+1}$ 이고 $r_{k+1}\perp\mathcal K_{k+1}$ 이므로 $r_{k+1}^{\mathsf T}Ap_j=0$ 이다. 그래서 Gram–Schmidt 과정(Gram–Schmidt process)의 항이 마지막 하나만 남는다.

## 수렴률

$A$ 의 조건수(condition number)가 $\kappa=\lambda_{\max}/\lambda_{\min}$ 이면 다음이 성립한다[^2].

$$
\Vert x_k-x^\ast\Vert_A\le 2\Bigl(\frac{\sqrt\kappa-1}{\sqrt\kappa+1}\Bigr)^k\Vert x_0-x^\ast\Vert_A
$$

오차가 $(I-Aq(A))(x_0-x^\ast)$ 꼴이고 $x_k$ 가 그 가운데 A-노름이 가장 작은 것이므로, 상한은 $p(0)=1$ 인 $k$ 차 다항식의 스펙트럼 구간 위 최댓값으로 정해지고 [Chebyshev 다항식](chebyshev-polynomials.md)이 그 최솟값을 준다. 같은 조건에서 정확한 선 탐색을 쓴 경사하강법의 상한은 $\bigl(\frac{\kappa-1}{\kappa+1}\bigr)^k$ 이다. 오차를 $\varepsilon$ 배로 줄이는 반복 수가 경사하강법에서는 $\kappa$ 에, 공액기울기법에서는 $\sqrt\kappa$ 에 비례한다.

직관 절의 $A$ 는 고윳값이 $(5\pm\sqrt5)/2$ 라 $\kappa=(3+\sqrt5)/2\approx 2.62$ 이고 경사하강법의 한 걸음 상한은 $(\kappa-1)/(\kappa+1)\approx 0.447$ 이다. 실제로 두 걸음마다 오차가 $1/6$ 배였고 $1/6\le 0.447^2\approx 0.2$ 다.

## 고윳값의 개수와 유한 종료

$A$ 의 서로 다른 고윳값이 $d$ 개이면 정확한 산술에서 $x_d=x^\ast$ 다. $d$ 개 고윳값에서 $0$ 이고 $p(0)=1$ 인 $d$ 차 다항식이 있기 때문이다. 부동소수점 산술에서는 잔차의 직교성이 무너져 $n$ 걸음 종료가 성립하지 않지만, 반복은 수렴을 계속하고 위의 수렴률은 근사적으로 유지된다[^3].

## 비선형 공액기울기법

이차함수가 아닌 $f$ 에서는 $r_k$ 를 $-\nabla f(x_k)$ 로 바꾸고, $\alpha_k$ 를 [선탐색](line-search.md)으로 정한다. $\beta_k$ 의 공식은 둘이 많이 쓰인다.

$$
\beta_k^{\mathrm{FR}}=\frac{\Vert\nabla f(x_{k+1})\Vert^2}{\Vert\nabla f(x_k)\Vert^2},\qquad
\beta_k^{\mathrm{PR}}=\frac{\nabla f(x_{k+1})^{\mathsf T}\bigl(\nabla f(x_{k+1})-\nabla f(x_k)\bigr)}{\Vert\nabla f(x_k)\Vert^2}
$$

앞의 것이 Fletcher–Reeves 공식(Fletcher–Reeves formula), 뒤의 것이 Polak–Ribière 공식(Polak–Ribière formula)이다. 이차함수와 정확한 선 탐색에서는 연속한 기울기가 직교하므로 두 공식이 같고 위의 $\beta_k$ 와도 같다. Fletcher–Reeves 공식은 강 Wolfe 조건(strong Wolfe conditions)을 $c_2\lt 1/2$ 로 만족하는 선탐색에서 모든 $p_k$ 가 하강 방향이다[^2].

# 활용

- [유한요소법](finite-element-method.md)의 강성행렬처럼 크고 희소한 대칭 양정부호 계. 행렬-벡터 곱만 쓰므로 행렬을 분해하지 않는다.
- [전처리](preconditioning.md)된 공액기울기법. $M^{-1}A$ 의 조건수가 $A$ 보다 작은 $M$ 을 고르면 반복 수가 $\sqrt{\kappa(M^{-1}A)}$ 에 비례한다. [불완전 LU 분해](incomplete-lu.md)의 대칭판인 불완전 Cholesky 분해가 대표적인 $M$ 이다.
- Newton 방향 계산. [Hessian 행렬](hessian.md)을 만들지 않고 Hessian-벡터 곱만으로 Newton 계를 근사적으로 푼다. [신뢰영역 방법](trust-region.md)의 Steihaug 절단 공액기울기법은 반복이 영역 경계에 닿거나 음의 곡률 방향을 만나면 멈춘다.
- 최소제곱 문제. $A^{\mathsf T}Ax=A^{\mathsf T}b$ 에 공액기울기법을 쓰는 CGLS(conjugate gradient least squares)는 $A^{\mathsf T}A$ 를 만들지 않고 $A$ 와 $A^{\mathsf T}$ 의 곱만 쓴다. 조건수가 $\kappa(A)^2$ 이 된다.

[^1]: M. R. Hestenes and E. Stiefel, "Methods of conjugate gradients for solving linear systems", *Journal of Research of the National Bureau of Standards* 49 (1952), 409–436.
[^2]: J. Nocedal and S. J. Wright, *Numerical Optimization*, 2nd ed., Springer, 2006, 5 장. 확대 부분공간 정리, Krylov 부분공간과의 관계, 수렴률, 비선형 판본과 Fletcher–Reeves 공식의 하강성이 있다.
[^3]: A. Greenbaum, *Iterative Methods for Solving Linear Systems*, SIAM, 1997, 4 장.

# 연관 문서

## 선수지식

- [Krylov 부분공간 방법](krylov-subspace-methods.md)
- [경사하강법](gradient-descent.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #optimization #algorithms #computation
