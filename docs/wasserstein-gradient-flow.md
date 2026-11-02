# Wasserstein 기울기 흐름

# 개요

**Wasserstein 기울기 흐름(Wasserstein gradient flow)** 은 확률분포를 조금씩 옮겨 주어진 양을 가장 빨리 줄이는 방향으로 움직이는 흐름이고, 분포 사이의 거리는 [최적 수송](optimal-transport.md)의 $W_2$ 거리로 잰다. 예로 잉크 한 방울이 물에 퍼질 때 각 점의 농도는 [열방정식](heat-equation.md)을 따르지만, 이 운동이 무엇을 줄이고 얼마나 빨리 평형에 가는지는 식만 보아서는 드러나지 않는다. 이 흐름은 그 퍼짐을 엔트로피의 [경사하강](gradient-descent.md)으로 적고, 경사하강의 수렴 속도 계산으로 평형에 가는 속도를 얻는다.

# 직관

유클리드 공간의 경사하강은 한 걸음마다 $x^{k+1}=\arg\min_x\lbrack f(x)+\vert x-x^k\vert^2/(2\tau)\rbrack$ 을 푸는 것과 같고 $\tau\to0$ 에서 $\dot x=-\nabla f(x)$ 가 나온다. $f(x)=x^2/2$ 이면 한 걸음이 $x^{k+1}=x^k/(1+\tau)$ 이고 극한은 $x(t)=x(0)e^{-t}$ 다. 여기서 $\vert x-x^k\vert^2$ 는 공간에 준 거리이므로, 거리를 바꾸면 같은 $f$ 에서 다른 흐름이 나온다.

확률분포에서 같은 걸음을 밟는다. 분포 사이의 거리로 [최적 수송](optimal-transport.md)의 $W_2$ 를 쓰고 줄일 양으로 $\mathcal S(\rho)=\int\rho\log\rho$ 를 쓰면 한 걸음은 $\rho^{k+1}=\arg\min_\rho\lbrack\mathcal S(\rho)+W_2^2(\rho,\rho^k)/(2\tau)\rbrack$ 이다. 수직선의 정규분포 $N(0,\sigma^2)$ 에서는 $\mathcal S=-\tfrac12\log(2\pi e\sigma^2)$ 이고 두 정규분포 사이의 거리는 $W_2=\vert\sigma-\sigma'\vert$ 다.

$\rho^k=N(0,\sigma_k^2)$ 에서 정규분포 가운데 최소점을 찾으면 $-1/\sigma+(\sigma-\sigma_k)/\tau=0$ 이므로 $\sigma_{k+1}=\big(\sigma_k+\sqrt{\sigma_k^2+4\tau}\big)/2$ 다. 이 정규분포는 모든 분포 가운데서도 최소점이다. $\tau$ 가 작으면 $\sigma_{k+1}\approx\sigma_k+\tau/\sigma_k$ 이므로 $\sigma\dot\sigma=1$, 곧 분산이 시간당 $2$ 씩 늘어난다.

[열방정식](heat-equation.md) $\partial_t\rho=\partial_x^2\rho$ 의 해도 $N(0,\sigma_0^2)$ 에서 시작하면 $N(0,\sigma_0^2+2t)$ 다. 잉크가 퍼지는 운동이 $W_2$ 거리로 잰 엔트로피의 경사하강과 같다.

# 정의

## Otto 미적분

$\mathcal P_2(\mathbb R^d)$ 는 2차 적률이 유한한 확률측도의 공간이다. $W_2$ 의 Benamou–Brenier 동적 표현(Benamou–Brenier formula)이 $\mathcal P_2$ 의 기하를 준다.

$$
W_2^2(\mu,\nu)=\min\Big\lbrace\int_0^1\negthinspace\negthinspace\int|v_t|^2\rho_t\thinspace dx\thinspace dt\ :\ \partial_t\rho_t+\nabla\negthinspace\cdot\negthinspace(\rho_tv_t)=0,\ \rho_0=\mu,\ \rho_1=\nu\Big\rbrace
$$

연속방정식이 곡선 $\rho_t$ 의 속도를 속도장 $v_t$ 로 적고, 그 길이의 제곱이 $\int|v_t|^2\rho_t$ 이므로 $\rho$ 에서의 접공간에 내적이 하나 들어간다.

$$
\langle v_1,v_2\rangle_\rho=\int v_1\cdot v_2\thinspace\rho\thinspace dx
$$

회전 성분은 밀도를 바꾸지 않으면서 길이만 늘리므로 최소화하는 속도장은 항상 기울기장 $v=\nabla\varphi$ 꼴이다. 접공간이 $\lbrace\nabla\varphi\rbrace$ 의 닫힘이 된다. $\mathcal P_2$ 를 이 내적을 가진 형식적인 Riemann 다양체로 다루는 계산을 **Otto 미적분(Otto calculus)** 이라 한다.

직관 절의 정규분포 곡선 $\rho_t=N(0,\sigma_t^2)$ 에서는 $v_t(x)=(\dot\sigma_t/\sigma_t)x$ 가 연속방정식을 만족하고, 이것은 $\varphi=\dot\sigma_tx^2/(2\sigma_t)$ 의 기울기장이다. 길이의 제곱은 $\int v_t^2\rho_t=\dot\sigma_t^2$ 이므로 $\sigma$ 가 일정한 속도로 움직이는 곡선의 길이가 $\vert\sigma_1-\sigma_0\vert=W_2$ 다.

## 자유에너지와 기울기 흐름

$\mathcal P_2(\mathbb R^d)$ 위의 범함수를 세 항으로 적는다.

$$
\mathcal F(\rho)=\underbrace{\int V\rho}\_{\text{퍼텐셜}}
+\underbrace{\frac12\iint W(x-y)\rho(x)\rho(y)}\_{\text{상호작용}}
+\underbrace{\int\rho\log\rho}\_{\text{내부 에너지}}
$$

**Wasserstein 기울기 흐름** 은 연속방정식에 속도장 $v=-\nabla\frac{\delta\mathcal F}{\delta\rho}$ 를 넣은 것이다.

$$
\partial_t\rho=\nabla\negthinspace\cdot\negthinspace\Big(\rho\thinspace\nabla\frac{\delta\mathcal F}{\delta\rho}\Big)
=\nabla\negthinspace\cdot\negthinspace\big(\rho\nabla V\big)+\nabla\negthinspace\cdot\negthinspace\big(\rho(\nabla W\ast\rho)\big)+\Delta\rho
$$

$W=0$ 이면 [Fokker–Planck 방정식](fokker-planck.md), $V=W=0$ 이면 열방정식, 내부 에너지를 $\frac1{m-1}\int\rho^m$ 으로 바꾸면 다공질 매질 방정식(porous medium equation)이다. 수직선에서 $V(x)=x^2/2$, $W=0$ 이면 흐름은 $\partial_t\rho=\partial_x(x\rho)+\partial_x^2\rho$ 이고, $\mathcal F$ 의 최소점 $\rho\propto e^{-V}$ 곧 $N(0,1)$ 이 정상 상태다.

## JKO 스킴

시간 간격 $\tau\gt 0$ 에 대해 $\rho^0=\rho_0$ 에서 시작해 다음을 반복하는 것을 **JKO 스킴(Jordan–Kinderlehrer–Otto scheme)** 이라 한다.[^1]

$$
\rho^{k+1}=\arg\min_{\rho\in\mathcal P_2}\Big[\mathcal F(\rho)+\frac1{2\tau}W_2^2(\rho,\rho^k)\Big]
$$

직관 절의 $\sigma_{k+1}=\big(\sigma_k+\sqrt{\sigma_k^2+4\tau}\big)/2$ 가 $\mathcal F=\mathcal S$ 이고 $\rho^k$ 가 정규분포인 경우의 한 단계다.

## 변위 볼록성

$\mu_0,\mu_1$ 사이의 $W_2$ 측지선 $(\mu_t)\_{t\in[0,1]}$ 을 따라

$$
\mathcal F(\mu_t)\le(1-t)\mathcal F(\mu_0)+t\mathcal F(\mu_1)-\frac\lambda2t(1-t)W_2^2(\mu_0,\mu_1)
$$

이면 $\mathcal F$ 를 **$\lambda$ 변위 볼록(λ-displacement convex)** 이라 한다. 보통의 [볼록성](convexity.md)은 선형 보간 $(1-t)\mu_0+t\mu_1$ 을 따라 재고 여기서는 측지 보간을 따라 잰다.

정규분포 $N(0,\sigma_0^2)$ 과 $N(0,\sigma_1^2)$ 사이의 측지선은 $\sigma_t=(1-t)\sigma_0+t\sigma_1$ 인 $N(0,\sigma_t^2)$ 이다. 그 위에서 $\int\frac{x^2}2\rho=\sigma_t^2/2$ 는 $t$ 에 대한 이계도함수가 $(\sigma_1-\sigma_0)^2=W_2^2$ 이어서 $\lambda=1$ 의 부등식을 등호로 만족한다. $\mathcal S=-\log\sigma_t+c$ 는 $t$ 에 대해 볼록이고 $\lambda=0$ 의 부등식을 만족한다.

# 성질

## 변위 볼록성의 예

$\mathbb R^d$ 에서 엔트로피 $\mathcal S$ 는 $0$ 변위 볼록이고, $V$ 가 $\lambda$ 강볼록이면 $\int V\rho$ 는 $\lambda$ 변위 볼록이다. $W$ 가 볼록이면 상호작용 항은 $0$ 변위 볼록이다.

## 엔트로피의 기울기

$\mathcal S(\rho)=\int\rho\log\rho$ 의 일차 변분은 $\frac{\delta\mathcal S}{\delta\rho}=\log\rho+1$ 이므로 기울기 흐름의 속도장이 $-\nabla\log\rho$ 다. 연속방정식에 넣으면 $\rho$ 와 $1/\rho$ 가 상쇄된다.

$$
\partial_t\rho=\nabla\negthinspace\cdot\negthinspace\big(\rho\thinspace\nabla\log\rho\big)=\nabla\negthinspace\cdot\negthinspace\Big(\rho\thinspace\frac{\nabla\rho}{\rho}\Big)=\Delta\rho
$$

퍼텐셜 항 $\int V\rho$ 를 더하면 속도장에 $-\nabla V$ 가 붙어 Fokker–Planck 방정식이 되고, 이것이 [확률미분방정식](stochastic-differential-equations.md)(stochastic differential equation, SDE) $dX_t=-\nabla V(X_t)dt+\sqrt2\thinspace dB_t$ 의 밀도 방정식이다.

## JKO 정리

JKO 정리(Jordan–Kinderlehrer–Otto theorem)에 따르면 $V$ 가 적당한 성장조건을 만족하고 $\mathcal F(\rho_0)\lt\infty$ 이면, JKO 스킴의 조각별 상수 보간 $\rho^\tau$ 는 $\tau\to0$ 에서 Fokker–Planck 방정식의 유일한 해로 수렴한다.[^1]

각 JKO 단계가 잘 정의된다는 것은 $W_2$ 의 아래반연속성과 $\mathcal F$ 의 콤팩트 준위집합에서 변분법의 직접법으로 나오고, 극한이 해라는 것은 일계 조건을 모아 얻는다. PDE(partial differential equation)의 정칙성 이론을 거치지 않고 존재성이 나온다.

## 소산 항등식과 지수 수렴

기울기 흐름을 따라 에너지가 줄어드는 속도가 기울기의 크기와 같다.

$$
\frac{d}{dt}\mathcal F(\rho_t)=-\int\rho_t\Big|\nabla\frac{\delta\mathcal F}{\delta\rho}\Big|^2=-\mathcal I(\rho_t)
$$

$\mathcal F$ 가 상대 엔트로피이면 $\mathcal I$ 는 [Fisher 정보](fisher-information.md)이고 위 식이 de Bruijn 항등식(de Bruijn identity)과 같은 꼴이다.

$\mathcal F$ 가 $\lambda\gt 0$ 변위 볼록이면 흐름이 지수적으로 수렴한다.

$$
W_2(\rho_t,\rho_\infty)\le e^{-\lambda t}W_2(\rho_0,\rho_\infty),\qquad
\mathcal F(\rho_t)-\mathcal F(\rho_\infty)\le e^{-2\lambda t}\big(\mathcal F(\rho_0)-\mathcal F(\rho_\infty)\big)
$$

두 번째 부등식은 상수 $\lambda$ 의 로그 Sobolev 부등식(logarithmic Sobolev inequality)과 소산 항등식을 합쳐 얻는다. Bakry–Émery 판정법(Bakry–Émery criterion) $\nabla^2V\succeq\lambda I$ 가 $\lambda$ 변위 볼록성의 충분조건이다.

## 거리공간에서의 엄밀화

Otto 미적분은 형식적이다. $\mathcal P_2$ 는 무한차원이고 매끄러운 다양체가 아니며 위의 접공간과 계량은 유추다. Ambrosio, Gigli, Savaré 가 이를 거리공간 위의 기울기 흐름 이론으로 엄밀화했고, 기울기 대신 부등식 하나로 흐름을 정의한다.

$$
\frac12\frac{d}{dt}W_2^2(\rho_t,\sigma)+\frac\lambda2W_2^2(\rho_t,\sigma)+\mathcal F(\rho_t)\le\mathcal F(\sigma)
\quad\text{(모든 }\sigma\text{)}
$$

이 진화 변분 부등식(evolution variational inequality, EVI)을 만족하는 곡선으로 기울기 흐름을 정의하면 미분구조가 없는 거리공간에서도 존재, 유일성, 축약성이 나온다.

# 활용

- 함수부등식. 로그 Sobolev, Talagrand, HWI(entropy H, Wasserstein distance W, Fisher information I) 부등식이 자유에너지의 변위 볼록성에서 따라 나온다.
- 생성모형. 확산모형의 역과정은 점수함수(score function)를 따르는 흐름이고, 목표 분포로의 수렴 속도를 소산 항등식으로 분석한다. [흐름 정합](flow-matching.md)처럼 속도장을 학습하는 방법은 $\mathcal P_2$ 위의 곡선을 명시적으로 매개화한다.
- 집단 동역학. 상호작용 항 $W$ 가 있는 흐름이 군집, 화학주성, 자기조직화 모형이 된다. 입자 $N$ 개의 계가 $N\to\infty$ 에서 이 PDE 로 가는 평균장 극한도 같은 틀에서 다룬다.
- 표집 알고리즘. Langevin Monte Carlo 는 Fokker–Planck 흐름의 시간 이산화이고, $V$ 가 강볼록일 때의 혼합 시간 분석에 $\lambda$ 변위 볼록성을 쓴다.

[^1]: R. Jordan, D. Kinderlehrer, F. Otto, *The Variational Formulation of the Fokker–Planck Equation*, SIAM J. Math. Anal. 29 (1998), 1–17. 스킴의 정의와 $\tau\to0$ 수렴은 Theorem 5.1 이다. 변위 볼록성은 R. McCann, *A Convexity Principle for Interacting Gases*, Adv. Math. 128 (1997). 거리공간에서의 엄밀화는 L. Ambrosio, N. Gigli, G. Savaré, *Gradient Flows in Metric Spaces and in the Space of Probability Measures*, Birkhäuser 2005.

# 연관 문서

## 선수지식

- [최적 수송](optimal-transport.md)
- [Itô 적분](ito-calculus.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #measure_theory #analysis
