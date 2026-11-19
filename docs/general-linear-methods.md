# 일반 선형 방법

# 개요

**일반 선형 방법(general linear method)** 은 한 걸음 안에서 기울기를 여러 번 재는 [Runge–Kutta 방법](runge-kutta-methods.md)과 지나온 여러 값을 일차결합하는 [선형 다단계 방법](linear-multistep-methods.md)을 행렬 네 개로 함께 적는 틀이다. 걸음 안에서 기울기를 두 번 재면서 직전 걸음의 기울기도 다시 쓰는 방법은 두 갈래 어디에도 들지 않아, Butcher 표의 차수 조건도 다단계 방법의 근 조건도 그대로 쓸 수 없다. 일반 선형 방법은 이런 방법을 포함한 모든 방법을 같은 꼴로 적고, 수렴 판정과 안정성 계산을 하나로 한다.

# 직관

$x'=x$, $x\_0=1$ 을 걸음 $h=0.1$ 로 푼다. Runge–Kutta 방법의 중점 방법은 걸음마다 두 점에서 기울기를 잰다.

첫 점은 $Y\_1=x\_0=1$ 이고 기울기에 $h$ 를 곱하면 $hF\_1=0.1$ 이다. 둘째 점은 $Y\_2=x\_0+\frac12hF\_1=1.05$ 이고 $hF\_2=0.105$ 다. 다음 값은 $x\_1=x\_0+hF\_2=1.105$ 다.

이 계산은 두 단계로 나뉜다. 들어온 값 $x\_0$ 와 이미 잰 기울기로 기울기를 잴 점 $Y\_i$ 를 정하고, 들어온 값과 기울기로 내보낼 값을 정한다. 각 단계는 일차결합이므로 다음과 같이 계수를 행렬로 쓴다.

$$
\begin{pmatrix}Y\_1\cr Y\_2\end{pmatrix}=h\begin{pmatrix}0&0\cr \tfrac12&0\end{pmatrix}\begin{pmatrix}F\_1\cr F\_2\end{pmatrix}+\begin{pmatrix}1\cr 1\end{pmatrix}x\_0
$$

$$
x\_1=h\begin{pmatrix}0&1\end{pmatrix}\begin{pmatrix}F\_1\cr F\_2\end{pmatrix}+1\cdot x\_0
$$

2 단계 Adams–Bashforth 공식 $x\_{n+1}=x\_n+h(\frac32f\_n-\frac12f\_{n-1})$ 도 같은 꼴로 쓴다. 다음 걸음으로 넘기는 것을 값 하나가 아니라 두 성분 $(x\_n,hf\_{n-1})$ 로 둔다. 기울기를 잴 점은 $Y\_1=x\_n$ 하나이고, 내보내는 것은 다음 값 $x\_{n+1}$ 과 다음 걸음이 쓸 $hf\_n=hF\_1$ 이다.

$$
Y\_1=h\cdot 0\cdot F\_1+\begin{pmatrix}1&0\end{pmatrix}\begin{pmatrix}x\_n\cr hf\_{n-1}\end{pmatrix}
$$

$$
\begin{pmatrix}x\_{n+1}\cr hf\_n\end{pmatrix}=h\begin{pmatrix}\tfrac32\cr 1\end{pmatrix}F\_1+\begin{pmatrix}1&-\tfrac12\cr 0&0\end{pmatrix}\begin{pmatrix}x\_n\cr hf\_{n-1}\end{pmatrix}
$$

$x\_1=e^{0.1}=1.105171$, $hf\_0=0.1$ 을 넣으면 $Y\_1=1.105171$, $hF\_1=0.110517$ 이다. 내보내는 값은 $hf\_1=0.110517$ 과 다음 값이다.

$$
x\_2=1.105171+1.5\cdot 0.110517-0.5\cdot 0.1=1.220947
$$

두 방법 모두 행렬 네 개로 정해지고, 이 네 행렬로 정한 방법을 일반 선형 방법이라 한다.

# 정의

## 일반 선형 방법

$x'=f(x)$ 를 걸음 $h$ 로 푼다. 걸음 $n$ 으로 들어오는 $r$ 개 성분의 벡터를 $y^{\lbrack n-1\rbrack}$, 단의 값을 $Y=(Y\_1,\dots,Y\_s)$, 단의 기울기를 $F\_i=f(Y\_i)$ 로 쓴다. $s\times s$, $s\times r$, $r\times s$, $r\times r$ 행렬 $A,U,B,V$ 로 다음 계산을 걸음마다 하는 방법을 $s$ 단 $r$ 값 **일반 선형 방법** 이라 한다.[^1]

$$
Y=hAF+Uy^{\lbrack n-1\rbrack},\qquad y^{\lbrack n\rbrack}=hBF+Vy^{\lbrack n-1\rbrack}
$$

$x$ 가 벡터이면 각 계수에 단위행렬을 [Kronecker 곱](kronecker-product.md)으로 붙인다. 네 행렬은 다음 표로 적는다.

$$
\begin{pmatrix}A&U\cr B&V\end{pmatrix}
$$

$A$ 의 대각선과 그 위가 $0$ 이면 단을 차례로 계산하므로 양함수 방법이다.

## 두 갈래의 표

Butcher 표가 $(A,b,c)$ 인 Runge–Kutta 방법은 $r=1$, $U=(1,\dots,1)^\top$, $B=b^\top$, $V=1$ 이다. 직관 절의 중점 방법은 다음 표다.

$$
\begin{pmatrix}0&0&1\cr \tfrac12&0&1\cr 0&1&1\end{pmatrix}
$$

선형 다단계 방법은 지나온 값과 기울기를 들어오는 벡터의 성분으로 둔다. 직관 절의 2 단계 Adams–Bashforth 공식은 $s=1$, $r=2$ 이고 표는 다음과 같다.

$$
\begin{pmatrix}0&1&0\cr \tfrac32&1&-\tfrac12\cr 1&0&0\end{pmatrix}
$$

## 안정성 행렬

$x'=\lambda x$ 에 적용하고 $z=h\lambda$ 로 두면 $y^{\lbrack n\rbrack}=M(z)\thinspace y^{\lbrack n-1\rbrack}$ 이다. 다음 $M(z)$ 를 **안정성 행렬(stability matrix)** 이라 한다.

$$
M(z)=V+zB(I-zA)^{-1}U
$$

중점 방법은 $M(z)=1+z+z^2/2$ 이고, Runge–Kutta 방법의 안정성 함수와 같다.

# 성질

## 다단계 방법의 특성다항식

2 단계 Adams–Bashforth 공식의 안정성 행렬은 다음과 같다.

$$
M(z)=\begin{pmatrix}1+\tfrac32z&-\tfrac12\cr z&0\end{pmatrix}
$$

$\det(wI-M(z))=w^2-(1+\frac32z)w+\frac12z$ 이고, 이것은 그 공식의 특성다항식 $\rho(w)-z\sigma(w)$ 다. 다단계 방법의 근 조건과 안정 영역은 $M(z)$ 의 고윳값으로 옮겨진다.

## 무모순성과 안정성

다음 세 조건을 둔다.[^1]

- 미리 무모순성(preconsistency). $Vu=u$ 이고 $Uu=(1,\dots,1)^\top$ 인 벡터 $u$ 가 존재한다. $y^{\lbrack n\rbrack}$ 가 해의 값을 $u$ 의 배수로 담는다는 조건이다.
- 무모순성(consistency). 미리 무모순이고, $B(1,\dots,1)^\top+Vv=u+v$ 인 벡터 $v$ 가 존재한다. $y^{\lbrack n\rbrack}$ 가 해의 도함수에 $h$ 를 곱한 것을 $v$ 의 배수로 담는다는 조건이다.
- 안정성(stability). $V$ 의 거듭제곱 $V^n$ 들이 유계다.

직관 절의 Adams–Bashforth 공식은 $u=(1,0)$, $v=(0,1)$ 이다. 들어오는 벡터 $(x\_n,hf\_{n-1})$ 의 첫 성분이 해의 값이고 둘째 성분이 $h$ 를 곱한 도함수다. $V$ 의 고윳값은 $1$ 과 $0$ 이므로 안정하다.

## Butcher 수렴 정리

**Butcher 수렴 정리(Butcher's convergence theorem)** 는 일반 선형 방법이 수렴하는 것과 무모순이고 안정한 것이 동치라는 정리다.[^2] 선형 다단계 방법에서는 $V$ 의 거듭제곱이 유계라는 조건이 근 조건이 되어 Dahlquist 동치 정리(Dahlquist equivalence theorem)가 나온다. Runge–Kutta 방법에서는 $V=1$ 이 늘 안정하므로 무모순성만으로 수렴한다.

## 차수

들어오는 벡터의 성분마다 해와 그 도함수의 일차결합을 정해 두고, 한 걸음 뒤의 성분이 같은 결합을 $h^{p+1}$ 의 오차로 맞추면 차수가 $p$ 다. 차수 조건은 Runge–Kutta 방법의 근 있는 나무(rooted tree)에 대한 조건을 들어오는 성분까지 넓힌 것이다.[^1]

# 활용

- 두 갈래 밖의 방법. 직전 걸음의 단 기울기를 다시 쓰는 두 걸음 Runge–Kutta 방법, 단이 여럿이고 들어오는 값도 여럿인 DIMSIM(diagonally implicit multistage integration method)은 일반 선형 방법으로만 분석된다.[^3]
- [예측자–수정자 방법](predictor-corrector-methods.md). PECE(predict–evaluate–correct–evaluate) 방법은 예측값을 둘째 단으로 둔 $s=2$ 의 양함수 일반 선형 방법이고, 안정 영역이 유계라는 것이 $M(z)$ 로 계산된다.
- [Nordsieck 표현](nordsieck-representation.md). 들어오는 벡터를 척도를 맞춘 도함수로 둔 일반 선형 방법이다. 같은 방법을 들어오는 벡터의 좌표만 바꾸어 적은 것이어서, 다단계 표현과 $M(z)$ 의 고윳값이 같다.

[^1]: J. C. Butcher, *Numerical Methods for Ordinary Differential Equations*, 3rd ed., Wiley (2016), 5 장. Z. Jackiewicz, *General Linear Methods for Ordinary Differential Equations*, Wiley (2009).

[^2]: J. C. Butcher, "On the convergence of numerical solutions to ordinary differential equations", *Mathematics of Computation* 20 (1966), 1–10.

[^3]: J. C. Butcher, "Diagonally-implicit multi-stage integration methods", *Applied Numerical Mathematics* 11 (1993), 347–363.

# 연관 문서

## 선수지식

- [선형 다단계 방법](linear-multistep-methods.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #algorithms
