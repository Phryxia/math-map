# 역함수 정리

# 개요

**역함수 정리(inverse function theorem)** 는 한 점에서 미분이 가역이면 그 점 근처에서 함수 자체가 가역이라는 정리다. 평면의 직교좌표 $(x,y)$ 를 극좌표 $(r,\theta)$ 로 바꾸는 식은 원점이 아닌 점 근처에서 역으로 풀 수 있지만, 일반적인 식에서는 역으로 푸는 공식을 찾기 어렵다. 한 점에서 미분은 일차 근사인 [행렬](matrices.md)이고, 그 행렬식이 $0$ 이 아니면 그 근처에서 역함수가 있다. 역함수 정리는 이렇게 행렬 하나의 가역성으로 함수의 국소 가역성을 판정한다.

# 직관

$y=x^2$ 을 $x$ 에 대해 푼다. $x=1$ 근처에서는 $y$ 가 $1$ 근처일 때 $x=\sqrt y$ 하나로 풀린다. $x=0$ 근처에서는 $y\gt 0$ 이면 $\sqrt y$ 와 $-\sqrt y$ 가 둘 다 $0$ 근처에 있고, $y\lt 0$ 이면 해가 없다. 그래서 $0$ 근처에서는 $x$ 를 $y$ 의 함수로 정할 수 없다.

두 점의 차이는 기울기에서 나온다. $x=1$ 에서 기울기는 $2$ 이고, 그 근처에서 그래프는 직선 $y=1+2(x-1)$ 에 가깝다. 이 직선은 $x=1+(y-1)/2$ 로 풀린다. $x=0$ 에서는 기울기가 $0$ 이어서 근사 직선 $y=0$ 이 수평이고 $x$ 에 대해 풀리지 않는다.

변수가 둘이면 기울기 자리에 편미분 넷을 늘어놓은 $2\times 2$ 행렬이 온다. 극좌표 $(r,\theta)$ 를 $(x,y)=(r\cos\theta,r\sin\theta)$ 로 보내는 식에서 이 행렬의 [행렬식](determinants.md)은 $r$ 이다. $r\gt 0$ 인 점에서는 행렬식이 $0$ 이 아니고, 그 근처에서 $(x,y)$ 로부터 $(r,\theta)$ 가 하나로 정해진다. $r=0$ 에서는 행렬식이 $0$ 이고, 원점 $(0,0)$ 에 대응하는 $\theta$ 가 하나로 정해지지 않는다.

# 정의

## 전미분

열린집합 $U\subseteq\mathbb R^n$ 위의 함수 $f\colon U\to\mathbb R^m$ 이 점 $a$ 에서 **미분 가능(differentiable)** 하다는 것은 다음을 만족하는 [선형사상](linear-maps.md) $Df(a)\colon\mathbb R^n\to\mathbb R^m$ 이 있다는 뜻이다.

$$
\lim_{h\to0}\frac{\Vert f(a+h)-f(a)-Df(a)h\Vert}{\Vert h\Vert}=0
$$

이 선형사상을 **전미분(total derivative)** 이라 하고, 표준기저에서의 행렬이 편미분으로 이루어진 **Jacobi 행렬(Jacobian matrix)** 이다.

$$
Df(a)=\Bigl(\frac{\partial f_i}{\partial x_j}(a)\Bigr)\_{1\le i\le m,\ 1\le j\le n}
$$

직관 절의 극좌표 $P(r,\theta)=(r\cos\theta,r\sin\theta)$ 의 Jacobi 행렬은 다음이고, 행렬식은 $r\cos^2\theta+r\sin^2\theta=r$ 이다.

$$
DP(r,\theta)=\begin{pmatrix}\cos\theta & -r\sin\theta\cr \sin\theta & r\cos\theta\end{pmatrix}
$$

편미분이 모두 존재하고 연속인 함수를 $C^1$ 함수라 한다. $P$ 는 $C^1$ 이다.

# 성질

## 미분 가능성과 연쇄법칙

편미분이 존재하는 것만으로는 미분 가능성이 나오지 않는다. $C^1$ 함수는 미분 가능하다.

연쇄법칙(chain rule). $f$ 가 $a$ 에서, $g$ 가 $f(a)$ 에서 미분 가능하면 합성도 미분 가능하고 전미분이 합성으로 간다.

$$
D(g\circ f)(a)=Dg(f(a))\thinspace Df(a)
$$

행렬로는 Jacobi 행렬의 곱이다. 1 차원의 $(g\circ f)'=g'(f)f'$ 가 이 식의 특수한 경우다.

## 역함수 정리

$f\colon U\to\mathbb R^n$ 이 $C^1$ 이고 $Df(a)$ 가 가역이면, $a$ 의 열린근방 $V$ 와 $f(a)$ 의 열린근방 $W$ 가 있어 $f\colon V\to W$ 가 전단사이고 역함수도 $C^1$ 이다. 역함수의 미분은 다음이다.

$$
D(f^{-1})(f(a))=\bigl(Df(a)\bigr)^{-1}
$$

증명은 [축약사상 고정점 정리](banach-fixed-point.md)로 한다. $y$ 를 고정하고 $\varphi_y(x)=x+Df(a)^{-1}(y-f(x))$ 로 두면 $\varphi_y$ 의 고정점이 $f(x)=y$ 의 해다. $Df$ 의 연속성이 작은 근방에서 $\Vert D\varphi_y\Vert\le1/2$ 를 주므로 $\varphi_y$ 가 축약사상(contraction mapping)이고, 완비공간에서 고정점이 유일하게 존재한다. $y$ 에 대한 매끄러움은 이 고정점을 $y$ 의 함수로 보고 다시 평가해 얻는다.

직관 절의 극좌표에서 $r\gt 0$ 인 점마다 $DP$ 가 가역이므로 $P$ 는 그 근처에서 역함수를 갖는다. 가역성은 국소적이다. $f(x,y)=(e^x\cos y,\ e^x\sin y)$ 는 모든 점에서 Jacobi 행렬이 가역이지만 전역 단사가 아니다.

## 음함수 정리

음함수 정리(implicit function theorem). $F\colon\mathbb R^n\times\mathbb R^m\to\mathbb R^m$ 이 $C^1$ 이고 $F(a,b)=0$ 이며 $y$ 변수에 대한 부분 Jacobi 행렬 $D_yF(a,b)$ 가 가역이면, $a$ 의 근방에서 $F(x,g(x))=0$ 을 만족하는 $C^1$ 함수 $g$ 가 유일하게 존재하고 그 미분은 다음이다.

$$
Dg(a)=-\bigl(D_yF(a,b)\bigr)^{-1}D_xF(a,b)
$$

$D\Phi(a,b)$ 는 블록 삼각행렬이고 그 가역성이 $D_yF(a,b)$ 의 가역성과 같으므로, $\Phi(x,y)=(x,F(x,y))$ 에 역함수 정리를 적용하면 이 정리가 나온다. 거꾸로 $F(x,y)=f(y)-x$ 에 음함수 정리를 쓰면 역함수 정리가 나온다.

원 $F(x,y)=x^2+y^2-1=0$ 이 표준 예다. $\partial F/\partial y=2y$ 가 $y\ne0$ 에서 가역이므로 그 점들의 근방에서 $y$ 가 $x$ 의 함수로 풀린다. $(\pm1,0)$ 에서는 풀리지 않는다.

## 계수 정리

계수 정리(constant rank theorem). $Df(a)$ 의 계수가 $a$ 의 근방에서 일정하면, 정의역과 공역의 좌표를 적당히 바꾸어 $f$ 를 사영 $(x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0)$ 으로 만들 수 있다. 계수가 최대인 두 경우가 잠입(immersion)과 잠몰(submersion)이고, 각각 매개화와 제약 조건의 국소 표준형이 된다.

# 활용

## 다양체의 국소 좌표

[다양체](manifolds.md)에서 좌표 변환이 미분동형(diffeomorphism)임을 확인할 때, 그리고 정규값(regular value)의 역상이 부분다양체가 됨을 보일 때 음함수 정리를 쓴다. $F\colon\mathbb R^n\to\mathbb R^m$ 의 정규값 $c$ 에 대해 $F^{-1}(c)$ 가 $n-m$ 차원 다양체라는 진술이 그것이다.

## 제약 최적화

[Lagrange 승수법](lagrange-multipliers.md)에서 제약 $g(x)=0$ 을 국소적으로 매개화해 자유 변수로 바꾸는 단계가 음함수 정리다. 제약의 Jacobi 행렬이 최대 계수라는 정칙성 조건이 정리의 가설이다.

## 수치해와 계속법

[Newton 법](newton-method.md)의 국소 수렴은 역함수 정리와 같은 축약 논증으로 증명된다. 매개변수가 있는 방정식 $F(x,\lambda)=0$ 의 해를 $\lambda$ 를 따라 추적하는 계속법(continuation)은 음함수 정리가 해곡선의 존재를 보장하는 구간에서만 쓸 수 있다.

# 연관 문서

## 선수지식

- [미분](derivative.md)

## 더 알아보기

- [Brouwer 차수](brouwer-degree.md)
- [Lagrange 승수법](lagrange-multipliers.md)
- [분기 이론](bifurcation-theory.md)

#analysis #differential_geometry #optimization
