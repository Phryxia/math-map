# Dirichlet 문제

# 개요

Dirichlet 문제는 영역의 경계에서 값을 지정하고 그 값을 갖는 [조화함수](harmonic-functions.md)를 안쪽에서 찾는 문제다. 해는 최대 원리로 유일하지만 존재는 영역의 경계가 어떻게 생겼느냐에 달려 있다. 존재를 판정하는 표준 방법이 Perron 의 상한 구성이고, 판정 기준이 경계점마다의 장벽이다.

# 직관

원판에서는 Poisson 적분이 경계값 $g$ 에서 해를 직접 만든다. 일반 영역 $\Omega$ 에는 그런 적분핵이 없다. 평면의 단순연결 영역이면 Riemann 사상으로 원판에 옮겨 풀 수 있지만, $\Omega$ 에 구멍이 있거나 차원이 $3$ 이상이면 이 수가 통하지 않는다.

적분핵을 못 만들면 해를 직접 쓰는 대신 아래에서 조여 간다. 경계에서 $g$ 를 넘지 않는 열조화함수를 전부 모아 각 점에서 상한을 취하면, 그 상한 $u$ 는 항상 조화가 된다. 남는 문제는 $u$ 가 경계점 $\zeta$ 에서 $g(\zeta)$ 로 이어지느냐 하나다. 구멍 뚫린 원판 $0\lt \vert z\vert\lt 1$ 에서 원점에 $1$ , 바깥 원에 $0$ 을 지정하면 이어지지 않는다. 원점 근방에서 유계인 조화함수는 원점까지 확장되므로 그 확장이 최대 원리로 $0$ 이 되고, 지정한 값 $1$ 이 버려진다. 한 점짜리 경계 성분에서는 $u$ 를 $g$ 쪽으로 끌어당길 함수가 없고, 그런 함수를 장벽이라 한다.

# 정의

## Dirichlet 문제

유계 영역 $\Omega\subset\mathbb R^n$ 과 $g\in C(\partial\Omega)$ 에 대해 다음을 만족하는 $u$ 를 찾는 문제다.

$$
\Delta u=0 \thickspace \text{in}\thickspace \Omega,\qquad u\in C^2(\Omega)\cap C(\overline\Omega),\qquad u\vert\_{\partial\Omega}=g
$$

## 열조화함수

$\Omega$ 에서 상반연속인 $v:\Omega\to\lbrack -\infty,\infty)$ 가 모든 닫힌 공 $\overline B(x,r)\subset\Omega$ 에서 다음을 만족하면 **열조화함수**다.

$$
v(x)\le\frac{1}{\vert \partial B(x,r)\vert}\int_{\partial B(x,r)}v\thinspace dS
$$

조화함수는 이 부등식이 등식인 경우다. 열조화함수는 최대 원리를 만족하고, 같은 경계값을 갖는 조화함수 아래에 놓인다.

## Perron 해

경계값 $g$ 에 대한 **Perron 족**과 **Perron 해**를 다음으로 둔다.

$$
\mathcal S_g=\lbrace v \thickspace\text{열조화}: \limsup_{x\to\zeta}v(x)\le g(\zeta)\thickspace \forall\zeta\in\partial\Omega\rbrace,\qquad u(x)=\sup_{v\in\mathcal S_g}v(x)
$$

## 장벽

경계점 $\zeta\in\partial\Omega$ 에서의 **장벽**은 $\Omega$ 에서 열조화인 $w\lt 0$ 으로서 $x\to\zeta$ 에서 $w(x)\to 0$ 이고, $\zeta$ 의 각 근방 밖에서는 $w$ 가 음의 상한을 갖는 것이다. 장벽이 있는 경계점을 **정칙점**이라 한다.

# 성질

## Perron 해의 조화성

$\mathcal S_g$ 가 비어 있지 않고 위로 유계이면 $u=\sup\mathcal S_g$ 는 $\Omega$ 에서 조화다.[^1]

증명은 공 하나를 고정하고 그 안에서 Poisson 적분으로 바꿔치기하는 조작을 쓴다. 열조화함수 $v$ 를 공 안에서 그 경계값의 Poisson 적분으로 바꾸면 더 큰 열조화함수가 되므로 상한은 변하지 않는다. 상한에 수렴하는 함수열에 이 조작을 적용하고 Harnack 원리로 극한을 취하면 그 공에서 조화다.

## 존재의 판정

$\partial\Omega$ 의 모든 점이 정칙이면 Perron 해가 $u\in C(\overline\Omega)$ 로 $g$ 를 경계값으로 갖는다. 장벽 $w$ 와 $-w$ 가 $\zeta$ 근방에서 $u$ 를 $g(\zeta)$ 위아래로 가두기 때문이다.[^1]

정칙성은 $g$ 와 무관하게 영역만으로 정해진다. 어떤 경계점이 정칙이 아니면 그 점에서 경계값이 달성되지 않는 $g$ 가 존재한다.

## 정칙성의 충분조건

- 외부 공 조건. $\zeta$ 에서 $\Omega$ 밖에 놓이고 $\zeta$ 에서만 $\overline\Omega$ 와 만나는 공이 있으면 $\zeta$ 는 정칙이다. $w(x)=\vert x-y\vert^{2-n}-R^{2-n}$ 꼴이 장벽이 된다.
- 외부 원뿔 조건. 꼭짓점이 $\zeta$ 인 원뿔이 $\Omega$ 밖에 놓이면 정칙이다. Lipschitz 경계가 이 조건을 만족한다.
- 평면에서는 $\zeta$ 를 포함하는 $\partial\Omega$ 의 연결 성분이 한 점이 아니면 정칙이다.

## 비정칙점의 예

구멍 뚫린 원판 $0\lt \vert z\vert\lt 1$ 의 원점은 비정칙이다. 경계 성분이 한 점이므로 위 평면 조건이 깨진다. $n\ge 3$ 에서는 경계 성분이 한 점이 아니어도 비정칙일 수 있고, 꼭짓점에서 지수적으로 가늘어지는 뾰족한 구멍인 Lebesgue 의 가시가 그 예다.[^1] 용량으로 쓴 Wiener 기준이 정칙성을 완전히 판정한다.[^2]

# 활용

- [Brown 운동](brownian-motion.md)의 확률적 해법. $\Omega$ 에서 출발한 경로가 처음 경계에 닿는 점의 $g$ 값을 평균하면 Perron 해와 같다. 경계점의 정칙성은 그 점에서 출발한 경로가 즉시 $\Omega$ 를 벗어난다는 조건과 같다.
- [무작위 걷기](random-walks.md)의 이산판. 격자에서 도달 확률과 전위가 이산 Laplace 방정식의 경계값 문제의 해다.
- [등각사상](conformal-mapping.md)과 Riemann 사상정리. 단순연결 영역에서 $\log\vert z-a\vert$ 의 경계값을 갖는 Dirichlet 문제를 풀면 Green 함수가 나오고, 거기서 사상을 만든다.
- [Riemann 곡면과 균일화 정리](riemann-surfaces.md)의 증명이 곡면 위에서 같은 구성을 쓴다.

[^1]: David Gilbarg, Neil S. Trudinger, *Elliptic Partial Differential Equations of Second Order*, 2nd ed., Springer (1983), 2장 §2.8. Perron 방법, 장벽, 경계점의 정칙성과 Lebesgue 의 가시.

[^2]: Norbert Wiener, The Dirichlet problem, *Journal of Mathematics and Physics* 3 (1924), 127–146. 용량의 발산으로 경계점의 정칙성을 판정하는 기준.

# 연관 문서

## 선수지식

- [조화함수](harmonic-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #probability
