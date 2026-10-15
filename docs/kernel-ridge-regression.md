# 핵 능형회귀

# 개요

핵 능형회귀는 [재생핵 Hilbert 공간](reproducing-kernel-hilbert-space.md)에서 제곱오차와 노름 벌점의 합을 최소화하는 회귀다. 표현자 정리가 해를 자료점의 핵 함수들의 선형결합으로 묶으므로, 무한차원 공간에서의 최소화가 $n$ 차 선형계 하나로 끝난다.

해는 핵 행렬 $K$ 와 벌점 상수 $\lambda$ 로 $\alpha=(K+\lambda I)^{-1}y$ 다. 특징 좌표를 만들지 않고 핵의 값만으로 예측값을 계산한다.

# 직관

[선형회귀](linear-regression.md)의 능형 판본은 $\Vert y-Xw\Vert^2+\lambda\Vert w\Vert^2$ 을 최소화하고 해가 $w=(X^\top X+\lambda I)^{-1}X^\top y$ 다. 역행렬을 취하는 행렬의 크기는 좌표의 개수 $d$ 다. 좌표를 늘려 비선형 모형을 만들면 이 크기가 함께 커진다.

자료 $n$ 개가 $d$ 보다 훨씬 적을 때도 $d\times d$ 행렬을 다루어야 하는가. 정규방정식을 다시 보면

$$(X^\top X+\lambda I)^{-1}X^\top = X^\top(XX^\top+\lambda I)^{-1}$$

이 성립한다. 양변에 각각 $(X^\top X+\lambda I)$ 와 $(XX^\top+\lambda I)$ 를 곱해 $X^\top XX^\top$ 를 두 방향으로 묶으면 같은 식이 나온다. 오른쪽에서 역행렬을 취하는 행렬은 $n\times n$ 이다.

$XX^\top$ 의 $(i,j)$ 성분은 $\langle x_i,x_j\rangle$ 이고 예측값 $\langle w,x\rangle$ 도 $\langle x_i,x\rangle$ 들의 결합이다. 자료가 내적으로만 들어가므로 내적을 핵 $K(x,x')$ 으로 바꾼다. 좌표의 개수가 무한이어도 $n\times n$ 행렬 하나를 역행렬 취하면 예측이 끝난다.

# 정의

## 최소화 문제

양의 준정부호 핵 $K$ 의 재생핵 Hilbert 공간 $\mathcal H$ 와 자료 $(x_i,y_i)\_{i=1}^n$, 상수 $\lambda\gt 0$ 에 대해

$$\min\_{f\in\mathcal H}\ \sum_{i=1}^n(y_i-f(x_i))^2+\lambda\Vert f\Vert\_{\mathcal H}^2$$

의 해를 구하는 것이 **핵 능형회귀**다.

## 해의 꼴

핵 행렬을 $K\_{ij}=K(x_i,x_j)$ 라 하면 해는

$$\hat f(x)=\sum_{i=1}^n\alpha_iK(x_i,x),\qquad \alpha=(K+\lambda I)^{-1}y$$

다. $K$ 가 양의 준정부호이고 $\lambda\gt 0$ 이므로 $K+\lambda I$ 는 가역이다.

# 성질

## 해의 유도

표현자 정리에서 최소해가 $f=\sum_i\alpha_iK\_{x_i}$ 꼴이다. 재생 성질로 $f(x_j)=\sum_i\alpha_iK(x_i,x_j)=(K\alpha)\_j$ 이고 $\Vert f\Vert^2=\alpha^\top K\alpha$ 이므로 목적함수가

$$\Vert y-K\alpha\Vert^2+\lambda\alpha^\top K\alpha$$

가 된다. $\alpha$ 에 대한 기울기를 $0$ 으로 두면 $K(K+\lambda I)\alpha=Ky$ 이고, $K$ 의 상공간에서 $(K+\lambda I)\alpha=y$ 가 그 해를 준다.

## 유일성과 안정성

목적함수가 $\mathcal H$ 에서 강볼록이므로 해가 유일하다. $\lambda$ 는 핵 행렬의 고윳값에 더해지므로, 고윳값이 $0$ 에 가까운 방향에서도 역행렬의 성분이 $1/\lambda$ 를 넘지 않는다. 자료점이 가까이 몰려 $K$ 가 특이에 가까워도 계수가 폭발하지 않는다.

## 평활 작용소

훈련점에서의 예측값 벡터는 $\hat y=K(K+\lambda I)^{-1}y$ 다. $K$ 의 고유분해를 $\sum_j\mu_ju_ju_j^\top$ 이라 하면

$$\hat y=\sum_j\frac{\mu_j}{\mu_j+\lambda}\thinspace u_ju_j^\top y$$

이고, 고윳값이 큰 방향은 거의 그대로 지나가고 작은 방향은 $\mu_j/\lambda$ 배로 줄어든다. $\lambda$ 가 결정하는 것은 어느 고유방향까지 자료를 따라갈지다. 유효 자유도 $\sum_j\mu_j/(\mu_j+\lambda)$ 가 그 개수를 센다.

## Gauss 과정 회귀와의 일치

[Gauss 과정](gaussian-processes.md)의 사전분포를 공분산핵 $K$ 로 두고 관측잡음의 분산을 $\lambda$ 로 두면 사후평균이 $\hat f$ 와 같다. 한쪽은 노름 벌점이 붙은 최소화의 해이고 다른 쪽은 조건부 기댓값이지만 식이 같다. 사후분산은 최소화 쪽에 대응하는 양이 없다.

# 활용

## 비선형 회귀

Gauss 핵을 쓰면 특징 좌표를 적지 않고 매끄러운 비선형 함수를 적합한다. 계산량은 핵 행렬의 분해에 드는 $n^3$ 이고 좌표의 개수와 무관하다. 표본이 커지면 이 비용이 문제가 되므로 핵 행렬의 저계수 근사를 쓴다.

## 정칙화 상수의 선택

$\lambda$ 가 [편향-분산 분해](bias-variance-decomposition.md)의 두 항 가운데 어느 쪽을 줄일지 정한다. 작으면 자료를 따라가 분산이 커지고, 크면 함수가 평평해져 편향이 커진다. [교차검증](cross-validation.md)으로 고르거나 유효 자유도를 보고 정한다.

## 다른 손실로의 확장

제곱오차를 힌지 손실로 바꾸면 [서포트 벡터 머신](support-vector-machine.md)이고, $\varepsilon$ 관용 손실로 바꾸면 서포트 벡터 회귀다. 표현자 정리는 손실이 자료점의 함숫값에만 의존하면 성립하므로 해의 꼴은 셋 모두 같다.

# 연관 문서

## 선수지식

- [선형회귀](linear-regression.md)
- [재생핵 Hilbert 공간](reproducing-kernel-hilbert-space.md)

## 더 알아보기

아직 연결한 문서가 없다.

#machine_learning #statistics #linear_algebra
