# Runge–Kutta 방법

# 개요

**Runge–Kutta 방법(Runge–Kutta method)** 은 상미분방정식의 해를 한 걸음씩 근사할 때, 걸음 안의 여러 점에서 기울기를 재어 가중평균한 기울기로 나아가는 방법이다. $x'=x$, $x(0)=1$ 을 걸음 $0.1$ 로 $t=1$ 까지 풀면, 걸음 왼끝의 기울기만 쓰는 Euler 방법은 $2.594$ 를 내어 참값 $e=2.718$ 과 $0.12$ 가 어긋난다. 걸음을 반으로 줄여도 오차는 반으로만 줄어 정확도를 얻는 데 계산이 많이 든다. 걸음 안의 기울기 네 개를 섞는 4 차 Runge–Kutta 방법은 같은 걸음으로 오차가 $0.000002$ 이다.

# 직관

[상미분방정식](ordinary-differential-equations.md) $x'=x$ 를 Euler 방법으로 풀면 한 걸음에 $x$ 가 $1+h$ 배가 된다. 참값은 다음 배율이므로 한 걸음마다 $h^2/2$ 규모가 모자란다.

$$
e^h=1+h+\frac{h^2}2+\frac{h^3}6+\frac{h^4}{24}+\cdots
$$

걸음 동안 해가 커지면서 기울기도 커지는데, 왼끝의 기울기만 써서 그 증가를 놓친 것이다. $h=0.1$ 로 열 걸음 가면 $1.1^{10}\approx 2.594$ 이고, $h=0.05$ 로 스무 걸음 가도 $1.05^{20}\approx 2.653$ 이다.

기울기가 걸음 동안 변해서 모자랐으니, 걸음 한가운데의 기울기를 쓴다. 먼저 Euler 방법으로 반 걸음 가서 가운데 값 $x+\tfrac h2x$ 를 어림하고, 그 점의 기울기 $(1+\tfrac h2)x$ 로 처음 점에서 한 걸음 간다. 한 걸음에 $1+h+h^2/2$ 배가 되어 $e^h$ 의 전개와 $h^2$ 항까지 맞는다. $h=0.1$ 로 열 걸음 가면 $1.105^{10}\approx 2.7141$ 이고 오차는 $0.0042$ 다.

가운데 기울기를 한 번 더 고쳐 재고 끝점의 기울기까지 재어 넷을 $1:2:2:1$ 로 평균하면, 한 걸음의 배율이 $e^h$ 의 전개를 $h^4$ 항까지 자른 것과 같아진다. 같은 열 걸음에 결과는 $2.7182797$ 이고 오차는 $0.0000021$ 이다. 이렇게 걸음 안에서 기울기를 여러 번 재어 섞는 방법을 Runge–Kutta 방법이라 부른다.

# 정의

## 단계와 계수

$x'=f(t,x)$ 를 걸음 $h$ 로 푼다. 수 $a\_{ij}$, $b_i$, $c_i$ $(1\le i,j\le s)$ 를 정하고, 한 걸음마다 다음 $k_1,\dots,k_s$ 를 구해 $x\_{n+1}$ 을 계산한다.

$$
\begin{aligned}
&k_i=f\Bigl(t_n+c_ih,\ x_n+h\sum\_{j=1}^s a\_{ij}k_j\Bigr),\qquad i=1,\dots,s\cr
&x\_{n+1}=x_n+h\sum\_{i=1}^s b_ik_i
\end{aligned}
$$

이것을 **$s$ 단 Runge–Kutta 방법($s$-stage Runge–Kutta method)** 이라 하고, $k_i$ 를 **단(stage)** 이라 한다. 보통 $c_i=\sum_j a\_{ij}$ 로 둔다. 계수는 다음 꼴의 **Butcher 표(Butcher tableau)** 로 적는다.

$$
\begin{array}{c|c}
c & A\cr
\hline
& b^{\mathsf T}
\end{array}
$$

$j\ge i$ 이면 $a\_{ij}=0$ 인 방법을 **양함수(explicit)** 방법이라 한다. 이때 $k_1,k_2,\dots$ 를 차례로 계산할 수 있다. 그렇지 않은 방법은 **음함수(implicit)** 방법이고, 한 걸음마다 $k_i$ 에 대한 연립방정식을 푼다.

## 대표적인 방법

직관 절의 세 방법은 다음 표를 갖는다. 왼쪽부터 Euler 방법($s=1$), 중점 방법(midpoint method, $s=2$), 고전 4 차 Runge–Kutta 방법(classical Runge–Kutta method, $s=4$)이다.

$$
\begin{array}{c|c}
0 & 0\cr
\hline
& 1
\end{array}
\qquad
\begin{array}{c|cc}
0 & 0 & 0\cr
\tfrac12 & \tfrac12 & 0\cr
\hline
& 0 & 1
\end{array}
\qquad
\begin{array}{c|cccc}
0 & 0&0&0&0\cr
\tfrac12 & \tfrac12&0&0&0\cr
\tfrac12 & 0&\tfrac12&0&0\cr
1 & 0&0&1&0\cr
\hline
& \tfrac16&\tfrac13&\tfrac13&\tfrac16
\end{array}
$$

양함수 방법의 한 걸음은 다음과 같다.

```javascript
// a: s×s 하삼각 계수, b, c: 길이 s. x 는 벡터, f(t, x) 는 벡터를 돌려준다.
function rkStep(f, t, x, h, a, b, c) {
  const s = b.length;
  const k = [];
  for (let i = 0; i < s; i++) {
    let y = x.slice();
    for (let j = 0; j < i; j++) y = y.map((v, m) => v + h * a[i][j] * k[j][m]);
    k.push(f(t + c[i] * h, y));
  }
  return x.map((v, m) => v + h * b.reduce((acc, bi, i) => acc + bi * k[i][m], 0));
}
```

## 차수

해가 충분히 매끄러운 $f$ 에서 정확한 해 $x(t_n)$ 으로부터 한 걸음 간 값과 $x(t\_{n+1})$ 의 차가 $O(h^{p+1})$ 이면, 방법의 **차수(order)** 가 $p$ 다. 직관 절의 세 방법은 차수가 $1$, $2$, $4$ 이고, 한 걸음의 배율이 $e^h$ 의 전개와 $h^p$ 항까지 맞은 것이 그 흔적이다.

# 성질

## 차수 조건

차수가 $p$ 일 조건은 계수에 대한 다항식 등식이다. $p\le 4$ 까지는 다음과 같고, 각 차수에서 더해지는 조건의 수는 $1,1,2,4$ 다.[^1]

| 차수 | 더해지는 조건 |
| --- | --- |
| 1 | $\sum_ib_i=1$ |
| 2 | $\sum_ib_ic_i=\tfrac12$ |
| 3 | $\sum_ib_ic_i^2=\tfrac13$, $\sum\_{i,j}b_ia\_{ij}c_j=\tfrac16$ |
| 4 | $\sum_ib_ic_i^3=\tfrac14$, $\sum\_{i,j}b_ic_ia\_{ij}c_j=\tfrac18$, $\sum\_{i,j}b_ia\_{ij}c_j^2=\tfrac1{12}$, $\sum\_{i,j,l}b_ia\_{ij}a\_{jl}c_l=\tfrac1{24}$ |

조건 하나는 정확한 해의 Taylor 전개와 방법의 전개에서 같은 미분 꼴의 계수를 맞춘 식이고, 미분 꼴은 뿌리 있는 나무(rooted tree)로 하나씩 셀 수 있다.[^1] 고전 4 차 방법의 둘째 조건은 다음과 같이 확인된다.

$$
\sum_ib_ic_i=\frac13\cdot\frac12+\frac13\cdot\frac12+\frac16\cdot 1=\frac12
$$

## 단의 수와 차수의 한계

양함수 $s$ 단 방법의 차수는 $s$ 이하다. $s\le 4$ 이면 차수 $s$ 를 얻을 수 있지만, 차수 $5$ 에는 $6$ 단, 차수 $6$ 에는 $7$ 단, 차수 $7$ 에는 $9$ 단이 필요하다.[^1] 이것을 Butcher 장벽(Butcher barrier)이라 한다. 고전 4 차 방법의 $s=4$ 가 단의 수와 차수가 같은 마지막 경우다.

## 안정성 함수

시험 방정식 $x'=\lambda x$ 에 $s$ 단 방법을 쓰면 $x\_{n+1}=R(h\lambda)x_n$ 이 되고, 이 $R$ 을 **안정성 함수(stability function)** 라 한다. $z=h\lambda$ 로 쓰면 다음이 나온다.

$$
R(z)=1+zb^{\mathsf T}(I-zA)^{-1}\mathbf 1
$$

양함수 방법이면 $A$ 가 대각성분이 $0$ 인 하삼각행렬이라 $R$ 이 다항식이다. 차수 $p=s\le 4$ 인 방법의 $R$ 은 $e^z$ 의 Taylor 전개를 $z^s$ 까지 자른 것이고, 직관 절의 배율이 그것이다. $\lbrace z:\vert R(z)\vert\le 1\rbrace$ 을 **안정 영역(stability region)** 이라 하고, 고전 4 차 방법의 안정 영역은 실수축에서 약 $\lbrack -2.785,0\rbrack$ 이다.

## A-안정성

$\mathrm{Re}\thinspace z\le 0$ 인 모든 $z$ 에서 $\vert R(z)\vert\le 1$ 이면 방법을 **A-안정(A-stable)** 이라 한다. 해가 줄어드는 방정식에서 걸음을 크게 잡아도 근사가 줄어든다는 뜻이다. 양함수 방법의 $R$ 은 상수가 아닌 다항식이라 $z\to-\infty$ 에서 $\vert R(z)\vert\to\infty$ 이므로, 양함수 방법은 A-안정일 수 없다.

$x'=-50x$ 를 $h=0.1$ 로 풀면 $z=-5$ 다. Euler 방법은 걸음마다 $-4$ 배, 고전 4 차 방법은 약 $13.7$ 배가 되어 참해 $e^{-50t}$ 와 달리 발산한다. 1 단 음함수 방법인 음함수 중점 방법(implicit midpoint method)은 $k_1=f(t_n+\tfrac h2,\thinspace x_n+\tfrac h2k_1)$ 이고, 안정성 함수가 다음과 같아 $-3/7$ 배로 줄어든다.

$$
R(z)=\frac{1+z/2}{1-z/2}
$$

$\vert 1+z/2\vert\le\vert 1-z/2\vert$ 는 $\mathrm{Re}\thinspace z\le 0$ 과 동치이므로 이 방법은 A-안정이다. $c_i$ 를 [Gauss 구적](gaussian-quadrature.md)의 마디로 둔 $s$ 단 Gauss 방법(Gauss method)은 차수가 $2s$ 이고 A-안정이며, 음함수 중점 방법은 그 $s=1$ 인 경우다.[^2]

# 활용

- 걸음 크기 조절. 같은 단을 공유하면서 차수가 다른 두 결과를 내는 내장 쌍(embedded pair)을 쓰고, 두 결과의 차로 오차를 어림해 걸음을 늘리거나 줄인다. 차수 $5$ 와 $4$ 를 짝지은 Dormand–Prince 쌍이 흔히 쓰인다.[^3]
- [강성 방정식](stiff-equations.md)(stiff equation). 빨리 줄어드는 성분과 천천히 변하는 성분이 섞인 계에서 양함수 방법은 안정 영역 때문에 걸음이 가장 빠른 성분에 묶인다. [열방정식](heat-equation.md)을 공간에서만 이산화한 계가 그런 예이고, 음함수 Runge–Kutta 방법이나 [선형 다단계 방법](linear-multistep-methods.md)의 후진 차분 공식(backward differentiation formula)을 쓴다.
- Hamilton 계의 장시간 적분. Gauss 방법은 [심플렉틱 적분기](symplectic-integrators.md)이고, 고전 4 차 방법은 심플렉틱이 아니라 긴 시간 동안 에너지가 한쪽으로 표류한다.[^2]
- [Painlevé 방정식](painleve-equations.md)의 수치해. 점근식으로 초깃값을 잡고 Runge–Kutta 방법으로 적분해 특정 해를 그린다.

[^1]: J. C. Butcher, *Numerical Methods for Ordinary Differential Equations*, 3rd ed., Wiley (2016), 3 장. 차수 조건과 뿌리 있는 나무, 양함수 방법의 단 수와 차수의 한계.
[^2]: E. Hairer, G. Wanner, *Solving Ordinary Differential Equations II: Stiff and Differential-Algebraic Problems*, 2nd ed., Springer (1996), IV.3 절과 IV.5 절. 안정성 함수, A-안정성, Gauss 방법. 심플렉틱성은 E. Hairer, C. Lubich, G. Wanner, *Geometric Numerical Integration*, 2nd ed., Springer (2006), VI.4 절.
[^3]: J. R. Dormand, P. J. Prince, "A family of embedded Runge–Kutta formulae", *Journal of Computational and Applied Mathematics* 6 (1980), 19–26.

# 연관 문서

## 선수지식

- [상미분방정식](ordinary-differential-equations.md)

## 더 알아보기

- [선형 다단계 방법](linear-multistep-methods.md)
- [강성 방정식](stiff-equations.md)

#analysis #computation #algorithms
