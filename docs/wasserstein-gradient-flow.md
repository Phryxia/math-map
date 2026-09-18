# Wasserstein 기울기 흐름

# 개요

확률측도 전체가 이루는 공간에 [최적 수송](optimal-transport.md)의 $W_2$ 거리를 주면 그 공간이 형식적인 Riemann 다양체가 되고, 열방정식 $\partial_t\rho=\Delta\rho$ 가 엔트로피의 경사하강이 된다.

$$
\partial_t\rho=\nabla\negthinspace\cdot\negthinspace\Big(\rho\thinspace\nabla\frac{\delta\mathcal F}{\delta\rho}\Big),
\qquad
\mathcal F(\rho)=\int V\rho+\int\rho\log\rho
$$

$\mathcal F$ 는 자유에너지이고, 이 방정식은 [Itô 계산](ito-calculus.md)에서 확률미분방정식의 밀도가 만족하는 Fokker–Planck 방정식이다. 확산 과정 하나가 분포 공간 위의 경사하강 하나에 대응한다.

경사하강의 암시적 오일러 이산화를 옮기면 **JKO 스킴**이 나오고, 그 수렴 증명이 Fokker–Planck 해의 존재 증명이 된다.[^1] 또 $W_2$ 를 따라 잰 볼록성이 확산의 수렴 속도를 주며, 함수부등식의 증명과 생성모형 설계가 이 사실에 기댄다.

# 직관

## 거리 선택과 흐름

유클리드 공간에서 경사하강은 한 걸음마다 다음을 푸는 것과 같다.

$$
x^{k+1}=\arg\min_x\ \Big[f(x)+\frac{|x-x^k|^2}{2\tau}\Big]
$$

$\tau\to0$ 에서 $\dot x=-\nabla f(x)$ 가 나온다. $|x-x^k|^2$ 는 공간에 준 거리일 뿐이고, 거리를 바꾸면 같은 $f$ 에 대해 다른 흐름이 나온다. 확률측도의 공간 $\mathcal P_2(\mathbb R^d)$ 에서 거리를 $W_2$ 로 잡으면 같은 식이 다음이 된다.

$$
\rho^{k+1}=\arg\min_{\rho\in\mathcal P_2}\ \Big[\mathcal F(\rho)+\frac{W_2^2(\rho,\rho^k)}{2\tau}\Big]
$$

이것이 **JKO 스킴**이고 $\tau\to0$ 극한이 Fokker–Planck 방정식이다.

## 접공간과 기울기장

$W_2$ 의 Benamou–Brenier 동적 표현이 이 기하를 드러낸다.

$$
W_2^2(\mu,\nu)=\min\Big\lbrace\int_0^1\negthinspace\negthinspace\int|v_t|^2\rho_t\thinspace dx\thinspace dt\ :\ \partial_t\rho_t+\nabla\negthinspace\cdot\negthinspace(\rho_tv_t)=0,\ \rho_0=\mu,\ \rho_1=\nu\Big\rbrace
$$

곡선 $\rho_t$ 의 속도는 연속방정식을 통해 속도장 $v_t$ 로 나타나고 그 길이의 제곱이 $\int|v_t|^2\rho_t$ 다. 곧 $\rho$ 에서의 접공간에 내적이 하나 주어진다.

$$
\langle v_1,v_2\rangle_\rho=\int v_1\cdot v_2\thinspace\rho\thinspace dx
$$

회전 성분은 밀도를 바꾸지 않으면서 길이만 늘리므로 최소화하는 속도장은 항상 기울기장 $v=\nabla\varphi$ 꼴이다. 접공간이 $\lbrace\nabla\varphi\rbrace$ 의 닫힘이 되고, 이 구조를 Otto 미적분이라 한다.

## 엔트로피의 기울기

$\mathcal S(\rho)=\int\rho\log\rho$ 의 일차 변분은 $\frac{\delta\mathcal S}{\delta\rho}=\log\rho+1$ 이므로 기울기 흐름의 속도장이 $-\nabla\log\rho$ 다. 연속방정식에 넣으면 $\rho$ 와 $1/\rho$ 가 상쇄된다.

$$
\partial_t\rho=\nabla\negthinspace\cdot\negthinspace\big(\rho\thinspace\nabla\log\rho\big)=\nabla\negthinspace\cdot\negthinspace\Big(\rho\thinspace\frac{\nabla\rho}{\rho}\Big)=\Delta\rho
$$

퍼텐셜 항 $\int V\rho$ 를 더하면 속도장에 $-\nabla V$ 가 붙어 Fokker–Planck 방정식이 되고, 이것이 SDE $dX_t=-\nabla V(X_t)dt+\sqrt2\thinspace dB_t$ 의 밀도 방정식이다.

# 정의

## 자유에너지와 기울기 흐름

$\mathcal P_2(\mathbb R^d)$ 위의 범함수를 세 항으로 적는다.

$$
\mathcal F(\rho)=\underbrace{\int V\rho}\_{\text{퍼텐셜}}
+\underbrace{\frac12\iint W(x-y)\rho(x)\rho(y)}\_{\text{상호작용}}
+\underbrace{\int\rho\log\rho}\_{\text{내부 에너지}}
$$

**Wasserstein 기울기 흐름**은 연속방정식에 속도장 $v=-\nabla\frac{\delta\mathcal F}{\delta\rho}$ 를 넣은 것이다.

$$
\partial_t\rho=\nabla\negthinspace\cdot\negthinspace\Big(\rho\thinspace\nabla\frac{\delta\mathcal F}{\delta\rho}\Big)
=\nabla\negthinspace\cdot\negthinspace\big(\rho\nabla V\big)+\nabla\negthinspace\cdot\negthinspace\big(\rho(\nabla W\ast\rho)\big)+\Delta\rho
$$

$W=0$ 이면 Fokker–Planck, $V=W=0$ 이면 열방정식, 내부 에너지를 $\frac1{m-1}\int\rho^m$ 으로 바꾸면 다공질 매질 방정식이다.

## JKO 스킴

시간 간격 $\tau\gt 0$ 에 대해 $\rho^0=\rho_0$ 에서 시작해 다음을 반복한다.

$$
\rho^{k+1}=\arg\min_{\rho\in\mathcal P_2}\Big[\mathcal F(\rho)+\frac1{2\tau}W_2^2(\rho,\rho^k)\Big]
$$

각 단계는 볼록 최적화 문제 하나이고, 실제 계산에서는 $W_2^2$ 를 엔트로피 정규화해 [Sinkhorn 알고리즘](sinkhorn.md)으로 푼다.

## 변위 볼록성

$\mu_0,\mu_1$ 사이의 $W_2$ 측지선 $(\mu_t)\_{t\in[0,1]}$ 을 따라

$$
\mathcal F(\mu_t)\le(1-t)\mathcal F(\mu_0)+t\mathcal F(\mu_1)-\frac\lambda2t(1-t)W_2^2(\mu_0,\mu_1)
$$

이면 $\mathcal F$ 가 **$\lambda$ 변위 볼록**이다. 보통의 볼록성은 선형 보간 $(1-t)\mu_0+t\mu_1$ 을 따라 재고 여기서는 측지 보간을 따라 잰다. 엔트로피는 선형 보간을 따라 볼록이지만 $\lambda=0$ 이고, $\int V\rho$ 는 $V$ 가 $\lambda$ 강볼록이면 $\lambda$ 변위 볼록이다.

# 성질

## JKO 정리

**Jordan–Kinderlehrer–Otto.** $V$ 가 적당한 성장조건을 만족하고 $\mathcal F(\rho_0)\lt\infty$ 이면, JKO 스킴의 조각별 상수 보간 $\rho^\tau$ 는 $\tau\to0$ 에서 Fokker–Planck 방정식의 유일한 해로 수렴한다.

각 JKO 단계가 잘 정의된다는 것은 $W_2$ 의 아래반연속성과 $\mathcal F$ 의 콤팩트 준위집합에서 변분법의 직접법으로 나오고, 극한이 해라는 것은 일계 조건을 모아 얻는다. PDE 의 정칙성 이론을 거치지 않고 존재성이 나온다.

## 소산 항등식과 지수 수렴

기울기 흐름을 따라 에너지가 줄어드는 속도가 기울기의 크기와 같다.

$$
\frac{d}{dt}\mathcal F(\rho_t)=-\int\rho_t\Big|\nabla\frac{\delta\mathcal F}{\delta\rho}\Big|^2=-\mathcal I(\rho_t)
$$

$\mathcal F$ 가 상대 엔트로피이면 $\mathcal I$ 는 Fisher 정보이고 위 식이 de Bruijn 항등식이다.

$\mathcal F$ 가 $\lambda\gt 0$ 변위 볼록이면 흐름이 지수적으로 수렴한다.

$$
W_2(\rho_t,\rho_\infty)\le e^{-\lambda t}W_2(\rho_0,\rho_\infty),\qquad
\mathcal F(\rho_t)-\mathcal F(\rho_\infty)\le e^{-2\lambda t}\big(\mathcal F(\rho_0)-\mathcal F(\rho_\infty)\big)
$$

두 번째 부등식이 **로그 Sobolev 부등식**의 동역학적 형태다. 정적 함수부등식과 확산의 수렴 속도가 한 부등식의 두 형태로 묶이며, Bakry–Émery 판정법 $\nabla^2V\succeq\lambda I$ 가 $\lambda$ 변위 볼록성의 충분조건이다.

## 거리공간에서의 엄밀화

Otto 미적분은 형식적이다. $\mathcal P_2$ 는 무한차원이고 매끄러운 다양체가 아니며 위의 접공간과 계량은 유추다. Ambrosio, Gigli, Savaré 가 이를 거리공간 위의 기울기 흐름 이론으로 엄밀화했고, 기울기 대신 부등식 하나로 흐름을 정의한다.

$$
\frac12\frac{d}{dt}W_2^2(\rho_t,\sigma)+\frac\lambda2W_2^2(\rho_t,\sigma)+\mathcal F(\rho_t)\le\mathcal F(\sigma)
\quad\text{(모든 }\sigma\text{)}
$$

이 EVI 부등식을 만족하는 곡선으로 기울기 흐름을 정의하면 미분구조가 없는 거리공간에서도 존재, 유일성, 축약성이 나온다.

# 활용

- **함수부등식.** 로그 Sobolev, Talagrand, HWI 부등식이 자유에너지의 변위 볼록성에서 따라 나온다.
- **생성모형.** 확산모형의 역과정은 점수함수를 따르는 흐름이고, 목표 분포로의 수렴을 이 이론이 잰다. 흐름 정합처럼 속도장을 학습하는 방법은 $\mathcal P_2$ 위의 곡선을 명시적으로 매개화한다.
- **집단 동역학.** 상호작용 항 $W$ 가 있는 흐름이 군집, 화학주성, 자기조직화 모형이 된다. 입자 $N$ 개의 계가 $N\to\infty$ 에서 이 PDE 로 가는 평균장 극한도 같은 틀에서 다룬다.
- **표집 알고리즘.** Langevin 몬테카를로가 이 기울기 흐름의 시간 이산화이고, 혼합 시간 분석이 $\lambda$ 변위 볼록성의 정량화다.

[^1]: R. Jordan, D. Kinderlehrer, F. Otto, *The Variational Formulation of the Fokker–Planck Equation*, SIAM J. Math. Anal. 29 (1998), 1–17. 스킴의 정의와 $\tau\to0$ 수렴은 Theorem 5.1 이다. 변위 볼록성은 R. McCann, *A Convexity Principle for Interacting Gases*, Adv. Math. 128 (1997). 거리공간에서의 엄밀화는 L. Ambrosio, N. Gigli, G. Savaré, *Gradient Flows in Metric Spaces and in the Space of Probability Measures*, Birkhäuser 2005.

# 연관 문서

## 선수지식

- [최적 수송과 Wasserstein 거리](optimal-transport.md)
- [Itô 적분과 확률미분방정식](ito-calculus.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #measure_theory #analysis
