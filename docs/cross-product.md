# 벡터곱

# 개요

**벡터곱(cross product, 외적)** 은 3 차원 벡터 두 개에서 둘에 모두 수직이고 길이가 두 벡터가 만드는 평행사변형의 넓이인 벡터를 만드는 연산이다. 세 점 $(1,0,0)$, $(0,2,0)$, $(0,0,3)$ 을 지나는 평면의 방정식을 구하려면 평면에 수직인 방향이 있어야 하고, 세 점이 만드는 삼각형의 넓이를 구하려면 기울어진 두 변으로 넓이를 재야 한다. 벡터곱은 두 변 벡터 $(-1,2,0)$, $(-1,0,3)$ 에서 수직 방향 $(6,3,2)$ 를 바로 계산하고, 그 길이의 절반 $7/2$ 가 삼각형의 넓이다.

# 직관

평면 위의 두 변 $u=(-1,2,0)$, $v=(-1,0,3)$ 에 모두 수직인 $n=(a,b,c)$ 를 찾는다. [내적](inner-product-spaces.md)이 $0$ 이어야 하므로 $-a+2b=0$, $-a+3c=0$ 이고, $a=6t$, $b=3t$, $c=2t$ 꼴의 벡터가 전부 답이다. $t=1$ 로 두면 $n=(6,3,2)$ 이고, 평면은 $6x+3y+2z=6$ 이다. 세 점을 넣으면 모두 $6$ 이 나온다.

수직인 방향은 길이를 정하지 않아 $t$ 가 남았다. 벡터곱은 길이를 평행사변형의 넓이로 정한 하나의 답이다. 넓이는 $\vert u\vert\vert v\vert\sin\theta$ 이고, $\sin^2\theta=1-\cos^2\theta$ 를 내적으로 쓰면 다음이 나온다.

$$
\vert u\vert^2\vert v\vert^2-(u\cdot v)^2=5\cdot10-1^2=49
$$

평행사변형의 넓이는 $7$ 이고 $\vert(6,3,2)\vert=\sqrt{49}=7$ 이므로, $t=1$ 일 때의 $n$ 이 벡터곱이다. 삼각형의 넓이는 그 절반인 $7/2$ 다.

# 정의

$u=(u_1,u_2,u_3)$ 와 $v=(v_1,v_2,v_3)$ 의 벡터곱은 다음이다[^1].

$$
u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)
$$

성분은 다음 행렬에서 한 열을 지운 $2\times2$ [행렬식](determinants.md)에 부호를 번갈아 붙인 것이다.

$$
\begin{pmatrix}u_1&u_2&u_3\cr v_1&v_2&v_3\end{pmatrix}
$$

직관 절의 $u=(-1,2,0)$, $v=(-1,0,3)$ 에서 첫 성분은 $2\cdot3-0\cdot0=6$, 둘째는 $0\cdot(-1)-(-1)\cdot3=3$, 셋째는 $(-1)\cdot0-2\cdot(-1)=2$ 다.

# 성질

## 대수 법칙

벡터곱은 각 변수에 대해 선형이고 $v\times u=-(u\times v)$ 이다. 그래서 $u\times u=0$ 이다. 결합법칙은 성립하지 않는다. 표준기저에서 $(e_1\times e_1)\times e_2=0$ 이지만 $e_1\times(e_1\times e_2)=e_1\times e_3=-e_2$ 다.

## 수직성과 넓이

$u\times v$ 는 $u$ 와 $v$ 에 모두 수직이고, 길이는 다음 Lagrange 항등식(Lagrange's identity)으로 주어진다.

$$
\vert u\times v\vert^2=\vert u\vert^2\vert v\vert^2-(u\cdot v)^2
$$

그러므로 $\vert u\times v\vert=\vert u\vert\vert v\vert\sin\theta$ 이고, 이것은 $u$ 와 $v$ 가 만드는 평행사변형의 넓이다. $u\times v=0$ 은 두 벡터가 평행하다는 것과 동치다.

## 방향

$u$, $v$, $u\times v$ 를 차례로 늘어놓은 행렬의 행렬식은 $\vert u\times v\vert^2\ge0$ 이다. 그래서 $u$ 가 $v$ 쪽으로 돌 때 오른손 네 손가락을 감으면 엄지가 $u\times v$ 쪽을 향한다. 표준기저에서 $e_1\times e_2=e_3$, $e_2\times e_3=e_1$, $e_3\times e_1=e_2$ 다.

## 스칼라 삼중곱

$w\cdot(u\times v)$ 는 $w$, $u$, $v$ 를 행으로 하는 $3\times3$ 행렬의 행렬식이다. 첫 행으로 전개하면 정의의 성분이 그대로 여인수다. 그래서 그 절댓값은 세 벡터가 만드는 평행육면체의 부피이고, 값이 $0$ 이면 세 벡터는 한 평면 위에 있다.

## Jacobi 항등식

벡터곱은 다음을 만족한다.

$$
u\times(v\times w)+v\times(w\times u)+w\times(u\times v)=0
$$

$u\times(v\times w)=(u\cdot w)v-(u\cdot v)w$ 를 세 항에 쓰면 항이 둘씩 지워진다. 반대칭성과 이 항등식에 따라 $\mathbb R^3$ 은 벡터곱을 괄호로 하는 [Lie 대수](lie-algebras.md)이고, 이것은 $3\times3$ 반대칭 행렬의 Lie 대수 $\mathfrak{so}(3)$ 과 같다.

# 활용

- [면적분](surface-integral.md): 매개곡면 $r(u,v)$ 의 두 편미분의 벡터곱 $r_u\times r_v$ 가 곡면의 법선이고, 그 길이가 넓이 요소다.
- [Kelvin–Stokes 정리](kelvin-stokes-theorem.md): 벡터장의 회전(curl)은 형식적으로 $\nabla\times F$ 로 쓰이고, 성분이 벡터곱의 성분식과 같은 꼴이다.
- [외대수](exterior-algebra.md): 3 차원에서 $u\wedge v$ 는 세 성분을 갖고, 그 성분이 벡터곱의 성분과 같다. 쐐기곱 $u\wedge v$ 가 사는 공간과 벡터의 공간은 차원이 $3$ 일 때만 같으므로 벡터곱은 3 차원의 연산이다.
- 역학: 회전축에서 $r$ 만큼 떨어진 점에 힘 $F$ 를 주면 돌림힘이 $r\times F$ 이고, 각운동량은 $r\times p$ 다.

[^1]: J. Stewart, *Calculus: Early Transcendentals*, 8th ed., Cengage, 2015, 12 장 4 절.

# 연관 문서

## 선수지식

- [행렬식](determinants.md)
- [내적 공간](inner-product-spaces.md)

## 더 알아보기

- [면적분](surface-integral.md)
- [Euler 회전 정리](euler-rotation-theorem.md)

#linear_algebra #analysis #differential_geometry
