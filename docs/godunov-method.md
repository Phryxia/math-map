# Godunov 방법

# 개요

**Godunov 방법(Godunov's method)** 은 보존 법칙을 격자 위에서 풀 때, 칸마다 평균값만 들고 있다가 이웃한 두 칸 사이에서 생기는 [Riemann 문제](riemann-problem.md)를 정확히 풀어 칸 경계를 지나는 양을 계산하는 방법이다. 차가 빽빽한 구간 뒤에 빈 도로가 이어질 때처럼 값이 한 자리에서 끊기면, 미분을 차분으로 바꾸는 방법은 끊긴 자리에서 미분이 없어 근거를 잃는다. Godunov 방법은 끊긴 자리마다 두 상수 상태의 정확한 해를 써서, 칸에 들어오고 나가는 양을 수지 계산으로 맞춘다.

# 직관

Burgers 방정식 $u\_t+(u^2/2)\_x=0$ 을 칸 너비 $h=1$, 시간 간격 $k=0.25$ 로 푼다. 칸 $j\le 0$ 의 평균값은 $2$, 칸 $j\ge 1$ 의 평균값은 $0$ 이다.

칸 $j$ 의 값은 칸의 왼쪽 경계로 들어오는 양에서 오른쪽 경계로 나가는 양을 뺀 만큼 바뀐다. 경계를 지나는 양은 경계 양쪽 값으로 정해지는 Riemann 문제의 해를 경계 위에서 읽어 얻는다.

- 칸 $-1$ 과 $0$ 사이는 양쪽이 모두 $2$ 라 해가 $2$ 이고, 지나는 양은 $f(2)=2$ 다.
- 칸 $0$ 과 $1$ 사이는 $2$ 에서 $0$ 으로 떨어지는 충격파다. 속도는 $(2+0)/2=1\gt 0$ 이라 경계 위의 값은 왼쪽 상태 $2$ 이고, 지나는 양은 $2$ 다.
- 칸 $1$ 과 $2$ 사이는 양쪽이 $0$ 이라 지나는 양이 $0$ 이다.

한 걸음 뒤 칸 $0$ 은 $2-0.25(2-2)=2$, 칸 $1$ 은 $0-0.25(0-2)=0.5$ 다. 참해의 충격파는 시간 $0.25$ 동안 칸 $1$ 의 $1/4$ 까지 들어가므로 칸 $1$ 의 참 평균도 $2\cdot\frac14=0.5$ 다.

# 정의

## 유한 부피 갱신

보존 법칙 $u\_t+f(u)\_x=0$ 의 칸 $\lbrack x\_{j-1/2},x\_{j+1/2}\rbrack$ 에서의 평균을 $U^n\_j$ 라 한다. 다음 꼴의 갱신을 **보존형(conservative)** 차분 방법이라 하고, $F\_{j+1/2}$ 를 **수치 플럭스(numerical flux)** 라 한다.

$$
U^{n+1}\_j=U^n\_j-\frac{k}{h}\bigl(F\_{j+1/2}-F\_{j-1/2}\bigr)
$$

모든 칸을 더하면 경계 플럭스가 서로 지워지므로 $\sum\_jU\_j$ 가 걸음마다 보존된다.

## Godunov 플럭스

$u(x,t\_n)$ 을 칸마다 상수 $U^n\_j$ 로 놓고 이웃한 두 칸 사이의 Riemann 문제를 푼다. 그 해를 경계 $x\_{j+1/2}$ 위에서 읽은 값을 $u^\ast(U^n\_j,U^n\_{j+1})$ 이라 하고 $F\_{j+1/2}=f(u^\ast)$ 로 둔 방법을 **Godunov 방법** 이라 한다.[^1]

Burgers 방정식에서 $u\_l\gt u\_r$ 이면 충격파 속도 $s=(u\_l+u\_r)/2$ 의 부호로 $u^\ast$ 가 $u\_l$ 이나 $u\_r$ 이다. $u\_l\le u\_r$ 이면 희박파이고, $u\_l\le 0\le u\_r$ 일 때 $u^\ast=0$ 이다. 직관 절의 가운데 경계는 $u\_l=2$, $u\_r=0$, $s=1$ 인 첫째 경우다.

# 성질

## 선형 방정식에서의 형태

$f(u)=au$($a\gt 0$)이면 Riemann 문제의 해가 경계 위에서 왼쪽 상태라 $F\_{j+1/2}=aU\_j$ 이고, Godunov 방법은 [CFL 조건](cfl-condition.md)(Courant–Friedrichs–Lewy condition) 문서의 바람 위쪽 차분과 같다. 그래서 1 차 정확도이고, [Godunov 정리](godunov-theorem.md)의 단조 방법에 든다.

## 시간 간격의 조건

한 경계에서 나온 파가 이웃 경계에 닿으면 그 경계 위의 값이 상수라는 가정이 깨진다. 그래서 모든 파의 속도 $\lambda$ 에 대해 $\vert\lambda\vert k/h\le 1$ 을 둔다.[^2] 직관 절은 최대 속도가 $2$ 라 $\nu=0.5$ 다.

## 수렴과 엔트로피 해

Godunov 방법은 스칼라 보존 법칙에서 단조이고, 따라서 [엔트로피 해](entropy-solutions.md)로 수렴한다.[^3] 보존형이므로 충격파의 속도도 Rankine–Hugoniot 조건(Rankine–Hugoniot condition)대로 맞게 나온다. 보존형이 아닌 방법은 충격파를 틀린 속도로 옮길 수 있다.

## 근사 Riemann 풀이

연립 방정식에서는 Riemann 문제를 정확히 푸는 데 비선형 방정식의 반복 계산이 든다. [Roe 풀이](roe-solver.md)는 $Df$ 를 두 상태의 평균 행렬로 바꾸어 선형 Riemann 문제를 풀고, [HLL 풀이](hll-solver.md)(Harten–Lax–van Leer solver)는 가장 빠른 두 파 사이를 한 상수 상태로 놓는다.[^2]

# 활용

- 기체 역학. 압축성 Euler 방정식의 충격파 관 문제와 초음속 흐름을 Godunov 방법과 근사 Riemann 풀이로 계산한다.
- 고해상도 방법의 바탕. 칸 안의 값을 기울기가 있는 직선으로 바꾸고 [전체 변동 감소 방법](tvd-schemes.md)의 제한자로 기울기를 줄인 MUSCL(monotone upstream-centered schemes for conservation laws) 방법은 Godunov 방법을 2 차로 올린 것이다.
- 교통 흐름과 얕은 물. 차량 밀도의 LWR(Lighthill–Whitham–Richards) 모형과 얕은 물 방정식의 댐 붕괴 문제를 같은 플럭스로 계산한다.

[^1]: S. K. Godunov, "A difference method for numerical calculation of discontinuous solutions of the equations of hydrodynamics", *Matematicheskii Sbornik* 47(89) (1959), 271–306.

[^2]: R. J. LeVeque, *Finite Volume Methods for Hyperbolic Problems*, Cambridge University Press (2002), 4 장, 12 장, 15 장.

[^3]: M. G. Crandall, A. Majda, "Monotone difference approximations for scalar conservation laws", *Mathematics of Computation* 34 (1980), 1–21.

# 연관 문서

## 선수지식

- [Riemann 문제](riemann-problem.md)
- [CFL 조건](cfl-condition.md)

## 더 알아보기

- [Roe 풀이](roe-solver.md)
- [HLL 풀이](hll-solver.md)

#functional_analysis #analysis #computation
