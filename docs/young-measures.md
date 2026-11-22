# Young 측도

# 개요

**Young 측도(Young measure)** 는 빠르게 진동하는 함수열이 각 점 근처에서 어떤 값을 어떤 비율로 갖는지를 확률측도로 기록한 것이다. 기울기가 $1$ 과 $-1$ 을 번갈아 갖는 톱니 함수는 톱니가 잘아질수록 $0$ 에 가까워지지만, 기울기는 어느 점 근처에서나 $1$ 과 $-1$ 을 절반씩 갖는다. 기울기의 극한을 함수 하나로 적으면 $0$ 이고, 이 $0$ 은 기울기의 제곱이 늘 $1$ 이라는 사실을 잃는다.

Young 측도는 각 점에 $\tfrac12\delta\_{-1}+\tfrac12\delta_1$ 같은 확률측도를 주어, 진동하는 함수의 어떤 연속함수의 극한이든 그 측도의 기댓값으로 계산한다.

# 직관

Bolza 문제(Bolza problem)는 다음 에너지를 $u(0)=u(1)=0$ 인 함수에서 최소화하는 것이다.

$$
I(u)=\int_0^1\bigl((u'^2-1)^2+u^2\bigr)\thinspace dx
$$

톱니 함수 $u_k$ 를 기울기 $\pm 1$ 로 $2k$ 번 오르내리게 만들면 $(u_k'^2-1)^2=0$ 이고 $\vert u_k\vert\le 1/(2k)$ 이므로 $I(u_k)\le 1/(4k^2)$ 이다. 하한은 $0$ 이다. $I(u)=0$ 이려면 $u=0$ 이면서 $\vert u'\vert=1$ 이어야 하므로 최소점이 없다.

$u_k\to 0$ 이고 $u_k'$ 은 $0$ 으로 약하게 수렴한다. 극한 함수 $0$ 의 에너지는 $I(0)=1$ 이어서 $\lim I(u_k)=0$ 과 다르다. $(s^2-1)^2$ 이 볼록이 아니어서 약수렴이 에너지를 보존하지 않는다.

$u_k'$ 의 값은 어느 작은 구간에서나 $1$ 과 $-1$ 이 길이의 절반씩을 차지한다. 그러므로 연속함수 $g$ 에 대해 $g(u_k')$ 은 $\tfrac12g(-1)+\tfrac12g(1)$ 로 약하게 수렴한다. 이 값을 주는 측도 $\nu=\tfrac12\delta\_{-1}+\tfrac12\delta_1$ 을 쓰면 극한 에너지는 $\int\bigl(\langle\nu,(s^2-1)^2\rangle+0\bigr)dx=0$ 으로 맞다.

# 정의

## Young 측도

$\Omega\subset\mathbb R^n$ 이 측도가 유한한 열린집합이고 $K\subset\mathbb R^m$ 이 콤팩트 집합이라 하자. 각 점 $x\in\Omega$ 에 $K$ 위의 확률측도 $\nu_x$ 를 주고, 모든 연속함수 $g$ 에서 $x\mapsto\langle\nu_x,g\rangle=\int g\thinspace d\nu_x$ 가 [가측함수](measurable-functions.md)인 족 $(\nu_x)\_{x\in\Omega}$ 를 **Young 측도** 라 한다.

$u_k:\Omega\to K$ 가 가측함수열이고 모든 연속함수 $g$ 와 모든 $\psi\in L^1(\Omega)$ 에서 다음이 성립하면 $(u_k)$ 가 $(\nu_x)$ 를 **생성한다(generate)** 고 한다.

$$
\int\_\Omega\psi(x)\thinspace g(u_k(x))\thinspace dx\to\int\_\Omega\psi(x)\thinspace\langle\nu_x,g\rangle\thinspace dx
$$

직관 절의 $u_k'$ 은 모든 $x$ 에서 $\nu_x=\tfrac12\delta\_{-1}+\tfrac12\delta_1$ 인 Young 측도를 생성한다.

# 성질

## Young 측도의 존재

정리(Young). 값이 콤팩트 집합 $K$ 에 드는 가측함수열 $(u_k)$ 는 Young 측도를 생성하는 부분열을 갖는다[^1][^2].

증명의 요지. $u_k$ 를 $\psi\otimes g\mapsto\int\psi\thinspace g(u_k)$ 로 정한 $L^1(\Omega;C(K))$ 위의 유계 선형범함수로 본다. 이 범함수들의 노름은 $1$ 이하이므로 [Banach–Alaoglu 정리](banach-alaoglu.md)로 약별 수렴하는 부분열이 있다. 그 극한이 음이 아니고 $g=1$ 에서 $1$ 을 주므로 점마다 확률측도의 족으로 적힌다.

## 무게중심과 약극한

$g(s)=s$ 를 넣으면 $u_k$ 의 약극한은 $u(x)=\langle\nu_x,s\rangle$, 곧 $\nu_x$ 의 무게중심이다. 직관 절에서 $\tfrac12(-1)+\tfrac12\cdot 1=0$ 이 $u_k'$ 의 약극한이다.

## 강수렴의 판정

정리. Young 측도 $\nu_x$ 를 생성하는 $(u_k)$ 가 측도 수렴하는 것은 거의 모든 $x$ 에서 $\nu_x$ 가 한 점의 질량 $\delta\_{u(x)}$ 인 것과 동치다[^2].

증명의 요지. 측도 수렴하면 $g(u_k)\to g(u)$ 이므로 $\langle\nu_x,g\rangle=g(u(x))$ 이다. 거꾸로 $\nu_x=\delta\_{u(x)}$ 이면 $\vert u_k-u\vert^2$ 의 적분이 $\langle\nu_x,\vert s-u(x)\vert^2\rangle=0$ 의 적분으로 가므로 $L^2$ 수렴한다.

## Jensen 부등식과 약 아래 반연속성

$g$ 가 볼록이면 [Jensen 부등식](jensen-inequality.md)으로 $g(u(x))\le\langle\nu_x,g\rangle$ 이다. 그러므로 볼록한 피적분함수의 적분 $\int g(u_k)$ 의 극한은 $\int g(u)$ 이상이고, [변분법의 직접법](direct-method.md)의 약 아래 반연속성이 이것이다. 직관 절의 $(s^2-1)^2$ 은 볼록이 아니고, $\langle\nu,g\rangle=0\lt 1=g(0)$ 이어서 부등식이 성립하지 않는다.

## Tartar 의 교환 관계

스칼라 보존 법칙 $\partial_tu+\partial_xf(u)=0$ 의 점성 근사해 $u_k$ 가 Young 측도 $\nu$ 를 생성한다고 하자. 엔트로피 쌍 $(\eta_i,q_i)$ 로 만든 벡터장 $(\eta_1(u_k),q_1(u_k))$ 와 $(q_2(u_k),-\eta_2(u_k))$ 에 [div–curl 보조정리](div-curl-lemma.md)를 쓰면 다음 교환 관계가 나온다[^3].

$$
\langle\nu,\eta_1q_2-\eta_2q_1\rangle=\langle\nu,\eta_1\rangle\langle\nu,q_2\rangle-\langle\nu,\eta_2\rangle\langle\nu,q_1\rangle
$$

$f$ 가 어느 구간에서도 일차함수가 아니면 이 관계를 만족하는 확률측도는 한 점의 질량뿐이다. 강수렴의 판정으로 $u_k$ 가 강하게 수렴하고 극한이 해다.

# 활용

- 결정의 미세 구조. 형상 기억 합금의 에너지는 두 결정 상태에서 최소인 볼록이 아닌 함수이고, 최소화열은 두 상태가 아주 가는 층으로 번갈아 나타나는 쌍정을 이룬다. Ball–James 이론은 이 층 구조를 변형 기울기의 Young 측도 $\lambda\delta_A+(1-\lambda)\delta_B$ 로 기술하고, $A-B$ 가 계수 $1$ 인 행렬이어야 함을 보인다[^4].
- 완화 문제(relaxation). 최소점이 없는 변분 문제를 Young 측도 위의 문제로 바꾸면 최소점이 생기고, 그 값은 원래 문제의 하한과 같다. 직관 절의 Bolza 문제에서 완화한 최소점은 $u=0$ 과 $\nu=\tfrac12\delta\_{-1}+\tfrac12\delta_1$ 이다.
- 보존 법칙의 측도값 해. DiPerna 는 Young 측도로 값을 주는 측도값 해(measure-valued solution)를 정의하고, 교환 관계로 [Burgers 방정식](burgers-equation.md) 같은 보존 법칙에서 측도값 해가 실제 해로 줄어듦을 보였다[^3].
- 최적 제어. 제어가 빠르게 진동해야 비용이 줄어드는 문제에서 Young 측도가 진동하는 제어의 극한, 곧 완화된 제어(relaxed control)를 준다.

[^1]: L. C. Young, "Generalized curves and the existence of an attained absolute minimum in the calculus of variations", Comptes Rendus de la Société des Sciences et des Lettres de Varsovie, Classe III **30** (1937), 212–234.

[^2]: J. M. Ball, "A version of the fundamental theorem for Young measures", in *PDEs and Continuum Models of Phase Transitions*, Lecture Notes in Physics **344**, Springer (1989), 207–215.

[^3]: R. J. DiPerna, "Convergence of approximate solutions to conservation laws", Archive for Rational Mechanics and Analysis **82** (1983), 27–70. 교환 관계는 L. Tartar, "Compensated compactness and applications to partial differential equations", Research Notes in Mathematics **39**, Pitman (1979), 136–212 에 있다.

[^4]: J. M. Ball, R. D. James, "Fine phase mixtures as minimizers of energy", Archive for Rational Mechanics and Analysis **100** (1987), 13–52.

# 연관 문서

## 선수지식

- [변분법의 직접법](direct-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #measure_theory
