# 수정 Korteweg–de Vries 방정식

# 개요

**수정 Korteweg–de Vries 방정식(modified Korteweg–de Vries equation, mKdV)** 은 [Korteweg–de Vries 방정식](korteweg-de-vries-equation.md)의 비선형 항 $6uu_x$ 를 $\pm 6v^2v_x$ 로 바꾼 편미분방정식이다. KdV 에서는 위로 솟은 혹만 모양을 유지하며 나아가고 아래로 파인 물결은 그러지 못한다. 위아래를 뒤집어도 같은 일이 일어나야 하는 파동을 적으려면 $v$ 를 $-v$ 로 바꾸어도 변하지 않는 방정식이 있어야 하고, mKdV 가 그런 방정식이다.

# 직관

KdV $u_t+6uu_x+u_{xxx}=0$ 에서 모양을 유지하며 속도 $c$ 로 나아가는 해 $u=\phi(x-ct)$ 는 $(\phi')^2=c\phi^2-2\phi^3$ 을 만족한다. $\phi\lt 0$ 이면 우변이 $c\phi^2+2\vert\phi\vert^3\gt 0$ 이어서 $\phi'$ 이 $0$ 이 되는 자리가 없다. 아래로 파인 물결은 바닥에서 방향을 바꾸지 못하므로 다시 $0$ 으로 돌아오는 고립파가 될 수 없다.

KdV 의 해 $u$ 에 대해 $-u$ 는 $u_t-6uu_x+u_{xxx}=0$ 의 해다. $uu_x$ 가 $u$ 의 2차 식이므로 비선형 항의 부호가 바뀐다. 3차 식 $v^2v_x$ 로 바꾼 $v_t+6v^2v_x+v_{xxx}=0$ 은 $v$ 를 $-v$ 로 바꾸어도 그대로이므로, 솟은 해가 있으면 같은 모양으로 파인 해가 있다.

이 방정식에서 고립파를 찾으면 두 번 적분해 다음이 나온다.

$$
(\phi')^2=c\phi^2-\phi^4
$$

우변은 $\phi$ 의 부호와 무관하고, 해는 $\phi=\pm\sqrt c\thinspace\mathrm{sech}(\sqrt c\thinspace\xi)$ 다. $c=1$ 이면 $\mathrm{sech}(x-t)$ 와 $-\mathrm{sech}(x-t)$ 가 둘 다 속도 $1$ 로 나아간다.

# 정의

함수 $v(x,t)$ 에 대한 다음 두 방정식을 **수정 KdV 방정식** 이라 한다. 위가 **집속형(focusing)**, 아래가 **발산형(defocusing)** 방정식이다.

$$
\begin{aligned}
v_t+6v^2v_x+v_{xxx}&=0\cr
v_t-6v^2v_x+v_{xxx}&=0
\end{aligned}
$$

$v$ 를 $iv$ 로 바꾸면 한쪽이 다른 쪽으로 바뀌므로 실수해의 성질은 다르다. 직관 절의 $\pm\mathrm{sech}(x-t)$ 는 집속형 방정식의 해다. 발산형 방정식에서 고립파의 식은 $(\phi')^2=c\phi^2+\phi^4$ 이고, $c\gt 0$ 이면 우변이 $\phi\ne 0$ 에서 양수, $c\lt 0$ 이면 $\phi$ 가 작을 때 음수이므로 고립파가 없다.

# 성질

## 고립파

집속형 방정식의 고립파는 다음과 같다.

$$
v(x,t)=\pm\sqrt c\thinspace\mathrm{sech}\bigl(\sqrt c(x-ct-x_0)\bigr)
$$

높이 $\sqrt c$ 의 제곱이 속도 $c$ 이고, 폭은 $1/\sqrt c$ 에 비례한다. KdV 의 고립파는 높이가 속도에 비례했다. 솟은 것과 파인 것이 부딪쳐도 둘 다 모양을 되찾으므로 [솔리톤](solitons.md)이다. 집속형 방정식에는 제자리에서 진동하며 나아가는 breather 해도 있다[^1].

## 보존량

집속형 방정식은 $v_t=-(2v^3+v_{xx})\_x$ 로 쓸 수 있고, $v$ 가 먼 곳에서 빨리 $0$ 으로 가면 다음이 시간에 따라 변하지 않는다.

$$
\int v\thinspace dx,\qquad \int v^2\thinspace dx,\qquad E=\int\Bigl(\frac12v_x^2-\frac12v^4\Bigr)dx
$$

계산은 KdV 문서의 보존량 절과 같다. 직관 절의 $\mathrm{sech}\thinspace x$ 에서는 $\int v\thinspace dx=\pi$, $\int v^2dx=2$ 다. 발산형 방정식에서는 $E$ 의 $v^4$ 항 부호가 $+$ 가 되어 $E$ 가 항상 $0$ 이상이다.

## Miura 변환

$v$ 가 발산형 방정식의 해이면 $u=-(v^2+v_x)$ 가 KdV $u_t+6uu_x+u_{xxx}=0$ 의 해다[^2]. KdV 문서의 Miura 변환 절이 이 사실을 항등식으로 보인다. 역으로 KdV 의 해 $u$ 에서 $v$ 를 얻으려면 Riccati 방정식(Riccati equation) $v_x=-u-v^2$ 을 풀어야 한다. 이 변환으로 KdV 의 보존량과 해의 성질이 mKdV 의 것으로, 또는 그 반대로 옮겨진다.

## 초기값 문제

Kenig, Ponce, Vega 는 초기값이 [Sobolev 공간](sobolev-spaces.md) $H^s$, $s\ge 1/4$ 에 있으면 짧은 시간 동안 해가 존재하고 유일하며 초기값에 연속으로 의존함을 [축약사상 고정점 정리](banach-fixed-point.md)로 보였다[^3]. 발산형 방정식에서는 해가 오래 지나 어떻게 되는지를 Deift 와 Zhou 가 [Riemann–Hilbert 문제](riemann-hilbert-problem.md)의 최급강하법(steepest descent method)으로 정확히 계산했다[^4].

# 활용

- 대칭인 매질의 파동. 위아래가 대칭인 밀도층의 내부파, 플라스마의 일부 파동에서는 KdV 의 2차 비선형 계수가 $0$ 이 되어 다음 차수인 mKdV 가 나온다.
- 평면 곡선의 운동. 호의 길이를 바꾸지 않고 움직이는 평면 곡선 가운데, [곡률](curvature.md)이 호의 길이와 시간의 함수로서 mKdV 꼴 방정식을 따르는 흐름이 있다[^5].
- 적분가능계와 점근 해석. mKdV 는 역산란 변환으로 풀리는 [적분가능계](integrable-systems.md)이고, 진동하는 Riemann–Hilbert 문제의 최급강하법이 처음 적용된 방정식이다.

[^1]: P. G. Drazin, R. S. Johnson, *Solitons: An Introduction*, Cambridge University Press, 1989.
[^2]: R. M. Miura, "Korteweg-de Vries equation and generalizations. I. A remarkable explicit nonlinear transformation", *Journal of Mathematical Physics* 9 (1968), 1202–1204.
[^3]: C. E. Kenig, G. Ponce, L. Vega, "Well-posedness and scattering results for the generalized Korteweg-de Vries equation via the contraction principle", *Communications on Pure and Applied Mathematics* 46 (1993), 527–620.
[^4]: P. Deift, X. Zhou, "A steepest descent method for oscillatory Riemann–Hilbert problems. Asymptotics for the MKdV equation", *Annals of Mathematics* 137 (1993), 295–368.
[^5]: R. E. Goldstein, D. M. Petrich, "The Korteweg-de Vries hierarchy as dynamics of closed curves in the plane", *Physical Review Letters* 67 (1991), 3203–3206.

# 연관 문서

## 선수지식

- [Korteweg–de Vries 방정식](korteweg-de-vries-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
