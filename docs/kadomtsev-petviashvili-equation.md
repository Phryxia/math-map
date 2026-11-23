# Kadomtsev–Petviashvili 방정식

# 개요

**Kadomtsev–Petviashvili 방정식(Kadomtsev–Petviashvili equation, KP)** 은 [Korteweg–de Vries 방정식](korteweg-de-vries-equation.md)에 진행 방향과 수직인 방향의 느린 변화를 더한 2차원 편미분방정식이다. 좁은 수로의 물결은 한 방향으로만 나아가지만, 넓은 바다의 물결은 파면이 조금 기울거나 휘어 있다. KP 방정식은 거의 한 방향으로 나아가는 물결의 파면이 옆으로 어떻게 변하는지를 항 하나로 적는다.

# 직관

KdV 의 고립파 $2\thinspace\mathrm{sech}^2(x-4t)$ 는 $y$ 축과 나란한 파면을 가진 물결로 볼 수 있다. 이 물결을 조금 기울여 파면을 $x+py=\text{일정}$ 으로 놓은 $u=\phi(x+py-ct)$ 를 생각한다. KdV 는 $y$ 를 모르므로 이 물결이 기울어진 만큼 느려진다는 것을 적지 못한다.

얕은 물의 물결 속도는 파면에 수직인 방향으로 재야 한다. 파면이 기울면 $x$ 방향으로 잰 속도에 $p^2$ 에 비례하는 보정이 붙고, KP 방정식은 이 보정을 $u_{yy}$ 항으로 적는다. 위 꼴을 KP 방정식에 넣으면 KdV 의 고립파 식에서 속도 $c$ 가 $c-3p^2$ 으로 바뀐 식이 나온다. 그래서 $c-3p^2=4$ 이면 $2\thinspace\mathrm{sech}^2(x+py-(4+3p^2)t)$ 가 해이고, 기울어진 고립파가 $x$ 축을 따라 속도 $4+3p^2$ 으로 지나간다.

# 정의

함수 $u(x,y,t)$ 와 $\lambda=\pm1$ 에 대한 다음 방정식을 **Kadomtsev–Petviashvili 방정식** 이라 한다[^1].

$$
\bigl(u_t+6uu_x+u_{xxx}\bigr)\_x+3\lambda u_{yy}=0
$$

$\lambda=1$ 이면 KP-II, $\lambda=-1$ 이면 KP-I 이라 한다. 얕은 물에서 표면장력이 약하면 KP-II, 강하면 KP-I 이 나온다. $u$ 가 $y$ 에 의존하지 않으면 괄호 안이 $x$ 에 대해 상수이고, 먼 곳에서 $0$ 이라는 조건으로 KdV 가 된다. 직관 절의 기울어진 고립파는 $\lambda=1$ 인 경우다.

# 성질

## 분산 관계

선형 부분 $(u_t+u_{xxx})\_x+3\lambda u_{yy}=0$ 에 $e^{i(kx+ly-\omega t)}$ 를 넣으면 다음이 나온다.

$$
\omega=-k^3+\frac{3\lambda l^2}{k}
$$

$l=0$ 이면 KdV 의 $\omega=-k^3$ 이다. $l^2/k$ 항은 $k$ 가 작을 때 커지므로 방정식이 다루는 것은 $l$ 이 $k$ 보다 훨씬 작은 물결, 곧 거의 $x$ 방향으로 나아가는 물결이다.

## 선 고립파

직관 절의 계산을 일반화하면 $p\in\mathbb R$ 와 $c\gt 3\lambda p^2$ 에 대해 다음이 해다.

$$
u(x,y,t)=\frac{c-3\lambda p^2}{2}\thinspace\mathrm{sech}^2\Bigl(\frac{\sqrt{c-3\lambda p^2}}{2}(x+py-ct)\Bigr)
$$

파면이 직선인 이 해를 선 고립파(line soliton)라 한다. KP-II 의 선 고립파는 $y$ 방향의 작은 흔들림에 대해 안정하고, KP-I 의 선 고립파는 불안정하다[^1]. KP-II 에서는 방향이 다른 선 고립파 여럿이 만나 X 자나 Y 자 모양의 교차를 이루는 해가 있다.

## lump 해

KP-I 에는 모든 방향으로 $1/(x^2+y^2)$ 의 빠르기로 줄어드는 유리함수 해가 있고, 이것을 lump 해(lump solution)라 한다. KdV 의 고립파가 $x$ 방향으로만 국소화된 것과 달리 평면의 한 곳에 모여 일정한 속도로 움직인다[^1].

## 초기값 문제

Bourgain 은 KP-II 의 초기값 문제가 $L^2$ 의 처음 값에 대해 모든 시각에서 잘 놓여 있음을 보였다[^2]. 증명은 KdV 와 같은 Fourier 제한 논법을 2차원에 적용한 것이다.

# 활용

- 넓은 수면과 플라스마의 파동. 얕은 바다에서 서로 다른 방향의 물결이 만나 생기는 X 자 교차 물결이 KP-II 의 선 고립파 교차로 적힌다.
- KP 위계와 Sato 이론. KP 방정식은 [KdV 위계](kdv-hierarchy.md)를 포함하는 [KP 위계](kp-hierarchy.md)의 첫 방정식이다. Sato 는 KP 위계의 해가 무한차원 [Grassmann 다양체](grassmannian.md)의 점에 대응함을 보였고, 해의 tau 함수가 Plücker 관계(Plücker relations)를 만족한다.
- Schottky 문제. 주기 행렬로 정해지는 theta 함수가 KP 방정식의 해를 주는 것이 그 아벨 다양체가 곡선의 [Jacobi 다양체](jacobian-variety.md)일 필요충분조건이다. Novikov 의 추측이었고 Shiota 가 증명했다[^3].

[^1]: M. J. Ablowitz, H. Segur, *Solitons and the Inverse Scattering Transform*, SIAM Studies in Applied Mathematics 4, SIAM, 1981.
[^2]: J. Bourgain, "On the Cauchy problem for the Kadomtsev-Petviashvili equation", *Geometric and Functional Analysis* 3 (1993), 315–341.
[^3]: T. Shiota, "Characterization of Jacobian varieties in terms of soliton equations", *Inventiones Mathematicae* 83 (1986), 333–382.

# 연관 문서

## 선수지식

- [Korteweg–de Vries 방정식](korteweg-de-vries-equation.md)

## 더 알아보기

- [KP 위계](kp-hierarchy.md)

#analysis #differential_geometry
