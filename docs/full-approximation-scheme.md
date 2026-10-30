# 완전 근사 저장

# 개요

**완전 근사 저장(full approximation scheme, FAS)** 은 [다중격자](multigrid.md)를 비선형 방정식 $A(u)=f$ 로 옮긴 것이다. 선형 방정식에서 다중격자는 고운 격자의 오차를 성긴 격자로 옮겨 풀지만, $u''=e^u$ 같은 비선형 방정식에서는 오차만 따로 만족하는 방정식이 없어 같은 방식이 통하지 않는다. FAS 는 성긴 격자에서 오차 대신 근사해 전체를 풀고, 두 격자의 이산화 차이를 보정항 하나로 더한다.

# 직관

선형 다중격자는 근사해 $u_h$ 의 잔차 $r_h=f_h-A_hu_h$ 를 성긴 격자로 보내 $A_{2h}e_{2h}=R\thinspace r_h$ 를 풀고, 얻은 $e_{2h}$ 를 보간해 더한다. 이 절차는 오차 $e$ 가 만족하는 방정식 $A_he_h=r_h$ 를 쓰는데, $A$ 가 비선형이면 오차가 만족하는 식이 달라진다.

$$
A_h(u_h+e_h)-A_h(u_h)=r_h
$$

좌변이 $e_h$ 만의 함수가 아니므로 $u_h$ 를 모르면 이 식을 성긴 격자로 옮길 수 없다.

격자점이 하나뿐인 $A(u)=u^2$, $f=4$ 로 보인다. 근사해 $u=1$ 의 잔차는 $r=4-1=3$ 이다. 선형일 때처럼 오차를 $A(e)=r$ 로 풀면 $e=\sqrt 3$ 이고 $u+e\approx 2.73$ 은 해가 아니다. 오차가 실제로 만족하는 식은 $(1+e)^2-1^2=3$, 곧 $2e+e^2=3$ 이어서 $e=1$ 이고, 이 식에 $u=1$ 이 들어 있다.

좌변이 $u_h$ 를 필요로 하니 $u_h$ 를 함께 보내고, 성긴 격자의 미지수를 오차 대신 해 전체로 두어 $v_{2h}\approx R\thinspace u_h+e_{2h}$ 를 푼다. 보정은 두 값의 차 $v_{2h}-R\thinspace u_h$ 를 보간해 더한다.

$$
A_{2h}(v_{2h})-A_{2h}(R\thinspace u_h)=R\thinspace r_h
$$

위의 예에서 이 식은 $v^2-1^2=3$ 이므로 $v=2$ 이고, 보정 $v-u=1$ 이 참 오차와 같다. 성긴 격자에서 오차를 풀지 않고 근사해 전체를 푸는 것이 이름의 뜻이다.

# 정의

## 성긴 격자 방정식

$R$ 을 제한(restriction), $P$ 를 보간(prolongation), $u_h$ 를 평활(smoothing) 뒤의 근사해라 하면 FAS 가 성긴 격자에서 푸는 **성긴 격자 방정식(coarse-grid equation)** 은

$$
A_{2h}(v_{2h})=R\thinspace\bigl(f_h-A_h(u_h)\bigr)+A_{2h}(R\thinspace u_h)
$$

이고 보정은

$$
u_h\thinspace \leftarrow\thinspace u_h+P\bigl(v_{2h}-R\thinspace u_h\bigr)
$$

이다. 직관 절의 예처럼 격자가 한 단계이고 $R$ 과 $P$ 가 항등사상이면 이 방정식은 $A(v)=f$ 자체가 되어, 성긴 격자에서 원래 문제를 푼다.

## 절차

```javascript
function fas(level, u, f) {
  if (isCoarsest(level)) return solveNonlinear(level, u, f)
  u = smoothNonlinear(level, u, f, nu1)              // 비선형 Gauss–Seidel
  const r = sub(f, apply(level, u))                  // 잔차
  const uc = restrict(level, u)                      // 해를 성긴 격자로
  const fc = add(restrict(level, r), apply(level - 1, uc))
  const vc = fas(level - 1, uc, fc)                  // 재귀
  u = add(u, prolong(level, sub(vc, uc)))            // 차만 보간해 더한다
  return smoothNonlinear(level, u, f, nu2)
}
```

`smoothNonlinear` 은 비선형 Gauss–Seidel 반복(nonlinear Gauss–Seidel iteration)이다. 격자점마다 그 점의 미지수에 대한 스칼라 방정식을 [Newton 법](newton-method.md) 한 걸음으로 푼다.

## tau 보정

$$
\tau=A_{2h}(R\thinspace u_h)-R\thinspace A_h(u_h)
$$

를 **tau 보정(tau correction)** 이라 한다. 성긴 격자 방정식은 $A_{2h}(v_{2h})=R\thinspace f_h+\tau$ 로도 쓴다.

$A_h$ 를 간격 $h$ 의 이계 차분 $-(u(x+h)-2u(x)+u(x-h))/h^2$ 로, $R$ 을 성긴 점의 값을 그대로 가져오는 주입(injection)으로 잡는다. $u_h=x^4$ 이면 $A_h(u_h)=-12x^2-2h^2$, $A_{2h}(R\thinspace u_h)=-12x^2-8h^2$ 이므로 $\tau=-6h^2$ 다. $u_h=x^2$ 이면 두 차분이 모두 $-2$ 여서 $\tau=0$ 이다.

# 성질

## 정확한 해의 보존

$u_h$ 가 정확한 해이면 $f_h-A_h(u_h)=0$ 이어서 성긴 격자 방정식의 우변이 $A_{2h}(R\thinspace u_h)$ 이고, $v_{2h}=R\thinspace u_h$ 가 그 식을 만족한다. 그래서 보정이 $0$ 이고, 성긴 격자의 해가 세밀 격자 해의 제한과 어긋나지 않는다.

## 선형 경우와의 일치

$A$ 가 선형이면 $A_{2h}(v_{2h})-A_{2h}(R\thinspace u_h)=A_{2h}(v_{2h}-R\thinspace u_h)$ 이므로 성긴 격자 방정식이 $A_{2h}e_{2h}=R\thinspace r_h$ 가 되고 보정도 같다. 선형 다중격자가 이 절차의 특수 경우다.

## 연산량

한 사이클의 연산량은 선형 다중격자와 같은 $O(n)$ 이다. 격자마다 드는 일이 등비급수를 이루는 것이 이유이며, 비선형 평활자가 격자점마다 Newton 한 걸음을 더 쓰는 것은 상수 배다.

## Newton 법과의 비교

Newton 법을 바깥에 두고 각 선형계를 다중격자로 푸는 방법과 견주면 다음과 같다. Newton 법은 반복마다 Jacobi 행렬(Jacobian matrix)을 만든다.

| 항목 | FAS | Newton 을 바깥에 둔 방법 |
| --- | --- | --- |
| Jacobi 행렬 | 만들지 않는다 | 반복마다 조립한다 |
| 수렴 차수 | 사이클마다 일정 인자 | 이차 |
| 초기값 민감도 | 낮다 | 높다 |
| 메모리 | 격자마다 해와 우변 | 행렬과 Krylov 기저 |

두 방법을 섞어 바깥 Newton 반복의 선형계를 다중격자로 풀 수도 있다.

## 비선형 평활자의 초기값

비선형 평활자는 해에서 멀면 수렴하지 않는다. [완전 다중격자](full-multigrid.md)로 성긴 격자부터 해를 만들어 올리면 각 격자에서 초기값이 이미 이산화 오차 규모이므로 이 문제가 줄어든다. 완전 다중격자와 FAS 를 함께 쓰는 구성이 표준이다.[^1]

# 활용

## 정상 상태 유체 계산

압축성 Euler 방정식(compressible Euler equations)과 Navier–Stokes 방정식(Navier–Stokes equations)의 정상 상태 해를 FAS 로 푼다. Jacobi 행렬을 조립하지 않아도 되는 점이 미지수가 많은 삼차원 계산에서 유리하다.[^2]

## 자유 경계 문제

자유 경계 문제(free boundary problem)는 경계의 위치가 미지수에 들어가는 문제다. 경계의 위치가 미지수에 들어가는 문제는 잔차만으로 오차 방정식을 세울 수 없다. 성긴 격자가 해 전체를 다루므로 경계 위치도 함께 갱신된다.

## tau 보정을 쓴 이산화 오차 추정

$\tau$ 는 두 격자의 이산화 차이이므로 그 크기가 국소 이산화 오차(local discretization error)의 추정값이 된다. 격자 세분을 어디에 할지 정하는 기준으로 쓴다.[^1] 격자 두 단계를 쓰지 않고 잔차에서 같은 기준을 얻는 것이 [후처리 오차 추정자](a-posteriori-error-estimator.md)다.

[^1]: A. Brandt, *Multi-level adaptive solutions to boundary-value problems*, Math. Comp. **31** (1977), 333–390. FAS 와 tau 보정이 이 논문에서 함께 나온다. 교과서 서술은 U. Trottenberg, C. Oosterlee, A. Schüller, *Multigrid*, Academic Press (2001) 5 장이다.
[^2]: A. Jameson, *Solution of the Euler equations for two dimensional transonic flow by a multigrid method*, Appl. Math. Comput. **13** (1983), 327–355.

# 연관 문서

## 선수지식

- [다중격자](multigrid.md)
- [Newton 법](newton-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation #optimization
