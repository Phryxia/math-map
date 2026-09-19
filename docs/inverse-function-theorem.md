# 역함수 정리

# 개요

역함수 정리는 한 점에서 미분이 가역이면 그 근방에서 함수 자체가 가역이라는 정리다. 국소 선형근사의 가역성이 함수의 국소 가역성으로 올라간다.

같은 정리를 다른 형태로 적은 것이 음함수 정리이고, 둘은 서로에게서 몇 줄로 유도된다. [다양체](manifolds.md)의 좌표계, 곡면의 매개화, 제약 아래의 최적화가 모두 이 정리로 국소 좌표를 얻는다.

# 직관

미분은 함수를 한 점에서 선형사상으로 바꾼 것이다. 선형사상이 가역이면 그 선형사상은 전단사이고, 미분 가능한 함수는 그 근방에서 자신의 선형근사와 1 차 오차만큼만 다르다. 근방을 충분히 좁히면 오차가 가역성을 깨지 못한다.

# 정의

## 전미분

열린집합 $U\subseteq\mathbb R^n$ 위의 함수 $f\colon U\to\mathbb R^m$ 이 점 $a$ 에서 **미분 가능**하다는 것은 다음을 만족하는 [선형사상](linear-maps.md) $Df(a)\colon\mathbb R^n\to\mathbb R^m$ 이 있다는 뜻이다.

$$
\lim_{h\to0}\frac{\Vert f(a+h)-f(a)-Df(a)h\Vert}{\Vert h\Vert}=0
$$

이 선형사상을 **전미분**이라 하고, 표준기저에서의 행렬이 편미분으로 이루어진 **Jacobi 행렬**이다.

$$
Df(a)=\Bigl(\frac{\partial f_i}{\partial x_j}(a)\Bigr)\_{1\le i\le m,\ 1\le j\le n}
$$

편미분이 존재하는 것만으로는 미분 가능성이 나오지 않는다. 편미분이 존재하고 연속이면($C^1$ 이면) 미분 가능하다.

## 연쇄법칙

$f$ 가 $a$ 에서, $g$ 가 $f(a)$ 에서 미분 가능하면 합성도 미분 가능하고 전미분이 합성으로 간다.

$$
D(g\circ f)(a)=Dg(f(a))\thinspace Df(a)
$$

행렬로는 Jacobi 행렬의 곱이다. 1 차원의 $(g\circ f)'=g'(f)f'$ 가 이 식의 특수한 경우다.

# 성질

## 역함수 정리

$f\colon U\to\mathbb R^n$ 이 $C^1$ 이고 $Df(a)$ 가 가역이면, $a$ 의 열린근방 $V$ 와 $f(a)$ 의 열린근방 $W$ 가 있어 $f\colon V\to W$ 가 전단사이고 역함수도 $C^1$ 이다. 역함수의 미분은 다음이다.

$$
D(f^{-1})(f(a))=\bigl(Df(a)\bigr)^{-1}
$$

증명은 [축약사상 고정점 정리](banach-fixed-point.md)로 한다. $y$ 를 고정하고 $\varphi_y(x)=x+Df(a)^{-1}(y-f(x))$ 로 두면 $\varphi_y$ 의 고정점이 $f(x)=y$ 의 해다. $Df$ 의 연속성이 작은 근방에서 $\Vert D\varphi_y\Vert\le1/2$ 를 주므로 $\varphi_y$ 가 축약사상이고, 완비공간에서 고정점이 유일하게 존재한다. $y$ 에 대한 매끄러움은 이 고정점을 $y$ 의 함수로 보고 다시 평가해 얻는다.

가역성은 국소적이다. $f(x,y)=(e^x\cos y,\ e^x\sin y)$ 는 모든 점에서 Jacobi 행렬이 가역이지만 전역 단사가 아니다.

## 음함수 정리

$F\colon\mathbb R^n\times\mathbb R^m\to\mathbb R^m$ 이 $C^1$ 이고 $F(a,b)=0$ 이며 $y$ 변수에 대한 부분 Jacobi 행렬 $D_yF(a,b)$ 가 가역이면, $a$ 의 근방에서 $F(x,g(x))=0$ 을 만족하는 $C^1$ 함수 $g$ 가 유일하게 존재하고 그 미분은 다음이다.

$$
Dg(a)=-\bigl(D_yF(a,b)\bigr)^{-1}D_xF(a,b)
$$

$\Phi(x,y)=(x,F(x,y))$ 에 역함수 정리를 적용하면 나온다. $D\Phi(a,b)$ 가 블록 삼각행렬이고 그 가역성이 $D_yF(a,b)$ 의 가역성과 같기 때문이다. 거꾸로 $F(x,y)=f(y)-x$ 에 음함수 정리를 쓰면 역함수 정리가 나온다.

원 $x^2+y^2=1$ 이 표준 예다. $\partial F/\partial y=2y$ 가 $y\ne0$ 에서 가역이므로 그 점들의 근방에서 $y$ 가 $x$ 의 함수로 풀린다. $(\pm1,0)$ 에서는 풀리지 않는다.

## 계수 정리

$Df(a)$ 의 계수가 $a$ 의 근방에서 일정하면, 정의역과 공역의 좌표를 적당히 바꾸어 $f$ 를 사영 $(x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0)$ 으로 만들 수 있다. 계수가 최대인 두 경우가 잠입(immersion)과 잠몰(submersion)이고, 각각 매개화와 제약 조건의 국소 표준형이 된다.

# 활용

## 다양체의 국소 좌표

[다양체](manifolds.md)에서 좌표 변환이 미분동형임을 확인할 때, 그리고 정규값의 역상이 부분다양체가 됨을 보일 때 음함수 정리를 쓴다. $F\colon\mathbb R^n\to\mathbb R^m$ 의 정규값 $c$ 에 대해 $F^{-1}(c)$ 가 $n-m$ 차원 다양체라는 진술이 그것이다.

## 제약 최적화

[Lagrange 쌍대성과 KKT 조건](lagrange-duality.md)(Karush–Kuhn–Tucker)에서 제약 $g(x)=0$ 을 국소적으로 매개화해 자유 변수로 바꾸는 단계가 음함수 정리다. 제약의 Jacobi 행렬이 최대 계수라는 정칙성 조건이 정리의 가설이다.

## 수치해와 계속법

[Newton 법](newton-method.md)의 국소 수렴은 역함수 정리와 같은 축약 논증 위에 있다. 매개변수가 있는 방정식 $F(x,\lambda)=0$ 의 해를 $\lambda$ 를 따라 추적하는 계속법(continuation)도 음함수 정리가 해곡선의 존재를 보장하는 구간에서만 작동한다.

# 연관 문서

## 선수지식

- [미분](derivative.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry #optimization
