# 로그 노름

# 개요

**로그 노름(logarithmic norm)** 은 정사각[행렬](matrices.md) $A$ 와 벡터의 크기를 재는 노름 하나에 대해, 미분방정식 $x'=Ax$ 의 해의 크기가 순간적으로 늘어날 수 있는 최대 비율을 주는 수다. $A=\begin{pmatrix}-1&4\cr 0&-1\end{pmatrix}$ 의 [고윳값](eigenvalues.md)은 $-1$ 뿐인데, $x(0)=(1,1)$ 에서 출발한 해의 첫 성분은 $1$ 에서 $1.889$ 까지 커졌다가 줄어든다. 로그 노름은 $A$ 의 성분만으로 이 증가 비율의 상한을 계산하고, 그 상한으로 해의 크기를 [지수함수](exponential-function.md)로 누른다.

# 직관

$x'=Ax$ 의 해는 $x(t)=e^{-t}(1+4t,\thinspace 1)$ 이다. 둘째 성분은 $e^{-t}$ 로 줄지만, 첫 성분은 $t=3/4$ 에서 $4e^{-3/4}\approx 1.889$ 가 될 때까지 커진다. 고윳값 $-1$ 만 보면 모든 해가 $e^{-t}$ 처럼 줄 것 같지만 그렇지 않다.

성분 가운데 절댓값이 가장 큰 것을 본다. 어느 순간 $\vert x_1\vert\ge\vert x_2\vert$ 이면 $x_1'=-x_1+4x_2$ 에서

$$
\frac{d}{dt}\vert x_1\vert\le -\vert x_1\vert+4\vert x_2\vert\le(-1+4)\vert x_1\vert=3\vert x_1\vert
$$

이다. $\vert x_2\vert$ 가 가장 크면 $x_2'=-x_2$ 이므로 비율이 $-1$ 이다. 그래서 가장 큰 성분은 비율 $\max(3,-1)=3$ 보다 빨리 커지지 못하고, $\max_i\vert x_i(t)\vert\le e^{3t}\max_i\vert x_i(0)\vert$ 이다.

각 행에서 대각 성분에 나머지 성분의 절댓값을 더한 값의 최댓값이 이 비율이다. $x(0)=(1,1)$ 에서 첫 성분의 실제 증가 비율은 $\frac{d}{dt}e^{-t}(1+4t)\big\vert\_{t=0}=3$ 이라 이 상한과 같다.

같은 해의 크기를 Euclid 길이로 재면 비율의 상한은 [수치 범위](numerical-range.md) 문서의 수치 가로좌표 $\alpha(A)=1$ 이다. 같은 $A$ 라도 크기를 재는 방법에 따라 비율이 $3$ 이기도 하고 $1$ 이기도 하다. 노름마다 정해지는 이 비율을 로그 노름이라 한다.

# 정의

## 유도 노름과 로그 노름

$\mathbb C^n$ 의 노름 $\Vert\cdot\Vert$ 에 대해 $\Vert A\Vert=\max_{\Vert x\Vert=1}\Vert Ax\Vert$ 를 유도 노름(induced norm)이라 한다. 이 노름에 대한 $A$ 의 로그 노름은

$$
\mu(A)=\lim_{h\to 0^+}\frac{\Vert I+hA\Vert-1}{h}
$$

이다[^1]. $\Vert I+hA\Vert$ 는 $h$ 에 대해 볼록이므로 이 극한이 존재한다. 이름은 $\mu(A)=\frac{d}{dt}\log\Vert e^{tA}\Vert\big\vert\_{t=0^+}$ 인 데서 왔다.

## 세 노름의 로그 노름

자주 쓰는 세 노름에서 로그 노름은 다음과 같다[^1].

| 벡터 노름 | 로그 노름 |
| --- | --- |
| $\Vert x\Vert\_\infty=\max_i\vert x_i\vert$ | $\mu\_\infty(A)=\max_i\bigl(\mathrm{Re}\thinspace a\_{ii}+\sum_{j\ne i}\vert a\_{ij}\vert\bigr)$ |
| $\Vert x\Vert\_1=\sum_i\vert x_i\vert$ | $\mu\_1(A)=\max_j\bigl(\mathrm{Re}\thinspace a\_{jj}+\sum_{i\ne j}\vert a\_{ij}\vert\bigr)$ |
| $\Vert x\Vert\_2=(\sum_i\vert x_i\vert^2)^{1/2}$ | $\mu\_2(A)=\lambda_{\max}\bigl((A+A^\ast)/2\bigr)$ |

$\mu\_\infty$ 는 행마다, $\mu\_1$ 은 열마다 대각 성분의 실수부에 나머지 성분의 절댓값을 더한 값의 최댓값이다. $\mu\_2$ 는 에르미트 부분의 가장 큰 고윳값이고 수치 가로좌표 $\alpha(A)$ 와 같다. 직관 절의 $A$ 는 행의 값이 $3,-1$ 이라 $\mu\_\infty(A)=3$, 열의 값이 $-1,3$ 이라 $\mu\_1(A)=3$ 이다. 에르미트 부분은 다음과 같고 고윳값이 $1,-3$ 이라 $\mu\_2(A)=1$ 이다.

$$
\frac{A+A^\ast}{2}=\begin{pmatrix}-1&2\cr 2&-1\end{pmatrix}
$$

# 성질

## 대수적 성질

노름과 달리 로그 노름은 음수일 수 있다. 다음이 성립한다[^1].

- $-\Vert A\Vert\le\mu(A)\le\Vert A\Vert$.
- $\mu(A+B)\le\mu(A)+\mu(B)$, $\mu(cA)=c\thinspace\mu(A)$ ($c\ge 0$).
- $\mu(A+cI)=\mu(A)+\mathrm{Re}\thinspace c$.
- $A$ 의 모든 고윳값 $\lambda$ 에서 $\mathrm{Re}\thinspace\lambda\le\mu(A)$.

마지막 성질은 $Av=\lambda v$ 이면 $\Vert(I+hA)v\Vert=\vert 1+h\lambda\vert\thinspace\Vert v\Vert$ 이고 다음이 성립하는 것에서 나온다.

$$
\vert 1+h\lambda\vert=1+h\thinspace\mathrm{Re}\thinspace\lambda+O(h^2)
$$

직관 절의 $A$ 는 $\mathrm{Re}\thinspace\lambda=-1$ 이고 $\mu\_2(A)=1$ 이어서 부등호가 등호가 아니다.

## 행렬 지수함수의 상한

모든 $t\ge 0$ 에서

$$
\Vert e^{tA}\Vert\le e^{t\mu(A)}
$$

이다. $f(t)=\Vert e^{tA}\Vert$ 로 두면 다음이 성립한다.

$$
\begin{aligned}
e^{(t+h)A}&=(I+hA)e^{tA}+O(h^2)\cr
f(t+h)&\le\Vert I+hA\Vert f(t)+O(h^2)
\end{aligned}
$$

그러므로 오른쪽 위 미분계수가 $\mu(A)f(t)$ 이하다. [Grönwall 부등식](gronwall-inequality.md)의 미분형을 적용하면 상한이 나온다.

$t=0$ 에서 $f$ 의 오른쪽 미분계수가 $\mu(A)$ 와 같으므로 $t$ 가 작을 때 이 상한은 개선되지 않는다. 직관 절에서 $\Vert e^{tA}\Vert\_\infty=e^{-t}(1+4t)$ 이고 $t=0$ 에서의 미분계수가 $\mu\_\infty(A)=3$ 이다.

## 두 해 사이의 거리

$f:\mathbb R^n\to\mathbb R^n$ 이 볼록 영역에서 미분 가능하고 Jacobi 행렬(Jacobian matrix) $J\_f(x)$ 가 모든 $x$ 에서 $\mu(J\_f(x))\le\nu$ 를 만족한다고 하자. 그러면 $x'=f(x)$ 의 두 해는

$$
\Vert x(t)-y(t)\Vert\le e^{\nu t}\Vert x(0)-y(0)\Vert\qquad(t\ge 0)
$$

를 만족한다[^2]. 증명은 다음 식에서 시작한다.

$$
f(x)-f(y)=\int_0^1J\_f\bigl(y+s(x-y)\bigr)\thinspace ds\thinspace(x-y)
$$

로그 노름이 볼록이므로 적분한 행렬의 로그 노름도 $\nu$ 이하인 것에서, 위 지수함수의 상한과 같은 계산으로 나온다.

Grönwall 부등식은 [Lipschitz 사상](lipschitz-maps.md)의 상수 $K$ 로 $e^{Kt}$ 를 주는데, $K\ge\Vert J\_f\Vert\ge\mu(J\_f)$ 이므로 이 상한이 더 좋다. 직관 절의 $f(x)=Ax$ 는 최대 노름에서 $K=\Vert A\Vert\_\infty=5$ 이고 $\nu=3$ 이다. $\nu\lt 0$ 이면 모든 해가 서로 지수적으로 가까워진다.

## 음함수 Euler 법의 수축

$h\gt 0$ 이고 $h\mu(A)\lt 1$ 이면 $I-hA$ 는 가역이고

$$
\Vert(I-hA)^{-1}\Vert\le\frac1{1-h\mu(A)}
$$

이다[^1]. $y=(I-hA)x$ 로 두면 작은 $\varepsilon\gt 0$ 에서 다음이 성립한다.

$$
\begin{aligned}
(1+\varepsilon/h)x&=(I+\varepsilon A)x+(\varepsilon/h)y\cr
(1+\varepsilon/h)\Vert x\Vert&\le\bigl(1+\varepsilon\mu(A)+o(\varepsilon)\bigr)\Vert x\Vert+(\varepsilon/h)\Vert y\Vert
\end{aligned}
$$

$\varepsilon\to 0$ 으로 $(1-h\mu(A))\Vert x\Vert\le\Vert y\Vert$ 를 얻는다.

$x'=Ax$ 에 음함수 Euler 법(implicit Euler method)을 쓰면 다음과 같다.

$$
x\_{k+1}=x_k+hAx\_{k+1},\qquad x\_{k+1}=(I-hA)^{-1}x_k
$$

그래서 $\mu(A)\le 0$ 이면 모든 $h\gt 0$ 에서 수치해의 크기가 늘지 않는다.

다음 행렬은 $\mu\_\infty(A)=-1$ 이다.

$$
A=\begin{pmatrix}-100&99\cr 0&-1\end{pmatrix}
$$

$h=0.1$ 이면 양함수 Euler 법(explicit Euler method)과 음함수 Euler 법의 행렬은 다음과 같다.

$$
I+hA=\begin{pmatrix}-9&9.9\cr 0&0.9\end{pmatrix},\qquad (I-hA)^{-1}=\begin{pmatrix}1/11&9/11\cr 0&1/1.1\end{pmatrix}
$$

앞의 것은 $\Vert\cdot\Vert\_\infty=18.9$ 라 수치해가 커질 수 있다. 뒤의 것은 두 행의 절댓값 합이 모두 $1/1.1$ 이어서 상한 $1/(1+0.1)$ 과 같다.

# 활용

- [상미분방정식](ordinary-differential-equations.md)의 수치 적분 오차. Dahlquist 는 전역 오차가 국소 오차를 $e^{\mu t}$ 꼴로 쌓은 것 이하라는 상한을 로그 노름으로 증명했다[^2]. Lipschitz 상수 대신 로그 노름을 쓰므로, 실수부가 크게 음수인 고윳값이 있는 [강성](stiff-equations.md) 문제(stiff problem)에서도 상한이 커지지 않는다.
- 비선형 계의 [수축 해석](contraction-analysis.md)(contraction analysis). 어떤 노름에서 Jacobi 행렬의 로그 노름이 음수이면 모든 궤도가 서로 지수적으로 가까워진다는 두 해 사이의 거리 성질을 제어 이론에서 수축성의 판정에 쓴다[^3].
- [수치 범위](numerical-range.md). $\mu\_2(A)$ 는 수치 범위의 실수부 최댓값이고, 그 문서의 지수함수의 상한은 위 상한의 2 노름 판본이다.

[^1]: G. Söderlind, "The logarithmic norm. History and modern theory", *BIT Numerical Mathematics* 46 (2006), 631–652.
[^2]: G. Dahlquist, "Stability and error bounds in the numerical integration of ordinary differential equations", *Kungl. Tekniska Högskolans Handlingar* 130, Stockholm, 1959.
[^3]: W. Lohmiller, J.-J. E. Slotine, "On contraction analysis for non-linear systems", *Automatica* 34 (1998), 683–696.

# 연관 문서

## 선수지식

- [수치 범위](numerical-range.md)
- [Grönwall 부등식](gronwall-inequality.md)

## 더 알아보기

- [강성 방정식](stiff-equations.md)
- [수축 해석](contraction-analysis.md)

#linear_algebra #analysis #computation
