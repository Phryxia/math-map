# Nesterov 가속법

# 개요

Nesterov 가속법은 이전 걸음의 변위를 갱신식에 더해 [경사하강법](gradient-descent.md)의 수렴률을 올린 1 차 방법이다. 기울기가 $L$ -Lipschitz 인 볼록 함수에서 함수값 오차가 $O(1/k^2)$ 로 줄고, $\mu$ 강볼록이면 조건수 $\kappa=L/\mu$ 에 대한 반복 수 의존이 $\kappa$ 에서 $\sqrt\kappa$ 로 내려간다.

# 직관

$f(x)=\frac{1}{2}(Lx_1^2+\mu x_2^2)$ 를 $0\lt \mu\le L$ 에서 최소화한다. 경사하강법은 좌표마다 따로 굴러가므로 $j$ 번째 좌표가 $x_{j,k+1}=(1-\eta\lambda_j)x_{j,k}$ 를 따르고, 여기서 $\lambda_1=L$, $\lambda_2=\mu$ 다.

$\eta\gt 2/L$ 이면 $\vert 1-\eta L\vert\gt 1$ 이라 첫 좌표가 발산한다. 그래서 $\eta$ 는 $2/L$ 을 넘지 못하고, 둘째 좌표는 한 걸음에 $1-2\mu/L$ 배까지만 준다. $L/\mu$ 가 $1000$ 이면 이 값이 $0.998$ 이고 오차를 절반으로 줄이는 데 $350$ 걸음쯤 든다. 보폭을 더 키울 수 없으니 이 갱신식으로는 더 빠르게 갈 수 없다.

둘째 좌표는 매 걸음 같은 방향으로 조금씩 움직인다. 같은 방향이 이어지면 그 방향으로 더 멀리 가도 되므로, 기울기 항에 직전 변위 $x_k-x_{k-1}$ 을 계수 $\beta$ 를 붙여 더한다.

이 반복은 좌표마다 2 차 점화식이 되고, 특성방정식의 두 근이 복소수이면 두 근의 크기가 모두 $\sqrt\beta$ 다. $\lambda$ 가 $\mu$ 와 $L$ 사이에서 어떤 값이어도 근이 복소수가 되게 $\eta$ 와 $\beta$ 를 잡으면 한 걸음의 수축 비율이 $(\sqrt\kappa-1)/(\sqrt\kappa+1)$ 이다. $\kappa=1000$ 이면 이 값이 $0.94$ 이고 오차를 절반으로 줄이는 데 $11$ 걸음이 든다.

# 정의

$f$ 를 $\mathbb{R}^n$ 에서 정의된 미분가능 볼록 함수, $\nabla f$ 를 $L$ -Lipschitz 라 한다. 최솟값을 $f^\star$ , 최소점을 $x^\star$ 로 쓴다.

## 중공 모멘텀

$$
x_{k+1}=x_k-\eta\thinspace\nabla f(x_k)+\beta\thinspace(x_k-x_{k-1})
$$

이 점화식을 **중공 모멘텀**(heavy ball) 이라 하고 $\beta\in\lbrack 0,1)$ 을 모멘텀 계수라 한다. $x_{-1}=x_0$ 에서 시작하고, $\beta=0$ 이면 경사하강법이다.

## 가속 경사법

**Nesterov 가속법**은 두 열 $x_k$ 와 $y_k$ 를 번갈아 굴린다.

$$
y_k=x_k+\beta_k(x_k-x_{k-1}),\qquad x_{k+1}=y_k-\frac{1}{L}\nabla f(y_k)
$$

계수는 $t_0=1$ , $t_{k+1}=\bigl(1+\sqrt{1+4t_k^2}\bigr)/2$ , $\beta_k=(t_{k-1}-1)/t_k$ 로 정한다. 기울기를 $x_k$ 가 아니라 변위를 미리 더한 $y_k$ 에서 재는 점이 중공 모멘텀과 다르다.

$f$ 가 $\mu$ 강볼록이면 계수를 걸음에 따라 바꾸지 않고 상수로 둔다.

$$
\beta=\frac{\sqrt{L}-\sqrt{\mu}}{\sqrt{L}+\sqrt{\mu}}
$$

# 성질

## 볼록 함수의 $O(1/k^2)$ 수렴

정리. 위 계수를 쓰면 모든 $k\ge 1$ 에서 다음이 성립한다[^1].

$$
f(x_k)-f^\star\le\frac{2L\Vert x_0-x^\star\Vert^2}{(k+1)^2}
$$

증명의 요지. $u_k=x_{k-1}+t_{k-1}(x_k-x_{k-1})-x^\star$ 로 두고

$$
E_k=t_{k-1}^2\bigl(f(x_k)-f^\star\bigr)+\frac{L}{2}\Vert u_k\Vert^2
$$

가 $k$ 에 대해 증가하지 않음을 보인다. 하강 보조정리를 $y_k$ 에서 한 걸음에 적용하고 볼록성 부등식을 $x_k$ 와 $x^\star$ 두 점에서 쓴 뒤, 계수의 관계 $t_k^2-t_k=t_{k-1}^2$ 로 두 항을 맞춘다. $t_k\ge(k+2)/2$ 이므로 $E_1\le E_0$ 에서 결론이 나온다.

## 강볼록 함수의 선형 수렴

정리. $f$ 가 $\mu$ 강볼록이고 상수 계수 $\beta=(\sqrt L-\sqrt\mu)/(\sqrt L+\sqrt\mu)$ 를 쓰면 다음이 성립한다[^1].

$$
f(x_k)-f^\star\le L\Vert x_0-x^\star\Vert^2\bigl(1-\sqrt{\mu/L}\bigr)^{k}
$$

경사하강법의 비율 $1-\mu/L$ 과 견주면 $\varepsilon$ 근사해에 드는 반복 수가 $\kappa\log(1/\varepsilon)$ 에서 $\sqrt\kappa\log(1/\varepsilon)$ 로 줄어든다.

## 1 차 방법의 하한

정리. 차원이 반복 수보다 크면, 기울기 계산만으로 점열을 만드는 어떤 방법에 대해서도 $L$ -smooth 볼록 함수 $f$ 와 시작점 $x_0$ 이 있어 다음이 성립한다[^2].

$$
f(x_k)-f^\star\ge\frac{3L\Vert x_0-x^\star\Vert^2}{32(k+1)^2}
$$

$\mu$ 강볼록 부류에서는 같은 방식으로 수축 비율이 $\bigl(\sqrt\kappa-1\bigr)/\bigl(\sqrt\kappa+1\bigr)$ 보다 작아질 수 없다. 두 하한이 위 두 정리와 $k$ 에 대한 지수까지 일치하므로 Nesterov 가속법은 이 두 부류에서 최적이다.

## 이차함수의 특성근

$f(x)=\frac{1}{2}x^\top Ax$ 이고 $A$ 가 대칭 양정부호이면, 중공 모멘텀은 $A$ 의 고유벡터마다 독립된 점화식으로 갈라진다. 고윳값 $\lambda$ 에 대한 성분의 오차 $e_k$ 는 다음을 따른다.

$$
e_{k+1}=(1+\beta-\eta\lambda)\thinspace e_k-\beta\thinspace e_{k-1}
$$

특성방정식 $z^2-(1+\beta-\eta\lambda)z+\beta=0$ 의 두 근의 곱이 $\beta$ 이므로, 두 근이 복소수이면 크기가 모두 $\sqrt\beta$ 다. 판별식이 음수인 조건은 $\vert 1+\beta-\eta\lambda\vert\lt 2\sqrt\beta$ 다.

$$
\eta=\frac{4}{(\sqrt L+\sqrt\mu)^2},\qquad \beta=\Bigl(\frac{\sqrt L-\sqrt\mu}{\sqrt L+\sqrt\mu}\Bigr)^2
$$

로 두면 $\lambda\in\lbrack\mu,L\rbrack$ 전체에서 이 조건이 만족되고 수축 비율이 $\sqrt\beta=(\sqrt\kappa-1)/(\sqrt\kappa+1)$ 이다. 경사하강법이 같은 함수에서 얻는 비율은 $(\kappa-1)/(\kappa+1)$ 이다.

# 활용

## 복합 목적함수의 근접 가속

목적함수가 $f+g$ 꼴이고 $f$ 가 미분가능, $g$ 가 볼록이며 근접 연산자를 계산할 수 있으면, 가속 경사법의 걸음 $x_{k+1}=y_k-\nabla f(y_k)/L$ 을 근접 걸음으로 바꾼다. 이것이 FISTA(fast iterative shrinkage-thresholding algorithm) 이고 $O(1/k^2)$ 를 그대로 가진다. $g(x)=\lambda\Vert x\Vert\_1$ 로 두면 $\ell^1$ 정칙화 회귀를 푸는 표준 반복이 된다.

## 신경망 학습

[확률적 경사하강법](stochastic-gradient-descent.md)의 갱신식에 모멘텀 항을 붙인 것이 심층 학습의 기본 갱신식이다. [적응적 경사 방법](adaptive-gradient-methods.md)의 Adam 에서 기울기의 지수이동평균 $m_k$ 가 같은 항이다. 기울기가 확률적이면 위 두 정리의 가정이 깨지므로 $O(1/k^2)$ 는 보장되지 않는다.

## 조건수가 큰 이차계

$Ax=b$ 를 $\frac{1}{2}x^\top Ax-b^\top x$ 의 최소화로 보면 이차함수의 특성근 분석이 그대로 적용된다. [Krylov 부분공간 방법](krylov-subspace-methods.md)의 켤레기울기법도 $\sqrt\kappa$ 의존을 얻지만 이차함수에만 쓸 수 있고, 가속 경사법은 같은 의존을 일반 볼록 함수에서 얻는다.

[^1]: Y. Nesterov, *Lectures on Convex Optimization*, 2nd ed., Springer, 2018, Theorem 2.2.2 와 Theorem 2.2.3.
[^2]: 같은 책, Theorem 2.1.7 과 Theorem 2.1.13.

# 연관 문서

## 선수지식

- [경사하강법](gradient-descent.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #machine_learning #linear_algebra
