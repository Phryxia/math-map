# 확산모형

# 개요

[변분 오토인코더](variational-autoencoder.md)(variational autoencoder, VAE)는 잠재변수에서 데이터로 가는 사상을 신경망 하나로 학습한다. 인코더와 디코더를 함께 학습하는 구조가 근사 사후분포의 품질에 묶여 표본이 흐릿해진다.

확산모형은 데이터에 잡음을 조금씩 더해 순수 잡음으로 만드는 전방 과정을 고정하고 그 역방향만 배운다. 각 단계는 조금 흐려진 것을 조금 선명하게 만드는 작은 문제이고, 생성은 그 단계를 수백에서 수천 번 반복하는 것이다.

잠재변수가 데이터와 같은 차원이고 전방 과정에 학습할 모수가 없는 계층적 VAE 이므로 같은 **ELBO**(evidence lower bound)가 목적함수로 나온다. 그 ELBO 를 전개하면 각 잡음 수준에서 더해진 잡음을 예측하는 최소제곱 회귀가 된다.

연속 극한에서는 [확률미분방정식](ito-calculus.md)(stochastic differential equation, SDE)이 된다. 전방 과정이 SDE 이고 생성은 시간역전 SDE 의 적분이다. 신경망이 배우는 대상은 각 시각 분포의 점수함수 $\nabla_x\log q_t(x)$ 다. 이산적인 잡음 제거 모형과 점수 기반 모형은 같은 것의 두 서술이다.

# 직관

데이터 분포의 밀도를 모르므로 표본을 직접 뽑을 수 없다. $x_0$ 에 분산 $t$ 인 Gauss 잡음을 더한 $x_t$ 의 분포는 $t$ 가 크면 $\mathcal N(0,tI)$ 와 구별되지 않으므로 거기서는 뽑을 수 있다. 큰 $t$ 에서 뽑아 한 칸씩 되돌리려면 $x_t$ 를 보고 $x_0$ 를 맞혀야 하고, 제곱오차를 가장 작게 하는 답은 조건부 평균 $\mathbb E\lbrack x_0\mid x_t\rbrack$ 이다. Tweedie 공식이 이 평균을 $x_t+t\thinspace\nabla_x\log q_t(x_t)$ 로 준다.

$q_t$ 의 정규화상수는 로그를 미분하면 사라지므로 밀도를 몰라도 $\nabla_x\log q_t$ 를 추정할 수 있다. 데이터에 잡음 $\epsilon$ 을 더하고 그 $\epsilon$ 을 맞히는 최소제곱 회귀의 최적해가 $-\sqrt t\thinspace\nabla_x\log q_t$ 이므로 학습은 잡음을 더하고 맞히는 것으로 끝난다. 이 벡터장이 점수함수이고, 생성은 잡음 수준을 한 칸 내리며 이 방향으로 움직이는 것을 수백 번 반복한다.

# 정의

## 전방 과정

분산 폭발(variance exploding, VE) 형식은 다음과 같다.

$$
x_t=x_0+\sqrt t\thinspace\epsilon,\qquad\epsilon\sim\mathcal N(0,I)
$$

$q_t$ 는 데이터 분포에 분산 $t$ 인 Gauss 를 합성곱한 것이고, $t$ 가 크면 $\mathcal N(0,tI)$ 와 구별되지 않는다.

실무에서는 분산 보존(variance preserving, VP) 형식을 쓴다.

$$
x_t=\sqrt{\bar\alpha_t}\thinspace x_0+\sqrt{1-\bar\alpha_t}\thinspace\epsilon
$$

$\bar\alpha_t$ 가 1 에서 0 으로 줄고 어느 $t$ 에서도 $x_t$ 의 분산이 대략 일정해 신경망 입력의 규모가 안정된다.

## SDE 서술

$$
dx=f(x,t)\thinspace dt+g(t)\thinspace dw
$$

VE 는 $f=0,\ g(t)=1$ 이고 VP 는 $f=-\tfrac12\beta(t)x,\ g=\sqrt{\beta(t)}$ 다. Anderson 의 시간역전 정리가 대응하는 역방향 SDE 를 준다.

$$
dx=\big[f(x,t)-g(t)^2\nabla_x\log q_t(x)\big]dt+g(t)\thinspace d\bar w
$$

$dt$ 가 음수이고 $\bar w$ 가 역시간 [Brown 운동](brownian-motion.md)이다. 점수함수를 알면 생성이 이 SDE 의 수치적분이 된다.

## 확률흐름 ODE

같은 주변분포를 갖는 결정적 과정도 있다.

$$
\frac{dx}{dt}=f(x,t)-\tfrac12g(t)^2\nabla_x\log q_t(x)
$$

이 [상미분방정식](ordinary-differential-equations.md)(ordinary differential equation, ODE)에는 잡음 항이 없어 잠재점과 표본이 일대일로 대응하고 가능도를 연속 정규화 흐름으로 정확히 계산할 수 있다. 이 형식 위에서 고차 ODE 해법으로 단계 수를 줄이는 가속 표본기를 만든다.

## 학습 목적함수

$$
\mathcal L=\mathbb E_{t,x_0,\epsilon}\Big[w(t)\big\Vert\epsilon-\epsilon_\theta(x_t,t)\big\Vert^2\Big]
$$

$w(t)=1$ 은 ELBO 가중치와 다르지만 표본 품질이 더 좋다. 가중치는 잡음 수준 사이의 중요도를 조절한다. 정확한 가능도가 목표면 ELBO 가중치를 쓴다.

# 성질

## 잡음 예측과 점수 추정의 동치

전방 과정이 $x_t=x_0+\sigma_t\epsilon$ 이면 Tweedie 공식이 다음을 준다.

$$
\mathbb E\lbrack x_0\mid x_t\rbrack=x_t+\sigma_t^2\thinspace\nabla_x\log q_t(x_t)
$$

잡음 낀 관측에서 원본의 조건부 평균과 점수함수가 서로를 결정한다. 잡음 $\epsilon$ 을 예측하는 최소제곱 회귀의 최적해는 $-\sigma_t\nabla_x\log q_t$ 이므로 두 학습 목표가 같다.

## ELBO 와의 관계

확산모형의 ELBO 는 계층적 VAE 의 그것이고 전개하면 각 단계의 KL(Kullback–Leibler) 항 합이다.

$$
\log p(x_0)\ \ge\ -\sum_t\mathrm{KL}\big(q(x_{t-1}\mid x_t,x_0)\thinspace\Vert\thinspace p_\theta(x_{t-1}\mid x_t)\big)+\cdots
$$

두 분포가 Gauss 이므로 각 KL 이 평균의 제곱거리로 닫히고 재매개화하면 잡음 예측 회귀가 나온다. 인코더가 학습 대상이 아니므로 상각 틈이 없고, 전방 과정이 고정되어 잠재변수가 항상 정보를 담으므로 사후 붕괴도 없다.

## 조건부 생성과 안내

조건 $y$ 가 있으면 [Bayes 정리](bayes.md)로 점수가 갈린다.

$$
\nabla_x\log q_t(x\mid y)=\nabla_x\log q_t(x)+\nabla_x\log q_t(y\mid x)
$$

둘째 항을 분류기로 근사하는 것이 분류기 안내다. 분류기 없는 안내는 조건부와 무조건부 모형을 함께 학습한 뒤

$$
\tilde\epsilon=\epsilon_\theta(x,t,\varnothing)+s\big(\epsilon_\theta(x,t,y)-\epsilon_\theta(x,t,\varnothing)\big)
$$

로 외삽한다. $s\gt 1$ 이면 조건에 충실한 표본이 나오고 다양성이 줄어든다. 분포의 봉우리를 뾰족하게 만드는 조작이다. 텍스트 조건 이미지 생성의 품질을 이 값이 좌우한다.

## 표본 생성 횟수

표본 하나에 신경망을 수십에서 수천 번 통과시켜야 한다. 적대적 생성망이 한 번으로 끝나는 것과 대비된다.

단계를 줄이는 방법으로 결정적 표본기(denoising diffusion implicit model, DDIM), 고차 ODE 해법, 다단계 모형을 한두 단계로 압축하는 증류가 쓰인다. 일관성 모형처럼 한 단계 생성을 목표로 설계된 변형도 있다.

## 점수 추정 오차와 가능도 평가

점수함수의 추정 오차가 저밀도 영역에서 크다. 데이터가 거의 없는 곳의 $\nabla\log q$ 를 학습할 표본이 없다. 여러 잡음 수준을 함께 써서 이 문제를 메운다. 큰 잡음 수준에서는 분포가 퍼져 있어 어디서든 신호가 있다.

가능도 평가도 간접적이다. 확률흐름 ODE 로 정확한 가능도를 계산할 수 있지만 비용이 크고, 학습에 쓰는 단순 가중치는 가능도를 최적화하지 않는다.

# 활용

- 텍스트 조건 이미지 생성의 표준 구조다. 화소 공간 대신 VAE 로 압축한 잠재공간에서 확산을 돌리는 잠재 확산이 계산을 수십 배 줄였고 현재 대형 모형 대부분이 이 형태다. 음성에서는 파형이나 스펙트로그램을, 영상에서는 시간 축을 포함한 3 차원 텐서를 생성한다.
- 관측 $y=Ax+n$ 에서 $x$ 를 복원하는 역문제에 사전분포로 쓰인다. 학습된 점수함수가 $\nabla\log p(x)$ 를 주고 관측의 가능도 항을 더해 사후분포의 점수를 만든다. 의료 영상 재구성, 초해상, 인페인팅에 쓴다. 사전분포 하나를 여러 관측 모형에 재사용한다.
- 단백질 구조 생성과 분자 설계에서는 회전과 평행이동에 대한 동변성을 신경망 구조에 넣어 3 차원 좌표를 생성한다. 편미분방정식의 해를 확률적으로 생성해 불확실성을 함께 추정하는 물리 시뮬레이션 대체 모형으로도 쓰인다.
- 확률흐름 ODE 는 잡음 분포에서 데이터 분포로 가는 결정적 수송 사상이다. 이를 일반화한 흐름 정합과 확률 보간은 두 분포를 잇는 경로를 직선으로 설계해 단계 수를 줄인다. 전방 과정을 Gauss 잡음으로 고정할 필요가 없고, 확산모형은 잡음 경로를 택한 특수한 경우다.

# 연관 문서

## 선수지식

- [변분 오토인코더](variational-autoencoder.md)
- [확률미분방정식](stochastic-differential-equations.md)

## 더 알아보기

- [흐름 정합](flow-matching.md)

#machine_learning #probability #analysis
