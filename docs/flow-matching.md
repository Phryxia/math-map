# 흐름 정합

# 개요

[확산모형](diffusion-models.md)은 데이터에 잡음을 더하는 확률미분방정식을 세우고 그 역과정을 학습하며, 샘플 하나에 수백 번의 신경망 호출이 든다.

흐름 정합은 잡음 분포에서 데이터 분포로 가는 경로를 먼저 정하고 그 경로를 만드는 속도장을 회귀로 학습한다. 학습 목표가 상미분방정식이고 손실함수가 제곱오차다.

$$
\frac{dx}{dt}=v_\theta(x,t),\qquad
\mathcal L=\mathbb E_{t,x}\big\Vert v_\theta(x,t)-u_t(x)\big\Vert^2
$$

목표 속도장 $u_t(x)$ 는 계산할 수 없다. **조건부 흐름 정합**은 데이터 점 하나를 조건으로 걸어 목표를 닫힌 형태로 만들고, 두 손실의 기울기가 같다는 정리로 이를 정당화한다.

남는 것은 경로의 선택이고 여기에 [최적 수송](optimal-transport.md)이 쓰인다. 적분 단계를 줄이는 것은 조건부 경로의 모양이 아니라 잡음과 데이터를 짝짓는 방식이다.

# 직관

## 속도장을 목표로 삼기

확산모형의 확률흐름 상미분방정식은 역방향 확률미분방정식과 같은 주변분포를 만든다. 생성이 상미분방정식으로 서술되므로, 확률미분방정식을 거치지 않고 처음부터 속도장을 목표로 삼을 수 있다.

확률경로 $(p_t)_{t\in[0,1]}$ 와 속도장 $v_t$ 의 관계는 연속방정식이다.

$$
\partial_tp_t+\nabla\cdot(p_tv_t)=0
$$

$p_0$ 를 표준정규, $p_1$ 을 데이터 분포로 두고 이 식을 만족하는 $v_t$ 를 찾으면, $p_0$ 에서 뽑은 점을 $v_t$ 를 따라 흘려보내는 것이 생성이다.

## 조건부화

목표 속도장 $u_t(x)$ 는 데이터 분포 전체에 대한 기댓값이라 계산할 수 없다. 데이터 점 $x_1$ 을 조건으로 걸고 조건부 경로를 직선으로 잡아

$$
x_t=(1-t)x_0+tx_1,\qquad x_0\sim p_0
$$

로 두면 조건부 속도가 $u_t(x\mid x_0,x_1)=x_1-x_0$ 으로 상수가 되어 목표가 두 점의 차이다.

> **조건부 흐름 정합 정리.** $u_t(x)=\mathbb E[x_1-x_0\mid x_t=x]$ 이므로, 조건부 목표에 대한 제곱오차와 주변 목표에 대한 제곱오차는 $\theta$ 에 대해 같은 기울기를 준다.

증명은 조건부 기댓값이 제곱오차의 최소점이라는 사실을 쓴다. 확산모형에서 점수 대신 더해진 잡음을 예측하는 것과 같은 구조이고, 구현이 몇 줄이다.

```python
# 의사코드. 학습 한 걸음.
t  = rand()                       # [0,1]
x0 = randn_like(x1)               # 잡음
xt = (1 - t) * x0 + t * x1        # 경로 위의 한 점
loss = mse(v_theta(xt, t), x1 - x0)
```

## 조건부 경로와 궤적의 구분

적분하는 것은 조건부 속도가 아니라 그 기댓값인 주변 속도장이므로, 조건부 경로가 직선이어도 궤적은 직선이 아니다.

$x_0$ 와 $x_1$ 을 독립으로 뽑으면 조건부 직선들이 서로 교차하고 교차점에서 주변 속도가 평균으로 뭉개진다. 궤적이 휘어 오일러 적분에 많은 단계가 든다.

배치 안에서 잡음과 데이터를 최적 수송으로 짝지으면 직선들이 덜 교차하고 궤적이 펴진다. 1 차원에서 분위수끼리 짝지으면 궤적이 직선이 되어 오일러 한 걸음으로 샘플링이 끝난다.

# 정의

## 확률경로와 속도장

$p_0$ 를 사전분포, $p_1$ 을 데이터 분포라 하자. 이 둘을 잇는 확률경로 $(p_t)$ 와 연속방정식을 만족하는 속도장 $u_t$ 를 목표로 삼는다. $u_t$ 가 주어지면 상미분방정식

$$
\frac{dx}{dt}=u_t(x),\qquad x(0)\sim p_0
$$

의 해가 $x(t)\sim p_t$ 를 만족하고, 특히 $x(1)\sim p_1$ 이다.

## 흐름 정합과 조건부 흐름 정합

$$
\mathcal L_{\mathrm{FM}}(\theta)=\mathbb E_{t\sim U[0,1],\thinspace x\sim p_t}\big\Vert v_\theta(x,t)-u_t(x)\big\Vert^2
$$

는 계산할 수 없다. 결합 $\pi(x_0,x_1)$ 과 조건부 경로를 고르면 계산 가능한 목적함수가 나온다.

$$
\mathcal L_{\mathrm{CFM}}(\theta)=\mathbb E_{t,\thinspace(x_0,x_1)\sim\pi,\thinspace x_t}\big\Vert v_\theta(x_t,t)-u_t(x_t\mid x_0,x_1)\big\Vert^2
$$

두 손실은 $\theta$ 에 무관한 상수만큼 다르므로 기울기가 같다.

## 스케줄과 결합

일반적인 가우시안 경로는 두 함수 $\alpha_t,\sigma_t$ 로 쓴다.

$$
x_t=\alpha_tx_1+\sigma_tx_0,\qquad u_t(x_t\mid x_0,x_1)=\alpha_t'x_1+\sigma_t'x_0
$$

$(\alpha_t,\sigma_t)=(t,1-t)$ 가 직선 보간이고 $(\sin\frac{\pi t}2,\cos\frac{\pi t}2)$ 가 확산모형의 분산보존 스케줄이다. 경계조건은 $\alpha_0=\sigma_1=0$ 과 $\alpha_1=\sigma_0=1$ 이다.

결합 $\pi$ 는 보통 독립곱 $p_0\otimes p_1$ 이다. 미니배치 안에서 비용행렬 $C_{ij}=\Vert x_0^{(i)}-x_1^{(j)}\Vert^2$ 에 대한 최적 수송을 풀어 짝지을 수도 있다. 배치가 작으면 Hungarian 알고리즘, 크면 Sinkhorn 을 쓴다.

# 성질

## 확산모형과의 관계

확산모형의 확률흐름 상미분방정식은 특정 $(\alpha_t,\sigma_t)$ 에 대한 흐름 정합과 같다. 점수 $\nabla\log p_t$ 와 속도장은 서로 선형변환으로 옮겨진다.

$$
u_t(x)=\frac{\alpha_t'}{\alpha_t}x+\Big(\sigma_t\sigma_t'-\frac{\alpha_t'}{\alpha_t}\sigma_t^2\Big)\nabla\log p_t(x)
$$

흐름 정합은 확산모형과 같은 대상을 스케줄과 결합을 자유롭게 고를 수 있는 형태로 쓴 것이다. 사전분포가 가우시안일 필요가 없고, 스케줄 설계가 확률미분방정식의 제약에서 풀리며, 결합을 바꿔 궤적을 펼 수 있다.

## 결정론적 샘플링

상미분방정식이라 샘플링이 결정론적이고 가역이다.

- 같은 초기 잡음이 항상 같은 샘플을 주므로 잠재공간 보간과 편집이 가능하다.
- 역방향으로 적분해 데이터를 잠재변수로 되돌릴 수 있다.
- 연속 정규화 흐름의 순간 변수변환 공식으로 로그우도를 계산할 수 있다.

$$
\log p_1(x_1)=\log p_0(x_0)-\int_0^1\nabla\cdot v_\theta\big(x(t),t\big)\thinspace dt
$$

발산의 대각합 추정에는 Hutchinson 추정량을 쓴다.

## 직선화

학습한 흐름으로 $(x_0,x_1)$ 쌍을 생성해 그 쌍을 결합으로 삼아 다시 학습하는 절차를 되풀이하면 궤적이 펴진다. 이 반복이 **rectified flow** 이고, 한두 번의 반복으로 몇 단계 샘플링이 가능한 모형이 나온다. 각 반복은 결합을 최적 수송 쪽으로 미는 사영이다.

직선화가 개선하는 것은 결합이지 조건부 경로의 모양이 아니다.

# 활용

## 스케줄과 결합의 비교

$p_0=N(0,1)$ 에서 $p_1=\frac12N(-2,0.3^2)+\frac12N(2,0.3^2)$ 로 가는 1 차원 문제에서는 가우시안 혼합이라 주변 속도장이 닫힌 형태다. 신경망 없이 이상적인 목표 속도장을 직접 적분할 수 있다.

```python
import math

comps = [(0.5, -2.0, 0.3), (0.5, 2.0, 0.3)]
npdf = lambda x, m, s: math.exp(-0.5*((x - m)/s)**2)/(s*math.sqrt(2*math.pi))

# x_t = α_t x₁ + σ_t x₀.  (α,σ) = (t, 1-t) 이면 조건부 경로가 직선이다.
LINEAR = (lambda t: t, lambda t: 1 - t, lambda t: 1.0, lambda t: -1.0)
TRIG = (lambda t: math.sin(math.pi*t/2), lambda t: math.cos(math.pi*t/2),
        lambda t: math.pi/2*math.cos(math.pi*t/2),
        lambda t: -math.pi/2*math.sin(math.pi*t/2))

def velocity(x, t, sch):
    """독립 결합에서의 주변 속도장 u_t(x) = E[α'x₁ + σ'x₀ | x_t = x].
    성분별 가우시안이라 사후 가중치와 조건부 기댓값이 모두 닫힌 형태다."""
    al, sg, dal, dsg = (f(t) for f in sch)
    num = den = 0.0
    for w, m, s in comps:
        V = al*al*s*s + sg*sg                                # Var(x_t)
        g = w * npdf(x, al*m, math.sqrt(V))                  # 사후 가중치 (정규화 전)
        num += g * (dal*m + (dal*al*s*s + dsg*sg)/V * (x - al*m))
        den += g
    return num/den

def integrate(x, steps, sch):
    t, h = 0.0, 1.0/steps
    for _ in range(steps):
        x += h*velocity(x, t, sch); t += h
    return x

cdf0 = lambda x: 0.5*(1 + math.erf(x/math.sqrt(2)))
cdf1 = lambda x: sum(w*0.5*(1 + math.erf((x - m)/(s*math.sqrt(2)))) for w, m, s in comps)

def inverse(cdf, q):
    lo, hi = -10.0, 10.0
    for _ in range(200):
        mid = (lo + hi)/2
        lo, hi = (mid, hi) if cdf(mid) < q else (lo, mid)
    return (lo + hi)/2

inv0 = lambda q: inverse(cdf0, q)
inv1 = lambda q: inverse(cdf1, q)

def velocity_ot(x, t):
    """OT 결합의 주변 속도장. 1 차원에서 최적 결합은 분위수끼리 짝짓는 것이고,
    x_t(q) = (1-t)F₀⁻¹(q) + t F₁⁻¹(q) 가 q 에 대해 증가하므로 q 를 되찾을 수 있다."""
    lo, hi = 1e-12, 1 - 1e-12
    for _ in range(200):
        mid = (lo + hi)/2
        lo, hi = (mid, hi) if (1-t)*inv0(mid) + t*inv1(mid) < x else (lo, mid)
    q = (lo + hi)/2
    return inv1(q) - inv0(q)

def integrate_ot(x, steps):
    t, h = 0.0, 1.0/steps
    for _ in range(steps):
        x += h*velocity_ot(x, t); t += h
    return x

qs = [i/20 for i in range(1, 20)]
err = lambda f: max(abs(cdf1(f(inv0(q))) - q) for q in qs)      # Kolmogorov 거리

print("Euler 적분 단계 수에 따른 오차 (독립 결합)")
print("  steps |   직선 경로 |  삼각 스케줄")
for steps in (2, 4, 8, 16, 32, 64, 256):
    print(f"  {steps:>5} | {err(lambda x: integrate(x, steps, LINEAR)):11.6f}"
          f" | {err(lambda x: integrate(x, steps, TRIG)):12.6f}")

print("\nOT 결합(분위수 짝짓기)에서의 같은 오차")
for steps in (1, 2, 4):
    print(f"  steps={steps}: {err(lambda x: integrate_ot(x, steps)):.3e}")

# Euler 적분 단계 수에 따른 오차 (독립 결합)
#   steps |   직선 경로 |  삼각 스케줄
#       2 |    0.225249 |     0.110937
#       4 |    0.125269 |     0.057919
#       8 |    0.061770 |     0.025210
#      16 |    0.031245 |     0.012670
#      32 |    0.015674 |     0.006425
#      64 |    0.007845 |     0.003243
#     256 |    0.001962 |     0.000817
#
# OT 결합(분위수 짝짓기)에서의 같은 오차
#   steps=1: 4.441e-16
#   steps=2: 1.943e-16
#   steps=4: 2.359e-16
```

두 스케줄 모두 단계를 두 배로 늘리면 오차가 절반이 되는 오일러 법의 1 차 수렴을 보인다. 이 문제에서 직선 조건부 경로는 삼각 스케줄보다 오차가 크다. 조건부 경로가 직선이어도 적분하는 것은 주변 속도장이므로 궤적의 곡률은 별개다.

OT 결합에서는 궤적이 직선이라 오일러 한 걸음이 기계 정밀도까지 정확하다. 단계 수를 줄이는 것은 스케줄이 아니라 결합이고, rectified flow 의 반복과 고차원에서의 미니배치 최적 수송이 이 결합을 개선한다.

## 실무에서의 위치

이미지와 영상 생성모형이 이 틀을 쓴다. 손실이 단순하고 스케줄을 바꾸기 쉬우며 조건부 생성과 안내 기법이 그대로 이식된다. 몇 단계 샘플링이 필요하면 직선화나 증류를 덧붙인다.

사전분포가 가우시안일 필요가 없으므로 저해상도에서 고해상도로, 흐린 이미지에서 선명한 이미지로 가는 경로를 직접 세운다. 초해상도와 복원 문제가 이 형태다.

# 연관 문서

## 선수지식

- [확산모형](diffusion-models.md)
- [최적 수송과 Wasserstein 거리](optimal-transport.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #probability #optimization
