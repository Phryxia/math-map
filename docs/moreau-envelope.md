# Moreau 포락

# 개요

**Moreau 포락(Moreau envelope)** 은 꺾인 볼록 함수의 꺾인 자리를 포물선으로 깎아 매끄럽게 만든 함수다. 함수 $\vert x\vert$ 는 $x=0$ 에서 꺾여 있어 그 자리에서 기울기가 없고, [경사하강법](gradient-descent.md)은 기울기가 있어야 한 걸음을 밟는다. Moreau 포락은 $\vert x\vert$ 를 $0$ 근처에서는 포물선 $x^2/2$, 멀리서는 $\vert x\vert-1/2$ 인 함수로 바꾸고, 이 함수는 어디서나 미분가능하면서 최소점이 원래 함수와 같으므로 기울기 방법으로 원래 문제를 푼다.

# 직관

$g(x)=\vert x\vert$ 를 최소화하려고 한다. 점 $z$ 마다 $z$ 에서 너무 멀리 가지 않으면서 $g$ 를 줄이는 문제 $\min_x\thinspace(\vert x\vert+\frac12(x-z)^2)$ 를 푼다. [근접 경사법](proximal-gradient-method.md)의 직관 절에서 이 최소점을 이미 계산했다. $z\gt 1$ 이면 $z-1$ , $z\lt -1$ 이면 $z+1$ , 그 사이이면 $0$ 이다.

최소점 대신 최솟값을 $z$ 의 함수로 적는다. $z=3$ 이면 최소점이 $2$ 이고 최솟값은 $\vert 2\vert+\frac12(2-3)^2=2.5$ 다. $z=0.5$ 이면 최소점이 $0$ 이고 최솟값은 $0+\frac12(0.5)^2=0.125$ 다. 일반적으로 $\vert z\vert\gt 1$ 에서 최솟값은 $\vert z\vert-\frac12$ 이고, $\vert z\vert\le 1$ 에서 $\frac12 z^2$ 이다.

이 함수는 $\vert z\vert=1$ 에서 두 식의 값이 $\frac12$ 로 같고 기울기도 $\pm 1$ 로 같아서 꺾인 자리가 없다. 기울기는 $\vert z\vert\le 1$ 에서 $z$ , 그 밖에서 $\pm 1$ 이고, 어느 경우든 $z$ 에서 최소점을 뺀 값이다. 최솟값 $0$ 은 $z=0$ 에서만 나오므로 최소점도 $\vert x\vert$ 와 같다. 이렇게 $z$ 마다 최솟값을 모은 함수를 Moreau 포락이라 부른다.

# 정의

$g:\mathbb R^n\to\mathbb R\cup\lbrace +\infty\rbrace$ 가 고유하고 볼록이고 하반연속이라 하고, $\eta\gt 0$ 이라 한다. $g$ 의 **Moreau 포락** 은 다음 함수다.

$$
e_{\eta g}(z)=\min_{x\in\mathbb R^n}\Bigl(g(x)+\frac{1}{2\eta}\Vert x-z\Vert^2\Bigr)
$$

최소를 주는 점이 [근접 경사법](proximal-gradient-method.md)에서 정의한 근접 연산자 $\mathrm{prox}\_{\eta g}(z)$ 이다. 괄호 안이 강볼록이라 최소점이 하나뿐이므로 $e_{\eta g}$ 는 모든 $z$ 에서 유한한 값을 갖는다. $\eta$ 가 작을수록 $z$ 에서 멀어지는 벌이 커진다. 이 변환을 Moreau–Yosida 정칙화(Moreau–Yosida regularization)라고도 부른다.

## Huber 함수

직관 절의 계산을 $\eta$ 에 대해 다시 하면 $g(x)=\vert x\vert$ 의 포락은 다음이다.

$$
e_{\eta g}(z)=\begin{cases}\dfrac{z^2}{2\eta} & \vert z\vert\le\eta\cr \vert z\vert-\dfrac{\eta}{2} & \vert z\vert\gt\eta\end{cases}
$$

이 함수를 **Huber 함수(Huber function)** 라 한다. $\eta=1$ 이면 직관 절의 함수다. 폭 $\eta$ 안에서는 포물선이고, 밖에서는 $\vert z\vert$ 를 $\eta/2$ 만큼 내린 것이다.

## 거리의 제곱

볼록집합 $C$ 의 지시함수 $\iota_C$ 를 $g$ 로 두면 최소화가 $C$ 안에서만 일어나고 최소점은 $C$ 로의 사영이다. 포락은 $z$ 에서 $C$ 까지의 거리 $d_C(z)$ 로 적힌다.

$$
e_{\eta\iota_C}(z)=\frac{1}{2\eta}d_C(z)^2
$$

$C=\lbrack -1,1\rbrack$ 이면 $z=3$ 에서 사영이 $1$ 이고 포락은 $\frac{1}{2\eta}\cdot 4$ 다.

# 성질

아래에서 $u=\mathrm{prox}\_{\eta g}(z)$ 로 쓴다.

## 기울기와 매끄러움

정리. $e_{\eta g}$ 는 볼록이고 $\mathbb R^n$ 전체에서 미분가능하며 다음이 성립한다[^1].

$$
\nabla e_{\eta g}(z)=\frac{1}{\eta}\bigl(z-\mathrm{prox}\_{\eta g}(z)\bigr)
$$

기울기는 $1/\eta$ Lipschitz 다.

증명의 요지. 공액을 정의대로 계산하면 $z$ 와 $x$ 에 대한 상한이 갈라져 다음이 나온다.

$$
e_{\eta g}^\ast(y)=g^\ast(y)+\frac{\eta}{2}\Vert y\Vert^2
$$

우변은 $\eta$ 강볼록이다. $e_{\eta g}$ 는 어디서나 유한한 볼록 함수이므로 [볼록 공액](convex-conjugate.md)의 Fenchel–Moreau 정리로 $e_{\eta g}=(g^\ast+\frac{\eta}{2}\Vert\cdot\Vert^2)^\ast$ 이고, 같은 문서의 강볼록성과 매끄러움의 대응에서 기울기가 $1/\eta$ Lipschitz 다. 기울기의 식은 다음에서 나온다. 모든 $w$ 에서 $e_{\eta g}(w)\le g(u)+\frac{1}{2\eta}\Vert u-w\Vert^2$ 이고 $w=z$ 에서 등호다. 미분가능한 함수를 위에서 받치며 $z$ 에서 닿는 함수의 기울기는 그 점에서 같으므로 $\nabla e_{\eta g}(z)=(z-u)/\eta$ 다.

## 최솟값과 최소점의 보존

정리. $\inf e_{\eta g}=\inf g$ 이고, $e_{\eta g}$ 의 최소점 집합과 $g$ 의 최소점 집합이 같다.

증명의 요지. 정의에서 $x=z$ 를 넣으면 $e_{\eta g}\le g$ 이고, 괄호 안이 $g(x)$ 이상이므로 $e_{\eta g}\ge\inf g$ 다. 최소점에 대해서는 $z$ 가 $e_{\eta g}$ 의 최소점인 것과 $\nabla e_{\eta g}(z)=0$ , 곧 $z=\mathrm{prox}\_{\eta g}(z)$ 인 것이 동치다. 근접 연산자의 부분미분 특징 $(z-u)/\eta\in\partial g(u)$ 에 $u=z$ 를 넣으면 $0\in\partial g(z)$ 이고, 이것이 $z$ 가 $g$ 의 최소점이라는 조건이다.

## 근사의 오차

정리. $g$ 가 $M$ Lipschitz 이면 모든 $z$ 에서 다음이 성립한다.

$$
g(z)-\frac{\eta M^2}{2}\le e_{\eta g}(z)\le g(z)
$$

증명의 요지. $g(z)-e_{\eta g}(z)=g(z)-g(u)-\frac{1}{2\eta}\Vert u-z\Vert^2\le M\Vert u-z\Vert-\frac{1}{2\eta}\Vert u-z\Vert^2$ 이고, 우변을 $\Vert u-z\Vert$ 에 대한 이차식으로 보아 최대화하면 $\eta M^2/2$ 다. Huber 함수는 $M=1$ 이고 $\vert z\vert\gt\eta$ 에서 차이가 정확히 $\eta/2$ 이므로 이 한계에서 등호가 성립한다.

## Moreau 분해

정리. 모든 $z$ 에서 다음 Moreau 분해(Moreau decomposition)가 성립한다[^2].

$$
z=\mathrm{prox}\_{g}(z)+\mathrm{prox}\_{g^\ast}(z),\qquad e_{g}(z)+e_{g^\ast}(z)=\frac12\Vert z\Vert^2
$$

증명의 요지. $u=\mathrm{prox}\_g(z)$ 인 것은 $z-u\in\partial g(u)$ 와 동치다. Fenchel–Young 부등식의 등호 조건과 $g^{\ast\ast}=g$ 로 이것은 $u\in\partial g^\ast(z-u)$ 와 동치이고, 근접 연산자의 특징을 $g^\ast$ 에 쓰면 $z-u=\mathrm{prox}\_{g^\ast}(z)$ 다. 둘째 식은 두 포락의 최소점에 이 관계와 Fenchel–Young 등호 $g(u)+g^\ast(z-u)=\langle u,z-u\rangle$ 를 넣어 계산하면 나온다.

$g(x)=\vert x\vert$ 이면 $g^\ast=\iota\_{\lbrack -1,1\rbrack}$ 이다. $z=3$ 에서 $\mathrm{prox}\_g(3)=2$ , $\mathrm{prox}\_{g^\ast}(3)=1$ 이고 합이 $3$ 이다. 포락은 Huber 함수의 값 $2.5$ 와 거리 제곱 절반 $2$ 이고 합이 $\frac12\cdot 9$ 다.

# 활용

- 근접점 방법(proximal point method). 반복 $x_{k+1}=\mathrm{prox}\_{\eta g}(x_k)$ 는 기울기 공식으로 $x_{k+1}=x_k-\eta\nabla e_{\eta g}(x_k)$ 와 같다. 곧 $e_{\eta g}$ 에 보폭 $\eta$ 로 [경사하강법](gradient-descent.md)을 쓴 것이고, 기울기가 $1/\eta$ Lipschitz 이므로 경사하강법의 $O(1/k)$ 수렴 정리가 그대로 적용된다. 최소점이 보존되므로 극한은 $g$ 의 최소점이다.
- 평활화(smoothing). 미분 불가능한 $M$ Lipschitz 항을 $e_{\eta g}$ 로 바꾸면 오차가 $\eta M^2/2$ 이하인 매끄러운 문제가 되고, 여기에 [Nesterov 가속법](nesterov-acceleration.md)을 쓸 수 있다. $\eta$ 를 목표 오차에 맞춰 줄이면 원래 문제의 근사해가 나온다.
- Huber 손실(Huber loss). 회귀에서 잔차의 절댓값 대신 Huber 함수를 쓰면 작은 잔차는 제곱으로, 큰 잔차는 절댓값으로 벌한다. 이상치 하나가 해를 크게 옮기지 않으면서 손실이 미분가능하다.
- 벌점법. 제약 $x\in C$ 를 지시함수 대신 거리의 제곱 $\frac{1}{2\eta}d_C(x)^2$ 로 목적함수에 더하면 제약 없는 매끄러운 문제가 된다. $\eta\to 0$ 이면 벌점이 지시함수에 가까워진다.
- 근접 연산자의 계산. Moreau 분해로 $g^\ast$ 의 근접 연산자를 알면 $g$ 의 근접 연산자가 $z-\mathrm{prox}\_{g^\ast}(z)$ 로 나온다. 노름의 공액은 쌍대 노름 단위공의 지시함수이므로, 노름의 근접 연산자가 단위공으로의 사영에서 구해진다. [근접 경사법](proximal-gradient-method.md)의 연성 문턱이 $\lbrack -1,1\rbrack$ 로의 사영을 $z$ 에서 뺀 것이다.

[^1]: H. H. Bauschke and P. L. Combettes, *Convex Analysis and Monotone Operator Theory in Hilbert Spaces*, 2판, Springer, 2017, 12 장.
[^2]: J.-J. Moreau, *Proximité et dualité dans un espace hilbertien*, Bulletin de la Société Mathématique de France 93, 1965, 273–299.

# 연관 문서

## 선수지식

- [근접 경사법](proximal-gradient-method.md)
- [볼록 공액](convex-conjugate.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #analysis #machine_learning #functional_analysis
