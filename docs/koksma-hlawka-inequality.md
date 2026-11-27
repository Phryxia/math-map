# Koksma–Hlawka 부등식

# 개요

**Koksma–Hlawka 부등식(Koksma–Hlawka inequality)** 은 점 $N$ 개에서 잰 함숫값의 평균과 함수의 적분 사이의 차가 함수의 총변동과 점들의 불일치도의 곱 이하라는 부등식이다. $\int\_0^1x^2\thinspace dx=1/3$ 을 점 일곱 개의 평균으로 어림한다. 무작위로 고른 일곱 점이면 오차가 대개 $0.1$ 정도이지만, $1/8,2/8,\dots,7/8$ 을 쓰면 평균이 $0.3125$ 이고 오차가 $0.021$ 이다. 이 부등식은 오차를 함수 쪽의 수 하나와 점 쪽의 수 하나로 갈라, 점을 고르게 놓으면 오차가 $1/N$ 에 가까운 속도로 준다는 것을 보인다.

# 직관

$\lbrack 0,1)$ 의 점 $x\_1,\dots,x\_N$ 과 $t\in\lbrack 0,1\rbrack$ 에 대해 $\lbrack 0,t)$ 에 든 점의 비율에서 $t$ 를 뺀 값을 $R(t)$ 라 한다. 점이 고르게 놓이면 $R(t)$ 는 모든 $t$ 에서 작다.

$f=\mathbf 1\_{\lbrack 0,t)}$ 이면 점에서 잰 평균은 $\lbrack 0,t)$ 에 든 점의 비율이고 적분은 $t$ 이므로, 오차가 정확히 $R(t)$ 다. $f=\mathbf 1\_{\lbrack t,1)}$ 이면 오차는 $-R(t)$ 다.

$f(x)=x^2$ 는 $t$ 에서 $t+dt$ 까지 오른 높이 $2t\thinspace dt$ 만큼 $\mathbf 1\_{\lbrack t,1)}$ 을 쌓은 것이다. 그래서 오차는 $-R(t)$ 들을 합이 $1$ 인 가중치 $2t\thinspace dt$ 로 섞은 값이고, $\vert R\vert$ 의 최댓값 이하다.

개요의 점 $1/8,\dots,7/8$ 에서 $R(t)$ 의 절댓값은 $t$ 가 $k/8$ 바로 위일 때 $k/7-k/8=k/56$ 이고, 가장 큰 값은 $7/56=1/8$ 이다. 오차 $0.021$ 이 $1\cdot 1/8$ 이하다.

# 정의

$\lbrack 0,1)^d$ 의 점 $x\_1,\dots,x\_N$ 의 **별 불일치도(star discrepancy)** 는 원점에 붙은 상자 $\lbrack 0,t)=\lbrack 0,t\_1)\times\cdots\times\lbrack 0,t\_d)$ 에 든 점의 비율과 상자의 부피의 차 가운데 가장 큰 것이다.

$$
D\_N^\ast=\sup\_{t\in\lbrack 0,1\rbrack^d}\left\vert\frac{\char35{}\lbrace n\le N:x\_n\in\lbrack 0,t)\rbrace}{N}-t\_1\cdots t\_d\right\vert
$$

$d=1$ 이면 $D\_N^\ast=\sup\_t\vert R(t)\vert$ 이고, 직관 절의 일곱 점은 $D\_7^\ast=1/8$ 이다. [등분포](equidistribution.md) 문서의 불일치도 $D\_N$ 은 모든 구간 $\lbrack a,b)$ 에서 sup 를 잡은 것이고, $D\_N^\ast\le D\_N\le 2D\_N^\ast$ 다.

$d=1$ 에서 $f$ 의 변동 $V(f)$ 는 $\lbrack 0,1\rbrack$ 위의 [총변동](bounded-variation.md)이다. $x^2$ 는 증가하므로 $V(x^2)=1$ 이다.

$d\ge 2$ 에서는 Hardy–Krause 변동(Hardy–Krause variation) $V\_{\mathrm{HK}}(f)$ 를 쓴다. $f$ 가 매끄러우면 좌표의 공집합이 아닌 부분집합 $u$ 마다, $u$ 밖의 좌표를 $1$ 로 고정하고 $u$ 의 좌표로 편미분한 함수의 절댓값을 $\lbrack 0,1\rbrack^u$ 에서 적분해 더한 값이다. $d=2$ 이면 다음과 같다.

$$
V\_{\mathrm{HK}}(f)=\int\_0^1\int\_0^1\left\vert\frac{\partial^2f}{\partial x\partial y}\right\vert dx\thinspace dy+\int\_0^1\left\vert\frac{\partial f}{\partial x}(x,1)\right\vert dx+\int\_0^1\left\vert\frac{\partial f}{\partial y}(1,y)\right\vert dy
$$

$f(x,y)=xy$ 이면 세 항이 각각 $1$, $1$, $1$ 이고 $V\_{\mathrm{HK}}(f)=3$ 이다.

# 성질

## Koksma 부등식

$f$ 가 $\lbrack 0,1\rbrack$ 에서 유계변동이면 다음이 성립한다[^1].

$$
\left\vert\frac1N\sum\_{n=1}^{N}f(x\_n)-\int\_0^1f(x)\thinspace dx\right\vert\le V(f)\thinspace D\_N^\ast
$$

증명의 요지. 모든 $x\_n$ 이 $\lbrack 0,1)$ 에 있으므로 $R(0)=R(1)=0$ 이다. 점에서 잰 평균에서 적분을 뺀 값은 [Riemann–Stieltjes 적분](riemann-stieltjes-integral.md) $\int\_0^1f\thinspace dR$ 이고, 부분적분하면 경계항이 사라져 $-\int\_0^1R\thinspace df$ 가 된다. 그 절댓값은 $\sup\vert R\vert$ 와 $V(f)$ 의 곱 이하다.

## Koksma–Hlawka 부등식

$f$ 가 $\lbrack 0,1\rbrack^d$ 에서 $V\_{\mathrm{HK}}(f)\lt \infty$ 이면 다음이 성립한다[^1].

$$
\left\vert\frac1N\sum\_{n=1}^{N}f(x\_n)-\int\_{\lbrack 0,1\rbrack^d}f(x)\thinspace dx\right\vert\le V\_{\mathrm{HK}}(f)\thinspace D\_N^\ast
$$

증명은 $d=1$ 과 같은 부분적분을 좌표마다 한다. 오차를 부분집합 $u$ 마다 $R$ 을 $u$ 의 면에 제한한 함수와 $\partial^uf$ 의 곱의 적분으로 쓰는 등식을 Hlawka–Zaremba 항등식(Hlawka–Zaremba identity)이라 한다.

## 등호에 가까운 함수

$d=1$ 에서 상수 $V(f)D\_N^\ast$ 는 줄일 수 없다. $\vert R(t)\vert$ 가 $D\_N^\ast$ 에 가까운 $t$ 를 골라 $f=\mathbf 1\_{\lbrack 0,t)}$ 로 두면 $V(f)=1$ 이고 오차가 $\vert R(t)\vert$ 다.

## 불일치도가 작은 수열

$n$ 을 이진법으로 쓰고 자릿수를 소수점 아래로 뒤집어 놓은 수 $\phi\_2(n)$ 의 수열을 van der Corput 수열(van der Corput sequence)이라 한다. $n=1,2,\dots,7$ 이면 $1/2,1/4,3/4,1/8,5/8,3/8,7/8$ 이고, 이것은 직관 절의 일곱 점이다.

van der Corput 수열은 $D\_N^\ast$ 가 $(\log N)/N$ 의 상수배 이하다. 서로소인 밑 $b\_1,\dots,b\_d$ 의 수열을 좌표로 늘어놓은 Halton 수열(Halton sequence)은 $\lbrack 0,1)^d$ 에서 $D\_N^\ast$ 가 $(\log N)^d/N$ 의 상수배 이하다[^1]. Koksma–Hlawka 부등식과 합치면 적분 오차가 $(\log N)^d/N$ 의 차수다.

# 활용

- 준몬테카를로 적분(quasi-Monte Carlo integration). 무작위 점의 평균은 오차가 $N^{-1/2}$ 의 차수이고, 불일치도가 작은 점을 쓰면 이 부등식으로 $(\log N)^d/N$ 의 차수가 된다. 금융의 기댓값 계산과 컴퓨터 그래픽스의 빛 적분에 Halton 수열과 [Sobol 수열](sobol-sequences.md)을 쓴다.
- [등분포](equidistribution.md)의 수렴 속도. 수열이 등분포이면 [Riemann 적분](riemann-integral.md) 가능한 $f$ 의 평균이 적분으로 가고, 유계변동인 $f$ 에서는 그 속도가 $D\_N^\ast$ 다. 불일치도는 Erdős–Turán 부등식으로 지수합에서 위로 누른다.
- 다항식 수열의 지수합 추정. [Vinogradov 평균값 정리](vinogradov-mean-value.md)가 주는 지수합 상한이 불일치도 상한을 거쳐, 다항식 수열의 소수부에서 잰 평균의 수렴 속도가 된다.

[^1]: H. Niederreiter, *Random Number Generation and Quasi-Monte Carlo Methods*, CBMS-NSF Regional Conference Series in Applied Mathematics 63, SIAM, 1992, Chapter 2.

# 연관 문서

## 선수지식

- [등분포](equidistribution.md)
- [유계변동 함수](bounded-variation.md)

## 더 알아보기

- [Sobol 수열](sobol-sequences.md)

#number_theory #analysis #probability
