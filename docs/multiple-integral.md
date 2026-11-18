# 중적분

# 개요

**중적분(multiple integral)** 은 평면이나 공간의 영역 위에서 함수값을 더하는 적분이다. 가로 $1$, 세로 $2$ 인 땅에 흙이 쌓여 있고 점 $(x,y)$ 에서 흙의 높이가 $x+y$ 일 때 흙의 전체 부피는 한 변수 적분 하나로 구해지지 않는다. 중적분은 땅을 작은 직사각형으로 잘라 기둥의 부피를 더하는 것으로 정의되고, 한 방향으로 자른 단면의 넓이를 다시 적분하는 두 번의 한 변수 적분으로 계산된다.

# 직관

흙의 높이를 $h(x,y)=x+y$, 땅을 $R=\lbrack 0,1\rbrack\times\lbrack 0,2\rbrack$ 로 둔다. 땅을 작은 직사각형으로 자르고 조각마다 한 점의 높이를 골라 밑넓이를 곱하면 기둥 하나의 부피이고, 기둥의 부피를 모두 더하면 흙의 부피에 가깝다. 조각을 잘게 할수록 이 합이 다가가는 값이 부피다. 이것은 [Riemann 적분](riemann-integral.md)의 Riemann 합을 직사각형 조각으로 옮긴 것이다.

합을 더하는 순서를 정하면 계산이 된다. $x$ 를 고정한 줄의 기둥을 먼저 더하면, 그 줄은 높이 $x+y$ 인 단면을 $y$ 방향으로 자른 것이어서 줄의 합은 단면 넓이 $\int_0^2(x+y)\thinspace dy=2x+2$ 에 가로 폭을 곱한 값에 가깝다. 이 단면 넓이를 $x$ 에 대해 더하면 $\int_0^1(2x+2)\thinspace dx=3$ 이다.

$y$ 를 먼저 고정해도 $\int_0^1(x+y)\thinspace dx=\frac12+y$ 이고 $\int_0^2(\frac12+y)\thinspace dy=3$ 이다. 같은 기둥들을 다른 순서로 더했으므로 값이 같다.

# 정의

## 직사각형 위의 적분

$R=\lbrack a_1,b_1\rbrack\times\cdots\times\lbrack a_n,b_n\rbrack$ 의 각 변을 나누어 얻은 작은 직사각형들을 $R_1,\dots,R_N$ 이라 하고, $\vert R_i\vert$ 를 $R_i$ 의 부피, 가장 긴 변의 길이를 분할의 크기라 한다. 유계 함수 $f\colon R\to\mathbb R$ 와 $\xi_i\in R_i$ 에 대한 Riemann 합은 다음이다.

$$
\sum_{i=1}^Nf(\xi_i)\thinspace\vert R_i\vert
$$

분할의 크기가 $0$ 으로 갈 때 $\xi_i$ 의 선택에 상관없이 이 합이 한 값으로 수렴하면 $f$ 가 $R$ 에서 적분 가능하다고 하고, 그 값을 $\int_Rf\thinspace dV$ 로 쓴다. $n=2$ 이면 $\iint_Rf\thinspace dA$ 로, $n=3$ 이면 $\iiint_Rf\thinspace dV$ 로도 쓴다. 직관 절의 부피는 $\iint_R(x+y)\thinspace dA=3$ 이다.

## 일반 영역 위의 적분

유계 집합 $D$ 의 경계를 부피의 합이 얼마든지 작은 유한 개의 직사각형으로 덮을 수 있으면 $D$ 를 Jordan 가측(Jordan measurable)이라 한다. $D$ 를 담는 직사각형 $R$ 을 잡고 $D$ 밖에서 $0$ 인 함수 $f\mathbf 1\_D$ 로 넓혀 다음과 같이 정의한다.

$$
\int_Df\thinspace dV=\int_Rf\mathbf 1\_D\thinspace dV
$$

$f=1$ 이면 $D$ 의 넓이나 부피다. 원판, 공, 그래프 두 개 사이의 영역은 Jordan 가측이다.

# 성질

## 적분 가능성

[연속](continuity.md)함수는 Jordan 가측 집합 위에서 적분 가능하다. 닫힌 직사각형에서 연속이면 [균등연속](uniform-continuity.md)이므로 분할을 잘게 하면 각 조각 안의 값의 차가 $\varepsilon$ 보다 작아지고, Riemann 합의 차가 $\varepsilon\vert R\vert$ 이하가 된다. 일반 영역에서는 경계를 덮는 작은 직사각형들에서 생기는 차가 그 부피의 합 이하로 눌린다. 불연속점의 집합이 측도 $0$ 이면 적분 가능하다는 Lebesgue 판정법도 한 변수와 같다.

## Fubini 정리

$f$ 가 $R=\lbrack a,b\rbrack\times\lbrack c,d\rbrack$ 에서 연속이면 다음이 성립한다.

$$
\iint_Rf\thinspace dA=\int_a^b\left(\int_c^df(x,y)\thinspace dy\right)dx=\int_c^d\left(\int_a^bf(x,y)\thinspace dx\right)dy
$$

괄호 안의 적분을 반복적분(iterated integral)이라 한다. 증명의 요지. 격자 분할의 Riemann 합을 $x$ 의 줄마다 먼저 더하면 줄의 합이 안쪽 적분의 Riemann 합이 된다. 균등연속성으로 두 근사의 오차가 함께 $0$ 으로 가고, $x\mapsto\int_c^df(x,y)\thinspace dy$ 가 연속이어서 바깥 적분도 존재한다[^1].

영역이 $a\le x\le b$, $g_1(x)\le y\le g_2(x)$ 꼴이면 안쪽 적분의 구간이 $x$ 에 따라 바뀐다. 삼각형 $0\le y\le x\le 1$ 에서 $f=xy$ 는 다음과 같다.

$$
\int_0^1\int_0^xxy\thinspace dy\thinspace dx=\int_0^1\frac{x^3}{2}\thinspace dx=\frac18=\int_0^1\int_y^1xy\thinspace dx\thinspace dy
$$

## 순서를 바꿀 수 없는 예

$(0,1\rbrack^2$ 에서 $f(x,y)=(x^2-y^2)/(x^2+y^2)^2$ 은 원점 근처에서 유계가 아니다. $\int_0^1f(x,y)\thinspace dy=1/(1+x^2)$ 이므로 $y$ 먼저 적분하면 $\int_0^1\frac{dx}{1+x^2}=\pi/4$ 이다. $f(y,x)=-f(x,y)$ 이므로 $x$ 먼저 적분하면 $-\pi/4$ 다. 유계가 아니어서 Fubini 정리의 가정이 깨진다.

측도론에서는 $\int\vert f\vert\lt\infty$ 를 가정하면 순서를 바꿀 수 있고, 이것이 [Fubini–Tonelli 정리](fubini-tonelli.md)다. 위의 $f$ 는 $\iint\vert f\vert=\infty$ 다.

## 변수 바꾸기

좌표를 $C^1$ 미분동형 $\varphi$ 로 바꾸면 부피가 $\vert\det D\varphi\vert$ 배가 되고, 이것이 [치환적분](integration-by-substitution.md)의 다변수 공식이다. [극좌표](polar-coordinates.md) $x=r\cos\theta$, $y=r\sin\theta$ 에서는 $dA=r\thinspace dr\thinspace d\theta$ 이다. 반지름 $1$ 인 원판의 넓이는 $\int_0^{2\pi}\int_0^1r\thinspace dr\thinspace d\theta=\pi$ 다.

# 활용

- 질량과 무게중심. 밀도 $\rho$ 인 판의 질량은 $\iint_D\rho\thinspace dA$ 이고 무게중심의 $x$ 좌표는 $\iint_Dx\rho\thinspace dA$ 를 질량으로 나눈 값이다.
- 결합 확률. 두 확률변수의 결합 [확률밀도](probability-density.md)가 $p(x,y)$ 이면 $\Pr\lbrack X\le Y\rbrack=\iint_{x\le y}p\thinspace dA$ 이고, Fubini 정리로 반복적분으로 계산한다.
- [Green 정리](greens-theorem.md). 평면 영역의 이중적분을 경계의 [선적분](line-integral.md)으로 바꾼다. 증명은 영역을 $g_1(x)\le y\le g_2(x)$ 꼴로 보고 Fubini 정리로 안쪽 적분을 먼저 계산하는 것이다.
- Gauss 적분. $\int_{-\infty}^\infty e^{-x^2}dx$ 의 제곱을 평면 위의 이중적분으로 쓰고 극좌표로 바꾸어 $\pi$ 를 얻는다.

[^1]: J. R. Munkres, *Analysis on Manifolds*, Addison-Wesley, 1991, §§10–12.

# 연관 문서

## 선수지식

- [Riemann 적분](riemann-integral.md)
- [균등연속](uniform-continuity.md)

## 더 알아보기

- [치환적분](integration-by-substitution.md)
- [Green 정리](greens-theorem.md)

#analysis #measure_theory #probability
