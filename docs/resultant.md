# 종결식

# 개요

**종결식(resultant)** 은 두 다항식의 계수로 계산해 두 다항식이 공통근을 갖는지 알려 주는 값이다. $x^2-3x+2$ 와 $x^2-x-2$ 가 같은 근을 갖는지 근을 구하지 않고 알고 싶을 때, 두 다항식의 계수를 행렬에 늘어놓고 [행렬식](determinants.md)을 계산한다. 이 값이 $0$ 인 것이 공통근이 있는 것과 같아, 근을 찾는 문제가 계수의 계산 하나로 바뀐다.

# 직관

$f=x^2-3x+2$ 와 $g=x^2-x-2$ 가 공통근 $r$ 을 가지면 $f=(x-r)f_1$, $g=(x-r)g_1$ 이고 $f_1,g_1$ 은 일차식이다. 그러면 $g_1f-f_1g=0$ 이다. 차수가 $1$ 이하이고 둘 다 $0$ 은 아닌 $u,v$ 로 $uf+vg=0$ 이 된다.

거꾸로 그런 $u,v$ 가 있으면 $f$ 가 $vg$ 를 나누는데 $v$ 의 차수가 $f$ 보다 작으므로 $f$ 와 $g$ 에 공통 인수가 있다. 그래서 공통근이 있는지는 $uf+vg=0$ 이 $0$ 이 아닌 해를 갖는지와 같다.

$u=ax+b$, $v=cx+d$ 로 놓고 $uf+vg$ 를 전개하면 $x^3,x^2,x,1$ 의 계수가 각각 $0$ 이어야 한다. 미지수 $a,b,c,d$ 에 대한 일차방정식 네 개다.

$$
\begin{aligned}
a+c&=0\cr
{-}3a+b-c+d&=0\cr
2a-3b-2c-d&=0\cr
2b-2d&=0
\end{aligned}
$$

이 연립방정식이 $0$ 이 아닌 해를 갖는 것은 계수 행렬의 행렬식이 $0$ 인 것과 같다. 계산하면 $0$ 이고, 실제로 $f=(x-1)(x-2)$ 와 $g=(x+1)(x-2)$ 는 근 $2$ 를 함께 갖는다.

# 정의

## Sylvester 행렬

$f=a_mx^m+\cdots+a_0$ 과 $g=b_nx^n+\cdots+b_0$ 에 대해, $f$ 의 계수를 한 칸씩 밀며 $n$ 줄, $g$ 의 계수를 한 칸씩 밀며 $m$ 줄 늘어놓은 $(m+n)\times(m+n)$ 행렬을 **Sylvester 행렬(Sylvester matrix)** 이라 한다. $m=n=2$ 이면 다음과 같다.

$$
\mathrm{Syl}(f,g)=\begin{pmatrix}a_2&a_1&a_0&0\cr 0&a_2&a_1&a_0\cr b_2&b_1&b_0&0\cr 0&b_2&b_1&b_0\end{pmatrix}
$$

직관 절의 $f,g$ 에서는 첫 두 줄이 $(1,-3,2,0)$, $(0,1,-3,2)$ 이고 뒤 두 줄이 $(1,-1,-2,0)$, $(0,1,-1,-2)$ 다. 이 행렬은 직관 절의 연립방정식의 계수 행렬을 전치한 것이다.

## 종결식

Sylvester 행렬의 행렬식 $\mathrm{Res}(f,g)=\det\mathrm{Syl}(f,g)$ 를 $f$ 와 $g$ 의 **종결식(resultant)** 이라 한다. 직관 절의 두 다항식에서는 $\mathrm{Res}(f,g)=0$ 이다.

# 성질

## 근의 곱 공식

$f$ 의 근을 $r_1,\dots,r_m$, $g$ 의 근을 $s_1,\dots,s_n$ 이라 하면 다음이 성립한다[^1].

$$
\mathrm{Res}(f,g)=a_m^nb_n^m\prod_{i,j}(r_i-s_j)=a_m^n\prod_{i}g(r_i)
$$

직관 절의 예에서 $r=1,2$ 이고 $s=2,-1$ 이므로 곱에 $2-2=0$ 이 들어 있다. $f=x-r$ 이면 $\mathrm{Res}(f,g)=g(r)$ 이다.

## 공통근 판정

$a_m$ 과 $b_n$ 이 $0$ 이 아니면, $\mathrm{Res}(f,g)=0$ 인 것과 $f,g$ 가 분해체에서 공통근을 갖는 것이 동치다. 이것은 $f$ 와 $g$ 의 최대공약수가 상수가 아닌 것과도 동치다. 직관 절의 논증이 일반 차수에서 그대로 증명이 된다.

## 아이디얼에 속함

차수가 $n$ 보다 작은 $u$ 와 $m$ 보다 작은 $v$ 로 $\mathrm{Res}(f,g)=uf+vg$ 가 되고, $u,v$ 의 계수는 $f,g$ 의 계수의 정수 계수 다항식이다[^1]. Sylvester 행렬의 마지막 열에 앞 열들의 $x$ 거듭제곱 배를 더하고 그 열로 전개하면 나온다. 그래서 종결식은 $f,g$ 가 생성하는 아이디얼에 들어 있다.

## 판별식

$f$ 와 도함수 $f'$ 의 종결식이 [판별식](discriminant.md)을 준다.

$$
\Delta(f)=\frac{(-1)^{m(m-1)/2}}{a_m}\mathrm{Res}(f,f')
$$

$f=x^2+bx+c$ 이면 $\mathrm{Res}(f,2x+b)=4c-b^2$ 이고, 부호를 바꾸면 $b^2-4c$ 다.

## 변수 소거

두 변수 다항식 $f(x,y)$, $g(x,y)$ 를 $x$ 의 다항식으로 보고 계수를 $y$ 의 다항식으로 두면 $R(y)=\mathrm{Res}\_x(f,g)$ 는 $y$ 만의 다항식이다. 두 곡선의 교점의 $y$ 좌표는 $R$ 의 근이다.

원 $x^2+y^2-1$ 과 직선 $x-y$ 에서는 $R(y)=2y^2-1$ 이고, 근 $y=\pm 1/\sqrt2$ 가 두 교점의 $y$ 좌표다.

# 활용

- 대수적 수의 최소다항식. $\alpha$ 와 $\beta$ 의 최소다항식이 $f,g$ 이면 $\alpha+\beta$ 는 $\mathrm{Res}\_y(f(y),g(x-y))$ 의 근이다. $f=y^2-2$, $g=y^2-3$ 이면 이 종결식은 $x^4-10x^2+1$ 이고 $\sqrt2+\sqrt3$ 의 최소다항식이다.
- [교차 이론](intersection-theory.md). 평면곡선 두 개의 교점 수를 세는 Bézout 정리(Bézout's theorem)의 고전적 증명이 변수 소거의 종결식의 차수를 센다.
- [Gröbner 기저](groebner-bases.md). 여러 변수와 여러 다항식의 소거는 소거 순서의 Gröbner 기저로 하고, 두 다항식에서 한 변수를 지울 때는 종결식이 같은 일을 한다.

[^1]: D. A. Cox, J. Little, D. O'Shea, Ideals, Varieties, and Algorithms, 4th ed., Springer, Undergraduate Texts in Mathematics (2015), Chapter 3 §6 — Sylvester 행렬, 공통인수 판정, 종결식이 아이디얼에 속함, 근의 곱 공식.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)
- [행렬식](determinants.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #ring_theory #linear_algebra
