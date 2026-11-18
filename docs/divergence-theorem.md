# 발산 정리

# 개요

**발산 정리(divergence theorem)** 는 닫힌 곡면을 지나 밖으로 흘러 나가는 양을 그 곡면 안에서 생겨나는 양의 합으로 바꾸는 정리다. 상자 안에서 물이 솟아 나오고 있을 때 매초 상자 밖으로 나가는 물의 양을 구하려면 상자의 여섯 면에서 흐름을 하나씩 적분해야 한다. 발산 정리는 이 여섯 개의 면적분을 상자 안 각 점에서 물이 솟는 빠르기의 부피적분 하나로 바꾼다.

# 직관

공간의 각 점 $(x,y,z)$ 에서 물이 속도 $F(x,y,z)=(x,y,z)$ 로 흐른다고 하자. 한 변이 $1$ 인 상자 $\lbrack 0,1\rbrack^3$ 의 면마다 밖으로 나가는 물의 양을 잰다. 면 $x=1$ 에서는 바깥쪽이 $x$ 축 방향이고 그 방향의 속도가 $x=1$ 이므로 매초 넓이 $1$ 에 속도 $1$ 을 곱한 양 $1$ 이 나간다. 면 $x=0$ 에서는 바깥쪽이 $-x$ 방향이고 그 방향의 속도가 $-x=0$ 이므로 나가는 양이 $0$ 이다. $y$ 쪽 두 면과 $z$ 쪽 두 면도 같아서, 상자 밖으로 매초 나가는 양은 $3$ 이다.

$x$ 쪽 두 면의 몫만 따로 보면 면 위의 각 점 $(y,z)$ 에서 $F_1(1,y,z)-F_1(0,y,z)$ 를 더한 것이다. [미적분학의 기본 정리](fundamental-calculus.md)로 이 차는 $\int_0^1\frac{\partial F_1}{\partial x}\thinspace dx$ 이므로, $x$ 쪽 몫은 상자 안에서 $\partial F_1/\partial x$ 를 적분한 값이다. 세 방향을 더하면 나가는 양은 상자 안에서 다음 값을 적분한 것이다.

$$
\frac{\partial F_1}{\partial x}+\frac{\partial F_2}{\partial y}+\frac{\partial F_3}{\partial z}
$$

예에서는 이 값이 어디서나 $1+1+1=3$ 이고 상자의 부피가 $1$ 이므로 적분은 $3$ 이다. 면 여섯 개를 따로 잰 값과 같다.

# 정의

## 유량

곡면 $S$ 가 $r(u,v)$, $(u,v)\in D$ 로 매개화되어 있고 $r_u\times r_v$ 가 정한 방향을 $S$ 의 향으로 잡는다. [벡터장](vector-fields.md) $F$ 의 $S$ 를 지나는 **유량(flux)** 은 다음이다.

$$
\iint_S F\cdot n\thinspace dS=\iint_D F(r(u,v))\cdot(r_u\times r_v)\thinspace du\thinspace dv
$$

$n$ 은 단위법선이고 $dS$ 는 넓이 요소다. 우변은 매개화를 바꾸어도 향이 같으면 값이 같고, 이것은 [치환적분](integration-by-substitution.md)에서 나온다. 직관 절의 면 $x=1$ 은 $r(u,v)=(1,u,v)$ 이고 $r_u\times r_v=(1,0,0)$ 이어서 유량이 $\iint_{\lbrack 0,1\rbrack^2}1\thinspace du\thinspace dv=1$ 이다.

## 발산

$C^1$ 벡터장 $F=(F_1,F_2,F_3)$ 의 **발산(divergence)** 은 다음 함수다.

$$
\mathrm{div}\thinspace F=\nabla\cdot F=\frac{\partial F_1}{\partial x}+\frac{\partial F_2}{\partial y}+\frac{\partial F_3}{\partial z}
$$

직관 절의 $F=(x,y,z)$ 는 $\mathrm{div}\thinspace F=3$ 이다.

## 발산 정리

발산 정리는 다음이다. $\Omega\subseteq\mathbb R^3$ 이 유계 영역이고 경계 $\partial\Omega$ 가 조각마다 매끄러운 곡면이며, $n$ 이 바깥쪽 단위법선이고 $F$ 가 $\Omega$ 의 폐포를 포함하는 열린집합에서 $C^1$ 이면 다음이 성립한다.

$$
\iint_{\partial\Omega}F\cdot n\thinspace dS=\iiint_\Omega\mathrm{div}\thinspace F\thinspace dV
$$

Gauss 정리(Gauss's theorem)라고도 한다[^1].

# 성질

## 증명의 요지

$\Omega$ 가 $(y,z)\in D$ 이고 $g(y,z)\le x\le h(y,z)$ 인 점 $(x,y,z)$ 전체이면 미적분학의 기본 정리로 다음이 나온다.

$$
\iiint_\Omega\frac{\partial F_1}{\partial x}\thinspace dV=\iint_D\bigl(F_1(h(y,z),y,z)-F_1(g(y,z),y,z)\bigr)\thinspace dy\thinspace dz
$$

우변은 $(F_1,0,0)$ 이 윗면 $x=h$ 와 아랫면 $x=g$ 를 지나는 유량이고, 옆면에서는 법선의 $x$ 성분이 $0$ 이어서 유량이 없다. 직관 절의 상자 계산이 $g=0$, $h=1$ 인 경우다.

$\Omega$ 가 세 방향 모두로 이런 꼴이면 세 식을 더해 정리가 나온다. 일반 영역은 이런 조각으로 자르고 더한다. 두 조각이 맞닿은 면에서는 바깥쪽 법선이 서로 반대여서 유량이 지워진다.

## 평면판과 일반판

평면에서 같은 진술은 [Green 정리](greens-theorem.md)의 발산 꼴이다. 경계 곡선을 지나 나가는 양이 영역에서 발산을 적분한 값과 같다.

$\mathbb R^n$ 의 영역에서도 같은 식이 성립하고, $\mathrm{div}\thinspace F=\sum_i\partial F_i/\partial x_i$ 다. [미분형식](differential-forms.md)으로 쓰면 $F$ 에 대응하는 $(n-1)$ 형식 $\omega$ 의 외미분이 $\mathrm{div}\thinspace F\thinspace dV$ 이고, 발산 정리는 일반 Stokes 정리(Stokes' theorem) $\int_{\partial\Omega}\omega=\int_\Omega d\omega$ 의 한 경우다.

## 원점의 점 원천

$F(x)=x/\vert x\vert^3$ 은 원점 밖에서 $\mathrm{div}\thinspace F=0$ 이다. 반지름 $r$ 인 구면에서는 $F\cdot n=1/r^2$ 이고 넓이가 $4\pi r^2$ 이므로 유량이 $4\pi$ 다.

원점을 둘러싼 아무 닫힌 곡면 $S$ 와 그 안의 작은 구면 사이의 영역에 발산 정리를 쓰면 발산이 $0$ 이므로 두 유량이 같다. 따라서 원점을 둘러싼 닫힌 곡면을 지나는 유량은 모두 $4\pi$ 이고, 원점을 둘러싸지 않는 곡면에서는 $0$ 이다. 전하 하나가 만드는 전기장에 대한 Gauss 법칙(Gauss's law)이 이것이다.

## Green 항등식

$u,v$ 가 $C^2$ 이면 $F=u\nabla v$ 의 발산은 $\nabla u\cdot\nabla v+u\thinspace\Delta v$ 이다. 발산 정리에 넣으면 Green 제1 항등식(Green's first identity)이 나온다.

$$
\iiint_\Omega\bigl(\nabla u\cdot\nabla v+u\thinspace\Delta v\bigr)\thinspace dV=\iint_{\partial\Omega}u\thinspace\frac{\partial v}{\partial n}\thinspace dS
$$

$\Delta$ 는 [Laplace 연산자](laplace-operator.md)이고 $\partial v/\partial n=\nabla v\cdot n$ 이다. $u$ 와 $v$ 를 바꾼 식을 빼면 Green 제2 항등식이다.

# 활용

- [부분적분](integration-by-parts.md)의 다변수판. 발산 정리를 $uv$ 의 성분에 쓰면 $\int_\Omega u\thinspace\partial_iv=\int_{\partial\Omega}uv\thinspace n_i-\int_\Omega\partial_iu\thinspace v$ 이다.
- 보존법칙. 밀도 $\rho$ 와 속도 $v$ 에서 영역 안 질량의 변화율이 경계를 지나는 유량의 반대와 같다는 식에 발산 정리를 쓰면 연속 방정식(continuity equation) $\partial_t\rho+\mathrm{div}(\rho v)=0$ 이 나온다. [Navier–Stokes 방정식](navier-stokes-equations.md)과 [열방정식](heat-equation.md)이 이 방법으로 유도된다.
- [조화함수](harmonic-functions.md)의 평균값 성질. 반지름 $r$ 인 구면 위의 평균을 $r$ 로 미분한 값이 구 안에서 $\Delta u$ 를 적분한 값에 비례하므로, $\Delta u=0$ 이면 평균이 $r$ 에 무관하다.
- [Stokes 방정식](stokes-equations.md)의 압력. 경계에서 $0$ 인 속도장은 발산의 적분이 $0$ 이어서 압력이 상수 차이만큼 정해지지 않는다.
- [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)의 자기수반성. 다양체의 발산 정리로 $\int u\thinspace\Delta v=\int v\thinspace\Delta u$ 를 얻는다.

[^1]: J. Stewart, *Calculus: Early Transcendentals*, 8th ed., Cengage, 2016, Section 16.9.

# 연관 문서

## 선수지식

- [Green 정리](greens-theorem.md)
- [치환적분](integration-by-substitution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry
