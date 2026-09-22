# 최적 수송과 Wasserstein 거리

# 개요

흙더미 하나를 파서 같은 부피의 구덩이를 메울 때 흙 한 삽을 거리 $d$ 만큼 옮기는 비용이 $d$ 에 비례한다면 전체 비용을 최소로 하는 계획이 무엇인가. Monge 가 1781 년에 던진 이 질문이 최적 수송 이론의 출발이다.

두 확률분포 $\mu,\nu$ 가 주어졌을 때 $\mu$ 를 $\nu$ 로 옮기는 최소 비용을 묻는 문제다. 옮기는 방식을 사상 $T$ 로 쓰면 조건이 [상측도](pushforward-measure.md) 등식 $T_{\char35{}}\mu=\nu$ 가 되는데, 이 형태의 문제는 해가 없을 수 있다. 한 점에 뭉친 질량을 두 곳으로 나눠야 하는 상황에서 사상은 무력하다.

Kantorovich 의 완화는 사상 대신 **결합측도**를 쓴다. 질량을 쪼갤 수 있고 문제가 선형계획이 되어 해의 존재와 [쌍대성](lagrange-duality.md)이 함께 따라온다. 그렇게 얻은 최소 비용이 확률분포 사이의 거리인 Wasserstein 거리다.

$$
W_p(\mu,\nu)=\Big(\inf_{\pi\in\Pi(\mu,\nu)}\int|x-y|^p\thinspace d\pi\Big)^{1/p}
$$

이 거리는 [KL divergence](kl-divergence.md)(Kullback–Leibler)이나 총변동과 달리 바닥 공간의 기하를 본다. 지지집합이 겹치지 않는 두 분포에도 유한한 값을 주고 얼마나 멀리 떨어져 있는지를 말한다. 생성모형이 최적 수송을 쓰는 근거가 이 성질이다.

# 직관

## Monge 문제의 한계

$\mu=\delta_0$ 이고 $\nu=\frac12(\delta_{-1}+\delta_1)$ 이라 하자. 사상 $T$ 는 원점을 한 곳으로만 보내므로 $T_{\char35{}}\mu$ 가 언제나 디랙 측도이고 $\nu$ 가 될 수 없다. Monge 문제에 실행가능해가 없다.

원점의 질량 절반을 $-1$ 로, 절반을 $1$ 로 보내면 비용이 1 이다. 이것을 쓰려면 곱공간 위의 측도가 필요하다.

$$
\pi=\tfrac12\delta_{(0,-1)}+\tfrac12\delta_{(0,1)}
$$

$\pi$ 의 첫 좌표 주변분포가 $\mu$ , 둘째 좌표 주변분포가 $\nu$ 다. $\pi(A\times B)$ 가 $A$ 에서 출발해 $B$ 로 가는 질량을 뜻하는 **수송계획**이고, 사상은 $\pi$ 가 그래프 위에 집중된 특수한 경우다.

완화의 대가는 없다. 목적함수가 $\pi$ 에 대해 선형이고 실행가능집합 $\Pi(\mu,\nu)$ 가 [볼록](convexity.md)하며 약위상에서 콤팩트하므로 최소값이 항상 달성된다.

## 다른 거리와의 비교

$\mu=\delta_0$ 과 $\nu=\delta_t$ 를 비교한다.

| [측도](measure.md) | 값 |
|---|---|
| KL divergence | $t\ne0$ 이면 $\infty$ |
| 총변동 | $t\ne0$ 이면 2 |
| $W_1$ | $\vert t\vert$ |

KL 과 총변동은 지지집합이 어긋나는 순간 포화되어 $t$ 가 0.001 이든 1000 이든 같은 값을 준다. $W_1$ 만 $t\to0$ 에서 0 으로 간다.

생성모형에서 생성 분포와 데이터 분포는 고차원 공간의 얇은 다양체 위에 있어 지지집합이 거의 겹치지 않는다. KL 기반 목적함수는 기울기가 죽거나 폭발하고 Wasserstein 기반 목적함수는 방향과 크기를 준다.

## 1 차원의 정렬 해

비용이 $|x-y|$ 의 볼록함수면 1 차원에서 최적 계획은 순서를 지키는 것이다. $\mu$ 의 $u$ 분위수를 $\nu$ 의 $u$ 분위수로 보낸다.

*증명.* 두 쌍이 교차하면, 곧 $x_1\lt x_2$ 인데 $y_1\gt y_2$ 이면 목적지를 맞바꿔 비용을 줄일 수 있고 볼록성이 그 부등식을 준다.

$$
W_p(\mu,\nu)^p=\int_0^1\big|F_\mu^{-1}(u)-F_\nu^{-1}(u)\big|^p\thinspace du
$$

고차원에는 순서가 없어 이 논증이 통하지 않고, 그 자리를 Brenier 정리의 볼록성이 메운다.

# 정의

## Monge 문제와 Kantorovich 문제

비용함수 $c\colon X\times Y\to[0,\infty]$ 를 고정한다.

**Monge 문제.**

$$
\inf_{T:\thinspace T_{\char35{}}\mu=\nu}\int_Xc\big(x,T(x)\big)\thinspace d\mu(x)
$$

제약 $T_{\char35{}}\mu=\nu$ 가 $T$ 에 대해 비선형이고 실행가능해가 없을 수 있다.

**Kantorovich 문제.** $\Pi(\mu,\nu)$ 를 $X\times Y$ 위의 확률측도 가운데 주변분포가 각각 $\mu,\nu$ 인 것들의 집합이라 하자.

$$
\mathrm{OT}\_c(\mu,\nu)=\inf_{\pi\in\Pi(\mu,\nu)}\int_{X\times Y}c(x,y)\thinspace d\pi(x,y)
$$

$\Pi(\mu,\nu)$ 는 $\mu\otimes\nu$ 를 포함하므로 비어 있지 않고 볼록이며 약위상에서 콤팩트하다. $c$ 가 하반연속이면 최소값이 달성된다.

## Wasserstein 거리

$p\ge1$ 에 대해 $c(x,y)=|x-y|^p$ 로 두고 다음으로 정의한다.

$$
W_p(\mu,\nu)=\mathrm{OT}\_{|x-y|^p}(\mu,\nu)^{1/p}
$$

$p$ 차 적률이 유한한 확률측도들의 공간 $\mathcal P_p(X)$ 위에서 거리가 되고, 삼각부등식은 결합측도를 이어 붙이는 접합 보조정리로 증명한다.

$W_p$ 는 [약수렴](weak-convergence.md)을 거리화한다. $W_p(\mu_n,\mu)\to0$ 인 것과 $\mu_n\Rightarrow\mu$ 이면서 $p$ 차 적률이 수렴하는 것이 동치다. 약수렴만으로는 질량이 멀리 도망가는 것을 막지 못하고 $W_p$ 는 이동거리를 비용으로 재어 그것을 감지한다. $\mu_n=(1-1/n)\delta_0+(1/n)\delta_n$ 은 $\delta_0$ 으로 약수렴하지만 $W_1(\mu_n,\delta_0)=1$ 로 고정이다.

## 쌍대 문제

Kantorovich 문제는 무한차원 선형계획이므로 쌍대가 있다.

$$
\mathrm{OT}\_c(\mu,\nu)=\sup\Big\lbrace\int\varphi\thinspace d\mu+\int\psi\thinspace d\nu\ :\ \varphi(x)+\psi(y)\le c(x,y)\Big\rbrace
$$

$\varphi$ 를 출발지에서 받는 값, $\psi$ 를 도착지에서 받는 값으로 읽으면 제약은 직접 옮기는 비용보다 더 받을 수 없다는 조건이고, 최적에서 두 값이 같다는 것이 강쌍대성이다.

$c(x,y)=|x-y|$ 이면 쌍대가 한 함수로 줄어든다.

$$
W_1(\mu,\nu)=\sup_{\Vert f\Vert_{\mathrm{Lip}}\le1}\Big(\int f\thinspace d\mu-\int f\thinspace d\nu\Big)
$$

**Kantorovich–Rubinstein 공식**이다. WGAN(Wasserstein generative adversarial network)의 판별자가 1-Lipschitz 로 제한되는 것은 그 판별자가 쌍대해 $f$ 를 근사하기 때문이다.

# 성질

## Brenier 정리

> $c(x,y)=|x-y|^2$ 이고 $\mu$ 가 Lebesgue 측도에 절대연속이면 최적 계획은 유일하고 어떤 사상 $T$ 의 그래프 위에 집중되며, $T=\nabla\varphi$ 로 $\varphi$ 는 볼록함수다.

Monge 문제가 복원되고 최적 사상의 형태까지 결정된다. 볼록함수의 기울기라는 조건이 순서를 지킨다는 1 차원 성질의 고차원 판이다. 1 차원에서 볼록함수의 도함수는 단조증가함수이고 그것이 분위수 사상이다.

$T=\nabla\varphi$ 를 $T_{\char35{}}\mu=\nu$ 에 대입하면 Monge–Ampère 방정식이 나온다.

$$
\det\big(D^2\varphi(x)\big)=\frac{f(x)}{g(\nabla\varphi(x))}
$$

최적 수송이 완전 비선형 타원 편미분방정식과 만나는 지점이고 그 정칙성 이론이 별도의 분야다.

## 이산 문제와 할당

$\mu=\sum_ia_i\delta_{x_i}$ 이고 $\nu=\sum_jb_j\delta_{y_j}$ 면 유한차원 선형계획이 된다.

$$
\min_{P\ge0}\sum_{ij}C_{ij}P_{ij}\quad\text{s.t.}\quad P\mathbf1=a,\ P^\top\mathbf1=b
$$

실행가능영역이 수송 다면체다. $a=b=\frac1n\mathbf1$ 이면 이중확률행렬의 집합이고 Birkhoff–von Neumann 정리에 따라 그 꼭짓점이 순열행렬이다. 선형계획의 최적해가 꼭짓점에서 달성되므로 최적 계획을 순열 하나로 잡을 수 있다. 질량을 쪼갤 수 있게 완화했지만 쪼개지 않아도 된다.

이 경우가 할당 문제이고 Hungarian 알고리즘이 $O(n^3)$ 에 푼다. 쌍대변수 $\varphi_i,\psi_j$ 가 Lagrange 승수이고 상보여유조건이 $P_{ij}\gt 0\Rightarrow\varphi_i+\psi_j=C_{ij}$ 다.

## 엔트로피 정규화와 Sinkhorn

선형계획은 정확하지만 느리고 미분가능하지 않다. 엔트로피 항을 더하면 둘 다 해결된다.

$$
\min_{P\in\Pi(a,b)}\ \langle C,P\rangle+\varepsilon\sum_{ij}P_{ij}\big(\log P_{ij}-1\big)
$$

목적함수가 강볼록이라 해가 유일하고 최적성 조건에서 해의 형태가 나온다.

$$
P=\mathrm{diag}(u)\thinspace K\thinspace\mathrm{diag}(v),\qquad K_{ij}=e^{-C_{ij}/\varepsilon}
$$

$u,v$ 를 주변분포 조건에 맞추는 일만 남고, 두 조건을 번갈아 강제하는 것이 **Sinkhorn 반복**이다. 행렬-벡터 곱만 쓰므로 GPU 에서 빠르고 반복 전체가 미분가능해 신경망 손실함수로 쓰인다.

대가는 편향이다. $\varepsilon\gt 0$ 이면 해가 퍼져서 비용이 실제 $W$ 보다 크고, $\varepsilon\to0$ 에서 참값으로 수렴하지만 $K$ 가 수치적으로 무너지므로 로그영역 계산이 필요하다.

## Wasserstein 공간의 기하

$(\mathcal P_2(\mathbb R^d),W_2)$ 는 측지 거리공간이고 $\mu$ 에서 $\nu$ 로 가는 측지선은 최적 사상을 따라 선형보간한 것이다.

$$
\mu_t=\big((1-t)\thinspace\mathrm{id}+tT\big)\_{\char35{}}\mu
$$

**변위 보간**이라 한다. 두 밀도를 값으로 섞는 $(1-t)\mu+t\nu$ 와 다르다. 값 보간은 디랙 둘을 섞어 봉우리 두 개를 만들고 변위 보간은 봉우리 하나를 옮긴다.

Otto 는 $\mathcal P_2$ 를 무한차원 Riemann 다양체로 보았다. 그러면 열방정식이 엔트로피의 $W_2$ 기울기 흐름이 되고 Fokker–Planck 방정식이 자유에너지의 기울기 흐름이 된다. 확산 과정을 분포 공간 위의 경사하강으로 읽는 관점이며 부등식의 증명과 생성모형의 설계에 쓰인다.

# 활용

## 생성모형

WGAN 은 판별자를 1-Lipschitz 로 제한해 $W_1$ 의 쌍대해를 근사하고 생성자가 그 값을 줄인다. 기울기 벌점이나 스펙트럴 정규화가 Lipschitz 제약을 구현한다.

흐름 기반 모형은 변위 보간을 직접 쓴다. 잡음 분포에서 데이터 분포로 가는 경로를 정해 두고 그 경로의 속도장을 회귀로 학습하며, 경로를 최적 수송의 직선 보간으로 잡으면 샘플링에 필요한 적분 단계가 크게 줄어든다. [확산모형](diffusion-models.md)이 확률미분방정식의 역과정을 학습하는 것과 달리 목표 경로를 미리 고정한다.

## 통계와 응용

- **분포 비교.** 두 표본이 같은 분포에서 왔는지 검정할 때 $W_1$ 을 통계량으로 쓴다. 1 차원에서는 분위수 차이의 적분이라 계산이 즉시 끝난다.
- **barycenter.** 여러 분포의 $W_2$ 가중평균을 정의한다. 값 평균이 봉우리를 여러 개 만드는 반면 barycenter 는 형태를 평균하므로 이미지 보간, 색 전이, 모양 평균에 쓰인다.
- **도메인 적응.** 원천 도메인과 목표 도메인의 특징 분포를 최적 수송으로 정렬한 뒤 레이블을 옮긴다.
- **경제학.** Kantorovich 의 동기가 자원 배분이었고 쌍대변수가 가격으로 해석된다. 안정 결혼과 매칭 시장 이론에도 같은 쌍대성이 나타난다.

# 연관 문서

## 선수지식

- [상측도](pushforward-measure.md)
- [분포 수렴과 Prokhorov 정리](weak-convergence.md)
- [Lagrange 쌍대성](lagrange-duality.md)

## 더 알아보기

- [흐름 정합](flow-matching.md)
- [Sinkhorn 알고리즘과 엔트로피 정규화](sinkhorn.md)
- [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)

#optimization #probability #measure_theory #machine_learning
