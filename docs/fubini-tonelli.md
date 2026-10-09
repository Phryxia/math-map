# Fubini–Tonelli 정리

# 개요

Fubini–Tonelli 정리는 곱측도에 대한 적분과 한 변수씩 차례로 적분한 반복적분이 같아지는 조건을 말한다. Tonelli 정리는 음이 아닌 가측함수에 조건 없이 적용되고, Fubini 정리는 절댓값의 적분이 유한한 함수에 적용된다. 적분 순서를 바꾸는 계산은 이 정리를 근거로 한다.

# 직관

유한 합은 더하는 순서를 바꿔도 값이 같다. 적분도 그럴 것 같으므로 정사각형 $(0,1)^2$ 에서

$$f(x,y)=\frac{x^2-y^2}{(x^2+y^2)^2}$$

의 반복적분을 두 순서로 계산한다. $y$ 에 대한 원시함수가 $y/(x^2+y^2)$ 이므로 $\int_0^1f(x,y)\thinspace dy=1/(1+x^2)$ 이고, 이것을 $x$ 로 적분하면 $\pi/4$ 다. 그런데 $f(y,x)=-f(x,y)$ 이므로 순서를 바꾼 반복적분은 $-\pi/4$ 다.

두 값이 다른 이유는 $\vert f\vert$ 의 적분이 무한하다는 데 있다. 원점 근처에서 $\vert f\vert$ 의 크기는 $1/r^2$ 이고 면적소가 $r\thinspace dr\thinspace d\theta$ 이므로, 적분이 $\int_0 dr/r$ 처럼 발산한다. $f$ 의 양인 부분과 음인 부분이 각각 무한한 적분을 가지니, 어느 쪽을 먼저 상쇄하는지를 적분 순서가 정한다.

상쇄가 문제이므로 조건은 두 갈래로 갈린다. $f\ge 0$ 이면 상쇄할 음수가 없고 값이 $+\infty$ 여도 두 반복적분이 같다. 부호가 섞이면 $\vert f\vert$ 의 적분이 유한한지를 먼저 확인해야 하고, 그 확인 자체는 $\vert f\vert\ge 0$ 이므로 반복적분으로 할 수 있다.

# 정의

## 곱측도

$(X,\mathcal A,\mu)$ 와 $(Y,\mathcal B,\nu)$ 를 $\sigma$ 유한 측도공간이라 한다. **곱 $\sigma$ 대수** $\mathcal A\otimes\mathcal B$ 는 $A\in\mathcal A$, $B\in\mathcal B$ 인 직사각형 $A\times B$ 들이 생성하는 $\sigma$ 대수다. **곱측도** $\mu\times\nu$ 는 $\mathcal A\otimes\mathcal B$ 위의 측도로

$$(\mu\times\nu)(A\times B)=\mu(A)\nu(B)$$

를 만족하며, $\sigma$ 유한성 아래에서 이런 측도는 하나뿐이다. 존재의 구성과 완비화에서 생기는 차이는 [곱측도](product-measure.md)에 있다.

## 단면과 반복적분

$f:X\times Y\to\lbrack 0,\infty\rbrack$ 가 $\mathcal A\otimes\mathcal B$ 가측이면 각 $x\in X$ 에서 **단면** $y\mapsto f(x,y)$ 가 $\mathcal B$ 가측이고, 함수 $x\mapsto\int_Yf(x,y)\thinspace d\nu(y)$ 가 $\mathcal A$ 가측이다. 두 단계를 이어 붙인

$$\int_X\left(\int_Yf(x,y)\thinspace d\nu(y)\right)d\mu(x)$$

이 **반복적분**이고, $X$ 와 $Y$ 를 맞바꾼 반복적분이 또 하나 있다.

# 성질

## Tonelli 정리

**정리.** $\mu,\nu$ 가 $\sigma$ 유한이고 $f:X\times Y\to\lbrack 0,\infty\rbrack$ 가 곱가측이면 다음 세 값이 같다. 값이 $+\infty$ 인 경우도 포함한다.[^1]

$$\int_{X\times Y}f\thinspace d(\mu\times\nu)=\int_X\int_Yf\thinspace d\nu\thinspace d\mu=\int_Y\int_Xf\thinspace d\mu\thinspace d\nu$$

증명의 요지. $f=\mathbf 1_E$ 인 경우로 환원한다. $E=A\times B$ 이면 세 값이 모두 $\mu(A)\nu(B)$ 다. 직사각형의 모임은 교집합에 닫혀 있고, 세 값이 같은 $E$ 들의 모임은 단조류를 이루므로 단조류 정리가 그 모임을 $\mathcal A\otimes\mathcal B$ 전체로 넓힌다. 지시함수의 선형결합으로 단순함수를 얻고, 일반 $f\ge 0$ 은 단순함수의 증가열로 근사해 [단조 수렴 정리](monotone-convergence.md)를 세 적분에 각각 적용한다.

## Fubini 정리

**정리.** $f$ 가 곱가측이고 $\int_{X\times Y}\vert f\vert\thinspace d(\mu\times\nu)\lt\infty$ 이면 거의 모든 $x$ 에서 단면 $f(x,\cdot)$ 이 적분가능하고, Tonelli 정리의 세 값이 같은 유한한 값이다.

증명의 요지. $f=f^+-f^-$ 로 가르면 두 함수가 음이 아니고 각각의 적분이 $\int\vert f\vert$ 로 눌리므로 유한하다. Tonelli 정리를 $f^+$ 와 $f^-$ 에 적용하고 빼면 된다. 적분가능성 가정이 하는 일은 $\infty-\infty$ 를 막는 것이다.

## 두 가정의 필요성

$\sigma$ 유한성을 빼면 결론이 깨진다. $X=Y=\lbrack 0,1\rbrack$ 에 $\mu$ 는 Lebesgue 측도, $\nu$ 는 셈측도를 주고 $E$ 를 대각선 $\lbrace (x,x)\rbrace$ 로 잡는다. $E$ 는 곱가측이고 단면이 각각 한 점과 한 점이므로

$$\int_X\nu(E_x)\thinspace d\mu=\int_X1\thinspace d\mu=1,\qquad\int_Y\mu(E^y)\thinspace d\nu=\int_Y0\thinspace d\nu=0$$

이다. 셈측도가 $\sigma$ 유한이 아니라서 생긴다. 적분가능성을 빼면 직관 절의 $f$ 가 두 반복적분에 $\pi/4$ 와 $-\pi/4$ 를 준다.

## 완비화에서의 단면

Lebesgue 측도를 완비화하면 $\mathcal L(\mathbb R)\otimes\mathcal L(\mathbb R)$ 이 $\mathcal L(\mathbb R^2)$ 보다 작다. 완비 곱측도에 대해 가측인 함수의 단면은 모든 $x$ 에서 가측이라고 할 수 없고, 영집합 밖의 $x$ 에서만 가측이다. Fubini 정리의 진술에 "거의 모든 $x$" 가 붙는 이유가 이것이다.

# 활용

- **Fourier 변환의 성질.** [Fourier 변환](fourier-transform.md)의 합성곱 정리는 $\int\int f(x-y)g(y)e^{-2\pi i\xi x}\thinspace dy\thinspace dx$ 의 순서를 바꿔 얻고, 반전 공식과 Plancherel 정리의 증명도 같은 교환을 쓴다. 교환의 근거가 피적분함수의 절댓값이 $L^1$ 에 든다는 Fubini 정리의 가정이다.
- **층 분해.** $f\ge 0$ 에 대한 $\int_Xf\thinspace d\mu=\int_0^\infty\mu(\lbrace f\gt t\rbrace)\thinspace dt$ 는 $\mathbf 1_{\lbrace f(x)\gt t\rbrace}$ 를 $X\times(0,\infty)$ 에서 적분하고 Tonelli 정리로 순서를 바꾼 것이다. 적분을 측도의 값으로 바꾸는 계산에 쓰인다.
- **독립 확률변수의 합.** [확률변수](random-variables.md) $X,Y$ 가 독립이면 결합분포가 곱측도이므로, $\mathbb E\lbrack g(X)h(Y)\rbrack=\mathbb E g(X)\thinspace\mathbb E h(Y)$ 가 Fubini 정리의 결론이고, 합의 분포가 합성곱으로 나오는 것도 같다.
- **$L^p$ 의 부등식.** [$L^p$ 공간](lp-spaces.md)에서 Minkowski 적분 부등식은 반복적분의 순서를 바꿔 증명한다.

[^1]: Walter Rudin, *Real and Complex Analysis*, 3판, McGraw–Hill, 1987, 8 장. 곱측도의 구성과 두 정리의 증명이 여기 있다. 완비화에서 단면의 가측성이 약해지는 점도 같은 장에 있다.

# 연관 문서

## 선수지식

- [Lebesgue 적분](lebesgue-integral.md)
- [곱측도](product-measure.md)
- [단조 수렴 정리](monotone-convergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #analysis #probability
