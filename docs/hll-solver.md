# HLL 풀이

# 개요

**HLL 풀이(Harten–Lax–van Leer solver)** 는 [Godunov 방법](godunov-method.md)의 칸 경계에서 생기는 [Riemann 문제](riemann-problem.md)의 해를, 가장 느린 파와 가장 빠른 파 사이의 상수 상태 하나로 근사하는 방법이다. 기체의 Riemann 해에는 파가 셋 이상 있고 그 사이 상태를 정확히 구하려면 비선형 방정식을 반복해 풀어야 하는데, 경계 플럭스에 필요한 것은 경계 위의 값 하나뿐이다. HLL 풀이는 양 끝 파의 속도만 어림하고 보존 법칙을 적분해 가운데 상태를 닫힌 식으로 얻는다.

# 직관

Burgers 방정식 $u\_t+(u^2/2)\_x=0$ 에서 경계 왼쪽이 $u\_l=-1$, 오른쪽이 $u\_r=1$ 이라 한다. 정확한 해는 값이 $-1$ 에서 $1$ 까지 퍼지는 희박파이고, 파의 속도는 $-1$ 부터 $1$ 까지다.

시각 $t$ 에 구간 $\lbrack -t,t\rbrack$ 안의 양을 센다. 처음 양은 $-t+t=0$ 이고, 왼쪽 끝으로 들어온 양과 오른쪽 끝으로 나간 양은 같은 크기라 구간 안의 평균은 $0$ 이다. 이 평균을 가운데 상태로 놓는다. [Roe 풀이](roe-solver.md)는 같은 두 상태를 서 있는 끊김으로 근사했지만, 이 근사는 값을 구간 전체에 퍼뜨린다.

# 정의

## 가운데 상태

보존 법칙 $u\_t+f(u)\_x=0$ 의 Riemann 문제에서 파의 속도가 모두 $S\_L$ 과 $S\_R$ 사이에 있다고 어림한다. 직사각형 $\lbrack S\_Lt,S\_Rt\rbrack\times\lbrack 0,t\rbrack$ 에서 보존 법칙을 적분하면 그 안의 평균 상태가 다음과 같다.

$$
u^\ast=\frac{S\_Ru\_r-S\_Lu\_l-\bigl(f(u\_r)-f(u\_l)\bigr)}{S\_R-S\_L}
$$

직관 절에서 $S\_L=-1$, $S\_R=1$ 이고 $f(u\_l)=f(u\_r)=0.5$ 이므로 $u^\ast=(1-1-0)/2=0$ 이다.

## HLL 플럭스

$S\_L\lt 0\lt S\_R$ 일 때 경계 플럭스를 다음으로 둔다. $S\_L\ge 0$ 이면 $f(u\_l)$, $S\_R\le 0$ 이면 $f(u\_r)$ 이다. 이 플럭스를 쓴 Godunov 꼴 방법을 **HLL 풀이** 라 한다.[^1]

$$
F=\frac{S\_Rf(u\_l)-S\_Lf(u\_r)+S\_LS\_R(u\_r-u\_l)}{S\_R-S\_L}
$$

직관 절에서는 $F=(0.5+0.5-2)/2=-0.5$ 다. 정확한 Godunov 플럭스는 $f(0)=0$ 이다.

# 성질

## 속도의 어림

$S\_L$ 이 가장 느린 참 파의 속도 이하이고 $S\_R$ 이 가장 빠른 참 파의 속도 이상이면 가운데 상태 $u^\ast$ 는 정확한 해의 평균과 같다. 흔히 두 상태에서 Jacobi 행렬의 가장 작은 고윳값과 가장 큰 고윳값을 각각 취한다.[^2] Burgers 방정식에서는 $S\_L=\min(u\_l,u\_r)$, $S\_R=\max(u\_l,u\_r)$ 이다.

## 엔트로피와 양성

속도를 위 조건대로 잡으면 HLL 풀이를 쓴 방법은 [엔트로피 해](entropy-solutions.md)를 어기는 서 있는 끊김을 만들지 않는다. Euler 방정식에서는 밀도와 압력이 음수가 되지 않도록 $S\_L$, $S\_R$ 을 고를 수 있다.[^2] Roe 풀이처럼 엔트로피 수정을 따로 둘 필요가 없다.

## 접촉 불연속의 손실

가운데 상태가 하나라서 가운데의 접촉 불연속, 곧 밀도만 끊기고 속도와 압력이 이어지는 파가 걸음마다 퍼진다. 가운데에 상태를 둘 두어 접촉 불연속을 살린 판이 HLLC 풀이(HLL-contact solver)다.[^3]

# 활용

- 압축성 유체와 천체 유체 계산. 밀도가 $0$ 에 가까운 진공 근처에서도 음수 밀도 없이 계산한다.
- 상대론적 유체와 자기유체. 고유벡터 분해가 복잡한 방정식에서 양 끝 속도만 있으면 쓸 수 있다.
- 고해상도 방법. MUSCL(monotone upstream-centered schemes for conservation laws) 방법과 [전체 변동 감소 방법](tvd-schemes.md)의 경계 플럭스로 쓴다.

[^1]: A. Harten, P. D. Lax, B. van Leer, "On upstream differencing and Godunov-type schemes for hyperbolic conservation laws", *SIAM Review* 25 (1983), 35–61.

[^2]: B. Einfeldt, C. D. Munz, P. L. Roe, B. Sjögreen, "On Godunov-type methods near low densities", *Journal of Computational Physics* 92 (1991), 273–295.

[^3]: E. F. Toro, M. Spruce, W. Speares, "Restoration of the contact surface in the HLL-Riemann solver", *Shock Waves* 4 (1994), 25–34.

# 연관 문서

## 선수지식

- [Godunov 방법](godunov-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #computation
