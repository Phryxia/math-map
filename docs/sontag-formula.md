# Sontag 공식

# 개요

**Sontag 공식(Sontag's universal formula)** 은 제어 Lyapunov 함수 하나만 주어졌을 때 그 함수를 줄이는 되먹임 입력을 닫힌 식으로 적는 공식이다. 계 $\dot x\_1=-x\_1+x\_2^2$, $\dot x\_2=u$ 와 함수 $V=(x\_1^2+x\_2^2)/2$ 가 있으면, 점마다 $V$ 를 줄이는 $u$ 는 있지만 그런 값을 점마다 따로 고르면 $u$ 가 끊기거나 무한대로 간다.

Sontag 공식은 $V$ 의 두 방향 미분값만으로 $u$ 를 정하고, 그 $u$ 가 원점 밖에서 매끄럽고 $V$ 를 항상 줄이도록 만든다.

# 직관

[역진 설계](backstepping.md)는 Lyapunov 함수와 되먹임을 함께 만든다. 함수 $V$ 만 먼저 있으면 $u$ 를 따로 정해야 한다. 개요의 계에서 $V$ 의 시간 미분은 다음과 같다.

$$
\dot V=x\_1(-x\_1+x\_2^2)+x\_2u=a+bu,\qquad a=-x\_1^2+x\_1x\_2^2,\quad b=x\_2
$$

점마다 $a+bu\lt 0$ 이 되는 $u$ 를 고르면 된다. $b=0$ 인 직선 $x\_2=0$ 위에서는 $a=-x\_1^2\lt 0$ 이므로 어떤 $u$ 도 된다.

가장 단순한 선택 $u=-b$ 는 점 $(2,3)$ 에서 $a=14$, $b=3$ 이라 $a+bu=14-9=5\gt 0$ 이 되어 $V$ 가 는다. $a$ 가 클 때 $u$ 가 그만큼 커지지 않기 때문이다.

$u=-(a+b^2)/b$ 로 두면 $a+bu=-b^2$ 이라 $V$ 는 항상 준다. 그러나 점 $(1,0.1)$ 에서 $u=9.8$, 점 $(1,0.01)$ 에서 $u=99.98$ 이고, $x\_2=0$ 에서는 정의되지 않는다. $a\lt 0$ 이라 아무 $u$ 나 되는 자리에서 $b$ 로 나누어 값이 커진다.

그래서 $b$ 가 작고 $a\lt 0$ 이면 $u$ 도 작아지는 선택이 필요하다. 다음 식이 그 선택이다.

$$
u=-\frac{a+\sqrt{a^2+b^4}}{b}
$$

점 $(1,0.1)$ 에서 $a=-0.99$ 이고 분자가 $b^4/(2\vert a\vert)$ 에 가까운 $0.00005$ 쯤이라 $u\approx-0.0005$ 다. 점 $(2,3)$ 에서는 $u\approx-10.21$ 이고 $a+bu=-\sqrt{277}\approx-16.64$ 다. 어느 점에서든 $a+bu=-\sqrt{a^2+b^4}$ 이므로 $V$ 가 준다.

# 정의

## 제어 Lyapunov 함수의 두 미분값

계 $\dot x=f(x)+g(x)u$ 와 매끄러운 함수 $V$ 에 대해 다음 두 함수를 둔다. 입력은 실수 하나다.

$$
a(x)=\nabla V(x)\cdot f(x),\qquad b(x)=\nabla V(x)\cdot g(x)
$$

$V$ 가 양의 정부호이고 방사적으로 비유계이며 모든 $x\ne 0$ 에서 $b(x)=0$ 이 $a(x)\lt 0$ 을 함의하면 $V$ 는 제어 Lyapunov 함수(control Lyapunov function)다. 입력에 제한이 없으면 $\inf\_u(a+bu)\lt 0$ 과 이 조건이 같다. 직관 절의 $V$ 는 $b=x\_2$ 가 $0$ 인 곳에서 $a=-x\_1^2$ 이므로 제어 Lyapunov 함수다.

## Sontag 공식

제어 Lyapunov 함수 $V$ 에 대한 Sontag 공식은 다음 되먹임이다[^1].

$$
k(x)=\begin{cases}-\dfrac{a(x)+\sqrt{a(x)^2+b(x)^4}}{b(x)}&b(x)\ne 0\cr 0&b(x)=0\end{cases}
$$

직관 절의 마지막 식이 $b\ne 0$ 인 경우다. 직선 $x\_2=0$ 위에서는 $k=0$ 이고, 직관 절의 계산대로 $x\_2\to 0$ 이면 $k\to 0$ 이라 두 경우가 이어진다.

# 성질

## Lyapunov 함수의 감소

$u=k(x)$ 를 넣은 닫힌 계에서 모든 $x\ne 0$ 에 대해 다음이 성립한다.

$$
\dot V=\begin{cases}-\sqrt{a^2+b^4}&b\ne 0\cr a&b=0\end{cases}
$$

두 경우 모두 음수다. $k$ 가 연속이면 [Lyapunov 안정성](lyapunov-stability.md)의 정리로 원점은 대역 점근 안정이다.

## 원점 밖의 해석성

$f$, $g$, $V$ 가 해석적이면 $k$ 는 $x\ne 0$ 에서 해석적이다. $f$, $g$, $V$ 가 매끄러우면 $k$ 도 원점 밖에서 매끄럽다[^1].

증명의 요지. $q=(a+\sqrt{a^2+b^4})/b$ 는 $bq-a=\sqrt{a^2+b^4}$ 를 제곱하고 $b$ 로 나눈 방정식 $F(a,b,q)=bq^2-2aq-b^3=0$ 을 만족한다. $b=0$, $q=0$ 도 이 방정식을 만족한다. 집합 $S=\lbrace(a,b):b\ne 0\text{ 또는 }a\lt 0\rbrace$ 위에서 $\partial F/\partial q=2(bq-a)$ 는 $2\sqrt{a^2+b^4}$ 이거나 $-2a$ 라서 양수다. 음함수 정리(implicit function theorem)로 $q$ 는 $S$ 위에서 $(a,b)$ 의 해석 함수이고, 제어 Lyapunov 함수의 조건은 $x\ne 0$ 일 때 $(a(x),b(x))\in S$ 라는 것이다.

## 원점에서의 연속성과 작은 제어 성질

$V$ 가 다음을 만족하면 **작은 제어 성질(small control property)** 을 가진다고 한다. 모든 $\varepsilon\gt 0$ 에 대해 $\delta\gt 0$ 이 있어, $0\lt\vert x\vert\lt\delta$ 인 모든 $x$ 에서 $\vert u\vert\lt\varepsilon$ 이고 $a(x)+b(x)u\lt 0$ 인 $u$ 가 존재한다.

$V$ 가 작은 제어 성질을 가지면 $k$ 는 원점에서도 연속이다. 역으로 $k$ 가 원점에서 연속이면 $u=k(x)$ 가 작은 제어 성질의 $u$ 가 된다[^1].

직관 절의 $V$ 는 이 성질을 가진다. $u=-x\_2$ 로 두면 $a+bu=-x\_1^2+x\_1x\_2^2-x\_2^2$ 이고, $\vert x\vert\lt 1/2$ 이면 $\vert x\_1\vert x\_2^2\le x\_2^2/2$ 이므로 이 값은 $-x\_1^2-x\_2^2/2$ 이하다. $\vert u\vert=\vert x\_2\vert$ 이므로 $\delta=\min(\varepsilon,1/2)$ 로 잡으면 된다.

## Artstein 정리

**Artstein 정리(Artstein's theorem)** 는 입력에 대해 아핀인 계 $\dot x=f(x)+g(x)u$ 에 대해 다음 둘이 동치라는 정리다[^2].

- 제어 Lyapunov 함수가 존재한다.
- 원점 밖에서 연속이고 원점을 대역 점근 안정하게 하는 되먹임 $u=k(x)$ 가 존재한다.

Artstein 의 증명은 단위 분할(partition of unity)과 완화 제어(relaxed control)를 써서 되먹임의 존재만 보인다. Sontag 공식은 둘째 항목의 되먹임을 $a$, $b$ 의 식으로 직접 주고, 그 되먹임은 원점 밖에서 매끄럽다. 둘째에서 첫째로 가는 방향은 [역 Lyapunov 정리](converse-lyapunov-theorems.md)로 닫힌 계의 Lyapunov 함수를 만들면 그것이 제어 Lyapunov 함수가 된다는 것이다.

## 이득 여유

입력에 상수 $\kappa\ge 1/2$ 이 곱해져 $u=\kappa k(x)$ 가 들어가도 $\dot V\lt 0$ 이다[^3].

증명의 요지. $b=0$ 이면 $k=0$ 이라 $\dot V=a\lt 0$ 이다. $b\ne 0$ 이면 $r=\sqrt{a^2+b^4}$ 으로 두어 $a+\kappa bk=(1-\kappa)a-\kappa r$ 이고, $r\gt\vert a\vert$ 다.

- $a\ge 0$ 이면 값은 $(1-\kappa)a-\kappa a=(1-2\kappa)a$ 보다 작고, $(1-2\kappa)a\le 0$ 이다.
- $a\lt 0$ 이고 $\kappa\le 1$ 이면 두 항이 모두 $0$ 이하이고 $-\kappa r\lt 0$ 이다.
- $a\lt 0$ 이고 $\kappa\gt 1$ 이면 값은 $(1-\kappa)a+\kappa a=a\lt 0$ 보다 작다.

$\kappa\lt 1/2$ 이면 $a\gt 0$ 이고 $b$ 가 작은 점에서 값이 $(1-2\kappa)a\gt 0$ 에 가까워 $V$ 가 늘 수 있다. 직관 절의 점 $(2,3)$ 에서는 $\kappa=0.4$ 일 때 $0.6\cdot 14-0.4\cdot 16.64\approx 1.74\gt 0$ 이다.

## 여러 입력

입력이 $u\in\mathbb R^m$ 이고 $g(x)$ 가 $n\times m$ 행렬이면 $b(x)=\nabla V(x)^{\mathsf T}g(x)$ 는 길이 $m$ 의 행벡터다. 공식은 다음과 같다[^1].

$$
k(x)=-\frac{a+\sqrt{a^2+\Vert b\Vert^4}}{\Vert b\Vert^2}\thinspace b^{\mathsf T}\qquad(b\ne 0)
$$

$b=0$ 이면 $k=0$ 이다. $\dot V=a+bk=-\sqrt{a^2+\Vert b\Vert^4}$ 이고, 해석성과 연속성의 성질도 같다.

## 가중치를 넣은 공식과 선형 이차 조절기

$b^4$ 자리에 $q(x)b^2$ 을 넣은 공식 $k=-(a+\sqrt{a^2+q(x)b^2})/b$ 도 같은 방식으로 $V$ 를 줄인다. 여기서 $q$ 는 양의 정부호 함수다. Freeman 과 Primbs 는 $V$ 의 등위면이 비용 $\int(q(x)+u^2)\thinspace dt$ 의 최적 비용 함수의 등위면과 같으면 이 공식이 최적 되먹임이 됨을 보였다[^4].

스칼라 계 $\dot x=x+u$ 와 $V=x^2/2$ 에서 $a=x^2$, $b=x$ 이고 $b^4=x^2b^2$ 이므로 원래 공식은 $q=x^2$ 인 경우다. 공식은 다음을 준다.

$$
k(x)=-\frac{x^2+\sqrt{2}\thinspace x^2}{x}=-(1+\sqrt 2)\thinspace x
$$

비용 $\int(x^2+u^2)\thinspace dt$ 의 [선형 이차 조절기](linear-quadratic-regulator.md)는 Riccati 방정식 $2p-p^2+1=0$ 의 양의 해 $p=1+\sqrt 2$ 로 $u=-px$ 를 주므로 두 되먹임이 같다.

# 활용

- 역진 설계와의 조합. 역진 설계로 만든 제어 Lyapunov 함수에 Sontag 공식을 쓰면 단계마다 교차항을 지우는 대신 $a$, $b$ 만으로 되먹임을 얻는다. 이득 여유 절의 $[1/2,\infty)$ 여유가 함께 따라온다[^3].
- 역최적 제어(inverse optimal control). 가중치를 넣은 공식 절의 결과처럼, Sontag 공식은 어떤 비용에 대한 최적 되먹임이 되므로 최적 제어의 이득 여유와 강건성을 물려받는다[^3].
- 점별 최소 노름 제어(pointwise min-norm control). 점마다 $a+bu\le-\sigma(x)$ 를 만족하는 $u$ 가운데 노름이 가장 작은 것을 고르는 되먹임이다[^5]. 제약이 하나인 [이차 계획법](quadratic-programming.md)의 해로 적히며, 로봇 제어에서 제어 Lyapunov 함수 조건과 [제어 장벽 함수](control-barrier-functions.md)의 안전 조건을 함께 넣은 이차 계획으로 쓰인다.

[^1]: E. D. Sontag, "A 'universal' construction of Artstein's theorem on nonlinear stabilization", *Systems & Control Letters* 13 (1989), 117–123.
[^2]: Z. Artstein, "Stabilization with relaxed controls", *Nonlinear Analysis: Theory, Methods & Applications* 7 (1983), 1163–1173.
[^3]: R. Sepulchre, M. Janković, P. V. Kokotović, *Constructive Nonlinear Control*, Springer, 1997, 3 장.
[^4]: R. A. Freeman, J. A. Primbs, "Control Lyapunov functions: new ideas from an old source", *Proceedings of the 35th IEEE Conference on Decision and Control* (1996), 3926–3931.
[^5]: R. A. Freeman, P. V. Kokotović, *Robust Nonlinear Control Design*, Birkhäuser, 1996, 3 장.

# 연관 문서

## 선수지식

- [역진 설계](backstepping.md)

## 더 알아보기

- [Brockett 조건](brockett-condition.md)
- [제어 장벽 함수](control-barrier-functions.md)

#optimization #analysis
