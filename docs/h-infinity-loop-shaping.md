# H∞ 고리 모양 다듬기

# 개요

**H∞ 고리 모양 다듬기(H∞ loop shaping)** 는 개루프 이득의 모양을 손으로 정한 뒤, 그 모양에 모형 오차를 견디는 정도를 더하는 제어기를 H∞ 문제 하나로 구하는 설계 방법이다. 적분기 $G(s)=1/s$ 에 상수 이득 $k$ 를 붙이면 모든 $k\gt 0$ 에서 고리가 안정하므로, 안정성만으로는 $k$ 를 고를 수 없다. 이 방법은 장치를 분자와 분모의 두 안정한 인수로 쓰고 두 인수가 함께 틀려도 안정한 오차의 크기를 재어, 그 크기가 가장 큰 제어기를 Riccati 방정식 두 개로 구한다. $1/s$ 에서는 $k=1$ 이 그 제어기다.

# 직관

장치 $G(s)=1/s$ 와 제어기 $C=k$ 의 닫힌 고리 극은 $-k$ 다. [Youla 매개화](youla-parametrization.md)의 서로소 분해로 장치를 다음처럼 쓴다.

$$
G=\frac{N}{M},\qquad N(s)=\frac{1}{s+1},\qquad M(s)=\frac{s}{s+1}
$$

이 분해는 모든 주파수에서 $\lvert N(i\omega)\rvert^2+\lvert M(i\omega)\rvert^2=1$ 을 만족한다. 실제 장치가 모형과 다르다는 것을 $N$ 과 $M$ 에 안정한 오차 $\Delta_N$, $\Delta_M$ 이 더해진 것으로 둔다. $\Delta_M=\delta/(s+1)$ 이면 실제 장치는 $1/(s+\delta)$ 이고, $\delta\lt 0$ 이면 모형에 없던 불안정한 극이 생긴다.

두 오차의 크기를 함께 재어 고리가 안정하게 남는 한계를 $k$ 마다 계산하면 다음 값이 나온다.

$$
b(k)=\begin{cases}k/\sqrt{1+k^2}&(k\le1)\cr 1/\sqrt{1+k^2}&(k\ge1)\end{cases}
$$

$k=0.5$ 와 $k=2$ 에서는 $0.447$ 이고 $k=1$ 에서 가장 큰 $1/\sqrt2=0.707$ 이다. 이 최댓값은 제어기를 상수로 제한하지 않아도 넘을 수 없는 값이고, 장치의 상태공간 행렬에서 Riccati 방정식 두 개로 미리 계산된다.

# 정의

이 문서에서 장치는 $G$, 제어기는 $C$ 이고 고리는 [Youla 매개화](youla-parametrization.md)처럼 음의 되먹임 $1+GC$ 로 닫는다.

## 정규화 서로소 분해

$G=N/M$ 이 서로소 분해이고 모든 실수 $\omega$ 에서 다음이 성립하면 **정규화 서로소 분해(normalized coprime factorization)** 라 한다.

$$
\lvert N(i\omega)\rvert^2+\lvert M(i\omega)\rvert^2=1
$$

직관 절의 $N=1/(s+1)$, $M=s/(s+1)$ 에서 두 제곱의 합은 $(1+\omega^2)/(1+\omega^2)=1$ 이다.

## 서로소 인수 오차와 안정 여유

$\Delta_N,\Delta_M\in\mathcal{RH}\_\infty$ 에 대해 장치 $G_\Delta=(N+\Delta_N)/(M+\Delta_M)$ 를 생각한다. 오차의 크기는 두 인수를 나란히 둔 행 벡터의 H∞ 노름이다.

$$
\Vert\lbrack\Delta_N\quad \Delta_M\rbrack\Vert_\infty=\sup_\omega\sqrt{\lvert\Delta_N(i\omega)\rvert^2+\lvert\Delta_M(i\omega)\rvert^2}
$$

$C$ 가 $G$ 를 내부 안정하게 할 때 **안정 여유(stability margin)** 는 다음 값이다.

$$
b_{G,C}=\left(\sup_\omega\frac{\sqrt{1+\lvert G(i\omega)\rvert^2}\thinspace\sqrt{1+\lvert C(i\omega)\rvert^2}}{\lvert1+G(i\omega)C(i\omega)\rvert}\right)^{-1}
$$

직관 절의 예에서 분수는 다음과 같다.

$$
\sqrt{1+k^2}\thinspace\sqrt{\frac{\omega^2+1}{\omega^2+k^2}}
$$

$k\le1$ 이면 $\omega\to0$ 에서, $k\ge1$ 이면 $\omega\to\infty$ 에서 가장 크고, $k=1$ 이면 모든 주파수에서 $\sqrt2$ 다.

## 고리 모양 다듬기 절차

McFarlane 과 Glover 의 절차는 넷이다.[^1]

1. 가중치 $W$ 를 골라 다듬은 장치 $G_s=GW$ 의 이득이 낮은 주파수에서 크고 높은 주파수에서 작게 한다. 가중치는 적분기와 진상·지상 요소를 [Bode 선도](bode-plot.md)를 보며 고른다.
2. $G_s$ 의 최대 안정 여유 $b_{\mathrm{opt}}$ 를 아래 정리로 계산한다. 너무 작으면 1 로 돌아가 가중치를 다시 고른다.
3. $b_{\mathrm{opt}}$ 보다 조금 작은 여유를 주는 제어기 $C_\infty$ 를 구한다.
4. 실제 제어기는 $C=WC_\infty$ 다.

$G=1/s$ 가 이미 원하는 모양이면 $W=1$ 이고, $C_\infty=1$ 이 여유 $0.707$ 을 준다.

# 성질

## 서로소 인수 오차의 강건 안정성

정리. $(N,M)$ 이 정규화 서로소 분해이고 $C$ 가 $G$ 를 내부 안정하게 하면, 다음 둘은 동치다.[^2]

1. $\Vert\lbrack\Delta_N\quad \Delta_M\rbrack\Vert_\infty\lt\varepsilon$ 인 모든 오차에서 $C$ 가 $G_\Delta$ 를 내부 안정하게 한다.
2. $b_{G,C}\ge\varepsilon$ 이다.

증명의 요지. 오차가 들어간 고리는 오차 $\lbrack\Delta_N\quad \Delta_M\rbrack$ 와 공칭 고리의 전달 함수 $\lbrack C\quad 1\rbrack^{\mathsf T}M^{-1}/(1+GC)$ 를 잇는 되먹임이다. [작은 이득 정리](small-gain-theorem.md)로 이 전달 함수의 H∞ 노름이 $1/\varepsilon$ 이하인 것이 1 과 동치다. 정규화 조건 $\lvert M\rvert^2(1+\lvert G\rvert^2)=1$ 을 쓰면 그 노름이 $1/b_{G,C}$ 다.

## 최대 안정 여유

정리. $G$ 의 최소 실현을 $\dot x=Ax+Bu$, $y=Hx$ 라 하고 $X$, $Z$ 를 다음 두 [대수 Riccati 방정식](algebraic-riccati-equation.md)의 안정화 해라 하자.

$$
\begin{aligned}
A^{\mathsf T}X+XA-XBB^{\mathsf T}X+H^{\mathsf T}H&=0\cr
AZ+ZA^{\mathsf T}-ZH^{\mathsf T}HZ+BB^{\mathsf T}&=0
\end{aligned}
$$

그러면 모든 안정화 제어기에 걸친 안정 여유의 최댓값은 다음이다.[^2]

$$
b_{\mathrm{opt}}=\sup_Cb_{G,C}=\frac{1}{\sqrt{1+\rho(XZ)}}
$$

$\rho$ 는 고윳값의 절댓값 가운데 가장 큰 것이다. 이 값은 $\sqrt{1-\Vert\lbrack N\quad M\rbrack\Vert_H^2}$ 과 같고, $\Vert\cdot\Vert_H$ 는 Hankel 노름(Hankel norm)이다. 최적 문제가 [Nehari 정리](nehari-theorem.md)의 거리 문제로 바뀌어 반복 없이 풀리므로, 일반 [H∞ 제어](h-infinity-control.md)의 $\gamma$ 반복이 필요 없다.

직관 절의 예에서 $A=0$, $B=H=1$ 이므로 두 방정식은 $1-X^2=0$, $1-Z^2=0$ 이고 $X=Z=1$ 이다. $b_{\mathrm{opt}}=1/\sqrt2$ 이고, $k=1$ 이 이 값을 낸다.

## 제어기의 차수

$b_{\mathrm{opt}}$ 보다 작은 여유를 주는 제어기 가운데 $X$, $Z$ 로 닫힌 식이 적히는 중심 제어기(central controller)가 있고, 그 상태의 차원은 다듬은 장치 $G_s$ 와 같다.[^1] 실제 제어기 $C=WC_\infty$ 의 차수는 장치와 가중치의 차수의 합이다.

# 활용

- 다변수 제어기 설계. 가중치로 특이값의 모양을 정하고 나머지는 계산에 맡기므로, 입력과 출력이 여럿인 장치에서 고전적인 고리 모양 다듬기를 그대로 쓴다. Skogestad 와 Postlethwaite 는 $b_{\mathrm{opt}}$ 가 $0.25$ 보다 크면 가중치가 알맞다고 본다.[^3]
- [ν 간격 거리](nu-gap-metric.md). 두 장치의 정규화 서로소 분해 사이의 거리가 $b_{G,C}$ 보다 작으면 $C$ 가 두 장치를 모두 안정하게 한다. 모형을 바꾸거나 근사할 때 안정성이 유지되는지 이 거리로 판정한다.
- 이득 계획. 운전점마다 다듬은 장치의 여유를 계산해, 같은 제어기가 덮는 운전점의 범위를 정한다.

[^1]: D. McFarlane, K. Glover, "A loop-shaping design procedure using H∞ synthesis", *IEEE Transactions on Automatic Control* 37 (1992), 759–769.
[^2]: K. Glover, D. McFarlane, "Robust stabilization of normalized coprime factor plant descriptions with H∞-bounded uncertainty", *IEEE Transactions on Automatic Control* 34 (1989), 821–830.
[^3]: S. Skogestad, I. Postlethwaite, *Multivariable Feedback Control: Analysis and Design*, 2nd ed., Wiley, 2005, §9.4.

# 연관 문서

## 선수지식

- [H∞ 제어](h-infinity-control.md)
- [Youla 매개화](youla-parametrization.md)

## 더 알아보기

- [ν 간격 거리](nu-gap-metric.md)

#optimization #linear_algebra #complex_analysis
