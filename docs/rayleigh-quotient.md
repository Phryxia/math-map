# Rayleigh 몫

# 개요

**Rayleigh 몫(Rayleigh quotient)** 은 대칭행렬 $A$ 와 $0$ 이 아닌 벡터 $x$ 로 만든 수 $x^{\mathsf T}Ax/x^{\mathsf T}x$ 다. 평면에서 $2x^2+2xy+2y^2$ 이 원 $x^2+y^2=1$ 위의 어느 점에서 가장 커지는지 찾는 문제는 각도 하나로 계산할 수 있지만, 변수가 백 개이면 같은 계산이 되지 않는다. Rayleigh 몫의 최댓값은 $A$ 의 가장 큰 고윳값이고 그 값을 내는 방향은 고유벡터이므로, 이차형식의 최대 최소 문제가 고윳값 문제로 바뀐다.

# 직관

원 위의 점을 $(\cos\theta,\sin\theta)$ 로 쓰면 $2x^2+2xy+2y^2=2+\sin 2\theta$ 이다. 최댓값은 $\theta=\pi/4$ 에서 $3$, 최솟값은 $\theta=-\pi/4$ 에서 $1$ 이다. 변수가 셋 이상이면 점을 각도 하나로 쓸 수 없어서 이 계산을 그대로 할 수 없다.

식을 [행렬](matrices.md)로 쓰면 $2x^2+2xy+2y^2=v^{\mathsf T}Av$ 이고 $v=(x,y)$, $A=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}$ 이다. $A(1,1)=3(1,1)$ 이고 $A(1,-1)=(1,-1)$ 이므로 최댓값 $3$ 과 최솟값 $1$ 은 $A$ 의 [고윳값](eigenvalues.md)이고, 그 값이 나온 방향 $\theta=\pm\pi/4$ 는 고유벡터의 방향이다.

고유벡터를 단위벡터 $u_1=(1,1)/\sqrt2$, $u_2=(1,-1)/\sqrt2$ 로 잡고 $v=c_1u_1+c_2u_2$ 로 쓰면 $v^{\mathsf T}Av=3c_1^2+c_2^2$ 이다. 원 위에서는 $c_1^2+c_2^2=1$ 이므로 이 값은 $3$ 과 $1$ 을 $c_1^2$ 과 $c_2^2$ 의 비율로 섞은 평균이고, 평균은 $1$ 과 $3$ 사이에 있다. 이 계산은 변수가 몇 개이든 [스펙트럼 정리](spectral-theorem.md)가 주는 직교 고유기저에서 그대로 된다. 원 위로 제한하는 대신 $v^{\mathsf T}v$ 로 나누면 모든 $v\ne 0$ 에서 같은 값을 쓸 수 있고, 이 몫이 Rayleigh 몫이다.

# 정의

## Rayleigh 몫

$n\times n$ 실대칭행렬 $A$ 와 $x\in\mathbb R^n\setminus\lbrace 0\rbrace$ 에 대해 다음 수를 $A$ 의 Rayleigh 몫이라 한다.

$$
R_A(x)=\frac{x^{\mathsf T}Ax}{x^{\mathsf T}x}
$$

직관 절의 $A$ 에서 $R_A(1,0)=2$, $R_A(1,1)=3$, $R_A(1,-1)=1$ 이다. 복소 Hermite 행렬(Hermitian matrix)이면 전치 대신 켤레전치를 써서 $R_A(x)=x^\ast Ax/x^\ast x$ 로 정의하고, 이 값은 실수다.

## 일반화 Rayleigh 몫

$B$ 가 양의 정부호 대칭행렬이면 다음 수를 **일반화 Rayleigh 몫(generalized Rayleigh quotient)** 이라 한다.

$$
R_{A,B}(x)=\frac{x^{\mathsf T}Ax}{x^{\mathsf T}Bx}
$$

$B=I$ 이면 Rayleigh 몫이다. $A=\begin{pmatrix}2&1\cr 1&2\end{pmatrix}$, $B=\begin{pmatrix}1&0\cr 0&2\end{pmatrix}$ 이면 $R_{A,B}(1,0)=2$ 이고 $R_{A,B}(0,1)=1$ 이다.

## 작용소의 Rayleigh 몫

[내적 공간](inner-product-spaces.md) $H$ 위의 자기수반 작용소(self-adjoint operator) $T$ 와 $x\ne 0$ 에 대해 $\langle Tx,x\rangle/\langle x,x\rangle$ 를 $T$ 의 Rayleigh 몫이라 한다. $H=\mathbb R^n$ 이고 $T=A$ 이면 위의 정의와 같다.

# 성질

## 크기 불변

$c\ne 0$ 이면 $R_A(cx)=R_A(x)$ 다. 그래서 $R_A$ 의 값은 단위구면 위의 값으로 정해지고, 원점을 지나는 직선마다 값이 하나다.

## Rayleigh 원리

$A$ 의 고윳값을 $\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_n$ 이라 하면 모든 $x\ne 0$ 에서 다음이 성립한다.

$$
\lambda_n\le R_A(x)\le\lambda_1
$$

등호는 $x$ 가 각각 $\lambda_n$, $\lambda_1$ 의 고유벡터일 때만 성립한다. 증명의 요지. 정규직교 고유벡터 $u_i$ 로 $x=\sum c_iu_i$ 라 쓰면 $R_A(x)=\sum\lambda_ic_i^2/\sum c_i^2$ 이고, 이것은 $\lambda_i$ 의 가중평균이다. 이 원리를 **Rayleigh 원리(Rayleigh principle)** 라 한다[^1].

## 정류점

$R_A$ 의 기울기는 다음과 같다.

$$
\nabla R_A(x)=\frac{2}{x^{\mathsf T}x}\bigl(Ax-R_A(x)\thinspace x\bigr)
$$

기울기가 $0$ 인 것은 $Ax=R_A(x)\thinspace x$ 인 것, 곧 $x$ 가 고유벡터이고 $R_A(x)$ 가 그 고윳값인 것과 동치다. $R_A$ 의 정류점은 고유벡터 전체이고 정류값은 고윳값 전체다.

## 2차 정확도

$u$ 가 고윳값 $\lambda$ 의 단위 고유벡터이고 $e\perp u$ 이면 다음이 성립한다.

$$
R_A(u+\varepsilon e)-\lambda=\varepsilon^2\thinspace\frac{e^{\mathsf T}Ae-\lambda\thinspace e^{\mathsf T}e}{1+\varepsilon^2e^{\mathsf T}e}
$$

벡터의 오차가 $\varepsilon$ 이면 고윳값의 오차는 $\varepsilon^2$ 의 크기다. 직관 절의 $A$ 에서 $x=(1,1.1)$ 은 $(1,1)$ 에서 약 $0.05$ 만큼 기운 방향이고 $R_A(x)=6.62/2.21\approx 2.9955$ 로 $3$ 과 약 $0.0045$ 차이 난다.

## Courant–Fischer 정리

중간 고윳값도 Rayleigh 몫의 극값으로 나타난다. **Courant–Fischer 정리(Courant–Fischer theorem)** 는 다음을 말한다[^2].

$$
\lambda_k=\max_{\dim V=k}\thinspace\min_{x\in V\setminus\lbrace 0\rbrace}R_A(x)=\min_{\dim W=n-k+1}\thinspace\max_{x\in W\setminus\lbrace 0\rbrace}R_A(x)
$$

증명의 요지. $V$ 를 $u_1,\dots,u_k$ 의 생성공간으로 잡으면 $V$ 위의 최솟값이 $\lambda_k$ 다. 차원이 $k$ 인 아무 $V$ 는 $u_k,\dots,u_n$ 의 생성공간과 $0$ 이 아닌 벡터를 공유하고, 그 벡터에서 $R_A\le\lambda_k$ 다.

이 정리에서 두 부등식이 나온다. 대칭행렬 $E$ 를 더하면 각 고윳값이 $E$ 의 고윳값 범위만큼만 움직이는 [Weyl 부등식](weyl-eigenvalue-inequality.md) $\lambda_k(A)+\lambda_n(E)\le\lambda_k(A+E)\le\lambda_k(A)+\lambda_1(E)$ 과, $A$ 에서 행과 열을 하나 지운 행렬의 고윳값이 $A$ 의 고윳값 사이에 끼는 [Cauchy 끼움 정리](cauchy-interlacing.md)다.

# 활용

## Rayleigh 몫 반복

근사 고유벡터 $x$ 가 있으면 2차 정확도에 따라 $R_A(x)$ 가 고윳값의 좋은 근사다. 이 근사를 이동량으로 써서 $(A-R_A(x)I)y=x$ 를 풀고 $y$ 를 정규화하는 것을 되풀이하는 방법이 **Rayleigh 몫 반복(Rayleigh quotient iteration)** 이다. 대칭행렬에서 고유벡터에 충분히 가까이 시작하면 수렴이 3차다. 오차가 $\varepsilon$ 이면 다음 단계의 오차는 $\varepsilon^3$ 의 크기다[^3].

```javascript
// A: 대칭행렬, x: 0 이 아닌 시작 벡터
function rayleighQuotientIteration(A, x, steps) {
  x = normalize(x);
  let mu = dot(x, matVec(A, x)); // R_A(x)
  for (let k = 0; k < steps; k++) {
    const y = solve(subtractScalarIdentity(A, mu), x); // (A - mu I) y = x
    x = normalize(y);
    mu = dot(x, matVec(A, x));
  }
  return { value: mu, vector: x };
}
```

$\mu$ 가 고윳값에 가까워지면 $A-\mu I$ 가 특이행렬에 가까워지지만, 풀이의 오차는 주로 고유벡터 방향으로 생기므로 정규화한 $y$ 는 정확하다.

## 주성분 분석

자료의 공분산행렬 $\Sigma$ 에 대해, 단위벡터 $w$ 방향으로 자료를 사영한 값의 분산은 $w^{\mathsf T}\Sigma w=R_\Sigma(w)$ 다. 분산이 가장 큰 방향을 찾는 [주성분 분석](principal-component-analysis.md)의 첫 주성분은 Rayleigh 원리에 따라 $\Sigma$ 의 가장 큰 고윳값의 고유벡터이고, $k$ 번째 주성분은 Courant–Fischer 정리의 $\lambda_k$ 를 내는 방향이다.

## 그래프 분할

[그래프 Laplacian](graph-laplacian.md) $L$ 에서 $x^{\mathsf T}Lx=\sum_{ij\in E}(x_i-x_j)^2$ 이다. 정점을 두 무리로 나눌 때 무리 하나에 $+1$, 다른 무리에 $-1$ 을 주면 이 합은 두 무리를 잇는 간선 수의 $4$ 배다. 값을 $\pm 1$ 대신 실수로 풀어 주고 상수 벡터에 직교하는 $x$ 에서 $R_L(x)$ 를 최소화하면 최솟값은 둘째로 작은 고윳값이고, 그 고유벡터(Fiedler 벡터)의 부호로 정점을 나눈다. [Cheeger 부등식](cheeger-inequality.md)이 이렇게 나눈 결과의 질을 보장한다.

## 진동수와 변분법

양 끝이 고정된 길이 $\pi$ 의 줄에서 가장 낮은 진동수의 제곱에 비례하는 값은 $\int_0^\pi f'(t)^2dt\big/\int_0^\pi f(t)^2dt$ 의 최솟값이고, 이것은 작용소 $-d^2/dt^2$ 의 Rayleigh 몫이다. 최솟값은 $f=\sin t$ 에서 $1$ 이다. Rayleigh 는 진동하는 계의 가장 낮은 진동수를 시험함수 하나로 위에서 추정하는 데 이 몫을 썼다[^1]. 같은 최소화가 [Wirtinger 부등식](wirtinger-inequality.md)의 최적 상수와 [Sturm–Liouville 문제](sturm-liouville.md)의 첫 고윳값을 준다.

시험함수를 유한차원 공간 $V$ 에서만 고르면 고윳값을 작은 것부터 $\mu_1\le\mu_2\le\cdots$ 로 세면, Courant–Fischer 정리에 따라 $V$ 위에서 같은 극값으로 얻은 $k$ 번째 값은 $\mu_k$ 이상이다. 이 방법을 **Rayleigh–Ritz 방법(Rayleigh–Ritz method)** 이라 하고, [유한요소법](finite-element-method.md)의 고윳값 계산이 이 방법이다.

## 반복법의 수렴률

[전처리](preconditioning.md)된 행렬 $M^{-1}A$ 의 고윳값은 일반화 Rayleigh 몫 $R_{A,M}$ 의 값 범위에 있다. 그 범위의 양 끝의 비가 조건수(condition number)이고, 켤레기울기법(conjugate gradient method)의 수렴 속도를 정한다.

[^1]: J. W. Strutt, Baron Rayleigh, *The Theory of Sound*, Vol. 1, Macmillan (1877).
[^2]: R. A. Horn, C. R. Johnson, *Matrix Analysis*, 2nd ed., Cambridge University Press (2013), 4.2절과 4.3절.
[^3]: B. N. Parlett, *The Symmetric Eigenvalue Problem*, SIAM (1998), 4장.

# 연관 문서

## 선수지식

- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

- [Cauchy 끼움 정리](cauchy-interlacing.md)
- [Weyl 고윳값 부등식](weyl-eigenvalue-inequality.md)
- [수치 범위](numerical-range.md)
- [Lanczos 반복](lanczos-iteration.md)
- [변분 양자 고유값 풀이](variational-quantum-eigensolver.md)

#linear_algebra #optimization #analysis #graph_theory
