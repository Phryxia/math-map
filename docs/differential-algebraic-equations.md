# 미분대수방정식

# 개요

**미분대수방정식(differential-algebraic equation, DAE)** 은 미분방정식과 도함수가 없는 대수방정식이 섞인 연립방정식이다. 길이 $1$ 인 막대 끝에 매달린 추의 위치 $(x,y)$ 는 운동방정식을 따르면서 $x^2+y^2=1$ 도 만족해야 하고, 막대가 당기는 힘은 어느 식에서도 미분되지 않는다. 이런 계는 [Euler 방법](euler-method.md)처럼 도함수를 우변에서 읽어 한 걸음 나아가는 방법으로는 풀 수 없다. 제약식을 몇 번 미분해야 모든 미지수의 도함수가 정해지는지를 세고, 새 점의 값을 연립방정식으로 구하는 [후진 차분 공식](backward-differentiation-formulas.md) 같은 음함수 방법으로 푼다.

# 직관

수레가 레일 위를 움직이고, 레일 옆의 캠이 수레의 위치를 시각 $t$ 에서 $\sin t$ 로 정한다. 수레의 위치를 $x\_1$, 속도를 $x\_2$ 라 하면 다음 두 식이 성립한다.

$$
x\_1'=x\_2,\qquad 0=x\_1-\sin t
$$

둘째 식에는 도함수가 없고, 속도 $x\_2$ 의 도함수는 어느 식에도 없다. 그래서 Euler 방법으로 $x\_2$ 를 한 걸음 나아가게 할 식이 없다.

둘째 식을 $t$ 로 한 번 미분하면 $x\_1'=\cos t$ 이고, 첫째 식과 맞추면 $x\_2=\cos t$ 다. 이 식도 $x\_2$ 의 값만 정할 뿐 도함수는 아니다. 한 번 더 미분하면 $x\_2'=-\sin t$ 이고, 이제 두 미지수의 도함수가 모두 정해져 보통의 [상미분방정식](ordinary-differential-equations.md)이 된다. 미분을 두 번 했으므로 이 계의 지표가 $2$ 라 한다.

미분하는 동안 $x\_2=\cos t$ 라는 식이 새로 나왔다. 처음 값도 이 식을 따라야 하므로 $x\_1(0)=0$, $x\_2(0)=1$ 말고는 해가 없다. 상미분방정식과 달리 처음 값을 마음대로 고를 수 없다.

음함수 Euler 방법은 새 점의 도함수를 차분으로 바꾸어 걸음마다 연립방정식을 푼다. 걸음 $h=0.1$ 이면 다음이 나온다.

$$
\frac{x\_1^{(n+1)}-x\_1^{(n)}}{h}=x\_2^{(n+1)},\qquad 0=x\_1^{(n+1)}-\sin t\_{n+1}
$$

$x\_1^{(0)}=0$ 에서 시작하면 $x\_2^{(1)}=\sin 0.1/0.1=0.9983$ 이고 참값 $\cos 0.1=0.9950$ 과 $0.003$ 차이다. 처음 값을 $x\_1^{(0)}=0.1$ 로 잘못 주면 $x\_2^{(1)}=-0.0017$ 로 첫 걸음이 크게 틀리지만, 둘째 걸음은 $x\_2^{(2)}=0.9884$ 로 참값 $0.9801$ 에 가깝다. 새 점에서 제약식을 그대로 풀기 때문에 한 걸음 뒤부터는 제약 위에 있다.

# 정의

## 미분대수방정식

$F:\mathbb R\times\mathbb R^n\times\mathbb R^n\to\mathbb R^n$ 에 대해 다음 꼴의 방정식을 미분대수방정식이라 한다. 단, $x'$ 에 대한 Jacobi 행렬 $\partial F/\partial x'$ 는 특이행렬이다.

$$
F(t,x,x')=0
$$

$\partial F/\partial x'$ 가 가역이면 음함수 정리(implicit function theorem)로 $x'$ 를 풀어 상미분방정식이 되므로, 특이행렬이라는 조건이 대수방정식이 섞였다는 뜻이다. 직관 절의 계는 $F=(x\_1'-x\_2,\thinspace x\_1-\sin t)$ 이고, $\partial F/\partial x'$ 의 둘째 행이 $0$ 이다.

## 반양함수 꼴

미지수를 도함수가 나타나는 **미분 변수(differential variable)** $x$ 와 나타나지 않는 **대수 변수(algebraic variable)** $y$ 로 나누어 쓴 다음 꼴을 **반양함수 꼴(semi-explicit form)** 이라 한다.

$$
x'=f(t,x,y),\qquad 0=g(t,x,y)
$$

직관 절에서 $x\_1$ 이 미분 변수다. 첫째 식의 우변에 $x\_2$ 가 있어 형식상 $x\_2$ 는 대수 변수다.

## 지표

$F=0$ 과 그 $t$ 에 대한 도함수 $\frac{d}{dt}F=0,\dots,\frac{d^\nu}{dt^\nu}F=0$ 을 모아 $x'$ 가 $t$ 와 $x$ 의 연속함수로 정해지는 가장 작은 $\nu$ 를 **미분 지표(differentiation index)** 라 한다.[^1] 상미분방정식의 지표는 $0$ 이고, 직관 절의 계는 미분 두 번에 $x\_2'$ 가 정해지므로 지표 $2$ 다.

## 무모순 처음 값

해가 지나는 $(t\_0,x\_0)$ 를 **무모순 처음 값(consistent initial value)** 이라 한다. $F=0$ 만이 아니라 미분해서 나온 대수식도 모두 만족해야 한다. 직관 절에서는 $x\_1(0)=0$ 과 미분으로 나온 $x\_2(0)=\cos 0=1$ 이 둘 다 필요하다.

# 성질

## 지표 1 판정

반양함수 꼴에서 $\partial g/\partial y$ 가 해의 근방에서 가역이면 지표는 $1$ 이다. 음함수 정리로 $y=\varphi(t,x)$ 를 풀어 $x'=f(t,x,\varphi(t,x))$ 라는 상미분방정식이 되고, $g=0$ 을 한 번 미분하면 다음이 나와 $y'$ 도 정해진다.

$$
y'=-\Bigl(\frac{\partial g}{\partial y}\Bigr)^{-1}\Bigl(\frac{\partial g}{\partial t}+\frac{\partial g}{\partial x}f\Bigr)
$$

직관 절의 $g=x\_1-\sin t$ 는 $x\_2$ 를 포함하지 않아 $\partial g/\partial y=0$ 이고, 그래서 지표가 $1$ 보다 크다.

## 상수계수 선형 계

$E,A$ 가 $n\times n$ 행렬이고 $E$ 가 특이할 때 $Ex'+Ax=q(t)$ 를 본다. $\det(\lambda E+A)$ 가 $\lambda$ 의 다항식으로서 $0$ 이 아니면 행렬 묶음 $(E,A)$ 를 **정칙(regular)** 이라 한다. 정칙이면 가역행렬 $P,Q$ 가 존재해 다음이 성립한다. 이것이 Weierstrass–Kronecker 표준형(Weierstrass–Kronecker canonical form)이다.[^1]

$$
PEQ=\begin{pmatrix}I&0\cr 0&N\end{pmatrix},\qquad PAQ=\begin{pmatrix}C&0\cr 0&I\end{pmatrix}
$$

$N$ 은 거듭제곱해서 $0$ 이 되는 행렬이다. $Q^{-1}x=(u,v)$, $Pq=(r,s)$ 로 쓰면 $u'+Cu=r$ 은 상미분방정식이고, $Nv'+v=s$ 에서 $v=s-Nv'$ 를 되풀이해 넣으면 다음이 나온다.

$$
v=\sum\_{i=0}^{\nu-1}(-1)^iN^is^{(i)}
$$

여기서 $\nu$ 는 $N^\nu=0$ 인 가장 작은 정수이고 계의 지표와 같다. 지표가 $\nu$ 이면 해가 입력의 $\nu-1$ 계 도함수까지 쓴다. 입력에 진폭 $\varepsilon$, 진동수 $\omega$ 인 잡음이 섞이면 해에는 $\varepsilon\omega^{\nu-1}$ 크기의 오차가 생긴다.

## 진자와 지표 3

개요의 진자를 질량 $1$, 중력가속도 $g$ 로 쓰면 막대의 장력에 비례하는 미지수 $\lambda$ 를 써서 다음 계가 된다. $\lambda$ 는 [Lagrange 승수법](lagrange-multipliers.md)의 승수와 같은 자리에 있다.

$$
\begin{aligned}
x'&=u, & y'&=v,\cr
u'&=-\lambda x, & v'&=-\lambda y-g,\cr
0&=x^2+y^2-1 &&
\end{aligned}
$$

제약식을 한 번 미분하면 $xu+yv=0$ 이 나온다. 두 번 미분하고 운동방정식과 $x^2+y^2=1$ 을 넣으면 $\lambda=u^2+v^2-gy$ 가 나온다. 세 번째 미분이 $\lambda'$ 를 정하므로 지표는 $3$ 이다.

## 지표 낮추기와 이탈

진자의 제약식을 둘째 미분으로 바꾸면 지표 $1$ 인 계가 되어 상미분방정식 해법으로 풀린다. 그러나 원래 제약 $c=x^2+y^2-1$ 은 $c''=0$ 으로만 남아, 수치 오차가 $c$ 와 $c'$ 에 들어가면 $c$ 가 시간에 비례해 자란다. 이것을 **이탈(drift)** 이라 한다. Baumgarte 안정화(Baumgarte stabilization)는 $c''=0$ 대신 $\alpha,\beta\gt 0$ 으로 다음 식을 써서 $c$ 를 지수적으로 $0$ 으로 돌아오게 한다.

$$
c''+2\alpha c'+\beta^2c=0
$$

## 후진 차분 공식의 수렴

$k\le 6$ 단계 후진 차분 공식을 걸음 크기를 고정해 반양함수 꼴의 지표 $1$ 계에 쓰면 상미분방정식에서와 같이 차수 $k$ 로 수렴한다. 대수 변수가 제약식에 없고 $\frac{\partial g}{\partial x}\frac{\partial f}{\partial y}$ 가 가역인 지표 $2$ 계(Hessenberg 꼴)에서도 차수 $k$ 로 수렴한다.[^1] 직관 절에서 잘못 준 처음 값이 한 걸음 뒤에 고쳐진 것처럼, 처음 몇 걸음에서는 오차가 클 수 있다.

# 활용

- 회로 모의실험. 마디 해석으로 회로 방정식을 세우면 축전기의 전압이 미분 변수, 마디의 전류가 대수 변수인 미분대수방정식이 된다. SPICE(Simulation Program with Integrated Circuit Emphasis)는 이 계를 사다리꼴 규칙과 후진 차분 공식으로 푼다.
- 다물체 역학. 관절로 이어진 강체들의 운동은 진자와 같은 꼴의 지표 $3$ 계이고, 지표 낮추기와 Baumgarte 안정화를 함께 쓴다.
- 비압축 유동. [Navier–Stokes 방정식](navier-stokes-equations.md)을 공간에 대해 이산화하면 압력이 대수 변수이고 발산 $0$ 조건이 제약식인 지표 $2$ 계가 된다.
- 화학 공정. 반응 속도식은 미분방정식이고 평형 조건과 물질 수지는 대수방정식이다. Petzold 의 DASSL(differential algebraic system solver)은 후진 차분 공식으로 이 계를 푼다.[^2]

[^1]: K. E. Brenan, S. L. Campbell, L. R. Petzold, *Numerical Solution of Initial-Value Problems in Differential-Algebraic Equations*, SIAM Classics in Applied Mathematics 14 (1996). 미분 지표의 정의는 2.2 절, 상수계수 선형 계는 2.3 절, 후진 차분 공식의 수렴은 3 장에 있다.

[^2]: L. R. Petzold, "A description of DASSL: a differential/algebraic system solver", in *Scientific Computing*, IMACS Transactions on Scientific Computation 1 (1983), 65–68.

# 연관 문서

## 선수지식

- [후진 차분 공식](backward-differentiation-formulas.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #algorithms
