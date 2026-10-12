# 엔트로피 해

# 개요

엔트로피 해는 1차 보존법칙

$$
u\_t+\partial\_xf(u)=0
$$

의 불연속 해 가운데 하나를 가려내는 조건을 붙인 약한 해다. 특성곡선이 교차하면 연속인 해가 끊기고, 끊긴 함수를 허용하면 적분 보존량을 지키는 해가 여러 개 나온다.

점성 항을 붙인 $u\_t+\partial\_xf(u)=\varepsilon u\_{xx}$ 의 해는 각 $\varepsilon\gt 0$ 에서 하나이고, $\varepsilon\to0$ 의 극한에 남는 것이 하나다. 그 극한을 2계 항 없이 가려내는 부등식이 엔트로피 조건이며, [점성해](viscosity-solutions.md)에서 시험함수 접촉이 하는 일을 여기서는 볼록함수의 부호가 한다.

# 직관

1차 선형 방정식 $u\_t+au\_x=0$ 은 특성곡선으로 푼다. $x=at+x\_0$ 을 따라가면 $u$ 가 상수이므로 초기값 $g$ 에서 $u(x,t)=g(x-at)$ 다. 직선들이 평행하므로 평면의 모든 점을 정확히 하나가 지나고, 해가 전체 시간에 정의된다.

같은 방법을 $f(u)=u^2/2$ 인 Burgers 방정식 $u\_t+uu\_x=0$ 에 쓴다. 특성곡선의 기울기가 $u$ 자신이므로 $x\_0$ 에서 나온 직선은 $x=g(x\_0)t+x\_0$ 이고 그 위에서 $u=g(x\_0)$ 다. 초기값을 $x\lt 0$ 에서 $1$, $x\gt 0$ 에서 $0$ 으로 잡으면 왼쪽 직선들의 기울기가 $1$, 오른쪽 직선들이 수직이어서 $t\gt 0$ 의 삼각형 영역을 양쪽 직선이 함께 지난다. 그 점에 $u=1$ 과 $u=0$ 이 동시에 배정되므로 함숫값이 하나로 정해지지 않는다.

한 점에 두 값이 겹쳐서 막혔으니 연속함수를 포기하고 끊긴 함수를 받는다. 방정식의 미분꼴은 끊긴 자리에서 쓸 수 없지만 적분꼴은 쓸 수 있다. 구간 $\lbrack a,b\rbrack$ 에서 $\frac{d}{dt}\int\_a^bu\thinspace dx=f(u(a))-f(u(b))$ 이고, 끊김이 구간을 지나가는 동안 이 등식을 요구하면 끊김의 속도가 양쪽 값으로 정해진다. 위의 초기값에서는 속도 $1/2$ 로 움직이는 끊김 하나가 답이다.

그런데 초기값을 뒤집어 $x\lt 0$ 에서 $0$, $x\gt 0$ 에서 $1$ 로 잡으면 겹치는 점이 없고 대신 어느 직선도 지나지 않는 빈 영역이 생긴다. 끊김을 속도 $1/2$ 로 그대로 끌고 가는 함수도, 빈 영역을 기울기 $x/t$ 로 메우는 함수도 위의 적분 등식을 만족한다. 둘 가운데 하나를 고를 기준이 아직 없다.

점성 항을 붙인 $u\_t+uu\_x=\varepsilon u\_{xx}$ 는 각 $\varepsilon$ 에서 매끄러운 해가 하나이고, $\varepsilon\to0$ 에서 그 해가 빈 영역을 메우는 함수로 간다. 끊김을 끌고 가는 함수는 극한에 나타나지 않는다. 두 경우를 견주면 남는 끊김은 왼쪽 값이 오른쪽 값보다 큰 것뿐이고, 이 부등호가 2계 항 없이 극한을 가려낸다.

# 정의

## 약한 해

유계 가측함수 $u$ 가 보존법칙의 **약한 해**라는 것은, 모든 $\varphi\in C\_c^1(\mathbb R\times\lbrack0,\infty))$ 에서

$$
\int\_0^{\infty}\int\_{\mathbb R}\lbrack u\varphi\_t+f(u)\varphi\_x\rbrack\thinspace dx\thinspace dt+\int\_{\mathbb R}g(x)\varphi(x,0)\thinspace dx=0
$$

이 성립한다는 뜻이다. $u$ 가 $C^1$ 이면 분부적분으로 이 등식이 미분꼴 방정식과 같다.

## 엔트로피 해

볼록함수 $\eta$ 와 $q'=\eta'f'$ 를 만족하는 $q$ 의 짝 $(\eta,q)$ 를 **엔트로피 짝**이라 한다. 약한 해 $u$ 가 **엔트로피 해**라는 것은 모든 엔트로피 짝과 모든 $0\le\varphi\in C\_c^1$ 에서

$$
\int\_0^{\infty}\int\_{\mathbb R}\lbrack\eta(u)\varphi\_t+q(u)\varphi\_x\rbrack\thinspace dx\thinspace dt\ge0
$$

이 성립한다는 뜻이다. 분포의 부등식으로 쓰면 $\partial\_t\eta(u)+\partial\_xq(u)\le0$ 이다.

$\eta$ 가 매끄럽고 $u$ 도 매끄러우면 연쇄법칙으로 이 식이 등식이 되므로, 조건이 실제로 제약이 되는 곳은 끊긴 자리뿐이다. $\eta(u)=\vert u-c\vert$ 를 모든 $c\in\mathbb R$ 에서 쓰면 볼록 $\eta$ 전체를 쓴 것과 같은 조건이 되고, 이 꼴을 **Kružkov 엔트로피 조건**이라 한다.[^1]

# 성질

## Rankine-Hugoniot 조건

**정리.** $u$ 가 매끄러운 곡선 $x=s(t)$ 의 양쪽에서 $C^1$ 이고 곡선에서 극한값 $u\_l,u\_r$ 을 가지면, $u$ 가 약한 해인 것과

$$
s'(t)=\frac{f(u\_l)-f(u\_r)}{u\_l-u\_r}
$$

이 곡선 위에서 성립하는 것이 같다.

약한 해의 정의에서 $\varphi$ 의 지지집합을 곡선과 만나는 작은 원판으로 잡고 양쪽 영역에서 따로 분부적분한다. 양쪽의 미분꼴 방정식이 영역 적분을 없애고 곡선 위의 선적분만 남는데, 그 피적분함수가 $\lbrack f(u\_l)-f(u\_r)\rbrack-s'\lbrack u\_l-u\_r\rbrack$ 에 비례한다. 모든 $\varphi$ 에서 $0$ 이므로 위 등식이 나온다. ∎

끊김의 속도가 양쪽 값만으로 정해지므로, 적분 보존량이 지켜지는 끊김의 속도는 하나다. 이 조건은 어느 쪽 값이 큰지를 가리지 않는다.

## Lax 엔트로피 조건

**정리.** $f$ 가 볼록이면, Rankine-Hugoniot 조건을 만족하는 끊김이 엔트로피 조건을 만족하는 것과 $u\_l\gt u\_r$ 인 것이 같다.[^2]

$\eta(u)=\vert u-c\vert$ 를 끊김 위에서 계산하면 엔트로피 조건이 모든 $c$ 에서

$$
s'\lbrack\eta(u\_l)-\eta(u\_r)\rbrack\ge q(u\_l)-q(u\_r)
$$

가 된다. $f$ 가 볼록이면 이 부등식이 성립하는 것과 $f$ 의 그래프에서 $u\_l$ 과 $u\_r$ 을 잇는 현이 그 사이의 그래프보다 위에 있는 것이 같고, 볼록성에서 그것이 $u\_l\gt u\_r$ 과 같다. ∎

$u\_l\gt u\_r$ 인 끊김을 **충격파**라 한다. $u\_l\lt u\_r$ 인 자리에서는 끊김이 허용되지 않고, 대신 $x/t$ 만의 함수로 연속으로 메워지는 해가 들어간다. 이것을 **희박파**라 한다.

특성곡선으로 보면 충격파에는 양쪽에서 곡선이 들어오고 희박파에서는 곡선이 퍼져 나온다. 끊김을 시간을 거꾸로 돌려 풀 수 없게 만드는 것이 이 비대칭이고, 엔트로피 조건이 시간 방향을 고정한다.

## 유일성

**정리.** $f$ 가 국소 Lipschitz 이고 $g\in L^{\infty}\cap L^1$ 이면 엔트로피 해가 존재하고 하나다. 두 엔트로피 해 $u,v$ 는

$$
\Vert u(\cdot,t)-v(\cdot,t)\Vert\_{L^1}\le\Vert u(\cdot,0)-v(\cdot,0)\Vert\_{L^1}
$$

을 만족한다.[^1]

증명은 Kružkov 조건을 두 해에 대해 쓰고 $\eta(u)=\vert u-v\vert$ 의 부등식을 두 변수에서 겹쳐 적분하는 방식이다. 점성해의 비교 원리 증명에서 두 변수의 함수를 쓰는 것과 같은 구조다. ∎

엔트로피 해는 [유계변동 함수](bounded-variation.md)의 전변동을 늘리지 않는다. 충격파가 합쳐지면 끊김의 개수가 줄고 전변동이 감소하며, 희박파에서는 변동이 보존된다.

## Hamilton-Jacobi 방정식과의 대응

1차원에서 $u=\partial\_xw$ 로 두면 보존법칙이

$$
\partial\_t(\partial\_xw)+\partial\_xf(\partial\_xw)=0
$$

이고 $x$ 로 한 번 적분하면 $w\_t+f(w\_x)=0$ 이다. 보존법칙의 해를 적분한 함수가 Hamilton-Jacobi 방정식의 해다.

이 대응에서 엔트로피 해는 점성해로 간다. 충격파 조건 $u\_l\gt u\_r$ 은 $w\_x$ 가 끊김에서 감소한다는 뜻이고, 그것이 $w$ 가 그 점에서 위로 꺾인다는 뜻이다. 점성해 조건은 아래로 꺾인 점을 배제하므로 두 조건이 같은 해를 고른다.[^3]

$f$ 가 볼록이면 Hopf-Lax 공식이 $w$ 를 명시적으로 주고, 그것을 미분한 $u$ 가 Lax-Oleinik 공식이다.

# 활용

- [점성해](viscosity-solutions.md)의 1차원 대응이다. 점성해는 $w$ 의 꺾임 방향을 시험함수로 가려내고 엔트로피 해는 $u=w\_x$ 의 끊김 방향을 볼록함수로 가려낸다. 두 유일성 정리의 증명이 두 변수 함수의 최댓값을 쓰는 같은 구조다.
- [유계변동 함수](bounded-variation.md)가 해의 공간이 되는 자리다. 엔트로피 해는 전변동을 늘리지 않으므로 유계변동 함수의 공간에서 반군을 이루고, 끊김의 위치와 양쪽 극한값이 그 함수의 도약 부분으로 적힌다.
- [Schwartz 분포](schwartz-distributions.md)의 부등식으로 엔트로피 조건을 적는다. $\partial\_t\eta(u)+\partial\_xq(u)$ 는 함수가 아니라 측도이고, 그것이 음의 측도라는 것이 조건의 내용이다.
- [유한요소법](finite-element-method.md)과 달리 보존법칙의 수치해법은 적분꼴을 격자 칸마다 쓴다. 엔트로피 조건을 이산 꼴로 만족하는 흐름함수를 쓰면 극한이 엔트로피 해로 수렴하고, 조건을 빼면 끊김을 끌고 가는 쪽으로 수렴할 수 있다.[^2]

[^1]: Stanislav N. Kružkov, "First order quasilinear equations in several independent variables", *Mathematics of the USSR-Sbornik* 10 (1970), 217-243. $\vert u-c\vert$ 꼴 엔트로피 조건과 $L^1$ 수축에 따른 존재성과 유일성이 여기 있다.
[^2]: Randall J. LeVeque, *Finite Volume Methods for Hyperbolic Problems*, Cambridge University Press, 2002, 11 장과 12 장. Lax 엔트로피 조건, 충격파와 희박파의 구별, 수치해법의 엔트로피 조건을 다룬다.
[^3]: Lawrence C. Evans, *Partial Differential Equations*, 2판, American Mathematical Society, 2010, 3 장과 11 장. Hopf-Lax 공식, Lax-Oleinik 공식, 보존법칙과 Hamilton-Jacobi 방정식의 대응을 다룬다.

# 연관 문서

## 선수지식

- [점성해](viscosity-solutions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #optimization #measure_theory
