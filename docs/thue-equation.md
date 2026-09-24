# Thue 방정식

# 개요

$F$ 가 차수 $3$ 이상의 기약 이진형식이고 $m$ 이 $0$ 이 아닌 정수일 때, $F(x,y)=m$ 을 **Thue 방정식**이라 한다.

Thue 는 이 방정식의 정수해가 유한 개임을 보였다. 그 증명은 해의 개수도 크기도 내놓지 않으며, 크기의 상한은 [Baker 정리](baker-theorem.md)의 로그 일차형식 하한에서 나온다.

# 직관

$x^3-2y^3=1$ 의 정수해를 찾는다. 좌변을 인수분해하면

$$
x^3-2y^3=(x-\alpha y)(x-\omega\alpha y)(x-\omega^2\alpha y),\qquad \alpha=2^{1/3}
$$

이고 $\omega$ 는 $1$ 의 세제곱근이다. 세 인수의 곱이 $1$ 이므로 각 인수는 작을 수 없지만, $y$ 가 크면 뒤의 두 인수는 $\vert y\vert$ 규모로 커진다. 따라서 첫 인수 $x-\alpha y$ 가 $y^{-2}$ 규모로 작아야 한다.

$x-\alpha y$ 가 작다는 것은 유리수 $x/y$ 가 무리수 $\alpha$ 에 가깝다는 뜻이다. 나누어 쓰면

$$
\left\vert\frac{x}{y}-\alpha\right\vert\approx\frac{1}{\vert y\vert^3}
$$

이다. 대수적 무리수를 이만큼 잘 근사하는 유리수는 유한 개뿐이라는 것이 근사 정리이고, 해의 유한성이 거기서 나온다.

# 정의

$F(x,y)=a_0x^d+a_1x^{d-1}y+\dots+a_dy^d$ 가 정수 계수 **이진형식**이고, $F$ 가 $\mathbb Q$ 위에서 기약이며 $d=\deg F\ge3$ 이라 하자. $0$ 이 아닌 정수 $m$ 에 대해

$$
F(x,y)=m,\qquad (x,y)\in\mathbb Z^2
$$

를 Thue 방정식이라 한다.

$d\le2$ 에서는 진술이 무너진다. $d=1$ 은 일차 방정식이고, $d=2$ 의 $x^2-2y^2=1$ 은 [Pell 방정식](pell-equation.md)이라 해가 무한히 많다.

# 성질

## 유한성

**정리(Thue).** $d\ge3$ 이면 $F(x,y)=m$ 의 정수해는 유한 개다.[^1]

*증명의 요지.* $F$ 의 근 $\alpha_1,\dots,\alpha_d$ 를 잡아 $F(x,y)=a_0\prod(x-\alpha_iy)$ 로 쓴다. 해 $(x,y)$ 에서 $\vert y\vert$ 가 크면 $x/y$ 에 가장 가까운 근 하나를 $\alpha$ 라 할 때 나머지 인수들이 $\vert y\vert$ 규모이므로

$$
\left\vert\frac{x}{y}-\alpha\right\vert\ll\frac{1}{\vert y\vert^{d}}
$$

이다. $d\ge3$ 이면 이 지수가 Thue 의 근사 정리가 허용하는 한계를 넘고, 그런 유리수는 유한 개뿐이다. ∎

## 유효 상한

근사 정리의 증명은 두 개의 좋은 근사가 동시에 존재할 수 없다는 논증이라, 예외가 되는 유리수가 어디 있는지 말하지 않는다. 따라서 해의 크기에 상한이 나오지 않는다.

Baker 의 하한이 이 자리를 메운다. 해 $(x,y)$ 에서 $\log$ 의 일차형식 $\Lambda=\log\vert x-\alpha y\vert$ 를 단위원의 로그로 전개하면, 위 부등식이 $\Lambda$ 의 위쪽 추정을 주고 Baker 하한이 아래쪽 추정을 준다. 둘이 충돌하는 지점에서 $\vert y\vert$ 의 계산 가능한 상한이 나온다.[^2]

상한은 실제 해보다 훨씬 크다. 상한을 격자 축소로 낮추고 남은 범위를 훑는 것이 표준 절차이고, [격자](lattices.md) 축소 알고리즘이 그 일을 한다.

## 해의 개수

해의 개수는 $m$ 과 $F$ 의 판별식이 아니라 차수 $d$ 만으로 위에서 묶인다. $m=1$ 이고 $d\ge3$ 이면 해의 개수가 $d$ 에만 의존하는 상수 이하다.[^3]

# 활용

- **S-단위 방정식.** $F(x,y)=m$ 에서 $m$ 을 정해진 소수들로만 나누어지는 수로 넓히면 S-단위 방정식이 되고, 같은 논증으로 해가 유한하다.
- **타원곡선의 정수점.** $y^2=x^3+k$ 의 정수해를 세는 문제가 이 꼴의 방정식으로 환원된다. [타원곡선](elliptic-curves.md)의 정수점이 유한하다는 Siegel 정리의 유효 판본이 Baker 하한에서 나온다.
- **Diophantine 방정식의 계산.** 상한과 격자 축소를 묶은 절차가 구현되어 있어, 주어진 $F$ 와 $m$ 에서 해를 전부 나열한다.

[^1]: A. Thue, *Über Annäherungswerte algebraischer Zahlen*, J. reine angew. Math. **135** (1909), 284–305. 근사 지수의 개선은 C. L. Siegel, F. Dyson, K. F. Roth 로 이어진다.

[^2]: A. Baker, *Contributions to the theory of Diophantine equations I*, Philos. Trans. Roy. Soc. London **263** (1968), 173–191.

[^3]: E. Bombieri, W. M. Schmidt, *On Thue's equation*, Invent. Math. **88** (1987), 69–81.

# 연관 문서

## 선수지식

- [Baker 정리](baker-theorem.md)

## 더 알아보기

- [Siegel 의 정수점 정리](siegel-integral-points.md)

#number_theory #algebra
