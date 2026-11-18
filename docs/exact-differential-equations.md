# 완전미분방정식

# 개요

**완전미분방정식(exact differential equation)** 은 $M(x,y)+N(x,y)\thinspace y'=0$ 꼴의 방정식에서 왼쪽이 어떤 함수 $F(x,y)$ 를 해 곡선을 따라 미분한 것과 같은 방정식이다. $2xy+(x^2+2y)y'=0$ 은 $x$ 의 식과 $y$ 의 식의 곱으로 쓸 수 없어 변수를 나누어 풀 수 없다. 왼쪽이 $x^2y+y^2$ 을 미분한 것임을 알면, 방정식은 $x^2y+y^2$ 이 해를 따라 변하지 않는다는 뜻이 되고 해는 곡선 $x^2y+y^2=C$ 다.

# 직관

$y$ 를 $x$ 의 함수로 보고 $F(x,y)=x^2y+y^2$ 에 $y(x)$ 를 넣어 [연쇄법칙](chain-rule.md)으로 미분하면 다음이 나온다.

$$
\frac{d}{dx}F\bigl(x,y(x)\bigr)=2xy+x^2y'+2yy'=2xy+(x^2+2y)y'
$$

이것이 방정식의 왼쪽이다. 그러므로 $y$ 가 해일 필요충분조건은 $F(x,y(x))$ 가 상수인 것이다. 해의 그래프는 $F$ 의 등위곡선 위에 있다.

점 $(1,1)$ 을 지나는 해는 $F(1,1)=2$ 이므로 $x^2y+y^2=2$ 위에 있다. $y$ 에 대한 이차방정식을 풀어 $y\gt 0$ 인 근을 고르면 다음 해가 나온다.

$$
y=\frac{-x^2+\sqrt{x^4+8}}{2}
$$

# 정의

열린집합 $U\subseteq\mathbb R^2$ 에서 연속미분가능한 $M$, $N$ 에 대해 방정식 $M+Ny'=0$, 곧 $M\thinspace dx+N\thinspace dy=0$ 이 **완전(exact)** 하다는 것은 다음을 만족하는 함수 $F$ 가 $U$ 에 있다는 뜻이다[^1].

$$
\frac{\partial F}{\partial x}=M,\qquad\frac{\partial F}{\partial y}=N
$$

곧 $(M,N)$ 이 [선적분](line-integral.md)의 보존장이고 $F$ 가 그 퍼텐셜이다. 직관 절의 예는 $M=2xy$, $N=x^2+2y$, $F=x^2y+y^2$ 이다.

방정식 $M\thinspace dx+N\thinspace dy=0$ 에 함수 $\mu\ne0$ 을 곱해 완전해지면 $\mu$ 를 **적분인자(integrating factor)** 라 한다.

# 성질

## 완전성의 판정

$M\thinspace dx+N\thinspace dy=0$ 이 완전하면 $M_y=F_{xy}=F_{yx}=N_x$ 다. 순서를 바꾸는 둘째 등호가 [Schwarz 정리](schwarz-theorem.md)다. 직관 절의 예는 $M_y=2x=N_x$ 다.

$U$ 가 직사각형이나 원판처럼 볼록이면 역도 성립한다. $M_y=N_x$ 이면 기준점에서 $(x,y)$ 까지의 선분을 따른 선적분으로 $F$ 를 정의할 수 있고, 그 편미분이 $M$ 과 $N$ 이다. 영역에 구멍이 있으면 역이 성립하지 않는다. 원점을 뺀 평면에서 $M=-y/(x^2+y^2)$, $N=x/(x^2+y^2)$ 는 $M_y=N_x$ 를 만족하지만 완전하지 않다.

## 퍼텐셜 구하기

$F_x=M$ 을 $x$ 로 적분하면 $F=\int M\thinspace dx+g(y)$ 이고, 적분상수 자리에 $y$ 의 함수 $g$ 가 남는다. 이것을 $y$ 로 미분해 $N$ 과 같게 놓으면 $g'$ 이 정해진다.

직관 절의 예에서 $\int 2xy\thinspace dx=x^2y$ 이므로 $F=x^2y+g(y)$ 다. $F_y=x^2+g'(y)=x^2+2y$ 에서 $g'=2y$ 이고 $g=y^2$ 이다.

## 적분인자

$y\thinspace dx-x\thinspace dy=0$ 은 $M_y=1$, $N_x=-1$ 이어서 완전하지 않다. $\mu=1/x^2$ 을 곱하면 다음이 되고, 왼쪽은 $-y/x$ 의 전미분이다.

$$
\frac{y}{x^2}\thinspace dx-\frac1x\thinspace dy=0
$$

그러므로 해는 $y/x=C$, 곧 원점을 지나는 직선이다. $(M_y-N_x)/N$ 이 $x$ 만의 함수 $p(x)$ 이면 $\mu=e^{\int p\thinspace dx}$ 가 적분인자다. 곱한 뒤의 판정식 $(\mu M)\_y=(\mu N)\_x$ 는 $\mu'=p\mu$ 와 같고, 이 $\mu$ 는 그 식을 만족한다.

## 일계 선형 방정식

$y'+p(x)y=q(x)$ 는 $M=p(x)y-q(x)$, $N=1$ 인 방정식이고 $(M_y-N_x)/N=p$ 다. 적분인자 $\mu=e^{\int p}$ 를 곱하면 왼쪽이 $(\mu y)'$ 이 되어 $\mu y=\int\mu q\thinspace dx+C$ 다.

$y'+y=x$ 이면 $\mu=e^x$ 이고 $(e^xy)'=xe^x$ 다. [부분적분](integration-by-parts.md)으로 $\int xe^x\thinspace dx=(x-1)e^x$ 이므로 해는 $y=x-1+Ce^{-x}$ 다.

# 활용

- [변수분리형 미분방정식](separable-differential-equations.md): $y'=g(x)h(y)$ 는 $g(x)\thinspace dx-dy/h(y)=0$ 으로 쓰면 완전하고, 퍼텐셜은 $G(x)-H(y)$ 다. 변수분리 풀이 공식이 완전 방정식 풀이의 특수한 경우다.
- [Hamilton 역학](hamiltonian-mechanics.md): 자유도가 하나인 계의 궤도는 에너지 $H(q,p)$ 의 등위곡선이고, 운동방정식에서 시간을 지운 $\partial_qH\thinspace dq+\partial_pH\thinspace dp=0$ 이 완전 방정식이다.
- 열역학: 내부 에너지와 엔트로피처럼 상태로만 정해지는 양의 변화는 완전 미분이고, 열량처럼 경로에 의존하는 양은 완전하지 않다. 열량에 온도의 역수를 곱하면 엔트로피의 미분이 되는 것이 적분인자의 예다.

[^1]: W. E. Boyce, R. C. DiPrima, *Elementary Differential Equations and Boundary Value Problems*, 10th ed., Wiley, 2012, 2.6 절.

# 연관 문서

## 선수지식

- [선적분](line-integral.md)
- [변수분리형 미분방정식](separable-differential-equations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
