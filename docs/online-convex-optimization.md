# 온라인 볼록 최적화

# 개요

**온라인 볼록 최적화(online convex optimization)** 는 손실함수를 모르는 채로 먼저 점을 고르고, 고른 뒤에 그날의 볼록 손실을 받는 일을 여러 번 되풀이하는 문제다. 매일 $\lbrack -1,1\rbrack$ 에서 수 하나를 고르고 그날의 손실이 고른 수에 날마다 달라지는 계수를 곱한 값이라면, 어제까지 가장 좋았던 수를 고르는 규칙은 계수가 $+1$, $-1$ 로 번갈아 바뀔 때 매일 $1$ 씩 잃는다. 온라인 볼록 최적화는 고정된 한 점을 끝까지 고른 경우와의 차이를 재고, 기울기 반대 방향으로 조금씩만 옮기는 규칙이 그 차이를 날 수의 제곱근 정도로 묶는다는 것을 보인다.

# 직관

날마다 $x_t\in\lbrack -1,1\rbrack$ 을 고르고, 그 뒤에 계수 $c_t$ 가 공개되어 손실 $c_tx_t$ 를 낸다. 계수는 $c_1=-0.5$, 그 뒤로 $1,-1,1,-1,\dots$ 이다. 어제까지의 계수의 합이 음수이면 $x=1$, 양수이면 $x=-1$ 이 지금까지 가장 좋은 점이다.

이 점을 고르는 규칙은 $x_1=0$, $x_2=1$, $x_3=-1$, $x_4=1,\dots$ 를 고르고, 둘째 날부터 매일 손실 $1$ 을 낸다. 계수의 합은 $-0.5$ 와 $0.5$ 를 오가므로 $x=0$ 을 끝까지 고르면 손실이 $0$ 이다. $T$ 일 뒤의 차이가 $T-1$ 이다.

규칙이 끝에서 끝으로 뛰어서 졌으니 조금만 움직인다. 오늘의 손실의 기울기 $c_t$ 의 반대 방향으로 $\eta$ 배만 옮겨 $x\_{t+1}=x_t-\eta c_t$ 로 한다. $x_1=0$ 에서 $x_2=0.5\eta$, $x_3=-0.5\eta$, $x_4=0.5\eta,\dots$ 이고 매일 손실이 $0.5\eta$ 다.

$T$ 일 손실의 합은 약 $0.5\eta T$ 이고, $\eta=2/\sqrt T$ 로 잡으면 $\sqrt T$ 다. 차이가 날 수에 비례하지 않고 날 수의 제곱근으로 자란다.

# 정의

## 후회

$K\subset\mathbb R^n$ 이 닫힌 [볼록](convexity.md)집합이라 하자. 회차 $t=1,\dots,T$ 마다 알고리즘이 $x_t\in K$ 를 고르고, 그 뒤 볼록 함수 $f_t:K\to\mathbb R$ 이 공개되어 손실 $f_t(x_t)$ 를 낸다. 손실은 알고리즘의 과거 선택을 보고 정해져도 된다.

$$
R_T=\sum\_{t=1}^Tf_t(x_t)-\min\_{x\in K}\sum\_{t=1}^Tf_t(x)
$$

를 **후회(regret)** 라 한다. 직관 절에서 $K=\lbrack -1,1\rbrack$, $f_t(x)=c_tx$ 이고, 첫 규칙의 후회는 $T-1$ 이상이다. $R_T/T\to 0$ 인 알고리즘을 후회 없는(no-regret) 알고리즘이라 한다.

## 선도자 따르기와 정칙화

$x\_{t+1}\in\mathop{\mathrm{argmin}}\_{x\in K}\sum\_{s\le t}f_s(x)$ 로 고르는 규칙을 **선도자 따르기(follow the leader)** 라 한다. 직관 절의 첫 규칙이다. 강볼록 함수 $r$ 과 $\eta\gt 0$ 을 두고

$$
x\_{t+1}=\mathop{\mathrm{argmin}}\_{x\in K}\Bigl(\sum\_{s\le t}f_s(x)+\frac1\eta r(x)\Bigr)
$$

로 고르는 규칙을 **정칙화된 선도자 따르기(follow the regularized leader)** 라 한다. 정칙화 항이 있으면 연속한 두 회차의 점의 차이가 작다.

## 온라인 경사하강법

$\Pi_K$ 를 $K$ 로의 최근접점 사영이라 하고 $g_t\in\partial f_t(x_t)$ 라 할 때

$$
x\_{t+1}=\Pi_K(x_t-\eta g_t)
$$

를 **온라인 경사하강법(online gradient descent)** 이라 한다. 직관 절의 둘째 규칙이고, 점이 $\lbrack -1,1\rbrack$ 안에 머물러 사영이 아무 일도 하지 않는 경우다. 모든 $f_t$ 가 같은 함수이면 [부분기울기법](subgradient-method.md)에 사영을 붙인 것이다.

# 성질

아래에서 $D$ 는 $K$ 의 지름, $G$ 는 모든 $t$ 에서 $\Vert g_t\Vert\le G$ 인 상수다.

## Zinkevich 정리

정리(Zinkevich). 온라인 경사하강법의 후회는

$$
R_T\le\frac{D^2}{2\eta}+\frac{\eta G^2T}{2}
$$

이고, $\eta=D/(G\sqrt T)$ 이면 $R_T\le DG\sqrt T$ 다.[^1]

증명의 요지. 최근접점 사영은 거리를 늘리지 않으므로 고정점 $x^\ast\in K$ 에 대해 다음이 성립한다.

$$
\Vert x\_{t+1}-x^\ast\Vert^2\le\Vert x_t-x^\ast\Vert^2-2\eta\langle g_t,x_t-x^\ast\rangle+\eta^2G^2
$$

볼록성으로 $f_t(x_t)-f_t(x^\ast)\le\langle g_t,x_t-x^\ast\rangle$ 이므로, 이 부등식을 옮겨 $t$ 에 대해 더하면 거리의 제곱이 망원합이 되어 $\Vert x_1-x^\ast\Vert^2/(2\eta)\le D^2/(2\eta)$ 만 남는다. 직관 절은 $D=2$, $G=1$ 이고 한계는 $2\sqrt T$ 다.

## 하한

정리. $K=\lbrack -1,1\rbrack$, $f_t(x)=c_tx$ 이고 $c_t$ 가 서로 독립으로 $\pm 1$ 을 반씩 고르면, 어떤 알고리즘이든 기대 후회가 $\Omega(\sqrt T)$ 다.[^2]

증명의 요지. $c_t$ 는 $x_t$ 를 고른 뒤에 정해지므로 알고리즘의 기대 손실은 $0$ 이다. 비교점의 손실은 $-\vert c_1+\cdots+c_T\vert$ 이고, 그 기댓값의 크기가 $\sqrt T$ 규모다. 따라서 Zinkevich 정리의 $\sqrt T$ 는 상수배를 빼고 줄일 수 없다.

## 강볼록 손실의 로그 후회

정리. 모든 $f_t$ 가 $\mu$ 강볼록이면, 보폭을 $\eta_t=1/(\mu t)$ 로 바꾼 온라인 경사하강법의 후회는 $R_T\le\frac{G^2}{2\mu}(1+\log T)$ 이다.[^3]

강볼록 손실에서는 선도자 따르기도 같은 차수의 후회를 갖는다. 직관 절의 일차 손실은 강볼록이 아니고, 그래서 선도자 따르기의 최소점이 $K$ 의 끝으로 뛰었다.

## 정칙화와 곱셈 가중치

손실이 일차 $f_t(x)=\langle g_t,x\rangle$ 이고 $r(x)=\frac12\Vert x\Vert^2$ 이며 $K=\mathbb R^n$ 이면, 정칙화된 선도자 따르기는 $x\_{t+1}=-\eta\sum\_{s\le t}g_s$ 로 온라인 경사하강법과 같다. $K$ 가 확률 단체이고 $r$ 이 음의 엔트로피 $\sum x_i\log x_i$ 이면 $x\_{t+1,i}\propto\exp(-\eta\sum\_{s\le t}g\_{s,i})$ 이고, 이것이 [곱셈 가중치 절차](multiplicative-weights.md)의 Hedge 갱신이다.[^4] 일반 정칙화 항을 쓴 갱신이 [거울 하강법](mirror-descent.md)이다.

# 활용

- 온라인에서 일괄로의 변환(online-to-batch conversion). 손실이 같은 분포에서 독립으로 뽑힌 $f_t$ 이고 $F=\mathbb E f_t$ 이면, 평균점 $\bar x=\frac1T\sum x_t$ 는 $\mathbb E F(\bar x)-\min F\le\mathbb E R_T/T$ 를 만족한다.[^5] Zinkevich 정리에서 [확률적 경사하강법](stochastic-gradient-descent.md)의 $O(1/\sqrt T)$ 수렴률이 나온다.
- 영합 게임의 균형. 두 참가자가 각자 후회 없는 알고리즘으로 혼합 전략을 고르면, 평균 전략의 이득이 게임의 값으로 간다. 이 수렴에서 [Nash 균형](nash-equilibrium.md) 문서의 von Neumann 최소최대 정리(minimax theorem)가 증명된다.[^4]
- [퍼셉트론](perceptron.md). 틀린 예에서만 손실을 내는 일차 손실에 온라인 경사하강법을 쓴 것이 퍼셉트론의 갱신이고, 실수 횟수의 상한은 후회 한계의 특수한 경우로 얻어진다.
- [다중 슬롯머신 문제](multi-armed-bandits.md). 고른 점의 손실값만 공개되는 판본이고, 기울기를 손실값으로 추정해 같은 틀의 한계를 얻는다.

[^1]: Martin Zinkevich, "Online convex programming and generalized infinitesimal gradient ascent", *Proceedings of the 20th International Conference on Machine Learning*, 2003, 928–936.
[^2]: Elad Hazan, "Introduction to online convex optimization", *Foundations and Trends in Optimization* **2** (2016), 157–325, 3 장.
[^3]: Elad Hazan, Amit Agarwal, Satyen Kale, "Logarithmic regret algorithms for online convex optimization", *Machine Learning* **69** (2007), 169–192.
[^4]: Shai Shalev-Shwartz, "Online learning and online convex optimization", *Foundations and Trends in Machine Learning* **4** (2012), 107–194.
[^5]: Nicolò Cesa-Bianchi, Alex Conconi, Claudio Gentile, "On the generalization ability of on-line learning algorithms", *IEEE Transactions on Information Theory* **50** (2004), 2050–2057.

# 연관 문서

## 선수지식

- [부분기울기법](subgradient-method.md)

## 더 알아보기

- [곱셈 가중치 절차](multiplicative-weights.md)

#optimization #machine_learning #algorithms
