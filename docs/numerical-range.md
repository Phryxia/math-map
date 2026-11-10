# 수치 범위

# 개요

**수치 범위(numerical range, field of values)** 는 복소 정사각[행렬](matrices.md) $A$ 에 길이 $1$ 인 벡터 $x$ 를 넣어 얻는 수 $x^\ast Ax$ 전체의 집합이다. 미분방정식 $x'=Ax$ 의 [고윳값](eigenvalues.md)이 모두 $-1$ 이어도, 어떤 순간에는 해의 길이가 늘어날 수 있다. 길이의 제곱이 변하는 속도가 $2\thinspace\mathrm{Re}(x^\ast Ax)$ 이므로, 수치 범위가 왼쪽 반평면 밖으로 얼마나 나가는지가 해의 길이가 순간적으로 늘 수 있는 최대 비율을 정한다.

# 직관

$A=\begin{pmatrix}-1&4\cr 0&-1\end{pmatrix}$ 의 고윳값은 $-1$ 뿐이다. $x'=Ax$ 의 해 $x(t)$ 에서 $\frac{d}{dt}\Vert x\Vert^2=x^\ast A^\ast x+x^\ast Ax=2\thinspace\mathrm{Re}(x^\ast Ax)$ 이다. $x=(0,1)$ 이면 $Ax=(4,-1)$ 이고 $x^\ast Ax=-1$ 이라 길이가 줄어든다. $x=(1,1)/\sqrt2$ 이면 $Ax=(3,-1)/\sqrt2$ 이고 $x^\ast Ax=(3-1)/2=1$ 이라, 그 순간 길이가 늘어난다.

그래서 길이 $1$ 인 $x$ 를 전부 넣어 $x^\ast Ax$ 가 어떤 값을 가질 수 있는지 본다. $A=-I+4N$, $N=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 로 쓰면 $x^\ast Ax=-1+4\thinspace\overline{x_1}x_2$ 다. $x=(\cos\theta,\thinspace e^{i\varphi}\sin\theta)$ 로 두면 $\overline{x_1}x_2=\frac12\sin 2\theta\thinspace e^{i\varphi}$ 이고, $\theta$ 와 $\varphi$ 를 바꾸면 반지름 $1/2$ 인 닫힌 원판의 모든 점이 나온다.

따라서 $x^\ast Ax$ 의 값은 중심 $-1$, 반지름 $2$ 인 원판을 채운다. 이 원판의 실수부 최댓값 $1$ 이 위에서 $x=(1,1)/\sqrt2$ 가 준 값이다.

# 정의

$A$ 를 $n\times n$ 복소행렬이라 하자. $A$ 의 수치 범위는 다음 집합이다[^1].

$$
W(A)=\lbrace x^\ast Ax: x\in\mathbb C^n,\thinspace\Vert x\Vert=1\rbrace
$$

직관 절에서 $W(N)$ 은 반지름 $1/2$ 인 닫힌 원판이고 $W(-I+4N)$ 은 중심 $-1$, 반지름 $2$ 인 닫힌 원판이다. 대칭 실행렬 $A$ 에 실벡터만 넣으면 $x^\ast Ax$ 는 [Rayleigh 몫](rayleigh-quotient.md)의 값이다.

**수치 반지름(numerical radius)** 은 $w(A)=\max\lbrace\vert z\vert:z\in W(A)\rbrace$, **수치 가로좌표(numerical abscissa)** 는 $\alpha(A)=\max\lbrace\mathrm{Re}\thinspace z:z\in W(A)\rbrace$ 다. 직관 절에서 $w(N)=1/2$ 이고 $\alpha(-I+4N)=1$ 이다.

# 성질

## 고윳값의 포함

$Av=\lambda v$, $\Vert v\Vert=1$ 이면 $v^\ast Av=\lambda$ 이므로 $\sigma(A)\subseteq W(A)$ 다. $W(UAU^\ast)=W(A)$ 가 모든 유니터리 $U$ 에서 성립하고, $W(aA+bI)=aW(A)+b$ 다. 직관 절의 $W(-I+4N)=-1+4W(N)$ 이 둘째 식이다.

## Toeplitz–Hausdorff 정리

**Toeplitz–Hausdorff 정리(Toeplitz–Hausdorff theorem).** $W(A)$ 는 [볼록](convexity.md)인 콤팩트 집합이다[^1].

[콤팩트성](compactness.md)은 단위구가 콤팩트이고 $x\mapsto x^\ast Ax$ 가 연속인 것에서 나온다. 볼록성은 $W(A)$ 의 두 점 $x^\ast Ax$, $y^\ast Ay$ 를 잇는 선분이 $x$, $y$ 가 펼치는 2 차원 공간으로 $A$ 를 줄인 $2\times 2$ 행렬의 수치 범위에 들어 있다는 것으로 증명한다. $2\times 2$ 행렬의 수치 범위는 다음 꼴이다.

**타원 범위 정리(elliptical range theorem).** 고윳값이 $\lambda_1$, $\lambda_2$ 인 $2\times 2$ 행렬 $A$ 의 수치 범위는 초점이 $\lambda_1$, $\lambda_2$ 이고 짧은 축의 길이가 $\bigl(\mathrm{tr}(A^\ast A)-\vert\lambda_1\vert^2-\vert\lambda_2\vert^2\bigr)^{1/2}$ 인 닫힌 타원이다[^1].

$N$ 은 두 초점이 $0$ 이고 짧은 축이 $\sqrt{1}=1$ 이므로 반지름 $1/2$ 인 원판이다. $-I+4N$ 은 두 초점이 $-1$ 이고 짧은 축이 $\sqrt{18-2}=4$ 이므로 반지름 $2$ 인 원판이다.

## 정규행렬

$A$ 가 정규행렬이면 $W(A)$ 는 고윳값들의 볼록 껍질이다. [Schur 분해](schur-decomposition.md)로 $A=UDU^\ast$, $D=\mathrm{diag}(\lambda_i)$ 이면 $y=U^\ast x$ 에 대해 $x^\ast Ax=\sum_i\vert y_i\vert^2\lambda_i$ 이고, $\vert y_i\vert^2$ 는 합이 $1$ 인 음이 아닌 수의 모든 조합을 지난다. 에르미트 행렬이면 $W(A)=\lbrack\lambda_{\min},\lambda_{\max}\rbrack$ 이다.

## 수치 반지름과 노름

$w$ 는 행렬 공간의 노름이고 다음을 만족한다[^1].

$$
\tfrac12\Vert A\Vert\le w(A)\le\Vert A\Vert
$$

$N$ 은 $\Vert N\Vert=1$, $w(N)=1/2$ 로 왼쪽 등호가 성립한다. 정규행렬은 $w(A)=\Vert A\Vert$ 다. 거듭제곱에서는 Berger 의 거듭제곱 부등식(power inequality) $w(A^k)\le w(A)^k$ 가 성립한다[^1].

## 지수함수의 상한

$x'=Ax$ 의 해는 $\frac{d}{dt}\Vert x\Vert^2=2\thinspace\mathrm{Re}(x^\ast Ax)\le 2\alpha(A)\Vert x\Vert^2$ 를 만족하므로 다음이 성립한다.

$$
\Vert e^{tA}\Vert\le e^{t\alpha(A)}\qquad(t\ge 0)
$$

$t=0$ 에서 $\Vert e^{tA}\Vert$ 의 오른쪽 미분계수가 $\alpha(A)$ 와 같아, 이 상한은 $t$ 가 작을 때 개선되지 않는다. 직관 절의 $A$ 는 고윳값 $-1$ 로는 $\Vert e^{tA}\Vert$ 가 $e^{-t}$ 처럼 줄 것 같지만, $\alpha(A)=1$ 이므로 처음에는 $e^{t}$ 의 비율까지 커질 수 있다.

## 의사스펙트럼과의 관계

$z\notin W(A)$ 이면 $\Vert(zI-A)^{-1}\Vert\le 1/\mathrm{dist}(z,W(A))$ 이다. 그래서 [의사스펙트럼](pseudospectra.md)은 $W(A)$ 를 $\varepsilon$ 만큼 넓힌 집합에 들어간다[^2].

$$
\Lambda_\varepsilon(A)\subseteq W(A)+\lbrace z:\vert z\vert\lt\varepsilon\rbrace
$$

## Crouzeix 추측

$C$ 를 모든 행렬 $A$ 와 모든 다항식 $p$ 에서 $\Vert p(A)\Vert\le C\max_{z\in W(A)}\vert p(z)\vert$ 가 성립하는 가장 작은 상수라 하자. **Crouzeix 추측(Crouzeix's conjecture)** 은 $C=2$ 라는 진술이다. $N$ 과 $p(z)=z$ 에서 $\Vert N\Vert=1=2\cdot\frac12$ 이므로 $C\ge 2$ 다. Crouzeix 가 $C\le 11.08$ 을 증명했고[^3], Crouzeix 와 Palencia 가 $C\le 1+\sqrt2$ 로 줄였다[^4].

# 활용

- [GMRES](gmres.md)의 수렴. $A$ 의 에르미트 부분 $H=(A+A^\ast)/2$ 가 양의 정부호이면 $\Vert r_m\Vert\le\bigl(1-\lambda_{\min}(H)^2/\Vert A\Vert^2\bigr)^{m/2}\Vert r_0\Vert$ 이다. Elman 의 상한(Elman's bound)이다[^5]. $\lambda_{\min}(H)$ 는 수치 범위의 실수부 최솟값이다.
- [상미분방정식](ordinary-differential-equations.md)의 수축성. $\alpha(A)\le 0$ 이면 지수함수의 상한으로 모든 해의 길이가 늘지 않는다. $\alpha(A)$ 는 2 노름에 대한 [로그 노름](logarithmic-norm.md)이고, 수치 적분법의 안정성 분석에서 고윳값 대신 쓴다.
- 양자 정보의 측정값 범위. 에르미트 행렬 두 개 $A$, $B$ 의 기댓값 쌍 $(x^\ast Ax,\thinspace x^\ast Bx)$ 의 집합은 $W(A+iB)$ 와 같고, 그래서 볼록이다.

[^1]: R. A. Horn and C. R. Johnson, *Topics in Matrix Analysis*, Cambridge University Press (1991), 1 장. Toeplitz–Hausdorff 정리, $2\times 2$ 행렬의 타원 범위, 정규행렬의 수치 범위, 수치 반지름의 노름 부등식과 거듭제곱 부등식이 있다.
[^2]: L. N. Trefethen and M. Embree, *Spectra and Pseudospectra: The Behavior of Nonnormal Matrices and Operators*, Princeton University Press (2005), 17 장.
[^3]: M. Crouzeix, "Numerical range and functional calculus in Hilbert space", *Journal of Functional Analysis* 244 (2007), 668–690.
[^4]: M. Crouzeix and C. Palencia, "The numerical range is a (1+√2)-spectral set", *SIAM Journal on Matrix Analysis and Applications* 38 (2017), 649–655.
[^5]: S. C. Eisenstat, H. C. Elman, M. H. Schultz, "Variational iterative methods for nonsymmetric systems of linear equations", *SIAM Journal on Numerical Analysis* 20 (1983), 345–357.

# 연관 문서

## 선수지식

- [Rayleigh 몫](rayleigh-quotient.md)
- [Schur 분해](schur-decomposition.md)

## 더 알아보기

- [로그 노름](logarithmic-norm.md)

#linear_algebra #functional_analysis #computation
