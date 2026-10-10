# Langevin 동역학

# 개요

Langevin 동역학은 퍼텐셜의 기울기를 따라 내려가는 흐름에 열잡음을 더한 [확률미분방정식](stochastic-differential-equations.md)이다. 정상분포가 Gibbs 측도 $e^{-\beta V}$ 이므로, 이 방정식을 이산화해 돌리면 정규화상수를 계산하지 않고 그 분포의 표본을 얻는다.

# 직관

밀도가 $\pi(x)\propto e^{-V(x)}$ 인 분포에서 표본을 뽑는다. $V$ 는 적을 수 있지만 정규화상수 $Z=\int e^{-V(x)}dx$ 는 차원이 $100$ 만 되어도 계산할 수 없다.

누적분포함수의 역을 쓰는 표본추출은 $Z$ 를 요구한다. 격자를 깔고 각 칸의 $\pi$ 를 견주어 뽑는 방법은 칸의 개수가 차원에 지수로 늘어 쓸 수 없다. 두 방법 모두 $\pi$ 의 값을 알아야 하는데, 손에 있는 것은 $V$ 와 그 기울기뿐이다.

값 대신 기울기만 쓰는 수를 찾는다. [경사하강법](gradient-descent.md) $x\leftarrow x-h\nabla V(x)$ 은 $V$ 의 최솟점 하나로 모이므로 분포가 아니라 점을 준다. 한 걸음마다 Gauss 잡음을 더해 퍼지게 하면 하강이 가운데로 당기고 잡음이 밖으로 밀어 두 힘이 균형을 이룬 분포가 남는다.

그 분포가 무엇인지는 [Fokker–Planck 방정식](fokker-planck.md)의 정상해가 답한다. 표류가 $-\nabla V$ 이고 확산계수가 상수 $2\beta^{-1}$ 이면 정상밀도는 $e^{-\beta V}$ 다. 즉 원하던 분포가 그대로 나온다. $\nabla V$ 에는 $Z$ 가 들어 있지 않으므로 계산할 수 없던 양이 식에서 사라진다.

# 정의

과감쇠 Langevin 방정식은 역온도 $\beta\gt 0$ 과 퍼텐셜 $V$ 에 대한 다음 확률미분방정식이다.

$$
dX_t=-\nabla V(X_t)\thinspace dt+\sqrt{2\beta^{-1}}\thinspace dB_t
$$

$e^{-\beta V}$ 가 적분가능하면 정상분포는 $\pi(x)\propto e^{-\beta V(x)}$ 다.

## 관성이 있는 판

위치 $X$ 와 운동량 $P$ 를 함께 보는 판은 마찰 $\gamma$ 와 질량 $M$ 을 쓴다.

$$
dX_t=M^{-1}P_t\thinspace dt,
\qquad
dP_t=-\nabla V(X_t)\thinspace dt-\gamma M^{-1}P_t\thinspace dt+\sqrt{2\gamma\beta^{-1}}\thinspace dB_t
$$

정상분포는 Hamilton 함수 $H(x,p)=V(x)+\tfrac12p^{\mathsf T}M^{-1}p$ 에 대한 $e^{-\beta H}$ 다. 시간을 $\gamma$ 로 늘리고 $\gamma\to\infty$ 를 보내면 운동량이 빠르게 평형에 들어 과감쇠 방정식이 남는다.

## 이산화

간격 $h$ 의 Euler–Maruyama 이산화가 표본추출 알고리즘이 된다. $\xi_k$ 는 독립 표준정규 벡터다.

$$
x_{k+1}=x_k-h\nabla V(x_k)+\sqrt{2h\beta^{-1}}\thinspace\xi_k
$$

# 성질

## 정상분포와 가역성

$\pi\propto e^{-\beta V}$ 를 확률흐름 $J=-\pi\nabla V-\beta^{-1}\nabla\pi$ 에 넣으면 $\nabla\pi=-\beta\pi\nabla V$ 이므로 $J=0$ 이다. 정상분포이면서 세부균형을 만족하므로 과정이 가역이다.

## 강볼록 아래의 수축

$V$ 가 $\lambda$ 강볼록이면 같은 Brown 운동으로 만든 두 해 $X_t$, $Y_t$ 의 거리가 지수적으로 줄어든다. 잡음 항이 소거되어 차 $Z_t=X_t-Y_t$ 가 결정론적 부등식을 만족한다.

$$
\frac{d}{dt}\lvert Z_t\rvert^2=-2\bigl(\nabla V(X_t)-\nabla V(Y_t)\bigr)\cdot Z_t\le-2\lambda\lvert Z_t\rvert^2
$$

따라서 $\lvert Z_t\rvert\le e^{-\lambda t}\lvert Z_0\rvert$ 이고, 두 초기분포의 Wasserstein 거리도 같은 비율로 줄어 정상분포가 유일하다. 상대엔트로피로 재는 수렴 속도는 로그 Sobolev 부등식이 주며 [Wasserstein 기울기 흐름](wasserstein-gradient-flow.md)이 같은 수렴을 자유에너지의 하강으로 적는다.

## 이산화의 편향

$h\gt 0$ 인 이산 연쇄의 정상분포 $\pi_h$ 는 $\pi$ 와 다르다. 표류항을 구간 안에서 상수로 본 오차가 남기 때문이고, $V$ 가 강볼록이고 기울기가 Lipschitz 이면 두 분포의 Wasserstein 거리가 $h^{1/2}$ 에 비례하는 상한을 갖는다[^2]. 간격을 줄이면 편향이 줄지만 같은 시간을 가려면 걸음 수가 늘어난다.

한 걸음을 제안으로 쓰고 수락 확률로 보정하면 정상분포가 정확히 $\pi$ 가 된다. 보정에는 $\pi$ 의 비 $\pi(y)/\pi(x)$ 만 필요하므로 여기서도 $Z$ 는 쓰이지 않는다.

# 활용

- 퍼텐셜 $V$ 를 에너지로 둔 통계물리 모형의 평형 표본을 얻는다. $\beta$ 가 온도의 역수이고, $\beta$ 를 키우면 분포가 최솟점 주위로 몰린다.
- 자료 $n$ 개의 사후분포에서 $\nabla V$ 를 미니배치로 추정하고 걸음 크기를 줄여 가며 쓰면 확률적 경사 Langevin 동역학이 된다[^3]. [확률적 경사하강법](stochastic-gradient-descent.md)의 잡음과 열잡음이 같은 자리에 들어간다.
- [확산모형](diffusion-models.md)의 표본 생성에서 잡음 수준을 차례로 낮추며 각 수준의 점수함수로 이 걸음을 반복한다. $\nabla V$ 의 자리에 신경망이 추정한 $\nabla\log p$ 가 들어간다.
- 비볼록 $V$ 의 전역 최솟점을 찾는 데 쓴다. $\beta$ 를 천천히 키우면 분포가 최솟점에 집중하고, 잡음이 지역 최솟점을 벗어나게 한다. 벗어나는 데 드는 시간은 장벽 높이에 지수적이다[^1].

[^1]: G. A. Pavliotis, *Stochastic Processes and Applications*, Springer, 2014, Chapters 4, 6 (과감쇠 극한, 정상분포, 탈출 시간).
[^2]: A. Durmus, É. Moulines, "Nonasymptotic convergence analysis for the unadjusted Langevin algorithm", Annals of Applied Probability 27 (2017), 1551–1587.
[^3]: M. Welling, Y. W. Teh, "Bayesian learning via stochastic gradient Langevin dynamics", Proceedings of the 28th International Conference on Machine Learning, 2011, 681–688.

# 연관 문서

## 선수지식

- [Fokker–Planck 방정식](fokker-planck.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #optimization #machine_learning #analysis
