# 심플렉틱 Runge–Kutta 방법

# 개요

**심플렉틱 Runge–Kutta 방법(symplectic Runge–Kutta method)** 은 [Runge–Kutta 방법](runge-kutta-methods.md) 가운데 Hamilton 계에 적용했을 때 한 걸음의 사상이 심플렉틱인 것이다. 용수철에 매단 추를 고전 4 차 Runge–Kutta 방법으로 오래 계산하면, 걸음마다 에너지가 조금씩 줄어 진폭이 점점 작아진다. 계수가 $b\_ia\_{ij}+b\_ja\_{ji}=b\_ib\_j$ 를 만족하는 Runge–Kutta 방법은 이런 이차식의 보존량을 정확히 보존하고, 긴 시간 동안 에너지가 한쪽으로 흐르지 않는다.

# 직관

[조화 진동자](harmonic-oscillator.md) $q'=p$, $p'=-q$ 를 걸음 $h=0.5$ 로 $(q,p)=(1,0)$ 에서 푼다. 참해는 원 $q^2+p^2=1$ 을 돌고, 에너지 $\frac12(q^2+p^2)$ 가 일정하다.

[Euler 방법](euler-method.md)은 $(q,p)$ 를 $(q+hp,\thinspace p-hq)$ 로 보내므로 $q^2+p^2$ 에 $1+h^2=1.25$ 를 곱한다. 한 걸음 뒤 점은 $(1,-0.5)$ 다. 고전 4 차 Runge–Kutta 방법은 한 걸음에 $q^2+p^2$ 에 $0.99979$ 를 곱하고, 1000 걸음 뒤에는 처음의 $0.81$ 배가 된다.

두 방법 모두 원을 벗어나는 것은 새 점을 지금 점의 기울기들로만 정하기 때문이다. 기울기를 지금 점과 새 점의 중점에서 재면, 새 점 $(q\_1,p\_1)$ 은 다음 일차방정식의 해다.

$$
q\_1=q\_0+h\frac{p\_0+p\_1}{2},\qquad p\_1=p\_0-h\frac{q\_0+q\_1}{2}
$$

반지름의 변화는 다음처럼 쓴다.

$$
q\_1^2+p\_1^2-q\_0^2-p\_0^2=(q\_1-q\_0)(q\_1+q\_0)+(p\_1-p\_0)(p\_1+p\_0)
$$

위 일차방정식을 넣으면 두 항이 $h(p\_0+p\_1)(q\_0+q\_1)/2$ 와 그 반대 부호라 지워져 $0$ 이다. $(1,0)$ 에서 한 걸음 뒤 점은 $(0.8824,-0.4706)$ 이고 원 위에 있다. 이 방법을 음함수 중점 방법(implicit midpoint method)이라 한다.

# 정의

## 심플렉틱 사상

$\mathbb R^{2d}$ 의 사상 $\Phi$ 의 Jacobi 행렬 $D\Phi$ 가 다음 $J$ 에 대해 $D\Phi^{\mathsf T}JD\Phi=J$ 를 만족하면 $\Phi$ 를 **심플렉틱(symplectic)** 이라 한다.

$$
J=\begin{pmatrix}0&I\cr -I&0\end{pmatrix}
$$

Hamilton 계 $y'=J^{-1}\nabla H(y)$ 의 흐름은 심플렉틱이다. $d=1$ 에서는 이 조건이 $\det D\Phi=1$, 곧 넓이 보존이다.

## 심플렉틱 Runge–Kutta 방법

계수 $(a\_{ij},b\_i)$ 의 Runge–Kutta 방법이 모든 매끄러운 $H$ 에 대해 한 걸음 사상 $y\_0\mapsto y\_1$ 을 심플렉틱으로 주면 **심플렉틱 Runge–Kutta 방법** 이라 한다. 다음 조건을 **심플렉틱 조건(symplecticity condition)** 이라 한다.

$$
b\_ia\_{ij}+b\_ja\_{ji}=b\_ib\_j\qquad(1\le i,j\le s)
$$

직관 절의 음함수 중점 방법은 $s=1$, $a\_{11}=\frac12$, $b\_1=1$ 이고 $2b\_1a\_{11}=1=b\_1^2$ 을 만족한다. Euler 방법은 $a\_{11}=0$, $b\_1=1$ 이라 만족하지 않는다.

# 성질

## 이차 불변량의 보존

미분방정식 $y'=f(y)$ 가 대칭행렬 $C$ 의 이차식 $Q(y)=y^{\mathsf T}Cy$ 를 보존하면, 심플렉틱 조건을 만족하는 Runge–Kutta 방법도 $Q(y\_1)=Q(y\_0)$ 을 만족한다.[^1]

증명의 요지. 단의 값을 $Y\_i$ 라 하고 $Q(y\_1)-Q(y\_0)$ 을 단 $k\_i=f(Y\_i)$ 로 전개하면 다음이 남는다.

$$
2h\sum\_ib\_ik\_i^{\mathsf T}CY\_i+h^2\sum\_{i,j}\bigl(b\_ib\_j-b\_ia\_{ij}-b\_ja\_{ji}\bigr)k\_i^{\mathsf T}Ck\_j
$$

앞의 합은 보존 조건 $f(y)^{\mathsf T}Cy=0$ 으로, 뒤의 합은 심플렉틱 조건으로 $0$ 이다. 직관 절의 $q^2+p^2$ 가 이 경우다.

## 심플렉틱성

심플렉틱 조건을 만족하는 Runge–Kutta 방법은 심플렉틱이다.[^2] 한 걸음 사상의 미분 $D\Phi$ 는 변분 방정식에 같은 Runge–Kutta 방법을 쓴 결과이고, $D\Phi^{\mathsf T}JD\Phi$ 는 변분 방정식의 이차 불변량이다. 그래서 앞의 이차 불변량 보존에서 심플렉틱성이 나온다. 단마다 다른 계수가 중복되지 않는 방법에서는 역도 성립한다.

## 양함수 방법의 불가능성

$i=j$ 이면 조건은 $2b\_ia\_{ii}=b\_i^2$ 이다. 양함수 방법은 $a\_{ii}=0$ 이므로 모든 $b\_i=0$ 이어야 하고, 그러면 1 차 조건 $\sum\_ib\_i=1$ 이 깨진다. 그래서 양함수 Runge–Kutta 방법은 심플렉틱일 수 없고, 심플렉틱 Runge–Kutta 방법은 걸음마다 연립방정식을 푼다.

## Gauss 방법

$c\_i$ 를 $\lbrack 0,1\rbrack$ 위 [Gauss 구적](gaussian-quadrature.md)의 마디로 둔 $s$ 단 Gauss 방법은 심플렉틱 조건을 만족하고 차수가 $2s$ 다.[^1] $s=1$ 이 음함수 중점 방법이다. 같은 단 수의 Runge–Kutta 방법 가운데 차수가 가장 높다.

## 에너지 오차의 장시간 거동

심플렉틱 Runge–Kutta 방법의 수치해는 원래 Hamilton 함수와 $O(h^p)$ 만큼 다른 수정 Hamilton 함수의 흐름에 지수적으로 긴 시간 동안 가깝다. 그래서 에너지 오차가 $O(h^p)$ 에 머물고 시간에 따라 쌓이지 않는다.[^1] 수정 Hamilton 함수는 [수정 방정식](modified-equations.md)의 Hamilton 판이다. 직관 절의 고전 4 차 방법처럼 심플렉틱이 아닌 방법은 에너지 오차가 걸음 수에 비례해 쌓인다.

# 활용

- 천체 역학. 행성 궤도를 수백만 년 동안 계산할 때 Gauss 방법이나 [심플렉틱 적분기](symplectic-integrators.md)를 써서 궤도 긴반지름이 한쪽으로 흐르지 않게 한다.
- 분자 동역학. 원자들의 운동을 긴 시간 계산할 때 에너지 보존을 위해 심플렉틱 방법을 쓴다.
- 강체 회전과 이차 제약. 회전 행렬의 직교성 $R^{\mathsf T}R=I$ 처럼 이차식으로 적히는 제약이 있는 방정식에서 Gauss 방법이 제약을 정확히 보존한다.

[^1]: E. Hairer, C. Lubich, G. Wanner, *Geometric Numerical Integration*, 2nd ed., Springer (2006), IV.2 절, VI.4 절, IX 장.

[^2]: J. M. Sanz-Serna, "Runge–Kutta schemes for Hamiltonian systems", *BIT* 28 (1988), 877–883.

# 연관 문서

## 선수지식

- [Runge–Kutta 방법](runge-kutta-methods.md)
- [심플렉틱 적분기](symplectic-integrators.md)

## 더 알아보기

- [분할 Runge–Kutta 방법](partitioned-runge-kutta-methods.md)

#differential_geometry #analysis #computation
