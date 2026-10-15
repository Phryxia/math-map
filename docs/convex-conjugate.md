# 볼록 공액

# 개요

볼록 공액은 함수를 그 그래프를 아래에서 받치는 아핀 함수의 모임으로 바꿔 적는 변환이다. 함수 $f$ 에 $f^\ast(y)=\sup_x\thinspace(\langle y,x\rangle-f(x))$ 를 대응시킨다. 기울기 $y$ 를 넣으면 기울기가 $y$ 이면서 $f$ 를 아래에서 받치는 아핀 함수의 상수항에 음수 부호를 붙인 값이 나온다.

$f$ 가 볼록이고 하반연속이면 이 변환을 두 번 하면 제자리로 온다. 그래서 볼록 함수는 점별 값으로 적는 것과 받치는 아핀 함수로 적는 것이 같은 정보를 담는다.

# 직관

볼록 함수 $f(x)=x^2$ 의 그래프 아래로 직선을 긋는다. 기울기를 $2$ 로 고정하면 직선 $2x-c$ 가 포물선 아래에 있을 조건은 모든 $x$ 에서 $x^2\ge 2x-c$, 곧 $c\ge 2x-x^2$ 다. 우변을 $x$ 에 대해 최대화하면 $x=1$ 에서 $1$ 이다. 따라서 $c$ 는 $1$ 보다 작을 수 없고, 가장 높은 직선은 $2x-1$ 이며 $x=1$ 에서 포물선에 닿는다.

기울기를 $y$ 로 바꿔 같은 계산을 한다. 조건은 모든 $x$ 에서 $c\ge yx-x^2$ 이고 우변의 최댓값은 $x=y/2$ 에서 $y^2/4$ 다. 기울기 $y$ 마다 상수항의 하한 $y^2/4$ 가 하나씩 나오므로 $y\mapsto y^2/4$ 라는 함수를 얻는다.

이 함수가 원래 함수를 돌려준다. 기울기 $y$ 인 가장 높은 직선은 $yx-y^2/4$ 이고, 포물선은 이 직선 전부의 상한이다. 실제로 $\sup_y\thinspace(yx-y^2/4)$ 는 $y=2x$ 에서 최대가 되어 $x^2$ 이다. 기울기를 넣으면 상수항을 내놓는 이 대응을 **볼록 공액**(convex conjugate)이라 하고, 두 번 거치면 제자리로 오는 것이 아래의 Fenchel–Moreau 정리다.

# 정의

$f:\mathbb R^n\to\mathbb R\cup\lbrace +\infty\rbrace$ 의 **볼록 공액**은 다음 함수다.

$$
f^\ast(y)=\sup_{x\in\mathbb R^n}\thinspace(\langle y,x\rangle-f(x))
$$

$\langle\cdot,\cdot\rangle$ 는 $\mathbb R^n$ 의 내적이고 상한은 $+\infty$ 를 값으로 가질 수 있다. $f$ 의 **유효 정의역**은 $\mathrm{dom}\thinspace f=\lbrace x:f(x)\lt +\infty\rbrace$ 이고, 이것이 비어 있지 않고 $f$ 가 $-\infty$ 를 취하지 않으면 $f$ 를 **고유**하다고 한다. 상한은 $x\in\mathrm{dom}\thinspace f$ 에서만 취해도 같다.

이 변환을 Fenchel 공액 또는 Legendre–Fenchel 변환이라고도 부른다. $f$ 가 미분가능하고 강볼록이면 상한을 주는 $x$ 가 $\nabla f(x)=y$ 로 유일하게 정해지고, 그 $x$ 를 $x_y$ 라 할 때 $f^\ast(y)=\langle y,x_y\rangle-f(x_y)$ 다. 이 꼴이 고전적인 **Legendre 변환**이다.

## 지시함수와 지지함수

볼록집합 $C\subseteq\mathbb R^n$ 의 **지시함수** $\iota_C$ 는 $C$ 에서 $0$, 그 밖에서 $+\infty$ 인 함수다. 그 공액은 $C$ 의 **지지함수**다.

$$
\iota_C^\ast(y)=\sup_{x\in C}\thinspace\langle y,x\rangle=\sigma_C(y)
$$

집합을 함수로 바꾸는 이 두 쌍 덕분에 제약조건과 목적함수를 한 식에서 다룰 수 있다.

# 성질

## Fenchel–Young 부등식

모든 $x$ 와 $y$ 에서 다음이 성립한다.

$$
f(x)+f^\ast(y)\ge\langle x,y\rangle
$$

정의의 상한이 $x$ 에서의 값보다 크거나 같다는 것을 옮겨 쓴 것이다. 등호는 $y$ 가 $x$ 에서 $f$ 의 열미분 $\partial f(x)$ 에 들어갈 때, 곧 기울기 $y$ 인 받침 아핀 함수가 $x$ 에서 $f$ 에 닿을 때 성립한다. $f(x)=\vert x\vert^p/p$ 와 $f^\ast(y)=\vert y\vert^q/q$ 를 넣으면 Young 부등식 $\vert xy\vert\le\vert x\vert^p/p+\vert y\vert^q/q$ 가 되고, 이것이 이름의 유래다.

## 공액의 볼록성

$f$ 가 볼록인지와 무관하게 $f^\ast$ 는 볼록이고 하반연속이다. 각 $x$ 를 고정하면 $y\mapsto\langle y,x\rangle-f(x)$ 가 아핀이고, $f^\ast$ 는 이 아핀 함수들의 점별 상한이다. 아핀 함수의 그래프 아래 영역은 닫힌 반공간이고 그 교집합이 닫힌 볼록집합이므로 상한도 볼록이고 하반연속이다.

## Fenchel–Moreau 정리

$f$ 가 고유하고 볼록이고 하반연속이면 $f^{\ast\ast}=f$ 다.

$f^{\ast\ast}\le f$ 는 Fenchel–Young 부등식의 양변에서 $y$ 에 대한 상한을 취하면 나온다. 역방향은 분리 정리를 쓴다. 어떤 점에서 $f^{\ast\ast}(x_0)\lt f(x_0)$ 이면 $(x_0,f^{\ast\ast}(x_0))$ 이 $f$ 의 그래프 아래 영역 밖에 있으므로, 그 점과 영역을 가르는 닫힌 초평면이 있다. 이 초평면이 주는 아핀 함수는 $f$ 를 아래에서 받치면서 $x_0$ 에서 $f^{\ast\ast}(x_0)$ 보다 큰 값을 가지는데, $f^{\ast\ast}$ 는 받침 아핀 함수 전체의 상한이라 모순이다.

볼록이 아닌 $f$ 에서는 $f^{\ast\ast}$ 가 $f$ 의 폐볼록포, 곧 $f$ 를 아래에서 받치는 아핀 함수 전체의 점별 상한이다. 공액을 한 번 취하면 볼록이 아닌 정보는 복구되지 않는다.

## 기울기의 역대응

$f$ 가 $\mathbb R^n$ 전체에서 미분가능하고 강볼록이면 $\nabla f$ 가 전단사이고 $\nabla f^\ast=(\nabla f)^{-1}$ 이다.

상한을 주는 점이 $\nabla f(x)=y$ 로 유일하게 정해지므로 $\nabla f$ 는 단사이고, 강볼록성이 $\nabla f$ 의 상이 $\mathbb R^n$ 전체임을 준다. $f^\ast(y)=\langle y,x_y\rangle-f(x_y)$ 를 $y$ 로 미분하면 $x_y$ 에 대한 항이 $\nabla f(x_y)=y$ 때문에 상쇄되어 $\nabla f^\ast(y)=x_y$ 가 남는다.

## 강볼록성과 매끄러움

$f$ 가 $\mu$ 강볼록이면 $\nabla f^\ast$ 가 $1/\mu$ Lipschitz 이고, $\nabla f$ 가 $L$ Lipschitz 이면 $f^\ast$ 가 $1/L$ 강볼록이다. 위의 역대응에 두 조건을 각각 넣으면 나온다. 1차 최적화 방법의 수렴률에서 강볼록성과 기울기 Lipschitz 상수가 짝으로 등장하는 것이 이 대응 때문이다.

## 계산

| $f(x)$ | $f^\ast(y)$ | 조건 |
| --- | --- | --- |
| $\Vert x\Vert\_2^2/2$ | $\Vert y\Vert\_2^2/2$ | 유일한 고정점 |
| $\vert x\vert^p/p$ | $\vert y\vert^q/q$ | $p\gt 1$, $1/p+1/q=1$ |
| $e^x$ | $y\log y-y$ | $y\gt 0$, $y=0$ 에서 $0$, $y\lt 0$ 에서 $+\infty$ |
| $-\log x$ | $-1-\log(-y)$ | $x\gt 0$, $y\lt 0$ |
| $\Vert x\Vert$ | 쌍대 노름 단위공의 지시함수 | 임의의 노름 |
| $\iota_C(x)$ | $\sigma_C(y)$ | $C$ 볼록 |
| $af(x)$ | $af^\ast(y/a)$ | $a\gt 0$ |
| $f(x-b)$ | $f^\ast(y)+\langle y,b\rangle$ | 평행이동 |

제곱 노름의 절반은 자기 자신과 같은 유일한 함수다. 볼록이 아닌 예로 $f(x)=-x^2$ 를 넣으면 $f^\ast\equiv+\infty$ 이고 $f^{\ast\ast}\equiv-\infty$ 다. 아래에서 받치는 아핀 함수가 없는 함수에서는 공액이 정보를 전부 잃는다.

# 활용

- [Lagrange 쌍대성](lagrange-duality.md)의 쌍대함수. 제약을 쌍대변수로 옮긴 뒤 내부 최소화를 수행한 결과가 목적함수의 공액으로 적힌다. 분리 가능한 목적함수 $f(x)+g(x)$ 에서는 쌍대문제가 $\sup_y\thinspace(-f^\ast(y)-g^\ast(-y))$ 꼴이 되고, 강쌍대성이 성립하면 이 값이 $\inf_x\thinspace(f(x)+g(x))$ 와 같다.
- [근접 경사법](proximal-gradient-method.md)의 근접 연산자. 미분 불가능한 항의 근접 연산자는 그 항의 공액으로 적히고, Moreau 포락을 공액으로 보내면 제곱 노름을 더한 꼴이 된다. 연성 문턱이 $\ell^1$ 노름의 공액이 단위공 지시함수라는 데서 나온다.
- [집중부등식](concentration-inequalities.md)의 Chernoff 한계. 누율생성함수 $\psi(\lambda)=\log E\lbrack e^{\lambda X}\rbrack$ 의 상한을 $\lambda$ 에 대해 최적화한 결과가 $\psi^\ast$ 이고, 독립합에서 $\psi$ 가 항별로 더해지므로 공액의 계산이 항 단위로 분해된다.
- [대편차 원리](large-deviations.md)의 rate function. Cramér 정리는 실수값 표본평균의 rate function 이 로그 적률생성함수의 공액임을 말한다. 이 함수가 볼록이고 하반연속인 것은 위의 공액의 볼록성에서 바로 나온다.
- [최적 수송](optimal-transport.md)의 Kantorovich 쌍대성. 비용함수에 대한 $c$ 변환이 내적을 비용으로 바꾼 공액이고, 비용이 제곱거리이면 Brenier 정리의 수송 사상이 볼록 함수의 기울기로 나타난다.
- 지수족의 로그 분할함수와 엔트로피. 두 함수가 공액 쌍이고, 평균 매개변수와 자연 매개변수를 잇는 사상이 위의 기울기 역대응이다. [KL divergence](kl-divergence.md)(Kullback–Leibler divergence)의 Donsker–Varadhan 변분 표현도 같은 쌍에서 나온다.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)

## 더 알아보기

- [대편차 원리](large-deviations.md)

#optimization #analysis #probability #information_theory
