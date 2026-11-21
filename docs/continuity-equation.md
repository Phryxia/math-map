# 연속 방정식

# 개요

**연속 방정식(continuity equation)** 은 흐름에 실려 움직이는 양이 새로 생기거나 사라지지 않는다는 것을 적는 편미분방정식 $\rho_t+\nabla\cdot(\rho v)=0$ 이다. 관을 흐르는 물에서 한 구간의 물이 늘어나는 양은 왼쪽 끝으로 들어온 양에서 오른쪽 끝으로 나간 양을 뺀 것이다. 이 방정식은 그 수지 계산을 점마다의 식으로 바꾸고, 해는 흐름이 처음 분포를 옮겨 놓은 결과로 적힌다.

# 직관

직선 위에서 밀도 $\rho(x,t)$ 인 물질이 속도 $v(x,t)$ 로 흐른다. 점 $x$ 를 단위 시간에 지나는 양은 $\rho v$ 이므로 구간 $\lbrack a,b\rbrack$ 안의 양은 다음처럼 변한다.

$$
\frac{d}{dt}\int_a^b\rho\thinspace dx=(\rho v)(a,t)-(\rho v)(b,t)=-\int_a^b(\rho v)\_x\thinspace dx
$$

모든 구간에서 성립하므로 $\rho_t+(\rho v)\_x=0$ 이다.

[수송 방정식](transport-equation.md)의 둘째 강처럼 속도가 $v=x$ 이고 처음 밀도가 $\lbrack 1,2\rbrack$ 에서 $1$ 이라 하자. 물질은 특성곡선 $x_0e^t$ 를 따라 움직여 $t=\log 2$ 에 $\lbrack 2,4\rbrack$ 를 차지한다. 양은 $1$ 그대로이고 길이가 두 배이므로 밀도는 $1/2$ 이다. 실제로 $\rho(x,t)=e^{-t}\rho_0(xe^{-t})$ 가 $\rho_t+(x\rho)\_x=0$ 의 해다.

# 정의

## 연속 방정식

$\rho(x,t)$ 를 $\mathbb R^n$ 위의 밀도, $v(x,t)$ 를 속도인 [벡터장](vector-fields.md)이라 하자. $\rho v$ 를 **유속(flux)** 이라 하고, 다음 식을 연속 방정식이라 한다.

$$
\rho_t+\nabla\cdot(\rho v)=0
$$

오른쪽에 원천 $\sigma(x,t)$ 를 두면 단위 시간 단위 부피당 $\sigma$ 만큼 생기는 경우다. 직관 절의 예는 $n=1$, $v=x$, $\sigma=0$ 이다.

## 적분꼴

영역 $V$ 의 경계를 $\partial V$, 바깥 법선을 $n$ 이라 하면 [발산 정리](divergence-theorem.md)로 연속 방정식은 다음과 같다.

$$
\frac{d}{dt}\int_V\rho\thinspace dx=-\int_{\partial V}\rho\thinspace v\cdot n\thinspace dA
$$

영역 안의 양이 늘어나는 속도가 경계로 들어오는 유량과 같다. 직관 절의 첫 식이 $n=1$ 의 경우다.

# 성질

## 전체 양의 보존

$\rho v$ 가 무한원에서 빨리 줄어들면 적분꼴에서 $V$ 를 키워 $\int_{\mathbb R^n}\rho\thinspace dx$ 가 시간에 따라 변하지 않는다.

## 흐름으로 쓴 해

$v$ 가 $x$ 에 대해 Lipschitz 이면 특성곡선 $X'(t)=v(X(t),t)$ 가 점마다 하나씩 있다. 시각 $0$ 의 점 $x_0$ 를 시각 $t$ 의 점으로 보내는 사상을 $\Phi_t$, 그 Jacobi 행렬을 $D\Phi_t$ 라 하면 해는 다음을 만족한다.

$$
\rho\big(\Phi_t(x_0),t\big)\thinspace\det D\Phi_t(x_0)=\rho_0(x_0)
$$

작은 덩어리가 차지하는 부피가 $\det D\Phi_t$ 배가 되므로 밀도는 그만큼 줄어든다. 직관 절에서는 $\Phi_t(x_0)=x_0e^t$, $\det D\Phi_t=e^t$ 이고 밀도가 $e^{-t}$ 배다. 측도로 쓰면 시각 $t$ 의 분포는 처음 분포를 $\Phi_t$ 로 옮긴 [상측도](pushforward-measure.md)다.

증명의 요지는 Liouville 공식(Liouville's formula)이다. $J(t)=\det D\Phi_t(x_0)$ 은 $J'(t)=(\nabla\cdot v)(\Phi_t(x_0),t)\thinspace J(t)$ 를 만족하고, 이것을 특성곡선 위의 $\rho$ 의 식과 곱하면 $\rho J$ 의 미분이 $0$ 이다.

## 수송 방정식과의 관계

곱의 미분으로 풀면 연속 방정식은 다음이다.

$$
\rho_t+v\cdot\nabla\rho=-\rho\thinspace\nabla\cdot v
$$

왼쪽은 특성곡선을 따른 $\rho$ 의 변화율이다. 그러므로 특성곡선 위에서 $\log\rho$ 는 $-\nabla\cdot v$ 의 비율로 변한다. $\nabla\cdot v=0$ 인 흐름, 곧 부피를 바꾸지 않는 흐름에서는 연속 방정식과 수송 방정식이 같다.

## 측도의 연속 방정식

밀도가 없는 분포에도 쓸 수 있게 약한 꼴로 쓴다. 확률측도의 곡선 $\mu_t$ 가 모든 매끄럽고 받침이 콤팩트한 $\varphi$ 에 대해 다음을 만족하면 연속 방정식의 해라 한다.

$$
\frac{d}{dt}\int\varphi\thinspace d\mu_t=\int\nabla\varphi\cdot v_t\thinspace d\mu_t
$$

$\mu_t$ 가 밀도 $\rho_t$ 를 가지면 부분적분으로 원래 식이 나온다. 점질량 $\delta_{X(t)}$ 는 $X'=v(X,t)$ 일 때 이 식을 만족한다.

# 활용

- 유체. [Navier–Stokes 방정식](navier-stokes-equations.md)은 운동량 식에 질량의 연속 방정식을 짝지은 계다. 밀도가 일정한 유체에서는 연속 방정식이 비압축 조건 $\nabla\cdot v=0$ 이 된다.
- 전하 보존. [Maxwell 방정식](maxwell-equations.md)에서 전하 밀도와 전류 밀도는 연속 방정식 $\rho_t+\nabla\cdot J=0$ 을 만족한다.
- 확률의 흐름. [Schrödinger 방정식](schrodinger-equation.md)의 $\rho=\vert\psi\vert^2$ 는 $j=2\thinspace\mathrm{Im}(\bar\psi\nabla\psi)$ 에 대한 연속 방정식 $\rho_t+\nabla\cdot j=0$ 을 만족한다. [Fokker–Planck 방정식](fokker-planck.md)은 속도장 $b-\nabla\log\rho$ 의 연속 방정식으로 쓸 수 있다.
- 최적 수송. 두 분포 사이의 $W_2$ 거리의 제곱은 연속 방정식을 만족하는 곡선 $(\rho_t,v_t)$ 가운데 운동 에너지 $\int_0^1\int\vert v_t\vert^2\rho_t\thinspace dx\thinspace dt$ 의 최솟값이다. 이것을 Benamou–Brenier 공식(Benamou–Brenier formula)이라 하고, [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)이 이 꼴에서 [최적 수송](optimal-transport.md)의 거리를 쓴다.

# 연관 문서

## 선수지식

- [수송 방정식](transport-equation.md)
- [발산 정리](divergence-theorem.md)

## 더 알아보기

- [유체의 Euler 방정식](euler-equations-fluid.md)

#analysis #probability
