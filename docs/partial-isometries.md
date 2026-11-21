# 부분 등거리

# 개요

**부분 등거리(partial isometry)** 는 [Hilbert 공간](hilbert-spaces.md)의 한 닫힌 부분공간에서는 길이를 보존하고 그 직교여공간은 $0$ 으로 보내는 작용소다. 행렬은 [극분해](polar-decomposition.md)로 회전 부분과 늘임 부분으로 나뉘는데, 수열 공간에서 첫 항을 버리고 나머지를 한 칸씩 당기는 왼쪽 이동은 회전 부분을 유니터리 작용소로 고를 수 없다. 부분 등거리는 유니터리 대신 이런 회전 부분이 되는 작용소이고, 모든 [유계 작용소](bounded-operators.md)가 부분 등거리와 양의 작용소의 곱으로 쓰인다.

# 직관

$\ell^2$ 의 왼쪽 이동 $S^\ast(x_1,x_2,x_3,\dots)=(x_2,x_3,\dots)$ 를 극분해하려 한다. 행렬에서처럼 늘임 부분은 $(S^\ast)^\ast S^\ast=SS^\ast$ 의 제곱근이다. $SS^\ast(x_1,x_2,\dots)=(0,x_2,x_3,\dots)$ 이고 이것을 두 번 해도 같으므로 제곱근은 자신이다. 늘임 부분 $P=SS^\ast$ 는 첫 좌표를 $0$ 으로 만드는 사영이다.

회전 부분 $U$ 는 $S^\ast=UP$ 를 만족해야 한다. 첫 좌표가 $0$ 인 수열 $(0,x_2,x_3,\dots)$ 을 $U$ 는 $(x_2,x_3,\dots)$ 로 보내야 하고, 이것만으로 $U$ 의 치역이 $\ell^2$ 전체가 된다. $U$ 가 유니터리이면 단사여야 하는데, $e\_1=(1,0,0,\dots)$ 을 보낼 자리가 남지 않는다. 그래서 $U(e\_1)=0$ 으로 두는 수밖에 없고, $U=S^\ast$ 다.

$S^\ast$ 는 $e\_1$ 에 수직인 수열에서는 길이를 보존하고 $e\_1$ 은 $0$ 으로 보낸다. 유니터리가 아니지만 한 부분공간에서는 등거리인 이런 작용소가 부분 등거리다.

# 정의

Hilbert 공간 $H$ 위의 유계 작용소 $V$ 가 닫힌 부분공간 $M$ 에 대해 다음을 만족하면 **부분 등거리** 라 한다.

$$
\Vert Vx\Vert=\Vert x\Vert\quad (x\in M),\qquad Vx=0\quad (x\in M^\perp)
$$

$M$ 을 **처음 공간(initial space)**, $V(M)$ 을 **나중 공간(final space)** 이라 한다. 직관 절의 $S^\ast$ 는 처음 공간이 $e\_1$ 에 수직인 수열 전체이고 나중 공간이 $\ell^2$ 이다. 오른쪽 이동 $S$ 는 처음 공간이 $\ell^2$, 나중 공간이 첫 좌표가 $0$ 인 수열 전체다.

오른쪽 위 성분만 $1$ 인 $2\times 2$ [행렬](matrices.md)은 $e\_2$ 를 $e\_1$ 로 보내고 $e\_1$ 을 $0$ 으로 보내므로, 처음 공간이 $e\_2$ 의 생성, 나중 공간이 $e\_1$ 의 생성인 부분 등거리다.

# 성질

## 사영으로 쓴 판정

$V$ 가 부분 등거리인 것은 $V^\ast V$ 가 사영인 것과 동치이고, 이때 $V^\ast V$ 는 처음 공간으로의 사영, $VV^\ast$ 는 나중 공간으로의 사영이다. 또 $V=VV^\ast V$ 와도 동치이고, $V$ 가 부분 등거리이면 $V^\ast$ 도 처음 공간과 나중 공간을 맞바꾼 부분 등거리다[^1].

$M$ 위에서 $\Vert Vx\Vert^2=\langle V^\ast Vx,x\rangle=\Vert x\Vert^2$ 이므로 편극 항등식(polarization identity)으로 $V^\ast V$ 는 $M$ 위의 항등이다. $M^\perp$ 에서는 $V^\ast V$ 가 $0$ 이므로 $V^\ast V$ 는 $M$ 으로의 사영이다. 직관 절에서 $SS^\ast$ 가 첫 좌표를 지우는 사영이었고, $S^\ast S$ 는 항등이다.

## 작용소의 극분해

유계 작용소 $T$ 에 대해 $\vert T\vert=(T^\ast T)^{1/2}$ 을 함수 계산으로 정의한다. 그러면 다음을 만족하는 부분 등거리 $V$ 가 유일하게 존재한다[^1].

$$
T=V\vert T\vert,\qquad \ker V=\ker T
$$

$V$ 의 처음 공간은 $\ker T$ 의 직교여공간이고 나중 공간은 $T$ 의 치역의 닫힘이다. $\Vert\thinspace\vert T\vert x\Vert^2=\langle T^\ast Tx,x\rangle=\Vert Tx\Vert^2$ 이므로 $\vert T\vert x\mapsto Tx$ 가 잘 정의된 등거리 사상이다. 이것을 $\vert T\vert$ 의 치역의 닫힘으로 연속 확장하고 그 직교여공간에서 $0$ 으로 두면 $V$ 가 나온다.

## 유니터리로 고를 수 있는 경우

$T=U\vert T\vert$ 인 유니터리 $U$ 가 존재하는 것은 $\ker T$ 와 $\ker T^\ast$ 의 차원이 같은 것과 동치다. 이때 $V$ 를 $\ker T$ 에서 $\ker T^\ast$ 로 가는 등거리 동형으로 늘이면 $U$ 가 된다. 유한차원 정사각행렬에서는 두 차원이 늘 같아 극분해의 $Q$ 를 직교행렬이나 유니터리로 고를 수 있다. 왼쪽 이동은 $\ker S^\ast$ 가 1 차원이고 $\ker S$ 가 $0$ 이라 고를 수 없다.

# 활용

- [작용소 K 이론](operator-k-theory.md)의 Murray–von Neumann 동치. 두 사영 $p$, $q$ 를 $v^\ast v=p$, $vv^\ast=q$ 인 부분 등거리 $v$ 로 잇는다.
- [von Neumann 대수](von-neumann-algebras.md)의 사영 비교. 한 사영이 다른 사영의 부분사영과 부분 등거리로 이어지는지로 사영의 크기를 비교하고, 이것으로 인자의 형을 나눈다.
- [Fredholm 작용소](fredholm-operators.md)의 지표. 극분해의 부분 등거리에서 $\dim\ker T-\dim\ker T^\ast$ 가 처음 공간과 나중 공간의 여차원의 차로 나타난다. 왼쪽 이동의 지표는 $1$ 이다.

[^1]: J. B. Conway, *A Course in Functional Analysis*, 2nd ed., Springer, 1990.

# 연관 문서

## 선수지식

- [유계 작용소](bounded-operators.md)
- [극분해](polar-decomposition.md)

## 더 알아보기

- [Wold 분해](wold-decomposition.md)

#functional_analysis #linear_algebra #analysis
