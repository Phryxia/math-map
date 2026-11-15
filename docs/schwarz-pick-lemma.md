# Schwarz–Pick 보조정리

# 개요

**Schwarz–Pick 보조정리(Schwarz–Pick lemma)** 는 단위원판을 단위원판 안으로 보내는 정칙함수가 원판 위의 두 점 사이의 쌍곡 거리를 늘리지 않는다는 정리다. 원판을 원판 안으로 보내는 정칙함수가 $0$ 을 $1/2$ 로 보낸다고 하면, $1/2$ 이 갈 수 있는 곳은 원판 전체가 아니라 중심이 $2/5$ 이고 반지름이 $2/5$ 인 원판이다. 이 정리는 점 하나의 상을 알 때 다른 점의 상이 놓일 범위를 두 점의 거리 하나로 정한다.

# 직관

[등각사상](conformal-mapping.md)의 Schwarz 보조정리는 원판 $\mathbb D=\lbrace z:\vert z\vert\lt 1\rbrace$ 을 자기 안으로 보내는 정칙함수 $f$ 가 $f(0)=0$ 이면 $\vert f(z)\vert\le\vert z\vert$ 라고 한다. $f(0)=1/2$ 이면 이 가정이 맞지 않아 바로 쓸 수 없다.

원판의 자기동형 $\varphi_a(z)=(z-a)/(1-\bar az)$ 는 $a$ 를 $0$ 으로 보낸다. $g=\varphi_{1/2}\circ f$ 로 두면 $g$ 도 원판을 원판 안으로 보내고 $g(0)=\varphi_{1/2}(1/2)=0$ 이다. Schwarz 보조정리에서 $\vert g(1/2)\vert\le 1/2$ 이므로, $\zeta=f(1/2)$ 는 다음을 만족한다.

$$
\left\vert\frac{\zeta-1/2}{1-\zeta/2}\right\vert\le\frac12
$$

실수축 위에서 등호를 풀면 $\zeta=0$ 과 $\zeta=4/5$ 가 나오고, 이 부등식이 정하는 영역은 지름이 $\lbrack 0,4/5\rbrack$ 인 원판이다. 그래서 $f(1/2)$ 는 중심 $2/5$, 반지름 $2/5$ 인 원판에 있고, 특히 $\vert f(1/2)\vert\le 4/5$ 다. $f(z)=(z+1/2)/(1+z/2)$ 는 $0$ 을 $1/2$ 로, $1/2$ 을 $4/5$ 로 보내므로 이 범위는 더 좁힐 수 없다.

부등식의 왼쪽은 $\zeta$ 와 $1/2$ 의 어긋남을, 오른쪽은 $1/2$ 과 $0$ 의 어긋남을 같은 식으로 잰 값이다. 원판의 두 점에 이 값을 주는 함수가 아래의 의사쌍곡 거리이고, 정리는 $f$ 가 이 값을 줄인다는 것이다.

# 정의

$\mathbb D$ 의 두 점 $z,w$ 의 **의사쌍곡 거리(pseudo-hyperbolic distance)** 는 다음 값이다.

$$
\rho(z,w)=\frac{\vert z-w\vert}{\vert 1-\bar wz\vert}
$$

$\rho(z,w)=\vert\varphi_w(z)\vert$ 이고 값은 $\lbrack 0,1)$ 에 있다. 직관 절에서 $\rho(1/2,0)=1/2$ 이고, $f(1/2)$ 의 범위는 $\rho(\zeta,1/2)\le 1/2$ 인 $\zeta$ 전체다.

$\mathbb D$ 위의 **Poincaré 계량(Poincaré metric)** 은 길이 요소가 다음인 [Riemann 계량](riemannian-metrics.md)이다.

$$
ds=\frac{2\thinspace\vert dz\vert}{1-\vert z\vert^2}
$$

이 계량의 곡률은 $-1$ 이다. 두 점을 잇는 곡선의 길이 가운데 가장 작은 값을 **쌍곡 거리(hyperbolic distance)** $d(z,w)$ 라 하고, 의사쌍곡 거리와 다음 관계가 있다.

$$
d(z,w)=\log\frac{1+\rho(z,w)}{1-\rho(z,w)}
$$

$\rho(1/2,0)=1/2$ 이므로 $d(1/2,0)=\log 3$ 이다.

# 성질

## Schwarz–Pick 보조정리

$f:\mathbb D\to\mathbb D$ 가 정칙이면 모든 $z,w\in\mathbb D$ 에서 다음이 성립한다.[^1]

$$
\rho(f(z),f(w))\le\rho(z,w),\qquad \frac{\vert f'(z)\vert}{1-\vert f(z)\vert^2}\le\frac{1}{1-\vert z\vert^2}
$$

어느 한 쌍 $z\ne w$ 에서 첫째 부등식의 등호가 성립하거나, 어느 한 점에서 둘째 부등식의 등호가 성립하면 $f$ 는 원판의 자기동형이다.

직관 절의 계산을 일반 점에서 한다. $h=\varphi_{f(w)}\circ f\circ\varphi_w^{-1}$ 는 원판을 원판 안으로 보내고 $0$ 을 $0$ 으로 보낸다. Schwarz 보조정리를 $h$ 의 점 $\varphi_w(z)$ 에 쓰면 첫째 부등식이 나온다. 양변을 $\vert z-w\vert$ 로 나누고 $w\to z$ 로 보내면 둘째 부등식이 나온다.

등호이면 Schwarz 보조정리의 등호 경우에서 $h$ 가 회전이므로 $f$ 가 자기동형이다.

## 쌍곡 거리의 축소

둘째 부등식의 양변에 $2\thinspace\vert dz\vert$ 를 곱하면, $f$ 가 곡선의 Poincaré 길이를 늘리지 않는다는 뜻이 된다. 그래서 $d(f(z),f(w))\le d(z,w)$ 이다. 원판의 자기동형은 쌍곡 거리를 보존하는 등거리사상이고, 자기동형이 아닌 정칙함수는 모든 두 점 사이의 거리를 줄인다.

$f(z)=z^2$ 은 $0$ 과 $1/2$ 을 $0$ 과 $1/4$ 로 보내고, 쌍곡 거리는 $\log 3$ 에서 $\log(5/3)$ 으로 준다.

## Ahlfors–Schwarz 보조정리

Ahlfors 는 상대편 계량을 곡률만으로 다루는 판을 증명했다.[^2] 원판 위의 계량 $\lambda(z)\vert dz\vert$ 의 Gauss [곡률](curvature.md)이 모든 점에서 $-1$ 이하이면, 모든 점에서 $\lambda(z)\le 2/(1-\vert z\vert^2)$ 이다. 이것을 **Ahlfors–Schwarz 보조정리(Ahlfors–Schwarz lemma)** 라 한다. 정칙함수 $f$ 로 곡률 $-1$ 이하의 계량을 원판으로 당겨 오면 이 판에서 Schwarz–Pick 보조정리의 둘째 부등식이 나온다.

# 활용

- [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md). 원판을 원판 안으로 보내고 두 점 $z_1,z_2$ 에서 값 $w_1,w_2$ 를 갖는 정칙함수는 $\rho(w_1,w_2)\le\rho(z_1,z_2)$ 일 때만 존재한다. 점이 둘일 때 Pick 행렬의 양의 준정부호 조건이 이 부등식이다.
- [Picard 정리](picard-theorems.md). 두 점을 뺀 평면 $\mathbb C\setminus\lbrace 0,1\rbrace$ 은 곡률이 $-1$ 이하인 계량을 갖는다. Ahlfors–Schwarz 보조정리를 이 계량에 쓰면, $0$ 과 $1$ 을 값으로 갖지 않는 정칙함수의 도함수가 원점에서 얼마나 클 수 있는지 상계가 나오고, 반지름을 무한대로 보내면 Picard 의 작은 정리가 나온다.
- 원판의 자기사상의 반복. 자기동형이 아닌 정칙함수 $f:\mathbb D\to\mathbb D$ 가 원판 안에 고정점을 가지면, 쌍곡 거리를 줄이므로 고정점은 하나뿐이고 반복 $f^{\circ n}$ 은 그 고정점으로 수렴한다. 고정점이 없을 때 반복이 경계의 한 점으로 수렴한다는 것이 [Denjoy–Wolff 정리](denjoy-wolff-theorem.md)다.
- 여러 복소변수. 정칙사상이 늘리지 않는 거리를 원판의 쌍곡 거리로부터 정의한 것이 Kobayashi 의사거리(Kobayashi pseudo-distance)다. 이 거리가 참거리인 복소다양체는 [Kobayashi 쌍곡성](kobayashi-hyperbolicity.md)을 갖는다고 한다.

[^1]: G. Pick, "Über die Beschränkungen analytischer Funktionen, welche durch vorgegebene Funktionswerte bewirkt werden", Mathematische Annalen 77 (1915).
[^2]: L. V. Ahlfors, "An extension of Schwarz's lemma", Transactions of the American Mathematical Society 43 (1938).

# 연관 문서

## 선수지식

- [등각사상](conformal-mapping.md)

## 더 알아보기

- [Denjoy–Wolff 정리](denjoy-wolff-theorem.md)
- [보간 수열](interpolating-sequences.md)
- [Julia–Carathéodory 정리](julia-caratheodory-theorem.md)
- [Kobayashi 쌍곡성](kobayashi-hyperbolicity.md)

#complex_analysis #differential_geometry #analysis
