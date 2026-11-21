# B 급수

# 개요

**B 급수(B-series)** 는 미분방정식의 해와 수치해법의 한 걸음을 걸음 크기 $h$ 의 거듭제곱으로 전개할 때, 각 항을 뿌리 있는 나무 하나와 계수 하나로 적는 급수다. [Runge–Kutta 방법](runge-kutta-methods.md)의 차수를 확인하려면 한 걸음 간 값을 $h$ 로 전개해 정확한 해의 [Taylor 정리](taylor-theorem.md) 전개와 맞추어야 하는데, 도함수가 높아질수록 $f$ 의 미분이 얽힌 항이 빠르게 늘어난다. B 급수는 그 항들을 나무로 세어, 차수 조건을 나무마다 수 하나를 맞추는 일로 바꾼다.

# 직관

$y'=f(y)$ 의 해를 $h$ 로 전개한다. $y''=f'f$ 이고, 한 번 더 미분하면 $f'f$ 의 두 자리에 곱의 미분이 들어가 다음 두 항이 나온다.

$$
y'''=f''(f,f)+f'f'f
$$

$f''(f,f)$ 는 $f$ 의 이계 도함수에 $f$ 두 개를 넣은 것이고, $f'f'f$ 는 $f$ 에 $f'$ 을 두 번 작용한 것이다. 그래서 해의 전개는 다음과 같다.

$$
y(h)=y+hf+\frac{h^2}{2}f'f+\frac{h^3}{6}\bigl(f''(f,f)+f'f'f\bigr)+O(h^4)
$$

중점 방법은 $k\_1=f(y)$, $k\_2=f(y+\frac h2k\_1)$, $y\_1=y+hk\_2$ 다. $k\_2$ 를 Taylor 전개하면 다음과 같다.

$$
k\_2=f+\frac h2f'f+\frac{h^2}{8}f''(f,f)+O(h^3)
$$

$y\_1=y+hk\_2$ 에 넣으면 다음이 나온다.

$$
y\_1=y+hf+\frac{h^2}{2}f'f+\frac{h^3}{8}f''(f,f)+O(h^4)
$$

$h^3$ 항에서 $f''(f,f)$ 의 계수는 $\frac18$ 로 참값 $\frac16$ 과 다르고, $f'f'f$ 는 아예 없다. 그래서 중점 방법의 차수는 $2$ 다.

$f''(f,f)$ 는 뿌리에서 가지 둘이 바로 갈라지는 나무로, $f'f'f$ 는 뿌리에서 한 줄로 두 칸 이어진 나무로 그릴 수 있다. 꼭짓점 하나가 $f$ 하나이고, 꼭짓점에 달린 자식의 수가 그 자리의 $f$ 를 몇 번 미분했는지다. 전개의 항을 이렇게 나무로 적은 급수가 B 급수다.

# 정의

## 뿌리 있는 나무

**뿌리 있는 나무(rooted tree)** 는 꼭짓점 하나를 뿌리로 정한 유한 나무다. 꼭짓점 하나뿐인 나무를 $\bullet$ 으로 쓰고, 나무 $t\_1,\dots,t\_m$ 의 뿌리를 새 뿌리에 이은 나무를 $\lbrack t\_1,\dots,t\_m\rbrack$ 로 쓴다. 꼭짓점의 수 $\vert t\vert$ 를 나무의 차수라 한다. 직관 절의 두 나무는 $\lbrack\bullet,\bullet\rbrack$ 와 $\lbrack\lbrack\bullet\rbrack\rbrack$ 다.

## 나무에 붙는 수와 함수

나무마다 세 가지를 재귀로 정한다. $F(t)$ 를 **기본 미분(elementary differential)** 이라 한다.

| 나무 | 기본 미분 | 밀도 | 대칭수 |
| --- | --- | --- | --- |
| $\bullet$ | $F=f$ | $\gamma=1$ | $\sigma=1$ |
| $\lbrack t\_1,\dots,t\_m\rbrack$ | $F=f^{(m)}(F(t\_1),\dots,F(t\_m))$ | $\gamma=\vert t\vert\gamma(t\_1)\cdots\gamma(t\_m)$ | $\sigma=\sigma(t\_1)\cdots\sigma(t\_m)\thinspace\mu\_1!\mu\_2!\cdots$ |

대칭수의 $\mu\_1,\mu\_2,\dots$ 는 $t\_1,\dots,t\_m$ 가운데 같은 나무가 몇 개씩 있는지다. $\lbrack\bullet,\bullet\rbrack$ 는 $\gamma=3$, $\sigma=2$ 이고, $\lbrack\lbrack\bullet\rbrack\rbrack$ 는 $\gamma=6$, $\sigma=1$ 이다.

## B 급수

나무 위의 함수 $a$ 에 대해 다음 형식적 급수를 **B 급수** 라 한다.[^1]

$$
B(a,y)=y+\sum\_{t}\frac{h^{\vert t\vert}}{\sigma(t)}a(t)F(t)(y)
$$

정확한 해는 $a(t)=1/\gamma(t)$ 인 B 급수다. 직관 절의 $h^3$ 항에서 두 나무의 계수가 각각 $1/(2\cdot 3)$ 과 $1/(1\cdot 6)$ 이고, 둘 다 $\frac16$ 이다.

## 기본 가중치

Butcher 표가 $(A,b,c)$ 인 Runge–Kutta 방법에 대해 **기본 가중치(elementary weight)** $\Phi(t)$ 를 다음과 같이 정한다. $\Phi\_i(\bullet)=1$ 이고 다음 재귀로 $\Phi\_i$ 를 정한 뒤 $\Phi(t)=\sum\_ib\_i\Phi\_i(t)$ 로 둔다.

$$
\Phi\_i(\lbrack t\_1,\dots,t\_m\rbrack)=\prod\_{k=1}^m\sum\_ja\_{ij}\Phi\_j(t\_k)
$$
 차수 $3$ 까지의 나무에서는 다음과 같다.

| 나무 | 기본 가중치 | 정확한 값 |
| --- | --- | --- |
| $\bullet$ | $\sum\_ib\_i$ | $1$ |
| $\lbrack\bullet\rbrack$ | $\sum\_ib\_ic\_i$ | $\frac12$ |
| $\lbrack\bullet,\bullet\rbrack$ | $\sum\_ib\_ic\_i^2$ | $\frac13$ |
| $\lbrack\lbrack\bullet\rbrack\rbrack$ | $\sum\_{i,j}b\_ia\_{ij}c\_j$ | $\frac16$ |

# 성질

## Runge–Kutta 방법의 B 급수

Runge–Kutta 방법의 한 걸음은 $a=\Phi$ 인 B 급수다.[^1] 중점 방법은 $b=(0,1)$, $a\_{21}=\frac12$, $c=(0,\frac12)$ 이므로 $\Phi(\lbrack\bullet,\bullet\rbrack)=\frac14$, $\Phi(\lbrack\lbrack\bullet\rbrack\rbrack)=0$ 이다. $\frac14$ 를 $\sigma=2$ 로 나눈 $\frac18$ 이 직관 절의 계수다.

## 차수 정리

Runge–Kutta 방법의 차수가 $p$ 인 것과, $\vert t\vert\le p$ 인 모든 나무에서 $\Phi(t)=1/\gamma(t)$ 인 것이 동치다.[^2] $f$ 를 일반적인 벡터장으로 두면 서로 다른 나무의 기본 미분은 일차독립이므로 조건을 하나도 줄일 수 없다. Runge–Kutta 방법 문서의 차수 조건 표가 차수 $4$ 까지의 나무 여덟 개에 대한 이 조건이다.

## 나무의 수

차수 $1,2,\dots,8$ 의 뿌리 있는 나무의 수는 $1,1,2,4,9,20,48,115$ 다. 차수 $p$ 를 얻으려면 이것을 $p$ 까지 더한 수만큼의 조건이 필요하고, 차수 $8$ 에서 $200$ 개다.

## 합성과 Butcher 군

B 급수 하나를 다른 B 급수의 $y$ 자리에 넣으면 다시 B 급수가 된다. 두 Runge–Kutta 방법을 차례로 한 걸음씩 쓰는 것이 이 합성이고, 합성된 계수는 나무를 잘라 낸 조각들의 계수의 곱으로 적힌다. 이 곱으로 나무 위 함수들이 이루는 군을 **Butcher 군(Butcher group)** 이라 한다.[^3]

# 활용

- 차수 조건의 설계. 양함수 방법의 Butcher 장벽(Butcher barrier)과 고차 방법의 계수 결정은 나무 조건의 연립 다항식을 푸는 일이다.
- [일반 선형 방법](general-linear-methods.md). 들어오는 벡터의 성분마다 B 급수를 두고 한 걸음 뒤의 B 급수와 맞추어 차수를 정의한다.
- [심플렉틱 적분기](symplectic-integrators.md)와 역방향 오차 해석. 수치 흐름이 어떤 [수정 방정식](modified-equations.md)의 정확한 흐름에 가까운지를 B 급수의 계수로 계산하고, [심플렉틱 Runge–Kutta 방법](symplectic-runge-kutta-methods.md)의 조건 $b\_ia\_{ij}+b\_ja\_{ji}=b\_ib\_j$ 를 나무의 성질로 적는다.
- 재규격화의 Hopf 대수. Connes 와 Kreimer 가 양자장론의 재규격화에서 쓴 나무의 Hopf 대수가 Butcher 군의 좌표환과 같다.[^4]

[^1]: E. Hairer, C. Lubich, G. Wanner, *Geometric Numerical Integration*, 2nd ed., Springer (2006), III.1 절.

[^2]: J. C. Butcher, "Coefficients for the study of Runge–Kutta integration processes", *Journal of the Australian Mathematical Society* 3 (1963), 185–201.

[^3]: J. C. Butcher, "An algebraic theory of integration methods", *Mathematics of Computation* 26 (1972), 79–106. E. Hairer, G. Wanner, "On the Butcher group and general multi-value methods", *Computing* 13 (1974), 1–15.

[^4]: A. Connes, D. Kreimer, "Hopf algebras, renormalization and noncommutative geometry", *Communications in Mathematical Physics* 199 (1998), 203–242.

# 연관 문서

## 선수지식

- [Runge–Kutta 방법](runge-kutta-methods.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #computation #combinatorics
