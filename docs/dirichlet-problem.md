# Dirichlet 문제

# 개요

**Dirichlet 문제(Dirichlet problem)** 는 영역의 경계에서 값을 지정하고 그 값을 갖는 [조화함수](harmonic-functions.md)를 안쪽에서 찾는 문제다. 금속판의 테두리 온도를 고정하고 오래 두었을 때 판 안의 온도 분포를 구하는 문제가 이 꼴이고, 원판이면 Poisson 적분(Poisson integral)으로 바로 풀리지만 구멍 뚫린 영역이나 $3$ 차원 영역에는 그런 공식이 없다. 일반 영역에서는 경계에서 지정한 값을 넘지 않는 함수들의 상한으로 후보 해를 만들고, 그 후보가 경계점마다 지정한 값으로 이어지는지를 따로 판정한다.

# 직관

원판에서는 Poisson 적분이 경계값 $g$ 에서 해를 직접 만든다. 일반 영역 $\Omega$ 에는 그런 적분식이 없다. 평면의 단순연결 영역이면 [Riemann 사상정리](riemann-mapping-theorem.md)의 사상으로 원판에 옮겨 풀 수 있지만, $\Omega$ 에 구멍이 있거나 차원이 $3$ 이상이면 이 방법이 통하지 않는다.

적분식을 못 만들면 해를 직접 쓰는 대신 아래에서 조여 간다. 경계에서 $g$ 를 넘지 않고, 각 점의 값이 그 점 둘레 구면 위의 평균 이하인 함수를 전부 모아 각 점에서 상한을 취한다. 이 상한 $u$ 는 안쪽에서 조화함수가 되고, 남는 물음은 $u$ 가 경계점 $\zeta$ 에서 $g(\zeta)$ 로 이어지느냐 하나다.

구멍 뚫린 원판 $0\lt \vert z\vert\lt 1$ 에서 원점에 $1$, 바깥 원에 $0$ 을 지정하면 이어지지 않는다. 원점 근방에서 유계인 조화함수는 원점까지 확장되고, 그 확장은 바깥 원에서 $0$ 이므로 원판 전체에서 $0$ 이다. 지정한 값 $1$ 은 버려진다. 한 점짜리 경계 성분에서는 $u$ 를 $g$ 쪽으로 끌어당길 함수가 없다.

# 정의

## Dirichlet 문제

유계 영역 $\Omega\subset\mathbb R^n$ 과 $g\in C(\partial\Omega)$ 에 대해 다음을 만족하는 $u$ 를 찾는 문제다.

$$
\Delta u=0 \thickspace \text{in}\thickspace \Omega,\qquad u\in C^2(\Omega)\cap C(\overline\Omega),\qquad u\vert\_{\partial\Omega}=g
$$

단위원판에서 $g(\cos\theta,\sin\theta)=\cos\theta$ 이면 $u(x,y)=x$ 가 해다. $x$ 는 조화이고 경계에서 $\cos\theta$ 다.

## 열조화함수

$\Omega$ 에서 상반연속인 $v:\Omega\to\lbrack -\infty,\infty)$ 가 모든 닫힌 공 $\overline B(x,r)\subset\Omega$ 에서 다음을 만족하면 **열조화함수(subharmonic function)** 다.

$$
v(x)\le\frac{1}{\vert \partial B(x,r)\vert}\int_{\partial B(x,r)}v\thinspace dS
$$

조화함수는 이 부등식이 등식인 경우다. 평면에서 $v(x,y)=x+x^2+y^2-1$ 은 $\Delta v=4\gt 0$ 이라 열조화이고, 단위원 위에서 $\cos\theta$ 와 같다. 열조화함수는 최대 원리(maximum principle)를 만족하고, 같은 경계값을 갖는 조화함수 아래에 놓인다. 위의 $v$ 는 원판 안에서 $x$ 보다 $1-x^2-y^2$ 만큼 작다.

## Perron 해

경계값 $g$ 에 대한 **Perron 족(Perron family)** 과 **Perron 해(Perron solution)** 를 다음으로 둔다.

$$
\mathcal S_g=\lbrace v \thickspace\text{열조화}: \limsup_{x\to\zeta}v(x)\le g(\zeta)\thickspace \forall\zeta\in\partial\Omega\rbrace,\qquad u(x)=\sup_{v\in\mathcal S_g}v(x)
$$

단위원판과 $g=\cos\theta$ 이면 앞의 $v$ 가 $\mathcal S_g$ 에 들고, 모든 원소가 $x$ 이하이며 $x$ 자신도 원소이므로 Perron 해는 $x$ 다.

## 장벽

경계점 $\zeta\in\partial\Omega$ 에서의 **장벽(barrier)** 은 $\Omega$ 에서 열조화인 $w\lt 0$ 으로서 $x\to\zeta$ 에서 $w(x)\to 0$ 이고, $\zeta$ 의 각 근방 밖에서는 $w$ 가 음의 상한을 갖는 것이다. 장벽이 있는 경계점을 **정칙점(regular point)** 이라 한다. 단위원판의 경계점 $\zeta=1$ 에서 $w(z)=\mathrm{Re}\thinspace z-1$ 은 원판에서 음수이고 조화이며, $z\to 1$ 일 때 $0$ 으로 가고 $1$ 의 근방 밖에서는 음의 상한을 가지므로 장벽이다.

# 성질

## Perron 해의 조화성

$\mathcal S_g$ 가 비어 있지 않고 위로 유계이면 $u=\sup\mathcal S_g$ 는 $\Omega$ 에서 조화다.[^1]

증명은 공 하나를 고정하고 그 안에서 Poisson 적분으로 바꿔치기하는 조작을 쓴다. 열조화함수 $v$ 를 공 안에서 그 경계값의 Poisson 적분으로 바꾸면 더 큰 열조화함수가 되므로 상한은 변하지 않는다. 상한에 수렴하는 함수열에 이 조작을 적용하고 Harnack 원리(Harnack's principle)로 극한을 취하면 그 공에서 조화다.

## 존재의 판정

$\partial\Omega$ 의 모든 점이 정칙이면 Perron 해가 $u\in C(\overline\Omega)$ 로 $g$ 를 경계값으로 갖는다. 장벽 $w$ 의 상수배를 $g(\zeta)$ 에 더하고 빼서 만든 두 함수가 $\zeta$ 근방에서 $u$ 를 위아래로 막으므로, $u$ 가 $g(\zeta)$ 로 이어진다.[^1]

정칙성은 $g$ 와 무관하게 영역만으로 정해진다. 어떤 경계점이 정칙이 아니면 그 점에서 경계값이 달성되지 않는 $g$ 가 존재한다.

## 정칙성의 충분조건

- 외부 공 조건(exterior sphere condition). $\zeta$ 에서 $\Omega$ 밖에 놓이고 $\zeta$ 에서만 $\overline\Omega$ 와 만나는 공이 있으면 $\zeta$ 는 정칙이다. $w(x)=\vert x-y\vert^{2-n}-R^{2-n}$ 꼴이 장벽이 된다.
- 외부 원뿔 조건(exterior cone condition). 꼭짓점이 $\zeta$ 인 원뿔이 $\Omega$ 밖에 놓이면 정칙이다. Lipschitz 경계가 이 조건을 만족한다.
- 평면에서는 $\zeta$ 를 포함하는 $\partial\Omega$ 의 연결 성분이 한 점이 아니면 정칙이다.

## 비정칙점의 예

구멍 뚫린 원판 $0\lt \vert z\vert\lt 1$ 의 원점은 비정칙이다. 경계 성분이 한 점이므로 위 평면 조건이 깨진다. $n\ge 3$ 에서는 경계 성분이 한 점이 아니어도 비정칙일 수 있고, 꼭짓점에서 지수적으로 가늘어지는 뾰족한 구멍인 Lebesgue 의 가시(Lebesgue spine)가 그 예다.[^1] 용량(capacity)으로 쓴 Wiener 기준(Wiener criterion)이 정칙성을 완전히 판정한다.[^2]

# 활용

- [Brown 운동](brownian-motion.md)의 확률적 해법. $\Omega$ 에서 출발한 경로가 처음 경계에 닿는 점의 $g$ 값을 평균하면 Perron 해와 같다. 경계점의 정칙성은 그 점에서 출발한 경로가 즉시 $\Omega$ 를 벗어난다는 조건과 같다.
- [무작위 걷기](random-walks.md)의 이산판. 격자에서 도달 확률과 전위가 이산 Laplace 방정식의 경계값 문제의 해다.
- [등각사상](conformal-mapping.md)과 Riemann 사상정리. 단순연결 영역에서 $\log\vert z-a\vert$ 의 경계값을 갖는 Dirichlet 문제를 풀면 [Green 함수](greens-function.md)가 나오고, 거기서 사상을 만든다.
- [균일화 정리](riemann-surfaces.md)의 증명이 곡면 위에서 같은 구성을 쓴다.

[^1]: David Gilbarg, Neil S. Trudinger, *Elliptic Partial Differential Equations of Second Order*, 2nd ed., Springer (1983), 2장 §2.8. Perron 방법, 장벽, 경계점의 정칙성과 Lebesgue 의 가시.

[^2]: Norbert Wiener, The Dirichlet problem, *Journal of Mathematics and Physics* 3 (1924), 127–146. 용량의 발산으로 경계점의 정칙성을 판정하는 기준.

# 연관 문서

## 선수지식

- [조화함수](harmonic-functions.md)

## 더 알아보기

- [Dirichlet 원리](dirichlet-principle.md)
- [퍼텐셜 이론](potential-theory.md)

#complex_analysis #analysis #probability
