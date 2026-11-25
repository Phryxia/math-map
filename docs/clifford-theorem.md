# Clifford 정리

# 개요

**Clifford 정리(Clifford's theorem)** 는 곡선 위에서 극의 위치를 몇 개 정했을 때 그 자리에만 극을 갖는 함수의 공간이 극 개수의 절반 남짓보다 클 수 없다는 정리다. 종수 $3$ 의 평면 사차곡선 위에서 두 점에만 극을 갖는 함수는 상수뿐이었는데, 극이 $d$ 개일 때 함수 공간의 차원이 얼마까지 커질 수 있는지 물을 수 있다.

[Riemann–Roch 정리](riemann-roch.md)는 극이 많을 때 그 차원을 정확히 주지만, 극이 $2g-2$ 개 이하이면 보정항 때문에 상한만 남는다. Clifford 정리는 그 범위에서 차원이 $d/2+1$ 이하임을 보이고, 등호가 되는 곡선을 초타원곡선으로 가른다.

# 직관

종수 $3$ 의 매끄러운 평면 사차곡선 $X$ 에서 정칙 미분은 일차식과 대응하고, 극이 $d$ 개인 함수의 공간 $\ell(D)$ 는 Riemann–Roch 정리로 $\ell(D)=d-2+\ell(K-D)$ 다. $\ell(K-D)$ 는 $D$ 의 점들을 지나는 직선의 일차식이 이루는 공간의 차원이다.

- $d=2$. 두 점을 지나는 직선은 하나이므로 $\ell(K-D)=1$, $\ell(D)=1$ 이다.
- $d=3$. 세 점이 한 직선 위에 있으면 $\ell(K-D)=1$, $\ell(D)=2$ 이고, 아니면 $\ell(D)=1$ 이다.
- $d=4$. $D$ 가 한 직선과 $X$ 의 교점 넷이면 $D$ 는 표준인자이고 $\ell(D)=3$ 이다.

세 경우 모두 $\ell(D)\le d/2+1$ 이고, 등호는 $d=4$ 에서 $D=K$ 일 때만 나온다. 같은 종수의 [초타원곡선](hyperelliptic-curves.md)에서는 $x$ 좌표가 같은 두 점 $D$ 에서 $\ell(D)=2$ 이므로 $d=2$ 에서도 등호가 나온다.

# 정의

곡선 $X$ 위의 유효 divisor $D$ 가 $\ell(K-D)\gt 0$ 을 만족하면, 곧 $D$ 의 점에서 모두 $0$ 이 되는 정칙 미분이 있으면 $D$ 를 **특수(special)** divisor 라 한다. $\deg D\gt 2g-2$ 이면 $\deg(K-D)\lt 0$ 이므로 특수 divisor 의 차수는 $2g-2$ 이하다. 직관 절의 $d=2,3,4$ 는 모두 특수 divisor 다.

# 성질

## Clifford 부등식

정리. $D$ 가 특수인 유효 divisor 이면 다음이 성립한다[^1].

$$
2\bigl(\ell(D)-1\bigr)\le\deg D
$$

등호는 $D=0$, $D=K$, 또는 $X$ 가 초타원곡선이고 $D$ 가 차수 $2$ 함수의 극 divisor 의 배수일 때뿐이다.

증명의 요지. 유효 divisor $D\_1$, $D\_2$ 에서 두 함수 공간의 원소를 곱하는 사상을 쓴다. 이 사상이 주는 사영공간의 곱에서 $D\_1+D\_2$ 의 사영공간으로 가는 사상은 유한 대 일이므로 다음이 성립한다.

$$
\ell(D_1)+\ell(D_2)\le\ell(D_1+D_2)+1
$$ $D\_1=D$, $D\_2=K-D$ 를 넣으면 $\ell(D)+\ell(K-D)\le g+1$ 이고, Riemann–Roch 정리의 $\ell(D)-\ell(K-D)=\deg D+1-g$ 와 더하면 $2\ell(D)\le\deg D+2$ 다.

## 특수가 아닌 경우

$D$ 가 특수가 아니면 Riemann–Roch 정리로 $\ell(D)=\deg D+1-g$ 이다. 두 경우를 합치면 차수 $d$ 의 유효 divisor 에서 $\ell(D)$ 는 $0\le d\le 2g-2$ 이면 $d/2+1$ 이하, $d\gt 2g-2$ 이면 정확히 $d+1-g$ 다.

## 초타원곡선의 판정

곡선이 초타원곡선이 아닐 필요충분조건은 $0\lt\deg D\lt 2g-2$ 인 모든 특수 유효 divisor 에서 Clifford 부등식이 엄격한 것이다. 특히 $d=2$ 이면 $\ell(D)=2$ 인 $D$, 곧 차수 $2$ 함수가 있는 것이 초타원곡선의 정의다.

# 활용

- 표준사상. 초타원곡선이 아니면 임의의 두 점 $P$, $Q$ 에서 $\ell(P+Q)=1$ 이고 Riemann–Roch 정리로 $\ell(K-P-Q)=g-2$ 다. 이것이 표준사상 $X\to\mathbb{CP}^{g-1}$ 이 점을 가르고 접벡터를 가른다는 조건이므로, 표준사상이 매장이다.
- [Brill–Noether 이론](brill-noether-theory.md). Clifford 정리는 특수 divisor 의 자취 $W^r_d$ 가 $d\lt 2r$ 이면 비어 있다는 것이고, Martens 정리가 이를 차원의 상한으로 넓힌다.
- 곡선의 사영 매장. 차수 $d$ 로 $\mathbb{CP}^r$ 에 들어가는 곡선에서 그 선형계가 특수이면 $d\ge 2r$ 이다. 공간곡선의 종수와 차수의 관계를 다루는 Castelnuovo 상한(Castelnuovo bound)이 이 부등식에서 시작한다.

[^1]: R. Hartshorne, *Algebraic Geometry*, Graduate Texts in Mathematics 52, Springer, 1977, Chapter IV, Theorem 5.4.

# 연관 문서

## 선수지식

- [Riemann–Roch 정리](riemann-roch.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra
