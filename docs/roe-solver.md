# Roe 풀이

# 개요

**Roe 풀이(Roe solver)** 는 [Godunov 방법](godunov-method.md)에서 칸 경계마다 풀어야 하는 [Riemann 문제](riemann-problem.md)를, 두 상태에 맞춘 상수 행렬 하나의 선형 문제로 바꾸어 근사하는 방법이다. 기체의 밀도, 운동량, 에너지를 함께 계산하면 경계마다 정확한 Riemann 해를 얻는 데 비선형 방정식의 반복 풀이가 들고, 칸이 수백만 개면 이 계산이 대부분의 시간을 차지한다. Roe 풀이는 선형 문제의 해를 고유벡터 분해 한 번으로 적어 경계 플럭스를 반복 없이 계산한다.

# 직관

Burgers 방정식 $u\_t+(u^2/2)\_x=0$ 에서 경계 왼쪽이 $u\_l=2$, 오른쪽이 $u\_r=0$ 이라 한다. 선형 방정식 $u\_t+\hat a\thinspace u\_x=0$ 으로 바꾸려면 속도 $\hat a$ 를 하나 골라야 한다. 플럭스의 차이가 그 속도와 상태의 차이의 곱이 되도록 고른다.

$$
f(u\_r)-f(u\_l)=\hat a\thinspace(u\_r-u\_l),\qquad \hat a=\frac{u\_l+u\_r}{2}=1
$$

$\hat a=1\gt 0$ 이면 선형 문제의 해는 경계 위에서 왼쪽 상태이고, 경계 플럭스는 $f(2)=2$ 다. 정확한 Riemann 해도 속도 $1$ 인 충격파라 같은 값이 나온다.

$u\_l=-1$, $u\_r=1$ 이면 $\hat a=0$ 이고, 아래 정의의 식은 플럭스 $\frac12(0.5+0.5)=0.5$ 를 낸다. 정확한 해는 경계에서 값이 $0$ 인 희박파라 플럭스가 $0$ 이다. 선형 문제는 값이 퍼지는 희박파를 그대로 서 있는 끊김으로 바꾸어 틀린 플럭스를 낸다.

# 정의

## Roe 행렬

보존 법칙 $u\_t+f(u)\_x=0$ 의 두 상태 $u\_l$, $u\_r$ 에 대해 다음 세 조건을 만족하는 행렬 $\hat A=\hat A(u\_l,u\_r)$ 을 **Roe 행렬(Roe matrix)** 이라 한다.[^1]

- 실수 고윳값과 고유벡터의 기저를 갖는다.
- $\hat A(u,u)=Df(u)$ 다.
- $f(u\_r)-f(u\_l)=\hat A(u\_r-u\_l)$ 이다.

직관 절의 $\hat a=(u\_l+u\_r)/2$ 가 Burgers 방정식의 Roe 행렬이다.

## Roe 플럭스

$\hat A=R\Lambda R^{-1}$ 로 대각화하고 $\vert\hat A\vert=R\vert\Lambda\vert R^{-1}$ 로 둔다. 다음을 **Roe 플럭스** 라 한다.

$$
F(u\_l,u\_r)=\frac12\bigl(f(u\_l)+f(u\_r)\bigr)-\frac12\vert\hat A\vert(u\_r-u\_l)
$$

직관 절의 첫 경우는 $\frac12(2+0)-\frac12\cdot 1\cdot(0-2)=2$ 이고, 둘째 경우는 $\vert\hat a\vert=0$ 이라 $0.5$ 다.

# 성질

## 선형 Riemann 문제의 정확한 해

Roe 플럭스는 $u\_t+\hat Au\_x=0$ 의 Riemann 문제를 정확히 풀어 경계 위의 값으로 플럭스를 계산한 것과 같다. 셋째 조건 덕분에 하나의 충격파나 접촉 불연속으로 이어지는 두 상태에서는 Roe 플럭스가 정확한 Godunov 플럭스와 같다.[^1]

## 엔트로피 조건의 위반

고윳값 하나가 경계 양쪽에서 부호를 바꾸는 희박파, 곧 음속을 지나는 희박파에서는 직관 절의 둘째 경우처럼 [엔트로피 해](entropy-solutions.md)가 아닌 서 있는 끊김이 계산값에 남을 수 있다. Harten 의 엔트로피 수정(entropy fix)은 $0$ 에 가까운 $\vert\lambda\vert$ 를 작은 양수 $\delta$ 로 바꾸어 이 끊김을 퍼뜨린다.[^2]

## Euler 방정식의 Roe 평균

기체 역학의 Euler 방정식에서는 두 상태의 밀도 제곱근으로 가중한 평균 속도와 엔탈피로 만든 Jacobi 행렬이 세 조건을 만족한다.[^1]

$$
\hat v=\frac{\sqrt{\rho\_l}\thinspace v\_l+\sqrt{\rho\_r}\thinspace v\_r}{\sqrt{\rho\_l}+\sqrt{\rho\_r}}
$$

엔탈피의 평균도 같은 꼴이다. 고윳값과 고유벡터가 이 평균의 닫힌 식으로 적히므로 반복 계산이 필요 없다.

# 활용

- 압축성 유체 계산. 항공기 날개 둘레의 흐름, 충격파 관 문제에서 Godunov 방법의 경계 플럭스로 쓴다.
- 고해상도 방법. [전체 변동 감소 방법](tvd-schemes.md)과 MUSCL(monotone upstream-centered schemes for conservation laws) 방법이 셀 경계값을 만든 뒤 그 플럭스를 Roe 풀이로 계산한다.
- 얕은 물과 자기유체. 얕은 물 방정식과 자기유체역학 방정식에도 Roe 평균이 만들어져 같은 플럭스를 쓴다.

[^1]: P. L. Roe, "Approximate Riemann solvers, parameter vectors, and difference schemes", *Journal of Computational Physics* 43 (1981), 357–372.

[^2]: A. Harten, J. M. Hyman, "Self adjusting grid methods for one-dimensional hyperbolic conservation laws", *Journal of Computational Physics* 50 (1983), 235–269.

# 연관 문서

## 선수지식

- [Godunov 방법](godunov-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #computation
