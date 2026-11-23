# Toda 흐름

# 개요

**Toda 흐름(Toda flow)** 은 대칭행렬 $L$ 을 $\dot L=\lbrack B(L),L\rbrack$ 로 움직이는 미분방정식이고, $B(L)$ 은 $L$ 의 대각 위 부분에서 대각 아래 부분을 뺀 반대칭행렬이다. [QR 알고리즘](qr-algorithm.md)은 행렬을 분해하고 인수를 바꿔 곱하는 일을 되풀이하는데, 왜 그 반복이 고윳값을 큰 것부터 대각에 늘어놓는지는 반복 한 번만 보아서는 알기 어렵다.

Toda 흐름은 그 반복을 연속 시간으로 이은 것이다. 정수 시각의 $e^{L(t)}$ 가 QR 반복의 행렬과 같고, 흐름을 따라 비대각 성분이 지수적으로 줄어드는 것이 QR 알고리즘의 수렴을 설명한다.

# 직관

$2\times 2$ 대칭행렬에서 흐름을 직접 푼다.

$$
L=\begin{pmatrix}b\_1&a\cr a&b\_2\end{pmatrix},\qquad B(L)=\begin{pmatrix}0&a\cr -a&0\end{pmatrix}
$$

$\lbrack B,L\rbrack=BL-LB$ 를 계산하면 $\dot b\_1=2a^2$, $\dot b\_2=-2a^2$, $\dot a=a(b\_2-b\_1)$ 이다. 위 대각 성분은 늘고 아래 대각 성분은 준다. 두 성분의 차가 벌어질수록 $a$ 는 더 빨리 줄어든다.

$L(0)$ 의 대각이 $0,0$ 이고 비대각이 $1$ 이면 고윳값은 $\pm 1$ 이다. 흐름에서 $b\_2=-b\_1$ 이고, 대각합과 행렬식이 보존되므로 $b\_1^2+a^2=1$ 이다. 그러면 $\dot b\_1=2(1-b\_1^2)$ 이고 다음이 해다.

$$
b\_1(t)=\tanh 2t,\qquad a(t)=\mathrm{sech}\thinspace 2t
$$

$t\to\infty$ 에서 $L(t)$ 는 $\mathrm{diag}(1,-1)$ 로 가고, 비대각 성분은 고윳값의 차 $2$ 를 지수로 하는 $2e^{-2t}$ 정도로 준다.

같은 $L(0)$ 에서 $e^{tL(0)}$ 의 첫 열은 $(\cosh t,\sinh t)$ 다. 이 열을 정규화한 $q\_1$ 과 그에 수직인 $q\_2$ 로 직교행렬 $Q(t)$ 를 만들면, $Q(t)^{\mathsf T}L(0)Q(t)$ 의 $(1,1)$ 성분은 $2\cosh t\sinh t/\cosh 2t=\tanh 2t$ 이다. 흐름의 해가 $e^{tL(0)}$ 의 QR 분해에서 나온다.

# 정의

대칭행렬 $L$ 에 대해 $L\_{\gt}$ 를 대각 위 성분만 남긴 행렬, $L\_{\lt}$ 를 대각 아래 성분만 남긴 행렬로 두고 $B(L)=L\_{\gt}-L\_{\lt}$ 라 한다. $B(L)$ 은 반대칭이다.

**Toda 흐름** 은 다음 미분방정식이다.

$$
\dot L=\lbrack B(L),L\rbrack=B(L)L-LB(L)
$$

$L$ 이 삼중대각이면 $L(t)$ 도 삼중대각으로 남는다. 대각 성분을 $b\_j$, 비대각 성분을 $a\_j$ 로 쓰면 다음이 된다.

$$
\dot b\_j=2\bigl(a\_j^2-a\_{j-1}^2\bigr),\qquad\dot a\_j=a\_j\bigl(b\_{j+1}-b\_j\bigr)
$$

이것은 [Lax 쌍](lax-pairs.md) 문서의 Toda 격자를 Flaschka 변수(Flaschka variables) $a\_j$, $b\_j$ 로 적은 것과 시간과 부호의 척도를 빼면 같다.

# 성질

## 등스펙트럼성

$\dot L=\lbrack B,L\rbrack$ 꼴이므로 $L(t)=Q(t)^{\mathsf T}L(0)Q(t)$ 인 직교행렬 $Q(t)$ 가 있고, $L(t)$ 의 고윳값은 시간에 따라 변하지 않는다. $\mathrm{tr}\thinspace L^k$ 가 모두 보존량이다.

## QR 분해로 쓴 해

$e^{tL(0)}=Q(t)R(t)$ 를 대각 성분이 양수인 상삼각 $R(t)$ 와 직교 $Q(t)$ 로 분해하면 다음이 Toda 흐름의 해다[^1][^2].

$$
L(t)=Q(t)^{\mathsf T}L(0)Q(t)
$$

증명의 요지. $\frac{d}{dt}e^{tL(0)}=L(0)e^{tL(0)}$ 에 분해를 넣고 $Q^{\mathsf T}$ 를 왼쪽에, $R^{-1}$ 을 오른쪽에 곱하면 $Q^{\mathsf T}\dot Q+\dot RR^{-1}=L(t)$ 다. $Q^{\mathsf T}\dot Q$ 는 반대칭이고 $\dot RR^{-1}$ 은 상삼각이므로, $L(t)$ 의 대각 아래 부분은 $Q^{\mathsf T}\dot Q$ 의 대각 아래 부분과 같다. 그래서 $Q^{\mathsf T}\dot Q=-B(L)$ 이고 $\dot L=\lbrack B(L),L\rbrack$ 이 나온다.

## QR 알고리즘과의 관계

$A\_0=e^{L(0)}$ 에서 시작해 $A\_k=Q\_kR\_k$ 로 분해하고 $A\_{k+1}=R\_kQ\_k$ 로 두는 이동 없는 QR 알고리즘을 돌리면 모든 정수 $k$ 에서 다음이 성립한다[^2].

$$
A\_k=e^{L(k)}
$$

$P\_k=Q\_0\cdots Q\_{k-1}$ 로 두면 반복의 정의에서 다음 두 식이 나온다.

$$
A\_k=P\_k^{\mathsf T}A\_0P\_k,\qquad e^{kL(0)}=A\_0^k=P\_k\bigl(R\_{k-1}\cdots R\_0\bigr)
$$

둘째 식이 $e^{kL(0)}$ 의 QR 분해이므로 앞 절의 $Q(k)$ 가 $P\_k$ 와 같다.

## 정렬

**정리(Moser, 1975).** $L(0)$ 이 삼중대각이고 비대각 성분이 모두 $0$ 이 아니면, 고윳값은 서로 다르고 $t\to\infty$ 에서 $L(t)$ 는 고윳값을 큰 것부터 늘어놓은 대각행렬 $\mathrm{diag}(\lambda\_1,\dots,\lambda\_n)$ 으로 수렴한다[^3]. 비대각 성분 $a\_j(t)$ 는 $e^{-(\lambda\_j-\lambda\_{j+1})t}$ 의 상수배로 줄어든다.

QR 알고리즘에서는 같은 수렴이 비율 $e^{\lambda\_{j+1}}/e^{\lambda\_j}$ 로 나타나고, 이것이 [거듭제곱법](power-iteration.md)의 수렴비와 같은 꼴이다.

## 이중 괄호 흐름

$N=\mathrm{diag}(n,n-1,\dots,1)$ 로 두면 삼중대각 $L$ 에서 $\lbrack L,N\rbrack=-B(L)$ 이므로 Toda 흐름은 $\dot L=\lbrack L,\lbrack L,N\rbrack\rbrack$ 이다. 이 꼴의 흐름을 Brockett 의 이중 괄호 흐름(double bracket flow)이라 하고, 같은 고윳값을 갖는 대칭행렬 위에서 $\mathrm{tr}(LN)$ 을 키우는 기울기 흐름이다[^4]. $\mathrm{tr}(LN)$ 은 큰 고윳값이 위에 놓일 때 가장 크므로 정렬이 일어난다.

# 활용

- QR 알고리즘의 분석. 이동 없는 QR 반복의 수렴과 비대각 성분의 감소율을 Toda 흐름의 점근 거동으로 읽는다. Deift, Nanda, Tomei 는 이 대응을 대칭 고윳값 문제의 다른 반복으로 넓혔다[^2].
- 적분가능계. Toda 격자의 질점이 $t\to\pm\infty$ 에서 서로 멀어지며 속도가 정렬되는 산란 거동이 행렬의 정렬과 같은 현상이다[^3].
- 연속 시간 계산. Brockett 은 이중 괄호 흐름으로 수열을 정렬하고 행렬을 대각화하고 선형계획을 푸는 미분방정식을 만들었다[^4].

[^1]: W. W. Symes, "The QR algorithm and scattering for the finite nonperiodic Toda lattice", *Physica D* 4 (1982), 275–280.
[^2]: P. Deift, T. Nanda, C. Tomei, "Ordinary differential equations and the symmetric eigenvalue problem", *SIAM Journal on Numerical Analysis* 20 (1983), 1–22.
[^3]: J. Moser, "Finitely many mass points on the line under the influence of an exponential potential — an integrable system", in *Dynamical Systems, Theory and Applications*, Lecture Notes in Physics 38, Springer, 1975, 467–497.
[^4]: R. W. Brockett, "Dynamical systems that sort lists, diagonalize matrices, and solve linear programming problems", *Linear Algebra and its Applications* 146 (1991), 79–91.

# 연관 문서

## 선수지식

- [QR 알고리즘](qr-algorithm.md)
- [Lax 쌍](lax-pairs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #analysis #algorithms #differential_geometry
