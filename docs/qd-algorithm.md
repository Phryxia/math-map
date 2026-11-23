# qd 알고리즘

# 개요

**qd 알고리즘(quotient-difference algorithm)** 은 [멱급수](power-series.md)의 계수만으로 그 급수가 나타내는 함수의 극을, 몫과 차를 번갈아 적은 표를 채워 구하는 방법이다. 계수가 $1,\thinspace 1.5,\thinspace 1.75,\thinspace 1.875,\dots$ 인 급수가 주어지면, 이웃한 계수의 비 $1.5,\thinspace 1.167,\thinspace 1.071,\dots$ 가 $1$ 로 가므로 가장 가까운 극이 $z=1$ 이라는 것은 알 수 있지만, 그다음 극은 이 비에서 보이지 않는다.

qd 알고리즘은 계수의 비로 첫 열을 채우고 두 가지 마름모 규칙으로 다음 열을 만들어, 열마다 다음으로 가까운 극의 역수를 얻는다.

# 직관

위 계수는 $f(z)=1/\bigl((1-z)(1-z/2)\bigr)$ 의 계수 $c\_n=2-2^{-n}$ 이고, 극은 $1$ 과 $2$ 다. 첫 열 $q\_1^{(n)}=c\_{n+1}/c\_n$ 은 [거듭제곱법](power-iteration.md)처럼 가장 큰 역수 $1$ 로 간다.

첫 열의 이웃한 값의 차를 둘째 열 $e\_1^{(n)}=q\_1^{(n+1)}-q\_1^{(n)}$ 로 적으면 $-0.333,\thinspace -0.095,\thinspace -0.038$ 이다. 이 차의 이웃한 비에 첫 열의 값을 곱해 셋째 열을 만든다.

$$
q\_2^{(n)}=q\_1^{(n+1)}\frac{e\_1^{(n+1)}}{e\_1^{(n)}}
$$

이 열은 $0.333,\thinspace 0.429,\dots$ 이고 둘째 극의 역수 $\frac12$ 로 간다. 그다음 차는 다음과 같다.

$$
e\_2^{(0)}=q\_2^{(1)}-q\_2^{(0)}+e\_1^{(1)}=0.429-0.333-0.095
$$

이 값은 반올림을 빼면 $0$ 이다. 극이 두 개뿐인 유리함수에서는 넷째 열이 $0$ 이 되어 표가 끝난다.

# 정의

멱급수 $f(z)=\sum\_{n\ge 0}c\_nz^n$ 의 계수가 $0$ 이 아니라 한다. 모든 $n$ 에서 $e\_0^{(n)}=0$, $q\_1^{(n)}=c\_{n+1}/c\_n$ 으로 두고, $k=1,2,\dots$ 에 대해 다음 두 마름모 규칙(rhombus rules)으로 표를 채운 것이 **qd 표(qd table)** 다.

$$
e\_k^{(n)}=q\_k^{(n+1)}-q\_k^{(n)}+e\_{k-1}^{(n+1)},\qquad q\_{k+1}^{(n)}=q\_k^{(n+1)}\frac{e\_k^{(n+1)}}{e\_k^{(n)}}
$$

첫 규칙은 차, 둘째 규칙은 몫이라 이 이름이 붙었다. 각 규칙은 표에서 마름모를 이루는 네 값 사이의 관계다.

# 성질

## 극의 계산

**정리(Rutishauser, 1954).** $f$ 가 원판 $\vert z\vert\lt R$ 에서 유리형이고 그 안의 극이 $\vert z\_1\vert\lt\vert z\_2\vert\lt\cdots$ 를 만족하면, $\vert z\_k\vert\lt R$ 인 $k$ 마다 다음이 성립한다[^1][^2].

$$
\lim\_{n\to\infty}q\_k^{(n)}=\frac1{z\_k}
$$

$\vert z\_k\vert\lt\vert z\_{k+1}\vert$ 이면 $e\_k^{(n)}$ 은 대략 $\vert z\_k/z\_{k+1}\vert^n$ 의 속도로 $0$ 으로 간다. 직관 절에서 $e\_1^{(n)}$ 이 반복마다 약 $\frac12$ 배 이하로 줄어든 것이 $\vert z\_1/z\_2\vert=\frac12$ 다.

## Hankel 행렬식

$H\_k^{(n)}=\det\bigl(c\_{n+i+j}\bigr)\_{i,j=0}^{k-1}$ 로 두고 $H\_0^{(n)}=1$ 로 두면 다음이 성립한다[^2].

$$
q\_k^{(n)}=\frac{H\_k^{(n+1)}H\_{k-1}^{(n)}}{H\_k^{(n)}H\_{k-1}^{(n+1)}}
$$

$k=1$ 이면 $c\_{n+1}/c\_n$ 이다. 마름모 규칙은 이 행렬식들이 만족하는 항등식을 몫과 차로 옮긴 것이고, 행렬식을 직접 계산하지 않고 극을 얻게 한다.

## 연분수

표의 첫 행 $q\_k=q\_k^{(0)}$, $e\_k=e\_k^{(0)}$ 은 $f$ 의 [연분수](continued-fractions.md) 전개의 계수다[^2].

$$
f(z)=\cfrac{c\_0}{1-\cfrac{q\_1z}{1-\cfrac{e\_1z}{1-\cfrac{q\_2z}{1-\cdots}}}}
$$

직관 절에서 $c\_0=1$, $q\_1=1.5$, $e\_1=-\frac13$, $q\_2=\frac13$, $e\_2=0$ 이고, 이 연분수를 계산하면 $1/(1-1.5z+0.5z^2)$ 이 되어 $f$ 와 같다.

## LR 알고리즘과의 관계

$q\_k^{(n)}$ 을 대각에, $1$ 을 위 대각에 둔 위 이중대각행렬 $R^{(n)}$ 과, $1$ 을 대각에, $e\_k^{(n)}$ 을 아래 대각에 둔 아래 이중대각행렬 $L^{(n)}$ 을 만든다. 마름모 규칙은 $R^{(n)}L^{(n)}=L^{(n+1)}R^{(n+1)}$ 을 성분으로 적은 것이다. 그래서 첨자 $n$ 을 하나 올리는 것이 삼중대각행렬 $L^{(n)}R^{(n)}$ 에 [LR 알고리즘](lr-algorithm.md)을 한 걸음 쓴 것이고, $q\_k^{(n)}$ 이 그 행렬의 고윳값으로 간다[^1].

# 활용

- 다항식의 근. $1/p(z)$ 의 계수에서 표를 만들면 $q\_k^{(n)}$ 이 $p$ 의 근의 역수로 간다. Rutishauser 는 근을 미리 알지 못할 때 [Newton 법](newton-method.md)의 시작값을 이렇게 얻었다.
- [dqds 알고리즘](dqds-algorithm.md). 고윳값 계산에서는 마름모 규칙의 뺄셈을 없앤 판본이 쓰이고, 이중대각행렬의 특이값을 높은 상대 정확도로 구한다.
- Padé 근사. 첫 행에서 연분수를 끊으면 $f$ 의 Padé 근사가 나오고, [Borel–Padé 재합산](borel-pade.md)처럼 극의 위치로 급수를 이어 붙이는 계산에 쓴다.

[^1]: H. Rutishauser, "Der Quotienten-Differenzen-Algorithmus", *Zeitschrift für angewandte Mathematik und Physik* 5 (1954), 233–251.
[^2]: P. Henrici, *Applied and Computational Complex Analysis, Volume 1*, Wiley, 1974, Chapter 7.

# 연관 문서

## 선수지식

- [LR 알고리즘](lr-algorithm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #complex_analysis #algorithms
