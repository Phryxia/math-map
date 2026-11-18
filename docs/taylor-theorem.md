# Taylor 정리

# 개요

**Taylor 정리(Taylor's theorem)** 는 매끄러운 함수를 한 점 근처에서 다항식으로 바꿔 계산할 때 생기는 오차의 크기를 주는 정리다. 계산기 없이 $\sqrt{4.1}$ 을 구할 때 $\sqrt 4=2$ 에서 출발해 $2.025$ 라는 근삿값을 얻을 수 있지만, 이 값이 소수 몇째 자리까지 맞는지는 따로 따져야 한다. Taylor 정리는 오차를 근사 다항식의 차수보다 한 번 더 미분한 도함수로 적으므로, 그 도함수의 크기만 알면 몇 차까지 계산해야 원하는 자리까지 맞는지 정해진다.

# 직관

$f(x)=\sqrt x$ 의 $x=4.1$ 에서의 값을 구한다. $f(4)=2$ 이고, [미분](derivative.md)하면 $f'(x)=1/(2\sqrt x)$ 이므로 $f'(4)=1/4$ 이다. $x=4$ 에서의 접선 $2+(x-4)/4$ 에 $x=4.1$ 을 넣으면 $2.025$ 다.

곡선과 접선의 차를 $e(x)$ 라 하면 $e(4)=0$ 이고 $e'(4)=0$ 이다. 차가 벌어지는 것은 곡선의 기울기가 바뀌기 때문이고, 기울기가 바뀌는 빠르기는 $e''=f''$ 이다. $f''(x)=-1/(4x^{3/2})$ 는 $\lbrack 4,4.1\rbrack$ 에서 $-1/32$ 와 $0$ 사이에 있다.

[평균값 정리](mean-value-theorem.md)의 자동차로 옮기면, 출발 위치와 출발 속도가 $0$ 이고 가속도가 $-1/32$ 와 $0$ 사이인 차가 시간 $0.1$ 동안 간 거리가 $e(4.1)$ 이다. 가속도가 $-1/32$ 로 일정하면 거리는 $-\frac{1}{32}\cdot\frac{0.1^2}{2}=-0.00015625$ 이므로, $e(4.1)$ 은 $-0.00015625$ 와 $0$ 사이에 있다. 실제로 $\sqrt{4.1}=2.0248457\cdots$ 이고 $2.025$ 는 $0.000154$ 만큼 크다.

오차가 $f''$ 로 적히므로 $f''(4)$ 를 쓰는 항을 하나 더한다. $2.025-\frac{1}{32}\cdot\frac{0.1^2}{2}=2.02484375$ 이고, 이번 오차는 같은 방법으로 $f'''$ 으로 적힌다. $f'''(x)=3/(8x^{5/2})$ 는 $\lbrack 4,4.1\rbrack$ 에서 $3/256$ 이하이므로 오차는 $\frac{3}{256}\cdot\frac{0.1^3}{6}\approx 0.00000195$ 이하다. 실제 오차는 $0.00000192$ 다.

항을 하나 더할 때마다 오차가 다음 도함수로 적히는 이 관계를 식으로 쓴 것이 Taylor 정리다.

# 정의

## Taylor 다항식

$f$ 가 $a$ 를 포함하는 열린 구간에서 $n$ 번 미분 가능할 때, $f$ 의 $a$ 에서의 $n$ 차 **Taylor 다항식(Taylor polynomial)** 은 다음이다.

$$
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
$$

$P_n$ 은 $k=0,1,\dots,n$ 에서 $P_n^{(k)}(a)=f^{(k)}(a)$ 를 만족하는 차수 $n$ 이하의 다항식이고, 이런 다항식은 하나뿐이다. 직관 절의 $f(x)=\sqrt x$, $a=4$ 에서는 $P_1(x)=2+(x-4)/4$ 이고 $P_2(x)=2+(x-4)/4-(x-4)^2/64$ 이다.

$R_n(x)=f(x)-P_n(x)$ 를 **나머지항(remainder)** 이라 한다. 직관 절의 $e(x)$ 가 $R_1(x)$ 다.

## Taylor 정리

Taylor 정리는 다음이다. $f^{(n)}$ 이 $a$ 와 $x$ 를 잇는 닫힌 구간에서 연속이고 그 내부에서 $f^{(n+1)}$ 이 존재하면, $a$ 와 $x$ 사이의 어떤 $\xi$ 가 존재해 다음을 만족한다.

$$
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}
$$

이 꼴을 Lagrange 형 나머지항(Lagrange form of the remainder)이라 한다[^1]. $n=0$ 이면 $f(x)-f(a)=f'(\xi)(x-a)$ 이므로 평균값 정리다.

직관 절의 $n=1$ 에서는 $R_1(4.1)=f''(\xi)\cdot 0.1^2/2$ 이고 $-1/32\le f''(\xi)\lt 0$ 이므로 $-0.00015625\le R_1(4.1)\lt 0$ 이다.

# 성질

## Lagrange 형의 증명

$x\ne a$ 를 고정하고, 다음 함수가 $g(x)=0$ 이 되도록 상수 $M$ 을 정한다.

$$
g(t)=f(t)-P_n(t)-M(t-a)^{n+1}
$$

$P_n$ 의 정의로 $g(a)=g'(a)=\cdots=g^{(n)}(a)=0$ 이다. $g(a)=g(x)=0$ 이므로 평균값 정리 문서의 Rolle 정리로 $a$ 와 $x$ 사이에 $g'(x_1)=0$ 인 $x_1$ 이 있다. $g'(a)=g'(x_1)=0$ 에 다시 Rolle 정리를 쓰면 $g''(x_2)=0$ 인 $x_2$ 가 있다.

이것을 $n+1$ 번 되풀이하면 $g^{(n+1)}(\xi)=0$ 인 $\xi$ 가 $a$ 와 $x$ 사이에 있다. $P_n$ 은 차수가 $n$ 이하이므로 다음이 나온다.

$$
g^{(n+1)}(t)=f^{(n+1)}(t)-(n+1)!\thinspace M
$$

따라서 $M=f^{(n+1)}(\xi)/(n+1)!$ 이고, $g(x)=0$ 이 Lagrange 형의 식이다.

## 적분형 나머지항

$f^{(n+1)}$ 이 $a$ 와 $x$ 를 잇는 구간에서 연속이면 다음이 성립한다.

$$
R_n(x)=\frac{1}{n!}\int_a^x (x-t)^n f^{(n+1)}(t)\thinspace dt
$$

$n=0$ 이면 [미적분학의 기본 정리](fundamental-calculus.md)의 $f(x)-f(a)=\int_a^x f'(t)\thinspace dt$ 이다. 이 적분에 $u=f^{(k)}(t)$, $dv=(x-t)^{k-1}dt$ 로 [부분적분](integration-by-parts.md)을 거듭 쓰면 $P_n$ 의 항이 하나씩 나오고 남은 적분이 위 식이다[^2]. 적분형에 적분의 평균값 정리를 쓰면 Lagrange 형이 다시 나온다.

## Peano 형 나머지항

$f$ 가 $a$ 에서 $n$ 번 미분 가능하기만 하면 다음이 성립한다.

$$
\lim_{x\to a}\frac{R_n(x)}{(x-a)^n}=0
$$

이것을 Peano 형 나머지항(Peano form of the remainder)이라 하고 $R_n(x)=o((x-a)^n)$ 으로 쓴다. 분자와 분모가 $x=a$ 에서 $n-1$ 계 도함수까지 $0$ 이므로 [L'Hôpital 법칙](lhopital-rule.md)을 $n-1$ 번 쓰면 다음 극한이 남는다.

$$
\lim_{x\to a}\frac{1}{n!}\left(\frac{f^{(n-1)}(x)-f^{(n-1)}(a)}{x-a}-f^{(n)}(a)\right)
$$

미분의 정의로 괄호 안이 $0$ 으로 간다. 이 꼴은 오차의 크기를 주지 않고 $x\to a$ 에서 오차가 $(x-a)^n$ 보다 빨리 $0$ 으로 간다는 것만 준다.

## Taylor 급수로의 수렴

$f$ 가 무한 번 미분 가능하면 $n\to\infty$ 에서 $P_n$ 은 [멱급수](power-series.md)의 Taylor 급수가 된다. Taylor 급수가 $x$ 에서 $f(x)$ 로 수렴하는 것은 $R_n(x)\to 0$ 과 동치다.

[지수함수](exponential-function.md) $e^x$ 는 $a=0$ 에서 모든 도함수가 $e^x$ 이므로 Lagrange 형으로 $\vert R_n(x)\vert\le e^{\vert x\vert}\vert x\vert^{n+1}/(n+1)!$ 이고, 이 값은 모든 $x$ 에서 $0$ 으로 간다. 따라서 $e^x=\sum_{n\ge 0}x^n/n!$ 이 모든 실수 $x$ 에서 성립한다.

$R_n(x)\to 0$ 은 자동으로 성립하지 않는다. $x\ne 0$ 에서 $f(x)=e^{-1/x^2}$, $f(0)=0$ 인 함수는 무한 번 미분 가능하고 $f^{(k)}(0)=0$ 이 모든 $k$ 에서 성립한다. Taylor 다항식이 전부 $0$ 이므로 $R_n=f$ 이고, $x\ne 0$ 에서 $R_n(x)$ 는 $0$ 으로 가지 않는다.

## 다변수 함수

$f\colon\mathbb R^m\to\mathbb R$ 의 이계 편도함수가 $a$ 와 $a+h$ 를 잇는 선분 근방에서 연속이면, 그 선분 위의 어떤 점 $\xi$ 에서 다음이 성립한다.

$$
f(a+h)=f(a)+\nabla f(a)\cdot h+\frac12 h^\top H_f(\xi)\thinspace h
$$

$H_f$ 는 [Hessian 행렬](hessian.md)이다. 한 변수 함수 $\varphi(t)=f(a+th)$ 에 $n=1$ 인 Taylor 정리를 쓰고 [연쇄법칙](chain-rule.md)으로 $\varphi'(0)=\nabla f(a)\cdot h$, $\varphi''(t)=h^\top H_f(a+th)\thinspace h$ 를 계산하면 나온다.

# 활용

- [Newton 법](newton-method.md)의 국소 이차 수렴. 근 $r$ 에서 $0=f(r)$ 을 $x_k$ 중심 Lagrange 형으로 전개하면 다음 반복의 오차가 $e_{k+1}=\frac{f''(\xi)}{2f'(x_k)}e_k^2$ 이다.
- [Hessian 행렬](hessian.md)의 이계 도함수 판정. 기울기가 $0$ 인 점에서 이차 Taylor 전개의 이차 항 부호로 극소와 극대를 가른다.
- [경사하강법](gradient-descent.md)의 감소 보조정리(descent lemma). 기울기가 상수 $L$ 의 Lipschitz 조건을 만족하면 적분형 나머지항으로 다음을 얻는다.

  $$
  f(y)\le f(x)+\nabla f(x)\cdot(y-x)+\frac L2\Vert y-x\Vert^2
  $$
- [다항식 보간](polynomial-interpolation.md)의 오차 공식. Lagrange 형의 증명과 같은 Rolle 정리 반복으로 $f^{(n+1)}(\xi)$ 가 든 오차항을 얻는다. Taylor 다항식은 보간점 $n+1$ 개가 모두 $a$ 로 모인 경우다.
- [Sard 정리](sard-theorem.md)의 증명. 고계 편도함수가 모두 $0$ 인 점 근방에서 나머지항의 크기로 상의 부피를 묶는다.
- 수치 미분의 오차. $f(a\pm h)$ 를 $a$ 중심으로 전개하면 전진 차분 $(f(a+h)-f(a))/h$ 의 오차는 $h$ 에 비례하고 중심 차분 $(f(a+h)-f(a-h))/(2h)$ 의 오차는 $h^2$ 에 비례한다.

[^1]: W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., McGraw-Hill, 1976, Theorem 5.15.
[^2]: M. Spivak, *Calculus*, 4th ed., Publish or Perish, 2008, Chapter 20.

# 연관 문서

## 선수지식

- [평균값 정리](mean-value-theorem.md)

## 더 알아보기

- [멱급수](power-series.md)
- [Stirling 공식](stirling-formula.md)

#analysis #computation #optimization
