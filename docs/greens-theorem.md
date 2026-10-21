# Green 정리

# 개요

**Green 정리(Green's theorem)** 는 평면 영역 위의 이중적분을 그 영역의 경계를 한 바퀴 도는 선적분으로 바꾸는 정리다. 함수 $P$, $Q$ 에 대해

$$
\oint_{\partial D}P\thinspace dx+Q\thinspace dy=\iint_D\Bigl(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\Bigr)dA
$$

이다. 구간 위의 적분을 양 끝점의 값으로 바꾸는 [미적분학의 기본 정리](fundamental-calculus.md)를 평면 영역으로 옮긴 것이고, 영역의 넓이를 경계의 좌표만으로 계산하는 공식이 여기서 나온다.

# 직관

꼭짓점이 $(0,0)$, $(1,0)$, $(0,1)$ 인 삼각형의 넓이를 꼭짓점 좌표만으로 계산하는 방법을 찾는다. 넓이는 영역 위에서 $1$ 을 적분한 값이므로, 영역 안쪽을 보지 않고 경계만 보려면 적분을 경계로 옮기는 방법이 있어야 한다.

한 변수에서는 미적분학의 기본 정리가 그 일을 한다. $\int_a^b F'(x)\thinspace dx=F(b)-F(a)$ 는 구간 위의 적분을 끝점 두 개의 값으로 바꾼다. 직사각형 $\lbrack a,b\rbrack\times\lbrack c,d\rbrack$ 에서 $\iint\partial Q/\partial x\thinspace dA$ 를 계산하면, 높이 $y$ 마다 $x$ 방향으로 이 정리를 써서

$$
\iint\frac{\partial Q}{\partial x}\thinspace dA=\int_c^d Q(b,y)\thinspace dy-\int_c^d Q(a,y)\thinspace dy
$$

를 얻는다. 첫 항은 오른쪽 변을 따라 위로 올라가며 $Q$ 를 적분한 값이고, 둘째 항은 왼쪽 변을 따라 아래로 내려가며 적분한 값이다. 위아래 변에서는 $y$ 가 변하지 않으므로 $Q\thinspace dy$ 의 적분이 $0$ 이다. 네 변을 시계 반대 방향으로 돌며 $Q\thinspace dy$ 를 적분한 값이 이중적분과 같다.

$Q=x/2$, $P=-y/2$ 로 잡으면 $\partial Q/\partial x-\partial P/\partial y=1$ 이므로 넓이는 $\frac12\oint(x\thinspace dy-y\thinspace dx)$ 다. 삼각형에서 $(0,0)$ 에서 $(1,0)$ 으로 가는 변과 $(0,1)$ 에서 $(0,0)$ 으로 가는 변에서는 $x\thinspace dy-y\thinspace dx=0$ 이다. $(1,0)$ 에서 $(0,1)$ 로 가는 변을 $x=1-t$, $y=t$ 로 놓으면 $x\thinspace dy-y\thinspace dx=dt$ 이므로 적분은 $1$ 이고, 넓이는 $1/2$ 다.

# 정의

곡선 $\gamma(t)=(x(t),y(t))$, $t\in\lbrack a,b\rbrack$ 를 따라가는 **선적분(line integral)** 은

$$
\int_\gamma P\thinspace dx+Q\thinspace dy=\int_a^b\Bigl(P\bigl(\gamma(t)\bigr)x'(t)+Q\bigl(\gamma(t)\bigr)y'(t)\Bigr)dt
$$

이다. 곡선의 방향을 뒤집으면 값의 부호가 바뀐다.

**Green 정리.** $D$ 가 평면의 유계 영역이고 그 경계 $C$ 가 조각마다 매끄러운 [Jordan 곡선](jordan-curve-theorem.md)이며, $C$ 에는 $D$ 를 왼쪽에 두고 도는 방향을 준다. $P$, $Q$ 가 $D\cup C$ 를 포함하는 열린집합에서 연속미분가능하면

$$
\oint_C P\thinspace dx+Q\thinspace dy=\iint_D\Bigl(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\Bigr)dA
$$

이다.[^1] 영역에 구멍이 있으면 바깥 경계는 시계 반대 방향, 구멍의 경계는 시계 방향으로 돌고 모든 경계의 선적분을 더한다.

# 성질

## 증명의 요지

$D$ 가 $\lbrace a\le x\le b,\ g_1(x)\le y\le g_2(x)\rbrace$ 꼴이면 $y$ 방향으로 미적분학의 기본 정리를 써서 $-\iint_D\partial P/\partial y\thinspace dA=\oint_C P\thinspace dx$ 를 얻는다. 아래 곡선은 오른쪽으로, 위 곡선은 왼쪽으로 지나므로 부호가 맞는다. $D$ 가 $x$ 와 $y$ 의 역할을 바꾼 꼴이기도 하면 같은 방법으로 $\iint_D\partial Q/\partial x\thinspace dA=\oint_C Q\thinspace dy$ 를 얻는다. 일반 영역은 이런 조각으로 자른다. 자른 선은 이웃한 두 조각에서 반대 방향으로 지나므로 선적분이 상쇄되고 바깥 경계만 남는다.

## 넓이 공식

$D$ 의 넓이는

$$
\mathrm{Area}(D)=\frac12\oint_C(x\thinspace dy-y\thinspace dx)=\oint_C x\thinspace dy=-\oint_C y\thinspace dx
$$

이다. $C$ 가 꼭짓점 $(x_1,y_1),\dots,(x_n,y_n)$ 을 시계 반대 방향으로 잇는 다각형이고 $(x_{n+1},y_{n+1})=(x_1,y_1)$ 이면, 변마다 적분해 더한 값이

$$
\mathrm{Area}(D)=\frac12\sum_{i=1}^{n}(x_iy_{i+1}-x_{i+1}y_i)
$$

이고 이것을 **신발끈 공식(shoelace formula)** 이라 한다.

## 발산 정리의 꼴

벡터장 $F=(F_1,F_2)$ 에 대해 $P=-F_2$, $Q=F_1$ 로 두면, 경계의 바깥쪽 단위법선 $n$ 과 호의 길이 $s$ 에 대해

$$
\oint_C F\cdot n\thinspace ds=\iint_D\Bigl(\frac{\partial F_1}{\partial x}+\frac{\partial F_2}{\partial y}\Bigr)dA
$$

이다. 우변의 피적분함수가 $F$ 의 **발산(divergence)** 이다. 영역 밖으로 흘러 나가는 양이 영역 안에서 생긴 양과 같다는 뜻이다.

## 경로 독립성과 구멍

영역 전체에서 $\partial Q/\partial x=\partial P/\partial y$ 이고 영역에 구멍이 없으면, Green 정리로 모든 닫힌 곡선 위의 선적분이 $0$ 이고 선적분은 양 끝점에만 의존한다.

구멍이 있으면 이 결론이 성립하지 않는다. 원점을 뺀 평면에서

$$
P=\frac{-y}{x^2+y^2},\qquad Q=\frac{x}{x^2+y^2}
$$

는 $\partial Q/\partial x=\partial P/\partial y$ 를 만족하지만, 단위원을 한 바퀴 도는 선적분은 $x=\cos t$, $y=\sin t$ 를 넣으면 $\int_0^{2\pi}dt=2\pi$ 다. 단위원이 둘러싼 원판은 원점을 포함하므로 정리의 가정이 성립하지 않는다.

## 미분형식으로 쓴 꼴

$\omega=P\thinspace dx+Q\thinspace dy$ 로 두면 $d\omega=(\partial Q/\partial x-\partial P/\partial y)\thinspace dx\wedge dy$ 이고, Green 정리는 $\int_{\partial D}\omega=\int_D d\omega$ 다. 이것은 [미분형식](differential-forms.md)에 대한 Stokes 정리(Stokes' theorem)의 2 차원 경우다.

# 활용

- [정칙함수](holomorphic-functions.md): $f=u+iv$ 가 연속미분가능한 정칙함수이면 $\oint_C f\thinspace dz=\oint_C(u\thinspace dx-v\thinspace dy)+i\oint_C(v\thinspace dx+u\thinspace dy)$ 이고, Green 정리와 Cauchy–Riemann 방정식으로 두 이중적분이 $0$ 이 되어 Cauchy 적분 정리(Cauchy's integral theorem)가 나온다.
- [Poincaré–Bendixson 정리](poincare-bendixson.md): Bendixson 판정법은 주기 궤도가 둘러싼 영역에서 발산 정리의 꼴을 써서, 발산의 부호가 일정하면 주기 궤도가 없음을 보인다.
- [등주부등식](isoperimetric-inequality.md): 닫힌 곡선이 둘러싼 넓이를 넓이 공식 $\frac12\oint(x\thinspace dy-y\thinspace dx)$ 로 쓰고, 곡선의 Fourier 계수로 길이와 비교한다.
- 다각형의 넓이: 신발끈 공식은 꼭짓점 좌표만으로 다각형의 넓이를 $n$ 번의 곱셈과 덧셈으로 계산한다.

[^1]: J. Stewart, *Calculus: Early Transcendentals*, 8th ed., Cengage, 2015, 16 장 4 절. 조각마다 매끄러운 경계와 구멍 있는 영역의 경우는 W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., McGraw-Hill, 1976, 10 장(Stokes 정리의 특수한 경우).

# 연관 문서

## 선수지식

- [미적분학의 기본 정리](fundamental-calculus.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry #complex_analysis
