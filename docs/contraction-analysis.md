# 수축 해석

# 개요

**수축 해석(contraction analysis)** 은 비선형 미분방정식에서 서로 다른 초깃값의 해들이 시간이 지나면 하나로 모이는지를, 해를 구하지 않고 Jacobi 행렬만으로 판정하는 방법이다. 탱크의 수위가 $x'=-2x+\sin x$ 를 따른다고 하면, 수위가 $0$ 인 탱크와 $3$ 인 탱크는 한 시간 뒤 차이가 $0.766$ 으로 줄고 결국 같은 수위가 된다. 수축 해석은 Jacobi 행렬 $-2+\cos x$ 가 어디서나 $-1$ 이하라는 것만으로 두 해의 차이가 $e^{-t}$ 보다 빨리 준다고 결론 내린다.

# 직관

$x'=-2x+\sin x$ 의 두 해 $x(t)$, $y(t)$ 의 차 $\delta=x-y$ 를 본다. 평균값 정리로 어떤 $\xi$ 에서 다음이 성립한다.

$$
\delta'=-2\delta+(\sin x-\sin y)=(-2+\cos\xi)\thinspace\delta
$$

$-2+\cos\xi\le -1$ 이므로 $\vert\delta\vert$ 는 $e^{-t}$ 보다 빨리 준다. $x(0)=0$, $y(0)=3$ 이면 $t=1,2,3$ 에서 차이가 $0.766$, $0.271$, $0.099$ 이고, 상한 $3e^{-t}$ 는 $1.104$, $0.406$, $0.149$ 다.

이 판정에는 평형점이 어디인지도, 해의 식도 쓰지 않았다. 바깥에서 주기적으로 물을 넣어 $x'=-2x+\sin x+\cos t$ 가 되어도 $\cos t$ 는 두 해에 똑같이 더해져 차에서 지워지므로 같은 판정이 성립한다. 초깃값 $0$, $3$, $-2$ 에서 출발한 세 해는 $t=10$ 에서 $-0.67625$, $-0.67622$, $-0.67628$ 로 모인다.

# 정의

## 수축 영역

$x'=f(x,t)$, $x\in\mathbb R^n$ 에서 Jacobi 행렬(Jacobian matrix)을 $J(x,t)=\partial f/\partial x$ 라 한다. 영역 $C$ 의 모든 $x$ 와 $t\ge 0$ 에서 어떤 노름의 [로그 노름](logarithmic-norm.md) $\mu$ 에 대해 $\mu\bigl(J(x,t)\bigr)\le -c\lt 0$ 이면, $C$ 를 비율 $c$ 의 **수축 영역(contraction region)** 이라 한다.[^1] 직관 절은 $n=1$, $C=\mathbb R$, $\mu(J)=J$, $c=1$ 인 경우다.

## 일반화된 Jacobi 행렬

가역 행렬값 함수 $\Theta(x,t)$ 로 좌표를 바꿔 $\delta z=\Theta\thinspace\delta x$ 로 잴 때, 다음을 **일반화된 Jacobi 행렬(generalized Jacobian)** 이라 한다.

$$
F=\Bigl(\dot\Theta+\Theta J\Bigr)\Theta^{-1}
$$

$\mu(F)\le -c\lt 0$ 이면 $\Theta$ 가 정하는 거리로 재어 수축한다고 한다.[^1] 로그 노름 문서의 $A=\begin{pmatrix}-1&4\cr 0&-1\end{pmatrix}$ 는 최대 노름에서 $\mu\_\infty(A)=3$ 이라 수축하지 않는다. $\Theta=\mathrm{diag}(1,k)$ 로 재면 $F=\Theta A\Theta^{-1}$ 의 오른쪽 위 성분이 $4/k$ 가 되어 $\mu\_\infty(F)=-1+4/k$ 이고, $k\gt 4$ 이면 수축한다.

# 성질

## 해들이 하나로 모임

수축 영역이 볼록이고 해들이 그 안에 머물면 두 해 사이의 거리는 $e^{-ct}$ 이하의 비율로 준다.[^1] 증명은 로그 노름 문서의 "두 해 사이의 거리" 와 같다. 두 점을 잇는 선분 위에서 Jacobi 행렬을 적분하고, 로그 노름의 볼록성으로 적분한 행렬의 로그 노름도 $-c$ 이하임을 쓴다.

## 평형점의 유일성

$f$ 가 $t$ 에 의존하지 않고 수축 영역이 $\mathbb R^n$ 전체이면 평형점이 정확히 하나 존재하고 모든 해가 그리로 수렴한다. 해의 흐름 $\varphi_T$ 가 비율 $e^{-cT}$ 의 축소사상이라 [Banach 고정점 정리](banach-fixed-point.md)로 고정점이 존재하고, 그 고정점에서 출발한 해도 다른 해와 거리가 줄어야 하므로 평형점이다. 직관 절의 첫 방정식은 평형점 $0$ 하나를 갖는다.

## 주기 입력에의 동조

$f(x,t)$ 가 $t$ 에 대해 주기 $T$ 이고 $\mathbb R^n$ 전체가 수축 영역이면, 주기 $T$ 인 해가 정확히 하나 존재하고 모든 해가 그 해로 수렴한다.[^1] 한 주기 흐름 $\varphi_T$ 가 축소사상이라 고정점이 하나 있고, 그 점에서 출발한 해가 주기해다. 직관 절의 $\cos t$ 를 더한 방정식이 이 경우이고, 세 해가 모인 곳이 주기 $2\pi$ 인 해다.

## 결합

수축하는 두 계를 이어 붙인 계도 조건에 따라 수축한다.[^1]

- 직렬 결합. $x_1'=f_1(x_1,t)$ 가 수축하고 $x_2'=f_2(x_1,x_2,t)$ 가 $x_1$ 을 고정할 때마다 $x_2$ 에 대해 수축하며 $\partial f_2/\partial x_1$ 이 유계이면, 전체 계가 수축한다.
- 되먹임 결합. 두 계의 일반화된 Jacobi 행렬 $F_1$, $F_2$ 가 수축하고 결합 항이 $\begin{pmatrix}F_1&G\cr -G^{\mathsf T}&F_2\end{pmatrix}$ 꼴이면 2 노름의 로그 노름에서 $G$ 와 $-G^{\mathsf T}$ 가 지워져 전체 계가 수축한다.

# 활용

- 관측기 설계. 상태를 추정하는 관측기의 오차 방정식이 수축하도록 이득을 고르면, 초기 추정이 틀려도 추정값이 참 상태로 지수적으로 수렴한다.[^1]
- 동기화. 같은 진동자 여러 개를 결합한 계에서, 모든 진동자가 같은 상태인 부분공간 쪽으로 수축하는지를 보아 동기화를 판정한다.[^2]
- 수치 적분. 수축하는 계에서는 음함수 Euler 방법의 수치해들도 서로 가까워지므로 전역 오차가 시간에 따라 쌓이지 않는다. 로그 노름 문서의 음함수 Euler 법의 수축이 이것이다.

[^1]: W. Lohmiller, J.-J. E. Slotine, "On contraction analysis for non-linear systems", *Automatica* 34 (1998), 683–696.
[^2]: W. Wang, J.-J. E. Slotine, "On partial contraction analysis for coupled nonlinear oscillators", *Biological Cybernetics* 92 (2005), 38–53.

# 연관 문서

## 선수지식

- [로그 노름](logarithmic-norm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #linear_algebra
