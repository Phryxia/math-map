# Uhlmann 정리

# 개요

**Uhlmann 정리(Uhlmann's theorem)** 는 두 밀도 행렬의 충실도가 두 상태를 정화한 순수 상태끼리의 겹침 가운데 가장 큰 값과 같다는 정리다. 순수 상태 둘이 얼마나 비슷한지는 겹침 $\vert\langle\psi\vert\phi\rangle\vert$ 로 재지만, 동전을 던져 $\vert 0\rangle$ 이나 $\vert 1\rangle$ 을 만든 큐비트 $\tfrac12 I$ 와 $\vert 0\rangle$ 처럼 한쪽이 섞인 상태이면 겹칠 벡터가 없다. Uhlmann 정리는 섞인 상태를 더 큰 계의 순수 상태로 바꿔 놓고 그 겹침의 최댓값을 재면 된다고 답하고, 그 값을 행렬 계산 하나로 준다.

# 직관

[밀도 행렬](density-matrix.md) $\tfrac12 I$ 는 두 큐비트의 순수 상태 $\vert\Phi^+\rangle=\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 의 첫 큐비트이고, $\vert 0\rangle\langle 0\vert$ 는 $\vert 0\rangle\otimes\vert\beta\rangle$ 의 첫 큐비트다. $\vert\beta\rangle$ 은 둘째 큐비트의 아무 단위벡터나 된다. 두 순수 상태의 겹침은

$$
\big\vert\langle\Phi^+\vert\thinspace(\vert 0\rangle\otimes\vert\beta\rangle)\big\vert=\tfrac1{\sqrt 2}\vert\langle 0\vert\beta\rangle\vert
$$

이고, $\vert\beta\rangle=\vert 0\rangle$ 으로 고르면 가장 큰 값 $\tfrac1{\sqrt 2}$ 이 나온다.

같은 값을 둘째 큐비트 없이 계산할 수 있다. 두 행렬은 같은 기저에서 대각이고 [고윳값](eigenvalues.md)이 $(\tfrac12,\tfrac12)$ 와 $(1,0)$ 이므로, 고윳값의 제곱근을 짝지어 곱해 더하면 $\sqrt{\tfrac12\cdot 1}+\sqrt{\tfrac12\cdot 0}=\tfrac1{\sqrt 2}$ 이다. Uhlmann 정리는 두 행렬이 같은 기저에서 대각이 아닐 때도 이 계산을 행렬식으로 바꿔 준다.

# 정의

## 충실도

밀도 행렬 $\rho$, $\sigma$ 의 **충실도(fidelity)** 는

$$
F(\rho,\sigma)=\mathrm{tr}\sqrt{\sqrt\rho\thinspace\sigma\sqrt\rho}=\Vert\sqrt\rho\sqrt\sigma\Vert_1
$$

이다. $\Vert A\Vert\_1$ 은 $A$ 의 특이값의 합이다. 순수 상태 둘은 $F=\vert\langle\psi\vert\phi\rangle\vert$, 순수 상태와 밀도 행렬은 $F=\sqrt{\langle\psi\vert\sigma\vert\psi\rangle}$ 이다. 직관 절의 두 상태는 $\sqrt{\langle 0\vert\tfrac12 I\vert 0\rangle}=\tfrac1{\sqrt 2}$ 이다.

## 정화

$\rho\_A$ 의 정화는 $\mathrm{tr}\_B\vert\psi\rangle\langle\psi\vert=\rho\_A$ 인 순수 상태 $\vert\psi\rangle\_{AB}$ 이다. 정화는 $B$ 쪽 유니터리를 빼고 하나로 정해진다. $\vert\psi\rangle$ 과 $\vert\psi'\rangle$ 이 같은 $\rho\_A$ 의 정화이면 $\vert\psi'\rangle=(I\otimes U)\vert\psi\rangle$ 인 유니터리 $U$ 가 있다. 직관 절의 $\vert 0\rangle\otimes\vert\beta\rangle$ 들이 $\vert 0\rangle\langle 0\vert$ 의 정화이고 서로 $U$ 로 이어진다.

# 성질

## Uhlmann 정리

$B$ 의 차원이 $A$ 의 차원 이상일 때

$$
F(\rho,\sigma)=\max\thinspace\vert\langle\psi\vert\phi\rangle\vert
$$

이다. 최댓값은 $\rho$ 의 정화 $\vert\psi\rangle$ 과 $\sigma$ 의 정화 $\vert\phi\rangle$ 전체에 대해 잡고, $\vert\psi\rangle$ 을 하나로 고정하고 $\vert\phi\rangle$ 만 움직여도 같다[^1].

증명의 요지. $\vert\Gamma\rangle=\sum_k\vert k\rangle\otimes\vert k\rangle$ 로 두면 정화는 $\vert\psi\rangle=(\sqrt\rho\otimes V)\vert\Gamma\rangle$, $\vert\phi\rangle=(\sqrt\sigma\otimes W)\vert\Gamma\rangle$ 꼴이다. $\langle\Gamma\vert(X\otimes Y)\vert\Gamma\rangle=\mathrm{tr}(XY^{\mathsf T})$ 이므로 $\langle\psi\vert\phi\rangle=\mathrm{tr}(\sqrt\rho\sqrt\sigma\thinspace U)$ 이고 $U=(V^\dagger W)^{\mathsf T}$ 는 유니터리다. 유니터리 $U$ 에 대한 $\vert\mathrm{tr}(AU)\vert$ 의 최댓값은 $A$ 의 특이값의 합이고, $A=\sqrt\rho\sqrt\sigma$ 의 극분해의 유니터리 부분의 역을 $U$ 로 잡으면 이 값이 나온다.

## 대칭성과 범위

$F(\rho,\sigma)=F(\sigma,\rho)$ 이고 $0\le F\le 1$ 이다. Uhlmann 정리에서 겹침의 최댓값은 두 상태에 대해 대칭이므로 정의의 비대칭한 꼴에서 바로 보이지 않는 대칭성이 나온다. $F=1$ 은 $\rho=\sigma$ 와 동치이고, $F=0$ 은 두 행렬의 고유벡터가 펼치는 공간이 직교하는 것과 동치다.

## 단조성

[양자 채널](quantum-channels.md) $\Phi$ 에 대해 $F(\Phi(\rho),\Phi(\sigma))\ge F(\rho,\sigma)$ 이다. Stinespring 확장으로 $\Phi$ 를 유니터리를 걸고 일부를 버리는 것으로 쓰면, 유니터리는 정화끼리의 겹침을 보존하고 일부를 버린 상태의 정화 가운데에는 원래 정화가 들어 있으므로 Uhlmann 정리의 최댓값이 줄지 않는다.

## 같은 기저에서 대각인 경우

$\rho$ 와 $\sigma$ 가 같은 기저에서 고윳값 $p\_i$, $q\_i$ 로 대각이면 $F=\sum_i\sqrt{p\_iq\_i}$ 이고, 이것을 확률분포의 **Bhattacharyya 계수(Bhattacharyya coefficient)** 라 한다. 직관 절의 둘째 계산이 이 경우다.

## Bures 거리

$D\_B(\rho,\sigma)=\sqrt{2(1-F(\rho,\sigma))}$ 를 **Bures 거리(Bures distance)** 라 한다. 정화들의 거리 $\Vert\vert\psi\rangle-\vert\phi\rangle\Vert$ 의 최솟값이 이것이고, 따라서 밀도 행렬 전체 위의 거리함수다. 직관 절의 두 상태는 $\sqrt{2-\sqrt 2}=0.765$ 다.

# 활용

- 상태 구별. [양자 상태 구별](quantum-state-discrimination.md)의 Fuchs–van de Graaf 부등식은 충실도와 대각합 거리를 서로의 상한과 하한으로 잇는다. 대각합 거리가 계산하기 어려운 증명에서는 Uhlmann 정리로 충실도를 다루고 이 부등식으로 옮긴다.
- 오류정정의 평가. [양자 오류정정부호](quantum-error-correction.md)의 보정 뒤 상태가 원래 상태와 얼마나 같은지를 충실도로 잰다. 상태의 정화와 그 정화가 거친 과정을 함께 보는 얽힘 충실도가 Uhlmann 정리로 정의된다.
- 양자 정보의 복원 가능성. 채널을 거친 뒤 환경이 거의 아무것도 모르면 수신자가 상태를 복원할 수 있다는 정리들이 Uhlmann 정리로 수신자 쪽 유니터리를 만든다. 정화를 고정하고 다른 쪽 유니터리만 고른다는 꼴이 그대로 쓰인다.
- 양자 상전이. 매개변수 $\lambda$ 에 따른 바닥 상태 사이의 충실도가 급히 떨어지는 자리로 양자 상전이를 찾는다.

[^1]: A. Uhlmann, The "transition probability" in the state space of a ∗-algebra, *Reports on Mathematical Physics* 9 (1976), 273–279. 충실도라는 이름과 현재 쓰는 꼴은 R. Jozsa, Fidelity for mixed quantum states, *Journal of Modern Optics* 41 (1994), 2315–2323.

# 연관 문서

## 선수지식

- [양자 상태 구별](quantum-state-discrimination.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #information_theory #linear_algebra
