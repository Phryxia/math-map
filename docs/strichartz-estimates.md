# Strichartz 추정

# 개요

**Strichartz 추정(Strichartz estimate)** 은 [Schrödinger 방정식](schrodinger-equation.md)의 해를 시간과 공간에 걸쳐 함께 적분한 크기를 처음 상태의 크기로 누르는 부등식이다. 한 점 근처에 모인 파동은 매 순간 전체 확률은 그대로이면서 높이는 낮아진다. 높이가 얼마나 빨리 낮아지는지를 시간에 대해 적분하면 유한한 값이 나오고, 이 값으로 비선형 항이 붙은 방정식의 해가 존재함을 보인다.

# 직관

1차원 [비선형 Schrödinger 방정식](nonlinear-schrodinger-equation.md) $i\psi_t+\psi_{xx}=\vert\psi\vert^2\psi$ 의 해를 만들려고 한다. 비선형 항을 바깥에서 들어오는 힘으로 보면 시각 $t$ 의 해는 처음 상태에서 자유롭게 퍼진 파동에, 각 시각 $s$ 에 들어온 $\vert\psi\vert^2\psi$ 가 남은 시간 $t-s$ 동안 퍼진 파동을 더한 것이다. 자유 방정식은 확률 $\int\vert\psi\vert^2dx$ 를 보존하므로, 더한 항의 크기는 $\int_0^t\Vert\vert\psi\vert^2\psi(s)\Vert_{L^2}ds$ 이하다.

이 적분은 $\int_0^t\sup_x\vert\psi(x,s)\vert^2\cdot\Vert\psi(s)\Vert_{L^2}ds$ 이하이므로 해의 최댓값을 시간에 대해 적분할 수 있어야 한다. 확률이 유한한 함수는 최댓값이 무한일 수 있으니 매 순간의 확률만으로는 이 적분을 누를 수 없다.

처음 상태가 $\psi_0(x)=e^{-x^2/2}$ 인 자유 방정식의 해에서 이 적분을 직접 계산한다. Schrödinger 방정식 문서의 직관 절대로 다음이 나온다.

$$
\vert\psi(x,t)\vert^2=\frac{1}{\sqrt{1+4t^2}}\exp\Bigl(-\frac{x^2}{1+4t^2}\Bigr)
$$

확률 $\int\vert\psi\vert^2dx=\sqrt\pi$ 는 시간에 따라 변하지 않으므로 이것을 모든 시간에 걸쳐 적분하면 무한이다. 최댓값은 $x=0$ 에서 $(1+4t^2)^{-1/4}$ 이고 시간이 갈수록 줄어든다. 그 네제곱을 모든 시간에 걸쳐 적분하면 유한하다.

$$
\int_{-\infty}^{\infty}\sup_x\vert\psi(x,t)\vert^4\thinspace dt=\int_{-\infty}^{\infty}\frac{dt}{1+4t^2}=\frac\pi2
$$

처음 상태의 $L^2$ 노름은 $\pi^{1/4}$ 이므로 최댓값의 시간 $L^4$ 노름 $(\pi/2)^{1/4}$ 가 처음 상태의 $L^2$ 노름의 $2^{-1/4}$ 배다. 이 비율이 처음 상태에 상관없이 한 상수 이하라는 것이 Strichartz 추정이다.

# 정의

$\mathbb R\times\mathbb R^n$ 위의 함수 $F(t,x)$ 의 **혼합 노름(mixed norm)** 은 매 시각 공간 $L^r$ 노름을 잡고 그것의 시간 $L^q$ 노름을 잡은 것이다.

$$
\Vert F\Vert\_{L^q\_tL^r\_x}=\Bigl(\int_{\mathbb R}\Bigl(\int_{\mathbb R^n}\vert F(t,x)\vert^r\thinspace dx\Bigr)^{q/r}dt\Bigr)^{1/q}
$$

$q$ 나 $r$ 가 $\infty$ 이면 해당 적분을 상한으로 바꾼다. 직관 절의 계산은 $\Vert\psi\Vert\_{L^4\_tL^\infty\_x}=(\pi/2)^{1/4}$ 이다. 이 노름은 [Lᵖ 공간](lp-spaces.md)의 노름을 두 변수에 차례로 적용한 것이다.

지수의 쌍 $(q,r)$ 가 $2\le q,r\le\infty$, $(q,r,n)\ne(2,\infty,2)$ 이고 다음을 만족하면 **허용 쌍(admissible pair)** 이라 한다.

$$
\frac2q+\frac nr=\frac n2
$$

$n=1$ 이면 $(4,\infty)$ 와 $(6,6)$ 과 $(\infty,2)$ 가 허용 쌍이다. 직관 절의 $(4,\infty)$ 가 그 가운데 하나다.

$e^{it\Delta}\psi_0$ 을 처음 상태가 $\psi_0$ 인 자유 방정식 $i\psi_t+\Delta\psi=0$ 의 해라 하자. **Strichartz 추정** 은 허용 쌍 $(q,r)$ 마다 $n$, $q$, $r$ 에만 의존하는 상수 $C$ 가 있어 모든 $\psi_0\in L^2(\mathbb R^n)$ 에서 다음이 성립한다는 것이다.

$$
\Vert e^{it\Delta}\psi_0\Vert\_{L^q\_tL^r\_x}\le C\Vert\psi_0\Vert\_{L^2}
$$

허용 쌍 $(\tilde q,\tilde r)$ 의 켤레 지수 $\tilde q'$, $\tilde r'$ 에 대해 바깥 힘 $F$ 가 만드는 항도 같은 꼴로 눌린다.

$$
\Bigl\Vert\int_0^te^{i(t-s)\Delta}F(s)\thinspace ds\Bigr\Vert\_{L^q\_tL^r\_x}\le C\Vert F\Vert\_{L^{\tilde q'}\_tL^{\tilde r'}\_x}
$$

# 성질

## 허용 조건과 척도

$\psi$ 가 자유 방정식의 해이면 $\psi\_\lambda(t,x)=\psi(\lambda^2t,\lambda x)$ 도 해다. 처음 상태의 $L^2$ 노름은 $\lambda^{-n/2}$ 배가 되고, 해의 $L^q\_tL^r\_x$ 노름은 $\lambda^{-2/q-n/r}$ 배가 된다. 두 배율이 같지 않으면 $\lambda\to 0$ 이나 $\lambda\to\infty$ 에서 부등식이 깨지므로 $2/q+n/r=n/2$ 가 필요하다. $q\ge 2$ 는 시간 평행이동에 대한 불변성에서 나온다[^1].

## 증명의 요지

첫 단계는 고정된 시각의 감쇠다. Schrödinger 방정식 문서의 분산 추정 $\Vert e^{it\Delta}f\Vert\_{L^\infty}\le(4\pi\vert t\vert)^{-n/2}\Vert f\Vert\_{L^1}$ 과 $L^2$ 노름 보존을 [Riesz–Thorin 정리](riesz-thorin.md)로 보간하면 $2\le r\le\infty$ 에서 다음이 나온다.

$$
\Vert e^{it\Delta}f\Vert\_{L^r}\le C\vert t\vert^{-n(1/2-1/r)}\Vert f\Vert\_{L^{r'}}
$$

둘째 단계는 $TT^\ast$ 논법($TT^\ast$ argument)이다. $T\psi_0=e^{it\Delta}\psi_0$ 이 $L^2$ 에서 $L^q\_tL^r\_x$ 로 유계인 것은 $TT^\ast F(t)=\int e^{i(t-s)\Delta}F(s)\thinspace ds$ 가 $L^{q'}\_tL^{r'}\_x$ 에서 $L^q\_tL^r\_x$ 로 유계인 것과 동치이고, 두 작용소 노름 사이에 $\Vert TT^\ast\Vert=\Vert T\Vert^2$ 가 성립한다. 허용 조건에서 첫 단계의 지수는 $n(1/2-1/r)=2/q$ 이므로 $\Vert TT^\ast F(t)\Vert\_{L^r}$ 은 $\int\vert t-s\vert^{-2/q}\Vert F(s)\Vert\_{L^{r'}}ds$ 이하다. $2\lt q\lt\infty$ 이면 $0\lt 2/q\lt 1$ 이고, 1차원 [Hardy–Littlewood–Sobolev 부등식](hardy-littlewood-sobolev-inequality.md)이 이 시간 합성곱을 $L^{q'}$ 에서 $L^q$ 로 누른다[^1].

## 끝점

$q=2$ 이면 시간 합성곱의 핵이 $\vert t-s\vert^{-1}$ 이 되어 Hardy–Littlewood–Sobolev 부등식이 성립하지 않는다. Keel 과 Tao 는 $n\ge 3$ 의 끝점 $(2,2n/(n-2))$ 에서 Strichartz 추정이 성립함을 다른 논법으로 증명했다[^2]. $n=2$ 의 $(2,\infty)$ 에서는 추정이 성립하지 않으므로 이 쌍은 허용 쌍에서 뺀다.

## Fourier 제한과의 관계

자유 방정식의 해는 $\hat\psi(\xi,t)=e^{-it\vert\xi\vert^2}\hat\psi_0(\xi)$ 이므로, 시공간의 [Fourier 변환](fourier-transform.md)으로 보면 포물면 $\tau=-\vert\xi\vert^2$ 위에 놓인 함수다. 그래서 $q=r=2+4/n$ 인 Strichartz 추정은 포물면에 대한 Fourier 제한 부등식과 동치다. Strichartz 는 이 경우를 처음 증명했고, 파동방정식에 대해서는 원뿔에 대한 같은 부등식을 증명했다[^3]. 이 경우는 [Fourier 제한 추측](fourier-restriction-conjecture.md) 문서의 Stein–Tomas 정리(Stein–Tomas theorem)를 포물면에 적용한 것이다.

# 활용

- 비선형 Schrödinger 방정식의 해의 존재. [Duhamel 원리](duhamel-principle.md)로 쓴 적분방정식을 $L^\infty\_tL^2\_x$ 와 Strichartz 노름을 함께 잰 공간에서 [축약사상 고정점 정리](banach-fixed-point.md)로 푼다. 직관 절의 1차원 3차 방정식에서는 쌍대 쌍 $(4/3,1)$ 을 써서 길이 $T$ 인 시간 구간에서 비선형 항을 다음과 같이 누른다.

  $$
  \Vert\vert\psi\vert^2\psi\Vert\_{L^{4/3}\_tL^1\_x}\le T^{1/2}\Vert\psi\Vert\_{L^\infty\_tL^2\_x}^2\Vert\psi\Vert\_{L^4\_tL^\infty\_x}
  $$

  축약사상이 성립하는 길이 $T$ 가 $\Vert\psi_0\Vert\_{L^2}$ 에만 의존하므로 확률 보존과 함께 해를 모든 시각으로 잇는다[^4].
- 파동방정식과 다른 분산 방정식. [파동방정식](wave-equation.md), [Klein–Gordon 방정식](klein-gordon-equation.md)(Klein–Gordon equation), [Korteweg–de Vries 방정식](korteweg-de-vries-equation.md)에도 각각의 분산 추정에서 같은 논법으로 Strichartz 추정이 나오고, 비선형 파동방정식의 해의 존재에 쓰인다[^1].
- [산란](nonlinear-scattering.md). 해의 Strichartz 노름이 모든 시간에서 유한하면 해가 $t\to\pm\infty$ 에서 자유 방정식의 해에 가까워진다. 비선형 방정식의 해가 결국 선형처럼 퍼지는지를 이것으로 판정한다.
- 진동수 분해. [Littlewood–Paley 이론](littlewood-paley.md)으로 초기값을 진동수 띠로 나누고 띠마다 Strichartz 추정을 쓰는 것이 미분을 포함한 비선형 항을 다루는 방법이다.

[^1]: T. Tao, *Nonlinear Dispersive Equations: Local and Global Analysis*, CBMS Regional Conference Series in Mathematics 106, American Mathematical Society, 2006, 2.3 절.
[^2]: M. Keel, T. Tao, "Endpoint Strichartz estimates", *American Journal of Mathematics* 120 (1998), 955–980.
[^3]: R. S. Strichartz, "Restrictions of Fourier transforms to quadratic surfaces and decay of solutions of wave equations", *Duke Mathematical Journal* 44 (1977), 705–714.
[^4]: Y. Tsutsumi, "L²-solutions for nonlinear Schrödinger equations and nonlinear groups", *Funkcialaj Ekvacioj* 30 (1987), 115–125.

# 연관 문서

## 선수지식

- [Schrödinger 방정식](schrodinger-equation.md)
- [Riesz–Thorin 정리](riesz-thorin.md)
- [Hardy–Littlewood–Sobolev 부등식](hardy-littlewood-sobolev-inequality.md)

## 더 알아보기

- [비선형 분산 방정식의 산란](nonlinear-scattering.md)

#analysis #functional_analysis
